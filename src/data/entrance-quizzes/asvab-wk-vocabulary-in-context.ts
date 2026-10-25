/**
 * Entrance Quiz — Vocabulary in Context (ASVAB Word Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Word Knowledge on the CAT-ASVAB'
const P2 = 'Definition and Restatement Clues'
const P3 = 'Contrast Clues'
const P4 = 'Example and Cause-and-Effect Clues'
const P5 = 'Words with More Than One Meaning'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Word Knowledge on the CAT-ASVAB
  {
    id: 'wk-vocabulary-in-context-ent-1a',
    question: `The range will **cease** firing at noon so the target crews can walk out and replace the paper targets.\n\n**Cease** most nearly means`,
    options: ['stop', 'practice', 'speed up', 'begin'],
    correctIndex: 0,
    explanation: 'Crews can only walk onto the range if the shooting has ended, so cease means stop. Begin and speed up point the opposite way.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'wk-vocabulary-in-context-ent-1b',
    question: 'The AFQT is built from the AR, MK and VE scores, where VE is a blend of Word Knowledge and Paragraph Comprehension. How is VE counted in the AFQT?',
    options: ['Half as much as MK', 'Only as a tiebreaker', 'Once, the same as AR', 'Twice as much as AR'],
    correctIndex: 3,
    explanation: 'The AFQT sum is AR + MK + 2 × VE, so the verbal composite is counted twice and makes up half of the sum. That is why Word Knowledge is worth so much study time.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Definition and Restatement Clues
  {
    id: 'wk-vocabulary-in-context-ent-2a',
    question: `Please **omit**, or leave out, your Social Security number on the first page of the form.\n\n**Omit** most nearly means`,
    options: ['circle', 'repeat', 'include', 'skip'],
    correctIndex: 3,
    explanation: 'The restatement "or leave out" defines the word: omit means skip or leave out. Include is the opposite trap.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'wk-vocabulary-in-context-ent-2b',
    question: `The rental truck was **pristine** — spotless inside and out, as if it had never been driven.\n\n**Pristine** most nearly means`,
    options: ['borrowed', 'damaged', 'enormous', 'unspoiled'],
    correctIndex: 3,
    explanation: 'The dash introduces the restatement: "spotless inside and out, as if it had never been driven." Pristine means unspoiled, in perfect like-new condition. Damaged is the opposite.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Contrast Clues
  {
    id: 'wk-vocabulary-in-context-ent-3a',
    question: `The schedule for next week is only **tentative**, but the schedule for this week is final.\n\n**Tentative** most nearly means`,
    options: ['official', 'uncertain', 'crowded', 'printed'],
    correctIndex: 1,
    explanation: '"But" contrasts tentative with "final." The opposite of final is not yet settled, so tentative means uncertain. Official is close to the other side of the contrast, the trap.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'wk-vocabulary-in-context-ent-3b',
    question: `Unlike the cheerful weather on Saturday, Sunday's sky was **dismal**, gray and drizzling all day.\n\n**Dismal** most nearly means`,
    options: ['gloomy', 'windy', 'bright', 'freezing'],
    correctIndex: 0,
    explanation: '"Unlike the cheerful weather" sets up the contrast, and "gray and drizzling" confirms it: dismal means gloomy and depressing. Bright is the cheerful side of the contrast.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Example and Cause-and-Effect Clues
  {
    id: 'wk-vocabulary-in-context-ent-4a',
    question: `New night-vision goggles will **enhance** the team's ability to spot movement after dark.\n\n**Enhance** most nearly means`,
    options: ['measure', 'replace', 'limit', 'improve'],
    correctIndex: 3,
    explanation: 'Night-vision goggles make it easier to see in the dark, so they enhance, or improve, the team\'s ability. Limit is the opposite direction.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'wk-vocabulary-in-context-ent-4b',
    question: `Because the wildfire was spreading toward the town so quickly, officials took **drastic** steps, such as closing every highway and ordering everyone out within an hour.\n\n**Drastic** most nearly means`,
    options: ['minor', 'extreme', 'careful', 'secret'],
    correctIndex: 1,
    explanation: 'The examples, closing every highway and emptying a town within an hour, are severe actions taken because of a fast-moving fire. Drastic means extreme. Minor is the opposite, and careful does not capture how severe the steps were.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Words with More Than One Meaning
  {
    id: 'wk-vocabulary-in-context-ent-5a',
    question: `Before the blood test, patients must **fast** for twelve hours, drinking only water.\n\n**Fast** most nearly means`,
    options: ['go without food', 'stay up all night', 'move quickly', 'lie very still'],
    correctIndex: 0,
    explanation: 'Drinking only water for twelve hours before a blood test means not eating: to fast is to go without food. "Move quickly" plays on the common meaning of fast as quick.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'wk-vocabulary-in-context-ent-5b',
    question: `It is against the law to **harbor** a person who is running from the police.\n\n**Harbor** most nearly means`,
    options: ['dock', 'shelter', 'chase', 'report'],
    correctIndex: 1,
    explanation: 'Here harbor is an action done for a person: to harbor someone is to give them shelter or hide them. Dock plays on the common meaning of a harbor as a place for ships.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'wk-vocabulary-in-context-ent-6a',
    question: `Soldiers with a doctor's note are **exempt** from the morning run.\n\nWhich choice is the "fits the sentence" trap: a word that makes a sensible sentence but does NOT mean **exempt**?`,
    options: ['released', 'tired', 'freed', 'excused'],
    correctIndex: 1,
    explanation: 'Exempt means excused or freed from a duty, so excused, released and freed all match it. "Soldiers with a doctor\'s note are tired from the morning run" is a sensible sentence, but tired is not what exempt means.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'wk-vocabulary-in-context-ent-6b',
    question: 'The CAT-ASVAB Word Knowledge subtest gives 9 minutes for 15 scored questions. About how long is that per question?',
    options: ['90 seconds', '15 seconds', '36 seconds', '60 seconds'],
    correctIndex: 2,
    explanation: '9 minutes is 540 seconds, and 540 ÷ 15 = 36 seconds per question. Easy words take far less, which banks time for the hard ones.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'wk-vocabulary-in-context-ent-7a',
    question: '**Apprehensive** most nearly means',
    options: ['confused', 'certain', 'grateful', 'anxious'],
    correctIndex: 3,
    explanation: 'Apprehensive means anxious or uneasy about something that might happen: many people feel apprehensive before their first day at basic training. Certain is close to the opposite.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'wk-vocabulary-in-context-ent-7b',
    question: `Fuel prices **fluctuate** so much that the unit budgets for the highest price it saw last year.\n\n**Fluctuate** most nearly means`,
    options: ['vanish', 'vary', 'climb', 'settle'],
    correctIndex: 1,
    explanation: 'Prices that fluctuate go up and down, which is why the unit plans for the highest one. Fluctuate means vary. Climb only goes up, and settle is the opposite.',
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
