/**
 * AP Chemistry diagnostic v2 — Unit 9: Thermodynamics and Electrochemistry
 * (CED 9.1–9.11). Four stimulus sets (a galvanic cell, thermodynamic data,
 * electroplating, ΔG° versus temperature) plus standalone items. Off-exam
 * material is not used: no quantitative Nernst, no ΔG = ΔG° + RT ln Q, no
 * electrode sign labels, no commercial batteries, no microstates.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { SVG_CHEM_S041 } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s041',
    title: 'A cobalt–silver galvanic cell',
    kind: 'figure',
    content:
      'A galvanic cell is built from a cobalt electrode in 1.0 M Co(NO₃)₂(aq) and a silver electrode in 1.0 M AgNO₃(aq) at 25 °C. The electrodes are connected by a wire through a voltmeter, and the solutions are connected by a salt bridge containing KNO₃(aq).\n\n' +
      '| Half-reaction | E° (V) |\n' +
      '| --- | --- |\n' +
      '| Ag⁺(aq) + e⁻ → Ag(s) | +0.80 |\n' +
      '| Co²⁺(aq) + 2e⁻ → Co(s) | −0.28 |',
    svg: SVG_CHEM_S041,
  },
  {
    id: 'chem-s042',
    title: 'Thermodynamic data for the decomposition of calcium carbonate',
    kind: 'table',
    content:
      'Calcium carbonate decomposes when heated: CaCO₃(s) → CaO(s) + CO₂(g). The table gives standard data at 298 K. Assume ΔH° and ΔS° do not change with temperature.\n\n' +
      '| Substance | ΔH°f (kJ/mol) | S° (J/(mol·K)) |\n' +
      '| --- | --- | --- |\n' +
      '| CaCO₃(s) | −1207.0 | 92.9 |\n' +
      '| CaO(s) | −635.1 | 39.8 |\n' +
      '| CO₂(g) | −393.5 | 213.7 |',
  },
  {
    id: 'chem-s043',
    title: 'Silver-plating a key',
    kind: 'passage',
    content:
      'A student silver-plates a brass key. The key and a bar of pure silver are placed in 1.0 M AgNO₃(aq) and connected to a direct-current power supply, so that silver dissolves from the bar and deposits on the key. A constant current of 0.500 A flows for 965 s. Assume all of the current is used to deposit silver on the key (Ag: 107.87 g/mol; F = 96,485 C/mol e⁻).',
  },
  {
    id: 'chem-s044',
    title: 'ΔG° versus temperature for the synthesis of methanol',
    kind: 'graph',
    content:
      'The graph shows the standard free-energy change for CO(g) + 2H₂(g) → CH₃OH(g) at temperatures from 200 K to 700 K. Over this range ΔH° and ΔS° are nearly constant, so the points lie on a straight line.',
    chart: {
      title: 'ΔG° of CO(g) + 2H₂(g) → CH₃OH(g) versus temperature',
      kind: 'line',
      xLabel: 'Temperature',
      xUnit: 'K',
      yLabel: 'ΔG°',
      yUnit: 'kJ/mol',
      xValues: [200, 300, 400, 500, 600, 700],
      yValues: [-46.9, -25.0, -3.1, 18.8, 40.7, 62.6],
      seriesLabel: 'ΔG°',
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s041: galvanic cell ───────────────────────────────────────
  {
    id: 'chem-s041-q1',
    stimulusId: 'chem-s041',
    unit: 'unit-9',
    topicSlug: 'galvanic-cells-potentials',
    difficulty: 'easy',
    stem: 'As the cell operates, how do electrons move?',
    options: [
      'Through the wire, from the Co electrode to the Ag electrode',
      'Through the wire, from the Ag electrode to the Co electrode',
      'Through the salt bridge, from the Co half-cell to the Ag half-cell',
      'Through the salt bridge, from the Ag half-cell to the Co half-cell',
    ],
    correctIndex: 0,
    explanation:
      'Ag⁺ has the more positive reduction potential, so Ag⁺ is reduced at the silver electrode (the cathode) and Co is oxidized at the cobalt electrode (the anode): Co(s) + 2Ag⁺(aq) → Co²⁺(aq) + 2Ag(s), E° = 0.80 − (−0.28) = 1.08 V. Electrons released by Co travel through the external wire to the Ag electrode. The salt bridge carries ions, not electrons.',
  },
  {
    id: 'chem-s041-q2',
    stimulusId: 'chem-s041',
    unit: 'unit-9',
    topicSlug: 'nernst-equation-concentration',
    difficulty: 'hard',
    stem: 'Which change would make the measured cell voltage greater than 1.08 V?',
    options: [
      'Lowering [Co²⁺] in the cobalt half-cell',
      'Lowering [Ag⁺] in the silver half-cell',
      'Using a cobalt electrode with twice the surface area',
      'Doubling the concentration of KNO₃ in the salt bridge',
    ],
    correctIndex: 0,
    explanation:
      'For Co(s) + 2Ag⁺(aq) → Co²⁺(aq) + 2Ag(s), Q = [Co²⁺]/[Ag⁺]². Lowering [Co²⁺] makes Q < 1, which makes the reaction more favorable than under standard conditions, so E > E° = 1.08 V. Lowering [Ag⁺] raises Q above 1 and lowers E. Electrode size and the salt-bridge electrolyte do not appear in Q and do not change the cell potential.',
  },

  // ── Set chem-s042: ΔH°, ΔS° and temperature ────────────────────────────
  {
    id: 'chem-s042-q1',
    stimulusId: 'chem-s042',
    unit: 'unit-9',
    topicSlug: 'entropy-second-law',
    difficulty: 'medium',
    stem: 'What is ΔS° for the decomposition of 1 mol of CaCO₃?',
    options: ['+160.6 J/K', '−160.6 J/K', '+346.4 J/K', '+81.0 J/K'],
    correctIndex: 0,
    explanation:
      'ΔS° = ΣS°(products) − ΣS°(reactants) = (39.8 + 213.7) − 92.9 = +160.6 J/K. The sign is positive, as expected when a solid produces a gas. −160.6 J/K subtracts in the wrong order, +346.4 J/K adds all three values, and +81.0 J/K subtracts the S° of CaO instead of adding it (213.7 − 92.9 − 39.8).',
  },
  {
    id: 'chem-s042-q2',
    stimulusId: 'chem-s042',
    unit: 'unit-9',
    topicSlug: 'gibbs-free-energy',
    difficulty: 'hard',
    stem: 'Under standard conditions, at which temperatures is the decomposition of CaCO₃ thermodynamically favorable?',
    options: [
      'Above about 1110 K',
      'Below about 1110 K',
      'Above about 1.11 K',
      'At all temperatures, because ΔS° is positive',
    ],
    correctIndex: 0,
    explanation:
      'ΔH° = (−635.1 − 393.5) − (−1207.0) = +178.4 kJ and ΔS° = +160.6 J/K. ΔG° = ΔH° − TΔS° is negative only when TΔS° > ΔH°, that is above T = 178,400 J ÷ 160.6 J/K = 1110 K. Below 1110 K the positive ΔH° wins. 1.11 K comes from dividing kJ by J without converting units, and a positive ΔS° makes the reaction favorable at all temperatures only when ΔH° is negative.',
  },

  // ── Set chem-s043: electroplating ──────────────────────────────────────
  {
    id: 'chem-s043-q1',
    stimulusId: 'chem-s043',
    unit: 'unit-9',
    topicSlug: 'electrolytic-cells-faraday',
    difficulty: 'easy',
    stem: 'Which half-reaction occurs at the surface of the key?',
    options: ['Ag⁺(aq) + e⁻ → Ag(s)', 'Ag(s) → Ag⁺(aq) + e⁻', 'Cu(s) → Cu²⁺(aq) + 2e⁻', '2H₂O(l) + 2e⁻ → H₂(g) + 2OH⁻(aq)'],
    correctIndex: 0,
    explanation:
      'Silver deposits on the key, so Ag⁺ ions gain electrons there: the key is the cathode, where reduction occurs. Ag(s) → Ag⁺ + e⁻ is the oxidation at the silver bar (the anode). The copper in the brass is not oxidized, because the key is where electrons are supplied, and the stem states that all of the current deposits silver, so water is not reduced.',
  },
  {
    id: 'chem-s043-q2',
    stimulusId: 'chem-s043',
    unit: 'unit-9',
    topicSlug: 'electrolytic-cells-faraday',
    difficulty: 'hard',
    stem: 'What mass of silver is deposited on the key?',
    options: ['0.539 g', '0.270 g', '1.08 g', '0.00500 g'],
    correctIndex: 0,
    explanation:
      'Charge = I × t = 0.500 A × 965 s = 482.5 C. Moles of electrons = 482.5 C ÷ 96,485 C/mol = 5.00 × 10⁻³ mol. Each Ag⁺ needs one electron, so 5.00 × 10⁻³ mol Ag × 107.87 g/mol = 0.539 g. 0.270 g assumes two electrons per silver ion, 1.08 g assumes half an electron per ion, and 0.00500 g reports the moles as if they were grams.',
  },

  // ── Set chem-s044: ΔG° versus T ────────────────────────────────────────
  {
    id: 'chem-s044-q1',
    stimulusId: 'chem-s044',
    unit: 'unit-9',
    topicSlug: 'gibbs-free-energy',
    difficulty: 'medium',
    stem: 'Which statement about ΔS° for the reaction is supported by the graph?',
    options: [
      'ΔS° is negative, because ΔG° increases steadily as the temperature increases.',
      'ΔS° is positive, because ΔG° increases as the temperature increases.',
      'ΔS° is negative, because ΔG° is negative at the lowest temperatures.',
      'ΔS° is positive, because ΔG° is positive at the highest temperatures.',
    ],
    correctIndex: 0,
    explanation:
      'ΔG° = ΔH° − TΔS°, so the slope of ΔG° versus T is −ΔS°. The line rises by 21.9 kJ/mol per 100 K, so −ΔS° = +0.219 kJ/K and ΔS° = −219 J/K, as expected when 3 mol of gas become 1 mol. A rising line means a negative ΔS°, not a positive one. The sign of ΔG° at a single temperature depends on ΔH° as well, so it cannot by itself show the sign of ΔS°.',
  },
  {
    id: 'chem-s044-q2',
    stimulusId: 'chem-s044',
    unit: 'unit-9',
    topicSlug: 'spontaneity-free-energy-applications',
    difficulty: 'hard',
    stem: 'Based on the graph, which best describes the equilibrium constant K for the reaction at 300 K? (R = 8.314 J/(mol·K))',
    options: [
      'K is greater than 1, about 2 × 10⁴',
      'K is less than 1, about 5 × 10⁻⁵',
      'K is greater than 1, about 1 × 10¹⁰',
      'K is equal to 1, because ΔG° is close to zero',
    ],
    correctIndex: 0,
    explanation:
      'At 300 K the graph gives ΔG° = −25.0 kJ/mol. ΔG° = −RT ln K, so ln K = 25,000 ÷ (8.314 × 300) = 10.0 and K = e¹⁰ ≈ 2 × 10⁴. A negative ΔG° means K > 1; 5 × 10⁻⁵ is the reciprocal, from a sign error. 1 × 10¹⁰ treats ln K = 10 as log K = 10, and ΔG° = −25 kJ/mol is far from zero at this temperature (K = 1 only near 414 K, where the line crosses zero).',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u9-002',
    unit: 'unit-9',
    topicSlug: 'galvanic-cells-thermo-applications',
    difficulty: 'easy',
    stem: 'A redox reaction has E° = +0.20 V with n = 2. Which statement about ΔG° and K for the reaction is correct?',
    options: [
      'ΔG° is negative and K is greater than 1.',
      'ΔG° is positive and K is greater than 1.',
      'ΔG° is negative and K is less than 1.',
      'ΔG° is positive and K is less than 1.',
    ],
    correctIndex: 0,
    explanation:
      'ΔG° = −nFE° = −(2)(96,485 C/mol)(0.20 V) = −38.6 kJ/mol, which is negative. A negative ΔG° corresponds, through ΔG° = −RT ln K, to ln K > 0 and K > 1. A positive E° always pairs a negative ΔG° with K > 1, so the other combinations each get one of the two signs wrong.',
  },
  {
    id: 'chem-u9-003',
    unit: 'unit-9',
    topicSlug: 'entropy-second-law',
    difficulty: 'easy',
    stem: 'Using standard molar entropies of C(s, graphite) = 5.7, O₂(g) = 205.2 and CO₂(g) = 213.8 J/(mol·K), what is ΔS° for C(s) + O₂(g) → CO₂(g)?',
    options: ['+2.9 J/K', '−2.9 J/K', '+424.7 J/K', '+8.6 J/K'],
    correctIndex: 0,
    explanation:
      'ΔS° = S°(CO₂) − [S°(C) + S°(O₂)] = 213.8 − (5.7 + 205.2) = +2.9 J/K. The value is small because one mole of gas is consumed and one mole of gas forms. −2.9 J/K subtracts in the wrong order, +424.7 J/K adds all three values, and +8.6 J/K leaves out the graphite.',
  },
  {
    id: 'chem-u9-004',
    unit: 'unit-9',
    topicSlug: 'spontaneity-free-energy-applications',
    difficulty: 'easy',
    stem: 'A reaction has ΔG° = +10 kJ/mol at 298 K. Which statement about its equilibrium constant is correct?',
    options: [
      'K is less than 1, so the reactants are favored at equilibrium.',
      'K is greater than 1, so the products are favored at equilibrium.',
      'K is greater than 1, because a positive ΔG° means energy is released.',
      'K is less than 1, so the reaction occurs only if a catalyst is added.',
    ],
    correctIndex: 0,
    explanation:
      'ΔG° = −RT ln K, so a positive ΔG° gives ln K < 0 and K < 1 (here K = e^(−10,000/(8.314 × 298)) ≈ 0.018). K < 1 means the equilibrium mixture contains more reactants than products. A positive ΔG° does not mean energy is released, and a catalyst changes how fast equilibrium is reached, not whether the reaction occurs or the value of K.',
  },
  {
    id: 'chem-u9-005',
    unit: 'unit-9',
    topicSlug: 'spontaneity-free-energy-applications',
    difficulty: 'medium',
    stem: 'The conversion of diamond to graphite has ΔG° < 0 at 25 °C and 1 atm, yet diamonds show no measurable change over millions of years. Which statement best explains this?',
    options: [
      'The conversion has a very large activation energy, so it is thermodynamically favorable but extremely slow.',
      'The conversion has ΔG° < 0, so it must already be at equilibrium, and no further change can be observed.',
      'The conversion is endothermic, so it can take place only while heat is supplied from the surroundings.',
      'The conversion releases so little energy that it must absorb heat from the surroundings before it starts.',
    ],
    correctIndex: 0,
    explanation:
      'A negative ΔG° says graphite is favored, but says nothing about rate. Rearranging the strong covalent network of diamond requires breaking many C–C bonds, so the activation energy is enormous and the process is under kinetic control. ΔG° < 0 means the system is not at equilibrium. The conversion is in fact slightly exothermic, and a favorable process does not need a continuous heat supply; the size of the energy change does not decide whether a reaction starts.',
  },
  {
    id: 'chem-u9-006',
    unit: 'unit-9',
    topicSlug: 'gibbs-free-energy',
    difficulty: 'medium',
    stem: 'Solid NH₄NO₃ dissolves readily in water at 25 °C even though the process is endothermic (ΔH° > 0). Which statement explains why the process is thermodynamically favorable?',
    options: [
      'The entropy increase as ions disperse into the water makes TΔS° larger than ΔH°.',
      'The heat absorbed from the water makes ΔH° negative once the solid dissolves.',
      'The ion–water attractions release more energy than separating the ions absorbs.',
      'The entropy change is small, so ΔG° is set almost entirely by the value of ΔH°.',
    ],
    correctIndex: 0,
    explanation:
      'ΔG° = ΔH° − TΔS°. Ions leaving an ordered crystal and spreading through the solution give a large positive ΔS°, so at 25 °C the −TΔS° term outweighs the positive ΔH° and ΔG° < 0. Absorbing heat is what makes ΔH° positive, not negative. If the ion–water attractions released more energy than the separations absorbed, the process would be exothermic, contradicting ΔH° > 0. If ΔG° were set by a positive ΔH°, it would be positive and the process unfavorable.',
  },
  {
    id: 'chem-u9-007',
    unit: 'unit-9',
    topicSlug: 'galvanic-cells-thermo-applications',
    difficulty: 'medium',
    stem: 'A galvanic cell reaction transfers 2 mol of electrons per mole of reaction and has E° = +0.62 V. What is ΔG° for the reaction? (F = 96,485 C/mol e⁻)',
    options: ['−120 kJ/mol', '−60 kJ/mol', '+120 kJ/mol', '−0.12 kJ/mol'],
    correctIndex: 0,
    explanation:
      'ΔG° = −nFE° = −(2)(96,485 C/mol)(0.62 V) = −1.20 × 10⁵ J/mol = −120 kJ/mol (1 V × 1 C = 1 J). −60 kJ/mol leaves out n = 2, +120 kJ/mol drops the negative sign (a positive E° always gives a negative ΔG°), and −0.12 kJ/mol divides by 10⁶ instead of 10³.',
  },
  {
    id: 'chem-u9-008',
    unit: 'unit-9',
    topicSlug: 'electrolytic-cells-faraday',
    difficulty: 'hard',
    stem: 'How long must a constant current of 2.00 A flow to deposit 1.00 g of nickel (58.69 g/mol) from a solution of Ni²⁺? (F = 96,485 C/mol e⁻)',
    options: ['1.64 × 10³ s', '822 s', '3.29 × 10³ s', '27.4 s'],
    correctIndex: 0,
    explanation:
      'mol Ni = 1.00 g ÷ 58.69 g/mol = 0.01704 mol; Ni²⁺ + 2e⁻ → Ni, so 0.03408 mol e⁻. Charge = 0.03408 × 96,485 = 3288 C, and t = q/I = 3288 C ÷ 2.00 A = 1.64 × 10³ s. 822 s uses one electron per Ni²⁺, 3.29 × 10³ s forgets to divide by the 2.00 A current, and 27.4 is the time in minutes reported as seconds.',
  },
  {
    id: 'chem-u9-009',
    unit: 'unit-9',
    topicSlug: 'spontaneity-free-energy-applications',
    difficulty: 'hard',
    stem: 'At 298 K a reaction in solution reaches equilibrium with K = 1.0 × 10⁻³, and some product is present in the equilibrium mixture. A student claims that ΔG° must be negative because some product forms. What is ΔG°, and is the claim correct? (R = 8.314 J/(mol·K))',
    options: [
      '+17.1 kJ/mol; the claim is wrong, because some product forms even when K is less than 1',
      '−17.1 kJ/mol; the claim is right, because any reaction that forms product has a negative ΔG°',
      '+7.43 kJ/mol; the claim is wrong, because some product forms even when K is less than 1',
      '+2.48 kJ/mol; the claim is wrong, because ΔG° depends only on R and T, not on K',
    ],
    correctIndex: 0,
    explanation:
      'ΔG° = −RT ln K = −(8.314)(298)(ln 1.0 × 10⁻³) = −(2477.6)(−6.91) = +1.71 × 10⁴ J/mol = +17.1 kJ/mol. A positive ΔG° means K < 1, so the equilibrium mixture favors reactants, but it still contains some product; forming some product does not require ΔG° < 0. +7.43 kJ/mol uses log K (−3.00) in place of ln K, and +2.48 kJ/mol is RT alone, without the ln K factor.',
  },
]
