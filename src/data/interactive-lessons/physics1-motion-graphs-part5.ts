export const physics1MotionGraphsPart5Data = {
  topicSlug: 'motion-graphs',
  sections: [
    {
      id: 'mg5-intro',
      type: 'text' as const,
      content: `
# 🌀 Non-Uniform Motion on Graphs

**Part 5 of 7 — Motion Graphs**

So far we've focused mostly on constant velocity and constant acceleration. Now let's tackle more complex scenarios: objects that speed up, slow down, stop, and reverse — all visible on their graphs.
      `
    },
    {
      id: 'mg5-reversals',
      type: 'text' as const,
      content: `
## Recognizing Direction Changes

### On $x$-$t$ Graphs

A direction reversal appears as a **turning point** (local max or min):
- The slope changes sign
- At the turning point, the slope is **zero** (momentary rest)
- Before: positive slope → after: negative slope (or vice versa)

### On $v$-$t$ Graphs

A direction reversal appears when the graph **crosses the time axis**:
- Velocity changes sign
- At $v = 0$: the object momentarily stops
- The object then moves in the opposite direction

### Example: Thrown Ball

A ball thrown upward:
- $v$-$t$: straight line from $+v_0$ to $-v_0$, crossing zero at the top
- $x$-$t$: parabola opening downward, with vertex at the highest point
- $a$-$t$: horizontal line at $-g$
      `
    },
    {
      id: 'mg5-multi-phase',
      type: 'text' as const,
      content: `
## Multi-Phase Motion

Real motion often involves several phases. Each phase may have different acceleration.

### Example: A car trip

1. **Accelerate** (0–10 s): $a = 3$ $m/s^{2}$, $v$ increases from 0 to 30 m/s
2. **Cruise** (10–30 s): $a = 0$, $v$ stays at 30 m/s
3. **Brake** (30–40 s): $a = -3$ $m/s^{2}$, $v$ decreases from 30 to 0 m/s

| Phase | $v$-$t$ Graph | $a$-$t$ Graph | $x$-$t$ Graph |
|-------|--------------|--------------|---------------|
| Accelerate | Rising line | $a = +3$ | Concave up parabola |
| Cruise | Horizontal at 30 | $a = 0$ | Straight line |
| Brake | Falling line | $a = -3$ | Concave down parabola |

Total displacement = sum of areas under each phase of the $v$-$t$ graph.
      `
    },
    {
      id: 'mg5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Non-Uniform Motion** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An object\'s $v$-$t$ graph goes from $+10$ m/s to $-6$ m/s over 8 s in a straight line. At what time does the object reverse direction?',
            options: [
              '3 s',
              '4 s',
              '5 s',
              '6 s'
            ],
            correctAnswer: 2,
            explanation: 'The velocity goes from +10 to −6 (a change of −16 m/s in 8 s), so $a = -2$ $m/s^{2}$. Setting $v = 0$: $0 = 10 - 2t \\Rightarrow t = 5$ s.'
          },
          {
            question: 'During the interval where velocity is positive but decreasing, the $x$-$t$ graph is:',
            options: [
              'Concave up (curving upward)',
              'Concave down (curving downward) but still rising',
              'A straight line with positive slope',
              'Decreasing'
            ],
            correctAnswer: 1,
            explanation: 'Positive velocity → position is increasing (graph rises). But decreasing velocity → the rate of rise is slowing → the curve is concave down. The position increases but at a decreasing rate.'
          },
          {
            question: 'The total distance traveled by an object whose $v$-$t$ graph crosses the time axis is found by:',
            options: [
              'Taking the net area under the curve',
              'Taking the absolute value of the net area',
              'Adding the absolute values of each area segment',
              'Multiplying speed by total time'
            ],
            correctAnswer: 2,
            explanation: 'Total distance = sum of |area| above the axis + |area| below the axis. You must add the magnitudes of each segment separately because distance doesn\'t cancel.'
          }
        ]
      }
    },
    {
      id: 'mg5-calculations',
      type: 'input-boxes' as const,
      content: `
**Multi-Phase Graph Problems** 🧮

A $v$-$t$ graph shows:
- Phase 1 ($t = 0$ to $t = 4$ s): $v$ increases from 0 to 8 m/s (straight line)
- Phase 2 ($t = 4$ to $t = 10$ s): $v$ is constant at 8 m/s
- Phase 3 ($t = 10$ to $t = 14$ s): $v$ decreases from 8 to 0 m/s (straight line)

1) What is the displacement during Phase 1? (in meters)

2) What is the total displacement for the entire trip? (in meters)

3) What is the acceleration during Phase 3? $(in m/s^{2})$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '80', '-2'],
        hint1: 'Triangle: $\\frac{1}{2}(4)(8)$',
        hint2: 'Phase 1 (triangle) + Phase 2 (rectangle) + Phase 3 (triangle): $16 + 8(6) + \\frac{1}{2}(4)(8)$',
        hint3: 'Slope = $(0 - 8)/(14 - 10)$',
        explanation: '1) $\\frac{1}{2}(4)(8) = 16$ m. 2) $16 + 48 + 16 = 80$ m. 3) $a = (0-8)/(14-10) = -8/4 = -2$ $m/s^{2}$.'
      }
    },
    {
      id: 'mg5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Non-Uniform Motion Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On an $x$-$t$ graph, a turning point (local max or min) means the object:',
            options: ['has maximum acceleration', 'has zero velocity', 'has maximum speed', 'has zero acceleration'],
            correctIndex: 1,
            explanation: 'At a turning point, the slope of the $x$-$t$ graph is zero, meaning $v = 0$.'
          },
          {
            label: 'On a $v$-$t$ graph, when velocity is negative and becoming less negative (closer to zero), the object is:',
            options: ['speeding up in the − direction', 'slowing down (moving in − direction)', 'at rest', 'speeding up in the + direction'],
            correctIndex: 1,
            explanation: 'Negative velocity = moving in − direction. Becoming less negative = speed is decreasing. The object is slowing down while still moving in the − direction.'
          },
          {
            label: 'The displacement during a reversal is best found by computing:',
            options: ['net area under the $v$-$t$ graph', 'slope of $x$-$t$ graph', 'area under $a$-$t$ graph', 'average acceleration times time'],
            correctIndex: 0,
            explanation: 'Displacement is always the net area under the $v$-$t$ graph, accounting for positive and negative regions.'
          }
        ]
      }
    },
    {
      id: 'mg5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Non-Uniform Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A $v$-$t$ graph shows $v = +6$ m/s for 4 s, then $v = -3$ m/s for 6 s. What is the total distance traveled?',
            options: [
              '6 m',
              '24 m',
              '42 m',
              '18 m'
            ],
            correctAnswer: 2,
            explanation: 'Distance = |$area_{1}$| + |$area_{2}$| = |6 × 4| + |-3 × 6| = 24 + 18 = 42 m. (Net displacement would be $24 - 18 = 6$ m.)'
          },
          {
            question: 'An object\'s $x$-$t$ graph is concave up. The object\'s speed is:',
            options: [
              'Constant',
              'Increasing',
              'Decreasing',
              'Zero'
            ],
            correctAnswer: 1,
            explanation: 'Concave up on $x$-$t$ means the slope (velocity) is increasing. If velocity is positive and increasing, speed is increasing. This corresponds to positive acceleration.'
          }
        ]
      }
    }
  ]
}
