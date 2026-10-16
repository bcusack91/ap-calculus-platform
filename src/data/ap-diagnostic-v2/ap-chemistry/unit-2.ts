/**
 * AP Chemistry diagnostic v2 — Unit 2: Compound Structure and Properties
 * (CED 2.1–2.7). Four stimulus sets (potential-energy curves, Lewis
 * structures, ionic-solid data, alloy diagrams) and standalone items. No d-orbital
 * hybridization, MO theory or specific crystal structures (2.3, 2.7 exclusions).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { SVG_CHEM_S007, SVG_CHEM_S009 } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'chem-s006',
    title: 'Potential energy of N₂ and O₂ as a function of internuclear distance',
    kind: 'graph',
    content:
      'The graph shows the potential energy of a pair of N atoms and of a pair of O atoms as the distance between the two nuclei changes. Zero energy corresponds to two separated atoms. The lowest point of each curve marks the bond length and the bond energy of the molecule.',
    chart: {
      title: 'Potential energy versus internuclear distance',
      kind: 'line',
      xLabel: 'Internuclear distance',
      xUnit: 'pm',
      yLabel: 'Potential energy',
      yUnit: 'kJ/mol',
      xValues: [90, 100, 110, 120, 130, 140, 160, 180, 200, 240, 280],
      yValues: [-465, -855, -945, -892, -781, -655, -428, -266, -160, -56, -19],
      seriesLabel: 'N₂',
      comparisonSeries: [{ label: 'O₂', yValues: [310, -222, -441, -498, -476, -420, -291, -187, -115, -42, -15] }],
      hidePointLabels: true,
    },
  },
  {
    id: 'chem-s007',
    title: 'Three Lewis structures for the cyanate ion, OCN⁻',
    kind: 'figure',
    content:
      'Three Lewis structures are proposed for the cyanate ion, OCN⁻ (16 valence electrons, carbon in the center). Structure I: O=C=N, with two lone pairs on O and two lone pairs on N. Structure II: O≡C–N, with one lone pair on O and three lone pairs on N. Structure III: O–C≡N, with three lone pairs on O and one lone pair on N. Each structure is drawn in brackets with an overall charge of 1−.',
    svg: SVG_CHEM_S007,
  },
  {
    id: 'chem-s008',
    title: 'Melting points and ion radii of five ionic compounds',
    kind: 'table',
    content:
      'The table lists the melting point of five ionic compounds and the radius of each ion.\n\n' +
      '| Compound | Cation radius (pm) | Anion radius (pm) | Melting point (°C) |\n' +
      '| --- | --- | --- | --- |\n' +
      '| NaF | 102 | 133 | 993 |\n' +
      '| NaCl | 102 | 181 | 801 |\n' +
      '| NaBr | 102 | 196 | 747 |\n' +
      '| NaI | 102 | 220 | 661 |\n' +
      '| MgO | 72 | 140 | 2852 |',
  },
  {
    id: 'chem-s009',
    title: 'Particle diagrams of a metal and two alloys',
    kind: 'figure',
    content:
      'The three diagrams represent solids at the particle level. Diagram 1 shows a regular array of identical large atoms. Diagram 2 shows the same array with much smaller atoms occupying some of the spaces between the large atoms. Diagram 3 shows the same array with some of the large atoms replaced by atoms of a different element that are nearly the same size (shaded).',
    svg: SVG_CHEM_S009,
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ── Set chem-s006: potential-energy curves ─────────────────────────────
  {
    id: 'chem-s006-q1',
    stimulusId: 'chem-s006',
    unit: 'unit-2',
    topicSlug: 'types-of-chemical-bonds',
    difficulty: 'easy',
    stem: 'Based on the graph, what is the bond length of N₂?',
    options: ['110 pm', '90 pm', '120 pm', '280 pm'],
    correctIndex: 0,
    explanation:
      'The bond length is the internuclear distance at the minimum of the potential-energy curve, where attraction and repulsion balance. The N₂ curve is lowest (−945 kJ/mol) at 110 pm. At 90 pm the energy is rising steeply because the nuclei repel, 120 pm is the minimum of the O₂ curve, and at 280 pm the energy is near zero because the atoms are nearly separated.',
  },
  {
    id: 'chem-s006-q2',
    stimulusId: 'chem-s006',
    unit: 'unit-2',
    topicSlug: 'types-of-chemical-bonds',
    difficulty: 'hard',
    stem: 'Which statement best explains why the N₂ curve has a deeper minimum at a shorter distance than the O₂ curve?',
    options: [
      'N₂ has a triple bond and O₂ has a double bond, and a higher bond order gives a bond that is shorter and stronger.',
      'O₂ has more electrons than N₂, so its stronger dispersion forces pull the two O nuclei farther apart.',
      'N atoms are larger than O atoms, and larger atoms overlap more, which makes the bond shorter and stronger.',
      'N₂ is a polar molecule and O₂ is nonpolar, so the attraction between the two N atoms is the greater one.',
    ],
    correctIndex: 0,
    explanation:
      'The depth of the well is the bond energy (about 945 kJ/mol for N₂ versus 498 kJ/mol for O₂) and its position is the bond length (110 pm versus 120 pm). N≡N shares three electron pairs and O=O two, so N₂ is both stronger and shorter. Dispersion forces act between molecules, not within a bond. N is slightly larger than O, which would lengthen the bond, not shorten it. Both molecules are nonpolar, since each contains two identical atoms.',
  },

  // ── Set chem-s007: Lewis structures / formal charge ────────────────────
  {
    id: 'chem-s007-q1',
    stimulusId: 'chem-s007',
    unit: 'unit-2',
    topicSlug: 'lewis-structures-formal-charge',
    difficulty: 'medium',
    stem: 'What is the formal charge on the nitrogen atom in structure II?',
    options: ['−2', '−1', '0', '+1'],
    correctIndex: 0,
    explanation:
      'Formal charge = valence electrons − nonbonding electrons − ½(bonding electrons). In structure II, N has 3 lone pairs (6 electrons) and one single bond (2 electrons): 5 − 6 − 1 = −2. −1 is the formal charge on N in structure I, 0 is its value in structure III, and +1 is the formal charge on O in structure II.',
  },
  {
    id: 'chem-s007-q2',
    stimulusId: 'chem-s007',
    unit: 'unit-2',
    topicSlug: 'lewis-structures-formal-charge',
    difficulty: 'hard',
    stem: 'Based on formal charges, which structure best represents the cyanate ion?',
    options: [
      'Structure III, because its formal charges are small and the negative charge is on O, the most electronegative atom',
      'Structure I, because its formal charges are small and the negative charge is on N, which holds extra electrons more easily',
      'Structure II, because it has the shortest carbon–oxygen bond, which makes it the most stable arrangement of the atoms',
      'All three equally, because every structure has the same total charge of 1− and the same number of valence electrons',
    ],
    correctIndex: 0,
    explanation:
      'Formal charges (O, C, N): I is 0, 0, −1; II is +1, 0, −2; III is −1, 0, 0. II has the largest charges and puts + on the most electronegative atom, so it is the worst. I and III both have only one −1 charge, and the better structure puts it on the more electronegative atom, O, which is structure III. N is less electronegative than O, so it holds a negative charge less well. Resonance structures with different formal charges do not contribute equally, even though they share the same total charge and electron count.',
  },

  // ── Set chem-s008: ionic solids ────────────────────────────────────────
  {
    id: 'chem-s008-q1',
    stimulusId: 'chem-s008',
    unit: 'unit-2',
    topicSlug: 'types-of-chemical-bonds',
    difficulty: 'medium',
    stem: 'Which statement best explains the decrease in melting point from NaF to NaI?',
    options: [
      'As the anion gets larger, the distance between ion centers grows, so the Coulombic attraction weakens.',
      'As the anion gets larger, it has more electrons, so the London dispersion forces between the formula units weaken.',
      'As the anion gets larger, its charge becomes more negative, so it repels the neighboring anions in the lattice more strongly.',
      'As the anion gets larger, the Na–X bond becomes more covalent, so the compound becomes a molecular solid that melts easily.',
    ],
    correctIndex: 0,
    explanation:
      'All four sodium halides have +1 and −1 ions, so by Coulomb\'s law the attraction depends on the distance between ion centers. That distance grows from 235 pm in NaF to 322 pm in NaI, so less energy is needed to break up the lattice. More electrons would strengthen dispersion forces, not weaken them, and in any case melting an ionic solid overcomes ionic attractions. Every halide ion has a charge of −1, and the sodium halides remain ionic solids.',
  },
  {
    id: 'chem-s008-q2',
    stimulusId: 'chem-s008',
    unit: 'unit-2',
    topicSlug: 'types-of-chemical-bonds',
    difficulty: 'hard',
    stem: 'The ions in MgO are about the same total size as the ions in NaF, yet MgO melts nearly 1,900 °C higher. Which statement best explains this?',
    options: [
      'The ions in MgO carry charges of +2 and −2, so the attraction between neighboring ions is roughly four times as strong as in NaF.',
      'MgO contains covalent bonds between Mg and O atoms, and covalent bonds are always stronger than ionic bonds are.',
      'The O²⁻ ion is larger than the F⁻ ion, so the ions in MgO are farther apart and the lattice is more stable as a result.',
      'Mg atoms have a greater mass than Na atoms, so more thermal energy is needed to make the heavier ions vibrate freely.',
    ],
    correctIndex: 0,
    explanation:
      'Coulombic attraction is proportional to the product of the charges divided by the distance. The distances are similar (212 pm in MgO, 235 pm in NaF), but the charge product is (2)(2) = 4 for MgO versus (1)(1) = 1 for NaF, so the lattice is held together much more strongly. MgO is an ionic solid. Larger ions would be farther apart, which weakens the attraction. Ion mass does not set the melting point; Mg (24.3) and Na (23.0) are nearly the same mass anyway.',
  },

  // ── Set chem-s009: metals and alloys ───────────────────────────────────
  {
    id: 'chem-s009-q1',
    stimulusId: 'chem-s009',
    unit: 'unit-2',
    topicSlug: 'types-of-chemical-bonds',
    difficulty: 'easy',
    stem: 'Steel is made by adding carbon to iron; carbon atoms are much smaller than iron atoms. Which diagram best represents steel?',
    options: ['Diagram 2', 'Diagram 1', 'Diagram 3', 'Both Diagram 2 and Diagram 3'],
    correctIndex: 0,
    explanation:
      'Because carbon atoms are much smaller than iron atoms, they fit into the spaces between the iron atoms, forming an interstitial alloy, which is Diagram 2. Diagram 1 is a pure metal. Diagram 3 is a substitutional alloy, in which atoms of similar size replace host atoms, as zinc does in brass; small carbon atoms do not replace iron atoms.',
  },
  {
    id: 'chem-s009-q2',
    stimulusId: 'chem-s009',
    unit: 'unit-2',
    topicSlug: 'types-of-chemical-bonds',
    difficulty: 'medium',
    stem: 'A student melts copper together with a second metal whose atoms have nearly the same radius as copper atoms, then lets the mixture solidify. Which diagram best represents the resulting alloy?',
    options: [
      'Diagram 3, because atoms of similar radius can take the places of host atoms in the lattice',
      'Diagram 2, because atoms of similar radius fit into the spaces between the host atoms',
      'Diagram 2, because added metal atoms always sit in the gaps of the host metal lattice',
      'Diagram 1, because atoms of similar radius would be indistinguishable from the host atoms',
    ],
    correctIndex: 0,
    explanation:
      'Atoms of comparable radius substitute for host atoms at lattice positions, forming a substitutional alloy (as zinc does in brass); that is Diagram 3. Only atoms much smaller than the host atoms fit into the interstitial spaces shown in Diagram 2, as carbon does in steel, so added atoms do not always go into the gaps. The added atoms belong to a different element, so the solid is no longer the pure metal of Diagram 1.',
  },

  // ── Standalone items ───────────────────────────────────────────────────
  {
    id: 'chem-u2-002',
    unit: 'unit-2',
    topicSlug: 'types-of-chemical-bonds',
    difficulty: 'easy',
    stem: 'In which of the following substances are the bonds best described as nonpolar covalent?',
    options: ['Cl₂', 'HCl', 'NaCl', 'CCl₄'],
    correctIndex: 0,
    explanation:
      'A bond between two identical atoms shares the electrons equally, so the Cl–Cl bond is nonpolar covalent. H–Cl and C–Cl bonds join atoms of different electronegativity and are polar covalent. CCl₄ is a nonpolar molecule, but its individual bonds are polar. NaCl is ionic.',
  },
  {
    id: 'chem-u2-003',
    unit: 'unit-2',
    topicSlug: 'hybridization-sigma-pi-bonds',
    difficulty: 'easy',
    stem: 'Which of the following molecules contains an sp-hybridized carbon atom?',
    options: ['HCN', 'CH₄', 'C₂H₄', 'CH₃OH'],
    correctIndex: 0,
    explanation:
      'In HCN (H–C≡N) the carbon has two electron domains, a single bond and a triple bond, so it is sp hybridized and linear. The carbon in CH₄ and in CH₃OH has four electron domains (sp³), and each carbon in C₂H₄ has three (sp²).',
  },
  {
    id: 'chem-u2-004',
    unit: 'unit-2',
    topicSlug: 'vsepr-molecular-geometry',
    difficulty: 'medium',
    stem: 'What is the molecular geometry of xenon tetrafluoride, XeF₄?',
    options: ['Square planar', 'Tetrahedral', 'Seesaw', 'Octahedral'],
    correctIndex: 0,
    explanation:
      'Xe has 8 valence electrons; four bond to F and four remain as two lone pairs, giving six electron domains (octahedral electron geometry). The two lone pairs sit opposite each other, leaving the four F atoms in a plane: square planar. Tetrahedral ignores the lone pairs, seesaw is the shape for four bonds and one lone pair (as in SF₄), and octahedral is the electron-domain geometry, not the molecular shape.',
  },
  {
    id: 'chem-u2-005',
    unit: 'unit-2',
    topicSlug: 'lewis-structures-formal-charge',
    difficulty: 'medium',
    stem: 'In the Lewis structure of which species does the central atom have more than eight electrons around it?',
    options: ['SF₆', 'NF₃', 'CF₄', 'BF₃'],
    correctIndex: 0,
    explanation:
      'In SF₆, sulfur forms six bonds, so 12 electrons surround it; elements in period 3 and beyond can exceed an octet. N in NF₃ has three bonds and one lone pair (8 electrons), C in CF₄ has four bonds (8), and B in BF₃ has only three bonds (6 electrons), an incomplete octet rather than an expanded one.',
  },
  {
    id: 'chem-u2-006',
    unit: 'unit-2',
    topicSlug: 'vsepr-molecular-geometry',
    difficulty: 'medium',
    stem: 'Which of the following molecules is nonpolar?',
    options: ['SiF₄', 'SF₄', 'PF₃', 'OF₂'],
    correctIndex: 0,
    explanation:
      'SiF₄ has four bonds and no lone pairs on Si, so it is tetrahedral and the four equal bond dipoles cancel. SF₄ (seesaw, one lone pair), PF₃ (trigonal pyramidal) and OF₂ (bent) each have lone pairs that make the shape unsymmetrical, so their bond dipoles do not cancel.',
  },
  {
    id: 'chem-u2-007',
    unit: 'unit-2',
    topicSlug: 'hybridization-sigma-pi-bonds',
    difficulty: 'medium',
    stem: 'How many sigma (σ) bonds and pi (π) bonds are in a molecule of acetaldehyde, CH₃CHO?',
    options: ['6 σ and 1 π', '5 σ and 2 π', '7 σ and 1 π', '6 σ and 2 π'],
    correctIndex: 0,
    explanation:
      'CH₃CHO has three C–H bonds on the CH₃ carbon, one C–H on the CHO carbon, one C–C bond and one C=O bond. Every single bond is one σ bond, and a double bond is one σ plus one π. That gives 3 + 1 + 1 + 1 = 6 σ and 1 π. Counting the double bond as two σ bonds gives 7 σ, and treating it as two π bonds gives 2 π.',
  },
  {
    id: 'chem-u2-008',
    unit: 'unit-2',
    topicSlug: 'lewis-structures-formal-charge',
    difficulty: 'hard',
    stem: 'The carbonate ion, CO₃²⁻, is described by three equivalent resonance structures. What is the average carbon–oxygen bond order?',
    options: ['1.33', '1.50', '2.00', '1.00'],
    correctIndex: 0,
    explanation:
      'Each resonance structure has one C=O double bond and two C–O single bonds: 4 bonding pairs shared over 3 bonds. The bond order is 4/3 = 1.33, and all three bonds are identical in length. 1.50 is the bond order for a species with two equivalent resonance structures, such as NO₂⁻ or O₃, and 2.00 and 1.00 describe a single resonance structure taken as real.',
  },
  {
    id: 'chem-u2-009',
    unit: 'unit-2',
    topicSlug: 'vsepr-molecular-geometry',
    difficulty: 'hard',
    stem: 'What is the molecular geometry of chlorine trifluoride, ClF₃?',
    options: ['T-shaped', 'Trigonal planar', 'Trigonal pyramidal', 'Seesaw'],
    correctIndex: 0,
    explanation:
      'Cl has 7 valence electrons; three bond to F and four remain as two lone pairs, so Cl has five electron domains (trigonal bipyramidal). The lone pairs take two equatorial positions, leaving the three F atoms in a T shape. Trigonal planar ignores the lone pairs, trigonal pyramidal assumes only one lone pair, and seesaw is the shape for four bonding domains and one lone pair.',
  },
]
