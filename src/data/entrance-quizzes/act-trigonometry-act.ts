/**
 * Entrance Quiz — Trigonometry (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'atrig-ent-1a', question: 'Which set of ratios correctly defines sine, cosine, and tangent for an acute angle in a right triangle?', options: ['sin = opp/hyp, cos = adj/hyp, tan = opp/adj', 'sin = adj/hyp, cos = opp/hyp, tan = adj/opp', 'sin = hyp/opp, cos = hyp/adj, tan = adj/opp', 'sin = opp/adj, cos = adj/hyp, tan = opp/hyp'], correctIndex: 0, explanation: 'SOH-CAH-TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.', partNumber: 1, partTitle: 'Right Triangle Trig' },
  { id: 'atrig-ent-1b', question: 'In a right triangle with a 30° angle and a hypotenuse of 10, what is the length of the side opposite the 30° angle?', options: ['10', '5√3', '5', '10√3'], correctIndex: 2, explanation: 'opposite = hypotenuse × sin(30°) = 10 × 0.5 = 5.', partNumber: 1, partTitle: 'Right Triangle Trig' },
  { id: 'atrig-ent-2a', question: 'A person stands 50 feet from a tree and measures the angle of elevation to the top as 40°. Which equation finds the height of the tree?', options: ['height = 50 × cos(40°)', 'height = 50 / tan(40°)', 'height = 50 × tan(40°)', 'height = 50 × sin(40°)'], correctIndex: 2, explanation: 'tan(angle of elevation) = height / distance, so height = distance × tan(angle).', partNumber: 2, partTitle: 'Trig Ratios & Applications' },
  { id: 'atrig-ent-2b', question: 'Which of the following is the Pythagorean identity?', options: ['sin²θ + cos²θ = 1', 'sin²θ − cos²θ = 1', 'sinθ + cosθ = 1', 'tan²θ + 1 = sin²θ'], correctIndex: 0, explanation: 'The fundamental Pythagorean identity states sin²θ + cos²θ = 1.', partNumber: 2, partTitle: 'Trig Ratios & Applications' },
  { id: 'atrig-ent-3a', question: 'On the unit circle, the x-coordinate of a point corresponds to which trigonometric function?', options: ['sin θ', 'tan θ', 'sec θ', 'cos θ'], correctIndex: 3, explanation: 'On the unit circle, the x-coordinate equals cos θ and the y-coordinate equals sin θ.', partNumber: 3, partTitle: 'Unit Circle' },
  { id: 'atrig-ent-3b', question: 'What is sin(π/6)?', options: ['√3/2', '1/2', '√2/2', '1/√3'], correctIndex: 1, explanation: 'sin(π/6) = sin(30°) = 1/2.', partNumber: 3, partTitle: 'Unit Circle' },
  { id: 'atrig-ent-4a', question: 'Which identity correctly expresses tan θ?', options: ['cos θ / sin θ', 'sin θ × cos θ', 'sin θ / cos θ', '1 / sin θ'], correctIndex: 2, explanation: 'By definition, tan θ = sin θ / cos θ.', partNumber: 4, partTitle: 'Trig Identities' },
  { id: 'atrig-ent-4b', question: 'cos(90° − θ) is equal to which of the following?', options: ['cos θ', '−sin θ', 'tan θ', 'sin θ'], correctIndex: 3, explanation: 'The co-function identity states cos(90° − θ) = sin θ.', partNumber: 4, partTitle: 'Trig Identities' },
  { id: 'atrig-ent-5a', question: 'What is the period of y = sin(x)?', options: ['π', '2π', 'π/2', '4π'], correctIndex: 1, explanation: 'The basic sine function y = sin(x) has a period of 2π and an amplitude of 1.', partNumber: 5, partTitle: 'Graphing Trig Functions' },
  { id: 'atrig-ent-5b', question: 'For y = 3 sin(2x + π) − 1, what is the amplitude?', options: ['2', '1', 'π', '3'], correctIndex: 3, explanation: 'In y = A sin(Bx + C) + D, the amplitude is |A|. Here A = 3, so amplitude = 3.', partNumber: 5, partTitle: 'Graphing Trig Functions' },
  { id: 'atrig-ent-6a', question: 'If sin θ = 3/5 and θ is in Quadrant I, what is tan θ?', options: ['5/3', '4/5', '3/4', '5/4'], correctIndex: 2, explanation: 'If sin θ = 3/5 and θ is in Q1, cos θ = 4/5, so tan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'atrig-ent-6b', question: 'Convert 240° to radians.', options: ['3π/4', '2π/3', '5π/3', '4π/3'], correctIndex: 3, explanation: '240° × (π/180) = 240π/180 = 4π/3.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'atrig-ent-7a', question: 'Approximately what percentage of ACT Math questions involve trigonometry?', options: ['15%', '7%', '25%', '2%'], correctIndex: 1, explanation: 'Trigonometry makes up about 7% of ACT Math — usually around 4 questions out of 60.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'atrig-ent-7b', question: 'Which of the following is the exact value of sin(45°)?', options: ['1/2', '√3/2', '1', '√2/2'], correctIndex: 3, explanation: 'sin(45°) = √2/2. Knowing exact values for 0°, 30°, 45°, 60°, and 90° is essential for the ACT.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Right Triangle Trig' },
    { partNumber: 2, partTitle: 'Trig Ratios & Applications' },
    { partNumber: 3, partTitle: 'Unit Circle' },
    { partNumber: 4, partTitle: 'Trig Identities' },
    { partNumber: 5, partTitle: 'Graphing Trig Functions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
