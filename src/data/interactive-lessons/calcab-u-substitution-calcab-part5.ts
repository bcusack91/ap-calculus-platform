export const calcabUSubPart5Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub5-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 5 of 7 — Long Division & Completing the Square**

### Algebraic Manipulation Before Integrating

Some rational functions or quadratics need algebraic prep work BEFORE substitution. Two key techniques:

| Technique | When to Use | Goal |
|:---:|:---:|:---:|
| **Long division** | Degree of numerator $\\geq$ degree of denominator | Reduce to polynomial $+$ proper fraction |
| **Completing the square** | Irreducible quadratic in denominator | Create $\\arctan$ or $\\arcsin$ form |`
    },
    {
      id: 'usub5-longdiv',
      type: 'text' as const,
      content: `### Long Division for Improper Rational Functions

$$\\boxed{\\text{If } \\deg(\\text{num}) \\geq \\deg(\\text{denom}), \\text{ divide first!}}$$

**Example:** $\\int \\frac{x^2+1}{x+1}\\,dx$

Perform long division: $\\frac{x^2+1}{x+1} = x - 1 + \\frac{2}{x+1}$

$$\\int \\left(x - 1 + \\frac{2}{x+1}\\right)dx = \\frac{x^2}{2} - x + 2\\ln|x+1| + C$$

### Quick Division Patterns

| Fraction | After Division | Integral |
|:---:|:---:|:---:|
| $\\frac{x^2}{x+1}$ | $x - 1 + \\frac{1}{x+1}$ | $\\frac{x^2}{2} - x + \\ln|x+1| + C$ |
| $\\frac{x^3}{x^2+1}$ | $x - \\frac{x}{x^2+1}$ | $\\frac{x^2}{2} - \\frac{1}{2}\\ln(x^2+1) + C$ |
| $\\frac{2x+5}{x+2}$ | $2 + \\frac{1}{x+2}$ | $2x + \\ln|x+2| + C$ |

> **AP Tip:** If you see $\\frac{\\text{bigger polynomial}}{\\text{smaller polynomial}}$, long division is almost certainly the first step.`
    },
    {
      id: 'usub5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Long division practice.** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\frac{x^2+3}{x-1}$ after long division equals:',
            options: ['$x + 1 + \\frac{4}{x-1}$', '$x - 1 + \\frac{4}{x-1}$', '$x + 1 + \\frac{2}{x-1}$', '$x^2 + \\frac{3}{x-1}$'],
            correctAnswer: 0,
            explanation: '$x^2 \\div (x-1) = x+1$ remainder $4$. So $\\frac{x^2+3}{x-1} = x + 1 + \\frac{4}{x-1}$.'
          },
          {
            question: 'What is $\\int \\frac{x^2}{x-2}\\,dx$?',
            options: ['$\\frac{x^2}{2} + 2x + 4\\ln|x-2| + C$', '$x + 2\\ln|x-2| + C$', '$\\frac{x^2}{2} - 2x + 4\\ln|x-2| + C$', '$\\frac{x^3}{3} - 2\\ln|x-2| + C$'],
            correctAnswer: 0,
            explanation: '$\\frac{x^2}{x-2} = x + 2 + \\frac{4}{x-2}$. $\\int (x+2+\\frac{4}{x-2})\\,dx = \\frac{x^2}{2} + 2x + 4\\ln|x-2| + C$.'
          }
        ]
      }
    },
    {
      id: 'usub5-complete',
      type: 'text' as const,
      content: `### Completing the Square

When the denominator is a quadratic that doesn't factor nicely:

$$\\boxed{ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right)}$$

**Why?** This creates forms you know:

| Resulting Form | Integral |
|:---:|:---:|
| $\\frac{1}{u^2 + k^2}$ | $\\frac{1}{k}\\arctan\\frac{u}{k} + C$ |
| $\\frac{1}{\\sqrt{k^2 - u^2}}$ | $\\arcsin\\frac{u}{k} + C$ |

### Worked Example

$$\\int \\frac{1}{x^2 + 6x + 13}\\,dx$$

Complete the square: $x^2 + 6x + 13 = (x+3)^2 + 4$

$$\\int \\frac{1}{(x+3)^2 + 4}\\,dx$$

$u = x+3$, $du = dx$:

