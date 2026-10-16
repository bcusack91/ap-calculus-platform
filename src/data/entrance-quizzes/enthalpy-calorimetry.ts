/**
 * Entrance Quiz — Enthalpy & Calorimetry
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Enthalpy & ΔH (system vs. surroundings; exo/endothermic; energy diagrams)
 *  2 — Enthalpy of Reaction (q = n × ΔH; physical state matters)
 *  3 — Coffee Cup Calorimetry (q = mcΔT; q_rxn = −q_solution)
 *  4 — Bond Enthalpies (bonds broken minus bonds formed)
 *  5 — Hess's Law (reverse, scale, add)
 *  6 — Standard Enthalpies of Formation (standard enthalpies of formation)
 *  7 — Synthesis & AP Review (calorimetry to ΔH per mole; bond-energy reasoning)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Enthalpy & ΔH
  {
    id: 'ec-ent-1a',
    question: 'Solid KOH is dissolved in water, and the beaker becomes warm to the touch. Treating the dissolving KOH as the system, what is happening?',
    options: [
      'The water transfers heat into the dissolving solid',
      'The dissolving solid releases heat into the water',
      'Energy is created as the solid lattice breaks apart',
      'The water loses heat to the solid, so it is exothermic',
    ],
    correctIndex: 1,
    explanation: 'The surroundings (the water) warm up, so heat leaves the system: the process is exothermic and $q_{\\text{system}} < 0$. Heat flowing from the water into the solid would cool the water, not warm it, and energy is transferred, never created.',
    partNumber: 1,
    partTitle: 'Enthalpy & ΔH',
  },
  {
    id: 'ec-ent-1b',
    question: 'An energy diagram shows the products of a reaction 50 kJ above the reactants. Which statement describes the reverse reaction?',
    options: [
      '$\\Delta H = +50$ kJ, and it is endothermic',
      '$\\Delta H = -50$ kJ, and it is endothermic',
      '$\\Delta H = +50$ kJ, and it is exothermic',
      '$\\Delta H = -50$ kJ, and it is exothermic',
    ],
    correctIndex: 3,
    explanation: 'The forward reaction climbs 50 kJ, so it is endothermic with $\\Delta H = +50$ kJ. Running it in reverse drops 50 kJ, so $\\Delta H_{\\text{reverse}} = -50$ kJ and the reverse is exothermic.',
    partNumber: 1,
    partTitle: 'Enthalpy & ΔH',
  },

  // Part 2: Enthalpy of Reaction
  {
    id: 'ec-ent-2a',
    question: 'For $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{SO}_3(g)$, $\\Delta H = -198$ kJ. How much heat is released when 3.0 mol of $\\text{SO}_2$ reacts completely?',
    options: ['99 kJ', '297 kJ', '198 kJ', '594 kJ'],
    correctIndex: 1,
    explanation: 'The equation as written uses 2 mol $\\text{SO}_2$, so 3.0 mol is 1.5 moles of reaction: $1.5 \\times 198 = 297$ kJ. Multiplying by 3.0 without dividing by the coefficient gives 594 kJ, and 99 kJ is the heat for only 1 mol of $\\text{SO}_2$.',
    partNumber: 2,
    partTitle: 'Enthalpy of Reaction',
  },
  {
    id: 'ec-ent-2b',
    question: 'For $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$, $\\Delta H = -572$ kJ. How does $\\Delta H$ change if the product is water vapor instead?',
    options: [
      'It is more negative, because vapor holds more energy',
      'It stays the same, because the same bonds are formed',
      'It is less negative, because less heat is released',
      'It turns positive, because forming vapor absorbs heat',
    ],
    correctIndex: 2,
    explanation: 'Water vapor sits higher in enthalpy than liquid water, so stopping at the vapor skips the heat released by condensation: $\\Delta H$ is $-484$ kJ, less negative. The physical state is part of the thermochemical equation, and the reaction is still strongly exothermic.',
    partNumber: 2,
    partTitle: 'Enthalpy of Reaction',
  },

  // Part 3: Coffee Cup Calorimetry
  {
    id: 'ec-ent-3a',
    question: 'A 30.0 g metal block at 98.0°C is dropped into 100.0 g of water at 21.0°C, and both end at 24.0°C. Assuming no heat is lost, what is the specific heat of the metal? ($c_{\\text{water}} = 4.184$ J/(g·°C))',
    options: ['0.565 J/(g·°C)', '0.170 J/(g·°C)', '0.543 J/(g·°C)', '1.74 J/(g·°C)'],
    correctIndex: 0,
    explanation: 'The water gains $(100.0)(4.184)(3.0) = 1255$ J, which the metal loses over a 74.0°C drop: $c = 1255 / (30.0 \\times 74.0) = 0.565$ J/(g·°C). Using 77.0°C (start to start) gives 0.543, swapping the masses gives 0.170, and using the final temperature as $\\Delta T$ gives 1.74.',
    partNumber: 3,
    partTitle: 'Coffee Cup Calorimetry',
  },
  {
    id: 'ec-ent-3b',
    question: 'In a coffee-cup calorimeter, 50.0 mL of 2.00 M HCl is mixed with 50.0 mL of 2.00 M NaOH, and the temperature rises by 13.2°C. Assuming 100.0 g of solution with $c = 4.18$ J/(g·°C), what is $\\Delta H$ per mole of water formed?',
    options: ['−55.2 kJ/mol', '+55.2 kJ/mol', '−27.6 kJ/mol', '−5.52 kJ/mol'],
    correctIndex: 0,
    explanation: 'The solution gains $(100.0)(4.18)(13.2) = 5.52$ kJ, so $q_{\\text{rxn}} = -5.52$ kJ for 0.100 mol of water: $-55.2$ kJ/mol. A positive sign ignores that the solution warmed, dividing by 0.200 mol double-counts the reactants, and $-5.52$ is the heat before dividing by moles.',
    partNumber: 3,
    partTitle: 'Coffee Cup Calorimetry',
  },

  // Part 4: Bond Enthalpies
  {
    id: 'ec-ent-4a',
    question: 'Using average bond enthalpies (C–H 413, Cl–Cl 242, C–Cl 328, H–Cl 431 kJ/mol), estimate $\\Delta H$ for $\\text{CH}_4(g) + \\text{Cl}_2(g) \\rightarrow \\text{CH}_3\\text{Cl}(g) + \\text{HCl}(g)$.',
    options: ['+104 kJ', '−759 kJ', '+655 kJ', '−104 kJ'],
    correctIndex: 3,
    explanation: 'One C–H and one Cl–Cl bond break (655 kJ in), and one C–Cl and one H–Cl bond form (759 kJ out), so $\\Delta H \\approx 655 - 759 = -104$ kJ. Subtracting in the other order gives +104 kJ, and the other two values count only one side.',
    partNumber: 4,
    partTitle: 'Bond Enthalpies',
  },
  {
    id: 'ec-ent-4b',
    question: 'For $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(g)$, $\\Delta H = -484$ kJ. Given H–H = 436 kJ/mol and O=O = 498 kJ/mol, what is the average O–H bond enthalpy?',
    options: ['222 kJ/mol', '464 kJ/mol', '343 kJ/mol', '927 kJ/mol'],
    correctIndex: 1,
    explanation: 'Bonds broken total $2(436) + 498 = 1370$ kJ, and four O–H bonds form, so $1370 - 4x = -484$ gives $x = 464$ kJ/mol. Counting only two O–H bonds gives 927, reversing the sign of $\\Delta H$ gives 222, and ignoring $\\Delta H$ gives 343.',
    partNumber: 4,
    partTitle: 'Bond Enthalpies',
  },

  // Part 5: Hess's Law
  {
    id: 'ec-ent-5a',
    question: 'Given $\\text{N}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{NO}(g)$, $\\Delta H = +181$ kJ, and $2\\text{NO}(g) + \\text{O}_2(g) \\rightarrow 2\\text{NO}_2(g)$, $\\Delta H = -114$ kJ, what is $\\Delta H$ for $\\text{N}_2(g) + 2\\text{O}_2(g) \\rightarrow 2\\text{NO}_2(g)$?',
    options: ['+67 kJ', '+295 kJ', '−67 kJ', '+33.5 kJ'],
    correctIndex: 0,
    explanation: 'The two equations add directly to the target (the 2 NO cancels), so $\\Delta H = 181 + (-114) = +67$ kJ. Ignoring the negative sign gives +295 kJ, and the target is not half of the sum, so +33.5 kJ is wrong.',
    partNumber: 5,
    partTitle: "Hess's Law",
  },
  {
    id: 'ec-ent-5b',
    question: 'Given $\\text{C}(s) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$, $\\Delta H_1 = -394$ kJ, and $2\\text{CO}(g) + \\text{O}_2(g) \\rightarrow 2\\text{CO}_2(g)$, $\\Delta H_2 = -566$ kJ, what is $\\Delta H$ for $2\\text{C}(s) + \\text{O}_2(g) \\rightarrow 2\\text{CO}(g)$?',
    options: ['+222 kJ', '+172 kJ', '−222 kJ', '−1354 kJ'],
    correctIndex: 2,
    explanation: 'Double the first equation ($-788$ kJ) and reverse the second ($+566$ kJ); adding gives $-222$ kJ. Forgetting to double gives +172 kJ, and adding the second equation without reversing it gives $-1354$ kJ.',
    partNumber: 5,
    partTitle: "Hess's Law",
  },

  // Part 6: Standard Enthalpies of Formation (standard enthalpies of formation)
  {
    id: 'ec-ent-6a',
    question: 'Using $\\Delta H^\\circ_f$ values $\\text{NH}_3(g) = -46$, $\\text{NO}(g) = +90$, and $\\text{H}_2\\text{O}(g) = -242$ kJ/mol, find $\\Delta H^\\circ$ for $4\\text{NH}_3(g) + 5\\text{O}_2(g) \\rightarrow 4\\text{NO}(g) + 6\\text{H}_2\\text{O}(g)$.',
    options: ['−1092 kJ', '−908 kJ', '+908 kJ', '−1276 kJ'],
    correctIndex: 1,
    explanation: 'Products: $4(90) + 6(-242) = -1092$ kJ; reactants: $4(-46) + 5(0) = -184$ kJ; so $\\Delta H^\\circ = -1092 - (-184) = -908$ kJ. Reactants minus products gives +908 kJ, leaving out the reactants gives $-1092$ kJ, and adding them instead of subtracting gives $-1276$ kJ.',
    partNumber: 6,
    partTitle: 'Standard Enthalpies of Formation',
  },
  {
    id: 'ec-ent-6b',
    question: 'Which equation has a $\\Delta H^\\circ$ equal to the standard enthalpy of formation of $\\text{CaCO}_3(s)$?',
    options: [
      '$\\text{CaO}(s) + \\text{CO}_2(g) \\rightarrow \\text{CaCO}_3(s)$',
      '$2\\text{Ca}(s) + 2\\text{C}(s,\\text{graphite}) + 3\\text{O}_2(g) \\rightarrow 2\\text{CaCO}_3(s)$',
      '$\\text{Ca}(s) + \\text{C}(s,\\text{graphite}) + \\tfrac{3}{2}\\text{O}_2(g) \\rightarrow \\text{CaCO}_3(s)$',
      '$\\text{Ca}(s) + \\text{C}(s,\\text{diamond}) + \\tfrac{3}{2}\\text{O}_2(g) \\rightarrow \\text{CaCO}_3(s)$',
    ],
    correctIndex: 2,
    explanation: 'A formation reaction makes exactly one mole of compound from its elements in their standard states, and carbon\'s standard state is graphite. Starting from compounds, making two moles, or using diamond each breaks one of those conditions.',
    partNumber: 6,
    partTitle: 'Standard Enthalpies of Formation',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ec-ent-7a',
    question: 'When 1.60 g of $\\text{NH}_4\\text{NO}_3$ ($M = 80.04$ g/mol) dissolves in a coffee-cup calorimeter, 50.0 g of solution ($c = 4.18$ J/(g·°C)) cools by 2.50°C. What is $\\Delta H$ of solution per mole of $\\text{NH}_4\\text{NO}_3$?',
    options: ['+26.1 kJ/mol', '−26.1 kJ/mol', '+0.523 kJ/mol', '+0.836 kJ/mol'],
    correctIndex: 0,
    explanation: 'The solution loses $(50.0)(4.18)(2.50) = 523$ J, so the dissolving absorbs +0.523 kJ for 0.0200 mol: $+26.1$ kJ/mol. The cooling makes the sign positive, 0.523 is the heat before dividing by moles, and 0.836 uses the 1.60 g of solid as the mass in $q = mc\\Delta T$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ec-ent-7b',
    question: 'A gas-phase reaction has $\\Delta H < 0$. Which statement must be true?',
    options: [
      'The products have more enthalpy than the reactants',
      'Breaking the reactant bonds is what releases the energy',
      'The reaction proceeds quickly at room temperature',
      'The bonds formed are stronger in total than those broken',
    ],
    correctIndex: 3,
    explanation: 'A negative $\\Delta H$ means more energy is released forming the product bonds than is absorbed breaking the reactant bonds. Bond breaking always costs energy, the products sit lower in enthalpy, and $\\Delta H$ says nothing about speed.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the enthalpy-calorimetry topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Enthalpy & ΔH' },
    { partNumber: 2, partTitle: 'Enthalpy of Reaction' },
    { partNumber: 3, partTitle: 'Coffee Cup Calorimetry' },
    { partNumber: 4, partTitle: 'Bond Enthalpies' },
    { partNumber: 5, partTitle: "Hess's Law" },
    { partNumber: 6, partTitle: 'Standard Enthalpies of Formation' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
