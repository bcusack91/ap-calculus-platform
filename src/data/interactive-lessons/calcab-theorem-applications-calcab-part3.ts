export const calcabTheoremsPart3Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm3-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 3 of 7 — The Extreme Value Theorem (EVT)**

### Statement

If $f$ is **continuous** on $[a, b]$, then $f$ attains an **absolute maximum** and **absolute minimum** on $[a, b]$.

### Finding Absolute Extrema (Closed Interval Method)

1. Find all critical points in $(a, b)$ where $f' = 0$ or $f'$ DNE
2. Evaluate $f$ at critical points AND at endpoints
3. Largest value = absolute max, smallest = absolute min`
    },
    {
      id: 'thm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**EVT & Closed Interval Method** 🎯\n\n$f(x) = x^3 - 3x + 1$ on $[-2, 2]$.',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f$ on $[-2, 2]$.',
            options: ['$3$', '$1$', '$7$', '$-1$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 3x^2 - 3 = 0$ at $x = \\pm 1$. $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$. Max is $3$.'
          },
          {
            question: 'Find the absolute minimum of $f$ on $[-2, 2]$.',
            options: ['$-1$', '$0$', '$-3$', '$1$'],
            correctAnswer: 0,
            explanation: 'From the values: $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$. Min is $-1$.'
          }
        ]
      }
    },
    {
      id: 'thm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. EVT guarantees max and min exist on closed intervals
2. Check critical points AND endpoints
3. Only requires continuity`
    }
  ]
};