$$\\int \\frac{du}{u^2 + 2^2} = \\frac{1}{2}\\arctan\\frac{u}{2} + C = \\frac{1}{2}\\arctan\\frac{x+3}{2} + C$$`
    },
    {
      id: 'usub5-complete2',
      type: 'text' as const,
      content: `### More Completing the Square Examples

**Example 2:** $\\int \\frac{1}{\\sqrt{3-2x-x^2}}\\,dx$

Rewrite: $3-2x-x^2 = -(x^2+2x-3) = -(x^2+2x+1-4) = 4-(x+1)^2$

$$\\int \\frac{dx}{\\sqrt{4-(x+1)^2}} = \\arcsin\\frac{x+1}{2} + C$$

### Decision Guide

| Denominator | Complete the Square? | Result Type |
|:---:|:---:|:---:|
| $x^2 + bx + c$ (positive leading coeff, no real roots) | Yes | $\\arctan$ form |
| $c - bx - x^2$ (under square root, positive) | Yes | $\\arcsin$ form |
| Factors into $(x-r_1)(x-r_2)$ | Use partial fractions instead | $\\ln$ terms |

> **Key Fact:** If the quadratic has real roots, it factors — use partial fractions (BC topic). If it has no real roots, complete the square for $\\arctan$.`
    },
    {
      id: 'usub5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the technique.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{x^3 + 2}{x+1}\\,dx$ requires:',
            options: ['u-substitution only', 'Long division first', 'Completing the square', 'Inverse trig formula'],
            correctAnswers: ['Long division first'],
            hints: ['Degree of numerator (3) > degree of denominator (1).'],
            explanation: 'Improper fraction: divide $x^3+2$ by $x+1$ first, then integrate each term.'
          },
          {
            label: '$\\int \\frac{1}{x^2+4x+8}\\,dx$ requires:',
            options: ['u-substitution only', 'Long division first', 'Completing the square', 'Power rule'],
            correctAnswers: ['Completing the square'],
            hints: ['$x^2+4x+8 = (x+2)^2 + 4$. No real roots.'],
            explanation: '$(x+2)^2+4$: $\\frac{1}{2}\\arctan\\frac{x+2}{2}+C$.'
          },
          {
            label: '$\\int \\frac{2x+7}{x+3}\\,dx$ simplifies to:',
            options: ['$2 + \\frac{1}{x+3}$', '$2x + \\frac{7}{x+3}$', '$\\frac{2x}{x+3} + 7$', 'Cannot simplify'],
            correctAnswers: ['$2 + \\frac{1}{x+3}$'],
            hints: ['Divide $2x+7$ by $x+3$: $2(x+3) = 2x+6$, remainder $= 1$.'],
            explanation: '$\\frac{2x+7}{x+3} = 2 + \\frac{1}{x+3}$. Integral: $2x + \\ln|x+3| + C$.'
          }
        ]
      }
    },
    {
      id: 'usub5-input',
      type: 'input-box' as const,
      content: '**Combine techniques.** ✍️',
      exercise: {
        question: 'Evaluate $\\int_0^1 \\frac{x+3}{x+1}\\,dx$.\n\n(Give the exact answer in the form $a + \\ln b$ where $a$ and $b$ are integers.)',
        correctAnswer: '1 + 2ln2',
        acceptableAnswers: ['1 + 2ln2', '1+2ln2', '1 + 2ln(2)', '1+2ln(2)', '1 + 2 ln 2', '1 + 2 ln(2)'],
        hints: [
          'Long division: $\\frac{x+3}{x+1} = 1 + \\frac{2}{x+1}$.',
          '$\\int_0^1 \\left(1 + \\frac{2}{x+1}\\right)dx = [x + 2\\ln|x+1|]_0^1$.',
          '$(1 + 2\\ln 2) - (0 + 2\\ln 1) = 1 + 2\\ln 2$.'
        ],
        explanation: '$\\frac{x+3}{x+1} = 1 + \\frac{2}{x+1}$. $[x+2\\ln|x+1|]_0^1 = 1 + 2\\ln 2$.'
      }
    },
    {
      id: 'usub5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Technique | When | Result |
|:---:|:---:|:---:|
| Long division | $\\deg(\\text{num}) \\geq \\deg(\\text{denom})$ | Polynomial $+$ simple fraction |
| Complete the square | Irreducible quadratic | $\\arctan$ or $\\arcsin$ form |
| Factor & partial fractions | Reducible quadratic (BC only) | Sum of $\\ln$ terms |

> **Up Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
