/**
 * Printable note sheets (owner, 2026-11-13): paper that students write on
 * while they learn a topic, generated from the SAME data the lesson shows so
 * a sheet can never drift from its slides or clips.
 *
 *  - Live lecture  → GUIDED NOTES built from the topic's slide deck: the key
 *    sentences with the important word left blank, each equation half-written,
 *    tables with only their first column filled, polls as question + bubbles
 *    (never the answer), worked examples as problem + work space.
 *  - Concept video → CLIP TRACKER: one block per section, in on-screen order.
 *  - Worked-example video → WORKBOOK: the full problem, a pause reminder, a
 *    step scaffold, "my answer" beside "video answer".
 *  - Last page of each → a blank EQUATION SHEET (quantity, symbol, SI unit,
 *    equation) derived from the lesson's review flashcards.
 *
 * Everything here is pure (no database, no React); the pages under
 * /topics/<slug>/notes render it. Answers travel with the data, so only
 * server components may hold it: the page decides whether to print the key.
 */
import type { Slide } from '@/lib/slide-deck'
import { isNumericQuestion, isRecapSection, type QuestionFigure, type ReviewCard, type ReviewCardLookup, type StepRole, type VisibleStep } from '@/lib/video-lesson-core'

// ── Blanks ───────────────────────────────────────────────────────────────

/** A blank's placeholder in the text; the renderer swaps it for a rule (or the answer, on the key). */
export const blankToken = (n: number) => `@@B${n}@@`
export const BLANK_TOKEN = /@@B(\d+)@@/g

export type Blanked = { md: string; answers: string[] }

/** Capitalised abbreviations that are names, not emphasis: never blanked. */
const ACRONYMS = new Set([
  'MCAT', 'AAMC', 'CARS', 'ECG', 'EKG', 'EEG', 'EMF', 'LED', 'DNA', 'RNA', 'ATP', 'ADP', 'NADH', 'FADH', 'GFR', 'MRI', 'USA', 'STP', 'RMS', 'PEMDAS',
  'AND', 'THE', 'NOT', 'ALSO', 'ONE', 'ANY', 'FOR', 'BUT',
])

const INLINE_MATH = /(?<!\\)\$(?:[^$\\]|\\.)+\$/g

/**
 * Leave blanks in a line of slide text: the bold TERMS and the capitalised
 * emphasis words, which are what the deck's author marked as the point of the
 * sentence. Bold labels ("**Junction rule.**", "**(a)**", "**Problem 1.**")
 * stay printed, and nothing inside math is touched. At most `max` per line.
 */
export function blankText(md: string, max = 3): Blanked {
  const answers: string[] = []
  const fill = (plain: string) =>
    plain.replace(/\*\*([^*]+)\*\*|\b[A-Z]{3,}\b/g, (m: string, bold: string | undefined) => {
      if (answers.length >= max) return m
      if (bold !== undefined) {
        // Labels, part letters and long phrases stay printed: a blank is one term.
        if (/[.:?!]$/.test(bold.trim()) || /^\(\w+\)/.test(bold) || /^Problem\b/.test(bold) || bold.trim().split(/\s+/).length > 3) return m
        answers.push(bold.trim())
        return blankToken(answers.length - 1)
      }
      if (ACRONYMS.has(m)) return m
      answers.push(m.toLowerCase())
      return blankToken(answers.length - 1)
    })
  let out = ''
  let last = 0
  for (const m of md.matchAll(INLINE_MATH)) {
    out += fill(md.slice(last, m.index)) + m[0]
    last = m.index + m[0].length
  }
  out += fill(md.slice(last))
  return { md: out, answers }
}

// ── Live lecture: guided notes from the slide deck ───────────────────────

export type NoteFigure = { svg: string; alt: string; caption?: string }
export type WorkedPart = { label: string; prompt: string; solution: string | null }
export type WorkedProblem = { statement: string[]; parts: WorkedPart[]; figure?: NoteFigure }

