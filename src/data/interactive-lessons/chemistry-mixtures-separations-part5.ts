export const chemMixturesSeparationsPart5Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx5-intro',
      type: 'text' as const,
      content: `
# ⚖️ Gravimetric & Volumetric Analysis

**Part 5 of 7 — Quantitative Analytical Techniques**

Two classical methods for determining the composition of mixtures are **gravimetric analysis** (based on mass measurements) and **volumetric analysis** (based on volume measurements of solutions). Both appear frequently on the AP Chemistry exam.
      `
    },
    {
      id: 'mx5-gravimetric',
      type: 'text' as const,
      content: `
## Gravimetric Analysis

**Principle**: Determine the amount of a substance by converting it to a **known precipitate**, filtering, drying, and **weighing** it.

### Steps

1. Dissolve the sample in solution
2. Add a reagent that selectively **precipitates** the target ion
3. **Filter** the mixture to collect the precipitate
4. **Wash** the precipitate to remove impurities
5. **Dry** (and sometimes ignite) the precipitate
6. **Weigh** the precipitate
7. Calculate the composition using stoichiometry

### Example

Determine the mass percent of Cl⁻ in a 0.500 g sample. Adding excess AgNO₃ produces 0.854 g of AgCl.

$$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$$

Step 1: Moles of AgCl ($M = 143.32$ g/mol):
$$n_{AgCl} = \\frac{0.854}{143.32} = 5.96 \\times 10^{-3} \\text{ mol}$$

Step 2: Moles of Cl⁻ = moles of AgCl = $5.96 \\times 10^{-3}$ mol

Step 3: Mass of Cl⁻ ($M = 35.45$ g/mol):
$$m_{Cl^-} = 5.96 \\times 10^{-3} \\times 35.45 = 0.211 \\text{ g}$$

Step 4: Mass percent:
$$\\% \\text{Cl}^- = \\frac{0.211}{0.500} \\times 100\\% = 42.2\\%$$
      `
    },
    {
      id: 'mx5-volumetric',
      type: 'text' as const,
      content: `
## Volumetric Analysis (Titration)

**Principle**: Determine the concentration of an unknown solution by reacting it with a **standard solution** (known concentration) until the reaction is complete — the **equivalence point**.

### Key Terms

| Term | Definition |
|------|-----------|
| **Titrant** | Solution of known concentration (in the buret) |
| **Analyte** | Solution of unknown concentration (in the flask) |
| **Equivalence point** | Moles of titrant = stoichiometric amount needed to react with analyte |
| **Indicator** | Substance that changes color near the equivalence point |
| **End point** | When the indicator changes color (ideally = equivalence point) |

### The Titration Equation

$$M_1V_1 \\times \\text{(mole ratio)} = M_2V_2$$

For a 1:1 reaction: $M_1V_1 = M_2V_2$

### Example: Acid-Base Titration

25.0 mL of unknown HCl is titrated with 0.100 M NaOH. It takes 32.5 mL of NaOH to reach the equivalence point.

$$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$$

1:1 ratio → $M_{HCl}V_{HCl} = M_{NaOH}V_{NaOH}$

$$M_{HCl} = \\frac{M_{NaOH} \\times V_{NaOH}}{V_{HCl}} = \\frac{(0.100)(32.5)}{25.0} = 0.130 \\text{ M}$$
      `
    },
    {
      id: 'mx5-back-titration',
      type: 'text' as const,
      content: `
## Back Titration

Sometimes the analyte reacts slowly or doesn\'t have a clear endpoint. In a **back titration**:

1. Add a known **excess** of reagent to the analyte
2. Allow the reaction to go to completion
3. **Titrate the leftover (unreacted) reagent** with another standard solution
4. The difference tells you how much reagent reacted with the analyte

### When to Use

- When the analyte is insoluble (e.g., CaCO₃ in antacid tablets)
- When the reaction is slow
- When there is no suitable indicator for direct titration
      `
    },
    {
      id: 'mx5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Analysis Method Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In gravimetric analysis, which step is essential for determining the mass of the target substance?',
            options: [
              'Measuring the volume of the solution',
              'Filtering, drying, and weighing the precipitate',
              'Using an indicator to detect color change',
              'Measuring the temperature change'
            ],
            correctAnswer: 1,
            explanation: 'Gravimetric analysis depends on converting the target to a precipitate, then filtering, drying, and accurately weighing it. Mass measurement is the core of the technique.'
          },
          {
            question: 'In a titration, the equivalence point is reached when:',
            options: [
              'The indicator changes color',
              'Half the analyte has reacted',
              'Stoichiometric amounts of titrant and analyte have reacted',
              'The pH equals 7.00'
            ],
            correctAnswer: 2,
            explanation: 'The equivalence point is the theoretical point where the stoichiometric amount of titrant has been added to completely react with all the analyte. The indicator changes color near (but not exactly at) this point.'
          },
          {
            question: 'Which reagent would you add to determine the amount of sulfate (SO₄²⁻) by gravimetric analysis?',
            options: [
              'NaOH',
              'HCl',
              'BaCl₂',
              'AgNO₃'
            ],
            correctAnswer: 2,
            explanation: '$\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$. BaCl₂ precipitates sulfate as BaSO₄, which is very insoluble and easy to filter and weigh.'
          }
        ]
      }
    },
    {
      id: 'mx5-calculations',
      type: 'input-boxes' as const,
      content: `
**Analytical Calculations** 🧮

1) In a gravimetric analysis, 1.000 g of a sample produces 0.466 g of BaSO₄ ($M = 233.43$ g/mol). How many moles of SO₄²⁻ were in the sample? (to 4 decimal places)

2) 20.0 mL of unknown H₂SO₄ is titrated with 0.150 M NaOH. It takes 40.0 mL to reach equivalence. The reaction is H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. What is the molarity of H₂SO₄? (to 3 decimal places)

3) What is the mass percent of SO₄²⁻ ($M = 96.06$ g/mol) in the sample from problem 1? (to 1 decimal place, as a percentage)
      `,
      exercise: {
        inputs: [
          {
            label: 'Moles of SO₄²⁻',
            correctAnswer: '0.0020',
            explanation: '$n = 0.466/233.43 = 1.997 \\times 10^{-3} \\approx 0.0020$ mol. One mole of BaSO₄ contains one mole of SO₄²⁻.'
          },
          {
            label: 'Molarity of H₂SO₄ (M)',
            correctAnswer: '0.150',
            explanation: 'Moles NaOH $= 0.150 \\times 0.0400 = 0.00600$ mol. Mole ratio is 2:1, so moles H₂SO₄ $= 0.00600/2 = 0.00300$. $M = 0.00300/0.0200 = 0.150$ M.'
          },
          {
            label: 'Mass percent of SO₄²⁻ (%)',
            correctAnswer: '19.2',
            explanation: 'Mass of SO₄²⁻ $= 0.0020 \\times 96.06 = 0.192$ g. Mass percent $= (0.192/1.000) \\times 100 = 19.2\\%$.'
          }
        ]
      }
    },
    {
      id: 'mx5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Method Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx5-dd1',
            options: ['gravimetric analysis', 'titration', 'spectroscopy'],
            correctIndex: 0,
            explanation: 'Finding the amount of Cl⁻ by precipitating AgCl and weighing it is a classic gravimetric analysis.'
          },
          {
            id: 'mx5-dd2',
            options: ['gravimetric analysis', 'titration', 'spectroscopy'],
            correctIndex: 1,
            explanation: 'Determining the concentration of an acid by adding a base of known concentration from a buret is titration (volumetric analysis).'
          },
          {
            id: 'mx5-dd3',
            options: ['gravimetric analysis', 'titration', 'spectroscopy'],
            correctIndex: 2,
            explanation: 'Measuring the absorbance of a colored solution to determine concentration using Beer\'s Law is spectroscopy.'
          },
          {
            id: 'mx5-dd4',
            options: ['the end point', 'the equivalence point', 'the half-equivalence point'],
            correctIndex: 0,
            explanation: 'The end point is when the indicator actually changes color. Ideally it coincides with the equivalence point, but they are not the same thing.'
          }
        ]
      }
    },
    {
      id: 'mx5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Gravimetric & Volumetric** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student performing a titration overshoots the endpoint (adds too much NaOH). The calculated concentration of the acid will be:',
            options: [
              'Too high',
              'Too low',
              'Correct',
              'Impossible to determine'
            ],
            correctAnswer: 0,
            explanation: 'Overshooting means recording a volume of NaOH that is too large. Since $M_{acid} = M_{NaOH}V_{NaOH}/V_{acid}$, a larger $V_{NaOH}$ gives a calculated acid concentration that is too high.'
          },
          {
            question: 'In gravimetric analysis, why is excess precipitating reagent added?',
            options: [
              'To make the precipitate dissolve faster',
              'To ensure ALL of the target ion is precipitated',
              'To change the color of the solution',
              'To reduce the mass of the precipitate'
            ],
            correctAnswer: 1,
            explanation: 'Excess reagent ensures that the precipitation reaction goes to completion, so that ALL of the target ion is converted to the precipitate. This is essential for accurate results.'
          }
        ]
      }
    }
  ]
}
