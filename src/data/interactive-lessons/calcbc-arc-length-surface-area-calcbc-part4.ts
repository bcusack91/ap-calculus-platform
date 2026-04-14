export const calcbcArcLengthPart4Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al4-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area — Parametric & Polar Surface Area

**Part 4 of 7 — Surface Area in Parametric and Polar Forms**

### Parametric Surface Area (about the $x$-axis)

$$\\boxed{S = 2\\pi\\int_a^b y(t)\\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt}$$

### Polar Surface Area (about the polar axis / $x$-axis)

Since $y = r\\sin\\theta$ and $ds = \\sqrt{r^2 + (r')^2}\\,d\\theta$:

$$\\boxed{S = 2\\pi\\int_\\alpha^\\beta r\\sin\\theta\\,\\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta}$$

| Form | $S$ (about $x$-axis) |
|------|---------------------|
| Cartesian | $2\\pi\\int y\\sqrt{1+(y')^2}\\,dx$ |
| Parametric | $2\\pi\\int y\\sqrt{(x')^2+(y')^2}\\,dt$ |
| Polar | $2\\pi\\int r\\sin\\theta\\sqrt{r^2+(r')^2}\\,d\\theta$ |`
    },
    {
      id: 'al4-examples',
      type: 'text' as const,
      content: `### Example — Parametric

Rotate $x = \\cos t$, $y = \\sin t$ ($0 \\le t \\le \\pi$) about the $x$-axis.

This is the upper semicircle of radius 1 — should give $4\\pi$ (sphere).

$ds = \\sqrt{\\sin^2 t + \\cos^2 t}\\,dt = dt$

$S = 2\\pi\\int_0^\\pi \\sin t\\,dt = 2\\pi[-\\cos t]_0^\\pi = 2\\pi(1+1) = 4\\pi$ ✓

### Example — Polar

Rotate $r = 2\\cos\\theta$ ($0 \\le \\theta \\le \\pi/2$) about the polar axis.

$r' = -2\\sin\\theta$. $r^2 + (r')^2 = 4\\cos^2\\theta + 4\\sin^2\\theta = 4$.

$y = r\\sin\\theta = 2\\cos\\theta\\sin\\theta = \\sin 2\\theta$.

$S = 2\\pi\\int_0^{\\pi/2}\\sin(2\\theta)\\cdot 2\\,d\\theta = 4\\pi\\int_0^{\\pi/2}\\sin 2\\theta\\,d\\theta = 4\\pi\\left[-\\tfrac{1}{2}\\cos 2\\theta\\right]_0^{\\pi/2} = 4\\pi$`
    },
    {
      id: 'al4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'To find the surface area when rotating a parametric curve about the $y$-axis, replace $y(t)$ with:',
            options: ['$x(t)$ (the distance from the $y$-axis)', '$1$', '$t$', '$\\sqrt{x^2+y^2}$'],
            correctAnswer: 0,
            explanation: 'About the $y$-axis, the radius is $x(t)$: $S = 2\\pi\\int x(t)\\,ds$.'
          },
          {
            question: 'For the cardioid $r = 1 + \\cos\\theta$ rotated about the polar axis, $r^2 + (r\')^2 = $',
            options: ['$2 + 2\\cos\\theta$', '$1 + 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta$', '$2(1+\\cos\\theta)$', 'All are the same expression'],
            correctAnswer: 3,
            explanation: '$r^2 = (1+\\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta$. $(r\')^2 = \\sin^2\\theta$. Sum $= 1 + 2\\cos\\theta + 1 = 2 + 2\\cos\\theta = 2(1+\\cos\\theta)$. All three options simplify to the same thing.'
          }
        ]
      }
    },
    {
      id: 'al4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The surface area of a torus (doughnut) is found by rotating a circle about an external axis. The appropriate form is:',
            options: ['Parametric surface area formula', 'Cartesian formula', 'Polar formula', 'None — no formula exists'],
            correctAnswers: ['Parametric surface area formula'],
            hints: ['A circle is most naturally parametrized with $\\cos$ and $\\sin$.'],
            explanation: 'Use $x = R + r\\cos t$, $y = r\\sin t$ (circle of radius $r$ centered at distance $R$ from axis), then apply $S = 2\\pi\\int y\\,ds$.'
          },
          {
            label: 'When computing polar surface area about the $x$-axis, $y = $',
            options: ['$r\\sin\\theta$', '$r\\cos\\theta$', '$r$', '$\\theta$'],
            correctAnswers: ['$r\\sin\\theta$'],
            hints: ['Convert from polar to Cartesian: $y = ?$'],
            explanation: 'In polar coordinates, $y = r\\sin\\theta$. This is the distance from the curve to the $x$-axis.'
          }
        ]
      }
    },
    {
      id: 'al4-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Rotate $x = t$, $y = 2t$ from $t = 0$ to $t = 1$ about the $x$-axis. This is a cone. $ds = \\sqrt{1+4}\\,dt = \\sqrt{5}\\,dt$. Compute $S = 2\\pi\\int_0^1 2t\\sqrt{5}\\,dt$. Give your answer as a multiple of $\\pi\\sqrt{5}$ (e.g. "2pisqrt5").',
        correctAnswer: '2pisqrt5',
        acceptableAnswers: ['2pisqrt5', '2π√5', '2pi*sqrt(5)', '2pi sqrt5', '2pisqrt(5)'],
        hints: ['$\\int_0^1 2t\\,dt = 1$.'],
        explanation: '$S = 2\\pi\\sqrt{5}\\int_0^1 2t\\,dt = 2\\pi\\sqrt{5}\\cdot[t^2]_0^1 = 2\\pi\\sqrt{5}$.'
      }
    },
    {
      id: 'al4-summary',
      type: 'text' as const,
      content: `### Summary

- Parametric: $S = 2\\pi\\int y(t)\\,ds$ (about $x$-axis) or $2\\pi\\int x(t)\\,ds$ (about $y$-axis)
- Polar: $S = 2\\pi\\int r\\sin\\theta\\,ds$ (about polar axis) or $2\\pi\\int r\\cos\\theta\\,ds$ (about $\\theta = \\pi/2$)
- All formulas follow the pattern: $S = 2\\pi\\int(\\text{radius})\\,ds$

> **Next:** Part 5 — Comparison of arc length methods and exam strategies.`
    }
  ]
};
