export const physics1InclinedPlanesPart7Data = {
  topicSlug: 'inclined-planes',
  sections: [
    {
      id: 'ip7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Inclined Planes**

Congratulations on completing the Inclined Planes unit — and the entire Dynamics section! This final lesson reviews all incline concepts and connects them to the broader AP Physics 1 framework.
      `
    },
    {
      id: 'ip7-concept-map',
      type: 'text' as const,
      content: `
## Complete Inclined Planes Reference

### Weight Decomposition
$$W_{\\parallel} = mg\\sin\\theta \\quad \\text{(drives motion along slope)}$$
$$W_{\\perp} = mg\\cos\\theta \\quad \\text{(balanced by normal force)}$$

### Normal Force
$$N = mg\\cos\\theta \\quad \\text{(no extra perpendicular forces)}$$

### Acceleration Formulas

| Scenario | Formula |
|----------|---------|
| Frictionless | $a = g\\sin\\theta$ |
| Sliding down, friction | $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$ |
| Sliding up, friction | $a_{\\text{decel}} = g(\\sin\\theta + \\mu_k\\cos\\theta)$ |
| Constant velocity | $\\mu_k = \\tan\\theta$ |
| On verge of sliding | $\\mu_s = \\tan\\theta_c$ |

### Connected System (Incline + Hanging Mass)
$$a = \\frac{m_{\\text{hang}}g - m_{\\text{incline}}g\\sin\\theta}{m_{\\text{hang}} + m_{\\text{incline}}}$$

### Key Principles
- Acceleration on a frictionless incline is **mass-independent**
- Normal force on an incline is **less than** $mg$
- Steeper incline = more acceleration, less normal force
- Going up a rough incline: deceleration > acceleration going down
- A block returns **slower** after going up and coming back on a rough incline
      `
    },
    {
      id: 'ip7-review-mc',
      type: 'multiple-choice' as const,
      content: `
**Conceptual Review** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'On a frictionless incline, doubling the mass of the block:',
            options: [
              'Doubles the acceleration',
              'Halves the acceleration',
              'Doesn\'t change the acceleration',
              'Doubles the time to slide down'
            ],
            correctAnswer: 2,
            explanation: '$a = g\\sin\\theta$ is independent of mass. Doubling $m$ doubles both the gravitational force AND the inertia — they cancel.'
          },
          {
            question: 'A block sits on an incline at angle $\\theta$. Friction prevents it from sliding. If you slowly increase $\\theta$, the static friction force:',
            options: [
              'Stays constant at $\\mu_s mg\\cos\\theta$',
              'Increases, matching $mg\\sin\\theta$ until it can\'t',
              'Decreases as $\\theta$ increases',
              'Equals zero until the block starts to slide'
            ],
            correctAnswer: 1,
            explanation: 'Static friction is reactive — it adjusts to match $mg\\sin\\theta$ (the force pulling the block down the slope). It increases with $\\theta$ until it reaches $\\mu_s mg\\cos\\theta$, then the block slides.'
          },
          {
            question: 'Two inclines have the same height $h$ but different angles. On which frictionless incline does a block reach the bottom faster?',
            options: [
              'The steeper one',
              'The shallower one',
              'Same time for both',
              'Cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'The steeper incline has greater acceleration ($g\\sin\\theta$) and a shorter distance ($h/\\sin\\theta$). Despite the shorter path, the key factor is that the steeper incline gives a larger acceleration. The steeper incline wins.'
          }
        ]
      }
    },
    {
      id: 'ip7-ap-input',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 📝

1) A block slides from rest down a frictionless 30° incline that is 10 m long. What is its speed at the bottom (in m/s)? ($g = 10$ m/s², $\\sin 30° = 0.50$)

2) A 5 kg block on a 37° incline ($\\mu_k = 0.25$, $g = 10$ m/s²) slides down. What is the acceleration (in m/s²)? ($\\sin 37° = 0.60$, $\\cos 37° = 0.80$)

