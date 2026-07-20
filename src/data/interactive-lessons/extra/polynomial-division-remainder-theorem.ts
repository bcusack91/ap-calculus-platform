import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polynomial Division and the Remainder Theorem (AP Precalculus).
 * Registry key / DB Topic.slug: 'polynomial-division-remainder-theorem'.
 * 7 parts, gold-standard structure: long division → synthetic division → Remainder
 * Theorem → Factor Theorem → finding all zeros → applications (rational roots,
 * slant asymptotes) → mixed practice + exit quiz. Teaching alternates with
 * interactive checks (multiple-choice + input-boxes + dropdown). LaTeX uses
 * doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr1-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division & the Remainder Theorem

**Part 1 of 7 — Long Division of Polynomials**

---

### Topics in This Part

| Section |
|---------|
| The Division Algorithm |
| Setting Up Long Division |
| Carrying Out the Steps |
| Handling Missing Terms |

> 🔑 **Key Concept:** Dividing polynomials works just like the long division you learned for whole numbers. Every division produces a **quotient** and a **remainder**, and that single idea unlocks the Remainder Theorem, the Factor Theorem, and how to find a polynomial's zeros.`,
      },
      {
        id: 'pdr1-algorithm',
        type: 'text' as const,
        content: `## The Division Algorithm

When you divide one polynomial $p(x)$ (the **dividend**) by another $d(x)$ (the **divisor**), you get a **quotient** $q(x)$ and a **remainder** $r(x)$ that satisfy:

$$p(x) = d(x)\\cdot q(x) + r(x)$$

where the remainder has **lower degree** than the divisor. With $17 \\div 5$ you write $17 = 5\\cdot 3 + 2$ — quotient $3$, remainder $2$. Polynomials follow the exact same rule:

$$\\underbrace{x^2 + 5x + 6}_{\\text{dividend}} = \\underbrace{(x+2)}_{\\text{divisor}}\\cdot\\underbrace{(x+3)}_{\\text{quotient}} + \\underbrace{0}_{\\text{remainder}}$$

> 💡 If the remainder is $0$, the divisor divides the dividend **evenly** — the divisor is a *factor*. That observation becomes the Factor Theorem in Part 4.`,
      },
      {
        id: 'pdr1-vocab-check',
        type: 'dropdown-select' as const,
        content: `**Vocabulary Check** 🔽

For the statement $2x^3 - 3x^2 + 4x - 5 = (x-2)(2x^2 + x + 6) + 7$, identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The dividend is:', options: ['$2x^3 - 3x^2 + 4x - 5$', '$x - 2$', '$2x^2 + x + 6$', '$7$'] },
            { label: 'The divisor is:', options: ['$x - 2$', '$2x^3 - 3x^2 + 4x - 5$', '$2x^2 + x + 6$', '$7$'] },
            { label: 'The remainder is:', options: ['$7$', '$x - 2$', '$2x^2 + x + 6$', '$0$'] },
          ],
          correctAnswers: ['$2x^3 - 3x^2 + 4x - 5$', '$x - 2$', '$7$'],
          hint1: 'In $p = d\\cdot q + r$, the dividend $p$ is the polynomial you started with — the one being divided.',
          hint2: 'The divisor $d$ is what you divide *by*; here it is the first factor $x-2$.',
          hint3: 'The remainder $r$ is the leftover term that is added on at the end and has degree less than the divisor.',
          explanation: 'Matching $p = d\\cdot q + r$: dividend $= 2x^3-3x^2+4x-5$, divisor $= x-2$, quotient $= 2x^2+x+6$, remainder $= 7$.',
        },
      },
      {
        id: 'pdr1-worked-long',
        type: 'text' as const,
        content: `## Carrying Out Long Division

Let's divide $2x^3 - 3x^2 + 4x - 5$ by $x - 2$ step by step. Each round: **divide** the leading terms, **multiply**, then **subtract**.

**Step 1.** $\\dfrac{2x^3}{x} = 2x^2$. Multiply: $2x^2(x-2) = 2x^3 - 4x^2$. Subtract:
$$(2x^3 - 3x^2) - (2x^3 - 4x^2) = x^2$$

**Step 2.** Bring down $+4x$. Now $\\dfrac{x^2}{x} = x$. Multiply: $x(x-2) = x^2 - 2x$. Subtract:
$$(x^2 + 4x) - (x^2 - 2x) = 6x$$

**Step 3.** Bring down $-5$. Now $\\dfrac{6x}{x} = 6$. Multiply: $6(x-2) = 6x - 12$. Subtract:
$$(6x - 5) - (6x - 12) = 7$$

The remainder is $7$, so:
$$2x^3 - 3x^2 + 4x - 5 = (x-2)(2x^2 + x + 6) + 7$$

> ✅ **Check:** $(x-2)(2x^2+x+6) = 2x^3 + x^2 + 6x - 4x^2 - 2x - 12 = 2x^3 - 3x^2 + 4x - 12$, and $+7$ gives $2x^3 - 3x^2 + 4x - 5$. ✓`,
      },
      {
        id: 'pdr1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When dividing polynomials, the remainder must always have degree:',
              options: ['lower than the divisor', 'equal to the divisor', 'lower than the dividend', 'exactly $0$'],
              correctAnswer: 0,
              explanation: 'Just like $17\\div5$ leaves a remainder smaller than $5$, a polynomial remainder must have degree strictly less than the divisor. (It can be $0$, but it does not *have* to be.)',
            },
            {
              question: 'The first step in dividing $x^2 + 5x + 6$ by $x + 2$ is to compute:',
              options: ['$\\frac{x^2}{x} = x$', '$\\frac{5x}{x} = 5$', '$\\frac{x^2}{2} $', '$\\frac{6}{2} = 3$'],
              correctAnswer: 0,
              explanation: 'Always divide the *leading* term of the current dividend by the *leading* term of the divisor: $x^2 \\div x = x$. That becomes the first term of the quotient.',
            },
          ],
        },
      },
      {
        id: 'pdr1-missing-terms',
        type: 'text' as const,
        content: `## Watch Out: Missing Terms

If the dividend skips a power of $x$, insert a **placeholder** with coefficient $0$ so your columns line up. To divide $x^3 - 7x - 6$ by $x + 1$, write the dividend as $x^3 + 0x^2 - 7x - 6$.

Carrying out the division gives:
$$x^3 - 7x - 6 = (x+1)(x^2 - x - 6) + 0$$

The remainder is $0$, so $x+1$ is a factor — and notice $x^2 - x - 6 = (x-3)(x+2)$.

> ⚠️ **Most common setup error:** forgetting a zero placeholder. Skipping the missing $0x^2$ term shifts every column and corrupts the whole division.`,
      },
      {
        id: 'pdr1-drill',
        type: 'input-boxes' as const,
        content: `**Long Division Drill** 🧮

Carry out each division and report what's asked.

**1)** Divide $x^2 + 5x + 6$ by $x + 2$. Enter the **remainder**.
**2)** Divide $2x^3 - 3x^2 + 4x - 5$ by $x - 2$. Enter the **remainder**.
**3)** Divide $6x^2 + 11x - 35$ by $2x + 7$. Enter the **quotient** (form $ax + b$, e.g. \`3x-5\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '7', '3x-5'],
          hint1: '$x^2+5x+6 = (x+2)(x+3)$, so it divides evenly — remainder $0$.',
          hint2: 'From the worked example, $2x^3-3x^2+4x-5 = (x-2)(2x^2+x+6)+7$, so the remainder is $7$.',
          hint3: '$6x^2+11x-35 = (2x+7)(3x-5)$. Check the leading term: $2x\\cdot 3x = 6x^2$ ✓ and constant $7\\cdot(-5)=-35$ ✓.',
          explanation: '1) remainder $0$.  2) remainder $7$.  3) quotient $3x-5$ with remainder $0$, since $(2x+7)(3x-5)=6x^2+11x-35$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr2-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division & the Remainder Theorem

**Part 2 of 7 — Synthetic Division (the Shortcut)**

---

> 🔑 **The Idea:** When the divisor is **linear and monic** — that is, of the form $x - c$ — you can skip the bulky long division and use a fast number-only process called **synthetic division**.`,
      },
      {
        id: 'pdr2-setup',
        type: 'text' as const,
        content: `## Setting Up Synthetic Division

To divide $p(x)$ by $x - c$:

1. Write $c$ in the box. **Beware the sign:** dividing by $x - 2$ uses $c = 2$; dividing by $x + 3$ uses $c = -3$ (because $x+3 = x-(-3)$).
2. List the **coefficients** of $p(x)$ in order, including $0$ for any missing power.
3. **Bring down** the first coefficient. Then repeatedly: **multiply** by $c$, write the result under the next coefficient, and **add**.

### Worked Example: $(x^3 - 4x^2 + 6x - 4) \\div (x - 2)$

Here $c = 2$ and the coefficients are $1, -4, 6, -4$:

$$
\\begin{array}{c|cccc}
2 & 1 & -4 & 6 & -4 \\\\
  &   & 2  & -4 & 4 \\\\
\\hline
  & 1 & -2 & 2 & \\;\\;0
\\end{array}
$$

The bottom row gives the quotient coefficients $1, -2, 2$ and the final number is the remainder:
$$x^3 - 4x^2 + 6x - 4 = (x-2)(x^2 - 2x + 2) + 0$$

> 💡 The quotient's degree is always **one less** than the dividend's. A cubic divided by a linear term leaves a quadratic quotient.`,
      },
      {
        id: 'pdr2-sign-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To divide by $x + 3$ using synthetic division, the number you place in the box is:',
              options: ['$-3$', '$3$', '$\\frac{1}{3}$', '$0$'],
              correctAnswer: 0,
              explanation: 'Synthetic division uses $c$ from the form $x - c$. Since $x + 3 = x - (-3)$, you use $c = -3$. This sign flip is the #1 synthetic-division mistake.',
            },
            {
              question: 'Synthetic division can be used directly when the divisor is:',
              options: ['$x - c$ (linear, leading coefficient $1$)', 'any quadratic', '$2x - 5$ with no adjustment', 'any polynomial of degree $\\le 2$'],
              correctAnswer: 0,
              explanation: 'Standard synthetic division requires a monic linear divisor $x - c$. Divisors like $2x-5$ need a rescaling step first (covered later); quadratics need long division.',
            },
          ],
        },
      },
      {
        id: 'pdr2-worked2',
        type: 'text' as const,
        content: `## A Second Example with a Negative $c$

Divide $2x^3 + 3x^2 - 8x + 3$ by $x + 3$. Here $c = -3$, coefficients $2, 3, -8, 3$:

$$
\\begin{array}{c|cccc}
-3 & 2 & 3 & -8 & 3 \\\\
   &   & -6 & 9 & -3 \\\\
\\hline
   & 2 & -3 & 1 & \\;\\;0
\\end{array}
$$

Reading the bottom row: quotient $2x^2 - 3x + 1$, remainder $0$.

$$2x^3 + 3x^2 - 8x + 3 = (x+3)(2x^2 - 3x + 1)$$

> ✅ Because the remainder is $0$, $x+3$ is a factor — and $2x^2 - 3x + 1 = (2x-1)(x-1)$, which fully factors the cubic. We'll exploit this in Part 5.`,
      },
      {
        id: 'pdr2-missing-drill',
        type: 'input-boxes' as const,
        content: `**Synthetic Division Drill** 🧮

Use synthetic division (remember $0$ placeholders for missing powers!).

**1)** $(x^3 - 4x^2 + 6x - 4) \\div (x - 2)$. Enter the **remainder**.
**2)** $(2x^3 + 3x^2 - 8x + 3) \\div (x + 3)$. Enter the **constant term** of the quotient.
**3)** $(x^4 - 16) \\div (x - 2)$. Enter the **remainder**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '1', '0'],
          hint1: 'From the first worked example, the bottom row ends in $0$.',
          hint2: 'The quotient was $2x^2 - 3x + 1$; its constant term is $1$.',
          hint3: 'Write $x^4 - 16$ as $1, 0, 0, 0, -16$ with $c=2$. The bottom row is $1, 2, 4, 8, 0$ — remainder $0$, since $x^4-16=(x-2)(x^3+2x^2+4x+8)$.',
          explanation: '1) remainder $0$.  2) quotient $2x^2-3x+1$, constant term $1$.  3) remainder $0$; $x^4-16=(x-2)(x^3+2x^2+4x+8)$.',
        },
      },
      {
        id: 'pdr2-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Process** 🔽

Synthetic-dividing $x^3 - 4x^2 + 6x - 4$ by $x - 2$. Fill in each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Number placed in the box:', options: ['$2$', '$-2$', '$-4$', '$1$'] },
            { label: 'Coefficients listed across the top:', options: ['$1,\\,-4,\\,6,\\,-4$', '$1,\\,4,\\,6,\\,4$', '$-4,\\,6,\\,-4$', '$1,\\,-4,\\,6$'] },
            { label: 'Repeated operation each column:', options: ['multiply by $2$, then add', 'add, then divide by $2$', 'subtract, then multiply', 'square, then add'] },
            { label: 'The last bottom-row number is the:', options: ['remainder', 'quotient', 'divisor', 'leading coefficient'] },
          ],
          correctAnswers: ['$2$', '$1,\\,-4,\\,6,\\,-4$', 'multiply by $2$, then add', 'remainder'],
          hint1: 'Divisor $x-2$ means $c=2$ goes in the box.',
          hint2: 'List every coefficient of $x^3-4x^2+6x-4$ in order: $1, -4, 6, -4$.',
          hint3: 'Each step you multiply the running total by $c$ and add to the next coefficient; the final bottom-row entry is the remainder.',
          explanation: 'Box $= 2$; coefficients $1,-4,6,-4$; multiply-then-add down the columns; the final entry $0$ is the remainder.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr3-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division & the Remainder Theorem

**Part 3 of 7 — The Remainder Theorem**

---

> 🔑 **The Theorem:** When you divide a polynomial $p(x)$ by $x - c$, the **remainder equals $p(c)$**. So you can evaluate a polynomial just by reading off a synthetic-division remainder — no plugging-in required.`,
      },
      {
        id: 'pdr3-statement',
        type: 'text' as const,
        content: `## Why It Works

The Division Algorithm says
$$p(x) = (x - c)\\,q(x) + r,$$
where $r$ is a constant (the divisor $x-c$ is degree $1$, so the remainder has degree $0$).

Now substitute $x = c$:
$$p(c) = (c - c)\\,q(c) + r = 0\\cdot q(c) + r = r.$$

The $(x-c)$ factor vanishes, leaving exactly the remainder. That's the whole proof.

$$\\boxed{\\;p(c) = \\text{remainder when } p(x) \\text{ is divided by } x - c\\;}$$

### Example

Earlier we divided $x^3 - 4x^2 + 6x - 4$ by $x - 2$ and got remainder $0$. The theorem predicts $p(2) = 0$. Check directly:
$$p(2) = 8 - 16 + 12 - 4 = 0 \\;✓$$`,
      },
      {
        id: 'pdr3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The remainder when $p(x)$ is divided by $x - 5$ is $11$. Therefore:',
              options: ['$p(5) = 11$', '$p(11) = 5$', '$p(-5) = 11$', '$p(5) = 0$'],
              correctAnswer: 0,
              explanation: 'The Remainder Theorem says the remainder on division by $x-c$ equals $p(c)$. With $c=5$, the remainder $11$ means $p(5)=11$.',
            },
            {
              question: 'To find $p(-1)$ for $p(x) = 2x^3 - 3x^2 + x - 5$ via the Remainder Theorem, you divide by:',
              options: ['$x + 1$', '$x - 1$', '$x - 5$', '$x - (-5)$'],
              correctAnswer: 0,
              explanation: 'To get $p(c)$ you divide by $x - c$. For $c = -1$, that divisor is $x - (-1) = x + 1$.',
            },
          ],
        },
      },
      {
        id: 'pdr3-synthetic-eval',
        type: 'text' as const,
        content: `## Synthetic Substitution

Combining synthetic division with the Remainder Theorem gives a slick way to evaluate $p(c)$. To find $p(-1)$ for $p(x) = 2x^3 - 3x^2 + x - 5$, synthetic-divide by $x + 1$ (so $c = -1$):

$$
\\begin{array}{c|cccc}
-1 & 2 & -3 & 1 & -5 \\\\
   &   & -2 & 5 & -6 \\\\
\\hline
   & 2 & -5 & 6 & -11
\\end{array}
$$

The remainder is $-11$, so $p(-1) = -11$.

> ✅ **Direct check:** $p(-1) = 2(-1)^3 - 3(-1)^2 + (-1) - 5 = -2 - 3 - 1 - 5 = -11$ ✓

This "synthetic substitution" is often faster than plugging in, especially for high-degree polynomials.`,
      },
      {
        id: 'pdr3-drill',
        type: 'input-boxes' as const,
        content: `**Remainder Theorem Drill** 🧮

Use the Remainder Theorem (synthetic substitution or direct evaluation).

**1)** $p(x) = x^3 - 4x^2 + 6x - 4$. Find the remainder when divided by $x - 2$, i.e. $p(2)$.
**2)** $p(x) = 2x^3 - 3x^2 + x - 5$. Find $p(-1)$.
**3)** $p(x) = x^4 - 3x^2 + 2x - 7$. Find $p(3)$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '-11', '53'],
          hint1: '$p(2) = 8 - 16 + 12 - 4$.',
          hint2: '$p(-1) = -2 - 3 - 1 - 5$.',
          hint3: '$p(3) = 81 - 27 + 6 - 7 = 81 - 27 - 1 = 53$. (Remember $x^4$ term has no $x^3$, so include a $0$.)',
          explanation: '1) $p(2)=0$.  2) $p(-1)=-11$.  3) $p(3)=81-3(9)+6-7 = 81-27+6-7 = 53$.',
        },
      },
      {
        id: 'pdr3-table-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Remainders** 🔽

A polynomial $p(x)$ gives these remainders. Use the Remainder Theorem.

| Divide by | Remainder |
|-----------|-----------|
| $x - 1$ | $0$ |
| $x - 4$ | $9$ |
| $x + 2$ | $-3$ |`,
        exercise: {
          dropdowns: [
            { label: '$p(1) = $', options: ['$0$', '$1$', '$9$', '$-3$'] },
            { label: '$p(4) = $', options: ['$9$', '$4$', '$0$', '$-9$'] },
            { label: '$p(-2) = $', options: ['$-3$', '$2$', '$3$', '$-2$'] },
          ],
          correctAnswers: ['$0$', '$9$', '$-3$'],
          hint1: 'Dividing by $x-1$ gives the remainder $p(1)$; the table says that remainder is $0$.',
          hint2: 'Dividing by $x-4$ gives $p(4)$ — read straight from the table.',
          hint3: 'Dividing by $x+2 = x-(-2)$ gives $p(-2)$, the remainder $-3$.',
          explanation: 'Each remainder *is* $p(c)$: $p(1)=0$, $p(4)=9$, $p(-2)=-3$. Note $p(1)=0$ already hints that $x-1$ is a factor — the Factor Theorem, next.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr4-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division & the Remainder Theorem

**Part 4 of 7 — The Factor Theorem**

---

> 🔑 **The Theorem:** $x - c$ is a **factor** of $p(x)$ **if and only if** $p(c) = 0$. A zero remainder and a factor are the same thing said two ways.`,
      },
      {
        id: 'pdr4-statement',
        type: 'text' as const,
        content: `## From Remainder to Factor

The Factor Theorem is just the Remainder Theorem with remainder $= 0$:

$$p(c) = 0 \\;\\Longleftrightarrow\\; \\text{remainder} = 0 \\;\\Longleftrightarrow\\; (x - c) \\text{ divides } p(x) \\text{ evenly}.$$

This links three ideas that AP Precalculus treats as interchangeable:

| Statement | Equivalent to |
|-----------|---------------|
| $p(c) = 0$ | $c$ is a **zero** (root) of $p$ |
| $(x - c)$ is a **factor** | division leaves remainder $0$ |
| $(c, 0)$ is an **$x$-intercept** | the graph crosses at $x = c$ |

> 💡 So "find the zeros," "factor the polynomial," and "find the $x$-intercepts" are three phrasings of the *same* task.`,
      },
      {
        id: 'pdr4-test-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $p(3) = 0$, which statement must be true?',
              options: ['$(x - 3)$ is a factor of $p(x)$', '$(x + 3)$ is a factor of $p(x)$', 'The remainder on dividing by $x-3$ is $3$', '$p$ has no other zeros'],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, $p(c)=0$ exactly when $(x-c)$ is a factor. Here $c=3$, so $(x-3)$ is a factor. Nothing is implied about other zeros.',
            },
            {
              question: 'For $p(x) = x^3 - 7x + 6$, you compute $p(1)=0$, $p(2)=0$, and $p(-3)=0$. The complete factorization is:',
              options: ['$(x-1)(x-2)(x+3)$', '$(x+1)(x+2)(x-3)$', '$(x-1)(x-2)(x-3)$', '$(x-1)(x+2)(x+3)$'],
              correctAnswer: 0,
              explanation: 'Each zero $c$ gives a factor $(x-c)$: zeros $1, 2, -3$ give $(x-1)(x-2)(x+3)$. Expanding confirms $x^3 - 7x + 6$.',
            },
          ],
        },
      },
      {
        id: 'pdr4-worked',
        type: 'text' as const,
        content: `## Using It to Test Candidates

**Is $x - 1$ a factor of $p(x) = x^3 - 7x + 6$?** Test $p(1)$:
$$p(1) = 1 - 7 + 6 = 0 \\;✓$$
Yes — so $(x-1)$ is a factor. Synthetic-dividing by $x - 1$ peels it off:

$$
\\begin{array}{c|cccc}
1 & 1 & 0 & -7 & 6 \\\\
  &   & 1 & 1 & -6 \\\\
\\hline
  & 1 & 1 & -6 & \\;\\;0
\\end{array}
$$

So $p(x) = (x-1)(x^2 + x - 6) = (x-1)(x+3)(x-2)$, since $x^2 + x - 6 = (x+3)(x-2)$.

> ⚠️ **Sign trap:** A *factor* $(x - c)$ corresponds to a *zero* $x = +c$. The factor $(x+3)$ comes from the zero $x = -3$, not $x = +3$.`,
      },
      {
        id: 'pdr4-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Factor ↔ Zero** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'If $(x - 4)$ is a factor, a zero is:', options: ['$x = 4$', '$x = -4$', '$x = \\frac{1}{4}$', '$x = 0$'] },
            { label: 'If $x = -5$ is a zero, a factor is:', options: ['$(x + 5)$', '$(x - 5)$', '$(5x)$', '$(x + \\frac{1}{5})$'] },
            { label: '$p(2) = 0$ means division by $x-2$ has remainder:', options: ['$0$', '$2$', '$-2$', 'unknown'] },
          ],
          correctAnswers: ['$x = 4$', '$(x + 5)$', '$0$'],
          hint1: 'Factor $(x - c)$ ↔ zero $x = c$. Here $c = 4$.',
          hint2: 'Zero $x = c$ ↔ factor $(x - c)$. For $c = -5$ that is $(x - (-5)) = (x+5)$.',
          hint3: 'By the Factor/Remainder Theorems, $p(c)=0$ means the remainder on dividing by $x-c$ is $0$.',
          explanation: 'Factor $(x-4)$ ↔ zero $4$; zero $-5$ ↔ factor $(x+5)$; and $p(2)=0$ forces remainder $0$ on division by $x-2$.',
        },
      },
      {
        id: 'pdr4-drill',
        type: 'input-boxes' as const,
        content: `**Factor Theorem Drill** 🧮

For $p(x) = x^3 - 7x + 6$, evaluate to test each candidate. Enter the value.

**1)** $p(1) = \\,?$  (Is $x-1$ a factor?)
**2)** $p(-3) = \\,?$  (Is $x+3$ a factor?)
**3)** $p(0) = \\,?$  (Is $x$ a factor?)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '0', '6'],
          hint1: '$p(1) = 1 - 7 + 6$.',
          hint2: '$p(-3) = (-3)^3 - 7(-3) + 6 = -27 + 21 + 6$.',
          hint3: '$p(0) = 0 - 0 + 6 = 6$. A nonzero value means $x$ is NOT a factor.',
          explanation: '1) $p(1)=0$ → $x-1$ is a factor.  2) $p(-3)=-27+21+6=0$ → $x+3$ is a factor.  3) $p(0)=6 \\ne 0$ → $x$ is NOT a factor.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr5-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division & the Remainder Theorem

