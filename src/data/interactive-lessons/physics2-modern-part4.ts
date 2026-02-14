export const physics2ModernPart4Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp4-intro',
      type: 'text' as const,
      content: `
# 🌈 Atomic Transitions & Spectral Series

**Part 4 of 7 — Reading the Light**

Every element produces a unique set of spectral lines. By understanding **energy level diagrams** and the **spectral series** of hydrogen, you can predict and calculate the wavelengths of emitted or absorbed light.
      `
    },
    {
      id: 'mp4-energy-diagrams',
      type: 'text' as const,
      content: `
## Energy Level Diagrams

An energy level diagram shows allowed electron energies as horizontal lines, with transitions as arrows:

### Emission (arrow pointing DOWN)
- Electron drops to a lower level
- Photon is **emitted** with energy $\\Delta E = E_{\\text{upper}} - E_{\\text{lower}}$
- Longer arrow → higher energy photon → shorter wavelength

### Absorption (arrow pointing UP)
- Electron jumps to a higher level
- Photon is **absorbed** with energy exactly matching $\\Delta E$
- The incoming photon **disappears** — its energy goes into the electron

### Reading the Diagram

$$E_{\\infty} = 0 \\text{ eV (ionized)} \\quad \\cdots$$
$$E_4 = -0.85 \\text{ eV} \\quad \\rule{3cm}{0.5pt}$$
$$E_3 = -1.51 \\text{ eV} \\quad \\rule{3cm}{0.5pt}$$
$$E_2 = -3.40 \\text{ eV} \\quad \\rule{3cm}{0.5pt}$$
$$E_1 = -13.6 \\text{ eV} \\quad \\rule{3cm}{0.5pt}$$

A transition from $n = 3 \\to n = 1$ releases $\\Delta E = 13.6 - 1.51 = 12.09$ eV — an ultraviolet photon.
      `
    },
    {
      id: 'mp4-spectral-series',
      type: 'text' as const,
      content: `
## Hydrogen Spectral Series

Transitions are grouped by their **final (lower) level**:

### Lyman Series (to $n = 1$) — Ultraviolet
All transitions ending at the ground state:
- $2 \\to 1$: $\\Delta E = 10.2$ eV, $\\lambda = 122$ nm
- $3 \\to 1$: $\\Delta E = 12.1$ eV, $\\lambda = 103$ nm
- $4 \\to 1$: $\\Delta E = 12.75$ eV, $\\lambda = 97.3$ nm

### Balmer Series (to $n = 2$) — Visible Light!
The only series in the visible range:
- $3 \\to 2$: $\\Delta E = 1.89$ eV, $\\lambda = 656$ nm (red, H-alpha)
- $4 \\to 2$: $\\Delta E = 2.55$ eV, $\\lambda = 486$ nm (blue-green)
- $5 \\to 2$: $\\Delta E = 2.86$ eV, $\\lambda = 434$ nm (violet)
- $6 \\to 2$: $\\Delta E = 3.02$ eV, $\\lambda = 410$ nm (violet)

### Paschen Series (to $n = 3$) — Infrared
- $4 \\to 3$: $\\Delta E = 0.66$ eV, $\\lambda = 1875$ nm
- $5 \\to 3$: $\\Delta E = 0.97$ eV, $\\lambda = 1282$ nm

### AP Exam Tip
The Balmer series is the most commonly tested because it falls in the visible spectrum. Remember: **Balmer → n = 2 → Visible**.
      `
    },
    {
      id: 'mp4-emission-absorption-quiz',
      type: 'multiple-choice' as const,
      content: `
**Emission vs. Absorption Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An emission spectrum appears as:',
            options: [
              'Dark lines on a continuous bright background',
              'Bright colored lines on a dark background',
              'A smooth continuous rainbow',
              'A single color of light'
            ],
            correctAnswer: 1,
            explanation: 'An emission spectrum shows discrete bright lines on a dark background. Each line corresponds to a specific electron transition in the excited gas.'
          },
          {
            question: 'The longest wavelength photon in the Lyman series is produced by which transition?',
            options: [
              '$n = \\infty \\to n = 1$',
              '$n = 2 \\to n = 1$',
              '$n = 3 \\to n = 1$',
              '$n = 1 \\to n = 2$'
            ],
            correctAnswer: 1,
            explanation: 'Longest wavelength = smallest energy difference. The smallest gap in the Lyman series is $n = 2 \\to n = 1$ ($\\Delta E = 10.2$ eV). Higher starting levels give larger $\\Delta E$ and shorter $\\lambda$.'
          },
          {
            question: 'An absorption spectrum and an emission spectrum of the same gas have:',
            options: [
              'Completely different line positions',
              'Lines at the same wavelengths',
              'Absorption lines that are always in the UV',
              'No relationship to each other'
            ],
            correctAnswer: 1,
            explanation: 'The dark absorption lines appear at exactly the same wavelengths as the bright emission lines, because both correspond to the same set of energy level transitions.'
          }
        ]
      }
    },
    {
      id: 'mp4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Spectral Line Calculation Drill**

Use $E_n = -13.6/n^2$ eV and $\\lambda = 1240/\\Delta E$ (nm).

1) Energy of the photon emitted in the $n = 3 \\to n = 2$ transition (in eV, 2 decimal places)
2) Wavelength of that photon (in nm, round to nearest whole number)
3) Energy of the photon emitted in the $n = 4 \\to n = 1$ transition (in eV, 2 decimal places)
4) Wavelength of that photon (in nm, 1 decimal place)
5) Is the $4 \\to 1$ photon UV, visible, or IR? (type: UV)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['1.89', '656', '12.75', '97.3', 'UV', '1.890', '12.750', '97.30'],
        hint1: '$E_3 = -1.51$ eV, $E_2 = -3.40$ eV. $\\Delta E = -1.51 - (-3.40)$.',
        hint2: '$\\lambda = 1240/1.89$. For $4 \\to 1$: $E_4 = -0.85$ eV, $E_1 = -13.6$ eV.',
        hint3: '$\\Delta E = -0.85 - (-13.6) = 12.75$ eV. $\\lambda = 1240/12.75$. Visible range: 380–700 nm.',
        explanation: '$3 \\to 2$: $\\Delta E = -1.51 - (-3.40) = 1.89$ eV. $\\lambda = 1240/1.89 = 656$ nm (red, visible — the famous H-alpha line). $4 \\to 1$: $\\Delta E = -0.85 - (-13.6) = 12.75$ eV. $\\lambda = 1240/12.75 = 97.3$ nm (UV — Lyman series).'
      }
    },
    {
      id: 'mp4-advanced-drill',
      type: 'input-boxes' as const,
      content: `
**Advanced Transition Drill**

A hydrogen atom in the $n = 4$ state can transition to several lower levels.

1) How many distinct spectral lines can be emitted by a collection of hydrogen atoms all starting in $n = 4$? (Use $N(N-1)/2$ for $N$ levels.)
2) Which transition produces the shortest wavelength photon? (Write as: 4to1)
3) Wavelength of the $4 \\to 3$ transition (in nm, round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '4to1', '1876'],
        hint1: 'Atoms in $n = 4$ can cascade through $n = 3, 2, 1$. With 4 levels, the number of distinct transitions is $4(4-1)/2$.',
        hint2: 'Shortest wavelength = highest energy photon = largest $\\Delta E$, which is the transition spanning the most levels.',
        hint3: '$\\Delta E_{4 \\to 3} = -0.85 - (-1.51) = 0.66$ eV. $\\lambda = 1240/0.66$.',
        explanation: '6 distinct lines ($4 \\to 3$, $4 \\to 2$, $4 \\to 1$, $3 \\to 2$, $3 \\to 1$, $2 \\to 1$). Shortest $\\lambda$: $4 \\to 1$ ($\\Delta E = 12.75$ eV → 97.2 nm). $4 \\to 3$: $\\Delta E = 0.66$ eV, $\\lambda = 1240/0.6611 = 1876$ nm (infrared).'
      }
    },
    {
      id: 'mp4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Atomic Transitions**
      `,
      exercise: {
        questions: [
          {
            question: 'The Balmer series (transitions to $n = 2$) produces light in which region of the electromagnetic spectrum?',
            options: [
              'Ultraviolet',
              'Visible',
              'Infrared',
              'X-ray'
            ],
            correctAnswer: 1,
            explanation: 'The Balmer series produces wavelengths from about 365 nm to 656 nm, which falls in the visible light range. The Lyman series is UV and the Paschen series is IR.'
          },
          {
            question: 'As $n_i$ increases for transitions in the Lyman series ($n_i \\to 1$), the emitted wavelengths:',
            options: [
              'Increase without limit',
              'Decrease, approaching a minimum value (series limit)',
              'Stay the same',
              'Alternate between longer and shorter'
            ],
            correctAnswer: 1,
            explanation: 'As $n_i \\to \\infty$, $\\Delta E \\to 13.6$ eV, so $\\lambda \\to 1240/13.6 = 91.2$ nm. The wavelengths decrease but converge to this series limit.'
          }
        ]
      }
    }
  ]
}
