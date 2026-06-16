import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Absolute Value (Pre-Algebra).
 * Registry key / DB Topic.slug: 'absolute-value'.
 * 5 parts, gold-standard structure: meaning & distance → evaluating expressions
 * & comparing → distance between two points → opposites & equations like |x|=k →
 * mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings) and
 * \\lvert ... \\rvert for absolute-value bars.
 * Every numeric answer and correctAnswer index was re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'absolute-value',
    sections: [
      {
        id: 'abs1-intro',
        type: 'text' as const,
        content: `# 🎯 Absolute Value

**Part 1 of 5 — Distance From Zero**

---

### Topics in This Part

| Section |
|---------|
| What Absolute Value Means |
| Reading the Bars: $\\lvert -7\\rvert$ |
| Why It's Always Positive (or Zero) |

> 🔑 **Key Concept:** The **absolute value** of a number is its **distance from $0$** on the number line. Distance is never negative, so absolute value is **never negative**.`,
      },
      {
        id: 'abs1-meaning',
        type: 'text' as const,
        content: `## What Absolute Value Means

We write absolute value with two straight bars: $\\lvert n\\rvert$, read as **"the absolute value of $n$."**

Picture the number line. The absolute value of a number is **how far it is from $0$** — and direction doesn't matter.

$$\\lvert -5\\rvert = 5 \\qquad \\lvert 5\\rvert = 5$$

Both $-5$ and $5$ sit **$5$ units away** from zero, so both have absolute value $5$.

| Number | Distance from $0$ | Absolute value |
|--------|-------------------|----------------|
| $-8$ | $8$ units | $\\lvert -8\\rvert = 8$ |
| $-3$ | $3$ units | $\\lvert -3\\rvert = 3$ |
| $0$ | $0$ units | $\\lvert 0\\rvert = 0$ |
| $4$ | $4$ units | $\\lvert 4\\rvert = 4$ |

> 💡 **Shortcut:** To take the absolute value, just **drop the negative sign** if there is one. $\\lvert -12\\rvert = 12$ and $\\lvert 12\\rvert = 12$.`,
      },
      {
        id: 'abs1-distance-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the absolute value of $-9$?',
              options: ['$9$', '$-9$', '$0$', '$18$'],
              correctAnswer: 0,
              explanation: '$-9$ is $9$ units from zero, so $\\lvert -9\\rvert = 9$. Absolute value strips the sign.',
            },
            {
              question: 'Which statement is TRUE about absolute value?',
              options: [
                'It can never be negative',
                'It is always negative',
                'It changes a number\'s distance from zero',
                'It only works on positive numbers',
              ],
              correctAnswer: 0,
              explanation: 'Absolute value measures distance from $0$, and distance is never negative. It can be $0$ (for the number $0$) but never less than $0$.',
            },
          ],
        },
      },
      {
        id: 'abs1-evaluate-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate** 🧮

Find each absolute value. (Distance from zero is never negative.)

**1)** $\\lvert -6\\rvert = \\,?$
**2)** $\\lvert 15\\rvert = \\,?$
**3)** $\\lvert 0\\rvert = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '15', '0'],
          hint1: '$-6$ is $6$ units from zero, so $\\lvert -6\\rvert = 6$.',
          hint2: '$15$ is already positive — its distance from zero is $15$.',
          hint3: '$0$ is $0$ units from itself, so $\\lvert 0\\rvert = 0$. This is the only time absolute value equals zero.',
          explanation: '1) $\\lvert -6\\rvert = 6$.  2) $\\lvert 15\\rvert = 15$.  3) $\\lvert 0\\rvert = 0$. Absolute value gives the distance from $0$, which is never negative.',
        },
      },
      {
        id: 'abs1-zero',
        type: 'text' as const,
        content: `## Why It's Always Positive (or Zero)

There is exactly **one** number whose absolute value is $0$: the number $0$ itself.

$$\\lvert 0\\rvert = 0$$

Every other number — positive or negative — has a **positive** distance from zero. So:

$$\\lvert n\\rvert \\ge 0 \\quad \\text{for every number } n$$

> ⚠️ **Watch out:** $\\lvert -3\\rvert$ does **not** equal $-3$. Taking the absolute value of a negative number gives a **positive** result: $\\lvert -3\\rvert = 3$. The bars are not just "fancy parentheses."

In Part 2 we'll handle trickier expressions like $-\\lvert -4\\rvert$, where a sign sits *outside* the bars.`,
      },
      {
        id: 'abs1-true-false-dropdown',
        type: 'dropdown-select' as const,
        content: `**True or False?** 🔽

Decide whether each statement is true or false.`,
        exercise: {
          dropdowns: [
            { label: '$\\lvert -11\\rvert = 11$', options: ['True', 'False'] },
            { label: '$\\lvert -11\\rvert = -11$', options: ['True', 'False'] },
            { label: 'Absolute value can equal $0$', options: ['True', 'False'] },
          ],
          correctAnswers: ['True', 'False', 'True'],
          hint1: '$-11$ is $11$ units from zero, so $\\lvert -11\\rvert = 11$. True.',
          hint2: 'Absolute value is never negative, so $\\lvert -11\\rvert$ cannot equal $-11$. False.',
          hint3: '$\\lvert 0\\rvert = 0$, so absolute value can be $0$ — but it is never less than $0$. True.',
          explanation: '$\\lvert -11\\rvert = 11$ (true); it can never be $-11$ (false); and $\\lvert 0\\rvert = 0$ shows absolute value can be zero (true).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'absolute-value',
    sections: [
      {
        id: 'abs2-intro',
        type: 'text' as const,
        content: `# 🎯 Absolute Value

**Part 2 of 5 — Evaluating Expressions & Comparing**

---

> 🔑 **The Order Rule:** Treat the absolute-value bars like a grouping symbol (like parentheses). **Simplify what's inside first**, take the absolute value, and only **then** apply any sign or operation sitting outside.`,
      },
      {
        id: 'abs2-outside-sign',
        type: 'text' as const,
        content: `## Signs Outside the Bars

A negative sign **outside** the bars is applied **after** the absolute value.

### Worked Example: $-\\lvert -4\\rvert$

1. Inside the bars: $-4$
2. Take the absolute value: $\\lvert -4\\rvert = 4$
3. Apply the outside negative: $-(4) = -4$

$$-\\lvert -4\\rvert = -4$$

### Worked Example: $\\lvert -4\\rvert + \\lvert -1\\rvert$

Each absolute value first, then add:

$$\\lvert -4\\rvert + \\lvert -1\\rvert = 4 + 1 = 5$$

### Worked Example: $\\lvert 3 - 10\\rvert$

Simplify **inside** first, then take the absolute value:

$$\\lvert 3 - 10\\rvert = \\lvert -7\\rvert = 7$$

> ⚠️ **Common trap:** $\\lvert 3 - 10\\rvert \\ne \\lvert 3\\rvert - \\lvert 10\\rvert$. The left side is $7$; the right side is $3 - 10 = -7$. **Always finish the inside before opening the bars.**`,
      },
      {
        id: 'abs2-eval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $-\\lvert -8\\rvert$.',
              options: ['$-8$', '$8$', '$0$', '$16$'],
              correctAnswer: 0,
              explanation: 'First $\\lvert -8\\rvert = 8$, then the outside negative gives $-(8) = -8$. The sign outside the bars stays.',
            },
            {
              question: 'Evaluate $\\lvert 2 - 9\\rvert$.',
              options: ['$7$', '$-7$', '$11$', '$-11$'],
              correctAnswer: 0,
              explanation: 'Simplify inside first: $2 - 9 = -7$. Then $\\lvert -7\\rvert = 7$.',
            },
          ],
        },
      },
      {
        id: 'abs2-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate Each Expression** 🧮

Simplify inside the bars first, then handle anything outside.

**1)** $\\lvert -5\\rvert + \\lvert -2\\rvert = \\,?$
**2)** $\\lvert 4 - 11\\rvert = \\,?$
**3)** $-\\lvert 6\\rvert = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '7', '-6'],
          hint1: '$\\lvert -5\\rvert = 5$ and $\\lvert -2\\rvert = 2$, so the sum is $5 + 2 = 7$.',
          hint2: 'Inside: $4 - 11 = -7$. Then $\\lvert -7\\rvert = 7$.',
          hint3: '$\\lvert 6\\rvert = 6$, then the outside negative makes it $-6$.',
          explanation: '1) $5 + 2 = 7$.  2) $\\lvert -7\\rvert = 7$.  3) $-\\lvert 6\\rvert = -(6) = -6$. Inside-first, then apply outside signs.',
        },
      },
      {
        id: 'abs2-compare',
        type: 'text' as const,
        content: `## Comparing With Absolute Value

To compare expressions, **evaluate each one to a single number first**, then compare those numbers.

### Example: Which is larger, $\\lvert -7\\rvert$ or $\\lvert 5\\rvert$?

$$\\lvert -7\\rvert = 7 \\qquad \\lvert 5\\rvert = 5 \\qquad 7 > 5$$

So $\\lvert -7\\rvert$ is larger — even though $-7 < 5$ as plain numbers!

| Compare | Evaluate | Result |
|---------|----------|--------|
| $\\lvert -3\\rvert$ vs $\\lvert 2\\rvert$ | $3$ vs $2$ | $\\lvert -3\\rvert > \\lvert 2\\rvert$ |
| $-\\lvert -9\\rvert$ vs $\\lvert 4\\rvert$ | $-9$ vs $4$ | $-\\lvert -9\\rvert < \\lvert 4\\rvert$ |
| $\\lvert -6\\rvert$ vs $\\lvert 6\\rvert$ | $6$ vs $6$ | $\\lvert -6\\rvert = \\lvert 6\\rvert$ |

> 💡 A bigger absolute value means **farther from zero** — regardless of the original sign.`,
      },
      {
        id: 'abs2-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Compare** 🔽

Evaluate each side, then choose the correct symbol.`,
        exercise: {
          dropdowns: [
            { label: '$\\lvert -8\\rvert \\;\\square\\; \\lvert 3\\rvert$', options: ['$>$', '$<$', '$=$'] },
            { label: '$-\\lvert -5\\rvert \\;\\square\\; \\lvert 2\\rvert$', options: ['$>$', '$<$', '$=$'] },
            { label: '$\\lvert -4\\rvert \\;\\square\\; \\lvert 4\\rvert$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$>$', '$<$', '$=$'],
          hint1: '$\\lvert -8\\rvert = 8$ and $\\lvert 3\\rvert = 3$. Since $8 > 3$, use $>$.',
          hint2: '$-\\lvert -5\\rvert = -5$ and $\\lvert 2\\rvert = 2$. A negative is less than a positive, so $<$.',
          hint3: '$\\lvert -4\\rvert = 4$ and $\\lvert 4\\rvert = 4$. They are equal, so $=$.',
          explanation: 'Evaluate each side to a number first: $8 > 3$, $-5 < 2$, and $4 = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'absolute-value',
    sections: [
      {
        id: 'abs3-intro',
        type: 'text' as const,
        content: `# 🎯 Absolute Value

**Part 3 of 5 — Distance Between Two Points**

---

> 🔑 **The Big Idea:** The distance between two numbers $a$ and $b$ on the number line is $\\lvert a - b\\rvert$. Absolute value guarantees the distance comes out **positive**, no matter which number you subtract first.`,
      },
      {
        id: 'abs3-distance',
        type: 'text' as const,
        content: `## Distance Between Two Numbers

How far apart are $3$ and $10$ on the number line? Count: $7$ units. The formula says the same thing:

$$\\lvert 10 - 3\\rvert = \\lvert 7\\rvert = 7 \\qquad\\text{or}\\qquad \\lvert 3 - 10\\rvert = \\lvert -7\\rvert = 7$$

**Either order gives $7$** — that's the whole point of the absolute value.

### Worked Example: distance between $-4$ and $2$

$$\\lvert -4 - 2\\rvert = \\lvert -6\\rvert = 6 \\qquad\\text{or}\\qquad \\lvert 2 - (-4)\\rvert = \\lvert 2 + 4\\rvert = \\lvert 6\\rvert = 6$$

The two points are **$6$ units apart**.

> 💡 Subtracting a negative becomes adding: $2 - (-4) = 2 + 4 = 6$. Watch those double signs!`,
      },
      {
        id: 'abs3-distance-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How far apart are $8$ and $3$ on the number line?',
              options: ['$5$', '$11$', '$-5$', '$24$'],
              correctAnswer: 0,
              explanation: 'Distance is $\\lvert 8 - 3\\rvert = \\lvert 5\\rvert = 5$ units.',
            },
            {
              question: 'The distance between $-2$ and $5$ is found by:',
              options: [
                '$\\lvert -2 - 5\\rvert = 7$',
                '$\\lvert -2 + 5\\rvert = 3$',
                '$\\lvert -2 \\cdot 5\\rvert = 10$',
                '$-2 - 5 = -7$',
              ],
              correctAnswer: 0,
              explanation: 'Distance is $\\lvert a - b\\rvert$: $\\lvert -2 - 5\\rvert = \\lvert -7\\rvert = 7$. You subtract (not add) the coordinates, then take the absolute value.',
            },
          ],
        },
      },
      {
        id: 'abs3-distance-drill',
        type: 'input-boxes' as const,
        content: `**Find the Distance** 🧮

Use $\\lvert a - b\\rvert$ to find how far apart each pair is.

**1)** Distance between $4$ and $9 = \\,?$
**2)** Distance between $-3$ and $5 = \\,?$
**3)** Distance between $-7$ and $-1 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '8', '6'],
          hint1: '$\\lvert 4 - 9\\rvert = \\lvert -5\\rvert = 5$.',
          hint2: '$\\lvert -3 - 5\\rvert = \\lvert -8\\rvert = 8$. The points straddle zero, so add the distances $3 + 5$.',
          hint3: '$\\lvert -7 - (-1)\\rvert = \\lvert -7 + 1\\rvert = \\lvert -6\\rvert = 6$.',
          explanation: '1) $5$.  2) $8$.  3) $6$. In each case, subtract the two numbers and take the absolute value of the result.',
        },
      },
      {
        id: 'abs3-temp',
        type: 'text' as const,
        content: `## Real-World Distance: Temperature Swings

Absolute value shows up any time we care about **size of change**, not direction.

> 🔑 **Example:** The temperature drops from $\\;7^\\circ\\text{F}$ to $\\;-5^\\circ\\text{F}$ overnight. How big was the change?

$$\\lvert 7 - (-5)\\rvert = \\lvert 7 + 5\\rvert = \\lvert 12\\rvert = 12$$

The temperature changed by **$12$ degrees**. The drop is negative ($-12$), but the *size* of the swing is $12$.

| Situation | Expression | Size of change |
|-----------|-----------|----------------|
| $3^\\circ$ up to $9^\\circ$ | $\\lvert 9 - 3\\rvert$ | $6^\\circ$ |
| $4^\\circ$ down to $-4^\\circ$ | $\\lvert -4 - 4\\rvert$ | $8^\\circ$ |
| $-10^\\circ$ up to $-2^\\circ$ | $\\lvert -2 - (-10)\\rvert$ | $8^\\circ$ |`,
      },
      {
        id: 'abs3-temp-dropdown',
        type: 'dropdown-select' as const,
        content: `**Temperature Change** 🔽

A diver descends and a thermometer is read. Pick the size of each change.`,
        exercise: {
          dropdowns: [
            { label: 'From $6^\\circ$ to $-3^\\circ$, the change is:', options: ['$9^\\circ$', '$3^\\circ$', '$-9^\\circ$', '$18^\\circ$'] },
            { label: 'From $-8^\\circ$ to $-2^\\circ$, the change is:', options: ['$6^\\circ$', '$10^\\circ$', '$-6^\\circ$', '$16^\\circ$'] },
            { label: 'The expression for the change from $a$ to $b$ is:', options: ['$\\lvert b - a\\rvert$', '$b - a$ (no bars)', '$a + b$', '$\\lvert a\\rvert - \\lvert b\\rvert$'] },
          ],
          correctAnswers: ['$9^\\circ$', '$6^\\circ$', '$\\lvert b - a\\rvert$'],
          hint1: '$\\lvert -3 - 6\\rvert = \\lvert -9\\rvert = 9$ degrees.',
          hint2: '$\\lvert -2 - (-8)\\rvert = \\lvert -2 + 8\\rvert = \\lvert 6\\rvert = 6$ degrees.',
          hint3: 'The size of a change is the distance between the two readings: $\\lvert b - a\\rvert$ (or equivalently $\\lvert a - b\\rvert$).',
          explanation: 'The size of a change is always a distance, so use absolute value: $9^\\circ$, $6^\\circ$, and the formula $\\lvert b - a\\rvert$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'absolute-value',
    sections: [
      {
        id: 'abs4-intro',
        type: 'text' as const,
        content: `# 🎯 Absolute Value

**Part 4 of 5 — Opposites & Equations Like $\\lvert x\\rvert = 5$**

---

> 🔑 **Two Solutions:** Because $\\lvert 5\\rvert = 5$ **and** $\\lvert -5\\rvert = 5$, an equation like $\\lvert x\\rvert = 5$ has **two** answers: $x = 5$ or $x = -5$. Absolute value usually points to a *pair* of numbers.`,
      },
      {
        id: 'abs4-opposites',
        type: 'text' as const,
        content: `## Opposites Share an Absolute Value

Two numbers are **opposites** if they're the same distance from zero on opposite sides — like $-6$ and $6$. Opposites always have the **same absolute value**:

$$\\lvert -6\\rvert = \\lvert 6\\rvert = 6$$

So if you know an absolute value, there are usually **two** numbers that produce it.

| If $\\lvert x\\rvert = $ | then $x = $ |
|-------------|-------------|
| $3$ | $3$ or $-3$ |
| $10$ | $10$ or $-10$ |
| $0$ | $0$ only |
| $7$ | $7$ or $-7$ |

> ⚠️ **Special case:** $\\lvert x\\rvert = 0$ has only **one** solution, $x = 0$, because only zero sits *at* zero. And $\\lvert x\\rvert = -2$ has **no** solution — absolute value can't be negative.`,
      },
      {
        id: 'abs4-solve-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What values of $x$ make $\\lvert x\\rvert = 12$ true?',
              options: ['$x = 12$ or $x = -12$', 'only $x = 12$', 'only $x = -12$', '$x = 6$ or $x = -6$'],
              correctAnswer: 0,
              explanation: 'Both $12$ and $-12$ are $12$ units from zero, so either one works.',
            },
            {
              question: 'How many solutions does $\\lvert x\\rvert = -4$ have?',
              options: ['None', 'One: $x = -4$', 'Two: $x = 4$ or $-4$', 'Infinitely many'],
              correctAnswer: 0,
              explanation: 'Absolute value is a distance, so it can never be negative. No number has $\\lvert x\\rvert = -4$, so there is no solution.',
            },
          ],
        },
      },
      {
        id: 'abs4-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve** 🧮

Each equation has two solutions. Enter the **positive** solution.

**1)** $\\lvert x\\rvert = 8 \\;\\Rightarrow\\; x = \\,?$  *(positive answer)*
**2)** $\\lvert x\\rvert = 1 \\;\\Rightarrow\\; x = \\,?$  *(positive answer)*

