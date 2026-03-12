export const calcbcIntByPartsPart4Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp4-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 4 of 7 — Definite Integrals with IBP**

### Formula for Definite Integrals

$$\int_a^b u\,dv = [uv]_a^b - \int_a^b v\,du$$

### Worked Example

$\int_0^1 xe^x\,dx = [xe^x]_0^1 - \int_0^1 e^x\,dx = e - [e^x]_0^1 = e - (e-1) = 1$`
    },
    {
      id: 'ibp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Definite IBP** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^e \\ln x\\,dx$.',
            options: ['$1$', '$e - 1$', '$e$', '$0$'],
            correctAnswer: 0,
            explanation: '$u = \\ln x$, $dv = dx$. $[x\\ln x]_1^e - \\int_1^e dx = (e - 0) - (e - 1) = 1$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi} x\\sin x\\,dx$.',
            options: ['$\\pi$', '$2$', '$0$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$u = x$, $dv = \\sin x\\,dx$. $[-x\\cos x]_0^{\\pi} + \\int_0^{\\pi}\\cos x\\,dx = \\pi + [\\sin x]_0^{\\pi} = \\pi + 0 = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'ibp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Apply bounds to the $uv$ term
2. Bounds carry through to the remaining integral`
    }
  ]
};
