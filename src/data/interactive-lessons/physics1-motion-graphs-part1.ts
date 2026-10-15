export const physics1MotionGraphsPart1Data = {
  topicSlug: 'motion-graphs',
  sections: [
    {
      id: 'mg1-intro',
      type: 'text' as const,
      content: `
# 📈 Position-Time Graphs

**Part 1 of 7 — Motion Graphs**

Graphs are one of the most powerful tools in physics. A single position-time graph can tell you everything about an object's motion — where it is, how fast it's going, and which direction it's moving — all at a glance.
      `
    },
    {
      id: 'mg1-basics',
      type: 'text' as const,
      content: `
## Reading Position-Time ($x$-$t$) Graphs

On a position-time graph:
- The **horizontal axis** is time ($t$)
- The **vertical axis** is position ($x$)

### What the Graph Tells You

| Feature | Meaning |
|---------|---------|
| **Point on the curve** | Position at that time |
| **Slope** | Velocity |
| **Positive slope** | Moving in + direction |
| **Negative slope** | Moving in − direction |
| **Zero slope (flat)** | Object is at rest |
| **Straight line** | Constant velocity |
| **Curved line** | Changing velocity (acceleration) |

### The Key Relationship

$$\\text{slope of } x\\text{-}t \\text{ graph} = \\frac{\\Delta x}{\\Delta t} = v$$

The steeper the line, the faster the object moves.
      `
    },
    {
      id: 'mg1-constant-velocity',
      type: 'text' as const,
      content: `
## Constant Velocity on $x$-$t$ Graphs

When an object moves at constant velocity, the $x$-$t$ graph is a **straight line**.

### Examples

- **Steep positive slope**: fast motion in + direction
- **Gentle positive slope**: slow motion in + direction
- **Negative slope**: motion in − direction
- **Horizontal line**: object at rest ($v = 0$)

### Calculating Velocity from the Graph

Pick any two points $(t_1, x_1)$ and $(t_2, x_2)$ on the line:

$$v = \\frac{x_2 - x_1}{t_2 - t_1} = \\frac{\\Delta x}{\\Delta t}$$

### Example

A straight line passes through $(0, 2)$ and $(4, 14)$:

$$v = \\frac{14 - 2}{4 - 0} = \\frac{12}{4} = 3 \\text{ m/s}$$
      `
    },
    {
      id: 'mg1-curved',
      type: 'text' as const,
      content: `
## Curved Lines: Non-Constant Velocity

When the $x$-$t$ graph is **curved**, the velocity is changing — the object is accelerating.

### Reading Acceleration from Curvature

| Curve Shape | Motion |
|-------------|--------|
| Curving upward (concave up) | Velocity is increasing (accelerating in + direction) |
| Curving downward (concave down) | Velocity is decreasing (decelerating) |

### Instantaneous Velocity

For a curved graph, the **instantaneous velocity** at any moment is the slope of the **tangent line** at that point.

> **Average velocity** = slope of the **secant line** (line connecting two points)
> **Instantaneous velocity** = slope of the **tangent line** (at a single point)
      `
    },
    {
      id: 'mg1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Position-Time Graphs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a position-time graph, a horizontal line represents:',
            options: [
              'Motion at a constant nonzero speed',
              'Constant acceleration',
              'The object at rest',
              'Motion along a horizontal path'
            ],
            correctAnswer: 2,
            explanation: 'A horizontal line has zero slope, meaning $v = \\Delta x / \\Delta t = 0$. The object is at rest — its position is not changing. The graph is not a picture of the path: a horizontal line does not mean the object travels horizontally.'
          },
          {
            question: 'On a position-time graph, a straight line with negative slope means the object is:',
            options: [
              'Slowing down at a steady rate until it stops',
              'Moving at constant negative velocity',
              'Speeding up in the negative direction',
              'Moving downhill and losing height steadily'
            ],
            correctAnswer: 1,
            explanation: 'A straight line = constant slope = constant velocity, so the object is neither speeding up nor slowing down. Negative slope = velocity is negative (moving in the − direction). The graph shows position, not height, so it does not mean the object moves downhill.'
          },
          {
            question: 'On a position-time graph, the instantaneous velocity at a point is given by:',
            options: [
              'The position value read off at that point',
              'The area under the curve up to that point',
              'The slope of the tangent line at that point',
              'The slope of the line from the origin'
            ],
            correctAnswer: 2,
            explanation: 'Instantaneous velocity is the slope of the tangent line to the $x$-$t$ graph at that instant. A line drawn from the origin to the point gives only an average velocity (and only if the object started at $x = 0$), and the position value itself is not a rate.'
          }
        ]
      }
    },
    {
      id: 'mg1-calculations',
      type: 'input-boxes' as const,
      content: `
**Reading Graphs — Calculations** 🧮

A position-time graph shows a straight line passing through the points $(t=0, x=5$ m$)$ and $(t=10$ s$, x=35$ m$)$.

1) What is the velocity? (in m/s)

2) What is the position at $t = 6$ s? (in meters)

3) At what time does the object reach $x = 20$ m? (in seconds)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '23', '5'],
        hint1: '$v = \\Delta x / \\Delta t = (35 - 5)/(10 - 0)$',
        hint2: '$x = 5 + 3(6)$',
        hint3: '$20 = 5 + 3t$, solve for $t$.',
        explanation: '1) $v = (35-5)/(10-0) = 30/10 = 3$ m/s. 2) $x = 5 + 3(6) = 5 + 18 = 23$ m. 3) $20 = 5 + 3t \\Rightarrow t = 15/3 = 5$ s.'
      }
    },
    {
      id: 'mg1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Graph Interpretation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A steeper line on an $x$-$t$ graph means:',
            options: ['greater acceleration', 'greater speed', 'a greater position', 'a longer elapsed time'],
            correctIndex: 1,
            explanation: 'The slope of an $x$-$t$ graph is velocity. A steeper line, whether it slopes up or down, means a larger speed (faster motion).'
          },
          {
            label: 'A parabolic curve on an $x$-$t$ graph indicates:',
            options: ['constant velocity', 'constant acceleration', 'zero acceleration', 'growing acceleration'],
            correctIndex: 1,
            explanation: 'When $x = x_0 + v_0t + \\frac{1}{2}at^2$ with constant $a$, the graph is a parabola.'
          },
          {
            label: 'Two lines on the same $x$-$t$ graph that cross indicate that the objects:',
            options: ['have the same velocity at that moment', 'are at the same position', 'have the same acceleration there', 'started from the same position'],
            correctIndex: 1,
            explanation: 'When two position-time curves intersect, the objects are at the same position at that moment in time. Their slopes (velocities) at the crossing are generally different.'
          }
        ]
      }
    },
    {
      id: 'mg1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Position-Time Graphs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An object\'s $x$-$t$ graph is a downward-opening parabola. At the peak of the parabola, the object\'s velocity is:',
            options: [
              'Maximum',
              'Minimum (most negative)',
              'Zero',
              'Undefined'
            ],
            correctAnswer: 2,
            explanation: 'At the peak of the parabola, the tangent line is horizontal, so the slope (velocity) is zero. This represents a momentary stop before the object reverses direction.'
          },
          {
            question: 'Object A has a steeper positive slope on an $x$-$t$ graph than Object B. Which statement is true?',
            options: [
              'A accelerates more',
              'A has greater velocity',
              'A is farther away',
              'A started earlier'
            ],
            correctAnswer: 1,
            explanation: 'The slope of an $x$-$t$ graph equals velocity. A steeper positive slope means a greater positive velocity.'
          }
        ]
      }
    }
  ]
}
