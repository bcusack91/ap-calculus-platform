export const satLinearEquationsPart2Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le2-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 2 of 7 — Systems of Linear Equations**

Systems of equations appear on nearly every SAT. You need to be fast and flexible with solving methods.

### Method 1: Substitution

Best when one variable is already isolated.

**Example:**
$$y = 2x + 1$$
$$3x + y = 11$$

Substitute: $3x + (2x + 1) = 11$ → $5x = 10$ → $x = 2$, $y = 5$

### Method 2: Elimination

Best when coefficients can be matched easily.

**Example:**
$$2x + 3y = 7$$
$$2x - y = 3$$

Subtract: $4y = 4$ → $y = 1$, $x = 2$

---

### Worked Example 1 — Deciding Which Method

**Solve:** $3x + 4y = 18$ and $x - 2y = -1$

| Step | Work |
|------|------|
| Check for isolated variable | Second eq: $x = 2y - 1$ ✓ → use substitution |
| Substitute into first | $3(2y - 1) + 4y = 18$ |
| Simplify | $6y - 3 + 4y = 18$ → $10y = 21$ |
| Solve for $y$ | $y = 2.1$ |
| Back-substitute | $x = 2(2.1) - 1 = 3.2$ |

### Worked Example 2 — Elimination with Multiplication

**Solve:** $2x + 5y = 1$ and $3x + 2y = -4$

| Step | Work |
|------|------|
| Make $x$-coefficients match | Multiply eq 1 by 3, eq 2 by 2 |
| New system | $6x + 15y = 3$ and $6x + 4y = -8$ |
| Subtract | $11y = 11$ → $y = 1$ |
| Back-substitute | $2x + 5(1) = 1$ → $x = -2$ |

### Special Cases

| Condition | Result | Lines |
|-----------|--------|-------|
| One solution | $x = a, y = b$ | Lines intersect |
| No solution | $0 = k$ (contradiction) | Lines are parallel |
| Infinite solutions | $0 = 0$ (identity) | Lines are the same |

### SAT Strategy 💡

If the SAT asks "For what value of $k$ does the system have no solution?" — make the slopes equal but the y-intercepts different. Parallel lines = no solution.`
    },
    {
      id: 'le2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Systems of Equations — Solving** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $x + y = 10$ and $x - y = 4$, what is $x$?',
            options: ['$7$', '$3$', '$5$', '$6$'],
            correctAnswer: 0,
            explanation: 'Add the equations: $2x = 14$ → $x = 7$. (Then $y = 3$.) Elimination is fastest here.'
          },
          {
            question: 'The system $2x + 3y = 6$ and $4x + 6y = k$ has infinitely many solutions when $k$ equals:',
            options: ['$12$', '$6$', '$0$', '$24$'],
            correctAnswer: 0,
            explanation: 'The second equation is exactly 2× the first. So $k = 2 \\times 6 = 12$. If $k \\neq 12$, there are no solutions (parallel lines).'
          },
          {
            question: 'A store sells apples for \\$2 each and bananas for \\$1 each. Maria buys 8 fruits for \\$11. How many apples did she buy?',
            options: ['$3$', '$5$', '$4$', '$6$'],
            correctAnswer: 0,
            explanation: 'Let $a$ = apples, $b$ = bananas. $a + b = 8$ and $2a + b = 11$. Subtract: $a = 3$. She bought 3 apples and 5 bananas.'
          }
        ]
      }
    },
    {
      id: 'le2-text2',
      type: 'text' as const,
      content: `### The "Combo" Shortcut

Sometimes the SAT asks for an *expression* like $x + y$ or $2x - y$ rather than individual values. You can often find these directly!

### Worked Example 3

**Given:** $4x + 3y = 17$ and $2x + 3y = 11$. **Find $2x$.**

| Step | Work |
|------|------|
| Subtract equations | $(4x + 3y) - (2x + 3y) = 17 - 11$ |
| Simplify | $2x = 6$ |

