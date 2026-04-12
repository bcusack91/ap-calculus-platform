export const calcbcRadConvPart7Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'radiusconvergence-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Power Series Checklist

- [ ] Know the 6 standard Maclaurin series
- [ ] Find $R$ using Ratio Test
- [ ] Check endpoints at $x = a \\\\pm R$
- [ ] Differentiate/integrate within interval
- [ ] Use series to approximate integrals and limits
- [ ] Apply Lagrange Error Bound when needed

### Key Facts
- $R$ stays the same under differentiation and integration
- Endpoints may change under these operations
- Series can be multiplied and composed`
    },    {
      id: 'radiusconvergence-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\sum \\\\frac{n x^n}{3^n}$: $R = ?$',
            options: ['1', '3', '$1/3$', '$n$'],
            correctAnswer: 1,
            explanation: '$L = \\\\lim |x|/3 \\\\cdot (n+1)/n = |x|/3 < 1 \\\\Rightarrow R = 3$.'
          },
          {
            question: 'The series $1 + x + x^2/2! + x^3/3! + \\\\cdots$ represents:',
            options: ['$\\\\sin x$', '$\\\\cos x$', '$e^x$', '$\\\\ln(1+x)$'],
            correctAnswer: 2,
            explanation: 'This is $\\\\sum x^n/n! = e^x$.'
          },
          {
            question: 'To find the series for $\\\\frac{x}{1+x^2}$:',
            options: ['Substitute $-x^2$ into geometric series, multiply by $x$', 'Differentiate $\\\\ln(1+x)$', 'Integrate $e^x$', 'Use Taylor’s formula directly'],
            correctAnswer: 0,
            explanation: '$\\\\frac{1}{1+x^2} = \\\\sum (-x^2)^n = \\\\sum (-1)^n x^{2n}$. Multiply by $x$: $\\\\sum (-1)^n x^{2n+1}$.'
          }
        ]
      }
    },    {
      id: 'radiusconvergence-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** First 3 terms of $e^{-x}$?

**2)** Series for $\\\\frac{1}{1+x}$ using geometric series? (general term)

**3)** $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n}{(2n)!}$ equals what familiar value?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1 - x + x^2/2', '(-1)^n * x^n', 'cos(1)'],
        hint1: 'Substitute $-x$ into $e^x = 1 + x + x^2/2 + ...$',
        hint2: '$1/(1-u)$ with $u = -x$',
        hint3: 'Compare with $\\\\cos x$ at $x = 1$',
        explanation: '1) $1 - x + x^2/2$. 2) $(-1)^n x^n$ or $(-x)^n$. 3) $\\\\cos(1) \\\\approx 0.5403$.'
      }
    }
  ]
};
