export const solvingLinearEquationsPart3Data = {
  topicSlug: 'solving-linear-equations-algebra1',
  sections: [
    {
      id: 'multi-step-intro',
      type: 'text' as const,
      content: `
**Part 3: Multi-Step Equations & Variables on Both Sides** ⚡

Now we tackle the equations that look intimidating but follow the same core principles you already know.

**What's new?**
- Equations that need **simplifying first** (combining like terms, distributing)
- Equations with the **variable on both sides** (like $5x + 3 = 2x + 15$)

**The General Strategy:**

| Step | Action | Example |
|------|--------|---------|
| 1 | Distribute (if parentheses exist) | $2(x+3) \\rightarrow 2x + 6$ |
| 2 | Combine like terms on each side | $3x + 2x + 4 \\rightarrow 5x + 4$ |
| 3 | Move variable terms to one side | Get all $x$'s together |
| 4 | Move constants to the other side | Get all numbers together |
| 5 | Divide to isolate $x$ | Solve! |

Don't memorize these as rigid rules — understand the goal: **get $x$ alone on one side**.
      `
    },
    {
      id: 'combining-like-terms',
      type: 'text' as const,
      content: `
**Simplify First: Combining Like Terms** 🔧

Before solving, simplify each side of the equation separately.

**Example 1:** Solve $3x + 7 + 2x - 4 = 18$

**Step 1: Combine like terms on the left**
- $3x + 2x = 5x$ (variable terms)
- $7 - 4 = 3$ (constant terms)

$$5x + 3 = 18$$

**Step 2: Now it's a two-step equation!**
$$5x = 15$$
$$x = 3$$

**Check:** $3(3) + 7 + 2(3) - 4 = 9 + 7 + 6 - 4 = 18$ ✓

---

**Example 2:** Solve $4(x + 3) = 28$

**Step 1: Distribute the 4**

$$4x + 12 = 28$$

**Step 2: Solve the two-step equation**
$$4x = 16$$
$$x = 4$$

**Check:** $4(4 + 3) = 4(7) = 28$ ✓
      `
    },
    {
      id: 'distribute-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Distribute & Solve** 🧮

Solve each equation for $x$.

1) $2(x - 5) = 14$

2) $-3(x + 4) = 15$

3) $5(2x + 1) - 3 = 32$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '-9', '3'],
        hint1: 'Equation 1: Distribute: $2x - 10 = 14$. Then add 10: $2x = 24$.',
        hint2: 'Equation 2: Distribute: $-3x - 12 = 15$. Then add 12: $-3x = 27$. Divide by $-3$.',
        hint3: 'Equation 3: Distribute: $10x + 5 - 3 = 32$, so $10x + 2 = 32$. Then subtract 2: $10x = 30$.',
        explanation: '1) $2x - 10 = 14 \\Rightarrow 2x = 24 \\Rightarrow x = 12$. 2) $-3x - 12 = 15 \\Rightarrow -3x = 27 \\Rightarrow x = -9$. 3) $10x + 5 - 3 = 32 \\Rightarrow 10x + 2 = 32 \\Rightarrow 10x = 30 \\Rightarrow x = 3$.'
      }
    },
    {
      id: 'variables-both-sides-intro',
      type: 'text' as const,
      content: `
**Variables on Both Sides** 🔄

What if $x$ appears on **both sides** of the equation? We need to collect all the variable terms on one side.

**Example 3:** Solve $5x + 3 = 2x + 15$

**Step 1: Get all $x$-terms on one side**

Subtract $2x$ from both sides:
$$5x - 2x + 3 = 2x - 2x + 15$$
$$3x + 3 = 15$$

**Step 2: Solve the two-step equation**
$$3x = 12$$
$$x = 4$$

**Check:** Left: $5(4) + 3 = 23$. Right: $2(4) + 15 = 23$ ✓

---

**Example 4:** Solve $7x - 2 = 3x + 14$

**Step 1:** Subtract $3x$ from both sides
$$4x - 2 = 14$$

**Step 2:** Add 2 to both sides
$$4x = 16$$

**Step 3:** Divide by 4
$$x = 4$$

**Check:** Left: $7(4) - 2 = 26$. Right: $3(4) + 14 = 26$ ✓

**Pro Tip:** You can move the variable to either side. It often helps to move the **smaller** $x$-coefficient to the other side, so you avoid negative coefficients.
      `
    },
    {
      id: 'which-side-check',
      type: 'multiple-choice' as const,
      content: `
**Strategy Check — Variables on Both Sides** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To solve $3x + 5 = 8x - 10$, which is the most efficient first step?',
            options: [
              'Subtract $8x$ from both sides (giving $-5x + 5 = -10$)',
              'Subtract $3x$ from both sides (giving $5 = 5x - 10$)',
              'Subtract 5 from both sides',
              'Add 10 to both sides'
            ],
            correctAnswer: 1,
            explanation: 'Subtracting $3x$ (the smaller coefficient) gives $5 = 5x - 10$, which has a positive coefficient. Subtracting $8x$ would give $-5x + 5 = -10$, which works but is harder. Both produce the correct answer $x = 3$.'
          },
          {
            question: 'Solve: $6x + 1 = 4x + 9$',
            options: [
              '$x = 4$',
              '$x = 5$',
              '$x = 1$',
              '$x = -4$'
            ],
            correctAnswer: 0,
            explanation: 'Subtract $4x$: $2x + 1 = 9$. Subtract 1: $2x = 8$. Divide by 2: $x = 4$. Check: $6(4)+1 = 25$ and $4(4)+9 = 25$ ✓'
          },
          {
            question: 'Solve: $2x - 7 = 5x + 8$',
            options: [
              '$x = 5$',
              '$x = -5$',
              '$x = \\frac{1}{3}$',
              '$x = -\\frac{1}{3}$'
            ],
            correctAnswer: 1,
            explanation: 'Subtract $2x$: $-7 = 3x + 8$. Subtract 8: $-15 = 3x$. Divide by 3: $x = -5$. Check: $2(-5)-7 = -17$ and $5(-5)+8 = -17$ ✓'
          }
        ]
      }
    },
    {
      id: 'complex-multi-step',
      type: 'text' as const,
      content: `
**Putting It All Together: Distribute + Both Sides** 🏗️

The hardest multi-step equations combine distribution with variables on both sides. Take it step by step.

**Example 5:** Solve $3(2x - 1) = 4x + 9$

**Step 1: Distribute**
$$6x - 3 = 4x + 9$$

**Step 2: Move variable terms (subtract $4x$)**
$$2x - 3 = 9$$

**Step 3: Move constants (add 3)**
$$2x = 12$$

**Step 4: Divide**
$$x = 6$$

**Check:** Left: $3(2 \\cdot 6 - 1) = 3(11) = 33$. Right: $4(6) + 9 = 33$ ✓

---

**Example 6:** Solve $2(x + 4) = 3(x - 1) + 7$

**Step 1: Distribute on both sides**
$$2x + 8 = 3x - 3 + 7$$

**Step 2: Combine like terms on the right**
$$2x + 8 = 3x + 4$$

**Step 3: Subtract $2x$**
$$8 = x + 4$$

**Step 4: Subtract 4**
$$4 = x$$

**Check:** Left: $2(4+4) = 2(8) = 16$. Right: $3(4-1)+7 = 3(3)+7 = 16$ ✓
      `
    },
    {
      id: 'multi-step-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Multi-Step Equations** 🧮

These are the real deal! Solve each equation for $x$.

1) $4(x - 2) = 2x + 6$

2) $3x + 5 = 7x - 11$

3) $2(3x + 1) = 5(x - 2) + 14$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '4', '2'],
        hint1: 'Equation 1: Distribute: $4x - 8 = 2x + 6$. Subtract $2x$: $2x - 8 = 6$. Add 8: $2x = 14$.',
        hint2: 'Equation 2: Subtract $3x$: $5 = 4x - 11$. Add 11: $16 = 4x$. Divide by 4.',
        hint3: 'Equation 3: Distribute both sides: $6x + 2 = 5x - 10 + 14$, so $6x + 2 = 5x + 4$. Subtract $5x$: $x + 2 = 4$.',
        explanation: '1) $4x - 8 = 2x + 6 \\Rightarrow 2x = 14 \\Rightarrow x = 7$. 2) $5 = 4x - 11 \\Rightarrow 16 = 4x \\Rightarrow x = 4$. 3) $6x + 2 = 5x + 4 \\Rightarrow x = 2$.'
      }
    },
    {
      id: 'strategy-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check — Problem-Solving Strategy** 🔍

For each equation, identify the correct FIRST step.
      `,
      exercise: {
        dropdowns: [
          {
            label: '$4(x + 2) = 3x + 11$ → First step:',
            options: ['Divide by 4', 'Subtract 3x', 'Distribute the 4', 'Subtract 2'],
            correctIndex: 2,
            explanation: 'When there are parentheses, distribute first: $4x + 8 = 3x + 11$. Then proceed with moving terms.'
          },
          {
            label: '$5x + 3 - 2x = 15$ → First step:',
            options: ['Subtract 3', 'Combine $5x$ and $-2x$ to get $3x$', 'Divide by 5', 'Add $2x$ to both sides'],
            correctIndex: 1,
            explanation: 'First simplify the left side by combining like terms: $3x + 3 = 15$. Then solve the two-step equation.'
          },
          {
            label: '$9x - 4 = 6x + 8$ → First step:',
            options: ['Add 4 to both sides', 'Subtract $6x$ from both sides', 'Divide by 9', 'Subtract 8 from both sides'],
            correctIndex: 1,
            explanation: 'Get variables on one side first: subtract $6x$ to get $3x - 4 = 8$. Then add 4 and divide by 3 to get $x = 4$.'
          }
        ]
      }
    },
    {
      id: 'part3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Part 3 Exit Quiz** ✅

These require multiple steps. Take your time and work carefully.
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $5(x - 3) + 2 = 3(x + 1)$',
            options: [
              '$x = 8$',
              '$x = -8$',
              '$x = 4$',
              '$x = 10$'
            ],
            correctAnswer: 0,
            explanation: 'Distribute: $5x - 15 + 2 = 3x + 3$. Simplify left: $5x - 13 = 3x + 3$. Subtract $3x$: $2x - 13 = 3$. Add 13: $2x = 16$. Divide: $x = 8$. Check: $5(5)+2 = 27$ and $3(9) = 27$ ✓'
          },
          {
            question: 'Solve: $7 - 2(x + 3) = -5$',
            options: [
              '$x = 3$',
              '$x = -3$',
              '$x = 2$',
              '$x = 8$'
            ],
            correctAnswer: 0,
            explanation: 'Distribute: $7 - 2x - 6 = -5$. Simplify: $1 - 2x = -5$. Subtract 1: $-2x = -6$. Divide by $-2$: $x = 3$. Check: $7 - 2(6) = 7 - 12 = -5$ ✓. Wait, $7 - 2(3+3) = 7 - 12 = -5$ ✓'
          },
          {
            question: 'Solve: $8x - 3 = 5x + 9$',
            options: [
              '$x = -4$',
              '$x = 2$',
              '$x = 4$',
              '$x = 6$'
            ],
            correctAnswer: 2,
            explanation: 'Subtract $5x$: $3x - 3 = 9$. Add 3: $3x = 12$. Divide: $x = 4$. Check: $8(4) - 3 = 29$ and $5(4) + 9 = 29$ ✓'
          },
          {
            question: 'Which equation has $x = -2$ as its solution?',
            options: [
              '$3x + 4 = 10$',
              '$4(x + 1) = -4$',
              '$5x - 3 = 2x + 3$',
              '$2x + 7 = x - 5$'
            ],
            correctAnswer: 1,
            explanation: 'Check each: $4(-2+1) = 4(-1) = -4$ ✓. The others: $3(-2)+4 = -2 \\neq 10$. $5(-2)-3 = -13$ vs $2(-2)+3 = -1$, not equal. $2(-2)+7 = 3$ vs $-2-5 = -7$, not equal.'
          }
        ]
      }
    },
    {
      id: 'part3-complete',
      type: 'text' as const,
      content: `
**Part 3 Complete!** 🎉

You can now handle multi-step equations — the bread and butter of algebra!

**Key Takeaways:**
- ✅ **Distribute** first to eliminate parentheses
- ✅ **Combine like terms** on each side separately
- ✅ **Move variables** to one side (prefer the side that keeps the coefficient positive)
- ✅ **Move constants** to the other side
- ✅ **Divide** to isolate the variable

**Next Up: Part 4 — Special Cases, Fractions, & Applications**

You'll discover equations with **no solution**, equations with **infinite solutions**, and master the dreaded **fraction equations**!
      `
    }
  ]
}
