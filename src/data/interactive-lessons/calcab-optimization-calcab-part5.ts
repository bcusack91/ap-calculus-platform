export const calcabOptimizationPart5Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt5-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 5 of 7 — Distance & Angle Optimization**

### Minimizing Travel Distance

A lifeguard at point $A$ on the beach must reach a swimmer at point $B$ in the water. She runs on sand at 8 m/s and swims at 2 m/s. Where should she enter the water?

This uses **Snell's Law**: the optimal path has $\\frac{\\sin \\theta_1}{v_1} = \\frac{\\sin \\theta_2}{v_2}$.

### Optimization with Trigonometry

When angles are involved, express the objective function using trig and differentiate.`
    },
    {
      id: 'opt5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A wire of length 20 is cut into two pieces. One is bent into a square, the other into a circle. What length should be used for the circle to minimize total area?',
            options: ['$\\frac{20\\pi}{\\pi + 4}$', '$10$', '$\\frac{20}{\\pi + 4}$', '$0$ (all for the square)'],
            correctAnswer: 0,
            explanation: 'Let $x$ = length for circle. Circle: $r = \\frac{x}{2\\pi}$, $A_c = \\frac{x^2}{4\\pi}$. Square: side $= \\frac{20-x}{4}$, $A_s = \\frac{(20-x)^2}{16}$. $A\' = \\frac{x}{2\\pi} - \\frac{20-x}{8} = 0$. Solving: $x = \\frac{20\\pi}{\\pi + 4}$.'
          }
        ]
      }
    },
    {
      id: 'opt5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \\u2014 Part 5
1. Some optimization problems involve geometry with angles or paths
2. Set up the objective function carefully, then use standard calculus techniques`
    }
  ]
};