**Part 5 of 7 — Finding All the Zeros**

---

> 🔑 **The Strategy:** Find one zero, **divide it out**, and repeat on the smaller quotient until you reach a quadratic you can factor or solve. This "depress-and-conquer" loop finds every real zero of a polynomial.`,
      },
      {
        id: 'pdr5-strategy',
        type: 'text' as const,
        content: `## The Depress-and-Conquer Loop

To find all zeros of a polynomial $p(x)$:

1. **Find one zero** $c$ — test small integers ($\\pm 1, \\pm 2, \\dots$) until $p(c) = 0$.
2. **Divide** $p(x)$ by $(x - c)$ using synthetic division. The quotient has degree one lower.
3. **Repeat** on the quotient. Once it's a quadratic, factor it or use the quadratic formula.

### Example: $p(x) = x^3 - 4x^2 + x + 6$

Test $x = -1$: $\\;p(-1) = -1 - 4 - 1 + 6 = 0$ ✓. Divide by $x + 1$:

$$
\\begin{array}{c|cccc}
-1 & 1 & -4 & 1 & 6 \\\\
   &   & -1 & 5 & -6 \\\\
\\hline
   & 1 & -5 & 6 & \\;\\;0
\\end{array}
$$

So $p(x) = (x+1)(x^2 - 5x + 6) = (x+1)(x-2)(x-3)$.

