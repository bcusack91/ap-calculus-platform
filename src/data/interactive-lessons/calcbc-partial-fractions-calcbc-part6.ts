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
| Numerator a multiple of the denominator’s derivative? | $u$-substitution instead |
| Quadratic denominator that does not factor? | Arctangent (complete the square if needed) |`
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
            question: '$\\int \\frac{x+4}{x^2+x-2}\\,dx = $',
            options: [
              '$\\frac{5}{3}\\ln|x-1| - \\frac{2}{3}\\ln|x+2| + C$',
              '$\\frac{5}{3}\\ln|x-1| + \\frac{2}{3}\\ln|x+2| + C$',
              '$\\frac{2}{3}\\ln|x-1| - \\frac{5}{3}\\ln|x+2| + C$',
              '$\\ln|x^2+x-2| + C$'
            ],
            correctAnswer: 0,
            explanation: '$x^2+x-2 = (x-1)(x+2)$. Cover-up: $A = \\frac{1+4}{1+2} = \\frac{5}{3}$ and $B = \\frac{-2+4}{-2-1} = -\\frac{2}{3}$. A plus sign drops the negative from $-2 - 1$, swapping the constants attaches each to the wrong factor, and $\\ln|x^2+x-2|$ would need the numerator $2x + 1$.'
          },
          {
            question: 'Before applying partial fractions to $\\frac{x^3+x}{x^2-4}$, you must first:',
            options: [
              'Perform polynomial long division',
              'Factor the denominator as $(x-2)(x+2)$ and decompose',
              'Complete the square in the denominator',
              'Substitute $u = x^2 - 4$ for the whole fraction'
            ],
            correctAnswer: 0,
            explanation: 'deg(3) > deg(2), so the fraction is improper and must be divided first: $\\frac{x^3+x}{x^2-4} = x + \\frac{5x}{x^2-4}$. Only then factor $x^2 - 4$ and decompose the proper remainder.'
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
            question: '$\\int_1^2 \\frac{2}{x(x+2)}\\,dx = $',
            options: [
              '$\\ln\\frac{3}{2}$',
              '$\\ln\\frac{2}{3}$',
              '$2\\ln\\frac{3}{2}$',
              '$\\ln\\frac{1}{2}$'
            ],
            correctAnswer: 0,
            explanation: 'Cover-up: $A = \\frac{2}{0+2} = 1$ and $B = \\frac{2}{-2} = -1$, so the antiderivative is $\\ln\\left|\\frac{x}{x+2}\\right|$. Then $\\ln\\frac{2}{4} - \\ln\\frac{1}{3} = \\ln\\frac{3}{2}$. Reversing the signs of $A$ and $B$ gives $\\ln\\frac{2}{3}$, skipping the division by the other factor gives $A = 2$ and doubles the answer, and $\\ln\\frac{1}{2}$ evaluates only the upper limit.'
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
            options: ['Rewriting as $(x+3)^{-2}$, then power rule', 'Partial fractions with distinct factors', 'Completing the square for arctan', 'u-substitution with $u = x^2+6x+9$'],
            correctAnswers: ['Rewriting as $(x+3)^{-2}$, then power rule'],
            hints: ['$x^2+6x+9 = (x+3)^2$. This is a repeated factor, but with just one term \u2014 no decomposition needed.'],
            explanation: '$x^2+6x+9 = (x+3)^2$, so $\\int (x+3)^{-2}\\,dx = -\\frac{1}{x+3} + C$. No partial fractions needed! There are no distinct factors, completing the square gives $(x+3)^2 + 0$ (no arctan form), and $u = x^2+6x+9$ fails because the numerator is not $2x+6$.'
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
        question: 'For $\\frac{x^2+1}{x^2-1} = 1 + \\frac{2}{(x-1)(x+1)}$, the partial fraction of $\\frac{2}{(x-1)(x+1)}$ gives $A = \\frac{2}{1-(-1)} = 1$ and $B = \\frac{2}{-1-1} = -1$. What is $\\int_2^3 \\frac{x^2+1}{x^2-1}\\,dx$? Give the value to three decimal places.',
        correctAnswer: '1.405',
        acceptableAnswers: ['1.405', '1.4055', '1+ln(3/2)', '1 + ln(3/2)', '1+ln1.5'],
        hints: ['At $x=3$: $3 + \\ln 2 - \\ln 4$. At $x=2$: $2 + 0 - \\ln 3$.', 'Difference: $1 + \\ln 2 - \\ln 4 + \\ln 3 = 1 + \\ln\\frac{6}{4} = 1 + \\ln\\frac{3}{2}$.', '$\\ln\\frac{3}{2} \\approx 0.405$.'],
        explanation: '$[x + \\ln|x-1| - \\ln|x+1|]_2^3 = (3 + \\ln 2 - \\ln 4) - (2 + 0 - \\ln 3) = 1 + \\ln\\frac{3}{2} \\approx 1.405$.'
      }
    },
    {
      id: 'pf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

| Common Mistake | How to Avoid |
|---------------|-------------|
| Forgetting long division | Always check degrees first |
| Decomposing when $u$-sub works | Check for $\\frac{f'(x)}{f(x)}$ first |
| Sign errors in cover-up | Double-check by plugging back in |
| Missing absolute values | $\\ln\\lvert x-a\\rvert$, not $\\ln(x-a)$ |

> **Coming Up:** Part 7 is the **comprehensive review and assessment** covering all partial fraction techniques.`
    }
  ]
};
