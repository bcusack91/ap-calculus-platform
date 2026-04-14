export const calcbcParametricPart1Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par1-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 1 of 7 \u2014 Parametric Equations & Graphing**

Parametric equations describe a curve using a parameter $t$, giving both $x$ and $y$ as functions of $t$. This is essential for modeling motion and curves that fail the vertical line test.`
    },
    {
      id: 'par1-definition',
      type: 'text' as const,
      content: `### Parametric Equations

$$\\boxed{x = f(t), \\quad y = g(t), \\quad a \\le t \\le b}$$

The parameter $t$ typically represents **time**. As $t$ increases, the point $(x(t), y(t))$ traces a curve with a specific **direction** (orientation).

### Common Parametric Curves

| Curve | $x(t)$ | $y(t)$ | Shape |
|:---:|:---:|:---:|:---:|
| Circle | $a\\cos t$ | $a\\sin t$ | Circle radius $a$, CCW |
| Ellipse | $a\\cos t$ | $b\\sin t$ | Ellipse |
| Line | $x_0 + at$ | $y_0 + bt$ | Line through $(x_0,y_0)$ |
| Parabola | $t$ | $t^2$ | Standard parabola |
| Cycloid | $t - \\sin t$ | $1 - \\cos t$ | Arch shape |

> **Key Fact:** A single Cartesian curve can have many different parametric representations. What differs is the speed and direction of traversal.`
    },
    {
      id: 'par1-eliminate',
      type: 'text' as const,
      content: `### Eliminating the Parameter

To convert from parametric to Cartesian, eliminate $t$:

**Example:** $x = 2\\cos t$, $y = 2\\sin t$
- $\\cos t = x/2$, $\\sin t = y/2$
- $\\cos^2 t + \\sin^2 t = 1 \\implies \\frac{x^2}{4} + \\frac{y^2}{4} = 1 \\implies x^2 + y^2 = 4$

**Example:** $x = t + 1$, $y = t^2 - 3$
- $t = x - 1$, so $y = (x-1)^2 - 3$

**Example:** $x = e^t$, $y = e^{2t} + 1$
- $x = e^t \\implies e^{2t} = x^2$, so $y = x^2 + 1$ (with $x > 0$)

> **AP Tip:** When eliminating the parameter, state any restrictions on $x$ or $y$ from the domain of $t$.`
    },
    {
      id: 'par1-mc1',
      type: 'multiple-choice' as const,
      content: '**Parametric Basics**',
      exercise: {
        questions: [
          {
            question: 'The parametric equations $x = 3\\cos t$, $y = 3\\sin t$ for $0 \\le t \\le \\pi$ trace:',
            options: [
              'The top half of a circle of radius $3$',
              'A full circle of radius $3$',
              'The bottom half of a circle of radius $3$',
              'A line segment'
            ],
            correctAnswer: 0,
            explanation: 'At $t=0$: $(3,0)$. At $t=\\pi$: $(-3,0)$. Since $\\sin t \\ge 0$ on $[0,\\pi]$, this traces the upper semicircle counterclockwise.'
          },
          {
            question: 'For $x = t^2$, $y = t^3$, the Cartesian equation is:',
            options: ['$y^2 = x^3$', '$y = x^{3/2}$', '$x = y^{2/3}$', '$y = x^3$'],
            correctAnswer: 0,
            explanation: '$t = x^{1/2}$ (or $-x^{1/2}$), $y = t^3 = (\\pm x^{1/2})^3 = \\pm x^{3/2}$. Squaring: $y^2 = x^3$. This is a cusp curve.'
          }
        ]
      }
    },
    {
      id: 'par1-direction',
      type: 'text' as const,
      content: `### Direction & Speed

The **direction** (orientation) is determined by increasing $t$.

**Speed** along the curve at time $t$:
$$\\boxed{\\text{speed} = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}}$$

For $x = 3\\cos t$, $y = 3\\sin t$:
$$\\text{speed} = \\sqrt{(-3\\sin t)^2 + (3\\cos t)^2} = \\sqrt{9} = 3$$

The particle moves at constant speed $3$ along the circle. This is **uniform circular motion**.`
    },
    {
      id: 'par1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Curve Identification**',
      exercise: {
        dropdowns: [
          {
            label: '$x = 5\\cos t$, $y = 3\\sin t$ traces:',
            options: ['An ellipse ($x^2/25 + y^2/9 = 1$)', 'A circle of radius $5$', 'A circle of radius $3$', 'A parabola'],
            correctAnswers: ['An ellipse ($x^2/25 + y^2/9 = 1$)'],
            hints: ['$\\cos t = x/5$, $\\sin t = y/3$. Use $\\cos^2 + \\sin^2 = 1$.'],
            explanation: '$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$. An ellipse with semi-axes $a=5$ (horizontal) and $b=3$ (vertical).'
          },
          {
            label: '$x = \\sec t$, $y = \\tan t$ ($-\\pi/2 < t < \\pi/2$):',
            options: ['Right branch of $x^2 - y^2 = 1$', 'Full hyperbola $x^2-y^2=1$', 'Circle', 'Parabola'],
            correctAnswers: ['Right branch of $x^2 - y^2 = 1$'],
            hints: ['$\\sec^2 t - \\tan^2 t = 1$, so $x^2 - y^2 = 1$. Since $\\sec t > 0$ on the given interval, $x > 0$.'],
            explanation: '$x^2 - y^2 = 1$ with $x = \\sec t > 0$: right branch only.'
          }
        ]
      }
    },
    {
      id: 'par1-input',
      type: 'input-box' as const,
      content: '**Speed Calculation**',
      exercise: {
        question: 'A particle moves with $x = 2t$, $y = t^2$. Find the speed at $t = 3$. Speed $= \\sqrt{(dx/dt)^2 + (dy/dt)^2}$. Give the exact value as $\\sqrt{n}$. What is $n$?',
        correctAnswer: '40',
        acceptableAnswers: ['40'],
        hints: ['$dx/dt = 2$, $dy/dt = 2t = 6$ at $t=3$.', 'Speed $= \\sqrt{4 + 36} = \\sqrt{40}$.'],
        explanation: 'Speed $= \\sqrt{2^2 + 6^2} = \\sqrt{4+36} = \\sqrt{40} = 2\\sqrt{10}$.'
      }
    },
    {
      id: 'par1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- Parametric equations: $x = f(t)$, $y = g(t)$
- Eliminate parameter using algebra or trig identities
- Direction determined by increasing $t$
- Speed $= \\sqrt{(x')^2 + (y')^2}$
- Note any domain restrictions when converting to Cartesian

> **Coming Up:** Part 2 covers **derivatives of parametric curves** \u2014 $dy/dx$ and $d^2y/dx^2$.`
    }
  ]
};
