export const satQuadraticsPart3Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe3-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 3 of 7 — Vertex Form and Completing the Square**

### Vertex Form: $y = a(x - h)^2 + k$

- Vertex is at $(h, k)$
- $a > 0$: opens up (minimum at vertex)
- $a < 0$: opens down (maximum at vertex)

### Converting Standard → Vertex Form (Completing the Square)

**Example:** $y = x^2 + 6x + 2$

1. Group: $y = (x^2 + 6x) + 2$
2. Half of 6 = 3, square it = 9
3. Add and subtract 9 inside: $y = (x^2 + 6x + 9) - 9 + 2$
4. Factor: $y = (x + 3)^2 - 7$

Vertex: $(-3, -7)$

---

### Worked Example 1

**Complete the square for $y = x^2 - 8x + 10$.**

| Step | Work |
|------|------|
| Group $x$ terms | $y = (x^2 - 8x) + 10$ |
| Half of $-8$ | $-4$ |
| Square it | $16$ |
| Add/subtract | $y = (x^2 - 8x + 16) - 16 + 10$ |
| Factor | $y = (x - 4)^2 - 6$ |
| Vertex | $(4, -6)$ — this is the minimum |

### Worked Example 2 — Leading Coefficient ≠ 1

**Complete the square for $y = 2x^2 + 12x + 7$.**

| Step | Work |
|------|------|
| Factor out $a$ from first two terms | $y = 2(x^2 + 6x) + 7$ |
| Half of 6, squared | $9$ |
| Add/subtract inside | $y = 2(x^2 + 6x + 9 - 9) + 7$ |
| Simplify | $y = 2(x + 3)^2 - 18 + 7$ |
| Final | $y = 2(x + 3)^2 - 11$ |
| Vertex | $(-3, -11)$ |`
    },
    {
      id: 'qe3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vertex Form — Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the minimum value of $f(x) = (x - 3)^2 + 5$?',
            options: ['$5$', '$3$', '$-3$', '$8$'],
            correctAnswer: 0,
            explanation: 'In vertex form $a(x-h)^2 + k$, the vertex is $(3, 5)$. Since $a = 1 > 0$, the parabola opens up, so the minimum is $k = 5$.'
          },
          {
            question: 'The graph of $y = -2(x + 1)^2 + 8$ has a vertex at:',
            options: ['$(-1, 8)$', '$(1, 8)$', '$(-1, -8)$', '$(1, -8)$'],
            correctAnswer: 0,
            explanation: 'Vertex form: $a(x - h)^2 + k$ where $h = -1$ and $k = 8$. Watch the sign: $(x + 1) = (x - (-1))$, so $h = -1$.'
          },
          {
            question: 'Completing the square on $x^2 - 10x + 20$:',
            options: ['$(x - 5)^2 - 5$', '$(x - 5)^2 + 5$', '$(x + 5)^2 - 5$', '$(x - 10)^2 + 20$'],
            correctAnswer: 0,
            explanation: 'Half of $-10$ is $-5$, squared is $25$. $x^2 - 10x + 25 - 25 + 20 = (x - 5)^2 - 5$.'
          }
        ]
      }
    },
    {
      id: 'qe3-text2',
      type: 'text' as const,
      content: `### When to Use Each Form

| Form | Best For | Read Directly |
|------|----------|---------------|
| Standard: $ax^2 + bx + c$ | y-intercept, discriminant | $c$ = y-intercept |
| Factored: $a(x - r)(x - s)$ | x-intercepts (roots) | $r$ and $s$ = zeros |
| Vertex: $a(x - h)^2 + k$ | Max/min value, vertex | $(h, k)$ = vertex |

### Worked Example 3

**The SAT gives you $f(x) = x^2 - 4x + 7$. What is the range of $f$?**

| Step | Work |
|------|------|
| Complete the square | $f(x) = (x-2)^2 - 4 + 7 = (x-2)^2 + 3$ |
| Vertex | $(2, 3)$, opens up |
| Minimum value | $3$ |
| Range | $f(x) \\geq 3$, or $[3, \\infty)$ |

### Worked Example 4

