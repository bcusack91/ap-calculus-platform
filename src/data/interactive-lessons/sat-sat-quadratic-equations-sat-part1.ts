export const satQuadraticsPart1Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe1-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 1 of 7 — Standard Form and Factoring**

Quadratics are one of the most heavily tested topics on the SAT Math section.

### Standard Form: $ax^2 + bx + c = 0$

- $a$ determines the direction of the parabola (up if $a > 0$, down if $a < 0$)
- The vertex is at $x = -\\frac{b}{2a}$

### Factoring

To factor $x^2 + bx + c$, find two numbers that **multiply to $c$** and **add to $b$**.

**Example:** $x^2 + 7x + 12 = 0$
- Numbers that multiply to 12 and add to 7: **3 and 4**
- $(x + 3)(x + 4) = 0$ → $x = -3$ or $x = -4$

---

### Worked Example 1

**Factor and solve $x^2 - 2x - 15 = 0$.**

| Step | Work |
|------|------|
| Find two numbers | Multiply to $-15$, add to $-2$: **3 and $-5$** |
| Factor | $(x + 3)(x - 5) = 0$ |
| Solve | $x = -3$ or $x = 5$ |
| Verify | $(-3)^2 - 2(-3) - 15 = 9 + 6 - 15 = 0$ ✓ |

### Worked Example 2 — Leading Coefficient ≠ 1

**Factor $2x^2 + 7x + 3 = 0$.**

| Step | Work |
|------|------|
| Multiply $a \\cdot c$ | $2 \\times 3 = 6$ |
| Find numbers | Multiply to 6, add to 7: **1 and 6** |
| Split middle term | $2x^2 + x + 6x + 3$ |
| Group | $x(2x + 1) + 3(2x + 1)$ |
| Factor | $(x + 3)(2x + 1) = 0$ |
| Solve | $x = -3$ or $x = -1/2$ |

### Zero Product Property

If $ab = 0$, then $a = 0$ or $b = 0$. This is why factoring works for solving equations.`
    },
    {
      id: 'qe1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Factoring Quadratics** 🎯',
      exercise: {
        questions: [
          {
            question: 'What are the solutions to $x^2 - 5x + 6 = 0$?',
            options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = 1$ and $x = 6$', '$x = -1$ and $x = -6$'],
            correctAnswer: 0,
            explanation: 'Find numbers that multiply to 6 and add to $-5$: $-2$ and $-3$. So $(x-2)(x-3) = 0$, giving $x = 2$ or $x = 3$.'
          },
          {
            question: 'If $(x + k)(x + 3) = x^2 + 7x + 12$, what is the value of $k$?',
            options: ['$4$', '$3$', '$9$', '$12$'],
            correctAnswer: 0,
            explanation: 'Expand: $x^2 + (k+3)x + 3k$. Compare: $k + 3 = 7$ → $k = 4$. (Check: $3k = 12$ ✓)'
          },
          {
            question: 'What is the vertex x-coordinate of $y = 2x^2 - 8x + 5$?',
            options: ['$2$', '$-2$', '$4$', '$-4$'],
            correctAnswer: 0,
            explanation: '$x = -b/(2a) = -(-8)/(2 \\cdot 2) = 8/4 = 2$. The vertex x-coordinate is always $-b/(2a)$.'
          }
        ]
      }
    },
    {
      id: 'qe1-text2',
      type: 'text' as const,
      content: `### Special Factoring Patterns

Memorize these — they save significant time on the SAT.

| Pattern | Formula | Example |
|---------|---------|---------|
| Difference of squares | $a^2 - b^2 = (a+b)(a-b)$ | $x^2 - 9 = (x+3)(x-3)$ |
| Perfect square trinomial | $a^2 + 2ab + b^2 = (a+b)^2$ | $x^2 + 6x + 9 = (x+3)^2$ |
| Perfect square trinomial | $a^2 - 2ab + b^2 = (a-b)^2$ | $x^2 - 10x + 25 = (x-5)^2$ |

### Worked Example 3

**Factor $4x^2 - 25$.**

