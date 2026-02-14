export const chemIceTablesCalculationsPart3Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic3-intro',
      type: 'text' as const,
      content: `
# 🧊 Solving for Equilibrium Concentrations Given K

**Part 3 of 7 — The Classic ICE Table Problem**

This is the most common ICE table scenario: you know K and the initial concentrations, and you need to find the equilibrium concentrations. This requires setting up and solving an algebraic equation.
      `
    },
    {
      id: 'ic3-method',
      type: 'text' as const,
      content: `
## General Method

1. Write the balanced equation and $K$ expression
2. Set up the ICE table with initial concentrations
3. Determine the direction of shift (usually $Q = 0 < K$, so shift right)
4. Express equilibrium concentrations in terms of $x$
5. Substitute into the $K$ expression
6. Solve for $x$
7. Calculate all equilibrium concentrations
8. **Check**: plug values back into K to verify

### Perfect-Square Shortcut

When the K expression can be written as a perfect square, take the square root of both sides to avoid the quadratic formula.

This works when: $K = \\frac{(\\text{something})^2}{(\\text{something else})^2}$
      `
    },
    {
      id: 'ic3-example1',
      type: 'text' as const,
      content: `
## Worked Example: Perfect-Square Case

$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, $K_c = 64.0$

Initial: $[\\text{H}_2] = 0.50$ M, $[\\text{I}_2] = 0.50$ M, $[\\text{HI}] = 0$

|  | H₂ | I₂ | HI |
|--|-----|-----|-----|
| **I** | 0.50 | 0.50 | 0 |
| **C** | $-x$ | $-x$ | $+2x$ |
| **E** | $0.50-x$ | $0.50-x$ | $2x$ |

$$64.0 = \\frac{(2x)^2}{(0.50-x)(0.50-x)} = \\frac{4x^2}{(0.50-x)^2}$$

Take the square root:

$$8.0 = \\frac{2x}{0.50-x}$$

$$8.0(0.50 - x) = 2x \\implies 4.0 - 8.0x = 2x \\implies 4.0 = 10.0x$$

$$x = 0.40$$

**Equilibrium concentrations:**
- $[\\text{H}_2] = [\\text{I}_2] = 0.50 - 0.40 = 0.10$ M
- $[\\text{HI}] = 2(0.40) = 0.80$ M

**Check:** $K = \\frac{(0.80)^2}{(0.10)(0.10)} = \\frac{0.64}{0.01} = 64.0$ ✓
      `
    },
    {
      id: 'ic3-example2',
      type: 'text' as const,
      content: `
## Worked Example: Quadratic Required

$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$, $K_c = 0.36$

Initial: $[\\text{N}_2\\text{O}_4] = 1.00$ M, $[\\text{NO}_2] = 0$

|  | N₂O₄ | NO₂ |
|--|-------|------|
| **I** | 1.00 | 0 |
| **C** | $-x$ | $+2x$ |
| **E** | $1.00 - x$ | $2x$ |

$$0.36 = \\frac{(2x)^2}{1.00 - x} = \\frac{4x^2}{1.00 - x}$$

$$0.36(1.00 - x) = 4x^2$$

$$0.36 - 0.36x = 4x^2$$

$$4x^2 + 0.36x - 0.36 = 0$$

Using the quadratic formula: $x = \\frac{-0.36 \\pm \\sqrt{(0.36)^2 + 4(4)(0.36)}}{2(4)}$

$$x = \\frac{-0.36 \\pm \\sqrt{0.1296 + 5.76}}{8} = \\frac{-0.36 \\pm \\sqrt{5.8896}}{8} = \\frac{-0.36 \\pm 2.427}{8}$$

Taking the positive root: $x = \\frac{-0.36 + 2.427}{8} = \\frac{2.067}{8} = 0.258$

**Equilibrium:** $[\\text{N}_2\\text{O}_4] = 0.742$ M, $[\\text{NO}_2] = 0.516$ M
      `
    },
    {
      id: 'ic3-practice-quiz',
      type: 'multiple-choice' as const,
      content: `
**Setting Up the Algebra** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{A} \\rightleftharpoons \\text{B}$, $K = 4.0$, $[\\text{A}]_0 = 1.0$ M, $[\\text{B}]_0 = 0$. The equation to solve is:',
            options: [
              '$4.0 = \\frac{x}{1.0 - x}$',
              '$4.0 = \\frac{1.0 - x}{x}$',
              '$4.0 = \\frac{x}{1.0 + x}$',
              '$4.0 = x(1.0 - x)$'
            ],
            correctAnswer: 0,
            explanation: '$K = \\frac{[\\text{B}]}{[\\text{A}]} = \\frac{x}{1.0 - x} = 4.0$. Products (B = $x$) over reactants (A = $1.0 - x$).'
          },
          {
            question: 'Solving $4.0 = \\frac{x}{1.0 - x}$, what is $x$?',
            options: [
              '$0.20$',
              '$0.50$',
              '$0.80$',
              '$4.0$'
            ],
            correctAnswer: 2,
            explanation: '$4.0(1.0 - x) = x \\implies 4.0 - 4.0x = x \\implies 4.0 = 5.0x \\implies x = 0.80$.'
          }
        ]
      }
    },
    {
      id: 'ic3-practice-input',
      type: 'input-boxes' as const,
      content: `
**Practice: Solve an ICE Table** 🧮

$\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, $K_c = 0.25$

Initial: $[\\text{A}] = 1.00$ M, $[\\text{B}] = [\\text{C}] = 0$

|  | A | B | C |
|--|---|---|---|
| I | 1.00 | 0 | 0 |
| C | $-x$ | $+x$ | $+x$ |
| E | $1.00-x$ | $x$ | $x$ |

$$0.25 = \\frac{x \\cdot x}{1.00 - x} = \\frac{x^2}{1.00 - x}$$

1) Rearrange to standard quadratic form: $x^2 + 0.25x - 0.25 = 0$. Using the quadratic formula, $x = ?$ (Round to 2 decimal places)

