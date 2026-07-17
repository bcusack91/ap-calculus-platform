import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Distributive Property (Pre-Algebra).
 * Registry key / DB Topic.slug: 'distributive-property'.
 * 5 parts, gold-standard structure: the core idea (area model) → distributing with
 * negatives & multiple terms → combining with like terms / factoring out a GCF →
 * real-world applications & multi-step expressions → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every product, sum, and factorization was re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'distributive-property',
    sections: [
      {
        id: 'dp1-intro',
        type: 'text' as const,
        content: `# 📦 The Distributive Property

**Part 1 of 5 — The Core Idea**

---

### Topics in This Part

| Section |
|---------|
| What "Distribute" Means |
| The Area Model (a picture that proves it) |
| Your First Distributions |

> 🔑 **Key Concept:** The distributive property says a number multiplied by a sum equals the sum of the products:
> $$a(b + c) = ab + ac$$
> You "hand out" the multiplier to **every** term inside the parentheses.`,
      },
      {
        id: 'dp1-what',
        type: 'text' as const,
        content: `## What "Distribute" Means

When a number sits right next to a parenthesis, it multiplies **everything** inside:

$$3(x + 5) = 3 \\cdot x + 3 \\cdot 5 = 3x + 15$$

The $3$ gets "distributed" to the $x$ **and** to the $5$ — not just the first term.

### A Mental Picture

Think of $3(x + 5)$ as **three copies** of the group $(x + 5)$:

$$(x+5) + (x+5) + (x+5) = 3x + 15$$

Three $x$'s and three $5$'s — exactly what distributing gives you.

> ⚠️ **Common Mistake:** $3(x + 5) \\ne 3x + 5$. The $3$ must reach the $5$ too. Forgetting the second term is the #1 distribution error.`,
      },
      {
        id: 'dp1-area',
        type: 'text' as const,
        content: `## The Area Model — Why It's Always True

A rectangle's area is length $\\times$ width. Split the width into two pieces and the total area is the sum of the two smaller rectangles:

| | width $= b$ | width $= c$ |
|---|---|---|
| **height $= a$** | area $= ab$ | area $= ac$ |

The whole rectangle has height $a$ and total width $b + c$, so its area is $a(b+c)$. But it's also made of the two pieces $ab$ and $ac$. Therefore:

$$a(b + c) = ab + ac$$

### Numeric Check

Take $a = 4$, $b = 10$, $c = 3$:

$$4(10 + 3) = 4 \\cdot 13 = 52 \\qquad\\text{and}\\qquad 4\\cdot 10 + 4\\cdot 3 = 40 + 12 = 52 \\;✓$$

> 💡 This is also the mental-math trick for multiplication: $4 \\times 13 = 4(10+3) = 40 + 12 = 52$.`,
      },
      {
        id: 'dp1-concept-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression is equal to $5(x + 2)$?',
              options: ['$5x + 10$', '$5x + 2$', '$x + 10$', '$5x + 7$'],
              correctAnswer: 0,
              explanation: 'Distribute the $5$ to both terms: $5 \\cdot x + 5 \\cdot 2 = 5x + 10$.',
            },
            {
              question: 'Using the area model, $6(20 + 1)$ equals:',
              options: ['$126$', '$121$', '$120$', '$26$'],
              correctAnswer: 0,
              explanation: '$6 \\cdot 20 + 6 \\cdot 1 = 120 + 6 = 126$. (And indeed $6 \\times 21 = 126$.)',
            },
          ],
        },
      },
      {
        id: 'dp1-bridge',
        type: 'text' as const,
        content: `## Writing It Out Step by Step

A reliable habit: write the two products **before** simplifying, so nothing gets skipped.

$$8(x + 6) \\;=\\; \\underbrace{8 \\cdot x}_{8x} \\;+\\; \\underbrace{8 \\cdot 6}_{48} \\;=\\; 8x + 48$$

Now try a few on your own — focus on multiplying the outside number by the **constant** each time.`,
      },
      {
        id: 'dp1-first-drill',
        type: 'input-boxes' as const,
        content: `**Distribute It** 🧮

Multiply out each expression. Enter the constant (the number term) for each.

**1)** $2(x + 7) = 2x + \\,?$
**2)** $4(a + 3) = 4a + \\,?$
**3)** $9(y + 6) = 9y + \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['14', '12', '54'],
          hint1: '$2 \\cdot 7 = 14$.',
          hint2: '$4 \\cdot 3 = 12$.',
          hint3: '$9 \\cdot 6 = 54$.',
          explanation: '1) $2(x+7) = 2x + 14$.  2) $4(a+3) = 4a + 12$.  3) $9(y+6) = 9y + 54$. Each time the outside number multiplies the constant.',
        },
      },
      {
        id: 'dp1-coeff',
        type: 'text' as const,
        content: `## Both Terms Have a Variable? Same Rule

The multiplier still reaches every term, even when the inside has more than a constant:

$$4(2x + 3) = 4 \\cdot 2x + 4 \\cdot 3 = 8x + 12$$

Notice $4 \\cdot 2x = 8x$ — multiply the **coefficients** ($4 \\cdot 2 = 8$) and keep the variable.

**Example:** $7(3m + 1) = 21m + 7$.

You now have the one rule the whole topic is built on: *reach every term*. In Part 2 we add the twist that trips up the most students — **negative** signs.`,
      },
      {
        id: 'dp1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Distribution** 🔽

Choose the correct expanded form for each.`,
        exercise: {
          dropdowns: [
            { label: '$3(2x + 4) =$', options: ['$6x + 12$', '$6x + 4$', '$5x + 12$', '$2x + 12$'] },
            { label: '$7(m + 1) =$', options: ['$7m + 7$', '$7m + 1$', '$8m + 7$', '$7m$'] },
            { label: '$5(3y + 2) =$', options: ['$15y + 10$', '$15y + 2$', '$8y + 10$', '$15y + 7$'] },
          ],
          correctAnswers: ['$6x + 12$', '$7m + 7$', '$15y + 10$'],
          hint1: 'Multiply the $3$ by each term: $3 \\cdot 2x = 6x$ and $3 \\cdot 4 = 12$.',
          hint2: 'The $7$ reaches the $1$ too: $7 \\cdot 1 = 7$.',
          hint3: '$5 \\cdot 3y = 15y$ and $5 \\cdot 2 = 10$.',
          explanation: '1) $3(2x+4) = 6x + 12$.  2) $7(m+1) = 7m + 7$.  3) $5(3y+2) = 15y + 10$. The multiplier hits every term inside.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'distributive-property',
    sections: [
      {
        id: 'dp2-intro',
        type: 'text' as const,
        content: `# 📦 The Distributive Property

**Part 2 of 5 — Negatives & the Minus Sign**

---

> 🔑 **The Idea:** A negative multiplier flips the sign of **every** term it touches. And a subtraction inside the parentheses is really "plus a negative," so it gets distributed too.`,
      },
      {
        id: 'dp2-neg-outside',
        type: 'text' as const,
        content: `## A Negative on the Outside

When the multiplier is negative, apply the sign rules to each product:

$$-2(x + 5) = (-2)(x) + (-2)(5) = -2x - 10$$

$$-3(4a + 7) = -12a - 21$$

Both terms become negative because a negative times a positive is negative.

### Subtraction Inside

Treat $(x - 4)$ as $(x + (-4))$:

$$5(x - 4) = 5x - 20$$

$$6(2y - 3) = 12y - 18$$

> ⚠️ **Watch the sign of the second term.** In $5(x-4)$, the $-4$ stays negative: $5 \\cdot (-4) = -20$.`,
      },
      {
        id: 'dp2-neg-both',
        type: 'text' as const,
        content: `## Negative Outside *and* Subtraction Inside

This is where signs matter most. A negative times a negative is **positive**:

$$-4(x - 3) = (-4)(x) + (-4)(-3) = -4x + 12$$

The $-4 \\cdot -3 = +12$ — two negatives make a positive.

### Worked Example: $-2(3x - 5)$

$$-2(3x - 5) = (-2)(3x) + (-2)(-5) = -6x + 10$$

> 💡 **Sign shortcut:** When the outside number is negative, **every inside sign flips**. $+$ becomes $-$, and $-$ becomes $+$.`,
      },
      {
        id: 'dp2-sign-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Sign** 🔽

Distribute each expression and choose the correct result.`,
        exercise: {
          dropdowns: [
            { label: '$-3(x + 6) =$', options: ['$-3x - 18$', '$-3x + 18$', '$3x - 18$', '$-3x - 6$'] },
            { label: '$7(2a - 4) =$', options: ['$14a - 28$', '$14a + 28$', '$9a - 28$', '$14a - 4$'] },
            { label: '$-5(y - 2) =$', options: ['$-5y + 10$', '$-5y - 10$', '$5y - 10$', '$-5y - 2$'] },
          ],
          correctAnswers: ['$-3x - 18$', '$14a - 28$', '$-5y + 10$'],
          hint1: 'Negative outside, plus inside: both terms become negative.',
          hint2: 'Positive outside: $7 \\cdot 2a = 14a$ and $7 \\cdot (-4) = -28$.',
          hint3: 'Negative times negative is positive: $-5 \\cdot (-2) = +10$.',
          explanation: '1) $-3(x+6) = -3x - 18$.  2) $7(2a-4) = 14a - 28$.  3) $-5(y-2) = -5y + 10$ (the $-5 \\cdot -2$ becomes $+10$).',
        },
      },
      {
        id: 'dp2-error-table',
        type: 'text' as const,
        content: `## Two Sign Traps to Avoid

Most sign mistakes come from one of these two slips:

| Trap | Wrong | Right |
|---|---|---|
| Forgetting the sign on term 2 | $-2(x+3) = -2x + 6$ | $-2x - 6$ |
| Missing the double negative | $-5(x-2) = -5x - 10$ | $-5x + 10$ |

Read the outside sign and the inside sign **together** for each term. Let's test that on a fresh set.`,
      },
      {
        id: 'dp2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Distribute: $-6(2x - 1)$',
              options: ['$-12x + 6$', '$-12x - 6$', '$12x - 6$', '$-12x - 1$'],
              correctAnswer: 0,
              explanation: '$-6 \\cdot 2x = -12x$ and $-6 \\cdot (-1) = +6$, so $-12x + 6$.',
            },
            {
              question: 'Which is the correct distribution of $8(3 - 5n)$?',
              options: ['$24 - 40n$', '$24 + 40n$', '$11 - 40n$', '$24 - 5n$'],
              correctAnswer: 0,
              explanation: '$8 \\cdot 3 = 24$ and $8 \\cdot (-5n) = -40n$, giving $24 - 40n$.',
            },
          ],
        },
      },
      {
        id: 'dp2-drill-intro',
        type: 'text' as const,
        content: `## Now Without the Answer Choices

Multiple choice lets you check against options. The real skill is producing the right sign on your own. In the drill below, compute each constant term yourself — outside number times the inside constant, keeping track of the sign.

Reminder: $(\\text{negative}) \\times (\\text{positive}) = \\text{negative}$, and $(\\text{negative}) \\times (\\text{negative}) = \\text{positive}$.`,
      },
      {
        id: 'dp2-drill',
        type: 'input-boxes' as const,
        content: `**Sign Drill** 🧮

Distribute and enter the **constant term, with its sign** (e.g. \`-12\`).

**1)** $-4(x + 5) = -4x + \\,?$
**2)** $3(2a - 9) = 6a + \\,?$
**3)** $-7(m - 2) = -7m + \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-20', '-27', '14'],
          hint1: '$-4 \\cdot 5 = -20$.',
          hint2: '$3 \\cdot (-9) = -27$.',
          hint3: '$-7 \\cdot (-2) = +14$ — negative times negative is positive.',
          explanation: '1) $-4(x+5) = -4x - 20$.  2) $3(2a-9) = 6a - 27$.  3) $-7(m-2) = -7m + 14$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'distributive-property',
    sections: [
      {
        id: 'dp3-intro',
        type: 'text' as const,
        content: `# 📦 The Distributive Property

**Part 3 of 5 — Combine, Then Factor**

---

> 🔑 **Two directions:** Distributing **expands** a product into a sum. After distributing you usually **combine like terms**. And running the rule *backward* lets you **factor** — pull a common factor back out front.`,
      },
      {
        id: 'dp3-like-terms',
        type: 'text' as const,
        content: `## Distribute, Then Combine Like Terms

**Like terms** have the same variable part. After distributing, add or subtract them.

### Worked Example: $3(x + 4) + 2x$

$$3(x + 4) + 2x = 3x + 12 + 2x = (3x + 2x) + 12 = 5x + 12$$

### Worked Example: $5(2a + 1) - 3a$

$$5(2a + 1) - 3a = 10a + 5 - 3a = 7a + 5$$

> 💡 Only combine terms that match: $x$'s with $x$'s, plain numbers with plain numbers. You **cannot** combine $5x$ and $12$ — they're unlike.`,
      },
      {
        id: 'dp3-two-distros',
        type: 'text' as const,
        content: `## Two Sets of Parentheses

Distribute each group **first**, then combine:

### Worked Example: $2(x + 3) + 4(x + 1)$

$$2(x+3) + 4(x+1) = (2x + 6) + (4x + 4) = 6x + 10$$

### Worked Example: $6(a + 2) - 3(a + 1)$

Watch the $-3$ — it distributes as a negative:

$$6(a+2) - 3(a+1) = (6a + 12) + (-3a - 3) = 3a + 9$$

> ⚠️ The minus in front of $3(a+1)$ makes it $-3a - 3$. Distribute the **negative**, then combine: $6a - 3a = 3a$ and $12 - 3 = 9$.`,
      },
      {
        id: 'dp3-combine-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify: $4(x + 2) + 3x$',
              options: ['$7x + 8$', '$7x + 2$', '$4x + 8$', '$12x + 8$'],
              correctAnswer: 0,
              explanation: '$4x + 8 + 3x = 7x + 8$. Combine the $x$-terms: $4x + 3x = 7x$.',
            },
            {
              question: 'Simplify: $5(a + 3) - 2(a + 4)$',
              options: ['$3a + 7$', '$3a + 23$', '$3a + 11$', '$7a + 7$'],
              correctAnswer: 0,
              explanation: '$5a + 15 - 2a - 8 = 3a + 7$. Note $-2(a+4) = -2a - 8$.',
            },
          ],
        },
      },
      {
        id: 'dp3-factor',
        type: 'text' as const,
        content: `## Factoring — Distribution in Reverse

To **factor**, pull out the **greatest common factor (GCF)** of all terms and write it in front:

$$6x + 9 = 3(2x + 3)$$

Here $3$ divides both $6x$ and $9$: $\\;6x \\div 3 = 2x$ and $9 \\div 3 = 3$.

### How to Factor Out a GCF

1. Find the largest number that divides **every** coefficient.
2. Write it outside the parentheses.
3. Inside, write what's left after dividing each term.

| Expression | GCF | Factored |
|---|---|---|
| $4x + 8$ | $4$ | $4(x + 2)$ |
| $10a + 15$ | $5$ | $5(2a + 3)$ |
| $12m - 18$ | $6$ | $6(2m - 3)$ |

> ✅ **Check by re-distributing:** $5(2a + 3) = 10a + 15$ ✓. Factoring and distributing undo each other.`,
      },
      {
        id: 'dp3-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Factor It Out** 🔽

Choose the fully factored form (largest possible GCF).`,
        exercise: {
          dropdowns: [
            { label: '$8x + 12 =$', options: ['$4(2x + 3)$', '$2(4x + 6)$', '$4(2x + 12)$', '$8(x + 12)$'] },
            { label: '$9a - 6 =$', options: ['$3(3a - 2)$', '$3(3a - 6)$', '$9(a - 6)$', '$3(a - 2)$'] },
            { label: '$14m + 7 =$', options: ['$7(2m + 1)$', '$7(2m + 7)$', '$7(2m)$', '$2(7m + 1)$'] },
          ],
          correctAnswers: ['$4(2x + 3)$', '$3(3a - 2)$', '$7(2m + 1)$'],
          hint1: 'GCF of $8$ and $12$ is $4$: $8x \\div 4 = 2x$, $12 \\div 4 = 3$.',
          hint2: 'GCF of $9$ and $6$ is $3$: $9a \\div 3 = 3a$, $6 \\div 3 = 2$.',
          hint3: 'GCF of $14$ and $7$ is $7$: $14m \\div 7 = 2m$, $7 \\div 7 = 1$.',
          explanation: '1) $8x+12 = 4(2x+3)$.  2) $9a-6 = 3(3a-2)$.  3) $14m+7 = 7(2m+1)$. Always pull out the largest common factor.',
        },
      },
      {
        id: 'dp3-gcf-recap',
        type: 'text' as const,
        content: `## Find the GCF First

The hardest part of factoring is spotting the **largest** common factor. Always ask: "What is the biggest number that divides every coefficient?"

| Terms | Common factors | **Greatest** |
|---|---|---|
| $12$ and $8$ | $1, 2, 4$ | $4$ |
| $20$ and $30$ | $1, 2, 5, 10$ | $10$ |
| $9$ and $21$ | $1, 3$ | $3$ |

Pull out the greatest one — then the leftover inside has **no** remaining common factor. That's how you know you factored completely.`,
      },
      {
        id: 'dp3-gcf-drill',
        type: 'input-boxes' as const,
        content: `**GCF Drill** 🧮

Factor out the **greatest** common factor. Enter the number that goes **outside** the parentheses.

**1)** $20x + 30 = \\,?\\,(2x + 3)$
**2)** $24a - 16 = \\,?\\,(3a - 2)$
**3)** $18m + 27 = \\,?\\,(2m + 3)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '8', '9'],
          hint1: 'GCF of $20$ and $30$ is $10$: $20x \\div 10 = 2x$, $30 \\div 10 = 3$.',
          hint2: 'GCF of $24$ and $16$ is $8$: $24a \\div 8 = 3a$, $16 \\div 8 = 2$.',
          hint3: 'GCF of $18$ and $27$ is $9$: $18m \\div 9 = 2m$, $27 \\div 9 = 3$.',
          explanation: '1) $20x+30 = 10(2x+3)$.  2) $24a-16 = 8(3a-2)$.  3) $18m+27 = 9(2m+3)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'distributive-property',
    sections: [
      {
        id: 'dp4-intro',
        type: 'text' as const,
        content: `# 📦 The Distributive Property

**Part 4 of 5 — Real-World Uses & Bigger Expressions**

---

> 🔑 **Where it shows up:** Mental math, shopping totals, perimeter and area, and setting up equations all lean on distribution. Let's use it on real problems.`,
      },
      {
        id: 'dp4-mental',
        type: 'text' as const,
        content: `## Mental Math with Distribution

Break a hard product into easy pieces:

$$7 \\times 98 = 7(100 - 2) = 700 - 14 = 686$$

$$6 \\times 53 = 6(50 + 3) = 300 + 18 = 318$$

### Shopping Example

You buy $4$ notebooks, each costing \\$3 for the notebook plus \\$1 tax. The total is:

$$4(3 + 1) = 4 \\cdot 3 + 4 \\cdot 1 = 12 + 4 = 16$$

giving \\$16. Either pay \\$4 per notebook four times, or buy \\$12 of notebooks and \\$4 of tax — same total. That's the distributive property in your wallet.`,
      },
      {
        id: 'dp4-mental-drill',
        type: 'input-boxes' as const,
        content: `**Mental Math Drill** 🧮

Use the distributive property to compute each (no calculator needed).

**1)** $5 \\times 99 = 5(100 - 1) = \\,?$
**2)** $8 \\times 21 = 8(20 + 1) = \\,?$
**3)** $3 \\times 104 = 3(100 + 4) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['495', '168', '312'],
          hint1: '$5 \\cdot 100 - 5 \\cdot 1 = 500 - 5 = 495$.',
          hint2: '$8 \\cdot 20 + 8 \\cdot 1 = 160 + 8 = 168$.',
          hint3: '$3 \\cdot 100 + 3 \\cdot 4 = 300 + 12 = 312$.',
          explanation: '1) $500 - 5 = 495$.  2) $160 + 8 = 168$.  3) $300 + 12 = 312$. Splitting into round numbers makes each product easy.',
        },
      },
      {
        id: 'dp4-perimeter',
        type: 'text' as const,
        content: `## Geometry: Perimeter & Area

A rectangle is $x + 4$ long and $3$ wide.

**Area** $=$ length $\\times$ width:

$$3(x + 4) = 3x + 12$$

**Perimeter** $= 2(\\text{length} + \\text{width})$:

$$2\\big((x + 4) + 3\\big) = 2(x + 7) = 2x + 14$$

> 💡 Distribution turns a "grouped" geometry formula into a clean expression you can evaluate for any $x$. If $x = 6$: area $= 3(6)+12 = 30$ and perimeter $= 2(6)+14 = 26$.`,
      },
      {
        id: 'dp4-app-mc',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A box of treats costs $\\$5$ plus $\\$2$ shipping. The cost of $6$ boxes, $6(5 + 2)$, is:',
              options: ['$\\$42$', '$\\$32$', '$\\$37$', '$\\$12$'],
              correctAnswer: 0,
              explanation: '$6(5+2) = 6 \\cdot 7 = 42$, or $6\\cdot5 + 6\\cdot2 = 30 + 12 = 42$ dollars.',
            },
            {
              question: 'The area of a rectangle with length $x + 5$ and width $4$ is:',
              options: ['$4x + 20$', '$4x + 5$', '$x + 20$', '$4x + 9$'],
              correctAnswer: 0,
              explanation: 'Area $= 4(x+5) = 4x + 20$.',
            },
            {
              question: 'Compute $9 \\times 102$ mentally using distribution.',
              options: ['$918$', '$908$', '$928$', '$911$'],
              correctAnswer: 0,
              explanation: '$9(100+2) = 900 + 18 = 918$.',
            },
          ],
        },
      },
      {
        id: 'dp4-multiterm',
        type: 'text' as const,
        content: `## Three Terms Inside

The rule reaches **every** term, no matter how many:

$$2(x + 3y + 5) = 2x + 6y + 10$$

$$-3(2a - b + 4) = -6a + 3b - 12$$

In the second one: $-3 \\cdot 2a = -6a$, $\\;-3 \\cdot (-b) = +3b$, $\\;-3 \\cdot 4 = -12$.

> ⚠️ With three or more terms, students often stop after two. Touch **each** term, every time.`,
      },
      {
        id: 'dp4-multiterm-drill',
        type: 'input-boxes' as const,
        content: `**Multi-Term Drill** 🧮

Distribute fully. Enter each term's coefficient/constant **with sign**, in order.

**1)** $4(a + 2b + 3)$: the $a$-coefficient is ?, the $b$-coefficient is ?, the constant is ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '8', '12'],
          hint1: '$4 \\cdot a = 4a$, so the $a$-coefficient is $4$.',
          hint2: '$4 \\cdot 2b = 8b$, so the $b$-coefficient is $8$.',
          hint3: '$4 \\cdot 3 = 12$, the constant.',
          explanation: '$4(a + 2b + 3) = 4a + 8b + 12$. Coefficients: $4$, $8$, $12$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'distributive-property',
    sections: [
      {
        id: 'dp5-intro',
        type: 'text' as const,
        content: `# 📦 The Distributive Property

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) distribute a multiplier to every term, (2) handle negatives and subtraction, (3) combine like terms, (4) factor out a GCF, and (5) apply it to real problems. Time to put it all together.`,
      },
      {
        id: 'dp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move | Example |
|---|---|---|
| Expand $a(b+c)$ | multiply $a$ by each term | $3(x+5) = 3x + 15$ |
| Negative outside | flip every inside sign | $-2(x-4) = -2x + 8$ |
| Combine | add matching like terms | $5x + 3 + 2x = 7x + 3$ |
| Factor | pull out the GCF | $6x + 9 = 3(2x+3)$ |

> ⚠️ **Three things to never forget:** reach **every** term, watch the **sign** of a negative multiplier, and only combine **like** terms.`,
      },
      {
        id: 'dp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify: $-2(3x - 4) + 5x$',
              options: ['$-x + 8$', '$-x - 8$', '$11x + 8$', '$-x + 4$'],
              correctAnswer: 0,
              explanation: '$-2(3x-4) = -6x + 8$, then $-6x + 8 + 5x = -x + 8$.',
            },
            {
              question: 'Factor completely: $15a + 25$',
              options: ['$5(3a + 5)$', '$5(3a + 25)$', '$3(5a + 8)$', '$15(a + 25)$'],
              correctAnswer: 0,
              explanation: 'GCF of $15$ and $25$ is $5$: $15a \\div 5 = 3a$, $25 \\div 5 = 5$, so $5(3a+5)$.',
            },
          ],
        },
      },
      {
        id: 'dp5-strategy',
        type: 'text' as const,
        content: `## A Reliable Order of Operations

When an expression mixes distribution and combining, work in this order:

1. **Distribute** every multiplier across its parentheses (watch the signs).
2. **Combine** like terms — $x$'s together, constants together.
3. **Double-check** by re-distributing a factored answer, or by plugging in a number.

> 💡 **Plug-in check:** To test $3(2x+1)+4x = 10x+3$, try $x=1$: left $= 3(3)+4 = 13$, right $= 10+3 = 13$ ✓.`,
      },
      {
        id: 'dp5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Simplify $3(2x + 1) + 4x$ and enter the $x$-coefficient: ?
**2)** ... and enter its constant: ?
**3)** Compute $7 \\times 96$ using distribution: ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '3', '672'],
          hint1: '$3(2x+1) = 6x + 3$, then $6x + 4x = 10x$.',
          hint2: 'The constant from $6x + 3 + 4x$ is just $3$.',
          hint3: '$7(100 - 4) = 700 - 28 = 672$.',
          explanation: '1) $3(2x+1)+4x = 10x + 3$, so the $x$-coefficient is $10$.  2) constant $= 3$.  3) $7 \\times 96 = 700 - 28 = 672$.',
        },
      },
      {
        id: 'dp5-ready',
        type: 'text' as const,
        content: `## You're Ready

You've expanded, handled negatives, combined like terms, factored out a GCF, and used distribution on real problems. One final set ties it all together — take your time and watch every sign.`,
      },
      {
        id: 'dp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Distribute: $-4(2x - 3)$',
              options: ['$-8x + 12$', '$-8x - 12$', '$8x - 12$', '$-8x - 3$'],
              correctAnswer: 0,
              explanation: '$-4 \\cdot 2x = -8x$ and $-4 \\cdot (-3) = +12$, giving $-8x + 12$.',
            },
            {
              question: 'Simplify: $6(x + 2) - 4(x - 1)$',
              options: ['$2x + 16$', '$2x + 8$', '$10x + 16$', '$2x + 11$'],
              correctAnswer: 0,
              explanation: '$6x + 12 - 4x + 4 = 2x + 16$. Note $-4(x-1) = -4x + 4$.',
            },
            {
              question: 'Factor completely: $18m - 12$',
              options: ['$6(3m - 2)$', '$6(3m - 12)$', '$3(6m - 4)$', '$2(9m - 6)$'],
              correctAnswer: 0,
              explanation: 'GCF of $18$ and $12$ is $6$: $18m \\div 6 = 3m$, $12 \\div 6 = 2$, so $6(3m - 2)$.',
            },
          ],
        },
      },
    ],
  },
]
