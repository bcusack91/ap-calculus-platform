export const physics1InclinedPlanesPart2Data = {
  topicSlug: 'inclined-planes',
  sections: [
    {
      id: 'ip2-intro',
      type: 'text' as const,
      content: `
# 🎿 Frictionless Inclines

**Part 2 of 7 — Inclined Planes**

Before adding friction, let\'s master the simpler case: objects sliding on perfectly smooth inclines. The only forces are gravity and the normal force — and since the normal force is perpendicular to motion, only gravity\'s component along the slope accelerates the object.
      `
    },
    {
      id: 'ip2-acceleration',
      type: 'text' as const,
      content: `
## Acceleration on a Frictionless Incline

### Free Body Diagram
On a frictionless incline of angle $\\theta$:
- $N = mg\\cos\\theta$ (perpendicular — balanced)
- $mg\\sin\\theta$ (along the slope — unbalanced!)

### Newton\'s Second Law (Along the Slope)
$$mg\\sin\\theta = ma$$
$$\\boxed{a = g\\sin\\theta}$$

### Key Insight
The acceleration is **independent of mass**! A 1 kg block and a 100 kg block slide at the same rate on the same frictionless incline.

### Example Values

| Angle | $\\sin\\theta$ | $a$ (m/s²) |
|-------|-------------|------------|
| 10° | 0.174 | 1.7 |
| 30° | 0.500 | 5.0 |
| 45° | 0.707 | 7.1 |
| 60° | 0.866 | 8.7 |
| 90° | 1.000 | 10.0 (free fall!) |

Notice: At 90° the "incline" is vertical, and the acceleration equals $g$.
      `
    },
    {
      id: 'ip2-kinematics',
      type: 'text' as const,
      content: `
## Combining with Kinematics

Once you know $a = g\\sin\\theta$, use the standard kinematics equations:

$$v = v_0 + at$$
$$\\Delta x = v_0 t + \\frac{1}{2}at^2$$
$$v^2 = v_0^2 + 2a\\Delta x$$

### Example: Sliding Down from Rest

A block starts from rest and slides 2 m down a 30° frictionless incline. How fast is it going?

$$a = g\\sin 30° = 10 \\times 0.50 = 5 \\text{ m/s}^2$$
$$v^2 = 0 + 2(5)(2) = 20$$
$$v = \\sqrt{20} \\approx 4.5 \\text{ m/s}$$

### Example: Sliding Up

A block is launched UP a 30° frictionless incline at 6 m/s. How far up does it go?

The deceleration is $a = -g\\sin 30° = -5$ m/s² (opposing motion up the slope).

$$0 = 36 + 2(-5)\\Delta x$$
$$\\Delta x = 36/10 = 3.6 \\text{ m}$$
      `
    },
    {
      id: 'ip2-mc',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'On a frictionless 45° incline, a 2 kg block accelerates at ($g = 10$ m/s², $\\sin 45° \\approx 0.707$):',
            options: [
              '5.0 m/s²',
              '7.07 m/s²',
              '10.0 m/s²',
              '14.1 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a = g\\sin 45° = 10 \\times 0.707 = 7.07$ m/s². Mass doesn\'t matter!'
          },
          {
            question: 'A block slides down a frictionless incline. If you double the mass, the acceleration:',
            options: [
              'Doubles',
              'Halves',
              'Stays the same',
              'Quadruples'
            ],
            correctAnswer: 2,
            explanation: '$a = g\\sin\\theta$ — mass cancels. The acceleration is independent of mass on a frictionless incline.'
          },
          {
            question: 'A ball is launched up a frictionless incline. At the highest point, its acceleration is:',
            options: [
              'Zero (momentarily stopped)',
              '$g$ downward',
              '$g\\sin\\theta$ down the slope',
              'Changing direction'
            ],
            correctAnswer: 2,
            explanation: 'The acceleration is always $g\\sin\\theta$ down the slope, regardless of whether the object is moving up, momentarily stopped, or moving down. Velocity is zero at the top, but acceleration is NOT zero.'
          }
        ]
      }
    },
    {
      id: 'ip2-calculations',
      type: 'input-boxes' as const,
      content: `
**Frictionless Incline Problems** 🧮

1) A block starts from rest on a 37° frictionless incline and slides for 2 seconds. What is its speed (m/s)? ($g = 10$ m/s², $\\sin 37° = 0.60$)

2) How far has it traveled in those 2 seconds (in m)?

3) A block is launched at 10 m/s up a 30° frictionless incline. How far up the slope does it travel before stopping (in m)? ($g = 10$ m/s², $\\sin 30° = 0.50$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '12', '10'],
        hint1: '$a = g\\sin 37° = 6$ m/s². $v = at = 6 \\times 2$.',
        hint2: '$\\Delta x = \\frac{1}{2}at^2 = \\frac{1}{2}(6)(4)$.',
        hint3: '$a = 5$ m/s². $v^2 = v_0^2 - 2a\\Delta x$. $0 = 100 - 10\\Delta x$.',
        explanation: '1) $a = 6$ m/s², $v = 12$ m/s. 2) $\\Delta x = 12$ m. 3) $\\Delta x = 100/10 = 10$ m.'
      }
    },
    {
      id: 'ip2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'As the incline angle increases (frictionless), the acceleration _____.',
            options: ['Decreases toward 0', 'Stays at g', 'Increases toward g'],
            correctIndex: 2,
            explanation: '$a = g\\sin\\theta$ increases from 0 (at $\\theta = 0°$) toward $g$ (at $\\theta = 90°$).'
          },
          {
            label: 'The normal force on a frictionless incline does _____ work on the sliding block.',
            options: ['Positive', 'Zero', 'Negative'],
            correctIndex: 1,
            explanation: 'The normal force is perpendicular to the displacement. $W = Fd\\cos 90° = 0$.'
          }
        ]
      }
    },
    {
      id: 'ip2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A block slides from rest down a 53° frictionless incline for 3 m. What is its speed at the bottom? ($g = 10$ m/s², $\\sin 53° = 0.80$)',
            options: [
              '4.9 m/s',
              '6.0 m/s',
              '6.9 m/s',
              '7.7 m/s'
            ],
            correctAnswer: 2,
            explanation: '$a = g\\sin 53° = 8$ m/s². $v^2 = 2(8)(3) = 48$. $v = \\sqrt{48} \\approx 6.9$ m/s.'
          },
          {
            question: 'Two frictionless inclines have angles 20° and 40°. A block released from rest slides the same distance $d$ on each. Which block is moving faster at the bottom?',
            options: [
              'The block on the 20° incline',
              'The block on the 40° incline',
              'They have the same speed',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$v^2 = 2g\\sin\\theta \\cdot d$. Since $\\sin 40° > \\sin 20°$, the 40° block has greater speed.'
          }
        ]
      }
    }
  ]
}
