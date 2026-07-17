export const calcbcPartialFracPart6Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf6-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 6 of 7 \u2014 Problem-Solving Workshop**

Mixed practice combining all partial fraction techniques. For each problem, decide: Is it proper? What type of factors? Then decompose and integrate.

### Decision Guide

| Question | If Yes... |
|----------|-----------|
| Is deg(num) $\\geq$ deg(den)? | Long division first |
| All distinct linear factors? | $\\frac{A}{x-a} + \\frac{B}{x-b} + \\ldots$ |
| Repeated linear factor $(x-a)^n$? | Add terms through $(x-a)^n$ |
| Irreducible quadratic $ax^2+bx+c$? | Use $\\frac{Bx+C}{ax^2+bx+c}$ |`
    },
    {
      id: 'pf6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Round 1**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{3}{x^2-9}\\,dx = $',
            options: [
              '$\\frac{1}{2}\\ln\\left|\\frac{x-3}{x+3}\\right| + C$',
              '$\\frac{1}{3}\\ln|x^2-9| + C$',
              '$\\frac{3}{2}\\ln\\left|\\frac{x-3}{x+3}\\right| + C$',
              '$\\arctan\\frac{x}{3} + C$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{3}{(x-3)(x+3)} = \\frac{1/2}{x-3} - \\frac{1/2}{x+3}$. Cover-up: $A = \\frac{3}{6} = \\frac{1}{2}$, $B = \\frac{3}{-6} = -\\frac{1}{2}$. Result: $\\frac{1}{2}\\ln\\left|\\frac{x-3}{x+3}\\right| + C$.'
          },
          {
            question: '$\\int \\frac{x}{(x+1)^2}\\,dx = $',
            options: [
              '$\\ln|x+1| + \\frac{1}{x+1} + C$',
              '$\\frac{x}{x+1} + C$',
              '$\\ln|x+1| - \\frac{1}{x+1} + C$',
              '$-\\frac{x}{(x+1)^2} + C$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{x}{(x+1)^2} = \\frac{A}{x+1} + \\frac{B}{(x+1)^2}$. Multiply: $x = A(x+1) + B$. At $x=-1$: $B = -1$. Coefficients: $A = 1$. So $\\int \\frac{1}{x+1} - \\frac{1}{(x+1)^2}\\,dx = \\ln|x+1| + \\frac{1}{x+1} + C$.'
          },
          {
            question: 'Before applying partial fractions to $\\frac{x^3+x}{x^2-4}$, you must first:',
            options: [
              'Perform polynomial long division',
              'Factor the denominator',
              'Complete the square',
              'Apply u-substitution'
            ],
            correctAnswer: 0,
            explanation: 'deg(3) > deg(2), so the fraction is improper. Long division: $\\frac{x^3+x}{x^2-4} = x + \\frac{5x}{x^2-4}$.'
          }
        ]
      }
    },
    {
      id: 'pf6-mc2',
      type: 'multiple-choice' as const,
      content: '**Workshop Round 2**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{1}{x(x^2+1)}\\,dx = $',
            options: [
              '$\\ln|x| - \\frac{1}{2}\\ln(x^2+1) + C$',
              '$\\ln|x| + \\arctan x + C$',
              '$\\ln|x| - \\ln(x^2+1) + C$',
              '$\\ln|x| - \\arctan x + C$'
            ],
            correctAnswer: 0,
            explanation: 'Decompose: $\\frac{1}{x} + \\frac{Bx+C}{x^2+1}$. Multiply: $1 = (x^2+1) + (Bx+C)x$. At $x=0$: $A = 1$. Coefficients of $x^2$: $0 = 1 + B$, so $B = -1$. Coefficients of $x$: $C = 0$. Integral: $\\ln|x| - \\frac{1}{2}\\ln(x^2+1) + C$.'
          }
        ]
      }
    },
    {
      id: 'pf6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Technique Identification**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{dx}{x^2+6x+9}$ is best approached by:',
            options: ['Recognizing $(x+3)^2$ and using power rule', 'Partial fractions with distinct factors', 'Completing the square for arctan', 'u-substitution'],
            correctAnswers: ['Recognizing $(x+3)^2$ and using power rule'],
            hints: ['$x^2+6x+9 = (x+3)^2$. This is a repeated factor, but with just one term \u2014 no decomposition needed.'],
            explanation: '$\\int (x+3)^{-2}\\,dx = -\\frac{1}{x+3} + C$. No partial fractions needed!'
          },
          {
            label: '$\\int \\frac{x^2+1}{x^2-1}\\,dx$ requires which first step?',
            options: ['Long division', 'Partial fractions directly', 'u-substitution', 'Trig substitution'],
            correctAnswers: ['Long division'],
            hints: ['Both numerator and denominator have degree 2 \u2014 the fraction is improper.'],
            explanation: '$\\frac{x^2+1}{x^2-1} = 1 + \\frac{2}{x^2-1}$. Then decompose $\\frac{2}{(x-1)(x+1)}$.'
          }
        ]
      }
    },
    {
      id: 'pf6-input',
      type: 'input-box' as const,
      content: '**Workshop Challenge**',
      exercise: {
        question: 'For $\\frac{x^2+1}{x^2-1} = 1 + \\frac{2}{(x-1)(x+1)}$, the partial fraction of $\\frac{2}{(x-1)(x+1)}$ gives $A = \\frac{2}{1-(-1)} = 1$ and $B = \\frac{2}{-1-1} = -1$. What is $\\int_2^3 \\frac{x^2+1}{x^2-1}\\,dx$? Using the antiderivative $x + \\ln|x-1| - \\ln|x+1|$, the result is $1 + \\ln\\frac{a}{b}$ where $\\frac{a}{b}$ is fully reduced. What is $a + b$?',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: ['At $x=3$: $3 + \\ln 2 - \\ln 4$. At $x=2$: $2 + 0 - \\ln 3$.', 'Difference: $1 + \\ln 2 - \\ln 4 + \\ln 3 = 1 + \\ln\\frac{6}{4} = 1 + \\ln\\frac{3}{2}$.', '$a = 3$, $b = 2$, so $a + b = 5$.'],
        explanation: '$[x + \\ln|x-1| - \\ln|x+1|]_2^3 = (3 + \\ln 2 - \\ln 4) - (2 + 0 - \\ln 3) = 1 + \\ln\\frac{3}{2}$. So $a = 3$, $b = 2$, $a+b = 5$.'
      }
    },
    {
      id: 'pf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

| Common Mistake | How to Avoid |
|---------------|-------------|
| Forgetting long division | Always check degrees first |
| Wrong decomposition form | Repeated: need all powers; quadratic: need $Bx+C$ |
| Sign errors in cover-up | Double-check by plugging back in |
| Missing absolute values | $\\ln|x-a|$, not $\\ln(x-a)$ |

> **Coming Up:** Part 7 is the **comprehensive review and assessment** covering all partial fraction techniques.`
    }
  ]
};