| Step | Work |
|------|------|
| Recognize pattern | $(2x)^2 - 5^2$ → difference of squares |
| Apply formula | $(2x + 5)(2x - 5)$ |
| Solutions if $= 0$ | $x = -5/2$ or $x = 5/2$ |

### Worked Example 4

**Is $x^2 + 8x + 16$ a perfect square trinomial?**

| Step | Work |
|------|------|
| Check structure | $a = x$, is $8x = 2ab$? → $b = 4$ |
| Check last term | $b^2 = 16$ ✓ |
| Factor | $(x + 4)^2$ |

> **SAT Tip:** When you see $x^2 + bx + c$ and $c = (b/2)^2$, it's a perfect square trinomial.`
    },
    {
      id: 'qe1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Special Patterns** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which is the factored form of $9x^2 - 16$?',
            options: ['$(3x + 4)(3x - 4)$', '$(9x + 4)(x - 4)$', '$(3x - 4)^2$', '$(3x + 16)(3x - 1)$'],
            correctAnswer: 0,
            explanation: 'Difference of squares: $(3x)^2 - 4^2 = (3x + 4)(3x - 4)$.'
          },
          {
            question: 'If $x^2 - 14x + k$ is a perfect square trinomial, what is $k$?',
            options: ['$49$', '$196$', '$7$', '$14$'],
            correctAnswer: 0,
            explanation: 'For a perfect square: $k = (b/2)^2 = (-14/2)^2 = (-7)^2 = 49$. Then $x^2 - 14x + 49 = (x-7)^2$.'
          },
          {
            question: 'Factor: $x^2 + 3x - 18 = 0$. What is the positive solution?',
            options: ['$3$', '$6$', '$-6$', '$18$'],
            correctAnswer: 0,
            explanation: 'Find numbers that multiply to $-18$ and add to $3$: $6$ and $-3$. $(x + 6)(x - 3) = 0$ → $x = -6$ or $x = 3$. Positive: $3$.'
          }
        ]
      }
    },
    {
      id: 'qe1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Factoring Method** 🔍\n\nFor each expression, select the best factoring approach.',
      exercise: {
        dropdowns: [
          { label: '$x^2 - 49$', options: ['Difference of squares', 'AC method', 'Perfect square', 'GCF first'] },
          { label: '$x^2 + 10x + 25$', options: ['Difference of squares', 'AC method', 'Perfect square', 'GCF first'] },
          { label: '$3x^2 + 11x + 6$', options: ['Difference of squares', 'AC method', 'Perfect square', 'GCF first'] },
          { label: '$6x^2 + 12x$', options: ['Difference of squares', 'AC method', 'Perfect square', 'GCF first'] }
        ],
        correctAnswers: ['Difference of squares', 'Perfect square', 'AC method', 'GCF first'],
        hint1: '$x^2 - 49 = x^2 - 7^2$ — two perfect squares with a minus sign.',
        hint2: 'Check if $10x = 2(x)(5)$ and $25 = 5^2$.',
        hint3: '$6x^2 + 12x$: both terms share a factor of $6x$.',
        explanation: '$x^2 - 49$: difference of squares. $x^2 + 10x + 25 = (x+5)^2$: perfect square. $3x^2 + 11x + 6$: leading coefficient ≠ 1, use AC method. $6x^2 + 12x = 6x(x+2)$: factor out GCF first.'
      }
    },
    {
      id: 'qe1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Method | When to Use | Speed |
|--------|------------|-------|
| Simple factoring | $a = 1$, integers | Fastest |
| AC method | $a \\neq 1$ | Medium |
| Difference of squares | $a^2 - b^2$ pattern | Fast |
| Perfect square | $a^2 \\pm 2ab + b^2$ pattern | Fast |
| GCF first | All terms share a common factor | Always check first |

- Standard form: $ax^2 + bx + c$, vertex at $x = -b/(2a)$
- Zero product property: if factors multiply to zero, at least one equals zero
- Always double-check by expanding your factored form
- Look for GCF before trying other methods`
    }
  ]
};
