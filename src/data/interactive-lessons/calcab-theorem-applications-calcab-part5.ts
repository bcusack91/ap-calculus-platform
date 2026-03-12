export const calcabTheoremsPart5Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm5-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 5 of 7 — FTC and When to Use Each Theorem**

### Theorem Selection Guide

| Scenario | Theorem |
|----------|---------|
| Show $f(c) = N$ for some $c$ | IVT |
| Show $f'(c) = m$ for some $c$ | MVT |
| Show absolute max/min exist | EVT |
| Show $f'(c) = 0$ for some $c$ | Rolle's (or MVT) |
| Find derivative of $\int_a^x f$ | FTC Part 1 |
| Evaluate $\int_a^b f$ | FTC Part 2 |`
    },
    {
      id: 'thm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Which Theorem?** 🎯',
      exercise: {
        questions: [
          {
            question: '"$f$ is continuous, $f(2) = -1$, $f(5) = 4$. Show there exists $c$ where $f(c) = 2$." Which theorem?',
            options: ['IVT', 'MVT', 'EVT', 'Rolle\'s'],
            correctAnswer: 0,
            explanation: 'We need to show $f(c) = N$ for some value — this is IVT.'
          },
          {
            question: '"$f$ is differentiable, $f(1) = 3$, $f(5) = 11$. Show $f\'(c) = 2$ for some $c$." Which theorem?',
            options: ['MVT', 'IVT', 'EVT', 'FTC'],
            correctAnswer: 0,
            explanation: 'Average rate = $(11-3)/(5-1) = 2$. MVT guarantees $f\'(c) = 2$ for some $c \\in (1, 5)$.'
          }
        ]
      }
    },
    {
      id: 'thm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. IVT: proving function values exist
2. MVT: proving derivative values exist
3. EVT: proving extrema exist`
    }
  ]
};
