export const calcbcAdvIntegrationPart6Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop — Advanced Integration

**Part 6 of 7 — Timed Practice**

Apply the full toolkit: $u$-sub, by parts, partial fractions, completing the square, inverse trig, and FTC.`
    },
    {
      id: 'ai6-mc',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x+1}{x^2+2x+5}\\,dx =$',
            options: ['$\\frac{1}{2}\\ln(x^2+2x+5) + C$', '$\\arctan\\frac{x+1}{2} + C$', '$\\frac{1}{2}\\ln(x^2+2x+5) + \\frac{1}{2}\\arctan\\frac{x+1}{2} + C$', '$(x+1)\\ln(x^2+2x+5) + C$'],
            correctAnswer: 0,
            explanation: 'Derivative of $x^2+2x+5$ is $2x+2 = 2(x+1)$. So $\\int \\frac{x+1}{x^2+2x+5}dx = \\frac{1}{2}\\ln(x^2+2x+5) + C$.'
          },
          {
            question: '$\\int x\\arctan x\\,dx$ requires:',
            options: ['Integration by parts with $u = \\arctan x$, $dv = x\\,dx$', '$u$-substitution', 'Partial fractions', 'Trig substitution'],
            correctAnswer: 0,
            explanation: 'Product of algebraic and inverse trig → by parts. LIATE rule: $\\arctan x$ before $x$.'
          },
          {
            question: '$\\int_0^2 |x - 1|\\,dx =$',
            options: ['$1$ (split at $x = 1$: $\\int_0^1 (1-x)dx + \\int_1^2 (x-1)dx = 1/2 + 1/2$)', '$0$', '$2$', '$3$'],
            correctAnswer: 0,
            explanation: 'Split at $x = 1$. Each piece gives $1/2$. Total $= 1$.'
          }
        ]
      }
    },
    {
      id: 'ai6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Multi-Step Problem**\n\nEvaluate $\\int \\frac{4x}{x^2 - 1}\\,dx$.',
      exercise: {
        dropdowns: [
          {
            label: 'First, factor the denominator:',
            options: ['$(x-1)(x+1)$', '$(x-1)^2$', '$(x+1)^2$', 'Irreducible'],
            correctAnswers: ['$(x-1)(x+1)$'],
            hints: ['Difference of squares.'],
            explanation: '$x^2 - 1 = (x-1)(x+1)$.'
          },
          {
            label: 'Partial fractions: $\\frac{4x}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$. Find $A$:',
            options: ['$A = 2$ (set $x = 1$: $4 = 2A$)', '$A = 4$', '$A = 1$', '$A = -2$'],
            correctAnswers: ['$A = 2$ (set $x = 1$: $4 = 2A$)'],
            hints: ['Cover-up: set $x = 1$ in $4x/(x+1) = 4/2 = 2$.'],
            explanation: '$x = 1$: $4(1)/(1+1) = 2$. So $A = 2$.'
          },
          {
            label: 'The integral equals:',
            options: ['$2\\ln|x-1| + 2\\ln|x+1| + C = 2\\ln|x^2-1| + C$', '$2\\ln|x-1| - 2\\ln|x+1| + C$', '$4\\ln|x^2-1| + C$', '$\\ln|x-1| + 3\\ln|x+1| + C$'],
            correctAnswers: ['$2\\ln|x-1| + 2\\ln|x+1| + C = 2\\ln|x^2-1| + C$'],
            hints: ['$B = 2$ also (set $x = -1$). Then integrate each fraction.'],
            explanation: '$A = 2$, $B = 2$. $\\int 2/(x-1) + 2/(x+1)\\,dx = 2\\ln|x-1| + 2\\ln|x+1| + C$.'
          }
        ]
      }
    },
    {
      id: 'ai6-input',
      type: 'input-box' as const,
      content: '**Quick Compute**',
      exercise: {
        question: '$\\int_0^{\\sqrt{3}} \\frac{dx}{1 + x^2}$. Give the exact answer. (Use pi for $\\pi$.)',
        correctAnswer: 'pi/3',
        acceptableAnswers: ['pi/3', 'π/3', '1.047', '1.0472'],
        hints: ['$[\\arctan x]_0^{\\sqrt{3}} = \\arctan(\\sqrt{3}) - 0 = \\pi/3$.'],
        explanation: '$\\arctan(\\sqrt{3}) = \\pi/3$.'
      }
    },
    {
      id: 'ai6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Check if numerator is derivative of denominator first (saves time)
- For absolute values, split the integral at the zero
- LIATE order for integration by parts: Logs, Inverse trig, Algebraic, Trig, Exponential
- Partial fractions: factor first, then decompose

**Next: Part 7 — Comprehensive Review**`
    }
  ]
};
