export const calcbcAdvIntegrationPart5Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv5-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 5 of 7 — Tabular Integration**

### Tabular Method (Repeated Parts)

For $\int x^n e^{ax}\,dx$ or $\int x^n \sin(ax)\,dx$:

$\int x^3 e^x\,dx$:

| D | I | Sign |
|---|---|------|
| $x^3$ | $e^x$ | + |
| $3x^2$ | $e^x$ | - |
| $6x$ | $e^x$ | + |
| $6$ | $e^x$ | - |
| $0$ | $e^x$ | |

$= x^3 e^x - 3x^2 e^x + 6x e^x - 6e^x + C$`
    },
    {
      id: 'adv5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tabular** 🎯',
      exercise: {
        questions: [
          {
            question: 'Using tabular method, $\\int x^2 \\cos x\\,dx = $',
            options: ['$x^2 \\sin x + 2x \\cos x - 2\\sin x + C$', '$x^2 \\sin x + C$', '$x^2 \\cos x - 2x \\sin x + C$', '$2x \\sin x + 2\\cos x + C$'],
            correctAnswer: 0,
            explanation: 'D: $x^2, 2x, 2, 0$. I: $\\cos x, \\sin x, -\\cos x, -\\sin x$. Signs: $+, -, +$. Result: $x^2\\sin x + 2x\\cos x - 2\\sin x + C$.'
          }
        ]
      }
    },
    {
      id: 'adv5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Tabular method speeds up repeated integration by parts.`
    }
  ]
};
