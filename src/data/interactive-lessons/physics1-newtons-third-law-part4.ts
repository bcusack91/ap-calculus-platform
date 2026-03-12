export const physics1NewtonsThirdLawPart4Data = {
  topicSlug: 'newtons-third-law',
  sections: [
    {
      id: 'nt4-intro',
      type: 'text' as const,
      content: `
# 🔗 Connected Objects — Strings, Pulleys, and the Atwood Machine

**Part 4 of 7 — Newton\'s Third Law**

When objects are connected by strings or ropes over pulleys, they form **systems** where the motion of one affects the motion of all others. The Atwood machine is the classic AP Physics 1 problem of this type.
      `
    },
    {
      id: 'nt4-ideal-strings',
      type: 'text' as const,
      content: `
## Ideal Strings and Pulleys

### Ideal (Massless) String

In AP Physics 1, strings are assumed to be:
- **Massless** — the string has negligible mass
- **Inextensible** — the string doesn\'t stretch

**Key consequence:** Tension is the **same** throughout an ideal string, even if it bends around a pulley.

### Ideal (Massless, Frictionless) Pulley

An ideal pulley:
- Has negligible mass
- Has no friction at the axle
- Only **redirects** the tension — it doesn\'t change the magnitude

### Constraint: Same Magnitude of Acceleration

If two objects are connected by an inextensible string:
- They have the **same magnitude** of acceleration
- If one speeds up, the other speeds up at the same rate
- If one moves 1 m, the other moves 1 m
      `
    },
    {
      id: 'nt4-atwood-machine',
      type: 'text' as const,
      content: `
## The Atwood Machine

Two masses ($m_1$ and $m_2$, with $m_2 > m_1$) connected by a string over a frictionless, massless pulley.

### Setting Up the Problem

**FBD of $m_1$ (lighter, accelerates up):**
$$T - m_1 g = m_1 a$$

**FBD of $m_2$ (heavier, accelerates down):**
$$m_2 g - T = m_2 a$$

### Solving for Acceleration

Add the two equations:
$$m_2 g - m_1 g = (m_1 + m_2)a$$

$$\\boxed{a = \\frac{(m_2 - m_1)}{(m_1 + m_2)} g}$$

### Solving for Tension

Substitute $a$ back:
$$T = m_1(g + a) = m_1 g + m_1 \\frac{(m_2 - m_1)g}{m_1 + m_2}$$

$$\\boxed{T = \\frac{2m_1 m_2}{m_1 + m_2} g}$$

### Special Cases

| Condition | Acceleration | Tension |
|-----------|-------------|---------|
| $m_1 = m_2$ | $a = 0$ (equilibrium) | $T = mg$ |
| $m_2 \\gg m_1$ | $a \\approx g$ (near free fall) | $T \\approx 2m_1 g$ |
| $m_1 = 0$ | $a = g$ (free fall) | $T = 0$ |
      `
    },
    {
      id: 'nt4-table-pulley',
      type: 'text' as const,
      content: `
## Table-Pulley System

A block on a frictionless table ($m_1$) connected by a string over a pulley to a hanging block ($m_2$).

**FBD of $m_1$ (on table, accelerates horizontally):**
$$T = m_1 a$$

**FBD of $m_2$ (hanging, accelerates down):**
$$m_2 g - T = m_2 a$$

### Solving

Add the equations:
$$m_2 g = (m_1 + m_2)a$$

$$\\boxed{a = \\frac{m_2}{m_1 + m_2} g}$$

$$\\boxed{T = \\frac{m_1 m_2}{m_1 + m_2} g}$$

### Key Observations

- Only the **hanging mass** provides the driving force ($m_2 g$)
- Both masses resist acceleration (total inertia = $m_1 + m_2$)
- The tension is always **less** than $m_2 g$ (otherwise $m_2$ wouldn\'t accelerate)
      `
    },
    {
      id: 'nt4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Connected Object Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an Atwood machine with $m_1 = 3$ kg and $m_2 = 5$ kg, the tension in the string is:',
            options: [
              'Equal to $m_1 g = 29.4$ N',
              'Equal to $m_2 g = 49$ N',
              'Between $m_1 g$ and $m_2 g$',
              'Equal to $(m_1 + m_2)g = 78.4$ N'
            ],
            correctAnswer: 2,
            explanation: 'The tension must be greater than $m_1 g$ (to accelerate $m_1$ upward) and less than $m_2 g$ (to allow $m_2$ to accelerate downward). So $m_1 g < T < m_2 g$.'
          },
          {
            question: 'In an Atwood machine, if both masses are equal, the system:',
            options: [
              'Accelerates at $g$',
              'Accelerates at $g/2$',
              'Remains in equilibrium ($a = 0$)',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: '$a = (m_2 - m_1)g/(m_1 + m_2) = 0$ when $m_1 = m_2$. The system is in equilibrium.'
          },
          {
            question: 'A 2 kg block on a frictionless table is connected to a 3 kg hanging block. The acceleration of the system is ($g = 10$ m/s²):',
            options: [
              '2 m/s²',
              '6 m/s²',
              '10 m/s²',
              '15 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a = m_2 g/(m_1 + m_2) = 3(10)/(2 + 3) = 30/5 = 6$ m/s².'
          }
        ]
      }
    },
    {
      id: 'nt4-atwood-calculations',
      type: 'input-boxes' as const,
      content: `
**Atwood Machine Calculations** 🧮

An Atwood machine has $m_1 = 4$ kg and $m_2 = 6$ kg. Use $g = 10$ m/s².

1) What is the acceleration of the system (in m/s²)?

2) What is the tension in the string (in N)?

3) If released from rest, how fast is each mass moving after 3 seconds (in m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '48', '6'],
        hint1: '$a = (m_2 - m_1)g/(m_1 + m_2) = (6-4)(10)/(6+4)$.',
        hint2: '$T = 2m_1 m_2 g/(m_1 + m_2) = 2(4)(6)(10)/(10)$.',
        hint3: '$v = v_0 + at = 0 + 2(3)$.',
        explanation: '1) $a = (6-4)(10)/(6+4) = 20/10 = 2$ m/s². 2) $T = 2(4)(6)(10)/10 = 480/10 = 48$ N. Check: $48 > m_1 g = 40$ ✓ and $48 < m_2 g = 60$ ✓. 3) $v = 0 + 2(3) = 6$ m/s.'
      }
    },
    {
      id: 'nt4-dropdown-analysis',
      type: 'dropdown-select' as const,
      content: `
**System Analysis Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an ideal Atwood machine, the tension throughout the string is:',
            options: ['Different at each point', 'The same everywhere', 'Zero', 'Equal to the weight of the heavier mass'],
            correctIndex: 1,
            explanation: 'With a massless string and frictionless pulley, tension is uniform throughout the string.'
          },
          {
            label: 'If you increase $m_2$ in an Atwood machine while keeping $m_1$ constant, the acceleration:',
            options: ['Decreases', 'Stays the same', 'Increases', 'First increases then decreases'],
            correctIndex: 2,
            explanation: 'Larger $m_2$ means a bigger difference $(m_2 - m_1)$ and thus more driving force. The acceleration increases (approaching $g$ as $m_2 \\to \\infty$).'
          },
          {
            label: 'In a table-pulley system, the constraint is that both blocks have:',
            options: ['The same velocity', 'The same acceleration magnitude', 'The same mass', 'The same force'],
            correctIndex: 1,
            explanation: 'Connected by an inextensible string, both blocks must have the same magnitude of acceleration (and speed at any instant).'
          }
        ]
      }
    },
    {
      id: 'nt4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Connected Objects** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In a table-pulley system (frictionless table), $m_1 = 5$ kg on the table and $m_2 = 5$ kg hanging. What is the tension? ($g = 10$ m/s²)',
            options: [
              '25 N',
              '50 N',
              '75 N',
              '100 N'
            ],
            correctAnswer: 0,
            explanation: '$a = m_2 g/(m_1 + m_2) = 5(10)/10 = 5$ m/s². $T = m_1 a = 5(5) = 25$ N. Or: $T = m_1 m_2 g/(m_1 + m_2) = 25(10)/10 = 25$ N.'
          },
          {
            question: 'An Atwood machine has $m_1 = 1$ kg and $m_2 = 9$ kg. The acceleration is closest to ($g = 10$ m/s²):',
            options: [
              '2 m/s²',
              '5 m/s²',
              '8 m/s²',
              '10 m/s²'
            ],
            correctAnswer: 2,
            explanation: '$a = (9-1)(10)/(9+1) = 80/10 = 8$ m/s². Since $m_2 \\gg m_1$, the acceleration is close to $g$.'
          }
        ]
      }
    }
  ]
}
