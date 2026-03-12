export const physics1OneDimensionalMotionPart3Data = {
  topicSlug: 'one-dimensional-motion',
  sections: [
    {
      id: 'om3-intro',
      type: 'text' as const,
      content: `
# ⚡ Acceleration

**Part 3 of 7 — One-Dimensional Motion**

So far we know how to describe *where* an object is (position) and *how fast* it moves (velocity). Now we need to describe *how the velocity itself changes* — that's **acceleration**.

Acceleration is the rate of change of velocity, just as velocity is the rate of change of position.
      `
    },
    {
      id: 'om3-definition',
      type: 'text' as const,
      content: `
## Defining Acceleration

**Average acceleration** is the change in velocity divided by the elapsed time:

$$a_{\\text{avg}} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}$$

### Properties

| Property | Description |
|----------|-------------|
| **Vector quantity** | Has magnitude and direction (sign) |
| **SI unit** | m/s² (meters per second squared) |
| **Meaning** | How much velocity changes each second |

### Example

A car goes from $v_i = 10$ m/s to $v_f = 30$ m/s in 4 s:

$$a_{\\text{avg}} = \\frac{30 - 10}{4} = \\frac{20}{4} = 5 \\text{ m/s}^2$$

This means the car's velocity increases by 5 m/s every second.
      `
    },
    {
      id: 'om3-sign-of-acceleration',
      type: 'text' as const,
      content: `
## The Sign of Acceleration

A common misconception: **negative acceleration does NOT always mean slowing down!**

What matters is the relationship between the **signs of velocity and acceleration**:

| Velocity | Acceleration | Result |
|----------|-------------|--------|
| + | + | Speeding up (in + direction) |
| + | − | Slowing down (in + direction) |
| − | − | Speeding up (in − direction) |
| − | + | Slowing down (in − direction) |

### Rule of Thumb

- **Same sign** (velocity and acceleration): object **speeds up**
- **Opposite signs**: object **slows down**

### Example

A car moving west (negative direction) at $v_i = -20$ m/s accelerates to $v_f = -30$ m/s in 5 s:

$$a = \\frac{-30 - (-20)}{5} = \\frac{-10}{5} = -2 \\text{ m/s}^2$$

Both velocity and acceleration are negative → the car is **speeding up** (going faster in the negative direction).
      `
    },
    {
      id: 'om3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Acceleration** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A car moves east at 25 m/s and brakes to 5 m/s in 4 s. Taking east as positive, what is the average acceleration?',
            options: [
              '+5 m/s²',
              '-5 m/s²',
              '+7.5 m/s²',
              '-7.5 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a = (v_f - v_i)/\\Delta t = (5 - 25)/4 = -20/4 = -5$ m/s². The negative sign indicates the acceleration is directed west (opposite to the motion), causing the car to slow down.'
          },
          {
            question: 'An object has velocity $v = -8$ m/s and acceleration $a = -3$ m/s². The object is:',
            options: [
              'Speeding up in the negative direction',
              'Slowing down in the negative direction',
              'Speeding up in the positive direction',
              'At rest'
            ],
            correctAnswer: 0,
            explanation: 'When velocity and acceleration have the same sign (both negative here), the object speeds up. It\'s moving in the negative direction and getting faster.'
          },
          {
            question: 'An object has velocity $v = +6$ m/s and acceleration $a = -2$ m/s². After 1 second, the velocity is:',
            options: [
              '+8 m/s',
              '+4 m/s',
              '+6 m/s',
              '-2 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_f = v_i + a \\cdot \\Delta t = 6 + (-2)(1) = 4$ m/s. The velocity decreased by 2 m/s because the acceleration opposes the motion.'
          }
        ]
      }
    },
    {
      id: 'om3-calculations',
      type: 'input-boxes' as const,
      content: `
**Acceleration Calculations** 🧮

1) A train accelerates from rest to 36 m/s in 12 s. What is the average acceleration? (in m/s²)

2) A ball rolling at 14 m/s comes to rest in 7 s. What is the average acceleration? (in m/s², include the sign)

3) An object has acceleration $a = 4$ m/s² and initial velocity $v_i = 3$ m/s. What is the velocity after 5 s? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-2', '23'],
        hint1: '$a = \\Delta v / \\Delta t = (36 - 0)/12$',
        hint2: '$a = (v_f - v_i)/\\Delta t = (0 - 14)/7$',
        hint3: '$v_f = v_i + a \\cdot t = 3 + 4(5)$',
        explanation: '1) $a = (36 - 0)/12 = 3$ m/s². 2) $a = (0 - 14)/7 = -2$ m/s². The negative sign indicates deceleration. 3) $v_f = 3 + 4(5) = 3 + 20 = 23$ m/s.'
      }
    },
    {
      id: 'om3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Acceleration Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An object with positive velocity and negative acceleration is:',
            options: ['speeding up', 'slowing down', 'at constant velocity', 'at rest'],
            correctIndex: 1,
            explanation: 'Opposite signs of velocity and acceleration mean the object is slowing down.'
          },
          {
            label: 'The SI unit of acceleration is:',
            options: ['m/s', 'm/s²', 'km/h', 'N'],
            correctIndex: 1,
            explanation: 'Acceleration = change in velocity / time = (m/s)/s = m/s².'
          },
          {
            label: 'If acceleration is zero, the object must be:',
            options: ['at rest', 'speeding up', 'moving at constant velocity', 'slowing down'],
            correctIndex: 2,
            explanation: 'Zero acceleration means velocity is not changing — the object moves at constant velocity (which could be zero, i.e., at rest, but "at rest" is a special case of constant velocity).'
          }
        ]
      }
    },
    {
      id: 'om3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Acceleration** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A bicycle goes from 2 m/s to 8 m/s in 3 s, then from 8 m/s to 5 m/s in 2 s. What is the average acceleration over the entire 5 s?',
            options: [
              '0.6 m/s²',
              '1.0 m/s²',
              '2.0 m/s²',
              '3.0 m/s²'
            ],
            correctAnswer: 0,
            explanation: 'For the entire interval: $a_{\\text{avg}} = (v_f - v_i)/\\Delta t = (5 - 2)/5 = 3/5 = 0.6$ m/s². Only the initial and final velocities and total time matter for the overall average.'
          },
          {
            question: 'A car is moving at $-15$ m/s. It has an acceleration of $+3$ m/s². After 5 seconds, the car will be:',
            options: [
              'Moving at $-30$ m/s',
              'Moving at $0$ m/s',
              'Moving at $+15$ m/s',
              'Moving at $-15$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_f = v_i + at = -15 + (3)(5) = -15 + 15 = 0$ m/s. The car decelerates to rest because the acceleration opposes the velocity.'
          }
        ]
      }
    }
  ]
}
