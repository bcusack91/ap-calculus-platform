export const physics2ModernPart3Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp3-intro',
      type: 'text' as const,
      content: `
# ⚛️ Atomic Models & Energy Levels

**Part 3 of 7 — The Bohr Model**

How do atoms emit and absorb light? The **Bohr model** of hydrogen explains discrete spectral lines by quantizing electron orbits into specific energy levels.
      `
    },
    {
      id: 'mp3-bohr-model',
      type: 'text' as const,
      content: `
## The Bohr Model of Hydrogen

Niels Bohr (1913) proposed that:

1. Electrons orbit the nucleus only in **specific allowed orbits** (energy levels)
2. Each orbit has a **quantized energy** — electrons cannot have energies between levels
3. Electrons can **jump** between levels by absorbing or emitting a photon

### Energy Levels of Hydrogen

$$E_n = -\\frac{13.6}{n^2} \\text{ eV}$$

where $n = 1, 2, 3, \\ldots$ is the **principal quantum number**.

| Level | $n$ | Energy (eV) |
|-------|-----|-------------|
| Ground state | 1 | $-13.6$ |
| 1st excited | 2 | $-3.40$ |
| 2nd excited | 3 | $-1.51$ |
| 3rd excited | 4 | $-0.850$ |
| 4th excited | 5 | $-0.544$ |
| Ionized | $\\infty$ | $0$ |

### Key Features

- **Negative energies** mean the electron is **bound** to the atom
- The **ground state** ($n = 1$) is the lowest energy: $-13.6$ eV
- **Ionization energy** = energy needed to remove the electron from ground state = 13.6 eV
- As $n \\to \\infty$, levels get closer together and approach 0 eV
      `
    },
    {
      id: 'mp3-transitions',
      type: 'text' as const,
      content: `
## Photon Emission and Absorption

### Emission
When an electron **drops** from a higher level $n_i$ to a lower level $n_f$:

$$\\Delta E = E_{n_i} - E_{n_f} = hf_{\\text{photon}}$$

The atom emits a photon with energy equal to the energy difference between levels.

### Absorption
When a photon with **exactly** the right energy hits the atom, the electron **jumps up**:

$$E_{\\text{photon}} = E_{n_f} - E_{n_i} = hf$$

The photon must have **exactly** the energy of a transition — partial absorption doesn't happen.

### Calculating Photon Wavelength

For a transition between levels $n_i$ and $n_f$:

$$\\Delta E = 13.6 \\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right) \\text{ eV}$$

$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{\\Delta E \\text{ (eV)}}$$
      `
    },
    {
      id: 'mp3-spectra',
      type: 'text' as const,
      content: `
## Spectral Lines vs. Continuous Spectra

### Line Spectra (Discrete)
- **Emission spectrum**: Bright colored lines on a dark background
  - Hot, low-density gas emits only specific wavelengths
  - Each element has a unique "fingerprint" of spectral lines
- **Absorption spectrum**: Dark lines on a continuous rainbow background
  - Cool gas absorbs specific wavelengths from white light passing through

### Continuous Spectrum
- Hot, dense objects (solids, liquids, dense gases) emit all wavelengths
- Produces a smooth rainbow with no gaps

### Why Line Spectra?
Because energy levels are **quantized**, only specific energy differences exist → only specific photon energies (and wavelengths) are emitted or absorbed.

Each element has different energy levels → different spectral lines → spectral "fingerprints" allow identification of elements in stars!
      `
    },
    {
      id: 'mp3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Atomic Model Concept Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'The energy of the $n = 3$ level in hydrogen is:',
            options: [
              '$-13.6$ eV',
              '$-4.53$ eV',
              '$-1.51$ eV',
              '$-0.544$ eV'
            ],
            correctAnswer: 2,
            explanation: '$E_3 = -13.6/3^2 = -13.6/9 = -1.51$ eV.'
          },
          {
            question: 'A hydrogen atom in the $n = 4$ state drops to $n = 2$. The emitted photon has energy:',
            options: [
              '0.85 eV',
              '2.55 eV',
              '10.2 eV',
              '3.40 eV'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta E = E_4 - E_2 = (-0.85) - (-3.40) = 2.55$ eV. (Or: $\\Delta E = 13.6(1/4 - 1/16) = 13.6(3/16) = 2.55$ eV.)'
          },
          {
            question: 'A photon with energy 10.0 eV hits a hydrogen atom in the ground state. What happens?',
            options: [
              'The electron jumps to n = 2 (needs 10.2 eV)',
              'The electron jumps to n = 3 (needs 12.1 eV)',
              'The photon is absorbed partially',
              'Nothing — 10.0 eV does not match any transition from n = 1'
            ],
            correctAnswer: 3,
            explanation: 'From $n = 1$: to $n = 2$ requires 10.2 eV, to $n = 3$ requires 12.1 eV. Since 10.0 eV matches no transition exactly, the photon passes through without being absorbed.'
          }
        ]
      }
    },
    {
      id: 'mp3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Energy Level Calculation Drill**

Use $E_n = -13.6/n^2$ eV and $\\lambda = 1240/\\Delta E$ (nm).

A hydrogen atom transitions from the $n = 5$ level to the $n = 2$ level.

1) Energy of $n = 5$ level (in eV, 3 significant figures)

2) Energy of $n = 2$ level (in eV, 3 significant figures)

3) Energy of emitted photon (in eV, 3 significant figures)

4) Wavelength of emitted photon (in nm, round to nearest whole number)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['-0.544', '-3.40', '2.86', '434'],
        hint1: '$E_5 = -13.6/25 = -0.544$ eV.',
        hint2: '$E_2 = -13.6/4 = -3.40$ eV. $\\Delta E = E_5 - E_2$.',
        hint3: '$\\lambda = 1240/\\Delta E$.',
        explanation: '$E_5 = -0.544$ eV, $E_2 = -3.40$ eV. $\\Delta E = -0.544 - (-3.40) = 2.856 \\approx 2.86$ eV. $\\lambda = 1240/2.86 = 433.6 \\approx 434$ nm (blue-violet light — part of the Balmer series).'
      }
    },
    {
      id: 'mp3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Bohr Model**
      `,
      exercise: {
        questions: [
          {
            question: 'The ionization energy of hydrogen from the ground state is:',
            options: [
              '1.51 eV',
              '3.40 eV',
              '10.2 eV',
              '13.6 eV'
            ],
            correctAnswer: 3,
            explanation: 'Ionization means removing the electron completely ($n = \\infty$, $E = 0$). From the ground state ($E_1 = -13.6$ eV), the energy needed is $0 - (-13.6) = 13.6$ eV.'
          },
          {
            question: 'An atom in the $n = 3$ state can emit photons of how many different wavelengths?',
            options: [
              '1',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 2,
            explanation: 'From $n = 3$: transitions to $n = 2$ (one wavelength), to $n = 1$ (another wavelength). The atom in $n = 2$ can then transition to $n = 1$ (a third wavelength). Total: 3 possible wavelengths ($3 \\to 2$, $3 \\to 1$, $2 \\to 1$).'
          }
        ]
      }
    }
  ]
}
