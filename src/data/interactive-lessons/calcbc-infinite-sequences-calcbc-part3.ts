export const calcbcSequencesPart3Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq3-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 3 of 7 — Geometric & Recursive Sequences**

### Geometric Sequences

$a_n = a_1 \cdot r^{n-1}$

Converges to $0$ if $|r| < 1$, diverges if $|r| \geq 1$ (except $r = 1$, const).

### Recursive Sequences

Defined by a recurrence: $a_{n+1} = f(a_n)$

To find the limit $L$: set $L = f(L)$ and solve.`
    },
    {
      id: 'seq3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Geometric/Recursive** 🎯',
      exercise: {
        questions: [
          {
            question: '$a_1 = 2$, $a_{n+1} = \\sqrt{2 + a_n}$. If it converges, what is $L$?',
            options: ['$2$', '$\\sqrt{2}$', '$1 + \\sqrt{3}$', '$4$'],
            correctAnswer: 0,
            explanation: '$L = \\sqrt{2 + L}$. $L^2 = 2 + L$. $L^2 - L - 2 = 0$. $(L-2)(L+1) = 0$. $L = 2$ (positive).'
          }
        ]
      }
    },
    {
      id: 'seq3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
For recursive sequences: set $L = f(L)$ and solve for $L$.`
    }
  ]
};
