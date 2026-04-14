export const satFunctionsPart1Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn1-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 1 of 7 — Function Notation & Evaluation**

### What is a Function?

A function $f$ assigns exactly one output to each input. Written as $f(x) = \\text{expression}$.

- $f(3)$ means "plug in $x = 3$"
- $f(a + 1)$ means "replace every $x$ with $(a + 1)$"

**Example:** If $f(x) = 2x^2 - 3x + 1$:

$f(4) = 2(16) - 12 + 1 = 21$

$f(-1) = 2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$

### Domain & Range

- **Domain**: all valid input values (check for division by zero, square roots of negatives)
- **Range**: all possible output values

### SAT Function Notation Tricks

$f(x) = 3$ asks: "For what value(s) of $x$ does the output equal 3?" This means solving $f(x) = 3$, NOT evaluating $f(3)$.

On a graph: find where $y = 3$ intersects the curve.

---

### Worked Example 1

**If $f(x) = x^2 + 3x - 5$, evaluate $f(a + 2)$.**

| Step | Work |
|------|------|
| Replace $x$ with $(a+2)$ | $f(a+2) = (a+2)^2 + 3(a+2) - 5$ |
| Expand $(a+2)^2$ | $= a^2 + 4a + 4 + 3a + 6 - 5$ |
| Simplify | $= a^2 + 7a + 5$ |

### Worked Example 2

**The domain of $f(x) = \\sqrt{2x - 6}$.**

| Step | Work |
|------|------|
| Expression under radical $\\geq 0$ | $2x - 6 \\geq 0$ |
| Solve | $x \\geq 3$ |
| Domain | $[3, \\infty)$ |`
    },
    {
      id: 'fn1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Function Evaluation** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 2x + 3$, what is $f(-2)$?',
            options: ['$11$', '$3$', '$7$', '$-1$'],
            correctAnswer: 0,
            explanation: '$f(-2) = (-2)^2 - 2(-2) + 3 = 4 + 4 + 3 = 11$. Careful with signs: $-2(-2) = +4$.'
          },
          {
            question: 'If $g(x) = 3x + 5$ and $g(a) = 20$, what is $a$?',
            options: ['$5$', '$15$', '$65$', '$20/3$'],
            correctAnswer: 0,
            explanation: '$3a + 5 = 20$ → $3a = 15$ → $a = 5$. When given $g(a) = k$, set the function equal to $k$ and solve.'
          },
          {
            question: 'What is the domain of $f(x) = \\frac{1}{x - 4}$?',
            options: ['All real numbers except $x = 4$', 'All real numbers except $x = -4$', 'All real numbers', '$x > 4$'],
            correctAnswer: 0,
            explanation: 'The denominator cannot be zero: $x - 4 \\neq 0$ → $x \\neq 4$.'
          }
        ]
      }
    },
    {
      id: 'fn1-text2',
      type: 'text' as const,
      content: `### Function Evaluation with Tables

The SAT often gives a table and asks you to evaluate:

| $x$ | $f(x)$ |
|-----|--------|
| $-1$ | $4$ |
| $0$ | $2$ |
| $1$ | $0$ |
| $2$ | $-2$ |
| $3$ | $0$ |

From this table: $f(1) = 0$, $f(0) = 2$, and $f(f(1)) = f(0) = 2$.

### Worked Example 3 — "Solving" $f(x) = k$

**Using the table above, for what values of $x$ is $f(x) = 0$?**

| Step | Work |
|------|------|
| Scan the $f(x)$ column for $0$ | $f(1) = 0$ and $f(3) = 0$ |
| Answer | $x = 1$ and $x = 3$ |

> **SAT Trap:** If the question asks "$f(x) = 0$", do NOT evaluate $f(0) = 2$. Find where the **output** is $0$.`
    },
    {
      id: 'fn1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Harder Function Notation** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x - 1$, what is $f(3) - f(1)$?',
            options: ['$4$', '$2$', '$3$', '$6$'],
            correctAnswer: 0,
            explanation: '$f(3) = 5$, $f(1) = 1$. So $f(3) - f(1) = 5 - 1 = 4$.'
          },
          {
            question: 'If $h(x) = \\frac{x}{x + 1}$, what is $h\\left(\\frac{1}{2}\\right)$?',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$1$'],
            correctAnswer: 0,
            explanation: '$h(1/2) = \\frac{1/2}{1/2 + 1} = \\frac{1/2}{3/2} = \\frac{1}{3}$.'
          },
          {
            question: 'The domain of $g(x) = \\frac{\\sqrt{x}}{x - 5}$ is:',
            options: ['$x \\geq 0$ and $x \\neq 5$', '$x > 0$', '$x \\neq 5$', '$x \\geq 0$'],
            correctAnswer: 0,
            explanation: 'Need $x \\geq 0$ (square root) AND $x \\neq 5$ (denominator). Both conditions apply.'
          }
        ]
      }
    },
    {
      id: 'fn1-dropdown',
      type: 'dropdown-select' as const,
      content: '**What Does the Notation Mean?** 🔍\n\nFor each expression, choose what it represents.',
      exercise: {
        dropdowns: [
          { label: '$f(5) = 3$', options: ['The point (5, 3) is on the graph', 'The point (3, 5) is on the graph', 'The slope is 5/3'] },
          { label: '$f(x) = 0$', options: ['Find the x-intercept(s)', 'Evaluate f at 0', 'The function has no value'] },
          { label: '$f(0) = -2$', options: ['The y-intercept is -2', 'The x-intercept is -2', 'The function is negative'] },
          { label: '$f(a) = f(b)$, $a \\neq b$', options: ['Two different inputs give the same output', 'The function has no inverse', 'Both — the function is not one-to-one'] }
        ],
        correctAnswers: ['The point (5, 3) is on the graph', 'Find the x-intercept(s)', 'The y-intercept is -2', 'Two different inputs give the same output'],
        hint1: '$f(5) = 3$ means input 5 gives output 3.',
        hint2: '$f(x) = 0$ means the output is 0 — where does the graph cross the x-axis?',
        hint3: '$f(0)$ is the value when $x = 0$, which is where the graph crosses the y-axis.',
        explanation: '$f(5) = 3$ → point $(5,3)$. $f(x) = 0$ → find x-intercepts. $f(0) = -2$ → y-intercept is $-2$. $f(a) = f(b)$ with $a \\neq b$ → two inputs share the same output.'
      }
    },
    {
      id: 'fn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Notation | Meaning |
|----------|---------|
| $f(a)$ | Substitute $a$ for every $x$ |
| $f(x) = k$ | Solve for $x$ — do NOT evaluate $f(k)$ |
| $f(0)$ | The y-intercept |
| $f(x) = 0$ | The x-intercept(s) |
| Domain | All valid inputs (no ÷ 0, no $\\sqrt{\\text{negative}}$) |
| Range | All possible outputs |

- On graphs: $f(a) = b$ means the point $(a, b)$ is on the curve
- For expressions like $f(a+1)$, replace **every** $x$ with $(a+1)$, then simplify`
    }
  ]
};
