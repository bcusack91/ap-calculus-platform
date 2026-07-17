export const physics1FluidsContinuityPart4Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc4-intro',
      type: 'text' as const,
      content: `
# 🌳 Branching & Merging Pipes

**Part 4 of 7 — Fluids: Continuity**

Real plumbing systems split and merge — think household water mains feeding multiple pipes, or arteries branching into capillaries. Continuity still applies: the total volume flow rate in must equal the total volume flow rate out at every junction.

**In this lesson you will learn:**
- Conservation of $Q$ at junctions: $\\sum Q_{in} = \\sum Q_{out}$
- Splitting flow between two branches
- The cardiovascular analogy (slow blood flow in capillaries)
- Common AP setups
      `
    },
    {
      id: 'fc4-junctions',
      type: 'text' as const,
      content: `
## Junction Equation

At any junction in an incompressible fluid network:

$$\\boxed{\\sum Q_{in} = \\sum Q_{out}}$$

In terms of areas and speeds:

$$\\sum A_{in,i}\\, v_{in,i} = \\sum A_{out,j}\\, v_{out,j}$$

### Splitting Example

A main pipe ($A_0$, $v_0$) splits into two branches ($A_1$, $v_1$ and $A_2$, $v_2$):

$$A_0 v_0 = A_1 v_1 + A_2 v_2$$

### Merging Example

Two streams ($A_1, v_1$ and $A_2, v_2$) merge into one:

$$A_1 v_1 + A_2 v_2 = A_3 v_3$$

### Cardiovascular System

| Location | Total cross-section | Flow speed |
|----------|--------------------|-----------| 
| Aorta | ~3 $cm^{2}$ | ~30 cm/s |
| All capillaries (combined) | ~3000 $cm^{2}$ | ~0.03 cm/s |

The huge total capillary area means very slow flow — perfect for nutrient/gas exchange. This is continuity in biology!
      `
    },
    {
      id: 'fc4-mc',
      type: 'multiple-choice' as const,
      content: `
**Branching Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At a junction where two pipes (areas 1 and 2) merge into one (area 3), continuity requires:',
            options: [
              '$A_1 + A_2 = A_3$',
              '$Q_1 + Q_2 = Q_3$',
              '$v_1 + v_2 = v_3$',
              '$A_3 = A_1 \\cdot A_2$'
            ],
            correctAnswer: 1,
            explanation: 'Volume flow rate is conserved at the junction.'
          },
          {
            question: 'Blood flow is slowest in capillaries because:',
            options: [
              'Heart pumps slower',
              'Capillaries have small area',
              'Combined capillary cross-section is huge',
              'Blood is thicker'
            ],
            correctAnswer: 2,
            explanation: 'Total cross-section of all capillaries combined is ~1000× the aorta, so $v$ is ~1000× smaller.'
          },
          {
            question: 'A pipe splits into two equal branches. If main speed is $v$ and branches have HALF the main\'s area, branch speed is:',
            options: ['$v/4$', '$v/2$', '$v$', '$2v$'],
            correctAnswer: 2,
            explanation: '$Q_{main} = A v$. Each branch: $Q/2 = (A/2) v_b$ → $v_b = v$. Same speed!'
          }
        ]
      }
    },
    {
      id: 'fc4-input',
      type: 'input-boxes' as const,
      content: `
**Branching Calculations** 🧮

1) A 0.040 $m^{2}$ pipe splits into two: $A_1 = 0.020$ $m^{2}$ ($v_1 = 4$ m/s) and $A_2 = 0.030$ $m^{2}$ ($v_2 = 2$ m/s). Speed in main pipe (m/s)?

2) Main pipe area 0.020 $m^{2}$, speed 6.0 m/s, splits into two equal-area branches each 0.010 $m^{2}$. If one branch carries 0.040 $m^{3}/s$, the speed in the other branch (m/s)?

3) Three streams ($Q_1 = 0.050$, $Q_2 = 0.030$, $Q_3 = 0.020$ $m^{3}/s$) merge into a pipe of area $0.025$ $m^{2}$. Outlet speed (m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.5', '8', '4'],
        hint1: '$A_0 v_0 = A_1 v_1 + A_2 v_2$.',
        hint2: 'Other $Q = Q_{main} - Q_{first}$.',
        hint3: '$v = (Q_1+Q_2+Q_3)/A$.',
        explanation: '1) $Q_{tot} = 0.020(4)+0.030(2) = 0.14$ $m^{3}/s$. $v_0 = 0.14/0.040 = 3.5$ m/s. 2) $Q_{main} = 0.020(6) = 0.12$ $m^{3}/s$. $Q_2 = 0.12 - 0.040 = 0.080$ $m^{3}/s$. $v_2 = 0.080/0.010 = 8$ m/s. 3) $Q_{tot} = 0.10$ $m^{3}/s$. $v = 0.10/0.025 = 4$ m/s.'
      }
    },
    {
      id: 'fc4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Branching Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Closing one of two equal output branches forces the SAME total $Q$ through one branch. Speed in the open branch:',
            options: ['Halves', 'Stays the same', 'Doubles', 'Quadruples'],
            correctIndex: 2,
            explanation: 'Same $Q$, half the path → speed doubles in the open branch.'
          },
          {
            label: 'A river fed by two equal tributaries — the river\'s flow rate is:',
            options: ['Same as one tributary', 'Twice one tributary', 'Half a tributary', 'Zero'],
            correctIndex: 1,
            explanation: 'Conservation: $Q_{river} = Q_1 + Q_2 = 2 Q$.'
          },
          {
            label: 'Blood travels through capillaries SLOWLY because the COMBINED capillary area is:',
            options: ['Smaller than the aorta', 'Equal to the aorta', 'Much larger than the aorta', 'Zero'],
            correctIndex: 2,
            explanation: 'Same Q, much larger $A_{total}$ → much smaller $v$.'
          },
          {
            label: 'Two pipes carry $Q_1 = 5$ L/s and $Q_2 = 3$ L/s into a third pipe. Outlet $Q_3$ is:',
            options: ['8 L/s', '5 L/s', '3 L/s', '2 L/s'],
            correctIndex: 0,
            explanation: '$Q_3 = Q_1 + Q_2 = 8$ L/s.'
          }
        ]
      }
    },
    {
      id: 'fc4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Branching** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A main pipe of area 0.020 $m^{2}$ delivers 0.060 $m^{3}/s$ of water. It splits into two branches of areas 0.005 $m^{2}$ ($v_a$) and 0.010 $m^{2}$ ($v_b$), with $v_a = 4$ m/s. What is $v_b$?',
            options: [
              '2 m/s',
              '4 m/s',
              '6 m/s',
              '10 m/s'
            ],
            correctAnswer: 1,
            explanation: '$Q_a = 0.005(4) = 0.020$ $m^{3}/s$. $Q_b = 0.060 - 0.020 = 0.040$ $m^{3}/s$. $v_b = 0.040/0.010 = 4$ m/s.'
          },
          {
            question: 'In the human cardiovascular system, the speed of blood in the AORTA vs the COMBINED capillary network is approximately:',
            options: [
              '1000× slower in aorta',
              'Same speed',
              '1000× faster in aorta',
              'Aorta has zero flow'
            ],
            correctAnswer: 2,
            explanation: 'Total capillary area ≈ 1000× aorta area; same $Q$ → blood is ~1000× slower in capillaries.'
          }
        ]
      }
    }
  ]
}
