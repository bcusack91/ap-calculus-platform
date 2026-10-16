/**
 * Entrance Quiz — Discrete Random Variables (AP Statistics)
 * Lesson: discrete-random-variables-apstats (also rendered by mean-sd-random-variables).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Discrete Random Variables'
const P2 = 'Expected Value'
const P3 = 'Variance & Standard Deviation'
const P4 = 'Cumulative Distributions and Simulation'
const P5 = 'Interpreting Expected Value and Standard Deviation'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'drv-ent-1a',
    question: 'The number of texts $X$ a student receives during a class period has $P(X=0) = 0.20$, $P(X=1) = 0.35$, $P(X=2) = 0.25$, $P(X=3) = 0.15$, $P(X=4) = 0.05$. What is $P(1 \\leq X < 3)$?',
    options: ['0.75', '0.60', '0.80', '0.45'],
    correctIndex: 1,
    explanation: 'Only $X = 1$ and $X = 2$ satisfy $1 \\leq X < 3$, so $P = 0.35 + 0.25 = 0.60$. Including $X = 3$ gives 0.75, and 0.80 is $P(X \\geq 1)$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'drv-ent-1b',
    question: 'A discrete random variable takes the values 1, 2, 3 and 4, with $P(X=1) = P(X=2)$, $P(X=3) = 0.30$ and $P(X=4) = 0.20$. What is $P(X \\geq 2)$?',
    options: ['0.50', '0.80', '0.55', '0.75'],
    correctIndex: 3,
    explanation: 'The probabilities sum to 1, so $P(X=1) + P(X=2) = 0.50$ and each is 0.25. Then $P(X \\geq 2) = 0.25 + 0.30 + 0.20 = 0.75$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'drv-ent-2a',
    question: 'A carnival game costs \\$4. You roll a fair die: a 6 wins \\$12, a 5 wins \\$6, and any other roll wins nothing. What is the expected net gain per play?',
    options: ['A gain of \\$3.00', 'A loss of \\$4.00', 'A gain of \\$1.00', 'A loss of \\$1.00'],
    correctIndex: 3,
    explanation: 'The expected winnings are $12 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6} = 2 + 1 = 3$ dollars; subtracting the \\$4 cost gives an expected net gain of $-\\$1.00$. \\$3.00 forgets the cost of playing.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'drv-ent-2b',
    question: 'The number of goals $X$ a soccer team scores in a game has $E(X) = 1.4$. Which interpretation is correct?',
    options: ['The team most often scores 1.4 goals in a game', 'Over many games, the team averages about 1.4 goals a game', 'The team scores 1 or 2 goals in 40% of its games', 'In any one game, the team scores at most 1.4 goals'],
    correctIndex: 1,
    explanation: 'An expected value is a long-run average over many repetitions, here many games. A team cannot score 1.4 goals in a game, and $E(X)$ is neither the most likely value nor a maximum.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'drv-ent-3a',
    question: 'A random variable takes the value 0 with probability 0.6 and the value 5 with probability 0.4. What is its standard deviation $\\sigma_X$?',
    options: ['6.00', '3.54', '2.45', '2.00'],
    correctIndex: 2,
    explanation: 'The mean is $5(0.4) = 2$. The variance is $(0-2)^2(0.6) + (5-2)^2(0.4) = 2.4 + 3.6 = 6$, so $\\sigma_X = \\sqrt{6} \\approx 2.45$. 6.00 is the variance and 2.00 is the mean.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'drv-ent-3b',
    question: 'Random variables $X$ and $Y$ both take the values 1, 2 and 3. For $X$ the probabilities are 0.1, 0.8, 0.1; for $Y$ they are 0.45, 0.10, 0.45. How do their means and standard deviations compare?',
    options: ['Same mean; X has the larger SD', 'Same mean; Y has the larger SD', 'Y has the larger mean and SD', 'Same mean and the same SD'],
    correctIndex: 1,
    explanation: 'Both distributions are symmetric about 2, so both means are 2. $Y$ puts most of its probability at 1 and 3, far from the mean, while $X$ concentrates at 2, so $Y$ has the larger standard deviation.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'drv-ent-4a',
    question: 'The cumulative distribution of the number of typos $X$ on a page is $P(X \\leq 0) = 0.40$, $P(X \\leq 1) = 0.75$, $P(X \\leq 2) = 0.92$ and $P(X \\leq 3) = 1.00$. What is $P(X \\geq 2)$?',
    options: ['0.25', '0.08', '0.92', '0.17'],
    correctIndex: 0,
    explanation: '$P(X \\geq 2) = 1 - P(X \\leq 1) = 1 - 0.75 = 0.25$. The value 0.17 is $P(X = 2)$ alone, and 0.08 is $P(X = 3)$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'drv-ent-4b',
    question: 'A player makes 60% of her shots, independently. A student wants to simulate $X$ = number of makes in 5 shots using random digits 0 to 9. Which design is correct?',
    options: ['Makes 0–6, misses 7–9, five digits per trial', 'Makes 0–5, misses 6–9, six digits per trial', 'Makes 0–4, misses 5–9, five digits per trial', 'Makes 0–5, misses 6–9, five digits per trial'],
    correctIndex: 3,
    explanation: 'Six of the ten digits (0 to 5) give a 60% chance of a make, and each trial needs one digit per shot, five in all. Using 0 to 6 models 70%, 0 to 4 models 50%, and six digits models six shots.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'drv-ent-5a',
    question: 'Two delivery services both have a mean delivery time of 3 days. Service A has a standard deviation of 0.5 days and Service B has a standard deviation of 1.5 days, and both distributions are roughly symmetric and mound-shaped. A package must arrive within 4 days. Which statement is best?',
    options: ['Service B is likelier to meet the deadline', 'Service A is likelier to meet the deadline', 'Both are equally likely to meet the deadline', 'Neither can be judged without the medians'],
    correctIndex: 1,
    explanation: 'With the same mean, the smaller standard deviation means delivery times cluster more tightly around 3 days, so Service A rarely runs past 4 days. Service B\'s times vary more, so more of its deliveries take longer than 4 days.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'drv-ent-5b',
    question: 'The number of customers who enter a café per hour has mean 18 and standard deviation 4. Which interpretation of the standard deviation is correct?',
    options: ['Every hour has between 14 and 22 customers', 'About 4 customers arrive in a typical hour', 'A typical hour\'s count is about 4 away from 18', 'The count is exactly 18 in all but 4 hours'],
    correctIndex: 2,
    explanation: 'A standard deviation describes a typical distance from the mean: the hourly count usually lands about 4 customers above or below 18. It does not set hard limits or describe the count itself.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'drv-ent-6a',
    question: 'An insurer sells a one-year phone policy for \\$200. It pays \\$600 for a broken screen (probability 0.15) and \\$1,000 for a lost phone (probability 0.05); otherwise it pays nothing. What is the insurer\'s expected profit per policy?',
    options: ['\\$140', '\\$110', '\\$60', '\\$150'],
    correctIndex: 2,
    explanation: 'Expected claims are $600(0.15) + 1000(0.05) = 90 + 50 = 140$ dollars, so the expected profit is $200 - 140 = 60$ dollars. \\$140 is the expected claim, and \\$110 and \\$150 each leave out one type of claim.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'drv-ent-6b',
    question: 'A random variable takes the values 2, 4 and 6 with probabilities 0.25, 0.50 and 0.25. What is its standard deviation?',
    options: ['1.41', '2.00', '1.63', '1.00'],
    correctIndex: 0,
    explanation: 'The mean is 4 by symmetry. The variance is $(2-4)^2(0.25) + 0 + (6-4)^2(0.25) = 1 + 1 = 2$, so $\\sigma = \\sqrt{2} \\approx 1.41$. 2.00 is the variance, and 1.63 ignores the probabilities.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'drv-ent-7a',
    question: 'A random variable takes the values 1, 2 and 10 with probabilities 0.5, 0.4 and 0.1. A student averages 1, 2 and 10 and reports $E(X) = 4.3$. What is the correct expected value?',
    options: ['4.3', '1.0', '2.3', '2.0'],
    correctIndex: 2,
    explanation: 'Each value must be weighted by its probability: $1(0.5) + 2(0.4) + 10(0.1) = 0.5 + 0.8 + 1.0 = 2.3$. The value 1.0 is the most likely value, not the mean.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'drv-ent-7b',
    question: 'Which statement about the mean $E(X)$ and standard deviation $\\sigma_X$ of a discrete random variable is correct?',
    options: ['E(X) need not be a value that X can take', 'E(X) is always the most likely value', 'σ can be negative if E(X) is negative', 'E(X) averages the listed values of X'],
    correctIndex: 0,
    explanation: 'An expected value is a probability-weighted average, so it can fall between possible values (such as 1.7 children). It is not necessarily the most likely value, it weights values by probability, and a standard deviation is never negative.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [P1, P2, P3, P4, P5, P6, P7].map((partTitle, i) => ({ partNumber: i + 1, partTitle }))
}
