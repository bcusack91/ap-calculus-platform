export const calcbcReviewPart7Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev7-intro',
      type: 'text' as const,
      content: `# BC Review & Connections — Final

**Part 7 of 7 — You're Ready!**

### What You've Mastered

- Limits, continuity, and the definition of derivative
- All differentiation rules and applications
- All integration techniques (including BC-exclusive)
- Differential equations (separable, Euler, logistic)
- Parametric, polar, and vector calculus
- Sequences, series, and convergence tests
- Taylor/Maclaurin series and error bounds
- Applications: area, volume, arc length, accumulation

**You are prepared for the AP Calculus BC exam. Good luck! 🎓**`
    },
    {
      id: 'rev7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Question** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $\\sum_{n=0}^{\\infty} \\frac{1}{n!}$?',
            options: ['$e$', '$\\pi$', '$\\infty$', '$1$'],
            correctAnswer: 0,
            explanation: 'This is $e^1 = e \\approx 2.71828...$. You know this!'
          }
        ]
      }
    },
    {
      id: 'rev7-summary',
      type: 'text' as const,
      content: `### AP Calculus BC — Complete! 🎓✅

You have completed all interactive lessons for AP Calculus BC. Go ace that exam!`
    }
  ]
};
