export const calcbcArcLengthPart2Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al2-intro',
      type: 'text' as const,
      content: `# Arc Length — Parametric Curves

**Part 2 of 7 — Arc Length of Parametric Curves**

### Parametric Arc Length

For $x = f(t)$, $y = g(t)$, $a \\le t \\le b$, with the curve traced once:

$$\\boxed{L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt}$$

It comes from the same idea as Part 1: a tiny piece of the curve has length $ds = \\sqrt{dx^2 + dy^2}$, and dividing inside by $dt^2$ gives $\\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$.

| Curve given as | $ds$ expression | Limits are values of |
|------|----------------|------|
| $y = f(x)$ | $\\sqrt{1 + (dy/dx)^2}\\,dx$ | $x$ |
| $x = f(t)$, $y = g(t)$ | $\\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$ | $t$ |

> **Key Fact:** The limits of a parametric arc length integral are $t$-values, not $x$-values. Converting endpoints given as points into $t$-values is a common first step on the AP exam.`
    },
    {
      id: 'al2-examples',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1 (by hand).** $x = \\cos t$, $y = \\sin t$, $0 \\le t \\le 2\\pi$.

$dx/dt = -\\sin t$, $dy/dt = \\cos t$, so the integrand is $\\sqrt{\\sin^2 t + \\cos^2 t} = 1$.

$L = \\int_0^{2\\pi} 1\\,dt = 2\\pi$, the circumference of the unit circle ✓

**Example 2 (by hand).** $x = t^2$, $y = \\frac{2}{3}t^3$, $0 \\le t \\le \\sqrt{3}$.

$dx/dt = 2t$, $dy/dt = 2t^2$, so $\\sqrt{4t^2 + 4t^4} = 2t\\sqrt{1 + t^2}$ for $t \\ge 0$.

$$L = \\int_0^{\\sqrt{3}} 2t\\sqrt{1+t^2}\\,dt = \\left[\\tfrac{2}{3}(1+t^2)^{3/2}\\right]_0^{\\sqrt{3}} = \\tfrac{2}{3}(8 - 1) = \\tfrac{14}{3}$$

**Example 3 (endpoints given as points).** The curve $x = t^2 + 1$, $y = 3t$ runs from $(1, 0)$ to $(5, 6)$. Since $y = 3t$, the endpoints are $t = 0$ and $t = 2$:

$$L = \\int_0^2 \\sqrt{4t^2 + 9}\\,dt \\approx 7.472 \\text{ (calculator)}$$`
    },
    {
      id: 'al2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For the parametric curve $x = t^2$, $y = t^3$ from $t = 0$ to $t = 1$, the arc length integral is:',
            options: ['$\\int_0^1 \\sqrt{t^4 + t^6}\\,dt$', '$\\int_0^1 \\sqrt{4t^2 + 9t^4}\\,dt$', '$\\int_0^1 (2t + 3t^2)\\,dt$', '$\\int_0^1 \\sqrt{1 + 9t^4}\\,dt$'],
            correctAnswer: 1,
            explanation: '$dx/dt = 2t$ and $dy/dt = 3t^2$, so $L = \\int_0^1\\sqrt{4t^2 + 9t^4}\\,dt$. Squaring the coordinates instead of their derivatives gives $t^4 + t^6$, adding the rates skips the square root of a sum of squares, and $1 + 9t^4$ mixes the Cartesian form into a $dt$ integral.'
          },
          {
            question: 'A curve is given by $x = e^t$, $y = 2t$. Its arc length from the point $(1, 0)$ to the point $(e^2, 4)$ is:',
            options: ['$\\int_1^{e^2} \\sqrt{e^{2t} + 4}\\,dt$', '$\\int_0^4 \\sqrt{e^{2t} + 4}\\,dt$', '$\\int_0^2 \\sqrt{e^{2t} + 4}\\,dt$', '$\\int_0^2 \\sqrt{e^{t} + 2}\\,dt$'],
            correctAnswer: 2,
            explanation: 'The point $(1, 0)$ is $t = 0$ and $(e^2, 4)$ is $t = 2$, so the limits are $0$ and $2$. With $dx/dt = e^t$ and $dy/dt = 2$, the integrand is $\\sqrt{e^{2t} + 4}$. Using the $x$-values or $y$-values as limits mixes up the variable, and leaving the rates unsquared drops the Pythagorean structure.'
          }
        ]
      }
    },
    {
      id: 'al2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = 3\\cos t$, $y = 3\\sin t$ on $0 \\le t \\le \\pi$, the arc length is',
            options: ['$6\\pi$', '$9\\pi$', '$3\\pi$', '$\\pi$'],
            correctAnswers: ['$3\\pi$'],
            hints: ['Compute $(dx/dt)^2 + (dy/dt)^2$ first.'],
            explanation: 'The integrand is $\\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$, so $L = \\int_0^\\pi 3\\,dt = 3\\pi$: half the circumference of a circle of radius $3$. The full circumference is $6\\pi$, $9\\pi$ forgets the square root, and $\\pi$ drops the radius.'
          },
          {
            label: 'A parametric arc length integral must use limits that are values of',
            options: ['the parameter $t$', 'the coordinate $x$', 'the coordinate $y$', 'the speed $ds/dt$'],
            correctAnswers: ['the parameter $t$'],
            hints: ['What variable is the integral written in?'],
            explanation: 'The integrand is a function of $t$ and the differential is $dt$, so the limits must be $t$-values. Endpoints given as points must be converted to $t$-values first; $x$- or $y$-values only work when they happen to equal $t$.'
          }
        ]
      }
    },
    {
      id: 'al2-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Find the arc length of $x = 3t$, $y = 4t$ from $t = 0$ to $t = 2$.',
        correctAnswer: '10',
        acceptableAnswers: ['10', '10.0'],
        hints: ['$dx/dt = 3$, $dy/dt = 4$.', '$\\sqrt{9+16} = 5$.'],
        explanation: '$L = \\int_0^2 \\sqrt{9+16}\\,dt = \\int_0^2 5\\,dt = 10$. Straight line from the origin to $(6,8)$, distance $= \\sqrt{36+64} = 10$. ✓'
      }
    },
    {
      id: 'al2-summary',
      type: 'text' as const,
      content: `### Summary

- Parametric: $L = \\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$ (BC Topic 9.3)
- Limits are $t$-values; convert endpoint coordinates to $t$ first
- Both formulas come from $ds = \\sqrt{dx^2 + dy^2}$

> **Next:** Part 3 — Distance traveled along a parametric path.`
    }
  ]
};
