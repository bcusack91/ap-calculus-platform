export const precalcPolarPart3Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🔄 Complex Numbers in Polar Form

**Part 3 of 7**

Part 1 located points with polar coordinates. A complex number is also a point: $a + bi$ sits at $(a, b)$ in the **complex plane**, with the real axis horizontal and the imaginary axis vertical. So every complex number has polar coordinates too.

### Two Forms of the Same Number

| Form | Written as | Coordinates |
|:-----|:-----------|:------------|
| Rectangular | $a + bi$ | $(a, b)$ |
| Polar | $(r\\cos\\theta) + i(r\\sin\\theta)$ | $(r, \\theta)$ |

### The Conversion Formulas

These are the same formulas used for points:

| Polar → Rectangular | Rectangular → Polar |
|:-------------------|:-------------------|
| $a = r\\cos\\theta$ | $r = \\sqrt{a^2 + b^2}$ |
| $b = r\\sin\\theta$ | $\\theta = \\arctan\\frac{b}{a}$ if $a > 0$ |
| | $\\theta = \\arctan\\frac{b}{a} + \\pi$ if $a < 0$ |

The value $r = \\sqrt{a^2 + b^2}$ is the distance from the number to the origin, also called its **modulus**.
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Polar → Rectangular

Evaluate the cosine and sine, then multiply by $r$.

### Example 1: $r = 4$, $\\theta = \\frac{\\pi}{6}$

$$4\\cos\\frac{\\pi}{6} + i\\cdot 4\\sin\\frac{\\pi}{6} = 4\\cdot\\frac{\\sqrt{3}}{2} + i\\cdot 4\\cdot\\frac{1}{2} = 2\\sqrt{3} + 2i$$

### Example 2: $r = 2$, $\\theta = \\frac{3\\pi}{4}$

$$2\\cos\\frac{3\\pi}{4} + i\\cdot 2\\sin\\frac{3\\pi}{4} = 2\\left(-\\frac{\\sqrt{2}}{2}\\right) + i\\cdot 2\\cdot\\frac{\\sqrt{2}}{2} = -\\sqrt{2} + \\sqrt{2}\\,i$$

The angle $\\frac{3\\pi}{4}$ points into Quadrant II, and the number has a negative real part and a positive imaginary part, as it should.

### Example 3: $r = 5$, $\\theta = \\frac{3\\pi}{2}$

$$5\\cos\\frac{3\\pi}{2} + i\\cdot 5\\sin\\frac{3\\pi}{2} = 5(0) + i\\cdot 5(-1) = -5i$$

A number on an axis has a real part or an imaginary part equal to $0$.
      `
    },
    {
      id: 'p3-rect-to-polar',
      type: 'text' as const,
      content: `
## 📝 Rectangular → Polar

Find $r$ first, then find $\\theta$ with the rule that matches the sign of $a$.

### Example 4: $1 + \\sqrt{3}\\,i$

$r = \\sqrt{1 + 3} = 2$. Since $a = 1 > 0$, $\\theta = \\arctan\\sqrt{3} = \\frac{\\pi}{3}$.

$$1 + \\sqrt{3}\\,i = 2\\cos\\frac{\\pi}{3} + i\\cdot 2\\sin\\frac{\\pi}{3}$$

### Example 5: $-3 + 3i$

$r = \\sqrt{9 + 9} = 3\\sqrt{2}$. Since $a = -3 < 0$, $\\theta = \\arctan(-1) + \\pi = -\\frac{\\pi}{4} + \\pi = \\frac{3\\pi}{4}$.

### Example 6: $-2 - 2\\sqrt{3}\\,i$

$r = \\sqrt{4 + 12} = 4$. Since $a < 0$, $\\theta = \\arctan\\sqrt{3} + \\pi = \\frac{\\pi}{3} + \\pi = \\frac{4\\pi}{3}$.

### Example 7: $6i$

Here $a = 0$, so neither formula applies. The point $(0, 6)$ is on the positive imaginary axis: $r = 6$ and $\\theta = \\frac{\\pi}{2}$.

> ⚠️ **Why add $\\pi$?** Arctangent only returns angles between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$, which point into Quadrants I and IV. A number with $a < 0$ lies in Quadrant II or III, so adding $\\pi$ turns the angle to the correct side. Adding $2\\pi$ to any angle names the same number again.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Polar Form Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $3\\cos\\frac{\\pi}{2} + i\\cdot 3\\sin\\frac{\\pi}{2}$ in the form $a + bi$?',
            options: ['$3$', '$3i$', '$-3i$', '$3 + 3i$'],
            correctAnswer: 1,
            explanation: '$\\cos\\frac{\\pi}{2} = 0$ and $\\sin\\frac{\\pi}{2} = 1$, so the number is $0 + 3i = 3i$, on the positive imaginary axis. The value $3$ would need $\\theta = 0$, and $-3i$ would need $\\theta = \\frac{3\\pi}{2}$.'
          },
          {
            question: 'The number $z = -1 + i$ has $r = \\sqrt{2}$. Which angle $\\theta$ completes its polar form?',
            options: ['$-\\frac{\\pi}{4}$', '$\\frac{\\pi}{4}$', '$\\frac{3\\pi}{4}$', '$\\frac{5\\pi}{4}$'],
            correctAnswer: 2,
            explanation: 'Since $a = -1 < 0$, $\\theta = \\arctan(-1) + \\pi = -\\frac{\\pi}{4} + \\pi = \\frac{3\\pi}{4}$, in Quadrant II. The angle $-\\frac{\\pi}{4}$ is arctangent alone (Quadrant IV), $\\frac{\\pi}{4}$ ignores the signs, and $\\frac{5\\pi}{4}$ points into Quadrant III.'
          },
          {
            question: 'What is the modulus $r$ of the complex number $5 - 12i$?',
            options: ['$7$', '$17$', '$\\sqrt{119}$', '$13$'],
            correctAnswer: 3,
            explanation: '$r = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Adding or subtracting the parts gives $17$ or $7$, and $\\sqrt{119}$ subtracts the squares.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Convert Complex Numbers** 🧮

**1)** Write $2\\cos\\frac{2\\pi}{3} + i\\cdot 2\\sin\\frac{2\\pi}{3}$ as $a + bi$. What is $a$?

