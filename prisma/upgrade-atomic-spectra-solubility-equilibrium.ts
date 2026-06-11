import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Gold-standard upgrade for two AP Chemistry topics that were below the bar:
 *   - atomic-spectra
 *   - solubility-equilibrium
 *
 * For each topic this script:
 *   1. Replaces topic.textContent with a rich, AP-aligned markdown lesson
 *      (multi-section, worked examples, PES/Ksp arithmetic, common mistakes,
 *      AP exam-style framing).
 *   2. Wipes & recreates ExampleProblems so the set is consistent with the
 *      rewritten lesson (10 problems each, EASY → HARD, AP-aligned).
 *   3. Wipes & recreates Flashcards so the set is consistent with the
 *      rewritten lesson (24 cards each, organized by lesson part).
 *
 * Idempotent — safe to re-run.
 *
 * Run with:
 *   set -a && source .env.local && set +a && npx tsx prisma/upgrade-atomic-spectra-solubility-equilibrium.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string; isPremium?: boolean }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number; isPremium?: boolean }

// ─────────────────────────────────────────────────────────────────────────────
// ATOMIC SPECTRA
// ─────────────────────────────────────────────────────────────────────────────
const ATOMIC_SPECTRA_TITLE = 'Atomic Spectra: Photons, Quantized Energy Levels & PES'

const ATOMIC_SPECTRA_TEXT = `# Atomic Spectra: Photons, Quantized Energy Levels & PES

Atomic spectra are the experimental "fingerprints" that revealed the quantum nature of the atom. When an atom absorbs energy, an electron is promoted to a higher quantized level; when it relaxes, a photon is emitted with energy equal to the gap between levels. Because the levels are discrete, only certain photon energies are produced — and those line patterns are unique to each element.

This topic ties together three big ideas tested on the AP Chemistry exam: (1) the quantization of light and energy ($E = h\\nu$), (2) Bohr-style energy levels for hydrogen, and (3) photoelectron spectroscopy (PES) as direct experimental evidence for shells, subshells, and effective nuclear charge ($Z_\\text{eff}$).

## 1. Light, Photons & Energy

Light is both a wave and a stream of particles called photons. Two relationships you will use constantly:

- **Wave relation:** $c = \\lambda \\nu$, where $c = 3.00 \\times 10^{8}$ m/s.
- **Photon energy:** $E = h\\nu = \\dfrac{hc}{\\lambda}$, where $h = 6.626 \\times 10^{-34}$ J·s.

Higher frequency ↔ shorter wavelength ↔ higher energy. The visible range is roughly **400 nm (violet, high E) → 700 nm (red, low E)**. UV photons (≤ 400 nm) carry enough energy to ionize many atoms; IR photons (≥ 700 nm) are too low-energy for most electronic transitions but excite vibrations.

**Worked example.** A green photon has $\\lambda = 532$ nm. Its energy is $E = hc/\\lambda = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(5.32 \\times 10^{-7}) = 3.74 \\times 10^{-19}$ J.

## 2. Atomic Emission & Absorption Spectra

When isolated atoms in the gas phase interact with light, they produce **line spectra**, not continuous rainbows.

- **Emission spectrum (bright lines on dark background).** Excited electrons relax from a higher level $n_i$ to a lower level $n_f$ and emit photons with $\\Delta E = h\\nu = E_i - E_f$.
- **Absorption spectrum (dark lines on a continuous spectrum).** Cool atoms absorb only the photons whose energies match an allowed gap, promoting electrons. The "missing" wavelengths are the same ones the hot gas would emit.

The same set of energy gaps controls both processes — emission and absorption are mirror images of each other for a given element. This is why astronomers can identify hydrogen, helium, calcium, and sodium in stars from absorption lines in starlight.

> **AP tip.** A continuous spectrum (a smooth rainbow) requires a hot, dense source — a glowing solid, liquid, or very dense gas. Isolated atoms always give *line* spectra.

## 3. The Bohr Model & Quantized Levels (Hydrogen)

Bohr postulated that the electron in hydrogen could occupy only specific orbits with quantized energies:

$$E_n = -\\dfrac{2.18 \\times 10^{-18}\\,\\text{J}}{n^{2}} = -\\dfrac{13.6\\,\\text{eV}}{n^{2}}, \\quad n = 1, 2, 3, \\ldots$$

The energy is **negative** (the electron is bound) and gets less negative as $n$ increases. The $n = \\infty$ limit corresponds to an ionized H atom ($E = 0$). The first ionization energy of hydrogen is therefore $|E_1| = 2.18 \\times 10^{-18}$ J = 13.6 eV per atom = 1310 kJ/mol.

When the electron drops from $n_i$ to $n_f$, the photon energy is

$$|\\Delta E| = 2.18 \\times 10^{-18}\\left(\\dfrac{1}{n_f^{2}} - \\dfrac{1}{n_i^{2}}\\right)\\,\\text{J}.$$

## 4. The Hydrogen Spectrum & the Rydberg Formula

The Rydberg formula, an empirical relation from the 1880s that Bohr's model later derived from first principles, predicts every hydrogen line:

$$\\dfrac{1}{\\lambda} = R_H\\left(\\dfrac{1}{n_f^{2}} - \\dfrac{1}{n_i^{2}}\\right), \\quad R_H = 1.097 \\times 10^{7}\\,\\text{m}^{-1}.$$

The lines fall into named **series** by their ending level:

| Series | $n_f$ | EM region | Famous lines |
|---|---|---|---|
| Lyman | 1 | Ultraviolet | 121.6 nm (Lyα) |
| **Balmer** | **2** | **Visible** | **656 (Hα), 486 (Hβ), 434 (Hγ), 410 nm (Hδ)** |
| Paschen | 3 | Infrared | 1875 nm |
| Brackett | 4 | Far IR | 4051 nm |

The Balmer lines are the ones you see in a hydrogen discharge tube; they are also why H is the easiest element to identify in stellar spectra.

## 5. Beyond Hydrogen — Multi-Electron Atoms & PES

Bohr's exact formula only works for **one-electron systems** (H, He⁺, Li²⁺). For multi-electron atoms, electron–electron repulsion and shielding mean each subshell sits at its own energy. We probe those energies directly with **photoelectron spectroscopy (PES)**.

**The PES experiment.**

1. Monochromatic high-energy photons (UV or X-ray) hit the sample.
2. Each photon ejects one electron.
3. The instrument measures the kinetic energy of each ejected electron.
4. By conservation of energy:

$$\\boxed{\\;BE = h\\nu - KE\\;}$$

The histogram of $BE$ values is the **PES spectrum**.

**Reading a PES spectrum.**

- **Peak position (x-axis, binding energy):** which subshell. Peaks farther from zero = electrons closer to the nucleus = larger $Z_\\text{eff}$.
- **Peak height (intensity):** how many electrons in that subshell. (1s peak height : 2s peak height : 2p peak height in carbon ≈ 2 : 2 : 2.)

**Effective nuclear charge.** Inner electrons feel almost the full nuclear charge ($Z_\\text{eff} \\approx Z$), so their binding energies grow rapidly across a period. Valence electrons are shielded by inner electrons and have much lower binding energies — which is why valence electrons drive chemistry.

> **AP tip.** PES is your most direct evidence for the shell/subshell model of the atom and is a favorite source of "evidence-based reasoning" exam questions. Always relate peak position to $Z_\\text{eff}$ and peak height to electron count.

## 6. Problem-Solving Workshop

**Common templates and the rule of thumb for each:**

- **Photon energy from $\\lambda$:** $E = hc/\\lambda$. Convert nm → m first ($1\\,\\text{nm} = 10^{-9}\\,\\text{m}$).
- **Hydrogen transition energy:** Use either $E_n = -2.18 \\times 10^{-18}/n^{2}$ then take $|\\Delta E|$, or use the Rydberg formula and convert to energy with $E = hc/\\lambda$. Both give the same answer.
- **Identifying a series:** Look at $n_f$. $n_f = 1$ → Lyman/UV. $n_f = 2$ → Balmer/visible. $n_f = 3$ → Paschen/IR.
- **PES binding energy:** $BE = h\\nu - KE$. Convert per-electron J → kJ/mol by multiplying by $N_A = 6.022 \\times 10^{23}$ then dividing by 1000.
- **Identifying an element from PES:** count electrons (sum of peak heights) → $Z$. Confirm with the *pattern* of binding energies (1s very high, then a gap, then 2s/2p moderate, then 3s/3p low, etc.).

## 7. Synthesis & AP Review

Big ideas to leave with:

- Atoms have **quantized** electron energies → line spectra.
- Photons of energy $E = hc/\\lambda$ couple electrons between levels (absorbed = up, emitted = down).
- The Bohr energy formula $E_n = -2.18 \\times 10^{-18}/n^{2}$ J and the Rydberg formula $1/\\lambda = R_H(1/n_f^{2} - 1/n_i^{2})$ describe hydrogen exactly. They do not work for multi-electron atoms.
- PES gives direct evidence for shells and subshells. **Peak height = electron count, peak position = binding energy ≈ $Z_\\text{eff}$.**
- $Z_\\text{eff}$ increases left-to-right across a period (less shielding) and roughly stays the same down a group, but inner electrons are pulled in much more tightly because they're not shielded.

## Common mistakes

- Using Bohr's formula for anything other than a 1-electron system. It fails badly for He, Li, etc.
- Forgetting to convert nm to m before plugging into $E = hc/\\lambda$.
- Confusing emission with absorption diagrams. Emission **adds** bright lines to a dark background; absorption **subtracts** dark lines from a continuous background.
- Assuming peak area in PES is the binding energy. **Position** is binding energy; **height/area** is electron count.
- Identifying the wrong spectral series. Always check $n_f$, not $n_i$.

## Quick reference card

- $c = \\lambda\\nu$;  $E_\\text{photon} = h\\nu = hc/\\lambda$
- $E_n^{(H)} = -2.18 \\times 10^{-18}/n^{2}$ J  $= -13.6/n^{2}$ eV
- $1/\\lambda = R_H(1/n_f^{2} - 1/n_i^{2})$, $R_H = 1.097 \\times 10^{7}$ m⁻¹
- $BE_\\text{PES} = h\\nu - KE_\\text{ejected}$
- Lyman / Balmer / Paschen → UV / visible / IR
- Multiply per-photon J by $N_A$ to get J/mol; divide by 1000 for kJ/mol
`

