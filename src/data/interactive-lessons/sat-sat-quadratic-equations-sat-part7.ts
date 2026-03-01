export const satQuadraticsPart7Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed SAT Practice

**Part 7 of 7 — Cheat Sheet & Exam Strategies**

**Quadratic Equations Cheat Sheet:**

| Form | Equation | Best For |
|------|----------|----------|
| **Standard** | $ax^2 + bx + c = 0$ | Finding discriminant, using quadratic formula |
| **Factored** | $a(x - r_1)(x - r_2) = 0$ | Reading roots directly |
| **Vertex** | $a(x - h)^2 + k$ | Finding vertex (max/min), graphing |

**Essential Formulas:**
- Quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$
- Vertex x-coordinate: $x = -\\frac{b}{2a}$
- Sum of roots: $r_1 + r_2 = -\\frac{b}{a}$
- Product of roots: $r_1 \\cdot r_2 = \\frac{c}{a}$
- Discriminant: $\\Delta = b^2 - 4ac$

**SAT Strategy:** Always read what the question asks. Common traps: asking for the **sum** of solutions (use $-b/a$, don't solve), asking for the **product** (use $c/a$).
      `
    },
    {
      id: 'sat-q7-check1',
      type: 'multiple-choice' as const,
      content: `
**Warm-Up Review** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The solutions of $x^2 - 7x + 10 = 0$ are $x = 2$ and $x = 5$. Without solving, what is the sum of the solutions?',
            options: [
              '$7$',
              '$-7$',
              '$10$',
              '$3$'
            ],
            correctAnswer: 0,
            explanation: 'Sum of roots $= -b/a = -(-7)/1 = 7$. You can verify: $2 + 5 = 7$. This shortcut avoids solving entirely!'
          },
          {
            question: 'For $3x^2 + 6x - 9 = 0$, what is the product of the two solutions?',
            options: [
              '$-3$',
              '$3$',
              '$-9$',
              '$9$'
            ],
            correctAnswer: 0,
            explanation: 'Product of roots $= c/a = -9/3 = -3$. (The roots are $x=1$ and $x=-3$, and $1 \\times (-3) = -3$.)'
          }
        ]
      }
    },
    {
      id: 'sat-q7-strategies',
      type: 'text' as const,
      content: `
**Top 5 SAT Quadratic Strategies**

**Strategy 1: Identify what form you need.**
- Need roots? → Factor or use quadratic formula
- Need vertex/max/min? → Vertex form or $-b/(2a)$
- Need number of solutions? → Discriminant

**Strategy 2: Use Vieta's formulas for sum/product questions.**
- Sum of roots $= -b/a$
- Product of roots $= c/a$
- Example: "If $r$ and $s$ are solutions of $2x^2 - 10x + 7 = 0$, what is $r + s$?" → $-(-10)/2 = 5$

**Strategy 3: Backsolve from answer choices.**
If the SAT gives numeric answer choices, plug them into the equation. This can be faster than algebra!

**Strategy 4: Match coefficients.**
If $(x + p)(x + q) = x^2 + bx + c$, then $p + q = b$ and $pq = c$.

**Strategy 5: Beware of "how many real solutions."**
This ALWAYS means: find the discriminant. $\\Delta > 0$: two, $\\Delta = 0$: one, $\\Delta < 0$: zero.
      `
    },
    {
      id: 'sat-q7-practice',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice — No Hints on Method!** 🧮

1) Solve $x^2 + 3x - 10 = 0$. What is the positive root?

2) The vertex of $y = -x^2 + 6x - 5$ has $y$-coordinate = ?

3) For what value of $c$ does $x^2 - 8x + c = 0$ have exactly one solution?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '16'],
        hint1: 'Factor: find two numbers that multiply to $-10$ and add to $3$.',
        hint2: 'Use $x = -b/(2a) = -6/(2 \\cdot -1) = 3$, then compute $y = f(3)$.',
        hint3: 'One solution means $\\Delta = 0$: $64 - 4c = 0$.',
        explanation: '1) $(x+5)(x-2)=0$: positive root is $2$. 2) $f(3) = -9+18-5 = 4$. 3) $64-4c=0 \\Rightarrow c=16$.'
      }
    },
    {
      id: 'sat-q7-traps',
      type: 'text' as const,
      content: `
**Common SAT Traps & How to Avoid Them**

| Trap | Example | Fix |
|------|---------|-----|
| **Forgetting to set = 0** | Factoring $x^2 - 3x = 10$ as $x(x-3) = 10$ | Move ALL terms to one side first: $x^2 - 3x - 10 = 0$ |
| **Sign errors with $b$** | In $x^2 - 6x + 5$, using $b = 6$ | Read carefully: $b = -6$ |
| **Dividing by $x$** | $x^2 = 5x \\Rightarrow x = 5$ | **Don't divide by $x$!** Factor: $x(x-5)=0$, so $x = 0$ or $x = 5$ |
| **Ignoring negative roots** | "What are ALL solutions?" | Check if negative values work too |
| **Wrong form** | Looking for max, but equation is in standard form | Convert to vertex form or use $-b/(2a)$ |

**Time-saving tip:** On the SAT, if a question says "which of the following is equivalent to…" — expand each answer choice. The right one will simplify to match.
      `
    },
    {
      id: 'sat-q7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the best first step for each problem.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find the maximum value of $f(x) = -2x^2 + 12x - 7$',
            options: ['Find vertex using $x = -b/(2a)$', 'Set $f(x) = 0$ and factor', 'Compute the discriminant', 'Substitute answer choices']
          },
          {
            label: 'How many real solutions does $5x^2 - 3x + 2 = 0$ have?',
            options: ['Find vertex using $x = -b/(2a)$', 'Set $f(x) = 0$ and factor', 'Compute the discriminant', 'Substitute answer choices']
          },
          {
            label: 'If $r$ and $s$ satisfy $x^2 - 9x + 14 = 0$, find $rs$',
            options: ['Use product of roots $= c/a$', 'Factor and multiply roots', 'Compute the discriminant', 'Use $-b/a$']
          }
        ],
        correctAnswers: ['Find vertex using $x = -b/(2a)$', 'Compute the discriminant', 'Use product of roots $= c/a$'],
        hint1: 'Maximum value = vertex y-coordinate. The fastest path is $-b/(2a)$.',
        hint2: '"How many real solutions" = discriminant question.',
        hint3: 'Product of roots is just $c/a = 14/1 = 14$. No solving needed!',
        explanation: 'Max value → vertex. Number of solutions → discriminant. Product of roots → $c/a$.'
      }
    },
    {
      id: 'sat-q7-sat-style',
      type: 'multiple-choice' as const,
      content: `
**Final SAT-Style Challenge** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $(2x + 3)(x - 4) = 2x^2 + bx + c$, what is the value of $b + c$?',
            options: [
              '$-17$',
              '$-5$',
              '$7$',
              '$-7$'
            ],
            correctAnswer: 0,
            explanation: 'Expand: $(2x+3)(x-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$. So $b = -5$ and $c = -12$. $b + c = -5 + (-12) = -17$.'
          },
          {
            question: 'The equation $2x^2 - kx + 8 = 0$ has two equal real roots. What is the positive value of $k$?',
            options: [
              '$4$',
              '$8$',
              '$16$',
              '$32$'
            ],
            correctAnswer: 1,
            explanation: 'Two equal roots means $\\Delta = 0$: $k^2 - 4(2)(8) = 0 \\Rightarrow k^2 = 64 \\Rightarrow k = \\pm 8$. The positive value is $k = 8$.'
          }
        ]
      }
    }
  ]
}
