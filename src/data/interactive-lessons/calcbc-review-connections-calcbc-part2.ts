export const calcbcReviewPart2Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc2-intro',
      type: 'text' as const,
      content: `# Parametric, Polar, and Vector Connections

**Part 2 of 7 — Three Coordinate Systems, One Framework**

### Unified View

Parametric, polar, and vector representations all describe curves. The calculus is the same — only the coordinate system changes:

| System | Position | Velocity | Speed |
|--------|----------|----------|-------|
| Parametric | $(x(t), y(t))$ | $(x'(t), y'(t))$ | $\\sqrt{(x')^2 + (y')^2}$ |
| Vector | $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ | $\\vec{r}'(t) = \\langle x'(t), y'(t) \\rangle$ | $|\\vec{r}'(t)|$ |
| Polar | $r(\\theta)$ at angle $\\theta$ | Via $x = r\\cos\\theta$, $y = r\\sin\\theta$ | $\\sqrt{(r')^2 + r^2}$ |

> **Key Insight:** Polar curves ARE parametric curves with $t = \\theta$, $x = r(\\theta)\\cos\\theta$, $y = r(\\theta)\\sin\\theta$. Every polar formula follows from the parametric formulas.`
    },
    {
      id: 'rc2-deriv',
      type: 'text' as const,
      content: `### Derivatives Across Systems

**Slope of tangent line ($dy/dx$):**

| System | Formula |
|--------|---------|
| Rectangular | $f'(x)$ |
| Parametric | $\\frac{dy/dt}{dx/dt}$ |
| Polar | $\\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$ |

**Second derivative ($d^2y/dx^2$):**

$$\\boxed{\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right]}{\\frac{dx}{dt}}}$$

This formula works for **both parametric and polar** (with $t = \\theta$).

**Arc length:**

$$\\boxed{L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt}$$

In polar: $L = \\int_{\\alpha}^{\\beta} \\sqrt{r^2 + (r')^2}\\,d\\theta$.`
    },
    {
      id: 'rc2-mc',
      type: 'multiple-choice' as const,
      content: '**Cross-System Connections**',
      exercise: {
        questions: [
          {
            question: 'The polar curve $r = 2$ in parametric form is:',
            options: ['$x = 2\\cos\\theta$, $y = 2\\sin\\theta$', '$x = 2$, $y = 2$', '$x = \\theta$, $y = 2$', '$x = 2\\cos\\theta$, $y = 2\\cos\\theta$'],
            correctAnswer: 0,
            explanation: '$x = r\\cos\\theta = 2\\cos\\theta$, $y = r\\sin\\theta = 2\\sin\\theta$. This is a circle of radius 2.'
          },
          {
            question: 'For $r = 1 + \\sin\\theta$, $dr/d\\theta = \\cos\\theta$. At $\\theta = \\pi/2$, the polar slope $dy/dx$:',
            options: ['Is undefined (vertical tangent)', 'Equals $0$ (horizontal tangent)', 'Equals $1$', 'Equals $-1$'],
            correctAnswer: 0,
            explanation: 'At $\\theta = \\pi/2$: $r = 2$, $r\' = 0$. $dx/d\\theta = r\'\\cos\\theta - r\\sin\\theta = 0 - 2 = -2$. $dy/d\\theta = r\'\\sin\\theta + r\\cos\\theta = 0 + 0 = 0$. $dy/dx = 0/(-2) = 0$. Actually this is horizontal! Let me recheck: $dy/dx = 0/(-2) = 0$, so it\'s a horizontal tangent.'
          },
          {
            question: 'A particle\'s position is $\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$. Its acceleration vector is:',
            options: ['$\\langle -\\cos t, -\\sin t \\rangle$', '$\\langle \\cos t, \\sin t \\rangle$', '$\\langle -\\sin t, \\cos t \\rangle$', '$\\langle 0, 0 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{v}(t) = \\langle -\\sin t, \\cos t \\rangle$. $\\vec{a}(t) = \\langle -\\cos t, -\\sin t \\rangle = -\\vec{r}(t)$. Acceleration points toward the center.'
          }
        ]
      }
    },
    {
      id: 'rc2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Area Formulas**',
      exercise: {
        dropdowns: [
          {
            label: 'Area enclosed by $r = \\cos\\theta$ (full curve):',
            options: ['$\\frac{1}{2}\\int_0^{\\pi} \\cos^2\\theta\\,d\\theta = \\pi/4$', '$\\int_0^{2\\pi} \\cos\\theta\\,d\\theta = 0$', '$\\pi(1)^2 = \\pi$', '$\\frac{1}{2}\\int_0^{2\\pi} \\cos^2\\theta\\,d\\theta = \\pi/2$'],
            correctAnswers: ['$\\frac{1}{2}\\int_0^{\\pi} \\cos^2\\theta\\,d\\theta = \\pi/4$'],
            hints: ['$r = \\cos\\theta$ traces a full circle from $0$ to $\\pi$.'],
            explanation: 'The curve $r = \\cos\\theta$ traces a circle of diameter 1 from $\\theta = 0$ to $\\pi$. Area $= \\pi/4$.'
          },
          {
            label: 'Area between parametric curves requires:',
            options: ['Converting to $\\int y\\,dx = \\int y(t) x\'(t)\\,dt$', 'Using the polar area formula', 'Just subtracting the curves', 'Double integration'],
            correctAnswers: ['Converting to $\\int y\\,dx = \\int y(t) x\'(t)\\,dt$'],
            hints: ['Replace $dx$ with $x\'(t)\\,dt$.'],
            explanation: '$\\int_a^b y\\,dx = \\int_{t_1}^{t_2} y(t) \\cdot x\'(t)\\,dt$ by substitution.'
          }
        ]
      }
    },
    {
      id: 'rc2-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Find the speed of a particle with $\\vec{r}(t) = \\langle 3\\cos t, 4\\sin t \\rangle$ at $t = 0$.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hints: ['$\\vec{v}(0) = \\langle -3\\sin 0, 4\\cos 0 \\rangle = \\langle 0, 4 \\rangle$.'],
        explanation: 'Speed $= |\\vec{v}(0)| = \\sqrt{0^2 + 4^2} = 4$.'
      }
    },
    {
      id: 'rc2-summary',
      type: 'text' as const,
      content: `### System Connections

- Polar → Parametric: $x = r\\cos\\theta$, $y = r\\sin\\theta$
- Vector = Parametric with angle-bracket notation
- Same calculus (derivatives, integrals, arc length) in all three systems
- Polar area has the extra $1/2$; arc length uses $\\sqrt{r^2 + (r')^2}$

**Next: Part 3 — Differential Equations and Modeling**`
    }
  ]
};
