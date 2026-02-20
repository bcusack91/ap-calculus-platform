export const calcbcArcLengthPart2Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc2-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 2 of 7 — Parametric Arc Length**

### Arc Length (Parametric)

$$L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

### Polar Arc Length

$$L = \int_\alpha^\beta \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta$$`
    },
    {
      id: 'arc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parametric/Polar Arc Length** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $r = e^\\theta$ from $\\theta = 0$ to $\\theta = 1$:',
            options: ['$\\sqrt{2}(e - 1)$', '$e - 1$', '$\\sqrt{2}e$', '$2(e - 1)$'],
            correctAnswer: 0,
            explanation: '$dr/d\\theta = e^\\theta$. $L = \\int_0^1 \\sqrt{e^{2\\theta} + e^{2\\theta}}\\,d\\theta = \\int_0^1 e^\\theta\\sqrt{2}\\,d\\theta = \\sqrt{2}(e-1)$.'
          }
        ]
      }
    },
    {
      id: 'arc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Polar arc length: $\\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$.`
    }
  ]
};
