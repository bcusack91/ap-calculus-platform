export const calcbcTaylorPart3Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay3-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 3 of 7 — Building New Series**

### Substitution

$e^{x^2} = \sum \frac{(x^2)^n}{n!} = \sum \frac{x^{2n}}{n!}$

### Multiplication

$x\sin x = x\left(x - \frac{x^3}{6} + \cdots\right) = x^2 - \frac{x^4}{6} + \cdots$

### Differentiation

$\frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2} = \sum_{n=1}^{\infty} nx^{n-1}$

### Integration

$\int \frac{1}{1+x^2}\,dx = \arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}$`
    },
    {
      id: 'tay3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Building Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the Maclaurin series for $\\cos(x^2)$.',
            options: ['$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n}}{(2n)!}$', '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$', '$\\sum_{n=0}^{\\infty} \\frac{x^{4n}}{(2n)!}$', '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+2}}{(2n+1)!}$'],
            correctAnswer: 0,
            explanation: 'Replace $x$ with $x^2$ in $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$: $\\cos(x^2) = \\sum \\frac{(-1)^n (x^2)^{2n}}{(2n)!} = \\sum \\frac{(-1)^n x^{4n}}{(2n)!}$.'
          }
        ]
      }
    },
    {
      id: 'tay3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Substitution, multiplication, differentiation, and integration all apply term-by-term.`
    }
  ]
};
