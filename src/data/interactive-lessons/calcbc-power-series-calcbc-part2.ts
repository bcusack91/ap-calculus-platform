export const calcbcPowerSeriesPart2Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow2-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 2 of 7 — Checking Endpoints**

### At each endpoint, substitute and test the resulting series.

$\sum \frac{x^n}{n}$, $R = 1$. Interval: check $x = 1$ and $x = -1$.

$x = 1$: $\sum 1/n$ → diverges (harmonic)

$x = -1$: $\sum (-1)^n/n$ → converges (AST)

**Interval of convergence: $[-1, 1)$**`
    },
    {
      id: 'pow2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Endpoint Checking** 🎯',
      exercise: {
        questions: [
          {
            question: 'IOC for $\\sum \\frac{x^n}{n^2}$:',
            options: ['$[-1, 1]$', '$(-1, 1)$', '$[-1, 1)$', '$(-1, 1]$'],
            correctAnswer: 0,
            explanation: '$R = 1$. At $x = 1$: $\\sum 1/n^2$ converges. At $x = -1$: $\\sum (-1)^n/n^2$ converges (absolutely). Both included: $[-1, 1]$.'
          }
        ]
      }
    },
    {
      id: 'pow2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Always test each endpoint individually. Four possible interval shapes: $(a-R, a+R)$, $[a-R, a+R)$, $(a-R, a+R]$, $[a-R, a+R]$.`
    }
  ]
};
