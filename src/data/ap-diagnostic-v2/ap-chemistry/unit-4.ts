/**
 * AP Chemistry diagnostic v2 — Unit 4: Chemical Reactions (CED 4.1–4.9).
 * Four stimulus sets (a particle diagram, a standardization titration, a
 * precipitation experiment, a table of reactions) plus standalone items.
 * Reactions are classified as acid–base, redox or precipitation (4.7); stems
 * give solubility except for Na⁺, K⁺, NH₄⁺ and NO₃⁻ salts; the terms
 * "oxidizing/reducing agent" and Lewis acid–base are not used.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { SVG_CHEM_S019 } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s019',
    title: 'Particle diagram of a nitrogen–hydrogen mixture',
    kind: 'figure',
    content:
      'The box shows a sealed container before the reaction N₂(g) + 3H₂(g) → 2NH₃(g) takes place. It holds three N₂ molecules (pairs of large shaded spheres) and six H₂ molecules (pairs of small open spheres). Assume the reaction goes to completion.',
    svg: SVG_CHEM_S019,
  },
  {
    id: 'chem-s020',
    title: 'Standardizing a NaOH solution with KHP',
    kind: 'table',
    content:
      'A student standardizes a NaOH solution by titrating weighed samples of potassium hydrogen phthalate, KHC₈H₄O₄ (KHP, 204.22 g/mol), a monoprotic acid. Each sample is dissolved in water and titrated with the NaOH solution to a phenolphthalein endpoint. The reaction is HC₈H₄O₄⁻(aq) + OH⁻(aq) → C₈H₄O₄²⁻(aq) + H₂O(l).\n\n' +
      '| Trial | Mass of KHP (g) | Volume of NaOH added (mL) |\n' +
      '| --- | --- | --- |\n' +
      '| 1 | 0.5105 | 25.00 |\n' +
      '| 2 | 0.4902 | 24.02 |\n' +
      '| 3 | 0.5310 | 26.03 |',
  },
  {
    id: 'chem-s021',
    title: 'Mixing silver nitrate and sodium chromate solutions',
    kind: 'passage',
    content:
      'A student mixes 50.0 mL of 0.100 M AgNO₃(aq) with 50.0 mL of 0.100 M Na₂CrO₄(aq). A brick-red precipitate of silver chromate, Ag₂CrO₄ (331.7 g/mol), forms immediately; silver chromate is insoluble in water. The student filters the mixture, dries the solid and weighs it. Assume the precipitation goes to completion and that the volumes are additive.',
  },
  {
    id: 'chem-s022',
    title: 'Four chemical reactions',
    kind: 'table',
    content:
      'The table lists four reactions carried out in a teaching laboratory.\n\n' +
      '| Reaction | Balanced equation |\n' +
      '| --- | --- |\n' +
      '| 1 | CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g) |\n' +
      '| 2 | 2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s) |\n' +
      '| 3 | AgNO₃(aq) + KBr(aq) → AgBr(s) + KNO₃(aq) |\n' +
      '| 4 | CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s019: particle diagram ────────────────────────────────────
  {
    id: 'chem-s019-q1',
    stimulusId: 'chem-s019',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'easy',
    stem: 'Which reactant is the limiting reactant, and why?',
    options: [
      'H₂, because the six H₂ molecules can react with only two of the N₂ molecules',
      'N₂, because there are fewer N₂ molecules than H₂ molecules in the box',
      'N₂, because each N₂ molecule needs three H₂ molecules to react completely',
      'Neither, because the box holds exactly enough of both reactants to react',
    ],
    correctIndex: 0,
    explanation:
      'Three N₂ molecules would need 3 × 3 = 9 H₂ molecules, but only 6 are present. The 6 H₂ molecules react with only 2 N₂ molecules, so H₂ runs out first and is limiting. Having fewer molecules does not make a reactant limiting; the mole ratio decides. Each N₂ does need three H₂, but that is why H₂, not N₂, runs out. The box holds a 1 : 2 ratio, not the 1 : 3 ratio of the equation.',
  },
  {
    id: 'chem-s019-q2',
    stimulusId: 'chem-s019',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'medium',
    stem: 'Which describes the contents of the container after the reaction is complete?',
    options: [
      '4 NH₃ molecules and 1 N₂ molecule',
      '6 NH₃ molecules and no reactant molecules',
      '4 NH₃ molecules and 3 N₂ molecules',
      '4 NH₃ molecules and 2 H₂ molecules',
    ],
    correctIndex: 0,
    explanation:
      'All 6 H₂ react: 6 H₂ × (2 NH₃ / 3 H₂) = 4 NH₃, using 6 H₂ × (1 N₂ / 3 H₂) = 2 N₂. One N₂ is left over. Six NH₃ would require all three N₂ and 9 H₂. Three N₂ remaining forgets that two of them reacted, and H₂ is the limiting reactant, so none of it remains.',
  },

  // ── Set chem-s020: titration ───────────────────────────────────────────
  {
    id: 'chem-s020-q1',
    stimulusId: 'chem-s020',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'medium',
    stem: 'Based on the data, what is the concentration of the NaOH solution?',
    options: ['0.100 M', '0.0500 M', '0.200 M', '0.0204 M'],
    correctIndex: 0,
    explanation:
      'Trial 1: 0.5105 g ÷ 204.22 g/mol = 2.500 × 10⁻³ mol KHP, which reacts 1 : 1 with OH⁻, so [NaOH] = 2.500 × 10⁻³ mol ÷ 0.02500 L = 0.1000 M. Trials 2 and 3 give 0.0999 M. 0.0500 M and 0.200 M assume a 1 : 2 or 2 : 1 mole ratio, and 0.0204 M divides the grams of KHP by the volume in mL without converting to moles.',
  },
  {
    id: 'chem-s020-q2',
    stimulusId: 'chem-s020',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'hard',
    stem: 'The student later finds that during trial 2 a 0.20 mL air bubble left the buret tip, so the recorded volume includes 0.20 mL that was not NaOH solution. How does the true NaOH concentration from trial 2 compare with the value calculated from the table?',
    options: [
      'It is higher, about 0.1008 M, because only 23.82 mL of NaOH solution was delivered.',
      'It is lower, about 0.0991 M, because 24.22 mL of NaOH solution was really delivered.',
      'It is higher, about 0.1008 M, because the bubble added 0.20 mL of extra NaOH to the flask.',
      'It is the same, about 0.0999 M, because the mass of KHP in trial 2 was measured correctly.',
    ],
    correctIndex: 0,
    explanation:
      'Trial 2 has 0.4902 g ÷ 204.22 g/mol = 2.400 × 10⁻³ mol KHP. The table value divides by 24.02 mL (0.0999 M), but only 24.02 − 0.20 = 23.82 mL of solution was delivered, so the true value is 2.400 × 10⁻³ ÷ 0.02382 L = 0.1008 M. Adding the bubble volume instead of subtracting it gives 0.0991 M. The bubble was air, not NaOH, so the third option has the right number for the wrong reason, and a correct mass of KHP does not fix an error in the volume.',
  },

  // ── Set chem-s021: precipitation ───────────────────────────────────────
  {
    id: 'chem-s021-q1',
    stimulusId: 'chem-s021',
    unit: 'unit-4',
    topicSlug: 'net-ionic-equations',
    difficulty: 'easy',
    stem: 'Which equation is the net ionic equation for the reaction?',
    options: [
      '2Ag⁺(aq) + CrO₄²⁻(aq) → Ag₂CrO₄(s)',
      '2Ag⁺(aq) + Na₂CrO₄(aq) → Ag₂CrO₄(s) + 2Na⁺(aq)',
      '2AgNO₃(aq) + CrO₄²⁻(aq) → Ag₂CrO₄(s) + 2NO₃⁻(aq)',
      '2AgNO₃(aq) + Na₂CrO₄(aq) → Ag₂CrO₄(s) + 2NaNO₃(aq)',
    ],
    correctIndex: 0,
    explanation:
      'AgNO₃ and Na₂CrO₄ are soluble ionic compounds, so in solution they exist as separate ions; Na⁺ and NO₃⁻ stay dissolved and are spectators. Removing them leaves the ions that form the solid: two Ag⁺ for each CrO₄²⁻. The second and third equations write one soluble salt as an undissociated unit and keep a spectator ion, and the last equation is the molecular equation.',
  },
  {
    id: 'chem-s021-q2',
    stimulusId: 'chem-s021',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'medium',
    stem: 'What is the maximum mass of Ag₂CrO₄ that can form?',
    options: ['0.829 g', '1.66 g', '0.415 g', '3.32 g'],
    correctIndex: 0,
    explanation:
      'Ag⁺: 0.0500 L × 0.100 M = 5.00 × 10⁻³ mol; CrO₄²⁻: 5.00 × 10⁻³ mol. Two Ag⁺ are needed per CrO₄²⁻, so Ag⁺ is limiting and forms 2.50 × 10⁻³ mol Ag₂CrO₄, or 2.50 × 10⁻³ × 331.7 = 0.829 g. 1.66 g assumes a 1 : 1 ratio (5.00 × 10⁻³ mol of solid), 0.415 g halves the moles of Ag₂CrO₄ a second time, and 3.32 g doubles the moles of Ag⁺ instead of halving them.',
  },
  {
    id: 'chem-s021-q3',
    stimulusId: 'chem-s021',
    unit: 'unit-4',
    topicSlug: 'net-ionic-equations',
    difficulty: 'hard',
    stem: 'After the precipitate forms, which ion is present at the highest concentration in the 100.0 mL of solution?',
    options: ['Na⁺', 'NO₃⁻', 'CrO₄²⁻', 'Ag⁺'],
    correctIndex: 0,
    explanation:
      'Na₂CrO₄ supplies 2 × 5.00 × 10⁻³ = 1.00 × 10⁻² mol Na⁺, a spectator, so [Na⁺] = 0.0100 mol ÷ 0.1000 L = 0.100 M. NO₃⁻ (5.00 × 10⁻³ mol) is 0.0500 M. CrO₄²⁻ is in excess: 5.00 × 10⁻³ − 2.50 × 10⁻³ = 2.50 × 10⁻³ mol, or 0.0250 M. Ag⁺ is the limiting reactant and is almost entirely removed as the precipitate.',
  },

  // ── Set chem-s022: types of reactions ──────────────────────────────────
  {
    id: 'chem-s022-q1',
    stimulusId: 'chem-s022',
    unit: 'unit-4',
    topicSlug: 'reaction-types',
    difficulty: 'easy',
    stem: 'In which reaction does a dissolved metal ion gain electrons?',
    options: ['Reaction 2', 'Reaction 1', 'Reaction 3', 'Reaction 4'],
    correctIndex: 0,
    explanation:
      'In reaction 2, Cu²⁺(aq) gains two electrons to become Cu(s) (+2 → 0) while Al(s) loses electrons. Reaction 1 is an acid–base reaction (carbonate accepts protons), reaction 3 is a precipitation in which Ag⁺ stays +1, and reaction 4 is a redox reaction, but no metal ion is involved.',
  },
  {
    id: 'chem-s022-q2',
    stimulusId: 'chem-s022',
    unit: 'unit-4',
    topicSlug: 'oxidation-reduction-reactions',
    difficulty: 'medium',
    stem: 'In reaction 4, how does the oxidation number of carbon change?',
    options: ['From −4 to +4', 'From +4 to −4', 'From 0 to +4', 'From −4 to +2'],
    correctIndex: 0,
    explanation:
      'In CH₄, each H is +1, so C is −4. In CO₂, each O is −2, so C is +4. Carbon loses 8 electrons per atom and is oxidized. "+4 to −4" reverses the direction, "0 to +4" treats carbon in CH₄ as if it were an element, and +2 is carbon\'s oxidation number in CO, not in CO₂.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u4-001',
    unit: 'unit-4',
    topicSlug: 'reaction-types',
    difficulty: 'easy',
    stem: 'In the reaction NH₄⁺(aq) + CO₃²⁻(aq) → NH₃(aq) + HCO₃⁻(aq), which species acts as a Brønsted–Lowry acid?',
    options: ['NH₄⁺', 'CO₃²⁻', 'NH₃', 'HCO₃⁻'],
    correctIndex: 0,
    explanation:
      'A Brønsted–Lowry acid donates a proton. NH₄⁺ gives up H⁺ and becomes NH₃, its conjugate base. CO₃²⁻ accepts the proton (it is the base) and becomes HCO₃⁻, its conjugate acid. NH₃ and HCO₃⁻ are products, the conjugates formed in the reaction.',
  },
  {
    id: 'chem-u4-002',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'easy',
    stem: 'Propane burns according to C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g). How many moles of O₂ are needed to burn 2.0 mol of C₃H₈ completely?',
    options: ['10. mol', '5.0 mol', '0.40 mol', '14 mol'],
    correctIndex: 0,
    explanation:
      'The mole ratio is 5 mol O₂ per 1 mol C₃H₈, so 2.0 mol × 5 = 10. mol O₂. 5.0 mol ignores the 2.0 mol of propane, 0.40 mol divides by 5 instead of multiplying, and 14 mol counts the moles of products (3 + 4) per mole of propane.',
  },
  {
    id: 'chem-u4-003',
    unit: 'unit-4',
    topicSlug: 'oxidation-reduction-reactions',
    difficulty: 'medium',
    stem: 'The equation H₂O₂(aq) + Fe²⁺(aq) → Fe³⁺(aq) + H₂O(l) is balanced for an acidic solution using the smallest whole-number coefficients. What is the coefficient of H⁺(aq), and on which side does it appear?',
    options: ['2, on the reactant side', '2, on the product side', '1, on the reactant side', '4, on the reactant side'],
    correctIndex: 0,
    explanation:
      'Reduction: H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O. Oxidation: Fe²⁺ → Fe³⁺ + e⁻, doubled to transfer 2 electrons. Sum: H₂O₂ + 2Fe²⁺ + 2H⁺ → 2Fe³⁺ + 2H₂O. Both sides have charge +6 and the atoms balance. H⁺ is consumed, not produced; a coefficient of 1 leaves the O and H unbalanced, and 4 double-counts the protons.',
  },
  {
    id: 'chem-u4-004',
    unit: 'unit-4',
    topicSlug: 'net-ionic-equations',
    difficulty: 'medium',
    stem: 'Aqueous acetic acid, CH₃COOH, a weak acid, is mixed with aqueous ammonia, NH₃, a weak base. Which is the net ionic equation for the reaction?',
    options: [
      'CH₃COOH(aq) + NH₃(aq) → CH₃COO⁻(aq) + NH₄⁺(aq)',
      'H⁺(aq) + OH⁻(aq) → H₂O(l)',
      'H⁺(aq) + NH₃(aq) → NH₄⁺(aq)',
      'CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l)',
    ],
    correctIndex: 0,
    explanation:
      'A weak acid and a weak base are both mostly un-ionized in solution, so each is written in its molecular form, and the proton moves directly from CH₃COOH to NH₃. H⁺ + OH⁻ → H₂O applies to a strong acid with a strong base, writing H⁺ treats acetic acid as strong, and writing OH⁻ treats ammonia as if it were mostly OH⁻ ions.',
  },
  {
    id: 'chem-u4-005',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'hard',
    stem: 'A 6.00 g sample of Al (26.98 g/mol) reacts with 30.0 g of Cl₂ (70.90 g/mol) according to 2Al(s) + 3Cl₂(g) → 2AlCl₃(s). What is the theoretical yield of AlCl₃ (133.33 g/mol)?',
    options: ['29.7 g', '37.6 g', '36.0 g', '19.8 g'],
    correctIndex: 0,
    explanation:
      'Al: 6.00 ÷ 26.98 = 0.2224 mol; Cl₂: 30.0 ÷ 70.90 = 0.4231 mol. The Al would need 0.2224 × 3/2 = 0.3336 mol Cl₂, which is available, so Al is limiting. AlCl₃ = 0.2224 mol × 133.33 g/mol = 29.7 g. 37.6 g treats Cl₂ as limiting (0.4231 × 2/3 × 133.33), 36.0 g adds the reactant masses even though Cl₂ is in excess, and 19.8 g uses the 2/3 ratio for Al.',
  },
  {
    id: 'chem-u4-006',
    unit: 'unit-4',
    topicSlug: 'oxidation-reduction-reactions',
    difficulty: 'hard',
    stem: 'A 25.00 mL sample of hydrogen peroxide solution is titrated in acid with 0.0200 M KMnO₄. The endpoint is reached after 18.00 mL. The reaction is 2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O. What is the concentration of H₂O₂?',
    options: ['0.0360 M', '0.0144 M', '0.00576 M', '0.0500 M'],
    correctIndex: 0,
    explanation:
      'mol MnO₄⁻ = 0.01800 L × 0.0200 M = 3.60 × 10⁻⁴ mol. mol H₂O₂ = 3.60 × 10⁻⁴ × 5/2 = 9.00 × 10⁻⁴ mol, and 9.00 × 10⁻⁴ ÷ 0.02500 L = 0.0360 M. 0.0144 M assumes a 1 : 1 ratio, 0.00576 M uses the ratio upside down (2/5), and 0.0500 M divides by the 18.00 mL of titrant instead of the 25.00 mL sample.',
  },
  {
    id: 'chem-u4-007',
    unit: 'unit-4',
    topicSlug: 'stoichiometry-limiting-reactants',
    difficulty: 'hard',
    stem: 'A 0.450 g sample of an unknown diprotic acid, H₂A, is completely neutralized by 40.0 mL of 0.250 M NaOH. What is the molar mass of the acid?',
    options: ['90.0 g/mol', '45.0 g/mol', '180. g/mol', '22.5 g/mol'],
    correctIndex: 0,
    explanation:
      'mol NaOH = 0.0400 L × 0.250 M = 0.0100 mol. A diprotic acid reacts with 2 OH⁻: H₂A + 2OH⁻ → A²⁻ + 2H₂O, so mol H₂A = 0.00500 mol, and M = 0.450 g ÷ 0.00500 mol = 90.0 g/mol (oxalic acid fits). 45.0 g/mol treats the acid as monoprotic (0.450 ÷ 0.0100), 22.5 g/mol multiplies the moles of NaOH by 2 instead of dividing (0.450 ÷ 0.0200), and 180. g/mol halves the moles twice (0.450 ÷ 0.00250).',
  },
  {
    id: 'chem-u4-008',
    unit: 'unit-4',
    topicSlug: 'oxidation-reduction-reactions',
    difficulty: 'hard',
    stem: 'Which statement about the reaction 2H₂S(g) + SO₂(g) → 3S(s) + 2H₂O(l) is correct?',
    options: [
      'The S in H₂S is oxidized (−2 to 0) and the S in SO₂ is reduced (+4 to 0).',
      'The S in H₂S is reduced (−2 to 0), and the S in SO₂ is oxidized (+4 to 0).',
      'It is not a redox reaction, because sulfur appears in the reactants and the products.',
      'The O in SO₂ is reduced (−2 to −4), and the H in H₂S is oxidized (+1 to +2).',
    ],
    correctIndex: 0,
    explanation:
      'Sulfur is −2 in H₂S (H is +1) and +4 in SO₂ (O is −2), and 0 in elemental S. Going from −2 to 0 is a loss of electrons (oxidation); going from +4 to 0 is a gain (reduction). Each of the two H₂S loses 2 electrons and the SO₂ gains 4, so electrons balance. An increase in oxidation number is oxidation, not reduction. The same element can be both oxidized and reduced. O stays −2 and H stays +1 throughout.',
  },
]
