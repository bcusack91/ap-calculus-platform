export const calcbcReviewPart3Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc3-intro',
      type: 'text' as const,
      content: `# Differential Equations and Modeling

**Part 3 of 7 — How DEs Connect to Everything**

### The DE Ecosystem

| DE type | Form | Solution method | Example |
|---------|------|----------------|---------|
| Separable | $dy/dx = g(x)h(y)$ | Separate and integrate both sides | $dy/dx = xy$ |
| Exponential growth/decay | $dy/dt = ky$ | $y = Ce^{kt}$ | Radioactive decay |
| Logistic | $dP/dt = kP(1-P/L)$ | Interpret, no solving: $P \\to L$; fastest growth at $P = L/2$ | Population models |
| General | $dy/dx = f(x,y)$ | Euler's method (numerical) | Complex models |

> **Key Insight:** Every integral is really solving the DE $dy/dx = f(x)$. Integration IS differential equations.`
    },
    {
      id: 'rc3-connections',
      type: 'text' as const,
      content: `### Connections to Other Topics

**DEs ↔ Slope Fields:** A slope field visualizes $dy/dx = f(x,y)$ at every point. Solution curves follow the field.

**DEs ↔ Series:** If $y' = y$ and $y(0) = 1$, the Taylor series approach gives:
> $y(0) = 1$, $y'(0) = 1$, $y''(0) = 1$, ...
> $y = 1 + x + x^2/2 + x^3/6 + \\cdots = e^x$ ✓

**DEs ↔ Euler's Method:** When you can't solve analytically, Euler's method approximates step by step using $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$.

**DEs ↔ Accumulation:** FTC says $y = y(a) + \\int_a^x f(t)\\,dt$ solves $y' = f(x)$ with initial condition $y(a)$.`
    },
    {
      id: 'rc3-mc',
      type: 'multiple-choice' as const,
      content: '**Connection Questions**',
      exercise: {
        questions: [
          {
            question: 'Written with the Fundamental Theorem of Calculus, the solution to $dy/dx = 2x$ with $y(0) = 5$ is:',
            options: ['$y = 5 + \\int_0^x 2t\\,dt$', '$y = \\int_0^x 2t\\,dt$', '$y = 5 + \\int_5^x 2t\\,dt$', '$y = 5 + 2x$'],
            correctAnswer: 0,
            explanation: '$y(x) = y(0) + \\int_0^x y\'(t)\\,dt = 5 + x^2$, which matches separation of variables ($y = x^2 + C$, $C = 5$). Leaving out the 5 forces $y(0) = 0$, starting the integral at 5 mixes up the initial $y$-value with the initial $x$-value, and $5 + 2x$ uses the value of the derivative instead of accumulating it.'
          },
          {
            question: 'An Euler\'s method approximation with smaller step size $h$ is generally:',
            options: ['More accurate, but it takes more steps', 'Less accurate, because rounding error builds up over more steps', 'Exactly the same, since the slope field does not change', 'Less accurate, because each step uses a smaller slope'],
            correctAnswer: 0,
            explanation: 'Smaller $h$ means more steps but a better approximation, because each tangent-line step stays closer to the curve. The slope used at each step depends on the point, not on $h$, and rounding error is negligible at AP step sizes.'
          },
          {
            question: 'The logistic equation $dP/dt = 0.3P(1 - P/500)$ has equilibria at:',
            options: ['$P = 0$ and $P = 500$', '$P = 0$ only', '$P = 500$ only', '$P = 0.3$ and $P = 500$'],
            correctAnswer: 0,
            explanation: 'Set $dP/dt = 0$: $P = 0$ or $1 - P/500 = 0 \\Rightarrow P = 500$. Two equilibrium solutions: $P = 0$ and $P = 500$, and any positive starting population tends to $500$.'
          }
        ]
      }
    },
    {
      id: 'rc3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Approach**',
      exercise: {
        dropdowns: [
          {
            label: '"Use Euler\'s method with $h = 0.1$ to approximate $y(0.3)$." This problem is:',
            options: ['Numerical DE solving — iterate 3 steps', 'Analytical integration — solve the DE exactly', 'Series expansion — use a Taylor polynomial', 'Slope field sketching — read off the value'],
            correctAnswers: ['Numerical DE solving — iterate 3 steps'],
            hints: ['$h = 0.1$ with $0.3 - 0 = 0.3$ means 3 steps.'],
            explanation: 'From $x = 0$ to $x = 0.3$ with $h = 0.1$: 3 Euler steps. Compute $y_{n+1} = y_n + 0.1 \\cdot f(x_n, y_n)$ three times.'
          },
          {
            label: '"Write the first four nonzero terms of the Taylor series for the solution of $y\' = y + x$, $y(0) = 1$." This requires:',
            options: ['Computing successive derivatives at $x = 0$', 'Separating the variables, then expanding $y$', 'Using Euler\'s method with $h = 0.1$', 'Finding the interval of convergence'],
            correctAnswers: ['Computing successive derivatives at $x = 0$'],
            hints: ['$y\'(0) = y(0) + 0 = 1$, $y\'\' = y\' + 1$, etc.'],
            explanation: '$y(0) = 1$, $y\'(0) = 1 + 0 = 1$, $y\'\'(0) = y\'(0) + 1 = 2$, $y\'\'\'(0) = y\'\'(0) + 0 = 2$. Series: $1 + x + x^2 + x^3/3 + \\cdots$.'
          }
        ]
      }
    },
    {
      id: 'rc3-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Solve: $dy/dx = 3x^2$, $y(1) = 4$. Find $y(2)$.',
        correctAnswer: '11',
        acceptableAnswers: ['11', '11.0'],
        hints: ['Integrate: $y = x^3 + C$. Use $y(1) = 4$ to find $C$.'],
        explanation: '$y = x^3 + C$. $4 = 1 + C \\Rightarrow C = 3$. $y(2) = 8 + 3 = 11$.'
      }
    },
    {
      id: 'rc3-summary',
      type: 'text' as const,
      content: `### DE Connections

- Integration = simplest DE ($y' = f(x)$)
- Slope fields = visual representation of any DE
- Euler's method = numerical approximation
- Taylor series = analytical approximation from initial values
- Logistic models = most complex BC-level DE

**Next: Part 4 — Convergence and Series Big Picture**`
    }
  ]
};
