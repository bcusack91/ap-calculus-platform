export const calcabAccumulationPart3Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc3-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 3 of 7 \u2014 FTC Part 1 with Chain Rule Review**

### Chain Rule Variant

$$\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)$$

### Both Limits Variable

$$\\frac{d}{dx}\\int_{h(x)}^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x) - f(h(x)) \\cdot h'(x)$$`
    },
    {
      id: 'acc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**FTC with Chain Rule** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\int_0^{\\sin x} t^2\\,dt$.',
            options: ['$\\sin^2(x) \\cos(x)$', '$\\sin^2(x)$', '$\\cos^2(x)$', '$2\\sin(x)\\cos(x)$'],
            correctAnswer: 0,
            explanation: '$f(t) = t^2$, $g(x) = \\sin x$, $g\'(x) = \\cos x$. Answer: $(\\sin x)^2 \\cdot \\cos x = \\sin^2(x)\\cos(x)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_{2x}^{x^2} e^t\\,dt$.',
            options: ['$2xe^{x^2} - 2e^{2x}$', '$e^{x^2} - e^{2x}$', '$2xe^{x^2} + 2e^{2x}$', '$e^{x^2}(2x-2)$'],
            correctAnswer: 0,
            explanation: 'Upper: $g(x) = x^2$ gives $e^{x^2} \\cdot 2x$. Lower: $h(x) = 2x$ gives $e^{2x} \\cdot 2$. Total: $2xe^{x^2} - 2e^{2x}$.'
          }
        ]
      }
    },
    {
      id: 'acc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3
1. Both limits variable: subtract the lower limit contribution
2. Each limit contributes: $f(\\text{limit}) \\cdot \\text{limit derivative}$`
    }
  ]
};
