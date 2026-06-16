import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving One- and Two-Step Equations (Pre-Algebra).
 * Registry key / DB Topic.slug: 'solving-equations-prealg'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-equations-prealg',
    sections: [
      {
        id: 'soe1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One- and Two-Step Equations

**Part 1 of 5 — What Is an Equation?**

---

### Topics in This Part

| Section |
|---------|
| Equations vs. Expressions |
| What "Solve" Means |
| Checking a Solution |
| The Balance Idea |

> 🔑 **Key Concept:** An equation is a statement that two things are **equal**. To *solve* it is to find the value of the variable that makes the statement true.`,
      },
      {
        id: 'soe1-eq-vs-expr',
        type: 'text' as const,
        content: `## Equations vs. Expressions

An **expression** is a math phrase with no equals sign — like $x + 4$ or $3n$. You can simplify it, but there's nothing to "solve."

An **equation** has an **equals sign** ($=$) joining two expressions:

$$x + 4 = 9$$

| Phrase | Type | Why |
|--------|------|-----|
| $x + 4$ | Expression | No $=$ sign |
| $x + 4 = 9$ | Equation | Has an $=$ sign |
| $3n - 2$ | Expression | No $=$ sign |
| $3n - 2 = 10$ | Equation | Has an $=$ sign |

> 💡 Think of the equals sign as the center of a **balance scale**. The left side weighs exactly the same as the right side.`,
      },
      {
        id: 'soe1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which one is an **equation** (not just an expression)?',
              options: ['$7x - 2 = 19$', '$7x - 2$', '$5 + 3n$', '$\\dfrac{m}{4}$'],
              correctAnswer: 0,
              explanation: 'Only $7x - 2 = 19$ has an equals sign, which makes it an equation. The other three are expressions — there is nothing to solve.',
            },
            {
              question: 'In the equation $x + 4 = 9$, the value of $x$ that makes it true is called the:',
              options: ['solution', 'coefficient', 'constant', 'expression'],
              correctAnswer: 0,
              explanation: 'The value of the variable that makes an equation true is its **solution**. Here $x = 5$ is the solution because $5 + 4 = 9$.',
            },
          ],
        },
      },
      {
        id: 'soe1-what-solve',
        type: 'text' as const,
        content: `## What Does "Solve" Mean?

To **solve** an equation is to find the number the variable must equal. A solution is **correct** when, after you substitute it back in, both sides come out the same.

### Example: $x + 4 = 9$

Is $x = 5$ a solution? Substitute it in:

$$5 + 4 = 9 \\quad\\Rightarrow\\quad 9 = 9 \\;\\checkmark$$

Both sides equal $9$, so **yes**, $x = 5$ is the solution.

### Example: $3n = 12$

Is $n = 4$ a solution?

$$3 \\cdot 4 = 12 \\quad\\Rightarrow\\quad 12 = 12 \\;\\checkmark$$

Yes — $n = 4$ works.

> ⚠️ A guess that makes the two sides **unequal** is *not* a solution. If $x = 6$ in $x + 4 = 9$, then $6 + 4 = 10 \\ne 9$, so $6$ is wrong.`,
      },
      {
        id: 'soe1-check-solution',
        type: 'multiple-choice' as const,
        content: `**Check the Solution** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Is $x = 7$ a solution of $x - 3 = 4$?',
              options: ['Yes, because $7 - 3 = 4$', 'No, because $7 - 3 = 10$', 'Yes, because $7 + 3 = 4$', 'No, because $7 \\ne 4$'],
              correctAnswer: 0,
              explanation: 'Substitute $x = 7$: $7 - 3 = 4$, which gives $4 = 4$. Both sides match, so $7$ is a solution.',
            },
            {
              question: 'Which value is a solution of $2y = 10$?',
              options: ['$y = 5$', '$y = 8$', '$y = 20$', '$y = 12$'],
              correctAnswer: 0,
              explanation: 'Test $y = 5$: $2 \\cdot 5 = 10$, so $10 = 10$. ✓ The other values give $16$, $40$, and $24$ — none equal $10$.',
            },
          ],
        },
      },
      {
        id: 'soe1-check-drill',
        type: 'input-boxes' as const,
        content: `**Plug In and Check** 🧮

For each equation, substitute the given value and write the number the left side equals. (Then you can see whether it matches the right side.)

**1)** $x + 6 = 11$, try $x = 5$. Left side $= \\,?$
**2)** $4n = 24$, try $n = 6$. Left side $= \\,?$
**3)** $y - 8 = 2$, try $y = 10$. Left side $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '24', '2'],
          hint1: 'Replace the variable with the number, then do the arithmetic. $5 + 6 = ?$',
          hint2: '$4n$ means $4 \\cdot n$, so $4 \\cdot 6 = ?$',
          hint3: '$y - 8$ with $y = 10$ means $10 - 8 = ?$',
          explanation: '1) $5 + 6 = 11$ ✓ matches.  2) $4 \\cdot 6 = 24$ ✓ matches.  3) $10 - 8 = 2$ ✓ matches. All three given values are solutions.',
        },
      },
      {
        id: 'soe1-balance',
        type: 'text' as const,
        content: `## The Balance Idea

Picture an equation as a balanced scale: the left pan weighs the same as the right pan.

$$\\text{left side} \\;=\\; \\text{right side}$$

> 🔑 **The Golden Rule of Equations:** Whatever you do to **one** side, you must do to the **other** side — exactly. That keeps the scale balanced, so the equation stays true.

If you add $3$ to the left, add $3$ to the right. If you divide the left by $2$, divide the right by $2$. This single rule is the engine behind *every* technique in this lesson — and it's what Part 2 puts to work.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-equations-prealg',
    sections: [
      {
        id: 'soe2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One- and Two-Step Equations

**Part 2 of 5 — Inverse Operations & One-Step Equations**

---

> 🔑 **The Idea:** To get the variable alone, **undo** whatever is being done to it. Use the *opposite* operation — and do it to both sides.`,
      },
      {
        id: 'soe2-inverses',
        type: 'text' as const,
        content: `## Operations and Their Inverses

Every operation has an **inverse** that undoes it:

| Operation | Inverse (undo with) |
|-----------|---------------------|
| Addition ($+$) | Subtraction ($-$) |
| Subtraction ($-$) | Addition ($+$) |
| Multiplication ($\\times$) | Division ($\\div$) |
| Division ($\\div$) | Multiplication ($\\times$) |

To solve a **one-step equation**, ask: *"What is being done to the variable?"* Then do the opposite to **both sides**.

> 💡 The goal every time is to **isolate the variable** — get it alone on one side, with its coefficient equal to $1$.`,
      },
      {
        id: 'soe2-add-sub',
        type: 'text' as const,
        content: `## Undoing Addition and Subtraction

### Example: $x + 7 = 12$

The $7$ is being **added**, so subtract $7$ from both sides:

$$x + 7 - 7 = 12 - 7$$
$$x = 5$$

> ✅ **Check:** $5 + 7 = 12$ ✓

### Example: $x - 4 = 9$

The $4$ is being **subtracted**, so add $4$ to both sides:

$$x - 4 + 4 = 9 + 4$$
$$x = 13$$

> ✅ **Check:** $13 - 4 = 9$ ✓`,
      },
      {
        id: 'soe2-addsub-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $x + 9 = 15$, what should you do to both sides?',
              options: ['Subtract $9$', 'Add $9$', 'Divide by $9$', 'Multiply by $9$'],
              correctAnswer: 0,
              explanation: 'Since $9$ is being added, undo it with the inverse — subtraction. $x + 9 - 9 = 15 - 9$ gives $x = 6$.',
            },
            {
              question: 'Solve $x - 5 = 3$.',
              options: ['$x = 8$', '$x = -2$', '$x = 2$', '$x = 15$'],
              correctAnswer: 0,
              explanation: 'Add $5$ to both sides: $x - 5 + 5 = 3 + 5$, so $x = 8$. Check: $8 - 5 = 3$ ✓.',
            },
          ],
        },
      },
      {
        id: 'soe2-mult-div',
        type: 'text' as const,
        content: `## Undoing Multiplication and Division

### Example: $5x = 30$

Here $5x$ means $5 \\cdot x$ — the variable is being **multiplied** by $5$. Undo it by **dividing** both sides by $5$:

$$\\frac{5x}{5} = \\frac{30}{5}$$
$$x = 6$$

> ✅ **Check:** $5 \\cdot 6 = 30$ ✓

### Example: $\\dfrac{x}{3} = 4$

Here $x$ is being **divided** by $3$. Undo it by **multiplying** both sides by $3$:

$$3 \\cdot \\frac{x}{3} = 3 \\cdot 4$$
$$x = 12$$

> ✅ **Check:** $\\dfrac{12}{3} = 4$ ✓

> ⚠️ **Watch the notation:** $5x$ means "multiply," so you **divide** to undo it. $\\dfrac{x}{3}$ means "divide," so you **multiply** to undo it.`,
      },
      {
        id: 'soe2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Inverse Move** 🔽

For each equation, choose the operation that isolates the variable in one step.`,
        exercise: {
          dropdowns: [
            { label: '$x + 8 = 20$', options: ['Subtract $8$', 'Add $8$', 'Divide by $8$', 'Multiply by $8$'] },
            { label: '$6x = 42$', options: ['Divide by $6$', 'Multiply by $6$', 'Subtract $6$', 'Add $6$'] },
            { label: '$\\dfrac{x}{4} = 5$', options: ['Multiply by $4$', 'Divide by $4$', 'Subtract $4$', 'Add $4$'] },
            { label: '$x - 11 = 2$', options: ['Add $11$', 'Subtract $11$', 'Divide by $11$', 'Multiply by $11$'] },
          ],
          correctAnswers: ['Subtract $8$', 'Divide by $6$', 'Multiply by $4$', 'Add $11$'],
          hint1: 'Addition is undone by subtraction; subtraction is undone by addition.',
          hint2: 'Multiplication ($6x$) is undone by division; division ($x/4$) is undone by multiplication.',
          hint3: 'Always use the opposite of whatever is being done to the variable.',
          explanation: '$x+8$: subtract $8$. $6x$: divide by $6$. $x/4$: multiply by $4$. $x-11$: add $11$. Each move is the inverse of the operation attached to the variable.',
        },
      },
      {
        id: 'soe2-drill',
        type: 'input-boxes' as const,
        content: `**Solve One-Step Equations** 🧮

Solve for the variable. Enter just the number.

**1)** $x + 13 = 20 \\;\\Rightarrow\\; x = \\,?$
**2)** $8x = 56 \\;\\Rightarrow\\; x = \\,?$
**3)** $\\dfrac{x}{5} = 7 \\;\\Rightarrow\\; x = \\,?$
**4)** $x - 6 = 10 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '7', '35', '16'],
          hint1: '$x + 13 = 20$: subtract $13$ → $x = 20 - 13$.',
          hint2: '$8x = 56$: divide by $8$ → $x = 56 \\div 8$. And $x/5 = 7$: multiply by $5$ → $x = 7 \\cdot 5$.',
          hint3: '$x - 6 = 10$: add $6$ → $x = 10 + 6$.',
          explanation: '1) $x = 20 - 13 = 7$.  2) $x = 56 \\div 8 = 7$.  3) $x = 7 \\cdot 5 = 35$.  4) $x = 10 + 6 = 16$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-equations-prealg',
    sections: [
      {
        id: 'soe3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One- and Two-Step Equations

**Part 3 of 5 — Two-Step Equations**

---

> 🔑 **The Idea:** A two-step equation has *two* operations on the variable. Undo them in **reverse order**: first undo addition/subtraction, then undo multiplication/division.`,
      },
      {
        id: 'soe3-order',
        type: 'text' as const,
        content: `## Undo in Reverse Order

A two-step equation like $2x + 3 = 11$ does two things to $x$:
1. Multiplies by $2$
2. Adds $3$

To undo, work **backwards** — like taking off your shoes before your socks:

> 🔑 **Reverse-Order Rule:** First undo what's *farthest* from the variable (the $+$ or $-$ constant). **Then** undo the multiplication or division.

So for $2x + 3 = 11$: first **subtract $3$**, then **divide by $2$**.

> 💡 This is the opposite of the order of operations. When *building* an expression you multiply then add; when *solving* you subtract then divide.`,
      },
      {
        id: 'soe3-worked1',
        type: 'text' as const,
        content: `## Worked Example: $2x + 3 = 11$

**Step 1 — Undo the $+3$.** Subtract $3$ from both sides:

$$2x + 3 - 3 = 11 - 3$$
$$2x = 8$$

**Step 2 — Undo the $\\times 2$.** Divide both sides by $2$:

$$\\frac{2x}{2} = \\frac{8}{2}$$
$$x = 4$$

> ✅ **Check:** $2 \\cdot 4 + 3 = 8 + 3 = 11$ ✓`,
      },
      {
        id: 'soe3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{x}{3} - 5 = 1$

**Step 1 — Undo the $-5$.** Add $5$ to both sides:

$$\\frac{x}{3} - 5 + 5 = 1 + 5$$
$$\\frac{x}{3} = 6$$

**Step 2 — Undo the $\\div 3$.** Multiply both sides by $3$:

$$3 \\cdot \\frac{x}{3} = 3 \\cdot 6$$
$$x = 18$$

> ✅ **Check:** $\\dfrac{18}{3} - 5 = 6 - 5 = 1$ ✓`,
      },
      {
        id: 'soe3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $5x - 4 = 16$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First step (undo farthest):', options: ['Add $4$ to both sides', 'Divide by $5$', 'Subtract $4$ from both sides', 'Multiply by $5$'] },
            { label: 'After the first step:', options: ['$5x = 20$', '$5x = 12$', '$5x = 16$', '$x = 20$'] },
            { label: 'Second step (undo multiplication):', options: ['Divide by $5$', 'Multiply by $5$', 'Subtract $5$', 'Add $5$'] },
            { label: 'Final answer:', options: ['$x = 4$', '$x = 20$', '$x = 12$', '$x = 100$'] },
          ],
          correctAnswers: ['Add $4$ to both sides', '$5x = 20$', 'Divide by $5$', '$x = 4$'],
          hint1: 'The constant ($-4$) is farthest from $x$, so undo it first by adding $4$.',
          hint2: 'Adding $4$ to both sides: $5x - 4 + 4 = 16 + 4$ gives $5x = 20$.',
          hint3: 'Now $5x = 20$; divide both sides by $5$ to get $x = 4$.',
          explanation: '$5x - 4 = 16 \\Rightarrow 5x = 20 \\Rightarrow x = 4$. First undo the subtraction (add $4$), then undo the multiplication (divide by $5$).',
        },
      },
      {
        id: 'soe3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $3x + 7 = 22$, which step comes **first**?',
              options: ['Subtract $7$ from both sides', 'Divide both sides by $3$', 'Add $7$ to both sides', 'Multiply both sides by $3$'],
              correctAnswer: 0,
              explanation: 'Undo the constant first. Subtract $7$: $3x = 15$. Then divide by $3$ to get $x = 5$. Doing the division first would be much messier.',
            },
            {
              question: 'Solve $4x - 9 = 11$.',
              options: ['$x = 5$', '$x = 20$', '$x = 0.5$', '$x = 80$'],
              correctAnswer: 0,
              explanation: 'Add $9$: $4x = 20$. Divide by $4$: $x = 5$. Check: $4 \\cdot 5 - 9 = 20 - 9 = 11$ ✓.',
            },
          ],
        },
      },
      {
        id: 'soe3-drill',
        type: 'input-boxes' as const,
        content: `**Solve Two-Step Equations** 🧮

Solve for the variable. Enter just the number.

**1)** $2x + 5 = 17 \\;\\Rightarrow\\; x = \\,?$
**2)** $3x - 4 = 20 \\;\\Rightarrow\\; x = \\,?$
**3)** $\\dfrac{x}{4} + 2 = 6 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '8', '16'],
          hint1: '$2x + 5 = 17$: subtract $5$ → $2x = 12$, then divide by $2$.',
          hint2: '$3x - 4 = 20$: add $4$ → $3x = 24$, then divide by $3$.',
          hint3: '$x/4 + 2 = 6$: subtract $2$ → $x/4 = 4$, then multiply by $4$.',
          explanation: '1) $2x = 12 \\Rightarrow x = 6$.  2) $3x = 24 \\Rightarrow x = 8$.  3) $x/4 = 4 \\Rightarrow x = 16$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-equations-prealg',
    sections: [
      {
        id: 'soe4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One- and Two-Step Equations

**Part 4 of 5 — Negatives, Fractions & Word Problems**

---

> 🔑 **The Idea:** The same two rules — *use inverses* and *do it to both sides* — handle negatives, fraction coefficients, and real-world problems. Only the numbers change.`,
      },
      {
        id: 'soe4-negatives',
        type: 'text' as const,
        content: `## Equations with Negative Numbers

The rules don't change with negatives — just track the signs carefully.

### Example: $x + 9 = 4$

Subtract $9$ from both sides:

$$x = 4 - 9 = -5$$

> ✅ **Check:** $-5 + 9 = 4$ ✓

### Example: $-3x = 21$

The variable is multiplied by $-3$, so divide both sides by $-3$:

$$x = \\frac{21}{-3} = -7$$

> ✅ **Check:** $-3 \\cdot (-7) = 21$ ✓

> ⚠️ Dividing by a **negative** flips the sign. A positive divided by a negative is negative.`,
      },
      {
        id: 'soe4-neg-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x + 12 = 5$.',
              options: ['$x = -7$', '$x = 7$', '$x = 17$', '$x = -17$'],
              correctAnswer: 0,
              explanation: 'Subtract $12$ from both sides: $x = 5 - 12 = -7$. Check: $-7 + 12 = 5$ ✓.',
            },
            {
              question: 'Solve $-4x = 20$.',
              options: ['$x = -5$', '$x = 5$', '$x = -80$', '$x = 16$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $-4$: $x = 20 \\div (-4) = -5$. Check: $-4 \\cdot (-5) = 20$ ✓.',
            },
          ],
        },
      },
      {
        id: 'soe4-fractions',
        type: 'text' as const,
        content: `## Fraction Coefficients

When the variable is multiplied by a **fraction**, multiply both sides by that fraction's **reciprocal** (flip it).

### Example: $\\dfrac{2}{3}x = 8$

The reciprocal of $\\dfrac{2}{3}$ is $\\dfrac{3}{2}$. Multiply both sides by $\\dfrac{3}{2}$:

$$\\frac{3}{2} \\cdot \\frac{2}{3}x = \\frac{3}{2} \\cdot 8$$
$$x = \\frac{3 \\cdot 8}{2} = \\frac{24}{2} = 12$$

> ✅ **Check:** $\\dfrac{2}{3} \\cdot 12 = \\dfrac{24}{3} = 8$ ✓

> 💡 Multiplying by the reciprocal works because $\\dfrac{3}{2} \\cdot \\dfrac{2}{3} = 1$, leaving the variable alone.`,
      },
      {
        id: 'soe4-translate',
        type: 'text' as const,
        content: `## Turning Words into Equations

Word problems become solvable once you translate them. Watch for these signal words:

| Words | Math |
|-------|------|
| sum, more than, increased by | $+$ |
| difference, less than, decreased by | $-$ |
| product, times, of | $\\times$ |
| quotient, per, split equally | $\\div$ |
| is, equals, results in | $=$ |

### Example

> *"Five more than twice a number is $17$. Find the number."*

"Twice a number" is $2x$; "five more than" that is $2x + 5$; "is $17$" gives $= 17$:

$$2x + 5 = 17 \\;\\Rightarrow\\; 2x = 12 \\;\\Rightarrow\\; x = 6$$

The number is $\\mathbf{6}$.

> ⚠️ **"Less than" reverses the order.** "$3$ less than a number" is $x - 3$, **not** $3 - x$.`,
      },
      {
        id: 'soe4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate the Words** 🔽

Choose the equation that matches each sentence. ($n$ = the unknown number.)`,
        exercise: {
          dropdowns: [
            { label: '"Seven more than a number is $15$."', options: ['$n + 7 = 15$', '$7 - n = 15$', '$7n = 15$', '$n - 7 = 15$'] },
            { label: '"Three times a number is $21$."', options: ['$3n = 21$', '$n + 3 = 21$', '$n - 3 = 21$', '$\\dfrac{n}{3} = 21$'] },
            { label: '"Four less than a number is $10$."', options: ['$n - 4 = 10$', '$4 - n = 10$', '$n + 4 = 10$', '$4n = 10$'] },
          ],
          correctAnswers: ['$n + 7 = 15$', '$3n = 21$', '$n - 4 = 10$'],
          hint1: '"More than" means addition; "times" means multiplication.',
          hint2: '"Less than" means subtraction — and it reverses the order: "$4$ less than $n$" is $n - 4$.',
          hint3: 'Match the keyword to its operation, then attach the $= $ to the "is" value.',
          explanation: '"$7$ more than $n$" $= n + 7$. "$3$ times $n$" $= 3n$. "$4$ less than $n$" $= n - 4$ (not $4 - n$).',
        },
      },
      {
        id: 'soe4-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each. Negative answers and fractions are fine (write fractions like $-5/2$).

**1)** $x + 15 = 8 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{3}{4}x = 9 \\;\\Rightarrow\\; x = \\,?$
**3)** *"Six less than a number is $10$."* The number is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-7', '12', '16'],
          hint1: '$x + 15 = 8$: subtract $15$ → $x = 8 - 15$.',
          hint2: '$\\frac{3}{4}x = 9$: multiply by the reciprocal $\\frac{4}{3}$ → $x = 9 \\cdot \\frac{4}{3}$.',
          hint3: '"$6$ less than a number is $10$" translates to $n - 6 = 10$, so add $6$.',
          explanation: '1) $x = 8 - 15 = -7$.  2) $x = 9 \\cdot \\frac{4}{3} = \\frac{36}{3} = 12$.  3) $n - 6 = 10 \\Rightarrow n = 16$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-equations-prealg',
    sections: [
      {
        id: 'soe5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One- and Two-Step Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) check solutions, (2) solve one-step equations with inverses, (3) solve two-step equations in reverse order, and (4) handle negatives, fractions, and word problems. Let's put it all together.`,
      },
      {
        id: 'soe5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Equation type | What to do |
|---------------|-----------|
| $x + a = b$ | Subtract $a$ from both sides |
| $x - a = b$ | Add $a$ to both sides |
| $ax = b$ | Divide both sides by $a$ |
| $\\dfrac{x}{a} = b$ | Multiply both sides by $a$ |
| $ax + b = c$ (two-step) | Subtract $b$, **then** divide by $a$ |
| $\\dfrac{a}{b}x = c$ | Multiply by the reciprocal $\\dfrac{b}{a}$ |

> 🔑 **Two golden rules:** Use the **inverse operation**, and **do the same thing to both sides**. For two-step equations, undo the $+/-$ **before** the $\\times/\\div$.

> ⚠️ Always **check** by substituting your answer back into the original equation.`,
      },
      {
        id: 'soe5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{x}{6} = 7$.',
              options: ['$x = 42$', '$x = 13$', '$x = 1$', '$x = \\dfrac{7}{6}$'],
              correctAnswer: 0,
              explanation: 'The variable is divided by $6$, so multiply both sides by $6$: $x = 7 \\cdot 6 = 42$. Check: $42 \\div 6 = 7$ ✓.',
            },
            {
              question: 'Solve $7x - 2 = 33$.',
              options: ['$x = 5$', '$x = 7$', '$x = \\dfrac{31}{7}$', '$x = 35$'],
              correctAnswer: 0,
              explanation: 'Add $2$: $7x = 35$. Divide by $7$: $x = 5$. Check: $7 \\cdot 5 - 2 = 35 - 2 = 33$ ✓.',
            },
          ],
        },
      },
      {
        id: 'soe5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

Solve each. Enter just the number.

**1)** $x - 14 = 6 \\;\\Rightarrow\\; x = \\,?$
**2)** $9x = 72 \\;\\Rightarrow\\; x = \\,?$
**3)** $5x + 8 = 43 \\;\\Rightarrow\\; x = \\,?$
**4)** $-6x = 30 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['20', '8', '7', '-5'],
          hint1: '$x - 14 = 6$: add $14$. And $9x = 72$: divide by $9$.',
          hint2: '$5x + 8 = 43$: subtract $8$ → $5x = 35$, then divide by $5$.',
          hint3: '$-6x = 30$: divide by $-6$; a positive over a negative is negative.',
          explanation: '1) $x = 6 + 14 = 20$.  2) $x = 72 \\div 9 = 8$.  3) $5x = 35 \\Rightarrow x = 7$.  4) $x = 30 \\div (-6) = -5$.',
        },
      },
      {
        id: 'soe5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'To solve $x + 8 = 3$, you should:',
              options: ['Subtract $8$ from both sides', 'Add $8$ to both sides', 'Divide both sides by $8$', 'Multiply both sides by $8$'],
              correctAnswer: 0,
              explanation: 'Since $8$ is added to $x$, undo it by subtracting $8$ from both sides: $x = 3 - 8 = -5$.',
            },
            {
              question: 'Solve $4x + 6 = 30$.',
              options: ['$x = 6$', '$x = 9$', '$x = 24$', '$x = 7.5$'],
              correctAnswer: 0,
              explanation: 'Subtract $6$: $4x = 24$. Divide by $4$: $x = 6$. Check: $4 \\cdot 6 + 6 = 24 + 6 = 30$ ✓.',
            },
            {
              question: '"Two more than three times a number is $14$." What is the number?',
              options: ['$4$', '$6$', '$5$', '$12$'],
              correctAnswer: 0,
              explanation: 'Translate: $3n + 2 = 14$. Subtract $2$: $3n = 12$. Divide by $3$: $n = 4$. Check: $3 \\cdot 4 + 2 = 14$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
