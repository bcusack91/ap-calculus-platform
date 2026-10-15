export const calcabDiffEqPart6Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de6-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 6 of 7 — Problem-Solving Workshop**

### AP FRQ Strategy Guide

| Problem Type | What to Do |
|:---:|:---:|
| "Find the particular solution" | Separate, integrate, apply IC, solve for $y$ |
| "Sketch solution on slope field" | Follow slope segments smoothly from given point |
| "Find equilibrium solutions" | Set $dy/dx = 0$, solve for $y$ |
| "Determine stability" | Check sign of $dy/dx$ near equilibrium |
| "Rate proportional to..." | Set up $dy/dt = ky$ or variant |
| "Approximate $f(1.2)$" | Tangent line at the known point, slope from the DE |
| "Is it an over- or underestimate?" | Sign of $d^2y/dx^2$, found from the DE |`
    },
    {
      id: 'de6-tangent',
      type: 'text' as const,
      content: `### Tangent-Line Approximation of a Solution

Even when you are not asked to solve a DE, it gives the slope of the solution at every point. So you can write the tangent line at the known point and use it to estimate nearby values.

$$\\boxed{y \\approx y_0 + \\left.\\frac{dy}{dx}\\right|_{(x_0,\\,y_0)}(x - x_0)}$$

**Example:** Let $y = f(x)$ be the particular solution to $\\frac{dy}{dx} = x(y - 1)$ with $f(1) = 3$. Approximate $f(1.2)$.

| Step | Work |
|:---:|:---:|
| Slope at $(1, 3)$ | $\\frac{dy}{dx} = 1(3 - 1) = 2$ |
| Tangent line | $y = 3 + 2(x - 1)$ |
| Estimate | $f(1.2) \\approx 3 + 2(0.2) = 3.4$ |

### Over or Under? Find $\\frac{d^2y}{dx^2}$ from the DE

Differentiate the DE with respect to $x$ (remember that $y$ is a function of $x$), then substitute the DE for $\\frac{dy}{dx}$:

$$\\frac{d^2y}{dx^2} = (y - 1) + x\\frac{dy}{dx} = (y - 1) + x \\cdot x(y - 1) = (y - 1)(1 + x^2)$$

At $(1, 3)$: $\\frac{d^2y}{dx^2} = (2)(2) = 4 > 0$. In fact $(y - 1)(1 + x^2) > 0$ whenever $y > 1$, so the solution is concave up near $x = 1$ and its tangent line lies below the curve. The estimate $3.4$ is an **underestimate**. (Separating variables gives $f(x) = 1 + 2e^{(x^2 - 1)/2}$, so $f(1.2) \\approx 3.492$, which confirms it.)

| Sign of $\\frac{d^2y}{dx^2}$ near the point | The tangent-line estimate is... |
|:---:|:---:|
| Positive (concave up) | **Underestimate** (tangent line below curve) |
| Negative (concave down) | **Overestimate** (tangent line above curve) |

