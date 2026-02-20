export const calcbcLagrangePart2Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag2-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound

**Part 2 of 7 — Finding $M$**

### Strategy for Bounding $M$

$M = \max_{c \text{ between } a \text{ and } x} |f^{(n+1)}(c)|$

For common functions:

| Function | All derivatives bounded by |
|----------|--------------------------|
| $\sin x$, $\cos x$ | $M = 1$ (always!) |
| $e^x$ on $[0, b]$ | $M = e^b$ |
| $\ln x$ near $a$ | Need careful analysis |`
    },
    {
      id: 'lag2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Finding $M$** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\sin x$ at $a = 0$, the error using $P_5(x)$ at $x = 1$ is at most:',
            options: ['$\\frac{1}{720}$', '$\\frac{1}{120}$', '$\\frac{1}{6!}$... same as $1/720$!', '$1/24$'],
            correctAnswer: 0,
            explanation: '$M = 1$ for $\\sin x$. $|R_5| \\leq \\frac{1 \\cdot 1^6}{6!} = \\frac{1}{720}$.'
          }
        ]
      }
    },
    {
      id: 'lag2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
$\\sin x$ and $\\cos x$ always have $M = 1$. This makes error bounds very clean.`
    }
  ]
};
