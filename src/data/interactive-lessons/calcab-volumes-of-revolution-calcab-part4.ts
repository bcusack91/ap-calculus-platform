export const calcabVolumesPart4Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol4-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 4 of 7 — Cross-Sectional Volumes**

### Known Cross-Sections

Instead of rotating, we can have cross-sections that are squares, semicircles, equilateral triangles, etc.

$$V = \\int_a^b A(x)\\,dx$$

where $A(x)$ is the area of the cross-section at position $x$.

### Common Cross-Section Formulas

If the base goes from $y = g(x)$ to $y = f(x)$, the side length is $s = f(x) - g(x)$.

| Cross-section | Area Formula |
|--------------|-------------|
| Square | $A = s^2$ |
| Semicircle | $A = \\frac{\\pi s^2}{8}$ |
| Equilateral triangle | $A = \\frac{\\sqrt{3}}{4}s^2$ |
| Isosceles right triangle (leg = side) | $A = \\frac{s^2}{2}$ |

### Worked Example

Base is the region between $y = \\sqrt{x}$ and $y = 0$ on $[0, 4]$. Cross-sections perpendicular to $x$-axis are **squares**.

$s = \\sqrt{x} - 0 = \\sqrt{x}$. $A = (\\sqrt{x})^2 = x$.

$$V = \\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = 8$$`
    },
    {
      id: 'vol4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cross-Section Volumes** 🎯',
      exercise: {
        questions: [
          {
            question: 'Base between $y = x$ and $y = x^2$ on $[0,1]$. Cross-sections perpendicular to x-axis are squares. Find the volume.',
            options: ['$\\frac{1}{30}$', '$\\frac{1}{6}$', '$\\frac{1}{15}$', '$\\frac{2}{15}$'],
            correctAnswer: 0,
            explanation: '$s = x - x^2$. $A = s^2 = (x-x^2)^2 = x^2 - 2x^3 + x^4$. $V = \\int_0^1 (x^2-2x^3+x^4)\\,dx = [\\frac{x^3}{3}-\\frac{x^4}{2}+\\frac{x^5}{5}]_0^1 = \\frac{1}{3}-\\frac{1}{2}+\\frac{1}{5} = \\frac{1}{30}$.'
          },
          {
            question: 'Same base. Cross-sections are equilateral triangles. Find the volume.',
            options: ['$\\frac{\\sqrt{3}}{120}$', '$\\frac{\\sqrt{3}}{30}$', '$\\frac{1}{30}$', '$\\frac{\\sqrt{3}}{60}$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{\\sqrt{3}}{4}(x-x^2)^2$. $V = \\frac{\\sqrt{3}}{4} \\cdot \\frac{1}{30} = \\frac{\\sqrt{3}}{120}$.'
          }
        ]
      }
    },
    {
      id: 'vol4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. Cross-section problems: $V = \\int A(x)\\,dx$
2. Find the side length from the base region, then apply the area formula
3. **This is a common AP free-response topic!**`
    }
  ]
};
