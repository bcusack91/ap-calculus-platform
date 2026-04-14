export const calcbcAdvIntegrationPart3Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai3-intro',
      type: 'text' as const,
      content: `# Algebraic Manipulation Before Integration

**Part 3 of 7 — Simplify First, Integrate Second**

### Long Division for Improper Rational Functions

When $\\deg(\\text{numerator}) \\ge \\deg(\\text{denominator})$, divide first:

$$\\int \\frac{x^2 + 1}{x - 1}\\,dx$$

**Long division:** $\\frac{x^2 + 1}{x - 1} = x + 1 + \\frac{2}{x-1}$

$$\\int \\left(x + 1 + \\frac{2}{x-1}\\right)dx = \\frac{x^2}{2} + x + 2\\ln|x-1| + C$$

> **Key Fact:** Never attempt partial fractions on an improper fraction. Always divide first.`
    },
    {
      id: 'ai3-complete',
      type: 'text' as const,
      content: `### Completing the Square

Essential for integrals with irreducible quadratics:

$$\\int \\frac{dx}{x^2 + 6x + 13}$$

**Complete the square:** $x^2 + 6x + 13 = (x+3)^2 + 4$

$$\\int \\frac{dx}{(x+3)^2 + 4} = \\frac{1}{2}\\arctan\\frac{x+3}{2} + C$$

### When to Complete the Square

| Denominator form | Completed form | Integral type |
|-----------------|---------------|---------------|
| $x^2 + bx + c$ (no real roots) | $(x + b/2)^2 + (c - b^2/4)$ | $\\arctan$ |
| $-(x^2 + bx + c)$ under $\\sqrt{}$ | $a^2 - (x + b/2)^2$ | $\\arcsin$ |

> **AP Tip:** If the quadratic in the denominator doesn't factor over the reals, complete the square.`
    },
    {
      id: 'ai3-splitting',
      type: 'text' as const,
      content: `### Splitting Numerators

Sometimes split the numerator to match derivative + constant:

$$\\int \\frac{2x + 5}{x^2 + 4}\\,dx$$

Split: $\\frac{2x}{x^2+4} + \\frac{5}{x^2+4}$

$$= \\int \\frac{2x}{x^2+4}\\,dx + \\int \\frac{5}{x^2+4}\\,dx$$

$$= \\ln(x^2+4) + \\frac{5}{2}\\arctan\\frac{x}{2} + C$$

The first integral uses $u = x^2 + 4$ (numerator is derivative of denominator).
The second is an $\\arctan$ form.

### Adding/Subtracting in the Numerator

$$\\int \\frac{x}{x+1}\\,dx = \\int \\frac{(x+1) - 1}{x+1}\\,dx = \\int \\left(1 - \\frac{1}{x+1}\\right)dx = x - \\ln|x+1| + C$$`
    },
    {
      id: 'ai3-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x^3}{x+2}\\,dx$ requires:',
            options: ['Long division first (degree 3 ÷ degree 1)', 'Partial fractions directly', '$u$-substitution with $u = x + 2$', 'Integration by parts'],
            correctAnswer: 0,
            explanation: '$\\deg(3) > \\deg(1)$. Divide: $x^3/(x+2) = x^2 - 2x + 4 - 8/(x+2)$.'
          },
          {
            question: '$\\int \\frac{dx}{x^2 - 4x + 13}$. After completing the square:',
            options: ['$\\frac{1}{3}\\arctan\\frac{x-2}{3} + C$', '$\\arctan(x-2) + C$', '$\\ln|x^2 - 4x + 13| + C$', '$\\frac{1}{13}\\arctan(x/13) + C$'],
            correctAnswer: 0,
            explanation: '$x^2 - 4x + 13 = (x-2)^2 + 9$. So $\\int du/(u^2+9) = \\frac{1}{3}\\arctan(u/3) + C$ with $u = x-2$.'
          },
          {
            question: '$\\int \\frac{3x + 1}{x^2 + 1}\\,dx$ splits into:',
            options: ['$\\frac{3}{2}\\ln(x^2+1) + \\arctan x + C$', '$\\ln(3x+1) + \\arctan x + C$', '$(3x+1)\\arctan x + C$', '$3\\arctan x + \\ln|x^2+1| + C$'],
            correctAnswer: 0,
            explanation: '$\\int \\frac{3x}{x^2+1}dx + \\int \\frac{1}{x^2+1}dx = \\frac{3}{2}\\ln(x^2+1) + \\arctan x + C$.'
          }
        ]
      }
    },
    {
      id: 'ai3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Step-by-Step**\n\nEvaluate $\\int \\frac{dx}{x^2 + 2x + 5}$.',
      exercise: {
        dropdowns: [
          {
            label: 'Complete the square: $x^2 + 2x + 5 =$',
            options: ['$(x+1)^2 + 4$', '$(x+2)^2 + 1$', '$(x+1)^2 + 5$', '$(x+1)^2 + 3$'],
            correctAnswers: ['$(x+1)^2 + 4$'],
            hints: ['$x^2 + 2x + 1 + 4 = (x+1)^2 + 4$.'],
            explanation: '$x^2 + 2x + 5 = (x^2 + 2x + 1) + 4 = (x+1)^2 + 4$.'
          },
          {
            label: 'The integral becomes $\\int \\frac{du}{u^2 + 4}$ with $u = x+1$, giving:',
            options: ['$\\frac{1}{2}\\arctan\\frac{x+1}{2} + C$', '$\\arctan(x+1) + C$', '$\\frac{1}{4}\\arctan\\frac{x+1}{4} + C$', '$\\frac{1}{2}\\arctan(x+1) + C$'],
            correctAnswers: ['$\\frac{1}{2}\\arctan\\frac{x+1}{2} + C$'],
            hints: ['$\\int du/(u^2+a^2) = \\frac{1}{a}\\arctan(u/a) + C$ with $a = 2$.'],
            explanation: '$\\frac{1}{2}\\arctan\\frac{u}{2} + C = \\frac{1}{2}\\arctan\\frac{x+1}{2} + C$.'
          }
        ]
      }
    },
    {
      id: 'ai3-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: '$\\int \\frac{x}{x-3}\\,dx$. Rewrite as $\\frac{(x-3)+3}{x-3}$ and integrate. Give the antiderivative. (Use ln for natural log.)',
        correctAnswer: 'x + 3ln|x-3| + C',
        acceptableAnswers: ['x + 3ln|x-3| + C', 'x+3ln|x-3|+C', 'x + 3*ln|x-3| + C'],
        hints: ['$\\frac{x}{x-3} = 1 + \\frac{3}{x-3}$.'],
        explanation: '$\\int (1 + 3/(x-3))\\,dx = x + 3\\ln|x-3| + C$.'
      }
    },
    {
      id: 'ai3-summary',
      type: 'text' as const,
      content: `### Pre-Integration Techniques

| Technique | When to use |
|-----------|-------------|
| Long division | $\\deg(\\text{num}) \\ge \\deg(\\text{den})$ |
| Complete the square | Irreducible quadratic in denominator |
| Split numerator | Numerator has $ax + b$ over quadratic |
| Add/subtract trick | Make numerator match denominator |

$$\\boxed{\\text{Simplify the integrand BEFORE choosing an integration method}}$$

**Next: Part 4 — Definite Integrals and Accumulation Problems**`
    }
  ]
};
