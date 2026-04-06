export const calcbcIntByPartsPart2Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp2-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 2 of 7 — Tabular Method**

### The Tabular (Column) Method

For $\int (\\text{polynomial}) \cdot (\\text{easy to integrate})\,dx$:

| Sign | Differentiate | Integrate |
|------|--------------|-----------|
| $+$ | $x^2$ | $e^x$ |
| $-$ | $2x$ | $e^x$ |
| $+$ | $2$ | $e^x$ |
| $-$ | $0$ | $e^x$ |

Result: $x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$

Multiply diagonally and alternate signs!`
    },
    {
      id: 'ibp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tabular Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use tabular integration for $\\int x^3 e^{2x}\\,dx$. What is the coefficient of $e^{2x}$ in the result?',
            options: ['$\\frac{x^3}{2} - \\frac{3x^2}{4} + \\frac{3x}{4} - \\frac{3}{8}$', '$x^3 - 3x^2 + 6x - 6$', '$\\frac{x^3}{2} - \\frac{3x^2}{2} + 3x - 3$', '$x^3 - x^2 + x - 1$'],
            correctAnswer: 0,
            explanation: 'Tabular with $v\' = e^{2x}$: each integration divides by 2. Result: $e^{2x}(\\frac{x^3}{2} - \\frac{3x^2}{4} + \\frac{3x}{4} - \\frac{3}{8}) + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Tabular method is fast for polynomial × exponential/trig
2. Alternate signs: $+, -, +, -, ...$
3. Multiply diagonally across columns`
    }
  ]
};
