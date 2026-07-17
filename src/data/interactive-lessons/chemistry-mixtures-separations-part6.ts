export const chemMixturesSeparationsPart6Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx6-intro',
      type: 'text' as const,
      content: `# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Choosing Methods & Beer\'s Law Calculations**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'mx6-choosing-methods',
      type: 'text' as const,
      content: `
## 🧪 Decision Framework: Choosing Separation Methods

| Situation | Best Method |
|-----------|------------|
| Insoluble solid in liquid | **Filtration** |
| Dissolved solid in liquid (need the solid) | **Evaporation** |
| Two liquids with different boiling points | **Distillation** |
| Components with different affinities for mobile/stationary phase | **Chromatography** |
| Determine concentration of colored solution | **Spectroscopy** (Beer\'s Law) |
| Determine mass of a specific ion | **Gravimetric analysis** |
| Determine concentration using known reagent | **Titration** |
| Separate using magnetism | **Magnetic separation** (e.g., iron filings from sand) |

> 💡 **Tip:** When choosing a method, identify the **key physical property** that differs between components: particle size → filtration, boiling point → distillation, solubility → crystallization, color → spectroscopy.


---

### Multi-Step Separations

Complex mixtures often require **multiple techniques in sequence**:

**Example**: Separate salt, sand, and iron filings:
1. **Magnet** → removes iron filings
2. **Add water and stir** → dissolves salt
3. **Filter** → removes sand (residue)
4. **Evaporate** filtrate → recovers salt
      `
    },
    {
      id: 'mx6-beers-law-workshop',
      type: 'text' as const,
      content: `
## 🛠️ Beer\'s Law Problem-Solving

### Standard Curve Approach

Given calibration data:

| Concentration (M) | Absorbance |
|-------------------|-----------|
| 0.0020 | 0.150 |
| 0.0040 | 0.300 |
| 0.0060 | 0.450 |
| 0.0080 | 0.600 |
| 0.0100 | 0.750 |

The slope is: $\\varepsilon b = 0.750/0.0100 = 75.0$ L/(mol·cm) (assuming $b = 1.00$ cm, $\\varepsilon = 75.0$).


---

### Finding Unknown Concentration

If an unknown has $A = 0.525$:

$$c = \\frac{A}{\\varepsilon b} = \\frac{0.525}{75.0} = 0.0070 \\text{ M}$$


---

### Dilution Warning

If the unknown was diluted before measurement, you must account for this:

$$\\boxed{c_{\\text{original}} = c_{\\text{measured}} \\times \\frac{V_{\\text{total}}}{V_{\\text{sample}}}}$$

> ⚠️ **Warning:** If the unknown was **diluted** before measurement, you must multiply back by the dilution factor to find the original concentration. Forgetting this step is a common AP exam mistake.
      `
    },
    {
      id: 'mx6-method-selection-quiz',
      type: 'multiple-choice' as const,
      content: `
**Method Selection Challenge** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mixture contains dissolved NaCl and dissolved $KNO_{3}$ in water. Which method is BEST for separating them?',
            options: [
              'Filtration',
              'Simple distillation',
              'Fractional crystallization',
              'Magnetism'
            ],
            correctAnswer: 2,
            explanation: 'Both salts are dissolved (filtration won\'t work) and both are non-volatile (distillation gives only water). Fractional crystallization exploits differences in solubility at different temperatures to crystallize one salt at a time.'
          },
          {
            question: 'A student needs to determine the concentration of $Cu^{2+}$ ions in a blue solution. The best method is:',
            options: [
              'Filtration and weighing',
              'Spectroscopy using Beer\'s Law',
              'Paper chromatography',
              'Simple distillation'
            ],
            correctAnswer: 1,
            explanation: '$Cu^{2+}$ solutions are blue (absorb orange light). Using a spectrophotometer and Beer\'s Law ($A = \\varepsilon bc$) with a calibration curve is the most efficient and accurate method.'
          },
          {
            question: 'To determine the percentage of $CaCO_{3}$ in an antacid tablet, a back titration is preferred because:',
            options: [
              '$CaCO_{3}$ is colored',
              '$CaCO_{3}$ is a strong acid',
              '$CaCO_{3}$ is insoluble and reacts slowly with acid',
              '$CaCO_{3}$ is volatile'
            ],
            correctAnswer: 2,
            explanation: '$CaCO_{3}$ is insoluble and dissolves slowly in acid, making direct titration impractical. In a back titration, excess acid is added first, then the unreacted acid is titrated with a base.'
          }
        ]
      }
    },
    {
      id: 'mx6-calculations',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

**1)** Using the calibration data from above ($\\varepsilon b = 75.0$), an unknown solution gives $A = 0.375$. What is the concentration? (in M, to 3 significant figures)

