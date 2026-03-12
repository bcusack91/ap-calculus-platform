export const mcatAtomicStructurePart3Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as3-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 3 of 5 — Emission Spectra, Photoelectron Spectroscopy & the Bohr Model**

These topics appear frequently in MCAT passages because they connect quantum mechanics to experimental data. You won't need to derive the equations — but you must interpret graphs and predict relative values.

## The Bohr Model (Hydrogen-Like Atoms)

Bohr proposed that electrons orbit the nucleus only at specific, quantized energy levels.

### Energy of Level $n$ in Hydrogen:

$$E_n = -\\frac{13.6\\text{ eV}}{n^2} = -\\frac{2.18 \\times 10^{-18}\\text{ J}}{n^2}$$

Negative sign: electron is bound to the nucleus (energy $= 0$ at $n = \\infty$, ionized).

**Ground state:** $n=1$, most negative energy, most stable.

**Excited state:** $n > 1$; higher energy (less negative).

### Energy of a Photon Emitted During a Transition:

$$\\Delta E = E_{\\text{final}} - E_{\\text{initial}} = -13.6\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)\\text{ eV}$$

For a **downward** transition ($n_i > n_f$): $\\Delta E < 0$, photon is **emitted**.  
For an **upward** transition ($n_f > n_i$): $\\Delta E > 0$, photon is **absorbed**.

$$E_{\\text{photon}} = h\\nu = \\frac{hc}{\\lambda}$$

where $h = 6.626 \\times 10^{-34}$ J·s, $c = 3.0 \\times 10^8$ m/s.

### Spectral Series in Hydrogen

| Series | Final level $n_f$ | Region |
|--------|-------------------|--------|
| Lyman | 1 | Ultraviolet |
| Balmer | 2 | Visible (some UV) |
| Paschen | 3 | Infrared |

**MCAT rule:** The largest energy photon in a series is the transition from $n = \\infty$ (ionization) to $n_f$. The smallest energy photon is the adjacent transition ($n = n_f + 1$ to $n = n_f$).

## Photoelectron Spectroscopy (PES)

PES bombards a sample with high-energy photons (UV or X-ray). Electrons are ejected, and their **kinetic energy** is measured.

$$KE = h\\nu - BE$$

where $BE$ = binding energy (energy needed to remove the electron from that subshell).

### Interpreting a PES Spectrum

- X-axis: **Binding energy** (increases left to right, or right to left depending on convention — read the axis label!)
- Y-axis: **Relative number of electrons** (peak area/height)
- Each peak corresponds to one **subshell**
- **Core electrons** (inner subshells) have higher binding energy than valence electrons
- **Peak relative height** ∝ number of electrons in that subshell

