export const physics2EmWavesPart1Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p1-intro',
      type: 'text' as const,
      content: `# ✨ Electromagnetic Waves

**Part 1 of 7 — EM Wave Properties**

---

### What Are Electromagnetic Waves?

Electromagnetic waves are self-propagating oscillations of **electric** and **magnetic** fields that travel through space at the speed of light.

### Key Properties

| Property | Value/Description |
|----------|-------------------|
| Speed in vacuum | $c = 3 \\\\times 10^8$ m/s |
| Relationship | $c = f\\\\lambda$ |
| Type | Transverse wave |
| Medium required? | No — travels through vacuum |

---

### E and B Field Relationship

The electric field $\\\\vec{E}$ and magnetic field $\\\\vec{B}$ oscillate **perpendicular** to each other and perpendicular to the direction of propagation.

$$\\\\frac{E}{B} = c$$

> 🔑 **Key:** EM waves carry energy and momentum. The energy is shared equally between the electric and magnetic fields.

---

### The Electromagnetic Spectrum

| Region | Wavelength | Frequency |
|--------|-----------|-----------|
| Radio | > 1 m | < $3 \\\\times 10^8$ Hz |
| Microwave | 1 mm – 1 m | $3 \\\\times 10^8$ – $3 \\\\times 10^{11}$ Hz |
| Infrared | 700 nm – 1 mm | $3 \\\\times 10^{11}$ – $4.3 \\\\times 10^{14}$ Hz |
| Visible | 400 – 700 nm | $4.3 \\\\times 10^{14}$ – $7.5 \\\\times 10^{14}$ Hz |
| Ultraviolet | 10 – 400 nm | $7.5 \\\\times 10^{14}$ – $3 \\\\times 10^{16}$ Hz |
| X-ray | 0.01 – 10 nm | $3 \\\\times 10^{16}$ – $3 \\\\times 10^{19}$ Hz |
| Gamma | < 0.01 nm | > $3 \\\\times 10^{19}$ Hz |

All travel at speed $c$ in vacuum!`
    },    {
      id: 'electromagneticwaves-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Electromagnetic waves are:',
            options: ['Longitudinal waves', 'Transverse waves', 'Both longitudinal and transverse', 'Neither'],
            correctAnswer: 1,
            explanation: 'EM waves have E and B fields oscillating perpendicular to propagation — transverse.'
          },
          {
            question: 'If an EM wave has $\\\\lambda = 500$ nm, its frequency is approximately:',
            options: ['$6 \\\\times 10^{14}$ Hz', '$6 \\\\times 10^{11}$ Hz', '$1.5 \\\\times 10^{11}$ Hz', '$6 \\\\times 10^{17}$ Hz'],
            correctAnswer: 0,
            explanation: '$f = c/\\\\lambda = (3 \\\\times 10^8)/(500 \\\\times 10^{-9}) = 6 \\\\times 10^{14}$ Hz.'
          },
          {
            question: 'In an EM wave, E and B fields are:',
            options: ['Parallel to each other', 'Perpendicular to each other and to propagation direction', 'In the same direction as propagation', 'Only E oscillates'],
            correctAnswer: 1,
            explanation: 'E ⊥ B ⊥ direction of travel. They form a right-hand system.'
          }
        ]
      }
    },    {
      id: 'electromagneticwaves-p1-input',
      type: 'input-boxes' as const,
      content: `
**EM Wave Calculations** 🧮

**1)** Wavelength of a 100 MHz radio wave? (in meters)

**2)** If $E_{max} = 600$ V/m, find $B_{max}$ in Tesla. (use scientific notation like 2e-6)

**3)** What region of the EM spectrum has $\\\\lambda = 0.5$ nm?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '2e-6', 'x-ray'],
        hint1: '$\\\\lambda = c/f = 3 \\\\times 10^8 / 10^8$',
        hint2: '$B = E/c = 600/(3 \\\\times 10^8)$',
        hint3: '0.01–10 nm range',
        explanation: '1) $3 \\\\times 10^8 / 10^8 = 3$ m. 2) $600/(3 \\\\times 10^8) = 2 \\\\times 10^{-6}$ T. 3) X-ray (0.01–10 nm).'
      }
    }
  ]
};
