export const calcbcAdvIntegrationPart2Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv2-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 2 of 7 — Challenging u-Substitutions**

### Tricky u-Sub Examples

$\int \frac{e^x}{1 + e^x}\,dx$: let $u = 1 + e^x$

$\int \frac{\ln x}{x}\,dx$: let $u = \ln x$

$\int x\sqrt{x+1}\,dx$: let $u = x+1$, so $x = u - 1$

### Completing the Square for u-Sub

$\int \frac{dx}{x^2 + 4x + 8} = \int \frac{dx}{(x+2)^2 + 4}$: let $u = x + 2$`
    },
    {
      id: 'adv2-quiz1',
      type: 'multiple-choice' as const,
      content: '**u-Sub** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{e^x}{1 + e^x}\\,dx = $',
            options: ['$\\ln(1 + e^x) + C$', '$e^x/(1+e^x) + C$', '$\\arctan(e^x) + C$', '$\\ln(e^x) + C$'],
            correctAnswer: 0,
            explanation: '$u = 1 + e^x$, $du = e^x\\,dx$. $\\int du/u = \\ln|u| + C = \\ln(1+e^x) + C$.'
          }
        ]
      }
    },
    {
      id: 'adv2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Look for the derivative of a function inside the integral. Complete the square when needed.`
    }
  ]
};
