export const precalcVectors2DPart3Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📐 Vector Projections

**Part 3 of 7**

### Scalar Projection (Component)

The **scalar projection** of $\\vec{u}$ onto $\\vec{v}$:

$$\\text{comp}_{\\vec{v}}\\vec{u} = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|}$$

This tells you "how much of $\\vec{u}$ goes in the direction of $\\vec{v}$."

### Vector Projection

$$\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\,\\vec{v} = \\frac{\\vec{u}\\cdot\\vec{v}}{\\vec{v}\\cdot\\vec{v}}\\,\\vec{v}$$

This is the **vector** component of $\\vec{u}$ in the direction of $\\vec{v}$.

### Decomposition

Any vector $\\vec{u}$ can be split into two parts:
$$\\vec{u} = \\text{proj}_{\\vec{v}}\\vec{u} + \\vec{u}_{\\perp}$$
where $\\vec{u}_{\\perp}$ is perpendicular to $\\vec{v}$.
      `
    },
    {
      id: 'p3-example',
      type: 'text' as const,
      content: `
## 📝 Example: Projection of $\\vec{u} = \\langle 4, 3 \\rangle$ onto $\\vec{v} = \\langle 2, 0 \\rangle$

### Step 1: Dot Product

$\\vec{u}\\cdot\\vec{v} = 4(2)+3(0) = 8$

### Step 2: Scalar Projection

$\\text{comp}_{\\vec{v}}\\vec{u} = \\frac{8}{|\\langle 2,0 \\rangle|} = \\frac{8}{2} = 4$

### Step 3: Vector Projection

$\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{8}{4}\\langle 2,0 \\rangle = 2\\langle 2,0 \\rangle = \\langle 4, 0 \\rangle$

### Step 4: Perpendicular Component

$\\vec{u}_{\\perp} = \\vec{u} - \\text{proj}_{\\vec{v}}\\vec{u} = \\langle 4,3 \\rangle - \\langle 4,0 \\rangle = \\langle 0, 3 \\rangle$ ✓

Check: $\\langle 0, 3 \\rangle \\cdot \\langle 2, 0 \\rangle = 0$ ✓ (perpendicular)
      `
    },
    {
      id: 'p3-work',
      type: 'text' as const,
      content: `
## 💪 Application: Work

**Work** done by a constant force $\\vec{F}$ along displacement $\\vec{d}$:

$$W = \\vec{F} \\cdot \\vec{d} = |\\vec{F}||\\vec{d}|\\cos\\theta$$

Only the component of force **in the direction of motion** does work.

### Example

A force $\\vec{F} = \\langle 6, 2 \\rangle$ (Newtons) moves an object from $A(1,1)$ to $B(4,5)$.

$\\vec{d} = \\langle 3, 4 \\rangle$ (meters)

$W = 6(3) + 2(4) = 18 + 8 = 26$ Joules

> 💡 If the force is perpendicular to the displacement, $W = 0$ (no work done).
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Projection Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The scalar projection of $\\langle 6, 8 \\rangle$ onto $\\langle 1, 0 \\rangle$ is:',
            options: ['$6$', '$8$', '$10$', '$48$'],
            correctAnswer: 0,
            explanation: '$\\frac{6(1)+8(0)}{1} = 6$. This is the $x$-component — projection onto the $x$-axis!'
          },
          {
            question: '$\\text{proj}_{\\vec{v}}\\vec{u}$ is always:',
            options: ['Perpendicular to $\\vec{v}$', 'Parallel to $\\vec{v}$', 'Equal to $\\vec{u}$', 'A unit vector'],
            correctAnswer: 1,
            explanation: 'The projection formula gives $\\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v}$, which is a scalar multiple of $\\vec{v}$ — hence parallel.'
          },
          {
            question: 'Work done by $\\vec{F} = \\langle 0, 10 \\rangle$ on displacement $\\vec{d} = \\langle 5, 0 \\rangle$:',
            options: ['$50$ J', '$0$ J', '$15$ J', '$-50$ J'],
            correctAnswer: 1,
            explanation: '$W = 0(5)+10(0) = 0$. Force is perpendicular to displacement — no work.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Projection Calculations** 🧮

$\\vec{u} = \\langle 3, 4 \\rangle, \\; \\vec{v} = \\langle 1, 2 \\rangle$

**1)** $\\vec{u}\\cdot\\vec{v}$ = ?

