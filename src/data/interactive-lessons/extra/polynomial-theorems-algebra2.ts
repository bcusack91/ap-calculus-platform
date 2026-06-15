import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polynomial Theorems and Roots (Algebra 2).
 * Registry key / DB Topic.slug: 'polynomial-theorems-algebra2'.
 * 5 parts, gold-standard structure mirrored from the completing-the-square pilot:
 * teach → worked examples → interactive practice (multiple-choice + input-boxes +
 * dropdown) → exit quiz. LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-theorems-algebra2',
    sections: [
      {
        id: 'pt1-intro',
        type: 'text' as const,
        content: `# 🌳 Polynomial Theorems and Roots

**Part 1 of 5 — Roots, Factors, and Zeros**

---

### Topics in This Part

| Section |
|---------|
| What Counts as a Polynomial |
| The Roots–Factors–Intercepts Connection |
| Counting Roots by Degree |

> 🔑 **Key Concept:** A "root" (or **zero**) of a polynomial is a value of $x$ that makes it equal $0$. Every theorem in this lesson is just a faster way to **find** those roots. Part 1 builds the vocabulary the theorems rely on.`,
      },
      {
        id: 'pt1-define',
        type: 'text' as const,
        content: `## What Counts as a Polynomial?

A **polynomial** in $x$ is a sum of terms of the form $a x^n$, where every exponent $n$ is a **whole number** ($0, 1, 2, 3, \\dots$):

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$

- The **degree** is the highest exponent, $n$.
- The **leading coefficient** is $a_n$ (the number on the highest-power term).
- The **constant term** is $a_0$ (the term with no $x$).

### Polynomial or Not?

| Expression | Polynomial? | Why |
|------------|-------------|-----|
| $3x^4 - x + 7$ | ✅ Yes | whole-number exponents |
| $5x^2 - \\sqrt{x}$ | ❌ No | $\\sqrt{x} = x^{1/2}$ (not whole) |
| $\\dfrac{2}{x} + 1$ | ❌ No | $\\dfrac{2}{x} = 2x^{-1}$ (negative exponent) |
| $-x^3 + 4$ | ✅ Yes | degree $3$, leading coefficient $-1$ |

> 💡 **Why degree matters:** A polynomial of degree $n$ can have **at most $n$ roots**. That single fact controls how many solutions you go looking for.`,
      },
      {
        id: 'pt1-classify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the degree and leading coefficient of $P(x) = 4 - 7x + 2x^5 - x^3$?',
              options: ['Degree $5$, leading coefficient $2$', 'Degree $5$, leading coefficient $4$', 'Degree $3$, leading coefficient $-1$', 'Degree $2$, leading coefficient $2$'],
              correctAnswer: 0,
              explanation: 'Reorder by power: $2x^5 - x^3 - 7x + 4$. The highest power is $5$, so the degree is $5$ and its coefficient $2$ is the leading coefficient. The order the terms are written in does not change the degree.',
            },
            {
              question: 'Which of these is NOT a polynomial?',
              options: ['$x^3 - 2x^2 + 1$', '$6x^{10} - 5$', '$4x^2 + \\frac{3}{x} - 1$', '$-9$'],
              correctAnswer: 2,
              explanation: '$\\frac{3}{x} = 3x^{-1}$ has a negative exponent, so $4x^2 + \\frac{3}{x} - 1$ is not a polynomial. (A lone constant like $-9$ IS a polynomial — degree $0$.)',
            },
          ],
        },
      },
      {
        id: 'pt1-connection',
        type: 'text' as const,
        content: `## The Roots–Factors–Intercepts Connection

These three ideas are **the same fact wearing three hats**:

$$\\underbrace{P(c) = 0}_{c \\text{ is a root}} \\;\\Longleftrightarrow\\; \\underbrace{(x - c) \\text{ is a factor}}_{\\text{divides evenly}} \\;\\Longleftrightarrow\\; \\underbrace{(c, 0) \\text{ is an } x\\text{-intercept}}_{\\text{on the graph}}$$

### Reading It Off a Factored Polynomial

For $P(x) = (x - 2)(x + 3)(x - 5)$:

| Factor | Set factor $= 0$ | Root | $x$-intercept |
|--------|------------------|------|---------------|
| $x - 2$ | $x - 2 = 0$ | $x = 2$ | $(2, 0)$ |
| $x + 3$ | $x + 3 = 0$ | $x = -3$ | $(-3, 0)$ |
| $x - 5$ | $x - 5 = 0$ | $x = 5$ | $(5, 0)$ |

> ⚠️ **Watch the sign.** The factor $(x + 3)$ gives the root $x = -3$, **not** $+3$. A factor $(x - c)$ produces the root $x = c$, so flip the sign you see inside the parentheses.`,
      },
      {
        id: 'pt1-roots-drill',
        type: 'input-boxes' as const,
        content: `**Read the Roots** 🧮

Find the roots of each factored polynomial. Enter them from **smallest to largest**.

**1)** $P(x) = (x - 4)(x + 1)$ → roots $= \\,?$ and $\\,?$
**2)** $P(x) = (x + 6)(x - 2)(x)$ → roots $= \\,?$, $\\,?$, and $\\,?$`,
        exercise: {
          boxes: 5,
          correctAnswers: ['-1', '4', '-6', '0', '2'],
          hint1: 'Set each factor equal to $0$ and solve. $(x - 4) = 0$ gives $x = 4$; $(x + 1) = 0$ gives $x = -1$.',
          hint2: 'The lone factor $x$ counts as $(x - 0)$, so it contributes the root $x = 0$.',
          hint3: 'For #2 the three roots are $-6$, $0$, and $2$. Listed smallest to largest: $-6, 0, 2$.',
          explanation: '1) $x = 4$ and $x = -1$; smallest-first $\\to -1, 4$.  2) $(x+6)=0\\Rightarrow x=-6$, $(x-2)=0\\Rightarrow x=2$, and $x=0$; smallest-first $\\to -6, 0, 2$.',
        },
      },
      {
        id: 'pt1-count',
        type: 'text' as const,
        content: `## Counting Roots by Degree

A degree-$n$ polynomial has **at most $n$ real roots** — equivalently, its graph crosses or touches the $x$-axis at most $n$ times.

| Degree | Name | Max real roots |
|--------|------|----------------|
| $1$ | linear | $1$ |
| $2$ | quadratic | $2$ |
| $3$ | cubic | $3$ |
| $4$ | quartic | $4$ |

A degree-$3$ polynomial might have $3$, $2$, or even $1$ real root — but **never** $4$. This ceiling tells you when you're **done** hunting for roots.

> 🔑 **Big picture:** The rest of this lesson is a toolkit for actually finding those roots — the **Remainder Theorem** (Part 2), the **Factor Theorem** (Part 2), the **Rational Root Theorem** (Part 3), and the **Fundamental Theorem of Algebra** (Part 4).`,
      },
      {
        id: 'pt1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Vocabulary & Degree** 🔽

Pin down the language before the theorems arrive.`,
        exercise: {
          dropdowns: [
            { label: 'A "zero" of $P(x)$ is a value of $x$ that makes $P(x)$ equal:', options: ['$0$', '$1$', 'the degree', 'the leading coefficient'] },
            { label: 'The factor $(x - 7)$ corresponds to the root:', options: ['$x = 7$', '$x = -7$', '$x = \\frac{1}{7}$', '$x = 0$'] },
            { label: 'A degree-$4$ polynomial has AT MOST how many real roots?', options: ['$4$', '$2$', '$3$', '$5$'] },
          ],
          correctAnswers: ['$0$', '$x = 7$', '$4$'],
          hint1: 'A zero (root) is exactly where the polynomial evaluates to $0$.',
          hint2: 'A factor $(x - c)$ gives the root $x = c$; here $c = 7$.',
          hint3: 'The degree caps the number of real roots, so degree $4$ allows at most $4$.',
          explanation: 'A zero makes $P(x) = 0$; the factor $(x - 7)$ gives root $x = 7$; and a degree-$n$ polynomial has at most $n$ real roots, so at most $4$ here.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polynomial-theorems-algebra2',
    sections: [
      {
        id: 'pt2-intro',
        type: 'text' as const,
        content: `# 🌳 Polynomial Theorems and Roots

**Part 2 of 5 — The Remainder & Factor Theorems**

---

> 🔑 **The Idea:** You don't have to do long division to find the remainder when you divide by $(x - c)$. Just **plug in $c$**. And if that remainder is $0$, you've found a root *and* a factor at the same time.`,
      },
      {
        id: 'pt2-remainder',
        type: 'text' as const,
        content: `## The Remainder Theorem

> **Remainder Theorem:** When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$.

So to find the remainder, you **evaluate** instead of dividing.

### Worked Example: divide $P(x) = 2x^3 - 3x^2 + 4x - 5$ by $(x - 2)$

Substitute $x = 2$:

$$P(2) = 2(2)^3 - 3(2)^2 + 4(2) - 5$$
$$= 2(8) - 3(4) + 8 - 5 = 16 - 12 + 8 - 5 = 7$$

So the remainder is $\\boxed{7}$ — no long division required.

> 💡 **Why it works:** Division writes $P(x) = (x - c)\\,Q(x) + R$. Setting $x = c$ kills the $(x - c)$ part, leaving $P(c) = R$.`,
      },
      {
        id: 'pt2-rem-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using the Remainder Theorem, the remainder when $P(x) = x^3 - 2x^2 + 3x - 4$ is divided by $(x - 2)$ is:',
              options: ['$2$', '$0$', '$-4$', '$14$'],
              correctAnswer: 0,
              explanation: '$P(2) = 8 - 2(4) + 3(2) - 4 = 8 - 8 + 6 - 4 = 2$. The remainder is $2$.',
            },
            {
              question: 'To find the remainder when $P(x)$ is divided by $(x + 5)$, what should you evaluate?',
              options: ['$P(-5)$', '$P(5)$', '$P(0)$', '$P(\\tfrac{1}{5})$'],
              correctAnswer: 0,
              explanation: '$(x + 5) = (x - (-5))$, so $c = -5$ and the remainder is $P(-5)$. Match the divisor to the form $(x - c)$ and read off $c$.',
            },
          ],
        },
      },
      {
        id: 'pt2-rem-tip',
        type: 'text' as const,
        content: `## A Tidy Way to Evaluate

When the numbers get large, **substitute carefully one power at a time** — or use *synthetic substitution* (the same row of arithmetic as synthetic division). Either way, the answer you get *is* the remainder.

> 💡 **Spot the shortcut:** if you only need the remainder, never set up long division. One substitution does it. And if that single number turns out to be $0$, you've just discovered a factor for free.`,
      },
      {
        id: 'pt2-rem-drill',
        type: 'input-boxes' as const,
        content: `**Find the Remainder** 🧮

Use the Remainder Theorem (evaluate — don't divide).

**1)** Remainder of $\\dfrac{x^3 + 4x^2 - 7x + 2}{x - 1}$ $= \\,?$
**2)** Remainder of $\\dfrac{2x^4 - x^3 + 3x - 1}{x + 1}$ $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '-1'],
          hint1: 'For #1, divisor $(x - 1)$ means $c = 1$. Compute $P(1)$.',
          hint2: '$P(1) = 1 + 4 - 7 + 2 = 0$.',
          hint3: 'For #2, divisor $(x + 1)$ means $c = -1$. $P(-1) = 2(1) - (-1) + 3(-1) - 1 = 2 + 1 - 3 - 1 = -1$.',
          explanation: '1) $P(1) = 1 + 4 - 7 + 2 = 0$.  2) $P(-1) = 2(1) - (-1) + 3(-1) - 1 = -1$. A remainder of $0$ (problem 1) means $(x-1)$ is a factor!',
        },
      },
      {
        id: 'pt2-factor',
        type: 'text' as const,
        content: `## The Factor Theorem

The Factor Theorem is the special case where the remainder is **zero**:

> **Factor Theorem:** $(x - c)$ is a factor of $P(x)$ **if and only if** $P(c) = 0$.

In other words: *factor* $\\Longleftrightarrow$ *zero remainder* $\\Longleftrightarrow$ *root*.

### Worked Example: Is $(x + 2)$ a factor of $P(x) = x^3 + 3x^2 - 4$?

Here $(x + 2) = (x - (-2))$, so test $c = -2$:

$$P(-2) = (-2)^3 + 3(-2)^2 - 4 = -8 + 12 - 4 = 0$$

Since $P(-2) = 0$, **yes** — $(x + 2)$ is a factor, and $x = -2$ is a root. ✓

> ⚠️ **Don't confuse the two theorems.** The **Remainder Theorem** gives you *any* remainder. The **Factor Theorem** only fires when that remainder is exactly $0$.`,
      },
      {
        id: 'pt2-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Factor or Not?** 🔽

For each, decide whether the given binomial is a factor by checking the right value.`,
        exercise: {
          dropdowns: [
            { label: 'Is $(x - 3)$ a factor of $P(x) = x^3 - 4x^2 + x + 6$? Test:', options: ['$P(3)$', '$P(-3)$', '$P(0)$'] },
            { label: 'You compute that value and get:', options: ['$0$', '$6$', '$-12$'] },
            { label: 'Therefore $(x - 3)$ is:', options: ['a factor', 'not a factor'] },
          ],
          correctAnswers: ['$P(3)$', '$0$', 'a factor'],
          hint1: 'Match $(x - 3)$ to $(x - c)$: here $c = 3$, so test $P(3)$.',
          hint2: '$P(3) = 27 - 4(9) + 3 + 6 = 27 - 36 + 3 + 6 = 0$.',
          hint3: 'A remainder of $0$ means, by the Factor Theorem, that $(x - 3)$ IS a factor.',
          explanation: '$P(3) = 27 - 36 + 3 + 6 = 0$, so by the Factor Theorem $(x - 3)$ is a factor of $P(x)$ and $x = 3$ is a root.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-theorems-algebra2',
    sections: [
      {
        id: 'pt3-intro',
        type: 'text' as const,
        content: `# 🌳 Polynomial Theorems and Roots

**Part 3 of 5 — The Rational Root Theorem**

---

> 🔑 **Why it's powerful:** The Factor Theorem tells you how to *test* a candidate root, but not *which* numbers to try. The **Rational Root Theorem** hands you the complete shortlist of possible rational roots — so you test a few numbers instead of infinitely many.`,
      },
      {
        id: 'pt3-rrt',
        type: 'text' as const,
        content: `## The Rational Root Theorem

> **Rational Root Theorem:** If a polynomial with integer coefficients has a rational root $\\dfrac{p}{q}$ (in lowest terms), then $p$ divides the **constant term** and $q$ divides the **leading coefficient**.

So every possible rational root has the form:

$$\\frac{p}{q} = \\frac{\\text{factor of constant term}}{\\text{factor of leading coefficient}}$$

### Building the Candidate List for $P(x) = 2x^3 + x^2 - 13x + 6$

- Constant term $= 6$ → factors $p$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$
- Leading coefficient $= 2$ → factors $q$: $\\pm 1, \\pm 2$

All candidates $\\dfrac{p}{q}$:

$$\\pm 1,\\; \\pm 2,\\; \\pm 3,\\; \\pm 6,\\; \\pm \\tfrac{1}{2},\\; \\pm \\tfrac{3}{2}$$

> 💡 The theorem doesn't promise a rational root **exists** — it only says that *if* one does, it's on this list. You still have to test them (use the Factor Theorem: plug in and look for $0$).`,
      },
      {
        id: 'pt3-candidate-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $P(x) = x^3 + 2x^2 - 5x - 6$, which list contains ALL possible rational roots?',
              options: ['$\\pm 1, \\pm 2, \\pm 3, \\pm 6$', '$\\pm 1, \\pm 2, \\pm 3$', '$\\pm 1, \\pm 6$', '$\\pm 2, \\pm 3, \\pm \\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Leading coefficient is $1$, so $q = \\pm 1$ and every candidate is a whole-number factor of the constant $6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.',
            },
            {
              question: 'Which number could NOT possibly be a rational root of $P(x) = 3x^3 - 4x^2 - 17x + 6$?',
              options: ['$\\frac{1}{5}$', '$\\frac{2}{3}$', '$2$', '$-3$'],
              correctAnswer: 0,
              explanation: 'Denominators must divide the leading coefficient $3$ (so $q \\in \\{1, 3\\}$). A denominator of $5$ is impossible, so $\\frac{1}{5}$ is not a candidate. The others all have valid $p/q$ forms.',
            },
          ],
        },
      },
      {
        id: 'pt3-worked',
        type: 'text' as const,
        content: `## Finding a Root, Then Factoring

Once you find one root with the candidate list, **divide it out** (synthetic or long division) to shrink the polynomial, then finish factoring.

### Worked Example: solve $P(x) = 2x^3 + x^2 - 13x + 6 = 0$

**Step 1 — Test candidates.** Try $x = 2$:
$$P(2) = 2(8) + 4 - 26 + 6 = 16 + 4 - 26 + 6 = 0 \\;\\checkmark$$
So $(x - 2)$ is a factor.

**Step 2 — Divide it out.** Dividing $2x^3 + x^2 - 13x + 6$ by $(x - 2)$ gives the quotient $2x^2 + 5x - 3$:
$$P(x) = (x - 2)(2x^2 + 5x - 3)$$

**Step 3 — Factor the quadratic.** $2x^2 + 5x - 3 = (2x - 1)(x + 3)$:
$$P(x) = (x - 2)(2x - 1)(x + 3)$$

**Step 4 — Read off the roots:** $x = 2,\\; x = \\tfrac{1}{2},\\; x = -3$. ✓

> ⚠️ Notice $x = \\tfrac{1}{2}$ comes from the factor $(2x - 1)$: set $2x - 1 = 0 \\Rightarrow x = \\tfrac{1}{2}$. Non-integer roots show up exactly because the leading coefficient wasn't $1$.`,
      },
      {
        id: 'pt3-find-root',
        type: 'input-boxes' as const,
        content: `**Test the Candidates** 🧮

Use the Rational Root Theorem + Factor Theorem to find an actual root.

**1)** A candidate for $P(x) = x^3 - 6x^2 + 11x - 6$ is $x = 1$. Compute $P(1) = \\,?$
**2)** The three roots of $P(x) = x^3 - 6x^2 + 11x - 6$ are $1$, $2$, and what third value? Root $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '3'],
          hint1: '$P(1) = 1 - 6 + 11 - 6$. Add carefully.',
          hint2: '$P(1) = 1 - 6 + 11 - 6 = 0$, so $x = 1$ is a root and $(x - 1)$ is a factor.',
          hint3: 'The candidates are $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Test $x = 3$: $27 - 54 + 33 - 6 = 0$. The roots are $1, 2, 3$.',
          explanation: '1) $P(1) = 1 - 6 + 11 - 6 = 0$.  2) $P(x) = (x-1)(x-2)(x-3)$, so the third root is $x = 3$. (Check: the roots $1+2+3 = 6$ match $-(-6)/1$, and $1\\cdot 2\\cdot 3 = 6$ matches the constant.)',
        },
      },
      {
        id: 'pt3-strategy-text',
        type: 'text' as const,
        content: `## Putting the Workflow Together

Every "find all the roots" problem follows the same four-beat rhythm:

| Beat | Tool | Result |
|------|------|--------|
| List candidates | Rational Root Theorem | shortlist of $\\frac{p}{q}$ |
| Test to find one root | Factor Theorem ($P(c)=0$) | one confirmed root |
| Divide it out | synthetic / long division | a smaller (lower-degree) polynomial |
| Solve what's left | factor or quadratic formula | the remaining roots |

> ⚠️ Don't skip straight to dividing. You need a *confirmed* root first, or there's nothing valid to divide by.`,
      },
      {
        id: 'pt3-strategy-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Strategy** 🔽

You want to find all roots of a cubic with integer coefficients. Put the steps in order.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1:', options: ['List candidate roots $\\frac{p}{q}$', 'Divide by $(x - c)$', 'Factor the quadratic'] },
            { label: 'Step 2:', options: ['Test candidates until $P(c) = 0$', 'Guess randomly', 'Take a square root'] },
            { label: 'Step 3:', options: ['Divide out $(x - c)$ to get a quadratic', 'Stop — you are done', 'Square both sides'] },
            { label: 'Step 4:', options: ['Solve the leftover quadratic', 'List candidates again', 'Differentiate'] },
          ],
          correctAnswers: ['List candidate roots $\\frac{p}{q}$', 'Test candidates until $P(c) = 0$', 'Divide out $(x - c)$ to get a quadratic', 'Solve the leftover quadratic'],
          hint1: 'Start by using the Rational Root Theorem to build the candidate list.',
          hint2: 'Then use the Factor Theorem to find one real root by testing candidates.',
          hint3: 'Once you have a root, divide it out to drop the degree from $3$ to $2$, then factor or use the quadratic formula on what remains.',
          explanation: 'The standard workflow: (1) list $\\frac{p}{q}$ candidates, (2) test to find one root, (3) divide out that factor to get a quadratic, (4) solve the quadratic for the remaining roots.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-theorems-algebra2',
    sections: [
      {
        id: 'pt4-intro',
        type: 'text' as const,
        content: `# 🌳 Polynomial Theorems and Roots

**Part 4 of 5 — Fundamental Theorem, Multiplicity & Complex Roots**

---

> 🔑 **The Guarantee:** The Fundamental Theorem of Algebra promises that a degree-$n$ polynomial has *exactly* $n$ roots — as long as you count complex roots and repeated roots correctly. This is what tells you when your hunt is complete.`,
      },
      {
        id: 'pt4-fta',
        type: 'text' as const,
        content: `## The Fundamental Theorem of Algebra

> **Fundamental Theorem of Algebra:** A polynomial of degree $n \\ge 1$ has **exactly $n$ roots** in the complex numbers, *counted with multiplicity*.

Two ideas make the count come out exactly right:

**1. Multiplicity** — a repeated factor counts as many times as it appears.
$$P(x) = (x - 1)^2(x + 2)$$
Degree $3$. Roots: $x = 1$ (multiplicity $2$) and $x = -2$ (multiplicity $1$). That's $2 + 1 = 3$ roots. ✓

**2. Complex roots fill the gap.** If a polynomial has fewer *real* roots than its degree, the missing ones are **complex** (involve $i = \\sqrt{-1}$).

| $P(x)$ | Degree | Real roots | Complex roots |
|--------|--------|-----------|---------------|
| $x^2 - 4$ | $2$ | $2, -2$ | none |
| $x^2 + 4$ | $2$ | none | $2i, -2i$ |
| $(x-1)^2(x+2)$ | $3$ | $1, 1, -2$ | none |

> 💡 **Multiplicity and the graph:** an **odd** multiplicity means the graph *crosses* the $x$-axis at that root; an **even** multiplicity means it just *touches* and turns around (a bounce).`,
      },
      {
        id: 'pt4-mult-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many roots (counted with multiplicity) does $P(x) = (x - 3)^2(x + 1)^3$ have?',
              options: ['$5$', '$2$', '$3$', '$6$'],
              correctAnswer: 0,
              explanation: 'Multiplicities add: $2 + 3 = 5$. This matches the degree, which is $2 + 3 = 5$. ✓',
            },
            {
              question: 'At a root with multiplicity $2$, the graph of the polynomial:',
              options: ['touches the $x$-axis and turns around (bounces)', 'crosses straight through the $x$-axis', 'has a vertical asymptote', 'never reaches the $x$-axis'],
              correctAnswer: 0,
              explanation: 'Even multiplicity (like $2$) makes the graph touch and bounce off the axis. Odd multiplicity makes it cross through.',
            },
          ],
        },
      },
      {
        id: 'pt4-conjugate',
        type: 'text' as const,
        content: `## The Complex Conjugate Root Theorem

> **Conjugate Root Theorem:** If a polynomial has **real** coefficients and $a + bi$ is a root, then its conjugate $a - bi$ is **also** a root.

Complex roots always travel in **pairs**. So a real-coefficient polynomial always has an **even** number of complex roots.

### Worked Example: a cubic with root $2 + i$

If $P(x)$ has real coefficients and one root is $2 + i$, then $2 - i$ must also be a root. With one more real root, say $x = 3$, the polynomial is:

$$P(x) = (x - 3)\\big(x - (2 + i)\\big)\\big(x - (2 - i)\\big)$$

The conjugate pair multiplies to a **real** quadratic:
$$\\big(x - (2+i)\\big)\\big(x - (2-i)\\big) = (x - 2)^2 - i^2 = x^2 - 4x + 4 + 1 = x^2 - 4x + 5$$

$$P(x) = (x - 3)(x^2 - 4x + 5) = x^3 - 7x^2 + 17x - 15$$

> ⚠️ The conjugate rule needs **real** coefficients. If the polynomial has complex coefficients, roots need not come in conjugate pairs.`,
      },
      {
        id: 'pt4-conj-drill',
        type: 'input-boxes' as const,
        content: `**Complex Roots Come in Pairs** 🧮

**1)** A polynomial with real coefficients has a root $5 - 2i$. Its conjugate root has real part $\\,?$ and imaginary part $\\,?$ (enter the coefficient of $i$, including its sign). So the conjugate is $5 + \\,?\\,i$ → enter the two answers: real part, then the $i$-coefficient.
**2)** A degree-$4$ polynomial with real coefficients has exactly $2$ real roots. How many complex (non-real) roots must it have? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '2', '2'],
          hint1: 'The conjugate of $a + bi$ flips the sign of the imaginary part only: $\\overline{5 - 2i} = 5 + 2i$.',
          hint2: 'So the conjugate has real part $5$ and $i$-coefficient $+2$.',
          hint3: 'For #2: total roots $= $ degree $= 4$. With $2$ real roots, $4 - 2 = 2$ must be complex (one conjugate pair).',
          explanation: '1) $\\overline{5 - 2i} = 5 + 2i$ → real part $5$, $i$-coefficient $+2$.  2) Degree $4$ means $4$ roots total; $4 - 2 = 2$ complex roots (a single conjugate pair).',
        },
      },
      {
        id: 'pt4-build',
        type: 'text' as const,
        content: `## Building a Polynomial From Its Roots

Run the Factor Theorem **in reverse**: each root $c$ becomes a factor $(x - c)$, then multiply out.

### Worked Example: a polynomial with roots $2, -3,$ and $1$

$$P(x) = (x - 2)(x + 3)(x - 1)$$

Multiply the first two: $(x - 2)(x + 3) = x^2 + x - 6$. Then times $(x - 1)$:

$$P(x) = (x^2 + x - 6)(x - 1) = x^3 - 7x + 6$$

> 💡 **Quick checks** for $x^3 + bx^2 + cx + d$ with roots $r_1, r_2, r_3$:
> - Sum of roots $= -b$. Here $2 + (-3) + 1 = 0 = -b$, so $b = 0$ ✓ (no $x^2$ term).
> - Product of roots $= -d$. Here $2 \\cdot (-3) \\cdot 1 = -6 = -d$, so $d = 6$ ✓.`,
      },
      {
        id: 'pt4-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Roots ⇄ Factors** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'A root of $x = -4$ gives the factor:', options: ['$(x + 4)$', '$(x - 4)$', '$(4x)$', '$(x + 1/4)$'] },
            { label: 'A polynomial with roots $0$ and $5$ could be:', options: ['$x(x - 5)$', '$(x - 5)$', '$x(x + 5)$', '$(x - 0)(x - 5i)$'] },
            { label: 'If $3i$ is a root (real coefficients), another root must be:', options: ['$-3i$', '$3$', '$-3$', '$\\frac{1}{3}i$'] },
          ],
          correctAnswers: ['$(x + 4)$', '$x(x - 5)$', '$-3i$'],
          hint1: 'Root $c$ gives factor $(x - c)$. For $c = -4$, that is $(x - (-4)) = (x + 4)$.',
          hint2: 'Root $0$ gives factor $(x - 0) = x$; root $5$ gives $(x - 5)$. Multiply: $x(x - 5)$.',
          hint3: 'By the Conjugate Root Theorem, $3i = 0 + 3i$ pairs with $0 - 3i = -3i$.',
          explanation: 'Root $\\to$ factor reverses the sign: $-4 \\to (x+4)$. Roots $0, 5 \\to x(x-5)$. And $3i$ forces its conjugate $-3i$ when coefficients are real.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-theorems-algebra2',
    sections: [
      {
        id: 'pt5-intro',
        type: 'text' as const,
        content: `# 🌳 Polynomial Theorems and Roots

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You now have the full toolkit: the **Remainder** and **Factor** Theorems to test values, the **Rational Root Theorem** to build candidate lists, and the **Fundamental Theorem of Algebra** (with multiplicity and conjugate pairs) to know when you're done. Let's put it together.`,
      },
      {
        id: 'pt5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Theorem | What it says | Use it to… |
|---------|--------------|-----------|
| Remainder Theorem | remainder of $P(x) \\div (x - c)$ is $P(c)$ | find a remainder by evaluating |
| Factor Theorem | $(x - c)$ is a factor $\\Leftrightarrow P(c) = 0$ | confirm a root / factor |
| Rational Root Theorem | rational roots are $\\frac{p}{q} = \\frac{\\text{factor of const}}{\\text{factor of lead}}$ | list candidates to test |
| Fundamental Thm. of Algebra | degree $n \\Rightarrow$ exactly $n$ roots (w/ multiplicity) | know how many roots to expect |
| Conjugate Root Theorem | real coeffs: $a+bi$ root $\\Rightarrow a-bi$ root | pair up complex roots |

> ⚠️ **Remember:** match the divisor to $(x - c)$ before reading off $c$ (so $(x + 5)$ means $c = -5$); count multiplicity *and* complex roots when checking you've found them all.`,
      },
      {
        id: 'pt5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The remainder when $P(x) = x^3 - 4x^2 + x + 6$ is divided by $(x + 1)$ is:',
              options: ['$0$', '$2$', '$-6$', '$10$'],
              correctAnswer: 0,
              explanation: '$(x + 1)$ means $c = -1$: $P(-1) = -1 - 4 - 1 + 6 = 0$. The remainder is $0$, so $(x + 1)$ is a factor and $x = -1$ is a root.',
            },
            {
              question: 'A degree-$4$ polynomial with real coefficients has roots $2$, $2$, and $1 + i$. What is its fourth root?',
              options: ['$1 - i$', '$-2$', '$1 + i$', '$2$'],
              correctAnswer: 0,
              explanation: 'Complex roots come in conjugate pairs, so $1 + i$ forces $1 - i$. That gives four roots ($2, 2, 1+i, 1-i$) — matching degree $4$.',
            },
          ],
        },
      },
      {
        id: 'pt5-vieta',
        type: 'text' as const,
        content: `## A Fast Self-Check: Sum & Product of Roots

For a monic cubic $x^3 + bx^2 + cx + d$ with roots $r_1, r_2, r_3$:

$$r_1 + r_2 + r_3 = -b \\qquad\\text{and}\\qquad r_1 \\cdot r_2 \\cdot r_3 = -d$$

These let you **sanity-check** your roots without fully multiplying out — or even back out a missing coefficient.

> 💡 Found roots $1, 2, 3$ for a cubic? Their sum is $6$, so you expect $b = -6$, and their product is $6$, so you expect $d = -6$. If your expanded polynomial disagrees, recheck a root.`,
      },
      {
        id: 'pt5-build-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

**1)** Write the cubic with roots $-1$, $2$, $4$ in expanded form $x^3 + bx^2 + cx + d$. Using "sum of roots $= -b$," find $b = \\,?$
**2)** For that same cubic, "product of roots $= -d$," so find $d = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-5', '8'],
          hint1: 'Sum of roots $= -1 + 2 + 4 = 5$. Since sum $= -b$, solve $-b = 5$.',
          hint2: '$-b = 5 \\Rightarrow b = -5$.',
          hint3: 'Product of roots $= (-1)(2)(4) = -8$. Since product $= -d$, $-d = -8 \\Rightarrow d = 8$.',
          explanation: '$P(x) = (x+1)(x-2)(x-4) = x^3 - 5x^2 + 2x + 8$. Sum $-1+2+4 = 5 = -b \\Rightarrow b = -5$. Product $(-1)(2)(4) = -8 = -d \\Rightarrow d = 8$. ✓',
        },
      },
      {
        id: 'pt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which value, if it makes $P(c) = 0$, tells you $(x - c)$ is a factor of $P(x)$?',
              options: ['Any $c$ with $P(c) = 0$ — that is the Factor Theorem', 'Only $c = 0$', 'Only positive $c$', 'Only the leading coefficient'],
              correctAnswer: 0,
              explanation: 'The Factor Theorem: $(x - c)$ is a factor exactly when $P(c) = 0$, for any value $c$. A zero of the polynomial is a root and a factor at once.',
            },
            {
              question: 'For $P(x) = 4x^3 - 2x + 9$, which is a possible rational root by the Rational Root Theorem?',
              options: ['$\\frac{3}{4}$', '$\\frac{1}{5}$', '$\\frac{2}{3}$', '$7$'],
              correctAnswer: 0,
              explanation: 'Constant $9$ → $p \\in \\{1,3,9\\}$; leading $4$ → $q \\in \\{1,2,4\\}$. So $\\frac{3}{4}$ is a valid candidate. $\\frac{1}{5}$ (bad $q$), $\\frac{2}{3}$ (bad $q$ and $p$), and $7$ (not a factor of $9$) are all impossible.',
            },
            {
              question: 'A polynomial of degree $5$ with real coefficients has exactly $1$ real root. How many complex (non-real) roots does it have?',
              options: ['$4$', '$5$', '$2$', '$0$'],
              correctAnswer: 0,
              explanation: 'By the Fundamental Theorem of Algebra there are $5$ roots total. With $1$ real root, $5 - 1 = 4$ are complex — and $4$ is even, as required by the conjugate pair rule (two pairs).',
            },
          ],
        },
      },
    ],
  },
]
