import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Chemistry practice exam, form 3: 7 FRQs (May 2027 Section II).
 *   Q1–Q3 long (10 points each): solubility equilibrium + titration;
 *          galvanic cell + electrolysis stoichiometry; heating, phase changes
 *          and intermolecular forces.
 *   Q4–Q7 short (4 points each): collision theory; molecular geometry;
 *          photoelectron spectroscopy; gas collection and the gas constant.
 * One RubricPoint = one point. 105 minutes; calculator, periodic table and
 * equations sheet allowed.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1 LONG: Solubility equilibrium + acid-base titration ---- */
  {
    type: 'saq',
    topic: 'long-frq-solubility-titration',
    prompt: `**FRQ 1 — Long (10 points): The Solubility Product of Calcium Hydroxide**

A student determines $K_{sp}$ for calcium hydroxide at 25 °C. Excess solid $\\text{Ca(OH)}_2$ is stirred in distilled water until no more dissolves, and the mixture is filtered. A 25.00 mL sample of the clear, saturated filtrate is titrated with 0.0500 M HCl using phenolphthalein, and the endpoint is reached after 21.40 mL of HCl has been added.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Write the balanced equation for the dissolution of $\\text{Ca(OH)}_2(s)$ in water, and write the expression for $K_{sp}$.',
        rubric: [
          { id: 'a1', label: '1 pt — Dissolution equation', description: '$\\text{Ca(OH)}_2(s) \\rightleftharpoons \\text{Ca}^{2+}(aq) + 2\\text{OH}^-(aq)$, with the coefficient 2 on $\\text{OH}^-$.' },
          { id: 'a2', label: '1 pt — Ksp expression', description: '$K_{sp} = [\\text{Ca}^{2+}][\\text{OH}^-]^2$. Including $[\\text{Ca(OH)}_2]$ in the expression does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate $[\\text{OH}^-]$ in the saturated solution.',
        rubric: [
          { id: 'b1', label: '1 pt — Moles of HCl, equal to moles of OH⁻', description: '$(0.02140 \\text{ L})(0.0500 \\text{ M}) = 1.07 \\times 10^{-3}$ mol HCl, which reacts 1 : 1 with $\\text{OH}^-$ ($\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$), so the sample contained $1.07 \\times 10^{-3}$ mol $\\text{OH}^-$.' },
          { id: 'b2', label: '1 pt — Concentration of OH⁻', description: '$[\\text{OH}^-] = 1.07 \\times 10^{-3} \\text{ mol}/0.02500 \\text{ L} = 0.0428$ M (or a value consistent with b1). Dividing by the total volume (46.40 mL) does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Calculate the value of $K_{sp}$ for $\\text{Ca(OH)}_2$ from the student\'s data.',
        rubric: [
          { id: 'c1', label: '1 pt — [Ca²⁺] from the 1 : 2 ratio', description: '$[\\text{Ca}^{2+}] = \\tfrac{1}{2}[\\text{OH}^-] = 0.0214$ M (consistent with part (b)).' },
          { id: 'c2', label: '1 pt — Correct Ksp', description: '$K_{sp} = (0.0214)(0.0428)^2 = 3.92 \\times 10^{-5}$ (accept $3.9 \\times 10^{-5}$). Consistency rule: this point is earned for $[\\text{Ca}^{2+}][\\text{OH}^-]^2$ evaluated with the student\'s own values from c1 and part (b), so an error in c1 is penalized only once; forgetting to square $[\\text{OH}^-]$ does not earn the point. Grade against the student\'s data, not against a literature value of $K_{sp}$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Calculate the pH of the saturated $\\text{Ca(OH)}_2$ solution at 25 °C.',
        rubric: [
          { id: 'd1', label: '1 pt — Correct pH', description: 'pOH $= -\\log(0.0428) = 1.37$, so pH $= 14.00 - 1.37 = 12.63$ (accept 12.6, or a value consistent with part (b)).' },
        ],
      },
      {
        letter: 'e',
        question: '(e) Suppose a few particles of undissolved $\\text{Ca(OH)}_2(s)$ passed through the filter into the 25.00 mL sample that was titrated. Would the calculated value of $K_{sp}$ be too high, too low, or unaffected? Justify your answer.',
        rubric: [
          { id: 'e1', label: '1 pt — Too high, with a reason', description: 'Too high: the solid particles also react with HCl during the titration, so more HCl is needed and the calculated $[\\text{OH}^-]$ and $[\\text{Ca}^{2+}]$ (and therefore $K_{sp}$) are larger than the true values. Both the direction and the reason are needed.' },
        ],
      },
      {
        letter: 'f',
        question: '(f) The student next adds excess $\\text{Ca(OH)}_2(s)$ to 0.50 M NaOH instead of to distilled water. (i) Predict whether the molar solubility of $\\text{Ca(OH)}_2$ will be greater than, less than, or equal to its solubility in distilled water, and justify your prediction. (ii) Using your $K_{sp}$ from part (c), calculate the molar solubility of $\\text{Ca(OH)}_2$ in 0.50 M NaOH.',
        rubric: [
          { id: 'f1', label: '1 pt — Less soluble, because of the common ion', description: 'The molar solubility is lower, because the $\\text{OH}^-$ already present from NaOH (a common ion) makes $Q_{sp}$ larger, so the equilibrium lies farther toward the solid. A prediction without a reason based on the common ion or Le Châtelier\'s principle does not earn the point.' },
          { id: 'f2', label: '1 pt — Molar solubility in 0.50 M NaOH', description: '$K_{sp} = s(0.50)^2$, so $s = 3.92 \\times 10^{-5}/0.25 = 1.6 \\times 10^{-4}$ M (or a value consistent with part (c)). Treating $[\\text{OH}^-]$ as $2s$ or as 0.50 M without squaring does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Ca(OH)₂(s) ⇌ Ca²⁺(aq) + 2OH⁻(aq); K_sp = [Ca²⁺][OH⁻]². (b) (0.02140 L)(0.0500 M) = 1.07 × 10⁻³ mol HCl = mol OH⁻; [OH⁻] = 1.07 × 10⁻³/0.02500 = 0.0428 M. (c) [Ca²⁺] = 0.0214 M; K_sp = (0.0214)(0.0428)² = 3.92 × 10⁻⁵. (d) pOH = 1.37, pH = 12.63. (e) Too high: the solid particles also neutralize HCl, so the calculated [OH⁻] and K_sp are too large. (f)(i) Less soluble, because OH⁻ from NaOH is a common ion that shifts the dissolution equilibrium toward the solid. (ii) s = 3.92 × 10⁻⁵/(0.50)² = 1.6 × 10⁻⁴ M.',
  },

  /* ---- Q2 LONG: Galvanic cell + electrochemical stoichiometry ---- */
  {
    type: 'saq',
    topic: 'long-frq-electrochemistry',
    prompt: `**FRQ 2 — Long (10 points): A Zinc–Lead Galvanic Cell**

A galvanic cell is built from a zinc strip in 1.0 M $\\text{Zn(NO}_3\\text{)}_2(aq)$ and a lead strip in 1.0 M $\\text{Pb(NO}_3\\text{)}_2(aq)$. The two half-cells are joined by a wire and by a salt bridge filled with $\\text{KNO}_3(aq)$. The temperature is 25 °C. The Faraday constant is $F = 96{,}485$ C/mol $e^-$.

| Half-reaction | $E^\\circ$ (V) |
|---|---|
| $\\text{Pb}^{2+}(aq) + 2e^- \\to \\text{Pb}(s)$ | −0.13 |
| $\\text{Zn}^{2+}(aq) + 2e^- \\to \\text{Zn}(s)$ | −0.76 |`,
    parts: [
      {
        letter: 'a',
        question: '(a) Write the half-reaction that occurs at the anode and the balanced equation for the overall cell reaction.',
        rubric: [
          { id: 'a1', label: '1 pt — Anode half-reaction', description: 'Anode (oxidation): $\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-$. Zinc has the more negative reduction potential, so it is the species oxidized.' },
          { id: 'a2', label: '1 pt — Overall equation', description: '$\\text{Zn}(s) + \\text{Pb}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Pb}(s)$. The reverse reaction does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the standard cell potential, $E^\\circ_{cell}$.',
        rubric: [
          { id: 'b1', label: '1 pt — Correct E°cell', description: '$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = -0.13 - (-0.76) = +0.63$ V. A negative value does not earn the point, because a galvanic cell has a positive cell potential.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Calculate $\\Delta G^\\circ$ for the cell reaction, and state whether the equilibrium constant for the reaction is greater than 1, less than 1, or equal to 1.',
        rubric: [
          { id: 'c1', label: '1 pt — Correct ΔG°', description: '$\\Delta G^\\circ = -nFE^\\circ = -(2)(96{,}485)(0.63) = -1.22 \\times 10^5$ J, or −122 kJ per mole of reaction (consistent with part (b)). The value of n must be 2.' },
          { id: 'c2', label: '1 pt — K > 1, with a reason', description: 'K is greater than 1, because $\\Delta G^\\circ < 0$ (equivalently $E^\\circ > 0$), and $\\Delta G^\\circ = -RT\\ln K$ requires $\\ln K > 0$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) As the cell operates, in which direction do the nitrate ions in the salt bridge move? Justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Toward the zinc half-cell, with a reason', description: '$\\text{NO}_3^-$ ions move toward the zinc (anode) half-cell, because $\\text{Zn}^{2+}$ ions are being produced there and the added negative charge keeps that solution electrically neutral (while $\\text{Pb}^{2+}$ is removed from the lead half-cell). Both the direction and the reason are needed.' },
        ],
      },
      {
        letter: 'e',
        question: '(e) A second cell is built in the same way, except that $[\\text{Pb}^{2+}] = 0.10$ M while $[\\text{Zn}^{2+}]$ remains 1.0 M. Predict whether the initial cell potential of the second cell is greater than, less than, or equal to $E^\\circ_{cell}$. Justify your answer by reasoning about Q; you do not need to calculate the cell potential.',
        rubric: [
          { id: 'e1', label: '1 pt — Less than E°cell', description: 'Predicts that the cell potential is less than +0.63 V.' },
          { id: 'e2', label: '1 pt — Justification using Q', description: '$Q = [\\text{Zn}^{2+}]/[\\text{Pb}^{2+}] = 1.0/0.10 = 10$, which is greater than 1, so the reaction mixture is closer to equilibrium than under standard conditions and the driving force (cell potential) is smaller. An equivalent Le Châtelier argument (less of the reactant $\\text{Pb}^{2+}$ means less driving force for the forward reaction) also earns the point. A justification that cites only a formula, with no reasoning about Q or Le Châtelier\'s principle, does not earn the point.' },
        ],
      },
      {
        letter: 'f',
        question: '(f) The original cell delivers a constant current of 0.150 A for 2.00 hours. Calculate the mass of lead (207.2 g/mol) deposited on the lead electrode.',
        rubric: [
          { id: 'f1', label: '1 pt — Moles of electrons', description: '$q = It = (0.150 \\text{ A})(7200 \\text{ s}) = 1080$ C, and $1080/96{,}485 = 1.12 \\times 10^{-2}$ mol $e^-$. Using 2.00 s or 120 s for the time does not earn the point.' },
          { id: 'f2', label: '1 pt — Mass of lead', description: 'Two electrons per $\\text{Pb}^{2+}$: $1.12 \\times 10^{-2}/2 = 5.60 \\times 10^{-3}$ mol Pb, and $(5.60 \\times 10^{-3})(207.2) = 1.16$ g (accept 1.15–1.16 g, or a value consistent with f1).' },
        ],
      },
    ],
    sampleResponse:
      '(a) Anode: Zn(s) → Zn²⁺(aq) + 2e⁻. Overall: Zn(s) + Pb²⁺(aq) → Zn²⁺(aq) + Pb(s). (b) E° = −0.13 − (−0.76) = +0.63 V. (c) ΔG° = −(2)(96,485)(0.63) = −1.22 × 10⁵ J = −122 kJ; K > 1 because ΔG° < 0. (d) Toward the zinc half-cell, to balance the positive charge of the Zn²⁺ ions forming there. (e) Less than 0.63 V: Q = 1.0/0.10 = 10 > 1, so the cell starts closer to equilibrium and has a smaller driving force. (f) q = 0.150 × 7200 = 1080 C → 1.12 × 10⁻² mol e⁻ → 5.60 × 10⁻³ mol Pb → 1.16 g.',
  },

  /* ---- Q3 LONG: Heating, phase changes and intermolecular forces ---- */
  {
    type: 'saq',
    topic: 'long-frq-thermodynamics-imf',
    prompt: `**FRQ 3 — Long (10 points): Melting and Boiling Benzene**

A 50.0 g sample of solid benzene, $\\text{C}_6\\text{H}_6$ (78.11 g/mol), at its melting point is heated at a constant pressure of 1 atm until all of it has become vapor at its boiling point. Data for benzene are given below.

| Property | Value |
|---|---|
| Normal melting point | 5.5 °C |
| Normal boiling point | 80.1 °C |
| Molar enthalpy of fusion, $\\Delta H_{fus}$ | 9.87 kJ/mol |
| Molar enthalpy of vaporization, $\\Delta H_{vap}$ | 30.7 kJ/mol |
| Specific heat of liquid benzene | 1.74 J/(g·°C) |`,
    parts: [
      {
        letter: 'a',
        question: '(a) While the liquid benzene is boiling at 80.1 °C, heat is added continuously but the temperature does not change. Explain this observation in terms of the energy of the benzene molecules.',
        rubric: [
          { id: 'a1', label: '1 pt — Energy overcomes intermolecular attractions', description: 'The added energy is used to overcome the attractions between benzene molecules as they separate into the vapor (raising their potential energy), not to increase their average kinetic energy, so the temperature stays constant. Saying that "bonds break" without specifying intermolecular attractions does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate (i) the heat needed to warm the 50.0 g of liquid benzene from 5.5 °C to 80.1 °C and (ii) the heat needed to vaporize the 50.0 g of benzene at 80.1 °C.',
        rubric: [
          { id: 'b1', label: '1 pt — Heat to warm the liquid', description: '$q = mc\\Delta T = (50.0)(1.74)(80.1 - 5.5) = (50.0)(1.74)(74.6) = 6.49 \\times 10^3$ J, or 6.49 kJ (accept 6.4–6.5 kJ).' },
          { id: 'b2', label: '1 pt — Heat to vaporize', description: '$50.0/78.11 = 0.640$ mol, and $(0.640)(30.7) = 19.7$ kJ (accept 19.6–19.7 kJ).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Calculate the total heat needed for the whole process, starting with solid benzene at 5.5 °C and ending with benzene vapor at 80.1 °C.',
        rubric: [
          { id: 'c1', label: '1 pt — Heat of fusion included', description: 'Melting requires $(0.640 \\text{ mol})(9.87 \\text{ kJ/mol}) = 6.32$ kJ.' },
          { id: 'c2', label: '1 pt — Correct total', description: '$6.32 + 6.49 + 19.7 = 32.5$ kJ (accept 32.4–32.6 kJ, or a sum consistent with the values in parts (b) and c1).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Predict the sign of $\\Delta S^\\circ$ for the vaporization of benzene, and explain why vaporization at 1 atm is thermodynamically favorable at temperatures above 80.1 °C but not below it.',
        rubric: [
          { id: 'd1', label: '1 pt — ΔS° > 0', description: '$\\Delta S^\\circ$ is positive, because the molecules in the vapor are far more dispersed than in the liquid.' },
          { id: 'd2', label: '1 pt — Temperature dependence from ΔG° = ΔH° − TΔS°', description: 'Both $\\Delta H^\\circ$ and $\\Delta S^\\circ$ are positive, so $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ is negative only when $T\\Delta S^\\circ$ exceeds $\\Delta H^\\circ$, which happens above the boiling point; below it the enthalpy term dominates and $\\Delta G^\\circ > 0$ (at 80.1 °C, $\\Delta G^\\circ = 0$).' },
        ],
      },
      {
        letter: 'e',
        question: '(e) Water has a much smaller molar mass than benzene (18.0 g/mol compared with 78.1 g/mol), yet its molar enthalpy of vaporization (40.7 kJ/mol) is greater. Explain this difference in terms of the types of intermolecular forces in the two liquids.',
        rubric: [
          { id: 'e1', label: '1 pt — Benzene: dispersion forces only', description: 'Benzene is nonpolar, so its molecules attract each other only through London dispersion forces (which are fairly strong because benzene has 42 electrons).' },
          { id: 'e2', label: '1 pt — Water: hydrogen bonding', description: 'Water molecules form hydrogen bonds with one another through their O–H bonds, and these attractions per molecule are stronger than the dispersion forces between benzene molecules, so more energy is needed to vaporize a mole of water. An answer that credits water\'s larger dipole without hydrogen bonding, or claims that water has stronger dispersion forces, does not earn this point.' },
        ],
      },
      {
        letter: 'f',
        question: '(f) Toluene, $\\text{C}_6\\text{H}_5\\text{CH}_3$, is also essentially nonpolar. Predict whether its normal boiling point is higher or lower than that of benzene, and justify your prediction.',
        rubric: [
          { id: 'f1', label: '1 pt — Higher, with a reason', description: 'Higher (toluene boils at 111 °C): toluene has more electrons and a larger, more polarizable electron cloud, so its London dispersion forces are stronger. Both the prediction and the reason are needed.' },
        ],
      },
    ],
    sampleResponse:
      '(a) At the boiling point the added energy separates molecules from one another, overcoming their intermolecular attractions, so it raises their potential energy rather than their average kinetic energy. (b)(i) (50.0)(1.74)(74.6) = 6.49 kJ. (ii) 50.0/78.11 = 0.640 mol × 30.7 kJ/mol = 19.7 kJ. (c) Fusion: 0.640 × 9.87 = 6.32 kJ; total = 6.32 + 6.49 + 19.7 = 32.5 kJ. (d) ΔS° > 0. With ΔH° > 0 and ΔS° > 0, ΔG° = ΔH° − TΔS° is negative only when T is high enough that TΔS° > ΔH°, above 80.1 °C. (e) Benzene has only dispersion forces; water molecules hydrogen bond, and those attractions are stronger per molecule, so water needs more energy per mole to vaporize. (f) Higher, because toluene has more electrons and stronger dispersion forces.',
  },

  /* ---- Q4 SHORT: Collision theory ---- */
  {
    type: 'saq',
    topic: 'short-frq-kinetics',
    prompt: `**FRQ 4 — Short (4 points): Collisions Between CO and NO₂**

At high temperatures, carbon monoxide reacts with nitrogen dioxide in a single elementary step:

$$\\text{CO}(g) + \\text{NO}_2(g) \\to \\text{CO}_2(g) + \\text{NO}(g)$$

In this step an oxygen atom is transferred from $\\text{NO}_2$ to CO.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Write the rate law for this elementary step.',
        rubric: [
          { id: 'a1', label: '1 pt — Rate law from molecularity', description: 'Rate $= k[\\text{CO}][\\text{NO}_2]$, because the rate law of an elementary step follows from its molecularity (here bimolecular, one molecule of each reactant). No justification is required for this point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Most collisions between CO and $\\text{NO}_2$ molecules do not produce $\\text{CO}_2$. Identify two conditions that a collision must meet to be effective.',
        rubric: [
          { id: 'b1', label: '1 pt — Sufficient energy', description: 'The colliding molecules must have a combined energy at least equal to the activation energy, $E_a$.' },
          { id: 'b2', label: '1 pt — Correct orientation', description: 'The molecules must collide with a suitable orientation, for example with an O atom of $\\text{NO}_2$ striking the C atom of CO so that the O atom can be transferred. Stating that the molecules need a correct (suitable) orientation earns the point; naming the atoms is not required.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Explain why the rate constant for the step increases when the temperature is raised.',
        rubric: [
          { id: 'c1', label: '1 pt — Larger fraction with enough energy', description: 'At a higher temperature the distribution of molecular kinetic energies shifts to higher values, so a larger fraction of collisions have energy at least equal to $E_a$ (collisions also happen somewhat more often). Saying that the activation energy decreases does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Rate = k[CO][NO₂]. (b) The collision must have energy at least equal to Eₐ, and the molecules must be oriented so that an O atom of NO₂ hits the C atom of CO. (c) At a higher temperature a greater fraction of collisions have energy ≥ Eₐ, so more collisions are effective and k increases.',
  },

  /* ---- Q5 SHORT: Molecular geometry ---- */
  {
    type: 'saq',
    topic: 'short-frq-bonding',
    prompt: `**FRQ 5 — Short (4 points): Sulfur Trioxide and the Sulfite Ion**

Sulfur trioxide, $\\text{SO}_3$, and the sulfite ion, $\\text{SO}_3^{2-}$, each have a central S atom bonded to three O atoms.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Draw (or describe in words) a complete Lewis electron-dot diagram for the sulfite ion, $\\text{SO}_3^{2-}$, showing all bonding pairs and lone pairs.',
        rubric: [
          { id: 'a1', label: '1 pt — Valid Lewis diagram', description: '26 valence electrons in all, with S bonded to three O atoms and one lone pair on S, and enough lone pairs on the O atoms to complete their octets (for example three S–O single bonds, three lone pairs on each O, and a 2− charge on the ion). A structure with S=O double bonds is also accepted if the lone pair on S is shown and the electron count is 26. A written description of a valid structure earns the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Identify the molecular geometry of $\\text{SO}_3$ and of $\\text{SO}_3^{2-}$. Justify your answers in terms of electron domains.',
        rubric: [
          { id: 'b1', label: '1 pt — SO₃ is trigonal planar', description: 'The S atom in $\\text{SO}_3$ has three bonding domains and no lone pairs, so the molecule is trigonal planar.' },
          { id: 'b2', label: '1 pt — SO₃²⁻ is trigonal pyramidal', description: 'The S atom in $\\text{SO}_3^{2-}$ has three bonding domains and one lone pair (four electron domains), so the ion is trigonal pyramidal. Calling the ion "tetrahedral" (the electron-domain geometry) does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Which species has the larger O–S–O bond angle? Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — SO₃, with a reason', description: '$\\text{SO}_3$ has the larger angle (120°). In $\\text{SO}_3^{2-}$ the four electron domains are arranged tetrahedrally and the lone pair repels the bonding pairs more strongly, so the O–S–O angle is smaller than 109.5° (about 106°). Both the claim and the reason are needed.' },
        ],
      },
    ],
    sampleResponse:
      '(a) S in the center with three single bonds to O atoms, one lone pair on S and three lone pairs on each O; brackets with a 2− charge (26 valence electrons). (b) SO₃: three bonding domains, no lone pairs on S, so trigonal planar. SO₃²⁻: three bonding domains and one lone pair on S, so trigonal pyramidal. (c) SO₃ (120°), because the lone pair in SO₃²⁻ occupies a fourth domain and pushes the bonding pairs closer together, giving an angle below 109.5°.',
  },

  /* ---- Q6 SHORT: Photoelectron spectroscopy ---- */
  {
    type: 'saq',
    topic: 'short-frq-atomic-structure',
    prompt: `**FRQ 6 — Short (4 points): Reading a Photoelectron Spectrum**

The photoelectron spectrum of a gas-phase sample of a neutral element has the five peaks summarized below.

| Peak | Binding energy (MJ/mol) | Relative number of electrons |
|---|---|---|
| 1 | 178 | 2 |
| 2 | 15.1 | 2 |
| 3 | 10.3 | 6 |
| 4 | 1.46 | 2 |
| 5 | 0.79 | 2 |`,
    parts: [
      {
        letter: 'a',
        question: '(a) Identify the element, and write its ground-state electron configuration.',
        rubric: [
          { id: 'a1', label: '1 pt — Silicon, with its configuration', description: 'The peaks hold 2 + 2 + 6 + 2 + 2 = 14 electrons, so the element is silicon, $1s^2 2s^2 2p^6 3s^2 3p^2$. Both the element and a consistent configuration are needed.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Peaks 2 and 3 both represent electrons in the second shell. Explain why peak 3 is three times as tall as peak 2.',
        rubric: [
          { id: 'b1', label: '1 pt — Peak height reflects the number of electrons', description: 'The height of a peak is proportional to the number of electrons with that binding energy; peak 3 represents the six 2p electrons and peak 2 the two 2s electrons, a 3 : 1 ratio.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Explain why the electrons in peak 1 have a much greater binding energy than the electrons in peak 4.',
        rubric: [
          { id: 'c1', label: '1 pt — Coulombic attraction and distance', description: 'Peak 1 electrons are 1s electrons, closest to the nucleus and almost unshielded, so they feel a much stronger Coulombic attraction than the 3s electrons of peak 4, which are farther from the nucleus and shielded by the 10 inner electrons.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) When this element forms the compound $\\text{SiCl}_4$, which peaks represent the electrons that take part in bonding? Justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Peaks 4 and 5 (the valence electrons)', description: 'Peaks 4 and 5, the 3s and 3p electrons: they are the four valence electrons in the outermost shell, with the lowest binding energies, and Si forms four bonds in $\\text{SiCl}_4$. Including any inner-shell peak does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) 14 electrons: silicon, 1s² 2s² 2p⁶ 3s² 3p². (b) Peak height is proportional to the number of electrons; peak 3 is the six 2p electrons and peak 2 is the two 2s electrons. (c) The 1s electrons are closest to the nucleus and least shielded, so they are attracted far more strongly than the 3s electrons, which are farther out and shielded by 10 core electrons. (d) Peaks 4 and 5, the four valence (3s and 3p) electrons, which form the four Si–Cl bonds.',
  },

  /* ---- Q7 SHORT: Gas collection and the gas constant ---- */
  {
    type: 'saq',
    topic: 'short-frq-gases',
    prompt: `**FRQ 7 — Short (4 points): Measuring the Gas Constant**

A student reacts a 0.0750 g strip of magnesium (24.31 g/mol) with excess HCl(aq) and collects all of the hydrogen gas over water: $\\text{Mg}(s) + 2\\text{HCl}(aq) \\to \\text{MgCl}_2(aq) + \\text{H}_2(g)$. The collected gas has a volume of 77.6 mL at 22.0 °C and a total pressure of 752.0 torr. The vapor pressure of water at 22.0 °C is 19.8 torr. (760 torr = 1 atm)`,
    parts: [
      {
        letter: 'a',
        question: '(a) Calculate the partial pressure of $\\text{H}_2$ in the collected gas, in atmospheres.',
        rubric: [
          { id: 'a1', label: '1 pt — Partial pressure of H₂', description: 'By Dalton\'s law, $P_{\\text{H}_2} = 752.0 - 19.8 = 732.2$ torr, and $732.2/760 = 0.9634$ atm (accept 0.963 atm).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the number of moles of $\\text{H}_2$ produced.',
        rubric: [
          { id: 'b1', label: '1 pt — Moles of H₂', description: '$0.0750/24.31 = 3.09 \\times 10^{-3}$ mol Mg, and the 1 : 1 ratio gives $3.09 \\times 10^{-3}$ mol $\\text{H}_2$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Use the data to calculate an experimental value of the gas constant, R, in L·atm/(mol·K).',
        rubric: [
          { id: 'c1', label: '1 pt — Experimental R', description: '$R = \\dfrac{PV}{nT} = \\dfrac{(0.9634)(0.0776)}{(3.09 \\times 10^{-3})(295.2)} = 0.0821$ L·atm/(mol·K) (accept 0.081–0.083, or a value consistent with parts (a) and (b)). The volume must be in liters and the temperature in kelvins.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) The magnesium strip was partly coated with magnesium oxide, MgO, which reacts with HCl but produces no gas. The student did not account for the coating. Would the calculated value of R be too high, too low, or unaffected? Justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Too low, with a reason', description: 'Too low: part of the 0.0750 g is MgO, so less $\\text{H}_2$ forms than the student calculates. The measured PV corresponds to fewer moles than the value of n used in $R = PV/(nT)$, and dividing by a value of n that is too large makes R too small. Both the direction and the reason are needed.' },
        ],
      },
    ],
    sampleResponse:
      '(a) 752.0 − 19.8 = 732.2 torr = 0.9634 atm. (b) 0.0750/24.31 = 3.09 × 10⁻³ mol Mg = mol H₂. (c) R = (0.9634)(0.0776)/[(3.09 × 10⁻³)(295.2)] = 0.0821 L·atm/(mol·K). (d) Too low: the MgO produces no H₂, so the actual moles of H₂ are fewer than the n calculated from the full mass, and R = PV/(nT) comes out too small.',
  },
]
