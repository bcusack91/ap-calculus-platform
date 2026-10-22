export const calcbcParametricPart7Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par7-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 7 of 7 \u2014 Comprehensive Review**

Master all parametric curve concepts: equations, derivatives, concavity, arc length, and planar motion.

| Concept | Key Formula |
|---------|------------|
| Slope | $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ |
| Second Derivative | $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$ |
| Arc Length | $L = \\int_a^b \\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$ |
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
            options: ['$t = \\pi/2$ or $t = 3\\pi/2$', '$t = 0$ or $t = \\pi$', '$t = \\pi/2$ only', '$t = 3\\pi/2$ only'],
            correctAnswer: 0,
            explanation: '$dy/dt = b\\cos t = 0$ at $t = \\pi/2$ and $t = 3\\pi/2$ (top and bottom of the ellipse). At those values $dx/dt = -a\\sin t \\ne 0$, so both are horizontal tangents. $t = 0$ and $t = \\pi$ make $dx/dt = 0$, which gives vertical tangents.'
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
| Position at $t = b$ | $x(a) + \\int_a^b x'(t)\\,dt$ and $y(a) + \\int_a^b y'(t)\\,dt$ |

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
            options: ['$t = 2n\\pi$', '$t = n\\pi$', '$t = (2n+1)\\pi$', '$t = \\frac{\\pi}{2} + n\\pi$'],
            correctAnswers: ['$t = 2n\\pi$'],
            hints: ['$dx/dt = 1 - \\cos t = 0$ when $\\cos t = 1$, i.e., $t = 2n\\pi$.'],
            explanation: 'At $t = 2n\\pi$: $dx/dt = 1 - \\cos(2n\\pi) = 0$ and $dy/dt = \\sin(2n\\pi) = 0$. Both zero, creating a cusp. At odd multiples of $\\pi$ only $dy/dt$ is $0$ (the top of an arch), so $t = n\\pi$ is too broad.'
          },
          {
            label: 'At $t = 0$ a particle is at $(1, 4)$, with $x\'(t) = 2t$ and $y\'(t) = -3$. At $t = 2$ it is at',
            options: ['$(4, -6)$', '$(5, -2)$', '$(5, 1)$', '$(4, -3)$'],
            correctAnswers: ['$(5, -2)$'],
            hints: ['Add each starting coordinate to the integral of its velocity component from $0$ to $2$.'],
            explanation: '$x(2) = 1 + \\int_0^2 2t\\,dt = 1 + 4 = 5$ and $y(2) = 4 + \\int_0^2 (-3)\\,dt = 4 - 6 = -2$. Leaving out the starting point gives $(4, -6)$, using only one second of vertical motion gives $(5, 1)$, and $(4, -3)$ is the velocity at $t = 2$, not a position.'
          },
          {
            label: 'The speed of a particle at time $t$ can be zero only when:',
            options: ['Both $dx/dt$ and $dy/dt$ are $0$', '$dx/dt$ or $dy/dt$ is $0$', 'The acceleration is $\\vec{0}$', 'Never: speed is always positive'],
            correctAnswers: ['Both $dx/dt$ and $dy/dt$ are $0$'],
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
        question: 'For $x = t^2$, $y = t^3$, find the arc length from $t = 0$ to $t = 1$. Give the value to three decimal places.',
        correctAnswer: '1.440',
        acceptableAnswers: ['1.440', '1.44', '(13sqrt(13)-8)/27'],
        hints: ['$L = \\int_0^1 \\sqrt{(2t)^2 + (3t^2)^2}\\,dt = \\int_0^1 t\\sqrt{4 + 9t^2}\\,dt$ for $t \\ge 0$.', 'With $u = 4 + 9t^2$, $du = 18t\\,dt$: $L = \\frac{1}{27}\\left[u^{3/2}\\right]_4^{13}$.'],
        explanation: '$L = \\frac{1}{18}\\int_4^{13}\\sqrt{u}\\,du = \\frac{1}{27}(13\\sqrt{13} - 8) \\approx \\frac{46.872 - 8}{27} \\approx 1.440$.'
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
- Concavity from $\\frac{d^2y}{dx^2}$, including the sign flip when $dx/dt < 0$
- Planar motion: tangents, velocity, speed, and position

> **AP Exam Note:** Parametric and vector motion is a regular BC free-response context, on both calculator-active and no-calculator questions. Practice computing derivatives and integrals quickly in both settings.`
    }
  ]
};