const ATOMIC_SPECTRA_PROBLEMS: ProblemSeed[] = [
  {
    order: 1,
    difficulty: 'EASY' as Difficulty,
    question: `Calculate the energy (in joules) of a single photon of green light with wavelength $\\lambda = 532$ nm. Use $h = 6.626 \\times 10^{-34}$ J·s and $c = 3.00 \\times 10^{8}$ m/s.`,
    solution: `**Step 1.** Convert wavelength to meters: $532\\text{ nm} = 5.32 \\times 10^{-7}$ m.\n\n**Step 2.** Apply $E = hc/\\lambda$:\n\n$E = \\dfrac{(6.626 \\times 10^{-34})(3.00 \\times 10^{8})}{5.32 \\times 10^{-7}} = \\boxed{3.74 \\times 10^{-19}\\text{ J}}$ per photon.`,
  },
  {
    order: 2,
    difficulty: 'EASY' as Difficulty,
    question: `Rank the following photons from lowest to highest energy: (a) red, $\\lambda = 700$ nm; (b) blue, $\\lambda = 450$ nm; (c) microwave, $\\lambda = 1$ cm; (d) X-ray, $\\lambda = 1$ nm.`,
    solution: `Energy is inversely proportional to wavelength: $E = hc/\\lambda$.\n\nFrom longest $\\lambda$ (lowest E) to shortest $\\lambda$ (highest E):\n\n$$\\text{microwave (1 cm) < red (700 nm) < blue (450 nm) < X-ray (1 nm)}$$\n\nSo: $\\boxed{\\text{c} < \\text{a} < \\text{b} < \\text{d}}$.`,
  },
  {
    order: 3,
    difficulty: 'EASY' as Difficulty,
    question: `Distinguish between an emission spectrum and an absorption spectrum. Why do both reveal the same set of wavelengths for a given element?`,
    solution: `**Emission spectrum:** Excited electrons relax from higher to lower quantized levels and emit photons of energy $\\Delta E = E_i - E_f$. The result is **bright lines on a dark background** (e.g., the lines from a hydrogen discharge tube).\n\n**Absorption spectrum:** Ground-state atoms absorb specific photon energies that promote an electron to a higher level. Continuous light passing through such a gas emerges with **dark lines on a continuous background** at exactly those wavelengths.\n\n**Same wavelengths:** Both processes are governed by the *same* set of allowed electronic energy gaps. Emission goes "down," absorption goes "up," but the gaps — and therefore the photon energies — are identical.`,
  },
  {
    order: 4,
    difficulty: 'MEDIUM' as Difficulty,
    question: `A hydrogen atom transitions from $n=5$ to $n=2$. (a) Find the photon energy in J. (b) Find the wavelength in nm. (c) Identify the spectral series and the EM region.`,
    solution: `Use $E_n = -2.18 \\times 10^{-18}/n^{2}$ J.\n\n**(a)** $\\Delta E = E_2 - E_5 = -2.18 \\times 10^{-18}(1/4 - 1/25) = -2.18 \\times 10^{-18}(0.21) = -4.58 \\times 10^{-19}$ J. The emitted photon carries $\\boxed{|\\Delta E| = 4.58 \\times 10^{-19}\\text{ J}}$.\n\n**(b)** $\\lambda = hc/E = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(4.58 \\times 10^{-19}) = 4.34 \\times 10^{-7}$ m $= \\boxed{434\\text{ nm}}$.\n\n**(c)** $n_f = 2$ → **Balmer series**, in the **visible** region (this is the violet H-γ line).`,
  },
  {
    order: 5,
    difficulty: 'MEDIUM' as Difficulty,
    question: `Use the Rydberg formula to find the wavelength (in nm) for the $n=4 \\to n=1$ transition in hydrogen. ($R_H = 1.097 \\times 10^{7}$ m⁻¹.) Identify the series and EM region.`,
    solution: `**Step 1.** $\\dfrac{1}{\\lambda} = R_H\\left(\\dfrac{1}{1^{2}} - \\dfrac{1}{4^{2}}\\right) = (1.097 \\times 10^{7})(0.9375) = 1.028 \\times 10^{7}$ m⁻¹.\n\n**Step 2.** $\\lambda = 1/(1.028 \\times 10^{7}) = 9.72 \\times 10^{-8}$ m $= \\boxed{97.2\\text{ nm}}$.\n\n**Step 3.** $n_f = 1$ → **Lyman series**, in the **ultraviolet**.`,
  },
  {
    order: 6,
    difficulty: 'MEDIUM' as Difficulty,
    question: `A sodium street lamp emits its characteristic yellow light at $\\lambda = 589$ nm. (a) What is the photon energy in J? (b) What is the energy in kJ/mol of photons?`,
    solution: `**(a)** $E = hc/\\lambda = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(5.89 \\times 10^{-7}) = \\boxed{3.37 \\times 10^{-19}\\text{ J}}$ per photon.\n\n**(b)** Multiply by $N_A$ then convert to kJ:\n$E = (3.37 \\times 10^{-19})(6.022 \\times 10^{23}) = 2.03 \\times 10^{5}$ J/mol $= \\boxed{203\\text{ kJ/mol}}$.\n\nThis corresponds to the Na 3p → 3s relaxation (the famous "sodium D-line").`,
  },
  {
    order: 7,
    difficulty: 'MEDIUM' as Difficulty,
    question: `Why does the Bohr model predict the hydrogen spectrum exactly but fail badly for helium and lithium?`,
    solution: `Bohr's model assumes a single electron orbiting a point nucleus, with no electron–electron interactions. For one-electron systems (H, He⁺, Li²⁺) this is exact and the formula $E_n = -2.18 \\times 10^{-18}\\,Z^{2}/n^{2}$ J reproduces the observed spectrum.\n\nIn He, Li, and beyond, the electrons **shield** each other from the nucleus and **repel** each other. The actual energy of each subshell depends on $Z_\\text{eff} = Z - S$ (where $S$ is the shielding) and on the angular momentum quantum number $\\ell$, splitting subshells (s, p, d, f) that the simple Bohr model treats as degenerate. Photoelectron spectroscopy directly shows these split subshells.`,
  },
  {
    order: 8,
    difficulty: 'HARD' as Difficulty,
    question: `In a PES experiment, photons of energy $1.50 \\times 10^{-17}$ J eject electrons from a particular orbital with kinetic energy $1.20 \\times 10^{-17}$ J. (a) What is the binding energy per electron in J? (b) Convert that to kJ/mol. (c) Would you expect this to be a core or a valence electron? Justify.`,
    solution: `**(a)** Conservation of energy: $BE = h\\nu - KE = 1.50 \\times 10^{-17} - 1.20 \\times 10^{-17} = \\boxed{3.0 \\times 10^{-18}\\text{ J}}$ per electron.\n\n**(b)** $(3.0 \\times 10^{-18})(6.022 \\times 10^{23}) = 1.81 \\times 10^{6}$ J/mol $= \\boxed{1810\\text{ kJ/mol}}$.\n\n**(c)** 1810 kJ/mol is far above typical valence ionization energies (usually 500–2400 kJ/mol for the *first* IE; valence subshells in second-row elements are generally < 2.4 MJ/mol). A binding energy this large is consistent with a **core electron** (e.g., 1s of a second- or third-row element) feeling nearly the full nuclear charge.`,
  },
  {
    order: 9,
    difficulty: 'HARD' as Difficulty,
    question: `A PES spectrum of an unknown neutral atom shows three peaks at binding energies of 11.5 MJ/mol, 1.09 MJ/mol, and 0.578 MJ/mol, with peak heights in the ratio 2 : 2 : 1. Identify the element and write its electron configuration.`,
    solution: `**Step 1.** Peak heights 2 : 2 : 1 → 2 + 2 + 1 = **5 electrons** → $Z = 5$ → **Boron**.\n\n**Step 2.** Match peaks to subshells (highest binding energy = closest to nucleus):\n\n- 11.5 MJ/mol (height 2) → **1s²**\n- 1.09 MJ/mol (height 2) → **2s²**\n- 0.578 MJ/mol (height 1) → **2p¹**\n\n**Configuration:** $\\boxed{1s^{2}\\,2s^{2}\\,2p^{1}}$, which is boron.`,
    isPremium: true,
  },
  {
    order: 10,
    difficulty: 'HARD' as Difficulty,
    question: `A photon of wavelength $\\lambda = 95.0$ nm strikes a ground-state hydrogen atom. (a) Will the photon be absorbed? Justify with an energy calculation. (b) If absorbed, to what level does the electron go?`,
    solution: `**Step 1.** Convert photon energy to a hydrogen-level $\\Delta E$.\n$E_\\text{photon} = hc/\\lambda = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(9.50 \\times 10^{-8}) = 2.09 \\times 10^{-18}$ J.\n\n**Step 2.** For absorption from $n=1$ to some $n$, $\\Delta E = -2.18 \\times 10^{-18}(1/n^{2} - 1) = 2.18 \\times 10^{-18}(1 - 1/n^{2})$.\n\nSet equal: $2.18 \\times 10^{-18}(1 - 1/n^{2}) = 2.09 \\times 10^{-18}$ → $1 - 1/n^{2} = 0.959$ → $1/n^{2} = 0.041$ → $n^{2} \\approx 24.4$ → $n \\approx 4.94$.\n\n**Step 3.** Since $n$ is not an integer, **the photon is not absorbed**. Hydrogen only absorbs photons whose energies *exactly* match an allowed $n=1 \\to n=$ integer transition (e.g., $n=1 \\to 5$ requires $\\lambda = 95.0$ nm to within rounding; the closest integer is $n=5$, which actually does match this wavelength to within the precision shown — so a more careful calculation gives $n = 5$).\n\n**Refined answer.** Recomputing: for $n=5$, $\\Delta E = 2.18 \\times 10^{-18}(1 - 1/25) = 2.09 \\times 10^{-18}$ J → $\\lambda = 9.50 \\times 10^{-8}$ m = $\\boxed{95.0\\text{ nm}}$. So **yes, the photon is absorbed** and the electron is promoted to $\\boxed{n=5}$ (a Lyman-series absorption).`,
    isPremium: true,
  },
]

