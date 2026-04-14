export const satQuadraticsPart7Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe7-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 7 of 7 — SAT Quadratics Review & Hard Problems**

### Everything You Need to Know

| Form | Formula | Best For |
|------|---------|----------|
| Standard | $ax^2 + bx + c$ | y-intercept, discriminant |
| Factored | $a(x - r)(x - s)$ | Roots/zeros |
| Vertex | $a(x - h)^2 + k$ | Max/min, vertex |

### Sum and Product of Roots (Vieta's Formulas)

For $ax^2 + bx + c = 0$ with roots $r$ and $s$:
- Sum: $r + s = -b/a$
- Product: $r \\cdot s = c/a$

This saves time when the SAT asks for $r + s$ or $rs$ without needing individual roots.

---

### Worked Example 1 — Vieta's Shortcut

**The equation $2x^2 - 10x + 7 = 0$ has roots $p$ and $q$. Find $p^2 + q^2$.**

| Step | Work |
|------|------|
| Sum of roots | $p + q = -(-10)/2 = 5$ |
| Product of roots | $pq = 7/2$ |
| Identity | $p^2 + q^2 = (p+q)^2 - 2pq$ |
| Substitute | $= 25 - 7 = 18$ |

### Worked Example 2 — Converting Forms

**Write $2x^2 + 12x + 7$ in vertex form.**

| Step | Work |
|------|------|
| Factor out $a$ from $x$-terms | $2(x^2 + 6x) + 7$ |
| Complete the square inside | $2(x^2 + 6x + 9 - 9) + 7$ |
| Simplify | $2(x + 3)^2 - 18 + 7$ |
| Final answer | $2(x + 3)^2 - 11$ |

### Worked Example 3 — Building from Roots

**A quadratic has roots $3$ and $-5$ and passes through $(1, -24)$. Find the equation.**

| Step | Work |
|------|------|
| Start with factored form | $y = a(x - 3)(x + 5)$ |
| Plug in $(1, -24)$ | $-24 = a(1-3)(1+5) = a(-2)(6)$ |
| Solve for $a$ | $-24 = -12a$ → $a = 2$ |
| Final answer | $y = 2(x - 3)(x + 5) = 2x^2 + 4x - 30$ |`
    },
    {
      id: 'qe7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vieta\'s Formulas & Form Conversions** 🎯',
      exercise: {
        questions: [
          {
            question: 'If the roots of $x^2 + kx + 8 = 0$ have a sum of $-6$, what is $k$?',
            options: ['$6$', '$-6$', '$8$', '$-8$'],
            correctAnswer: 0,
            explanation: 'Sum of roots $= -b/a = -k/1 = -k$. If the sum is $-6$, then $-k = -6$ → $k = 6$.'
          },
          {
            question: 'Which is equivalent to $3x^2 - 24x + 50$?',
            options: ['$3(x - 4)^2 + 2$', '$3(x - 4)^2 - 2$', '$3(x + 4)^2 + 2$', '$3(x - 8)^2 + 2$'],
            correctAnswer: 0,
            explanation: '$3(x^2 - 8x) + 50 = 3(x^2 - 8x + 16 - 16) + 50 = 3(x - 4)^2 - 48 + 50 = 3(x - 4)^2 + 2$.'
          },
          {
            question: 'A quadratic function has zeros at $x = -2$ and $x = 7$ and passes through $(0, -28)$. What is the function?',
            options: ['$y = 2(x + 2)(x - 7)$', '$y = (x + 2)(x - 7)$', '$y = -2(x + 2)(x - 7)$', '$y = 2(x - 2)(x + 7)$'],
            correctAnswer: 0,
            explanation: '$y = a(x + 2)(x - 7)$. At $(0, -28)$: $-28 = a(2)(-7) = -14a$ → $a = 2$. So $y = 2(x + 2)(x - 7)$.'
          }
        ]
      }
    },
    {
      id: 'qe7-text2',
      type: 'text' as const,
      content: `### Hard SAT Patterns

#### Pattern 1: "The equation has no real solutions"

This means $\\Delta < 0$. Set up $b^2 - 4ac < 0$ and solve for the unknown.

#### Pattern 2: Nested expressions

"If $x^2 + 3x = 7$, what is $x^2 + 3x + 5$?"

Don't solve for $x$! Just substitute: $7 + 5 = 12$.

---

### Worked Example 4

**For what values of $k$ does $kx^2 + 6x + k = 0$ have two distinct real roots?**

