export const calcabIntAppsPart3Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia3-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 3 of 7 — Volumes: Disk and Washer Methods**

### Disk Method (rotation about x-axis)

$$V = \pi\int_a^b [f(x)]^2\,dx$$

### Washer Method

$$V = \pi\int_a^b \left([R(x)]^2 - [r(x)]^2\right)\,dx$$

$R$ = outer radius, $r$ = inner radius.

### Rotation About Other Lines

If rotating about $y = k$:
- radius = $|f(x) - k|$`
    },
    {
      id: 'ia3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Disk & Washer** 🎯',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = x^2$ about the $x$-axis from $x = 0$ to $x = 2$. Find the volume.',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$8\\pi$', '$4\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^2 (x^2)^2\\,dx = \\pi\\int_0^2 x^4\\,dx = \\pi[x^5/5]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'Rotate the region between $y = x$ and $y = x^2$ ($0 \\leq x \\leq 1$) about the $x$-axis.',
            options: ['$\\frac{2\\pi}{15}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{15}$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1(x^2 - x^4)\\,dx = \\pi[x^3/3 - x^5/5]_0^1 = \\pi(1/3 - 1/5) = \\frac{2\\pi}{15}$.'
          }
        ]
      }
    },
    {
      id: 'ia3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Disk: $\\pi r^2$ — one function
2. Washer: $\\pi(R^2 - r^2)$ — two functions
3. Adjust radii when rotating about lines other than axes`
    }
  ]
};
