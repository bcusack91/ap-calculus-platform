export const precalcVectors2DPart1Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# ➡️ Introduction to Vectors

**Part 1 of 7**

### What Is a Vector?

A **vector** is a quantity with both **magnitude** (length) and **direction**.

Examples: velocity, force, displacement. Compare with **scalars** (magnitude only): speed, mass, temperature.

### Notation

- Arrow notation: $\\vec{v}$, $\\vec{AB}$ (from $A$ to $B$)
- Component form: $\\vec{v} = \\langle a, b \\rangle$ or $\\vec{v} = a\\mathbf{i} + b\\mathbf{j}$
- $\\mathbf{i} = \\langle 1, 0 \\rangle$ (unit vector in $x$-direction)
- $\\mathbf{j} = \\langle 0, 1 \\rangle$ (unit vector in $y$-direction)

### Magnitude

$$|\\vec{v}| = \\|\\vec{v}\\| = \\sqrt{a^2 + b^2}$$

### Direction Angle

$$\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\quad \\text{(adjusted for quadrant)}$$
      `
    },
    {
      id: 'p1-components',
      type: 'text' as const,
      content: `
## 📝 Finding Components

### From Two Points

If $A = (x_1, y_1)$ and $B = (x_2, y_2)$:

$$\\vec{AB} = \\langle x_2 - x_1, \\; y_2 - y_1 \\rangle$$

**Example**: $A = (1, 3), B = (4, 7)$

$\\vec{AB} = \\langle 3, 4 \\rangle$, $|\\vec{AB}| = \\sqrt{9+16} = 5$

### From Magnitude and Angle

If $|\\vec{v}| = r$ and direction angle $= \\theta$:

$$\\vec{v} = \\langle r\\cos\\theta, \\; r\\sin\\theta \\rangle$$

**Example**: $|\\vec{v}| = 10, \\theta = 60°$

$\\vec{v} = \\langle 10\\cos 60°, 10\\sin 60° \\rangle = \\langle 5, 5\\sqrt{3} \\rangle$

### Unit Vector

$$\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|}$$

This has magnitude 1, same direction as $\\vec{v}$.
      `
    },
    {
      id: 'p1-operations',
      type: 'text' as const,
      content: `
## ➕ Basic Vector Operations

### Addition

$\\langle a_1, b_1 \\rangle + \\langle a_2, b_2 \\rangle = \\langle a_1+a_2, \\; b_1+b_2 \\rangle$

Geometrically: **tip-to-tail** method or **parallelogram** rule.

### Subtraction

$\\vec{u} - \\vec{v} = \\vec{u} + (-\\vec{v})$

### Scalar Multiplication

$c\\langle a, b \\rangle = \\langle ca, cb \\rangle$

- $c > 0$: same direction, scaled length
- $c < 0$: opposite direction, scaled length
- $c = 0$: zero vector $\\langle 0, 0 \\rangle$

### Key Properties

| Property | Statement |
|:---------|:----------|
| Commutative | $\\vec{u} + \\vec{v} = \\vec{v} + \\vec{u}$ |
| Associative | $(\\vec{u}+\\vec{v})+\\vec{w} = \\vec{u}+(\\vec{v}+\\vec{w})$ |
| Magnitude scaling | $|c\\vec{v}| = |c| \\cdot |\\vec{v}|$ |
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Vector Basics Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The magnitude of $\\vec{v} = \\langle -3, 4 \\rangle$ is:',
            options: ['$1$', '$5$', '$7$', '$25$'],
            correctAnswer: 1,
            explanation: '$|\\vec{v}| = \\sqrt{9+16} = 5$.'
          },
          {
            question: '$\\langle 2, 5 \\rangle + \\langle -3, 1 \\rangle =$',
            options: ['$\\langle -1, 6 \\rangle$', '$\\langle 5, 4 \\rangle$', '$\\langle -1, 4 \\rangle$', '$\\langle 5, 6 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\langle 2+(-3), 5+1 \\rangle = \\langle -1, 6 \\rangle$.'
          },
          {
            question: 'The unit vector in the direction of $\\langle 6, 8 \\rangle$ is:',
            options: ['$\\langle 6, 8 \\rangle$', '$\\langle 0.6, 0.8 \\rangle$', '$\\langle 3, 4 \\rangle$', '$\\langle \\frac{1}{6}, \\frac{1}{8} \\rangle$'],
            correctAnswer: 1,
            explanation: '$|\\vec{v}| = 10$. Unit vector $= \\langle \\frac{6}{10}, \\frac{8}{10} \\rangle = \\langle 0.6, 0.8 \\rangle$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Compute** 🧮

**1)** $\\vec{v} = \\langle 5, 12 \\rangle$. What is $|\\vec{v}|$?

**2)** $\\vec{AB}$ from $A(2, -1)$ to $B(5, 3)$. $x$-component = ?

**3)** $3\\langle -2, 4 \\rangle = \\langle ?, ? \\rangle$. The $y$-component is?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '3', '12'],
        hint1: '$\\sqrt{25+144} = \\sqrt{169} = 13$.',
        hint2: '$5 - 2 = 3$.',
        hint3: '$3 \\times 4 = 12$.',
        explanation: '1) $|\\vec{v}| = 13$. 2) $x$-component $= 3$. 3) $y$-component $= 12$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Vector Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A vector with magnitude 0 is called:',
            options: ['Unit vector', 'Zero vector', 'Normal vector', 'Null vector'],
            correctAnswer: 1
          },
          {
            label: '$-2\\vec{v}$ has:',
            options: ['Same direction, double length', 'Opposite direction, double length', 'Same direction, half length'],
            correctAnswer: 1
          },
          {
            label: 'The direction angle of $\\langle 1, 1 \\rangle$ is:',
            options: ['$30°$', '$45°$', '$60°$', '$90°$'],
            correctAnswer: 1
          },
          {
            label: 'Vectors are equal if they have:',
            options: ['Same starting point', 'Same magnitude and direction', 'Same components', 'Both B and C'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['Zero vector', 'Opposite direction, double length', '$45°$', 'Both B and C'],
        hint1: 'The zero vector $\\langle 0, 0 \\rangle$ has magnitude 0.',
        hint2: 'Negative scalar reverses direction; $|-2| = 2$ scales length.',
        hint3: '$\\tan^{-1}(1/1) = 45°$.',
        explanation: 'Zero vector. $-2\\vec{v}$: opposite, doubled. $\\tan^{-1}(1) = 45°$. Equal vectors: same magnitude + direction = same components.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A vector with magnitude 8 at angle $150°$ has components:',
            options: ['$\\langle 4\\sqrt{3}, 4 \\rangle$', '$\\langle -4\\sqrt{3}, 4 \\rangle$', '$\\langle 4, 4\\sqrt{3} \\rangle$', '$\\langle -4, 4\\sqrt{3} \\rangle$'],
            correctAnswer: 1,
            explanation: '$\\langle 8\\cos 150°, 8\\sin 150° \\rangle = \\langle 8(-\\frac{\\sqrt{3}}{2}), 8(\\frac{1}{2}) \\rangle = \\langle -4\\sqrt{3}, 4 \\rangle$.'
          },
          {
            question: 'If $\\vec{u} + \\vec{v} = \\langle 0, 0 \\rangle$, then $\\vec{v}$ is:',
            options: ['The zero vector', 'The negative of $\\vec{u}$', 'Perpendicular to $\\vec{u}$', 'A unit vector'],
            correctAnswer: 1,
            explanation: '$\\vec{v} = -\\vec{u}$: same magnitude, opposite direction.'
          }
        ]
      }
    }
  ]
};
