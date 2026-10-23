export const precalcFunctionModelingPart4Data = {
  topicSlug: 'function-modeling-precalc',
  sections: [
    {
      id: 'fm4-intro',
      type: 'text' as const,
      content: `# 🧭 Function Model Selection and Construction

**Part 4 of 7 — Piecewise-Defined Functions: Notation and Evaluation**

### One Function, Several Rules

Most functions use **one rule** for every input, like $f(x) = 2x + 1$. A **piecewise-defined function** switches rules depending on where the input lands.

A parking garage is a classic example:

| Input ($x$ = hours parked) | Rule (cost in dollars) |
|:---|:---|
| First $2$ hours | flat $5$ |
| After $2$ hours | $5$ plus $3$ per extra hour |

The cost is still a function of hours (every input has exactly one output), but the formula you use **depends on the input**.

We collect the rules under a single **brace**:

$$
f(x) = \\begin{cases}
2x + 1 & x < 0 \\\\
x^2 & x \\ge 0
\\end{cases}
$$

> **Key Fact:** The brace does not make two functions. It is shorthand for one function with several rules, each paired with the part of the domain where it applies.`
    },
    {
      id: 'fm4-notation',
      type: 'text' as const,
      content: `## Reading the Brace

Every row has **two parts**: a **rule** on the left and a **condition** on the right.

$$\\underbrace{2x + 1}_{\\text{the rule}} \\qquad \\underbrace{x < 0}_{\\text{the condition}}$$

To evaluate, ask one question: **which condition does my input satisfy?** Then use that row's rule and no other.

For $f(x) = \\begin{cases} 2x + 1 & x < 0 \\\\ x^2 & x \\ge 0 \\end{cases}$:

- $x = -3$ satisfies $x < 0$, so use the top rule: $f(-3) = 2(-3) + 1 = -5$.
- $x = 4$ satisfies $x \\ge 0$, so use the bottom rule: $f(4) = 4^2 = 16$.
- $x = 0$: is $0 < 0$? No. Is $0 \\ge 0$? Yes. Bottom rule: $f(0) = 0$.

### The boundary

The symbols $<$ and $>$ **exclude** the endpoint; $\\le$ and $\\ge$ **include** it. At a boundary value, exactly one condition is true: the one with the "or equal to" line.

### Conditions must not overlap

If two conditions claimed the same $x$, that input would have two outputs, and $f$ would not be a function. The conditions $x < 0$ and $x \\ge 0$ never overlap. (A piecewise function does not have to cover every real number: its domain is simply the union of its conditions.)

### Absolute value is piecewise

The absolute value function is the most familiar piecewise-defined function:

$$\\lvert x \\rvert = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}$$

For example, $g(x) = \\lvert x - 3 \\rvert$ equals $x - 3$ when $x \\ge 3$ and $3 - x$ when $x < 3$: the expression inside is made non-negative by flipping its sign on the interval where it is negative.`
    },
    {
      id: 'fm4-evaluate',
      type: 'text' as const,
      content: `## Evaluating, Step by Step

Use this function throughout:

$$
f(x) = \\begin{cases}
-x - 2 & x < -1 \\\\
x^2 & -1 \\le x < 2 \\\\
6 & x \\ge 2
\\end{cases}
$$

### Find $f(-4)$

**Pick the piece.** Is $-4 < -1$? Yes: top rule. **Substitute.** $f(-4) = -(-4) - 2 = 2$.

### Find $f(1)$

**Pick the piece.** Is $-1 \\le 1 < 2$? Yes: middle rule. **Substitute.** $f(1) = 1^2 = 1$.

### Find $f(5)$

**Pick the piece.** Is $5 \\ge 2$? Yes: bottom rule, the constant $6$. So $f(5) = 6$. The input does not appear in a constant rule, so the output is $6$ for **every** $x \\ge 2$.

### Find $f(-1)$: a boundary

- Top condition $x < -1$: is $-1 < -1$? **No** (strict).
- Middle condition $-1 \\le x < 2$: is $-1 \\le -1$? **Yes**.

So $f(-1) = (-1)^2 = 1$.

| Input | Condition satisfied | Rule | Output |
|:---:|:---:|:---:|:---:|
| $-4$ | $x < -1$ | $-x - 2$ | $2$ |
| $-1$ | $-1 \\le x < 2$ | $x^2$ | $1$ |
| $1$ | $-1 \\le x < 2$ | $x^2$ | $1$ |
| $2$ | $x \\ge 2$ | $6$ | $6$ |
| $5$ | $x \\ge 2$ | $6$ | $6$ |

> **Key Fact:** Do not grab the rule whose number "looks close." Read the inequality sign at the boundary.`
    },
    {
      id: 'fm4-mc',
      type: 'multiple-choice' as const,
      content: '**Which piece applies?** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\begin{cases} 2x + 1 & x < 0 \\\\ x^2 & x \\ge 0 \\end{cases}$, which rule applies to the input $x = -3$, and what is $f(-3)$?',
            options: ['The top rule applies; $f(-3) = -5$', 'The bottom rule; $f(-3) = 9$', 'The top rule; $f(-3) = 5$', 'Both rules; $f(-3)$ is undefined'],
            correctAnswer: 0,
            explanation: 'Since $-3 < 0$, the top condition holds, and $2(-3) + 1 = -5$. Squaring would use the wrong piece, and $5$ drops the sign of $-6$. Exactly one condition is ever true.'
          },
          {
            question: 'For $g(x) = \\begin{cases} 3x & x \\le 1 \\\\ x + 5 & x > 1 \\end{cases}$, what is $g(1)$?',
            options: ['$3$', '$6$', '$8$', 'Undefined'],
            correctAnswer: 0,
            explanation: 'The top condition $x \\le 1$ includes $1$, so $g(1) = 3(1) = 3$. The bottom piece needs $x > 1$ strictly, so $1 + 5 = 6$ is not the value. The input is in the domain, so $g(1)$ is defined.'
          },
          {
            question: 'Why must the conditions of a piecewise-defined function never overlap?',
            options: ['Otherwise a single input could have two outputs', 'Otherwise the graph would have a gap', 'Otherwise the function could not be increasing', 'Otherwise the function would have no zeros'],
            correctAnswer: 0,
            explanation: 'A function assigns exactly one output to each input. Overlapping conditions could give two different outputs for one input. Gaps, monotonicity and zeros have nothing to do with the requirement.'
          }
        ]
      }
    },
    {
      id: 'fm4-input',
      type: 'input-boxes' as const,
      content: `**Evaluate it.** ✍️

Use $f(x) = \\begin{cases} -x - 2 & x < -1 \\\\ x^2 & -1 \\le x < 2 \\\\ 6 & x \\ge 2 \\end{cases}$

**1)** $f(-4)$:

**2)** $f(0)$:

**3)** $f(2)$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0', '6'],
        hint1: '$-4 < -1$: top rule, $-(-4) - 2$.',
        hint2: '$-1 \\le 0 < 2$: middle rule, $0^2$.',
        hint3: 'Is $2 \\ge 2$? Yes, so the bottom rule applies, not the middle one.',
        explanation: '(1) $f(-4) = 4 - 2 = 2$. (2) $f(0) = 0^2 = 0$. (3) The middle condition $x < 2$ excludes $2$, and $x \\ge 2$ includes it, so $f(2) = 6$.'
      }
    },
    {
      id: 'fm4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each input to its piece.** 🔽

For $f(x) = \\begin{cases} -x - 2 & x < -1 \\\\ x^2 & -1 \\le x < 2 \\\\ 6 & x \\ge 2 \\end{cases}$ and $g(x) = \\lvert x - 3 \\rvert$:`,
      exercise: {
        dropdowns: [
          {
            label: 'The input $x = -1$ uses:',
            options: ['$x^2$ (middle)', '$-x - 2$ (top)', '$6$ (bottom)', 'no rule applies'],
            correctAnswer: 0
          },
          {
            label: 'The input $x = -2$ uses:',
            options: ['$-x - 2$ (top)', '$x^2$ (middle)', '$6$ (bottom)', 'no rule applies'],
            correctAnswer: 0
          },
          {
            label: 'The input $x = 3$ uses:',
            options: ['$6$ (bottom)', '$x^2$ (middle)', '$-x - 2$ (top)', 'no rule applies'],
            correctAnswer: 0
          },
          {
            label: 'In the piecewise form of $g(x) = \\lvert x - 3 \\rvert$, the rule $3 - x$ is used where $x - 3$ is negative, that is, when:',
            options: ['$x < 3$', '$x > 3$', '$x < 0$', '$x \\ge 3$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$x^2$ (middle)', '$-x - 2$ (top)', '$6$ (bottom)', '$x < 3$'],
        hint1: 'The middle condition uses $\\le$, so $-1$ belongs to it; the top condition $x < -1$ is strict.',
        hint2: 'Is $-2 < -1$?',
        hint3: 'Is $3 \\ge 2$? For $g$: when is $x - 3$ negative?',
        explanation: '$-1$ satisfies $-1 \\le x < 2$ (middle). $-2 < -1$ (top). $3 \\ge 2$ (bottom). For the absolute value, $x - 3$ is negative when $x < 3$, and that is where the sign flips to $3 - x$; at $x = 3$ both expressions give $0$, and the $\\ge$ piece is the one that includes it.'
      }
    },
    {
      id: 'fm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- A piecewise-defined function is **one function** with a rule for each part of its domain
- To evaluate: find the **one** condition the input satisfies, then use **only** that rule
- $<$ and $>$ **exclude** the boundary; $\\le$ and $\\ge$ **include** it
- Conditions must **not overlap**; they need not cover every real number
- $\\lvert x \\rvert$ is piecewise: $x$ for $x \\ge 0$ and $-x$ for $x < 0$

> **Up Next:** Part 5 — graphing with open and closed dots, and building piecewise models from words and data.`
    }
  ]
};
