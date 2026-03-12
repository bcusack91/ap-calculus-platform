export const physics1InclinedPlanesPart1Data = {
  topicSlug: 'inclined-planes',
  sections: [
    {
      id: 'ip1-intro',
      type: 'text' as const,
      content: `
# ⛰️ Forces on an Incline

**Part 1 of 7 — Inclined Planes**

When an object sits on a tilted surface, gravity doesn\'t just pull it "down" — it has components **along** and **perpendicular to** the slope. Decomposing weight into these components is the foundation of every inclined plane problem.
      `
    },
    {
      id: 'ip1-coordinate-system',
      type: 'text' as const,
      content: `
## The Tilted Coordinate System

On an incline, we tilt our x- and y-axes:
- **x-axis**: parallel to the surface (positive = down the slope)
- **y-axis**: perpendicular to the surface (positive = away from surface)

### Why Tilt the Axes?

The normal force and friction are already along these tilted axes. The only force we need to decompose is **gravity**.

### Weight Components

For an object on an incline of angle $\\theta$:

$$W_x = mg\\sin\\theta \\quad \\text{(along the slope, downhill)}$$

$$W_y = mg\\cos\\theta \\quad \\text{(into the slope)}$$

### Remembering Which Is Which

- At $\\theta = 0°$: No component along the slope ($\\sin 0° = 0$), full weight into surface ($\\cos 0° = 1$). ✅
- At $\\theta = 90°$: Full weight along the "slope" ($\\sin 90° = 1$), nothing into surface ($\\cos 90° = 0$). ✅

The **sin** component drives the object **down the slope**.
The **cos** component is balanced by the **normal force**.
      `
    },
    {
      id: 'ip1-geometry',
      type: 'text' as const,
      content: `
## The Geometry Trick

Why is the angle of the incline equal to the angle between $\\vec{W}$ and the perpendicular-to-surface direction?

Imagine the incline angle $\\theta$ at the base. The surface is tilted $\\theta$ from horizontal. The perpendicular-to-surface direction is tilted $\\theta$ from vertical. Since gravity points straight down (vertical), the angle between gravity and the perpendicular direction is also $\\theta$.

This means:
$$\\text{Component perpendicular to surface} = mg\\cos\\theta$$
$$\\text{Component parallel to surface} = mg\\sin\\theta$$

### The Normal Force

Since there\'s no acceleration perpendicular to the surface:
$$N = mg\\cos\\theta$$

This is **less than** $mg$ — the steeper the incline, the smaller the normal force.
      `
    },
    {
      id: 'ip1-components-mc',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A 10 kg block sits on a 30° incline ($g = 10$ m/s²). What is the component of weight along the slope?',
            options: [
              '50 N',
              '86.6 N',
              '100 N',
              '173 N'
            ],
            correctAnswer: 0,
            explanation: '$W_x = mg\\sin 30° = 100 \\times 0.50 = 50$ N.'
          },
          {
            question: 'For the same block, what is the normal force?',
            options: [
              '50 N',
              '86.6 N',
              '100 N',
              '173 N'
            ],
            correctAnswer: 1,
            explanation: '$N = mg\\cos 30° = 100 \\times 0.866 = 86.6$ N.'
          },
          {
            question: 'As the incline angle increases from 0° to 90°, the normal force:',
            options: [
              'Increases from 0 to mg',
              'Stays at mg',
              'Decreases from mg to 0',
              'First increases, then decreases'
            ],
            correctAnswer: 2,
            explanation: '$N = mg\\cos\\theta$. As $\\theta$ goes from 0° to 90°, $\\cos\\theta$ goes from 1 to 0, so $N$ decreases from $mg$ to 0.'
          }
        ]
      }
    },
    {
      id: 'ip1-calculations',
      type: 'input-boxes' as const,
      content: `
**Calculate the Components** 🧮

A 20 kg block sits on a 37° incline ($g = 10$ m/s², $\\sin 37° = 0.60$, $\\cos 37° = 0.80$).

1) What is the component of weight parallel to the slope (in N)?

2) What is the normal force (in N)?

3) What is the ratio $W_{\\parallel}/N$?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '160', '0.75', '0.750'],
        hint1: '$W_{\\parallel} = mg\\sin 37° = 200 \\times 0.60$.',
        hint2: '$N = mg\\cos 37° = 200 \\times 0.80$.',
        hint3: '$W_{\\parallel}/N = \\sin 37°/\\cos 37° = \\tan 37°$.',
        explanation: '1) $W_{\\parallel} = 200 \\times 0.60 = 120$ N. 2) $N = 200 \\times 0.80 = 160$ N. 3) $120/160 = 0.75$.'
      }
    },
    {
      id: 'ip1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Checks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On a steeper incline, the component of weight pulling the object down the slope _____.',
            options: ['Decreases', 'Stays the same', 'Increases'],
            correctIndex: 2,
            explanation: '$mg\\sin\\theta$ increases as $\\theta$ increases (for $0° < \\theta < 90°$).'
          },
          {
            label: 'On an incline, the normal force equals:',
            options: ['mg', 'mg sinθ', 'mg cosθ', 'mg tanθ'],
            correctIndex: 2,
            explanation: 'The normal force balances the perpendicular component of weight: $N = mg\\cos\\theta$.'
          },
          {
            label: 'The ratio $mg\\sin\\theta / mg\\cos\\theta$ simplifies to:',
            options: ['sinθ', 'cosθ', 'tanθ', '1'],
            correctIndex: 2,
            explanation: '$\\sin\\theta / \\cos\\theta = \\tan\\theta$. This ratio is useful for relating friction to the slope angle.'
          }
        ]
      }
    },
    {
      id: 'ip1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg object on a 53° incline ($\\sin 53° = 0.80$, $\\cos 53° = 0.60$, $g = 10$ m/s²). What is the normal force?',
            options: [
              '30 N',
              '40 N',
              '50 N',
              '80 N'
            ],
            correctAnswer: 0,
            explanation: '$N = mg\\cos 53° = 50 \\times 0.60 = 30$ N.'
          },
          {
            question: 'For the same object, the net force along the slope (if frictionless) is:',
            options: [
              '30 N',
              '40 N',
              '50 N',
              '80 N'
            ],
            correctAnswer: 1,
            explanation: '$F_{\\text{net}} = mg\\sin 53° = 50 \\times 0.80 = 40$ N down the slope.'
          }
        ]
      }
    }
  ]
}
