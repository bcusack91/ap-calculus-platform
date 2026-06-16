import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Two-Step Equations (Pre-Algebra).
 * Registry key: 'solving-two-step-equations' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-two-step-equations',
    sections: [
      {
        id: 'tse1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Two-Step Equations

**Part 1 of 5 — The Big Idea: Undoing Operations**

---

### Topics in This Part

| Section |
|---------|
| What a Two-Step Equation Looks Like |
| Inverse Operations (Undoing) |
| The Order: Undo in Reverse |

> 🔑 **Key Concept:** Solving an equation means **getting the variable alone**. A *two-step* equation just took **two** operations to build, so it takes **two** moves to undo — done in the **reverse order**.`,
      },
      {
        id: 'tse1-what',
        type: 'text' as const,
        content: `## What Is a Two-Step Equation?

A **two-step equation** has the variable wrapped in **two** operations. The classic form is:

$$ax + b = c$$

Here the variable $x$ is first **multiplied** by $a$, then a number $b$ is **added**. To solve it you must undo **both**.

### One step vs. two steps

| Equation | Steps to build it | Type |
|----------|-------------------|------|
| $x + 7 = 12$ | add $7$ | one-step |
| $3x = 15$ | multiply by $3$ | one-step |
| $3x + 7 = 22$ | multiply by $3$, **then** add $7$ | **two-step** |
| $\\dfrac{x}{4} - 2 = 5$ | divide by $4$, **then** subtract $2$ | **two-step** |

> 💡 If you see a number stuck to the variable by multiplication **and** a separate number added or subtracted, it's a two-step equation.`,
      },
      {
        id: 'tse1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a two-step equation?',
              options: ['$x - 9 = 4$', '$5x = 40$', '$2x + 3 = 11$', '$x = 6$'],
              correctAnswer: 2,
              explanation: 'In $2x + 3 = 11$ the variable is multiplied by $2$ **and** has $3$ added — two operations. The others involve only one operation.',
            },
            {
              question: 'In the equation $\\frac{x}{5} - 8 = 1$, what two operations are happening to $x$?',
              options: ['divided by $5$, then subtract $8$', 'multiplied by $5$, then add $8$', 'subtract $5$, then divide by $8$', 'multiplied by $8$, then divide by $5$'],
              correctAnswer: 0,
              explanation: '$\\frac{x}{5}$ means $x$ is divided by $5$, and then $8$ is subtracted from the result.',
            },
          ],
        },
      },
      {
        id: 'tse1-inverse',
        type: 'text' as const,
        content: `## Inverse Operations: The Undo Buttons

Every operation has an **inverse** that cancels it out. To free the variable, replace each operation with its inverse.

| Operation | Inverse (undo) |
|-----------|----------------|
| Addition $(+)$ | Subtraction $(-)$ |
| Subtraction $(-)$ | Addition $(+)$ |
| Multiplication $(\\times)$ | Division $(\\div)$ |
| Division $(\\div)$ | Multiplication $(\\times)$ |

> 🔑 **Golden Rule of Equations:** Whatever you do to **one** side, you **must** do to the **other** side. That keeps the equation balanced — like a scale. ⚖️`,
      },
      {
        id: 'tse1-inverse-drill',
        type: 'dropdown-select' as const,
        content: `**Pick the Undo** 🔽

For each operation, choose the inverse operation that cancels it.`,
        exercise: {
          dropdowns: [
            { label: 'To undo $+6$, you:', options: ['subtract $6$', 'add $6$', 'multiply by $6$', 'divide by $6$'] },
            { label: 'To undo $\\times 4$, you:', options: ['divide by $4$', 'multiply by $4$', 'subtract $4$', 'add $4$'] },
            { label: 'To undo $-9$, you:', options: ['add $9$', 'subtract $9$', 'divide by $9$', 'multiply by $9$'] },
          ],
          correctAnswers: ['subtract $6$', 'divide by $4$', 'add $9$'],
          hint1: 'Addition and subtraction undo each other.',
          hint2: 'Multiplication and division undo each other.',
          hint3: 'The inverse of $-9$ (subtracting 9) is adding 9.',
          explanation: 'Inverse pairs: $+$ ↔ $-$ and $\\times$ ↔ $\\div$. Undo $+6$ with $-6$; undo $\\times 4$ with $\\div 4$; undo $-9$ with $+9$.',
        },
      },
      {
        id: 'tse1-order',
        type: 'text' as const,
        content: `## The Order: Undo in REVERSE

When you **build** an expression, you follow order of operations (multiply before adding). When you **undo** it, you go **backwards**.

Think of getting dressed: socks **then** shoes. To undo, you take off shoes **then** socks — reverse order!

### To solve $ax + b = c$:

1. **First undo the $+b$ or $-b$** (the addition/subtraction). ➡️ *clears the loose number*
2. **Then undo the $\\times a$ or $\\div a$** (the multiplication/division). ➡️ *frees the variable*

> ⚠️ **Common mistake:** dividing **before** you've removed the added number. Always peel off the addition/subtraction **first**, then deal with the multiplication/division.`,
      },
      {
        id: 'tse1-order-check',
        type: 'multiple-choice' as const,
        content: `**Order Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $4x + 5 = 21$, what should you do FIRST?',
              options: ['Subtract $5$ from both sides', 'Divide both sides by $4$', 'Add $5$ to both sides', 'Multiply both sides by $4$'],
              correctAnswer: 0,
              explanation: 'Undo in reverse: remove the $+5$ first by subtracting $5$ from both sides, leaving $4x = 16$. Then divide by $4$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-two-step-equations',
    sections: [
      {
        id: 'tse2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Two-Step Equations

**Part 2 of 5 — The Standard Move: $ax + b = c$**

---

> 🔑 **The Recipe:** (1) Subtract or add to clear the constant, (2) Divide by the coefficient, (3) Check by plugging back in.`,
      },
      {
        id: 'tse2-recipe',
        type: 'text' as const,
        content: `## The Two-Step Recipe

To solve $ax + b = c$:

1. **Subtract $b$** from both sides → $ax = c - b$
2. **Divide by $a$** on both sides → $x = \\dfrac{c - b}{a}$
3. **Check** by substituting your answer back in.

### Worked Example: $3x + 7 = 22$

$$3x + 7 = 22$$
$$3x + 7 - 7 = 22 - 7 \\quad\\text{(subtract 7)}$$
$$3x = 15$$
$$\\frac{3x}{3} = \\frac{15}{3} \\quad\\text{(divide by 3)}$$
$$x = 5$$

> ✅ **Check:** $3(5) + 7 = 15 + 7 = 22$ ✓`,
      },
      {
        id: 'tse2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $5x - 4 = 26$

This time the constant is **subtracted**, so we **add** to undo it:

$$5x - 4 = 26$$
$$5x - 4 + 4 = 26 + 4 \\quad\\text{(add 4)}$$
$$5x = 30$$
$$x = \\frac{30}{5} = 6$$

> ✅ **Check:** $5(6) - 4 = 30 - 4 = 26$ ✓

### Worked Example: $2x + 9 = 3$

Answers can be negative — that's perfectly fine:

$$2x + 9 = 3 \\;\\Rightarrow\\; 2x = 3 - 9 = -6 \\;\\Rightarrow\\; x = \\frac{-6}{2} = -3$$

> ✅ **Check:** $2(-3) + 9 = -6 + 9 = 3$ ✓`,
      },
      {
        id: 'tse2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $4x + 3 = 19$.',
              options: ['$x = 4$', '$x = 5$', '$x = 16$', '$x = 22$'],
              correctAnswer: 0,
              explanation: 'Subtract $3$: $4x = 16$. Divide by $4$: $x = 4$. Check: $4(4)+3 = 19$ ✓.',
            },
            {
              question: 'Solve $6x - 5 = 13$.',
              options: ['$x = 3$', '$x = 18$', '$x = \\frac{8}{6}$', '$x = 8$'],
              correctAnswer: 0,
              explanation: 'Add $5$: $6x = 18$. Divide by $6$: $x = 3$. Check: $6(3)-5 = 18-5 = 13$ ✓.',
            },
          ],
        },
      },
      {
        id: 'tse2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $7x + 2 = 30$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — clear the constant:', options: ['$7x = 28$', '$7x = 32$', '$x = 28$', '$9x = 30$'] },
            { label: 'Step 2 — undo the coefficient:', options: ['divide both sides by $7$', 'multiply both sides by $7$', 'subtract $7$', 'add $7$'] },
            { label: 'Final answer:', options: ['$x = 4$', '$x = 28$', '$x = \\frac{32}{7}$', '$x = 5$'] },
          ],
          correctAnswers: ['$7x = 28$', 'divide both sides by $7$', '$x = 4$'],
          hint1: 'Subtract $2$ from both sides: $30 - 2 = 28$.',
          hint2: 'The variable is multiplied by $7$, so undo with division by $7$.',
          hint3: '$\\frac{28}{7} = 4$.',
          explanation: '$7x + 2 = 30 \\Rightarrow 7x = 28 \\Rightarrow x = 4$. Check: $7(4)+2 = 30$ ✓.',
        },
      },
      {
        id: 'tse2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each equation for $x$. Enter just the number.

**1)** $2x + 6 = 14 \\;\\Rightarrow\\; x = \\,?$
**2)** $8x - 3 = 29 \\;\\Rightarrow\\; x = \\,?$
**3)** $5x + 12 = 2 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '4', '-2'],
          hint1: 'Subtract $6$: $2x = 8$, then divide by $2$.',
          hint2: 'Add $3$: $8x = 32$, then divide by $8$.',
          hint3: 'Subtract $12$: $5x = 2 - 12 = -10$, then divide by $5$.',
          explanation: '1) $2x = 8 \\Rightarrow x = 4$.  2) $8x = 32 \\Rightarrow x = 4$.  3) $5x = -10 \\Rightarrow x = -2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-two-step-equations',
    sections: [
      {
        id: 'tse3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Two-Step Equations

**Part 3 of 5 — Division, Negatives & Variable Positions**

---

> 🔑 **Same recipe, new disguises:** equations with $\\dfrac{x}{a}$, a negative coefficient, or the constant written **first** all use the very same two-step plan.`,
      },
      {
        id: 'tse3-division',
        type: 'text' as const,
        content: `## When the Variable Is Divided

If the equation has $\\dfrac{x}{a}$, the variable is **divided** by $a$, so you undo it by **multiplying** by $a$.

### Worked Example: $\\dfrac{x}{4} - 2 = 5$

$$\\frac{x}{4} - 2 = 5$$
$$\\frac{x}{4} = 7 \\quad\\text{(add 2)}$$
$$x = 7 \\cdot 4 = 28 \\quad\\text{(multiply by 4)}$$

> ✅ **Check:** $\\dfrac{28}{4} - 2 = 7 - 2 = 5$ ✓

### Worked Example: $\\dfrac{x}{3} + 6 = 10$

$$\\frac{x}{3} = 4 \\;\\Rightarrow\\; x = 4 \\cdot 3 = 12$$

> ✅ **Check:** $\\dfrac{12}{3} + 6 = 4 + 6 = 10$ ✓`,
      },
      {
        id: 'tse3-division-drill',
        type: 'input-boxes' as const,
        content: `**Multiply to Finish** 🧮

Solve for $x$.

**1)** $\\dfrac{x}{2} + 3 = 9 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{x}{5} - 1 = 4 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '25'],
          hint1: 'Subtract $3$: $\\frac{x}{2} = 6$, then multiply by $2$.',
          hint2: 'Add $1$: $\\frac{x}{5} = 5$, then multiply by $5$.',
          hint3: 'Multiplying undoes the division.',
          explanation: '1) $\\frac{x}{2} = 6 \\Rightarrow x = 12$.  2) $\\frac{x}{5} = 5 \\Rightarrow x = 25$.',
        },
      },
      {
        id: 'tse3-negative',
        type: 'text' as const,
        content: `## Negative Coefficients

A negative number in front of the variable is no problem — just divide by that **negative** number (a negative divisor flips the sign).

### Worked Example: $-3x + 1 = 13$

$$-3x + 1 = 13$$
$$-3x = 12 \\quad\\text{(subtract 1)}$$
$$x = \\frac{12}{-3} = -4 \\quad\\text{(divide by }-3)$$

> ✅ **Check:** $-3(-4) + 1 = 12 + 1 = 13$ ✓

> ⚠️ **Sign care:** When you divide by a negative, watch the sign of the result. $\\dfrac{12}{-3} = -4$, not $+4$.`,
      },
      {
        id: 'tse3-flipped',
        type: 'text' as const,
        content: `## Constant Written First

Sometimes the constant comes **before** the variable term, like $b + ax = c$. The plan is identical — clear the constant, then divide.

### Worked Example: $10 - 2x = 4$

$$10 - 2x = 4$$
$$-2x = -6 \\quad\\text{(subtract 10)}$$
$$x = \\frac{-6}{-2} = 3 \\quad\\text{(divide by }-2)$$

> ✅ **Check:** $10 - 2(3) = 10 - 6 = 4$ ✓

> 💡 The term being **subtracted** ($-2x$) keeps its negative sign when you isolate it. A negative divided by a negative is positive.`,
      },
      {
        id: 'tse3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $-4x + 5 = 17$.',
              options: ['$x = -3$', '$x = 3$', '$x = -\\frac{11}{2}$', '$x = 5.5$'],
              correctAnswer: 0,
              explanation: 'Subtract $5$: $-4x = 12$. Divide by $-4$: $x = -3$. Check: $-4(-3)+5 = 12+5 = 17$ ✓.',
            },
            {
              question: 'Solve $8 - 3x = 2$.',
              options: ['$x = 2$', '$x = -2$', '$x = \\frac{10}{3}$', '$x = 6$'],
              correctAnswer: 0,
              explanation: 'Subtract $8$: $-3x = -6$. Divide by $-3$: $x = 2$. Check: $8 - 3(2) = 8-6 = 2$ ✓.',
            },
          ],
        },
      },
      {
        id: 'tse3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Right First Step** 🔽

Choose the correct first move for each equation.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{x}{6} - 4 = 1$:', options: ['add $4$', 'multiply by $6$', 'subtract $4$', 'divide by $6$'] },
            { label: '$-5x + 2 = 22$:', options: ['subtract $2$', 'divide by $-5$', 'add $2$', 'multiply by $-5$'] },
            { label: '$9 + 4x = 1$:', options: ['subtract $9$', 'divide by $4$', 'add $9$', 'subtract $4$'] },
          ],
          correctAnswers: ['add $4$', 'subtract $2$', 'subtract $9$'],
          hint1: 'Always clear the loose constant first, before touching the variable.',
          hint2: 'Undo the operation attached to the constant: $-4$ is undone by adding $4$.',
          hint3: 'For $9 + 4x = 1$, the constant $9$ is added, so subtract $9$ first.',
          explanation: 'Clear the constant first in every case: undo $-4$ with $+4$; undo $+2$ with $-2$; undo $+9$ with $-9$. Division by the coefficient comes second.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-two-step-equations',
    sections: [
      {
        id: 'tse4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Two-Step Equations

**Part 4 of 5 — Fractions, Decimals & Word Problems**

---

> 🔑 **Real numbers, real problems:** the two-step method handles fractional coefficients and translates straight from everyday situations like phone plans and savings goals.`,
      },
      {
        id: 'tse4-fraction-coeff',
        type: 'text' as const,
        content: `## Fractional Coefficients

When the variable is multiplied by a fraction like $\\dfrac{2}{3}$, the fastest undo is to **multiply by its reciprocal** $\\dfrac{3}{2}$ (flip the fraction).

### Worked Example: $\\dfrac{2}{3}x + 4 = 10$

$$\\frac{2}{3}x + 4 = 10$$
$$\\frac{2}{3}x = 6 \\quad\\text{(subtract 4)}$$
$$x = 6 \\cdot \\frac{3}{2} = \\frac{18}{2} = 9 \\quad\\text{(multiply by reciprocal }\\tfrac{3}{2})$$

> ✅ **Check:** $\\dfrac{2}{3}(9) + 4 = 6 + 4 = 10$ ✓

> 💡 Multiplying by the reciprocal works because $\\dfrac{3}{2} \\cdot \\dfrac{2}{3} = 1$, leaving $1 \\cdot x = x$.`,
      },
      {
        id: 'tse4-decimal',
        type: 'text' as const,
        content: `## Decimal Coefficients

Decimals follow the exact same recipe. This shows up constantly in money problems.

### Worked Example: $1.5x + 2 = 11$

$$1.5x + 2 = 11$$
$$1.5x = 9 \\quad\\text{(subtract 2)}$$
$$x = \\frac{9}{1.5} = 6 \\quad\\text{(divide by 1.5)}$$

> ✅ **Check:** $1.5(6) + 2 = 9 + 2 = 11$ ✓`,
      },
      {
        id: 'tse4-fraction-drill',
        type: 'input-boxes' as const,
        content: `**Fractions & Decimals** 🧮

Solve for $x$.

**1)** $\\dfrac{3}{4}x - 2 = 7 \\;\\Rightarrow\\; x = \\,?$
**2)** $0.5x + 3 = 8 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '10'],
          hint1: 'Add $2$: $\\frac{3}{4}x = 9$, then multiply by the reciprocal $\\frac{4}{3}$.',
          hint2: '$9 \\cdot \\frac{4}{3} = \\frac{36}{3} = 12$.',
          hint3: 'For #2: subtract $3$ to get $0.5x = 5$, then divide by $0.5$ (same as multiplying by 2).',
          explanation: '1) $\\frac{3}{4}x = 9 \\Rightarrow x = 9 \\cdot \\frac{4}{3} = 12$.  2) $0.5x = 5 \\Rightarrow x = 10$.',
        },
      },
      {
        id: 'tse4-words',
        type: 'text' as const,
        content: `## Translating Word Problems

Many real situations are two-step equations in disguise. The pattern is usually:

$$(\\text{rate}) \\times (\\text{quantity}) + (\\text{fixed amount}) = (\\text{total})$$

### Worked Example — The Taxi Ride

A taxi charges a \$3 flat fee plus \$2 per mile. A ride cost \$17. How many miles ($m$) was it?

$$2m + 3 = 17$$
$$2m = 14 \\;\\Rightarrow\\; m = 7 \\text{ miles}$$

> ✅ **Check:** $2(7) + 3 = 14 + 3 = 17$ dollars ✓

### Worked Example — Saving Up

Maria has \$20 saved and adds \$5 each week. After how many weeks ($w$) will she have \$60?

$$5w + 20 = 60 \\;\\Rightarrow\\; 5w = 40 \\;\\Rightarrow\\; w = 8 \\text{ weeks}$$`,
      },
      {
        id: 'tse4-word-quiz',
        type: 'multiple-choice' as const,
        content: `**Word Problem Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A gym charges a \\$25 sign-up fee plus \\$15 per month. Jordan paid \\$130 total. Which equation models the number of months $m$?',
              options: ['$15m + 25 = 130$', '$25m + 15 = 130$', '$15m - 25 = 130$', '$40m = 130$'],
              correctAnswer: 0,
              explanation: 'The \\$15 monthly charge is the per-unit rate ($15m$) and the \\$25 fee is the fixed amount added: $15m + 25 = 130$.',
            },
            {
              question: 'Using $15m + 25 = 130$, how many months is Jordan paying for?',
              options: ['$7$ months', '$8$ months', '$6$ months', '$9$ months'],
              correctAnswer: 0,
              explanation: 'Subtract $25$: $15m = 105$. Divide by $15$: $m = 7$. Check: $15(7)+25 = 105+25 = 130$ ✓.',
            },
          ],
        },
      },
      {
        id: 'tse4-word-drill',
        type: 'input-boxes' as const,
        content: `**Set Up & Solve** 🧮

A pizza shop charges a \\$4 delivery fee plus \\$9 per pizza. The order came to \\$40.

**1)** How many pizzas were ordered? $\\;p = \\,?$

A plant is $6$ cm tall and grows $2$ cm per week.

**2)** After how many weeks will it be $18$ cm tall? $\\;w = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '6'],
          hint1: 'Pizza: $9p + 4 = 40$. Subtract $4$: $9p = 36$.',
          hint2: 'Divide by $9$: $p = 4$.',
          hint3: 'Plant: $2w + 6 = 18 \\Rightarrow 2w = 12 \\Rightarrow w = 6$.',
          explanation: '1) $9p + 4 = 40 \\Rightarrow 9p = 36 \\Rightarrow p = 4$.  2) $2w + 6 = 18 \\Rightarrow 2w = 12 \\Rightarrow w = 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-two-step-equations',
    sections: [
      {
        id: 'tse5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Two-Step Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize two-step equations, (2) undo in reverse order, (3) handle division, negatives, fractions, and decimals, and (4) translate word problems. Let's put it all together.`,
      },
      {
        id: 'tse5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Equation type | First move | Second move |
|---------------|------------|-------------|
| $ax + b = c$ | subtract $b$ | divide by $a$ |
| $ax - b = c$ | add $b$ | divide by $a$ |
| $\\dfrac{x}{a} + b = c$ | subtract $b$ | multiply by $a$ |
| $\\dfrac{p}{q}x + b = c$ | subtract $b$ | multiply by $\\dfrac{q}{p}$ |
| $b - ax = c$ | subtract $b$ | divide by $-a$ |

> ⚠️ **Golden rules:** undo addition/subtraction **first**, do the **same thing to both sides**, mind your **signs**, and **check** by substituting your answer back in.`,
      },
      {
        id: 'tse5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Match** 🔽

Match each equation to its solution.`,
        exercise: {
          dropdowns: [
            { label: '$3x - 7 = 8 \\Rightarrow x =$', options: ['$5$', '$3$', '$\\frac{1}{3}$', '$15$'] },
            { label: '$\\frac{x}{2} + 9 = 4 \\Rightarrow x =$', options: ['$-10$', '$10$', '$-5$', '$26$'] },
            { label: '$-2x + 1 = 9 \\Rightarrow x =$', options: ['$-4$', '$4$', '$5$', '$-5$'] },
          ],
          correctAnswers: ['$5$', '$-10$', '$-4$'],
          hint1: '$3x - 7 = 8 \\Rightarrow 3x = 15 \\Rightarrow x = 5$.',
          hint2: '$\\frac{x}{2} + 9 = 4 \\Rightarrow \\frac{x}{2} = -5 \\Rightarrow x = -10$.',
          hint3: '$-2x + 1 = 9 \\Rightarrow -2x = 8 \\Rightarrow x = -4$.',
          explanation: '$3x-7=8 \\Rightarrow x=5$;  $\\frac{x}{2}+9=4 \\Rightarrow x=-10$;  $-2x+1=9 \\Rightarrow x=-4$. Always clear the constant, then undo the coefficient.',
        },
      },
      {
        id: 'tse5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Solve each for $x$.

**1)** $7x + 8 = 1 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{x}{3} - 5 = -2 \\;\\Rightarrow\\; x = \\,?$
**3)** $\\dfrac{2}{5}x + 1 = 7 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '9', '15'],
          hint1: '$7x + 8 = 1 \\Rightarrow 7x = -7 \\Rightarrow x = -1$.',
          hint2: '$\\frac{x}{3} - 5 = -2 \\Rightarrow \\frac{x}{3} = 3 \\Rightarrow x = 9$.',
          hint3: '$\\frac{2}{5}x + 1 = 7 \\Rightarrow \\frac{2}{5}x = 6 \\Rightarrow x = 6 \\cdot \\frac{5}{2} = 15$.',
          explanation: '1) $7x = -7 \\Rightarrow x = -1$.  2) $\\frac{x}{3} = 3 \\Rightarrow x = 9$.  3) $\\frac{2}{5}x = 6 \\Rightarrow x = 15$.',
        },
      },
      {
        id: 'tse5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Application Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A bike rental costs a \\$5 base fee plus \\$3 per hour. If Sam paid \\$23, how many hours did he rent? (Solve $3h + 5 = 23$.)',
              options: ['$6$ hours', '$9$ hours', '$5$ hours', '$8$ hours'],
              correctAnswer: 0,
              explanation: 'Subtract $5$: $3h = 18$. Divide by $3$: $h = 6$. Check: $3(6)+5 = 18+5 = 23$ ✓.',
            },
            {
              question: 'Which equation has the solution $x = -2$?',
              options: ['$4x + 9 = 1$', '$4x + 9 = 17$', '$4x - 9 = 1$', '$4x + 1 = 9$'],
              correctAnswer: 0,
              explanation: 'Test $x=-2$ in $4x+9$: $4(-2)+9 = -8+9 = 1$ ✓. The others give $1, 17$, etc., not matching.',
            },
          ],
        },
      },
      {
        id: 'tse5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the correct FIRST step to solve $6x - 4 = 20$?',
              options: ['Add $4$ to both sides', 'Divide both sides by $6$', 'Subtract $4$ from both sides', 'Multiply both sides by $6$'],
              correctAnswer: 0,
              explanation: 'Undo the $-4$ first by adding $4$ to both sides, giving $6x = 24$. Then divide by $6$ to get $x = 4$.',
            },
            {
              question: 'Solve $\\frac{x}{4} + 3 = 7$.',
              options: ['$x = 16$', '$x = 40$', '$x = 1$', '$x = 28$'],
              correctAnswer: 0,
              explanation: 'Subtract $3$: $\\frac{x}{4} = 4$. Multiply by $4$: $x = 16$. Check: $\\frac{16}{4}+3 = 4+3 = 7$ ✓.',
            },
            {
              question: 'Solve $-3x + 2 = 11$.',
              options: ['$x = -3$', '$x = 3$', '$x = -\\frac{13}{3}$', '$x = \\frac{9}{3}$'],
              correctAnswer: 0,
              explanation: 'Subtract $2$: $-3x = 9$. Divide by $-3$: $x = -3$. Check: $-3(-3)+2 = 9+2 = 11$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
