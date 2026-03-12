export const calcabParticleMotionPart7Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm7-intro',
      type: 'text' as const,
      content: `# Particle Motion \u2014 Review

**Part 7 of 7 \u2014 Final Assessment**`
    },
    {
      id: 'pm7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $s(t) = t^4 - 8t^2$, when is the particle moving right?',
            options: ['$t > 2$', '$(-2, 0) \\cup (2, \\infty)$', '$(0, 2)$', '$t > 0$'],
            correctAnswer: 1,
            explanation: '$v(t) = 4t^3 - 16t = 4t(t^2-4) = 4t(t-2)(t+2)$. $v > 0$ on $(-2, 0) \\cup (2, \\infty)$.'
          },
          {
            question: 'A particle has $v(t) = e^{-t}(1-t)$. At $t = 1$, is it speeding up or slowing down?',
            options: ['Speeding up', 'Slowing down', 'Neither (at rest)', 'Cannot determine'],
            correctAnswer: 2,
            explanation: '$v(1) = e^{-1}(0) = 0$. The particle is at rest at $t = 1$, so neither speeding up nor slowing down.'
          }
        ]
      }
    },
    {
      id: 'pm7-summary',
      type: 'text' as const,
      content: `### Particle Motion \u2014 Complete! \u2705

You have mastered:
- \u2705 Position, velocity, acceleration relationships
- \u2705 Displacement vs total distance
- \u2705 Speed analysis (speeding up/slowing down)
- \u2705 Finding position from velocity and acceleration`
    }
  ]
};
