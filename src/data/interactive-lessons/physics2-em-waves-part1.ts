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

Electromagnetic waves are self-propagating oscillations of **electric** and **magnetic** fields that travel through space at the speed of light. James Clerk Maxwell predicted their existence in the 1860s, and Heinrich Hertz confirmed them experimentally in 1887.

### Key Properties

| Property | Value/Description |
|----------|-------------------|
| Speed in vacuum | $c = 3 \\times 10^8$ m/s |
| Relationship | $c = f\\lambda$ |
| Type | Transverse wave |
| Medium required? | No — travels through vacuum |
| Produced by | Accelerating electric charges |

---

### E and B Field Relationship

The electric field $\\vec{E}$ and magnetic field $\\vec{B}$ oscillate **perpendicular** to each other and perpendicular to the direction of propagation. They are always **in phase** — reaching their maxima and minima at the same time.

$$\\frac{E}{B} = c$$

The direction of propagation is given by $\\vec{E} \\times \\vec{B}$ (right-hand rule).

> 🔑 **Key:** EM waves carry energy and momentum. The energy is shared equally between the electric and magnetic fields.
      `
    },
    {
      id: 'electromagneticwaves-p1-spectrum',
      type: 'text' as const,
      content: `
## The Electromagnetic Spectrum

All EM waves are fundamentally the **same phenomenon** — they differ only in frequency and wavelength.

| Region | Wavelength | Frequency | Common Source |
|--------|-----------|-----------|---------------|
| Radio | > 1 m | < $3 \\times 10^8$ Hz | Antennas, broadcasting |
| Microwave | 1 mm – 1 m | $10^8$ – $10^{11}$ Hz | Radar, ovens, Wi-Fi |
| Infrared | 700 nm – 1 mm | $10^{11}$ – $4.3 \\times 10^{14}$ Hz | Warm objects, remote controls |
| Visible | 400 – 700 nm | $4.3 \\times 10^{14}$ – $7.5 \\times 10^{14}$ Hz | Sun, light bulbs |
| Ultraviolet | 10 – 400 nm | $7.5 \\times 10^{14}$ – $3 \\times 10^{16}$ Hz | Sun, tanning beds |
| X-ray | 0.01 – 10 nm | $3 \\times 10^{16}$ – $3 \\times 10^{19}$ Hz | X-ray tubes |
| Gamma | < 0.01 nm | > $3 \\times 10^{19}$ Hz | Nuclear decay, cosmic sources |

All travel at speed $c$ in vacuum! The boundaries between regions are **not sharp** — they overlap.

### Visible Light Detail

| Color | Wavelength |
|-------|-----------|
| Red | 620–700 nm |
| Orange | 590–620 nm |
| Yellow | 570–590 nm |
| Green | 495–570 nm |
| Blue | 450–495 nm |
| Violet | 380–450 nm |

> 🔑 **Memory aid:** "ROY G. BIV" — Red has the longest wavelength (lowest frequency), violet the shortest (highest frequency).
      `
    },
    {
      id: 'electromagneticwaves-p1-maxwell',
      type: 'text' as const,
      content: `
## Maxwell's Equations — The Big Picture

Maxwell unified electricity and magnetism into four equations. For AP Physics 2, you need the conceptual picture:

| Law | What It Says | Key Implication |
|-----|-------------|-----------------|
| Gauss's Law (E) | Charges create electric fields | Electric field lines start/end on charges |
| Gauss's Law (B) | No magnetic monopoles | Magnetic field lines always form closed loops |
| Faraday's Law | Changing B creates E | Time-varying magnetic field induces electric field |
| Ampère-Maxwell Law | Current or changing E creates B | Time-varying electric field also creates magnetic field |

### The Self-Sustaining Wave

The last two laws are the key to EM waves:
1. A changing $\\vec{B}$ creates a $\\vec{E}$ (Faraday)
2. That changing $\\vec{E}$ creates a new $\\vec{B}$ (Ampère-Maxwell)
3. That new changing $\\vec{B}$ creates more $\\vec{E}$...

This chain reaction propagates through space at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$, with no medium needed.