No need to find $x$ and $y$ separately!

### Worked Example 4

**Given:** $x + 2y = 5$ and $3x - 2y = 7$. **Find $x + y$.**

| Step | Work |
|------|------|
| Add equations | $4x = 12$ → $x = 3$ |
| Substitute | $3 + 2y = 5$ → $y = 1$ |
| Answer | $x + y = 4$ |

> **SAT Tip:** Always check if the requested expression can be obtained by adding or subtracting the two equations before solving individually.`
    },
    {
      id: 'le2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Systems — Harder Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $5x - 3y = 22$ and $5x + 3y = 8$, what is the value of $y$?',
            options: ['$-\\frac{7}{3}$', '$3$', '$\\frac{7}{3}$', '$-3$'],
            correctAnswer: 0,
            explanation: 'Subtract first from second: $6y = -14$ → $y = -7/3$. Or add: $10x = 30$ → $x = 3$, then $15 + 3y = 8$ → $y = -7/3$.'
          },
          {
            question: 'For what value of $a$ does $ax - 2y = 5$ and $6x - 4y = 3$ have no solution?',
            options: ['$3$', '$6$', '$-3$', '$12$'],
            correctAnswer: 0,
            explanation: 'No solution → parallel → same slope. First: $y = (a/2)x - 5/2$. Second: $y = (3/2)x - 3/4$. Set $a/2 = 3/2$ → $a = 3$. Check intercepts differ: $-5/2 \\neq -3/4$ ✓.'
          },
          {
            question: 'If $2x + y = a$ and $x - y = b$, what is $x$ in terms of $a$ and $b$?',
            options: ['$\\frac{a + b}{3}$', '$\\frac{a - b}{3}$', '$a + b$', '$\\frac{a + b}{2}$'],
            correctAnswer: 0,
            explanation: 'Add: $3x = a + b$ → $x = (a + b)/3$. This works exactly like a system with numbers — just with letters.'
          }
        ]
      }
    },
    {
      id: 'le2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the System** 🔍\n\nFor each system, determine the number of solutions.',
      exercise: {
        dropdowns: [
          { label: '$y = 3x + 1$ and $y = 3x - 4$', options: ['No solution', 'One solution', 'Infinitely many'] },
          { label: '$2x + y = 5$ and $x - y = 1$', options: ['No solution', 'One solution', 'Infinitely many'] },
          { label: '$4x - 6y = 10$ and $2x - 3y = 5$', options: ['No solution', 'One solution', 'Infinitely many'] },
          { label: '$y = -x + 3$ and $y = 2x - 6$', options: ['No solution', 'One solution', 'Infinitely many'] }
        ],
        correctAnswers: ['No solution', 'One solution', 'Infinitely many', 'One solution'],
        hint1: 'Compare the slopes. Same slope + different intercept = no solution.',
        hint2: 'If the second equation is a multiple of the first, the lines are identical.',
        hint3: 'Different slopes always means the lines intersect at exactly one point.',
        explanation: 'Same slope ($m = 3$) with different intercepts → no solution (parallel). Different slopes → one solution. $4x - 6y = 10$ is exactly $2(2x - 3y = 5)$ → infinitely many. $m = -1$ vs $m = 2$ → one solution.'
      }
    },
    {
      id: 'le2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Strategy | When to Use |
|----------|-------------|
| Substitution | One variable is already isolated |
| Elimination | Coefficients match or nearly match |
| Combo shortcut | SAT asks for an expression, not individual values |

- **No solution**: same slope, different intercept (parallel lines)
- **Infinite solutions**: same slope AND same intercept (same line)
- **One solution**: different slopes (lines intersect)
- Always read what the question asks — $x$? $y$? $x + y$? $3x - 2y$?
- If the answer choices are simple numbers, try back-solving`
    }
  ]
};
