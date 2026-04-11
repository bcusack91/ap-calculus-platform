export const precalcParametricPart5Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🔄 Parametric Curves & Eliminating the Parameter

**Part 5 of 7**

### Techniques for Eliminating the Parameter

| Parametric Form | Strategy | Rectangular Result |
|:----------------|:---------|:-------------------|
| $x = at + b, \\; y = ct + d$ | Solve for $t$ from either | Linear: $y = mx + k$ |
| $x = a\\cos t, \\; y = b\\sin t$ | Use $\\cos^2 t + \\sin^2 t = 1$ | $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ |
| $x = a\\sec t, \\; y = b\\tan t$ | Use $\\sec^2 t - \\tan^2 t = 1$ | $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$ |
| $x = t^n, \\; y = f(t)$ | $t = x^{1/n}$, substitute | Depends on $f$ |
| $x = e^t, \\; y = g(t)$ | $t = \\ln x$, substitute | Depends on $g$ |
      `
    },
    {
      id: 'p5-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Trig Elimination
$x = 3 + 2\\cos t, \\; y = -1 + 2\\sin t$

$(x-3) = 2\\cos t, \\; (y+1) = 2\\sin t$

$(x-3)^2 + (y+1)^2 = 4\\cos^2 t + 4\\sin^2 t = 4$

**Circle** centered at $(3, -1)$, radius $2$.

### Example 2: Exponential
$x = e^{2t}, \\; y = e^t + 1$

Since $x = e^{2t} = (e^t)^2$ and $e^t = y - 1$:

$x = (y-1)^2$, i.e., $y = 1 + \\sqrt{x}$ (since $e^t > 0 \\implies y > 1$)

### Example 3: Watch the Domain!
$x = t^2, \\; y = t$ → $x = y^2$ (full sideways parabola)

$x = \\sin^2 t, \\; y = \\sin t$ → also $x = y^2$, but only $-1 \\leq y \\leq 1$ and $0 \\leq x \\leq 1$

> ⚠️ The parametrization restricts which part of the Cartesian curve is actually traced!
      `
    },
    {
      id: 'p5-creating',
      type: 'text' as const,
      content: `
## ✏️ Creating Parametric Equations

Given a Cartesian curve, find parametric equations. Multiple answers exist!

### For $y = x^2 - 4x + 3$:
- Simple: $x = t, \\; y = t^2 - 4t + 3$
- Right to left: $x = -t, \\; y = t^2 + 4t + 3$
- Shifted: $x = t + 2, \\; y = t^2 - 1$ (completing the square)

### For a circle $x^2 + y^2 = 25$:
- Standard: $x = 5\\cos t, \\; y = 5\\sin t$ (CCW from $(5,0)$)
- Clockwise: $x = 5\\cos t, \\; y = -5\\sin t$
- Starting at top: $x = 5\\sin t, \\; y = 5\\cos t$

### For a line through $(2, 3)$ and $(5, 7)$:
Direction: $(3, 4)$. So $x = 2 + 3t, \\; y = 3 + 4t$ with $t \\in [0, 1]$ for the segment.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Elimination Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Eliminating $t$ from $x = 4\\sin t, \\; y = 3\\cos t$ gives:',
            options: ['$\\frac{x^2}{16}+\\frac{y^2}{9}=1$', '$\\frac{x^2}{4}+\\frac{y^2}{3}=1$', '$x^2+y^2=25$', '$\\frac{x^2}{9}+\\frac{y^2}{16}=1$'],
            correctAnswer: 0,
            explanation: '$\\sin t = \\frac{x}{4}, \\cos t = \\frac{y}{3}$. Then $\\frac{x^2}{16}+\\frac{y^2}{9} = \\sin^2 t+\\cos^2 t = 1$.'
          },
          {
            question: '$x = \\ln t, \\; y = t^2$. In terms of $x$:',
            options: ['$y = e^{2x}$', '$y = 2e^x$', '$y = (\\ln x)^2$', '$y = e^{x^2}$'],
            correctAnswer: 0,
            explanation: '$t = e^x$, so $y = t^2 = e^{2x}$.'
          },
          {
            question: '$x = 1 + t^2, \\; y = 2 - t$. The Cartesian equation is:',
            options: ['$x = 1 + (2-y)^2$', '$y = 2 - \\sqrt{x-1}$', '$x = y^2 - 4y + 5$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$t = 2 - y$, so $x = 1 + (2-y)^2 = 1 + y^2 - 4y + 4 = y^2 - 4y + 5$. Both A and C are equivalent.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Eliminate Parameters** 🧮

**1)** $x = 2t - 1, \\; y = 4t + 3$. Express $y$ in terms of $x$: $y = 2x +$ ? (Enter the constant)

**2)** $x = t^3, \\; y = t^2$. Express $x$ in terms of $y$: $x^2 = y^n$. What is $n$? (whole number)

**3)** $x = 2\\cosh t, \\; y = 3\\sinh t$. The curve is $\\frac{x^2}{4} - \\frac{y^2}{n} = 1$. What is $n$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '9'],
        hint1: '$t = \\frac{x+1}{2}$, $y = 4 \\cdot \\frac{x+1}{2} + 3 = 2x + 2 + 3 = 2x + 5$.',
        hint2: '$t = x^{1/3}$, $y = t^2 = x^{2/3}$, so $y^3 = x^2$. $n = 3$.',
        hint3: '$\\cosh^2 t - \\sinh^2 t = 1 \\implies \\frac{x^2}{4} - \\frac{y^2}{9} = 1$. $n = 9$.',
        explanation: '1) $y = 2x + 5$. 2) $x^2 = y^3$. 3) $n = 9$ (hyperbola).'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Matching Curves** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x = 5\\cos t, \\; y = 5\\sin t$ traces a:',
            options: ['Circle', 'Ellipse', 'Parabola'],
            correctAnswer: 0
          },
          {
            label: '$x = t, \\; y = t^2$ for $t \\geq 0$ traces:',
            options: ['Full parabola', 'Right half of parabola', 'Left half of parabola'],
            correctAnswer: 1
          },
          {
            label: 'Which identity eliminates $t$ from $x = \\sec t, \\; y = \\tan t$?',
            options: ['$\\sin^2+\\cos^2=1$', '$\\sec^2-\\tan^2=1$', '$1+\\cot^2=\\csc^2$'],
            correctAnswer: 1
          },
          {
            label: 'Different parametrizations of the same curve always give:',
            options: ['Same direction', 'Same speed', 'Same geometric shape', 'Same starting point'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Circle', 'Right half of parabola', '$\\sec^2-\\tan^2=1$', 'Same geometric shape'],
        hint1: '$x^2 + y^2 = 25$.',
        hint2: '$t \\geq 0$ means $x \\geq 0$: only the right half.',
        hint3: '$\\sec^2 t - \\tan^2 t = 1$ eliminates $t$.',
        explanation: 'Circle. Right half ($x \\geq 0$). $\\sec^2-\\tan^2=1$. Same shape, possibly different direction/speed.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $x = 2+3\\cos t, \\; y = -1+3\\sin t$, the center and radius are:',
            options: ['Center $(2,-1)$, radius $3$', 'Center $(-2,1)$, radius $3$', 'Center $(2,-1)$, radius $9$', 'Center $(3,3)$, radius $2$'],
            correctAnswer: 0,
            explanation: '$(x-2)^2+(y+1)^2 = 9$. Center $(2,-1)$, radius $3$.'
          },
          {
            question: 'Eliminating $t$ from $x = t+1, \\; y = \\sqrt{t}$ gives $y = \\sqrt{x-1}$ with the restriction:',
            options: ['$x \\geq 0$', '$x \\geq 1$', '$x \\leq 1$', 'No restriction'],
            correctAnswer: 1,
            explanation: '$t = x - 1 \\geq 0 \\implies x \\geq 1$. Also $y \\geq 0$ since $y = \\sqrt{t}$.'
          }
        ]
      }
    }
  ]
};
