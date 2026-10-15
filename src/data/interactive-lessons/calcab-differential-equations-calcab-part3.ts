export const calcabDiffEqPart3Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de3-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 3 of 7 — Slope Fields**

### What is a Slope Field?

A **slope field** (direction field) is a visual representation of a DE. At each point $(x, y)$, draw a short line segment with slope $\\frac{dy}{dx}$.

$$\\boxed{\\text{Slope field shows } \\frac{dy}{dx} \\text{ at every point — no solving needed!}}$$

### Reading Slope Fields — Key Patterns

| Observation | What It Tells You |
|:---:|:---:|
| All slopes horizontal along $y = c$ | $\\frac{dy}{dx} = 0$ when $y = c$ (equilibrium) |
| Slopes same along horizontal lines | DE depends only on $y$: $\\frac{dy}{dx} = g(y)$ |
| Slopes same along vertical lines | DE depends only on $x$: $\\frac{dy}{dx} = f(x)$ |
| Slopes same along diagonal $y = x + c$ | DE depends on $y - x$ |
| Slopes get steeper as $|y|$ increases | DE has $y$ in it, likely $\\frac{dy}{dx} = ky$ |

> **Key Fact:** Solution curves follow the slope field like a river current. A solution through any point must be tangent to the slope segments.`
    },
    {
      id: 'de3-matching',
      type: 'text' as const,
      content: `### Matching DEs to Slope Fields

**Strategy:** Check slopes at specific test points.

| Test Point | $\\frac{dy}{dx} = x$ | $\\frac{dy}{dx} = y$ | $\\frac{dy}{dx} = x+y$ | $\\frac{dy}{dx} = xy$ |
|:---:|:---:|:---:|:---:|:---:|
| $(0,0)$ | $0$ | $0$ | $0$ | $0$ |
| $(1,0)$ | $1$ | $0$ | $1$ | $0$ |
| $(0,1)$ | $0$ | $1$ | $1$ | $0$ |
| $(1,1)$ | $1$ | $1$ | $2$ | $1$ |
| $(-1,1)$ | $-1$ | $1$ | $0$ | $-1$ |

### Isoclines

An **isocline** is a curve where all slopes are equal.

For $\\frac{dy}{dx} = x + y$, the isocline where slope $= k$ is the line $x + y = k$ (or $y = k - x$).

