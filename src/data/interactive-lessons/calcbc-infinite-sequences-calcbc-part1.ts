export const calcbcSequencesPart1Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq1-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 1 of 7 — Definition & Convergence**

### What Is a Sequence?

An ordered list of numbers: $a_1, a_2, a_3, \ldots$ or $\{a_n\}_{n=1}^{\infty}$

### Convergence

A sequence $\{a_n\}$ **converges** to $L$ if:

$$\lim_{n \\to \infty} a_n = L$$

If no such $L$ exists, the sequence **diverges**.

### Examples

| Sequence | Limit | Converges? |
|----------|-------|-----------|
| $a_n = 1/n$ | $0$ | Yes |
| $a_n = (-1)^n$ | DNE | No |
| $a_n = (1 + 1/n)^n$ | $e$ | Yes |
| $a_n = n^2$ | $\infty$ | No |`
    },
    {
      id: 'seq1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Sequence Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $a_n = \\frac{3n+1}{2n-5}$ converge?',
            options: ['Yes, to $3/2$', 'Yes, to $0$', 'No', 'Yes, to $\\infty$'],
            correctAnswer: 0,
            explanation: '$\\lim_{n \\to \\infty} \\frac{3n+1}{2n-5} = \\frac{3}{2}$. Divide top and bottom by $n$.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{n!}{n^n}$:',
            options: ['$0$', '$1$', '$\\infty$', '$1/e$'],
            correctAnswer: 0,
            explanation: '$n!/n^n = (1/n)(2/n)(3/n)\\cdots(n/n)$. Each factor $\\leq 1$ and the first factor $\\to 0$. The limit is $0$.'
          }
        ]
      }
    },
    {
      id: 'seq1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. A sequence is a function on the natural numbers
2. "Converges" means the limit exists and is finite`
    }
  ]
};
