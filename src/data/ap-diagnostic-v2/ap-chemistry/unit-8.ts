/**
 * AP Chemistry diagnostic v2 — Unit 8: Acids and Bases (CED 8.1–8.11).
 * Six stimulus sets (a weak-acid titration curve, haloacetic acid pKa values,
 * strong/weak acid particle diagrams, buffer compositions, a diprotic
 * titration curve, indicator tests) plus standalone items. No pH-change
 * calculations after adding acid/base to a buffer (8.9 exclusion), no
 * polyprotic species concentrations (8.5 exclusion), no very dilute strong
 * acids and no Lewis acid–base concepts.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { SVG_CHEM_S037 } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s035',
    title: 'Titration of a weak acid with NaOH',
    kind: 'graph',
    content:
      'A 25.0 mL sample of 0.100 M weak monoprotic acid, HA, is titrated with 0.100 M NaOH at 25 °C. The pH is recorded after each addition of base.',
    chart: {
      title: 'pH versus volume of 0.100 M NaOH added',
      kind: 'line',
      xLabel: 'Volume of NaOH added',
      xUnit: 'mL',
      yLabel: 'pH',
      yUnit: 'pH units',
      xValues: [0, 5, 10, 12.5, 15, 20, 22.5, 24, 25, 26, 30, 35, 40],
      yValues: [2.88, 4.14, 4.57, 4.75, 4.92, 5.35, 5.7, 6.13, 8.72, 11.29, 11.96, 12.22, 12.36],
      seriesLabel: 'pH',
      annotations: [{ xIndex: 8, label: 'Equivalence point' }],
    },
  },
  {
    id: 'chem-s036',
    title: 'pKa values of acetic acid and three chloroacetic acids',
    kind: 'table',
    content:
      'The table gives pKa values at 25 °C for acetic acid and three acids in which Cl atoms replace H atoms on the carbon next to the –COOH group.\n\n' +
      '| Acid | Formula | pKa |\n' +
      '| --- | --- | --- |\n' +
      '| Acetic acid | CH₃COOH | 4.76 |\n' +
      '| Chloroacetic acid | ClCH₂COOH | 2.87 |\n' +
      '| Dichloroacetic acid | Cl₂CHCOOH | 1.35 |\n' +
      '| Trichloroacetic acid | Cl₃CCOOH | 0.66 |',
  },
  {
    id: 'chem-s037',
    title: 'Particle diagrams of two acid solutions',
    kind: 'figure',
    content:
      'Each box represents the same volume of a 0.010 M solution of a monoprotic acid; water molecules are not shown. Box 1 (acid HX) contains four H₃O⁺ ions and four X⁻ ions and no HX molecules. Box 2 (acid HY) contains three HY molecules, one H₃O⁺ ion and one Y⁻ ion.',
    svg: SVG_CHEM_S037,
  },
  {
    id: 'chem-s038',
    title: 'Four acetic acid–acetate buffers',
    kind: 'table',
    content:
      'A student prepares four buffers from acetic acid, HA (pKa = 4.74), and sodium acetate, NaA, at 25 °C.\n\n' +
      '| Buffer | [HA] (M) | [A⁻] (M) |\n' +
      '| --- | --- | --- |\n' +
      '| W | 0.50 | 0.50 |\n' +
      '| X | 0.050 | 0.050 |\n' +
      '| Y | 0.50 | 0.050 |\n' +
      '| Z | 0.050 | 0.50 |',
  },
  {
    id: 'chem-s039',
    title: 'Titration of a diprotic acid with NaOH',
    kind: 'graph',
    content:
      'A 20.0 mL sample of 0.100 M diprotic acid, H₂A, is titrated with 0.100 M NaOH at 25 °C. The two equivalence points are at 20.0 mL and 40.0 mL of NaOH.',
    chart: {
      title: 'pH versus volume of 0.100 M NaOH added',
      kind: 'line',
      xLabel: 'Volume of NaOH added',
      xUnit: 'mL',
      yLabel: 'pH',
      yUnit: 'pH units',
      xValues: [0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5, 50],
      yValues: [2.02, 2.33, 2.59, 2.82, 3.02, 3.24, 3.49, 3.85, 5.0, 6.16, 6.52, 6.78, 7.0, 7.22, 7.48, 7.85, 9.76, 11.6, 11.89, 12.05, 12.15],
      seriesLabel: 'pH',
      annotations: [
        { xIndex: 8, label: 'First equivalence point' },
        { xIndex: 16, label: 'Second equivalence point' },
      ],
      hidePointLabels: true,
    },
  },
  {
    id: 'chem-s040',
    title: 'Testing an unknown solution with three indicators',
    kind: 'table',
    content:
      'A student adds a few drops of three different indicators to separate samples of an unknown 0.10 M aqueous solution at 25 °C. (Ka of CH₃COOH = 1.8 × 10⁻⁵; Kb of NH₃ = 1.8 × 10⁻⁵.)\n\n' +
      '| Indicator | Color change (pH range) | Color in the unknown |\n' +
      '| --- | --- | --- |\n' +
      '| Methyl orange | red below 3.1, yellow above 4.4 | yellow |\n' +
      '| Bromothymol blue | yellow below 6.0, blue above 7.6 | yellow |\n' +
      '| Phenolphthalein | colorless below 8.2, pink above 10.0 | colorless |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s035: weak acid titration ─────────────────────────────────
  {
    id: 'chem-s035-q1',
    stimulusId: 'chem-s035',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'easy',
    stem: 'Based on the titration curve, what is the pKa of HA?',
    options: ['4.75', '8.72', '2.88', '7.00'],
    correctIndex: 0,
    explanation:
      'At the half-equivalence point (12.5 mL, half of the 25.0 mL needed), half of the HA has become A⁻, so [HA] = [A⁻] and pH = pKa = 4.75. 8.72 is the pH at the equivalence point, 2.88 is the initial pH of the acid, and 7.00 is the neutral pH, which a weak acid titration does not pass through at its equivalence point.',
  },
  {
    id: 'chem-s035-q2',
    stimulusId: 'chem-s035',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'medium',
    stem: 'Which statement best explains the pH at the equivalence point shown on the curve?',
    options: [
      'The solution contains A⁻, a weak base that produces OH⁻ in water, so the pH is above 7.',
      'The solution contains excess OH⁻ left over from the added NaOH, so the pH is above 7.',
      'The solution contains only Na⁺ ions and water, so the pH is exactly 7.',
      'The solution still contains unreacted HA, so the pH is below 7.',
    ],
    correctIndex: 0,
    explanation:
      'The curve shows pH 8.72 at the equivalence point (25.0 mL), so the solution is basic. At equivalence all the HA has been converted to A⁻ and no excess OH⁻ has been added yet. A⁻ is the conjugate base of a weak acid, so A⁻ + H₂O ⇌ HA + OH⁻ makes the solution basic. Excess OH⁻ appears only after the equivalence point, the solution contains A⁻ as well as Na⁺, and the HA is used up, so the pH is not 7 or below.',
  },
  {
    id: 'chem-s035-q3',
    stimulusId: 'chem-s035',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'hard',
    stem: 'The titration is repeated with 25.0 mL of 0.100 M HCl in place of HA. Which feature of the curve would stay the same?',
    options: [
      'The volume of NaOH at the equivalence point',
      'The pH after 12.5 mL of the NaOH has been added',
      'The pH before any NaOH has been added to the flask',
      'The pH at the equivalence point of the titration',
    ],
    correctIndex: 0,
    explanation:
      'The equivalence volume depends only on the moles of acid: 25.0 mL × 0.100 M = 2.50 mmol of either acid needs 25.0 mL of 0.100 M NaOH. HCl is a strong acid, so its initial pH is 1.00 instead of 2.88, its pH at 12.5 mL is far below 4.75 (there is no buffer region), and its equivalence-point pH is 7.00 instead of 8.72, because Cl⁻ is not a base.',
  },

  // ── Set chem-s036: molecular structure and acid strength ──────────────
  {
    id: 'chem-s036-q1',
    stimulusId: 'chem-s036',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'easy',
    stem: 'Which 0.10 M solution has the lowest pH?',
    options: ['Cl₃CCOOH', 'Cl₂CHCOOH', 'ClCH₂COOH', 'CH₃COOH'],
    correctIndex: 0,
    explanation:
      'A smaller pKa means a larger Ka, a stronger acid and, at the same concentration, more H₃O⁺ and a lower pH. Trichloroacetic acid has the smallest pKa (0.66), so its solution has the lowest pH. Acetic acid, with the largest pKa (4.76), gives the highest pH of the four.',
  },
  {
    id: 'chem-s036-q2',
    stimulusId: 'chem-s036',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'medium',
    stem: 'Which statement best explains the trend in pKa values in the table?',
    options: [
      'Electronegative Cl atoms pull electron density toward themselves, which stabilizes the conjugate base anion.',
      'Each Cl atom adds another acidic hydrogen to the molecule, so more H⁺ ions are released per molecule.',
      'Cl atoms make the molecule larger and heavier, so its O–H bond becomes longer and therefore weaker.',
      'Cl atoms form hydrogen bonds with water, which pull the acidic H atom off the –COOH group of the acid.',
    ],
    correctIndex: 0,
    explanation:
      'Cl is very electronegative, so each Cl draws electron density away from the –COO⁻ group of the conjugate base, spreading out its negative charge and stabilizing it. A more stable conjugate base means a stronger acid and a smaller pKa, and the effect grows with each Cl. Cl replaces H atoms on carbon, which are not acidic, and every acid in the table has one acidic H. Molar mass does not set O–H bond strength, and Cl atoms bonded to carbon do not hydrogen-bond in a way that removes the acidic H.',
  },
  {
    id: 'chem-s036-q3',
    stimulusId: 'chem-s036',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'hard',
    stem: 'Fluorine is more electronegative than chlorine. Which value is the best estimate of the pKa of fluoroacetic acid, FCH₂COOH?',
    options: [
      'About 2.6, a little lower than for ClCH₂COOH, because F withdraws electrons more strongly than Cl',
      'About 3.2, a little higher than for ClCH₂COOH, because the smaller F atom can hold less negative charge',
      'About 4.8, the same as for CH₃COOH, because a single halogen atom is too far from the O–H group to matter',
      'About 0.6, the same as for Cl₃CCOOH, because one F atom withdraws as much electron density as three Cl atoms',
    ],
    correctIndex: 0,
    explanation:
      'One F atom in place of one Cl atom should withdraw electron density a little more strongly, so FCH₂COOH should be a slightly stronger acid than ClCH₂COOH, with a slightly lower pKa (the measured value is 2.59). A pKa above 2.87 would mean F withdraws less than Cl, which reverses the electronegativity order. The table shows that a single Cl atom already lowers the pKa from 4.76 to 2.87, so one halogen does matter, but one F atom cannot match the combined effect of three Cl atoms.',
  },

  // ── Set chem-s037: strong and weak acids ───────────────────────────────
  {
    id: 'chem-s037-q1',
    stimulusId: 'chem-s037',
    unit: 'unit-8',
    topicSlug: 'acid-base-theories-ph',
    difficulty: 'easy',
    stem: 'Which statement about HX and HY is supported by the diagrams?',
    options: [
      'HX is a strong acid and HY is a weak acid.',
      'HY is a strong acid and HX is a weak acid.',
      'Both are strong acids, because each box contains H₃O⁺ ions.',
      'Both are weak acids, because each box contains fewer than five H₃O⁺ ions.',
    ],
    correctIndex: 0,
    explanation:
      'Box 1 shows every HX molecule ionized (no HX remains), the behavior of a strong acid. Box 2 shows most HY molecules intact and only one ionized, the behavior of a weak acid. Producing some H₃O⁺ does not make an acid strong; what matters is whether ionization is essentially complete. The number of ions drawn in a box is not a test of acid strength.',
  },
  {
    id: 'chem-s037-q2',
    stimulusId: 'chem-s037',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'medium',
    stem: 'Based on Box 2, what is the percent ionization of HY in this solution?',
    options: ['25%', '33%', '75%', '100%'],
    correctIndex: 0,
    explanation:
      'Box 2 began with 4 HY molecules (3 still intact plus 1 that ionized into H₃O⁺ and Y⁻). Percent ionization = ionized ÷ initial × 100 = 1 ÷ 4 × 100 = 25%. 33% divides by the 3 intact molecules instead of the 4 initial ones, 75% is the percent that did not ionize, and 100% describes HX in Box 1.',
  },
  {
    id: 'chem-s037-q3',
    stimulusId: 'chem-s037',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'hard',
    stem: 'Equal volumes of the two solutions are titrated separately with the same NaOH solution. Which statement about the volume of NaOH needed to reach the equivalence point is correct?',
    options: [
      'The volumes are equal, because both samples contain the same moles of acid.',
      'More is needed for HX, because its solution contains more H₃O⁺ at the start.',
      'More is needed for HY, because its molecules must ionize before they can react.',
      'The volumes are equal, because both solutions have the same pH at the start.',
    ],
    correctIndex: 0,
    explanation:
      'Both boxes represent 0.010 M monoprotic acid, so equal volumes contain equal moles of acid. OH⁻ reacts with HY molecules directly (HY + OH⁻ → Y⁻ + H₂O), so the intact HY molecules are neutralized too, and the same volume of NaOH is needed. The diagrams show different initial [H₃O⁺] (four H₃O⁺ versus one), so the starting pH values differ; that affects the shape of the curve, not the equivalence volume, and HY does not need to ionize before it can react.',
  },

  // ── Set chem-s038: buffers ─────────────────────────────────────────────
  {
    id: 'chem-s038-q1',
    stimulusId: 'chem-s038',
    unit: 'unit-8',
    topicSlug: 'buffer-solutions-henderson-hasselbalch',
    difficulty: 'easy',
    stem: 'Which of the buffers have a pH equal to 4.74?',
    options: ['W and X only', 'W only', 'Y and Z only', 'All four buffers'],
    correctIndex: 0,
    explanation:
      'By the Henderson–Hasselbalch equation, pH = pKa + log([A⁻]/[HA]). When [A⁻] = [HA], log(1) = 0 and pH = pKa = 4.74. W and X both have equal concentrations; buffer pH depends on the ratio, not on the total concentration, so X matches W. Y (ratio 0.1) and Z (ratio 10) do not.',
  },
  {
    id: 'chem-s038-q2',
    stimulusId: 'chem-s038',
    unit: 'unit-8',
    topicSlug: 'buffer-solutions-henderson-hasselbalch',
    difficulty: 'medium',
    stem: 'What is the pH of buffer Y?',
    options: ['3.74', '5.74', '4.74', '2.44'],
    correctIndex: 0,
    explanation:
      'pH = pKa + log([A⁻]/[HA]) = 4.74 + log(0.050/0.50) = 4.74 + log(0.10) = 4.74 − 1.00 = 3.74. 5.74 inverts the ratio (that is buffer Z), 4.74 ignores the ratio, and 2.44 uses ln instead of log (ln 0.10 = −2.30).',
  },
  {
    id: 'chem-s038-q3',
    stimulusId: 'chem-s038',
    unit: 'unit-8',
    topicSlug: 'buffer-solutions-henderson-hasselbalch',
    difficulty: 'hard',
    stem: 'A fifth buffer is made by dissolving 0.100 mol of acetic acid and 0.050 mol of NaOH in enough water to make 1.0 L of solution. What is its pH?',
    options: ['4.74', '4.44', '5.04', '12.70'],
    correctIndex: 0,
    explanation:
      'OH⁻ reacts completely with HA: HA + OH⁻ → A⁻ + H₂O. Afterward there are 0.100 − 0.050 = 0.050 mol HA and 0.050 mol A⁻, a 1 : 1 ratio, so pH = pKa = 4.74. 4.44 uses 0.100 mol HA without subtracting the HA consumed, 5.04 inverts that ratio, and 12.70 treats the NaOH as if it stayed in solution unreacted (pOH = −log 0.050 = 1.30).',
  },

  // ── Set chem-s039: diprotic titration ──────────────────────────────────
  {
    id: 'chem-s039-q1',
    stimulusId: 'chem-s039',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'medium',
    stem: 'Based on the titration curve, which value is closest to pKa₂ of H₂A?',
    options: ['7.0', '3.0', '5.0', '9.8'],
    correctIndex: 0,
    explanation:
      'The second proton is half removed halfway between the two equivalence points, at 30.0 mL, where [HA⁻] = [A²⁻] and pH = pKa₂. The curve reads pH 7.0 there. pH 3.0 at 10.0 mL is pKa₁, 5.0 is the pH at the first equivalence point, and 9.8 is the pH at the second equivalence point.',
  },
  {
    id: 'chem-s039-q2',
    stimulusId: 'chem-s039',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'hard',
    stem: 'Which species is present in the greatest amount after 20.0 mL of NaOH has been added?',
    options: ['HA⁻', 'H₂A', 'A²⁻', 'H₃O⁺'],
    correctIndex: 0,
    explanation:
      'At the first equivalence point, 2.00 mmol of NaOH has removed one proton from each of the 2.00 mmol of H₂A, so the solution is mainly HA⁻ (0.050 M). Its pH (5.0) is halfway between pKa₁ (3.0) and pKa₂ (7.0), where both H₂A and A²⁻ are minor. H₂A predominates before 10 mL and A²⁻ beyond 30 mL, and at pH 5.0 [H₃O⁺] is only 1 × 10⁻⁵ M.',
  },

  // ── Set chem-s040: indicators ──────────────────────────────────────────
  {
    id: 'chem-s040-q1',
    stimulusId: 'chem-s040',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'medium',
    stem: 'Based on the indicator colors, what is the pH range of the unknown solution?',
    options: ['Between 4.4 and 6.0', 'Between 3.1 and 4.4', 'Between 6.0 and 7.6', 'Between 7.6 and 8.2'],
    correctIndex: 0,
    explanation:
      'Methyl orange is yellow, so pH > 4.4. Bromothymol blue is yellow, so pH < 6.0. Phenolphthalein is colorless, so pH < 8.2. Only the range 4.4 to 6.0 satisfies all three. Between 3.1 and 4.4 methyl orange would be orange, between 6.0 and 7.6 bromothymol blue would be green, and above 7.6 it would be blue.',
  },
  {
    id: 'chem-s040-q2',
    stimulusId: 'chem-s040',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'hard',
    stem: 'The unknown is one of the following 0.10 M solutions. Which is it most likely to be?',
    options: ['NH₄Cl', 'NaCH₃COO', 'NaCl', 'HCl'],
    correctIndex: 0,
    explanation:
      'NH₄⁺ is a weak acid with Ka = Kw/Kb = 1.0 × 10⁻¹⁴ ÷ 1.8 × 10⁻⁵ = 5.6 × 10⁻¹⁰. For 0.10 M, [H₃O⁺] = √(5.6 × 10⁻¹¹) = 7.5 × 10⁻⁶ M, so pH ≈ 5.1, inside the 4.4–6.0 range. NaCH₃COO is basic (pH ≈ 8.9), NaCl is neutral (pH 7.0), and 0.10 M HCl has pH 1.0, which would turn methyl orange red.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u8-002',
    unit: 'unit-8',
    topicSlug: 'acid-base-theories-ph',
    difficulty: 'easy',
    stem: 'What is the pH of 0.025 M KOH at 25 °C?',
    options: ['12.40', '1.60', '12.70', '11.40'],
    correctIndex: 0,
    explanation:
      'KOH is a strong base, so [OH⁻] = 0.025 M and pOH = −log(0.025) = 1.60. pH = 14.00 − 1.60 = 12.40. 1.60 is the pOH, 12.70 doubles [OH⁻] as if KOH released two OH⁻ ions, and 11.40 subtracts 1.60 from 13.00 instead of 14.00.',
  },
  {
    id: 'chem-u8-003',
    unit: 'unit-8',
    topicSlug: 'acid-base-theories-ph',
    difficulty: 'easy',
    stem: 'What is the conjugate acid of the hydrogen phosphate ion, HPO₄²⁻?',
    options: ['H₂PO₄⁻', 'PO₄³⁻', 'H₃PO₄', 'H₃O⁺'],
    correctIndex: 0,
    explanation:
      'A conjugate acid has one more H⁺ than its base: HPO₄²⁻ + H⁺ → H₂PO₄⁻. PO₄³⁻ is the conjugate base of HPO₄²⁻ (one fewer H⁺), H₃PO₄ has two more H⁺, and H₃O⁺ is the conjugate acid of water.',
  },
  {
    id: 'chem-u8-004',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'medium',
    stem: 'What is the pH of 0.10 M benzoic acid, C₆H₅COOH (Ka = 6.3 × 10⁻⁵), at 25 °C?',
    options: ['2.60', '1.00', '4.20', '5.20'],
    correctIndex: 0,
    explanation:
      'For a weak acid, Ka = x²/(0.10 − x) ≈ x²/0.10, so x = [H₃O⁺] = √(6.3 × 10⁻⁶) = 2.5 × 10⁻³ M (2.5% ionized, so the approximation holds) and pH = 2.60. 1.00 treats benzoic acid as strong, 4.20 is the pKa, and 5.20 is −log(Ka × 0.10), which forgets the square root.',
  },
  {
    id: 'chem-u8-005',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'medium',
    stem: 'Which 0.10 M aqueous solution is acidic?',
    options: ['NH₄NO₃', 'KNO₃', 'NaF', 'Na₂CO₃'],
    correctIndex: 0,
    explanation:
      'NH₄⁺ is the conjugate acid of the weak base NH₃, so it donates protons to water and makes the solution acidic; NO₃⁻ is the conjugate base of a strong acid and has no effect. KNO₃ is neutral (both ions are spectators). F⁻ and CO₃²⁻ are conjugate bases of weak acids, so NaF and Na₂CO₃ are basic.',
  },
  {
    id: 'chem-u8-006',
    unit: 'unit-8',
    topicSlug: 'acid-base-theories-ph',
    difficulty: 'medium',
    stem: 'A 10.0 mL sample of 0.10 M HCl is diluted with water to a total volume of 1.00 L. What is the pH of the diluted solution?',
    options: ['3.00', '1.00', '2.00', '4.00'],
    correctIndex: 0,
    explanation:
      'M₁V₁ = M₂V₂: (0.10 M)(10.0 mL) = M₂(1000 mL), so [H₃O⁺] = 1.0 × 10⁻³ M and pH = 3.00. 1.00 ignores the dilution, 2.00 uses a dilution factor of 10 instead of 100, and 4.00 dilutes by a factor of 1000.',
  },
  {
    id: 'chem-u8-007',
    unit: 'unit-8',
    topicSlug: 'acid-base-theories-ph',
    difficulty: 'medium',
    stem: 'HI is a strong acid, but HF is a weak acid. Which statement best explains this difference?',
    options: [
      'The H–I bond is much longer and weaker than the H–F bond, so HI gives up its proton to water far more easily.',
      'I is more electronegative than F, so the H–I bond is more polar and breaks more easily in water.',
      'HF molecules are larger than HI molecules, so water cannot easily reach the H atom in HF.',
      'I⁻ forms stronger hydrogen bonds with water than F⁻ does, which pulls the proton off HI.',
    ],
    correctIndex: 0,
    explanation:
      'Going down group 17 the halogen atom gets larger, so the H–X bond gets longer and weaker; the very weak H–I bond breaks easily and HI ionizes completely. F is more electronegative than I, not less, and F⁻ hydrogen-bonds to water more strongly than I⁻ does. HF is the smaller molecule, so size cannot block water from reaching it.',
  },
  {
    id: 'chem-u8-008',
    unit: 'unit-8',
    topicSlug: 'acid-base-theories-ph',
    difficulty: 'medium',
    stem: 'A 25.0 mL sample of 0.20 M HNO₃ is mixed with 25.0 mL of 0.10 M KOH. What is the pH of the resulting solution?',
    options: ['1.30', '1.00', '0.70', '7.00'],
    correctIndex: 0,
    explanation:
      'H₃O⁺: 25.0 mL × 0.20 M = 5.0 mmol; OH⁻: 25.0 mL × 0.10 M = 2.5 mmol. After neutralization 2.5 mmol H₃O⁺ remains in 50.0 mL, so [H₃O⁺] = 0.050 M and pH = 1.30. 1.00 divides by 25.0 mL instead of the combined 50.0 mL, 0.70 is the pH of the original acid, and 7.00 assumes complete neutralization although the acid is in excess.',
  },
  {
    id: 'chem-u8-009',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'hard',
    stem: 'What is the pH of 0.20 M methylamine, CH₃NH₂ (Kb = 4.4 × 10⁻⁴), at 25 °C?',
    options: ['11.97', '2.03', '13.30', '10.64'],
    correctIndex: 0,
    explanation:
      'CH₃NH₂ + H₂O ⇌ CH₃NH₃⁺ + OH⁻. Kb = x²/(0.20 − x) ≈ x²/0.20, so x = [OH⁻] = √(8.8 × 10⁻⁵) = 9.4 × 10⁻³ M (4.7% reacted). pOH = 2.03 and pH = 14.00 − 2.03 = 11.97. 2.03 is the pOH, 13.30 treats methylamine as a strong base, and 10.64 is 14.00 − pKb.',
  },
  {
    id: 'chem-u8-010',
    unit: 'unit-8',
    topicSlug: 'weak-acids-bases-ka-kb',
    difficulty: 'hard',
    stem: 'Acetic acid, CH₃COOH (pKa 4.76), is a much stronger acid than ethanol, CH₃CH₂OH (pKa about 16), although each loses H⁺ from an O–H group. Which statement best explains this?',
    options: [
      'In acetate the negative charge is shared by resonance between two O atoms, which stabilizes the ion.',
      'The O–H bond in acetic acid is shorter and stronger than the one in ethanol, so it breaks more readily.',
      'Ethanol forms stronger hydrogen bonds with water, so its molecules dissolve better and hold their protons.',
      'Acetic acid has two O atoms, so each molecule can release two protons, but each ethanol molecule only one.',
    ],
    correctIndex: 0,
    explanation:
      'The strength of an acid depends on how stable its conjugate base is. In acetate, CH₃COO⁻, the negative charge is shared by resonance between two equivalent O atoms, which stabilizes it; in ethoxide, CH₃CH₂O⁻, the charge is stuck on one O atom. A stronger bond would make an acid weaker, not stronger. Hydrogen bonding to water is not the deciding factor, and acetic acid is monoprotic: its CH₃ hydrogens are not acidic.',
  },
  {
    id: 'chem-u8-011',
    unit: 'unit-8',
    topicSlug: 'acid-base-titrations',
    difficulty: 'hard',
    stem: 'A 0.10 M solution of NH₃ (Kb = 1.8 × 10⁻⁵) is titrated with 0.10 M HCl. What is the pH at the half-equivalence point?',
    options: ['9.26', '4.74', '7.00', '11.13'],
    correctIndex: 0,
    explanation:
      'At the half-equivalence point [NH₃] = [NH₄⁺], so pH = pKa of NH₄⁺. pKb = −log(1.8 × 10⁻⁵) = 4.74, so pKa = 14.00 − 4.74 = 9.26. 4.74 is the pOH there (the pKb), 7.00 assumes a neutral solution, and 11.13 is the pH of the 0.10 M NH₃ before any acid is added.',
  },
  {
    id: 'chem-u8-012',
    unit: 'unit-8',
    topicSlug: 'buffer-solutions-henderson-hasselbalch',
    difficulty: 'hard',
    stem: 'A buffer contains 0.10 mol of a weak acid, HA, and 0.10 mol of its conjugate base, A⁻, in 1.0 L. Which addition would exceed the buffer\'s capacity and cause a large drop in pH?',
    options: [
      'Adding 0.15 mol of HCl',
      'Adding 0.050 mol of HCl',
      'Adding 0.050 mol of NaOH',
      'Adding 1.0 L of pure water',
    ],
    correctIndex: 0,
    explanation:
      'A buffer neutralizes added H₃O⁺ with its A⁻ (A⁻ + H₃O⁺ → HA + H₂O). Only 0.10 mol of A⁻ is present, so 0.15 mol of HCl uses it all up and leaves 0.05 mol of strong acid unbuffered, and the pH falls sharply. 0.050 mol of HCl is within capacity, NaOH raises the pH rather than lowering it, and dilution leaves the [A⁻]/[HA] ratio, and so the pH, essentially unchanged.',
  },
]
