export const satQuadraticsPart2Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q2-intro',
      type: 'text' as const,
      content: `
# 🧪 The Quadratic Formula & Discriminant

**Part 2 of 7 — The Universal Solver**

When factoring fails (or feels slow), the **quadratic formula** always works: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

This solves ANY equation $ax^2 + bx + c = 0$ — every time.

**Memory trick:** "Negative boy couldn't decide (±) whether to go to the radical party. But the boy was square, and he lost 4 awesome chicks. It was all over by 2 AM."

| Part | Meaning |
|------|---------|
| $-b$ | Flips the sign of $b$ |
| $\\pm$ | Gives TWO solutions |
| $b^2 - 4ac$ | **Discriminant** ($\\Delta$) — determines the nature of roots |
| $2a$ | Divides the entire numerator |
      `
    },
    {
      id: 'sat-q2-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'For $2x^2 - 4x + 1 = 0$, what are $a$, $b$, and $c$ to plug into the formula?',
            options: [
              '$a=2,\\ b=4,\\ c=1$',
              '$a=2,\\ b=-4,\\ c=1$',
              '$a=-2,\\ b=4,\\ c=-1$',
              '$a=2,\\ b=-4,\\ c=-1$'
            ],
            correctAnswer: 1,
            explanation: 'Read directly from $2x^2 - 4x + 1 = 0$: the coefficient of $x^2$ is $2$, of $x$ is $-4$, and the constant is $1$. **Don\'t forget the negative sign on $b$!**'
          },
          {
            question: 'When applying the formula to $x^2 + 6x + 5 = 0$, what expression appears under the radical?',
            options: [
              '$36 - 20 = 16$',
              '$36 + 20 = 56$',
              '$6 - 20 = -14$',
              '$-36 + 20 = -16$'
            ],
            correctAnswer: 0,
            explanation: '$b^2 - 4ac = 6^2 - 4(1)(5) = 36 - 20 = 16$. Since $\\sqrt{16} = 4$, the roots are $x = \\frac{-6 \\pm 4}{2}$, giving $x = -1$ and $x = -5$.'
          }
        ]
      }
    },
    {
      id: 'sat-q2-discriminant',
      type: 'text' as const,
      content: `
**The Discriminant — Predicting Roots Without Solving**

The **discriminant** is $\\Delta = b^2 - 4ac$. It tells you everything about the roots:

| Discriminant | # of Real Roots | What It Means |
|-------------|----------------|---------------|
| $\\Delta > 0$ | **2 distinct** real roots | Parabola crosses x-axis twice |
| $\\Delta = 0$ | **1 repeated** real root | Parabola touches x-axis at vertex |
| $\\Delta < 0$ | **0** real roots (2 complex) | Parabola never crosses x-axis |

**If $\\Delta$ is a perfect square** (like 0, 1, 4, 9, 16…), the roots are **rational** — the equation can be factored over the integers.

---

**Worked Example:** How many real solutions does $3x^2 - 2x + 5 = 0$ have?

$\\Delta = (-2)^2 - 4(3)(5) = 4 - 60 = -56$

Since $\\Delta < 0$, there are **no real solutions**. The parabola $y = 3x^2 - 2x + 5$ never crosses the x-axis.
      `
    },
    {
      id: 'sat-q2-practice',
      type: 'input-boxes' as const,
      content: `
**Compute the discriminant and determine the number of real solutions.** 🧮

1) $x^2 - 4x + 4 = 0$ → Discriminant = ?

2) $2x^2 + 3x - 5 = 0$ → Discriminant = ?

3) $x^2 + 2x + 5 = 0$ → Number of real solutions = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '49', '0'],
        hint1: '$\\Delta = (-4)^2 - 4(1)(4) = 16 - 16$.',
        hint2: '$\\Delta = 3^2 - 4(2)(-5) = 9 + 40$.',
        hint3: '$\\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$. Negative discriminant means…',
        explanation: '1) $\\Delta = 16 - 16 = 0$ (one repeated root: $x=2$). 2) $\\Delta = 9 + 40 = 49$ (two rational roots since $49$ is a perfect square). 3) $\\Delta = -16 < 0$, so $0$ real solutions.'
      }
    },
    {
      id: 'sat-q2-applying',
      type: 'text' as const,
      content: `
**Applying the Full Formula — Step by Step**

Solve $3x^2 - 6x + 2 = 0$.

**Step 1:** Identify: $a = 3$, $b = -6$, $c = 2$.

**Step 2:** Compute discriminant: $\\Delta = (-6)^2 - 4(3)(2) = 36 - 24 = 12$.

**Step 3:** Apply formula:
$$x = \\frac{-(-6) \\pm \\sqrt{12}}{2(3)} = \\frac{6 \\pm 2\\sqrt{3}}{6} = \\frac{3 \\pm \\sqrt{3}}{3}$$

**Step 4:** Simplify: $x = 1 + \\frac{\\sqrt{3}}{3}$ or $x = 1 - \\frac{\\sqrt{3}}{3}$.

---

**SAT Tip:** On calculator questions, compute the decimal: $x \\approx 1.577$ or $x \\approx 0.423$. On no-calculator, leave in simplified radical form.

**SAT Trap:** Don't divide only *part* of the numerator by $2a$. The $\\pm$ applies to the entire expression $\\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.
      `
    },
    {
      id: 'sat-q2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each discriminant value to the type of roots.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\Delta = 25$',
            options: ['Two distinct rational roots', 'Two distinct irrational roots', 'One repeated root', 'No real roots']
          },
          {
            label: '$\\Delta = 0$',
            options: ['Two distinct rational roots', 'Two distinct irrational roots', 'One repeated root', 'No real roots']
          },
          {
            label: '$\\Delta = 7$',
            options: ['Two distinct rational roots', 'Two distinct irrational roots', 'One repeated root', 'No real roots']
          }
        ],
        correctAnswers: ['Two distinct rational roots', 'One repeated root', 'Two distinct irrational roots'],
        hint1: '$25 > 0$ and $25 = 5^2$ is a perfect square.',
        hint2: 'When $\\Delta = 0$, the $\\pm$ disappears — there is only one value.',
        hint3: '$7 > 0$ (two real roots) but $7$ is not a perfect square (so $\\sqrt{7}$ is irrational).',
        explanation: '$\\Delta = 25$: positive perfect square → two rational roots. $\\Delta = 0$: one repeated root. $\\Delta = 7$: positive, not a perfect square → two irrational roots.'
      }
    },
    {
      id: 'sat-q2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
            options: [
              '$k = 3$ only',
              '$k = 6$ or $k = -6$',
              '$k = 9$ only',
              '$k = 0$'
            ],
            correctAnswer: 1,
            explanation: 'One real solution means $\\Delta = 0$: $k^2 - 4(1)(9) = 0 \\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6$. Don\'t forget the negative solution!'
          },
          {
            question: 'The equation $x^2 - 8x + k = 0$ has two distinct real solutions. Which could be the value of $k$?',
            options: [
              '$k = 16$',
              '$k = 20$',
              '$k = 10$',
              '$k = 64$'
            ],
            correctAnswer: 2,
            explanation: 'Two distinct real solutions requires $\\Delta > 0$: $64 - 4k > 0 \\Rightarrow k < 16$. Only $k = 10$ satisfies this. $k=16$ gives $\\Delta = 0$ (one root), and $k=20, 64$ give $\\Delta < 0$.'
          }
        ]
      }
    }
  ]
}
