export const calcbcParametricPart7Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par7-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 7 of 7 \u2014 Comprehensive Review**

Master all parametric curve concepts: equations, derivatives, arc length, area, and surface area.

| Concept | Key Formula |
|---------|------------|
| Slope | $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ |
| Second Derivative | $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$ |
| Arc Length | $L = \\int_a^b \\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$ |
| Area | $A = \\int_a^b y(t)\\,x'(t)\\,dt$ (or $-\\int y\\,x'\\,dt$) |
| Speed | $v = \\sqrt{(dx/dt)^2+(dy/dt)^2}$ |`
    },
    {
      id: 'par7-mc1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment**',
      exercise: {
        questions: [
          {
            question: 'For $x = \\ln t$, $y = t^2$, $\\frac{dy}{dx}$ at $t = 1$ is:',
            options: ['$2$', '$1$', '$0$', '$e$'],
            correctAnswer: 0,
            explanation: '$dx/dt = 1/t$, $dy/dt = 2t$. $dy/dx = 2t \\cdot t = 2t^2 = 2$ at $t=1$.'
          },
          {
            question: 'For $x = a\\cos t$, $y = b\\sin t$, horizontal tangents occur when:',
            options: ['$t = \\pi/2$ or $t = 3\\pi/2$', '$t = 0$ or $t = \\pi$', '$t = \\pi/4$', 'Never'],
            correctAnswer: 0,
            explanation: '$dy/dt = b\\cos t = 0$ at $t = \\pi/2, 3\\pi/2$. At those values $dx/dt = -a\\sin t \\ne 0$. So horizontal tangents occur there.'
          },
          {
            question: 'The curve $x = 3\\cos t$, $y = 3\\sin t$ for $0 \\le t \\le \\pi$ has arc length:',
            options: ['$3\\pi$', '$6\\pi$', '$3$', '$9\\pi$'],
            correctAnswer: 0,
            explanation: 'Speed $= 3$ (constant). Arc length $= 3 \\cdot \\pi = 3\\pi$ (semicircle of radius 3).'
          },
          {
            question: 'If $\\frac{d^2y}{dx^2} < 0$ along a parametric curve, the curve is:',
            options: ['Concave down', 'Concave up', 'Decreasing', 'Has vertical tangent'],
            correctAnswer: 0,
            explanation: 'The second derivative test for concavity applies to parametric curves the same way: $d^2y/dx^2 < 0$ means concave down.'
          }
        ]
      }
    },
    {
      id: 'par7-formulas',
      type: 'text' as const,
      content: `### Quick-Reference Decision Guide

**Given a parametric problem, identify what is asked:**

| Asked For | Set Up |
|-----------|--------|
| Tangent line slope | $dy/dx = (dy/dt)/(dx/dt)$ at given $t$ |
| Horizontal tangent | Solve $dy/dt = 0$, verify $dx/dt \\ne 0$ |
| Vertical tangent | Solve $dx/dt = 0$, verify $dy/dt \\ne 0$ |
| Concavity | Compute $d^2y/dx^2$ |
| Distance traveled | $\\int_a^b \\sqrt{(x')^2+(y')^2}\\,dt$ |
| Area enclosed | $-\\oint y\\,dx = -\\int_a^b y(t)\\,x'(t)\\,dt$ |
| Surface area (about $x$-axis) | $2\\pi\\int y\\,\\sqrt{(x')^2+(y')^2}\\,dt$ |

> **AP Key Fact:** On the AP exam, distinguish between *distance traveled* (always positive, involves speed integral) and *displacement* ($\\Delta x, \\Delta y$ separately). They ask both!`
    },
    {
      id: 'par7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Connections**',
      exercise: {
        dropdowns: [
          {
            label: 'For the cycloid $x = t - \\sin t$, $y = 1 - \\cos t$, cusps occur when:',
            options: ['$t = 2n\\pi$ (both derivatives zero)', '$t = n\\pi$', '$dy/dt = 0$ only', 'Never'],
            correctAnswers: ['$t = 2n\\pi$ (both derivatives zero)'],
            hints: ['$dx/dt = 1 - \\cos t = 0$ when $\\cos t = 1$, i.e., $t = 2n\\pi$.'],
            explanation: 'At $t = 2n\\pi$: $dx/dt = 0$ and $dy/dt = \\sin(2n\\pi) = 0$. Both zero, creating a cusp.'
          },
          {
            label: 'To convert parametric arc length to polar arc length, substitute:',
            options: ['$x = r\\cos\\theta$, $y = r\\sin\\theta$ where $r = f(\\theta)$', '$x = r$, $y = \\theta$', '$t = r$', 'Cannot convert'],
            correctAnswers: ['$x = r\\cos\\theta$, $y = r\\sin\\theta$ where $r = f(\\theta)$'],
            hints: ['Polar is a special parametric form with parameter $\\theta$.'],
            explanation: 'Polar curves are parametric with $\\theta$ as parameter. Substituting gives the polar arc length formula $\\int\\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$.'
          },
          {
            label: 'The speed of a particle at time $t$ can be zero only when:',
            options: ['$dx/dt = 0$ AND $dy/dt = 0$ simultaneously', '$dx/dt = 0$ only', '$dy/dt = 0$ only', 'Speed is always positive'],
            correctAnswers: ['$dx/dt = 0$ AND $dy/dt = 0$ simultaneously'],
            hints: ['Speed $= \\sqrt{(dx/dt)^2 + (dy/dt)^2}$. When is this zero?'],
            explanation: 'Speed $= 0$ requires both components to be zero. If only one is zero, the particle still moves in the other direction.'
          }
        ]
      }
    },
    {
      id: 'par7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'For $x = t^2$, $y = t^3$, find the arc length from $t = 0$ to $t = 1$. The integral becomes $\\int_0^1 t\\sqrt{4+9t^2}\\,dt$. Using $u = 4+9t^2$: the result is $\\frac{1}{27}(13\\sqrt{13}-8)$. Compute $13\\sqrt{13}$ rounded to 1 decimal place.',
        correctAnswer: '46.9',
        acceptableAnswers: ['46.9', '46.87'],
        hints: ['$13\\sqrt{13} = 13 \\times 3.6056... \\approx 46.87$', 'Round to 1 decimal: $46.9$.'],
        explanation: '$\\sqrt{13} \\approx 3.6056$. $13 \\times 3.6056 \\approx 46.87$, which rounds to $46.9$. The full arc length is $\\frac{46.87-8}{27} \\approx 1.44$.'
      }
    },
    {
      id: 'par7-summary',
      type: 'text' as const,
      content: `### Parametric Curves Complete!

You have mastered:
- Parametric equations, elimination, and graphing
- First and second derivatives via the chain rule
- Arc length and speed computations
- Area under and enclosed by parametric curves
- Surface area and volume of revolution

> **AP Exam Note:** Parametric/polar/vector questions appear as a dedicated FRQ (usually problem 2 or 3). Practice computing derivatives and integrals quickly since both calculator and non-calculator parts appear.`
    }
  ]
};
