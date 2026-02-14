export const physics1IntroductionToShmPart7Data = {
  topicSlug: 'introduction-to-shm',
  sections: [
    {
      id: 'sh7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Introduction to SHM**

This final part ties together restoring forces, mass-spring systems, pendulums, sinusoidal relationships, and parameter connections — everything you need for the AP exam.
      `
    },
    {
      id: 'sh7-big-picture',
      type: 'text' as const,
      content: `
## Big Picture: SHM at a Glance

### Definition
SHM occurs when a restoring force is **proportional** to displacement: $F = -kx$.

### Two Model Systems

| | Mass-Spring | Simple Pendulum |
|--|-----------|----------------|
| **Restoring force** | Spring: $F = -kx$ | Gravity: $F \\approx -(mg/L)x$ |
| **Period** | $T = 2\\pi\\sqrt{m/k}$ | $T = 2\\pi\\sqrt{L/g}$ |
| **Depends on mass?** | Yes | No |
| **Depends on gravity?** | No | Yes |
| **Depends on amplitude?** | No | No (small angles) |

### Kinematic Equations

$$x(t) = A\\cos(\\omega t) \\qquad v(t) = -A\\omega\\sin(\\omega t) \\qquad a(t) = -A\\omega^2\\cos(\\omega t)$$

### Maximum Values

$$v_{\\text{max}} = A\\omega \\qquad a_{\\text{max}} = A\\omega^2$$

### The Defining Relationship

$$a = -\\omega^2 x$$
      `
    },
    {
      id: 'sh7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid

❌ **"Doubling amplitude doubles the period"** — Amplitude does NOT affect period.

❌ **"Heavier pendulum bobs swing slower"** — Mass does NOT affect pendulum period.

❌ **"Velocity is maximum at maximum displacement"** — Velocity is ZERO at the endpoints; it is maximum at equilibrium.

❌ **"Acceleration is zero at maximum displacement"** — Acceleration is MAXIMUM at the endpoints; it is zero at equilibrium.

❌ **"Period of a spring depends on gravity"** — Spring period depends on $m$ and $k$ only.

❌ **"A pendulum on the Moon has the same period"** — Moon has $g_{\\text{Moon}} \\approx g/6$, so $T$ increases by $\\sqrt{6}$.
      `
    },
    {
      id: 'sh7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A horizontal mass-spring system oscillates on a frictionless surface. If taken to the Moon (where $g$ is less), the period will:',
            options: [
              'Increase',
              'Decrease',
              'Stay the same',
              'Depend on the amplitude'
            ],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{m/k}$. Gravity does not appear — the period of a horizontal mass-spring system is independent of $g$.'
          },
          {
            question: 'Two springs have constants $k$ and $3k$. Identical masses are attached. The ratio of their periods $T_1/T_2$ is:',
            options: [
              '$1/3$',
              '$1/\\sqrt{3}$',
              '$\\sqrt{3}$',
              '$3$'
            ],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{m/k}$, so $T_1/T_2 = \\sqrt{k_2/k_1} = \\sqrt{3k/k} = \\sqrt{3}$.'
          },
          {
            question: 'An oscillating object has $v_{\\text{max}} = 2.0$ m/s and $a_{\\text{max}} = 8.0$ m/s². What is the angular frequency?',
            options: [
              '$0.25$ rad/s',
              '$2.0$ rad/s',
              '$4.0$ rad/s',
              '$16$ rad/s'
            ],
            correctAnswer: 2,
            explanation: '$v_{\\text{max}} = A\\omega$ and $a_{\\text{max}} = A\\omega^2$. Dividing: $a_{\\text{max}}/v_{\\text{max}} = \\omega = 8.0/2.0 = 4.0$ rad/s.'
          }
        ]
      }
    },
    {
      id: 'sh7-ap-calc',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) A block-spring system has $v_{\\text{max}} = 3.0$ m/s and $a_{\\text{max}} = 12$ m/s². What is the amplitude? (in m, round to 2 decimal places)

2) A pendulum has $L = 2.5$ m. How many complete oscillations does it make in 60 s? (round to the nearest whole number)

3) A mass on a spring has $k = 50$ N/m and $m = 2.0$ kg. At $x = 0.08$ m, what is the magnitude of the acceleration? (in m/s²)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.75', '19', '2.0'],
        hint1: '$\\omega = a_{\\text{max}}/v_{\\text{max}} = 4.0$. Then $A = v_{\\text{max}}/\\omega$',
        hint2: '$T = 2\\pi\\sqrt{2.5/9.8}$. Number of cycles $= 60/T$',
        hint3: '$a = -(k/m)x = -(50/2.0)(0.08)$',
        explanation: '1) $\\omega = 12/3.0 = 4.0$ rad/s. $A = 3.0/4.0 = 0.75$ m. 2) $T = 2\\pi\\sqrt{2.5/9.8} = 2\\pi(0.505) = 3.173$ s. Cycles $= 60/3.173 = 18.9 \\approx 19$. 3) $|a| = (k/m)|x| = (50/2.0)(0.08) = 25(0.08) = 2.0$ m/s².'
      }
    },
    {
      id: 'sh7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Synthesis Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For simple harmonic motion to occur, the restoring force must be:',
            options: ['proportional to displacement', 'constant', 'proportional to velocity', 'random'],
            correctIndex: 0,
            explanation: 'SHM requires a restoring force proportional to displacement: $F = -kx$.'
          },
          {
            label: 'In SHM, the maximum speed of the object occurs:',
            options: ['at the endpoints', 'at equilibrium', 'at half amplitude', 'everywhere equally'],
            correctIndex: 1,
            explanation: 'Maximum speed occurs at the equilibrium position where all energy is kinetic.'
          },
          {
            label: 'The phase difference between acceleration and displacement in SHM is:',
            options: ['90°', '180°', '0°', '270°'],
            correctIndex: 1,
            explanation: 'Acceleration and displacement are 180° out of phase: $a = -\\omega^2 x$. When $x$ is positive, $a$ is negative.'
          },
          {
            label: 'If the amplitude of an ideal SHM system is increased, the period:',
            options: ['increases', 'decreases', 'stays the same', 'becomes infinite'],
            correctIndex: 2,
            explanation: 'Changing the amplitude does not affect the period of an ideal SHM system.'
          }
        ]
      }
    },
    {
      id: 'sh7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Introduction to SHM** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which graph best represents the potential energy of a mass on a spring as a function of displacement?',
            options: [
              'A straight line through the origin',
              'A parabola opening upward, centered at $x = 0$',
              'A horizontal line',
              'A sinusoidal curve'
            ],
            correctAnswer: 1,
            explanation: 'The elastic PE is $U = \\frac{1}{2}kx^2$, which is a parabola opening upward with its minimum at $x = 0$.'
          },
          {
            question: 'A spring system and a pendulum have the same period on Earth. On the Moon, which has a longer period?',
            options: [
              'The spring system',
              'The pendulum',
              'They still have the same period',
              'Cannot determine without more information'
            ],
            correctAnswer: 1,
            explanation: 'The spring period ($T = 2\\pi\\sqrt{m/k}$) is unaffected by $g$. The pendulum period ($T = 2\\pi\\sqrt{L/g}$) increases when $g$ decreases. So the pendulum has the longer period on the Moon.'
          }
        ]
      }
    }
  ]
}
