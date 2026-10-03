export const actAlgebraPart5Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg5-intro',
      type: 'text' as const,
      content: `
# 📏 Absolute Value Equations

**Part 5 of 7 — Solving $|x - a| = b$, Two Cases & Extraneous Solutions**

The absolute value $|A|$ is the distance from $A$ to 0 on the number line. Because distance is always non-negative:

$$|A| = b \\implies A = b \\quad \\text{or} \\quad A = -b \\qquad (b \\geq 0)$$

| Right side $b$ | Number of solutions | Example |
|----------------|---------------------|---------|
| $b > 0$ | **Two** | $\\lvert x \\rvert = 4 \\implies x = 4$ or $x = -4$ |
| $b = 0$ | **Exactly one** (since $A = 0$ and $A = -0$ are the same equation) | $\\lvert x - 2 \\rvert = 0 \\implies x = 2$ |
| $b < 0$ | **None** — absolute value can never be negative | $\\lvert x \\rvert = -4$ |

**Key Insight:** Always isolate the absolute value expression *first*, then split into two cases.
      `
    },
    {
      id: 'act-alg5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Solve $|x - 3| = 7$.

Case 1: $x - 3 = 7 \\implies x = 10$

Case 2: $x - 3 = -7 \\implies x = -4$

**Solutions:** $x = 10$ or $x = -4$

---

**Example 2:** Solve $|2x + 1| + 5 = 12$.

First isolate: $|2x + 1| = 7$.

Case 1: $2x + 1 = 7 \\implies x = 3$

Case 2: $2x + 1 = -7 \\implies x = -4$

---

**Example 3 — No solution:** Solve $|x + 4| = -2$.

No solution! Absolute value cannot equal a negative number.

---

**Example 4 — Extraneous solutions:** Solve $|3x - 6| = x + 2$.

Case 1: $3x - 6 = x + 2 \\implies 2x = 8 \\implies x = 4$

Check: $|12 - 6| = 6$ and $4 + 2 = 6$. ✓

Case 2: $3x - 6 = -(x + 2) \\implies 3x - 6 = -x - 2 \\implies 4x = 4 \\implies x = 1$

Check: $|3 - 6| = 3$ and $1 + 2 = 3$. ✓

Both valid! But always check — sometimes one case is extraneous.

**ACT Tip:** When the other side contains a variable, you **must** check both solutions in the original equation.
      `
    },
    {
      id: 'act-alg5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Absolute Value Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many solutions does $|x + 5| = -3$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: 'Absolute value is never negative, so there are 0 solutions.'
          },
          {
            question: 'Solve $|2x - 8| = 6$. What is the sum of the solutions?',
            options: ['$4$', '$8$', '$6$', '$12$'],
            correctAnswer: 1,
            explanation: 'Case 1: $2x - 8 = 6 \\implies x = 7$. Case 2: $2x - 8 = -6 \\implies x = 1$. Sum $= 7 + 1 = 8$.'
          }
        ]
      }
    },
    {
      id: 'act-alg5-input1',
      type: 'input-boxes' as const,
      content: `
**Solve for x** 🧮

For each, give the LARGER solution.

1) $|x - 4| = 9$

2) $|3x + 6| = 12$

3) $|x| + 3 = 10$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '2', '7'],
        hint1: '$x - 4 = 9$ or $x - 4 = -9$. The larger one is …',
        hint2: '$3x + 6 = 12 \\implies x = 2$ or $3x + 6 = -12 \\implies x = -6$.',
        hint3: 'Isolate first: $|x| = 7$, so $x = 7$ or $x = -7$.',
        explanation: '1) $x = 13$ or $x = -5$; larger is 13. 2) $x = 2$ or $x = -6$; larger is 2. 3) $x = 7$ or $x = -7$; larger is 7.'
      }
    },
    {
      id: 'act-alg5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Absolute Value Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$|A| = b$ (with $b > 0$) has how many cases?',
            options: ['1', '2', '3', 'Depends on A']
          },
          {
            label: 'An extraneous solution occurs when …',
            options: ['Both cases give the same answer', 'A solution fails the check in the original equation', 'There is no solution', 'The equation has fractions']
          },
          {
            label: 'The first step in solving $|2x + 3| - 5 = 8$ is …',
            options: ['Split into two cases', 'Add 5 to both sides', 'Subtract 3', 'Square both sides']
          }
        ],
        correctAnswers: ['2', 'A solution fails the check in the original equation', 'Add 5 to both sides'],
        hint1: 'The expression inside can be positive or negative.',
        hint2: 'Extraneous means it satisfies the derived equation but not the original.',
        hint3: 'You must isolate $|\\cdots|$ before splitting into cases.',
        explanation: 'Two cases (positive and negative). Extraneous solutions don\'t satisfy the original equation. Always isolate the absolute value first.'
      }
    },
    {
      id: 'act-alg5-extraneous',
      type: 'text' as const,
      content: `
## Spotting Extraneous Solutions

Extraneous solutions most commonly appear when the right side contains a variable:

$$|3x - 1| = 2x + 5$$

Case 1: $3x - 1 = 2x + 5 \\implies x = 6$ → Check: $|17| = 17$ ✓

Case 2: $3x - 1 = -(2x + 5) \\implies 5x = -4 \\implies x = -\\frac{4}{5}$

Check: $|3(-0.8) - 1| = |-3.4| = 3.4$ vs. $2(-0.8) + 5 = 3.4$ ✓

Both work here, but now consider $|x - 2| = 3x + 4$:

Case 1: $x - 2 = 3x + 4 \\implies -2x = 6 \\implies x = -3$

Check: $|-3 - 2| = 5$ but $3(-3) + 4 = -5$ ✗ — **extraneous!** An absolute value can't equal $-5$.

Case 2: $x - 2 = -(3x + 4) \\implies x - 2 = -3x - 4 \\implies 4x = -2 \\implies x = -0.5$

Check: $|-0.5 - 2| = 2.5$ and $3(-0.5) + 4 = 2.5$ ✓ — valid.

**Solution:** $x = -0.5$ only.

**ACT Tip:** Solve **both** cases and check **each** one in the original equation. Neither case is "usually" the right one — and an answer choice listing both values is a common trap when one of them is extraneous.
      `
    },
    {
      id: 'act-alg5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $|4x - 12| = 0$, what is $x$?',
            options: ['$0$', '$3$', '$-3$', '$12$'],
            correctAnswer: 1,
            explanation: '$|4x - 12| = 0 \\implies 4x - 12 = 0 \\implies x = 3$. When the absolute value equals 0, there is exactly one solution.'
          },
          {
            question: 'The solutions of $|x - 5| = 2x - 7$ are:',
            options: ['$x = 4$ only', '$x = 4$ and $x = \\frac{2}{3}$', '$x = 12$ and $x = 4$', '$x = 4$ and $x = -4$'],
            correctAnswer: 0,
            explanation: 'Case 1: $x - 5 = 2x - 7 \\implies x = 2$. Check: $|2-5|=3$ but $2(2)-7=-3$. ✗ Extraneous! Case 2: $x-5 = -(2x-7) \\implies 3x = 12 \\implies x = 4$. Check: $|4-5|=1$ and $2(4)-7=1$. ✓'
          }
        ]
      }
    }
  ]
};
