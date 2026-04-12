export const calcbcRatioRootPart1Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'ratioroottests-p1-intro',
      type: 'text' as const,
      content: `# 🧪 Ratio & Root Tests

**Part 1 of 7 — The Ratio Test**

---

### Ratio Test

For the series $\\\\sum a_n$, compute:

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\left|\\\\frac{a_{n+1}}{a_n}\\\\right|$$

| Result | Conclusion |
|--------|-----------|
| $L < 1$ | Series **converges absolutely** |
| $L > 1$ (or $L = \\\\infty$) | Series **diverges** |
| $L = 1$ | **Inconclusive** |

---

### When to Use the Ratio Test

The Ratio Test is most useful when $a_n$ contains:
- **Factorials** ($n!$)
- **Exponentials** ($r^n$)
- **Products** of factorials and exponentials

### Worked Example

$$\\\\sum_{n=1}^{\\\\infty} \\\\frac{n!}{3^n}$$

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\frac{(n+1)!}{3^{n+1}} \\\\cdot \\\\frac{3^n}{n!} = \\\\lim_{n \\\\to \\\\infty} \\\\frac{n+1}{3} = \\\\infty$$

Since $L = \\\\infty > 1$, the series **diverges**.

---

### Another Example

$$\\\\sum_{n=0}^{\\\\infty} \\\\frac{2^n}{n!}$$

$$L = \\\\lim \\\\frac{2^{n+1}}{(n+1)!} \\\\cdot \\\\frac{n!}{2^n} = \\\\lim \\\\frac{2}{n+1} = 0$$

Since $L = 0 < 1$, the series **converges absolutely**.`
    },    {
      id: 'ratioroottests-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The Ratio Test gives $L = 0.5$. The series:',
            options: ['Converges absolutely', 'Diverges', 'Is inconclusive', 'Converges conditionally'],
            correctAnswer: 0,
            explanation: '$L = 0.5 < 1$ → the series converges absolutely.'
          },
          {
            question: 'The Ratio Test is especially useful for series with:',
            options: ['Polynomials in the denominator', 'Factorials or exponentials', 'Alternating signs only', 'Constant terms'],
            correctAnswer: 1,
            explanation: 'Factorials and exponentials simplify nicely in ratios $a_{n+1}/a_n$.'
          },
          {
            question: 'If the Ratio Test gives $L = 1$:',
            options: ['The series converges', 'The series diverges', 'The test is inconclusive', 'The series converges conditionally'],
            correctAnswer: 2,
            explanation: '$L = 1$ is the boundary case — the Ratio Test cannot determine convergence.'
          }
        ]
      }
    },    {
      id: 'ratioroottests-p1-input',
      type: 'input-boxes' as const,
      content: `
**Ratio Test Practice** 🧮

Apply the Ratio Test to $\\\\sum \\\\frac{3^n}{n!}$.

**1)** $\\\\frac{a_{n+1}}{a_n} = ?$ (simplified, in terms of $n$; e.g., 3/(n+1))

**2)** $L = \\\\lim_{n \\\\to \\\\infty} \\\\frac{a_{n+1}}{a_n} = ?$

**3)** Conclusion? (converges/diverges/inconclusive)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3/(n+1)', '0', 'converges'],
        hint1: '$\\\\frac{3^{n+1}/(n+1)!}{3^n/n!}$',
        hint2: 'As $n \\\\to \\\\infty$, $3/(n+1) \\\\to ?$',
        hint3: '$L < 1$ means?',
        explanation: '1) $3/(n+1)$. 2) $L = 0 < 1$. 3) Converges absolutely.'
      }
    }
  ]
};