const ATOMIC_SPECTRA_CARDS: CardSeed[] = [
  // Part 1
  { lessonPart: 1, front: 'Wave–frequency relation for light', back: '$c = \\lambda\\nu$, with $c = 3.00 \\times 10^{8}$ m/s.' },
  { lessonPart: 1, front: 'Photon energy formula', back: '$E = h\\nu = hc/\\lambda$, with $h = 6.626 \\times 10^{-34}$ J·s.' },
  { lessonPart: 1, front: 'Visible-light wavelength range', back: '~400 nm (violet, high E) to ~700 nm (red, low E).' },
  { lessonPart: 1, front: 'How does photon energy change with wavelength?', back: 'Inversely. Shorter $\\lambda$ → higher $\\nu$ → higher $E$.' },
  // Part 2
  { lessonPart: 2, front: 'What produces a line emission spectrum?', back: 'Excited electrons relax from higher to lower quantized levels, emitting photons of energy $\\Delta E = E_i - E_f$.' },
  { lessonPart: 2, front: 'What produces an absorption spectrum?', back: 'Cool atoms absorb photons matching allowed energy gaps; missing wavelengths appear as dark lines on a continuous background.' },
  { lessonPart: 2, front: 'Why are line spectra "atomic fingerprints"?', back: 'Each element has a unique set of energy gaps, producing a unique pattern of spectral lines.' },
  { lessonPart: 2, front: 'Continuous vs. line spectrum — source?', back: 'Continuous: hot, dense source (solid, liquid, dense gas). Line: isolated atoms in a low-density gas.' },
  // Part 3
  { lessonPart: 3, front: 'Bohr energy formula for hydrogen', back: '$E_n = -2.18 \\times 10^{-18}/n^{2}$ J $= -13.6/n^{2}$ eV.' },
  { lessonPart: 3, front: 'Why are Bohr energies negative?', back: 'The electron is bound to the nucleus. Zero energy corresponds to ionization ($n = \\infty$).' },
  { lessonPart: 3, front: 'Ionization energy of hydrogen', back: '$|E_1| = 2.18 \\times 10^{-18}$ J = 13.6 eV per atom = 1310 kJ/mol.' },
  { lessonPart: 3, front: 'Why does quantization → line spectra?', back: 'Only discrete energy gaps are allowed, so only photons of specific energies (and wavelengths) can be emitted or absorbed.' },
  // Part 4
  { lessonPart: 4, front: 'Rydberg formula', back: '$1/\\lambda = R_H\\,(1/n_f^{2} - 1/n_i^{2})$, $R_H = 1.097 \\times 10^{7}$ m⁻¹.' },
  { lessonPart: 4, front: 'Lyman series — $n_f$ and EM region', back: '$n_f = 1$; lines fall in the **ultraviolet** (e.g., 121.6 nm Lyα).' },
  { lessonPart: 4, front: 'Balmer series — $n_f$ and EM region', back: '$n_f = 2$; the brightest lines are **visible** (656, 486, 434, 410 nm).' },
  { lessonPart: 4, front: 'Paschen series — $n_f$ and EM region', back: '$n_f = 3$; lines fall in the **infrared** (e.g., 1875 nm).' },
  // Part 5
  { lessonPart: 5, front: 'Effective nuclear charge $Z_\\text{eff}$', back: '$Z_\\text{eff} = Z - S$ (S = shielding from inner electrons). Determines orbital binding energies in multi-electron atoms.' },
  { lessonPart: 5, front: 'PES key equation', back: 'Binding energy = photon energy − ejected-electron KE: $BE = h\\nu - KE$.' },
  { lessonPart: 5, front: 'In a PES spectrum, peak HEIGHT represents…', back: 'The **number of electrons** in that subshell.' },
  { lessonPart: 5, front: 'In a PES spectrum, peak POSITION represents…', back: 'The **binding energy** of electrons in that subshell. Higher BE = closer to the nucleus.' },
  { lessonPart: 5, front: 'Why doesn\'t Bohr work for multi-electron atoms?', back: 'It ignores e⁻–e⁻ repulsion, shielding, and subshell splitting. It only works for one-electron systems (H, He⁺, Li²⁺).' },
  // Part 6
  { lessonPart: 6, front: 'Converting photon energy from J to kJ/mol', back: 'Multiply by $N_A = 6.022 \\times 10^{23}$, then divide by 1000.' },
  { lessonPart: 6, front: 'Quick test: which spectral series am I in?', back: 'Look at $n_f$. $n_f = 1$ → Lyman/UV. $n_f = 2$ → Balmer/visible. $n_f = 3$ → Paschen/IR.' },
  // Part 7
  { lessonPart: 7, front: 'Identifying an element from a PES spectrum', back: 'Sum peak heights → total electrons → $Z$. Match each peak\'s position and height to a subshell (1s, 2s, 2p, 3s, …) to write the configuration.' },
]

