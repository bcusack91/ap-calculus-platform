export const calcbcEulerPart1Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler1-intro',
      type: 'text' as const,
      content: `# Euler's Method — Foundations

**Part 1 of 7 — Numerical Approximation of Differential Equations**

### Why Euler's Method?

Many differential equations cannot be solved analytically. Euler's method gives a numerical approximation of the solution using tangent-line steps.

### The Core Idea

Given $\\frac{dy}{dx} = f(x, y)$ with initial condition $(x_0, y_0)$:

$$\\boxed{y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x}$$

Each step:
1. Evaluate the slope at the current point: $m = f(x_n, y_n)$
2. Step forward: $x_{n+1} = x_n + \\Delta x$
3. Update $y$: $y_{n+1} = y_n + m \\cdot \\Delta x$

### Visual Interpretation

You're walking along tangent lines, taking small steps. Each step uses the slope at the current point — NOT the slope at the destination.

| Step | $x_n$ | $y_n$ | $f(x_n, y_n)$ | $\\Delta y = f \\cdot \\Delta x$ | $y_{n+1}$ |
|------|--------|--------|----------------|------|-----------|
| 0 | $x_0$ | $y_0$ | $f(x_0, y_0)$ | — | — |
| 1 | $x_0 + \\Delta x$ | $y_0 + f \\cdot \\Delta x$ | ... | ... | ... |

> **Key Fact:** Each step follows a tangent line, so the error comes from how much the solution curve bends away from that line during the step. Smaller steps follow the curve more closely.`
    },
    {
      id: 'euler1-example',
      type: 'text' as const,
      content: `### Worked Example

$\\frac{dy}{dx} = x + y$, $y(0) = 1$, $\\Delta x = 0.1$. Approximate $y(0.3)$.

| Step | $x_n$ | $y_n$ | $f = x_n + y_n$ | $\\Delta y$ | $y_{n+1}$ |
|------|--------|--------|-----------------|-----------|-----------|
| 0→1 | 0 | 1 | 1 | 0.1 | 1.1 |
| 1→2 | 0.1 | 1.1 | 1.2 | 0.12 | 1.22 |
| 2→3 | 0.2 | 1.22 | 1.42 | 0.142 | 1.362 |

$$\\boxed{y(0.3) \\approx 1.362}$$

### Step Size Matters

| $\\Delta x$ | Approximation of $y(1)$ | Actual = $2e - 2 \\approx 3.437$ |
|------------|------------------------|----------------------------------|
| 0.5 | 2.5 | Error ≈ 27% |
| 0.1 | 3.187 | Error ≈ 7.2% |
| 0.01 | 3.410 | Error ≈ 0.8% |

Smaller step size → better approximation (but more computation).`
    },
    {
      id: 'euler1-mc1',
      type: 'multiple-choice' as const,
      content: '**Euler\'s Method Basics**',
      exercise: {
        questions: [
          {
            question: '$\\frac{dy}{dx} = 2x$, $y(1) = 3$, $\\Delta x = 0.5$. What is $y(1.5)$?',
            options: ['$y = 3 + 2(1)(0.5) = 4$', '$y = 3 + 2(1.5)(0.5) = 4.5$', '$y = 3 + 2(1) = 5$', '$y = 2(1)(0.5) = 1$'],
            correctAnswer: 0,
            explanation: 'Slope at $(1, 3)$: $f(1, 3) = 2(1) = 2$. $y(1.5) = 3 + 2(0.5) = 4$. Using the slope at $x = 1.5$ gives $4.5$, dropping $\\Delta x$ gives $5$, and dropping $y_0 = 3$ gives $1$.'
          },
          {
            question: 'In Euler\'s method, the slope used at each step is evaluated at:',
            options: ['The start of the step, $(x_n, y_n)$', 'The end of the step, $(x_{n+1}, y_{n+1})$', 'The midpoint of the step, $x_n + \\Delta x/2$', 'The average of the slopes at both ends'],
            correctAnswer: 0,
            explanation: 'Euler\'s method uses the slope at the current point $(x_n, y_n)$, not the destination.'
          },
          {
            question: 'Which change usually makes an Euler approximation of $y(1)$ more accurate?',
            options: ['A smaller step size $\\Delta x$', 'A larger step size $\\Delta x$ with fewer steps', 'The slope at the end of each step', 'Rounding each $y_n$ to one decimal place'],
            correctAnswer: 0,
            explanation: 'Smaller steps keep each tangent-line segment closer to the curve, as the table above shows ($27\\%$ error at $\\Delta x = 0.5$ versus under $1\\%$ at $\\Delta x = 0.01$). Larger steps drift farther from the curve, using the end-of-step slope is no longer Euler\'s method, and rounding intermediate values adds error instead of removing it.'
          }
        ]
      }
    },
    {
      id: 'euler1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Step-by-Step Practice**',
      exercise: {
        dropdowns: [
          {
            label: '$dy/dx = y$, $y(0) = 1$, $\\Delta x = 0.5$. The slope at $(0, 1)$ is:',
            options: ['$f(0, 1) = 1$', '$f(0, 1) = 0$', '$f(0, 1) = 0.5$', '$f(0, 1) = 2$'],
            correctAnswers: ['$f(0, 1) = 1$'],
            hints: ['$f(x, y) = y$, so $f(0, 1) = 1$.'],
            explanation: 'The slope equals $y = 1$ at the initial point.'
          },
          {
            label: 'Continuing: $y(0.5) = 1 + 1 \\cdot 0.5 = 1.5$. The slope at $(0.5, 1.5)$ is:',
            options: ['$f(0.5, 1.5) = 1.5$', '$f(0.5, 1.5) = 0.5$', '$f(0.5, 1.5) = 2$', '$f(0.5, 1.5) = 1$'],
            correctAnswers: ['$f(0.5, 1.5) = 1.5$'],
            hints: ['$f(x, y) = y$, so $f(0.5, 1.5) = 1.5$.'],
            explanation: '$f = y = 1.5$ at $(0.5, 1.5)$.'
          },
          {
            label: 'So $y(1) \\approx$:',
            options: ['$1.5 + 1.5(0.5) = 2.25$', '$1.5 + 1(0.5) = 2.0$', '$1.5 + 1.5(1) = 3$', '$1.5 + 0.5(0.5) = 1.75$'],
            correctAnswers: ['$1.5 + 1.5(0.5) = 2.25$'],
            hints: ['$y(1) = y(0.5) + f(0.5, 1.5) \\cdot 0.5 = 1.5 + 1.5(0.5)$.'],
            explanation: '$y(1) \\approx 2.25$. The exact answer is $e \\approx 2.718$, so the approximation undershoots (concave up curve).'
          }
        ]
      }
    },
    {
      id: 'euler1-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: '$dy/dx = x - y$, $y(0) = 2$, $\\Delta x = 0.1$. Compute $y(0.1)$. Enter your answer as a decimal.',
        correctAnswer: '1.8',
        acceptableAnswers: ['1.8', '1.80'],
        hints: ['Slope at $(0, 2)$: $f(0, 2) = 0 - 2 = -2$. $y(0.1) = 2 + (-2)(0.1)$.'],
        explanation: '$f(0, 2) = 0 - 2 = -2$. $y(0.1) = 2 + (-2)(0.1) = 2 - 0.2 = 1.8$.'
      }
    },
    {
      id: 'euler1-summary',
      type: 'text' as const,
      content: `### Summary

- Euler's method: $y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x$
- Uses tangent-line approximation at each step
- Smaller $\\Delta x$ → better accuracy but more steps
- The direction of the error depends on concavity (Part 3)

> **Next:** Part 2 — Multi-Step Computations and Table Problems.`
    }
  ]
};
