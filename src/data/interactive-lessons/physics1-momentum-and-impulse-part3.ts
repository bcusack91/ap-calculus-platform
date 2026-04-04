export const physics1MomentumAndImpulsePart3Data = {
  topicSlug: 'momentum-and-impulse',
  sections: [
    {
      id: 'mi3-intro',
      type: 'text' as const,
      content: `
# ⚡ The Impulse-Momentum Theorem

**Part 3 of 7 — Momentum and Impulse**

The **Impulse-Momentum Theorem** is one of the most important results in mechanics. It formally connects Newton\'s Second Law to the concepts of impulse and momentum, giving us a powerful tool for analyzing interactions where forces act over time.
      `
    },
    {
      id: 'mi3-theorem',
      type: 'text' as const,
      content: `
## The Theorem

The **Impulse-Momentum Theorem** states:

$$\\vec{J}_{\\text{net}} = \\Delta\\vec{p}$$

$$\\vec{F}_{\\text{net}} \\Delta t = m\\vec{v}_f - m\\vec{v}_i$$

### Derivation from Newton\'s Second Law

$$\\vec{F}_{\\text{net}} = m\\vec{a} = m\\frac{\\Delta\\vec{v}}{\\Delta t}$$

Multiply both sides by $\\Delta t$:

$$\\vec{F}_{\\text{net}} \\Delta t = m\\Delta\\vec{v} = \\Delta\\vec{p}$$

### What It Means

> The net impulse on an object equals the change in its momentum.

This is actually a **restatement** of Newton\'s Second Law — just in a form that\'s especially useful when:
- Forces act for known time intervals
- Objects change velocity (especially direction)
- Collisions occur with brief, intense forces
      `
    },
    {
      id: 'mi3-problem-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Step-by-Step Approach

1. **Choose a system** — identify the object whose momentum changes
2. **Define positive direction** — stick with it throughout
3. **Identify initial and final velocities** — use signed values
4. **Calculate $\\Delta p$** — this equals the net impulse
5. **If time is known** — find average force: $F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t}$
6. **If force is known** — find time or velocity change

### Example: Finding Average Force

A 0.145 kg baseball arrives at $+40$ m/s and is hit back at $-50$ m/s. Contact time = 0.001 s.

**Step 1:** System = baseball

**Step 2:** Positive = toward pitcher

**Step 3:** $v_i = +40$ m/s, $v_f = -50$ m/s

**Step 4:** $\\Delta p = (0.145)(-50 - 40) = (0.145)(-90) = -13.05$ kg·m/s

**Step 5:** $F_{\\text{avg}} = \\frac{-13.05}{0.001} = -13{,}050$ N

The bat exerts about **13,000 N** on the ball — roughly the weight of a car!
      `
    },
    {
      id: 'mi3-variable-force',
      type: 'text' as const,
      content: `
## Variable Forces and the Theorem

When force is not constant, the impulse is the **integral** (area under the force-time curve):

$$\\vec{J} = \\int_{t_i}^{t_f} \\vec{F} \\, dt$$

But even with variable forces, the theorem still holds:

$$\\int_{t_i}^{t_f} \\vec{F} \\, dt = \\Delta\\vec{p}$$

In AP Physics 1, we typically use the **average force** approximation:

$$F_{\\text{avg}} \\Delta t = \\Delta p$$

This is exact for constant forces and a useful approximation for variable forces.
      `
    },
    {
      id: 'mi3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Impulse-Momentum Theorem** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A net force acts on an object for 2 seconds, delivering an impulse of 40 N·s. What is the average net force?',
            options: [
              '80 N',
              '20 N',
              '40 N',
              '10 N'
            ],
            correctAnswer: 1,
            explanation: '$F_{\\text{avg}} = J / \\Delta t = 40 / 2 = 20$ N. The average force is the impulse divided by the time interval.'
          },
          {
            question: 'A 5 kg object at rest receives an impulse of 30 N·s. What is its final speed?',
            options: [
              '150 m/s',
              '6 m/s',
              '25 m/s',
              '30 m/s'
            ],
            correctAnswer: 1,
            explanation: '$J = \\Delta p = mv_f - mv_i = mv_f - 0$. So $v_f = J/m = 30/5 = 6$ m/s.'
          },
          {
            question: 'The Impulse-Momentum Theorem is a direct consequence of:',
            options: [
              'Newton\'s First Law',
              'Newton\'s Second Law',
              'Newton\'s Third Law',
              'Conservation of Energy'
            ],
            correctAnswer: 1,
            explanation: 'The theorem $F_{\\text{net}}\\Delta t = \\Delta p$ is derived directly from $F_{\\text{net}} = ma = m(\\Delta v / \\Delta t)$, which is Newton\'s Second Law.'
          }
        ]
      }
    },
    {
      id: 'mi3-calculations',
      type: 'input-boxes' as const,
      content: `
**Impulse-Momentum Theorem Calculations** 🧮

1) A 0.060 kg tennis ball is served at 50 m/s. If the racket contact time is 0.005 s, what is the average force exerted? (in N)

2) A 75 kg skydiver in free fall at 55 m/s opens a parachute. If the average drag force is 1200 N and the skydiver weighs 735 N, how long until the skydiver slows to 5 m/s? (in seconds, to 3 significant figures)

