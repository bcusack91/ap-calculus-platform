export const calcabVolumesPart3Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol3-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 3 of 7 — Rotation About Other Axes**

### Rotating About $y = k$ or $x = k$

When rotating about a line other than the $x$-axis, adjust the radii:

**Rotation about $y = k$ (horizontal line):**
- $R(x) = |f(x) - k|$ (distance from outer curve to axis)
- $r(x) = |g(x) - k|$ (distance from inner curve to axis)

### Worked Example

Rotate the region between $y = x^2$ and $y = 1$ about $y = 2$.

On $[-1, 1]$: Outer radius: $R = 2 - x^2$. Inner radius: $r = 2 - 1 = 1$.

$$V = \\pi\\int_{-1}^{1} [(2-x^2)^2 - 1^2]\\,dx = 2\\pi\\int_0^1 (4-4x^2+x^4 - 1)\\,dx$$
$$= 2\\pi\\int_0^1 (3-4x^2+x^4)\\,dx = 2\\pi\\left[3x - \\frac{4x^3}{3} + \\frac{x^5}{5}\\right]_0^1 = 2\\pi\\left(3 - \\frac{4}{3} + \\frac{1}{5}\\right) = \\frac{56\\pi}{15}$$`
    },
    {
      id: 'vol3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rotation About Other Lines** 🎯',
      exercise: {
        questions: [
          {
            question: 'Region between $y = x$ and $y = x^2$ on $[0,1]$ is rotated about $y = -1$. What are the radii?',
            options: ['$R = x + 1$, $r = x^2 + 1$', '$R = x - 1$, $r = x^2 - 1$', '$R = 1 - x$, $r = 1 - x^2$', '$R = x$, $r = x^2$'],
            correctAnswer: 0,
            explanation: 'Distance from $y = x$ to $y = -1$ is $x - (-1) = x + 1$ (outer). Distance from $y = x^2$ to $y = -1$ is $x^2 + 1$ (inner).'
          }
        ]
      }
    },
    {
      id: 'vol3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. Radius = distance from curve to axis of rotation
2. When axis is below: $R = f(x) - k$
3. When axis is above: $R = k - f(x)$
4. Always think: what's farther (outer) vs closer (inner) to the axis`
    }
  ]
};