2) What is $[\\text{A}]$ at equilibrium? (Round to 2 decimal places)

3) What is $[\\text{B}]$ at equilibrium? (Round to 2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.39', '0.61', '0.39'],
        hint1: '$x = \\frac{-0.25 + \\sqrt{0.0625 + 1.00}}{2} = \\frac{-0.25 + \\sqrt{1.0625}}{2} = \\frac{-0.25 + 1.031}{2}$',
        hint2: '$[\\text{A}] = 1.00 - x = 1.00 - 0.39 = 0.61$',
        hint3: '$[\\text{B}] = x = 0.39$',
        explanation: '$x = \\frac{-0.25 + \\sqrt{1.0625}}{2} = \\frac{-0.25 + 1.031}{2} = \\frac{0.781}{2} = 0.39$. $[\\text{A}] = 1.00 - 0.39 = 0.61$ M. $[\\text{B}] = [\\text{C}] = 0.39$ M. Check: $K = (0.39)^2/0.61 = 0.15/0.61 = 0.25$ ✓'
      }
    },
    {
      id: 'ic3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Problem-Solving Strategy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When the K expression is a perfect square, you can avoid the quadratic by',
            options: ['multiplying both sides by K', 'taking the square root of both sides', 'ignoring x', 'setting K = 0']
          },
          {
            label: 'After solving for x, you should always',
            options: ['assume x is correct', 'check by plugging back into K', 'round x to 1 digit', 'solve again']
          },
          {
            label: 'If you get a negative value of x, it means',
            options: ['the answer is correct with a sign change', 'you assumed the wrong direction of shift', 'K is wrong', 'the reaction doesn\'t occur']
          }
        ],
        correctAnswers: [
          'taking the square root of both sides',
          'check by plugging back into K',
          'you assumed the wrong direction of shift'
        ],
        hint1: 'Perfect square: $K = (\\text{something}/\\text{something else})^2$ → take square root.',
        hint2: 'Always verify: plug equilibrium concentrations back into K expression.',
        hint3: 'A negative x suggests the reaction actually shifts the other way.',
        explanation: 'Perfect squares allow the square root shortcut. Always verify by plugging back into K. A negative x means you assumed the wrong shift direction — reverse the signs in the C row.'
      }
    },
    {
      id: 'ic3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Solving for Equilibrium Concentrations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{A} \\rightleftharpoons 2\\,\\text{B}$, $K = 1.0$, $[\\text{A}]_0 = 1.0$ M, $[\\text{B}]_0 = 0$. The equilibrium expression $K = \\frac{(2x)^2}{1.0 - x}$ gives:',
            options: [
              '$4x^2 + x - 1.0 = 0$',
              '$4x^2 - x + 1.0 = 0$',
              '$x^2 + x - 1.0 = 0$',
              '$4x^2 = 1.0$'
            ],
            correctAnswer: 0,
            explanation: '$1.0 = \\frac{4x^2}{1.0 - x} \\implies 1.0 - x = 4x^2 \\implies 4x^2 + x - 1.0 = 0$.'
          },
          {
            question: 'When you solve an ICE table and find $x > [\\text{A}]_0$, this means:',
            options: [
              'The answer is physically reasonable',
              'You made an error or assumed the wrong direction of shift',
              'K must be very large',
              'The reaction goes to completion'
            ],
            correctAnswer: 1,
            explanation: 'If $x > [\\text{A}]_0$, then $[\\text{A}]_{eq} = [\\text{A}]_0 - x < 0$, which is impossible. This indicates an error in the setup or an incorrect assumption about the shift direction.'
          }
        ]
      }
    }
  ]
}
