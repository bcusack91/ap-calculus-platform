export const physics1RotationalKinematicsPart4Data = {
  topicSlug: 'rotational-kinematics',
  sections: [
    {
      id: 'rk4-intro',
      type: 'text' as const,
      content: `
# 🛞 Rolling Without Slipping

**Part 4 of 7 — When Rotation Meets Translation**

A ball rolling across the floor, a tire on a road, a bowling ball down a lane — these objects both rotate AND translate. When there is no slipping at the contact point, a special condition connects the two motions.
      `
    },
    {
      id: 'rk4-condition',
      type: 'text' as const,
      content: `
## The Rolling Condition

For an object that **rolls without slipping**:

$$v_{\\text{cm}} = R\\omega$$

Where:
- $v_{\\text{cm}}$ = velocity of the center of mass
- $R$ = radius of the rolling object
- $\\omega$ = angular velocity

### What Does "No Slipping" Mean?

The contact point between the rolling object and the surface is **instantaneously at rest** relative to the surface. Think of a tire on dry pavement — the rubber at the bottom isn't sliding.

### Differentiating the Rolling Condition

$$a_{\\text{cm}} = R\\alpha$$

This connects the linear acceleration of the center of mass to the angular acceleration.

### Distance Traveled

$$d = R\\theta$$

The distance the center moves equals the arc length "unrolled."
      `
    },
    {
      id: 'rk4-velocity-at-points',
      type: 'text' as const,
      content: `
## Velocity at Different Points

For a rolling object (combining translation + rotation):

| Point | Velocity |
|-------|----------|
| **Center** | $v_{\\text{cm}} = R\\omega$ (forward) |
| **Top** | $2v_{\\text{cm}} = 2R\\omega$ (forward) |
| **Bottom (contact)** | $0$ (instantaneously at rest) |

### Why?

- At the **center**: pure translational velocity = $v_{\\text{cm}}$
- At the **top**: translation + rotation = $v_{\\text{cm}} + R\\omega = 2v_{\\text{cm}}$
- At the **bottom**: translation − rotation = $v_{\\text{cm}} - R\\omega = 0$

This is why the contact point has zero velocity — it's the condition for no slipping!
      `
    },
    {
      id: 'rk4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rolling Without Slipping Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel of radius 0.5 m rolls without slipping at $v_{\\text{cm}} = 3$ m/s. Its angular velocity is:',
            options: [
              '1.5 rad/s',
              '3 rad/s',
              '6 rad/s',
              '9 rad/s'
            ],
            correctAnswer: 2,
            explanation: '$\\omega = v_{\\text{cm}}/R = 3/0.5 = 6$ rad/s.'
          },
          {
            question: 'For a ball rolling without slipping, the speed of the top of the ball relative to the ground is:',
            options: [
              '0',
              '$v_{\\text{cm}}$',
              '$2v_{\\text{cm}}$',
              '$v_{\\text{cm}}/2$'
            ],
            correctAnswer: 2,
            explanation: 'The top combines translational velocity $v_{\\text{cm}}$ (forward) and rotational velocity $R\\omega = v_{\\text{cm}}$ (also forward), giving $2v_{\\text{cm}}$.'
          },
          {
            question: 'The contact point of a rolling (no-slip) tire has what velocity relative to the road?',
            options: [
              '$v_{\\text{cm}}$',
              '$2v_{\\text{cm}}$',
              '0',
              '$R\\omega$'
            ],
            correctAnswer: 2,
            explanation: 'Rolling without slipping means the contact point is instantaneously at rest: $v_{\\text{cm}} - R\\omega = 0$.'
          }
        ]
      }
    },
    {
      id: 'rk4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Rolling Calculations** 🧮

1) A tire of radius 0.4 m rolls without slipping. If the car travels at 20 m/s, what is the tire's angular velocity? (in rad/s)

2) A ball of radius 0.1 m rolls without slipping through 5 complete revolutions. How far does its center travel? (in m, round to 2 decimal places)

3) A cylinder rolls without slipping with $\\omega = 15$ rad/s and $R = 0.2$ m. What is the speed of the top of the cylinder? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '3.14', '6'],
        hint1: '$\\omega = v/R = 20/0.4$',
        hint2: '$d = R\\theta = R(5 \\times 2\\pi) = 0.1 \\times 10\\pi$',
        hint3: '$v_{\\text{top}} = 2v_{\\text{cm}} = 2R\\omega$',
        explanation: '1) $\\omega = 20/0.4 = 50$ rad/s. 2) $\\theta = 5 \\times 2\\pi = 10\\pi$ rad. $d = (0.1)(10\\pi) = \\pi \\approx 3.14$ m. 3) $v_{\\text{top}} = 2(0.2)(15) = 6$ m/s.'
      }
    },
    {
      id: 'rk4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Rolling Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The rolling without slipping condition is:',
            options: ['v = Rω', 'v = R/ω', 'v = ω/R', 'v = R²ω'],
            correctIndex: 0,
            explanation: 'The rolling without slipping condition is $v_{\\text{cm}} = R\\omega$.'
          },
          {
            label: 'When rolling without slipping, which point on the wheel is instantaneously at rest?',
            options: ['the center', 'the top', 'the contact point', 'all points have the same speed'],
            correctIndex: 2,
            explanation: 'The contact point is instantaneously at rest (zero velocity) when rolling without slipping.'
          },
          {
            label: 'Rolling without slipping requires what type of friction?',
            options: ['static friction', 'kinetic friction', 'no friction is needed', 'air resistance'],
            correctIndex: 0,
            explanation: 'Rolling without slipping requires static friction (no relative motion at the contact point). Kinetic friction implies slipping.'
          }
        ]
      }
    },
    {
      id: 'rk4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rolling Without Slipping** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A bicycle wheel (radius 0.35 m) completes 100 revolutions. How far has the bicycle traveled?',
            options: [
              '35 m',
              '110 m',
              '220 m',
              '700 m'
            ],
            correctAnswer: 2,
            explanation: '$d = R\\theta = (0.35)(100 \\times 2\\pi) = (0.35)(200\\pi) = 70\\pi \\approx 220$ m.'
          },
          {
            question: 'A bowling ball (radius 0.11 m) is thrown with $v = 8$ m/s. Initially it slides without rolling. Once it rolls without slipping, its angular velocity is approximately:',
            options: [
              '8 rad/s',
              '36 rad/s',
              '73 rad/s',
              '88 rad/s'
            ],
            correctAnswer: 2,
            explanation: 'When rolling without slipping: $\\omega = v/R = 8/0.11 \\approx 72.7 \\approx 73$ rad/s. (The actual final $v$ would be less than 8 m/s due to friction, but this gives the relationship.)'
          }
        ]
      }
    }
  ]
}
