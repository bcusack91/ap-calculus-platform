export const physics1InclinedPlanesPart6Data = {
  topicSlug: 'inclined-planes',
  sections: [
    {
      id: 'ip6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Inclined Planes**

This workshop combines all incline concepts: weight components, friction on inclines, connected systems, and kinematics. Practice the complete problem-solving approach for AP-level incline problems.
      `
    },
    {
      id: 'ip6-strategy',
      type: 'text' as const,
      content: `
## Incline Problem-Solving Strategy

### Step 1: Draw the FBD with Tilted Axes
- x-axis along the slope, y-axis perpendicular
- Weight components: $mg\\sin\\theta$ (along), $mg\\cos\\theta$ (perp)

### Step 2: Find the Normal Force
$$N = mg\\cos\\theta \\pm F_{\\text{applied, perp}}$$

### Step 3: Determine Friction (if any)
- Is it frictionless? → No friction term
- Sliding? → $f_k = \\mu_k N$
- Stationary? → $f_s \\leq \\mu_s N$

### Step 4: Apply Newton\'s Second Law Along the Slope
$$\\sum F_{\\parallel} = ma$$

### Step 5: Solve for Unknowns, Then Use Kinematics if Needed

### Worked Example

A 12 kg block is pulled up a 30° rough incline ($\\mu_k = 0.20$) by a rope parallel to the surface with 100 N ($g = 10$ $m/s^{2}$).

**Normal force:** $N = mg\\cos 30° = 120 \\times 0.866 = 103.9$ N

**Friction (opposes motion up):** $f_k = 0.20 \\times 103.9 = 20.8$ N

**Along slope:** $100 - mg\\sin 30° - f_k = ma$
$$100 - 60 - 20.8 = 12a$$
$$19.2 = 12a$$
$$a = 1.6 \\text{ m/s}^2$$
      `
    },
    {
      id: 'ip6-workshop-mc',
      type: 'multiple-choice' as const,
      content: `
**Workshop Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block on a 45° incline ($\\mu_s = 0.50$) is released. Does it slide? ($\\tan 45° = 1.0$)',
            options: [
              'No — friction is strong enough',
              'Yes — the critical angle is exceeded',
              'It depends on the mass',
              'It slides at constant velocity'
            ],
            correctAnswer: 1,
            explanation: 'The block slides if $\\tan\\theta > \\mu_s$. Here $\\tan 45° = 1.0 > 0.50 = \\mu_s$. The incline is too steep for static friction to hold.'
          },
          {
            question: 'A force is applied parallel to a 37° incline to push a 10 kg block up at constant velocity ($\\mu_k = 0.25$, $g = 10$ $m/s^{2}$). The force is:',
            options: [
              '60 N',
              '80 N',
              '20 N',
              'Cannot be calculated without the distance'
            ],
            correctAnswer: 1,
            explanation: 'Constant velocity ($a = 0$): $F = mg\\sin 37° + \\mu_k mg\\cos 37° = 60 + 0.25(80) = 60 + 20 = 80$ N.'
          },
          {
            question: 'Two blocks ($m_1 = 3$ kg, $m_2 = 7$ kg) are connected by a string on a frictionless 30° incline ($m_1$ higher). An external force pushes $m_2$ up the incline. The tension in the string between them:',
            options: [
              'Equals zero — the string is slack',
              'Equals $m_1 g\\sin 30°$ plus $m_1 a$',
              'Equals $m_2 g\\sin 30°$ plus $m_2 a$',
              'Equals $(m_1 + m_2)g\\sin 30°$'
            ],
            correctAnswer: 1,
            explanation: 'The string must accelerate $m_1$ AND support its weight component along the slope. $T = m_1 g\\sin 30° + m_1 a = m_1(g\\sin 30° + a)$.'
          }
        ]
      }
    },
    {
      id: 'ip6-workshop-calc',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

1) A 5 kg block slides from rest down a 53° incline with $\\mu_k = 0.30$ for 2 seconds. What is its final speed (in m/s)? ($g = 10$ $m/s^{2}$, $\\sin 53° = 0.80$, $\\cos 53° = 0.60$)

