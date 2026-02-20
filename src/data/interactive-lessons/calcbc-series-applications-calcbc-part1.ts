export const calcbcSeriesAppsPart1Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp1-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 1 of 7 — Approximating Functions**

### Why Series Matter

Taylor series let us:
1. Approximate transcendental functions with polynomials
2. Evaluate limits that are otherwise indeterminate
3. Compute integrals with no closed-form antiderivative
4. Solve differential equations

### Example: Approximating $e$

$$e = e^1 = \sum_{n=0}^{\infty}\frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \cdots \approx 2.71828$$`
    },
    {
      id: 'sapp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Approximation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Approximate $\\sqrt{e}$ using the first 3 terms of $e^{1/2}$.',
            options: ['$1 + 1/2 + 1/8 = 1.625$', '$1 + 1/2 = 1.5$', '$e/2 \\approx 1.36$', '$1.5 + 1/6 = 1.667$'],
            correctAnswer: 0,
            explanation: '$e^{0.5} \\approx 1 + 0.5 + (0.5)^2/2 = 1 + 0.5 + 0.125 = 1.625$. (Actual: $1.6487...$)'
          }
        ]
      }
    },
    {
      id: 'sapp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Series provide polynomial approximations to transcendental functions.`
    }
  ]
};
