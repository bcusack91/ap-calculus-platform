/**
 * Entrance Quiz — Language & Intelligence (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: The Building Blocks of Language
  {
    id: 'li-ent-1a',
    question: 'How many morphemes are in the word "unhelpfulness"?',
    options: ['2', '3', '4', '5'],
    correctIndex: 2,
    explanation: 'The word combines four units of meaning: un- + help + -ful + -ness. Morphemes are counted by meaning, not by syllables or letters.',
    partNumber: 1,
    partTitle: 'The Building Blocks of Language',
  },
  {
    id: 'li-ent-1b',
    question: 'English has only about 40 phonemes and a limited set of grammar rules, yet speakers keep producing and understanding sentences that have never been spoken before. Which feature of language does this best show?',
    options: ['It is generative', 'Its symbols are arbitrary', 'Its phonemes carry meaning', 'Its syntax is optional'],
    correctIndex: 0,
    explanation: 'A limited set of words and rules lets speakers produce endless new sentences they have never heard, which is what it means for language to be generative.',
    partNumber: 1,
    partTitle: 'The Building Blocks of Language',
  },

  // Part 2: How Language Develops
  {
    id: 'li-ent-2a',
    question: 'A 10-month-old repeats strings such as "ma-ma-ma" and "ga-ga-ga," using mostly the sounds of the language spoken at home, though she is not yet using any words. Which stage is she in?',
    options: ['Cooing', 'Babbling', 'One-word stage', 'Telegraphic speech'],
    correctIndex: 1,
    explanation: 'Repeated consonant-vowel syllables are babbling, which by about 10 months narrows to the sounds of the home language. Cooing is vowel-like, and the one-word stage begins around the first birthday.',
    partNumber: 2,
    partTitle: 'How Language Develops',
  },
  {
    id: 'li-ent-2b',
    question: 'Practice data: immigrants who arrived in a new country at ages 3–7 average 98% on a grammar test in the new language, those who arrived at 8–10 average 92%, at 11–15 average 85%, and at 17 or older average 78%. Which conclusion is best supported?',
    options: ['Adults cannot learn a second language', 'Grammar is unrelated to age of exposure', 'Language is learned most easily when young', 'Older learners master grammar most fully'],
    correctIndex: 2,
    explanation: 'Scores decline steadily as age of arrival rises, the classic sensitive-period pattern. Late learners still score well above zero, so learning remains possible, just harder and less complete.',
    partNumber: 2,
    partTitle: 'How Language Develops',
  },

  // Part 3: Intelligence Theories
  {
    id: 'li-ent-3a',
    question: 'Which finding best supports the view that intelligence is a single general ability (g)?',
    options: ['A stroke impairs language but spares spatial skill', 'Fluid and crystallized abilities change differently with age', 'Many people show uneven profiles of strengths', 'People who do well on one test tend to do well on all'],
    correctIndex: 3,
    explanation: 'Positive correlations among scores on very different tests suggest one broad ability underlies them all. The other findings show abilities separating, which supports multiple abilities.',
    partNumber: 3,
    partTitle: 'Intelligence Theories',
  },
  {
    id: 'li-ent-3b',
    question: 'An "intelligence" test written in a large city asks children how to read a subway map and what to do when a library book is overdue. Children from a remote farming region score far lower. Which conclusion is best supported?',
    options: ['It may measure cultural familiarity, not ability', 'The farming children have lower reasoning ability', 'Reliable results mean the test must be valid', 'City children have a more general intelligence (g)'],
    correctIndex: 0,
    explanation: 'Content tied to one culture lowers scores for reasons unrelated to reasoning, so the definition and measurement of intelligence can be biased.',
    partNumber: 3,
    partTitle: 'Intelligence Theories',
  },

  // Part 4: IQ Testing
  {
    id: 'li-ent-4a',
    question: 'A new creativity test gives nearly identical scores when students take it a month apart (r = +.92), but the scores are unrelated to teachers\' ratings of creativity or to students\' creative work. How should the test be evaluated?',
    options: ['Valid but lacking reliability', 'Reliable but lacking real validity', 'Both reliable and valid', 'Neither standardized nor reliable'],
    correctIndex: 1,
    explanation: 'Consistent scores across sessions show test-retest reliability, but scores that do not relate to the trait show weak validity. A test can be reliable without measuring what it claims.',
    partNumber: 4,
    partTitle: 'IQ Testing',
  },
  {
    id: 'li-ent-4b',
    question: 'A 6-year-old performs like a typical 9-year-old. Using the original intelligence quotient formula, what is her IQ?',
    options: ['67', '115', '150', '300'],
    correctIndex: 2,
    explanation: 'IQ = mental age ÷ chronological age × 100 = 9 ÷ 6 × 100 = 150. Dividing chronological age by mental age would give the incorrect 67.',
    partNumber: 4,
    partTitle: 'IQ Testing',
  },

  // Part 5: Intelligence Controversies
  {
    id: 'li-ent-5a',
    question: 'Average scores on the same intelligence tests rose by roughly 3 points per decade in many countries during the 20th century. Which explanation fits this rise best?',
    options: ['Genetic change across a few generations', 'A steady rise in stereotype threat over time', 'Tests being scored more leniently each year', 'Better nutrition, health care and schooling over time'],
    correctIndex: 3,
    explanation: 'The Flynn effect happened too quickly for genetic change to explain it. Societal factors such as better nutrition, health care and education are the likely causes.',
    partNumber: 5,
    partTitle: 'Intelligence Controversies',
  },
  {
    id: 'li-ent-5b',
    question: 'Before a math test, students are told it has shown gender differences in the past. Women in this condition score lower than women told the test shows no differences, and men in this condition score slightly higher than men told there are no differences. What do the men\'s results show?',
    options: ['Stereotype threat', 'Stereotype lift', 'Growth mindset', 'The Flynn effect'],
    correctIndex: 1,
    explanation: 'A boost in performance from awareness that another group is negatively stereotyped is stereotype lift. The women\'s lower scores reflect stereotype threat.',
    partNumber: 5,
    partTitle: 'Intelligence Controversies',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'li-ent-6a',
    question: 'In a practice study, 100 fifth graders were randomly assigned to be praised either for effort or for being smart after an easy puzzle set. Each child then chose 5 puzzles from a mix of easy and hard ones, and persistence was scored as the number of hard puzzles chosen. What is the operational definition of the dependent variable?',
    options: ['Praise for effort versus praise for being smart', 'How determined each child felt about puzzles', 'Count of hard puzzles among the 5 picked', 'Random assignment of the 100 fifth graders'],
    correctIndex: 2,
    explanation: 'Persistence was measured as the number of hard puzzles each child chose. The type of praise is the independent variable, and "how determined they felt" is not how the study measured it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'li-ent-6b',
    question: 'A 2-year-old who hears Spanish at home and English at daycare says phrases such as "more milk" and "doggie go." Her parents worry because she knows fewer English words than her cousin, who hears only English. Which response is best?',
    options: ['She is behind and should hear only one language', 'Her sensitive period for language has ended', 'Her phrases show a delay in grammar learning', 'She is on track if both languages are counted'],
    correctIndex: 3,
    explanation: 'Two-word telegraphic phrases show she is moving through the normal stages, and counting vocabulary across both languages gives a fair comparison. Early exposure to two languages fits the sensitive period for language.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'li-ent-7a',
    question: 'Within each of two towns, the heritability of IQ scores is high. One town has much poorer schools and health care, and its average score is lower. Which conclusion is best supported?',
    options: ['Environment may explain the entire gap', 'The gap between the towns must be mostly genetic', 'Each person\'s score is fixed by his or her genes', 'High heritability shows that schools have no effect'],
    correctIndex: 0,
    explanation: 'Heritability within groups says nothing about the cause of differences between groups. Unequal schools and health care could account for the entire gap.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'li-ent-7b',
    question: 'An EBQ source reports that children praised for their effort chose harder puzzles and persisted longer after failure than children praised for being smart. Which concept best explains this source?',
    options: ['Stereotype threat', 'Predictive validity', 'The Flynn effect', 'Growth mindset'],
    correctIndex: 3,
    explanation: 'Effort praise encourages the belief that ability can grow, a growth mindset, which is linked to taking on challenges and persisting after mistakes.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Building Blocks of Language' },
    { partNumber: 2, partTitle: 'How Language Develops' },
    { partNumber: 3, partTitle: 'Intelligence Theories' },
    { partNumber: 4, partTitle: 'IQ Testing' },
    { partNumber: 5, partTitle: 'Intelligence Controversies' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
