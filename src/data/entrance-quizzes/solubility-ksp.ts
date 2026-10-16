/**
 * Entrance Quiz — Solubility Equilibria & Ksp — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-solubility-ksp-part1..7):
 *   1 Dissolution Equilibrium and Ksp                 — writing Ksp, ranking same-type salts
 *   2 Calculating Molar Solubility from Ksp           — s from Ksp and Ksp from s for unequal ion ratios
 *   3 The Common Ion Effect                           — solubility with a common ion, ranking solvents
 *   4 Predicting Precipitation — Q vs Ksp             — Q after dilution, onset concentration
 *   5 Selective Precipitation                         — which salt precipitates first and at what concentration
 *   6 Problem-Solving Workshop: Solubility Equilibria — Ksp from ion data, acid and basic anions
 *   7 Synthesis & AP Review                           — solubility at fixed [OH−], common-ion effect on all quantities
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Dissolution Equilibrium and Ksp
  {
    id: 'sksp-ent-1a',
    question: 'What is the $K_{sp}$ expression for $\\text{Mg}_3(\\text{PO}_4)_2(s) \\rightleftharpoons 3\\text{Mg}^{2+}(aq) + 2\\text{PO}_4^{3-}(aq)$?',
    options: [
      '$K_{sp} = [\\text{Mg}^{2+}]^3[\\text{PO}_4^{3-}]^2$',
      '$K_{sp} = [\\text{Mg}^{2+}]^2\\,[\\text{PO}_4^{3-}]^3$',
      '$K_{sp} = 3[\\text{Mg}^{2+}] \\cdot 2[\\text{PO}_4^{3-}]$',
      '$K_{sp} = \\dfrac{[\\text{Mg}^{2+}]^3[\\text{PO}_4^{3-}]^2}{[\\text{Mg}_3(\\text{PO}_4)_2]}$',
    ],
    correctIndex: 0,
    explanation: 'Each ion concentration is raised to its coefficient (3 for $\\text{Mg}^{2+}$, 2 for $\\text{PO}_4^{3-}$), and the pure solid is left out. Coefficients are exponents, not multipliers.',
    partNumber: 1,
    partTitle: 'Dissolution Equilibrium and Ksp',
  },
  {
    id: 'sksp-ent-1b',
    question: 'Three 1:1 salts have these $K_{sp}$ values: CuBr, $6.3 \\times 10^{-9}$; AgCl, $1.8 \\times 10^{-10}$; CuI, $1.3 \\times 10^{-12}$. Which lists them in order of increasing molar solubility?',
    options: ['CuBr < AgCl < CuI', 'CuI < AgCl < CuBr', 'AgCl < CuI < CuBr', 'CuI < CuBr < AgCl'],
    correctIndex: 1,
    explanation: 'For salts with the same ion ratio, $s = \\sqrt{K_{sp}}$, so a smaller $K_{sp}$ means a lower solubility: CuI is least soluble and CuBr most. This direct comparison works only because all three are 1:1.',
    partNumber: 1,
    partTitle: 'Dissolution Equilibrium and Ksp',
  },

  // Part 2: Calculating Molar Solubility from Ksp
  {
    id: 'sksp-ent-2a',
    question: '$\\text{BaF}_2$ has $K_{sp} = 1.0 \\times 10^{-6}$. What is its molar solubility in pure water?',
    options: [
      '$1.0 \\times 10^{-3}$ M',
      '$1.0 \\times 10^{-2}$ M',
      '$6.3 \\times 10^{-3}$ M',
      '$2.5 \\times 10^{-7}$ M',
    ],
    correctIndex: 2,
    explanation: '$K_{sp} = (s)(2s)^2 = 4s^3$, so $s = \\sqrt[3]{2.5 \\times 10^{-7}} = 6.3 \\times 10^{-3}$ M. Taking $\\sqrt{K_{sp}}$ treats the salt as 1:1, and $\\sqrt[3]{K_{sp}}$ drops the factor of 4.',
    partNumber: 2,
    partTitle: 'Calculating Molar Solubility from Ksp',
  },
  {
    id: 'sksp-ent-2b',
    question: 'The molar solubility of $\\text{Ag}_3\\text{PO}_4$ in pure water is $1.6 \\times 10^{-5}$ M. What is its $K_{sp}$?',
    options: ['$6.6 \\times 10^{-20}$', '$2.0 \\times 10^{-19}$', '$7.7 \\times 10^{-10}$', '$1.8 \\times 10^{-18}$'],
    correctIndex: 3,
    explanation: '$[\\text{Ag}^+] = 3s$ and $[\\text{PO}_4^{3-}] = s$, so $K_{sp} = (3s)^3(s) = 27s^4 = 27(1.6 \\times 10^{-5})^4 = 1.8 \\times 10^{-18}$. Writing $s^4$ forgets the 27, and $3s^4$ cubes s but not the 3.',
    partNumber: 2,
    partTitle: 'Calculating Molar Solubility from Ksp',
  },

  // Part 3: The Common Ion Effect
  {
    id: 'sksp-ent-3a',
    question: 'What is the molar solubility of $\\text{Ag}_2\\text{CrO}_4$ ($K_{sp} = 1.1 \\times 10^{-12}$) in 0.10 M $\\text{AgNO}_3$?',
    options: [
      '$1.1 \\times 10^{-10}$ M',
      '$1.1 \\times 10^{-11}$ M',
      '$2.8 \\times 10^{-11}$ M',
      '$6.5 \\times 10^{-5}$ M',
    ],
    correctIndex: 0,
    explanation: 'With $[\\text{Ag}^+] \\approx 0.10$ M from the silver nitrate, $K_{sp} \\approx (0.10)^2 s$, so $s = 1.1 \\times 10^{-10}$ M. Forgetting the square gives $1.1 \\times 10^{-11}$, doubling the 0.10 M gives $2.8 \\times 10^{-11}$, and $6.5 \\times 10^{-5}$ M is the pure-water value.',
    partNumber: 3,
    partTitle: 'The Common Ion Effect',
  },
  {
    id: 'sksp-ent-3b',
    question: '$\\text{CaF}_2$ ($K_{sp} = 3.9 \\times 10^{-11}$) is dissolved in (I) pure water, (II) 0.10 M NaF and (III) 0.10 M $\\text{CaCl}_2$. Which ranks its molar solubility from lowest to highest?',
    options: ['III < II < I', 'II < III < I', 'I < II < III', 'II = III < I'],
    correctIndex: 1,
    explanation: 'In NaF, $s = K_{sp}/(0.10)^2 = 3.9 \\times 10^{-9}$ M; in $\\text{CaCl}_2$, $s = \\sqrt{K_{sp}/0.40} = 9.9 \\times 10^{-6}$ M; in water, $s = 2.1 \\times 10^{-4}$ M. Fluoride is squared in $K_{sp}$, so the same 0.10 M of it suppresses solubility far more than calcium does.',
    partNumber: 3,
    partTitle: 'The Common Ion Effect',
  },

  // Part 4: Predicting Precipitation — Q vs Ksp
  {
    id: 'sksp-ent-4a',
    question: '25.0 mL of 0.0020 M $\\text{Pb(NO}_3)_2$ is mixed with 25.0 mL of 0.0040 M KI. $K_{sp}(\\text{PbI}_2) = 9.8 \\times 10^{-9}$. Which statement is correct?',
    options: [
      '$Q = 3.2 \\times 10^{-8}$, so a precipitate forms',
      '$Q = 2.0 \\times 10^{-6}$, so a precipitate forms',
      '$Q = 4.0 \\times 10^{-9}$, so no precipitate forms',
      '$Q = 1.6 \\times 10^{-8}$, so a precipitate forms',
    ],
    correctIndex: 2,
    explanation: 'Mixing halves each concentration: $[\\text{Pb}^{2+}] = 0.0010$ M and $[\\text{I}^-] = 0.0020$ M, so $Q = (0.0010)(0.0020)^2 = 4.0 \\times 10^{-9}$, below $K_{sp}$. Skipping the dilution gives $3.2 \\times 10^{-8}$, and skipping the square gives $2.0 \\times 10^{-6}$.',
    partNumber: 4,
    partTitle: 'Predicting Precipitation — Q vs Ksp',
  },
  {
    id: 'sksp-ent-4b',
    question: 'A solution has $[\\text{CrO}_4^{2-}] = 0.0050$ M. What is the minimum $[\\text{Ag}^+]$ at which $\\text{Ag}_2\\text{CrO}_4$ ($K_{sp} = 1.1 \\times 10^{-12}$) begins to precipitate?',
    options: [
      '$2.2 \\times 10^{-10}$ M',
      '$7.4 \\times 10^{-6}$ M',
      '$6.5 \\times 10^{-5}$ M',
      '$1.5 \\times 10^{-5}$ M',
    ],
    correctIndex: 3,
    explanation: 'Precipitation starts when $[\\text{Ag}^+]^2(0.0050) = K_{sp}$, so $[\\text{Ag}^+] = \\sqrt{2.2 \\times 10^{-10}} = 1.5 \\times 10^{-5}$ M. Skipping the square root gives $2.2 \\times 10^{-10}$, and $6.5 \\times 10^{-5}$ M is the pure-water solubility.',
    partNumber: 4,
    partTitle: 'Predicting Precipitation — Q vs Ksp',
  },

  // Part 5: Selective Precipitation
  {
    id: 'sksp-ent-5a',
    question: 'A solution is 0.010 M in both $\\text{Sr}^{2+}$ and $\\text{Ba}^{2+}$. $\\text{Na}_2\\text{SO}_4$ is added slowly. $K_{sp}(\\text{SrSO}_4) = 3.4 \\times 10^{-7}$ and $K_{sp}(\\text{BaSO}_4) = 1.1 \\times 10^{-10}$. Which precipitates first, and at what $[\\text{SO}_4^{2-}]$ does it begin?',
    options: [
      '$\\text{BaSO}_4$, beginning at $1.1 \\times 10^{-8}$ M',
      '$\\text{SrSO}_4$, beginning at $3.4 \\times 10^{-5}$ M',
      '$\\text{BaSO}_4$, beginning at $1.0 \\times 10^{-5}$ M',
      '$\\text{SrSO}_4$, beginning at $5.8 \\times 10^{-4}$ M',
    ],
    correctIndex: 0,
    explanation: '$\\text{BaSO}_4$ needs only $K_{sp}/[\\text{Ba}^{2+}] = 1.1 \\times 10^{-10}/0.010 = 1.1 \\times 10^{-8}$ M sulfate, far less than the $3.4 \\times 10^{-5}$ M that $\\text{SrSO}_4$ needs. The value $1.0 \\times 10^{-5}$ M is $\\sqrt{K_{sp}}$, which ignores the barium already present.',
    partNumber: 5,
    partTitle: 'Selective Precipitation',
  },
  {
    id: 'sksp-ent-5b',
    question: 'A solution has $[\\text{Cl}^-] = 0.10$ M and $[\\text{CrO}_4^{2-}] = 0.0010$ M. $\\text{AgNO}_3$ is added slowly. $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$ and $K_{sp}(\\text{Ag}_2\\text{CrO}_4) = 1.1 \\times 10^{-12}$. Which precipitates first?',
    options: [
      '$\\text{Ag}_2\\text{CrO}_4$, because its $K_{sp}$ is the smaller of the two',
      'AgCl, as it starts at only $1.8 \\times 10^{-9}$ M $\\text{Ag}^+$',
      '$\\text{Ag}_2\\text{CrO}_4$, as it starts at $1.1 \\times 10^{-9}$ M $\\text{Ag}^+$',
      'Both at the same moment, because the two salts share the same cation',
    ],
    correctIndex: 1,
    explanation: 'AgCl needs $[\\text{Ag}^+] = 1.8 \\times 10^{-10}/0.10 = 1.8 \\times 10^{-9}$ M, while $\\text{Ag}_2\\text{CrO}_4$ needs $\\sqrt{1.1 \\times 10^{-12}/0.0010} = 3.3 \\times 10^{-5}$ M. The comparison must use the silver needed, because the salts have different ion ratios and concentrations.',
    partNumber: 5,
    partTitle: 'Selective Precipitation',
  },

  // Part 6: Problem-Solving Workshop: Solubility Equilibria
  {
    id: 'sksp-ent-6a',
    question: 'A saturated solution of a metal hydroxide $\\text{M(OH)}_2$ in pure water has $[\\text{OH}^-] = 2.0 \\times 10^{-4}$ M. What is $K_{sp}$?',
    options: ['$8.0 \\times 10^{-12}$', '$4.0 \\times 10^{-8}$', '$4.0 \\times 10^{-12}$', '$2.0 \\times 10^{-8}$'],
    correctIndex: 2,
    explanation: 'Each formula unit gives two $\\text{OH}^-$, so $[\\text{M}^{2+}] = 1.0 \\times 10^{-4}$ M and $K_{sp} = (1.0 \\times 10^{-4})(2.0 \\times 10^{-4})^2 = 4.0 \\times 10^{-12}$. Using $2.0 \\times 10^{-4}$ M for the metal ion too gives $8.0 \\times 10^{-12}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop: Solubility Equilibria',
  },
  {
    id: 'sksp-ent-6b',
    question: 'Which of these slightly soluble salts becomes noticeably more soluble when nitric acid is added to its saturated solution?',
    options: ['AgCl', 'AgI', 'PbI₂', 'CaCO₃'],
    correctIndex: 3,
    explanation: 'Carbonate is a weak base, so $\\text{H}^+$ converts it to $\\text{HCO}_3^-$ (and then $\\text{CO}_2$), removing it from the solubility equilibrium and pulling more solid into solution. Chloride and iodide are conjugate bases of strong acids, so acid does not remove them.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop: Solubility Equilibria',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'sksp-ent-7a',
    question: 'What is the molar solubility of $\\text{Mg(OH)}_2$ ($K_{sp} = 5.6 \\times 10^{-12}$) in a solution whose $[\\text{OH}^-]$ is held at $1.0 \\times 10^{-3}$ M?',
    options: [
      '$5.6 \\times 10^{-9}$ M',
      '$5.6 \\times 10^{-6}$ M',
      '$1.1 \\times 10^{-4}$ M',
      '$1.4 \\times 10^{-6}$ M',
    ],
    correctIndex: 1,
    explanation: 'With $[\\text{OH}^-]$ fixed, $s = K_{sp}/[\\text{OH}^-]^2 = 5.6 \\times 10^{-12}/(1.0 \\times 10^{-6}) = 5.6 \\times 10^{-6}$ M. Forgetting the square gives $5.6 \\times 10^{-9}$, and $1.1 \\times 10^{-4}$ M is the pure-water solubility.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'sksp-ent-7b',
    question: 'Solid NaCl is dissolved in a saturated solution of $\\text{PbCl}_2$ that is in contact with excess solid $\\text{PbCl}_2$. After equilibrium is restored at the same temperature, which statement is correct?',
    options: [
      '$[\\text{Pb}^{2+}]$ falls and $[\\text{Cl}^-]$ rises, but $K_{sp}$ is unchanged',
      '$[\\text{Pb}^{2+}]$ and $[\\text{Cl}^-]$ both rise, and $K_{sp}$ rises',
      '$[\\text{Pb}^{2+}]$ is unchanged, since solid is still present',
      '$[\\text{Pb}^{2+}]$ falls, and $K_{sp}$ falls along with it',
    ],
    correctIndex: 0,
    explanation: 'The added chloride shifts the equilibrium toward the solid, so some $\\text{PbCl}_2$ precipitates and $[\\text{Pb}^{2+}]$ drops, while $[\\text{Cl}^-]$ ends up higher than before. $K_{sp}$ depends only on temperature, so it stays the same.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Dissolution Equilibrium and Ksp' },
    { partNumber: 2, partTitle: 'Calculating Molar Solubility from Ksp' },
    { partNumber: 3, partTitle: 'The Common Ion Effect' },
    { partNumber: 4, partTitle: 'Predicting Precipitation — Q vs Ksp' },
    { partNumber: 5, partTitle: 'Selective Precipitation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop: Solubility Equilibria' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
