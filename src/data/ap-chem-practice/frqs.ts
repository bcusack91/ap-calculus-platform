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

Acetic acid (CH₃COOH) is a weak acid with $K_a = 1.8 \\times 10^{-5}$ at 25°C.

A student prepares 250.0 mL of a 0.100 M acetic acid solution.`,
    parts: [
      {
        prompt: '(a) Write the equilibrium expression ($K_a$) for the dissociation of acetic acid in water.',
        rubric: '$K_a = \\dfrac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]} = 1.8 \\times 10^{-5}$. (Award point for correct expression with [H⁺] or [H₃O⁺].)',
      },
      {
        prompt: '(b) Calculate the pH of the 0.100 M acetic acid solution. Show your work.',
        rubric: 'ICE table: $K_a = x^2/(0.100 - x) \\approx x^2/0.100$. $x^2 = 1.8 \\times 10^{-6}$, $x = [\\text{H}^+] = 1.34 \\times 10^{-3}$ M. $\\text{pH} = -\\log(1.34 \\times 10^{-3}) = 2.87$. (3 pts: setup, calculation, pH value.)',
      },
      {
        prompt: '(c) The student adds 0.0050 mol of NaOH (no volume change) to the solution. Calculate the resulting pH.',
        rubric: 'Initial moles HA = 0.025 mol; OH⁻ consumes 0.005 mol HA, forms 0.005 mol A⁻. After: 0.020 mol HA + 0.005 mol A⁻. Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 4.74 + log(0.005/0.020) = 4.74 + (-0.60) = 4.14. (3 pts: stoichiometry, ratio, pH.)',
      },
      {
        prompt: '(d) Sketch the titration curve when 0.100 M NaOH is added to 25.0 mL of the 0.100 M acetic acid. Label: (i) initial pH, (ii) half-equivalence point, (iii) equivalence point pH region (above/below 7).',
        rubric: '(i) initial pH ≈ 2.87. (ii) half-equiv: pH = pKa = 4.74. (iii) equivalence: pH > 7 (basic, due to acetate hydrolysis; ≈ 8.7). Curve shape S-shaped with steep rise near 25 mL added. (3 pts: 1 per labeled feature.)',
      },
    ],
  },

  /* ---- Q2 LONG: Thermodynamics / Calorimetry ---- */
  {
    type: 'saq',
    topic: 'long-frq-thermodynamics',
    stimulus: `**Long FRQ #2 — Calorimetry & Hess's Law (10 points)**

A student carries out the dissolution of NH₄NO₃(s) in water in a coffee-cup calorimeter.

| Quantity | Value |
|----------|-------|
| Mass of NH₄NO₃ dissolved | 5.00 g |
| Volume of water | 100.0 mL |
| Initial temperature | 22.5 °C |
| Final temperature | 18.7 °C |
| Specific heat of solution | 4.18 J/(g·°C) |
| Density of solution | 1.00 g/mL |
| Molar mass NH₄NO₃ | 80.0 g/mol |`,
    parts: [
      {
        prompt: '(a) Calculate the heat absorbed by the solution, $q_{soln}$, in J.',
        rubric: '$\\Delta T = 18.7 - 22.5 = -3.8$ °C. Mass of solution = 100.0 g (water) + 5.0 g ≈ 105.0 g. $q_{soln} = mc\\Delta T = (105.0)(4.18)(-3.8) = -1668$ J. (Sign indicates solution lost heat.) Accept ≈ -1670 J or 1670 J absorbed by NH₄NO₃. 2 pts.',
      },
      {
        prompt: '(b) Calculate the enthalpy of solution, $\\Delta H_{soln}$, in kJ/mol of NH₄NO₃.',
        rubric: 'Heat absorbed by NH₄NO₃ = +1670 J (endothermic). Moles NH₄NO₃ = 5.00/80.0 = 0.0625 mol. $\\Delta H_{soln} = +1670/0.0625 = +26{,}700$ J/mol = +26.7 kJ/mol. 3 pts.',
      },
      {
        prompt: '(c) Is the dissolution endothermic or exothermic? Explain your reasoning using the temperature change.',
        rubric: 'Endothermic. Temperature of solution decreased ⇒ heat was absorbed by the dissolving NH₄NO₃ from the surroundings (water) ⇒ $\\Delta H > 0$. 2 pts.',
      },
      {
        prompt: '(d) Predict the sign of $\\Delta S_{soln}$ for this dissolution and explain. Then predict whether dissolution will be spontaneous at 25°C.',
        rubric: '$\\Delta S > 0$: solid + liquid → aqueous ions, dispersal of particles increases entropy. Spontaneity: $\\Delta G = \\Delta H - T\\Delta S$ at 298 K. Since $\\Delta H > 0$ but $T\\Delta S$ is positive and likely larger ⇒ $\\Delta G < 0$ ⇒ spontaneous (consistent with NH₄NO₃ dissolving readily in cold packs). 3 pts.',
      },
    ],
  },

  /* ---- Q3 LONG: Kinetics ---- */
  {
    type: 'saq',
    topic: 'long-frq-kinetics',
    stimulus: `**Long FRQ #3 — Reaction Kinetics (10 points)**

The reaction $2\\text{NO}(g) + \\text{O}_2(g) \\to 2\\text{NO}_2(g)$ was studied at constant T. Initial rate data:

