import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Chemistry practice exam, form 2: 60 MCQs (May 2027 format, 4 options).
 * CED unit tally:
 *   U1 Atomic Structure & Properties               5   (7–9%)
 *   U2 Compound Structure & Properties             6   (7–9%)
 *   U3 Intermolecular Forces & Properties          13  (18–22%)
 *   U4 Chemical Reactions                          6   (7–9%)
 *   U5 Kinetics                                    6   (7–9%)
 *   U6 Thermodynamics                              5   (7–9%)
 *   U7 Equilibrium                                 6   (7–9%)
 *   U8 Acids & Bases                               8   (11–15%)
 *   U9 Applications of Thermodynamics              5   (7–9%)
 * Stimulus sets (consecutive, shared stimulus): PES (3), chloromethanes (3),
 * ClO2 initial rates (3), N2/O2/NO equilibrium (3), weak-acid titration (4),
 * NaHCO3 decomposition data (3), plus single-stimulus items.
 * Calculator, periodic table and equations sheet allowed.
 */

const PES_X =
  'The table summarizes the photoelectron spectrum of a gas-phase sample of neutral atoms of element X.\n\n| Peak | Binding energy (MJ/mol) | Relative number of electrons |\n|---|---|---|\n| 1 | 239 | 2 |\n| 2 | 22.7 | 2 |\n| 3 | 16.5 | 6 |\n| 4 | 2.05 | 2 |\n| 5 | 1.00 | 4 |'

const CHLOROMETHANES =
  'The table gives data for three liquids.\n\n| Compound | Molar mass (g/mol) | Dipole moment (D) | Vapor pressure at 20 °C (kPa) | Normal boiling point (°C) |\n|---|---|---|---|---|\n| $\\text{CH}_2\\text{Cl}_2$ | 84.9 | 1.6 | 47 | 40 |\n| $\\text{CHCl}_3$ | 119.4 | 1.0 | 21 | 61 |\n| $\\text{CCl}_4$ | 153.8 | 0 | 12 | 77 |'

const CLO2_RATES =
  'Chlorine dioxide reacts with hydroxide ion in aqueous solution:\n\n$$2\\text{ClO}_2(aq) + 2\\text{OH}^-(aq) \\to \\text{ClO}_3^-(aq) + \\text{ClO}_2^-(aq) + \\text{H}_2\\text{O}(l)$$\n\nThe initial rate of formation of $\\text{ClO}_3^-$ was measured in three trials at the same temperature.\n\n| Trial | $[\\text{ClO}_2]_0$ (M) | $[\\text{OH}^-]_0$ (M) | Initial rate of formation of $\\text{ClO}_3^-$ (M/s) |\n|---|---|---|---|\n| 1 | 0.020 | 0.030 | $2.4 \\times 10^{-3}$ |\n| 2 | 0.040 | 0.030 | $9.6 \\times 10^{-3}$ |\n| 3 | 0.020 | 0.090 | $7.2 \\times 10^{-3}$ |'

const NO_EQUILIBRIUM =
  'For the reaction $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g)$, the equilibrium constant $K_c$ was measured at two temperatures.\n\n| Temperature (K) | $K_c$ |\n|---|---|\n| 2000 | $4.1 \\times 10^{-4}$ |\n| 2500 | $3.6 \\times 10^{-3}$ |'

const HA_TITRATION =
  'A 25.00 mL sample of a weak monoprotic acid, HA, is titrated with 0.100 M NaOH at 25 °C. Selected data are shown.\n\n| Volume of NaOH added (mL) | pH |\n|---|---|\n| 0.00 | 2.88 |\n| 5.00 | 4.16 |\n| 12.50 | 4.76 |\n| 20.00 | 5.36 |\n| 24.00 | 6.14 |\n| 25.00 | 8.73 |\n| 26.00 | 11.29 |\n| 30.00 | 11.96 |'

const NAHCO3_DATA =
  'Sodium hydrogen carbonate decomposes when it is heated:\n\n$$2\\text{NaHCO}_3(s) \\to \\text{Na}_2\\text{CO}_3(s) + \\text{H}_2\\text{O}(g) + \\text{CO}_2(g)$$\n\n| Substance | $\\Delta H_f^\\circ$ (kJ/mol) | $S^\\circ$ (J/(mol·K)) |\n|---|---|---|\n| $\\text{NaHCO}_3(s)$ | −950.8 | 101.7 |\n| $\\text{Na}_2\\text{CO}_3(s)$ | −1130.7 | 135.0 |\n| $\\text{H}_2\\text{O}(g)$ | −241.8 | 188.8 |\n| $\\text{CO}_2(g)$ | −393.5 | 213.8 |'

