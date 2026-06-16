import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Linear Equations (Grade 8 Math, CCSS 8.EE.C.7).
 * Registry key / DB Topic.slug: 'solving-linear-equations-grade8'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * one-step → two-step → variables on both sides & distribution → fractions/decimals
 * & special cases (no solution / infinitely many) → word problems + mastery check.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-linear-equations-grade8',
    sections: [
      {
        id: 'sle1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Linear Equations

**Part 1 of 5 — The Balance Idea & One-Step Equations**

---

### Topics in This Part

| Section |
|---------|
| What "Solving" Really Means |
| Keep the Equation Balanced |
| Inverse Operations |
| One-Step Equations |

> 🔑 **Key Concept:** An equation is a balanced scale. Whatever you do to one side, you must do to the *other* side too — that single rule powers everything in this course.`,
      },
      {
        id: 'sle1-meaning',
        type: 'text' as const,
        content: `## What Does "Solving" Mean?

A **linear equation** is a statement that two expressions are equal, like

$$x + 5 = 12$$

To **solve** it means to find the value of the variable that makes the statement *true*. Here the answer is $x = 7$, because $7 + 5 = 12$. ✓

The variable is usually alone on one side once you're done:

$$x = 7$$

> 💡 **Goal of every problem:** get the variable **by itself** on one side of the equals sign. We call this *isolating the variable*.

### Checking a Solution

You can always test an answer by substituting it back in. Is $x = 4$ a solution of $2x = 8$?

$$2(4) = 8 \\quad\\Rightarrow\\quad 8 = 8 \\;\\checkmark$$

Yes! Checking is a free way to catch mistakes — get in the habit.`,
      },
      {
        id: 'sle1-check-meaning',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which value of $x$ is the solution of $x - 3 = 10$?',
              options: ['$x = 13$', '$x = 7$', '$x = 30$', '$x = -7$'],
              correctAnswer: 0,
              explanation: 'We need $x - 3 = 10$. Testing $x = 13$: $13 - 3 = 10$ ✓. The variable must be $3$ more than $10$.',
            },
            {
              question: 'Is $x = 5$ a solution of $3x = 12$?',
              options: ['Yes, because $3(5) = 12$', 'No, because $3(5) = 15 \\ne 12$', 'Yes, because $5 < 12$', 'Cannot be determined'],
              correctAnswer: 1,
              explanation: 'Substitute: $3(5) = 15$, not $12$. Since $15 \\ne 12$, $x = 5$ is **not** a solution. (The real solution is $x = 4$.)',
            },
          ],
        },
      },
      {
        id: 'sle1-balance',
        type: 'text' as const,
        content: `## Keep the Equation Balanced

Think of $=$ as the center of a balance scale. The two sides weigh the same. If you add or remove weight from one side, you **must** do the same to the other, or the scale tips.

| Operation on left | Same operation on right? |
|-------------------|--------------------------|
| Add $4$ | Add $4$ ✓ |
| Subtract $9$ | Subtract $9$ ✓ |
| Multiply by $2$ | Multiply by $2$ ✓ |
| Divide by $5$ | Divide by $5$ ✓ |

> ⚠️ The #1 beginner mistake is changing only one side. If you subtract $5$ from the left, you *must* subtract $5$ from the right.

### Inverse Operations

To isolate the variable, you "undo" what's attached to it using the **opposite** operation:

| You see… | Undo with… |
|----------|-----------|
| $+\\,$ (addition) | subtraction |
| $-\\,$ (subtraction) | addition |
| $\\times\\,$ (multiplication) | division |
| $\\div\\,$ (division) | multiplication |`,
      },
      {
        id: 'sle1-onestep',
        type: 'text' as const,
        content: `## One-Step Equations: Worked Examples

### Example A — undo addition

$$x + 8 = 15$$

The $+8$ is in the way. Undo it by **subtracting $8$ from both sides**:

$$x + 8 - 8 = 15 - 8 \\quad\\Rightarrow\\quad x = 7$$

> ✅ **Check:** $7 + 8 = 15$ ✓

### Example B — undo subtraction

$$x - 6 = -2$$

Undo the $-6$ by **adding $6$ to both sides**:

$$x - 6 + 6 = -2 + 6 \\quad\\Rightarrow\\quad x = 4$$

### Example C — undo multiplication

$$5x = 35$$

The $x$ is multiplied by $5$. Undo it by **dividing both sides by $5$**:

$$\\frac{5x}{5} = \\frac{35}{5} \\quad\\Rightarrow\\quad x = 7$$

### Example D — undo division

$$\\frac{x}{4} = 3$$

Undo dividing by $4$ by **multiplying both sides by $4$**:

$$\\frac{x}{4}\\cdot 4 = 3\\cdot 4 \\quad\\Rightarrow\\quad x = 12$$`,
      },
      {
        id: 'sle1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Move** 🔽

For each equation, choose the *single* operation that isolates $x$.`,
        exercise: {
          dropdowns: [
            { label: 'To solve $x + 9 = 20$:', options: ['Subtract $9$ from both sides', 'Add $9$ to both sides', 'Divide both sides by $9$', 'Multiply both sides by $9$'] },
            { label: 'To solve $7x = 42$:', options: ['Divide both sides by $7$', 'Subtract $7$ from both sides', 'Multiply both sides by $7$', 'Add $7$ to both sides'] },
            { label: 'To solve $\\dfrac{x}{3} = 6$:', options: ['Multiply both sides by $3$', 'Divide both sides by $3$', 'Subtract $3$ from both sides', 'Add $3$ to both sides'] },
          ],
          correctAnswers: ['Subtract $9$ from both sides', 'Divide both sides by $7$', 'Multiply both sides by $3$'],
          hint1: 'Addition is undone by subtraction.',
          hint2: 'Multiplication is undone by division.',
          hint3: 'Division is undone by multiplication — use the *inverse* operation each time.',
          explanation: '$x+9=20 \\Rightarrow x=11$ (subtract $9$). $7x=42 \\Rightarrow x=6$ (divide by $7$). $x/3=6 \\Rightarrow x=18$ (multiply by $3$).',
        },
      },
      {
        id: 'sle1-recap',
        type: 'text' as const,
        content: `## Before You Practice

Every one-step equation follows the same plan:

1. **Spot** what's done to the variable.
2. **Apply** the inverse operation to **both** sides.
3. **Check** by substituting your answer back in.

> 🔑 One operation, both sides, then verify. Master this and two-step equations (Part 2) are just *two* of these in a row.`,
      },
      {
        id: 'sle1-drill',
        type: 'input-boxes' as const,
        content: `**Solve One-Step Equations** 🧮

Solve for $x$. Enter just the number.

**1)** $x + 12 = 20 \\;\\Rightarrow\\; x = \\,?$
**2)** $x - 7 = -3 \\;\\Rightarrow\\; x = \\,?$
**3)** $6x = 54 \\;\\Rightarrow\\; x = \\,?$
**4)** $\\dfrac{x}{5} = 8 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['8', '4', '9', '40'],
          hint1: 'Subtract $12$ from both sides: $x = 20 - 12 = 8$.',
          hint2: 'Add $7$ to both sides: $x = -3 + 7 = 4$.',
          hint3: 'Divide by $6$: $x = 54/6 = 9$. Then multiply by $5$: $x = 8\\cdot 5 = 40$.',
          explanation: '1) $x = 8$.  2) $x = 4$.  3) $x = 9$.  4) $x = 40$. Each uses one inverse operation on both sides.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-linear-equations-grade8',
    sections: [
      {
        id: 'sle2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Linear Equations

**Part 2 of 5 — Two-Step Equations**

---

> 🔑 **The Idea:** When a variable has *two* things done to it (like "times $3$, then plus $4$"), undo them in the **reverse** order — addition/subtraction first, then multiplication/division.`,
      },
      {
        id: 'sle2-order',
        type: 'text' as const,
        content: `## Undo in Reverse Order

An equation like $3x + 4 = 19$ was built in this order:

$$x \\;\\xrightarrow{\\;\\times 3\\;}\\; 3x \\;\\xrightarrow{\\;+\\,4\\;}\\; 3x + 4$$

To get back to $x$, **reverse** the steps — undo the **last** thing first:

1. Undo $+4$ → subtract $4$
2. Undo $\\times 3$ → divide by $3$

> 💡 **Memory trick:** it's like getting dressed and undressed. You put socks on *before* shoes, so you take shoes off *before* socks. Reverse order!`,
      },
      {
        id: 'sle2-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example A — $3x + 4 = 19$

**Step 1** — subtract $4$ from both sides:
$$3x + 4 - 4 = 19 - 4 \\quad\\Rightarrow\\quad 3x = 15$$

**Step 2** — divide both sides by $3$:
$$\\frac{3x}{3} = \\frac{15}{3} \\quad\\Rightarrow\\quad x = 5$$

> ✅ **Check:** $3(5) + 4 = 15 + 4 = 19$ ✓

### Example B — $\\dfrac{x}{2} - 6 = 1$

**Step 1** — add $6$ to both sides:
$$\\frac{x}{2} = 7$$

**Step 2** — multiply both sides by $2$:
$$x = 14$$

### Example C — a negative coefficient: $-2x + 9 = 1$

**Step 1** — subtract $9$: $\\;-2x = -8$
**Step 2** — divide by $-2$: $\\;x = 4$

> ⚠️ When you divide by a **negative**, the sign flips. Here $\\dfrac{-8}{-2} = 4$ (positive).`,
      },
      {
        id: 'sle2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $5x - 3 = 22$, which step comes **first**?',
              options: ['Add $3$ to both sides', 'Divide both sides by $5$', 'Subtract $5$ from both sides', 'Multiply both sides by $3$'],
              correctAnswer: 0,
              explanation: 'Undo the last operation first. The $-3$ was added last, so add $3$ first: $5x = 25$. Then divide by $5$ to get $x = 5$.',
            },
            {
              question: 'Solve $2x + 7 = 1$.',
              options: ['$x = -3$', '$x = 4$', '$x = 3$', '$x = -4$'],
              correctAnswer: 0,
              explanation: 'Subtract $7$: $2x = -6$. Divide by $2$: $x = -3$. Check: $2(-3)+7 = -6+7 = 1$ ✓.',
            },
          ],
        },
      },
      {
        id: 'sle2-bridge',
        type: 'text' as const,
        content: `## Show Every Step in Writing

Two-step problems are easy to slip on if you do them in your head. Write each line under the last so the chain of reasoning is visible:

$$4x - 5 = 11$$
$$4x = 16 \\quad (\\text{add } 5)$$
$$x = 4 \\quad (\\text{divide by } 4)$$

> 💡 Lining up your work this way makes mistakes jump out — and earns full credit on tests. Let's trace one stage by stage.`,
      },
      {
        id: 'sle2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Trace the Steps** 🔽

You're solving $4x - 5 = 11$. Fill in each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — first move:', options: ['Add $5$ to both sides', 'Subtract $5$ from both sides', 'Divide both sides by $4$', 'Add $11$ to both sides'] },
            { label: 'After Step 1 the equation is:', options: ['$4x = 16$', '$4x = 6$', '$4x = 11$', '$x = 16$'] },
            { label: 'Step 2 — final move:', options: ['Divide both sides by $4$', 'Multiply both sides by $4$', 'Subtract $4$ from both sides', 'Add $4$ to both sides'] },
            { label: 'Solution:', options: ['$x = 4$', '$x = 1.5$', '$x = 16$', '$x = 64$'] },
          ],
          correctAnswers: ['Add $5$ to both sides', '$4x = 16$', 'Divide both sides by $4$', '$x = 4$'],
          hint1: 'Undo the $-5$ first by adding $5$.',
          hint2: '$11 + 5 = 16$, so the equation becomes $4x = 16$.',
          hint3: 'Divide by $4$: $x = 16/4 = 4$.',
          explanation: '$4x - 5 = 11 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. Check: $4(4) - 5 = 16 - 5 = 11$ ✓.',
        },
      },
      {
        id: 'sle2-negatives',
        type: 'text' as const,
        content: `## A Note on Negative Answers

Two-step equations often produce **negative** solutions — that's perfectly normal. Just apply the rules carefully with signs:

$$-3x + 1 = 10 \\;\\Rightarrow\\; -3x = 9 \\;\\Rightarrow\\; x = \\frac{9}{-3} = -3$$

And answers don't have to be whole numbers. If dividing doesn't come out evenly, leave a **fraction** or use a decimal:

$$6x = 9 \\;\\Rightarrow\\; x = \\frac{9}{6} = \\frac{3}{2} = 1.5$$

Now try a mixed set on your own.`,
      },
      {
        id: 'sle2-drill',
        type: 'input-boxes' as const,
        content: `**Solve Two-Step Equations** 🧮

Solve for $x$. Fractions like $-5/2$ or decimals are fine.

**1)** $2x + 5 = 17 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{x}{3} + 4 = 10 \\;\\Rightarrow\\; x = \\,?$
**3)** $-3x + 1 = 10 \\;\\Rightarrow\\; x = \\,?$
**4)** $6x - 7 = 2 \\;\\Rightarrow\\; x = \\,?$ *(fraction or decimal)*`,
        exercise: {
          boxes: 4,
          correctAnswers: ['6', '18', '-3', '3/2'],
          hint1: 'Subtract $5$: $2x = 12 \\Rightarrow x = 6$.',
          hint2: 'Subtract $4$: $x/3 = 6$, then multiply by $3$: $x = 18$.',
          hint3: 'Subtract $1$: $-3x = 9$, divide by $-3$: $x = -3$. For #4: $6x = 9 \\Rightarrow x = 9/6 = 3/2 = 1.5$.',
          explanation: '1) $x = 6$.  2) $x = 18$.  3) $x = -3$.  4) $6x = 9 \\Rightarrow x = \\frac{3}{2}$ (or $1.5$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-linear-equations-grade8',
    sections: [
      {
        id: 'sle3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Linear Equations

**Part 3 of 5 — Distributing & Combining Like Terms**

---

> 🔑 **The Idea:** Before you isolate the variable, *clean up* each side: distribute through parentheses and combine like terms so every side is as simple as possible.`,
      },
      {
        id: 'sle3-distribute',
        type: 'text' as const,
        content: `## The Distributive Property

To multiply a number across a sum, multiply it by **each** term inside the parentheses:

$$a(b + c) = ab + ac$$

| Expression | Distributed |
|-----------|-------------|
| $3(x + 4)$ | $3x + 12$ |
| $2(x - 5)$ | $2x - 10$ |
| $-4(x + 2)$ | $-4x - 8$ |
| $-(x - 6)$ | $-x + 6$ |

> ⚠️ Watch the signs! $-4(x+2) = -4x - 8$, and the minus in $-(x-6)$ flips *both* terms: $-x + 6$.

## Combining Like Terms

**Like terms** have the same variable part. Add their coefficients:

$$5x + 2x = 7x \\qquad 8 - 3 = 5 \\qquad 5x + 8 - 3x - 3 = 2x + 5$$

You can only combine $x$-terms with $x$-terms, and numbers with numbers.`,
      },
      {
        id: 'sle3-cleanup-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Distribute: $-2(x - 7) = $',
              options: ['$-2x + 14$', '$-2x - 14$', '$-2x - 7$', '$2x - 14$'],
              correctAnswer: 0,
              explanation: '$-2\\cdot x = -2x$ and $-2\\cdot(-7) = +14$. So $-2(x-7) = -2x + 14$.',
            },
            {
              question: 'Combine like terms: $4x + 9 - x - 2 = $',
              options: ['$3x + 7$', '$5x + 7$', '$3x + 11$', '$4x + 7$'],
              correctAnswer: 0,
              explanation: '$x$-terms: $4x - x = 3x$. Constants: $9 - 2 = 7$. Result: $3x + 7$.',
            },
          ],
        },
      },
      {
        id: 'sle3-bothsides',
        type: 'text' as const,
        content: `## Variables on Both Sides

When $x$ appears on *both* sides, **move all the variables to one side** (and all the numbers to the other) using inverse operations.

### Worked Example — $5x + 3 = 2x + 18$

**Step 1** — subtract $2x$ from both sides (gather $x$ on the left):
$$5x - 2x + 3 = 18 \\quad\\Rightarrow\\quad 3x + 3 = 18$$

**Step 2** — subtract $3$:
$$3x = 15$$

**Step 3** — divide by $3$:
$$x = 5$$

> ✅ **Check:** Left $= 5(5)+3 = 28$. Right $= 2(5)+18 = 28$. ✓

> 💡 **Tip:** Move the *smaller* variable term to avoid negatives. Here $2x < 5x$, so we subtracted $2x$.`,
      },
      {
        id: 'sle3-distribute-solve',
        type: 'text' as const,
        content: `## Putting It Together — Distribute First, Then Solve

### Worked Example — $3(x + 2) = 21$

**Step 1** — distribute the $3$:
$$3x + 6 = 21$$

**Step 2** — subtract $6$: $\\;3x = 15$
**Step 3** — divide by $3$: $\\;x = 5$

### Worked Example — $2(x - 4) = x + 1$

**Step 1** — distribute: $\\;2x - 8 = x + 1$
**Step 2** — subtract $x$: $\\;x - 8 = 1$
**Step 3** — add $8$: $\\;x = 9$

> ✅ **Check:** $2(9-4) = 2(5) = 10$, and $9 + 1 = 10$. ✓`,
      },
      {
        id: 'sle3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Solve $6x - 1 = 4x + 9$** 🔽

Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — gather variables (subtract $4x$):', options: ['$2x - 1 = 9$', '$10x - 1 = 9$', '$2x + 1 = 9$', '$6x - 1 = 9$'] },
            { label: 'Step 2 — move the constant (add $1$):', options: ['$2x = 10$', '$2x = 8$', '$2x = 9$', '$2x = -10$'] },
            { label: 'Step 3 — solve (divide by $2$):', options: ['$x = 5$', '$x = 4$', '$x = 10$', '$x = -5$'] },
          ],
          correctAnswers: ['$2x - 1 = 9$', '$2x = 10$', '$x = 5$'],
          hint1: 'Subtracting $4x$ from both sides: $6x - 4x = 2x$, giving $2x - 1 = 9$.',
          hint2: 'Add $1$ to both sides: $9 + 1 = 10$, so $2x = 10$.',
          hint3: 'Divide by $2$: $x = 10/2 = 5$.',
          explanation: '$6x - 1 = 4x + 9 \\Rightarrow 2x - 1 = 9 \\Rightarrow 2x = 10 \\Rightarrow x = 5$. Check: $6(5)-1 = 29 = 4(5)+9$ ✓.',
        },
      },
      {
        id: 'sle3-strategy',
        type: 'text' as const,
        content: `## The General Multi-Step Plan

For *any* linear equation, work through these in order:

1. **Distribute** to clear parentheses.
2. **Combine** like terms on each side.
3. **Gather** variables on one side, numbers on the other.
4. **Isolate** the variable (divide by its coefficient).
5. **Check** your answer.

> 💡 Not every problem needs every step — but doing them *in this order* never fails. Try the plan below.`,
      },
      {
        id: 'sle3-drill',
        type: 'input-boxes' as const,
        content: `**Multi-Step Practice** 🧮

Solve for $x$. Enter just the number.

**1)** $4(x + 3) = 24 \\;\\Rightarrow\\; x = \\,?$
**2)** $7x + 2 = 3x + 18 \\;\\Rightarrow\\; x = \\,?$
**3)** $5(x - 1) = 2x + 7 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '4'],
          hint1: '#1: distribute → $4x + 12 = 24 \\Rightarrow 4x = 12 \\Rightarrow x = 3$.',
          hint2: '#2: subtract $3x$ → $4x + 2 = 18 \\Rightarrow 4x = 16 \\Rightarrow x = 4$.',
          hint3: '#3: distribute → $5x - 5 = 2x + 7 \\Rightarrow 3x - 5 = 7 \\Rightarrow 3x = 12 \\Rightarrow x = 4$.',
          explanation: '1) $x = 3$.  2) $x = 4$.  3) $x = 4$. Distribute and combine first, then isolate $x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-linear-equations-grade8',
    sections: [
      {
        id: 'sle4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Linear Equations

**Part 4 of 5 — Fractions, Decimals & Special Cases**

---

> 🔑 **The Idea:** Fractions and decimals don't change the rules — you can *clear* them with one smart multiplication. And some equations have **no solution** or **infinitely many** solutions; you'll learn to spot both.`,
      },
      {
        id: 'sle4-clearfractions',
        type: 'text' as const,
        content: `## Clearing Fractions

To erase fractions, multiply **every term on both sides** by the **least common denominator (LCD)**.

### Worked Example — $\\dfrac{x}{2} + \\dfrac{1}{3} = \\dfrac{5}{6}$

The denominators are $2, 3, 6$. Their LCD is $6$. Multiply every term by $6$:

$$6\\cdot\\frac{x}{2} + 6\\cdot\\frac{1}{3} = 6\\cdot\\frac{5}{6}$$

$$3x + 2 = 5$$

Now it's an ordinary two-step equation:

$$3x = 3 \\quad\\Rightarrow\\quad x = 1$$

> ✅ **Check:** $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}$ ✓

> 💡 Multiplying by the LCD turns a messy fraction equation into a clean whole-number one in a single step.`,
      },
      {
        id: 'sle4-decimals',
        type: 'text' as const,
        content: `## Clearing Decimals

Same trick: multiply every term by a power of $10$ ($10$, $100$, …) big enough to make all decimals whole.

### Worked Example — $0.2x + 1.5 = 2.1$

Each number has one decimal place, so multiply every term by $10$:

$$2x + 15 = 21$$

$$2x = 6 \\quad\\Rightarrow\\quad x = 3$$

> ✅ **Check:** $0.2(3) + 1.5 = 0.6 + 1.5 = 2.1$ ✓

You could also solve with the decimals left in — clearing them is just optional cleanup.`,
      },
      {
        id: 'sle4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To clear fractions in $\\dfrac{x}{4} - \\dfrac{1}{2} = \\dfrac{3}{4}$, multiply every term by:',
              options: ['$4$', '$2$', '$8$', '$12$'],
              correctAnswer: 0,
              explanation: 'Denominators are $4, 2, 4$. The LCD is $4$. Multiplying by $4$ gives $x - 2 = 3$, so $x = 5$.',
            },
            {
              question: 'To clear decimals in $0.05x + 0.1 = 0.3$, multiply every term by:',
              options: ['$100$', '$10$', '$5$', '$1000$'],
              correctAnswer: 0,
              explanation: 'The most decimal places is two (in $0.05$), so multiply by $100$: $5x + 10 = 30$, giving $x = 4$.',
            },
          ],
        },
      },
      {
        id: 'sle4-special',
        type: 'text' as const,
        content: `## Special Cases: No Solution & Infinitely Many

Most equations have exactly **one** solution. But after simplifying, sometimes the variable *disappears*. What's left tells you the answer.

### No Solution — a false statement

$$2x + 5 = 2x + 9$$

Subtract $2x$ from both sides:

$$5 = 9 \\quad (\\text{false!})$$

Since $5 = 9$ is never true, there is **no solution**. No value of $x$ works.

### Infinitely Many Solutions — a true statement

$$3(x + 2) = 3x + 6$$

Distribute the left side: $3x + 6 = 3x + 6$. Subtract $3x$:

$$6 = 6 \\quad (\\text{always true!})$$

Since $6 = 6$ is *always* true, **every** number is a solution — **infinitely many solutions**.

| After the variables cancel… | Meaning |
|------------------------------|---------|
| A **false** number sentence (e.g. $5 = 9$) | **No solution** |
| A **true** number sentence (e.g. $6 = 6$) | **Infinitely many solutions** |
| A value for $x$ (e.g. $x = 4$) | **One solution** |`,
      },
      {
        id: 'sle4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify the Equation** 🔽

Simplify each equation in your head, then choose how many solutions it has.`,
        exercise: {
          dropdowns: [
            { label: '$4x + 1 = 4x + 1$', options: ['Infinitely many solutions', 'No solution', 'One solution'] },
            { label: '$5x + 2 = 5x - 3$', options: ['No solution', 'Infinitely many solutions', 'One solution'] },
            { label: '$2x + 6 = 10$', options: ['One solution', 'No solution', 'Infinitely many solutions'] },
          ],
          correctAnswers: ['Infinitely many solutions', 'No solution', 'One solution'],
          hint1: 'Subtract the matching $x$-terms and see what number sentence remains.',
          hint2: '$4x+1=4x+1$ gives $1 = 1$ (always true). $5x+2=5x-3$ gives $2 = -3$ (false).',
          hint3: '$2x + 6 = 10$ still has an $x$ after simplifying ($2x = 4$), so it has one solution: $x = 2$.',
          explanation: 'Identity ($1=1$) → infinitely many. False ($2=-3$) → none. Variable survives → one solution ($x=2$).',
        },
      },
      {
        id: 'sle4-recap',
        type: 'text' as const,
        content: `## Putting Parts 1–4 Together

You now have a full toolkit:

| If the equation has… | Do this first |
|----------------------|---------------|
| fractions | multiply every term by the **LCD** |
| decimals | multiply every term by a **power of $10$** |
| parentheses | **distribute** |
| variables on both sides | **gather** them on one side |

After cleanup, isolate the variable as usual — or, if it cancels, classify the equation as **no solution** or **infinitely many**. Time to combine it all.`,
      },
      {
        id: 'sle4-drill',
        type: 'input-boxes' as const,
        content: `**Fractions, Decimals & Classifying** 🧮

For #1–2 enter the numeric solution. For #3 enter the **number of solutions** as a digit: \`1\` for one, \`0\` for none.

**1)** $\\dfrac{x}{3} + 2 = 5 \\;\\Rightarrow\\; x = \\,?$
**2)** $0.4x - 1.2 = 0.8 \\;\\Rightarrow\\; x = \\,?$
**3)** How many solutions does $7x + 4 = 7x - 2$ have? *(enter $0$ or $1$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '5', '0'],
          hint1: '#1: multiply by $3$ → $x + 6 = 15 \\Rightarrow x = 9$.',
          hint2: '#2: multiply by $10$ → $4x - 12 = 8 \\Rightarrow 4x = 20 \\Rightarrow x = 5$.',
          hint3: '#3: subtract $7x$ → $4 = -2$, which is false, so there are $0$ solutions.',
          explanation: '1) $x = 9$.  2) $x = 5$.  3) The variables cancel leaving the false sentence $4 = -2$, so **no solution** → enter $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-linear-equations-grade8',
    sections: [
      {
        id: 'sle5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Linear Equations

**Part 5 of 5 — Word Problems & Mastery Check**

---

You can now solve one-step, two-step, and multi-step equations, clear fractions and decimals, and recognize special cases. The last skill is the most useful in real life: **turning a sentence into an equation**.`,
      },
      {
        id: 'sle5-translate',
        type: 'text' as const,
        content: `## Translating Words into Equations

Pick a letter for the unknown, then translate phrase by phrase.

| Words | Math |
|-------|------|
| a number $x$ increased by $7$ | $x + 7$ |
| $5$ less than a number | $x - 5$ |
| twice a number | $2x$ |
| the product of $3$ and a number | $3x$ |
| a number divided by $4$ | $\\dfrac{x}{4}$ |
| is, equals, results in | $=$ |

### Worked Example

*"Four more than three times a number is $25$. Find the number."*

Translate: $\\;3x + 4 = 25$.

Solve: $\\;3x = 21 \\Rightarrow x = 7$.

> ✅ **Check:** $3(7) + 4 = 21 + 4 = 25$ ✓ — the number is $7$.`,
      },
      {
        id: 'sle5-translate-mc',
        type: 'multiple-choice' as const,
        content: `**Translate & Solve** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation matches "Seven less than twice a number is $15$"?',
              options: ['$2x - 7 = 15$', '$7 - 2x = 15$', '$2(x - 7) = 15$', '$2x + 7 = 15$'],
              correctAnswer: 0,
              explanation: '"Twice a number" is $2x$; "seven less than" it means subtract $7$: $2x - 7$. Set equal to $15$: $2x - 7 = 15$ (so $x = 11$).',
            },
            {
              question: 'A taxi charges a $\\$3$ flat fee plus $\\$2$ per mile. The ride cost $\\$17$. Which equation finds the miles $m$?',
              options: ['$2m + 3 = 17$', '$3m + 2 = 17$', '$2m - 3 = 17$', '$5m = 17$'],
              correctAnswer: 0,
              explanation: 'Cost $=$ flat fee $+$ per-mile rate $\\times$ miles $= 3 + 2m$. Setting that equal to $17$ gives $2m + 3 = 17$, so $m = 7$ miles.',
            },
          ],
        },
      },
      {
        id: 'sle5-wordproblems',
        type: 'text' as const,
        content: `## A Geometry Application

Equations show up everywhere — here's a perimeter problem.

*"A rectangle's length is $3$ cm more than its width. Its perimeter is $26$ cm. Find the width."*

Let the width be $w$. Then the length is $w + 3$. Perimeter is $2(\\text{length}) + 2(\\text{width})$:

$$2(w + 3) + 2w = 26$$

Distribute and combine:

$$2w + 6 + 2w = 26 \\quad\\Rightarrow\\quad 4w + 6 = 26$$

$$4w = 20 \\quad\\Rightarrow\\quad w = 5$$

> ✅ **Check:** width $= 5$, length $= 8$, perimeter $= 2(8) + 2(5) = 16 + 10 = 26$ ✓

> 💡 **Strategy:** (1) name the unknown, (2) write expressions for the other quantities, (3) build the equation, (4) solve, (5) check it makes sense.`,
      },
      {
        id: 'sle5-word-drill',
        type: 'input-boxes' as const,
        content: `**Word-Problem Practice** 🧮

Set up an equation and solve. Enter just the number.

**1)** Five more than twice a number is $23$. What is the number?
**2)** Maya has $\\$40$. She buys a backpack for $\\$16$ and then $x$ notebooks at $\\$3$ each, spending all $\\$40$. How many notebooks?
**3)** Three consecutive integers sum to $48$. What is the **smallest** one? *(Hint: $x + (x+1) + (x+2) = 48$.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '8', '15'],
          hint1: '#1: $2x + 5 = 23 \\Rightarrow 2x = 18 \\Rightarrow x = 9$.',
          hint2: '#2: $16 + 3x = 40 \\Rightarrow 3x = 24 \\Rightarrow x = 8$ notebooks.',
          hint3: '#3: $x + (x+1) + (x+2) = 48 \\Rightarrow 3x + 3 = 48 \\Rightarrow 3x = 45 \\Rightarrow x = 15$.',
          explanation: '1) $2x+5=23 \\Rightarrow x=9$.  2) $16+3x=40 \\Rightarrow x=8$.  3) $3x+3=48 \\Rightarrow x=15$ (integers $15, 16, 17$).',
        },
      },
      {
        id: 'sle5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Equation type | Key move |
|---------------|----------|
| One-step ($x + a = b$) | one inverse operation, both sides |
| Two-step ($ax + b = c$) | undo $+/-$ first, then $\\times/\\div$ |
| Variables both sides | gather $x$ on one side, numbers on the other |
| Parentheses | **distribute** first |
| Fractions / decimals | multiply every term by the **LCD** / a power of $10$ |
| $0 = 5$ after canceling | **no solution** |
| $7 = 7$ after canceling | **infinitely many** |

> ⚠️ Always do the **same** thing to **both** sides, and **check** your answer by substituting it back in.`,
      },
      {
        id: 'sle5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $3x - 7 = 14$.',
              options: ['$x = 7$', '$x = 21$', '$x = \\frac{7}{3}$', '$x = -7$'],
              correctAnswer: 0,
              explanation: 'Add $7$: $3x = 21$. Divide by $3$: $x = 7$. Check: $3(7) - 7 = 21 - 7 = 14$ ✓.',
            },
            {
              question: 'Solve $2(x + 4) = 3x + 5$.',
              options: ['$x = 3$', '$x = 1$', '$x = 13$', '$x = -3$'],
              correctAnswer: 0,
              explanation: 'Distribute: $2x + 8 = 3x + 5$. Subtract $2x$: $8 = x + 5$. Subtract $5$: $x = 3$. Check: $2(7) = 14 = 3(3)+5$ ✓.',
            },
            {
              question: 'How many solutions does $4x + 6 = 4x + 6$ have?',
              options: ['Infinitely many', 'Exactly one', 'None', 'Exactly two'],
              correctAnswer: 0,
              explanation: 'Both sides are identical. Subtracting $4x$ leaves $6 = 6$, always true, so **every** number works — infinitely many solutions.',
            },
          ],
        },
      },
    ],
  },
]