| Step | Work |
|------|------|
| Need $\\Delta > 0$ | $36 - 4(k)(k) > 0$ |
| Simplify | $36 - 4k^2 > 0$ |
| Solve | $k^2 < 9$ → $-3 < k < 3$ |
| But also $k \\neq 0$ | (otherwise it's linear, not quadratic) |
| Answer | $-3 < k < 3$, $k \\neq 0$ |

### Worked Example 5

**If $2x^2 - 5x + 1 = 0$, find $\\frac{1}{r} + \\frac{1}{s}$ where $r, s$ are the roots.**

| Step | Work |
|------|------|
| Rewrite | $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$ |
| Vieta's | $r + s = 5/2$, $rs = 1/2$ |
| Substitute | $= \\frac{5/2}{1/2} = 5$ |`
    },
    {
      id: 'qe7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Hard SAT-Style Questions** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $x^2 + 5x = 3$, what is $(x + 1)(x + 4)$?',
            options: ['$7$', '$3$', '$4$', '$12$'],
            correctAnswer: 0,
            explanation: '$(x+1)(x+4) = x^2 + 5x + 4 = 3 + 4 = 7$. Use the given equation directly!'
          },
          {
            question: 'For what value of $c$ does $x^2 - 6x + c = 0$ have exactly one solution?',
            options: ['$9$', '$6$', '$-9$', '$36$'],
            correctAnswer: 0,
            explanation: 'One solution → $\\Delta = 0$: $36 - 4c = 0$ → $c = 9$. Or: $(x-3)^2 = 0$ → $c = 9$.'
          },
          {
            question: 'The roots of $3x^2 + bx + 12 = 0$ have a product of $4$. What is $b$ if the roots are equal?',
            options: ['$\\pm 12$', '$6$', '$-6$', '$12$'],
            correctAnswer: 0,
            explanation: 'Product $= c/a = 12/3 = 4$ ✓ (always true). Equal roots → $\\Delta = 0$: $b^2 - 144 = 0$ → $b = \\pm 12$.'
          },
          {
            question: 'If $f(x) = x^2 - 4x + 3$, at what value of $x$ does $f(x)$ reach its minimum?',
            options: ['$2$', '$-2$', '$3$', '$1$'],
            correctAnswer: 0,
            explanation: 'Vertex $x = -b/(2a) = 4/2 = 2$. Or complete the square: $f(x) = (x-2)^2 - 1$, min at $x = 2$.'
          }
        ]
      }
    },
    {
      id: 'qe7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which Strategy?** 🔍\n\nMatch each SAT question type with the best approach.',
      exercise: {
        dropdowns: [
          { label: '"What is the sum of the solutions?"', options: ['Vieta\'s formulas', 'Completing the square', 'Graphing', 'Factoring'] },
          { label: '"What is the minimum value of $f(x)$?"', options: ['Vieta\'s formulas', 'Completing the square / vertex formula', 'Quadratic formula', 'Factoring'] },
          { label: '"What are the x-intercepts?"', options: ['Vieta\'s formulas', 'Completing the square', 'Graphing', 'Factoring or quadratic formula'] },
          { label: '"For what value of $k$ is there no solution?"', options: ['Set discriminant < 0', 'Completing the square', 'Vieta\'s formulas', 'Factoring'] }
        ],
        correctAnswers: ['Vieta\'s formulas', 'Completing the square / vertex formula', 'Factoring or quadratic formula', 'Set discriminant < 0'],
        hint1: 'Sum of roots $= -b/a$ — no need to actually find the roots.',
        hint2: 'The minimum of $f(x) = a(x-h)^2 + k$ is $k$ (when $a > 0$).',
        hint3: '"No solution" means no real roots, so the discriminant must be negative.',
        explanation: 'Sum of solutions → Vieta\'s. Minimum → vertex form. X-intercepts → factor or use quadratic formula. No solution → discriminant < 0.'
      }
    },
    {
      id: 'qe7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7 (Full Review)

| Concept | Key Formula / Idea |
|---------|-------------------|
| Standard form | $ax^2 + bx + c$ — gives $y$-int ($c$) and discriminant |
| Vertex form | $a(x-h)^2 + k$ — gives vertex and max/min |
| Factored form | $a(x-r)(x-s)$ — gives roots directly |
| Vieta's: sum | $r + s = -b/a$ |
| Vieta's: product | $r \\cdot s = c/a$ |
| Discriminant | $\\Delta = b^2 - 4ac$ — 2, 1, or 0 real roots |
| Vertex $x$-coordinate | $x = -b/(2a)$ |
| Completing the square | Factor out $a$, add & subtract $(b/2a)^2$ |

> **Final SAT Tip:** Before solving, ask: "What is the question actually asking for?" Often you can use Vieta's or substitution without finding individual roots.`
    }
  ]
};
