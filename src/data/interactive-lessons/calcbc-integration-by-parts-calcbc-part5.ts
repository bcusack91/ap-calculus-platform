export const calcbcIntByPartsPart5Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp5-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 5 of 7 — Special Cases**

### Inverse Trig Integrals

$\int \arctan x\,dx$: $u = \arctan x$, $dv = dx$

$= x\arctan x - \int \\frac{x}{1+x^2}\,dx = x\arctan x - \\frac{1}{2}\ln(1+x^2) + C$

### $\int \ln x$ derivatives

$\int (\ln x)^2\,dx$: $u = (\ln x)^2$, $dv = dx$

$= x(\ln x)^2 - 2\int \ln x\,dx = x(\ln x)^2 - 2(x\ln x - x) + C$`
    },
    {
      id: 'ibp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Special Cases** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\arcsin x\\,dx$. What is the result?',
            options: ['$x\\arcsin x + \\sqrt{1-x^2} + C$', '$x\\arcsin x - \\sqrt{1-x^2} + C$', '$\\frac{x}{\\sqrt{1-x^2}} + C$', '$x\\arcsin x + C$'],
            correctAnswer: 0,
            explanation: '$u = \\arcsin x$, $dv = dx$. $x\\arcsin x - \\int \\frac{x}{\\sqrt{1-x^2}}\\,dx$. Let $w = 1-x^2$: $= x\\arcsin x + \\sqrt{1-x^2} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Inverse trig and logarithmic functions always go as $u$
2. The resulting integral usually becomes a u-substitution`
    }
  ]
};
