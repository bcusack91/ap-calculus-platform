export const physics1RotationalKinematicsPart1Data = {
  topicSlug: 'rotational-kinematics',
  sections: [
    {
      id: 'rk1-intro',
      type: 'text' as const,
      content: `
# 🔄 Angular Quantities

**Part 1 of 7 — $\\theta$, $\\omega$, $\\alpha$ and Their Linear Analogues**

Everything you learned about linear kinematics has a rotational counterpart. In this part, we introduce the angular quantities that describe rotational motion.
      `
    },
    {
      id: 'rk1-angular-position',
      type: 'text' as const,
      content: `
## Angular Position $\\theta$

The **angular position** $\\theta$ describes how far an object has rotated from a reference direction.

| Quantity | Linear | Angular |
|----------|--------|---------|
| Position | $x$ (meters) | $\\theta$ (radians) |

### Radians

One complete revolution = $2\\pi$ radians = $360°$

$$1 \\text{ rad} = \\frac{360°}{2\\pi} \\approx 57.3°$$

### Converting Degrees to Radians

$$\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180°}$$

### Arc Length Connection

The arc length $s$ swept by a point at distance $r$ from the axis:

$$s = r\\theta$$

This only works when $\\theta$ is in **radians**!
      `
    },
    {
      id: 'rk1-angular-velocity',
      type: 'text' as const,
      content: `
## Angular Velocity $\\omega$

**Angular velocity** $\\omega$ ("omega") is the rate of change of angular position:

$$\\omega = \\frac{\\Delta\\theta}{\\Delta t}$$

| Quantity | Linear | Angular |
|----------|--------|---------|
| Velocity | $v$ (m/s) | $\\omega$ (rad/s) |

### Sign Convention
- CCW rotation → $\\omega > 0$ (positive)
- CW rotation → $\\omega < 0$ (negative)

### RPM to rad/s

$$\\omega = \\text{RPM} \\times \\frac{2\\pi}{60}$$

### Period and Frequency

$$\\omega = 2\\pi f = \\frac{2\\pi}{T}$$

where $f$ is frequency (Hz) and $T$ is period (seconds).
      `
    },
    {
      id: 'rk1-angular-acceleration',
      type: 'text' as const,
      content: `
## Angular Acceleration $\\alpha$

**Angular acceleration** $\\alpha$ ("alpha") is the rate of change of angular velocity:

$$\\alpha = \\frac{\\Delta\\omega}{\\Delta t}$$

| Quantity | Linear | Angular |
|----------|--------|---------|
| Acceleration | $a$ $(m/s^{2})$ | $\\alpha$ $(rad/s^{2})$ |

### Key Analogies

| Linear | Angular |
|--------|---------|
| $x$ | $\\theta$ |
| $v$ | $\\omega$ |
| $a$ | $\\alpha$ |
| $F$ | $\\tau$ |
| $m$ | $I$ |

### Speeding Up vs. Slowing Down
- If $\\omega$ and $\\alpha$ have the **same sign** → object speeds up (angular speed increases)
- If $\\omega$ and $\\alpha$ have **opposite signs** → object slows down (angular speed decreases)
      `
    },
    {
      id: 'rk1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Angular Quantities Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'One complete revolution equals:',
            options: [
              '$\\pi$ radians',
              '$2\\pi$ radians',
              '$\\pi/2$ radians',
              '1 radian'
            ],
            correctAnswer: 1,
            explanation: 'One full revolution = $360° = 2\\pi$ radians.'
          },
          {
            question: 'A wheel rotates at 120 RPM. Its angular velocity in rad/s is:',
            options: [
              '$2\\pi$',
              '$4\\pi$',
              '$120\\pi$',
              '$240\\pi$'
            ],
            correctAnswer: 1,
            explanation: '$\\omega = 120 \\times 2\\pi/60 = 4\\pi$ rad/s.'
          },
          {
            question: 'A disk rotates counterclockwise and is slowing down. The signs of $\\omega$ and $\\alpha$ are:',
            options: [
              'Both positive',
              'Both negative',
              '$\\omega$ positive, $\\alpha$ negative',
              '$\\omega$ negative, $\\alpha$ positive'
            ],
            correctAnswer: 2,
            explanation: 'CCW rotation means $\\omega > 0$. Slowing down means $\\alpha$ opposes $\\omega$, so $\\alpha < 0$.'
          }
        ]
      }
    },
    {
      id: 'rk1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Angular Quantities Calculations** 🧮

1) Convert 90° to radians. Express as a decimal rounded to 2 places.

2) A merry-go-round completes one revolution in 8 seconds. What is its angular velocity? (in rad/s, round to 3 significant figures)

3) A fan blade accelerates from rest to 600 RPM in 10 seconds. What is the angular acceleration? (in $rad/s^{2}$, round to 3 significant figures, use $\\pi \\approx 3.14$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.57', '0.79', '6.3'],
        hint1: '$\\theta = 90 \\times \\pi/180 = \\pi/2$',
        hint2: '$\\omega = 2\\pi/T = 2\\pi/8$',
        hint3: '$\\omega_f = 600 \\times 2\\pi/60 = 20\\pi$ rad/s. $\\alpha = \\omega_f/t = 20\\pi/10$',
        explanation: '1) $90 \\times \\pi/180 = \\pi/2 \\approx 1.57$ rad. 2) $\\omega = 2\\pi/8 = \\pi/4 \\approx 0.79$ rad/s. 3) $\\omega_f = 600 \\times 2\\pi/60 = 20\\pi \\approx 62.8$ rad/s. $\\alpha = 62.8/10 = 6.28 \\approx 6.3$ $rad/s^{2}$.'
      }
    },
    {
      id: 'rk1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Angular Analogues Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Angular position θ is the rotational analogue of:',
            options: ['velocity $v$', 'position $x$', 'acceleration $a$', 'force $F$'],
            correctIndex: 1,
            explanation: 'Angular position $\\theta$ is the rotational analogue of linear position $x$.'
          },
          {
            label: 'The SI unit for angular quantities is:',
            options: ['degrees', 'radians', 'revolutions', 'meters'],
            correctIndex: 1,
            explanation: 'The SI unit for angular quantities is the radian. Always convert to radians for calculations.'
          },
          {
            label: 'The relationship between angular velocity ω and frequency f is:',
            options: ['$2\\pi f$', '$\\pi f$', '$f/2\\pi$', '$2\\pi/f$'],
            correctIndex: 0,
            explanation: '$\\omega = 2\\pi f$ relates angular velocity to frequency.'
          }
        ]
      }
    },
    {
      id: 'rk1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Angular Quantities** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A point on the rim of a wheel (radius 0.5 m) moves through an arc length of 3.14 m. The wheel has rotated through:',
            options: [
              '$\\pi$ radians',
              '$2\\pi$ radians',
              '$\\pi/2$ radians',
              '1 radian'
            ],
            correctAnswer: 1,
            explanation: '$\\theta = s/r = 3.14/0.5 = 6.28 = 2\\pi$ radians (one full revolution).'
          },
          {
            question: 'A wheel\'s angular velocity changes from $10$ rad/s to $30$ rad/s in 5 seconds. The angular acceleration is:',
            options: [
              '2 $rad/s^{2}$',
              '4 $rad/s^{2}$',
              '6 $rad/s^{2}$',
              '8 $rad/s^{2}$'
            ],
            correctAnswer: 1,
            explanation: '$\\alpha = \\Delta\\omega/\\Delta t = (30 - 10)/5 = 20/5 = 4$ $rad/s^{2}$.'
          }
        ]
      }
    }
  ]
}
