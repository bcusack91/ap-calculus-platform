/**
 * Entrance Quiz — English Grammar (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'aeg-ent-1a', question: 'Which sentence uses correct subject-verb agreement?', options: ['The dogs runs fast.', 'The dog run fast.', 'The dogs run fast.', 'The dog are fast.'], correctIndex: 2, explanation: 'The subject and verb must agree in number: "dogs" is plural, so the verb is "run" (not "runs").', partNumber: 1, partTitle: 'Subject-Verb Agreement' },
  { id: 'aeg-ent-1b', question: '"The box of chocolates ___ on the table." Which verb correctly fills the blank?', options: ['are', 'were', 'have been', 'is'], correctIndex: 3, explanation: 'The subject is "box" (singular), not "chocolates." Phrases between the subject and verb don\'t change agreement: "The box ... IS on the table."', partNumber: 1, partTitle: 'Subject-Verb Agreement' },
  { id: 'aeg-ent-2a', question: 'On the ACT, "Each student must bring ___ book" is best completed with:', options: ['their', 'its', 'his or her', 'them'], correctIndex: 2, explanation: 'The ACT prefers "his or her" for singular antecedents like "each student," though "their" is increasingly accepted elsewhere.', partNumber: 2, partTitle: 'Pronoun Rules' },
  { id: 'aeg-ent-2b', question: '"When Bob saw Tom, he waved." What is the problem with this sentence?', options: ['Incorrect verb tense', 'Ambiguous pronoun reference — unclear who "he" refers to', 'Run-on sentence', 'Missing comma'], correctIndex: 1, explanation: '"He" could refer to either Bob or Tom. The pronoun reference is ambiguous and should be clarified.', partNumber: 2, partTitle: 'Pronoun Rules' },
  { id: 'aeg-ent-3a', question: 'Which sentence contains an unnecessary tense shift?', options: ['She walked to the store and bought milk.', 'He runs every day and has run for years.', 'They studied hard and passes the test.', 'I will go tomorrow and will return Friday.'], correctIndex: 2, explanation: '"Studied" is past tense but "passes" is present tense. Don\'t shift tenses unnecessarily — it should be "passed."', partNumber: 3, partTitle: 'Verb Tense' },
  { id: 'aeg-ent-3b', question: 'Which is the correct past participle form?', options: ['had went', 'has went', 'had gone', 'have go'], correctIndex: 2, explanation: 'The correct past participle is "gone": "had gone," "has gone." "Had went" and "has went" are grammatically incorrect.', partNumber: 3, partTitle: 'Verb Tense' },
  { id: 'aeg-ent-4a', question: 'What must every complete sentence contain?', options: ['A subject, a verb, and a complete thought', 'At least two clauses', 'A comma and a conjunction', 'An adjective and an adverb'], correctIndex: 0, explanation: 'A sentence must have a subject, a verb, and express a complete thought. Without all three, it\'s a fragment.', partNumber: 4, partTitle: 'Sentence Structure' },
  { id: 'aeg-ent-4b', question: 'Which of the following is a run-on sentence?', options: ['I went to the store, and I bought milk.', 'I went to the store; I bought milk.', 'I went to the store I bought milk.', 'I went to the store. I bought milk.'], correctIndex: 2, explanation: 'A run-on joins two independent clauses without proper punctuation or a conjunction. Fix with a period, semicolon, or comma + conjunction.', partNumber: 4, partTitle: 'Sentence Structure' },
  { id: 'aeg-ent-5a', question: 'Which list is parallel in structure?', options: ['She likes running, to swim, and biking.', 'She likes running, swimming, and biking.', 'She likes to run, swimming, and to bike.', 'She likes run, swim, and bike.'], correctIndex: 1, explanation: 'Parallelism requires items in a list to have the same grammatical structure: "running, swimming, and biking" are all gerunds.', partNumber: 5, partTitle: 'Modifiers & Parallelism' },
  { id: 'aeg-ent-5b', question: '"Walking to school, the rain started." What is wrong with this sentence?', options: ['Verb tense error', 'Comma splice', 'Misplaced modifier — the rain can\'t walk', 'Subject-verb disagreement'], correctIndex: 2, explanation: 'The participial phrase "Walking to school" modifies "the rain," implying the rain was walking. Fix: "Walking to school, I got caught in the rain."', partNumber: 5, partTitle: 'Modifiers & Parallelism' },
  { id: 'aeg-ent-6a', question: '"Neither the teacher nor the students ___ ready." Which verb is correct?', options: ['was', 'is', 'has been', 'were'], correctIndex: 3, explanation: 'With "neither...nor," the verb agrees with the closer subject. "Students" is plural, so use "were."', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aeg-ent-6b', question: '"The team, along with its coaches, ___ traveling." Which verb is correct?', options: ['are', 'were', 'have been', 'is'], correctIndex: 3, explanation: 'The subject is "team" (singular). The prepositional phrase "along with its coaches" does not change the subject: "The team ... IS traveling."', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aeg-ent-7a', question: 'When you\'re unsure on an ACT English question, which strategy is most reliable?', options: ['Pick the longest answer', 'Pick the most concise correct answer', 'Always choose "NO CHANGE"', 'Pick the answer with the most commas'], correctIndex: 1, explanation: 'When in doubt on ACT English, the most concise correct answer is usually right. The ACT favors clear, direct writing.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'aeg-ent-7b', question: 'When answering ACT English questions, you should:', options: ['Only read the underlined portion', 'Read only the sentence before', 'Read the full sentence, not just the underlined part', 'Skip the passage and go straight to questions'], correctIndex: 2, explanation: 'Always read the full sentence — the underlined portion alone may not give enough context to choose the correct answer.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Subject-Verb Agreement' },
    { partNumber: 2, partTitle: 'Pronoun Rules' },
    { partNumber: 3, partTitle: 'Verb Tense' },
    { partNumber: 4, partTitle: 'Sentence Structure' },
    { partNumber: 5, partTitle: 'Modifiers & Parallelism' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