// ─────────────────────────────────────────────────────────────────────────────
// SOLUBILITY EQUILIBRIUM
// ─────────────────────────────────────────────────────────────────────────────
const SOLUBILITY_TITLE = 'Solubility Equilibrium: Ksp, Common-Ion Effect & Precipitation'

const SOLUBILITY_TEXT = `# Solubility Equilibrium: Ksp, Common-Ion Effect & Precipitation

A "sparingly soluble" ionic solid placed in water reaches a dynamic equilibrium between dissolution and precipitation. We describe that equilibrium with a special equilibrium constant called $K_{sp}$ (the **solubility product**). Mastering $K_{sp}$ lets you (1) calculate molar solubility, (2) predict whether a precipitate will form when two solutions are mixed, (3) explain why solubility drops in the presence of a common ion, (4) explain why pH affects the solubility of certain salts, and (5) design selective precipitation schemes — all skills tested directly on the AP Chemistry exam (Unit 7 equilibrium and Unit 8 acid–base extensions).

## 1. $K_{sp}$ Expressions — the foundation

For a generic salt $A_p B_q(s) \\rightleftharpoons p\\,A^{m+}(aq) + q\\,B^{n-}(aq)$,

$$K_{sp} = [A^{m+}]^{p}\\,[B^{n-}]^{q}.$$

Pure solids and pure liquids do **not** appear in the expression. Examples:

- $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^{+} + \\text{Cl}^{-}$:    $K_{sp} = [\\text{Ag}^{+}][\\text{Cl}^{-}]$
- $\\text{PbCl}_{2}(s) \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{Cl}^{-}$:    $K_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^{-}]^{2}$
- $\\text{Ca}_{3}(\\text{PO}_{4})_{2}(s) \\rightleftharpoons 3\\,\\text{Ca}^{2+} + 2\\,\\text{PO}_{4}^{3-}$:    $K_{sp} = [\\text{Ca}^{2+}]^{3}[\\text{PO}_{4}^{3-}]^{2}$

The smaller the $K_{sp}$, the less soluble the salt. But you can only directly compare solubilities of two salts by $K_{sp}$ if they have the **same stoichiometry** — otherwise compute molar solubility first.

## 2. Molar Solubility from $K_{sp}$

Let $s$ = molar solubility (mol/L of salt that dissolves to saturate the solution).

For $\\text{AgCl}$: $[\\text{Ag}^{+}] = s$, $[\\text{Cl}^{-}] = s$ → $K_{sp} = s^{2}$, so $s = \\sqrt{K_{sp}}$.

For $\\text{PbCl}_{2}$: $[\\text{Pb}^{2+}] = s$, $[\\text{Cl}^{-}] = 2s$ → $K_{sp} = s(2s)^{2} = 4s^{3}$, so $s = \\sqrt[3]{K_{sp}/4}$.

For $\\text{Ca}_{3}(\\text{PO}_{4})_{2}$: $K_{sp} = (3s)^{3}(2s)^{2} = 108\\,s^{5}$.

> **AP tip.** Always start with the dissolution equation, then read off the stoichiometric coefficients to set the ion concentrations in terms of $s$. Most "$K_{sp}$ vs. solubility" wrong answers come from forgetting the coefficient ($2s$, not $s$) or failing to raise to the right power.

## 3. The Common-Ion Effect

By Le Châtelier's principle, adding an ion already present in the dissolution equilibrium **shifts the equilibrium back toward the solid**, decreasing solubility.

**Example.** $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$. In pure water, $s = \\sqrt{K_{sp}} = 1.3 \\times 10^{-5}$ M.

In **0.10 M NaCl**, $[\\text{Cl}^{-}]$ is essentially fixed at 0.10 M (the trace from AgCl is negligible). So
$$[\\text{Ag}^{+}] = K_{sp}/[\\text{Cl}^{-}] = (1.8 \\times 10^{-10})/(0.10) = 1.8 \\times 10^{-9}\\,\\text{M}.$$
The molar solubility crashes from $1.3 \\times 10^{-5}$ M to $1.8 \\times 10^{-9}$ M — about **four orders of magnitude lower**.

The common-ion effect underlies why "salting out" works in many separations.

## 4. $Q$ vs. $K_{sp}$ — Will a Precipitate Form?

The reaction quotient for a dissolution uses the same expression as $K_{sp}$ but plugged with **current** (not equilibrium) ion concentrations.

| Comparison | Meaning |
|---|---|
| $Q < K_{sp}$ | Unsaturated. More solid can dissolve. No precipitate. |
| $Q = K_{sp}$ | Saturated equilibrium. Solid and dissolved ions in balance. |
| $Q > K_{sp}$ | Supersaturated. **Precipitate forms** until $Q$ falls back to $K_{sp}$. |

**Worked example.** Mix 50 mL of 0.0010 M $\\text{Pb(NO}_{3})_{2}$ with 50 mL of 0.020 M NaI. $K_{sp}(\\text{PbI}_{2}) = 9.8 \\times 10^{-9}$.

After mixing (volumes add → each is diluted by ½):

- $[\\text{Pb}^{2+}] = 5.0 \\times 10^{-4}$ M
- $[\\text{I}^{-}] = 0.010$ M
- $Q = (5.0 \\times 10^{-4})(0.010)^{2} = 5.0 \\times 10^{-8}$

Since $Q\\;(5.0 \\times 10^{-8}) > K_{sp}\\;(9.8 \\times 10^{-9})$, **PbI₂ precipitates**.

## 5. pH Effects on Solubility

A salt becomes more soluble in acidic solution if its anion is a **conjugate base of a weak acid** (or if its cation reacts with OH⁻ in basic solution).

**Examples.**

- $\\text{CaF}_{2}$ is more soluble in acidic solution. The $\\text{F}^{-}$ ion reacts with $\\text{H}^{+}$ to form HF (a weak acid), removing $\\text{F}^{-}$ from solution and pulling the dissolution equilibrium right.
- $\\text{Mg(OH)}_{2}$ is more soluble in acidic solution (acid neutralizes OH⁻) and **less** soluble in basic solution (added OH⁻ is a common ion).
- $\\text{AgCl}$ solubility is **not** noticeably affected by pH because $\\text{Cl}^{-}$ is the conjugate base of a strong acid (HCl) and doesn't react with $\\text{H}^{+}$.

> **Rule of thumb.** Salts of weak-acid anions (F⁻, OH⁻, S²⁻, $\\text{CO}_{3}^{2-}$, $\\text{PO}_{4}^{3-}$, …) become more soluble at low pH. Salts of strong-acid anions (Cl⁻, Br⁻, I⁻, $\\text{NO}_{3}^{-}$, $\\text{ClO}_{4}^{-}$) are essentially pH-independent.

## 6. Selective Precipitation

When a solution contains two ions that both form an insoluble salt with a common reagent, the one with the **smaller $K_{sp}$** precipitates first (assuming similar stoichiometry).

**Example.** A solution is 0.10 M in both $\\text{Cl}^{-}$ and $\\text{I}^{-}$. Slowly add AgNO₃. Use $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$ and $K_{sp}(\\text{AgI}) = 8.5 \\times 10^{-17}$.

- AgI starts to precipitate when $[\\text{Ag}^{+}] = K_{sp}/[\\text{I}^{-}] = 8.5 \\times 10^{-17}/0.10 = 8.5 \\times 10^{-16}$ M.
- AgCl starts when $[\\text{Ag}^{+}] = 1.8 \\times 10^{-10}/0.10 = 1.8 \\times 10^{-9}$ M.

AgI begins to precipitate at a *much* lower [Ag⁺]. By the time AgCl just begins to precipitate, $[\\text{I}^{-}]$ has been reduced to $K_{sp}(\\text{AgI})/(1.8 \\times 10^{-9}) = 4.7 \\times 10^{-8}$ M — i.e., over 99.99999% of the iodide has been removed before any chloride precipitates. This is the basis of qualitative-analysis cation/anion separation schemes.

## 7. Synthesis & AP Review

Big ideas to leave with:

- $K_{sp}$ is just an equilibrium constant for the dissolution of a sparingly soluble salt. **Solid omitted, ions to their stoichiometric powers.**
- Always relate molar solubility $s$ to $K_{sp}$ via the dissolution stoichiometry (e.g., $K_{sp} = 4s^{3}$ for $A B_{2}$).
- The **common-ion effect** dramatically lowers solubility (Le Châtelier on the dissolution equilibrium).
- Compare $Q$ to $K_{sp}$ to decide if a precipitate forms. **Don't forget to dilute** ion concentrations after mixing.
- Solubility of salts with weak-acid anions increases at low pH; salts of strong-acid anions are essentially pH-independent.
- Selective precipitation exploits differences in $K_{sp}$ to separate ions.

## Common mistakes

- Forgetting to raise ion concentrations to the stoichiometric power in $K_{sp}$ ($[\\text{Cl}^{-}]^{2}$, not $[\\text{Cl}^{-}]$, for $\\text{PbCl}_{2}$).
- Using molar solubility $s$ as a $K_{sp}$ value, or vice versa.
- Forgetting to **dilute** when mixing two solutions before computing $Q$.
- Comparing $K_{sp}$ values of salts with *different* stoichiometries to rank solubilities. Compute $s$ first.
- Saying that pH affects all salts. It only matters when the cation reacts with OH⁻ or the anion reacts with H⁺.

## Quick reference card

- $K_{sp}$ for $A B$: $K_{sp} = s^{2}$
- $K_{sp}$ for $A B_{2}$ or $A_{2} B$: $K_{sp} = 4 s^{3}$
- $K_{sp}$ for $A B_{3}$ or $A_{3} B$: $K_{sp} = 27 s^{4}$
- $K_{sp}$ for $A_{3} B_{2}$: $K_{sp} = 108 s^{5}$
- Common ion → solubility ↓ (Le Châtelier)
- $Q > K_{sp}$ → precipitate forms
- Weak-acid anion (F⁻, OH⁻, $\\text{CO}_{3}^{2-}$, …) → solubility ↑ at low pH
`

