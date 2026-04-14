export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef3-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 3 of 7 — Graphs of Exponential Functions**

### The Basic Graph: $y = b^x$

- **Growth** ($b > 1$): rises from left to right
- **Decay** ($0 < b < 1$): falls from left to right
- Always passes through $(0, 1)$ since $b^0 = 1$
- **Horizontal asymptote**: $y = 0$ (the x-axis)
- Domain: all real numbers; Range: $y > 0$

### Transformations: $y = a \\cdot b^{x-h} + k$

| Parameter | Effect |
|-----------|--------|
| $a$ | Vertical stretch/flip (if negative: reflected) |
| $h$ | Horizontal shift (right if positive) |
| $k$ | Vertical shift (up if positive) |
| $k$ | New horizontal asymptote: $y = k$ |

### Reading Exponential Graphs on SAT

From a graph, identify:
- **y-intercept**: the initial value $a$ (where the graph crosses $y$-axis)
- **Horizontal asymptote**: the value $y$ approaches but never reaches
- **Growth vs decay**: is the function increasing or decreasing?
- **Growth factor**: pick two integer $x$-values, divide $y$-values`
    },
    {
      id: 'ef3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'The horizontal asymptote of $y = 3 \\cdot 2^x + 5$ is:',
            options: ['$y = 5$', '$y = 3$', '$y = 0$', '$y = 8$'],
            correctAnswer: 0,
            explanation: 'The asymptote is $y = k = 5$. As $x \\to -\\infty$, $2^x \\to 0$, so $y \\to 3(0) + 5 = 5$.'
          },
          {
            question: 'If an exponential graph passes through $(0, 4)$ and $(1, 12)$, the function is:',
            options: ['$y = 4(3)^x$', '$y = 4(2)^x$', '$y = 12^x$', '$y = 4 + 8x$'],
            correctAnswer: 0,
            explanation: 'At $x = 0$: $a = 4$. At $x = 1$: $4b = 12$ → $b = 3$. So $y = 4(3)^x$.'
          },
          {
            question: 'Which function represents exponential DECAY?',
            options: ['$y = 5(0.7)^x$', '$y = 5(1.3)^x$', '$y = 5(7)^x$', '$y = 5x + 0.7$'],
            correctAnswer: 0,
            explanation: 'Decay means $0 < b < 1$. Here $b = 0.7 < 1$, so this is exponential decay.'
          }
        ]
      }
    },
    {
      id: 'ef3-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Finding the Equation from a Graph

**An exponential graph passes through $(0, 5)$ and $(2, 45)$. Its asymptote is $y = 0$. Find the equation.**

| Step | Work |
|------|------|
| At $x = 0$ | $a \\cdot b^0 = a = 5$ |
| At $x = 2$ | $5b^2 = 45 \\Rightarrow b^2 = 9 \\Rightarrow b = 3$ |
| Answer | $y = 5(3)^x$ |

### Worked Example 2 — Asymptote Shifted

**An exponential graph has asymptote $y = 2$, y-intercept at $(0, 5)$, and passes through $(1, 8)$.**

| Step | Work |
|------|------|
| Form | $y = a \\cdot b^x + k$, where $k = 2$ |
| At $x = 0$ | $a + 2 = 5 \\Rightarrow a = 3$ |
| At $x = 1$ | $3b + 2 = 8 \\Rightarrow 3b = 6 \\Rightarrow b = 2$ |
| Answer | $y = 3(2)^x + 2$ |

### Exponential vs. Other Graphs

| Feature | Exponential | Linear | Quadratic |
|---------|------------|--------|-----------|
| Shape | J-curve or reverse-J | Straight line | Parabola (U or ∩) |
| Asymptote | Yes (horizontal) | No | No |
| Passes through $(0,1)$ | $y = b^x$ only | Only if $b = 1$ | Only if $c = 1$ |
| End behavior | One end → ∞, other → asymptote | Both ends → ±∞ | Both ends → ∞ or → −∞ |`
    },
    {
      id: 'ef3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Reading Exponential Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'A graph has asymptote $y = -3$ and passes through $(0, 1)$. Which function could it be?',
            options: ['$y = 4(2)^x - 3$', '$y = (2)^x + 1$', '$y = -3(2)^x$', '$y = 2^x - 3$'],
            correctAnswer: 0,
            explanation: 'Asymptote $y = -3$ means $k = -3$. At $x = 0$: $a \\cdot 1 + (-3) = 1$, so $a = 4$. $y = 4(2)^x - 3$ ✓. Check option D: at $x=0$: $1 - 3 = -2 \\neq 1$ ✗.'
          },
          {
            question: 'The function $y = 10(0.5)^x$ has what range?',
            options: ['$y > 0$', 'All real numbers', '$y > 10$', '$y \\geq 0$'],
            correctAnswer: 0,
            explanation: '$(0.5)^x > 0$ for all $x$, so $10(0.5)^x > 0$. The function approaches 0 but never reaches it. Range: $y > 0$.'
          },
          {
            question: 'If $f(x) = 2^x$ is reflected over the y-axis, the new function is:',
            options: ['$f(x) = 2^{-x} = (1/2)^x$', '$f(x) = -2^x$', '$f(x) = 2^x + 1$', '$f(x) = -2^{-x}$'],
            correctAnswer: 0,
            explanation: 'Reflecting over the y-axis: replace $x$ with $-x$. $2^{-x} = (1/2)^x$ — turns growth into decay!'
          }
        ]
      }
    },
    {
      id: 'ef3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Graph Feature Analysis** 🔍\n\nIdentify each graph feature for the given function.',
      exercise: {
        dropdowns: [
          { label: '$y = 2(3)^x - 1$: horizontal asymptote?', options: ['y = −1', 'y = 0', 'y = 2', 'y = 3'] },
          { label: '$y = 2(3)^x - 1$: y-intercept?', options: ['(0, 1)', '(0, 2)', '(0, −1)', '(0, 5)'] },
          { label: '$y = 2(3)^x - 1$: growth or decay?', options: ['Growth (base 3 > 1)', 'Decay (shifted down)', 'Neither', 'Depends on x'] },
          { label: '$y = 5(0.4)^x + 3$: range?', options: ['y > 3', 'y > 0', 'y > 5', 'All real numbers'] }
        ],
        correctAnswers: ['y = −1', '(0, 1)', 'Growth (base 3 > 1)', 'y > 3'],
        hint1: 'Asymptote = the $k$ value at the end of the function.',
        hint2: 'y-intercept: plug $x = 0$: $2(3)^0 - 1 = 2(1) - 1 = 1$.',
        hint3: 'Base $> 1$ → growth regardless of vertical shift. For $y = 5(0.4)^x + 3$: $5(0.4)^x > 0$, so $y > 3$.',
        explanation: 'Asymptote $= k = -1$. y-int: $2(1) - 1 = 1$. Base 3 > 1 → growth. For the last: $(0.4)^x > 0$, so $5(0.4)^x > 0$, thus $y > 3$.'
      }
    },
    {
      id: 'ef3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Feature | $y = a \\cdot b^{x-h} + k$ |
|---------|--------------------------|
| y-intercept | Plug $x = 0$: $a \\cdot b^{-h} + k$ |
| Asymptote | $y = k$ |
| Growth vs. decay | $b > 1$: growth; $0 < b < 1$: decay |
| Domain | All real numbers |
| Range | $y > k$ (if $a > 0$) or $y < k$ (if $a < 0$) |

| Finding equation from graph |
|---|
| 1. Read asymptote → gives $k$ |
| 2. Read y-intercept → solve for $a$ |
| 3. Use another point → solve for $b$ |`
    }
  ]
};
