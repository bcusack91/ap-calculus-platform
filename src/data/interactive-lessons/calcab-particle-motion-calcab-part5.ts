export const calcabParticleMotionPart5Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 5 of 7 \u2014 Acceleration & Velocity from Integrals**

### Finding Velocity from Acceleration

$$\\boxed{v(t) = v(t_0) + \\int_{t_0}^{t} a(\\tau)\\,d\\tau}$$

### Full Chain: $a \\to v \\to s$

| Given | To Find | Formula |
|:---:|:---:|:---:|
| $a(t)$ and $v(t_0)$ | $v(t)$ | $v(t_0) + \\int_{t_0}^t a\\,d\\tau$ |
| $v(t)$ and $s(t_0)$ | $s(t)$ | $s(t_0) + \\int_{t_0}^t v\\,d\\tau$ |
| $a(t)$, $v(t_0)$, $s(t_0)$ | $s(t)$ | Integrate twice |

### Worked Example

> $a(t) = 6t$, $v(0) = -4$, $s(0) = 1$. Find $s(t)$.

**Step 1:** $v(t) = -4 + \\int_0^t 6\\tau\\,d\\tau = -4 + 3t^2$

**Step 2:** $s(t) = 1 + \\int_0^t (-4 + 3\\tau^2)\\,d\\tau = 1 - 4t + t^3$

$$\\boxed{s(t) = t^3 - 4t + 1}$$

### When Does the Particle Change Direction?

$v(t) = 3t^2 - 4 = 0$ at $t = 2/\\sqrt{3}$. Check sign change: $v(0) = -4 < 0$, $v(2) = 8 > 0$. Direction changes at $t = 2/\\sqrt{3}$.`
    },
    {
      id: 'pm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Integration** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$a(t) = 2$, $v(0) = 5$. Find $v(3)$.',
            options: ['$11$', '$6$', '$10$', '$8$'],
            correctAnswer: 0,
            explanation: '$v(3) = 5 + \\int_0^3 2\\,dt = 5 + 6 = 11$.'
          },
          {
            question: '$a(t) = -10$ (gravity), $v(0) = 30$ m/s. When does the object reach max height?',
            options: ['$t = 3$ s', '$t = 10$ s', '$t = 30$ s', '$t = 1$ s'],
            correctAnswer: 0,
            explanation: '$v(t) = 30 - 10t = 0$ at $t = 3$. Max height when $v = 0$.'
          },
          {
            question: '$a(t) = \\cos t$, $v(0) = 0$. The velocity function is:',
            options: ['$v(t) = \\sin t$', '$v(t) = \\cos t$', '$v(t) = -\\sin t$', '$v(t) = t$'],
            correctAnswer: 0,
            explanation: '$v(t) = 0 + \\int_0^t \\cos\\tau\\,d\\tau = \\sin t$.'
          }
        ]
      }
    },
    {
      id: 'pm5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Build from acceleration.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$a(t) = 4$, $v(0) = -6$, $s(0) = 10$. $v(t) =$',
            options: ['$4t - 6$', '$4t$', '$-6$', '$4t + 10$'],
            correctAnswers: ['$4t - 6$'],
            hints: ['$v(t) = v(0) + \\int_0^t 4\\,d\\tau = -6 + 4t$.'],
            explanation: '$v(t) = -6 + 4t = 4t - 6$.'
          },
          {
            label: 'Continuing: $s(t) =$',
            options: ['$2t^2 - 6t + 10$', '$4t - 6$', '$2t^2 + 10$', '$-6t + 10$'],
            correctAnswers: ['$2t^2 - 6t + 10$'],
            hints: ['$s(t) = 10 + \\int_0^t (4\\tau - 6)d\\tau$.'],
            explanation: '$s(t) = 10 + [2\\tau^2 - 6\\tau]_0^t = 2t^2 - 6t + 10$.'
          },
          {
            label: 'The particle changes direction at $t =$',
            options: ['$3/2$', '$5/2$', '$2$', '$1$'],
            correctAnswers: ['$3/2$'],
            hints: ['$v(t) = 4t - 6 = 0$.'],
            explanation: '$4t - 6 = 0$ at $t = 3/2$. $v$ changes from negative to positive there.'
          }
        ]
      }
    },
    {
      id: 'pm5-input',
      type: 'input-box' as const,
      content: '**Find velocity.** \u270d\ufe0f',
      exercise: {
        question: '$a(t) = 6t - 2$ and $v(0) = 4$. Find $v(2)$.\n\n(Enter an integer.)',
        correctAnswer: '12',
        acceptableAnswers: ['12'],
        hints: [
          '$v(t) = 4 + \\int_0^t (6\\tau - 2)\\,d\\tau$.',
          '$= 4 + [3\\tau^2 - 2\\tau]_0^t = 4 + 3t^2 - 2t$.',
          '$v(2) = 4 + 12 - 4 = 12$.'
        ],
        explanation: '$v(2) = 4 + 3(4) - 2(2) = 4 + 12 - 4 = 12$.'
      }
    },
    {
      id: 'pm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- $v(t) = v(t_0) + \\int_{t_0}^t a\\,d\\tau$
- Integrate twice to go from $a$ to $s$
- Each integration adds a constant (initial condition)
- Direction changes when $v(t)$ changes sign`
    }
  ]
};
