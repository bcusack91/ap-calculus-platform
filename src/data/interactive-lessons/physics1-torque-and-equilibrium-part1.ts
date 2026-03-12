export const physics1TorqueAndEquilibriumPart1Data = {
  topicSlug: 'torque-and-equilibrium',
  sections: [
    {
      id: 'te1-intro',
      type: 'text' as const,
      content: `
# 🔧 Torque — The Rotational Cousin of Force

**Part 1 of 7 — Torque: $\\tau = rF\\sin\\theta$**

You know that forces cause objects to accelerate in a straight line. But what causes objects to **rotate**? The answer is **torque** — a quantity that measures how effectively a force can cause rotation about a pivot point.

Think about opening a door: pushing near the hinge barely moves it, but pushing at the handle swings it easily. Same force, different **torque**.
      `
    },
    {
      id: 'te1-definition',
      type: 'text' as const,
      content: `
## Defining Torque

Torque ($\\tau$, the Greek letter "tau") is defined as:

$$\\tau = rF\\sin\\theta$$

Where:
- $r$ = distance from the **axis of rotation** (pivot) to where the force is applied
- $F$ = magnitude of the applied force
- $\\theta$ = angle between the force vector and the position vector (from pivot to point of application)

### Units

$$[\\tau] = \\text{m} \\cdot \\text{N} = \\text{N·m}$$

**Important:** N·m for torque is NOT the same as a joule (J), even though $1\\,\\text{J} = 1\\,\\text{N·m}$. Torque and energy are fundamentally different quantities.

### Maximum Torque

Torque is **maximum** when $\\theta = 90°$ (force is perpendicular to the lever arm):

$$\\tau_{\\text{max}} = rF$$

Torque is **zero** when $\\theta = 0°$ or $180°$ (force is parallel to the position vector — pushing directly toward or away from the pivot).
      `
    },
    {
      id: 'te1-sign-convention',
      type: 'text' as const,
      content: `
## Sign Convention for Torque

By convention:

| Direction of Rotation | Sign |
|----------------------|------|
| **Counterclockwise (CCW)** | **Positive** (+) |
| **Clockwise (CW)** | **Negative** (−) |

This follows the right-hand rule: curl the fingers of your right hand in the direction of rotation — your thumb points in the direction of the torque vector (out of the page for CCW, into the page for CW).

### Example

A 50 N force is applied perpendicularly at a distance of 0.3 m from the pivot, causing clockwise rotation.

$$\\tau = -(0.3)(50)\\sin 90° = -15 \\text{ N·m}$$

The negative sign indicates **clockwise** rotation.
      `
    },
    {
      id: 'te1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Torque Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following increases the torque produced by a force?',
            options: [
              'Applying the force closer to the pivot',
              'Applying the force at a smaller angle to the lever arm',
              'Applying the force farther from the pivot',
              'Reducing the magnitude of the force'
            ],
            correctAnswer: 2,
            explanation: '$\\tau = rF\\sin\\theta$. Increasing $r$ (distance from pivot) increases torque. Applying the force farther from the pivot gives a larger lever arm.'
          },
          {
            question: 'A force is applied along the line connecting the point of application to the pivot ($\\theta = 0°$). The torque is:',
            options: [
              'Maximum',
              'Equal to $rF$',
              'Zero',
              'Negative'
            ],
            correctAnswer: 2,
            explanation: '$\\tau = rF\\sin 0° = 0$. When the force points directly toward or away from the pivot, it cannot cause any rotation.'
          },
          {
            question: 'A wrench is used to tighten a bolt. The force causes counterclockwise rotation. The torque is:',
            options: [
              'Negative',
              'Zero',
              'Positive',
              'Undefined'
            ],
            correctAnswer: 2,
            explanation: 'By convention, counterclockwise (CCW) rotation corresponds to positive torque.'
          }
        ]
      }
    },
    {
      id: 'te1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Torque Calculation Drill** 🧮

1) A 40 N force is applied perpendicularly ($\\theta = 90°$) at a distance of 0.25 m from the pivot. What is the magnitude of the torque? (in N·m)

2) A 100 N force is applied at $\\theta = 30°$ at a distance of 0.5 m from the pivot. What is the magnitude of the torque? (in N·m)

3) You want to produce a torque of 60 N·m by applying a perpendicular force at a distance of 0.4 m from the pivot. What force is needed? (in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '25', '150'],
        hint1: '$\\tau = rF\\sin\\theta = (0.25)(40)\\sin 90°$',
        hint2: '$\\tau = (0.5)(100)\\sin 30° = (0.5)(100)(0.5)$',
        hint3: '$\\tau = rF \\Rightarrow F = \\tau/r = 60/0.4$',
        explanation: '1) $\\tau = (0.25)(40)(1) = 10$ N·m. 2) $\\tau = (0.5)(100)(0.5) = 25$ N·m. 3) $F = 60/0.4 = 150$ N.'
      }
    },
    {
      id: 'te1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Torque Fundamentals Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The rotational analogue of force is:',
            options: ['energy', 'torque', 'linear momentum', 'power'],
            correctIndex: 1,
            explanation: 'Torque is the rotational analogue of force — it causes angular acceleration just as force causes linear acceleration.'
          },
          {
            label: 'Torque τ = rF sin θ is maximized when θ equals:',
            options: ['0°', '45°', '90°', '180°'],
            correctIndex: 2,
            explanation: '$\\tau = rF\\sin\\theta$ is maximized when $\\sin\\theta = 1$, which occurs at $\\theta = 90°$ (force perpendicular to lever arm).'
          },
          {
            label: 'By convention, counterclockwise torque is considered:',
            options: ['positive', 'negative', 'zero', 'infinite'],
            correctIndex: 0,
            explanation: 'By convention, counterclockwise rotation is positive and clockwise rotation is negative.'
          }
        ]
      }
    },
    {
      id: 'te1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Torque Basics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A mechanic applies a 200 N force at the end of a 0.3 m wrench at an angle of $60°$ to the wrench. What is the torque?',
            options: [
              '30 N·m',
              '52 N·m',
              '60 N·m',
              '120 N·m'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = rF\\sin\\theta = (0.3)(200)\\sin 60° = (0.3)(200)(0.866) = 51.96 \\approx 52$ N·m.'
          },
          {
            question: 'Two forces produce torques of +15 N·m and −10 N·m about the same pivot. The net torque is:',
            options: [
              '25 N·m clockwise',
              '5 N·m counterclockwise',
              '5 N·m clockwise',
              '25 N·m counterclockwise'
            ],
            correctAnswer: 1,
            explanation: '$\\tau_{\\text{net}} = +15 + (-10) = +5$ N·m. The positive sign means the net rotation is counterclockwise.'
          }
        ]
      }
    }
  ]
}