| Trial | [NO]₀ (M) | [O₂]₀ (M) | Initial Rate (M/s) |
|-------|-----------|-----------|---------------------|
| 1 | 0.020 | 0.010 | $4.0 \\times 10^{-3}$ |
| 2 | 0.040 | 0.010 | $1.6 \\times 10^{-2}$ |
| 3 | 0.020 | 0.020 | $8.0 \\times 10^{-3}$ |`,
    parts: [
      {
        prompt: '(a) Determine the order of reaction with respect to NO and with respect to O₂. Show your work.',
        rubric: 'Trials 1→2: [NO] doubles, [O₂] same; rate × 4 = $2^n \\Rightarrow n = 2$ (second order in NO). Trials 1→3: [NO] same, [O₂] doubles; rate × 2 = $2^m \\Rightarrow m = 1$ (first order in O₂). 3 pts.',
      },
      {
        prompt: '(b) Write the rate law and calculate the rate constant $k$ (with units).',
        rubric: 'Rate $= k[\\text{NO}]^2[\\text{O}_2]$. Using trial 1: $4.0 \\times 10^{-3} = k(0.020)^2(0.010) = k(4.0 \\times 10^{-6})$. $k = 1.0 \\times 10^3$ M⁻²·s⁻¹. 3 pts.',
      },
      {
        prompt: '(c) Predict the initial rate when [NO]₀ = 0.030 M and [O₂]₀ = 0.015 M.',
        rubric: 'Rate $= (1.0 \\times 10^3)(0.030)^2(0.015) = (1.0 \\times 10^3)(9.0 \\times 10^{-4})(0.015) = 1.35 \\times 10^{-2}$ M/s. 2 pts.',
      },
      {
        prompt: '(d) A proposed mechanism is: (Step 1) $\\text{NO} + \\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$ (fast equilibrium); (Step 2) $\\text{N}_2\\text{O}_2 + \\text{O}_2 \\to 2\\text{NO}_2$ (slow). Show that this mechanism is consistent with the experimental rate law.',
        rubric: 'Step 2 (slow) gives rate = $k_2[\\text{N}_2\\text{O}_2][\\text{O}_2]$. From step 1 fast equilibrium: $K_1 = [\\text{N}_2\\text{O}_2]/[\\text{NO}]^2 \\Rightarrow [\\text{N}_2\\text{O}_2] = K_1[\\text{NO}]^2$. Substitute: rate $= k_2 K_1[\\text{NO}]^2[\\text{O}_2]$, with effective $k = k_2 K_1$. Matches experimental 2nd order in NO, 1st order in O₂. 2 pts.',
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
        rubric: 'Moles Al = 2.70/27.0 = 0.100 mol; needs (6/2)(0.100) = 0.300 mol HCl. Moles HCl available = (0.100 L)(2.00 M) = 0.200 mol. HCl available (0.200) < required (0.300) ⇒ HCl is limiting. 2 pts.',
      },
      {
        prompt: '(b) Calculate the volume of H₂ produced at STP (22.4 L/mol).',
        rubric: 'From limiting HCl: moles H₂ = (3/6)(0.200) = 0.100 mol. Volume = 0.100 × 22.4 = 2.24 L. 2 pts.',
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
        prompt: '(a) Draw the complete Lewis structure for XeF₄, including all lone pairs.',
        rubric: 'Xe central, 4 F bonded (single bonds), 2 lone pairs on Xe. Each F has 3 lone pairs. Total valence e⁻ = 8 + 4(7) = 36. 2 pts.',
      },
      {
        prompt: '(b) Identify the electron-domain geometry and the molecular geometry. Justify based on VSEPR.',
        rubric: '6 electron domains around Xe (4 bonds + 2 lone pairs) ⇒ electron-domain geometry: octahedral. Lone pairs occupy axial positions (180° apart, minimizing lp-lp repulsion) ⇒ molecular geometry: SQUARE PLANAR. 2 pts.',
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
        rubric: 'Ag⁺ has higher reduction potential ⇒ Ag⁺/Ag is cathode (reduction); Cu/Cu²⁺ is ANODE (oxidation). Balanced: $\\text{Cu}(s) + 2\\text{Ag}^+(aq) \\to \\text{Cu}^{2+}(aq) + 2\\text{Ag}(s)$. 2 pts.',
      },
      {
        prompt: '(b) Calculate the standard cell potential, $E°_{cell}$, and indicate whether the reaction is spontaneous.',
        rubric: '$E°_{cell} = E°_{cathode} - E°_{anode} = 0.80 - 0.34 = +0.46$ V. Positive ⇒ spontaneous (galvanic cell). 2 pts.',
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
| CH₄ | $-161$ |
| CH₃OH | $+65$ |
| CH₃CH₂CH₂CH₃ (butane) | $-1$ |`,
    parts: [
      {
        prompt: '(a) Identify the strongest type of intermolecular force present in each substance.',
        rubric: 'CH₄: London dispersion forces (LDF) only — nonpolar. CH₃OH: hydrogen bonding (O-H) plus dipole-dipole and LDF. Butane: LDF only (nonpolar) but larger than CH₄. 2 pts.',
      },
      {
        prompt: '(b) Explain why methanol (CH₃OH, smallest molar mass) has a much higher boiling point than butane (larger molar mass).',
        rubric: 'Methanol can form HYDROGEN BONDS through its O-H group, which are much stronger than the LDF in butane. Even though butane has a larger molar mass (and thus stronger LDF than methanol\'s LDF alone), the hydrogen bonding in methanol dominates and requires significantly more energy to overcome ⇒ much higher BP. 2 pts.',
      },
    ],
  },
]
