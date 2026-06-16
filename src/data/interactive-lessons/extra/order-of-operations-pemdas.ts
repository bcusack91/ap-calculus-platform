import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Order of Operations (PEMDAS) (Pre-Algebra).
 * Registry key / DB Topic.slug: 'order-of-operations-pemdas'.
 * 5 parts, gold-standard structure: why order matters → the PEMDAS rule →
 * grouping symbols & nesting → exponents and the left-to-right tie-breaker →
 * mixed mastery + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every numeric value was re-evaluated by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'order-of-operations-pemdas',
    sections: [
      {
        id: 'ooo1-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations (PEMDAS)

**Part 1 of 5 — Why Order Matters**

---

### Topics in This Part

| Section |
|---------|
| One Expression, Two Answers |
| The Universal Agreement |
| Reading an Expression Left to Right |

> 🔑 **Key Concept:** A single expression like $2 + 3 \\times 4$ must give **everyone the same answer**. The *order of operations* is the worldwide rulebook that makes math unambiguous.`,
      },
      {
        id: 'ooo1-two-answers',
        type: 'text' as const,
        content: `## One Expression, Two Answers

Suppose you evaluate $2 + 3 \\times 4$. There are two tempting paths:

| Path | What you do | Result |
|------|-------------|--------|
| Left to right | $2 + 3 = 5$, then $5 \\times 4$ | $20$ ✗ |
| Multiply first | $3 \\times 4 = 12$, then $2 + 12$ | $14$ ✓ |

These disagree! If everyone picked their own path, a calculator, a textbook, and a teacher could all report different answers for the *same* problem.

> ⚠️ **The fix:** Mathematicians agreed on one fixed order. Multiplication is done **before** addition, so $2 + 3 \\times 4 = 14$ — always.`,
      },
      {
        id: 'ooo1-which-answer',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using the correct order of operations, what is $5 + 2 \\times 6$?',
              options: ['$17$', '$42$', '$13$', '$60$'],
              correctAnswer: 0,
              explanation: 'Multiplication comes before addition: $2 \\times 6 = 12$, then $5 + 12 = 17$. Adding first (giving $42$) breaks the rule.',
            },
            {
              question: 'Why do we need an agreed-upon order of operations?',
              options: [
                'So one expression has exactly one correct value',
                'Because addition is harder than multiplication',
                'To make every answer come out even',
                'So we never have to use multiplication',
              ],
              correctAnswer: 0,
              explanation: 'Without a fixed order, $2 + 3 \\times 4$ could be $14$ or $20$. The agreed order guarantees a single, universal answer.',
            },
          ],
        },
      },
      {
        id: 'ooo1-no-grouping',
        type: 'text' as const,
        content: `## Reading an Expression Left to Right

When operations are of the **same rank**, you work strictly **left to right** — like reading a sentence.

$$10 - 4 - 3 = (10 - 4) - 3 = 6 - 3 = 3$$

Doing the $4 - 3$ first would give $10 - 1 = 9$, which is **wrong**. Subtraction is *not* done right to left.

> 💡 We will meet this "left-to-right tie-breaker" again for $\\times$ vs. $\\div$ and for $+$ vs. $-$. For now, remember: same rank ⟹ go left to right.`,
      },
      {
        id: 'ooo1-left-right-drill',
        type: 'input-boxes' as const,
        content: `**Left to Right** 🧮

Evaluate each expression by working left to right.

**1)** $20 - 7 - 5 = \\,?$
**2)** $36 \\div 6 \\div 2 = \\,?$
**3)** $8 - 3 + 4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '3', '9'],
          hint1: '$20 - 7 = 13$, then $13 - 5 = 8$.',
          hint2: 'Division left to right: $36 \\div 6 = 6$, then $6 \\div 2 = 3$.',
          hint3: '$+$ and $-$ are the same rank: $8 - 3 = 5$, then $5 + 4 = 9$.',
          explanation: '1) $20-7-5 = 8$.  2) $36\\div6\\div2 = 3$.  3) $8-3+4 = 9$. Same-rank operations always go left to right.',
        },
      },
      {
        id: 'ooo1-left-right-dropdown',
        type: 'dropdown-select' as const,
        content: `**Same Rank, Left to Right** 🔽

Each expression has only same-rank operations. Choose its **correct** value.`,
        exercise: {
          dropdowns: [
            { label: '$12 - 5 + 3$', options: ['$10$', '$4$', '$14$', '$20$'] },
            { label: '$18 \\div 3 \\div 2$', options: ['$3$', '$12$', '$6$', '$27$'] },
            { label: '$7 + 8 - 2$', options: ['$13$', '$-3$', '$17$', '$1$'] },
          ],
          correctAnswers: ['$10$', '$3$', '$13$'],
          hint1: 'Left to right: $12 - 5 = 7$, then $7 + 3 = 10$.',
          hint2: 'Left to right: $18 \\div 3 = 6$, then $6 \\div 2 = 3$.',
          hint3: 'Left to right: $7 + 8 = 15$, then $15 - 2 = 13$.',
          explanation: '1) $12-5+3 = 10$.  2) $18\\div3\\div2 = 3$.  3) $7+8-2 = 13$. Same-rank operations sweep left to right.',
        },
      },
      {
        id: 'ooo1-wrapup',
        type: 'text' as const,
        content: `## What You Now Know

- A bare expression must have **one** universal value.
- Some operations *outrank* others (we formalize this in Part 2).
- When operations tie in rank, evaluate **left to right**.

> 🔑 In Part 2 we name the full ranking with the memory word **PEMDAS** — Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'order-of-operations-pemdas',
    sections: [
      {
        id: 'ooo2-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations (PEMDAS)

**Part 2 of 5 — The PEMDAS Rule**

---

> 🔑 **The Rule:** **P**arentheses → **E**xponents → **M**ultiplication & **D**ivision → **A**ddition & **S**ubtraction. The two middle pairs share a rank and are settled left to right.`,
      },
      {
        id: 'ooo2-rank-table',
        type: 'text' as const,
        content: `## The Ranking

| Rank | Step | Operations | Direction |
|------|------|-----------|-----------|
| 1 | **P** | Parentheses / grouping | innermost first |
| 2 | **E** | Exponents | as they appear |
| 3 | **MD** | Multiply **and** Divide | left to right |
| 4 | **AS** | Add **and** Subtract | left to right |

> ⚠️ **The #1 misconception:** PEMDAS does **not** mean "all multiplication before all division." M and D are the **same** rank — whichever comes first as you read left to right is done first. The same is true for A and S.

Some people learn this as **BODMAS** or **GEMS** instead — they describe the *exact same* ranking, just with different words.`,
      },
      {
        id: 'ooo2-md-tie',
        type: 'text' as const,
        content: `## The MD and AS Tie-Breaker

Because multiply and divide share a rank, read left to right:

$$24 \\div 4 \\times 2 = (24 \\div 4) \\times 2 = 6 \\times 2 = 12$$

Doing $4 \\times 2 = 8$ first would give $24 \\div 8 = 3$ — **wrong**, because $\\times$ here sits to the *right* of $\\div$.

Likewise for add and subtract:

$$15 - 6 + 2 = (15 - 6) + 2 = 9 + 2 = 11$$

> 💡 Picture M/D as one combined step and A/S as another. Inside each combined step, just sweep left to right.`,
      },
      {
        id: 'ooo2-rank-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $7 + 2 \\times 5$, which operation is performed first?',
              options: ['$2 \\times 5$', '$7 + 2$', 'Whichever is on the left', 'They happen at the same time'],
              correctAnswer: 0,
              explanation: 'Multiplication outranks addition, so $2 \\times 5 = 10$ is done first, then $7 + 10 = 17$.',
            },
            {
              question: 'Evaluate $40 \\div 5 \\times 2$.',
              options: ['$16$', '$4$', '$10$', '$20$'],
              correctAnswer: 0,
              explanation: '$\\div$ and $\\times$ tie, so go left to right: $40 \\div 5 = 8$, then $8 \\times 2 = 16$.',
            },
            {
              question: 'Which statement about PEMDAS is TRUE?',
              options: [
                'Multiplication and division share one rank, settled left to right',
                'All multiplication is always done before any division',
                'Addition is always done before subtraction',
                'Exponents are done last',
              ],
              correctAnswer: 0,
              explanation: 'M and D share a rank (and A and S share a rank); within each, you read left to right. Exponents are near the top, not the bottom.',
            },
          ],
        },
      },
      {
        id: 'ooo2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the First Step** 🔽

For each expression, choose the operation that PEMDAS does **first**.`,
        exercise: {
          dropdowns: [
            { label: 'In $6 + 3 \\times 4$:', options: ['$3 \\times 4$', '$6 + 3$', '$6 \\times 4$', '$6 + 4$'] },
            { label: 'In $20 - 8 \\div 2$:', options: ['$8 \\div 2$', '$20 - 8$', '$20 \\div 2$', '$20 - 2$'] },
            { label: 'In $12 \\div 3 \\times 2$:', options: ['$12 \\div 3$', '$3 \\times 2$', '$12 \\times 2$', '$12 \\times 3$'] },
          ],
          correctAnswers: ['$3 \\times 4$', '$8 \\div 2$', '$12 \\div 3$'],
          hint1: 'Multiplication outranks addition.',
          hint2: 'Division outranks subtraction, so handle $8 \\div 2$ before subtracting.',
          hint3: 'Division and multiplication tie, so do the **leftmost** one: $12 \\div 3$ first.',
          explanation: '1) $3\\times4$ first (M before A).  2) $8\\div2$ first (D before S).  3) $12\\div3$ first (tie ⟹ leftmost).',
        },
      },
      {
        id: 'ooo2-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Ranking** 🧮

Evaluate using PEMDAS (no parentheses or exponents yet).

**1)** $9 + 6 \\div 3 = \\,?$
**2)** $48 \\div 8 \\times 3 = \\,?$
**3)** $10 - 2 \\times 4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '18', '2'],
          hint1: 'Divide first: $6 \\div 3 = 2$, then $9 + 2 = 11$.',
          hint2: 'Tie ⟹ left to right: $48 \\div 8 = 6$, then $6 \\times 3 = 18$.',
          hint3: 'Multiply first: $2 \\times 4 = 8$, then $10 - 8 = 2$.',
          explanation: '1) $9+6\\div3 = 11$.  2) $48\\div8\\times3 = 18$.  3) $10-2\\times4 = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'order-of-operations-pemdas',
    sections: [
      {
        id: 'ooo3-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations (PEMDAS)

**Part 3 of 5 — Grouping Symbols & Nesting**

---

> 🔑 **The Power of Parentheses:** Grouping symbols let *you* override the natural ranking. Anything inside is evaluated **first**, as a self-contained mini-problem.`,
      },
      {
        id: 'ooo3-grouping',
        type: 'text' as const,
        content: `## Grouping Symbols Come First

Parentheses $(\\;)$, brackets $[\\;]$, and braces $\\{\\;\\}$ all mean the same thing: **do me first**.

$$2 \\times (3 + 4) = 2 \\times 7 = 14$$

Compare that to the *ungrouped* version:

$$2 \\times 3 + 4 = 6 + 4 = 10$$

The parentheses changed the answer from $10$ to $14$ by forcing the addition ahead of the multiplication.

> 💡 A **fraction bar** is a hidden grouping symbol: in $\\dfrac{8 + 4}{3}$ you must add first, getting $\\dfrac{12}{3} = 4$. Same idea for the contents under a $\\sqrt{\\;}$ sign.`,
      },
      {
        id: 'ooo3-grouping-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $5 \\times (8 - 3)$.',
              options: ['$25$', '$37$', '$40$', '$13$'],
              correctAnswer: 0,
              explanation: 'Do the parentheses first: $8 - 3 = 5$, then $5 \\times 5 = 25$.',
            },
            {
              question: 'Evaluate $\\dfrac{6 + 9}{5}$.',
              options: ['$3$', '$7.8$', '$15$', '$11$'],
              correctAnswer: 0,
              explanation: 'The fraction bar groups the top: $6 + 9 = 15$, then $15 \\div 5 = 3$.',
            },
          ],
        },
      },
      {
        id: 'ooo3-nesting',
        type: 'text' as const,
        content: `## Nested Grouping: Inside Out

When grouping symbols sit **inside** other grouping symbols, work from the **innermost** outward.

### Worked Example: $3 \\times [2 + (10 - 6)]$

1. Innermost parentheses: $10 - 6 = 4$
2. Now the brackets: $2 + 4 = 6$
3. Finally multiply: $3 \\times 6 = 18$

$$3 \\times [2 + (10 - 6)] = 3 \\times [2 + 4] = 3 \\times 6 = 18$$

> ⚠️ Never reach past an outer bracket to touch something outside before the inside is finished. Innermost **always** resolves first.`,
      },
      {
        id: 'ooo3-nesting-dropdown',
        type: 'dropdown-select' as const,
        content: `**Inside Out** 🔽

You are evaluating $4 + [12 \\div (1 + 2)]$. Fill in each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Innermost parentheses $(1+2)$ becomes:', options: ['$3$', '$2$', '$12$', '$24$'] },
            { label: 'The bracket $[12 \\div 3]$ becomes:', options: ['$4$', '$9$', '$36$', '$15$'] },
            { label: 'Finally $4 + 4$ becomes:', options: ['$8$', '$16$', '$4$', '$0$'] },
          ],
          correctAnswers: ['$3$', '$4$', '$8$'],
          hint1: 'Start with the innermost parentheses: $1 + 2 = 3$.',
          hint2: 'Now divide inside the bracket: $12 \\div 3 = 4$.',
          hint3: 'Add last: $4 + 4 = 8$.',
          explanation: '$4 + [12 \\div (1+2)] = 4 + [12 \\div 3] = 4 + 4 = 8$. Work innermost ⟶ outermost.',
        },
      },
      {
        id: 'ooo3-drill',
        type: 'input-boxes' as const,
        content: `**Grouping Practice** 🧮

Evaluate each expression.

**1)** $(7 + 5) \\div 4 = \\,?$
**2)** $2 \\times (9 - 3) + 1 = \\,?$
**3)** $\\dfrac{20 - 4}{2 \\times 2} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '13', '4'],
          hint1: 'Parentheses first: $7 + 5 = 12$, then $12 \\div 4 = 3$.',
          hint2: '$9 - 3 = 6$, then $2 \\times 6 = 12$, then $12 + 1 = 13$.',
          hint3: 'The bar groups top and bottom: top $= 16$, bottom $= 4$, so $16 \\div 4 = 4$.',
          explanation: '1) $(7+5)\\div4 = 3$.  2) $2\\times(9-3)+1 = 13$.  3) $\\frac{16}{4} = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'order-of-operations-pemdas',
    sections: [
      {
        id: 'ooo4-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations (PEMDAS)

**Part 4 of 5 — Exponents & Full Expressions**

---

> 🔑 **Adding the E:** Exponents rank just below grouping symbols — done **after** parentheses but **before** any multiply, divide, add, or subtract.`,
      },
      {
        id: 'ooo4-exponents',
        type: 'text' as const,
        content: `## Where Exponents Fit

After grouping symbols, evaluate every **exponent**, then proceed to M/D and A/S.

### Worked Example: $2 + 3^2 \\times 4$

1. Exponent first: $3^2 = 9$
2. Multiply: $9 \\times 4 = 36$
3. Add: $2 + 36 = 38$

$$2 + 3^2 \\times 4 = 2 + 9 \\times 4 = 2 + 36 = 38$$

> ⚠️ **Watch the base!** In $-2^2$ the exponent attaches only to the $2$: $-2^2 = -(2^2) = -4$. But $(-2)^2 = 4$, because the parentheses make $-2$ the base. The grouping symbol changes everything.`,
      },
      {
        id: 'ooo4-exp-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $5 \\times 2^3$.',
              options: ['$40$', '$1000$', '$30$', '$16$'],
              correctAnswer: 0,
              explanation: 'Exponent before multiply: $2^3 = 8$, then $5 \\times 8 = 40$. (Multiplying first to get $10^3$ is wrong.)',
            },
            {
              question: 'Evaluate $(5 \\times 2)^3$.',
              options: ['$1000$', '$40$', '$30$', '$250$'],
              correctAnswer: 0,
              explanation: 'Parentheses outrank the exponent: $5 \\times 2 = 10$, then $10^3 = 1000$.',
            },
            {
              question: 'Which is true?',
              options: [
                '$(-3)^2 = 9$ but $-3^2 = -9$',
                '$(-3)^2 = -9$ but $-3^2 = 9$',
                'Both equal $9$',
                'Both equal $-9$',
              ],
              correctAnswer: 0,
              explanation: 'With parentheses, $-3$ is the base: $(-3)^2 = 9$. Without, the exponent binds only the $3$: $-3^2 = -(3^2) = -9$.',
            },
          ],
        },
      },
      {
        id: 'ooo4-full-example',
        type: 'text' as const,
        content: `## A Full PEMDAS Expression

### Worked Example: $4 + 2 \\times (6 - 1)^2 \\div 5$

| Step | Action | Expression |
|------|--------|-----------|
| 1 | **P**: inside parentheses | $4 + 2 \\times 5^2 \\div 5$ |
| 2 | **E**: square the $5$ | $4 + 2 \\times 25 \\div 5$ |
| 3 | **M/D** left to right: $2 \\times 25$ | $4 + 50 \\div 5$ |
| 4 | **M/D** continue: $50 \\div 5$ | $4 + 10$ |
| 5 | **A/S**: add | $14$ |

$$4 + 2 \\times (6 - 1)^2 \\div 5 = 14$$

> 💡 Notice steps 3–4: with $\\times$ then $\\div$ at the same rank, we still swept **left to right**.`,
      },
      {
        id: 'ooo4-first-step-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the First Step** 🔽

For each expression, choose the operation PEMDAS does **first**.`,
        exercise: {
          dropdowns: [
            { label: 'In $6 + 2^3$:', options: ['$2^3$', '$6 + 2$', '$8 + 6$', '$6^3$'] },
            { label: 'In $5 \\times 3^2$:', options: ['$3^2$', '$5 \\times 3$', '$15^2$', '$5^2$'] },
            { label: 'In $(4 - 1)^2 + 7$:', options: ['$4 - 1$', '$1^2$', '$4^2$', '$2 + 7$'] },
          ],
          correctAnswers: ['$2^3$', '$3^2$', '$4 - 1$'],
          hint1: 'Exponents outrank addition, so square-and-cube before adding: $2^3$ first.',
          hint2: 'Exponents outrank multiplication: evaluate $3^2$ before multiplying.',
          hint3: 'Parentheses outrank exponents, so resolve $4 - 1$ inside first.',
          explanation: '1) $2^3$ first (E before A).  2) $3^2$ first (E before M).  3) $4-1$ first (P before E).',
        },
      },
      {
        id: 'ooo4-drill',
        type: 'input-boxes' as const,
        content: `**Exponents in Context** 🧮

Evaluate each expression with full PEMDAS.

**1)** $3^2 + 4 \\times 2 = \\,?$
**2)** $(2 + 3)^2 - 10 = \\,?$
**3)** $50 - 2 \\times 4^2 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['17', '15', '18'],
          hint1: 'Exponent then multiply: $3^2 = 9$, $4 \\times 2 = 8$, so $9 + 8 = 17$.',
          hint2: 'Parentheses then exponent: $(2+3)^2 = 5^2 = 25$, then $25 - 10 = 15$.',
          hint3: 'Exponent first: $4^2 = 16$, then $2 \\times 16 = 32$, then $50 - 32 = 18$.',
          explanation: '1) $3^2 + 4\\times2 = 17$.  2) $(2+3)^2 - 10 = 15$.  3) $50 - 2\\times4^2 = 18$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'order-of-operations-pemdas',
    sections: [
      {
        id: 'ooo5-intro',
        type: 'text' as const,
        content: `# 🧮 Order of Operations (PEMDAS)

**Part 5 of 5 — Mixed Mastery & Exit Quiz**

---

You can now handle (1) ranking, (2) the left-to-right tie-breaker, (3) nested grouping, and (4) exponents. Time to combine them all.`,
      },
      {
        id: 'ooo5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Step | Do this | Example |
|------|---------|---------|
| **P** | Grouping symbols, innermost first | $(3+4) = 7$ |
| **E** | Exponents & roots | $2^3 = 8$ |
| **M D** | Multiply/divide, left to right | $12 \\div 3 \\times 2 = 8$ |
| **A S** | Add/subtract, left to right | $9 - 4 + 1 = 6$ |

> ⚠️ **Three traps to avoid:**
> 1. Doing addition before multiplication.
> 2. Forcing *all* $\\times$ before *all* $\\div$ (they tie — go left to right).
> 3. Forgetting that a fraction bar or $\\sqrt{\\;}$ groups what's inside it.`,
      },
      {
        id: 'ooo5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Error** 🔽

For each expression, choose the **correct** value.`,
        exercise: {
          dropdowns: [
            { label: '$8 + 12 \\div 4$', options: ['$11$', '$5$', '$20$', '$2$'] },
            { label: '$(6 - 2)^2 \\div 8$', options: ['$2$', '$4$', '$8$', '$16$'] },
            { label: '$30 - 4 \\times 3 + 2$', options: ['$20$', '$80$', '$24$', '$16$'] },
          ],
          correctAnswers: ['$11$', '$2$', '$20$'],
          hint1: 'Divide before adding: $12 \\div 4 = 3$, then $8 + 3 = 11$.',
          hint2: 'Parentheses then exponent: $(6-2)^2 = 16$, then $16 \\div 8 = 2$.',
          hint3: 'Multiply first: $4 \\times 3 = 12$; then left to right: $30 - 12 + 2 = 18 + 2 = 20$.',
          explanation: '1) $8+12\\div4 = 11$.  2) $(6-2)^2\\div8 = 2$.  3) $30-4\\times3+2 = 20$.',
        },
      },
      {
        id: 'ooo5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Mastery** 🧮

Evaluate each expression completely.

**1)** $2 \\times [3 + (4^2 - 6)] = \\,?$
**2)** $\\dfrac{(9 - 5)^2}{2} + 7 = \\,?$
**3)** $100 \\div (2 + 3)^2 - 1 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['26', '15', '3'],
          hint1: 'Innermost: $4^2 = 16$, $16 - 6 = 10$; bracket $3 + 10 = 13$; then $2 \\times 13 = 26$.',
          hint2: 'Top: $(9-5)^2 = 4^2 = 16$; $16 \\div 2 = 8$; then $8 + 7 = 15$.',
          hint3: '$(2+3)^2 = 25$; $100 \\div 25 = 4$; then $4 - 1 = 3$.',
          explanation: '1) $2\\times[3+(16-6)] = 2\\times13 = 26$.  2) $\\frac{16}{2}+7 = 15$.  3) $100\\div25 - 1 = 3$.',
        },
      },
      {
        id: 'ooo5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $7 + 6 \\times (3^2 - 5)$.',
              options: ['$31$', '$58$', '$52$', '$28$'],
              correctAnswer: 0,
              explanation: 'Inside parentheses: $3^2 = 9$, $9 - 5 = 4$. Then $6 \\times 4 = 24$, then $7 + 24 = 31$.',
            },
            {
              question: 'Evaluate $\\dfrac{18}{2 + 1} + 4 \\times 2$.',
              options: ['$14$', '$22$', '$17$', '$13$'],
              correctAnswer: 0,
              explanation: 'The bar groups the bottom: $\\frac{18}{3} = 6$. Then $4 \\times 2 = 8$, so $6 + 8 = 14$.',
            },
          ],
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
              question: 'Evaluate $20 - 3 \\times 4 + 2$.',
              options: ['$10$', '$70$', '$6$', '$16$'],
              correctAnswer: 0,
              explanation: 'Multiply first: $3 \\times 4 = 12$. Then left to right: $20 - 12 + 2 = 8 + 2 = 10$.',
            },
            {
              question: 'Evaluate $(4 + 2)^2 \\div 9$.',
              options: ['$4$', '$2$', '$6$', '$36$'],
              correctAnswer: 0,
              explanation: 'Parentheses: $4 + 2 = 6$. Exponent: $6^2 = 36$. Divide: $36 \\div 9 = 4$.',
            },
            {
              question: 'Which statement is correct?',
              options: [
                'In $24 \\div 6 \\times 2$, divide first because it is leftmost, giving $8$',
                'In $24 \\div 6 \\times 2$, multiply first because M comes before D, giving $2$',
                'Multiplication is always done before division',
                'The answer is $2$ either way',
              ],
              correctAnswer: 0,
              explanation: '$\\div$ and $\\times$ tie, so the leftmost goes first: $24 \\div 6 = 4$, then $4 \\times 2 = 8$. M is not done before D.',
            },
          ],
        },
      },
    ],
  },
]
