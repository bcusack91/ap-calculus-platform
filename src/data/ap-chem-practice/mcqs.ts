import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Chemistry — 60 MCQs across all 9 units, matching the real exam's Section I.
 * Distribution mirrors the CED unit weighting:
 *   U1 Atomic Structure & Properties               (5)   7–9%
 *   U2 Compound Structure & Properties             (6)   7–9%
 *   U3 Intermolecular Forces & Properties          (13)  18–22%
 *   U4 Chemical Reactions                          (6)   7–9%
 *   U5 Kinetics                                    (5)   7–9%
 *   U6 Thermodynamics                              (5)   7–9%
 *   U7 Equilibrium                                 (6)   7–9%
 *   U8 Acids & Bases                               (9)   11–15%
 *   U9 Applications of Thermodynamics              (5)   7–9%
 *
 * Calculator allowed throughout (per CB rules for AP Chem).
 */

const GAS_N2_O2 =
  'A rigid 10.0 L container holds 0.60 mol of $\\text{N}_2(g)$ and 0.20 mol of $\\text{O}_2(g)$ at 27°C. Use $R = 0.0821$ L·atm/(mol·K).'

const BEER_DYE =
  'A student prepares standard solutions of a colored dye and measures their absorbance at the same wavelength in the same 1.00 cm cuvette.\n\n| Concentration (M) | 0.010 | 0.020 | 0.030 | 0.040 |\n|---|---|---|---|---|\n| Absorbance | 0.20 | 0.40 | 0.60 | 0.80 |\n\nThe student then measures a solution of the same dye whose concentration is unknown.'

const ACETATE_BUFFER =
  'A buffer solution contains 0.20 M acetic acid, $\\text{CH}_3\\text{COOH}$ ($\\text{p}K_a = 4.74$), and 0.20 M sodium acetate, $\\text{NaCH}_3\\text{COO}$.'

const HA_TITRATION =
  'A 30.0 mL sample of 0.10 M weak monoprotic acid HA is titrated with 0.10 M NaOH. The equivalence point is reached after 30.0 mL of NaOH has been added. After 15.0 mL of NaOH has been added, the pH is 4.20.'

const ZN_CU_CELL =
  'A galvanic cell is built from a zinc electrode in 1.0 M $\\text{Zn}^{2+}(aq)$ and a copper electrode in 1.0 M $\\text{Cu}^{2+}(aq)$.\n\n| Half-reaction | $E°$ (V) |\n|---|---|\n| $\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$ | +0.34 |\n| $\\text{Zn}^{2+}(aq) + 2e^- \\to \\text{Zn}(s)$ | −0.76 |'

