export const calcabExamReviewPart1Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er1-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 1 of 7 — Limits & Continuity Review**

### Essential Limit Techniques

1. **Direct substitution** — always try first
2. **Factoring** — cancel common factors
3. **Rationalization** — multiply by conjugate
4. **L'Hopital's Rule** — for $0/0$ or $\infty/\infty$ forms
5. **Squeeze Theorem** — bound the function`
    },
    {
      id: 'er1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Limits Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 2} \\frac{x^2-4}{x-2}$.',
            options: ['$4$', '$0$', '$2$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\frac{(x-2)(x+2)}{x-2} = x+2 \\to 4$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.',
            options: ['$3$', '$0$', '$1$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x} \\to 3 \\cdot 1 = 3$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2}$.',
            options: ['$\\frac{3}{5}$', '$\\frac{1}{2}$', '$\\infty$', '$0$'],
            correctAnswer: 0,
            explanation: 'Same degree: ratio of leading coefficients = $3/5$.'
          }
        ]
      }
    },
    {
      id: 'er1-summary',
      type: 'text' as const,
      content: `### Review — Part 1 Complete`
    }
  ]
};
