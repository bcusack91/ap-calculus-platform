export const calcabAntiderivativesPart3Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti3-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 3 of 7 — Initial Value Problems (IVPs)**

### Finding Specific Antiderivatives

An initial condition pins down the value of $C$:

Given: $f'(x) = 3x^2 - 4x + 1$ and $f(0) = 5$. Find $f(x)$.

**Step 1:** Find the general antiderivative.
$$f(x) = x^3 - 2x^2 + x + C$$

**Step 2:** Use the initial condition to find $C$.
$$f(0) = 0 - 0 + 0 + C = 5 \\implies C = 5$$

**Answer:** $f(x) = x^3 - 2x^2 + x + 5$

### Position-Velocity-Acceleration

If $a(t) =$ acceleration, then:
- $v(t) = \\int a(t)\\,dt$ (velocity)
- $s(t) = \\int v(t)\\,dt$ (position)

Each integration introduces a constant determined by initial conditions.`
    },
    {
      id: 'anti3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Initial Value Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f\'(x) = 6x + 2$ and $f(1) = 8$, find $f(x)$.',
            options: ['$3x^2 + 2x + 3$', '$3x^2 + 2x$', '$6x^2 + 2x + 3$', '$3x^2 + 2x - 3$'],
            correctAnswer: 0,
            explanation: '$f(x) = 3x^2 + 2x + C$. $f(1) = 3 + 2 + C = 8$, so $C = 3$. $f(x) = 3x^2 + 2x + 3$.'
          },
          {
            question: 'A ball is thrown upward with $v(0) = 64$ ft/s from height $s(0) = 80$ ft. If $a(t) = -32$ ft/s$^2$, find $s(t)$.',
            options: ['$-16t^2 + 64t + 80$', '$-32t^2 + 64t + 80$', '$-16t^2 + 64t$', '$-32t + 64$'],
            correctAnswer: 0,
            explanation: '$v(t) = -32t + C_1$. $v(0) = 64 \\Rightarrow C_1 = 64$. $s(t) = -16t^2 + 64t + C_2$. $s(0) = 80 \\Rightarrow C_2 = 80$.'
          }
        ]
      }
    },
    {
      id: 'anti3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. An IVP consists of a derivative equation plus initial condition(s)
2. Find the general antiderivative, then plug in the initial condition to find $C$
3. For particle motion: integrate $a(t)$ to get $v(t)$, integrate $v(t)$ to get $s(t)$`
    }
  ]
};
