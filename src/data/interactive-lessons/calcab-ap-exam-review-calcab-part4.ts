export const calcabExamReviewPart4Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er4-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 4 of 7 — Integration Review**

### Essential Integrals

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$

$$\\int e^x\\,dx = e^x + C$$

$$\\int \\sin x\\,dx = -\\cos x + C$$

$$\\int \\cos x\\,dx = \\sin x + C$$

$$\\int \\sec^2 x\\,dx = \\tan x + C$$`
    },
    {
      id: 'er4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi} (2\\cos x + 3)\\,dx$.',
            options: ['$3\\pi$', '$2\\pi$', '$3\\pi + 2$', '$6$'],
            correctAnswer: 0,
            explanation: '$[2\\sin x + 3x]_0^{\\pi} = (0 + 3\\pi) - (0) = 3\\pi$.'
          },
          {
            question: 'Find $\\int \\frac{2x}{x^2+1}\\,dx$.',
            options: ['$\\ln(x^2+1) + C$', '$\\arctan x + C$', '$\\frac{1}{x^2+1} + C$', '$2\\ln(x^2+1) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2+1$, $du = 2x\\,dx$. $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2+1) + C$.'
          }
        ]
      }
    },
    {
      id: 'er4-summary',
      type: 'text' as const,
      content: `### Review — Part 4 Complete`
    }
  ]
};
