export const physics1NewtonsThirdLawPart7Data = {
  topicSlug: 'newtons-third-law',
  sections: [
    {
      id: 'nt7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Newton\'s Third Law**

This final part brings together all Newton\'s Third Law concepts: action-reaction pairs, force identification, connected objects, Atwood machines, two-body problems, and system analysis. Expect AP-level questions that combine multiple ideas.
      `
    },
    {
      id: 'nt7-summary',
      type: 'text' as const,
      content: `
## Concept Summary

### Newton\'s Third Law
$$\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}$$
- Equal magnitude, opposite direction, **different objects**
- Same type of force, exist simultaneously, never cancel

### Force Pair Identification
- Use the "flip test": swap the two objects
- Weight ↔ gravitational pull (NOT normal force!)
- Contact ↔ contact (normal, friction, tension)

### Connected Object Formulas

| System | Acceleration | Tension |
|--------|-------------|---------|
| Atwood machine | $a = \\frac{(m_2 - m_1)g}{m_1 + m_2}$ | $T = \\frac{2m_1 m_2 g}{m_1 + m_2}$ |
| Table-pulley | $a = \\frac{m_2 g}{m_1 + m_2}$ | $T = \\frac{m_1 m_2 g}{m_1 + m_2}$ |

### Two-Body Push Problems
- System: $a = F/(m_1 + m_2)$
- Contact force: $F_{\\text{contact}} = m_{\\text{other}} \\times a$

### Key Problem-Solving Checks
- $T$ should be between the two weights (Atwood)
- Contact force $<$ applied force (push problems)
- Internal forces cancel in system analysis
      `
    },
    {
      id: 'nt7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 50 kg girl and a 75 kg boy are on ice skates. The girl pushes the boy. While the push is happening:',
            options: [
              'The girl exerts more force because she initiated the push',
              'The boy exerts more force because he has more mass',
              'They exert equal forces on each other',
              'Only the girl exerts a force'
            ],
            correctAnswer: 2,
            explanation: 'Newton\'s Third Law: the forces are always equal regardless of who initiates the push or the masses involved. The girl accelerates more because she has less mass.'
          },
          {
            question: 'In an Atwood machine with $m_1 = 3$ kg and $m_2 = 7$ kg, the acceleration is ($g = 10$ m/s²):',
            options: [
              '2 m/s²',
              '4 m/s²',
              '7 m/s²',
              '10 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a = (m_2 - m_1)g/(m_1 + m_2) = (7-3)(10)/(7+3) = 40/10 = 4$ m/s².'
          },
          {
            question: 'Block A (2 kg) is on top of block B (3 kg) on a frictionless floor. A horizontal force of 25 N is applied to B. What horizontal force accelerates A?',
            options: [
              '25 N',
              '15 N',
              '10 N',
              '5 N'
            ],
            correctAnswer: 2,
            explanation: '$a = 25/(2+3) = 5$ m/s². The force on A is friction from B: $F = m_A a = 2 \\times 5 = 10$ N.'
          }
        ]
      }
    },
    {
      id: 'nt7-ap-frq',
      type: 'input-boxes' as const,
      content: `
**AP-Style Free Response** 🧮

A modified Atwood machine: $m_1 = 8$ kg on a frictionless table, connected to $m_2 = 2$ kg hanging off the edge. Use $g = 10$ m/s².

1) Find the acceleration of the system (in m/s²).

2) Find the tension in the string (in N).

3) If $m_2$ starts 1.5 m above the floor, how long until it hits the floor (in s)? Round to 2 decimal places.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '16', '1.22'],
        hint1: '$a = m_2 g/(m_1 + m_2) = 2(10)/10$.',
        hint2: '$T = m_1 a = 8 \\times 2$. Or: $T = m_2(g - a) = 2(10-2)$.',
        hint3: '$d = \\frac{1}{2}at^2 \\Rightarrow t = \\sqrt{2d/a} = \\sqrt{2(1.5)/2}$.',
        explanation: '1) $a = 2(10)/10 = 2$ m/s². 2) $T = 8(2) = 16$ N. Check: $16 < m_2 g = 20$ ✓. 3) $t = \\sqrt{2(1.5)/2} = \\sqrt{1.5} = 1.22$ s.'
      }
    },
    {
      id: 'nt7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Synthesis Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an Atwood machine, as $m_2$ gets much larger than $m_1$, the acceleration approaches:',
            options: ['0', '$g/2$', '$g$', '$2g$'],
            correctIndex: 2,
            explanation: 'As $m_2 \\gg m_1$: $a = (m_2 - m_1)g/(m_1 + m_2) \\approx m_2 g/m_2 = g$. The lighter mass is essentially in free fall.'
          },
          {
            label: 'Action-reaction pairs are always the same _____ of force.',
            options: ['Magnitude', 'Direction', 'Type', 'Duration'],
            correctIndex: 2,
            explanation: 'Both forces in a Third Law pair are the same type: both gravitational, both normal, both friction, etc.'
          },
          {
            label: 'The reason a bug splatters on a car windshield while the car is unharmed is:',
            options: ['The car exerts more force on the bug', 'The bug exerts less force on the car', 'Equal forces but the bug has tiny mass, so huge acceleration', 'Newton\'s Third Law doesn\'t apply to very different masses'],
            correctIndex: 2,
            explanation: 'Equal forces (Third Law), but $a = F/m$. The bug\'s tiny mass means enormous acceleration — enough to destroy it. The car\'s huge mass means negligible acceleration.'
          }
        ]
      }
    },
    {
      id: 'nt7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Blocks of mass $m$ and $3m$ are pushed together across a frictionless surface by force $F$ applied to the block of mass $m$. The contact force between the blocks is:',
            options: [
              '$F/4$',
              '$F/3$',
              '$3F/4$',
              '$F$'
            ],
            correctAnswer: 2,
            explanation: '$a = F/(m + 3m) = F/(4m)$. Contact force = $3m \\times F/(4m) = 3F/4$.'
          },
          {
            question: 'A string connects a 4 kg block (on a frictionless table) to a 1 kg hanging block. The tension in the string is ($g = 10$ m/s²):',
            options: [
              '2 N',
              '8 N',
              '10 N',
              '40 N'
            ],
            correctAnswer: 1,
            explanation: '$a = m_2 g/(m_1 + m_2) = 1(10)/5 = 2$ m/s². $T = m_1 a = 4(2) = 8$ N.'
          }
        ]
      }
    },
    {
      id: 'nt7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Newton\'s Third Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A person of mass 70 kg stands on a scale in an elevator. The scale reads 560 N. What is the elevator doing? ($g = 9.8$ m/s², $mg = 686$ N)',
            options: [
              'Accelerating upward',
              'Moving upward at constant velocity',
              'Accelerating downward',
              'In free fall'
            ],
            correctAnswer: 2,
            explanation: '$N = 560 < mg = 686$, so apparent weight is less than true weight. This means the elevator is accelerating downward. $a = g - N/m = 9.8 - 560/70 = 9.8 - 8 = 1.8$ m/s² downward.'
          },
          {
            question: 'An Atwood machine has masses $m$ and $4m$. The tension in the string is:',
            options: [
              '$mg$',
              '$\\frac{8}{5}mg$',
              '$2mg$',
              '$4mg$'
            ],
            correctAnswer: 1,
            explanation: '$T = 2m_1 m_2 g/(m_1 + m_2) = 2(m)(4m)g/(m + 4m) = 8m^2 g/(5m) = \\frac{8}{5}mg$.'
          }
        ]
      }
    }
  ]
}
