export const calcbcDiffEqPart4Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'de4-intro',
      type: 'text' as const,
      content: `# Slope Fields and Qualitative Analysis

**Part 4 of 7 — Visualizing Solutions Without Solving**

### What is a Slope Field?

A slope field (direction field) for $\\frac{dy}{dx} = F(x, y)$ is a grid of short line segments at points $(x, y)$, each with slope $F(x, y)$.

$$\\boxed{\\text{At each point } (x, y), \\text{ draw a short segment with slope } F(x, y)}$$

### Reading Slope Fields

| Feature | What it tells you |
|---------|------------------|
| All segments horizontal | $F(x,y) = 0$ on that curve (nullcline) |
| All segments vertical | $F(x,y) \\to \\pm\\infty$ (undefined) |
| Segments steeper as $y$ increases | $F$ depends on $y$ positively |
| Segments same along vertical lines | $F$ depends only on $x$ |
| Segments same along horizontal lines | $F$ depends only on $y$ |

> **Key Fact:** If $dy/dx = f(y)$ only (autonomous DE), horizontal rows have the same slope.`
    },
    {
      id: 'de4-matching',
      type: 'text' as const,
      content: `### Matching DEs to Slope Fields

**Strategy for AP multiple choice:**

1. Pick a specific point, e.g., $(1, 1)$
2. Compute $F(1, 1)$ for each DE option
3. Check which matches the slope in the field at that point
4. Verify at a second point if needed

### Equilibrium Solutions

An **equilibrium solution** is a constant solution $y = c$ where $dy/dx = 0$ for all $x$.

$$\\boxed{\\text{Equilibrium: } F(x, c) = 0 \\text{ for all } x}$$

| Equilibrium type | Behavior |
|-----------------|----------|
| **Stable** | Nearby solutions approach $y = c$ |
| **Unstable** | Nearby solutions move away from $y = c$ |
| **Semi-stable** | Approaches from one side, diverges from other |

For $y' = y(1 - y)$: equilibria at $y = 0$ (unstable) and $y = 1$ (stable).`
    },
    {
      id: 'de4-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'In the slope field for $dy/dx = x - y$, the segments are horizontal when:',
            options: ['$y = x$ (the line $y = x$ is the nullcline)', '$x = 0$', '$y = 0$', '$x = 1$'],
            correctAnswer: 0,
            explanation: '$x - y = 0 \\Rightarrow y = x$. Along $y = x$, all slopes are zero.'
          },
          {
            question: 'If the slope field depends only on $y$ (not $x$), the segments will be:',
            options: ['The same along each horizontal line', 'The same along each vertical line', 'All pointing the same direction', 'All zero'],
            correctAnswer: 0,
            explanation: 'If $F = f(y)$, every point with the same $y$ has the same slope, regardless of $x$.'
          },
          {
            question: 'For $y\' = y(2 - y)$, the equilibrium solutions are $y = 0$ and $y = 2$. Between them ($0 < y < 2$):',
            options: ['$y\' > 0$ (solutions increase toward $y = 2$)', '$y\' < 0$', '$y\' = 0$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'For $0 < y < 2$: $y > 0$ and $2 - y > 0$, so $y\' = y(2-y) > 0$. Solutions increase.'
          }
        ]
      }
    },
    {
      id: 'de4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Equilibrium Analysis**\n\nConsider $\\frac{dy}{dt} = (y - 1)(y - 3)$.',
      exercise: {
        dropdowns: [
          {
            label: 'The equilibrium solutions are:',
            options: ['$y = 1$ and $y = 3$', '$y = 0$ only', '$y = 1$ only', '$y = 0$, $y = 1$, and $y = 3$'],
            correctAnswers: ['$y = 1$ and $y = 3$'],
            hints: ['Set $(y-1)(y-3) = 0$.'],
            explanation: '$(y-1)(y-3) = 0$ gives $y = 1$ and $y = 3$.'
          },
          {
            label: 'For $1 < y < 3$, $y\' = (y-1)(y-3)$ is:',
            options: ['Negative ($(+)(−) < 0$, so $y$ decreases)', 'Positive', 'Zero', 'Undefined'],
            correctAnswers: ['Negative ($(+)(−) < 0$, so $y$ decreases)'],
            hints: ['$(y-1) > 0$ and $(y-3) < 0$ when $1 < y < 3$.'],
            explanation: '$(+)(−) < 0$. Solutions decrease toward $y = 1$.'
          },
          {
            label: 'For $y > 3$, $y\'$ is:',
            options: ['Positive ($(+)(+) > 0$, $y$ increases away from $3$)', 'Negative', 'Zero', 'Varies'],
            correctAnswers: ['Positive ($(+)(+) > 0$, $y$ increases away from $3$)'],
            hints: ['Both factors positive.'],
            explanation: '$(+)(+) > 0$. Solutions increase away from $y = 3$.'
          },
          {
            label: 'Therefore $y = 1$ is _____ and $y = 3$ is _____:',
            options: ['$y = 1$ stable, $y = 3$ unstable', '$y = 1$ unstable, $y = 3$ stable', 'Both stable', 'Both unstable'],
            correctAnswers: ['$y = 1$ stable, $y = 3$ unstable'],
            hints: ['Nearby solutions approach $y = 1$ but move away from $y = 3$.'],
            explanation: 'Solutions above and below $y = 1$ both approach it. Solutions near $y = 3$ move away.'
          }
        ]
      }
    },
    {
      id: 'de4-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'For $dy/dx = 2y - 6$, at what value of $y$ is the slope field horizontal? (Solve $2y - 6 = 0$.)',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: ['$2y - 6 = 0 \\Rightarrow y = 3$.'],
        explanation: '$2y - 6 = 0 \\Rightarrow y = 3$. This is the equilibrium solution.'
      }
    },
    {
      id: 'de4-summary',
      type: 'text' as const,
      content: `### Key Concepts

$$\\boxed{\\text{Nullcline: where } F(x,y) = 0 \\text{ (horizontal segments)}}$$

| Analysis tool | Purpose |
|--------------|---------|
| Slope field | Visualize solution behavior |
| Nullcline | Find where $y' = 0$ |
| Sign analysis | Determine where $y$ increases/decreases |
| Stability | Classify equilibria as stable/unstable |

**Next: Part 5 — AP Exam Strategies for Differential Equations**`
    }
  ]
};
