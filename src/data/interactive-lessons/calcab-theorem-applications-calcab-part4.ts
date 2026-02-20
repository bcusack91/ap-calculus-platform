export const calcabTheoremsPart4Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm4-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 4 of 7 — Rolle's Theorem & MVT Applications**

### Rolle's Theorem (Special Case of MVT)

If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists $c \in (a, b)$ such that $f'(c) = 0$.

### MVT for Speed

If a car travels 120 miles in 2 hours, then at some moment the speedometer reads exactly 60 mph.

This is MVT applied: average speed = instantaneous speed at some point!`
    },
    {
      id: 'thm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rolle\'s Theorem & MVT Apps** 🎯',
      exercise: {
        questions: [
          {
            question: '$f(0) = 3$ and $f(4) = 3$, $f$ is continuous on $[0,4]$ and differentiable on $(0,4)$. What can we conclude?',
            options: ['$f\'(c) = 0$ for some $c \\in (0, 4)$', '$f$ is constant', '$f$ has a max at $c$', '$f\'(c) = 3$'],
            correctAnswer: 0,
            explanation: 'By Rolle\'s Theorem: $f(0) = f(4) = 3$, so $f\'(c) = 0$ for some $c \\in (0, 4)$.'
          }
        ]
      }
    },
    {
      id: 'thm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Rolle's Theorem: same endpoints → horizontal tangent somewhere
2. MVT has real-world applications (speed, rates)`
    }
  ]
};
