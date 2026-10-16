/**
 * Entrance Quiz — Integrated Rate Laws — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-integrated-rate-laws-part1..7):
 *   1 Zero-Order Integrated Rate Law              — [A] = −kt + [A]0, time to completion
 *   2 First-Order Integrated Rate Law             — ln[A] = −kt + ln[A]0, time to a given fraction
 *   3 Second-Order Integrated Rate Law            — 1/[A] = kt + 1/[A]0, lengthening halving times
 *   4 Graphical Analysis                          — choosing the linear plot, reading slope and intercept
 *   5 First-Order Half-Life and Radioactive Decay — non-whole half-lives, counting half-lives
 *   6 Problem-Solving Workshop                    — identify order from data then calculate
 *   7 Synthesis & AP Review                       — evidence against first order, second-order prediction from a plot
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Zero-Order Integrated Rate Law
  {
    id: 'irl-ent-1a',
    question: 'A zero-order reaction has $k = 2.5 \\times 10^{-3}$ M/s and $[A]_0 = 0.90$ M. What is [A] after 120 s?',
    options: ['0.60 M', '0.30 M', '0.67 M', '0.45 M'],
    correctIndex: 0,
    explanation: 'For zero order, $[A] = [A]_0 - kt = 0.90 - (2.5 \\times 10^{-3})(120) = 0.60$ M. The value 0.30 M is the amount used up, and 0.67 M comes from wrongly applying the first-order equation.',
    partNumber: 1,
    partTitle: 'Zero-Order Integrated Rate Law',
  },
  {
    id: 'irl-ent-1b',
    question: 'In a zero-order reaction, [A] falls from 0.80 M to 0.60 M during the first 40 s. How long after the start is A completely used up?',
    options: ['120 s', '160 s', '80 s', 'It never reaches zero'],
    correctIndex: 1,
    explanation: 'The constant rate is 0.20 M / 40 s = 0.0050 M/s, so A runs out at $t = [A]_0/k = 0.80/0.0050 = 160$ s. A zero-order reaction does reach zero in finite time; 120 s is only the time remaining after the first 40 s.',
    partNumber: 1,
    partTitle: 'Zero-Order Integrated Rate Law',
  },

  // Part 2: First-Order Integrated Rate Law
  {
    id: 'irl-ent-2a',
    question: 'A first-order reaction has $k = 0.0200\\ \\text{s}^{-1}$ and $[A]_0 = 0.500$ M. What is [A] after 50.0 s?',
    options: ['0.250 M', '0.368 M', '0.184 M', '0.050 M'],
    correctIndex: 2,
    explanation: '$[A] = [A]_0 e^{-kt} = 0.500\\,e^{-1.00} = 0.184$ M. Leaving out $[A]_0$ gives 0.368, and 50.0 s is not one half-life (that is 34.7 s), so 0.250 M is wrong too.',
    partNumber: 2,
    partTitle: 'First-Order Integrated Rate Law',
  },
  {
    id: 'irl-ent-2b',
    question: 'A first-order reaction has $k = 0.0150\\ \\text{min}^{-1}$. How long does it take until only 20% of the starting reactant remains?',
    options: ['14.9 min', '46.2 min', '53.3 min', '107 min'],
    correctIndex: 3,
    explanation: '$t = \\ln([A]_0/[A])/k = \\ln 5/0.0150 = 1.609/0.0150 = 107$ min. The value 14.9 min is the time for 20% to be consumed, and 46.2 min is just one half-life.',
    partNumber: 2,
    partTitle: 'First-Order Integrated Rate Law',
  },

  // Part 3: Second-Order Integrated Rate Law
  {
    id: 'irl-ent-3a',
    question: 'A second-order reaction (Rate $= k[A]^2$) has $k = 0.40\\ \\text{M}^{-1}\\text{s}^{-1}$ and $[A]_0 = 0.25$ M. What is [A] after 15 s?',
    options: ['0.10 M', '0.50 M', '0.17 M', '0.00062 M'],
    correctIndex: 0,
    explanation: '$1/[A] = kt + 1/[A]_0 = (0.40)(15) + 4.0 = 10.0\\ \\text{M}^{-1}$, so [A] = 0.10 M. Subtracting $1/[A]_0$ gives 0.50 M, dropping it gives 0.17 M, and 0.00062 M comes from the first-order equation.',
    partNumber: 3,
    partTitle: 'Second-Order Integrated Rate Law',
  },
  {
    id: 'irl-ent-3b',
    question: 'In a second-order reaction, [A] falls from 0.80 M to 0.40 M in 25 s. How much additional time does it take to fall from 0.40 M to 0.20 M?',
    options: [
      '25 s, because each half-life lasts the same time',
      '50 s, because 1/[A] must now rise by twice as much',
      '12.5 s, because the reaction speeds up as it goes',
      '100 s, because the rate depends on [A] squared',
    ],
    correctIndex: 1,
    explanation: '1/[A] rises from 1.25 to 2.50 in 25 s, so k = 0.050 $\\text{M}^{-1}\\text{s}^{-1}$; reaching 5.00 needs a rise of 2.50, which takes 50 s. Only first-order reactions have a constant half-life.',
    partNumber: 3,
    partTitle: 'Second-Order Integrated Rate Law',
  },

  // Part 4: Graphical Analysis
  {
    id: 'irl-ent-4a',
    question: 'For A → products: t = 0, 20, 40 and 60 s give [A] = 0.800, 0.640, 0.512 and 0.410 M. Which plot of these data is a straight line?',
    options: ['$[A]$ versus $t$', '$1/[A]$ versus $t$', '$\\ln[A]$ versus $t$', '$[A]^2$ versus $t$'],
    correctIndex: 2,
    explanation: 'Each 20 s interval leaves 80% of the previous [A], so ln[A] drops by the same 0.223 each time and ln[A] versus t is linear (first order). The changes in [A] and in 1/[A] are not constant.',
    partNumber: 4,
    partTitle: 'Graphical Analysis',
  },
  {
    id: 'irl-ent-4b',
    question: 'A plot of 1/[A] ($\\text{M}^{-1}$) versus t (s) is a straight line with slope 0.060 and y-intercept 2.5. What do these data show?',
    options: [
      'First order, with $k = 0.060\\ \\text{s}^{-1}$ and $[A]_0 = 0.40$ M',
      'Zero order, with $k = 0.060$ M/s and $[A]_0 = 0.40$ M',
      'Second order, with $k = 0.060\\ \\text{M}^{-1}\\text{s}^{-1}$ and $[A]_0 = 2.5$ M',
      'Second order, with $k = 0.060\\ \\text{M}^{-1}\\text{s}^{-1}$ and $[A]_0 = 0.40$ M',
    ],
    correctIndex: 3,
    explanation: 'A linear 1/[A] plot means second order, the slope equals +k, and the intercept is $1/[A]_0$, so $[A]_0 = 1/2.5 = 0.40$ M. Reading the intercept directly as $[A]_0$ gives 2.5 M.',
    partNumber: 4,
    partTitle: 'Graphical Analysis',
  },

  // Part 5: First-Order Half-Life and Radioactive Decay
  {
    id: 'irl-ent-5a',
    question: 'A first-order reaction has a half-life of 6.0 h. What fraction of the reactant remains after 4.0 h?',
    options: ['0.630', '0.667', '0.370', '0.333'],
    correctIndex: 0,
    explanation: 'Here $kt = (0.693/6.0)(4.0) = 0.462$, so the fraction left is $e^{-0.462} = 0.630$. Interpolating in a straight line gives 0.667, and 0.370 is the fraction that has decayed.',
    partNumber: 5,
    partTitle: 'First-Order Half-Life and Radioactive Decay',
  },
  {
    id: 'irl-ent-5b',
    question: 'A radioisotope has a half-life of 8.0 days. How long does it take a 3.2 g sample to decay until only 0.20 g of the isotope remains?',
    options: ['24 days', '32 days', '128 days', '40 days'],
    correctIndex: 1,
    explanation: '0.20/3.2 = 1/16 = $(1/2)^4$, so four half-lives pass: 4 × 8.0 = 32 days. Multiplying the half-life by 16 confuses the fraction with the number of half-lives.',
    partNumber: 5,
    partTitle: 'First-Order Half-Life and Radioactive Decay',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'irl-ent-6a',
    question: 'For A → products: t = 0, 10, 20 and 30 min give [A] = 0.600, 0.450, 0.300 and 0.150 M. What is the order, and what is [A] at t = 35 min?',
    options: [
      'First order, 0.178 M',
      'Second order, 0.277 M',
      'Zero order, 0.075 M',
      'Cannot be determined from these data',
    ],
    correctIndex: 2,
    explanation: '[A] drops by the same 0.150 M every 10 min, so the reaction is zero order with k = 0.0150 M/min, and [A] = 0.600 − (0.0150)(35) = 0.075 M. The first-order value wrongly treats the data as having a constant half-life.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'irl-ent-6b',
    question: 'In a first-order reaction, [A] falls from 0.800 M to 0.200 M in 46 min. What is the rate constant?',
    options: [
      '$0.0151\\ \\text{min}^{-1}$',
      '$0.0602\\ \\text{min}^{-1}$',
      '$0.0130$ M/min',
      '$0.0301\\ \\text{min}^{-1}$',
    ],
    correctIndex: 3,
    explanation: 'Falling to one-fourth is two half-lives, so $t_{1/2} = 23$ min and $k = 0.693/23 = 0.0301\\ \\text{min}^{-1}$ (the same as $\\ln 4/46$). Treating 46 min as a single half-life gives 0.0151, and 0.0130 M/min is a zero-order slope.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'irl-ent-7a',
    question: 'Which observation from a concentration–time study rules out first-order kinetics for the reaction?',
    options: [
      'Half-lives that grow longer each time',
      'A rate constant with units of reciprocal seconds',
      'A straight-line plot of ln[A] against time',
      '[A] falling by the same fraction each minute',
    ],
    correctIndex: 0,
    explanation: 'A first-order reaction has a constant half-life, so half-lives that keep lengthening rule it out. Units of reciprocal seconds, a linear ln[A] plot and a constant fractional drop are all evidence for first order.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'irl-ent-7b',
    question: 'For a reaction, [A] versus t and ln[A] versus t are both curved, but 1/[A] versus t is linear with slope $0.025\\ \\text{M}^{-1}\\text{s}^{-1}$ and y-intercept $5.0\\ \\text{M}^{-1}$. What is [A] at t = 120 s?',
    options: ['0.200 M', '0.125 M', '0.333 M', '0.500 M'],
    correctIndex: 1,
    explanation: 'The reaction is second order, so $1/[A] = (0.025)(120) + 5.0 = 8.0\\ \\text{M}^{-1}$ and [A] = 0.125 M. The value 0.200 M is just the starting concentration, and 0.500 M comes from subtracting instead of adding.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Zero-Order Integrated Rate Law' },
    { partNumber: 2, partTitle: 'First-Order Integrated Rate Law' },
    { partNumber: 3, partTitle: 'Second-Order Integrated Rate Law' },
    { partNumber: 4, partTitle: 'Graphical Analysis' },
    { partNumber: 5, partTitle: 'First-Order Half-Life and Radioactive Decay' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
