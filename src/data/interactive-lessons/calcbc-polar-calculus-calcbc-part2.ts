export const calcbcPolarPart2Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar2-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 2 of 7 — Area in Polar Coordinates**

### Area Formula

$$A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$$

### Worked Example: Cardioid

$r = 1 + \cos\theta$, find total area.

$$A = \frac{1}{2}\int_0^{2\pi}(1 + \cos\theta)^2\,d\theta$$

Expand: $(1 + \cos\theta)^2 = 1 + 2\cos\theta + \cos^2\theta = 1 + 2\cos\theta + \frac{1+\cos 2\theta}{2}$

$= \frac{3}{2} + 2\cos\theta + \frac{\cos 2\theta}{2}$

$$A = \frac{1}{2}\int_0^{2\pi}\left(\frac{3}{2} + 2\cos\theta + \frac{\cos 2\theta}{2}\right)d\theta = \frac{1}{2}\cdot 3\pi = \frac{3\pi}{2}$$`
    },
    {
      id: 'polar2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polar Area** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $r = 3\\cos\\theta$.',
            options: ['$\\frac{9\\pi}{4}$', '$9\\pi$', '$\\frac{9\\pi}{2}$', '$3\\pi$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}\\int_0^{\\pi}(3\\cos\\theta)^2\\,d\\theta = \\frac{9}{2}\\int_0^{\\pi}\\cos^2\\theta\\,d\\theta = \\frac{9}{2} \\cdot \\frac{\\pi}{2} = \\frac{9\\pi}{4}$.'
          }
        ]
      }
    },
    {
      id: 'polar2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Area = $\\frac{1}{2}\\int r^2\\,d\\theta$
2. Choose bounds carefully — trace the curve once!`
    }
  ]
};
