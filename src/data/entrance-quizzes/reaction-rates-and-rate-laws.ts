/**
 * Entrance Quiz — Reaction Rates & Rate Laws — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-reaction-rates-and-rate-laws-part1..7):
 *   1 Measuring Reaction Rates          — stoichiometric rate relations, instantaneous vs average rate
 *   2 Factors Affecting Reaction Rate   — collision frequency vs fraction of collisions above Ea
 *   3 Rate Laws                         — effect of concentration changes, rate vs rate constant
 *   4 Method of Initial Rates           — orders from data tables, non-simple ratios
 *   5 Units of the Rate Constant k      — order from units of k and units from order
 *   6 Problem-Solving Workshop          — k from data, predicting a new rate
 *   7 Synthesis & AP Review             — what changes k, combining rate law with stoichiometry
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Measuring Reaction Rates
  {
    id: 'rrl-ent-1a',
    question: 'For $4\\text{NH}_3 + 5\\text{O}_2 \\to 4\\text{NO} + 6\\text{H}_2\\text{O}$, NO is forming at 0.024 M/s. At what rate is $\\text{O}_2$ being consumed?',
    options: ['0.030 M/s', '0.019 M/s', '0.024 M/s', '0.036 M/s'],
    correctIndex: 0,
    explanation: 'The reaction rate is (1/4)(0.024) = 0.0060 M/s, so $\\text{O}_2$ is consumed at 5 × 0.0060 = 0.030 M/s. Inverting the 5:4 ratio gives 0.019 M/s, and using the water coefficient gives 0.036 M/s.',
    partNumber: 1,
    partTitle: 'Measuring Reaction Rates',
  },
  {
    id: 'rrl-ent-1b',
    question: 'A plot of [A] versus time for a reaction that consumes A is a downward curve. How is the instantaneous rate of the reaction at t = 40 s found from the plot?',
    options: [
      'The negative slope of the secant from 0 s to 40 s',
      'The negative slope of the tangent line drawn at 40 s',
      'The negative of [A] at 40 s divided by 40 seconds',
      'The area under the curve from 0 s up to 40 s',
    ],
    correctIndex: 1,
    explanation: 'The instantaneous rate is the negative of the slope of the tangent line at that moment. The secant from 0 to 40 s gives only the average rate over that interval.',
    partNumber: 1,
    partTitle: 'Measuring Reaction Rates',
  },

  // Part 2: Factors Affecting Reaction Rate
  {
    id: 'rrl-ent-2a',
    question: 'Warming a gas mixture from 300 K to 310 K raises the number of molecular encounters per second by under 2%, yet the rate roughly doubles. What mainly accounts for the big jump?',
    options: [
      'The activation energy of the reaction is lowered by heating',
      'The concentrations of both gases rise as they are heated',
      'A much larger fraction of collisions has energy at or above Ea',
      'The equilibrium constant grows at the higher temperature',
    ],
    correctIndex: 2,
    explanation: 'Heating shifts the energy distribution so a much larger fraction of collisions meets or exceeds the activation energy. Ea itself is unchanged by temperature, and heating at fixed volume does not change concentrations.',
    partNumber: 2,
    partTitle: 'Factors Affecting Reaction Rate',
  },
  {
    id: 'rrl-ent-2b',
    question: 'For $\\text{Zn}(s) + 2\\text{HCl}(aq) \\to \\text{ZnCl}_2(aq) + \\text{H}_2(g)$, which change speeds up the reaction only by raising the collision frequency, leaving the fraction of sufficiently energetic collisions unchanged?',
    options: [
      'Grinding the zinc into a fine powder',
      'Heating the acid to a higher temperature',
      'Adding a catalyst that lowers the barrier',
      'Using a larger volume of the same acid',
    ],
    correctIndex: 0,
    explanation: 'Powdering the zinc exposes more surface, so more collisions occur per second at the same energy distribution. Heating and catalysis change the fraction of collisions that can react, and more of the same acid does not change its concentration.',
    partNumber: 2,
    partTitle: 'Factors Affecting Reaction Rate',
  },

  // Part 3: Rate Laws
  {
    id: 'rrl-ent-3a',
    question: 'A reaction has Rate $= k[A][B]^2$. If [A] is reduced to one-fourth of its value and [B] is doubled at the same time, what happens to the rate?',
    options: ['It is unchanged', 'It doubles', 'It halves', 'It quadruples'],
    correctIndex: 0,
    explanation: 'The factor is (1/4)(2²) = 1, so the rate does not change. Forgetting to square the [B] factor gives (1/4)(2) = 1/2, and ignoring the change in [A] gives 4.',
    partNumber: 3,
    partTitle: 'Rate Laws',
  },
  {
    id: 'rrl-ent-3b',
    question: 'A first-order reaction runs at constant temperature. By the time [A] has fallen to half its starting value, how do the rate and the rate constant compare with their starting values?',
    options: [
      'The rate is halved and k is halved',
      'The rate is halved and k stays the same',
      'The rate is unchanged and k is halved',
      'Both the rate and k are unchanged',
    ],
    correctIndex: 1,
    explanation: 'Rate $= k[A]$, so halving [A] halves the rate. The rate constant depends only on temperature, so it stays the same throughout the run.',
    partNumber: 3,
    partTitle: 'Rate Laws',
  },

  // Part 4: Method of Initial Rates
  {
    id: 'rrl-ent-4a',
    question: 'Initial-rate data: Exp 1: [A] = 0.15 M, [B] = 0.10 M, rate = $2.0 \\times 10^{-4}$ M/s. Exp 2: [A] = 0.30 M, [B] = 0.10 M, rate = $8.0 \\times 10^{-4}$ M/s. Exp 3: [A] = 0.30 M, [B] = 0.30 M, rate = $2.4 \\times 10^{-3}$ M/s. What is the rate law?',
    options: ['Rate $= k[A][B]$', 'Rate $= k[A]^2[B]$', 'Rate $= k[A][B]^2$', 'Rate $= k[A]^2[B]^2$'],
    correctIndex: 1,
    explanation: 'Exps 1 and 2 (same [B]): doubling [A] multiplies the rate by 4, so the order in A is 2. Exps 2 and 3 (same [A]): tripling [B] triples the rate, so the order in B is 1.',
    partNumber: 4,
    partTitle: 'Method of Initial Rates',
  },
  {
    id: 'rrl-ent-4b',
    question: 'With [B] held constant, raising [A] from 0.040 M to 0.10 M raises the initial rate from $1.6 \\times 10^{-3}$ M/s to $1.0 \\times 10^{-2}$ M/s. What is the order with respect to A?',
    options: ['0', '1', '3', '2'],
    correctIndex: 3,
    explanation: 'The concentration ratio is 0.10/0.040 = 2.5 and the rate ratio is 6.25. Since $2.5^2 = 6.25$, the reaction is second order in A.',
    partNumber: 4,
    partTitle: 'Method of Initial Rates',
  },

  // Part 5: Units of the Rate Constant k
  {
    id: 'rrl-ent-5a',
    question: 'A reaction with a single reactant, A, has $k = 3.6 \\times 10^{-2}\\ \\text{M}^{-1}\\text{s}^{-1}$. By what factor does the initial rate change when [A] is doubled?',
    options: ['1', '2', '4', '8'],
    correctIndex: 2,
    explanation: 'Units of $\\text{M}^{-1}\\text{s}^{-1}$ mean the reaction is second order overall, so Rate $= k[A]^2$ and doubling [A] multiplies the rate by $2^2 = 4$.',
    partNumber: 5,
    partTitle: 'Units of the Rate Constant k',
  },
  {
    id: 'rrl-ent-5b',
    question: 'The rate law for a reaction is Rate $= k[\\text{P}][\\text{Q}]$, with rate measured in M/s. What are the units of k?',
    options: ['$\\text{s}^{-1}$', '$\\text{M}\\,\\text{s}^{-1}$', '$\\text{M}^{-2}\\text{s}^{-1}$', '$\\text{M}^{-1}\\text{s}^{-1}$'],
    correctIndex: 3,
    explanation: 'The overall order is 1 + 1 = 2, so the units of k are $\\text{M}^{1-2}\\text{s}^{-1} = \\text{M}^{-1}\\text{s}^{-1}$. Units of $\\text{s}^{-1}$ would mean first order overall.',
    partNumber: 5,
    partTitle: 'Units of the Rate Constant k',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'rrl-ent-6a',
    question: 'Exp 1: [A] = 0.10 M, [B] = 0.20 M, rate = $3.0 \\times 10^{-3}$ M/s. Exp 2: [A] = 0.20 M, [B] = 0.20 M, rate = $1.2 \\times 10^{-2}$ M/s. Exp 3: [A] = 0.10 M, [B] = 0.40 M, rate = $6.0 \\times 10^{-3}$ M/s. What is the rate constant?',
    options: [
      '$0.30\\ \\text{M}^{-1}\\text{s}^{-1}$',
      '$0.75\\ \\text{M}^{-2}\\text{s}^{-1}$',
      '$0.15\\ \\text{M}^{-1}\\text{s}^{-1}$',
      '$1.5\\ \\text{M}^{-2}\\text{s}^{-1}$',
    ],
    correctIndex: 3,
    explanation: 'The data give Rate $= k[A]^2[B]$, so $k = (3.0 \\times 10^{-3})/[(0.10)^2(0.20)] = 1.5\\ \\text{M}^{-2}\\text{s}^{-1}$. Swapping the orders gives 0.75, and dropping the square on [A] gives 0.15.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'rrl-ent-6b',
    question: 'A reaction has Rate $= k[A][B]^2$ and runs at 0.024 M/s when [A] = 0.20 M and [B] = 0.10 M. What is the rate when [A] = 0.10 M and [B] = 0.30 M?',
    options: ['0.108 M/s', '0.036 M/s', '0.072 M/s', '0.216 M/s'],
    correctIndex: 0,
    explanation: 'Halving [A] gives a factor of 1/2 and tripling [B] gives $3^2 = 9$, so the rate becomes 0.024 × 4.5 = 0.108 M/s. Forgetting to square the [B] factor gives 0.036 M/s, and ignoring the change in [A] gives 0.216 M/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'rrl-ent-7a',
    question: 'A reaction obeys Rate $= k[A]^2$ with $k = 0.80\\ \\text{M}^{-1}\\text{s}^{-1}$ at 25 °C. Which change would make the value of k larger?',
    options: [
      'Raising [A] from 0.10 M to 0.20 M',
      'Warming the mixture to 45 °C',
      'Moving the mixture to a 2.0 L flask',
      'Letting it run for 10 more minutes',
    ],
    correctIndex: 1,
    explanation: 'The rate constant depends on temperature, not on concentration, volume or elapsed time. Adding more A raises the rate but leaves k unchanged.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'rrl-ent-7b',
    question: 'For $2A + B \\to C$, the rate law is $-\\Delta[B]/\\Delta t = k[A][B]$. At [A] = 0.20 M and [B] = 0.10 M, B is consumed at $4.0 \\times 10^{-3}$ M/s. At what rate is A consumed when [A] = 0.40 M and [B] = 0.10 M?',
    options: [
      '$4.0 \\times 10^{-3}$ M/s',
      '$8.0 \\times 10^{-3}$ M/s',
      '$1.6 \\times 10^{-2}$ M/s',
      '$3.2 \\times 10^{-2}$ M/s',
    ],
    correctIndex: 2,
    explanation: 'Doubling [A] doubles the rate of consumption of B to $8.0 \\times 10^{-3}$ M/s, and A is used twice as fast as B, giving $1.6 \\times 10^{-2}$ M/s. Stopping at the rate for B gives $8.0 \\times 10^{-3}$ M/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Measuring Reaction Rates' },
    { partNumber: 2, partTitle: 'Factors Affecting Reaction Rate' },
    { partNumber: 3, partTitle: 'Rate Laws' },
    { partNumber: 4, partTitle: 'Method of Initial Rates' },
    { partNumber: 5, partTitle: 'Units of the Rate Constant k' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
