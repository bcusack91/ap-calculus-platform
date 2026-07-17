/**
 * Entrance Quiz — Math Strategy (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ams-ent-1a', question: 'How many questions are on the ACT Math section, and how much time is allowed?', options: ['30 questions in 30 minutes', '60 questions in 60 minutes', '50 questions in 75 minutes', '40 questions in 45 minutes'], correctIndex: 1, explanation: 'The ACT Math section has 60 questions in 60 minutes — an average of 1 minute per question.', partNumber: 1, partTitle: 'ACT Math Overview' },
  { id: 'ams-ent-1b', question: 'On the ACT Math section, the difficulty of questions generally:', options: ['Stays the same throughout', 'Goes from hard to easy', 'Goes from easy to hard', 'Alternates between easy and hard'], correctIndex: 2, explanation: 'ACT Math questions go from easy to hard. Answer the easy ones first to secure those points.', partNumber: 1, partTitle: 'ACT Math Overview' },
  { id: 'ams-ent-2a', question: 'When should you use a calculator on the ACT Math section?', options: ['For every single problem', 'Only for graphing problems', 'For complex arithmetic, but not every problem', 'Never — calculators are not allowed'], correctIndex: 2, explanation: 'Use your calculator for complex arithmetic, but don\'t rely on it for every problem — many are faster without it.', partNumber: 2, partTitle: 'Calculator Tips' },
  { id: 'ams-ent-2b', question: 'What is a useful calculator strategy for checking answers on the ACT?', options: ['Graph the function and look for intersections or key features', 'Type in every answer choice', 'Only use the calculator for addition', 'Calculators cannot help check answers'], correctIndex: 0, explanation: 'Graphing functions on your calculator can help verify answers or find intersections quickly.', partNumber: 2, partTitle: 'Calculator Tips' },
  { id: 'ams-ent-3a', question: 'What is "backsolving" on a multiple-choice test?', options: ['Working the problem backward from the question', 'Plugging answer choices into the question to see which works', 'Solving each step in reverse order', 'Skipping the problem and coming back later'], correctIndex: 1, explanation: 'Backsolving means plugging the answer choices back into the problem to see which one satisfies the conditions.', partNumber: 3, partTitle: 'Backsolving' },
  { id: 'ams-ent-3b', question: 'When backsolving, which answer choice should you start with?', options: ['Choice A (the smallest)', 'Choice E (the largest)', 'Choice C (the middle value)', 'Any choice at random'], correctIndex: 2, explanation: 'Start with the middle value (choice C) when backsolving — you can then determine which direction to go.', partNumber: 3, partTitle: 'Backsolving' },
  { id: 'ams-ent-4a', question: 'In the "plugging in" strategy, what do you do?', options: ['Plug the question into a search engine', 'Replace variables with simple numbers and test each answer', 'Only use prime numbers', 'Skip the problem entirely'], correctIndex: 1, explanation: 'Plugging in means replacing variables with simple numbers (like 2, 3, or 5) and evaluating each answer choice.', partNumber: 4, partTitle: 'Plugging In Numbers' },
  { id: 'ams-ent-4b', question: 'Which numbers should you avoid when plugging in values for variables?', options: ['2 and 3', '0 and 1', '5 and 7', '10 and 100'], correctIndex: 1, explanation: 'Avoid 0 and 1 when plugging in — they have special properties that can give misleading results.', partNumber: 4, partTitle: 'Plugging In Numbers' },
  { id: 'ams-ent-5a', question: 'How should you budget time across easy, medium, and hard ACT Math problems?', options: ['Spend equal time on all problems', '30 sec easy, 1 min medium, 2 min hard', '2 min each regardless of difficulty', 'Only work on hard problems'], correctIndex: 1, explanation: 'Budget about 30 seconds for easy problems, 1 minute for medium, and up to 2 minutes for hard ones.', partNumber: 5, partTitle: 'Time Management' },
  { id: 'ams-ent-5b', question: 'If you\'ve been stuck on a problem for more than 2 minutes, what should you do?', options: ['Keep working until you solve it', 'Erase everything and start over', 'Make your best guess and move on', 'Skip it and leave it blank'], correctIndex: 2, explanation: 'If stuck for more than 2 minutes, guess and move on. Don\'t waste time — there are easier points elsewhere.', partNumber: 5, partTitle: 'Time Management' },
  { id: 'ams-ent-6a', question: 'What is $x^{2}$ + 2x when x = 3?', options: ['11', '18', '15', '12'], correctIndex: 2, explanation: 'Plug in directly: $3^{2}$ + 2(3) = 9 + 6 = 15. Skip algebra when direct substitution works.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ams-ent-6b', question: 'How can estimation help on the ACT Math section?', options: ['It can\'t — you need exact answers', 'It can eliminate 2–3 obviously wrong answer choices', 'It replaces the need for calculation', 'It only works on geometry problems'], correctIndex: 1, explanation: 'Estimation can eliminate 2–3 wrong answers, especially with decimals and percents, narrowing your choices.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ams-ent-7a', question: 'Is there a penalty for wrong answers on the ACT?', options: ['Yes, −1/4 point per wrong answer', 'Yes, −1/2 point per wrong answer', 'No, there is no penalty for wrong answers', 'Only on the Science section'], correctIndex: 2, explanation: 'There is no penalty for wrong answers on the ACT — always guess rather than leaving a question blank.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'ams-ent-7b', question: 'What is a common ACT trick that causes students to miss questions?', options: ['Using a calculator', 'Misreading details in the question', 'Answering too quickly', 'Not showing work'], correctIndex: 1, explanation: 'The ACT often tries to trick you with misread details — always read every question carefully.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'ACT Math Overview' },
    { partNumber: 2, partTitle: 'Calculator Tips' },
    { partNumber: 3, partTitle: 'Backsolving' },
    { partNumber: 4, partTitle: 'Plugging In Numbers' },
    { partNumber: 5, partTitle: 'Time Management' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
