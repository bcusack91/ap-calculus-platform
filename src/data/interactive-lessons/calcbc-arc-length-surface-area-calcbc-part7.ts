export const calcbcArcLengthPart7Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al7-intro',
      type: 'text' as const,
      content: `# Arc Length — Comprehensive Review

**Part 7 of 7 — Full Topic Review**

### Master Formula Sheet

| Curve given as | Arc length $L$ | BC topic |
|------|---------------|------|
| $y = f(x)$, $a \\le x \\le b$ | $\\int_a^b \\sqrt{1+(f')^2}\\,dx$ | 8.13 |
| $x = g(y)$, $c \\le y \\le d$ | $\\int_c^d \\sqrt{1+(g')^2}\\,dy$ | 8.13 |
| $x(t), y(t)$, $a \\le t \\le b$ | $\\int_a^b \\sqrt{(x')^2+(y')^2}\\,dt$ | 9.3 |
| Moving particle | distance traveled $= \\int_a^b \\text{speed}\\,dt$ | 9.6 |

> **Key Fact:** Every formula comes from $ds = \\sqrt{dx^2 + dy^2}$. Surface area of revolution and polar arc length are not on the AP exam.`
    },
    {
      id: 'al7-checklist',
      type: 'text' as const,
      content: `### Exam Checklist

✅ **Setting up:**
- Identify how the curve is given ($y = f(x)$, $x = g(y)$, or parametric)
- Differentiate, square, add, and take the square root, in that order
- Use limits in the variable of integration ($t$-values for parametric curves)
- Look for a perfect square before reaching for the calculator

✅ **Calculator-active parts:**
- Write the definite integral with its limits
- Report the value to three decimal places

✅ **Common Errors to Avoid:**
- Squaring $y$ instead of $y'$
- Using $x$-values as limits of a $dt$ integral
- Forgetting $\\sqrt{t^2} = |t|$ when $t$ can be negative
- Confusing distance traveled with displacement`
    },
    {
      id: 'al7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Questions**',
      exercise: {
        questions: [
          {
            question: 'The arc length of $y = x^2$ from $x = 0$ to $x = 1$ is:',
            options: ['$\\int_0^1 \\sqrt{1+4x^2}\\,dx$', '$\\int_0^1 (1+4x^2)\\,dx$', '$\\int_0^1 \\sqrt{4x^2}\\,dx$', '$\\int_0^1 \\sqrt{1+x^4}\\,dx$'],
            correctAnswer: 0,
            explanation: '$y\' = 2x$, $(y\')^2 = 4x^2$. $L = \\int_0^1\\sqrt{1+4x^2}\\,dx$. Squaring $y$ instead of $y\'$ gives $\\sqrt{1+x^4}$, and dropping the square root or the $1$ gives the other integrals.'
          },
          {
            question: 'A particle moves with $x(t) = t^3 - 3t$ and $y(t) = 3t^2$. Its speed at $t = 1$ is:',
            options: ['$6$', '$0$', '$6\\sqrt{2}$', '$\\sqrt{13}$'],
            correctAnswer: 0,
            explanation: '$x\'(t) = 3t^2 - 3$ and $y\'(t) = 6t$, so at $t = 1$ the velocity is $\\langle 0, 6 \\rangle$ and the speed is $6$. A speed of $0$ comes from looking only at $x\'$, $6\\sqrt{2}$ comes from differentiating $-3t$ as $+3$, and $\\sqrt{13}$ is the distance from the origin to the position $(-2, 3)$, not a speed.'
          },
          {
            question: 'Arc length is always:',
            options: ['Non-negative for every curve', 'Strictly greater than displacement', 'Equal to the net displacement', 'Equal to the area under the curve'],
            correctAnswer: 0,
            explanation: 'Arc length $\\ge 0$ always. It is $\\ge$ the straight-line distance between endpoints, with equality for a straight segment, so it is not strictly greater. It equals $\\int \\|\\vec{v}\\|\\,dt$ (total distance), not net displacement or area.'
          }
        ]
      }
    },
    {
      id: 'al7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The length of the curve $x = \\cos t$, $y = \\sin t$ for $0 \\le t \\le \\frac{\\pi}{2}$ is',
            options: ['$2\\pi$', '$\\pi$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$'],
            correctAnswers: ['$\\frac{\\pi}{2}$'],
            hints: ['The integrand is $\\sqrt{\\sin^2 t + \\cos^2 t}$.'],
            explanation: 'The integrand equals $1$, so $L = \\int_0^{\\pi/2} 1\\,dt = \\frac{\\pi}{2}$: a quarter of the unit circle. $2\\pi$ is the whole circle, $\\pi$ is the half circle, and $\\frac{\\pi}{4}$ is the area of the quarter disk, not its arc.'
          },
          {
            label: 'If an arc length integral has no elementary antiderivative, on the AP exam you should:',
            options: ['Write the integral and evaluate with a calculator', 'Leave it as an integral with no numerical value', 'Approximate with a hand-computed Riemann sum', 'Find an antiderivative with a trig substitution'],
            correctAnswers: ['Write the integral and evaluate with a calculator'],
            hints: ['Show work = show the integral. Then use technology.'],
            explanation: 'Write $L = \\int_a^b \\sqrt{...}\\,dx$ explicitly, then state the calculator answer to 3 decimal places. This earns full credit. A hand Riemann sum is too rough, an unevaluated integral loses the answer point when a value is asked for, and no substitution yields an elementary antiderivative.'
          }
        ]
      }
    },
    {
      id: 'al7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'The arc length of $y = \\frac{x^2}{2}$ from $x = 0$ to $x = 1$ is $L = \\int_0^1 \\sqrt{1+x^2}\\,dx$. This integral needs a calculator on the AP exam. Evaluate it to three decimal places.',
        correctAnswer: '1.148',
        acceptableAnswers: ['1.148', '1.147', '1.15'],
        hints: ['$y\' = x$, so $1 + (y\')^2 = 1 + x^2$.', 'Enter $\\int_0^1 \\sqrt{1+x^2}\\,dx$ into a graphing calculator.'],
        explanation: '$L = \\int_0^1\\sqrt{1+x^2}\\,dx \\approx 1.148$. As a check, the arc is a little longer than the chord from $(0, 0)$ to $(1, 0.5)$, which has length $\\sqrt{1.25} \\approx 1.118$.'
      }
    },
    {
      id: 'al7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered arc length:
- Arc length for $y = f(x)$, $x = g(y)$, and parametric curves
- Distance traveled as the integral of speed
- Arc length functions and the Fundamental Theorem of Calculus
- Perfect-square curves by hand, everything else by calculator

$$\\boxed{L = \\int ds = \\int \\sqrt{dx^2 + dy^2}}$$

> **Up next:** Infinite Sequences — the foundation of series and convergence.`
    }
  ]
};
