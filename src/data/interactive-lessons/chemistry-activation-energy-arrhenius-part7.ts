export const chemActivationEnergyArrheniusPart7Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Comprehensive Arrhenius and Catalyst Problems**

This final part brings together collision theory, energy diagrams, the Arrhenius equation, and catalysts in AP exam-level problems.
      `
    },
    {
      id: 'ae7-key-equations',
      type: 'text' as const,
      content: `
## Key Equations Summary

### Arrhenius Equation
$$k = Ae^{-E_a/(RT)}$$

### Linearized Form
$$\\ln k = -\\frac{E_a}{R} \\cdot \\frac{1}{T} + \\ln A$$

### Two-Point Form
$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

### Energy Diagram Relationships
$$\\Delta H = E_a(\\text{forward}) - E_a(\\text{reverse})$$

### Constants
- $R = 8.314$ J/(mol·K)
- Remember: $E_a$ in J/mol when using $R$ in J/(mol·K)
      `
    },
    {
      id: 'ae7-ap-problem-1',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 1: Energy Diagram Analysis** 🎯

A reaction energy diagram shows:
- Reactants: 50 kJ
- Transition state (uncatalyzed): 150 kJ
- Transition state (catalyzed): 100 kJ
- Products: 30 kJ
      `,
      exercise: {
        questions: [
          {
            question: 'What is Ea for the uncatalyzed forward reaction?',
            options: [
              '20 kJ',
              '50 kJ',
              '100 kJ',
              '150 kJ'
            ],
            correctAnswer: 2,
            explanation: 'Ea(forward, uncat) = transition state − reactants = 150 − 50 = 100 kJ.'
          },
          {
            question: 'What is ΔH for the reaction?',
            options: [
              '+20 kJ',
              '−20 kJ',
              '+100 kJ',
              '−100 kJ'
            ],
            correctAnswer: 1,
            explanation: 'ΔH = products − reactants = 30 − 50 = −20 kJ (exothermic).'
          },
          {
            question: 'By how much does the catalyst lower Ea?',
            options: [
              '20 kJ',
              '50 kJ',
              '70 kJ',
              '100 kJ'
            ],
            correctAnswer: 1,
            explanation: 'Ea(cat) = 100 − 50 = 50 kJ. Ea(uncat) = 100 kJ. Reduction = 100 − 50 = 50 kJ.'
          }
        ]
      }
    },
    {
      id: 'ae7-ap-problem-2',
      type: 'input-boxes' as const,
      content: `
**AP Problem 2: Arrhenius Calculation** 🧮

The rate constant for the decomposition of N₂O₅ is $k = 3.46 \\times 10^{-5}$ s⁻¹ at 298 K and $k = 4.87 \\times 10^{-3}$ s⁻¹ at 338 K.

1) Calculate $E_a$ in kJ/mol. (to 3 significant figures)

2) Calculate the frequency factor $A$. (order of magnitude: enter the exponent, e.g., for 10¹³ enter 13)

3) What would $k$ be at 310 K? (in s⁻¹, to 1 significant figure in scientific notation, e.g., 2e-4)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['103.5', '13', '2e-4'],
        hint1: 'ln(4.87e-3/3.46e-5) = ln(140.8) = 4.948. 1/298 − 1/338 = 3.356e-3 − 2.959e-3 = 3.97e-4. Ea = 8.314 × 4.948/3.97e-4 = 41.14/3.97e-4 = 103,600 J/mol = 103.6 kJ/mol.',
        hint2: 'ln A = ln k + Ea/(RT) = ln(3.46e-5) + 103,600/(8.314 × 298) = −10.27 + 41.77 = 31.50. A = e^31.5 ≈ 4.8 × 10¹³. Exponent = 13.',
        hint3: 'ln(k/3.46e-5) = (103,600/8.314)(1/298 − 1/310) = 12,462 × (3.356e-3 − 3.226e-3) = 12,462 × 1.30e-4 = 1.62. k = 3.46e-5 × e^1.62 = 3.46e-5 × 5.05 = 1.75e-4 ≈ 2e-4.',
        explanation: '1) Ea = 8.314 × ln(140.8)/3.97e-4 = 103,600 J/mol = 103.5 kJ/mol. 2) ln A = 31.5 → A ≈ 10¹³. 3) At 310 K: k ≈ 2 × 10⁻⁴ s⁻¹.'
      }
    },
    {
      id: 'ae7-ap-problem-3',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 3: Catalyst and Arrhenius** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On an Arrhenius plot (ln k vs 1/T), adding a catalyst to a reaction would change the graph by:',
            options: [
              'Shifting the line up (same slope)',
              'Making the line less steep (less negative slope) and shifting it up',
              'Making the line steeper',
              'Not changing the graph at all'
            ],
            correctAnswer: 1,
            explanation: 'A catalyst lowers Ea, which makes the slope (−Ea/R) less negative (less steep). It also generally increases k at all temperatures (shifts line up). The y-intercept (ln A) may also change since the mechanism is different.'
          },
          {
            question: 'A reaction has Ea = 75 kJ/mol. A catalyst lowers Ea to 50 kJ/mol. At 300 K, the ratio k(catalyzed)/k(uncatalyzed) is approximately:',
            options: [
              '1.5',
              '150',
              '22,000',
              '4.5 × 10⁴'
            ],
            correctAnswer: 2,
            explanation: 'Ratio = e^((75,000−50,000)/(8.314×300)) = e^(25,000/2494) = e^(10.02) ≈ 22,400 ≈ 22,000.'
          },
          {
            question: 'Why do enzymes stop working at very high temperatures?',
            options: [
              'Ea becomes too large',
              'The enzyme denatures (loses its 3D structure)',
              'The substrate evaporates',
              'The equilibrium shifts left'
            ],
            correctAnswer: 1,
            explanation: 'At high temperatures, the protein unfolds (denatures), destroying the active site shape. Without the proper 3D structure, the enzyme cannot bind substrate or catalyze the reaction.'
          }
        ]
      }
    },
    {
      id: 'ae7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Boltzmann factor e^(−Ea/RT) represents the fraction of molecules with',
            options: ['any kinetic energy', 'energy ≥ Ea', 'energy = 0', 'energy < Ea']
          },
          {
            label: 'On an Arrhenius plot, Ea is found from the',
            options: ['x-intercept', 'y-intercept', 'slope', 'area under the curve']
          },
          {
            label: 'A reaction with Ea ≈ 0 would have rate constant approximately equal to',
            options: ['0', 'R', 'T', 'A (frequency factor)']
          },
          {
            label: 'Heterogeneous catalysts work by',
            options: ['increasing temperature', 'adsorbing reactants and weakening bonds', 'increasing concentration', 'absorbing light']
          }
        ],
        correctAnswers: ['energy ≥ Ea', 'slope', 'A (frequency factor)', 'adsorbing reactants and weakening bonds'],
        hint1: 'e^(−Ea/RT) gives the fraction of molecules with enough energy to react.',
        hint2: 'slope = −Ea/R → Ea = −R × slope.',
        hint3: 'If Ea = 0: k = Ae⁰ = A.',
        explanation: 'Boltzmann factor = fraction with energy ≥ Ea. Slope of ln k vs 1/T gives Ea. Ea = 0 → k = A. Heterogeneous catalysts adsorb molecules onto their surface, weakening bonds.'
      }
    },
    {
      id: 'ae7-challenge-problem',
      type: 'input-boxes' as const,
      content: `
**Challenge: Complete Analysis** 🧮

A catalyzed reaction has the following data:

| T (K) | k (M⁻¹s⁻¹) |
|-------|-----------|
| 300 | 0.050 |
| 350 | 0.85 |

1) Calculate Ea for the catalyzed reaction. (in kJ/mol, to 3 significant figures)

