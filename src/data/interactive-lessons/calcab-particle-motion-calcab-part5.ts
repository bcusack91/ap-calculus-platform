export const calcabParticleMotionPart5Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 5 of 7 \u2014 Velocity from Acceleration**

### Given $a(t)$, Find $v(t)$

$$v(t) = v(0) + \\int_0^t a(\\tau)\\,d\\tau$$

### Free Fall Model

Near Earth's surface: $a(t) = -g = -9.8$ m/s$^2$ (or $-32$ ft/s$^2$)

$v(t) = v_0 - gt$

$s(t) = s_0 + v_0 t - \\frac{1}{2}gt^2$`
    },
    {
      id: 'pm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Acceleration to Velocity** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A ball is thrown up at 48 ft/s from 160 ft. When does it hit the ground? ($a = -32$ ft/s$^2$)',
            options: ['$t = 5$ s', '$t = 3$ s', '$t = 4$ s', '$t = 10$ s'],
            correctAnswer: 0,
            explanation: '$s(t) = 160 + 48t - 16t^2 = 0$. $-16t^2 + 48t + 160 = 0$. $t^2 - 3t - 10 = 0$. $(t-5)(t+2) = 0$. $t = 5$ s.'
          }
        ]
      }
    },
    {
      id: 'pm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
1. Integrate acceleration to find velocity
2. Free fall: $a = -g$ (constant), giving quadratic position`
    }
  ]
};
