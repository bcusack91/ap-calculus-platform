export const solvingLinearEquationsPart2Data = {
  topicSlug: 'solving-linear-equations-algebra1',
  sections: [
    {
      id: 'two-step-intro',
      type: 'text' as const,
      content: `
**Part 2: Two-Step Equations** 🔢

Now we level up! Two-step equations require — you guessed it — **two operations** to solve.

**The Big Idea:**
Most two-step equations look like this:

$$ax + b = c$$

where $a$, $b$, and $c$ are numbers. Your job is to find $x$.

**The Order of Operations (in Reverse!):**

When solving equations, you **undo operations in reverse order** — the opposite of PEMDAS:

1. **First:** Undo addition or subtraction (get the term with $x$ alone)
2. **Then:** Undo multiplication or division (isolate $x$ completely)

Think of it like getting dressed vs. getting undressed. You put your shoes on last, but take them off first! Similarly, the last operation applied to $x$ gets undone first.
      `
    },
    {
      id: 'two-step-example1',
      type: 'text' as const,
      content: `
**Example 1:** Solve $3x + 5 = 20$

**Step 1:** Undo the $+5$ (subtract 5 from both sides)

$$3x + 5 - 5 = 20 - 5$$
$$3x = 15$$

**Step 2:** Undo the $\\times 3$ (divide both sides by 3)

$$\\frac{3x}{3} = \\frac{15}{3}$$
$$x = 5$$

**Check:** $3(5) + 5 = 15 + 5 = 20$ ✓

---

**Example 2:** Solve $\\frac{x}{4} - 7 = 1$

**Step 1:** Undo the $-7$ (add 7 to both sides)

$$\\frac{x}{4} - 7 + 7 = 1 + 7$$
$$\\frac{x}{4} = 8$$

**Step 2:** Undo the $\\div 4$ (multiply both sides by 4)

$$\\frac{x}{4} \\cdot 4 = 8 \\cdot 4$$
$$x = 32$$

**Check:** $\\frac{32}{4} - 7 = 8 - 7 = 1$ ✓
      `
    },
    {
      id: 'two-step-order-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Order of Operations** 🎯

Understanding WHY we undo in reverse order is crucial for harder equations.
      `,
      exercise: {
        questions: [
          {
            question: 'To solve $5x - 3 = 22$, what should you do FIRST?',
            options: [
              'Divide both sides by 5',
              'Add 3 to both sides',
              'Subtract 22 from both sides',
              'Multiply both sides by 5'
            ],
            correctAnswer: 1,
            explanation: 'First undo the subtraction: add 3 to both sides to get $5x = 25$. Then divide by 5 to get $x = 5$. If you divided by 5 first, you\'d get $x - \\frac{3}{5} = \\frac{22}{5}$, which is messier!'
          },
          {
            question: 'A student solves $2x + 8 = 20$ by first dividing everything by 2, getting $x + 4 = 10$, then subtracting 4 to get $x = 6$. Is this correct?',
            options: [
              'No — you must always subtract first',
              'Yes — while not the standard method, dividing everything by 2 is valid and the answer is correct',
              'No — you cannot divide an equation by 2',
              'Yes — this is the only correct method'
            ],
            correctAnswer: 1,
            explanation: 'This is actually correct! While the standard approach is to subtract 8 first, dividing the entire equation by 2 is perfectly valid because you\'re doing the same operation to both sides. Check: $2(6) + 8 = 12 + 8 = 20$ ✓. The standard order just tends to produce simpler numbers along the way.'
          }
        ]
      }
    },
    {
      id: 'two-step-negatives',
      type: 'text' as const,
      content: `
**Two-Step Equations with Negatives** ⚠️

Negative coefficients are where most students make errors. Let's be extra careful here.

---

**Example 3:** Solve $-2x + 9 = 3$

**Step 1:** Subtract 9 from both sides

$$-2x + 9 - 9 = 3 - 9$$
$$-2x = -6$$

**Step 2:** Divide both sides by $-2$

$$\\frac{-2x}{-2} = \\frac{-6}{-2}$$
$$x = 3$$

**Check:** $-2(3) + 9 = -6 + 9 = 3$ ✓

---

**Example 4:** Solve $14 - 5x = -1$

**Be careful!** This is really $-5x + 14 = -1$.

**Step 1:** Subtract 14 from both sides

$$14 - 5x - 14 = -1 - 14$$
$$-5x = -15$$

**Step 2:** Divide both sides by $-5$

$$x = \\frac{-15}{-5} = 3$$

**Check:** $14 - 5(3) = 14 - 15 = -1$ ✓

**Remember:** $\\frac{\\text{negative}}{\\text{negative}} = \\text{positive}$
      `
    },
    {
      id: 'two-step-computation',
      type: 'input-boxes' as const,
      content: `
**Practice: Two-Step Equations** 🧮

Solve each equation for $x$. Enter just the number.

1) $4x + 3 = 31$

2) $\\frac{x}{6} - 2 = 5$

3) $-3x + 10 = -8$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '42', '6'],
        hint1: 'Equation 1: Subtract 3 from both sides first: $4x = 28$. Then divide by 4.',
        hint2: 'Equation 2: Add 2 to both sides first: $\\frac{x}{6} = 7$. Then multiply by 6.',
        hint3: 'Equation 3: Subtract 10 from both sides: $-3x = -18$. Then divide by $-3$. Remember: negative ÷ negative = positive.',
        explanation: '1) $4x + 3 = 31 \\Rightarrow 4x = 28 \\Rightarrow x = 7$. 2) $\\frac{x}{6} - 2 = 5 \\Rightarrow \\frac{x}{6} = 7 \\Rightarrow x = 42$. 3) $-3x + 10 = -8 \\Rightarrow -3x = -18 \\Rightarrow x = 6$.'
      }
    },
    {
      id: 'two-step-word-context',
      type: 'text' as const,
      content: `
**Setting Up Two-Step Equations** 📖

Real problems don't come pre-written as equations. You need to **translate** words into algebra.

**Key phrases to watch for:**

| English | Algebra |
|---------|---------|
| "more than" / "increased by" | $+ \\;$ |
| "less than" / "decreased by" | $- \\;$ |
| "times" / "of" / "per" | $\\times$ |
| "divided by" / "split among" | $\\div$ |
| "is" / "equals" / "the result is" | $=$ |

---

**Example 5:** A gym charges a \\$25 registration fee plus \\$40 per month. If you've paid \\$225 total, how many months have you been a member?

**Set up:** Let $m$ = number of months

$$40m + 25 = 225$$

**Solve:**
$$40m = 200$$
$$m = 5 \\text{ months}$$

**Check:** $40(5) + 25 = 200 + 25 = 225$ ✓
      `
    },
    {
      id: 'two-step-word-problems',
      type: 'multiple-choice' as const,
      content: `
**Word Problem Practice** 📝
      `,
      exercise: {
        questions: [
          {
            question: 'You buy 3 identical notebooks and a \\$2 pen. Your total is \\$17. Which equation represents the cost of one notebook ($n$)?',
            options: [
              '$3n - 2 = 17$',
              '$3n + 2 = 17$',
              '$2n + 3 = 17$',
              '$3(n + 2) = 17$'
            ],
            correctAnswer: 1,
            explanation: '3 notebooks at $n$ each = \\$3n$, plus a \\$2 pen means we add 2. Total is \\$17: \\$3n + 2 = 17$. Solving: \\$3n = 15$, so $n = 5$.'
          },
          {
            question: 'The temperature dropped 3°F per hour from an initial 68°F. After how many hours was it 50°F? Which equation is correct?',
            options: [
              '$68 + 3h = 50$',
              '$68 - 3h = 50$',
              '$3h - 68 = 50$',
              '$\\frac{68}{3h} = 50$'
            ],
            correctAnswer: 1,
            explanation: 'Starting at 68°F, losing 3°F per hour: $68 - 3h = 50$. Solving: $-3h = -18$, $h = 6$ hours. Check: $68 - 3(6) = 68 - 18 = 50$ ✓'
          },
          {
            question: 'Solve the temperature problem: $68 - 3h = 50$. What is $h$?',
            options: [
              '$h = 4$',
              '$h = 6$',
              '$h = 18$',
              '$h = -6$'
            ],
            correctAnswer: 1,
            explanation: '$68 - 3h = 50 \\Rightarrow -3h = 50 - 68 = -18 \\Rightarrow h = \\frac{-18}{-3} = 6$ hours.'
          }
        ]
      }
    },
    {
      id: 'part2-exit-quiz',
      type: 'input-boxes' as const,
      content: `
**Part 2 Exit Challenge** 🏆

Solve each equation. These are a step up from the earlier practice!

1) $-7x - 4 = 31$

2) $\\frac{x}{-3} + 8 = 2$

3) $15 - 2x = 27$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5', '18', '-6'],
        hint1: 'Equation 1: Add 4 to both sides: $-7x = 35$. Then divide by $-7$.',
        hint2: 'Equation 2: Subtract 8 from both sides: $\\frac{x}{-3} = -6$. Then multiply by $-3$.',
        hint3: 'Equation 3: Subtract 15 from both sides: $-2x = 12$. Then divide by $-2$.',
        explanation: '1) $-7x - 4 = 31 \\Rightarrow -7x = 35 \\Rightarrow x = -5$. 2) $\\frac{x}{-3} + 8 = 2 \\Rightarrow \\frac{x}{-3} = -6 \\Rightarrow x = (-6)(-3) = 18$. 3) $15 - 2x = 27 \\Rightarrow -2x = 12 \\Rightarrow x = -6$.'
      }
    },
    {
      id: 'part2-complete',
      type: 'text' as const,
      content: `
**Part 2 Complete!** 🎉

You can now solve two-step linear equations with confidence!

**Key Takeaways:**
- ✅ Undo addition/subtraction **first**, then multiplication/division
- ✅ Think "reverse PEMDAS" — undo operations in reverse order
- ✅ Be extra careful with negative coefficients
- ✅ Translate word problems into equations by identifying the variable and operations
- ✅ Always check by substituting back into the **original** equation

**Next Up: Part 3 — Multi-Step Equations & Variables on Both Sides**

Things get more interesting! You'll learn to simplify first, then solve — and handle equations where $x$ shows up on BOTH sides.
      `
    }
  ]
}
