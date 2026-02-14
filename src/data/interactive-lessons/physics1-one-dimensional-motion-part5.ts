export const physics1OneDimensionalMotionPart5Data = {
  topicSlug: 'one-dimensional-motion',
  sections: [
    {
      id: 'om5-intro',
      type: 'text' as const,
      content: `
# 🍎 Free Fall

**Part 5 of 7 — One-Dimensional Motion**

**Free fall** is a special case of constant acceleration where the only force acting on an object is gravity. Near Earth's surface, all objects in free fall experience the same acceleration — regardless of mass!

$$g = 9.8 \\text{ m/s}^2 \\approx 10 \\text{ m/s}^2$$

This is one of the most elegant results in physics, first demonstrated by Galileo.
      `
    },
    {
      id: 'om5-setup',
      type: 'text' as const,
      content: `
## Setting Up Free Fall Problems

### Sign Convention (standard)

Taking **upward as positive**:
- $a = -g = -9.8$ m/s²
- Upward velocities are **positive**
- Downward velocities are **negative**

### The Kinematic Equations for Free Fall

| General Form | Free Fall Version |
|-------------|-------------------|
| $v = v_0 + at$ | $v = v_0 - gt$ |
| $y = y_0 + v_0t + \\frac{1}{2}at^2$ | $y = y_0 + v_0t - \\frac{1}{2}gt^2$ |
| $v^2 = v_0^2 + 2a\\Delta y$ | $v^2 = v_0^2 - 2g\\Delta y$ |

### Key Facts

- At the **highest point**, $v = 0$ (momentarily at rest)
- The acceleration is **always** $-g$, even at the top
- Objects spend **equal time** going up and coming down (if launched and caught at same height)
      `
    },
    {
      id: 'om5-dropped',
      type: 'text' as const,
      content: `
## Dropped Objects

When an object is dropped from rest: $v_0 = 0$

The equations simplify to:
- $v = -gt$
- $y = y_0 - \\frac{1}{2}gt^2$
- $v^2 = -2g\\Delta y$

### Example: Dropping a stone

A stone is dropped from a 45 m cliff. How long does it take to hit the ground?

Taking $y_0 = 45$ m and the ground as $y = 0$:

$$0 = 45 - \\frac{1}{2}(9.8)t^2$$

$$t^2 = \\frac{2(45)}{9.8} = 9.18$$

$$t = 3.03 \\text{ s}$$

What is its speed at impact?

$$v = -gt = -(9.8)(3.03) = -29.7 \\text{ m/s}$$

Speed = $|v| = 29.7$ m/s (about 107 km/h!)
      `
    },
    {
      id: 'om5-thrown-up',
      type: 'text' as const,
      content: `
## Objects Thrown Upward

When thrown upward with $v_0 > 0$:

### Finding Maximum Height

At the top, $v = 0$:

$$0 = v_0^2 - 2g\\Delta y$$

$$\\Delta y_{\\text{max}} = \\frac{v_0^2}{2g}$$

### Finding Total Time (launched and caught at same height)

Time up = time down, and at the top $v = 0$:

$$0 = v_0 - gt_{\\text{up}}$$

$$t_{\\text{up}} = \\frac{v_0}{g}$$

$$t_{\\text{total}} = 2t_{\\text{up}} = \\frac{2v_0}{g}$$

### Example

A ball is thrown upward at 19.6 m/s:
- Max height: $\\Delta y = 19.6^2 / (2 \\times 9.8) = 19.6$ m
- Time up: $t = 19.6/9.8 = 2.0$ s
- Total time: $4.0$ s
      `
    },
    {
      id: 'om5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Free Fall** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown straight up. At the very top of its path, its acceleration is:',
            options: [
              '0 m/s²',
              '9.8 m/s² upward',
              '9.8 m/s² downward',
              'Changing from upward to downward'
            ],
            correctAnswer: 2,
            explanation: 'Acceleration due to gravity is ALWAYS 9.8 m/s² downward during free fall — even at the top. The velocity is zero at the top, but the acceleration never changes.'
          },
          {
            question: 'Two balls are dropped from the same height — one has mass 1 kg, the other 5 kg. Ignoring air resistance, which hits the ground first?',
            options: [
              'The 1 kg ball',
              'The 5 kg ball',
              'They hit at the same time',
              'It depends on their size'
            ],
            correctAnswer: 2,
            explanation: 'In free fall (no air resistance), all objects fall with the same acceleration $g = 9.8$ m/s², regardless of mass. This was Galileo\'s great insight.'
          },
          {
            question: 'A ball is thrown upward at 30 m/s. How fast is it moving when it returns to the same height? (Ignore air resistance)',
            options: [
              '0 m/s',
              '15 m/s',
              '30 m/s',
              '60 m/s'
            ],
            correctAnswer: 2,
            explanation: 'By symmetry (or using $v^2 = v_0^2 - 2g\\Delta y$ with $\\Delta y = 0$), the speed at return equals the launch speed: 30 m/s. The velocity is $-30$ m/s (downward).'
          }
        ]
      }
    },
    {
      id: 'om5-calculations',
      type: 'input-boxes' as const,
      content: `
**Free Fall Calculations** 🧮

Use $g = 9.8$ m/s².

1) A ball is dropped from a height of 19.6 m. How long does it take to hit the ground? (in seconds)

2) An object is thrown straight up at 29.4 m/s. What maximum height does it reach? (in meters)

3) A stone is dropped from rest. What is its speed after 3 seconds of falling? (in m/s)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '44.1', '29.4', '44.10', '29.40'],
        hint1: '$0 = 19.6 - \\frac{1}{2}(9.8)t^2$, solve for $t$.',
        hint2: '$\\Delta y_{\\text{max}} = v_0^2/(2g) = 29.4^2/(2 \\times 9.8)$',
        hint3: '$v = gt = 9.8 \\times 3$',
        explanation: '1) $t^2 = 2(19.6)/9.8 = 4$, so $t = 2$ s. 2) $\\Delta y = (29.4)^2/(2 \\times 9.8) = 864.36/19.6 = 44.1$ m. 3) $v = 9.8 \\times 3 = 29.4$ m/s.'
      }
    },
    {
      id: 'om5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Free Fall Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At the highest point of a ball thrown upward, the velocity is:',
            options: ['9.8 m/s', 'equal to $v_0$', 'zero', 'undefined'],
            correctIndex: 2,
            explanation: 'At the maximum height, the ball momentarily stops before falling back down, so $v = 0$.'
          },
          {
            label: 'During free fall, the acceleration is:',
            options: ['zero at the top', 'always 9.8 m/s² downward', 'depends on mass', 'increasing'],
            correctIndex: 1,
            explanation: 'Acceleration due to gravity is constant at 9.8 m/s² downward throughout the entire free fall, including at the top.'
          },
          {
            label: 'The time for a ball to go up equals the time to come down when:',
            options: ['always', 'the ball is caught at launch height', 'the ball is heavy', 'acceleration changes'],
            correctIndex: 1,
            explanation: 'Symmetry of free fall applies when the ball returns to the same height from which it was launched.'
          }
        ]
      }
    },
    {
      id: 'om5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Free Fall** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward at 14.7 m/s. What is the total time it spends in the air before returning to the launch height? (Use $g = 9.8$ m/s²)',
            options: [
              '1.5 s',
              '2.0 s',
              '3.0 s',
              '4.0 s'
            ],
            correctAnswer: 2,
            explanation: '$t_{\\text{up}} = v_0/g = 14.7/9.8 = 1.5$ s. Total time $= 2 \\times 1.5 = 3.0$ s.'
          },
          {
            question: 'An object is dropped from 80 m. What is its speed just before hitting the ground? (Use $g = 10$ m/s² for simplicity)',
            options: [
              '20 m/s',
              '28 m/s',
              '40 m/s',
              '80 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v^2 = v_0^2 + 2g\\Delta y = 0 + 2(10)(80) = 1600$. So $v = \\sqrt{1600} = 40$ m/s.'
          }
        ]
      }
    }
  ]
}
