export const calcbcAdvIntegrationPart3Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv3-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 3 of 7 — Combining Techniques**

### Integration by Parts + u-Sub

$\int e^{\sqrt{x}}\,dx$:

Step 1: $u = \sqrt{x}$, $x = u^2$, $dx = 2u\,du$

$= \int e^u \cdot 2u\,du$

Step 2: Integration by parts: $= 2(ue^u - e^u) + C = 2e^{\sqrt{x}}(\sqrt{x} - 1) + C$`
    },
    {
      id: 'adv3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Combined Methods** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int x^3 \\ln x\\,dx$ using parts with $u = \\ln x$, $dv = x^3\\,dx$:',
            options: ['$\\frac{x^4 \\ln x}{4} - \\frac{x^4}{16} + C$', '$\\frac{x^4 \\ln x}{4} + C$', '$x^3/(3\\ln x) + C$', '$\\frac{x^4}{4} \\ln x - \\frac{x^3}{3} + C$'],
            correctAnswer: 0,
            explanation: '$u = \\ln x$, $v = x^4/4$. $= \\frac{x^4 \\ln x}{4} - \\int \\frac{x^4}{4} \\cdot \\frac{1}{x}\\,dx = \\frac{x^4 \\ln x}{4} - \\frac{1}{4}\\int x^3\\,dx = \\frac{x^4 \\ln x}{4} - \\frac{x^4}{16} + C$.'
          }
        ]
      }
    },
    {
      id: 'adv3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Some integrals need multiple techniques in sequence.`
    }
  ]
};
