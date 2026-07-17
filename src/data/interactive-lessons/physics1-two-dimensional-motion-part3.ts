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

### Example 3: River Crossing

A boat crosses a river. The boat's speed relative to water is $v_{BW} = 4$ m/s (perpendicular to bank). The river flows at $v_{WG} = 3$ m/s.

Boat's speed relative to ground:
$$v_{BG} = \\sqrt{v_{BW}^2 + v_{WG}^2} = \\sqrt{16 + 9} = 5 \\text{ m/s}$$
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
            question: 'A boat can travel at 5 m/s in still water. It tries to cross a river flowing at 5 m/s. If the boat aims straight across, the boat\'s speed relative to the ground is:',
            options: [
              '0 m/s',
              '5 m/s',
              '$5\\sqrt{2} \\approx 7.1$ m/s',
              '10 m/s'
            ],
            correctAnswer: 2,
            explanation: 'The boat velocity and river current are perpendicular: $v = \\sqrt{5^2 + 5^2} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.1$ m/s.'
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

3) A boat moves at 3 m/s across a river (perpendicular to the bank). The river flows at 4 m/s. What is the boat's speed relative to the ground? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['250', '150', '5'],
        hint1: 'Tailwind adds: $v = 200 + 50$',
        hint2: 'Headwind subtracts: $v = 200 - 50$',
        hint3: 'Perpendicular: $v = \\sqrt{3^2 + 4^2}$',
        explanation: '1) $200 + 50 = 250$ m/s. 2) $200 - 50 = 150$ m/s. 3) $\\sqrt{9 + 16} = \\sqrt{25} = 5$ m/s.'
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
            options: ['the velocity of A relative to the ground', 'the velocity of B relative to A', 'the acceleration of A', 'the displacement of B'],
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
            question: 'A swimmer can swim at 2 m/s in still water. She swims directly across a 40 m wide river that flows at 1.5 m/s. How long does it take her to cross?',
            options: [
              '16 s',
              '20 s',
              '26.7 s',
              '40 s'
            ],
            correctAnswer: 1,
            explanation: 'The time to cross depends only on the component of velocity perpendicular to the bank: $t = d/v_{\\perp} = 40/2 = 20$ s. The river current carries her downstream but doesn\'t affect the crossing time.'
          },
          {
            question: 'A train moves east at 25 m/s. Rain falls vertically at 10 m/s. To a passenger on the train, the rain appears to fall at an angle. What angle from vertical does the rain appear to make?',
            options: [
              '$\\tan^{-1}(10/25) = 21.8°$',
              '$\\tan^{-1}(25/10) = 68.2°$',
              '$45°$',
              '$\\tan^{-1}(25/35) = 35.5°$'
            ],
            correctAnswer: 1,
            explanation: 'Relative to the train, the rain has a horizontal component of 25 m/s (backward) and a vertical component of 10 m/s (downward). The angle from vertical: $\\theta = \\tan^{-1}(25/10) = 68.2°$.'
          }
        ]
      }
    }
  ]
}
