import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving One-Step Equations (Grade 6 Math).
 * Registry key / DB slug: 'one-step-equations-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'one-step-equations-grade6',
    sections: [
      {
        id: 'ose1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 1 of 5 — The Balance Idea & Inverse Operations**

---

### Topics in This Part

| Section |
|---------|
| What Is an Equation? |
| The Balance Scale |
| Inverse Operations |

> 🔑 **Key Concept:** An equation is a **balance**. Whatever you do to one side, you must do to the *other* side to keep it balanced. Solving means getting the variable **alone** on one side.`,
      },
      {
        id: 'ose1-what',
        type: 'text' as const,
        content: `## What Is an Equation?

An **equation** is a math sentence that says two things are equal. It always has an **equals sign** ($=$).

$$x + 4 = 9$$

The letter $x$ is the **variable** — it stands for a number we don't know yet. **Solving** the equation means finding the value of the variable that makes the sentence true.

| Equation | Question it asks | Solution |
|----------|------------------|----------|
| $x + 4 = 9$ | "What plus 4 is 9?" | $x = 5$ |
| $n - 3 = 10$ | "What minus 3 is 10?" | $n = 13$ |
| $6y = 24$ | "6 times what is 24?" | $y = 4$ |

> 💡 **One-step** equations need just **one** move to solve. That single move always *undoes* whatever is happening to the variable.`,
      },
      {
        id: 'ose1-isequation',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an equation?',
              options: ['$x + 7$', '$3x - 5 = 11$', '$8 + 2 + 6$', '$y - 4$'],
              correctAnswer: 1,
              explanation: 'An equation must have an equals sign ($=$). Only $3x - 5 = 11$ has one. The others are just expressions.',
            },
            {
              question: 'In the equation $m - 6 = 2$, what is the variable?',
              options: ['$6$', '$2$', '$m$', '$=$'],
              correctAnswer: 2,
              explanation: 'The variable is the letter standing for the unknown number — here that is $m$.',
            },
          ],
        },
      },
      {
        id: 'ose1-balance',
        type: 'text' as const,
        content: `## The Balance Scale

Picture an equation as a **balance scale**. The $=$ sign is the middle, and both sides weigh the same.

$$\\underbrace{x + 4}_{\\text{left pan}} \\;=\\; \\underbrace{9}_{\\text{right pan}}$$

> ⚖️ **The Golden Rule:** Whatever you do to one side, do the **exact same thing** to the other side. This keeps the scale balanced.

If you take 4 away from the left pan, you must take 4 away from the right pan too:

$$x + 4 - 4 = 9 - 4 \\;\\Rightarrow\\; x = 5$$

The scale stays level, and now $x$ sits alone. We **solved** it.`,
      },
      {
        id: 'ose1-tryone',
        type: 'input-boxes' as const,
        content: `**Try One** 🧮

Use the balance idea on $x + 4 = 9$. Take $4$ away from **both** sides.

**1)** $9 - 4 = \\,?$  *(the right pan after removing 4)*
**2)** So $x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '5'],
          hint1: 'Removing $4$ from the right pan: $9 - 4 = 5$.',
          hint2: 'The left pan becomes just $x$, and the right pan becomes $5$, so $x = 5$.',
          hint3: 'Both answers are the same here: the right side equals $5$, and that is the value of $x$.',
          explanation: '$x + 4 - 4 = 9 - 4 \\Rightarrow x = 5$. Removing the same amount from both pans keeps the scale balanced.',
        },
      },
      {
        id: 'ose1-inverse',
        type: 'text' as const,
        content: `## Inverse Operations

To get the variable alone, you **undo** the operation attached to it. The undo move is called an **inverse operation** — every operation has an opposite.

| Operation | Inverse (undo it with) |
|-----------|------------------------|
| Addition $(+)$ | Subtraction $(-)$ |
| Subtraction $(-)$ | Addition $(+)$ |
| Multiplication $(\\times)$ | Division $(\\div)$ |
| Division $(\\div)$ | Multiplication $(\\times)$ |

**Examples:**
- $x + 4 = 9$ → the variable is being **added** to, so **subtract** $4$.
- $6y = 24$ → the variable is being **multiplied**, so **divide** by $6$.

> 🔑 **The plan for every one-step equation:** find the operation on the variable, then do its **inverse** to *both sides*.`,
      },
      {
        id: 'ose1-matchinverse',
        type: 'dropdown-select' as const,
        content: `**Pick the Inverse** 🔽

For each equation, choose the operation you'd use to get the variable alone.`,
        exercise: {
          dropdowns: [
            { label: '$x + 8 = 15$ → undo with:', options: ['Subtract 8', 'Add 8', 'Divide by 8', 'Multiply by 8'] },
            { label: '$x - 5 = 12$ → undo with:', options: ['Add 5', 'Subtract 5', 'Divide by 5', 'Multiply by 5'] },
            { label: '$7x = 28$ → undo with:', options: ['Divide by 7', 'Multiply by 7', 'Subtract 7', 'Add 7'] },
            { label: '$\\dfrac{x}{3} = 6$ → undo with:', options: ['Multiply by 3', 'Divide by 3', 'Subtract 3', 'Add 3'] },
          ],
          correctAnswers: ['Subtract 8', 'Add 5', 'Divide by 7', 'Multiply by 3'],
          hint1: 'The inverse of addition is subtraction, and the inverse of subtraction is addition.',
          hint2: 'The inverse of multiplication is division, and the inverse of division is multiplication.',
          hint3: 'Look at what is happening TO the variable, then do the opposite to both sides.',
          explanation: 'Add 8 → subtract 8. Subtract 5 → add 5. Times 7 → divide by 7. Divided by 3 → multiply by 3.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'one-step-equations-grade6',
    sections: [
      {
        id: 'ose2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 2 of 5 — Addition & Subtraction Equations**

---

> 🔑 **The Idea:** When a number is **added** to the variable, subtract it from both sides. When a number is **subtracted**, add it to both sides.`,
      },
      {
        id: 'ose2-addition',
        type: 'text' as const,
        content: `## Equations with Addition

When the variable has a number **added** to it, **subtract** that number from both sides.

### Worked Example: $x + 7 = 12$

The variable has $+7$ attached, so subtract $7$ from both sides:

$$x + 7 - 7 = 12 - 7$$
$$x = 5$$

> ✅ **Check:** Put $5$ back in: $5 + 7 = 12$ ✓ True! So $x = 5$ is correct.`,
      },
      {
        id: 'ose2-subtraction',
        type: 'text' as const,
        content: `## Equations with Subtraction

When a number is **subtracted** from the variable, **add** that number to both sides.

### Worked Example: $n - 4 = 10$

The variable has $-4$ attached, so add $4$ to both sides:

$$n - 4 + 4 = 10 + 4$$
$$n = 14$$

> ✅ **Check:** $14 - 4 = 10$ ✓

### Worked Example: $y - 9 = 3$

$$y - 9 + 9 = 3 + 9 \\;\\Rightarrow\\; y = 12$$

> 💡 Notice the pattern: subtraction in the equation is undone with **addition**. Always do the *opposite*.`,
      },
      {
        id: 'ose2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $x + 6 = 20$, what should you do to both sides?',
              options: ['Subtract 6', 'Add 6', 'Divide by 6', 'Multiply by 6'],
              correctAnswer: 0,
              explanation: 'The $+6$ is attached to $x$, so subtract $6$ from both sides: $x = 20 - 6 = 14$.',
            },
            {
              question: 'Solve $n - 8 = 5$.',
              options: ['$n = 13$', '$n = -3$', '$n = 3$', '$n = 40$'],
              correctAnswer: 0,
              explanation: 'Add $8$ to both sides: $n = 5 + 8 = 13$. Check: $13 - 8 = 5$ ✓',
            },
          ],
        },
      },
      {
        id: 'ose2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each equation for the variable. Enter just the number.

**1)** $x + 9 = 16,\\quad x = \\,?$
**2)** $n - 5 = 11,\\quad n = \\,?$
**3)** $y + 13 = 13,\\quad y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '16', '0'],
          hint1: 'For $x + 9 = 16$, subtract $9$: $x = 16 - 9 = 7$.',
          hint2: 'For $n - 5 = 11$, add $5$: $n = 11 + 5 = 16$.',
          hint3: 'For $y + 13 = 13$, subtract $13$: $y = 13 - 13 = 0$. Zero is a perfectly good answer!',
          explanation: '1) $x = 7$.  2) $n = 16$.  3) $y = 0$. Each time, do the inverse to both sides.',
        },
      },
      {
        id: 'ose2-which',
        type: 'dropdown-select' as const,
        content: `**Choose the First Move** 🔽

Pick the correct first step and the solution for each equation.`,
        exercise: {
          dropdowns: [
            { label: 'For $x + 15 = 40$, first:', options: ['Subtract 15 from both sides', 'Add 15 to both sides', 'Divide both sides by 15'] },
            { label: '...so $x =$', options: ['$25$', '$55$', '$15$'] },
            { label: 'For $m - 7 = 2$, first:', options: ['Add 7 to both sides', 'Subtract 7 from both sides', 'Multiply both sides by 7'] },
            { label: '...so $m =$', options: ['$9$', '$5$', '$-5$'] },
          ],
          correctAnswers: ['Subtract 15 from both sides', '$25$', 'Add 7 to both sides', '$9$'],
          hint1: 'Undo addition with subtraction; undo subtraction with addition.',
          hint2: '$x + 15 = 40 \\Rightarrow x = 40 - 15 = 25$.',
          hint3: '$m - 7 = 2 \\Rightarrow m = 2 + 7 = 9$.',
          explanation: '$x + 15 = 40$: subtract 15 → $x = 25$. $m - 7 = 2$: add 7 → $m = 9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'one-step-equations-grade6',
    sections: [
      {
        id: 'ose3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 3 of 5 — Multiplication & Division Equations**

---

> 🔑 **The Idea:** When the variable is **multiplied** by a number, divide both sides by it. When the variable is **divided**, multiply both sides by it.`,
      },
      {
        id: 'ose3-mult',
        type: 'text' as const,
        content: `## Equations with Multiplication

$6y = 24$ means "$6$ times $y$." A number written right next to a variable means **multiply**.

To undo multiplication, **divide** both sides by that number.

### Worked Example: $6y = 24$

$$\\frac{6y}{6} = \\frac{24}{6}$$
$$y = 4$$

> ✅ **Check:** $6 \\times 4 = 24$ ✓

### Worked Example: $5x = 35$

$$\\frac{5x}{5} = \\frac{35}{5} \\;\\Rightarrow\\; x = 7$$

> ⚠️ **Watch out:** $6y$ does **not** mean "$6$ plus $y$." It means "$6$ times $y$," so you **divide** to undo it — never subtract.`,
      },
      {
        id: 'ose3-div',
        type: 'text' as const,
        content: `## Equations with Division

$\\dfrac{x}{3} = 5$ means "$x$ divided by $3$." To undo division, **multiply** both sides by that number.

### Worked Example: $\\dfrac{x}{3} = 5$

$$\\frac{x}{3} \\times 3 = 5 \\times 3$$
$$x = 15$$

> ✅ **Check:** $\\dfrac{15}{3} = 5$ ✓

### Worked Example: $\\dfrac{m}{4} = 8$

$$\\frac{m}{4} \\times 4 = 8 \\times 4 \\;\\Rightarrow\\; m = 32$$

> 💡 Multiplication and division are opposites, just like addition and subtraction. Spot the operation, then do its inverse.`,
      },
      {
        id: 'ose3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $8x = 56$, what should you do to both sides?',
              options: ['Divide by 8', 'Multiply by 8', 'Subtract 8', 'Add 8'],
              correctAnswer: 0,
              explanation: '$8x$ means $8$ times $x$. Undo multiplication by dividing: $x = 56 \\div 8 = 7$.',
            },
            {
              question: 'Solve $\\dfrac{n}{6} = 9$.',
              options: ['$n = 54$', '$n = 15$', '$n = 1.5$', '$n = 3$'],
              correctAnswer: 0,
              explanation: 'Multiply both sides by $6$: $n = 9 \\times 6 = 54$. Check: $54 \\div 6 = 9$ ✓',
            },
          ],
        },
      },
      {
        id: 'ose3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Move** 🔽

Choose how to undo each equation, then the solution.`,
        exercise: {
          dropdowns: [
            { label: 'For $9x = 45$, undo with:', options: ['Divide both sides by 9', 'Multiply both sides by 9', 'Subtract 9'] },
            { label: '...so $x =$', options: ['$5$', '$54$', '$36$'] },
            { label: 'For $\\dfrac{y}{2} = 7$, undo with:', options: ['Multiply both sides by 2', 'Divide both sides by 2', 'Add 2'] },
            { label: '...so $y =$', options: ['$14$', '$3.5$', '$9$'] },
          ],
          correctAnswers: ['Divide both sides by 9', '$5$', 'Multiply both sides by 2', '$14$'],
          hint1: 'Undo multiplication with division; undo division with multiplication.',
          hint2: '$9x = 45 \\Rightarrow x = 45 \\div 9 = 5$.',
          hint3: '$\\dfrac{y}{2} = 7 \\Rightarrow y = 7 \\times 2 = 14$.',
          explanation: '$9x = 45$: divide by 9 → $x = 5$. $\\dfrac{y}{2} = 7$: multiply by 2 → $y = 14$.',
        },
      },
      {
        id: 'ose3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each equation. Enter just the number.

**1)** $7x = 42,\\quad x = \\,?$
**2)** $\\dfrac{n}{5} = 6,\\quad n = \\,?$
**3)** $3y = 27,\\quad y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '30', '9'],
          hint1: 'For $7x = 42$, divide by $7$: $x = 42 \\div 7 = 6$.',
          hint2: 'For $\\dfrac{n}{5} = 6$, multiply by $5$: $n = 6 \\times 5 = 30$.',
          hint3: 'For $3y = 27$, divide by $3$: $y = 27 \\div 3 = 9$.',
          explanation: '1) $x = 6$.  2) $n = 30$.  3) $y = 9$. Multiplication is undone by division, and vice versa.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'one-step-equations-grade6',
    sections: [
      {
        id: 'ose4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 4 of 5 — Checking Answers & Word Problems**

---

> 🔑 **Big Skill:** Every solution can be **checked** by substituting it back in. And many real-life problems become one-step equations once you translate the words into math.`,
      },
      {
        id: 'ose4-check',
        type: 'text' as const,
        content: `## Always Check Your Answer

To check, **substitute** your answer back into the *original* equation. If both sides are equal, you're right.

### Example: Solve and check $x + 12 = 20$

$$x = 20 - 12 = 8$$

**Check:** replace $x$ with $8$:
$$8 + 12 = 20 \\;\\checkmark$$

Both sides equal $20$, so $x = 8$ is correct.

> ⚠️ Checking catches mistakes! If your answer makes the two sides **unequal**, you used the wrong inverse — go back and try again.`,
      },
      {
        id: 'ose4-checkquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student says the solution to $4x = 20$ is $x = 16$. Checking, $4 \\times 16 = 64$, not $20$. What went wrong?',
              options: [
                'They subtracted 4 instead of dividing by 4',
                'They divided correctly; $x = 16$ is right',
                'The equation has no solution',
                'They should have added 4',
              ],
              correctAnswer: 0,
              explanation: 'They subtracted $4$ ($20 - 4 = 16$) instead of dividing by $4$. The correct step is $20 \\div 4 = 5$, so $x = 5$.',
            },
            {
              question: 'Which value of $x$ makes $x - 7 = 9$ a true statement?',
              options: ['$x = 16$', '$x = 2$', '$x = 63$', '$x = -2$'],
              correctAnswer: 0,
              explanation: 'Add $7$: $x = 9 + 7 = 16$. Check: $16 - 7 = 9$ ✓',
            },
          ],
        },
      },
      {
        id: 'ose4-translate',
        type: 'text' as const,
        content: `## Turning Words into Equations

Word problems hide a one-step equation. Watch for these phrases:

| Words | Operation |
|-------|-----------|
| "sum," "more than," "increased by," "total" | $+$ |
| "difference," "less than," "decreased by," "fewer" | $-$ |
| "product," "times," "twice," "of" | $\\times$ |
| "quotient," "split equally," "per," "each" | $\\div$ |

### Example

> *"Maya had some stickers. After she got $6$ more, she had $15$. How many did she start with?"*

Let $s$ = the starting number. "Got $6$ more" means $+6$, "had $15$" means $= 15$:

$$s + 6 = 15 \\;\\Rightarrow\\; s = 15 - 6 = 9$$

Maya started with **$9$ stickers**.`,
      },
      {
        id: 'ose4-worddrill',
        type: 'input-boxes' as const,
        content: `**Word Problems** 🧮

Write a one-step equation in your head, then enter the answer (just the number).

**1)** A number times $4$ equals $32$. What is the number?
**2)** After spending \\$8, Liam had \\$5 left. How much did he have at first? (dollars)
**3)** A rope is split into $3$ equal pieces, each $7$ ft long. How long was the rope? (ft)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '13', '21'],
          hint1: '"Times $4$ equals $32$" → $4x = 32 \\Rightarrow x = 32 \\div 4 = 8$.',
          hint2: '"Spent $8$, had $5$ left" → $x - 8 = 5 \\Rightarrow x = 5 + 8 = 13$.',
          hint3: '"Split into $3$ pieces of $7$" → $\\dfrac{x}{3} = 7 \\Rightarrow x = 7 \\times 3 = 21$.',
          explanation: '1) $4x = 32 \\Rightarrow x = 8$.  2) $x - 8 = 5 \\Rightarrow x = 13$.  3) $\\dfrac{x}{3} = 7 \\Rightarrow x = 21$.',
        },
      },
      {
        id: 'ose4-setup',
        type: 'dropdown-select' as const,
        content: `**Set Up the Equation** 🔽

Match each story to the correct one-step equation (let $n$ be the unknown).`,
        exercise: {
          dropdowns: [
            { label: '"$8$ more than a number is $20$":', options: ['$n + 8 = 20$', '$n - 8 = 20$', '$8n = 20$', '$\\dfrac{n}{8} = 20$'] },
            { label: '"A number divided by $4$ is $6$":', options: ['$\\dfrac{n}{4} = 6$', '$4n = 6$', '$n - 4 = 6$', '$n + 4 = 6$'] },
            { label: '"Twice a number is $18$":', options: ['$2n = 18$', '$n + 2 = 18$', '$\\dfrac{n}{2} = 18$', '$n - 2 = 18$'] },
          ],
          correctAnswers: ['$n + 8 = 20$', '$\\dfrac{n}{4} = 6$', '$2n = 18$'],
          hint1: '"More than" means add; "divided by" means a fraction; "twice" means times $2$.',
          hint2: '"$8$ more than a number" → start with $n$ and add $8$: $n + 8$.',
          hint3: '"Twice a number" means $2 \\times n = 2n$.',
          explanation: '"$8$ more than" → $n + 8 = 20$. "Divided by $4$" → $\\dfrac{n}{4} = 6$. "Twice" → $2n = 18$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'one-step-equations-grade6',
    sections: [
      {
        id: 'ose5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now solve one-step equations with **all four operations**, **check** your answers, and **translate** word problems. Let's put it all together.`,
      },
      {
        id: 'ose5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| If the equation has... | ...solve by | Example |
|------------------------|-------------|---------|
| $x + a = b$ | subtract $a$ | $x + 4 = 9 \\Rightarrow x = 5$ |
| $x - a = b$ | add $a$ | $x - 4 = 9 \\Rightarrow x = 13$ |
| $ax = b$ | divide by $a$ | $4x = 20 \\Rightarrow x = 5$ |
| $\\dfrac{x}{a} = b$ | multiply by $a$ | $\\dfrac{x}{4} = 5 \\Rightarrow x = 20$ |

> ⚖️ Remember the **Golden Rule**: do the same inverse operation to **both sides**, then **check** by substituting your answer back in.`,
      },
      {
        id: 'ose5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{x}{7} = 4$.',
              options: ['$x = 28$', '$x = 11$', '$x = 1.75$', '$x = 3$'],
              correctAnswer: 0,
              explanation: 'Multiply both sides by $7$: $x = 4 \\times 7 = 28$. Check: $28 \\div 7 = 4$ ✓',
            },
            {
              question: 'Solve $x - 14 = 6$.',
              options: ['$x = 20$', '$x = 8$', '$x = -8$', '$x = 84$'],
              correctAnswer: 0,
              explanation: 'Add $14$ to both sides: $x = 6 + 14 = 20$. Check: $20 - 14 = 6$ ✓',
            },
          ],
        },
      },
      {
        id: 'ose5-finaldrill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

One of each kind. Enter just the number.

**1)** $x + 11 = 30,\\quad x = \\,?$
**2)** $9x = 72,\\quad x = \\,?$
**3)** $\\dfrac{x}{8} = 5,\\quad x = \\,?$
**4)** $x - 6 = 6,\\quad x = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['19', '8', '40', '12'],
          hint1: 'Addition → subtract; multiplication → divide; division → multiply; subtraction → add.',
          hint2: '$x + 11 = 30 \\Rightarrow x = 19$; $\\;9x = 72 \\Rightarrow x = 8$.',
          hint3: '$\\dfrac{x}{8} = 5 \\Rightarrow x = 40$; $\\;x - 6 = 6 \\Rightarrow x = 12$.',
          explanation: '1) $x = 19$.  2) $x = 8$.  3) $x = 40$.  4) $x = 12$. Always do the inverse to both sides and check.',
        },
      },
      {
        id: 'ose5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the first step to solve $x + 13 = 21$?',
              options: ['Subtract 13 from both sides', 'Add 13 to both sides', 'Divide both sides by 13', 'Multiply both sides by 13'],
              correctAnswer: 0,
              explanation: 'The $+13$ is attached to $x$, so subtract $13$ from both sides: $x = 21 - 13 = 8$.',
            },
            {
              question: 'Solve $5x = 45$.',
              options: ['$x = 9$', '$x = 40$', '$x = 50$', '$x = 225$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $5$: $x = 45 \\div 5 = 9$. Check: $5 \\times 9 = 45$ ✓',
            },
            {
              question: '"A number decreased by $7$ is $10$." What is the number?',
              options: ['$17$', '$3$', '$70$', '$-3$'],
              correctAnswer: 0,
              explanation: '"Decreased by $7$" → $n - 7 = 10$. Add $7$: $n = 10 + 7 = 17$. Check: $17 - 7 = 10$ ✓',
            },
          ],
        },
      },
    ],
  },
]