> 🔑 **AP Tip:** Unlike sound or water waves, EM waves don't need a medium. This is why sunlight reaches Earth through the vacuum of space.
      `
    },
    {
      id: 'electromagneticwaves-p1-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Electromagnetic waves are:',
            options: ['Longitudinal waves', 'Transverse waves', 'Both longitudinal and transverse', 'Neither — they are a different category'],
            correctAnswer: 1,
            explanation: 'EM waves have E and B fields oscillating perpendicular to the direction of propagation — this is the definition of a transverse wave. Unlike sound, which is longitudinal and needs a medium, EM waves are transverse and travel through vacuum.'
          },
          {
            question: 'If an EM wave has $\\lambda = 500$ nm, its frequency is approximately:',
            options: ['$6 \\times 10^{14}$ Hz', '$6 \\times 10^{11}$ Hz', '$1.5 \\times 10^{11}$ Hz', '$6 \\times 10^{17}$ Hz'],
            correctAnswer: 0,
            explanation: '$f = c/\\lambda = (3 \\times 10^8)/(500 \\times 10^{-9}) = 6 \\times 10^{14}$ Hz. This is visible green light.'
          },
          {
            question: 'In an EM wave, E and B fields are:',
            options: ['Parallel to each other', 'Perpendicular to each other and to propagation direction', 'In the same direction as propagation', 'Out of phase by 90°'],
            correctAnswer: 1,
            explanation: 'E ⊥ B ⊥ direction of travel. They form a right-hand system and oscillate in phase (reach maxima simultaneously).'
          },
          {
            question: 'Which EM wave property changes when light enters water ($n = 1.33$)?',
            options: ['Frequency only', 'Wavelength and speed, but NOT frequency', 'Speed only', 'All properties change'],
            correctAnswer: 1,
            explanation: 'Frequency is determined by the source and never changes. In a medium with index $n$: speed decreases to $v = c/n$ and wavelength shortens to $\\lambda_n = \\lambda_0/n$. This is critical for understanding refraction and interference in media.'
          }
        ]
      }
    },
    {
      id: 'electromagneticwaves-p1-input',
      type: 'input-boxes' as const,
      content: `
**EM Wave Calculations** 🧮

**1)** Wavelength of a 100 MHz radio wave? (in meters)

**2)** If $E_{max} = 600$ V/m, find $B_{max}$ in Tesla. (use scientific notation like 2e-6)

**3)** What region of the EM spectrum has $\\lambda = 0.5$ nm?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '2e-6', 'x-ray'],
        hint1: '$\\lambda = c/f = 3 \\times 10^8 / 10^8$',
        hint2: '$B = E/c = 600/(3 \\times 10^8)$',
        hint3: '0.01–10 nm range',
        explanation: '1) $3 \\times 10^8 / 10^8 = 3$ m. 2) $600/(3 \\times 10^8) = 2 \\times 10^{-6}$ T. 3) X-ray (0.01–10 nm).'
      }
    },
    {
      id: 'electromagneticwaves-p1-misconceptions',
      type: 'multiple-choice' as const,
      content: `
**Common Misconceptions** ⚠️
      `,
      exercise: {
        questions: [
          {
            question: 'A student says: "Radio waves travel slower than gamma rays because they have lower energy." Is this correct?',
            options: [
              'Yes — higher energy means faster speed',
              'No — ALL EM waves travel at the same speed $c$ in vacuum, regardless of frequency or energy',
              'Yes — but only in vacuum',
              'No — gamma rays are actually slower'
            ],
            correctAnswer: 1,
            explanation: 'This is the #1 EM wave misconception! ALL electromagnetic waves — radio, visible, X-ray, gamma — travel at exactly the same speed $c = 3 \\times 10^8$ m/s in vacuum. They differ in frequency and wavelength, not speed. Different speeds only occur in media (dispersion).'
          },
          {
            question: 'EM waves need a medium to propagate, just like sound waves. True or false?',
            options: [
              'True — all waves need media',
              'False — EM waves propagate through vacuum; oscillating E and B fields sustain each other',
              'True for visible light but not for radio waves',
              'False — but they travel faster in media'
            ],
            correctAnswer: 1,
            explanation: 'This was actually a major debate in the 1800s — physicists hypothesized a "luminiferous ether" as the medium for light. The Michelson-Morley experiment (1887) found no evidence for it. EM waves are self-sustaining: a changing E creates B, and that changing B creates E, so they propagate through empty space.'
          }
        ]
      }
    }
  ]
};
