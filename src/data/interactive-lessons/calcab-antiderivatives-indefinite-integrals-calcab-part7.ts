export const calcabAntiderivativesPart7Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti7-intro',
      type: 'text' as const,
      content: `# Antiderivatives — Review

**Part 7 of 7 — Comprehensive Assessment**`
    },
    {
      id: 'anti7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\left(\\frac{2}{\\sqrt{x}} + 4x^3 - \\sin x\\right)\\,dx$.',
            options: ['$4\\sqrt{x} + x^4 + \\cos x + C$', '$4\\sqrt{x} + x^4 - \\cos x + C$', '$\\frac{1}{\\sqrt{x}} + x^4 + \\cos x + C$', '$4\\sqrt{x} + 4x^4 + \\cos x + C$'],
            correctAnswer: 0,
            explanation: '$\\int 2x^{-1/2}\\,dx = 4x^{1/2} = 4\\sqrt{x}$. $\\int 4x^3 = x^4$. $\\int -\\sin x = \\cos x$. Total: $4\\sqrt{x} + x^4 + \\cos x + C$.'
          },
          {
            question: 'A particle has acceleration $a(t) = 6t$ with $v(0) = -5$ and $s(0) = 2$. Find $s(2)$.',
            options: ['$0$', '$-2$', '$6$', '$4$'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 5$. $s(t) = t^3 - 5t + 2$. $s(2) = 8 - 10 + 2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'anti7-summary',
      type: 'text' as const,
      content: `### Antiderivatives — Complete! ✅

You have mastered:
- ✅ Power Rule for integration
- ✅ All basic antiderivative formulas
- ✅ Initial Value Problems
- ✅ Rewriting before integrating
- ✅ Inverse trig antiderivatives`
    }
  ]
};
