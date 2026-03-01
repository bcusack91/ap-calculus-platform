export const satQuadraticsPart3Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q3-intro',
      type: 'text' as const,
      content: `
# 🎯 Completing the Square & Vertex Form

**Part 3 of 7 — Finding the Vertex Algebraically**

**Vertex form** of a quadratic: $$y = a(x - h)^2 + k$$

The vertex is $(h, k)$. This form instantly reveals:
- The **vertex** (maximum or minimum point)
- The **axis of symmetry**: $x = h$
- Whether the parabola opens **up** ($a > 0$) or **down** ($a < 0$)

| Standard Form | Vertex Form | Vertex |
|--------------|------------|--------|
| $y = x^2 - 6x + 11$ | $y = (x-3)^2 + 2$ | $(3, 2)$ |
| $y = -2x^2 + 8x - 5$ | $y = -2(x-2)^2 + 3$ | $(2, 3)$ |

**Completing the square** converts standard form → vertex form.
      `
    },
    {
      id: 'sat-q3-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The equation $y = 3(x+2)^2 - 7$ is in vertex form. What is the vertex?',
            options: [
              '$(2, -7)$',
              '$(-2, -7)$',
              '$(2, 7)$',
              '$(-2, 7)$'
            ],
            correctAnswer: 1,
            explanation: 'In $y = a(x-h)^2 + k$, the vertex is $(h,k)$. Here $y = 3(x-(-2))^2 + (-7)$, so $h = -2$ and $k = -7$. Vertex: $(-2, -7)$. **Watch the signs!** $(x+2)$ means $h = -2$.'
          },
          {
            question: 'A parabola has equation $y = -(x-4)^2 + 10$. Does it have a maximum or minimum, and what is the value?',
            options: [
              'Maximum of $10$',
              'Minimum of $10$',
              'Maximum of $4$',
              'Minimum of $-10$'
            ],
            correctAnswer: 0,
            explanation: 'Since $a = -1 < 0$, the parabola opens downward, so the vertex is a **maximum**. The vertex is $(4, 10)$, so the maximum value is $10$.'
          }
        ]
      }
    },
    {
      id: 'sat-q3-process',
      type: 'text' as const,
      content: `
**Completing the Square — Step by Step**

Convert $y = x^2 + 8x + 3$ to vertex form.

| Step | Work | Why |
|------|------|-----|
| 1. Group $x$ terms | $y = (x^2 + 8x) + 3$ | Isolate quadratic/linear terms |
| 2. Half of $b$, squared | $\\left(\\frac{8}{2}\\right)^2 = 16$ | This completes the square |
| 3. Add AND subtract inside | $y = (x^2 + 8x + 16 - 16) + 3$ | Keeps equation balanced |
| 4. Factor the perfect square | $y = (x+4)^2 - 16 + 3$ | The trinomial is now a perfect square |
| 5. Simplify | $y = (x+4)^2 - 13$ | Done! |

**Vertex:** $(-4, -13)$. Axis of symmetry: $x = -4$.

---

**When $a \\neq 1$:** Factor $a$ out of the $x$ terms first!

$y = 2x^2 - 12x + 7 = 2(x^2 - 6x) + 7 = 2(x^2 - 6x + 9 - 9) + 7 = 2(x-3)^2 - 18 + 7 = 2(x-3)^2 - 11$

**SAT Trap:** When you subtract $9$ inside the parentheses, you're really subtracting $2 \\times 9 = 18$ from the equation.
      `
    },
    {
      id: 'sat-q3-practice',
      type: 'input-boxes' as const,
      content: `
**Complete the square and find the vertex.** Enter $h$ and $k$ where vertex = $(h, k)$. 🧮

1) $y = x^2 - 10x + 21$ → $h$ = ?

2) $y = x^2 - 10x + 21$ → $k$ = ?

3) $y = x^2 + 4x + 1$ → $k$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-4', '-3'],
        hint1: 'Half of $-10$ is $-5$, so $h = 5$ (remember the sign flip in $(x - h)$).',
        hint2: '$y = (x-5)^2 - 25 + 21 = (x-5)^2 - 4$. So $k = -4$.',
        hint3: '$y = (x^2+4x+4) - 4 + 1 = (x+2)^2 - 3$. So $k = -3$.',
        explanation: '1) Half of $-10$ is $-5$, squared is $25$. $y = (x-5)^2 - 25 + 21 = (x-5)^2 - 4$. $h = 5$. 2) $k = -4$. 3) $(x+2)^2 - 3$, $k = -3$.'
      }
    },
    {
      id: 'sat-q3-shortcut',
      type: 'text' as const,
      content: `
**The Vertex Shortcut (No Completing the Square Needed!)**

For $y = ax^2 + bx + c$, the vertex x-coordinate is: $$h = -\\frac{b}{2a}$$

Then plug $h$ back in to find $k = f(h)$.

**Example:** $y = 2x^2 + 12x + 7$

$h = -\\frac{12}{2(2)} = -\\frac{12}{4} = -3$

$k = 2(-3)^2 + 12(-3) + 7 = 18 - 36 + 7 = -11$

Vertex: $(-3, -11)$ — same as completing the square, but faster!

---

**When to use which method:**
- **Vertex shortcut** — when you just need the vertex coordinates
- **Completing the square** — when the SAT asks you to rewrite into vertex form $a(x-h)^2 + k$
- Either works, but the shortcut is faster for most SAT questions
      `
    },
    {
      id: 'sat-q3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each standard form to its vertex form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = x^2 - 2x + 5$',
            options: ['$y = (x-1)^2 + 4$', '$y = (x+1)^2 + 4$', '$y = (x-2)^2 + 1$', '$y = (x-1)^2 - 4$']
          },
          {
            label: '$y = x^2 + 6x + 10$',
            options: ['$y = (x+3)^2 + 1$', '$y = (x-3)^2 + 1$', '$y = (x+6)^2 - 26$', '$y = (x+3)^2 - 1$']
          },
          {
            label: '$y = x^2 - 4x$',
            options: ['$y = (x-2)^2 - 4$', '$y = (x-4)^2$', '$y = (x+2)^2 - 4$', '$y = (x-2)^2 + 4$']
          }
        ],
        correctAnswers: ['$y = (x-1)^2 + 4$', '$y = (x+3)^2 + 1$', '$y = (x-2)^2 - 4$'],
        hint1: 'Half of $-2$ is $-1$, squared is $1$. $5 - 1 = 4$.',
        hint2: 'Half of $6$ is $3$, squared is $9$. $10 - 9 = 1$.',
        hint3: 'Half of $-4$ is $-2$, squared is $4$. $0 - 4 = -4$.',
        explanation: '$x^2 - 2x + 5 = (x-1)^2 + 4$. $x^2 + 6x + 10 = (x+3)^2 + 1$. $x^2 - 4x = (x-2)^2 - 4$.'
      }
    },
    {
      id: 'sat-q3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $y = a(x-3)^2 + 7$ and the parabola passes through $(5, 15)$, what is the value of $a$?',
            options: [
              '$1$',
              '$2$',
              '$3$',
              '$4$'
            ],
            correctAnswer: 1,
            explanation: 'Plug in $(5, 15)$: $15 = a(5-3)^2 + 7 = 4a + 7$. Solving: $4a = 8$, so $a = 2$.'
          },
          {
            question: 'The minimum value of $f(x) = x^2 - 8x + 21$ is:',
            options: [
              '$4$',
              '$5$',
              '$8$',
              '$21$'
            ],
            correctAnswer: 1,
            explanation: 'Vertex x-coordinate: $h = -(-8)/(2 \\cdot 1) = 4$. Minimum: $f(4) = 16 - 32 + 21 = 5$. Or: completing the square gives $(x-4)^2 + 5$, so minimum is $5$.'
          }
        ]
      }
    }
  ]
}
