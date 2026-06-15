import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Adding and Subtracting Polynomials (Algebra 1).
 * Registry key / DB Topic.slug: 'polynomial-operations-algebra1'.
 * 5 parts, gold-standard structure: polynomial vocabulary → adding (combining like
 * terms) → subtracting (distributing the minus sign) → worked examples & word
 * problems (perimeter, area, profit models) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every computed value, correctAnswer index, and drill answer was re-checked by hand.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-algebra1',
    sections: [
      {
        id: 'poly1-intro',
        type: 'text' as const,
        content: `# ➕ Adding & Subtracting Polynomials

**Part 1 of 5 — The Language of Polynomials**

---

### Topics in This Part

| Section |
|---------|
| Terms, Coefficients, and Degree |
| Naming Polynomials |
| What "Like Terms" Means |

> 🔑 **Key Concept:** Adding and subtracting polynomials is really just *combining like terms*. Before we can combine them, we need to recognize them — that's what Part 1 is all about.`,
      },
      {
        id: 'poly1-vocab',
        type: 'text' as const,
        content: `## Terms, Coefficients, and Degree

A **polynomial** is a sum of **terms**. Each term is a number times a variable raised to a whole-number power.

In the term $7x^3$:
- The **coefficient** is $7$ (the number multiplied by the variable).
- The **variable** is $x$.
- The **degree** of the term is $3$ (the exponent on the variable).

The **degree of the whole polynomial** is the *largest* exponent that appears.

| Polynomial | Degree | Why |
|------------|--------|-----|
| $4x^2 + 3x + 9$ | $2$ | largest exponent is $2$ |
| $x^5 - 2x$ | $5$ | largest exponent is $5$ |
| $6x$ | $1$ | $6x = 6x^1$ |
| $8$ | $0$ | a constant is $8x^0$ |

> 💡 A plain number like $8$ is called a **constant term**. Its degree is $0$ because $x^0 = 1$.`,
      },
      {
        id: 'poly1-degree-drill',
        type: 'input-boxes' as const,
        content: `**Find the Degree** 🧮

Enter the degree of each polynomial (the largest exponent that appears).

**1)** $7x^4 - 2x^2 + 9$
**2)** $3x + 5$
**3)** $x^6$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '1', '6'],
          hint1: 'The degree is the *largest* exponent, not the number of terms.',
          hint2: 'For #2, $3x = 3x^1$, so its degree is $1$.',
          hint3: 'For #3, the only term is $x^6$, so the degree is $6$.',
          explanation: '#1: exponents are $4, 2, 0$ → degree $4$.  #2: $3x^1 + 5x^0$ → degree $1$.  #3: $x^6$ → degree $6$.',
        },
      },
      {
        id: 'poly1-naming',
        type: 'text' as const,
        content: `## Naming Polynomials

We name polynomials two ways — by their **number of terms** and by their **degree**.

**By number of terms:**

| Name | Terms | Example |
|------|-------|---------|
| Monomial | $1$ | $5x^2$ |
| Binomial | $2$ | $x + 7$ |
| Trinomial | $3$ | $x^2 + 3x - 4$ |

**By degree:**

| Name | Degree | Example |
|------|--------|---------|
| Constant | $0$ | $9$ |
| Linear | $1$ | $2x + 1$ |
| Quadratic | $2$ | $x^2 - 5x + 6$ |
| Cubic | $3$ | $x^3 + 2$ |

> 🔑 So $x^2 + 3x - 4$ is a **quadratic trinomial** — quadratic (degree $2$) and trinomial (three terms).`,
      },
      {
        id: 'poly1-vocab-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the degree of the polynomial $5x^3 - 8x^2 + 2x - 1$?',
              options: ['$3$', '$2$', '$4$', '$1$'],
              correctAnswer: 0,
              explanation: 'The degree is the largest exponent that appears. Here the exponents are $3, 2, 1,$ and $0$, so the degree is $3$.',
            },
            {
              question: 'How would you classify $x^2 - 9$?',
              options: ['Quadratic binomial', 'Linear binomial', 'Quadratic trinomial', 'Cubic monomial'],
              correctAnswer: 0,
              explanation: 'It has degree $2$ (quadratic) and two terms, $x^2$ and $-9$ (binomial), so it is a quadratic binomial.',
            },
            {
              question: 'What is the coefficient of the $x$-term in $4x^2 - 7x + 3$?',
              options: ['$-7$', '$7$', '$4$', '$3$'],
              correctAnswer: 0,
              explanation: 'The coefficient is the number multiplied by the variable, *including its sign*. The $x$-term is $-7x$, so its coefficient is $-7$.',
            },
          ],
        },
      },
      {
        id: 'poly1-like-terms',
        type: 'text' as const,
        content: `## What "Like Terms" Means

**Like terms** have the *exact same variable part* — the same variable raised to the same power. Only the coefficients can differ.

| Pair | Like terms? | Why |
|------|-------------|-----|
| $3x^2$ and $5x^2$ | ✅ Yes | both have $x^2$ |
| $4x$ and $-9x$ | ✅ Yes | both have $x^1$ |
| $2x^2$ and $2x$ | ❌ No | $x^2 \\ne x$ |
| $6x^3$ and $6x^2$ | ❌ No | different powers |
| $7$ and $-2$ | ✅ Yes | both are constants ($x^0$) |

To **combine like terms**, add (or subtract) the coefficients and keep the variable part unchanged:

$$3x^2 + 5x^2 = 8x^2 \\qquad 4x - 9x = -5x$$

> ⚠️ You can **never** combine $x^2$ with $x$. They are different "kinds" of term — like trying to add apples and oranges.`,
      },
      {
        id: 'poly1-like-drill',
        type: 'dropdown-select' as const,
        content: `**Like or Unlike?** 🔽

For each pair, choose whether the terms are like terms.`,
        exercise: {
          dropdowns: [
            { label: '$5x^2$ and $-2x^2$', options: ['Like terms', 'Unlike terms'] },
            { label: '$8x$ and $8x^2$', options: ['Like terms', 'Unlike terms'] },
            { label: '$-3$ and $10$', options: ['Like terms', 'Unlike terms'] },
            { label: '$7x^3$ and $4x$', options: ['Like terms', 'Unlike terms'] },
          ],
          correctAnswers: ['Like terms', 'Unlike terms', 'Like terms', 'Unlike terms'],
          hint1: 'Like terms must have the *same variable raised to the same power*.',
          hint2: 'Two constants (plain numbers) are always like terms — both are degree $0$.',
          hint3: '$x^3$ and $x^1$ have different exponents, so they are unlike.',
          explanation: '$5x^2$ & $-2x^2$: same $x^2$ → like. $8x$ & $8x^2$: different powers → unlike. $-3$ & $10$: both constants → like. $7x^3$ & $4x$: different powers → unlike.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-algebra1',
    sections: [
      {
        id: 'poly2-intro',
        type: 'text' as const,
        content: `# ➕ Adding & Subtracting Polynomials

**Part 2 of 5 — Adding Polynomials**

---

> 🔑 **The Idea:** To add two polynomials, drop the parentheses and **combine like terms**. Nothing else changes — the plus sign in front of a group does not flip any signs.`,
      },
      {
        id: 'poly2-horizontal',
        type: 'text' as const,
        content: `## Adding Horizontally

### Example: $(3x^2 + 5x + 2) + (4x^2 - 2x + 7)$

**Step 1 — Remove the parentheses.** Since both groups are *added*, every sign stays the same:

$$3x^2 + 5x + 2 + 4x^2 - 2x + 7$$

**Step 2 — Group like terms** (it helps to line up the same powers):

$$(3x^2 + 4x^2) + (5x - 2x) + (2 + 7)$$

**Step 3 — Combine:**

$$7x^2 + 3x + 9$$

> 💡 Notice the answer is written in **standard form** — terms in order from the highest power to the lowest. Always finish there.`,
      },
      {
        id: 'poly2-group-check',
        type: 'dropdown-select' as const,
        content: `**Group the Like Terms** 🔽

You are adding $(3x^2 + 5x + 2) + (4x^2 - 2x + 7)$. Choose the combined result for each group of like terms.`,
        exercise: {
          dropdowns: [
            { label: '$x^2$ terms: $3x^2 + 4x^2 =$', options: ['$7x^2$', '$12x^2$', '$7x^4$', '$x^2$'] },
            { label: '$x$ terms: $5x + (-2x) =$', options: ['$3x$', '$7x$', '$-3x$', '$10x$'] },
            { label: 'constants: $2 + 7 =$', options: ['$9$', '$5$', '$14$', '$-5$'] },
          ],
          correctAnswers: ['$7x^2$', '$3x$', '$9$'],
          hint1: 'Add the coefficients of like terms; the variable part stays the same.',
          hint2: 'For the $x$ terms: $5 + (-2) = 3$, so $5x - 2x = 3x$.',
          hint3: 'For the constants, just add the plain numbers: $2 + 7 = 9$.',
          explanation: '$3x^2 + 4x^2 = 7x^2$, $\\;5x - 2x = 3x$, $\\;2 + 7 = 9$, giving the sum $7x^2 + 3x + 9$.',
        },
      },
      {
        id: 'poly2-vertical',
        type: 'text' as const,
        content: `## Adding Vertically

Some students prefer to **stack** the polynomials and line up like terms in columns, just like adding numbers:

$$
\\begin{array}{r}
3x^2 + 5x + 2 \\\\
+\\;\\; 4x^2 - 2x + 7 \\\\
\\hline
7x^2 + 3x + 9
\\end{array}
$$

Each column holds only like terms, so you just add down each column.

> ⚠️ **Watch the gaps.** If one polynomial is missing a power — say it has no $x$-term — leave that column **blank** (or write $0x$) so nothing lines up wrong.`,
      },
      {
        id: 'poly2-add-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Add: $(2x^2 + 3x) + (5x^2 + x)$',
              options: ['$7x^2 + 4x$', '$7x^2 + 3x$', '$10x^2 + 4x$', '$7x^4 + 4x^2$'],
              correctAnswer: 0,
              explanation: 'Combine like terms: $2x^2 + 5x^2 = 7x^2$ and $3x + x = 4x$. The answer is $7x^2 + 4x$. (Exponents are *not* added — only coefficients.)',
            },
            {
              question: 'Add: $(x^2 - 4x + 6) + (3x^2 + 4x - 1)$',
              options: ['$4x^2 + 5$', '$4x^2 + 8x + 5$', '$4x^2 - 8x + 5$', '$4x^2 + 7$'],
              correctAnswer: 0,
              explanation: '$x^2 + 3x^2 = 4x^2$; $-4x + 4x = 0$ (the $x$-terms cancel); $6 + (-1) = 5$. Result: $4x^2 + 5$.',
            },
          ],
        },
      },
      {
        id: 'poly2-closure',
        type: 'text' as const,
        content: `## A Fact Worth Knowing

When you add two polynomials, the result is **always another polynomial**. The degree of the sum is *at most* the larger of the two degrees — and sometimes it is **less**, when the leading terms cancel.

**Example:** $(x^2 + 3x) + (-x^2 + 5)$. The $x^2$ terms cancel:

$$x^2 - x^2 + 3x + 5 = 3x + 5$$

A sum of two *quadratics* became *linear*. Adding never raises the degree — it can only keep it the same or lower it. We'll use this idea again when we subtract.`,
      },
      {
        id: 'poly2-add-drill',
        type: 'input-boxes' as const,
        content: `**Add the Polynomials** 🧮

Add each pair and enter the **coefficients** of the result, in order.

**1)** $(4x^2 + 2x + 1) + (3x^2 + 6x + 5)$
&nbsp;&nbsp;Enter the coefficient of $x^2$, then $x$, then the constant.

**2)** $(7x + 9) + (2x - 4)$
&nbsp;&nbsp;Enter the coefficient of $x$, then the constant.`,
        exercise: {
          boxes: 5,
          correctAnswers: ['7', '8', '6', '9', '5'],
          hint1: 'For #1: $4x^2 + 3x^2 = 7x^2$, then handle the $x$-terms, then the constants.',
          hint2: 'For #1: $2x + 6x = 8x$ and $1 + 5 = 6$, giving $7x^2 + 8x + 6$.',
          hint3: 'For #2: $7x + 2x = 9x$ and $9 + (-4) = 5$, giving $9x + 5$.',
          explanation: '#1: $(4+3)x^2 + (2+6)x + (1+5) = 7x^2 + 8x + 6$.  #2: $(7+2)x + (9-4) = 9x + 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-algebra1',
    sections: [
      {
        id: 'poly3-intro',
        type: 'text' as const,
        content: `# ➕ Adding & Subtracting Polynomials

**Part 3 of 5 — Subtracting Polynomials**

---

> 🔑 **The Big Rule:** To subtract, **distribute the minus sign** to *every* term in the second polynomial — then add. The minus sign flips the sign of each term it reaches.`,
      },
      {
        id: 'poly3-distribute',
        type: 'text' as const,
        content: `## The Minus Sign Distributes

Subtracting a group means multiplying that whole group by $-1$:

$$-(4x^2 - 2x + 7) = -4x^2 + 2x - 7$$

Every sign flips: $+4x^2 \\to -4x^2$, $\\;-2x \\to +2x$, $\\;+7 \\to -7$.

### Example: $(3x^2 + 5x + 2) - (4x^2 - 2x + 7)$

**Step 1 — Distribute the minus** into the second group:

$$3x^2 + 5x + 2 - 4x^2 + 2x - 7$$

**Step 2 — Combine like terms:**

$$(3x^2 - 4x^2) + (5x + 2x) + (2 - 7)$$

**Step 3 — Simplify:**

$$-x^2 + 7x - 5$$

> ⚠️ **The #1 mistake** is flipping only the *first* sign. The minus hits **all three** terms — every single one.`,
      },
      {
        id: 'poly3-distribute-check',
        type: 'dropdown-select' as const,
        content: `**Distribute the Minus** 🔽

Rewrite $-(2x^2 - 6x + 4)$ by flipping each sign. Choose the correct sign for each term.`,
        exercise: {
          dropdowns: [
            { label: 'The $x^2$-term becomes:', options: ['$-2x^2$', '$+2x^2$'] },
            { label: 'The $x$-term becomes:', options: ['$+6x$', '$-6x$'] },
            { label: 'The constant becomes:', options: ['$-4$', '$+4$'] },
          ],
          correctAnswers: ['$-2x^2$', '$+6x$', '$-4$'],
          hint1: 'Subtracting a group means multiplying every term by $-1$.',
          hint2: 'A positive term becomes negative; a negative term becomes positive.',
          hint3: '$+2x^2 \\to -2x^2$, $\\;-6x \\to +6x$, $\\;+4 \\to -4$.',
          explanation: '$-(2x^2 - 6x + 4) = -2x^2 + 6x - 4$. Each sign flips, including the middle term that was already negative.',
        },
      },
      {
        id: 'poly3-worked2',
        type: 'text' as const,
        content: `## Another Worked Example

### Example: $(6x^2 + x - 3) - (2x^2 + 4x - 9)$

Distribute the minus over the second group, then combine:

$$6x^2 + x - 3 - 2x^2 - 4x + 9$$

$$(6x^2 - 2x^2) + (x - 4x) + (-3 + 9)$$

$$4x^2 - 3x + 6$$

> ✅ **Check by adding the opposite:** subtracting $(2x^2 + 4x - 9)$ is the same as *adding* $(-2x^2 - 4x + 9)$. Lining those up gives $4x^2 - 3x + 6$ — same answer. ✓`,
      },
      {
        id: 'poly3-sub-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Subtract: $(5x^2 + 2x + 8) - (3x^2 + 2x + 1)$',
              options: ['$2x^2 + 7$', '$2x^2 + 4x + 7$', '$8x^2 + 9$', '$2x^2 + 9$'],
              correctAnswer: 0,
              explanation: 'Distribute the minus: $5x^2 + 2x + 8 - 3x^2 - 2x - 1$. Then $5x^2 - 3x^2 = 2x^2$, $\\;2x - 2x = 0$, $\\;8 - 1 = 7$. Result: $2x^2 + 7$.',
            },
            {
              question: 'Which expression is equal to $(x^2 - 5x) - (4x^2 - 3x)$?',
              options: ['$-3x^2 - 2x$', '$-3x^2 - 8x$', '$5x^2 - 2x$', '$-3x^2 + 2x$'],
              correctAnswer: 0,
              explanation: 'Distribute: $x^2 - 5x - 4x^2 + 3x$. Combine: $x^2 - 4x^2 = -3x^2$ and $-5x + 3x = -2x$. Result: $-3x^2 - 2x$.',
            },
          ],
        },
      },
      {
        id: 'poly3-pitfalls',
        type: 'text' as const,
        content: `## Two Traps to Avoid

Before you practice, here are the two errors that trip up almost everyone:

| Trap | Wrong | Right |
|------|-------|-------|
| Flipping only the first sign | $-(2x^2 - 6x + 4) = -2x^2 - 6x + 4$ | $-2x^2 + 6x - 4$ |
| Subtracting a double-negative | $-7 - (-1) = -8$ | $-7 + 1 = -6$ |

> ⚠️ When the term you subtract is *already negative*, two minuses make a **plus**: $-(-1) = +1$. Slow down on those.`,
      },
      {
        id: 'poly3-sub-drill',
        type: 'input-boxes' as const,
        content: `**Subtract the Polynomials** 🧮

Subtract and enter the **coefficients** of the result, in order.

**1)** $(8x^2 + 5x + 10) - (3x^2 + 9x + 2)$
&nbsp;&nbsp;Enter the coefficient of $x^2$, then $x$, then the constant.

**2)** $(2x - 7) - (6x - 1)$
&nbsp;&nbsp;Enter the coefficient of $x$, then the constant.`,
        exercise: {
          boxes: 5,
          correctAnswers: ['5', '-4', '8', '-4', '-6'],
          hint1: 'Distribute the minus first, then combine like terms.',
          hint2: 'For #1: $8x^2 - 3x^2 = 5x^2$, $\\;5x - 9x = -4x$, $\\;10 - 2 = 8$.',
          hint3: 'For #2: $2x - 6x = -4x$, $\\;-7 - (-1) = -7 + 1 = -6$.',
          explanation: '#1: $(8-3)x^2 + (5-9)x + (10-2) = 5x^2 - 4x + 8$.  #2: $(2-6)x + (-7+1) = -4x - 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-algebra1',
    sections: [
      {
        id: 'poly4-intro',
        type: 'text' as const,
        content: `# ➕ Adding & Subtracting Polynomials

**Part 4 of 5 — Word Problems & Applications**

---

> 🔑 **Why it matters:** Polynomials model real quantities — perimeters, areas, costs, and profits. Combining them lets you build a single tidy expression for a whole situation.`,
      },
      {
        id: 'poly4-perimeter',
        type: 'text' as const,
        content: `## Perimeter: Adding All the Sides

A triangle has sides of length $(2x + 1)$, $(3x - 4)$, and $(x + 6)$. Its **perimeter** is the sum of the sides:

$$P = (2x + 1) + (3x - 4) + (x + 6)$$

Drop the parentheses (all added) and combine like terms:

$$P = (2x + 3x + x) + (1 - 4 + 6) = 6x + 3$$

So the perimeter is $6x + 3$. If, say, $x = 5$, the perimeter is $6(5) + 3 = 33$ units.

> 💡 Adding polynomials lets one expression, $6x + 3$, stand in for *every* triangle in this family — just plug in the value of $x$ you need.`,
      },
      {
        id: 'poly4-perimeter-drill',
        type: 'input-boxes' as const,
        content: `**Find the Perimeter** 🧮

A rectangle has length $(5x + 2)$ and width $(x - 3)$. Recall that a rectangle's perimeter is $P = 2(\\text{length}) + 2(\\text{width})$, which equals (length + width) added twice.

A quicker route: add the four sides $(5x+2) + (x-3) + (5x+2) + (x-3)$.

Enter the coefficient of $x$, then the constant, in the simplified perimeter.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '-2'],
          hint1: 'The four sides are $5x+2$, $x-3$, $5x+2$, and $x-3$.',
          hint2: '$x$-terms: $5x + x + 5x + x = 12x$.',
          hint3: 'Constants: $2 + (-3) + 2 + (-3) = -2$.',
          explanation: 'Adding all four sides: $(5x + x + 5x + x) + (2 - 3 + 2 - 3) = 12x - 2$. So $P = 12x - 2$.',
        },
      },
      {
        id: 'poly4-difference',
        type: 'text' as const,
        content: `## "How Much More?" Means Subtract

Subtraction shows up whenever a problem asks for a **difference** — how much longer, how much more, how much is left over.

### Example: Comparing two lengths

Board A is $(7x + 5)$ inches long. Board B is $(3x + 9)$ inches long. **How much longer is Board A than Board B?**

Difference $=$ (longer) $-$ (shorter):

$$(7x + 5) - (3x + 9) = 7x + 5 - 3x - 9 = 4x - 4$$

Board A is $(4x - 4)$ inches longer. (For $x > 1$ this is positive, as expected.)

> ⚠️ Order matters in subtraction. "How much longer is A than B" is $A - B$, **not** $B - A$.`,
      },
      {
        id: 'poly4-profit',
        type: 'text' as const,
        content: `## Profit = Revenue − Cost

In business, **profit** is revenue minus cost. If both are modeled by polynomials, you subtract them.

### Example

A small company's revenue (in dollars) for selling $x$ items is $R = 12x^2 + 40x$, and its cost is $C = 12x^2 + 15x + 200$.

$$P = R - C = (12x^2 + 40x) - (12x^2 + 15x + 200)$$

Distribute the minus and combine:

$$P = 12x^2 + 40x - 12x^2 - 15x - 200 = 25x - 200$$

The $12x^2$ terms cancel, leaving a clean linear profit model, $P = 25x - 200$. Selling $x = 8$ items gives $P = 25(8) - 200 = \\$0$ — the break-even point.`,
      },
      {
        id: 'poly4-app-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has sides $(x + 5)$, $(2x - 1)$, and $(4x + 2)$. What is its perimeter?',
              options: ['$7x + 6$', '$7x + 8$', '$6x + 6$', '$7x - 6$'],
              correctAnswer: 0,
              explanation: 'Add the three sides: $x + 2x + 4x = 7x$ and $5 + (-1) + 2 = 6$. Perimeter $= 7x + 6$.',
            },
            {
              question: 'Revenue is $R = 9x + 300$ and cost is $C = 4x + 120$. What is the profit $P = R - C$?',
              options: ['$5x + 180$', '$13x + 420$', '$5x + 420$', '$5x - 180$'],
              correctAnswer: 0,
              explanation: '$P = (9x + 300) - (4x + 120) = 9x + 300 - 4x - 120 = 5x + 180$.',
            },
          ],
        },
      },
      {
        id: 'poly4-keywords',
        type: 'text' as const,
        content: `## Keyword Guide: Add or Subtract?

The hardest part of a word problem is deciding *which* operation to use. Watch for these signal words:

| Signal words | Operation |
|--------------|-----------|
| total, combined, altogether, perimeter, sum | **Add** |
| difference, how much more, how much longer, left over, change | **Subtract** |
| profit (revenue − cost), remaining, decrease | **Subtract** |

> 💡 When in doubt, ask: *"Am I putting quantities together, or finding how far apart two quantities are?"* Together → add. Apart → subtract.`,
      },
      {
        id: 'poly4-app-drill',
        type: 'dropdown-select' as const,
        content: `**Set Up the Right Operation** 🔽

Decide whether each situation calls for adding or subtracting polynomials.`,
        exercise: {
          dropdowns: [
            { label: 'Total length of two boards joined end to end', options: ['Add', 'Subtract'] },
            { label: 'How much taller plant A is than plant B', options: ['Add', 'Subtract'] },
            { label: 'Perimeter of a figure (sum of all sides)', options: ['Add', 'Subtract'] },
            { label: 'Profit, given revenue and cost', options: ['Add', 'Subtract'] },
          ],
          correctAnswers: ['Add', 'Subtract', 'Add', 'Subtract'],
          hint1: 'Words like "total," "combined," and "perimeter" signal addition.',
          hint2: 'Words like "how much more," "difference," and "left over" signal subtraction.',
          hint3: 'Profit is revenue *minus* cost — that is a subtraction.',
          explanation: 'Joining lengths and perimeters are sums (Add). A difference in heights and profit (revenue − cost) are subtractions.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-algebra1',
    sections: [
      {
        id: 'poly5-intro',
        type: 'text' as const,
        content: `# ➕ Adding & Subtracting Polynomials

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name polynomials and spot like terms, (2) add polynomials, (3) subtract by distributing the minus sign, and (4) apply all of this to real problems. Let's put it together.`,
      },
      {
        id: 'poly5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Combine like terms | add/subtract the **coefficients**, keep the variable part |
| Add polynomials | drop parentheses, combine like terms |
| Subtract polynomials | **distribute the minus** to every term, then combine |
| Write the answer | put terms in **standard form** (highest power first) |

> ⚠️ Three things to never forget: (1) like terms need the **same power**; (2) only **coefficients** combine — exponents do **not** change; (3) when subtracting, the minus sign flips **every** term in the second group.`,
      },
      {
        id: 'poly5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Simplify each expression and enter the coefficients of the result, in order from highest power to lowest.

**1)** $(6x^2 - 3x + 4) + (x^2 + 3x - 9)$
&nbsp;&nbsp;Enter the coefficient of $x^2$, then $x$, then the constant.

**2)** $(10x^2 + 7x) - (4x^2 + 7x - 5)$
&nbsp;&nbsp;Enter the coefficient of $x^2$, then $x$, then the constant.`,
        exercise: {
          boxes: 6,
          correctAnswers: ['7', '0', '-5', '6', '0', '5'],
          hint1: 'For #1, add: $6x^2 + x^2 = 7x^2$; $-3x + 3x = 0$; $4 + (-9) = -5$.',
          hint2: 'For #2, distribute the minus: $10x^2 + 7x - 4x^2 - 7x + 5$.',
          hint3: 'For #2: $10x^2 - 4x^2 = 6x^2$; $7x - 7x = 0$; $0 - (-5) = 5$.',
          explanation: '#1: $7x^2 + 0x - 5 = 7x^2 - 5$.  #2: $6x^2 + 0x + 5 = 6x^2 + 5$. The $x$-terms cancel in both, so enter $0$ for those coefficients.',
        },
      },
      {
        id: 'poly5-watch-cancel',
        type: 'text' as const,
        content: `## When Terms Disappear

Did you notice the $x$-terms vanished in both problems above? That is completely normal — whenever like terms have **opposite** coefficients (like $7x$ and $-7x$), they add to $0$ and drop out of the answer.

> 💡 A missing term is *not* a mistake. $7x^2 - 5$ simply has **no** $x$-term — its coefficient is $0$. The next questions include more of these "disappearing term" cases, so stay alert.`,
      },
      {
        id: 'poly5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify: $(3x^2 + 8x - 2) + (5x^2 - 8x + 6)$',
              options: ['$8x^2 + 4$', '$8x^2 + 16x + 4$', '$8x^2 - 4$', '$8x^4 + 4$'],
              correctAnswer: 0,
              explanation: '$3x^2 + 5x^2 = 8x^2$; $8x - 8x = 0$; $-2 + 6 = 4$. Result: $8x^2 + 4$.',
            },
            {
              question: 'Simplify: $(7x^2 + 2x - 5) - (7x^2 - 4x + 1)$',
              options: ['$6x - 6$', '$6x - 4$', '$14x^2 - 2x - 4$', '$-2x - 6$'],
              correctAnswer: 0,
              explanation: 'Distribute: $7x^2 + 2x - 5 - 7x^2 + 4x - 1$. The $x^2$ terms cancel; $2x + 4x = 6x$; $-5 - 1 = -6$. Result: $6x - 6$.',
            },
          ],
        },
      },
      {
        id: 'poly5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which pair are like terms?',
              options: ['$-4x^2$ and $9x^2$', '$5x^2$ and $5x$', '$3x$ and $3$', '$x^3$ and $x^2$'],
              correctAnswer: 0,
              explanation: 'Like terms need the same variable to the same power. Only $-4x^2$ and $9x^2$ share $x^2$; the rest differ in their power.',
            },
            {
              question: 'Add: $(2x^2 + 9x + 4) + (6x^2 - 9x + 1)$',
              options: ['$8x^2 + 5$', '$8x^2 + 18x + 5$', '$8x^2 + 5x$', '$8x^4 + 5$'],
              correctAnswer: 0,
              explanation: '$2x^2 + 6x^2 = 8x^2$; $9x + (-9x) = 0$; $4 + 1 = 5$. Result: $8x^2 + 5$.',
            },
            {
              question: 'Subtract: $(5x^2 + 3x - 7) - (2x^2 + 8x - 7)$',
              options: ['$3x^2 - 5x$', '$3x^2 + 11x$', '$3x^2 - 5x - 14$', '$7x^2 + 11x - 14$'],
              correctAnswer: 0,
              explanation: 'Distribute the minus: $5x^2 + 3x - 7 - 2x^2 - 8x + 7$. Then $5x^2 - 2x^2 = 3x^2$; $3x - 8x = -5x$; $-7 + 7 = 0$. Result: $3x^2 - 5x$.',
            },
          ],
        },
      },
    ],
  },
]