**The zeros are $x = -1,\\; 2,\\; 3$.**`,
      },
      {
        id: 'pdr5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After dividing a cubic $p(x)$ by a known factor $(x - c)$, the quotient is $x^2 - 5x + 6$. The remaining zeros are:',
              options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = 5$ and $x = 6$', '$x = 1$ and $x = 6$'],
              correctAnswer: 0,
              explanation: '$x^2 - 5x + 6 = (x-2)(x-3)$, so its zeros are $2$ and $3$. Setting each factor to $0$ gives the roots.',
            },
            {
              question: 'A degree-$4$ polynomial can have at most how many real zeros?',
              options: ['$4$', '$3$', '$5$', '$8$'],
              correctAnswer: 0,
              explanation: 'A polynomial of degree $n$ has at most $n$ real zeros (counting multiplicity), because each zero contributes a distinct linear factor. Degree $4$ → at most $4$.',
            },
          ],
        },
      },
      {
        id: 'pdr5-worked2',
        type: 'text' as const,
        content: `## A Cubic with a Fractional Zero

Find all zeros of $p(x) = 2x^3 + x^2 - 13x + 6$.

Test $x = 2$: $\\;p(2) = 16 + 4 - 26 + 6 = 0$ ✓. Divide by $x - 2$:

$$
\\begin{array}{c|cccc}
2 & 2 & 1 & -13 & 6 \\\\
  &   & 4 & 10 & -6 \\\\
