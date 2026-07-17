export const physics1FluidsContinuityPart2Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc2-intro',
      type: 'text' as const,
      content: `
# 🔁 Continuity Equation: $A_1 v_1 = A_2 v_2$

**Part 2 of 7 — Fluids: Continuity**

For an incompressible fluid in a closed pipe, no fluid is created or destroyed: what flows in must flow out. This conservation principle is the **continuity equation** — perhaps the most-used relation in AP fluids.

**In this lesson you will learn:**
- The statement of continuity for incompressible flow
- The equation $A_1 v_1 = A_2 v_2$
- Why incompressibility is essential
- Common AP situations (faucet streams, pipe constrictions)
      `
    },
    {
      id: 'fc2-equation',
      type: 'text' as const,
      content: `
## Continuity Equation

For an **incompressible** fluid in a pipe with no leaks/sources:

$$\\boxed{Q_1 = Q_2 \\quad \\Rightarrow \\quad A_1 v_1 = A_2 v_2}$$

The volume flow rate is the same at every cross-section.

### Why "Incompressible"?

Liquids (water, oil, blood) compress so little that we treat them as incompressible. For gases at low speeds (Mach < 0.3), this is also approximately true.

### Implication: Speed Up Through Narrows

If $A_2 < A_1$, then $v_2 > v_1$. Fluid speeds up in narrower pipes.

$$\\frac{v_2}{v_1} = \\frac{A_1}{A_2}$$

### Famous Example: Falling Stream From a Faucet

Water falling from a faucet accelerates due to gravity. Continuity then forces the cross-section to **shrink** as the stream falls. That's why thin streams of water taper toward the bottom.

### Common Pitfall

Continuity is about **volume** flow rate. If density changes (e.g., compressible gas at high speed), use **mass** flow rate instead — covered in Part 5.
      `
    },
    {
      id: 'fc2-mc',
      type: 'multiple-choice' as const,
      content: `
**Continuity Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For an incompressible fluid in a pipe, $A_1 v_1 = A_2 v_2$ states:',
            options: [
              'Mass is conserved',
              'Volume flow rate is the same at every cross-section',
              'Pressure is conserved',
              'Speed is the same everywhere'
            ],
            correctAnswer: 1,
            explanation: 'Continuity = constant volume flow rate, since fluid neither piles up nor disappears.'
          },
          {
            question: 'A pipe narrows from $A_1$ to $A_2 = A_1/3$. Speed in the narrow part:',
            options: ['$v/3$', '$v$', '$3v$', '$9v$'],
            correctAnswer: 2,
            explanation: '$v_2 = v_1 (A_1/A_2) = 3 v_1$.'
          },
          {
            question: 'A pipe expands from radius $r$ to $2r$. Fluid speed in the wider section:',
            options: ['$v/4$', '$v/2$', '$2v$', '$4v$'],
            correctAnswer: 0,
            explanation: '$A \\propto r^2$ → area ratio = 4 → speed ratio = 1/4.'
          }
        ]
      }
    },
    {
      id: 'fc2-input',
      type: 'input-boxes' as const,
      content: `
**Continuity Calculations** 🧮

1) Water flows at 4 m/s in a pipe of area $0.020$ $m^{2}$. Speed in a narrower section of area $0.0050$ $m^{2}$ (m/s)?

2) A pipe of radius 5 cm carries water at 1 m/s. Pipe narrows to radius 2 cm. New speed (m/s)?

3) A river 80 m wide, 4 m deep, flows at 2.5 m/s. It enters a 20 m wide, 2 m deep gorge. Speed in the gorge (m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '6.25', '20'],
        hint1: '$v_2 = v_1 A_1/A_2$.',
        hint2: '$v_2 = v_1 (r_1/r_2)^2$.',
        hint3: '$v_2 = v_1 A_1/A_2$.',
        explanation: '1) $v_2 = 4 \\times 0.020/0.0050 = 4 \\times 4 = 16$ m/s. 2) $v_2 = 1 \\times (5/2)^2 = 6.25$ m/s. 3) $A_1 = 320$ $m^{2}$, $A_2 = 40$ $m^{2}$, ratio = 8 → $v_2 = 2.5 \\times 8 = 20$ m/s.'
      }
    },
    {
      id: 'fc2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Continuity Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Water exits a hose with speed $v$. If you cap half the opening with your thumb, the exit speed:',
            options: ['Halves', 'Stays the same', 'Doubles', 'Quadruples'],
            correctIndex: 2,
            explanation: 'Same $Q$ from supply, halved $A$ → doubled $v$. Why partial covering creates a strong jet.'
          },
          {
            label: 'A vertical falling stream from a faucet narrows as it falls because:',
            options: ['Surface tension', 'Continuity: $v$ increases due to gravity, so $A$ shrinks', 'Compression', 'Air resistance'],
            correctIndex: 1,
            explanation: '$Q$ is constant. As $v$ grows from gravity, $A$ must decrease.'
          },
          {
            label: 'Two parallel pipes merge into one. The total $Q_{out}$ equals:',
            options: ['$Q_1$ only', '$Q_2$ only', '$Q_1 + Q_2$', '$Q_1 \\cdot Q_2$'],
            correctIndex: 2,
            explanation: 'Conservation of volume: $Q_{out} = Q_1 + Q_2$.'
          },
          {
            label: 'In a horizontal pipe with constant area, the speed of incompressible fluid:',
            options: ['Increases', 'Decreases', 'Stays constant', 'Becomes zero'],
            correctIndex: 2,
            explanation: 'Constant $A$ → constant $v$ (assuming no leaks).'
          }
        ]
      }
    },
    {
      id: 'fc2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Continuity** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Water flows through a horizontal pipe of radius 4.0 cm at 2.0 m/s. The pipe constricts to radius 2.0 cm. Speed in the narrow section?',
            options: [
              '0.50 m/s',
              '2.0 m/s',
              '4.0 m/s',
              '8.0 m/s'
            ],
            correctAnswer: 3,
            explanation: 'Area ratio = $(4/2)^2 = 4$. Speed × 4 = 8 m/s.'
          },
          {
            question: 'Two pipes of areas 0.01 $m^{2}$ and 0.02 $m^{2}$ merge into a single pipe of area 0.015 $m^{2}$. Speeds in the inlets are 3 m/s and 1 m/s. Speed in the outlet?',
            options: [
              '$\\dfrac{1}{3}$ m/s',
              '1 m/s',
              '$\\dfrac{10}{3}$ m/s',
              '5 m/s'
            ],
            correctAnswer: 2,
            explanation: '$Q_{total} = 0.01(3) + 0.02(1) = 0.05$ $m^{3}/s$. $v_{out} = 0.05/0.015 = 10/3 ≈ 3.33$ m/s.'
          }
        ]
      }
    }
  ]
}
