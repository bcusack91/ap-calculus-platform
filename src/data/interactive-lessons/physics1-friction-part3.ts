export const physics1FrictionPart3Data = {
  topicSlug: 'friction',
  sections: [
    {
      id: 'fr3-intro',
      type: 'text' as const,
      content: `
# 📋 Free Body Diagrams with Friction

**Part 3 of 7 — Friction**

Adding friction to FBDs requires care. You must determine the **direction** of friction (it depends on the situation!) and correctly write Newton\'s Second Law equations for both axes.
      `
    },
    {
      id: 'fr3-friction-on-fbd',
      type: 'text' as const,
      content: `
## Drawing Friction on FBDs

### Step 1: Determine the Type

- Is the object sliding? → **Kinetic friction** ($f_k = \\mu_k N$)
- Is the object stationary? → **Static friction** ($f_s \\leq \\mu_s N$)

### Step 2: Determine the Direction

- **Kinetic friction:** Opposes the direction of sliding (velocity relative to surface)
- **Static friction:** Opposes the *tendency* to slide

### Step 3: Draw the Arrow

- Friction is **parallel** to the surface
- At the contact point, pointing in the direction determined in Step 2

### Complete FBD for a Block Pushed Across a Rough Floor

Forces:
- $\\vec{W} = mg$ downward
- $\\vec{N}$ upward (perpendicular to surface)
- $\\vec{F}_{\\text{applied}}$ in the direction of push
- $\\vec{f}_k$ opposite to the direction of motion (along the surface)
      `
    },
    {
      id: 'fr3-examples',
      type: 'text' as const,
      content: `
## FBD Examples with Friction

### Example 1: Block Pushed Right, Sliding Right

- Weight: down
- Normal: up
- Applied force: right
- Kinetic friction: **left** (opposes rightward sliding)

### Example 2: Block Sliding Right with NO Applied Force (Slowing Down)

- Weight: down
- Normal: up
- Kinetic friction: **left** (opposes rightward motion)
- No applied force!
- Net force is to the left → block decelerates

### Example 3: Box on a Truck Accelerating Forward (Box Not Sliding)

- Weight: down
- Normal: up
- Static friction: **forward** (prevents box from sliding backward relative to the truck)

> **Key insight:** Static friction can point in ANY direction along the surface. It points in whatever direction is needed to prevent relative motion.

### Example 4: Block on a Ramp (Not Sliding)

- Weight: straight down
- Normal: perpendicular to ramp surface (tilted)
- Static friction: **up the ramp** (prevents sliding down)
      `
    },
    {
      id: 'fr3-writing-equations',
      type: 'text' as const,
      content: `
## Writing Newton\'s Second Law with Friction

### Horizontal Surface, Object Sliding Right

**x-direction (horizontal):**
$$\\sum F_x = F_{\\text{app}} - f_k = ma_x$$

**y-direction (vertical):**
$$\\sum F_y = N - mg = 0 \\quad \\Rightarrow \\quad N = mg$$

### Combining:
$$F_{\\text{app}} - \\mu_k mg = ma$$
$$a = \\frac{F_{\\text{app}} - \\mu_k mg}{m}$$

### What If No Applied Force? (Object Sliding and Slowing)

$$\\sum F_x = -f_k = ma$$
$$-\\mu_k mg = ma$$
$$a = -\\mu_k g$$

> **This is powerful:** A sliding object on a horizontal surface decelerates at $\\mu_k g$, regardless of mass!

### Example

A box slides across a surface with $\\mu_k = 0.30$ at initial speed 12 m/s. How far does it slide?

$$a = -\\mu_k g = -0.30 \\times 9.8 = -2.94 \\text{ m/s}^2$$
$$v^2 = v_0^2 + 2a\\Delta x$$
$$0 = 144 + 2(-2.94)\\Delta x$$
$$\\Delta x = 144/5.88 = 24.5 \\text{ m}$$
      `
    },
    {
      id: 'fr3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**FBD with Friction** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block slides to the right across a rough floor. The friction force points:',
            options: [
              'To the right (same as motion)',
              'To the left (opposing motion)',
              'Upward',
              'It depends on the applied force'
            ],
            correctAnswer: 1,
            explanation: 'Kinetic friction always opposes the direction of sliding. Since the block slides right, friction points left.'
          },
          {
            question: 'A crate sits on the flatbed of a truck accelerating forward. The static friction on the crate points:',
            options: [
              'Backward (opposing truck\'s motion)',
              'Forward (same as truck\'s acceleration)',
              'Upward',
              'There is no friction since the crate isn\'t sliding'
            ],
            correctAnswer: 1,
            explanation: 'Without friction, the crate would slide backward relative to the truck. Static friction prevents this by pointing forward — it\'s what accelerates the crate along with the truck.'
          },
          {
            question: 'A hockey puck slides on ice ($\\mu_k = 0.05$) with no applied force. Its deceleration is ($g = 10$ m/s²):',
            options: [
              '0.05 m/s²',
              '0.5 m/s²',
              '5 m/s²',
              '10 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a = \\mu_k g = 0.05 \\times 10 = 0.5$ m/s² (deceleration). This is independent of the puck\'s mass.'
          }
        ]
      }
    },
    {
      id: 'fr3-fbd-calculations',
      type: 'input-boxes' as const,
      content: `
**FBD with Friction — Calculations** 🧮

1) A 5 kg block slides to the right on a surface with $\\mu_k = 0.40$. No other horizontal force acts. What is the block\'s acceleration (magnitude, in m/s²)? Use $g = 10$ m/s².

2) The block from #1 has an initial speed of 10 m/s. How far does it slide before stopping (in m)?

3) A 12 kg box is pushed with 80 N across a rough floor ($\\mu_k = 0.30$). What is the acceleration (in m/s²)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '12.5', '3.67'],
        hint1: '$a = \\mu_k g = 0.40 \\times 10$.',
        hint2: '$v^2 = v_0^2 + 2a\\Delta x$. $0 = 100 + 2(-4)\\Delta x$.',
        hint3: '$a = (F - \\mu_k mg)/m = (80 - 0.30 \\times 120)/12$.',
        explanation: '1) $a = 0.40 \\times 10 = 4$ m/s² (deceleration). 2) $\\Delta x = v_0^2/(2a) = 100/8 = 12.5$ m. 3) $f_k = 0.30 \\times 120 = 36$ N. $a = (80 - 36)/12 = 44/12 = 3.67$ m/s².'
      }
    },
    {
      id: 'fr3-dropdown-directions',
      type: 'dropdown-select' as const,
      content: `
**Friction Direction Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A box is pushed to the left and slides to the left. Friction points:',
            options: ['Left', 'Right', 'Up', 'Down'],
            correctIndex: 1,
            explanation: 'Kinetic friction opposes sliding. The box slides left, so friction points right.'
          },
          {
            label: 'A book sits on a tilted surface and doesn\'t slide. Friction points:',
            options: ['Down the slope', 'Up the slope', 'Perpendicular to slope', 'There is no friction'],
            correctIndex: 1,
            explanation: 'The book tends to slide down the slope, so static friction points up the slope to prevent sliding.'
          },
          {
            label: 'An object sliding on a rough surface with no applied force will:',
            options: ['Speed up', 'Move at constant velocity', 'Slow down and stop', 'Immediately stop'],
            correctIndex: 2,
            explanation: 'Kinetic friction opposes motion, causing deceleration ($a = -\\mu_k g$). The object gradually slows and stops.'
          },
          {
            label: 'Deceleration due to friction on a horizontal surface is $\\mu_k g$, which means it does NOT depend on:',
            options: ['The coefficient of friction', 'Gravitational acceleration', 'The mass of the object', 'The surface material'],
            correctIndex: 2,
            explanation: '$a = \\mu_k g$ — mass cancels out! A heavy object and a light object on the same surface decelerate at the same rate.'
          }
        ]
      }
    },
    {
      id: 'fr3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — FBDs with Friction** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 6 kg box is pushed right with 42 N on a rough horizontal surface ($\\mu_k = 0.20$, $g = 10$ m/s²). The net force on the box is:',
            options: [
              '42 N right',
              '30 N right',
              '12 N right',
              '12 N left'
            ],
            correctAnswer: 1,
            explanation: '$f_k = \\mu_k mg = 0.20 \\times 60 = 12$ N left. $F_{\\text{net}} = 42 - 12 = 30$ N right.'
          },
          {
            question: 'A sliding block decelerates at 3 m/s² on a horizontal surface. What is $\\mu_k$? ($g = 10$ m/s²)',
            options: [
              '0.03',
              '0.30',
              '3.0',
              '30'
            ],
            correctAnswer: 1,
            explanation: '$a = \\mu_k g \\Rightarrow \\mu_k = a/g = 3/10 = 0.30$.'
          }
        ]
      }
    }
  ]
}