2) A 10 kg block on a frictionless 30° incline is connected to a 4 kg hanging mass. What is the acceleration $(in m/s^{2})$? ($\\sin 30° = 0.50$)

3) What minimum $\\mu_s$ is needed to keep a block stationary on a 60° incline? ($\\tan 60° = 1.73$)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12.4', '0.71', '1.73'],
        hint1: '$a = 10(0.80 - 0.30 \\times 0.60) = 10(0.62) = 6.2$ $m/s^{2}$. $v = at = 6.2 \\times 2$.',
        hint2: 'Net force $= m_1 g\\sin 30° - m_2 g = 50 - 40 = 10$ N. $a = 10/14$.',
        hint3: '$\\mu_s \\geq \\tan\\theta$.',
        explanation: '1) $a = 6.2$ $m/s^{2}$. $v = 12.4$ m/s. 2) $m_1$ slides down: $a = (50 - 40)/14 \\approx 0.71$ $m/s^{2}$. 3) $\\mu_s = \\tan 60° = 1.73$.'
      }
    },
    {
      id: 'ip6-dropdown-workshop',
      type: 'dropdown-select' as const,
      content: `
**Reasoning Workshop** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A block slides down a rough incline at constant velocity. If you add mass on top of the block:',
            options: ['It accelerates down', 'It decelerates', 'It continues at constant velocity', 'It stops'],
            correctIndex: 2,
            explanation: 'At constant velocity: $\\mu_k = \\tan\\theta$. Adding mass increases both $mg\\sin\\theta$ and $\\mu_k mg\\cos\\theta$ by the same factor. The cancellation still holds!'
          },
          {
            label: 'An applied force pushes a block up an incline at an angle to the surface. The component perpendicular to the surface:',
            options: ['Increases friction only', 'Increases normal force and friction', 'Decreases the acceleration', 'Has no effect'],
            correctIndex: 1,
            explanation: 'A perpendicular component of the applied force presses the block harder against the surface, increasing $N$ and therefore increasing $f = \\mu N$.'
          },
          {
            label: 'Making an incline steeper (with friction) will _____ the acceleration of a block sliding down, assuming it was already sliding.',
            options: ['Always increase', 'Always decrease', 'Increase up to a point', 'Depends on μ_k'],
            correctIndex: 0,
            explanation: '$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$. As $\\theta$ increases, $\\sin\\theta$ grows faster than $\\mu_k\\cos\\theta$ can compensate, so acceleration always increases.'
          }
        ]
      }
    },
    {
      id: 'ip6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Incline Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 8 kg block on a 37° incline ($\\mu_k = 0.50$, $g = 10$ $m/s^{2}$) is given an initial push of 6 m/s up the slope. How far up does it travel? ($\\sin 37° = 0.60$, $\\cos 37° = 0.80$)',
            options: [
              '1.0 m',
              '1.8 m',
              '2.4 m',
              '3.6 m'
            ],
            correctAnswer: 1,
            explanation: 'Going up: $a = g(\\sin 37° + \\mu_k\\cos 37°) = 10(0.60 + 0.40) = 10$ $m/s^{2}$. $0 = 36 - 2(10)d$. $d = 36/20 = 1.8$ m.'
          },
          {
            question: 'A 6 kg block on a frictionless 30° incline is connected to a 6 kg hanging mass. The acceleration of the system is ($g = 10$ $m/s^{2}$):',
            options: [
              '0 $m/s^{2}$',
              '2.5 $m/s^{2}$',
              '5.0 $m/s^{2}$',
              '10 $m/s^{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Net force = $m_2 g - m_1 g\\sin 30° = 60 - 30 = 30$ N. Total mass = 12 kg. $a = 30/12 = 2.5$ $m/s^{2}$.'
          }
        ]
      }
    }
  ]
}
