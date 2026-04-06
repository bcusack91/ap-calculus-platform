export const calcbcIntByPartsPart3Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp3-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 3 of 7 — Cycling (Boomerang) Problems**

### When IBP Cycles Back

For $\int e^x \sin x\,dx$, doing IBP twice brings back the original integral!

$I = \int e^x \sin x\,dx$

IBP #1: $u = \sin x$, $dv = e^x\,dx$
$I = e^x \sin x - \int e^x \cos x\,dx$

IBP #2: $u = \cos x$, $dv = e^x\,dx$
$I = e^x \sin x - e^x \cos x - \int e^x(-\sin x)\,dx$
$I = e^x \sin x - e^x \cos x - I$

$2I = e^x(\sin x - \cos x)$

$$I = \\frac{e^x(\sin x - \cos x)}{2} + C$$`
    },
    {
      id: 'ibp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cycling IBP** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int e^x \\cos x\\,dx$.',
            options: ['$\\frac{e^x(\\sin x + \\cos x)}{2} + C$', '$\\frac{e^x(\\cos x - \\sin x)}{2} + C$', '$e^x \\cos x + C$', '$e^x \\sin x + C$'],
            correctAnswer: 0,
            explanation: 'Apply IBP twice: $I = e^x \\cos x + e^x \\sin x - I$. $2I = e^x(\\sin x + \\cos x)$. $I = \\frac{e^x(\\sin x + \\cos x)}{2} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. $e^x \\cdot \\text{trig}$ always cycles after 2 applications
2. Solve for $I$ algebraically
3. Keep the same choice pattern for $u$ both times!`
    }
  ]
};
