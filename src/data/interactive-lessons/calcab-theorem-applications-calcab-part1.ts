export const calcabTheoremsPart1Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm1-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 1 of 7 — The Intermediate Value Theorem (IVT)**

### Statement

If $f$ is **continuous** on $[a, b]$ and $N$ is between $f(a)$ and $f(b)$, then there exists $c \in (a, b)$ such that $f(c) = N$.

### What It Means

A continuous function takes on every value between $f(a)$ and $f(b)$.

### AP Usage

"Since $f$ is continuous on $[a, b]$, $f(a) = 2$, and $f(b) = 7$, by the IVT there exists $c \in (a, b)$ such that $f(c) = 5$."

### Important: IVT Does NOT Tell You

- Where $c$ is
- How many such $c$ values exist
- Only that at least one exists`
    },
    {
      id: 'thm1-quiz1',
      type: 'multiple-choice' as const,
      content: '**IVT** 🎯',
      exercise: {
        questions: [
          {
            question: '$f$ is continuous on $[0, 4]$, $f(0) = -3$, $f(4) = 5$. Which must be true?',
            options: ['$f(c) = 0$ for some $c$ in $(0, 4)$', '$f(c) = 0$ for exactly one $c$', '$f$ has a max of 5', '$f\'(c) = 0$ for some $c$'],
            correctAnswer: 0,
            explanation: 'Since $0$ is between $-3$ and $5$, IVT guarantees $f(c) = 0$ for some $c \\in (0, 4)$.'
          },
          {
            question: 'Which hypothesis is needed for IVT?',
            options: ['Continuity on $[a,b]$', 'Differentiability on $(a,b)$', '$f$ is increasing', '$f\' > 0$'],
            correctAnswer: 0,
            explanation: 'IVT requires only continuity on the closed interval.'
          }
        ]
      }
    },
    {
      id: 'thm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. IVT requires continuity
2. Guarantees existence of a value, not location
3. Always cite continuity when using IVT on the AP exam`
    }
  ]
};
