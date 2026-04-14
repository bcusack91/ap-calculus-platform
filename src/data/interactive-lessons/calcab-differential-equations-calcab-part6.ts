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
| "Use Euler's method" | $y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x$ |`
    },
    {
      id: 'de6-euler',
      type: 'text' as const,
      content: `### Euler's Method

$$\\boxed{y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x}$$

**Example:** $\\frac{dy}{dx} = x + y$, $y(0) = 1$, $\\Delta x = 0.5$. Approximate $y(1)$.

| Step | $x_n$ | $y_n$ | $f(x_n, y_n) = x_n + y_n$ | $y_{n+1} = y_n + f \\cdot 0.5$ |
|:---:|:---:|:---:|:---:|:---:|
| 0 | $0$ | $1$ | $1$ | $1 + 0.5 = 1.5$ |
| 1 | $0.5$ | $1.5$ | $2$ | $1.5 + 1 = 2.5$ |

So $y(1) \\approx 2.5$.

### Euler's Method Accuracy

| Condition | Euler's result is... |
|:---:|:---:|
| Solution is concave up | **Underestimate** (tangent line below curve) |
| Solution is concave down | **Overestimate** (tangent line above curve) |
| Smaller $\\Delta x$ | More accurate |

> **AP Tip:** Euler's method questions typically ask for 2-3 steps. Set up a TABLE — it's the clearest way to show work.`
    },
    {
      id: 'de6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = y(3-y)$, the equilibrium solutions are:',
            options: ['$y = 0$ and $y = 3$', '$y = 0$ only', '$y = 3$ only', '$y = -3$ and $y = 3$'],
            correctAnswer: 0,
            explanation: '$y(3-y) = 0$ when $y = 0$ or $y = 3$.'
          },
          {
            question: 'Newton\'s Law of Cooling: $\\frac{dT}{dt} = -0.1(T-70)$, $T(0) = 200$. Find $T(t)$.',
            options: ['$T = 70+130e^{-0.1t}$', '$T = 200e^{-0.1t}$', '$T = 70+200e^{-0.1t}$', '$T = 130e^{-0.1t}$'],
            correctAnswer: 0,
            explanation: '$u = T-70$: $du/dt = -0.1u$. $u = 130e^{-0.1t}$. $T = 70+130e^{-0.1t}$.'
          },
          {
            question: 'Using Euler\'s method with $\\frac{dy}{dx} = 2x$, $y(0) = 0$, $\\Delta x = 1$: what is $y(2)$?',
            options: ['$2$', '$4$', '$0$', '$1$'],
            correctAnswer: 0,
            explanation: 'Step 1: $y(1) = 0 + 2(0)(1) = 0$. Step 2: $y(2) = 0 + 2(1)(1) = 2$. (Exact: $y = x^2$, $y(2) = 4$.)'
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

**Pattern 2: Logistic Growth** (BC topic, but concept appears in AB)

$$\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$$

- $P < L$: population grows
- $P > L$: population decreases  
- $P = L$: equilibrium (carrying capacity)
- Fastest growth at $P = L/2$

**Pattern 3: Using $\\frac{dy}{dx}$ from a Table**

Given a table of $(x, y, dy/dx)$ values, use Euler's method or verify a proposed solution.`
    },
    {
      id: 'de6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify and solve.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dx} = \\frac{y-1}{x}$ is solved by:',
            options: ['Direct integration', 'Separation of variables', 'Cannot be solved', 'Euler\'s method only'],
            correctAnswers: ['Separation of variables'],
            hints: ['$\\frac{dy}{y-1} = \\frac{dx}{x}$. Both sides can be integrated.'],
            explanation: '$\\ln|y-1| = \\ln|x| + C$, so $y - 1 = Ax$, $y = Ax + 1$.'
          },
          {
            label: 'Euler\'s method with concave-up solution gives:',
            options: ['Exact answer', 'Overestimate', 'Underestimate', 'Cannot determine'],
            correctAnswers: ['Underestimate'],
            hints: ['Tangent lines lie below a concave-up curve.'],
            explanation: 'Concave up → tangent line underestimates the curve → Euler underestimates.'
          },
          {
            label: 'For $\\frac{dP}{dt} = 0.5P(1 - P/100)$, the carrying capacity is:',
            options: ['$0.5$', '$50$', '$100$', '$200$'],
            correctAnswers: ['$100$'],
            hints: ['Carrying capacity $L$ appears as the value where $dP/dt = 0$ and $P > 0$.'],
            explanation: '$P(1-P/100) = 0$ gives $P = 0$ or $P = 100$. Carrying capacity is $L = 100$.'
          }
        ]
      }
    },
    {
      id: 'de6-input',
      type: 'input-box' as const,
      content: '**Euler\'s method computation.** ✍️',
      exercise: {
        question: 'Use Euler\'s method with $\\Delta x = 0.5$ to approximate $y(1)$ for $\\frac{dy}{dx} = x + y$, $y(0) = 1$.\n\n(Enter a number.)',
        correctAnswer: '2.5',
        acceptableAnswers: ['2.5', '2.50', '5/2'],
        hints: [
          'Step 1: $x_0 = 0$, $y_0 = 1$. $f(0,1) = 0+1 = 1$. $y_1 = 1 + 1(0.5) = 1.5$.',
          'Step 2: $x_1 = 0.5$, $y_1 = 1.5$. $f(0.5, 1.5) = 2$. $y_2 = 1.5 + 2(0.5) = 2.5$.'
        ],
        explanation: 'Two steps of Euler\'s method: $y(0.5) = 1.5$, $y(1) = 2.5$.'
      }
    },
    {
      id: 'de6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Topic | Key Formula/Idea |
|:---:|:---:|
| Euler's method | $y_{n+1} = y_n + f(x_n,y_n) \\cdot \\Delta x$ |
| Concave up → Euler | Underestimate |
| Concave down → Euler | Overestimate |
| Equilibrium | $dy/dx = 0$: constant solutions |
| Newton's cooling | $dT/dt = -k(T - T_{env})$ |

> **Up Next:** Part 7 — Comprehensive Assessment.`
    }
  ]
};
