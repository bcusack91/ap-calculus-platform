export const satLinearEquationsPart2Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l2-intro',
      type: 'text' as const,
      content: `
# 🔢 Multi-Step Equations

**Part 2 of 7 — Distributing, Combining, and Solving**

Many SAT equations require more than two steps. Before you can isolate $x$, you often need to **simplify each side first**.

The process:
1. **Distribute** — remove parentheses using the distributive property
2. **Combine like terms** — simplify each side separately
3. **Isolate the variable** — use inverse operations (reverse PEMDAS)
      `
    },
    {
      id: 'sat-l2-distribute',
      type: 'text' as const,
      content: `
**Step 1: Distribute**

The **distributive property** says $a(b + c) = ab + ac$. Use it to remove parentheses.

**Example:** Solve $3(2x - 4) + 5 = 23$

**Distribute:** $6x - 12 + 5 = 23$

**Combine like terms:** $6x - 7 = 23$

**Add 7:** $6x = 30$

**Divide by 6:** $x = 5$

**Check:** $3(2 \\cdot 5 - 4) + 5 = 3(6) + 5 = 23$ ✓

---

**Common mistake:** Forgetting to distribute to **every** term inside the parentheses. For example, in $-2(x - 5)$, both terms change sign: $-2x + 10$, NOT $-2x - 10$.
      `
    },
    {
      id: 'sat-l2-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $-3(x - 4)$ when fully distributed?',
            options: [
              '$-3x - 4$',
              '$-3x - 12$',
              '$-3x + 12$',
              '$3x - 12$'
            ],
            correctAnswer: 2,
            explanation: 'Distribute $-3$ to both terms: $-3 \\cdot x = -3x$ and $-3 \\cdot (-4) = +12$. So $-3(x-4) = -3x + 12$.'
          }
        ]
      }
    },
    {
      id: 'sat-l2-combining',
      type: 'text' as const,
      content: `
**Step 2: Combine Like Terms**

**Like terms** have the same variable raised to the same power. Combine them by adding their coefficients.

**Example:** Solve $5x + 3 - 2x + 8 = 26$

**Combine like terms on the left:** $(5x - 2x) + (3 + 8) = 26$

$$3x + 11 = 26$$

**Subtract 11:** $3x = 15$

**Divide by 3:** $x = 5$

---

**SAT Tip:** Before solving, always scan for like terms on the same side that can be combined. This avoids messy arithmetic later.
      `
    },
    {
      id: 'sat-l2-practice',
      type: 'input-boxes' as const,
      content: `
**Solve each equation.** 🧮

1) $4(x + 3) = 28$

2) $2(3x - 1) + 4 = 20$

3) $7x + 5 - 3x = 25$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '3', '5'],
        hint1: 'For #1: Distribute first → $4x + 12 = 28$. Then subtract 12 and divide by 4.',
        hint2: 'For #2: Distribute → $6x - 2 + 4 = 20$. Combine like terms → $6x + 2 = 20$.',
        hint3: 'For #3: Combine $7x - 3x = 4x$, so $4x + 5 = 25$.',
        explanation: '1) $4x + 12 = 28 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. 2) $6x + 2 = 20 \\Rightarrow 6x = 18 \\Rightarrow x = 3$. 3) $4x + 5 = 25 \\Rightarrow 4x = 20 \\Rightarrow x = 5$.'
      }
    },
    {
      id: 'sat-l2-fractions',
      type: 'text' as const,
      content: `
**Clearing Fractions — A Key SAT Strategy**

When an equation has fractions, multiply **every term** by the LCD (least common denominator) to eliminate them.

**Example:** Solve $\\frac{x}{2} + \\frac{x}{3} = 10$

The LCD of 2 and 3 is **6**. Multiply every term by 6:

$$6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 10$$

$$3x + 2x = 60$$

$$5x = 60 \\Rightarrow x = 12$$

This technique turns messy fraction problems into clean integer problems — much faster on timed tests!
      `
    },
    {
      id: 'sat-l2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $2(x + 5) - 3(x - 1) = 10$, what is the value of $x$?',
            options: [
              '$-7$',
              '$3$',
              '$7$',
              '$13$'
            ],
            correctAnswer: 1,
            explanation: 'Distribute: $2x + 10 - 3x + 3 = 10$. Combine: $-x + 13 = 10$. Subtract 13: $-x = -3$. Multiply by $-1$: $x = 3$.'
          },
          {
            question: 'What is the value of $x$ in the equation $\\frac{x + 1}{4} = \\frac{x - 3}{2}$?',
            options: [
              '$-7$',
              '$5$',
              '$7$',
              '$9$'
            ],
            correctAnswer: 2,
            explanation: 'Multiply both sides by 4: $x + 1 = 2(x - 3)$. Distribute: $x + 1 = 2x - 6$. Subtract $x$: $1 = x - 6$. Add 6: $x = 7$.'
          }
        ]
      }
    }
  ]
}
