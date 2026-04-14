export const calcbcParametricPart4Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par4-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 4 of 7 \u2014 Area Under Parametric Curves**

The area formula for parametric curves converts the standard $\\int y\\,dx$ into an integral over the parameter $t$.`
    },
    {
      id: 'par4-formula',
      type: 'text' as const,
      content: `### Area Formula

For a curve traced left to right ($x$ increasing with $t$):

$$\\boxed{A = \\int_a^b y(t) \\cdot x'(t)\\,dt}$$

This comes from substituting $dx = x'(t)\\,dt$ into $A = \\int y\\,dx$.

For a curve traced right to left ($x$ decreasing):
$$A = -\\int_a^b y(t) \\cdot x'(t)\\,dt$$

### Example: Area under one arch of the cycloid $x = t - \\sin t$, $y = 1 - \\cos t$

One arch: $0 \\le t \\le 2\\pi$. Since $x' = 1 - \\cos t \\ge 0$, the curve moves left to right:

$$A = \\int_0^{2\\pi} (1-\\cos t)(1-\\cos t)\\,dt = \\int_0^{2\\pi} (1-\\cos t)^2\\,dt$$

$$= \\int_0^{2\\pi} (1 - 2\\cos t + \\cos^2 t)\\,dt = 2\\pi - 0 + \\pi = 3\\pi$$

$$\\boxed{\\text{Area under one cycloid arch} = 3\\pi}$$`
    },
    {
      id: 'par4-enclosed',
      type: 'text' as const,
      content: `### Area Enclosed by a Closed Curve

For a closed parametric curve traversed counterclockwise:

$$A = -\\oint y(t)\\,x'(t)\\,dt = \\oint x(t)\\,y'(t)\\,dt$$

### Example: Ellipse $x = a\\cos t$, $y = b\\sin t$, $0 \\le t \\le 2\\pi$

$$A = \\int_0^{2\\pi} b\\sin t \\cdot (-a\\sin t)\\,dt = -ab\\int_0^{2\\pi} \\sin^2 t\\,dt = -ab \\cdot \\pi$$

Since the curve goes counterclockwise and we get a negative result from $y \\cdot x'$, take the absolute value:

$$\\boxed{A = \\pi ab}$$

This confirms the well-known ellipse area formula.

> **AP Tip:** Watch the sign! If the formula gives a negative area, the curve is traced in the opposite direction to what you assumed. Take $|A|$.`
    },
    {
      id: 'par4-mc1',
      type: 'multiple-choice' as const,
      content: '**Area Practice**',
      exercise: {
        questions: [
          {
            question: 'Area enclosed by $x = 2\\cos t$, $y = 2\\sin t$, $0 \\le t \\le 2\\pi$:',
            options: ['$4\\pi$', '$2\\pi$', '$8\\pi$', '$\\pi$'],
            correctAnswer: 0,
            explanation: 'This is a circle with $r = 2$. Area $= \\pi r^2 = 4\\pi$. Or by the formula: $\\int_0^{2\\pi} 2\\sin t \\cdot (-2\\sin t)\\,dt = -4\\pi$; $|{-4\\pi}| = 4\\pi$.'
          },
          {
            question: 'For the area integral $\\int_a^b y(t) x\'(t)\\,dt$, the substitution being made is:',
            options: [
              '$dx = x\'(t)\\,dt$ in $\\int y\\,dx$',
              '$dy = y\'(t)\\,dt$ in $\\int x\\,dy$',
              'Integration by parts',
              'Change of variable $u = x(t)$'
            ],
            correctAnswer: 0,
            explanation: 'We start with $A = \\int y\\,dx$ and substitute $dx = x\'(t)\\,dt$, changing the limits to $t$-values.'
          }
        ]
      }
    },
    {
      id: 'par4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setup the Integral**',
      exercise: {
        dropdowns: [
          {
            label: 'Area under $x = t^2$, $y = t$ from $t = 0$ to $t = 2$:',
            options: ['$\\int_0^2 t \\cdot 2t\\,dt = \\int_0^2 2t^2\\,dt$', '$\\int_0^2 t^2 \\cdot 1\\,dt$', '$\\int_0^4 \\sqrt{x}\\,dx$', '$\\int_0^2 t^3\\,dt$'],
            correctAnswers: ['$\\int_0^2 t \\cdot 2t\\,dt = \\int_0^2 2t^2\\,dt$'],
            hints: ['$y(t) = t$, $x\'(t) = 2t$.'],
            explanation: '$A = \\int_0^2 y \\cdot x\'\\,dt = \\int_0^2 t(2t)\\,dt = [\\frac{2t^3}{3}]_0^2 = \\frac{16}{3}$.'
          },
          {
            label: 'Enclosed area of $x = 3\\cos t$, $y = 5\\sin t$ ($0$ to $2\\pi$):',
            options: ['$15\\pi$', '$8\\pi$', '$30\\pi$', '$24\\pi$'],
            correctAnswers: ['$15\\pi$'],
            hints: ['Ellipse with $a=3$, $b=5$. Area $= \\pi ab$.'],
            explanation: '$\\pi \\cdot 3 \\cdot 5 = 15\\pi$.'
          }
        ]
      }
    },
    {
      id: 'par4-input',
      type: 'input-box' as const,
      content: '**Area Computation**',
      exercise: {
        question: 'Find the area under $x = t$, $y = t^2$ from $t = 0$ to $t = 3$ (above the $x$-axis). Compute $\\int_0^3 t^2 \\cdot 1\\,dt$. What is the value?',
        correctAnswer: '9',
        acceptableAnswers: ['9', '9.0'],
        hints: ['$y = t^2$, $x\' = 1$. $A = \\int_0^3 t^2\\,dt = [t^3/3]_0^3$.', '$= 27/3 = 9$.'],
        explanation: '$\\int_0^3 t^2\\,dt = \\frac{t^3}{3}\\bigg|_0^3 = 9$.'
      }
    },
    {
      id: 'par4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Formula | Use |
|---------|-----|
| $A = \\int_a^b y(t)x'(t)\\,dt$ | Area under curve (left to right) |
| $A = \\pi ab$ | Ellipse $x = a\\cos t$, $y = b\\sin t$ |
| Cycloid arch | $3\\pi$ (for unit cycloid) |

> **Coming Up:** Part 5 covers **surface area of revolution** for parametric curves.`
    }
  ]
};
