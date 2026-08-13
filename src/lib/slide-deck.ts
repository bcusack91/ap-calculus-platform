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

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(paragraph.join(' '))
      paragraph = []
    }
  }
  const flushSlide = () => {
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
    const h2 = line.match(/^##\s+(.*)/)
    if (h2) {
      flushSlide()
      currentTitle = h2[1].trim()
      continue
    }
    if (line.trim() === '') { flushParagraph(); continue }
    // Bullets, display math, and bold "Example:" lines are standalone blocks.
    if (/^\s*[-*]\s+/.test(line) || /^\$\$/.test(line.trim()) || /^\*\*/.test(line.trim())) {
      flushParagraph()
      blocks.push(line.trim())
    } else {
      paragraph.push(line.trim())
    }
  }
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

  // Thin lessons (several MCAT subtopics carry boilerplate study-checklist
  // markdown) get supplemented from material every topic reliably has: the
  // audited flashcard bank (key concepts, ~3 per slide) and worked examples.
  // Rich lessons skip this — their own content is better slide material.
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

  // Polls from the topic's exit-quiz pool. Deduplicate stems; tolerate pools
  // that are thin or missing (deck simply has fewer/no polls).
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
