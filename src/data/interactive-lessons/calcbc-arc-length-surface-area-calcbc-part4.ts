export const calcbcArcLengthPart4Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al4-intro',
      type: 'text' as const,
      content: `# Arc Length — Integrating in $y$ and Arc Length Functions

**Part 4 of 7 — Arc Length in $y$ and Arc Length Functions**

### Integrating with Respect to $y$

If the curve is given as $x = g(y)$ for $c \\le y \\le d$, swap the roles of $x$ and $y$:

$$\\boxed{L = \\int_c^d \\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}\\,dy}$$

This helps when $dy/dx$ is undefined somewhere on the curve. For $y = x^{2/3}$ near the origin, $dy/dx = \\frac{2}{3}x^{-1/3}$ blows up at $x = 0$, but written as $x = y^{3/2}$ the derivative $dx/dy = \\frac{3}{2}y^{1/2}$ is perfectly well behaved.

### Arc Length Functions

Measuring length from a fixed starting point $x = a$ to a variable endpoint $x$ defines a function:

$$s(x) = \\int_a^x \\sqrt{1 + \\left(f'(t)\\right)^2}\\,dt$$

By the Fundamental Theorem of Calculus,

$$\\boxed{s'(x) = \\sqrt{1 + \\left(f'(x)\\right)^2} \\ge 1}$$

> **Key Fact:** $s'(x) \\ge 1$ means the length of the curve grows at least as fast as $x$ does, with equality exactly where the tangent line is horizontal.`
    },
    {
      id: 'al4-examples',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1 — integrating in $y$.** $x = \\frac{2}{3}(y - 1)^{3/2}$ for $1 \\le y \\le 4$.

$\\frac{dx}{dy} = (y - 1)^{1/2}$, so $1 + \\left(\\frac{dx}{dy}\\right)^2 = 1 + (y - 1) = y$.

$$L = \\int_1^4 \\sqrt{y}\\,dy = \\left[\\tfrac{2}{3}y^{3/2}\\right]_1^4 = \\tfrac{2}{3}(8 - 1) = \\tfrac{14}{3}$$

**Example 2 — reading an arc length function.** Suppose the length of a curve $y = f(x)$ from $x = 0$ to $x$ is

$$s(x) = \\int_0^x \\sqrt{1 + 9t^4}\\,dt.$$

Matching $1 + (f'(t))^2 = 1 + 9t^4$ gives $f'(t) = \\pm 3t^2$, so the curve is $f(x) = x^3 + C$ or $f(x) = -x^3 + C$. The arc length function fixes the shape of the curve up to a reflection and a vertical shift.`
    },
    {
      id: 'al4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The curve $x = y^2$ runs from $(0, 0)$ to $(4, 2)$. Its arc length is:',
            options: ['$\\int_0^4 \\sqrt{1 + 4y^2}\\,dy$', '$\\int_0^2 \\sqrt{1 + y^4}\\,dy$', '$\\int_0^2 (1 + 4y^2)\\,dy$', '$\\int_0^2 \\sqrt{1 + 4y^2}\\,dy$'],
            correctAnswer: 3,
            explanation: 'With $x = g(y) = y^2$, $dx/dy = 2y$, and the $y$-limits are $0$ and $2$, so $L = \\int_0^2\\sqrt{1 + 4y^2}\\,dy$. Using the $x$-values $0$ to $4$ mixes variables, $1 + y^4$ squares $x$ instead of $dx/dy$, and dropping the square root changes the integrand.'
          },
          {
            question: 'The function $s(x) = \\int_0^x \\sqrt{1 + \\cos^2 t}\\,dt$ gives the arc length, starting at $x = 0$, of which curve?',
            options: ['$y = \\cos x$', '$y = \\sin x$', '$y = \\cos^2 x$', '$y = x + \\sin x$'],
            correctAnswer: 1,
            explanation: 'The integrand is $\\sqrt{1 + (f\'(t))^2}$ with $f\'(t) = \\cos t$, so $f(x) = \\sin x$ (plus a constant). The curve $y = \\cos x$ gives $\\sqrt{1 + \\sin^2 t}$, $\\cos^2 x$ has derivative $-\\sin 2x$, and $x + \\sin x$ has derivative $1 + \\cos x$.'
          }
        ]
      }
    },
    {
      id: 'al4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'If $s(x) = \\int_1^x \\sqrt{1 + (f\'(t))^2}\\,dt$, then $s\'(x) =$',
            options: ['$\\sqrt{1 + (f\'(x))^2} - \\sqrt{1 + (f\'(1))^2}$', '$\\sqrt{1 + (f\'(x))^2}$', '$\\frac{f\'(x) f\'\'(x)}{\\sqrt{1 + (f\'(x))^2}}$', '$1 + f\'(x)$'],
            correctAnswers: ['$\\sqrt{1 + (f\'(x))^2}$'],
            hints: ['Fundamental Theorem of Calculus: differentiate an integral with a variable upper limit.'],
            explanation: 'By FTC, the derivative of $\\int_1^x h(t)\\,dt$ is $h(x)$, so $s\'(x) = \\sqrt{1 + (f\'(x))^2}$. Subtracting the value at $1$ confuses FTC with evaluating an antiderivative, the quotient form differentiates the integrand again, and $1 + f\'(x)$ drops the square and root.'
          },
          {
            label: 'Writing the curve as $x = g(y)$ is most helpful when',
            options: ['the curve passes through the origin', 'the arc length needs a calculator', '$dy/dx$ is undefined on the interval', 'the curve is a straight line'],
            correctAnswers: ['$dy/dx$ is undefined on the interval'],
            hints: ['Think of $y = x^{2/3}$ at $x = 0$.'],
            explanation: 'A vertical tangent makes $dy/dx$ undefined and the $dx$-integrand unbounded; in terms of $y$ the derivative $dx/dy$ is finite. Passing through the origin, needing a calculator, or being a line do not by themselves call for a change of variable.'
          }
        ]
      }
    },
    {
      id: 'al4-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Let $s(x) = \\int_0^x \\sqrt{1 + 4t^2}\\,dt$ be the arc length function of $y = x^2$. Find $s\'(2)$ to three decimal places.',
        correctAnswer: '4.123',
        acceptableAnswers: ['4.123', '4.12', 'sqrt(17)', '√17'],
        hints: ['By FTC, $s\'(x) = \\sqrt{1 + 4x^2}$.', '$\\sqrt{1 + 16} = \\sqrt{17}$.'],
        explanation: '$s\'(2) = \\sqrt{1 + 4(2)^2} = \\sqrt{17} \\approx 4.123$. Near $x = 2$, the curve gains about $4.123$ units of length per unit of $x$.'
      }
    },
    {
      id: 'al4-summary',
      type: 'text' as const,
      content: `### Summary

- $x = g(y)$: $L = \\int_c^d \\sqrt{1 + (dx/dy)^2}\\,dy$ with $y$-limits
- Arc length function: $s(x) = \\int_a^x \\sqrt{1 + (f'(t))^2}\\,dt$, so $s'(x) = \\sqrt{1 + (f'(x))^2}$
- An arc length integrand $\\sqrt{1 + (f')^2}$ tells you $f'$ up to sign

> **Next:** Part 5 — Choosing the right formula and AP exam strategies.`
    }
  ]
};
