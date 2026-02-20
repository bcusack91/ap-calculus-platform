export const calcbcSeriesAppsPart7Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp7-intro',
      type: 'text' as const,
      content: `# Series Applications — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'sapp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{0.5} \\frac{\\sin x}{x}\\,dx$ to 3 terms:',
            options: ['$0.5 - (0.5)^3/18 + (0.5)^5/600 \\approx 0.4931$', '$0.5$', '$\\ln 2$', '$\\pi/6$'],
            correctAnswer: 0,
            explanation: '$\\sin x/x = 1 - x^2/6 + x^4/120 - \\cdots$. Integrate: $[x - x^3/18 + x^5/600]_0^{0.5}$.'
          }
        ]
      }
    },
    {
      id: 'sapp7-summary',
      type: 'text' as const,
      content: `### Series Applications — Complete! ✅`
    }
  ]
};
