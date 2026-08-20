export const lessonData = {
  topicSlug: 'sat-systems-linear-equations-advanced',
  sections: [
    {
      id: 'advsys1-patterns',
      type: 'text' as const,
      content: `# The 700-800 Patterns: Systems of Linear Equations

**Part 1 of 3 — The Three Structures Behind Every Hard System**

Hard-tier systems questions rarely want you to grind out $x$ and $y$. They test whether you see the **proportionality structure**, the **combination shortcut**, or the **quantity actually requested**.

### Archetype 1: Parameter Values for No Solution / Infinitely Many

For $Ax + By = C$ and $Dx + Ey = F$:

- **No solution**: left sides proportional, constants NOT in the same proportion (parallel, distinct lines).
- **Infinitely many**: the entire second equation is a constant multiple of the first (same line).

**Worked example.** $5x - 2y = 8$ and $ax + 6y = 7$ has no solution. Find $a$.

The $y$-coefficients fix the scale factor: $6 \\div (-2) = -3$. Apply it to the $x$-coefficient: $a = 5(-3) = -15$. Verify the constants break the proportion: $8(-3) = -24 \\ne 7$. Done — one division, one multiplication. **Watch the sign on the scale factor**; it is the single most common error here.

### Archetype 2: The Combination Shortcut ($x + y$ or $x - y$ Directly)

When coefficients are "mirrored" ($2x + 5y$ and $5x + 2y$), the test is inviting you to add or subtract whole equations:

- **Add** mirrored equations to get a multiple of $x + y$.
- **Subtract** them to get a multiple of $x - y$.

**Worked example.** $4x + 9y = 70$ and $9x + 4y = 60$. Find $x + y$.

Add: $13x + 13y = 130$, so $x + y = 10$. Five seconds. Solving for $x$ and $y$ individually wastes a minute and creates arithmetic risk — and the individual values are always planted as distractors.

### Archetype 3: The System Is Easy — the Question Isn't

Word-problem systems (ticket sales, mixtures, break-even) hide the difficulty in the **final ask**: revenue from one category, the *difference* between amounts, or a value for a *different* entity at the solution point.

**Worked example.** Mixing a $10\\%$ solution with a $25\\%$ solution to get $300$ mL of $19\\%$: $x + y = 300$ and $0.10x + 0.25y = 57$. Substituting: $30 + 0.15y = 57$, so $y = 180$, $x = 120$. If the question asks "how many more mL of the $25\\%$ than the $10\\%$?" the answer is $60$ — not $120$, not $180$. Circle the ask before you solve.`
    },
    {
      id: 'advsys1-q1',
      type: 'quiz' as const,
      question: 'In the system $2x + 7y = 12$ and $6x + ky = 5$, $k$ is a constant. If the system has no solution, what is the value of $k$?',
      options: ['$-21$', '$3$', '$14$', '$21$'],
      correctAnswer: 3,
      explanation: 'The $x$-coefficients give the scale factor: $6 \\div 2 = 3$. For the left sides to be proportional, $k = 7 \\times 3 = 21$. Check the constants: $12 \\times 3 = 36 \\ne 5$, so the lines are parallel and distinct — no solution confirmed. $3$ is the scale factor itself, an intermediate value. $-21$ carries a phantom sign error (there are no negatives here). $14$ is $2 \\times 7$, multiplying the wrong pair of coefficients.'
    },
    {
      id: 'advsys1-q2',
      type: 'quiz' as const,
      question: 'The system $10x - 4y = 6$ and $cx + 6y = d$ has infinitely many solutions, where $c$ and $d$ are constants. What is the value of $c + d$?',
      options: ['$-24$', '$-15$', '$-9$', '$24$'],
      correctAnswer: 0,
      explanation: 'Infinitely many solutions means the second equation is a constant multiple of the first. The $y$-coefficients set the factor: $6 \\div (-4) = -\\frac{3}{2}$. Then $c = 10 \\times (-\\frac{3}{2}) = -15$ and $d = 6 \\times (-\\frac{3}{2}) = -9$, so $c + d = -24$. The traps: $-15$ is $c$ alone and $-9$ is $d$ alone — intermediates. $24$ drops the negative on the scale factor. Note the factor is negative because the $y$-coefficients have opposite signs; that sign decision is the whole question.'
    },
    {
      id: 'advsys1-q3',
      type: 'quiz' as const,
      question: 'If $3x + 8y = 71$ and $8x + 3y = 61$, what is the value of $x + y$?',
      options: ['$2$', '$5$', '$12$', '$132$'],
      correctAnswer: 2,
      explanation: 'Mirrored coefficients invite addition: $(3x + 8x) + (8y + 3y) = 71 + 61$ gives $11x + 11y = 132$, so $x + y = 12$ in one step. $132$ is the sum before dividing by $11$ — the classic stopping-short trap. $5$ is $x$ alone and $2$ is $y - x$ (subtracting gives $5x - 5y = -10$, so $y - x = 2$; full solution: $x = 5$, $y = 7$). If you found yourself solving for $x$ and $y$ separately, you took the slow lane the item was built to punish.'
    }
  ]
};
