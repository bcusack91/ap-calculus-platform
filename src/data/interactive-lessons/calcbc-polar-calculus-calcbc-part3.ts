export const calcbcPolarPart3Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar3-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 3 of 7 — Area Between Polar Curves**

### Area Between Two Polar Curves

$$A = \frac{1}{2}\int_\alpha^\beta \left(r_{\text{outer}}^2 - r_{\text{inner}}^2\right)\,d\theta$$

### Finding Intersection Points

Set $r_1 = r_2$ and solve for $\theta$. Also check the origin ($r = 0$).`
    },
    {
      id: 'polar3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area Between Curves** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find intersections of $r = 2\\sin\\theta$ and $r = 1$.',
            options: ['$\\theta = \\pi/6$ and $\\theta = 5\\pi/6$', '$\\theta = \\pi/4$ and $\\theta = 3\\pi/4$', '$\\theta = \\pi/3$ and $\\theta = 2\\pi/3$', '$\\theta = 0$ and $\\theta = \\pi$'],
            correctAnswer: 0,
            explanation: '$2\\sin\\theta = 1$, $\\sin\\theta = 1/2$, $\\theta = \\pi/6$ or $5\\pi/6$.'
          }
        ]
      }
    },
    {
      id: 'polar3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
For area between curves: $\\frac{1}{2}\\int(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$.`
    }
  ]
};