3) What angle gives a frictionless incline acceleration of $5$ m/s²? ($g = 10$ m/s², $\\sin 30° = 0.50$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '4', '30'],
        hint1: '$a = g\\sin 30° = 5$ m/s². $v^2 = 2(5)(10) = 100$.',
        hint2: '$a = g(\\sin 37° - \\mu_k\\cos 37°) = 10(0.60 - 0.20) = 4$.',
        hint3: '$g\\sin\\theta = 5$, so $\\sin\\theta = 0.50$, $\\theta = 30°$.',
        explanation: '1) $v = \\sqrt{100} = 10$ m/s. 2) $a = 10(0.60 - 0.25 \\times 0.80) = 4$ m/s². 3) $\\sin\\theta = 5/10 = 0.50$, $\\theta = 30°$.'
      }
    },
    {
      id: 'ip7-ap-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Reasoning** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On a rough incline, a block can remain stationary because:',
            options: ['Normal force holds it', 'Gravity is weaker on the incline', 'Static friction balances the gravitational component along the slope', 'The block has no acceleration component'],
            correctIndex: 2,
            explanation: 'The normal force is perpendicular to the slope — it can\'t prevent sliding. Static friction acts parallel to the surface, opposing the tendency to slide down.'
          },
          {
            label: 'A block slides up and back down a rough incline. The total time going up vs. coming down:',
            options: ['Time up > time down', 'Time up < time down', 'Time up = time down', 'Depends on the angle'],
            correctIndex: 1,
            explanation: 'Going up: deceleration = $g(\\sin\\theta + \\mu_k\\cos\\theta)$. Coming down: acceleration = $g(\\sin\\theta - \\mu_k\\cos\\theta)$. The larger deceleration going up means it stops quickly; the smaller acceleration going down means it takes longer to cover the same distance.'
          },
          {
            label: 'On a 90° "incline" (vertical wall), the normal force is:',
            options: ['mg', 'mg cos90° = 0', 'mg sin90° = mg', 'Undefined'],
            correctIndex: 1,
            explanation: '$N = mg\\cos 90° = 0$. At 90°, the surface is vertical and can\'t support any weight. The object is in free fall.'
          }
        ]
      }
    },
    {
      id: 'ip7-dynamics-connections',
      type: 'text' as const,
      content: `
## Connecting to the Full Dynamics Framework

You\'ve now completed all four dynamics topics:

### 1. Newton\'s First & Second Laws
$$F_{\\text{net}} = ma$$
The foundation of all dynamics. Every incline problem uses this.

### 2. Newton\'s Third Law
Action-reaction pairs in connected systems (string tension, normal force pairs).

### 3. Friction
$f_s \\leq \\mu_s N$ and $f_k = \\mu_k N$. Essential for realistic incline problems.

### 4. Inclined Planes
Weight decomposition + friction + kinematics. The ultimate application of all dynamics concepts combined.

### AP Exam Tips
- **Always draw a FBD** — it\'s required for free-response credit
- **Tilt your axes** on incline problems
- **Check your direction** — what\'s positive?
- **Verify answers** — does the acceleration make sense? Is it less than $g$?
- **Watch for "constant velocity"** — that means $a = 0$!
      `
    },
    {
      id: 'ip7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Inclined Planes Unit** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg block on a 53° frictionless incline is connected to a 3 kg hanging mass ($g = 10$ m/s², $\\sin 53° = 0.80$). What is the tension in the string?',
            options: [
              '16 N',
              '20.8 N',
              '22 N',
              '30 N'
            ],
            correctAnswer: 2,
            explanation: '$a = (m_2 g - m_1 g\\sin 53°)/(m_1 + m_2) = (30 - 16)/5 = 14/5 = 2.8$ m/s². $T = m_2(g - a) = 3(10 - 2.8) = 3(7.2) = 21.6 \\approx 22$ N.'
          },
          {
            question: 'A block launched at 10 m/s up a 30° incline ($\\mu_k = 0.30$, $g = 10$ m/s²) travels up the slope. What is the deceleration? ($\\cos 30° = 0.866$)',
            options: [
              '5.0 m/s²',
              '6.3 m/s²',
              '7.6 m/s²',
              '10.0 m/s²'
            ],
            correctAnswer: 2,
            explanation: '$a = g(\\sin 30° + \\mu_k\\cos 30°) = 10(0.50 + 0.30 \\times 0.866) = 10(0.50 + 0.26) = 7.6$ m/s².'
          }
        ]
      }
    }
  ]
}
