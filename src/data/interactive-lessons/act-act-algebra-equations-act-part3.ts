export const actAlgebraPart3Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Inequalities

**Part 3 of 7 — Solving, Graphing, Compound & Absolute Value Inequalities**

Inequalities work like equations with one critical rule:

> **Flip the inequality sign when you multiply or divide by a negative number.**

| Symbol | Meaning |
|--------|---------|
| $<$ | less than |
| $\\leq$ | less than or equal to |
| $>$ | greater than |
| $\\geq$ | greater than or equal to |
      `
    },
    {
      id: 'act-alg3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Basic inequality:** Solve $3x - 7 > 8$.

$$3x > 15 \\implies x > 5$$

**Example 2 — Negative coefficient:** Solve $-2x + 4 \\leq 10$.

$$-2x \\leq 6 \\implies x \\geq -3$$

Notice the inequality **flipped** when we divided by $-2$.

**Example 3 — Compound inequality:** Solve $-1 < 2x + 3 \\leq 11$.

$$-4 < 2x \\leq 8 \\implies -2 < x \\leq 4$$

**Example 4 — Absolute value inequality:** Solve $|x - 5| < 3$.

$$-3 < x - 5 < 3 \\implies 2 < x < 8$$

**ACT Tip:** $|A| < k$ means $-k < A < k$ (AND). $|A| > k$ means $A < -k$ OR $A > k$.
      `
    },
    {
      id: 'act-alg3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Inequality Skills** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $-4x + 3 > 19$',
            options: ['$x > -4$', '$x < -4$', '$x > 4$', '$x < 4$'],
            correctAnswer: 1,
            explanation: '$-4x > 16 \\implies x < -4$ (flip when dividing by $-4$).'
          },
          {
            question: 'Which interval satisfies $|x + 2| \\leq 5$?',
            options: ['$[-7, 3]$', '$(-7, 3)$', '$[-3, 7]$', '$(-3, 7)$'],
            correctAnswer: 0,
            explanation: '$-5 \\leq x + 2 \\leq 5 \\implies -7 \\leq x \\leq 3$, which is $[-7, 3]$.'
          }
        ]
      }
    },
    {
      id: 'act-alg3-input1',
      type: 'input-boxes' as const,
      content: `
**Solve the Inequality** 🧮

Give the boundary value (the number $x$ is compared to).

1) $5x + 2 > 27$ → $x > \\text{?}$

2) $-3x \\geq 12$ → $x \\leq \\text{?}$

3) $|x - 1| < 4$ → lower bound of $x$ is?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-4', '-3'],
        hint1: '$5x > 25$.',
        hint2: 'Divide by $-3$ and flip: $x \\leq -4$.',
        hint3: '$-4 < x - 1 < 4 \\implies -3 < x < 5$.',
        explanation: '1) $x > 5$. 2) $x \\leq -4$ (don\'t forget to flip!). 3) Lower bound is $-3$ from $|x-1| < 4$.'
      }
    },
    {
      id: 'act-alg3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Inequality Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When you divide both sides by a negative, you must …',
            options: ['Keep the sign', 'Flip the inequality sign', 'Remove the inequality', 'Square both sides']
          },
          {
            label: '$|x| < 5$ is equivalent to …',
            options: ['$x < 5$', '$-5 < x < 5$', '$x > -5$', '$x < -5$ or $x > 5$']
          },
          {
            label: '$|x| > 3$ is equivalent to …',
            options: ['$-3 < x < 3$', '$x > 3$', '$x < -3$ or $x > 3$', '$x \\geq -3$']
          }
        ],
        correctAnswers: ['Flip the inequality sign', '-5 < x < 5', 'x < -3 or x > 3'],
        hint1: 'Multiplying or dividing by a negative reverses the direction.',
        hint2: '$|x| < k$ means x is within $k$ units of 0.',
        hint3: '$|x| > k$ means x is more than $k$ units from 0 — two separate regions.',
        explanation: 'Flip when multiplying/dividing by negatives. "Less than" absolute value → AND (between). "Greater than" absolute value → OR (outside).'
      }
    },
    {
      id: 'act-alg3-compound',
      type: 'text' as const,
      content: `
## Graphing Inequalities — Number Line Summary

| Inequality | Graph |
|-----------|-------|
| $x > 3$ | Open circle at 3, arrow right → |
| $x \\leq -2$ | Closed circle at $-2$, arrow left ← |
| $1 < x \\leq 5$ | Open at 1, closed at 5, shade between |
| $x < -1$ or $x > 4$ | Two regions, open circles |

**ACT Tip:** Open circle = strict ($<, >$). Closed circle = inclusive ($\\leq, \\geq$).
      `
    },
    {
      id: 'act-alg3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $-3 \\leq 2x + 1 < 9$, which values can $x$ take?',
            options: ['$-2 \\leq x < 4$', '$-1 \\leq x < 5$', '$-2 < x \\leq 4$', '$-1 < x \\leq 4$'],
            correctAnswer: 0,
            explanation: 'Subtract 1: $-4 \\leq 2x < 8$. Divide by 2: $-2 \\leq x < 4$.'
          },
          {
            question: 'How many integers satisfy $|x - 3| \\leq 4$?',
            options: ['$7$', '$9$', '$8$', '$5$'],
            correctAnswer: 1,
            explanation: '$-1 \\leq x \\leq 7$. Integers: $-1, 0, 1, 2, 3, 4, 5, 6, 7$ → 9 values.'
          }
        ]
      }
    }
  ]
};
