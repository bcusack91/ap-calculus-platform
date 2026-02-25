export const satLinearEquationsPart4Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l4-intro',
      type: 'text' as const,
      content: `
# 🔗 Systems of Linear Equations

**Part 4 of 7 — Substitution and Elimination**

A **system of equations** is two (or more) equations with the same variables. The solution is the point $(x, y)$ that satisfies **both** equations simultaneously.

The SAT tests two methods:
1. **Substitution** — solve one equation for a variable, plug it into the other
2. **Elimination** — add or subtract equations to cancel a variable

Both methods give the same answer. Choose whichever is faster for the problem!
      `
    },
    {
      id: 'sat-l4-substitution',
      type: 'text' as const,
      content: `
**Method 1: Substitution**

Use substitution when one equation already has a variable isolated (or is easy to isolate).

**Example:** Solve the system:
$$y = 2x + 1$$
$$3x + y = 11$$

Since $y = 2x + 1$, substitute into the second equation:

$$3x + (2x + 1) = 11$$
$$5x + 1 = 11$$
$$5x = 10$$
$$x = 2$$

Now find $y$: $y = 2(2) + 1 = 5$

**Solution:** $(2, 5)$

**Check in both equations:** $5 = 2(2) + 1$ ✓ and $3(2) + 5 = 11$ ✓
      `
    },
    {
      id: 'sat-l4-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Given the system $y = x - 3$ and $2x + y = 12$, what is the value of $x$?',
            options: [
              '$3$',
              '$5$',
              '$7$',
              '$9$'
            ],
            correctAnswer: 1,
            explanation: 'Substitute $y = x - 3$ into the second equation: $2x + (x - 3) = 12$. Simplify: $3x - 3 = 12$. Add 3: $3x = 15$. Divide by 3: $x = 5$.'
          }
        ]
      }
    },
    {
      id: 'sat-l4-elimination',
      type: 'text' as const,
      content: `
**Method 2: Elimination**

Use elimination when both equations have the same variable with coefficients that are easy to match.

**Example:** Solve the system:
$$2x + 3y = 16$$
$$2x - y = 4$$

Subtract the second equation from the first to eliminate $x$:

$$(2x + 3y) - (2x - y) = 16 - 4$$
$$4y = 12$$
$$y = 3$$

Plug back in: $2x - 3 = 4 \\Rightarrow 2x = 7 \\Rightarrow x = 3.5$

**Solution:** $(3.5, 3)$

---

**When to multiply first:** If coefficients don't match, multiply one or both equations to make them match.

**Example:** To eliminate $y$ from $3x + 2y = 14$ and $x + 5y = 9$, multiply the first equation by 5 and the second by 2, then subtract.
      `
    },
    {
      id: 'sat-l4-practice',
      type: 'input-boxes' as const,
      content: `
**Solve each system. Enter the value of $x$.** 🧮

1) $x + y = 10$ and $x - y = 4$

2) $y = 3x$ and $x + y = 16$
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['7', '4'],
        hint1: 'For #1: Add the two equations to eliminate $y$: $(x + y) + (x - y) = 14$.',
        hint2: 'For #2: Substitute $y = 3x$ into $x + y = 16$: $x + 3x = 16$.',
        explanation: '1) Adding: $2x = 14 \\Rightarrow x = 7$. Then $y = 3$. 2) $4x = 16 \\Rightarrow x = 4$. Then $y = 12$.'
      }
    },
    {
      id: 'sat-l4-special',
      type: 'text' as const,
      content: `
**Special Cases on the SAT**

Not every system has exactly one solution:

| Result | What happens | Meaning |
|--------|-------------|---------|
| One solution | You get $x = $ a number | Lines intersect at one point |
| No solution | You get $0 = 5$ (contradiction) | Lines are **parallel** (same slope, different intercept) |
| Infinite solutions | You get $0 = 0$ (always true) | Equations describe the **same line** |

The SAT frequently asks: *"How many solutions does this system have?"* — look for these patterns!
      `
    },
    {
      id: 'sat-l4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'How many solutions does the system $2x + 4y = 10$ and $x + 2y = 5$ have?',
            options: [
              'No solution',
              'Exactly one solution',
              'Exactly two solutions',
              'Infinitely many solutions'
            ],
            correctAnswer: 3,
            explanation: 'Multiply the second equation by 2: $2x + 4y = 10$. This is identical to the first equation! The equations represent the same line, so there are infinitely many solutions.'
          },
          {
            question: 'At a bakery, 3 muffins and 2 coffees cost \\$13. One muffin and 2 coffees cost \\$7. What is the price of one muffin?',
            options: [
              '\\$2',
              '\\$3',
              '\\$4',
              '\\$5'
            ],
            correctAnswer: 1,
            explanation: 'Set up: $3m + 2c = 13$ and $m + 2c = 7$. Subtract the second from the first: $2m = 6 \\Rightarrow m = 3$. One muffin costs \\$3.'
          }
        ]
      }
    }
  ]
}
