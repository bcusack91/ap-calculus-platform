export const precalcInverseTrigPart2Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📈 Graphs of Inverse Trig Functions

**Part 2 of 7**

Each inverse trig graph is the **reflection of the restricted trig graph across the line $y = x$**.

### Arcsin Graph: $y = \\arcsin x$

| Feature | Value |
|:--------|:------|
| Domain | $[-1, 1]$ |
| Range | $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ |
| Passes through | $(0, 0)$ |
| Increasing | On the entire domain |
| Endpoints | $(-1, -\\frac{\\pi}{2})$ and $(1, \\frac{\\pi}{2})$ |

### Arccos Graph: $y = \\arccos x$

| Feature | Value |
|:--------|:------|
| Domain | $[-1, 1]$ |
| Range | $[0, \\pi]$ |
| Passes through | $(0, \\frac{\\pi}{2})$ |
| Decreasing | On the entire domain |
| Endpoints | $(-1, \\pi)$ and $(1, 0)$ |

### Arctan Graph: $y = \\arctan x$

| Feature | Value |
|:--------|:------|
| Domain | $(-\\infty, \\infty)$ |
| Range | $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ |
| Passes through | $(0, 0)$ |
| Increasing | On the entire domain |
| Horizontal asymptotes | $y = -\\frac{\\pi}{2}$ and $y = \\frac{\\pi}{2}$ |
      `
    },
    {
      id: 'p2-key-features',
      type: 'text' as const,
      content: `
## 🔑 Key Graphing Relationships

### Reflection Property

If $(a, b)$ is on $y = \\sin x$ (restricted), then $(b, a)$ is on $y = \\arcsin x$.

For example: $(\\frac{\\pi}{6}, \\frac{1}{2})$ on $\\sin$ → $(\\frac{1}{2}, \\frac{\\pi}{6})$ on $\\arcsin$

### Complementary Identity

$$\\boxed{\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\quad \\text{for all } x \\in [-1,1]}$$

This means the arcsin and arccos graphs are "complementary" — at any $x$-value, their outputs sum to $\\frac{\\pi}{2}$.

### Symmetry

