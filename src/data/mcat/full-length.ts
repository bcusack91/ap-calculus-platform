/**
 * Assembles a passage-based full-length MCAT practice exam from the section
 * banks, in real-exam section order, each science section followed by its
 * discrete (non-passage) questions — mirroring the AAMC format.
 *
 * This targets the official 230-question form: Chem/Phys 59, CARS 53,
 * Bio/Biochem 59, Psych/Soc 59. Each section is packed to its exact AAMC count
 * — whole passage sets are taken greedily (a set is never split) without
 * exceeding the target, then science sections are topped up with discrete
 * questions to land precisely on the count. The UI scores it section-aware on
 * the 472-528 scale.
 */
import type { MCATPassage, MCATSection } from './types'
import { MCAT_SECTION_META } from './types'
import { CARS_PASSAGES, SECTION_PASSAGES, discretesAsPassage } from './passages'
import { countQuestions } from './types'

type ScienceSection = Exclude<MCATSection, 'cars'>

/**
 * Pack a science section to exactly its official question count: include whole
 * passages greedily up to the target, then append a discretes set sized to fill
 * the remainder. Falls short only if the banks can't supply enough (reported via
 * the realized count).
 */
const rotate = <T>(arr: T[], n: number): T[] => (n ? [...arr.slice(n), ...arr.slice(0, n)] : arr)

function packScienceSection(section: ScienceSection, offset: number): { passages: MCATPassage[]; count: number } {
  const target = MCAT_SECTION_META[section].questions
  const out: MCATPassage[] = []
  let count = 0
  for (const p of rotate(SECTION_PASSAGES[section], offset)) {
    if (count + p.questions.length <= target) {
      out.push(p)
      count += p.questions.length
    }
  }
  const remainder = target - count
  if (remainder > 0) {
    const discretes = discretesAsPassage(section, remainder)
    if (discretes) {
      out.push(discretes)
      count += discretes.questions.length
    }
  }
  return { passages: out, count }
}

/** CARS has no discretes, so take whole passages until the target is reached. */
function packCars(offset: number): { passages: MCATPassage[]; count: number } {
  const target = MCAT_SECTION_META.cars.questions
  const out: MCATPassage[] = []
  let count = 0
  for (const p of rotate(CARS_PASSAGES, offset)) {
    if (count >= target) break
    out.push(p)
    count += p.questions.length
  }
  return { passages: out, count }
}

export interface MCATFullLength {
  form: 1 | 2
  passages: MCATPassage[]
  questionCount: number
  sectionCounts: Record<MCATSection, number>
}

/**
 * Two interchangeable full-length forms. With the current bank sizes the two
 * forms partially overlap (there aren't 460 unique questions yet), but form 2
 * rotates each section to LEAD with the passages form 1 didn't use, so a retake
 * is meaningfully different. As the banks grow the overlap shrinks to zero.
 */
export function buildFullLength(form: 1 | 2): MCATFullLength {
  const off = (arr: MCATPassage[]) => (form === 2 ? Math.floor(arr.length / 2) : 0)
  const cp = packScienceSection('chem-phys', off(SECTION_PASSAGES['chem-phys']))
  const cars = packCars(off(CARS_PASSAGES))
  const bb = packScienceSection('bio-biochem', off(SECTION_PASSAGES['bio-biochem']))
  const ps = packScienceSection('psych-soc', off(SECTION_PASSAGES['psych-soc']))
  const passages = [...cp.passages, ...cars.passages, ...bb.passages, ...ps.passages]
  return {
    form,
    passages,
    questionCount: countQuestions(passages),
    sectionCounts: { 'chem-phys': cp.count, cars: cars.count, 'bio-biochem': bb.count, 'psych-soc': ps.count },
  }
}

export const FULL_LENGTH_FORMS: MCATFullLength[] = [buildFullLength(1), buildFullLength(2)]

// Backward-compatible exports (form 1).
export const FULL_LENGTH_PASSAGES: MCATPassage[] = FULL_LENGTH_FORMS[0].passages
export const FULL_LENGTH_QUESTION_COUNT = FULL_LENGTH_FORMS[0].questionCount
export const FULL_LENGTH_SECTION_COUNTS: Record<MCATSection, number> = FULL_LENGTH_FORMS[0].sectionCounts

/** Sum of official per-section limits (Chem/Phys 95 + CARS 90 + Bio 95 + Psych 95). */
export const FULL_LENGTH_MINUTES =
  MCAT_SECTION_META['chem-phys'].minutes +
  MCAT_SECTION_META.cars.minutes +
  MCAT_SECTION_META['bio-biochem'].minutes +
  MCAT_SECTION_META['psych-soc'].minutes
