export const physics1TwoDimensionalMotionPart3Data = {
  topicSlug: 'two-dimensional-motion',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `
# 🚤 Relative Motion and Reference Frames

**Part 3 of 7 — Two-Dimensional Motion**

Have you ever noticed that a person walking on a moving train appears to move at different speeds depending on whether you're on the train or on the ground? That's **relative motion** — and it's a core concept in physics.
      `
    },
    {
      id: 'td3-frames',
      type: 'text' as const,
      content: `
## Reference Frames

A **reference frame** is the perspective from which you observe motion. Different observers in different reference frames may measure different velocities for the same object.

### Key Principle

The velocity of object A relative to observer C can be found by adding velocities:

$$\\vec{v}_{AC} = \\vec{v}_{AB} + \\vec{v}_{BC}$$

where:
- $\\vec{v}_{AC}$ = velocity of A relative to C
- $\\vec{v}_{AB}$ = velocity of A relative to B
- $\\vec{v}_{BC}$ = velocity of B relative to C

### Subscript Trick

The inner subscripts ($B$ and $B$) must match and "cancel":

$$\\vec{v}_{A\\cancel{B}} + \\vec{v}_{\\cancel{B}C} = \\vec{v}_{AC}$$

### Reversing Direction

$$\\vec{v}_{AB} = -\\vec{v}_{BA}$$

The velocity of A relative to B is the negative of B relative to A.
      `
    },
    {
      id: 'td3-1d-examples',
      type: 'text' as const,
      content: `
## 1D Relative Motion Examples

### Example 1: Train Passenger

A passenger walks at 2 m/s toward the front of a train moving at 30 m/s relative to the ground.

Velocity of passenger relative to ground:
$$v_{PG} = v_{PT} + v_{TG} = 2 + 30 = 32 \\text{ m/s}$$

### Example 2: Opposing Motion

A person walks at 1.5 m/s toward the back of the same train:

$$v_{PG} = -1.5 + 30 = 28.5 \\text{ m/s}$$

### Example 3: Boat on a River

A boat moves at $v_{BW} = 4$ m/s relative to the water. The river flows downstream at $v_{WG} = 3$ m/s.

- Heading **downstream**: $v_{BG} = 4 + 3 = 7$ m/s downstream
- Heading **upstream**: $v_{BG} = 4 - 3 = 1$ m/s upstream

On the AP Physics 1 exam, relative-velocity problems are limited to motion along one dimension, so every case reduces to adding or subtracting signed velocities along a line.
      `
    },
    {
      id: 'td3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Relative Motion** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Car A travels east at 60 km/h and Car B travels east at 80 km/h. What is the velocity of Car B relative to Car A?',
            options: [
              '140 km/h east',
              '20 km/h east',
              '20 km/h west',
              '80 km/h east'
            ],
            correctAnswer: 1,
            explanation: '$v_{BA} = v_{BG} - v_{AG} = 80 - 60 = 20$ km/h east. From Car A\'s perspective, Car B is pulling ahead at 20 km/h.'
          },
          {
            question: 'A boat moves at 5 m/s relative to the water, heading upstream in a river that flows at 2 m/s. The boat\'s velocity relative to the shore is:',
            options: [
              '7 m/s upstream',
              '3 m/s upstream',
              '3 m/s downstream',
              '5 m/s upstream'
            ],
            correctAnswer: 1,
            explanation: 'Take upstream as positive: $v_{BG} = v_{BW} + v_{WG} = +5 + (-2) = +3$ m/s, so 3 m/s upstream. Adding the speeds (7 m/s) ignores that the current points the other way.'
          },
          {
            question: 'If $\\vec{v}_{AB} = 3$ m/s east, then $\\vec{v}_{BA}$ is:',
            options: [
              '3 m/s east',
              '3 m/s west',
              '0 m/s',
              '6 m/s east'
            ],
            correctAnswer: 1,
            explanation: '$\\vec{v}_{BA} = -\\vec{v}_{AB}$. If A moves east relative to B, then B moves west relative to A.'
          }
        ]
      }
    },
    {
      id: 'td3-calculations',
      type: 'input-boxes' as const,
      content: `
**Relative Motion Calculations** 🧮

1) A plane flies at 200 m/s relative to the air. A tailwind blows at 50 m/s in the same direction. What is the plane's speed relative to the ground? (in m/s)

2) The same plane now flies into a 50 m/s headwind. What is the plane's speed relative to the ground? (in m/s)

3) A boat moves at 3 m/s relative to the water, heading downstream in a river that flows at 4 m/s. What is the boat's speed relative to the ground? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['250', '150', '7'],
        hint1: 'Tailwind adds: $v = 200 + 50$',
        hint2: 'Headwind subtracts: $v = 200 - 50$',
        hint3: 'Same direction: $v = 3 + 4$',
        explanation: '1) $200 + 50 = 250$ m/s. 2) $200 - 50 = 150$ m/s. 3) $3 + 4 = 7$ m/s downstream, since the boat and current point the same way.'
      }
    },
    {
      id: 'td3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Relative Motion Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If two cars travel in the same direction, the relative speed between them is the _____ of their speeds.',
            options: ['sum', 'difference', 'product', 'average'],
            correctIndex: 1,
            explanation: 'When moving in the same direction, relative speed = |$v_{1}$ − $v_{2}$|.'
          },
          {
            label: 'If two cars travel toward each other, the relative speed is the _____ of their speeds.',
            options: ['sum', 'difference', 'product', 'average'],
            correctIndex: 0,
            explanation: 'When moving toward each other (opposite directions), relative speed = $v_{1}$ + $v_{2}$.'
          },
          {
            label: 'The velocity of A relative to B is the negative of:',
            options: ['the ground velocity of A', 'the velocity of B relative to A', 'the acceleration of A', 'the displacement of B'],
            correctIndex: 1,
            explanation: '$\\vec{v}_{AB} = -\\vec{v}_{BA}$. If A sees B moving east, B sees A moving west.'
          }
        ]
      }
    },
    {
      id: 'td3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Relative Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A passenger walks toward the back of a train at 1.5 m/s relative to the train. The train moves east at 20 m/s relative to the ground. What is the passenger\'s velocity relative to the ground?',
            options: [
              '21.5 m/s east',
              '18.5 m/s east',
              '18.5 m/s west',
              '1.5 m/s west'
            ],
            correctAnswer: 1,
            explanation: 'Take east as positive. The passenger\'s velocity relative to the train is $-1.5$ m/s, so $v_{PG} = v_{PT} + v_{TG} = -1.5 + 20 = +18.5$ m/s, which is 18.5 m/s east. Adding the speeds gives 21.5 m/s, and 1.5 m/s west is her velocity relative to the train, not the ground.'
          },
          {
            question: 'A moving walkway carries people at 1.2 m/s. A traveler walks against the walkway\'s motion at 1.5 m/s relative to the walkway. Relative to the ground, she moves at:',
            options: [
              '0.3 m/s in her walking direction',
              '0.3 m/s in the walkway direction',
              '2.7 m/s in her walking direction',
              '1.5 m/s in her walking direction'
            ],
            correctAnswer: 0,
            explanation: 'Take her walking direction as positive: $v = +1.5 + (-1.2) = +0.3$ m/s, so she moves forward slowly at 0.3 m/s. Her walking speed is larger than the walkway speed, so she still makes progress; 2.7 m/s adds the speeds, and 1.5 m/s ignores the walkway.'
          }
        ]
      }
    }
  ]
}
