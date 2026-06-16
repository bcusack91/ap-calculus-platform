import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Order of Operations (Grade 5 Math).
 * Registry key / DB slug: 'order-of-operations'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'order-of-operations',
    sections: [
      {
        id: 'ooo1-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations

**Part 1 of 5 — Why Order Matters**

---

### Topics in This Part

| Section |
|---------|
| Two People, Two Answers |
| The Rule: GEMDAS (PEMDAS) |
| Spotting Which Operation Comes First |

> 🔑 **Key Concept:** A math expression like $4 + 3 \\times 2$ has only **one** correct answer. The **order of operations** is the agreed-upon set of rules that tells everyone in the world to solve it the same way.`,
      },
      {
        id: 'ooo1-twoanswers',
        type: 'text' as const,
        content: `## Two People, Two Answers?

Look at this expression:

$$4 + 3 \\times 2$$

**Maya** works left to right: $4 + 3 = 7$, then $7 \\times 2 = 14$.

**Liam** multiplies first: $3 \\times 2 = 6$, then $4 + 6 = 10$.

They got **different answers** — but a math problem can't have two right answers! So mathematicians made a rule: **multiplication is done before addition.**

That makes **Liam** correct: the answer is $\\mathbf{10}$.

> ⚠️ **Watch out:** "Left to right" is *not* the first rule. You only work left to right *within* a step. The real boss is the order of operations.`,
      },
      {
        id: 'ooo1-gemdas',
        type: 'text' as const,
        content: `## The Rule: GEMDAS

Solve operations in this order — top of the list first:

| Order | Operation | Symbols |
|-------|-----------|---------|
| 1️⃣ | **G**rouping | $(\\;)$, $[\\;]$, $\\{\\;\\}$ |
| 2️⃣ | **E**xponents | $3^2$, $5^3$ |
| 3️⃣ | **M**ultiply / **D**ivide | $\\times$, $\\div$ — *left to right* |
| 4️⃣ | **A**dd / **S**ubtract | $+$, $-$ — *left to right* |

You may have heard **PEMDAS** ("Please Excuse My Dear Aunt Sally"). It's the same rule — "P" for **P**arentheses is just another name for **G**rouping.

> 💡 **The trick:** Multiply/Divide are a **team** on the same level — do whichever comes first reading left to right. Add/Subtract are a team too. They are *not* "M before D" or "A before S."`,
      },
      {
        id: 'ooo1-firststep',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $6 + 5 \\times 4$, which operation do you do FIRST?',
              options: ['$5 \\times 4$', '$6 + 5$', 'It does not matter', '$6 + 4$'],
              correctAnswer: 0,
              explanation: 'Multiplication comes before addition, so do $5 \\times 4 = 20$ first, then $6 + 20 = 26$.',
            },
            {
              question: 'What is the correct value of $4 + 3 \\times 2$?',
              options: ['$10$', '$14$', '$24$', '$9$'],
              correctAnswer: 0,
              explanation: 'Multiply first: $3 \\times 2 = 6$. Then add: $4 + 6 = 10$. (Working left to right would give $14$, which is wrong.)',
            },
          ],
        },
      },
      {
        id: 'ooo1-spot',
        type: 'dropdown-select' as const,
        content: `**Which Comes First?** 🔽

For each expression, choose the operation that GEMDAS says to do first.`,
        exercise: {
          dropdowns: [
            { label: 'In $10 - 2 \\times 3$, do first:', options: ['$2 \\times 3$', '$10 - 2$', '$10 - 3$'] },
            { label: 'In $(8 + 1) \\times 5$, do first:', options: ['$8 + 1$', '$1 \\times 5$', '$8 \\times 5$'] },
            { label: 'In $12 \\div 4 + 7$, do first:', options: ['$12 \\div 4$', '$4 + 7$', '$12 + 7$'] },
          ],
          correctAnswers: ['$2 \\times 3$', '$8 + 1$', '$12 \\div 4$'],
          hint1: 'Grouping (parentheses) always wins. Otherwise multiply/divide beat add/subtract.',
          hint2: 'In $(8+1)\\times 5$ the parentheses go first, even though multiplication usually comes before addition.',
          hint3: 'Division is on the multiply/divide team, so $12 \\div 4$ happens before the $+7$.',
          explanation: '1) Multiply before subtract → $2\\times 3$. 2) Parentheses always first → $8+1$. 3) Divide before add → $12 \\div 4$.',
        },
      },
      {
        id: 'ooo1-wrap',
        type: 'text' as const,
        content: `## You've Got the Map

GEMDAS is the map for *every* expression you'll ever simplify:

$$\\textbf{G} \\to \\textbf{E} \\to \\textbf{MD} \\to \\textbf{AS}$$

In Part 2 we'll zoom in on the trickiest part for most students: the **Multiply/Divide** team and the **Add/Subtract** team, and that little phrase "left to right."`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'order-of-operations',
    sections: [
      {
        id: 'ooo2-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations

**Part 2 of 5 — The Left-to-Right Teams**

---

> 🔑 **The Idea:** Multiply and Divide share **one** level. Add and Subtract share **one** level. Inside a level, you go **left to right** — whichever symbol you reach first, you do first.`,
      },
      {
        id: 'ooo2-mdteam',
        type: 'text' as const,
        content: `## The Multiply / Divide Team

When an expression has both $\\times$ and $\\div$ with nothing higher in the way, do them **left to right**.

### Worked Example: $20 \\div 5 \\times 2$

Reading left to right, division comes first:

$$20 \\div 5 \\times 2 = 4 \\times 2 = 8$$

> ⚠️ **Common mistake:** Doing the multiply first gives $20 \\div 10 = 2$ — **wrong!** Because $\\times$ and $\\div$ are equal, you must take them in the order they appear: division was on the left, so it goes first.`,
      },
      {
        id: 'ooo2-asteam',
        type: 'text' as const,
        content: `## The Add / Subtract Team

Same idea for $+$ and $-$: equal level, so go **left to right**.

### Worked Example: $15 - 8 + 3$

$$15 - 8 + 3 = 7 + 3 = 10$$

If you wrongly added first ($8 + 3 = 11$, then $15 - 11 = 4$), you'd get the wrong answer.

> 💡 **Why left to right works:** $15 - 8 + 3$ really means "start at 15, take away 8, then add 3." The $-$ belongs to the 8 and the $+$ belongs to the 3. Going left to right keeps each sign with its own number.`,
      },
      {
        id: 'ooo2-mdquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $24 \\div 6 \\times 2$.',
              options: ['$8$', '$2$', '$12$', '$48$'],
              correctAnswer: 0,
              explanation: 'Left to right: $24 \\div 6 = 4$, then $4 \\times 2 = 8$. (Multiplying first would wrongly give $24 \\div 12 = 2$.)',
            },
            {
              question: 'Simplify $18 - 5 - 4$.',
              options: ['$9$', '$17$', '$13$', '$7$'],
              correctAnswer: 0,
              explanation: 'Left to right: $18 - 5 = 13$, then $13 - 4 = 9$. Subtraction must go left to right.',
            },
          ],
        },
      },
      {
        id: 'ooo2-combine',
        type: 'text' as const,
        content: `## Putting the Two Teams Together

When an expression has multiply/divide **and** add/subtract, the higher team ($\\times \\div$) goes first — *then* the lower team ($+ -$).

### Worked Example: $7 + 12 \\div 4 - 1$

**Step 1 — Multiply/Divide first:** $12 \\div 4 = 3$.

$$7 + 3 - 1$$

**Step 2 — Now add/subtract, left to right:** $7 + 3 = 10$, then $10 - 1 = 9$.

$$7 + 12 \\div 4 - 1 = 9$$`,
      },
      {
        id: 'ooo2-drill',
        type: 'input-boxes' as const,
        content: `**Your Turn** 🧮

Simplify each expression. Enter just the final number.

**1)** $36 \\div 9 \\times 3 = \\,?$
**2)** $20 - 6 + 5 = \\,?$
**3)** $10 + 8 \\div 2 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '19', '14'],
          hint1: '$36 \\div 9 \\times 3$: divide first → $4 \\times 3$.',
          hint2: '$20 - 6 + 5$: left to right → $14 + 5$.',
          hint3: '$10 + 8 \\div 2$: divide first → $10 + 4$.',
          explanation: '1) $36 \\div 9 = 4$, $4 \\times 3 = 12$.  2) $20 - 6 = 14$, $14 + 5 = 19$.  3) $8 \\div 2 = 4$, $10 + 4 = 14$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'order-of-operations',
    sections: [
      {
        id: 'ooo3-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations

**Part 3 of 5 — Grouping Symbols**

---

> 🔑 **Why grouping wins:** Parentheses are like a **VIP pass** — whatever is inside gets done first, no matter what operation it is. They let us *override* the normal order.`,
      },
      {
        id: 'ooo3-parens',
        type: 'text' as const,
        content: `## Parentheses Go First

Compare these two expressions — same numbers, different answers:

| Expression | Work | Answer |
|------------|------|--------|
| $4 + 3 \\times 2$ | $4 + 6$ | $10$ |
| $(4 + 3) \\times 2$ | $7 \\times 2$ | $14$ |

The parentheses **force** the $4 + 3$ to happen first.

### Worked Example: $5 \\times (9 - 6)$

**Step 1 — Inside the parentheses:** $9 - 6 = 3$.

$$5 \\times 3 = 15$$

> 💡 Think of parentheses as a fence: solve everything *inside the fence* down to a single number before you do anything outside it.`,
      },
      {
        id: 'ooo3-parensquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $(6 + 2) \\times 3$.',
              options: ['$24$', '$12$', '$36$', '$11$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $6 + 2 = 8$. Then $8 \\times 3 = 24$.',
            },
            {
              question: 'Simplify $30 - (4 + 6)$.',
              options: ['$20$', '$32$', '$40$', '$26$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $4 + 6 = 10$. Then $30 - 10 = 20$.',
            },
          ],
        },
      },
      {
        id: 'ooo3-nested',
        type: 'text' as const,
        content: `## Nested Grouping: Brackets

Sometimes a group lives **inside** another group. We use **brackets** $[\\;]$ on the outside so the symbols are easier to read.

> 🔑 **Rule:** Work from the **inside out** — the innermost parentheses first.

### Worked Example: $2 \\times [ (3 + 1) \\times 5 ]$

**Step 1 — Innermost parentheses:** $3 + 1 = 4$.

$$2 \\times [\\, 4 \\times 5 \\,]$$

**Step 2 — Inside the brackets:** $4 \\times 5 = 20$.

$$2 \\times 20 = 40$$`,
      },
      {
        id: 'ooo3-steps',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're simplifying $40 - [ (2 + 3) \\times 4 ]$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First (innermost):', options: ['$2 + 3 = 5$', '$3 \\times 4 = 12$', '$40 - 2 = 38$'] },
            { label: 'Next (inside brackets):', options: ['$5 \\times 4 = 20$', '$5 + 4 = 9$', '$2 \\times 4 = 8$'] },
            { label: 'Last:', options: ['$40 - 20 = 20$', '$40 - 5 = 35$', '$40 + 20 = 60$'] },
          ],
          correctAnswers: ['$2 + 3 = 5$', '$5 \\times 4 = 20$', '$40 - 20 = 20$'],
          hint1: 'Start with the innermost parentheses: $2 + 3$.',
          hint2: 'Replace $(2+3)$ with $5$, then do what is left inside the brackets: $5 \\times 4$.',
          hint3: 'The brackets simplify to $20$, leaving $40 - 20$.',
          explanation: 'Inside out: $2+3=5$, then $5\\times 4 = 20$, then $40 - 20 = 20$.',
        },
      },
      {
        id: 'ooo3-drill',
        type: 'input-boxes' as const,
        content: `**Your Turn** 🧮

Simplify each expression. Enter just the final number.

**1)** $(7 + 5) \\div 4 = \\,?$
**2)** $3 \\times (10 - 6) = \\,?$
**3)** $[ (8 - 2) \\times 2 ] + 1 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '12', '13'],
          hint1: '$(7 + 5) = 12$, then $12 \\div 4$.',
          hint2: '$(10 - 6) = 4$, then $3 \\times 4$.',
          hint3: 'Inside out: $8 - 2 = 6$, then $6 \\times 2 = 12$, then $12 + 1$.',
          explanation: '1) $12 \\div 4 = 3$.  2) $3 \\times 4 = 12$.  3) $6 \\times 2 = 12$, then $12 + 1 = 13$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'order-of-operations',
    sections: [
      {
        id: 'ooo4-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations

**Part 4 of 5 — Exponents & Full Expressions**

---

> 🔑 **Big Payoff:** Now we add the last piece — **exponents** — and run complete GEMDAS problems from start to finish.`,
      },
      {
        id: 'ooo4-exponents',
        type: 'text' as const,
        content: `## Exponents Come Right After Grouping

An **exponent** is a small raised number that tells you how many times to multiply the base by itself:

$$3^2 = 3 \\times 3 = 9 \\qquad 2^3 = 2 \\times 2 \\times 2 = 8$$

In GEMDAS, exponents are step **2** — done *after* grouping but *before* any multiply, divide, add, or subtract.

### Worked Example: $5 + 2^3$

**Step 1 — Exponent first:** $2^3 = 8$.

$$5 + 8 = 13$$

> ⚠️ **Common mistake:** $2^3$ is **not** $2 \\times 3 = 6$. It is $2 \\times 2 \\times 2 = 8$. The exponent counts how many copies you multiply, not what you multiply by.`,
      },
      {
        id: 'ooo4-expquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $4^2$?',
              options: ['$16$', '$8$', '$6$', '$42$'],
              correctAnswer: 0,
              explanation: '$4^2 = 4 \\times 4 = 16$. (It is not $4 \\times 2 = 8$.)',
            },
            {
              question: 'Simplify $10 - 3^2$.',
              options: ['$1$', '$4$', '$49$', '$7$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $3^2 = 9$. Then $10 - 9 = 1$.',
            },
          ],
        },
      },
      {
        id: 'ooo4-full',
        type: 'text' as const,
        content: `## A Full GEMDAS Problem

Let's run every step on one expression.

### Worked Example: $2 \\times (3 + 4)^2 - 10$

**Step 1 — Grouping:** $3 + 4 = 7$.
$$2 \\times 7^2 - 10$$

**Step 2 — Exponent:** $7^2 = 49$.
$$2 \\times 49 - 10$$

**Step 3 — Multiply/Divide:** $2 \\times 49 = 98$.
$$98 - 10$$

**Step 4 — Add/Subtract:** $98 - 10 = 88$.

$$2 \\times (3 + 4)^2 - 10 = 88$$

> ✅ **Check the order:** G → E → MD → AS. We never skipped a level.`,
      },
      {
        id: 'ooo4-stepsdropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through It** 🔽

Simplify $1 + 6 \\times 2^2$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First:', options: ['$2^2 = 4$', '$6 \\times 2 = 12$', '$1 + 6 = 7$'] },
            { label: 'Next:', options: ['$6 \\times 4 = 24$', '$1 + 6 = 7$', '$4 + 1 = 5$'] },
            { label: 'Last:', options: ['$1 + 24 = 25$', '$1 + 4 = 5$', '$7 \\times 4 = 28$'] },
          ],
          correctAnswers: ['$2^2 = 4$', '$6 \\times 4 = 24$', '$1 + 24 = 25$'],
          hint1: 'Exponents come before multiply and add, so do $2^2$ first.',
          hint2: 'After $2^2 = 4$, multiply before you add: $6 \\times 4$.',
          hint3: 'Finally add: $1 + 24$.',
          explanation: 'E first: $2^2 = 4$. MD next: $6 \\times 4 = 24$. AS last: $1 + 24 = 25$.',
        },
      },
      {
        id: 'ooo4-drill',
        type: 'input-boxes' as const,
        content: `**Your Turn** 🧮

Simplify each expression. Enter just the final number.

**1)** $3^2 + 4 \\times 2 = \\,?$
**2)** $(5 - 2)^2 + 1 = \\,?$
**3)** $50 - 2 \\times 5^2 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['17', '10', '0'],
          hint1: '$3^2 = 9$ and $4 \\times 2 = 8$, then add.',
          hint2: 'Parentheses first: $5 - 2 = 3$, then $3^2 = 9$, then $+ 1$.',
          hint3: 'Exponent first: $5^2 = 25$, then $2 \\times 25 = 50$, then $50 - 50$.',
          explanation: '1) $9 + 8 = 17$.  2) $3^2 + 1 = 9 + 1 = 10$.  3) $5^2 = 25$, $2 \\times 25 = 50$, $50 - 50 = 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'order-of-operations',
    sections: [
      {
        id: 'ooo5-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) follow GEMDAS, (2) handle the left-to-right teams, (3) work grouping symbols inside out, and (4) include exponents. Let's put it all together.`,
      },
      {
        id: 'ooo5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Step | Do this | Direction |
|------|---------|-----------|
| **G**rouping | $(\\;)$, $[\\;]$ — innermost first | inside out |
| **E**xponents | $a^b$ | — |
| **M**ultiply / **D**ivide | $\\times$, $\\div$ | left to right |
| **A**dd / **S**ubtract | $+$, $-$ | left to right |

> ⚠️ **Two traps to remember:** (1) $\\times$ and $\\div$ are **equal** — go left to right, don't always multiply first. (2) $2^3$ means $2 \\times 2 \\times 2 = 8$, **not** $2 \\times 3$.`,
      },
      {
        id: 'ooo5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $8 + 2 \\times (6 - 1)$.',
              options: ['$18$', '$50$', '$48$', '$15$'],
              correctAnswer: 0,
              explanation: 'Parentheses: $6 - 1 = 5$. Multiply: $2 \\times 5 = 10$. Add: $8 + 10 = 18$.',
            },
            {
              question: 'Simplify $16 \\div 2^2 + 3$.',
              options: ['$7$', '$11$', '$5$', '$67$'],
              correctAnswer: 0,
              explanation: 'Exponent: $2^2 = 4$. Divide: $16 \\div 4 = 4$. Add: $4 + 3 = 7$.',
            },
          ],
        },
      },
      {
        id: 'ooo5-mixeddrill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

Simplify each expression. Enter just the final number.

**1)** $(4 + 6) \\times 2 - 5 = \\,?$
**2)** $24 \\div (8 - 2) + 3^2 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['15', '13'],
          hint1: 'Parentheses first: $4 + 6 = 10$, then $10 \\times 2 = 20$, then $- 5$.',
          hint2: 'Parentheses: $8 - 2 = 6$. Exponent: $3^2 = 9$. Then $24 \\div 6 = 4$, and $4 + 9$.',
          explanation: '1) $10 \\times 2 = 20$, $20 - 5 = 15$.  2) $24 \\div 6 = 4$, $4 + 9 = 13$.',
        },
      },
      {
        id: 'ooo5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $9 + 6 \\div 3$.',
              options: ['$11$', '$5$', '$7$', '$15$'],
              correctAnswer: 0,
              explanation: 'Divide before add: $6 \\div 3 = 2$, then $9 + 2 = 11$.',
            },
            {
              question: 'Simplify $(2 + 3)^2 - 4 \\times 5$.',
              options: ['$5$', '$45$', '$25$', '$1$'],
              correctAnswer: 0,
              explanation: 'Parentheses: $2 + 3 = 5$. Exponent: $5^2 = 25$. Multiply: $4 \\times 5 = 20$. Subtract: $25 - 20 = 5$.',
            },
            {
              question: 'Simplify $40 \\div 5 \\times 2$.',
              options: ['$16$', '$4$', '$20$', '$10$'],
              correctAnswer: 0,
              explanation: 'Multiply/divide are equal — go left to right: $40 \\div 5 = 8$, then $8 \\times 2 = 16$.',
            },
          ],
        },
      },
    ],
  },
]
