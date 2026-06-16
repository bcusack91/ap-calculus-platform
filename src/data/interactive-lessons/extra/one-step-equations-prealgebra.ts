import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving One-Step Equations (Pre-Algebra).
 * Registry key: 'one-step-equations-prealgebra' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'one-step-equations-prealgebra',
    sections: [
      {
        id: 'ose1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 1 of 5 — Equations, Balance & Inverse Operations**

---

### Topics in This Part

| Section |
|---------|
| What Is an Equation? |
| The Balance Idea |
| Inverse Operations |

> 🔑 **Key Concept:** An equation is a statement that two things are **equal**. To *solve* one, you find the value of the variable that makes the statement true — and you do it by keeping both sides perfectly **balanced**.`,
      },
      {
        id: 'ose1-what',
        type: 'text' as const,
        content: `## What Is an Equation?

An **equation** has an equals sign $=$ with an expression on each side:

$$x + 4 = 9$$

The letter $x$ is the **variable** — an unknown number we want to find. **Solving** the equation means finding the value of $x$ that makes the left side *truly equal* the right side.

For $x + 4 = 9$, the answer is $x = 5$, because $5 + 4 = 9$. ✓

> 💡 A **one-step** equation needs exactly **one** operation to undo. $x + 4 = 9$ has just an addition to undo, so it takes one step. We'll build all four types: $+$, $-$, $\\times$, and $\\div$.

### Equation vs. Expression

| | Has an $=$ sign? | Can you "solve" it? |
|---|---|---|
| Expression: $x + 4$ | No | No — you can only simplify it |
| Equation: $x + 4 = 9$ | Yes | Yes — solve to get $x = 5$ |`,
      },
      {
        id: 'ose1-id-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which one of these is an *equation*?',
              options: ['$7x - 2$', '$x - 6 = 10$', '$3 + 8 + x$', '$\\frac{x}{5}$'],
              correctAnswer: 1,
              explanation: 'An equation must contain an equals sign $=$. Only $x - 6 = 10$ has one — the others are expressions you can simplify but not "solve."',
            },
            {
              question: 'What does it mean to *solve* the equation $x + 4 = 9$?',
              options: [
                'Add up everything on the left side',
                'Find the value of $x$ that makes both sides equal',
                'Move the $4$ to a new line',
                'Rewrite it without an equals sign',
              ],
              correctAnswer: 1,
              explanation: 'Solving means finding the number for $x$ that makes the statement true. Here $x = 5$, since $5 + 4 = 9$. ✓',
            },
          ],
        },
      },
      {
        id: 'ose1-balance',
        type: 'text' as const,
        content: `## The Balance Idea

Picture an equation as a **balance scale**. The $=$ sign is the pivot in the middle, and both sides weigh the same.

$$\\underbrace{x + 4}_{\\text{left pan}} \\;=\\; \\underbrace{9}_{\\text{right pan}}$$

> 🔑 **The Golden Rule of Equations:** Whatever you do to **one** side, you **must** do to the **other** side. This keeps the scale balanced and the equation true.

If you remove $4$ from the left pan only, the scale tips — the sides are no longer equal. But if you remove $4$ from **both** pans, it stays level:

$$x + 4 - 4 = 9 - 4 \\;\\Rightarrow\\; x = 5$$

That single balanced move is the whole secret to solving equations.`,
      },
      {
        id: 'ose1-balance-check',
        type: 'dropdown-select' as const,
        content: `**Keep It Balanced** 🔽

To keep each equation balanced, choose what you must do to the **other** side.`,
        exercise: {
          dropdowns: [
            { label: 'You subtract $3$ from the left side. To the right side you must:', options: ['subtract $3$', 'add $3$', 'do nothing', 'subtract $x$'] },
            { label: 'You divide the left side by $2$. To the right side you must:', options: ['multiply by $2$', 'divide by $2$', 'subtract $2$', 'do nothing'] },
            { label: 'You add $10$ to the right side. To the left side you must:', options: ['add $10$', 'subtract $10$', 'multiply by $10$', 'do nothing'] },
          ],
          correctAnswers: ['subtract $3$', 'divide by $2$', 'add $10$'],
          hint1: 'The Golden Rule: do the **same** thing to both sides — the same operation with the same number.',
          hint2: 'If you subtract $3$ from one side, you subtract $3$ from the other. Matching operations keep the scale level.',
          hint3: 'Whatever happens on one pan must happen identically on the other: same operation, same value.',
          explanation: 'Balance means identical moves on both sides: subtract $3$ both sides, divide both sides by $2$, add $10$ both sides. Anything else tips the scale.',
        },
      },
      {
        id: 'ose1-inverse',
        type: 'text' as const,
        content: `## Inverse Operations

To get the variable alone, you **undo** the operation attached to it. The tool for undoing is an **inverse operation** — an operation that reverses another.

| Operation | Its Inverse |
|-----------|-------------|
| Addition $+$ | Subtraction $-$ |
| Subtraction $-$ | Addition $+$ |
| Multiplication $\\times$ | Division $\\div$ |
| Division $\\div$ | Multiplication $\\times$ |

**The plan for every one-step equation:**

1. Look at what is being done to the variable.
2. Do the **inverse** to **both** sides.
3. The variable ends up alone — that's your answer.

> 💡 Example: In $x + 4 = 9$, the $4$ is **added**, so you **subtract** $4$ from both sides. In $5x = 20$, the $x$ is **multiplied** by $5$, so you **divide** both sides by $5$.

You now have the two ideas the whole topic rests on: **balance** and **inverse operations**. In Part 2 we put them to work with addition and subtraction.`,
      },
      {
        id: 'ose1-inverse-check',
        type: 'multiple-choice' as const,
        content: `**Pick the Inverse** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the equation $x - 7 = 2$, the $7$ is being **subtracted**. To undo it you should:',
              options: ['subtract $7$ from both sides', 'add $7$ to both sides', 'multiply both sides by $7$', 'divide both sides by $7$'],
              correctAnswer: 1,
              explanation: 'The inverse of subtraction is addition. Add $7$ to both sides: $x - 7 + 7 = 2 + 7$, giving $x = 9$. ✓',
            },
            {
              question: 'In $6x = 18$, the variable is being **multiplied** by $6$. To undo it you should:',
              options: ['add $6$ to both sides', 'subtract $6$ from both sides', 'divide both sides by $6$', 'multiply both sides by $6$'],
              correctAnswer: 2,
              explanation: 'The inverse of multiplication is division. Divide both sides by $6$: $\\frac{6x}{6} = \\frac{18}{6}$, giving $x = 3$. ✓',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'one-step-equations-prealgebra',
    sections: [
      {
        id: 'ose2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 2 of 5 — Addition & Subtraction Equations**

---

> 🔑 **The Idea:** When a number is **added** to the variable, **subtract** it from both sides. When a number is **subtracted**, **add** it to both sides. Inverse operation, both sides, done.`,
      },
      {
        id: 'ose2-add',
        type: 'text' as const,
        content: `## Equations with Addition

When something is **added** to the variable, undo it by **subtracting** from both sides.

### Worked Example: $x + 6 = 15$

The $6$ is added to $x$, so subtract $6$ from **both** sides:

$$x + 6 - 6 = 15 - 6$$
$$x = 9$$

> ✅ **Check:** Put $9$ back in: $9 + 6 = 15$ ✓

### Worked Example: $13 = n + 8$

The variable can be on the **right** — that's fine. Subtract $8$ from both sides:

$$13 - 8 = n + 8 - 8$$
$$5 = n$$

> 💡 $5 = n$ means exactly the same as $n = 5$. The equals sign reads both directions.`,
      },
      {
        id: 'ose2-add-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $x + 11 = 20$, what is the correct first move?',
              options: ['Subtract $11$ from both sides', 'Add $11$ to both sides', 'Divide both sides by $11$', 'Subtract $20$ from both sides'],
              correctAnswer: 0,
              explanation: 'The $11$ is added, so subtract $11$ from both sides: $x = 20 - 11 = 9$. ✓',
            },
            {
              question: 'Solve $x + 7 = 7$.',
              options: ['$x = 14$', '$x = 1$', '$x = 0$', '$x = 7$'],
              correctAnswer: 2,
              explanation: 'Subtract $7$ from both sides: $x = 7 - 7 = 0$. And $0 + 7 = 7$ ✓. Zero is a perfectly valid solution.',
            },
          ],
        },
      },
      {
        id: 'ose2-sub',
        type: 'text' as const,
        content: `## Equations with Subtraction

When a number is **subtracted** from the variable, undo it by **adding** to both sides.

### Worked Example: $x - 5 = 12$

The $5$ is subtracted, so add $5$ to both sides:

$$x - 5 + 5 = 12 + 5$$
$$x = 17$$

> ✅ **Check:** $17 - 5 = 12$ ✓

### Worked Example: $y - 9 = -3$

A **negative** result is allowed. Add $9$ to both sides:

$$y - 9 + 9 = -3 + 9$$
$$y = 6$$

> ⚠️ **Watch the sign of the answer side.** $-3 + 9 = 6$, not $-12$. Adding a positive moves you **up** the number line: from $-3$, count up $9$ to land on $6$.`,
      },
      {
        id: 'ose2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each equation for the variable. Enter just the number.

**1)** $x + 4 = 11 \\;\\Rightarrow\\; x = \\,?$
**2)** $x - 8 = 5 \\;\\Rightarrow\\; x = \\,?$
**3)** $x + 10 = 3 \\;\\Rightarrow\\; x = \\,?$  *(answer may be negative)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '13', '-7'],
          hint1: '1) Subtract $4$ from both sides: $x = 11 - 4 = 7$.',
          hint2: '2) Add $8$ to both sides: $x = 5 + 8 = 13$.',
          hint3: '3) Subtract $10$ from both sides: $x = 3 - 10 = -7$. Going below zero is fine.',
          explanation: '1) $x = 7$ (since $7+4=11$).  2) $x = 13$ (since $13-8=5$).  3) $x = -7$ (since $-7+10=3$).',
        },
      },
      {
        id: 'ose2-recap',
        type: 'text' as const,
        content: `## One Rule, Two Directions

Notice that addition and subtraction equations use the *same* logic — just pointed the opposite way:

- See a $+$? **Subtract** it from both sides.
- See a $-$? **Add** it to both sides.

> 💡 A quick way to think about it: "move" the number to the other side and **flip its sign**. In $x + 6 = 15$, the $+6$ becomes $-6$ on the right: $x = 15 - 6 = 9$. That shortcut is really just the inverse-operation rule in disguise.

Let's walk through the reasoning one step at a time.`,
      },
      {
        id: 'ose2-order',
        type: 'dropdown-select' as const,
        content: `**Order the Solution** 🔽

You are solving $x - 6 = 10$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'The $6$ is being:', options: ['subtracted', 'added', 'multiplied', 'divided'] },
            { label: 'So to both sides you should:', options: ['add $6$', 'subtract $6$', 'multiply by $6$', 'divide by $6$'] },
            { label: 'The solution is:', options: ['$x = 16$', '$x = 4$', '$x = -16$', '$x = 60$'] },
          ],
          correctAnswers: ['subtracted', 'add $6$', '$x = 16$'],
          hint1: 'In $x - 6$, the $6$ is being subtracted from $x$.',
          hint2: 'Undo subtraction with its inverse — addition — on both sides.',
          hint3: 'Add $6$ to both sides: $x = 10 + 6 = 16$. Check: $16 - 6 = 10$ ✓',
          explanation: '$x - 6 = 10$: the $6$ is subtracted, so add $6$ to both sides to get $x = 16$. ✓',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'one-step-equations-prealgebra',
    sections: [
      {
        id: 'ose3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 3 of 5 — Multiplication & Division Equations**

---

> 🔑 **The Idea:** When the variable is **multiplied** by a number, **divide** both sides by it. When the variable is **divided**, **multiply** both sides by it.`,
      },
      {
        id: 'ose3-mult',
        type: 'text' as const,
        content: `## Equations with Multiplication

$5x$ means "$5$ times $x$." The $5$ is a **coefficient** stuck to the variable by multiplication. Undo it by **dividing** both sides by that coefficient.

### Worked Example: $5x = 20$

$$\\frac{5x}{5} = \\frac{20}{5}$$
$$x = 4$$

> ✅ **Check:** $5 \\cdot 4 = 20$ ✓

### Worked Example: $-3x = 21$

Divide both sides by $-3$. A negative divided into a positive gives a **negative**:

$$\\frac{-3x}{-3} = \\frac{21}{-3}$$
$$x = -7$$

> ✅ **Check:** $-3 \\cdot (-7) = 21$ ✓

> ⚠️ **Sign rule:** dividing by a negative coefficient flips the sign of the answer. Track that minus sign carefully.`,
      },
      {
        id: 'ose3-mult-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $8x = 56$, you should:',
              options: ['subtract $8$ from both sides', 'divide both sides by $8$', 'multiply both sides by $8$', 'add $8$ to both sides'],
              correctAnswer: 1,
              explanation: 'The $x$ is multiplied by $8$, so divide both sides by $8$: $x = 56 \\div 8 = 7$. ✓',
            },
            {
              question: 'Solve $-4x = 24$.',
              options: ['$x = 6$', '$x = -6$', '$x = 20$', '$x = -96$'],
              correctAnswer: 1,
              explanation: 'Divide both sides by $-4$: $x = 24 \\div (-4) = -6$. Check: $-4 \\cdot (-6) = 24$ ✓.',
            },
          ],
        },
      },
      {
        id: 'ose3-div',
        type: 'text' as const,
        content: `## Equations with Division

$\\dfrac{x}{4}$ means "$x$ divided by $4$." Undo the division by **multiplying** both sides by that number.

### Worked Example: $\\dfrac{x}{4} = 6$

$$\\frac{x}{4} \\cdot 4 = 6 \\cdot 4$$
$$x = 24$$

> ✅ **Check:** $\\dfrac{24}{4} = 6$ ✓

### Worked Example: $\\dfrac{n}{3} = -5$

Multiply both sides by $3$:

$$n = -5 \\cdot 3 = -15$$

> 💡 **Key contrast:** if the variable is *divided* by a number, you **multiply** to undo it. If it is *multiplied*, you **divide**. Always do the opposite.`,
      },
      {
        id: 'ose3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each equation for the variable.

**1)** $7x = 42 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{x}{5} = 9 \\;\\Rightarrow\\; x = \\,?$
**3)** $-6x = 30 \\;\\Rightarrow\\; x = \\,?$  *(answer may be negative)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '45', '-5'],
          hint1: '1) Divide both sides by $7$: $x = 42 \\div 7 = 6$.',
          hint2: '2) Multiply both sides by $5$: $x = 9 \\cdot 5 = 45$.',
          hint3: '3) Divide both sides by $-6$: $x = 30 \\div (-6) = -5$.',
          explanation: '1) $x = 6$ (since $7\\cdot 6=42$).  2) $x = 45$ (since $45 \\div 5 = 9$).  3) $x = -5$ (since $-6 \\cdot -5 = 30$).',
        },
      },
      {
        id: 'ose3-spot',
        type: 'text' as const,
        content: `## Spotting Which Inverse to Use

Before solving, ask one question: **how is the variable attached to its number?**

| If the equation shows… | The variable is… | Undo with… |
|------------------------|------------------|------------|
| $7x$ (a number next to $x$) | multiplied | division |
| $\\dfrac{x}{5}$ (a fraction bar under $x$) | divided | multiplication |

> ⚠️ **Don't mix up the four operations.** A coefficient like the $7$ in $7x$ is *not* added — it's multiplied. Adding or subtracting it would be the wrong inverse. Read the equation carefully first, then pick the matching inverse.`,
      },
      {
        id: 'ose3-match',
        type: 'dropdown-select' as const,
        content: `**Match the Move** 🔽

Choose the single operation that solves each equation.`,
        exercise: {
          dropdowns: [
            { label: '$9x = 27$', options: ['divide both sides by $9$', 'multiply both sides by $9$', 'subtract $9$ both sides', 'add $9$ both sides'] },
            { label: '$\\dfrac{x}{2} = 8$', options: ['multiply both sides by $2$', 'divide both sides by $2$', 'subtract $2$ both sides', 'add $2$ both sides'] },
            { label: '$x + 2 = 8$', options: ['subtract $2$ both sides', 'divide both sides by $2$', 'multiply both sides by $2$', 'add $2$ both sides'] },
          ],
          correctAnswers: ['divide both sides by $9$', 'multiply both sides by $2$', 'subtract $2$ both sides'],
          hint1: 'Look at how the variable is attached: multiplied, divided, or has a number added.',
          hint2: 'Multiplication → divide. Division → multiply. Addition → subtract.',
          hint3: '$9x$ needs $\\div 9$; $\\frac{x}{2}$ needs $\\times 2$; $x+2$ needs $-2$. Always the inverse.',
          explanation: 'Each move is the inverse of the operation attached to the variable: $\\div 9$, $\\times 2$, and $-2$ respectively.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'one-step-equations-prealgebra',
    sections: [
      {
        id: 'ose4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 4 of 5 — Fractions, Decimals & Checking Your Work**

---

> 🔑 **The Idea:** The exact same rules — inverse operation, both sides — work when the numbers are fractions or decimals. And **checking** your answer catches mistakes every time.`,
      },
      {
        id: 'ose4-decimals',
        type: 'text' as const,
        content: `## Equations with Decimals

Decimals follow the **same** rules. The operation tells you what to undo.

### Worked Example: $x + 2.5 = 6$

The $2.5$ is added, so subtract $2.5$ from both sides:

$$x = 6 - 2.5 = 3.5$$

> ✅ **Check:** $3.5 + 2.5 = 6$ ✓

### Worked Example: $0.4x = 2$

The $x$ is multiplied by $0.4$, so divide both sides by $0.4$:

$$x = \\frac{2}{0.4} = 5$$

> 💡 Dividing by a decimal less than $1$ makes the answer **bigger** — here $2 \\div 0.4 = 5$. Check: $0.4 \\cdot 5 = 2$ ✓`,
      },
      {
        id: 'ose4-dec-check',
        type: 'input-boxes' as const,
        content: `**Decimal Drill** 🧮

Solve each equation. Decimals are fine in your answer.

**1)** $x - 1.2 = 4 \\;\\Rightarrow\\; x = \\,?$
**2)** $x + 3.5 = 5 \\;\\Rightarrow\\; x = \\,?$
**3)** $2x = 7 \\;\\Rightarrow\\; x = \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5.2', '1.5', '3.5'],
          hint1: '1) Add $1.2$ to both sides: $x = 4 + 1.2 = 5.2$.',
          hint2: '2) Subtract $3.5$ from both sides: $x = 5 - 3.5 = 1.5$.',
          hint3: '3) Divide both sides by $2$: $x = 7 \\div 2 = 3.5$.',
          explanation: '1) $x = 5.2$.  2) $x = 1.5$.  3) $x = 3.5$. Same inverse-operation rules, just with decimal numbers.',
        },
      },
      {
        id: 'ose4-fractions',
        type: 'text' as const,
        content: `## Equations with Fractions

### Adding or Subtracting a Fraction

### Worked Example: $x - \\dfrac{1}{4} = \\dfrac{3}{4}$

Add $\\dfrac{1}{4}$ to both sides. With a common denominator, just add the numerators:

$$x = \\frac{3}{4} + \\frac{1}{4} = \\frac{4}{4} = 1$$

> ✅ **Check:** $1 - \\dfrac{1}{4} = \\dfrac{3}{4}$ ✓

### A Fraction Times the Variable

### Worked Example: $\\dfrac{2}{3}x = 8$

To undo multiplication by a fraction, **multiply by its reciprocal** (flip it). The reciprocal of $\\dfrac{2}{3}$ is $\\dfrac{3}{2}$:

$$\\frac{3}{2} \\cdot \\frac{2}{3}x = \\frac{3}{2} \\cdot 8$$
$$x = \\frac{3 \\cdot 8}{2} = \\frac{24}{2} = 12$$

> ✅ **Check:** $\\dfrac{2}{3} \\cdot 12 = \\dfrac{24}{3} = 8$ ✓

> 💡 **Reciprocal trick:** $\\dfrac{a}{b}x = c$ is solved by $x = \\dfrac{b}{a}\\cdot c$. Flipping the fraction turns "divide" trouble into easy multiplication.`,
      },
      {
        id: 'ose4-frac-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $\\dfrac{3}{4}x = 9$, you multiply both sides by the reciprocal of $\\dfrac{3}{4}$. That reciprocal is:',
              options: ['$\\frac{4}{3}$', '$\\frac{3}{4}$', '$\\frac{1}{4}$', '$\\frac{9}{4}$'],
              correctAnswer: 0,
              explanation: 'The reciprocal flips the fraction: $\\frac{3}{4} \\to \\frac{4}{3}$. Then $x = \\frac{4}{3}\\cdot 9 = 12$. ✓',
            },
            {
              question: 'Solve $\\dfrac{1}{2}x = 7$.',
              options: ['$x = 14$', '$x = 3.5$', '$x = 7$', '$x = \\frac{7}{2}$'],
              correctAnswer: 0,
              explanation: 'Multiply both sides by the reciprocal $\\frac{2}{1} = 2$: $x = 2 \\cdot 7 = 14$. Check: $\\frac{1}{2}\\cdot 14 = 7$ ✓.',
            },
          ],
        },
      },
      {
        id: 'ose4-checking',
        type: 'text' as const,
        content: `## Always Check Your Answer

**Checking** means substituting your answer back into the *original* equation and confirming both sides match. It catches sign slips and arithmetic errors instantly.

### Example: did we solve $x + 9 = 4$ correctly with $x = -5$?

Substitute $x = -5$ into the original:

$$-5 + 9 = 4 \\;?\\quad\\Rightarrow\\quad 4 = 4 \\;✓$$

It checks, so $x = -5$ is correct.

> ⚠️ **Common trap:** if your check gives a **false** statement like $7 = 4$, you made an error — usually a dropped negative sign or an arithmetic slip. Re-solve and check again.

You can now solve any one-step equation with whole numbers, negatives, decimals, or fractions — and verify it. In Part 5 we turn real-world sentences into equations and finish with an Exit Quiz.`,
      },
      {
        id: 'ose4-check-drill',
        type: 'dropdown-select' as const,
        content: `**Check the Work** 🔽

For each equation, a proposed solution is given. Decide whether it **checks** (substitute it back).`,
        exercise: {
          dropdowns: [
            { label: '$x + 3 = 10$, proposed $x = 7$:', options: ['checks ✓', 'wrong ✗'] },
            { label: '$5x = 35$, proposed $x = 30$:', options: ['checks ✓', 'wrong ✗'] },
            { label: '$x - 4 = -1$, proposed $x = 3$:', options: ['checks ✓', 'wrong ✗'] },
          ],
          correctAnswers: ['checks ✓', 'wrong ✗', 'checks ✓'],
          hint1: 'Substitute the proposed value into the left side and see if it equals the right side.',
          hint2: '$5 \\cdot 30 = 150$, not $35$ — so that one is wrong. The correct solution is $x = 7$.',
          hint3: '$7 + 3 = 10$ ✓; $5\\cdot 30 = 150 \\ne 35$ ✗; $3 - 4 = -1$ ✓.',
          explanation: '$7+3=10$ ✓.  $5\\cdot 30 = 150 \\ne 35$ ✗ (should be $x=7$).  $3-4=-1$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'one-step-equations-prealgebra',
    sections: [
      {
        id: 'ose5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving One-Step Equations

**Part 5 of 5 — Word Problems, Mixed Practice & Mastery Check**

---

You can now solve one-step equations of every kind. Let's translate real sentences into equations, mix all four operations together, and finish with an Exit Quiz.`,
      },
      {
        id: 'ose5-words',
        type: 'text' as const,
        content: `## Turning Words into Equations

Real problems arrive as sentences. Translate the words into symbols, then solve in one step.

| Words | Symbols |
|-------|---------|
| a number **increased by** $5$ | $x + 5$ |
| a number **decreased by** $3$ | $x - 3$ |
| **twice** a number / **product of** $4$ and a number | $2x$ / $4x$ |
| a number **split into** $3$ equal parts | $\\dfrac{x}{3}$ |
| **"is" / "equals"** | $=$ |

### Worked Example

*"A number increased by $7$ is $20$. Find the number."*

Translate: $x + 7 = 20$. Subtract $7$ from both sides:

$$x = 20 - 7 = 13$$

> ✅ **Check:** $13 + 7 = 20$ ✓

### Worked Example

*"Four times a number equals $36$. Find the number."*

Translate: $4x = 36$. Divide both sides by $4$:

$$x = 36 \\div 4 = 9 \\quad ✓$$`,
      },
      {
        id: 'ose5-words-check',
        type: 'multiple-choice' as const,
        content: `**Translate & Solve** 🎯`,
        exercise: {
          questions: [
            {
              question: '"A number decreased by $8$ is $5$." Which equation matches, and what is the number?',
              options: [
                '$x - 8 = 5$, so $x = 13$',
                '$x + 8 = 5$, so $x = -3$',
                '$8 - x = 5$, so $x = 3$',
                '$8x = 5$, so $x = \\frac{5}{8}$',
              ],
              correctAnswer: 0,
              explanation: '"Decreased by $8$" means $x - 8$, and "is $5$" means $= 5$. So $x - 8 = 5 \\Rightarrow x = 13$. Check: $13 - 8 = 5$ ✓.',
            },
            {
              question: '"The product of a number and $6$ is $48$." Find the number.',
              options: ['$x = 8$', '$x = 42$', '$x = 54$', '$x = 288$'],
              correctAnswer: 0,
              explanation: '"Product of a number and $6$" means $6x$, so $6x = 48 \\Rightarrow x = 48 \\div 6 = 8$. ✓',
            },
          ],
        },
      },
      {
        id: 'ose5-words-tips',
        type: 'text' as const,
        content: `## Three Steps for Any Word Problem

1. **Name the unknown.** Let $x$ stand for "the number" you're looking for.
2. **Translate** the sentence phrase-by-phrase into symbols, with "is" or "equals" becoming $=$.
3. **Solve** the one-step equation and **check** by re-reading the sentence with your answer in place.

> 💡 Watch the key words: *increased by* and *sum* mean $+$; *decreased by* and *less than* mean $-$; *times*, *product*, and *twice* mean $\\times$; *split*, *shared equally*, and *quotient* mean $\\div$.

Now try a few on your own.`,
      },
      {
        id: 'ose5-words-drill',
        type: 'input-boxes' as const,
        content: `**Word-Problem Drill** 🧮

Translate each sentence to a one-step equation and solve. Enter just the number.

**1)** A number increased by $12$ is $30$. The number $= \\,?$
**2)** A number split into $5$ equal parts gives $4$. The number $= \\,?$
**3)** Twice a number is $-18$. The number $= \\,?$  *(answer may be negative)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '20', '-9'],
          hint1: '1) $x + 12 = 30 \\Rightarrow x = 30 - 12 = 18$.',
          hint2: '2) $\\frac{x}{5} = 4 \\Rightarrow x = 4 \\cdot 5 = 20$.',
          hint3: '3) $2x = -18 \\Rightarrow x = -18 \\div 2 = -9$.',
          explanation: '1) $x + 12 = 30$, so $x = 18$.  2) $\\frac{x}{5} = 4$, so $x = 20$.  3) $2x = -18$, so $x = -9$.',
        },
      },
      {
        id: 'ose5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Equation looks like | Variable is… | Do this to both sides |
|---------------------|--------------|-----------------------|
| $x + a = b$ | added to | **subtract** $a$ |
| $x - a = b$ | subtracted from | **add** $a$ |
| $ax = b$ | multiplied by | **divide** by $a$ |
| $\\dfrac{x}{a} = b$ | divided by | **multiply** by $a$ |
| $\\dfrac{a}{b}x = c$ | times a fraction | **multiply** by reciprocal $\\dfrac{b}{a}$ |

> ⚠️ **Always:** keep both sides balanced, watch negative signs, and **check** by substituting your answer into the original equation.`,
      },
      {
        id: 'ose5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x - 15 = -4$.',
              options: ['$x = 11$', '$x = -19$', '$x = 19$', '$x = -11$'],
              correctAnswer: 0,
              explanation: 'Add $15$ to both sides: $x = -4 + 15 = 11$. Check: $11 - 15 = -4$ ✓.',
            },
            {
              question: 'Solve $\\dfrac{x}{6} = -3$.',
              options: ['$x = -18$', '$x = 18$', '$x = -2$', '$x = -\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Multiply both sides by $6$: $x = -3 \\cdot 6 = -18$. Check: $\\frac{-18}{6} = -3$ ✓.',
            },
          ],
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
              question: 'To solve $9 = x - 4$, what should you do to both sides?',
              options: ['add $4$', 'subtract $4$', 'divide by $4$', 'multiply by $4$'],
              correctAnswer: 0,
              explanation: 'The $4$ is subtracted from $x$, so add $4$ to both sides: $9 + 4 = x$, giving $x = 13$. Check: $13 - 4 = 9$ ✓.',
            },
            {
              question: 'Solve $-7x = 49$.',
              options: ['$x = -7$', '$x = 7$', '$x = 42$', '$x = -42$'],
              correctAnswer: 0,
              explanation: 'Divide both sides by $-7$: $x = 49 \\div (-7) = -7$. Check: $-7 \\cdot (-7) = 49$ ✓.',
            },
            {
              question: '"A number divided by $3$ is $8$." What is the number?',
              options: ['$24$', '$11$', '$5$', '$\\frac{8}{3}$'],
              correctAnswer: 0,
              explanation: 'Translate: $\\frac{x}{3} = 8$. Multiply both sides by $3$: $x = 8 \\cdot 3 = 24$. Check: $\\frac{24}{3} = 8$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
