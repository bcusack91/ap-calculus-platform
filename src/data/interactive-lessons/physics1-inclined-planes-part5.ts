export const physics1InclinedPlanesPart5Data = {
  topicSlug: 'inclined-planes',
  sections: [
    {
      id: 'ip5-intro',
      type: 'text' as const,
      content: `
# 📐 Acceleration and Velocity on Inclines

**Part 5 of 7 — Inclined Planes**

This lesson focuses on using kinematics on inclines — calculating how fast objects move, how far they travel, and how long it takes. We\'ll combine the incline acceleration formula with the kinematic equations you already know.
      `
    },
    {
      id: 'ip5-kinematics-review',
      type: 'text' as const,
      content: `
## Kinematics on Inclines — Review

Once you find $a$ on an incline, the kinematics equations work exactly the same:

$$v = v_0 + at$$
$$\\Delta x = v_0 t + \\frac{1}{2}at^2$$
$$v^2 = v_0^2 + 2a\\Delta x$$

### Key Accelerations

| Scenario | Acceleration |
|----------|-------------|
| Frictionless, sliding down | $a = g\\sin\\theta$ |
| With friction, sliding down | $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$ |
| With friction, sliding up | $a = g(\\sin\\theta + \\mu_k\\cos\\theta)$ (deceleration) |

### Worked Example: Up and Back Down

A block is launched at $v_0 = 8$ m/s up a 30° incline with $\\mu_k = 0.20$ ($g = 10$ m/s²).

**Going up:** $a_{\\text{up}} = g(\\sin 30° + \\mu_k\\cos 30°) = 10(0.50 + 0.173) = 6.73$ m/s²

**Distance up:** $v^2 = v_0^2 - 2a_{\\text{up}}d$
$$0 = 64 - 2(6.73)d \\Rightarrow d = 64/13.46 = 4.75 \\text{ m}$$

**Going down:** $a_{\\text{down}} = g(\\sin 30° - \\mu_k\\cos 30°) = 10(0.50 - 0.173) = 3.27$ m/s²

**Speed at bottom:** $v^2 = 2(3.27)(4.75) = 31.1$
$$v = \\sqrt{31.1} \\approx 5.6 \\text{ m/s}$$

The block returns slower than it left! Friction removed energy in both directions.
      `
    },
    {
      id: 'ip5-time-problems',
      type: 'text' as const,
      content: `
## Time Problems

### How long to slide down?

A block starts from rest and slides $d$ meters down an incline with acceleration $a$:
$$d = \\frac{1}{2}at^2 \\Rightarrow t = \\sqrt{\\frac{2d}{a}}$$

### Example

A block slides from rest down a 5 m frictionless 45° incline ($g = 10$ m/s²).

$$a = g\\sin 45° = 7.07 \\text{ m/s}^2$$
$$t = \\sqrt{\\frac{2 \\times 5}{7.07}} = \\sqrt{1.414} = 1.19 \\text{ s}$$

### How long to stop going up?

$v_0 = 10$ m/s up a 30° rough incline ($\\mu_k = 0.25$).

$$a = g(\\sin 30° + 0.25\\cos 30°) = 10(0.50 + 0.217) = 7.17 \\text{ m/s}^2$$
$$t = v_0/a = 10/7.17 = 1.39 \\text{ s}$$
      `
    },
    {
      id: 'ip5-mc',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A block is launched up a rough incline and returns to its starting point. The return speed is:',
            options: [
              'Equal to the launch speed',
              'Greater than the launch speed',
              'Less than the launch speed',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'Friction removes kinetic energy on both the way up AND the way down. The block returns with less speed than it started with.'
          },
          {
            question: 'A block slides from rest down a frictionless 30° incline for 2 seconds ($g = 10$ m/s²). How far does it travel?',
            options: [
              '5 m',
              '10 m',
              '20 m',
              '40 m'
            ],
            correctAnswer: 1,
            explanation: '$a = g\\sin 30° = 5$ m/s². $d = \\frac{1}{2}(5)(4) = 10$ m.'
          },
          {
            question: 'On a rough incline, a block takes time $t_1$ to slide down a distance $d$ from rest. On a frictionless version of the same incline, the time is $t_2$. Which is greater?',
            options: [
              '$t_1 > t_2$ (friction slows it down)',
              '$t_1 < t_2$ (friction speeds it up)',
              '$t_1 = t_2$',
              'Cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'Friction reduces the net acceleration. With less acceleration, the block takes longer to travel the same distance, so $t_1 > t_2$.'
          }
        ]
      }
    },
    {
      id: 'ip5-calculations',
      type: 'input-boxes' as const,
      content: `
**Kinematics on Inclines** 🧮

A block starts from rest and slides 4 m down a 37° incline with $\\mu_k = 0.25$ ($g = 10$ m/s², $\\sin 37° = 0.60$, $\\cos 37° = 0.80$).

1) What is the acceleration down the slope (in m/s²)?

2) What is the speed at the bottom (in m/s)?

3) How long does it take to reach the bottom (in s, to one decimal)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '5.66', '1.4'],
        hint1: '$a = g(\\sin 37° - \\mu_k\\cos 37°) = 10(0.60 - 0.20)$.',
        hint2: '$v^2 = 2(4)(4) = 32$. $v = \\sqrt{32}$.',
        hint3: '$t = v/a = 5.66/4$. Or $t = \\sqrt{2d/a} = \\sqrt{8/4} = \\sqrt{2}$.',
        explanation: '1) $a = 10(0.60 - 0.25 \\times 0.80) = 10(0.40) = 4$ m/s². 2) $v = \\sqrt{32} \\approx 5.66$ m/s. 3) $t = \\sqrt{2} \\approx 1.4$ s.'
      }
    },
    {
      id: 'ip5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Reasoning Checks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a block launched up a rough incline comes back with half its initial speed, friction removed _____ of the initial kinetic energy.',
            options: ['One-quarter', 'One-half', 'Three-quarters', 'All'],
            correctIndex: 2,
            explanation: 'KE is proportional to $v^2$. Half the speed means $1/4$ the KE. So $3/4$ of the initial KE was lost to friction.'
          },
          {
            label: 'Two blocks on the same frictionless incline: one has mass $m$, the other $2m$. Released from rest, after the same time:',
            options: ['The heavier block is moving faster', 'The lighter block is moving faster', 'Both have the same speed', 'Cannot determine'],
            correctIndex: 2,
            explanation: '$a = g\\sin\\theta$ is mass-independent. Same acceleration for the same time = same speed.'
          }
        ]
      }
    },
    {
      id: 'ip5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A block is launched at 12 m/s up a frictionless 30° incline ($g = 10$ m/s²). How far up the slope does it travel?',
            options: [
              '7.2 m',
              '14.4 m',
              '24 m',
              '28.8 m'
            ],
            correctAnswer: 1,
            explanation: '$a = g\\sin 30° = 5$ m/s². $0 = 144 - 2(5)d$. $d = 144/10 = 14.4$ m.'
          },
          {
            question: 'A block slides from rest down a 53° incline ($\\mu_k = 0.40$, $g = 10$ m/s², $\\sin 53° = 0.80$, $\\cos 53° = 0.60$). After sliding 5 m, its speed is:',
            options: [
              '4.5 m/s',
              '6.3 m/s',
              '7.5 m/s',
              '8.9 m/s'
            ],
            correctAnswer: 2,
            explanation: '$a = 10(0.80 - 0.40 \\times 0.60) = 10(0.80 - 0.24) = 5.6$ m/s². $v^2 = 2(5.6)(5) = 56$. $v = \\sqrt{56} \\approx 7.5$ m/s.'
          }
        ]
      }
    }
  ]
}
