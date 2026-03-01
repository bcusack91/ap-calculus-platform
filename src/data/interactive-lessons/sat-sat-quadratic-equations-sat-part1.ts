export const satQuadraticsPart1Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q1-intro',
      type: 'text' as const,
      content: `
# 🔢 Quadratic Equations — SAT Foundations

**Part 1 of 7 — Standard Form & Factoring**

Quadratics appear on **20–25% of SAT Math questions** — more than any other single topic. Master them and you unlock a huge score boost.

A **quadratic equation** in standard form is: $$ax^2 + bx + c = 0$$

where $a \\neq 0$. The **degree** is 2, so there are at most **two solutions** (also called roots or zeros).

| Term | Role | Example in $3x^2 - 5x + 2$ |
|------|------|-----------------------------|
| $a$ | Leading coefficient | $3$ |
| $b$ | Linear coefficient | $-5$ |
| $c$ | Constant term | $2$ |

**Why factoring first?** On the SAT, ~60% of quadratics can be factored. It's faster than the quadratic formula when it works.
      `
    },
    {
      id: 'sat-q1-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which equation is in standard quadratic form?',
            options: [
              '$y = 2(x - 3)^2 + 1$',
              '$3x^2 - 7x + 4 = 0$',
              '$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$',
              '$(x - 2)(x + 5) = 0$'
            ],
            correctAnswer: 1,
            explanation: 'Standard form is $ax^2 + bx + c = 0$. Option B ($3x^2 - 7x + 4 = 0$) matches with $a=3$, $b=-7$, $c=4$. Option A is vertex form, C is the quadratic formula, and D is factored form.'
          },
          {
            question: 'In the equation $-2x^2 + 8x - 6 = 0$, what are the values of $a$, $b$, and $c$?',
            options: [
              '$a=2,\\ b=8,\\ c=-6$',
              '$a=-2,\\ b=8,\\ c=-6$',
              '$a=-2,\\ b=-8,\\ c=6$',
              '$a=2,\\ b=-8,\\ c=6$'
            ],
            correctAnswer: 1,
            explanation: 'Read the coefficients directly: the coefficient of $x^2$ is $-2$ (so $a=-2$), the coefficient of $x$ is $+8$ (so $b=8$), and the constant is $-6$ (so $c=-6$). **SAT Trap:** Don\'t drop the negative sign on $a$!'
          }
        ]
      }
    },
    {
      id: 'sat-q1-factoring',
      type: 'text' as const,
      content: `
**Factoring Strategy — The AC Method**

To factor $ax^2 + bx + c$:

**Step 1:** Compute the product $a \\cdot c$.

**Step 2:** Find two numbers that **multiply** to $a \\cdot c$ and **add** to $b$.

**Step 3:** Rewrite the middle term, then factor by grouping.

---

**Worked Example:** Factor $2x^2 + 7x + 3$.

| Step | Work |
|------|------|
| $a \\cdot c$ | $2 \\times 3 = 6$ |
| Two numbers: multiply to 6, add to 7 | $1$ and $6$ ✓ |
| Rewrite | $2x^2 + x + 6x + 3$ |
| Group | $(2x^2 + x) + (6x + 3)$ |
| Factor each group | $x(2x+1) + 3(2x+1)$ |
| Final | $(x+3)(2x+1)$ |

**Verify:** $(x+3)(2x+1) = 2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$ ✓

**SAT Tip:** When $a=1$, skip AC method — just find two numbers that multiply to $c$ and add to $b$.
      `
    },
    {
      id: 'sat-q1-practice1',
      type: 'input-boxes' as const,
      content: `
**Factor and solve each equation.** Enter only the numerical solutions. 🧮

1) $x^2 - 5x + 6 = 0$ → Smaller root = ?

2) $x^2 + x - 12 = 0$ → Larger root = ?

3) $2x^2 - 8x = 0$ → Larger root = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '3', '4'],
        hint1: 'Find two numbers that multiply to 6 and add to $-5$: they are $-2$ and $-3$. So $(x-2)(x-3)=0$.',
        hint2: 'Find two numbers that multiply to $-12$ and add to $1$: they are $4$ and $-3$. So $(x+4)(x-3)=0$.',
        hint3: 'Factor out $2x$ first: $2x(x-4)=0$. So $x=0$ or $x=4$.',
        explanation: '1) $(x-2)(x-3)=0 \\Rightarrow x=2,3$. Smaller is $2$. 2) $(x+4)(x-3)=0 \\Rightarrow x=-4,3$. Larger is $3$. 3) $2x(x-4)=0 \\Rightarrow x=0,4$. Larger is $4$.'
      }
    },
    {
      id: 'sat-q1-zero-product',
      type: 'text' as const,
      content: `
**Zero Product Property**

If $A \\cdot B = 0$, then $A = 0$ or $B = 0$ (or both).

This is *why* factoring works for solving equations. Once you write $ax^2+bx+c$ as a product of factors set equal to zero, each factor gives a solution.

**SAT Pattern — Already Factored:**

$(3x-5)(x+2) = 0$

Set each factor to zero:
- $3x - 5 = 0 \\Rightarrow x = \\frac{5}{3}$
- $x + 2 = 0 \\Rightarrow x = -2$

---

**SAT Trap:** Sometimes the equation is NOT set equal to zero!

$x^2 - 3x = 10$ → Move 10: $x^2 - 3x - 10 = 0$ → Then factor: $(x-5)(x+2)=0$.

**Never factor unless one side equals zero.**
      `
    },
    {
      id: 'sat-q1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each equation to its factored form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 - 9 = 0$',
            options: ['$(x-3)(x+3)$', '$(x-9)(x+1)$', '$(x-3)^2$', '$(x+9)(x-1)$']
          },
          {
            label: '$x^2 - 6x + 9 = 0$',
            options: ['$(x-3)(x+3)$', '$(x-3)^2$', '$(x+3)^2$', '$(x-9)(x+1)$']
          },
          {
            label: '$x^2 + 5x + 6 = 0$',
            options: ['$(x+2)(x+3)$', '$(x-2)(x-3)$', '$(x+1)(x+6)$', '$(x-1)(x-6)$']
          }
        ],
        correctAnswers: ['$(x-3)(x+3)$', '$(x-3)^2$', '$(x+2)(x+3)$'],
        hint1: '$x^2 - 9$ is a **difference of squares**: $a^2 - b^2 = (a-b)(a+b)$.',
        hint2: '$x^2 - 6x + 9$ is a **perfect square trinomial**: check if $c = (b/2)^2$.',
        hint3: 'Find two numbers that multiply to 6 and add to 5.',
        explanation: '$x^2-9=(x-3)(x+3)$ (difference of squares). $x^2-6x+9=(x-3)^2$ (perfect square). $x^2+5x+6=(x+2)(x+3)$ (standard factoring).'
      }
    },
    {
      id: 'sat-q1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $(x-a)(x-b) = x^2 - 5x + 6$, what is the value of $a + b$?',
            options: [
              '$5$',
              '$6$',
              '$-5$',
              '$11$'
            ],
            correctAnswer: 0,
            explanation: 'Expanding: $(x-a)(x-b) = x^2 - (a+b)x + ab$. Matching coefficients: $a+b = 5$ and $ab = 6$. So $a+b = 5$. (In fact $a=2, b=3$.)'
          },
          {
            question: 'What are the solutions of $6x^2 + x - 2 = 0$?',
            options: [
              '$x = \\frac{1}{2}$ and $x = -\\frac{2}{3}$',
              '$x = -\\frac{1}{2}$ and $x = \\frac{2}{3}$',
              '$x = 2$ and $x = -3$',
              '$x = \\frac{1}{3}$ and $x = -1$'
            ],
            correctAnswer: 0,
            explanation: 'AC method: $6 \\times (-2) = -12$. Numbers: $4$ and $-3$ ($4 \\times -3 = -12$, $4+(-3)=1$). Rewrite: $6x^2+4x-3x-2 = 2x(3x+2)-(3x+2) = (2x-1)(3x+2)=0$. Wait — let\'s check: $(2x-1)=0 \\Rightarrow x=1/2$ and $(3x+2)=0 \\Rightarrow x=-2/3$. ✓'
          }
        ]
      }
    }
  ]
}
