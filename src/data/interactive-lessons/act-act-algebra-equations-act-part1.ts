export const actAlgebraPart1Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg1-intro',
      type: 'text' as const,
      content: `
# 🔢 Solving Linear Equations

**Part 1 of 7 — One-Step, Two-Step, Multi-Step & Variables on Both Sides**

Linear equations are the backbone of ACT Algebra. You will see several on every test.

| Type | Example |
|------|---------|
| One-step | $x + 5 = 12$ |
| Two-step | $2x - 3 = 11$ |
| Multi-step | $3(x + 2) - 4 = 14$ |
| Variables both sides | $5x - 7 = 2x + 8$ |

**Golden Rule:** Whatever you do to one side, do to the other.
      `
    },
    {
      id: 'act-alg1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — One-step:** Solve $x - 9 = 4$.

$$x - 9 = 4 \\implies x = 13$$

**Example 2 — Two-step:** Solve $3x + 7 = 22$.

$$3x = 15 \\implies x = 5$$

**Example 3 — Multi-step:** Solve $2(x - 4) + 6 = 18$.

$$2x - 8 + 6 = 18 \\implies 2x - 2 = 18 \\implies 2x = 20 \\implies x = 10$$

**Example 4 — Variables on both sides:** Solve $7x - 3 = 4x + 12$.

$$3x = 15 \\implies x = 5$$

**ACT Tip:** Distribute first, combine like terms, then isolate $x$. Speed matters — practice until these steps are automatic.
      `
    },
    {
      id: 'act-alg1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $4x - 5 = 19$',
            options: ['$x = 3$', '$x = 6$', '$x = 4.5$', '$x = 7$'],
            correctAnswer: 1,
            explanation: '$4x = 24 \\implies x = 6$.'
          },
          {
            question: 'Solve: $3(2x + 1) = 5x + 9$',
            options: ['$x = 2$', '$x = 6$', '$x = 3$', '$x = 8$'],
            correctAnswer: 1,
            explanation: '$6x + 3 = 5x + 9 \\implies x = 6$.'
          }
        ]
      }
    },
    {
      id: 'act-alg1-input1',
      type: 'input-boxes' as const,
      content: `
**Solve for x** 🧮

1) $5x + 3 = 28$

2) $2(x - 6) = 10$

3) $9x - 4 = 5x + 16$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '11', '5'],
        hint1: '$5x = 25$.',
        hint2: '$2x - 12 = 10 \\implies 2x = 22$.',
        hint3: '$4x = 20$.',
        explanation: '1) $x = 5$. 2) $x = 11$. 3) $x = 5$. Each requires isolating $x$ using inverse operations.'
      }
    },
    {
      id: 'act-alg1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the First Step** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $3(x + 4) = 21$, you should first …',
            options: ['Subtract 4', 'Divide by 3', 'Distribute the 3', 'Add 3']
          },
          {
            label: 'For $8x - 2 = 30$, you should first …',
            options: ['Divide by 8', 'Subtract 2', 'Add 2', 'Multiply by 8']
          },
          {
            label: 'For $6x + 1 = 4x + 9$, you should first …',
            options: ['Add 1 to both sides', 'Subtract 4x from both sides', 'Divide by 6', 'Subtract 9']
          }
        ],
        correctAnswers: ['Distribute the 3', 'Add 2', 'Subtract 4x from both sides'],
        hint1: 'The parentheses need to be removed first.',
        hint2: 'Move the constant term away from the variable term.',
        hint3: 'Collect variables on one side before isolating.',
        explanation: 'Distribute before combining; add/subtract constants to isolate the variable term; collect variable terms on one side when variables appear on both sides.'
      }
    },
    {
      id: 'act-alg1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

On the ACT you have roughly **1 minute per question**. Try solving these without writing every step.

| # | Problem | Answer |
|---|---------|--------|
| 1 | $\\frac{x}{3} + 4 = 9$ | $x = 15$ |
| 2 | $-2(x - 5) = 3x + 20$ | $x = -2$ |
| 3 | $\\frac{2x + 1}{5} = 3$ | $x = 7$ |

**ACT Tip:** When fractions appear, multiply every term by the LCD first — it clears the fractions instantly.
      `
    },
    {
      id: 'act-alg1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x}{4} - 3 = 5$, what is the value of $x$?',
            options: ['$8$', '$32$', '$20$', '$2$'],
            correctAnswer: 1,
            explanation: '$\\frac{x}{4} = 8 \\implies x = 32$.'
          },
          {
            question: 'If $5(x - 2) - 3x = 14$, what is $x$?',
            options: ['$6$', '$12$', '$8$', '$24$'],
            correctAnswer: 1,
            explanation: '$5x - 10 - 3x = 14 \\implies 2x = 24 \\implies x = 12$.'
          }
        ]
      }
    }
  ]
};
