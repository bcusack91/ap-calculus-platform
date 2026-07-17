import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Chemistry — 45 MCQs across all 9 units (CED).
 *   U1 Atomic Structure & Properties               (5)
 *   U2 Molecular & Ionic Compound Structure        (5)
 *   U3 Intermolecular Forces & Properties          (5)
 *   U4 Chemical Reactions                          (5)
 *   U5 Kinetics                                    (5)
 *   U6 Thermodynamics                              (5)
 *   U7 Equilibrium                                 (5)
 *   U8 Acids & Bases                               (5)
 *   U9 Applications of Thermodynamics              (5)
 *
 * Calculator allowed throughout (per CB rules for AP Chem).
 */

export const MCQS: MCQItem[] = [
  /* ---- U1 Atomic Structure & Properties (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Which of the following has the largest atomic radius?',
    options: ['Na', 'K', 'Mg', 'Cl'],
    correctAnswer: 1,
    explanation: 'Atomic radius increases down a group and decreases across a period. K is in period 4 (one row below Na) and to the left of any period-3 element listed ⇒ largest.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'A photoelectron spectrum of an element shows four peaks at binding energies (in MJ/mol): 126, 9.07, and 0.74, all of equal height, and 5.31 at three times that height. The element is most likely',
    options: ['Sodium (Na)', 'Magnesium (Mg)', 'Aluminum (Al)', 'Chlorine (Cl)'],
    correctAnswer: 1,
    explanation: 'The peaks correspond to 1s (126), 2s (9.07), 2p (5.31), and 3s (0.74). The 2p peak is three times the height of the others, so it holds 6 electrons, and the equal-height 1s, 2s, and 3s peaks hold 2 each: $1s^{2}2s^{2}2p^{6}3s^{2}$ ⇒ Mg.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Which electron configuration is correct for the ground state of $\\text{Fe}^{3+}$ (atomic # 26)?',
    options: [
      '$[\\text{Ar}]3d^5$',
      '$[\\text{Ar}]3d^6 4s^0$',
      '$[\\text{Ar}]4s^2 3d^3$',
      '$[\\text{Ar}]3d^3 4s^2$',
    ],
    correctAnswer: 0,
    explanation: 'Fe is $[\\text{Ar}]3d^6 4s^2$. When forming cations, 4s electrons leave first, then 3d. Remove 2 from 4s, then 1 from 3d ⇒ $[\\text{Ar}]3d^5$.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Which has the highest first ionization energy?',
    options: ['Na', 'Mg', 'Al', 'Si'],
    correctAnswer: 3,
    explanation: 'IE generally increases left-to-right across a period. Si is rightmost ⇒ highest IE among these. (Mg has a small bump above Al due to filled $3s^{2}$, but Si > Mg.)',
  },
  {
    type: 'mcq',
    topic: 'unit-1-atomic-structure',
    question: 'Mass spectrum of an element shows two peaks: 78% at mass 24 and 22% at mass 25. The average atomic mass is closest to',
    options: ['24.0 amu', '24.2 amu', '24.5 amu', '25.0 amu'],
    correctAnswer: 1,
    explanation: '$M = 0.78(24) + 0.22(25) = 18.72 + 5.50 = 24.22$ amu.',
  },

  /* ---- U2 Molecular & Ionic Compound Structure (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'The molecular geometry of $\\text{SF}_4$ is',
    options: ['tetrahedral', 'square planar', 'seesaw', 'trigonal bipyramidal'],
    correctAnswer: 2,
    explanation: 'S in $\\text{SF}_4$ has 5 electron domains (4 bonds + 1 lone pair) ⇒ trigonal bipyramidal electron geometry. Lone pair occupies equatorial position ⇒ molecular shape is SEESAW.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Which has the strongest bond?',
    options: ['C–C single', 'C=C double', 'C≡C triple', 'C–H single'],
    correctAnswer: 2,
    explanation: 'Bond strength increases with bond order. Triple bond > double > single. C≡C is the strongest among these.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Which molecule is polar?',
    options: ['$\\text{CO}_2$', '$\\text{CH}_4$', '$\\text{H}_2\\text{O}$', '$\\text{BF}_3$'],
    correctAnswer: 2,
    explanation: '$H_{2}O$ is bent (lone pairs on O) ⇒ dipoles do not cancel ⇒ polar. The others are linear/tetrahedral/trigonal planar with symmetric polar bonds canceling.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'In a Lewis structure of $\\text{NO}_3^-$, the formal charge on the central N atom is',
    options: ['$-1$', '$0$', '$+1$', '$+2$'],
    correctAnswer: 2,
    explanation: 'N has 4 bonds (1 double + 2 single, as resonance hybrid) and 0 lone pairs in the typical Lewis structure. FC = 5 − 0 − 4 = +1.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-molecular-ionic-structure',
    question: 'Which compound has the smallest lattice energy in magnitude?',
    options: ['NaF', 'NaCl', 'KCl', 'CaO'],
    correctAnswer: 2,
    explanation: 'Lattice energy $\\propto |q_+ q_-|/r$. CaO has highest charges (2+, 2−). KCl has largest cation $(K^{+})$ of the +1/−1 pairs ⇒ largest $r$ ⇒ smallest magnitude.',
  },

  /* ---- U3 Intermolecular Forces & Properties (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Which substance has the highest boiling point?',
    options: ['$\\text{CH}_4$', '$\\text{NH}_3$', '$\\text{H}_2\\text{O}$', '$\\text{HF}$'],
    correctAnswer: 2,
    explanation: 'All can H-bond except $CH_{4}$. $H_{2}O$ has 2 H-bond donors AND 2 acceptors per molecule ⇒ extensive H-bonding network ⇒ highest BP (100°C).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'A 0.250 mol sample of an ideal gas occupies 5.00 L at 27°C. The pressure is (use $R = 0.0821$ L·atm/(mol·K))',
    options: ['1.23 atm', '2.46 atm', '4.92 atm', '6.15 atm'],
    correctAnswer: 0,
    explanation: '$PV=nRT$. $T = 300$ K. $P = (0.250)(0.0821)(300)/5.00 = 6.158/5.00 = 1.23$ atm.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'A solution is prepared by dissolving 5.0 g NaOH (40 g/mol) in enough water to make 250 mL. The molarity is',
    options: ['0.20 M', '0.50 M', '1.0 M', '2.0 M'],
    correctAnswer: 1,
    explanation: '$n = 5.0/40 = 0.125$ mol. $M = 0.125/0.250 = 0.50$ M.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'Which solution has the highest boiling point elevation?',
    options: ['0.10 m glucose', '0.10 m NaCl', '0.10 m $\\text{CaCl}_2$', '0.10 m sucrose'],
    correctAnswer: 2,
    explanation: 'Boiling point elevation $\\propto i \\cdot m$. Glucose, sucrose: $i = 1$. NaCl: $i = 2$. $CaCl_{2}$: $i = 3$ ⇒ greatest effect.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-intermolecular-forces',
    question: 'A solution exhibits negative deviation from Raoult\'s law when',
    options: [
      'solute-solvent interactions are stronger than solute-solute and solvent-solvent',
      'solute-solvent interactions are weaker than the pure components',
      'the solution behaves ideally',
      'gases dissolve in the liquid',
    ],
    correctAnswer: 0,
    explanation: 'Negative deviation: stronger attractive forces in solution than in pure components ⇒ less escape to vapor ⇒ lower vapor pressure than predicted.',
  },

  /* ---- U4 Chemical Reactions (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'How many grams of $\\text{O}_2$ are produced from complete decomposition of 200. g of $KClO_{3}$ via $2\\text{KClO}_3 \\to 2\\text{KCl} + 3\\text{O}_2$? (Molar mass: $KClO_{3}$ = 122.5 g/mol; $O_{2}$ = 32 g/mol)',
    options: ['39.2 g', '78.4 g', '156.8 g', '200 g'],
    correctAnswer: 1,
    explanation: '$n_{KClO_3} = 200/122.5 = 1.633$ mol. $n_{O_2} = (3/2)(1.633) = 2.45$ mol. Mass = 2.45 × 32 = 78.4 g.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'In the reaction $\\text{Zn}(s) + 2\\text{HCl}(aq) \\to \\text{ZnCl}_2(aq) + \\text{H}_2(g)$, the substance oxidized is',
    options: ['Zn', 'H', 'Cl', '$\\text{H}_2$'],
    correctAnswer: 0,
    explanation: 'Zn goes from 0 → +2 (loses 2 electrons) ⇒ oxidized. H goes from +1 → 0 ⇒ reduced.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'Which of these aqueous solutions, when mixed, will form a precipitate?',
    options: ['NaCl + $KNO_{3}$', '$AgNO_{3}$ + NaCl', 'NaOH + KCl', '$KNO_{3}$ + $Na_{2}SO_{4}$'],
    correctAnswer: 1,
    explanation: 'AgCl is insoluble ($Ag^{+}$ + $Cl^{-}$ → AgCl↓). All other combinations give only soluble salts.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'When $25.0$ mL of $0.10$ M HCl is mixed with $25.0$ mL of $0.10$ M NaOH, the resulting solution is',
    options: ['acidic', 'basic', 'neutral', 'a buffer'],
    correctAnswer: 2,
    explanation: 'Equal moles of strong acid + strong base ⇒ complete neutralization ⇒ NaCl + $H_{2}O$ ⇒ NEUTRAL (pH 7).',
  },
  {
    type: 'mcq',
    topic: 'unit-4-chemical-reactions',
    question: 'Aqueous $\\text{AgNO}_3$ is mixed with aqueous $\\text{NaCl}$, forming a white precipitate. Which is the correct net ionic equation?',
    options: [
      '$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s)$',
      '$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) \\to \\text{AgNO}_3(s)$',
      '$\\text{Na}^+(aq) + \\text{Cl}^-(aq) \\to \\text{NaCl}(s)$',
      '$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\to \\text{AgCl}(s) + \\text{NaNO}_3(aq)$',
    ],
    correctAnswer: 0,
    explanation: 'AgCl is the insoluble product. $\\text{Na}^+$ and $\\text{NO}_3^-$ are spectator ions, so the net ionic equation is $\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s)$. Option 4 is the molecular equation, not the net ionic equation.',
  },

  /* ---- U5 Kinetics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'For the reaction $A \\to B$, doubling [A] doubles the initial rate. The reaction is',
    options: ['zero order in A', 'first order in A', 'second order in A', 'third order in A'],
    correctAnswer: 1,
    explanation: 'Rate $\\propto [A]^n$. Doubling [A] doubles rate ⇒ $2 = 2^n \\Rightarrow n = 1$ ⇒ first order.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'A first-order reaction has rate constant $k = 0.0231$ $s^{-1}$. The half-life is',
    options: ['10 s', '15 s', '30 s', '60 s'],
    correctAnswer: 2,
    explanation: '$t_{1/2} = \\ln 2 / k = 0.693/0.0231 = 30$ s.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'Increasing temperature speeds up most reactions because',
    options: [
      'the activation energy decreases',
      'a larger fraction of molecules have energy ≥ E_a',
      'the equilibrium constant increases',
      'the catalyst becomes more efficient',
    ],
    correctAnswer: 1,
    explanation: 'Higher T → wider Maxwell-Boltzmann distribution shifted right → larger fraction of collisions exceed E_a (Arrhenius).',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'For the elementary mechanism: (1) $A + B \\to C$ (slow), (2) $C + B \\to D$ (fast), the rate law is',
    options: ['rate = $k[A]$', 'rate = $k[A][B]$', 'rate = $k[A][B]^2$', 'rate = $k[B]^2$'],
    correctAnswer: 1,
    explanation: 'Rate-determining step is (1): rate $= k[A][B]$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-kinetics',
    question: 'A catalyst speeds up a reaction by',
    options: [
      'shifting the equilibrium forward',
      'increasing reactant concentrations',
      'lowering the activation energy of both forward and reverse reactions',
      'releasing heat',
    ],
    correctAnswer: 2,
    explanation: 'Catalyst provides alternative pathway with lower E_a for forward AND reverse. Equilibrium position is unchanged; only rate is affected.',
  },

  /* ---- U6 Thermodynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'A reaction releases 400 kJ of heat at constant pressure. $\\Delta H$ is',
    options: ['$+400$ kJ', '$-400$ kJ', '$+200$ kJ', '$-200$ kJ'],
    correctAnswer: 1,
    explanation: 'Heat released ⇒ exothermic ⇒ $\\Delta H < 0$. $\\Delta H = -400$ kJ.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'Calculate the heat absorbed when 200 g of water (specific heat 4.18 J/g°C) is heated from 25°C to 50°C.',
    options: ['10.5 kJ', '20.9 kJ', '41.8 kJ', '83.6 kJ'],
    correctAnswer: 1,
    explanation: '$q = mc\\Delta T = (200)(4.18)(25) = 20{,}900$ J = 20.9 kJ.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'For a reaction with $\\Delta H = -100$ kJ and $\\Delta S = -200$ J/K at 298 K, $\\Delta G$ is',
    options: ['$-160$ kJ', '$-40$ kJ', '$+40$ kJ', '$+160$ kJ'],
    correctAnswer: 1,
    explanation: '$\\Delta G = \\Delta H - T\\Delta S = -100 - (298)(-0.200) = -100 + 59.6 = -40.4$ kJ.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'For Hess\'s law calculations, the enthalpy change of an overall reaction',
    options: [
      'is independent of the reaction pathway',
      'depends on the specific intermediate steps used',
      'is always positive',
      'equals the activation energy',
    ],
    correctAnswer: 0,
    explanation: 'Hess\'s law: $\\Delta H$ is a state function ⇒ depends only on initial and final states, not pathway.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-thermodynamics',
    question: 'The standard entropy change for $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l)$ is',
    options: ['large positive', 'small positive', 'large negative', 'zero'],
    correctAnswer: 2,
    explanation: '3 moles of gas → 0 moles of gas (liquid product). Large decrease in entropy ⇒ large negative $\\Delta S$.',
  },

  /* ---- U7 Equilibrium (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For the reaction $A + B \\rightleftharpoons C$, $K = 4$. At equilibrium [A] = [B] = 1 M. Then [C] equals',
    options: ['0.25 M', '1 M', '4 M', '16 M'],
    correctAnswer: 2,
    explanation: '$K = [C]/([A][B]) = [C]/1 \\Rightarrow [C] = K = 4$ M.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta H < 0$. Increasing temperature shifts equilibrium',
    options: ['to the right $(more NH_{3})$', 'to the left $(less NH_{3})$', 'no change', 'cannot determine'],
    correctAnswer: 1,
    explanation: 'Le Châtelier: exothermic forward reaction. Heating favors the endothermic direction (reverse) ⇒ shift LEFT.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For the reaction $A(g) \\rightleftharpoons B(g) + C(g)$ at equilibrium, increasing pressure (decreasing volume) at constant T will',
    options: [
      'shift the equilibrium to the right',
      'shift the equilibrium to the left',
      'have no effect',
      'change the value of K',
    ],
    correctAnswer: 1,
    explanation: '1 mole gas reactant → 2 moles gas product. Increased pressure shifts equilibrium to side with FEWER gas moles ⇒ left.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'A reaction has $K = 1 \\times 10^{-5}$. At equilibrium,',
    options: [
      'reactants strongly favored',
      'products strongly favored',
      '[reactants] = [products]',
      'reaction is complete',
    ],
    correctAnswer: 0,
    explanation: '$K \\ll 1$ ⇒ reactants strongly favored at equilibrium.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-equilibrium',
    question: 'For $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$, $K_{sp} = 1.8 \\times 10^{-10}$. The molar solubility of AgCl in pure water is approximately',
    options: ['$1.8 \\times 10^{-10}$ M', '$1.3 \\times 10^{-5}$ M', '$1.8 \\times 10^{-5}$ M', '$1.3 \\times 10^{-10}$ M'],
    correctAnswer: 1,
    explanation: '$K_{sp} = s^2 \\Rightarrow s = \\sqrt{1.8 \\times 10^{-10}} \\approx 1.34 \\times 10^{-5}$ M.',
  },

  /* ---- U8 Acids & Bases (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'The pH of 0.010 M HCl is',
    options: ['1', '2', '3', '7'],
    correctAnswer: 1,
    explanation: 'HCl strong acid ⇒ [$H^{+}$] = 0.010 M = $10^{-2}$ ⇒ pH = 2.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'A weak acid HA has $K_a = 1.0 \\times 10^{-5}$. The pH of 0.10 M HA is approximately',
    options: ['1.0', '3.0', '5.0', '7.0'],
    correctAnswer: 1,
    explanation: '$[H^+] \\approx \\sqrt{K_a \\cdot C} = \\sqrt{10^{-5}(0.10)} = \\sqrt{10^{-6}} = 10^{-3}$. pH ≈ 3.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'A buffer is most effective at a pH equal to',
    options: ['7', '$pK_a$ of the weak acid', '$pK_a + 1$', '$pK_w$'],
    correctAnswer: 1,
    explanation: 'Buffer capacity is maximum when pH = pKa (Henderson-Hasselbalch: pH = pKa when [$A^{-}$]/[HA] = 1).',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'A buffer contains 0.20 M acetic acid (pKa = 4.74) and 0.20 M sodium acetate. The pH is',
    options: ['3.74', '4.74', '5.74', '7.00'],
    correctAnswer: 1,
    explanation: 'Henderson-Hasselbalch: pH = pKa + log([$A^{-}$]/[HA]) = 4.74 + log(1) = 4.74.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-acids-bases',
    question: 'At the equivalence point of a titration of a weak acid with a strong base, the pH is',
    options: ['less than 7', 'equal to 7', 'greater than 7', 'equal to the $pK_a$'],
    correctAnswer: 2,
    explanation: 'At equivalence, the solution contains the conjugate base of the weak acid (e.g., acetate). Conjugate base is weakly basic ⇒ pH > 7.',
  },

  /* ---- U9 Applications of Thermodynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'A reaction is spontaneous at all temperatures when',
    options: [
      '$\\Delta H < 0$ and $\\Delta S > 0$',
      '$\\Delta H > 0$ and $\\Delta S < 0$',
      '$\\Delta H < 0$ and $\\Delta S < 0$',
      '$\\Delta H > 0$ and $\\Delta S > 0$',
    ],
    correctAnswer: 0,
    explanation: '$\\Delta G = \\Delta H - T\\Delta S$. $\\Delta H < 0$ AND $\\Delta S > 0$ ⇒ $\\Delta G < 0$ for all $T > 0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'For $\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$, $E° = +0.34$ V. For $\\text{Zn}^{2+}(aq) + 2e^- \\to \\text{Zn}(s)$, $E° = -0.76$ V. The cell EMF for $\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}$ is',
    options: ['$+0.42$ V', '$+1.10$ V', '$-1.10$ V', '$-0.42$ V'],
    correctAnswer: 1,
    explanation: '$E°_{cell} = E°_{cathode} - E°_{anode} = 0.34 - (-0.76) = +1.10$ V. Positive ⇒ spontaneous galvanic cell.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'For a galvanic cell at standard conditions with $E°_{cell} = +1.10$ V (n = 2), $\\Delta G°$ equals (use $F = 96{,}500$ C/mol)',
    options: ['$-2.12 \\times 10^5$ J', '$-1.06 \\times 10^5$ J', '$+1.06 \\times 10^5$ J', '$+2.12 \\times 10^5$ J'],
    correctAnswer: 0,
    explanation: '$\\Delta G° = -nFE° = -(2)(96{,}500)(1.10) = -212{,}300$ J ≈ $-2.12 \\times 10^5$ J.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'Electrolysis of molten NaCl produces',
    options: ['$Na_{2}O$ and $Cl_{2}$', 'Na metal and $Cl_{2}$', 'NaOH and $H_{2}$', '$Na_{2}CO_{3}$ and $Cl_{2}$'],
    correctAnswer: 1,
    explanation: 'In molten NaCl: $Na^{+}$ reduced at cathode → Na(l). $Cl^{-}$ oxidized at anode → $Cl_{2}(g)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-applications-thermodynamics',
    question: 'For a reaction at equilibrium, $\\Delta G$ equals',
    options: ['0', '$-RT \\ln K$', '$\\Delta H$', '$-T\\Delta S$'],
    correctAnswer: 0,
    explanation: 'At equilibrium $\\Delta G = 0$ (no further net change). Note: $\\Delta G° = -RT\\ln K$ is the relation for STANDARD free energy change, not $\\Delta G$ at equilibrium.',
  },
]
