export const calcbcPartialFracPart5Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf5-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 5 of 7 — Logistic DE Connection**

### The Logistic Equation

$$\frac{dP}{dt} = kP(L - P)$$

Separation of variables:

$$\frac{dP}{P(L-P)} = k\,dt$$

Use partial fractions on the left side!

$$\frac{1}{P(L-P)} = \frac{1}{L}\left(\frac{1}{P} + \frac{1}{L-P}\right)$$`
    },
    {
      id: 'pf5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logistic Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'Decompose $\\frac{1}{P(10-P)}$.',
            options: ['$\\frac{1}{10}\\left(\\frac{1}{P} + \\frac{1}{10-P}\\right)$', '$\\frac{1}{P} - \\frac{1}{10-P}$', '$\\frac{1}{10P} - \\frac{1}{10(10-P)}$', '$\\frac{10}{P(10-P)}$'],
            correctAnswer: 0,
            explanation: '$\\frac{A}{P} + \\frac{B}{10-P}$. $1 = A(10-P) + BP$. $P=0$: $A = 1/10$. $P=10$: $B = 1/10$.'
          }
        ]
      }
    },
    {
      id: 'pf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Partial fractions are the key technique for solving the logistic DE.`
    }
  ]
};
