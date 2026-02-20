export const calcabFRQPart3Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq3-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 3 of 7 — Justification Language**

### Writing Justifications

The AP exam requires specific language. Here are templates:

**For IVT:** "Since $f$ is continuous on $[a, b]$ and $f(a) < N < f(b)$, by the Intermediate Value Theorem, there exists $c \in (a, b)$ such that $f(c) = N$."

**For MVT:** "Since $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, by the Mean Value Theorem, there exists $c \in (a, b)$ such that $f'(c) = \frac{f(b)-f(a)}{b-a}$."

**For increasing:** "Since $f'(x) > 0$ on $(a, b)$, $f$ is increasing on $(a, b)$."`
    },
    {
      id: 'frq3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Justification** 🎯',
      exercise: {
        questions: [
          {
            question: 'To justify that $f$ has a relative maximum at $x = c$, you should write:',
            options: ['$f\'(c) = 0$ and $f\'$ changes from positive to negative at $c$', '$f(c)$ is the largest value', '$f\'(c) = 0$', '$f\'\'(c) = 0$'],
            correctAnswer: 0,
            explanation: 'First derivative test: $f\'(c) = 0$ (critical point) AND $f\'$ changes from $+$ to $-$ (confirming max).'
          }
        ]
      }
    },
    {
      id: 'frq3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Cite theorem names explicitly
2. State conditions (continuous, differentiable) before applying
3. Use precise mathematical language`
    }
  ]
};
