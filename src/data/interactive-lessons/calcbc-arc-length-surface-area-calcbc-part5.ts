export const calcbcArcLengthPart5Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al5-intro',
      type: 'text' as const,
      content: `# Arc Length — Exam Strategies

**Part 5 of 7 — Choosing the Right Formula & AP Tips**

### Decision Tree

| Given | Use this $ds$ |
|-------|--------------|
| $y = f(x)$ | $\\sqrt{1+(f')^2}\\,dx$ |
| $x = g(y)$ | $\\sqrt{1+(g')^2}\\,dy$ |
| $x(t), y(t)$ | $\\sqrt{(x')^2+(y')^2}\\,dt$ |

Polar curves on the AP exam ask for slopes and area, not arc length, and surface area of revolution is not tested.

### Common AP Patterns

1. **"Set up but do not evaluate"** — Write the complete integral with limits and integrand
2. **Calculator-required** — Write the integral, then give decimal to 3 places
3. **Perfect square** — $(y')^2$ is chosen so $1 + (y')^2$ is a perfect square
4. **Parametric motion** — Arc length = total distance; same integral

> **Scoring:** In AP scoring guidelines an arc length or distance part is typically worth 2 points: one for a correct integral (integrand and limits) and one for the answer, reported to three decimal places. A correct integral earns its point even if the evaluation goes wrong.`
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
            question: 'For $y = \\frac{x^2}{8} - \\ln x$, the expression $1 + (y\')^2$ equals:',
            options: ['$\\left(\\frac{x}{4} - \\frac{1}{x}\\right)^2$', '$\\left(\\frac{x}{4} + \\frac{1}{x}\\right)^2$', '$1 + \\frac{x^2}{16} + \\frac{1}{x^2}$', '$\\frac{x^2}{16} + \\frac{1}{x^2}$'],
            correctAnswer: 1,
            explanation: '$y\' = \\frac{x}{4} - \\frac{1}{x}$, so $(y\')^2 = \\frac{x^2}{16} - \\frac{1}{2} + \\frac{1}{x^2}$ and adding $1$ flips the middle sign: $\\left(\\frac{x}{4} + \\frac{1}{x}\\right)^2$. The other choices are $(y\')^2$ itself, a version that drops the cross term, and the sum of squares with the $\\frac{1}{2}$ lost.'
          },
          {
            question: 'On the AP exam, which gives the MOST partial credit for an arc length problem?',
            options: ['Correct integrand and correct limits', 'A numerical answer only, with no supporting work', 'The general formula $L = \\int ds$ with no specifics', 'A labeled sketch of the curve and its endpoints'],
            correctAnswer: 0,
            explanation: 'Scoring guidelines usually give one point for a correct definite integral (integrand and limits) and one for the answer, so the setup point is earned even if the evaluation goes wrong. A bare number earns nothing without the supporting integral, and a generic formula or a sketch does not show the specific integral.'
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
            label: 'For $y = \\ln x$ from $x = 1$ to $x = e$, rewriting the curve as $x = e^y$ gives $L =$',
            options: ['$\\int_1^e \\sqrt{1 + e^{2y}}\\,dy$', '$\\int_0^1 \\sqrt{1 + e^{y}}\\,dy$', '$\\int_0^1 \\sqrt{1 + e^{2y}}\\,dy$', '$\\int_0^1 (1 + e^{2y})\\,dy$'],
            correctAnswers: ['$\\int_0^1 \\sqrt{1 + e^{2y}}\\,dy$'],
            hints: ['$x$ runs from $1$ to $e$, so $y = \\ln x$ runs from $0$ to $1$.'],
            explanation: 'With $x = e^y$, $dx/dy = e^y$, and the $y$-limits are $\\ln 1 = 0$ and $\\ln e = 1$, so $L = \\int_0^1\\sqrt{1 + e^{2y}}\\,dy \\approx 2.003$, matching $\\int_1^e\\sqrt{1 + 1/x^2}\\,dx$. Keeping the $x$-limits, forgetting to square $e^y$, or dropping the square root are the usual slips.'
          },
          {
            label: 'If a parametrization traces a curve $n$ times, $\\int_a^b ds$ gives:',
            options: ['$n$ times the arc length of the curve', 'The arc length of the curve, counted once', '$n^2$ times the arc length of the curve', 'Zero, since the path ends where it started'],
            correctAnswers: ['$n$ times the arc length of the curve'],
            hints: ['The integral measures total path length, counting repetitions.'],
            explanation: 'Each traversal contributes one copy of the curve\'s arc length. The integral does not know the curve repeats — it just adds up $ds \\ge 0$. Only displacement cancels when the path returns to its start; arc length never does.'
          }
        ]
      }
    },
    {
      id: 'al5-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Find the arc length of $y = \\frac{x^2}{8} - \\ln x$ from $x = 1$ to $x = 4$. Give the answer to three decimal places.',
        correctAnswer: '3.261',
        acceptableAnswers: ['3.261', '3.26', '15/8 + ln 4', '15/8+ln4'],
        hints: ['$1 + (y\')^2 = \\left(\\frac{x}{4} + \\frac{1}{x}\\right)^2$.', '$L = \\int_1^4 \\left(\\frac{x}{4} + \\frac{1}{x}\\right)dx = \\left[\\frac{x^2}{8} + \\ln x\\right]_1^4$.'],
        explanation: '$L = \\left(2 + \\ln 4\\right) - \\left(\\frac{1}{8} + 0\\right) = \\frac{15}{8} + \\ln 4 \\approx 1.875 + 1.386 = 3.261$.'
      }
    },
    {
      id: 'al5-summary',
      type: 'text' as const,
      content: `### Summary

- Choose $ds$ based on how the curve is given ($y = f(x)$, $x = g(y)$, or parametric)
- Perfect-square problems are designed for hand computation
- Multiple traversals multiply the arc length
- On the AP exam: show setup first, then evaluate

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
