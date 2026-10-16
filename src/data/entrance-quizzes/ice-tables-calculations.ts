/**
 * Entrance Quiz — ICE Tables & Equilibrium Calculations — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-ice-tables-calculations-part1..7):
 *   1 Setting Up ICE Tables                                — coefficients in the C row, signs for a leftward shift
 *   2 Solving for K from Equilibrium Data                  — K from initial values plus one equilibrium value
 *   3 Solving for Equilibrium Concentrations Given K       — perfect-square and quadratic cases
 *   4 The 5% Approximation                                 — x = √(K·[init]), checking the 5% rule
 *   5 When the Approximation Fails — The Quadratic Formula — solving and choosing the physical root
 *   6 Problem-Solving Workshop: ICE Tables                 — nonzero initial products, choosing a method
 *   7 Synthesis & AP Review                                — K from total moles, approximation for a weak acid
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Setting Up ICE Tables
  {
    id: 'ice-ent-1a',
    question: 'For $2\\text{SO}_3(g) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{O}_2(g)$, a flask starts with 0.60 M $\\text{SO}_3$ only. If $[\\text{O}_2] = x$ at equilibrium, what is $[\\text{SO}_3]$ at equilibrium?',
    options: ['$0.60 - 2x$', '$0.60 - x$', '$0.60 - x/2$', '$0.60 + 2x$'],
    correctIndex: 0,
    explanation: 'Each mole of $\\text{O}_2$ formed uses 2 mol of $\\text{SO}_3$, so the change for $\\text{SO}_3$ is $-2x$ and its equilibrium value is $0.60 - 2x$.',
    partNumber: 1,
    partTitle: 'Setting Up ICE Tables',
  },
  {
    id: 'ice-ent-1b',
    question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, a flask starts with 0.50 M HI and no $\\text{H}_2$ or $\\text{I}_2$. Which change row (for $\\text{H}_2$, $\\text{I}_2$, HI) is correct?',
    options: ['$-x$, $-x$, $+2x$', '$+x$, $+x$, $-2x$', '$+x$, $+x$, $-x$', '$+2x$, $+2x$, $-x$'],
    correctIndex: 1,
    explanation: 'With only HI present, Q is infinite, so the reaction shifts left: HI decreases and $\\text{H}_2$ and $\\text{I}_2$ increase, with the coefficient 2 multiplying x for HI.',
    partNumber: 1,
    partTitle: 'Setting Up ICE Tables',
  },

  // Part 2: Solving for K from Equilibrium Data
  {
    id: 'ice-ent-2a',
    question: 'For $2\\text{NOCl}(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{Cl}_2(g)$, a flask starts with 0.50 M NOCl only. At equilibrium, $[\\text{Cl}_2] = 0.10$ M. What is $K_c$?',
    options: ['0.0063', '0.016', '0.044', '0.067'],
    correctIndex: 2,
    explanation: 'Here x = 0.10, so [NO] = 0.20 M and [NOCl] = 0.50 − 0.20 = 0.30 M; $K_c = (0.20)^2(0.10)/(0.30)^2 = 0.044$. Ignoring the coefficient 2 gives 0.0063, and using the initial 0.50 M NOCl gives 0.016.',
    partNumber: 2,
    partTitle: 'Solving for K from Equilibrium Data',
  },
  {
    id: 'ice-ent-2b',
    question: 'For $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g)$, a flask starts with [A] = 0.40 M, [B] = 0.30 M and no C. At equilibrium, [B] = 0.10 M. What is $K_c$?',
    options: ['5.0', '0.10', '3.3', '10'],
    correctIndex: 3,
    explanation: 'B fell by 0.20 M, so [A] = 0.20 M and [C] = 0.20 M, giving $K_c = 0.20/[(0.20)(0.10)] = 10$. Using the initial [A] gives 5.0, and inverting gives 0.10.',
    partNumber: 2,
    partTitle: 'Solving for K from Equilibrium Data',
  },

  // Part 3: Solving for Equilibrium Concentrations Given K
  {
    id: 'ice-ent-3a',
    question: 'For $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$, $K_c = 9.0$. A flask starts with 0.40 M CO and 0.40 M $\\text{H}_2\\text{O}$ and no products. What is $[\\text{CO}_2]$ at equilibrium?',
    options: ['0.30 M', '0.10 M', '0.36 M', '0.20 M'],
    correctIndex: 0,
    explanation: 'This is a perfect square: $\\sqrt{9.0} = 3.0 = x/(0.40 - x)$, so x = 0.30 M. The value 0.10 M is the CO left over, and 0.36 M comes from skipping the square root.',
    partNumber: 3,
    partTitle: 'Solving for Equilibrium Concentrations Given K',
  },
  {
    id: 'ice-ent-3b',
    question: 'For $\\text{A}(g) \\rightleftharpoons 2\\text{B}(g)$, $K_c = 0.80$. A flask starts with 0.50 M A and no B. What is [B] at equilibrium?',
    options: ['0.232 M', '0.463 M', '0.632 M', '0.268 M'],
    correctIndex: 1,
    explanation: '$0.80 = (2x)^2/(0.50 - x)$ gives $4x^2 + 0.80x - 0.40 = 0$, so x = 0.232 and [B] = 2x = 0.463 M. The value 0.232 M forgets to double x, and 0.632 M comes from wrongly dropping x from 0.50 − x.',
    partNumber: 3,
    partTitle: 'Solving for Equilibrium Concentrations Given K',
  },

  // Part 4: The 5% Approximation
  {
    id: 'ice-ent-4a',
    question: 'For $\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, $K_c = 3.2 \\times 10^{-7}$. A flask starts with 0.20 M A only. Using the small-x approximation, what is [B] at equilibrium?',
    options: [
      '$6.4 \\times 10^{-8}$ M',
      '$5.7 \\times 10^{-4}$ M',
      '$2.5 \\times 10^{-4}$ M',
      '$1.6 \\times 10^{-6}$ M',
    ],
    correctIndex: 2,
    explanation: '$x^2 = K_c(0.20) = 6.4 \\times 10^{-8}$, so $x = 2.5 \\times 10^{-4}$ M, only 0.13% of 0.20 M. Skipping the square root gives $6.4 \\times 10^{-8}$, and $\\sqrt{K_c}$ alone gives $5.7 \\times 10^{-4}$.',
    partNumber: 4,
    partTitle: 'The 5% Approximation',
  },
  {
    id: 'ice-ent-4b',
    question: 'For $\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$, $K_c = 0.010$ and $[\\text{A}]_0 = 0.25$ M. The small-x approximation gives x = 0.050 M. Is the approximation acceptable?',
    options: [
      'Yes, since x is smaller than 0.25 M',
      'Yes, since x is only 5.0% of 0.25 M',
      'Yes, since K is less than 1.0 here',
      'No, since x is 20% of 0.25 M',
    ],
    correctIndex: 3,
    explanation: '0.050/0.25 = 20%, well above 5%, so the quadratic must be solved. Being smaller than the starting concentration, or having K below 1, does not make x negligible.',
    partNumber: 4,
    partTitle: 'The 5% Approximation',
  },

  // Part 5: When the Approximation Fails — The Quadratic Formula
  {
    id: 'ice-ent-5a',
    question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, $K_c = 0.040$. A flask starts with 0.20 M $\\text{PCl}_5$ only. What is $[\\text{Cl}_2]$ at equilibrium?',
    options: ['0.072 M', '0.089 M', '0.128 M', '0.112 M'],
    correctIndex: 0,
    explanation: '$x^2 + 0.040x - 0.0080 = 0$ gives $x = (-0.040 + \\sqrt{0.0336})/2 = 0.072$ M. The small-x shortcut gives 0.089 M, which is 45% of 0.20 M, so it fails; 0.128 M is the $\\text{PCl}_5$ left over.',
    partNumber: 5,
    partTitle: 'When the Approximation Fails — The Quadratic Formula',
  },
  {
    id: 'ice-ent-5b',
    question: 'For $\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$, $K_c = 0.50$ and $[\\text{A}]_0 = 0.48$ M with no products. The ICE setup gives $x^2 + 0.50x - 0.24 = 0$, whose roots are 0.30 and −0.80. What is [A] at equilibrium?',
    options: ['0.30 M', '0.18 M', '1.28 M', '0.48 M'],
    correctIndex: 1,
    explanation: 'Only x = 0.30 gives non-negative product concentrations, so [A] = 0.48 − 0.30 = 0.18 M. Using the negative root gives an impossible 1.28 M of A with negative products, and 0.30 M is x itself.',
    partNumber: 5,
    partTitle: 'When the Approximation Fails — The Quadratic Formula',
  },

  // Part 6: Problem-Solving Workshop: ICE Tables
  {
    id: 'ice-ent-6a',
    question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, $K_c = 49$. A flask starts with $[\\text{H}_2] = [\\text{I}_2] = 0.30$ M and [HI] = 0.60 M. What is [HI] at equilibrium?',
    options: ['0.47 M', '0.79 M', '0.93 M', '0.60 M'],
    correctIndex: 2,
    explanation: 'Q = 0.36/0.09 = 4 < 49, so the reaction shifts right; $7 = (0.60 + 2x)/(0.30 - x)$ gives x = 0.167 and [HI] = 0.93 M. Ignoring the initial HI gives 0.47 M, and using +x instead of +2x gives 0.79 M.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop: ICE Tables',
  },
  {
    id: 'ice-ent-6b',
    question: 'For $\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$, $K_c = 4.0 \\times 10^{-3}$ and $[\\text{A}]_0 = 0.020$ M with no products. Which approach should be used to find x?',
    options: [
      'Small-x, because K is below $10^{-2}$',
      'Small-x, because K is less than 0.020',
      'Direct substitution of the starting values into K',
      'Quadratic, because small-x gives x near 45% of 0.020 M',
    ],
    correctIndex: 3,
    explanation: 'The small-x estimate is $\\sqrt{(4.0 \\times 10^{-3})(0.020)} = 8.9 \\times 10^{-3}$ M, about 45% of 0.020 M, so the approximation fails. K must be small compared with the starting concentration, not just small in absolute terms.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop: ICE Tables',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ice-ent-7a',
    question: 'For $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, 0.100 mol $\\text{N}_2\\text{O}_4$ is placed in a 1.00 L flask. At equilibrium the flask holds 0.130 mol of gas in total. What is $K_c$?',
    options: ['0.013', '0.051', '0.86', '0.17'],
    correctIndex: 1,
    explanation: 'Total moles are $0.100 - x + 2x = 0.130$, so x = 0.030, $[\\text{N}_2\\text{O}_4] = 0.070$ M and $[\\text{NO}_2] = 0.060$ M; $K_c = (0.060)^2/0.070 = 0.051$. Taking $[\\text{NO}_2] = x$ gives 0.013, and dropping the square gives 0.86.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ice-ent-7b',
    question: 'A weak acid HA has $K_a = 4.0 \\times 10^{-6}$, and $[\\text{HA}]_0 = 0.25$ M. Using the small-x approximation, which gives $[\\text{H}^+]$ and the 5% check correctly?',
    options: [
      '$1.0 \\times 10^{-3}$ M; 0.40%, so it is valid',
      '$1.0 \\times 10^{-6}$ M; 0.0004%, so it is valid',
      '$1.6 \\times 10^{-5}$ M; 0.0064%, so it is valid',
      '$1.0 \\times 10^{-3}$ M; 40%, so it is not valid',
    ],
    correctIndex: 0,
    explanation: '$x = \\sqrt{(4.0 \\times 10^{-6})(0.25)} = 1.0 \\times 10^{-3}$ M, which is 0.40% of 0.25 M, so the approximation holds. Skipping the square root gives $1.0 \\times 10^{-6}$, dividing $K_a$ by 0.25 gives $1.6 \\times 10^{-5}$, and 40% is a misplaced decimal.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Setting Up ICE Tables' },
    { partNumber: 2, partTitle: 'Solving for K from Equilibrium Data' },
    { partNumber: 3, partTitle: 'Solving for Equilibrium Concentrations Given K' },
    { partNumber: 4, partTitle: 'The 5% Approximation' },
    { partNumber: 5, partTitle: 'When the Approximation Fails — The Quadratic Formula' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop: ICE Tables' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
