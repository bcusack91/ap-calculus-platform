export const calcbcParamDerivPart4Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'pd4-intro',
      type: 'text' as const,
      content: `# Parametric Derivatives

**Part 4 of 7 \u2014 Curvature & Higher-Order Analysis**

Curvature measures how sharply a curve bends at each point. It connects first and second parametric derivatives.

### Curvature Formula

For $x = f(t)$, $y = g(t)$:

$$\\boxed{\\kappa = \\frac{|x'y'' - y'x''|}{\\big((x')^2 + (y')^2\\big)^{3/2}}}$$

**Interpretation:**
- $\\kappa$ large \u2192 sharp bend (small radius of curvature)
- $\\kappa$ small \u2192 gentle curve (large radius of curvature)
- $\\kappa = 0$ \u2192 straight line (locally)

**Radius of curvature:** $R = 1/\\kappa$`
    },
    {
      id: 'pd4-example',
      type: 'text' as const,
      content: `### Example: Curvature of an Ellipse

$x = 3\\cos t$, $y = 2\\sin t$

| Derivative | Value |
|-----------|-------|
| $x'$ | $-3\\sin t$ |
| $y'$ | $2\\cos t$ |
| $x''$ | $-3\\cos t$ |
| $y''$ | $-2\\sin t$ |

$$\\kappa = \\frac{|(-3\\sin t)(-2\\sin t) - (2\\cos t)(-3\\cos t)|}{(9\\sin^2 t + 4\\cos^2 t)^{3/2}}$$

$$= \\frac{6\\sin^2 t + 6\\cos^2 t}{(9\\sin^2 t + 4\\cos^2 t)^{3/2}} = \\frac{6}{(9\\sin^2 t + 4\\cos^2 t)^{3/2}}$$

**At $t = 0$** (vertex $(3,0)$): $\\kappa = 6/8 = 3/4$, $R = 4/3$

**At $t = \\pi/2$** (vertex $(0,2)$): $\\kappa = 6/27 = 2/9$, $R = 9/2$

The ellipse curves more sharply at $(3,0)$ than at $(0,2)$.`
    },
    {
      id: 'pd4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The curvature of a circle of radius $r$ is:',
            options: ['$1/r$ (constant)', '$r$ (constant)', '$2\\pi r$', '$0$'],
            correctAnswer: 0,
            explanation: 'A circle bends uniformly. $\\kappa = 1/r$, and the radius of curvature equals $r$ itself.'
          },
          {
            question: 'At a point of inflection on a parametric curve:',
            options: ['$\\kappa = 0$', '$\\kappa = \\infty$', '$\\kappa = 1$', '$\\kappa$ is undefined'],
            correctAnswer: 0,
            explanation: 'At an inflection point the curvature passes through zero as the curve changes concavity.'
          },
          {
            question: 'For $x = t$, $y = t^3$, the curvature at $t = 0$ is:',
            options: ['$0$ (inflection point)', '$1$', '$3$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$x\'=1, y\'=3t^2, x\'\'=0, y\'\'=6t$. At $t=0$: $\\kappa = |1\\cdot 0 - 0 \\cdot 0|/(1+0)^{3/2} = 0$. This is the inflection point of $y = x^3$.'
          }
        ]
      }
    },
    {
      id: 'pd4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Curvature Applications**',
      exercise: {
        dropdowns: [
          {
            label: 'A straight line $x = at$, $y = bt$ has curvature:',
            options: ['$\\kappa = 0$ everywhere', '$\\kappa = 1/\\sqrt{a^2+b^2}$', '$\\kappa = \\sqrt{a^2+b^2}$', 'Undefined'],
            correctAnswers: ['$\\kappa = 0$ everywhere'],
            hints: ['$x\'\'=0$, $y\'\'=0$.'],
            explanation: '$x\'=a, y\'=b, x\'\'=0, y\'\'=0$. Numerator $= |a \\cdot 0 - b \\cdot 0| = 0$. A line has zero curvature.'
          },
          {
            label: 'As a parabola $y = x^2$ moves away from the vertex, its curvature:',
            options: ['Decreases toward $0$', 'Increases toward $\\infty$', 'Stays constant', 'Oscillates'],
            correctAnswers: ['Decreases toward $0$'],
            hints: ['The parabola flattens out as $|x|$ grows.'],
            explanation: 'Parametrize as $x=t$, $y=t^2$. $\\kappa = 2/(1+4t^2)^{3/2}$. Maximum at $t=0$ ($\\kappa = 2$), decreasing to $0$ as $|t| \\to \\infty$.'
          }
        ]
      }
    },
    {
      id: 'pd4-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'Find the curvature of $x = 2\\cos t$, $y = 2\\sin t$ (circle of radius 2). Enter as a fraction.',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', '0.5'],
        hints: ['For a circle of radius $r$, $\\kappa = 1/r$.', 'Or compute: $x\'y\'\' - y\'x\'\' = (-2\\sin t)(-2\\sin t) - (2\\cos t)(-2\\cos t) = 4$. Speed$^3 = 8$.'],
        explanation: 'Numerator: $|(-2\\sin t)(-2\\sin t) - (2\\cos t)(-2\\cos t)| = |4\\sin^2 t + 4\\cos^2 t| = 4$. Denominator: $(4)^{3/2} = 8$. $\\kappa = 4/8 = 1/2$.'
      }
    },
    {
      id: 'pd4-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Curvature $\\kappa = \\frac{|x'y'' - y'x''|}{((x')^2+(y')^2)^{3/2}}$ measures bending intensity
- Circle: constant curvature $1/r$. Line: curvature $0$.
- More curvature = tighter turn. Radius of curvature $R = 1/\\kappa$.
- Curvature is zero at inflection points

> **Next:** Part 5 covers **implicit differentiation connections** and mixed problems.`
    }
  ]
};
