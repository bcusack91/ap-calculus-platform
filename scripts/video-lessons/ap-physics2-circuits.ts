/**
 * AP Physics 2: the three circuits topics as video lessons, built from the
 * SAME clips as the MCAT Circuits Parts 1–4 lessons (no second copy of any
 * file: each AP video names the MCAT lesson and video it reuses).
 *
 * Thirty of the 32 videos are used. The membrane pair (Part 4, videos 5–6) is
 * MCAT-only and left out. Each AP lesson ends in its topic's existing exit
 * quiz, so the videos were dealt out by what each exit quiz tests:
 *
 *   current-resistance-ohms-law  current · voltage · Ohm's law and resistivity · power · EMF
 *   series-parallel-circuits     series and parallel · networks and dividers · bulbs · capacitance ·
 *                                dielectrics and energy · capacitor networks
 *   kirchhoffs-laws              Kirchhoff's rules · cells and meters · RC circuits · defibrillators (an RC application)
 *
 * Questions are the MCAT lessons' own, on the same sections, except the few
 * that test chemistry or use MCAT wording (see `adapt`).
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec, SectionSpec, VideoSpec } from './lesson-spec'
import { LESSON as C1 } from './circuits1-lesson'
import { LESSON as C2 } from './circuits2-lesson'
import { LESSON as C3 } from './circuits3-lesson'
import { LESSON as C4 } from './circuits4-lesson'
import { PICKS } from '../../src/data/video-lesson-flashcards/ap2-circ'

const SOURCES: Record<string, LessonSpec> = { 'mcat-circ1': C1, 'mcat-circ2': C2, 'mcat-circ3': C3, 'mcat-circ4': C4 }

/**
 * Which MCAT video each AP video reuses lives in ONE place, beside the review
 * decks that follow the same picks: PICKS in src/data/video-lesson-flashcards/ap2-circ.ts.
 */
export const AP_LESSONS: { key: string; topicSlug: string; title: string }[] = [
  { key: 'ap2-circ1', topicSlug: 'current-resistance-ohms-law', title: 'Current, Resistance, and Ohm’s Law' },
  { key: 'ap2-circ2', topicSlug: 'series-parallel-circuits', title: 'Series and Parallel Circuits' },
  { key: 'ap2-circ3', topicSlug: 'kirchhoffs-laws', title: 'Kirchhoff’s Laws' },
]

/* ── the few questions that change for AP ───────────────────────────────── */

/** Two AP recap questions for "Cells and Meters", replacing the galvanic-cell and (moved) mAh questions. */
const CELLS_RECAP: CheckpointQuestion[] = [
  {
    question: 'Three identical cells, each with EMF ε and internal resistance r, are connected in series, all facing the same way. What are the EMF and internal resistance of the stack?',
    options: ['ε and r/3', '3ε and 3r', '3ε and r/3', 'ε and 3r'],
    correctAnswer: 1,
    explanation: 'In series the EMFs add and the internal resistances add: 3ε and 3r. ε and r/3 are the values for three identical cells in PARALLEL; the mixed options take one rule from each arrangement.',
  },
  {
    question: 'Why should an ideal voltmeter have a very large resistance?',
    options: [
      'So that it adds no resistance to the loop it is in',
      'So that the full current of the loop passes through it',
      'So that it draws almost no current from the circuit',
      'So that it lowers the voltage of the element it reads',
    ],
    correctAnswer: 2,
    explanation: 'A voltmeter sits in parallel with the element it reads. With a very large resistance it draws almost no current, so the circuit behaves as it did before the meter was attached. Adding no resistance to the loop and carrying the full current describe an ideal AMMETER, which goes in series.',
  },
]

/** Swap chemistry-only and MCAT-worded questions; everything else is passed through untouched. */
function adapt(key: string, video: number, sections: SectionSpec[]): SectionSpec[] {
  if (key === 'mcat-circ3' && video === 3) {
    // ΔG = −nFE and galvanic cells are AP Chemistry, not AP Physics 2: the clip stays, its questions go.
    const recap = sections.find((s) => s.id === '08-recap')!.questions!
    const mAh = recap.find((q) => q.question.includes('mAh'))!
    const parallelCells = recap.find((q) => q.question.includes('connected in parallel'))!
    return sections.map((s) => {
      if (s.id === '07-emf-source') return { ...s, questions: undefined }
      if (s.id === '04-capacity') return { ...s, questions: [mAh] }
      if (s.id === '08-recap') return { ...s, questions: [parallelCells, ...CELLS_RECAP] }
      return s
    })
  }
  // "A passage puts / gives …" is MCAT wording.
  const reword = (q: CheckpointQuestion): CheckpointQuestion => ({
    ...q,
    question: q.question
      .replace('A passage puts the fibrillation threshold near', 'Take the fibrillation threshold to be near')
      .replace('A passage gives a hand-to-hand body resistance of about', 'Hand-to-hand body resistance is about'),
  })
  return sections.map((s) => (s.questions ? { ...s, questions: s.questions.map(reword) } : s))
}

function videoFor(pick: readonly [string, number], n: number): VideoSpec {
  const [key, video] = pick
  const src = SOURCES[key].videos.find((v) => v.video === video)
  if (!src) throw new Error(`${key} has no video ${video}`)
  return { video: n, source: { key, video }, sections: adapt(key, video, src.sections) }
}

export const LESSONS: LessonSpec[] = AP_LESSONS.map((l) => ({
  key: l.key,
  topicSlug: l.topicSlug,
  courseSlug: 'ap-physics-2',
  title: l.title,
  instructor: { ...C1.instructor, courses: ['ap-physics-2'] },
  videos: PICKS[l.key].map((p, i) => videoFor(p, i + 1)),
}))
