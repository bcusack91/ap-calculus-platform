export const physics1ProjectileMotionPart5Data = {
  topicSlug: 'projectile-motion',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `
# 🪞 Symmetry of the Trajectory

**Part 5 of 7 — Projectile Motion**

Projectile trajectories have beautiful **symmetry** properties. Understanding these symmetries lets you solve problems faster and check your answers more easily.
      `
    },
    {
      id: 'pm5-symmetry',
      type: 'text' as const,
      content: `
## Symmetric Properties (Ground-to-Ground)

For a projectile launched from and landing at the **same height**:

### Time Symmetry

- Time up = Time down: $t_{up} = t_{down} = \\frac{v_{0y}}{g}$
- Total time: $t_{flight} = 2t_{up}$
- The projectile reaches max height at **exactly halfway** through the flight

### Speed Symmetry

- The speed at any height on the way up = speed at the same height on the way down
- Landing speed = Launch speed: $v_{final} = v_0$
- The **vertical velocity** at landing has the **same magnitude** but **opposite direction** as at launch: $v_{y,final} = -v_{0y}$

### Trajectory Symmetry

- The path is a **symmetric parabola** about the vertical line through the peak
- The horizontal distance to the peak = half the range
      `
    },
    {
      id: 'pm5-diagram',
      type: 'text' as const,
      content: `
## Velocity at Key Points

Consider a projectile launched at speed $v_0$ at angle $\\theta$:

| Point | $v_x$ | $v_y$ | Speed |
|-------|--------|--------|-------|
| Launch | $v_0\\cos\\theta$ | $v_0\\sin\\theta$ | $v_0$ |
| Max Height | $v_0\\cos\\theta$ | $0$ | $v_0\\cos\\theta$ (minimum speed) |
| Landing | $v_0\\cos\\theta$ | $-v_0\\sin\\theta$ | $v_0$ |

### Important Notes

- $v_x$ **never changes** — it's the same at every point
- Only $v_y$ changes, and it changes **symmetrically**
- The minimum speed occurs at the **top** of the arc
- The projectile hits the ground at the same speed it was launched (for flat ground)
      `
    },
    {
      id: 'pm5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Symmetry Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched at 40 m/s at 53° from ground level. What is its speed when it returns to ground level?',
            options: [
              '0 m/s',
              '24 m/s',
              '32 m/s',
              '40 m/s'
            ],
            correctAnswer: 3,
            explanation: 'By symmetry, the landing speed equals the launch speed: $v_{final} = v_0 = 40$ m/s. The ball returns to the same height with the same speed.'
          },
          {
            question: 'A projectile has a total flight time of 6 s. When does it reach maximum height?',
            options: [
              '2 s',
              '3 s',
              '4 s',
              '6 s'
            ],
            correctAnswer: 1,
            explanation: 'By symmetry, max height occurs at exactly half the total flight time: $t_{up} = 6/2 = 3$ s.'
          },
          {
            question: 'At maximum height, the speed of the projectile is:',
            options: [
              'Zero',
              'Equal to $v_0$',
              'Equal to $v_{0x}$',
              'Equal to $v_{0y}$'
            ],
            correctAnswer: 2,
            explanation: 'At max height, $v_y = 0$, so $v = \\sqrt{v_x^2 + 0} = v_x = v_{0x}$. This is the minimum speed during the flight.'
          }
        ]
      }
    },
    {
      id: 'pm5-calculations',
      type: 'input-boxes' as const,
      content: `
**Using Symmetry to Solve Problems** 🧮

A ball is launched from the ground at 20 m/s at 30° above horizontal. Use $g = 10$ m/s², $\\sin 30° = 0.5$, $\\cos 30° \\approx 0.866$.

1) Time to reach maximum height (in seconds)

2) Maximum height (in meters)

3) Speed at maximum height (in m/s, round to 1 decimal)

4) $v_y$ at landing (in m/s, include sign)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['1', '5', '17.3', '-10'],
        hint1: '$v_{0y} = 20(0.5) = 10$ m/s. $t_{up} = v_{0y}/g = 10/10$',
        hint2: '$h = v_{0y}^2/(2g) = 100/20$',
        hint3: 'At max height, $v = v_{0x} = 20\\cos 30° = 20(0.866)$. At landing, $v_y = -v_{0y}$.',
        explanation: '1) $t_{up} = 10/10 = 1$ s. 2) $h = 100/20 = 5$ m. 3) $v = v_{0x} = 17.3$ m/s. 4) By symmetry, $v_y = -v_{0y} = -10$ m/s.'
      }
    },
    {
      id: 'pm5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Symmetry Deep Dive** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The horizontal distance from launch to max height equals:',
            options: ['the range', 'half the range', 'twice the range', 'zero'],
            correctIndex: 1,
            explanation: 'By symmetry, the peak occurs at the midpoint of the trajectory. The horizontal distance to the peak is half the total range.'
          },
          {
            label: 'If a projectile takes 2 s to reach max height, the total flight time is:',
            options: ['2 s', '3 s', '4 s', '8 s'],
            correctIndex: 2,
            explanation: 'By symmetry, $t_{flight} = 2 \\times t_{up} = 2 \\times 2 = 4$ s.'
          },
          {
            label: 'A ball launched at 37° with speed $v_0$ has the same range as a ball launched at:',
            options: ['37°', '43°', '53°', '74°'],
            correctIndex: 2,
            explanation: 'Complementary angles give equal range: $90° - 37° = 53°$.'
          }
        ]
      }
    },
    {
      id: 'pm5-asymmetric',
      type: 'text' as const,
      content: `
## ⚠️ When Symmetry Breaks

Symmetry applies only when the projectile **lands at the same height** as it was launched. Symmetry breaks when:

- Launching from a cliff (landing at a different height)
- Landing on an elevated platform
- Air resistance is significant

In these cases, you must solve the full kinematic equations without relying on symmetry shortcuts. The landing speed will **not** equal the launch speed, and the time up will **not** equal the time down.
      `
    },
    {
      id: 'pm5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball launched at 53° with speed 25 m/s has $v_{0y} = 20$ m/s. Using $g = 10$ m/s², its speed 1 s after launch equals its speed at what other time?',
            options: [
              '2 s',
              '3 s',
              '4 s',
              'There is no other time'
            ],
            correctAnswer: 1,
            explanation: 'At $t = 1$ s: $v_y = 20 - 10 = 10$ m/s. By symmetry (max height at $t = 2$ s), the same height and speed occur at $t = 2 + (2-1) = 3$ s, when $v_y = 20 - 30 = -10$ m/s (same magnitude).'
          },
          {
            question: 'A projectile is launched from a cliff and lands below the launch point. Compared to a ground-to-ground launch at the same speed and angle:',
            options: [
              'The flight time is shorter',
              'The flight time is the same',
              'The flight time is longer',
              'The landing speed is the same'
            ],
            correctAnswer: 2,
            explanation: 'Landing below the launch point gives extra fall time, so the total flight time is longer than a symmetric ground-to-ground launch.'
          }
        ]
      }
    }
  ]
}