**Convert $y = 3(x - 2)^2 + 5$ to standard form.**

| Step | Work |
|------|------|
| Expand $(x-2)^2$ | $x^2 - 4x + 4$ |
| Distribute | $3(x^2 - 4x + 4) + 5 = 3x^2 - 12x + 12 + 5$ |
| Combine | $y = 3x^2 - 12x + 17$ |

> **SAT Tip:** The SAT may give you vertex form and ask "What is the y-intercept?" Just plug in $x = 0$: $y = 3(0-2)^2 + 5 = 3(4) + 5 = 17$.`
    },
    {
      id: 'qe3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Vertex Form — Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'The maximum value of $g(x) = -(x+2)^2 + 9$ is:',
            options: ['$9$', '$-2$', '$2$', '$-9$'],
            correctAnswer: 0,
            explanation: 'Since $a = -1 < 0$, the parabola opens down. Maximum value is $k = 9$ at $x = -2$.'
          },
          {
            question: 'What is the y-intercept of $y = 2(x - 1)^2 - 3$?',
            options: ['$-1$', '$-3$', '$1$', '$2$'],
            correctAnswer: 0,
            explanation: 'Plug in $x = 0$: $y = 2(0-1)^2 - 3 = 2(1) - 3 = -1$.'
          },
          {
            question: 'Complete the square: $y = x^2 + 4x + 1$.',
            options: ['$(x + 2)^2 - 3$', '$(x + 4)^2 - 15$', '$(x + 2)^2 + 1$', '$(x - 2)^2 - 3$'],
            correctAnswer: 0,
            explanation: 'Half of 4 = 2, squared = 4. $x^2 + 4x + 4 - 4 + 1 = (x+2)^2 - 3$.'
          },
          {
            question: 'Which form immediately reveals that $f(x) = 2(x-1)(x-5)$ has roots at $x = 1$ and $x = 5$?',
            options: ['Factored form', 'Standard form', 'Vertex form', 'Point-slope form'],
            correctAnswer: 0,
            explanation: 'Factored form $a(x-r)(x-s)$ directly shows the roots: $r = 1$ and $s = 5$.'
          }
        ]
      }
    },
    {
      id: 'qe3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the Form to the Question** 🔍\n\nWhich form should you convert to in order to answer each question?',
      exercise: {
        dropdowns: [
          { label: '"What is the maximum height?"', options: ['Standard form', 'Factored form', 'Vertex form'] },
          { label: '"What are the x-intercepts?"', options: ['Standard form', 'Factored form', 'Vertex form'] },
          { label: '"What is the y-intercept?"', options: ['Standard form', 'Factored form', 'Vertex form'] },
          { label: '"How many real solutions?"', options: ['Standard form (discriminant)', 'Factored form', 'Vertex form'] }
        ],
        correctAnswers: ['Vertex form', 'Factored form', 'Standard form', 'Standard form (discriminant)'],
        hint1: 'Maximum/minimum is the $k$ value in vertex form.',
        hint2: 'X-intercepts are read directly from factored form: $a(x-r)(x-s)$.',
        hint3: 'The y-intercept is the constant $c$ in standard form.',
        explanation: 'Max/min → vertex form. X-intercepts → factored form. Y-intercept → standard form (read $c$). Number of solutions → standard form (compute $\\Delta$).'
      }
    },
    {
      id: 'qe3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Completing the Square Steps |
|-----------------------------|
| 1. Group $x$ terms: $y = (x^2 + bx) + c$ |
| 2. Half of $b$: $b/2$ |
| 3. Square it: $(b/2)^2$ |
| 4. Add and subtract: $y = (x^2 + bx + (b/2)^2) - (b/2)^2 + c$ |
| 5. Factor the perfect square: $y = (x + b/2)^2 + (c - (b/2)^2)$ |

- Vertex form: $a(x - h)^2 + k$ → vertex at $(h, k)$
- Watch the sign: $(x + 3)$ means $h = -3$
- If $a > 0$: minimum at vertex. If $a < 0$: maximum at vertex
- When $a \\neq 1$: factor it out from the $x$-terms first`
    }
  ]
};
