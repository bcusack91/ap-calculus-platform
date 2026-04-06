export const calcabTheoremsPart2Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm2-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 2 of 7 — The Mean Value Theorem (MVT)**

### Statement

If $f$ is **continuous** on $[a, b]$ and **differentiable** on $(a, b)$, then there exists $c \in (a, b)$ such that:

$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

### Geometric Meaning

There's a point where the tangent line is parallel to the secant line.

### Worked Example

$f(x) = x^2$ on $[1, 3]$.

Average rate: $\\frac{9-1}{3-1} = 4$.

$f'(c) = 2c = 4 \implies c = 2$.

The tangent at $x = 2$ is parallel to the secant from $(1,1)$ to $(3,9)$.`
    },
    {
      id: 'thm2-quiz1',
      type: 'multiple-choice' as const,
      content: '**MVT** 🎯',
      exercise: {
        questions: [
          {
            question: '$f(x) = x^3 - 3x$ on $[0, 2]$. Find the value of $c$ guaranteed by MVT.',
            options: ['$c = \\frac{2}{\\sqrt{3}}$', '$c = 1$', '$c = \\sqrt{2}$', '$c = \\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'Average rate: $\\frac{(8-6) - 0}{2} = 1$. $f\'(c) = 3c^2 - 3 = 1$. $c^2 = 4/3$. $c = \\frac{2}{\\sqrt{3}}$.'
          },
          {
            question: 'MVT requires which two conditions?',
            options: ['Continuous on $[a,b]$ AND differentiable on $(a,b)$', 'Continuous on $[a,b]$ only', 'Differentiable on $[a,b]$ only', '$f\'$ is continuous'],
            correctAnswer: 0,
            explanation: 'MVT needs both continuity on $[a,b]$ and differentiability on $(a,b)$.'
          }
        ]
      }
    },
    {
      id: 'thm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. MVT: instantaneous rate = average rate at some point
2. Requires continuity AND differentiability
3. On the AP exam, always verify both conditions`
    }
  ]
};
