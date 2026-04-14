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
| $(x-a)$ distinct | $\\frac{A}{x-a}$ | $A\\ln|x-a|$ |
| $(x-a)^n$ repeated | $\\frac{A_1}{x-a} + \\cdots + \\frac{A_n}{(x-a)^n}$ | log + power terms |
| $x^2+a^2$ irreducible | $\\frac{Bx+C}{x^2+a^2}$ | $\\frac{B}{2}\\ln(x^2+a^2) + \\frac{C}{a}\\arctan\\frac{x}{a}$ |`
    },
    {
      id: 'pf7-mc1',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Conceptual**',
      exercise: {
        questions: [
          {
            question: 'How many constants are needed to decompose $\\frac{1}{(x-1)^2(x^2+4)}$?',
            options: ['4', '3', '2', '5'],
            correctAnswer: 0,
            explanation: '$(x-1)^2$ needs $\\frac{A}{x-1} + \\frac{B}{(x-1)^2}$ (2 constants). $x^2+4$ needs $\\frac{Cx+D}{x^2+4}$ (2 constants). Total: 4.'
          },
          {
            question: 'Before decomposing $\\frac{x^4+1}{x^3-x}$, you must:',
            options: [
              'Perform long division (deg 4 > deg 3)',
              'Factor the denominator immediately',
              'Complete the square',
              'Apply IBP'
            ],
            correctAnswer: 0,
            explanation: 'Degree 4 > degree 3 means the fraction is improper. Always divide first.'
          },
          {
            question: 'The cover-up (Heaviside) method works directly for:',
            options: [
              'Distinct linear factors only',
              'All factor types',
              'Repeated factors only',
              'Irreducible quadratics only'
            ],
            correctAnswer: 0,
            explanation: 'Cover-up works by setting $x$ equal to the root of a linear factor and reading off the constant. It doesn\u2019t work directly for repeated or quadratic factors.'
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
        question: 'Evaluate $\\int \\frac{3x+5}{(x+1)(x+2)}\\,dx$ at $x = e - 1$ minus the value at $x = 0$. That is: $\\int_0^{e-1} \\frac{3x+5}{(x+1)(x+2)}\\,dx$. Using $2\\ln|x+1| + \\ln|x+2|$, evaluate: $[2\\ln|x+1| + \\ln|x+2|]_0^{e-1}$. At $x = e-1$: $2\\ln e + \\ln(e+1) = 2 + \\ln(e+1)$. At $x = 0$: $0 + \\ln 2$. The answer is $2 + \\ln\\frac{e+1}{2}$. Approximately, if $e \\approx 2.718$, what integer is closest to this value?',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: ['$\\ln\\frac{e+1}{2} \\approx \\ln\\frac{3.718}{2} \\approx \\ln(1.859) \\approx 0.62$.', '$2 + 0.62 \\approx 2.62$. Closest integer: $3$.'],
        explanation: '$2 + \\ln\\frac{e+1}{2} \\approx 2 + 0.62 = 2.62$. The closest integer is $3$.'
      }
    },
    {
      id: 'pf7-summary',
      type: 'text' as const,
      content: `### Partial Fractions \u2014 Complete! \u2705

You\u2019ve mastered:
1. \u2714 Distinct linear factor decomposition
2. \u2714 Repeated linear factors
3. \u2714 Irreducible quadratic factors
4. \u2714 Full integration workflow
5. \u2714 Long division for improper fractions
6. \u2714 Cover-up (Heaviside) method

### AP Exam Frequency

| PF Topic | Likelihood on AP BC |
|----------|-------------------|
| Simple distinct linear | Very common (MC + FRQ) |
| Repeated factors | Occasional |
| Irreducible quadratic | Less common but tested |
| Improper fraction (division first) | Common trap question |

> **Key Fact:** Partial fractions is one of the BC-only integration techniques. Combined with IBP and trig substitution, it\u2019s essential for the full AP BC integration toolkit.`
    }
  ]
};