| Function | Symmetry | Meaning |
|:---------|:---------|:--------|
| $\\arcsin$ | Odd: $\\arcsin(-x) = -\\arcsin x$ | Symmetric about origin |
| $\\arccos$ | Neither odd nor even | $\\arccos(-x) = \\pi - \\arccos x$ |
| $\\arctan$ | Odd: $\\arctan(-x) = -\\arctan x$ | Symmetric about origin |
      `
    },
    {
      id: 'p2-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Key Points on the Arcsin Graph

Plot: $(-1, -\\frac{\\pi}{2}),\\; (-\\frac{\\sqrt{3}}{2}, -\\frac{\\pi}{3}),\\; (-\\frac{1}{2}, -\\frac{\\pi}{6}),\\; (0, 0),\\; (\\frac{1}{2}, \\frac{\\pi}{6}),\\; (\\frac{\\sqrt{3}}{2}, \\frac{\\pi}{3}),\\; (1, \\frac{\\pi}{2})$

Connect with a smooth increasing curve from $(-1, -\\frac{\\pi}{2})$ to $(1, \\frac{\\pi}{2})$.

### Example 2: Using the Complementary Identity

Find $\\arccos(\\frac{1}{2})$ given that $\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$:

$$\\arccos\\!\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2} - \\arcsin\\!\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2} - \\frac{\\pi}{6} = \\frac{\\pi}{3}$$

### Example 3: Negative Input Symmetry

$\\arctan(-\\sqrt{3}) = -\\arctan(\\sqrt{3}) = -\\frac{\\pi}{3}$

We used the odd-function property: $\\arctan(-x) = -\\arctan x$.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Graph Features** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of $y = \\arccos x$ is:',
            options: [
              'Increasing on $[-1, 1]$',
              'Decreasing on $[-1, 1]$',
              'Increasing on $[0, \\pi]$',
              'Decreasing on $[0, \\pi]$'
            ],
            correctAnswer: 1,
            explanation: '$\\arccos$ is a decreasing function on its domain $[-1, 1]$. As $x$ increases from $-1$ to $1$, the output decreases from $\\pi$ to $0$.'
          },
          {
            question: 'The horizontal asymptotes of $y = \\arctan x$ are:',
            options: [
              '$y = 0$ and $y = \\pi$',
              '$y = -\\frac{\\pi}{2}$ and $y = \\frac{\\pi}{2}$',
              '$y = -1$ and $y = 1$',
              'There are no horizontal asymptotes'
            ],
            correctAnswer: 1,
            explanation: 'As $x \\to \\infty$, $\\arctan x \\to \\frac{\\pi}{2}$ and as $x \\to -\\infty$, $\\arctan x \\to -\\frac{\\pi}{2}$.'
          },
          {
            question: '$\\arcsin(-x)$ equals:',
            options: [
              '$\\pi - \\arcsin x$',
              '$-\\arcsin x$',
              '$\\arcsin x$',
              '$\\frac{\\pi}{2} - \\arcsin x$'
            ],
            correctAnswer: 1,
            explanation: '$\\arcsin$ is an odd function, so $\\arcsin(-x) = -\\arcsin x$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Using Graphing Properties** 🧮

All answers in degrees.

**1)** If $\\arcsin(\\frac{\\sqrt{3}}{2}) = 60°$, then $\\arccos(\\frac{\\sqrt{3}}{2})$ = ? (e.g., $\\arcsin(\\frac{1}{2}) = 30°$ gives $\\arccos(\\frac{1}{2}) = 90° - 30° = 60°$)

**2)** $\\arctan(-1)$ = ? (e.g., $\\arctan(-\\sqrt{3}) = -60°$ by the odd-function property)

**3)** $\\arcsin(-\\frac{1}{2})$ = ? (e.g., $\\arcsin(-\\frac{\\sqrt{2}}{2}) = -45°$ by the odd-function property)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '-45', '-30'],
        hint1: '$\\arccos x = 90° - \\arcsin x$. So $90° - 60° = ?$',
        hint2: '$\\arctan$ is odd: $\\arctan(-1) = -\\arctan(1) = -45°$.',
        hint3: '$\\arcsin(-\\frac{1}{2}) = -\\arcsin(\\frac{1}{2}) = -30°$.',
        explanation: '1) $90° - 60° = 30°$. 2) $-\\arctan(1) = -45°$. 3) $-\\arcsin(\\frac{1}{2}) = -30°$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Graph Identification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The graph passing through $(0, \\frac{\\pi}{2})$ is',
            options: ['$y = \\arcsin x$', '$y = \\arccos x$', '$y = \\arctan x$']
          },
          {
            label: 'The graph with horizontal asymptotes is',
            options: ['$y = \\arcsin x$', '$y = \\arccos x$', '$y = \\arctan x$']
          },
          {
            label: 'The only inverse trig graph that is decreasing is',
            options: ['$y = \\arcsin x$', '$y = \\arccos x$', '$y = \\arctan x$']
          },
          {
            label: 'An odd function among the inverse trig functions is',
            options: ['$\\arcsin x$', '$\\arccos x$', 'Neither']
          }
        ],
        correctAnswers: ['$y = \\arccos x$', '$y = \\arctan x$', '$y = \\arccos x$', '$\\arcsin x$'],
        hint1: '$\\arccos(0) = \\frac{\\pi}{2}$ because $\\cos(\\frac{\\pi}{2}) = 0$.',
        hint2: 'Only $\\arctan$ has an infinite domain, so it has horizontal asymptotes.',
        hint3: '$\\arccos$ decreases from $\\pi$ to $0$ as $x$ goes from $-1$ to $1$.',
        explanation: '$\\arccos$ passes through $(0, \\frac{\\pi}{2})$ and is the only decreasing one. $\\arctan$ has asymptotes. $\\arcsin$ is odd.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $(\\frac{\\pi}{4}, \\frac{\\sqrt{2}}{2})$ is on $y = \\sin x$ (restricted), what point is on $y = \\arcsin x$?',
            options: [
              '$(\\frac{\\sqrt{2}}{2}, \\frac{\\pi}{4})$',
              '$(\\frac{\\pi}{4}, \\frac{\\sqrt{2}}{2})$',
              '$(-\\frac{\\sqrt{2}}{2}, -\\frac{\\pi}{4})$',
              '$(\\frac{\\pi}{4}, -\\frac{\\sqrt{2}}{2})$'
            ],
            correctAnswer: 0,
            explanation: 'Reflecting across $y = x$ swaps coordinates: $(a,b) \\to (b,a)$. So $(\\frac{\\pi}{4}, \\frac{\\sqrt{2}}{2}) \\to (\\frac{\\sqrt{2}}{2}, \\frac{\\pi}{4})$.'
          },
          {
            question: '$\\arcsin(\\frac{\\sqrt{2}}{2}) + \\arccos(\\frac{\\sqrt{2}}{2})$ equals:',
            options: [
              '$\\pi$',
              '$\\frac{\\pi}{2}$',
              '$\\frac{\\pi}{4}$',
              '$0$'
            ],
            correctAnswer: 1,
            explanation: 'By the complementary identity: $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$ for all $x \\in [-1, 1]$.'
          }
        ]
      }
    }
  ]
};
