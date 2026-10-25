/**
 * Entrance Quiz — CAT-ASVAB Strategy and Test Day (ASVAB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Numbers from asvab-pipeline/ASVAB-FACTS.md (Oct 2026).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'The CAT-ASVAB at a Glance'
const P2 = 'How the Adaptive Test Works'
const P3 = 'Pacing Each Subtest'
const P4 = 'Guessing, Unanswered Items and the Clock'
const P5 = 'Test Day at MEPS or a MET Site'
const P6 = 'Study Plans and Common Traps'
const P7 = 'Mastery Check'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'test-strategy-ent-1a',
    question: 'How many subtests does the CAT-ASVAB have?',
    options: ['4', '8', '10', '12'],
    correctIndex: 2,
    explanation: 'The CAT-ASVAB has 10 subtests: GS, AR, WK, PC, MK, EI, AI, SI, MC and AO.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'test-strategy-ent-1b',
    question: 'Which subtest comes right after Mathematics Knowledge on the CAT-ASVAB?',
    options: ['Paragraph Comprehension', 'Electronics Information', 'Auto Information', 'Mechanical Comprehension'],
    correctIndex: 1,
    explanation: 'The order is GS, AR, WK, PC, MK, EI, AI, SI, MC, AO, so Electronics Information follows Mathematics Knowledge.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'test-strategy-ent-2a',
    question: 'On the CAT-ASVAB, you answer a General Science question incorrectly. What usually comes next?',
    options: ['An easier question', 'A harder question', 'The same question again', 'The end of the subtest'],
    correctIndex: 0,
    explanation: 'A wrong answer usually leads to an easier question, and a right answer to a harder one.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'test-strategy-ent-2b',
    question: 'Can you change an answer on the CAT-ASVAB after moving to the next question?',
    options: ['Yes, anytime before the subtest ends', 'Yes, but only once per subtest', 'No; answered questions cannot be revisited', 'Only on the AFQT subtests'],
    correctIndex: 2,
    explanation: 'Once you answer a CAT-ASVAB question, you cannot return to it.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'test-strategy-ent-3a',
    question: 'Shop Information gives 6 minutes for 10 questions. What is the average time per question?',
    options: ['36 seconds', '60 seconds', '6 seconds', '45 seconds'],
    correctIndex: 0,
    explanation: '6 × 60 = 360 seconds, and 360 ÷ 10 = 36 seconds per question.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'test-strategy-ent-3b',
    question: 'Partway through Mechanical Comprehension, the counters show 10 questions and 15 minutes left. The average is 88 seconds per question. Are you on pace?',
    options: ['Yes; about 90 seconds remain per question', 'No; you are far behind', 'No; you are far ahead and should slow down a lot', 'There is no way to tell on the CAT'],
    correctIndex: 0,
    explanation: '15 minutes = 900 seconds, and 900 ÷ 10 = 90 seconds per remaining question, right at the 88-second average.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'test-strategy-ent-4a',
    question: 'On the CAT-ASVAB, what happens to questions you have not reached when the time limit ends?',
    options: ['They are thrown out of your score', 'They are scored as if you had guessed at random', 'They are carried over to the next subtest', 'They are scored as correct'],
    correctIndex: 1,
    explanation: 'The CAT applies a penalty that scores unfinished questions as if you had answered them at random.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'test-strategy-ent-4b',
    question: 'On which ASVAB format does the official advice say "there is no penalty for guessing"?',
    options: ['The CAT-ASVAB', 'The paper-and-pencil ASVAB', 'Both formats equally', 'Neither format'],
    correctIndex: 1,
    explanation: 'On paper, answer every question; blanks count as wrong. On the CAT, several wrong answers late in a subtest bring a relatively large penalty, so keep answering genuinely.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'test-strategy-ent-5a',
    question: 'Which of these must you bring to MEPS for the ASVAB?',
    options: ['A calculator', 'Your own scratch paper', 'A valid photo ID', 'A printed copy of your practice scores'],
    correctIndex: 2,
    explanation: 'Bring a valid photo ID. Scratch paper and pencils are provided at MEPS, and calculators are not allowed.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'test-strategy-ent-5b',
    question: 'What happens if you arrive late for your ASVAB session?',
    options: ['You start with less time', 'You are turned away', 'You skip General Science', 'Nothing, the test is self-paced'],
    correctIndex: 1,
    explanation: 'Late arrivals are turned away, so plan to arrive early.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'test-strategy-ent-6a',
    question: 'Which subtests should come first in almost any ASVAB study plan?',
    options: ['The four AFQT subtests: AR, MK, WK and PC', 'The technical subtests: EI, AI, SI and MC', 'Assembling Objects and General Science', 'Whichever subtests you already do best on'],
    correctIndex: 0,
    explanation: 'The AFQT subtests decide whether you can enlist, so they come first; then the subtests behind your target jobs\' line scores.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'test-strategy-ent-6b',
    question: 'Why should all of your ASVAB math practice be done without a calculator?',
    options: ['Calculators are not allowed on test day', 'Calculators give wrong answers on fractions', 'Practice tests forbid calculators by law', 'It makes the questions count double'],
    correctIndex: 0,
    explanation: 'No calculators are allowed on the ASVAB, so practicing by hand builds the skill you will actually use.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'test-strategy-ent-7a',
    question: 'The CAT-ASVAB time limits add up to 197 minutes, yet the average session is about 2 hours. Why?',
    options: ['Most people finish each subtest early', 'Some subtests are skipped for most people', 'The computer cuts the time limits in half', 'Only the AFQT subtests are timed'],
    correctIndex: 0,
    explanation: 'The time limits are generous and most people finish each subtest early, so the typical session is about 2 hours.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'test-strategy-ent-7b',
    question: 'Which strategy fits the CAT-ASVAB?',
    options: ['Skip hard questions and return to them', 'Answer every question genuinely, one at a time', 'Guess quickly at the end to finish', 'Use the first subtest to warm up, since it does not count'],
    correctIndex: 1,
    explanation: 'There is no going back, random guessing late in a subtest is penalized, and every subtest counts toward some score, so answer each question genuinely.',
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
