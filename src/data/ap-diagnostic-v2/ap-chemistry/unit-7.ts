/**
 * AP Chemistry diagnostic v2 — Unit 7: Equilibrium (CED 7.1–7.12).
 * Four stimulus sets (concentrations approaching equilibrium, particle
 * diagrams, Ksp data, a cobalt chloride color equilibrium) plus standalone
 * items. No Kp ↔ Kc conversion or Henry's-law equilibria (7.3 exclusions) and
 * no solubility-versus-pH calculations (8.11 exclusion).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { SVG_CHEM_S032 } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s031',
    title: 'N₂O₄ and NO₂ approaching equilibrium',
    kind: 'graph',
    content:
      'A sample of N₂O₄(g) at 0.1000 M, with no NO₂ present, is suddenly brought to a new constant temperature in a sealed cell. The reaction N₂O₄(g) ⇌ 2NO₂(g) is very fast, so both concentrations are followed with a fast spectroscopic method and recorded every 10 microseconds (μs).',
    chart: {
      title: 'Concentrations versus time',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'μs',
      yLabel: 'Concentration',
      yUnit: 'M',
      xValues: [0, 10, 20, 30, 40, 50, 60, 70, 80],
      yValues: [0.1, 0.0887, 0.0838, 0.0816, 0.0807, 0.0803, 0.0801, 0.08, 0.08],
      seriesLabel: '[N₂O₄]',
      comparisonSeries: [{ label: '[NO₂]', yValues: [0, 0.0226, 0.0324, 0.0368, 0.0386, 0.0394, 0.0398, 0.04, 0.04] }],
    },
  },
  {
    id: 'chem-s032',
    title: 'Particle diagrams for A₂(g) + B₂(g) ⇌ 2AB(g)',
    kind: 'figure',
    content:
      'Both boxes represent mixtures of the same volume at the same temperature for the reaction A₂(g) + B₂(g) ⇌ 2AB(g). Box 1 is at equilibrium and contains 2 A₂, 2 B₂ and 4 AB molecules. Box 2 is a different mixture and contains 1 A₂, 3 B₂ and 2 AB molecules. A atoms are shaded and B atoms are open.',
    svg: SVG_CHEM_S032,
  },
  {
    id: 'chem-s033',
    title: 'Solubility products of three sulfates at 25 °C',
    kind: 'table',
    content:
      'The table gives Ksp values at 25 °C for three slightly soluble sulfates. Each dissolves as MSO₄(s) ⇌ M²⁺(aq) + SO₄²⁻(aq).\n\n' +
      '| Salt | Ksp at 25 °C |\n' +
      '| --- | --- |\n' +
      '| BaSO₄ | 1.1 × 10⁻¹⁰ |\n' +
      '| SrSO₄ | 3.4 × 10⁻⁷ |\n' +
      '| CaSO₄ | 4.9 × 10⁻⁵ |',
  },
  {
    id: 'chem-s034',
    title: 'A cobalt(II) chloride color equilibrium',
    kind: 'passage',
    content:
      'In hydrochloric acid, pink Co(H₂O)₆²⁺ and blue CoCl₄²⁻ are in equilibrium:\n\n' +
      'Co(H₂O)₆²⁺(aq) + 4Cl⁻(aq) ⇌ CoCl₄²⁻(aq) + 6H₂O(l)\n\n' +
      'At room temperature the solution is violet, a mixture of the two colors. A student places one test tube of the solution in boiling water and another in an ice bath. The heated solution turns deep blue, and the cooled solution turns pink. Both changes reverse when the tubes return to room temperature. Silver chloride, AgCl, is insoluble in water.',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s031: approach to equilibrium ─────────────────────────────
  {
    id: 'chem-s031-q1',
    stimulusId: 'chem-s031',
    unit: 'unit-7',
    topicSlug: 'intro-equilibrium',
    difficulty: 'easy',
    stem: 'Which statement describes the system at 70 μs?',
    options: [
      'Both reactions continue, and their rates are equal.',
      'The forward and reverse reactions have both stopped.',
      'The net forward reaction is still converting N₂O₄ into NO₂.',
      'The concentrations of N₂O₄ and NO₂ have become equal.',
    ],
    correctIndex: 0,
    explanation:
      'By 70 μs the concentrations no longer change, so the system is at equilibrium. Equilibrium is dynamic: N₂O₄ keeps dissociating and NO₂ keeps combining, at equal rates, so there is no net change. The graph is flat after about 60 μs, so there is no longer a net forward change; neither reaction stops, and the graph shows [N₂O₄] = 0.0800 M and [NO₂] = 0.0400 M, so constant concentrations do not mean equal concentrations.',
  },
  {
    id: 'chem-s031-q2',
    stimulusId: 'chem-s031',
    unit: 'unit-7',
    topicSlug: 'equilibrium-constants-expressions',
    difficulty: 'medium',
    stem: 'Based on the data, what is the value of Kc for N₂O₄(g) ⇌ 2NO₂(g) at this temperature?',
    options: ['0.0200', '0.500', '50.0', '0.0160'],
    correctIndex: 0,
    explanation:
      'Kc = [NO₂]²/[N₂O₄] at equilibrium = (0.0400)² ÷ 0.0800 = 0.00160 ÷ 0.0800 = 0.0200. 0.500 forgets to square [NO₂], 50.0 is the reciprocal (Kc for the reverse reaction), and 0.0160 uses the initial [N₂O₄] of 0.1000 M instead of the equilibrium value.',
  },

  // ── Set chem-s032: particle diagrams ───────────────────────────────────
  {
    id: 'chem-s032-q1',
    stimulusId: 'chem-s032',
    unit: 'unit-7',
    topicSlug: 'equilibrium-constants-expressions',
    difficulty: 'medium',
    stem: 'Based on Box 1, what is the value of the equilibrium constant K for A₂(g) + B₂(g) ⇌ 2AB(g)?',
    options: ['4', '1', '0.25', '16'],
    correctIndex: 0,
    explanation:
      'K = [AB]²/([A₂][B₂]). The moles of gas are the same on both sides, so the volume cancels and particle counts can be used directly: K = 4² ÷ (2 × 2) = 16 ÷ 4 = 4. 1 forgets to square [AB], 0.25 is the reciprocal, and 16 leaves out the denominator.',
  },
  {
    id: 'chem-s032-q2',
    stimulusId: 'chem-s032',
    unit: 'unit-7',
    topicSlug: 'reaction-quotient-le-chatelier',
    difficulty: 'hard',
    stem: 'Which statement correctly describes what happens in Box 2 as it reaches equilibrium?',
    options: [
      'Q is less than K, so the reaction proceeds to the right, forming more AB.',
      'Q is greater than K, so the reaction proceeds to the left, forming more A₂ and B₂.',
      'Q is equal to K, so Box 2 is already at equilibrium and its contents do not change.',
      'Q is less than K, so the reaction proceeds to the left, forming more A₂ and B₂.',
    ],
    correctIndex: 0,
    explanation:
      'For Box 2, Q = 2² ÷ (1 × 3) = 4/3 ≈ 1.3, which is less than K = 4. With too few products relative to reactants, the net reaction runs forward, converting A₂ and B₂ into AB until Q = K. A shift to the left happens only when Q > K. Box 2 has the same total number of A and B atoms as Box 1 but a different arrangement, so it is not at equilibrium.',
  },

  // ── Set chem-s033: Ksp ─────────────────────────────────────────────────
  {
    id: 'chem-s033-q1',
    stimulusId: 'chem-s033',
    unit: 'unit-7',
    topicSlug: 'solubility-ksp',
    difficulty: 'easy',
    stem: 'Which salt has the greatest molar solubility in pure water at 25 °C?',
    options: ['CaSO₄', 'SrSO₄', 'BaSO₄', 'All three are equally soluble'],
    correctIndex: 0,
    explanation:
      'All three salts dissolve into one cation and one anion, so molar solubility s = √Ksp and the salt with the largest Ksp is the most soluble: CaSO₄ (s ≈ 7.0 × 10⁻³ M). BaSO₄ has the smallest Ksp and is the least soluble. Comparing Ksp values directly works here only because the salts have the same ion ratio.',
  },
  {
    id: 'chem-s033-q2',
    stimulusId: 'chem-s033',
    unit: 'unit-7',
    topicSlug: 'solubility-ksp',
    difficulty: 'medium',
    stem: 'What is the molar solubility of BaSO₄ in pure water at 25 °C?',
    options: ['1.0 × 10⁻⁵ M', '1.1 × 10⁻¹⁰ M', '5.5 × 10⁻¹¹ M', '3.0 × 10⁻⁴ M'],
    correctIndex: 0,
    explanation:
      'BaSO₄(s) ⇌ Ba²⁺ + SO₄²⁻, so Ksp = s² and s = √(1.1 × 10⁻¹⁰) = 1.0 × 10⁻⁵ M. 1.1 × 10⁻¹⁰ M takes Ksp itself as the solubility, 5.5 × 10⁻¹¹ M divides Ksp by 2, and 3.0 × 10⁻⁴ M uses the expression Ksp = 4s³ for a salt such as CaF₂ that gives three ions.',
  },
  {
    id: 'chem-s033-q3',
    stimulusId: 'chem-s033',
    unit: 'unit-7',
    topicSlug: 'solubility-equilibrium',
    difficulty: 'hard',
    stem: 'What is the molar solubility of SrSO₄ in 0.10 M Na₂SO₄ at 25 °C?',
    options: ['3.4 × 10⁻⁶ M', '5.8 × 10⁻⁴ M', '3.4 × 10⁻⁷ M', '3.4 × 10⁻⁸ M'],
    correctIndex: 0,
    explanation:
      'The common ion SO₄²⁻ is already 0.10 M, so Ksp = [Sr²⁺][SO₄²⁻] = s(0.10 + s) ≈ 0.10s. Then s = 3.4 × 10⁻⁷ ÷ 0.10 = 3.4 × 10⁻⁶ M, far below the solubility in pure water. 5.8 × 10⁻⁴ M is the pure-water solubility (√Ksp), 3.4 × 10⁻⁷ M is Ksp itself, and 3.4 × 10⁻⁸ M multiplies by 0.10 instead of dividing.',
  },

  // ── Set chem-s034: cobalt chloride equilibrium ─────────────────────────
  {
    id: 'chem-s034-q1',
    stimulusId: 'chem-s034',
    unit: 'unit-7',
    topicSlug: 'le-chatelier-equilibrium-shifts',
    difficulty: 'medium',
    stem: 'Which conclusion is best supported by the observations?',
    options: [
      'The forward reaction is endothermic, so K increases as the temperature is raised.',
      'The forward reaction is exothermic, so K increases as the temperature rises.',
      'The forward reaction is endothermic, so K decreases as the temperature rises.',
      'Temperature changes the rates of reaction but cannot change the value of K.',
    ],
    correctIndex: 0,
    explanation:
      'Heating shifts the mixture toward blue CoCl₄²⁻, the product side. Adding heat favors the direction that absorbs heat, so the forward reaction is endothermic, and for an endothermic reaction K increases with temperature. An exothermic forward reaction would turn pink on heating. A shift toward products at higher T means K is larger, not smaller, and unlike concentration changes, temperature changes do change K.',
  },
  {
    id: 'chem-s034-q2',
    stimulusId: 'chem-s034',
    unit: 'unit-7',
    topicSlug: 'reaction-quotient-le-chatelier',
    difficulty: 'hard',
    stem: 'A few drops of AgNO₃(aq) are added to a violet sample at room temperature, and a white precipitate forms. What happens to the color of the solution, and why?',
    options: [
      'It becomes more pink, because removing the Cl⁻ ions makes Q greater than K.',
      'It becomes more blue, because adding Ag⁺ ions makes Q less than K.',
      'It becomes more pink, because removing Cl⁻ makes Q less than K.',
      'It does not change, because Ag⁺ does not appear in the expression for K.',
    ],
    correctIndex: 0,
    explanation:
      'Ag⁺ removes Cl⁻ as solid AgCl. In Q = [CoCl₄²⁻]/([Co(H₂O)₆²⁺][Cl⁻]⁴), a smaller [Cl⁻] makes the denominator smaller and Q larger than K, so the net reaction runs in reverse, forming more pink Co(H₂O)₆²⁺. Q < K would shift toward blue instead. Ag⁺ does not appear in the expression, but it changes [Cl⁻], which does.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u7-001',
    unit: 'unit-7',
    topicSlug: 'equilibrium-constants-expressions',
    difficulty: 'easy',
    stem: 'For A(g) ⇌ 2B(g), K = 25 at a certain temperature. What is K for 2B(g) ⇌ A(g) at the same temperature?',
    options: ['0.040', '25', '5.0', '625'],
    correctIndex: 0,
    explanation:
      'Reversing a reaction inverts its equilibrium constant: K = 1/25 = 0.040. 25 keeps the original value, 5.0 takes the square root (that would be K for ½A ⇌ B), and 625 squares K (that would be K for doubling the original equation).',
  },
  {
    id: 'chem-u7-002',
    unit: 'unit-7',
    topicSlug: 'equilibrium-constants-expressions',
    difficulty: 'easy',
    stem: 'What is the equilibrium-constant expression Kp for NH₄HS(s) ⇌ NH₃(g) + H₂S(g)?',
    options: [
      'Kp = P(NH₃) × P(H₂S)',
      'Kp = P(NH₃) × P(H₂S) ÷ P(NH₄HS)',
      'Kp = P(NH₄HS) ÷ [P(NH₃) × P(H₂S)]',
      'Kp = P(NH₃) + P(H₂S)',
    ],
    correctIndex: 0,
    explanation:
      'Pure solids are left out of equilibrium expressions, so Kp contains only the partial pressures of the two gaseous products, multiplied: Kp = P(NH₃) × P(H₂S). Including NH₄HS(s) is wrong because it is a solid, inverting gives the expression for the reverse reaction, and partial pressures are multiplied, not added.',
  },
  {
    id: 'chem-u7-003',
    unit: 'unit-7',
    topicSlug: 'le-chatelier-equilibrium-shifts',
    difficulty: 'easy',
    stem: 'In a reactor, CO(g) + 2H₂(g) ⇌ CH₃OH(g) is kept at constant temperature while CH₃OH is continuously removed from the mixture. What is the effect?',
    options: [
      'The net reaction keeps running forward, so more CH₃OH forms.',
      'The reaction keeps shifting toward reactants, so more CO and H₂ form.',
      'The value of K increases, so more CH₃OH forms in the reactor.',
      'Nothing changes, because removing a product does not affect Q.',
    ],
    correctIndex: 0,
    explanation:
      'Removing CH₃OH lowers Q = [CH₃OH]/([CO][H₂]²) below K, so the net reaction keeps running forward to restore equilibrium, and continuous removal keeps producing CH₃OH. A shift toward reactants would need Q > K. K depends only on temperature, which is constant, and a product concentration appears in Q, so removing it does change Q.',
  },
  {
    id: 'chem-u7-004',
    unit: 'unit-7',
    topicSlug: 'ice-tables-calculations',
    difficulty: 'medium',
    stem: 'For SO₂(g) + NO₂(g) ⇌ SO₃(g) + NO(g), Kc = 16 at a certain temperature. A flask initially contains 0.50 M SO₃ and 0.50 M NO and no SO₂ or NO₂. What is [SO₂] at equilibrium?',
    options: ['0.10 M', '0.40 M', '0.13 M', '0.031 M'],
    correctIndex: 0,
    explanation:
      'The reaction must run in reverse. ICE: SO₃ and NO each fall by x; SO₂ and NO₂ each rise by x. Kc = (0.50 − x)²/x² = 16, so (0.50 − x)/x = 4 and 0.50 = 5x, giving x = [SO₂] = 0.10 M. 0.40 M is the equilibrium [SO₃], 0.13 M sets x = 0.50/4 without subtracting x from the product side, and 0.031 M divides 0.50 by 16 without taking the square root.',
  },
  {
    id: 'chem-u7-005',
    unit: 'unit-7',
    topicSlug: 'reaction-quotient-le-chatelier',
    difficulty: 'hard',
    stem: 'A reaction has K = 1.0 × 10⁻⁴ at 298 K. At one moment, a reaction mixture at 298 K has Q = 1.0 × 10⁻⁶. Which statement about the reaction rates at that moment is correct?',
    options: [
      'The forward rate is greater than the reverse rate at that moment.',
      'The reverse rate is greater than the forward rate.',
      'The forward and reverse rates are equal, because K is small.',
      'The forward rate is zero until Q becomes equal to K.',
    ],
    correctIndex: 0,
    explanation:
      'Q < K, so the mixture has fewer products than at equilibrium, and the net reaction must proceed forward. A net forward change means the forward rate exceeds the reverse rate at that moment. A reverse rate greater than the forward rate would happen if Q > K. The rates are equal only at equilibrium (Q = K), whatever the size of K, and neither rate is zero while reactants and products are present.',
  },
  {
    id: 'chem-u7-006',
    unit: 'unit-7',
    topicSlug: 'reaction-quotient-le-chatelier',
    difficulty: 'hard',
    stem: 'An equilibrium mixture of Ag⁺(aq) + 2NH₃(aq) ⇌ Ag(NH₃)₂⁺(aq) is diluted with water to twice its volume. Which statement describes the response?',
    options: [
      'Q becomes greater than K, so some of the Ag(NH₃)₂⁺ dissociates.',
      'Q becomes less than K, so more Ag(NH₃)₂⁺ forms.',
      'Q stays equal to K, because every concentration is halved.',
      'K decreases, because the solution is now more dilute.',
    ],
    correctIndex: 0,
    explanation:
      'Q = [Ag(NH₃)₂⁺]/([Ag⁺][NH₃]²). Halving every concentration gives Q = (½)/[(½)(½)²] × K = 4K, so Q > K and the net reaction shifts toward the side with more dissolved particles, dissociating some Ag(NH₃)₂⁺. Q stays equal to K on dilution only when both sides have the same number of dissolved particles. K depends only on temperature, not on dilution.',
  },
  {
    id: 'chem-u7-007',
    unit: 'unit-7',
    topicSlug: 'solubility-equilibrium',
    difficulty: 'hard',
    stem: 'Equal volumes of 2.0 × 10⁻⁵ M AgNO₃ and 2.0 × 10⁻⁵ M NaCl are mixed. Ksp of AgCl is 1.8 × 10⁻¹⁰. Does a precipitate form?',
    options: [
      'No, because Q = 1.0 × 10⁻¹⁰, which is less than Ksp.',
      'Yes, because Q = 4.0 × 10⁻¹⁰, which is greater than Ksp.',
      'No, because Q = 4.0 × 10⁻¹⁰, which is greater than Ksp.',
      'Yes, because any mixture of Ag⁺ and Cl⁻ forms some AgCl.',
    ],
    correctIndex: 0,
    explanation:
      'Mixing equal volumes halves each concentration: [Ag⁺] = [Cl⁻] = 1.0 × 10⁻⁵ M. Q = (1.0 × 10⁻⁵)² = 1.0 × 10⁻¹⁰, below Ksp, so the solution is unsaturated and no precipitate forms. 4.0 × 10⁻¹⁰ forgets the dilution (and a Q above Ksp would mean a precipitate does form), and AgCl precipitates only when the solution exceeds its solubility limit, not whenever the two ions meet.',
  },
  {
    id: 'chem-u7-008',
    unit: 'unit-7',
    topicSlug: 'le-chatelier-equilibrium-shifts',
    difficulty: 'medium',
    stem: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH° = −198 kJ. The temperature of an equilibrium mixture is raised at constant volume. What happens?',
    options: [
      'K decreases, and [SO₃] at the new equilibrium is lower.',
      'K stays the same, and [SO₃] at the new equilibrium is lower.',
      'K increases, and [SO₃] at the new equilibrium is higher.',
      'K decreases, and [SO₃] at the new equilibrium is higher.',
    ],
    correctIndex: 0,
    explanation:
      'The forward reaction is exothermic, so heat acts like a product. Raising the temperature favors the reverse (endothermic) direction, which lowers K and consumes SO₃. A temperature change is the one stress that changes K, so K cannot stay the same, and with a smaller K the equilibrium [SO₃] falls, not rises.',
  },
]