\\hline
  & 2 & 5 & -3 & \\;\\;0
\\end{array}
$$

The quotient is $2x^2 + 5x - 3 = (2x - 1)(x + 3)$. Setting each factor to $0$:
$$2x - 1 = 0 \\Rightarrow x = \\tfrac{1}{2}, \\qquad x + 3 = 0 \\Rightarrow x = -3.$$

**The zeros are $x = 2,\\; \\tfrac{1}{2},\\; -3$.**

> 💡 Not every zero is an integer. The factor $(2x - 1)$ produces the fractional zero $x = \\tfrac{1}{2}$ — Part 6's Rational Root Theorem tells you exactly which fractions to test.`,
      },
      {
        id: 'pdr5-zeros-dropdown',
        type: 'dropdown-select' as const,
        content: `**From Factors to Zeros** 🔽

A polynomial fully factors as $p(x) = (x + 1)(x - 2)(2x - 1)$.`,
        exercise: {
          dropdowns: [
            { label: 'Zero from $(x + 1)$:', options: ['$x = -1$', '$x = 1$', '$x = 0$', '$x = -2$'] },
            { label: 'Zero from $(x - 2)$:', options: ['$x = 2$', '$x = -2$', '$x = \\frac{1}{2}$', '$x = 0$'] },
            { label: 'Zero from $(2x - 1)$:', options: ['$x = \\frac{1}{2}$', '$x = 2$', '$x = -\\frac{1}{2}$', '$x = 1$'] },
          ],
          correctAnswers: ['$x = -1$', '$x = 2$', '$x = \\frac{1}{2}$'],
          hint1: 'Set $x + 1 = 0$, so $x = -1$.',
          hint2: 'Set $x - 2 = 0$, so $x = 2$.',
          hint3: 'Set $2x - 1 = 0$, so $2x = 1$ and $x = \\frac{1}{2}$.',
          explanation: 'Each factor gives a zero by setting it equal to $0$: $(x+1)\\to -1$, $(x-2)\\to 2$, $(2x-1)\\to \\frac{1}{2}$.',
        },
      },
      {
        id: 'pdr5-drill',
        type: 'input-boxes' as const,
        content: `**Find the Zeros Drill** 🧮

**1)** $p(x) = x^3 - 4x^2 + x + 6$ factors as $(x+1)(x-2)(x-3)$. Enter the **smallest** zero.
**2)** Same polynomial: enter the **largest** zero.
**3)** $p(x) = 2x^3 + x^2 - 13x + 6$ has a zero at $x = \\tfrac{1}{2}$ from the factor $(2x-1)$. Enter that zero as a fraction (e.g. \`1/2\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '3', '1/2'],
          hint1: 'The zeros of $(x+1)(x-2)(x-3)$ are $-1, 2, 3$; the smallest is $-1$.',
          hint2: 'Of $-1, 2, 3$, the largest is $3$.',
          hint3: 'Set $2x - 1 = 0$: $x = \\frac{1}{2}$.',
          explanation: '1) zeros $-1, 2, 3$ → smallest $-1$.  2) largest $3$.  3) $(2x-1)=0 \\Rightarrow x=\\frac{1}{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr6-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division & the Remainder Theorem

**Part 6 of 7 — Rational Roots & Slant Asymptotes**

---

> 🔑 **Two payoffs:** The **Rational Root Theorem** narrows your zero hunt to a short list of fractions, and polynomial division reveals the **slant (oblique) asymptote** of a rational function.`,
      },
      {
        id: 'pdr6-rrt',
        type: 'text' as const,
        content: `## The Rational Root Theorem

If a polynomial with integer coefficients
$$p(x) = a_n x^n + \\cdots + a_0$$
has a rational zero $\\dfrac{p}{q}$ (in lowest terms), then:

- $p$ (the numerator) divides the **constant term** $a_0$, and
- $q$ (the denominator) divides the **leading coefficient** $a_n$.

So every possible rational zero looks like $\\pm\\dfrac{\\text{factor of } a_0}{\\text{factor of } a_n}$.

### Example: $p(x) = 2x^3 + 3x^2 - 8x + 3$

- Factors of constant $a_0 = 3$: $\\;\\pm 1, \\pm 3$
- Factors of leading $a_n = 2$: $\\;\\pm 1, \\pm 2$
- Candidates $\\dfrac{p}{q}$: $\\;\\pm 1,\\; \\pm 3,\\; \\pm\\dfrac{1}{2},\\; \\pm\\dfrac{3}{2}$

Testing finds the actual zeros $x = 1,\\; \\tfrac{1}{2},\\; -3$ (matching Part 2's factorization $(x+3)(2x-1)(x-1)$).

> 💡 The theorem doesn't say a rational zero *exists* — it just gives you the **only fractions worth testing** before reaching for the quadratic formula or technology.`,
      },
      {
        id: 'pdr6-rrt-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $p(x) = 3x^3 + 2x - 4$, which is NOT a candidate rational zero?',
              options: ['$\\frac{2}{4}$', '$\\frac{4}{3}$', '$2$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Candidates are $\\frac{\\text{factor of }4}{\\text{factor of }3}$. The numerator must divide $4$ and the denominator must divide $3$. $\\frac{2}{4}=\\frac{1}{2}$ has denominator $2$, which does NOT divide the leading coefficient $3$ — so it is not a candidate. The others are all valid.',
            },
            {
              question: 'The Rational Root Theorem guarantees that a polynomial:',
              options: ['has these as the only possible *rational* zeros', 'definitely has a rational zero', 'has no irrational zeros', 'has exactly $n$ rational zeros'],
              correctAnswer: 0,
              explanation: 'It only limits *which* rationals could be zeros. A polynomial might have only irrational or complex zeros — the theorem just rules out every rational outside the candidate list.',
            },
          ],
        },
      },
      {
        id: 'pdr6-rrt-drill',
        type: 'input-boxes' as const,
        content: `**Rational Root Drill** 🧮

For $p(x) = 2x^3 + 3x^2 - 8x + 3$ (constant $3$, leading coefficient $2$):

**1)** How many factors does the constant $3$ have (positive only: count $1$ and $3$)?
**2)** Test $x = 1$: enter $p(1)$.
**3)** Test $x = -3$: enter $p(-3)$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '0', '0'],
          hint1: 'The positive factors of $3$ are $1$ and $3$ — that is $2$ of them.',
          hint2: '$p(1) = 2 + 3 - 8 + 3 = 0$.',
          hint3: '$p(-3) = 2(-27) + 3(9) - 8(-3) + 3 = -54 + 27 + 24 + 3 = 0$.',
          explanation: '1) constant $3$ has positive factors $1, 3$ → $2$.  2) $p(1)=0$, so $x-1$ is a factor.  3) $p(-3)=-54+27+24+3=0$, so $x+3$ is a factor.',
        },
      },
      {
        id: 'pdr6-slant',
        type: 'text' as const,
        content: `## Slant Asymptotes from Division

When a rational function $\\dfrac{N(x)}{D(x)}$ has numerator degree **exactly one more** than the denominator, its graph approaches a **slant (oblique) line** asymptote. Division finds it: the **quotient is the asymptote**, and the remainder term vanishes as $x \\to \\pm\\infty$.

### Example: $f(x) = \\dfrac{x^2 + 3x + 5}{x + 1}$

Divide $x^2 + 3x + 5$ by $x + 1$ (synthetic, $c = -1$): quotient $x + 2$, remainder $3$. So
$$f(x) = x + 2 + \\frac{3}{x + 1}.$$

As $x \\to \\pm\\infty$, the fraction $\\dfrac{3}{x+1} \\to 0$, so the graph hugs the line $y = x + 2$.

> ✅ **Slant asymptote:** $y = x + 2$. The remainder $3$ only controls *how* the curve approaches the line, not the line itself.`,
      },
      {
        id: 'pdr6-slant-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Slant Asymptote** 🔽

Each rational function is rewritten as quotient $+ \\dfrac{\\text{remainder}}{\\text{divisor}}$. Pick the slant asymptote.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x^2+3x+5}{x+1} = x+2+\\dfrac{3}{x+1}$; asymptote:', options: ['$y = x + 2$', '$y = x + 1$', '$y = 3$', '$y = x + 5$'] },
            { label: '$\\dfrac{2x^2 - x + 1}{x - 1} = 2x + 1 + \\dfrac{2}{x-1}$; asymptote:', options: ['$y = 2x + 1$', '$y = 2x - 1$', '$y = x - 1$', '$y = 2$'] },
            { label: 'A slant asymptote exists when numerator degree is:', options: ['exactly $1$ more than denominator', 'equal to denominator', 'less than denominator', '$2$ more than denominator'] },
          ],
          correctAnswers: ['$y = x + 2$', '$y = 2x + 1$', 'exactly $1$ more than denominator'],
          hint1: 'The slant asymptote IS the quotient: $x+2$.',
          hint2: 'Quotient $2x + 1$ is the asymptote; the $\\frac{2}{x-1}$ term dies off.',
          hint3: 'Slant asymptotes appear precisely when the numerator is one degree higher than the denominator.',
          explanation: 'The polynomial quotient is the slant asymptote ($y=x+2$ and $y=2x+1$), and it occurs when $\\deg(N) = \\deg(D) + 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr7-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division & the Remainder Theorem

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) divide polynomials long-hand and synthetically, (2) apply the Remainder Theorem, (3) apply the Factor Theorem, (4) find every zero, and (5) read off rational-root candidates and slant asymptotes. Let's put it all together.`,
      },
      {
        id: 'pdr7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Divide by $x - c$ fast | synthetic division with $c$ |
| Evaluate $p(c)$ | remainder on division by $x-c$ (Remainder Thm) |
| Test if $(x-c)$ is a factor | check whether $p(c) = 0$ (Factor Thm) |
| Factor $(x-c)$ ↔ zero | factor $(x-c)$ ⇔ zero $x = c$ |
| List rational-zero candidates | $\\pm\\dfrac{\\text{factor of }a_0}{\\text{factor of }a_n}$ |
| Find a slant asymptote | the polynomial quotient |

> ⚠️ **Three habits that prevent most errors:** use $0$ placeholders for missing powers, flip the sign of $c$ (divisor $x+3 \\Rightarrow c=-3$), and remember a factor $(x-c)$ matches the zero $x = +c$.`,
      },
      {
        id: 'pdr7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The remainder when $p(x) = x^3 + 2x^2 - 5x - 6$ is divided by $x - 2$ is:',
              options: ['$0$', '$6$', '$-6$', '$12$'],
              correctAnswer: 0,
              explanation: 'By the Remainder Theorem the remainder is $p(2) = 8 + 8 - 10 - 6 = 0$. So $x-2$ is also a factor.',
            },
            {
              question: 'Which is a valid rational-zero candidate for $p(x) = 4x^3 - x + 6$?',
              options: ['$\\frac{3}{2}$', '$\\frac{6}{5}$', '$\\frac{1}{8}$', '$5$'],
              correctAnswer: 0,
              explanation: 'Candidates are $\\frac{\\text{factor of }6}{\\text{factor of }4}$. Numerator must divide $6$ and denominator must divide $4$. $\\frac{3}{2}$ qualifies ($3\\mid 6$, $2\\mid 4$). $\\frac{6}{5}$ fails ($5\\nmid 4$), $\\frac{1}{8}$ fails ($8\\nmid 4$), and $5\\nmid 6$.',
            },
          ],
        },
      },
      {
        id: 'pdr7-synthesis-drill',
        type: 'input-boxes' as const,
        content: `**Synthesis Drill** 🧮

$p(x) = x^3 - 6x^2 + 11x - 6$.

**1)** Compute $p(1)$.  (Is $x - 1$ a factor?)
**2)** Dividing by $x - 1$ gives quotient $x^2 - 5x + 6$. Enter its **larger** zero.
**3)** Compute $p(3)$ to confirm $x = 3$ is a zero.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '3', '0'],
          hint1: '$p(1) = 1 - 6 + 11 - 6 = 0$, so $x-1$ is a factor.',
          hint2: '$x^2 - 5x + 6 = (x-2)(x-3)$; zeros are $2$ and $3$, larger is $3$.',
          hint3: '$p(3) = 27 - 54 + 33 - 6 = 0$, confirming $x=3$ is a zero. (Full factorization: $(x-1)(x-2)(x-3)$.)',
          explanation: '1) $p(1)=0$.  2) quotient $(x-2)(x-3)$ → larger zero $3$.  3) $p(3)=0$. The polynomial is $(x-1)(x-2)(x-3)$ with zeros $1, 2, 3$.',
        },
      },
      {
        id: 'pdr7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'By the Remainder Theorem, the remainder when $p(x)$ is divided by $x + 4$ equals:',
              options: ['$p(-4)$', '$p(4)$', '$p(0)$', '$\\frac{p(4)}{4}$'],
              correctAnswer: 0,
              explanation: 'The remainder on division by $x - c$ is $p(c)$. Since $x + 4 = x - (-4)$, we have $c = -4$, so the remainder is $p(-4)$.',
            },
            {
              question: 'For $p(x) = x^3 - 2x^2 - 5x + 6$, which factor is confirmed by evaluating $p$?',
              options: ['$(x - 1)$, since $p(1) = 0$', '$(x + 1)$, since $p(-1) = 0$', '$(x - 2)$, since $p(2) = 0$', '$(x + 6)$, since $p(-6) = 0$'],
              correctAnswer: 0,
              explanation: '$p(1) = 1 - 2 - 5 + 6 = 0$, so by the Factor Theorem $(x-1)$ is a factor. Checking $p(-1) = -1 - 2 + 5 + 6 = 8 \\ne 0$, so $(x+1)$ is not.',
            },
            {
              question: 'A rational function $f(x) = \\dfrac{N(x)}{D(x)}$ is rewritten by division as $f(x) = 3x - 1 + \\dfrac{5}{x-2}$. Its slant asymptote is:',
              options: ['$y = 3x - 1$', '$y = x - 2$', '$y = 5$', '$y = 3x - 1 + 5$'],
              correctAnswer: 0,
              explanation: 'The polynomial quotient is the slant asymptote: $y = 3x - 1$. As $x \\to \\pm\\infty$, the remainder term $\\frac{5}{x-2} \\to 0$, so the graph approaches that line.',
            },
          ],
        },
      },
    ],
  },
]
