import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Chemistry practice exam, form 2: 7 FRQs (May 2027 Section II).
 *   Q1–Q3 long (10 points each): kinetics + gases; equilibrium + thermodynamics;
 *          acid-base + structure + intermolecular forces.
 *   Q4–Q7 short (4 points each): ionization energy; stoichiometry by mass loss;
 *          electroplating; real gases.
 * One RubricPoint = one point. 105 minutes; calculator, periodic table and
 * equations sheet allowed.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1 LONG: Kinetics + gas laws ---- */
  {
    type: 'saq',
    topic: 'long-frq-kinetics-gases',
    prompt: `**FRQ 1 — Long (10 points): Decomposition of Hydrogen Peroxide**

Hydrogen peroxide decomposes in aqueous solution according to the equation below.

$$2\\text{H}_2\\text{O}_2(aq) \\to 2\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$$

A student adds a small amount of solid KI to 50.0 mL of an $\\text{H}_2\\text{O}_2$ solution at 25 °C. The iodide ion acts as a catalyst. The student measures $[\\text{H}_2\\text{O}_2]$ at regular intervals while the temperature stays at 25 °C.

| Time (s) | $[\\text{H}_2\\text{O}_2]$ (M) |
|---|---|
| 0 | 0.800 |
| 300 | 0.560 |
| 600 | 0.392 |
| 900 | 0.274 |
| 1200 | 0.192 |`,
    parts: [
      {
        letter: 'a',
        question: '(a) Using the data, find the reaction order in $\\text{H}_2\\text{O}_2$ and explain how the data support it.',
        rubric: [
          { id: 'a1', label: '1 pt — First order in H₂O₂', description: 'States that the reaction is first order with respect to $\\text{H}_2\\text{O}_2$. Zero or second order earns no points in this part.' },
          { id: 'a2', label: '1 pt — Justification from the data', description: 'Any one of these: (i) each 300 s interval multiplies $[\\text{H}_2\\text{O}_2]$ by the same factor, 0.700 (0.560/0.800 = 0.392/0.560 = 0.700); (ii) values of $\\ln[\\text{H}_2\\text{O}_2]$ (−0.223, −0.580, −0.936, −1.29, −1.65) decrease by the same amount, 0.357, in each interval, so ln[H₂O₂] versus time is linear; (iii) the half-life is constant. Saying only "the concentration decreases" does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the value of the rate constant, $k$, for the reaction. Include units with your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Correct k with units', description: '$k = \\dfrac{\\ln(0.800/0.560)}{300 \\text{ s}} = \\dfrac{0.357}{300 \\text{ s}} = 1.19 \\times 10^{-3}\\ \\text{s}^{-1}$ (accept $1.18$–$1.20 \\times 10^{-3}\\ \\text{s}^{-1}$, or a value consistent with any pair of data points or with the slope of ln[H₂O₂] versus time). The units must be $\\text{s}^{-1}$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Calculate $[\\text{H}_2\\text{O}_2]$ at $t = 1800$ s.',
        rubric: [
          { id: 'c1', label: '1 pt — Correct concentration', description: '$\\ln[\\text{H}_2\\text{O}_2] = \\ln(0.800) - (1.19 \\times 10^{-3})(1800) = -0.223 - 2.14 = -2.36$, so $[\\text{H}_2\\text{O}_2] = 0.094$ M (accept 0.093–0.095 M, or a value consistent with the k from part (b)). Equivalent: six 300 s intervals give $0.800(0.700)^6 = 0.0941$ M.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Calculate the volume of $\\text{O}_2(g)$, measured at 25 °C and 1.00 atm, produced by the 50.0 mL sample during the first 600 s.',
        rubric: [
          { id: 'd1', label: '1 pt — Moles of O₂ from the change in [H₂O₂]', description: 'Moles of $\\text{H}_2\\text{O}_2$ consumed $= (0.800 - 0.392 \\text{ M})(0.0500 \\text{ L}) = 0.0204$ mol, and the 2 : 1 mole ratio gives $0.0102$ mol $\\text{O}_2$. Using the 2 : 1 ratio is required for this point.' },
          { id: 'd2', label: '1 pt — Volume from the ideal gas law', description: '$V = \\dfrac{nRT}{P} = \\dfrac{(0.0102)(0.08206)(298)}{1.00} = 0.249$ L (accept 0.24–0.26 L, or a value consistent with the moles in d1). The temperature must be in kelvins.' },
        ],
      },
      {
        letter: 'e',
        question: '(e) A proposed mechanism for the iodide-catalyzed reaction is shown below.\n\nStep 1: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\to \\text{H}_2\\text{O} + \\text{IO}^-$ (slow)\n\nStep 2: $\\text{H}_2\\text{O}_2 + \\text{IO}^- \\to \\text{H}_2\\text{O} + \\text{O}_2 + \\text{I}^-$ (fast)\n\n(i) Write the rate law predicted by this mechanism. (ii) Identify the role of $\\text{IO}^-$ in the mechanism. Then explain why the student\'s data show the order you found in part (a), even though the rate law in (i) also contains $[\\text{I}^-]$.',
        rubric: [
          { id: 'e1', label: '1 pt — Rate law from the slow step', description: 'Rate $= k[\\text{H}_2\\text{O}_2][\\text{I}^-]$, because the slow first step is rate determining and its rate law follows from its molecularity. No justification is required for this point. A rate law with $[\\text{H}_2\\text{O}_2]^2$ (from the overall equation) does not earn the point.' },
          { id: 'e2', label: '1 pt — IO⁻ is an intermediate, and [I⁻] stays constant', description: '$\\text{IO}^-$ is an intermediate (formed in step 1 and consumed in step 2). $\\text{I}^-$ is a catalyst that is regenerated in step 2, so $[\\text{I}^-]$ stays constant during the run and the observed rate depends only on $[\\text{H}_2\\text{O}_2]$ (first order, with the measured k equal to $k_1[\\text{I}^-]$). Both ideas are needed.' },
        ],
      },
      {
        letter: 'f',
        question: '(f) The student repeats the experiment at 25 °C with no KI added. Predict whether the rate constant will be greater than, less than, or equal to the value from part (b). Justify your prediction in terms of activation energy and molecular collisions.',
        rubric: [
          { id: 'f1', label: '1 pt — Smaller rate constant', description: 'Predicts that k will be smaller without the catalyst.' },
          { id: 'f2', label: '1 pt — Justification', description: 'Without $\\text{I}^-$ the reaction must follow a pathway with a higher activation energy, so at the same temperature a smaller fraction of collisions have enough energy to react. Saying only "catalysts speed up reactions" does not earn the point; saying the catalyst changes the temperature or ΔH is incorrect.' },
        ],
      },
    ],
    sampleResponse:
      '(a) First order: in every 300 s interval [H₂O₂] is multiplied by 0.700, so ln[H₂O₂] falls by 0.357 each interval and a plot of ln[H₂O₂] versus t is linear. (b) k = ln(0.800/0.560)/300 s = 1.19 × 10⁻³ s⁻¹. (c) ln[H₂O₂] = ln 0.800 − (1.19 × 10⁻³)(1800) = −2.36, so [H₂O₂] = 0.094 M. (d) (0.800 − 0.392)(0.0500) = 0.0204 mol H₂O₂ → 0.0102 mol O₂; V = (0.0102)(0.08206)(298)/1.00 = 0.249 L. (e)(i) Rate = k[H₂O₂][I⁻]. (ii) IO⁻ is an intermediate. I⁻ is regenerated in step 2, so its concentration is constant during the experiment and the rate is first order in H₂O₂. (f) Less. Without I⁻ the reaction proceeds by a pathway with a higher Eₐ, so a smaller fraction of collisions at 25 °C have energy at least equal to Eₐ.',
  },

  /* ---- Q2 LONG: Equilibrium + thermodynamics ---- */
  {
    type: 'saq',
    topic: 'long-frq-equilibrium-thermodynamics',
    prompt: `**FRQ 2 — Long (10 points): Making Phosgene**

Phosgene, $\\text{COCl}_2$, is made industrially from carbon monoxide and chlorine.

$$\\text{CO}(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{COCl}_2(g) \\qquad \\Delta H^\\circ = -108.6 \\text{ kJ/mol}_{rxn}$$

At 298 K, $\\Delta G^\\circ = -67.7$ kJ/mol$_{rxn}$ for this reaction.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Predict the sign of $\\Delta S^\\circ$ for the forward reaction. Justify your prediction.',
        rubric: [
          { id: 'a1', label: '1 pt — Negative, with a particle-level reason', description: '$\\Delta S^\\circ < 0$ because 2 mol of gas particles combine to form 1 mol of gas particles, so the matter becomes less dispersed (fewer possible arrangements). A sign with no reason does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Use the value of $\\Delta G^\\circ$ to determine the equilibrium constant, $K$, at 298 K.',
        rubric: [
          { id: 'b1', label: '1 pt — Correct K from ΔG°', description: '$\\ln K = \\dfrac{-\\Delta G^\\circ}{RT} = \\dfrac{67{,}700 \\text{ J/mol}}{(8.314 \\text{ J/(mol·K)})(298 \\text{ K})} = 27.3$, so $K = 7 \\times 10^{11}$ (accept $6$–$9 \\times 10^{11}$). Using 67.7 without converting kJ to J (K ≈ 1.03) does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Even though $K$ is very large at 298 K, factories pass the gases over an activated-carbon catalyst and run the reactor well above room temperature. (i) Explain, in terms of molecular collisions, why a higher temperature makes the reaction faster. (ii) Explain how the catalyst affects the rate of the reaction and whether it affects the value of $K$.',
        rubric: [
          { id: 'c1', label: '1 pt — Higher temperature increases the rate', description: 'At a higher temperature the molecules have a greater average kinetic energy, so a larger fraction of collisions have energy equal to or greater than the activation energy (and collisions are more frequent), and the reaction is faster. A response that also claims a higher temperature increases the equilibrium yield of $\\text{COCl}_2$ does not earn the point.' },
          { id: 'c2', label: '1 pt — Catalyst lowers Eₐ but does not change K', description: 'The catalyst provides a pathway with a lower activation energy, which speeds up the forward and reverse reactions equally, so it does not change K (or the equilibrium amount of $\\text{COCl}_2$). Both ideas are needed.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) A rigid 1.00 L vessel initially contains 0.400 mol of $\\text{COCl}_2(g)$ and no CO or $\\text{Cl}_2$. It is heated and held at a high temperature, T, until equilibrium is reached, and the vessel then contains 0.0800 mol of $\\text{Cl}_2(g)$. (i) Write the expression for the equilibrium constant, $K_c$, for the reaction as written above. (ii) Determine $K_c$ at temperature T.',
        rubric: [
          { id: 'd1', label: '1 pt — Correct Kc expression', description: '$K_c = \\dfrac{[\\text{COCl}_2]}{[\\text{CO}][\\text{Cl}_2]}$, for the reaction as written (formation of $\\text{COCl}_2$). The inverted expression does not earn the point.' },
          { id: 'd2', label: '1 pt — Correct equilibrium concentrations', description: 'Forming 0.0800 mol $\\text{Cl}_2$ also forms 0.0800 mol CO and uses 0.0800 mol $\\text{COCl}_2$, leaving 0.320 mol. In 1.00 L: $[\\text{COCl}_2] = 0.320$ M, $[\\text{CO}] = [\\text{Cl}_2] = 0.0800$ M.' },
          { id: 'd3', label: '1 pt — Correct value of Kc', description: '$K_c = \\dfrac{0.320}{(0.0800)(0.0800)} = 50.$ (or a value consistent with the concentrations in d2 and the expression in d1).' },
        ],
      },
      {
        letter: 'e',
        question: '(e) The equilibrium mixture in part (d) is compressed to a volume of 0.500 L at temperature T. Predict whether the amount of $\\text{COCl}_2$ will increase, decrease, or stay the same as the system returns to equilibrium. Justify your answer by comparing $Q_c$ with $K_c$.',
        rubric: [
          { id: 'e1', label: '1 pt — The amount of COCl₂ increases', description: 'Predicts that more $\\text{COCl}_2$ forms (the equilibrium shifts toward the side with fewer moles of gas).' },
          { id: 'e2', label: '1 pt — Justification using Q and K', description: 'Halving the volume doubles each concentration: $Q_c = \\dfrac{0.640}{(0.160)(0.160)} = 25$, which is less than $K_c = 50$, so the forward reaction runs until $Q_c = K_c$. A justification that says only "the pressure increases", with no comparison of Q with K, does not earn the point.' },
        ],
      },
      {
        letter: 'f',
        question: '(f) The vessel is then heated to a temperature higher than T. Predict whether $K_c$ will be greater than, less than, or equal to the value from part (d). Justify your prediction.',
        rubric: [
          { id: 'f1', label: '1 pt — Smaller Kc, with a reason based on ΔH°', description: 'The forward reaction is exothermic ($\\Delta H^\\circ < 0$), so raising the temperature favors the reverse (endothermic) reaction and $K_c$ becomes smaller than 50. A prediction without a reason based on the sign of ΔH° does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) ΔS° < 0: 2 mol of gas become 1 mol of gas, so the particles are less dispersed. (b) ln K = 67,700/(8.314 × 298) = 27.3, so K ≈ 7 × 10¹¹. (c)(i) At a higher temperature a larger fraction of collisions have energy ≥ Eₐ, so the reaction is faster. (ii) The catalyst lowers Eₐ for both directions; it speeds up the reaction but does not change K. (d) K_c = [COCl₂]/([CO][Cl₂]). At equilibrium: 0.320 M COCl₂, 0.0800 M CO, 0.0800 M Cl₂, so K_c = 0.320/(0.0800)² = 50. (e) Increases. In 0.500 L, Q_c = 0.640/(0.160)² = 25 < 50, so the reaction proceeds forward. (f) Less than 50, because the forward reaction is exothermic and a higher temperature shifts the equilibrium toward CO and Cl₂.',
  },

  /* ---- Q3 LONG: Acid-base + structure + IMF ---- */
  {
    type: 'saq',
    topic: 'long-frq-acid-base-structure',
    prompt: `**FRQ 3 — Long (10 points): Trimethylamine, a Weak Base**

Trimethylamine, $(\\text{CH}_3)_3\\text{N}$, is a weak base responsible for part of the odor of fish. At 25 °C, $K_b = 6.3 \\times 10^{-5}$ for trimethylamine.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Draw (or describe in words) the complete Lewis electron-dot diagram for a trimethylamine molecule, showing all bonding pairs and lone pairs. Then identify the molecular geometry around the nitrogen atom.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct Lewis diagram', description: 'N bonded to three C atoms and carrying one lone pair; each C bonded to three H atoms; 26 valence electrons in all; no multiple bonds and no N–H bonds. A written description of this structure earns the point.' },
          { id: 'a2', label: '1 pt — Trigonal pyramidal around N', description: 'N has four electron domains (three bonds and one lone pair), so the arrangement of atoms around N is trigonal pyramidal. "Tetrahedral" or "trigonal planar" for the shape around N does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Write the balanced equation for the reaction of trimethylamine with water.',
        rubric: [
          { id: 'b1', label: '1 pt — Correct equation', description: '$(\\text{CH}_3)_3\\text{N}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons (\\text{CH}_3)_3\\text{NH}^+(aq) + \\text{OH}^-(aq)$. A single arrow is accepted; a product written as $(\\text{CH}_3)_3\\text{NHOH}$ is not.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Calculate the pH of a 0.250 M solution of trimethylamine at 25 °C.',
        rubric: [
          { id: 'c1', label: '1 pt — Correct [OH⁻]', description: '$K_b = \\dfrac{x^2}{0.250 - x} \\approx \\dfrac{x^2}{0.250} = 6.3 \\times 10^{-5}$, so $x = [\\text{OH}^-] = 3.97 \\times 10^{-3}$ M (accept $3.9$–$4.0 \\times 10^{-3}$ M, including the exact quadratic value $3.94 \\times 10^{-3}$ M; x is under 2% of 0.250, so the approximation is valid).' },
          { id: 'c2', label: '1 pt — Correct pH', description: 'pOH $= -\\log(3.97 \\times 10^{-3}) = 2.40$, so pH $= 14.00 - 2.40 = 11.60$ (accept 11.6, or a value consistent with c1). Reporting 2.40 as the pH does not earn the point.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) A 25.0 mL sample of the 0.250 M trimethylamine solution is titrated with 0.200 M HCl. (i) What volume of the HCl solution reaches the equivalence point? (ii) Determine the pH at the half-equivalence point.',
        rubric: [
          { id: 'd1', label: '1 pt — Equivalence volume', description: '$(0.0250 \\text{ L})(0.250 \\text{ M}) = 6.25 \\times 10^{-3}$ mol of base, which needs $6.25 \\times 10^{-3}$ mol HCl: $V = 6.25 \\times 10^{-3}/0.200 = 0.0313$ L = 31.3 mL (accept 31.2–31.3 mL).' },
          { id: 'd2', label: '1 pt — pH at half-equivalence', description: 'At half-equivalence $[(\\text{CH}_3)_3\\text{N}] = [(\\text{CH}_3)_3\\text{NH}^+]$, so pOH $= \\text{p}K_b = -\\log(6.3 \\times 10^{-5}) = 4.20$ and pH $= 14.00 - 4.20 = 9.80$ (equivalently, pH = p$K_a$ of the conjugate acid). Reporting 4.20 as the pH does not earn the point.' },
        ],
      },
      {
        letter: 'e',
        question: '(e) Is the solution at the equivalence point acidic, basic or neutral? Explain.',
        rubric: [
          { id: 'e1', label: '1 pt — Acidic, with a reason', description: 'At the equivalence point the solution contains $(\\text{CH}_3)_3\\text{NH}^+$, the conjugate acid of a weak base, which donates protons to water ($(\\text{CH}_3)_3\\text{NH}^+ + \\text{H}_2\\text{O} \\rightleftharpoons (\\text{CH}_3)_3\\text{N} + \\text{H}_3\\text{O}^+$), so the pH is below 7. Both the claim and the reason are needed.' },
        ],
      },
      {
        letter: 'f',
        question: '(f) Trimethylamine (59.1 g/mol) boils at 3 °C, but its isomer 1-propanamine, $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NH}_2$ (59.1 g/mol), boils at 48 °C. Explain this difference in terms of the intermolecular forces in the two liquids.',
        rubric: [
          { id: 'f1', label: '1 pt — 1-Propanamine hydrogen bonds', description: '1-Propanamine has H atoms bonded directly to N, so its molecules form hydrogen bonds with one another (N–H···N).' },
          { id: 'f2', label: '1 pt — Trimethylamine cannot hydrogen bond with itself', description: 'Trimethylamine has no N–H bond (every H is bonded to C), so its molecules attract one another only through dipole–dipole and dispersion forces, which are weaker overall, so less energy is needed to separate its molecules and it boils at a lower temperature. (Noting that the isomers have the same number of electrons, so dispersion forces cannot explain the difference, is good practice but not required.) Saying trimethylamine has "no lone pair" does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) N in the center, single-bonded to three CH₃ groups, with one lone pair on N (26 valence electrons). The geometry around N is trigonal pyramidal. (b) (CH₃)₃N + H₂O ⇌ (CH₃)₃NH⁺ + OH⁻. (c) x²/0.250 = 6.3 × 10⁻⁵, so [OH⁻] = 3.97 × 10⁻³ M, pOH = 2.40, pH = 11.60. (d)(i) 6.25 × 10⁻³ mol ÷ 0.200 M = 31.3 mL. (ii) pOH = pK_b = 4.20, so pH = 9.80. (e) Acidic, because (CH₃)₃NH⁺ is a weak acid that donates H⁺ to water. (f) 1-Propanamine molecules hydrogen bond through their N–H bonds. Trimethylamine has no N–H bond, so its molecules have only dipole–dipole and dispersion attractions, which are weaker; the molar masses are equal, so the hydrogen bonding accounts for the higher boiling point of 1-propanamine.',
  },

  /* ---- Q4 SHORT: Ionization energy ---- */
  {
    type: 'saq',
    topic: 'short-frq-atomic-structure',
    prompt: `**FRQ 4 — Short (4 points): Successive Ionization Energies**

The first four ionization energies of element Z, which is in period 3 of the periodic table, are shown below.

| Ionization | First | Second | Third | Fourth |
|---|---|---|---|---|
| Energy (kJ/mol) | 578 | 1817 | 2745 | 11,577 |`,
    parts: [
      {
        letter: 'a',
        question: '(a) Identify element Z. Justify your answer using the data.',
        rubric: [
          { id: 'a1', label: '1 pt — Aluminum', description: 'Identifies Z as aluminum (Al).' },
          { id: 'a2', label: '1 pt — Justification from the large jump', description: 'The fourth ionization energy is about four times the third, so the fourth electron is removed from the inner $n = 2$ shell, which is closer to the nucleus and less shielded. Z therefore has three valence electrons, and the period-3 element with three valence electrons is Al.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) The first ionization energy of magnesium is 738 kJ/mol, greater than that of element Z even though Z has one more proton. Explain this difference in terms of electron configuration and Coulombic attraction.',
        rubric: [
          { id: 'b1', label: '1 pt — 3p electron is easier to remove', description: 'The first electron removed from Al is a 3p electron, which is higher in energy and somewhat shielded by the filled 3s subshell, so it is attracted less strongly than the 3s electron removed from Mg. An answer based only on "Al has more protons" or on Al being larger does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Write the chemical formula of the ionic compound formed when element Z reacts with oxygen.',
        rubric: [
          { id: 'c1', label: '1 pt — Al₂O₃', description: '$\\text{Al}_2\\text{O}_3$, from $\\text{Al}^{3+}$ and $\\text{O}^{2-}$ (or the formula consistent with the element named in part (a)).' },
        ],
      },
    ],
    sampleResponse:
      '(a) Aluminum. The fourth ionization energy (11,577 kJ/mol) is about four times the third, so the fourth electron comes from the n = 2 core; Z has three valence electrons, and the period-3 element with three valence electrons is Al. (b) Al\'s first electron is a 3p electron, higher in energy and partly shielded by the 3s² electrons, so it is held less tightly than Mg\'s 3s electron. (c) Al₂O₃.',
  },

  /* ---- Q5 SHORT: Stoichiometry by mass loss ---- */
  {
    type: 'saq',
    topic: 'short-frq-stoichiometry',
    prompt: `**FRQ 5 — Short (4 points): Calcium Carbonate in an Antacid Tablet**

A student finds the mass percent of calcium carbonate in an antacid tablet. A 1.250 g tablet is dropped into excess HCl(aq) in an open flask that sits on a balance, and the reaction below takes place.

$$\\text{CaCO}_3(s) + 2\\text{HCl}(aq) \\to \\text{CaCl}_2(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$

When the bubbling stops, the total mass of the flask and its contents has decreased by 0.462 g. Assume that the only other ingredients in the tablet do not react with HCl. (Molar masses: $\\text{CaCO}_3$ = 100.09 g/mol; $\\text{CO}_2$ = 44.01 g/mol)`,
    parts: [
      {
        letter: 'a',
        question: '(a) Explain why the mass of the flask and its contents decreases, and calculate the number of moles of $\\text{CO}_2$ released.',
        rubric: [
          { id: 'a1', label: '1 pt — Mass lost is CO₂, and its moles', description: 'The $\\text{CO}_2$ gas escapes from the open flask, so the mass lost is the mass of $\\text{CO}_2$: $0.462 \\text{ g}/44.01 \\text{ g/mol} = 1.05 \\times 10^{-2}$ mol $\\text{CO}_2$. Both the reason and the moles are needed.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the mass percent of $\\text{CaCO}_3$ in the tablet.',
        rubric: [
          { id: 'b1', label: '1 pt — Mass of CaCO₃', description: 'The 1 : 1 mole ratio gives $1.05 \\times 10^{-2}$ mol $\\text{CaCO}_3$, and $(1.05 \\times 10^{-2})(100.09) = 1.05$ g $\\text{CaCO}_3$ (or a value consistent with part (a)).' },
          { id: 'b2', label: '1 pt — Mass percent', description: '$1.051/1.250 \\times 100 = 84.1\\%$ (accept 84%, or a value consistent with b1).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Some of the $\\text{CO}_2$ produced stays dissolved in the solution when the student records the final mass. Will the calculated mass percent of $\\text{CaCO}_3$ be too high, too low, or unaffected? Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Too low, with a reason', description: 'Too low: dissolved $\\text{CO}_2$ has not left the flask, so the measured mass loss is smaller than the mass of $\\text{CO}_2$ actually produced, which makes the calculated moles and mass of $\\text{CaCO}_3$ too small. Both the direction and the reason are needed.' },
        ],
      },
    ],
    sampleResponse:
      '(a) The CO₂ gas escapes, so the 0.462 g lost is CO₂: 0.462/44.01 = 1.05 × 10⁻² mol. (b) 1.05 × 10⁻² mol CaCO₃ × 100.09 g/mol = 1.05 g; 1.051/1.250 = 84.1%. (c) Too low, because CO₂ that stays dissolved is not counted in the mass loss, so the calculated amount of CaCO₃ is smaller than the true amount.',
  },

  /* ---- Q6 SHORT: Electroplating (working backward) ---- */
  {
    type: 'saq',
    topic: 'short-frq-electrolysis',
    prompt: `**FRQ 6 — Short (4 points): Chromium Plating**

A steel bolt is chromium-plated in an electrolytic cell that contains a solution of chromium ions, $\\text{Cr}^{n+}(aq)$, whose charge is not known. A constant current of 0.800 A is passed through the cell for 30.0 minutes, and 0.259 g of chromium (52.00 g/mol) is deposited on the bolt. The Faraday constant is $F = 96{,}485$ C/mol $e^-$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Is the bolt the anode or the cathode of the cell? Justify your answer.',
        rubric: [
          { id: 'a1', label: '1 pt — Cathode, because reduction occurs there', description: 'The bolt is the cathode: chromium ions gain electrons and are reduced to chromium metal on its surface, and reduction occurs at the cathode. Both the electrode and the reason are needed.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the number of moles of electrons that passed through the cell.',
        rubric: [
          { id: 'b1', label: '1 pt — Moles of electrons', description: '$q = It = (0.800 \\text{ A})(30.0 \\times 60 \\text{ s}) = 1440$ C, and $1440/96{,}485 = 1.49 \\times 10^{-2}$ mol $e^-$. Using 30.0 s instead of 1800 s does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Determine the charge, n, of the chromium ions in the solution. Show your reasoning.',
        rubric: [
          { id: 'c1', label: '1 pt — n = 3, from the electron-to-metal ratio', description: '$0.259/52.00 = 4.98 \\times 10^{-3}$ mol Cr, and $\\dfrac{1.49 \\times 10^{-2} \\text{ mol } e^-}{4.98 \\times 10^{-3} \\text{ mol Cr}} = 3.0$, so the ions are $\\text{Cr}^{3+}$ (or a value consistent with part (b)).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) In a second run, the mass of chromium deposited is less than the mass predicted from the current and the time. Describe one chemical process at the bolt that could account for this result.',
        rubric: [
          { id: 'd1', label: '1 pt — A competing reduction', description: 'Part of the current reduces a different species at the bolt, for example water (or $\\text{H}^+$) reduced to $\\text{H}_2(g)$, so not every electron deposits chromium. Incomplete reduction of $\\text{Cr}^{3+}$ to soluble $\\text{Cr}^{2+}$ is also accepted. An answer that names only a measurement error, with no chemical process at the cathode, does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Cathode, because chromium ions are reduced to chromium metal on the bolt, and reduction happens at the cathode. (b) q = (0.800 A)(1800 s) = 1440 C; 1440/96,485 = 1.49 × 10⁻² mol e⁻. (c) 0.259/52.00 = 4.98 × 10⁻³ mol Cr; 1.49 × 10⁻²/4.98 × 10⁻³ = 3.0, so the ion is Cr³⁺. (d) Some electrons reduce water to H₂ gas at the bolt instead of depositing chromium.',
  },

  /* ---- Q7 SHORT: Real gases ---- */
  {
    type: 'saq',
    topic: 'short-frq-gases',
    prompt: `**FRQ 7 — Short (4 points): When Gases Are Not Ideal**

A student fills two identical rigid 1.00 L cylinders at 300 K: one with 0.200 mol of $\\text{CH}_4(g)$ and the other with 0.200 mol of $\\text{NH}_3(g)$. The student then compares the measured pressure of each sample with the pressure predicted by the ideal gas law. ($R = 0.08206$ L·atm/(mol·K))`,
    parts: [
      {
        letter: 'a',
        question: '(a) Calculate the pressure predicted by the ideal gas law for each sample.',
        rubric: [
          { id: 'a1', label: '1 pt — Ideal pressure', description: '$P = \\dfrac{nRT}{V} = \\dfrac{(0.200)(0.08206)(300)}{1.00} = 4.92$ atm for both samples (accept 4.9 atm). The ideal prediction is the same for both gases because n, T and V are the same.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) The measured pressure of each sample is lower than the ideal value. Identify which gas shows the larger deviation, and explain your answer in terms of intermolecular forces.',
        rubric: [
          { id: 'b1', label: '1 pt — NH₃ deviates more', description: 'Identifies $\\text{NH}_3$ as the gas whose measured pressure falls further below the ideal value.' },
          { id: 'b2', label: '1 pt — Stronger attractions reduce the pressure', description: '$\\text{NH}_3$ molecules are polar and hydrogen bond, while $\\text{CH}_4$ has only dispersion forces. The stronger attractions pull $\\text{NH}_3$ molecules toward one another, so they strike the walls less often and with less force than ideal particles would. An answer based on molar mass or molecular size does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) At very high pressure, the measured pressure of $\\text{CH}_4$ becomes greater than the ideal value. Explain this observation at the particle level.',
        rubric: [
          { id: 'c1', label: '1 pt — Particle volume', description: 'At very high pressure the molecules are packed so closely that their own volume is a significant part of the container volume. The free space they move in is smaller than the container volume used in $PV = nRT$, so collisions with the walls are more frequent than predicted and the measured pressure is higher. An explanation that at such short distances repulsions between molecules outweigh their attractions is also accepted.' },
        ],
      },
    ],
    sampleResponse:
      '(a) P = (0.200)(0.08206)(300)/1.00 = 4.92 atm for each gas. (b) NH₃. Its molecules are polar and hydrogen bond, so they attract one another more strongly than CH₄ molecules (dispersion forces only), which reduces the frequency and force of collisions with the walls. (c) At very high pressure the molecules\' own volume takes up a large part of the cylinder, so the space available for motion is less than V and the molecules hit the walls more often than an ideal gas would.',
  },
]
