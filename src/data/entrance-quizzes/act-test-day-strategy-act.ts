/**
 * Entrance Quiz — ACT Test Day Strategy (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'atds-ent-1a', question: 'How many required sections does the ACT have, and what are their time limits?', options: ['3 sections: English, Math, Reading', '5 sections all 30 minutes each', '4 sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min)', '2 sections: Math and Reading'], correctIndex: 2, explanation: 'The ACT has 4 required sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min), plus an optional Writing section (40 min).', partNumber: 1, partTitle: 'Test Format & Registration' },
  { id: 'atds-ent-1b', question: 'Where do you register for the ACT, and what should you bring to the test?', options: ['Register at act.org; bring your admission ticket', 'Register at your school only; bring nothing', 'Register at collegeboard.org; bring a laptop', 'No registration needed; just show up'], correctIndex: 0, explanation: 'Register at act.org; test dates are typically September through July. Bring your admission ticket to the test center.', partNumber: 1, partTitle: 'Test Format & Registration' },
  { id: 'atds-ent-2a', question: 'Which of the following should you bring on ACT test day?', options: ['Laptop and phone', 'Only a pencil', 'Textbooks and notes', 'Admission ticket, valid photo ID, #2 pencils, approved calculator, and a watch'], correctIndex: 3, explanation: 'Bring: admission ticket, valid photo ID, #2 pencils, approved calculator, and a watch (no smart watch).', partNumber: 2, partTitle: 'What to Bring' },
  { id: 'atds-ent-2b', question: 'What can happen if you have a phone or smart watch visible during the ACT?', options: ['Nothing — phones are allowed', 'Your score can be cancelled', 'You get extra time', 'The proctor will hold it for you'], correctIndex: 1, explanation: 'Leave electronics (phone, smart watch) in your bag — having them visible can cause score cancellation.', partNumber: 2, partTitle: 'What to Bring' },
  { id: 'atds-ent-3a', question: 'Approximately how many seconds per question do you have on ACT Math?', options: ['30 seconds', '45 seconds', '60 seconds', '90 seconds'], correctIndex: 2, explanation: 'ACT Math gives about 60 seconds per question. English is 36 sec, Reading is 52 sec, and Science is 52 sec per question.', partNumber: 3, partTitle: 'Section-by-Section Timing' },
  { id: 'atds-ent-3b', question: 'What is the best way to track your time during the ACT?', options: ['Ask the proctor every 5 minutes', 'Use a watch to pace yourself at each quarter of the section', 'Set an alarm on your phone', 'Don\'t worry about time'], correctIndex: 1, explanation: 'Use a watch to track time — pace yourself at each quarter of the section to avoid running out of time.', partNumber: 3, partTitle: 'Section-by-Section Timing' },
  { id: 'atds-ent-4a', question: 'Is there a penalty for wrong answers on the ACT?', options: ['Yes — each wrong answer deducts ¼ point', 'Yes — each wrong answer deducts ½ point', 'Only on the Science section', 'No — there is no penalty, so always fill in every bubble'], correctIndex: 3, explanation: 'There is no penalty for wrong answers on the ACT — ALWAYS fill in every bubble, even if you have to guess.', partNumber: 4, partTitle: 'Guessing Strategy' },
  { id: 'atds-ent-4b', question: 'If you\'re running out of time, what should you do with remaining unanswered questions?', options: ['Leave them blank', 'Pick one letter and fill in all remaining blanks', 'Randomly alternate between letters', 'Only answer the odd-numbered questions'], correctIndex: 1, explanation: 'If running out of time, pick one letter and fill in all remaining blanks — this is better than leaving them empty since there is no guessing penalty.', partNumber: 4, partTitle: 'Guessing Strategy' },
  { id: 'atds-ent-5a', question: 'How much sleep should you get the night before the ACT?', options: ['4–5 hours', '6 hours', '8 hours', 'Sleep is not important'], correctIndex: 2, explanation: 'Get 8 hours of sleep the night before and eat a good breakfast — your brain performs best when well-rested.', partNumber: 5, partTitle: 'Mental Preparation' },
  { id: 'atds-ent-5b', question: 'What hurts ACT performance more than lack of knowledge?', options: ['Using the wrong pencil', 'Sitting in the wrong seat', 'Wearing uncomfortable shoes', 'Test anxiety'], correctIndex: 3, explanation: 'Anxiety hurts performance more than lack of knowledge. Visualize success and stay calm during the test.', partNumber: 5, partTitle: 'Mental Preparation' },
  { id: 'atds-ent-6a', question: 'If you blank on a question during the test, what is the best approach?', options: ['Take a deep breath, eliminate what you can, and make your best guess', 'Stare at it until the answer comes', 'Skip it and never come back', 'Ask the person next to you'], correctIndex: 0, explanation: 'If you blank on a question, take a deep breath, eliminate what you can, and make your best guess — then move on.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'atds-ent-6b', question: 'Why should you eat a snack during ACT breaks?', options: ['It\'s required by the proctor', 'Snacks are provided by the testing center', 'Physical comfort affects mental performance', 'It\'s not important'], correctIndex: 2, explanation: 'During breaks, stretch and eat a snack — physical comfort affects mental performance and helps you stay focused.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'atds-ent-7a', question: 'After the ACT, should you discuss answers with friends?', options: ['Yes — it helps you learn', 'Only if you think you did well', 'Only discuss the Math section', 'No — it causes unnecessary stress and you can\'t change anything'], correctIndex: 3, explanation: 'After the test, don\'t discuss answers with friends — it causes unnecessary stress and you cannot change your responses.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'atds-ent-7b', question: 'If you are unhappy with your ACT score, what can you do?', options: ['Nothing — you only get one chance', 'Retake the ACT; most schools accept the highest score', 'Appeal to the ACT organization', 'Take the SAT instead — scores transfer'], correctIndex: 1, explanation: 'Scores arrive in 2–8 weeks. You can retake the ACT and most schools accept the highest score (superscore).', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Test Format & Registration' },
    { partNumber: 2, partTitle: 'What to Bring' },
    { partNumber: 3, partTitle: 'Section-by-Section Timing' },
    { partNumber: 4, partTitle: 'Guessing Strategy' },
    { partNumber: 5, partTitle: 'Mental Preparation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
