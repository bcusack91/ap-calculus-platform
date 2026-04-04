export const physics1InclinedPlanesPart3Data = {
  topicSlug: 'inclined-planes',
  sections: [
    {
      id: 'ip3-intro',
      type: 'text' as const,
      content: `
# 🧱 Inclines with Friction

**Part 3 of 7 — Inclined Planes**

Most real inclines have friction. Combining the incline weight components with friction forces is one of the most common AP Physics 1 problems. Let\'s master the approach.
      `
    },
    {
      id: 'ip3-fbd-friction',
      type: 'text' as const,
      content: `
## FBD on an Incline with Friction

Forces on an object on an incline with friction:

**Perpendicular to surface (y-axis):**
- $N$ (away from surface)
- $mg\\cos\\theta$ (into surface)
- These balance: $N = mg\\cos\\theta$

**Parallel to surface (x-axis):**
- $mg\\sin\\theta$ (down the slope)
- $f$ (friction — direction depends on motion!)

### Friction Direction Rules
- **Sliding down:** Friction acts **up** the slope
- **Sliding up:** Friction acts **down** the slope
- **Stationary:** Friction opposes the *tendency* of motion

### Case 1: Sliding Down the Incline

$$ma = mg\\sin\\theta - f_k = mg\\sin\\theta - \\mu_k mg\\cos\\theta$$
$$\\boxed{a = g(\\sin\\theta - \\mu_k \\cos\\theta)}$$

### Case 2: Sliding Up the Incline

Both gravity and friction oppose motion:
$$ma = mg\\sin\\theta + f_k = mg\\sin\\theta + \\mu_k mg\\cos\\theta$$
$$\\boxed{a_{\\text{decel}} = g(\\sin\\theta + \\mu_k \\cos\\theta)}$$

Note: The deceleration going up is **greater** than the acceleration going down!
      `
    },
    {
      id: 'ip3-example',
      type: 'text' as const,
      content: `
## Worked Example

A 5 kg block slides down a 37° incline with $\\mu_k = 0.25$ ($g = 10$ m/s², $\\sin 37° = 0.60$, $\\cos 37° = 0.80$).

**Step 1:** Normal force: $N = mg\\cos 37° = 50 \\times 0.80 = 40$ N

**Step 2:** Friction: $f_k = \\mu_k N = 0.25 \\times 40 = 10$ N (up the slope)

**Step 3:** Net force along slope: $F_{\\text{net}} = mg\\sin 37° - f_k = 30 - 10 = 20$ N

**Step 4:** Acceleration: $a = 20/5 = 4$ m/s²

Compare to frictionless: $a = g\\sin 37° = 6$ m/s²

Friction reduced the acceleration by $\\mu_k g\\cos 37° = 2$ m/s².
      `
    },
    {
      id: 'ip3-mc',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A block slides down an incline with friction. Which statement is true?',
            options: [
              'The acceleration is $g\\sin\\theta + \\mu_k g\\cos\\theta$',
              'The acceleration is $g\\sin\\theta - \\mu_k g\\cos\\theta$',
              'The acceleration is $g\\cos\\theta - \\mu_k g\\sin\\theta$',
              'The acceleration is always $g\\sin\\theta$'
            ],
            correctAnswer: 1,
            explanation: 'Sliding down: gravity component down the slope minus friction up the slope: $a = g\\sin\\theta - \\mu_k g\\cos\\theta$.'
          },
          {
            question: 'A block slides UP a rough incline and then slides back DOWN. The magnitude of deceleration going up compared to acceleration going down is:',
            options: [
              'Smaller',
              'Equal',
              'Larger',
              'Cannot be compared'
            ],
            correctAnswer: 2,
            explanation: 'Going up: $a_{\\text{up}} = g(\\sin\\theta + \\mu_k\\cos\\theta)$. Going down: $a_{\\text{down}} = g(\\sin\\theta - \\mu_k\\cos\\theta)$. The deceleration going up is always larger.'
          },
          {
            question: 'On a rough incline, the normal force is:',
            options: [
              '$mg$',
              '$mg - f_k$',
              '$mg\\cos\\theta$',
              '$mg\\sin\\theta$'
            ],
            correctAnswer: 2,
            explanation: 'Friction is parallel to the surface and doesn\'t affect the perpendicular direction. $N = mg\\cos\\theta$, same as the frictionless case.'
          }
        ]
      }
    },
    {
      id: 'ip3-calculations',
      type: 'input-boxes' as const,
      content: `
**Incline + Friction Problems** 🧮

A 10 kg block slides down a 53° incline with $\\mu_k = 0.30$ ($g = 10$ m/s², $\\sin 53° = 0.80$, $\\cos 53° = 0.60$).

1) What is the normal force (in N)?

2) What is the kinetic friction force (in N)?

3) What is the acceleration down the slope (in m/s²)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '18', '6.2'],
        hint1: '$N = mg\\cos 53° = 100 \\times 0.60$.',
        hint2: '$f_k = \\mu_k N = 0.30 \\times 60$.',
        hint3: '$a = (mg\\sin 53° - f_k)/m = (80 - 18)/10$.',
        explanation: '1) $N = 60$ N. 2) $f_k = 18$ N. 3) $a = (80 - 18)/10 = 62/10 = 6.2$ m/s².'
      }
    },
    {
      id: 'ip3-critical-angle',
      type: 'text' as const,
      content: `
## Special Case: Constant Velocity on an Incline

If a block slides at **constant velocity** down an incline:
$$mg\\sin\\theta = \\mu_k mg\\cos\\theta$$
$$\\mu_k = \\tan\\theta$$

This is identical to the critical angle for static friction! Measuring the angle at which a block slides at constant velocity gives you $\\mu_k$ directly.

### Will It Slide?

A block is placed on a rough incline. It will slide if:
$$mg\\sin\\theta > f_{s,\\max} = \\mu_s mg\\cos\\theta$$
$$\\tan\\theta > \\mu_s$$

If $\\mu_s = 0.577$, the critical angle is $\\tan^{-1}(0.577) = 30°$. Any steeper and it slides.
      `
    },
    {
      id: 'ip3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A block slides at constant velocity down a 37° incline. What is $\\mu_k$? ($\\tan 37° = 0.75$)',
            options: [
              '0.60',
              '0.75',
              '0.80',
              '1.33'
            ],
            correctAnswer: 1,
            explanation: 'Constant velocity means $mg\\sin\\theta = \\mu_k mg\\cos\\theta$, so $\\mu_k = \\tan 37° = 0.75$.'
          },
          {
            question: 'A 4 kg block is launched at 8 m/s UP a 30° rough incline ($\\mu_k = 0.20$, $g = 10$ m/s²). What is the deceleration?',
            options: [
              '3.3 m/s²',
              '5.0 m/s²',
              '6.7 m/s²',
              '8.5 m/s²'
            ],
            correctAnswer: 2,
            explanation: 'Going up, both gravity and friction oppose motion: $a = g(\\sin 30° + \\mu_k \\cos 30°) = 10(0.50 + 0.20 \\times 0.866) = 10(0.50 + 0.173) = 6.73 \\approx 6.7$ m/s².'
          }
        ]
      }
    }
  ]
}
