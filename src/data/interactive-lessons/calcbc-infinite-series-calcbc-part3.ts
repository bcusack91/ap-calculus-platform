export const calcbcSeriesPart3Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser3-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 3 of 7 — Integral Test & $p$-Series**

### Integral Test

If $f$ is positive, continuous, decreasing for $x \geq 1$, and $a_n = f(n)$:

$$\sum_{n=1}^{\infty} a_n \text{ and } \int_1^{\infty} f(x)\,dx \text{ either both converge or both diverge}$$

### $p$-Series

$$\sum_{n=1}^{\infty} \frac{1}{n^p} \begin{cases} \text{converges} & p > 1 \\ \text{diverges} & p \leq 1 \end{cases}$$`
    },
    {
      id: 'ser3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integral Test & $p$-Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^{3/2}}$ converge?',
            options: ['Yes, $p = 3/2 > 1$', 'No', 'Need integral test', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$p$-series with $p = 3/2 > 1$. Converges.'
          },
          {
            question: 'Does $\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln n}$ converge?',
            options: ['No, diverges', 'Yes', 'Need more info', '$p$-series'],
            correctAnswer: 0,
            explanation: 'Integral test: $\\int_2^{\\infty} \\frac{dx}{x\\ln x} = [\\ln(\\ln x)]_2^{\\infty} = \\infty$. Diverges.'
          }
        ]
      }
    },
    {
      id: 'ser3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
$p$-series: converges iff $p > 1$. Integral test connects series to improper integrals.`
    }
  ]
};
