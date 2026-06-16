import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Two-Step Equations (Grade 7 Math, CCSS 7.EE.B.4a).
 * Registry key / DB Topic.slug: 'two-step-equations-grade7'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 7:
 * inverse operations, undo-in-reverse-order, negatives & fractions, the "divide by
 * the coefficient" move, checking solutions, and translating real-world word problems
 * into two-step equations of the form px + q = r. LaTeX uses doubled backslashes
 * (template-literal strings). Every solution was solved AND checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'two-step-equations-grade7',
    sections: [
      {
        id: 'tse1-intro',
        type: 'text' as const,
        content: `# ⚖️ Two-Step Equations

**Part 1 of 5 — What "Undoing" Means**

---

### Topics in This Part

| Section |
|---------|
| What Is a Two-Step Equation? |
| Inverse Operations: Every Move Has an "Undo" |
| The Order of Operations, Run Backwards |

> 🔑 **Key Concept:** Solving an equation means getting the variable **all by itself** on one side. A *two-step* equation just means it takes **two undo-moves** to get there. Part 1 builds the one habit the whole lesson depends on: every operation has an opposite, and we undo them in **reverse order**.`,
      },
      {
        id: 'tse1-what',
        type: 'text' as const,
        content: `## What Is a Two-Step Equation?

A **one-step equation** is solved with a single move:

$$x + 5 = 12 \\quad\\Longrightarrow\\quad x = 7 \\quad(\\text{subtract } 5)$$

A **two-step equation** has the variable tangled up in **two operations**, so it takes two moves to free it. Most look like this:

$$2x + 3 = 11$$

Here $x$ is (1) **multiplied by 2** and then (2) **added to 3**. To solve it, we have to undo *both* — that is the "two steps."

> 💡 **Spotting them:** If you see a number stuck **next to** the variable (like the $2$ in $2x$) **and** a number being added or subtracted (like the $+3$), it's a two-step equation.`,
      },
      {
        id: 'tse1-inverse-table',
        type: 'text' as const,
        content: `## Inverse Operations: Every Move Has an "Undo"

To get rid of an operation, you do its **inverse** (its opposite) to **both sides** of the equation. Keeping both sides equal is the golden rule — an equation is a balanced scale ⚖️.

| Operation | Inverse (undo with...) |
|-----------|------------------------|
| Addition ($+$) | Subtraction ($-$) |
| Subtraction ($-$) | Addition ($+$) |
| Multiplication ($\\times$) | Division ($\\div$) |
| Division ($\\div$) | Multiplication ($\\times$) |

**Example (one step):** $x - 8 = 5$. The $8$ is subtracted, so we *add* $8$ to both sides:

$$x - 8 + 8 = 5 + 8 \\quad\\Longrightarrow\\quad x = 13$$

> ⚠️ **Both sides, every time.** Whatever you do to one side, you must do to the other — otherwise the scale tips and the equation is no longer true.`,
      },
      {
        id: 'tse1-inverse-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which operation undoes "divided by 4"?',
              options: ['Multiply by 4', 'Subtract 4', 'Add 4', 'Divide by 4 again'],
              correctAnswer: 0,
              explanation: 'Division is undone by multiplication. To cancel "$\\div 4$," you multiply by $4$.',
            },
            {
              question: 'To solve $x + 9 = 2$, what should you do to both sides?',
              options: ['Subtract 9', 'Add 9', 'Multiply by 9', 'Divide by 9'],
              correctAnswer: 0,
              explanation: 'The $9$ is being added, so undo it with subtraction: $x + 9 - 9 = 2 - 9$, giving $x = -7$.',
            },
          ],
        },
      },
      {
        id: 'tse1-reverse-order',
        type: 'text' as const,
        content: `## The Order of Operations, Run Backwards

Remember **PEMDAS** — the order you *build* an expression: multiply/divide **before** you add/subtract. To *take it apart*, you go in the **reverse** order.

Think of getting dressed: socks **then** shoes. To undo it, you take off **shoes first**, then socks. Same idea here.

So for a two-step equation, the rule is:

> 🔑 **The Golden Order:** Undo **addition and subtraction first**, then undo **multiplication and division**. (Reverse of PEMDAS.)

**Why?** In $2x + 3 = 11$, the expression was built by multiplying ($2x$) and *then* adding ($+3$). Undoing in reverse means we strip off the $+3$ first, then the $\\times 2$.`,
      },
      {
        id: 'tse1-order-drill',
        type: 'dropdown-select' as const,
        content: `**Plan the Moves** 🔽

For each equation, choose the operation you would undo **first**.`,
        exercise: {
          dropdowns: [
            { label: 'In $2x + 3 = 11$, undo first:', options: ['Subtract 3', 'Divide by 2', 'Add 3', 'Multiply by 2'] },
            { label: 'In $5x - 4 = 16$, undo first:', options: ['Add 4', 'Subtract 4', 'Divide by 5', 'Multiply by 5'] },
            { label: 'In $\\frac{x}{3} + 7 = 10$, undo first:', options: ['Subtract 7', 'Multiply by 3', 'Add 7', 'Divide by 3'] },
          ],
          correctAnswers: ['Subtract 3', 'Add 4', 'Subtract 7'],
          hint1: 'Undo addition/subtraction before multiplication/division — the reverse of PEMDAS.',
          hint2: 'Look for the number being added or subtracted (away from the variable) and undo it first.',
          hint3: 'In $2x+3$, the $+3$ is undone with $-3$. In $5x-4$, the $-4$ is undone with $+4$. In $\\frac{x}{3}+7$, the $+7$ is undone with $-7$.',
          explanation: 'Always peel off the added/subtracted number first, then deal with the multiply/divide that is stuck to the variable.',
        },
      },
      {
        id: 'tse1-onestep-bridge',
        type: 'text' as const,
        content: `## Warm-Up: One Move at a Time

Before we chain two moves together in Part 2, get comfortable with a **single** inverse. Each of these is just *one* undo away from solved.

- $x - 6 = 10$ → add $6$ → $x = 16$
- $\\dfrac{x}{2} = 9$ → multiply by $2$ → $x = 18$
- $4x = 20$ → divide by $4$ → $x = 5$

> 💡 A two-step equation is really just **two of these in a row**. Master one move, and two becomes easy.`,
      },
      {
        id: 'tse1-onestep-drill',
        type: 'input-boxes' as const,
        content: `**One-Step Warm-Up** 🧮

Solve each with a single inverse operation. Enter the value of $x$.

**1)** $x - 7 = 5,\\quad x = \\,?$
**2)** $3x = 18,\\quad x = \\,?$
**3)** $\\dfrac{x}{6} = 4,\\quad x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '6', '24'],
          hint1: 'Use the inverse: the opposite of $-7$ is $+7$; the opposite of $\\times 3$ is $\\div 3$.',
          hint2: '1) Add 7 to both sides. 2) Divide both sides by 3. 3) Multiply both sides by 6.',
          hint3: '1) $x = 5 + 7 = 12$. 2) $x = 18 \\div 3 = 6$. 3) $x = 4 \\cdot 6 = 24$.',
          explanation: '1) $x = 12$ (add 7). 2) $x = 6$ (divide by 3). 3) $x = 24$ (multiply by 6). Each is one inverse operation.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'two-step-equations-grade7',
    sections: [
      {
        id: 'tse2-intro',
        type: 'text' as const,
        content: `# ⚖️ Two-Step Equations

**Part 2 of 5 — The Core Method: $px + q = r$**

---

> 🔑 **The Plan, every time:**
> **Step 1.** Undo the **addition or subtraction** (the $+q$ or $-q$).
> **Step 2.** Undo the **multiplication or division** stuck to the variable.
> Two moves, same order, every problem.`,
      },
      {
        id: 'tse2-worked1',
        type: 'text' as const,
        content: `## Worked Example: $2x + 3 = 11$

**Step 1 — undo the $+3$.** Subtract $3$ from both sides:

$$2x + 3 - 3 = 11 - 3 \\quad\\Longrightarrow\\quad 2x = 8$$

**Step 2 — undo the $\\times 2$.** Divide both sides by $2$:

$$\\frac{2x}{2} = \\frac{8}{2} \\quad\\Longrightarrow\\quad x = 4$$

> ✅ **Check:** Put $x = 4$ back in: $2(4) + 3 = 8 + 3 = 11$ ✓ — it matches, so $x = 4$ is correct.`,
      },
      {
        id: 'tse2-worked2',
        type: 'text' as const,
        content: `## Worked Example: $5x - 7 = 18$

**Step 1 — undo the $-7$.** Add $7$ to both sides:

$$5x - 7 + 7 = 18 + 7 \\quad\\Longrightarrow\\quad 5x = 25$$

**Step 2 — undo the $\\times 5$.** Divide both sides by $5$:

$$\\frac{5x}{5} = \\frac{25}{5} \\quad\\Longrightarrow\\quad x = 5$$

> ✅ **Check:** $5(5) - 7 = 25 - 7 = 18$ ✓

> 💡 **Pattern:** Notice both problems followed the *exact* same two moves. Once the order is a habit, two-step equations become routine.`,
      },
      {
        id: 'tse2-mc-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You are solving $3x + 4 = 19$. After the correct first step, the equation becomes:',
              options: ['$3x = 15$', '$3x = 23$', '$x = 15$', '$7x = 19$'],
              correctAnswer: 0,
              explanation: 'Undo the $+4$ first: $3x + 4 - 4 = 19 - 4$, which gives $3x = 15$. (Then $x = 5$.)',
            },
            {
              question: 'Solve $4x - 5 = 23$.',
              options: ['$x = 7$', '$x = 4.5$', '$x = 8$', '$x = 28$'],
              correctAnswer: 0,
              explanation: 'Add 5: $4x = 28$. Divide by 4: $x = 7$. Check: $4(7) - 5 = 28 - 5 = 23$ ✓.',
            },
          ],
        },
      },
      {
        id: 'tse2-your-turn',
        type: 'text' as const,
        content: `## Your Turn — Same Two Moves

You've seen the pattern twice. Now drive it yourself on the next set. For every problem, say it out loud:

> "**Step 1:** undo the plus-or-minus. **Step 2:** divide by the number in front of $x$."

Keep your work in two short lines, and don't forget you can always **check** by substituting your answer back in.`,
      },
      {
        id: 'tse2-input-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each two-step equation for $x$. Use the two moves in order.

**1)** $2x + 9 = 21,\\quad x = \\,?$
**2)** $6x - 4 = 26,\\quad x = \\,?$
**3)** $3x + 7 = 7,\\quad x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '5', '0'],
          hint1: 'Step 1: undo the added/subtracted number. Step 2: divide by the number in front of $x$.',
          hint2: '1) Subtract 9: $2x = 12$, then divide by 2. 2) Add 4: $6x = 30$, then divide by 6.',
          hint3: '3) Subtract 7: $3x = 0$, then $x = 0 \\div 3 = 0$. Zero is a perfectly valid answer!',
          explanation: '1) $2x = 12 \\Rightarrow x = 6$. 2) $6x = 30 \\Rightarrow x = 5$. 3) $3x = 0 \\Rightarrow x = 0$. Each checks out when plugged back in.',
        },
      },
      {
        id: 'tse2-stepbystep',
        type: 'text' as const,
        content: `## See Every Step Laid Out

It helps to watch the two moves happen *one line at a time*. Here is $4x + 6 = 30$ with nothing skipped:

$$4x + 6 = 30$$
$$4x + 6 - 6 = 30 - 6 \\quad(\\text{Step 1: subtract } 6)$$
$$4x = 24$$
$$\\frac{4x}{4} = \\frac{24}{4} \\quad(\\text{Step 2: divide by } 4)$$
$$x = 6$$

> 💡 Writing the subtraction and division *on both sides* keeps the scale balanced and makes mistakes easy to spot. In the next check, you'll choose each step yourself.`,
      },
      {
        id: 'tse2-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Solution** 🔽

Solve $4x + 6 = 30$ by choosing what belongs at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — do this to both sides:', options: ['Subtract 6', 'Divide by 4', 'Add 6', 'Subtract 30'] },
            { label: 'The equation is now:', options: ['$4x = 24$', '$4x = 36$', '$4x = 30$', '$x = 24$'] },
            { label: 'Step 2 — do this to both sides:', options: ['Divide by 4', 'Subtract 4', 'Multiply by 4', 'Add 4'] },
            { label: 'The solution is:', options: ['$x = 6$', '$x = 9$', '$x = 24$', '$x = 5$'] },
          ],
          correctAnswers: ['Subtract 6', '$4x = 24$', 'Divide by 4', '$x = 6$'],
          hint1: 'Undo the $+6$ first, then undo the $\\times 4$.',
          hint2: '$30 - 6 = 24$, so after Step 1 you have $4x = 24$.',
          hint3: '$24 \\div 4 = 6$, so $x = 6$. Check: $4(6) + 6 = 24 + 6 = 30$ ✓.',
          explanation: 'Subtract 6 → $4x = 24$ → divide by 4 → $x = 6$. The check confirms it: $4(6)+6 = 30$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'two-step-equations-grade7',
    sections: [
      {
        id: 'tse3-intro',
        type: 'text' as const,
        content: `# ⚖️ Two-Step Equations

**Part 3 of 5 — Negatives, Division & Checking**

---

> 🔑 **Same method, trickier numbers.** Real Grade 7 problems involve **negative numbers**, a **variable being divided** (like $\\frac{x}{3}$), and sometimes answers that are **negative or fractions**. The two moves never change — we just have to handle signs carefully.`,
      },
      {
        id: 'tse3-negatives',
        type: 'text' as const,
        content: `## When Negatives Show Up

Signs trip up more students than anything else, so go slow and keep the sign **attached** to its number.

### Worked Example: $-3x + 5 = 14$

**Step 1 — undo the $+5$.** Subtract $5$:

$$-3x = 14 - 5 = 9$$

**Step 2 — undo the $\\times(-3)$.** Divide by $-3$:

$$x = \\frac{9}{-3} = -3$$

> ✅ **Check:** $-3(-3) + 5 = 9 + 5 = 14$ ✓ — remember, a negative times a negative is **positive**.

> ⚠️ **Watch the sign!** Dividing by a *negative* coefficient flips the sign of your answer. $9 \\div (-3) = -3$, not $+3$.`,
      },
      {
        id: 'tse3-neg-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $-2x + 1 = 9$.',
              options: ['$x = -4$', '$x = 4$', '$x = -5$', '$x = 5$'],
              correctAnswer: 0,
              explanation: 'Subtract 1: $-2x = 8$. Divide by $-2$: $x = 8 \\div (-2) = -4$. Check: $-2(-4) + 1 = 8 + 1 = 9$ ✓.',
            },
            {
              question: 'Solve $4x + 11 = 3$.',
              options: ['$x = -2$', '$x = 2$', '$x = -3.5$', '$x = 3.5$'],
              correctAnswer: 0,
              explanation: 'Subtract 11: $4x = 3 - 11 = -8$. Divide by 4: $x = -2$. Check: $4(-2) + 11 = -8 + 11 = 3$ ✓.',
            },
          ],
        },
      },
      {
        id: 'tse3-division',
        type: 'text' as const,
        content: `## When the Variable Is Divided

Sometimes the variable is **divided** by a number, like $\\dfrac{x}{4}$. Its inverse is **multiplication**, so Step 2 changes from "divide" to "multiply."

### Worked Example: $\\dfrac{x}{4} - 2 = 3$

**Step 1 — undo the $-2$.** Add $2$:

$$\\frac{x}{4} = 3 + 2 = 5$$

**Step 2 — undo the $\\div 4$.** Multiply both sides by $4$:

$$x = 5 \\cdot 4 = 20$$

> ✅ **Check:** $\\dfrac{20}{4} - 2 = 5 - 2 = 3$ ✓

> 💡 **Key swap:** If the variable is *divided*, you *multiply* in Step 2. If it is *multiplied*, you *divide*. The plan is the same; only the inverse changes.`,
      },
      {
        id: 'tse3-div-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve for $x$. Watch for division and negatives. Fractions like $-5/12$ and decimals are fine.

**1)** $\\dfrac{x}{5} + 6 = 10,\\quad x = \\,?$
**2)** $\\dfrac{x}{2} - 7 = -3,\\quad x = \\,?$
**3)** $-5x - 1 = 14,\\quad x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '8', '-3'],
          hint1: 'For a divided variable, Step 2 is to MULTIPLY (the inverse of dividing).',
          hint2: '1) Subtract 6: $\\frac{x}{5} = 4$, then multiply by 5. 2) Add 7: $\\frac{x}{2} = 4$, then multiply by 2.',
          hint3: '3) Add 1: $-5x = 15$, then divide by $-5$: $x = -3$.',
          explanation: '1) $\\frac{x}{5} = 4 \\Rightarrow x = 20$. 2) $\\frac{x}{2} = 4 \\Rightarrow x = 8$. 3) $-5x = 15 \\Rightarrow x = -3$. All three check.',
        },
      },
      {
        id: 'tse3-check-importance',
        type: 'text' as const,
        content: `## Always Check Your Answer

Checking is not optional — it's how you *prove* you're right and catch sign slips. **Substitute** your answer back into the **original** equation and confirm both sides match.

### Example: did we solve $\\dfrac{x}{3} + 4 = 6$ correctly with $x = 6$?

$$\\frac{6}{3} + 4 = 2 + 4 = 6 \\;?\\; \\text{...but the right side is } 6. \\;✓$$

Wait — that checks. But suppose a student got $x = 18$ instead:

$$\\frac{18}{3} + 4 = 6 + 4 = 10 \\ne 6 \\quad ✗$$

The check **catches the mistake** instantly. The correct answer is $x = 6$ (subtract 4 → $\\frac{x}{3} = 2$ → multiply by 3 → $x = 6$).

> 🔑 **Make checking a habit.** Thirty seconds of substitution saves you from a wrong answer you *felt* sure about.`,
      },
      {
        id: 'tse3-check-dropdown',
        type: 'dropdown-select' as const,
        content: `**Check the Work** 🔽

A student solved each equation. Use a check to decide if the answer is **correct** or **wrong**.`,
        exercise: {
          dropdowns: [
            { label: '$2x + 5 = 17$, student says $x = 6$:', options: ['Correct', 'Wrong'] },
            { label: '$3x - 4 = 11$, student says $x = 4$:', options: ['Correct', 'Wrong'] },
            { label: '$\\frac{x}{2} + 1 = 6$, student says $x = 10$:', options: ['Correct', 'Wrong'] },
          ],
          correctAnswers: ['Correct', 'Wrong', 'Correct'],
          hint1: 'Substitute the student\'s value into the original equation and see if both sides match.',
          hint2: 'Equation 1: $2(6)+5 = 17$ ✓. Equation 2: $3(4)-4 = 8$, but it should equal $11$.',
          hint3: 'Equation 3: $\\frac{10}{2}+1 = 5+1 = 6$ ✓. Equation 2 is the wrong one — the real answer is $x = 5$ since $3(5)-4 = 11$.',
          explanation: '1) $2(6)+5 = 12+5 = 17$ ✓ Correct. 2) $3(4)-4 = 12-4 = 8 \\ne 11$, so Wrong (the real answer is $x = 5$). 3) $\\frac{10}{2}+1 = 5+1 = 6$ ✓ Correct.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'two-step-equations-grade7',
    sections: [
      {
        id: 'tse4-intro',
        type: 'text' as const,
        content: `# ⚖️ Two-Step Equations

**Part 4 of 5 — Real-World Word Problems**

---

> 🔑 **The real skill:** turning a sentence into an equation. Most two-step word problems follow the pattern **"a starting/fixed amount, plus a rate times an unknown."** That's exactly $px + q = r$ — a perfect two-step equation.`,
      },
      {
        id: 'tse4-translate',
        type: 'text' as const,
        content: `## Translating Words into $px + q = r$

Look for **three roles** in the story:

| Role | What it is | Example phrase |
|------|-----------|----------------|
| $q$ (constant) | a one-time or fixed amount | "a \\$5 flat fee," "started with 12" |
| $p$ (rate / coefficient) | an amount **per** something | "\\$3 each," "2 points per question" |
| $r$ (total) | the final result | "in all," "altogether," "the total was" |

The variable $x$ is the **unknown count** — how many, how long, how much.

### Example sentence
*"A taxi charges a \\$4 flat fee plus \\$2 per mile. The total ride cost \\$16. How many miles was it?"*

- Flat fee $q = 4$, rate $p = 2$, total $r = 16$, miles $= x$.

$$2x + 4 = 16$$`,
      },
      {
        id: 'tse4-setup-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A gym charges a \\$20 sign-up fee plus \\$15 per month. After some months, Mia paid \\$95 in all. Which equation finds the number of months $m$?',
              options: ['$15m + 20 = 95$', '$20m + 15 = 95$', '$15m - 20 = 95$', '$35m = 95$'],
              correctAnswer: 0,
              explanation: 'The \\$15 is per month (the rate on $m$), and \\$20 is the one-time fee (the constant). Total is \\$95: $15m + 20 = 95$.',
            },
            {
              question: 'Carlos had some stickers, then bought 3 packs of 8 stickers each, ending with 38. Which equation finds his starting amount $s$?',
              options: ['$s + 24 = 38$', '$8s + 3 = 38$', '$3s + 8 = 38$', '$24s = 38$'],
              correctAnswer: 0,
              explanation: '3 packs of 8 is $3 \\times 8 = 24$ new stickers added to his starting amount $s$, ending at 38: $s + 24 = 38$ (so $s = 14$).',
            },
          ],
        },
      },
      {
        id: 'tse4-worked',
        type: 'text' as const,
        content: `## Worked Example: The Taxi Problem

*"A taxi charges a \\$4 flat fee plus \\$2 per mile. The ride cost \\$16. How many miles?"*

**Set up:** $2x + 4 = 16$

**Step 1 — undo the $+4$:**
$$2x = 16 - 4 = 12$$

**Step 2 — undo the $\\times 2$:**
$$x = \\frac{12}{2} = 6$$

**Answer:** the ride was **6 miles**.

> ✅ **Check in context:** $2(6) + 4 = 12 + 4 = 16$ dollars ✓. Always ask: *does this answer make sense?* Six miles for a \\$16 taxi ride is reasonable. 👍

> 💡 **Label your answer** with units (miles, dollars, months). A naked number "6" is incomplete in a word problem — "6 miles" tells the whole story.`,
      },
      {
        id: 'tse4-word-input',
        type: 'input-boxes' as const,
        content: `**Word-Problem Practice** 🧮

Set up a two-step equation and solve. Enter only the number.

**1)** A pizza costs \\$3 per topping plus a \\$8 base price. A pizza cost \\$20. How many **toppings**?
**2)** Jordan saved \\$50, then added \\$25 each week. Now she has \\$200. How many **weeks**?
**3)** A printer prints a 2-page cover, then 4 pages per chapter, for 30 pages total. How many **chapters**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '6', '7'],
          hint1: 'Write it as (rate)$\\times x$ + (fixed amount) = total, then solve in two steps.',
          hint2: '1) $3x + 8 = 20$. 2) $25x + 50 = 200$. 3) $4x + 2 = 30$.',
          hint3: '1) $3x = 12 \\Rightarrow x = 4$. 2) $25x = 150 \\Rightarrow x = 6$. 3) $4x = 28 \\Rightarrow x = 7$.',
          explanation: '1) $3x+8=20 \\Rightarrow x = 4$ toppings. 2) $25x+50=200 \\Rightarrow x = 6$ weeks. 3) $4x+2=30 \\Rightarrow x = 7$ chapters. Each checks back to the total.',
        },
      },
      {
        id: 'tse4-watch-words',
        type: 'text' as const,
        content: `## Watch the Signal Words

The wording tells you which number is the **rate** and which is the **constant**:

| Phrase | Meaning |
|--------|---------|
| "per," "each," "every" | a **rate** — it multiplies the variable ($p$) |
| "flat fee," "sign-up," "base price," "started with" | a one-time **constant** ($q$) |
| "in all," "total," "altogether" | the **result** ($r$) |

> ⚠️ **Don't mix them up.** A "\\$3 fee plus \\$2 per item" becomes $2x + 3$ — the *per-item* \\$2 multiplies $x$, while the one-time \\$3 is added on. Swapping them ($3x + 2$) gives a different, wrong equation.`,
      },
      {
        id: 'tse4-translate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Story to the Equation** 🔽

*"A delivery service charges a \\$6 fee plus \\$3 per item. The bill was \\$27 for $n$ items."*`,
        exercise: {
          dropdowns: [
            { label: 'The constant $q$ (fixed fee) is:', options: ['6', '3', '27', '$n$'] },
            { label: 'The rate $p$ (per item) is:', options: ['3', '6', '27', '$n$'] },
            { label: 'The equation is:', options: ['$3n + 6 = 27$', '$6n + 3 = 27$', '$3n - 6 = 27$', '$9n = 27$'] },
            { label: 'The number of items $n$ is:', options: ['7', '9', '3', '11'] },
          ],
          correctAnswers: ['6', '3', '$3n + 6 = 27$', '7'],
          hint1: 'The fee is charged once (constant); the \\$3 is charged per item (rate on $n$).',
          hint2: 'Fixed fee $= 6$, rate $= 3$, total $= 27$, so $3n + 6 = 27$.',
          hint3: '$3n + 6 = 27 \\Rightarrow 3n = 21 \\Rightarrow n = 7$. Check: $3(7)+6 = 21+6 = 27$ ✓.',
          explanation: 'Fixed fee is the constant (6), per-item cost is the rate (3): $3n + 6 = 27 \\Rightarrow n = 7$ items.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'two-step-equations-grade7',
    sections: [
      {
        id: 'tse5-intro',
        type: 'text' as const,
        content: `# ⚖️ Two-Step Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) spot a two-step equation, (2) undo it in the right order, (3) handle negatives and division, and (4) build an equation from a word problem. Let's put it all together and finish with an Exit Quiz.`,
      },
      {
        id: 'tse5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Undo $+q$ or $-q$ | do the opposite to both sides (Step 1) |
| Undo $\\times p$ | divide both sides by $p$ (Step 2) |
| Undo $\\div p$ | multiply both sides by $p$ (Step 2) |
| Negative coefficient | dividing by a negative flips the sign of the answer |
| Word problem | write $px + q = r$, then solve in two steps |
| Be sure you're right | substitute back into the **original** equation |

> ⚠️ **Two classics to avoid:** (1) dividing **before** you subtract — always undo $+/-$ first; (2) losing a negative sign — keep the sign glued to its number, and check by substituting.`,
      },
      {
        id: 'tse5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Solve for $x$. Mix of multiply, divide, and negatives.

**1)** $7x - 9 = 33,\\quad x = \\,?$
**2)** $\\dfrac{x}{3} + 5 = 1,\\quad x = \\,?$
**3)** $-4x + 10 = 2,\\quad x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '-12', '2'],
          hint1: 'Step 1: undo the added/subtracted number. Step 2: undo what is attached to $x$.',
          hint2: '1) Add 9: $7x = 42$. 2) Subtract 5: $\\frac{x}{3} = -4$, then multiply by 3.',
          hint3: '3) Subtract 10: $-4x = -8$, then divide by $-4$: $x = 2$ (negative ÷ negative = positive).',
          explanation: '1) $7x = 42 \\Rightarrow x = 6$. 2) $\\frac{x}{3} = -4 \\Rightarrow x = -12$. 3) $-4x = -8 \\Rightarrow x = 2$. All three check in the original equations.',
        },
      },
      {
        id: 'tse5-mistakes',
        type: 'text' as const,
        content: `## The Three Mistakes That Cost Points

When students miss two-step equations, it's almost always one of these:

1. **Wrong order** — dividing *before* subtracting. Undo $+/-$ **first**.
2. **A dropped sign** — turning $-4x = -8$ into $x = -2$ instead of $x = 2$. Keep the sign with its number.
3. **No check** — being "pretty sure" instead of *certain*. Substitute back, every time.

The next set mixes pure equations with one word problem — exactly what a test looks like.

> 🔑 If you slow down on the order and the signs, two-step equations become some of the most reliable points you can earn.`,
      },
      {
        id: 'tse5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A coach buys a \\$12 team banner plus \\$8 per jersey, spending \\$76 total. How many jerseys?',
              options: ['8', '9', '7', '11'],
              correctAnswer: 0,
              explanation: '$8x + 12 = 76 \\Rightarrow 8x = 64 \\Rightarrow x = 8$ jerseys. Check: $8(8) + 12 = 64 + 12 = 76$ ✓.',
            },
            {
              question: 'Which is the correct FIRST step to solve $\\frac{x}{6} - 3 = 1$?',
              options: ['Add 3 to both sides', 'Multiply both sides by 6', 'Subtract 1 from both sides', 'Divide both sides by 6'],
              correctAnswer: 0,
              explanation: 'Undo the $-3$ first: add 3 to get $\\frac{x}{6} = 4$. Then multiply by 6 to get $x = 24$.',
            },
          ],
        },
      },
      {
        id: 'tse5-quiz-intro',
        type: 'text' as const,
        content: `## You're Ready 🎓

Three skills, all in one place: undo in the right **order**, mind the **signs**, and **translate** a story into $px + q = r$. The Exit Quiz below has one of each — a plain equation, a negative, and a word problem.

> 💡 Take your time, do both steps, and *check* each answer before you move on.`,
      },
      {
        id: 'tse5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $3x + 8 = 23$.',
              options: ['$x = 5$', '$x = 7$', '$x = 9$', '$x = 4$'],
              correctAnswer: 0,
              explanation: 'Subtract 8: $3x = 15$. Divide by 3: $x = 5$. Check: $3(5) + 8 = 15 + 8 = 23$ ✓.',
            },
            {
              question: 'Solve $-2x + 6 = 14$.',
              options: ['$x = -4$', '$x = 4$', '$x = -10$', '$x = 10$'],
              correctAnswer: 0,
              explanation: 'Subtract 6: $-2x = 8$. Divide by $-2$: $x = -4$. Check: $-2(-4) + 6 = 8 + 6 = 14$ ✓.',
            },
            {
              question: 'A book club has a \\$10 joining fee plus \\$4 per book. Lena paid \\$30 in all. How many books did she get?',
              options: ['5 books', '4 books', '6 books', '8 books'],
              correctAnswer: 0,
              explanation: '$4x + 10 = 30 \\Rightarrow 4x = 20 \\Rightarrow x = 5$ books. Check: $4(5) + 10 = 20 + 10 = 30$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
