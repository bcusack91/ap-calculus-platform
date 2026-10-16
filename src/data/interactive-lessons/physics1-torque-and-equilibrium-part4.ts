export const physics1TorqueAndEquilibriumPart4Data = {
  topicSlug: 'torque-and-equilibrium',
  sections: [
    {
      id: 'te4-intro',
      type: 'text' as const,
      content: `
# 🏗️ Static Equilibrium

**Part 4 of 7 — $\\sum F = 0$ AND $\\sum \\tau = 0$**

An object in **static equilibrium** is completely at rest — not translating and not rotating. This requires TWO conditions to be satisfied simultaneously.
      `
    },
    {
      id: 'te4-two-conditions',
      type: 'text' as const,
      content: `
## The Two Conditions for Static Equilibrium

### Condition 1: Translational Equilibrium
$$\\sum F_x = 0 \\quad \\text{and} \\quad \\sum F_y = 0$$

The net force in every direction is zero → no linear acceleration.

### Condition 2: Rotational Equilibrium
$$\\sum \\tau = 0$$

The net torque about any axis is zero → no angular acceleration.

### Both Are Required!

| Condition | What It Prevents |
|-----------|------------------|
| $\\sum F = 0$ | Translation (sliding) |
| $\\sum \\tau = 0$ | Rotation (spinning) |

An object can satisfy one condition without the other:
- A spinning wheel at constant angular velocity has $\\sum \\tau = 0$ but may have $\\sum F \\neq 0$
- A sliding object may have $\\sum F = 0$ but $\\sum \\tau \\neq 0$ if forces create a couple
      `
    },
    {
      id: 'te4-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

1. **Draw a free-body diagram** showing ALL forces with their points of application
2. **Choose a coordinate system** (usually x-horizontal, y-vertical)
3. **Choose a pivot point** (often where unknown forces act to eliminate them)
4. **Apply the three equations:**
   - $\\sum F_x = 0$
   - $\\sum F_y = 0$
   - $\\sum \\tau = 0$
5. **Solve** the system of equations

### Example: Horizontal Beam

A uniform 4 m beam (weight 100 N) is attached to a wall by a hinge and supported by a cable at the far end making 30° with the beam. Find the cable tension.

Taking torques about the hinge:
$$\\sum \\tau = 0: \\quad T\\sin 30° \\times 4 - 100 \\times 2 = 0$$
$$2T = 200 \\Rightarrow T = 100 \\text{ N}$$
      `
    },
    {
      id: 'te4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Static Equilibrium Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For an object to be in static equilibrium, which conditions must be met?',
            options: [
              'Only $\\sum F = 0$; torques then balance on their own',
              'Only $\\sum \\tau = 0$; forces then cancel on their own',
              'Both $\\sum F = 0$ and $\\sum \\tau = 0$',
              'Only that the object is momentarily at rest'
            ],
            correctAnswer: 2,
            explanation: 'Static equilibrium requires both translational equilibrium ($\\sum F = 0$) and rotational equilibrium ($\\sum \\tau = 0$).'
          },
          {
            question: 'A ladder leans against a frictionless wall. The ladder is in static equilibrium. How many unknown forces are there?',
            options: [
              '1: only the normal force from the wall',
              '2: normal forces from wall and floor',
              '3: both normal forces plus floor friction',
              '4: both normal forces plus wall friction'
            ],
            correctAnswer: 2,
            explanation: 'The forces are: weight of ladder (known), normal force from wall (horizontal), normal force from floor (vertical), and friction from the floor (horizontal). The wall is frictionless, so there are 3 unknowns.'
          },
          {
            question: 'A uniform beam is supported at two points. Increasing the weight on the beam closer to support A will:',
            options: [
              'Increase both support forces equally',
              'Increase the force on A more than on B',
              'Decrease the force on A',
              'Have no effect on the support forces'
            ],
            correctAnswer: 1,
            explanation: 'Placing weight closer to support A increases the torque about B from that weight, which increases the reaction at A. The reaction at B also changes but by a smaller amount.'
          }
        ]
      }
    },
    {
      id: 'te4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Static Equilibrium Problems** 🧮

1) A 3 m uniform beam (weight 120 N) is supported at its left end, A, and its right end, B. A 200 N load sits 1 m from A. Find the reaction force at A. (in N, round to nearest whole number)

2) Find the reaction force at B for the beam in problem 1. (in N, round to nearest whole number)

3) A horizontal beam (negligible weight) is 5 m long, hinged at the wall. A cable at the free end makes 90° with the beam and supports a 400 N load at the free end. What is the cable tension? (in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['193', '127', '400'],
        hint1: 'Take torques about B: $A(3) = 120(1.5) + 200(2)$',
        hint2: '$\\sum F_y = 0$: $A + B = 120 + 200 = 320$ N',
        hint3: 'Take torques about the hinge: $T(5) = 400(5)$',
        explanation: '1) Take torques about B. The load is 2 m from B and the beam\'s weight acts at its center, 1.5 m from B: $A(3) = 120(1.5) + 200(2) = 180 + 400 = 580$, so $A = 193.3 \\approx 193$ N. 2) $\\sum F_y = 0$: $B = 320 - 193.3 = 126.7 \\approx 127$ N. Check with torques about A: $B(3) = 120(1.5) + 200(1) = 380$, $B = 126.7$ N. 3) Torques about the hinge: $T(5) = 400(5)$, so $T = 400$ N.'
      }
    },
    {
      id: 'te4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Static Equilibrium Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Static equilibrium requires zero:',
            options: ['net force only, not net torque', 'net torque only, not net force', 'both net force and net torque', 'net work only, not force or torque'],
            correctIndex: 2,
            explanation: 'Static equilibrium requires both $\\sum F = 0$ (no translation) and $\\sum \\tau = 0$ (no rotation).'
          },
          {
            label: 'When solving equilibrium problems, where should you place the pivot?',
            options: ['at the center of mass', 'only at a support or hinge', 'only under the heaviest load', 'anywhere, chosen strategically'],
            correctIndex: 3,
            explanation: 'Any pivot works, because $\\sum \\tau = 0$ holds about every point. Choosing it wisely (for example, where an unknown force acts) simplifies the math.'
          },
          {
            label: 'In 2D static equilibrium, how many independent equations do you have?',
            options: ['1 equation', '2 equations', '3 equations', '4 equations'],
            correctIndex: 2,
            explanation: 'In 2D static equilibrium: $\\sum F_x = 0$, $\\sum F_y = 0$, and $\\sum \\tau = 0$ — three equations total.'
          }
        ]
      }
    },
    {
      id: 'te4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Static Equilibrium** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A painter (700 N) stands 1 m from the left end of a 4 m scaffold (200 N). The scaffold is supported by cables at each end. The tension in the left cable is:',
            options: [
              '275 N',
              '525 N',
              '625 N',
              '900 N'
            ],
            correctAnswer: 2,
            explanation: 'Take torques about the right end. The painter is 3 m from the right end and the scaffold\'s weight acts at its center, 2 m from the right end: $T_L(4) = 700(3) + 200(2) = 2100 + 400 = 2500$, so $T_L = 625$ N. (275 N is the right cable\'s tension; 525 N ignores the scaffold\'s weight; 900 N is the total load.)'
          },
          {
            question: 'A system is in translational equilibrium but not rotational equilibrium. This means:',
            options: [
              'It must be at rest, since the forces on it balance',
              'Its center of mass accelerates, but it does not spin',
              'It has angular but no center-of-mass acceleration',
              'This is impossible: zero net force means zero torque'
            ],
            correctAnswer: 2,
            explanation: '$\\sum F = 0$ ensures no linear acceleration of the center of mass. But $\\sum \\tau \\neq 0$ means there is angular acceleration — the object will start to rotate.'
          }
        ]
      }
    }
  ]
}
