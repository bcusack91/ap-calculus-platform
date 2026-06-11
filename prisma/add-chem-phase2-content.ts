import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Phase 2/3 content fill for AP Chemistry topics that previously had no interactive lesson.
 * Adds ExampleProblems and Flashcards to the 5 underserved topics:
 *   - atomic-spectra
 *   - solubility-equilibrium
 *   - galvanic-cells-thermo-applications
 *   - spontaneity-free-energy-applications
 *   - le-chatelier-equilibrium-shifts
 *
 * Run with:  set -a && source .env.local && set +a && npx tsx prisma/add-chem-phase2-content.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }

const TOPICS: Record<string, { problems: ProblemSeed[]; cards: CardSeed[] }> = {
  // ──────────────────────────────────────────────────────────────────
  'atomic-spectra': {
    problems: [
      {
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: `Calculate the energy of a single photon of green light with wavelength 532 nm. Use $h = 6.626 \\times 10^{-34}$ J·s and $c = 3.00 \\times 10^{8}$ m/s.`,
        solution: `**Step 1.** Convert wavelength: $532 \\text{ nm} = 5.32 \\times 10^{-7}$ m.

**Step 2.** Apply $E = hc/\\lambda$:

$E = \\dfrac{(6.626 \\times 10^{-34})(3.00 \\times 10^{8})}{5.32 \\times 10^{-7}} = \\boxed{3.74 \\times 10^{-19} \\text{ J}}$`,
      },
      {
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: `A hydrogen atom transitions from $n = 5$ to $n = 2$. (a) Calculate the energy of the emitted photon in joules. (b) What is the wavelength in nm? (c) In what region of the EM spectrum does this lie?`,
        solution: `Use $E_n = -2.18 \\times 10^{-18}/n^{2}$ J.

(a) $\\Delta E = E_2 - E_5 = -2.18 \\times 10^{-18}\\left(\\dfrac{1}{4} - \\dfrac{1}{25}\\right) = -2.18 \\times 10^{-18}(0.21) = -4.58 \\times 10^{-19}$ J. The photon carries $|\\Delta E| = \\boxed{4.58 \\times 10^{-19} \\text{ J}}$.

(b) $\\lambda = hc/E = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(4.58 \\times 10^{-19}) = 4.34 \\times 10^{-7}$ m $= \\boxed{434 \\text{ nm}}$.

(c) 434 nm is in the **visible** range (violet) — this is the H-γ line of the **Balmer series**.`,
      },
      {
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: `Use the Rydberg formula to determine the wavelength (in nm) of the spectral line for the $n = 4 \\to n = 1$ transition in hydrogen. Identify the spectral series. ($R_H = 1.097 \\times 10^{7}$ m⁻¹.)`,
        solution: `**Step 1.** Apply Rydberg with $n_f = 1$, $n_i = 4$:

$\\dfrac{1}{\\lambda} = R_H\\left(\\dfrac{1}{1^2} - \\dfrac{1}{4^2}\\right) = (1.097 \\times 10^{7})(0.9375) = 1.028 \\times 10^{7} \\text{ m}^{-1}$

**Step 2.** $\\lambda = 1/(1.028 \\times 10^{7}) = 9.72 \\times 10^{-8}$ m $= \\boxed{97.2 \\text{ nm}}$.

**Step 3.** Since $n_f = 1$, this is a **Lyman series** line (UV).`,
      },
      {
        order: 4,
        difficulty: 'HARD' as Difficulty,
        question: `In a photoelectron spectroscopy (PES) experiment, photons of energy $1.50 \\times 10^{-17}$ J are used. Electrons ejected from a particular orbital of an atom emerge with kinetic energy $1.20 \\times 10^{-17}$ J. (a) What is the binding energy of those electrons? (b) Convert the binding energy to kJ/mol. (c) Briefly explain whether you would expect this to correspond to a core electron or a valence electron.`,
        solution: `(a) $BE = h\\nu - KE = 1.50 \\times 10^{-17} - 1.20 \\times 10^{-17} = \\boxed{3.0 \\times 10^{-18} \\text{ J}}$ per electron.

(b) Multiply by Avogadro's number: $(3.0 \\times 10^{-18})(6.022 \\times 10^{23}) = 1.81 \\times 10^{6}$ J/mol $= \\boxed{1810 \\text{ kJ/mol}}$.

(c) 1810 kJ/mol is far larger than typical valence ionization energies (which are 500–2400 kJ/mol). This magnitude is consistent with a **core electron** (e.g., a 1s or 2s electron in a second- or third-row element) experiencing nearly the full nuclear charge.`,
      },
    ],
    cards: [
      { front: 'Speed-of-light equation relating $\\lambda$ and $\\nu$', back: '$c = \\lambda \\nu$, with $c = 3.00 \\times 10^{8}$ m/s.', lessonPart: 1 },
      { front: 'Energy of a single photon', back: '$E = h\\nu = hc/\\lambda$, with $h = 6.626 \\times 10^{-34}$ J·s.', lessonPart: 1 },
      { front: 'Wavelength range of visible light', back: '~400 nm (violet) to ~700 nm (red).', lessonPart: 1 },
      { front: 'Why do atoms produce LINE spectra (not continuous)?', back: 'Electron energy levels are quantized — only specific energy gaps (and thus specific photon energies) are allowed.', lessonPart: 2 },
      { front: 'Bohr energy formula for hydrogen', back: '$E_n = -2.18 \\times 10^{-18}/n^{2}$ J = $-13.6/n^{2}$ eV.', lessonPart: 3 },
      { front: 'Rydberg formula', back: '$1/\\lambda = R_H\\,(1/n_f^{2} - 1/n_i^{2})$, with $R_H = 1.097 \\times 10^{7}$ m⁻¹.', lessonPart: 4 },
      { front: 'Lyman series — final $n_f$ and EM region', back: '$n_f = 1$; lines fall in the **ultraviolet**.', lessonPart: 4 },
      { front: 'Balmer series — final $n_f$ and EM region', back: '$n_f = 2$; the four brightest lines are in the **visible** (656, 486, 434, 410 nm).', lessonPart: 4 },
      { front: 'Paschen series — final $n_f$ and EM region', back: '$n_f = 3$; lines fall in the **infrared**.', lessonPart: 4 },
      { front: 'Ground-state ionization energy of hydrogen', back: '$2.18 \\times 10^{-18}$ J per atom = 13.6 eV = 1310 kJ/mol.', lessonPart: 3 },
      { front: 'Effective nuclear charge $Z_{\\text{eff}}$', back: '$Z_{\\text{eff}} = Z - S$ (S = shielding from inner electrons). Determines orbital binding energies in multi-electron atoms.', lessonPart: 5 },
      { front: 'PES key equation', back: 'Binding energy = photon energy − ejected-electron KE: $BE = h\\nu - KE$.', lessonPart: 5 },
      { front: 'In a PES spectrum, peak height represents…', back: 'The number of electrons in that subshell.', lessonPart: 5 },
      { front: 'In a PES spectrum, peak position represents…', back: 'The binding energy of electrons in that subshell. Higher BE = closer to the nucleus.', lessonPart: 5 },
      { front: 'Why doesn\'t the Bohr model work for multi-electron atoms?', back: 'It ignores electron-electron repulsion, shielding, and subshell splitting. Works only for one-electron systems (H, He⁺, Li²⁺, …).', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'solubility-equilibrium': {
    problems: [
      {
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: `Write the $K_{sp}$ expression for AgCl(s) dissolving in water.`,
        solution: `Dissolution: $\\text{AgCl(s)} \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$.

The solid is omitted from the equilibrium expression: $\\boxed{K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]}$.`,
      },
      {
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: `The molar solubility of $\\text{PbI}_2$ in pure water at 25 °C is $1.5 \\times 10^{-3}$ M. Calculate $K_{sp}$.`,
        solution: `Equilibrium: $\\text{PbI}_2(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + 2\\,\\text{I}^-(aq)$.

If molar solubility = $s$, then $[\\text{Pb}^{2+}] = s$ and $[\\text{I}^-] = 2s$.

$K_{sp} = [\\text{Pb}^{2+}][\\text{I}^-]^2 = (s)(2s)^2 = 4s^3$

$K_{sp} = 4(1.5 \\times 10^{-3})^3 = 4(3.375 \\times 10^{-9}) = \\boxed{1.4 \\times 10^{-8}}$.`,
      },
      {
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: `For $\\text{CaF}_2$, $K_{sp} = 3.9 \\times 10^{-11}$. Calculate the molar solubility (a) in pure water and (b) in 0.10 M $\\text{NaF}$. Briefly explain the difference.`,
        solution: `Equilibrium: $\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+}(aq) + 2\\,\\text{F}^-(aq)$.

(a) In pure water: let $s$ = molar solubility. $K_{sp} = (s)(2s)^2 = 4s^3$.
$s = (K_{sp}/4)^{1/3} = (9.75 \\times 10^{-12})^{1/3} = \\boxed{2.1 \\times 10^{-4} \\text{ M}}$.

(b) In 0.10 M $\\text{NaF}$: $[\\text{F}^-] \\approx 0.10$ M (from the salt, since $2s \\ll 0.10$).
$K_{sp} = (s)(0.10)^2 \\Rightarrow s = K_{sp}/(0.10)^2 = 3.9 \\times 10^{-11}/0.010 = \\boxed{3.9 \\times 10^{-9} \\text{ M}}$.

**Explanation:** The **common-ion effect** suppresses solubility — adding $\\text{F}^-$ shifts the equilibrium left (Le Chatelier), greatly reducing how much $\\text{CaF}_2$ dissolves.`,
      },
      {
        order: 4,
        difficulty: 'HARD' as Difficulty,
        question: `Will a precipitate form when 100. mL of 0.0020 M $\\text{Pb(NO}_3)_2$ is mixed with 100. mL of 0.020 M $\\text{NaCl}$? $K_{sp}(\\text{PbCl}_2) = 1.7 \\times 10^{-5}$.`,
        solution: `**Step 1.** Find ion concentrations after mixing (volume doubles ⇒ each is halved):
$[\\text{Pb}^{2+}] = 0.0010$ M, $[\\text{Cl}^-] = 0.010$ M.

**Step 2.** Compute the reaction quotient $Q$ for $\\text{PbCl}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{Cl}^-$:
$Q = [\\text{Pb}^{2+}][\\text{Cl}^-]^2 = (0.0010)(0.010)^2 = 1.0 \\times 10^{-7}$.

**Step 3.** Compare to $K_{sp}$:
$Q = 1.0 \\times 10^{-7} < K_{sp} = 1.7 \\times 10^{-5}$.

**Conclusion:** $Q < K_{sp}$, so **no precipitate forms** — the solution is unsaturated.`,
      },
    ],
    cards: [
      { front: 'Definition of $K_{sp}$', back: 'The solubility-product constant — the equilibrium constant for a slightly soluble ionic solid dissolving in water.', lessonPart: 1 },
      { front: '$K_{sp}$ for $\\text{Ag}_2\\text{CrO}_4$', back: '$K_{sp} = [\\text{Ag}^+]^2[\\text{CrO}_4^{2-}]$. (Note the squared term — coefficients become exponents.)', lessonPart: 1 },
      { front: 'Why omit the solid in $K_{sp}$ expressions?', back: 'Activities of pure solids (and pure liquids) are defined as 1 — they don\'t appear in equilibrium expressions.', lessonPart: 1 },
      { front: 'Molar solubility vs $K_{sp}$', back: 'Molar solubility ($s$) is the moles of solid that dissolve per liter; $K_{sp}$ is the constant. They are related by stoichiometry, e.g., for $\\text{MX}_2$: $K_{sp} = 4s^3$.', lessonPart: 2 },
      { front: 'Common-ion effect', back: 'Adding a soluble salt that shares an ion with a slightly-soluble compound DECREASES the latter\'s solubility (Le Chatelier).', lessonPart: 3 },
      { front: 'Predicting precipitation: compare what?', back: 'Compute $Q$ from initial ion concentrations. If $Q > K_{sp}$ ⇒ precipitate forms; $Q < K_{sp}$ ⇒ unsaturated, no precipitate; $Q = K_{sp}$ ⇒ exactly saturated.', lessonPart: 4 },
      { front: 'Selective precipitation', back: 'Two cations in solution: the one whose salt has the smaller $K_{sp}$ for a given anion precipitates first as the anion is gradually added.', lessonPart: 5 },
      { front: 'Effect of pH on hydroxide-salt solubility', back: 'Salts of basic anions (like $\\text{OH}^-$, $\\text{F}^-$, $\\text{S}^{2-}$) become MORE soluble in acid because the anion is protonated, removing it from the equilibrium.', lessonPart: 3 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'galvanic-cells-thermo-applications': {
    problems: [
      {
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: `Given $E°(\\text{Cu}^{2+}/\\text{Cu}) = +0.34$ V and $E°(\\text{Zn}^{2+}/\\text{Zn}) = -0.76$ V, calculate $E°_{\\text{cell}}$ for a Zn–Cu galvanic cell. Identify the anode and cathode.`,
        solution: `In a galvanic cell, the half-reaction with the higher reduction potential is the cathode (reduction); the other is the anode (oxidation, written reversed).

- Cathode (reduction): $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$, $E° = +0.34$ V.
- Anode (oxidation): $\\text{Zn} \\to \\text{Zn}^{2+} + 2e^-$ (reverse of $E° = -0.76$ V).

$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}} = (+0.34) - (-0.76) = \\boxed{+1.10 \\text{ V}}$.

**Cathode:** Cu electrode. **Anode:** Zn electrode.`,
      },
      {
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: `For the cell in problem 1 (n = 2 electrons transferred), calculate $\\Delta G°$ in kJ/mol. ($F = 96{,}485$ C/mol).`,
        solution: `Use $\\Delta G° = -nFE°_{\\text{cell}}$:

$\\Delta G° = -(2)(96{,}485 \\text{ C/mol})(1.10 \\text{ V}) = -2.12 \\times 10^5 \\text{ J/mol}$

Convert to kJ: $\\Delta G° = \\boxed{-212 \\text{ kJ/mol}}$.

The negative value confirms the reaction is **spontaneous** (consistent with positive $E°_{\\text{cell}}$).`,
      },
      {
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: `Compute the equilibrium constant $K$ at 298 K for the Zn–Cu cell ($E°_{\\text{cell}} = 1.10$ V, $n = 2$). Use $\\log K = nE°/0.0592$.`,
        solution: `$\\log K = \\dfrac{nE°}{0.0592} = \\dfrac{(2)(1.10)}{0.0592} = 37.16$

$K = 10^{37.16} \\approx \\boxed{1.4 \\times 10^{37}}$.

This enormous $K$ means the reaction goes essentially to completion — products dominate at equilibrium.`,
      },
      {
        order: 4,
        difficulty: 'HARD' as Difficulty,
        question: `A galvanic cell uses the half-reactions $\\text{Ag}^+ + e^- \\to \\text{Ag}$ ($E° = +0.80$ V) and $\\text{Fe}^{3+} + e^- \\to \\text{Fe}^{2+}$ ($E° = +0.77$ V). (a) Identify the cathode and anode. (b) Compute $E°_{\\text{cell}}$. (c) Compute $\\Delta G°$ for the balanced cell reaction (n = 1).`,
        solution: `(a) Higher $E°$ (Ag⁺/Ag, +0.80 V) is the **cathode**. The Fe³⁺/Fe²⁺ couple becomes the **anode** (oxidation: $\\text{Fe}^{2+} \\to \\text{Fe}^{3+} + e^-$).

(b) $E°_{\\text{cell}} = 0.80 - 0.77 = \\boxed{+0.03 \\text{ V}}$.

(c) Balanced reaction: $\\text{Ag}^+ + \\text{Fe}^{2+} \\to \\text{Ag} + \\text{Fe}^{3+}$, $n = 1$.

$\\Delta G° = -(1)(96{,}485)(0.03) = -2.9 \\times 10^3$ J/mol $= \\boxed{-2.9 \\text{ kJ/mol}}$.

A small but negative $\\Delta G°$ — the reaction is barely spontaneous.`,
      },
    ],
    cards: [
      { front: 'Galvanic (voltaic) cell — what does it do?', back: 'Converts the energy of a spontaneous redox reaction into electrical work.', lessonPart: 1 },
      { front: 'Mnemonic for anode/cathode', back: '"AN OX, RED CAT": **AN**ode = **OX**idation, **RED**uction = **CAT**hode.', lessonPart: 1 },
      { front: 'Direction of electron flow in a galvanic cell', back: 'External wire: anode → cathode. (Conventional current runs the opposite way.)', lessonPart: 1 },
      { front: 'Role of the salt bridge', back: 'Maintains charge neutrality in each half-cell as ions are produced/consumed; allows ion flow without mixing the half-cell solutions.', lessonPart: 1 },
      { front: '$E°_{\\text{cell}}$ formula', back: '$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$ (both written as REDUCTION potentials).', lessonPart: 4 },
      { front: 'Sign of $E°_{\\text{cell}}$ and spontaneity', back: '$E°_{\\text{cell}} > 0$ ⇒ spontaneous (galvanic). $E°_{\\text{cell}} < 0$ ⇒ non-spontaneous (electrolytic — needs external voltage).', lessonPart: 5 },
      { front: 'Connecting $\\Delta G°$ to $E°_{\\text{cell}}$', back: '$\\Delta G° = -nFE°_{\\text{cell}}$, with $F = 96{,}485$ C/mol.', lessonPart: 5 },
      { front: 'Connecting $E°_{\\text{cell}}$ to $K$ (at 298 K)', back: '$\\log K = nE°/0.0592$, equivalently $E° = (RT/nF)\\ln K$.', lessonPart: 5 },
      { front: 'Cell notation example', back: 'Zn(s) | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu(s). Anode on the LEFT; cathode on the RIGHT; "‖" = salt bridge.', lessonPart: 2 },
      { front: 'Why are standard reduction potentials referenced against SHE?', back: 'The Standard Hydrogen Electrode (SHE) is assigned $E° = 0$ V, providing a universal baseline.', lessonPart: 3 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'spontaneity-free-energy-applications': {
    problems: [
      {
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: `Given $\\Delta H = -92.2$ kJ/mol and $\\Delta S = -198.7$ J/(mol·K) for $\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$. Compute $\\Delta G$ at 298 K and state whether the reaction is spontaneous.`,
        solution: `Convert $\\Delta S$ to kJ: $\\Delta S = -0.1987$ kJ/(mol·K).

$\\Delta G = \\Delta H - T\\Delta S = -92.2 - (298)(-0.1987) = -92.2 + 59.2 = \\boxed{-33.0 \\text{ kJ/mol}}$.

**Conclusion:** $\\Delta G < 0$, so the reaction is **spontaneous** at 298 K.`,
      },
      {
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: `For the reaction in problem 1, find the temperature above which the reaction becomes non-spontaneous.`,
        solution: `Set $\\Delta G = 0$ and solve for $T$:

$T = \\dfrac{\\Delta H}{\\Delta S} = \\dfrac{-92.2 \\text{ kJ/mol}}{-0.1987 \\text{ kJ/(mol·K)}} = \\boxed{464 \\text{ K}}$.

Above ~464 K (≈ 191 °C), $T\\Delta S$ overwhelms $\\Delta H$ and $\\Delta G$ becomes positive — non-spontaneous.

**Le-Chatelier interpretation:** This is why ammonia synthesis (Haber process) runs at moderately HIGH pressure but moderately LOW temperatures (~450 °C is a kinetic compromise).`,
      },
      {
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: `For a reaction with $\\Delta G° = -25.0$ kJ/mol at 298 K, calculate the equilibrium constant $K$. ($R = 8.314$ J/(mol·K).)`,
        solution: `Use $\\Delta G° = -RT \\ln K$, solve for $K$:

$\\ln K = -\\dfrac{\\Delta G°}{RT} = -\\dfrac{-25{,}000}{(8.314)(298)} = \\dfrac{25{,}000}{2477.6} = 10.09$

$K = e^{10.09} = \\boxed{2.4 \\times 10^{4}}$.

A large $K$ (≫ 1) is consistent with $\\Delta G° < 0$: products are favored at equilibrium.`,
      },
      {
        order: 4,
        difficulty: 'HARD' as Difficulty,
        question: `For a reaction at 350 K, $\\Delta G° = +10.0$ kJ/mol but the reaction quotient $Q = 0.001$. (a) Calculate $\\Delta G$ (not standard) under these conditions. (b) Is the reaction spontaneous in the forward direction right now? Briefly explain. ($R = 8.314$ J/(mol·K).)`,
        solution: `(a) Use $\\Delta G = \\Delta G° + RT \\ln Q$.

$RT \\ln Q = (8.314)(350)\\ln(0.001) = (2910)(-6.908) = -2.01 \\times 10^{4}$ J/mol $= -20.1$ kJ/mol.

$\\Delta G = +10.0 + (-20.1) = \\boxed{-10.1 \\text{ kJ/mol}}$.

(b) $\\Delta G < 0$, so the reaction **is spontaneous in the forward direction** under these specific (non-standard) conditions, even though $\\Delta G° > 0$. The very small $Q$ (much less than $K$) drives the system forward toward equilibrium.`,
      },
    ],
    cards: [
      { front: 'Gibbs free energy equation', back: '$\\Delta G = \\Delta H - T\\Delta S$. Sign of $\\Delta G$ tells spontaneity at constant $T$, $P$.', lessonPart: 2 },
      { front: 'Sign of $\\Delta G$ and spontaneity', back: '$\\Delta G < 0$: spontaneous (forward). $\\Delta G > 0$: non-spontaneous (reverse is spontaneous). $\\Delta G = 0$: equilibrium.', lessonPart: 1 },
      { front: '4 sign combinations of $\\Delta H$ and $\\Delta S$', back: '$\\Delta H{<}0$, $\\Delta S{>}0$: spontaneous at all $T$. $\\Delta H{>}0$, $\\Delta S{<}0$: never spontaneous. Other two: depend on $T$.', lessonPart: 3 },
      { front: 'Crossover temperature', back: '$T = \\Delta H/\\Delta S$ — the temperature at which $\\Delta G$ flips sign (only meaningful if $\\Delta H$ and $\\Delta S$ have the same sign).', lessonPart: 3 },
      { front: 'Connecting $\\Delta G°$ to $K$', back: '$\\Delta G° = -RT \\ln K$ ⇒ $K = \\exp(-\\Delta G°/RT)$. $\\Delta G° < 0$ ⇒ $K > 1$.', lessonPart: 5 },
      { front: '$\\Delta G$ vs $\\Delta G°$', back: '$\\Delta G = \\Delta G° + RT\\ln Q$. $\\Delta G$ depends on actual concentrations; $\\Delta G°$ is at standard state (1 M, 1 atm).', lessonPart: 5 },
      { front: 'Standard free energy of formation $\\Delta G_f°$', back: '$\\Delta G°$ for forming 1 mol of compound from its elements in standard states. $\\Delta G_f°$(element in standard form) = 0.', lessonPart: 4 },
      { front: 'Hess-style calculation for $\\Delta G°_{\\text{rxn}}$', back: '$\\Delta G°_{\\text{rxn}} = \\sum \\Delta G_f°(\\text{products}) - \\sum \\Delta G_f°(\\text{reactants})$.', lessonPart: 4 },
      { front: 'Why isn\'t a spontaneous reaction necessarily fast?', back: 'Spontaneity is a thermodynamic statement (favorable $\\Delta G$). Rate is kinetic — controlled by activation energy, separate from $\\Delta G$.', lessonPart: 1 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'le-chatelier-equilibrium-shifts': {
    problems: [
      {
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: `For the equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + \\text{heat}$, predict the direction of shift when (a) $\\text{N}_2$ is added, (b) the system is heated, (c) the volume is decreased (pressure increased).`,
        solution: `Apply Le Chatelier — the system shifts to OPPOSE the change.

(a) Adding $\\text{N}_2$ → shifts **right** (consumes the added reactant).

(b) Adding heat to an exothermic reaction → shifts **left** (heat is treated like a product; adding heat moves equilibrium backward toward reactants).

(c) Decreasing volume = increasing pressure → shifts toward the side with FEWER gas moles. Reactants: 1 + 3 = 4 mol gas; products: 2 mol gas → shifts **right**.`,
      },
      {
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: `For the equilibrium $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ at 700 K, $K_c = 54$. A reaction mixture has $[\\text{H}_2] = 0.20$ M, $[\\text{I}_2] = 0.20$ M, and $[\\text{HI}] = 1.5$ M. Compute $Q$ and predict the direction of net reaction.`,
        solution: `$Q = \\dfrac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\dfrac{(1.5)^2}{(0.20)(0.20)} = \\dfrac{2.25}{0.040} = \\boxed{56.25}$

Compare: $Q (56.25) > K (54)$, so the system has **too much product**. Net reaction proceeds in the **reverse direction** (right → left) until $Q = K$.`,
      },
      {
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: `The reaction $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$ is endothermic. Predict the direction of shift when (a) more $\\text{CaCO}_3$ is added, (b) $\\text{CO}_2$ is removed, (c) the temperature is increased, (d) inert Ar gas is added at constant volume.`,
        solution: `(a) Adding more **solid** $\\text{CaCO}_3$ → **no shift**. Solids do not appear in $K$; their amount doesn't affect equilibrium.

(b) Removing $\\text{CO}_2$ → shifts **right** (replaces removed product).

(c) Endothermic, heat is a "reactant" → adding heat shifts **right**.

(d) Inert gas at constant volume → does NOT change partial pressures of reacting species → **no shift**.`,
      },
      {
        order: 4,
        difficulty: 'HARD' as Difficulty,
        question: `For $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, $K_p = 8.8$ at 25 °C. A flask initially contains $P_{\\text{NO}_2} = 0.50$ atm and $P_{\\text{N}_2\\text{O}_4} = 0.50$ atm. (a) Calculate $Q_p$. (b) Predict the direction of net change. (c) Briefly describe how doubling the volume of the flask would affect the position of equilibrium.`,
        solution: `(a) $Q_p = \\dfrac{P_{\\text{N}_2\\text{O}_4}}{(P_{\\text{NO}_2})^2} = \\dfrac{0.50}{(0.50)^2} = \\boxed{2.0}$.

(b) $Q_p (2.0) < K_p (8.8)$ → the system has **too little product**. Net reaction shifts **forward** (toward $\\text{N}_2\\text{O}_4$) until $Q_p = K_p$.

(c) Doubling the volume halves all partial pressures. The forward reaction goes 2 mol gas → 1 mol gas. Per Le Chatelier, decreasing pressure shifts the system toward the side with MORE gas moles, so equilibrium would shift **back toward $\\text{NO}_2$ (the reverse direction)**.`,
      },
    ],
    cards: [
      { front: 'Le Chatelier\'s principle (statement)', back: 'When a stress is applied to a system at equilibrium, the equilibrium shifts in the direction that partially relieves the stress.', lessonPart: 3 },
      { front: 'Reaction quotient $Q$', back: 'Same form as $K$ but uses CURRENT (non-equilibrium) concentrations. Comparing $Q$ to $K$ tells the direction of net reaction.', lessonPart: 1 },
      { front: 'Q vs K comparison rules', back: '$Q < K$: shifts right (toward products). $Q > K$: shifts left. $Q = K$: at equilibrium, no shift.', lessonPart: 2 },
      { front: 'Concentration change: adding reactant', back: 'Shifts equilibrium AWAY from the reactant (i.e., toward products). $K$ is unchanged.', lessonPart: 4 },
      { front: 'Pressure change at constant T (gases)', back: 'Increasing pressure (decreasing volume) shifts equilibrium toward the side with FEWER moles of gas. If both sides have equal moles, no shift.', lessonPart: 5 },
      { front: 'Effect of inert gas at constant volume', back: 'No effect — partial pressures of reacting species are unchanged.', lessonPart: 5 },
      { front: 'Effect of inert gas at constant pressure', back: 'Increases volume to maintain constant pressure → effectively dilutes reactants/products → equilibrium shifts toward more moles of gas.', lessonPart: 5 },
      { front: 'Temperature change: exothermic reaction', back: 'Treat heat as a product. Adding heat shifts equilibrium LEFT (toward reactants). $K$ DECREASES with rising $T$.', lessonPart: 5 },
      { front: 'Temperature change: endothermic reaction', back: 'Treat heat as a reactant. Adding heat shifts equilibrium RIGHT (toward products). $K$ INCREASES with rising $T$.', lessonPart: 5 },
      { front: 'Effect of a catalyst on equilibrium', back: 'NONE. A catalyst speeds up forward and reverse rates equally — equilibrium is reached faster but the position (and $K$) are unchanged.', lessonPart: 3 },
    ],
  },
}

async function main() {
  console.log('=== AP Chemistry Phase 2/3 content fill ===\n')

  let totalProblems = 0
  let totalCards = 0
  let topicsHandled = 0

  for (const [slug, payload] of Object.entries(TOPICS)) {
    const topic = await prisma.topic.findUnique({ where: { slug } })
    if (!topic) {
      console.log(`✗ Topic not found: ${slug} — skipping`)
      continue
    }

    // Existing example-problem orders to avoid duplicate (topicId, order) pairs.
    const existingProblems = await prisma.exampleProblem.findMany({
      where: { topicId: topic.id },
      select: { order: true },
    })
    const usedOrders = new Set(existingProblems.map(p => p.order))
    let nextOrder = (existingProblems.length > 0 ? Math.max(...existingProblems.map(p => p.order)) : 0) + 1

    const problemRows = payload.problems.map(p => {
      // If the natural order is already taken, push to end
      const order = usedOrders.has(p.order) ? nextOrder++ : p.order
      usedOrders.add(order)
      return {
        topicId: topic.id,
        order,
        difficulty: p.difficulty,
        question: p.question,
        solution: p.solution,
      }
    })

    if (problemRows.length > 0) {
      const result = await prisma.exampleProblem.createMany({ data: problemRows })
      totalProblems += result.count
      console.log(`  + ${result.count} ExampleProblems → ${slug}`)
    }

    // Skip flashcard inserts that exactly duplicate an existing front (avoids re-running pollution).
    const existingFronts = new Set(
      (await prisma.flashcard.findMany({
        where: { topicId: topic.id },
        select: { front: true },
      })).map(c => c.front)
    )

    const newCards = payload.cards
      .filter(c => !existingFronts.has(c.front))
      .map(c => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint ?? null,
        lessonPart: c.lessonPart ?? null,
      }))

    if (newCards.length > 0) {
      const result = await prisma.flashcard.createMany({ data: newCards })
      totalCards += result.count
      console.log(`  + ${result.count} Flashcards → ${slug}`)
    }

    topicsHandled++
  }

  console.log(`\n=== Done. ${topicsHandled} topics updated. Added ${totalProblems} problems and ${totalCards} flashcards. ===`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
