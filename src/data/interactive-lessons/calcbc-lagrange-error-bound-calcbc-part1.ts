export const calcbcLagrangePart1Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag1-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound

**Part 1 of 7 — The Formula**

### Taylor's Theorem with Remainder

$$f(x) = P_n(x) + R_n(x)$$

### Lagrange Error Bound

$$|R_n(x)| \leq \frac{M}{(n+1)!}|x - a|^{n+1}$$

where $M = \max|f^{(n+1)}(c)|$ for $c$ between $a$ and $x$.

This tells you: **how good is your Taylor polynomial approximation?**`
    },
    {
      id: 'lag1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Lagrange Error** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $e^x$ approximated by $P_3(x)$ at $a = 0$, the error at $x = 0.1$ is at most... (note: $e^{0.1} < 2$)',
            options: ['$\\frac{2(0.1)^4}{4!} \\approx 0.0000833$', '$\\frac{(0.1)^3}{3!}$', '$\\frac{e(0.1)^4}{4!}$', '$0.1$'],
            correctAnswer: 0,
            explanation: '$M = \\max|f^{(4)}(c)| = \\max e^c$ for $c \\in [0, 0.1]$. Bound $M \\leq 2$. $|R_3| \\leq \\frac{2(0.1)^4}{24} \\approx 0.0000833$.'
          }
        ]
      }
    },
    {
      id: 'lag1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
$|R_n| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}$ where $M$ bounds $|f^{(n+1)}|$.`
    }
  ]
};
