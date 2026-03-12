export const calcbcSequencesPart2Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq2-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 2 of 7 — Bounded & Monotonic Sequences**

### Monotone Convergence Theorem

If a sequence is **bounded** and **monotonic**, it converges.

- **Monotonic increasing**: $a_{n+1} \geq a_n$ for all $n$
- **Monotonic decreasing**: $a_{n+1} \leq a_n$ for all $n$
- **Bounded**: there exist $M, m$ such that $m \leq a_n \leq M$

### Squeeze Theorem for Sequences

If $b_n \leq a_n \leq c_n$ and $\lim b_n = \lim c_n = L$, then $\lim a_n = L$.`
    },
    {
      id: 'seq2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bounded & Monotonic** 🎯',
      exercise: {
        questions: [
          {
            question: '$a_n = \\frac{\\sin n}{n}$ converges to:',
            options: ['$0$', '$1$', 'DNE', '$-1$'],
            correctAnswer: 0,
            explanation: '$-1/n \\leq \\sin n / n \\leq 1/n$. Both bounds $\\to 0$. By Squeeze Theorem, $\\lim a_n = 0$.'
          }
        ]
      }
    },
    {
      id: 'seq2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Bounded + Monotonic → Converges. Squeeze Theorem works for sequences too!`
    }
  ]
};