**2)** $|\\vec{v}|^2$ = ?

**3)** The $x$-component of $\\text{proj}_{\\vec{v}}\\vec{u}$ is $\\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2} \\cdot v_1$. What is it? (Enter as a fraction like "11/5")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11', '5', '11/5'],
        hint1: '$3(1)+4(2) = 3+8 = 11$.',
        hint2: '$1^2+2^2 = 5$.',
        hint3: '$\\frac{11}{5}(1) = \\frac{11}{5}$.',
        explanation: '1) $11$. 2) $5$. 3) $\\text{proj} = \\frac{11}{5}\\langle 1,2 \\rangle$, $x$-component $= \\frac{11}{5}$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Projection Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If $\\vec{u}$ and $\\vec{v}$ are perpendicular, $\\text{proj}_{\\vec{v}}\\vec{u}$ is:',
            options: ['$\\vec{v}$', '$\\vec{u}$', 'The zero vector', 'A unit vector'],
            correctAnswer: 2
          },
          {
            label: 'If $\\vec{u}$ is parallel to $\\vec{v}$ (same direction), $\\text{proj}_{\\vec{v}}\\vec{u}$ is:',
            options: ['$\\vec{u}$ itself', 'The zero vector', 'A unit vector'],
            correctAnswer: 0
          },
          {
            label: 'Scalar projection can be:',
            options: ['Only positive', 'Only non-negative', 'Positive, negative, or zero'],
            correctAnswer: 2
          },
          {
            label: 'The work formula $W = \\vec{F}\\cdot\\vec{d}$ assumes:',
            options: ['Constant force along a straight path', 'Variable force', 'Circular path'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['The zero vector', '$\\vec{u}$ itself', 'Positive, negative, or zero', 'Constant force along a straight path'],
        hint1: 'Perpendicular: $\\vec{u}\\cdot\\vec{v} = 0$, so proj $= \\frac{0}{|v|^2}\\vec{v} = \\vec{0}$.',
        hint2: 'If parallel, all of $\\vec{u}$ is in the direction of $\\vec{v}$.',
        hint3: 'Scalar projection is negative when the angle exceeds $90°$.',
        explanation: 'Perpendicular: zero projection. Parallel: full projection = $\\vec{u}$. Scalar proj can be negative. Work formula needs constant force, straight path.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A force $\\vec{F} = \\langle 3, 4 \\rangle$ moves an object along $\\vec{d} = \\langle 8, 6 \\rangle$. The work done is:',
            options: ['$50$ J', '$48$ J', '$24$ J', '$100$ J'],
            correctAnswer: 1,
            explanation: '$W = 3(8)+4(6) = 24+24 = 48$ J.'
          },
          {
            question: 'The perpendicular component $\\vec{u}_{\\perp} = \\vec{u} - \\text{proj}_{\\vec{v}}\\vec{u}$ satisfies:',
            options: ['$\\vec{u}_{\\perp} \\cdot \\vec{u} = 0$', '$\\vec{u}_{\\perp} \\cdot \\vec{v} = 0$', '$|\\vec{u}_{\\perp}| = |\\vec{u}|$', '$\\vec{u}_{\\perp} = \\vec{v}$'],
            correctAnswer: 1,
            explanation: 'By construction, the perpendicular component is orthogonal to $\\vec{v}$.'
          }
        ]
      }
    }
  ]
};
