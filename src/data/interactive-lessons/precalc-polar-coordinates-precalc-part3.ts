export const precalcPolarPart3Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🔄 Converting Polar ↔ Rectangular Equations

**Part 3 of 7**

Converting equations between polar and rectangular form is essential for graphing and analysis.

### Key Substitution Relationships

| Polar → Rectangular | Rectangular → Polar |
|:-------------------|:-------------------|
| $r\\cos\\theta = x$ | $x = r\\cos\\theta$ |
| $r\\sin\\theta = y$ | $y = r\\sin\\theta$ |
| $r^2 = x^2 + y^2$ | $r = \\sqrt{x^2+y^2}$ |
| $\\tan\\theta = \\frac{y}{x}$ | $\\theta = \\arctan\\frac{y}{x}$ (check quadrant) |

### Strategy: Polar → Rectangular

1. Look for $r\\cos\\theta$ (replace with $x$) or $r\\sin\\theta$ (replace with $y$)
2. Look for $r^2$ (replace with $x^2 + y^2$)
3. Multiply both sides by $r$ if needed to create these forms
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Converting Polar → Rectangular

### Example 1: $r = 3$

$$r^2 = 9 \\implies x^2 + y^2 = 9$$

Circle of radius 3.

### Example 2: $r = 4\\sec\\theta$

$$r = \\frac{4}{\\cos\\theta} \\implies r\\cos\\theta = 4 \\implies x = 4$$

Vertical line!

### Example 3: $r = 2\\sin\\theta + 4\\cos\\theta$

Multiply by $r$: $r^2 = 2r\\sin\\theta + 4r\\cos\\theta$

$$x^2 + y^2 = 2y + 4x$$

$$(x-2)^2 + (y-1)^2 = 5$$

Circle with center $(2, 1)$ and radius $\\sqrt{5}$.

### Example 4: $r = \\frac{6}{2\\cos\\theta + 3\\sin\\theta}$

$$r(2\\cos\\theta + 3\\sin\\theta) = 6 \\implies 2x + 3y = 6$$

A straight line! In standard form: $2x + 3y = 6$.
      `
    },
    {
      id: 'p3-rect-to-polar',
      type: 'text' as const,
      content: `
## 📝 Converting Rectangular → Polar

### Example 5: $x^2 + y^2 = 16$

$$r^2 = 16 \\implies r = 4$$

### Example 6: $y = x$

$$r\\sin\\theta = r\\cos\\theta \\implies \\tan\\theta = 1 \\implies \\theta = \\frac{\\pi}{4}$$

### Example 7: $x^2 + y^2 - 6x = 0$

$$r^2 - 6r\\cos\\theta = 0 \\implies r(r - 6\\cos\\theta) = 0$$

Since $r = 0$ is just the origin (already on the curve): $r = 6\\cos\\theta$

### Example 8: $y = 3$

$$r\\sin\\theta = 3 \\implies r = 3\\csc\\theta$$

### Quick Reference

| Rectangular | Polar |
|:-----------|:------|
| $x^2 + y^2 = a^2$ | $r = a$ |
| $x = a$ | $r = a\\sec\\theta$ |
| $y = a$ | $r = a\\csc\\theta$ |
| $y = mx$ | $\\theta = \\arctan m$ |
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Conversion Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The rectangular form of $r = 5\\csc\\theta$ is:',
            options: ['$x = 5$', '$y = 5$', '$x^2 + y^2 = 25$', '$y = 5x$'],
            correctAnswer: 1,
            explanation: '$r = \\frac{5}{\\sin\\theta} \\implies r\\sin\\theta = 5 \\implies y = 5$.'
          },
          {
            question: 'The polar form of $x^2 + y^2 = 10x$ is:',
            options: ['$r = 10$', '$r = 10\\cos\\theta$', '$r = 10\\sin\\theta$', '$r = 5$'],
            correctAnswer: 1,
            explanation: '$r^2 = 10r\\cos\\theta \\implies r = 10\\cos\\theta$.'
          },
          {
            question: 'The polar form of the line $y = -x$ is:',
            options: ['$\\theta = \\frac{\\pi}{4}$', '$\\theta = \\frac{3\\pi}{4}$', '$r = -1$', '$\\theta = -\\frac{\\pi}{4}$'],
            correctAnswer: 1,
            explanation: '$\\tan\\theta = -1$, and $y = -x$ passes through QII and QIV. $\\theta = \\frac{3\\pi}{4}$ (or equivalently $-\\frac{\\pi}{4}$).'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Convert Equations** 🧮

**1)** Convert $r = 8\\cos\\theta$ to rectangular. What is the radius of the resulting circle? (e.g., $r = 6\\cos\\theta \\to (x-3)^2 + y^2 = 9$, radius = 3)

