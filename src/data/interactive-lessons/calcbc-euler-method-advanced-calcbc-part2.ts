export const calcbcEulerPart2Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler2-intro',
      type: 'text' as const,
      content: `# Multi-Step Computations

**Part 2 of 7 — Table Problems and Extended Calculations**

### AP Table Format

The AP exam often presents Euler's method as a table to fill in:

| $n$ | $x_n$ | $y_n$ | $dy/dx = f(x_n, y_n)$ | $\\Delta y = f \\cdot \\Delta x$ |
|-----|--------|--------|----------------------|------|
| 0 | given | given | compute | compute |
| 1 | update | update | compute | compute |
| ... | ... | ... | ... | ... |

### Systematic Approach

For $\\frac{dy}{dx} = 2x - y$, $y(0) = 1$, $\\Delta x = 0.2$, approximate $y(0.6)$:

| $n$ | $x_n$ | $y_n$ | $f = 2x_n - y_n$ | $\\Delta y$ | $y_{n+1}$ |
|-----|--------|--------|-------------------|-----------|-----------|
| 0 | 0 | 1 | $-1$ | $-0.2$ | 0.8 |
| 1 | 0.2 | 0.8 | $-0.4$ | $-0.08$ | 0.72 |
| 2 | 0.4 | 0.72 | $0.08$ | $0.016$ | 0.736 |

$$\\boxed{y(0.6) \\approx 0.736}$$

> **AP Tip:** On FRQs, show ALL columns of the table. Partial credit is available for correct intermediate steps even if the final answer is wrong.`
    },
    {
      id: 'euler2-nonlinear',
      type: 'text' as const,
      content: `### Nonlinear ODE Example

$\\frac{dy}{dx} = y^2 - x$, $y(1) = 0$, $\\Delta x = 0.25$. Approximate $y(1.75)$.

| $n$ | $x_n$ | $y_n$ | $f = y_n^2 - x_n$ | $\\Delta y$ | $y_{n+1}$ |
|-----|--------|--------|-------------------|-----------|-----------|
| 0 | 1 | 0 | $-1$ | $-0.25$ | $-0.25$ |
| 1 | 1.25 | $-0.25$ | $-1.1875$ | $-0.2969$ | $-0.5469$ |
| 2 | 1.5 | $-0.5469$ | $-1.2011$ | $-0.3003$ | $-0.8472$ |

$$\\boxed{y(1.75) \\approx -0.847}$$

### Common Mistakes

| Mistake | How to avoid |
|---------|-------------|
| Using $x_{n+1}$ for slope | Always use the LEFT point $(x_n, y_n)$ |
| Forgetting to update $y$ | $y_{n+1} = y_n + \\Delta y$, not $y_0 + \\sum \\Delta y$ |
| Rounding too early | Keep 3–4 decimal places throughout |
| Wrong sign on $\\Delta y$ | $\\Delta y$ can be negative (slope is negative) |`
    },
    {
      id: 'euler2-mc1',
      type: 'multiple-choice' as const,
      content: '**Multi-Step Practice**',
      exercise: {
        questions: [
          {
            question: '$dy/dx = xy$, $y(0) = 1$, $\\Delta x = 0.1$. After TWO steps of Euler\'s method, $y(0.2) \\approx$:',
            options: ['$1.01$ (step 1: $y = 1$; step 2: $y = 1 + 0.01(0.1) = 1.01$)', '$1.1$', '$1.0$', '$1.02$'],
            correctAnswer: 0,
            explanation: 'Step 1: $f(0,1) = 0$, $y(0.1) = 1 + 0(0.1) = 1$. Step 2: $f(0.1, 1) = 0.1$, $y(0.2) = 1 + 0.1(0.1) = 1.01$.'
          },
          {
            question: 'When an FRQ says "use Euler\'s method with two steps of equal size to approximate $y(1)$ given $y(0) = 2$," what is $\\Delta x$?',
            options: ['$0.5$', '$1$', '$0.25$', '$2$'],
            correctAnswer: 0,
            explanation: 'Two equal steps from $x = 0$ to $x = 1$: $\\Delta x = (1 - 0)/2 = 0.5$.'
          }
        ]
      }
    },
    {
      id: 'euler2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Table Completion**\n\n$dy/dx = 1 + y$, $y(0) = 0$, $\\Delta x = 0.5$',
      exercise: {
        dropdowns: [
          {
            label: 'Step 1: $f(0, 0) = 1 + 0 = 1$. So $y(0.5) =$',
            options: ['$0 + 1(0.5) = 0.5$', '$0 + 1 = 1$', '$0 + 0.5 = 0.5$', '$1 + 0.5 = 1.5$'],
            correctAnswers: ['$0 + 1(0.5) = 0.5$'],
            hints: ['$y_{n+1} = y_n + f \\cdot \\Delta x = 0 + 1(0.5)$.'],
            explanation: '$y(0.5) = 0 + 1 \\cdot 0.5 = 0.5$.'
          },
          {
            label: 'Step 2: $f(0.5, 0.5) = 1.5$. So $y(1) =$',
            options: ['$0.5 + 1.5(0.5) = 1.25$', '$0.5 + 1.5 = 2$', '$0 + 1.5(0.5) = 0.75$', '$1.5 + 0.5 = 2$'],
            correctAnswers: ['$0.5 + 1.5(0.5) = 1.25$'],
            hints: ['$y(1) = y(0.5) + f(0.5, 0.5) \\cdot \\Delta x = 0.5 + 1.5(0.5)$.'],
            explanation: '$y(1) \\approx 1.25$. (Exact: $e - 1 \\approx 1.718$, so big step undershoots.)'
          }
        ]
      }
    },
    {
      id: 'euler2-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: '$dy/dx = 3 - y$, $y(0) = 1$, $\\Delta x = 0.1$. Compute $y(0.2)$ using two Euler steps. Enter your answer as a decimal.',
        correctAnswer: '1.38',
        acceptableAnswers: ['1.38', '1.380'],
        hints: ['Step 1: $f(0,1) = 2$, $y(0.1) = 1 + 2(0.1) = 1.2$. Step 2: $f(0.1, 1.2) = 1.8$, $y(0.2) = 1.2 + 1.8(0.1)$.'],
        explanation: 'Step 1: $y(0.1) = 1 + 2(0.1) = 1.2$. Step 2: $f = 3 - 1.2 = 1.8$, $y(0.2) = 1.2 + 0.18 = 1.38$.'
      }
    },
    {
      id: 'euler2-summary',
      type: 'text' as const,
      content: `### Summary

- Organize multi-step computations in a table
- Always compute slope at the CURRENT point
- Keep sufficient decimal precision
- Show all work on FRQs for partial credit

> **Next:** Part 3 — Over- and Under-Estimates.`
    }
  ]
};
