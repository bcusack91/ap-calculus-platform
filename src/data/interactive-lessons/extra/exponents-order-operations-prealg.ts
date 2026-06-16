import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Exponents and Order of Operations (Pre-Algebra).
 * Registry key / DB slug: 'exponents-order-operations-prealg'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'exponents-order-operations-prealg',
    sections: [
      {
        id: 'eoo1-intro',
        type: 'text' as const,
        content: `# 🔢 Exponents & Order of Operations

**Part 1 of 5 — What Exponents Mean**

---

### Topics in This Part

| Section |
|---------|
| Repeated Multiplication |
| Base and Exponent |
| Reading "Squared" and "Cubed" |

> 🔑 **Key Concept:** An exponent is just a shortcut for **repeated multiplication**. Instead of writing $2 \\times 2 \\times 2 \\times 2 \\times 2$, we write $2^5$. Same number — fewer pencil strokes.`,
      },
      {
        id: 'eoo1-repeated',
        type: 'text' as const,
        content: `## Repeated Multiplication

Multiplication is a shortcut for repeated **addition**:
$$4 + 4 + 4 = 3 \\times 4$$

An **exponent** is a shortcut for repeated **multiplication**:
$$4 \\times 4 \\times 4 = 4^3$$

In the symbol $4^3$:
- the big number $4$ is the **base** — the number being multiplied,
- the small raised number $3$ is the **exponent** (or *power*) — how many times you write the base.

### Examples

| Power | Meaning | Value |
|-------|---------|-------|
| $2^3$ | $2 \\times 2 \\times 2$ | $8$ |
| $5^2$ | $5 \\times 5$ | $25$ |
| $3^4$ | $3 \\times 3 \\times 3 \\times 3$ | $81$ |
| $10^3$ | $10 \\times 10 \\times 10$ | $1000$ |

> ⚠️ **Watch out:** $4^3$ does **not** mean $4 \\times 3 = 12$. The exponent counts how many $4$'s you multiply, so $4^3 = 4 \\times 4 \\times 4 = 64$.`,
      },
      {
        id: 'eoo1-base-exp',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

In the power $7^5$, identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The base is:', options: ['$7$', '$5$', '$35$', '$12$'] },
            { label: 'The exponent is:', options: ['$5$', '$7$', '$2$', '$75$'] },
            { label: '$7^5$ means:', options: ['$7 \\times 7 \\times 7 \\times 7 \\times 7$', '$7 \\times 5$', '$5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5$', '$7 + 7 + 7 + 7 + 7$'] },
          ],
          correctAnswers: ['$7$', '$5$', '$7 \\times 7 \\times 7 \\times 7 \\times 7$'],
          hint1: 'The base is the large number on the bottom — the one being multiplied.',
          hint2: 'The exponent is the small raised number — it counts the factors.',
          hint3: '$7^5$ means write $7$ as a factor five times: $7 \\times 7 \\times 7 \\times 7 \\times 7$.',
          explanation: 'Base $= 7$, exponent $= 5$, and $7^5 = 7 \\times 7 \\times 7 \\times 7 \\times 7 = 16807$. The exponent tells you how many copies of the base to multiply.',
        },
      },
      {
        id: 'eoo1-squared-cubed',
        type: 'text' as const,
        content: `## "Squared" and "Cubed"

Two exponents are so common they get their own names:

- $n^2$ is read **"$n$ squared"** — it gives the area of a square with side $n$.
- $n^3$ is read **"$n$ cubed"** — it gives the volume of a cube with edge $n$.

$$5^2 = 25 \\quad (\\text{"five squared"}) \\qquad 2^3 = 8 \\quad (\\text{"two cubed"})$$

For any other exponent we say "to the power of": $4^5$ is "four to the fifth power."

> 💡 **Perfect squares** are values of $n^2$: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$. Memorizing these speeds up almost every future topic.`,
      },
      {
        id: 'eoo1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression is equal to $3^4$?',
              options: ['$3 \\times 3 \\times 3 \\times 3$', '$3 \\times 4$', '$4 \\times 4 \\times 4$', '$3 + 3 + 3 + 3$'],
              correctAnswer: 0,
              explanation: '$3^4$ means the base $3$ multiplied four times: $3 \\times 3 \\times 3 \\times 3 = 81$. It is *not* $3 \\times 4$.',
            },
            {
              question: 'How do you read $6^3$ aloud?',
              options: ['Six cubed', 'Six squared', 'Six times three', 'Three to the sixth'],
              correctAnswer: 0,
              explanation: 'An exponent of $3$ is read "cubed," so $6^3$ is "six cubed," equal to $6 \\times 6 \\times 6 = 216$.',
            },
          ],
        },
      },
      {
        id: 'eoo1-evaluate-tip',
        type: 'text' as const,
        content: `## Evaluating a Power Step by Step

To turn a power into a plain number, multiply **two factors at a time**:

$$2^4 = \\underbrace{2 \\times 2}_{4} \\times 2 \\times 2 = 4 \\times 2 \\times 2 = 8 \\times 2 = 16$$

For **powers of ten** there's a shortcut: the exponent equals the number of zeros.

$$10^2 = 100, \\quad 10^3 = 1000, \\quad 10^5 = 100000$$

Now try evaluating a few yourself.`,
      },
      {
        id: 'eoo1-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Powers** 🧮

Write each power as a single number.

**1)** $2^4 = \\,?$
**2)** $5^3 = \\,?$
**3)** $10^4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '125', '10000'],
          hint1: '$2^4 = 2 \\times 2 \\times 2 \\times 2$. Multiply two at a time: $2\\times2=4$, $4\\times2=8$, $8\\times2=16$.',
          hint2: '$5^3 = 5 \\times 5 \\times 5 = 25 \\times 5 = 125$.',
          hint3: 'For $10^4$, count the zeros: a power of ten has the same number of zeros as the exponent, so $10^4 = 10000$.',
          explanation: '1) $2^4 = 16$.  2) $5^3 = 125$.  3) $10^4 = 10000$ (four zeros).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'exponents-order-operations-prealg',
    sections: [
      {
        id: 'eoo2-intro',
        type: 'text' as const,
        content: `# 🔢 Exponents & Order of Operations

**Part 2 of 5 — Special Powers & Negative Bases**

---

> 🔑 **The Idea:** A few exponent rules look strange the first time — powers of $1$, exponents of $0$, and negative bases. Once you see *why* each works, they stop being tricky.`,
      },
      {
        id: 'eoo2-special',
        type: 'text' as const,
        content: `## Three Special Cases

| Rule | Why | Example |
|------|-----|---------|
| Any base to the **first** power is itself | one factor | $9^1 = 9$ |
| Any base to the **zero** power is $1$ | (you'll prove this in Algebra) | $7^0 = 1$ |
| **$1$ to any power** is $1$ | $1 \\times 1 \\times \\dots = 1$ | $1^{100} = 1$ |

A quick way to feel the $n^0 = 1$ rule: look at a shrinking pattern of powers of $2$. Each step down divides by $2$:

$$2^3 = 8,\\quad 2^2 = 4,\\quad 2^1 = 2,\\quad 2^0 = 1$$

Going $8 \\to 4 \\to 2$, the next step is $2 \\div 2 = 1$, so $2^0 = 1$.

> ⚠️ The only exception people argue about is $0^0$; in Pre-Algebra we won't use it. But $0^1 = 0$, $0^2 = 0$, and $5^0 = 1$ are all standard.`,
      },
      {
        id: 'eoo2-special-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $8^0$?',
              options: ['$1$', '$0$', '$8$', '$80$'],
              correctAnswer: 0,
              explanation: 'Any nonzero base to the zero power equals $1$, so $8^0 = 1$.',
            },
            {
              question: 'What is $1^{25}$?',
              options: ['$1$', '$25$', '$0$', '$26$'],
              correctAnswer: 0,
              explanation: 'Multiplying $1$ by itself any number of times always gives $1$, so $1^{25} = 1$.',
            },
          ],
        },
      },
      {
        id: 'eoo2-negatives',
        type: 'text' as const,
        content: `## Negative Bases & Parentheses

The grouping symbols around a negative number decide whether the minus sign is part of the base.

### Case 1: the negative is inside parentheses

$$(-2)^4 = (-2)(-2)(-2)(-2) = 16$$

Here the **base is $-2$**, multiplied four times. A negative base raised to an **even** power is **positive**; raised to an **odd** power it is **negative**:

$$(-2)^3 = (-2)(-2)(-2) = -8$$

### Case 2: no parentheses

$$-2^4 = -(2^4) = -(16) = -16$$

Without parentheses, the exponent applies **only to the $2$**, and the minus sign sits out front like a "negative of."

> ⚠️ **This is the single most common exponent mistake.** $(-2)^4 = 16$ but $-2^4 = -16$. The parentheses change the answer.`,
      },
      {
        id: 'eoo2-neg-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sign Check** 🔽

Decide the sign and value of each power.`,
        exercise: {
          dropdowns: [
            { label: '$(-3)^2 = $', options: ['$9$', '$-9$', '$6$', '$-6$'] },
            { label: '$(-3)^3 = $', options: ['$-27$', '$27$', '$-9$', '$9$'] },
            { label: '$-3^2 = $', options: ['$-9$', '$9$', '$-6$', '$6$'] },
          ],
          correctAnswers: ['$9$', '$-27$', '$-9$'],
          hint1: 'In $(-3)^2$ the base is $-3$. An even power of a negative is positive: $(-3)(-3) = 9$.',
          hint2: 'In $(-3)^3$ the base is $-3$. An odd power of a negative is negative: $(-3)(-3)(-3) = -27$.',
          hint3: 'In $-3^2$ there are no parentheses, so the exponent hits only the $3$: $-3^2 = -(3 \\times 3) = -9$.',
          explanation: '$(-3)^2 = 9$ (even power, positive). $(-3)^3 = -27$ (odd power, negative). $-3^2 = -9$ (the minus is outside the power).',
        },
      },
      {
        id: 'eoo2-sign-rule',
        type: 'text' as const,
        content: `## A One-Glance Sign Rule

Before you compute, you can already predict the **sign** of a power:

| Base | Exponent | Sign of result |
|------|----------|----------------|
| positive | anything | positive |
| negative *(in parentheses)* | **even** | positive |
| negative *(in parentheses)* | **odd** | negative |

So $(-5)^2$ will be positive and $(-5)^3$ will be negative — *before* you multiply anything. Use this to check yourself on the drill below.`,
      },
      {
        id: 'eoo2-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate Carefully** 🧮

Watch the parentheses on each one.

**1)** $(-4)^2 = \\,?$
**2)** $-4^2 = \\,?$
**3)** $(-2)^5 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '-16', '-32'],
          hint1: '$(-4)^2 = (-4)(-4) = 16$. Even power of a negative is positive.',
          hint2: '$-4^2 = -(4^2) = -(16) = -16$. The exponent applies only to the $4$.',
          hint3: '$(-2)^5 = (-2)(-2)(-2)(-2)(-2)$. Odd power of a negative is negative: $-32$.',
          explanation: '1) $(-4)^2 = 16$.  2) $-4^2 = -16$.  3) $(-2)^5 = -32$. Parentheses and even/odd exponents control the sign.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'exponents-order-operations-prealg',
    sections: [
      {
        id: 'eoo3-intro',
        type: 'text' as const,
        content: `# 🔢 Exponents & Order of Operations

**Part 3 of 5 — The Order of Operations (PEMDAS)**

---

> 🔑 **Why we need it:** $2 + 3 \\times 4$ could be $20$ (if you add first) or $14$ (if you multiply first). A single agreed-upon **order** guarantees everyone gets the same answer. The right answer here is $14$.`,
      },
      {
        id: 'eoo3-pemdas',
        type: 'text' as const,
        content: `## The Order of Operations

Do operations in this order:

| Step | Operation | Memory word |
|------|-----------|-------------|
| 1 | **P**arentheses (grouping symbols) | **P**lease |
| 2 | **E**xponents | **E**xcuse |
| 3 | **M**ultiplication & **D**ivision *(left → right)* | **M**y **D**ear |
| 4 | **A**ddition & **S**ubtraction *(left → right)* | **A**unt **S**ally |

This is often abbreviated **PEMDAS** ("Please Excuse My Dear Aunt Sally").

> ⚠️ **Two pairs are tied.** Multiplication and division have the **same** priority — do them left to right as they appear. Same for addition and subtraction. PEMDAS does *not* mean "all multiplication before all division."`,
      },
      {
        id: 'eoo3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $5 + 2 \\times 6$.',
              options: ['$17$', '$42$', '$13$', '$30$'],
              correctAnswer: 0,
              explanation: 'Multiply before adding: $2 \\times 6 = 12$, then $5 + 12 = 17$. (Adding first would wrongly give $42$.)',
            },
            {
              question: 'Evaluate $24 \\div 4 \\div 2$.',
              options: ['$3$', '$12$', '$48$', '$6$'],
              correctAnswer: 0,
              explanation: 'Division ties with itself, so go left to right: $24 \\div 4 = 6$, then $6 \\div 2 = 3$.',
            },
          ],
        },
      },
      {
        id: 'eoo3-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example A: $2 + 3 \\times 4$

Multiplication comes before addition:
$$2 + 3 \\times 4 = 2 + 12 = 14$$

### Example B: $20 - 6 \\div 2$

Division comes before subtraction:
$$20 - 6 \\div 2 = 20 - 3 = 17$$

### Example C: $12 \\div 3 \\times 2$

Multiplication and division **tie**, so go **left to right**:
$$12 \\div 3 \\times 2 = 4 \\times 2 = 8$$

> ⚠️ If you did the multiplication first here, you'd get $12 \\div 6 = 2$ — **wrong**. Left-to-right matters when operations are tied.`,
      },
      {
        id: 'eoo3-dropdown',
        type: 'dropdown-select' as const,
        content: `**What Goes First?** 🔽

For each expression, pick the operation you must do **first**.`,
        exercise: {
          dropdowns: [
            { label: 'In $8 - 3 \\times 2$, do first:', options: ['$3 \\times 2$', '$8 - 3$', '$8 \\times 2$', '$3 - 2$'] },
            { label: 'In $(7 + 1) \\times 5$, do first:', options: ['$7 + 1$', '$1 \\times 5$', '$7 \\times 5$', '$8 \\times 5$'] },
            { label: 'In $10 + 18 \\div 9$, do first:', options: ['$18 \\div 9$', '$10 + 18$', '$10 \\div 9$', '$28 \\div 9$'] },
          ],
          correctAnswers: ['$3 \\times 2$', '$7 + 1$', '$18 \\div 9$'],
          hint1: 'Multiplication outranks subtraction, so $3 \\times 2$ comes before the subtraction.',
          hint2: 'Parentheses always come first, so simplify $7 + 1$ before multiplying.',
          hint3: 'Division outranks addition, so $18 \\div 9$ comes before the addition.',
          explanation: 'First steps: $8 - 3 \\times 2 \\Rightarrow 3\\times2=6$; $(7+1)\\times5 \\Rightarrow 7+1=8$; $10 + 18 \\div 9 \\Rightarrow 18\\div9=2$.',
        },
      },
      {
        id: 'eoo3-scan-tip',
        type: 'text' as const,
        content: `## A Two-Pass Strategy

A reliable way to evaluate a longer expression:

1. **Pass 1:** scan left to right and do every **multiplication and division** as you reach it.
2. **Pass 2:** scan left to right again and do every **addition and subtraction**.

$$7 \\times 2 + 8 \\div 4 \\;\\xrightarrow{\\text{pass 1}}\\; 14 + 2 \\;\\xrightarrow{\\text{pass 2}}\\; 16$$

This keeps the tied operations in the correct left-to-right order. Try it on the drill below.`,
      },
      {
        id: 'eoo3-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate (no exponents yet)** 🧮

**1)** $9 + 4 \\times 3 = \\,?$
**2)** $30 \\div 5 - 2 = \\,?$
**3)** $7 \\times 2 + 8 \\div 4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['21', '4', '16'],
          hint1: 'Multiply first: $4 \\times 3 = 12$, then $9 + 12 = 21$.',
          hint2: 'Divide first: $30 \\div 5 = 6$, then $6 - 2 = 4$.',
          hint3: 'Do both multiply/divide first: $7 \\times 2 = 14$ and $8 \\div 4 = 2$, then $14 + 2 = 16$.',
          explanation: '1) $9 + 12 = 21$.  2) $6 - 2 = 4$.  3) $14 + 2 = 16$. Multiplication and division always come before addition and subtraction.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'exponents-order-operations-prealg',
    sections: [
      {
        id: 'eoo4-intro',
        type: 'text' as const,
        content: `# 🔢 Exponents & Order of Operations

**Part 4 of 5 — Putting Exponents Into the Order**

---

> 🔑 **The Big Combination:** Now we fold exponents (the **E** in PEMDAS) and grouping symbols together. Exponents come right after parentheses — before any multiply, divide, add, or subtract.`,
      },
      {
        id: 'eoo4-with-exp',
        type: 'text' as const,
        content: `## Exponents Come Early

### Example A: $4 + 2 \\times 3^2$

Exponent first, then multiply, then add:
$$4 + 2 \\times 3^2 = 4 + 2 \\times 9 = 4 + 18 = 22$$

### Example B: $5 \\times 2^3 - 6$

$$5 \\times 2^3 - 6 = 5 \\times 8 - 6 = 40 - 6 = 34$$

### Example C: $(4 + 1)^2$ vs. $4 + 1^2$

Grouping changes everything:
$$(4 + 1)^2 = 5^2 = 25 \\qquad 4 + 1^2 = 4 + 1 = 5$$

> 💡 **The order inside PEMDAS:** Parentheses → **Exponents** → Multiply/Divide → Add/Subtract. The exponent always waits for what's *inside* its parentheses to finish, but runs *before* the multiplication and addition around it.`,
      },
      {
        id: 'eoo4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $2 + 3 \\times 2^2$.',
              options: ['$14$', '$20$', '$26$', '$10$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $2^2 = 4$. Then multiply: $3 \\times 4 = 12$. Then add: $2 + 12 = 14$.',
            },
            {
              question: 'Evaluate $(2 + 3)^2$.',
              options: ['$25$', '$13$', '$11$', '$10$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $2 + 3 = 5$. Then square: $5^2 = 25$. (Squaring each term separately is wrong.)',
            },
          ],
        },
      },
      {
        id: 'eoo4-grouping',
        type: 'text' as const,
        content: `## Grouping Symbols & Fraction Bars

Parentheses $()$, brackets $[\\,]$, and the **fraction bar** all act as grouping symbols. Work from the **innermost** group outward.

### Example: $3 \\times [\\,(8 - 5)^2 + 1\\,]$

$$3 \\times [\\,(8-5)^2 + 1\\,] = 3 \\times [\\,3^2 + 1\\,] = 3 \\times [\\,9 + 1\\,] = 3 \\times 10 = 30$$

### Example: a fraction bar groups top and bottom

$$\\frac{6 + 2^3}{7} = \\frac{6 + 8}{7} = \\frac{14}{7} = 2$$

The bar tells you to finish the **whole** numerator ($6 + 8 = 14$) before dividing by $7$.

> ⚠️ Treat a fraction bar like hidden parentheses around the top and around the bottom: simplify each completely, *then* divide.`,
      },
      {
        id: 'eoo4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Step Order** 🔽

You're evaluating $1 + 2 \\times 3^2$. Choose the result after each stage.`,
        exercise: {
          dropdowns: [
            { label: 'After exponents:', options: ['$1 + 2 \\times 9$', '$1 + 6^2$', '$3 \\times 9$', '$1 + 18^2$'] },
            { label: 'After multiplication:', options: ['$1 + 18$', '$3 \\times 9$', '$27$', '$1 + 9$'] },
            { label: 'Final value:', options: ['$19$', '$27$', '$10$', '$45$'] },
          ],
          correctAnswers: ['$1 + 2 \\times 9$', '$1 + 18$', '$19$'],
          hint1: 'Exponents come first: $3^2 = 9$, leaving $1 + 2 \\times 9$.',
          hint2: 'Multiplication before addition: $2 \\times 9 = 18$, leaving $1 + 18$.',
          hint3: 'Finish with the addition: $1 + 18 = 19$.',
          explanation: '$1 + 2 \\times 3^2 = 1 + 2 \\times 9 = 1 + 18 = 19$. Exponent, then multiply, then add.',
        },
      },
      {
        id: 'eoo4-checklist',
        type: 'text' as const,
        content: `## Your PEMDAS Checklist

For any expression that mixes grouping, exponents, and operations, ask in order:

1. Is there anything **inside parentheses or a fraction bar**? Simplify it first.
2. Are there any **exponents**? Evaluate them next.
3. **Multiply and divide**, left to right.
4. **Add and subtract**, left to right.

> 💡 If you ever feel stuck, rewrite one step per line — finishing exactly one operation each line makes mistakes easy to spot.`,
      },
      {
        id: 'eoo4-drill',
        type: 'input-boxes' as const,
        content: `**Full PEMDAS Drill** 🧮

**1)** $5^2 - 4 \\times 3 = \\,?$
**2)** $2 \\times (1 + 4)^2 = \\,?$
**3)** $\\dfrac{3^2 + 7}{4} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '50', '4'],
          hint1: 'Exponent first: $5^2 = 25$. Then $4 \\times 3 = 12$. Then $25 - 12 = 13$.',
          hint2: 'Parentheses first: $1 + 4 = 5$. Then $5^2 = 25$. Then $2 \\times 25 = 50$.',
          hint3: 'Finish the numerator: $3^2 + 7 = 9 + 7 = 16$. Then $16 \\div 4 = 4$.',
          explanation: '1) $25 - 12 = 13$.  2) $2 \\times 25 = 50$.  3) $16 \\div 4 = 4$. Always handle exponents and grouping before multiply/add.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'exponents-order-operations-prealg',
    sections: [
      {
        id: 'eoo5-intro',
        type: 'text' as const,
        content: `# 🔢 Exponents & Order of Operations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read and evaluate exponents, (2) handle negative bases and parentheses, (3) apply PEMDAS, and (4) combine them in one expression. Let's put it all together.`,
      },
      {
        id: 'eoo5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Key move |
|-----------|----------|
| $a^n$ | multiply $a$ by itself $n$ times |
| $a^0$ (with $a \\ne 0$) | always $1$ |
| $(-a)^n$ | even $n \\Rightarrow$ positive, odd $n \\Rightarrow$ negative |
| $-a^n$ | exponent hits only $a$; minus stays outside |
| Order | **P** → **E** → **M/D** (left→right) → **A/S** (left→right) |
| Fraction bar | groups top and bottom — simplify each, then divide |

> ⚠️ Top traps: $4^3 \\ne 12$ (it's $64$); $-2^4 \\ne (-2)^4$; and M/D and A/S are read **left to right**, not "all M before all D."`,
      },
      {
        id: 'eoo5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $36 \\div 2^2 + 5$.',
              options: ['$14$', '$23$', '$9$', '$41$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $2^2 = 4$. Then divide: $36 \\div 4 = 9$. Then add: $9 + 5 = 14$.',
            },
            {
              question: 'Evaluate $(-2)^3 + 10$.',
              options: ['$2$', '$18$', '$-2$', '$16$'],
              correctAnswer: 0,
              explanation: '$(-2)^3 = -8$ (odd power of a negative). Then $-8 + 10 = 2$.',
            },
          ],
        },
      },
      {
        id: 'eoo5-common-traps',
        type: 'text' as const,
        content: `## Before the Final Drill — Avoid These Traps

| Trap | Wrong | Right |
|------|-------|-------|
| Reading $a^b$ as $a \\times b$ | $4^3 = 12$ | $4^3 = 64$ |
| Squaring a sum term-by-term | $(2+3)^2 = 13$ | $(2+3)^2 = 25$ |
| Forgetting the fraction bar groups | $\\dfrac{6+8}{7} = 6 + \\dfrac{8}{7}$ | $\\dfrac{14}{7} = 2$ |
| Ignoring left-to-right ties | $12 \\div 3 \\times 2 = 2$ | $= 8$ |

Keep these in mind as you finish the drill below.`,
      },
      {
        id: 'eoo5-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

**1)** $4 \\times 3^2 - 10 = \\,?$
**2)** $\\dfrac{2^4 + 4}{5} = \\,?$
**3)** $2 \\times (6 - 2)^2 + 7 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['26', '4', '39'],
          hint1: 'Exponent first: $3^2 = 9$. Then $4 \\times 9 = 36$. Then $36 - 10 = 26$.',
          hint2: 'Numerator: $2^4 + 4 = 16 + 4 = 20$. Then $20 \\div 5 = 4$.',
          hint3: 'Parentheses: $6 - 2 = 4$, then $4^2 = 16$, then $2 \\times 16 = 32$, then $32 + 7 = 39$.',
          explanation: '1) $36 - 10 = 26$.  2) $20 \\div 5 = 4$.  3) $32 + 7 = 39$. Parentheses and exponents first, then multiply/divide, then add/subtract.',
        },
      },
      {
        id: 'eoo5-wrap',
        type: 'text' as const,
        content: `## You're Ready

You can now read a power, evaluate it (signs and all), and march through any expression with PEMDAS. One last check to lock it in.

> 🔑 **Remember the order:** **P**arentheses → **E**xponents → **M**ultiply/**D**ivide (left→right) → **A**dd/**S**ubtract (left→right).`,
      },
      {
        id: 'eoo5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the value of $2^5$?',
              options: ['$32$', '$10$', '$25$', '$16$'],
              correctAnswer: 0,
              explanation: '$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$. (It is not $2 \\times 5 = 10$.)',
            },
            {
              question: 'Evaluate $8 + 12 \\div 4 \\times 2$.',
              options: ['$14$', '$8$', '$10$', '$20$'],
              correctAnswer: 0,
              explanation: 'Division and multiplication tie, so go left to right: $12 \\div 4 = 3$, then $3 \\times 2 = 6$, then $8 + 6 = 14$.',
            },
            {
              question: 'Which statement is TRUE?',
              options: ['$-3^2 = -9$ and $(-3)^2 = 9$', '$-3^2 = 9$ and $(-3)^2 = -9$', 'Both equal $9$', 'Both equal $-9$'],
              correctAnswer: 0,
              explanation: 'Without parentheses, $-3^2 = -(3^2) = -9$. With parentheses, $(-3)^2 = (-3)(-3) = 9$. The parentheses decide the sign.',
            },
          ],
        },
      },
    ],
  },
]
