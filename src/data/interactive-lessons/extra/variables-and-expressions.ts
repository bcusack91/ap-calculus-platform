import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Variables and Expressions (Pre-Algebra).
 * Registry key: 'variables-and-expressions' (matches the DB Topic.slug, no alias needed).
 *
 * 5-part pedagogical arc, gold-standard structure (mirrors the
 * completing-the-square pilot): each part teaches a focused idea, models it in
 * worked $$...$$ examples, then checks understanding with alternating
 * multiple-choice / input-boxes / dropdown exercises. Part 5 closes with a
 * 3-question multiple-choice Exit Quiz.
 *
 * Arc:  Part 1  Anatomy of an expression (variables, terms, coefficients)
 *       Part 2  Translating words ↔ expressions
 *       Part 3  Evaluating by substitution (PEMDAS, multi-variable)
 *       Part 4  Simplifying: like terms & the distributive property
 *       Part 5  Real-world modeling + mastery / exit quiz
 *
 * NOTE: LaTeX lives inside JS template literals, so every backslash is DOUBLED
 * (\\frac, \\cdot, \\dfrac, \\text, \\underbrace, ...). Inline $...$, display $$...$$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'variables-and-expressions',
    sections: [
      {
        id: 'vae1-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Expressions

**Part 1 of 5 — The Anatomy of an Expression**

---

### Topics in This Part

| Section |
|---------|
| What a variable is (and why letters help) |
| Terms, coefficients, and constants |
| Expressions vs. equations |

> 🔑 **Key Concept:** A **variable** is a letter — like $x$, $n$, or $t$ — that holds a number's place. It may be a value we don't know yet, or one that's allowed to change. Algebra is just arithmetic with some of the numbers wearing letter-shaped masks.`,
      },
      {
        id: 'vae1-what-is',
        type: 'text' as const,
        content: `## A Variable Is a Stand-In for a Number

Imagine every movie ticket costs the same, but the price isn't posted. Call that price $p$. Now we can talk about it before we ever learn its value:

- $2p$ — the cost of **2** tickets
- $5p$ — the cost of **5** tickets
- $p + 3$ — "three dollars more than one ticket"

### Variable vs. Constant

| Word | Meaning | Examples |
|------|---------|----------|
| **Variable** | a letter whose value can change or is unknown | $x,\\; n,\\; t$ |
| **Constant** | a fixed number that never changes | $7,\\; -4,\\; \\dfrac{1}{2}$ |

> 💡 **Why use letters at all?** A variable lets us write **one** rule that works for **every** number at once. The formula $2p$ gives the price of two tickets whether a ticket costs \\$8, \\$12, or \\$15 — we never have to rewrite it.`,
      },
      {
        id: 'vae1-var-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the expression $3n + 8$, which symbol is the variable?',
              options: ['$3$', '$n$', '$8$', '$+$'],
              correctAnswer: 1,
              explanation: 'A variable is a letter that stands for a number. Here $n$ is the variable; $3$ and $8$ are constants, and $+$ is an operation symbol.',
            },
            {
              question: 'Which of these is a constant (a fixed number)?',
              options: ['$y$', '$t$', '$-5$', '$k$'],
              correctAnswer: 2,
              explanation: 'A constant never changes. $-5$ is a fixed number, while $y$, $t$, and $k$ are letters, so they are variables.',
            },
          ],
        },
      },
      {
        id: 'vae1-parts',
        type: 'text' as const,
        content: `## The Parts of an Expression

An **expression** combines numbers, variables, and operations — like $4x + 7$. It has **no equals sign** (an equals sign would make it an *equation*).

Every piece separated by a $+$ or $-$ is a **term**. Inside a term:

- the number multiplying the variable is the **coefficient**;
- a term that is only a number (no variable) is a **constant term**.

### Dissecting $4x + 7$

| Piece | Name |
|-------|------|
| $4x$ | a **term** |
| $4$ | the **coefficient** of $x$ |
| $x$ | the **variable** |
| $7$ | the **constant** term |

> ⚠️ **Watch out:** If a variable appears with no number in front — like $x$ — its coefficient is $1$, not $0$. We simply don't bother writing the $1$. In the same way, $-x$ has coefficient $-1$.`,
      },
      {
        id: 'vae1-coeff-drill',
        type: 'dropdown-select' as const,
        content: `**Name That Part** 🔽

Look at the expression $6y - 9$ and choose the correct description for each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The coefficient of $y$ is:', options: ['$6$', '$y$', '$-9$', '$1$'] },
            { label: 'The variable is:', options: ['$y$', '$6$', '$-9$', '$-$'] },
            { label: 'The constant term is:', options: ['$9$', '$-9$', '$6$', '$y$'] },
          ],
          correctAnswers: ['$6$', '$y$', '$-9$'],
          hint1: 'The coefficient is the number multiplying the variable.',
          hint2: 'The variable is the letter in the expression.',
          hint3: 'The constant has no variable. Because of the minus sign in $6y - 9$, the constant is $-9$.',
          explanation: 'In $6y - 9$: the coefficient of $y$ is $6$, the variable is $y$, and the constant term is $-9$ — the minus sign belongs to it.',
        },
      },
      {
        id: 'vae1-expr-vs-eq',
        type: 'multiple-choice' as const,
        content: `**Expression or Equation?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an EXPRESSION (no equals sign)?',
              options: ['$3x + 5$', '$3x + 5 = 11$', '$x = 2$', '$2x - 1 = 7$'],
              correctAnswer: 0,
              explanation: 'An expression has no equals sign — it is something to evaluate or simplify, not solve. $3x + 5$ qualifies; the others contain an $=$, so they are equations.',
            },
          ],
        },
      },
      {
        id: 'vae1-count-terms',
        type: 'input-boxes' as const,
        content: `**Count the Terms** 🧮

Terms are the pieces separated by $+$ or $-$. Count how many terms each expression has.

**1)** $5x + 2$  →  how many terms?
**2)** $7a - 3b + 4$  →  how many terms?
**3)** $9k$  →  how many terms?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '1'],
          hint1: '$5x + 2$ has two pieces joined by $+$: the term $5x$ and the term $2$.',
          hint2: '$7a - 3b + 4$ splits into three pieces: $7a$, $-3b$, and $4$.',
          hint3: '$9k$ has no $+$ or $-$ separating anything, so it is a single term.',
          explanation: '1) $5x + 2$ → 2 terms.  2) $7a - 3b + 4$ → 3 terms.  3) $9k$ → 1 term. Terms are split by addition or subtraction.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'variables-and-expressions',
    sections: [
      {
        id: 'vae2-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Expressions

**Part 2 of 5 — Translating Words into Math**

---

> 🔑 **The Idea:** Math is a language. To turn an English phrase into an expression, find the **operation words** and the **quantities** they connect, then build the expression piece by piece.`,
      },
      {
        id: 'vae2-keywords',
        type: 'text' as const,
        content: `## Operation Keywords

Certain words almost always signal a specific operation. Let "the number" be $n$.

| Operation | Keywords | Example |
|-----------|----------|---------|
| Add ($+$) | sum, more than, increased by, total, plus | $n + 5$ |
| Subtract ($-$) | difference, less than, decreased by, fewer, minus | $n - 5$ |
| Multiply ($\\times$) | product, times, of, twice, doubled, triple | $5n$ |
| Divide ($\\div$) | quotient, per, divided by, split, half of | $\\dfrac{n}{5}$ |

> ⚠️ **The "less than" trap:** "$5$ less than a number" is $n - 5$, **not** $5 - n$. The phrase *less than* flips the order — you start with the number and take $5$ away. The same flip happens with "fewer than" and "subtracted from."`,
      },
      {
        id: 'vae2-translate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Write "7 more than a number $x$" as an expression.',
              options: ['$x + 7$', '$7x$', '$7 - x$', '$\\dfrac{x}{7}$'],
              correctAnswer: 0,
              explanation: '"More than" means addition: "7 more than $x$" adds $7$ to $x$, giving $x + 7$.',
            },
            {
              question: 'Write "4 less than a number $n$" as an expression.',
              options: ['$4 - n$', '$n - 4$', '$4n$', '$n + 4$'],
              correctAnswer: 1,
              explanation: '"Less than" subtracts AND flips the order: start with $n$ and subtract $4$, giving $n - 4$. It is NOT $4 - n$.',
            },
            {
              question: 'Write "the product of 6 and a number $y$" as an expression.',
              options: ['$6 + y$', '$y - 6$', '$6y$', '$\\dfrac{6}{y}$'],
              correctAnswer: 2,
              explanation: '"Product" means multiplication, so the product of $6$ and $y$ is $6y$.',
            },
          ],
        },
      },
      {
        id: 'vae2-worked',
        type: 'text' as const,
        content: `## Worked Examples — Build It in Pieces

Translate the **inner** phrase first, then attach the **outer** operation.

**Example 1 — "Twice a number, increased by 3."**

- "twice a number" $= 2n$
- "increased by 3" adds $3$

$$2n + 3$$

**Example 2 — "The quotient of a number and 5, decreased by 1."**

- "quotient of a number and 5" $= \\dfrac{n}{5}$
- "decreased by 1" subtracts $1$

$$\\dfrac{n}{5} - 1$$

**Example 3 — "8 less than three times a number."**

- "three times a number" $= 3n$
- "8 less than" subtracts $8$ from it

$$3n - 8$$

> 💡 Reading left to right, "8 less than [three times a number]" pushes the $-8$ to the **end**, because *less than* flips the order.`,
      },
      {
        id: 'vae2-translate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate the Phrase** 🔽

Match each English phrase to its expression. Let the number be $n$.`,
        exercise: {
          dropdowns: [
            { label: '"the sum of a number and 9"', options: ['$n + 9$', '$9 - n$', '$9n$', '$n - 9$'] },
            { label: '"half of a number"', options: ['$2n$', '$\\dfrac{n}{2}$', '$n - 2$', '$n + 2$'] },
            { label: '"5 less than a number"', options: ['$5 - n$', '$5n$', '$n - 5$', '$n + 5$'] },
            { label: '"7 times a number"', options: ['$7n$', '$n + 7$', '$\\dfrac{n}{7}$', '$n - 7$'] },
          ],
          correctAnswers: ['$n + 9$', '$\\dfrac{n}{2}$', '$n - 5$', '$7n$'],
          hint1: '"Sum" means add; "half of" divides by $2$.',
          hint2: 'Remember "less than" flips the order: "5 less than a number" is $n - 5$.',
          hint3: '"Times" means multiply, so "7 times a number" is $7n$.',
          explanation: 'Sum → $n + 9$;  half of → $\\dfrac{n}{2}$;  5 less than → $n - 5$ (flipped);  7 times → $7n$.',
        },
      },
      {
        id: 'vae2-write-drill',
        type: 'input-boxes' as const,
        content: `**You Write the Coefficient** 🧮

Each phrase translates to "(some number) $\\cdot\\, n$." Enter just that number — the coefficient.

**1)** "double a number"  →  $\\;?\\,n$
**2)** "triple a number"  →  $\\;?\\,n$
**3)** "a number times ten"  →  $\\;?\\,n$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '10'],
          hint1: '"Double" means two times, so the coefficient is $2$.',
          hint2: '"Triple" means three times, so the coefficient is $3$.',
          hint3: '"Times ten" multiplies by $10$, so the coefficient is $10$.',
          explanation: 'Double → $2n$ (coefficient $2$);  triple → $3n$ (coefficient $3$);  times ten → $10n$ (coefficient $10$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'variables-and-expressions',
    sections: [
      {
        id: 'vae3-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Expressions

**Part 3 of 5 — Evaluating by Substitution**

---

> 🔑 **The Idea:** To **evaluate** an expression, **substitute** a number for each variable, then simplify using the **order of operations**. Replacing letters with numbers turns algebra back into arithmetic.`,
      },
      {
        id: 'vae3-substitute',
        type: 'text' as const,
        content: `## Substitute, Then Simplify

A variable written next to a number means **multiply**: $4x$ means $4 \\cdot x$. So when you plug in a value, restore that multiplication with parentheses.

### Example — Evaluate $4x + 7$ when $x = 3$

$$4x + 7 = 4(3) + 7 = 12 + 7 = 19$$

### Example — Evaluate $2a - 5$ when $a = 6$

$$2a - 5 = 2(6) - 5 = 12 - 5 = 7$$

> ⚠️ **Always use parentheses when you substitute.** Writing $4(3)$ instead of $43$ keeps the multiplication visible and stops you from accidentally gluing the digits together.`,
      },
      {
        id: 'vae3-eval-basic',
        type: 'input-boxes' as const,
        content: `**Substitute and Solve** 🧮

Evaluate each expression for the given value.

**1)** $5x + 1$ when $x = 4$
**2)** $3n - 2$ when $n = 5$
**3)** $\\dfrac{m}{2} + 6$ when $m = 8$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['21', '13', '10'],
          hint1: '$5x + 1 = 5(4) + 1 = 20 + 1$.',
          hint2: '$3n - 2 = 3(5) - 2 = 15 - 2$.',
          hint3: '$\\dfrac{m}{2} + 6 = \\dfrac{8}{2} + 6 = 4 + 6$.',
          explanation: '1) $5(4) + 1 = 21$.  2) $3(5) - 2 = 13$.  3) $\\dfrac{8}{2} + 6 = 4 + 6 = 10$.',
        },
      },
      {
        id: 'vae3-order-ops',
        type: 'text' as const,
        content: `## Order of Operations (PEMDAS)

When an expression has several operations, follow this order:

| Step | Operation |
|------|-----------|
| **P** | Parentheses (grouping) |
| **E** | Exponents |
| **MD** | Multiply & Divide — left to right |
| **AS** | Add & Subtract — left to right |

### Example — Evaluate $2x^2 + 1$ when $x = 3$

Handle the **exponent first**, then multiply, then add:

$$2x^2 + 1 = 2(3)^2 + 1 = 2(9) + 1 = 18 + 1 = 19$$

> ⚠️ **Order matters!** In $2x^2$, only the $x$ is squared — not the $2$. Square first ($3^2 = 9$), *then* multiply by $2$. Computing $(2 \\cdot 3)^2 = 36$ is a classic mistake.`,
      },
      {
        id: 'vae3-order-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $3x^2$ when $x = 2$.',
              options: ['$36$', '$12$', '$6$', '$18$'],
              correctAnswer: 1,
              explanation: 'Square first: $2^2 = 4$. Then multiply: $3 \\cdot 4 = 12$. (It is NOT $(3 \\cdot 2)^2 = 36$.)',
            },
            {
              question: 'Evaluate $10 - 2x$ when $x = 4$.',
              options: ['$2$', '$32$', '$6$', '$18$'],
              correctAnswer: 0,
              explanation: 'Multiply first: $2x = 2(4) = 8$. Then subtract: $10 - 8 = 2$.',
            },
          ],
        },
      },
      {
        id: 'vae3-two-vars',
        type: 'text' as const,
        content: `## Expressions with Two Variables

Substitute **each** variable with its own value, then simplify.

### Example — Evaluate $3a + 2b$ when $a = 4$ and $b = 5$

$$3a + 2b = 3(4) + 2(5) = 12 + 10 = 22$$

### Example — Evaluate $ab - c$ when $a = 2,\\; b = 6,\\; c = 7$

$$ab - c = (2)(6) - 7 = 12 - 7 = 5$$

> 💡 Replace **every** copy of a variable with its number. If $a$ appears twice, plug the value into both spots.`,
      },
      {
        id: 'vae3-two-var-drill',
        type: 'input-boxes' as const,
        content: `**Two Variables** 🧮

Evaluate each expression using $a = 3$ and $b = 4$.

**1)** $2a + b$
**2)** $ab$
**3)** $5b - 3a$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '12', '11'],
          hint1: '$2a + b = 2(3) + 4 = 6 + 4$.',
          hint2: '$ab = (3)(4)$ — variables side by side mean multiply.',
          hint3: '$5b - 3a = 5(4) - 3(3) = 20 - 9$.',
          explanation: '1) $2(3) + 4 = 10$.  2) $(3)(4) = 12$.  3) $5(4) - 3(3) = 20 - 9 = 11$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'variables-and-expressions',
    sections: [
      {
        id: 'vae4-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Expressions

**Part 4 of 5 — Simplifying: Like Terms & Distributing**

---

> 🔑 **The Idea:** You can only add or subtract terms that share the **exact same variable part** — these are **like terms**. And the **distributive property** lets you clear parentheses. Together they shrink any expression to its simplest form.`,
      },
      {
        id: 'vae4-like-terms',
        type: 'text' as const,
        content: `## What Are Like Terms?

**Like terms** have the same variable raised to the same power. Their coefficients can differ.

| Pair | Like terms? | Why |
|------|-------------|-----|
| $3x$ and $5x$ | ✅ Yes | both have $x$ |
| $7y$ and $2y$ | ✅ Yes | both have $y$ |
| $4x$ and $4y$ | ❌ No | different variables |
| $2x$ and $2x^2$ | ❌ No | different powers |
| $6$ and $-9$ | ✅ Yes | both are constants |

### Combining Like Terms

**Add or subtract the coefficients** and keep the variable part unchanged:

$$3x + 5x = (3 + 5)x = 8x$$

> ⚠️ You do **not** touch the variable. $3x + 5x = 8x$, **not** $8x^2$. You're counting *how many* $x$'s you have — like $3$ apples $+\\, 5$ apples $= 8$ apples, never "8 apples-squared."`,
      },
      {
        id: 'vae4-like-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pair are LIKE terms (can be combined)?',
              options: ['$6n$ and $2m$', '$6n$ and $2n$', '$6n$ and $2n^2$', '$6n$ and $2$'],
              correctAnswer: 1,
              explanation: 'Like terms share the same variable to the same power. $6n$ and $2n$ both have $n^1$, so they are like terms.',
            },
            {
              question: 'Simplify $7x + 2x$.',
              options: ['$9x$', '$9x^2$', '$14x$', '$9$'],
              correctAnswer: 0,
              explanation: 'Add the coefficients $7 + 2 = 9$ and keep the variable: $9x$. The exponent does not change.',
            },
          ],
        },
      },
      {
        id: 'vae4-multi-terms',
        type: 'text' as const,
        content: `## Simplifying Longer Expressions

When an expression mixes different kinds of terms, **group the like terms** and combine each group separately. Constants combine with constants.

### Example — Simplify $4x + 3 + 2x + 5$

$$\\underbrace{4x + 2x}_{6x} + \\underbrace{3 + 5}_{8} = 6x + 8$$

### Example — Simplify $7a + 2b - 3a + 4b$

$$\\underbrace{7a - 3a}_{4a} + \\underbrace{2b + 4b}_{6b} = 4a + 6b$$

> 💡 **Keep each term's sign with it.** In $7a - 3a$, the $-3a$ travels with its minus sign. Reading a subtraction as "adding a negative" means signs never get lost.`,
      },
      {
        id: 'vae4-combine-drill',
        type: 'input-boxes' as const,
        content: `**Combine Like Terms** 🧮

Simplify each expression. Enter only the **coefficient of $x$** in the simplified result.

**1)** $6x + 3x$  →  result is $\\;?\\,x$
**2)** $9x - 4x$  →  result is $\\;?\\,x$
**3)** $5x + 2x - x$  →  result is $\\;?\\,x$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '5', '6'],
          hint1: '$6x + 3x$: add the coefficients $6 + 3 = 9$.',
          hint2: '$9x - 4x$: subtract the coefficients $9 - 4 = 5$.',
          hint3: 'A lone $x$ has coefficient $1$, so $5 + 2 - 1 = 6$.',
          explanation: '1) $6 + 3 = 9$ → $9x$.  2) $9 - 4 = 5$ → $5x$.  3) $5 + 2 - 1 = 6$ → $6x$ (the lone $-x$ counts as $-1x$).',
        },
      },
      {
        id: 'vae4-distribute',
        type: 'text' as const,
        content: `## The Distributive Property

To clear parentheses, **multiply the outside factor by every term inside**:

$$a(b + c) = ab + ac$$

### Example — Expand $3(x + 4)$

$$3(x + 4) = 3 \\cdot x + 3 \\cdot 4 = 3x + 12$$

### Example — Expand, then combine: $2(x + 5) + 3x$

$$2(x + 5) + 3x = 2x + 10 + 3x = 5x + 10$$

> ⚠️ **Distribute to *both* terms.** A frequent slip is $3(x + 4) = 3x + 4$ — the $3$ never reached the $4$. The factor must hit **every** term inside the parentheses.`,
      },
      {
        id: 'vae4-distribute-dropdown',
        type: 'dropdown-select' as const,
        content: `**Distribute & Simplify** 🔽

Choose the correct simplified form of each expression.`,
        exercise: {
          dropdowns: [
            { label: '$4(x + 2)$', options: ['$4x + 2$', '$4x + 8$', '$4x + 6$', '$x + 8$'] },
            { label: '$2(3x - 1)$', options: ['$6x - 1$', '$6x - 2$', '$5x - 2$', '$6x + 2$'] },
            { label: '$3(x + 1) + 2x$', options: ['$5x + 3$', '$5x + 1$', '$3x + 3$', '$6x + 3$'] },
          ],
          correctAnswers: ['$4x + 8$', '$6x - 2$', '$5x + 3$'],
          hint1: 'Multiply the outside number by EACH term inside: $4 \\cdot x$ and $4 \\cdot 2$.',
          hint2: 'For $2(3x - 1)$, distribute the $2$: $2 \\cdot 3x = 6x$ and $2 \\cdot 1 = 2$, keeping the minus.',
          hint3: 'First distribute $3(x+1) = 3x + 3$, then combine $3x + 2x = 5x$, leaving $5x + 3$.',
          explanation: '$4(x+2) = 4x + 8$;  $2(3x-1) = 6x - 2$;  $3(x+1) + 2x = 3x + 3 + 2x = 5x + 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'variables-and-expressions',
    sections: [
      {
        id: 'vae5-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Expressions

**Part 5 of 5 — Real-World Modeling & Mastery Check**

---

You can now (1) name the parts of an expression, (2) translate words into math, (3) evaluate by substituting, and (4) simplify by combining like terms and distributing. Let's put it all together and finish strong.`,
      },
      {
        id: 'vae5-realworld',
        type: 'text' as const,
        content: `## Building Expressions for Real Situations

A variable shines when a quantity can change. Pick a letter for the unknown, then describe the situation.

### Example — A taxi charges \\$3 to start, plus \\$2 per mile.

Let $m$ = number of miles. The total cost (in dollars) is:

$$3 + 2m$$

A $5$-mile ride costs $3 + 2(5) = 3 + 10 = 13$, so \\$13.

### Example — You have \\$20 and spend \\$4 each day.

Let $d$ = number of days. The money left (in dollars) is:

$$20 - 4d$$

After $3$ days you have $20 - 4(3) = 20 - 12 = 8$, so \\$8.

> 💡 **The pattern:** a fixed *start-up* amount becomes the **constant**, and the *per-unit* rate becomes the **coefficient** of the variable.`,
      },
      {
        id: 'vae5-realworld-mc',
        type: 'multiple-choice' as const,
        content: `**Apply It** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A gym charges a \\$25 sign-up fee plus \\$15 per month. Which expression gives the total cost for $m$ months?',
              options: ['$15 + 25m$', '$25 + 15m$', '$25m + 15m$', '$40$'],
              correctAnswer: 1,
              explanation: 'The \\$25 fee is a one-time constant; the \\$15 repeats each month, so it is the coefficient of $m$: $25 + 15m$.',
            },
            {
              question: 'Using $25 + 15m$, what is the total cost for $4$ months?',
              options: ['$\\$85$', '$\\$60$', '$\\$160$', '$\\$40$'],
              correctAnswer: 0,
              explanation: 'Substitute $m = 4$: $25 + 15(4) = 25 + 60 = \\$85$.',
            },
          ],
        },
      },
      {
        id: 'vae5-realworld-drill',
        type: 'input-boxes' as const,
        content: `**Word-Problem Practice** 🧮

A printer rents for a flat \\$10 fee plus \\$3 per hour. The cost is $10 + 3h$ dollars.

**1)** What is the cost for $h = 2$ hours?  *(enter just the number of dollars)*
**2)** What is the cost for $h = 5$ hours?
**3)** What is the coefficient of $h$ in $10 + 3h$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '25', '3'],
          hint1: '$10 + 3(2) = 10 + 6$.',
          hint2: '$10 + 3(5) = 10 + 15$.',
          hint3: 'The coefficient is the number multiplying $h$.',
          explanation: '1) $10 + 3(2) = 16$.  2) $10 + 3(5) = 25$.  3) The coefficient of $h$ is $3$ — the hourly rate.',
        },
      },
      {
        id: 'vae5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Review** 🔽

One quick check pulled from each part of the lesson.`,
        exercise: {
          dropdowns: [
            { label: 'The constant term in $7x - 4$ is:', options: ['$7$', '$-4$', '$x$', '$4$'] },
            { label: '"6 less than a number $n$" is:', options: ['$6 - n$', '$n - 6$', '$6n$', '$n + 6$'] },
            { label: '$3x + x$ simplifies to:', options: ['$3x^2$', '$4x$', '$4x^2$', '$3$'] },
            { label: '$2y + 5$ when $y = 4$ equals:', options: ['$13$', '$28$', '$11$', '$14$'] },
          ],
          correctAnswers: ['$-4$', '$n - 6$', '$4x$', '$13$'],
          hint1: 'The constant carries its sign: in $7x - 4$ it is $-4$.',
          hint2: '"Less than" flips the order, giving $n - 6$.',
          hint3: 'A lone $x$ is $1x$, so $3x + x = 4x$; and $2(4) + 5 = 13$.',
          explanation: 'Constant $= -4$;  "6 less than $n$" $= n - 6$;  $3x + x = 4x$;  $2(4) + 5 = 13$.',
        },
      },
      {
        id: 'vae5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Name a coefficient | the number multiplying the variable (lone $x$ → $1$) |
| Translate "less than" | flip the order: "$5$ less than $n$" $= n - 5$ |
| Evaluate an expression | substitute, then apply PEMDAS |
| Combine like terms | add the **coefficients**, keep the variable |
| Distribute | multiply the outside factor by **every** inside term |

> ⚠️ **Top traps:** "less than" flips the order; in $2x^2$ the square applies only to the $x$; $3x + 5x = 8x$ (the exponent never changes); and $3(x + 4) = 3x + 12$ — distribute to both terms.`,
      },
      {
        id: 'vae5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In the expression $9k - 2$, what is the coefficient of $k$?',
              options: ['$9$', '$-2$', '$k$', '$1$'],
              correctAnswer: 0,
              explanation: 'The coefficient is the number multiplying $k$, which is $9$. The $-2$ is the constant term.',
            },
            {
              question: 'Evaluate $4x - 5$ when $x = 3$.',
              options: ['$12$', '$7$', '$2$', '$17$'],
              correctAnswer: 1,
              explanation: 'Substitute: $4(3) - 5 = 12 - 5 = 7$. Multiply before subtracting (PEMDAS).',
            },
            {
              question: 'Simplify $5y + 2 + 3y$.',
              options: ['$10y$', '$8y^2 + 2$', '$8y + 2$', '$5y + 5$'],
              correctAnswer: 2,
              explanation: 'Combine the like terms $5y + 3y = 8y$ and keep the constant $+2$, giving $8y + 2$. The $2$ cannot combine with the $y$-terms.',
            },
          ],
        },
      },
    ],
  },
]
