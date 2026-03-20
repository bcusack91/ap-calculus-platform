/**
 * Entrance Quiz — Exponential Functions (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sef-ent-1a', question: 'A population of bacteria starts at 500 and doubles every hour. What is the population after 3 hours?', options: ['1,500', '2,000', '3,000', '4,000'], correctIndex: 3, explanation: 'Population = 500 × 2³ = 500 × 8 = 4,000.', partNumber: 1, partTitle: 'Exponential Growth' },
  { id: 'sef-ent-1b', question: 'Which equation models exponential growth starting at 200 and growing by 30% per year?', options: ['y = 200(0.30)^t', 'y = 200(1.30)^t', 'y = 200 + 30t', 'y = 200(1.03)^t'], correctIndex: 1, explanation: 'Exponential growth with 30% per year: y = 200(1 + 0.30)^t = 200(1.30)^t.', partNumber: 1, partTitle: 'Exponential Growth' },
  { id: 'sef-ent-2a', question: 'A car worth $20,000 depreciates at 15% per year. What is the value after 2 years?', options: ['$14,250', '$14,450', '$17,000', '$12,000'], correctIndex: 1, explanation: 'Value = 20,000 × (0.85)² = 20,000 × 0.7225 = $14,450. (Year 1: 20,000 × 0.85 = $17,000; Year 2: 17,000 × 0.85 = $14,450.)', partNumber: 2, partTitle: 'Exponential Decay' },
  { id: 'sef-ent-2b', question: 'Which equation models a quantity that starts at 100 and decreases by 20% each year?', options: ['y = 100(1.20)^t', 'y = 100(0.20)^t', 'y = 100(0.80)^t', 'y = 100 − 20t'], correctIndex: 2, explanation: 'Decreasing by 20% means multiplying by (1 − 0.20) = 0.80 each year: y = 100(0.80)^t.', partNumber: 2, partTitle: 'Exponential Decay' },
  { id: 'sef-ent-3a', question: '$1,000 is invested at 5% annual interest, compounded annually. What is the value after 2 years?', options: ['$1,100', '$1,102.50', '$1,050', '$1,025'], correctIndex: 1, explanation: 'A = 1000(1.05)² = 1000 × 1.1025 = $1,102.50.', partNumber: 3, partTitle: 'Compound Interest' },
  { id: 'sef-ent-3b', question: 'What does the variable n represent in the compound interest formula A = P(1 + r/n)^(nt)?', options: ['Number of years', 'Annual interest rate', 'Number of times interest compounds per year', 'Principal amount'], correctIndex: 2, explanation: 'In the compound interest formula, n is the number of compounding periods per year (e.g., n = 12 for monthly compounding).', partNumber: 3, partTitle: 'Compound Interest' },
  { id: 'sef-ent-4a', question: 'A linear function and an exponential function both start at y = 5 when x = 0. The linear adds 3 each step; the exponential multiplies by 2 each step. At x = 4, which is larger?', options: ['Linear (17)', 'Exponential (80)', 'They are equal', 'Cannot be determined'], correctIndex: 1, explanation: 'Linear at x=4: 5 + 3(4) = 17. Exponential at x=4: 5 × 2⁴ = 80. The exponential is larger.', partNumber: 4, partTitle: 'Exponential vs. Linear' },
  { id: 'sef-ent-4b', question: 'Which table of values represents an exponential function?', options: ['x: 1,2,3,4 and y: 3,6,9,12', 'x: 1,2,3,4 and y: 2,4,8,16', 'x: 1,2,3,4 and y: 5,7,9,11', 'x: 1,2,3,4 and y: 1,4,9,16'], correctIndex: 1, explanation: 'Exponential functions have a constant ratio between consecutive outputs. 2,4,8,16 each time doubles (ratio = 2).', partNumber: 4, partTitle: 'Exponential vs. Linear' },
  { id: 'sef-ent-5a', question: 'A town\'s population grows by 4% per year. If the current population is 50,000, what will it be in 10 years?', options: ['70,000', '74,012', '78,000', '100,000'], correctIndex: 1, explanation: 'P = 50,000 × (1.04)^10 ≈ 50,000 × 1.4802 ≈ 74,012.', partNumber: 5, partTitle: 'Percent Modeling' },
  { id: 'sef-ent-5b', question: 'A price increases by 3% each year. Approximately how many years until the price doubles? (Use rule of 72)', options: ['24 years', '28 years', '32 years', '36 years'], correctIndex: 0, explanation: 'Rule of 72: 72 ÷ rate = doubling time. 72 ÷ 3 = 24 years.', partNumber: 5, partTitle: 'Percent Modeling' },
  { id: 'sef-ent-6a', question: 'The function f(t) = 300 · (1/2)^(t/5) models radioactive decay where t is years. What is the value when t = 10?', options: ['75', '100', '150', '200'], correctIndex: 0, explanation: 'f(10) = 300 · (1/2)^(10/5) = 300 · (1/2)² = 300 · 1/4 = 75.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sef-ent-6b', question: 'An account grows from $500 to $1,000 in 8 years with annual compounding. What is the approximate annual rate?', options: ['About 7%', 'About 8%', 'About 9%', 'About 10%'], correctIndex: 2, explanation: '1000 = 500(1+r)⁸ → 2 = (1+r)⁸ → (1+r) = 2^(1/8) ≈ 1.0905 → r ≈ 9%.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sef-ent-7a', question: 'For the exponential function y = a · b^x, what does a represent?', options: ['The rate of change', 'The initial value (y-intercept)', 'The growth factor', 'The horizontal asymptote'], correctIndex: 1, explanation: 'When x = 0, y = a · b⁰ = a · 1 = a. So a is the initial value or y-intercept.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sef-ent-7b', question: 'The graph of y = 3^x passes through which point?', options: ['(0, 0)', '(1, 3)', '(3, 1)', '(0, 3)'], correctIndex: 1, explanation: 'y = 3^x: when x=1, y = 3¹ = 3. So the graph passes through (1, 3). Note: at x=0, y=1 (not 0 or 3).', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponential Growth' },
    { partNumber: 2, partTitle: 'Exponential Decay' },
    { partNumber: 3, partTitle: 'Compound Interest' },
    { partNumber: 4, partTitle: 'Exponential vs. Linear' },
    { partNumber: 5, partTitle: 'Percent Modeling' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
