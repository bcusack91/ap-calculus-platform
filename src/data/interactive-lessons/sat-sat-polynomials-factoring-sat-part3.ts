export const satPolynomialsPart3Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf3-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 3 of 7 — Polynomial Division**

### Long Division

Divide $x^3 + 2x^2 - 5x + 6$ by $x - 1$:

1. $x^3 \\div x = x^2$. Multiply: $x^2(x-1) = x^3 - x^2$. Subtract: $3x^2 - 5x$
2. $3x^2 \\div x = 3x$. Multiply: $3x(x-1) = 3x^2 - 3x$. Subtract: $-2x + 6$
3. $-2x \\div x = -2$. Multiply: $-2(x-1) = -2x + 2$. Subtract: $4$

Result: $x^2 + 3x - 2$ remainder $4$.

### Synthetic Division (Faster!)

For dividing by $(x - c)$: write the coefficients, bring down, multiply, add.

Dividing $x^3 + 2x^2 - 5x + 6$ by $(x - 1)$:

| | 1 | 2 | -5 | 6 |
|---|---|---|---|---|
| 1↓ | | 1 | 3 | -2 |
| | 1 | 3 | -2 | **4** |

Result: $x^2 + 3x - 2$ with remainder $4$.

### The Remainder Theorem

The remainder when $f(x)$ is divided by $(x - c)$ equals $f(c)$.

Check: $f(1) = 1 + 2 - 5 + 6 = 4$ ✓

---

### Worked Example 1 — Missing Term Trap

**Divide $x^3 - 8$ by $(x - 2)$.**

| Step | Work |
|------|------|
| Include 0 placeholders | Coefficients: $1, 0, 0, -8$ |
| Synthetic with $c = 2$ | Bring down 1 → $1 \\cdot 2 = 2$ → $0 + 2 = 2$ → $2 \\cdot 2 = 4$ → $0 + 4 = 4$ → $4 \\cdot 2 = 8$ → $-8 + 8 = 0$ |
| Result | $x^2 + 2x + 4$, remainder $0$ |

So $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ — this is the difference of cubes formula!

### Worked Example 2 — Using Remainder Theorem Strategically

**Is $(x + 2)$ a factor of $2x^3 + x^2 - 7x + 2$?**

| Step | Work |
|------|------|
| $(x + 2) = (x - (-2))$, so $c = -2$ | |
| Evaluate $f(-2)$ | $2(-8) + (4) - 7(-2) + 2$ |
| Simplify | $-16 + 4 + 14 + 2 = 4$ |
| Remainder | $4 \\neq 0$, so NO — not a factor |`
    },
    {
      id: 'pf3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Division** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the remainder when $x^3 - 4x + 2$ is divided by $(x - 2)$?',
            options: ['$2$', '$0$', '$-2$', '$6$'],
            correctAnswer: 0,
            explanation: 'By the Remainder Theorem: $f(2) = 8 - 8 + 2 = 2$. Much faster than doing long division!'
          },
          {
            question: 'If $(x + 3)$ is a factor of $x^2 + 5x + 6$, then $f(-3) = $',
            options: ['$0$', '$3$', '$6$', '$-3$'],
            correctAnswer: 0,
            explanation: 'If $(x + 3)$ is a factor, the remainder is 0, so $f(-3) = 0$. This is the Factor Theorem: $(x - c)$ is a factor iff $f(c) = 0$.'
          },
          {
            question: 'When $2x^2 + 7x + 3$ is divided by $(x + 3)$, the quotient is:',
            options: ['$2x + 1$', '$2x + 3$', '$2x - 1$', '$x + 1$'],
            correctAnswer: 0,
            explanation: 'Since $(x + 3)$ is a factor: $2x^2 + 7x + 3 = (x + 3)(2x + 1)$. Check by FOIL: $2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$ ✓'
          }
        ]
      }
    },
    {
      id: 'pf3-text2',
      type: 'text' as const,
      content: `### Writing the Result of Division

$$\\frac{f(x)}{d(x)} = q(x) + \\frac{r}{d(x)}$$

**Example:** $\\frac{x^2 + 3x + 5}{x + 1} = x + 2 + \\frac{3}{x + 1}$

This form appears on the SAT! They may ask "what is the remainder" or "rewrite the expression."

