export const calcbcPartialFracPart3Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf3-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 3 of 7 \u2014 Irreducible Quadratic Factors**

When the denominator contains a quadratic that can\u2019t be factored over the reals (discriminant < 0), the numerator in that partial fraction must be LINEAR, not constant.`
    },
    {
      id: 'pf3-rule',
      type: 'text' as const,
      content: `### Setup Rule

For an irreducible quadratic factor $(ax^2 + bx + c)$:

$$\\frac{P(x)}{(x - r)(ax^2 + bx + c)} = \\frac{A}{x - r} + \\frac{Bx + C}{ax^2 + bx + c}$$

The numerator over the quadratic is $Bx + C$ (not just a constant $B$).

### Why Linear Numerator?

A quadratic factor has degree 2, so its partial fraction numerator must have degree at most 1 (one less than the factor\u2019s degree). This ensures enough unknowns for a unique decomposition.

> **Key Fact:** \u201cIrreducible\u201d means $b^2 - 4ac < 0$. Examples: $x^2 + 1$, $x^2 + 4$, $x^2 + x + 1$.`
    },
    {
      id: 'pf3-example',
      type: 'text' as const,
      content: `### Worked Example: $\\int \\frac{x+2}{(x-1)(x^2+1)}\\,dx$

**Step 1:** Decompose
$$\\frac{x+2}{(x-1)(x^2+1)} = \\frac{A}{x-1} + \\frac{Bx+C}{x^2+1}$$

**Step 2:** Multiply through: $x+2 = A(x^2+1) + (Bx+C)(x-1)$

| Method | Result |
|--------|--------|
| $x = 1$: $3 = 2A$ | $A = \\frac{3}{2}$ |
| $x = 0$: $2 = A - C = \\frac{3}{2} - C$ | $C = -\\frac{1}{2}$ |
| $x$-coefficients: $0 = A + B - C$... wait, compare $x^2$: $0 = A + B$ | $B = -\\frac{3}{2}$ |

**Step 3:** Integrate each piece

$$\\int \\frac{3/2}{x-1}\\,dx = \\frac{3}{2}\\ln|x-1|$$

$$\\int \\frac{-\\frac{3}{2}x - \\frac{1}{2}}{x^2+1}\\,dx = -\\frac{3}{4}\\ln(x^2+1) - \\frac{1}{2}\\arctan x$$

$$\\boxed{\\frac{3}{2}\\ln|x-1| - \\frac{3}{4}\\ln(x^2+1) - \\frac{1}{2}\\arctan x + C}$$`
    },
    {
      id: 'pf3-integration',
      type: 'text' as const,
      content: `### Integrating $\\frac{Bx + C}{x^2 + a^2}$

Split into two integrals:

$$\\int \\frac{Bx + C}{x^2 + a^2}\\,dx = B \\int \\frac{x}{x^2+a^2}\\,dx + C\\int \\frac{1}{x^2+a^2}\\,dx$$

| Integral | Result |
|----------|--------|
| $\\int \\frac{x}{x^2+a^2}\\,dx$ | $\\frac{1}{2}\\ln(x^2+a^2) + C$ (u-sub) |
| $\\int \\frac{1}{x^2+a^2}\\,dx$ | $\\frac{1}{a}\\arctan\\frac{x}{a} + C$ |

> **AP Tip:** Always split the numerator into an $x$-part (which gives logarithmic) and a constant part (which gives arctangent).`
    },
    {
      id: 'pf3-mc1',
      type: 'multiple-choice' as const,
      content: '**Irreducible Quadratic Practice**',
      exercise: {
        questions: [
          {
            question: 'The correct decomposition form for $\\frac{3}{(x+1)(x^2+4)}$ is:',
            options: [
              '$\\frac{A}{x+1} + \\frac{Bx+C}{x^2+4}$',
              '$\\frac{A}{x+1} + \\frac{B}{x^2+4}$',
              '$\\frac{Ax+B}{x+1} + \\frac{C}{x^2+4}$',
              '$\\frac{A}{x+1} + \\frac{B}{x+2} + \\frac{C}{x-2}$'
            ],
            correctAnswer: 0,
            explanation: '$x^2+4$ is irreducible (discriminant $= 0 - 16 < 0$), so its numerator must be linear: $Bx + C$.'
          },
          {
            question: 'For $\\frac{3}{(x+1)(x^2+4)}$, using cover-up at $x = -1$: $A = $',
            options: ['$\\frac{3}{5}$', '$\\frac{1}{5}$', '$3$', '$\\frac{3}{4}$'],
            correctAnswer: 0,
            explanation: 'Cover $(x+1)$, plug in $x=-1$: $A = \\frac{3}{(-1)^2+4} = \\frac{3}{5}$.'
          }
        ]
      }
    },
    {
      id: 'pf3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Integration Technique**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{x}{x^2+9}\\,dx$ is solved by:',
            options: ['u-substitution ($u = x^2+9$)', 'Arctan formula', 'Partial fractions', 'IBP'],
            correctAnswers: ['u-substitution ($u = x^2+9$)'],
            hints: ['The numerator $x$ is (up to a constant) the derivative of the denominator.'],
            explanation: '$u = x^2+9$, $du = 2x\\,dx$. Result: $\\frac{1}{2}\\ln(x^2+9) + C$.'
          },
          {
            label: '$\\int \\frac{1}{x^2+9}\\,dx$ is solved by:',
            options: ['u-substitution', 'Arctan formula ($\\frac{1}{a}\\arctan\\frac{x}{a}$)', 'Partial fractions', 'IBP'],
            correctAnswers: ['Arctan formula ($\\frac{1}{a}\\arctan\\frac{x}{a}$)'],
            hints: ['This matches $\\int \\frac{1}{x^2+a^2}\\,dx$ with $a = 3$.'],
            explanation: '$\\frac{1}{3}\\arctan\\frac{x}{3} + C$.'
          }
        ]
      }
    },
    {
      id: 'pf3-input',
      type: 'input-box' as const,
      content: '**Coefficient Finding**',
      exercise: {
        question: 'For $\\frac{x+2}{(x-1)(x^2+1)} = \\frac{3/2}{x-1} + \\frac{Bx+C}{x^2+1}$, compare $x^2$ coefficients on both sides: $0 = A + B = \\frac{3}{2} + B$. What is $B$?',
        correctAnswer: '-3/2',
        acceptableAnswers: ['-3/2', '-1.5'],
        hints: ['$0 = \\frac{3}{2} + B$, so $B = -\\frac{3}{2}$.'],
        explanation: '$B = -\\frac{3}{2}$. Then from constant terms: $2 = A - C = \\frac{3}{2} - C$, giving $C = -\\frac{1}{2}$.'
      }
    },
    {
      id: 'pf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

| Concept | Details |
|---------|---------|
| Irreducible quadratic | $b^2 - 4ac < 0$; needs $\\frac{Bx+C}{ax^2+bx+c}$ |
| Integration split | Separate $Bx$ part (log) from $C$ part (arctan) |
| Key formulas | $\\int \\frac{x}{x^2+a^2}\\,dx = \\frac{1}{2}\\ln(x^2+a^2)$ |
| | $\\int \\frac{1}{x^2+a^2}\\,dx = \\frac{1}{a}\\arctan\\frac{x}{a}$ |

> **Coming Up:** Part 4 puts it all together \u2014 full **integration with partial fractions** from start to finish.`
    }
  ]
};
