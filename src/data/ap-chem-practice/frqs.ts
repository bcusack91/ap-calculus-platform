import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Chemistry — 7 FRQs matching the official Section II structure:
 *   Q1–Q3: Long FRQs (10 points each) — multi-part synthesis questions
 *   Q4–Q7: Short FRQs (4 points each) — focused single-concept questions
 *
 * 105 minutes total for Section II. Calculator and equations sheet allowed.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1 LONG: Equilibrium / Acid-Base ---- */
  {
    type: 'saq',
    topic: 'long-frq-equilibrium-acid-base',
    stimulus: `**Long FRQ #1 — Acetic Acid Equilibrium (10 points)**

Acetic acid $(CH_{3}COOH)$ is a weak acid with $K_a = 1.8 \\times 10^{-5}$ at 25°C.

A student prepares 250.0 mL of a 0.100 M acetic acid solution.`,
    parts: [
      {
        prompt: '(a) Write the equilibrium expression ($K_a$) for the dissociation of acetic acid in water.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct Ka expression', description: '$K_a = \\dfrac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]}$ (= $1.8 \\times 10^{-5}$). Writing $[\\text{H}_3\\text{O}^+]$ in place of $[\\text{H}^+]$ also earns the point.' },
        ],
      },
      {
        prompt: '(b) Calculate the pH of the 0.100 M acetic acid solution. Show your work.',
        rubric: [
          { id: 'b1', label: '1 pt — Equilibrium setup', description: 'ICE table or equivalent: $K_a = \\dfrac{x^2}{0.100 - x} \\approx \\dfrac{x^2}{0.100} = 1.8 \\times 10^{-5}$.' },
          { id: 'b2', label: '1 pt — Correct [H+]', description: '$x^2 = 1.8 \\times 10^{-6}$, so $x = [\\text{H}^+] = 1.34 \\times 10^{-3}$ M.' },
          { id: 'b3', label: '1 pt — Correct pH', description: '$\\text{pH} = -\\log(1.34 \\times 10^{-3}) = 2.87$ (consistent with the $[\\text{H}^+]$ calculated).' },
        ],
      },
      {
        prompt: '(c) The student adds 0.0050 mol of NaOH (no volume change) to the solution. Calculate the resulting pH.',
        rubric: [
          { id: 'c1', label: '1 pt — Correct reaction stoichiometry', description: 'Initial HA = (0.2500 L)(0.100 M) = 0.025 mol. $\\text{OH}^-$ consumes 0.005 mol HA and forms 0.005 mol $\\text{A}^-$, leaving 0.020 mol HA and 0.005 mol $\\text{A}^-$.' },
          { id: 'c2', label: '1 pt — Buffer relationship set up correctly', description: 'Henderson-Hasselbalch (or the $K_a$ expression) with $\\text{p}K_a = 4.74$ and the ratio $[\\text{A}^-]/[\\text{HA}] = 0.005/0.020$.' },
          { id: 'c3', label: '1 pt — Correct pH', description: '$\\text{pH} = 4.74 + \\log(0.25) = 4.74 - 0.60 = 4.14$.' },
        ],
      },
      {
        prompt: '(d) Sketch the titration curve when 0.100 M NaOH is added to 25.0 mL of the 0.100 M acetic acid. Label: (i) initial pH, (ii) half-equivalence point, (iii) equivalence point pH region (above/below 7).',
        rubric: [
          { id: 'd1', label: '1 pt — Initial pH labeled', description: 'The curve starts at pH ≈ 2.87 (consistent with part (b)).' },
          { id: 'd2', label: '1 pt — Half-equivalence point labeled', description: 'At 12.5 mL NaOH added, pH = p$K_a$ = 4.74.' },
          { id: 'd3', label: '1 pt — Equivalence point labeled above pH 7', description: 'Steep rise near 25.0 mL NaOH added; equivalence pH > 7 (about 8.7) because acetate hydrolyzes to make the solution basic.' },
        ],
      },
    ],
  },

  /* ---- Q2 LONG: Thermodynamics / Calorimetry ---- */
  {
    type: 'saq',
    topic: 'long-frq-thermodynamics',
    stimulus: `**Long FRQ #2 — Calorimetry & Hess's Law (10 points)**

A student carries out the dissolution of $NH_{4}NO_{3}(s)$ in water in a coffee-cup calorimeter.

| Quantity | Value |
|----------|-------|
| Mass of $NH_{4}NO_{3}$ dissolved | 5.00 g |
| Volume of water | 100.0 mL |
| Initial temperature | 22.5 °C |
| Final temperature | 18.7 °C |
| Specific heat of solution | 4.18 J/(g·°C) |
| Density of solution | 1.00 g/mL |
| Molar mass $NH_{4}NO_{3}$ | 80.0 g/mol |`,
    parts: [
      {
        prompt: '(a) Calculate the heat absorbed by the solution, $q_{soln}$, in J.',
        rubric: [
          { id: 'a1', label: '1 pt — Mass of solution and ΔT', description: 'Mass of solution = 100.0 g water + 5.00 g solute ≈ 105.0 g (100.0 g also accepted); $\\Delta T = 18.7 - 22.5 = -3.8$ °C.' },
          { id: 'a2', label: '1 pt — Correct value of q', description: '$q = mc\\Delta T = (105.0)(4.18)(-3.8) = -1.67 \\times 10^3$ J; the solution lost about 1670 J, which the dissolving $NH_{4}NO_{3}$ absorbed. Accept ≈ ±1670 J with the meaning stated (≈ 1590 J if 100.0 g was used).' },
        ],
      },
      {
        prompt: '(b) Calculate the enthalpy of solution, $\\Delta H_{soln}$, in kJ/mol of $NH_{4}NO_{3}$.',
        rubric: [
          { id: 'b1', label: '1 pt — Heat for the dissolution with the correct sign', description: 'The dissolving $NH_{4}NO_{3}$ absorbs +1670 J, the opposite sign of the heat change of the solution.' },
          { id: 'b2', label: '1 pt — Correct moles of NH₄NO₃', description: '$5.00 \\text{ g} / 80.0 \\text{ g/mol} = 0.0625$ mol.' },
          { id: 'b3', label: '1 pt — Correct ΔH(soln) with sign and units', description: '$\\Delta H_{soln} = +1670 \\text{ J} / 0.0625 \\text{ mol} = +2.67 \\times 10^4$ J/mol = +26.7 kJ/mol (consistent with part (a)).' },
        ],
      },
      {
        prompt: '(c) Is the dissolution endothermic or exothermic? Explain your reasoning using the temperature change.',
        rubric: [
          { id: 'c1', label: '1 pt — Endothermic', description: 'Identifies the dissolution as endothermic ($\\Delta H > 0$).' },
          { id: 'c2', label: '1 pt — Justification from the temperature change', description: 'The temperature of the solution decreased, so energy flowed from the surroundings (the water) into the dissolving $NH_{4}NO_{3}$.' },
        ],
      },
      {
        prompt: '(d) Predict the sign of $\\Delta S_{soln}$ for this dissolution and explain. Then predict whether dissolution will be spontaneous at 25°C.',
        rubric: [
          { id: 'd1', label: '1 pt — ΔS > 0 with a reason', description: 'A solid dissolving into freely moving aqueous ions increases the dispersal of particles (more possible arrangements), so entropy increases.' },
          { id: 'd2', label: '1 pt — Spontaneous', description: 'Predicts that the dissolution is spontaneous at 25 °C ($\\Delta G < 0$).' },
          { id: 'd3', label: '1 pt — Justification with ΔG = ΔH − TΔS', description: '$\\Delta H > 0$ is unfavorable, so the dissolution can be spontaneous only because $T\\Delta S$ is positive and larger than $\\Delta H$ at 298 K, making $\\Delta G < 0$ (consistent with the salt dissolving on its own in cold packs).' },
        ],
      },
    ],
  },

  /* ---- Q3 LONG: Kinetics ---- */
  {
    type: 'saq',
    topic: 'long-frq-kinetics',
    stimulus: `**Long FRQ #3 — Reaction Kinetics (10 points)**

The reaction $2\\text{NO}(g) + \\text{O}_2(g) \\to 2\\text{NO}_2(g)$ was studied at constant T. Initial rate data:

| Trial | [NO]$ {}_{0}$ (M) | [$O_{2}$]$ {}_{0}$ (M) | Initial Rate (M/s) |
|-------|-----------|-----------|---------------------|
| 1 | 0.020 | 0.010 | $4.0 \\times 10^{-3}$ |
| 2 | 0.040 | 0.010 | $1.6 \\times 10^{-2}$ |
| 3 | 0.020 | 0.020 | $8.0 \\times 10^{-3}$ |`,
    parts: [
      {
        prompt: '(a) Determine the order of reaction with respect to NO and with respect to $O_{2}$. Show your work.',
        rubric: [
          { id: 'a1', label: '1 pt — Second order in NO', description: 'Trials 1 and 2: [NO] doubles with $[\\text{O}_2]$ constant and the rate quadruples, $4 = 2^n$, so $n = 2$.' },
          { id: 'a2', label: '1 pt — First order in O₂', description: 'Trials 1 and 3: $[\\text{O}_2]$ doubles with [NO] constant and the rate doubles, $2 = 2^m$, so $m = 1$.' },
          { id: 'a3', label: '1 pt — Work shown: trials compared with the other concentration held constant', description: 'The response names which trials were compared and shows the rate ratio for each comparison (not just stated orders).' },
        ],
      },
      {
        prompt: '(b) Write the rate law and calculate the rate constant $k$ (with units).',
        rubric: [
          { id: 'b1', label: '1 pt — Correct rate law', description: 'Rate $= k[\\text{NO}]^2[\\text{O}_2]$ (consistent with part (a)).' },
          { id: 'b2', label: '1 pt — Correct value of k', description: 'Trial 1: $4.0 \\times 10^{-3} = k(0.020)^2(0.010) = k(4.0 \\times 10^{-6})$, so $k = 1.0 \\times 10^3$.' },
          { id: 'b3', label: '1 pt — Correct units of k', description: '$M^{-2}\\cdot s^{-1}$ (equivalently $L^{2}\\cdot mol^{-2}\\cdot s^{-1}$).' },
        ],
      },
      {
        prompt: '(c) Predict the initial rate when [NO]$ {}_{0}$ = 0.030 M and [$O_{2}$]$ {}_{0}$ = 0.015 M.',
        rubric: [
          { id: 'c1', label: '1 pt — Correct substitution into the rate law', description: 'Rate $= (1.0 \\times 10^3)(0.030)^2(0.015)$ (consistent with part (b)).' },
          { id: 'c2', label: '1 pt — Correct rate with units', description: 'Rate $= (1.0 \\times 10^3)(9.0 \\times 10^{-4})(0.015) = 1.35 \\times 10^{-2}$ M/s.' },
        ],
      },
      {
        prompt: '(d) A proposed mechanism is: (Step 1) $\\text{NO} + \\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$ (fast equilibrium); (Step 2) $\\text{N}_2\\text{O}_2 + \\text{O}_2 \\to 2\\text{NO}_2$ (slow). Show that this mechanism is consistent with the experimental rate law.',
        rubric: [
          { id: 'd1', label: '1 pt — Rate law from the slow step', description: 'The slow step is rate determining: rate $= k_2[\\text{N}_2\\text{O}_2][\\text{O}_2]$.' },
          { id: 'd2', label: '1 pt — Intermediate eliminated using the fast equilibrium', description: '$K_1 = [\\text{N}_2\\text{O}_2]/[\\text{NO}]^2$, so $[\\text{N}_2\\text{O}_2] = K_1[\\text{NO}]^2$; substituting gives rate $= k_2K_1[\\text{NO}]^2[\\text{O}_2]$, which matches the experimental rate law with $k = k_2K_1$.' },
        ],
      },
    ],
  },

  /* ---- Q4 SHORT: Stoichiometry / Limiting Reagent ---- */
  {
    type: 'saq',
    topic: 'short-frq-stoichiometry',
    stimulus: `**Short FRQ #4 — Stoichiometry (4 points)**

Aluminum metal reacts with hydrochloric acid:
$$2\\text{Al}(s) + 6\\text{HCl}(aq) \\to 2\\text{AlCl}_3(aq) + 3\\text{H}_2(g)$$

A student combines 2.70 g Al (27.0 g/mol) with 100.0 mL of 2.00 M HCl.`,
    parts: [
      {
        prompt: '(a) Identify the limiting reactant. Show your work.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct moles of both reactants', description: 'Al: $2.70/27.0 = 0.100$ mol. HCl: $(0.1000 \\text{ L})(2.00 \\text{ M}) = 0.200$ mol.' },
          { id: 'a2', label: '1 pt — HCl is limiting, with a stoichiometric comparison', description: '0.100 mol Al would need $(6/2)(0.100) = 0.300$ mol HCl, but only 0.200 mol is available, so HCl is the limiting reactant.' },
        ],
      },
      {
        prompt: '(b) Calculate the volume of $H_{2}$ produced at STP (22.4 L/mol).',
        rubric: [
          { id: 'b1', label: '1 pt — Correct moles of H₂ from the limiting reactant', description: '$(3/6)(0.200 \\text{ mol HCl}) = 0.100$ mol $\\text{H}_2$ (consistent with part (a)).' },
          { id: 'b2', label: '1 pt — Correct volume', description: '$0.100 \\text{ mol} \\times 22.4 \\text{ L/mol} = 2.24$ L at STP.' },
        ],
      },
    ],
  },

  /* ---- Q5 SHORT: Bonding / Lewis Structure ---- */
  {
    type: 'saq',
    topic: 'short-frq-bonding',
    stimulus: `**Short FRQ #5 — Lewis Structure & Geometry (4 points)**

Consider the molecule $\\text{XeF}_4$.`,
    parts: [
      {
        prompt: '(a) Draw the complete Lewis structure for $XeF_{4}$, including all lone pairs.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct bonding skeleton', description: 'Xe is central with four Xe–F single bonds; 36 total valence electrons ($8 + 4 \\times 7$).' },
          { id: 'a2', label: '1 pt — All lone pairs shown', description: 'Two lone pairs on Xe and three lone pairs on each F.' },
        ],
      },
      {
        prompt: '(b) Identify the electron-domain geometry and the molecular geometry. Justify based on VSEPR.',
        rubric: [
          { id: 'b1', label: '1 pt — Octahedral electron-domain geometry', description: 'Six electron domains around Xe (4 bonding pairs + 2 lone pairs) give an octahedral electron-domain geometry.' },
          { id: 'b2', label: '1 pt — Square planar molecular geometry with justification', description: 'The two lone pairs sit 180° apart (opposite each other) to minimize lone pair–lone pair repulsion, leaving the four F atoms in a square plane.' },
        ],
      },
    ],
  },

  /* ---- Q6 SHORT: Redox / Electrochemistry ---- */
  {
    type: 'saq',
    topic: 'short-frq-electrochemistry',
    stimulus: `**Short FRQ #6 — Galvanic Cell (4 points)**

A galvanic cell is constructed using the half-reactions:
- $\\text{Ag}^+(aq) + e^- \\to \\text{Ag}(s)$, $E° = +0.80$ V
- $\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$, $E° = +0.34$ V`,
    parts: [
      {
        prompt: '(a) Write the balanced overall cell reaction and identify which electrode is the anode.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct balanced overall reaction', description: '$\\text{Cu}(s) + 2\\text{Ag}^+(aq) \\to \\text{Cu}^{2+}(aq) + 2\\text{Ag}(s)$.' },
          { id: 'a2', label: '1 pt — Cu electrode is the anode', description: '$\\text{Ag}^+$ has the higher reduction potential and is reduced at the cathode, so copper is oxidized at the anode.' },
        ],
      },
      {
        prompt: '(b) Calculate the standard cell potential, $E°_{cell}$, and indicate whether the reaction is spontaneous.',
        rubric: [
          { id: 'b1', label: '1 pt — Correct E°cell', description: '$E°_{cell} = E°_{cathode} - E°_{anode} = 0.80 - 0.34 = +0.46$ V.' },
          { id: 'b2', label: '1 pt — Spontaneous, justified by the sign', description: '$E°_{cell} > 0$ (so $\\Delta G° < 0$), so the reaction is spontaneous under standard conditions.' },
        ],
      },
    ],
  },

  /* ---- Q7 SHORT: IMFs / Properties ---- */
  {
    type: 'saq',
    topic: 'short-frq-intermolecular-forces',
    stimulus: `**Short FRQ #7 — Intermolecular Forces (4 points)**

The boiling points of three substances at 1 atm are:

| Substance | Boiling Point (°C) |
|-----------|--------------------|
| $CH_{4}$ | $-161$ |
| $CH_{3}OH$ | $+65$ |
| $CH_{3}CH_{2}CH_{2}CH_{3}$ (butane) | $-1$ |`,
    parts: [
      {
        prompt: '(a) Identify the strongest type of intermolecular force present in each substance.',
        rubric: [
          { id: 'a1', label: '1 pt — CH₄ and butane: London dispersion forces', description: 'Both are nonpolar, so London dispersion forces are the strongest (and only) intermolecular forces.' },
          { id: 'a2', label: '1 pt — CH₃OH: hydrogen bonding', description: 'The O–H group lets methanol hydrogen bond (dipole-dipole and dispersion forces are also present).' },
        ],
      },
      {
        prompt: '(b) Explain why methanol ($CH_{3}OH$, smallest molar mass) has a much higher boiling point than butane (larger molar mass).',
        rubric: [
          { id: 'b1', label: '1 pt — Identifies the different forces being compared', description: 'Methanol molecules are held together by hydrogen bonds through their O–H groups, while butane molecules have only London dispersion forces.' },
          { id: 'b2', label: '1 pt — Explains the boiling-point difference', description: 'Butane has a larger, more polarizable electron cloud (stronger dispersion forces than methanol\'s dispersion forces alone), but the hydrogen bonds between methanol molecules are stronger overall, so more energy is required to separate methanol molecules and its boiling point is much higher.' },
        ],
      },
    ],
  },
]
