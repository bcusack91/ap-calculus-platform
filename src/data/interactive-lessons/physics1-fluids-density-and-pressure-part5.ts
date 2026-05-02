export const physics1FluidsDensityPressurePart5Data = {
  topicSlug: 'fluids-density-and-pressure',
  sections: [
    {
      id: 'fdp5-intro',
      type: 'text' as const,
      content: `
# 🔧 Pascal's Principle & Hydraulics

**Part 5 of 7 — Fluids: Density & Pressure**

A small force on a small piston can lift a car. Pascal's Principle is the engineering magic behind hydraulic brakes, jacks, and lifts. The key idea: pressure changes transmit fully through a confined fluid.

**In this lesson you will learn:**
- Pascal's Principle (statement)
- The hydraulic-press equation $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$
- Why hydraulics multiply force, not energy
- How displacement scales (work conservation)
      `
    },
    {
      id: 'fdp5-derivation',
      type: 'text' as const,
      content: `
## Pascal's Principle

> **A pressure change applied to a confined fluid is transmitted undiminished to every part of the fluid and to the walls of the container.**

### The Hydraulic Press

Apply force $F_1$ on a small piston of area $A_1$. The added pressure $P = F_1/A_1$ travels through the fluid to a large piston of area $A_2$, lifting:

$$F_2 = P \\cdot A_2 = \\frac{A_2}{A_1}\\, F_1$$

So:

$$\\boxed{\\frac{F_1}{A_1} = \\frac{F_2}{A_2}}$$

If $A_2 = 100\\,A_1$, then $F_2 = 100\\,F_1$ — a 10 N push lifts 1000 N.

### Force Multiplied, Energy NOT Multiplied

Energy is conserved. If $F_2 = 100\\,F_1$, the large piston only rises $1/100$ as far as the small piston descends:

$$F_1 \\cdot d_1 = F_2 \\cdot d_2 \\quad \\Rightarrow \\quad \\frac{d_2}{d_1} = \\frac{A_1}{A_2}$$

You trade distance for force, exactly like a lever or pulley system.

### Why It Works
- Liquids are nearly incompressible.
- Pressure is isotropic in a confined static fluid.
- Closed system → added pressure has nowhere to dissipate.
      `
    },
    {
      id: 'fdp5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Pascal's Principle Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A hydraulic press multiplies:',
            options: [
              'Force AND energy',
              'Force, not energy',
              'Energy, not force',
              'Neither (just transmits)'
            ],
            correctAnswer: 1,
            explanation: 'Force scales with area ratio. Energy is conserved (you push farther for less force).'
          },
          {
            question: 'A hydraulic lift has $A_2/A_1 = 50$. To lift a 5000 N car, the input force needed is:',
            options: ['100 N', '250 N', '5000 N', '250,000 N'],
            correctAnswer: 0,
            explanation: '$F_1 = F_2 (A_1/A_2) = 5000/50 = 100$ N.'
          },
          {
            question: 'In a hydraulic system, the input piston moves down 30 cm and the output rises 1.5 cm. The area ratio $A_2/A_1$ is:',
            options: ['0.05', '5', '20', '50'],
            correctAnswer: 2,
            explanation: 'Volume conservation: $A_1 d_1 = A_2 d_2 \\Rightarrow A_2/A_1 = d_1/d_2 = 30/1.5 = 20$.'
          }
        ]
      }
    },
    {
      id: 'fdp5-calculations',
      type: 'input-boxes' as const,
      content: `
**Hydraulic Press Calculations** 🧮

1) A hydraulic jack: $A_1 = 4.0\\times10^{-4}$ m², $A_2 = 2.0\\times10^{-2}$ m². A 200 N force on the small piston lifts how many N?

2) Same jack — to raise the load 0.10 m, how far (m) must the small piston travel?

3) Input piston of area 0.0025 m² needs to lift a 1.5 kN load using a 60 N input. What output area $A_2$ (m²) is required?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10000', '5', '0.0625'],
        hint1: '$F_2 = F_1 (A_2/A_1)$.',
        hint2: 'Volume conservation: $A_1 d_1 = A_2 d_2$.',
        hint3: '$A_2 = A_1 (F_2/F_1)$.',
        explanation: '1) $F_2 = 200 \\times (2.0\\times10^{-2}/4.0\\times10^{-4}) = 200 \\times 50 = 10{,}000$ N. 2) $d_1 = d_2 (A_2/A_1) = 0.10 \\times 50 = 5$ m. 3) $A_2 = 0.0025 \\times (1500/60) = 0.0625$ m².'
      }
    },
    {
      id: 'fdp5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Hydraulic Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A hydraulic system multiplies force by 100. Compared to input motion, the output piston moves:',
            options: ['100× as far', 'Same distance', '1/100 as far', '10× as far'],
            correctIndex: 2,
            explanation: 'Energy conservation: $F\\cdot d$ constant, so output moves $1/100$ the input distance.'
          },
          {
            label: 'In a hydraulic brake, fluid is used because it is:',
            options: ['Compressible (cushions force)', 'Incompressible (transmits pressure)', 'Lightweight', 'Magnetic'],
            correctIndex: 1,
            explanation: 'Incompressibility ensures the entire pressure change reaches the brake calipers without loss.'
          },
          {
            label: 'Pascal\'s Principle applies to:',
            options: ['Any fluid in motion', 'Only gases', 'Confined static fluids', 'Open atmospheres only'],
            correctIndex: 2,
            explanation: 'Pascal\'s Principle requires a confined (closed) fluid in equilibrium.'
          },
          {
            label: 'A car lift has equal-area pistons. To lift the car 1 m, the input piston must move:',
            options: ['1 m', '2 m', '0.5 m', 'Cannot determine'],
            correctIndex: 0,
            explanation: 'Equal areas → 1:1 force AND distance ratio. No multiplication, just transmission.'
          }
        ]
      }
    },
    {
      id: 'fdp5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Pascal's Principle** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A hydraulic press has small piston radius 1 cm and large piston radius 5 cm. Pushing 50 N on the small piston lifts a maximum weight of:',
            options: [
              '50 N',
              '250 N',
              '1250 N',
              '6250 N'
            ],
            correctAnswer: 2,
            explanation: 'Area ratio = $(r_2/r_1)^2 = 25$. $F_2 = 50 \\times 25 = 1250$ N.'
          },
          {
            question: 'In the same press above, to lift the load 2 cm, the small piston must descend:',
            options: [
              '0.4 cm',
              '2 cm',
              '10 cm',
              '50 cm'
            ],
            correctAnswer: 3,
            explanation: 'Volume conservation: $d_1 = d_2 (A_2/A_1) = 2 \\times 25 = 50$ cm. Trade distance for force.'
          }
        ]
      }
    }
  ]
}
