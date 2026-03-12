export const physics1AngularMomentumPart1Data = {
  topicSlug: 'angular-momentum',
  sections: [
    {
      id: 'am1-intro',
      type: 'text' as const,
      content: `
# 🌀 Angular Momentum

**Part 1 of 7 — $L = I\\omega$**

Just as linear momentum $p = mv$ describes the "quantity of motion" in a straight line, **angular momentum** $L = I\\omega$ describes the "quantity of rotational motion."
      `
    },
    {
      id: 'am1-definition',
      type: 'text' as const,
      content: `
## Defining Angular Momentum

For a rigid body rotating about a fixed axis:

$$L = I\\omega$$

Where:
- $L$ = angular momentum (kg·m²/s)
- $I$ = rotational inertia (kg·m²)
- $\\omega$ = angular velocity (rad/s)

### For a Point Mass

A particle of mass $m$ moving in a circle of radius $r$:

$$L = mvr$$

(since $I = mr^2$ and $\\omega = v/r$, so $L = mr^2 \\cdot v/r = mvr$)

### Direction and Sign

Like torque, angular momentum follows a sign convention:
- CCW rotation → $L > 0$ (positive)
- CW rotation → $L < 0$ (negative)

### Units

$$[L] = \\text{kg·m}^2\\text{/s}$$
      `
    },
    {
      id: 'am1-analogy',
      type: 'text' as const,
      content: `
## Linear-Rotational Analogies

| Linear | Rotational |
|--------|-----------|
| Mass $m$ | Rotational inertia $I$ |
| Velocity $v$ | Angular velocity $\\omega$ |
| Momentum $p = mv$ | Angular momentum $L = I\\omega$ |
| Force $F$ | Torque $\\tau$ |
| $F = ma$ | $\\tau = I\\alpha$ |
| $F = dp/dt$ | $\\tau = dL/dt$ |

### Key Insight

Angular momentum is large when:
- The object has a **large rotational inertia** (lots of mass far from axis)
- The object spins **fast** (large $\\omega$)

A massive, slowly spinning flywheel can have the same $L$ as a tiny, rapidly spinning top.
      `
    },
    {
      id: 'am1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Angular Momentum Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The angular momentum of a spinning wheel is $L = I\\omega$. If the angular velocity doubles while the rotational inertia stays the same, $L$:',
            options: [
              'Stays the same',
              'Doubles',
              'Quadruples',
              'Halves'
            ],
            correctAnswer: 1,
            explanation: '$L = I\\omega$. If $\\omega \\to 2\\omega$ and $I$ is unchanged, then $L \\to 2I\\omega = 2L$.'
          },
          {
            question: 'A 2 kg ball moves at 5 m/s in a circle of radius 3 m. Its angular momentum is:',
            options: [
              '10 kg·m²/s',
              '15 kg·m²/s',
              '30 kg·m²/s',
              '90 kg·m²/s'
            ],
            correctAnswer: 2,
            explanation: '$L = mvr = (2)(5)(3) = 30$ kg·m²/s.'
          },
          {
            question: 'Which has greater angular momentum: a hoop ($I = MR^2$) or a disk ($I = \\frac{1}{2}MR^2$) with the same $M$, $R$, and $\\omega$?',
            options: [
              'The disk',
              'The hoop',
              'They are equal',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: '$L = I\\omega$. The hoop has larger $I$ ($MR^2 > \\frac{1}{2}MR^2$), so it has larger $L$ at the same $\\omega$.'
          }
        ]
      }
    },
    {
      id: 'am1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Angular Momentum Calculations** 🧮

1) A solid disk ($M = 4$ kg, $R = 0.5$ m) spins at $\\omega = 10$ rad/s. What is its angular momentum? (in kg·m²/s)

2) A particle of mass 0.5 kg moves at 8 m/s in a circle of radius 2 m. What is its angular momentum? (in kg·m²/s)

3) A flywheel has $L = 200$ kg·m²/s and $I = 25$ kg·m². What is its angular velocity? (in rad/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '8', '8'],
        hint1: '$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0.25) = 0.5$ kg·m². $L = I\\omega$',
        hint2: '$L = mvr = (0.5)(8)(2)$',
        hint3: '$\\omega = L/I = 200/25$',
        explanation: '1) $I = \\frac{1}{2}(4)(0.25) = 0.5$ kg·m². $L = (0.5)(10) = 5$ kg·m²/s. 2) $L = (0.5)(8)(2) = 8$ kg·m²/s. 3) $\\omega = 200/25 = 8$ rad/s.'
      }
    },
    {
      id: 'am1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Angular Momentum Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The SI units of angular momentum are:',
            options: ['kg·m/s', 'kg·m²/s', 'N·m', 'kg·m²/s²'],
            correctIndex: 1,
            explanation: 'Angular momentum has units of kg·m²/s (rotational inertia × angular velocity).'
          },
          {
            label: 'The equation that defines angular momentum for a rigid body is:',
            options: ['p = mv', 'L = Iω', 'F = ma', 'τ = Iα'],
            correctIndex: 1,
            explanation: '$L = I\\omega$ is the definition of angular momentum for a rigid rotating body.'
          },
          {
            label: 'Angular momentum depends on which two quantities?',
            options: ['mass and velocity', 'rotational inertia and angular velocity', 'force and distance', 'torque and time'],
            correctIndex: 1,
            explanation: 'Angular momentum depends on rotational inertia $I$ and angular velocity $\\omega$: $L = I\\omega$.'
          }
        ]
      }
    },
    {
      id: 'am1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Angular Momentum Basics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Earth has a rotational inertia of about $9.7 \\times 10^{37}$ kg·m² and rotates once every 24 hours. Its angular momentum is approximately:',
            options: [
              '$7.1 \\times 10^{33}$ kg·m²/s',
              '$7.1 \\times 10^{37}$ kg·m²/s',
              '$9.7 \\times 10^{37}$ kg·m²/s',
              '$2.4 \\times 10^{39}$ kg·m²/s'
            ],
            correctAnswer: 0,
            explanation: '$\\omega = 2\\pi/(24 \\times 3600) = 7.27 \\times 10^{-5}$ rad/s. $L = I\\omega = (9.7 \\times 10^{37})(7.27 \\times 10^{-5}) \\approx 7.1 \\times 10^{33}$ kg·m²/s.'
          },
          {
            question: 'Two identical disks rotate about the same axis. Disk A spins at $\\omega$ and Disk B at $2\\omega$. The ratio $L_B/L_A$ is:',
            options: [
              '1',
              '2',
              '4',
              '1/2'
            ],
            correctAnswer: 1,
            explanation: 'Same $I$: $L_B/L_A = I(2\\omega)/(I\\omega) = 2$.'
          }
        ]
      }
    }
  ]
}
