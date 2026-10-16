import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Chemistry practice exam, form 3: 60 MCQs (May 2027 format, 4 options).
 * CED unit tally:
 *   U1 Atomic Structure & Properties               6   (7–9%)
 *   U2 Compound Structure & Properties             5   (7–9%)
 *   U3 Intermolecular Forces & Properties          13  (18–22%)
 *   U4 Chemical Reactions                          5   (7–9%)
 *   U5 Kinetics                                    6   (7–9%)
 *   U6 Thermodynamics                              6   (7–9%)
 *   U7 Equilibrium                                 6   (7–9%)
 *   U8 Acids & Bases                               8   (11–15%)
 *   U9 Applications of Thermodynamics              5   (7–9%)
 * Stimulus sets (consecutive, shared stimulus): NaCl/KCl mixture analysis (3),
 * argon in a rigid flask (4), four liquids (3), butadiene dimerization (3),
 * pH of six solutions (4), free energy and activation energy of four
 * reactions (3), plus single-stimulus items.
 * Calculator, periodic table and equations sheet allowed.
 */

const CHLORIDE_SAMPLES =
  'A student analyzes three solid samples for chlorine. Sample 1 is pure NaCl, sample 2 is pure KCl, and sample 3 is a mixture of NaCl and KCl only.\n\n| Sample | Mass of sample (g) | Mass of chlorine in sample (g) |\n|---|---|---|\n| 1 (pure NaCl) | 2.000 | 1.213 |\n| 2 (pure KCl) | 2.000 | 0.951 |\n| 3 (mixture) | 2.000 | 1.100 |'

const ARGON_FLASK =
  'A rigid, sealed flask contains a fixed amount of argon gas. The pressure of the gas is measured at several temperatures.\n\n| Temperature (°C) | Pressure (atm) |\n|---|---|\n| 0 | 1.00 |\n| 25 | 1.09 |\n| 50 | 1.18 |\n| 75 | 1.27 |\n| 100 | 1.37 |'

const FOUR_LIQUIDS =
  'The table gives properties of four liquids at 20 °C.\n\n| Liquid | Formula | Molar mass (g/mol) | Viscosity (mPa·s) | Surface tension (mN/m) | Vapor pressure (kPa) |\n|---|---|---|---|---|---|\n| water | $\\text{H}_2\\text{O}$ | 18 | 1.0 | 73 | 2.3 |\n| ethanol | $\\text{CH}_3\\text{CH}_2\\text{OH}$ | 46 | 1.2 | 22 | 5.9 |\n| diethyl ether | $\\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_3$ | 74 | 0.23 | 17 | 59 |\n| glycerol | $\\text{HOCH}_2\\text{CH(OH)CH}_2\\text{OH}$ | 92 | 1410 | 63 | less than 0.001 |'

const BUTADIENE =
  'Butadiene, $\\text{C}_4\\text{H}_6$, dimerizes in the gas phase at a constant high temperature: $2\\text{C}_4\\text{H}_6(g) \\to \\text{C}_8\\text{H}_{12}(g)$. The concentration of butadiene was measured over time.\n\n| Time (s) | $[\\text{C}_4\\text{H}_6]$ (M) | $\\ln[\\text{C}_4\\text{H}_6]$ | $1/[\\text{C}_4\\text{H}_6]$ ($\\text{M}^{-1}$) |\n|---|---|---|---|\n| 0 | 0.0200 | −3.912 | 50.0 |\n| 200 | 0.0167 | −4.094 | 60.0 |\n| 400 | 0.0143 | −4.248 | 70.0 |\n| 600 | 0.0125 | −4.382 | 80.0 |\n| 1000 | 0.0100 | −4.605 | 100.0 |'

const SIX_SOLUTIONS =
  'The table lists the measured pH of six aqueous solutions at 25 °C. Each solution has a solute concentration of 0.10 M.\n\n| Solute | pH |\n|---|---|\n| HCl | 1.00 |\n| $\\text{HNO}_2$ | 2.19 |\n| $\\text{NH}_4\\text{Cl}$ | 5.13 |\n| NaCl | 7.00 |\n| $\\text{NaNO}_2$ | 8.17 |\n| $\\text{NH}_3$ | 11.13 |'

const FOUR_REACTIONS =
  'The table gives the standard free-energy change at 298 K and the activation energy of the forward reaction for four different reactions, W, X, Y and Z.\n\n| Reaction | $\\Delta G^\\circ$ at 298 K (kJ/mol) | $E_a$ (kJ/mol) |\n|---|---|---|\n| W | −120 | 190 |\n| X | −35 | 40 |\n| Y | +2 | 55 |\n| Z | +60 | 85 |'

