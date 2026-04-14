export const calcbcParamDerivPart3Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'pd3-intro',
      type: 'text' as const,
      content: `# Parametric Derivatives

**Part 3 of 7 \u2014 Velocity, Acceleration & Speed**

When a particle moves along a parametric path, the derivatives describe its motion.

### Motion Vectors

| Quantity | Formula |
|----------|---------|
| Position | $(x(t),\\, y(t))$ |
| Velocity | $(x'(t),\\, y'(t))$ |
| Acceleration | $(x''(t),\\, y''(t))$ |
| Speed | $\\|\\mathbf{v}\\| = \\sqrt{(x')^2 + (y')^2}$ |

> **Key Distinction:** Velocity is a *vector* with direction. Speed is its *magnitude* (always $\\ge 0$).

### Direction of Motion

The velocity vector $(x'(t), y'(t))$ points in the direction the particle is moving at time $t$. The particle moves:
- **Right** when $x'(t) > 0$, **left** when $x'(t) < 0$
- **Up** when $y'(t) > 0$, **down** when $y'(t) < 0$`
    },
    {
      id: 'pd3-example',
      type: 'text' as const,
      content: `### Worked Example

**A particle moves with** $x(t) = t^2 - 4t$, $y(t) = t^3 - 6t$.

**Velocity:** $(2t - 4,\\, 3t^2 - 6)$

**Speed at $t = 1$:** $\\sqrt{(2-4)^2 + (3-6)^2} = \\sqrt{4+9} = \\sqrt{13}$

**Acceleration:** $(2,\\, 6t)$. At $t = 1$: $(2, 6)$.

**When is the particle at rest?** $x'(t) = 0$ AND $y'(t) = 0$:
- $2t - 4 = 0 \\implies t = 2$
- $3t^2 - 6 = 0 \\implies t = \\pm\\sqrt{2}$
- No common solution \u2192 **never at rest**

**When does it move purely horizontally?** $y'(t) = 0$ and $x'(t) \\ne 0$:
- $t = \\sqrt{2}$: $x'(\\sqrt{2}) = 2\\sqrt{2} - 4 \\ne 0$ \\checkmark`
    },
    {
      id: 'pd3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'A particle has position $(\\cos 2t, \\sin 2t)$. Its speed is:',
            options: ['$2$ (constant)', '$1$ (constant)', '$2t$', '$\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '$x\'=-2\\sin 2t$, $y\'=2\\cos 2t$. Speed $= \\sqrt{4\\sin^2 2t + 4\\cos^2 2t} = 2$.'
          },
          {
            question: 'A particle is at rest when:',
            options: ['Both $x\'(t) = 0$ and $y\'(t) = 0$', 'Either $x\'(t) = 0$ or $y\'(t) = 0$', 'Speed equals $1$', '$dy/dx = 0$'],
            correctAnswer: 0,
            explanation: 'At rest means zero velocity, which requires BOTH components to be zero. If only one is zero, the particle still moves along the other axis.'
          },
          {
            question: 'For $x = t$, $y = t^2$, the acceleration vector is:',
            options: ['$(0, 2)$ (constant)', '$(1, 2t)$', '$(0, 0)$', '$(1, 2)$'],
            correctAnswer: 0,
            explanation: '$x\'=1$, $y\'=2t$. $x\'\'=0$, $y\'\'=2$. Acceleration $= (0, 2)$, constant upward.'
          }
        ]
      }
    },
    {
      id: 'pd3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Motion Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = 5\\cos t$, $y = 3\\sin t$, the maximum speed occurs at:',
            options: ['$t = \\pi/2$ or $t = 3\\pi/2$ (speed $= 5$)', '$t = 0$ or $t = \\pi$ (speed $= 3$)', '$t = \\pi/4$ (speed $= \\sqrt{34}/2$)', 'Speed is constant'],
            correctAnswers: ['$t = \\pi/2$ or $t = 3\\pi/2$ (speed $= 5$)'],
            hints: ['Speed $= \\sqrt{25\\sin^2 t + 9\\cos^2 t} = \\sqrt{9 + 16\\sin^2 t}$.'],
            explanation: '$x\' = -5\\sin t$, $y\' = 3\\cos t$. Speed $= \\sqrt{25\\sin^2 t + 9\\cos^2 t} = \\sqrt{9 + 16\\sin^2 t}$. Maximum when $\\sin^2 t = 1$: speed $= 5$ at $t = \\pi/2, 3\\pi/2$.'
          },
          {
            label: 'The direction of motion at $t = t_0$ is given by:',
            options: ['The angle $\\theta = \\arctan(y\'(t_0)/x\'(t_0))$', 'The slope $dy/dx$', 'The acceleration direction', 'The curvature'],
            correctAnswers: ['The angle $\\theta = \\arctan(y\'(t_0)/x\'(t_0))$'],
            hints: ['The velocity vector gives the direction of motion.'],
            explanation: 'The velocity vector $(x\', y\')$ points in the direction of motion. Its angle from the positive $x$-axis is $\\arctan(y\'/x\')$ (with quadrant adjustment).'
          }
        ]
      }
    },
    {
      id: 'pd3-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'A particle moves with $x(t) = 3t$, $y(t) = 4t - t^2$. Find the speed at $t = 0$.',
        correctAnswer: '5',
        acceptableAnswers: ['5', '5.0'],
        hints: ['$x\'(0) = 3$, $y\'(0) = 4$.', 'Speed $= \\sqrt{9+16}$.'],
        explanation: '$x\'=3$, $y\'=4-2t$. At $t=0$: velocity $(3,4)$. Speed $= \\sqrt{9+16} = 5$.'
      }
    },
    {
      id: 'pd3-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Velocity** = $(x'(t), y'(t))$ is a vector; **speed** = its magnitude
- Particle at rest when both velocity components are zero simultaneously
- **Direction of motion** given by the velocity vector, not just $dy/dx$
- Speed can vary even on a circle (unless it is traversed at constant angular velocity)

> **Next:** Part 4 explores **higher-order derivatives** and the **curvature formula**.`
    }
  ]
};
