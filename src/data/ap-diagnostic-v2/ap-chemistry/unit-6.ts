/**
 * AP Chemistry diagnostic v2 — Unit 6: Thermochemistry (CED 6.1–6.9).
 * Four stimulus sets (a heating curve, coffee-cup calorimetry, bond
 * enthalpies, Hess's law) plus standalone items. No bomb calorimetry,
 * ΔE = q + w or state-function definitions (6.6 and 6.9 exclusions).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s027',
    title: 'Heating curve for 18.0 g of water',
    kind: 'graph',
    content:
      'A 18.0 g sample of ice (1.00 mol of H₂O) at −20 °C is heated at a constant pressure of 1 atm until it becomes steam at 120 °C. The graph plots the temperature of the sample against the total heat added. Specific heats: ice 2.09 J/(g·°C), liquid water 4.18 J/(g·°C), steam 2.01 J/(g·°C). ΔH of fusion = 6.01 kJ/mol; ΔH of vaporization = 40.7 kJ/mol.',
    chart: {
      title: 'Temperature of the sample versus heat added',
      kind: 'line',
      xLabel: 'Total heat added',
      xUnit: 'kJ',
      yLabel: 'Temperature',
      yUnit: '°C',
      xValues: [0, 0.75, 6.76, 14.28, 54.98, 55.7],
      yValues: [-20, 0, 0, 100, 100, 120],
      seriesLabel: 'H₂O sample',
    },
  },
  {
    id: 'chem-s028',
    title: 'Coffee-cup calorimetry of a neutralization',
    kind: 'table',
    content:
      'A student mixes HCl(aq) and NaOH(aq) in an insulated foam-cup calorimeter and records the data below. Assume the mixed solution has a density of 1.00 g/mL and a specific heat of 4.18 J/(g·°C), and that no heat is exchanged with the cup or the surroundings.\n\n' +
      '| Measurement | Value |\n' +
      '| --- | --- |\n' +
      '| Volume of 1.00 M HCl | 50.0 mL |\n' +
      '| Volume of 1.00 M NaOH | 50.0 mL |\n' +
      '| Initial temperature of each solution | 22.0 °C |\n' +
      '| Highest temperature of the mixture | 28.7 °C |',
  },
  {
    id: 'chem-s029',
    title: 'Average bond enthalpies',
    kind: 'table',
    content:
      'The table lists average bond enthalpies for gas-phase molecules.\n\n' +
      '| Bond | Average bond enthalpy (kJ/mol) |\n' +
      '| --- | --- |\n' +
      '| H–H | 436 |\n' +
      '| N≡N | 945 |\n' +
      '| N–H | 391 |\n' +
      '| C–H | 413 |\n' +
      '| O=O | 498 |\n' +
      '| C=O (in CO₂) | 799 |\n' +
      '| O–H | 463 |',
  },
  {
    id: 'chem-s030',
    title: 'Three thermochemical equations at 25 °C',
    kind: 'table',
    content:
      'The table gives three thermochemical equations measured at 25 °C and 1 atm.\n\n' +
      '| Reaction | Equation | ΔH° (kJ) |\n' +
      '| --- | --- | --- |\n' +
      '| 1 | C(s) + O₂(g) → CO₂(g) | −393.5 |\n' +
      '| 2 | H₂(g) + ½O₂(g) → H₂O(l) | −285.8 |\n' +
      '| 3 | CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) | −890.3 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s027: heating curve ───────────────────────────────────────
  {
    id: 'chem-s027-q1',
    stimulusId: 'chem-s027',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'easy',
    stem: 'Based on the graph, how much heat is absorbed while the sample warms as a liquid from 0 °C to 100 °C?',
    options: ['7.5 kJ', '14.3 kJ', '6.0 kJ', '40.7 kJ'],
    correctIndex: 0,
    explanation:
      'The liquid warms along the sloped segment from 6.76 kJ (0 °C) to 14.28 kJ (100 °C): 14.28 − 6.76 = 7.52 kJ, which matches mcΔT = (18.0 g)(4.18 J/(g·°C))(100 °C) = 7.52 kJ. 14.3 kJ is the total heat added by the end of the segment, including warming and melting the ice, 6.0 kJ is the melting plateau, and 40.7 kJ is the boiling plateau.',
  },
  {
    id: 'chem-s027-q2',
    stimulusId: 'chem-s027',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'medium',
    stem: 'Based on the graph, during which interval of total heat added is the average kinetic energy of the molecules constant while liquid water and steam are both present?',
    options: ['From 14.3 kJ to 55.0 kJ', 'From 0.75 kJ to 6.76 kJ', 'From 6.76 kJ to 14.3 kJ', 'From 55.0 kJ to 55.7 kJ'],
    correctIndex: 0,
    explanation:
      'Average kinetic energy is constant when the temperature is constant, which happens on the flat segments. The flat segment at 100 °C, from 14.3 kJ to 55.0 kJ, is boiling, when liquid and steam coexist; the added 40.7 kJ separates the molecules. The flat segment from 0.75 kJ to 6.76 kJ is melting (ice and liquid). On the sloped segments from 6.76 to 14.3 kJ (liquid) and from 55.0 to 55.7 kJ (steam) the temperature, and so the average kinetic energy, rises.',
  },
  {
    id: 'chem-s027-q3',
    stimulusId: 'chem-s027',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'hard',
    stem: 'Using the information given, how much heat is needed to turn 18.0 g of liquid water at 25 °C completely into steam at 100 °C?',
    options: ['46.3 kJ', '40.7 kJ', '5.64 kJ', '48.2 kJ'],
    correctIndex: 0,
    explanation:
      'Heat the liquid from 25 °C to 100 °C: q = mcΔT = (18.0 g)(4.18 J/(g·°C))(75 °C) = 5640 J = 5.64 kJ. Then vaporize 1.00 mol: 40.7 kJ. Total = 5.64 + 40.7 = 46.3 kJ. 40.7 kJ is the vaporization step alone, 5.64 kJ is the warming step alone, and 48.2 kJ starts the warming at 0 °C instead of 25 °C (7.52 + 40.7).',
  },

  // ── Set chem-s028: calorimetry ─────────────────────────────────────────
  {
    id: 'chem-s028-q1',
    stimulusId: 'chem-s028',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'medium',
    stem: 'Based on the data, what is the enthalpy change of neutralization, in kJ per mole of water formed?',
    options: ['−56 kJ/mol', '+56 kJ/mol', '−28 kJ/mol', '−2.8 kJ/mol'],
    correctIndex: 0,
    explanation:
      'q(solution) = mcΔT = (100.0 g)(4.18 J/(g·°C))(6.7 °C) = 2.8 × 10³ J. Moles of water formed = 0.0500 L × 1.00 M = 0.0500 mol (HCl and NaOH react 1 : 1). The solution gained the heat the reaction released, so ΔH = −2.8 kJ ÷ 0.0500 mol = −56 kJ/mol. +56 has the wrong sign for a reaction that warms its surroundings, −28 divides by the 0.100 mol of reactants combined, and −2.8 kJ/mol is the heat in kJ before dividing by moles.',
  },
  {
    id: 'chem-s028-q2',
    stimulusId: 'chem-s028',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'hard',
    stem: 'The experiment is repeated with 100.0 mL of each solution instead of 50.0 mL, at the same concentrations and starting temperature. What temperature change is expected?',
    options: [
      'About 6.7 °C, the same as before',
      'About 13.4 °C, twice as large as before',
      'About 3.4 °C, half as large as before',
      'About 26.8 °C, four times as large as before',
    ],
    correctIndex: 0,
    explanation:
      'Doubling both volumes doubles the moles that react, so twice as much heat is released, but it also doubles the mass of solution that absorbs it. ΔT = q/(mc) stays the same, about 6.7 °C. Twice as large counts the extra heat but not the extra mass, half as large counts the extra mass but not the extra heat, and four times as large doubles the heat for each reactant separately.',
  },

  // ── Set chem-s029: bond enthalpies ─────────────────────────────────────
  {
    id: 'chem-s029-q1',
    stimulusId: 'chem-s029',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'medium',
    stem: 'Based on the table, what is the approximate enthalpy change for N₂(g) + 3H₂(g) → 2NH₃(g)?',
    options: ['−93 kJ', '+93 kJ', '+1080 kJ', '−2346 kJ'],
    correctIndex: 0,
    explanation:
      'ΔH ≈ Σ(bonds broken) − Σ(bonds formed). Broken: 1 N≡N + 3 H–H = 945 + 3(436) = 2253 kJ. Formed: 2 NH₃ × 3 N–H = 6(391) = 2346 kJ. ΔH ≈ 2253 − 2346 = −93 kJ. +93 kJ subtracts in the wrong order, +1080 kJ counts only three N–H bonds instead of six, and −2346 kJ counts the bonds formed but not the bonds broken.',
  },
  {
    id: 'chem-s029-q2',
    stimulusId: 'chem-s029',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'medium',
    stem: 'Based on the table, what is the approximate enthalpy change for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)?',
    options: ['−802 kJ', '+802 kJ', '−374 kJ', '−3450 kJ'],
    correctIndex: 0,
    explanation:
      'Broken: 4 C–H + 2 O=O = 4(413) + 2(498) = 1652 + 996 = 2648 kJ. Formed: 2 C=O + 4 O–H = 2(799) + 4(463) = 1598 + 1852 = 3450 kJ. ΔH ≈ 2648 − 3450 = −802 kJ. +802 kJ reverses the subtraction, −374 kJ counts only one O=O and two O–H bonds (2150 − 2524 = −374), and −3450 kJ counts only the bonds formed.',
  },
  {
    id: 'chem-s029-q3',
    stimulusId: 'chem-s029',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'hard',
    stem: 'The measured ΔH° for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) is −890 kJ. Which statement best accounts for the difference between this value and the estimate from the table?',
    options: [
      'Condensing the water vapor to liquid releases more energy, and the gas-phase bond enthalpies do not include it.',
      'Liquid water has stronger O–H bonds than water vapor, so forming the liquid releases more bond energy.',
      'The measured value includes energy for breaking the O=O bonds in O₂, which the estimate leaves out.',
      'The table treats CO₂ as having C–O single bonds, so the estimate undercounts the energy released as CO₂ forms.',
    ],
    correctIndex: 0,
    explanation:
      'The bond-enthalpy estimate (−802 kJ) describes gas-phase molecules, so it gives the ΔH for forming H₂O(g). Forming liquid water also releases the energy of the hydrogen bonds that form when 2 mol of vapor condense (about 2 × 44 = 88 kJ), giving about −890 kJ. The covalent O–H bonds are essentially the same in the liquid and the gas, the estimate does include breaking two O=O bonds (996 kJ), and the table gives the C=O value for CO₂ (799 kJ/mol), which the estimate uses.',
  },

  // ── Set chem-s030: Hess's law ──────────────────────────────────────────
  {
    id: 'chem-s030-q1',
    stimulusId: 'chem-s030',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'easy',
    stem: 'Based on reaction 2, what is ΔH° for 2H₂O(l) → 2H₂(g) + O₂(g)?',
    options: ['+571.6 kJ', '−571.6 kJ', '+285.8 kJ', '−285.8 kJ'],
    correctIndex: 0,
    explanation:
      'Reversing reaction 2 changes the sign of ΔH (+285.8 kJ), and doubling the equation doubles ΔH: 2 × (+285.8) = +571.6 kJ. −571.6 kJ doubles but forgets to reverse the sign, +285.8 kJ reverses but forgets to double, and −285.8 kJ does neither.',
  },
  {
    id: 'chem-s030-q2',
    stimulusId: 'chem-s030',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'hard',
    stem: 'Using the three reactions, what is ΔH° for C(s) + 2H₂(g) → CH₄(g)?',
    options: ['−74.8 kJ', '+74.8 kJ', '+211.0 kJ', '−1569.6 kJ'],
    correctIndex: 0,
    explanation:
      'Keep reaction 1 (−393.5 kJ), double reaction 2 (2 × −285.8 = −571.6 kJ) and reverse reaction 3 (+890.3 kJ). Adding them cancels the CO₂, H₂O and O₂: ΔH° = −393.5 − 571.6 + 890.3 = −74.8 kJ. +74.8 kJ has the wrong sign, +211.0 kJ uses reaction 2 only once, and −1569.6 kJ adds all three reactions without reversing reaction 3.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u6-001',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'easy',
    stem: 'An instant cold pack contains solid NH₄Cl and a pouch of water. When the pouch is broken, the NH₄Cl dissolves and the pack feels cold. Which statement describes the dissolving process?',
    options: [
      'It is endothermic; thermal energy flows from the water into the dissolving solid system.',
      'It is exothermic; thermal energy flows from the dissolving system into the water.',
      'It is endothermic; thermal energy flows from the dissolving system into the water.',
      'It is exothermic; cold flows from the dissolving solid into the surrounding water.',
    ],
    correctIndex: 0,
    explanation:
      'The water and the pack (the surroundings) cool because they give thermal energy to the dissolving NH₄Cl (the system), so the process absorbs heat and is endothermic. An exothermic process would warm the pack. In an endothermic process heat flows into the system, not out of it, and "cold" is not a form of energy that flows.',
  },
  {
    id: 'chem-u6-002',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'easy',
    stem: 'A hot block of copper is placed in cool water in an insulated container. Which statement is true once the system reaches thermal equilibrium?',
    options: [
      'The copper and the water are at the same temperature.',
      'The copper and the water have the same thermal energy.',
      'The temperatures of the copper and the water changed by equal amounts.',
      'The copper is still warmer, because metals hold heat longer.',
    ],
    correctIndex: 0,
    explanation:
      'Heat flows from the hotter object to the cooler one until their temperatures are equal; that is thermal equilibrium. The heat lost by the copper equals the heat gained by the water, but their thermal energies and their temperature changes differ because their masses and specific heats differ. Copper does not stay warmer once equilibrium is reached.',
  },
  {
    id: 'chem-u6-003',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'easy',
    stem: 'How much heat is needed to raise the temperature of 25.0 g of aluminum (specific heat 0.897 J/(g·°C)) by 10.0 °C?',
    options: ['224 J', '22.4 J', '279 J', '1.05 × 10³ J'],
    correctIndex: 0,
    explanation:
      'q = mcΔT = (25.0 g)(0.897 J/(g·°C))(10.0 °C) = 224 J. 22.4 J leaves out ΔT, 279 J divides by the specific heat instead of multiplying (25.0 × 10.0 ÷ 0.897), and 1.05 × 10³ J uses the specific heat of water, 4.18 J/(g·°C).',
  },
  {
    id: 'chem-u6-004',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'medium',
    stem: 'A 100.0 g block of iron (specific heat 0.449 J/(g·°C)) at 90.0 °C is placed in 100.0 g of water (specific heat 4.18 J/(g·°C)) at 20.0 °C in an insulated container. What is the final temperature?',
    options: ['26.8 °C', '55.0 °C', '83.2 °C', '20.0 °C'],
    correctIndex: 0,
    explanation:
      'Heat lost by iron = heat gained by water: (100.0)(0.449)(90.0 − T) = (100.0)(4.18)(T − 20.0). So 4041 − 44.9T = 418T − 8360, giving T = 12401 ÷ 462.9 = 26.8 °C. The final temperature is close to the water\'s because water has the much larger specific heat. 55.0 °C is a simple average that ignores the specific heats, 83.2 °C swaps them, and 20.0 °C assumes the iron cannot warm the water at all.',
  },
  {
    id: 'chem-u6-005',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'medium',
    stem: 'Using ΔH°f values of CO₂(g) = −393.5 kJ/mol, H₂O(l) = −285.8 kJ/mol and C₂H₅OH(l) = −277.7 kJ/mol, what is ΔH° for C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)?',
    options: ['−1366.7 kJ', '+1366.7 kJ', '−401.6 kJ', '−1922.1 kJ'],
    correctIndex: 0,
    explanation:
      'ΔH° = ΣΔH°f(products) − ΣΔH°f(reactants) = [2(−393.5) + 3(−285.8)] − [(−277.7) + 3(0)] = −787.0 − 857.4 + 277.7 = −1366.7 kJ. +1366.7 kJ subtracts in the wrong order, −401.6 kJ ignores the coefficients, and −1922.1 kJ adds the ethanol term instead of subtracting it. O₂(g) is an element in its standard state, so its ΔH°f is zero.',
  },
  {
    id: 'chem-u6-006',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'hard',
    stem: 'A student measures the enthalpy change of an exothermic reaction in a foam cup without a lid, and some heat escapes to the room before the highest temperature is reached. How does this affect the experimental ΔH?',
    options: [
      'The calculated ΔH is less negative than the true value, because the measured temperature rise is too small.',
      'The calculated ΔH is more negative than the true value, because the measured temperature rise is too small.',
      'The calculated ΔH is less negative than the true value, because the measured temperature rise is too large.',
      'The calculated ΔH is not affected, because the heat that escapes is part of the reaction\'s enthalpy change.',
    ],
    correctIndex: 0,
    explanation:
      'Heat that escapes is not counted in q = mcΔT, so the measured ΔT and q are too small. ΔH = −q/n then has too small a magnitude: it is negative but closer to zero than the true value. A smaller q cannot make ΔH more negative, escaping heat lowers the temperature rise rather than raising it, and heat that leaves the calorimeter is no longer measured even though the reaction released it.',
  },
  {
    id: 'chem-u6-007',
    unit: 'unit-6',
    topicSlug: 'enthalpy-calorimetry',
    difficulty: 'hard',
    stem: 'Dissolving CaCl₂(s) in water is strongly exothermic. Which particle-level explanation is consistent with this?',
    options: [
      'The energy released as ions are attracted to water molecules is greater than the energy needed to separate the ions and to separate water molecules.',
      'The energy needed to separate the Ca²⁺ and Cl⁻ ions is released again when they form new ionic bonds with each other in solution.',
      'Separating the Ca²⁺ and Cl⁻ ions from the crystal releases energy, because breaking ionic bonds is an exothermic process.',
      'Water molecules break apart into H⁺ and OH⁻ ions around the dissolved ions, and forming these new ions releases energy.',
    ],
    correctIndex: 0,
    explanation:
      'Dissolving has two energy-absorbing parts (separating the ions of the lattice and moving water molecules apart) and one energy-releasing part (ion–dipole attractions between the ions and water). The process is exothermic when the ion–dipole attractions release more energy than the separations absorb, which happens for CaCl₂ because the small, doubly charged Ca²⁺ attracts water strongly. Breaking any attraction absorbs energy. The dissolved ions are surrounded by water, not re-bonded to each other, and water does not ionize appreciably.',
  },
]
