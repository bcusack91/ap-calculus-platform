export const calcbcEulerPart3Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler3-intro',
      type: 'text' as const,
      content: `# Over- and Under-Estimates

**Part 3 of 7 — Concavity Determines Error Direction**

### The Key Principle

$$\\boxed{\\text{Concave up} \\Rightarrow \\text{Euler underestimates}}$$
$$\\boxed{\\text{Concave down} \\Rightarrow \\text{Euler overestimates}}$$

### Why?

Euler's method follows the tangent line. If the curve is:
- **Concave up** ($y'' > 0$): the curve bends ABOVE the tangent → tangent-line values are too LOW
- **Concave down** ($y'' < 0$): the curve bends BELOW the tangent → tangent-line values are too HIGH

### How to Determine Concavity

Given $dy/dx = f(x, y)$, differentiate the right side with respect to $x$, treating $y$ as a function of $x$ (so every $y$ term picks up a factor $\\frac{dy}{dx}$ by the chain rule). Then substitute the DE for $\\frac{dy}{dx}$.

**Example:** $\\frac{dy}{dx} = x + y^2$

$$\\frac{d^2y}{dx^2} = 1 + 2y\\frac{dy}{dx} = 1 + 2y(x + y^2)$$

| If $d^2y/dx^2$ on the interval | Then Euler... |
|----------------|---------------|
| $> 0$ (concave up) | Underestimates |
| $< 0$ (concave down) | Overestimates |

> **AP Tip:** The AP exam frequently asks "Is your Euler approximation an overestimate or underestimate? Justify." You MUST explain using concavity.`
    },
    {
      id: 'euler3-example',
      type: 'text' as const,
      content: `### Example 1

$dy/dx = y$, $y(0) = 1$. Is Euler's method an overestimate or underestimate on $[0, 1]$?

**Solution:** $y = e^x$, so $y'' = e^x > 0$. Concave up → **underestimate**.

Verification: With $\\Delta x = 1$, Euler gives $y(1) = 1 + 1(1) = 2$. Actual: $e \\approx 2.718$. Indeed $2 < 2.718$. ✓

### Example 2

$dy/dx = -y$, $y(0) = 1$. Is Euler's method an overestimate or underestimate on $[0, 1]$?

**Solution:** $y = e^{-x}$, so $y'' = e^{-x} > 0$. Concave up → **underestimate**.

But wait — the function is DECREASING. "Underestimate" means Euler's values are BELOW the actual curve.

With $\\Delta x = 1$: Euler gives $y(1) = 1 + (-1)(1) = 0$. Actual: $e^{-1} \\approx 0.368$. Indeed $0 < 0.368$. ✓

### Key Insight

"Overestimate/underestimate" refers to the $y$-values, not the behavior. A decreasing, concave-up function is still underestimated by Euler.`
    },
    {
      id: 'euler3-mc1',
      type: 'multiple-choice' as const,
      content: '**Over/Under Practice**',
      exercise: {
        questions: [
          {
            question: '$dy/dx = \\sqrt{y}$, $y(0) = 4$. Then $y\'\' = \\frac{1}{2\\sqrt{y}} \\cdot \\frac{dy}{dx} = \\frac{1}{2\\sqrt{y}} \\cdot \\sqrt{y} = \\frac{1}{2}$. Since $y\'\' > 0$, Euler\'s method:',
            options: ['Underestimates the true solution', 'Overestimates the true solution', 'Gives the exact solution', 'Cannot determine without step size'],
            correctAnswer: 0,
            explanation: '$y\'\' > 0$ means concave up, so the tangent line lies below the curve. Euler underestimates.'
          },
          {
            question: '$dy/dx = \\cos x$, $y(0) = 0$, estimating $y(\\pi/2)$ with $\\Delta x = \\pi/4$. Since $y = \\sin x$ and $y\'\' = -\\sin x < 0$ on $(0, \\pi)$:',
            options: ['Euler overestimates', 'Euler underestimates', 'Euler is exact', 'Error direction changes'],
            correctAnswer: 0,
            explanation: 'Concave down on $(0, \\pi)$ → tangent line is above the curve → overestimate.'
          },
          {
            question: 'On an AP FRQ, which justification earns full credit for "Is your approximation an overestimate?"',
            options: ['"Since $d^2y/dx^2 < 0$ on the interval, the solution is concave down, so Euler overestimates."', '"Since $dy/dx > 0$ on the interval, the solution is increasing, so Euler overestimates."', '"Since $\\Delta x$ is large, the tangent steps drift off the curve, so Euler overestimates."', '"Since the tangent lines lie below the curve, Euler overestimates."'],
            correctAnswer: 0,
            explanation: 'Full credit requires the sign of the second derivative on the interval, the resulting concavity, and the link to over/underestimate. The sign of $dy/dx$ and the size of $\\Delta x$ do not set the direction of the error, and tangent lines below the curve would mean an underestimate.'
          }
        ]
      }
    },
    {
      id: 'euler3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concavity Analysis**',
      exercise: {
        dropdowns: [
          {
            label: '$dy/dx = x^2 + 1$, $y(0) = 0$. Then $y\'\' =$',
            options: ['$2x$', '$x^2 + 1$', '$2$', '$0$'],
            correctAnswers: ['$2x$'],
            hints: ['$y\' = x^2 + 1$, so $y\'\' = 2x$.'],
            explanation: '$y\'\' = 2x$.'
          },
          {
            label: 'On $(0, 1)$, $y\'\' = 2x > 0$, so Euler:',
            options: ['Underestimates (concave up)', 'Overestimates (solution increasing)', 'Is exact ($y\'$ is a polynomial)', 'Cannot tell without $\\Delta x$'],
            correctAnswers: ['Underestimates (concave up)'],
            hints: ['Concave up → tangent is below → underestimate.'],
            explanation: 'Concave up on $(0,1)$ → Euler underestimates. An increasing solution does not by itself set the error direction, and $\\Delta x$ changes only the size of the error.'
          }
        ]
      }
    },
    {
      id: 'euler3-input',
      type: 'input-box' as const,
      content: '**Analyze**',
      exercise: {
        question: '$dy/dx = -2y$, $y(0) = 3$. The exact solution is $y = 3e^{-2x}$, so $y\'\' = 12e^{-2x}$. Is Euler an overestimate or underestimate on $[0, 1]$? Enter "over" or "under".',
        correctAnswer: 'under',
        acceptableAnswers: ['under', 'underestimate', 'underestimates'],
        hints: ['$y\'\' = 12e^{-2x} > 0$ for all $x$. Concave up.'],
        explanation: '$y\'\' > 0$ → concave up → Euler underestimates the true $y$-values.'
      }
    },
    {
      id: 'euler3-summary',
      type: 'text' as const,
      content: `### Summary

- Concave up ($y'' > 0$) → Euler underestimates
- Concave down ($y'' < 0$) → Euler overestimates
- Find $y''$ by differentiating $f(x,y)$ with respect to $x$
- AP FRQs require concavity justification, not just the answer

> **Next:** Part 4 — Euler's Method with Slope Fields.`
    }
  ]
};
