/**
 * MCAT Chem/Phys discrete (standalone, no passage) questions — wave 2.
 *
 * Agent-authored and reviewed: every item passed a blind re-solve on shuffled
 * options and an independent fact check (all findings applied), so no item
 * carries the needsReview draft flag. Explanations reference options by CONTENT, never by letter/position,
 * so option order can be rebalanced without rewriting explanations.
 */
import type { MCATDiscreteQuestion } from '../types'

export const CHEM_PHYS_DISCRETES_2: MCATDiscreteQuestion[] = [
  {
    id: 'cpd2-01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'A buffer is prepared from a weak acid HA ($pK_a = 5.0$) and its conjugate base such that $[\\text{A}^-]/[\\text{HA}] = 10$. What is the pH of the buffer?',
    options: ['4.0', '5.0', '6.0', '7.0'],
    correctAnswer: 2,
    explanation:
      'By the Henderson–Hasselbalch equation, $\\text{pH} = pK_a + \\log([\\text{A}^-]/[\\text{HA}]) = 5.0 + \\log 10 = 6.0$. A pH of 4.0 comes from inverting the ratio (conjugate base in the denominator). A pH of 5.0 applies only when the two concentrations are equal. A pH of 7.0 wrongly assumes a buffer is neutral; its pH is set by the $pK_a$ and the ratio.',
    skill: 'Buffers',
  },
  {
    id: 'cpd2-02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'Assuming ideal behavior and complete dissociation of ionic solutes, which aqueous solution has the lowest freezing point?',
    options: ['0.10 m CaCl₂', '0.26 m urea', '0.12 m KBr', '0.10 m NaCl'],
    correctAnswer: 0,
    explanation:
      'Freezing-point depression is $\\Delta T_f = iK_f m$, so the lowest freezing point belongs to the largest particle concentration $im$. CaCl₂ gives 3 ions: $3(0.10) = 0.30$ m. Urea is a nonelectrolyte: $1(0.26) = 0.26$ m. KBr gives 2 ions: $2(0.12) = 0.24$ m. NaCl gives 2 ions: $2(0.10) = 0.20$ m. Choosing urea comes from comparing molality alone and ignoring the van \'t Hoff factor; KBr and NaCl each give only 2 ions, too few to overcome their lower molalities.',
    skill: 'Colligative properties',
  },
  {
    id: 'cpd2-03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'A galvanic cell is built from the half-reactions $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ ($E^\\circ = +0.80$ V) and $\\text{Ni}^{2+} + 2e^- \\rightarrow \\text{Ni}$ ($E^\\circ = -0.25$ V). What is the standard cell potential?',
    options: ['+0.55 V', '+1.05 V', '+1.35 V', '+1.85 V'],
    correctAnswer: 1,
    explanation:
      'Silver has the higher reduction potential, so $\\text{Ag}^+$ is reduced at the cathode and Ni is oxidized at the anode: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.80 - (-0.25) = +1.05$ V. Reduction potentials are intensive, so they are NOT multiplied when the silver half-reaction is doubled to balance electrons. +0.55 V simply adds the two tabulated values without reversing the nickel half-reaction. +1.85 V doubles the silver potential ($2 \\times 0.80 + 0.25$), and +1.35 V both doubles it and fails to reverse nickel ($2 \\times 0.80 - 0.25$).',
    skill: 'Electrochemistry',
  },
  {
    id: 'cpd2-04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'Solid sodium fluoride is dissolved in a saturated aqueous solution of calcium fluoride that remains in contact with undissolved $\\text{CaF}_2$ at constant temperature. What is the effect of adding the sodium fluoride?',
    options: [
      'Additional calcium fluoride dissolves',
      'The $K_{sp}$ of calcium fluoride decreases',
      'The calcium ion concentration is unchanged',
      'Some solid calcium fluoride precipitates out',
    ],
    correctAnswer: 3,
    explanation:
      'Sodium fluoride is soluble and adds $\\text{F}^-$, a common ion. The reaction quotient $Q = [\\text{Ca}^{2+}][\\text{F}^-]^2$ then exceeds $K_{sp}$, so the equilibrium $\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+} + 2\\text{F}^-$ shifts toward the solid and calcium fluoride precipitates until $Q = K_{sp}$ again. Additional dissolution is the opposite of the common-ion effect. $K_{sp}$ depends only on temperature, which is held constant, so it does not change. Precipitation removes $\\text{Ca}^{2+}$, so its concentration decreases rather than staying the same.',
    skill: 'Solubility equilibria',
  },
  {
    id: 'cpd2-05',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'For the reaction A + B → products, doubling [A] at constant [B] quadruples the initial rate, and doubling [B] at constant [A] leaves the initial rate unchanged. By what factor does the initial rate change if [A] is tripled and [B] is doubled at the same time?',
    options: ['9', '18', '27', '36'],
    correctAnswer: 0,
    explanation:
      'Doubling [A] multiplies the rate by $4 = 2^2$, so the reaction is second order in A; doubling [B] has no effect, so it is zero order in B. Thus rate $= k[\\text{A}]^2$, and tripling [A] gives $3^2 = 9$; doubling [B] contributes $2^0 = 1$. A factor of 18 treats the reaction as first order in B ($9 \\times 2$). A factor of 36 treats it as second order in both reactants ($3^2 \\times 2^2$). A factor of 27 cubes the tripling, as if the reaction were third order in A.',
    skill: 'Rate laws',
  },
  {
    id: 'cpd2-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'Helium ($M = 4$ g/mol) and methane ($M = 16$ g/mol) effuse through the same pinhole at the same temperature. How do their effusion rates compare?',
    options: [
      'Helium is four times as fast',
      'Methane is twice as fast',
      'Helium is twice as fast',
      'The two gases effuse equally fast',
    ],
    correctAnswer: 2,
    explanation:
      "By Graham's law, effusion rate is proportional to $1/\\sqrt{M}$, so $\\text{rate}_{\\text{He}}/\\text{rate}_{\\text{CH}_4} = \\sqrt{16/4} = 2$: the lighter helium effuses twice as fast. Four times as fast forgets the square root. Methane being faster inverts the relationship, as if heavier gases moved faster. Equal rates confuses equal average kinetic energy (true at the same temperature) with equal speed; at equal kinetic energy the lighter molecules move faster.",
    skill: "Graham's law",
  },
  {
    id: 'cpd2-07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'The hydronium ion concentration of a solution is $4.0 \\times 10^{-9}$ M. Using $\\log 2 \\approx 0.30$, what is the pH of the solution?',
    options: ['8.4', '8.6', '9.4', '9.6'],
    correctAnswer: 0,
    explanation:
      'Since $\\log 4 = 2\\log 2 \\approx 0.60$, $\\text{pH} = -\\log(4.0 \\times 10^{-9}) = 9 - 0.60 = 8.4$. A useful check: the coefficient 4.0 is greater than 1, so the pH must be less than 9. 9.6 adds $\\log 4$ instead of subtracting it. 8.6 subtracts 0.4 (misestimating $\\log 4$ as 0.4) rather than 0.60, and 9.4 makes both errors, adding that 0.4.',
    skill: 'Logarithm estimation',
  },
  {
    id: 'cpd2-08',
    section: 'chem-phys',
    discipline: 'physics',
    question:
      'A solid block with density 750 kg/m³ floats at rest in fresh water (density 1000 kg/m³). What fraction of the block\'s volume is below the waterline?',
    options: ['0.25', '0.50', '0.75', '1.00'],
    correctAnswer: 2,
    explanation:
      'For a floating object, buoyant force equals weight: $\\rho_{\\text{water}} V_{\\text{sub}} g = \\rho_{\\text{block}} V g$, so $V_{\\text{sub}}/V = 750/1000 = 0.75$. 0.25 is the fraction ABOVE the waterline. 1.00 would describe an object at least as dense as water, which would not float with part of its volume exposed. 0.50 has no basis in the density ratio.',
    skill: 'Buoyancy',
  },
  {
    id: 'cpd2-09',
    section: 'chem-phys',
    discipline: 'physics',
    question:
      'An object is placed 30 cm in front of a thin converging lens with a focal length of 10 cm. How far from the lens does the image form?',
    options: ['−15.0 cm', '7.5 cm', '10.0 cm', '15.0 cm'],
    correctAnswer: 3,
    explanation:
      'The thin-lens equation gives $\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30}$, so $d_i = +15$ cm (a real, inverted image on the far side of the lens). 7.5 cm comes from adding the reciprocals instead of subtracting. −15.0 cm reverses the subtraction and would wrongly imply a virtual image; a converging lens with the object beyond $f$ forms a real image. 10.0 cm places the image at the focal point, which happens only for a very distant object.',
    skill: 'Lenses',
  },
  {
    id: 'cpd2-10',
    section: 'chem-phys',
    discipline: 'physics',
    question:
      'A 6.0 Ω resistor and a 3.0 Ω resistor are connected in parallel across an ideal 12 V battery. What is the total current supplied by the battery?',
    options: ['1.3 A', '2.0 A', '4.0 A', '6.0 A'],
    correctAnswer: 3,
    explanation:
      'For resistors in parallel, $\\frac{1}{R_{\\text{eq}}} = \\frac{1}{6.0} + \\frac{1}{3.0} = \\frac{1}{2.0}$, so $R_{\\text{eq}} = 2.0\\ \\Omega$ and $I = V/R_{\\text{eq}} = 12/2.0 = 6.0$ A. Equivalently, the branch currents are 2.0 A and 4.0 A, which sum to 6.0 A. 1.3 A treats the resistors as if in series ($12/9.0$). 2.0 A and 4.0 A are each only a single branch current.',
    skill: 'Circuits',
  },
  {
    id: 'cpd2-11',
    section: 'chem-phys',
    discipline: 'physics',
    question:
      'If the intensity of a sound increases by a factor of 100, by how much does its sound level increase?',
    options: ['2 dB', '20 dB', '40 dB', '100 dB'],
    correctAnswer: 1,
    explanation:
      'Sound level is $\\beta = 10\\log(I/I_0)$, so the change is $10\\log(100) = 10(2) = 20$ dB. 2 dB omits the factor of 10 in the decibel definition. 100 dB treats decibels as proportional to intensity rather than logarithmic. 40 dB uses $20\\log$, the form that applies to amplitude or pressure ratios, not intensity ratios.',
    skill: 'Sound intensity',
  },
  {
    id: 'cpd2-12',
    section: 'chem-phys',
    discipline: 'physics',
    question:
      'A spring with spring constant 200 N/m is compressed 0.10 m and used to launch a 0.50 kg block across a frictionless horizontal surface. What is the speed of the block after it leaves the spring?',
    options: ['1.4 m/s', '2.0 m/s', '2.8 m/s', '4.0 m/s'],
    correctAnswer: 1,
    explanation:
      'Elastic potential energy becomes kinetic energy: $\\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.10)^2 = 1.0$ J, and $\\tfrac{1}{2}mv^2 = 1.0$ J gives $v^2 = 2(1.0)/0.50 = 4.0$, so $v = 2.0$ m/s. 4.0 m/s stops at $v^2$ without taking the square root. 2.8 m/s omits the ½ in the spring energy (using 2.0 J). 1.4 m/s omits the ½ in the kinetic energy ($v = \\sqrt{1.0/0.50}$).',
    skill: 'Conservation of energy',
  },
  {
    id: 'cpd2-13',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question:
      'Which alkyl halide reacts fastest with sodium cyanide in DMSO by an $\\text{S}_\\text{N}2$ mechanism?',
    options: ['Bromomethane', '2-Bromopropane', 'Chloromethane', '1-Bromopropane'],
    correctAnswer: 0,
    explanation:
      '$\\text{S}_\\text{N}2$ requires backside attack in a single concerted step, so the rate is highest for the least hindered carbon and the best leaving group. Bromomethane has a methyl carbon (least steric hindrance) and bromide, a good leaving group. Chloromethane is equally unhindered, but chloride is a poorer leaving group than bromide. 1-Bromopropane is primary, so its carbon is more hindered than a methyl carbon. 2-Bromopropane is secondary and slower still.',
    skill: 'Substitution reactions',
  },
  {
    id: 'cpd2-14',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'How many stereoisomers exist for 2,3-dibromobutane?',
    options: ['2', '3', '4', '8'],
    correctAnswer: 1,
    explanation:
      'C2 and C3 are both chiral centers, so the $2^n$ rule predicts a maximum of 4. But the two centers carry identical substituent sets, so the (2R,3S) form has an internal mirror plane and is identical to (2S,3R) — a single achiral meso compound. The total is the (2R,3R)/(2S,3S) enantiomer pair plus one meso form = 3. Four is the unadjusted $2^n$ maximum. Two counts only the enantiomeric pair and misses the meso form. Eight uses $2^3$, as if there were three chiral centers.',
    skill: 'Stereochemistry',
  },
  {
    id: 'cpd2-15',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question:
      'A diethyl ether solution of diphenyl ether, benzoic acid, 4-methylphenol, and cyclohexanone is washed with saturated aqueous sodium bicarbonate. Which compound is extracted into the aqueous layer?',
    options: ['Diphenyl ether', '4-Methylphenol', 'Cyclohexanone', 'Benzoic acid'],
    correctAnswer: 3,
    explanation:
      'Bicarbonate is a weak base (its conjugate acid, carbonic acid, has $pK_a \\approx 6.4$), so it deprotonates only acids stronger than that. Benzoic acid ($pK_a \\approx 4.2$) is converted to water-soluble sodium benzoate and moves to the aqueous layer. 4-Methylphenol ($pK_a \\approx 10$) is too weakly acidic for bicarbonate and would need a strong base such as NaOH. Cyclohexanone (α-hydrogen $pK_a \\approx 20$) is not appreciably deprotonated by either base, and diphenyl ether has no acidic proton, so both stay in the ether layer.',
    skill: 'Extraction',
  },
  {
    id: 'cpd2-16',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question:
      'An unknown compound shows a very broad IR absorption spanning about 2500–3300 cm⁻¹ and a strong absorption near 1710 cm⁻¹. Which functional group best accounts for both absorptions?',
    options: ['Carboxylic acid', 'Alkyl alcohol', 'Dialkyl ketone', 'Primary amine'],
    correctAnswer: 0,
    explanation:
      'The very broad band from roughly 2500 to 3300 cm⁻¹ is the hydrogen-bonded O–H stretch characteristic of carboxylic acid dimers, and the strong band near 1710 cm⁻¹ is its C=O stretch. An alkyl alcohol gives a broad O–H band, but it is centered higher (about 3200–3550 cm⁻¹) and there is no carbonyl peak. A dialkyl ketone explains the 1710 cm⁻¹ band but has no O–H stretch. A primary amine shows two sharper N–H peaks near 3300–3500 cm⁻¹ and no carbonyl.',
    skill: 'IR spectroscopy',
  },
  {
    id: 'cpd2-17',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question:
      'An enzyme obeys Michaelis–Menten kinetics. What is the initial reaction velocity when the substrate concentration equals $3K_m$?',
    options: ['$0.25\\,V_{\\max}$', '$0.33\\,V_{\\max}$', '$0.50\\,V_{\\max}$', '$0.75\\,V_{\\max}$'],
    correctAnswer: 3,
    explanation:
      '$v = \\frac{V_{\\max}[S]}{K_m + [S]} = \\frac{V_{\\max}(3K_m)}{K_m + 3K_m} = \\frac{3}{4}V_{\\max} = 0.75\\,V_{\\max}$. $0.25\\,V_{\\max}$ uses $K_m/(K_m + [S])$, the fraction of velocity NOT yet achieved. $0.33\\,V_{\\max}$ uses $K_m/[S]$. $0.50\\,V_{\\max}$ is the velocity only when $[S] = K_m$.',
    skill: 'Enzyme kinetics',
  },
  {
    id: 'cpd2-18',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question:
      'A Lineweaver–Burk plot ($1/v$ versus $1/[S]$) for an enzyme has a y-intercept of 0.020 min/µM and a slope of 0.10 min. What is $K_m$?',
    options: ['0.20 µM', '5.0 µM', '10 µM', '50 µM'],
    correctAnswer: 1,
    explanation:
      'On a Lineweaver–Burk plot the y-intercept is $1/V_{\\max}$ and the slope is $K_m/V_{\\max}$. So $V_{\\max} = 1/0.020 = 50$ µM/min and $K_m = \\text{slope} \\times V_{\\max} = (0.10)(50) = 5.0$ µM (equivalently slope ÷ intercept). 50 µM is the numerical value of $V_{\\max}$, not $K_m$. 10 µM is the reciprocal of the slope. 0.20 µM divides the intercept by the slope, inverting the correct ratio.',
    skill: 'Enzyme kinetics',
  },
  {
    id: 'cpd2-19',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question:
      'Rotation about the peptide bond, the C–N bond joining adjacent amino acid residues in a protein, is highly restricted. What is the main reason?',
    options: [
      'Resonance gives the C–N bond partial double-bond character',
      'Backbone hydrogen bonds between C=O and N–H lock it',
      'Bulky side chains on neighboring α-carbons block rotation',
      'The amide nitrogen is sp³ with a localized lone pair',
    ],
    correctAnswer: 0,
    explanation:
      'The amide nitrogen lone pair is delocalized into the carbonyl, so the C–N bond has partial double-bond character. The nitrogen is therefore sp² hybridized, and the six atoms of the peptide group are held in one rigid plane. The C=O and N–H of the same peptide group point in opposite directions and cannot hydrogen-bond to each other; backbone hydrogen bonds form between different residues in secondary structure and do not cause the planarity. Side chains attach to the α-carbons, where rotation (φ and ψ) remains possible, so steric bulk is not what fixes the peptide bond. An sp³ nitrogen with a localized lone pair would give a single bond with free rotation — the opposite of what is observed.',
    skill: 'Peptide bonds',
  },
  {
    id: 'cpd2-20',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question:
      'Lysine has $pK_a$ values of 2.2 (α-carboxyl), 9.0 (α-amino), and 10.5 (side-chain amino). What is the predominant net charge of free lysine at pH 7.4?',
    options: ['−1', '0', '+1', '+2'],
    correctAnswer: 2,
    explanation:
      'At pH 7.4, the α-carboxyl group (pH above its $pK_a$ of 2.2) is deprotonated, −1. Because the pH is below the $pK_a$ of both the α-amino group (9.0) and the side-chain amino group (10.5), both remain protonated, +1 each. Net charge = −1 + 1 + 1 = +1. A net charge of 0 describes a neutral amino acid, ignoring the basic side chain. +2 forgets that the carboxyl group is deprotonated. −1 treats the amino groups as deprotonated, which happens only well above their $pK_a$ values.',
    skill: 'Amino acids',
  },
  {
    id: 'cpd2-21',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question:
      "The reaction glucose + $\\text{P}_\\text{i}$ → glucose 6-phosphate + $\\text{H}_2\\text{O}$ has $\\Delta G^{\\circ\\prime} = +13.8$ kJ/mol, and ATP hydrolysis to ADP + $\\text{P}_\\text{i}$ has $\\Delta G^{\\circ\\prime} = -30.5$ kJ/mol. What is $\\Delta G^{\\circ\\prime}$ for glucose + ATP → glucose 6-phosphate + ADP?",
    options: ['−44.3 kJ/mol', '−16.7 kJ/mol', '+16.7 kJ/mol', '+44.3 kJ/mol'],
    correctAnswer: 1,
    explanation:
      'The coupled reaction is the sum of the two reactions ($\\text{P}_\\text{i}$ and water cancel), so the standard free energy changes add: $+13.8 + (-30.5) = -16.7$ kJ/mol, making the coupled phosphorylation favorable. +16.7 kJ/mol has the right magnitude but the wrong sign. −44.3 kJ/mol subtracts the phosphorylation value instead of adding it ($-30.5 - 13.8$), and +44.3 kJ/mol subtracts the ATP value ($13.8 - (-30.5)$).',
    skill: 'Bioenergetics',
  },
  {
    id: 'cpd2-22',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question:
      'Researchers compare mean enzyme activity in treated and untreated cell lysates and obtain $p = 0.03$ using a significance level of $\\alpha = 0.05$. Which conclusion is justified?',
    options: [
      'The probability that the null hypothesis is true is 3 percent',
      'The treatment has a biologically important effect on activity',
      'The null hypothesis of no difference in mean activity is rejected',
      'There is a 97 percent chance the treatment caused the change',
    ],
    correctAnswer: 2,
    explanation:
      'Because $p = 0.03$ is below $\\alpha = 0.05$, the difference is statistically significant and the null hypothesis of equal means is rejected. A p-value is the probability of data at least this extreme IF the null hypothesis were true; it is not the probability that the null is true (3 percent) or that the treatment caused the effect (97 percent). Statistical significance also says nothing about effect size, so it cannot establish a biologically important change.',
    skill: 'Statistical reasoning',
  },
]