export const MCQS: MCQItem[] = [
  /* ---- U1 Atomic Structure & Properties (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Which of the following atoms has the largest atomic radius?',
    options: ['Na', 'K', 'Mg', 'Cl'],
    correctAnswer: 1,
    explanation: 'Atomic radius increases down a group, because valence electrons occupy a higher shell, and decreases across a period as nuclear charge grows. K is in period 4, below Na, so it is the largest. Na is the largest of the period-3 atoms listed, but its valence electron is in the third shell rather than the fourth.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'The photoelectron spectrum of an element has four peaks. The peaks at 126, 9.07, and 0.74 MJ/mol have equal heights, and the peak at 5.31 MJ/mol is three times as tall as each of them. The element is most likely',
    options: ['Sodium (Na)', 'Magnesium (Mg)', 'Aluminum (Al)', 'Chlorine (Cl)'],
    correctAnswer: 1,
    explanation: 'The peaks correspond to 1s (126), 2s (9.07), 2p (5.31), and 3s (0.74). The 2p peak is three times as tall, so it holds 6 electrons, and the equal 1s, 2s, and 3s peaks hold 2 each: $1s^{2}2s^{2}2p^{6}3s^{2}$, which is Mg. Sodium would show a 3s peak only half as tall as the 1s and 2s peaks, since it has a single 3s electron.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Which electron configuration is correct for the ground state of $\\text{Fe}^{3+}$ (atomic number 26)?',
    options: [
      '$[\\text{Ar}]3d^5$',
      '$[\\text{Ar}]3d^6 4s^0$',
      '$[\\text{Ar}]4s^2 3d^3$',
      '$[\\text{Ar}]4s^1 3d^4$',
    ],
    correctAnswer: 0,
    explanation: 'Neutral Fe is $[\\text{Ar}]3d^6 4s^2$, and when a transition metal forms a cation the 4s electrons are removed first. Removing both 4s electrons and then one 3d electron gives $[\\text{Ar}]3d^5$. The configuration $[\\text{Ar}]4s^2 3d^3$ removes all three electrons from the 3d subshell, which is the reverse of the observed order.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Which of the following atoms has the highest first ionization energy?',
    options: ['Na', 'Mg', 'Al', 'Si'],
    correctAnswer: 3,
    explanation: 'First ionization energy generally increases across a period as effective nuclear charge increases, so Si, the farthest right, is highest. Mg is higher than Al because Al loses a 3p electron that is shielded by the filled 3s subshell, but Mg is still below Si.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'The mass spectrum of an element shows two peaks: 78% at mass 24 and 22% at mass 25. The average atomic mass is closest to',
    options: ['24.0 amu', '24.2 amu', '24.5 amu', '25.0 amu'],
    correctAnswer: 1,
    explanation: 'The average is weighted by abundance: $0.78(24)+0.22(25)=18.72+5.50=24.22$ amu. The value 24.5 is the simple average of the two masses, which ignores that mass 24 is far more abundant.',
  },

  /* ---- U2 Compound Structure & Properties (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'The molecular geometry of $\\text{SF}_4$ is',
    options: ['tetrahedral', 'square planar', 'seesaw', 'trigonal bipyramidal'],
    correctAnswer: 2,
    explanation: 'S in $\\text{SF}_4$ has five electron domains (four bonds and one lone pair), giving a trigonal bipyramidal electron-domain geometry; the lone pair takes an equatorial position, so the molecular shape is seesaw. Trigonal bipyramidal describes the electron domains, not the arrangement of the atoms.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Which of the following bonds has the greatest bond energy?',
    options: ['C–C single bond', 'C=C double bond', 'C≡C triple bond', 'C–H single bond'],
    correctAnswer: 2,
    explanation: 'Bond energy increases with bond order because more shared electron pairs hold the nuclei together more strongly. The C≡C triple bond (about 839 kJ/mol) is the strongest listed; the C–H bond (about 413 kJ/mol) is strong for a single bond but weaker than either multiple bond.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    stimulus: '| Molecule | Carbon–carbon bonds | C–C bond length (pm) |\n|---|---|---|\n| ethane, $\\text{C}_2\\text{H}_6$ | one single bond | 154 |\n| ethene, $\\text{C}_2\\text{H}_4$ | one double bond | 134 |\n| benzene, $\\text{C}_6\\text{H}_6$ | six bonds in a ring, all identical | 140 |',
    question: 'Which statement best explains the carbon–carbon bond length in benzene?',
    options: [
      'Benzene has two equivalent resonance structures, so each C–C bond is intermediate between a single and a double bond.',
      'Benzene has three single and three double bonds that switch places so quickly that their lengths average to 140 pm.',
      'Benzene has six C–C double bonds, and repulsion among its six H atoms stretches each bond beyond 134 pm.',
      'Benzene has six C–C single bonds, and the strain of the ring squeezes each of them to less than 154 pm.',
    ],
    correctAnswer: 0,
    explanation: 'Benzene is described by two equivalent resonance structures with alternating single and double bonds, and the real molecule is a blend of them: each C–C bond has a bond order of 1.5, so its length (140 pm) lies between those of a single bond (154 pm) and a double bond (134 pm). The molecule does not flip back and forth between the two structures, and six double bonds or six single bonds would give lengths near 134 pm or 154 pm rather than an intermediate value.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'In a Lewis structure of $\\text{NO}_3^-$, the formal charge on the central N atom is',
    options: ['$-1$', '$0$', '$+1$', '$+2$'],
    correctAnswer: 2,
    explanation: 'In each resonance structure N forms one double and two single bonds (4 bonding pairs) and has no lone pairs, so its formal charge is $5-0-4=+1$. A value of $-1$ is the overall charge of the ion, which is carried by the single-bonded oxygen atoms, not by N.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Which compound has the smallest lattice energy in magnitude?',
    options: ['NaF', 'NaCl', 'KCl', 'CaO'],
    correctAnswer: 2,
    explanation: 'Coulombic attraction, and so lattice energy, is proportional to $|q_+q_-|/r$. KCl pairs +1 and −1 ions with the largest ion separation of the choices, so it has the smallest lattice energy. CaO has the largest, because its 2+ and 2− charges outweigh any difference in ion size.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    stimulus: 'Brass is made by melting copper and zinc together and cooling the mixture. Copper and zinc atoms have similar atomic radii (128 pm and 134 pm).',
    question: 'Which of the following best describes the structure of brass?',
    options: [
      'A substitutional alloy, in which zinc atoms replace some copper atoms in the lattice',
      'An interstitial alloy, in which zinc atoms fill the small spaces between copper atoms',
      'An ionic solid, in which zinc cations and copper anions alternate throughout the lattice',
      'A covalent network solid, in which copper and zinc share electrons in localized bonds',
    ],
    correctAnswer: 0,
    explanation: 'Atoms of similar size can take each other\'s places in a metallic lattice, forming a substitutional alloy. An interstitial alloy requires a much smaller atom, such as carbon in steel, to fit into the gaps between the larger metal atoms.',
  },

  /* ---- U3 Intermolecular Forces & Properties (13) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Which substance has the highest boiling point?',
    options: ['$\\text{CH}_4$', '$\\text{NH}_3$', '$\\text{H}_2\\text{O}$', '$\\text{HF}$'],
    correctAnswer: 2,
    explanation: 'Water can form up to four hydrogen bonds per molecule (two donors and two acceptors), giving it the most extensive hydrogen-bonding network and the highest boiling point (100°C). HF forms stronger individual hydrogen bonds, but only about two per molecule, so it boils at about 20°C.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: GAS_N2_O2,
    question: 'What is the total pressure of the gas mixture?',
    options: ['0.177 atm', '1.48 atm', '1.97 atm', '19.7 atm'],
    correctAnswer: 2,
    explanation: 'The container holds 0.80 mol of gas in all, and with $T = 300$ K, $P = \\frac{nRT}{V} = \\frac{(0.80)(0.0821)(300)}{10.0} = 1.97$ atm. Using 27 instead of the Kelvin temperature gives 0.177 atm, counting only the $\\text{N}_2$ gives 1.48 atm, and 19.7 atm divides by 1.00 L instead of 10.0 L.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: GAS_N2_O2,
    question: 'What is the partial pressure of $\\text{O}_2$ in the container?',
    options: ['0.49 atm', '0.66 atm', '0.99 atm', '1.48 atm'],
    correctAnswer: 0,
    explanation: 'The mole fraction of $\\text{O}_2$ is $\\frac{0.20}{0.80} = 0.25$, so $P_{\\text{O}_2} = 0.25(1.97\\text{ atm}) = 0.49$ atm. Splitting the pressure equally between the two gases (0.99 atm) ignores that partial pressure is proportional to the number of moles, 0.66 atm divides the moles of $\\text{O}_2$ by the moles of $\\text{N}_2$ instead of the total, and 1.48 atm is the partial pressure of $\\text{N}_2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: GAS_N2_O2,
    question: 'How do the $\\text{N}_2$ molecules (28 g/mol) and the $\\text{O}_2$ molecules (32 g/mol) in the container compare?',
    options: [
      'The average kinetic energies are the same, and the $\\text{N}_2$ molecules have the higher average speed',
      'The $\\text{O}_2$ molecules have the higher average kinetic energy and the lower average speed',
      'The $\\text{N}_2$ molecules have the higher average kinetic energy and the higher average speed',
      'Both gases have the same average speed and the same average kinetic energy',
    ],
    correctAnswer: 0,
    explanation: 'Both gases are at the same temperature, and average kinetic energy depends only on temperature, so the two match. Since $KE=\\frac{1}{2}mv^2$, the lighter $\\text{N}_2$ molecules must move faster on average. Equal temperature means equal kinetic energy, not equal speed, and neither gas has the greater kinetic energy.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'A solution is prepared by dissolving 5.0 g NaOH (40 g/mol) in enough water to make 250 mL of solution. The molarity is',
    options: ['0.020 M', '0.50 M', '0.13 M', '2.0 M'],
    correctAnswer: 1,
    explanation: 'Moles of NaOH are $5.0/40=0.125$ mol, and molarity is $0.125\\text{ mol}/0.250\\text{ L}=0.50$ M. The value 0.020 M divides by 250 instead of converting the volume to liters.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'In a paper chromatography experiment, one dye in a mixture travels nearly as far as the solvent front. Which statement best explains this observation?',
    options: [
      'The dye is attracted more strongly to the stationary phase than the mobile phase',
      'The dye is more strongly attracted to the mobile phase than to the stationary phase',
      'The dye has the largest molar mass of all the components in the mixture',
      'The dye is insoluble in the mobile phase, so the solvent sweeps it along the paper',
    ],
    correctAnswer: 1,
    explanation: 'A large $R_f$ means the dye spends most of its time dissolved in the mobile phase, because its attractions to the solvent outcompete its attractions to the paper. A dye more attracted to the stationary phase would stay near the starting line.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: '| Compound | Formula | Structure | Boiling point |\n|---|---|---|---|\n| n-pentane | $\\text{C}_5\\text{H}_{12}$ | unbranched chain | 36°C |\n| neopentane | $\\text{C}_5\\text{H}_{12}$ | highly branched, nearly spherical | 10°C |',
    question: 'Which of the following best explains the difference in boiling points shown in the table?',
    options: [
      'The unbranched n-pentane molecules have more surface contact, so their London dispersion forces are stronger.',
      'The n-pentane molecules form hydrogen bonds with one another, while neopentane molecules cannot form them.',
      'The n-pentane molecules have a larger molar mass, so their electron clouds are more polarizable overall.',
      'The C–C covalent bonds in n-pentane are stronger, and these bonds must be broken for the liquid to boil.',
    ],
    correctAnswer: 0,
    explanation: 'Both compounds are nonpolar isomers with the same molar mass, so the difference comes from shape: the long n-pentane molecules contact each other over more surface area, giving stronger dispersion forces. Neither compound has H bonded to N, O, or F, so hydrogen bonding is not possible.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: BEER_DYE,
    question: 'The unknown solution has an absorbance of 0.50 under the same conditions. Its concentration is closest to',
    options: ['0.020 M', '0.025 M', '0.030 M', '0.050 M'],
    correctAnswer: 1,
    explanation: 'The data follow Beer\'s law, $A=\\varepsilon bc$, with absorbance rising 0.20 for every 0.010 M, so $A=0.50$ corresponds to 0.025 M. The value 0.050 M treats the absorbance as if it were ten times the concentration, a relationship the standards do not support.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: BEER_DYE,
    question: 'Without noticing, the student leaves a fingerprint smudge that absorbs some light on the cuvette holding the unknown sample. How does the smudge affect the concentration calculated for the unknown?',
    options: [
      'It is too high, because the smudge absorbs light and raises the measured absorbance',
      'It is too low, because less light reaches the solution, so fewer dye particles absorb',
      'It is unchanged, because Beer\'s law depends only on the molar absorptivity of the dye used',
      'It is unchanged, because the smudge does not change how many dye particles are present',
    ],
    correctAnswer: 0,
    explanation: 'The instrument attributes all absorbed light to the sample, so the smudge raises the measured absorbance, and the calibration curve converts that higher absorbance into a higher concentration. The number of dye particles is indeed unchanged, but the calculation uses the measured absorbance, not the true particle count.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'What is the energy of one photon of light with a wavelength of 500. nm? ($h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s)',
    options: ['$3.98 \\times 10^{-19}$ J', '$3.98 \\times 10^{-28}$ J', '$1.99 \\times 10^{-25}$ J', '$6.00 \\times 10^{14}$ J'],
    correctAnswer: 0,
    explanation: 'Using $E=\\frac{hc}{\\lambda}$ with $\\lambda=500.\\times10^{-9}$ m gives $E=\\frac{(6.626\\times10^{-34})(3.00\\times10^{8})}{5.00\\times10^{-7}}=3.98\\times10^{-19}$ J. The value $3.98\\times10^{-28}$ J results from leaving the wavelength in nanometers instead of converting to meters.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Under which conditions does a real gas deviate most from ideal gas behavior?',
    options: [
      'High pressure combined with low temperature, where particle volume and attractions matter',
      'Low pressure and high temperature, where particles move fastest and collide most often',
      'Low pressure and low temperature, where particles are far apart and move slowly',
      'Both high pressure and high temperature, where particles strike the walls most often',
    ],
    correctAnswer: 0,
    explanation: 'The ideal gas model ignores particle volume and intermolecular attractions. At high pressure the particles are close together, so their volume is a significant fraction of the container, and at low temperature they move slowly enough for attractions to matter. At low pressure and high temperature particles are far apart and fast, which is where gases behave most ideally.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: 'An unknown white solid melts at 801°C. It does not conduct electricity as a solid, but it does conduct when melted or dissolved in water. It shatters when struck with a hammer.',
    question: 'The solid is most likely which type of solid?',
    options: ['Ionic', 'Metallic', 'Molecular', 'Covalent network'],
    correctAnswer: 0,
    explanation: 'Ions locked in a lattice cannot carry current, but they become mobile when the solid melts or dissolves; a shifted lattice brings like charges together, so the solid shatters. A covalent network solid also has a very high melting point, but it does not conduct when melted and generally does not dissolve in water.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    stimulus: 'A student distills a mixture of ethanol (boiling point 78°C) and water (boiling point 100°C). The first distillate collected is much richer in ethanol than the original mixture.',
    question: 'Which of the following best explains this observation?',
    options: [
      'Ethanol molecules have weaker intermolecular attractions overall, so ethanol has the higher vapor pressure.',
      'Because ethanol cannot form hydrogen bonds, its molecules leave the liquid before any water does.',
      'Ethanol has a larger molar mass than water, so its molecules move faster and vaporize more readily.',
      'The O–H bond in ethanol is weaker than in water, so ethanol molecules break apart at lower temperature.',
    ],
    correctAnswer: 0,
    explanation: 'Each water molecule can form more hydrogen bonds than an ethanol molecule, so ethanol\'s overall intermolecular attractions are weaker, its vapor pressure is higher, and its vapor is enriched in the first distillate. Ethanol does hydrogen bond through its O–H group, just less extensively than water.',
  },

  /* ---- U4 Chemical Reactions (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'How many grams of $\\text{O}_2$ are produced from complete decomposition of 200. g of $\\text{KClO}_3$ via $2\\text{KClO}_3 \\to 2\\text{KCl} + 3\\text{O}_2$? (Molar masses: $\\text{KClO}_3$ = 122.5 g/mol; $\\text{O}_2$ = 32.0 g/mol)',
    options: ['39.2 g', '78.4 g', '52.2 g', '118 g'],
    correctAnswer: 1,
    explanation: 'Moles of $\\text{KClO}_3$ are $200./122.5=1.633$, which give $\\frac{3}{2}(1.633)=2.449$ mol $\\text{O}_2$, or $2.449\\times32.0=78.4$ g. Using a 1:1 mole ratio instead of 3:2 gives 52.2 g.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'In the reaction $\\text{Zn}(s) + 2\\text{HCl}(aq) \\to \\text{ZnCl}_2(aq) + \\text{H}_2(g)$, the species oxidized is',
    options: ['$\\text{Zn}(s)$', '$\\text{H}^+(aq)$', '$\\text{Cl}^-(aq)$', '$\\text{H}_2(g)$'],
    correctAnswer: 0,
    explanation: 'Zn goes from oxidation state 0 to +2, losing two electrons, so it is oxidized. $\\text{H}^+$ goes from +1 to 0, gaining electrons, so it is the species reduced, not the species oxidized.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'Equal volumes of 0.10 M aqueous solutions are mixed in each pair below. Which mixture forms a precipitate?',
    options: [
      'NaCl and $\\text{KNO}_3$',
      '$\\text{Pb(NO}_3\\text{)}_2$ and KI',
      '$(\\text{NH}_4)_2\\text{SO}_4$ and $\\text{KNO}_3$',
      '$\\text{NH}_4\\text{Cl}$ and $\\text{NaNO}_3$',
    ],
    correctAnswer: 1,
    explanation: 'All sodium, potassium, ammonium, and nitrate salts are soluble, so in the other pairs every possible product stays dissolved. Only lead(II) nitrate and potassium iodide can form a product outside those groups, $\\text{PbI}_2$, which precipitates as a yellow solid.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'When $25.0$ mL of $0.10$ M HCl is mixed with $25.0$ mL of $0.10$ M NaOH, the resulting solution is',
    options: ['acidic', 'basic', 'neutral', 'a buffer'],
    correctAnswer: 2,
    explanation: 'Equal moles of a strong acid and a strong base react completely, leaving only water and NaCl, whose ions do not react with water, so the solution is neutral. It is not a buffer, because no weak acid or weak base and its conjugate remain.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'Aqueous $\\text{AgNO}_3$ is mixed with aqueous $\\text{NaCl}$, forming a white precipitate. Which is the correct net ionic equation?',
    options: [
      '$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s)$',
      '$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) \\to \\text{AgNO}_3(s)$',
      '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\to \\text{NaNO}_3(s)$',
      '$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\to \\text{AgCl}(s) + \\text{NaNO}_3(aq)$',
    ],
    correctAnswer: 0,
    explanation: 'AgCl is the insoluble product, and $\\text{Na}^+$ and $\\text{NO}_3^-$ are spectator ions, so the net ionic equation shows only $\\text{Ag}^+$ and $\\text{Cl}^-$ forming the solid. The equation with full formulas for every compound is the molecular equation, which still includes the spectator ions.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    stimulus: 'A 25.00 mL sample of HCl(aq) of unknown concentration is titrated with 0.100 M NaOH(aq) using phenolphthalein as the indicator. The solution first stays pink after 20.00 mL of NaOH has been added.',
    question: 'What is the concentration of the HCl solution?',
    options: ['0.0800 M', '0.125 M', '0.100 M', '0.044 M'],
    correctAnswer: 0,
    explanation: 'Moles of NaOH are $0.100\\times0.02000=2.00\\times10^{-3}$ mol, which equal the moles of HCl in the 1:1 reaction, so $[\\text{HCl}]=\\frac{2.00\\times10^{-3}}{0.02500}=0.0800$ M. Dividing by the total volume of 45.00 mL instead of the 25.00 mL acid sample gives 0.044 M, which underestimates the concentration.',
  },

  /* ---- U5 Kinetics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'For the reaction $A \\to B$, doubling [A] doubles the initial rate. The reaction is',
    options: ['zero order in A', 'first order in A', 'second order in A', 'third order in A'],
    correctAnswer: 1,
    explanation: 'With rate $=k[A]^n$, doubling [A] multiplies the rate by $2^n$, and $2^n=2$ gives $n=1$. A second-order reaction would quadruple its rate when [A] doubles.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'A first-order reaction has rate constant $k = 0.0231$ $\\text{s}^{-1}$. The half-life is',
    options: ['15 s', '30 s', '43 s', '60 s'],
    correctAnswer: 1,
    explanation: 'For a first-order reaction $t_{1/2}=\\frac{\\ln 2}{k}=\\frac{0.693}{0.0231\\text{ s}^{-1}}=30$ s. The value 43 s is $\\frac{1}{k}$, which omits the $\\ln 2$ factor.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'Increasing the temperature speeds up most reactions mainly because',
    options: [
      'the activation energy of the reaction decreases as temperature rises',
      'a larger fraction of collisions have energy equal to or greater than $E_a$',
      'the equilibrium constant becomes larger, which favors forming products',
      'collision frequency rises sharply, which alone accounts for the change',
    ],
    correctAnswer: 1,
    explanation: 'At higher temperature the Maxwell–Boltzmann distribution shifts toward higher energies, so a larger fraction of collisions have enough energy to overcome $E_a$. Collision frequency does rise, but only slightly; it cannot account for the large rate increase on its own.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'A proposed mechanism has two elementary steps: (1) $A + B \\to C$ (slow), (2) $C + B \\to D$ (fast). The rate law consistent with this mechanism is',
    options: ['rate = $k[A]$', 'rate = $k[A][B]$', 'rate = $k[A][B]^2$', 'rate = $k[B]^2$'],
    correctAnswer: 1,
    explanation: 'The slow first step is rate-determining, and for an elementary step the rate law follows from its molecularity: rate $=k[A][B]$. The rate law $k[A][B]^2$ comes from the overall equation, which counts the B used in the fast step after the bottleneck.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'A catalyst increases the rate of a reaction by',
    options: [
      'shifting the equilibrium position toward the products',
      'raising the average kinetic energy of the reactants',
      'providing a pathway with a lower activation energy',
      'increasing the frequency of all reactant collisions',
    ],
    correctAnswer: 2,
    explanation: 'A catalyst supplies an alternative mechanism with a lower activation energy, lowering the barrier for the forward and reverse reactions alike. Because both directions speed up equally, the equilibrium position does not change.',
  },

  /* ---- U6 Thermodynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'A reaction releases 400 kJ of heat to its surroundings at constant pressure. $\\Delta H$ for the reaction is',
    options: ['$+400$ kJ', '$-400$ kJ', '$+200$ kJ', '$-4.00 \\times 10^5$ kJ'],
    correctAnswer: 1,
    explanation: 'Heat released by the system makes the process exothermic, so $\\Delta H=-400$ kJ. The positive value describes the surroundings, which gain the 400 kJ, rather than the reaction system, and $-4.00\\times10^5$ kJ converts kilojoules to joules but keeps the kJ label.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Calculate the heat absorbed when 200. g of water (specific heat 4.18 J/(g·°C)) is heated from 25°C to 50°C.',
    options: ['10.5 kJ', '20.9 kJ', '41.8 kJ', '83.6 kJ'],
    correctAnswer: 1,
    explanation: 'Using $q=mc\\Delta T=(200.)(4.18)(25)=20{,}900$ J, or 20.9 kJ. The value 41.8 kJ uses the final temperature of 50°C in place of the temperature change of 25°C.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'For a reaction with $\\Delta H = -100.$ kJ and $\\Delta S = -200.$ J/K at 298 K, $\\Delta G$ is approximately',
    options: ['$-160$ kJ', '$-40$ kJ', '$+5.95 \\times 10^4$ kJ', '$+160$ kJ'],
    correctAnswer: 1,
    explanation: 'Converting $\\Delta S$ to kJ/K, $\\Delta G=\\Delta H-T\\Delta S=-100-(298)(-0.200)=-100+59.6=-40$ kJ. Getting $-160$ kJ comes from adding $T\\Delta S$ instead of subtracting it, and $+5.95\\times10^4$ kJ comes from leaving $\\Delta S$ in J/K.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Hess\'s law allows the enthalpy change of an overall reaction to be found by adding the enthalpy changes of other reactions. This works because enthalpy change',
    options: [
      'depends only on the initial and final states of the system',
      'depends on the specific intermediate steps that are used',
      'is always equal in magnitude to the activation energy',
      'is the same for every reaction at standard conditions',
    ],
    correctAnswer: 0,
    explanation: '$\\Delta H$ depends only on the initial reactants and final products, and any sequence of steps connecting them gives the same total. If $\\Delta H$ depended on the intermediate steps, adding the steps of a different path could not give the overall value.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'The sign of the standard entropy change for $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l)$ is best described as',
    options: ['strongly positive', 'slightly positive', 'strongly negative', 'close to zero'],
    correctAnswer: 2,
    explanation: 'Three moles of gas become two moles of liquid, so the particles become far more constrained and the entropy decreases sharply. A positive value would require an increase in moles of gas or a change toward a less ordered phase.',
  },

  /* ---- U7 Equilibrium (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For the reaction $A(aq) + B(aq) \\rightleftharpoons C(aq)$, $K = 4$. At equilibrium, $[A] = [B] = 1$ M. Then $[C]$ equals',
    options: ['0.25 M', '1.0 M', '4 M', '16 M'],
    correctAnswer: 2,
    explanation: 'Since $K=\\frac{[C]}{[A][B]}$, $[C]=K[A][B]=4(1)(1)=4$ M. The value 0.25 M comes from inverting the expression and putting the product in the denominator.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta H < 0$. Increasing the temperature of the equilibrium mixture will',
    options: [
      'shift it to the right, making more $\\text{NH}_3$',
      'shift it to the left, producing less $\\text{NH}_3$',
      'leave it unchanged, because $K$ does not change',
      'leave it unchanged, because only rates change',
    ],
    correctAnswer: 1,
    explanation: 'The forward reaction is exothermic, so heat acts as a product; raising the temperature favors the endothermic reverse reaction and lowers $K$, shifting the mixture left. Temperature is the one stress that changes the value of $K$ itself.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For the reaction $A(g) \\rightleftharpoons B(g) + C(g)$ at equilibrium, decreasing the volume at constant temperature will',
    options: [
      'shift the equilibrium to the right',
      'shift the equilibrium to the left',
      'have no effect on the equilibrium',
      'increase the value of the constant $K$',
    ],
    correctAnswer: 1,
    explanation: 'Decreasing the volume raises the pressure, and the system responds by shifting toward the side with fewer moles of gas: 1 mole on the left versus 2 on the right, so it shifts left. $K$ depends only on temperature, so it is unchanged.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'A reaction has $K = 1 \\times 10^{-5}$ at 25°C. Which statement describes the equilibrium mixture?',
    options: [
      'Reactants are strongly favored.',
      'Products are strongly favored.',
      'Reactant and product amounts are about equal.',
      'The reaction goes essentially to completion.',
    ],
    correctAnswer: 0,
    explanation: 'Because $K\\ll1$, the product concentrations in the equilibrium expression are much smaller than the reactant concentrations, so reactants are strongly favored. Roughly equal amounts would correspond to $K$ near 1.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$, $K_{sp} = 1.8 \\times 10^{-10}$. The molar solubility of AgCl in pure water is approximately',
    options: ['$1.8 \\times 10^{-10}$ M', '$1.3 \\times 10^{-5}$ M', '$9.0 \\times 10^{-11}$ M', '$6.7 \\times 10^{-6}$ M'],
    correctAnswer: 1,
    explanation: 'Each mole of AgCl that dissolves gives $s$ mol of each ion, so $K_{sp}=s^2$ and $s=\\sqrt{1.8\\times10^{-10}}\\approx1.3\\times10^{-5}$ M. Taking $K_{sp}$ itself as the solubility skips the square root.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    stimulus: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, $K_c = 50.$ at a certain temperature. A mixture at that temperature initially contains $[\\text{H}_2] = 0.10$ M, $[\\text{I}_2] = 0.10$ M, and $[\\text{HI}] = 1.0$ M.',
    question: 'Which of the following correctly describes how the mixture will change as it approaches equilibrium?',
    options: [
      '$Q = 100$, so the mixture shifts left and HI decreases',
      '$Q = 100$, so the mixture shifts right and HI grows',
      '$Q = 10$, so the mixture shifts right and HI grows',
      '$Q = 0.01$, so the mixture shifts right and HI grows',
    ],
    correctAnswer: 0,
    explanation: '$Q=\\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]}=\\frac{(1.0)^2}{(0.10)(0.10)}=100$, which is greater than $K_c=50$, so the reaction runs in reverse and HI decreases. A value of 10 comes from forgetting to square [HI] in the expression.',
  },

  /* ---- U8 Acids & Bases (9) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'The pH of 0.010 M HCl is',
    options: ['1.00', '2.00', '12.00', '-2.00'],
    correctAnswer: 1,
    explanation: 'HCl is a strong acid, so $[\\text{H}_3\\text{O}^+]=0.010=10^{-2}$ M and pH $=2.00$. The value 12.00 is the pH of a 0.010 M strong base, which results from treating $10^{-2}$ M as the hydroxide concentration; $-2.00$ is $\\log(0.010)$ without the negative sign in the pH definition.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'A weak acid HA has $K_a = 1.0 \\times 10^{-5}$. The pH of 0.10 M HA is approximately',
    options: ['1.0', '3.0', '5.0', '6.0'],
    correctAnswer: 1,
    explanation: 'For a weak acid $[\\text{H}^+]\\approx\\sqrt{K_aC}=\\sqrt{(1.0\\times10^{-5})(0.10)}=10^{-3}$ M, so pH $\\approx3.0$. A pH of 1.0 treats HA as a strong acid that ionizes completely.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: ACETATE_BUFFER,
    question: 'What is the pH of the buffer?',
    options: ['3.74', '4.74', '5.74', '7.00'],
    correctAnswer: 1,
    explanation: 'Henderson–Hasselbalch gives pH $=\\text{p}K_a+\\log\\frac{[\\text{A}^-]}{[\\text{HA}]}=4.74+\\log(1)=4.74$. A pH of 7.00 assumes equal concentrations of acid and base make the solution neutral, but the acid here is weak with its own $\\text{p}K_a$, and 3.74 and 5.74 would require a tenfold excess of the acid or the base.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: ACETATE_BUFFER,
    question: 'A small amount of HCl(aq) is added to the buffer. Which equation represents the reaction that keeps the pH nearly constant?',
    options: [
      '$\\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+ \\to \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}$',
      '$\\text{CH}_3\\text{COOH} + \\text{OH}^- \\to \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$',
      '$\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\to \\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+$',
      '$\\text{H}_3\\text{O}^+ + \\text{OH}^- \\to 2\\text{H}_2\\text{O}$',
    ],
    correctAnswer: 0,
    explanation: 'The added $\\text{H}_3\\text{O}^+$ is consumed by the conjugate base, acetate, converting it to the weak acid, so few free hydronium ions remain. The reaction of acetic acid with $\\text{OH}^-$ is how the buffer responds to added base, and the ionization of acetic acid would add more hydronium rather than remove it.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: ACETATE_BUFFER,
    question: 'Which statement explains why this buffer resists added acid and added base about equally well?',
    options: [
      'It holds equal amounts of the weak acid and acetate ion, so it consumes added acid or base equally.',
      'It contains equal amounts of an acid and a base, so its pH is 7 and the two neutralize each other.',
      'Its pH is one unit above the $\\text{p}K_a$, so it holds an extra reserve of base to react with added acid.',
      'It is at the equivalence point of a titration of acetic acid with sodium hydroxide.',
    ],
    correctAnswer: 0,
    explanation: 'With equal concentrations of acetic acid and acetate, pH $=\\text{p}K_a = 4.74$, and the buffer holds equal reserves of the weak acid (which consumes added $\\text{OH}^-$) and its conjugate base (which consumes added $\\text{H}_3\\text{O}^+$). Equal amounts of a weak acid and its conjugate base do not give pH 7; a pH one unit above the $\\text{p}K_a$ would mean ten times as much base as acid, so the buffer would resist added base poorly; and at the equivalence point essentially no weak acid remains.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: HA_TITRATION,
    question: 'What is the value of $K_a$ for HA?',
    options: ['$6.3 \\times 10^{-5}$', '$1.6 \\times 10^{-10}$', '$4.0 \\times 10^{-8}$', '$1.0 \\times 10^{-7}$'],
    correctAnswer: 0,
    explanation: 'After 15.0 mL, half the acid has been converted to $\\text{A}^-$, so $[\\text{HA}]=[\\text{A}^-]$ and pH $=\\text{p}K_a=4.20$; then $K_a=10^{-4.20}=6.3\\times10^{-5}$. The value $1.6\\times10^{-10}$ is $K_b$ of the conjugate base, $\\frac{K_w}{K_a}$; $4.0\\times10^{-8}$ treats the half-equivalence solution as if it were 0.10 M HA alone ($[\\text{H}^+]^2/0.10$); and $1.0\\times10^{-7}$ is the $[\\text{H}^+]$ of pure water.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: HA_TITRATION,
    question: 'At the equivalence point of this titration, the pH is',
    options: ['less than 7', 'equal to 7', 'greater than 7', 'equal to 4.20'],
    correctAnswer: 2,
    explanation: 'At equivalence the solution contains $\\text{A}^-$, the conjugate base of the weak acid, which reacts with water to produce $\\text{OH}^-$, so pH $>7$. The pH equals the $\\text{p}K_a$ (4.20) at the half-equivalence point, after 15.0 mL, not at equivalence, and a pH of exactly 7 would require that neither product ion react with water, as in a strong acid–strong base titration.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    stimulus: HA_TITRATION,
    question: 'At one point during the titration the pH is 6.20. How do the concentrations of HA and $\\text{A}^-$ compare at that point?',
    options: [
      '$[\\text{A}^-]$ is about 100 times $[\\text{HA}]$',
      '$[\\text{HA}]$ is about 100 times $[\\text{A}^-]$',
      '$[\\text{A}^-]$ is about 2 times $[\\text{HA}]$',
      '$[\\text{HA}]$ and $[\\text{A}^-]$ are about equal',
    ],
    correctAnswer: 0,
    explanation: 'The half-equivalence pH gives $\\text{p}K_a = 4.20$, and from pH $=\\text{p}K_a+\\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$, $\\log\\frac{[\\text{A}^-]}{[\\text{HA}]}=6.20-4.20=2$, so the base form is about $10^2=100$ times more concentrated. When the pH is above the $\\text{p}K_a$ the deprotonated form predominates; a factor of 2 mistakes the logarithmic difference for a linear one.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'What is the pH of a 0.0010 M solution of the strong base $\\text{Ba(OH)}_2$ at 25°C?',
    options: ['11.30', '11.00', '2.70', '3.00'],
    correctAnswer: 0,
    explanation: 'Each formula unit releases two hydroxide ions, so $[\\text{OH}^-]=0.0020$ M, pOH $=2.70$, and pH $=14.00-2.70=11.30$. The value 11.00 ignores the second hydroxide ion, and 2.70 is the pOH rather than the pH.',
  },

  /* ---- U9 Applications of Thermodynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'A reaction is thermodynamically favorable at all temperatures when',
    options: [
      '$\\Delta H < 0$ and $\\Delta S > 0$',
      '$\\Delta H > 0$ and $\\Delta S < 0$',
      '$\\Delta H < 0$ and $\\Delta S < 0$',
      '$\\Delta H > 0$ and $\\Delta S > 0$',
    ],
    correctAnswer: 0,
    explanation: 'With $\\Delta G=\\Delta H-T\\Delta S$, a negative $\\Delta H$ and positive $\\Delta S$ make both terms negative, so $\\Delta G<0$ at every temperature. When both are negative, the reaction is favorable only at low temperature, where the $T\\Delta S$ term is small.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus: ZN_CU_CELL,
    question: 'The standard cell potential for the cell reaction $\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}$ is',
    options: ['$+0.42$ V', '$+1.10$ V', '$-1.10$ V', '$-0.42$ V'],
    correctAnswer: 1,
    explanation: 'Cu is reduced at the cathode and Zn oxidized at the anode, so $E°_{cell}=E°_{cathode}-E°_{anode}=0.34-(-0.76)=+1.10$ V. The value $+0.42$ V adds the two reduction potentials without reversing the sign for the oxidation half-reaction.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    stimulus: ZN_CU_CELL,
    question: 'Using the standard cell potential, $\\Delta G°$ for the cell reaction equals (use $F = 96{,}485$ C/mol)',
    options: ['$-2.12 \\times 10^5$ J', '$-1.06 \\times 10^5$ J', '$+1.06 \\times 10^5$ J', '$+2.12 \\times 10^5$ J'],
    correctAnswer: 0,
    explanation: 'From the table, $E°_{cell} = 0.34 - (-0.76) = +1.10$ V, and two electrons are transferred ($n = 2$), so $\\Delta G°=-nFE°=-(2)(96{,}485)(1.10)\\approx-2.12\\times10^5$ J; the negative sign matches a positive cell potential and a thermodynamically favorable cell. Leaving out $n=2$ gives $-1.06\\times10^5$ J.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'Electrolysis of molten NaCl produces which products?',
    options: [
      '$\\text{Na}(l)$ at the cathode and $\\text{Cl}_2(g)$ at the anode',
      '$\\text{Cl}_2(g)$ at the cathode and $\\text{Na}(l)$ at the anode',
      '$\\text{H}_2(g)$ at the cathode and $\\text{Cl}_2(g)$ at the anode',
      '$\\text{Na}(l)$ at the cathode and $\\text{O}_2(g)$ at the anode',
    ],
    correctAnswer: 0,
    explanation: 'In molten NaCl the only ions are $\\text{Na}^+$, which is reduced to sodium metal at the cathode, and $\\text{Cl}^-$, which is oxidized to chlorine gas at the anode. Hydrogen gas forms at the cathode only in aqueous NaCl, where water can be reduced.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'For a reaction mixture that is at equilibrium, $\\Delta G$ equals',
    options: ['$0$', '$-RT \\ln K$', '$\\Delta H$', '$-T\\Delta S$'],
    correctAnswer: 0,
    explanation: 'At equilibrium there is no further net driving force in either direction, so $\\Delta G=0$. The expression $-RT\\ln K$ equals $\\Delta G°$, the standard free energy change, which is generally not zero.',
  },
]
