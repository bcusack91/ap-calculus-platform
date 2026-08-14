import { prisma } from '@/lib/prisma'
import { generateExitQuiz } from '@/data/exit-quizzes'

/**
 * Auto-generated in-class slide decks (owner spec, Aug 2026: ~25 slides ≈ one
 * 45–60 min teaching block following the natural teaching arc — 1–2 intro
 * slides on what will be covered, then repeating beats of 3–4 concept/equation
 * slides → worked example(s) → a poll on what was JUST taught, closing with
 * the exit-quiz handoff).
 *
 * Content slides come from the topic's lesson markdown (Topic.textContent —
 * clean `##`-sectioned markdown with $…$ LaTeX, rendered client-side through
 * MathText). Poll slides draw multiple-choice questions from the SAME
 * exit-quiz pool the topic's credit loop uses, so in-class polling previews
 * exactly what homework will grade.
 *
 * ORDERING INVARIANT: a poll may only appear AFTER the content that teaches
 * its concepts. Each poll/example is term-overlap-scored against every
 * content segment and placed after its best match; anything that can't be
 * confidently matched goes to a "review" run at the END of the deck (by then
 * everything has been presented), never before the material. This replaced
 * the original even-interleave, which could ask about e.g. circuit current
 * before circuits had been introduced.
 */

export type Slide =
  | { kind: 'title'; title: string; subtitle: string }
  | { kind: 'content'; title: string; blocks: string[] }
  | { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }
  | { kind: 'quiz'; topicSlug: string; title: string }

const MAX_CONTENT_SLIDES = 15
const MAX_POLLS = 5
const MAX_BLOCKS_PER_SLIDE = 6
const MAX_EXAMPLES = 3
const SEGMENT_SIZE = 3 // content slides per teaching beat (concepts → example → poll)

type ContentSlide = { kind: 'content'; title: string; blocks: string[] }
type PollSlide = { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }

// ---------- Relevance matching (poll/example → the segment that taught it) ----------

const STOPWORDS = new Set([
  'the', 'and', 'for', 'that', 'with', 'this', 'which', 'what', 'from', 'are', 'was',
  'were', 'has', 'have', 'had', 'not', 'but', 'can', 'will', 'when', 'where', 'how',
  'why', 'all', 'each', 'any', 'its', 'his', 'her', 'their', 'they', 'them', 'there',
  'then', 'than', 'these', 'those', 'also', 'into', 'onto', 'upon', 'about', 'between',
  'after', 'before', 'because', 'while', 'over', 'under', 'more', 'less', 'most',
  'least', 'only', 'some', 'such', 'same', 'other', 'both', 'may', 'might', 'per',
  'via', 'you', 'your', 'one', 'two', 'three', 'first', 'second', 'third', 'use',
  'used', 'using', 'uses', 'does', 'did', 'been', 'being', 'would', 'could', 'should',
  'must', 'many', 'much', 'very', 'just', 'like', 'following', 'value', 'values',
  'answer', 'question', 'true', 'false', 'correct', 'best', 'find', 'given', 'shown',
  'example', 'consider', 'suppose', 'let', 'new', 'way', 'means', 'called',
])

/** Meaningful lowercase terms of a chunk of slide/poll text (LaTeX stripped). */
function termsOf(text: string): Set<string> {
  const cleaned = text
    .replace(/\\[a-zA-Z]+/g, ' ') // LaTeX commands (\frac, \pi, …) are noise
    .replace(/[${}^_|]/g, ' ')
    .toLowerCase()
  const out = new Set<string>()
  for (const w of cleaned.split(/[^a-z]+/)) {
    if (w.length >= 3 && !STOPWORDS.has(w)) out.add(w)
  }
  return out
}

function slideText(s: ContentSlide): string {
  return `${s.title} ${s.blocks.join(' ')}`
}

/**
 * Best segment for a poll/example: rarity-weighted term overlap (a term that
 * appears in only one segment is a much stronger signal than one that appears
 * everywhere). Ties break toward the LATER segment so the concept is
 * guaranteed to have been covered. Returns -1 when nothing overlaps enough to
 * trust (< 2 shared terms) — the caller sends those to the end-of-deck review
 * run rather than risk asking before teaching.
 */
