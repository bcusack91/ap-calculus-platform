export const calcbcPowerSeriesPart3Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow3-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 3 of 7 — Differentiation & Integration of Power Series**

### Term-by-Term Differentiation

$$f(x) = \sum c_n x^n \implies f'(x) = \sum n c_n x^{n-1}$$

**Same radius $R$** (endpoints may change!)

### Term-by-Term Integration

$$\int f(x)\,dx = C + \sum \frac{c_n x^{n+1}}{n+1}$$

**Same radius $R$** (endpoints may change!)`
    },
    {
      id: 'pow3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Diff/Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}$, then $f\'(x) = $',
            options: ['$\\sum_{n=1}^{\\infty} nx^{n-1} = \\frac{1}{(1-x)^2}$', '$\\sum_{n=0}^{\\infty} x^{n-1}$', '$\\frac{-1}{(1-x)^2}$', '$\\sum_{n=0}^{\\infty} nx^n$'],
            correctAnswer: 0,
            explanation: 'Differentiate term-by-term: $\\sum nx^{n-1}$. Also $\\frac{d}{dx}\\frac{1}{1-x} = \\frac{1}{(1-x)^2}$.'
          }
        ]
      }
    },
    {
      id: 'pow3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Differentiate and integrate term-by-term. Radius stays the same.`
    }
  ]
};
