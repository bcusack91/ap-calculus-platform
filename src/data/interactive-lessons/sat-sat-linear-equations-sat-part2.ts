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
      content: '**Systems of Equations** 🎯',
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
      id: 'le2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Substitution**: best when a variable is isolated ($y = ...$)
- **Elimination**: best when coefficients match or nearly match
- **No solution**: same slope, different intercept (parallel lines)
- **Infinite solutions**: same slope AND same intercept (same line)
- SAT shortcut: to find a combo like $x + y$, look for ways to avoid solving for individual variables`
    }
  ]
};
