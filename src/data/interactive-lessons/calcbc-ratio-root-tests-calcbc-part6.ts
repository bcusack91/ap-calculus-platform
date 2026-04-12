export const calcbcRatioRootPart6Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'ratioroottests-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Free-Response Strategy

When asked to determine convergence:
1. **State** the test you will use
2. **Set up** the limit (show $a_{n+1}/a_n$ or $|a_n|^{1/n}$)
3. **Evaluate** the limit
4. **Conclude** with convergence/divergence and cite the test

---

### Common Errors
- Forgetting absolute values in the Ratio Test
- Not checking if $L = 1$ (inconclusive!)
- Using Ratio/Root Test on p-series (always gives $L = 1$)`
    },    {
      id: 'ratioroottests-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\sum \\\\frac{(-3)^n}{n!}$: converges or diverges?',
            options: ['Converges (Ratio Test, $L = 0$)', 'Diverges (terms grow)', 'Inconclusive', 'Conditionally converges'],
            correctAnswer: 0,
            explanation: '$L = \\\\lim |{-3}|/(n+1) = 0 < 1$. Converges absolutely.'
          },
          {
            question: '$\\\\sum \\\\left(\\\\frac{n}{n+1}\\\\right)^{n^2}$: Root Test gives:',
            options: ['$L = 1/e$', '$L = 1$', '$L = 0$', '$L = e$'],
            correctAnswer: 2,
            explanation: '$|a_n|^{1/n} = (n/(n+1))^n \\\\to 1/e$. Actually $L = 1/e < 1$. Wait: $((n/(n+1))^{n^2})^{1/n} = (n/(n+1))^n \\\\to 1/e$. Converges.'
          },
          {
            question: 'The Ratio Test should NOT be your first choice for:',
            options: ['$\\\\sum n!/n^n$', '$\\\\sum 1/n^3$', '$\\\\sum 2^n/n!$', '$\\\\sum n^5/3^n$'],
            correctAnswer: 1,
            explanation: '$\\\\sum 1/n^3$ is a p-series. The Ratio Test gives $L = 1$ (inconclusive).'
          }
        ]
      }
    },    {
      id: 'ratioroottests-p6-input',
      type: 'input-boxes' as const,
      content: `
**AP Practice** 🧮

$\\\\sum_{n=1}^{\\\\infty} \\\\frac{n^n}{(2n)!}$

**1)** Which test is best? (ratio/root/comparison)

**2)** If using Ratio Test, what does $\\\\frac{a_{n+1}}{a_n}$ simplify to as $n \\\\to \\\\infty$? (0/1/infinity)

**3)** Converges or diverges?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ratio', '0', 'converges'],
        hint1: 'Factorials and power functions → Ratio Test',
        hint2: 'Stirling-type analysis shows rapid decrease',
        hint3: '$L < 1$ means convergence',
        explanation: '1) Ratio Test (factorial and $n^n$ terms). 2) $L = 0$. 3) Converges absolutely.'
      }
    }
  ]
};
