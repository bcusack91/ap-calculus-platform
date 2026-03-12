export const physics1UniformCircularMotionPart3Data = {
  topicSlug: 'uniform-circular-motion',
  sections: [
    {
      id: 'uc3-intro',
      type: 'text' as const,
      content: `
# ➡️ Direction of Centripetal Acceleration

**Part 3 of 7 — Uniform Circular Motion**

The centripetal acceleration always points **toward the center** of the circular path. This is what "centripetal" literally means — "center-seeking." Understanding direction is essential for solving force and motion problems.

**In this lesson you will learn:**
- Why acceleration points toward the center
- How to identify the direction of velocity and acceleration at any point
- The perpendicular relationship between $\\vec{v}$ and $\\vec{a}_c$
- Common misconceptions about "centrifugal force"
      `
    },
    {
      id: 'uc3-direction',
      type: 'text' as const,
      content: `
## Direction Analysis

### Velocity Direction
At any point on the circle, velocity is **tangent** to the circle — perpendicular to the radius at that point.

### Acceleration Direction
Centripetal acceleration always points **radially inward** — from the object toward the center of the circle.

### The $\\vec{v}$ and $\\vec{a}$ Relationship

| Property | Velocity ($\\vec{v}$) | Acceleration ($\\vec{a}_c$) |
|----------|-------------------|-----------------------|
| Direction | Tangent to circle | Toward center |
| Magnitude | Constant ($v$) | Constant ($v^2/r$) |
| Angle between them | — | Always $90°$ |

### Why $90°$?

The acceleration is **perpendicular** to the velocity. This is exactly what's needed to change direction without changing speed:
- If $\\vec{a}$ were parallel to $\\vec{v}$: speed would change (speeding up or slowing down)
- If $\\vec{a}$ is perpendicular to $\\vec{v}$: only direction changes, speed stays constant

This is the hallmark of uniform circular motion!

### At Specific Points (counterclockwise motion)

| Position | Velocity Direction | Acceleration Direction |
|----------|-------------------|----------------------|
| Top of circle | Left (←) | Down (↓) toward center |
| Bottom of circle | Right (→) | Up (↑) toward center |
| Right side | Up (↑) | Left (←) toward center |
| Left side | Down (↓) | Right (→) toward center |
      `
    },
    {
      id: 'uc3-direction-quiz',
      type: 'multiple-choice' as const,
      content: `
**Direction Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball moves counterclockwise in a horizontal circle. When the ball is at the leftmost point of the circle, its velocity points:',
            options: [
              'To the left',
              'To the right',
              'Downward',
              'Upward'
            ],
            correctAnswer: 2,
            explanation: 'Velocity is tangent to the circle. For counterclockwise motion at the leftmost point, the tangent direction is downward (↓).'
          },
          {
            question: 'In uniform circular motion, the angle between velocity and centripetal acceleration is always:',
            options: [
              '0°',
              '45°',
              '90°',
              '180°'
            ],
            correctAnswer: 2,
            explanation: 'Velocity is tangent and acceleration points toward the center (radially inward). Tangent and radius are always perpendicular — $90°$.'
          },
          {
            question: 'If the acceleration were NOT perpendicular to the velocity, the object would:',
            options: [
              'Still move in a perfect circle at constant speed',
              'Speed up or slow down',
              'Move in a straight line',
              'Stop moving'
            ],
            correctAnswer: 1,
            explanation: 'Any component of acceleration parallel to velocity changes speed. Only when $\\vec{a} \\perp \\vec{v}$ does the speed remain constant while the direction changes.'
          }
        ]
      }
    },
    {
      id: 'uc3-centrifugal',
      type: 'text' as const,
      content: `
## The "Centrifugal Force" Misconception

### What Students Often Think
"When I go around a curve, I feel pushed outward — there must be an outward (centrifugal) force!"

### The Reality
- There is **no outward force** on you (in an inertial reference frame)
- What you feel is your body\'s **inertia** — wanting to continue in a straight line
- The seat/door pushes you **inward** (toward the center), and your body resists this change in direction
- This inward push IS the centripetal force

### The Correct Explanation

When a car turns left:
1. Your body wants to keep going straight (Newton\'s 1st Law)
2. The car seat pushes you to the left (toward the center of the turn)
3. You feel "pushed" against the right door, but actually the car is turning under you
4. The contact force from the door provides the centripetal force

### On the AP Exam
- **Never** refer to "centrifugal force" — it doesn\'t exist in an inertial frame
- Always identify the **real force** providing centripetal acceleration (tension, friction, gravity, normal force)
      `
    },
    {
      id: 'uc3-misconception-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Misconception Busters** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ball on a string moves in a circle. If the string breaks, the ball will:',
            options: ['Fly outward (radially)', 'Continue in a straight line tangent to the circle', 'Spiral outward', 'Stop immediately'],
            correctIndex: 1,
            explanation: 'Without the centripetal force (tension), the ball follows Newton\'s 1st Law — continuing with its current velocity, which is tangent to the circle.'
          },
          {
            label: '"Centrifugal force" in an inertial reference frame is:',
            options: ['A real force pointing outward', 'A fictitious force — not real', 'Equal to centripetal force', 'A component of gravity'],
            correctIndex: 1,
            explanation: 'In an inertial (non-accelerating) frame, centrifugal force does not exist. It\'s a fictitious force that only appears in a rotating reference frame.'
          },
          {
            label: 'Water stays in a bucket swung in a vertical circle because:',
            options: ['Centrifugal force pushes it in', 'The bucket accelerates toward the center faster than gravity pulls the water down', 'Surface tension holds it', 'The water has no weight at the top'],
            correctIndex: 1,
            explanation: 'At the top, both the bucket and water need centripetal acceleration ($v^2/r$) toward the center. If $v^2/r > g$, the bucket "falls" toward the center faster than the water would under gravity alone, so the water stays in.'
          }
        ]
      }
    },
    {
      id: 'uc3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Direction of Acceleration** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A car moves clockwise around a circular track. When the car is at the southernmost point, its acceleration points:',
            options: [
              'South',
              'North (toward center)',
              'East',
              'West'
            ],
            correctAnswer: 1,
            explanation: 'Centripetal acceleration always points toward the center. If the car is at the southernmost point, the center is to the north. So $\\vec{a}_c$ points north.'
          },
          {
            question: 'An astronaut in the International Space Station feels "weightless" because:',
            options: [
              'There is no gravity in space',
              'The station and astronaut are both in free fall (both accelerating toward Earth at the same rate)',
              'Centrifugal force cancels gravity',
              'The station shields the astronaut from gravity'
            ],
            correctAnswer: 1,
            explanation: 'The ISS and everything inside it are in free fall — constantly accelerating toward Earth (centripetal acceleration). Since everything falls together, there\'s no normal force, creating the sensation of weightlessness.'
          }
        ]
      }
    }
  ]
}
