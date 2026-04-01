export const calcabDefiniteIntegralsPart6Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int6-intro',
      type: 'text' as const,
      content: `# \u222B Problem-Solving Workshop

**Part 6 of 7 \u2014 Mixed Integration Problems**

This workshop combines Riemann sums, FTC, properties of integrals, and applications.`
    },
    {
      id: 'int6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Mixed Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $\\int_0^6 f(x)\\,dx = 15$ and $\\int_0^6 g(x)\\,dx = 7$, find $\\int_0^6 [3f(x) - 2g(x) + 4]\\,dx$.',
            options: ['$55$', '$31$', '$59$', '$45$'],
            correctAnswer: 0,
            explanation: '$3(15) - 2(7) + \\int_0^6 4\\,dx = 45 - 14 + 24 = 55$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_1^{x^3} \\frac{1}{1+t^2}\\,dt$.',
            options: ['$\\frac{1}{1+x^6}$', '$\\frac{3x^2}{1+x^6}$', '$\\frac{3x^2}{1+x^2}$', '$\\frac{x^3}{1+x^6}$'],
            correctAnswer: 1,
            explanation: 'FTC Part 1 + Chain Rule: $\\frac{1}{1+(x^3)^2} \\cdot 3x^2 = \\frac{3x^2}{1+x^6}$.'
          },
          {
            question: 'Evaluate $\\int_{-1}^{1} (x^4 + x^3)\\,dx$.',
            options: ['$\\frac{2}{5}$', '$0$', '$\\frac{2}{5} + 0$', '$\\frac{2}{5}$'],
            correctAnswer: 0,
            explanation: 'Split: $\\int_{-1}^1 x^4\\,dx + \\int_{-1}^1 x^3\\,dx$. $x^4$ is even: $2\\int_0^1 x^4\\,dx = 2 \\cdot \\frac{1}{5} = \\frac{2}{5}$. $x^3$ is odd: $\\int_{-1}^1 x^3\\,dx = 0$. Total: $\\frac{2}{5}$.'
          }
        ]
      }
    },
    {
      id: 'int6-quiz2',
      type: 'multiple-choice' as const,
      content: '**More Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A particle starts at position $s(0) = 2$ with velocity $v(t) = 3t^2 - 6t$. Find $s(3)$.',
            options: ['$2$', '$11$', '$-7$', '$5$'],
            correctAnswer: 0,
            explanation: '$s(3) = s(0) + \\int_0^3 v(t)\\,dt = 2 + [t^3 - 3t^2]_0^3 = 2 + (27 - 27) = 2$.'
          },
          {
            question: 'Evaluate $\\int_0^4 |x - 2|\\,dx$.',
            options: ['$0$', '$2$', '$4$', '$8$'],
            correctAnswer: 2,
            explanation: 'Split at $x = 2$: $\\int_0^2 (2-x)\\,dx + \\int_2^4 (x-2)\\,dx = [2x - \\frac{x^2}{2}]_0^2 + [\\frac{x^2}{2} - 2x]_2^4 = 2 + 2 = 4$.'
          }
        ]
      }
    },
    {
      id: 'int6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

You combined all definite integral tools: Riemann sums, FTC, properties, symmetry, and applications.`
    }
  ]
};
