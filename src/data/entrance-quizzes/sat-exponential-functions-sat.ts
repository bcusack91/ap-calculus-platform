/**
 * Entrance Quiz — Exponential Functions (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'sef-ent-1a', question: 'Which equation models a quantity that starts at 200 and grows by 30% per year, where $t$ is the number of years?', options: ['$y = 200(0.30)^t$', '$y = 200(1.30)^t$', '$y = 200 + 30t$', '$y = 200(1.03)^t$'], correctIndex: 1, explanation: 'Growth of 30% means multiplying by $1 + 0.30 = 1.30$ each year: $y = 200(1.30)^t$. A base of $0.30$ would shrink the quantity, and $1.03$ is 3% growth.', partNumber: 1, partTitle: 'Growth and Decay Models' },
  { id: 'sef-ent-1b', question: 'Which equation models a quantity that starts at 100 and decreases by 20% each year, where $t$ is the number of years?', options: ['$y = 100(1.20)^t$', '$y = 100(0.20)^t$', '$y = 100(0.80)^t$', '$y = 100 - 20t$'], correctIndex: 2, explanation: 'Losing 20% leaves 80%, so the decay factor is $1 - 0.20 = 0.80$: $y = 100(0.80)^t$. The base $0.20$ would keep only 20% each year, and $100 - 20t$ subtracts a fixed amount (linear).', partNumber: 1, partTitle: 'Growth and Decay Models' },
  { id: 'sef-ent-2a', question: 'An investment of \\$1,000 earns 5% annual interest, compounded annually. What is its value after 2 years?', options: ['\\$1,100.00', '\\$1,102.50', '\\$1,050.00', '\\$1,025.00'], correctIndex: 1, explanation: '$A = 1000(1.05)^2 = 1000(1.1025) = 1102.50$, so the value is \\$1,102.50. (\\$1,100.00 is simple interest, which ignores interest earned on interest.)', partNumber: 2, partTitle: 'Compound Interest' },
  { id: 'sef-ent-2b', question: 'In the compound interest formula $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$, what does $n$ represent?', options: ['The number of years the money is invested', 'The annual interest rate, written as a decimal', 'How many times per year interest is added', 'The amount of money invested at the start'], correctIndex: 2, explanation: '$n$ counts compounding periods per year (for example, $n = 12$ for monthly). $t$ is the number of years, $r$ is the annual rate, and $P$ is the principal.', partNumber: 2, partTitle: 'Compound Interest' },
  { id: 'sef-ent-3a', question: 'What is the $y$-intercept of the graph of $f(x) = 6(0.5)^x + 2$?', options: ['$(0, 2)$', '$(0, 5)$', '$(0, 6)$', '$(0, 8)$'], correctIndex: 3, explanation: 'Set $x = 0$: $f(0) = 6(0.5)^0 + 2 = 6(1) + 2 = 8$. Forgetting the vertical shift gives 6; the value 5 is $f(1)$.', partNumber: 3, partTitle: 'Graphs of Exponential Functions' },
  { id: 'sef-ent-3b', question: 'What is the horizontal asymptote of the graph of $y = 3(2)^x - 4$?', options: ['$y = -4$', '$y = 0$', '$y = 3$', '$y = -1$'], correctIndex: 0, explanation: 'As $x \\to -\\infty$, $3(2)^x \\to 0$, so $y \\to -4$. The shift $-4$ moves the asymptote down from $y = 0$ to $y = -4$. ($y = -1$ is the $y$-intercept.)', partNumber: 3, partTitle: 'Graphs of Exponential Functions' },
  { id: 'sef-ent-4a', question: 'The mass, in grams, of a radioactive sample after $t$ years is $f(t) = 300\\left(\\frac{1}{2}\\right)^{t/5}$. What is the mass after 10 years?', options: ['75', '100', '150', '200'], correctIndex: 0, explanation: 'The half-life is 5 years, so 10 years is 2 half-lives: $f(10) = 300\\left(\\frac{1}{2}\\right)^{2} = 300 \\cdot \\frac{1}{4} = 75$ grams. (150 is the mass after only one half-life.)', partNumber: 4, partTitle: 'Half-Life and Doubling Time' },
  { id: 'sef-ent-4b', question: 'A bacteria population doubles every 20 minutes. If there are 500 bacteria now, how many will there be after 1 hour?', options: ['1,500', '2,000', '3,000', '4,000'], correctIndex: 3, explanation: 'One hour is 3 doubling periods: $500 \\cdot 2^3 = 500 \\cdot 8 = 4{,}000$. (3,000 doubles once and then triples; 1,500 multiplies by 3 instead of doubling 3 times.)', partNumber: 4, partTitle: 'Half-Life and Doubling Time' },
  { id: 'sef-ent-5a', question: 'For $x = 1, 2, 3, 4$, which list of $y$-values could come from an exponential function?', options: ['$y$: 3, 6, 9, 12', '$y$: 2, 4, 8, 16', '$y$: 5, 7, 9, 11', '$y$: 1, 4, 9, 16'], correctIndex: 1, explanation: 'An exponential function multiplies by a constant ratio for each step in $x$: 2, 4, 8, 16 doubles every time. The lists 3, 6, 9, 12 and 5, 7, 9, 11 add a constant (linear), and 1, 4, 9, 16 is $x^2$.', partNumber: 5, partTitle: 'Exponential vs. Linear' },
  { id: 'sef-ent-5b', question: 'A town\'s population increases by 6% every year. Which statement describes this relationship?', options: ['Linear, because it increases by the same amount each year', 'Exponential, because it grows by the same percent each year', 'Linear, because the 6% growth rate stays constant every year', 'Exponential, because it increases by 6 people each year'], correctIndex: 1, explanation: 'A constant PERCENT change means multiplying by the same factor (1.06) each year, which is exponential. The yearly increase in people grows as the population grows, so it is not a constant amount.', partNumber: 5, partTitle: 'Exponential vs. Linear' },
  { id: 'sef-ent-6a', question: 'A model is $P(t) = 800(1.03)^{4t}$, where $t$ is in years. What is the approximate annual growth rate?', options: ['0.75%', '3%', '12%', '12.55%'], correctIndex: 3, explanation: 'Rewrite: $(1.03)^{4t} = \\left[(1.03)^4\\right]^t \\approx (1.1255)^t$, an annual rate of about 12.55%. The 3% is the rate per quarter, and 12% simply adds four quarters without compounding.', partNumber: 6, partTitle: 'Rewriting Exponential Expressions' },
  { id: 'sef-ent-6b', question: 'The function $f(t) = 500(0.81)^t$ is rewritten as $f(t) = 500b^{2t}$. What is the value of $b$?', options: ['0.405', '0.6561', '0.9', '1.62'], correctIndex: 2, explanation: 'We need $b^{2t} = (0.81)^t$, so $b^2 = 0.81$ and $b = 0.9$. (0.405 halves 0.81 and 0.6561 squares it; the exponent $2t$ calls for a square root.)', partNumber: 6, partTitle: 'Rewriting Exponential Expressions' },
  { id: 'sef-ent-7a', question: 'A car\'s value, in dollars, $t$ years after purchase is $V(t) = 24{,}000(0.85)^t$. What does 0.85 represent?', options: ['The car loses 85% of its value each year', 'The car keeps 85% of its value each year', 'The car loses 0.85% of its value each year', 'The car keeps 15% of its value each year'], correctIndex: 1, explanation: 'Each year the value is multiplied by 0.85, so the car keeps 85% of the previous year\'s value (it loses 15% per year).', partNumber: 7, partTitle: 'Review & Hard Practice' },
  { id: 'sef-ent-7b', question: 'A town of 50,000 people grows by 4% per year. To the nearest whole number, what will its population be in 10 years?', options: ['70,000', '71,166', '74,012', '76,973'], correctIndex: 2, explanation: '$P = 50{,}000(1.04)^{10} \\approx 50{,}000(1.48024) \\approx 74{,}012$. (70,000 is simple 4% growth added 10 times; 71,166 and 76,973 use 9 and 11 years.)', partNumber: 7, partTitle: 'Review & Hard Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Growth and Decay Models' },
    { partNumber: 2, partTitle: 'Compound Interest' },
    { partNumber: 3, partTitle: 'Graphs of Exponential Functions' },
    { partNumber: 4, partTitle: 'Half-Life and Doubling Time' },
    { partNumber: 5, partTitle: 'Exponential vs. Linear' },
    { partNumber: 6, partTitle: 'Rewriting Exponential Expressions' },
    { partNumber: 7, partTitle: 'Review & Hard Practice' },
  ]
}