**2)** Convert $x^2 + y^2 = 49$ to polar. What is $r$? (e.g., $x^2 + y^2 = 16$ becomes $r = 4$)

**3)** Convert $r = 3\\sec\\theta$ to rectangular. What is the constant $x$ value? (e.g., $r = 5\\sec\\theta \\to x = 5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '7', '3'],
        hint1: '$r = 8\\cos\\theta \\to (x-4)^2 + y^2 = 16$. Radius = 4.',
        hint2: '$r^2 = 49 \\implies r = 7$.',
        hint3: '$r\\cos\\theta = 3 \\implies x = 3$.',
        explanation: '1) Radius = 4. 2) $r = 7$. 3) $x = 3$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Forms** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rectangular: $y = 2$ → Polar:',
            options: ['$r = 2$', '$r = 2\\csc\\theta$', '$r = 2\\sec\\theta$', '$\\theta = 2$']
          },
          {
            label: 'Polar: $\\theta = \\frac{\\pi}{6}$ → Rectangular:',
            options: ['$y = \\frac{x}{\\sqrt{3}}$', '$y = x\\sqrt{3}$', '$x = \\frac{\\pi}{6}$', '$y = \\frac{\\pi}{6}$']
          },
          {
            label: 'To convert polar to rectangular, multiply by $r$ when you see',
            options: ['$r\\cos\\theta$', '$r^2$', 'Bare $\\sin\\theta$ or $\\cos\\theta$', '$\\sec\\theta$']
          },
          {
            label: 'Polar: $r^2 = 4r\\sin\\theta$ → Rectangular center:',
            options: ['$(0, 2)$', '$(2, 0)$', '$(0, 4)$', '$(4, 0)$']
          }
        ],
        correctAnswers: ['$r = 2\\csc\\theta$', '$y = \\frac{x}{\\sqrt{3}}$', 'Bare $\\sin\\theta$ or $\\cos\\theta$', '$(0, 2)$'],
        hint1: '$y = r\\sin\\theta$, so $r\\sin\\theta = 2$, $r = \\frac{2}{\\sin\\theta} = 2\\csc\\theta$.',
        hint2: '$\\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}}$, so $y = \\frac{x}{\\sqrt{3}}$.',
        hint3: 'Multiplying by $r$ creates $r\\sin\\theta = y$ or $r\\cos\\theta = x$.',
        explanation: '$y = 2 \\to r = 2\\csc\\theta$. $\\theta = \\frac{\\pi}{6} \\to y = \\frac{x}{\\sqrt{3}}$. Multiply by $r$ to create $x$ or $y$. $r = 4\\sin\\theta \\to$ center $(0, 2)$.'
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
            question: 'Convert $r = \\frac{4}{\\cos\\theta - \\sin\\theta}$ to rectangular:',
            options: ['$x - y = 4$', '$x + y = 4$', '$xy = 4$', '$x^2 - y^2 = 4$'],
            correctAnswer: 0,
            explanation: '$r(\\cos\\theta - \\sin\\theta) = 4 \\implies r\\cos\\theta - r\\sin\\theta = 4 \\implies x - y = 4$.'
          },
          {
            question: 'The equation $x^2 + y^2 + 8y = 0$ in polar form is:',
            options: ['$r = -8\\sin\\theta$', '$r = 8\\cos\\theta$', '$r = -8\\cos\\theta$', '$r = 8$'],
            correctAnswer: 0,
            explanation: '$r^2 + 8r\\sin\\theta = 0 \\implies r + 8\\sin\\theta = 0 \\implies r = -8\\sin\\theta$.'
          }
        ]
      }
    }
  ]
};
