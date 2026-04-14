export const calcbcMotionPart1Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'mc1-intro',
      type: 'text' as const,
      content: `# Motion Along a Curve — Parametric Foundations

**Part 1 of 7 — Position, Velocity, and Acceleration Vectors**

In BC Calculus, motion extends from a line (AB topic) to curves in the plane using parametric equations or vector-valued functions.

### Position Vector

A particle's position at time $t$:

$$\\boxed{\\vec{r}(t) = \\langle x(t),\\, y(t) \\rangle}$$

### Velocity Vector

$$\\boxed{\\vec{v}(t) = \\langle x'(t),\\, y'(t) \\rangle}$$

The velocity vector is **tangent** to the curve at each point.

### Acceleration Vector

$$\\boxed{\\vec{a}(t) = \\langle x''(t),\\, y''(t) \\rangle}$$

> **Key Fact:** $\\vec{v}(t) = \\vec{r}\\,'(t)$ and $\\vec{a}(t) = \\vec{v}\\,'(t) = \\vec{r}\\,''(t)$. Each derivative is taken component-wise.`
    },
    {
      id: 'mc1-example',
      type: 'text' as const,
      content: `### Worked Example

A particle moves with $x(t) = t^3 - 3t$ and $y(t) = 2t^2 - t$.

| Quantity | Computation |
|----------|------------|
| $\\vec{r}(t)$ | $\\langle t^3 - 3t,\\; 2t^2 - t \\rangle$ |
| $\\vec{v}(t)$ | $\\langle 3t^2 - 3,\\; 4t - 1 \\rangle$ |
| $\\vec{a}(t)$ | $\\langle 6t,\\; 4 \\rangle$ |
| $\\vec{v}(1)$ | $\\langle 0,\\; 3 \\rangle$ — moving purely upward |
| $\\vec{a}(1)$ | $\\langle 6,\\; 4 \\rangle$ |

> **AP Tip:** The velocity vector gives both speed AND direction. When $\\vec{v}(t_0) = \\langle 0, 3 \\rangle$, the particle moves in the $+y$ direction at that instant.`
    },
    {
      id: 'mc1-speed',
      type: 'text' as const,
      content: `### Speed (Magnitude of Velocity)

Speed is a **scalar** — the magnitude of the velocity vector:

$$\\boxed{\\text{Speed} = |\\vec{v}(t)| = \\sqrt{[x'(t)]^2 + [y'(t)]^2}}$$

From the example above at $t = 1$: $|\\vec{v}(1)| = \\sqrt{0^2 + 3^2} = 3$.

### Slope of the Path

The slope of the curve (tangent line) at any point:

$$\\boxed{\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y'(t)}{x'(t)}}$$

At $t = 1$: $\\frac{dy}{dx} = \\frac{3}{0}$ → vertical tangent.`
    },
    {
      id: 'mc1-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'A particle has $x(t) = \\cos(2t)$, $y(t) = \\sin(2t)$. What is $\\vec{v}(t)$?',
            options: ['$\\langle -2\\sin(2t),\\; 2\\cos(2t) \\rangle$', '$\\langle -\\sin(2t),\\; \\cos(2t) \\rangle$', '$\\langle 2\\cos(2t),\\; 2\\sin(2t) \\rangle$', '$\\langle -2\\cos(2t),\\; -2\\sin(2t) \\rangle$'],
            correctAnswer: 0,
            explanation: '$x\'(t) = -2\\sin(2t)$, $y\'(t) = 2\\cos(2t)$.'
          },
          {
            question: 'For the particle above, the speed at any time $t$ is:',
            options: ['$2$ (constant)', '$4$', '$2t$', 'It varies with $t$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{4\\sin^2(2t) + 4\\cos^2(2t)} = \\sqrt{4} = 2$. Uniform circular motion.'
          },
          {
            question: 'If $\\vec{v}(t_0) = \\langle -3, 4 \\rangle$, the particle is moving:',
            options: ['Left and up, at speed 5', 'Right and down, at speed 5', 'Left and up, at speed 7', 'Right and up, at speed 5'],
            correctAnswer: 0,
            explanation: 'Negative $x$-component → left. Positive $y$-component → up. Speed $= \\sqrt{9+16} = 5$.'
          }
        ]
      }
    },
    {
      id: 'mc1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Component Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\vec{r}(t) = \\langle e^t, t^2 \\rangle$, the $x$-component of acceleration is:',
            options: ['$e^t$', '$2t$', '$2$', '$te^t$'],
            correctAnswers: ['$e^t$'],
            hints: ['$x\'(t) = e^t$, so $x\'\'(t) = ?$'],
            explanation: '$x\'(t) = e^t \\Rightarrow x\'\'(t) = e^t$.'
          },
          {
            label: 'The $y$-component of acceleration is:',
            options: ['$2$ (constant)', '$2t$', '$t^2$', '$0$'],
            correctAnswers: ['$2$ (constant)'],
            hints: ['$y\'(t) = 2t$, so $y\'\'(t) = ?$'],
            explanation: '$y\'(t) = 2t \\Rightarrow y\'\'(t) = 2$.'
          }
        ]
      }
    },
    {
      id: 'mc1-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'A particle has $x(t) = 3t$, $y(t) = 4t$. What is the speed?',
        correctAnswer: '5',
        acceptableAnswers: ['5', '5.0'],
        hints: ['$x\'(t) = 3$, $y\'(t) = 4$. Speed $= \\sqrt{9+16}$.'],
        explanation: '$\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. The particle moves in a straight line at constant speed 5.'
      }
    },
    {
      id: 'mc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

| Concept | Formula |
|---------|---------|
| Position | $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ |
| Velocity | $\\vec{v}(t) = \\langle x'(t), y'(t) \\rangle$ |
| Acceleration | $\\vec{a}(t) = \\langle x''(t), y''(t) \\rangle$ |
| Speed | $|\\vec{v}| = \\sqrt{(x')^2 + (y')^2}$ |
| Slope | $dy/dx = y'(t)/x'(t)$ |

**Next: Part 2 — Speed, Distance, and Arc Length**`
    }
  ]
};
