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

> **Key Fact:** Euler's method is a first-order method — the error per step is proportional to $(\\Delta x)^2$, and the global error is proportional to $\\Delta x$.`
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

| $\\Delta x$ | Approximation of $y(1)$ | Actual = $2e - 1 \\approx 4.437$ |
|------------|------------------------|----------------------------------|
| 0.5 | 3.5 | Error ≈ 21% |
| 0.1 | 4.187 | Error ≈ 5.6% |
| 0.01 | 4.411 | Error ≈ 0.6% |

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
            options: ['$y = 3 + 2(1)(0.5) = 4$', '$y = 3 + 2(1.5)(0.5) = 4.5$', '$y = 3 + 2(0.5) = 4$', '$y = 3 + 1 = 4$'],
            correctAnswer: 0,
            explanation: 'Slope at $(1, 3)$: $f(1, 3) = 2(1) = 2$. $y(1.5) = 3 + 2(0.5) = 4$.'
          },
          {
            question: 'In Euler\'s method, the slope used at each step is evaluated at:',
            options: ['The beginning of the step (current point)', 'The end of the step', 'The midpoint of the step', 'The average of beginning and end'],
            correctAnswer: 0,
            explanation: 'Euler\'s method uses the slope at the current point $(x_n, y_n)$, not the destination.'
          },
          {
            question: 'If $\\Delta x$ is halved, the global error approximately:',
            options: ['Halves (error is proportional to $\\Delta x$)', 'Quarters', 'Stays the same', 'Doubles'],
            correctAnswer: 0,
            explanation: 'Euler\'s method has first-order global error: $E \\propto \\Delta x$.'
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
            options: ['$1.5 + 1.5(0.5) = 2.25$', '$1.5 + 1(0.5) = 2.0$', '$1 + 1.5(0.5) = 1.75$', '$1.5 + 0.5(0.5) = 1.75$'],
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
- First-order method: global error $\\propto \\Delta x$

> **Next:** Part 2 — Multi-Step Computations and Table Problems.`
    }
  ]
};