export type NoteItem =
  | { kind: 'text'; md: string; answers: string[]; bullet: boolean }
  /** One display equation: the left side is printed, the right side is the student's to write. */
  | { kind: 'equation'; lhs: string | null; tex: string }
  /** Header row and first column printed; the other cells are blank. */
  | { kind: 'table'; header: string[]; rows: string[][] }
  | { kind: 'figure'; figure: NoteFigure }
  | { kind: 'poll'; number: number; question: string; options: string[] }
  /** Key takeaways / common traps: the title is printed, the sentence is the student's. */
  | { kind: 'recall'; entries: { title: string; body: string }[] }
  | { kind: 'worked'; problems: WorkedProblem[]; solutionNotes: string[]; solutionFigure?: NoteFigure }

export type NoteSection = { title: string; items: NoteItem[] }

const unitTitle = (title: string) => title.replace(/\s*\(cont\.\)\s*$/i, '').trim()
const stripBullet = (b: string) => b.replace(/^[-*•]\s+/, '')
const isBullet = (b: string) => /^[-*•]\s+/.test(b)
const isTable = (b: string) => b.includes('\n') && b.includes('|')
const isDisplayMath = (b: string) => b.startsWith('$$')
const RECALL_TITLE = /^(Key Takeaways|Common Traps)\b/i
const WORKED_PREFIX = /^Worked Example\s+[—–-]\s+/

function figureOf(s: { figure?: { svg: string; alt: string; caption?: string } }): NoteFigure | undefined {
  const f = s.figure
  if (!f || typeof f.svg !== 'string' || !f.svg) return undefined
  return { svg: f.svg, alt: typeof f.alt === 'string' ? f.alt : '', ...(f.caption ? { caption: f.caption } : {}) }
}

function parseTable(block: string): { header: string[]; rows: string[][] } | null {
  const lines = block.split('\n').map((l) => l.trim()).filter(Boolean)
  const cells = (l: string) => l.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
  const body = lines.filter((l) => !/^\|?\s*[-:]+[-:|\s]+$/.test(l))
  if (body.length < 2) return null
  const [header, ...rows] = body.map(cells)
  return { header, rows }
}