**2)** The unknown from problem 1 was prepared by diluting 5.00 mL of original solution to 25.0 mL. What was the original concentration? (in M, to 3 significant figures)

**3)** A student needs to separate 3.00 g of NaCl dissolved in 100 mL of water. After evaporation, theoretically all the NaCl should remain. If the student recovers 2.85 g, what is the percent recovery? (to 3 significant figures)
      `,
      exercise: {
        inputs: [
          {
            label: 'Unknown concentration (M)',
            correctAnswer: '0.0050',
            explanation: '$c = A/(\\varepsilon b) = 0.375/75.0 = 0.0050$ M.'
          },
          {
            label: 'Original concentration (M)',
            correctAnswer: '0.0250',
            explanation: '$c_{\\text{original}} = c_{\\text{measured}} \\times V_{\\text{total}}/V_{\\text{sample}} = 0.0050 \\times 25.0/5.00 = 0.0250$ M.'
          },
          {
            label: 'Percent recovery (%)',
            correctAnswer: '95.0',
            explanation: 'Percent recovery $= (2.85/3.00) \\times 100 = 95.0\\%$.'
          }
        ]
      }
    },
    {
      id: 'mx6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Technique Matching** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx6-dd1',
            label: 'Separating plant pigments (chlorophyll a, chlorophyll b, carotenoids) is a',
            options: ['filtration', 'chromatography', 'distillation', 'spectroscopy'],
            correctIndex: 1,
            explanation: 'Separating plant pigments (chlorophyll a, chlorophyll b, carotenoids) is a classic chromatography application.'
          },
          {
            id: 'mx6-dd2',
            label: 'Obtaining pure water from seawater requires _______',
            options: ['filtration', 'chromatography', 'distillation', 'spectroscopy'],
            correctIndex: 2,
            explanation: 'Obtaining pure water from seawater requires distillation. The water evaporates and condenses, leaving salts behind.'
          },
          {
            id: 'mx6-dd3',
            label: 'Determining the concentration of food dye in a drink uses Beer\'s Law and a sp...',
            options: ['filtration', 'chromatography', 'distillation', 'spectroscopy'],
            correctIndex: 3,
            explanation: 'Determining the concentration of food dye in a drink uses Beer\'s Law and a spectrophotometer.'
          },
          {
            id: 'mx6-dd4',
            label: 'Collecting a precipitate after a double replacement reaction uses _______',
            options: ['filtration', 'chromatography', 'distillation', 'spectroscopy'],
            correctIndex: 0,
            explanation: 'Collecting a precipitate after a double replacement reaction uses filtration.'
          }
        ]
      }
    },
    {
      id: 'mx6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A calibration curve for $Cu^{2+}$ has equation $A = 12.0c$ (b = 1.00 cm). A sample is diluted 10× and gives $A = 0.360$. The original [$Cu^{2+}$] is:',
            options: [
              '0.0030 M',
              '0.030 M',
              '0.30 M',
              '3.0 M'
            ],
            correctAnswer: 2,
            explanation: '$c_{\\text{diluted}} = 0.360/12.0 = 0.030$ M. Original $= 0.030 \\times 10 = 0.30$ M.'
          },
          {
            question: 'Which sequence correctly separates a mixture of sand, salt, and iron filings?',
            options: [
              'Filter → Magnet → Evaporate',
              'Magnet → Dissolve in water → Filter → Evaporate',
              'Evaporate → Filter → Magnet',
              'Distill → Magnet → Filter'
            ],
            correctAnswer: 1,
            explanation: '1) Magnet removes iron. 2) Add water to dissolve salt. 3) Filter to remove sand. 4) Evaporate filtrate to recover salt. Each step uses a different physical property.'
          }
        ]
      }
    }
  ]
}
