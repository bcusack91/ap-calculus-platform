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

---

### Worked Example 1

**The table shows values of $f$. Find the average rate of change from $x = 1$ to $x = 5$.**

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $3$ | $7$ | $9$ | $8$ | $11$ |

| Step | Work |
|------|------|
| Formula | $\\frac{f(5) - f(1)}{5 - 1}$ |
| Substitute | $\\frac{11 - 3}{4}$ |
| Simplify | $= 2$ |

> Note: The function goes up and down between $x = 1$ and $x = 5$, but the **average** rate of change only looks at endpoints.

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
      id: 'fn5-text2',
      type: 'text' as const,
      content: `### Comparing Rates of Change

The SAT may ask you to compare rates of change over different intervals.

### Worked Example 2

**Using the table:**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $1$ | $4$ | $9$ | $16$ | $25$ |

**Where is $f$ increasing fastest?**

| Interval | Rate of Change |
|----------|---------------|
| $[0, 1]$ | $(4 - 1)/1 = 3$ |
| $[1, 2]$ | $(9 - 4)/1 = 5$ |
| $[2, 3]$ | $(16 - 9)/1 = 7$ |
| $[3, 4]$ | $(25 - 16)/1 = 9$ |

$f$ increases fastest on $[3, 4]$ with rate $= 9$.

(This pattern makes sense — it's $f(x) = (x+1)^2$, a parabola that curves upward faster and faster.)

### Positive, Negative, and Zero

| Feature | Meaning on Graph |
|---------|-----------------|
| $f(x) > 0$ | Graph is **above** the x-axis |
| $f(x) < 0$ | Graph is **below** the x-axis |
| $f(x) = 0$ | Graph **touches/crosses** the x-axis |`
    },
    {
      id: 'fn5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Deeper Graph Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'The average rate of change of $f(x) = x^2$ from $x = 1$ to $x = 4$ is:',
            options: ['$5$', '$3$', '$7$', '$15$'],
            correctAnswer: 0,
            explanation: '$\\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = \\frac{15}{3} = 5$.'
          },
          {
            question: 'A function is positive on $(-2, 3)$ and negative elsewhere. How many x-intercepts does it have?',
            options: ['$2$', '$1$', '$0$', '$3$'],
            correctAnswer: 0,
            explanation: 'The function changes sign at $x = -2$ and $x = 3$, so it crosses the x-axis twice.'
          },
          {
            question: 'If the average rate of change of $g$ from $x = a$ to $x = b$ equals $0$, which must be true?',
            options: ['$g(a) = g(b)$', '$g$ is constant on $[a, b]$', '$g$ has no x-intercepts', 'The graph is a horizontal line'],
            correctAnswer: 0,
            explanation: 'Rate $= 0$ means $\\frac{g(b) - g(a)}{b - a} = 0$, so $g(b) = g(a)$. The function could still go up and down between $a$ and $b$.'
          }
        ]
      }
    },
    {
      id: 'fn5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Reading the Graph** 🔍\n\nFor a function with $f(0) = 2$, $f(2) = 6$, $f(4) = 6$, $f(6) = 0$:',
      exercise: {
        dropdowns: [
          { label: 'y-intercept', options: ['2', '0', '6', '-2'] },
          { label: 'An x-intercept', options: ['6', '0', '2', '4'] },
          { label: 'Interval where f is increasing', options: ['[0, 2]', '[2, 6]', '[4, 6]', '[2, 4]'] },
          { label: 'Average rate of change on [0, 6]', options: ['-1/3', '0', '1', '2/3'] }
        ],
        correctAnswers: ['2', '6', '[0, 2]', '-1/3'],
        hint1: 'The y-intercept is $f(0)$.',
        hint2: 'An x-intercept is where $f(x) = 0$.',
        hint3: 'Average rate = $(f(6) - f(0))/(6 - 0)$.',
        explanation: 'Y-intercept: $f(0) = 2$. X-intercept at $x = 6$ where $f(6) = 0$. Increasing on $[0,2]$: $f$ goes from 2 to 6. Rate on $[0,6]$: $(0-2)/6 = -1/3$.'
      }
    },
    {
      id: 'fn5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Concept | Formula / Rule |
|---------|---------------|
| Average rate of change | $\\frac{f(b) - f(a)}{b - a}$ = slope of secant line |
| Increasing | $f$ goes up as $x$ increases |
| Decreasing | $f$ goes down as $x$ increases |
| $f(x) > 0$ | Graph above x-axis |
| $f(x) = 0$ | Graph on x-axis (x-intercept) |
| "Maximum value of $f$" | The y-coordinate, not the x-coordinate |

- Zero average rate $\\neq$ constant function — it just means endpoints match
- Compare rates across intervals to find where the function changes fastest`
    }
  ]
};
