export const physics1NewtonsFirstSecondLawsPart3Data = {
  topicSlug: 'newtons-first-second-laws',
  sections: [
    {
      id: 'nf3-intro',
      type: 'text' as const,
      content: `
# 📐 Free Body Diagrams

**Part 3 of 7 — Newton\'s First and Second Laws**

A **Free Body Diagram (FBD)** is the single most important tool in mechanics. It\'s a picture that shows **all the forces** acting on a single object, represented as arrows pointing away from the object.

Every force problem on the AP exam starts with drawing a correct FBD. Master this skill and you\'ll master dynamics.
      `
    },
    {
      id: 'nf3-what-is-fbd',
      type: 'text' as const,
      content: `
## What Is a Free Body Diagram?

A free body diagram:
1. Isolates a **single object** (the "free body")
2. Represents the object as a **dot or simple shape**
3. Draws **all external forces** as arrows starting at the object
4. Labels each force with its **name and/or magnitude**
5. Shows a **coordinate system** (x-y axes)

### Steps to Draw an FBD

1. **Identify the object** you\'re analyzing
2. **List all forces** acting ON that object (not forces the object exerts on others)
3. **Draw each force** as an arrow in the correct direction
4. **Label** each arrow
5. **Choose axes** — usually align one axis with the direction of acceleration

### Common Mistake

❌ Including forces that the object exerts on *other* objects

✅ Only include forces that act **on** the object you\'re analyzing
      `
    },
    {
      id: 'nf3-common-forces',
      type: 'text' as const,
      content: `
## Common Forces in AP Physics 1

| Force | Symbol | Direction | When It Acts |
|-------|--------|-----------|-------------|
| **Weight (Gravity)** | $\\vec{W}$ or $\\vec{F}_g$ | Straight down (toward center of Earth) | Always (near Earth\'s surface) |
| **Normal Force** | $\\vec{N}$ or $\\vec{F}_N$ | Perpendicular to surface, away from surface | Object touches a surface |
| **Tension** | $\\vec{T}$ | Along the rope/string, away from object | Object attached to rope/string |
| **Friction** | $\\vec{f}$ | Parallel to surface, opposing relative motion or tendency of motion | Surfaces in contact |
| **Applied Force** | $\\vec{F}_{\\text{app}}$ | Direction of push/pull | Someone/something pushes or pulls |
| **Spring Force** | $\\vec{F}_s$ | Along spring, toward equilibrium | Object attached to spring |
| **Air Resistance** | $\\vec{F}_{\\text{air}}$ | Opposing velocity | Object moves through air |

### Weight

$$W = mg$$

where $g = 9.8$ $m/s^{2}$ (or $\\approx 10$ $m/s^{2}$ for quick estimates).

Weight always points **straight down**, regardless of the surface orientation.
      `
    },
    {
      id: 'nf3-examples',
      type: 'text' as const,
      content: `
## FBD Examples

### Example 1: Book on a Table

Forces on the book:
- $\\vec{W}$ (weight) pointing down: $W = mg$
- $\\vec{N}$ (normal force) pointing up

Since the book is in equilibrium: $N = W = mg$

### Example 2: Block Pulled by a Rope on a Rough Surface

Forces on the block:
- $\\vec{W}$ pointing down
- $\\vec{N}$ pointing up
- $\\vec{T}$ pointing in the direction of the rope
- $\\vec{f}$ (friction) pointing opposite to motion/tendency of motion

### Example 3: Object in Free Fall

Forces on the object:
- $\\vec{W}$ pointing down

That\'s it! No normal force, no tension — just gravity.

> **Tip:** If the object isn\'t touching a surface, there\'s no normal force. If it\'s not connected to a rope, there\'s no tension.
      `
    },
    {
      id: 'nf3-identify-forces',
      type: 'multiple-choice' as const,
      content: `
**Identify Forces on FBDs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward and is currently at the highest point of its trajectory (ignoring air resistance). What forces act on the ball?',
            options: [
              'Weight downward and an upward force from the throw',
              'No forces — it\'s momentarily at rest',
              'Weight downward only',
              'Weight downward and normal force upward'
            ],
            correctAnswer: 2,
            explanation: 'Once the ball leaves your hand, only gravity acts on it (ignoring air resistance). There is no "force from the throw" — that\'s a common misconception. At the top, $v = 0$ but $a = g$ downward.'
          },
          {
            question: 'A crate sits on the floor of an elevator that is accelerating upward. How many forces act on the crate?',
            options: [
              '1 (weight only)',
              '2 (weight and normal force)',
              '3 (weight, normal force, and applied force from elevator)',
              '2 (weight and an upward acceleration force)'
            ],
            correctAnswer: 1,
            explanation: 'Two forces act on the crate: weight ($mg$) downward and normal force ($N$) upward from the elevator floor. Since the elevator accelerates upward, $N > mg$. There is no separate "acceleration force."'
          },
          {
            question: 'A box is sliding down a rough ramp. How many forces act on the box?',
            options: [
              '2 — weight and normal force',
              '3 — weight, normal force, and friction',
              '4 — weight, normal force, friction, and an applied force',
              '1 — weight only'
            ],
            correctAnswer: 1,
            explanation: 'Three forces: weight (straight down), normal force (perpendicular to ramp surface), and kinetic friction (along the ramp surface, opposing the slide). No applied force is mentioned.'
          }
        ]
      }
    },
    {
      id: 'nf3-force-inputs',
      type: 'input-boxes' as const,
      content: `
**FBD Force Analysis** 🧮

Consider a 5 kg block resting on a horizontal surface.

1) What is the magnitude of the weight force (in N)? Use $g = 9.8$ $m/s^{2}$.

2) The block is in equilibrium on the surface. What is the magnitude of the normal force (in N)?

3) A person pushes the block to the right with 20 N on a frictionless surface. What is the acceleration $(in m/s^{2})$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['49', '49', '4'],
        hint1: '$W = mg = 5 \\times 9.8$',
        hint2: 'In vertical equilibrium, $N = W$.',
        hint3: '$a = F_{\\text{net}}/m = 20/5$. On a frictionless surface, the only horizontal force is the push.',
        explanation: '1) $W = mg = 5 \\times 9.8 = 49$ N. 2) Since the block doesn\'t accelerate vertically, $N = W = 49$ N. 3) $a = F/m = 20/5 = 4$ $m/s^{2}$. The net horizontal force is just the 20 N push (no friction).'
      }
    },
    {
      id: 'nf3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Force Direction Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The normal force on an object resting on a horizontal surface points:',
            options: ['Downward', 'Upward', 'To the right', 'Along the surface'],
            correctIndex: 1,
            explanation: 'The normal force is always perpendicular to the contact surface and pushes away from it. On a horizontal surface, it points straight up.'
          },
          {
            label: 'Weight always points:',
            options: ['Perpendicular to the surface', 'Straight down toward Earth\'s center', 'In the direction of motion', 'Opposite to the normal force'],
            correctIndex: 1,
            explanation: 'Weight ($\\vec{W} = m\\vec{g}$) always points straight down, regardless of the orientation of any surface the object may be on.'
          },
          {
            label: 'Tension in a rope pulls the attached object:',
            options: ['Away from the rope', 'Perpendicular to the rope', 'Along the rope, toward the rope', 'Downward always'],
            correctIndex: 2,
            explanation: 'Tension pulls the object along the rope, toward the other end. A rope can only pull, never push.'
          },
          {
            label: 'On an FBD, you should draw forces that act:',
            options: ['On the object by other objects', 'By the object on other objects', 'Both on and by the object', 'Internal to the object'],
            correctIndex: 0,
            explanation: 'An FBD shows only the forces that act ON the object you\'re analyzing, not forces the object exerts on others.'
          }
        ]
      }
    },
    {
      id: 'nf3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Free Body Diagrams** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A block hangs motionless from a single string attached to the ceiling. The FBD of the block includes:',
            options: [
              'Weight down, tension up, and normal force up',
              'Weight down and tension up only',
              'Tension up only',
              'Weight down only'
            ],
            correctAnswer: 1,
            explanation: 'Two forces act on the hanging block: weight ($mg$) downward and tension ($T$) upward. There is no normal force because the block doesn\'t touch a surface.'
          },
          {
            question: 'A hockey puck slides freely across frictionless ice (horizontal surface). Its FBD shows:',
            options: [
              'Weight, normal force, and a forward force',
              'Weight and normal force only',
              'Weight only',
              'No forces (it\'s on frictionless ice)'
            ],
            correctAnswer: 1,
            explanation: 'The puck touches the ice surface (normal force up) and has weight (down). No friction (frictionless ice) and no applied force (slides freely). Two forces that cancel: $N = W$.'
          }
        ]
      }
    }
  ]
}