export const MCQS: MCQItem[] = [
  /* ---- U1 Atomic Structure & Properties (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    stimulus: PES_X,
    question: 'Element X is',
    options: ['silicon', 'phosphorus', 'sulfur', 'chlorine'],
    correctAnswer: 2,
    explanation:
      'The relative numbers of electrons add to 2 + 2 + 6 + 2 + 4 = 16, the configuration $1s^2 2s^2 2p^6 3s^2 3p^4$, which is sulfur. Phosphorus would show three 3p electrons (15 in all) and chlorine five (17 in all), and silicon has only two 3p electrons.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    stimulus: PES_X,
    question: 'Which statement best explains why peak 1 has a far greater binding energy than peak 2?',
    options: [
      'Electrons in peak 1 are in the first shell, closer to the nucleus and less shielded, so they are attracted more strongly.',
      'Peak 1 represents more electrons than peak 2, so more energy is needed to remove the electrons in that peak.',
      'Electrons in peak 2 are shielded from the nucleus by the electrons of peaks 3, 4 and 5, which lie closer in.',
      'Electrons in peak 1 occupy a higher-energy orbital, so a larger photon energy is needed to reach them.',
    ],
    correctAnswer: 0,
    explanation:
      'The 1s electrons are nearest the nucleus and almost unshielded, so by Coulomb\'s law they feel the strongest attraction and need the most energy to remove. Peaks 1 and 2 each represent 2 electrons, so the number of electrons does not explain the gap. Electrons in peaks 3–5 are farther out and barely shield the 2s electrons, and 1s is the lowest-energy orbital, not the highest.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    stimulus: PES_X,
    question: 'Which difference is expected between the photoelectron spectrum of the ion $\\text{X}^{2-}$ and that of a neutral X atom?',
    options: [
      'The lowest-binding-energy peak would represent 6 electrons, not 4.',
      'A new peak would appear at very low binding energy for two 4s electrons.',
      'The peak at 239 MJ/mol would represent 4 electrons instead of 2 electrons.',
      'The peak at 2.05 MJ/mol would disappear because its electrons are removed.',
    ],
    correctAnswer: 0,
    explanation:
      'The $\\text{X}^{2-}$ ion has gained two electrons, which complete the 3p subshell ($1s^2 2s^2 2p^6 3s^2 3p^6$), so the 3p peak represents 6 electrons. The 3p subshell has room for both added electrons, so no 4s peak appears; a 1s subshell holds at most 2 electrons; and an anion gains electrons rather than losing its 3s electrons.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Atomic radius decreases from Na to Cl across period 3. Which statement best explains this trend?',
    options: [
      'The nuclear charge increases while the added electrons enter the same shell, so the valence electrons are pulled closer.',
      'The number of occupied electron shells decreases across the period, so the valence electrons lie closer to the nucleus.',
      'The added electrons repel the inner electrons more strongly, which pushes the core electrons toward the nucleus.',
      'The atoms gain neutrons across the period, and the heavier nucleus holds the electron cloud more tightly.',
    ],
    correctAnswer: 0,
    explanation:
      'From Na to Cl the number of protons rises from 11 to 17, but every added electron goes into the third shell, where it shields the other valence electrons only slightly. The valence electrons therefore feel a growing attraction and are drawn closer to the nucleus. Every period-3 atom has three occupied shells, extra electron–electron repulsion does not shrink an atom, and neutrons carry no charge, so they do not change the attraction.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'A compound contains only C, H and O. By mass it is 54.5% carbon, 9.1% hydrogen and 36.4% oxygen, and its molar mass is 88 g/mol. What is its molecular formula?',
    options: ['$\\text{C}_2\\text{H}_4\\text{O}$', '$\\text{C}_3\\text{H}_4\\text{O}_3$', '$\\text{C}_4\\text{H}_8\\text{O}_2$', '$\\text{C}_5\\text{H}_{12}\\text{O}$'],
    correctAnswer: 2,
    explanation:
      'A 100 g sample has 54.5/12.0 = 4.54 mol C, 9.1/1.0 = 9.1 mol H and 36.4/16.0 = 2.28 mol O, a 2 : 4 : 1 ratio, so the empirical formula is $\\text{C}_2\\text{H}_4\\text{O}$ (44 g/mol). Because 88/44 = 2, the molecular formula is $\\text{C}_4\\text{H}_8\\text{O}_2$. $\\text{C}_2\\text{H}_4\\text{O}$ is only the empirical formula, and $\\text{C}_3\\text{H}_4\\text{O}_3$ and $\\text{C}_5\\text{H}_{12}\\text{O}$ have a molar mass of 88 g/mol but the wrong ratio of atoms.',
  },

  /* ---- U2 Compound Structure & Properties (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    stimulus:
      'A student compares the potential-energy curves of two diatomic molecules. Each curve plots potential energy against the distance between the two nuclei.\n\n| Molecule | Internuclear distance at the energy minimum (pm) | Potential energy at the minimum (kJ/mol) |\n|---|---|---|\n| $\\text{H}_2$ | 74 | −436 |\n| $\\text{Cl}_2$ | 199 | −242 |',
    question: 'Which statement is best supported by the data?',
    options: [
      'The H–H bond is shorter and stronger than the Cl–Cl bond.',
      'The H–H bond is the shorter bond, but the Cl–Cl bond is stronger.',
      'The Cl–Cl bond is longer because Cl atoms attract each other more.',
      'The two bonds are equally strong because both of them are nonpolar.',
    ],
    correctAnswer: 0,
    explanation:
      'The distance at the energy minimum is the bond length, and the depth of the minimum is the energy needed to separate the atoms. $\\text{H}_2$ has the shorter distance (74 pm) and the deeper minimum (436 kJ/mol), so its bond is both shorter and stronger. A shallower minimum means a weaker bond, the longer Cl–Cl distance reflects the larger size of Cl atoms, and nonpolar bonds can differ greatly in strength.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'What is the molecular geometry of bromine pentafluoride, $\\text{BrF}_5$?',
    options: ['trigonal bipyramidal', 'octahedral', 'square pyramidal', 'square planar'],
    correctAnswer: 2,
    explanation:
      'Br has 7 valence electrons: five form bonds to F and the remaining two form one lone pair, giving six electron domains in an octahedral arrangement. With one position taken by the lone pair, the five F atoms form a square pyramid. Octahedral describes the electron domains (or a molecule with six bonds and no lone pairs), trigonal bipyramidal would need only five domains, and square planar would need two lone pairs, as in $\\text{XeF}_4$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'In the acetate ion, $\\text{CH}_3\\text{COO}^-$, the two carbon–oxygen bonds are identical in length because of resonance. What is the bond order of each of these two bonds?',
    options: ['1', '$\\frac{4}{3}$', '$\\frac{3}{2}$', '2'],
    correctAnswer: 2,
    explanation:
      'Each resonance structure has one C=O double bond and one C–O single bond on the carboxylate carbon, so three bonding pairs are shared over two bonds, a bond order of 3/2. A bond order of 1 ignores the double bond, 4/3 is the value for three equivalent bonds sharing one double bond (as in the carbonate ion), and 2 treats both bonds as double bonds.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'A metal such as copper can be hammered into thin sheets, but an ionic solid such as NaCl shatters when it is struck. Which statement best explains this difference?',
    options: [
      'Shifting metal layers leaves the cations surrounded by mobile electrons, but shifting ionic layers puts like charges side by side.',
      'Metallic bonds are much weaker than ionic bonds, so the atoms of a metal can be pushed apart without the solid breaking.',
      'Metal atoms share electrons in fixed covalent bonds that bend easily, while ionic bonds are rigid and cannot bend at all.',
      'Ionic solids contain molecules held by weak intermolecular forces, which break as soon as the solid is struck hard.',
    ],
    correctAnswer: 0,
    explanation:
      'In a metal the cations sit in a sea of delocalized electrons, so after one layer slides past another the cations are still surrounded by electrons and stay bonded. In an ionic lattice a shift brings cations next to cations and anions next to anions, and the repulsion splits the crystal. Metallic bonds are not necessarily weak (many metals melt at high temperatures), metals do not have localized covalent bonds, and ionic solids are made of ions, not molecules.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Acetonitrile has the structure $\\text{CH}_3{-}\\text{C}{\\equiv}\\text{N}$. What are the hybridizations of the carbon atom in the $\\text{CH}_3$ group and of the carbon atom bonded to nitrogen, in that order?',
    options: ['$sp^3$ and $sp$', '$sp^3$ and $sp^2$', '$sp^2$ and $sp$', '$sp^3$ and $sp^3$'],
    correctAnswer: 0,
    explanation:
      'The $\\text{CH}_3$ carbon has four single bonds (four electron domains), so it is $sp^3$. The other carbon has a single bond to the $\\text{CH}_3$ group and a triple bond to N, only two electron domains, so it is $sp$ and linear. An $sp^2$ carbon needs three domains, as in a C=C or C=O double bond, and counting each bond of the triple bond as a separate domain would wrongly make that carbon $sp^3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Strontium oxide, SrO, melts at 2531 °C and rubidium fluoride, RbF, melts at 795 °C. The distance between neighboring ion centers is 258 pm in SrO and 282 pm in RbF. Which factor accounts for most of the difference in melting points?',
    options: [
      'The ions in SrO carry charges of 2+ and 2−, so the attraction between neighboring ions is about four times as great as in RbF.',
      'The ions in SrO are about 10% closer together, so the attraction between neighboring ions is about four times greater.',
      'SrO is held together by covalent Sr–O bonds, which are stronger than the ionic bonds that hold RbF together.',
      'Sr and O atoms are more massive than Rb and F atoms, so more energy is needed to set the particles in motion.',
    ],
    correctAnswer: 0,
    explanation:
      'By Coulomb\'s law the attraction is proportional to $q_1q_2/r$. Doubling both charges multiplies $q_1q_2$ by 4, while the shorter distance raises the attraction only by a factor of 282/258 ≈ 1.1. Both solids are ionic, and their formula masses are nearly equal (103.6 g/mol for SrO and 104.5 g/mol for RbF), so mass cannot explain a difference of more than 1700 °C.',
  },

  /* ---- U3 Intermolecular Forces & Properties (13) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: CHLOROMETHANES,
    question: 'Which statement best explains why $\\text{CCl}_4$ has the lowest vapor pressure of the three liquids at 20 °C?',
    options: [
      '$\\text{CCl}_4$ has the most electrons and the most polarizable electron cloud, so its London dispersion forces are strongest.',
      '$\\text{CCl}_4$ has the strongest dipole–dipole attractions, because it contains the greatest number of polar C–Cl bonds.',
      '$\\text{CCl}_4$ molecules hydrogen bond to one another through their four Cl atoms, which are highly electronegative.',
      '$\\text{CCl}_4$ has the strongest C–Cl covalent bonds, so its molecules break apart least easily at the surface.',
    ],
    correctAnswer: 0,
    explanation:
      'Vapor pressure is lowest for the liquid with the strongest overall intermolecular attractions. $\\text{CCl}_4$ has 74 electrons, the most of the three, so its dispersion forces are strongest. Its dipole moment is zero, so it has no dipole–dipole attractions; it has no H atoms, so it cannot hydrogen bond; and evaporation separates whole molecules without breaking covalent bonds.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: CHLOROMETHANES,
    question: 'Which conclusion about these three compounds is supported by the data?',
    options: [
      'Differences in dispersion forces outweigh differences in dipole–dipole forces.',
      'Dipole–dipole forces are stronger than dispersion forces in all molecular liquids.',
      'The compound with the largest dipole moment has the strongest attractions overall.',
      'The normal boiling point decreases as the molar mass increases within this set.',
    ],
    correctAnswer: 0,
    explanation:
      'The boiling point rises from $\\text{CH}_2\\text{Cl}_2$ to $\\text{CCl}_4$ while the dipole moment falls to zero and the number of electrons grows, so the growing dispersion forces matter more than the shrinking dipole–dipole forces. If dipole–dipole forces dominated, $\\text{CH}_2\\text{Cl}_2$, with the largest dipole moment, would boil highest, but it boils lowest. The boiling point increases, not decreases, with molar mass here.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: CHLOROMETHANES,
    question: 'A sealed flask contains liquid $\\text{CHCl}_3$ in equilibrium with its vapor at 20 °C. More liquid $\\text{CHCl}_3$ at 20 °C is injected, leaving less space for the vapor. After equilibrium is reestablished at 20 °C, the pressure of the $\\text{CHCl}_3$ vapor is',
    options: [
      '21 kPa, because the equilibrium vapor pressure depends only on the identity of the liquid and its temperature',
      'more than 21 kPa, because a larger amount of liquid releases more molecules into the vapor each second',
      'more than 21 kPa, because the same number of vapor molecules now occupies a smaller volume',
      'less than 21 kPa, because the added liquid covers the surface and slows evaporation from it',
    ],
    correctAnswer: 0,
    explanation:
      'At equilibrium the rate of evaporation per unit of surface equals the rate of condensation, and both depend only on the temperature and the intermolecular forces, not on the amount of liquid. Squeezing the vapor into a smaller space briefly raises its pressure, but the extra molecules condense until the pressure returns to 21 kPa. Adding liquid does not change the evaporation rate per unit of surface, so the pressure is neither higher nor lower.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus:
      'Two rigid flasks are joined by a closed valve. Flask 1 has a volume of 1.00 L and contains $\\text{N}_2(g)$ at 0.80 atm. Flask 2 has a volume of 3.00 L and contains $\\text{O}_2(g)$ at 1.60 atm. Both flasks are at the same temperature. The valve is opened and the gases mix with no change in temperature. The volume of the valve is negligible.',
    question: 'What is the total pressure in the connected flasks after mixing?',
    options: ['0.60 atm', '1.20 atm', '1.40 atm', '2.40 atm'],
    correctAnswer: 2,
    explanation:
      'Each gas spreads into the full 4.00 L: $P_{\\text{N}_2} = 0.80(1.00/4.00) = 0.20$ atm and $P_{\\text{O}_2} = 1.60(3.00/4.00) = 1.20$ atm, for a total of 1.40 atm. Adding the starting pressures (2.40 atm) ignores the expansion, dividing that sum by 4 (0.60 atm) treats both gases as if each began in 1.00 L, and 1.20 atm is the simple average of the two starting pressures.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Two identical rigid containers each hold 1.0 mol of neon gas. Container A is at 300 K and container B is at 600 K. How do the conditions in container B compare with those in container A?',
    options: [
      'The average kinetic energy of the atoms is doubled, and the pressure is doubled.',
      'The average speed of the atoms is doubled, and the pressure of the gas is doubled.',
      'The average kinetic energy of the atoms is doubled, and the pressure is unchanged.',
      'The average speed of the atoms is doubled, and their kinetic energy is quadrupled.',
    ],
    correctAnswer: 0,
    explanation:
      'Average kinetic energy is proportional to the Kelvin temperature, so it doubles from 300 K to 600 K, and with n and V fixed the pressure doubles as well ($P = nRT/V$). Because $KE = \\frac{1}{2}mv^2$, doubling the kinetic energy raises the average speed by a factor of only about 1.4, not 2. The pressure cannot stay the same, since faster atoms strike the walls more often and with more force.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Two identical rigid flasks at 300 K each contain 4.0 g of gas. One holds helium (4.0 g/mol) and the other holds methane, $\\text{CH}_4$ (16.0 g/mol). Which statement is correct?',
    options: [
      'The helium exerts four times the pressure, and the average kinetic energies are equal.',
      'The two gases exert equal pressures, because the flasks hold equal masses of gas.',
      'The methane exerts four times the pressure, because its molecules are heavier.',
      'The helium exerts four times the pressure, because its atoms have more kinetic energy.',
    ],
    correctAnswer: 0,
    explanation:
      'Helium is 4.0/4.0 = 1.0 mol and methane is 4.0/16.0 = 0.25 mol, and at the same V and T the pressure is proportional to the number of moles, so the helium exerts four times the pressure. Average kinetic energy depends only on temperature, so it is the same in both flasks. Equal masses do not mean equal numbers of particles, and heavier molecules at the same temperature move more slowly rather than having more kinetic energy.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'A student needs 250.0 mL of 0.100 M $\\text{CuSO}_4$ solution and has solid $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ (249.7 g/mol) and a 250.0 mL volumetric flask. Which procedure is correct?',
    options: [
      'Dissolve 6.24 g of the solid in some water in the flask, then add water to the mark.',
      'Dissolve 6.24 g of the solid in 250.0 mL of water, then pour the solution into the flask.',
      'Dissolve 3.99 g of the solid in some water in the flask, then add water up to the mark.',
      'Dissolve 24.97 g of the solid in some water in the flask, then add water up to the mark.',
    ],
    correctAnswer: 0,
    explanation:
      'The solution needs $(0.2500 \\text{ L})(0.100 \\text{ M}) = 0.0250$ mol, and $0.0250 \\times 249.7 = 6.24$ g of the hydrate. Molarity is moles per liter of solution, so the solid is dissolved and then diluted to the mark; dissolving it in 250.0 mL of water gives more than 250.0 mL of solution. The mass 3.99 g uses the molar mass of anhydrous $\\text{CuSO}_4$, and 24.97 g is the mass needed for 1.000 L.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus:
      'The table gives the solubility of each noble gas in water at 20 °C when the pressure of that gas above the water is 1 atm.\n\n| Gas | Electrons per atom | Solubility (mmol per kg of water) |\n|---|---|---|\n| He | 2 | 0.39 |\n| Ne | 10 | 0.47 |\n| Ar | 18 | 1.5 |\n| Kr | 36 | 2.8 |\n| Xe | 54 | 4.9 |',
    question: 'Which statement best explains the trend in the table?',
    options: [
      'Larger atoms have more polarizable electron clouds, so water molecules induce larger dipoles in them and attract them more.',
      'Larger atoms form hydrogen bonds with water molecules, and the number of such bonds grows with the number of electrons.',
      'Larger atoms have permanent dipoles, and the dipole becomes stronger as more electrons are added to the atom.',
      'Larger atoms are heavier and move more slowly, so fewer of them escape from the water at the same temperature.',
    ],
    correctAnswer: 0,
    explanation:
      'Noble gas atoms are nonpolar, so they dissolve through dipole–induced dipole and dispersion attractions to water. A larger electron cloud is more easily distorted, so the dipoles of water molecules induce a larger dipole in it and the attraction is stronger. Noble gases cannot hydrogen bond and have no permanent dipole, and at the same temperature all of the gases have the same average kinetic energy, so slower motion of heavier atoms does not explain the trend.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'An air bag inflates when sodium azide decomposes: $2\\text{NaN}_3(s) \\to 2\\text{Na}(s) + 3\\text{N}_2(g)$. What volume of $\\text{N}_2$, measured at 300 K and 1.00 atm, forms from 13.0 g of $\\text{NaN}_3$ (65.0 g/mol)? ($R = 0.08206$ L·atm/(mol·K))',
    options: ['3.28 L', '4.92 L', '7.39 L', '14.8 L'],
    correctAnswer: 2,
    explanation:
      'There are 13.0/65.0 = 0.200 mol $\\text{NaN}_3$, which form $\\frac{3}{2}(0.200) = 0.300$ mol $\\text{N}_2$, and $V = nRT/P = (0.300)(0.08206)(300)/1.00 = 7.39$ L. The value 4.92 L uses a 1 : 1 mole ratio, 3.28 L inverts the ratio (2/3 instead of 3/2), and 14.8 L counts 3 mol of $\\text{N}_2$ for every mole of $\\text{NaN}_3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'A student uses a spectrophotometer to measure the concentration of a colored ion in solution. Why should the instrument be set to the wavelength at which the ion absorbs most strongly?',
    options: [
      'At that wavelength, a small change in concentration gives the largest change in absorbance.',
      'At that wavelength, the absorbance no longer depends on the path length of the cuvette.',
      'At that wavelength, the absorbance of the solution is the same at every concentration.',
      'At that wavelength, the light has enough energy to ionize the ions so they can be counted.',
    ],
    correctAnswer: 0,
    explanation:
      'At the absorbance maximum the molar absorptivity ε is largest, so the slope of $A = \\varepsilon bc$ is steepest and the measurement is most sensitive to concentration. Absorbance always depends on the path length $b$, it changes with concentration at every wavelength, and visible light excites electrons to higher energy levels rather than ionizing the particles.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus:
      'A student makes a Beer\'s law calibration curve for $\\text{Ni}^{2+}(aq)$ from standard solutions and then measures the absorbance of an unknown $\\text{Ni}^{2+}$ solution. Before filling the cuvette with the unknown, the student rinses it with distilled water but not with the unknown solution, so a few drops of water remain inside.',
    question: 'How does the leftover water affect the concentration of $\\text{Ni}^{2+}$ that the student calculates for the unknown?',
    options: [
      'It is too low, because the water dilutes the sample and lowers its measured absorbance.',
      'It is too high, because the water droplets scatter light and raise the measured absorbance.',
      'It is unchanged, because the number of $\\text{Ni}^{2+}$ ions in the cuvette is the same.',
      'It is unchanged, because the molar absorptivity of $\\text{Ni}^{2+}$ does not depend on concentration.',
    ],
    correctAnswer: 0,
    explanation:
      'The leftover water dilutes the unknown in the cuvette, so there are fewer absorbing ions per unit volume, the absorbance is lower and the calibration curve converts it into a concentration that is too low. A few drops of clear water do not scatter enough light to raise the absorbance. What matters is the concentration in the light path, not the total number of ions, and although ε is constant, $A = \\varepsilon bc$ still falls when c falls.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Graphite is soft enough to leave marks on paper, while diamond is the hardest natural substance, yet both consist only of covalently bonded carbon atoms. Which statement best accounts for the difference?',
    options: [
      'Graphite is made of flat covalent layers that attract each other only weakly, so the layers slide past each other.',
      'Graphite has weaker C–C covalent bonds within its layers, so its atoms separate from each other under a small force.',
      'Graphite contains carbon ions held by ionic bonds, which break apart when a force pushes like charges together.',
      'Graphite is an amorphous solid with no regular arrangement of atoms, so its bonds have no fixed angles.',
    ],
    correctAnswer: 0,
    explanation:
      'In diamond every carbon atom is covalently bonded to four others in a rigid three-dimensional network. In graphite each carbon is bonded to three others in a flat layer, and neighboring layers are attracted only weakly, so they slide past one another. The C–C bonds within a graphite layer are strong (graphite has a very high melting point), graphite contains no ions, and it is crystalline rather than amorphous.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Ammonia, $\\text{NH}_3$, is far more soluble in water than phosphine, $\\text{PH}_3$, although the two molecules have similar shapes. Which statement best explains the difference?',
    options: [
      '$\\text{NH}_3$ molecules can form hydrogen bonds with water molecules, but $\\text{PH}_3$ molecules cannot.',
      '$\\text{NH}_3$ has the larger molar mass, so its dispersion forces with water are much stronger.',
      '$\\text{PH}_3$ is an ionic compound, and its ions are held too tightly in the lattice to dissolve.',
      '$\\text{NH}_3$ molecules are smaller, so they fit into the spaces between water molecules more easily.',
    ],
    correctAnswer: 0,
    explanation:
      'N is small and highly electronegative, so ammonia\'s N–H bonds and the lone pair on N let it hydrogen bond with water. P is far less electronegative, so $\\text{PH}_3$ cannot hydrogen bond and interacts with water only through weaker forces. $\\text{PH}_3$ (34 g/mol) is heavier than $\\text{NH}_3$ (17 g/mol), it is molecular rather than ionic, and molecular size does not account for such a large difference.',
  },

  /* ---- U4 Chemical Reactions (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    stimulus:
      'A sealed container holds 6 molecules of CO and 4 molecules of $\\text{O}_2$. The gases react as completely as possible according to the equation $2\\text{CO}(g) + \\text{O}_2(g) \\to 2\\text{CO}_2(g)$.',
    question: 'Which set of molecules is present after the reaction is complete?',
    options: ['6 $\\text{CO}_2$ and 1 $\\text{O}_2$', '8 $\\text{CO}_2$ and no reactants', '4 $\\text{CO}_2$, 2 CO and 2 $\\text{O}_2$', '6 $\\text{CO}_2$ and 4 $\\text{O}_2$'],
    correctAnswer: 0,
    explanation:
      'Six CO molecules need only 3 $\\text{O}_2$ molecules and form 6 $\\text{CO}_2$, so CO is limiting and 1 $\\text{O}_2$ is left over. Eight $\\text{CO}_2$ would need 8 CO; 4 $\\text{CO}_2$ with 2 CO and 2 $\\text{O}_2$ remaining describes a reaction that stopped before the limiting reactant ran out; and 6 $\\text{CO}_2$ with 4 $\\text{O}_2$ contains more oxygen atoms than the container started with.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'A mixture of 16.0 g of $\\text{Fe}_2\\text{O}_3$ (159.7 g/mol) and 2.70 g of Al (26.98 g/mol) reacts as completely as possible: $\\text{Fe}_2\\text{O}_3(s) + 2\\text{Al}(s) \\to \\text{Al}_2\\text{O}_3(s) + 2\\text{Fe}(l)$. What is the maximum mass of iron (55.85 g/mol) that can form?',
    options: ['2.79 g', '5.59 g', '11.2 g', '18.7 g'],
    correctAnswer: 1,
    explanation:
      'There are 16.0/159.7 = 0.100 mol $\\text{Fe}_2\\text{O}_3$ and 2.70/26.98 = 0.100 mol Al. Using all the $\\text{Fe}_2\\text{O}_3$ would require 0.200 mol Al, so Al is limiting and forms 0.100 mol Fe, or 5.59 g. The value 11.2 g treats $\\text{Fe}_2\\text{O}_3$ as limiting, 2.79 g halves the 2 : 2 ratio of Al to Fe, and 18.7 g is the total mass of the reactants, part of which ends up in $\\text{Al}_2\\text{O}_3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'What net ionic equation represents the reaction between aqueous ammonia and nitric acid?',
    options: [
      '$\\text{NH}_3(aq) + \\text{H}^+(aq) \\to \\text{NH}_4^+(aq)$',
      '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\to \\text{H}_2\\text{O}(l)$',
      '$\\text{NH}_4^+(aq) + \\text{NO}_3^-(aq) \\to \\text{NH}_4\\text{NO}_3(s)$',
      '$\\text{NH}_3(aq) + \\text{HNO}_3(aq) \\to \\text{NH}_4^+(aq) + \\text{NO}_3^-(aq)$',
    ],
    correctAnswer: 0,
    explanation:
      'Nitric acid is a strong acid, so it is written as $\\text{H}^+$ with spectator $\\text{NO}_3^-$, while ammonia is a weak base and is written as $\\text{NH}_3$ molecules; the net change is the transfer of a proton to $\\text{NH}_3$. The $\\text{H}^+ + \\text{OH}^-$ equation treats ammonia as a source of hydroxide ions, ammonium nitrate is soluble and does not precipitate, and the last equation writes the strong acid as molecules and keeps a spectator ion.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'In the reaction $2\\text{MnO}_4^-(aq) + 5\\text{SO}_3^{2-}(aq) + 6\\text{H}^+(aq) \\to 2\\text{Mn}^{2+}(aq) + 5\\text{SO}_4^{2-}(aq) + 3\\text{H}_2\\text{O}(l)$, which element is oxidized?',
    options: ['sulfur, from +4 to +6', 'manganese, from +7 to +2', 'oxygen, from −2 to 0', 'sulfur, from +6 to +4'],
    correctAnswer: 0,
    explanation:
      'Sulfur is +4 in $\\text{SO}_3^{2-}$ and +6 in $\\text{SO}_4^{2-}$, so it loses electrons and is oxidized. Manganese goes from +7 to +2, which is reduction; oxygen stays at −2 in every species; and a change from +6 to +4 reverses the actual direction for sulfur.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'A 25.0 mL sample of oxalic acid, $\\text{H}_2\\text{C}_2\\text{O}_4$, a diprotic acid, requires 30.0 mL of 0.100 M NaOH to neutralize both of its acidic protons. What is the concentration of the oxalic acid?',
    options: ['0.0600 M', '0.0833 M', '0.120 M', '0.240 M'],
    correctAnswer: 0,
    explanation:
      'The base supplies $(0.0300)(0.100) = 3.00 \\times 10^{-3}$ mol $\\text{OH}^-$. Each $\\text{H}_2\\text{C}_2\\text{O}_4$ reacts with two $\\text{OH}^-$, so there are $1.50 \\times 10^{-3}$ mol of acid in 0.0250 L, or 0.0600 M. The value 0.120 M assumes a 1 : 1 ratio, 0.240 M multiplies by 2 instead of dividing, and 0.0833 M inverts the ratio of the volumes.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'A student adds 0.10 M NaOH(aq) to 20.0 mL of 0.050 M $\\text{CuSO}_4(aq)$, and blue $\\text{Cu(OH)}_2(s)$ precipitates. What volume of the NaOH solution is needed to precipitate all of the $\\text{Cu}^{2+}$?',
    options: ['5.0 mL', '10.0 mL', '20.0 mL', '40.0 mL'],
    correctAnswer: 2,
    explanation:
      'The sample contains $(0.0200)(0.050) = 1.0 \\times 10^{-3}$ mol $\\text{Cu}^{2+}$, and $\\text{Cu}^{2+} + 2\\text{OH}^- \\to \\text{Cu(OH)}_2$ needs $2.0 \\times 10^{-3}$ mol $\\text{OH}^-$, which is 20.0 mL of 0.10 M NaOH. The volume 10.0 mL uses a 1 : 1 ratio, 5.0 mL halves that 1 : 1 volume, and 40.0 mL doubles the correct volume.',
  },

  /* ---- U5 Kinetics (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    stimulus: CLO2_RATES,
    question: 'Which rate law agrees with all three trials?',
    options: [
      'rate $= k[\\text{ClO}_2][\\text{OH}^-]$',
      'rate $= k[\\text{ClO}_2]^2[\\text{OH}^-]$',
      'rate $= k[\\text{ClO}_2]^2[\\text{OH}^-]^2$',
      'rate $= k[\\text{ClO}_2]^2$',
    ],
    correctAnswer: 1,
    explanation:
      'From trial 1 to trial 2, $[\\text{ClO}_2]$ doubles and the rate quadruples, so the reaction is second order in $\\text{ClO}_2$. From trial 1 to trial 3, $[\\text{OH}^-]$ triples and the rate triples, so it is first order in $\\text{OH}^-$. Exponents of 2 and 2 copy the coefficients of the balanced equation, which do not set the rate law, and the other two choices each miss one of the observed dependences.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    stimulus: CLO2_RATES,
    question: 'Based on the rate law that fits the data, what is $k$, with units?',
    options: [
      '$4.0\\ \\text{M}^{-1}\\,\\text{s}^{-1}$',
      '$2.0 \\times 10^{2}\\ \\text{M}^{-1}\\,\\text{s}^{-1}$',
      '$2.0 \\times 10^{2}\\ \\text{M}^{-2}\\,\\text{s}^{-1}$',
      '$6.7 \\times 10^{3}\\ \\text{M}^{-3}\\,\\text{s}^{-1}$',
    ],
    correctAnswer: 2,
    explanation:
      'With rate $= k[\\text{ClO}_2]^2[\\text{OH}^-]$, trial 1 gives $k = \\dfrac{2.4 \\times 10^{-3}}{(0.020)^2(0.030)} = \\dfrac{2.4 \\times 10^{-3}}{1.2 \\times 10^{-5}} = 2.0 \\times 10^2$, and a third-order rate law needs units of $\\text{M}^{-2}\\,\\text{s}^{-1}$ so that $k \\times \\text{M}^3$ gives M/s. The same number with $\\text{M}^{-1}\\,\\text{s}^{-1}$ carries second-order units, 4.0 fits a rate law first order in each reactant, and $6.7 \\times 10^3$ fits one second order in each.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    stimulus: CLO2_RATES,
    question: 'In trial 2, at what rate is $\\text{ClO}_2$ consumed at the start of the reaction?',
    options: ['$4.8 \\times 10^{-3}$ M/s', '$9.6 \\times 10^{-3}$ M/s', '$1.9 \\times 10^{-2}$ M/s', '$3.8 \\times 10^{-2}$ M/s'],
    correctAnswer: 2,
    explanation:
      'Two $\\text{ClO}_2$ are consumed for each $\\text{ClO}_3^-$ formed, so $\\text{ClO}_2$ disappears twice as fast as $\\text{ClO}_3^-$ appears: $2(9.6 \\times 10^{-3}) = 1.9 \\times 10^{-2}$ M/s. The value $9.6 \\times 10^{-3}$ M/s ignores the coefficients, $4.8 \\times 10^{-3}$ M/s divides by 2 instead of multiplying, and $3.8 \\times 10^{-2}$ M/s applies the factor of 2 twice.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'The reaction $\\text{C}_2\\text{H}_4(g) + \\text{H}_2(g) \\to \\text{C}_2\\text{H}_6(g)$ is extremely slow in the gas phase but fast on a platinum surface. On the surface, $\\text{H}_2$ molecules bind to Pt and split into H atoms bonded to Pt, and these H atoms then add to $\\text{C}_2\\text{H}_4$ molecules. Which statement about the platinum-catalyzed reaction is correct?',
    options: [
      'The H atoms bonded to Pt are intermediates, and the Pt surface is regenerated.',
      'The H atoms bonded to Pt are catalysts, and the Pt surface is used up over time.',
      'The Pt surface lowers the energy of the product, so ΔH becomes more negative.',
      'The Pt surface lowers the activation energy of the forward reaction only.',
    ],
    correctAnswer: 0,
    explanation:
      'Surface catalysis adds new elementary steps: H atoms bound to Pt are formed and then used up, so they are intermediates, while the Pt is regenerated, which is what makes it the catalyst. The bound H atoms are consumed, so they are not catalysts. A catalyst changes neither the energy of the products nor ΔH, and it lowers the activation energy of the reverse reaction by the same amount as that of the forward reaction.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'Two samples of zinc with equal mass react with excess 1.0 M HCl at 25 °C. One sample is a single strip and the other is a fine powder, and the powder reacts much faster. Which statement best explains this?',
    options: [
      'More Zn atoms are exposed to the acid, so Zn atoms and $\\text{H}^+$ ions collide more often.',
      'The powder has a lower activation energy, so more collisions have enough energy to react.',
      'The powder particles move faster than the strip, so they strike $\\text{H}^+$ ions harder.',
      'The powder contains more moles of zinc, so the effective concentration of zinc is higher.',
    ],
    correctAnswer: 0,
    explanation:
      'Only Zn atoms at the surface can collide with $\\text{H}^+$ ions, and the powder exposes far more surface, so collisions occur more often. Grinding does not change the reaction pathway or its activation energy, the temperature (and therefore the energy of collisions) is the same, and both samples contain the same mass and number of moles of zinc.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'In a proposed mechanism for the oxidation of sulfur dioxide, step 1 is $2\\text{NO} + \\text{O}_2 \\to 2\\text{NO}_2$, and step 2, which occurs twice, is $\\text{NO}_2 + \\text{SO}_2 \\to \\text{NO} + \\text{SO}_3$. Which statement correctly identifies the roles of NO and $\\text{NO}_2$?',
    options: [
      'NO is a catalyst, and $\\text{NO}_2$ is an intermediate.',
      'NO is an intermediate, and $\\text{NO}_2$ is a catalyst.',
      'NO and $\\text{NO}_2$ are both intermediates.',
      'NO and $\\text{NO}_2$ are both catalysts.',
    ],
    correctAnswer: 0,
    explanation:
      'NO is consumed in step 1 and regenerated in step 2, so it is present before and after the reaction and acts as a catalyst. $\\text{NO}_2$ is formed in step 1 and used up in step 2, so it is an intermediate. Neither species appears in the overall equation, $2\\text{SO}_2 + \\text{O}_2 \\to 2\\text{SO}_3$, but only NO is used first and then re-formed, which is what distinguishes a catalyst from an intermediate.',
  },

  /* ---- U7 Equilibrium (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    stimulus: NO_EQUILIBRIUM,
    question: 'Based on the data, which statement about the forward reaction is correct?',
    options: [
      'It is endothermic, because $K_c$ increases as the temperature increases.',
      'It is exothermic, because $K_c$ increases as the temperature increases.',
      'It is endothermic, because $K_c$ is less than 1 at both temperatures.',
      'It is exothermic, because $K_c$ is less than 1 at both temperatures.',
    ],
    correctAnswer: 0,
    explanation:
      'Raising the temperature shifts an equilibrium in the endothermic direction, so a $K_c$ that grows with temperature means the forward reaction absorbs heat. For an exothermic reaction $K_c$ would fall as the temperature rose. Whether $K_c$ is above or below 1 shows which side is favored at one temperature, not the sign of ΔH.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    stimulus: NO_EQUILIBRIUM,
    question: 'At 2500 K, a reaction mixture contains $[\\text{N}_2] = 0.20$ M, $[\\text{O}_2] = 0.20$ M and $[\\text{NO}] = 0.020$ M. Which statement describes this mixture?',
    options: [
      '$Q_c = 1.0 \\times 10^{-2}$, so NO is consumed as the mixture approaches equilibrium.',
      '$Q_c = 1.0 \\times 10^{-2}$, so more NO forms as the mixture approaches equilibrium.',
      '$Q_c = 5.0 \\times 10^{-1}$, so NO is consumed as the mixture approaches equilibrium.',
      '$Q_c = 1.0 \\times 10^{2}$, so NO is consumed as the mixture approaches equilibrium.',
    ],
    correctAnswer: 0,
    explanation:
      '$Q_c = \\dfrac{[\\text{NO}]^2}{[\\text{N}_2][\\text{O}_2]} = \\dfrac{(0.020)^2}{(0.20)(0.20)} = 1.0 \\times 10^{-2}$, which is greater than $K_c = 3.6 \\times 10^{-3}$, so the reverse reaction runs and NO is consumed. A value of 0.50 forgets to square [NO], and 100 inverts the expression; predicting that more NO forms reverses the comparison of $Q_c$ with $K_c$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    stimulus: NO_EQUILIBRIUM,
    question: 'An equilibrium mixture of the three gases at 2500 K is compressed to half its volume at constant temperature. What happens?',
    options: [
      'No net reaction occurs, because each side of the equation has 2 mol of gas.',
      'More NO forms, because a higher pressure always favors the reaction products.',
      'NO is consumed, because the reactant side has more moles of gas than the product side.',
      'More NO forms, because $K_c$ increases when the pressure of the mixture increases.',
    ],
    correctAnswer: 0,
    explanation:
      'Halving the volume doubles every concentration, and with 2 mol of gas on each side $Q_c = \\dfrac{(2[\\text{NO}])^2}{(2[\\text{N}_2])(2[\\text{O}_2])}$ equals its old value, so the mixture remains at equilibrium. A pressure increase favors the side with fewer moles of gas, and here neither side has fewer; pressure does not always favor products; and $K_c$ depends only on temperature.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'In a saturated solution of lead(II) fluoride, $\\text{PbF}_2$, at 25 °C, $[\\text{Pb}^{2+}] = 2.0 \\times 10^{-3}$ M. What is the value of $K_{sp}$ for $\\text{PbF}_2$?',
    options: ['$4.0 \\times 10^{-6}$', '$8.0 \\times 10^{-9}$', '$1.6 \\times 10^{-8}$', '$3.2 \\times 10^{-8}$'],
    correctAnswer: 3,
    explanation:
      'Each $\\text{PbF}_2$ that dissolves releases one $\\text{Pb}^{2+}$ and two $\\text{F}^-$, so $[\\text{F}^-] = 4.0 \\times 10^{-3}$ M and $K_{sp} = [\\text{Pb}^{2+}][\\text{F}^-]^2 = (2.0 \\times 10^{-3})(4.0 \\times 10^{-3})^2 = 3.2 \\times 10^{-8}$. The value $1.6 \\times 10^{-8}$ doubles $[\\text{F}^-]$ in the product without squaring it, $8.0 \\times 10^{-9}$ ignores the 2 : 1 ratio of the ions, and $4.0 \\times 10^{-6}$ treats the salt as if it released one ion of each kind.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $K_c = 0.50$ at a certain temperature. What is $K_c$ at the same temperature for $\\text{NH}_3(g) \\rightleftharpoons \\tfrac{1}{2}\\text{N}_2(g) + \\tfrac{3}{2}\\text{H}_2(g)$?',
    options: ['0.25', '0.71', '1.4', '2.0'],
    correctAnswer: 2,
    explanation:
      'Reversing the equation inverts the constant, $1/0.50 = 2.0$, and halving every coefficient takes the square root of it, $\\sqrt{2.0} = 1.4$. The value 2.0 reverses the equation but does not halve it, 0.71 halves it ($\\sqrt{0.50}$) without reversing it, and 0.25 squares the constant instead of taking its square root.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'A saturated solution of magnesium hydroxide is in equilibrium with excess solid: $\\text{Mg(OH)}_2(s) \\rightleftharpoons \\text{Mg}^{2+}(aq) + 2\\text{OH}^-(aq)$. Which change increases the amount of $\\text{Mg(OH)}_2$ that dissolves at constant temperature?',
    options: [
      'Adding HCl, because $\\text{H}^+$ removes $\\text{OH}^-$ and shifts the equilibrium toward dissolving.',
      'Adding NaOH, because the extra $\\text{OH}^-$ ions draw more $\\text{Mg}^{2+}$ ions into solution.',
      'Adding $\\text{MgCl}_2$, because the extra $\\text{Mg}^{2+}$ ions speed up the dissolving of the solid.',
      'Adding more solid $\\text{Mg(OH)}_2$, because a larger amount of solid shifts the equilibrium right.',
    ],
    correctAnswer: 0,
    explanation:
      'Added $\\text{H}^+$ reacts with $\\text{OH}^-$ to form water, lowering $[\\text{OH}^-]$ so that $Q_{sp} < K_{sp}$ and more solid dissolves. Adding $\\text{OH}^-$ or $\\text{Mg}^{2+}$ raises $Q_{sp}$ above $K_{sp}$ (the common-ion effect), so solid forms and less $\\text{Mg(OH)}_2$ stays dissolved, and a pure solid does not appear in the $K_{sp}$ expression, so adding more of it causes no shift.',
  },

  /* ---- U8 Acids & Bases (8) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: HA_TITRATION,
    question: 'What was the concentration of HA in the original 25.00 mL sample?',
    options: ['0.0500 M', '0.0960 M', '0.100 M', '0.120 M'],
    correctAnswer: 2,
    explanation:
      'The pH rises most steeply between 24.00 and 26.00 mL, so the equivalence point is at 25.00 mL, where $(0.02500 \\text{ L})(0.100 \\text{ M}) = 2.50 \\times 10^{-3}$ mol $\\text{OH}^-$ has reacted with an equal number of moles of HA; dividing by the 0.02500 L sample gives 0.100 M. The value 0.0500 M uses the half-equivalence volume (or divides by the 50.00 mL total volume), 0.0960 M takes the last point before the jump, 24.00 mL, as the equivalence point, and 0.120 M uses the final volume of 30.00 mL.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: HA_TITRATION,
    question: 'Which indicator is best suited to signal the equivalence point of this titration?',
    options: [
      'methyl orange (color change at pH 3.1–4.4)',
      'methyl red (color change at pH 4.4–6.2)',
      'bromothymol blue (color change at pH 6.0–7.6)',
      'phenolphthalein (color change at pH 8.2–10.0)',
    ],
    correctAnswer: 3,
    explanation:
      'An indicator should change color in the steep part of the curve that contains the equivalence pH, 8.73, and the range of phenolphthalein, 8.2–10.0, includes it. Methyl orange and methyl red change color in the buffer region, well before the equivalence point, and the range of bromothymol blue lies below the equivalence pH, so it changes color before all of the acid has reacted.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: HA_TITRATION,
    question: 'After 26.00 mL of NaOH has been added, the pH is 11.29. Which species is mainly responsible for this pH?',
    options: [
      'excess $\\text{OH}^-$ from the added NaOH',
      '$\\text{A}^-$ ions reacting with water',
      'unreacted HA molecules in the solution',
      '$\\text{Na}^+$ ions reacting with water',
    ],
    correctAnswer: 0,
    explanation:
      'Past the equivalence point all of the HA has reacted, so the extra NaOH adds $\\text{OH}^-$ that has nothing left to react with: $(0.00100 \\text{ L})(0.100 \\text{ M}) = 1.0 \\times 10^{-4}$ mol in 51.00 mL gives $[\\text{OH}^-] = 2.0 \\times 10^{-3}$ M and a pH of 11.29. $\\text{A}^-$ does make the solution basic at the equivalence point, but it supplies only about $10^{-5}$ M $\\text{OH}^-$; no HA remains; and $\\text{Na}^+$ does not react with water.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: HA_TITRATION,
    question: 'Between 5.00 mL and 20.00 mL of added NaOH, the pH rises by only 1.20 units. Which statement best explains this?',
    options: [
      'The solution contains both HA and $\\text{A}^-$, and each added $\\text{OH}^-$ reacts with HA.',
      'The NaOH acts as a weak base here, so most of its hydroxide ions stay bonded to the sodium ions.',
      'Each added $\\text{OH}^-$ reacts with an $\\text{A}^-$ ion, so the amount of base in solution stays the same.',
      'Water molecules absorb the added $\\text{OH}^-$, so the hydroxide is too dilute to change the pH.',
    ],
    correctAnswer: 0,
    explanation:
      'In this region the solution is a buffer: each added $\\text{OH}^-$ reacts with HA to form $\\text{A}^-$, so the pH depends on the slowly changing ratio $[\\text{A}^-]/[\\text{HA}]$. NaOH is a strong base that dissociates completely, $\\text{A}^-$ is itself a base and does not react with $\\text{OH}^-$, and water by itself does not neutralize added hydroxide.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'In water, which of the following compounds is the strongest acid?',
    options: ['$\\text{CH}_4$', '$\\text{NH}_3$', '$\\text{H}_2\\text{O}$', 'HF'],
    correctAnswer: 3,
    explanation:
      'Across period 2 the atom bonded to H becomes more electronegative from C to F, so the H–X bond becomes more polar and the conjugate base holds a negative charge more readily. HF is therefore the strongest acid of the four (a weak acid with $K_a \\approx 7 \\times 10^{-4}$). Water ionizes only very slightly, $\\text{NH}_3$ acts as a base rather than an acid in water, and $\\text{CH}_4$ shows no measurable acidity.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'Equal numbers of moles of the two substances in each pair are mixed in water and react completely. Which mixture gives a solution with a pH greater than 7?',
    options: ['$\\text{CH}_3\\text{COOH}$ and NaOH', 'HCl and $\\text{NH}_3$', '$\\text{HNO}_3$ and KOH', 'HCl and $\\text{NaHCO}_3$'],
    correctAnswer: 0,
    explanation:
      'Equal moles of acetic acid and NaOH react completely to give sodium acetate, and acetate, the conjugate base of a weak acid, makes the solution basic. HCl with $\\text{NH}_3$ leaves $\\text{NH}_4^+$, a weak acid; $\\text{HNO}_3$ with KOH leaves only spectator ions and a neutral solution; and HCl with $\\text{NaHCO}_3$ forms carbonic acid (dissolved $\\text{CO}_2$), which is slightly acidic.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'In which reaction does water act as a Brønsted–Lowry base?',
    options: [
      '$\\text{HNO}_2(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NO}_2^-(aq) + \\text{H}_3\\text{O}^+(aq)$',
      '$\\text{NH}_3(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NH}_4^+(aq) + \\text{OH}^-(aq)$',
      '$\\text{CO}_3^{2-}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{HCO}_3^-(aq) + \\text{OH}^-(aq)$',
      '$\\text{CH}_3\\text{COO}^-(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{CH}_3\\text{COOH}(aq) + \\text{OH}^-(aq)$',
    ],
    correctAnswer: 0,
    explanation:
      'A Brønsted–Lowry base accepts a proton. When nitrous acid ionizes, water accepts its proton and becomes $\\text{H}_3\\text{O}^+$, so water is the base. In the other three reactions water donates a proton to $\\text{NH}_3$, $\\text{CO}_3^{2-}$ or $\\text{CH}_3\\text{COO}^-$ and becomes $\\text{OH}^-$, so there water acts as an acid.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'Carbonic acid, $\\text{H}_2\\text{CO}_3$, has $\\text{p}K_{a1} = 6.35$ and $\\text{p}K_{a2} = 10.33$. In a solution buffered at pH 8.3, which carbon-containing species is present at the highest concentration?',
    options: ['$\\text{H}_2\\text{CO}_3$', '$\\text{HCO}_3^-$', '$\\text{CO}_3^{2-}$', '$\\text{H}_2\\text{CO}_3$ and $\\text{CO}_3^{2-}$, equally'],
    correctAnswer: 1,
    explanation:
      'At pH 8.3 the pH is about 2 units above $\\text{p}K_{a1}$, so $[\\text{HCO}_3^-]$ is roughly 100 times $[\\text{H}_2\\text{CO}_3]$, and about 2 units below $\\text{p}K_{a2}$, so $[\\text{HCO}_3^-]$ is roughly 100 times $[\\text{CO}_3^{2-}]$. $\\text{H}_2\\text{CO}_3$ predominates only below pH 6.35 and $\\text{CO}_3^{2-}$ only above pH 10.33; near pH 8.3 those two are present in similar small amounts, but $\\text{HCO}_3^-$ far exceeds both.',
  },

  /* ---- U6 Thermodynamics (5, the last in the NaHCO3 set) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'A burning candle heats 200.0 g of water in a metal can from 20.0 °C to 32.0 °C while the candle loses 0.500 g of wax. Assuming that all of the heat released goes into the water (specific heat 4.18 J/(g·°C)), what is the heat released per gram of wax burned?',
    options: ['5.02 kJ/g', '10.0 kJ/g', '20.1 kJ/g', '53.5 kJ/g'],
    correctAnswer: 2,
    explanation:
      'The water absorbs $q = (200.0)(4.18)(12.0) = 1.00 \\times 10^4$ J, or 10.0 kJ, and dividing by 0.500 g gives 20.1 kJ/g. The value 10.0 kJ/g is the total heat without dividing by the mass of wax, 5.02 kJ/g multiplies by the mass instead of dividing, and 53.5 kJ/g uses the final temperature, 32.0 °C, in place of the temperature change.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'How much heat is required to convert 27.0 g of ice at 0.0 °C into liquid water at 40.0 °C? ($\\Delta H_{fus}$ of water = 6.01 kJ/mol; specific heat of liquid water = 4.18 J/(g·°C); molar mass of water = 18.0 g/mol)',
    options: ['4.51 kJ', '9.02 kJ', '10.5 kJ', '13.5 kJ'],
    correctAnswer: 3,
    explanation:
      'Melting 27.0/18.0 = 1.50 mol of ice takes (1.50)(6.01) = 9.02 kJ, and warming 27.0 g of liquid water by 40.0 °C takes $(27.0)(4.18)(40.0) = 4510$ J, or 4.51 kJ, for a total of 13.5 kJ. The values 9.02 kJ and 4.51 kJ each include only one of the two steps, and 10.5 kJ uses the heat of fusion for 1 mol of ice instead of 1.50 mol.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Using the average bond enthalpies H–H = 436 kJ/mol, Cl–Cl = 242 kJ/mol and H–Cl = 431 kJ/mol, what is the estimated enthalpy change for $\\text{H}_2(g) + \\text{Cl}_2(g) \\to 2\\text{HCl}(g)$?',
    options: ['$-862$ kJ', '$-184$ kJ', '$+184$ kJ', '$+247$ kJ'],
    correctAnswer: 1,
    explanation:
      'Breaking the bonds absorbs $436 + 242 = 678$ kJ, and forming two H–Cl bonds releases $2(431) = 862$ kJ, so $\\Delta H \\approx 678 - 862 = -184$ kJ. The value +184 kJ subtracts in the wrong order (bonds formed minus bonds broken), +247 kJ counts only one H–Cl bond, and −862 kJ ignores the energy needed to break the bonds in the reactants.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Given $\\text{C}(s) + \\text{O}_2(g) \\to \\text{CO}_2(g)$, $\\Delta H = -394$ kJ, and $\\text{CO}(g) + \\tfrac{1}{2}\\text{O}_2(g) \\to \\text{CO}_2(g)$, $\\Delta H = -283$ kJ, what is $\\Delta H$ for $\\text{C}(s) + \\tfrac{1}{2}\\text{O}_2(g) \\to \\text{CO}(g)$?',
    options: ['$-677$ kJ', '$-111$ kJ', '$+111$ kJ', '$+677$ kJ'],
    correctAnswer: 1,
    explanation:
      'Keep the first equation and reverse the second ($\\Delta H = +283$ kJ); adding them cancels $\\text{CO}_2$ and half of the $\\text{O}_2$ and leaves the target, with $\\Delta H = -394 + 283 = -111$ kJ. Adding the two values without reversing either equation gives −677 kJ, reversing the first equation instead of the second gives +111 kJ, and reversing both gives +677 kJ.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    stimulus: NAHCO3_DATA,
    question: 'What is $\\Delta H^\\circ$ for the decomposition?',
    options: ['$-815.2$ kJ', '$-135.6$ kJ', '$+135.6$ kJ', '$+815.2$ kJ'],
    correctAnswer: 2,
    explanation:
      '$\\Delta H^\\circ = [(-1130.7) + (-241.8) + (-393.5)] - 2(-950.8) = -1766.0 + 1901.6 = +135.6$ kJ. Leaving out the coefficient 2 gives −815.2 kJ (or +815.2 kJ if the subtraction is also reversed), and −135.6 kJ subtracts the products from the reactants.',
  },

  /* ---- U9 Applications of Thermodynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus: NAHCO3_DATA,
    question: 'What is $\\Delta S^\\circ$ for the decomposition?',
    options: ['$-334.2$ J/K', '$+145.4$ J/K', '$+334.2$ J/K', '$+435.9$ J/K'],
    correctAnswer: 2,
    explanation:
      '$\\Delta S^\\circ = (135.0 + 188.8 + 213.8) - 2(101.7) = 537.6 - 203.4 = +334.2$ J/K, positive because two moles of gas form from a solid. The value +435.9 J/K leaves out the coefficient 2, +145.4 J/K leaves out the water vapor, and −334.2 J/K subtracts in the wrong order.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus: NAHCO3_DATA,
    question: 'Assuming $\\Delta H^\\circ$ and $\\Delta S^\\circ$ do not change with temperature, over what temperature range is the decomposition thermodynamically favorable under standard conditions?',
    options: [
      'Above about 406 K, where $T\\Delta S^\\circ$ is larger than $\\Delta H^\\circ$',
      'Below about 406 K, where $\\Delta H^\\circ$ exceeds $T\\Delta S^\\circ$',
      'At all temperatures, because $\\Delta S^\\circ$ is positive',
      'At no temperature, because $\\Delta H^\\circ$ is positive',
    ],
    correctAnswer: 0,
    explanation:
      'With $\\Delta H^\\circ > 0$ and $\\Delta S^\\circ > 0$, $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ is negative only when $T > \\Delta H^\\circ/\\Delta S^\\circ = 135{,}600/334.2 \\approx 406$ K. Below 406 K the unfavorable enthalpy term wins. A positive $\\Delta S^\\circ$ does not guarantee favorability when $\\Delta H^\\circ$ is also positive, and a positive $\\Delta H^\\circ$ can be overcome at a high enough temperature.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus:
      'An aqueous solution of $\\text{CuSO}_4$ is electrolyzed between two inert platinum electrodes. Standard reduction potentials for the species present are listed below.\n\n| Half-reaction | $E^\\circ$ (V) |\n|---|---|\n| $\\text{S}_2\\text{O}_8^{2-}(aq) + 2e^- \\to 2\\text{SO}_4^{2-}(aq)$ | +2.01 |\n| $\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\to 2\\text{H}_2\\text{O}(l)$ | +1.23 |\n| $\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$ | +0.34 |\n| $2\\text{H}_2\\text{O}(l) + 2e^- \\to \\text{H}_2(g) + 2\\text{OH}^-(aq)$ | −0.83 |',
    question: 'Which products form at the electrodes?',
    options: [
      'Cu(s) forms at the cathode, and $\\text{O}_2(g)$ forms at the anode.',
      '$\\text{H}_2(g)$ forms at the cathode, and $\\text{O}_2(g)$ forms at the anode.',
      'Cu(s) forms at the cathode, and $\\text{S}_2\\text{O}_8^{2-}(aq)$ forms at the anode.',
      '$\\text{O}_2(g)$ forms at the cathode, and Cu(s) is deposited on the anode.',
    ],
    correctAnswer: 0,
    explanation:
      'At the cathode the species with the more positive reduction potential is reduced, and $\\text{Cu}^{2+}$ (+0.34 V) is reduced far more easily than water (−0.83 V). At the anode water is oxidized to $\\text{O}_2$ (the reverse of the +1.23 V half-reaction) much more easily than sulfate is oxidized to $\\text{S}_2\\text{O}_8^{2-}$ (the reverse of the +2.01 V half-reaction). Oxidation, not reduction, occurs at the anode, so copper cannot be deposited there and $\\text{O}_2$ cannot form at the cathode.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus:
      'A galvanic cell is built with a tin electrode in 1.0 M $\\text{Sn(NO}_3\\text{)}_2(aq)$ and a copper electrode in 1.0 M $\\text{Cu(NO}_3\\text{)}_2(aq)$. The half-cells are joined by a wire and by a salt bridge containing $\\text{KNO}_3(aq)$.\n\n| Half-reaction | $E^\\circ$ (V) |\n|---|---|\n| $\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$ | +0.34 |\n| $\\text{Sn}^{2+}(aq) + 2e^- \\to \\text{Sn}(s)$ | −0.14 |',
    question: 'Which observation is expected as the cell operates?',
    options: [
      'The copper electrode gains mass, and $[\\text{Sn}^{2+}]$ increases.',
      'The tin electrode gains mass, and $[\\text{Cu}^{2+}]$ increases.',
      'The copper electrode loses mass, and $[\\text{Sn}^{2+}]$ decreases.',
      'Both electrodes gain mass, and both ion concentrations decrease.',
    ],
    correctAnswer: 0,
    explanation:
      '$\\text{Cu}^{2+}$ has the more positive reduction potential, so it is reduced and copper metal plates onto the copper electrode, while tin is oxidized and $\\text{Sn}^{2+}$ ions enter its solution. Running the cell the other way would give a negative cell potential, and the electrodes cannot both gain mass, because one half-cell must supply the electrons by oxidation.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'A galvanic cell runs the reaction $\\text{Ni}(s) + 2\\text{Ag}^+(aq) \\to \\text{Ni}^{2+}(aq) + 2\\text{Ag}(s)$, for which $E^\\circ = +1.06$ V. The cell is assembled with $[\\text{Ag}^+] = 1.0$ M and $[\\text{Ni}^{2+}] = 0.010$ M. How does its initial cell potential compare with $E^\\circ$?',
    options: [
      'It is greater than 1.06 V, because $Q < 1$, so the mixture is farther from equilibrium.',
      'It is less than 1.06 V, because $Q < 1$, so fewer product ions are available to react.',
      'It is equal to 1.06 V, because cell potential does not depend on concentration.',
      'It is equal to 0 V, because the two solutions start at different concentrations.',
    ],
    correctAnswer: 0,
    explanation:
      'Here $Q = [\\text{Ni}^{2+}]/[\\text{Ag}^+]^2 = 0.010$, which is less than 1, so the mixture is farther from equilibrium than at standard conditions and the cell potential is greater than $E^\\circ$. A low product concentration raises the driving force rather than lowering it, the actual potential does change with concentration even though $E^\\circ$ is fixed, and the potential falls to zero only when Q = K.',
  },
]
