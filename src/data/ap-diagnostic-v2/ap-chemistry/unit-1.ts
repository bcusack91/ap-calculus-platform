/**
 * AP Chemistry diagnostic v2 — Unit 1: Atomic Structure and Properties
 * (CED 1.1–1.8). Four stimulus sets (mass spectrum, PES, ionization-energy
 * table, composition data) and standalone items. Rules:
 * ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s002',
    title: 'Mass spectrum of a naturally occurring element X',
    kind: 'graph',
    content:
      'A sample of a pure element, X, is analyzed in a mass spectrometer. The spectrum shows two peaks, at masses of 63 amu and 65 amu. The height of each bar is the percent of X atoms with that mass.',
    chart: {
      title: 'Mass spectrum of element X',
      kind: 'bar',
      xLabel: 'Mass',
      xUnit: 'amu',
      yLabel: 'Relative abundance',
      yUnit: '%',
      xValues: [63, 65],
      yValues: [69.2, 30.8],
      seriesLabel: 'Element X',
    },
  },
  {
    id: 'chem-s003',
    title: 'Photoelectron spectrum of a neutral atom',
    kind: 'graph',
    content:
      'The photoelectron spectrum of a gas-phase sample of one element is shown. Binding energy increases to the left, as is usual for PES. Each bar is labeled with its binding energy in MJ/mol, and its height is proportional to the number of electrons with that binding energy.',
    chart: {
      title: 'Photoelectron spectrum (binding energy decreases to the right)',
      kind: 'bar',
      xLabel: 'Binding energy',
      xUnit: 'MJ/mol',
      yLabel: 'Relative number of electrons',
      yUnit: 'relative',
      xValues: ['151', '12.1', '7.19', '1.09', '0.58'],
      yValues: [2, 2, 6, 2, 1],
      seriesLabel: 'Relative peak height',
    },
  },
  {
    id: 'chem-s004',
    title: 'First ionization energies of period 2 elements',
    kind: 'table',
    content:
      'The table gives the first ionization energy of each element from boron to neon.\n\n' +
      '| Element | Atomic number | First ionization energy (kJ/mol) |\n' +
      '| --- | --- | --- |\n' +
      '| B | 5 | 801 |\n' +
      '| C | 6 | 1086 |\n' +
      '| N | 7 | 1402 |\n' +
      '| O | 8 | 1314 |\n' +
      '| F | 9 | 1681 |\n' +
      '| Ne | 10 | 2081 |',
  },
  {
    id: 'chem-s005',
    title: 'Analysis of three copper oxide samples',
    kind: 'table',
    content:
      'A student heats three samples of copper oxide in a stream of hydrogen gas until only copper metal remains. The student records the mass of copper left and calculates the mass of oxygen that was removed. (Molar masses: Cu 63.55 g/mol, O 16.00 g/mol.)\n\n' +
      '| Sample | Mass of copper (g) | Mass of oxygen (g) |\n' +
      '| --- | --- | --- |\n' +
      '| 1 | 3.18 | 0.400 |\n' +
      '| 2 | 6.36 | 0.800 |\n' +
      '| 3 | 3.18 | 0.800 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s002: mass spectrum ───────────────────────────────────────
  {
    id: 'chem-s002-q1',
    stimulusId: 'chem-s002',
    unit: 'unit-1',
    topicSlug: 'electron-configuration',
    difficulty: 'medium',
    stem: 'Based on the mass spectrum and the periodic table, element X is most likely which element?',
    options: ['Cu', 'Zn', 'Ni', 'Ga'],
    correctIndex: 0,
    explanation:
      'The average atomic mass is the abundance-weighted mean of the isotope masses: (0.692)(63) + (0.308)(65) = 43.6 + 20.0 = 63.6 amu, which matches copper (63.55). Zinc (65.38) is what you get by picking the larger mass number; nickel (58.69) and gallium (69.72) do not match any weighting of 63 and 65.',
  },
  {
    id: 'chem-s002-q2',
    stimulusId: 'chem-s002',
    unit: 'unit-1',
    topicSlug: 'electron-configuration',
    difficulty: 'hard',
    stem: 'Which statement about individual atoms of element X is best supported by the spectrum?',
    options: [
      'No atom of X has a mass of 63.6 amu, which is a weighted average of the isotopes.',
      'Most atoms of X have a mass of 63.6 amu, and a few are slightly heavier or lighter.',
      'Atoms with a mass of 65 amu have two more protons than atoms with a mass of 63 amu.',
      'Atoms with a mass of 65 amu have two more electrons than atoms with a mass of 63 amu.',
    ],
    correctIndex: 0,
    explanation:
      'The spectrum shows only two kinds of atoms, of mass 63 and 65 amu. The 63.6 amu value is a weighted average, so no single atom has it; thinking every atom has the average mass is the misconception in the second option. Isotopes of one element have the same number of protons (and, as neutral atoms, electrons); the 2 amu difference comes from two extra neutrons.',
  },

  // ── Set chem-s003: PES ─────────────────────────────────────────────────
  {
    id: 'chem-s003-q1',
    stimulusId: 'chem-s003',
    unit: 'unit-1',
    topicSlug: 'photoelectron-spectroscopy',
    difficulty: 'easy',
    stem: 'Based on the spectrum, which element was analyzed?',
    options: ['Al', 'Mg', 'Si', 'Na'],
    correctIndex: 0,
    explanation:
      'The peak heights 2, 2, 6, 2, 1 give the configuration 1s² 2s² 2p⁶ 3s² 3p¹, a total of 13 electrons, so the element is aluminum. Mg (12 electrons) would have no 3p peak, Si (14) would have a 3p peak of height 2, and Na (11) would have a 3s peak of height 1 and no 3p peak.',
  },
  {
    id: 'chem-s003-q2',
    stimulusId: 'chem-s003',
    unit: 'unit-1',
    topicSlug: 'photoelectron-spectroscopy',
    difficulty: 'hard',
    stem: 'The 3s and 3p electrons of this atom are in the same shell, yet the 3p peak is at 0.58 MJ/mol and the 3s peak is at 1.09 MJ/mol. Which statement best accounts for the difference?',
    options: [
      'The 3p electron is, on average, slightly farther from the nucleus and more shielded, so it is attracted less strongly.',
      'The 3p electron feels a larger nuclear charge than the 3s electrons, so less energy is needed to remove it from the atom.',
      'The 3p electron is paired with another electron in its orbital, and the repulsion between them lowers its binding energy.',
      'The 3p electron is a core electron, and core electrons always have lower binding energies than the valence electrons do.',
    ],
    correctIndex: 0,
    explanation:
      'Within a shell, p electrons penetrate toward the nucleus less than s electrons, so they are more shielded and, on average, farther away. By Coulomb\'s law the attraction is weaker and the binding energy lower. All electrons in an atom feel the same nuclear charge, and a larger attraction would raise the binding energy, not lower it. The single 3p electron in Al is unpaired. Core electrons (1s, 2s, 2p) have the highest binding energies, not the lowest.',
  },

  // ── Set chem-s004: ionization energies ─────────────────────────────────
  {
    id: 'chem-s004-q1',
    stimulusId: 'chem-s004',
    unit: 'unit-1',
    topicSlug: 'periodic-trends',
    difficulty: 'medium',
    stem: 'Which statement best explains the overall increase in first ionization energy from B to Ne shown in the table?',
    options: [
      'Protons are added to the nucleus while the added electrons enter the same shell, so the outer electrons are held more strongly.',
      'Electrons are added to a new shell with each element, and each new shell lies closer to the nucleus than the one before it.',
      'The atoms become larger across the period, so the outermost electrons are pulled more strongly by the electrons in the core.',
      'Neutrons are added to the nucleus with each element, and their extra mass pulls the outermost electrons in more tightly.',
    ],
    correctIndex: 0,
    explanation:
      'Across period 2 the nuclear charge rises by one each step, but the added electrons all go into the n = 2 shell and shield each other poorly, so the effective attraction on the valence electrons grows and so does the ionization energy. All these atoms use the same valence shell, atomic radius decreases (not increases) across a period, core electrons repel rather than pull outer electrons, and neutrons carry no charge.',
  },
  {
    id: 'chem-s004-q2',
    stimulusId: 'chem-s004',
    unit: 'unit-1',
    topicSlug: 'periodic-trends',
    difficulty: 'hard',
    stem: 'The first ionization energy of O is lower than that of N, which breaks the general trend in the table. Which explanation is consistent with the electron configurations of the two atoms?',
    options: [
      'In O, one 2p orbital holds two electrons, and the repulsion between them makes one of those electrons easier to remove.',
      'In O, the electron removed comes from a 3s orbital, which is farther from the nucleus than the 2p orbitals of N.',
      'In O, the nucleus has a smaller positive charge than in N, so all of the electrons in O are held less strongly.',
      'In O, the 2p electrons are shielded by two additional core electrons that N does not have in its first shell.',
    ],
    correctIndex: 0,
    explanation:
      'N is 1s² 2s² 2p³ with one electron in each 2p orbital; O is 1s² 2s² 2p⁴, so one 2p orbital is doubly occupied. Electron–electron repulsion in that orbital raises its energy, so less energy is needed to remove one of the paired electrons. O\'s outer electrons are 2p, not 3s; O has 8 protons to N\'s 7; and both atoms have the same 1s² core.',
  },

  // ── Set chem-s005: composition ─────────────────────────────────────────
  {
    id: 'chem-s005-q1',
    stimulusId: 'chem-s005',
    unit: 'unit-1',
    topicSlug: 'moles-molar-mass',
    difficulty: 'medium',
    stem: 'Based on the data, what is the empirical formula of the oxide in sample 1?',
    options: ['Cu₂O', 'CuO', 'CuO₂', 'Cu₃O₂'],
    correctIndex: 0,
    explanation:
      'Moles of Cu = 3.18 g ÷ 63.55 g/mol = 0.0500 mol; moles of O = 0.400 g ÷ 16.00 g/mol = 0.0250 mol. The ratio Cu : O = 0.0500 : 0.0250 = 2 : 1, so the formula is Cu₂O. CuO is the formula for sample 3, CuO₂ inverts the mole ratio, and Cu₃O₂ comes from dividing masses instead of moles (3.18 : 0.400 is not a mole ratio).',
  },
  {
    id: 'chem-s005-q2',
    stimulusId: 'chem-s005',
    unit: 'unit-1',
    topicSlug: 'moles-molar-mass',
    difficulty: 'hard',
    stem: 'Which conclusion about the three samples is best supported by the data?',
    options: [
      'Samples 1 and 2 are the same compound, and sample 3 is a different compound of copper and oxygen.',
      'Samples 1 and 3 are the same compound, because each contains exactly the same mass of copper.',
      'All three samples are the same compound, because each one contains only copper and oxygen atoms.',
      'Samples 2 and 3 are the same compound, because each one contains exactly 0.800 g of oxygen.',
    ],
    correctIndex: 0,
    explanation:
      'A pure compound has a fixed mass ratio of its elements. Samples 1 and 2 both have Cu : O = 7.95 by mass (3.18/0.400 and 6.36/0.800), the 2 : 1 mole ratio of Cu₂O. Sample 3 has Cu : O = 3.98 by mass, a 1 : 1 mole ratio (0.0500 mol Cu : 0.0500 mol O), so it is CuO. Matching one mass between two samples says nothing about their composition; the ratio is what matters, and two compounds can contain the same elements.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u1-002',
    unit: 'unit-1',
    topicSlug: 'moles-molar-mass',
    difficulty: 'easy',
    stem: 'What is the mass of 0.250 mol of calcium carbonate, CaCO₃ (molar mass 100.09 g/mol)?',
    options: ['25.0 g', '400. g', '0.00250 g', '100. g'],
    correctIndex: 0,
    explanation:
      'mass = moles × molar mass = 0.250 mol × 100.09 g/mol = 25.0 g. Dividing the molar mass by the moles gives 400 g, dividing moles by molar mass gives 0.00250, and 100 g is the mass of a full mole.',
  },
  {
    id: 'chem-u1-003',
    unit: 'unit-1',
    topicSlug: 'electron-configuration',
    difficulty: 'easy',
    stem: 'How many valence electrons does a ground-state atom of selenium (Se) have?',
    options: ['6', '4', '16', '34'],
    correctIndex: 0,
    explanation:
      'Se is [Ar] 3d¹⁰ 4s² 4p⁴. Its valence electrons are those in the outermost shell, n = 4: 2 + 4 = 6, as for every group 16 element. 4 counts only the 4p electrons, 16 is the group number read as an electron count, and 34 is the total number of electrons.',
  },
  {
    id: 'chem-u1-004',
    unit: 'unit-1',
    topicSlug: 'periodic-trends',
    difficulty: 'easy',
    stem: 'Which of the following atoms has the greatest electronegativity?',
    options: ['S', 'P', 'Se', 'As'],
    correctIndex: 0,
    explanation:
      'Electronegativity increases from left to right across a period and decreases down a group. S is to the right of P in period 3 and above Se in group 16, so it has the highest value of the four. As is both left of and below S, so it has the lowest.',
  },
  {
    id: 'chem-u1-005',
    unit: 'unit-1',
    topicSlug: 'periodic-trends',
    difficulty: 'easy',
    stem: 'Element Q is in group 2 and element Z is in group 15 of the periodic table. What is the most likely formula of the ionic compound formed by Q and Z?',
    options: ['Q₃Z₂', 'Q₂Z₃', 'QZ', 'QZ₂'],
    correctIndex: 0,
    explanation:
      'A group 2 element loses its 2 valence electrons to form Q²⁺, and a group 15 element gains 3 electrons to form Z³⁻. A neutral compound needs 3(+2) + 2(−3) = 0, so the formula is Q₃Z₂. Q₂Z₃ swaps the subscripts, and QZ and QZ₂ do not balance the charges.',
  },
  {
    id: 'chem-u1-006',
    unit: 'unit-1',
    topicSlug: 'moles-molar-mass',
    difficulty: 'medium',
    stem: 'A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula?',
    options: ['CH₂O', 'CHO', 'C₂H₄O', 'CH₃O₂'],
    correctIndex: 0,
    explanation:
      'In 100 g: C 40.0 g ÷ 12.01 = 3.33 mol, H 6.7 g ÷ 1.008 = 6.6 mol, O 53.3 g ÷ 16.00 = 3.33 mol. Dividing by 3.33 gives C : H : O = 1 : 2 : 1, so CH₂O. CHO forgets to convert the hydrogen mass to moles with its small molar mass, and C₂H₄O and CH₃O₂ do not fit the 1 : 2 : 1 mole ratio.',
  },
  {
    id: 'chem-u1-007',
    unit: 'unit-1',
    topicSlug: 'periodic-trends',
    difficulty: 'medium',
    stem: 'The radius of a Mg²⁺ ion is much smaller than the radius of a Mg atom. Which statement best explains this?',
    options: [
      'Mg²⁺ has lost all its n = 3 electrons, so its outermost electrons are in the smaller n = 2 shell.',
      'Mg²⁺ has gained two protons, so its nucleus pulls on the remaining electrons with a larger charge.',
      'Mg²⁺ has two more electrons in its 3s orbital, so the electron cloud is pulled closer to the nucleus.',
      'Mg²⁺ has the same electrons as Mg, but the ion\'s positive charge squeezes them into a smaller space.',
    ],
    correctIndex: 0,
    explanation:
      'Mg is [Ne] 3s². Losing both 3s electrons leaves Mg²⁺ with the [Ne] configuration, whose outermost electrons are in the n = 2 shell, much closer to the nucleus. Forming a cation never changes the number of protons, the ion has fewer electrons, not more, and the electron count does change from 12 to 10.',
  },
  {
    id: 'chem-u1-008',
    unit: 'unit-1',
    topicSlug: 'electron-configuration',
    difficulty: 'hard',
    stem: 'Which of the following is the ground-state electron configuration of the Ni²⁺ ion? (Ni: atomic number 28)',
    options: ['[Ar] 3d⁸', '[Ar] 4s² 3d⁶', '[Ar] 4s¹ 3d⁷', '[Ar] 3d¹⁰'],
    correctIndex: 0,
    explanation:
      'Neutral Ni is [Ar] 4s² 3d⁸. When a transition metal forms a cation, the 4s electrons are removed before the 3d electrons, so Ni²⁺ is [Ar] 3d⁸. [Ar] 4s² 3d⁶ removes the two electrons from 3d instead, [Ar] 4s¹ 3d⁷ removes one from each, and [Ar] 3d¹⁰ has 28 − 18 = 10 electrons beyond argon, the count for a neutral atom, not for Ni²⁺.',
  },
  {
    id: 'chem-u1-009',
    unit: 'unit-1',
    topicSlug: 'moles-molar-mass',
    difficulty: 'hard',
    stem: 'A 2.00 g mixture of NaCl (58.44 g/mol) and KNO₃ is dissolved in water, and excess AgNO₃ is added. All the chloride precipitates as 2.87 g of AgCl (143.32 g/mol). What is the percent by mass of NaCl in the mixture?',
    options: ['58.5%', '41.5%', '29.2%', '71.8%'],
    correctIndex: 0,
    explanation:
      'All the Cl in the AgCl came from NaCl: 2.87 g ÷ 143.32 g/mol = 0.0200 mol AgCl = 0.0200 mol NaCl. Mass of NaCl = 0.0200 × 58.44 = 1.17 g, and 1.17 ÷ 2.00 × 100 = 58.5%. 41.5% is the KNO₃ share, 29.2% uses only half the moles of NaCl, and 71.8% divides the AgCl mass by 4.00 g as if it were twice the sample.',
  },
]
