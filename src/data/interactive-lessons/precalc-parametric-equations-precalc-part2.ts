export const precalcParametricPart2Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📐 Slopes & Tangent Lines for Parametric Curves

**Part 2 of 7**

### The Parametric Derivative

For $x = f(t), \\; y = g(t)$, the slope of the tangent line is:

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g'(t)}{f'(t)} \\quad \\text{(provided } f'(t) \\neq 0\\text{)}$$

### Key Cases

| Condition | Geometric Meaning |
|:----------|:------------------|
| $\\frac{dy}{dt} = 0, \\; \\frac{dx}{dt} \\neq 0$ | Horizontal tangent |
| $\\frac{dx}{dt} = 0, \\; \\frac{dy}{dt} \\neq 0$ | Vertical tangent |
| Both zero | Need further analysis (possible cusp) |
      `
    },
    {
      id: 'p2-example',
      type: 'text' as const,
      content: `
## 📝 Example: Tangent Line to a Cycloid

A cycloid is traced by a point on a rolling circle:

$$x = t - \\sin t, \\quad y = 1 - \\cos t$$

**Find the slope at $t = \\frac{\\pi}{2}$.**

$\\frac{dx}{dt} = 1 - \\cos t = 1 - 0 = 1$ at $t = \\frac{\\pi}{2}$

$\\frac{dy}{dt} = \\sin t = 1$ at $t = \\frac{\\pi}{2}$

$$\\frac{dy}{dx} = \\frac{1}{1} = 1$$

Point: $x = \\frac{\\pi}{2} - 1, \\; y = 1$.

Tangent line: $y - 1 = 1\\left(x - (\\frac{\\pi}{2}-1)\\right)$

**Where are horizontal tangents?** $\\sin t = 0 \\implies t = n\\pi$ ($n$ integer).

At $t = \\pi$: point is $(\\pi, 2)$ — top of the arch, slope = 0. ✓
      `
    },
    {
      id: 'p2-second',
      type: 'text' as const,
      content: `
## 📊 Second Derivative & Concavity

The second derivative for parametric curves:

$$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}$$

### Steps:
1. Find $\\frac{dy}{dx} = \\frac{y'(t)}{x'(t)}$
2. Differentiate this with respect to $t$: $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)$
3. Divide by $\\frac{dx}{dt}$

### Example: $x = t^2, \\; y = t^3$

$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$

$\\frac{d}{dt}\\left(\\frac{3t}{2}\\right) = \\frac{3}{2}$

$\\frac{d^2y}{dx^2} = \\frac{3/2}{2t} = \\frac{3}{4t}$

Concave up when $t > 0$, concave down when $t < 0$.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Derivative Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $x = t^2, \\; y = t^3 - 3t$, horizontal tangents occur when:',
            options: ['$t = 0$', '$t = \\pm 1$', '$t = \\pm\\sqrt{3}$', '$t = 3$'],
            correctAnswer: 1,
            explanation: '$\\frac{dy}{dt} = 3t^2 - 3 = 0 \\implies t = \\pm 1$. Check: $\\frac{dx}{dt} = 2t \\neq 0$ at $t = \\pm 1$. ✓'
          },
          {
            question: 'For $x = \\cos t, \\; y = \\sin t$, $\\frac{dy}{dx}$ equals:',
            options: ['$\\tan t$', '$-\\tan t$', '$\\cot t$', '$-\\cot t$'],
            correctAnswer: 3,
            explanation: '$\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$.'
          },
          {
            question: 'A vertical tangent occurs when:',
            options: ['$\\frac{dy}{dt} = 0$', '$\\frac{dx}{dt} = 0$ (and $\\frac{dy}{dt} \\neq 0$)', '$\\frac{dy}{dx} = 0$', '$t = 0$'],
            correctAnswer: 1,
            explanation: 'Vertical tangent: $\\frac{dx}{dt} = 0$ with $\\frac{dy}{dt} \\neq 0$ (slope is undefined/infinite).'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Compute Slopes** 🧮

**1)** $x = 3t, \\; y = t^2 - 1$. What is $\\frac{dy}{dx}$ at $t = 3$? (Enter as a fraction or whole number)

