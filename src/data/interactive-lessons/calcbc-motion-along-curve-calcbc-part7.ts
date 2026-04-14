export const calcbcMotionPart7Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'mc7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — Motion Along a Curve

**Part 7 of 7 — Final Assessment**

### Complete Formula Sheet

| Concept | Formula |
|---------|---------|
| Position | $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ |
| Velocity | $\\vec{v}(t) = \\langle x'(t), y'(t) \\rangle$ |
| Acceleration | $\\vec{a}(t) = \\langle x''(t), y''(t) \\rangle$ |
| Speed | $|\\vec{v}| = \\sqrt{(x')^2 + (y')^2}$ |
| Distance | $\\int_a^b |\\vec{v}(t)|\\,dt$ |
| Slope | $dy/dx = y'(t)/x'(t)$ |
| Second Deriv. | $d^2y/dx^2 = \\frac{(d/dt)(dy/dx)}{dx/dt}$ |
| Position from $\\vec{v}$ | $\\vec{r}(b) = \\vec{r}(a) + \\int_a^b \\vec{v}\\,dt$ |
| Speeding up | $\\vec{v} \\cdot \\vec{a} > 0$ |

$$\\boxed{\\text{At rest: } x'(t) = 0 \\text{ AND } y'(t) = 0 \\text{ simultaneously}}$$`
    },
    {
      id: 'mc7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Set A**',
      exercise: {
        questions: [
          {
            question: 'A particle has $x(t) = \\sin t$, $y(t) = \\cos t$. $\\frac{d^2y}{dx^2}$ at $t = \\pi/2$ is:',
            options: ['$-1$ ($dy/dx = -\\sin t/\\cos t$; $\\frac{d}{dt}(-\\tan t) = -\\sec^2 t$; $(-\\sec^2(\\pi/2))/(\\cos(\\pi/2))$ → undefined at $\\pi/2$. Let me recalculate...)', 'Wait — undefined since $x\'(\\pi/2) = \\cos(\\pi/2) = 0$', '$0$', '$1$'],
            correctAnswer: 1,
            explanation: '$x\'(\\pi/2) = \\cos(\\pi/2) = 0$, so the second derivative formula has division by zero. The curve has a vertical tangent here.'
          },
          {
            question: '$x(t) = 2t + 1$, $y(t) = t^2 - t$. Find the slope at $t = 3$.',
            options: ['$5/2$', '$5$', '$3/2$', '$6$'],
            correctAnswer: 0,
            explanation: '$dy/dx = (2t-1)/2$. At $t = 3$: $(6-1)/2 = 5/2$.'
          },
          {
            question: 'A particle has constant speed 7 and travels from $t = 0$ to $t = 3$. Total distance:',
            options: ['$21$', '$7$', '$\\sqrt{21}$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\int_0^3 7\\,dt = 21$.'
          }
        ]
      }
    },
    {
      id: 'mc7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review Set B**',
      exercise: {
        questions: [
          {
            question: 'At $t = 4$: $\\vec{v} = \\langle -1, -3 \\rangle$, $\\vec{a} = \\langle 2, 1 \\rangle$. The particle is:',
            options: ['Slowing down ($\\vec{v} \\cdot \\vec{a} = -2 - 3 = -5 < 0$)', 'Speeding up', 'At rest', 'Moving at constant speed'],
            correctAnswer: 0,
            explanation: '$\\vec{v} \\cdot \\vec{a} = (-1)(2) + (-3)(1) = -5 < 0$. Slowing down.'
          },
          {
            question: 'If $\\vec{v}(t) = \\langle t - 1, t^2 - 4 \\rangle$, the particle reverses $y$-direction at:',
            options: ['$t = 2$ (where $y\' = t^2 - 4$ changes from negative to positive)', '$t = 1$', '$t = -2$ only', '$t = 1$ and $t = 2$'],
            correctAnswer: 0,
            explanation: '$y\'(t) = t^2 - 4 = (t-2)(t+2)$. For $t \\ge 0$, changes sign at $t = 2$.'
          }
        ]
      }
    },
    {
      id: 'mc7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Comprehensive Analysis**\n\n$x\'(t) = t^2 - 4$, $y\'(t) = 3t - 6$ for $t \\ge 0$.',
      exercise: {
        dropdowns: [
          {
            label: 'The particle is at rest at:',
            options: ['$t = 2$ (both $x\'(2) = 0$ and $y\'(2) = 0$)', 'Never', '$t = 2$ and $t = -2$', '$t = 2$ (only $x\' = 0$)'],
            correctAnswers: ['$t = 2$ (both $x\'(2) = 0$ and $y\'(2) = 0$)'],
            hints: ['$x\'(2) = 4 - 4 = 0$, $y\'(2) = 6 - 6 = 0$.'],
            explanation: 'Both components are zero at $t = 2$. The particle is at rest.'
          },
          {
            label: 'The speed at $t = 0$ is:',
            options: ['$\\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13}$', '$\\sqrt{4 + 6} = \\sqrt{10}$', '$4 + 6 = 10$', '$|{-4}| + |{-6}| = 10$'],
            correctAnswers: ['$\\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13}$'],
            hints: ['$x\'(0) = -4$, $y\'(0) = -6$. Speed $= \\sqrt{16 + 36}$.'],
            explanation: '$\\sqrt{(-4)^2 + (-6)^2} = \\sqrt{52} = 2\\sqrt{13}$.'
          }
        ]
      }
    },
    {
      id: 'mc7-input',
      type: 'input-box' as const,
      content: '**Final Problem**',
      exercise: {
        question: 'A particle starts at $(0, 0)$ with $x\'(t) = 6$ and $y\'(t) = 8$. What is the total distance traveled from $t = 0$ to $t = 3$?',
        correctAnswer: '30',
        acceptableAnswers: ['30', '30.0'],
        hints: ['Speed $= \\sqrt{36 + 64} = 10$. Distance $= 10 \\times 3$.'],
        explanation: 'Speed = $\\sqrt{6^2 + 8^2} = 10$. Distance $= \\int_0^3 10\\,dt = 30$.'
      }
    },
    {
      id: 'mc7-summary',
      type: 'text' as const,
      content: `### Motion Along a Curve — Complete

You've mastered:
- Position, velocity, and acceleration as vector functions
- Speed as the magnitude of velocity
- Total distance via integrating speed
- Displacement vs. distance distinction
- At rest conditions (both components zero)
- Direction changes and speeding up/slowing down
- Tangent lines and second derivatives for parametric curves
- AP exam strategies and common pitfalls

$$\\boxed{\\text{Motion in 2D} = \\text{component-wise calculus + vector analysis}}$$`
    }
  ]
};