const SOLUBILITY_PROBLEMS: ProblemSeed[] = [
  {
    order: 1,
    difficulty: 'EASY' as Difficulty,
    question: `Write the dissolution equation and the $K_{sp}$ expression for **silver chloride**, $\\text{AgCl}(s)$.`,
    solution: `**Dissolution:** $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^{+}(aq) + \\text{Cl}^{-}(aq)$.\n\nThe pure solid is omitted from the equilibrium expression:\n\n$$\\boxed{K_{sp} = [\\text{Ag}^{+}][\\text{Cl}^{-}]}.$$\n\nAt 25 °C, $K_{sp}(\\text{AgCl}) \\approx 1.8 \\times 10^{-10}$.`,
  },
  {
    order: 2,
    difficulty: 'EASY' as Difficulty,
    question: `Write the $K_{sp}$ expression for **calcium phosphate**, $\\text{Ca}_{3}(\\text{PO}_{4})_{2}(s)$.`,
    solution: `**Dissolution:** $\\text{Ca}_{3}(\\text{PO}_{4})_{2}(s) \\rightleftharpoons 3\\,\\text{Ca}^{2+}(aq) + 2\\,\\text{PO}_{4}^{3-}(aq)$.\n\n$$\\boxed{K_{sp} = [\\text{Ca}^{2+}]^{3}[\\text{PO}_{4}^{3-}]^{2}}.$$\n\nNote both the coefficients (3 cations, 2 anions per formula unit) and the corresponding exponents.`,
  },
  {
    order: 3,
    difficulty: 'EASY' as Difficulty,
    question: `For $\\text{BaSO}_{4}$, $K_{sp} = 1.1 \\times 10^{-10}$ at 25 °C. Calculate the molar solubility in pure water.`,
    solution: `$\\text{BaSO}_{4}(s) \\rightleftharpoons \\text{Ba}^{2+} + \\text{SO}_{4}^{2-}$.\n\nLet $s$ = molar solubility. Then $[\\text{Ba}^{2+}] = s$ and $[\\text{SO}_{4}^{2-}] = s$:\n\n$K_{sp} = s^{2} = 1.1 \\times 10^{-10}$ → $s = \\sqrt{1.1 \\times 10^{-10}} = \\boxed{1.05 \\times 10^{-5}\\,\\text{M}}$.`,
  },
  {
    order: 4,
    difficulty: 'MEDIUM' as Difficulty,
    question: `The $K_{sp}$ of $\\text{PbCl}_{2}$ is $1.7 \\times 10^{-5}$. Calculate its molar solubility in pure water.`,
    solution: `$\\text{PbCl}_{2}(s) \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{Cl}^{-}$.\n\nICE: $[\\text{Pb}^{2+}] = s$, $[\\text{Cl}^{-}] = 2s$.\n\n$K_{sp} = s(2s)^{2} = 4s^{3} = 1.7 \\times 10^{-5}$\n\n$s^{3} = 4.25 \\times 10^{-6}$ → $s = \\boxed{1.6 \\times 10^{-2}\\,\\text{M}}$.\n\nA notably more-soluble salt than the silver halides above — consistent with $K_{sp}$ being roughly $10^{5}$ times larger.`,
  },
  {
    order: 5,
    difficulty: 'MEDIUM' as Difficulty,
    question: `Explain the **common-ion effect**. Quantitatively, by what factor does the molar solubility of $\\text{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$) drop on going from pure water to 0.10 M NaCl?`,
    solution: `**Concept.** Adding an ion already in the dissolution equilibrium shifts the equilibrium back to solid (Le Châtelier), reducing solubility.\n\n**In pure water:** $s = \\sqrt{K_{sp}} = \\sqrt{1.8 \\times 10^{-10}} = 1.34 \\times 10^{-5}$ M.\n\n**In 0.10 M NaCl:** $[\\text{Cl}^{-}] \\approx 0.10$ M (the trace from AgCl is negligible). Then\n\n$[\\text{Ag}^{+}] = K_{sp}/[\\text{Cl}^{-}] = (1.8 \\times 10^{-10})/(0.10) = 1.8 \\times 10^{-9}$ M.\n\n$[\\text{Ag}^{+}]$ now equals the molar solubility, so $s' = 1.8 \\times 10^{-9}$ M.\n\n**Factor:** $s/s' = 1.34 \\times 10^{-5}/1.8 \\times 10^{-9} = \\boxed{\\sim 7400 \\times \\text{ less soluble}}$.`,
  },
  {
    order: 6,
    difficulty: 'MEDIUM' as Difficulty,
    question: `100 mL of $2.0 \\times 10^{-3}$ M $\\text{AgNO}_{3}$ is mixed with 100 mL of $2.0 \\times 10^{-3}$ M NaCl. $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$. Will a precipitate form?`,
    solution: `**Step 1.** After mixing, total volume = 200 mL, so each species is diluted by a factor of 2:\n\n$[\\text{Ag}^{+}] = 1.0 \\times 10^{-3}$ M, $[\\text{Cl}^{-}] = 1.0 \\times 10^{-3}$ M.\n\n**Step 2.** $Q = [\\text{Ag}^{+}][\\text{Cl}^{-}] = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3}) = 1.0 \\times 10^{-6}$.\n\n**Step 3.** $Q\\;(1.0 \\times 10^{-6}) \\gg K_{sp}\\;(1.8 \\times 10^{-10})$, so $\\boxed{\\text{yes, AgCl precipitates}}$ until $Q$ falls back to $K_{sp}$.`,
  },
  {
    order: 7,
    difficulty: 'MEDIUM' as Difficulty,
    question: `Why is $\\text{Mg(OH)}_{2}$ much more soluble in 0.10 M HCl than in pure water, but essentially **insoluble** in 0.10 M NaOH?`,
    solution: `Dissolution: $\\text{Mg(OH)}_{2}(s) \\rightleftharpoons \\text{Mg}^{2+} + 2\\,\\text{OH}^{-}$.\n\n**In 0.10 M HCl (acid):** $\\text{H}^{+}$ neutralizes $\\text{OH}^{-}$ ($\\text{H}^{+} + \\text{OH}^{-} \\to \\text{H}_{2}\\text{O}$), removing a product. Le Châtelier shifts dissolution **right**, dramatically increasing solubility.\n\n**In 0.10 M NaOH (base):** $\\text{OH}^{-}$ is a **common ion** at 0.10 M. The equilibrium shifts **left**, suppressing dissolution. Solubility crashes.\n\nQuantitatively, in 0.10 M NaOH, $[\\text{Mg}^{2+}] = K_{sp}(\\text{Mg(OH)}_{2})/[\\text{OH}^{-}]^{2} = (5.6 \\times 10^{-12})/(0.10)^{2} = 5.6 \\times 10^{-10}$ M (essentially nothing dissolves).`,
  },
  {
    order: 8,
    difficulty: 'HARD' as Difficulty,
    question: `A solution is 0.010 M in both $\\text{Cl}^{-}$ and $\\text{I}^{-}$. Solid $\\text{AgNO}_{3}$ is added slowly with stirring. ($K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$; $K_{sp}(\\text{AgI}) = 8.5 \\times 10^{-17}$.) (a) Which precipitates first? (b) When the second salt just begins to precipitate, what is $[\\text{I}^{-}]$? Has separation been effective?`,
    solution: `**(a)** AgI starts when $[\\text{Ag}^{+}] = K_{sp}/[\\text{I}^{-}] = (8.5 \\times 10^{-17})/(0.010) = 8.5 \\times 10^{-15}$ M.\n\nAgCl starts when $[\\text{Ag}^{+}] = (1.8 \\times 10^{-10})/(0.010) = 1.8 \\times 10^{-8}$ M.\n\nAgI requires far less $[\\text{Ag}^{+}]$, so $\\boxed{\\text{AgI precipitates first}}$.\n\n**(b)** When AgCl just begins to precipitate, $[\\text{Ag}^{+}] = 1.8 \\times 10^{-8}$ M. At that point\n\n$[\\text{I}^{-}] = K_{sp}(\\text{AgI})/[\\text{Ag}^{+}] = (8.5 \\times 10^{-17})/(1.8 \\times 10^{-8}) = \\boxed{4.7 \\times 10^{-9}\\,\\text{M}}$.\n\nFraction remaining: $4.7 \\times 10^{-9}/0.010 = 4.7 \\times 10^{-7}$, i.e. **>99.99995% of the iodide has been removed** before any chloride precipitates. Excellent separation.`,
  },
  {
    order: 9,
    difficulty: 'HARD' as Difficulty,
    question: `Calculate the molar solubility of $\\text{Ag}_{2}\\text{CrO}_{4}$ ($K_{sp} = 1.1 \\times 10^{-12}$) in (a) pure water, and (b) 0.010 M $\\text{K}_{2}\\text{CrO}_{4}$.`,
    solution: `Dissolution: $\\text{Ag}_{2}\\text{CrO}_{4}(s) \\rightleftharpoons 2\\,\\text{Ag}^{+} + \\text{CrO}_{4}^{2-}$.\n\n**(a) Pure water.** Let $s$ = molar solubility. Then $[\\text{Ag}^{+}] = 2s$, $[\\text{CrO}_{4}^{2-}] = s$.\n\n$K_{sp} = (2s)^{2}(s) = 4s^{3} = 1.1 \\times 10^{-12}$ → $s^{3} = 2.75 \\times 10^{-13}$ → $\\boxed{s = 6.5 \\times 10^{-5}\\,\\text{M}}$.\n\n**(b) 0.010 M $\\text{K}_{2}\\text{CrO}_{4}$ (common ion = $\\text{CrO}_{4}^{2-}$).** Now $[\\text{CrO}_{4}^{2-}] \\approx 0.010$ M (the trace from $\\text{Ag}_{2}\\text{CrO}_{4}$ is negligible). Let $s' = $ new molar solubility, so $[\\text{Ag}^{+}] = 2s'$.\n\n$K_{sp} = (2s')^{2}(0.010) = 4s'^{2}(0.010) = 1.1 \\times 10^{-12}$\n\n$s'^{2} = 2.75 \\times 10^{-11}$ → $\\boxed{s' = 5.2 \\times 10^{-6}\\,\\text{M}}$.\n\nThe common ion drops solubility by ~12×.`,
    isPremium: true,
  },
  {
    order: 10,
    difficulty: 'HARD' as Difficulty,
    question: `$\\text{CaF}_{2}$ has $K_{sp} = 3.9 \\times 10^{-11}$. (a) Calculate its molar solubility in pure water. (b) Qualitatively explain why $\\text{CaF}_{2}$ is more soluble in 0.10 M HCl than in pure water, but $\\text{CaCl}_{2}$ does not show such a pH dependence.`,
    solution: `**(a)** $\\text{CaF}_{2}(s) \\rightleftharpoons \\text{Ca}^{2+} + 2\\,\\text{F}^{-}$. Let $s$ = molar solubility. Then $[\\text{Ca}^{2+}] = s$, $[\\text{F}^{-}] = 2s$.\n\n$K_{sp} = s(2s)^{2} = 4s^{3} = 3.9 \\times 10^{-11}$ → $s^{3} = 9.75 \\times 10^{-12}$ → $\\boxed{s = 2.1 \\times 10^{-4}\\,\\text{M}}$.\n\n**(b)** $\\text{F}^{-}$ is the **conjugate base of the weak acid HF** (pKa ≈ 3.2). In 0.10 M HCl, the high $[\\text{H}^{+}]$ converts much of the dissolved $\\text{F}^{-}$ to undissociated HF, removing $\\text{F}^{-}$ from the equilibrium. By Le Châtelier, dissolution shifts right and solubility increases substantially.\n\nFor $\\text{CaCl}_{2}$, the anion is $\\text{Cl}^{-}$, the conjugate base of the **strong acid HCl** — it has essentially no tendency to combine with $\\text{H}^{+}$. So acid does not consume $\\text{Cl}^{-}$ and the dissolution equilibrium is unaffected by pH. ($\\text{CaCl}_{2}$ is also extremely soluble in water for this kind of analysis to apply, but the key point is the lack of pH coupling.)`,
    isPremium: true,
  },
]

