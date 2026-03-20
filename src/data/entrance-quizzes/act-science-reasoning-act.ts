/**
 * Entrance Quiz — ACT Science: Reasoning (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'asr-ent-1a', question: 'What is the correct order of the scientific method?', options: ['Conclude → experiment → hypothesize → observe', 'Hypothesize → observe → conclude → experiment', 'Observe → question → hypothesize → experiment → analyze → conclude', 'Experiment → observe → question → hypothesize'], correctIndex: 2, explanation: 'The scientific method follows: observe → question → hypothesize → experiment → analyze → conclude.', partNumber: 1, partTitle: 'Scientific Method' },
  { id: 'asr-ent-1b', question: 'How does a scientific theory differ from a hypothesis?', options: ['A theory is a guess; a hypothesis is proven', 'They are the same thing', 'A hypothesis is stronger than a theory', 'A theory is well-supported by evidence and widely accepted; a hypothesis is a proposed explanation'], correctIndex: 3, explanation: 'A scientific theory is well-supported by evidence and widely accepted, while a hypothesis is a proposed explanation that still needs testing.', partNumber: 1, partTitle: 'Scientific Method' },
  { id: 'asr-ent-2a', question: 'To properly test a hypothesis, an experiment must be designed so that results can:', options: ['Only confirm the hypothesis', 'Either support or refute the hypothesis', 'Always produce the same outcome', 'Avoid any negative results'], correctIndex: 1, explanation: 'To test a hypothesis, design an experiment where results can either support or refute it — it must be falsifiable.', partNumber: 2, partTitle: 'Hypothesis Testing' },
  { id: 'asr-ent-2b', question: 'If experimental data contradicts a hypothesis, a scientist should:', options: ['Ignore the data', 'Change the data to match the hypothesis', 'Revise or reject the hypothesis', 'Repeat the experiment until it works'], correctIndex: 2, explanation: 'If data contradicts the hypothesis, the hypothesis must be revised or rejected — not the data.', partNumber: 2, partTitle: 'Hypothesis Testing' },
  { id: 'asr-ent-3a', question: 'When drawing conclusions from data, you should:', options: ['State conclusions that directly follow from the data', 'Make broad generalizations beyond the data', 'Assume your hypothesis was correct regardless', 'Include personal opinions'], correctIndex: 0, explanation: 'Conclusions should directly follow from the data; avoid overgeneralizing beyond what the evidence supports.', partNumber: 3, partTitle: 'Drawing Conclusions' },
  { id: 'asr-ent-3b', question: 'Which phrasing is more scientifically appropriate?', options: ['"The data prove that..."', '"I believe that..."', '"The data suggest that..."', '"It is obvious that..."'], correctIndex: 2, explanation: '"The data suggest..." is stronger than "the data prove..." because science deals in evidence, not absolute proof.', partNumber: 3, partTitle: 'Drawing Conclusions' },
  { id: 'asr-ent-4a', question: 'Applying concepts means using given information to:', options: ['Memorize facts', 'Copy data from one table to another', 'Ignore the experimental context', 'Predict what would happen in a new scenario'], correctIndex: 3, explanation: 'Applying concepts means using given information to predict what would happen in a new, similar scenario.', partNumber: 4, partTitle: 'Applying Concepts' },
  { id: 'asr-ent-4b', question: 'If increasing concentration increases reaction rate in Experiment 1, what would you predict for an even higher concentration?', options: ['The reaction rate would likely increase further', 'The reaction rate would decrease', 'The reaction would stop', 'Concentration has no effect'], correctIndex: 0, explanation: 'If increasing concentration increases reaction rate, you would predict that even higher concentration would likely increase it further, following the established trend.', partNumber: 4, partTitle: 'Applying Concepts' },
  { id: 'asr-ent-5a', question: 'What is the recommended first step when approaching an ACT Science passage?', options: ['Read every word carefully', 'Skim the passage for about 30 seconds, then go to questions', 'Start answering questions without reading', 'Memorize all data tables'], correctIndex: 1, explanation: 'Skim the passage first (30 seconds), then go to questions — refer back to the passage as needed.', partNumber: 5, partTitle: 'Science Passage Strategy' },
  { id: 'asr-ent-5b', question: 'Why should you let the questions guide your reading on ACT Science?', options: ['The passages are too short to skim', 'Understanding every detail upfront wastes time; questions tell you what to focus on', 'Questions are always about the first paragraph', 'You should never read the passage'], correctIndex: 1, explanation: 'Don\'t waste time understanding every detail upfront; let the questions guide your reading to find relevant information efficiently.', partNumber: 5, partTitle: 'Science Passage Strategy' },
  { id: 'asr-ent-6a', question: 'A student claims "all metals conduct electricity." What would disprove this claim?', options: ['Finding ten metals that conduct electricity', 'Finding a non-metal that conducts electricity', 'Nothing could disprove it', 'Finding one metal that does not conduct electricity'], correctIndex: 3, explanation: 'One observation of a non-conducting metal would disprove the universal claim that "all metals conduct electricity."', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'asr-ent-6b', question: 'On a pH scale from 1–14, which is more acidic: pH 3 or pH 5?', options: ['pH 3 — lower pH means more acidic', 'pH 5 — higher number means more acidic', 'They are equally acidic', 'Neither is acidic'], correctIndex: 0, explanation: 'On the pH scale, lower values are more acidic. pH 3 is more acidic than pH 5.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'asr-ent-7a', question: 'The ACT Science section primarily tests:', options: ['Memorized science facts', 'Lab safety procedures', 'Reasoning and data interpretation skills', 'Science vocabulary'], correctIndex: 2, explanation: 'ACT Science tests reasoning skills, not content knowledge — focus on interpreting data and understanding experimental design.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'asr-ent-7b', question: 'The best way to prepare for ACT Science is to:', options: ['Memorize a science textbook', 'Practice reading scientific passages quickly to build familiarity with the format', 'Only study biology', 'Skip practice tests'], correctIndex: 1, explanation: 'Practice reading scientific passages quickly; familiarity with the format reduces anxiety and improves performance.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Scientific Method' },
    { partNumber: 2, partTitle: 'Hypothesis Testing' },
    { partNumber: 3, partTitle: 'Drawing Conclusions' },
    { partNumber: 4, partTitle: 'Applying Concepts' },
    { partNumber: 5, partTitle: 'Science Passage Strategy' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