> **AP Tip:** A full justification names the reason: "$\\frac{d^2y}{dx^2} > 0$, so the graph of $f$ is concave up, so the tangent line lies below the graph." Euler's method is BC-only; it is not tested on AB.`
    },
    {
      id: 'de6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = y(3-y)$, the equilibrium solutions are:',
            options: ['$y = 0$ and $y = 3$', '$y = 0$ only', '$y = 3$ only', '$y = \\pm 3$'],
            correctAnswer: 0,
            explanation: '$y(3-y) = 0$ when $y = 0$ or $y = 3$. Both factors give an equilibrium, and $y = -3$ is not a root.'
          },
          {
            question: 'Newton\'s Law of Cooling: $\\frac{dT}{dt} = -0.1(T-70)$, $T(0) = 200$. Find $T(t)$.',
            options: ['$T = 70+130e^{-0.1t}$', '$T = 200e^{-0.1t}$', '$T = 70+130e^{0.1t}$', '$T = 130e^{-0.1t}$'],
            correctAnswer: 0,
            explanation: '$u = T-70$: $du/dt = -0.1u$. $u = 130e^{-0.1t}$. $T = 70+130e^{-0.1t}$. The constant is $T(0) - 70 = 130$, not $200$, and dropping the negative exponent would make the object heat up forever.'
          },
          {
            question: 'The solution of $\\frac{dy}{dx} = x + 2y$ passes through $(0, 1)$. The tangent line at $x = 0$ gives which estimate of $y(0.1)$?',
            options: ['$1.2$', '$1.1$', '$0.2$', '$2.1$'],
            correctAnswer: 0,
            explanation: 'The slope at $(0, 1)$ is $0 + 2(1) = 2$, so $y(0.1) \\approx 1 + 2(0.1) = 1.2$. Using the slope $x + y = 1$ gives $1.1$, dropping the starting value $y = 1$ leaves only the change $0.2$, and $2.1$ adds the step to the slope instead of multiplying.'
          }
        ]
      }
    },
    {
      id: 'de6-frq',
      type: 'text' as const,
      content: `### Common AP FRQ Patterns

**Pattern 1: Rate In − Rate Out**

A tank has water flowing in at rate $R_{in}$ and out at rate $R_{out}$:

$$\\frac{dV}{dt} = R_{in} - R_{out}$$

**Pattern 2: Read the DE Without Solving It**

The sign of the rate tells you how the quantity behaves. Example: $\\frac{dW}{dt} = 0.2(W - 300)$ with $W(0) = 1400$.

- $W > 300$, so $\\frac{dW}{dt} > 0$: $W$ is increasing.
- $\\frac{d^2W}{dt^2} = 0.2\\frac{dW}{dt} = 0.04(W - 300) > 0$: $W$ increases at an increasing rate.
- If asked to solve: $\\frac{dW}{W - 300} = 0.2\\,dt$ gives $W = 300 + 1100e^{0.2t}$.

**Pattern 3: Using $\\frac{dy}{dx}$ from a Table**

Given a table of $(x, y, dy/dx)$ values, use the slope at a known point for a tangent-line estimate, or check that a proposed solution satisfies both the DE and the initial condition.`
    },
    {
      id: 'de6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify and solve.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dx} = \\frac{y-1}{x}$ is solved by:',
            options: ['Direct integration', 'Separation of variables', 'Logistic formula', 'Not solvable on AP AB'],
            correctAnswers: ['Separation of variables'],
            hints: ['$\\frac{dy}{y-1} = \\frac{dx}{x}$. Both sides can be integrated.'],
            explanation: '$\\ln|y-1| = \\ln|x| + C$, so $y - 1 = Ax$, $y = Ax + 1$.'
          },
          {
            label: 'If $\\frac{d^2y}{dx^2} > 0$ near the point of tangency, the tangent-line estimate is:',
            options: ['Exact answer', 'Overestimate', 'Underestimate', 'Undetermined'],
            correctAnswers: ['Underestimate'],
            hints: ['Tangent lines lie below a concave-up curve.'],
            explanation: '$\\frac{d^2y}{dx^2} > 0$ means concave up, so the tangent line lies below the curve and the estimate is too small.'
          },
          {
            label: 'For $\\frac{dy}{dx} = x(y - 1)$, $\\frac{d^2y}{dx^2}$ equals:',
            options: ['$(y - 1)(1 + x^2)$', '$y - 1$', '$(y - 1) + x$', '$x^2(y - 1)$'],
            correctAnswers: ['$(y - 1)(1 + x^2)$'],
            hints: ['Use the product rule, and remember $\\frac{d}{dx}(y - 1) = \\frac{dy}{dx}$.'],
            explanation: '$\\frac{d^2y}{dx^2} = (y - 1) + x\\frac{dy}{dx} = (y - 1) + x^2(y - 1) = (y - 1)(1 + x^2)$. Treating $y$ as a constant gives only $y - 1$, writing $\\frac{d}{dx}(y - 1) = 1$ gives $(y - 1) + x$, and $x^2(y - 1)$ keeps only the second term of the product rule.'
          }
        ]
      }
    },
    {
      id: 'de6-input',
      type: 'input-box' as const,
      content: '**Tangent-line estimate.** ✍️',
      exercise: {
        question: 'Let $y = f(x)$ be the particular solution to $\\frac{dy}{dx} = x^2 + y$ with $f(2) = -1$. Use the tangent line to the graph of $f$ at $x = 2$ to approximate $f(2.1)$.\n\n(Enter a number.)',
        correctAnswer: '-0.7',
        acceptableAnswers: ['-0.7', '-.7', '-0.70', '-7/10'],
        hints: [
          'Slope at $(2, -1)$: $\\frac{dy}{dx} = 2^2 + (-1) = 3$.',
          'Tangent line: $y = -1 + 3(x - 2)$. Substitute $x = 2.1$.'
        ],
        explanation: 'The slope at $(2, -1)$ is $4 - 1 = 3$, so $f(2.1) \\approx -1 + 3(0.1) = -0.7$.'
      }
    },
    {
      id: 'de6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Topic | Key Formula/Idea |
|:---:|:---:|
| Tangent-line estimate | $y \\approx y_0 + m(x - x_0)$, with $m$ from the DE at $(x_0, y_0)$ |
| $d^2y/dx^2 > 0$ (concave up) | Tangent line underestimates |
| $d^2y/dx^2 < 0$ (concave down) | Tangent line overestimates |
| Equilibrium | $dy/dx = 0$: constant solutions |
| Newton's cooling | $dT/dt = -k(T - T_{env})$ |

> **Up Next:** Part 7 — Comprehensive Assessment.`
    }
  ]
};
