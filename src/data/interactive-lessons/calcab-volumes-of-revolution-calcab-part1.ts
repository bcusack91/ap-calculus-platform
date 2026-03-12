export const calcabVolumesPart1Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol1-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 1 of 7 — Disk Method**

### Rotating Around the x-axis

When rotating $y = f(x)$ around the $x$-axis, each cross-section is a **disk** with radius $f(x)$:

$$V = \\pi\\int_a^b [f(x)]^2\\,dx$$

### Worked Example

Find the volume when $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is rotated about the $x$-axis.

$$V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot 8 = 8\\pi$$`
    },
    {
      id: 'vol1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Disk Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the volume when $y = x^2$ from $x = 0$ to $x = 2$ is rotated about the $x$-axis.',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$\\frac{8\\pi}{3}$', '$4\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^2 (x^2)^2\\,dx = \\pi\\int_0^2 x^4\\,dx = \\pi[\\frac{x^5}{5}]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'Find the volume when $y = \\sin x$ from $x = 0$ to $x = \\pi$ is rotated about the $x$-axis.',
            options: ['$\\frac{\\pi^2}{2}$', '$\\frac{\\pi}{2}$', '$2\\pi$', '$\\pi^2$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^{\\pi} \\sin^2 x\\,dx = \\pi \\cdot \\frac{\\pi}{2} = \\frac{\\pi^2}{2}$ (using the half-angle identity).'
          }
        ]
      }
    },
    {
      id: 'vol1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. **Disk method:** $V = \\pi\\int_a^b [R(x)]^2\\,dx$
2. $R(x)$ is the distance from the curve to the axis of rotation
3. Don't forget to square the radius AND multiply by $\\pi$`
    }
  ]
};
