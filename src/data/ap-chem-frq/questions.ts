/**
 * AP Chemistry FRQ Practice Questions
 * Based on College Board AP Chemistry FRQ format:
 * - 3 long FRQs (10 pts each, ~23 min each)
 * - 4 short FRQs (4 pts each, ~9 min each)
 * Topics span all 9 units
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface ChemFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

// ─── Long FRQs (10 points each, ~23 minutes) ────────────────────────

const longFRQs: ChemFRQ[] = [
  {
    id: 'chem-long-1',
    type: 'long',
    unit: 5,
    title: 'Kinetics & Rate Law Determination',
    prompt: `A student performs a series of experiments to determine the rate law for the reaction:

$2\\text{NO}(g) + \\text{Cl}_2(g) \\rightarrow 2\\text{NOCl}(g)$

The initial rate data are shown below:

| Experiment | [NO]₀ (M) | [Cl₂]₀ (M) | Initial Rate (M/s) |
|:---:|:---:|:---:|:---:|
| 1 | 0.10 | 0.10 | 0.18 |
| 2 | 0.10 | 0.20 | 0.36 |
| 3 | 0.20 | 0.10 | 0.72 |`,
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Determine the order of the reaction with respect to NO. Justify your answer with a calculation using specific experimental data.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Compares experiments 1 and 3 (same [Cl₂])', keywords: ['experiment 1', 'experiment 3', 'exp 1', 'exp 3', 'constant', 'same'] },
          { points: 1, description: 'Shows the ratio calculation: (0.72/0.18) = (0.20/0.10)^n → 4 = 2^n', keywords: ['0.72', '0.18', '0.20', '0.10', 'ratio', '4 = 2'] },
          { points: 1, description: 'Correctly determines order = 2 with respect to NO', keywords: ['second order', 'order 2', 'n = 2', 'n=2', '2nd order'] },
        ],
        sampleAnswer: 'Comparing Experiments 1 and 3 where [Cl₂] is held constant at 0.10 M:\n\nRate₃/Rate₁ = (0.72)/(0.18) = 4.0\n[NO]₃/[NO]₁ = (0.20)/(0.10) = 2.0\n\nSince 4.0 = 2.0^n, n = 2. The reaction is second order with respect to NO.',
      },
      {
        label: '(b)',
        prompt: 'Determine the order of the reaction with respect to Cl₂. Justify your answer.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Compares experiments 1 and 2 (same [NO])', keywords: ['experiment 1', 'experiment 2', 'exp 1', 'exp 2'] },
          { points: 1, description: 'Correctly determines order = 1 with respect to Cl₂', keywords: ['first order', 'order 1', 'm = 1', 'm=1', '1st order'] },
        ],
        sampleAnswer: 'Comparing Experiments 1 and 2 where [NO] is held constant at 0.10 M:\n\nRate₂/Rate₁ = (0.36)/(0.18) = 2.0\n[Cl₂]₂/[Cl₂]₁ = (0.20)/(0.10) = 2.0\n\nSince 2.0 = 2.0^m, m = 1. The reaction is first order with respect to Cl₂.',
      },
      {
        label: '(c)',
        prompt: 'Write the rate law for this reaction and calculate the value of the rate constant, $k$, including units.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Writes correct rate law: Rate = k[NO]²[Cl₂]', keywords: ['rate = k', '[NO]²', '[NO]^2', '[Cl₂]', '[Cl2]'] },
          { points: 1, description: 'Substitutes values and calculates k = 180', keywords: ['180', '1.8'] },
          { points: 1, description: 'Includes correct units: M⁻²s⁻¹ or L²mol⁻²s⁻¹', keywords: ['M⁻²', 'M^-2', 'mol⁻²', 'mol^-2', 'L²', 'L^2', '/M²', '/M^2'] },
        ],
        sampleAnswer: 'Rate = k[NO]²[Cl₂]\n\nUsing Experiment 1:\n0.18 = k(0.10)²(0.10)\n0.18 = k(0.001)\nk = 180 M⁻²s⁻¹',
      },
      {
        label: '(d)',
        prompt: 'A student proposes the following two-step mechanism:\n\nStep 1: NO + Cl₂ → NOCl₂ (slow)\nStep 2: NOCl₂ + NO → 2NOCl (fast)\n\nIs this mechanism consistent with the experimentally determined rate law? Justify your answer.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'States the mechanism is NOT consistent because the slow step gives Rate = k[NO][Cl₂], which is overall 2nd order not 3rd order', keywords: ['not consistent', 'inconsistent', 'does not match', 'first order in NO', '[NO][Cl₂]', 'rate = k[NO][Cl2]'] },
          { points: 1, description: 'Explains that the rate law from the slow step should match the experimental rate law', keywords: ['slow step', 'rate-determining', 'rate determining', 'elementary'] },
        ],
        sampleAnswer: 'No. The rate-determining (slow) step is: NO + Cl₂ → NOCl₂. For an elementary step, the rate law is determined from the stoichiometry: Rate = k₁[NO][Cl₂]. This gives first order in NO, but the experimental rate law shows second order in NO. The mechanism is not consistent with the data.\n\nA consistent mechanism would need [NO]² in the rate-determining step.',
      },
    ],
  },
  {
    id: 'chem-long-2',
    type: 'long',
    unit: 7,
    title: 'Equilibrium & Le Chatelier\'s Principle',
    prompt: `Consider the equilibrium reaction:

$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\qquad \\Delta H° = -92.4 \\text{ kJ/mol}$

A 1.00 L container initially holds 1.00 mol N₂ and 3.00 mol H₂ at 500 K. At equilibrium, the concentration of NH₃ is found to be 0.80 M.`,
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Set up an ICE table and calculate the equilibrium concentrations of N₂ and H₂.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Sets up correct ICE table with proper stoichiometric ratios', keywords: ['ICE', 'initial', 'change', 'equilibrium', '-x', '-3x', '+2x'] },
          { points: 1, description: 'Correctly calculates [N₂] = 0.60 M (1.00 - 0.40)', keywords: ['0.60', '0.6 M', '1.00 - 0.40'] },
          { points: 1, description: 'Correctly calculates [H₂] = 1.80 M (3.00 - 1.20)', keywords: ['1.80', '1.8 M', '3.00 - 1.20'] },
        ],
        sampleAnswer: 'ICE Table:\n\n|  | N₂ | 3H₂ | 2NH₃ |\n|--|-----|------|-------|\n| I | 1.00 | 3.00 | 0 |\n| C | -x | -3x | +2x |\n| E | 1.00-x | 3.00-3x | 2x |\n\nSince [NH₃] = 0.80 M → 2x = 0.80 → x = 0.40\n\n[N₂] = 1.00 - 0.40 = 0.60 M\n[H₂] = 3.00 - 3(0.40) = 1.80 M',
      },
      {
        label: '(b)',
        prompt: 'Calculate the value of the equilibrium constant, $K_c$, at 500 K.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes correct Kc expression: [NH₃]²/([N₂][H₂]³)', keywords: ['[NH₃]²', '[NH3]^2', '[N₂][H₂]³', '[N2][H2]^3', 'products over reactants'] },
          { points: 1, description: 'Calculates Kc ≈ 0.183 (accepts 0.18-0.19)', keywords: ['0.18', '0.19', '0.183'] },
        ],
        sampleAnswer: 'Kc = [NH₃]²/([N₂][H₂]³) = (0.80)²/((0.60)(1.80)³) = 0.64/(0.60)(5.832) = 0.64/3.499 ≈ 0.183',
      },
      {
        label: '(c)',
        prompt: 'Predict and explain the effect on the equilibrium position if:\n\n(i) The temperature is increased to 700 K\n(ii) Additional N₂ is added to the container\n(iii) The volume of the container is halved',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Correctly states temperature increase shifts LEFT (exothermic reaction)', keywords: ['shift left', 'shifts left', 'reactants', 'exothermic', 'shift toward', 'reverse'] },
          { points: 1, description: 'Correctly states adding N₂ shifts RIGHT (toward products)', keywords: ['shift right', 'shifts right', 'products', 'forward', 'more NH₃', 'more NH3'] },
          { points: 1, description: 'Correctly states halving volume shifts RIGHT (fewer moles of gas on product side: 2 vs 4)', keywords: ['shift right', 'shifts right', 'fewer moles', 'less moles', '2 moles', '4 moles', 'pressure'] },
        ],
        sampleAnswer: '(i) Since the reaction is exothermic (ΔH° = -92.4 kJ), increasing temperature shifts equilibrium LEFT toward reactants. Heat can be thought of as a product, so adding heat shifts away from products.\n\n(ii) Adding N₂ increases [N₂], making Q < K. The system shifts RIGHT to re-establish equilibrium, producing more NH₃.\n\n(iii) Halving the volume doubles all concentrations, increasing pressure. The system shifts toward the side with fewer moles of gas. Products: 2 mol gas, Reactants: 4 mol gas. Equilibrium shifts RIGHT.',
      },
      {
        label: '(d)',
        prompt: 'Would Kc change for any of the three perturbations in part (c)? Explain.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'States only temperature change affects Kc', keywords: ['only temperature', 'temperature changes K', 'K changes with temperature', 'only (i)'] },
          { points: 1, description: 'Explains that K depends only on temperature, not on concentrations or pressure', keywords: ['only depends on temperature', 'function of temperature', 'concentration does not affect K', 'adding', 'volume'] },
        ],
        sampleAnswer: 'Only perturbation (i) — changing temperature — affects the value of Kc. The equilibrium constant is a function of temperature only. Adding reactants (ii) or changing volume (iii) shifts the equilibrium position but does not change the value of Kc.',
      },
    ],
  },
  {
    id: 'chem-long-3',
    type: 'long',
    unit: 8,
    title: 'Acid-Base Titration & Buffers',
    prompt: `A student titrates 25.0 mL of 0.200 M acetic acid ($\\text{CH}_3\\text{COOH}$, $K_a = 1.8 \\times 10^{-5}$) with 0.200 M NaOH.`,
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the pH of the acetic acid solution before any NaOH is added.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Sets up Ka expression: Ka = x²/(0.200-x) ≈ x²/0.200', keywords: ['Ka =', 'x²', 'x^2', '0.200', '1.8'] },
          { points: 1, description: 'Calculates [H⁺] = √(Ka × C) = √(1.8×10⁻⁵ × 0.200)', keywords: ['1.90', '1.9 ×', '0.001897', '0.0019'] },
          { points: 1, description: 'Calculates pH ≈ 2.72', keywords: ['2.72', '2.7'] },
        ],
        sampleAnswer: 'CH₃COOH ⇌ CH₃COO⁻ + H⁺\nKa = [H⁺][CH₃COO⁻]/[CH₃COOH] = x²/(0.200 - x) ≈ x²/0.200\n\nx² = (1.8 × 10⁻⁵)(0.200) = 3.6 × 10⁻⁶\nx = [H⁺] = 1.90 × 10⁻³ M\n\npH = -log(1.90 × 10⁻³) = 2.72',
      },
      {
        label: '(b)',
        prompt: 'Calculate the pH after 12.5 mL of NaOH has been added. Identify the significance of this point in the titration.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Recognizes this is the half-equivalence point (mol NaOH = ½ mol acid)', keywords: ['half-equivalence', 'half equivalence', 'halfway', 'buffer'] },
          { points: 1, description: 'Uses Henderson-Hasselbalch or recognizes pH = pKa at half-equivalence', keywords: ['Henderson', 'pH = pKa', 'pKa', '4.74'] },
          { points: 1, description: 'States pH = pKa = -log(1.8×10⁻⁵) = 4.74', keywords: ['4.74', '4.7'] },
        ],
        sampleAnswer: 'mol CH₃COOH initially = 0.0250 L × 0.200 M = 5.00 × 10⁻³ mol\nmol NaOH added = 0.0125 L × 0.200 M = 2.50 × 10⁻³ mol\n\nThis is the half-equivalence point — exactly half the acid has been neutralized.\nAt this point, [CH₃COOH] = [CH₃COO⁻], so by Henderson-Hasselbalch:\npH = pKa + log(1) = pKa = -log(1.8 × 10⁻⁵) = 4.74\n\nThis is significant because the solution has maximum buffer capacity here.',
      },
      {
        label: '(c)',
        prompt: 'Calculate the volume of NaOH required to reach the equivalence point. Predict whether the pH at the equivalence point will be less than, equal to, or greater than 7. Justify your prediction.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Calculates volume = 25.0 mL (equimolar)', keywords: ['25.0', '25 mL', '0.025'] },
          { points: 1, description: 'States pH > 7 because conjugate base CH₃COO⁻ hydrolyzes', keywords: ['greater than 7', '> 7', 'above 7', 'basic', 'conjugate base', 'hydroly'] },
        ],
        sampleAnswer: 'Volume NaOH = (mol acid)/(M NaOH) = (5.00 × 10⁻³)/(0.200) = 0.0250 L = 25.0 mL\n\nAt equivalence, all CH₃COOH has been converted to CH₃COO⁻ (acetate), which is the conjugate base of a weak acid. It will hydrolyze (react with water) to produce OH⁻:\nCH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻\n\nSo pH > 7.',
      },
      {
        label: '(d)',
        prompt: 'Sketch the titration curve (describe key features) and identify which indicator would be best: methyl orange (pH 3.1–4.4), bromothymol blue (pH 6.0–7.6), or phenolphthalein (pH 8.2–10.0).',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Describes curve: starts ~pH 2.7, buffer region around pKa=4.74, steep rise at equivalence (~pH 8.7), levels off', keywords: ['buffer', 'steep', 'equivalence', '8.7', '8.5', '8.8', 'curve'] },
          { points: 1, description: 'Chooses phenolphthalein because equivalence pH is ~8.7, which falls in its range', keywords: ['phenolphthalein', '8.2', '10.0', 'range'] },
        ],
        sampleAnswer: 'The titration curve starts at pH ≈ 2.72, rises gradually through a buffer region centered at pH 4.74 (the half-equivalence point), then shows a steep rise near the equivalence point where pH jumps sharply to about 8.7. After equivalence, the curve levels off as excess NaOH dominates.\n\nPhenolphthalein (pH 8.2–10.0) is the best indicator because the equivalence point pH ≈ 8.7 falls within its color-change range. Methyl orange would change too early and bromothymol blue would change before the equivalence point.',
      },
    ],
  },

  // Additional long FRQs
  {
    id: 'chem-long-4',
    type: 'long',
    unit: 6,
    title: 'Thermodynamics — Enthalpy, Entropy & Free Energy',
    prompt: `Consider the decomposition of calcium carbonate:

$\\text{CaCO}_3(s) \\rightarrow \\text{CaO}(s) + \\text{CO}_2(g)$

Use the following thermodynamic data:

| Substance | ΔH°f (kJ/mol) | S° (J/mol·K) |
|:---:|:---:|:---:|
| CaCO₃(s) | -1206.9 | 92.9 |
| CaO(s) | -635.1 | 39.7 |
| CO₂(g) | -393.5 | 213.7 |`,
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate ΔH°rxn for this reaction.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Uses ΔH°rxn = ΣΔH°f(products) - ΣΔH°f(reactants)', keywords: ['products', 'reactants', 'ΔH°f', 'formation'] },
          { points: 1, description: 'Calculates ΔH° = (-635.1 + (-393.5)) - (-1206.9) = +178.3 kJ/mol', keywords: ['178', '+178', '178.3'] },
        ],
        sampleAnswer: 'ΔH°rxn = [ΔH°f(CaO) + ΔH°f(CO₂)] - [ΔH°f(CaCO₃)]\n= [(-635.1) + (-393.5)] - [-1206.9]\n= -1028.6 - (-1206.9)\n= +178.3 kJ/mol',
      },
      {
        label: '(b)',
        prompt: 'Calculate ΔS°rxn for this reaction.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Uses ΔS°rxn = ΣS°(products) - ΣS°(reactants)', keywords: ['products', 'reactants', 'S°', 'entropy'] },
          { points: 1, description: 'Calculates ΔS° = (39.7 + 213.7) - (92.9) = +160.5 J/(mol·K)', keywords: ['160', '+160', '160.5'] },
        ],
        sampleAnswer: 'ΔS°rxn = [S°(CaO) + S°(CO₂)] - [S°(CaCO₃)]\n= [39.7 + 213.7] - [92.9]\n= 253.4 - 92.9\n= +160.5 J/(mol·K)',
      },
      {
        label: '(c)',
        prompt: 'Calculate ΔG°rxn at 298 K. Is the reaction spontaneous at this temperature?',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Uses ΔG° = ΔH° - TΔS°', keywords: ['ΔG° = ΔH° - TΔS°', 'Gibbs', 'ΔG ='] },
          { points: 1, description: 'Converts units correctly (ΔS° to kJ) and calculates: 178.3 - 298(0.1605) = +130.5 kJ/mol', keywords: ['130', '0.1605', '47.8', '130.5', '131'] },
          { points: 1, description: 'States reaction is NOT spontaneous at 298 K because ΔG° > 0', keywords: ['not spontaneous', 'nonspontaneous', 'non-spontaneous', 'positive', '> 0'] },
        ],
        sampleAnswer: 'ΔG° = ΔH° - TΔS° = 178.3 kJ - (298 K)(0.1605 kJ/K)\n= 178.3 - 47.8 = +130.5 kJ/mol\n\nSince ΔG° > 0, the reaction is NOT spontaneous at 298 K.',
      },
      {
        label: '(d)',
        prompt: 'At what temperature does this reaction become spontaneous? Explain the physical significance of your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Sets ΔG° = 0: T = ΔH°/ΔS°', keywords: ['ΔG = 0', 'T = ΔH/ΔS', 'T = ΔH°/ΔS°'] },
          { points: 1, description: 'Calculates T = 178300/160.5 ≈ 1111 K (838°C)', keywords: ['1111', '1110', '1100', '838', '840'] },
          { points: 1, description: 'Explains this is the decomposition temperature of limestone / thermal decomposition', keywords: ['decomposition', 'limestone', 'lime', 'kiln', 'above this temperature', 'spontaneous above'] },
        ],
        sampleAnswer: 'Set ΔG° = 0: ΔH° = TΔS°\nT = ΔH°/ΔS° = 178,300 J / 160.5 J/K ≈ 1111 K ≈ 838°C\n\nAbove 1111 K, the TΔS° term exceeds ΔH°, making ΔG° negative (spontaneous). This is the temperature at which limestone (CaCO₃) thermally decomposes to quicklime (CaO) and CO₂ — a process used industrially in cement and lime production. Kilns operate above this temperature.',
      },
    ],
  },
  {
    id: 'chem-long-5',
    type: 'long',
    unit: 9,
    title: 'Electrochemistry — Galvanic Cells',
    prompt: `A galvanic cell is constructed using the following half-reactions:

$\\text{Ag}^+(aq) + e^- \\rightarrow \\text{Ag}(s) \\qquad E° = +0.80 \\text{ V}$
$\\text{Zn}^{2+}(aq) + 2e^- \\rightarrow \\text{Zn}(s) \\qquad E° = -0.76 \\text{ V}$

The cell operates at 25°C with [Ag⁺] = 1.0 M and [Zn²⁺] = 1.0 M.`,
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the balanced overall cell reaction. Identify the anode and cathode, and indicate the direction of electron flow.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Writes balanced equation: Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s)', keywords: ['Zn', '2Ag⁺', '2Ag+', 'Zn²⁺', 'Zn2+', '2Ag(s)'] },
          { points: 1, description: 'Identifies Zn as anode (oxidation) and Ag as cathode (reduction)', keywords: ['Zn', 'anode', 'Ag', 'cathode'] },
          { points: 1, description: 'States electrons flow from Zn to Ag (anode to cathode)', keywords: ['Zn to Ag', 'anode to cathode', 'zinc to silver'] },
        ],
        sampleAnswer: 'Zn is oxidized (anode): Zn(s) → Zn²⁺(aq) + 2e⁻\nAg⁺ is reduced (cathode): 2Ag⁺(aq) + 2e⁻ → 2Ag(s)\n\nOverall: Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s)\n\nElectrons flow from Zn (anode) to Ag (cathode) through the external wire.',
      },
      {
        label: '(b)',
        prompt: 'Calculate E°cell and ΔG° for this reaction.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Calculates E°cell = 0.80 - (-0.76) = 1.56 V', keywords: ['1.56', '+1.56'] },
          { points: 1, description: 'Uses ΔG° = -nFE° with n=2', keywords: ['-nFE', 'n = 2', 'n=2', '96485', '96,485'] },
          { points: 1, description: 'Calculates ΔG° = -301 kJ/mol (approximately)', keywords: ['-301', '-300', '-3.01'] },
        ],
        sampleAnswer: 'E°cell = E°cathode - E°anode = 0.80 - (-0.76) = +1.56 V\n\nΔG° = -nFE° = -(2)(96,485 C/mol)(1.56 V)\n= -301,033 J/mol ≈ -301 kJ/mol',
      },
      {
        label: '(c)',
        prompt: 'If the [Ag⁺] is decreased to 0.010 M while [Zn²⁺] remains at 1.0 M, calculate the new cell potential using the Nernst equation.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Sets up Nernst equation: E = E° - (RT/nF)ln(Q) or E = E° - (0.0592/n)log(Q)', keywords: ['Nernst', '0.0592', '0.02957', 'RT/nF', 'ln(Q)', 'log(Q)'] },
          { points: 1, description: 'Calculates E ≈ 1.44 V (Q = [Zn²⁺]/[Ag⁺]² = 1.0/0.0001 = 10000)', keywords: ['1.44', '1.4', '10000', '10⁴'] },
        ],
        sampleAnswer: 'Q = [Zn²⁺]/[Ag⁺]² = (1.0)/(0.010)² = 10,000\n\nE = E° - (0.0592/n)log(Q) = 1.56 - (0.0592/2)log(10000)\n= 1.56 - (0.0296)(4) = 1.56 - 0.118 = 1.44 V',
      },
      {
        label: '(d)',
        prompt: 'Explain what happens to the cell potential as the reaction proceeds. When will the cell "die"?',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'States cell potential decreases as reaction proceeds', keywords: ['decrease', 'decreases', 'drops', 'falls', 'lower'] },
          { points: 1, description: 'States cell dies when E = 0 (equilibrium, Q = K)', keywords: ['E = 0', 'equilibrium', 'Q = K', 'Q equals K'] },
        ],
        sampleAnswer: 'As the reaction proceeds, [Ag⁺] decreases and [Zn²⁺] increases. This causes Q to increase, and by the Nernst equation, E decreases. The cell reaches equilibrium (and "dies") when Q = K and E = 0 V. At this point, the driving force for electron transfer is zero.',
      },
    ],
  },
]

// ─── Short FRQs (4 points each, ~9 minutes) ─────────────────────────

const shortFRQs: ChemFRQ[] = [
  {
    id: 'chem-short-1',
    type: 'short',
    unit: 1,
    title: 'Periodic Trends',
    prompt: 'Consider the elements Na, Mg, Al, and Si in Period 3 of the periodic table.',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Rank these elements in order of increasing first ionization energy. Justify your ranking in terms of atomic structure.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correct order: Na < Mg < Al < Si (or notes Al anomaly: Na < Al < Mg < Si)', keywords: ['Na < Mg', 'Na < Al', 'Si', 'increasing'] },
          { points: 1, description: 'Justifies with increasing nuclear charge and same shielding across a period', keywords: ['nuclear charge', 'effective nuclear charge', 'Zeff', 'shielding', 'protons'] },
        ],
        sampleAnswer: 'Na < Al < Mg < Si\n\nGenerally, ionization energy increases across a period due to increasing nuclear charge (more protons) with similar shielding. However, Al (3p¹) has slightly lower IE than Mg (3s²) because the single 3p electron is easier to remove than a 3s² paired electron. Si has the highest IE of the four.',
      },
      {
        label: '(b)',
        prompt: 'Explain why the second ionization energy of Na is dramatically higher than its first ionization energy.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'States removing the second electron breaks into the noble gas core / inner shell', keywords: ['noble gas', 'core', 'inner shell', '2p', 'neon'] },
          { points: 1, description: 'Explains core electrons experience much greater effective nuclear charge / much closer to nucleus', keywords: ['effective nuclear charge', 'Zeff', 'closer', 'tightly held', 'much more energy'] },
        ],
        sampleAnswer: 'Na has the electron configuration [Ne]3s¹. The first electron removed is the lone 3s valence electron. The second electron must be removed from the 2p subshell (the neon core). Core electrons are much closer to the nucleus and experience a much higher effective nuclear charge because there is far less shielding. This requires dramatically more energy.',
      },
    ],
  },
  {
    id: 'chem-short-2',
    type: 'short',
    unit: 2,
    title: 'Lewis Structures & VSEPR',
    prompt: 'Consider the molecule XeF₄.',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Draw the Lewis structure of XeF₄. Include all lone pairs.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Shows Xe bonded to 4 F atoms with 2 lone pairs on Xe', keywords: ['4 F', 'four F', '2 lone pairs', 'two lone pairs', '6 electron groups', '4 bonds'] },
          { points: 1, description: 'Shows correct total electron count: 36 valence electrons', keywords: ['36', 'valence', 'expanded octet'] },
        ],
        sampleAnswer: 'Xe: 8 valence e⁻, 4F × 7 = 28 valence e⁻. Total = 36 valence electrons.\n\nXe is the central atom with 4 single bonds to F (8 e⁻ in bonds). Each F has 3 lone pairs (24 e⁻). Remaining 4 e⁻ = 2 lone pairs on Xe.\n\nXe has an expanded octet with 6 electron groups (4 bonding + 2 lone pairs).',
      },
      {
        label: '(b)',
        prompt: 'Determine the electron geometry and molecular geometry of XeF₄. Is the molecule polar or nonpolar? Explain.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Electron geometry: octahedral; Molecular geometry: square planar', keywords: ['octahedral', 'square planar'] },
          { points: 1, description: 'Nonpolar because the bond dipoles cancel due to symmetric arrangement', keywords: ['nonpolar', 'non-polar', 'cancel', 'symmetric', 'no net dipole'] },
        ],
        sampleAnswer: 'With 6 electron groups around Xe, the electron geometry is octahedral. The 2 lone pairs are positioned opposite each other (to minimize repulsion), giving a molecular geometry of square planar.\n\nXeF₄ is nonpolar. In the square planar arrangement, the four Xe-F bond dipoles are symmetric and cancel out, resulting in no net dipole moment.',
      },
    ],
  },
  {
    id: 'chem-short-3',
    type: 'short',
    unit: 3,
    title: 'Intermolecular Forces',
    prompt: 'Explain the following observation in terms of intermolecular forces.',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'The boiling point of HF (19.5°C) is much higher than the boiling point of HCl (-85°C), even though HCl has a greater molar mass.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies hydrogen bonding in HF', keywords: ['hydrogen bond', 'H-bond', 'hydrogen-bond'] },
          { points: 1, description: 'Explains F is highly electronegative, creating strong H-bonds; HCl only has dipole-dipole', keywords: ['electronegativ', 'F', 'fluorine', 'dipole-dipole', 'dipole dipole', 'stronger'] },
        ],
        sampleAnswer: 'HF exhibits hydrogen bonding because F is highly electronegative (3.98) and small, creating a very polar H-F bond. The H can form strong hydrogen bonds with the lone pairs on F of neighboring molecules. HCl only has dipole-dipole interactions (H-bonds require N, O, or F). Hydrogen bonds are much stronger than regular dipole-dipole forces, so HF has a much higher boiling point despite its lower molar mass.',
      },
      {
        label: '(b)',
        prompt: 'Ethanol (C₂H₅OH, MW = 46) is miscible with water, but diethyl ether (C₂H₅OC₂H₅, MW = 74) has limited solubility in water. Explain.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Ethanol has an O-H group that can hydrogen bond with water', keywords: ['O-H', 'OH', 'hydrogen bond', 'H-bond'] },
          { points: 1, description: 'Ether has no O-H group; it can only accept H-bonds, and its larger nonpolar portion dominates', keywords: ['no O-H', 'cannot donate', 'nonpolar', 'hydrophobic', 'like dissolves like'] },
        ],
        sampleAnswer: 'Ethanol has an -OH group that can both donate and accept hydrogen bonds with water molecules — it acts as both H-bond donor and acceptor. This makes it fully miscible with water ("like dissolves like").\n\nDiethyl ether lacks an O-H group. While the oxygen can accept hydrogen bonds, it cannot donate them. Additionally, ether has a much larger nonpolar hydrocarbon portion, making it predominantly hydrophobic. The limited H-bonding cannot overcome the unfavorable interactions of the large nonpolar region with water.',
      },
    ],
  },
  {
    id: 'chem-short-4',
    type: 'short',
    unit: 4,
    title: 'Types of Chemical Reactions',
    prompt: 'For each of the following, write the balanced net ionic equation and identify the reaction type.',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Aqueous solutions of lead(II) nitrate and potassium iodide are mixed.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes correct net ionic equation: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)', keywords: ['Pb²⁺', 'Pb2+', '2I⁻', '2I-', 'PbI₂', 'PbI2'] },
          { points: 1, description: 'Identifies as precipitation/double replacement/metathesis reaction', keywords: ['precipitation', 'double replacement', 'metathesis', 'double displacement'] },
        ],
        sampleAnswer: 'Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)\n\nNet ionic: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)\n\nThis is a precipitation (double replacement) reaction. PbI₂ is insoluble and forms a bright yellow precipitate.',
      },
      {
        label: '(b)',
        prompt: 'Solid zinc is placed in a solution of copper(II) sulfate.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes correct net ionic equation: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)', keywords: ['Zn(s)', 'Cu²⁺', 'Cu2+', 'Zn²⁺', 'Zn2+', 'Cu(s)'] },
          { points: 1, description: 'Identifies as single replacement/redox/oxidation-reduction reaction', keywords: ['single replacement', 'redox', 'oxidation-reduction', 'single displacement'] },
        ],
        sampleAnswer: 'Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)\n\nNet ionic: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\n\nThis is a single replacement (redox) reaction. Zn is oxidized (0 → +2) and Cu²⁺ is reduced (+2 → 0). Zn is more active than Cu in the activity series.',
      },
    ],
  },
  {
    id: 'chem-short-5',
    type: 'short',
    unit: 4,
    title: 'Stoichiometry & Limiting Reagent',
    prompt: 'When 5.00 g of aluminum reacts with 10.0 g of chlorine gas to form aluminum chloride:',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the balanced equation and determine the limiting reagent.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes balanced equation: 2Al + 3Cl₂ → 2AlCl₃', keywords: ['2Al', '3Cl₂', '3Cl2', '2AlCl₃', '2AlCl3'] },
          { points: 1, description: 'Identifies Cl₂ as limiting reagent with correct calculation', keywords: ['Cl₂', 'Cl2', 'limiting', 'chlorine'] },
        ],
        sampleAnswer: '2Al(s) + 3Cl₂(g) → 2AlCl₃(s)\n\nMoles Al = 5.00 g / 26.98 g/mol = 0.1853 mol\nMoles Cl₂ = 10.0 g / 70.90 g/mol = 0.1410 mol\n\nMol ratio needed: 3 mol Cl₂ / 2 mol Al = 1.5\nActual ratio: 0.1410/0.1853 = 0.761\n\nSince 0.761 < 1.5, Cl₂ is the limiting reagent.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the theoretical yield of AlCl₃ in grams and the mass of excess reagent remaining.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Calculates theoretical yield: ~12.5 g AlCl₃', keywords: ['12.5', '12.6', '12.53'] },
          { points: 1, description: 'Calculates excess Al remaining: ~2.46 g', keywords: ['2.46', '2.47', '2.5'] },
        ],
        sampleAnswer: 'From limiting reagent (Cl₂):\nmol AlCl₃ = 0.1410 mol Cl₂ × (2 mol AlCl₃ / 3 mol Cl₂) = 0.09400 mol\n\nTheoretical yield = 0.09400 mol × 133.34 g/mol = 12.53 g AlCl₃\n\nAl consumed = 0.09400 mol AlCl₃ × (2 mol Al / 2 mol AlCl₃) × 26.98 g/mol = 2.54 g\nExcess Al remaining = 5.00 - 2.54 = 2.46 g',
      },
    ],
  },
  {
    id: 'chem-short-6',
    type: 'short',
    unit: 8,
    title: 'Buffer Solutions',
    prompt: 'A buffer solution is prepared by mixing 0.300 mol of NH₃ with 0.200 mol of NH₄Cl in 1.00 L of solution. ($K_b$ for NH₃ = $1.8 \\times 10^{-5}$)',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the pH of this buffer solution.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Uses Henderson-Hasselbalch (pOH version or converts to Ka)', keywords: ['Henderson', 'pOH', 'pKb', 'log'] },
          { points: 1, description: 'Calculates pH ≈ 9.43', keywords: ['9.43', '9.4'] },
        ],
        sampleAnswer: 'pKb = -log(1.8 × 10⁻⁵) = 4.74\npOH = pKb + log([NH₄⁺]/[NH₃]) = 4.74 + log(0.200/0.300) = 4.74 + (-0.176) = 4.57\npH = 14.00 - 4.57 = 9.43',
      },
      {
        label: '(b)',
        prompt: 'Calculate the pH after 0.050 mol of HCl is added to this buffer. Explain why the pH change is small.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Shows HCl reacts with NH₃, new amounts: NH₃=0.250, NH₄⁺=0.250', keywords: ['0.250', 'reacts with NH₃', 'neutralize'] },
          { points: 1, description: 'Calculates new pH ≈ 9.26 and explains buffer resists pH change', keywords: ['9.26', '9.25', '9.3', 'buffer', 'resist', 'absorb'] },
        ],
        sampleAnswer: 'HCl reacts with NH₃: NH₃ + HCl → NH₄Cl\nNew moles: NH₃ = 0.300 - 0.050 = 0.250 mol, NH₄⁺ = 0.200 + 0.050 = 0.250 mol\n\npOH = 4.74 + log(0.250/0.250) = 4.74 + 0 = 4.74\npH = 14.00 - 4.74 = 9.26\n\nThe pH only changed by 0.17 units (from 9.43 to 9.26) because the buffer absorbs the added H⁺ by reacting it with the weak base component (NH₃), converting it to conjugate acid (NH₄⁺) without drastically changing the ratio.',
      },
    ],
  },
  {
    id: 'chem-short-7',
    type: 'short',
    unit: 9,
    title: 'Electrolysis',
    prompt: 'An electrolytic cell is used to plate silver from a solution of AgNO₃.',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the half-reaction that occurs at the cathode. Explain why silver is deposited at the cathode and not the anode.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes cathode half-reaction: Ag⁺(aq) + e⁻ → Ag(s)', keywords: ['Ag⁺', 'Ag+', 'e⁻', 'e-', 'Ag(s)', 'cathode'] },
          { points: 1, description: 'Explains reduction occurs at cathode; Ag⁺ gains electrons', keywords: ['reduction', 'cathode', 'gain', 'electron'] },
        ],
        sampleAnswer: 'Cathode: Ag⁺(aq) + e⁻ → Ag(s)\n\nSilver is deposited at the cathode because reduction (gain of electrons) occurs at the cathode. Ag⁺ ions migrate to the cathode where they gain electrons from the external circuit, forming solid silver metal.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the mass of silver deposited if a current of 2.50 A flows for 1.00 hour. (F = 96,485 C/mol, Ag = 107.87 g/mol)',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Calculates charge: Q = It = 2.50 × 3600 = 9000 C, then mol e⁻ = 9000/96485', keywords: ['9000', '96485', '0.09327', '0.0933'] },
          { points: 1, description: 'Calculates mass ≈ 10.1 g Ag (mol Ag = mol e⁻ since n=1)', keywords: ['10.1', '10.0', '10.06'] },
        ],
        sampleAnswer: 'Q = I × t = 2.50 A × 3600 s = 9000 C\nmol e⁻ = Q/F = 9000/96,485 = 0.09327 mol\n\nSince Ag⁺ + e⁻ → Ag, mol Ag = mol e⁻ = 0.09327 mol\nMass Ag = 0.09327 × 107.87 = 10.1 g',
      },
    ],
  },
  {
    id: 'chem-short-8',
    type: 'short',
    unit: 7,
    title: 'Solubility Equilibrium',
    prompt: 'The $K_{sp}$ of PbCl₂ at 25°C is $1.7 \\times 10^{-5}$.',
    totalPoints: 4,
    timeRecommendation: '~9 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the dissolution equation and the $K_{sp}$ expression. Calculate the molar solubility of PbCl₂ in pure water.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes Ksp = [Pb²⁺][Cl⁻]² and dissolution equation', keywords: ['Ksp', '[Pb²⁺][Cl⁻]²', '[Pb2+][Cl-]^2', 'PbCl₂', 'Pb²⁺', '2Cl⁻'] },
          { points: 1, description: 'Calculates molar solubility s ≈ 0.016 M using 4s³ = Ksp', keywords: ['0.016', '0.0162', '1.6 × 10⁻²', '4s³', '4s^3'] },
        ],
        sampleAnswer: 'PbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq)\nKsp = [Pb²⁺][Cl⁻]² = (s)(2s)² = 4s³\n\n4s³ = 1.7 × 10⁻⁵\ns³ = 4.25 × 10⁻⁶\ns = 0.0162 M',
      },
      {
        label: '(b)',
        prompt: 'Would the molar solubility of PbCl₂ increase, decrease, or stay the same in a 0.10 M NaCl solution? Justify your answer quantitatively.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'States solubility DECREASES due to common ion effect', keywords: ['decrease', 'common ion', 'less soluble'] },
          { points: 1, description: 'Shows calculation with [Cl⁻] = 0.10+2s ≈ 0.10, giving s ≈ 1.7 × 10⁻³ M', keywords: ['1.7 × 10⁻³', '1.7 × 10^-3', '0.0017', '0.10'] },
        ],
        sampleAnswer: 'The solubility DECREASES due to the common ion effect. NaCl provides Cl⁻ ions.\n\nKsp = [Pb²⁺][Cl⁻]² = (s)(0.10 + 2s)²\n\nSince s << 0.10: (s)(0.10)² = 1.7 × 10⁻⁵\ns = 1.7 × 10⁻⁵ / 0.010 = 1.7 × 10⁻³ M\n\nThis is about 10× less soluble than in pure water (0.016 M vs 0.0017 M).',
      },
    ],
  },
]

// ─── Exports ─────────────────────────────────────────────────────────

export function getAllFRQs(): ChemFRQ[] {
  return [...longFRQs, ...shortFRQs]
}

export function getLongFRQs(): ChemFRQ[] {
  return longFRQs
}

export function getShortFRQs(): ChemFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): { long: ChemFRQ[]; short: ChemFRQ[] } {
  // AP exam has 3 long + 4 short
  const shuffledLong = [...longFRQs].sort(() => Math.random() - 0.5).slice(0, 3)
  const shuffledShort = [...shortFRQs].sort(() => Math.random() - 0.5).slice(0, 4)
  return { long: shuffledLong, short: shuffledShort }
}

export function getFRQsByUnit(unit: number): ChemFRQ[] {
  return [...longFRQs, ...shortFRQs].filter(q => q.unit === unit)
}
