export const precalcVectors2DPart6Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🔄 Vectors & Complex Numbers

**Part 6 of 7**

### Vectors as Complex Numbers

There is a natural correspondence:

$$\\vec{v} = \\langle a, b \\rangle \\quad \\longleftrightarrow \\quad z = a + bi$$

| Vector Operation | Complex Number |
|:----------------|:---------------|
| Addition | Addition |
| Scalar multiplication | Real scalar mult |
| Magnitude | Modulus $|z|$ |
| Direction angle | Argument $\\arg(z)$ |
| Rotation by $\\theta$ | Multiply by $e^{i\\theta}$ |

### Polar Form of Complex Numbers

$$z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$$

where $r = |z|$ and $\\theta = \\arg(z)$.
      `
    },
    {
      id: 'p6-rotation',
      type: 'text' as const,
      content: `
## 🔁 Rotation Using Vectors

To rotate a vector $\\vec{v} = \\langle a, b \\rangle$ by angle $\\alpha$ counterclockwise:

$$\\vec{v}' = \\langle a\\cos\\alpha - b\\sin\\alpha, \\; a\\sin\\alpha + b\\cos\\alpha \\rangle$$

This comes from the **rotation matrix**:

$$\\begin{pmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix}$$

### Example: Rotate $\\langle 1, 0 \\rangle$ by $90°$

$\\vec{v}' = \\langle 1\\cdot 0 - 0\\cdot 1, \\; 1\\cdot 1 + 0\\cdot 0 \\rangle = \\langle 0, 1 \\rangle$ ✓

### Example: Rotate $\\langle 3, 4 \\rangle$ by $180°$

$\\vec{v}' = \\langle 3(-1)-4(0), \\; 3(0)+4(-1) \\rangle = \\langle -3, -4 \\rangle$ ✓

(Rotation by $180°$ just negates the vector.)
      `
    },
    {
      id: 'p6-demovire',
      type: 'text' as const,
      content: `
## 📐 De Moivre's Theorem

For complex numbers in polar form:

$$[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)$$

### Application: Finding $n$th Roots

The $n$th roots of $z = r(\\cos\\theta + i\\sin\\theta)$:

$$z_k = r^{1/n}\\left(\\cos\\frac{\\theta+2k\\pi}{n} + i\\sin\\frac{\\theta+2k\\pi}{n}\\right)$$

for $k = 0, 1, \\ldots, n-1$.

### Example: Cube Roots of $8$

$8 = 8(\\cos 0 + i\\sin 0)$. The three cube roots:

- $k=0$: $2(\\cos 0 + i\\sin 0) = 2$
- $k=1$: $2(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}) = -1 + i\\sqrt{3}$
- $k=2$: $2(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}) = -1 - i\\sqrt{3}$

They form an equilateral triangle on the circle of radius 2!
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Rotation & Complex Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Rotating $\\langle 0, 1 \\rangle$ by $90°$ CCW gives:',
            options: ['$\\langle 1, 0 \\rangle$', '$\\langle 0, -1 \\rangle$', '$\\langle -1, 0 \\rangle$', '$\\langle 0, 1 \\rangle$'],
            correctAnswer: 2,
            explanation: '$\\langle 0\\cdot 0 - 1\\cdot 1, 0\\cdot 1 + 1\\cdot 0 \\rangle = \\langle -1, 0 \\rangle$.'
          },
          {
            question: 'The modulus of $z = 3 + 4i$ is:',
            options: ['$7$', '$5$', '$25$', '$1$'],
            correctAnswer: 1,
            explanation: '$|z| = \\sqrt{9+16} = 5$.'
          },
          {
            question: 'By De Moivre\'s theorem, $(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6})^6 =$',
            options: ['$1$', '$-1$', '$i$', '$-i$'],
            correctAnswer: 1,
            explanation: '$(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6})^6 = \\cos\\pi + i\\sin\\pi = -1$.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Complex & Rotation** 🧮

**1)** $z = 1 + i$: $|z|$ = ? (Enter like "sqrt2")

**2)** The argument of $z = 1 + i$ in degrees = ?

**3)** How many 4th roots does any nonzero complex number have?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sqrt2', '45', '4'],
        hint1: '$|1+i| = \\sqrt{1+1} = \\sqrt{2}$.',
        hint2: '$\\arg(1+i) = \\tan^{-1}(1/1) = 45°$.',
        hint3: 'The fundamental theorem of algebra: an $n$th degree equation has $n$ roots.',
        explanation: '1) $\\sqrt{2}$. 2) $45°$. 3) $4$ roots (evenly spaced on a circle).'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Complex Connections** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiplying by $i$ corresponds to rotation by:',
            options: ['$0°$', '$90°$', '$180°$', '$270°$'],
            correctAnswer: 1
          },
          {
            label: 'The $n$th roots of unity lie on:',
            options: ['A line', 'A circle of radius 1', 'A circle of radius $n$', 'A parabola'],
            correctAnswer: 1
          },
          {
            label: 'Euler\'s formula states $e^{i\\pi} =$',
            options: ['$1$', '$-1$', '$i$', '$0$'],
            correctAnswer: 1
          },
          {
            label: 'The complex conjugate of $a+bi$ is:',
            options: ['$-a-bi$', '$a-bi$', '$b+ai$', '$-a+bi$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$90°$', 'A circle of radius 1', '$-1$', '$a-bi$'],
        hint1: '$i = e^{i\\pi/2}$: rotation by $\\frac{\\pi}{2} = 90°$.',
        hint2: 'Roots of $z^n = 1$ have $|z| = 1$.',
        hint3: '$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1$.',
        explanation: '$i$ = 90° rotation. $n$th roots of unity on unit circle. $e^{i\\pi} = -1$ (Euler). Conjugate: negate the imaginary part.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The square roots of $i$ are:',
            options: ['$\\pm 1$', '$\\pm i$', '$\\pm\\frac{\\sqrt{2}}{2}(1+i)$', '$\\pm\\frac{1}{2}(1+i)$'],
            correctAnswer: 2,
            explanation: '$i = \\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}$. Square roots: $\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}(1+i)$ and the negative.'
          },
          {
            question: 'Rotating $\\langle 2, 0 \\rangle$ by $60°$ gives:',
            options: ['$\\langle 1, \\sqrt{3} \\rangle$', '$\\langle \\sqrt{3}, 1 \\rangle$', '$\\langle 0, 2 \\rangle$', '$\\langle 1, 1 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\langle 2\\cos 60°, 2\\sin 60° \\rangle = \\langle 1, \\sqrt{3} \\rangle$.'
          }
        ]
      }
    }
  ]
};
