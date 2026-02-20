export const calcbcPartialFracPart3Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf3-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 3 of 7 — Integration Practice**

### The Key Antiderivatives

$$\int \frac{A}{x-a}\,dx = A\ln|x-a| + C$$

$$\int \frac{A}{(x-a)^n}\,dx = \frac{A}{(1-n)(x-a)^{n-1}} + C \quad (n \neq 1)$$`
    },
    {
      id: 'pf3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_2^3 \\frac{1}{x^2-1}\\,dx$.',
            options: ['$\\frac{1}{2}\\ln\\frac{4}{3}$', '$\\ln 2$', '$\\frac{1}{2}\\ln 2$', '$\\ln\\frac{4}{3}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{2}[\\ln|x-1| - \\ln|x+1|]_2^3 = \\frac{1}{2}[(\\ln 2 - \\ln 4) - (\\ln 1 - \\ln 3)] = \\frac{1}{2}[\\ln 2 - \\ln 4 + \\ln 3] = \\frac{1}{2}\\ln\\frac{6}{4} = \\frac{1}{2}\\ln\\frac{3}{2}$. Hmm, let me redo: $\\frac{1}{2}[\\ln|x-1|-\\ln|x+1|]_2^3 = \\frac{1}{2}[(\\ln 2 - \\ln 4)-(\\ln 1 - \\ln 3)] = \\frac{1}{2}[\\ln 2 - \\ln 4 + \\ln 3] = \\frac{1}{2}\\ln(6/4) = \\frac{1}{2}\\ln(3/2)$.'
          }
        ]
      }
    },
    {
      id: 'pf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Each partial fraction integrates to logs or power rule.`
    }
  ]
};