export const MCQS: MCQItem[] = [
  /* ---- U1 Atomic Structure & Properties (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    stimulus: CHLORIDE_SAMPLES,
    question: 'What mass of chlorine is contained in a 5.000 g sample of pure NaCl?',
    options: ['1.213 g', '2.378 g', '2.500 g', '3.033 g'],
    correctAnswer: 3,
    explanation:
      'A pure compound has a fixed composition, so every sample of NaCl is $1.213/2.000 = 60.65\\%$ chlorine by mass, and $5.000 \\times 0.6065 = 3.033$ g. The value 1.213 g is the mass in the 2.000 g sample, 2.378 g applies the composition of KCl, and 2.500 g assumes chlorine is half the mass of the salt.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    stimulus: CHLORIDE_SAMPLES,
    question: 'What is the mass percent of NaCl in sample 3?',
    options: ['43%', '50%', '57%', '91%'],
    correctAnswer: 2,
    explanation:
      'NaCl is 60.65% Cl and KCl is 47.55% Cl. If x is the mass fraction of NaCl, then $0.6065x + 0.4755(1 - x) = 1.100/2.000 = 0.5500$, so $0.1310x = 0.0745$ and $x = 0.57$. The value 43% is the mass percent of KCl, 50% assumes equal masses (which would give 54.1% Cl), and 91% divides 55.00% by 60.65%.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    stimulus: CHLORIDE_SAMPLES,
    question: 'A second student analyzes a different mixture of NaCl and KCl. Which statement about the result is correct?',
    options: [
      'Its mass percent of chlorine can be any value from 47.55% to 60.65%, depending on how much of each salt it contains.',
      'Its mass percent of chlorine must be 55.00%, because every mixture of these two salts has the same composition.',
      'Its mass percent of chlorine can be above 60.65% if the mixture contains more KCl than NaCl.',
      'Its mass percent of chlorine must be 54.10%, the average of the values for the two pure salts.',
    ],
    correctAnswer: 0,
    explanation:
      'A mixture, unlike a pure compound, has a variable composition, so its percent chlorine lies between the values for pure KCl (47.55%) and pure NaCl (60.65%) and depends on the proportions. Mixtures do not share one fixed composition, a mixture cannot exceed the chlorine content of its richer component, and the simple average applies only to a mixture with equal masses of the two salts.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Which ion has the ground-state electron configuration $[\\text{Ar}]3d^{10}$?',
    options: ['$\\text{Zn}^{2+}$', '$\\text{Cu}^{2+}$', '$\\text{Fe}^{2+}$', '$\\text{Ga}^{+}$'],
    correctAnswer: 0,
    explanation:
      'Zn is $[\\text{Ar}]4s^2 3d^{10}$, and a transition metal loses its 4s electrons first, so $\\text{Zn}^{2+}$ is $[\\text{Ar}]3d^{10}$. $\\text{Cu}^{2+}$ is $[\\text{Ar}]3d^9$ and $\\text{Fe}^{2+}$ is $[\\text{Ar}]3d^6$. Ga is $[\\text{Ar}]3d^{10}4s^2 4p^1$, so $\\text{Ga}^+$, which has lost only its 4p electron, is $[\\text{Ar}]3d^{10}4s^2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Naturally occurring boron is a mixture of two isotopes, boron-10 (10.01 amu) and boron-11 (11.01 amu), and its average atomic mass is 10.81 amu. What is the percent abundance of boron-11?',
    options: ['20%', '50%', '80%', '98%'],
    correctAnswer: 2,
    explanation:
      'If x is the fraction of boron-11, then $10.01(1 - x) + 11.01x = 10.81$, so $x = 0.80$ and boron-11 is 80% of the atoms. The value 20% is the abundance of boron-10, 50% would give an average of 10.51 amu, and 98% comes from dividing 10.81 by 11.01 as if that ratio were an abundance.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'A ground-state atom of which element has exactly three unpaired electrons?',
    options: ['scandium (Z = 21)', 'vanadium (Z = 23)', 'manganese (Z = 25)', 'zinc (Z = 30)'],
    correctAnswer: 1,
    explanation:
      'V is $[\\text{Ar}]4s^2 3d^3$; by Hund\'s rule the three 3d electrons occupy separate orbitals, so all three are unpaired. Sc ($3d^1$) has one unpaired electron, Mn ($3d^5$) has five, and Zn ($3d^{10}$, with a filled 4s) has none.',
  },

  /* ---- U2 Compound Structure & Properties (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Which of the following molecules has a nonzero dipole moment?',
    options: ['$\\text{PF}_5$', '$\\text{SF}_4$', '$\\text{XeF}_4$', '$\\text{SF}_6$'],
    correctAnswer: 1,
    explanation:
      'S in $\\text{SF}_4$ has four bonds and one lone pair, giving a seesaw shape in which the S–F bond dipoles do not cancel, so the molecule is polar. $\\text{PF}_5$ (trigonal bipyramidal), $\\text{XeF}_4$ (square planar, with its two lone pairs opposite each other) and $\\text{SF}_6$ (octahedral) are all symmetric, so their bond dipoles cancel.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'In one Lewis structure of the azide ion, $[\\text{N}{=}\\text{N}{=}\\text{N}]^-$, each N–N bond is a double bond, and each end N atom has two lone pairs. What are the formal charges on the three N atoms, from left to right?',
    options: ['−1, +1, −1', '0, −1, 0', '−1, 0, 0', '0, +1, −2'],
    correctAnswer: 0,
    explanation:
      'Each end N has 5 valence electrons, 4 nonbonding electrons and 2 bonds: $5 - 4 - 2 = -1$. The central N has no lone pairs and 4 bonds: $5 - 0 - 4 = +1$. The charges add to −1, the charge of the ion. Placing the −1 on the central atom, or on one end atom only, does not match this electron arrangement, and the charges 0, +1 and −2 belong to a different structure with a single and a triple bond.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Acetic acid has the structure $\\text{CH}_3{-}\\text{C}({=}\\text{O}){-}\\text{O}{-}\\text{H}$. Which bond angle in the molecule is closest to 120°?',
    options: [
      'the H–C–H angle in the $\\text{CH}_3$ group',
      'the O=C–O angle of the carboxyl group',
      'the C–O–H angle at the hydroxyl oxygen atom',
      'the H–C–C angle at the $\\text{CH}_3$ carbon atom',
    ],
    correctAnswer: 1,
    explanation:
      'The carboxyl carbon has three electron domains (a double bond to O and single bonds to O and C) and no lone pairs, so it is trigonal planar with angles near 120°. The $\\text{CH}_3$ carbon has four bonding domains, so its H–C–H and H–C–C angles are near 109.5°, and the hydroxyl O has two bonds and two lone pairs, which gives a bent C–O–H angle slightly below 109.5°.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'In the reaction $\\text{H}_2\\text{C}{=}\\text{CH}_2 + \\text{H}_2 \\to \\text{H}_3\\text{C}{-}\\text{CH}_3$, how does the hybridization of each carbon atom change?',
    options: ['from $sp$ to $sp^2$', 'from $sp^2$ to $sp^3$', 'from $sp^3$ to $sp$', 'it stays $sp^2$'],
    correctAnswer: 1,
    explanation:
      'In ethene each carbon has three electron domains (a double bond and two C–H bonds), so it is $sp^2$. In ethane each carbon has four single bonds, so it is $sp^3$. An sp carbon would need only two domains, as in a triple bond, so neither the starting nor the final carbon is sp, and the hybridization cannot stay the same when the number of domains changes from three to four.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'In which molecule does the central atom have fewer than eight valence electrons around it in the Lewis structure?',
    options: ['$\\text{BF}_3$', '$\\text{NF}_3$', '$\\text{PF}_3$', '$\\text{ClF}_3$'],
    correctAnswer: 0,
    explanation:
      'Boron has only 3 valence electrons, and in $\\text{BF}_3$ it forms three single bonds, so it has just 6 electrons around it. N and P in $\\text{NF}_3$ and $\\text{PF}_3$ each have three bonds and a lone pair (an octet), and Cl in $\\text{ClF}_3$ has three bonds and two lone pairs, 10 electrons, which is more than an octet rather than fewer.',
  },

  /* ---- U3 Intermolecular Forces & Properties (13) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: ARGON_FLASK,
    question: 'If the trend continues, at about what temperature would the pressure of the gas be 2.00 atm?',
    options: ['200 °C', '273 °C', '373 °C', '546 °C'],
    correctAnswer: 1,
    explanation:
      'At constant volume the pressure is proportional to the Kelvin temperature. Doubling the pressure from 1.00 atm at 273 K requires 546 K, which is 273 °C. The value 546 °C forgets to convert back from kelvins, 200 °C doubles 100 °C as if pressure were proportional to the Celsius temperature, and 373 °C adds 273 to the highest temperature in the table instead of doubling the Kelvin temperature.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: ARGON_FLASK,
    question: 'If the line through the data is extended to lower temperatures, at about what temperature does it reach a pressure of zero?',
    options: ['−546 °C', '−273 °C', '−100 °C', '0 °C'],
    correctAnswer: 1,
    explanation:
      'The pressure rises by about 0.0037 atm for each degree Celsius, which is 1/273 of the pressure at 0 °C, so the line reaches zero about 273 degrees below 0 °C, at −273 °C (0 K, absolute zero). At 0 °C the pressure is still 1.00 atm, a fall of 100 degrees removes only about a third of the pressure, and no temperature is below −273 °C.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: ARGON_FLASK,
    question: 'Which particle-level explanation accounts for the increase in pressure shown in the table?',
    options: [
      'The argon atoms move faster on average, so they strike the walls more often and with more force.',
      'The argon atoms expand as they are heated, so they take up a larger fraction of the flask volume.',
      'The attractions between argon atoms grow stronger, so the atoms are pulled harder toward the walls.',
      'More argon atoms form as the temperature rises, so there are more atoms to collide with the walls.',
    ],
    correctAnswer: 0,
    explanation:
      'A higher temperature means a higher average kinetic energy, so the atoms move faster, hit the walls more often and push harder in each collision, which raises the pressure. Atoms do not swell when heated, attractions between gas atoms do not increase with temperature (and would lower the pressure), and the sealed flask holds a fixed number of atoms.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: ARGON_FLASK,
    question: 'A second flask of the same volume contains twice as many moles of argon. What is its pressure at 50 °C?',
    options: ['0.59 atm', '1.18 atm', '2.36 atm', '4.72 atm'],
    correctAnswer: 2,
    explanation:
      'At the same volume and temperature, pressure is proportional to the number of moles, so doubling the moles doubles the pressure: $2(1.18) = 2.36$ atm. The value 1.18 atm ignores the extra gas, 0.59 atm halves the pressure instead of doubling it, and 4.72 atm doubles it twice.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: FOUR_LIQUIDS,
    question: 'Which statement best explains why glycerol is far more viscous than ethanol?',
    options: [
      'Each glycerol molecule has three O–H groups and forms many hydrogen bonds with its neighbors, which resist the flow of the liquid.',
      'Each glycerol molecule is nonpolar, so its molecules attract each other only through dispersion forces that hold them in place.',
      'Each glycerol molecule forms covalent bonds to neighboring molecules, which must be broken for the liquid to flow.',
      'Each glycerol molecule has a smaller molar mass than ethanol, so its molecules pack more tightly and slide less easily.',
    ],
    correctAnswer: 0,
    explanation:
      'Glycerol has three O–H groups per molecule, so each molecule can form several hydrogen bonds to its neighbors, and these strong attractions make it hard for molecules to slide past one another. Glycerol is polar, not nonpolar; the attractions between its molecules are intermolecular forces, not covalent bonds; and its molar mass (92 g/mol) is larger than that of ethanol (46 g/mol).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: FOUR_LIQUIDS,
    question: 'Which statement explains why diethyl ether has both the lowest surface tension and the highest vapor pressure of the four liquids?',
    options: [
      'Ether molecules have no O–H group, so they cannot hydrogen bond to each other and their attractions are weakest.',
      'Ether molecules have the largest molar mass of the four liquids, so their dispersion forces are the weakest of the four.',
      'Ether molecules are ionic, so they separate into ions that leave the surface of the liquid more easily than molecules.',
      'Ether molecules have the strongest hydrogen bonds, so they pull inward from the surface and escape into the vapor.',
    ],
    correctAnswer: 0,
    explanation:
      'Diethyl ether has no H bonded to O, so its molecules attract one another only through weak dipole–dipole and dispersion forces, while the other three liquids hydrogen bond. Weak attractions give a low surface tension and let molecules escape easily, so the vapor pressure is high. Glycerol, not ether, has the largest molar mass, and a larger molar mass would strengthen dispersion forces; ether is molecular, not ionic, and it forms no hydrogen bonds between its own molecules.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: FOUR_LIQUIDS,
    question: 'Which ranking of normal boiling points, from lowest to highest, is most consistent with the data?',
    options: [
      'diethyl ether < ethanol < water < glycerol',
      'water < ethanol < diethyl ether < glycerol',
      'glycerol < water < ethanol < diethyl ether',
      'ethanol < diethyl ether < water < glycerol',
    ],
    correctAnswer: 0,
    explanation:
      'At a given temperature, a liquid with a higher vapor pressure has weaker attractions and boils at a lower temperature. The vapor pressures run ether (59 kPa) > ethanol (5.9 kPa) > water (2.3 kPa) > glycerol (less than 0.001 kPa), so the boiling points rise in that order. Ranking by molar mass gives water < ethanol < ether < glycerol, which ignores hydrogen bonding, and the reversed ranking treats high vapor pressure as a sign of strong attractions.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'cis-1,2-Dichloroethene and trans-1,2-dichloroethene both have the formula $\\text{C}_2\\text{H}_2\\text{Cl}_2$. The cis isomer, with both Cl atoms on the same side of the C=C bond, boils at 60 °C; the trans isomer, with the Cl atoms on opposite sides, boils at 48 °C. Which statement best explains the difference?',
    options: [
      'The C–Cl bond dipoles cancel in the trans isomer but not in the cis isomer, so only the cis isomer has dipole–dipole attractions.',
      'The cis isomer has more electrons than the trans isomer, so its London dispersion forces are much stronger than those of the trans isomer.',
      'The cis isomer forms hydrogen bonds through its H atoms, while the H atoms of the trans isomer point away from the neighboring molecules.',
      'The C=C double bond is stronger in the cis isomer, so more energy is needed to break that bond when molecules leave the boiling liquid.',
    ],
    correctAnswer: 0,
    explanation:
      'In the trans isomer the two C–Cl bond dipoles point in opposite directions and cancel, so the molecule is nonpolar; in the cis isomer they add, so the molecule is polar and has dipole–dipole attractions in addition to dispersion forces. The isomers have the same formula and the same number of electrons, neither has H bonded to N, O or F, and boiling separates molecules without breaking covalent bonds.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Propene burns according to $2\\text{C}_3\\text{H}_6(g) + 9\\text{O}_2(g) \\to 6\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(g)$. What volume of $\\text{O}_2$ is needed to burn 4.0 L of propene completely, with both gases measured at the same temperature and pressure?',
    options: ['4.0 L', '9.0 L', '12 L', '18 L'],
    correctAnswer: 3,
    explanation:
      'At the same temperature and pressure, equal volumes of gases contain equal numbers of molecules, so gas volumes react in the ratio of the coefficients: $4.0 \\text{ L} \\times 9/2 = 18$ L of $\\text{O}_2$. The value 4.0 L assumes a 1 : 1 ratio, 9.0 L uses the coefficient without scaling it to 4.0 L, and 12 L is the volume of $\\text{CO}_2$ formed.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Which aqueous solution has the greatest total concentration of dissolved solute particles?',
    options: ['0.10 M $\\text{Na}_3\\text{PO}_4$', '0.15 M $\\text{CaCl}_2$', '0.20 M NaCl', '0.30 M glucose'],
    correctAnswer: 1,
    explanation:
      'Each formula unit of $\\text{CaCl}_2$ releases three ions, so 0.15 M $\\text{CaCl}_2$ gives 0.45 M of particles. $\\text{Na}_3\\text{PO}_4$ releases four ions per formula unit (0.40 M), NaCl releases two (0.40 M), and glucose is a nonelectrolyte that stays as 0.30 M of molecules.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'An electron in an atom drops between two energy levels that differ by $3.03 \\times 10^{-19}$ J, and the atom emits one photon. What is the wavelength of the photon? ($h = 6.626 \\times 10^{-34}$ J·s; $c = 3.00 \\times 10^8$ m/s)',
    options: ['$6.56 \\times 10^{-7}$ nm', '65.6 nm', '656 nm', '$4.57 \\times 10^{14}$ nm'],
    correctAnswer: 2,
    explanation:
      'The photon carries the energy difference, so $\\lambda = \\dfrac{hc}{E} = \\dfrac{(6.626 \\times 10^{-34})(3.00 \\times 10^8)}{3.03 \\times 10^{-19}} = 6.56 \\times 10^{-7}$ m, or 656 nm, in the visible region. The value $6.56 \\times 10^{-7}$ is the wavelength in meters with the wrong unit, 65.6 nm misplaces the decimal point in converting meters to nanometers, and $4.57 \\times 10^{14}$ is the frequency in hertz, not a wavelength.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Which ion is expected to have the strongest ion–dipole attraction to the water molecules around it?',
    options: ['$\\text{K}^+$', '$\\text{Na}^+$', '$\\text{Li}^+$', '$\\text{Al}^{3+}$'],
    correctAnswer: 3,
    explanation:
      'The strength of an ion–dipole attraction increases with the charge of the ion and decreases with its size. $\\text{Al}^{3+}$ has the largest charge and the smallest radius of the four, so it attracts the partially negative O atoms of water most strongly. $\\text{Li}^+$ is small but carries only a 1+ charge, and $\\text{Na}^+$ and $\\text{K}^+$ carry a 1+ charge on even larger ions.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus:
      'A rigid flask holds 0.40 mol of NO(g) and 0.30 mol of $\\text{O}_2(g)$ at a total pressure of 1.40 atm. The gases react completely according to $2\\text{NO}(g) + \\text{O}_2(g) \\to 2\\text{NO}_2(g)$, and the flask is then returned to its original temperature.',
    question: 'What is the total pressure in the flask after the reaction?',
    options: ['0.80 atm', '1.00 atm', '1.40 atm', '2.00 atm'],
    correctAnswer: 1,
    explanation:
      'The 0.40 mol NO uses 0.20 mol $\\text{O}_2$ and forms 0.40 mol $\\text{NO}_2$, leaving 0.10 mol $\\text{O}_2$: 0.50 mol of gas in all. At constant V and T, pressure is proportional to moles, so $P = 1.40 \\times 0.50/0.70 = 1.00$ atm. The value 1.40 atm ignores the drop in the number of gas molecules, 0.80 atm counts only the $\\text{NO}_2$, and 2.00 atm treats the moles of gas as increasing.',
  },

  /* ---- U4 Chemical Reactions (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'Aqueous solutions of sodium sulfide, $\\text{Na}_2\\text{S}$, and zinc nitrate, $\\text{Zn(NO}_3\\text{)}_2$, are mixed, and a white solid forms. (Zinc sulfide is insoluble in water.) Which net ionic equation represents the formation of the solid?',
    options: [
      '$\\text{Zn}^{2+}(aq) + \\text{S}^{2-}(aq) \\to \\text{ZnS}(s)$',
      '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\to \\text{NaNO}_3(s)$',
      '$\\text{Zn}^{2+}(aq) + 2\\text{NO}_3^-(aq) \\to \\text{Zn(NO}_3\\text{)}_2(s)$',
      '$\\text{Na}_2\\text{S}(aq) + \\text{Zn(NO}_3\\text{)}_2(aq) \\to \\text{ZnS}(s) + 2\\text{NaNO}_3(aq)$',
    ],
    correctAnswer: 0,
    explanation:
      'ZnS is the insoluble product, and $\\text{Na}^+$ and $\\text{NO}_3^-$ are spectator ions, so the net ionic equation shows only $\\text{Zn}^{2+}$ and $\\text{S}^{2-}$ forming the solid. Sodium nitrate and zinc nitrate are soluble (all nitrates are), so neither forms a solid, and the equation with full formulas is the molecular equation, which still includes the spectator ions.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'A sample of 6.20 g of $\\text{P}_4$ (123.9 g/mol) reacts with 14.2 g of $\\text{Cl}_2$ (70.90 g/mol) according to $\\text{P}_4(s) + 6\\text{Cl}_2(g) \\to 4\\text{PCl}_3(l)$. What is the theoretical yield of $\\text{PCl}_3$ (137.3 g/mol)?',
    options: ['18.3 g', '20.4 g', '27.5 g', '41.2 g'],
    correctAnswer: 0,
    explanation:
      'There are 6.20/123.9 = 0.0500 mol $\\text{P}_4$ and 14.2/70.90 = 0.200 mol $\\text{Cl}_2$. Reacting all the $\\text{P}_4$ would need 0.300 mol $\\text{Cl}_2$, so $\\text{Cl}_2$ is limiting and forms $0.200 \\times 4/6 = 0.133$ mol $\\text{PCl}_3$, or 18.3 g. The value 27.5 g treats $\\text{P}_4$ as limiting, 41.2 g inverts the 4 : 6 ratio, and 20.4 g is just the total mass of the reactants.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'A 25.0 mL sample of an iodine solution is titrated with 0.100 M sodium thiosulfate. The reaction is $\\text{I}_2(aq) + 2\\text{S}_2\\text{O}_3^{2-}(aq) \\to 2\\text{I}^-(aq) + \\text{S}_4\\text{O}_6^{2-}(aq)$, and 18.6 mL of thiosulfate reaches the endpoint. What is the concentration of $\\text{I}_2$ in the sample?',
    options: ['0.0186 M', '0.0372 M', '0.0744 M', '0.134 M'],
    correctAnswer: 1,
    explanation:
      'The titrant supplies $(0.0186)(0.100) = 1.86 \\times 10^{-3}$ mol $\\text{S}_2\\text{O}_3^{2-}$, which reacts with half as many moles of $\\text{I}_2$, $9.30 \\times 10^{-4}$ mol, in 0.0250 L: 0.0372 M. The value 0.0744 M ignores the 1 : 2 ratio, 0.0186 M divides by 2 twice, and 0.134 M inverts the ratio of the volumes.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'In which compound does nitrogen have the highest oxidation number?',
    options: ['$\\text{N}_2\\text{H}_4$', 'NO', '$\\text{NO}_2$', '$\\text{N}_2\\text{O}_5$'],
    correctAnswer: 3,
    explanation:
      'With O at −2 and H at +1, nitrogen is −2 in $\\text{N}_2\\text{H}_4$, +2 in NO, +4 in $\\text{NO}_2$ and +5 in $\\text{N}_2\\text{O}_5$ (two N atoms balance five O atoms: $2x = +10$). The oxidation number rises as nitrogen is bonded to more oxygen per N atom, and in $\\text{N}_2\\text{O}_5$ each N carries 2.5 O atoms, the most of the four.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'Which process is a chemical change in which covalent bonds within molecules are broken and new substances form?',
    options: [
      'boiling liquid water to form steam',
      'dissolving sucrose crystals in water',
      'decomposing water into $\\text{H}_2$ and $\\text{O}_2$',
      'subliming solid carbon dioxide',
    ],
    correctAnswer: 2,
    explanation:
      'Electrolysis breaks the O–H bonds of water molecules and forms the new substances $\\text{H}_2$ and $\\text{O}_2$, which is a chemical change. Boiling water and subliming dry ice are phase changes that overcome only intermolecular attractions, and dissolving sucrose separates intact molecules from one another without breaking covalent bonds.',
  },

  /* ---- U5 Kinetics (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    stimulus: BUTADIENE,
    question: 'Which statement about the order of the reaction is supported by the data?',
    options: [
      'It is second order in $\\text{C}_4\\text{H}_6$, because $1/[\\text{C}_4\\text{H}_6]$ increases linearly with time.',
      'It is first order in $\\text{C}_4\\text{H}_6$, because $\\ln[\\text{C}_4\\text{H}_6]$ decreases as time passes.',
      'It is zero order in $\\text{C}_4\\text{H}_6$, because $[\\text{C}_4\\text{H}_6]$ falls by equal amounts.',
      'It is second order in $\\text{C}_4\\text{H}_6$, because the coefficient of $\\text{C}_4\\text{H}_6$ is 2.',
    ],
    correctAnswer: 0,
    explanation:
      '$1/[\\text{C}_4\\text{H}_6]$ rises by exactly 10.0 $\\text{M}^{-1}$ every 200 s, so a plot of $1/[\\text{C}_4\\text{H}_6]$ against time is a straight line, the signature of a second-order reaction. $\\ln[\\text{C}_4\\text{H}_6]$ does decrease, but not linearly (by 0.182, then 0.154, then 0.134), the concentration falls by smaller amounts in each interval, and a coefficient in the balanced equation cannot by itself establish the order.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    stimulus: BUTADIENE,
    question: 'Taking the rate as the rate at which $\\text{C}_4\\text{H}_6$ is consumed, what is k for the dimerization, including its units?',
    options: [
      '$1.0 \\times 10^{-5}\\ \\text{M}\\,\\text{s}^{-1}$',
      '$6.9 \\times 10^{-4}\\ \\text{s}^{-1}$',
      '$5.00 \\times 10^{-2}\\ \\text{M}^{-1}\\,\\text{s}^{-1}$',
      '$2.00 \\times 10^{1}\\ \\text{M}\\,\\text{s}$',
    ],
    correctAnswer: 2,
    explanation:
      'For a second-order reaction, k is the slope of $1/[\\text{C}_4\\text{H}_6]$ versus time: $(100.0 - 50.0)/1000 \\text{ s} = 5.00 \\times 10^{-2}\\ \\text{M}^{-1}\\,\\text{s}^{-1}$. The value $1.0 \\times 10^{-5}$ M/s treats the decrease in concentration as linear (zero order), $6.9 \\times 10^{-4}\\ \\text{s}^{-1}$ uses the ln data as if the reaction were first order, and $2.00 \\times 10^1$ is the reciprocal of the slope.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    stimulus: BUTADIENE,
    question: 'Based on the data, about how long after the 1000 s measurement will $[\\text{C}_4\\text{H}_6]$ fall from 0.0100 M to 0.00500 M?',
    options: ['500 s', '1000 s', '2000 s', '4000 s'],
    correctAnswer: 2,
    explanation:
      'At 0.00500 M, $1/[\\text{C}_4\\text{H}_6] = 200\\ \\text{M}^{-1}$, an increase of 100 $\\text{M}^{-1}$ from 100 $\\text{M}^{-1}$, which takes $100/0.0500 = 2000$ s. For a second-order reaction each half-life is twice as long as the one before it (the first took 1000 s). The value 1000 s assumes a constant half-life, which holds only for first order, and 500 s and 4000 s halve or quadruple it without justification.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'For the reaction $4\\text{PH}_3(g) \\to \\text{P}_4(g) + 6\\text{H}_2(g)$, $\\text{H}_2$ is forming at a rate of 0.060 M/s at a certain moment. At what rate is $\\text{PH}_3$ being consumed at that moment?',
    options: ['0.010 M/s', '0.040 M/s', '0.060 M/s', '0.090 M/s'],
    correctAnswer: 1,
    explanation:
      'Four $\\text{PH}_3$ are consumed for every six $\\text{H}_2$ formed, so $\\text{PH}_3$ is consumed at $0.060 \\times 4/6 = 0.040$ M/s. The value 0.090 M/s inverts the ratio, 0.060 M/s ignores the coefficients, and 0.010 M/s is the rate of formation of $\\text{P}_4$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'A reaction has the rate law rate $= k[\\text{A}]^2$. Which change does NOT change the value of the rate constant, k?',
    options: [
      'raising the temperature of the reaction mixture by 20 °C',
      'adding a catalyst that provides a lower-energy pathway',
      'doubling the concentration of A at a set temperature',
      'cooling the reaction mixture by 20 °C before it begins',
    ],
    correctAnswer: 2,
    explanation:
      'The rate constant depends on the temperature and on the pathway (activation energy), not on concentration. Doubling [A] quadruples the rate through the $[\\text{A}]^2$ term, but k stays the same. Heating or cooling changes the fraction of collisions with enough energy and therefore changes k, and a catalyst provides a pathway with a lower activation energy, which increases k.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'A drug is eliminated from the bloodstream by a first-order process with a half-life of 4.0 hours. What fraction of the original amount of the drug remains 10.0 hours after it is given?',
    options: ['0.063', '0.18', '0.25', '0.40'],
    correctAnswer: 1,
    explanation:
      'For a first-order process $k = 0.693/4.0 \\text{ h} = 0.173\\ \\text{h}^{-1}$, and the fraction remaining is $e^{-kt} = e^{-(0.173)(10.0)} = e^{-1.73} = 0.18$ (equivalently, $(1/2)^{2.5}$). The value 0.25 is the fraction after only 8.0 hours (two half-lives), 0.063 is the fraction after four half-lives (16 hours), and 0.40 divides the half-life by the elapsed time.',
  },

  /* ---- U6 Thermodynamics (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'A 100.0 g sample of water at 80.0 °C is mixed with 50.0 g of water at 20.0 °C in an insulated container. What is the final temperature of the mixture?',
    options: ['40.0 °C', '50.0 °C', '60.0 °C', '70.0 °C'],
    correctAnswer: 2,
    explanation:
      'The heat lost by the warm water equals the heat gained by the cool water: $(100.0)(80.0 - T) = (50.0)(T - 20.0)$, so $8000 - 100T = 50T - 1000$ and $T = 60.0$ °C. The value 50.0 °C is the simple average, which ignores the different masses; 40.0 °C weights the cool water more heavily; and 70.0 °C would mean the warm water lost less heat than the cool water gained.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Propane burns according to $\\text{C}_3\\text{H}_8(g) + 5\\text{O}_2(g) \\to 3\\text{CO}_2(g) + 4\\text{H}_2\\text{O}(l)$, $\\Delta H = -2220$ kJ. How much heat is released when 11.0 g of propane (44.1 g/mol) burns completely?',
    options: ['50.3 kJ', '554 kJ', '2220 kJ', '24,400 kJ'],
    correctAnswer: 1,
    explanation:
      'There are 11.0/44.1 = 0.249 mol of propane, and each mole releases 2220 kJ, so $(0.249)(2220) = 554$ kJ is released. The value 2220 kJ is the heat for 1 mol, 50.3 kJ divides 2220 by the molar mass, and 24,400 kJ multiplies 2220 by the mass in grams.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'For $\\text{N}_2(g) + \\text{O}_2(g) \\to 2\\text{NO}(g)$, $\\Delta H = +180$ kJ. Which statement about the bonds involved is consistent with this value?',
    options: [
      'More energy is absorbed in breaking the N≡N and O=O bonds than is released in forming the bonds in two NO molecules.',
      'More energy is released in forming the bonds in two NO molecules than is absorbed in breaking the N≡N and O=O bonds of the reactants.',
      'Energy is released when the N≡N and O=O bonds break, and energy is absorbed when the nitrogen–oxygen bonds in the two NO molecules form.',
      'The energy of the bonds broken equals the energy of the bonds formed, so the 180 kJ comes from the motion of the gases.',
    ],
    correctAnswer: 0,
    explanation:
      'A positive ΔH means the reaction absorbs energy overall, which happens when the energy needed to break the reactant bonds exceeds the energy released by forming the product bonds. If bond formation released more, ΔH would be negative. Breaking bonds always absorbs energy and forming bonds always releases it, and an exact balance would make ΔH close to zero.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Equal masses of aluminum (specific heat 0.897 J/(g·°C)) and gold (specific heat 0.129 J/(g·°C)), both starting at 25 °C, each absorb the same quantity of heat. Which statement is correct?',
    options: [
      'The gold warms by about 7 times as many degrees as the aluminum.',
      'The aluminum warms by about 7 times as many degrees as the gold does.',
      'Both metals warm by the same number of degrees, since they absorb equal heat.',
      'The gold warms by about 1.4 times as many degrees as the aluminum.',
    ],
    correctAnswer: 0,
    explanation:
      'From $q = mc\\Delta T$ with equal q and m, $\\Delta T$ is inversely proportional to the specific heat, so gold warms by $0.897/0.129 \\approx 7$ times as many degrees. A larger specific heat means a smaller temperature change for the same heat, so aluminum warms less; equal heat gives equal ΔT only for equal specific heats; and 1.4 does not follow from the ratio of specific heats.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Which process has a negative value of ΔH?',
    options: ['melting ice', 'boiling water', 'subliming dry ice', 'freezing water'],
    correctAnswer: 3,
    explanation:
      'Freezing forms attractions between water molecules as the liquid becomes a solid, so energy is released to the surroundings and ΔH is negative. Melting, boiling and sublimation each overcome intermolecular attractions, so they absorb energy and have positive ΔH values.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'A reaction is carried out in 100.0 g of aqueous solution (specific heat 4.18 J/(g·°C)) in a calorimeter whose own heat capacity is 20.0 J/°C. The temperature rises by 4.00 °C. What is the heat of the reaction, $q_{rxn}$?',
    options: ['−0.0800 kJ', '−1.67 kJ', '−1.75 kJ', '+1.75 kJ'],
    correctAnswer: 2,
    explanation:
      'The solution absorbs $(100.0)(4.18)(4.00) = 1672$ J and the calorimeter absorbs $(20.0)(4.00) = 80$ J, so the surroundings gain 1752 J and $q_{rxn} = -1.75$ kJ. The value −1.67 kJ leaves out the calorimeter, −0.0800 kJ counts only the calorimeter, and +1.75 kJ has the sign of the heat gained by the surroundings rather than that of the reaction.',
  },

  /* ---- U7 Equilibrium (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'What is the equilibrium-constant expression, $K_c$, for $3\\text{Fe}(s) + 4\\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{Fe}_3\\text{O}_4(s) + 4\\text{H}_2(g)$?',
    options: [
      '$K_c = \\dfrac{[\\text{H}_2]^4}{[\\text{H}_2\\text{O}]^4}$',
      '$K_c = \\dfrac{[\\text{H}_2]}{[\\text{H}_2\\text{O}]}$',
      '$K_c = \\dfrac{[\\text{Fe}_3\\text{O}_4][\\text{H}_2]^4}{[\\text{Fe}]^3[\\text{H}_2\\text{O}]^4}$',
      '$K_c = \\dfrac{[\\text{H}_2\\text{O}]^4}{[\\text{H}_2]^4}$',
    ],
    correctAnswer: 0,
    explanation:
      'Pure solids are left out of an equilibrium expression, and each gas concentration is raised to the power of its coefficient, so $K_c = [\\text{H}_2]^4/[\\text{H}_2\\text{O}]^4$. Dropping the exponents gives a different constant, including the solids treats them as if their concentrations could change, and the inverted expression is the constant for the reverse reaction.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g)$ at a high temperature, an equilibrium mixture has $P_{\\text{CO}} = 1.20$ atm and $P_{\\text{CO}_2} = 0.40$ atm. What is the value of $K_p$ at this temperature?',
    options: ['0.28', '1.4', '3.0', '3.6'],
    correctAnswer: 3,
    explanation:
      'With the solid carbon left out, $K_p = \\dfrac{(P_{\\text{CO}})^2}{P_{\\text{CO}_2}} = \\dfrac{(1.20)^2}{0.40} = 3.6$. The value 3.0 forgets to square $P_{\\text{CO}}$, 1.4 is $(1.20)^2$ without dividing by $P_{\\text{CO}_2}$, and 0.28 is the inverted expression.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    stimulus:
      'For the dissolution $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$ at 298 K, $\\Delta H^\\circ = +65.5$ kJ/mol and $\\Delta S^\\circ = +33$ J/(mol·K). The value of $K_{sp}$ for AgCl at 298 K is $1.8 \\times 10^{-10}$.',
    question: 'Which statement best explains why $K_{sp}$ is so small?',
    options: [
      'The large positive $\\Delta H^\\circ$ outweighs $T\\Delta S^\\circ$, so $\\Delta G^\\circ$ for dissolving is large and positive.',
      'The positive $\\Delta S^\\circ$ is the main cause, because dispersing the ions makes $\\Delta G^\\circ$ more positive.',
      'The positive $\\Delta H^\\circ$ and $T\\Delta S^\\circ$ nearly cancel, so $\\Delta G^\\circ$ is close to zero.',
      'The positive $\\Delta H^\\circ$ means dissolving releases heat, which drives the ions back into the solid.',
    ],
    correctAnswer: 0,
    explanation:
      'At 298 K, $\\Delta G^\\circ = 65.5 - (298)(0.033) = +55.7$ kJ/mol, and a large positive $\\Delta G^\\circ$ corresponds to a very small equilibrium constant ($\\Delta G^\\circ = -RT\\ln K$). A positive $\\Delta S^\\circ$ lowers $\\Delta G^\\circ$ rather than raising it; the two terms do not cancel ($T\\Delta S^\\circ$ is only 9.8 kJ/mol), and a $\\Delta G^\\circ$ near zero would give $K_{sp}$ near 1; and a positive $\\Delta H^\\circ$ means dissolving absorbs heat rather than releasing it.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'The $K_{sp}$ of calcium fluoride, $\\text{CaF}_2$, is $3.9 \\times 10^{-11}$ at 25 °C. What is its molar solubility in 0.10 M NaF?',
    options: ['$2.1 \\times 10^{-4}$ M', '$3.9 \\times 10^{-9}$ M', '$3.9 \\times 10^{-10}$ M', '$6.2 \\times 10^{-6}$ M'],
    correctAnswer: 1,
    explanation:
      'With $[\\text{F}^-] \\approx 0.10$ M from the NaF, $K_{sp} = s(0.10)^2$, so $s = 3.9 \\times 10^{-11}/0.010 = 3.9 \\times 10^{-9}$ M. The value $3.9 \\times 10^{-10}$ M forgets to square the fluoride concentration, $2.1 \\times 10^{-4}$ M is the solubility in pure water, $\\sqrt[3]{K_{sp}/4}$, and $6.2 \\times 10^{-6}$ M treats the salt as if $K_{sp} = s^2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'A sealed flask contains $\\text{H}_2(g)$, $\\text{I}_2(g)$ and $\\text{HI}(g)$ at equilibrium. A small amount of the $\\text{I}_2$ is replaced with radioactive $\\text{I}_2$, keeping the total amount of $\\text{I}_2$ the same. After some time, radioactive iodine is found in the HI molecules. What does this observation show?',
    options: [
      'Forward and reverse reactions continue at equal rates although the concentrations do not change.',
      'The equilibrium shifts toward HI, because radioactive iodine reacts faster than ordinary iodine does.',
      'The system was not at equilibrium, because a mixture at equilibrium has stopped reacting entirely.',
      'Radioactive iodine raises the value of K, so more HI forms until the mixture reaches a new state.',
    ],
    correctAnswer: 0,
    explanation:
      'Equilibrium is dynamic: $\\text{I}_2$ keeps reacting to form HI while HI keeps decomposing, at equal rates, so the labeled atoms spread into HI with no change in the overall concentrations. Isotopes of an element react the same way chemically, an equilibrium mixture has not stopped reacting, and K depends only on temperature.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'Solid ammonium chloride decomposes in a sealed container: $\\text{NH}_4\\text{Cl}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{HCl}(g)$, $\\Delta H^\\circ > 0$. Which change, made at equilibrium, increases the mass of $\\text{NH}_4\\text{Cl}(s)$ in the container?',
    options: [
      'adding more $\\text{NH}_3(g)$ at constant temperature',
      'adding more $\\text{NH}_4\\text{Cl}(s)$ at constant temperature',
      'raising the temperature of the container and its contents',
      'removing some of the HCl(g) from the container at constant temperature',
    ],
    correctAnswer: 0,
    explanation:
      'Adding $\\text{NH}_3$, a product, makes Q greater than K, so the reverse reaction forms more solid $\\text{NH}_4\\text{Cl}$ until Q again equals K. Adding the pure solid does not change Q, so it causes no shift beyond the added mass itself; raising the temperature favors the endothermic forward reaction, which uses up solid; and removing HCl also shifts the reaction forward.',
  },

  /* ---- U8 Acids & Bases (8) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: SIX_SOLUTIONS,
    question: 'Which statement about HCl and $\\text{HNO}_2$ is supported by the data?',
    options: [
      '$\\text{HNO}_2$ is only partly ionized, since its $[\\text{H}_3\\text{O}^+]$ is far below 0.10 M.',
      '$\\text{HNO}_2$ is the stronger acid, since it contains more oxygen atoms than HCl.',
      'Both acids are fully ionized, since both solutions have the same concentration.',
      'HCl is only partly ionized, since its pH is greater than zero.',
    ],
    correctAnswer: 0,
    explanation:
      'At pH 2.19, $[\\text{H}_3\\text{O}^+] = 10^{-2.19} = 6.5 \\times 10^{-3}$ M, only about 6.5% of 0.10 M, so $\\text{HNO}_2$ is a weak acid. HCl gives pH 1.00, $[\\text{H}_3\\text{O}^+] = 0.10$ M, so it is fully ionized; a pH of zero would require 1 M $\\text{H}_3\\text{O}^+$. The higher pH of $\\text{HNO}_2$ shows it is the weaker acid, and equal concentrations do not mean equal ionization.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: SIX_SOLUTIONS,
    question: 'Based on the data, what is the value of $K_a$ for $\\text{HNO}_2$?',
    options: ['$2.2 \\times 10^{-11}$', '$4.5 \\times 10^{-4}$', '$6.5 \\times 10^{-3}$', '$6.5 \\times 10^{-2}$'],
    correctAnswer: 1,
    explanation:
      'With $x = [\\text{H}_3\\text{O}^+] = [\\text{NO}_2^-] = 6.5 \\times 10^{-3}$ M, $K_a = \\dfrac{x^2}{0.10 - x} = \\dfrac{4.2 \\times 10^{-5}}{0.0935} = 4.5 \\times 10^{-4}$ (dividing by 0.10 instead gives $4.2 \\times 10^{-4}$, which is still closest to this choice). The value $2.2 \\times 10^{-11}$ is $K_w/K_a$, the $K_b$ of nitrite, $6.5 \\times 10^{-3}$ is $[\\text{H}_3\\text{O}^+]$ itself, and $6.5 \\times 10^{-2}$ is the fraction of the acid that ionizes, $x/0.10$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: SIX_SOLUTIONS,
    question: 'Which equation best accounts for the pH of the $\\text{NaNO}_2$ solution?',
    options: [
      '$\\text{NO}_2^-(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{HNO}_2(aq) + \\text{OH}^-(aq)$',
      '$\\text{Na}^+(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NaOH}(aq) + \\text{H}^+(aq)$',
      '$\\text{HNO}_2(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NO}_2^-(aq) + \\text{H}_3\\text{O}^+(aq)$',
      '$\\text{NaNO}_2(s) \\to \\text{Na}^+(aq) + \\text{NO}_2^-(aq)$',
    ],
    correctAnswer: 0,
    explanation:
      'The solution is basic (pH 8.17) because nitrite, the conjugate base of the weak acid $\\text{HNO}_2$, accepts a proton from water and produces $\\text{OH}^-$. $\\text{Na}^+$ does not react with water (NaOH is a strong base and would stay dissociated), the ionization of $\\text{HNO}_2$ produces $\\text{H}_3\\text{O}^+$ and would make the solution acidic, and the dissolution equation produces no $\\text{OH}^-$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: SIX_SOLUTIONS,
    question: 'Equal volumes of the 0.10 M $\\text{NH}_3$ solution and the 0.10 M $\\text{NH}_4\\text{Cl}$ solution are mixed. What is the pH of the mixture? ($K_b$ of $\\text{NH}_3 = 1.8 \\times 10^{-5}$)',
    options: ['4.74', '7.00', '8.13', '9.26'],
    correctAnswer: 3,
    explanation:
      'The mixture is a buffer with $[\\text{NH}_3] = [\\text{NH}_4^+]$, so pH = p$K_a$ of $\\text{NH}_4^+$ = 14.00 − p$K_b$ = 14.00 − 4.74 = 9.26. The value 4.74 is the p$K_b$ (it gives the pOH), 8.13 averages the pH values of the two separate solutions, and 7.00 assumes that equal amounts of an acid and a base always give a neutral solution.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'Which buffer can neutralize the largest amount of added strong acid before its pH changes sharply? (Each buffer has a volume of 1.0 L and uses the same weak acid, HA, and its conjugate base, $\\text{A}^-$.)',
    options: [
      '0.10 M HA and 0.50 M $\\text{A}^-$',
      '0.50 M HA and 0.10 M $\\text{A}^-$',
      '0.30 M HA and 0.30 M $\\text{A}^-$',
      '0.050 M HA and 0.050 M $\\text{A}^-$',
    ],
    correctAnswer: 0,
    explanation:
      'Added $\\text{H}_3\\text{O}^+$ is consumed by the conjugate base, $\\text{A}^- + \\text{H}_3\\text{O}^+ \\to \\text{HA} + \\text{H}_2\\text{O}$, so the buffer with the most $\\text{A}^-$ (0.50 mol) can absorb the most acid. A buffer with equal amounts of HA and $\\text{A}^-$ resists acid and base equally, but here 0.30 mol of $\\text{A}^-$ is less than 0.50 mol; the buffer with 0.10 M $\\text{A}^-$ resists added base better than added acid; and the most dilute buffer has the least capacity.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'A 0.20 M solution of a weak base, B, has a pH of 11.00 at 25 °C. What is the value of $K_b$ for B?',
    options: ['$1.0 \\times 10^{-6}$', '$5.0 \\times 10^{-6}$', '$1.0 \\times 10^{-3}$', '$5.0 \\times 10^{-3}$'],
    correctAnswer: 1,
    explanation:
      'pOH = 14.00 − 11.00 = 3.00, so $[\\text{OH}^-] = [\\text{BH}^+] = 1.0 \\times 10^{-3}$ M, and $K_b = \\dfrac{(1.0 \\times 10^{-3})^2}{0.20 - 0.0010} = 5.0 \\times 10^{-6}$. The value $1.0 \\times 10^{-6}$ forgets to divide by the base concentration, $1.0 \\times 10^{-3}$ is $[\\text{OH}^-]$ itself, and $5.0 \\times 10^{-3}$ divides $[\\text{OH}^-]$ by 0.20 without squaring it.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'Using the $K_a$ values HF = $6.8 \\times 10^{-4}$, $\\text{CH}_3\\text{COOH}$ = $1.8 \\times 10^{-5}$ and HCN = $6.2 \\times 10^{-10}$, which reaction has an equilibrium constant greater than 1?',
    options: [
      '$\\text{HF} + \\text{CH}_3\\text{COO}^- \\rightleftharpoons \\text{F}^- + \\text{CH}_3\\text{COOH}$',
      '$\\text{HCN} + \\text{F}^- \\rightleftharpoons \\text{CN}^- + \\text{HF}$',
      '$\\text{CH}_3\\text{COOH} + \\text{F}^- \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{HF}$',
      '$\\text{HCN} + \\text{CH}_3\\text{COO}^- \\rightleftharpoons \\text{CN}^- + \\text{CH}_3\\text{COOH}$',
    ],
    correctAnswer: 0,
    explanation:
      'An acid–base reaction favors the side with the weaker acid. In the first reaction the stronger acid, HF, gives its proton to acetate, forming the weaker acid $\\text{CH}_3\\text{COOH}$; $K = K_a(\\text{HF})/K_a(\\text{CH}_3\\text{COOH}) = 38$. Each of the other reactions turns a weaker acid into a stronger one, so its K is less than 1 (about $9 \\times 10^{-7}$, 0.026 and $3 \\times 10^{-5}$).',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'Phosphoric acid, $\\text{H}_3\\text{PO}_4$, has $K_{a1} = 7.5 \\times 10^{-3}$, $K_{a2} = 6.2 \\times 10^{-8}$ and $K_{a3} = 4.8 \\times 10^{-13}$. When it is titrated with NaOH, the titration curve shows two sharp equivalence points rather than three. Which statement best explains this?',
    options: [
      '$\\text{HPO}_4^{2-}$ is so weak an acid that its reaction with $\\text{OH}^-$ produces no sharp rise in pH.',
      '$\\text{H}_3\\text{PO}_4$ has only two hydrogen atoms that are bonded in a way that lets them ionize.',
      'The second and third protons are removed together, so their two equivalence points overlap.',
      'The $\\text{PO}_4^{3-}$ ions precipitate with $\\text{Na}^+$ ions before the third equivalence point.',
    ],
    correctAnswer: 0,
    explanation:
      'With $K_{a3} = 4.8 \\times 10^{-13}$, $\\text{HPO}_4^{2-}$ is an extremely weak acid; by the time it would react, the solution is already strongly basic, so added $\\text{OH}^-$ changes the pH only gradually and no sharp jump appears. All three H atoms in $\\text{H}_3\\text{PO}_4$ are bonded to O and can ionize; the second and third ionizations differ by a factor of about $10^5$, so they do not overlap; and sodium phosphate is soluble.',
  },

  /* ---- U9 Applications of Thermodynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus: FOUR_REACTIONS,
    question: 'Which reaction is thermodynamically favorable at 298 K but would be expected to proceed most slowly at 298 K?',
    options: ['reaction W', 'reaction X', 'reaction Y', 'reaction Z'],
    correctAnswer: 0,
    explanation:
      'Only W and X have $\\Delta G^\\circ < 0$, so only they are thermodynamically favorable, and of the two W has the much larger activation energy (190 kJ/mol), so far fewer collisions have enough energy to react and it is slowest. X is favorable but has a low barrier, and Y and Z have positive values of $\\Delta G^\\circ$, so they are not favorable under standard conditions.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus: FOUR_REACTIONS,
    question: 'For which reaction is the equilibrium constant closest to 1 at 298 K?',
    options: ['reaction W', 'reaction X', 'reaction Y', 'reaction Z'],
    correctAnswer: 2,
    explanation:
      'Because $\\Delta G^\\circ = -RT\\ln K$, a $\\Delta G^\\circ$ near zero gives $\\ln K$ near zero and K near 1; for Y, $K = e^{-2000/(8.314 \\times 298)} \\approx 0.45$. W and X have large negative values of $\\Delta G^\\circ$ (K much greater than 1), and Z has a large positive value (K much less than 1). The activation energy does not affect K.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus: FOUR_REACTIONS,
    question: 'A catalyst lowers the activation energy of reaction Z to 45 kJ/mol. Which statement is correct?',
    options: [
      'Reaction Z becomes faster, but K stays less than 1, because $\\Delta G^\\circ$ is unchanged.',
      'Reaction Z becomes faster, and K becomes greater than 1, because products form more easily.',
      'Reaction Z becomes thermodynamically favorable, because $E_a$ is now less than $\\Delta G^\\circ$.',
      'Reaction Z is unchanged, because a catalyst cannot affect a reaction that has $\\Delta G^\\circ > 0$.',
    ],
    correctAnswer: 0,
    explanation:
      'A catalyst speeds up the forward and reverse reactions equally by lowering the activation energy, but it does not change the energies of the reactants or products, so $\\Delta G^\\circ$ and K are unchanged and K stays far below 1. Comparing $E_a$ with $\\Delta G^\\circ$ says nothing about favorability, and a catalyst still speeds up a reaction whose equilibrium lies toward the reactants.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus:
      'A galvanic cell is made from an iron electrode in 1.0 M $\\text{Fe}^{2+}(aq)$ and a silver electrode in 1.0 M $\\text{Ag}^+(aq)$, joined by a wire and a salt bridge.\n\n| Half-reaction | $E^\\circ$ (V) |\n|---|---|\n| $\\text{Ag}^+(aq) + e^- \\to \\text{Ag}(s)$ | +0.80 |\n| $\\text{Fe}^{2+}(aq) + 2e^- \\to \\text{Fe}(s)$ | −0.44 |',
    question: 'Which statement about the operating cell is correct?',
    options: [
      '$E^\\circ_{cell} = +1.24$ V, and the iron electrode loses mass.',
      '$E^\\circ_{cell} = +1.24$ V, and the silver electrode loses mass.',
      '$E^\\circ_{cell} = +0.36$ V, and the iron electrode loses mass.',
      '$E^\\circ_{cell} = +2.04$ V, and the iron electrode loses mass.',
    ],
    correctAnswer: 0,
    explanation:
      '$\\text{Ag}^+$ has the more positive reduction potential, so it is reduced at the cathode while iron is oxidized at the anode, and $E^\\circ_{cell} = 0.80 - (-0.44) = +1.24$ V. Iron atoms leave the anode as $\\text{Fe}^{2+}$, so the iron electrode loses mass while silver plates onto the cathode. The value +0.36 V adds the two reduction potentials, and +2.04 V wrongly doubles the silver potential because two $\\text{Ag}^+$ ions react, but E° does not depend on the coefficients.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'For which process is $\\Delta S^\\circ$ negative?',
    options: [
      '$\\text{CH}_4(g) + 2\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$',
      '$\\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{O}(g)$',
      '$\\text{NaCl}(s) \\to \\text{Na}^+(aq) + \\text{Cl}^-(aq)$',
      '$\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$',
    ],
    correctAnswer: 0,
    explanation:
      'Burning methane turns 3 mol of gas into 1 mol of gas and 2 mol of liquid, so the matter becomes much less dispersed and $\\Delta S^\\circ < 0$. Vaporizing water and decomposing $\\text{CaCO}_3$ each produce a gas from a liquid or solid, and dissolving NaCl spreads ions that were fixed in a lattice through the solution, so all three have $\\Delta S^\\circ > 0$.',
  },
]