/** `$$a = b \qquad c = d$$` → one half-written equation per statement. */
function equationItems(block: string): NoteItem[] {
  const inner = block.replace(/^\$\$/, '').replace(/\$\$$/, '').trim()
  return inner
    .split(/\\qquad|,\s*\\quad/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((tex) => {
      const eq = tex.indexOf('=')
      const lhs = eq > 0 && eq <= 24 ? tex.slice(0, eq).trim() : null
      return { kind: 'equation' as const, lhs, tex }
    })
}

function contentItems(blocks: readonly string[]): NoteItem[] {
  const out: NoteItem[] = []
  for (const raw of blocks) {
    const b = raw.trim()
    if (!b || b.startsWith('→ Try')) continue
    if (isDisplayMath(b)) out.push(...equationItems(b))
    else if (isTable(b)) {
      const t = parseTable(b)
      if (t) out.push({ kind: 'table', ...t })
    } else {
      const { md, answers } = blankText(stripBullet(b))
      out.push({ kind: 'text', md, answers, bullet: isBullet(b) })
    }
  }
  return out
}

function recallEntries(blocks: readonly string[]): { title: string; body: string }[] {
  return blocks.map((raw) => {
    const text = stripBullet(raw.trim())
    const m = text.match(/^\*\*(.+?)\*\*[.:]?\s*([\s\S]*)$/)
    return m ? { title: m[1].replace(/[.:]$/, ''), body: m[2] } : { title: text, body: '' }
  })
}

/** Split a worked-example overview slide into the statement and its lettered parts. */
function workedOverview(blocks: readonly string[]): WorkedProblem {
  const statement: string[] = []
  const parts: WorkedPart[] = []
  for (const raw of blocks) {
    const b = raw.trim()
    if (!b || b.startsWith('→ ')) continue
    const m = b.match(/^\*\*\((\w+)\)\*\*\s*([\s\S]*)$/)
    if (m) parts.push({ label: m[1], prompt: m[2], solution: null })
    else statement.push(b)
  }
  return { statement, parts }
}

/**
 * A deck as guided-note sections, in slide order. Slides of one unit
 * ("Title", "Title (cont.)") share a section; a poll joins the section it
 * follows; a worked example and each takeaway/trap grid is its own section.
 * The title, agenda and exit-quiz slides are not printed.
 */
export function liveNoteSections(slides: readonly Slide[]): NoteSection[] {
  const sections: NoteSection[] = []
  let poll = 0
  const section = (title: string): NoteSection => {
    const last = sections[sections.length - 1]
    if (last && last.title === title) return last
    const s: NoteSection = { title, items: [] }
    sections.push(s)
    return s
  }
  for (let i = 0; i < slides.length; i++) {
    const s = slides[i]
    if (s.kind === 'poll') {
      poll++
      const target = sections[sections.length - 1] ?? section('Polls')
      target.items.push({ kind: 'poll', number: poll, question: s.question, options: [...s.options] })
      continue
    }
    if (s.kind !== 'content') continue
    if (/^What We'll Cover$/i.test(s.title.trim())) continue

    if (WORKED_PREFIX.test(s.title) && !/\(cont\.\)\s*$/i.test(s.title)) {
      const name = s.title.replace(WORKED_PREFIX, '').trim()
      const first = workedOverview(s.blocks)
      const fig = figureOf(s)
      if (fig) first.figure = fig
      const item: Extract<NoteItem, { kind: 'worked' }> = { kind: 'worked', problems: [first], solutionNotes: [] }
      const seen = new Set(s.blocks.map((b) => b.trim()))
      while (i + 1 < slides.length) {
        const n = slides[i + 1]
        if (n.kind !== 'content') break
        const isPart = n.title.startsWith(`${name} · `)
        const isCont = unitTitle(n.title).replace(WORKED_PREFIX, '').trim() === name && WORKED_PREFIX.test(n.title)
        if (!isPart && !isCont) break
        i++
        if (isCont) {
          item.solutionNotes.push(...n.blocks.map((b) => stripBullet(b.trim())).filter(Boolean))
          const f = figureOf(n)
          if (f) item.solutionFigure = f
          continue
        }
        const letter = n.title.match(/\((\w+)\)\s*$/)?.[1]
        if (!letter) {
          // "Name · Problem 2": the next problem's own overview.
          const next = workedOverview(n.blocks)
          const f = figureOf(n)
          if (f) next.figure = f
          item.problems.push(next)
          n.blocks.forEach((b) => seen.add(b.trim()))
          continue
        }
        const problem = item.problems[item.problems.length - 1]
        const part = problem.parts.find((p) => p.label === letter)
        const solution = n.blocks.map((b) => b.trim()).filter((b) => b && !seen.has(b) && !b.startsWith('→ Try')).join('\n\n')
        if (part) part.solution = solution || null
        else problem.parts.push({ label: letter, prompt: '', solution: solution || null })
      }
      sections.push({ title: `Worked example: ${name}`, items: [item] })
      continue
    }

    if (s.layout === 'grid' || RECALL_TITLE.test(unitTitle(s.title))) {
      section(unitTitle(s.title)).items.push({ kind: 'recall', entries: recallEntries(s.blocks) })
      continue
    }

    const target = section(unitTitle(s.title))
    const fig = figureOf(s)
    if (fig) target.items.push({ kind: 'figure', figure: fig })
    target.items.push(...contentItems(s.blocks))
  }
  // Two recall grids of one name in a row (a long list split over slides) read as one list.
  for (const s of sections) {
    const recalls = s.items.filter((it): it is Extract<NoteItem, { kind: 'recall' }> => it.kind === 'recall')
    if (recalls.length > 1) {
      recalls[0].entries.push(...recalls.slice(1).flatMap((r) => r.entries))
      s.items = s.items.filter((it) => it.kind !== 'recall' || it === recalls[0])
    }
  }
  return sections.filter((s) => s.items.length > 0)
}

/** How many blanks, polls and worked parts a set of guided notes asks for (shown in the page header, and used by tests). */
export function liveNoteCounts(sections: readonly NoteSection[]): { blanks: number; polls: number; workedParts: number } {
  let blanks = 0
  let polls = 0
  let workedParts = 0
  for (const s of sections) {
    for (const it of s.items) {
      if (it.kind === 'text') blanks += it.answers.length
      else if (it.kind === 'equation') blanks++
      else if (it.kind === 'table') blanks += it.rows.reduce((n, r) => n + Math.max(0, r.length - 1), 0)
      else if (it.kind === 'recall') blanks += it.entries.length
      else if (it.kind === 'poll') polls++
      else if (it.kind === 'worked') workedParts += it.problems.reduce((n, p) => n + Math.max(1, p.parts.length), 0)
    }
  }
  return { blanks, polls, workedParts }
}

// ── Equation sheet (last page) ───────────────────────────────────────────

export type EquationSheet = {
  /** "What symbol stands for X, and what is its SI unit?" cards: the student writes symbol and unit. */
  quantities: { quantity: string; answer: string }[]
  /** Cards whose answer opens with an equation: the student writes it and names each symbol. */
  equations: { prompt: string; answer: string }[]
}

const SYMBOL_CARD = /^What symbol stands for (.+?),? and what is its SI unit\?/i

/** The lesson's review flashcards as a blank formula sheet. Each quantity and each prompt appears once. */
export function equationSheet(cards: readonly ReviewCard[]): EquationSheet {
  const quantities: EquationSheet['quantities'] = []
  const equations: EquationSheet['equations'] = []
  const seen = new Set<string>()
  for (const c of cards) {
    const front = c.front.trim()
    if (seen.has(front)) continue
    const q = front.match(SYMBOL_CARD)
    if (q) {
      seen.add(front)
      quantities.push({ quantity: q[1].charAt(0).toUpperCase() + q[1].slice(1), answer: c.back })
      continue
    }
    const first = c.back.trim().match(/^\$((?:[^$\\]|\\.)+)\$/)
    if (first && first[1].includes('=')) {
      seen.add(front)
      equations.push({ prompt: front, answer: c.back })
    }
  }
  return { quantities, equations }
}

// ── Video lessons: tracker and workbook ──────────────────────────────────

export type SheetProblem = {
  question: string
  figure?: QuestionFigure
  parts: { label: string; prompt: string; unit: string | null; expected: string | null }[]
  explanation: string
}

export type VideoSheetSection = {
  title: string
  role: StepRole
  durationSec: number
  recap: boolean
  /** Multiple-choice checkpoint questions asked on screen after this section. */
  checkpoints: number
  /** Worked problems posed in this section (numeric questions). */
  problems: SheetProblem[]
}

export type VideoSheet = {
  video: number | null
  title: string
  /** A video that poses worked problems gets the workbook; any other gets the tracker. */
  kind: 'tracker' | 'workbook'
  sections: VideoSheetSection[]
  /** The quantities this video's flashcards open with: the "from memory" table before the recap. */
  quantities: EquationSheet['quantities']
}

/**
 * One sheet per source video of a section-based lesson, in lesson order.
 * Steps without a video number (a clip-per-step lesson) form a single tracker.
 */
export function videoNoteSheets(steps: readonly VisibleStep[], videoTitles: Readonly<Record<number, string>> = {}, lookup?: ReviewCardLookup): VideoSheet[] {
  const sheets: VideoSheet[] = []
  for (const s of steps) {
    const video = s.meta.video
    let sheet = sheets[sheets.length - 1]
    if (!sheet || sheet.video !== video) {
      const cards = lookup && s.meta.lesson !== null && video !== null ? lookup(s.meta.lesson, video) ?? [] : []
      sheet = {
        video,
        title: video !== null ? videoTitles[video] ?? `Video ${video}` : 'Video lesson',
        kind: 'tracker',
        sections: [],
        quantities: equationSheet(cards).quantities,
      }
      sheets.push(sheet)
    }
    const problems: SheetProblem[] = []
    let checkpoints = 0
    for (const { q } of s.visibleQuestions) {
      if (isNumericQuestion(q)) {
        problems.push({
          question: q.question,
          ...(q.figure ? { figure: q.figure } : {}),
          parts: q.parts.map((p) => ({ label: p.label, prompt: p.prompt, unit: p.unit ?? null, expected: p.expected ?? null })),
          explanation: q.explanation,
        })
      } else checkpoints++
    }
    if (s.meta.role !== 'teach' || problems.length > 0) sheet.kind = 'workbook'
    sheet.sections.push({
      title: s.clip.title,
      role: s.meta.role,
      durationSec: s.clip.durationSec,
      recap: isRecapSection(s.meta.section),
      checkpoints,
      problems,
    })
  }
  return sheets
}

/** "4:05" for a section length. */
export function clockLabel(sec: number): string {
  const s = Math.max(0, Math.round(sec))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}
