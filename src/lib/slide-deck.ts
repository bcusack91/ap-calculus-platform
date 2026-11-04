import { prisma } from '@/lib/prisma'
import { filterSectionsForYield, stripLowYield } from '@/lib/lesson-yield'
import { generateExitQuiz } from '@/data/exit-quizzes'
import { shuffleOptions } from '@/lib/shuffle-options'
import { bestSegment, termsOf } from '@/lib/text-terms'

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

/** A hand-drawn inline SVG on a slide (same shape and rules as a lesson figure; gated by isSafeSvg at render). */
export type SlideFigure = { svg: string; alt: string; caption?: string }

export type Slide =
  | { kind: 'title'; title: string; subtitle: string }
  | { kind: 'content'; title: string; blocks: string[]; figure?: SlideFigure; layout?: 'side' | 'full' | 'grid' }
  | { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }
  | { kind: 'quiz'; topicSlug: string; title: string }

// Owner (Oct 2026): ~22 slides left out too much of a 4-part lesson for the
// exit quiz that follows; decks now run to ~35–40 (28 content + up to 8 polls
// + title, agenda, worked examples and the closing quiz slide).
const MAX_CONTENT_SLIDES = 28
const MAX_POLLS = 8
/**
 * Polls per deck, however many parts the lesson has: five-part lessons grew
 * to 24 checks, and with their worked examples a 90-minute class could not
 * get through them (owner, 2026-11-04: cap as physics, 16).
 */
const MAX_DECK_POLLS = 16
/**
 * Worked problems per lesson part shown on the slides, in lesson order (owner,
 * 2026-11-04). Each lettered problem takes 3–5 slides; lessons with 3–4 per
 * part spent half the class on them. The interactive lesson keeps them all
 * for self-study.
 */
export const MAX_DECK_PROBLEMS_PER_PART = 2
/**
 * Share of a poll's terms drawn from one worked problem above which the poll
 * counts as that problem's twin. Calibrated on reviewer-confirmed twins
 * (2026-11-04: 0.44–0.56, so 0.42 leaves a margin); 0.6 caught none of them. False positives only cost
 * a spare candidate, since twins are dropped only while the budget stays full.
 */
const POLL_TWIN_OVERLAP = 0.42
/** A part's remaining worked-problem allowance; `dropped` collects sections left off the slides. */
export type WorkedBudget = { problems: number; dropped: string[] }
/** Pool questions considered per deck; the best-matching MAX_POLLS are used. */
const MAX_POLL_CANDIDATES = 40
const MAX_BLOCKS_PER_SLIDE = 5
const MAX_CHARS_PER_SLIDE = 700 // a slide must fit one screen (annotation ink is position-locked)

/** How much goes on one slide, and how many content slides a deck may hold. */
export type DeckLimits = { maxChars: number; maxBlocks: number; maxSlides: number; maxPolls: number }
const DEFAULT_LIMITS: DeckLimits = { maxChars: MAX_CHARS_PER_SLIDE, maxBlocks: MAX_BLOCKS_PER_SLIDE, maxSlides: MAX_CONTENT_SLIDES, maxPolls: MAX_POLLS }
/**
 * Prose lessons (no math anywhere — psych/soc, CARS, history) got walls of
 * text at the equation-sized budget (owner, 2026-10-28: "too cluttered"), so
 * they chunk tighter — and get proportionally more slides, so the same text
 * is spread out rather than cut. A lesson of 3+ parts is more than one
 * teaching block; its deck (and its poll budget) grows by a block per two
 * parts instead of silently dropping the later parts (Learning & Memory lost
 * both memory parts at 28). A lesson whose mined slides still overflow
 * that budget gets extra blocks, up to one per part, so the cut never lands
 * on a whole part (Microbial Genetics, 2026-10-29: four dense parts lost
 * Part 4 entirely at 56). Pass `minedSlides` once the lesson is chunked.
 */
export function deckLimits(prose: boolean, partCount: number, minedSlides = 0): DeckLimits {
  const maxChars = prose ? 520 : MAX_CHARS_PER_SLIDE
  const perBlock = Math.round(MAX_CONTENT_SLIDES * (MAX_CHARS_PER_SLIDE / maxChars))
  const pairBlocks = Math.max(1, Math.ceil(partCount / 2))
  const blocks = Math.min(Math.max(pairBlocks, Math.ceil(minedSlides / perBlock)), Math.max(pairBlocks, partCount))
  return {
    maxChars,
    maxBlocks: prose ? 4 : MAX_BLOCKS_PER_SLIDE,
    maxSlides: perBlock * blocks,
    maxPolls: Math.min(MAX_POLLS * blocks, MAX_DECK_POLLS),
  }
}
/** A mined lesson this long re-teaches everything its topic summary says — the summary slides are dropped. */
const SUMMARY_REDUNDANT_AT = 12
const MAX_EXAMPLES = 2 // each becomes a 2-3 slide progressive-reveal sequence
const SEGMENT_SIZE = 3 // content slides per teaching beat (concepts → example → poll)

