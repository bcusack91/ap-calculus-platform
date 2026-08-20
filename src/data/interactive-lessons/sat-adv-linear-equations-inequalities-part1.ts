export const lessonData = {
  topicSlug: 'sat-linear-equations-inequalities-advanced',
  sections: [
    {
      id: 'advlei1-patterns',
      type: 'text' as const,
      content: `# The 700-800 Patterns: Linear Equations & Inequalities

**Part 1 of 3 — The Three Archetypes the Hardest Items Reuse**

At the 700-800 level, linear equation questions stop testing whether you can solve — they test whether you notice **structure** and answer **the exact quantity asked**. Three archetypes cover nearly every hard item.

### Archetype 1: Parameter Equations (No Solution / Infinitely Many)

An equation like $a(2x - 1) + 7 = 6x + 3$ with a constant $a$:

- **No solution**: the $x$-coefficients match, but the constants don't.
- **Infinitely many solutions** ("true for all $x$"): the $x$-coefficients match AND the constants match.

**Worked example.** For what value of $a$ does $a(5x + 2) = 20x + 9$ have no solution?

Expand: $5ax + 2a = 20x + 9$. Match coefficients: $5a = 20$, so $a = 4$. Check constants: $2a = 8 \\ne 9$. Constants differ, so $a = 4$ gives no solution. If the question said "true for all $x$," you'd need BOTH $5a = 20$ and $2a = 9$ — impossible here, so no such $a$ would exist.

**Speed move:** the coefficient equation gives the candidate instantly. Only the constants decide between "no solution" and "infinitely many."

### Archetype 2: Solve for $x$... Then Answer Something Else

Hard items almost never ask for the variable you solve for. They ask for the **total**, the **difference**, or an **expression** like $\\frac{x + 3}{2}$. The option list always contains your intermediate value — that's the trap.

**Worked example.** A café sold $6$ more lattes than mochas. Lattes are $\\$5$, mochas are $\\$4$, total revenue $\\$174$. How many **total drinks**?

Let $m$ = mochas: $5(m + 6) + 4m = 174$, so $9m + 30 = 174$, $9m = 144$, $m = 16$. Lattes: $22$. **Total: $38$.** The options will include $16$ and $22$ — both are bait for someone who stops early.

### Archetype 3: Constrained Maximum (Fees, Thresholds, Round DOWN)

"Greatest number of ___ within budget" items add a flat fee, sometimes a **conditional** fee that only applies past a threshold, then punish rounding errors.

**Worked example.** Rental: $\\$80$ flat plus $\\$14$ per hour; jobs over $10$ hours add a $\\$35$ surcharge. Budget $\\$300$. Max whole hours?

Past 10 hours: $80 + 35 + 14h \\le 300$, so $14h \\le 185$, $h \\le 13.2$, giving $h = 13$. Verify: $115 + 14(13) = 297 \\le 300$; $14$ hours would cost $311$. **Always round down and verify the boundary.**`
    },
    {
      id: 'advlei1-q1',
      type: 'quiz' as const,
      question: 'In the equation $3(4x - 5) = ax + 7$, $a$ is a constant. If the equation has no solution, what is the value of $a$?',
      options: ['$-12$', '$3$', '$7$', '$12$'],
      correctAnswer: 3,
      explanation: 'Expand the left side: $12x - 15 = ax + 7$. No solution requires matching $x$-coefficients with different constants: $a = 12$, and indeed $-15 \\ne 7$, so the lines are parallel and distinct. $-12$ is a sign error from moving $ax$ across the equals sign. $3$ is the multiplier out front, not $a$. $7$ is the constant on the right — a value you check, not the answer.'
    },
    {
      id: 'advlei1-q2',
      type: 'quiz' as const,
      question: `A food truck sells tacos for $\\$3.50$ each and burritos for $\\$6.00$ each. On Friday it sold 12 more tacos than burritos and collected $\\$137.00$ in total. What was the total number of items sold?`,
      options: ['$10$', '$22$', '$32$', '$44$'],
      correctAnswer: 2,
      explanation: 'Let $b$ be burritos; tacos are $b + 12$. Revenue: $3.50(b + 12) + 6b = 137$, so $9.5b + 42 = 137$, giving $9.5b = 95$ and $b = 10$. Tacos: $22$. Total items: $10 + 22 = 32$. The traps: $10$ is the burrito count alone, $22$ is the taco count alone — both intermediate values. $44$ comes from doubling $22$, which would only work if the counts were equal, but they differ by $12$.'
    },
    {
      id: 'advlei1-q3',
      type: 'quiz' as const,
      question: `A party hall charges a $\\$200$ flat fee plus $\\$15$ per guest. Any event with more than 50 guests requires extra staff for a one-time $\\$75$ charge. A host's budget is $\\$1{,}100$. What is the greatest number of guests the host can invite?`,
      options: ['$50$', '$55$', '$56$', '$60$'],
      correctAnswer: 1,
      explanation: 'With more than $50$ guests the cost is $200 + 75 + 15g \\le 1100$, so $15g \\le 825$ and $g \\le 55$. Check the boundary: $275 + 15(55) = 1100$ exactly — the budget is met, so $55$ works, while $56$ guests would cost $1{,}115$. $50$ is the staffing threshold, not the budget limit. $60$ comes from ignoring the $\\$75$ surcharge: $900 \\div 15 = 60$. Staying at exactly $50$ guests avoids the surcharge but invites fewer people, so it is not the greatest.'
    }
  ]
};