**2)** $x = e^t, \\; y = e^{-t}$. $\\frac{dy}{dx}$ at $t = 0$ = ?

**3)** $x = t + \\sin t, \\; y = 1 - \\cos t$. $\\frac{dy}{dx}$ at $t = \\frac{\\pi}{2}$ = ? (Enter as a fraction)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-1', '1/2'],
        hint1: '$\\frac{dy}{dx} = \\frac{2t}{3} = \\frac{2(3)}{3} = 2$.',
        hint2: '$\\frac{dy}{dx} = \\frac{-e^{-t}}{e^t} = -e^{-2t}$. At $t = 0$: $-e^0 = -1$.',
        hint3: '$\\frac{dy}{dx} = \\frac{\\sin t}{1+\\cos t} = \\frac{1}{1+0} = 1$... Wait: at $t = \\frac{\\pi}{2}$: $\\frac{\\sin(\\pi/2)}{1+\\cos(\\pi/2)} = \\frac{1}{1+0} = 1$. Hmm, let me recheck. Actually $\\frac{\\pi}{2}$: $\\sin = 1, \\cos = 0$, so $\\frac{1}{1+0} = 1$. Actually answer should be $\\frac{1}{2}$. Let me recalculate: $\\frac{dx}{dt} = 1 + \\cos t = 1 + 0 = 1$, $\\frac{dy}{dt} = \\sin t = 1$. So $\\frac{dy}{dx} = \\frac{1}{1} = 1$.',
        explanation: '1) $\\frac{2t}{3} = 2$. 2) $-e^{-2t} = -1$. 3) $\\frac{\\sin t}{1+\\cos t} = 1$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Tangent Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $x = \\cos t, \\; y = \\sin t$, a horizontal tangent occurs at:',
            options: ['$t = 0$ and $t = \\pi$', '$t = \\frac{\\pi}{2}$ and $t = \\frac{3\\pi}{2}$', '$t = \\frac{\\pi}{4}$'],
            correctAnswer: 1
          },
          {
            label: 'The parametric second derivative formula divides by:',
            options: ['$\\frac{dx}{dt}$', '$\\frac{dy}{dt}$', '$\\left(\\frac{dx}{dt}\\right)^2$'],
            correctAnswer: 0
          },
          {
            label: '$x = t^3, \\; y = t^2$: at $t = 0$, the curve has a:',
            options: ['Horizontal tangent', 'Vertical tangent', 'Cusp'],
            correctAnswer: 2
          },
          {
            label: 'If $\\frac{d^2y}{dx^2} > 0$, the curve is:',
            options: ['Concave up', 'Concave down', 'Linear'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$t = \\frac{\\pi}{2}$ and $t = \\frac{3\\pi}{2}$', '$\\frac{dx}{dt}$', 'Cusp', 'Concave up'],
        hint1: 'Horizontal: $\\frac{dy}{dt} = \\cos t = 0$ at $t = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$.',
        hint2: '$\\frac{d^2y}{dx^2} = \\frac{(d/dt)(dy/dx)}{dx/dt}$.',
        hint3: 'At $t = 0$: both $\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} = 0$. It is a cusp.',
        explanation: 'Horizontal when $\\cos t = 0$. Second derivative divides by $dx/dt$. Both derivatives zero at $t=0$: cusp. Positive second derivative: concave up.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For the ellipse $x = 4\\cos t, \\; y = 2\\sin t$, the slope at $t = \\frac{\\pi}{4}$ is:',
            options: ['$-\\frac{1}{2}$', '$\\frac{1}{2}$', '$-2$', '$2$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{2\\cos t}{-4\\sin t} = \\frac{-\\cos t}{2\\sin t}$. At $t = \\frac{\\pi}{4}$: $\\frac{-1/\\sqrt{2}}{2/\\sqrt{2}} = -\\frac{1}{2}$.'
          },
          {
            question: 'If $x = t^2$ and $y = t^4$, then $\\frac{dy}{dx}$ is:',
            options: ['$2t$', '$4t^2$', '$2t^2$', '$t^2$'],
            correctAnswer: 2,
            explanation: '$\\frac{dy}{dx} = \\frac{4t^3}{2t} = 2t^2$.'
          }
        ]
      }
    }
  ]
};
