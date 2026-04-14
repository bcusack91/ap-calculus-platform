export const calcabParticleMotionPart4Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 4 of 7 \u2014 Position from Velocity (Integration)**

### Finding Position from Velocity

$$\\boxed{s(t) = s(t_0) + \\int_{t_0}^{t} v(\\tau)\\,d\\tau}$$

This combines the initial condition $s(t_0)$ with the displacement $\\int v\\,dt$.

### Worked Example

> $v(t) = 3t^2 - 2$ and $s(0) = 5$. Find $s(t)$.

$$s(t) = s(0) + \\int_0^t (3\\tau^2 - 2)\\,d\\tau = 5 + [\\tau^3 - 2\\tau]_0^t = 5 + t^3 - 2t$$

$$\\boxed{s(t) = t^3 - 2t + 5}$$

### Position at a Specific Time

> $v(t) = 6t - 4$, $s(1) = 3$. Find $s(4)$.

$$s(4) = s(1) + \\int_1^4 (6t-4)\\,dt = 3 + [3t^2 - 4t]_1^4$$
$$= 3 + (48-16) - (3-4) = 3 + 32 + 1 = 36$$

> **Key Fact:** You don't need to find $s(t)$ as a formula \u2014 just compute the definite integral and add the initial position.`
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Position from Velocity** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$v(t) = 4t$, $s(0) = 2$. Find $s(3)$.',
            options: ['$20$', '$18$', '$12$', '$38$'],
            correctAnswer: 0,
            explanation: '$s(3) = 2 + \\int_0^3 4t\\,dt = 2 + [2t^2]_0^3 = 2 + 18 = 20$.'
          },
          {
            question: '$v(t) = \\cos t$, $s(0) = 0$. The position function is:',
            options: ['$s(t) = \\sin t$', '$s(t) = \\cos t$', '$s(t) = -\\sin t$', '$s(t) = t$'],
            correctAnswer: 0,
            explanation: '$s(t) = 0 + \\int_0^t \\cos \\tau\\,d\\tau = [\\sin \\tau]_0^t = \\sin t$.'
          },
          {
            question: '$v(t) = -2$ (constant). $s(0) = 10$. After 5 seconds, $s(5) =$',
            options: ['$0$', '$10$', '$-10$', '$20$'],
            correctAnswer: 0,
            explanation: '$s(5) = 10 + \\int_0^5 (-2)dt = 10 + (-10) = 0$.'
          }
        ]
      }
    },
    {
      id: 'pm4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Build the position function.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$v(t) = 2t + 1$, $s(0) = 3$. What is $s(t)$?',
            options: ['$t^2 + t + 3$', '$t^2 + t$', '$2t + 1$', '$t^2 + 3$'],
            correctAnswers: ['$t^2 + t + 3$'],
            hints: ['$\\int (2t+1)dt = t^2 + t + C$. $s(0) = 3$ gives $C = 3$.'],
            explanation: '$s(t) = t^2 + t + 3$.'
          },
          {
            label: 'To find position at time $b$ given $s(a)$ and $v(t)$, use:',
            options: ['$s(b) = s(a) + \\int_a^b v(t)\\,dt$', '$s(b) = \\int_a^b v(t)\\,dt$', '$s(b) = v(b)$', '$s(b) = s(a) \\cdot b$'],
            correctAnswers: ['$s(b) = s(a) + \\int_a^b v(t)\\,dt$'],
            hints: ['Initial position plus displacement.'],
            explanation: 'Position = initial position + displacement (integral of velocity).'
          },
          {
            label: 'If $\\int_0^5 v(t)\\,dt = -7$ and $s(0) = 10$, then $s(5) =$',
            options: ['$3$', '$-7$', '$17$', '$10$'],
            correctAnswers: ['$3$'],
            hints: ['$s(5) = s(0) + \\int_0^5 v\\,dt = 10 + (-7)$.'],
            explanation: '$s(5) = 10 + (-7) = 3$.'
          }
        ]
      }
    },
    {
      id: 'pm4-input',
      type: 'input-box' as const,
      content: '**Find position.** \u270d\ufe0f',
      exercise: {
        question: '$v(t) = 6t - 4$ and $s(1) = 3$. Find $s(4)$.\n\n(Enter an integer.)',
        correctAnswer: '36',
        acceptableAnswers: ['36'],
        hints: [
          '$s(4) = s(1) + \\int_1^4 (6t-4)\\,dt$.',
          '$\\int_1^4 (6t-4)dt = [3t^2 - 4t]_1^4 = (48-16)-(3-4) = 32+1 = 33$.',
          '$s(4) = 3 + 33 = 36$.'
        ],
        explanation: '$s(4) = 3 + 33 = 36$.'
      }
    },
    {
      id: 'pm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- $s(t) = s(t_0) + \\int_{t_0}^t v(\\tau)\\,d\\tau$
- Initial condition + displacement gives position
- You can find $s$ at a specific time without finding $s(t)$ as a formula
- AP FRQs often give $v(t)$ and initial position, ask for $s$ at another time`
    }
  ]
};
