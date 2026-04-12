export const calcbcRatioRootPart2Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'ratioroottests-p2-intro',
      type: 'text' as const,
      content: `# 🌿 The Root Test

**Part 2 of 7 — The Root Test**

---

### Root Test

For the series $\\\\sum a_n$, compute:

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\sqrt[n]{|a_n|} = \\\\lim_{n \\\\to \\\\infty} |a_n|^{1/n}$$

| Result | Conclusion |
|--------|-----------|
| $L < 1$ | Series **converges absolutely** |
| $L > 1$ | Series **diverges** |
| $L = 1$ | **Inconclusive** |

---

### When to Use the Root Test

Best when $a_n$ involves an **$n$-th power**:
- $a_n = \\\\left(\\\\frac{n}{n+1}\\\\right)^n$
- $a_n = \\\\left(\\\\frac{3n+1}{4n}\\\\right)^n$

### Worked Example

$$\\\\sum_{n=1}^{\\\\infty} \\\\left(\\\\frac{2n}{3n+1}\\\\right)^n$$

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\left(\\\\frac{2n}{3n+1}\\\\right) = \\\\frac{2}{3}$$

Since $L = 2/3 < 1$, the series **converges absolutely**.`
    },    {
      id: 'ratioroottests-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The Root Test is most useful when $a_n$ has the form:',
            options: ['$n!/r^n$', '$f(n)^n$', '$1/n^p$', '$(-1)^n/n$'],
            correctAnswer: 1,
            explanation: 'The $n$-th root cancels the $n$-th power, making the limit simple.'
          },
          {
            question: '$\\\\sum (3/4)^n$: Root Test gives $L = ?$',
            options: ['3/4', '4/3', '1', '0'],
            correctAnswer: 0,
            explanation: '$|a_n|^{1/n} = ((3/4)^n)^{1/n} = 3/4$. Converges since $3/4 < 1$.'
          },
          {
            question: 'Root Test and Ratio Test both give $L = 1$ for the same series. You should:',
            options: ['Conclude it converges', 'Conclude it diverges', 'Try a different test', 'It must be conditional'],
            correctAnswer: 2,
            explanation: 'When both are inconclusive, try comparison, integral, or alternating series test.'
          }
        ]
      }
    },    {
      id: 'ratioroottests-p2-input',
      type: 'input-boxes' as const,
      content: `
**Root Test Practice** 🧮

$\\\\sum_{n=1}^{\\\\infty} \\\\left(\\\\frac{n+1}{2n}\\\\right)^n$

**1)** $|a_n|^{1/n} = ?$ (simplified fraction in terms of $n$)

**2)** $L = ?$ (as a fraction)

**3)** Does the series converge or diverge?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['(n+1)/(2n)', '1/2', 'converges'],
        hint1: 'Take the $n$-th root of $((n+1)/(2n))^n$',
        hint2: '$\\\\lim (n+1)/(2n) = ?$',
        hint3: '$1/2 < 1$',
        explanation: '1) $(n+1)/(2n)$. 2) $\\\\lim (n+1)/(2n) = 1/2$. 3) Converges since $L = 1/2 < 1$.'
      }
    }
  ]
};
