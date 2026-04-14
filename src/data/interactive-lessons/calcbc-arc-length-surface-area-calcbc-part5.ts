export const calcbcArcLengthPart5Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al5-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area — Exam Strategies

**Part 5 of 7 — Choosing the Right Formula & AP Tips**

### Decision Tree

| Given | Use this $ds$ |
|-------|--------------|
| $y = f(x)$ | $\\sqrt{1+(f')^2}\\,dx$ |
| $x = g(y)$ | $\\sqrt{1+(g')^2}\\,dy$ |
| $x(t), y(t)$ | $\\sqrt{(x')^2+(y')^2}\\,dt$ |
| $r(\\theta)$ | $\\sqrt{r^2+(r')^2}\\,d\\theta$ |

### Common AP Patterns

1. **"Set up but do not evaluate"** — Write the complete integral with limits and integrand
2. **Calculator-required** — Write the integral, then give decimal to 3 places
3. **Perfect square** — $(y')^2$ is chosen so $1 + (y')^2$ is a perfect square
4. **Parametric motion** — Arc length = total distance; same integral

> **Scoring:** Setup points and computation points are awarded separately. A correct integral with a computation error still earns most credit.`
    },
    {
      id: 'al5-tricky',
      type: 'text' as const,
      content: `### Tricky Cases

**When $x = g(y)$:** Integrate with respect to $y$.

$y = \\ln x \\iff x = e^y$. Arc length from $y = 0$ to $y = 1$:

$$L = \\int_0^1 \\sqrt{1 + e^{2y}}\\,dy$$

This form may be easier than the $dx$ version.

**Piecewise curves:** Split into smooth segments and add lengths.

**Curves traversed multiple times:** A parametrization might trace a curve more than once. Check before integrating.

For example, $x = \\cos(2t)$, $y = \\sin(2t)$ from $0$ to $2\\pi$ traces the unit circle twice: total $= 4\\pi$, but the arc length of the circle itself is $2\\pi$.`
    },
    {
      id: 'al5-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For $y = \\cosh x$ from $x = 0$ to $x = 1$, what is $(y\')^2$?',
            options: ['$\\sinh^2 x$', '$\\cosh^2 x$', '$e^{2x}$', '$1$'],
            correctAnswer: 0,
            explanation: '$y\' = \\sinh x$, so $(y\')^2 = \\sinh^2 x$. Then $1 + \\sinh^2 x = \\cosh^2 x$ (hyperbolic identity), making this a perfect-square problem: $L = \\int_0^1 \\cosh x\\,dx = \\sinh 1$.'
          },
          {
            question: 'On the AP exam, which gives the MOST partial credit for an arc length problem?',
            options: ['Correct integrand and limits, even with algebra errors in evaluation', 'Numerical answer only (no work shown)', 'The formula $L = \\int ds$ without specifics', 'A sketch of the curve'],
            correctAnswer: 0,
            explanation: 'AP rubrics typically award 2-3 points for correct setup (integrand + limits) and 1-2 points for evaluation. Setup alone earns significant credit.'
          }
        ]
      }
    },
    {
      id: 'al5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: '$y = \\cosh x$ has the special property that $\\sqrt{1+(y\')^2} = $',
            options: ['$\\cosh x$ (simplifies perfectly)', '$\\sinh x$', '$e^x$', '$\\sqrt{2}\\cosh x$'],
            correctAnswers: ['$\\cosh x$ (simplifies perfectly)'],
            hints: ['$1 + \\sinh^2 x = ?$ (hyperbolic identity)'],
            explanation: '$1 + \\sinh^2 x = \\cosh^2 x$, so $\\sqrt{1 + (y\')^2} = \\cosh x$. The catenary is a "natural" arc length curve.'
          },
          {
            label: 'If a parametrization traces a curve $n$ times, $\\int_a^b ds$ gives:',
            options: ['$n$ times the arc length of the curve', 'The arc length of the curve', '$n^2$ times the arc length', 'An incorrect value'],
            correctAnswers: ['$n$ times the arc length of the curve'],
            hints: ['The integral measures total path length, counting repetitions.'],
            explanation: 'Each traversal contributes one copy of the curve\'s arc length. The integral does not "know" the curve repeats — it just adds up $ds$.'
          }
        ]
      }
    },
    {
      id: 'al5-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Find the arc length of $y = \\cosh x$ from $x = 0$ to $x = 1$. Since $\\sqrt{1 + \\sinh^2 x} = \\cosh x$, $L = \\int_0^1 \\cosh x\\,dx = \\sinh(1)$. What is $\\sinh(1)$ to two decimal places?',
        correctAnswer: '1.18',
        acceptableAnswers: ['1.18', '1.175', '1.1752', 'sinh(1)', 'sinh 1'],
        hints: ['$\\sinh x = \\frac{e^x - e^{-x}}{2}$.', '$\\sinh 1 = \\frac{e - e^{-1}}{2} \\approx \\frac{2.718 - 0.368}{2}$.'],
        explanation: '$\\sinh(1) = \\frac{e - 1/e}{2} = \\frac{2.71828 - 0.36788}{2} \\approx 1.1752 \\approx 1.18$.'
      }
    },
    {
      id: 'al5-summary',
      type: 'text' as const,
      content: `### Summary

- Choose $ds$ based on how the curve is given (Cartesian, parametric, polar)
- Perfect-square problems are designed for hand computation
- Multiple traversals multiply the arc length
- On the AP exam: show setup first, then evaluate

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
