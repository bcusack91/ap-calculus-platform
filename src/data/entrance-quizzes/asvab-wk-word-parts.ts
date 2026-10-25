/**
 * Entrance Quiz — Roots, Prefixes and Suffixes (ASVAB Word Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'How Word Parts Unlock Meaning'
const P2 = 'Prefixes That Change Meaning'
const P3 = 'Latin Roots'
const P4 = 'Greek Roots and Number Parts'
const P5 = 'Suffixes and Parts of Speech'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — How Word Parts Unlock Meaning
  {
    id: 'wk-word-parts-ent-1a',
    question: 'In the word **misplace**, which part is the prefix?',
    options: ['place', 'lace', 'misp', 'mis'],
    correctIndex: 3,
    explanation: 'A prefix comes at the front and changes the meaning: mis- (wrongly) + place = put in the wrong place. "Place" is the base word, and "lace" and "misp" are not meaningful parts of this word.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'wk-word-parts-ent-1b',
    question: '**Deflate** most nearly means',
    options: ['let the air out', 'fill it with air', 'tie it shut tight', 'cover it up'],
    correctIndex: 0,
    explanation: 'De- (down, undo) + flate (blow): to undo the blowing up, to let the air out. Filling it with air is the opposite, inflate.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Prefixes That Change Meaning
  {
    id: 'wk-word-parts-ent-2a',
    question: `Before anyone handles the device, the bomb technician must **deactivate** it.\n\n**Deactivate** most nearly means`,
    options: ['trigger', 'inspect', 'disable', 'move'],
    correctIndex: 2,
    explanation: 'De- (undo) + activate: to undo the activation, to make it stop working. Disable matches. Trigger is the opposite.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'wk-word-parts-ent-2b',
    question: '**Exclude** most nearly means',
    options: ['surround', 'count up', 'welcome in', 'leave out'],
    correctIndex: 3,
    explanation: 'Ex- (out) + clude (shut): to shut out, leave out. Welcome in is the opposite; include is its direct opposite.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Latin Roots
  {
    id: 'wk-word-parts-ent-3a',
    question: `The fireworks show over the harbor was a **spectacle** that drew thousands of people.\n\n**Spectacle** most nearly means`,
    options: ['danger', 'display', 'mistake', 'contest'],
    correctIndex: 1,
    explanation: 'Spect means look: a spectacle is something remarkable to look at, an impressive display. Contest and danger do not carry the "look" root.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'wk-word-parts-ent-3b',
    question: 'The root **ject** in **inject** means',
    options: ['hold', 'throw', 'pierce', 'heal'],
    correctIndex: 1,
    explanation: 'Ject means throw (eject, reject, project). To inject is to "throw in," to force a liquid into something, as with a syringe.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Greek Roots and Number Parts
  {
    id: 'wk-word-parts-ent-4a',
    question: '**Telepathy** most nearly means',
    options: ['mind reading', 'long-distance travel', 'fear of illness', 'loud speech'],
    correctIndex: 0,
    explanation: 'Tele (far) + path (feeling): feeling from far away, that is, sensing another person\'s thoughts without words. Long-distance travel takes only the "tele" half.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'wk-word-parts-ent-4b',
    question: 'A **semiannual** inspection takes place how often?',
    options: ['Every half month', 'Once a year', 'Every two years', 'Twice a year'],
    correctIndex: 3,
    explanation: 'Semi- means half and annual means yearly: every half year, which is twice a year. "Every two years" would be biennial.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Suffixes and Parts of Speech
  {
    id: 'wk-word-parts-ent-5a',
    question: `Arguing with the referee was **pointless**; the call had already been made.\n\n**Pointless** most nearly means`,
    options: ['impolite', 'skillful', 'brief', 'useless'],
    correctIndex: 3,
    explanation: '-less means without: without a point, without purpose, so useless. Impolite may be true of arguing with a referee, but the suffix tells you the word is about having no point.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'wk-word-parts-ent-5b',
    question: 'The suffix in **standardize** tells you the word is a',
    options: ['verb', 'adjective', 'adverb', 'noun'],
    correctIndex: 0,
    explanation: '-ize means "to make," so standardize is a verb: to make something standard. Its synonym on the test would also have to be a verb.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'wk-word-parts-ent-6a',
    question: 'Which word does NOT contain the prefix **pre-** meaning "before"?',
    options: ['preview', 'prepay', 'pressure', 'prehistoric'],
    correctIndex: 2,
    explanation: 'Preview (see before), prepay (pay before) and prehistoric (before written history) all use pre- = before. Pressure only begins with the letters p-r-e; it comes from "press."',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'wk-word-parts-ent-6b',
    question: '**Insight** most nearly means',
    options: ['understanding', 'eyesight', 'misconception', 'blindness'],
    correctIndex: 0,
    explanation: 'Here in- means in, not not: insight is seeing into something, a deep understanding. Blindness is the trap for anyone who reads in- as not, and eyesight takes only the "sight" half.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'wk-word-parts-ent-7a',
    question: `The satellite will **transmit** weather images to the ground station every hour.\n\n**Transmit** most nearly means`,
    options: ['erase', 'store', 'request', 'send'],
    correctIndex: 3,
    explanation: 'Trans- (across) + mit (send): to send across. The satellite sends the images down to the ground. Store and request are other things done with data.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'wk-word-parts-ent-7b',
    question: `The doctor was relieved to find that the lump was **benign**.\n\n**Benign** most nearly means`,
    options: ['growing', 'harmless', 'painful', 'large'],
    correctIndex: 1,
    explanation: 'Bene/beni means good: a benign tumor is harmless, not cancerous, which is why the doctor was relieved. Painful and growing would be causes for worry.',
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
