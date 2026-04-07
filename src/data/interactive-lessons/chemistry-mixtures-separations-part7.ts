export const chemMixturesSeparationsPart7Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx7-intro',
      type: 'text' as const,
      content: `
# 🏆 Synthesis & AP Review

**Part 7 of 7 — Lab Technique Connections & AP-Style Questions**

You\'ve learned about mixture types, separation techniques, chromatography, spectroscopy, and quantitative analysis. Now let\'s connect everything together with AP-style questions that integrate multiple concepts — exactly how they appear on the exam.
      `
    },
    {
      id: 'mx7-lab-connections',
      type: 'text' as const,
      content: `
## Lab Technique Connections

The AP Chemistry exam frequently tests your ability to **design an experimental procedure**. Here\'s how the techniques connect:

### Identification Workflow

1. **Is it a pure substance or mixture?** → Check melting/boiling point range
2. **If mixture, what type?** → Tyndall effect test (colloid vs solution)
3. **What components are present?** → Chromatography, spectroscopy
4. **How much of each component?** → Beer\'s Law, titration, gravimetric analysis

### Common AP Lab Scenarios

| Scenario | Key Techniques |
|----------|---------------|
| Determine % composition of a mixture | Gravimetric analysis or titration |
| Identify ions in solution | Flame tests, precipitation reactions |
| Determine concentration of colored solution | Spectrophotometry + Beer\'s Law |
| Separate a multicomponent mixture | Sequence of filtration, evaporation, distillation |
| Identify components of a dye | Paper or thin-layer chromatography |
| Determine molar mass of a volatile liquid | Dumas method (gas law + gravimetry) |
      `
    },
    {
      id: 'mx7-error-analysis',
      type: 'text' as const,
      content: `
## Error Analysis in Separation Techniques

AP free-response questions often ask how errors affect results:

### Common Errors and Effects

| Error | Effect on Result |
|-------|-----------------|
| Precipitate not fully dried (gravimetric) | Mass too high → % too high |
| Some precipitate passes through filter | Mass too low → % too low |
| Overshoot endpoint in titration | Volume too high → calculated concentration too high |
| Cuvette has fingerprints (spectroscopy) | Absorbance too high → calculated concentration too high |
| Air bubbles in buret during titration | Volume reading too low → calculated concentration too low |
| Forget to subtract water vapor pressure | Gas pressure too high → calculated moles too high |

### Significant Figures in Analysis

- Buret readings: ±0.02 mL (read to 2 decimal places)
- Analytical balance: ±0.001 g (read to 3 decimal places)
- Volumetric flask: typically 3-4 sig figs
- Spectrophotometer: 3 sig figs for absorbance
      `
    },
    {
      id: 'mx7-ap-quiz',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Conceptual Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student determines the mass of BaSO₄ precipitate but does not dry it completely before weighing. The reported mass percent of SO₄²⁻ will be:',
            options: [
              'Too high, because the wet precipitate has extra mass',
              'Too low, because water reduces the mass',
              'Unchanged, because water does not affect the calculation',
              'Zero, because the experiment failed'
            ],
            correctAnswer: 0,
            explanation: 'Wet precipitate weighs more than dry → student calculates more moles of SO₄²⁻ than actually present → mass percent is reported as too high.'
          },
          {
            question: 'In a Beer\'s Law experiment, a student uses a cuvette with a 2.00 cm path length instead of the standard 1.00 cm. If they use a calibration curve made with 1.00 cm cuvettes, the reported concentration will be:',
            options: [
              'Too high by a factor of 2',
              'Too low by a factor of 2',
              'Correct',
              'Too high by a factor of 4'
            ],
            correctAnswer: 0,
            explanation: '$A = \\varepsilon bc$. With $b = 2.00$ cm, the measured absorbance is doubled for the same concentration. Using a calibration curve made with $b = 1.00$ cm cuvettes, this doubled absorbance corresponds to a concentration that is 2× the actual value. The reported concentration is too high by a factor of 2.'
          },
          {
            question: 'A GC chromatogram of a sample shows 4 peaks with areas in the ratio 1:2:3:4. The percent composition of the component with the largest peak is approximately:',
            options: [
              '10%',
              '25%',
              '40%',
              '50%'
            ],
            correctAnswer: 2,
            explanation: 'Total area ratio = 1+2+3+4 = 10 parts. Largest peak = 4 parts. Percent = $(4/10) \\times 100 = 40\\%$.'
          }
        ]
      }
    },
    {
      id: 'mx7-ap-calculations',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculation Problems** 🧮

**1)** A 2.000 g sample of a mixture of NaCl and sand is dissolved in water, filtered, and the filtrate is evaporated. The recovered NaCl has a mass of 0.850 g. What is the mass percent of NaCl in the original mixture? (to 3 significant figures)

