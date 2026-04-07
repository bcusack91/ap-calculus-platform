export const chemIceTablesCalculationsPart2Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic2-intro',
      type: 'text' as const,
      content: `
# 🧊 Solving for K from Equilibrium Data

**Part 2 of 7 — When You Know the Equilibrium Concentrations**

The simplest ICE table problem: you\'re given enough information about the equilibrium state to directly calculate K. No algebra needed — just plug and chug.
      `
    },
    {
      id: 'ic2-direct-method',
      type: 'text' as const,
      content: `
## Method: All Equilibrium Concentrations Given

If you know ALL equilibrium concentrations, just plug them into the K expression.

### Example 1

$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$

At equilibrium: $[\\text{N}_2] = 0.50$, $[\\text{H}_2] = 0.30$, $[\\text{NH}_3] = 0.20$ M

$$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} = \\frac{(0.20)^2}{(0.50)(0.30)^3} = \\frac{0.040}{(0.50)(0.027)} = \\frac{0.040}{0.0135} = 2.96 \\approx 3.0$$
      `
    },
    {
      id: 'ic2-using-ice',
      type: 'text' as const,
      content: `
## Method: Initial + One Equilibrium Value Given

When you know initial concentrations and ONE equilibrium concentration, use the ICE table to find x, then calculate all equilibrium concentrations.

### Example 2

$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$

Initial: $[\\text{PCl}_5] = 1.00$ M, $[\\text{PCl}_3] = [\\text{Cl}_2] = 0$

At equilibrium: $[\\text{PCl}_5] = 0.60$ M

|  | PCl₅ | PCl₃ | Cl₂ |
|--|------|------|-----|
| **I** | 1.00 | 0 | 0 |
| **C** | $-x$ | $+x$ | $+x$ |
| **E** | $1.00 - x$ | $x$ | $x$ |

From the equilibrium value: $1.00 - x = 0.60 \\implies x = 0.40$

So: $[\\text{PCl}_3] = [\\text{Cl}_2] = 0.40$ M

$$K_c = \\frac{(0.40)(0.40)}{0.60} = \\frac{0.16}{0.60} = 0.267 \\approx 0.27$$
      `
    },
    {
      id: 'ic2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Finding K** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If you know all equilibrium concentrations, to find K you should:',
            options: [
              'Set up a full ICE table and solve for x',
              'Directly substitute into the K expression',
              'Use the quadratic formula',
              'Calculate Q first'
            ],
            correctAnswer: 1,
            explanation: 'When all equilibrium concentrations are known, simply plug them into the K expression. No ICE table or algebra is needed.'
          },
          {
            question: 'Given initial $[\\text{A}] = 2.00$ M and equilibrium $[\\text{A}] = 1.40$ M for $\\text{A} \\rightleftharpoons \\text{B}$, what is $x$?',
            options: [
              '$0.40$',
              '$0.60$',
              '$1.40$',
              '$2.00$'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{A}]_{eq} = [\\text{A}]_0 - x \\implies 1.40 = 2.00 - x \\implies x = 0.60$.'
          }
        ]
      }
    },
    {
      id: 'ic2-practice1',
      type: 'input-boxes' as const,
      content: `
**Practice Problem 1** 🧮

$\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$

At equilibrium: $[\\text{CO}] = 0.10$, $[\\text{H}_2\\text{O}] = 0.10$, $[\\text{CO}_2] = 0.30$, $[\\text{H}_2] = 0.30$ M

**1)** Calculate $K_c$. (Enter as a whole number)

**2)** Is this reaction product-favored or reactant-favored? (Enter "product-favored" or "reactant-favored")
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['9', 'product-favored'],
        hint1: '$K_c = \\frac{[\\text{CO}_2][\\text{H}_2]}{[\\text{CO}][\\text{H}_2\\text{O}]} = \\frac{(0.30)(0.30)}{(0.10)(0.10)}$',
        hint2: '$K = 9 > 1$, so products dominate.',
        explanation: '1) $K_c = \\frac{(0.30)(0.30)}{(0.10)(0.10)} = \\frac{0.09}{0.01} = 9$. 2) $K = 9 > 1$, so product-favored.'
      }
    },
    {
      id: 'ic2-practice2',
      type: 'input-boxes' as const,
      content: `
**Practice Problem 2** 🧮

$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$

Initial: $[\\text{N}_2\\text{O}_4] = 0.80$ M, $[\\text{NO}_2] = 0$ M

At equilibrium: $[\\text{NO}_2] = 0.40$ M

**1)** What is $x$? (Enter as a decimal)

