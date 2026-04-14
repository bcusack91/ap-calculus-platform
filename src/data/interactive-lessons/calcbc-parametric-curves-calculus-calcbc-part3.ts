export const calcbcParametricPart3Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par3-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 3 of 7 \u2014 Arc Length of Parametric Curves**

The arc length formula for parametric curves is a direct extension of the Pythagorean theorem applied to infinitesimal segments.`
    },
    {
      id: 'par3-formula',
      type: 'text' as const,
      content: `### Arc Length Formula

$$\\boxed{L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt}$$

**Derivation:** A tiny piece of the curve has horizontal change $dx$ and vertical change $dy$. By the Pythagorean theorem:
$$ds = \\sqrt{dx^2 + dy^2} = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt$$

Note: $\\sqrt{(dx/dt)^2 + (dy/dt)^2}$ is the **speed** of the particle. So:

$$\\boxed{\\text{Arc length} = \\int_a^b \\text{speed}\\,dt}$$

> **Key Fact:** Arc length equals the integral of speed \u2014 this makes physical sense! Distance = speed \u00d7 time.`
    },
    {
      id: 'par3-example',
      type: 'text' as const,
      content: `### Example: Circle $x = 3\\cos t$, $y = 3\\sin t$, $0 \\le t \\le 2\\pi$

| Quantity | Value |
|----------|-------|
| $dx/dt$ | $-3\\sin t$ |
| $dy/dt$ | $3\\cos t$ |
| Speed | $\\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$ |
| Arc length | $\\int_0^{2\\pi} 3\\,dt = 6\\pi$ |

This confirms: circumference of circle with radius $3$ is $2\\pi(3) = 6\\pi$. \\checkmark

### Example: $x = t^2$, $y = t^3$, $0 \\le t \\le 1$

$$L = \\int_0^1 \\sqrt{(2t)^2 + (3t^2)^2}\\,dt = \\int_0^1 \\sqrt{4t^2 + 9t^4}\\,dt = \\int_0^1 t\\sqrt{4+9t^2}\\,dt$$

Let $u = 4 + 9t^2$: $L = \\frac{1}{18}\\cdot\\frac{2}{3}[u^{3/2}]_4^{13} = \\frac{1}{27}(13\\sqrt{13} - 8)$`
    },
    {
      id: 'par3-mc1',
      type: 'multiple-choice' as const,
      content: '**Arc Length Practice**',
      exercise: {
        questions: [
          {
            question: 'The arc length of $x = \\cos t$, $y = \\sin t$ from $t = 0$ to $t = \\pi$ is:',
            options: ['$\\pi$', '$2\\pi$', '$2$', '$1$'],
            correctAnswer: 0,
            explanation: 'Speed $= \\sqrt{\\sin^2 t + \\cos^2 t} = 1$. $L = \\int_0^{\\pi} 1\\,dt = \\pi$. This is half the circumference of the unit circle.'
          },
          {
            question: 'For $x = 3t$, $y = 4t$, $0 \\le t \\le 2$, the arc length is:',
            options: ['$10$', '$14$', '$5$', '$7$'],
            correctAnswer: 0,
            explanation: 'Speed $= \\sqrt{9+16} = 5$. $L = \\int_0^2 5\\,dt = 10$. This is a line from $(0,0)$ to $(6,8)$: $\\sqrt{36+64} = 10$. \\checkmark'
          }
        ]
      }
    },
    {
      id: 'par3-distance',
      type: 'text' as const,
      content: `### Arc Length vs. Displacement

| Concept | Formula | Meaning |
|:---:|:---:|:---:|
| **Arc length** | $\\int_a^b \\sqrt{(x')^2 + (y')^2}\\,dt$ | Total distance traveled |
| **Displacement** | $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$ | Straight-line distance |

Arc length $\\ge$ displacement, with equality only for straight-line motion.

> **AP Tip:** The AP exam often asks for distance traveled (arc length), not displacement. Read carefully!`
    },
    {
      id: 'par3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setup Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'Arc length integral for $x = e^t\\cos t$, $y = e^t\\sin t$:',
            options: ['$\\int_a^b e^t\\sqrt{2}\\,dt$', '$\\int_a^b e^{2t}\\,dt$', '$\\int_a^b \\sqrt{2}e^{2t}\\,dt$', '$\\int_a^b 2e^t\\,dt$'],
            correctAnswers: ['$\\int_a^b e^t\\sqrt{2}\\,dt$'],
            hints: ['$dx/dt = e^t(\\cos t - \\sin t)$, $dy/dt = e^t(\\sin t + \\cos t)$.', '$(x\')^2 + (y\')^2 = e^{2t}[(\\cos t-\\sin t)^2 + (\\sin t+\\cos t)^2] = 2e^{2t}$.'],
            explanation: 'Speed $= \\sqrt{2e^{2t}} = e^t\\sqrt{2}$. This is a logarithmic spiral.'
          },
          {
            label: 'Is the integrand for arc length always positive?',
            options: ['Yes, square root of sum of squares', 'No, speed can be negative', 'Only when $t > 0$', 'Depends on direction'],
            correctAnswers: ['Yes, square root of sum of squares'],
            hints: ['$(dx/dt)^2 + (dy/dt)^2 \\ge 0$, and $= 0$ only at stationary points.'],
            explanation: 'The speed is always $\\ge 0$. The integrand is a square root of a sum of squares, so it\u2019s always non-negative.'
          }
        ]
      }
    },
    {
      id: 'par3-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Find the arc length of $x = 5\\cos t$, $y = 5\\sin t$ for $0 \\le t \\le \\pi/2$. The speed is constant at $5$. What is $L$?',
        correctAnswer: '5pi/2',
        acceptableAnswers: ['5pi/2', '5\u03c0/2'],
        hints: ['$L = \\int_0^{\\pi/2} 5\\,dt = 5 \\cdot \\pi/2$.'],
        explanation: '$L = 5 \\cdot \\frac{\\pi}{2} = \\frac{5\\pi}{2}$. This is one quarter of the circumference $2\\pi(5) = 10\\pi$.'
      }
    },
    {
      id: 'par3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

$$L = \\int_a^b \\sqrt{(x')^2 + (y')^2}\\,dt = \\int_a^b \\text{speed}\\,dt$$

- Arc length = integral of speed
- Always $\\ge$ displacement
- For circles: confirms $C = 2\\pi r$

> **Coming Up:** Part 4 covers **area** enclosed by parametric curves.`
    }
  ]
};
