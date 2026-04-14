export const calcbcArcLengthPart3Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al3-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area — Surface Area of Revolution

**Part 3 of 7 — Surfaces of Revolution**

When a curve is rotated about an axis, it sweeps out a surface. The surface area is:

### About the $x$-axis ($y \\ge 0$):

$$\\boxed{S = 2\\pi \\int_a^b y\\,ds = 2\\pi \\int_a^b f(x)\\sqrt{1 + (f'(x))^2}\\,dx}$$

### About the $y$-axis ($x \\ge 0$):

$$\\boxed{S = 2\\pi \\int_a^b x\\,ds = 2\\pi \\int_a^b x\\sqrt{1 + (f'(x))^2}\\,dx}$$

| Axis of Revolution | Radius of Revolution | Formula |
|-------------------|---------------------|---------|
| $x$-axis | $y = f(x)$ | $2\\pi\\int y\\,ds$ |
| $y$-axis | $x$ | $2\\pi\\int x\\,ds$ |

> **Key Fact:** The formula is $S = 2\\pi\\int(\\text{radius})(ds)$. The "radius" is the distance from the curve to the axis of rotation.`
    },
    {
      id: 'al3-examples',
      type: 'text' as const,
      content: `### Example 1 — Sphere Surface Area

Rotate $y = \\sqrt{r^2 - x^2}$ (semicircle) about the $x$-axis, $-r \\le x \\le r$.

$y' = \\frac{-x}{\\sqrt{r^2-x^2}}$, $1 + (y')^2 = \\frac{r^2}{r^2 - x^2}$

$$S = 2\\pi\\int_{-r}^{r} \\sqrt{r^2 - x^2}\\cdot\\frac{r}{\\sqrt{r^2-x^2}}\\,dx = 2\\pi r\\int_{-r}^{r}dx = 2\\pi r(2r) = 4\\pi r^2$$

This confirms the known sphere surface area formula. ✓

### Example 2 — Cone Lateral Surface

Rotate $y = 2x$ from $x = 0$ to $x = 3$ about the $x$-axis.

$y' = 2$, $ds = \\sqrt{1+4}\\,dx = \\sqrt{5}\\,dx$

$$S = 2\\pi\\int_0^3 2x\\cdot\\sqrt{5}\\,dx = 4\\pi\\sqrt{5}\\cdot\\frac{9}{2} = 18\\pi\\sqrt{5}$$`
    },
    {
      id: 'al3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The surface area formula $S = 2\\pi\\int y\\,ds$ assumes revolution about which axis?',
            options: ['The $x$-axis', 'The $y$-axis', 'Either axis', 'The line $y = x$'],
            correctAnswer: 0,
            explanation: 'When revolving about the $x$-axis, each point traces a circle of radius $y$ (its distance from the $x$-axis). So the integrand involves $2\\pi y$.'
          },
          {
            question: 'For revolution about the $y$-axis, the "radius of revolution" for a point $(x, y)$ is:',
            options: ['$x$ (horizontal distance to the $y$-axis)', '$y$', '$\\sqrt{x^2+y^2}$', '$x + y$'],
            correctAnswer: 0,
            explanation: 'Distance from $(x, y)$ to the $y$-axis is $|x|$. With $x \\ge 0$, this is simply $x$.'
          }
        ]
      }
    },
    {
      id: 'al3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'Rotating $y = x^2$ from $x = 0$ to $x = 1$ about the $x$-axis gives $S = $',
            options: ['$2\\pi\\int_0^1 x^2\\sqrt{1+4x^2}\\,dx$', '$2\\pi\\int_0^1 x\\sqrt{1+4x^2}\\,dx$', '$2\\pi\\int_0^1 \\sqrt{1+4x^2}\\,dx$', '$\\pi\\int_0^1 x^4\\,dx$'],
            correctAnswers: ['$2\\pi\\int_0^1 x^2\\sqrt{1+4x^2}\\,dx$'],
            hints: ['About the $x$-axis: radius $= y = x^2$, $ds = \\sqrt{1+(2x)^2}\\,dx$.'],
            explanation: '$S = 2\\pi\\int y\\,ds = 2\\pi\\int_0^1 x^2\\sqrt{1+4x^2}\\,dx$.'
          },
          {
            label: 'If a curve lies below the $x$-axis and is rotated about the $x$-axis, the radius is:',
            options: ['$|y|$ (take absolute value)', '$y$ (negative)', '$-y$', '0'],
            correctAnswers: ['$|y|$ (take absolute value)'],
            hints: ['Surface area must be positive.'],
            explanation: 'Distance from the curve to the axis is $|y|$. Surface area is always non-negative.'
          }
        ]
      }
    },
    {
      id: 'al3-input',
      type: 'input-box' as const,
      content: '**Verification**',
      exercise: {
        question: 'Rotate $y = r$ (horizontal line, constant) from $x = 0$ to $x = h$ about the $x$-axis. The surface is a cylinder. Its surface area is $2\\pi r h$. Verify: $y\' = 0$, so $S = 2\\pi\\int_0^h r\\cdot 1\\,dx = ?$ Give the answer in terms of $r$ and $h$ as "2pirh".',
        correctAnswer: '2pirh',
        acceptableAnswers: ['2pirh', '2πrh', '2pi*r*h', '2 pi r h'],
        hints: ['$ds = \\sqrt{1+0}\\,dx = dx$.'],
        explanation: '$S = 2\\pi\\int_0^h r\\,dx = 2\\pi r[x]_0^h = 2\\pi rh$. This is the lateral surface area of a cylinder. ✓'
      }
    },
    {
      id: 'al3-summary',
      type: 'text' as const,
      content: `### Summary

- Surface area of revolution = $2\\pi\\int(\\text{radius})(ds)$
- About $x$-axis: radius $= |y|$
- About $y$-axis: radius $= |x|$
- Verify with known shapes: sphere ($4\\pi r^2$), cylinder ($2\\pi rh$), cone ($\\pi r\\ell$)

> **Next:** Part 4 — Parametric and polar surface area formulas.`
    }
  ]
};
