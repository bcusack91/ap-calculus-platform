export const calcabParticleMotionPart4Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 4 of 7 \u2014 Position from Velocity**

### Given $v(t)$, Find $s(t)$

$$s(t) = s(0) + \\int_0^t v(\\tau)\\,d\\tau$$

### Worked Example

$v(t) = 3t^2 - 2$, $s(0) = 5$. Find $s(2)$.

$s(2) = 5 + \\int_0^2 (3t^2 - 2)\\,dt = 5 + [t^3 - 2t]_0^2 = 5 + (8-4) = 9$`
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Finding Position** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A particle starts at $s(0) = 3$ with $v(t) = 4 - 2t$. Find $s(5)$.',
            options: ['$-2$', '$8$', '$3$', '$-7$'],
            correctAnswer: 0,
            explanation: '$s(5) = 3 + \\int_0^5 (4-2t)\\,dt = 3 + [4t-t^2]_0^5 = 3 + (20-25) = 3 - 5 = -2$.'
          },
          {
            question: 'With the same $v(t)$, what is the farthest right the particle reaches?',
            options: ['$s(2) = 7$', '$s(3) = 6$', '$s(1) = 6$', '$s(4) = 3$'],
            correctAnswer: 0,
            explanation: '$v(t) = 0$ at $t = 2$. $v$ changes $+ \\to -$, so max position at $t=2$. $s(2) = 3 + [4t-t^2]_0^2 = 3 + 4 = 7$.'
          }
        ]
      }
    },
    {
      id: 'pm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. Position = initial position + displacement
2. Maximum/minimum position occurs when $v = 0$ (direction change)`
    }
  ]
};
