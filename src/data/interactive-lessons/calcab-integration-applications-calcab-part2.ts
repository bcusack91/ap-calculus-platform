export const calcabIntAppsPart2Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia2-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 2 of 7 — Cross-Sectional Volumes**

### Volume with Known Cross Sections

$$V = \int_a^b A(x)\,dx$$

where $A(x)$ is the area of the cross section at position $x$.

### Common Cross Sections

If the base is between $y = f(x)$ and $y = g(x)$, the side length is $s = f(x) - g(x)$.

| Shape | Area Formula |
|-------|-------------|
| Square | $s^2$ |
| Semicircle | $\\frac{\pi}{8}s^2$ |
| Equilateral triangle | $\\frac{\sqrt{3}}{4}s^2$ |
| Isosceles right triangle | $\\frac{1}{2}s^2$ |`
    },
    {
      id: 'ia2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cross Sections** 🎯\n\nBase is the region between $y = \\sqrt{x}$ and $y = 0$ from $x = 0$ to $x = 4$. Cross sections perpendicular to $x$-axis are squares.',
      exercise: {
        questions: [
          {
            question: 'Find the volume.',
            options: ['$8$', '$4$', '$16$', '$\\frac{8}{3}$'],
            correctAnswer: 0,
            explanation: 'Side $= \\sqrt{x}$. $A(x) = (\\sqrt{x})^2 = x$. $V = \\int_0^4 x\\,dx = [x^2/2]_0^4 = 8$.'
          }
        ]
      }
    },
    {
      id: 'ia2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Volume = $\\int A(x)\\,dx$ where $A(x)$ = cross-section area
2. The side length of the cross section comes from the curve`
    }
  ]
};
