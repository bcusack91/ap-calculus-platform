/**
 * AP Chemistry diagnostic v2 — Unit 3: Properties of Substances and Mixtures
 * (CED 3.1–3.13). Nine stimulus sets (Maxwell–Boltzmann curves, real-gas data,
 * a solution particle diagram, TLC data, a Beer–Lambert calibration, photon
 * energies, alcohol solubilities, properties of solids, vapor-pressure curves)
 * plus standalone items. Off-exam material (colligative properties, molality,
 * phase diagrams, Clausius–Clapeyron, rms speed/Graham's law, quantitative van
 * der Waals) is not used.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { SVG_CHEM_S012 } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s010',
    title: 'Distributions of particle speeds for three gas samples',
    kind: 'graph',
    content:
      'The graph shows the distribution of particle speeds for three gas samples, each containing the same number of particles. One curve is O₂ at 300 K, one is O₂ at 900 K, and one is He at 300 K. Each y-value is the percent of the particles whose speeds fall within a 100 m/s interval.',
    chart: {
      title: 'Speed distributions of three gas samples',
      kind: 'line',
      xLabel: 'Particle speed',
      xUnit: 'm/s',
      yLabel: 'Percent of particles per 100 m/s',
      yUnit: '%',
      xValues: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000],
      yValues: [0, 3.4, 11.3, 18.5, 21.0, 18.4, 13.1, 7.8, 3.9, 1.6, 0.6, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      seriesLabel: 'Curve 1',
      comparisonSeries: [
        { label: 'Curve 2', yValues: [0, 0.7, 2.6, 5.2, 8.0, 10.3, 11.8, 12.1, 11.5, 10.1, 8.3, 6.4, 4.7, 3.2, 2.1, 1.3, 0.8, 0.4, 0.2, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { label: 'Curve 3', yValues: [0, 0.2, 0.6, 1.4, 2.3, 3.3, 4.4, 5.4, 6.2, 6.9, 7.3, 7.4, 7.4, 7.1, 6.6, 6.0, 5.3, 4.6, 3.9, 3.2, 2.6, 2.1, 1.6, 1.2, 0.9, 0.7, 0.5, 0.3, 0.2, 0.2, 0.1] },
      ],
      hidePointLabels: true,
    },
  },
  {
    id: 'chem-s011',
    title: 'Measured pressures of four real gases',
    kind: 'table',
    content:
      'Exactly 1.00 mol of each gas is placed in a rigid 1.00 L container at 400 K, and the pressure is measured. For an ideal gas under these conditions, PV = nRT predicts a pressure of 32.8 atm.\n\n' +
      '| Gas | Molar mass (g/mol) | Measured pressure (atm) |\n' +
      '| --- | --- | --- |\n' +
      '| He | 4.0 | 33.6 |\n' +
      '| N₂ | 28.0 | 32.8 |\n' +
      '| CO₂ | 44.0 | 30.6 |\n' +
      '| NH₃ | 17.0 | 29.9 |',
  },
  {
    id: 'chem-s012',
    title: 'Particle diagram of an ionic solution',
    kind: 'figure',
    content:
      'The box represents 0.50 L of an aqueous solution of a single ionic compound. It contains six cations, labeled M⁺, and three anions, labeled X²⁻. Each particle drawn represents 0.010 mol of that ion. Water molecules are not shown.',
    svg: SVG_CHEM_S012,
  },
  {
    id: 'chem-s013',
    title: 'Thin-layer chromatography of a three-component mixture',
    kind: 'table',
    content:
      'A mixture of three compounds is spotted on a thin-layer chromatography plate coated with silica, a very polar stationary phase. The plate is developed with hexane, a nonpolar solvent, until the solvent front has moved 8.0 cm from the starting line. The distance each compound moved is recorded.\n\n' +
      '| Compound | Formula | Distance moved from start (cm) |\n' +
      '| --- | --- | --- |\n' +
      '| P | C₁₀H₈ (naphthalene) | 6.0 |\n' +
      '| Q | C₆H₅CHO (benzaldehyde) | 2.8 |\n' +
      '| R | C₆H₅CH₂OH (benzyl alcohol) | 1.2 |',
  },
  {
    id: 'chem-s014',
    title: 'Calibration curve for aqueous KMnO₄',
    kind: 'graph',
    content:
      'A student measures the absorbance of five KMnO₄ standard solutions and a blank at 525 nm, using a cuvette with a path length of 1.00 cm. The absorbance is plotted against concentration.',
    chart: {
      title: 'Absorbance of KMnO₄ standards at 525 nm (path length 1.00 cm)',
      kind: 'scatter',
      xLabel: 'Concentration of KMnO₄',
      xUnit: '× 10⁻⁴ M',
      yLabel: 'Absorbance',
      yUnit: 'no units',
      xValues: [0, 1.0, 2.0, 3.0, 4.0, 5.0],
      yValues: [0, 0.24, 0.48, 0.72, 0.96, 1.2],
      seriesLabel: 'Standards',
    },
  },
  {
    id: 'chem-s015',
    title: 'Bond energies and three light sources',
    kind: 'table',
    content:
      'A photochemist wants to break bonds in gas-phase molecules with light. One photon can break one bond only if the photon energy is at least the energy of that bond. The tables give average bond energies and the wavelengths of three monochromatic light sources.\n\n' +
      '| Bond | Bond energy (kJ/mol) |\n' +
      '| --- | --- |\n' +
      '| Br–Br | 193 |\n' +
      '| Cl–Cl | 242 |\n' +
      '| H–Cl | 431 |\n' +
      '| O=O | 498 |\n\n' +
      '| Light source | Wavelength (nm) |\n' +
      '| --- | --- |\n' +
      '| A | 650 |\n' +
      '| B | 400 |\n' +
      '| C | 250 |',
  },
  {
    id: 'chem-s016',
    title: 'Solubility of straight-chain alcohols in water',
    kind: 'table',
    content:
      'The table lists the solubility in water at 20 °C of six straight-chain alcohols, each with one –OH group at the end of the carbon chain. "Miscible" means the alcohol and water mix in all proportions.\n\n' +
      '| Alcohol | Formula | Solubility (g per 100 g of water) |\n' +
      '| --- | --- | --- |\n' +
      '| Methanol | CH₃OH | miscible |\n' +
      '| Ethanol | CH₃CH₂OH | miscible |\n' +
      '| 1-Propanol | CH₃(CH₂)₂OH | miscible |\n' +
      '| 1-Butanol | CH₃(CH₂)₃OH | 7.7 |\n' +
      '| 1-Pentanol | CH₃(CH₂)₄OH | 2.2 |\n' +
      '| 1-Hexanol | CH₃(CH₂)₅OH | 0.59 |',
  },
  {
    id: 'chem-s017',
    title: 'Properties of four solids',
    kind: 'table',
    content:
      'A student tests four solids, W, X, Y and Z, and records the results.\n\n' +
      '| Solid | Melting point (°C) | Conducts as a solid? | Conducts when molten? | Dissolves in water? |\n' +
      '| --- | --- | --- | --- | --- |\n' +
      '| W | 801 | No | Yes | Yes |\n' +
      '| X | 1713 | No | No | No |\n' +
      '| Y | 1085 | Yes | Yes | No |\n' +
      '| Z | 114 | No | No | Very slightly |',
  },
  {
    id: 'chem-s018',
    title: 'Vapor pressure of water and ethanol',
    kind: 'graph',
    content:
      'The graph shows the equilibrium vapor pressure of liquid water and liquid ethanol, CH₃CH₂OH, from 0 °C to 100 °C. Standard atmospheric pressure is 760 torr.',
    chart: {
      title: 'Vapor pressure versus temperature',
      kind: 'line',
      xLabel: 'Temperature',
      xUnit: '°C',
      yLabel: 'Vapor pressure',
      yUnit: 'torr',
      xValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      yValues: [4.6, 9.2, 17.5, 31.8, 55.3, 92.5, 149, 234, 355, 526, 760],
      seriesLabel: 'Water',
      comparisonSeries: [{ label: 'Ethanol', yValues: [12.2, 23.6, 43.9, 78.8, 135, 222, 353, 543, 813, 1187, 1693] }],
      hidePointLabels: true,
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s010: Maxwell–Boltzmann ───────────────────────────────────
  {
    id: 'chem-s010-q1',
    stimulusId: 'chem-s010',
    unit: 'unit-3',
    topicSlug: 'properties-states-matter',
    difficulty: 'easy',
    stem: 'Which assignment of the curves to the samples is correct?',
    options: [
      'Curve 2 is O₂ at 900 K, and Curve 3 is He at 300 K.',
      'Curve 3 is O₂ at 900 K, and Curve 2 is He at 300 K.',
      'Curve 1 is O₂ at 900 K, and Curve 3 is He at 300 K.',
      'Curve 2 is O₂ at 900 K, and Curve 1 is He at 300 K.',
    ],
    correctIndex: 0,
    explanation:
      'At the same temperature all gases have the same average kinetic energy, ½mv². He atoms (4 g/mol) are much lighter than O₂ molecules (32 g/mol), so at 300 K they move much faster than O₂ does: their distribution is the broadest, peaking near 1100 m/s, which is Curve 3. Heating O₂ from 300 K to 900 K shifts its peak from about 400 to about 700 m/s, so Curve 1 is O₂ at 300 K and Curve 2 is O₂ at 900 K. Curve 1 has the lowest speeds, so it cannot be the hottest O₂ or the light He.',
  },
  {
    id: 'chem-s010-q2',
    stimulusId: 'chem-s010',
    unit: 'unit-3',
    topicSlug: 'properties-states-matter',
    difficulty: 'medium',
    stem: 'How does the average kinetic energy of the particles in Curve 3 compare with that of the particles in Curve 1?',
    options: [
      'Equal, because both samples are at the same temperature',
      'Equal, because the areas under the two curves are the same',
      'Greater for Curve 3, because its particles move faster on average',
      'Greater for Curve 1, because each of its particles has greater mass',
    ],
    correctIndex: 0,
    explanation:
      'Curve 1 is O₂ and Curve 3 is He, both at 300 K. Average kinetic energy depends only on temperature, so the two are equal. The He atoms are faster, but each has one-eighth the mass of an O₂ molecule, so ½mv² comes out the same; greater speed or greater mass alone does not decide kinetic energy. The equal areas show only that the samples contain the same number of particles; Curves 1 and 2 have equal areas too, yet different temperatures.',
  },
  {
    id: 'chem-s010-q3',
    stimulusId: 'chem-s010',
    unit: 'unit-3',
    topicSlug: 'properties-states-matter',
    difficulty: 'hard',
    stem: 'The maximum of Curve 2 is much lower than the maximum of Curve 1. Which statement best explains this?',
    options: [
      'Both samples contain the same number of molecules, and the speeds in Curve 2 are spread over a wider range.',
      'The sample of Curve 2 contains fewer molecules, so a smaller percent of them is counted at each speed.',
      'The molecules of Curve 2 have a lower average kinetic energy, so fewer of them reach the peak speed.',
      'The molecules of Curve 2 have a greater mass, so they cannot reach speeds as high as those of Curve 1.',
    ],
    correctIndex: 0,
    explanation:
      'Curves 1 and 2 are O₂ at 300 K and 900 K, and the stimulus says every sample has the same number of particles, so the areas under the curves are equal (both total 100%). At 900 K the speeds spread over a much wider range, so the curve must be lower to keep the same area. Curve 2 is the hotter sample, so its average kinetic energy is higher, not lower, and both curves describe the same gas, so the mass per molecule is the same. Curve 2 also reaches higher speeds than Curve 1, not lower ones.',
  },

  // ── Set chem-s011: deviations from ideal behavior ──────────────────────
  {
    id: 'chem-s011-q1',
    stimulusId: 'chem-s011',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'easy',
    stem: 'Based on the data, the particles of which gas have the strongest attractions for one another?',
    options: ['NH₃', 'He', 'N₂', 'CO₂'],
    correctIndex: 0,
    explanation:
      'Attractions between particles pull them away from the walls and soften their collisions, so the measured pressure falls below the ideal value. The largest drop is for NH₃ (29.9 atm versus 32.8 atm), consistent with hydrogen bonding between NH₃ molecules. CO₂ shows a smaller drop, N₂ essentially none, and He has a pressure above the ideal value, so its attractions are the weakest.',
  },
  {
    id: 'chem-s011-q2',
    stimulusId: 'chem-s011',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'medium',
    stem: 'Which statement best explains why the measured pressure of CO₂ is lower than 32.8 atm?',
    options: [
      'Attractions between CO₂ molecules reduce the force and frequency of their collisions with the container walls.',
      'CO₂ molecules have a larger mass than N₂ molecules, so they move too slowly to exert the ideal pressure.',
      'CO₂ molecules take up part of the container volume, so the space available for them to move in is smaller.',
      'Collisions between CO₂ molecules are inelastic, so the gas steadily loses kinetic energy and cools down.',
    ],
    correctIndex: 0,
    explanation:
      'Real-gas pressure falls below the ideal value when attractions between particles matter: a molecule about to hit the wall is pulled back by its neighbors. CO₂ has strong dispersion forces (22 electrons, a large polarizable electron cloud). At the same temperature, heavier molecules move more slowly but hit the wall harder, so mass alone does not change the ideal pressure. Particle volume would raise the pressure, not lower it. The container is held at 400 K, so the gas does not cool.',
  },
  {
    id: 'chem-s011-q3',
    stimulusId: 'chem-s011',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'hard',
    stem: 'Which statement best explains why the measured pressure of He is greater than the ideal value of 32.8 atm?',
    options: [
      'The He atoms occupy part of the container, so the free volume they move through is less than 1.00 L.',
      'The He atoms move faster than the other gases\' particles at 400 K, so each atom hits the walls harder.',
      'The He atoms attract one another more strongly than ideal particles, and this adds force to collisions.',
      'The He atoms gain kinetic energy in collisions with one another, so their average speed rises over time.',
    ],
    correctIndex: 0,
    explanation:
      'He atoms are so weakly attracted to one another that the attraction effect is negligible, which leaves the effect of particle volume. Because the atoms themselves take up space, the volume available for motion is a little less than 1.00 L, so collisions with the walls are more frequent and P is slightly above nRT/V. At the same temperature every gas has the same average kinetic energy, and lighter He atoms move faster but strike with less momentum each, so speed alone does not raise P. Attractions lower the pressure. Collisions conserve the total kinetic energy at constant temperature.',
  },

  // ── Set chem-s012: particle diagram of a solution ──────────────────────
  {
    id: 'chem-s012-q1',
    stimulusId: 'chem-s012',
    unit: 'unit-3',
    topicSlug: 'solutions-solubility',
    difficulty: 'easy',
    stem: 'Which compound could be the solute represented in the diagram?',
    options: ['K₂SO₄', 'KCl', 'MgSO₄', 'K₃PO₄'],
    correctIndex: 0,
    explanation:
      'The diagram shows two 1+ cations for every 2− anion, which is the composition of K₂SO₄ (2 K⁺ and 1 SO₄²⁻ per formula unit). KCl would give a 1 : 1 ratio of 1+ and 1− ions, MgSO₄ a 1 : 1 ratio of 2+ and 2− ions, and K₃PO₄ a 3 : 1 ratio with a 3− anion.',
  },
  {
    id: 'chem-s012-q2',
    stimulusId: 'chem-s012',
    unit: 'unit-3',
    topicSlug: 'solutions-solubility',
    difficulty: 'medium',
    stem: 'Based on the diagram, what is the molar concentration of the dissolved compound?',
    options: ['0.060 M', '0.12 M', '0.18 M', '0.030 M'],
    correctIndex: 0,
    explanation:
      'Each formula unit releases one X²⁻ ion, so the moles of compound equal the moles of X²⁻: 3 × 0.010 mol = 0.030 mol. Concentration = 0.030 mol ÷ 0.50 L = 0.060 M. 0.12 M is the concentration of M⁺ ions, 0.18 M counts all nine ions, and 0.030 M is the number of moles, not divided by the volume.',
  },
  {
    id: 'chem-s012-q3',
    stimulusId: 'chem-s012',
    unit: 'unit-3',
    topicSlug: 'solutions-solubility',
    difficulty: 'medium',
    stem: 'Water is added to the solution in the box until its total volume is 1.50 L. What is the concentration of X²⁻ ions in the diluted solution?',
    options: ['0.020 M', '0.040 M', '0.060 M', '0.010 M'],
    correctIndex: 0,
    explanation:
      'The box holds 3 X²⁻ ions × 0.010 mol = 0.030 mol of X²⁻. Adding water does not change the moles of ions, so [X²⁻] = 0.030 mol ÷ 1.50 L = 0.020 M. 0.040 M is the diluted concentration of M⁺ (0.060 mol ÷ 1.50 L), 0.060 M is the concentration of X²⁻ before dilution (0.030 mol ÷ 0.50 L), and 0.010 M divides by 3.00 L.',
  },

  // ── Set chem-s013: thin-layer chromatography ───────────────────────────
  {
    id: 'chem-s013-q1',
    stimulusId: 'chem-s013',
    unit: 'unit-3',
    topicSlug: 'mixtures-separations',
    difficulty: 'easy',
    stem: 'What is the Rf value of compound Q?',
    options: ['0.35', '2.86', '0.75', '0.15'],
    correctIndex: 0,
    explanation:
      'Rf = distance moved by the compound ÷ distance moved by the solvent front = 2.8 cm ÷ 8.0 cm = 0.35. 2.86 inverts the ratio (an Rf can never exceed 1), 0.75 is the Rf of P, and 0.15 is the Rf of R.',
  },
  {
    id: 'chem-s013-q2',
    stimulusId: 'chem-s013',
    unit: 'unit-3',
    topicSlug: 'mixtures-separations',
    difficulty: 'medium',
    stem: 'Which statement best explains why compound R moved the shortest distance?',
    options: [
      'R forms hydrogen bonds through its O–H group, so it is held most strongly by polar silica.',
      'R has the largest molar mass of the three, so it moves most slowly through the hexane solvent.',
      'R is the least polar of the three compounds, so it dissolves least well in the moving hexane.',
      'R is attracted most strongly to the hexane, so it stays dissolved in the solvent and lags behind.',
    ],
    correctIndex: 0,
    explanation:
      'In TLC a compound moves farther the more it prefers the mobile phase over the stationary phase. Benzyl alcohol has an O–H group, so it hydrogen-bonds to the very polar silica and spends the least time in the nonpolar hexane. Its molar mass (108 g/mol) is actually smaller than that of naphthalene (128 g/mol). R is the most polar compound, not the least, and a compound strongly attracted to the solvent would travel farther, not less far.',
  },
  {
    id: 'chem-s013-q3',
    stimulusId: 'chem-s013',
    unit: 'unit-3',
    topicSlug: 'mixtures-separations',
    difficulty: 'hard',
    stem: 'The experiment is repeated with ethyl acetate, a more polar solvent, in place of hexane. Which result is most likely?',
    options: [
      'Each compound moves farther, because the polar solvent attracts the compounds more strongly away from the silica.',
      'Each compound moves less far, because the polar solvent attaches to the silica and blocks the compounds from moving.',
      'The order reverses, so R moves the farthest and P moves the least far, because a polar solvent favors polar compounds.',
      'The distances stay the same, because an Rf value depends only on the compound and not on the solvent that is used.',
    ],
    correctIndex: 0,
    explanation:
      'A more polar mobile phase competes better with the polar silica for each compound, so every compound spends more time moving with the solvent and its Rf increases. The order of the compounds stays the same because the silica is still the most polar phase, so R remains the most strongly held; the third option overcorrects. Solvent molecules that occupy the silica would also free the compounds to move, not block them, and Rf values do depend on the solvent.',
  },

  // ── Set chem-s014: Beer–Lambert calibration ────────────────────────────
  {
    id: 'chem-s014-q1',
    stimulusId: 'chem-s014',
    unit: 'unit-3',
    topicSlug: 'mixtures-separations',
    difficulty: 'easy',
    stem: 'Based on the calibration line, what concentration of KMnO₄ gives an absorbance of 0.60 at 525 nm in the same cuvette?',
    options: ['2.5 × 10⁻⁴ M', '4.0 × 10⁻⁵ M', '6.0 × 10⁻⁴ M', '1.4 × 10⁻⁵ M'],
    correctIndex: 0,
    explanation:
      'The line passes through the origin with a slope of 0.24 per 1.0 × 10⁻⁴ M. Concentration = 0.60 ÷ 0.24 × (1.0 × 10⁻⁴ M) = 2.5 × 10⁻⁴ M, halfway between the 2.0 and 3.0 standards. 4.0 × 10⁻⁵ M inverts the ratio (0.24 ÷ 0.60), 6.0 × 10⁻⁴ M reads the absorbance value as if it were the concentration, and 1.4 × 10⁻⁵ M multiplies the absorbance by the slope instead of dividing.',
  },
  {
    id: 'chem-s014-q2',
    stimulusId: 'chem-s014',
    unit: 'unit-3',
    topicSlug: 'mixtures-separations',
    difficulty: 'medium',
    stem: 'Based on the calibration data, what is the molar absorptivity of KMnO₄ at 525 nm?',
    options: ['2.4 × 10³ M⁻¹ cm⁻¹', '0.24 M⁻¹ cm⁻¹', '4.2 × 10⁻⁴ M⁻¹ cm⁻¹', '2.4 × 10⁻⁵ M⁻¹ cm⁻¹'],
    correctIndex: 0,
    explanation:
      'By A = εbc, the slope of A versus c equals εb. Slope = 0.24 ÷ (1.0 × 10⁻⁴ M) = 2.4 × 10³ M⁻¹, and b = 1.00 cm, so ε = 2.4 × 10³ M⁻¹ cm⁻¹. 0.24 ignores the 10⁻⁴ in the concentration scale, 4.2 × 10⁻⁴ is the reciprocal of the slope, and 2.4 × 10⁻⁵ multiplies by 10⁻⁴ instead of dividing.',
  },
  {
    id: 'chem-s014-q3',
    stimulusId: 'chem-s014',
    unit: 'unit-3',
    topicSlug: 'mixtures-separations',
    difficulty: 'hard',
    stem: 'A 10.0 mL sample of a KMnO₄ solution is diluted with water to a total volume of 50.0 mL. The diluted solution has an absorbance of 0.60. What was the concentration of the original sample?',
    options: ['1.3 × 10⁻³ M', '5.0 × 10⁻⁵ M', '2.5 × 10⁻⁴ M', '1.0 × 10⁻³ M'],
    correctIndex: 0,
    explanation:
      'From the calibration line, A = 0.60 means the diluted solution is 2.5 × 10⁻⁴ M. Diluting 10.0 mL to 50.0 mL lowered the concentration by a factor of 5, so the original was 5 × 2.5 × 10⁻⁴ M = 1.25 × 10⁻³ M ≈ 1.3 × 10⁻³ M. 5.0 × 10⁻⁵ M divides by 5 instead of multiplying, 2.5 × 10⁻⁴ M ignores the dilution, and 1.0 × 10⁻³ M uses a factor of 4 (the 40.0 mL of water added) instead of the ratio of total volumes.',
  },

  // ── Set chem-s015: photon energy and bond energy ───────────────────────
  {
    id: 'chem-s015-q1',
    stimulusId: 'chem-s015',
    unit: 'unit-3',
    topicSlug: 'atomic-spectra',
    difficulty: 'medium',
    stem: 'What is the energy of one photon from light source B?',
    options: ['4.97 × 10⁻¹⁹ J', '4.97 × 10⁻²⁸ J', '1.66 × 10⁻²⁷ J', '2.99 × 10⁵ J'],
    correctIndex: 0,
    explanation:
      'E = hc/λ = (6.626 × 10⁻³⁴ J·s)(2.998 × 10⁸ m/s) ÷ (400 × 10⁻⁹ m) = 4.97 × 10⁻¹⁹ J. 4.97 × 10⁻²⁸ J leaves the wavelength in nanometers, 1.66 × 10⁻²⁷ J computes h/λ and omits c, and 2.99 × 10⁵ J is the energy of a whole mole of these photons (299 kJ/mol), not of one photon.',
  },
  {
    id: 'chem-s015-q2',
    stimulusId: 'chem-s015',
    unit: 'unit-3',
    topicSlug: 'atomic-spectra',
    difficulty: 'medium',
    stem: 'Which bonds in the table can be broken by single photons from light source B?',
    options: ['Br–Br and Cl–Cl only', 'Br–Br only', 'Br–Br, Cl–Cl and H–Cl only', 'All four bonds'],
    correctIndex: 0,
    explanation:
      'A photon of 400 nm light carries 4.97 × 10⁻¹⁹ J; one mole of such photons carries (4.97 × 10⁻¹⁹ J)(6.022 × 10²³ mol⁻¹) = 2.99 × 10⁵ J = 299 kJ. That exceeds the Br–Br (193 kJ/mol) and Cl–Cl (242 kJ/mol) bond energies but not H–Cl (431) or O=O (498). "Br–Br only" is the result for source A (184 kJ/mol), and "Br–Br, Cl–Cl and H–Cl" fits source C (479 kJ/mol).',
  },
  {
    id: 'chem-s015-q3',
    stimulusId: 'chem-s015',
    unit: 'unit-3',
    topicSlug: 'atomic-spectra',
    difficulty: 'hard',
    stem: 'Which of the light sources can break H–Cl bonds, one bond per photon?',
    options: ['Source C only', 'Sources B and C only', 'All three sources, if each beam is intense enough', 'None of the three sources'],
    correctIndex: 0,
    explanation:
      'Energy per mole of photons = (hc/λ) × Nₐ. Source A (650 nm): 3.06 × 10⁻¹⁹ J per photon, or 184 kJ/mol. Source B (400 nm): 299 kJ/mol. Source C (250 nm): 7.95 × 10⁻¹⁹ J per photon, or 479 kJ/mol. Only source C exceeds the 431 kJ/mol H–Cl bond energy. Source B can break Br–Br and Cl–Cl but not H–Cl. Intensity changes the number of photons, not the energy of each one, so a brighter beam from A or B still cannot break the bond. "None" overlooks source C.',
  },

  // ── Set chem-s016: solubility of alcohols ──────────────────────────────
  {
    id: 'chem-s016-q1',
    stimulusId: 'chem-s016',
    unit: 'unit-3',
    topicSlug: 'solutions-solubility',
    difficulty: 'medium',
    stem: 'Which statement best explains the trend in solubility from 1-butanol to 1-hexanol?',
    options: [
      'The nonpolar hydrocarbon chain grows, and it attracts water only weakly, so mixing breaks hydrogen bonds between water molecules without replacing them.',
      'The O–H group becomes less polar as the chain grows, so it forms weaker hydrogen bonds with water and the alcohol becomes less soluble.',
      'The larger alcohols have fewer electrons in their –OH groups, so the dispersion forces between each alcohol and water become weaker.',
      'The larger alcohols react with water more slowly, so less alcohol is converted into dissolved ions within the time of the test.',
    ],
    correctIndex: 0,
    explanation:
      'Each alcohol has one –OH group that hydrogen-bonds with water, but a growing hydrocarbon chain that interacts with water only through weak dispersion forces. To dissolve a long chain, water must give up some of its own hydrogen bonds, and nothing comparable replaces them, so solubility falls. The O–H group is essentially the same in every alcohol, all of them have identical –OH groups, and alcohols dissolve as molecules, not by reacting to form ions.',
  },
  {
    id: 'chem-s016-q2',
    stimulusId: 'chem-s016',
    unit: 'unit-3',
    topicSlug: 'solutions-solubility',
    difficulty: 'hard',
    stem: 'Which value is the best estimate of the solubility of 1-heptanol, CH₃(CH₂)₆OH, in water at 20 °C?',
    options: ['0.2 g per 100 g of water', '0.9 g per 100 g of water', '8 g per 100 g of water', 'Miscible'],
    correctIndex: 0,
    explanation:
      'Each added CH₂ group cuts the solubility to roughly a third or a quarter of the previous value: 7.7 → 2.2 → 0.59 g per 100 g. Continuing the pattern gives about 0.59 ÷ 3.5 ≈ 0.2 g per 100 g (the measured value is about 0.17). 0.9 g reverses the trend after 1-hexanol, 8 g returns to the 1-butanol value, and miscible ignores the effect of the longer nonpolar chain.',
  },

  // ── Set chem-s017: types of solids ─────────────────────────────────────
  {
    id: 'chem-s017-q1',
    stimulusId: 'chem-s017',
    unit: 'unit-3',
    topicSlug: 'properties-states-matter',
    difficulty: 'easy',
    stem: 'Which solid is most likely a metal?',
    options: ['Y', 'W', 'X', 'Z'],
    correctIndex: 0,
    explanation:
      'Only a metal conducts electricity as a solid, because its delocalized valence electrons are free to move; solid Y conducts and does not dissolve in water. W conducts only when molten (ionic), X conducts in neither state and melts very high (covalent network), and Z melts low and does not conduct (molecular).',
  },
  {
    id: 'chem-s017-q2',
    stimulusId: 'chem-s017',
    unit: 'unit-3',
    topicSlug: 'properties-states-matter',
    difficulty: 'medium',
    stem: 'Which solid is most likely a covalent network solid such as SiO₂?',
    options: ['X', 'W', 'Y', 'Z'],
    correctIndex: 0,
    explanation:
      'A covalent network solid is held together by covalent bonds throughout the whole crystal, so it has a very high melting point, conducts in neither the solid nor the liquid state (no mobile ions or electrons), and is insoluble in water. Solid X fits all of these. W behaves like an ionic solid, Y like a metal, and Z like a molecular solid, which melts low because only intermolecular forces must be overcome.',
  },
  {
    id: 'chem-s017-q3',
    stimulusId: 'chem-s017',
    unit: 'unit-3',
    topicSlug: 'properties-states-matter',
    difficulty: 'hard',
    stem: 'Which statement best explains the electrical conductivity results for solid W?',
    options: [
      'Its ions are held in fixed positions in the solid but can move past one another in the liquid.',
      'Melting breaks its covalent bonds and releases free electrons that are able to carry a current.',
      'Its delocalized electrons are trapped in the solid but begin to move freely once the solid melts.',
      'Melting converts its neutral molecules into ions, and those newly formed ions carry the current.',
    ],
    correctIndex: 0,
    explanation:
      'W (melting point 801 °C, soluble, conducts only when melted or dissolved) is an ionic solid. Current needs mobile charged particles. In the solid the ions are locked in the lattice; in the melt they can move. Melting an ionic solid does not break covalent bonds or release electrons, a solid with delocalized electrons would already conduct (like Y), and the ions exist in the solid before it melts, rather than forming from molecules.',
  },

  // ── Set chem-s018: vapor pressure ──────────────────────────────────────
  {
    id: 'chem-s018-q1',
    stimulusId: 'chem-s018',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'easy',
    stem: 'Based on the graph, what is the normal boiling point of ethanol?',
    options: ['About 78 °C', 'About 100 °C', 'About 60 °C', 'About 90 °C'],
    correctIndex: 0,
    explanation:
      'The normal boiling point is the temperature at which the vapor pressure equals 760 torr. The ethanol curve passes 760 torr between 70 °C (543 torr) and 80 °C (813 torr), at about 78 °C. 100 °C is the normal boiling point of water, at 60 °C ethanol\'s vapor pressure is only 353 torr, and by 90 °C it is already 1187 torr.',
  },
  {
    id: 'chem-s018-q2',
    stimulusId: 'chem-s018',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'medium',
    stem: 'Which conclusion about intermolecular forces is best supported by the graph?',
    options: [
      'Water has the stronger intermolecular forces, because its vapor pressure is the lower one at every temperature shown.',
      'Ethanol has the stronger intermolecular forces, because its vapor pressure is higher at every temperature shown.',
      'Water has the stronger intermolecular forces, because its vapor pressure rises more steeply near 100 °C.',
      'The two liquids have equal intermolecular forces, because both vapor pressures increase with temperature.',
    ],
    correctIndex: 0,
    explanation:
      'At any temperature, a liquid with stronger attractions between its molecules has fewer molecules with enough energy to escape, so it has a lower vapor pressure. Water\'s curve is below ethanol\'s everywhere, so water\'s intermolecular forces (more extensive hydrogen bonding) are stronger. A higher vapor pressure means weaker forces, the steepness near 100 °C is not the comparison that matters (ethanol\'s curve is actually steeper there), and every liquid\'s vapor pressure rises with temperature.',
  },
  {
    id: 'chem-s018-q3',
    stimulusId: 'chem-s018',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'hard',
    stem: 'Open beakers of water and of ethanol are placed in a chamber where the pressure is held at 400 torr. Both liquids are heated to 70 °C. Which liquid or liquids boil?',
    options: ['Ethanol only', 'Water only', 'Both water and ethanol', 'Neither water nor ethanol'],
    correctIndex: 0,
    explanation:
      'A liquid boils when its vapor pressure reaches the pressure above it. At 70 °C ethanol\'s vapor pressure is about 543 torr, above 400 torr, so it boils; water\'s is about 234 torr, below 400 torr, so it does not. Water boils only near 83 °C at this pressure. "Neither" assumes boiling requires 760 torr, and "Both" assumes any lowered pressure makes every liquid boil.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u3-001',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'easy',
    stem: 'What volume does 0.200 mol of an ideal gas occupy at 300 K and 1.00 atm? (R = 0.08206 L·atm/(mol·K))',
    options: ['4.92 L', '4.48 L', '499 L', '0.203 L'],
    correctIndex: 0,
    explanation:
      'V = nRT/P = (0.200 mol)(0.08206 L·atm/(mol·K))(300 K) ÷ 1.00 atm = 4.92 L. 4.48 L uses the 22.4 L/mol molar volume, which applies only at 273 K. 499 L uses R = 8.314, whose units do not match liters and atmospheres. 0.203 L is the reciprocal of the correct value.',
  },
  {
    id: 'chem-u3-002',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'easy',
    stem: 'Molecules of which of the following substances can form hydrogen bonds with one another?',
    options: ['CH₃NH₂', 'CH₃F', 'CH₃OCH₃', 'H₂CO'],
    correctIndex: 0,
    explanation:
      'Hydrogen bonding between identical molecules requires an H atom bonded directly to N, O or F, plus a lone pair on N, O or F in a neighboring molecule. Methylamine has N–H bonds. In CH₃F, CH₃OCH₃ and H₂CO, every H atom is bonded to carbon, so although F or O is present, these molecules cannot hydrogen-bond with one another.',
  },
  {
    id: 'chem-u3-003',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'easy',
    stem: 'A sample of gas in a rigid, sealed container is cooled from 350 K to 300 K. Which statement describes what happens?',
    options: [
      'The average kinetic energy of the particles decreases, and the pressure decreases.',
      'The average kinetic energy of the particles decreases, and the pressure stays the same.',
      'The average kinetic energy of the particles stays the same, and the pressure decreases.',
      'The average kinetic energy of the particles stays the same, and the pressure stays the same.',
    ],
    correctIndex: 0,
    explanation:
      'Average kinetic energy is proportional to the Kelvin temperature, so it falls. In a rigid container the volume is fixed, and slower particles hit the walls less often and less hard, so the pressure falls too (P ∝ T at constant n and V). The pressure could stay the same only if the volume shrank, which a rigid container prevents, and kinetic energy cannot stay constant while the temperature drops.',
  },
  {
    id: 'chem-u3-004',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'medium',
    stem: 'A container holds 4.0 g of He and 16.0 g of O₂. The total pressure is 1.5 atm. What is the partial pressure of He?',
    options: ['1.0 atm', '0.30 atm', '0.75 atm', '0.50 atm'],
    correctIndex: 0,
    explanation:
      'Moles: He = 4.0 g ÷ 4.0 g/mol = 1.0 mol; O₂ = 16.0 g ÷ 32.0 g/mol = 0.50 mol. The mole fraction of He is 1.0 ÷ 1.5 = 0.667, so P(He) = 0.667 × 1.5 atm = 1.0 atm. 0.30 atm uses the mass fraction (4.0/20.0), 0.75 atm splits the pressure evenly, and 0.50 atm is the partial pressure of O₂.',
  },
  {
    id: 'chem-u3-005',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'medium',
    stem: 'A pure gas has a density of 1.25 g/L at 273 K and 1.00 atm. What is its molar mass? (R = 0.08206 L·atm/(mol·K))',
    options: ['28.0 g/mol', '17.9 g/mol', '0.0357 g/mol', '2.30 g/mol'],
    correctIndex: 0,
    explanation:
      'From PV = nRT with n = m/M, M = dRT/P = (1.25 g/L)(0.08206)(273 K) ÷ 1.00 atm = 28.0 g/mol, the molar mass of N₂ or CO. 17.9 g/mol divides 22.4 by the density, 0.0357 is the reciprocal of 28.0, and 2.30 g/mol leaves the temperature out of the product (1.25 × 0.08206 × 22.4).',
  },
  {
    id: 'chem-u3-006',
    unit: 'unit-3',
    topicSlug: 'solutions-solubility',
    difficulty: 'medium',
    stem: 'A solution is made by mixing 46.1 g of ethanol, C₂H₅OH (46.1 g/mol), with 54.0 g of water (18.0 g/mol). What is the mole fraction of ethanol?',
    options: ['0.250', '0.461', '0.333', '0.750'],
    correctIndex: 0,
    explanation:
      'Ethanol = 46.1 ÷ 46.1 = 1.00 mol; water = 54.0 ÷ 18.0 = 3.00 mol. Mole fraction = 1.00 ÷ (1.00 + 3.00) = 0.250. 0.461 is the mass fraction, 0.333 is the ethanol : water mole ratio rather than a fraction of the total, and 0.750 is the mole fraction of water.',
  },
  {
    id: 'chem-u3-007',
    unit: 'unit-3',
    topicSlug: 'mixtures-separations',
    difficulty: 'medium',
    stem: 'A mixture of hexane, C₆H₁₄ (bp 69 °C), and octane, C₈H₁₈ (bp 126 °C), is separated by distillation. Which liquid is enriched in the first distillate collected, and why?',
    options: [
      'Hexane, because weaker dispersion forces give it the higher vapor pressure',
      'Hexane, because its stronger dispersion forces make it evaporate more readily',
      'Octane, because its larger molecules absorb heat from the flask more quickly',
      'Octane, because its molecules have the higher vapor pressure at every temperature',
    ],
    correctIndex: 0,
    explanation:
      'Distillation separates liquids by volatility. Hexane has fewer electrons and a smaller surface area than octane, so its London dispersion forces are weaker, its vapor pressure is higher and its boiling point is lower, so the vapor (and the first distillate) is richer in hexane. Stronger forces would make a liquid less volatile, heat absorption is not the deciding factor, and octane has the lower vapor pressure.',
  },
  {
    id: 'chem-u3-008',
    unit: 'unit-3',
    topicSlug: 'types-intermolecular-forces',
    difficulty: 'medium',
    stem: 'Pentane, CH₃CH₂CH₂CH₂CH₃, boils at 36 °C, and its isomer neopentane, C(CH₃)₄, boils at 10 °C. Which statement best explains the difference?',
    options: [
      'Pentane\'s long, chain-shaped molecules have more surface contact, so their dispersion forces are stronger.',
      'Pentane has more electrons than neopentane, so the dispersion forces between its molecules are stronger.',
      'Neopentane can form hydrogen bonds with itself, and these attractions lower its boiling point instead.',
      'Pentane molecules are polar, while the more symmetrical neopentane molecules are completely nonpolar.',
    ],
    correctIndex: 0,
    explanation:
      'Both compounds are C₅H₁₂, so they have the same number of electrons and both are essentially nonpolar. The difference is shape: pentane\'s extended chains touch along more of their length than neopentane\'s compact, nearly spherical molecules, so dispersion forces are stronger and the boiling point is higher. Neither compound can hydrogen-bond (no H on N, O or F), and hydrogen bonding would raise a boiling point, not lower it.',
  },
  {
    id: 'chem-u3-009',
    unit: 'unit-3',
    topicSlug: 'ideal-gas-law',
    difficulty: 'hard',
    stem: 'A 0.654 g sample of zinc (65.38 g/mol) reacts completely with excess HCl: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g). What volume of dry H₂ is produced at 300. K and 0.985 atm? (R = 0.08206 L·atm/(mol·K))',
    options: ['0.250 L', '0.500 L', '0.224 L', '0.125 L'],
    correctIndex: 0,
    explanation:
      'n(Zn) = 0.654 ÷ 65.38 = 0.0100 mol, and 1 mol Zn gives 1 mol H₂. V = nRT/P = (0.0100)(0.08206)(300.) ÷ 0.985 = 0.250 L. 0.500 L uses the 2 : 1 ratio of HCl to Zn, 0.224 L uses 22.4 L/mol as if the gas were at 273 K and 1 atm, and 0.125 L halves the moles of H₂.',
  },
  {
    id: 'chem-u3-010',
    unit: 'unit-3',
    topicSlug: 'properties-states-matter',
    difficulty: 'hard',
    stem: 'Diamond and graphite are both made only of carbon atoms, but graphite conducts electricity and diamond does not. Which statement best explains the difference?',
    options: [
      'In graphite each C atom bonds to three others in a layer, leaving electrons in π bonds that are delocalized across the layer.',
      'In graphite the layers are held together by ionic bonds, and ions moving between the layers carry the electric current.',
      'In diamond each C atom forms only two bonds, so the remaining electrons are held in lone pairs and cannot move.',
      'In diamond the C atoms are held by dispersion forces only, and these weak forces cannot transmit electrons.',
    ],
    correctIndex: 0,
    explanation:
      'In graphite each carbon is bonded to three others in a flat sheet (sp²), and the remaining electron on each atom is part of a π system delocalized over the whole layer, so electrons can move along the layers. In diamond each carbon forms four σ bonds (sp³) in a three-dimensional network, so every valence electron is localized in a bond. Graphite\'s layers are held by dispersion forces, not ionic bonds, and diamond is a covalent network, not a solid held by dispersion forces.',
  },
]
