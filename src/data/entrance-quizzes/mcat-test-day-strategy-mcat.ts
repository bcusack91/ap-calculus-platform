/**
 * Entrance Quiz — MCAT Test Day Strategy
 * 14 questions · 7 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so a mastered part skips the right lesson part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'MCAT Structure & Timing'
const P2 = 'Time Management'
const P3 = 'Study Planning'
const P4 = 'Guessing & Elimination Strategies'
const P5 = 'Mental Stamina & Test Day Prep'
const P6 = 'Score Improvement & Practice Exam Analysis'
const P7 = 'Final Week Strategy & Mindset'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — MCAT Structure & Timing
  { id: 'mtds-ent-1a', question: 'The MCAT consists of four sections. Which of the following correctly lists them in the standard order?', options: ['CARS → Chemical and Physical Foundations → Biological and Biochemical Foundations → Psychological, Social, and Biological Foundations', 'Chemical and Physical Foundations → CARS → Biological and Biochemical Foundations → Psychological, Social, and Biological Foundations', 'Biological and Biochemical Foundations → Chemical and Physical Foundations → CARS → Psychological, Social, and Biological Foundations', 'Psychological, Social, and Biological Foundations → CARS → Biological and Biochemical Foundations → Chemical and Physical Foundations'], correctIndex: 1, explanation: 'The order is Chemical and Physical Foundations (59 questions), then CARS (53), then Biological and Biochemical Foundations (59), then Psychological, Social, and Biological Foundations (59): 230 questions and about 6 hours 15 minutes of testing, roughly 7.5 hours with breaks.', partNumber: 1, partTitle: P1 },
  { id: 'mtds-ent-1b', question: 'On the standard MCAT schedule, the longest optional break comes:', options: ['After Chem/Phys, before CARS', 'After Bio/Biochem, before Psych/Soc', 'Midway through the CARS section', 'After CARS, before Bio/Biochem'], correctIndex: 3, explanation: 'The mid-exam break between CARS and Bio/Biochem lasts 30 minutes. The breaks after Chem/Phys and after Bio/Biochem are 10 minutes each, and there is no break inside a section.', partNumber: 1, partTitle: P1 },

  // Part 2 — Time Management
  { id: 'mtds-ent-2a', question: 'You are pacing a science section of 59 questions in 95 minutes. About which question should you be on once roughly 70 minutes have passed?', options: ['Around question 25', 'Around question 35', 'Around question 45', 'Around question 55'], correctIndex: 2, explanation: 'The checkpoints are about 25 questions (5 passages) by 40 minutes and about 45 questions (8 passages) by 70 minutes, leaving roughly 25 minutes for the last 14. At about 1.6 minutes per question, 45 questions take about 72 minutes; question 35 by then would mean you have fallen behind.', partNumber: 2, partTitle: P2 },
  { id: 'mtds-ent-2b', question: 'Compared with a typical science passage, how should your time budget for a CARS passage differ?', options: ['About 10 minutes for CARS versus about 8–9 for science', 'About 5 minutes for CARS versus about 10 for science', 'The same 15 minutes for each kind of passage set', 'About 20 minutes for CARS versus about 8–9 for science'], correctIndex: 0, explanation: 'A science passage set takes about 8–9 minutes (2–3 minutes reading, about a minute per question), while a CARS passage gets about 10 minutes because the reading itself takes 3–4 minutes. Five minutes would barely cover that reading, and fifteen or twenty per passage would not fit the section clocks.', partNumber: 2, partTitle: P2 },

  // Part 3 — Study Planning
  { id: 'mtds-ent-3a', question: 'Which preparation plan best matches the study-planning approach in this lesson?', options: ['Finish all content review before starting any practice questions', 'Take frequent full-lengths and review only the questions you missed', 'Spaced review plus full-lengths reviewed in depth, right and wrong', 'Rotate subjects daily and save full-lengths for the final two weeks'], correctIndex: 2, explanation: 'The plan moves through content review, practice problems, and full-length exams, with spaced repetition (reviewing at growing intervals) for retention and every full-length question reviewed, right and wrong. Holding all practice until content is finished delays the feedback that guides review, reviewing only misses skips lucky guesses, and saving full-lengths for the last two weeks leaves no time to act on what they show.', partNumber: 3, partTitle: P3 },
  { id: 'mtds-ent-3b', question: 'How many full-length practice exams does the study plan recommend taking under realistic conditions?', options: ['One, taken the week before the exam', 'At least five to eight, each reviewed', 'Two or three, spread across the plan', 'Twenty or more, one every few days'], correctIndex: 1, explanation: 'The plan calls for at least 5–8 full-lengths, timed and uninterrupted, each followed by thorough review; at about 15 hours per exam including review, that fits the final phase of a typical plan. One to three gives too little data and practice, and twenty leaves no time to review them.', partNumber: 3, partTitle: P3 },

  // Part 4 — Guessing & Elimination Strategies
  { id: 'mtds-ent-4a', question: 'An answer choice is technically true but so general that it does not address the specific point the question asks about. This trap is best called:', options: ['Too broad', 'Too specific', 'Opposite', 'Extreme'], correctIndex: 0, explanation: 'A too-broad choice is true but too general to answer the question asked. A too-specific choice is right about one detail but misses the big picture, an opposite choice reverses the relationship, and an extreme choice relies on absolutes such as "always" or "never."', partNumber: 4, partTitle: P4 },
  { id: 'mtds-ent-4b', question: 'You can rule out one of four answer choices with certainty but cannot narrow further. Guessing among the rest gives roughly what chance of being right?', options: ['25%', '33%', '50%', '67%'], correctIndex: 1, explanation: 'With three choices left, a guess is right $\\frac{1}{3} \\approx 33\\%$ of the time, up from 25% for a blind guess among four. Ruling out a second choice would raise it to 50%, and 67% is the chance of being WRONG with three left.', partNumber: 4, partTitle: P4 },

  // Part 5 — Mental Stamina & Test Day Prep
  { id: 'mtds-ent-5a', question: 'The MCAT day runs about 7.5 hours including breaks. Which strategy best helps maintain cognitive performance across the whole day?', options: ['Skip the optional breaks so you finish sooner and stay fresher.', 'Eat one large high-carbohydrate meal right before the test.', 'Use breaks for small balanced snacks, water, and movement.', 'Keep caffeine coming steadily through all four sections.'], correctIndex: 2, explanation: 'Across a long day the limiting resource is steady energy and attention, which balanced snacks (protein plus carbohydrates), water, and a little movement protect. Skipping breaks drains stamina you need for the late sections, a heavy sugary meal spikes and then crashes blood glucose, and extra caffeine beyond your normal level invites jitters.', partNumber: 5, partTitle: P5 },
  { id: 'mtds-ent-5b', question: 'On the morning of the exam, the best breakfast is:', options: ['A new high-energy meal saved for the occasion', 'Nothing at all, to avoid feeling sluggish', 'Several energy drinks in place of solid food', 'A familiar, balanced meal you have eaten before'], correctIndex: 3, explanation: 'Test day is no time for experiments: a familiar, balanced breakfast gives steady energy without surprises. An untried meal risks an upset stomach, skipping food invites a mid-morning crash, and energy drinks spike caffeine and sugar.', partNumber: 5, partTitle: P5 },

  // Part 6 — Score Improvement & Practice Exam Analysis
  { id: 'mtds-ent-6a', question: 'An error log shows that most of a student\'s misses on her latest full-length came from not knowing enzyme-inhibition facts. The fix that best matches this error type is to:', options: ['Do more timed passage drills to build speed', 'Study that topic and make targeted flashcards', 'Slow down and double-check the easy questions', 'Simulate test conditions to manage anxiety'], correctIndex: 1, explanation: 'These misses are content gaps, and the matching fix is to study the specific topic and make flashcards for it. Timed drills address time pressure, double-checking addresses careless mistakes, and simulated test conditions address anxiety; each fix should target the error type that actually caused the misses.', partNumber: 6, partTitle: P6 },
  { id: 'mtds-ent-6b', question: 'On several easy calculation questions, a student sets up each problem correctly but then slips a decimal place in the arithmetic. Which error type is this, and what is the fix?', options: ['Content gap; re-study the underlying topic', 'Time pressure; do more timed passage drills', 'Careless mistake; slow down and double-check', 'Test anxiety; practice under exam conditions'], correctIndex: 2, explanation: 'A correct setup followed by a slip in execution is a careless mistake, and the fix is to slow down on "easy" questions and double-check the arithmetic. She knows the content, so re-study would not help, and nothing points to the clock or to nerves.', partNumber: 6, partTitle: P6 },

  // Part 7 — Final Week Strategy & Mindset
  { id: 'mtds-ent-7a', question: 'A student encounters a passage on a topic she has never seen before. The most effective immediate response is to:', options: ['Treat the passage as self-contained and reason from it.', 'Stop and search memory for anything you know on the topic.', 'Skip the passage and every question attached to it.', 'Assume the questions are traps and answer against instinct.'], correctIndex: 0, explanation: 'Unfamiliar content is normal on the MCAT: use the passage, your reasoning, and elimination rather than memory. Straining for half-remembered facts burns time, abandoning the passage forfeits its questions, and second-guessing every instinct replaces reasoning with superstition.', partNumber: 7, partTitle: P7 },
  { id: 'mtds-ent-7b', question: 'In the final-week plan, when should you take your last full-length practice exam?', options: ['The day before the exam', 'About 3 days before the exam', 'About a month before the exam', 'About 7 days before the exam'], correctIndex: 3, explanation: 'The last full-length comes about 7 days out, followed by light review of weak areas and flashcards, a final light study day two days out, and no studying the day before. A full-length three days or one day out leaves no time to recover, and a month out ends realistic practice too early.', partNumber: 7, partTitle: P7 },
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
