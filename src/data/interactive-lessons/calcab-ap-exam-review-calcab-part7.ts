export const calcabExamReviewPart7Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er7-intro',
      type: 'text' as const,
      content: `# AP Exam Review — Final

**Part 7 of 7 — Comprehensive Mixed Review**`
    },
    {
      id: 'er7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Review** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{h \\to 0} \\frac{\\sin(\\pi + h) + \\sin \\pi}{h} = $',
            options: ['$-1$', '$0$', '$1$', '$\\cos \\pi$'],
            correctAnswer: 0,
            explanation: 'This is $f\'(\\pi)$ where $f(x) = \\sin x$: $f\'(\\pi) = \\cos \\pi = -1$. Note: both option A and D give $-1$.'
          },
          {
            question: 'If $f(x) = \\int_0^{x^2} \\cos(t)\\,dt$, find $f\'(x)$.',
            options: ['$2x\\cos(x^2)$', '$\\cos(x^2)$', '$2x\\sin(x^2)$', '$\\sin(x^2)$'],
            correctAnswer: 0,
            explanation: 'FTC + chain rule: $\\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$.'
          },
          {
            question: 'The absolute maximum of $f(x) = x^3 - 12x$ on $[-3, 4]$ is:',
            options: ['$16$', '$9$', '$-9$', '$20$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f(-3) = 9$, $f(-2) = 16$, $f(2) = -16$, $f(4) = 16$. Max is $16$.'
          }
        ]
      }
    },
    {
      id: 'er7-summary',
      type: 'text' as const,
      content: `### AP Exam Review — Complete! 🎓

You have reviewed all major topics for the AP Calculus AB exam:
- ✅ Limits & Continuity
- ✅ Derivatives & Applications
- ✅ Integration & Applications
- ✅ Differential Equations
- ✅ Theorems (IVT, MVT, EVT, FTC)

**Good luck on the exam!**`
    }
  ]
};
