export const calcabParticleMotionPart6Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm6-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'pm6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Motion Problems** \ud83c\udfaf\n\nA particle moves with $v(t) = 2\\sin(t)$ for $t \\geq 0$.',
      exercise: {
        questions: [
          {
            question: 'Find the total distance traveled on $[0, 2\\pi]$.',
            options: ['$0$', '$4$', '$8$', '$2\\pi$'],
            correctAnswer: 2,
            explanation: '$v = 0$ at $t = 0, \\pi, 2\\pi$. $\\int_0^{\\pi} 2\\sin t\\,dt + \\int_{\\pi}^{2\\pi} 2|\\sin t|\\,dt = 4 + 4 = 8$.'
          },
          {
            question: 'At what time on $(0, 2\\pi)$ is the speed maximum?',
            options: ['$t = \\pi/2$ and $t = 3\\pi/2$', '$t = \\pi$', '$t = \\pi/2$ only', '$t = 0$'],
            correctAnswer: 0,
            explanation: 'Speed $= |2\\sin t|$. Maximum when $|\\sin t| = 1$, at $t = \\pi/2$ and $t = 3\\pi/2$.'
          }
        ]
      }
    },
    {
      id: 'pm6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
