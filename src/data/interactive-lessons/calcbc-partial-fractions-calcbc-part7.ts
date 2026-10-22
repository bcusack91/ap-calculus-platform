export const calcbcPartialFracPart7Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf7-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Review & Assessment**

### Complete Reference

| Denominator Type | Decomposition Form | Integration Result |
|-----------------|-------------------|-------------------|
| $(x-a)(x-b)$ distinct linear | $\\frac{A}{x-a} + \\frac{B}{x-b}$ | $A\\ln\\lvert x-a\\rvert + B\\ln\\lvert x-b\\rvert$ |
| Improper fraction | Quotient $+$ proper remainder | Polynomial $+$ logs |
| $x^2+a^2$ (does not factor) | No decomposition | $\\frac{1}{a}\\arctan\\frac{x}{a}$ |`
    },
    {
      id: 'pf7-mc1',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Conceptual**',
      exercise: {
        questions: [
          {
            question: 'How many constants are needed to decompose $\\frac{x^2+1}{x(x-1)(x+2)(x-3)}$?',
            options: ['4', '3', '2', '5'],
            correctAnswer: 0,
            explanation: 'The fraction is proper (degree 2 over degree 4) and has four distinct linear factors, so it needs one constant for each: $\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+2} + \\frac{D}{x-3}$.'
          },
          {
            question: 'Before decomposing $\\frac{x^4+1}{x^3-x}$, you must:',
            options: [
              'Perform polynomial long division',
              'Factor the denominator immediately',
              'Complete the square in the denominator',
              'Integrate by parts with $u = x^4 + 1$'
            ],
            correctAnswer: 0,
            explanation: 'Degree 4 > degree 3 means the fraction is improper. Always divide first; then factor the remainder\'s denominator $x^3 - x = x(x-1)(x+1)$ and decompose.'
          },
          {
            question: 'For $\\frac{5x-1}{(x+1)(x-2)} = \\frac{A}{x+1} + \\frac{B}{x-2}$, cover-up gives:',
            options: [
              '$A = 2$, $B = 3$',
              '$A = 3$, $B = 2$',
              '$A = -2$, $B = 3$',
              '$A = 2$, $B = -3$'
            ],
            correctAnswer: 0,
            explanation: 'At $x = -1$: $A = \\frac{-5-1}{-1-2} = 2$. At $x = 2$: $B = \\frac{10-1}{2+1} = 3$. Check: $A + B = 5$ matches the $x$-coefficient of the numerator. Swapping the values attaches them to the wrong factors, and each negative option comes from a sign slip in the covered-up denominator.'
          }
        ]
      }
    },
    {
      id: 'pf7-mc2',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Computational**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{3x+5}{(x+1)(x+2)}\\,dx = $',
            options: [
              '$2\\ln|x+1| + \\ln|x+2| + C$',
              '$3\\ln|x+1| + C$',
              '$\\ln|(x+1)(x+2)| + C$',
              '$2\\ln|x+1| - \\ln|x+2| + C$'
            ],
            correctAnswer: 0,
            explanation: 'Cover-up: $A = \\frac{3(-1)+5}{-1+2} = 2$, $B = \\frac{3(-2)+5}{-2+1} = \\frac{-1}{-1} = 1$. Result: $2\\ln|x+1| + \\ln|x+2| + C$.'
          },
          {
            question: '$\\int \\frac{1}{x^2+4}\\,dx = $',
            options: [
              '$\\frac{1}{2}\\arctan\\frac{x}{2} + C$',
              '$\\arctan\\frac{x}{2} + C$',
              '$\\frac{1}{4}\\arctan\\frac{x}{4} + C$',
              '$\\ln(x^2+4) + C$'
            ],
            correctAnswer: 0,
            explanation: '$\\int \\frac{1}{x^2+a^2}\\,dx = \\frac{1}{a}\\arctan\\frac{x}{a} + C$. With $a = 2$: $\\frac{1}{2}\\arctan\\frac{x}{2} + C$.'
          }
        ]
      }
    },
    {
      id: 'pf7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Method Selection Review**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{2x}{x^2-5x+6}\\,dx$: factor the denominator first. It factors as:',
            options: ['$(x-2)(x-3)$', '$(x-1)(x-6)$', '$(x+2)(x-3)$', '$(x-2)(x+3)$'],
            correctAnswers: ['$(x-2)(x-3)$'],
            hints: ['$x^2 - 5x + 6 = (x-2)(x-3)$. Check: $(-2)(-3) = 6$ and $-2+-3 = -5$.'],
            explanation: '$x^2 - 5x + 6 = (x-2)(x-3)$. Both factors are distinct and linear.'
          },
          {
            label: 'Continuing: $\\frac{2x}{(x-2)(x-3)}$. Using cover-up, $A$ (over $x-2$) equals:',
            options: ['$-4$', '$4$', '$-2$', '$6$'],
            correctAnswers: ['$-4$'],
            hints: ['Cover $(x-2)$, plug $x=2$: $\\frac{2(2)}{2-3} = \\frac{4}{-1}$.'],
            explanation: '$A = \\frac{2(2)}{2-3} = \\frac{4}{-1} = -4$.'
          },
          {
            label: 'And $B$ (over $x-3$) equals:',
            options: ['$6$', '$-6$', '$3$', '$-3$'],
            correctAnswers: ['$6$'],
            hints: ['Cover $(x-3)$, plug $x=3$: $\\frac{2(3)}{3-2} = \\frac{6}{1}$.'],
            explanation: '$B = \\frac{2(3)}{3-2} = 6$.'
          }
        ]
      }
    },
    {
      id: 'pf7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'Evaluate $\\int_0^{e-1} \\frac{3x+5}{(x+1)(x+2)}\\,dx$ using partial fractions. Give the value to three decimal places.',
        correctAnswer: '2.620',
        acceptableAnswers: ['2.620', '2.62', '2+ln((e+1)/2)'],
        hints: ['Partial fractions: $\\frac{3x+5}{(x+1)(x+2)} = \\frac{2}{x+1} + \\frac{1}{x+2}$.', 'The antiderivative $2\\ln|x+1| + \\ln|x+2|$ equals $2 + \\ln(e+1)$ at $x = e - 1$ and $\\ln 2$ at $x = 0$.'],
        explanation: 'Cover-up gives $A = \\frac{-3+5}{1} = 2$ and $B = \\frac{-6+5}{-1} = 1$. Then $[2\\ln|x+1| + \\ln|x+2|]_0^{e-1} = 2 + \\ln(e+1) - \\ln 2 = 2 + \\ln\\frac{e+1}{2} \\approx 2.620$.'
      }
    },
    {
      id: 'pf7-summary',
      type: 'text' as const,
      content: `### Partial Fractions \u2014 Complete! \u2705

You\u2019ve mastered:
1. \u2714 Distinct linear factor decomposition
2. \u2714 Cover-up checks and definite integrals with log answers
3. \u2714 Choosing between partial fractions, $u$-substitution, and arctangent
4. \u2714 Full integration workflow
5. \u2714 Long division for improper fractions
6. \u2714 Cover-up (Heaviside) method

### AP Exam Frequency

| PF Topic | On the AP BC exam? |
|----------|-------------------|
| Distinct linear factors | Yes (FUN-6.F.1) |
| Improper fraction (division first) | Yes: divide, then decompose |
| Repeated or non-factoring quadratic factors | No |

> **Key Fact:** Partial fractions is a BC-only integration technique (Topic 6.12). Together with integration by parts and improper integrals, it completes the AP BC integration toolkit.`
    }
  ]
};
