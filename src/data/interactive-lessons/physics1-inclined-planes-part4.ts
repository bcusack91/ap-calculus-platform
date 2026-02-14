export const physics1InclinedPlanesPart4Data = {
  topicSlug: 'inclined-planes',
  sections: [
    {
      id: 'ip4-intro',
      type: 'text' as const,
      content: `
# 🔗 Connected Systems on Inclines

**Part 4 of 7 — Inclined Planes**

Many AP Physics problems involve objects connected by strings over pulleys, with one or both on inclines. These are classic **Atwood-on-incline** problems. The key: all connected objects share the same magnitude of acceleration.
      `
    },
    {
      id: 'ip4-setup',
      type: 'text' as const,
      content: `
## The Classic Setup

### Object on Incline + Hanging Mass

A block of mass $m_1$ sits on an incline of angle $\\theta$, connected by a string over a frictionless pulley to a hanging mass $m_2$.

**For $m_1$ (on the incline, taking up-the-slope as positive):**
$$T - m_1 g\\sin\\theta = m_1 a$$

**For $m_2$ (hanging, taking downward as positive):**
$$m_2 g - T = m_2 a$$

### Solving for Acceleration

Add the equations to eliminate $T$:
$$m_2 g - m_1 g\\sin\\theta = (m_1 + m_2)a$$

$$\\boxed{a = \\frac{m_2 g - m_1 g\\sin\\theta}{m_1 + m_2}}$$

### Solving for Tension

Substitute $a$ back into either equation:
$$T = m_2(g - a) = \\frac{m_1 m_2 g(1 + \\sin\\theta)}{m_1 + m_2}$$

### Direction Check
- If $m_2 g > m_1 g\\sin\\theta$: the hanging mass falls and $m_1$ goes up the incline
- If $m_2 g < m_1 g\\sin\\theta$: $m_1$ slides down and $m_2$ rises
      `
    },
    {
      id: 'ip4-example',
      type: 'text' as const,
      content: `
## Worked Example

$m_1 = 4$ kg on a frictionless 30° incline, connected to $m_2 = 3$ kg hanging ($g = 10$ m/s²).

**Driving force:** $m_2 g - m_1 g\\sin 30° = 30 - 20 = 10$ N

**Total mass:** $m_1 + m_2 = 7$ kg

**Acceleration:** $a = 10/7 \\approx 1.43$ m/s²

**Tension:** $T = m_2(g - a) = 3(10 - 1.43) = 25.7$ N

**Check:** For $m_1$: $T - m_1 g\\sin 30° = 25.7 - 20 = 5.7$ N. $m_1 a = 4 \\times 1.43 = 5.7$ N. ✅

## With Friction

If the incline has friction ($\\mu_k$), add friction to $m_1$\'s equation:

**$m_1$ sliding up:** $T - m_1 g\\sin\\theta - \\mu_k m_1 g\\cos\\theta = m_1 a$

$$a = \\frac{m_2 g - m_1 g\\sin\\theta - \\mu_k m_1 g\\cos\\theta}{m_1 + m_2}$$
      `
    },
    {
      id: 'ip4-mc',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'In a pulley system with $m_1$ on a frictionless incline and $m_2$ hanging, the system is in equilibrium when:',
            options: [
              '$m_1 = m_2$',
              '$m_2 = m_1 \\sin\\theta$',
              '$m_2 = m_1 \\cos\\theta$',
              '$m_2 = m_1 \\tan\\theta$'
            ],
            correctAnswer: 1,
            explanation: 'Equilibrium: $m_2 g = m_1 g\\sin\\theta$, so $m_2 = m_1 \\sin\\theta$.'
          },
          {
            question: '$m_1 = 5$ kg on a frictionless 37° incline, $m_2 = 2$ kg hanging ($\\sin 37° = 0.60$). Which way does the system accelerate?',
            options: [
              '$m_2$ falls (pulling $m_1$ up)',
              '$m_1$ slides down (pulling $m_2$ up)',
              'System is in equilibrium',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$m_1 g\\sin 37° = 30$ N vs $m_2 g = 20$ N. Since $30 > 20$, $m_1$ slides down the incline.'
          },
          {
            question: 'Adding friction to the incline (where $m_1$ is sliding down):',
            options: [
              'Increases the acceleration',
              'Decreases the acceleration',
              'Has no effect since friction is perpendicular to the string',
              'Reverses the direction of motion'
            ],
            correctAnswer: 1,
            explanation: 'When $m_1$ slides down, friction acts up the slope, opposing motion and reducing the net driving force. This decreases the acceleration.'
          }
        ]
      }
    },
    {
      id: 'ip4-calculations',
      type: 'input-boxes' as const,
      content: `
**Connected System Calculations** 🧮

$m_1 = 6$ kg on a frictionless 30° incline, connected over a pulley to $m_2 = 5$ kg hanging freely ($g = 10$ m/s², $\\sin 30° = 0.50$).

1) What is the net driving force of the system (in N)?

2) What is the acceleration (in m/s², to one decimal)?

3) What is the tension in the string (in N, to one decimal)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '1.8', '41.0'],
        hint1: 'Net force = $m_2 g - m_1 g\\sin 30° = 50 - 30$.',
        hint2: '$a = 20/(6 + 5) = 20/11$.',
        hint3: '$T = m_2(g - a) = 5(10 - 1.818)$. Or $T = m_1 g\\sin 30° + m_1 a = 30 + 6(1.818) = 30 + 10.9 = 40.9$.',
        explanation: '1) $50 - 30 = 20$ N. 2) $a = 20/11 \\approx 1.8$ m/s². 3) $T = 5(10 - 1.8) = 41.0$ N.'
      }
    },
    {
      id: 'ip4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**System Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a connected incline-pulley system, if you increase the incline angle (all else equal), the tension in the string:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Could go either way'],
            correctIndex: 3,
            explanation: 'It depends on which mass is accelerating which direction. Increasing $\\theta$ increases $m_1 g\\sin\\theta$. If $m_2$ was driving the system, increased angle reduces $a$ and changes $T$. The effect on tension is nuanced.'
          },
          {
            label: 'The string in a connected system has the same tension on both sides because:',
            options: ['Newton\'s First Law', 'Newton\'s Third Law', 'The string is massless and the pulley is frictionless', 'The masses are equal'],
            correctIndex: 2,
            explanation: 'A massless string transmits force without "using up" any net force to accelerate itself. A frictionless pulley redirects the string without changing the tension.'
          },
          {
            label: 'Both objects in a connected system have the same magnitude of acceleration because:',
            options: ['They have the same mass', 'The string is inextensible', 'Gravity is constant', 'The pulley is frictionless'],
            correctIndex: 1,
            explanation: 'An inextensible (non-stretchy) string means both objects move the same distance in the same time, so they have the same acceleration magnitude.'
          }
        ]
      }
    },
    {
      id: 'ip4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 3 kg block on a frictionless 53° incline is connected to a 4 kg hanging mass ($g = 10$ m/s², $\\sin 53° = 0.80$). What is the acceleration?',
            options: [
              '1.0 m/s²',
              '2.3 m/s²',
              '4.0 m/s²',
              '5.7 m/s²'
            ],
            correctAnswer: 1,
            explanation: 'Net force = $m_2 g - m_1 g\\sin 53° = 40 - 24 = 16$ N. $a = 16/7 \\approx 2.3$ m/s².'
          },
          {
            question: 'For the system above, the tension in the string is approximately:',
            options: [
              '24 N',
              '30.8 N',
              '40 N',
              '64 N'
            ],
            correctAnswer: 1,
            explanation: '$T = m_2(g - a) = 4(10 - 2.3) = 4(7.7) = 30.8$ N.'
          }
        ]
      }
    }
  ]
}
