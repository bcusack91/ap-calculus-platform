export const physics1RotationalKinematicsPart5Data = {
  topicSlug: 'rotational-kinematics',
  sections: [
    {
      id: 'rk5-intro',
      type: 'text' as const,
      content: `
# ⚙️ Rotational Inertia

**Part 5 of 7 — $I = \\sum mr^2$ and Common Shapes**

In linear motion, **mass** resists changes in velocity ($F = ma$). In rotational motion, **rotational inertia** (moment of inertia) resists changes in angular velocity ($\\tau = I\\alpha$).
      `
    },
    {
      id: 'rk5-definition',
      type: 'text' as const,
      content: `
## Defining Rotational Inertia

For a collection of point masses:

$$I = \\sum m_i r_i^2$$

Where $r_i$ is the distance of each mass from the axis of rotation.

### Key Features

- Units: $\\text{kg·m}^2$
- $I$ depends on **mass** AND **how that mass is distributed** relative to the axis
- Moving mass farther from the axis **increases** $I$
- $I$ depends on the **choice of axis**

### Example: Two Point Masses

Two 3 kg masses sit on a light rod, one at 0.5 m and one at 1.0 m from the axis.

$$I = (3)(0.5)^2 + (3)(1.0)^2 = 0.75 + 3.0 = 3.75 \\text{ kg·m}^2$$
      `
    },
    {
      id: 'rk5-common-shapes',
      type: 'text' as const,
      content: `
## Rotational Inertia of Common Shapes

| Shape | Axis | $I$ |
|-------|------|-----|
| Point mass | Distance $r$ | $mr^2$ |
| Thin hoop / ring | Through center | $MR^2$ |
| Solid disk / cylinder | Through center | $\\frac{1}{2}MR^2$ |
| Solid sphere | Through center | $\\frac{2}{5}MR^2$ |
| Hollow sphere | Through center | $\\frac{2}{3}MR^2$ |
| Thin rod (center) | Through center | $\\frac{1}{12}ML^2$ |
| Thin rod (end) | Through end | $\\frac{1}{3}ML^2$ |

### Pattern

The more mass is concentrated **far from the axis**, the **larger** the rotational inertia.

- Hoop ($MR^2$) > Disk ($\\frac{1}{2}MR^2$) > Sphere ($\\frac{2}{5}MR^2$)

All have mass $M$ and radius $R$, but the hoop has all mass at the rim.

### The Parallel Axis Theorem

$$I = I_{\\text{cm}} + Md^2$$

This lets you find $I$ about any axis that is parallel to one through the center of mass, displaced by distance $d$.
      `
    },
    {
      id: 'rk5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rotational Inertia Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which has the greatest rotational inertia about its central axis? (All have the same mass and radius)',
            options: [
              'Solid disk',
              'Solid sphere',
              'Hollow sphere',
              'Thin hoop'
            ],
            correctAnswer: 3,
            explanation: 'Hoop: $MR^2$, Hollow sphere: $\\frac{2}{3}MR^2$, Disk: $\\frac{1}{2}MR^2$, Solid sphere: $\\frac{2}{5}MR^2$. The hoop has all mass at maximum $r$.'
          },
          {
            question: 'A figure skater pulls her arms in during a spin. Her rotational inertia:',
            options: [
              'Increases',
              'Decreases',
              'Stays the same',
              'Becomes zero'
            ],
            correctAnswer: 1,
            explanation: 'Pulling arms in moves mass closer to the rotation axis, reducing $r$ in $I = \\sum mr^2$, so $I$ decreases.'
          },
          {
            question: 'The rotational inertia of a thin rod about its end is $\\frac{1}{3}ML^2$. About its center it is:',
            options: [
              '$\\frac{1}{3}ML^2$',
              '$\\frac{1}{6}ML^2$',
              '$\\frac{1}{12}ML^2$',
              '$\\frac{1}{4}ML^2$'
            ],
            correctAnswer: 2,
            explanation: 'About the center: $I = \\frac{1}{12}ML^2$. This is less than $\\frac{1}{3}ML^2$ because rotating about the center keeps mass closer to the axis on average.'
          }
        ]
      }
    },
    {
      id: 'rk5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Rotational Inertia Calculations** 🧮

1) Three masses (2 kg each) are arranged on a light rod at distances 0.1 m, 0.3 m, and 0.5 m from the rotation axis. What is the total rotational inertia? (in kg·m², round to 3 significant figures)

2) A solid disk has mass 4 kg and radius 0.3 m. What is its rotational inertia about its central axis? (in kg·m²)

3) A solid sphere has $I = 0.8$ kg·m² and radius 0.2 m. What is its mass? (in kg)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.70', '0.18', '50'],
        hint1: '$I = 2(0.1)^2 + 2(0.3)^2 + 2(0.5)^2$',
        hint2: '$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0.09)$',
        hint3: '$I = \\frac{2}{5}MR^2 \\Rightarrow M = 5I/(2R^2)$',
        explanation: '1) $I = 2(0.01) + 2(0.09) + 2(0.25) = 0.02 + 0.18 + 0.50 = 0.70$ kg·m². 2) $I = \\frac{1}{2}(4)(0.09) = 0.18$ kg·m². 3) $M = 5(0.8)/(2 \\times 0.04) = 4.0/0.08 = 50$ kg.'
      }
    },
    {
      id: 'rk5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Rotational Inertia Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rotational inertia depends on:',
            options: ['mass only', 'radius only', 'mass and its distribution from the axis', 'angular velocity'],
            correctIndex: 2,
            explanation: 'Rotational inertia depends on both the total mass AND how that mass is distributed relative to the rotation axis.'
          },
          {
            label: 'The rotational inertia of a solid disk about its central axis is:',
            options: ['MR²', '½MR²', '⅖MR²', '⅔MR²'],
            correctIndex: 1,
            explanation: 'A solid disk (or cylinder) has $I = \\frac{1}{2}MR^2$ about its central axis.'
          },
          {
            label: 'If the radius of a rotating object is doubled, its rotational inertia:',
            options: ['increases', 'decreases', 'stays the same', 'doubles'],
            correctIndex: 0,
            explanation: 'Doubling the radius quadruples $r^2$, significantly increasing the rotational inertia.'
          }
        ]
      }
    },
    {
      id: 'rk5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rotational Inertia** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A solid sphere and a hollow sphere of the same mass and radius roll down a hill. Which reaches the bottom first?',
            options: [
              'Hollow sphere (larger $I$ → more energy in rotation)',
              'Solid sphere (smaller $I$ → less energy in rotation → more translational speed)',
              'They arrive at the same time',
              'Cannot determine without knowing the mass'
            ],
            correctAnswer: 1,
            explanation: 'The solid sphere has $I = \\frac{2}{5}MR^2$ vs. hollow sphere $I = \\frac{2}{3}MR^2$. Less rotational inertia means more gravitational PE converts to translational KE, so the solid sphere is faster.'
          },
          {
            question: 'Using the parallel axis theorem, the rotational inertia of a disk (mass 2 kg, radius 0.1 m) about an axis at its rim is:',
            options: [
              '0.01 kg·m²',
              '0.02 kg·m²',
              '0.03 kg·m²',
              '0.04 kg·m²'
            ],
            correctAnswer: 2,
            explanation: '$I = I_{\\text{cm}} + Md^2 = \\frac{1}{2}(2)(0.01) + (2)(0.01) = 0.01 + 0.02 = 0.03$ kg·m².'
          }
        ]
      }
    }
  ]
}
