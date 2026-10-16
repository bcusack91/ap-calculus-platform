/**
 * AP Chemistry diagnostic v2 — Unit 5: Kinetics (CED 5.1–5.11).
 * Four stimulus sets (concentration–time data, initial rates, a two-step
 * energy profile, a pre-equilibrium mechanism) plus standalone items.
 * No Arrhenius-equation calculations (5.6 exclusion).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { SVG_CHEM_S025 } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s023',
    title: 'Decomposition of N₂O₅ at constant temperature',
    kind: 'graph',
    content:
      'Dinitrogen pentoxide dissolved in carbon tetrachloride decomposes at a constant temperature: 2N₂O₅ → 4NO₂ + O₂. A student measures [N₂O₅] every 10 minutes for 80 minutes.',
    chart: {
      title: '[N₂O₅] versus time',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'min',
      yLabel: '[N₂O₅]',
      yUnit: 'M',
      xValues: [0, 10, 20, 30, 40, 50, 60, 70, 80],
      yValues: [0.8, 0.566, 0.4, 0.283, 0.2, 0.141, 0.1, 0.0707, 0.05],
      seriesLabel: '[N₂O₅]',
    },
  },
  {
    id: 'chem-s024',
    title: 'Initial rates for the reaction 2A + B → C',
    kind: 'table',
    content:
      'The initial rate of the reaction 2A + B → C is measured in three trials at the same temperature.\n\n' +
      '| Trial | [A]₀ (M) | [B]₀ (M) | Initial rate of formation of C (M/s) |\n' +
      '| --- | --- | --- | --- |\n' +
      '| 1 | 0.10 | 0.10 | 2.0 × 10⁻⁴ |\n' +
      '| 2 | 0.20 | 0.10 | 4.0 × 10⁻⁴ |\n' +
      '| 3 | 0.20 | 0.30 | 3.6 × 10⁻³ |',
  },
  {
    id: 'chem-s025',
    title: 'Energy profile for a two-step reaction',
    kind: 'figure',
    content:
      'The energy profile shows a reaction that occurs by a two-step mechanism. The reactants are at 40 kJ/mol, the first transition state at 120 kJ/mol, the intermediate at 60 kJ/mol, the second transition state at 100 kJ/mol, and the products at 10 kJ/mol.',
    svg: SVG_CHEM_S025,
  },
  {
    id: 'chem-s026',
    title: 'A proposed mechanism for the decomposition of ozone',
    kind: 'passage',
    content:
      'The overall reaction 2O₃(g) → 3O₂(g) is proposed to occur by the following two-step mechanism.\n\n' +
      'Step 1 (fast, reversible): O₃(g) ⇌ O₂(g) + O(g)\n\n' +
      'Step 2 (slow): O(g) + O₃(g) → 2O₂(g)\n\n' +
      'Because step 1 is fast and reversible, its forward and reverse rates are equal while the reaction proceeds.',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s023: concentration versus time ───────────────────────────
  {
    id: 'chem-s023-q1',
    stimulusId: 'chem-s023',
    unit: 'unit-5',
    topicSlug: 'integrated-rate-laws',
    difficulty: 'easy',
    stem: 'Based on the data, what is the half-life of N₂O₅ under these conditions?',
    options: ['20 min', '40 min', '10 min', '80 min'],
    correctIndex: 0,
    explanation:
      '[N₂O₅] falls from 0.800 M to 0.400 M in the first 20 min, from 0.400 M to 0.200 M in the next 20 min, and from 0.200 M to 0.100 M in the next 20 min, so the half-life is 20 min. 40 min is the time for the concentration to fall to one quarter, 10 min is a single measuring interval, and 80 min is the length of the whole run.',
  },
  {
    id: 'chem-s023-q2',
    stimulusId: 'chem-s023',
    unit: 'unit-5',
    topicSlug: 'integrated-rate-laws',
    difficulty: 'medium',
    stem: 'What is the value of the rate constant for the decomposition?',
    options: ['0.0347 min⁻¹', '0.0500 min⁻¹', '0.0100 min⁻¹', '13.9 min⁻¹'],
    correctIndex: 0,
    explanation:
      'A constant half-life means the reaction is first order, and for a first-order reaction t½ = 0.693/k, so k = 0.693 ÷ 20 min = 0.0347 min⁻¹. 0.0500 min⁻¹ is 1/t½ without the ln 2 factor, 0.0100 min⁻¹ is the zero-order slope (0.800 M ÷ 80 min) without units of M, and 13.9 min⁻¹ multiplies 0.693 by 20 instead of dividing.',
  },
  {
    id: 'chem-s023-q3',
    stimulusId: 'chem-s023',
    unit: 'unit-5',
    topicSlug: 'integrated-rate-laws',
    difficulty: 'hard',
    stem: 'Which conclusion about the order of the reaction with respect to N₂O₅ is best supported by the data?',
    options: [
      'First order, because [N₂O₅] is cut in half every 20 min, whatever its starting value is',
      'Zero order, because [N₂O₅] falls by the same amount during every 20 min interval',
      'First order, because a graph of [N₂O₅] versus time is a straight line with slope −k',
      'Second order, because the time needed for [N₂O₅] to fall by half doubles each time',
    ],
    correctIndex: 0,
    explanation:
      'A first-order reaction has a constant half-life, and the data show the concentration halving every 20 min (0.800 → 0.400 → 0.200 → 0.100 M). The amount lost per interval shrinks (0.400, then 0.200, then 0.100 M), so it is not zero order. A first-order reaction gives a straight line for ln[N₂O₅] versus time, not for [N₂O₅] itself, which curves here. A second-order half-life would double each time, but here it stays the same.',
  },

  // ── Set chem-s024: initial rates ───────────────────────────────────────
  {
    id: 'chem-s024-q1',
    stimulusId: 'chem-s024',
    unit: 'unit-5',
    topicSlug: 'reaction-rates-and-rate-laws',
    difficulty: 'medium',
    stem: 'Which rate law is consistent with the data?',
    options: ['rate = k[A][B]²', 'rate = k[A]²[B]', 'rate = k[A][B]', 'rate = k[A]²[B]²'],
    correctIndex: 0,
    explanation:
      'Trials 1 → 2: [A] doubles with [B] fixed, and the rate doubles (2.0 → 4.0 × 10⁻⁴), so the reaction is first order in A. Trials 2 → 3: [B] triples with [A] fixed, and the rate rises ninefold (4.0 × 10⁻⁴ → 3.6 × 10⁻³), so it is second order in B, since 3² = 9. k[A]²[B] takes the orders from the coefficients of the balanced equation, which is valid only for an elementary step; k[A][B] and k[A]²[B]² each contradict at least one pair of trials.',
  },
  {
    id: 'chem-s024-q2',
    stimulusId: 'chem-s024',
    unit: 'unit-5',
    topicSlug: 'reaction-rates-and-rate-laws',
    difficulty: 'hard',
    stem: 'What are the value and units of the rate constant, k?',
    options: ['0.20 M⁻² s⁻¹', '0.020 M⁻¹ s⁻¹', '2.0 M⁻² s⁻¹', '0.20 M⁻¹ s⁻¹'],
    correctIndex: 0,
    explanation:
      'With rate = k[A][B]², trial 1 gives k = (2.0 × 10⁻⁴ M/s) ÷ [(0.10 M)(0.10 M)²] = 2.0 × 10⁻⁴ ÷ 1.0 × 10⁻³ = 0.20 M⁻² s⁻¹. A third-order rate law needs units of M⁻² s⁻¹ so that k × M³ gives M/s. 0.020 M⁻¹ s⁻¹ uses the second-order rate law k[A][B], 2.0 M⁻² s⁻¹ is off by a factor of 10 in [B]², and 0.20 M⁻¹ s⁻¹ has the right number but the units of a second-order constant.',
  },

  // ── Set chem-s025: multistep energy profile ────────────────────────────
  {
    id: 'chem-s025-q1',
    stimulusId: 'chem-s025',
    unit: 'unit-5',
    topicSlug: 'reaction-mechanisms',
    difficulty: 'easy',
    stem: 'Based on the energy profile, which step is the rate-determining step?',
    options: [
      'Step 1, because its activation energy is the larger one',
      'Step 2, because the last step of a mechanism is the slowest',
      'Step 2, because it begins at a higher energy than step 1 does',
      'Step 1, because the first step of a mechanism is always the slowest',
    ],
    correctIndex: 0,
    explanation:
      'The slowest step is the one with the largest activation energy measured from its own starting point. Step 1 rises from 40 to 120 kJ/mol (Ea = 80 kJ/mol), and step 2 from 60 to 100 kJ/mol (Ea = 40 kJ/mol), so step 1 is rate-determining. The position of a step in the mechanism does not decide which is slowest; it is the barrier, so the reasons in the other options are not valid, and starting at a higher energy does not make a step slower.',
  },
  {
    id: 'chem-s025-q2',
    stimulusId: 'chem-s025',
    unit: 'unit-5',
    topicSlug: 'activation-energy-arrhenius',
    difficulty: 'medium',
    stem: 'What is ΔH for the overall reaction?',
    options: ['−30 kJ/mol', '+30 kJ/mol', '−110 kJ/mol', '+20 kJ/mol'],
    correctIndex: 0,
    explanation:
      'ΔH = energy of products − energy of reactants = 10 − 40 = −30 kJ/mol, so the overall reaction is exothermic. +30 kJ/mol reverses the subtraction, −110 kJ/mol measures from the first transition state (10 − 120), and +20 kJ/mol is the energy change of step 1 alone (60 − 40).',
  },
  {
    id: 'chem-s025-q3',
    stimulusId: 'chem-s025',
    unit: 'unit-5',
    topicSlug: 'activation-energy-arrhenius',
    difficulty: 'hard',
    stem: 'A catalyst is added that lowers the energy of the first transition state from 120 kJ/mol to 75 kJ/mol and changes nothing else in the profile. Which statement is correct?',
    options: [
      'Step 2 becomes the rate-determining step, and ΔH for the overall reaction is unchanged at −30 kJ/mol.',
      'Step 1 is still rate-determining, and ΔH for the overall reaction is unchanged at −30 kJ/mol.',
      'Step 2 becomes rate-determining, and ΔH for the overall reaction becomes less negative.',
      'Step 1 is still rate-determining, and ΔH for the overall reaction becomes more negative.',
    ],
    correctIndex: 0,
    explanation:
      'With the catalyst, step 1 has Ea = 75 − 40 = 35 kJ/mol, now smaller than step 2\'s 60 → 100 barrier of 40 kJ/mol, and the second transition state (100 kJ/mol) is now the highest point on the profile, so step 2 becomes the slow step. A catalyst changes the pathway, not the energies of the reactants and products, so ΔH stays 10 − 40 = −30 kJ/mol; it does not become more or less negative.',
  },

  // ── Set chem-s026: pre-equilibrium mechanism ───────────────────────────
  {
    id: 'chem-s026-q1',
    stimulusId: 'chem-s026',
    unit: 'unit-5',
    topicSlug: 'reaction-mechanisms',
    difficulty: 'medium',
    stem: 'Which species is an intermediate in the proposed mechanism?',
    options: ['O', 'O₂', 'O₃', 'There is no intermediate in this mechanism'],
    correctIndex: 0,
    explanation:
      'An intermediate is produced in one step and consumed in a later step, so it does not appear in the overall equation. Atomic O is formed in step 1 and used up in step 2. O₂ is a product (it is formed in both steps), and O₃ is the reactant, consumed in both steps.',
  },
  {
    id: 'chem-s026-q2',
    stimulusId: 'chem-s026',
    unit: 'unit-5',
    topicSlug: 'reaction-mechanisms',
    difficulty: 'hard',
    stem: 'Which rate law is consistent with the proposed mechanism?',
    options: ['rate = k[O₃]²[O₂]⁻¹', 'rate = k[O][O₃]', 'rate = k[O₃]²', 'rate = k[O₃]'],
    correctIndex: 0,
    explanation:
      'The slow step gives rate = k₂[O][O₃], but O is an intermediate and cannot appear in the experimental rate law. Because step 1 is a fast equilibrium, K = [O₂][O]/[O₃], so [O] = K[O₃]/[O₂]. Substituting gives rate = k₂K[O₃]²/[O₂] = k[O₃]²[O₂]⁻¹. k[O][O₃] keeps the intermediate, k[O₃]² takes the order from the overall coefficient, and k[O₃] is the rate law of step 1, which is not the slow step.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u5-002',
    unit: 'unit-5',
    topicSlug: 'reaction-rates-and-rate-laws',
    difficulty: 'easy',
    stem: 'For the reaction 2N₂O₅(g) → 4NO₂(g) + O₂(g), NO₂ is forming at a rate of 0.040 M/s at a certain moment. At what rate is O₂ forming at that moment?',
    options: ['0.010 M/s', '0.040 M/s', '0.16 M/s', '0.020 M/s'],
    correctIndex: 0,
    explanation:
      'The coefficients give 1 mol O₂ for every 4 mol NO₂, so O₂ forms one-quarter as fast: 0.040 ÷ 4 = 0.010 M/s. 0.040 M/s ignores the coefficients, 0.16 M/s multiplies by 4 instead of dividing, and 0.020 M/s uses the 2 : 4 ratio of N₂O₅ to NO₂.',
  },
  {
    id: 'chem-u5-003',
    unit: 'unit-5',
    topicSlug: 'activation-energy-arrhenius',
    difficulty: 'easy',
    stem: 'Which change increases the fraction of collisions between reactant molecules that have enough energy to react?',
    options: [
      'Increasing the temperature of the mixture',
      'Increasing the concentration of a reactant',
      'Adding an unreactive gas at constant volume',
      'Increasing the volume of the reaction vessel',
    ],
    correctIndex: 0,
    explanation:
      'Raising the temperature shifts the Maxwell–Boltzmann distribution to higher energies, so a larger fraction of molecules (and of collisions) has energy at or above Ea. A higher concentration increases the number of collisions per second but not the fraction that are energetic enough. An inert gas at constant volume changes neither, and a larger volume lowers the collision frequency.',
  },
  {
    id: 'chem-u5-004',
    unit: 'unit-5',
    topicSlug: 'reaction-mechanisms',
    difficulty: 'easy',
    stem: 'What is the rate law for the elementary step 2NO₂(g) → NO₃(g) + NO(g)?',
    options: ['rate = k[NO₂]²', 'rate = k[NO₂]', 'rate = k[NO₃][NO]', 'rate = 2k[NO₂]'],
    correctIndex: 0,
    explanation:
      'For an elementary step the rate law follows directly from its molecularity. This step is bimolecular (two NO₂ molecules collide), so rate = k[NO₂]². A first-order law would describe a unimolecular step, [NO₃][NO] uses the products, and the coefficient 2 becomes an exponent, not a multiplier.',
  },
  {
    id: 'chem-u5-005',
    unit: 'unit-5',
    topicSlug: 'reaction-mechanisms',
    difficulty: 'medium',
    stem: 'A two-step mechanism for the destruction of ozone is: Step 1: Cl + O₃ → ClO + O₂; Step 2: ClO + O → Cl + O₂. Which statement about Cl and ClO is correct?',
    options: [
      'Cl is a catalyst; ClO is an intermediate.',
      'ClO is a catalyst and Cl is an intermediate.',
      'Cl and ClO are both intermediates in this mechanism.',
      'Cl and ClO are both catalysts, since both are regenerated.',
    ],
    correctIndex: 0,
    explanation:
      'A catalyst is consumed in an early step and regenerated later, so it is present at the start and at the end; Cl is used in step 1 and reformed in step 2. An intermediate is formed in an early step and used up later; ClO is formed in step 1 and consumed in step 2. Swapping the two roles reverses this order, and only Cl is regenerated, so ClO is not a catalyst. The overall reaction is O₃ + O → 2O₂.',
  },
  {
    id: 'chem-u5-006',
    unit: 'unit-5',
    topicSlug: 'integrated-rate-laws',
    difficulty: 'hard',
    stem: 'A reaction is zero order in reactant A. [A] falls from 0.50 M to 0.30 M in the first 40 s. How long after the start of the reaction will A be completely used up?',
    options: ['100 s', '60 s', '80 s', 'It is never used up, because [A] only approaches zero'],
    correctIndex: 0,
    explanation:
      'For a zero-order reaction [A] falls at a constant rate: k = (0.50 − 0.30) M ÷ 40 s = 0.0050 M/s. Starting from 0.50 M, A is used up after 0.50 M ÷ 0.0050 M/s = 100 s. 60 s is only the time remaining after the first 40 s, and 80 s is when [A] reaches 0.10 M, not zero. A concentration that only approaches zero describes first-order (exponential) decay; a zero-order reaction loses A at a constant rate until it is gone.',
  },
  {
    id: 'chem-u5-007',
    unit: 'unit-5',
    topicSlug: 'integrated-rate-laws',
    difficulty: 'hard',
    stem: 'The decomposition A → products is second order in A with k = 0.50 M⁻¹ s⁻¹. If [A]₀ = 0.20 M, how long does it take for [A] to fall to 0.10 M?',
    options: ['10. s', '1.4 s', '5.0 s', '20. s'],
    correctIndex: 0,
    explanation:
      'The second-order integrated rate law is 1/[A] − 1/[A]₀ = kt: 1/0.10 − 1/0.20 = 10 − 5 = 5.0 M⁻¹, so t = 5.0 M⁻¹ ÷ 0.50 M⁻¹ s⁻¹ = 10. s. 1.4 s uses the first-order half-life 0.693/k, 5.0 s stops at 1/[A] − 1/[A]₀ without dividing by k, and 20. s multiplies by 2 as if k were 0.25 M⁻¹ s⁻¹.',
  },
]
