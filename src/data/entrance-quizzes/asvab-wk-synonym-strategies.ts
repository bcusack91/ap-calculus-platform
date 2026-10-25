/**
 * Entrance Quiz — Synonyms, Connotation and Test Strategy (ASVAB Word Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'The Word-Alone Question'
const P2 = 'Precise Meaning and Part of Speech'
const P3 = 'Connotation: Positive, Negative or Neutral'
const P4 = 'Look-Alike Words and Opposite Traps'
const P5 = 'Learning Words in Families'
const P6 = 'Pacing, Elimination and Guessing'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Word-Alone Question
  {
    id: 'wk-synonym-strategies-ent-1a',
    question: '**Abhor** most nearly means',
    options: ['adore', 'ignore', 'admire', 'detest'],
    correctIndex: 3,
    explanation: 'To abhor something is to hate it intensely: most people abhor cruelty. Adore and admire are the opposite direction, a common trap when you half-remember the word.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'wk-synonym-strategies-ent-1b',
    question: 'In a Word Knowledge question, "most nearly means" asks you to choose',
    options: ['the choice closest in meaning', 'the exact dictionary definition', 'the word that sounds most similar', 'the opposite of the test word'],
    correctIndex: 0,
    explanation: '"Most nearly" means closest. The right choice may not be a perfect definition, but it is nearer in meaning than the others. Sound-alikes are a trap.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Precise Meaning and Part of Speech
  {
    id: 'wk-synonym-strategies-ent-2a',
    question: `The inspector gave the truck a **thorough** check, testing every light, belt and hose.\n\n**Thorough** most nearly means`,
    options: ['friendly', 'final', 'complete', 'quick'],
    correctIndex: 2,
    explanation: 'Testing every light, belt and hose means nothing was skipped: thorough means complete and careful. Quick points the other way.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'wk-synonym-strategies-ent-2b',
    question: 'The two nations signed an **accord**. As a noun, **accord** most nearly means',
    options: ['agreeable', 'agreeably', 'agreement', 'agree'],
    correctIndex: 2,
    explanation: 'Accord here is a noun, so its synonym must be a noun: agreement. Agree is a verb, agreeable an adjective and agreeably an adverb.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Connotation: Positive, Negative or Neutral
  {
    id: 'wk-synonym-strategies-ent-3a',
    question: 'All four words describe a person who spends little money. Which one is the most NEGATIVE?',
    options: ['economical', 'cheap', 'careful', 'thrifty'],
    correctIndex: 1,
    explanation: 'Cheap, said of a person, is an insult: unwilling to spend even when they should. Thrifty, economical and careful all present saving money as a good thing.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'wk-synonym-strategies-ent-3b',
    question: `Even after the engine fire, the pilot stayed **composed** and talked the crew through the landing in a steady voice.\n\n**Composed** most nearly means`,
    options: ['sleepy', 'calm', 'unfeeling', 'frantic'],
    correctIndex: 1,
    explanation: 'Composed is a compliment: in control of your feelings under pressure, calm. Unfeeling shares the idea of not showing emotion but is an insult, and frantic is the opposite.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Look-Alike Words and Opposite Traps
  {
    id: 'wk-synonym-strategies-ent-4a',
    question: 'Choose the word that correctly completes the sentence: "Everyone ___ the driver climbed out of the truck."',
    options: ['expect', 'excerpt', 'except', 'accept'],
    correctIndex: 2,
    explanation: 'Except means "but" or "leaving out": everyone but the driver. Accept means to receive or agree to, expect means to look forward to, and an excerpt is a passage taken from a longer text.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'wk-synonym-strategies-ent-4b',
    question: `The suspect is accused of **perpetrating** the insurance fraud.\n\n**Perpetrating** most nearly means`,
    options: ['reporting', 'preventing', 'committing', 'continuing'],
    correctIndex: 2,
    explanation: 'To perpetrate a crime is to commit it. Continuing is the meaning of the look-alike perpetuate.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Learning Words in Families
  {
    id: 'wk-synonym-strategies-ent-5a',
    question: '**Tranquil** most nearly means',
    options: ['peaceful', 'noisy', 'crowded', 'frozen'],
    correctIndex: 0,
    explanation: 'Tranquil belongs to the calm family: a tranquil lake at dawn. Noisy and crowded are the opposite.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'wk-synonym-strategies-ent-5b',
    question: `A week of extra range time should **bolster** the squad's confidence before qualification.\n\n**Bolster** most nearly means`,
    options: ['test', 'hide', 'boost', 'shake'],
    correctIndex: 2,
    explanation: 'Bolster belongs to the strengthen family: extra practice boosts confidence. Shake is the opposite.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Pacing, Elimination and Guessing
  {
    id: 'wk-synonym-strategies-ent-6a',
    question: 'On the CAT-ASVAB, what happens to Word Knowledge questions you have not answered when time runs out?',
    options: ['They are dropped and have no effect at all', 'You are given extra time to finish them', 'The whole subtest is thrown out', 'They are scored as if you guessed at random'],
    correctIndex: 3,
    explanation: 'Unanswered items at the time limit are scored as if you had guessed at random, and a run of wrong answers at the end carries a relatively large penalty. Pacing so that you finish with real answers is the best protection.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'wk-synonym-strategies-ent-6b',
    question: '**Cunning** most nearly means',
    options: ['honest', 'slow', 'loyal', 'crafty'],
    correctIndex: 3,
    explanation: 'Cunning means clever in a sneaky way: a cunning fox. Even if you only remember that cunning is a little negative, honest and loyal fall away, and slow points the wrong direction.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'wk-synonym-strategies-ent-7a',
    question: '**Affluent** most nearly means',
    options: ['famous', 'wealthy', 'fluent', 'struggling'],
    correctIndex: 1,
    explanation: 'Affluent means wealthy: an affluent neighborhood. Fluent is a look-alike, and struggling is the opposite.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'wk-synonym-strategies-ent-7b',
    question: '**Apathy** most nearly means',
    options: ['resentment', 'indifference', 'enthusiasm', 'sympathy'],
    correctIndex: 1,
    explanation: 'A- (without) + path (feeling): apathy is a lack of interest or concern, indifference. Enthusiasm is the opposite, and sympathy shares the root but means feeling for someone.',
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
