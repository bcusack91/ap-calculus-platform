export const calcbcPartialFracPart2Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf2-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 2 of 7 — Repeated Linear Factors**

### Repeated Factors

$$\\frac{f(x)}{(x-a)^n} = \\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \cdots + \\frac{A_n}{(x-a)^n}$$

### Example

$\\frac{3x+5}{(x+1)^2} = \\frac{A}{x+1} + \\frac{B}{(x+1)^2}$

$3x + 5 = A(x+1) + B$

$x = -1$: $2 = B$

Coefficient of $x$: $3 = A$

$$\int \left(\\frac{3}{x+1} + \\frac{2}{(x+1)^2}\\right)\,dx = 3\ln|x+1| - \\frac{2}{x+1} + C$$`
    },
    {
      id: 'pf2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Repeated Factors** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{5}{(x-2)^2}\\,dx = $',
            options: ['$-\\frac{5}{x-2} + C$', '$\\frac{5}{x-2} + C$', '$5\\ln|x-2| + C$', '$-\\frac{5}{2(x-2)^2} + C$'],
            correctAnswer: 0,
            explanation: '$\\int 5(x-2)^{-2}\\,dx = 5 \\cdot \\frac{(x-2)^{-1}}{-1} + C = -\\frac{5}{x-2} + C$.'
          }
        ]
      }
    },
    {
      id: 'pf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Repeated factor $(x-a)^n$ needs $n$ terms
2. Each term has increasing powers in the denominator`
    }
  ]
};
