export const precalcVectors2DPart4Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🧭 Vector Applications — Navigation & Forces

**Part 4 of 7**

### Resultant of Forces

When multiple forces act on an object, the **resultant** is their vector sum:

$$\\vec{R} = \\vec{F}_1 + \\vec{F}_2 + \\cdots + \\vec{F}_n$$

### Equilibrium

An object is in **equilibrium** when the resultant force is zero:

$$\\vec{F}_1 + \\vec{F}_2 + \\cdots + \\vec{F}_n = \\vec{0}$$

### Navigation Vectors

- **Heading/bearing**: measured clockwise from north
- **Ground speed**: magnitude of the resultant velocity
- **Course**: direction of actual travel (resultant)
      `
    },
    {
      id: 'p4-example',
      type: 'text' as const,
      content: `
## 📝 Example: Airplane in Wind

A plane flies at 500 mph on heading $070°$ (from north). Wind blows at 60 mph from heading $200°$.

### Convert to Standard Math Angles

Bearing $070°$ → math angle $= 90° - 70° = 20°$

Plane: $\\vec{v}_p = \\langle 500\\cos 20°, 500\\sin 20° \\rangle \\approx \\langle 469.8, 171.0 \\rangle$

Wind from $200°$ means wind blows toward $020°$: math angle $= 70°$

Wind: $\\vec{v}_w = \\langle 60\\cos 70°, 60\\sin 70° \\rangle \\approx \\langle 20.5, 56.4 \\rangle$

### Resultant

$\\vec{R} = \\langle 490.3, 227.4 \\rangle$

Ground speed $= |\\vec{R}| \\approx \\sqrt{490.3^2 + 227.4^2} \\approx 540$ mph

Course angle $= \\tan^{-1}\\frac{227.4}{490.3} \\approx 24.9°$ → Bearing $\\approx 065°$
      `
    },
    {
      id: 'p4-forces',
      type: 'text' as const,
      content: `
## ⚖️ Example: Forces in Equilibrium

A 100 lb weight hangs from two cables making angles of $30°$ and $45°$ with the ceiling.

Let $T_1$ = tension at $30°$, $T_2$ = tension at $45°$ from horizontal.

### Force Equations (equilibrium)

**Horizontal**: $T_1\\cos 30° = T_2\\cos 45°$

$\\frac{\\sqrt{3}}{2}T_1 = \\frac{\\sqrt{2}}{2}T_2 \\implies T_2 = \\frac{\\sqrt{3}}{\\sqrt{2}}T_1 = \\frac{\\sqrt{6}}{2}T_1$

**Vertical**: $T_1\\sin 30° + T_2\\sin 45° = 100$

$\\frac{1}{2}T_1 + \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{6}}{2}T_1 = 100$

$\\frac{1}{2}T_1 + \\frac{\\sqrt{12}}{4}T_1 = 100$

$T_1\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\right) = 100$

$T_1 = \\frac{200}{1+\\sqrt{3}} \\approx 73.2$ lb, $\\quad T_2 \\approx 89.7$ lb
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two forces of $\\langle 5, 0 \\rangle$ and $\\langle 0, 12 \\rangle$ have resultant magnitude:',
            options: ['$17$', '$13$', '$7$', '$60$'],
            correctAnswer: 1,
            explanation: 'Resultant $= \\langle 5, 12 \\rangle$, $|R| = \\sqrt{25+144} = 13$.'
          },
          {
            question: 'A bearing of $180°$ corresponds to heading:',
            options: ['East', 'South', 'West', 'North'],
            correctAnswer: 1,
            explanation: 'Bearing is measured clockwise from north. $180°$ = due south.'
          },
          {
            question: 'For equilibrium, three forces must:',
            options: ['All be equal', 'Sum to the zero vector', 'All point in the same direction', 'Be perpendicular'],
            correctAnswer: 1,
            explanation: 'Equilibrium means $\\vec{F}_1+\\vec{F}_2+\\vec{F}_3 = \\vec{0}$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Force Calculations** 🧮

**1)** Forces $\\vec{F}_1 = \\langle 8, 6 \\rangle$ and $\\vec{F}_2 = \\langle -3, 2 \\rangle$. Resultant $x$-component = ?

**2)** Same forces: resultant $y$-component = ?

**3)** What single force $\\vec{F}_3$ (give $x$-component) would create equilibrium? (The $x$-component that makes the sum zero)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '8', '-5'],
        hint1: '$8 + (-3) = 5$.',
        hint2: '$6 + 2 = 8$.',
        hint3: 'For equilibrium: $F_{3x} = -5$.',
        explanation: '1) $5$. 2) $8$. 3) $F_{3x} = -5$ (to cancel the resultant).'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Navigation & Forces** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bearing $090°$ corresponds to:',
            options: ['North', 'East', 'South', 'West'],
            correctAnswer: 1
          },
          {
            label: 'A headwind directly opposes your velocity. Its effect is to:',
            options: ['Increase ground speed', 'Decrease ground speed', 'Change direction only'],
            correctAnswer: 1
          },
          {
            label: 'If two cables support a weight, increasing one cable\'s angle:',
            options: ['Increases its tension', 'Decreases its tension', 'No effect'],
            correctAnswer: 0
          },
          {
            label: 'The equilibrant force is:',
            options: ['Equal to the resultant', 'Opposite to the resultant', 'Perpendicular to the resultant'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['East', 'Decrease ground speed', 'Increases its tension', 'Opposite to the resultant'],
        hint1: '$90°$ clockwise from north = east.',
        hint2: 'Headwind subtracts from your velocity along the line of travel.',
        hint3: 'Steeper angle means less horizontal component, more tension needed.',
        explanation: 'Bearing $90°$ = east. Headwind decreases ground speed. Steeper cable = more tension. Equilibrant = negative of resultant.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A boat motors at 10 knots heading north. Current flows east at 5 knots. The ground speed is:',
            options: ['$15$ knots', '$5\\sqrt{5}$ knots', '$5$ knots', '$\\sqrt{125}$ knots'],
            correctAnswer: 3,
            explanation: 'Resultant $= \\langle 5, 10 \\rangle$. Speed $= \\sqrt{25+100} = \\sqrt{125} = 5\\sqrt{5}$ knots. Both B and D are the same value.'
          },
          {
            question: 'Three forces $\\vec{F}_1 = \\langle 4, 0 \\rangle$, $\\vec{F}_2 = \\langle 0, 3 \\rangle$, $\\vec{F}_3 = \\langle a, b \\rangle$ are in equilibrium. Then $(a, b) =$',
            options: ['$(4, 3)$', '$(-4, -3)$', '$(3, 4)$', '$(-3, -4)$'],
            correctAnswer: 1,
            explanation: '$\\vec{F}_3 = -(\\vec{F}_1+\\vec{F}_2) = -\\langle 4, 3 \\rangle = \\langle -4, -3 \\rangle$.'
          }
        ]
      }
    }
  ]
};
