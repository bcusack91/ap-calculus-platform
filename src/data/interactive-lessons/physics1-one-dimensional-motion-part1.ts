export const physics1OneDimensionalMotionPart1Data = {
  topicSlug: 'one-dimensional-motion',
  sections: [
    {
      id: 'om1-intro',
      type: 'text' as const,
      content: `
# 📏 Position, Displacement, and Distance

**Part 1 of 7 — One-Dimensional Motion**

Kinematics is the study of **how things move** — without worrying about *why* they move. Before we can describe motion mathematically, we need precise definitions of where an object is and how far it has traveled.

In this lesson, we'll distinguish between three foundational concepts:
- **Position** — where an object is
- **Distance** — how far it has traveled (total path length)
- **Displacement** — how far and in what direction it has moved from its starting point
      `
    },
    {
      id: 'om1-position',
      type: 'text' as const,
      content: `
## Position and Coordinate Systems

**Position** ($x$) describes an object's location along a number line relative to a chosen **origin** (the zero point).

### Key Ideas

- Position is measured in **meters** (m) in SI units
- You must choose a **coordinate system**: a reference point (origin) and a positive direction
- Position can be **positive or negative** depending on which side of the origin the object is on

### Example

If we set the origin at a mailbox on a straight road:
- A car 50 m to the right: $x = +50$ m
- A car 30 m to the left: $x = -30$ m

> **Important:** The choice of origin is arbitrary — different observers can choose different origins, but the *physics* doesn't change.
      `
    },
    {
      id: 'om1-displacement',
      type: 'text' as const,
      content: `
## Displacement

**Displacement** ($\\Delta x$) is the *change* in position:

$$\\Delta x = x_f - x_i$$

where $x_f$ is the final position and $x_i$ is the initial position.

### Properties of Displacement

| Property | Description |
|----------|-------------|
| **Vector quantity** | Has both magnitude and direction |
| **Sign matters** | Positive = in positive direction, Negative = in negative direction |
| **Path-independent** | Only depends on start and end points |
| **SI unit** | meters (m) |

### Example

A runner starts at $x_i = 2$ m and finishes at $x_f = 8$ m:

$$\\Delta x = 8 - 2 = +6 \\text{ m}$$

The positive sign tells us the runner moved in the positive direction.
      `
    },
    {
      id: 'om1-distance-vs-displacement',
      type: 'text' as const,
      content: `
## Distance vs. Displacement

This is one of the most important distinctions in kinematics!

| | Distance | Displacement |
|---|----------|-------------|
| **Type** | Scalar (magnitude only) | Vector (magnitude + direction) |
| **Always** | ≥ 0 | Can be +, −, or 0 |
| **Depends on path?** | Yes | No |
| **Formula** | Total path length | $\\Delta x = x_f - x_i$ |

### Example

A student walks 4 m east, then 3 m west:

- **Distance** = $4 + 3 = 7$ m (total path traveled)
- **Displacement** = $4 - 3 = +1$ m east (net change in position)

### When Are They Equal?

Distance equals the magnitude of displacement **only** when the object moves in a straight line **without changing direction**.
      `
    },
    {
      id: 'om1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Position, Distance, and Displacement** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A jogger runs 400 m around a circular track and returns to the starting point. What is the displacement?',
            options: [
              '400 m',
              '200 m',
              '0 m',
              '800 m'
            ],
            correctAnswer: 2,
            explanation: 'Displacement depends only on the initial and final positions. Since the jogger returns to the starting point, $\\Delta x = x_f - x_i = 0$ m. The distance traveled is 400 m, but the displacement is zero.'
          },
          {
            question: 'An object moves from $x = -5$ m to $x = +3$ m. What is the displacement?',
            options: [
              '-8 m',
              '-2 m',
              '+2 m',
              '+8 m'
            ],
            correctAnswer: 3,
            explanation: '$\\Delta x = x_f - x_i = (+3) - (-5) = +8$ m. The object moved 8 m in the positive direction.'
          },
          {
            question: 'Which statement about distance and displacement is always true?',
            options: [
              'Distance equals displacement',
              'Distance is always greater than displacement',
              'Distance is always greater than or equal to the magnitude of displacement',
              'Displacement is always positive'
            ],
            correctAnswer: 2,
            explanation: 'Distance (total path length) is always ≥ |displacement|. They are equal only when an object moves in one direction without turning around. Distance can never be less than the magnitude of displacement.'
          }
        ]
      }
    },
    {
      id: 'om1-calculations',
      type: 'input-boxes' as const,
      content: `
**Displacement Calculations** 🧮

1) A car drives from position $x_i = 10$ m to $x_f = -15$ m. What is the displacement? (include sign, in meters)

2) A hiker walks 6 km north, then 2 km south. What is the total distance traveled? (in km)

3) For the same hiker in problem 2, what is the magnitude of the displacement? (in km)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-25', '8', '4'],
        hint1: '$\\Delta x = x_f - x_i = -15 - 10$',
        hint2: 'Distance = total path length = 6 + 2',
        hint3: 'Displacement = 6 km north − 2 km south = 4 km north',
        explanation: '1) $\\Delta x = x_f - x_i = -15 - 10 = -25$ m. The negative sign means the car moved in the negative direction. 2) Distance = 6 + 2 = 8 km. 3) Displacement = 6 − 2 = 4 km north (magnitude = 4 km).'
      }
    },
    {
      id: 'om1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Quantity** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Displacement is a:',
            options: ['scalar quantity', 'vector quantity', 'dimensionless number', 'unit of measurement'],
            correctIndex: 1,
            explanation: 'Displacement has both magnitude and direction, making it a vector quantity.'
          },
          {
            label: 'Distance is always:',
            options: ['negative', 'zero', 'positive or zero', 'equal to displacement'],
            correctIndex: 2,
            explanation: 'Distance is the total path length and can never be negative. It can be zero if the object hasn\'t moved.'
          },
          {
            label: 'If an object moves in one direction and then reverses, distance is _____ the magnitude of displacement.',
            options: ['less than', 'equal to', 'greater than', 'unrelated to'],
            correctIndex: 2,
            explanation: 'When an object reverses direction, the total path length (distance) exceeds the net change in position (magnitude of displacement).'
          }
        ]
      }
    },
    {
      id: 'om1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Position, Distance & Displacement** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown straight up 5 m and then falls back to the thrower\'s hand. What is the total distance traveled?',
            options: [
              '0 m',
              '5 m',
              '10 m',
              '-5 m'
            ],
            correctAnswer: 2,
            explanation: 'The ball travels 5 m up and 5 m down, so the total distance = 5 + 5 = 10 m. (The displacement, however, is 0 m since it returns to the start.)'
          },
          {
            question: 'A particle starts at the origin, moves to $x = +4$ m, then to $x = -2$ m. What is the displacement from the origin?',
            options: [
              '+6 m',
              '+4 m',
              '-2 m',
              '+2 m'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta x = x_f - x_i = -2 - 0 = -2$ m. The particle ends up 2 m in the negative direction from its starting point, regardless of the path taken.'
          }
        ]
      }
    }
  ]
}