**2)** For $z = -4 - 4i$, what is $r$? (Enter an exact value like "3sqrt2")

**3)** For $z = -4 - 4i$, what is $\\theta$ with $0 \\le \\theta < 2\\pi$? (Enter like "pi/3")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '4sqrt2', '5pi/4'],
        hint1: '$\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, so $a = 2\\left(-\\frac{1}{2}\\right)$.',
        hint2: '$r = \\sqrt{(-4)^2 + (-4)^2} = \\sqrt{32}$.',
        hint3: 'Since $a < 0$, $\\theta = \\arctan\\frac{-4}{-4} + \\pi = \\arctan(1) + \\pi$.',
        explanation: '1) $a = 2\\cos\\frac{2\\pi}{3} = -1$ (and $b = \\sqrt{3}$). 2) $r = \\sqrt{32} = 4\\sqrt{2}$. 3) $\\theta = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}$, in Quadrant III where both parts are negative.'
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
            label: 'The number $\\sqrt{3} - i$ lies in Quadrant',
            options: ['I', 'II', 'III', 'IV']
          },
          {
            label: 'For a complex number $a + bi$ with $a < 0$, $\\theta =$',
            options: ['$\\arctan\\frac{b}{a} + \\pi$', '$\\arctan\\frac{b}{a}$', '$\\arctan\\frac{a}{b}$', '$\\pi - \\arctan\\frac{b}{a}$']
          },
          {
            label: 'The polar form of $-7$ uses $\\theta =$',
            options: ['$0$', '$\\frac{\\pi}{2}$', '$\\pi$', '$-\\frac{\\pi}{2}$']
          },
          {
            label: '$r\\cos\\theta + i\\,r\\sin\\theta$ with $r = 2$ and $\\theta = \\pi$ equals',
            options: ['$2$', '$-2$', '$2i$', '$-2i$']
          }
        ],
        correctAnswers: ['IV', '$\\arctan\\frac{b}{a} + \\pi$', '$\\pi$', '$-2$'],
        hint1: 'The real part $\\sqrt{3}$ is positive and the imaginary part $-1$ is negative.',
        hint2: 'Arctangent alone gives Quadrant I or IV angles; a negative real part needs a turn of $\\pi$.',
        hint3: '$-7$ sits on the negative real axis. For the last one, $\\cos\\pi = -1$ and $\\sin\\pi = 0$.',
        explanation: '$\\sqrt{3} - i$: right of the imaginary axis and below the real axis, Quadrant IV. For $a < 0$, add $\\pi$ to the arctangent. $-7$ is on the negative real axis, so $\\theta = \\pi$ (with $r = 7$). $2\\cos\\pi + i\\cdot 2\\sin\\pi = -2$.'
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
            question: 'Which expression writes $-\\sqrt{3} + i$ in the form $r\\cos\\theta + i\\,r\\sin\\theta$?',
            options: [
              '$2\\cos\\frac{5\\pi}{6} + i\\cdot 2\\sin\\frac{5\\pi}{6}$',
              '$2\\cos\\left(-\\frac{\\pi}{6}\\right) + i\\cdot 2\\sin\\left(-\\frac{\\pi}{6}\\right)$',
              '$2\\cos\\frac{\\pi}{6} + i\\cdot 2\\sin\\frac{\\pi}{6}$',
              '$4\\cos\\frac{5\\pi}{6} + i\\cdot 4\\sin\\frac{5\\pi}{6}$'
            ],
            correctAnswer: 0,
            explanation: '$r = \\sqrt{3 + 1} = 2$. Since $a < 0$, $\\theta = \\arctan\\left(-\\frac{1}{\\sqrt{3}}\\right) + \\pi = -\\frac{\\pi}{6} + \\pi = \\frac{5\\pi}{6}$. The angle $-\\frac{\\pi}{6}$ is arctangent alone (Quadrant IV), $\\frac{\\pi}{6}$ is in Quadrant I, and $r = 4$ forgets the square root.'
          },
          {
            question: 'A complex number has $r = 8$ and $\\theta = \\frac{5\\pi}{3}$. Which is the number, and where is it in the complex plane?',
            options: [
              '$4\\sqrt{3} - 4i$, in Quadrant IV',
              '$-4 + 4\\sqrt{3}\\,i$, in Quadrant II',
              '$4 - 4\\sqrt{3}\\,i$, in Quadrant IV',
              '$4 + 4\\sqrt{3}\\,i$, in Quadrant I'
            ],
            correctAnswer: 2,
            explanation: '$a = 8\\cos\\frac{5\\pi}{3} = 8\\cdot\\frac{1}{2} = 4$ and $b = 8\\sin\\frac{5\\pi}{3} = 8\\left(-\\frac{\\sqrt{3}}{2}\\right) = -4\\sqrt{3}$, so the number is $4 - 4\\sqrt{3}\\,i$ in Quadrant IV. Swapping sine and cosine gives $4\\sqrt{3} - 4i$.'
          }
        ]
      }
    }
  ]
};
