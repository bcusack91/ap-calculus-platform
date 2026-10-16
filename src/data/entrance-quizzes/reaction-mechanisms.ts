/**
 * Entrance Quiz — Reaction Mechanisms — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-reaction-mechanisms-part1..7):
 *   1 Elementary Steps                    — molecularity and elementary rate laws, overall vs elementary
 *   2 Intermediates and Catalysts         — classifying species, summing steps, peaks and valleys
 *   3 Rate-Determining Step               — rate law from a slow first step, simple pre-equilibrium
 *   4 Deriving Rate Laws from Mechanisms  — fractional and negative orders from pre-equilibria
 *   5 Validating Mechanisms               — choosing consistent mechanisms, consistent is not proven
 *   6 Problem-Solving Workshop            — matching a mechanism to data, building an energy profile
 *   7 Synthesis & AP Review               — catalyst order in the rate law, full mechanism analysis
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Elementary Steps
  {
    id: 'rm-ent-1a',
    question: 'If $2\\text{NO}(g) + \\text{Cl}_2(g) \\to 2\\text{NOCl}(g)$ took place in a single elementary step, what would its molecularity and rate law be?',
    options: [
      'Bimolecular; rate $= k[\\text{NO}][\\text{Cl}_2]$',
      'Termolecular; rate $= k[\\text{NO}][\\text{Cl}_2]$',
      'Termolecular; rate $= k[\\text{NO}]^2[\\text{Cl}_2]$',
      'Bimolecular; rate $= k[\\text{NO}]^2[\\text{Cl}_2]$',
    ],
    correctIndex: 2,
    explanation: 'Three particles (two NO and one $\\text{Cl}_2$) would collide, so the step is termolecular, and an elementary rate law takes its exponents from the coefficients: rate $= k[\\text{NO}]^2[\\text{Cl}_2]$.',
    partNumber: 1,
    partTitle: 'Elementary Steps',
  },
  {
    id: 'rm-ent-1b',
    question: 'The reaction $2\\text{NO}_2 + \\text{O}_3 \\to \\text{N}_2\\text{O}_5 + \\text{O}_2$ has the experimental rate law rate $= k[\\text{NO}_2][\\text{O}_3]$. What can be concluded?',
    options: [
      'It cannot occur as a single elementary step',
      'It must occur as a single bimolecular collision',
      'Its orders show that it is a termolecular step',
      'Its rate law shows that $\\text{NO}_2$ is a catalyst',
    ],
    correctIndex: 0,
    explanation: 'A single elementary step with these coefficients would give rate $= k[\\text{NO}_2]^2[\\text{O}_3]$. The observed first order in $\\text{NO}_2$ means the reaction must go through more than one step.',
    partNumber: 1,
    partTitle: 'Elementary Steps',
  },

  // Part 2: Intermediates and Catalysts
  {
    id: 'rm-ent-2a',
    question: 'Mechanism: Step 1: A + Q → AQ; Step 2: AQ + B → C + Q. Which classification of species is correct?',
    options: [
      'AQ is the catalyst; Q is the intermediate',
      'Q is the catalyst; AQ is the intermediate',
      'Q is the catalyst; C is the intermediate',
      'B is the catalyst; AQ is the intermediate',
    ],
    correctIndex: 1,
    explanation: 'Q is consumed in step 1 and regenerated in step 2, so it is a catalyst; AQ is formed in step 1 and used up in step 2, so it is an intermediate. The overall reaction is A + B → C.',
    partNumber: 2,
    partTitle: 'Intermediates and Catalysts',
  },
  {
    id: 'rm-ent-2b',
    question: 'Mechanism: Step 1: $X_2 \\rightleftharpoons 2X$; Step 2: $X + Y_2 \\to XY + Y$; Step 3: $Y + X \\to XY$. What is the overall reaction, and how many valleys (intermediates) appear on its energy profile?',
    options: [
      '$X_2 + Y_2 \\to 2XY$; three valleys',
      '$X + Y_2 \\to XY + Y$; one valley',
      '$X_2 + Y_2 \\to 2XY$; one valley',
      '$X_2 + Y_2 \\to 2XY$; two valleys',
    ],
    correctIndex: 3,
    explanation: 'Adding the steps and canceling X (made in step 1, used in steps 2 and 3) and Y (made in step 2, used in step 3) gives $X_2 + Y_2 \\to 2XY$. Three steps give three peaks and two valleys, one for each intermediate.',
    partNumber: 2,
    partTitle: 'Intermediates and Catalysts',
  },

  // Part 3: Rate-Determining Step
  {
    id: 'rm-ent-3a',
    question: 'Mechanism: Step 1: $2A \\to A_2$ (slow); Step 2: $A_2 + B \\to C$ (fast). What rate law does this mechanism predict?',
    options: ['rate $= k[A]^2$', 'rate $= k[A]^2[B]$', 'rate $= k[A_2][B]$', 'rate $= k[A][B]$'],
    correctIndex: 0,
    explanation: 'The slow first step sets the rate, and as an elementary step its rate law is $k[A]^2$. B reacts only in the fast step after it, so B does not appear.',
    partNumber: 3,
    partTitle: 'Rate-Determining Step',
  },
  {
    id: 'rm-ent-3b',
    question: 'Mechanism: Step 1: $A + B \\rightleftharpoons AB$ (fast, reversible); Step 2: $AB + B \\to C$ (slow). What rate law does this mechanism predict?',
    options: ['rate $= k[AB][B]$', 'rate $= k[A][B]$', 'rate $= k[A][B]^2$', 'rate $= k[A]^2[B]$'],
    correctIndex: 2,
    explanation: 'The slow step gives rate $= k_2[AB][B]$, but AB is an intermediate. From the fast equilibrium, $[AB] = K[A][B]$, so rate $= k_2K[A][B]^2$.',
    partNumber: 3,
    partTitle: 'Rate-Determining Step',
  },

  // Part 4: Deriving Rate Laws from Mechanisms
  {
    id: 'rm-ent-4a',
    question: 'Proposed mechanism for $\\text{H}_2 + \\text{Br}_2 \\to 2\\text{HBr}$: Step 1: $\\text{Br}_2 \\rightleftharpoons 2\\text{Br}$ (fast); Step 2: $\\text{Br} + \\text{H}_2 \\to \\text{HBr} + \\text{H}$ (slow); Step 3: $\\text{H} + \\text{Br}_2 \\to \\text{HBr} + \\text{Br}$ (fast). What rate law does it predict?',
    options: [
      'rate $= k[\\text{H}_2][\\text{Br}_2]$',
      'rate $= k[\\text{H}_2][\\text{Br}_2]^{1/2}$',
      'rate $= k[\\text{H}_2][\\text{Br}]$',
      'rate $= k[\\text{H}_2][\\text{Br}_2]^2$',
    ],
    correctIndex: 1,
    explanation: 'The slow step gives rate $= k_2[\\text{Br}][\\text{H}_2]$. From step 1, $K = [\\text{Br}]^2/[\\text{Br}_2]$, so $[\\text{Br}] = (K[\\text{Br}_2])^{1/2}$ and rate $= k[\\text{H}_2][\\text{Br}_2]^{1/2}$.',
    partNumber: 4,
    partTitle: 'Deriving Rate Laws from Mechanisms',
  },
  {
    id: 'rm-ent-4b',
    question: 'Mechanism: Step 1: $A \\rightleftharpoons B + C$ (fast, reversible); Step 2: $B + D \\to E$ (slow). What rate law does it predict?',
    options: ['rate $= k[A][D]$', 'rate $= k[B][D]$', 'rate $= k[A][C][D]$', 'rate $= k[A][D]/[C]$'],
    correctIndex: 3,
    explanation: 'The slow step gives rate $= k_2[B][D]$. From step 1, $K = [B][C]/[A]$, so $[B] = K[A]/[C]$ and rate $= k[A][D]/[C]$: adding C pushes step 1 back and slows the reaction.',
    partNumber: 4,
    partTitle: 'Deriving Rate Laws from Mechanisms',
  },

  // Part 5: Validating Mechanisms
  {
    id: 'rm-ent-5a',
    question: 'For $2A + B \\to A_2B$, the experimental rate law is rate $= k[A]^2$. Mechanism I: $A + B \\to AB$ (slow); $AB + A \\to A_2B$ (fast). Mechanism II: $A + A \\to A_2$ (slow); $A_2 + B \\to A_2B$ (fast). Mechanism III: $A + A \\rightleftharpoons A_2$ (fast); $A_2 + B \\to A_2B$ (slow). Which mechanism(s) are consistent with the data?',
    options: ['II only', 'I only', 'III only', 'II and III only'],
    correctIndex: 0,
    explanation: 'All three sum to the overall equation. Mechanism II predicts $k[A]^2$, which matches, while I predicts $k[A][B]$ and III predicts $k[A]^2[B]$.',
    partNumber: 5,
    partTitle: 'Validating Mechanisms',
  },
  {
    id: 'rm-ent-5b',
    question: 'Two proposed mechanisms both sum to the overall equation and both predict the observed rate law. What evidence could favor one over the other?',
    options: [
      'Finding a more precise value of ΔH for the overall reaction',
      'Detecting an intermediate that only one of them forms',
      'Showing that one of the mechanisms has fewer steps',
      'Checking the units of the rate constant k again',
    ],
    correctIndex: 1,
    explanation: 'Rate-law data alone cannot separate mechanisms that predict the same rate law, so other evidence, such as detecting a proposed intermediate, is needed. Fewer steps does not make a mechanism correct, and ΔH and the units of k are the same for both.',
    partNumber: 5,
    partTitle: 'Validating Mechanisms',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'rm-ent-6a',
    question: 'For $2\\text{NO}_2\\text{Cl} \\to 2\\text{NO}_2 + \\text{Cl}_2$, the observed rate law is rate $= k[\\text{NO}_2\\text{Cl}]$. Proposed: Step 1: $\\text{NO}_2\\text{Cl} \\to \\text{NO}_2 + \\text{Cl}$; Step 2: $\\text{NO}_2\\text{Cl} + \\text{Cl} \\to \\text{NO}_2 + \\text{Cl}_2$. For the mechanism to fit, which must be true?',
    options: [
      'Step 2 is slow, and Cl is an intermediate',
      'Step 1 is slow, and Cl is a catalyst',
      'Step 1 is slow, and Cl is an intermediate',
      'Step 2 is slow, and Cl is a catalyst',
    ],
    correctIndex: 2,
    explanation: 'A slow, unimolecular step 1 gives rate $= k[\\text{NO}_2\\text{Cl}]$, matching the data. Cl is formed in step 1 and consumed in step 2, so it is an intermediate, not a catalyst.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'rm-ent-6b',
    question: 'A two-step mechanism starts with reactants at 0 kJ. Step 1 has $E_a = 95$ kJ and $\\Delta H_1 = +20$ kJ; step 2 has $E_a = 30$ kJ and $\\Delta H_2 = -70$ kJ. What is the energy of the second transition state, and which step is rate-determining?',
    options: ['50 kJ; step 1', '30 kJ; step 2', '50 kJ; step 2', '125 kJ; step 1'],
    correctIndex: 0,
    explanation: 'The intermediate sits at 0 + 20 = 20 kJ, so the second transition state is at 20 + 30 = 50 kJ. Step 1 has the larger barrier (95 kJ versus 30 kJ), so it is rate-determining.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'rm-ent-7a',
    question: 'Mechanism: Step 1: $A + C \\rightleftharpoons AC$ (fast); Step 2: $AC + B \\to P + C$ (slow), where C is a catalyst. If [C] is doubled while [A] and [B] are kept constant, what happens to the rate?',
    options: [
      'No change',
      'Fourfold increase',
      'Twofold decrease',
      'Twofold increase',
    ],
    correctIndex: 3,
    explanation: 'The slow step gives rate $= k_2[AC][B]$, and $[AC] = K[A][C]$, so rate $= k[A][B][C]$. A catalyst can appear in the rate law, and doubling [C] doubles the rate rather than leaving it unchanged.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'rm-ent-7b',
    question: 'Mechanism: Step 1: $\\text{O}_3 + \\text{Cl} \\to \\text{ClO} + \\text{O}_2$ (slow); Step 2: $\\text{ClO} + \\text{O} \\to \\text{Cl} + \\text{O}_2$ (fast). Which statement is correct?',
    options: [
      'Rate $= k[\\text{O}_3][\\text{O}]$, and ClO is the catalyst',
      'Rate $= k[\\text{O}_3][\\text{Cl}]$, and Cl is a catalyst',
      'Rate $= k[\\text{O}_3][\\text{Cl}]$, and ClO is a catalyst',
      'Rate $= k[\\text{ClO}][\\text{O}]$, and Cl is an intermediate',
    ],
    correctIndex: 1,
    explanation: 'The slow first step gives rate $= k[\\text{O}_3][\\text{Cl}]$. Cl is consumed in step 1 and regenerated in step 2, so it is a catalyst, while ClO is the intermediate.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Elementary Steps' },
    { partNumber: 2, partTitle: 'Intermediates and Catalysts' },
    { partNumber: 3, partTitle: 'Rate-Determining Step' },
    { partNumber: 4, partTitle: 'Deriving Rate Laws from Mechanisms' },
    { partNumber: 5, partTitle: 'Validating Mechanisms' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
