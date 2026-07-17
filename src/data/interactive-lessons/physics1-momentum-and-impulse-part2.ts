export const physics1MomentumAndImpulsePart2Data = {
  topicSlug: 'momentum-and-impulse',
  sections: [
    {
      id: 'mi2-intro',
      type: 'text' as const,
      content: `
# 💥 Impulse — Changing Momentum

**Part 2 of 7 — Momentum and Impulse**

We know that momentum is $\\vec{p} = m\\vec{v}$. But what actually *changes* an object\'s momentum? The answer is **impulse** — a quantity that connects force and the time over which it acts to the resulting change in momentum.

Understanding impulse is key to explaining everything from catching a ball to designing safer cars.
      `
    },
    {
      id: 'mi2-impulse-definition',
      type: 'text' as const,
      content: `
## Defining Impulse

**Impulse** ($\\vec{J}$) is defined as:

$$\\vec{J} = \\vec{F}\\Delta t$$

where:
- $\\vec{J}$ = impulse (N·s or kg·m/s)
- $\\vec{F}$ = average net force (N)
- $\\Delta t$ = time interval over which the force acts (s)

### Key Properties

| Property | Description |
|----------|-------------|
| **Vector quantity** | Same direction as the net force |
| **SI unit** | N·s = kg·m/s (same as momentum!) |
| **Physical meaning** | The "push" accumulated over time |

### Units Check

$$\\text{N}\\cdot\\text{s} = \\text{(kg}\\cdot\\text{m/s²)}\\cdot\\text{s} = \\text{kg}\\cdot\\text{m/s}$$

The units of impulse are identical to the units of momentum — this is not a coincidence!
      `
    },
    {
      id: 'mi2-impulse-momentum',
      type: 'text' as const,
      content: `
## Impulse Equals Change in Momentum

The fundamental relationship connecting impulse and momentum:

$$\\vec{J} = \\Delta\\vec{p} = \\vec{p}_f - \\vec{p}_i$$

$$\\vec{F}\\Delta t = m\\vec{v}_f - m\\vec{v}_i$$

For constant mass:

$$\\vec{F}\\Delta t = m(\\vec{v}_f - \\vec{v}_i) = m\\Delta\\vec{v}$$

### Why This Works (Newton\'s Second Law)

Starting from $\\vec{F} = m\\vec{a} = m\\frac{\\Delta\\vec{v}}{\\Delta t}$:

$$\\vec{F}\\Delta t = m\\Delta\\vec{v} = \\Delta\\vec{p}$$

### Example

A 0.40 kg ball moving at +30 m/s is hit by a bat and reverses to −40 m/s:

$$\\Delta p = m(v_f - v_i) = (0.40)(-40 - 30) = (0.40)(-70) = -28 \\text{ kg}\\cdot\\text{m/s}$$

The impulse delivered by the bat is $-28$ kg·m/s (in the negative direction).
      `
    },
    {
      id: 'mi2-direction-matters',
      type: 'text' as const,
      content: `
## Direction Matters — Sign Conventions

When working in 1D, assign a positive direction. Then:

| Scenario | $v_i$ | $v_f$ | $\\Delta p = m(v_f - v_i)$ |
|----------|-------|-------|---------------------------|
| Speed up (same dir) | +20 | +30 | $m(+10)$ → positive impulse |
| Slow down | +20 | +10 | $m(-10)$ → negative impulse |
| Reverse direction | +20 | −15 | $m(-35)$ → negative impulse |
| Start from rest | 0 | +25 | $m(+25)$ → positive impulse |

### Common Mistake Alert ⚠️

When an object **reverses direction**, the change in velocity is NOT just the difference in speeds:

$$\\Delta v = v_f - v_i = (-15) - (+20) = -35 \\text{ m/s}$$

NOT $|20 - 15| = 5$ m/s! Always use signed velocities.
      `
    },
    {
      id: 'mi2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Impulse** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg ball moving at +5 m/s bounces off a wall and returns at −5 m/s. What is the impulse on the ball?',
            options: [
              '0 N·s',
              '−10 N·s',
              '−20 N·s',
              '+20 N·s'
            ],
            correctAnswer: 2,
            explanation: '$J = \\Delta p = m(v_f - v_i) = 2(-5 - 5) = 2(-10) = -20$ N·s. The ball completely reverses, so $|\\Delta v| = 10$ m/s, not 0.'
          },
          {
            question: 'A constant force of 50 N acts on an object for 0.3 s. What impulse is delivered?',
            options: [
              '15 N·s',
              '150 N·s',
              '0.006 N·s',
              '50.3 N·s'
            ],
            correctAnswer: 0,
            explanation: '$J = F\\Delta t = (50)(0.3) = 15$ N·s. Impulse is simply force multiplied by the time interval.'
          },
          {
            question: 'A 0.5 kg ball is dropped and hits the ground at 10 m/s, then bounces up at 8 m/s. Taking upward as positive, the impulse from the ground is:',
            options: [
              '−1 N·s',
              '+1 N·s',
              '+9 N·s',
              '−9 N·s'
            ],
            correctAnswer: 2,
            explanation: 'Taking up as positive: $v_i = -10$ m/s (downward), $v_f = +8$ m/s (upward). $J = m(v_f - v_i) = 0.5(8 - (-10)) = 0.5(18) = +9$ N·s (upward).'
          }
        ]
      }
    },
    {
      id: 'mi2-calculations',
      type: 'input-boxes' as const,
      content: `
**Impulse Calculations** 🧮

1) A force of 200 N acts for 0.05 s on a tennis ball. What is the impulse? (in N·s)

2) A 0.15 kg ball moving at +20 m/s is caught (brought to rest). What is the magnitude of the impulse? (in N·s)

3) A 60 kg person jumps and is in the air for 0.5 s. If the average force from the ground during the jump was 1800 N, what impulse did the ground deliver? (in N·s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '3', '900'],
        hint1: '$J = F\\Delta t = (200)(0.05)$',
        hint2: '$J = m(v_f - v_i) = 0.15(0 - 20)$; take the magnitude',
        hint3: '$J = F\\Delta t = (1800)(0.5)$',
        explanation: '1) $J = F\\Delta t = (200)(0.05) = 10$ N·s. 2) $J = m(v_f - v_i) = 0.15(0 - 20) = -3$ N·s, magnitude = 3 N·s. 3) $J = F\\Delta t = (1800)(0.5) = 900$ N·s.'
      }
    },
    {
      id: 'mi2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Impulse Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Impulse is classified as a:',
            options: ['scalar', 'vector', 'dimensionless', 'unit'],
            correctIndex: 1,
            explanation: 'Impulse is a vector — it has the same direction as the net force that causes it.'
          },
          {
            label: 'The SI unit of impulse is:',
            options: ['N/s', 'N·s', '$kg\\cdot m/s^{2}$', 'J/s'],
            correctIndex: 1,
            explanation: 'Impulse has units of N·s, which is equivalent to kg·m/s — the same units as momentum.'
          },
          {
            label: 'The magnitude of an impulse depends on:',
            options: ['the force only', 'the time only', 'both force and time', 'neither'],
            correctIndex: 2,
            explanation: 'Impulse $J = F\\Delta t$ depends on both the force magnitude and the duration. The same impulse can result from a large force for a short time or a small force for a long time.'
          }
        ]
      }
    },
    {
      id: 'mi2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Impulse** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 1000 kg car accelerates from rest to 20 m/s. What is the impulse delivered to the car?',
            options: [
              '10,000 N·s',
              '20,000 N·s',
              '200,000 N·s',
              '400,000 N·s'
            ],
            correctAnswer: 1,
            explanation: '$J = \\Delta p = m(v_f - v_i) = 1000(20 - 0) = 20{,}000$ N·s. The impulse equals the change in momentum.'
          },
          {
            question: 'Which requires the greater impulse: stopping a 2 kg ball at 10 m/s, or reversing a 1 kg ball from +10 m/s to −10 m/s?',
            options: [
              'Stopping the 2 kg ball',
              'Reversing the 1 kg ball',
              'They require equal impulse',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'Stopping: $|\\Delta p| = |2(0-10)| = 20$ kg·m/s. Reversing: $|\\Delta p| = |1(-10-10)| = 20$ kg·m/s. Both require the same magnitude of impulse.'
          }
        ]
      }
    }
  ]
}
