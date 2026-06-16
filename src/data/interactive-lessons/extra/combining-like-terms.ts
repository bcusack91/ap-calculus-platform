import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Combining Like Terms (Pre-Algebra).
 * Registry key: 'combining-like-terms' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'combining-like-terms',
    sections: [
      {
        id: 'clt1-intro',
        type: 'text' as const,
        content: `# 🧩 Combining Like Terms

**Part 1 of 5 — What Is a Term, and What Makes Terms "Like"?**

---

### Topics in This Part

| Section |
|---------|
| Terms, Coefficients, and Variables |
| The Rule: Same Variable, Same Exponent |
| Spotting Like Terms |

> 🔑 **Key Concept:** Combining like terms is just *counting*. If $3$ apples plus $2$ apples is $5$ apples, then $3x + 2x = 5x$. The whole skill rests on knowing **which terms are apples** — that's what Part 1 teaches.`,
      },
      {
        id: 'clt1-terms',
        type: 'text' as const,
        content: `## Terms, Coefficients, and Variables

An **expression** is a string of **terms** joined by $+$ and $-$ signs. A **term** is a single number, a single variable, or a number times variables.

$$\\underbrace{7x}_{\\text{term}} \\;+\\; \\underbrace{4}_{\\text{term}} \\;-\\; \\underbrace{2y}_{\\text{term}}$$

Every term has two parts:

- the **coefficient** — the number multiplied in front, and
- the **variable part** — the letters (and their exponents).

| Term | Coefficient | Variable part |
|------|-------------|---------------|
| $7x$ | $7$ | $x$ |
| $-2y$ | $-2$ | $y$ |
| $x^2$ | $1$ | $x^2$ |
| $5$ | $5$ | *(none — a constant)* |

> 🔑 **Two quiet rules:** A lone variable like $x$ has coefficient $1$ (we just don't write it). The **sign in front belongs to the term** — in $8a - 3b$, the second term is $-3b$.`,
      },
      {
        id: 'clt1-coeff-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the expression $9m - 6$, what is the coefficient of the first term?',
              options: ['$9$', '$m$', '$-6$', '$1$'],
              correctAnswer: 0,
              explanation: 'The coefficient is the number multiplied in front of the variable. In $9m$, that number is $9$.',
            },
            {
              question: 'What is the coefficient of $x$ in the term $-x$?',
              options: ['$0$', '$1$', '$-1$', '$x$'],
              correctAnswer: 2,
              explanation: '$-x$ means $-1 \\cdot x$. A variable with only a minus sign in front has coefficient $-1$.',
            },
          ],
        },
      },
      {
        id: 'clt1-like-rule',
        type: 'text' as const,
        content: `## The Rule: Same Variable, *Same Exponent*

Two terms are **like terms** when their **variable parts are identical** — exactly the same letters raised to exactly the same powers. The coefficients do **not** have to match.

$$\\boxed{\\;\\text{Like terms} \\Longleftrightarrow \\text{identical variable part}\\;}$$

| Pair | Like? | Why |
|------|-------|-----|
| $3x$ and $8x$ | ✅ yes | both have variable part $x$ |
| $5y$ and $-2y$ | ✅ yes | both have variable part $y$ |
| $4$ and $9$ | ✅ yes | both are constants (no variable) |
| $6x$ and $6y$ | ❌ no | different letters ($x$ vs. $y$) |
| $x^2$ and $x$ | ❌ no | different exponents ($x^2$ vs. $x^1$) |
| $2ab$ and $5ab$ | ✅ yes | identical variable part $ab$ |

> ⚠️ **Watch the exponent.** $x^2$ and $x$ are **not** like terms, even though they share the letter $x$. The power must match too — $x^2$ counts "squares," $x$ counts "singles."`,
      },
      {
        id: 'clt1-spot-dropdown',
        type: 'dropdown-select' as const,
        content: `**Like or Not Like?** 🔽

For each pair, decide whether the two terms are *like terms*.`,
        exercise: {
          dropdowns: [
            { label: '$4x$ and $11x$:', options: ['Like terms', 'Not like terms'] },
            { label: '$7a$ and $7b$:', options: ['Like terms', 'Not like terms'] },
            { label: '$3y^2$ and $9y^2$:', options: ['Like terms', 'Not like terms'] },
            { label: '$5n$ and $5n^2$:', options: ['Like terms', 'Not like terms'] },
          ],
          correctAnswers: ['Like terms', 'Not like terms', 'Like terms', 'Not like terms'],
          hint1: 'Like terms must have the *same letter* AND the *same exponent*. The coefficients can differ.',
          hint2: '$4x$ and $11x$ both have variable part $x$ — like. $7a$ and $7b$ use different letters — not like.',
          hint3: '$3y^2$ and $9y^2$ both have variable part $y^2$ — like. $5n$ has exponent $1$ but $5n^2$ has exponent $2$ — not like.',
          explanation: 'Same variable part = like. Pairs 1 and 3 match exactly; pair 2 differs by letter; pair 4 differs by exponent.',
        },
      },
      {
        id: 'clt1-spot-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which term is a like term with $-6x$?',
              options: ['$-6y$', '$x^2$', '$10x$', '$6$'],
              correctAnswer: 2,
              explanation: 'A like term needs the same variable part, $x$. Only $10x$ qualifies. ($-6y$ uses $y$, $x^2$ has a different exponent, and $6$ is a constant.)',
            },
            {
              question: 'In the expression $5a + 3b + 2a + b$, which terms are like $5a$?',
              options: ['$3b$ only', '$2a$ only', '$3b$ and $b$', '$2a$ and $b$'],
              correctAnswer: 1,
              explanation: 'Like terms with $5a$ must have variable part $a$. Only $2a$ does. The $b$-terms ($3b$ and $b$) are a separate like-group.',
            },
          ],
        },
      },
      {
        id: 'clt1-wrap',
        type: 'text' as const,
        content: `## What You Can Now Do

You can pick an expression apart into terms, read off each coefficient (remembering the hidden $1$ and the sign), and sort terms into **like-groups**.

> 💡 Think of like terms as **labeled boxes**: one box for $x$'s, one for $y$'s, one for plain numbers. You can only add what goes in the *same box*. In Part 2 we actually add them up.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'combining-like-terms',
    sections: [
      {
        id: 'clt2-intro',
        type: 'text' as const,
        content: `# 🧩 Combining Like Terms

**Part 2 of 5 — Adding the Coefficients**

---

> 🔑 **The Idea:** To combine like terms, **add (or subtract) the coefficients** and **keep the variable part exactly the same**. The variable just rides along — it never changes.`,
      },
      {
        id: 'clt2-how',
        type: 'text' as const,
        content: `## The One Move

$$3x + 5x = (3 + 5)\\,x = 8x$$

You added the coefficients $3$ and $5$ to get $8$, and the $x$ stayed put. This is the **distributive property** running in reverse — but you can just think of it as counting:

> $3$ x's plus $5$ x's is $8$ x's.

### More Examples

| Expression | Combine | Result |
|------------|---------|--------|
| $7y + 2y$ | $7 + 2$ | $9y$ |
| $10m - 4m$ | $10 - 4$ | $6m$ |
| $a + a$ | $1 + 1$ | $2a$ |
| $8 + 3$ | $8 + 3$ | $11$ |

> ⚠️ **Never multiply the variables.** $3x + 5x$ is $8x$, **not** $8x^2$. You are *counting* x's, not multiplying them. ($x^2$ would only appear from $3x \\cdot 5x$.)`,
      },
      {
        id: 'clt2-basic-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Combine: $6k + 9k$.',
              options: ['$15k$', '$15k^2$', '$54k$', '$15$'],
              correctAnswer: 0,
              explanation: 'Add the coefficients: $6 + 9 = 15$. Keep the variable: $15k$. The exponent stays $1$ — you never multiply the variables.',
            },
            {
              question: 'Combine: $12p - 12p$.',
              options: ['$0$', '$24p$', '$1$', '$p$'],
              correctAnswer: 0,
              explanation: '$12 - 12 = 0$, so $0p = 0$. When the coefficients cancel, the whole term disappears.',
            },
          ],
        },
      },
      {
        id: 'clt2-signs',
        type: 'text' as const,
        content: `## Keeping Track of Signs

The trick is to treat each term **with the sign in front of it**. Then "combining" is just adding signed numbers.

### Worked Example: $-4x + 9x$

The terms are $-4x$ and $+9x$. Add the coefficients:

$$-4 + 9 = 5 \\quad\\Longrightarrow\\quad -4x + 9x = 5x$$

### Worked Example: $2y - 7y$

The terms are $+2y$ and $-7y$:

$$2 - 7 = -5 \\quad\\Longrightarrow\\quad 2y - 7y = -5y$$

> 💡 **Reading tip:** rewrite subtraction as "adding a negative." $2y - 7y$ becomes $2y + (-7y)$, and now it's a plain addition of $+2$ and $-7$.`,
      },
      {
        id: 'clt2-signed-drill',
        type: 'input-boxes' as const,
        content: `**Combine Each Pair** 🧮

Combine the like terms. Enter the **coefficient with its sign** (for example, type \`-5\` for $-5x$). Write \`0\` if the term cancels.

**1)** $-8x + 3x \\;\\Rightarrow\\; ?\\,x$
**2)** $6m - 10m \\;\\Rightarrow\\; ?\\,m$
**3)** $-7y - 4y \\;\\Rightarrow\\; ?\\,y$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-5', '-4', '-11'],
          hint1: 'Add the signed coefficients. $-8 + 3 = -5$.',
          hint2: '$6 - 10 = -4$. Subtracting a bigger number gives a negative result.',
          hint3: '$-7 - 4 = -11$. Two negatives add to a more-negative number.',
          explanation: '1) $-8+3=-5 \\Rightarrow -5x$.  2) $6-10=-4 \\Rightarrow -4m$.  3) $-7-4=-11 \\Rightarrow -11y$.',
        },
      },
      {
        id: 'clt2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Result** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$5a + 5a =$', options: ['$10a$', '$25a$', '$10a^2$', '$5a$'] },
            { label: '$-3n + 8n =$', options: ['$5n$', '$-5n$', '$11n$', '$-11n$'] },
            { label: '$4w - 4w =$', options: ['$0$', '$8w$', '$1$', '$16w$'] },
          ],
          correctAnswers: ['$10a$', '$5n$', '$0$'],
          hint1: 'Add coefficients; keep the variable; never change the exponent.',
          hint2: '$5+5=10 \\Rightarrow 10a$. $-3+8=5 \\Rightarrow 5n$.',
          hint3: '$4-4=0$, and $0w = 0$ — the term vanishes.',
          explanation: '$5a+5a=10a$ (not $10a^2$); $-3n+8n=5n$; $4w-4w=0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'combining-like-terms',
    sections: [
      {
        id: 'clt3-intro',
        type: 'text' as const,
        content: `# 🧩 Combining Like Terms

**Part 3 of 5 — Simplifying Longer Expressions**

---

> 🔑 **The Strategy:** Real expressions mix several kinds of terms. The plan is always the same: **group the like terms, then combine each group.** Constants form their own group.`,
      },
      {
        id: 'clt3-method',
        type: 'text' as const,
        content: `## A Reliable 3-Step Method

To simplify an expression like $4x + 3 + 2x + 5$:

1. **Identify** each term *with its sign*: $+4x,\\; +3,\\; +2x,\\; +5$.
2. **Group** like terms together: $(4x + 2x) + (3 + 5)$.
3. **Combine** each group: $6x + 8$.

$$4x + 3 + 2x + 5 = 6x + 8$$

> ⚠️ **$6x + 8$ does not simplify further.** $6x$ and $8$ are **not** like terms (one has a variable, one doesn't), so this is the final, fully simplified answer. An answer can have more than one term.`,
      },
      {
        id: 'clt3-worked2',
        type: 'text' as const,
        content: `## A Worked Example With Subtraction

Simplify $\\;9y - 2 - 4y + 7$.

Attach each sign to its term, then group:

$$(9y - 4y) + (-2 + 7)$$

Combine each group:

$$9y - 4y = 5y \\qquad -2 + 7 = 5$$

$$\\Longrightarrow\\quad 9y - 2 - 4y + 7 = 5y + 5$$

> 💡 A neat habit: list the variable terms first and the constant last, so the answer comes out in the tidy form $5y + 5$.`,
      },
      {
        id: 'clt3-group-dropdown',
        type: 'dropdown-select' as const,
        content: `**Group Then Combine** 🔽

Simplify $\\;7m + 4 - 3m + 6$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Group the $m$-terms:', options: ['$7m - 3m$', '$7m + 3m$', '$7m - 4m$', '$4 + 6$'] },
            { label: 'Group the constants:', options: ['$4 + 6$', '$4 - 6$', '$7 + 4$', '$-3 + 6$'] },
            { label: 'Combine the $m$-terms:', options: ['$4m$', '$10m$', '$4m^2$', '$-4m$'] },
            { label: 'Final simplified form:', options: ['$4m + 10$', '$4m^2 + 10$', '$10m + 10$', '$4m - 10$'] },
          ],
          correctAnswers: ['$7m - 3m$', '$4 + 6$', '$4m$', '$4m + 10$'],
          hint1: 'Each minus sign belongs to the term right after it: the $m$-terms are $+7m$ and $-3m$.',
          hint2: 'The constants are $+4$ and $+6$, so they group as $4 + 6$.',
          hint3: '$7m - 3m = 4m$ and $4 + 6 = 10$, giving $4m + 10$.',
          explanation: '$7m+4-3m+6 = (7m-3m)+(4+6) = 4m + 10$.',
        },
      },
      {
        id: 'clt3-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify Fully** 🧮

Simplify each expression. Enter the **variable-term coefficient** in the first box and the **constant** in the second box. (For $8x + 3$, you'd enter \`8\` then \`3\`.)

**1)** $5x + 6 + 2x - 1 = ?\\,x + ?$
**2)** $10a - 4 - 3a + 9 = ?\\,a + ?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '5', '7', '5'],
          hint1: 'Combine the variable terms in one group, the constants in another.',
          hint2: '1) $5x + 2x = 7x$ and $6 - 1 = 5$, so $7x + 5$.',
          hint3: '2) $10a - 3a = 7a$ and $-4 + 9 = 5$, so $7a + 5$.',
          explanation: '1) $5x+6+2x-1 = 7x+5$.  2) $10a-4-3a+9 = 7a+5$. Both happen to simplify to the same shape.',
        },
      },
      {
        id: 'clt3-three-groups',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify: $3x + 2y + 5x - y$.',
              options: ['$8x + y$', '$8x + 3y$', '$10xy$', '$8x - y$'],
              correctAnswer: 0,
              explanation: 'Group by letter: $(3x + 5x) + (2y - y) = 8x + 1y = 8x + y$. The $x$- and $y$-terms stay separate.',
            },
            {
              question: 'Which expression is already fully simplified (no like terms left to combine)?',
              options: ['$4x + 3x + 2$', '$7a + 5b$', '$6m + 1 - 6m$', '$9 + 2 + n$'],
              correctAnswer: 1,
              explanation: '$7a + 5b$ has no like terms ($a \\ne b$), so it is done. The others still contain combinable like terms.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'combining-like-terms',
    sections: [
      {
        id: 'clt4-intro',
        type: 'text' as const,
        content: `# 🧩 Combining Like Terms

**Part 4 of 5 — Distributing First, Then Combining**

---

> 🔑 **New Wrinkle:** When an expression has **parentheses**, you must **distribute** to clear them *before* you can find like terms. Distribute, then group, then combine.`,
      },
      {
        id: 'clt4-distribute',
        type: 'text' as const,
        content: `## The Distributive Property

$$a(b + c) = ab + ac$$

You multiply the outside number by **every** term inside. Then the parentheses are gone and ordinary combining takes over.

### Worked Example: $2(x + 4) + 3x$

**Distribute** the $2$:

$$2(x + 4) = 2x + 8$$

Now the expression is $2x + 8 + 3x$. **Group and combine:**

$$(2x + 3x) + 8 = 5x + 8$$

> ⚠️ **Distribute to every term inside.** A common slip is $2(x+4) = 2x + 4$ — the $4$ got skipped. It must be $2x + 8$.`,
      },
      {
        id: 'clt4-distribute-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Distribute: $3(2x + 5)$.',
              options: ['$6x + 15$', '$6x + 5$', '$5x + 15$', '$6x + 8$'],
              correctAnswer: 0,
              explanation: 'Multiply the $3$ by each inside term: $3 \\cdot 2x = 6x$ and $3 \\cdot 5 = 15$, giving $6x + 15$.',
            },
            {
              question: 'Simplify: $4(a + 1) + 2a$.',
              options: ['$6a + 4$', '$6a + 1$', '$4a + 6$', '$8a + 4$'],
              correctAnswer: 0,
              explanation: '$4(a+1) = 4a + 4$. Then $4a + 4 + 2a = (4a + 2a) + 4 = 6a + 4$.',
            },
          ],
        },
      },
      {
        id: 'clt4-negative',
        type: 'text' as const,
        content: `## Distributing a Negative

A minus sign in front of parentheses means you are multiplying by $-1$ (or a negative number). **Every** inside sign flips.

### Worked Example: $8x - 3(x + 2)$

Distribute the $-3$ across **both** inside terms:

$$-3(x + 2) = -3x - 6$$

So the expression becomes $8x - 3x - 6$. Combine:

$$8x - 3x - 6 = 5x - 6$$

> ⚠️ **The sign trap.** $-3(x + 2)$ is $-3x - 6$, **not** $-3x + 6$. The $-3$ multiplies the $+2$ to give $-6$. Distribute the sign to *every* term.`,
      },
      {
        id: 'clt4-distribute-dropdown',
        type: 'dropdown-select' as const,
        content: `**Distribute Carefully** 🔽

Work through $\\;5(y + 3) - 2(y + 1)$.`,
        exercise: {
          dropdowns: [
            { label: 'Distribute $5(y+3)$:', options: ['$5y + 15$', '$5y + 3$', '$5y + 8$', '$y + 15$'] },
            { label: 'Distribute $-2(y+1)$:', options: ['$-2y - 2$', '$-2y + 2$', '$-2y - 1$', '$2y + 2$'] },
            { label: 'Combine the $y$-terms:', options: ['$3y$', '$7y$', '$-3y$', '$3y^2$'] },
            { label: 'Final simplified form:', options: ['$3y + 13$', '$3y + 17$', '$7y + 13$', '$3y - 13$'] },
          ],
          correctAnswers: ['$5y + 15$', '$-2y - 2$', '$3y$', '$3y + 13$'],
          hint1: '$5 \\cdot y = 5y$ and $5 \\cdot 3 = 15$. The $-2$ multiplies both $y$ and $1$.',
          hint2: '$-2(y+1) = -2y - 2$ — the $-2$ hits the $+1$ to give $-2$.',
          hint3: 'Variables: $5y - 2y = 3y$. Constants: $15 - 2 = 13$. So $3y + 13$.',
          explanation: '$5(y+3) - 2(y+1) = (5y+15) + (-2y-2) = 3y + 13$.',
        },
      },
      {
        id: 'clt4-distribute-drill',
        type: 'input-boxes' as const,
        content: `**Distribute, Then Combine** 🧮

Simplify to the form $(\\text{coefficient})x + (\\text{constant})$. Enter the coefficient, then the constant (with its sign).

**1)** $6(x + 2) - 4x = ?\\,x + ?$
**2)** $10x - 2(x + 5) = ?\\,x + ?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '12', '8', '-10'],
          hint1: 'First clear the parentheses by distributing, then group like terms.',
          hint2: '1) $6(x+2) = 6x + 12$, then $6x + 12 - 4x = 2x + 12$.',
          hint3: '2) $-2(x+5) = -2x - 10$, then $10x - 2x - 10 = 8x - 10$.',
          explanation: '1) $6(x+2)-4x = 6x+12-4x = 2x + 12$.  2) $10x-2(x+5) = 10x-2x-10 = 8x - 10$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'combining-like-terms',
    sections: [
      {
        id: 'clt5-intro',
        type: 'text' as const,
        content: `# 🧩 Combining Like Terms

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) spot like terms, (2) add their coefficients, (3) simplify long expressions by grouping, and (4) distribute before combining. Let's pull it all together.`,
      },
      {
        id: 'clt5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do |
|-----------|-----------|
| Are two terms "like"? | Same variable **and** same exponent → yes |
| Combine like terms | Add the coefficients; keep the variable part |
| Lone variable $x$ | Coefficient is $1$ |
| Subtraction | Attach the $-$ sign to the term, then add |
| Parentheses | **Distribute first**, then group and combine |
| Negative in front | Flip the sign of **every** inside term |

> ⚠️ **Top three traps:** (1) $3x + 5x = 8x$, never $8x^2$. (2) $x^2$ and $x$ are not like terms. (3) $-2(x+5) = -2x - 10$, not $-2x + 10$.`,
      },
      {
        id: 'clt5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify: $8x - 3 + 2x + 7$.',
              options: ['$10x + 4$', '$10x + 10$', '$6x + 4$', '$10x - 4$'],
              correctAnswer: 0,
              explanation: '$(8x + 2x) + (-3 + 7) = 10x + 4$.',
            },
            {
              question: 'Simplify: $4(x + 3) - 2x$.',
              options: ['$2x + 12$', '$2x + 3$', '$6x + 12$', '$2x + 6$'],
              correctAnswer: 0,
              explanation: '$4(x+3) = 4x + 12$, then $4x + 12 - 2x = 2x + 12$.',
            },
            {
              question: 'Simplify: $5a + 2b - 3a + 4b$.',
              options: ['$2a + 6b$', '$8a + 6b$', '$2a + 2b$', '$8ab$'],
              correctAnswer: 0,
              explanation: 'Group by letter: $(5a - 3a) + (2b + 4b) = 2a + 6b$. The $a$- and $b$-terms cannot merge.',
            },
          ],
        },
      },
      {
        id: 'clt5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Round** 🧮

Simplify to $(\\text{coefficient})x + (\\text{constant})$. Enter the coefficient, then the constant (with its sign).

**1)** $7x + 5 - 7x - 9 \\;\\Rightarrow\\; ?\\,x + ?$  *(watch the $x$-terms!)*
**2)** $3(2x - 1) + 4 \\;\\Rightarrow\\; ?\\,x + ?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['0', '-4', '6', '1'],
          hint1: '1) The $x$-terms are $7x$ and $-7x$ — they cancel to $0x$.',
          hint2: '1) $7x - 7x = 0$ and $5 - 9 = -4$, so the result is $0x + (-4)$. Enter the coefficient as $0$.',
          hint3: '2) $3(2x-1) = 6x - 3$, then $6x - 3 + 4 = 6x + 1$.',
          explanation: '1) $7x+5-7x-9 = 0x - 4$ (just $-4$).  2) $3(2x-1)+4 = 6x-3+4 = 6x + 1$.',
        },
      },
      {
        id: 'clt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which pair are like terms?',
              options: ['$6y$ and $-y$', '$3x$ and $3$', '$x^2$ and $x$', '$2a$ and $2b$'],
              correctAnswer: 0,
              explanation: '$6y$ and $-y$ share the variable part $y$, so they are like terms. The others differ by variable, constant-vs-variable, or exponent.',
            },
            {
              question: 'Combine: $-5m + 8m - m$.',
              options: ['$2m$', '$3m$', '$-2m$', '$14m$'],
              correctAnswer: 0,
              explanation: 'Add the coefficients: $-5 + 8 - 1 = 2$ (remember $-m$ has coefficient $-1$), so $2m$.',
            },
            {
              question: 'Simplify: $2(3x + 1) - 5$.',
              options: ['$6x - 3$', '$6x + 6$', '$6x - 4$', '$5x - 3$'],
              correctAnswer: 0,
              explanation: '$2(3x+1) = 6x + 2$, then $6x + 2 - 5 = 6x - 3$.',
            },
          ],
        },
      },
    ],
  },
]
