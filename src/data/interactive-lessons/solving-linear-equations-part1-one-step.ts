export const solvingLinearEquationsPart1Data = {
  topicSlug: 'solving-linear-equations-algebra1',
  sections: [
    {
      id: 'intro-welcome',
      type: 'text' as const,
      content: `
**Part 1: Foundations & One-Step Equations** 🎯

Welcome to Solving Linear Equations! This is one of the most important skills in all of algebra — and it shows up everywhere from physics to finance.

**What is a Linear Equation?**

A **linear equation** is an equation where the variable (usually $x$) has an exponent of 1. No $x^2$, no $\\sqrt{x}$, no $\\frac{1}{x}$ — just plain $x$.

✅ Linear: $3x + 5 = 14$, $\\;\\; 2(x - 7) = 10$, $\\;\\; \\frac{x}{4} = 9$

❌ Not Linear: $x^2 + 3 = 12$, $\\;\\; \\sqrt{x} = 5$, $\\;\\; \\frac{3}{x} = 7$

**The Golden Rule of Equations:**
> Whatever you do to one side, you **must** do to the other side.

This is how we keep the equation balanced — like a scale. If you add 5 to the left, you must add 5 to the right. If you multiply the left by 3, you multiply the right by 3. Always.
      `
    },
    {
      id: 'linear-equation-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check — Identifying Linear Equations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a linear equation?',
            options: [
              '$x^2 - 4 = 0$',
              '$5x + 3 = 18$',
              '$\\sqrt{x + 1} = 7$',
              '$\\frac{2}{x} = 6$'
            ],
            correctAnswer: 1,
            explanation: '$5x + 3 = 18$ is linear because $x$ appears to the first power only. The others involve $x^2$, $\\sqrt{x}$, or $\\frac{1}{x}$, which make them nonlinear.'
          },
          {
            question: 'What does it mean to "solve" a linear equation?',
            options: [
              'Simplify both sides as much as possible',
              'Find the value of the variable that makes the equation true',
              'Move all terms to one side',
              'Factor the expression'
            ],
            correctAnswer: 1,
            explanation: 'Solving means finding the value of the variable (like $x$) that makes both sides of the equation equal. For example, $x = 3$ solves $2x + 1 = 7$ because $2(3) + 1 = 7$ ✓.'
          }
        ]
      }
    },
    {
      id: 'addition-subtraction',
      type: 'text' as const,
      content: `
**Solving by Addition or Subtraction** ➕➖

When a number is **added to** or **subtracted from** the variable, we use the **inverse operation** to undo it.

---

**Example 1:** Solve $x + 7 = 12$

The $+7$ is added to $x$. To undo it, **subtract 7** from both sides:

$$x + 7 - 7 = 12 - 7$$
$$x = 5$$

**Check:** $5 + 7 = 12$ ✓

---

**Example 2:** Solve $x - 4 = 9$

The $-4$ is subtracted from $x$. To undo it, **add 4** to both sides:

$$x - 4 + 4 = 9 + 4$$
$$x = 13$$

**Check:** $13 - 4 = 9$ ✓

---

**Key Insight:** Addition and subtraction are inverse operations — they "undo" each other. We're not just moving numbers around; we're performing the same operation on both sides to maintain balance.
      `
    },
    {
      id: 'add-sub-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Addition & Subtraction Equations** 🧮

Solve each equation for $x$. Enter just the number (or negative number).

1) $x + 15 = 23$

2) $x - 9 = -3$

3) $x + 2.5 = 7$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '6', '4.5'],
        hint1: 'For equation 1: Subtract 15 from both sides. $x = 23 - 15$',
        hint2: 'For equation 2: Add 9 to both sides. $x = -3 + 9$',
        hint3: 'For equation 3: Subtract 2.5 from both sides. $x = 7 - 2.5$',
        explanation: '1) $x + 15 = 23 \\Rightarrow x = 23 - 15 = 8$. 2) $x - 9 = -3 \\Rightarrow x = -3 + 9 = 6$. 3) $x + 2.5 = 7 \\Rightarrow x = 7 - 2.5 = 4.5$.'
      }
    },
    {
      id: 'multiplication-division',
      type: 'text' as const,
      content: `
**Solving by Multiplication or Division** ✖️➗

When a variable is **multiplied** or **divided** by a number, we again use the inverse operation.

---

**Example 3:** Solve $4x = 28$

$x$ is multiplied by 4. To undo it, **divide both sides by 4**:

$$\\frac{4x}{4} = \\frac{28}{4}$$
$$x = 7$$

**Check:** $4(7) = 28$ ✓

---

**Example 4:** Solve $\\frac{x}{3} = -5$

$x$ is divided by 3. To undo it, **multiply both sides by 3**:

$$\\frac{x}{3} \\cdot 3 = -5 \\cdot 3$$
$$x = -15$$

**Check:** $\\frac{-15}{3} = -5$ ✓

---

**Example 5:** Solve $-6x = 42$

Same process — divide by $-6$:

$$\\frac{-6x}{-6} = \\frac{42}{-6}$$
$$x = -7$$

**Check:** $-6(-7) = 42$ ✓

**Watch the signs!** When you divide or multiply by a negative number, the sign of your answer changes.
      `
    },
    {
      id: 'mult-div-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Multiplication & Division Equations** 🧮

Solve each equation for $x$.

1) $7x = -49$

2) $\\frac{x}{5} = 12$

