export const satLinearEquationsPart1Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l1-intro',
      type: 'text' as const,
      content: `
# 📝 Linear Equations — SAT Foundations

**Part 1 of 7 — One-Step & Two-Step Equations**

On the SAT, linear equations are the **most common algebra question type**. About 25–30% of the Math section involves linear equations or inequalities, so mastering them is essential.

A **linear equation** is any equation where the variable appears only to the first power — no $x^2$, no $\\sqrt{x}$, just $x$.

**Standard form:** $ax + b = c$, where $a$, $b$, and $c$ are constants and $a \\neq 0$.

**The core strategy** for every linear equation is to **isolate the variable** by performing inverse operations on both sides:
- Addition ↔ Subtraction
- Multiplication ↔ Division

Whatever you do to one side, you **must** do to the other.
      `
    },
    {
      id: 'sat-l1-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a linear equation?',
            options: [
              '$x^2 + 5x = 6$',
              '$\\frac{3}{x} = 9$',
              '$7x - 4 = 17$',
              '$\\sqrt{x} + 2 = 10$'
            ],
            correctAnswer: 2,
            explanation: '$7x - 4 = 17$ is linear because $x$ appears to the first power only. The others involve $x^2$, $\\frac{1}{x}$, or $\\sqrt{x}$.'
          }
        ]
      }
    },
    {
      id: 'sat-l1-one-step',
      type: 'text' as const,
      content: `
**One-Step Equations**

These require a single operation to solve. They're fast points on the SAT — don't overthink them!

**Example 1:** $x + 12 = 5$

Subtract 12 from both sides:
$$x = 5 - 12 = -7$$

**Example 2:** $-4x = 36$

Divide both sides by $-4$:
$$x = \\frac{36}{-4} = -9$$

**Example 3:** $\\frac{x}{7} = -3$

Multiply both sides by 7:
$$x = -3 \\times 7 = -21$$
      `
    },
    {
      id: 'sat-l1-practice1',
      type: 'input-boxes' as const,
      content: `
**Solve each equation for $x$.** 🧮

1) $x - 8 = -15$

2) $5x = -35$

3) $\\frac{x}{4} = 9$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-7', '-7', '36'],
        hint1: 'For #1: Add 8 to both sides.',
        hint2: 'For #2: Divide both sides by 5. Watch the sign!',
        hint3: 'For #3: Multiply both sides by 4.',
        explanation: '1) $x = -15 + 8 = -7$. 2) $x = \\frac{-35}{5} = -7$. 3) $x = 9 \\times 4 = 36$.'
      }
    },
    {
      id: 'sat-l1-two-step',
      type: 'text' as const,
      content: `
**Two-Step Equations**

Most SAT linear equations are at least two steps. The strategy:

1. **Undo addition/subtraction first** (reverse PEMDAS)
2. **Then undo multiplication/division**

**Example:** Solve $3x + 7 = 22$

**Step 1:** Subtract 7 from both sides → $3x = 15$

**Step 2:** Divide both sides by 3 → $x = 5$

**Check:** $3(5) + 7 = 15 + 7 = 22$ ✓

---

**SAT Tip:** Always verify by plugging your answer back in. The SAT often includes "trap" answer choices from common arithmetic errors.
      `
    },
    {
      id: 'sat-l1-practice2',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$.** 🧮

1) $2x + 9 = 25$

2) $\\frac{x}{3} - 5 = 7$

3) $-4x + 10 = -6$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '36', '4'],
        hint1: 'For #1: Subtract 9 first, then divide by 2.',
        hint2: 'For #2: Add 5 first to get $\\frac{x}{3} = 12$, then multiply by 3.',
        hint3: 'For #3: Subtract 10 first → $-4x = -16$. Then divide by $-4$. Negative ÷ negative = positive!',
        explanation: '1) $2x = 16$, so $x = 8$. 2) $\\frac{x}{3} = 12$, so $x = 36$. 3) $-4x = -16$, so $x = 4$.'
      }
    },
    {
      id: 'sat-l1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $5x - 3 = 2x + 12$, what is the value of $x$?',
            options: [
              '$3$',
              '$5$',
              '$9$',
              '$15$'
            ],
            correctAnswer: 1,
            explanation: 'Subtract $2x$ from both sides: $3x - 3 = 12$. Add 3: $3x = 15$. Divide by 3: $x = 5$. Check: $5(5) - 3 = 22$ and $2(5) + 12 = 22$ ✓.'
          },
          {
            question: 'A gym charges a $25 registration fee plus $30 per month. If a member has paid a total of $175, how many months have they been a member?',
            options: [
              '$4$',
              '$5$',
              '$6$',
              '$7$'
            ],
            correctAnswer: 1,
            explanation: 'Set up the equation: $30m + 25 = 175$. Subtract 25: $30m = 150$. Divide by 30: $m = 5$ months.'
          }
        ]
      }
    }
  ]
}
