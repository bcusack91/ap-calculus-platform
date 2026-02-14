export const physics1TorqueAndEquilibriumPart2Data = {
  topicSlug: 'torque-and-equilibrium',
  sections: [
    {
      id: 'te2-intro',
      type: 'text' as const,
      content: `
# 📏 Lever Arm and Moment Arm

**Part 2 of 7 — The Lever Arm Approach**

In Part 1 we computed torque as $\\tau = rF\\sin\\theta$. There is an equivalent — and often more intuitive — way to think about torque using the concept of the **lever arm** (also called the **moment arm**).
      `
    },
    {
      id: 'te2-lever-arm',
      type: 'text' as const,
      content: `
## What Is the Lever Arm?

The **lever arm** (moment arm) $r_{\\perp}$ is the **perpendicular distance** from the axis of rotation to the **line of action** of the force.

$$r_{\\perp} = r\\sin\\theta$$

So the torque formula becomes:

$$\\tau = r_{\\perp} \\cdot F = (r\\sin\\theta) \\cdot F$$

This is identical to $\\tau = rF\\sin\\theta$ — just rearranged!

### Line of Action

The **line of action** of a force is the infinite line drawn along the direction of the force through its point of application.

### Why the Lever Arm Matters

The lever arm approach is especially useful when:
- Forces act at odd angles
- You can easily identify the perpendicular distance from a diagram
- Multiple forces act on the same object

### Example

A horizontal beam of length 2 m is hinged at the wall. A cable attached to its end pulls upward at 60° above the beam with a force of 100 N.

- $r = 2$ m, $\\theta = 60°$
- Lever arm: $r_{\\perp} = 2\\sin 60° = 1.73$ m
- Torque: $\\tau = (1.73)(100) = 173$ N·m (CCW → positive)
      `
    },
    {
      id: 'te2-component-method',
      type: 'text' as const,
      content: `
## The Component Method

Another equivalent approach: decompose the force into components **parallel** and **perpendicular** to the position vector.

- $F_{\\parallel} = F\\cos\\theta$ → produces **no torque** (points toward/away from pivot)
- $F_{\\perp} = F\\sin\\theta$ → produces **all the torque**

$$\\tau = r \\cdot F_{\\perp} = r \\cdot F\\sin\\theta$$

### All Three Methods Give the Same Answer

| Method | Formula |
|--------|---------|
| Cross product | $\\tau = rF\\sin\\theta$ |
| Lever arm | $\\tau = r_{\\perp} \\cdot F$ |
| Force component | $\\tau = r \\cdot F_{\\perp}$ |

Choose whichever is easiest for the given problem!
      `
    },
    {
      id: 'te2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Lever Arm Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The lever arm is defined as:',
            options: [
              'The total length of the beam',
              'The distance from the pivot to where the force is applied',
              'The perpendicular distance from the pivot to the line of action of the force',
              'The horizontal component of the distance'
            ],
            correctAnswer: 2,
            explanation: 'The lever arm (moment arm) is the perpendicular distance from the axis of rotation to the line of action of the force.'
          },
          {
            question: 'A force is applied at distance $r$ from the pivot at angle $\\theta$ to the position vector. Which component of the force contributes to torque?',
            options: [
              '$F\\cos\\theta$ (parallel component)',
              '$F\\sin\\theta$ (perpendicular component)',
              'Both components equally',
              'Neither — only the full force matters'
            ],
            correctAnswer: 1,
            explanation: 'Only the perpendicular component $F_{\\perp} = F\\sin\\theta$ contributes to torque. The parallel component points toward or away from the pivot and cannot cause rotation.'
          },
          {
            question: 'If the lever arm is zero, the torque is:',
            options: [
              'Maximum',
              'Equal to $rF$',
              'Undefined',
              'Zero'
            ],
            correctAnswer: 3,
            explanation: '$\\tau = r_{\\perp} \\cdot F$. If $r_{\\perp} = 0$, the force acts directly through the pivot and produces no torque.'
          }
        ]
      }
    },
    {
      id: 'te2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Lever Arm Calculations** 🧮

1) A force of 80 N acts at the end of a 0.5 m beam at $30°$ to the beam. What is the lever arm? (in m, to 2 decimal places)

2) Using the lever arm from problem 1, what is the torque? (in N·m)

3) A horizontal force of 60 N is applied at the top of a vertical pole that is 3 m tall. The pivot is at the bottom. What is the torque magnitude? (in N·m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.25', '20', '180'],
        hint1: '$r_{\\perp} = r\\sin\\theta = 0.5 \\sin 30°$',
        hint2: '$\\tau = r_{\\perp} \\times F = 0.25 \\times 80$',
        hint3: 'The force is horizontal, the pole is vertical → they are perpendicular. $\\tau = rF\\sin 90° = (3)(60)$',
        explanation: '1) $r_{\\perp} = 0.5 \\sin 30° = 0.5(0.5) = 0.25$ m. 2) $\\tau = (0.25)(80) = 20$ N·m. 3) $\\tau = (3)(60)(1) = 180$ N·m.'
      }
    },
    {
      id: 'te2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Lever Arm Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The lever arm (perpendicular distance from the pivot to the line of action) equals:',
            options: ['the total distance r', 'r sin θ', 'r cos θ', 'r/sin θ'],
            correctIndex: 1,
            explanation: 'The lever arm is $r_{\\perp} = r\\sin\\theta$, the perpendicular distance from the pivot to the line of action.'
          },
          {
            label: 'If you move the point of force application twice as far from the pivot, what happens?',
            options: ['the force doubles', 'the lever arm doubles', 'the torque quadruples', 'nothing changes'],
            correctIndex: 1,
            explanation: 'Moving the point of application twice as far from the pivot doubles the lever arm and thus doubles the torque (for the same force).'
          },
          {
            label: 'To maximize torque, the force should be applied:',
            options: ['along the lever arm', 'perpendicular to the lever arm', 'at 45° to the lever arm', 'toward the pivot'],
            correctIndex: 1,
            explanation: 'When the force is perpendicular to the position vector, $\\sin\\theta = 1$ and the lever arm equals $r$ — giving maximum torque.'
          }
        ]
      }
    },
    {
      id: 'te2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Lever Arms** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 m beam is attached to a wall by a hinge. A rope pulls at the free end at 45° above the beam with 200 N of force. What is the torque about the hinge?',
            options: [
              '200 N·m',
              '283 N·m',
              '400 N·m',
              '141 N·m'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = rF\\sin\\theta = (2)(200)\\sin 45° = 400 \\times 0.707 = 282.8 \\approx 283$ N·m.'
          },
          {
            question: 'A door handle is 0.8 m from the hinge. You push with 25 N perpendicular to the door. Your friend pushes with 50 N at a point 0.4 m from the hinge, also perpendicular. Who creates more torque?',
            options: [
              'You (20 N·m vs 20 N·m — they are equal)',
              'Your friend (25 N·m vs 20 N·m)',
              'You (20 N·m vs 15 N·m)',
              'Your friend (40 N·m vs 20 N·m)'
            ],
            correctAnswer: 0,
            explanation: 'You: $\\tau = (0.8)(25) = 20$ N·m. Friend: $\\tau = (0.4)(50) = 20$ N·m. They are equal! Torque depends on both force AND distance.'
          }
        ]
      }
    }
  ]
}
