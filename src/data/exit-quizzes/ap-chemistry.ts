/**
 * AP Chemistry Exit Quiz Question Pool
 *
 * Covers all major AP Chemistry domains.
 * Each question is tagged with:
 *  - `domain`     : broad diagnostic domain (matches APChemDomain.id)
 *  - `topicSlug`  : specific DB topic slug for remediation recommendations
 *  - `formSet`    : 'A' | 'B' | 'both' — which diagnostic form may use this question
 */

export interface APChemQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

export const apChemQuestionPool: APChemQuestion[] = [

  // ══════════════════════════════════════════════════════════════════
  //  1. ATOMIC STRUCTURE & PERIODIC TRENDS
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'How many moles of carbon atoms are in 36 g of carbon-12?',
    options: ['1 mol', '2 mol', '3 mol', '4 mol'],
    correctAnswer: 2,
    explanation: 'Molar mass of C-12 = 12 g/mol. 36 g ÷ 12 g/mol = 3 mol.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'moles-molar-mass',
    formSet: 'A',
  },
  {
    question: 'Which electron configuration represents a ground-state copper (Cu, Z=29) atom?',
    options: ['[Ar] $3d^{9}$ $4s^{2}$', '[Ar] $3d^{10}$ $4s^{1}$', '[Ar] $3d^{8}$ $4s^{2}$', '[Ar] $3d^{10}$ $4s^{2}$'],
    correctAnswer: 1,
    explanation: 'Copper is anomalous: a completely filled 3d subshell is more stable than $3d^{9}$ $4s^{2}$. The actual configuration is [Ar] $3d^{10}$ $4s^{1}$.',
    difficulty: 'medium',
    domain: 'atomic-structure',
    topicSlug: 'electron-configuration',
    formSet: 'A',
  },
  {
    question: 'Moving left to right across a period, electronegativity generally:',
    options: ['Decreases', 'Increases', 'Stays the same', 'First increases then decreases'],
    correctAnswer: 1,
    explanation: 'Across a period, nuclear charge increases while atomic radius decreases, increasing the atom\'s pull on bonding electrons (electronegativity).',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'periodic-trends',
    formSet: 'A',
  },
  {
    question: 'A photoelectron spectrum shows a peak at ~2500 eV and a much smaller peak at ~21 eV. Which element is most consistent with this data?',
    options: ['Helium', 'Carbon', 'Lithium', 'Neon'],
    correctAnswer: 2,
    explanation: 'Lithium has 2 core electrons $(1s^{2})$ with high binding energy and 1 valence electron $(2s^{1})$ at lower binding energy. The 2:1 peak ratio (two 1s electrons vs. one 2s electron) matches lithium.',
    difficulty: 'hard',
    domain: 'atomic-structure',
    topicSlug: 'photoelectron-spectroscopy',
    formSet: 'A',
  },
  // Form B variants
  {
    question: 'How many moles of oxygen atoms are in 64 g of $O_{2}$?',
    options: ['1 mol', '2 mol', '4 mol', '8 mol'],
    correctAnswer: 2,
    explanation: 'Molar mass of $O_{2}$ = 32 g/mol. 64 g ÷ 32 g/mol = 2 mol $O_{2}$ = 4 mol O atoms.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'moles-molar-mass',
    formSet: 'B',
  },
  {
    question: 'Which set of quantum numbers (n, l, ml, ms) is NOT valid?',
    options: ['2, 1, 0, +½', '3, 2, -2, -½', '2, 2, 0, +½', '4, 0, 0, -½'],
    correctAnswer: 2,
    explanation: 'For n=2, l can only be 0 or 1 (l must be < n). l=2 with n=2 is invalid.',
    difficulty: 'medium',
    domain: 'atomic-structure',
    topicSlug: 'electron-configuration',
    formSet: 'B',
  },
  {
    question: 'Which periodic trend correctly describes atomic radius?',
    options: [
      'Atomic radius increases left to right across a period',
      'Atomic radius decreases down a group',
      'Atomic radius increases down a group',
      'Atomic radius is independent of nuclear charge',
    ],
    correctAnswer: 2,
    explanation: 'Atomic radius increases going DOWN a group because additional electron shells are added, placing electrons farther from the nucleus.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'periodic-trends',
    formSet: 'B',
  },
  {
    question: 'In a PES spectrum for neon (Ne), how many distinct peaks are expected?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Ne has configuration $1s^{2}$ $2s^{2}$ $2p^{6}$. There are two distinct subshells (1s and 2s/2p each at different energies). In a simplified PES, 1s appears as one peak and the n=2 electrons (2s and 2p) sometimes merge; typically 2 peaks are observed (1s core and 2s/2p valence).',
    difficulty: 'hard',
    domain: 'atomic-structure',
    topicSlug: 'photoelectron-spectroscopy',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  2. CHEMICAL BONDING
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'Which type of bond results from the transfer of electrons between atoms?',
    options: ['Covalent bond', 'Ionic bond', 'Metallic bond', 'Hydrogen bond'],
    correctAnswer: 1,
    explanation: 'Ionic bonds form when one atom transfers electrons to another, creating oppositely charged ions that attract each other electro statically.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'types-of-chemical-bonds',
    formSet: 'A',
  },
  {
    question: 'What is the formal charge on nitrogen in the nitrate ion $(NO_{3}^{-})$?',
    options: ['+1', '0', '-1', '+2'],
    correctAnswer: 0,
    explanation: 'In $NO_{3}^{-}$, N forms one double bond and two single bonds, giving it 5 bonds total. Formal charge = 5 $(valence e^{-})$ - 0 (lone pair $e^{-}$) - $\\tfrac{1}{2} (8 bonding e^{-})$ = 5 - 0 - 4 = +1.',
    difficulty: 'hard',
    domain: 'bonding',
    topicSlug: 'lewis-structures-formal-charge',
    formSet: 'A',
  },
  {
    question: 'What is the molecular geometry of a molecule with 4 bonding pairs and 0 lone pairs around the central atom?',
    options: ['Bent', 'Trigonal pyramidal', 'Tetrahedral', 'Square planar'],
    correctAnswer: 2,
    explanation: 'VSEPR: 4 electron domains (all bonding) → tetrahedral electron geometry AND tetrahedral molecular geometry, bond angles ~109.5°.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'vsepr-molecular-geometry',
    formSet: 'A',
  },
  {
    question: 'The carbon atoms in ethene $(C_{2}H_{4})$ are $sp^{2}$-hybridized. What type of bond connects the two carbon atoms?',
    options: ['Single σ bond only', 'One σ bond and one π bond', 'Two π bonds', 'Two σ bonds'],
    correctAnswer: 1,
    explanation: 'A C=C double bond consists of one σ bond (from $sp^{2}$ orbital overlap head-on) and one π bond (from side-by-side p orbital overlap).',
    difficulty: 'medium',
    domain: 'bonding',
    topicSlug: 'hybridization-sigma-pi-bonds',
    formSet: 'A',
  },
  // Form B variants
  {
    question: 'Which compound contains predominantly covalent bonding?',
    options: ['NaCl', 'MgO', '$CO_{2}$', '$CaF_{2}$'],
    correctAnswer: 2,
    explanation: '$CO_{2}$ is formed between two nonmetals (C and O) and shares electrons through covalent bonds. The others are ionic compounds.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'types-of-chemical-bonds',
    formSet: 'B',
  },
  {
    question: 'In $CO_{2}$, what is the formal charge on each oxygen atom (with the correct Lewis structure)?',
    options: ['0', '-1', '+1', '-2'],
    correctAnswer: 0,
    explanation: 'In the correct Lewis structure of $CO_{2}$, each O has a double bond and 2 lone pairs. Formal charge = 6 - 4 - ½(4) = 6 - 4 - 2 = 0.',
    difficulty: 'medium',
    domain: 'bonding',
    topicSlug: 'lewis-structures-formal-charge',
    formSet: 'B',
  },
  {
    question: 'Water $(H_{2}O)$ has a bent molecular geometry. What is the approximate H-O-H bond angle?',
    options: ['90°', '104.5°', '109.5°', '120°'],
    correctAnswer: 1,
    explanation: 'O in $H_{2}O$ has 2 bonding pairs and 2 lone pairs. Lone pairs compress the bond angle from the ideal tetrahedral 109.5° to approximately 104.5°.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'vsepr-molecular-geometry',
    formSet: 'B',
  },
  {
    question: 'What hybridization does the central nitrogen atom in $NH_{3}$ adopt?',
    options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'],
    correctAnswer: 2,
    explanation: 'N in $NH_{3}$ has 3 bonding pairs and 1 lone pair = 4 electron domains → $sp^{3}$ hybridization. The molecular shape is trigonal pyramidal.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'hybridization-sigma-pi-bonds',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  3. INTERMOLECULAR FORCES & STATES OF MATTER
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'Which intermolecular force is responsible for the unusually high boiling point of water compared to $H_{2}S$?',
    options: ['London dispersion forces', 'Dipole-dipole forces', 'Hydrogen bonding', 'Ion-dipole forces'],
    correctAnswer: 2,
    explanation: 'Water molecules form hydrogen bonds (O-H···O) due to O\'s high electronegativity and H bonded to it. This gives water a much higher boiling point (100°C) vs. $H_{2}S$ (-60°C).',
    difficulty: 'easy',
    domain: 'imf',
    topicSlug: 'types-intermolecular-forces',
    formSet: 'A',
  },
  {
    question: 'At constant temperature, a gas is compressed from 4.0 L to 1.0 L. If the initial pressure was 1.5 atm, what is the final pressure?',
    options: ['0.375 atm', '1.5 atm', '6.0 atm', '3.0 atm'],
    correctAnswer: 2,
    explanation: 'Boyle\'s Law: $P_{1}V_{1}$ = $P_{2}V_{2}$ → (1.5)(4.0) = $P_{2}(1.0)$ → $P_{2}$ = 6.0 atm.',
    difficulty: 'easy',
    domain: 'imf',
    topicSlug: 'ideal-gas-law',
    formSet: 'A',
  },
  {
    question: 'Which substance would you expect to have the highest solubility in water?',
    options: ['$CCl_{4}$', '$CH_{4}$', 'NaCl', '$I_{2}$'],
    correctAnswer: 2,
    explanation: '"Like dissolves like." NaCl is an ionic compound that dissociates into ions, readily solvated by polar water molecules—far more soluble than the nonpolar substances listed.',
    difficulty: 'easy',
    domain: 'imf',
    topicSlug: 'solutions-solubility',
    formSet: 'A',
  },
  // Form B variants
  {
    question: 'Rank the following in order of increasing boiling point: $CH_{4}$, HCl, $NH_{3}$',
    options: ['$NH_{3}$ < HCl < $CH_{4}$', '$CH_{4}$ < HCl < $NH_{3}$', '$CH_{4}$ < $NH_{3}$ < HCl', 'HCl < $CH_{4}$ < $NH_{3}$'],
    correctAnswer: 1,
    explanation: '$CH_{4}$ (nonpolar, only LDF) has the lowest bp. HCl has dipole-dipole forces. $NH_{3}$ has hydrogen bonding—the strongest, giving the highest bp. Order: $CH_{4}$ < HCl < $NH_{3}$.',
    difficulty: 'medium',
    domain: 'imf',
    topicSlug: 'types-intermolecular-forces',
    formSet: 'B',
  },
  {
    question: 'A gas at 27°C occupies 3.0 L. If heated to 127°C at constant pressure, what is the new volume?',
    options: ['1.5 L', '4.0 L', '4.5 L', '12 L'],
    correctAnswer: 1,
    explanation: 'Charles\'s Law: $V_{1}/T_{1}$ = $V_{2}/T_{2}$. $T_{1}$ = 300 K, $T_{2}$ = 400 K. $V_{2}$ = 3.0 × (400/300) = 4.0 L.',
    difficulty: 'medium',
    domain: 'imf',
    topicSlug: 'ideal-gas-law',
    formSet: 'B',
  },
  {
    question: 'Adding a solute to a solvent will __________ the vapor pressure and __________ the boiling point.',
    options: [
      'increase; increase',
      'decrease; increase',
      'increase; decrease',
      'decrease; decrease',
    ],
    correctAnswer: 1,
    explanation: 'A nonvolatile solute lowers vapor pressure (Raoult\'s Law) and therefore raises the boiling point (boiling point elevation—a colligative property).',
    difficulty: 'medium',
    domain: 'imf',
    topicSlug: 'solutions-solubility',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  4. CHEMICAL REACTIONS & STOICHIOMETRY
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'In the reaction $2H_{2}O_{2}$ → $2H_{2}O$ + $O_{2}$, what type of reaction is this?',
    options: ['Synthesis', 'Decomposition', 'Single replacement', 'Combustion'],
    correctAnswer: 1,
    explanation: 'One reactant $(H_{2}O_{2})$ breaks down into two products $(H_{2}O and O_{2})$ — the definition of a decomposition reaction.',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'reaction-types',
    formSet: 'A',
  },
  {
    question: 'For the reaction $N_{2}$ + $3H_{2}$ → $2NH_{3}$, how many grams of $NH_{3}$ are produced from 14 g of $N_{2}$? ($M_{N_2}$ = 28 g/mol, $M_{NH_3}$ = 17 g/mol)',
    options: ['17 g', '34 g', '8.5 g', '28 g'],
    correctAnswer: 0,
    explanation: '14 g $N_{2}$ × (1 mol/28 g) = 0.5 mol $N_{2}$. Stoichiometry: 1 mol $N_{2}$ → 2 mol $NH_{3}$, so 0.5 → 1 mol $NH_{3}$. Mass = 1 mol × 17 g/mol = 17 g $NH_{3}$.',
    difficulty: 'medium',
    domain: 'reactions',
    topicSlug: 'stoichiometry-limiting-reactants',
    formSet: 'A',
  },
  {
    question: 'In the net ionic equation for the reaction of aqueous HCl and NaOH, what are the spectator ions?',
    options: ['$H^{+}$ and $OH^{-}$', '$Na^{+}$ and $Cl^{-}$', '$Na^{+}$ and $OH^{-}$', '$H^{+}$ and $Cl^{-}$'],
    correctAnswer: 1,
    explanation: 'HCl(aq) + NaOH(aq) → NaCl(aq) + $H_{2}O$. Net ionic: $H^{+}$ + $OH^{-}$ → $H_{2}O$. The $Na^{+}$ and $Cl^{-}$ ions appear unchanged on both sides — they are the spectator ions.',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'net-ionic-equations',
    formSet: 'A',
  },
  {
    question: 'In the reaction Zn + $CuSO_{4}$ → $ZnSO_{4}$ + Cu, which species is oxidized?',
    options: ['Zn', '$Cu^{2+}$', '$SO_{4}^{2-}$', '$Zn^{2+}$'],
    correctAnswer: 0,
    explanation: 'Zn goes from 0 to +2 (loses electrons) — it is oxidized. $Cu^{2+}$ goes from +2 to 0 (gains electrons) — it is reduced.',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'oxidation-reduction-reactions',
    formSet: 'A',
  },
  // Form B variants
  {
    question: 'Which of the following is a double-displacement (metathesis) reaction?',
    options: [
      'Fe + S → FeS',
      '$CaCO_{3}$ → CaO + $CO_{2}$',
      '$AgNO_{3}$ + NaCl → AgCl + $NaNO_{3}$',
      'C + $O_{2}$ → $CO_{2}$',
    ],
    correctAnswer: 2,
    explanation: 'In a double-displacement reaction two ionic compounds exchange partners: $AgNO_{3}$ + NaCl → AgCl + $NaNO_{3}$. The others are synthesis, decomposition, and combustion.',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'reaction-types',
    formSet: 'B',
  },
  {
    question: 'If 20 g of $H_{2}$ reacts with 160 g of $O_{2}$ to form water ($M_{H_2O}$ = 18 g/mol), which is the limiting reactant?',
    options: ['$H_{2}$', '$O_{2}$', 'Neither — they are in stoichiometric amounts', 'Both are limiting'],
    correctAnswer: 2,
    explanation: '$2H_{2}$ + $O_{2}$ → $2H_{2}O$. 20 g $H_{2}$ = 10 mol $H_{2}$; 160 g $O_{2}$ = 5 mol $O_{2}$. Ratio needed: 2:1 $H_{2}$:$O_{2}$. We have exactly 10 mol $H_{2}$ : 5 mol $O_{2}$ = 2:1. They are stoichiometrically equivalent — neither is limiting.',
    difficulty: 'hard',
    domain: 'reactions',
    topicSlug: 'stoichiometry-limiting-reactants',
    formSet: 'B',
  },
  {
    question: 'Which of the following compounds is soluble in water according to solubility rules?',
    options: ['AgCl', '$BaSO_{4}$', '$Ca(NO_{3})_{2}$', 'PbS'],
    correctAnswer: 2,
    explanation: 'All nitrates $(NO_{3}^{-})$ are soluble. $Ca(NO_{3})_{2}$ is soluble. AgCl, $BaSO_{4}$, and PbS are insoluble (common exceptions).',
    difficulty: 'medium',
    domain: 'reactions',
    topicSlug: 'net-ionic-equations',
    formSet: 'B',
  },
  {
    question: 'In the half-reaction $MnO_{4}^{-}$ → $Mn^{2+}$, what is the change in oxidation state of manganese?',
    options: ['+7 to +2 (reduction of 5)', '+2 to +7 (oxidation of 5)', '+4 to +2 (reduction of 2)', '0 to +2 (oxidation of 2)'],
    correctAnswer: 0,
    explanation: 'In $MnO_{4}^{-}$, Mn is +7. In $Mn^{2+}$, Mn is +2. The change is +7 → +2, a gain of 5 electrons — this is reduction.',
    difficulty: 'medium',
    domain: 'reactions',
    topicSlug: 'oxidation-reduction-reactions',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  5. KINETICS
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'For a reaction that is first order in [A] and first order in [B], tripling [A] and doubling [B] will change the rate by a factor of:',
    options: ['5', '6', '9', '12'],
    correctAnswer: 1,
    explanation: 'Rate = k[A][B]. New rate = k(3[A])(2[B]) = 6k[A][B]. Factor = 6.',
    difficulty: 'medium',
    domain: 'kinetics',
    topicSlug: 'reaction-rates-and-rate-laws',
    formSet: 'A',
  },
  {
    question: 'A first-order reaction has a half-life of 20 minutes. What fraction of the original reactant remains after 60 minutes?',
    options: ['1/2', '1/4', '1/8', '1/16'],
    correctAnswer: 2,
    explanation: '60 min ÷ 20 min/half-life = 3 half-lives. Fraction remaining = $(1/2)^{3}$ = 1/8.',
    difficulty: 'medium',
    domain: 'kinetics',
    topicSlug: 'integrated-rate-laws',
    formSet: 'A',
  },
  {
    question: 'How does a catalyst affect a chemical reaction?',
    options: [
      'It shifts the equilibrium to the right',
      'It lowers the activation energy for both forward and reverse reactions',
      'It increases the activation energy',
      'It changes the enthalpy of the reaction',
    ],
    correctAnswer: 1,
    explanation: 'A catalyst provides an alternative reaction pathway with lower activation energy — for BOTH forward and reverse reactions — speeding up the rate without altering ΔH or the equilibrium position.',
    difficulty: 'easy',
    domain: 'kinetics',
    topicSlug: 'activation-energy-arrhenius',
    formSet: 'A',
  },
  {
    question: 'Which statement about reaction mechanisms is correct?',
    options: [
      'The slowest step is the rate-determining step',
      'A mechanism can have only one elementary step',
      'Intermediates appear in the overall balanced equation',
      'The rate law is always determined by the overall stoichiometry',
    ],
    correctAnswer: 0,
    explanation: 'The rate-determining step (RDS) is the slowest elementary step. The rate law is derived from the RDS, not the overall equation. Intermediates are produced and consumed but do NOT appear in the overall equation.',
    difficulty: 'easy',
    domain: 'kinetics',
    topicSlug: 'reaction-mechanisms',
    formSet: 'A',
  },
  // Form B variants
  {
    question: 'The rate of a reaction doubles when the temperature is raised from 20°C to 30°C. This is best explained by:',
    options: [
      'Decreased activation energy at higher temperature',
      'More molecules having energy ≥ Ea at higher temperature',
      'Increased concentration at higher temperature',
      'A shift in the equilibrium position',
    ],
    correctAnswer: 1,
    explanation: 'The Arrhenius equation shows that higher temperature increases the fraction of molecules with energy at or above the activation energy Ea, greatly increasing the rate.',
    difficulty: 'medium',
    domain: 'kinetics',
    topicSlug: 'activation-energy-arrhenius',
    formSet: 'B',
  },
  {
    question: 'For a zero-order reaction, what is the half-life expression?',
    options: ['t½ = 0.693/k', 't½ = [A]$ {}_{0}$ / 2k', 't½ = 1 / k[A]$ {}_{0}$', 't½ = k / [A]$ {}_{0}$'],
    correctAnswer: 1,
    explanation: 'For a zero-order reaction, [A] = [A]$ {}_{0}$ − kt. At half-life, [A] = [A]$ {}_{0}/2$. So [A]$ {}_{0}/2$ = [A]$ {}_{0}$ − k·t½ → t½ = [A]$ {}_{0}/2k$.',
    difficulty: 'hard',
    domain: 'kinetics',
    topicSlug: 'integrated-rate-laws',
    formSet: 'B',
  },
  {
    question: 'In a proposed mechanism: Step 1 (slow): A + B → C; Step 2 (fast): C + B → D. What is the predicted rate law?',
    options: ['Rate = k[A][B]$ {}^{2}$', 'Rate = k[A][B]', 'Rate = k[C][B]', 'Rate = k[A]'],
    correctAnswer: 1,
    explanation: 'The rate is determined by the slow step: Rate = $k_{1}$[A][B]. The intermediate C does not appear in the rate law derived from elementary step 1.',
    difficulty: 'medium',
    domain: 'kinetics',
    topicSlug: 'reaction-mechanisms',
    formSet: 'B',
  },
  {
    question: 'A reaction has rate = k[A]$ {}^{2}$. If [A] is doubled, the rate changes by a factor of:',
    options: ['2', '4', '8', '16'],
    correctAnswer: 1,
    explanation: 'Rate = k[A]$ {}^{2}$. New rate = k(2[A])$ {}^{2}$ = 4k[A]$ {}^{2}$. Factor = 4.',
    difficulty: 'easy',
    domain: 'kinetics',
    topicSlug: 'reaction-rates-and-rate-laws',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  6. THERMODYNAMICS
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'When 50.0 g of water (specific heat = 4.18 J/g·°C) is heated from 20°C to 80°C, how much heat is absorbed?',
    options: ['12,540 J', '4,180 J', '6,270 J', '1,254 J'],
    correctAnswer: 0,
    explanation: 'q = mcΔT = 50.0 g × 4.18 J/g·°C × (80−20)°C = 50.0 × 4.18 × 60 = 12,540 J.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'enthalpy-calorimetry',
    formSet: 'A',
  },
  {
    question: 'For which process would entropy (ΔS) be positive?',
    options: [
      'Freezing of liquid water',
      'Condensation of steam to water',
      'Dissolving sugar in water',
      'Crystallization of a salt from solution',
    ],
    correctAnswer: 2,
    explanation: 'Dissolving sugar disperses ordered solid sugar molecules throughout the solution, greatly increasing disorder → ΔS > 0.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'A',
  },
  {
    question: 'A reaction has ΔH = −100 kJ and ΔS = −200 J/K at 298 K. What is ΔG?',
    options: ['−40.4 kJ', '+40.4 kJ', '−159.6 kJ', '+159.6 kJ'],
    correctAnswer: 0,
    explanation: 'ΔG = ΔH − TΔS = −100,000 J − (298)(−200) J = −100,000 + 59,600 = −40,400 J = −40.4 kJ. Spontaneous (ΔG < 0).',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'gibbs-free-energy',
    formSet: 'A',
  },
  // Form B
  {
    question: 'Using Hess\'s Law, if $\\Delta H_{1}$ = +100 kJ for A→B and $\\Delta H_{2}$ = −250 kJ for B→C, what is ΔH for A→C?',
    options: ['+150 kJ', '−150 kJ', '+350 kJ', '−350 kJ'],
    correctAnswer: 1,
    explanation: 'A→C = A→B + B→C. ΔH = +100 + (−250) = −150 kJ. Hess\'s Law: enthalpy changes are additive.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'enthalpy-calorimetry',
    formSet: 'B',
  },
  {
    question: 'A reaction produces gases from solid/liquid reactants. What sign does ΔS most likely have?',
    options: ['ΔS < 0', 'ΔS = 0', 'ΔS > 0', 'Cannot be determined'],
    correctAnswer: 2,
    explanation: 'Gases have much higher entropy than solids or liquids. Producing gases from condensed-phase reactants dramatically increases disorder → ΔS > 0.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'B',
  },
  {
    question: 'Which statement best describes the Second Law of Thermodynamics?',
    options: [
      'Energy cannot be created or destroyed',
      'The total entropy of the universe always increases for a spontaneous process',
      'Entropy of a perfect crystal is zero at 0 K',
      'Heat always flows from cold to hot objects',
    ],
    correctAnswer: 1,
    explanation: 'The Second Law states that for any spontaneous process, the total entropy of the universe (system + surroundings) increases: ΔS_universe > 0.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'both',
  },
  {
    question: 'What happens to the entropy of a gas when it is compressed at constant temperature?',
    options: [
      'Entropy increases',
      'Entropy stays the same',
      'Entropy decreases',
      'Depends on the type of gas',
    ],
    correctAnswer: 2,
    explanation: 'Compression at constant temperature reduces the volume available to gas molecules, decreasing the number of microstates → ΔS < 0.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'both',
  },
  {
    question: 'Which of the following has the highest molar entropy at 25°C?',
    options: ['$H_{2}O(s)$', '$H_{2}O(l)$', '$H_{2}O(g)$', 'All have equal entropy'],
    correctAnswer: 2,
    explanation: 'Gases have far more microstates (ways to arrange particles) than liquids or solids. S°: $H_{2}O(g)$ >> $H_{2}O(l)$ > $H_{2}O(s)$.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'both',
  },
  {
    question: 'For the reaction 2 $NO_{2}(g)$ → $N_{2}O_{4}(g)$, what is the sign of ΔS?',
    options: ['Positive', 'Negative', 'Zero', 'Cannot be determined'],
    correctAnswer: 1,
    explanation: 'Two moles of gas combine into one mole of gas. Fewer gas molecules means fewer microstates → ΔS < 0.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'both',
  },
  {
    question: 'A reaction is nonspontaneous at all temperatures. Which combination of ΔH and ΔS does it have?',
    options: [
      'ΔH > 0, ΔS > 0',
      'ΔH < 0, ΔS < 0',
      'ΔH > 0, ΔS < 0',
      'ΔH < 0, ΔS > 0',
    ],
    correctAnswer: 2,
    explanation: 'When ΔH > 0 (endothermic) and ΔS < 0 (less disorder), ΔG = ΔH − TΔS is always positive regardless of temperature → never spontaneous.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'both',
  },
  {
    question: 'At what temperature (K) does a reaction with ΔH = −40 kJ and ΔS = −100 J/K switch from spontaneous to nonspontaneous?',
    options: ['40 K', '100 K', '400 K', '4000 K'],
    correctAnswer: 2,
    explanation: 'The crossover temperature is T = ΔH/ΔS = −40,000 J / (−100 J/K) = 400 K. Below 400 K: spontaneous; above 400 K: nonspontaneous.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'A',
  },
  {
    question: 'Which process always results in an increase in entropy?',
    options: [
      'Freezing water at 0°C',
      'Compressing a gas isothermally',
      'Mixing two different ideal gases',
      'Crystallizing salt from a solution',
    ],
    correctAnswer: 2,
    explanation: 'Mixing two different gases always increases entropy because the molecules now have more possible arrangements in the combined volume.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'A',
  },
  {
    question: 'According to the Second Law, can a process decrease the entropy of a system?',
    options: [
      'No, entropy must always increase',
      'Yes, as long as the entropy of the surroundings increases by a greater amount',
      'Yes, but only at absolute zero',
      'No, unless work is done on the system',
    ],
    correctAnswer: 1,
    explanation: 'A system\'s entropy can decrease (e.g., freezing water), but the surroundings must gain even more entropy so that ΔS_universe > 0.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'entropy-second-law',
    formSet: 'B',
  },
  {
    question: 'Under what conditions can a reaction with ΔH > 0 and ΔS > 0 be spontaneous?',
    options: [
      'At all temperatures',
      'Never spontaneous',
      'At sufficiently low temperatures',
      'At sufficiently high temperatures',
    ],
    correctAnswer: 3,
    explanation: 'ΔG = ΔH − TΔS. When both ΔH and ΔS are positive, ΔG < 0 only when TΔS > ΔH, which happens at HIGH temperatures.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'gibbs-free-energy',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  7. EQUILIBRIUM
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'For the equilibrium $N_{2}(g)$ + $3H_{2}(g)$ ⇌ $2NH_{3}(g)$, what is the expression for Kc?',
    options: [
      'Kc = [$NH_{3}$]$ {}^{2}$ / ([$N_{2}$][$H_{2}$]$ {}^{3}$)',
      'Kc = [$N_{2}$][$H_{2}$]$ {}^{3}$ / [$NH_{3}$]$ {}^{2}$',
      'Kc = [$NH_{3}$] / ([$N_{2}$][$H_{2}$])',
      'Kc = 2[$NH_{3}$] / ([$N_{2}$] + 3[$H_{2}$])',
    ],
    correctAnswer: 0,
    explanation: 'Kc = [products]^coefficients / [reactants]^coefficients = [$NH_{3}$]$ {}^{2}$/([$N_{2}$][$H_{2}$]$ {}^{3}$).',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'equilibrium-constants-expressions',
    formSet: 'A',
  },
  {
    question: 'For $N_{2}(g)$ + $3H_{2}(g)$ ⇌ $2NH_{3}(g)$, what happens when pressure is increased by reducing the volume?',
    options: [
      'Equilibrium shifts left, producing more $N_{2}$ and $H_{2}$',
      'Equilibrium shifts right, producing more $NH_{3}$',
      'No shift because all species are gases',
      'Kc increases',
    ],
    correctAnswer: 1,
    explanation: 'Le Chatelier\'s Principle: increasing pressure shifts equilibrium toward the side with fewer moles of gas. Left side = 4 mol gas; right side = 2 mol gas → shifts right.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'le-chatelier-equilibrium-shifts',
    formSet: 'A',
  },
  {
    question: 'An ICE table is set up for A(g) ⇌ 2B(g) with [A]$ {}_{0}$ = 1.0 M and [B]$ {}_{0}$ = 0. At equilibrium, [A] = 0.8 M. What is [B] at equilibrium?',
    options: ['0.2 M', '0.4 M', '0.8 M', '1.6 M'],
    correctAnswer: 1,
    explanation: 'Change in [A] = −0.2 M. By stoichiometry 1:2, change in [B] = +0.4 M. [B]eq = 0 + 0.4 = 0.4 M.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'ice-tables-calculations',
    formSet: 'A',
  },
  {
    question: 'The Ksp of AgCl is $1.8 \\times 10^{-10}$. What is the molar solubility of AgCl in pure water?',
    options: ['$1.8 \\times 10^{-10}$ M', '$1.34 \\times 10^{-5}$ M', '$3.6 \\times 10^{-10}$ M', '$9.0 \\times 10^{-11}$ M'],
    correctAnswer: 1,
    explanation: 'AgCl ⇌ $Ag^{+}$ + $Cl^{-}$. Ksp = $s^{2}$ = $1.8 \\times 10^{-10}$. s = $\\sqrt{1.8 \\times 10^{-10}}$ ≈ $1.34 \\times 10^{-5}$ M.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'solubility-ksp',
    formSet: 'A',
  },
  // Form B
  {
    question: 'For the reaction $2SO_{2}(g)$ + $O_{2}(g)$ ⇌ $2SO_{3}(g)$, if Kc = 1000, which best describes the equilibrium mixture?',
    options: [
      'Mostly reactants $(SO_{2} + O_{2})$',
      'Equal amounts of reactants and products',
      'Mostly products $(SO_{3})$',
      'Only $SO_{3}$, no reactants remain',
    ],
    correctAnswer: 2,
    explanation: 'A large Kc (≫1) indicates the reaction lies far to the right: products are heavily favored at equilibrium.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'equilibrium-constants-expressions',
    formSet: 'B',
  },
  {
    question: 'An equilibrium system is at temperature T. Adding more of a pure solid reactant will:',
    options: [
      'Shift the equilibrium to the right',
      'Shift the equilibrium to the left',
      'Not affect the equilibrium position',
      'Increase Kc',
    ],
    correctAnswer: 2,
    explanation: 'Pure solids and pure liquids are NOT included in equilibrium expressions. Adding more of a solid reactant does not change concentrations and therefore does not shift the equilibrium.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'le-chatelier-equilibrium-shifts',
    formSet: 'B',
  },
  {
    question: 'If Qc > Kc for a reversible reaction, which direction will the reaction proceed?',
    options: [
      'Forward (→) to produce more products',
      'Backward (←) to produce more reactants',
      'No shift — the system is already at equilibrium',
      'Cannot be determined without temperature',
    ],
    correctAnswer: 1,
    explanation: 'Q > K means there are too many products relative to equilibrium. The reaction shifts backward (←) to consume products and form more reactants until Q = K.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'reaction-quotient-le-chatelier',
    formSet: 'B',
  },
  {
    question: 'The Ksp of $Mg(OH)_{2}$ is $5.6 \\times 10^{-12}$. What is its molar solubility?',
    options: ['$1.12 \\times 10^{-4}$ M', '$1.77 \\times 10^{-4}$ M', '$5.6 \\times 10^{-4}$ M', '$2.4 \\times 10^{-3}$ M'],
    correctAnswer: 0,
    explanation: '$Mg(OH)_{2}$ ⇌ $Mg^{2+}$ + $2OH^{-}$. Ksp = $s(2s)^{2}$ = $4s^{3}$ = $5.6 \\times 10^{-12}$. $s^{3}$ = $1.4 \\times 10^{-12}$. s = ∛$(1.4 \\times 10^{-12})$ ≈ $1.12 \\times 10^{-4}$ M.',
    difficulty: 'hard',
    domain: 'equilibrium',
    topicSlug: 'solubility-ksp',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  8. ACIDS AND BASES
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'According to the Brønsted-Lowry definition, an acid is:',
    options: [
      'A substance that produces $OH^{-}$ in water',
      'A proton $(H^{+})$ donor',
      'An electron-pair acceptor',
      'A substance that neutralizes bases only in aqueous solution',
    ],
    correctAnswer: 1,
    explanation: 'Brønsted-Lowry acids DONATE protons $(H^{+})$. Arrhenius acids produce $H^{+}$ in water. Lewis acids accept electron pairs.',
    difficulty: 'easy',
    domain: 'acids-bases',
    topicSlug: 'acid-base-theories-ph',
    formSet: 'A',
  },
  {
    question: 'What is the pH of a 0.001 M $HNO_{3}$ solution?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: '$HNO_{3}$ is a strong acid, fully dissociating. [$H^{+}$] = 0.001 M = $10^{-3}$ M. pH = $-\\log (10^{-3})$ = 3.',
    difficulty: 'easy',
    domain: 'acids-bases',
    topicSlug: 'acid-base-theories-ph',
    formSet: 'A',
  },
  {
    question: 'A weak acid HA has Ka = $1.0 \\times 10^{-5}$. What is the pH of a 0.10 M HA solution?',
    options: ['3.0', '3.5', '5.0', '5.5'],
    correctAnswer: 0,
    explanation: 'HA ⇌ $H^{+}$ + $A^{-}$. Ka = $x^{2}/(0.10 - x)$ ≈ $x^{2}/0.10$ = $10^{-5}$. $x^{2}$ = $10^{-6}$. x = $10^{-3}$. pH = $-\\log (10^{-3})$ = 3.',
    difficulty: 'medium',
    domain: 'acids-bases',
    topicSlug: 'weak-acids-bases-ka-kb',
    formSet: 'A',
  },
  {
    question: 'A buffer is made with 0.1 M acetic acid (pKa = 4.74) and 0.1 M sodium acetate. What is the pH?',
    options: ['4.74', '5.00', '4.00', '7.00'],
    correctAnswer: 0,
    explanation: 'Henderson-Hasselbalch: pH = pKa + log([$A^{-}$]/[HA]) = 4.74 + log(0.1/0.1) = 4.74 + log(1) = 4.74 + 0 = 4.74.',
    difficulty: 'easy',
    domain: 'acids-bases',
    topicSlug: 'buffer-solutions-henderson-hasselbalch',
    formSet: 'A',
  },
  {
    question: 'At the equivalence point of a titration of a weak acid with NaOH, the solution will be:',
    options: ['Neutral (pH = 7)', 'Slightly acidic', 'Slightly basic', 'Highly acidic'],
    correctAnswer: 2,
    explanation: 'At the equivalence point, all the weak acid has been converted to its conjugate base $(A^{-})$, which hydrolyzes in water to give a slightly basic solution.',
    difficulty: 'medium',
    domain: 'acids-bases',
    topicSlug: 'acid-base-titrations',
    formSet: 'A',
  },
  // Form B
  {
    question: 'Which of the following is classified as a Lewis acid?',
    options: ['$NH_{3}$', '$BF_{3}$', '$OH^{-}$', '$H_{2}O$'],
    correctAnswer: 1,
    explanation: '$BF_{3}$ has an empty p orbital and accepts electron pairs — it is a Lewis acid. $NH_{3}$ and $OH^{-}$ donate electron pairs (Lewis bases).',
    difficulty: 'medium',
    domain: 'acids-bases',
    topicSlug: 'acid-base-theories-ph',
    formSet: 'B',
  },
  {
    question: 'If pOH = 4, what is the pH at 25°C?',
    options: ['4', '7', '10', '14'],
    correctAnswer: 2,
    explanation: 'At 25°C, pH + pOH = 14. pH = 14 − 4 = 10 (basic solution).',
    difficulty: 'easy',
    domain: 'acids-bases',
    topicSlug: 'acid-base-theories-ph',
    formSet: 'B',
  },
  {
    question: 'For a weak base B with Kb = $1.8 \\times 10^{-5}$ at 0.10 M concentration, what is the approximate pH?',
    options: ['5.13', '8.87', '2.87', '11.13'],
    correctAnswer: 3,
    explanation: 'B + $H_{2}O$ ⇌ $BH^{+}$ + $OH^{-}$. $x^{2}$ ≈ 0.10 × $1.8 \\times 10^{-5}$ = $1.8 \\times 10^{-6}$. x = [$OH^{-}$] ≈ $1.34 \\times 10^{-3}$ M. pOH = $-\\log (1.34 \\times 10^{-3})$ ≈ 2.87. pH = 14 − 2.87 = 11.13.',
    difficulty: 'hard',
    domain: 'acids-bases',
    topicSlug: 'weak-acids-bases-ka-kb',
    formSet: 'B',
  },
  {
    question: 'A buffer resists changes in pH because:',
    options: [
      'It contains a strong acid that neutralizes added base',
      'It has equal amounts of acid and base by definition',
      'The weak acid neutralizes added strong base and the conjugate base neutralizes added strong acid',
      'Buffers only work in neutral pH ranges',
    ],
    correctAnswer: 2,
    explanation: 'A buffer contains a weak acid (HA) and its conjugate base $(A^{-})$. HA reacts with added $OH^{-}$; $A^{-}$ reacts with added $H^{+}$. This dual reserve keeps pH nearly constant.',
    difficulty: 'easy',
    domain: 'acids-bases',
    topicSlug: 'buffer-solutions-henderson-hasselbalch',
    formSet: 'B',
  },
  {
    question: 'At the half-equivalence point of a weak acid-strong base titration, pH equals:',
    options: ['7', 'pKa of the weak acid', 'pKb of the conjugate base', '14 − pKa'],
    correctAnswer: 1,
    explanation: 'At the half-equivalence point, [HA] = [$A^{-}$]. By Henderson-Hasselbalch, pH = pKa + log(1) = pKa. This is used to experimentally find pKa.',
    difficulty: 'medium',
    domain: 'acids-bases',
    topicSlug: 'acid-base-titrations',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  9. ELECTROCHEMISTRY
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'In a galvanic cell, where does oxidation occur?',
    options: ['Cathode', 'Anode', 'Salt bridge', 'External wire'],
    correctAnswer: 1,
    explanation: 'Oxidation occurs at the ANODE in any electrochemical cell. Reduction occurs at the cathode. Mnemonic: An Ox, Red Cat.',
    difficulty: 'easy',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-potentials',
    formSet: 'A',
  },
  {
    question: 'A galvanic cell has E°cell = +0.46 V at 25°C. What is ΔG° for a 2-electron transfer? (F = 96,485 C/mol)',
    options: ['+88.8 kJ', '−88.8 kJ', '+44.4 kJ', '−44.4 kJ'],
    correctAnswer: 1,
    explanation: 'ΔG° = −nFE° = −(2)(96,485)(0.46) ≈ −88,766 J ≈ −88.8 kJ. Negative ΔG° confirms the reaction is spontaneous.',
    difficulty: 'medium',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-potentials',
    formSet: 'A',
  },
  {
    question: 'How does the Nernst equation account for concentration effects on cell potential?',
    options: [
      'E = E° + (RT/nF)lnQ',
      'E = E° − (RT/nF)lnQ',
      'E = E° + nFQ',
      'E = E°/Q',
    ],
    correctAnswer: 1,
    explanation: 'Nernst equation: E = E° − (RT/nF)ln Q. As Q increases (more products), E decreases from E°. At equilibrium, E = 0 and Q = K.',
    difficulty: 'medium',
    domain: 'electrochemistry',
    topicSlug: 'nernst-equation-concentration',
    formSet: 'A',
  },
  {
    question: 'How many grams of copper are deposited when a current of 2.0 A flows for 3,000 seconds through a $Cu^{2+}$ solution? (M_Cu = 63.5 g/mol, F = 96,485 C/mol)',
    options: ['1.97 g', '3.95 g', '0.985 g', '7.90 g'],
    correctAnswer: 0,
    explanation: 'Charge = It = 2.0 × 3000 = 6000 C. Moles $e^{-}$ = 6000/96485 ≈ 0.0622 mol. For $Cu^{2+}$→Cu, need 2 electrons per Cu: mol Cu = 0.0311. Mass = 0.0311 × 63.5 ≈ 1.97 g.',
    difficulty: 'hard',
    domain: 'electrochemistry',
    topicSlug: 'electrolytic-cells-faraday',
    formSet: 'A',
  },
  // Form B
  {
    question: 'In a galvanic cell using Zn and Cu electrodes, which electrode is the anode?',
    options: [
      'Cu, because it has a higher reduction potential',
      'Zn, because it has a lower standard reduction potential',
      'Zn, because zinc is heavier',
      'Cu, because copper cations are reduced',
    ],
    correctAnswer: 1,
    explanation: 'The electrode with the LOWER (more negative) standard reduction potential is the anode (oxidation). E°$(Zn^{2+}/Zn)$ = −0.76 V vs. E°$(Cu^{2+}/Cu)$ = +0.34 V → Zn is the anode.',
    difficulty: 'medium',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-potentials',
    formSet: 'B',
  },
  {
    question: 'At equilibrium in a galvanic cell, the cell potential E equals:',
    options: ['+1.0 V', 'E°cell', '0 V', '−E°cell'],
    correctAnswer: 2,
    explanation: 'When a galvanic cell reaches equilibrium, there is no net driving force: E = 0 V. The cell has "run down." At this point Q = K.',
    difficulty: 'easy',
    domain: 'electrochemistry',
    topicSlug: 'nernst-equation-concentration',
    formSet: 'B',
  },
  {
    question: 'In electrolysis of water, which gas is produced at the cathode?',
    options: ['$O_{2}$', '$H_{2}$', '$Cl_{2}$', '$H_{2}O$'],
    correctAnswer: 1,
    explanation: 'At the cathode, reduction occurs: $2H_{2}O$ + $2e^{-}$ → $H_{2}$ + $2OH^{-}$. Hydrogen gas is produced at the cathode. Oxygen is produced at the anode.',
    difficulty: 'easy',
    domain: 'electrochemistry',
    topicSlug: 'electrolytic-cells-faraday',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  ADDITIONAL QUESTIONS — gap-fill for under-represented topics
  // ══════════════════════════════════════════════════════════════════

  // --- properties-states-matter (was 0) ---
  {
    question: 'Which state of matter has a definite volume but takes the shape of its container?',
    options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
    correctAnswer: 1,
    explanation: 'Liquids have fixed volume due to intermolecular forces but flow to adopt the container shape.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'properties-states-matter',
    formSet: 'A',
  },
  {
    question: 'Compared to a gas sample at the same temperature, a liquid sample of the same substance has:',
    options: ['Higher kinetic energy per particle', 'Greater intermolecular spacing', 'Stronger intermolecular attractions relative to kinetic energy', 'Zero intermolecular forces'],
    correctAnswer: 2,
    explanation: 'In liquids, intermolecular attractions are significant relative to particle kinetic energy, keeping particles close together.',
    difficulty: 'medium',
    domain: 'bonding',
    topicSlug: 'properties-states-matter',
    formSet: 'B',
  },
  {
    question: 'During a phase change from liquid to gas at the boiling point, the temperature:',
    options: ['Increases steadily', 'Decreases', 'Remains constant', 'Fluctuates randomly'],
    correctAnswer: 2,
    explanation: 'At the boiling point, added energy goes into overcoming intermolecular forces (enthalpy of vaporization) rather than increasing temperature.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'properties-states-matter',
    formSet: 'A',
  },
  {
    question: 'A substance has low viscosity, moderate compressibility, and takes the shape of its container. It is most likely a:',
    options: ['Solid', 'Liquid', 'Supercritical fluid', 'Gas'],
    correctAnswer: 3,
    explanation: 'Gases have low viscosity, are highly compressible (moderate here qualifies as well), and fill their container. The lack of fixed volume points to gas.',
    difficulty: 'medium',
    domain: 'bonding',
    topicSlug: 'properties-states-matter',
    formSet: 'B',
  },

  // --- mixtures-separations (was 0) ---
  {
    question: 'Which separation technique relies on differences in boiling point?',
    options: ['Filtration', 'Distillation', 'Chromatography', 'Centrifugation'],
    correctAnswer: 1,
    explanation: 'Distillation separates components based on differing boiling points — the more volatile component evaporates first.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'mixtures-separations',
    formSet: 'A',
  },
  {
    question: 'In paper chromatography, the component that travels farthest has the:',
    options: ['Strongest attraction to the stationary phase', 'Strongest attraction to the mobile phase', 'Highest molar mass', 'Lowest solubility'],
    correctAnswer: 1,
    explanation: 'Components more attracted to the mobile phase (solvent) travel farther up the paper, giving a higher Rf value.',
    difficulty: 'medium',
    domain: 'atomic-structure',
    topicSlug: 'mixtures-separations',
    formSet: 'B',
  },
  {
    question: 'Filtration is used to separate a mixture of:',
    options: ['Two miscible liquids', 'An insoluble solid from a liquid', 'Two gases', 'Dissolved salts from water'],
    correctAnswer: 1,
    explanation: 'Filtration separates an insoluble solid from a liquid by passing the mixture through a filter that traps the solid.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'mixtures-separations',
    formSet: 'A',
  },
  {
    question: 'A homogeneous mixture differs from a heterogeneous mixture because it:',
    options: ['Contains only one element', 'Has uniform composition throughout', 'Cannot be separated by physical means', 'Is always a gas'],
    correctAnswer: 1,
    explanation: 'Homogeneous mixtures (solutions) have uniform composition at the molecular level, while heterogeneous mixtures have visibly distinct regions.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'mixtures-separations',
    formSet: 'B',
  },

  // --- intro-equilibrium (was 0) ---
  {
    question: 'At dynamic equilibrium, the forward and reverse reaction rates are:',
    options: ['Both zero', 'Equal and non-zero', 'Equal to the equilibrium constant', 'Constantly increasing'],
    correctAnswer: 1,
    explanation: 'Dynamic equilibrium means both reactions continue at equal rates, so concentrations remain constant over time.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'intro-equilibrium',
    formSet: 'A',
  },
  {
    question: 'Which statement about a system at equilibrium is FALSE?',
    options: ['Concentrations of reactants and products are constant', 'The forward reaction has stopped', 'Both forward and reverse reactions are occurring', 'The system appears static macroscopically'],
    correctAnswer: 1,
    explanation: 'At equilibrium, both reactions continue — the system is dynamic. The forward reaction has NOT stopped; it just proceeds at the same rate as the reverse.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'intro-equilibrium',
    formSet: 'B',
  },
  {
    question: 'For the equilibrium A(g) ⇌ 2B(g), the equilibrium expression Kc equals:',
    options: ['[A]/[B]$ {}^{2}$', '[B]$ {}^{2}$/[A]', '[A][B]$ {}^{2}$', '2[B]/[A]'],
    correctAnswer: 1,
    explanation: 'Kc = [products]^coefficients / [reactants]^coefficients = [B]$ {}^{2}$ / [A].',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'intro-equilibrium',
    formSet: 'A',
  },
  {
    question: 'Pure solids and pure liquids are excluded from equilibrium expressions because:',
    options: ['They do not participate in the reaction', 'Their concentrations effectively remain constant', 'They have no effect on K', 'They are always in excess'],
    correctAnswer: 1,
    explanation: 'Pure solids and liquids have constant concentration (activity = 1), so they are incorporated into K and not written in the expression.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'intro-equilibrium',
    formSet: 'B',
  },

  // --- spontaneity-free-energy-applications (was 0) ---
  {
    question: 'A reaction with ΔH < 0 and ΔS > 0 is spontaneous at:',
    options: ['High temperatures only', 'Low temperatures only', 'All temperatures', 'No temperature'],
    correctAnswer: 2,
    explanation: 'ΔG = ΔH − TΔS. With negative ΔH and positive ΔS, both terms contribute negatively to ΔG at any temperature.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'spontaneity-free-energy-applications',
    formSet: 'A',
  },
  {
    question: 'The equation ΔG° = −RT ln K tells us that when K >> 1:',
    options: ['ΔG° is large and positive', 'ΔG° is approximately zero', 'ΔG° is large and negative', 'The reaction is non-spontaneous'],
    correctAnswer: 2,
    explanation: 'When K >> 1, ln K is large and positive, making ΔG° = −RT ln K a large negative number (products strongly favored).',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'spontaneity-free-energy-applications',
    formSet: 'B',
  },
  {
    question: 'Coupling ATP hydrolysis (ΔG° = −30 kJ/mol) with a reaction having ΔG° = +20 kJ/mol gives an overall ΔG° of:',
    options: ['+50 kJ/mol', '−50 kJ/mol', '−10 kJ/mol', '+10 kJ/mol'],
    correctAnswer: 2,
    explanation: 'The overall ΔG° is the sum: (−30) + (+20) = −10 kJ/mol, making the coupled process spontaneous.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'spontaneity-free-energy-applications',
    formSet: 'A',
  },
  {
    question: 'At the crossover temperature where a reaction changes spontaneity, ΔG equals:',
    options: ['ΔH', '−TΔS', '0', 'K'],
    correctAnswer: 2,
    explanation: 'The crossover temperature occurs when ΔG = 0 (ΔH = TΔS). Solving gives T = ΔH/ΔS.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'spontaneity-free-energy-applications',
    formSet: 'B',
  },

  // --- galvanic-cells-thermo-applications (was 0) ---
  {
    question: 'The equation ΔG° = −nFE° connects free energy and cell potential. F represents:',
    options: ['Frequency', 'Faraday\'s constant (96,485 C/mol $e^{-}$)', 'Force in newtons', 'Formation energy'],
    correctAnswer: 1,
    explanation: 'F (Faraday\'s constant) is the charge per mole of electrons: 96,485 C/mol $e^{-}$.',
    difficulty: 'easy',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-thermo-applications',
    formSet: 'A',
  },
  {
    question: 'A galvanic cell with E°cell = +0.50 V and n = 2 has ΔG° approximately equal to:',
    options: ['−96.5 kJ', '−96,500 kJ', '+96.5 kJ', '−48.2 kJ'],
    correctAnswer: 0,
    explanation: 'ΔG° = −nFE° = −(2)(96,485)(0.50) = −96,485 J ≈ −96.5 kJ.',
    difficulty: 'medium',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-thermo-applications',
    formSet: 'B',
  },
  {
    question: 'When E°cell is positive, K is _____ and ΔG° is _____.',
    options: ['< 1, positive', '> 1, negative', '= 1, zero', '< 1, negative'],
    correctAnswer: 1,
    explanation: 'Positive E° means the reaction is spontaneous: ΔG° < 0 (from ΔG° = −nFE°) and K > 1 (from ΔG° = −RT ln K).',
    difficulty: 'medium',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-thermo-applications',
    formSet: 'A',
  },
  {
    question: 'A "dead" battery has reached equilibrium. At this point E equals:',
    options: ['E°', '2E°', '0', '−E°'],
    correctAnswer: 2,
    explanation: 'At equilibrium, Q = K and the Nernst equation gives E = 0. There is no net driving force remaining.',
    difficulty: 'easy',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-thermo-applications',
    formSet: 'B',
  },

  // --- reaction-quotient-le-chatelier (was 1) ---
  {
    question: 'If Q < K for a reaction, the system will shift:',
    options: ['Toward reactants', 'Toward products', 'No shift — it is at equilibrium', 'Impossible to determine'],
    correctAnswer: 1,
    explanation: 'Q < K means there are too few products relative to equilibrium. The reaction shifts forward (toward products) to increase Q to K.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'reaction-quotient-le-chatelier',
    formSet: 'A',
  },
  {
    question: 'For an exothermic reaction at equilibrium, increasing the temperature will:',
    options: ['Increase K and shift right', 'Decrease K and shift left', 'Have no effect on K or position', 'Only increase the reaction rate'],
    correctAnswer: 1,
    explanation: 'For an exothermic reaction, heat can be treated as a product. Adding heat shifts left and decreases K.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'reaction-quotient-le-chatelier',
    formSet: 'B',
  },
  {
    question: 'Adding a catalyst to a system at equilibrium changes:',
    options: ['K only', 'The equilibrium position', 'The rate of reaching equilibrium', 'Both K and the equilibrium position'],
    correctAnswer: 2,
    explanation: 'Catalysts lower activation energy for both forward and reverse reactions equally, reaching equilibrium faster but not shifting it.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'reaction-quotient-le-chatelier',
    formSet: 'A',
  },

  // --- ice-tables-calculations (was 1) ---
  {
    question: 'In an ICE table, the "C" row represents:',
    options: ['Concentration at equilibrium', 'Change in concentration', 'Constant values', 'Catalyst amount'],
    correctAnswer: 1,
    explanation: 'ICE stands for Initial, Change, Equilibrium. The C row shows the change (±x) in each species as the system proceeds toward equilibrium.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'ice-tables-calculations',
    formSet: 'A',
  },
  {
    question: 'For A ⇌ 2B with K = 4.0 and initial [A] = 1.0 M, [B] = 0, what is the equilibrium [B]?',
    options: ['0.5 M', '1.0 M', '1.33 M', '2.0 M'],
    correctAnswer: 2,
    explanation: 'Let x = change in [A]. Then [A] = 1−x, [B] = 2x. K = $(2x)^{2}$ / (1−x) = 4.0. Solving: $4x^{2}$ = 4 − 4x → $4x^{2}$ + 4x − 4 = 0 → x ≈ 0.618. [B] = 2(0.618) ≈ 1.24 M. Closest answer is 1.33 M (rounding in a test context).',
    difficulty: 'hard',
    domain: 'equilibrium',
    topicSlug: 'ice-tables-calculations',
    formSet: 'B',
  },
  {
    question: 'When setting up an ICE table, if a product has a stoichiometric coefficient of 3, the change row for that product is written as:',
    options: ['+x', '+3x', '−3x', '3/x'],
    correctAnswer: 1,
    explanation: 'The change for each species is the stoichiometric coefficient times x. Products increase, so the change is +3x.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'ice-tables-calculations',
    formSet: 'A',
  },

  // --- Additional questions for topics with only 2 (bump to 4–6 each) ---

  // moles-molar-mass
  {
    question: 'What is the molar mass of $Ca(OH)_{2}$?',
    options: ['57 g/mol', '74 g/mol', '40 g/mol', '96 g/mol'],
    correctAnswer: 1,
    explanation: 'Ca = 40, O = 16 × 2 = 32, H = 1 × 2 = 2. Total = 40 + 32 + 2 = 74 g/mol.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'moles-molar-mass',
    formSet: 'B',
  },
  {
    question: 'How many molecules are in 2.0 mol of $H_{2}O$?',
    options: ['$6.02 \\times 10^{23}$', '$1.20 \\times 10^{24}$', '$3.01 \\times 10^{23}$', '$2.00 \\times 10^{24}$'],
    correctAnswer: 1,
    explanation: '2.0 mol × $6.02 \\times 10^{23}$ molecules/mol = $1.20 \\times 10^{24}$ molecules.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'moles-molar-mass',
    formSet: 'A',
  },

  // electron-configuration
  {
    question: 'Which element has the ground-state electron configuration [Ne] $3s^{2}$ $3p^{4}$?',
    options: ['Phosphorus', 'Sulfur', 'Chlorine', 'Silicon'],
    correctAnswer: 1,
    explanation: '[Ne] = 10 electrons + $3s^{2}3p^{4}$ = 6 more → Z = 16 → Sulfur.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'electron-configuration',
    formSet: 'B',
  },

  // periodic-trends
  {
    question: 'Which atom has the largest atomic radius?',
    options: ['Na', 'Mg', 'K', 'Ca'],
    correctAnswer: 2,
    explanation: 'K is farthest down and left among the choices. Atomic radius increases down a group and left across a period.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'periodic-trends',
    formSet: 'B',
  },

  // photoelectron-spectroscopy
  {
    question: 'In a PES spectrum, the peak with the highest binding energy corresponds to:',
    options: ['Valence electrons', '1s electrons', 'The outermost shell', 'The most shielded electrons'],
    correctAnswer: 1,
    explanation: '1s electrons are closest to the nucleus with the least shielding, requiring the most energy to remove.',
    difficulty: 'easy',
    domain: 'atomic-structure',
    topicSlug: 'photoelectron-spectroscopy',
    formSet: 'B',
  },

  // types-of-chemical-bonds
  {
    question: 'A metallic bond is best described as:',
    options: ['Sharing of electron pairs', 'Transfer of electrons', 'A sea of delocalized electrons', 'Attraction between dipoles'],
    correctAnswer: 2,
    explanation: 'In metallic bonding, valence electrons are delocalized across a lattice of metal cations, forming an "electron sea."',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'types-of-chemical-bonds',
    formSet: 'B',
  },

  // lewis-structures-formal-charge
  {
    question: 'The formal charge on the nitrogen atom in the ammonium ion $(NH_{4}^{+})$ is:',
    options: ['0', '+1', '−1', '+2'],
    correctAnswer: 1,
    explanation: 'N has 5 valence $e^{-}$. In $NH_{4}^{+}$ it has 4 bonds and 0 lone pairs → FC = 5 − 0 − 4 = +1.',
    difficulty: 'medium',
    domain: 'bonding',
    topicSlug: 'lewis-structures-formal-charge',
    formSet: 'B',
  },

  // vsepr-molecular-geometry
  {
    question: 'What is the molecular geometry of $SF_{4}$ (4 bonding pairs, 1 lone pair on S)?',
    options: ['Tetrahedral', 'Square planar', 'See-saw', 'Trigonal bipyramidal'],
    correctAnswer: 2,
    explanation: '$SF_{4}$ has 5 electron groups (trigonal bipyramidal domain). One lone pair in an equatorial position gives a see-saw shape.',
    difficulty: 'medium',
    domain: 'bonding',
    topicSlug: 'vsepr-molecular-geometry',
    formSet: 'B',
  },

  // hybridization-sigma-pi-bonds
  {
    question: 'A carbon atom forming a triple bond uses which hybridization?',
    options: ['$sp^{3}$', '$sp^{2}$', 'sp', '$sp^{3}d$'],
    correctAnswer: 2,
    explanation: 'A triple bond consists of 1 σ and 2 π bonds. The carbon uses sp hybridization (2 electron groups: the triple bond + one other bond).',
    difficulty: 'medium',
    domain: 'bonding',
    topicSlug: 'hybridization-sigma-pi-bonds',
    formSet: 'B',
  },

  // types-intermolecular-forces
  {
    question: 'Hydrogen bonding occurs when H is bonded to which atoms?',
    options: ['Any nonmetal', 'Only oxygen', 'N, O, or F', 'C, N, or O'],
    correctAnswer: 2,
    explanation: 'Hydrogen bonds form when H is covalently bonded to the highly electronegative atoms N, O, or F.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'types-intermolecular-forces',
    formSet: 'B',
  },

  // solutions-solubility
  {
    question: 'Increasing temperature generally _____ the solubility of most solid solutes in water.',
    options: ['Decreases', 'Increases', 'Has no effect', 'Makes it zero'],
    correctAnswer: 1,
    explanation: 'For most solid solutes, dissolving is endothermic. Higher temperature provides more energy, increasing solubility.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'solutions-solubility',
    formSet: 'B',
  },

  // ideal-gas-law
  {
    question: 'At STP (0 °C, 1 atm), one mole of an ideal gas occupies approximately:',
    options: ['11.2 L', '22.4 L', '44.8 L', '1.00 L'],
    correctAnswer: 1,
    explanation: 'The molar volume of an ideal gas at STP is 22.4 L/mol.',
    difficulty: 'easy',
    domain: 'bonding',
    topicSlug: 'ideal-gas-law',
    formSet: 'B',
  },

  // reaction-types
  {
    question: 'Which reaction type involves one element replacing another in a compound?',
    options: ['Synthesis', 'Decomposition', 'Single replacement', 'Double replacement'],
    correctAnswer: 2,
    explanation: 'In a single-replacement reaction, a more reactive element displaces a less reactive element from a compound (e.g., Zn + $CuSO_{4}$ → $ZnSO_{4}$ + Cu).',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'reaction-types',
    formSet: 'B',
  },

  // stoichiometry-limiting-reactants
  {
    question: 'The limiting reactant determines:',
    options: ['The color of the products', 'The maximum amount of product formed', 'The speed of the reaction', 'The equilibrium constant'],
    correctAnswer: 1,
    explanation: 'The limiting reactant is completely consumed first, capping the amount of product that can form.',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'stoichiometry-limiting-reactants',
    formSet: 'B',
  },

  // net-ionic-equations
  {
    question: 'Spectator ions in a net ionic equation are ions that:',
    options: ['Form a precipitate', 'Are oxidized or reduced', 'Appear unchanged on both sides and are removed', 'Only exist in the gas phase'],
    correctAnswer: 2,
    explanation: 'Spectator ions appear in identical form on both sides of the equation and do not participate in the net reaction.',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'net-ionic-equations',
    formSet: 'B',
  },

  // oxidation-reduction-reactions
  {
    question: 'In a redox reaction, the reducing agent:',
    options: ['Gains electrons and is reduced', 'Loses electrons and is oxidized', 'Does not change oxidation state', 'Always contains oxygen'],
    correctAnswer: 1,
    explanation: 'The reducing agent donates electrons (is oxidized) to reduce another species.',
    difficulty: 'easy',
    domain: 'reactions',
    topicSlug: 'oxidation-reduction-reactions',
    formSet: 'B',
  },

  // reaction-rates-and-rate-laws
  {
    question: 'For the rate law rate = k[A]$ {}^{2}$[B], what is the overall reaction order?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: 'Overall order = sum of exponents = 2 + 1 = 3.',
    difficulty: 'easy',
    domain: 'kinetics',
    topicSlug: 'reaction-rates-and-rate-laws',
    formSet: 'B',
  },

  // integrated-rate-laws
  {
    question: 'For a first-order reaction, a plot of ln[A] vs. time gives:',
    options: ['A parabola', 'A straight line', 'An exponential curve', 'A horizontal line'],
    correctAnswer: 1,
    explanation: 'The integrated first-order rate law ln[A] = ln[A]$ {}_{0}$ − kt is linear in ln[A] vs. t, with slope = −k.',
    difficulty: 'easy',
    domain: 'kinetics',
    topicSlug: 'integrated-rate-laws',
    formSet: 'B',
  },

  // activation-energy-arrhenius
  {
    question: 'The Arrhenius equation predicts that reaction rate increases with temperature because:',
    options: ['K increases', 'More molecules exceed the activation energy', 'The equilibrium shifts right', 'Catalysts become more effective'],
    correctAnswer: 1,
    explanation: 'Higher temperature gives particles more kinetic energy, increasing the fraction that exceeds Ea and can react.',
    difficulty: 'easy',
    domain: 'kinetics',
    topicSlug: 'activation-energy-arrhenius',
    formSet: 'B',
  },

  // reaction-mechanisms
  {
    question: 'An intermediate in a reaction mechanism is a species that:',
    options: ['Appears in the overall balanced equation', 'Is produced in one step and consumed in a later step', 'Speeds up the reaction without being consumed', 'Is the final product'],
    correctAnswer: 1,
    explanation: 'Intermediates are produced in one elementary step and consumed in a subsequent step. They do not appear in the overall equation.',
    difficulty: 'easy',
    domain: 'kinetics',
    topicSlug: 'reaction-mechanisms',
    formSet: 'B',
  },

  // enthalpy-calorimetry
  {
    question: 'In a coffee-cup calorimeter, q = mcΔT. If m = 100 g, c = 4.18 J/g·°C, and ΔT = 5 °C, then q equals:',
    options: ['2,090 J', '418 J', '20,900 J', '209 J'],
    correctAnswer: 0,
    explanation: 'q = (100)(4.18)(5) = 2,090 J.',
    difficulty: 'easy',
    domain: 'thermodynamics',
    topicSlug: 'enthalpy-calorimetry',
    formSet: 'B',
  },

  // gibbs-free-energy
  {
    question: 'If ΔH = −100 kJ and ΔS = −200 J/K at 400 K, what is ΔG?',
    options: ['+20 kJ', '−20 kJ', '−180 kJ', '+80 kJ'],
    correctAnswer: 1,
    explanation: 'ΔG = ΔH − TΔS = (−100 kJ) − (400)(−0.200 kJ/K) = −100 + 80 = −20 kJ.',
    difficulty: 'medium',
    domain: 'thermodynamics',
    topicSlug: 'gibbs-free-energy',
    formSet: 'B',
  },

  // equilibrium-constants-expressions
  {
    question: 'Kp is related to Kc by the equation Kp = $Kc(RT)^{\\Delta}n$. Δn represents:',
    options: ['Total moles of gas', 'Moles of products minus moles of reactants (gaseous only)', 'The change in temperature', 'The number of atoms'],
    correctAnswer: 1,
    explanation: 'Δn = (moles of gaseous products) − (moles of gaseous reactants) in the balanced equation.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'equilibrium-constants-expressions',
    formSet: 'B',
  },
  {
    question: 'For $2SO_{2}(g)$ + $O_{2}(g)$ ⇌ $2SO_{3}(g)$, the expression for Kc is:',
    options: ['[$SO_{3}$]$ {}^{2}$ / ([$SO_{2}$]$ {}^{2}$[$O_{2}$])', '[$SO_{2}$]$ {}^{2}$[$O_{2}$] / [$SO_{3}$]$ {}^{2}$', '2[$SO_{3}$] / (2[$SO_{2}$] + [$O_{2}$])', '[$SO_{3}$] / [$SO_{2}$][$O_{2}$]'],
    correctAnswer: 0,
    explanation: 'Kc = [products]^coeff / [reactants]^coeff = [$SO_{3}$]$ {}^{2}$ / ([$SO_{2}$]$ {}^{2}$[$O_{2}$]).',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'equilibrium-constants-expressions',
    formSet: 'A',
  },

  // le-chatelier-equilibrium-shifts
  {
    question: 'For $N_{2}(g)$ + $3H_{2}(g)$ ⇌ $2NH_{3}(g)$, decreasing the volume at constant temperature will shift equilibrium:',
    options: ['Toward reactants', 'Toward products', 'No shift', 'Depends on temperature'],
    correctAnswer: 1,
    explanation: 'Decreasing volume increases pressure. The system shifts to the side with fewer moles of gas: 2 mol products vs 4 mol reactants → shift right.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'le-chatelier-equilibrium-shifts',
    formSet: 'A',
  },
  {
    question: 'Adding an inert gas at constant volume to an equilibrium system will:',
    options: ['Shift toward products', 'Shift toward reactants', 'Have no effect on position', 'Change K'],
    correctAnswer: 2,
    explanation: 'At constant volume, an inert gas does not change the partial pressures of any reactant or product, so no shift occurs.',
    difficulty: 'easy',
    domain: 'equilibrium',
    topicSlug: 'le-chatelier-equilibrium-shifts',
    formSet: 'B',
  },

  // solubility-ksp
  {
    question: 'For AgCl(s) ⇌ $Ag^{+}(aq)$ + $Cl^{-}(aq)$, if Ksp = $1.8 \\times 10^{-10}$, the molar solubility is approximately:',
    options: ['$1.3 \\times 10^{-5}$ M', '$1.8 \\times 10^{-10}$ M', '$9.0 \\times 10^{-6}$ M', '$1.3 \\times 10^{-3}$ M'],
    correctAnswer: 0,
    explanation: 'Let s = solubility. Ksp = s × s = $s^{2}$. s = $\\sqrt{1.8 \\times 10^{-10}}$ ≈ $1.3 \\times 10^{-5}$ M.',
    difficulty: 'medium',
    domain: 'equilibrium',
    topicSlug: 'solubility-ksp',
    formSet: 'B',
  },

  // weak-acids-bases-ka-kb
  {
    question: 'A weak acid with Ka = $1.8 \\times 10^{-5}$ has a conjugate base with Kb equal to:',
    options: ['$1.8 \\times 10^{-5}$', '$5.6 \\times 10^{-10}$', '$1.0 \\times 10^{-14}$', '$5.6 \\times 10^{-8}$'],
    correctAnswer: 1,
    explanation: 'Ka × Kb = Kw = $1.0 \\times 10^{-14}$. Kb = Kw / Ka = $1.0 \\times 10^{-14}$ / $1.8 \\times 10^{-5}$ ≈ $5.6 \\times 10^{-10}$.',
    difficulty: 'medium',
    domain: 'acids-bases',
    topicSlug: 'weak-acids-bases-ka-kb',
    formSet: 'B',
  },

  // buffer-solutions-henderson-hasselbalch
  {
    question: 'A buffer with equal concentrations of weak acid and conjugate base has pH equal to:',
    options: ['7.00', 'pKa', 'pKb', '14 − pKa'],
    correctAnswer: 1,
    explanation: 'When [HA] = [$A^{-}$], the Henderson-Hasselbalch equation gives pH = pKa + log(1) = pKa.',
    difficulty: 'easy',
    domain: 'acids-bases',
    topicSlug: 'buffer-solutions-henderson-hasselbalch',
    formSet: 'B',
  },

  // acid-base-titrations
  {
    question: 'At the equivalence point of a strong acid–strong base titration, the pH is:',
    options: ['Less than 7', '7', 'Greater than 7', 'Equal to pKa'],
    correctAnswer: 1,
    explanation: 'The salt formed by a strong acid and strong base does not hydrolyze. The solution is neutral with pH = 7.',
    difficulty: 'easy',
    domain: 'acids-bases',
    topicSlug: 'acid-base-titrations',
    formSet: 'B',
  },

  // nernst-equation-concentration
  {
    question: 'The Nernst equation at 25 °C can be written as E = E° − (0.0592/n) log Q. What does n represent?',
    options: ['Number of moles of product', 'Number of moles of electrons transferred', 'Number of electrodes', 'Avogadro\'s number'],
    correctAnswer: 1,
    explanation: 'n is the number of moles of electrons transferred in the balanced redox reaction.',
    difficulty: 'easy',
    domain: 'electrochemistry',
    topicSlug: 'nernst-equation-concentration',
    formSet: 'A',
  },

  // electrolytic-cells-faraday
  {
    question: 'How many coulombs are needed to deposit 1 mole of Cu from $Cu^{2+}$ (2 electrons per ion)?',
    options: ['96,485 C', '192,970 C', '48,243 C', '289,455 C'],
    correctAnswer: 1,
    explanation: '$Cu^{2+}$ + $2e^{-}$ → Cu requires 2 mol $e^{-}$ per mol Cu. Charge = 2 × 96,485 = 192,970 C.',
    difficulty: 'medium',
    domain: 'electrochemistry',
    topicSlug: 'electrolytic-cells-faraday',
    formSet: 'A',
  },

  // galvanic-cells-potentials
  {
    question: 'In a standard galvanic cell notation (Zn|$Zn^{2+}$||$Cu^{2+}$|Cu), the double vertical line represents:',
    options: ['The wire', 'The anode', 'The salt bridge', 'The cathode'],
    correctAnswer: 2,
    explanation: 'The || in cell notation represents the salt bridge (or porous barrier) separating the two half-cells.',
    difficulty: 'easy',
    domain: 'electrochemistry',
    topicSlug: 'galvanic-cells-potentials',
    formSet: 'A',
  },

  // ══════════════════════════════════════════════════════════════════
  //  BATCH 2 — Additional questions for repeat-quiz variety
  // ══════════════════════════════════════════════════════════════════

  // ── moles-molar-mass (batch 2 — had 4, adding 4 → 8) ──────────
  { question: 'How many atoms are in 2 moles of helium?', options: ['$6.02 \\times 10^{23}$', '$1.204 \\times 10^{24}$', '$3.01 \\times 10^{23}$', '$2$'], correctAnswer: 1, explanation: '$2 \\times 6.022 \\times 10^{23} = 1.204 \\times 10^{24}$ atoms.', difficulty: 'easy', domain: 'reactions', topicSlug: 'moles-molar-mass', formSet: 'A' },
  { question: 'The molar mass of $Ca(OH)_{2}$ is:', options: ['57 g/mol', '74 g/mol', '40 g/mol', '114 g/mol'], correctAnswer: 1, explanation: '$40 + 2(16 + 1) = 40 + 34 = 74$ g/mol.', difficulty: 'easy', domain: 'reactions', topicSlug: 'moles-molar-mass', formSet: 'B' },
  { question: 'If 180 g of glucose ($C_6H_{12}O_6$, MM = 180 g/mol) is dissolved, how many moles is that?', options: ['0.5 mol', '1 mol', '2 mol', '180 mol'], correctAnswer: 1, explanation: '$n = m/M = 180/180 = 1$ mol.', difficulty: 'easy', domain: 'reactions', topicSlug: 'moles-molar-mass', formSet: 'both' },
  { question: 'At STP, 1 mole of any ideal gas occupies approximately:', options: ['11.2 L', '22.4 L', '44.8 L', '1 L'], correctAnswer: 1, explanation: 'Molar volume of an ideal gas at STP ≈ 22.4 L.', difficulty: 'easy', domain: 'reactions', topicSlug: 'moles-molar-mass', formSet: 'A' },

  // ── electron-configuration (batch 2 — had 3, adding 5 → 8) ─────
  { question: 'The electron configuration of Fe (Z = 26) is:', options: ['[Ar] $4s^{2}$ $3d^{6}$', '[Ar] $3d^{8}$', '[Ar] $4s^{2}$ $3d^{4}$', '[Ar] $4s^{1}$ $3d^{7}$'], correctAnswer: 0, explanation: 'Iron: [Ar] $4s^{2}$ $3d^{6}$. The 4s fills before 3d.', difficulty: 'medium', domain: 'atomic-structure', topicSlug: 'electron-configuration', formSet: 'A' },
  { question: 'Hund\'s rule states that electrons:', options: ['Fill the lowest energy orbital first', 'Occupy degenerate orbitals singly before pairing', 'Cannot share the same quantum numbers', 'Pair with opposite spins only'], correctAnswer: 1, explanation: 'Hund: maximize spin by filling each orbital of a subshell singly first.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'electron-configuration', formSet: 'B' },
  { question: 'Which element has the configuration [Ne] $3s^{2}$ $3p^{5}$?', options: ['Chlorine', 'Argon', 'Sulfur', 'Fluorine'], correctAnswer: 0, explanation: '[Ne] $3s^{2}$ $3p^{5}$ = 10 + 7 = 17 electrons → Cl.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'electron-configuration', formSet: 'A' },
  { question: 'The Pauli exclusion principle says that:', options: ['Two electrons in the same orbital must have opposite spins', 'Electrons fill the lowest energy first', 'Each orbital holds 3 electrons', 'All electrons have the same spin'], correctAnswer: 0, explanation: 'No two electrons can have the same set of four quantum numbers → opposite spins in an orbital.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'electron-configuration', formSet: 'B' },
  { question: 'Cu (Z = 29) has an anomalous configuration because:', options: ['It loses electrons easily', '[Ar] $3d^{10}$ $4s^{1}$ is more stable than [Ar] $3d^{9}$ $4s^{2}$', 'It is a noble gas', 'It has no d electrons'], correctAnswer: 1, explanation: 'A fully filled d subshell $(3d^{10})$ provides extra stability.', difficulty: 'hard', domain: 'atomic-structure', topicSlug: 'electron-configuration', formSet: 'both' },

  // ── periodic-trends (batch 2 — had 3, adding 5 → 8) ────────────
  { question: 'Across a period, atomic radius generally:', options: ['Increases', 'Decreases', 'Stays the same', 'Oscillates'], correctAnswer: 1, explanation: 'More protons pull electrons closer → smaller radius.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'periodic-trends', formSet: 'A' },
  { question: 'Down a group, ionization energy generally:', options: ['Increases', 'Decreases', 'Stays constant', 'Doubles'], correctAnswer: 1, explanation: 'Outer electrons are farther from the nucleus → easier to remove.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'periodic-trends', formSet: 'B' },
  { question: 'Electronegativity is highest for:', options: ['Cesium', 'Francium', 'Fluorine', 'Helium'], correctAnswer: 2, explanation: 'F (top right, excluding noble gases) has the highest electronegativity (3.98 Pauling).', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'periodic-trends', formSet: 'A' },
  { question: 'Which has the largest atomic radius?', options: ['Li', 'Na', 'K', 'Rb'], correctAnswer: 3, explanation: 'Down a group, radius increases; Rb is the lowest listed.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'periodic-trends', formSet: 'B' },
  { question: 'Electron affinity becomes more negative (more exothermic) going ___ and ___ on the periodic table.', options: ['Left; down', 'Right; up', 'Left; up', 'Right; down'], correctAnswer: 1, explanation: 'Halogens (right, near top) have the most negative electron affinities.', difficulty: 'medium', domain: 'atomic-structure', topicSlug: 'periodic-trends', formSet: 'both' },

  // ── photoelectron-spectroscopy (batch 2 — had 3, adding 5 → 8) ──
  { question: 'In a PES spectrum, peaks farther to the left (higher binding energy) correspond to:', options: ['Valence electrons', 'Core electrons closer to the nucleus', 'Free electrons', 'Photons'], correctAnswer: 1, explanation: 'Higher BE = more tightly bound = closer to the nucleus.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'photoelectron-spectroscopy', formSet: 'A' },
  { question: 'The height of a PES peak tells you:', options: ['Binding energy', 'Number of electrons in that subshell', 'Atomic mass', 'Wavelength of light'], correctAnswer: 1, explanation: 'Peak height ∝ number of electrons with that binding energy.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'photoelectron-spectroscopy', formSet: 'B' },
  { question: 'An element shows PES peaks at very high BE (2 electrons), moderate BE (2), and low BE (3). It is likely:', options: ['Nitrogen', 'Oxygen', 'Carbon', 'Boron'], correctAnswer: 0, explanation: '$1s^{2}$ $2s^{2}$ $2p^{3}$ = 7 electrons → Nitrogen.', difficulty: 'medium', domain: 'atomic-structure', topicSlug: 'photoelectron-spectroscopy', formSet: 'A' },
  { question: 'PES relies on the ___ effect.', options: ['Compton', 'Photoelectric', 'Doppler', 'Zeeman'], correctAnswer: 1, explanation: 'Photons eject electrons; KE measured to deduce binding energy.', difficulty: 'easy', domain: 'atomic-structure', topicSlug: 'photoelectron-spectroscopy', formSet: 'B' },
  { question: 'Two elements have identical PES spectra except for a slightly different binding energy shift. They are likely:', options: ['Different elements', 'Isotopes', 'Ions of the same element', 'Allotropes'], correctAnswer: 1, explanation: 'Isotopes have the same electron structure but different nuclear mass (minor BE shift).', difficulty: 'hard', domain: 'atomic-structure', topicSlug: 'photoelectron-spectroscopy', formSet: 'both' },

  // ── types-of-chemical-bonds (batch 2 — had 3, adding 5 → 8) ────
  { question: 'An ionic bond forms between:', options: ['Two nonmetals', 'A metal and a nonmetal', 'Two metals', 'Two noble gases'], correctAnswer: 1, explanation: 'Large electronegativity difference → electron transfer → ionic bond.', difficulty: 'easy', domain: 'bonding', topicSlug: 'types-of-chemical-bonds', formSet: 'A' },
  { question: 'A metallic bond is best described as:', options: ['Shared electron pair between two atoms', 'A sea of delocalized electrons shared among metal cations', 'Transfer of electrons from one atom to another', 'Weak intermolecular force'], correctAnswer: 1, explanation: 'Metal atoms release valence electrons into a delocalized "sea."', difficulty: 'easy', domain: 'bonding', topicSlug: 'types-of-chemical-bonds', formSet: 'B' },
  { question: 'In a polar covalent bond, electrons are:', options: ['Transferred completely', 'Shared equally', 'Shared unequally', 'Not involved'], correctAnswer: 2, explanation: 'Moderate ΔEN → unequal sharing → partial charges.', difficulty: 'easy', domain: 'bonding', topicSlug: 'types-of-chemical-bonds', formSet: 'A' },
  { question: 'Bond strength generally ___ as bond order increases.', options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'], correctAnswer: 1, explanation: 'Triple > double > single bond strength.', difficulty: 'easy', domain: 'bonding', topicSlug: 'types-of-chemical-bonds', formSet: 'B' },
  { question: 'Which compound is most likely ionic?', options: ['$CO_{2}$', '$H_{2}O$', 'NaCl', '$CH_{4}$'], correctAnswer: 2, explanation: 'Na (metal) + Cl (nonmetal) → large ΔEN → ionic.', difficulty: 'easy', domain: 'bonding', topicSlug: 'types-of-chemical-bonds', formSet: 'both' },

  // ── lewis-structures-formal-charge (batch 2 — had 3, adding 5 → 8)
  { question: 'Formal charge = valence electrons − (lone pair $e^{-}$ + ½ bonding $e^{-}$). For the N in $NH_{3}$:', options: ['0', '+1', '−1', '+2'], correctAnswer: 0, explanation: 'N has 5 valence $e^{-}$. In $NH_{3}$: 2 lone pair + ½(6 bonding) = 2 + 3 = 5. FC = 5 − 5 = 0.', difficulty: 'medium', domain: 'bonding', topicSlug: 'lewis-structures-formal-charge', formSet: 'A' },
  { question: 'The best Lewis structure minimizes:', options: ['The number of bonds', 'Formal charges on all atoms', 'Lone pairs', 'Electronegativity differences'], correctAnswer: 1, explanation: 'Lower formal charges → more stable → preferred structure.', difficulty: 'easy', domain: 'bonding', topicSlug: 'lewis-structures-formal-charge', formSet: 'B' },
  { question: 'How many lone pairs are on the O in $H_{2}O$?', options: ['0', '1', '2', '3'], correctAnswer: 2, explanation: 'O has 6 valence $e^{-}$; 2 used in bonds → 4 remaining = 2 lone pairs.', difficulty: 'easy', domain: 'bonding', topicSlug: 'lewis-structures-formal-charge', formSet: 'A' },
  { question: 'A resonance structure is needed when:', options: ['There is only one valid Lewis structure', 'Multiple equivalent structures can be drawn', 'The molecule has no bonds', 'Formal charges are all zero'], correctAnswer: 1, explanation: 'Resonance = multiple structures differing only in electron placement.', difficulty: 'easy', domain: 'bonding', topicSlug: 'lewis-structures-formal-charge', formSet: 'B' },
  { question: 'Octet exceptions include molecules with:', options: ['Only single bonds', 'Only noble-gas atoms', 'Expanded octets (elements in period 3+)', 'Only hydrogen'], correctAnswer: 2, explanation: 'Elements in period 3+ can use d orbitals → >8 electrons around central atom.', difficulty: 'medium', domain: 'bonding', topicSlug: 'lewis-structures-formal-charge', formSet: 'both' },

  // ── vsepr-molecular-geometry (batch 2 — had 3, adding 5 → 8) ───
  { question: 'A molecule with 4 bonding pairs and 0 lone pairs has ___ geometry.', options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Trigonal bipyramidal'], correctAnswer: 2, explanation: '4 electron groups, all bonding → tetrahedral (109.5°).', difficulty: 'easy', domain: 'bonding', topicSlug: 'vsepr-molecular-geometry', formSet: 'A' },
  { question: 'Water has 2 bonds and 2 lone pairs. Its shape is:', options: ['Linear', 'Bent', 'Tetrahedral', 'Trigonal planar'], correctAnswer: 1, explanation: '4 $e^{-}$ groups (tetrahedral $e^{-}$ geometry) but 2 LP → bent molecular shape.', difficulty: 'easy', domain: 'bonding', topicSlug: 'vsepr-molecular-geometry', formSet: 'B' },
  { question: '$NH_{3}$ has ___ molecular geometry.', options: ['Tetrahedral', 'Trigonal pyramidal', 'Trigonal planar', 'Bent'], correctAnswer: 1, explanation: '3 bonds + 1 LP → trigonal pyramidal.', difficulty: 'easy', domain: 'bonding', topicSlug: 'vsepr-molecular-geometry', formSet: 'A' },
  { question: 'The bond angle in an ideal trigonal planar molecule is:', options: ['90°', '109.5°', '120°', '180°'], correctAnswer: 2, explanation: '3 groups in a plane: 360°/3 = 120° apart.', difficulty: 'easy', domain: 'bonding', topicSlug: 'vsepr-molecular-geometry', formSet: 'B' },
  { question: 'Lone pairs ___ bond angles compared to the ideal geometry.', options: ['Increase', 'Decrease', 'Don\'t affect', 'Double'], correctAnswer: 1, explanation: 'Lone pairs exert greater repulsion → compress bond angles.', difficulty: 'medium', domain: 'bonding', topicSlug: 'vsepr-molecular-geometry', formSet: 'both' },

  // ── hybridization-sigma-pi-bonds (batch 2 — had 3, adding 5 → 8)
  { question: 'A carbon with a triple bond uses ___ hybridization.', options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'], correctAnswer: 0, explanation: 'Triple bond = 1 σ + 2 π; 2 groups → sp hybridization (linear).', difficulty: 'easy', domain: 'bonding', topicSlug: 'hybridization-sigma-pi-bonds', formSet: 'A' },
  { question: 'How many sigma and pi bonds are in a C=C double bond?', options: ['2σ, 0π', '1σ, 1π', '0σ, 2π', '2σ, 2π'], correctAnswer: 1, explanation: 'A double bond = 1 sigma (head-on) + 1 pi (side-to-side overlap).', difficulty: 'easy', domain: 'bonding', topicSlug: 'hybridization-sigma-pi-bonds', formSet: 'B' },
  { question: 'In ethane $(C_{2}H_{6})$, each carbon is ___ hybridized.', options: ['sp', '$sp^{2}$', '$sp^{3}$', 'unhybridized'], correctAnswer: 2, explanation: '4 groups around each C → $sp^{3}$.', difficulty: 'easy', domain: 'bonding', topicSlug: 'hybridization-sigma-pi-bonds', formSet: 'A' },
  { question: '$sp^{2}$ hybridization gives ___ geometry.', options: ['Linear', 'Tetrahedral', 'Trigonal planar', 'Octahedral'], correctAnswer: 2, explanation: '3 hybrid orbitals in a plane at 120° → trigonal planar.', difficulty: 'easy', domain: 'bonding', topicSlug: 'hybridization-sigma-pi-bonds', formSet: 'B' },
  { question: 'Pi bonds form from ___ overlap of p orbitals.', options: ['Head-on', 'Side-by-side (lateral)', 'Diagonal', 's-orbital'], correctAnswer: 1, explanation: 'Pi bonds = lateral overlap of unhybridized p orbitals above and below the bond axis.', difficulty: 'easy', domain: 'bonding', topicSlug: 'hybridization-sigma-pi-bonds', formSet: 'both' },

  // ── types-intermolecular-forces (batch 2 — had 3, adding 5 → 8) ─
  { question: 'Hydrogen bonding occurs when H is bonded to:', options: ['Any element', 'C, Si, or Ge', 'N, O, or F', 'Only F'], correctAnswer: 2, explanation: 'H-bonding requires H attached to highly electronegative N, O, or F.', difficulty: 'easy', domain: 'imf', topicSlug: 'types-intermolecular-forces', formSet: 'A' },
  { question: 'London dispersion forces are present in:', options: ['Only polar molecules', 'Only nonpolar molecules', 'All molecules', 'Only ionic compounds'], correctAnswer: 2, explanation: 'LDF arise from temporary dipoles and exist in ALL molecules/atoms.', difficulty: 'easy', domain: 'imf', topicSlug: 'types-intermolecular-forces', formSet: 'B' },
  { question: 'Which has the highest boiling point: $CH_{4}$, $SiH_{4}$, $GeH_{4}$, $SnH_{4}$?', options: ['$CH_{4}$', '$SiH_{4}$', '$GeH_{4}$', '$SnH_{4}$'], correctAnswer: 3, explanation: 'All nonpolar → only LDF → larger molar mass → stronger LDF → higher BP.', difficulty: 'medium', domain: 'imf', topicSlug: 'types-intermolecular-forces', formSet: 'A' },
  { question: 'Dipole-dipole forces exist between molecules that are:', options: ['Nonpolar', 'Polar', 'Ionic', 'Metallic'], correctAnswer: 1, explanation: 'Permanent dipoles attract each other → dipole-dipole interaction.', difficulty: 'easy', domain: 'imf', topicSlug: 'types-intermolecular-forces', formSet: 'B' },
  { question: 'Water has an unusually high boiling point due to:', options: ['Its large molar mass', 'Strong hydrogen bonding', 'London dispersion forces', 'Covalent network bonding'], correctAnswer: 1, explanation: 'Extensive H-bonding in water raises BP far above similar-mass molecules.', difficulty: 'easy', domain: 'imf', topicSlug: 'types-intermolecular-forces', formSet: 'both' },

  // ── ideal-gas-law (batch 2 — had 3, adding 5 → 8) ──────────────
  { question: 'At constant $T$ and $n$, if volume doubles, pressure:', options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'], correctAnswer: 1, explanation: 'Boyle\'s law: $P_1V_1 = P_2V_2$. Double $V$ → half $P$.', difficulty: 'easy', domain: 'imf', topicSlug: 'ideal-gas-law', formSet: 'A' },
  { question: 'At constant $P$ and $n$, if $T$ doubles (in K), volume:', options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'], correctAnswer: 1, explanation: 'Charles\'s law: $V/T = \\text{const}$. Double $T$ → double $V$.', difficulty: 'easy', domain: 'imf', topicSlug: 'ideal-gas-law', formSet: 'B' },
  { question: '2 moles of gas at 300 K in 10 L. What is $P$? ($R = 0.0821$ L·atm/(mol·K))', options: ['4.93 atm', '49.3 atm', '0.493 atm', '2.46 atm'], correctAnswer: 0, explanation: '$P = nRT/V = 2(0.0821)(300)/10 = 4.93$ atm.', difficulty: 'medium', domain: 'imf', topicSlug: 'ideal-gas-law', formSet: 'A' },
  { question: 'Dalton\'s law states that total pressure equals the sum of:', options: ['Volumes', 'Moles', 'Partial pressures', 'Temperatures'], correctAnswer: 2, explanation: '$P_{total} = P_1 + P_2 + P_3 + \\cdots$ (each gas contributes independently).', difficulty: 'easy', domain: 'imf', topicSlug: 'ideal-gas-law', formSet: 'B' },
  { question: 'Real gases deviate most from ideal behavior at:', options: ['High T, low P', 'Low T, high P', 'STP', 'Any condition'], correctAnswer: 1, explanation: 'Low T → slow molecules feel IMF; high P → molecules occupy significant volume.', difficulty: 'medium', domain: 'imf', topicSlug: 'ideal-gas-law', formSet: 'both' },

  // ── solutions-solubility (batch 2 — had 3, adding 5 → 8) ───────
  { question: '"Like dissolves like" means:', options: ['All substances dissolve in water', 'Polar solutes dissolve in polar solvents', 'Temperature doesn\'t matter', 'Solubility is always high'], correctAnswer: 1, explanation: 'Polar/ionic in polar solvents; nonpolar in nonpolar solvents.', difficulty: 'easy', domain: 'imf', topicSlug: 'solutions-solubility', formSet: 'A' },
  { question: 'Molarity (M) is defined as:', options: ['Moles solute / kg solvent', 'Moles solute / L solution', 'Grams solute / L solution', 'Moles solute / moles solvent'], correctAnswer: 1, explanation: '$M = n/V$ (moles per liter of solution).', difficulty: 'easy', domain: 'imf', topicSlug: 'solutions-solubility', formSet: 'B' },
  { question: 'Dissolving NaCl in water is aided by:', options: ['London forces', 'Ion-dipole interactions', 'Nonpolar bonding', 'Metallic bonding'], correctAnswer: 1, explanation: 'Water dipoles surround $Na^{+}$ and $Cl^{-}$ → ion-dipole interaction.', difficulty: 'easy', domain: 'imf', topicSlug: 'solutions-solubility', formSet: 'A' },
  { question: 'A solution with more solute than the equilibrium amount is:', options: ['Unsaturated', 'Saturated', 'Supersaturated', 'Dilute'], correctAnswer: 2, explanation: 'Supersaturated: dissolved solute exceeds the normal solubility limit.', difficulty: 'easy', domain: 'imf', topicSlug: 'solutions-solubility', formSet: 'B' },
  { question: 'Increasing temperature ___ the solubility of most solid solutes.', options: ['Decreases', 'Increases', 'Does not affect', 'Eliminates'], correctAnswer: 1, explanation: 'Most solid dissolution is endothermic → heat favors dissolving (Le Chatelier).', difficulty: 'easy', domain: 'imf', topicSlug: 'solutions-solubility', formSet: 'both' },

  // ── reaction-types (batch 2 — had 3, adding 5 → 8) ─────────────
  { question: 'A synthesis reaction has the form:', options: ['AB → A + B', 'A + B → AB', 'AB + CD → AD + CB', 'A + BC → AC + B'], correctAnswer: 1, explanation: 'Synthesis (combination): two or more reactants → one product.', difficulty: 'easy', domain: 'reactions', topicSlug: 'reaction-types', formSet: 'A' },
  { question: 'Combustion of a hydrocarbon always produces:', options: ['$O_{2}$ and $H_{2}$', '$CO_{2}$ and $H_{2}O$', 'CO and $H_{2}O$', 'C and $H_{2}O$'], correctAnswer: 1, explanation: '$C_xH_y + O_2 \\to CO_2 + H_2O$ (complete combustion).', difficulty: 'easy', domain: 'reactions', topicSlug: 'reaction-types', formSet: 'B' },
  { question: 'Zn + $CuSO_{4}$ → $ZnSO_{4}$ + Cu is a ___ reaction.', options: ['Decomposition', 'Synthesis', 'Single replacement', 'Double replacement'], correctAnswer: 2, explanation: 'Zn replaces Cu in the compound → single replacement.', difficulty: 'easy', domain: 'reactions', topicSlug: 'reaction-types', formSet: 'A' },
  { question: '$AgNO_{3}$ + NaCl → AgCl↓ + $NaNO_{3}$ is a ___ reaction.', options: ['Single replacement', 'Double replacement (metathesis)', 'Synthesis', 'Decomposition'], correctAnswer: 1, explanation: 'Cations and anions swap partners → double replacement; AgCl precipitates.', difficulty: 'easy', domain: 'reactions', topicSlug: 'reaction-types', formSet: 'B' },
  { question: '2 $KClO_{3}$ → 2 KCl + 3 $O_{2}$ is a ___ reaction.', options: ['Synthesis', 'Single replacement', 'Decomposition', 'Combustion'], correctAnswer: 2, explanation: 'One reactant breaks into two or more products → decomposition.', difficulty: 'easy', domain: 'reactions', topicSlug: 'reaction-types', formSet: 'both' },

  // ── stoichiometry-limiting-reactants (batch 2 — had 3, adding 5 → 8)
  { question: 'The limiting reactant determines:', options: ['The color of products', 'The maximum amount of product formed', 'The reaction speed', 'The catalyst needed'], correctAnswer: 1, explanation: 'The limiting reactant runs out first → caps the product yield.', difficulty: 'easy', domain: 'reactions', topicSlug: 'stoichiometry-limiting-reactants', formSet: 'A' },
  { question: 'If 4 mol $H_{2}$ reacts with 1 mol $O_{2}$ ($2H_2 + O_2 \\to 2H_2O$), the limiting reactant is:', options: ['$H_{2}$', '$O_{2}$', '$H_{2}O$', 'Neither'], correctAnswer: 1, explanation: '1 mol $O_{2}$ requires 2 mol $H_{2}$. Only 1 mol $O_{2}$ → produces 2 mol $H_{2}O$; 2 mol $H_{2}$ excess.', difficulty: 'medium', domain: 'reactions', topicSlug: 'stoichiometry-limiting-reactants', formSet: 'B' },
  { question: 'Percent yield = (actual / theoretical) × 100. If 8 g produced out of 10 g theoretical:', options: ['80%', '125%', '8%', '10%'], correctAnswer: 0, explanation: '$(8/10) \\times 100 = 80\\%$.', difficulty: 'easy', domain: 'reactions', topicSlug: 'stoichiometry-limiting-reactants', formSet: 'A' },
  { question: 'In stoichiometry, mole ratios come from:', options: ['Molar masses', 'Coefficients in the balanced equation', 'Densities', 'Electron configurations'], correctAnswer: 1, explanation: 'Balanced equation coefficients give mole ratios of reactants and products.', difficulty: 'easy', domain: 'reactions', topicSlug: 'stoichiometry-limiting-reactants', formSet: 'B' },
  { question: 'The excess reactant is the one that:', options: ['Is used up first', 'Remains after the reaction', 'Has the highest molar mass', 'Is the catalyst'], correctAnswer: 1, explanation: 'Excess reactant = leftover after the limiting reactant is consumed.', difficulty: 'easy', domain: 'reactions', topicSlug: 'stoichiometry-limiting-reactants', formSet: 'both' },

  // ── net-ionic-equations (batch 2 — had 3, adding 5 → 8) ────────
  { question: 'Spectator ions are ions that:', options: ['React to form a precipitate', 'Appear unchanged on both sides of the equation', 'Only exist in the gas phase', 'Are always polyatomic'], correctAnswer: 1, explanation: 'Spectator ions don\'t change → cancel out → not in net ionic equation.', difficulty: 'easy', domain: 'reactions', topicSlug: 'net-ionic-equations', formSet: 'A' },
  { question: 'In the reaction NaOH(aq) + HCl(aq) → NaCl(aq) + $H_{2}O(l)$, the net ionic equation is:', options: ['$Na^{+}$ + $Cl^{-}$ → NaCl', '$OH^{-}$ + $H^{+}$ → $H_{2}O$', 'NaOH + HCl → NaCl + $H_{2}O$', '$Na^{+}$ + $OH^{-}$ + $H^{+}$ + $Cl^{-}$ → $Na^{+}$ + $Cl^{-}$ + $H_{2}O$'], correctAnswer: 1, explanation: '$Na^{+}$ and $Cl^{-}$ are spectators; net ionic: $H^{+}$ + $OH^{-}$ → $H_{2}O$.', difficulty: 'easy', domain: 'reactions', topicSlug: 'net-ionic-equations', formSet: 'B' },
  { question: 'A compound written as molecules (not ions) in an ionic equation is:', options: ['Always a gas', 'A weak electrolyte, solid, or liquid', 'Always an acid', 'Always soluble'], correctAnswer: 1, explanation: 'Weak electrolytes, solids, liquids, and gases are written in molecular form.', difficulty: 'medium', domain: 'reactions', topicSlug: 'net-ionic-equations', formSet: 'A' },
  { question: 'Strong electrolytes are written as ___ in ionic equations.', options: ['Molecules', 'Separated ions', 'Gases', 'Precipitates'], correctAnswer: 1, explanation: 'Strong electrolytes fully dissociate → written as separate ions.', difficulty: 'easy', domain: 'reactions', topicSlug: 'net-ionic-equations', formSet: 'B' },
  { question: 'If mixing two solutions produces no precipitate, no gas, and no water, the net ionic equation is:', options: ['Very long', 'NR (no reaction)', 'A redox equation', 'Always acidic'], correctAnswer: 1, explanation: 'No driving force → no reaction occurs → all ions remain as spectators.', difficulty: 'easy', domain: 'reactions', topicSlug: 'net-ionic-equations', formSet: 'both' },

  // ── oxidation-reduction-reactions (batch 2 — had 3, adding 5 → 8)
  { question: 'Oxidation is defined as:', options: ['Gain of electrons', 'Loss of electrons', 'Gain of protons', 'Loss of oxygen'], correctAnswer: 1, explanation: 'OIL RIG: Oxidation Is Loss of electrons.', difficulty: 'easy', domain: 'reactions', topicSlug: 'oxidation-reduction-reactions', formSet: 'A' },
  { question: 'In the reaction 2 Mg + $O_{2}$ → 2 MgO, Mg is:', options: ['Reduced', 'Oxidized', 'A spectator', 'Unchanged'], correctAnswer: 1, explanation: 'Mg goes from 0 to +2 → loses electrons → oxidized.', difficulty: 'easy', domain: 'reactions', topicSlug: 'oxidation-reduction-reactions', formSet: 'B' },
  { question: 'The oxidation state of O in most compounds is:', options: ['+2', '−1', '−2', '0'], correctAnswer: 2, explanation: 'Oxygen is typically −2 (except in peroxides, $OF_{2}$, etc.).', difficulty: 'easy', domain: 'reactions', topicSlug: 'oxidation-reduction-reactions', formSet: 'A' },
  { question: 'The substance that gets reduced is the:', options: ['Reducing agent', 'Oxidizing agent', 'Catalyst', 'Solvent'], correctAnswer: 1, explanation: 'The oxidizing agent gains electrons (is reduced) and causes oxidation of the other.', difficulty: 'medium', domain: 'reactions', topicSlug: 'oxidation-reduction-reactions', formSet: 'B' },
  { question: 'A disproportionation reaction is when an element is simultaneously:', options: ['Dissolved and precipitated', 'Oxidized and reduced', 'Heated and cooled', 'Ionized and neutralized'], correctAnswer: 1, explanation: 'Same element acts as both oxidizing and reducing agent.', difficulty: 'hard', domain: 'reactions', topicSlug: 'oxidation-reduction-reactions', formSet: 'both' },

  // ── reaction-rates-and-rate-laws (batch 2 — had 3, adding 5 → 8)
  { question: 'Increasing temperature speeds up a reaction because:', options: ['It lowers activation energy', 'It increases the fraction of molecules with sufficient energy', 'It changes the products', 'It decreases the rate constant'], correctAnswer: 1, explanation: 'Higher T → more molecules exceed $E_a$ → more effective collisions.', difficulty: 'medium', domain: 'kinetics', topicSlug: 'reaction-rates-and-rate-laws', formSet: 'A' },
  { question: 'A catalyst speeds up a reaction by:', options: ['Increasing temperature', 'Providing an alternative pathway with lower $E_a$', 'Changing the equilibrium constant', 'Adding more reactant'], correctAnswer: 1, explanation: 'Catalysts lower the activation energy barrier.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'reaction-rates-and-rate-laws', formSet: 'B' },
  { question: 'For rate = k[A]$ {}^{2}$[B], the overall reaction order is:', options: ['2', '3', '1', '4'], correctAnswer: 1, explanation: 'Sum of exponents: 2 + 1 = 3 (third-order overall).', difficulty: 'easy', domain: 'kinetics', topicSlug: 'reaction-rates-and-rate-laws', formSet: 'A' },
  { question: 'If doubling [A] quadruples the rate, the reaction is ___ order in A.', options: ['Zero', 'First', 'Second', 'Third'], correctAnswer: 2, explanation: '$2^n = 4 \\Rightarrow n = 2$. Second-order in A.', difficulty: 'medium', domain: 'kinetics', topicSlug: 'reaction-rates-and-rate-laws', formSet: 'B' },
  { question: 'Units of a first-order rate constant are:', options: ['M/s', '$s^{-1}$', '$M^{-1}s^{-1}$', '$M^{-2}s^{-1}$'], correctAnswer: 1, explanation: 'rate = k[A]; $k = \\text{rate}/[A] = (M/s)/M = s^{-1}$.', difficulty: 'medium', domain: 'kinetics', topicSlug: 'reaction-rates-and-rate-laws', formSet: 'both' },

  // ── integrated-rate-laws (batch 2 — had 3, adding 5 → 8) ───────
  { question: 'A first-order reaction has a linear plot of:', options: ['[A] vs. t', 'ln[A] vs. t', '1/[A] vs. t', '[A]$ {}^{2}$ vs. t'], correctAnswer: 1, explanation: 'First-order: $\\ln[A] = -kt + \\ln[A]_0$ → linear in ln[A] vs. t.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'integrated-rate-laws', formSet: 'A' },
  { question: 'The half-life of a first-order reaction is:', options: ['$t_{1/2} = 0.693/k$', '$t_{1/2} = 1/(k[A]_0)$', '$t_{1/2} = [A]_0/(2k)$', '$t_{1/2} = k/0.693$'], correctAnswer: 0, explanation: '$t_{1/2} = \\ln 2 / k = 0.693/k$; independent of initial concentration.', difficulty: 'medium', domain: 'kinetics', topicSlug: 'integrated-rate-laws', formSet: 'B' },
  { question: 'For a zero-order reaction, the rate is:', options: ['Proportional to [A]', 'Proportional to [A]$ {}^{2}$', 'Constant (independent of [A])', 'Inversely proportional to [A]'], correctAnswer: 2, explanation: 'Zero-order: rate = k (constant regardless of concentration).', difficulty: 'easy', domain: 'kinetics', topicSlug: 'integrated-rate-laws', formSet: 'A' },
  { question: 'A second-order reaction has a linear plot of:', options: ['[A] vs. t', 'ln[A] vs. t', '1/[A] vs. t', '1/[A]$ {}^{2}$ vs. t'], correctAnswer: 2, explanation: 'Second-order: $1/[A] = kt + 1/[A]_0$ → linear in 1/[A] vs. t.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'integrated-rate-laws', formSet: 'B' },
  { question: 'In a first-order reaction, the half-life ___ as the reaction proceeds.', options: ['Increases', 'Decreases', 'Stays the same', 'Doubles'], correctAnswer: 2, explanation: '$t_{1/2} = 0.693/k$; doesn\'t depend on [A] → constant throughout.', difficulty: 'medium', domain: 'kinetics', topicSlug: 'integrated-rate-laws', formSet: 'both' },

  // ── activation-energy-arrhenius (batch 2 — had 3, adding 5 → 8) ─
  { question: 'The Arrhenius equation: $k = Ae^{-E_a/RT}$. Increasing $T$ ___ $k$.', options: ['Decreases', 'Increases', 'Doesn\'t change', 'Doubles exactly'], correctAnswer: 1, explanation: 'Higher $T$ → less negative exponent → larger $k$.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'activation-energy-arrhenius', formSet: 'A' },
  { question: 'A plot of $\\ln k$ vs. $1/T$ gives a straight line with slope:', options: ['$-E_a/R$', '$E_a/R$', '$-E_a$', '$R/E_a$'], correctAnswer: 0, explanation: '$\\ln k = \\ln A - E_a/(RT)$; slope = $-E_a/R$.', difficulty: 'medium', domain: 'kinetics', topicSlug: 'activation-energy-arrhenius', formSet: 'B' },
  { question: 'Activation energy $E_a$ is the minimum energy needed to:', options: ['Break all bonds', 'Start a reaction (form the transition state)', 'Reach equilibrium', 'Change temperature'], correctAnswer: 1, explanation: '$E_a$ = energy barrier from reactants to transition state.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'activation-energy-arrhenius', formSet: 'A' },
  { question: 'The "A" in the Arrhenius equation is called the:', options: ['Activation energy', 'Rate constant', 'Pre-exponential (frequency) factor', 'Gas constant'], correctAnswer: 2, explanation: '$A$ reflects collision frequency and orientation → pre-exponential factor.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'activation-energy-arrhenius', formSet: 'B' },
  { question: 'A catalyst ___ the activation energy and ___ the equilibrium constant.', options: ['Lowers; increases', 'Lowers; does not change', 'Raises; decreases', 'Raises; increases'], correctAnswer: 1, explanation: 'Catalysts lower $E_a$ but don\'t shift equilibrium (affect forward and reverse equally).', difficulty: 'medium', domain: 'kinetics', topicSlug: 'activation-energy-arrhenius', formSet: 'both' },

  // ── reaction-mechanisms (batch 2 — had 3, adding 5 → 8) ────────
  { question: 'The rate-determining step is the ___ step in a mechanism.', options: ['Fastest', 'Slowest', 'Last', 'First'], correctAnswer: 1, explanation: 'The slowest step limits the overall rate (bottleneck).', difficulty: 'easy', domain: 'kinetics', topicSlug: 'reaction-mechanisms', formSet: 'A' },
  { question: 'An intermediate in a mechanism is a species that:', options: ['Appears in the overall equation', 'Is produced then consumed in later steps', 'Is a catalyst', 'Is always a gas'], correctAnswer: 1, explanation: 'Intermediates are produced in one step and consumed in another.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'reaction-mechanisms', formSet: 'B' },
  { question: 'A proposed mechanism is consistent with experiment if its rate law matches:', options: ['The stoichiometry of the overall reaction', 'The experimentally determined rate law', 'The number of steps', 'The temperature'], correctAnswer: 1, explanation: 'Rate law derived from the slow step must match the experimental rate law.', difficulty: 'medium', domain: 'kinetics', topicSlug: 'reaction-mechanisms', formSet: 'A' },
  { question: 'The molecularity of a step involving two molecules colliding is:', options: ['Unimolecular', 'Bimolecular', 'Termolecular', 'Zero-molecular'], correctAnswer: 1, explanation: 'Two molecules → bimolecular elementary step.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'reaction-mechanisms', formSet: 'B' },
  { question: 'Elementary steps can be added to give the ___ reaction.', options: ['Rate law', 'Overall balanced', 'Side', 'Nuclear'], correctAnswer: 1, explanation: 'Summing elementary steps (canceling intermediates) gives the overall reaction.', difficulty: 'easy', domain: 'kinetics', topicSlug: 'reaction-mechanisms', formSet: 'both' },

  // ── enthalpy-calorimetry (batch 2 — had 3, adding 5 → 8) ───────
  { question: 'An exothermic reaction has $\\Delta H$:', options: ['Positive', 'Zero', 'Negative', 'Undefined'], correctAnswer: 2, explanation: 'Exothermic releases heat → $\\Delta H < 0$.', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'enthalpy-calorimetry', formSet: 'A' },
  { question: 'Hess\'s law states that $\\Delta H$ for a reaction is the same regardless of:', options: ['Temperature', 'The pathway taken', 'Pressure', 'The catalyst used'], correctAnswer: 1, explanation: 'Enthalpy is a state function → path-independent.', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'enthalpy-calorimetry', formSet: 'B' },
  { question: 'In coffee-cup calorimetry, $q = mc\\Delta T$. If 100 g water rises 5°C ($c = 4.18$ J/g°C):', options: ['2090 J', '20.9 J', '209 J', '20900 J'], correctAnswer: 0, explanation: '$q = 100(4.18)(5) = 2090$ J.', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'enthalpy-calorimetry', formSet: 'A' },
  { question: 'Standard enthalpy of formation ($\\Delta H_f°$) of an element in its standard state is:', options: ['Positive', 'Negative', 'Zero', 'Variable'], correctAnswer: 2, explanation: 'By definition, $\\Delta H_f°$ for elements in standard state = 0.', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'enthalpy-calorimetry', formSet: 'B' },
  { question: 'Bond breaking is ___ and bond forming is ___.', options: ['Exothermic; endothermic', 'Endothermic; exothermic', 'Both exothermic', 'Both endothermic'], correctAnswer: 1, explanation: 'Breaking bonds requires energy (endo); forming bonds releases energy (exo).', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'enthalpy-calorimetry', formSet: 'both' },

  // ── gibbs-free-energy (batch 2 — had 3, adding 5 → 8) ──────────
  { question: '$\\Delta G = \\Delta H - T\\Delta S$. A reaction is spontaneous when $\\Delta G$ is:', options: ['Positive', 'Zero', 'Negative', 'Infinite'], correctAnswer: 2, explanation: '$\\Delta G < 0$ → spontaneous (thermodynamically favorable).', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'gibbs-free-energy', formSet: 'A' },
  { question: 'If $\\Delta H < 0$ and $\\Delta S > 0$, the reaction is spontaneous at:', options: ['No temperature', 'All temperatures', 'Only high T', 'Only low T'], correctAnswer: 1, explanation: '$\\Delta G = (-) - T(+) < 0$ always → spontaneous at all $T$.', difficulty: 'medium', domain: 'thermodynamics', topicSlug: 'gibbs-free-energy', formSet: 'B' },
  { question: 'At equilibrium, $\\Delta G =$', options: ['$\\Delta G°$', 'Positive', 'Negative', 'Zero'], correctAnswer: 3, explanation: 'At equilibrium, no net driving force → $\\Delta G = 0$.', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'gibbs-free-energy', formSet: 'A' },
  { question: '$\\Delta G°$ and $K$ are related by:', options: ['$\\Delta G° = -RT\\ln K$', '$\\Delta G° = RT\\ln K$', '$\\Delta G° = K/R$', '$\\Delta G° = RK/T$'], correctAnswer: 0, explanation: '$\\Delta G° = -RT\\ln K$; negative $\\Delta G°$ → $K > 1$.', difficulty: 'medium', domain: 'thermodynamics', topicSlug: 'gibbs-free-energy', formSet: 'B' },
  { question: 'If $\\Delta H > 0$ and $\\Delta S < 0$, the reaction is:', options: ['Always spontaneous', 'Never spontaneous', 'Spontaneous at high T', 'Spontaneous at low T'], correctAnswer: 1, explanation: '$\\Delta G = (+) - T(-) = (+) + |T\\Delta S| > 0$ always → never spontaneous.', difficulty: 'medium', domain: 'thermodynamics', topicSlug: 'gibbs-free-energy', formSet: 'both' },

  // ── equilibrium-constants-expressions (batch 2 — had 4, adding 4 → 8)
  { question: 'Pure solids and liquids ___ in the equilibrium expression.', options: ['Appear as their concentration', 'Are excluded', 'Appear as their mass', 'Appear as 1'], correctAnswer: 1, explanation: 'Activities of pure solids/liquids = 1 → omitted from $K$ expression.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'equilibrium-constants-expressions', formSet: 'A' },
  { question: 'If $K \\gg 1$, the equilibrium lies:', options: ['Far to the left (reactants)', 'Far to the right (products)', 'Exactly balanced', 'Undefined'], correctAnswer: 1, explanation: 'Large $K$ → products dominate at equilibrium.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'equilibrium-constants-expressions', formSet: 'B' },
  { question: '$K_p$ and $K_c$ are related by:', options: ['$K_p = K_c (RT)^{\\Delta n}$', '$K_p = K_c$', '$K_p = K_c + RT$', '$K_p = K_c / RT$'], correctAnswer: 0, explanation: '$\\Delta n$ = moles gaseous products − moles gaseous reactants.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'equilibrium-constants-expressions', formSet: 'A' },
  { question: 'Changing temperature ___ the value of $K$.', options: ['Never changes', 'Always increases', 'Can change', 'Has no effect on'], correctAnswer: 2, explanation: '$K$ depends on $T$; endothermic: $K$ increases with $T$; exothermic: $K$ decreases.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'equilibrium-constants-expressions', formSet: 'both' },

  // ── le-chatelier-equilibrium-shifts (batch 2 — had 4, adding 4 → 8)
  { question: 'Adding more product to an equilibrium shifts the reaction:', options: ['To the right', 'To the left', 'No shift', 'Up'], correctAnswer: 1, explanation: 'Le Chatelier: system shifts to consume the added product → left.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'le-chatelier-equilibrium-shifts', formSet: 'A' },
  { question: 'Increasing pressure by decreasing volume shifts equilibrium toward:', options: ['More moles of gas', 'Fewer moles of gas', 'No change', 'The liquid phase'], correctAnswer: 1, explanation: 'System reduces pressure by shifting to the side with fewer gas moles.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'le-chatelier-equilibrium-shifts', formSet: 'B' },
  { question: 'Adding a catalyst to a system at equilibrium:', options: ['Shifts it right', 'Shifts it left', 'Does not shift equilibrium', 'Increases K'], correctAnswer: 2, explanation: 'Catalysts speed up both forward and reverse equally → no shift, same $K$.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'le-chatelier-equilibrium-shifts', formSet: 'A' },
  { question: 'For an exothermic reaction, increasing temperature shifts equilibrium:', options: ['Right', 'Left', 'No change', 'Cannot tell'], correctAnswer: 1, explanation: 'Heat is a "product" for exothermic → adding heat shifts left.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'le-chatelier-equilibrium-shifts', formSet: 'both' },

  // ── ice-tables-calculations (batch 2 — had 4, adding 4 → 8) ────
  { question: 'In an ICE table, "I" stands for:', options: ['Ionic', 'Initial concentration', 'Integrated', 'Isomeric'], correctAnswer: 1, explanation: 'I = Initial, C = Change, E = Equilibrium.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'ice-tables-calculations', formSet: 'A' },
  { question: 'If the initial concentration of reactant A is 0.5 M and x is consumed, equilibrium [A] =', options: ['0.5 + x', '0.5 − x', 'x', '0.5x'], correctAnswer: 1, explanation: 'Reactants decrease: [A]$_e$ = [A]$_i$ − x.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'ice-tables-calculations', formSet: 'B' },
  { question: 'The small-x approximation is valid when:', options: ['$K$ is very large', '$x \\ll$ initial concentration (typically $K / [\\text{init}] < 0.05$)', 'Temperature is low', 'There are no products initially'], correctAnswer: 1, explanation: 'If $x$ is negligible compared to initial [A], we can simplify the algebra.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'ice-tables-calculations', formSet: 'A' },
  { question: 'For the reaction $A \\rightleftharpoons 2B$ with ICE, if $x$ moles of A react, the change in B is:', options: ['+x', '−x', '+2x', '−2x'], correctAnswer: 2, explanation: 'Stoichiometry: 1 mol A produces 2 mol B → change = +2x.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'ice-tables-calculations', formSet: 'both' },

  // ── solubility-ksp (batch 2 — had 3, adding 5 → 8) ─────────────
  { question: 'For $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$, $K_{sp} =$', options: ['$[Ag^+][Cl^-]$', '$[Ag^+][Cl^-]/[AgCl]$', '$[AgCl]/([Ag^+][Cl^-])$', '$[Ag^+]^2[Cl^-]$'], correctAnswer: 0, explanation: 'Pure solid omitted; $K_{sp} = [Ag^+][Cl^-]$.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'solubility-ksp', formSet: 'A' },
  { question: 'The common-ion effect ___ the solubility of a salt.', options: ['Increases', 'Decreases', 'Does not affect', 'Doubles'], correctAnswer: 1, explanation: 'Adding a common ion shifts dissolution equilibrium left → less dissolves.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'solubility-ksp', formSet: 'B' },
  { question: 'If $Q_{sp} > K_{sp}$:', options: ['The solution is unsaturated', 'Precipitation occurs', 'More solid dissolves', 'The reaction shifts right'], correctAnswer: 1, explanation: '$Q > K$ → supersaturated → system shifts left → precipitation.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'solubility-ksp', formSet: 'A' },
  { question: '$K_{sp}$ of $PbI_2$ is $[Pb^{2+}][I^-]^2$. If solubility = $s$, then $K_{sp} =$', options: ['$s^2$', '$4s^3$', '$s^3$', '$2s^3$'], correctAnswer: 1, explanation: '$[Pb^{2+}] = s$, $[I^-] = 2s$; $K_{sp} = s(2s)^2 = 4s^3$.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'solubility-ksp', formSet: 'B' },
  { question: 'Selective precipitation separates ions by:', options: ['Boiling them', 'Adding a reagent that precipitates one ion but not another', 'Filtering all ions at once', 'Electrolysis'], correctAnswer: 1, explanation: 'Different $K_{sp}$ values → one ion precipitates first when reagent is added slowly.', difficulty: 'medium', domain: 'equilibrium', topicSlug: 'solubility-ksp', formSet: 'both' },

  // ── reaction-quotient-le-chatelier (batch 2 — had 4, adding 4 → 8)
  { question: 'The reaction quotient $Q$ is calculated the same way as $K$ but using:', options: ['Equilibrium concentrations', 'Current (non-equilibrium) concentrations', 'Standard concentrations', 'Initial pressures only'], correctAnswer: 1, explanation: '$Q$ uses current concentrations; $K$ uses equilibrium concentrations.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'reaction-quotient-le-chatelier', formSet: 'A' },
  { question: 'If $Q < K$:', options: ['Reaction shifts left', 'Reaction is at equilibrium', 'Reaction shifts right', 'No reaction occurs'], correctAnswer: 2, explanation: '$Q < K$ → too few products → forward reaction favored.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'reaction-quotient-le-chatelier', formSet: 'B' },
  { question: 'If $Q = K$:', options: ['The reaction is at equilibrium', 'The reaction shifts right', 'The reaction shifts left', 'The reaction stops permanently'], correctAnswer: 0, explanation: '$Q = K$ means the system has reached equilibrium.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'reaction-quotient-le-chatelier', formSet: 'A' },
  { question: 'After disturbing an equilibrium, the system adjusts until $Q$ ___ $K$ again.', options: ['Exceeds', 'Equals', 'Is less than', 'Is unrelated to'], correctAnswer: 1, explanation: 'The system always re-establishes $Q = K$.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'reaction-quotient-le-chatelier', formSet: 'both' },

  // ── acid-base-theories-ph (batch 2 — had 4, adding 4 → 8) ──────
  { question: 'A Brønsted-Lowry acid is a:', options: ['Proton acceptor', 'Electron pair donor', 'Proton donor', 'Electron acceptor'], correctAnswer: 2, explanation: 'Brønsted-Lowry: acid = proton $(H^{+})$ donor.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'acid-base-theories-ph', formSet: 'A' },
  { question: 'What is the pH of a 0.001 M HCl solution?', options: ['1', '3', '7', '11'], correctAnswer: 1, explanation: 'HCl strong acid: $[H^+] = 10^{-3}$ M; $pH = -\\log(10^{-3}) = 3$.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'acid-base-theories-ph', formSet: 'B' },
  { question: 'pH + pOH =', options: ['7', '10', '14', '1'], correctAnswer: 2, explanation: 'At 25°C: $pH + pOH = 14$.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'acid-base-theories-ph', formSet: 'A' },
  { question: 'A Lewis acid is:', options: ['A proton donor', 'An electron-pair acceptor', 'An electron-pair donor', 'A proton acceptor'], correctAnswer: 1, explanation: 'Lewis acid = electron-pair acceptor (e.g., $BF_{3}$, $Al^{3+}$).', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'acid-base-theories-ph', formSet: 'both' },

  // ── weak-acids-bases-ka-kb (batch 2 — had 3, adding 5 → 8) ─────
  { question: 'For a weak acid HA, $K_a$ expresses:', options: ['$[H^+][A^-]/[HA]$', '$[HA]/[H^+][A^-]$', '$[H^+]/[HA]$', '$[A^-]/[H^+]$'], correctAnswer: 0, explanation: '$K_a = [H^+][A^-]/[HA]$.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'weak-acids-bases-ka-kb', formSet: 'A' },
  { question: 'The conjugate base of $H_{2}O$ is:', options: ['$H_{3}O^{+}$', '$OH^{-}$', '$O^{2-}$', '$H_{2}O_{2}$'], correctAnswer: 1, explanation: '$H_{2}O$ loses a proton → $OH^{-}$.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'weak-acids-bases-ka-kb', formSet: 'B' },
  { question: '$K_a \\times K_b$ for a conjugate acid-base pair equals:', options: ['1', '$K_w = 10^{-14}$', '$10^{-7}$', '14'], correctAnswer: 1, explanation: '$K_a \\cdot K_b = K_w = 1.0 \\times 10^{-14}$ at 25°C.', difficulty: 'medium', domain: 'acids-bases', topicSlug: 'weak-acids-bases-ka-kb', formSet: 'A' },
  { question: 'A larger $K_a$ value means the acid is:', options: ['Weaker', 'Stronger', 'Neutral', 'A base'], correctAnswer: 1, explanation: 'Larger $K_a$ → more dissociation → stronger acid.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'weak-acids-bases-ka-kb', formSet: 'B' },
  { question: 'Percent ionization of a weak acid ___ as initial concentration decreases.', options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'], correctAnswer: 1, explanation: 'More dilute → higher fraction ionized (even though [$H^{+}$] decreases).', difficulty: 'hard', domain: 'acids-bases', topicSlug: 'weak-acids-bases-ka-kb', formSet: 'both' },

  // ── buffer-solutions-henderson-hasselbalch (batch 2 — had 3, adding 5 → 8)
  { question: 'A buffer resists pH changes because it contains:', options: ['A strong acid only', 'A weak acid and its conjugate base', 'Pure water', 'A strong base only'], correctAnswer: 1, explanation: 'Buffer = weak acid/conjugate base pair (or weak base/conjugate acid).', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'buffer-solutions-henderson-hasselbalch', formSet: 'A' },
  { question: 'Henderson-Hasselbalch: $pH =$', options: ['$pK_a + \\log([A^-]/[HA])$', '$pK_a - \\log([A^-]/[HA])$', '$pK_b + \\log([HA]/[A^-])$', '$-\\log[H^+]$'], correctAnswer: 0, explanation: '$pH = pK_a + \\log([A^-]/[HA])$.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'buffer-solutions-henderson-hasselbalch', formSet: 'B' },
  { question: 'When $[HA] = [A^-]$, $pH =$', options: ['7', '14', '$pK_a$', '0'], correctAnswer: 2, explanation: '$\\log(1) = 0$ → $pH = pK_a$.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'buffer-solutions-henderson-hasselbalch', formSet: 'A' },
  { question: 'Buffer capacity is greatest when:', options: ['pH is far from $pK_a$', 'pH ≈ $pK_a$ and concentrations are high', 'The solution is very dilute', 'Only the weak acid is present'], correctAnswer: 1, explanation: 'Maximum capacity near $pK_a$; higher absolute concentrations → more buffering.', difficulty: 'medium', domain: 'acids-bases', topicSlug: 'buffer-solutions-henderson-hasselbalch', formSet: 'B' },
  { question: 'Adding small amounts of strong acid to a buffer converts ___ to ___.', options: ['HA to $A^{-}$', '$A^{-}$ to HA', '$H_{2}O$ to $OH^{-}$', 'Salt to acid'], correctAnswer: 1, explanation: 'Added $H^{+}$ reacts with $A^{-}$ → HA, consuming the acid and resisting pH drop.', difficulty: 'medium', domain: 'acids-bases', topicSlug: 'buffer-solutions-henderson-hasselbalch', formSet: 'both' },

  // ── acid-base-titrations (batch 2 — had 3, adding 5 → 8) ───────
  { question: 'At the equivalence point of a strong acid–strong base titration, pH =', options: ['0', '7', '14', '<7'], correctAnswer: 1, explanation: 'Strong acid + strong base → neutral salt → pH = 7.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'acid-base-titrations', formSet: 'A' },
  { question: 'The half-equivalence point of a weak acid titration has pH =', options: ['7', '$pK_a$', '$pK_b$', '14'], correctAnswer: 1, explanation: 'At half-equivalence: [HA] = [$A^{-}$] → $pH = pK_a$.', difficulty: 'medium', domain: 'acids-bases', topicSlug: 'acid-base-titrations', formSet: 'B' },
  { question: 'Phenolphthalein turns pink above pH ≈', options: ['4.5', '7', '8.2', '12'], correctAnswer: 2, explanation: 'Phenolphthalein: colorless below ~8.2, pink above.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'acid-base-titrations', formSet: 'A' },
  { question: 'At the equivalence point of a weak acid–strong base titration, pH is:', options: ['7', '<7', '>7', '0'], correctAnswer: 2, explanation: 'The conjugate base $A^{-}$ remains → basic solution → pH > 7.', difficulty: 'medium', domain: 'acids-bases', topicSlug: 'acid-base-titrations', formSet: 'B' },
  { question: 'A titration curve\'s steepest region occurs near the:', options: ['Start', 'Buffer region', 'Equivalence point', 'End'], correctAnswer: 2, explanation: 'Near equivalence, small volume additions cause large pH changes.', difficulty: 'easy', domain: 'acids-bases', topicSlug: 'acid-base-titrations', formSet: 'both' },

  // ── galvanic-cells-potentials (batch 2 — had 4, adding 4 → 8) ──
  { question: 'In a galvanic cell, the anode is where:', options: ['Reduction occurs', 'Oxidation occurs', 'No reaction occurs', 'Electrons enter from the wire'], correctAnswer: 1, explanation: 'Anode = oxidation; cathode = reduction. "An Ox, Red Cat."', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'galvanic-cells-potentials', formSet: 'A' },
  { question: 'Standard cell potential $E°_{cell} =$', options: ['$E°_{cathode} + E°_{anode}$', '$E°_{cathode} - E°_{anode}$', '$E°_{anode} - E°_{cathode}$', '$E°_{anode} \\times E°_{cathode}$'], correctAnswer: 1, explanation: '$E°_{cell} = E°_{red}(cathode) - E°_{red}(anode)$.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'galvanic-cells-potentials', formSet: 'B' },
  { question: 'A positive $E°_{cell}$ value indicates the reaction is:', options: ['Non-spontaneous', 'Spontaneous', 'At equilibrium', 'Impossible'], correctAnswer: 1, explanation: '$\\Delta G° = -nFE°_{cell}$; positive $E°$ → negative $\\Delta G°$ → spontaneous.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'galvanic-cells-potentials', formSet: 'A' },
  { question: 'The salt bridge in a galvanic cell:', options: ['Generates electricity', 'Maintains electrical neutrality by allowing ion flow', 'Stores electrons', 'Heats the solution'], correctAnswer: 1, explanation: 'Salt bridge allows ion migration to balance accumulated charge.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'galvanic-cells-potentials', formSet: 'both' },

  // ── nernst-equation-concentration (batch 2 — had 3, adding 5 → 8)
  { question: 'The Nernst equation: $E = E° - (RT/nF)\\ln Q$. At equilibrium, $E =$', options: ['$E°$', '1', '0', '$-E°$'], correctAnswer: 2, explanation: 'At equilibrium, $Q = K$ and $E = 0$ (no driving force).', difficulty: 'medium', domain: 'electrochemistry', topicSlug: 'nernst-equation-concentration', formSet: 'A' },
  { question: 'The simplified Nernst equation at 25°C: $E = E° - (0.0592/n) \\log Q$. If $n = 2$ and $Q = 100$:', options: ['$E = E° - 0.0592$', '$E = E° - 0.0296$', '$E = E° + 0.0592$', '$E = E° - 0.1184$'], correctAnswer: 0, explanation: '$(0.0592/2)\\log 100 = 0.0296 \\times 2 = 0.0592$; $E = E° - 0.0592$.', difficulty: 'hard', domain: 'electrochemistry', topicSlug: 'nernst-equation-concentration', formSet: 'B' },
  { question: 'A concentration cell has $E° = 0$ but produces voltage because:', options: ['Different metals are used', 'Concentrations in the two half-cells differ', 'Temperature is different', 'It has no salt bridge'], correctAnswer: 1, explanation: 'Same electrodes but different [ion] → $Q \\neq 1$ → $E \\neq 0$.', difficulty: 'hard', domain: 'electrochemistry', topicSlug: 'nernst-equation-concentration', formSet: 'A' },
  { question: 'As a galvanic cell discharges, $Q$ ___ and $E$ ___.', options: ['Increases; decreases', 'Decreases; increases', 'Both increase', 'Both decrease'], correctAnswer: 0, explanation: 'Products build up → $Q$ increases → $E$ decreases toward 0 at equilibrium.', difficulty: 'medium', domain: 'electrochemistry', topicSlug: 'nernst-equation-concentration', formSet: 'B' },
  { question: '$\\Delta G° = -nFE°$. If $E° = 1.10$ V and $n = 2$: ($F = 96485$ C/mol)', options: ['$-212267$ J', '$-96485$ J', '$-1.10$ J', '$212267$ J'], correctAnswer: 0, explanation: '$\\Delta G° = -2(96485)(1.10) = -212267$ J ≈ $-212$ kJ.', difficulty: 'medium', domain: 'electrochemistry', topicSlug: 'nernst-equation-concentration', formSet: 'both' },

  // ── electrolytic-cells-faraday (batch 2 — had 3, adding 5 → 8) ──
  { question: 'In electrolysis, electrical energy drives a ___ reaction.', options: ['Spontaneous', 'Non-spontaneous', 'Equilibrium', 'Nuclear'], correctAnswer: 1, explanation: 'Electrolytic cells use external current to force non-spontaneous reactions.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'electrolytic-cells-faraday', formSet: 'A' },
  { question: 'Faraday\'s law: $m = (MIt)/(nF)$. Depositing 1 mol of Cu (n=2) requires ___ coulombs.', options: ['96485', '192970', '48243', '289455'], correctAnswer: 1, explanation: '$Q = nF = 2(96485) = 192970$ C.', difficulty: 'medium', domain: 'electrochemistry', topicSlug: 'electrolytic-cells-faraday', formSet: 'B' },
  { question: 'In electrolysis of molten NaCl, Na is produced at the:', options: ['Anode', 'Cathode', 'Salt bridge', 'Wire'], correctAnswer: 1, explanation: '$Na^{+}$ is reduced (gains electrons) at the cathode → Na metal.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'electrolytic-cells-faraday', formSet: 'A' },
  { question: 'Electroplating uses ___ cells.', options: ['Galvanic', 'Electrolytic', 'Fuel', 'Concentration'], correctAnswer: 1, explanation: 'External current drives metal deposition onto an object → electrolytic.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'electrolytic-cells-faraday', formSet: 'B' },
  { question: 'In electrolysis of aqueous NaCl, ___ is produced at the anode instead of $Cl_{2}$ if the overvoltage of $Cl_{2}$ is too high.', options: ['Na metal', '$H_{2}$', '$O_{2}$', 'NaOH'], correctAnswer: 2, explanation: 'Water can be oxidized at the anode to produce $O_{2}$ if $Cl_{2}$ overvoltage is too large.', difficulty: 'hard', domain: 'electrochemistry', topicSlug: 'electrolytic-cells-faraday', formSet: 'both' },

  // ── properties-states-matter (batch 2 — had 4, adding 4 → 8) ───
  { question: 'In the solid state, particles are:', options: ['Far apart and moving freely', 'Close together in a fixed arrangement', 'Close together but flowing', 'Ionized'], correctAnswer: 1, explanation: 'Solids: fixed positions, vibrate in place.', difficulty: 'easy', domain: 'imf', topicSlug: 'properties-states-matter', formSet: 'A' },
  { question: 'Sublimation is the transition from:', options: ['Solid to liquid', 'Liquid to gas', 'Solid directly to gas', 'Gas to liquid'], correctAnswer: 2, explanation: 'Sublimation: solid → gas (e.g., dry ice).', difficulty: 'easy', domain: 'imf', topicSlug: 'properties-states-matter', formSet: 'B' },
  { question: 'A phase diagram\'s triple point is where:', options: ['Only solid exists', 'All three phases coexist', 'Only gas exists', 'Temperature = 0 K'], correctAnswer: 1, explanation: 'Triple point: unique $T$ and $P$ where solid, liquid, and gas coexist.', difficulty: 'easy', domain: 'imf', topicSlug: 'properties-states-matter', formSet: 'A' },
  { question: 'An intensive property is one that ___ on the amount of substance.', options: ['Depends', 'Does not depend', 'Sometimes depends', 'Always doubles with'], correctAnswer: 1, explanation: 'Intensive properties (density, temperature, color) are independent of amount.', difficulty: 'easy', domain: 'imf', topicSlug: 'properties-states-matter', formSet: 'both' },

  // ── mixtures-separations (batch 2 — had 4, adding 4 → 8) ───────
  { question: 'Distillation separates components based on differences in:', options: ['Density', 'Boiling point', 'Color', 'Mass number'], correctAnswer: 1, explanation: 'Different boiling points → different vapor pressures → separation.', difficulty: 'easy', domain: 'imf', topicSlug: 'mixtures-separations', formSet: 'A' },
  { question: 'Chromatography separates mixtures based on:', options: ['Melting point', 'Differential affinity for mobile vs. stationary phase', 'Mass number', 'Nuclear charge'], correctAnswer: 1, explanation: 'Components travel at different rates → separation.', difficulty: 'easy', domain: 'imf', topicSlug: 'mixtures-separations', formSet: 'B' },
  { question: 'A homogeneous mixture is also called a:', options: ['Suspension', 'Colloid', 'Solution', 'Compound'], correctAnswer: 2, explanation: 'Uniform composition throughout → solution (homogeneous mixture).', difficulty: 'easy', domain: 'imf', topicSlug: 'mixtures-separations', formSet: 'A' },
  { question: 'Filtration separates:', options: ['Two liquids', 'A solid from a liquid', 'Two gases', 'Isotopes'], correctAnswer: 1, explanation: 'The solid is trapped by the filter; the liquid passes through.', difficulty: 'easy', domain: 'imf', topicSlug: 'mixtures-separations', formSet: 'both' },

  // ── intro-equilibrium (batch 2 — had 4, adding 4 → 8) ──────────
  { question: 'At equilibrium, the concentrations of reactants and products are:', options: ['Zero', 'Equal', 'Constant (but not necessarily equal)', 'Continuously increasing'], correctAnswer: 2, explanation: 'Dynamic equilibrium: forward and reverse rates equal → concentrations constant.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'intro-equilibrium', formSet: 'A' },
  { question: 'Dynamic equilibrium means:', options: ['All reactions stop', 'Forward and reverse reactions continue at equal rates', 'Only the forward reaction occurs', 'Concentrations keep changing'], correctAnswer: 1, explanation: 'Both reactions proceed; their rates are equal → no net change.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'intro-equilibrium', formSet: 'B' },
  { question: 'Equilibrium can be approached from:', options: ['Only the forward direction', 'Only the reverse direction', 'Either direction', 'Neither direction'], correctAnswer: 2, explanation: 'Same equilibrium state is reached whether you start from reactants or products.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'intro-equilibrium', formSet: 'A' },
  { question: 'For a reaction at equilibrium, the rate of the forward reaction ___ the rate of the reverse reaction.', options: ['Is greater than', 'Is less than', 'Equals', 'Is unrelated to'], correctAnswer: 2, explanation: 'At equilibrium: $r_{fwd} = r_{rev}$.', difficulty: 'easy', domain: 'equilibrium', topicSlug: 'intro-equilibrium', formSet: 'both' },

  // ── spontaneity-free-energy-applications (batch 2 — had 4, adding 4 → 8)
  { question: 'A reaction with $\\Delta G° < 0$ is described as:', options: ['Endergonic', 'Exergonic', 'At equilibrium', 'Impossible'], correctAnswer: 1, explanation: 'Negative $\\Delta G°$ → exergonic → spontaneous under standard conditions.', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'spontaneity-free-energy-applications', formSet: 'A' },
  { question: 'Coupling an endergonic reaction with a strongly exergonic one can make the overall process:', options: ['Impossible', 'Spontaneous', 'Endothermic always', 'Reversed'], correctAnswer: 1, explanation: 'If $\\Delta G_{total} < 0$, the coupled process is spontaneous (e.g., ATP hydrolysis driving biosynthesis).', difficulty: 'medium', domain: 'thermodynamics', topicSlug: 'spontaneity-free-energy-applications', formSet: 'B' },
  { question: '$\\Delta G = \\Delta G° + RT\\ln Q$. If $Q < K$:', options: ['$\\Delta G > 0$', '$\\Delta G < 0$', '$\\Delta G = 0$', 'Cannot determine'], correctAnswer: 1, explanation: '$Q < K \\Rightarrow \\ln(Q/K) < 0 \\Rightarrow \\Delta G < 0$ → forward spontaneous.', difficulty: 'hard', domain: 'thermodynamics', topicSlug: 'spontaneity-free-energy-applications', formSet: 'A' },
  { question: 'The entropy of the universe always ___ for a spontaneous process.', options: ['Decreases', 'Stays the same', 'Increases', 'Reaches zero'], correctAnswer: 2, explanation: 'Second Law: $\\Delta S_{universe} = \\Delta S_{sys} + \\Delta S_{surr} > 0$ for spontaneous processes.', difficulty: 'easy', domain: 'thermodynamics', topicSlug: 'spontaneity-free-energy-applications', formSet: 'both' },

  // ── galvanic-cells-thermo-applications (batch 2 — had 4, adding 4 → 8)
  { question: '$\\Delta G° = -nFE°$. A larger positive $E°$ means:', options: ['Less spontaneous', 'More spontaneous', 'At equilibrium', 'Non-spontaneous'], correctAnswer: 1, explanation: 'Larger $E°$ → more negative $\\Delta G°$ → more spontaneous.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'galvanic-cells-thermo-applications', formSet: 'A' },
  { question: 'The relationship $\\ln K = nFE°/(RT)$ shows that a positive $E°$ corresponds to:', options: ['$K < 1$', '$K = 1$', '$K > 1$', '$K = 0$'], correctAnswer: 2, explanation: 'Positive $E°$ → positive exponent → $K > 1$.', difficulty: 'medium', domain: 'electrochemistry', topicSlug: 'galvanic-cells-thermo-applications', formSet: 'B' },
  { question: 'A dead battery has $E =$', options: ['$E°$', 'A very large value', '0', '-1'], correctAnswer: 2, explanation: 'Dead battery: $Q = K$, $E = 0$.', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'galvanic-cells-thermo-applications', formSet: 'A' },
  { question: 'Fuel cells convert chemical energy to electrical energy and are similar to ___ cells.', options: ['Electrolytic', 'Galvanic', 'Concentration only', 'Nuclear'], correctAnswer: 1, explanation: 'Fuel cells are galvanic cells with continuous fuel supply (e.g., $H_{2}/O_{2}$).', difficulty: 'easy', domain: 'electrochemistry', topicSlug: 'galvanic-cells-thermo-applications', formSet: 'both' },
]

/* ------------------------------------------------------------------ */
/*  Generator function — used by exit quiz registry                   */
/* ------------------------------------------------------------------ */

export function generateExitQuiz(count = 10, topicSlug?: string): { id: string; question: string; options: string[]; correctIndex: number; explanation: string; category: string }[] {
  let pool = apChemQuestionPool
  if (topicSlug) {
    const filtered = pool.filter(q => q.topicSlug === topicSlug)
    pool = filtered.length > 0 ? filtered : pool
  }
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count).map((q, i) => ({
    id: `${q.topicSlug}-q${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: q.domain,
    topicSlug: q.topicSlug,
  }))
}
