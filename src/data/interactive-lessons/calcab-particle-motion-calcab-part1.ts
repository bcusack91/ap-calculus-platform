export const calcabParticleMotionPart1Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm1-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 1 of 7 \u2014 Position, Velocity, and Acceleration**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Position, velocity, acceleration** |
| 2 | Speed & direction of motion |
| 3 | Displacement vs. total distance |
| 4 | Position from velocity (integration) |
| 5 | Acceleration & velocity from integrals |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

### The Motion Hierarchy

$$\\boxed{s(t) \\xrightarrow{\\text{derivative}} v(t) \\xrightarrow{\\text{derivative}} a(t)}$$
$$\\boxed{a(t) \\xrightarrow{\\text{integral}} v(t) \\xrightarrow{\\text{integral}} s(t)}$$

| Function | Symbol | Relationship |
|:---:|:---:|:---:|
| Position | $s(t)$ or $x(t)$ | Given or found by integrating $v$ |
| Velocity | $v(t) = s'(t)$ | Derivative of position |
| Acceleration | $a(t) = v'(t) = s''(t)$ | Derivative of velocity |

### Worked Example

> $s(t) = t^3 - 6t^2 + 9t + 2$. Find $v(t)$ and $a(t)$.

$$v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$$
$$a(t) = v'(t) = 6t - 12 = 6(t-2)$$

> **Key Fact:** Velocity is signed (direction matters). Speed is $|v(t)|$ (always non-negative).`
    },
    {
      id: 'pm1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Finding v and a** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$s(t) = t^2 - 4t + 7$. Find $v(2)$.',
            options: ['$0$', '$4$', '$-4$', '$3$'],
            correctAnswer: 0,
            explanation: '$v(t) = 2t - 4$. $v(2) = 4 - 4 = 0$.'
          },
          {
            question: '$s(t) = \\sin(2t)$. The acceleration is:',
            options: ['$a(t) = -4\\sin(2t)$', '$a(t) = 2\\cos(2t)$', '$a(t) = -2\\sin(2t)$', '$a(t) = 4\\cos(2t)$'],
            correctAnswer: 0,
            explanation: '$v(t) = 2\\cos(2t)$. $a(t) = -4\\sin(2t)$.'
          },
          {
            question: 'If $v(t) = 0$ at time $t = c$, the particle is:',
            options: ['At rest (momentarily stopped)', 'At the origin', 'Accelerating', 'Moving left'],
            correctAnswer: 0,
            explanation: '$v = 0$ means the particle has zero velocity \u2014 it is momentarily at rest (but may still be accelerating).'
          }
        ]
      }
    },
    {
      id: 'pm1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Connect the concepts.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'To find when a particle is at rest, solve:',
            options: ['$v(t) = 0$', '$s(t) = 0$', '$a(t) = 0$', '$s\'\'(t) = 0$'],
            correctAnswers: ['$v(t) = 0$'],
            hints: ['"At rest" means zero velocity.'],
            explanation: 'At rest means $v(t) = 0$.'
          },
          {
            label: 'Acceleration is the derivative of:',
            options: ['Velocity', 'Position', 'Speed', 'Distance'],
            correctAnswers: ['Velocity'],
            hints: ['$a(t) = v\'(t)$.'],
            explanation: '$a(t) = v\'(t) = s\'\'(t)$.'
          },
          {
            label: 'For $s(t) = t^3 - 6t^2 + 9t$, the particle is at rest when $t =$',
            options: ['$1$ and $3$', '$0$ and $2$', '$2$ only', '$1$ only'],
            correctAnswers: ['$1$ and $3$'],
            hints: ['$v(t) = 3t^2-12t+9 = 3(t-1)(t-3)$.'],
            explanation: '$v(t) = 3(t-1)(t-3) = 0$ at $t = 1$ and $t = 3$.'
          }
        ]
      }
    },
    {
      id: 'pm1-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: '$s(t) = 2t^3 - 9t^2 + 12t$. Find the acceleration at $t = 1$.\n\n(Enter an integer.)',
        correctAnswer: '-6',
        acceptableAnswers: ['-6'],
        hints: [
          '$v(t) = 6t^2 - 18t + 12$.',
          '$a(t) = 12t - 18$.',
          '$a(1) = 12 - 18 = -6$.'
        ],
        explanation: '$a(t) = 12t - 18$. $a(1) = -6$.'
      }
    },
    {
      id: 'pm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- $v(t) = s'(t)$: velocity is the derivative of position
- $a(t) = v'(t) = s''(t)$: acceleration is the derivative of velocity
- At rest: $v(t) = 0$
- Velocity has sign (direction); speed is $|v(t)|$`
    }
  ]
};
