export const calcabVolumesPart2Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol2-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 2 of 7 — Washer Method**

### When There's a Hole

Rotating a region between two curves creates a **washer** (disk with a hole):

$$V = \\pi\\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)\\,dx$$

- $R(x)$ = outer radius (farther from axis)
- $r(x)$ = inner radius (closer to axis)

### Worked Example

Region between $y = x$ and $y = x^2$, rotated about the $x$-axis ($x \\in [0,1]$).

Outer: $R = x$. Inner: $r = x^2$.

$$V = \\pi\\int_0^1 (x^2 - x^4)\\,dx = \\pi\\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\frac{2\\pi}{15}$$`
    },
    {
      id: 'vol2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Washer Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Region between $y = \\sqrt{x}$ and $y = x$ is rotated about the $x$-axis. Find the volume.',
            options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: 'On $[0,1]$, $\\sqrt{x} \\geq x$. $V = \\pi\\int_0^1 (x - x^2)\\,dx = \\pi[\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\pi(\\frac{1}{2} - \\frac{1}{3}) = \\frac{\\pi}{6}$.'
          },
          {
            question: 'The region bounded by $y = 4 - x^2$ and $y = 0$ is rotated about the $x$-axis. Find the volume.',
            options: ['$\\frac{512\\pi}{15}$', '$\\frac{256\\pi}{15}$', '$\\frac{128\\pi}{5}$', '$16\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_{-2}^{2} (4-x^2)^2\\,dx = 2\\pi\\int_0^2 (16-8x^2+x^4)\\,dx = 2\\pi[16x - \\frac{8x^3}{3} + \\frac{x^5}{5}]_0^2 = 2\\pi(32 - \\frac{64}{3} + \\frac{32}{5}) = \\frac{512\\pi}{15}$.'
          }
        ]
      }
    },
    {
      id: 'vol2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. **Washer method:** $V = \\pi\\int [R^2 - r^2]\\,dx$
2. Identify outer and inner radii carefully
3. The disk method is a special case where $r = 0$`
    }
  ]
};