> **AP Tip:** On the AP exam, you might be asked to sketch a solution curve through a given point on a slope field. Follow the arrows smoothly — don't make sharp corners!`
    },
    {
      id: 'de3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Slope Field Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = y - 2$, where are the slopes horizontal?',
            options: ['$y = 0$', '$y = 2$', '$x = 2$', 'Along $y = x$'],
            correctAnswer: 1,
            explanation: '$y - 2 = 0$ when $y = 2$. Horizontal segments along the line $y = 2$.'
          },
          {
            question: 'For $\\frac{dy}{dx} = x + y$, the slope at $(1, -1)$ is:',
            options: ['$0$', '$2$', '$-2$', '$1$'],
            correctAnswer: 0,
            explanation: 'At $(1, -1)$: slope $= 1 + (-1) = 0$.'
          },
          {
            question: 'If slopes are the same at $(0,1)$ and $(2,1)$ and $(5,1)$, the DE likely depends on:',
            options: ['$x$ only', '$y$ only', 'Both $x$ and $y$', 'Neither'],
            correctAnswer: 1,
            explanation: 'Same slopes along horizontal lines means the DE depends only on $y$: $dy/dx = g(y)$.'
          }
        ]
      }
    },
    {
      id: 'de3-sketching',
      type: 'text' as const,
      content: `### Sketching Solution Curves

**Rules for sketching on a slope field:**

| Rule | Why |
|:---:|:---:|
| Solution must be tangent to every segment it crosses | By definition of slope |
| Solutions cannot cross each other | Uniqueness theorem (unless DE is undefined) |
| Curve must be smooth (no corners) | Solutions to these DEs are differentiable |
| Follow the "flow" of the field | Solutions are carried along like water |

### Equilibrium Solutions and Nearby Behavior

For $\\frac{dy}{dx} = g(y)$, every value $c$ with $g(c) = 0$ gives a **constant solution** $y = c$: its slope segments are horizontal all the way across the slope field.

A solution that starts at another height follows the sign of $g(y)$:

- $g(y) > 0$ at the starting height: the solution **increases**
- $g(y) < 0$ at the starting height: the solution **decreases**
- It cannot cross a constant solution, so it stays between the equilibrium lines on either side of it

**Example:** $\\frac{dy}{dx} = y(2-y)$ has constant solutions $y = 0$ and $y = 2$.

- Start at $y(0) = 1$: $g(1) = 1 > 0$, so the solution increases and levels off toward $y = 2$.
- Start at $y(0) = 3$: $g(3) = -3 < 0$, so the solution decreases toward $y = 2$.
- Start at $y(0) = -1$: $g(-1) = -3 < 0$, so the solution decreases, moving away from $y = 0$.`
    },
    {
      id: 'de3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze slope fields.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\frac{dy}{dx} = y^2 - 1$, the solution with $y(0) = 0$ is:',
            options: ['Increasing', 'Constant', 'Decreasing', 'Undefined at $x = 0$'],
            correctAnswers: ['Decreasing'],
            hints: ['Evaluate $\\frac{dy}{dx}$ at the starting height $y = 0$.'],
            explanation: 'At $y = 0$, $\\frac{dy}{dx} = 0^2 - 1 = -1 < 0$, so the solution decreases (toward $y = -1$). It is not constant because $y = 0$ is not an equilibrium value, and the slope is defined everywhere.'
          },
          {
            label: 'The constant (equilibrium) solutions of $\\frac{dy}{dx} = y^2 - 1$ are:',
            options: ['$y = 1$ only', '$y = 1$ and $y = -1$', '$y = 0$', '$x = 1$ and $x = -1$'],
            correctAnswers: ['$y = 1$ and $y = -1$'],
            hints: ['Set $\\frac{dy}{dx} = 0$ and solve for $y$.'],
            explanation: '$y^2 - 1 = 0$ gives $y = \\pm 1$, and each constant function makes both sides of the equation $0$. Dropping the negative root misses $y = -1$, $y = 0$ is where the slope is $-1$, and equilibrium solutions are horizontal lines in $y$, not vertical lines in $x$.'
          },
          {
            label: 'A slope field with identical slopes along lines $y - x = c$ corresponds to:',
            options: ['$dy/dx = f(x)$', '$dy/dx = g(y)$', '$dy/dx = h(y-x)$', '$dy/dx = xy$'],
            correctAnswers: ['$dy/dx = h(y-x)$'],
            hints: ['Points on $y - x = c$ all have the same value of $y-x$.'],
            explanation: 'If $dy/dx$ depends on $y-x$, all points with equal $y-x$ have equal slopes.'
          }
        ]
      }
    },
    {
      id: 'de3-input',
      type: 'input-box' as const,
      content: '**Point analysis.** ✍️',
      exercise: {
        question: 'For the DE $\\frac{dy}{dx} = 2x - y$, what is the slope at the point $(3, 4)$?\n\n(Enter an integer.)',
        correctAnswer: '2',
        acceptableAnswers: ['2'],
        hints: [
          'Substitute $x = 3$ and $y = 4$ into the DE.',
          '$\\frac{dy}{dx} = 2(3) - 4$.'
        ],
        explanation: '$\\frac{dy}{dx} = 2(3) - 4 = 6 - 4 = 2$.'
      }
    },
    {
      id: 'de3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Concept | Key Point |
|:---:|:---:|
| Slope field | Visual: short segments showing $dy/dx$ at each point |
| Matching DEs | Evaluate $dy/dx$ at test points |
| Solution curves | Must be tangent to segments, smooth, non-crossing |
| Equilibrium | Where $dy/dx = 0$ |
| Nearby solutions | Rise where $dy/dx > 0$, fall where $dy/dx < 0$; never cross an equilibrium |

> **Up Next:** Part 4 — Exponential Growth & Decay.`
    }
  ]
};
