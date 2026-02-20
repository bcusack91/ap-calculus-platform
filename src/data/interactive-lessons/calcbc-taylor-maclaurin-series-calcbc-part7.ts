export const calcbcTaylorPart7Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay7-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'tay7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $\\ln(1+x)$ is:',
            options: ['$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}x^n}{n}$', '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n}$', '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n!}$', '$\\sum_{n=0}^{\\infty} (-1)^n x^n$'],
            correctAnswer: 0,
            explanation: 'Integrate $\\frac{1}{1+x} = \\sum (-1)^n x^n$ term by term: $\\ln(1+x) = \\sum \\frac{(-1)^{n+1}x^n}{n}$.'
          },
          {
            question: 'The 3rd-degree Taylor polynomial for $e^x$ about $a = 1$:',
            options: ['$e + e(x-1) + \\frac{e}{2}(x-1)^2 + \\frac{e}{6}(x-1)^3$', '$1 + x + x^2/2 + x^3/6$', '$e(1 + x + x^2/2 + x^3/6)$', '$e + (x-1) + (x-1)^2/2$'],
            correctAnswer: 0,
            explanation: 'All derivatives of $e^x$ at $x = 1$ equal $e$. $P_3 = e + e(x-1) + \\frac{e}{2!}(x-1)^2 + \\frac{e}{3!}(x-1)^3$.'
          }
        ]
      }
    },
    {
      id: 'tay7-summary',
      type: 'text' as const,
      content: `### Taylor & Maclaurin Series — Complete! ✅`
    }
  ]
};
