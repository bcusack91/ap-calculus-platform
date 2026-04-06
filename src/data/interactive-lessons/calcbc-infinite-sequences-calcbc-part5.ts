export const calcbcSequencesPart5Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq5-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 5 of 7 — Sequences vs. Series**

### Critical Distinction

- **Sequence**: the list $a_1, a_2, a_3, \ldots$ → does $a_n$ approach a limit?
- **Series**: the sum $\sum_{n=1}^{\infty} a_n$ → does the sum converge?

### Divergence Test Preview

If $\lim_{n \\to \infty} a_n \\neq 0$, then $\sum a_n$ **diverges**.

But $\lim a_n = 0$ does NOT guarantee convergence! ($\sum 1/n$ diverges.)`
    },
    {
      id: 'seq5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Sequences vs Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'The sequence $\\{1/n\\}$ converges. Does the series $\\sum 1/n$ converge?',
            options: ['No, the harmonic series diverges', 'Yes', 'Cannot determine', 'Only if $n > 2$'],
            correctAnswer: 0,
            explanation: 'The harmonic series $\\sum 1/n$ diverges even though $1/n \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'seq5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Sequence convergence and series convergence are different questions!`
    }
  ]
};
