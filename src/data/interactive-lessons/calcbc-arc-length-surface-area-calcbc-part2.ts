export const calcbcArcLengthPart2Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al2-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area — Parametric & Polar Arc Length

**Part 2 of 7 — Arc Length in Parametric and Polar Forms**

### Parametric Arc Length

For $x = f(t)$, $y = g(t)$, $a \\le t \\le b$:

$$\\boxed{L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt}$$

### Polar Arc Length

For $r = f(\\theta)$, $\\alpha \\le \\theta \\le \\beta$:

$$\\boxed{L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta}$$

| Form | $ds$ expression |
|------|----------------|
| Cartesian | $\\sqrt{1 + (dy/dx)^2}\\,dx$ |
| Parametric | $\\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$ |
| Polar | $\\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$ |

> **Key Fact:** The polar formula comes from substituting $x = r\\cos\\theta$, $y = r\\sin\\theta$ into the parametric formula.`
    },
    {
      id: 'al2-examples',
      type: 'text' as const,
      content: `### Examples

**Parametric:** $x = \\cos t$, $y = \\sin t$, $0 \\le t \\le 2\\pi$.

$dx/dt = -\\sin t$, $dy/dt = \\cos t$.

$L = \\int_0^{2\\pi}\\sqrt{\\sin^2 t + \\cos^2 t}\\,dt = \\int_0^{2\\pi} 1\\,dt = 2\\pi$ ✓

**Polar:** $r = 1$ (unit circle), $0 \\le \\theta \\le 2\\pi$.

$dr/d\\theta = 0$.

$L = \\int_0^{2\\pi}\\sqrt{1 + 0}\\,d\\theta = 2\\pi$ ✓

**Polar arc length of $r = e^\\theta$** from $\\theta = 0$ to $\\theta = \\ln 2$:

$dr/d\\theta = e^\\theta$. $L = \\int_0^{\\ln 2}\\sqrt{e^{2\\theta} + e^{2\\theta}}\\,d\\theta = \\int_0^{\\ln 2}e^\\theta\\sqrt{2}\\,d\\theta = \\sqrt{2}[e^\\theta]_0^{\\ln 2} = \\sqrt{2}(2-1) = \\sqrt{2}$`
    },
    {
      id: 'al2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The circumference of the circle $r = 2a\\cos\\theta$ ($a > 0$) is:',
            options: ['$2\\pi a$', '$4\\pi a$', '$\\pi a$', '$2\\pi a^2$'],
            correctAnswer: 0,
            explanation: 'This is a circle of diameter $2a$ (radius $a$), so circumference $= 2\\pi a$. The curve traces the full circle for $\\theta \\in [0, \\pi]$.'
          },
          {
            question: 'For the parametric curve $x = t^2$, $y = t^3$ from $t = 0$ to $t = 1$, the arc length integral is:',
            options: ['$\\int_0^1 \\sqrt{4t^2 + 9t^4}\\,dt$', '$\\int_0^1 \\sqrt{t^4 + t^6}\\,dt$', '$\\int_0^1 (2t + 3t^2)\\,dt$', '$\\int_0^1 \\sqrt{4 + 9t^2}\\,dt$'],
            correctAnswer: 0,
            explanation: '$dx/dt = 2t$, $dy/dt = 3t^2$. $L = \\int_0^1\\sqrt{4t^2 + 9t^4}\\,dt = \\int_0^1 t\\sqrt{4 + 9t^2}\\,dt$.'
          }
        ]
      }
    },
    {
      id: 'al2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Form Selection**',
      exercise: {
        dropdowns: [
          {
            label: 'For the spiral $r = \\theta$, $0 \\le \\theta \\le 2\\pi$, the arc length integral has $r^2 + (dr/d\\theta)^2 = $',
            options: ['$\\theta^2 + 1$', '$\\theta^2$', '$2\\theta^2$', '$1$'],
            correctAnswers: ['$\\theta^2 + 1$'],
            hints: ['$r = \\theta$, $dr/d\\theta = 1$.'],
            explanation: '$r^2 + (r\')^2 = \\theta^2 + 1$. So $L = \\int_0^{2\\pi}\\sqrt{\\theta^2 + 1}\\,d\\theta$ (requires trig substitution or calculator).'
          },
          {
            label: 'The polar arc length formula reduces to the Cartesian formula when $r = $ constant because:',
            options: ['$dr/d\\theta = 0$, so $ds = r\\,d\\theta$, giving the circumference formula', 'Polar and Cartesian are identical', 'The substitution fails', 'It does not reduce'],
            correctAnswers: ['$dr/d\\theta = 0$, so $ds = r\\,d\\theta$, giving the circumference formula'],
            hints: ['What happens when the radius is fixed?'],
            explanation: 'With $r$ constant and $dr/d\\theta = 0$: $L = \\int_\\alpha^\\beta r\\,d\\theta = r(\\beta - \\alpha)$. Over $[0, 2\\pi]$: $L = 2\\pi r$.'
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
        explanation: '$L = \\int_0^2 \\sqrt{9+16}\\,dt = \\int_0^2 5\\,dt = 10$. Straight line from origin to $(6,8)$ — distance $= \\sqrt{36+64} = 10$. ✓'
      }
    },
    {
      id: 'al2-summary',
      type: 'text' as const,
      content: `### Summary

- Parametric: $L = \\int_a^b \\sqrt{(x\')^2 + (y\')^2}\\,dt$
- Polar: $L = \\int_\\alpha^\\beta \\sqrt{r^2 + (r\')^2}\\,d\\theta$
- All arc length formulas come from $ds = \\sqrt{dx^2 + dy^2}$

> **Next:** Part 3 — Surface area of revolution.`
    }
  ]
};