**Example — Sodium (Na, $[\\text{Ne}]\\, 3s^1$):**
- Peaks at high BE: $1s$ (2 electrons), $2s$ (2 electrons), $2p$ (6 electrons)
- Peak at low BE: $3s$ (1 electron)
- The $3s$ peak is half the height of $2s$ or $1s$ (only 1 electron vs. 2)
- The $2p$ peak is 3× the height of $2s$ (6 electrons vs. 2)
`
    },
    {
      id: 'as3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Emission Spectra & Bohr Model** 🎯`,
      exercise: {
        questions: [
          {
            question: `A hydrogen electron falls from $n=4$ to $n=2$. The emitted photon belongs to which series, and is in which region of the spectrum?`,
            options: [
              `Lyman series; ultraviolet`,
              `Balmer series; visible`,
              `Paschen series; infrared`,
              `Brackett series; infrared`
            ],
            correctAnswer: 1,
            explanation: `Transitions ending at $n_f = 2$ are the **Balmer series**, which falls in the visible (and near-UV) region. The $n=4 \\to n=2$ transition produces a blue-green visible photon.`
          },
          {
            question: `Which transition in hydrogen produces the **highest energy** photon?`,
            options: [
              `$n=2 \\to n=1$`,
              `$n=3 \\to n=1$`,
              `$n=4 \\to n=2$`,
              `$n=5 \\to n=4$`
            ],
            correctAnswer: 1,
            explanation: `Energy emitted $\\propto |\\Delta E| = 13.6\\left|\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right|$. The $n=3\\to 1$ transition: $|1/1 - 1/9| = |8/9|$. The $n=2\\to 1$: $|1/1 - 1/4| = |3/4|$. Since $8/9 > 3/4$, the $3\\to 1$ transition has higher energy. (The ionization limit $n=\\infty \\to 1$ would be highest, but that's not listed.)` 
          },
          {
            question: `In PES, the peak at the **highest binding energy** corresponds to which electrons?`,
            options: [
              `Valence electrons (outermost shell)`,
              `Core electrons (innermost shell, $1s$)`,
              `The most recently filled subshell`,
              `Electrons with the highest kinetic energy after ejection`
            ],
            correctAnswer: 1,
            explanation: `Core electrons ($1s$) are closest to the nucleus and most tightly bound — they require the most energy to remove. They appear at the **highest binding energy** on a PES spectrum.`
          },
          {
            question: `A PES spectrum shows 4 peaks. Going from lowest to highest binding energy, the relative peak heights are: 1, 2, 6, 2. What element is this? (Hint: count total electrons.)`,
            options: [
              `Sodium (Na, $Z=11$)`,
              `Magnesium (Mg, $Z=12$)`,
              `Neon (Ne, $Z=10$)`,
              `Fluorine (F, $Z=9$)`
            ],
            correctAnswer: 0,
            explanation: `Total electrons = $1 + 2 + 6 + 2 = 11$. With 4 subshells from lowest to highest BE: $3s$ (1 e⁻), $2p$ (6 e⁻), $2s$ (2 e⁻), $1s$ (2 e⁻). That's $[\\text{Ne}]\\, 3s^1$ = **Sodium ($Z=11$)**.`
          }
        ]
      }
    },
    {
      id: 'as3-de-broglie',
      type: 'text' as const,
      content: `## Wave-Particle Duality & de Broglie Wavelength

Louis de Broglie proposed that matter has wave-like properties. For a particle with momentum $p = mv$:

$$\\lambda = \\frac{h}{mv}$$

**MCAT implication:** Electrons (small mass) have observable wavelengths. Macroscopic objects have negligible wavelengths.

**Higher velocity → shorter wavelength** (more momentum → smaller de Broglie wave).

## Heisenberg Uncertainty Principle

$$\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}$$

You cannot simultaneously know both position and momentum exactly. This is why quantum mechanics uses **probability orbitals** (regions where electrons are likely to be) rather than fixed orbits.

### Worked Example: Photon Energy

Calculate the energy and wavelength of a photon emitted during the $n=3 \\to n=1$ transition in hydrogen.

$$\\Delta E = 13.6\\left(\\frac{1}{1^2} - \\frac{1}{3^2}\\right) = 13.6 \\times \\frac{8}{9} = 12.09\\text{ eV}$$

Convert to joules: $12.09 \\times 1.602 \\times 10^{-19} = 1.94 \\times 10^{-18}$ J

$$\\lambda = \\frac{hc}{E} = \\frac{(6.626 \\times 10^{-34})(3.0 \\times 10^8)}{1.94 \\times 10^{-18}} = 1.02 \\times 10^{-7}\\text{ m} = 102\\text{ nm}$$

This is ultraviolet (Lyman series, $n_f = 1$).
`
    },
    {
      id: 'as3-quiz2',
      type: 'multiple-choice' as const,
      content: `**PES Interpretation & Wave-Particle Duality** 🎯`,
      exercise: {
        questions: [
          {
            question: `A PES spectrum shows three peaks. The peak with the **lowest binding energy** has the smallest area. Which subshell does it most likely represent?`,
            options: [
              `$1s$ — core orbital, high BE`,
              `$2p$ — 6 electrons, large peak`,
              `The valence subshell (outermost, partially or singly filled)`,
              `An $f$ orbital (large number of electrons)`
            ],
            correctAnswer: 2,
            explanation: `The lowest-binding-energy peak corresponds to the **outermost valence electrons** (easiest to remove). A small peak area means fewer electrons in that subshell, consistent with a partially filled valence subshell (e.g., $3s^1$ in Na).`
          },
          {
            question: `According to de Broglie's equation $\\lambda = h/mv$, which particle has the **longest** wavelength?`,
            options: [
              `A proton moving at $1 \\times 10^6$ m/s`,
              `An electron moving at $1 \\times 10^6$ m/s`,
              `A baseball moving at $40$ m/s`,
              `A proton moving at $1 \\times 10^7$ m/s`
            ],
            correctAnswer: 1,
            explanation: `$\\lambda = h/mv$. Smaller momentum $= $ longer wavelength. The electron has the smallest mass ($9.1 \\times 10^{-31}$ kg vs. proton's $1.67 \\times 10^{-27}$ kg), so at the same velocity it has ~1800× less momentum → longest wavelength.`
          },
          {
            question: `Hydrogen emits a photon of wavelength 656 nm (red, Balmer series). This corresponds to which transition?`,
            options: [
              `$n=2 \\to n=1$`,
              `$n=3 \\to n=2$`,
              `$n=4 \\to n=2$`,
              `$n=4 \\to n=3$`
            ],
            correctAnswer: 1,
            explanation: `The 656 nm (red) line is the H-alpha line, the lowest-energy Balmer transition: $n=3 \\to n=2$. The Balmer series ($n_f = 2$) produces visible-light photons, with 656 nm being the lowest-energy (longest wavelength) visible Balmer line.`
          }
        ]
      }
    },
    {
      id: 'as3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Bohr model:** $E_n = -13.6/n^2$ eV for H. Downward transitions emit photons; upward absorb.
- **Spectral series:** Lyman (UV, $n_f=1$), Balmer (visible, $n_f=2$), Paschen (IR, $n_f=3$).
- **PES peaks:** lowest BE = valence electrons (outermost); highest BE = core electrons ($1s$).
- **Peak area** ∝ number of electrons in that subshell. Use it to identify elements.
- **de Broglie:** $\\lambda = h/(mv)$; electrons have measurable wavelengths; macroscopic objects do not.
- **Heisenberg:** Position and momentum cannot both be known exactly — basis for orbital (probability cloud) model.
`
    }
  ]
};
