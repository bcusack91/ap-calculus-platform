export const precalcRatesOfChangePart5Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🚗 Motion & Velocity Applications

**Part 5 of 7**

### Position, Velocity, Acceleration

For a particle moving along a line with position $s(t)$:

| Quantity | Definition | Rate of |
|:---------|:----------|:--------|
| Position $s(t)$ | Location at time $t$ | — |
| Velocity $v(t)$ | $s'(t) = \\lim_{h \\to 0}\\frac{s(t+h)-s(t)}{h}$ | Position |
| Speed | $|v(t)|$ | — |
| Acceleration $a(t)$ | Rate of change of velocity | Velocity |

### Positive vs Negative Velocity

- $v(t) > 0$: moving in the **positive direction** (right/up)
- $v(t) < 0$: moving in the **negative direction** (left/down)
- $v(t) = 0$: momentarily **at rest** (possible direction change)
      `
    },
    {
      id: 'p5-example',
      type: 'text' as const,
      content: `
## Motion Example

### Ball Thrown Upward

$s(t) = -16t^2 + 64t + 80$ feet, $t$ in seconds.

**Velocity** (DQ limit of $-16t^2 + 64t + 80$ gives): $v(t) = -32t + 64$

**When is the ball at rest?** $v(t)=0$: $-32t+64=0 \\Rightarrow t=2$ seconds

**Maximum height**: At $t=2$: $s(2) = -16(4)+128+80 = 144$ feet

**When does it hit ground?** $s(t)=0$: $-16t^2+64t+80=0$
$t^2 - 4t - 5 = 0 \\Rightarrow (t-5)(t+1)=0 \\Rightarrow t=5$ seconds

**Impact velocity**: $v(5) = -32(5)+64 = -96$ ft/s (downward at 96 ft/s)

### Average vs Instantaneous Velocity

- Average velocity from $t=0$ to $t=5$: $\\frac{s(5)-s(0)}{5} = \\frac{0-80}{5} = -16$ ft/s
- Instantaneous velocity at $t=1$: $v(1) = -32+64 = 32$ ft/s (upward)
      `
    },
    {
      id: 'p5-distance',
      type: 'text' as const,
      content: `
## Displacement vs Total Distance

### Displacement

Change in position from $t=a$ to $t=b$:
$$\\text{Displacement} = s(b) - s(a)$$

Can be positive, negative, or zero.

### Total Distance Traveled

Sum of all |movement| regardless of direction. Must account for direction changes.

### Example

A particle: $s(0)=2$, moves right to $s(1)=7$, then left to $s(3)=1$.

- **Displacement**: $s(3)-s(0) = 1-2 = -1$ (net: 1 unit left)
- **Total distance**: $|7-2| + |1-7| = 5 + 6 = 11$ units

### Key Insight

Average velocity = displacement / time (can be zero even if object moved!)

Average speed = total distance / time (always ≥ 0)
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Motion Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$s(t) = t^2 - 6t$. When is the particle at rest?',
            options: ['$t=0$', '$t=3$', '$t=6$', '$t=-3$'],
            correctAnswer: 1,
            explanation: '$v(t)=2t-6=0 \\Rightarrow t=3$.'
          },
          {
            question: 'Negative velocity means:',
            options: ['Slowing down', 'Moving in negative direction', 'Stopped', 'Accelerating'],
            correctAnswer: 1,
            explanation: 'Negative velocity = moving in the negative direction (left/down).'
          },
          {
            question: 'If $v(t)=0$ and $a(t)<0$, the ball is at a:',
            options: ['Minimum', 'Maximum', 'Inflection point', 'Rest forever'],
            correctAnswer: 1,
            explanation: 'Zero velocity + negative acceleration = top of trajectory (local max of position).'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
For $s(t) = -16t^2 + 48t$:

**1)** Velocity function: $v(t) = -32t + ?$

**2)** Time when ball is at its highest (v=0): $t$ = ?

**3)** Maximum height: $s$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['48', '1.5', '36'],
        hint1: 'DQ of $-16t^2+48t$ gives $-32t + 48$.',
        hint2: '$-32t + 48 = 0 \\Rightarrow t = 48/32$.',
        hint3: '$s(1.5) = -16(2.25) + 48(1.5) = -36 + 72$.',
        explanation: '(1) $v(t) = -32t+48$. (2) $t=1.5$. (3) $s(1.5)=-36+72=36$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Motion Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speed is:',
            options: ['Velocity', 'Absolute value of velocity', 'Acceleration', 'Position'],
            correctAnswer: 1
          },
          {
            label: 'Displacement can be:',
            options: ['Only positive', 'Only negative', 'Positive, negative, or zero', 'Only zero'],
            correctAnswer: 2
          },
          {
            label: 'Object moving right then left with same distance:',
            options: ['Displacement = 0, distance > 0', 'Both = 0', 'Displacement > 0', 'Distance = 0'],
            correctAnswer: 0
          },
          {
            label: 'At the highest point of a projectile:',
            options: ['$v > 0$', '$v = 0$', '$v < 0$', '$a = 0$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Absolute value of velocity', 'Positive, negative, or zero', 'Displacement = 0, distance > 0', '$v = 0$'],
        hint1: 'Speed = how fast, regardless of direction.',
        hint2: 'You can end where you started (0) or anywhere.',
        hint3: 'Round trip: displacement cancels, distance doesn\'t.',
        explanation: 'Speed = |v|. Displacement: any sign. Round trip: disp=0 but dist>0. Highest point: v=0.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$s(t)=t^3-3t$. Average velocity on $[0,2]$:',
            options: ['$1$', '$2$', '$-1$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{s(2)-s(0)}{2} = \\frac{(8-6)-0}{2} = \\frac{2}{2} = 1$.'
          },
          {
            question: 'A car goes 60 mi east then 60 mi west. Displacement and total distance:',
            options: ['0 mi, 120 mi', '120 mi, 0 mi', '0 mi, 0 mi', '60 mi, 60 mi'],
            correctAnswer: 0,
            explanation: 'Returns to start: displacement = 0. Total distance = 60 + 60 = 120 mi.'
          }
        ]
      }
    }
  ]
};
