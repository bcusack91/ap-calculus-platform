export const calcbcVectorsPart6Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv6-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Mixed problems covering position, velocity, acceleration, arc length, and motion analysis.

### Workshop Problems

| Problem | Skills Tested |
|---------|--------------|
| 1 | Position from velocity + ICs |
| 2 | Speed and direction analysis |
| 3 | Arc length computation |`
    },
    {
      id: 'vv6-prob1',
      type: 'text' as const,
      content: `### Problem 1

$\\vec{a}(t) = \\langle 2, -6t \\rangle$, $\\vec{v}(0) = \\langle 1, 4 \\rangle$, $\\vec{r}(0) = \\langle 0, 0 \\rangle$.

**Find $\\vec{r}(t)$.**

$\\vec{v}(t) = \\int\\langle 2, -6t \\rangle\\,dt = \\langle 2t + C_1, -3t^2 + C_2 \\rangle$

$\\vec{v}(0) = \\langle C_1, C_2 \\rangle = \\langle 1, 4 \\rangle$

$$\\vec{v}(t) = \\langle 2t + 1, -3t^2 + 4 \\rangle$$

$\\vec{r}(t) = \\int\\vec{v}\\,dt = \\langle t^2 + t + D_1, -t^3 + 4t + D_2 \\rangle$

$\\vec{r}(0) = \\langle D_1, D_2 \\rangle = \\langle 0, 0 \\rangle$

$$\\boxed{\\vec{r}(t) = \\langle t^2 + t,\\, -t^3 + 4t \\rangle}$$`
    },
    {
      id: 'vv6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Questions**',
      exercise: {
        questions: [
          {
            question: 'Using Problem 1 above, when is the particle moving to the left ($x$ decreasing)?',
            options: ['Never (for $t > 0$)', 'When $t < -1/2$', 'When $t > 1$', 'Always'],
            correctAnswer: 0,
            explanation: '$x\'(t) = 2t + 1 > 0$ for all $t > -1/2$. If we restrict to $t \\ge 0$, then $x\'(t) \\ge 1 > 0$ always. The particle always moves right.'
          },
          {
            question: 'From Problem 1, the speed at $t = 1$ is:',
            options: ['$\\sqrt{10}$', '$\\sqrt{8}$', '$3$', '$\\sqrt{5}$'],
            correctAnswer: 0,
            explanation: '$\\vec{v}(1) = \\langle 3, 1 \\rangle$. Speed $= \\sqrt{9 + 1} = \\sqrt{10}$.'
          }
        ]
      }
    },
    {
      id: 'vv6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Workshop Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\vec{r}(t) = \\langle 2\\cos t, 3\\sin t \\rangle$, the curve is a(n):',
            options: ['Ellipse', 'Circle', 'Parabola', 'Line'],
            correctAnswers: ['Ellipse'],
            hints: ['Eliminate the parameter: $x^2/4 + y^2/9 = ?$'],
            explanation: '$x = 2\\cos t \\implies \\cos t = x/2$, $y = 3\\sin t \\implies \\sin t = y/3$. Then $x^2/4 + y^2/9 = 1$: an ellipse.'
          },
          {
            label: 'The arc length of an ellipse $\\langle 2\\cos t, 3\\sin t \\rangle$ over $[0, 2\\pi]$ requires:',
            options: ['Numerical methods (no closed form)', 'Simple formula $2\\pi\\sqrt{(a^2+b^2)/2}$', '$2\\pi a$', '$\\pi(a+b)$'],
            correctAnswers: ['Numerical methods (no closed form)'],
            hints: ['This gives an elliptic integral.'],
            explanation: '$\\|\\vec{r}\\,\'\\| = \\sqrt{4\\sin^2 t + 9\\cos^2 t}$, which does not simplify nicely. Ellipse arc length has no elementary closed form — use a calculator.'
          }
        ]
      }
    },
    {
      id: 'vv6-input',
      type: 'input-box' as const,
      content: '**Workshop Computation**',
      exercise: {
        question: 'From Problem 1, find the $y$-coordinate of $\\vec{r}(2)$. ($\\vec{r}(t) = \\langle t^2+t, -t^3+4t \\rangle$)',
        correctAnswer: '0',
        acceptableAnswers: ['0', '0.0'],
        hints: ['$y(2) = -(2)^3 + 4(2)$.'],
        explanation: '$y(2) = -8 + 8 = 0$. The particle is on the $x$-axis at $t = 2$.'
      }
    },
    {
      id: 'vv6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- Integrate acceleration → velocity → position (apply ICs at each step)
- Speed at a point: evaluate $\\|\\vec{v}(t_0)\\|$
- Direction: analyze signs of $x'(t)$ and $y'(t)$
- Arc length of non-circular curves often requires calculator

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