### Worked Example 3

**Rewrite $\\frac{x^2 - 4x + 7}{x - 1}$ in quotient-remainder form.**

| Step | Work |
|------|------|
| Divide | $f(1) = 1 - 4 + 7 = 4$ → remainder is $4$ |
| Synthetic: $c = 1$ | Coefficients $1, -4, 7$ → result $1, -3$ remainder $4$ |
| Write result | $x - 3 + \\frac{4}{x - 1}$ |

### SAT Shortcut: Remainder without Division

To find just the remainder of $f(x) ÷ (x - c)$, simply compute $f(c)$. No division needed!`
    },
    {
      id: 'pf3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Division Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the remainder when $x^4 - 1$ is divided by $(x - 1)$?',
            options: ['$0$', '$1$', '$-1$', '$2$'],
            correctAnswer: 0,
            explanation: '$f(1) = 1 - 1 = 0$. So $(x - 1)$ is a factor of $x^4 - 1$.'
          },
          {
            question: 'Rewrite: $\\frac{2x + 5}{x + 1}$',
            options: ['$2 + \\frac{3}{x+1}$', '$2 + \\frac{5}{x+1}$', '$\\frac{2x}{x+1} + 5$', '$2x + \\frac{5}{x+1}$'],
            correctAnswer: 0,
            explanation: 'Divide $2x + 5$ by $(x + 1)$: $2x + 5 = 2(x+1) + 3$. So $\\frac{2x+5}{x+1} = 2 + \\frac{3}{x+1}$.'
          },
          {
            question: 'If $f(x) = x^3 + ax + 1$ and $(x + 1)$ is a factor, what is $a$?',
            options: ['$0$', '$1$', '$-1$', '$2$'],
            correctAnswer: 0,
            explanation: 'Factor theorem: $f(-1) = 0$. $(-1)^3 + a(-1) + 1 = -1 - a + 1 = -a = 0$. So $a = 0$.'
          }
        ]
      }
    },
    {
      id: 'pf3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Remainder Theorem Quick Check** 🔍\n\nFind the remainder without doing long division.',
      exercise: {
        dropdowns: [
          { label: '$x^2 + 3x - 5$ divided by $(x - 1)$', options: ['Remainder = −1', 'Remainder = 0', 'Remainder = 1', 'Remainder = −5'] },
          { label: '$x^3 - 8$ divided by $(x - 2)$', options: ['Remainder = 0', 'Remainder = 8', 'Remainder = −8', 'Remainder = 2'] },
          { label: '$2x^2 + x - 6$ divided by $(x + 2)$', options: ['Remainder = 0', 'Remainder = 4', 'Remainder = −4', 'Remainder = 8'] },
          { label: '$x^4$ divided by $(x + 1)$', options: ['Remainder = 1', 'Remainder = 0', 'Remainder = −1', 'Remainder = 4'] }
        ],
        correctAnswers: ['Remainder = −1', 'Remainder = 0', 'Remainder = 0', 'Remainder = 1'],
        hint1: '$f(1) = 1 + 3 - 5 = -1$.',
        hint2: '$f(2) = 8 - 8 = 0$ — so $(x-2)$ is a factor!',
        hint3: '$f(-2) = 2(4) + (-2) - 6 = 8 - 2 - 6 = 0$.',
        explanation: 'Remainder Theorem: plug in $c$ from $(x - c)$. $f(1) = -1$. $f(2) = 0$. $f(-2) = 0$. $f(-1) = (-1)^4 = 1$.'
      }
    },
    {
      id: 'pf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Tool | Purpose | Speed |
|------|---------|-------|
| Long division | Any divisor | Slow |
| Synthetic division | Divisor $(x - c)$ only | Fast |
| Remainder Theorem | Find remainder only | Fastest |
| Factor Theorem | Check if factor | Fastest |

- **Remainder Theorem**: $f(x) ÷ (x-c)$ → remainder $= f(c)$
- **Factor Theorem**: $(x - c)$ is a factor iff $f(c) = 0$
- Include $0$ coefficients for missing terms (e.g., $x^3 - 8$ → $1, 0, 0, -8$)
- Division result: $f(x) = d(x) \\cdot q(x) + r$`
    }
  ]
};
