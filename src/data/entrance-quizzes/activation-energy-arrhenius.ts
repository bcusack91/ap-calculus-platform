/**
 * Entrance Quiz — Activation Energy & Arrhenius — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-activation-energy-arrhenius-part1..7):
 *   1 Collision Theory                     — energy and orientation requirements
 *   2 Activation Energy                    — forward/reverse Ea and ΔH from an energy diagram
 *   3 Temperature, Ea & the Rate Constant  — qualitative Arrhenius trends, frequency factor, temperature sensitivity
 *   4 Maxwell–Boltzmann Distributions      — reading curves, temperature vs catalyst on the graph
 *   5 Multistep Energy Profiles            — slowest step from barriers, step vs overall ΔH
 *   6 Catalysts & Catalysis                — what a catalyst changes, heterogeneous catalysis
 *   7 Synthesis & AP Review                — catalyzed reverse barrier, what changes k
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Collision Theory
  {
    id: 'aea-ent-1a',
    question: 'At the same temperature and collision frequency, reaction X (two single atoms combining) is much faster than reaction Y (two large molecules that must meet at one specific site). The two have similar activation energies. What best explains the difference?',
    options: [
      'Y molecules collide with less kinetic energy',
      'A much smaller fraction of Y collisions are properly oriented',
      'Y has a far higher activation energy than X',
      'Large molecules collide less often than atoms do',
    ],
    correctIndex: 1,
    explanation: 'Atoms can react however they meet, but large molecules react only when the reactive sites line up, so far fewer Y collisions are effective. The stem rules out differences in Ea and collision frequency, and at the same temperature the average kinetic energy is the same.',
    partNumber: 1,
    partTitle: 'Collision Theory',
  },
  {
    id: 'aea-ent-1b',
    question: 'In a gas mixture, $10^{30}$ collisions occur per second per liter. A fraction $2 \\times 10^{-6}$ of them have energy at least equal to $E_a$, and 1 in 10 collisions has a suitable orientation. About how many effective collisions occur per second per liter?',
    options: ['$2 \\times 10^{23}$', '$2 \\times 10^{24}$', '$1 \\times 10^{29}$', '$2 \\times 10^{25}$'],
    correctIndex: 0,
    explanation: 'A collision must meet both requirements, so multiply: $10^{30} \\times (2 \\times 10^{-6}) \\times 0.1 = 2 \\times 10^{23}$. Using only the energy fraction gives $2 \\times 10^{24}$, and using only orientation gives $10^{29}$.',
    partNumber: 1,
    partTitle: 'Collision Theory',
  },

  // Part 2: Activation Energy
  {
    id: 'aea-ent-2a',
    question: 'A reaction has $E_a(\\text{forward}) = 65$ kJ/mol and $\\Delta H = +25$ kJ/mol. What is the activation energy of the reverse reaction?',
    options: ['40 kJ/mol', '90 kJ/mol', '65 kJ/mol', '25 kJ/mol'],
    correctIndex: 0,
    explanation: '$E_a(\\text{reverse}) = E_a(\\text{forward}) - \\Delta H = 65 - 25 = 40$ kJ/mol: the products sit 25 kJ/mol higher, so they are closer to the peak. Adding the two values gives 90 kJ/mol, which would be right only for an exothermic reaction.',
    partNumber: 2,
    partTitle: 'Activation Energy',
  },
  {
    id: 'aea-ent-2b',
    question: 'An energy diagram shows reactants at 120 kJ, the transition state at 185 kJ and products at 150 kJ. Which description is correct?',
    options: [
      'Endothermic; reverse $E_a$ = 65 kJ',
      'Exothermic; reverse $E_a$ = 35 kJ',
      'Endothermic; reverse $E_a$ = 35 kJ',
      'Endothermic; reverse $E_a$ = 30 kJ',
    ],
    correctIndex: 2,
    explanation: 'The products lie above the reactants (ΔH = +30 kJ), so the reaction is endothermic, and the reverse barrier is 185 − 150 = 35 kJ. The value 65 kJ is the forward barrier, and 30 kJ is ΔH.',
    partNumber: 2,
    partTitle: 'Activation Energy',
  },

  // Part 3: Temperature, Ea & the Rate Constant
  {
    id: 'aea-ent-3a',
    question: 'Reactions P and Q have the same activation energy. P requires two large molecules to meet at one specific site, while Q involves simple atoms. At the same temperature, which has the larger rate constant?',
    options: [
      'P, since its frequency factor A is larger',
      'Q, because its activation energy is lower',
      'Neither, as equal $E_a$ means equal k',
      'Q, because its frequency factor A is larger',
    ],
    correctIndex: 3,
    explanation: 'In $k = Ae^{-E_a/RT}$, the energy term is the same for both, so the difference comes from A, which reflects how often collisions are suitably oriented. Simple atoms react in almost any orientation, giving Q the larger A and the larger k.',
    partNumber: 3,
    partTitle: 'Temperature, Ea & the Rate Constant',
  },
  {
    id: 'aea-ent-3b',
    question: 'A 10 °C rise doubles the rate constant of reaction 1. Reaction 2 has a much larger activation energy. What does the same 10 °C rise do to the rate constant of reaction 2?',
    options: [
      'It doubles it exactly, as before',
      'It more than doubles it',
      'It increases it by less than double',
      'It lowers it, since the barrier is higher',
    ],
    correctIndex: 1,
    explanation: 'A larger Ea puts the threshold farther out in the tail of the Maxwell–Boltzmann curve, where heating multiplies the area beyond Ea by a bigger factor. So reactions with larger Ea are more temperature-sensitive, and heating never lowers k.',
    partNumber: 3,
    partTitle: 'Temperature, Ea & the Rate Constant',
  },

  // Part 4: Maxwell–Boltzmann Distributions
  {
    id: 'aea-ent-4a',
    question: 'Heating a reaction mixture increases the shaded area to the right of $E_a$ on its Maxwell–Boltzmann graph. Which change, made at the original temperature, would also enlarge that shaded area while leaving the curve itself exactly as it was?',
    options: [
      'Adding more of the reactant gas',
      'Increasing the volume of the flask',
      'Adding a catalyst',
      'Removing some product as it forms',
    ],
    correctIndex: 2,
    explanation: 'A catalyst does not change particle energies, so the curve stays the same, but its lower-barrier pathway moves the $E_a$ line left and more area lies beyond it. Changing the amount of gas or the volume changes collision frequency, not the fraction above $E_a$.',
    partNumber: 4,
    partTitle: 'Maxwell–Boltzmann Distributions',
  },
  {
    id: 'aea-ent-4b',
    question: 'Two Maxwell–Boltzmann curves are drawn for the same gas sample. Curve 1 peaks at a low energy with a tall, narrow peak; curve 2 peaks at a higher energy with a shorter, broader peak. Which statement is correct?',
    options: [
      'Curve 1 is hotter, because its peak is taller',
      'Curve 2 has more total area under it',
      'Curve 2 has a lower activation energy',
      'Curve 2 has more area beyond $E_a$',
    ],
    correctIndex: 3,
    explanation: 'The shorter, broader curve shifted to higher energy is the higher temperature, so more of its area lies beyond the same $E_a$. Total area is fixed for a given sample, and $E_a$ is a vertical line that heating does not move.',
    partNumber: 4,
    partTitle: 'Maxwell–Boltzmann Distributions',
  },

  // Part 5: Multistep Energy Profiles
  {
    id: 'aea-ent-5a',
    question: 'A two-step profile: reactants 40 kJ, transition state 1 at 100 kJ, intermediate 10 kJ, transition state 2 at 85 kJ, products −20 kJ. Which step is slower, and what is the overall ΔH?',
    options: [
      'Step 2; overall ΔH = −60 kJ',
      'Step 1; overall ΔH = −60 kJ',
      'Step 1; overall ΔH = −30 kJ',
      'Step 2; overall ΔH = −30 kJ',
    ],
    correctIndex: 0,
    explanation: 'Step 1 has a 60 kJ barrier (100 − 40), while step 2 has a 75 kJ barrier measured from the intermediate (85 − 10), so step 2 is slower even though its peak is lower. The overall ΔH is −20 − 40 = −60 kJ; −30 kJ is only the ΔH of step 1.',
    partNumber: 5,
    partTitle: 'Multistep Energy Profiles',
  },
  {
    id: 'aea-ent-5b',
    question: 'In a two-step energy profile, the intermediate valley lies above the reactants, and the products lie below the reactants. What does the profile show?',
    options: [
      'Both steps are endothermic, so the reaction is endothermic',
      'Step 1 is endothermic, but overall it is exothermic',
      'Step 1 is exothermic, and then step 2 is endothermic',
      'The high valley makes the overall reaction endothermic',
    ],
    correctIndex: 1,
    explanation: 'Rising from the reactants to a higher intermediate makes step 1 endothermic, and falling from there to products below the start makes step 2 exothermic. The overall ΔH depends only on the start and finish levels, so the reaction is exothermic.',
    partNumber: 5,
    partTitle: 'Multistep Energy Profiles',
  },

  // Part 6: Catalysts & Catalysis
  {
    id: 'aea-ent-6a',
    question: 'A catalyst is added to a reaction mixture that is already at equilibrium, at constant temperature. What happens?',
    options: [
      'The forward rate rises more, so K increases',
      'Both rates rise, so the yield of product increases',
      'Forward and reverse rates rise equally, and K is unchanged',
      'Only the forward rate rises, and ΔH becomes more negative',
    ],
    correctIndex: 2,
    explanation: 'The catalyst lowers the barrier for both directions by the same amount, so both rates rise equally and the equilibrium position and K stay the same. It also leaves ΔH unchanged.',
    partNumber: 6,
    partTitle: 'Catalysts & Catalysis',
  },
  {
    id: 'aea-ent-6b',
    question: 'Solid nickel speeds up the reaction of ethene gas with hydrogen gas and is recovered unchanged afterward. Which description fits this catalysis?',
    options: [
      'Homogeneous: the nickel dissolves into the gas mixture',
      'Heterogeneous: nickel is used up as it forms the product',
      'Homogeneous: nickel raises the average kinetic energy',
      'Heterogeneous: gases adsorb onto it and bonds weaken',
    ],
    correctIndex: 3,
    explanation: 'A solid catalyst with gaseous reactants is heterogeneous: molecules adsorb onto active sites, where bonds weaken and react on a lower-barrier pathway, and the products then desorb. The nickel is regenerated, and a catalyst does not change the temperature.',
    partNumber: 6,
    partTitle: 'Catalysts & Catalysis',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'aea-ent-7a',
    question: 'An uncatalyzed reaction has reactants at 20 kJ, a transition state at 140 kJ and products at 60 kJ. A catalyst lowers the highest point of the pathway to 90 kJ. What is the activation energy of the catalyzed reverse reaction?',
    options: ['30 kJ', '70 kJ', '80 kJ', '50 kJ'],
    correctIndex: 0,
    explanation: 'The reverse reaction starts at the products, so its catalyzed barrier is 90 − 60 = 30 kJ. The value 70 kJ is the catalyzed forward barrier, and 80 kJ is the uncatalyzed reverse barrier.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'aea-ent-7b',
    question: 'A reaction is run at 25 °C. Three separate changes are tested: (I) doubling the concentration of a reactant, (II) heating to 35 °C, (III) adding a catalyst. Which change(s) increase the rate constant k?',
    options: ['All of I, II and III', 'II and III only', 'I and II only', 'III only'],
    correctIndex: 1,
    explanation: 'Heating raises the fraction of collisions with energy at or above Ea, and a catalyst provides a lower-Ea pathway, so both increase k. Doubling a concentration can raise the rate through the rate law but does not change k.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Collision Theory' },
    { partNumber: 2, partTitle: 'Activation Energy' },
    { partNumber: 3, partTitle: 'Temperature, Ea & the Rate Constant' },
    { partNumber: 4, partTitle: 'Maxwell–Boltzmann Distributions' },
    { partNumber: 5, partTitle: 'Multistep Energy Profiles' },
    { partNumber: 6, partTitle: 'Catalysts & Catalysis' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
