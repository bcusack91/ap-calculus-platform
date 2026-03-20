/**
 * Entrance Quiz — English Rhetorical Skills (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'aer-ent-1a', question: 'Which transition word signals a CONTRAST between ideas?', options: ['Furthermore', 'Therefore', 'However', 'Additionally'], correctIndex: 2, explanation: 'Transitions show relationships: "however" signals contrast, "furthermore" signals addition, and "therefore" signals cause/effect.', partNumber: 1, partTitle: 'Transitions & Organization' },
  { id: 'aer-ent-1b', question: 'When choosing a transition on the ACT, what should you do?', options: ['Pick the longest or most formal option', 'Choose the transition that logically connects the ideas', 'Always use "however"', 'Avoid transitions entirely'], correctIndex: 1, explanation: 'Choose transitions that logically connect ideas — don\'t just pick the fanciest word. The relationship between sentences determines the transition.', partNumber: 1, partTitle: 'Transitions & Organization' },
  { id: 'aer-ent-2a', question: 'When the ACT asks whether a sentence should be ADDED to a paragraph, what should you check?', options: ['Whether it uses advanced vocabulary', 'Whether it supports the paragraph\'s main idea', 'Whether it is the longest option', 'Whether it starts with a transition'], correctIndex: 1, explanation: 'When asked to add a sentence, check if it supports and is relevant to the paragraph\'s main idea.', partNumber: 2, partTitle: 'Adding & Deleting Sentences' },
  { id: 'aer-ent-2b', question: 'When deciding whether to DELETE a sentence, you should consider:', options: ['Whether it is too short', 'Whether it adds relevant information or is off-topic', 'Whether it contains difficult words', 'Whether it ends with a period'], correctIndex: 1, explanation: 'When asked to delete, consider whether the sentence adds relevant information or is off-topic and distracting.', partNumber: 2, partTitle: 'Adding & Deleting Sentences' },
  { id: 'aer-ent-3a', question: 'For sentence placement questions, what should you look for?', options: ['The shortest paragraph', 'Logical flow and pronoun/noun references', 'Alphabetical order of topics', 'The paragraph with the fewest sentences'], correctIndex: 1, explanation: 'For placement questions, look for logical flow and check that pronoun/noun references make sense in the new position.', partNumber: 3, partTitle: 'Sentence Placement' },
  { id: 'aer-ent-3b', question: 'A sentence says "This experiment showed surprising results." Where should it be placed?', options: ['At the very beginning of the essay', 'Before any mention of an experiment', 'After the sentence that introduces the experiment', 'At the end of the essay as a conclusion'], correctIndex: 2, explanation: 'A sentence mentioning "this experiment" should follow the sentence that introduces the experiment so the reference is clear.', partNumber: 3, partTitle: 'Sentence Placement' },
  { id: 'aer-ent-4a', question: 'Which revision makes this phrase more concise? "In the event that it rains..."', options: ['In the eventuality of rain occurring...', 'If it rains...', 'In the possible event that rain happens...', 'Should rain be an event that occurs...'], correctIndex: 1, explanation: 'Eliminate wordiness: "in the event that" should be replaced with simply "if."', partNumber: 4, partTitle: 'Conciseness' },
  { id: 'aer-ent-4b', question: 'Which sentence contains redundancy?', options: ['She explained the process clearly.', 'The reason is because he was late.', 'He arrived on time for the meeting.', 'They finished the project early.'], correctIndex: 1, explanation: '"The reason is because" is redundant — use "the reason is that" or simply "because."', partNumber: 4, partTitle: 'Conciseness' },
  { id: 'aer-ent-5a', question: 'What are the four main purposes an author may have?', options: ['Summarize, outline, draft, revise', 'Inform, persuade, entertain, describe', 'Argue, defend, attack, retreat', 'Compare, contrast, analyze, evaluate'], correctIndex: 1, explanation: 'An author\'s purpose is generally to inform, persuade, entertain, or describe.', partNumber: 5, partTitle: 'Author Purpose & Style' },
  { id: 'aer-ent-5b', question: 'ACT style questions typically ask about:', options: ['Spelling and vocabulary definitions', 'Tone (formal vs. informal) and audience appropriateness', 'The author\'s biography', 'Paragraph word count'], correctIndex: 1, explanation: 'Style questions on the ACT ask about tone (formal vs. informal) and whether the writing is appropriate for the intended audience.', partNumber: 5, partTitle: 'Author Purpose & Style' },
  { id: 'aer-ent-6a', question: 'A paragraph uses "Additionally," "Moreover," and "Furthermore" in consecutive sentences. What is the problem?', options: ['Incorrect grammar', 'Redundant transitions — vary the transitions used', 'Too few transitions', 'Wrong punctuation after each'], correctIndex: 1, explanation: 'Using "Additionally," "Moreover," and "Furthermore" in the same paragraph is redundant. Vary your transitions for clarity.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aer-ent-6b', question: 'If a question asks "Should the author add this sentence?", what TWO things should you evaluate?', options: ['Length and vocabulary', 'Relevance and where it would fit', 'Grammar and spelling', 'Number of commas and periods'], correctIndex: 1, explanation: 'Evaluate both relevance (does it support the main idea?) and placement (where would it logically fit?).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aer-ent-7a', question: 'Approximately what percentage of ACT English questions test rhetorical skills?', options: ['10%', '50%', '35%', '75%'], correctIndex: 2, explanation: 'Rhetorical skills make up about 35% of ACT English — roughly 25 out of 75 questions.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'aer-ent-7b', question: 'For ACT organization questions, what should you examine?', options: ['Only the underlined words', 'Topic sentences and concluding sentences for paragraph structure', 'The title of the passage only', 'Punctuation marks throughout'], correctIndex: 1, explanation: 'For organization questions, look at topic sentences and concluding sentences to understand paragraph structure and logical flow.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Transitions & Organization' },
    { partNumber: 2, partTitle: 'Adding & Deleting Sentences' },
    { partNumber: 3, partTitle: 'Sentence Placement' },
    { partNumber: 4, partTitle: 'Conciseness' },
    { partNumber: 5, partTitle: 'Author Purpose & Style' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
