/**
 * Entrance Quiz — Introduction to Equilibrium — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-intro-equilibrium-part1..7). Items follow what each
 * part file actually teaches:
 *   1 Dynamic Equilibrium               — both directions continue, closed-system requirement
 *   2 Equilibrium Expressions: Kc and Kp        — calculating Kp and Kc from equilibrium data
 *   3 Heterogeneous Equilibrium   — heterogeneous expressions (solids and liquids left out)
 *   4 Manipulating K                    — reversing, scaling and adding reactions
 *   5 Magnitude of K and Extent of Reaction          — magnitude of K and its temperature dependence
 *   6 Problem-Solving Workshop          — solving K expressions for an unknown, combining K values
 *   7 Synthesis & AP Review             — K is fixed at fixed T, finding an equilibrium concentration
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Dynamic Equilibrium
  {
    id: 'ieq-ent-1a',
    question: 'In a sealed flask of $\\text{N}_2\\text{O}_4$ and $\\text{NO}_2$ at equilibrium, some $\\text{N}_2\\text{O}_4$ molecules are swapped for identical molecules made with nitrogen-15, leaving all concentrations the same. Where is the nitrogen-15 found some time later?',
    options: [
      'In both $\\text{NO}_2$ and $\\text{N}_2\\text{O}_4$ molecules',
      'Only in the $\\text{N}_2\\text{O}_4$ molecules it began in',
      'Only in $\\text{NO}_2$, since splitting is all that occurs',
      'Nowhere, because labeled molecules cannot react',
    ],
    correctIndex: 0,
    explanation: 'At dynamic equilibrium $\\text{N}_2\\text{O}_4$ keeps splitting and $\\text{NO}_2$ keeps recombining at equal rates, so the label spreads into both species even though the concentrations stay constant.',
    partNumber: 1,
    partTitle: 'Dynamic Equilibrium',
  },
  {
    id: 'ieq-ent-1b',
    question: 'Which of these systems cannot reach chemical equilibrium as described?',
    options: [
      '$\\text{N}_2\\text{O}_4$ gas sealed in a glass bulb at 50 °C',
      '$\\text{CaCO}_3$ heated strongly in an open crucible',
      'Acetic acid dissolved in water inside a stoppered flask',
      'Iodine crystals in a sealed jar with their own vapor',
    ],
    correctIndex: 1,
    explanation: 'In an open crucible the $\\text{CO}_2$ escapes, so the reverse reaction cannot keep pace and the solid simply decomposes. Equilibrium requires a closed system, as in each of the sealed or stoppered examples.',
    partNumber: 1,
    partTitle: 'Dynamic Equilibrium',
  },

  // Part 2: Equilibrium Expressions: Kc and Kp
  {
    id: 'ieq-ent-2a',
    question: 'For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the equilibrium partial pressures are $P_{\\text{N}_2} = 0.80$ atm, $P_{\\text{H}_2} = 0.50$ atm and $P_{\\text{NH}_3} = 0.20$ atm. What is $K_p$?',
    options: ['0.50', '2.5', '0.40', '0.10'],
    correctIndex: 2,
    explanation: '$K_p = (0.20)^2/[(0.80)(0.50)^3] = 0.040/0.10 = 0.40$. Ignoring the exponents gives 0.50, inverting gives 2.5, and squaring only $P_{\\text{NH}_3}$ gives 0.10.',
    partNumber: 2,
    partTitle: 'Equilibrium Expressions: Kc and Kp',
  },
  {
    id: 'ieq-ent-2b',
    question: 'For $2\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g)$, the equilibrium concentrations are [HI] = 0.50 M and $[\\text{H}_2] = [\\text{I}_2] = 0.10$ M. What is $K_c$?',
    options: ['0.020', '25', '0.80', '0.040'],
    correctIndex: 3,
    explanation: '$K_c = [\\text{H}_2][\\text{I}_2]/[\\text{HI}]^2 = (0.10)(0.10)/(0.50)^2 = 0.040$. Forgetting to square [HI] gives 0.020, and inverting the expression gives 25.',
    partNumber: 2,
    partTitle: 'Equilibrium Expressions: Kc and Kp',
  },

  // Part 3: Heterogeneous Equilibrium
  {
    id: 'ieq-ent-3a',
    question: 'Solid $\\text{NH}_4\\text{HS}$ is placed in an evacuated flask at 25 °C, where $\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$ has $K_p = 0.110$. Some solid remains at equilibrium. What is $P_{\\text{NH}_3}$?',
    options: ['0.332 atm', '0.110 atm', '0.055 atm', '0.166 atm'],
    correctIndex: 0,
    explanation: 'The solid is left out, so $K_p = P_{\\text{NH}_3}P_{\\text{H}_2\\text{S}}$; the two gases form in a 1:1 ratio, so $P^2 = 0.110$ and $P = 0.332$ atm. Setting $P_{\\text{NH}_3}$ equal to $K_p$ ignores the second gas.',
    partNumber: 3,
    partTitle: 'Heterogeneous Equilibrium',
  },
  {
    id: 'ieq-ent-3b',
    question: 'What is the equilibrium expression for $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$?',
    options: [
      '$K = \\dfrac{[\\text{Zn}^{2+}][\\text{Cu}]}{[\\text{Zn}][\\text{Cu}^{2+}]}$',
      '$K = \\dfrac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$',
      '$K = \\dfrac{[\\text{Cu}^{2+}]}{[\\text{Zn}^{2+}]}$',
      '$K = [\\text{Zn}^{2+}][\\text{Cu}^{2+}]$',
    ],
    correctIndex: 1,
    explanation: 'The two metals are pure solids and drop out, leaving the aqueous product ion over the aqueous reactant ion. The flipped fraction belongs to the reverse reaction.',
    partNumber: 3,
    partTitle: 'Heterogeneous Equilibrium',
  },

  // Part 4: Manipulating K
  {
    id: 'ieq-ent-4a',
    question: 'Given A ⇌ 2B, $K_1 = 0.20$, and C ⇌ B, $K_2 = 5.0$. What is K for A ⇌ 2C?',
    options: ['5.0', '0.040', '0.0080', '1.0'],
    correctIndex: 2,
    explanation: 'Reverse the second reaction (B ⇌ C, K = 0.20) and double it (2B ⇌ 2C, K = 0.040), then add it to the first: $K = 0.20 \\times 0.040 = 0.0080$. Skipping the reversal gives 5.0, and skipping the doubling gives 0.040.',
    partNumber: 4,
    partTitle: 'Manipulating K',
  },
  {
    id: 'ieq-ent-4b',
    question: 'For $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, $K = 6.8$ at a certain temperature. What is K for $\\tfrac{1}{2}\\text{N}_2\\text{O}_4(g) \\rightleftharpoons \\text{NO}_2(g)$ at that temperature?',
    options: ['2.6', '0.15', '0.074', '0.38'],
    correctIndex: 3,
    explanation: 'Reversing gives 1/6.8 = 0.147, and halving the coefficients takes the square root: $\\sqrt{0.147} = 0.38$. Skipping the reversal gives 2.6, and skipping the square root gives 0.15.',
    partNumber: 4,
    partTitle: 'Manipulating K',
  },

  // Part 5: Magnitude of K and Extent of Reaction
  {
    id: 'ieq-ent-5a',
    question: 'An exothermic reaction has K = 50 at 300 K. Which value of K is most plausible for the same reaction at 400 K?',
    options: ['A value below 50', 'A value greater than 50', 'Still exactly 50, since K is a constant', 'A value below zero'],
    correctIndex: 0,
    explanation: 'For an exothermic reaction, heat acts like a product, so raising the temperature shifts the equilibrium left and K decreases. K is constant only at a fixed temperature, and it is never negative.',
    partNumber: 5,
    partTitle: 'Magnitude of K and Extent of Reaction',
  },
  {
    id: 'ieq-ent-5b',
    question: 'For $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g)$, $K \\approx 10^{-30}$ at 25 °C. Dry air is sealed in a flask at 25 °C and left to reach equilibrium. What does the flask contain?',
    options: [
      'Roughly equal amounts of $\\text{N}_2$, $\\text{O}_2$ and NO',
      'Almost entirely $\\text{N}_2$ and $\\text{O}_2$',
      'Mostly NO, since the forward reaction is allowed',
      'Only $\\text{N}_2$ and $\\text{O}_2$, with no NO formed',
    ],
    correctIndex: 1,
    explanation: 'A very small K means the reactants dominate at equilibrium, so the mixture is almost all $\\text{N}_2$ and $\\text{O}_2$. A tiny but nonzero amount of NO is present, because K is small, not zero.',
    partNumber: 5,
    partTitle: 'Magnitude of K and Extent of Reaction',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ieq-ent-6a',
    question: 'For $2\\text{A}(g) \\rightleftharpoons \\text{B}(g)$, $K_p = 25$. At equilibrium, $P_{\\text{B}} = 0.36$ atm. What is $P_{\\text{A}}$?',
    options: ['0.014 atm', '9.0 atm', '0.12 atm', '0.60 atm'],
    correctIndex: 2,
    explanation: '$K_p = P_{\\text{B}}/(P_{\\text{A}})^2$, so $(P_{\\text{A}})^2 = 0.36/25 = 0.0144$ and $P_{\\text{A}} = 0.12$ atm. Stopping before the square root gives 0.014 atm, and multiplying by $K_p$ gives 9.0 atm.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ieq-ent-6b',
    question: 'For $\\text{SO}_2(g) + \\tfrac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{SO}_3(g)$, K = 20. What is K for $2\\text{SO}_3(g) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{O}_2(g)$?',
    options: ['400', '0.050', '0.025', '0.0025'],
    correctIndex: 3,
    explanation: 'The target is the reverse of the given reaction, doubled: $K = (1/20)^2 = 0.0025$. Forgetting to reverse gives 400, and forgetting to square gives 0.050.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ieq-ent-7a',
    question: 'For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, $K_p = 0.24$ at a certain temperature. The flask volume is doubled at that temperature, and some $\\text{CaCO}_3$ remains after equilibrium is restored. What is $P_{\\text{CO}_2}$ now?',
    options: [
      '0.12 atm, half of its earlier value',
      '0.24 atm, the same as before',
      '0.48 atm, twice its earlier value',
      'Below 0.24 atm, since K has decreased',
    ],
    correctIndex: 1,
    explanation: 'Because the solids drop out, $K_p = P_{\\text{CO}_2}$, and K does not change at constant temperature. More $\\text{CaCO}_3$ decomposes until the pressure returns to 0.24 atm.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ieq-ent-7b',
    question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, $K_c = 64$ at 450 °C. At equilibrium, $[\\text{H}_2] = [\\text{I}_2] = 0.020$ M. What is [HI]?',
    options: ['0.16 M', '0.026 M', '1.3 M', '0.32 M'],
    correctIndex: 0,
    explanation: '$[\\text{HI}]^2 = K_c[\\text{H}_2][\\text{I}_2] = 64(0.020)(0.020) = 0.0256$, so [HI] = 0.16 M. Stopping before the square root gives 0.026 M, and doubling because of the coefficient gives 0.32 M.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Dynamic Equilibrium' },
    { partNumber: 2, partTitle: 'Equilibrium Expressions: Kc and Kp' },
    { partNumber: 3, partTitle: 'Heterogeneous Equilibrium' },
    { partNumber: 4, partTitle: 'Manipulating K' },
    { partNumber: 5, partTitle: 'Magnitude of K and Extent of Reaction' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
