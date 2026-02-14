export const physics1IntroductionToShmPart4Data = {
  topicSlug: 'introduction-to-shm',
  sections: [
    {
      id: 'sh4-intro',
      type: 'text' as const,
      content: `
# 📊 Position, Velocity, and Acceleration in SHM

**Part 4 of 7 — Sinusoidal Relationships**

The position, velocity, and acceleration of an object in SHM all vary sinusoidally with time, but they are out of phase with each other.
      `
    },
    {
      id: 'sh4-equations',
      type: 'text' as const,
      content: `
## The SHM Equations

Starting from maximum displacement at $t = 0$:

$$x(t) = A\\cos(\\omega t)$$

$$v(t) = -A\\omega\\sin(\\omega t)$$

$$a(t) = -A\\omega^2\\cos(\\omega t)$$

Where $\\omega = 2\\pi/T = 2\\pi f$ is the **angular frequency**.

### Phase Relationships

| Quantity | Expression | Phase Relative to $x$ |
|----------|-----------|----------------------|
| Position $x$ | $A\\cos(\\omega t)$ | Reference (0°) |
| Velocity $v$ | $-A\\omega\\sin(\\omega t)$ | Leads by 90° |
| Acceleration $a$ | $-A\\omega^2\\cos(\\omega t)$ | Leads by 180° |

Key insight: **Acceleration is always opposite to position!**

$$a = -\\omega^2 x$$

This is the defining equation of SHM.
      `
    },
    {
      id: 'sh4-graphs',
      type: 'text' as const,
      content: `
## Reading the Graphs

### At Maximum Displacement ($x = +A$)
- Position: maximum positive
- Velocity: **zero** (turning point)
- Acceleration: maximum **negative** (pointing back to equilibrium)

### At Equilibrium ($x = 0$)
- Position: zero
- Velocity: **maximum** ($\\pm A\\omega$)
- Acceleration: **zero** (no net force)

### Summary Table

| Position | $x = +A$ | $x = 0$ (moving -) | $x = -A$ | $x = 0$ (moving +) |
|----------|---------|-------------------|---------|-------------------|
| Velocity | $0$ | $-A\\omega$ | $0$ | $+A\\omega$ |
| Accel. | $-A\\omega^2$ | $0$ | $+A\\omega^2$ | $0$ |

Notice: when $|x|$ is maximum, $|a|$ is maximum and $v = 0$. When $x = 0$, $|v|$ is maximum and $a = 0$.
      `
    },
    {
      id: 'sh4-phase-quiz',
      type: 'multiple-choice' as const,
      content: `
**Phase Relationship Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In SHM, when the displacement is at its maximum positive value, the acceleration is:',
            options: [
              'Maximum positive',
              'Zero',
              'Maximum negative',
              'Equal to velocity'
            ],
            correctAnswer: 2,
            explanation: 'Since $a = -\\omega^2 x$, when $x = +A$ (max positive), $a = -\\omega^2 A$ (max negative). The acceleration always opposes the displacement.'
          },
          {
            question: 'At the equilibrium position of SHM, which statement is true?',
            options: [
              'Velocity is zero and acceleration is maximum',
              'Velocity is maximum and acceleration is zero',
              'Both velocity and acceleration are zero',
              'Both velocity and acceleration are maximum'
            ],
            correctAnswer: 1,
            explanation: 'At $x = 0$: no restoring force so $a = 0$, and the object has its greatest speed $v_{\\text{max}} = A\\omega$.'
          },
          {
            question: 'The velocity and acceleration in SHM are 90° out of phase. This means:',
            options: [
              'They reach their maxima at the same time',
              'When one is maximum, the other is zero',
              'They are always equal',
              'They always have the same sign'
            ],
            correctAnswer: 1,
            explanation: 'Quantities that are 90° out of phase reach their peaks at different times — when one is at its maximum, the other is zero.'
          }
        ]
      }
    },
    {
      id: 'sh4-values-calc',
      type: 'input-boxes' as const,
      content: `
**SHM Value Calculations** 🧮

A mass oscillates with amplitude $A = 0.20$ m and period $T = 4.0$ s.

1) What is the angular frequency $\\omega$? (in rad/s, round to 3 significant figures)

2) What is the maximum speed $v_{\\text{max}} = A\\omega$? (in m/s, round to 3 significant figures)

3) What is the maximum acceleration $a_{\\text{max}} = A\\omega^2$? (in m/s², round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.57', '0.31', '0.49', '1.570', '0.310', '0.490'],
        hint1: '$\\omega = 2\\pi/T = 2\\pi/4.0$',
        hint2: '$v_{\\text{max}} = A\\omega = 0.20 \\times 1.57$',
        hint3: '$a_{\\text{max}} = A\\omega^2 = 0.20 \\times (1.57)^2$',
        explanation: '1) $\\omega = 2\\pi/4.0 = \\pi/2 \\approx 1.57$ rad/s. 2) $v_{\\text{max}} = 0.20(1.57) = 0.314 \\approx 0.31$ m/s. 3) $a_{\\text{max}} = 0.20(1.57)^2 = 0.20(2.47) = 0.493 \\approx 0.49$ m/s².'
      }
    },
    {
      id: 'sh4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Phase Relationship Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At the equilibrium position, the acceleration of the object is:',
            options: ['zero', 'maximum positive', 'maximum negative', 'half of maximum'],
            correctIndex: 0,
            explanation: 'At the equilibrium position ($x = 0$), the restoring force is zero, so the acceleration is zero.'
          },
          {
            label: 'In SHM, the acceleration is always:',
            options: ['in phase with', '90° ahead of', '180° out of phase with', '90° behind'],
            correctIndex: 2,
            explanation: 'Since $a = -\\omega^2 x$, the acceleration is exactly 180° out of phase with the position — always opposite in sign.'
          },
          {
            label: 'The object reaches its maximum speed at position:',
            options: ['x = 0', 'x = +A', 'x = -A', 'x = A/2'],
            correctIndex: 0,
            explanation: 'The object has its maximum speed when passing through the equilibrium position ($x = 0$), where all the energy is kinetic.'
          }
        ]
      }
    },
    {
      id: 'sh4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Sinusoidal Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For SHM described by $x = 0.10\\cos(5t)$, the maximum acceleration is:',
            options: [
              '$0.50$ m/s²',
              '$2.5$ m/s²',
              '$5.0$ m/s²',
              '$25$ m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a_{\\text{max}} = A\\omega^2 = 0.10 \\times 5^2 = 0.10 \\times 25 = 2.5$ m/s².'
          },
          {
            question: 'If the displacement graph of SHM looks like a cosine function, the velocity graph looks like:',
            options: [
              'A cosine function',
              'A negative sine function',
              'A positive sine function',
              'A constant'
            ],
            correctAnswer: 1,
            explanation: 'If $x = A\\cos(\\omega t)$, then $v = dx/dt = -A\\omega\\sin(\\omega t)$, which is a negative sine function.'
          }
        ]
      }
    }
  ]
}
