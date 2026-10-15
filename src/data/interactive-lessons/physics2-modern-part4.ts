export const physics2ModernPart4Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp4-intro',
      type: 'text' as const,
      content: `
# 🌈 Atomic Transitions & Spectral Lines

**Part 4 of 7 — Reading the Light**

Every element produces a unique set of spectral lines. By understanding **energy level diagrams** and the patterns in hydrogen's spectral lines, you can predict and calculate the wavelengths of emitted or absorbed light.
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
## Grouping Transitions by Final Level

It helps to group hydrogen's transitions by their **final (lower) level**. Visible light spans roughly 400 nm to 700 nm (a question will give you this range when it matters).

### Transitions Ending on $n = 1$ — Ultraviolet
All transitions ending at the ground state release large energies:
- $2 \\to 1$: $\\Delta E = 10.2$ eV, $\\lambda = 122$ nm
- $3 \\to 1$: $\\Delta E = 12.1$ eV, $\\lambda = 103$ nm
- $4 \\to 1$: $\\Delta E = 12.75$ eV, $\\lambda = 97.3$ nm

### Transitions Ending on $n = 2$ — Visible Light!
The only group with lines in the visible range:
- $3 \\to 2$: $\\Delta E = 1.89$ eV, $\\lambda = 656$ nm (red)
- $4 \\to 2$: $\\Delta E = 2.55$ eV, $\\lambda = 486$ nm (blue-green)
- $5 \\to 2$: $\\Delta E = 2.86$ eV, $\\lambda = 434$ nm (violet)
- $6 \\to 2$: $\\Delta E = 3.02$ eV, $\\lambda = 410$ nm (violet)

### Transitions Ending on $n = 3$ — Infrared
- $4 \\to 3$: $\\Delta E = 0.66$ eV, $\\lambda = 1875$ nm
- $5 \\to 3$: $\\Delta E = 0.97$ eV, $\\lambda = 1282$ nm

### The Pattern
The farther apart two levels are, the larger $\\Delta E$ and the shorter $\\lambda$. Because the levels crowd together near the top, jumps to $n = 1$ are all large (ultraviolet), jumps to $n = 2$ are moderate (visible), and jumps to $n = 3$ are small (infrared).
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
            question: 'Of the hydrogen transitions that end on $n = 1$, which one emits the longest-wavelength photon?',
            options: [
              '$n = \\infty \\to n = 1$',
              '$n = 2 \\to n = 1$',
              '$n = 3 \\to n = 1$',
              '$n = 1 \\to n = 2$'
            ],
            correctAnswer: 1,
            explanation: 'Longest wavelength = smallest energy difference. The smallest gap ending on $n = 1$ is $n = 2 \\to n = 1$ ($\\Delta E = 10.2$ eV). Higher starting levels give larger $\\Delta E$ and shorter $\\lambda$.'
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

5) Visible light spans about 400 nm to 700 nm. Is the $4 \\to 1$ photon UV, visible, or IR? (type: UV)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['1.89', '656', '12.75', '97.3', 'UV'],
        hint1: '$E_3 = -1.51$ eV, $E_2 = -3.40$ eV. $\\Delta E = -1.51 - (-3.40)$.',
        hint2: '$\\lambda = 1240/1.89$. For $4 \\to 1$: $E_4 = -0.85$ eV, $E_1 = -13.6$ eV.',
        hint3: '$\\Delta E = -0.85 - (-13.6) = 12.75$ eV. $\\lambda = 1240/12.75$. Compare with the 400–700 nm visible range.',
        explanation: '$3 \\to 2$: $\\Delta E = -1.51 - (-3.40) = 1.89$ eV. $\\lambda = 1240/1.89 = 656$ nm (red, visible). $4 \\to 1$: $\\Delta E = -0.85 - (-13.6) = 12.75$ eV. $\\lambda = 1240/12.75 = 97.3$ nm (ultraviolet, shorter than 400 nm).'
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
            question: 'Hydrogen transitions from $n = 3, 4, 5,$ and $6$ down to $n = 2$ emit photons of 656, 486, 434, and 410 nm. The human eye detects wavelengths from about 400 nm to 700 nm. These photons are in which region of the electromagnetic spectrum?',
            options: [
              'Ultraviolet',
              'Visible',
              'Infrared',
              'X-ray'
            ],
            correctAnswer: 1,
            explanation: 'All four wavelengths fall between 400 nm and 700 nm, so they are visible light. Transitions ending on $n = 1$ release more energy (ultraviolet), and those ending on $n = 3$ release less (infrared).'
          },
          {
            question: 'For hydrogen transitions that end on $n = 1$, as the starting level $n_i$ increases, the emitted wavelengths:',
            options: [
              'Increase, approaching a limit of 656 nm',
              'Decrease toward a fixed limit',
              'Stay the same, since all end at $n = 1$',
              'Decrease steadily, approaching zero'
            ],
            correctAnswer: 1,
            explanation: 'As $n_i \\to \\infty$, $\\Delta E \\to 13.6$ eV, so $\\lambda \\to 1240/13.6 = 91.2$ nm. The wavelengths decrease but approach this limit instead of falling to zero. (656 nm is the $3 \\to 2$ wavelength, not a limit for transitions to $n = 1$.)'
          }
        ]
      }
    }
  ]
}
