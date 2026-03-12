export const satFunctionsPart5Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn5-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 5 of 7 — Graph Analysis & Interpretation**

### Increasing vs. Decreasing

- **Increasing**: as $x$ moves right, $y$ goes up
- **Decreasing**: as $x$ moves right, $y$ goes down
- **Constant**: horizontal line segment

### Maximum and Minimum Values

- **Absolute max/min**: the highest/lowest y-value on the entire graph
- **Relative (local) max/min**: higher/lower than nearby points

On the SAT, these appear as:
- "Over which interval is $f$ increasing?"
- "At what value of $x$ does $f$ attain its maximum?"
- "What is the maximum value of $f$?" (asking for the y-coordinate)

### Rate of Change

Average rate of change from $x = a$ to $x = b$:

$$\\text{Rate} = \\frac{f(b) - f(a)}{b - a}$$

This is just the slope of the **secant line** between two points.

### Intercepts

- **x-intercepts**: where $f(x) = 0$ (solve or read from graph)
- **y-intercept**: evaluate $f(0)$ (or read where graph crosses y-axis)`
    },
    {
      id: 'fn5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(2) = 5$ and $f(6) = 13$, what is the average rate of change of $f$ from $x = 2$ to $x = 6$?',
            options: ['$2$', '$4$', '$8$', '$1.5$'],
            correctAnswer: 0,
            explanation: 'Average rate = $(13 - 5)/(6 - 2) = 8/4 = 2$. Just like slope!'
          },
          {
            question: 'A function $f$ has values: $f(1) = 3$, $f(2) = 7$, $f(3) = 5$, $f(4) = 1$. Over which interval is $f$ decreasing?',
            options: ['From $x = 2$ to $x = 4$', 'From $x = 1$ to $x = 3$', 'From $x = 3$ to $x = 4$ only', 'From $x = 1$ to $x = 2$'],
            correctAnswer: 0,
            explanation: '$f$ goes $7 → 5 → 1$ from $x = 2$ to $x = 4$, so it is decreasing on this interval.'
          },
          {
            question: 'If the graph of $y = f(x)$ passes through $(0, -3)$ and $(4, 0)$, which statement is true?',
            options: ['The y-intercept is $-3$ and $x = 4$ is an x-intercept', 'The y-intercept is $4$ and $x = -3$ is an x-intercept', 'The function value at $x = 4$ is $-3$', 'The average rate of change is $-3/4$'],
            correctAnswer: 0,
            explanation: '$(0, -3)$ means $f(0) = -3$, so y-intercept is $-3$. $(4, 0)$ means $f(4) = 0$, so $x = 4$ is an x-intercept.'
          }
        ]
      }
    },
    {
      id: 'fn5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Increasing/decreasing: determined by the direction of the y-values as x increases
- Average rate of change $= \\frac{f(b) - f(a)}{b - a}$ = slope of secant line
- x-intercepts: $f(x) = 0$; y-intercept: $f(0)$
- "Maximum value of $f$" = the y-coordinate, not the x-coordinate`
    }
  ]
};
