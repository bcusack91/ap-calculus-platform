/**
 * Entrance Quiz — Your AFQT, Line Scores and Job Eligibility (ASVAB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Numbers from asvab-pipeline/ASVAB-FACTS.md (Oct 2026).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'How ASVAB Scores Work'
const P2 = 'Standard Scores and the VE Composite'
const P3 = 'The AFQT Formula and Percentile'
const P4 = 'AFQT Categories and Branch Minimums'
const P5 = 'Line Scores and Job Eligibility'
const P6 = 'Retests, PiCAT and Score Strategy'
const P7 = 'Mastery Check'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'afqt-scores-ent-1a',
    question: 'An applicant aces General Science and Electronics Information. How much does that raise the AFQT?',
    options: ['A lot, since they are science subtests', 'Not at all; they are not AFQT subtests', 'A little, since each counts half', 'Only on the paper version'],
    correctIndex: 1,
    explanation: 'The AFQT uses only AR, MK, WK and PC. GS and EI feed line scores, which matter for job eligibility.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'afqt-scores-ent-1b',
    question: 'A score report shows an AFQT of 45. Which reading is correct?',
    options: ['45% of the AFQT questions were answered correctly', '45% of the reference group scored at or below it', 'The test-taker failed, since 50 is passing', 'The test-taker qualifies for 45 jobs'],
    correctIndex: 1,
    explanation: 'The AFQT is a percentile from 1 to 99, not a percent correct, and the ASVAB has no pass mark.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'afqt-scores-ent-2a',
    question: 'On the ASVAB standard-score scale, how far above average is a score of 70?',
    options: ['20 points, or two standard deviations', '70 percent above average', '7 standard deviations', '10 points, or one standard deviation'],
    correctIndex: 0,
    explanation: 'The mean is 50 and one standard deviation is 10, so 70 is 20 points, or two standard deviations, above average.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'afqt-scores-ent-2b',
    question: 'A recruit has WK 62 and PC 54. Which describes VE?',
    options: ['Exactly 116, the sum', 'Exactly 58, the plain average', 'A weighted blend nearer WK, on the same scale', 'Equal to the PC score, since PC is the reading subtest'],
    correctIndex: 2,
    explanation: 'VE weights WK more heavily than PC (PC gets about 0.62 of WK\'s weight) and is re-scaled to mean 50, SD 10. It is neither a sum nor a plain average.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'afqt-scores-ent-3a',
    question: 'Which formula gives the AFQT sum that is converted into a percentile?',
    options: ['AR + MK + WK + PC', 'AR + MK + 2 × VE', '2 × AR + MK + VE', '(AR + MK + VE) ÷ 3'],
    correctIndex: 1,
    explanation: 'The AFQT sum is AR + MK + 2 × VE, using standard scores; the official table converts it to a percentile.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'afqt-scores-ent-3b',
    question: 'An applicant has AR 44, MK 49 and VE 45. Given that a sum of 183 is the 31st percentile, what is the applicant\'s sum, and is it at least 183?',
    options: ['183, exactly at the 31st percentile', '138, well below it', '182, one point short', '184, one point above'],
    correctIndex: 0,
    explanation: '44 + 49 + 2(45) = 44 + 49 + 90 = 183, exactly the sum that converts to the 31st percentile.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'afqt-scores-ent-4a',
    question: 'Which AFQT range is Category IIIB?',
    options: ['50–64', '31–49', '21–30', '65–92'],
    correctIndex: 1,
    explanation: 'Category IIIB is 31 to 49. IIIA is 50 to 64, IVA is 21 to 30, and II is 65 to 92.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'afqt-scores-ent-4b',
    question: 'Branch minimum AFQT scores change with recruiting needs. What should an applicant do with a minimum found in a prep book?',
    options: ['Trust it if the book is recent', 'Check with a recruiter', 'Add 10 points to be safe and stop there', 'Ignore minimums, since only line scores count'],
    correctIndex: 1,
    explanation: 'Minimums move and some branches no longer publish one, so a recruiter is the place to confirm the current number.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'afqt-scores-ent-5a',
    question: 'What do line scores (composites) decide?',
    options: ['Whether you can enlist at all', 'Which military jobs you qualify for', 'How long your scores stay valid', 'Your AFQT category'],
    correctIndex: 1,
    explanation: 'Line scores combine subtest scores and set job eligibility. The AFQT decides enlistment eligibility and category.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'afqt-scores-ent-5b',
    question: 'The Navy OPS composite is AR + MK + AO + VE. Which subtest makes OPS different from most composites in other services?',
    options: ['Arithmetic Reasoning', 'Mathematics Knowledge', 'Assembling Objects', 'Word Knowledge'],
    correctIndex: 2,
    explanation: 'Assembling Objects appears in Navy composites (MEC2 and OPS) and Navy rating standards, but not in the Army, Air Force or Marine Corps composites.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'afqt-scores-ent-6a',
    question: 'How long can ASVAB scores be used for enlistment after the test date?',
    options: ['6 months', '1 year', '2 years', '5 years'],
    correctIndex: 2,
    explanation: 'Scores can be used for enlistment for up to 2 years (longer for people already in the Delayed Entry Program).',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'afqt-scores-ent-6b',
    question: 'An applicant who already took the ASVAB at MEPS asks to take the PiCAT at home. What is the answer?',
    options: ['Yes, the PiCAT is open to anyone', 'No; first-timers only', 'Yes, but only after 6 months', 'Yes, as long as a proctored Vtest follows it'],
    correctIndex: 1,
    explanation: 'The PiCAT is only for applicants who have never taken the ASVAB, and it can be taken once.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'afqt-scores-ent-7a',
    question: 'An applicant\'s VE rises by 2 and AR falls by 2, with MK unchanged. What happens to the AFQT sum?',
    options: ['It stays the same', 'It rises by 2', 'It falls by 2', 'It rises by 4'],
    correctIndex: 1,
    explanation: 'VE counts twice: +2 VE adds 4, and −2 AR subtracts 2, for a net change of +2.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'afqt-scores-ent-7b',
    question: 'Which statement about ASVAB scores is true?',
    options: ['Your highest score is always your score of record', 'The Army GT score is built from AR and VE', 'Assembling Objects counts toward the AFQT', 'The AFQT is the percent of questions answered correctly'],
    correctIndex: 1,
    explanation: 'Army GT = AR + VE. The most recent valid score (not the highest) counts, AO is not in the AFQT, and the AFQT is a percentile.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
