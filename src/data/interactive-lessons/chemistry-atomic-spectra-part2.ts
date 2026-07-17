export const chemAtomicSpectraPart2Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as2-intro',
      type: 'text' as const,
      content: `# 🔥 Atomic Emission & Absorption Spectra

**Part 2 of 7 — How Atoms Make Light**

---

### Topics in This Part

| Section |
|---------|
| Continuous vs Line Spectra |
| 📌 Emission Spectra |
| 📌 Absorption Spectra |
| Why Lines? Quantization |
| Spectra as Fingerprints |

> 🔑 **Big idea:** A glowing solid produces a *continuous* rainbow. A glowing **gas of atoms** produces only specific colors — sharp **lines**. Each element's pattern of lines is unique.`
    },
    {
      id: 'as2-continuous-vs-line',
      type: 'text' as const,
      content: `
## 🌈 Continuous vs Line Spectra

| Spectrum type | Source | Appearance |
|---------------|--------|-----------|
| **Continuous** | Hot solid (filament, sun's surface) | All wavelengths blend smoothly |
| **Line emission** | Excited gas (neon sign, hydrogen tube) | A few bright colored lines on a dark background |
| **Line absorption** | Cool gas in front of a hot continuous source | Dark lines on a bright rainbow |

> 💡 **Hot vs cold gases:** A hot, low-pressure gas **emits** specific wavelengths. A cool gas in front of a continuous source **absorbs** those same wavelengths — leaving dark gaps in the rainbow.
      `
    },
    {
      id: 'as2-emission',
      type: 'text' as const,
      content: `
## 🔥 Emission Spectra

When an atom is supplied with energy (heat, electricity, light), an electron jumps to a higher-energy state. When it falls back down, the energy difference is released as a photon:

$$\\boxed{\\Delta E_{\\text{atom}} = E_{\\text{photon}} = h\\nu}$$

The photon's frequency depends on the energy gap between levels. Because atomic energy levels are **discrete**, only certain photon energies — and therefore certain colors — are possible.

---

### Example — The Sodium D-Line

When you sprinkle table salt (NaCl) into a Bunsen-burner flame, the flame turns bright **yellow-orange** at 589 nm. This single bright line is the signature of the sodium atom relaxing from its $3p$ state back to $3s$.

| Element | Famous emission color |
|---------|-----------------------|
| Sodium (Na) | yellow-orange (589 nm) |
| Potassium (K) | violet |
| Lithium (Li) | crimson red |
| Copper (Cu) | blue-green |
| Strontium (Sr) | bright red |

This is the basis of **flame tests** in introductory chemistry.
      `
    },
    {
      id: 'as2-absorption',
      type: 'text' as const,
      content: `
## 🌫️ Absorption Spectra

If white light shines through a cool gas, atoms in the gas can **absorb** photons whose energies match an allowed transition. Those wavelengths are missing from the transmitted beam — appearing as **dark lines**.

> 🔬 **Astronomy connection:** The dark lines in the Sun's spectrum (Fraunhofer lines) come from atoms in the cooler outer layers absorbing specific wavelengths from the hotter interior. They tell us *what the Sun is made of.*

---

### Conservation of Photon Energies

For a given element, the **emission lines** and the **absorption lines** appear at exactly the same wavelengths — because both correspond to the same energy gaps in the atom. Only the direction of the transition is reversed.
      `
    },
    {
      id: 'as2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `**Spectrum Quick Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A gas-discharge tube filled with neon glows orange-red. This is an example of:',
            options: ['a continuous spectrum', 'an emission spectrum', 'an absorption spectrum', 'blackbody radiation'],
            correctAnswer: 1,
            explanation: 'An excited gas emits photons at characteristic wavelengths — an emission spectrum.'
          },
          {
            question: 'Why don\'t hot solid metals (like a glowing iron rod) show a line spectrum?',
            options: [
              'Solids cannot emit light',
              'Atoms in solids have so many overlapping energy levels that emission appears continuous',
              'Solids only emit infrared',
              'Solids produce only absorption lines'
            ],
            correctAnswer: 1,
            explanation: 'In a solid, atoms are densely packed and their energy levels broaden into bands — the emitted radiation forms a continuous spectrum (blackbody radiation).'
          },
          {
            question: 'For a given element, the wavelengths of emission lines compared to absorption lines are:',
            options: ['always longer', 'always shorter', 'identical', 'unrelated'],
            correctAnswer: 2,
            explanation: 'Both emission and absorption involve the same set of allowed energy gaps — the wavelengths match exactly.'
          }
        ]
      }
    },
    {
      id: 'as2-calculation',
      type: 'input-boxes' as const,
      content: `
**Atom-to-Photon Drill** 🧮

**1)** An excited mercury atom drops from a state at $-3.71 \\times 10^{-19}$ J to one at $-7.26 \\times 10^{-19}$ J. What is $\\Delta E$ released as a photon, in $\\times 10^{-19}$ J? (Enter just the magnitude, to 2 decimals.)

**2)** What wavelength (nm) does that photon have? (Round to nearest whole nm.)

**3)** A sodium atom emits a photon of energy $3.37 \\times 10^{-19}$ J. What wavelength (nm)? (Round to nearest whole nm.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.55', '560', '590'],
        hint1: '$|\\Delta E| = |E_{\\text{final}} - E_{\\text{initial}}| = |-7.26 - (-3.71)| \\times 10^{-19}$ J.',
        hint2: '$\\lambda = hc/E$, then convert m → nm.',
        hint3: 'Same formula: $\\lambda = (6.626 \\times 10^{-34})(3 \\times 10^8) / E$.',
        explanation: '1) $|-7.26 - (-3.71)| = 3.55 \\times 10^{-19}$ J. 2) $\\lambda = (6.626 \\times 10^{-34})(3.00 \\times 10^8)/(3.55 \\times 10^{-19}) = 5.60 \\times 10^{-7}$ m = 560 nm (yellow-green — close to mercury\'s green line). 3) $\\lambda = hc/E \\approx 5.90 \\times 10^{-7}$ m = 590 nm (the sodium D-line!).'
      }
    },
    {
      id: 'as2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match Each Source to Its Spectrum** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Glowing tungsten filament in a light bulb produces a', options: ['line emission spectrum', 'line absorption spectrum', 'continuous spectrum', 'no spectrum'] },
          { label: 'Light from the Sun passing through a cool atmosphere produces a', options: ['line emission spectrum', 'continuous absorption spectrum', 'line absorption spectrum', 'continuous emission spectrum'] },
          { label: 'A neon sign (excited Ne gas) produces a', options: ['continuous spectrum', 'line emission spectrum', 'line absorption spectrum', 'rainbow'] },
          { label: 'The presence of element-specific lines in a star\'s spectrum tells us about its', options: ['mass', 'rotational speed only', 'chemical composition', 'magnetic field'] }
        ],
        correctAnswers: ['continuous spectrum', 'line absorption spectrum', 'line emission spectrum', 'chemical composition'],
        hint1: 'Hot solids → continuous; hot gases → line emission.',
        hint2: 'Cool gas in front of a continuous source absorbs specific wavelengths.',
        hint3: 'Each element has a unique fingerprint of lines.',
        explanation: 'Hot solids produce a continuous spectrum. The Sun\'s photosphere is continuous; cool atoms above it absorb specific wavelengths → dark Fraunhofer lines (absorption). Excited Ne gas → emission. Spectral fingerprints reveal composition.'
      }
    },
    {
      id: 'as2-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz** ✅`,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains *why* atomic spectra consist of discrete lines rather than a continuous rainbow?',
            options: [
              'Atoms can only emit one color',
              'Electron energy levels in atoms are quantized',
              'Photons cannot have intermediate wavelengths',
              'Atoms move too fast to emit a rainbow'
            ],
            correctAnswer: 1,
            explanation: 'Quantized energy levels mean only certain energy gaps exist, and only photons with those exact energies can be emitted or absorbed.'
          },
          {
            question: 'A flame test of an unknown salt produces a bright crimson-red line at ~671 nm. The likely cation is:',
            options: ['$Na^{+}$', '$K^{+}$', '$Li^{+}$', '$Cu^{2+}$'],
            correctAnswer: 2,
            explanation: 'Lithium produces a characteristic crimson-red flame at ~671 nm. Sodium is yellow, potassium violet, copper blue-green.'
          }
        ]
      }
    }
  ]
}
