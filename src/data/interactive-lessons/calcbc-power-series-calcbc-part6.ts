export const calcbcPowerSeriesPart6Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow6-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'pow6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'IOC for $\\sum \\frac{n!(x-1)^n}{2^n}$:',
            options: ['$R = 0$, converges only at $x = 1$', '$R = 2$', '$R = \\infty$', '$R = 1$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim (n+1)|x-1|/2 = \\infty$ for $x \\neq 1$. $R = 0$. Only converges at center.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^{2n}}{n}$ converges for:',
            options: ['$[-1, 1]$', '$(-1, 1)$', '$(-1, 1]$', '$[-1, 1)$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2$: $\\sum (-1)^n u^n/n$ converges for $|u| \\leq 1$ (checking endpoints). $|x^2| \\leq 1$ means $|x| \\leq 1$: $[-1, 1]$.'
          }
        ]
      }
    },
    {
      id: 'pow6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