/**
 * Sections that are study-guide meta, not teachable content (owner review:
 * "fluffy… a waste of class time"). Stripped before slide parsing — but only
 * when the section body carries no math or tables, so a future topic that
 * puts real content under one of these titles is never silently dropped.
 */
const META_SECTION_TITLES = ['Why This Matters', 'Core Concepts', 'Study Checklist', 'Next Step', 'How to Study This']

function stripMetaSections(markdown: string): string {
  const parts = markdown.split(/^(?=##\s)/m)
  return parts
    .filter((part) => {
      const m = part.match(/^##+\s+(.*)/)
      if (!m) return true
      const title = m[1].trim()
      if (!META_SECTION_TITLES.includes(title)) return true
      const body = part.slice(m[0].length)
      return body.includes('$') || body.includes('|') // real content — keep
    })
    .join('')
}

/**
 * Inline enumerations ("1. Isolate… 2. Draw… 3. Choose…") crammed into one
 * paragraph overflow slides and read poorly — split them into list blocks.
 */
function splitNumberedRun(block: string): string[] {
  if (block.length < 160 || block.startsWith('|') || block.startsWith('$$')) return [block]
  const parts = block.split(/\s+(?=\d{1,2}\.\s+(?:\*\*|[A-Z$]))/)
  if (parts.length < 3) return [block] // need ≥2 numbered items to be an enumeration
  const [head, ...items] = parts[0].match(/^\d{1,2}\.\s/) ? ['', ...parts] : parts
  const out = head.trim() ? [head.trim()] : []
  for (const item of items) out.push(`- ${item.trim()}`)
  return out
}

/**
 * A single wall-of-text paragraph can exceed a screen all by itself — split it
 * into ~450-char blocks at sentence seams so the slide chunker can distribute
 * them. Tables and display math are never split.
 */
function splitLongParagraph(block: string): string[] {
  if (block.length <= 550 || block.startsWith('|') || block.startsWith('$$')) return [block]
  const out: string[] = []
  let rest = block
  while (rest.length > 550) {
    const re = /[.!?]\s+/g
    let best = -1
    for (let m = re.exec(rest); m; m = re.exec(rest)) {
      const pos = m.index + 1
      if (pos > 600) break
      if (pos >= 200) best = pos
    }
    if (best <= 0) break
    out.push(rest.slice(0, best).trim())
    rest = rest.slice(best).trim()
  }
  if (rest) out.push(rest)
  return out
}

/**
 * A worked example as a progressive-reveal sequence (owner spec): question
 * first so students think, then the teacher's Next uncovers the solution in
 * stages. Consecutive slides = the reveal mechanism, so deck sync and slide
 * annotations work unchanged. Structured multi-line solutions are parsed
 * through the same markdown-block chunker as lesson content so every solution
 * stage fits one screen.
 */
function exampleRevealSlides(question: string, solution: string): ContentSlide[] {
  const slides: ContentSlide[] = [{
    kind: 'content',
    title: 'Worked Example — Try It First',
    blocks: [
      question.trim(),
      '→ Before the next slide: inventory what is given (explicit and implicit) and what is asked.',
    ],
  }]
  const sol = solution.trim().replace(/^(\*\*Solution:?\*\*|Solution:)\s*/i, '')
  if (sol.length <= 350 && !sol.includes('\n')) {
    slides.push({ kind: 'content', title: 'Worked Example — Solution', blocks: [`Solution: ${sol}`] })
    return slides
  }
  const parsed = contentSlidesFrom(sol, 'Worked Example — Solution').slice(0, 4)
  const n = parsed.length
  parsed.forEach((s, i) => {
    slides.push({
      kind: 'content',
      title: n > 1 ? `Worked Example — Solution (${i + 1} of ${n})` : 'Worked Example — Solution',
      blocks: s.blocks,
    })
  })
  return slides
}

type ContentSlide = Extract<Slide, { kind: 'content' }>

/** A takeaway written as a box: "- **Short title.** One sentence." */
const BOX_BULLET = /^[-*]\s+\*\*[^*]+\*\*/
const TRAPS_LINE = /^\*\*Common traps:?\*\*:?$/i

/**
 * A "Key Takeaways" section whose bullets are all "- **Title.** sentence"
 * becomes 2 × 2 grids of boxes (layout 'grid'): the takeaways, then its
 * "**Common traps**" list under its own title, each split evenly into slides
 * of at most four boxes. Any other line (a "Next up" pointer) follows on a
 * plain slide. Owner, 2026-11-04: bulleted takeaways read as clutter.
 * Returns null when any bullet is not in box form (the section is then
 * chunked as before).
 */
export function takeawayGridSlides(title: string, blocks: string[]): ContentSlide[] | null {
  const groups: { title: string; items: string[] }[] = [{ title, items: [] }]
  const rest: string[] = []
  for (const b of blocks) {
    const line = b.trim()
    if (TRAPS_LINE.test(line)) { groups.push({ title: 'Common Traps', items: [] }); continue }
    if (/^[-*]\s+/.test(line)) {
      if (!BOX_BULLET.test(line)) return null
      groups[groups.length - 1].items.push(line)
      continue
    }
    rest.push(line)
  }
  if (groups[0].items.length === 0) return null
  const out: ContentSlide[] = []
  for (const g of groups) {
    const n = Math.ceil(g.items.length / 4)
    for (let i = 0; i < n; i++) {
      const items = g.items.slice(Math.ceil((i * g.items.length) / n), Math.ceil(((i + 1) * g.items.length) / n))
      out.push({ kind: 'content', title: i === 0 ? g.title : `${g.title} (cont.)`, blocks: items, layout: 'grid' })
    }
  }
  if (rest.length) out.push({ kind: 'content', title: `${title} (cont.)`, blocks: rest })
  return out
}

const PROBLEM_BLOCK = /^\*\*Problem\b/i
const QUESTION_BLOCK = /^[-*]\s+\*\*\(([a-z])\)\*\*/i
const PART_BLOCK = /^\*\*\(([a-z])\)/i
/** The " · Part (a)" / " · Problem 2" / " · Problem 2 (a)" suffix of a worked-example slide. */
const PART_SUFFIX = /\s*·\s*(?:Part \([a-z]\)|Problem \d+(?: \([a-z]\))?)\s*$/i

/**
 * A lesson worked example written as a setup, lettered questions and one
 * solution paragraph per letter —
 *
 *   **Problem 1.** A 9 V battery delivers 0.50 A for 1 minute.
 *   - **(a)** How much charge passes through it?
 *   - **(b)** How many electrons is that?
 *   **(a) Charge moved.** ΔQ = IΔt = 30 C
 *   **(b) Electrons.** N = 30 / 1.6 × 10⁻¹⁹ ≈ 1.9 × 10²⁰
 *
 * — becomes an overview slide (the setup and every question, so the class
 * can try it first), then one slide per part: the setup again, that part's
 * question, and its solution. Owner, 2026-11-04: four steps on one slide was
 * overwhelming in an online class, and a problem must ask its question.
 * Returns null when the section is not in this shape; it is then chunked
 * like any other section.
 */
export function workedExampleSlides(title: string, blocks: string[], limits: DeckLimits, budget?: WorkedBudget): ContentSlide[] | null {
  type Problem = { setup: string[]; questions: Map<string, string>; parts: { letter: string; blocks: string[] }[] }
  const problems: Problem[] = []
  const intro: string[] = []
  let cur: Problem | null = null
  const open = (setup: string[]) => {
    cur = { setup, questions: new Map(), parts: [] }
    problems.push(cur)
    return cur
  }
  for (const b of blocks) {
    if (PROBLEM_BLOCK.test(b)) { open([b]); continue }
    const q = b.match(QUESTION_BLOCK)
    if (q) {
      // A problem without a "**Problem N.**" label: the lines before its
      // first question are its setup.
      const p = cur ?? open(intro.splice(0))
      p.questions.set(q[1].toLowerCase(), b.replace(/^[-*]\s+/, ''))
      continue
    }
    const part = b.match(PART_BLOCK)
    if (part && cur) { (cur as Problem).parts.push({ letter: part[1].toLowerCase(), blocks: [b] }); continue }
    if (!cur) { intro.push(b); continue }
    const c: Problem = cur
    if (c.parts.length) c.parts[c.parts.length - 1].blocks.push(b)
    else c.setup.push(b)
  }
  if (problems.length === 0) return null
  for (const p of problems) {
    if (p.questions.size === 0 || p.parts.length === 0) return null
    if (p.parts.some((part) => !p.questions.has(part.letter))) return null
  }
  if (budget) {
    const keep = Math.max(0, Math.min(problems.length, budget.problems))
    budget.problems -= keep
    if (keep === 0) {
      budget.dropped.push(title)
      return []
    }
    problems.length = keep
  }

  const out: ContentSlide[] = []
  const push = (t: string, b: string[]) => out.push({ kind: 'content', title: out.length === 0 ? title : t, blocks: b })
  // A part slide that would not fit one screen continues on a second slide
  // that repeats the question (never the setup — the first slide just showed it).
  const pushFitting = (t: string, head: string[], question: string, body: string[]) => {
    let chunk = [...head, question]
    let chars = chunk.join('').length
    let cont = false
    for (const b of body) {
      if (chunk.length > head.length + 1 && (chunk.length >= limits.maxBlocks + 1 || chars + b.length > limits.maxChars * 1.25)) {
        push(cont ? `${t} (cont.)` : t, chunk)
        cont = true
        chunk = [question]
        chars = question.length
      }
      chunk.push(b)
      chars += b.length
    }
    push(cont ? `${t} (cont.)` : t, chunk)
  }
  if (intro.length) push(title, intro)
  problems.forEach((p, i) => {
    const label = problems.length > 1 ? `Problem ${i + 1}` : ''
    const overviewTitle = label ? `${title} · ${label}` : title
    push(overviewTitle, [...p.setup, ...p.questions.values(), '→ Try each part before the next slide.'])
    for (const part of p.parts) {
      const t = `${title} · ${label ? `${label} (${part.letter})` : `Part (${part.letter})`}`
      pushFitting(t, p.setup, p.questions.get(part.letter)!, part.blocks)
    }
  })
  return out
}

/**
 * The unit a content slide belongs to: its title without "(cont.)" / "(2 of
 * 3)" suffixes, with every worked-example slide ("Try It First", "Solution")
 * of a reveal sequence folded together. Slides of one unit are taught as one
 * piece, so a poll must never sit between them.
 */
export function slideUnitKey(title: string): string {
  // A worked example's part slides ("… · Part (a)", "… · Problem 2 (b)") belong
  // to the example, so their suffix goes too (after any "(cont.)").
  const base = title.replace(/\s*\((?:cont\.|\d+ of \d+)\)\s*$/i, '').replace(PART_SUFFIX, '').trim()
  // Progressive-reveal steps get their own key so a reveal sequence is never
  // confused with a lesson section that happens to be titled "Worked Example".
  return /^Worked Example — (Try It First|Solution)$/.test(base) ? 'Worked Example (reveal)' : base
}

/** True when `next` continues the unit `prev` belongs to. A "Try It First"
 *  slide always opens a NEW worked example, even right after another one. */
export function sameSlideUnit(prevTitle: string, nextTitle: string): boolean {
  if (/^Worked Example — Try It First$/.test(nextTitle.trim())) return false
  // A part's Common Traps grid finishes its Key Takeaways — one recap, no poll between.
  if (/^Common Traps\b/.test(nextTitle.trim()) && /^(Key Takeaways|Common Traps)\b/i.test(slideUnitKey(prevTitle))) return true
  return slideUnitKey(prevTitle) === slideUnitKey(nextTitle)
}

/**
 * Content split into teaching beats of about `size` slides, cutting only at
 * unit boundaries: a multi-slide worked example (or any "(cont.)" run) is
 * never divided, so the polls placed after a beat come after the whole
 * example, never in the middle of it.
 */
export function segmentContent<T extends { title: string }>(content: T[], size: number): T[][] {
  const units: T[][] = []
  for (const slide of content) {
    const last = units[units.length - 1]
    if (last && sameSlideUnit(last[last.length - 1].title, slide.title)) last.push(slide)
    else units.push([slide])
  }
  const segments: T[][] = []
  let current: T[] = []
  for (const unit of units) {
    current.push(...unit)
    if (current.length >= size) {
      segments.push(current)
      current = []
    }
  }
  if (current.length) segments.push(current)
  // Never leave a lonely 1-slide beat at the end — fold it into the previous.
  if (segments.length >= 2 && segments[segments.length - 1].length === 1) {
    segments[segments.length - 2].push(...segments.pop()!)
  }
  return segments
}

const SLUG_NOISE = new Set(['mcat', 'sat', 'act', 'psat', 'ap', 'prep'])
const slugTerms = (slug: string) => slug.split('-').filter((t) => t && !SLUG_NOISE.has(t))

/**
 * Pool questions with those from a SIBLING topic dropped when enough remain.
 * Blended pools tag each question with its source pool's slug in `category`;
 * for "mcat-cars-reasoning-mcat" a question from
 * "mcat-cars-foundations-comprehension-mcat" shares only the course-wide
 * "cars" with the topic, so it isn't what this lesson taught. Questions from
 * the topic itself, an umbrella pool ("mcat-cars") or a related sub-pool
 * ("mcat-cars-reasoning-within-text-mcat") are kept. Non-slug categories
 * (display names) are never filtered.
 */
export function onTopicFirst<T extends { category?: string }>(pool: readonly T[], topicSlug: string, minKeep: number): T[] {
  const topic = slugTerms(topicSlug)
  const cats = [...new Set(pool.map((q) => q.category).filter((c): c is string => !!c && /^[a-z0-9-]+$/.test(c)))]
  if (cats.length < 2) return [...pool]
  const common = new Set(slugTerms(cats[0]).filter((t) => cats.every((c) => slugTerms(c).includes(t))))
  const offTopic = (q: T) => {
    const c = q.category
    if (!c || !/^[a-z0-9-]+$/.test(c) || c === topicSlug) return false
    const terms = slugTerms(c)
    if (terms.every((t) => topic.includes(t))) return false // umbrella pool
    return !terms.some((t) => topic.includes(t) && !common.has(t))
  }
  const kept = pool.filter((q) => !offTopic(q))
  return kept.length >= minKeep ? kept : [...kept, ...pool.filter(offTopic)]
}

/** Polls that interrupt a unit (a poll between two slides of the same unit). */
export function pollsInsideUnits(slides: readonly Slide[]): number[] {
  const bad: number[] = []
  slides.forEach((s, i) => {
    if (s.kind !== 'poll') return
    let before = i - 1
    while (before >= 0 && slides[before].kind === 'poll') before--
    let after = i + 1
    while (after < slides.length && slides[after].kind === 'poll') after++
    const a = slides[before]
    const b = slides[after]
    if (a?.kind === 'content' && b?.kind === 'content' && sameSlideUnit(a.title, b.title)) bad.push(i)
  })
  return bad
}
type PollSlide = { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }

// ---------- Relevance matching (poll/example → the segment that taught it) ----------

function slideText(s: ContentSlide): string {
  return `${s.title} ${s.blocks.join(' ')} ${s.figure?.alt ?? ''}`
}

const isTableBlock = (b: string) => b.includes('\n') && b.includes('|')
const CONT = ' (cont.)'

/**
 * Put a topic's authored figures (src/data/deck-figures) into its content
 * slides — see DeckFigurePlacement there for the modes. Pure; throws when a
 * placement matches no section so a renamed lesson heading fails the
 * regeneration run instead of silently losing its picture. The matched slide
 * is the FIRST slide of a section (never a continuation page), so a figure
 * leads its section; lead/after slides share the section's unit key, which
 * keeps the picture and its words on the same side of every poll.
 */
export function applyDeckFigures<T extends Slide>(
  slides: readonly T[],
  placements: readonly { at: string; figure: SlideFigure; mode?: 'lead' | 'after' | 'replace' | 'replace-table' | 'beside'; blocks?: string[] }[] | undefined,
): T[] {
  if (!placements?.length) return [...slides]
  // Works on a pure content list (the generator) and on a whole deck (a
  // curated deck, where title/poll/quiz slides sit between the content).
  const out = [...slides] as Slide[]
  for (const p of placements) {
    const needle = p.at.trim().toLowerCase()
    const idx = out.findIndex((s) => s.kind === 'content' && !s.title.endsWith(CONT.trim()) && slideUnitKey(s.title).toLowerCase().startsWith(needle))
    if (idx < 0) throw new Error(`deck figure "${p.at}" matches no section`)
    const target = out[idx] as ContentSlide
    const base = slideUnitKey(target.title)
    const mode = p.mode ?? 'lead'
    if (mode === 'lead') {
      const lead = { ...target, title: base, blocks: p.blocks ?? [], figure: p.figure, layout: 'full' as const }
      out.splice(idx, 1, lead, { ...target, title: `${base}${CONT}` })
    } else if (mode === 'after') {
      const after = { ...target, title: `${base}${CONT}`, blocks: p.blocks ?? [], figure: p.figure, layout: 'full' as const }
      // Behind a worked example's part slides, not between its overview and
      // part (a): the picture usually shows the whole solution.
      let at = idx + 1
      while (at < out.length && out[at].kind === 'content' && PART_SUFFIX.test((out[at] as ContentSlide).title.replace(/\s*\(cont\.\)\s*$/i, '')) && slideUnitKey((out[at] as ContentSlide).title) === base) at++
      out.splice(at, 0, after)
    } else if (mode === 'replace') {
      // The figure and its short lines ARE the section on the slides; the
      // lesson keeps the full text. Continuation pages of the section go too.
      out[idx] = { ...target, title: base, blocks: p.blocks ?? [], figure: p.figure, layout: 'full' as const }
      while (idx + 1 < out.length && out[idx + 1].kind === 'content' && (out[idx + 1] as ContentSlide).title === `${base}${CONT}`) out.splice(idx + 1, 1)
    } else if (mode === 'replace-table') {
      const blocks = p.blocks ?? target.blocks.filter((b) => !isTableBlock(b))
      out[idx] = { ...target, blocks, figure: p.figure, layout: 'side' as const }
    } else {
      out[idx] = { ...target, blocks: p.blocks ?? target.blocks, figure: p.figure, layout: 'side' as const }
    }
  }
  return out as T[]
}


/** Lesson markdown → content slides: one per `##` section, long sections split. */
export function contentSlidesFrom(markdown: string, fallbackTitle: string, limits: DeckLimits = DEFAULT_LIMITS, budget?: WorkedBudget): ContentSlide[] {
  const slides: ContentSlide[] = []
  const lines = markdown.split('\n')
  let currentTitle = fallbackTitle
  let blocks: string[] = []
  let paragraph: string[] = []
  let table: string[] = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(...splitNumberedRun(paragraph.join(' ')).flatMap(splitLongParagraph))
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
    if (/^Key Takeaways\b/i.test(currentTitle)) {
      const grid = takeawayGridSlides(currentTitle, blocks)
      if (grid) {
        slides.push(...grid)
        blocks = []
        return
      }
    }
    if (/^Worked Examples?\b/i.test(currentTitle)) {
      const parts = workedExampleSlides(currentTitle, blocks, limits, budget)
      if (parts) {
        slides.push(...parts)
        blocks = []
        return
      }
    }
    // Chunk by block count AND character budget — a slide must fit one screen
    // (teacher ink overlays are position-locked; scrolling would break them).
    let chunk: string[] = []
    let chars = 0
    let continuation = false
    const emit = () => {
      if (chunk.length === 0) return
      slides.push({
        kind: 'content',
        title: continuation ? `${currentTitle} (cont.)` : currentTitle,
        blocks: chunk,
      })
      continuation = true
      chunk = []
      chars = 0
    }
    for (const b of blocks) {
      if (chunk.length > 0 && (chunk.length >= limits.maxBlocks || chars + b.length > limits.maxChars)) emit()
      chunk.push(b)
      chars += b.length
    }
    emit()
    blocks = []
  }

  let inFence = false
  for (const raw of lines) {
    const line = raw.trimEnd()
    // Fenced code blocks are usually ASCII diagrams — they don't survive
    // slide rendering (and their pipes masquerade as table rows). Skip them.
    if (/^\s*```/.test(line)) { inFence = !inFence; continue }
    if (inFence) continue
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
  return slides.slice(0, limits.maxSlides)
}

/**
 * Build the full deck for a topic. Structure: title → repeating
 * [~3 content, 1 poll] → closing exit-quiz slide.
 */
export async function generateSlideDeck(topicSlug: string): Promise<{ title: string; slides: Slide[] }> {
  // Owner-reviewed decks override auto-generation entirely.
  try {
    const { CURATED_DECKS } = await import('@/data/curated-decks')
    const curated = CURATED_DECKS[topicSlug]
    if (curated) {
      // Figures apply to a curated deck too (Kinematics, 2026-10-29).
      const { DECK_FIGURES } = await import('@/data/deck-figures')
      return { title: curated.title, slides: applyDeckFigures(curated.slides, DECK_FIGURES[topicSlug]) }
    }
  } catch (e) {
    if (e instanceof Error && /matches no section/.test(e.message)) throw e
    /* registry unavailable — fall through to generation */
  }

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

  const summaryMd = stripMetaSections(topic.textContent ?? '')
  let content = contentSlidesFrom(summaryMd, topic.title)

  // The INTERACTIVE LESSON registry holds the real teaching content for most
  // topics (Topic.textContent is often just a summary). When the markdown is
  // thin, mine the lesson's text sections for slides — and keep its embedded
  // multiple-choice exercises as a poll source for topics whose exit-quiz
  // pool is missing. Loaded lazily; lesson chunks load per topic.
  // Polls from the topic's exit-quiz pool — tried FIRST so lesson mining
  // knows whether it also needs to hunt for poll material.
  let polls: Slide[] = []
  try {
    const pool = await generateExitQuiz(topicSlug, MAX_POLL_CANDIDATES)
    const seen = new Set<string>()
    for (const q of onTopicFirst(pool, topicSlug, MAX_POLLS)) {
      const raw = q as unknown as Record<string, unknown>
      const correctIndex = (raw.correctAnswer ?? raw.correctIndex ?? 0) as number
      const stem = q.question.trim().toLowerCase()
      if (seen.has(stem)) continue
      seen.add(stem)
      // Poll sources store options in authored order — most exit-quiz pools key
      // option B, lesson exercises key option A — and the deck shows them as
      // given. Seeded by the stem so a pre-built deck and a live rebuild agree.
      const shuffled = shuffleOptions(q.options, correctIndex, q.question)
      polls.push({ kind: 'poll', question: q.question, options: shuffled.options, correctIndex: shuffled.correctIndex, explanation: q.explanation })
      if (polls.length >= MAX_POLL_CANDIDATES) break
    }
  } catch { polls = [] }

  const lessonPolls: Slide[] = []
  // Lesson text is gathered first and chunked once the whole lesson is known:
  // the slide budget depends on whether the lesson is prose or math and on
  // how many parts it has (deckLimits). A registered lesson is ALWAYS mined
  // (2026-10-28): it used to be skipped when the summary alone filled six
  // slides, so a topic with a long hand-written summary (Disorders, 5,700
  // chars) taught from the summary and never showed its lesson sections.
  const lessonMd: string[] = []
  const lessonMdPart: number[] = [] // the lesson part each lessonMd entry came from
  let partCount = 0
  let limits = DEFAULT_LIMITS
  const droppedSections: string[] = [] // worked examples past the per-part slide allowance
  {
    try {
      const reg = await import('@/data/interactive-lessons/registry')
      const cfg = reg.getInteractiveTopicConfig(topicSlug)
      partCount = cfg?.parts.length ?? 0
      for (let part = 1; part <= partCount; part++) {
        const data = await reg.getInteractiveLessonData(topicSlug, part).catch(() => null)
        // Decks present the default view: low-yield sections and questions
        // are left out (lesson-yield.ts), as they are for students by default.
        for (const sec of filterSectionsForYield(data?.sections ?? [], false)) {
          const secType = (sec as { type?: string }).type
          if (secType === 'text' && typeof sec.content === 'string') {
            // Drop lesson-navigation lines ("Part 3 of 7 — …") — deck pacing
            // is the teacher's, not the lesson's.
            lessonMd.push(stripMetaSections(stripLowYield(sec.content).replace(/^\*\*Part \d+ of \d+.*$/gm, '')))
            lessonMdPart.push(part)
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
              const shuffled = shuffleOptions(qq.options as string[], qq.correctAnswer, qq.question)
              lessonPolls.push({
                kind: 'poll',
                question: qq.question,
                options: shuffled.options,
                correctIndex: shuffled.correctIndex,
                explanation: typeof qq.explanation === 'string' ? qq.explanation : '',
              })
            }
          }
        }
      }
    } catch { /* no lesson registered — fall through to flashcards */ }
  }
  if (lessonMd.length > 0) {
    const prose = !/\$/.test(summaryMd + lessonMd.join(''))
    limits = deckLimits(prose, partCount)
    const budgets = new Map<number, WorkedBudget>()
    const budgetFor = (part: number) => {
      if (!budgets.has(part)) budgets.set(part, { problems: MAX_DECK_PROBLEMS_PER_PART, dropped: [] })
      return budgets.get(part)!
    }
    const lessonSlides = lessonMd.flatMap((md, i) => contentSlidesFrom(md, topic.title, limits, budgetFor(lessonMdPart[i]))).filter((s) => s.blocks.length > 0)
    droppedSections.push(...[...budgets.values()].flatMap((b) => b.dropped))
    // Topic.textContent is a summary of the same lesson; once the lesson
    // itself is on the slides, the summary only repeats it (a second "Key
    // Takeaways" early in the deck). The agenda slide still previews the arc.
    const summary = lessonSlides.length >= SUMMARY_REDUNDANT_AT ? [] : content
    // A worked example's part slides re-present a problem one question at a
    // time; they never count against the budget, so they cannot push the end
    // of the lesson off the deck.
    const partSlides = lessonSlides.filter((s) => PART_SUFFIX.test(s.title.replace(/\s*\(cont\.\)\s*$/i, ''))).length
    limits = deckLimits(prose, partCount, summary.length + lessonSlides.length - partSlides)
    content = [...summary, ...lessonSlides].slice(0, limits.maxSlides + partSlides)
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

  // ---- Worked examples: progressive-reveal sequences (question → solution) ----
  const exampleGroups: ContentSlide[][] = topic.exampleProblems
    .slice(0, MAX_EXAMPLES)
    .map((ex) => exampleRevealSlides(ex.question, ex.solution))

  // A topic with no prose content teaches from its examples instead.
  if (content.length === 0 && exampleGroups.length > 0) {
    content.push(...exampleGroups.flat())
    exampleGroups.length = 0
  }

  // ---- Authored figures lead their sections (src/data/deck-figures) ----
  // Not wrapped in try/catch on purpose: a figure file that fails to import
  // (a half-edited sibling, a type error) used to be swallowed here, and the
  // deck was silently stored with NO figures (found 2026-10-29). A broken
  // registry must fail the regeneration run instead.
  const { DECK_FIGURES } = await import('@/data/deck-figures')
  // A figure drawn for a worked example that is now past its part's slide
  // allowance goes with it; any other unmatched figure still fails loudly.
  const figures = DECK_FIGURES[topicSlug]?.filter((p) => {
    const needle = p.at.trim().toLowerCase()
    const matches = content.some((s) => slideUnitKey(s.title).toLowerCase().startsWith(needle))
    return matches || !droppedSections.some((t) => t.toLowerCase().startsWith(needle))
  })
  content = applyDeckFigures(content, figures)

  // ---- Segment the content into teaching beats of ~3 slides (whole units) ----
  const segments: ContentSlide[][] = segmentContent(content, SEGMENT_SIZE)

  // ---- Place worked examples after the segment whose concepts they apply ----
  const segTerms = segments.map((seg) => {
    const t = new Set<string>()
    for (const s of seg) for (const term of termsOf(slideText(s))) t.add(term)
    return t
  })
  const examplesBySeg = new Map<number, ContentSlide[]>()
  const tailExamples: ContentSlide[] = []
  for (const group of exampleGroups) {
    const groupTerms = termsOf(group.map(slideText).join(' '))
    const idx = bestSegment(groupTerms, segTerms)
    if (idx >= 0) {
      examplesBySeg.set(idx, [...(examplesBySeg.get(idx) ?? []), ...group])
      for (const term of groupTerms) segTerms[idx].add(term) // polls may match the example itself
    } else {
      tailExamples.push(...group)
    }
  }

  // ---- Place each poll after the segment that taught it (never before) ----
  // Words found across most of the deck ("passage", "author", "CARS" in a CARS
  // deck) say nothing about WHICH beat taught a question, so they don't count
  // toward a match — otherwise a generic strategy question attaches itself to
  // whatever beat happens to share two common words. Within a beat, the
  // closest-matching questions are used first.
  const deckCommon = new Set(
    [...new Set(segTerms.flatMap((t) => [...t]))].filter((term) => segTerms.filter((t) => t.has(term)).length > Math.max(1, segTerms.length / 2)),
  )
  // A poll that restates a worked problem the class just solved is not a
  // check — and polls rank by overlap, so that twin is exactly the one that
  // lands right after the problem (reviews, 2026-11-04). Drop polls whose
  // terms mostly come from one worked problem on the slides, while enough
  // other questions remain to fill the budget.
  const problemTerms = new Map<string, Set<string>>()
  for (const s of content) {
    if (!/^Worked Examples?\b/i.test(s.title)) continue
    const key = s.title.replace(/\s*\(cont\.\)\s*$/i, '').replace(/\s*·\s*Part \([a-z]\)$/i, '').replace(/\s*\([a-z]\)$/i, '')
    const set = problemTerms.get(key) ?? new Set<string>()
    for (const t of termsOf(slideText(s))) set.add(t)
    problemTerms.set(key, set)
  }
  const restatesProblem = (p: PollSlide) => {
    const terms = [...termsOf(`${p.question} ${p.options.join(' ')}`)].filter((t) => !deckCommon.has(t))
    if (terms.length < 4) return false
    return [...problemTerms.values()].some((set) => terms.filter((t) => set.has(t)).length / terms.length >= POLL_TWIN_OVERLAP)
  }
  const twins = new Set((polls as PollSlide[]).filter(restatesProblem))
  if (process.env.DECK_DEBUG === 'twins') {
    for (const p of polls as PollSlide[]) {
      const terms = [...termsOf(`${p.question} ${p.options.join(' ')}`)].filter((t) => !deckCommon.has(t))
      const best = Math.max(0, ...[...problemTerms.values()].map((set) => terms.filter((t) => set.has(t)).length / Math.max(1, terms.length)))
      console.error(`[twin] ${best.toFixed(2)} n=${terms.length} ${p.question.slice(0, 90)}`)
    }
  }
  if (process.env.DECK_DEBUG) console.error(`[deck] ${topicSlug}: ${twins.size} of ${polls.length} poll candidates restate a worked problem`, [...twins].map((p) => p.question.slice(0, 70)))
  if (twins.size && polls.length - twins.size >= limits.maxPolls) polls = polls.filter((p) => !twins.has(p as PollSlide))
  const pollsBySeg = new Map<number, { poll: PollSlide; score: number }[]>()
  const reviewPolls: PollSlide[] = []
  for (const p of polls as PollSlide[]) {
    const terms = new Set([...termsOf(`${p.question} ${p.options.join(' ')}`)].filter((t) => !deckCommon.has(t)))
    const idx = bestSegment(terms, segTerms)
    if (idx >= 0) {
      const score = [...terms].filter((t) => segTerms[idx].has(t)).length
      pollsBySeg.set(idx, [...(pollsBySeg.get(idx) ?? []), { poll: p, score }])
    } else reviewPolls.push(p)
  }

  // Budget: same scaling as before (rich deck → up to 5 checks, thin → ≥2).
  // Matched polls spend the budget first; unmatched review polls only top a
  // deck up to its 2-poll minimum. When more beats have a matching question
  // than the budget allows, the polled beats are spread evenly through the
  // deck (one each) rather than taken front to back — a two-block deck used
  // to put all 16 checks in its first half. Any budget left after that pass
  // adds a second poll to beats that have one, again in lesson order.
  const pollTarget = content.length === 0
    ? polls.length
    : Math.min(polls.length, limits.maxPolls, Math.max(2, Math.ceil(content.length / 2)))
  let pollBudget = pollTarget
  const chosenBySeg = new Map<number, PollSlide[]>()
  let matchedChosen = 0
  const rankedBySeg = new Map(
    [...pollsBySeg].map(([i, ms]) => [i, [...ms].sort((a, b) => b.score - a.score).map((m) => m.poll)] as const),
  )
  const matchedBeats = [...rankedBySeg.keys()].sort((a, b) => a - b)
  const spread = matchedBeats.length > pollBudget && pollBudget > 1
    ? [...new Set(Array.from({ length: pollBudget }, (_, k) => matchedBeats[Math.round((k * (matchedBeats.length - 1)) / (pollBudget - 1))]))]
    : matchedBeats
  for (const perBeat of [1, 2]) {
    for (const i of perBeat === 1 ? spread : matchedBeats) {
      if (pollBudget <= 0) break
      const have = chosenBySeg.get(i) ?? []
      const take = (rankedBySeg.get(i) ?? []).slice(have.length, Math.min(perBeat, have.length + pollBudget))
      if (take.length === 0) continue
      chosenBySeg.set(i, [...have, ...take])
      pollBudget -= take.length
      matchedChosen += take.length
    }
  }
  const chosenReview = reviewPolls.slice(0, Math.min(pollBudget, Math.max(0, 2 - matchedChosen)))

  // ---- Intro: title + "what we'll cover" agenda built from section titles ----
  const slides: Slide[] = [{
    kind: 'title',
    title: topic.title,
    subtitle: topic.category?.course?.name ? `${topic.category.course.name} · in-class lesson` : 'In-class lesson',
  }]
  const agendaTitles = [...new Set(content.map((c) => c.title))]
    .filter((t) => t !== topic.title && !/^(Key Concepts|Worked Example)/.test(t) && !t.endsWith('(cont.)'))
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
