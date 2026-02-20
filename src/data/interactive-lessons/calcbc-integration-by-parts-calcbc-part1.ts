export const calcbcIntByPartsPart1Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp1-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 1 of 7 — The Formula**

### Integration by Parts Formula

$$\int u\,dv = uv - \int v\,du$$

### LIATE Rule for Choosing $u$

Choose $u$ in this priority order:
1. **L**ogarithmic ($\ln x$, $\log x$)
2. **I**nverse trig ($\arctan x$, $\arcsin x$)
3. **A**lgebraic ($x^2$, $x$, polynomials)
4. **T**rigonometric ($\sin x$, $\cos x$)
5. **E**xponential ($e^x$, $2^x$)

### Worked Example

$\int x\,e^x\,dx$

$u = x$, $dv = e^x\,dx$

$du = dx$, $v = e^x$

$\int x\,e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C = e^x(x-1) + C$`
    },
    {
      id: 'ibp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration by Parts** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int x\\cos x\\,dx$.',
            options: ['$x\\sin x + \\cos x + C$', '$x\\sin x - \\cos x + C$', '$x\\cos x + \\sin x + C$', '$\\frac{x^2}{2}\\sin x + C$'],
            correctAnswer: 0,
            explanation: '$u = x$, $dv = \\cos x\\,dx$. $du = dx$, $v = \\sin x$. $x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$.'
          },
          {
            question: 'To integrate $\\int \\ln x\\,dx$, what should $u$ be?',
            options: ['$u = \\ln x$', '$u = x$', '$u = 1$', '$u = x\\ln x$'],
            correctAnswer: 0,
            explanation: 'LIATE: $\\ln x$ is logarithmic, highest priority for $u$. $dv = dx$, $v = x$.'
          }
        ]
      }
    },
    {
      id: 'ibp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $\\int u\\,dv = uv - \\int v\\,du$
2. Use LIATE to choose $u$
3. $\\int \\ln x\\,dx = x\\ln x - x + C$`
    }
  ]
};
