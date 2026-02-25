export const satLinearEquationsPart3Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Linear Inequalities

**Part 3 of 7 — Solving and Graphing Inequalities**

Linear inequalities work just like equations, with **one critical difference**: when you **multiply or divide by a negative number**, you must **flip the inequality sign**.

**Inequality symbols:**
| Symbol | Meaning | Graph |
|--------|---------|-------|
| $<$ | less than | open circle |
| $>$ | greater than | open circle |
| $\\leq$ | less than or equal to | closed circle |
| $\\geq$ | greater than or equal to | closed circle |
      `
    },
    {
      id: 'sat-l3-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'When solving an inequality, when do you flip the inequality sign?',
            options: [
              'When you add a negative number to both sides',
              'When you subtract from both sides',
              'When you multiply or divide both sides by a negative number',
              'Whenever you move a term to the other side'
            ],
            correctAnswer: 2,
            explanation: 'You only flip the inequality sign when multiplying or dividing both sides by a negative number. Adding or subtracting (positive or negative) never changes the direction.'
          }
        ]
      }
    },
    {
      id: 'sat-l3-solving',
      type: 'text' as const,
      content: `
**Solving Inequalities — Just Like Equations (Almost)**

**Example 1:** Solve $2x + 3 > 11$

Subtract 3: $2x > 8$

Divide by 2: $x > 4$

No sign flip needed — we divided by positive 2.

---

**Example 2:** Solve $-3x + 6 \\leq 15$

Subtract 6: $-3x \\leq 9$

Divide by $-3$ → **FLIP!** $x \\geq -3$

---

**Why does the sign flip?** Think about it: if $2 < 5$, then multiplying both by $-1$ gives $-2$ and $-5$. But $-2 > -5$. Negation reverses the order!
      `
    },
    {
      id: 'sat-l3-practice1',
      type: 'input-boxes' as const,
      content: `
**Solve each inequality for $x$.** Write your answer as a number only (the boundary value). 🧮

1) $4x - 7 > 13$ → $x > $ ?

2) $-5x + 2 \\leq 27$ → $x \\geq $ ?

3) $\\frac{x}{2} + 3 < 10$ → $x < $ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-5', '14'],
        hint1: 'For #1: Add 7 → $4x > 20$. Divide by 4 (positive, so no flip).',
        hint2: 'For #2: Subtract 2 → $-5x \\leq 25$. Divide by $-5$ and FLIP the sign!',
        hint3: 'For #3: Subtract 3 → $\\frac{x}{2} < 7$. Multiply by 2.',
        explanation: '1) $4x > 20 \\Rightarrow x > 5$. 2) $-5x \\leq 25 \\Rightarrow x \\geq -5$ (flipped!). 3) $\\frac{x}{2} < 7 \\Rightarrow x < 14$.'
      }
    },
    {
      id: 'sat-l3-compound',
      type: 'text' as const,
      content: `
**Compound Inequalities**

A **compound inequality** combines two inequalities. The SAT loves these!

**Example:** Solve $-3 < 2x + 1 \\leq 7$

Solve both parts at once by performing the same operation on all three parts:

Subtract 1: $-4 < 2x \\leq 6$

Divide by 2: $-2 < x \\leq 3$

This means $x$ is greater than $-2$ AND less than or equal to 3.

---

**SAT Tip:** When you see a compound inequality like $a < bx + c < d$, treat all three parts as one unit. Whatever you do to the middle, do to both ends.
      `
    },
    {
      id: 'sat-l3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Which value of $x$ satisfies the inequality $-2x + 8 > 14$?',
            options: [
              '$x = -5$',
              '$x = -3$',
              '$x = -2$',
              '$x = 3$'
            ],
            correctAnswer: 0,
            explanation: 'Solve: $-2x > 6 \\Rightarrow x < -3$ (flip!). Only $x = -5$ is less than $-3$. You can verify: $-2(-5) + 8 = 18 > 14$ ✓.'
          },
          {
            question: 'If $1 \\leq 3x - 5 \\leq 16$, what is the greatest possible integer value of $x$?',
            options: [
              '$5$',
              '$6$',
              '$7$',
              '$8$'
            ],
            correctAnswer: 2,
            explanation: 'Add 5 to all parts: $6 \\leq 3x \\leq 21$. Divide by 3: $2 \\leq x \\leq 7$. The greatest integer is $7$.'
          }
        ]
      }
    }
  ]
}
