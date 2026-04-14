export const calcbcPartialFracPart2Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf2-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 2 of 7 \u2014 Repeated Linear Factors**

When the denominator has a factor like $(x-a)^n$, you need $n$ separate terms with increasing powers in the denominator.`
    },
    {
      id: 'pf2-rule',
      type: 'text' as const,
      content: `### Setup for Repeated Factors

$$\\frac{P(x)}{(x-a)^n} = \\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\cdots + \\frac{A_n}{(x-a)^n}$$

### Example: $\\frac{3x+5}{(x+1)^2}$

$$\\frac{3x+5}{(x+1)^2} = \\frac{A}{x+1} + \\frac{B}{(x+1)^2}$$

Multiply through: $3x + 5 = A(x+1) + B$

| Method | Step | Result |
|--------|------|--------|
| Plug in $x = -1$ | $-3+5 = B$ | $B = 2$ |
| Compare $x$-coefficients | $3 = A$ | $A = 3$ |

$$\\frac{3x+5}{(x+1)^2} = \\frac{3}{x+1} + \\frac{2}{(x+1)^2}$$

### Integration

$$\\int \\frac{3x+5}{(x+1)^2}\\,dx = 3\\ln|x+1| - \\frac{2}{x+1} + C$$

> **Key Fact:** $\\int \\frac{A}{(x-a)^n}\\,dx = \\frac{A}{(1-n)(x-a)^{n-1}} + C$ for $n \\geq 2$.`
    },
    {
      id: 'pf2-mixed',
      type: 'text' as const,
      content: `### Mixed: Distinct + Repeated Factors

**Example:** $\\frac{x^2}{(x-1)(x+2)^2}$

$$= \\frac{A}{x-1} + \\frac{B}{x+2} + \\frac{C}{(x+2)^2}$$

$x^2 = A(x+2)^2 + B(x-1)(x+2) + C(x-1)$

| Substitution | Equation | Result |
|-------------|----------|--------|
| $x = 1$ | $1 = A(9)$ | $A = \\frac{1}{9}$ |
| $x = -2$ | $4 = C(-3)$ | $C = -\\frac{4}{3}$ |
| $x = 0$ | $0 = 4A - 2B - C = \\frac{4}{9} - 2B + \\frac{4}{3}$ | $B = \\frac{8}{9}$ |

$$\\boxed{\\frac{x^2}{(x-1)(x+2)^2} = \\frac{1/9}{x-1} + \\frac{8/9}{x+2} - \\frac{4/3}{(x+2)^2}}$$`
    },
    {
      id: 'pf2-mc1',
      type: 'multiple-choice' as const,
      content: '**Repeated Factors Practice**',
      exercise: {
        questions: [
          {
            question: 'How many constants are needed to decompose $\\frac{2x+1}{x^2(x-3)}$?',
            options: ['3', '2', '4', '1'],
            correctAnswer: 0,
            explanation: '$x^2$ is a repeated factor needing $\\frac{A}{x} + \\frac{B}{x^2}$, plus $\\frac{C}{x-3}$ for the distinct factor. Total: 3 constants.'
          },
          {
            question: 'For $\\frac{5}{(x-1)^2}$, the integral is:',
            options: [
              '$-\\frac{5}{x-1} + C$',
              '$5\\ln|x-1| + C$',
              '$\\frac{5}{x-1} + C$',
              '$\\frac{5}{2}\\ln(x-1)^2 + C$'
            ],
            correctAnswer: 0,
            explanation: '$\\int 5(x-1)^{-2}\\,dx = 5 \\cdot \\frac{(x-1)^{-1}}{-1} + C = -\\frac{5}{x-1} + C$.'
          }
        ]
      }
    },
    {
      id: 'pf2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Decomposition Setup**',
      exercise: {
        dropdowns: [
          {
            label: 'The correct partial fraction form for $\\frac{1}{x(x+1)^2}$ is:',
            options: [
              '$\\frac{A}{x} + \\frac{B}{x+1} + \\frac{C}{(x+1)^2}$',
              '$\\frac{A}{x} + \\frac{B}{(x+1)^2}$',
              '$\\frac{A}{x} + \\frac{Bx+C}{(x+1)^2}$'
            ],
            correctAnswers: ['$\\frac{A}{x} + \\frac{B}{x+1} + \\frac{C}{(x+1)^2}$'],
            hints: ['Repeated linear factor $(x+1)^2$ requires TWO terms: one with $(x+1)$ and one with $(x+1)^2$.'],
            explanation: 'Each power of the repeated factor gets its own constant: $\\frac{B}{x+1} + \\frac{C}{(x+1)^2}$.'
          },
          {
            label: 'For $\\frac{1}{x(x+1)^2}$, plugging $x = 0$ gives $A = $',
            options: ['$1$', '$-1$', '$0$', '$2$'],
            correctAnswers: ['$1$'],
            hints: ['$1 = A(x+1)^2 + B(x)(x+1) + Cx$. At $x=0$: $1 = A(1) = A$.'],
            explanation: 'Plug $x = 0$: $1 = A(0+1)^2 = A$. So $A = 1$.'
          }
        ]
      }
    },
    {
      id: 'pf2-input',
      type: 'input-box' as const,
      content: '**Finding Constants**',
      exercise: {
        question: 'For $\\frac{1}{x(x+1)^2} = \\frac{1}{x} + \\frac{B}{x+1} + \\frac{C}{(x+1)^2}$, multiply through: $1 = (x+1)^2 + Bx(x+1) + Cx$. Plug in $x = -1$ to find $C$. What is $C$?',
        correctAnswer: '-1',
        acceptableAnswers: ['-1', '-1.0'],
        hints: ['At $x = -1$: $1 = 0 + 0 + C(-1)$.', '$1 = -C$, so $C = -1$.'],
        explanation: 'At $x = -1$: $1 = (0)^2 + B(-1)(0) + C(-1) = -C$. Therefore $C = -1$.'
      }
    },
    {
      id: 'pf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

| Concept | Details |
|---------|---------|
| Repeated factor $(x-a)^n$ | Needs $n$ terms: $\\frac{A_1}{x-a} + \\cdots + \\frac{A_n}{(x-a)^n}$ |
| Integration | $\\int \\frac{A}{(x-a)^n}\\,dx = \\frac{A}{(1-n)(x-a)^{n-1}} + C$ for $n \\geq 2$ |
| Mixed problems | Combine distinct + repeated factor rules |
| Finding constants | Substitution at roots + coefficient comparison |

> **Coming Up:** Part 3 covers **irreducible quadratic factors** \u2014 denominators like $x^2 + 1$ that can\u2019t be factored further.`
    }
  ]
};
