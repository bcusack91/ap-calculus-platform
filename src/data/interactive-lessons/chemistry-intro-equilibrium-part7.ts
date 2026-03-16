export const chemIntroEquilibriumPart7Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Introduction to Equilibrium**

This final part reviews all key concepts: dynamic equilibrium, $K_c$/$K_p$ expressions, heterogeneous equilibrium, manipulating K, and the meaning of K\'s magnitude. These questions mirror AP Chemistry free-response and multiple-choice formats.
      `
    },
    {
      id: 'ie7-concept-map',
      type: 'text' as const,
      content: `
## Concept Summary

### Dynamic Equilibrium
- Forward rate = reverse rate
- Concentrations are **constant** but not necessarily equal
- System must be **closed**

### Equilibrium Expressions
- $K_c = \\frac{[\\text{products}]^{\\text{coefficients}}}{[\\text{reactants}]^{\\text{coefficients}}}$
- $K_p = \\frac{(P_{\\text{products}})^{\\text{coeff}}}{(P_{\\text{reactants}})^{\\text{coeff}}}$
- $K_p = K_c(RT)^{\\Delta n}$

### Heterogeneous Equilibrium
- Exclude pure solids (s) and pure liquids (l)
- Include gases (g) and aqueous species (aq)
- Solids must still be present for equilibrium to exist

### Manipulating K
| Operation | Effect |
|-----------|--------|
| Reverse | $K\' = 1/K$ |
| Multiply by $n$ | $K\' = K^n$ |
| Add reactions | $K_{\\text{total}} = K_1 \\times K_2$ |

### Magnitude of K
- $K \\gg 1$: product-favored
- $K \\ll 1$: reactant-favored
- Only **temperature** changes K
      `
    },
    {
      id: 'ie7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which change will alter the value of the equilibrium constant $K$?',
            options: [
              'Adding more reactant',
              'Increasing the total pressure by adding an inert gas',
              'Changing the temperature',
              'Adding a catalyst'
            ],
            correctAnswer: 2,
            explanation: 'Only temperature changes K. Adding reactant shifts the position but not K. Inert gas and catalysts have no effect on K.'
          },
          {
            question: 'For the equilibrium $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, $K_p$ equals:',
            options: [
              '$\\frac{P_{\\text{CaO}} \\cdot P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$',
              '$P_{\\text{CO}_2}$',
              '$\\frac{P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$',
              '$P_{\\text{CaO}} \\cdot P_{\\text{CO}_2}$'
            ],
            correctAnswer: 1,
            explanation: 'Both CaCO₃ and CaO are solids — exclude them. Only CO₂(g) remains: $K_p = P_{\\text{CO}_2}$.'
          },
          {
            question: 'At 25°C, $K = 1.0 \\times 10^{-14}$ for $\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}^+(aq) + \\text{OH}^-(aq)$. This means:',
            options: [
              'Water barely dissociates at 25°C',
              'Water is mostly dissociated',
              'The reaction is product-favored',
              'Water cannot reach equilibrium'
            ],
            correctAnswer: 0,
            explanation: '$K = 10^{-14} \\ll 1$ means the reaction is strongly reactant-favored. Very few water molecules are dissociated at any given time.'
          }
        ]
      }
    },
    {
      id: 'ie7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Given: $\\text{A} \\rightleftharpoons \\text{B}$, $K_1 = 0.50$. $\\text{B} \\rightleftharpoons \\text{C}$, $K_2 = 6.0$. What is $K$ for $\\text{C} \\rightleftharpoons \\text{A}$?',
            options: [
              '$3.0$',
              '$0.33$',
              '$1/3.0 = 0.33$',
              'Both B and C are correct'
            ],
            correctAnswer: 3,
            explanation: 'A ⇌ C: $K = K_1 \\times K_2 = 0.50 \\times 6.0 = 3.0$. C ⇌ A is the reverse: $K = 1/3.0 = 0.33$. Options B and C give the same answer.'
          },
          {
            question: 'For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, $K_c = 500$ at temperature $T$. What is $K_c$ for $\\text{NH}_3(g) \\rightleftharpoons \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)$?',
            options: [
              '$1/500 = 0.002$',
              '$\\sqrt{1/500} = 0.045$',
              '$\\sqrt{500} = 22.4$',
              '$500^2 = 250{,}000$'
            ],
            correctAnswer: 1,
            explanation: 'First reverse: $K_{\\text{rev}} = 1/500$. Then multiply by 1/2: $K = (1/500)^{1/2} = 1/\\sqrt{500} = 0.0447 \\approx 0.045$.'
          }
        ]
      }
    },
    {
      id: 'ie7-frq-practice',
      type: 'input-boxes' as const,
      content: `