function bestSegment(itemTerms: Set<string>, segTerms: Set<string>[]): number {
  let bestIdx = -1
  let bestScore = 0
  for (let i = 0; i < segTerms.length; i++) {
    let overlap = 0
    let score = 0
    for (const t of itemTerms) {
      if (!segTerms[i].has(t)) continue
      overlap++
      let df = 0
      for (const seg of segTerms) if (seg.has(t)) df++
      score += 1 / df
    }
    if (overlap >= 2 && score >= bestScore) {
      bestScore = score
      bestIdx = i
    }
  }
  return bestIdx
}

/** Lesson markdown → content slides: one per `##` section, long sections split. */
function contentSlidesFrom(markdown: string, fallbackTitle: string): { kind: 'content'; title: string; blocks: string[] }[] {
  const slides: { kind: 'content'; title: string; blocks: string[] }[] = []
  const lines = markdown.split('\n')
  let currentTitle = fallbackTitle
  let blocks: string[] = []
  let paragraph: string[] = []
  let table: string[] = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(paragraph.join(' '))
      paragraph = []
    }
  }
  const flushTable = () => {
    if (table.length > 0) {
      // One block with newlines intact — MathText/renderRichText renders
      // pipe tables, but only when the rows stay on separate lines.
      blocks.push(table.join('\n'))
      table = []
    }
  }
  const flushSlide = () => {
    flushTable()
    flushParagraph()
    while (blocks.length > 0) {
      slides.push({ kind: 'content', title: currentTitle, blocks: blocks.slice(0, MAX_BLOCKS_PER_SLIDE) })
      blocks = blocks.slice(MAX_BLOCKS_PER_SLIDE)
    }
    blocks = []
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (/^# [^#]/.test(line)) continue // the H1 becomes the deck title slide
    const isTableRow = /^\s*\|.*\|\s*$/.test(line)
    if (!isTableRow) flushTable()
    const h2 = line.match(/^##+\s+(.*)/)
    if (h2) {
      flushSlide()
      currentTitle = h2[1].trim()
      continue
    }
    if (line.trim() === '') { flushParagraph(); continue }
    if (isTableRow) {
      flushParagraph()
      table.push(line.trim())
      continue
    }
    // Bullets, display math, and bold "Example:" lines are standalone blocks.
    if (/^\s*[-*]\s+/.test(line) || /^\$\$/.test(line.trim()) || /^\*\*/.test(line.trim())) {
      flushParagraph()
      blocks.push(line.trim())
    } else {
      paragraph.push(line.trim())
    }
  }
  flushTable()
  flushSlide()
  return slides.slice(0, MAX_CONTENT_SLIDES)
}

/**
 * Build the full deck for a topic. Structure: title → repeating
 * [~3 content, 1 poll] → closing exit-quiz slide.
 */
export async function generateSlideDeck(topicSlug: string): Promise<{ title: string; slides: Slide[] }> {
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    select: {
      title: true, textContent: true,
      category: { select: { course: { select: { name: true } } } },
      flashcards: { select: { front: true, back: true }, take: 12 },
      exampleProblems: { select: { question: true, solution: true }, take: 4 },
    },
  })
  if (!topic) throw new Error(`Unknown topic: ${topicSlug}`)

  const content = contentSlidesFrom(topic.textContent ?? '', topic.title)

  // The INTERACTIVE LESSON registry holds the real teaching content for most
  // topics (Topic.textContent is often just a summary). When the markdown is
  // thin, mine the lesson's text sections for slides — and keep its embedded
  // multiple-choice exercises as a poll source for topics whose exit-quiz
  // pool is missing. Loaded lazily; lesson chunks load per topic.
  // Polls from the topic's exit-quiz pool — tried FIRST so lesson mining
  // knows whether it also needs to hunt for poll material.
  let polls: Slide[] = []
  try {
    const pool = await generateExitQuiz(topicSlug, MAX_POLLS * 2 + 4)
    const seen = new Set<string>()
    for (const q of pool) {
      const raw = q as unknown as Record<string, unknown>
      const correctIndex = (raw.correctAnswer ?? raw.correctIndex ?? 0) as number
      const stem = q.question.trim().toLowerCase()
      if (seen.has(stem)) continue
      seen.add(stem)
      polls.push({ kind: 'poll', question: q.question, options: q.options, correctIndex, explanation: q.explanation })
      if (polls.length >= MAX_POLLS) break
    }
  } catch { polls = [] }

  const baseThin = content.length < 6
  const lessonPolls: Slide[] = []
  if (baseThin || polls.length < 2) {
    try {
      const reg = await import('@/data/interactive-lessons/registry')
      const cfg = reg.getInteractiveTopicConfig(topicSlug)
      const partCount = cfg?.parts.length ?? 0
      for (let part = 1; part <= partCount && (content.length < MAX_CONTENT_SLIDES || lessonPolls.length < MAX_POLLS); part++) {
        const data = await reg.getInteractiveLessonData(topicSlug, part).catch(() => null)
        for (const sec of data?.sections ?? []) {
          const secType = (sec as { type?: string }).type
          if (secType === 'text' && baseThin && typeof sec.content === 'string' && content.length < MAX_CONTENT_SLIDES) {
            // Drop lesson-navigation lines ("Part 3 of 7 — …") — deck pacing
            // is the teacher's, not the lesson's.
            const cleaned = sec.content.replace(/^\*\*Part \d+ of \d+.*$/gm, '')
            for (const slideFromLesson of contentSlidesFrom(cleaned, topic.title)) {
              if (content.length >= MAX_CONTENT_SLIDES) break
              if (slideFromLesson.blocks.length > 0) content.push(slideFromLesson)
            }
          }
          const exercise = (sec as { exercise?: { questions?: unknown[] } }).exercise
          for (const q of exercise?.questions ?? []) {
            if (lessonPolls.length >= MAX_POLLS) break
            const qq = q as { question?: unknown; options?: unknown; correctAnswer?: unknown; explanation?: unknown }
            if (
              typeof qq.question === 'string' &&
              Array.isArray(qq.options) && qq.options.length >= 2 && qq.options.every(o => typeof o === 'string') &&
              typeof qq.correctAnswer === 'number' && qq.correctAnswer >= 0 && qq.correctAnswer < qq.options.length
            ) {
              lessonPolls.push({
                kind: 'poll',
                question: qq.question,
                options: qq.options as string[],
                correctIndex: qq.correctAnswer,
                explanation: typeof qq.explanation === 'string' ? qq.explanation : '',
              })
            }
          }
        }
      }
    } catch { /* no lesson registered — fall through to flashcards */ }
  }

  // Still thin after lesson mining: fall back to material every topic
  // reliably has — the audited flashcard bank. (Worked examples are no longer
  // folded in here; they get their own relevance-placed slides below.)
  if (content.length < 6) {
    const cards = topic.flashcards
    for (let i = 0; i < cards.length && content.length < MAX_CONTENT_SLIDES; i += 3) {
      const chunk = cards.slice(i, i + 3)
      if (chunk.length === 0) break
      content.push({
        kind: 'content',
        title: cards.length > 3 ? `Key Concepts (${Math.floor(i / 3) + 1})` : 'Key Concepts',
        blocks: chunk.flatMap(c => [`• ${c.front}`, `→ ${c.back}`]),
      })
      if (content.length >= 9) break // enough for a full block; keep pace brisk
    }
  }

  if (polls.length < 2 && lessonPolls.length > 0) {
    const seen = new Set(polls.map(p => (p as { question: string }).question.trim().toLowerCase()))
    for (const lp of lessonPolls) {
      if (polls.length >= MAX_POLLS) break
      const stem = (lp as { question: string }).question.trim().toLowerCase()
      if (!seen.has(stem)) { seen.add(stem); polls.push(lp) }
    }
  }

  // ---- Worked-example slides: always in the deck when the topic has them ----
  const exampleSlides: ContentSlide[] = topic.exampleProblems.slice(0, MAX_EXAMPLES).map((ex) => ({
    kind: 'content',
    title: 'Worked Example',
    blocks: [ex.question, `Solution: ${ex.solution}`],
  }))

  // A topic with no prose content teaches from its examples instead.
  if (content.length === 0 && exampleSlides.length > 0) {
    content.push(...exampleSlides)
    exampleSlides.length = 0
  }

  // ---- Segment the content into teaching beats of 3–4 slides ----
  const segments: ContentSlide[][] = []
  for (let i = 0; i < content.length; i += SEGMENT_SIZE) {
    segments.push(content.slice(i, i + SEGMENT_SIZE))
  }
  // Never leave a lonely 1-slide beat at the end — fold it into the previous.
  if (segments.length >= 2 && segments[segments.length - 1].length === 1) {
    segments[segments.length - 2].push(...segments.pop()!)
  }

  // ---- Place worked examples after the segment whose concepts they apply ----
  const segTerms = segments.map((seg) => {
    const t = new Set<string>()
    for (const s of seg) for (const term of termsOf(slideText(s))) t.add(term)
    return t
  })
  const examplesBySeg = new Map<number, ContentSlide[]>()
  const tailExamples: ContentSlide[] = []
  for (const ex of exampleSlides) {
    const idx = bestSegment(termsOf(slideText(ex)), segTerms)
    if (idx >= 0) {
      examplesBySeg.set(idx, [...(examplesBySeg.get(idx) ?? []), ex])
      for (const term of termsOf(slideText(ex))) segTerms[idx].add(term) // polls may match the example itself
    } else {
      tailExamples.push(ex)
    }
  }

  // ---- Place each poll after the segment that taught it (never before) ----
  const pollsBySeg = new Map<number, PollSlide[]>()
  const reviewPolls: PollSlide[] = []
  for (const p of polls as PollSlide[]) {
    const idx = bestSegment(termsOf(`${p.question} ${p.options.join(' ')}`), segTerms)
    if (idx >= 0) pollsBySeg.set(idx, [...(pollsBySeg.get(idx) ?? []), p])
    else reviewPolls.push(p)
  }

  // Budget: same scaling as before (rich deck → up to 5 checks, thin → ≥2).
  // Matched polls spend the budget first (max 2 per beat, walking in lesson
  // order); leftover budget goes to end-of-deck review polls.
  const pollTarget = content.length === 0
    ? polls.length
    : Math.min(polls.length, MAX_POLLS, Math.max(2, Math.ceil(content.length / 2)))
  let pollBudget = pollTarget
  const chosenBySeg = new Map<number, PollSlide[]>()
  for (let i = 0; i < segments.length && pollBudget > 0; i++) {
    const take = (pollsBySeg.get(i) ?? []).slice(0, Math.min(2, pollBudget))
    if (take.length > 0) {
      chosenBySeg.set(i, take)
      pollBudget -= take.length
    }
  }
  const chosenReview = reviewPolls.slice(0, pollBudget)

  // ---- Intro: title + "what we'll cover" agenda built from section titles ----
  const slides: Slide[] = [{
    kind: 'title',
    title: topic.title,
    subtitle: topic.category?.course?.name ? `${topic.category.course.name} · in-class lesson` : 'In-class lesson',
  }]
  const agendaTitles = [...new Set(content.map((c) => c.title))]
    .filter((t) => t !== topic.title && !/^(Key Concepts|Worked Example)/.test(t))
  if (agendaTitles.length >= 2) {
    slides.push({
      kind: 'content',
      title: "What We'll Cover",
      blocks: agendaTitles.slice(0, 6).map((t) => `- ${t}`),
    })
  }

  // ---- Assemble: beats of concepts → worked example(s) → matched poll ----
  segments.forEach((seg, i) => {
    slides.push(...seg)
    slides.push(...(examplesBySeg.get(i) ?? []))
    slides.push(...(chosenBySeg.get(i) ?? []))
  })
  slides.push(...tailExamples)
  slides.push(...chosenReview) // review checks — everything has been covered by now
  slides.push({ kind: 'quiz', topicSlug, title: topic.title })

  return { title: topic.title, slides }
}

/** Read the revealed-slide list off a deck row's Json column. */
export function revealedList(revealed: unknown): number[] {
  return Array.isArray(revealed) ? revealed.filter((x): x is number => typeof x === 'number') : []
}
