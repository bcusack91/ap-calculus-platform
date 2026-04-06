export const calcbcImproperPart3Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp3-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 3 of 7 — Discontinuous Integrands (Type 2)**

### Type 2: Vertical Asymptotes

If $f$ has a vertical asymptote at $x = c$ inside $[a, b]$:

$$\int_a^b f(x)\,dx = \lim_{t \\to c^-}\int_a^t f(x)\,dx + \lim_{t \\to c^+}\int_t^b f(x)\,dx$$

### Example

$\int_0^1 \\frac{1}{\sqrt{x}}\,dx = \lim_{t \\to 0^+}\int_t^1 x^{-1/2}\,dx = \lim_{t \\to 0^+}[2\sqrt{x}]_t^1 = 2 - 0 = 2$`
    },
    {
      id: 'imp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Discontinuous Integrands** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_0^1 \\frac{1}{x}\\,dx$ converge?',
            options: ['No, it diverges', 'Yes, to $1$', 'Yes, to $\\ln 1 = 0$', 'Yes, to $\\infty$'],
            correctAnswer: 0,
            explanation: '$\\lim_{t \\to 0^+}[\\ln x]_t^1 = 0 - \\lim_{t \\to 0^+}\\ln t = -(-\\infty) = \\infty$. Diverges.'
          },
          {
            question: 'Evaluate $\\int_0^4 \\frac{1}{\\sqrt{4-x}}\\,dx$.',
            options: ['$4$', '$2$', '$\\infty$', '$0$'],
            correctAnswer: 0,
            explanation: 'Asymptote at $x = 4$. $\\lim_{t \\to 4^-}[-2\\sqrt{4-x}]_0^t = \\lim_{t \\to 4^-}(-2\\sqrt{4-t}+2\\cdot 2) = 0 + 4 = 4$.'
          }
        ]
      }
    },
    {
      id: 'imp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Check for vertical asymptotes inside the interval
2. Split and use limits from the appropriate side`
    }
  ]
};