**2)** What is $[\\text{N}_2\\text{O}_4]$ at equilibrium? (Enter as a decimal)

**3)** Calculate $K_c$. (Enter to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.20', '0.60', '0.27'],
        hint1: '$[\\text{NO}_2]_{eq} = 2x = 0.40 \\implies x = 0.20$',
        hint2: '$[\\text{N}_2\\text{O}_4]_{eq} = 0.80 - x = 0.80 - 0.20 = 0.60$',
        hint3: '$K_c = \\frac{(0.40)^2}{0.60} = \\frac{0.16}{0.60}$',
        explanation: '1) $2x = 0.40 \\implies x = 0.20$. 2) $[\\text{N}_2\\text{O}_4] = 0.80 - 0.20 = 0.60$ M. 3) $K_c = (0.40)^2/0.60 = 0.16/0.60 = 0.267 \\approx 0.27$.'
      }
    },
    {
      id: 'ic2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Solving for K — Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When all equilibrium concentrations are given, you',
            options: ['need an ICE table', 'need the quadratic formula', 'directly plug into the K expression', 'cannot find K']
          },
          {
            label: 'To find x when given initial and one equilibrium concentration, use',
            options: ['the K expression directly', 'the relationship E = I + C', 'the rate law', 'the ideal gas law']
          },
          {
            label: 'If $[\\text{A}]_0 = 1.00$ and $[\\text{A}]_{eq} = 0.70$, then $x$ equals',
            options: ['0.70', '0.30', '1.70', '1.00']
          }
        ],
        correctAnswers: ['directly plug into the K expression', 'the relationship E = I + C', '0.30', '0.300', '0.3'],
        hint1: 'All equilibrium values known → just substitute.',
        hint2: 'E = I + C allows you to find x from one known equilibrium value.',
        hint3: '$x = [\\text{A}]_0 - [\\text{A}]_{eq} = 1.00 - 0.70 = 0.30$.',
        explanation: 'With all equilibrium concentrations, plug directly into K. Use $E = I + C$ to find $x$. Here $x = 1.00 - 0.70 = 0.30$.'
      }
    },
    {
      id: 'ic2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Solving for K** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$, initial $[\\text{A}] = 1.00$ M, no B. At equilibrium, $[\\text{A}] = 0.75$ M. Find $K_c$.',
            options: [
              '$0.25$',
              '$0.33$',
              '$1.33$',
              '$0.083$'
            ],
            correctAnswer: 1,
            explanation: '$x = 1.00 - 0.75 = 0.25$. $[\\text{B}] = 2x = 0.50$ M. $K_c = \\frac{[\\text{B}]^2}{[\\text{A}]} = \\frac{(0.50)^2}{0.75} = \\frac{0.25}{0.75} = 0.333 \\approx 0.33$.'
          },
          {
            question: 'For $2\\,\\text{A}(g) \\rightleftharpoons \\text{B}(g)$, if $x = 0.10$ and $[\\text{A}]_0 = 0.50$ M, what is $[\\text{A}]$ at equilibrium?',
            options: [
              '$0.40$ M',
              '$0.30$ M',
              '$0.50$ M',
              '$0.20$ M'
            ],
            correctAnswer: 1,
            explanation: 'The coefficient of A is 2, so the change is $-2x = -0.20$. $[\\text{A}]_{eq} = 0.50 - 2(0.10) = 0.50 - 0.20 = 0.30$ M.'
          }
        ]
      }
    }
  ]
}
