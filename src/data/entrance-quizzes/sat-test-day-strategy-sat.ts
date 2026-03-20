/**
 * Entrance Quiz — SAT Test Day Strategy (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Test Structure ────────────────────────
  {
    id: 'stds-ent-1a',
    question:
      'How is the digital SAT structured in terms of sections and total time?',
    options: [
      '2 sections: Reading & Writing (2 modules) and Math (2 modules), with a 10-minute break between sections — approximately 2 hours 14 minutes.',
      '4 sections: Reading, Writing, Math (no calculator), Math (calculator) — 3 hours.',
      '3 sections: Reading, Writing & Language, Math — 3 hours 45 minutes with an optional essay.',
      '5 sections of equal length totaling 4 hours.',
    ],
    correctIndex: 0,
    explanation:
      'The digital SAT (2024+) has two sections: Reading & Writing (two 32-minute modules = 64 min) and Math (two 35-minute modules = 70 min), separated by a 10-minute break. Total testing time is approximately 2 hours 14 minutes—significantly shorter than the old paper SAT.',
    partNumber: 1,
    partTitle: 'Test Structure',
  },
  {
    id: 'stds-ent-1b',
    question:
      'On the digital SAT, what happens if a student finishes a module early?',
    options: [
      'The extra time automatically carries over to the next module.',
      'The student may review and change answers within that module, but cannot advance to the next module early.',
      'The student must wait silently and cannot review answers.',
      'The student may begin the next section immediately.',
    ],
    correctIndex: 1,
    explanation:
      'On the digital SAT, time is managed per module. Finishing early allows you to review and change answers within the current module, but time does not carry over and you cannot advance to the next module ahead of schedule.',
    partNumber: 1,
    partTitle: 'Test Structure',
  },

  // ── Part 2: Time Management ────────────────────────
  {
    id: 'stds-ent-2a',
    question:
      'Which time management strategy is recommended for the SAT Math modules?',
    options: [
      'Spend equal time on every question regardless of difficulty.',
      'Answer the questions in order, spending no more than about 1.5 minutes on each, flag difficult questions, and return to them at the end.',
      'Start with the hardest questions first to get them out of the way.',
      'Skip all word problems and focus only on pure algebra.',
    ],
    correctIndex: 1,
    explanation:
      'Each SAT question is worth the same point value. The most efficient strategy is to move through questions at a steady pace (~1.5 min each for Math), flag items you\'re unsure about, complete the rest, then return to flagged items with remaining time.',
    partNumber: 2,
    partTitle: 'Time Management',
  },
  {
    id: 'stds-ent-2b',
    question:
      'A student has 5 minutes left in a Math module and has 4 questions remaining. What is the best approach?',
    options: [
      'Spend all 5 minutes on the first remaining question to ensure it is correct.',
      'Quickly attempt each question, use process of elimination to make educated guesses, and ensure all 4 are answered before time expires.',
      'Leave the last 4 questions blank to avoid the guessing penalty.',
      'Only answer questions with nice whole-number answers.',
    ],
    correctIndex: 1,
    explanation:
      'The digital SAT has NO guessing penalty—unanswered questions score the same as incorrect ones (zero points). Therefore, always fill in an answer for every question. With 5 minutes and 4 questions, quickly attempt each and guess if needed rather than leaving blanks.',
    partNumber: 2,
    partTitle: 'Time Management',
  },

  // ── Part 3: Guessing Strategy ────────────────────
  {
    id: 'stds-ent-3a',
    question:
      'What is the guessing penalty on the digital SAT?',
    options: [
      '−1 point for each wrong answer.',
      '−0.25 points for each wrong answer.',
      'There is no guessing penalty; wrong answers and blank answers both score zero.',
      'The penalty depends on the difficulty level of the question.',
    ],
    correctIndex: 2,
    explanation:
      'The digital SAT (and the redesigned SAT since 2016) has no penalty for wrong answers. Every unanswered question also scores zero. Therefore, you should always guess rather than leave a question blank—you have at least a 25% chance of being correct.',
    partNumber: 3,
    partTitle: 'Guessing Strategy',
  },
  {
    id: 'stds-ent-3b',
    question:
      'If you must guess on a 4-option multiple-choice SAT question after eliminating one obviously wrong answer, what is your probability of guessing correctly?',
    options: [
      '25%',
      '33%',
      '50%',
      '75%',
    ],
    correctIndex: 1,
    explanation:
      'After eliminating one wrong answer, you have 3 remaining choices. The probability of a correct random guess among 3 choices is 1/3 ≈ 33%. Eliminating even one answer significantly improves your odds from 25% to 33%.',
    partNumber: 3,
    partTitle: 'Guessing Strategy',
  },

  // ── Part 4: Managing Anxiety ──────────────────────
  {
    id: 'stds-ent-4a',
    question:
      'Which evidence-based technique is most effective for reducing acute test anxiety during a SAT exam?',
    options: [
      'Reading through all unanswered questions rapidly to assess how many remain.',
      'Slow, diaphragmatic breathing (breathing deeply into the belly for 4 counts, holding 4, exhaling for 6) to activate the parasympathetic nervous system.',
      'Caffeinating heavily before the exam to maximize alertness.',
      'Reminding yourself of every question you found difficult in past practice tests.',
    ],
    correctIndex: 1,
    explanation:
      'Deep diaphragmatic breathing activates the parasympathetic nervous system, reducing cortisol and adrenaline levels. This is one of the most effective, immediate interventions for test anxiety and can be used during the test without losing significant time.',
    partNumber: 4,
    partTitle: 'Managing Anxiety',
  },
  {
    id: 'stds-ent-4b',
    question:
      'Which mindset best supports optimal SAT performance, according to cognitive performance research?',
    options: [
      'A fixed mindset: believing your score reflects your innate, unchangeable intelligence.',
      'A performance-avoidance mindset: focusing entirely on avoiding failure.',
      'A growth mindset: believing that performance improves with effort, strategy, and practice.',
      'A perfectionist mindset: setting a goal of 100% accuracy on every question.',
    ],
    correctIndex: 2,
    explanation:
      'Research by Carol Dweck and others consistently shows that a growth mindset—believing ability improves with effort—leads to better academic outcomes. Fixed and perfectionist mindsets increase anxiety and reduce resilience when facing difficult questions.',
    partNumber: 4,
    partTitle: 'Managing Anxiety',
  },

  // ── Part 5: Section Strategy ──────────────────────
  {
    id: 'stds-ent-5a',
    question:
      'For the SAT Reading & Writing section, which approach to answer elimination is most reliable?',
    options: [
      'Eliminate answers that are longer than the others.',
      'Eliminate answers that contradict, distort, or go beyond what the passage states.',
      'Eliminate the first and last answer choices, as they are rarely correct.',
      'Eliminate answers that use vocabulary you recognize from your SAT prep books.',
    ],
    correctIndex: 1,
    explanation:
      'SAT Reading answer choices that contradict the passage, over-generalize, or introduce ideas not in the text are the most reliably incorrect. The correct answer is always directly grounded in the passage.',
    partNumber: 5,
    partTitle: 'Section Strategy',
  },
  {
    id: 'stds-ent-5b',
    question:
      'For the SAT Math section, what should you do if you are completely stuck on a problem and cannot see any path to a solution?',
    options: [
      'Leave it blank—guessing hurts your score.',
      'Try plugging in the answer choices to see which one satisfies the equation or condition.',
      'Skip it and never return—difficult problems are not worth your time.',
      'Always choose the middle value (B or C) when guessing.',
    ],
    correctIndex: 1,
    explanation:
      'Plugging in answer choices (back-solving) is a powerful SAT Math strategy when direct solving feels impossible. Start with the middle numerical value to narrow down your choices quickly. This often turns a hard algebra problem into simple arithmetic.',
    partNumber: 5,
    partTitle: 'Section Strategy',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'stds-ent-6a',
    question:
      'The night before the SAT, which of the following is the BEST use of your time?',
    options: [
      'Take a full-length timed practice test to maximize preparation.',
      'Review the most difficult concepts you struggled with for three or more hours.',
      'Do light review of key formulas and strategies, organize your materials, and get a full night of sleep.',
      'Study as many new vocabulary words as possible.',
    ],
    correctIndex: 2,
    explanation:
      'The night before a major exam, the marginal gain from additional studying is small compared to the cost of reduced sleep. Sleep is critical for memory consolidation and cognitive function. Light review plus logistical preparation (ID, calculator, pencils, snacks) is the optimal approach.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'stds-ent-6b',
    question:
      'A student realizes mid-test that she has been spending 4 minutes per question in the R&W section and is falling behind pace. What is the best immediate response?',
    options: [
      'Continue at her current pace and accept a lower score.',
      'Immediately skip all remaining questions and guess.',
      'Request extra time from the proctor.',
      'Consciously accelerate pace, trust her first instinct on the next several questions, and stop over-analyzing.',
    ],
    correctIndex: 3,
    explanation:
      'When behind pace, the best response is to trust first instincts (which are often correct) and consciously reduce time per question. Research shows over-analysis frequently leads to second-guessing correct initial answers. Speed up, trust your preparation, and keep moving.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'stds-ent-7a',
    question:
      'Which of the following is on the official College Board list of items you are REQUIRED to bring to an in-person SAT administration?',
    options: [
      'Your own graphing calculator and a number 2 pencil (for the digital SAT).',
      'An acceptable photo ID and your registration confirmation (ticket).',
      'A printed copy of your practice test results.',
      'A specific brand of approved headphones.',
    ],
    correctIndex: 1,
    explanation:
      'The College Board requires an acceptable photo ID and your admission ticket (confirmation) to test. For the digital SAT, the test is administered on a provided or approved device using Bluebook software. Pencils are optional for scratch work; a physical calculator is optional since Desmos is built in.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'stds-ent-7b',
    question:
      'After receiving SAT scores, a student scores 680 on Math and 620 on R&W. She wants to improve her composite score by 60 points. Which is the most strategic approach?',
    options: [
      'Spend equal time on both sections regardless of where the gaps are.',
      'Focus exclusively on Math, since the score is already higher there.',
      'Analyze her score report to identify specific question types where she lost the most points, then target those specifically.',
      'Retake the SAT immediately without additional preparation.',
    ],
    correctIndex: 2,
    explanation:
      'Score reports break down performance by question type and domain. The highest ROI strategy is to identify and target specific weaknesses—not to study randomly across all topics. Targeted practice on specific weak areas is the most efficient path to score improvement.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Test Structure' },
    { partNumber: 2, partTitle: 'Time Management' },
    { partNumber: 3, partTitle: 'Guessing Strategy' },
    { partNumber: 4, partTitle: 'Managing Anxiety' },
    { partNumber: 5, partTitle: 'Section Strategy' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
