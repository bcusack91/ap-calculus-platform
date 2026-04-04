export const physics2ModernPart1Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp1-intro',
      type: 'text' as const,
      content: `
# ✨ The Photon Model of Light

**Part 1 of 7 — Energy in Packets**

In the early 1900s, physicists discovered that light behaves not just as a wave, but as a stream of discrete energy packets called **photons**. This revolutionary idea launched modern physics.
      `
    },
    {
      id: 'mp1-photon-energy',
      type: 'text' as const,
      content: `
## Photon Energy

A photon carries energy proportional to its frequency:

$$E = hf$$

where:
- $E$ = photon energy (in joules)
- $h = 6.63 \\times 10^{-34}$ J·s (Planck's constant)
- $f$ = frequency of the light (in Hz)

Since $c = f\\lambda$, we can also write:

$$E = \\frac{hc}{\\lambda}$$

### Key Constants
| Constant | Value |
|----------|-------|
| $h$ | $6.63 \\times 10^{-34}$ J·s |
| $c$ | $3.00 \\times 10^{8}$ m/s |
| $hc$ | $1.99 \\times 10^{-25}$ J·m |
| 1 eV | $1.60 \\times 10^{-19}$ J |

### Energy in Electron Volts

For atomic-scale problems, joules are inconveniently small. We use **electron volts** (eV):

$$1 \\text{ eV} = 1.60 \\times 10^{-19} \\text{ J}$$

$$E_{\\text{eV}} = \\frac{E_{\\text{J}}}{1.60 \\times 10^{-19}}$$

A useful shortcut:

$$E = \\frac{hc}{\\lambda} = \\frac{1240 \\text{ eV·nm}}{\\lambda \\text{ (nm)}}$$
      `
    },
    {
      id: 'mp1-photon-quiz',
      type: 'multiple-choice' as const,
      content: `
**Photon Energy Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A photon has frequency $f = 5.0 \\times 10^{14}$ Hz. Its energy is:',
            options: [
              '$3.3 \\times 10^{-19}$ J',
              '$6.6 \\times 10^{-19}$ J',
              '$1.3 \\times 10^{-18}$ J',
              '$3.3 \\times 10^{-20}$ J'
            ],
            correctAnswer: 0,
            explanation: '$E = hf = (6.63 \\times 10^{-34})(5.0 \\times 10^{14}) = 3.315 \\times 10^{-19} \\approx 3.3 \\times 10^{-19}$ J.'
          },
          {
            question: 'Which photon has MORE energy?',
            options: [
              'Red light ($\\lambda = 700$ nm)',
              'Blue light ($\\lambda = 450$ nm)',
              'They have the same energy',
              'Cannot determine without knowing intensity'
            ],
            correctAnswer: 1,
            explanation: '$E = hc/\\lambda$. Shorter wavelength → higher energy. Blue ($\\lambda = 450$ nm) has more energy per photon than red ($\\lambda = 700$ nm).'
          }
        ]
      }
    },
    {
      id: 'mp1-photoelectric',
      type: 'text' as const,
      content: `
## The Photoelectric Effect

When light shines on a metal surface, it can eject electrons. This is the **photoelectric effect**.

### The Energy Equation

$$E_{\\text{photon}} = \\phi + KE_{\\max}$$

$$hf = \\phi + KE_{\\max}$$

where:
- $hf$ = energy of the incoming photon
- $\\phi$ = **work function** — the minimum energy needed to free an electron from the metal surface
- $KE_{\\max}$ = maximum kinetic energy of the ejected electron

### Threshold Frequency

The **threshold frequency** $f_0$ is the minimum frequency needed to eject any electrons:

$$\\phi = hf_0 \\quad \\Rightarrow \\quad f_0 = \\frac{\\phi}{h}$$

If $f < f_0$: **no electrons are ejected**, regardless of intensity.

### Stopping Voltage

The **stopping voltage** $V_s$ is the voltage needed to stop the fastest photoelectrons:

$$eV_s = KE_{\\max}$$

$$eV_s = hf - \\phi$$

### Key Observations (AP Exam Favorites!)

| Observation | Explanation |
|-------------|-------------|
| Below $f_0$: no electrons, no matter how bright | Each photon must individually have enough energy |
| Above $f_0$: electrons ejected instantly | No time delay — single photon interaction |
| Brighter light → more electrons, NOT faster | More photons = more electrons, same $KE_{\\max}$ |
| Higher frequency → faster electrons | More energy per photon → higher $KE_{\\max}$ |
      `
    },
    {
      id: 'mp1-photoelectric-quiz',
      type: 'multiple-choice' as const,
      content: `
**Photoelectric Effect Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A metal has work function $\\phi = 2.0$ eV. Light of frequency $6.0 \\times 10^{14}$ Hz shines on it. The maximum KE of ejected electrons is: (Use $h = 4.14 \\times 10^{-15}$ eV·s)',
            options: [
              '0.49 eV',
              '2.0 eV',
              '4.5 eV',
              'No electrons are ejected'
            ],
            correctAnswer: 0,
            explanation: '$E = hf = (4.14 \\times 10^{-15})(6.0 \\times 10^{14}) = 2.49$ eV. $KE_{\\max} = E - \\phi = 2.49 - 2.0 = 0.49$ eV.'
          },
          {
            question: 'Doubling the intensity of light above the threshold frequency will:',
            options: [
              'Double the maximum KE of the photoelectrons',
              'Double the number of photoelectrons emitted per second',
              'Double the threshold frequency',
              'Have no effect on the photoelectric current'
            ],
            correctAnswer: 1,
            explanation: 'Doubling intensity doubles the number of photons hitting the surface per second, so twice as many electrons are ejected. The maximum KE depends only on photon frequency, not intensity.'
          }
        ]
      }
    },
    {
      id: 'mp1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Photon & Photoelectric Effect Drill**

Use $h = 6.63 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s, $1 \\text{ eV} = 1.60 \\times 10^{-19}$ J.

A sodium surface has work function $\\phi = 2.28$ eV. Ultraviolet light of wavelength 250 nm shines on it.

1) Photon energy in joules ($\\times 10^{-19}$ J, 3 significant figures)
2) Photon energy in eV (3 significant figures)
3) Maximum KE of ejected electrons in eV (3 significant figures)
4) Stopping voltage in V (3 significant figures)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['7.96', '4.97', '2.69', '2.69'],
        hint1: '$E = hc/\\lambda = (6.63 \\times 10^{-34})(3.00 \\times 10^{8})/(250 \\times 10^{-9})$.',
        hint2: 'Convert to eV: divide J by $1.60 \\times 10^{-19}$. Then $KE_{\\max} = E - \\phi$.',
        hint3: '$eV_s = KE_{\\max}$, so $V_s = KE_{\\max}/e$. Since KE is already in eV, $V_s$ equals the same number in volts.',
        explanation: '$E = (6.63 \\times 10^{-34})(3 \\times 10^{8})/(250 \\times 10^{-9}) = 7.956 \\times 10^{-19} \\approx 7.96 \\times 10^{-19}$ J. In eV: $7.956 \\times 10^{-19}/1.60 \\times 10^{-19} = 4.97$ eV. $KE_{\\max} = 4.97 - 2.28 = 2.69$ eV. $V_s = 2.69$ V.'
      }
    },
    {
      id: 'mp1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Photon Model**
      `,
      exercise: {
        questions: [
          {
            question: 'A photon of wavelength 500 nm has energy closest to:',
            options: [
              '2.48 eV',
              '3.10 eV',
              '1.77 eV',
              '4.97 eV'
            ],
            correctAnswer: 0,
            explanation: '$E = 1240/500 = 2.48$ eV. (Using the shortcut $E = 1240 \\text{ eV·nm}/\\lambda$.)'
          },
          {
            question: 'In the photoelectric effect, which graph correctly shows $KE_{\\max}$ vs. frequency $f$?',
            options: [
              'A horizontal line (constant KE for all f)',
              'A straight line with positive slope starting at f = 0',
              'A straight line with positive slope starting at f = f₀ (zero KE below f₀)',
              'An exponential curve'
            ],
            correctAnswer: 2,
            explanation: '$KE_{\\max} = hf - \\phi$. This is linear with slope $h$ and x-intercept at $f_0 = \\phi/h$. Below $f_0$, no electrons are emitted (KE = 0).'
          }
        ]
      }
    }
  ]
}