**AP Free-Response Style** 🧮

The reaction $2\\,\\text{SO}_3(g) \\rightleftharpoons 2\\,\\text{SO}_2(g) + \\text{O}_2(g)$ has $K_c = 1.6 \\times 10^{-10}$ at 900 K.

1) Is this reaction product-favored or reactant-favored at 900 K? (Enter "reactant-favored")

2) What is $K_c$ for $\\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{SO}_3(g)$? (Enter in scientific notation, e.g. 7.9e4)

3) The decomposition of SO₃ is endothermic. If temperature increases, does $K_c$ for the decomposition increase or decrease? (Enter "increase")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['reactant-favored', '7.9e4', 'increase'],
        hint1: '$K_c = 1.6 \\times 10^{-10} \\ll 1$, so reactants (SO₃) dominate.',
        hint2: 'Reverse the reaction and divide by 2. $K\' = (1/K)^{1/2} = (1/(1.6 \\times 10^{-10}))^{1/2}$.',
        hint3: 'Endothermic reactions: increasing T shifts right, increasing K.',
        explanation: '1) $K \\ll 1$ → reactant-favored. 2) Reverse: $K\' = 1/(1.6 \\times 10^{-10}) = 6.25 \\times 10^{9}$. Divide by 2: $K\'\' = (6.25 \\times 10^9)^{1/2} = 7.9 \\times 10^4$. 3) Endothermic decomposition + higher T → K increases.'
      }
    },
    {
      id: 'ie7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At equilibrium, the net rate of reaction is',
            options: ['maximum', 'zero', 'equal to the forward rate', 'increasing']
          },
          {
            label: 'Pure solids are excluded from K expressions because their',
            options: ['concentration is zero', 'activity is 1 (constant)', 'mass changes', 'pressure varies']
          },
          {
            label: 'When two reactions are added, their K values are',
            options: ['added', 'multiplied', 'averaged', 'subtracted']
          },
          {
            label: 'A very large K means equilibrium lies',
            options: ['far to the left', 'far to the right', 'in the middle', 'nowhere']
          }
        ],
        correctAnswers: [
          'zero',
          'activity is 1 (constant)',
          'multiplied',
          'far to the right'
        ],
        hint1: 'Net rate = forward rate − reverse rate. At equilibrium, these are equal.',
        hint2: 'Pure substances have constant concentration → activity = 1.',
        hint3: 'Adding reactions: K values multiply. Large K: products dominate.',
        explanation: 'At equilibrium, forward = reverse so net rate = 0. Pure solids/liquids have activity = 1. Adding reactions → multiply K values. Large K → product-favored (far to the right).'
      }
    },
    {
      id: 'ie7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student claims that at equilibrium, no reactions are occurring. This is:',
            options: [
              'Correct — equilibrium means the reaction stopped',
              'Incorrect — both forward and reverse reactions continue at equal rates',
              'Correct — only for exothermic reactions',
              'Incorrect — only the forward reaction continues'
            ],
            correctAnswer: 1,
            explanation: 'Dynamic equilibrium means both reactions continue. The rates are equal, so there is no net change — but molecular-level reactions never stop.'
          },
          {
            question: 'For $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$, $K_c = 0.36$ at 100°C. If 1.00 mol N₂O₄ is placed in a 1.00 L flask at 100°C, at equilibrium there will be:',
            options: [
              'Only N₂O₄ present',
              'Only NO₂ present',
              'More N₂O₄ than NO₂ by concentration',
              'Cannot be determined without solving the ICE table'
            ],
            correctAnswer: 3,
            explanation: 'While $K < 1$ suggests reactants are somewhat favored, the exact equilibrium concentrations depend on solving the ICE table (covered in a later topic). We cannot determine the exact amounts without calculation.'
          }
        ]
      }
    }
  ]
}