**2)** 25.00 mL of a Ba(OH)₂ solution is titrated with 0.1000 M HCl. It takes 35.60 mL of HCl to reach the equivalence point. The reaction is Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O. What is the molarity of Ba(OH)₂? (to 3 significant figures)

**3)** A calibration curve for Fe³⁺ (using thiocyanate complex) has slope 4500 L/(mol·cm) at $b = 1.00$ cm. An unknown solution has $A = 0.900$. What is $[\\text{Fe}^{3+}]$? (in M, in scientific notation as X.Xe-4, write just the coefficient to 3 significant figures, e.g., "2.0")
      `,
      exercise: {
        inputs: [
          {
            label: 'Mass percent NaCl (%)',
            correctAnswer: '42.5',
            explanation: 'Mass percent $= (0.850/2.000) \\times 100 = 42.5\\%$.'
          },
          {
            label: 'Molarity of Ba(OH)₂ (M)',
            correctAnswer: '0.0712',
            explanation: 'Moles HCl $= 0.1000 \\times 0.03560 = 3.560 \\times 10^{-3}$ mol. Mole ratio 2:1 → moles Ba(OH)₂ $= 1.780 \\times 10^{-3}$. $M = 1.780 \\times 10^{-3}/0.02500 = 0.0712$ M.'
          },
          {
            label: '[Fe³⁺] coefficient (×10⁻⁴ M)',
            correctAnswer: '2.0',
            explanation: '$c = A/(\\varepsilon b) = 0.900/(4500 \\times 1.00) = 2.0 \\times 10^{-4}$ M.'
          }
        ]
      }
    },
    {
      id: 'mx7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Error Analysis Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx7-dd1',
            label: 'Fingerprints on the cuvette absorb/scatter additional light',
            options: ['too high', 'too low', 'unaffected'],
            correctIndex: 0,
            explanation: 'Fingerprints on the cuvette absorb/scatter additional light, increasing the measured absorbance. Using this inflated absorbance with a calibration curve yields a concentration that is too high.'
          },
          {
            id: 'mx7-dd2',
            label: 'If some precipitate is lost during filtration, the measured mass is less than',
            options: ['too high', 'too low', 'unaffected'],
            correctIndex: 1,
            explanation: 'If some precipitate is lost during filtration, the measured mass is less than the true mass, so the calculated percentage of that ion will be too low.'
          },
          {
            id: 'mx7-dd3',
            label: 'Overshooting the endpoint means you recorded a titrant volume that is too lar...',
            options: ['too high', 'too low', 'unaffected'],
            correctIndex: 0,
            explanation: 'Overshooting the endpoint means you recorded a titrant volume that is too large. Since concentration calculation is proportional to titrant volume, the reported concentration of the analyte is too high.'
          },
          {
            id: 'mx7-dd4',
            label: 'Beer\'s Law ($A = \\varepsilon bc$) directly measures _______',
            options: ['mass percent', 'volume of gas', 'concentration'],
            correctIndex: 2,
            explanation: 'Beer\'s Law ($A = \\varepsilon bc$) directly measures concentration. It is a spectroscopic technique best suited for determining concentrations of colored species in solution.'
          }
        ]
      }
    },
    {
      id: 'mx7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Complete Review** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student wants to determine the amount of iron in a water sample. She adds a reagent that forms a colored complex with Fe³⁺, measures the absorbance, and uses a calibration curve. Which analytical technique is she using?',
            options: [
              'Gravimetric analysis',
              'Titration',
              'Colorimetric spectroscopy (Beer\'s Law)',
              'Chromatography'
            ],
            correctAnswer: 2,
            explanation: 'The student is using spectroscopy (specifically colorimetry) with Beer\'s Law. The colored complex absorbs light, and the absorbance is used with a calibration curve to find the concentration of Fe³⁺.'
          },
          {
            question: 'Which of the following is the correct order of steps for a complete gravimetric analysis of chloride content?',
            options: [
              'Dissolve sample → Add excess AgNO₃ → Filter → Dry → Weigh precipitate',
              'Filter → Add AgNO₃ → Dissolve → Dry → Weigh',
              'Weigh precipitate → Filter → Add AgNO₃ → Dissolve',
              'Add AgNO₃ → Weigh → Filter → Dry → Dissolve'
            ],
            correctAnswer: 0,
            explanation: 'The correct sequence: dissolve the sample, add excess precipitating agent (AgNO₃ for Cl⁻), filter to collect AgCl precipitate, dry it thoroughly, then weigh it. The mass of AgCl is used to calculate the amount of Cl⁻.'
          }
        ]
      }
    }
  ]
}