3) A 2000 kg car traveling at 25 m/s brakes to a stop in 5 s. What is the average braking force? (magnitude, in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['600', '8.1', '10000'],
        hint1: '$F = \\Delta p / \\Delta t = m(v_f - v_i)/\\Delta t = (0.060)(50)/0.005$',
        hint2: 'Net upward force = $1200 - 735 = 465$ N. $\\Delta t = m|\\Delta v| / F_{\\text{net}} = 75(50)/465$',
        hint3: '$F = m|\\Delta v|/\\Delta t = (2000)(25)/5$',
        explanation: '1) $F = m\\Delta v / \\Delta t = (0.060)(50)/(0.005) = 600$ N. 2) $F_{\\text{net}} = 1200 - 735 = 465$ N upward. $\\Delta t = m|\\Delta v|/F = 75(50)/465 \\approx 8.1$ s. 3) $F = m|\\Delta v|/\\Delta t = 2000(25)/5 = 10{,}000$ N.'
      }
    },
    {
      id: 'mi3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Impulse-Momentum Theorem Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The impulse-momentum theorem is derived from:',
            options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Conservation of Energy'],
            correctIndex: 1,
            explanation: 'The Impulse-Momentum Theorem ($F\\Delta t = \\Delta p$) is a restatement of Newton\'s Second Law ($F = ma$).'
          },
          {
            label: 'An object\'s change in momentum equals the net:',
            options: ['impulse on it', 'work done on it', 'potential energy', 'power delivered to it'],
            correctIndex: 0,
            explanation: 'The net impulse on an object equals its change in momentum ($J_{\\text{net}} = \\Delta p$).'
          },
          {
            label: 'For a fixed impulse, the average force is:',
            options: ['directly proportional to time', 'inversely proportional to time', 'independent of time', 'proportional to time squared'],
            correctIndex: 1,
            explanation: 'For a given impulse ($F\\Delta t = $ constant), larger $\\Delta t$ means smaller $F$. Force and time are inversely proportional when impulse is fixed.'
          }
        ]
      }
    },
    {
      id: 'mi3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Impulse-Momentum Theorem** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical balls are dropped from the same height. Ball A bounces back up; Ball B sticks to the ground. Which receives a greater impulse from the ground?',
            options: [
              'Ball A (it bounces)',
              'Ball B (it stops)',
              'They receive equal impulse',
              'Cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'Ball A reverses direction, so $|\\Delta v|$ is greater than for Ball B (which only stops). Greater $|\\Delta v|$ means greater $|\\Delta p|$, so Ball A receives a greater impulse.'
          },
          {
            question: 'A 0.5 kg ball hits a wall at 10 m/s and bounces back at 8 m/s. If the contact time is 0.02 s, the average force from the wall is:',
            options: [
              '50 N',
              '100 N',
              '450 N',
              '900 N'
            ],
            correctAnswer: 2,
            explanation: 'Taking toward the wall as positive: $\\Delta p = 0.5(-8 - 10) = 0.5(-18) = -9$ kg·m/s. $F = |\\Delta p|/\\Delta t = 9/0.02 = 450$ N.'
          }
        ]
      }
    }
  ]
}