2) The uncatalyzed reaction has Ea = 100 kJ/mol. By how many kJ/mol does the catalyst lower Ea? (to 3 significant figures)

3) At 300 K, what is the ratio k(cat)/k(uncat)? (to 1 significant figure, scientific notation: e.g., 3e5)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50.2', '49.8', '5e8'],
        hint1: 'ln(0.85/0.050) = ln(17) = 2.833. 1/300 − 1/350 = 3.333e-3 − 2.857e-3 = 4.76e-4. Ea = 8.314 × 2.833/4.76e-4 = 23.55/4.76e-4 = 49,500 J/mol ≈ 50.2 kJ/mol.',
        hint2: 'ΔEa = 100 − 50.2 = 49.8 kJ/mol.',
        hint3: 'k(cat)/k(uncat) = e^((100,000−50,200)/(8.314×300)) = e^(49,800/2494) = e^(19.97) ≈ 4.7 × 10⁸ ≈ 5 × 10⁸.',
        explanation: '1) Ea = 8.314 × 2.833/4.76e-4 = 49,500 J/mol ≈ 50.2 kJ/mol. 2) 100.0 − 50.2 = 49.8 kJ/mol. 3) e^(19.97) ≈ 5 × 10⁸.'
      }
    },
    {
      id: 'ae7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Activation Energy & Arrhenius** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student measures k at 5 temperatures and plots ln k vs 1/T. The best-fit line has slope = −6,000 K and y-intercept = 25.0. What is Ea and A?',
            options: [
              'Ea = 49.9 kJ/mol, A = e²⁵ ≈ 7.2 × 10¹⁰',
              'Ea = 6.0 kJ/mol, A = 25.0',
              'Ea = 49.9 kJ/mol, A = 25.0',
              'Ea = 6,000 J/mol, A = e²⁵'
            ],
            correctAnswer: 0,
            explanation: 'Ea = −R × slope = −8.314 × (−6,000) = 49,884 J/mol = 49.9 kJ/mol. A = e^(y-intercept) = e²⁵ ≈ 7.2 × 10¹⁰.'
          },
          {
            question: 'Which combination would make a reaction fastest?',
            options: [
              'High Ea, low T, no catalyst',
              'Low Ea, high T, with catalyst',
              'High Ea, high T, with catalyst',
              'Low Ea, low T, no catalyst'
            ],
            correctAnswer: 1,
            explanation: 'Fastest rate requires: low Ea (large Boltzmann factor), high T (more energy), and a catalyst (further lowers Ea). This maximizes k = Ae^(−Ea/RT).'
          }
        ]
      }
    }
  ]
}
