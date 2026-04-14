export const calcbcParametricPart6Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par6-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 6 of 7 \u2014 Problem-Solving Workshop**

Mixed practice covering all parametric curve concepts: graphing, derivatives, arc length, area, and applications.`
    },
    {
      id: 'par6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x = \\sin t$, $y = \\cos 2t$. The Cartesian equation is:',
            options: [
              '$y = 1 - 2x^2$',
              '$y = \\cos(2\\arcsin x)$',
              '$x^2 + y^2 = 1$',
              '$y = 2x^2 - 1$'
            ],
            correctAnswer: 0,
            explanation: '$y = \\cos 2t = 1 - 2\\sin^2 t = 1 - 2x^2$. This is a parabola opening downward.'
          },
          {
            question: 'For $x = e^t$, $y = e^{-t}$, $\\frac{d^2y}{dx^2}$ is always:',
            options: ['Positive (concave up)', 'Negative (concave down)', 'Zero', 'Changes sign'],
            correctAnswer: 0,
            explanation: '$dy/dx = -e^{-2t}$. $\\frac{d}{dt}(-e^{-2t}) = 2e^{-2t}$. $d^2y/dx^2 = \\frac{2e^{-2t}}{e^t} = 2e^{-3t} > 0$ always. The curve $xy = 1$ is concave up for $x > 0$.'
          },
          {
            question: 'The total distance traveled by $(x,y) = (2\\cos t, 2\\sin t)$ from $t=0$ to $t=4\\pi$ is:',
            options: ['$8\\pi$', '$4\\pi$', '$2\\pi$', '$16\\pi$'],
            correctAnswer: 0,
            explanation: 'Speed $= 2$ (constant). Distance $= 2 \\cdot 4\\pi = 8\\pi$. The particle goes around the circle twice.'
          }
        ]
      }
    },
    {
      id: 'par6-frq',
      type: 'text' as const,
      content: `### AP FRQ-Style Problem

A particle moves with $x(t) = t^3 - 3t$, $y(t) = 3t^2 - 9$ for $-2 \\le t \\le 2$.

**(a)** Find all times when the particle has a horizontal tangent.

$dy/dt = 6t = 0 \\implies t = 0$. Check: $dx/dt = 3(0)^2 - 3 = -3 \\ne 0$. \\checkmark

Horizontal tangent at $t = 0$: point $(0, -9)$.

**(b)** Find all times when the particle has a vertical tangent.

$dx/dt = 3t^2 - 3 = 3(t-1)(t+1) = 0 \\implies t = \\pm 1$

At $t = 1$: $dy/dt = 6 \\ne 0$. Point: $(-2, -6)$. \\checkmark
At $t = -1$: $dy/dt = -6 \\ne 0$. Point: $(2, -6)$. \\checkmark

**(c)** Find $dy/dx$ at $t = 2$.

$$\\frac{dy}{dx} = \\frac{6(2)}{3(4)-3} = \\frac{12}{9} = \\frac{4}{3}$$`
    },
    {
      id: 'par6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mixed Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'Displacement of $x = 3t$, $y = 4t$ from $t=0$ to $t=5$ vs. arc length:',
            options: ['Both equal $25$ (straight line)', 'Arc length $> 25$', 'Displacement $>$ arc length', 'Cannot compare'],
            correctAnswers: ['Both equal $25$ (straight line)'],
            hints: ['The path is a straight line from $(0,0)$ to $(15,20)$.'],
            explanation: 'Displacement $= \\sqrt{15^2 + 20^2} = 25$. Arc length $= \\int_0^5 5\\,dt = 25$. Equal because the path is a straight line.'
          },
          {
            label: 'For $x = t\\cos t$, $y = t\\sin t$ (spiral), as $t$ increases the speed:',
            options: ['Increases (farther from origin = faster)', 'Stays constant', 'Decreases', 'Oscillates'],
            correctAnswers: ['Increases (farther from origin = faster)'],
            hints: ['$x\' = \\cos t - t\\sin t$, $y\' = \\sin t + t\\cos t$. Speed$^2 = 1 + t^2$.'],
            explanation: 'Speed $= \\sqrt{1+t^2}$, which increases with $t$. The spiral covers more distance per unit time as it moves outward.'
          }
        ]
      }
    },
    {
      id: 'par6-input',
      type: 'input-box' as const,
      content: '**FRQ Computation**',
      exercise: {
        question: 'A particle moves with $x = 2\\cos t$, $y = 3\\sin t$. Find $dy/dx$ at $t = \\pi/6$. Compute $\\frac{3\\cos(\\pi/6)}{-2\\sin(\\pi/6)}$. Simplify to $-\\frac{a\\sqrt{3}}{b}$. What is $a + b$?',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: ['$\\cos(\\pi/6) = \\sqrt{3}/2$, $\\sin(\\pi/6) = 1/2$.', '$\\frac{3 \\cdot \\sqrt{3}/2}{-2 \\cdot 1/2} = \\frac{3\\sqrt{3}/2}{-1} = -\\frac{3\\sqrt{3}}{2}$.'],
        explanation: '$dy/dx = \\frac{3\\cos(\\pi/6)}{-2\\sin(\\pi/6)} = \\frac{3\\sqrt{3}/2}{-1} = -\\frac{3\\sqrt{3}}{2}$. So $a = 3$, $b = 2$, $a+b = 5$.'
      }
    },
    {
      id: 'par6-summary',
      type: 'text' as const,
      content: `### Workshop Recap

**FRQ Strategy for Parametric Problems:**
1. Find derivatives: $dx/dt$, $dy/dt$, $dy/dx$
2. Identify special points: horizontal/vertical tangents
3. Set up and evaluate integrals: arc length, area
4. Interpret results in context of motion

> **Coming Up:** Part 7 is the **Comprehensive Review** of parametric curves.`
    }
  ]
};
