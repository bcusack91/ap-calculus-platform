export const chemAtomicSpectraPart4Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as4-intro',
      type: 'text' as const,
      content: `# 🌈 The Hydrogen Spectrum & Rydberg Formula

**Part 4 of 7 — Predicting Spectral Lines**

---

### Topics in This Part

| Section |
|---------|
| The Spectral Series |
| 📌 Lyman, Balmer & Paschen |
| 🔑 The Rydberg Formula |
| Calculating Wavelengths |
| Identifying Transitions |

> 🔑 **Big idea:** Hydrogen's emission lines fall into recognizable *series*, each corresponding to electrons relaxing to a particular final level. The Rydberg formula lets us calculate any line directly from the integers $n_i$ and $n_f$.`
    },
    {
      id: 'as4-series',
      type: 'text' as const,
      content: `
## 🌈 Hydrogen's Spectral Series

| Series | Final level $n_f$ | Region | Discovered |
|--------|-------------------|--------|-----------|
| **Lyman** | 1 | Ultraviolet | 1906 |
| **Balmer** | 2 | Visible | 1885 |
| **Paschen** | 3 | Near-infrared | 1908 |
| **Brackett** | 4 | Mid-infrared | 1922 |
| **Pfund** | 5 | Far-infrared | 1924 |

> 💡 **The Balmer series** is the four visible lines you can see with a hand-held spectroscope: H-α (red, 656 nm), H-β (blue-green, 486 nm), H-γ (violet, 434 nm), H-δ (deep violet, 410 nm).
      `
    },
    {
      id: 'as4-rydberg',
      type: 'text' as const,
      content: `
## 📐 The Rydberg Formula

In 1888 Johannes Rydberg derived an empirical formula for hydrogen's lines:

$$\\boxed{\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)}$$

where $R_H$ is the **Rydberg constant**:

$$R_H = 1.097 \\times 10^{7} \\; \\text{m}^{-1}$$

For **emission**, $n_i > n_f$ and $1/\\lambda$ comes out positive.

For **absorption**, swap the levels — or just track $|\\Delta E|$.

---

### Connection to the Bohr Model

Multiplying both sides by $hc$ gives:

$$E_{\\text{photon}} = hcR_H \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)$$

and indeed $hcR_H = 2.18 \\times 10^{-18}$ J — the Bohr energy constant. The Rydberg formula and the Bohr model agree exactly for hydrogen.
      `
    },
    {
      id: 'as4-worked',
      type: 'text' as const,
      content: `
## 🧪 Worked Examples

### Example 1 — H-α (Balmer 3 → 2)

$$\\frac{1}{\\lambda} = (1.097 \\times 10^{7})\\left( \\frac{1}{4} - \\frac{1}{9} \\right) = (1.097 \\times 10^{7})(0.13889) = 1.524 \\times 10^{6} \\; \\text{m}^{-1}$$

$$\\lambda = \\frac{1}{1.524 \\times 10^{6}} = 6.56 \\times 10^{-7} \\; \\text{m} = \\boxed{656 \\; \\text{nm}}$$

The famous red H-α line.

---

### Example 2 — Lyman 2 → 1

$$\\frac{1}{\\lambda} = (1.097 \\times 10^{7})\\left( \\frac{1}{1} - \\frac{1}{4} \\right) = (1.097 \\times 10^{7})(0.75) = 8.228 \\times 10^{6} \\; \\text{m}^{-1}$$

$$\\lambda = 1.215 \\times 10^{-7} \\; \\text{m} = \\boxed{121.5 \\; \\text{nm}}$$

In the far ultraviolet — invisible to the eye, but the strongest line in the Sun's spectrum.
      `
    },
    {
      id: 'as4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `**Spectral Series Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A hydrogen line at 486 nm (blue-green) belongs to which series?',
            options: ['Lyman', 'Balmer', 'Paschen', 'Brackett'],
            correctAnswer: 1,
            explanation: 'Visible lines are part of the Balmer series ($n_f = 2$). 486 nm is the H-β line ($n_i = 4$).'
          },
          {
            question: 'In the Rydberg formula, what determines whether the emitted photon is UV, visible, or IR?',
            options: [
              'Only $n_i$',
              'Only $n_f$',
              'The value of $n_f$ primarily — Lyman ($n_f=1$) is UV, Balmer ($n_f=2$) is visible, Paschen ($n_f=3$) is IR',
              'The temperature of the gas'
            ],
            correctAnswer: 2,
            explanation: 'The series (i.e., the value of $n_f$) sets the wavelength range; $n_i$ determines the specific line within that series.'
          },
          {
            question: 'Which transition produces the LONGEST-wavelength photon?',
            options: ['n=2 → n=1', 'n=3 → n=2', 'n=4 → n=3', 'n=5 → n=4'],
            correctAnswer: 3,
            explanation: 'The smallest energy gap is between adjacent high-$n$ levels. $n=5 \\to n=4$ gives the longest wavelength of these four (mid-IR, Brackett series).'
          }
        ]
      }
    },
    {
      id: 'as4-calculation',
      type: 'input-boxes' as const,
      content: `
**Rydberg Formula Drill** 🧮

Use $R_H = 1.097 \\times 10^{7}$ $m^{-1}$.

**1)** Find the wavelength (in nm, nearest whole) of the Balmer line for $n_i = 4 \\to n_f = 2$.

**2)** Find the wavelength (in nm, nearest whole) of the Lyman line for $n_i = 3 \\to n_f = 1$.

**3)** Find the wavelength (in nm, to nearest whole) of the Paschen line for $n_i = 4 \\to n_f = 3$. (Hint: this falls in the infrared — answer in the thousands of nm range.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['486', '103', '1875'],
        hint1: '$1/\\lambda = R_H(1/4 - 1/16) = R_H(0.1875)$. Convert m to nm.',
        hint2: '$1/\\lambda = R_H(1/1 - 1/9) = R_H(0.8889)$.',
        hint3: '$1/\\lambda = R_H(1/9 - 1/16) = R_H(0.04861)$.',
        explanation: '1) $1/\\lambda = (1.097 \\times 10^7)(0.1875) = 2.057 \\times 10^6$ $m^{-1}$ → $\\lambda = 486$ nm (H-β). 2) $1/\\lambda = (1.097 \\times 10^7)(0.8889) = 9.751 \\times 10^6$ $m^{-1}$ → $\\lambda = 103$ nm (UV). 3) $1/\\lambda = (1.097 \\times 10^7)(0.04861) = 5.333 \\times 10^5$ $m^{-1}$ → $\\lambda = 1875$ nm (IR Paschen-α).'
      }
    },
    {
      id: 'as4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Identify the Series** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'A line at 122 nm in hydrogen belongs to the', options: ['Lyman series', 'Balmer series', 'Paschen series', 'Brackett series'] },
          { label: 'A line at 656 nm in hydrogen belongs to the', options: ['Lyman series', 'Balmer series', 'Paschen series', 'visible Lyman'] },
          { label: 'A line at 1875 nm in hydrogen belongs to the', options: ['Lyman series', 'Balmer series', 'Paschen series', 'far UV series'] },
          { label: 'The shortest possible Balmer wavelength corresponds to $n_i \\to n_f =$', options: ['$2 \\to 1$', '$\\infty \\to 2$', '$3 \\to 2$', '$\\infty \\to 1$'] }
        ],
        correctAnswers: ['Lyman series', 'Balmer series', 'Paschen series', '$\\infty \\to 2$'],
        hint1: 'Lyman = UV (ends at $n=1$).',
        hint2: '656 nm is red light.',
        hint3: '1875 nm is infrared.',
        explanation: 'Lines below 200 nm → Lyman (UV); 400–700 nm → Balmer (visible); above ~800 nm → Paschen (IR). The Balmer series limit ($n_i \\to \\infty$, $n_f = 2$) is at $\\lambda = 365$ nm — the shortest Balmer wavelength.'
      }
    },
    {
      id: 'as4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Rydberg & Series** ✅`,
      exercise: {
        questions: [
          {
            question: 'A photon of wavelength 410 nm is emitted by hydrogen. The transition is most likely:',
            options: ['$n=2 \\to n=1$', '$n=6 \\to n=2$', '$n=4 \\to n=3$', '$n=3 \\to n=1$'],
            correctAnswer: 1,
            explanation: '410 nm is the violet H-δ line in the Balmer series, corresponding to $n=6 \\to n=2$.'
          },
          {
            question: 'How does the $He^{+}$ ion compare to hydrogen in its line spectrum?',
            options: [
              'Identical pattern',
              'No spectral lines (no electron)',
              'Similar pattern but at SHORTER wavelengths (factor of 4 shift)',
              'Similar pattern but at LONGER wavelengths'
            ],
            correctAnswer: 2,
            explanation: '$He^{+}$ is a "hydrogenic" one-electron ion. Its energies scale as $Z^2 = 4$, so transitions release 4× the energy and lines appear at 1/4 the wavelength.'
          }
        ]
      }
    }
  ]
}
