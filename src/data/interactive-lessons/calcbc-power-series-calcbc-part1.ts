export const calcbcPowerSeriesPart1Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow1-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 1 of 7 — Radius & Interval of Convergence**

### Power Series Form

$$\sum_{n=0}^{\infty} c_n(x-a)^n$$

### Radius of Convergence $R$

Use the ratio test: $\lim \left|\frac{c_{n+1}}{c_n}\right| |x - a| < 1$

$$R = \lim_{n \to \infty} \left|\frac{c_n}{c_{n+1}}\right|$$

### Interval of Convergence

$(a - R, a + R)$ — then check endpoints separately!`
    },
    {
      id: 'pow1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Radius of Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $R$ for $\\sum \\frac{x^n}{n}$.',
            options: ['$R = 1$', '$R = \\infty$', '$R = 0$', '$R = 1/e$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim \\frac{n}{n+1}|x| = |x|$. Converges when $|x| < 1$. $R = 1$.'
          },
          {
            question: 'Find $R$ for $\\sum \\frac{x^n}{n!}$.',
            options: ['$R = \\infty$', '$R = 1$', '$R = e$', '$R = 0$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim \\frac{|x|}{n+1} = 0 < 1$ for all $x$. $R = \\infty$. (This is $e^x$!)'
          }
        ]
      }
    },
    {
      id: 'pow1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
$R$ from ratio test. Always check endpoints separately for the interval.`
    }
  ]
};
