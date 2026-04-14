export const satFunctionsPart4Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn4-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 4 of 7 — Piecewise & Absolute Value Functions**

### Piecewise Functions

A function defined by different rules for different parts of its domain:

$$f(x) = \\begin{cases} x + 3 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$$

$f(-2) = -2 + 3 = 1$ (use first rule since $-2 < 0$)

$f(3) = 9$ (use second rule since $3 \\geq 0$)

### Absolute Value as Piecewise

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

### Graphing $y = a|x - h| + k$

- V-shaped graph with vertex at $(h, k)$
- Opens up if $a > 0$, opens down if $a < 0$
- Slope of right branch is $a$, left branch is $-a$

---

### Worked Example 1

**Evaluate $f(x) = \\begin{cases} 2x - 1 & x \\leq 3 \\\\ x^2 - 4 & x > 3 \\end{cases}$ at $x = 3$ and $x = 5$.**

| Input | Which rule? | Calculation | Result |
|-------|------------|-------------|--------|
| $x = 3$ | $3 \\leq 3$ → first rule | $2(3) - 1$ | $5$ |
| $x = 5$ | $5 > 3$ → second rule | $5^2 - 4$ | $21$ |

### SAT Graph Reading

When the SAT shows a piecewise graph, read each segment separately. Check:
- What's the y-value at specific x-values?
- Are the endpoints open circles (excluded) or closed circles (included)?`
    },
    {
      id: 'fn4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Piecewise Functions** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = |x - 3| + 2$, what is $f(1)$?',
            options: ['$4$', '$2$', '$0$', '$6$'],
            correctAnswer: 0,
            explanation: '$f(1) = |1 - 3| + 2 = |-2| + 2 = 2 + 2 = 4$.'
          },
          {
            question: 'For $g(x) = \\begin{cases} 2x + 1 & x < 3 \\\\ x^2 - 2 & x \\geq 3 \\end{cases}$, what is $g(3)$?',
            options: ['$7$', '$6$', '$9$', '$5$'],
            correctAnswer: 0,
            explanation: 'Since $3 \\geq 3$, use the second rule: $g(3) = 3^2 - 2 = 7$.'
          },
          {
            question: 'The graph of $y = -|x + 1| + 5$ has its vertex at:',
            options: ['$(-1, 5)$', '$(1, 5)$', '$(-1, -5)$', '$(1, -5)$'],
            correctAnswer: 0,
            explanation: 'Form $y = a|x - h| + k$: here $h = -1$, $k = 5$, $a = -1$. Vertex at $(-1, 5)$, opening downward.'
          }
        ]
      }
    },
    {
      id: 'fn4-text2',
      type: 'text' as const,
      content: `### Solving Absolute Value Equations

$$|ax + b| = c$$

Split into two cases: $ax + b = c$ or $ax + b = -c$ (only when $c \\geq 0$).

### Worked Example 2

**Solve $|2x - 5| = 7$.**

| Case | Equation | Solution |
|------|----------|----------|
| Positive | $2x - 5 = 7$ | $x = 6$ |
| Negative | $2x - 5 = -7$ | $x = -1$ |

Both solutions: $x = 6$ and $x = -1$.

### Worked Example 3

**For what values of $x$ is $|x - 4| \\leq 3$?**

| Step | Work |
|------|------|
| Remove absolute value | $-3 \\leq x - 4 \\leq 3$ |
| Add 4 to all parts | $1 \\leq x \\leq 7$ |
| In interval notation | $[1, 7]$ |

> **SAT Tip:** $|x - a| \\leq d$ means "$x$ is within $d$ units of $a$."  So $|x - 4| \\leq 3$ means $x$ is within 3 of 4.`
    },
    {
      id: 'fn4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Absolute Value Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many solutions does $|3x + 1| = -5$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: 'Absolute value is always $\\geq 0$, so it can never equal $-5$. No solutions.'
          },
          {
            question: 'What is the sum of all solutions to $|x - 2| = 6$?',
            options: ['$4$', '$8$', '$0$', '$10$'],
            correctAnswer: 0,
            explanation: '$x - 2 = 6$ → $x = 8$. $x - 2 = -6$ → $x = -4$. Sum: $8 + (-4) = 4$.'
          },
          {
            question: 'The function $f(x) = 2|x| - 3$ has how many x-intercepts?',
            options: ['$2$', '$0$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: 'Set $2|x| - 3 = 0$ → $|x| = 3/2$ → $x = \\pm 3/2$. Two x-intercepts.'
          }
        ]
      }
    },
    {
      id: 'fn4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Piecewise or Absolute Value?** 🔍\n\nClassify each function type and identify key features.',
      exercise: {
        dropdowns: [
          { label: '$f(x) = |x - 2| + 1$: vertex', options: ['(2, 1)', '(-2, 1)', '(2, -1)', '(1, 2)'] },
          { label: '$f(x) = -3|x| + 6$: opens', options: ['Downward', 'Upward', 'Left', 'Right'] },
          { label: '$|x + 5| = 0$: number of solutions', options: ['1', '0', '2', 'Infinitely many'] },
          { label: '$|2x - 1| = 9$: sum of solutions', options: ['1', '5', '10', '0'] }
        ],
        correctAnswers: ['(2, 1)', 'Downward', '1', '1'],
        hint1: 'For $a|x - h| + k$, the vertex is at $(h, k)$.',
        hint2: 'Negative coefficient → opens downward.',
        hint3: '$|x + 5| = 0$ → $x = -5$ only.',
        explanation: 'Vertex of $|x-2|+1$ is $(2,1)$. $-3|x|+6$ opens down ($a < 0$). $|x+5|=0$ has one solution $x=-5$. $|2x-1|=9$: $x=5$ or $x=-4$, sum $= 1$.'
      }
    },
    {
      id: 'fn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Concept | Key Rule |
|---------|----------|
| Piecewise | Check which condition $x$ satisfies, use that rule |
| $y = a|x - h| + k$ | V-shape, vertex at $(h, k)$ |
| $|A| = c$ ($c > 0$) | Two solutions: $A = c$ or $A = -c$ |
| $|A| = 0$ | One solution: $A = 0$ |
| $|A| = c$ ($c < 0$) | No solution — absolute value can't be negative |
| $|x - a| \\leq d$ | $x$ is within $d$ units of $a$: $a - d \\leq x \\leq a + d$ |
| Open vs closed circles | Open = excluded, closed = included |`
    }
  ]
};