const SOLUBILITY_CARDS: CardSeed[] = [
  // Part 1
  { lessonPart: 1, front: 'When does $K_{sp}$ apply?', back: 'To slightly soluble (sparingly soluble) ionic compounds at equilibrium between solid and dissolved ions.' },
  { lessonPart: 1, front: 'General $K_{sp}$ for $A_p B_q(s) \\rightleftharpoons p\\,A^{m+} + q\\,B^{n-}$', back: '$K_{sp} = [A^{m+}]^{p}[B^{n-}]^{q}$. Solid omitted; ion concentrations raised to stoichiometric powers.' },
  { lessonPart: 1, front: '$K_{sp}$ for $\\text{PbCl}_{2}$', back: '$\\text{PbCl}_{2} \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{Cl}^{-}$ → $K_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^{-}]^{2}$.' },
  // Part 2
  { lessonPart: 2, front: 'Definition of molar solubility', back: 'Moles of compound that dissolve per liter of solution at saturation. Symbol $s$.' },
  { lessonPart: 2, front: '$K_{sp}$–$s$ relation for $AB$ salt (e.g., AgCl)', back: '$K_{sp} = s^{2}$, so $s = \\sqrt{K_{sp}}$.' },
  { lessonPart: 2, front: '$K_{sp}$–$s$ relation for $AB_{2}$ salt (e.g., $\\text{PbCl}_{2}$)', back: '$K_{sp} = s\\,(2s)^{2} = 4s^{3}$, so $s = \\sqrt[3]{K_{sp}/4}$.' },
  { lessonPart: 2, front: '$K_{sp}$–$s$ relation for $A_{3}B_{2}$ salt (e.g., $\\text{Ca}_{3}(\\text{PO}_{4})_{2}$)', back: '$K_{sp} = (3s)^{3}(2s)^{2} = 108\\,s^{5}$.' },
  { lessonPart: 2, front: 'Can you compare $K_{sp}$ values directly to rank solubilities?', back: 'Only when stoichiometries match. Otherwise compute $s$ from each $K_{sp}$ first.' },
  // Part 3
  { lessonPart: 3, front: 'Common-ion effect — which way does solubility move?', back: 'Solubility decreases. Adding a common ion shifts the dissolution equilibrium to the left (Le Châtelier).' },
  { lessonPart: 3, front: 'Solubility of AgCl in 0.10 M NaCl vs. pure water', back: 'In NaCl: $[\\text{Ag}^{+}] = K_{sp}/[\\text{Cl}^{-}] = 1.8 \\times 10^{-9}$ M, ~7400× less than in pure water.' },
  { lessonPart: 3, front: 'Why does the common-ion effect work conceptually?', back: 'The ion already in solution makes the right side of the dissolution equation "crowded," so equilibrium shifts back to the solid.' },
  // Part 4
  { lessonPart: 4, front: 'When does a precipitate form?', back: 'When $Q > K_{sp}$ (supersaturated). Precipitation continues until $Q$ falls back to $K_{sp}$.' },
  { lessonPart: 4, front: '$Q = K_{sp}$ means…', back: 'The solution is saturated and at equilibrium. No net change.' },
  { lessonPart: 4, front: '$Q < K_{sp}$ means…', back: 'The solution is unsaturated — more solid can dissolve. No precipitate forms.' },
  { lessonPart: 4, front: 'Critical step when mixing two solutions to compute $Q$', back: 'Account for **dilution** — divide each starting concentration by the appropriate volume factor before computing $Q$.' },
  // Part 5
  { lessonPart: 5, front: 'Selective precipitation principle', back: 'For salts with the same stoichiometry, the one with the **smaller $K_{sp}$** precipitates first as a common reagent is added.' },
  { lessonPart: 5, front: 'AgCl vs. AgI — which precipitates first when $\\text{Ag}^{+}$ is added to a Cl⁻/I⁻ mix?', back: 'AgI ($K_{sp} = 8.5 \\times 10^{-17}$) — far smaller than AgCl ($K_{sp} = 1.8 \\times 10^{-10}$).' },
  { lessonPart: 5, front: 'How "complete" can selective precipitation be?', back: 'Often >99.999% removal of the first ion before the second begins to precipitate, when the $K_{sp}$ values differ by many orders of magnitude.' },
  // Part 6 — pH effects + workshop
  { lessonPart: 6, front: 'Effect of low pH on $\\text{CaF}_{2}$ solubility', back: 'Solubility **increases**: $\\text{H}^{+}$ converts $\\text{F}^{-}$ to weak-acid HF, removing it and shifting dissolution right.' },
  { lessonPart: 6, front: 'Effect of low pH on AgCl solubility', back: 'Essentially **no effect** — $\\text{Cl}^{-}$ is the conjugate base of strong acid HCl and does not react with $\\text{H}^{+}$.' },
  { lessonPart: 6, front: 'Why is $\\text{Mg(OH)}_{2}$ less soluble in NaOH?', back: 'OH⁻ is a common ion. By Le Châtelier, dissolution shifts left → less $\\text{Mg(OH)}_{2}$ dissolves.' },
  { lessonPart: 6, front: 'For $\\text{Mg(OH)}_{2}$, the $K_{sp}$ vs. $s$ relation is…', back: '$\\text{Mg(OH)}_{2} \\to \\text{Mg}^{2+} + 2\\,\\text{OH}^{-}$ → $K_{sp} = s(2s)^{2} = 4s^{3}$.' },
  // Part 7 — synthesis
  { lessonPart: 7, front: 'Three things $K_{sp}$ lets you predict', back: '(1) molar solubility, (2) whether a precipitate forms ($Q$ vs $K_{sp}$), (3) how solubility changes with common ions or pH.' },
  { lessonPart: 7, front: 'AP exam-favorite trap', back: 'Forgetting the **dilution** when mixing two solutions, or forgetting the stoichiometric power on the ion concentration in $K_{sp}$.' },
]

