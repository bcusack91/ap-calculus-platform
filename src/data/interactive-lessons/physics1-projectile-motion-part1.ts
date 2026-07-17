export const physics1ProjectileMotionPart1Data = {
  topicSlug: 'projectile-motion',
  sections: [
    {
      id: 'pm1-intro',
      type: 'text' as const,
      content: `
# 🚀 Horizontal Launch

**Part 1 of 7 — Projectile Motion**

A **projectile** is any object that moves through the air under the influence of gravity alone (ignoring air resistance). The simplest case is a **horizontal launch** — when an object is launched with only horizontal velocity and no initial vertical velocity.
      `
    },
    {
      id: 'pm1-setup',
      type: 'text' as const,
      content: `
## Horizontal Launch Setup

When a projectile is launched horizontally:

- Initial horizontal velocity: $v_{0x} = v_0$
- Initial vertical velocity: $v_{0y} = 0$
- Horizontal acceleration: $a_x = 0$
- Vertical acceleration: $a_y = -g$ (downward)

### Equations of Motion

| Horizontal | Vertical |
|---|---|
| $x = v_0 t$ | $\\Delta y = -\\frac{1}{2}gt^2$ |
| $v_x = v_0$ (constant) | $v_y = -gt$ |
| | $v_y^2 = -2g\\Delta y$ |

### Path Shape

The trajectory is a **parabola** that curves downward. The horizontal spacing remains even (constant $v_x$), while the vertical drops increase (accelerating due to gravity).
      `
    },
    {
      id: 'pm1-examples',
      type: 'text' as const,
      content: `
## Real-World Examples of Horizontal Launch

- A ball rolling off a table
- A package dropped from a moving airplane
- Water flowing over a waterfall
- A bullet fired from a horizontal gun

In all these cases, the object starts with horizontal velocity and zero vertical velocity. Gravity then pulls it downward while it continues forward at constant speed.

### Key Insight

The **time to fall** depends only on the **height**, not on how fast the object moves horizontally. A ball dropped from a table and a ball launched at 100 m/s from the same table both hit the ground at the same time!
      `
    },
    {
      id: 'pm1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A marble rolls off a 1.25 m high table. Using $g = 10$ $m/s^{2}$, how long does it take to hit the floor?',
            options: [
              '0.25 s',
              '0.5 s',
              '1.0 s',
              '1.25 s'
            ],
            correctAnswer: 1,
            explanation: '$1.25 = \\frac{1}{2}(10)t^2 = 5t^2$, so $t^2 = 0.25$, $t = 0.5$ s. The horizontal speed of the marble doesn\'t matter!'
          },
          {
            question: 'During a horizontal launch, the horizontal velocity:',
            options: [
              'Increases linearly',
              'Decreases linearly',
              'Remains constant',
              'Increases then decreases'
            ],
            correctAnswer: 2,
            explanation: 'With no horizontal force (ignoring air resistance), $a_x = 0$, so $v_x$ stays constant throughout the flight.'
          },
          {
            question: 'The path of a horizontally launched projectile is:',
            options: [
              'A straight line',
              'A circle',
              'A parabola',
              'An ellipse'
            ],
            correctAnswer: 2,
            explanation: 'Since $x = v_0t$ and $y = -\\frac{1}{2}gt^2$, eliminating $t$ gives $y = -\\frac{g}{2v_0^2}x^2$, which is a parabola.'
          }
        ]
      }
    },
    {
      id: 'pm1-calculations',
      type: 'input-boxes' as const,
      content: `
**Horizontal Launch Calculations** 🧮

A ball is launched horizontally at 10 m/s from the top of a 20 m cliff. Use $g = 10$ $m/s^{2}$.

1) Time to reach the ground (in seconds)

2) Horizontal distance from the cliff base (in meters)

3) Vertical velocity at impact, magnitude (in m/s)

4) Total speed at impact (in m/s, round to nearest whole number)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['2', '20', '20', '22'],
        hint1: '$20 = \\frac{1}{2}(10)t^2 = 5t^2$',
        hint2: '$t = 2$ s. $x = 10(2) = 20$ m. $v_y = 10(2) = 20$ m/s.',
        hint3: '$v = \\sqrt{10^2 + 20^2} = \\sqrt{500} \\approx 22.4$, round to 22.',
        explanation: '1) $t = 2$ s. 2) $x = 10(2) = 20$ m. 3) $v_y = 10(2) = 20$ m/s. 4) $v = \\sqrt{100 + 400} = \\sqrt{500} \\approx 22$ m/s.'
      }
    },
    {
      id: 'pm1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a horizontal launch, $v_{0y}$ is:',
            options: ['$v_0$', '$v_0\\cos\\theta$', '$v_0\\sin\\theta$', '0'],
            correctIndex: 3,
            explanation: 'In a horizontal launch, all initial velocity is horizontal, so $v_{0y} = 0$.'
          },
          {
            label: 'Doubling the height from which a ball is launched horizontally will change the fall time by a factor of:',
            options: ['2', '$\\sqrt{2}$', '4', '$\\frac{1}{2}$'],
            correctIndex: 1,
            explanation: 'Since $h = \\frac{1}{2}gt^2$, we get $t = \\sqrt{\\frac{2h}{g}}$. Doubling $h$ multiplies $t$ by $\\sqrt{2}$.'
          },
          {
            label: 'If the launch speed is doubled (horizontal launch from the same height), the range:',
            options: ['stays the same', 'doubles', 'quadruples', 'halves'],
            correctIndex: 1,
            explanation: 'Range $= v_0 \\cdot t$. Since $t$ depends only on height (unchanged), doubling $v_0$ doubles the range.'
          }
        ]
      }
    },
    {
      id: 'pm1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A plane flying at 500 m altitude at 100 m/s drops a package. Using $g = 10$ $m/s^{2}$, how far horizontally does the package travel before hitting the ground?',
            options: [
              '500 m',
              '1000 m',
              '5000 m',
              '2500 m'
            ],
            correctAnswer: 1,
            explanation: 'Fall time: $500 = 5t^2$, $t = 10$ s. Range: $x = 100(10) = 1000$ m.'
          },
          {
            question: 'In the problem above, the horizontal velocity of the package just before it hits the ground is:',
            options: [
              '0 m/s',
              '50 m/s',
              '100 m/s',
              '200 m/s'
            ],
            correctAnswer: 2,
            explanation: 'The horizontal velocity remains constant at 100 m/s throughout the fall since $a_x = 0$.'
          }
        ]
      }
    }
  ]
}
