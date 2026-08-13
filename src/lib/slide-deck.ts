import { prisma } from '@/lib/prisma'
import { generateExitQuiz } from '@/data/exit-quizzes'

/**
 * Auto-generated in-class slide decks (owner spec: ~20 slides ≈ one 45–60 min
 * teaching block; a poll every ~4th slide; ends handing off to the exit quiz).
 *
 * Content slides come from the topic's lesson markdown (Topic.textContent —
 * clean `##`-sectioned markdown with $…$ LaTeX, rendered client-side through
 * MathText). Poll slides draw multiple-choice questions from the SAME
 * exit-quiz pool the topic's credit loop uses, so in-class polling previews
 * exactly what homework will grade. Thin lesson content simply yields a
 * shorter deck — the teacher talks, the polls still punctuate.
 */

export type Slide =
  | { kind: 'title'; title: string; subtitle: string }
  | { kind: 'content'; title: string; blocks: string[] }
  | { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }
  | { kind: 'quiz'; topicSlug: string; title: string }

const MAX_CONTENT_SLIDES = 15
const MAX_POLLS = 5
const MAX_BLOCKS_PER_SLIDE = 6

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
      exampleProblems: { select: { question: true, solution: true }, take: 2 },
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
  // reliably has — worked examples and the audited flashcard bank.
  if (content.length < 6) {
    for (const ex of topic.exampleProblems) {
      if (content.length >= MAX_CONTENT_SLIDES) break
      content.push({
        kind: 'content',
        title: 'Worked Example',
        blocks: [ex.question, `Solution: ${ex.solution}`],
      })
    }
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

  // Interleave polls EVENLY through the content. Rich topics (15 content
  // slides) get 5 polls spaced every 3rd content slide — the spec's poll
  // every ~4th slide of the deck. Thin topics scale the poll count down so
  // checks stay spread through the lesson instead of bunching at the end.
  const pollTarget = Math.min(polls.length, MAX_POLLS, Math.max(2, Math.ceil(content.length / 2)))
  const usePolls = polls.slice(0, Math.max(pollTarget, content.length === 0 ? polls.length : pollTarget))
  const spacing = usePolls.length > 0 ? Math.max(1, Math.ceil(content.length / usePolls.length)) : Infinity
  const slides: Slide[] = [{
    kind: 'title',
    title: topic.title,
    subtitle: topic.category?.course?.name ? `${topic.category.course.name} · in-class lesson` : 'In-class lesson',
  }]
  let pollIdx = 0
  content.forEach((slide, i) => {
    slides.push(slide)
    if ((i + 1) % spacing === 0 && pollIdx < usePolls.length) slides.push(usePolls[pollIdx++])
  })
  while (pollIdx < usePolls.length) slides.push(usePolls[pollIdx++])
  slides.push({ kind: 'quiz', topicSlug, title: topic.title })

  return { title: topic.title, slides }
}

/** Read the revealed-slide list off a deck row's Json column. */
export function revealedList(revealed: unknown): number[] {
  return Array.isArray(revealed) ? revealed.filter((x): x is number => typeof x === 'number') : []
}
