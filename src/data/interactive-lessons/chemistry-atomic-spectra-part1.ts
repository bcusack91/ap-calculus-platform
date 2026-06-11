export const chemAtomicSpectraPart1Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as1-intro',
      type: 'text' as const,
      content: `# 🌈 Light, Photons & Energy

**Part 1 of 7 — The Electromagnetic Spectrum and Photon Energy**

---

### Topics in This Part

| Section |
|---------|
| What Is Light? |
| 📌 The Electromagnetic Spectrum |
| Wavelength, Frequency & Speed |
| 🔑 Photon Energy ($E = h\\nu$) |
| Energy & Wavelength Together |

> 🔑 **Why this matters:** Atomic spectra are the fingerprint of an element. Before we can understand *why* hydrogen produces a specific pattern of lines, we need the language of light — wavelength, frequency, and the photon.

---

### What You'll Master in Part 1
- Relating wavelength ($\\lambda$), frequency ($\\nu$), and the speed of light
- Calculating the energy of a single photon
- Predicting whether radiation lies in the UV, visible, or IR region`
    },
    {
      id: 'as1-what-is-light',
      type: 'text' as const,
      content: `
## 💡 What Is Light?

Light is **electromagnetic radiation** — oscillating electric and magnetic fields that travel through space at a fixed speed:

$$\\boxed{c = 3.00 \\times 10^{8} \\; \\text{m/s}}$$

It has both **wave-like** and **particle-like** behavior. The particle of light is called a **photon** — a discrete bundle of energy.

---

### The Wave Equation

For any wave, the speed equals frequency times wavelength:

$$\\boxed{c = \\lambda \\nu}$$

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $c$ | speed of light | m/s |
| $\\lambda$ (lambda) | wavelength (peak-to-peak) | m |
| $\\nu$ (nu) | frequency (cycles per second) | $\\text{s}^{-1}$ or Hz |

> 💡 **Key relationship:** Wavelength and frequency are **inversely proportional**. Short wavelength ⇒ high frequency ⇒ high energy.
      `
    },
    {
      id: 'as1-em-spectrum',
      type: 'text' as const,
      content: `
## 📌 The Electromagnetic Spectrum

| Region | Wavelength range | Typical use in chemistry |
|--------|-----------------|--------------------------|
| Radio | > 1 m | NMR spectroscopy |
| Microwave | 1 mm – 1 m | Rotational transitions |
| Infrared (IR) | 700 nm – 1 mm | Vibrational (bonds) |
| **Visible** | **400 – 700 nm** | **Atomic emission lines** |
| Ultraviolet (UV) | 10 – 400 nm | Electronic transitions |
| X-ray | 0.01 – 10 nm | Inner-shell electrons |
| Gamma | < 0.01 nm | Nuclear transitions |

> 🌈 **Visible memory aid (low → high energy):** **R**ed, **O**range, **Y**ellow, **G**reen, **B**lue, **I**ndigo, **V**iolet — "ROY G. BIV". Red is longest wavelength (~700 nm); violet is shortest (~400 nm).
      `
    },
    {
      id: 'as1-photon-energy',
      type: 'text' as const,
      content: `
## ⚡ Photon Energy: $E = h\\nu$

Each photon carries a discrete amount of energy:

$$\\boxed{E_{\\text{photon}} = h\\nu = \\frac{hc}{\\lambda}}$$

where **Planck's constant** is:

$$h = 6.626 \\times 10^{-34} \\; \\text{J}\\cdot\\text{s}$$

---

### Worked Example — Energy of a Green Photon

> **Problem:** A green laser pointer emits light at $\\lambda = 532$ nm. What is the energy of one photon?

**Step 1.** Convert wavelength to meters: $532 \\; \\text{nm} = 5.32 \\times 10^{-7} \\; \\text{m}$.

**Step 2.** Apply $E = hc/\\lambda$:

$$E = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^{8})}{5.32 \\times 10^{-7}} = 3.74 \\times 10^{-19} \\; \\text{J}$$

That is the energy delivered by **one photon**. A typical 1-mW laser emits roughly $10^{15}$ photons per second.
      `
    },
    {
      id: 'as1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Light & Photon Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which color of visible light has the highest energy per photon?',
            options: ['Red', 'Yellow', 'Green', 'Violet'],
            correctAnswer: 3,
            explanation: 'Violet has the shortest wavelength (~400 nm) and therefore the highest frequency and the highest energy per photon ($E = hc/\\lambda$).'
          },
          {
            question: 'If the wavelength of a photon doubles, its energy:',
            options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'],
            correctAnswer: 1,
            explanation: 'Energy is inversely proportional to wavelength: $E = hc/\\lambda$. Doubling $\\lambda$ halves $E$.'
          },
          {
            question: 'Ultraviolet radiation differs from visible light because UV photons have:',
            options: [
              'longer wavelength and lower energy',
              'shorter wavelength and higher energy',
              'the same energy but greater intensity',
              'no wave properties'
            ],
            correctAnswer: 1,
            explanation: 'UV (10–400 nm) is shorter wavelength than visible (400–700 nm), so each UV photon carries more energy.'
          }
        ]
      }
    },
    {
      id: 'as1-calculation',
      type: 'input-boxes' as const,
      content: `
**Photon Energy Drill** 🧮

**1)** A radio station broadcasts at $f = 1.00 \\times 10^{8}$ Hz. What is the wavelength in meters? (Enter as a decimal.)

**2)** What is the energy (in J) of a single 656-nm photon (hydrogen's red line)? Express as $a \\times 10^{-19}$ J — enter only $a$ to 3 sig figs.

**3)** A photon has energy $4.42 \\times 10^{-19}$ J. What is its wavelength in nm? (To the nearest whole nm.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '3.03', '450'],
        hint1: 'Use $\\lambda = c / \\nu = (3.00 \\times 10^8) / (1.00 \\times 10^8)$.',
        hint2: 'Convert 656 nm to $6.56 \\times 10^{-7}$ m, then $E = hc/\\lambda$.',
        hint3: 'Solve $\\lambda = hc/E$. Convert the answer from meters to nanometers.',
        explanation: '1) $\\lambda = (3 \\times 10^8)/(1 \\times 10^8) = 3$ m. 2) $E = (6.626\\times 10^{-34})(3\\times 10^8)/(6.56\\times 10^{-7}) = 3.03 \\times 10^{-19}$ J. 3) $\\lambda = (6.626 \\times 10^{-34})(3 \\times 10^8) / (4.42 \\times 10^{-19}) = 4.50 \\times 10^{-7}$ m = 450 nm (blue-violet).'
      }
    },
    {
      id: 'as1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Spectrum Match-Up** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: 'Wavelength of 600 nm lies in the', options: ['radio region', 'visible region', 'X-ray region', 'microwave region'] },
          { label: 'Of the four, the photon with the highest energy has wavelength', options: ['1 m', '500 nm', '50 nm', '700 nm'] },
          { label: 'Frequency and wavelength are', options: ['directly proportional', 'inversely proportional', 'unrelated', 'always equal'] },
          { label: 'Planck\'s constant has units of', options: ['J', 'J·s', 'J/s', 'm/s'] }
        ],
        correctAnswers: ['visible region', '50 nm', 'inversely proportional', 'J·s'],
        hint1: 'Visible light spans 400–700 nm.',
        hint2: 'Shorter wavelength → higher energy.',
        hint3: '$c = \\lambda \\nu$ — if one grows, the other shrinks.',
        explanation: '600 nm is orange (visible). 50 nm is far UV — highest energy of the four. $\\lambda$ and $\\nu$ are inversely proportional. Planck\'s constant has units of J·s.'
      }
    },
    {
      id: 'as1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Light & Photons** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What is the frequency of light with wavelength 500 nm?',
            options: ['$6.0 \\times 10^{14}$ Hz', '$3.0 \\times 10^{14}$ Hz', '$1.5 \\times 10^{15}$ Hz', '$5.0 \\times 10^{12}$ Hz'],
            correctAnswer: 0,
            explanation: '$\\nu = c/\\lambda = (3.00\\times 10^8)/(5.00\\times 10^{-7}) = 6.0\\times 10^{14}$ Hz.'
          },
          {
            question: 'What carries more energy per photon: a 200-nm UV photon or a 600-nm visible photon?',
            options: [
              'The visible photon (longer wavelength = more energy)',
              'The UV photon (shorter wavelength = more energy)',
              'They carry the same energy',
              'It depends on intensity'
            ],
            correctAnswer: 1,
            explanation: '$E = hc/\\lambda$. Shorter wavelength means higher energy per photon. The 200-nm UV photon has 3× the energy of the 600-nm photon.'
          }
        ]
      }
    }
  ]
}
