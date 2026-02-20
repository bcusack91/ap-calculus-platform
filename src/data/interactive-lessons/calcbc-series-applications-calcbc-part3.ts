export const calcbcSeriesAppsPart3Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp3-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 3 of 7 — Integration via Series**

### Integrals with No Elementary Antiderivative

$$\int e^{-x^2}\,dx = \int \sum \frac{(-1)^n x^{2n}}{n!}\,dx = C + \sum \frac{(-1)^n x^{2n+1}}{n!(2n+1)}$$

$$\int \frac{\sin x}{x}\,dx = \int \sum \frac{(-1)^n x^{2n}}{(2n+1)!}\,dx = C + \sum \frac{(-1)^n x^{2n+1}}{(2n+1)(2n+1)!}$$`
    },
    {
      id: 'sapp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'Approximate $\\int_0^1 e^{-x^2}\\,dx$ using first 3 terms.',
            options: ['$1 - 1/3 + 1/10 = 0.7667$', '$1 - 1/2 + 1/6 = 0.6667$', '$1 - 1/3 + 1/6 = 0.8333$', '$0.5$'],
            correctAnswer: 0,
            explanation: '$\\int_0^1 (1 - x^2 + x^4/2)\\,dx = [x - x^3/3 + x^5/10]_0^1 = 1 - 1/3 + 1/10 = 23/30 \\approx 0.7667$.'
          }
        ]
      }
    },
    {
      id: 'sapp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Series turn impossible integrals into routine polynomial integrations.`
    }
  ]
};
