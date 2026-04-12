export const calcbcRatioRootPart7Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'ratioroottests-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Quick Reference

| Test | Key Formula | Best For |
|------|-------------|----------|
| Ratio | $L = \\\\lim|a_{n+1}/a_n|$ | Factorials, exponentials |
| Root | $L = \\\\lim|a_n|^{1/n}$ | $n$-th powers |
| Both | $L < 1$: converges; $L > 1$: diverges; $L = 1$: inconclusive | |

### AP Exam Reminders
- Always use absolute values in Ratio/Root Test
- Ratio and Root give same $L$ when both work
- If $L = 1$, you MUST try another test
- State your conclusion clearly: “By the Ratio Test, since $L = \\\\_ < 1$, the series converges absolutely.”`
    },    {
      id: 'ratioroottests-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\sum \\\\frac{5^n n!}{(2n)!}$: Ratio Test gives:',
            options: ['$L = 0$ (converges)', '$L = 5/2$ (diverges)', '$L = 5$ (diverges)', '$L = 1$ (inconclusive)'],
            correctAnswer: 0,
            explanation: '$L = \\\\lim \\\\frac{5}{(2n+2)(2n+1)} \\\\cdot (n+1) = 0 < 1$. Converges.'
          },
          {
            question: 'True or False: The Ratio and Root Tests always give the same answer.',
            options: ['True — always same $L$', 'True for most series, and same conclusion when both work', 'False — they can contradict', 'False — Root is always better'],
            correctAnswer: 1,
            explanation: 'When both $L$ values exist, they are equal. They always agree on convergence/divergence.'
          },
          {
            question: '$\\\\sum \\\\frac{(2n)!}{(n!)^2 4^n}$: This is related to:',
            options: ['A geometric series', 'Central binomial coefficients', 'A telescoping series', 'A p-series'],
            correctAnswer: 1,
            explanation: '$\\\\binom{2n}{n}/4^n$ are related to central binomial coefficients. Ratio Test gives $L = 1$ (tricky!).'
          }
        ]
      }
    },    {
      id: 'ratioroottests-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

Apply the Ratio Test to each. State $L$ and the conclusion.

**1)** $\\\\sum \\\\frac{n!}{n^n}$: $L = ?$ (round to 2 decimal places)

**2)** $\\\\sum \\\\frac{10^n}{n!}$: $L = ?$

**3)** $\\\\sum \\\\frac{n!}{e^n}$: converges or diverges?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.37', '0', 'diverges'],
        hint1: '$L = \\\\lim (n/(n+1))^n = 1/e$',
        hint2: '$L = \\\\lim 10/(n+1)$',
        hint3: '$L = \\\\lim_{n\\\\to\\\\infty} (n+1)/e > 1$',
        explanation: '1) $L = 1/e \\\\approx 0.37 < 1$. Converges. 2) $L = 0 < 1$. Converges. 3) $L = \\\\infty > 1$. Diverges.'
      }
    }
  ]
};
