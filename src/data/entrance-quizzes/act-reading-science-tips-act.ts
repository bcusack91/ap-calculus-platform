/**
 * Entrance Quiz — ACT Reading & Science Tips (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'arst-ent-1a', question: 'How many passages and questions are on the ACT Reading section?', options: ['3 passages, 30 questions', '5 passages, 50 questions', '4 passages, 40 questions in 60 minutes', '4 passages, 40 questions in 35 minutes'], correctIndex: 3, explanation: 'ACT Reading has 4 passages and 40 questions with a 35-minute time limit.', partNumber: 1, partTitle: 'ACT Reading Overview' },
  { id: 'arst-ent-1b', question: 'Which of the following is NOT a standard ACT Reading passage type?', options: ['Literary narrative', 'Social science', 'Mathematics', 'Natural science'], correctIndex: 2, explanation: 'The four ACT Reading passage types are literary narrative, social science, humanities, and natural science — not mathematics.', partNumber: 1, partTitle: 'ACT Reading Overview' },
  { id: 'arst-ent-2a', question: 'The ACT Science section primarily tests:', options: ['Data interpretation skills, not science facts', 'Advanced scientific knowledge', 'Lab techniques', 'Chemistry formulas'], correctIndex: 0, explanation: 'ACT Science tests data interpretation, not science facts. You don\'t need to memorize content.', partNumber: 2, partTitle: 'ACT Science Overview' },
  { id: 'arst-ent-2b', question: 'What are the three passage types in ACT Science?', options: ['Biology, chemistry, physics', 'Data representation, research summaries, conflicting viewpoints', 'Short, medium, long passages', 'Easy, medium, hard passages'], correctIndex: 1, explanation: 'The three ACT Science passage types are data representation, research summaries, and conflicting viewpoints.', partNumber: 2, partTitle: 'ACT Science Overview' },
  { id: 'arst-ent-3a', question: 'What reading strategy applies to both ACT Reading and Science?', options: ['Read every word slowly and carefully', 'Skip all passages and just answer questions', 'Efficient skimming — don\'t read every word', 'Only read the first sentence of each paragraph'], correctIndex: 2, explanation: 'Both Reading and Science require efficient skimming — don\'t read every word; focus on key information.', partNumber: 3, partTitle: 'Cross-Section Strategies' },
  { id: 'arst-ent-3b', question: 'For both ACT Reading and Science, what is a good time management strategy?', options: ['Answer easy questions first and come back to harder ones', 'Spend equal time on every question', 'Always answer in order', 'Skip the first passage'], correctIndex: 0, explanation: 'For both sections, answer easy questions first and come back to harder ones to maximize your score.', partNumber: 3, partTitle: 'Cross-Section Strategies' },
  { id: 'arst-ent-4a', question: 'When you encounter a difficult passage, focus on:', options: ['Every small detail', 'The structure: introduction, body paragraphs, conclusion', 'Skipping it entirely', 'Only the longest paragraph'], correctIndex: 1, explanation: 'For difficult passages, focus on structure: introduction, body paragraphs, and conclusion to understand the main ideas.', partNumber: 4, partTitle: 'Managing Difficult Passages' },
  { id: 'arst-ent-4b', question: 'If a passage topic is completely unfamiliar to you, what should you remember?', options: ['You need prior knowledge to answer correctly', 'Skip the passage and guess', 'The passage must contain errors', 'All answers are in the text — prior knowledge is not required'], correctIndex: 3, explanation: 'Don\'t panic if a passage topic is unfamiliar — all answers are in the text. You don\'t need outside knowledge.', partNumber: 4, partTitle: 'Managing Difficult Passages' },
  { id: 'arst-ent-5a', question: 'What is the first step in a score improvement plan?', options: ['Take as many tests as possible in one day', 'Only study the night before', 'Set score goals and practice specific passage types you struggle with', 'Focus on your strongest areas'], correctIndex: 2, explanation: 'Set score goals and practice specific passage types you struggle with to target your weaknesses.', partNumber: 5, partTitle: 'Score Improvement Plan' },
  { id: 'arst-ent-5b', question: 'Why should you take full timed practice tests?', options: ['To memorize specific questions', 'To build endurance and pacing skills', 'Because untimed practice is useless', 'To finish studying faster'], correctIndex: 1, explanation: 'Full timed practice tests build endurance and pacing skills, preparing you for the real test conditions.', partNumber: 5, partTitle: 'Score Improvement Plan' },
  { id: 'arst-ent-6a', question: 'If you\'re scoring 22 and aiming for 28, what should you focus on first?', options: ['Accuracy before speed', 'Speed — answer questions faster', 'Skipping more questions', 'Changing your answer choice pattern'], correctIndex: 0, explanation: 'When aiming to improve significantly, focus on accuracy before speed — getting questions right matters more than finishing fast.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'arst-ent-6b', question: 'What is the benefit of keeping an error log?', options: ['It makes studying more time-consuming', 'It replaces practice tests', 'It is only useful for English', 'It helps you identify question types you miss frequently so you can target them'], correctIndex: 3, explanation: 'An error log helps you identify question types you miss frequently — target those in practice for maximum improvement.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'arst-ent-7a', question: 'What does "active reading" mean on the ACT?', options: ['Reading out loud', 'Highlighting every sentence', 'Summarizing each paragraph in a few words as you read', 'Reading the passage three times'], correctIndex: 2, explanation: 'Active reading means summarizing each paragraph in a few words to maintain focus and comprehension.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'arst-ent-7b', question: 'Which is more effective for ACT preparation?', options: ['Cramming the night before the test', 'Consistent practice over time', 'Only studying on weekends', 'Reading the test instructions repeatedly'], correctIndex: 1, explanation: 'Consistency in practice is more important than cramming right before the test — build skills gradually.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'ACT Reading Overview' },
    { partNumber: 2, partTitle: 'ACT Science Overview' },
    { partNumber: 3, partTitle: 'Cross-Section Strategies' },
    { partNumber: 4, partTitle: 'Managing Difficult Passages' },
    { partNumber: 5, partTitle: 'Score Improvement Plan' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
