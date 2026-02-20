export const calcbcReviewPart2Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev2-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 2 of 7 — Derivative Rules Summary**

### Must-Know Derivatives

| $f(x)$ | $f'(x)$ |
|---------|---------|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ |
| $\arctan x$ | $1/(1+x^2)$ |

Plus: product rule, quotient rule, chain rule!`
    },
    {
      id: 'rev2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}[e^{\\sin x}] = $',
            options: ['$e^{\\sin x}\\cos x$', '$e^{\\cos x}$', '$\\cos x \\cdot e^x$', '$e^{\\sin x}/\\cos x$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $e^{\\sin x} \\cdot \\cos x$.'
          }
        ]
      }
    },
    {
      id: 'rev2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Know all basic derivative formulas cold. Chain rule applies to all of them.`
    }
  ]
};