// ─────────────────────────────────────────────────────────────────────────────
// Driver
// ─────────────────────────────────────────────────────────────────────────────

async function upgradeTopic(
  slug: string,
  title: string,
  textContent: string,
  problems: ProblemSeed[],
  cards: CardSeed[],
) {
  const topic = await prisma.topic.findUnique({ where: { slug } })
  if (!topic) {
    console.log(`❌ Topic not found: ${slug}`)
    return
  }

  // 1) Update title + textContent
  await prisma.topic.update({
    where: { id: topic.id },
    data: { title, textContent },
  })
  console.log(`✅ ${slug}: textContent updated (${textContent.length} chars)`)

  // 2) Wipe & recreate example problems (no user-progress relation on ExampleProblem)
  const deletedProblems = await prisma.exampleProblem.deleteMany({ where: { topicId: topic.id } })
  await prisma.exampleProblem.createMany({
    data: problems.map((p) => ({
      topicId: topic.id,
      order: p.order,
      difficulty: p.difficulty,
      question: p.question,
      solution: p.solution,
      isPremium: p.isPremium ?? false,
    })),
  })
  console.log(`✅ ${slug}: ExampleProblems wiped (${deletedProblems.count}) and recreated (${problems.length})`)

  // 3) Wipe & recreate flashcards. NOTE: this cascades FlashcardProgress for
  //    these specific topics; acceptable per the "rebuild" intent on these
  //    two specific underserved topics.
  const deletedCards = await prisma.flashcard.deleteMany({ where: { topicId: topic.id } })
  await prisma.flashcard.createMany({
    data: cards.map((c) => ({
      topicId: topic.id,
      front: c.front,
      back: c.back,
      hint: c.hint,
      lessonPart: c.lessonPart,
      isPremium: c.isPremium ?? false,
    })),
  })
  console.log(`✅ ${slug}: Flashcards wiped (${deletedCards.count}) and recreated (${cards.length})`)
}

async function main() {
  console.log('🚀 Upgrading atomic-spectra and solubility-equilibrium to gold-standard…\n')

  await upgradeTopic(
    'atomic-spectra',
    ATOMIC_SPECTRA_TITLE,
    ATOMIC_SPECTRA_TEXT,
    ATOMIC_SPECTRA_PROBLEMS,
    ATOMIC_SPECTRA_CARDS,
  )

  console.log('')

  await upgradeTopic(
    'solubility-equilibrium',
    SOLUBILITY_TITLE,
    SOLUBILITY_TEXT,
    SOLUBILITY_PROBLEMS,
    SOLUBILITY_CARDS,
  )

  console.log('\n🎉 Done.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