3) $-3x = 27$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-7', '60', '-9'],
        hint1: 'For equation 1: Divide both sides by 7. Be careful with the negative sign!',
        hint2: 'For equation 2: Multiply both sides by 5. $x = 12 \\times 5$',
        hint3: 'For equation 3: Divide both sides by $-3$. A positive divided by a negative is negative.',
        explanation: '1) $7x = -49 \\Rightarrow x = -49 \\div 7 = -7$. 2) $\\frac{x}{5} = 12 \\Rightarrow x = 12 \\times 5 = 60$. 3) $-3x = 27 \\Rightarrow x = 27 \\div (-3) = -9$.'
      }
    },
    {
      id: 'inverse-operations-concept',
      type: 'dropdown-select' as const,
      content: `
**Concept Check — Inverse Operations** 🔍

Match each equation with the correct first step to solve it.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve $x + 9 = 14$, you should:',
            options: ['Add 9 to both sides', 'Subtract 9 from both sides', 'Multiply both sides by 9', 'Divide both sides by 9'],
            correctIndex: 1,
            explanation: 'Since 9 is added to $x$, we subtract 9 from both sides to isolate $x$. Addition and subtraction are inverse operations.'
          },
          {
            label: 'To solve $\\frac{x}{8} = 3$, you should:',
            options: ['Divide both sides by 8', 'Add 8 to both sides', 'Multiply both sides by 8', 'Subtract 8 from both sides'],
            correctIndex: 2,
            explanation: 'Since $x$ is divided by 8, we multiply both sides by 8 to isolate $x$. Multiplication and division are inverse operations.'
          },
          {
            label: 'To solve $-5x = 30$, you should:',
            options: ['Add 5 to both sides', 'Multiply both sides by $-5$', 'Divide both sides by $-5$', 'Subtract 5 from both sides'],
            correctIndex: 2,
            explanation: 'Since $x$ is multiplied by $-5$, we divide both sides by $-5$ to isolate $x$. This gives $x = -6$.'
          }
        ]
      }
    },
    {
      id: 'common-mistakes',
      type: 'text' as const,
      content: `
**Common Mistakes to Avoid** ⚠️

**Mistake 1: Doing different operations to each side**

❌ $x + 5 = 12 \\Rightarrow x = 12 + 5 = 17$

✅ $x + 5 = 12 \\Rightarrow x = 12 - 5 = 7$

You need to **subtract** 5 (the inverse), not add it again!

---

**Mistake 2: Forgetting the negative sign**

❌ $-4x = 20 \\Rightarrow x = 5$

✅ $-4x = 20 \\Rightarrow x = \\frac{20}{-4} = -5$

When dividing by a negative, the answer is negative!

---

**Mistake 3: Not checking your answer**

Always plug your answer back in:
- If $x = -5$: Does $-4(-5) = 20$? → $20 = 20$ ✓
- This takes 5 seconds and catches many errors!

---

**Pro Tip:** After solving, ask yourself "Does this make sense?" If $x + 100 = 103$ and you got $x = 203$, something went wrong.
      `
    },
    {
      id: 'part1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Part 1 Exit Quiz — One-Step Equations** ✅

Solve each equation and select the correct answer.
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $x - 11 = -3$',
            options: [
              '$x = -14$',
              '$x = 8$',
              '$x = 14$',
              '$x = -8$'
            ],
            correctAnswer: 1,
            explanation: 'Add 11 to both sides: $x = -3 + 11 = 8$. Check: $8 - 11 = -3$ ✓'
          },
          {
            question: 'Solve: $-8x = -56$',
            options: [
              '$x = -7$',
              '$x = 7$',
              '$x = -48$',
              '$x = 448$'
            ],
            correctAnswer: 1,
            explanation: 'Divide both sides by $-8$: $x = \\frac{-56}{-8} = 7$. A negative divided by a negative is positive. Check: $-8(7) = -56$ ✓'
          },
          {
            question: 'Solve: $\\frac{x}{-4} = 9$',
            options: [
              '$x = -36$',
              '$x = 36$',
              '$x = -\\frac{4}{9}$',
              '$x = 13$'
            ],
            correctAnswer: 0,
            explanation: 'Multiply both sides by $-4$: $x = 9 \\times (-4) = -36$. Check: $\\frac{-36}{-4} = 9$ ✓'
          },
          {
            question: 'A student solves $x + 6 = 2$ and gets $x = 8$. What mistake did they make?',
            options: [
              'They multiplied instead of dividing',
              'They added 6 instead of subtracting 6',
              'They divided by 6 instead of subtracting 6',
              'They forgot to flip the sign'
            ],
            correctAnswer: 1,
            explanation: 'The student added 6 to 2 instead of subtracting. The correct solution: $x = 2 - 6 = -4$. Check: $-4 + 6 = 2$ ✓'
          }
        ]
      }
    },
    {
      id: 'part1-complete',
      type: 'text' as const,
      content: `
**Part 1 Complete!** 🎉

You've mastered one-step equations — the building blocks of algebra!

**Key Takeaways:**
- ✅ **Addition** undoes **subtraction** (and vice versa)
- ✅ **Multiplication** undoes **division** (and vice versa)
- ✅ Whatever you do to one side, do to the other
- ✅ Watch your negative signs — they're the #1 source of errors
- ✅ Always check your answer by plugging it back in

**Next Up: Part 2 — Two-Step Equations**

Now we'll combine these operations: equations like $3x + 5 = 20$ require TWO steps to solve. The order matters!
      `
    }
  ]
}