**3)** How many solutions does $\\lvert x\\rvert = 0$ have? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '1', '1'],
          hint1: '$\\lvert 8\\rvert = 8$, so $x = 8$ is the positive solution (the other is $-8$).',
          hint2: '$\\lvert 1\\rvert = 1$, so $x = 1$ is the positive solution (the other is $-1$).',
          hint3: 'Only $x = 0$ gives $\\lvert x\\rvert = 0$, so there is exactly $1$ solution.',
          explanation: '1) $x = 8$ (also $-8$).  2) $x = 1$ (also $-1$).  3) $\\lvert x\\rvert = 0$ has exactly $1$ solution: $x = 0$.',
        },
      },
      {
        id: 'abs4-graph',
        type: 'text' as const,
        content: `## Two Points, One Distance

Think of $\\lvert x\\rvert = 5$ as asking: *"Which points are exactly $5$ units from zero?"*

$$\\cdots\\; -5 \\;\\bullet\\; \\cdots \\;\\; 0 \\;\\; \\cdots \\;\\bullet\\; 5 \\;\\cdots$$

There are **two** such points: one to the left ($-5$) and one to the right ($5$). That picture is why these equations have two answers.

> 💡 **Pattern to remember:** for any positive number $k$,
> $$\\lvert x\\rvert = k \\quad\\Longrightarrow\\quad x = k \\ \\text{ or } \\ x = -k.$$

This idea — a single distance pointing to two locations — carries straight into Algebra, where you'll solve harder absolute-value equations the same way.`,
      },
      {
        id: 'abs4-pattern-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Solutions** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\lvert x\\rvert = 9$ has solutions:', options: ['$9$ and $-9$', '$9$ only', '$3$ and $-3$', 'none'] },
            { label: '$\\lvert x\\rvert = 0$ has solutions:', options: ['$0$ only', '$0$ and $-0$ (two)', 'none', 'all numbers'] },
            { label: '$\\lvert x\\rvert = -7$ has solutions:', options: ['none', '$7$ and $-7$', '$-7$ only', '$7$ only'] },
          ],
          correctAnswers: ['$9$ and $-9$', '$0$ only', 'none'],
          hint1: 'For a positive $k$, $\\lvert x\\rvert = k$ gives $x = k$ or $x = -k$. Here $k = 9$.',
          hint2: 'Only zero is zero units from zero, so $\\lvert x\\rvert = 0$ has the single solution $x = 0$.',
          hint3: 'Absolute value is never negative, so $\\lvert x\\rvert = -7$ has no solution.',
          explanation: 'Positive target → two solutions ($9, -9$); target $0$ → one solution ($0$); negative target → no solution.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'absolute-value',
    sections: [
      {
        id: 'abs5-intro',
        type: 'text' as const,
        content: `# 🎯 Absolute Value

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read absolute value as distance from zero, (2) evaluate expressions with signs inside and outside the bars, (3) find the distance between two numbers, and (4) solve equations like $\\lvert x\\rvert = k$. Let's put it all together.`,
      },
      {
        id: 'abs5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key idea |
|------|----------|
| Find $\\lvert n\\rvert$ | distance of $n$ from $0$; drop the sign |
| Evaluate inside bars | simplify inside **first**, then take $\\lvert\\;\\;\\rvert$ |
| Sign outside the bars | apply it **after** the absolute value |
| Distance between $a$ and $b$ | $\\lvert a - b\\rvert$ (positive either way) |
| Solve $\\lvert x\\rvert = k$, $\\;k > 0$ | $x = k$ or $x = -k$ |

> ⚠️ **Three things never to forget:** absolute value is **never negative**; $\\lvert x\\rvert = 0$ has **one** solution; $\\lvert x\\rvert = (\\text{negative})$ has **none**.`,
      },
      {
        id: 'abs5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\lvert -10\\rvert - \\lvert 6\\rvert$.',
              options: ['$4$', '$16$', '$-4$', '$-16$'],
              correctAnswer: 0,
              explanation: '$\\lvert -10\\rvert = 10$ and $\\lvert 6\\rvert = 6$, so $10 - 6 = 4$.',
            },
            {
              question: 'A submarine moves from $-30$ m to $-12$ m. How far did it travel?',
              options: ['$18$ m', '$42$ m', '$-18$ m', '$12$ m'],
              correctAnswer: 0,
              explanation: 'Distance is $\\lvert -12 - (-30)\\rvert = \\lvert -12 + 30\\rvert = \\lvert 18\\rvert = 18$ m.',
            },
          ],
        },
      },
      {
        id: 'abs5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

**1)** $-\\lvert -3\\rvert - \\lvert 2\\rvert = \\,?$
**2)** Distance between $-6$ and $7 = \\,?$
**3)** The positive solution of $\\lvert x\\rvert = 14$ is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-5', '13', '14'],
          hint1: '$\\lvert -3\\rvert = 3$ and $\\lvert 2\\rvert = 2$, so $-3 - 2 = -5$. Apply the outside negative to the first term.',
          hint2: '$\\lvert -6 - 7\\rvert = \\lvert -13\\rvert = 13$.',
          hint3: '$\\lvert 14\\rvert = 14$, so the positive solution is $14$ (the other is $-14$).',
          explanation: '1) $-3 - 2 = -5$.  2) $\\lvert -13\\rvert = 13$.  3) $x = 14$.',
        },
      },
      {
        id: 'abs5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\lvert 2 - 9\\rvert$?',
              options: ['$7$', '$-7$', '$11$', '$-11$'],
              correctAnswer: 0,
              explanation: 'Simplify inside first: $2 - 9 = -7$. Then $\\lvert -7\\rvert = 7$.',
            },
            {
              question: 'How far apart are $-5$ and $4$ on the number line?',
              options: ['$9$', '$1$', '$-9$', '$20$'],
              correctAnswer: 0,
              explanation: 'Distance is $\\lvert -5 - 4\\rvert = \\lvert -9\\rvert = 9$ units.',
            },
            {
              question: 'Which equation has NO solution?',
              options: ['$\\lvert x\\rvert = -3$', '$\\lvert x\\rvert = 3$', '$\\lvert x\\rvert = 0$', '$\\lvert x\\rvert = 100$'],
              correctAnswer: 0,
              explanation: 'Absolute value can never be negative, so $\\lvert x\\rvert = -3$ has no solution. The other three each have at least one.',
            },
          ],
        },
      },
    ],
  },
]
