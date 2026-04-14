export const calcbcVectorsPart2Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv2-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Velocity & Acceleration

**Part 2 of 7 — Derivatives of Vector Functions**

The derivative of a vector-valued function is taken component-wise:

$$\\vec{r}\\,'(t) = \\langle x'(t),\\, y'(t) \\rangle$$

### Velocity, Speed, and Acceleration

| Quantity | Definition | Formula |
|----------|-----------|---------|
| **Position** | $\\vec{r}(t)$ | $\\langle x(t), y(t) \\rangle$ |
| **Velocity** | $\\vec{v}(t) = \\vec{r}\\,'(t)$ | $\\langle x'(t), y'(t) \\rangle$ |
| **Acceleration** | $\\vec{a}(t) = \\vec{v}\\,'(t)$ | $\\langle x''(t), y''(t) \\rangle$ |
| **Speed** | $\\|\\vec{v}(t)\\|$ | $\\sqrt{[x'(t)]^2 + [y'(t)]^2}$ |

> **Key Fact:** Velocity is a vector (has direction). Speed is a scalar (magnitude only).`
    },
    {
      id: 'vv2-examples',
      type: 'text' as const,
      content: `### Example

Let $\\vec{r}(t) = \\langle t^3 - 3t,\\, t^2 \\rangle$.

**Velocity:** $\\vec{v}(t) = \\langle 3t^2 - 3,\\, 2t \\rangle$

**Acceleration:** $\\vec{a}(t) = \\langle 6t,\\, 2 \\rangle$

**Speed at $t = 1$:**  
$\\vec{v}(1) = \\langle 0, 2 \\rangle$, so speed $= \\sqrt{0 + 4} = 2$.

**Direction of motion at $t = 1$:** Purely vertical (upward) since $v_x = 0$.

### When is the particle at rest?

The particle is **at rest** when $\\vec{v}(t) = \\vec{0}$, meaning $x'(t) = 0$ AND $y'(t) = 0$ simultaneously.

$3t^2 - 3 = 0 \\implies t = \\pm 1$, and $2t = 0 \\implies t = 0$.

No value satisfies both — the particle is **never at rest** (it's always moving in at least one direction).`
    },
    {
      id: 'vv2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For $\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$, the speed is:',
            options: ['$1$ (constant)', '$\\sqrt{\\cos^2 t + \\sin^2 t} = \\sqrt{2}$', '$2$', 'It varies with $t$'],
            correctAnswer: 0,
            explanation: '$\\vec{v}(t) = \\langle -\\sin t, \\cos t \\rangle$. Speed $= \\sqrt{\\sin^2 t + \\cos^2 t} = 1$. Uniform circular motion has constant speed.'
          },
          {
            question: 'If $\\vec{v}(t) = \\langle 2, -3 \\rangle$ (constant velocity), then $\\vec{a}(t) = $',
            options: ['$\\langle 0, 0 \\rangle$', '$\\langle 2, -3 \\rangle$', '$\\sqrt{13}$', '$\\langle -2, 3 \\rangle$'],
            correctAnswer: 0,
            explanation: 'Acceleration is the derivative of velocity. The derivative of a constant vector is the zero vector.'
          },
          {
            question: 'A particle moves with $\\vec{r}(t) = \\langle e^t, e^{-t} \\rangle$. The speed at $t = 0$ is:',
            options: ['$\\sqrt{2}$', '$2$', '$0$', '$1$'],
            correctAnswer: 0,
            explanation: '$\\vec{v}(t) = \\langle e^t, -e^{-t} \\rangle$. At $t=0$: $\\vec{v} = \\langle 1, -1 \\rangle$. Speed $= \\sqrt{1+1} = \\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'vv2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Key Concepts**',
      exercise: {
        dropdowns: [
          {
            label: 'The velocity vector $\\vec{v}(t)$ is tangent to the curve at the point $\\vec{r}(t)$ because:',
            options: ['It is the derivative of the position vector, pointing in the direction of motion', 'It is perpendicular to acceleration', 'It always has magnitude 1', 'It is the antiderivative of position'],
            correctAnswers: ['It is the derivative of the position vector, pointing in the direction of motion'],
            hints: ['Think about what the derivative of position represents geometrically.'],
            explanation: '$\\vec{v}(t) = \\lim_{\\Delta t \\to 0}\\frac{\\vec{r}(t+\\Delta t) - \\vec{r}(t)}{\\Delta t}$ — the limit of secant vectors, which is tangent to the curve.'
          },
          {
            label: 'If the speed of a particle is constant, the acceleration vector is:',
            options: ['Perpendicular to velocity (or zero)', 'Zero', 'Parallel to velocity', 'In the direction of motion'],
            correctAnswers: ['Perpendicular to velocity (or zero)'],
            hints: ['Differentiate $\\|\\vec{v}\\|^2 = v_x^2 + v_y^2 = c^2$.'],
            explanation: 'If $\\|\\vec{v}\\|^2 = c^2$, then $\\frac{d}{dt}(\\vec{v}\\cdot\\vec{v}) = 2\\vec{v}\\cdot\\vec{a} = 0$, so $\\vec{a} \\perp \\vec{v}$ (or $\\vec{a} = \\vec{0}$).'
          }
        ]
      }
    },
    {
      id: 'vv2-input',
      type: 'input-box' as const,
      content: '**Speed Computation**',
      exercise: {
        question: 'For $\\vec{r}(t) = \\langle 3t, 4t \\rangle$, find the speed. (Enter a single number.)',
        correctAnswer: '5',
        acceptableAnswers: ['5', '5.0'],
        hints: ['$\\vec{v}(t) = \\langle 3, 4 \\rangle$.', 'Speed $= \\|\\vec{v}\\| = \\sqrt{9 + 16}$.'],
        explanation: '$\\vec{v}(t) = \\langle 3, 4 \\rangle$. Speed $= \\sqrt{9 + 16} = \\sqrt{25} = 5$. Constant velocity means constant speed on a straight line.'
      }
    },
    {
      id: 'vv2-summary',
      type: 'text' as const,
      content: `### Summary

- $\\vec{v}(t) = \\vec{r}\\,'(t)$ — velocity is the derivative of position
- $\\vec{a}(t) = \\vec{v}\\,'(t) = \\vec{r}\\,''(t)$ — acceleration is the second derivative
- Speed $= \\|\\vec{v}(t)\\| = \\sqrt{[x'(t)]^2 + [y'(t)]^2}$
- Particle at rest: $\\vec{v}(t) = \\vec{0}$ (both components zero)

$$\\boxed{\\text{Speed} = \\|\\vec{v}(t)\\| = \\sqrt{[x'(t)]^2 + [y'(t)]^2}}$$

> **Next:** Part 3 — Integration of vector functions and displacement.`
    }
  ]
};
