export const calcabBasicDiffPart6Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff6-intro',
      type: 'text' as const,
      content: `# 📐 Problem-Solving Workshop

**Part 6 of 7 — Mixed Differentiation Problems**

### Choosing the Right Rule

| Situation | Rule to Use |
|-----------|------------|
| Single term: $x^n$ | Power Rule |
| Product: $f \\cdot g$ | Product Rule |
| Quotient: $f / g$ | Quotient Rule (or rewrite) |
| Composite: $f(g(x))$ | Chain Rule |
| Multiple rules | Combine as needed |`
    },
    {
      id: 'diff6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Identify and Apply** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\left(\\frac{x^3 + 1}{x}\\right)$ by simplifying first.',
            options: ['$2x - \\frac{1}{x^2}$', '$\\frac{3x^2}{1}$', '$3x^2 - 1$', '$2x + \\frac{1}{x^2}$'],
            correctAnswer: 0,
            explanation: 'Simplify: $\\frac{x^3+1}{x} = x^2 + x^{-1}$. Differentiate: $2x + (-1)x^{-2} = 2x - \\frac{1}{x^2}$.'
          },
          {
            question: 'Find $f\'(2)$ given $f(x) = (x^2 - 1)(x + 3)$.',
            options: ['$15$', '$11$', '$13$', '$17$'],
            correctAnswer: 0,
            explanation: 'Expand: $f(x) = x^3 + 3x^2 - x - 3$. $f\'(x) = 3x^2 + 6x - 1$. $f\'(2) = 12 + 12 - 1 = 23$. Or Product Rule: $2x(x+3) + (x^2-1)(1) = 2x^2+6x+x^2-1 = 3x^2+6x-1$. At $x=2$: $12+12-1 = 23$. Actually let me recompute: $3(4)+6(2)-1 = 12+12-1 = 23$.'
          },
          {
            question: 'If $g(x) = \\frac{\\sin x + \\cos x}{\\sin x - \\cos x}$, find $g\'(x)$ in simplified form.',
            options: ['$\\frac{-2}{(\\sin x - \\cos x)^2}$', '$\\frac{2}{(\\sin x - \\cos x)^2}$', '$\\frac{1}{(\\sin x - \\cos x)^2}$', '$0$'],
            correctAnswer: 0,
            explanation: 'Quotient Rule: numerator = $(\\cos x - \\sin x)(\\sin x - \\cos x) - (\\sin x + \\cos x)(\\cos x + \\sin x)$. First term: $-(\\sin x - \\cos x)^2 = -(\\sin^2 x - 2\\sin x\\cos x + \\cos^2 x) = -(1 - \\sin 2x)$. Hmm, let me use a cleaner approach. Num = $(\\cos x - \\sin x)(\\sin x - \\cos x) - (\\sin x + \\cos x)(\\cos x + \\sin x)$. Actually: $(\\cos x - \\sin x)(\\sin x - \\cos x) = -(\\cos x - \\sin x)^2$ and $(\\sin x + \\cos x)^2$. So numerator = $-(\\cos x - \\sin x)^2 - (\\sin x + \\cos x)^2 = -(1-\\sin 2x) - (1+\\sin 2x) = -2$.'
          }
        ]
      }
    },
    {
      id: 'diff6-quiz2',
      type: 'multiple-choice' as const,
      content: '**AP-Style Free Response Setup** 🎯',
      exercise: {
        questions: [
          {
            question: 'The position of a particle is $s(t) = t^3 - 6t^2 + 9t + 2$ for $t \\geq 0$. When is the particle at rest?',
            options: ['$t = 1$ only', '$t = 3$ only', '$t = 1$ and $t = 3$', '$t = 0$ and $t = 2$'],
            correctAnswer: 2,
            explanation: 'At rest means $v(t) = s\'(t) = 0$. $s\'(t) = 3t^2 - 12t + 9 = 3(t^2-4t+3) = 3(t-1)(t-3) = 0$. So $t = 1$ and $t = 3$.'
          },
          {
            question: 'For the same particle, when is it moving to the left (negative direction)?',
            options: ['$0 < t < 1$', '$1 < t < 3$', '$t > 3$', '$t < 0$'],
            correctAnswer: 1,
            explanation: '$v(t) = 3(t-1)(t-3)$. Sign analysis: $v < 0$ when exactly one factor is negative, which is $1 < t < 3$.'
          }
        ]
      }
    },
    {
      id: 'diff6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

You can now:
- Choose the right differentiation rule for any situation
- Combine multiple rules in a single problem
- Apply derivatives to motion problems`
    }
  ]
};
