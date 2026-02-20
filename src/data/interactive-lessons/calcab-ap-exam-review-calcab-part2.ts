export const calcabExamReviewPart2Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er2-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 2 of 7 — Derivatives Review**

### Must-Know Derivative Rules

| Function | Derivative |
|----------|-----------|
| $x^n$ | $nx^{n-1}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |
| $e^x$ | $e^x$ |
| $\\ln x$ | $1/x$ |
| $\\arcsin x$ | $1/\\sqrt{1-x^2}$ |
| $\\arctan x$ | $1/(1+x^2)$ |

Plus: Product Rule, Quotient Rule, Chain Rule`
    },
    {
      id: 'er2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Derivatives Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[x^2 \\sin x]$.',
            options: ['$2x\\sin x + x^2\\cos x$', '$2x\\cos x$', '$x^2\\cos x$', '$2x\\sin x$'],
            correctAnswer: 0,
            explanation: 'Product rule: $2x \\sin x + x^2 \\cos x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\ln(\\cos x)]$.',
            options: ['$-\\tan x$', '$\\frac{1}{\\cos x}$', '$-\\sec x$', '$\\tan x$'],
            correctAnswer: 0,
            explanation: '$\\frac{-\\sin x}{\\cos x} = -\\tan x$.'
          }
        ]
      }
    },
    {
      id: 'er2-summary',
      type: 'text' as const,
      content: `### Review — Part 2 Complete`
    }
  ]
};
