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

### Stability of Equilibria

For an autonomous DE $\\frac{dy}{dx} = g(y)$:

| Equilibrium Type | Slope Field Behavior | Stability |
|:---:|:---:|:---:|
| **Stable** | Arrows point TOWARD equilibrium | Solutions approach it |
| **Unstable** | Arrows point AWAY from equilibrium | Solutions diverge |
| **Semi-stable** | Arrows point toward on one side, away on other | Mixed behavior |

**Example:** $\\frac{dy}{dx} = y(2-y)$

- $y = 0$: unstable (slopes point away for $y < 0$ and toward for $y > 0$... actually for $y < 0$, $g(y) = y(2-y) < 0$ pushes $y$ more negative → **unstable**)
- $y = 2$: stable (solutions above and below approach $y = 2$)`
    },
    {
      id: 'de3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze slope fields.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\frac{dy}{dx} = y^2 - 1$, the equilibrium $y = 1$ is:',
            options: ['Stable', 'Unstable', 'Semi-stable', 'Not an equilibrium'],
            correctAnswers: ['Unstable'],
            hints: ['Check signs: for $y$ slightly above $1$, $y^2-1 > 0$ (moving up). For $y$ slightly below $1$, $y^2-1 < 0$ (moving down).'],
            explanation: 'Slopes push away from $y = 1$ in both directions → unstable.'
          },
          {
            label: 'For $\\frac{dy}{dx} = y^2 - 1$, the equilibrium $y = -1$ is:',
            options: ['Stable', 'Unstable', 'Semi-stable', 'Not an equilibrium'],
            correctAnswers: ['Stable'],
            hints: ['For $y$ slightly above $-1$ (like $y=-0.5$): $y^2-1 = -0.75 < 0$ (moving down toward $-1$).'],
            explanation: 'Slopes push toward $y = -1$ from both sides → stable.'
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
| Stable/Unstable | Do nearby solutions approach or diverge? |

> **Up Next:** Part 4 — Exponential Growth & Decay.`
    }
  ]
};
