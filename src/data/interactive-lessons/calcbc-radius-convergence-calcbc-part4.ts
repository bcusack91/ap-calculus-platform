export const calcbcRadConvPart4Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'radiusconvergence-p4-intro',
      type: 'text' as const,
      content: `# 📖 Common Power Series to Know

**Part 4 of 7 — Essential Series**

---

### Must-Know Maclaurin Series

| Function | Series | Interval |
|----------|--------|----------|
| $e^x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{x^n}{n!}$ | $(-\\\\infty, \\\\infty)$ |
| $\\\\sin x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $(-\\\\infty, \\\\infty)$ |
| $\\\\cos x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n}}{(2n)!}$ | $(-\\\\infty, \\\\infty)$ |
| $\\\\frac{1}{1-x}$ | $\\\\sum_{n=0}^{\\\\infty} x^n$ | $(-1, 1)$ |
| $\\\\ln(1+x)$ | $\\\\sum_{n=1}^{\\\\infty} \\\\frac{(-1)^{n+1} x^n}{n}$ | $(-1, 1]$ |
| $\\\\arctan x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n+1}}{2n+1}$ | $[-1, 1]$ |

---

### Generating New Series

Substitute, differentiate, or integrate to create new series:
- $e^{-x^2}$: substitute $-x^2$ for $x$ in $e^x$ series
- $\\\\frac{1}{1+x^2}$: substitute $-x^2$ for $x$ in $1/(1-x)$`
    },    {
      id: 'radiusconvergence-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $\\\\sin x$ contains only:',
            options: ['Even powers of $x$', 'Odd powers of $x$', 'All powers of $x$', 'No $x$ terms'],
            correctAnswer: 1,
            explanation: '$\\\\sin x = x - x^3/3! + x^5/5! - \\\\cdots$. Only odd powers (since $\\\\sin$ is odd).'
          },
          {
            question: 'The radius of convergence of $e^x$ is:',
            options: ['1', '2', '$\\\\pi$', '$\\\\infty$'],
            correctAnswer: 3,
            explanation: '$e^x = \\\\sum x^n/n!$ converges for all real $x$. $R = \\\\infty$.'
          },
          {
            question: 'To get the series for $e^{-x^2}$, you:',
            options: ['Differentiate $e^x$ series', 'Substitute $-x^2$ for $x$ in $e^x$ series', 'Integrate $e^x$ series', 'Multiply $e^x$ series by $-x^2$'],
            correctAnswer: 1,
            explanation: '$e^u = \\\\sum u^n/n!$ with $u = -x^2$ gives $\\\\sum (-x^2)^n/n! = \\\\sum (-1)^n x^{2n}/n!$.'
          }
        ]
      }
    },    {
      id: 'radiusconvergence-p4-input',
      type: 'input-boxes' as const,
      content: `
**Series Identification** 🧮

**1)** Write the first 3 nonzero terms of $\\\\cos x$: (like x - x^3/6 + x^5/120)

**2)** $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n+1}}{2n+1}$ represents which function?

**3)** What series do you get by substituting $2x$ for $x$ in $e^x$? First 3 terms: (like 1 + 2x + ...)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1 - x^2/2 + x^4/24', 'arctan x', '1 + 2x + 2x^2'],
        hint1: '$\\\\cos x = 1 - x^2/2! + x^4/4! - \\\\cdots$',
        hint2: 'Compare with the table',
        hint3: '$e^{2x} = \\\\sum (2x)^n/n!$',
        explanation: '1) $1 - x^2/2 + x^4/24$. 2) $\\\\arctan x$. 3) $1 + 2x + (2x)^2/2! = 1 + 2x + 2x^2$.'
      }
    }
  ]
};
