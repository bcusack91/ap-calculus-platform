export const calcbcSequencesPart4Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq4-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Sequences vs. Series

**Part 4 of 7 — The Bridge to Series**

### Sequence vs. Series

| Concept | Symbol | Question |
|---------|--------|----------|
| **Sequence** | $\\{a_n\\}$ | Does $a_n \\to L$? |
| **Series** | $\\sum a_n$ | Does $\\sum_{n=1}^\\infty a_n$ converge? |

A **series** is the sum of a sequence. The **partial sums** form a new sequence:

$$S_N = \\sum_{n=1}^{N} a_n = a_1 + a_2 + \\cdots + a_N$$

$$\\boxed{\\sum_{n=1}^\\infty a_n = \\lim_{N \\to \\infty} S_N}$$

> **Key Fact:** A series converges if and only if the sequence of partial sums converges.`
    },
    {
      id: 'seq4-nth',
      type: 'text' as const,
      content: `### The $n$th Term Test (Divergence Test)

$$\\boxed{\\text{If } \\lim_{n \\to \\infty} a_n \\ne 0, \\text{ then } \\sum a_n \\text{ diverges.}}$$

**Contrapositive:** If $\\sum a_n$ converges, then $a_n \\to 0$.

**CAUTION:** $a_n \\to 0$ does NOT guarantee convergence!

The **harmonic series** $\\sum 1/n$ has $a_n = 1/n \\to 0$ but diverges.

### Geometric Series

$$\\sum_{n=0}^\\infty r^n = \\frac{1}{1-r} \\quad \\text{if } |r| < 1$$

| $|r|$ | Behavior |
|-------|----------|
| $|r| < 1$ | Converges to $\\frac{1}{1-r}$ |
| $|r| \\ge 1$ | Diverges |`
    },
    {
      id: 'seq4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{n}{n+1}$ diverges because:',
            options: ['$\\lim a_n = 1 \\ne 0$ ($n$th term test)', 'The terms are decreasing', 'It is a geometric series', 'The terms are positive'],
            correctAnswer: 0,
            explanation: '$a_n = \\frac{n}{n+1} \\to 1 \\ne 0$. By the $n$th term test, the series diverges.'
          },
          {
            question: '$\\sum_{n=0}^\\infty \\left(\\frac{2}{3}\\right)^n = $',
            options: ['$3$', '$2/3$', '$3/2$', 'Diverges'],
            correctAnswer: 0,
            explanation: 'Geometric series with $r = 2/3$: $\\frac{1}{1-2/3} = \\frac{1}{1/3} = 3$.'
          }
        ]
      }
    },
    {
      id: 'seq4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Key Distinctions**',
      exercise: {
        dropdowns: [
          {
            label: 'If $a_n \\to 0$, the series $\\sum a_n$:',
            options: ['May converge or diverge (need more tests)', 'Must converge', 'Must diverge', 'Converges conditionally'],
            correctAnswers: ['May converge or diverge (need more tests)'],
            hints: ['Think about $\\sum 1/n$ vs $\\sum 1/n^2$.'],
            explanation: '$a_n \\to 0$ is necessary but NOT sufficient. $\\sum 1/n$ diverges, but $\\sum 1/n^2 = \\pi^2/6$ converges. More tests needed.'
          },
          {
            label: 'The partial sum $S_5$ of $\\sum_{n=1}^\\infty 1/2^n$ equals:',
            options: ['$31/32$', '$1$', '$1/32$', '$5/2$'],
            correctAnswers: ['$31/32$'],
            hints: ['$S_5 = 1/2 + 1/4 + 1/8 + 1/16 + 1/32$.'],
            explanation: '$S_5 = \\frac{1/2(1-(1/2)^5)}{1-1/2} = 1 - 1/32 = 31/32$.'
          }
        ]
      }
    },
    {
      id: 'seq4-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: '$\\sum_{n=1}^\\infty \\left(\\frac{1}{3}\\right)^n = \\frac{1/3}{1-1/3} = ?$ Give your answer as a fraction.',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', '0.5'],
        hints: ['Geometric series starting at $n = 1$: first term is $1/3$, ratio is $1/3$.'],
        explanation: '$\\frac{1/3}{2/3} = \\frac{1}{2}$. Or: $\\sum_{n=0}^\\infty (1/3)^n = 3/2$, subtract the $n = 0$ term: $3/2 - 1 = 1/2$.'
      }
    },
    {
      id: 'seq4-summary',
      type: 'text' as const,
      content: `### Summary

- Series = sum of a sequence: $\\sum a_n = \\lim S_N$
- $n$th Term Test: if $a_n \\not\\to 0$, series diverges
- $a_n \\to 0$ does NOT guarantee convergence
- Geometric series: converges iff $|r| < 1$, sum $= \\frac{a}{1-r}$

> **Next:** Part 5 — Telescoping and $p$-series.`
    }
  ]
};
