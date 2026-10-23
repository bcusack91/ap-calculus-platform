import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polynomial Division and Equivalent Forms (AP Precalculus, CED 1.11).
 * Registry key / DB Topic.slug: 'polynomial-division-remainder-theorem' (slug kept for links).
 * 5 parts: long division + equivalent forms (f = gq + r, f/g = q + r/g) → Factor Theorem
 * (CED 1.5.A) → finding all zeros from a known factor → rewriting rational functions and
 * slant asymptotes (with limit notation, one figure) → mixed practice + exit quiz.
 * Scope rule ("not on the exam = not in the program"): CED 1.11.B names polynomial long
 * division only, so synthetic division is a one-line optional mention and the Remainder
 * Theorem is not drilled by name. Teaching alternates with interactive checks
 * (multiple-choice + input-boxes + dropdown). LaTeX uses doubled backslashes.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr1-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division and Equivalent Forms

**Part 1 of 5 — Long Division and Equivalent Forms**

---

### Topics in This Part

| Section |
|---------|
| The Division Algorithm and Two Equivalent Forms |
| Setting Up Long Division |
| Carrying Out the Steps |
| Handling Missing Terms |

> 🔑 **Key Concept:** Dividing polynomials works just like the long division you learned for whole numbers. Every division produces a **quotient** and a **remainder**, and writing the result as $p(x) = d(x)\\,q(x) + r(x)$ gives an **equivalent form** of the original polynomial. That single idea unlocks the Factor Theorem (Part 2), finding a polynomial's zeros (Part 3), and the end behavior of rational functions (Part 4).`,
      },
      {
        id: 'pdr1-algorithm',
        type: 'text' as const,
        content: `## The Division Algorithm

When you divide one polynomial $p(x)$ (the **dividend**) by another $d(x)$ (the **divisor**), you get a **quotient** $q(x)$ and a **remainder** $r(x)$ that satisfy:

$$p(x) = d(x)\\cdot q(x) + r(x), \\qquad \\deg r < \\deg d$$

where the remainder has **lower degree** than the divisor. With $17 \\div 5$ you write $17 = 5\\cdot 3 + 2$ — quotient $3$, remainder $2$. Polynomials follow the exact same rule:

$$\\underbrace{x^2 + 5x + 6}_{\\text{dividend}} = \\underbrace{(x+2)}_{\\text{divisor}}\\cdot\\underbrace{(x+3)}_{\\text{quotient}} + \\underbrace{0}_{\\text{remainder}}$$

### Two Equivalent Forms

Dividing both sides by $d(x)$ (wherever $d(x) \\neq 0$) gives a second way to write the same fact:

$$\\frac{p(x)}{d(x)} = q(x) + \\frac{r(x)}{d(x)}$$

The product form $p = dq + r$ and the fraction form $\\dfrac{p}{d} = q + \\dfrac{r}{d}$ are **equivalent forms** of one division — the AP exam asks for both.

> 💡 If the remainder is $0$, the divisor divides the dividend **evenly** — the divisor is a *factor*. That observation becomes the Factor Theorem in Part 2.`,
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

and, in fraction form, for $x \\neq 2$:
$$\\frac{2x^3 - 3x^2 + 4x - 5}{x - 2} = 2x^2 + x + 6 + \\frac{7}{x - 2}$$

> ✅ **Check:** $(x-2)(2x^2+x+6) = 2x^3 + x^2 + 6x - 4x^2 - 2x - 12 = 2x^3 - 3x^2 + 4x - 12$, and $+7$ gives $2x^3 - 3x^2 + 4x - 5$. ✓ Multiplying back is the fastest way to **justify** a division.`,
      },
      {
        id: 'pdr1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When dividing polynomials, the remainder must always have degree:',
              options: ['strictly lower than the divisor', 'equal to the divisor', 'lower than the dividend', 'exactly $0$'],
              correctAnswer: 0,
              explanation: 'Just like $17\\div5$ leaves a remainder smaller than $5$, a polynomial remainder must have degree strictly less than the divisor. (It can be $0$, but it does not *have* to be.)',
            },
            {
              question: 'The first step in dividing $x^2 + 5x + 6$ by $x + 2$ is to compute:',
              options: ['$\\frac{x^2}{x} = x$', '$\\frac{5x}{x} = 5$', '$\\frac{x^2}{2} $', '$\\frac{6}{2} = 3$'],
              correctAnswer: 0,
              explanation: 'Always divide the *leading* term of the current dividend by the *leading* term of the divisor: $x^2 \\div x = x$. That becomes the first term of the quotient.',
            },
            {
              question: 'Which is an equivalent form of $\\dfrac{x^2 + 7x + 2}{x + 3}$ for $x \\neq -3$?',
              options: ['$x + 4 + \\dfrac{2}{x + 3}$', '$x + 3 - \\dfrac{7}{x + 3}$', '$x + 4 - \\dfrac{10}{x + 3}$', '$x + 4 - \\dfrac{5}{x + 3}$'],
              correctAnswer: 2,
              explanation: 'Long division: $x^2 \\div x = x$, and $(x + 3)(x + 4) = x^2 + 7x + 12$, so the remainder is $2 - 12 = -10$. Check: $(x + 3)(x + 4) - 10 = x^2 + 7x + 2$. Keeping the original constant $2$ as the remainder skips the subtraction, a quotient of $x + 3$ copies the divisor instead of dividing $4x$ by $x$ in the second step, and $-5$ subtracts $7 - 12$ instead of $2 - 12$.',
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

> ⚠️ **Most common setup error:** forgetting a zero placeholder. Skipping the missing $0x^2$ term shifts every column and corrupts the whole division.

> 💡 When the divisor is $x - c$, a shortcut layout called **synthetic division** produces the same quotient and remainder; it is optional.`,
      },
      {
        id: 'pdr1-drill',
        type: 'input-boxes' as const,
        content: `**Long Division Drill** 🧮

Carry out each division and report what's asked.

**1)** Divide $x^2 + 5x + 6$ by $x + 2$. Enter the **remainder**.
**2)** Divide $2x^3 - 3x^2 + 4x - 5$ by $x - 2$. Enter the **remainder**.
**3)** Divide $6x^2 + 11x - 35$ by $2x + 7$. The quotient has the form $ax + b$. Enter $a$.
**4)** For the same division, enter $b$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['0', '7', '3', '-5'],
          hint1: '$x^2+5x+6 = (x+2)(x+3)$, so it divides evenly — remainder $0$.',
          hint2: 'From the worked example, $2x^3-3x^2+4x-5 = (x-2)(2x^2+x+6)+7$, so the remainder is $7$.',
          hint3: '$6x^2 \\div 2x = 3x$, so $a = 3$. Subtract $3x(2x+7) = 6x^2 + 21x$ to leave $-10x - 35$; then $-10x \\div 2x = -5$, so $b = -5$. Check: $(2x+7)(3x-5) = 6x^2+11x-35$ ✓.',
          explanation: '1) remainder $0$.  2) remainder $7$.  3) and 4) quotient $3x-5$ ($a = 3$, $b = -5$) with remainder $0$, since $(2x+7)(3x-5)=6x^2+11x-35$.',
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
        content: `# ➗ Polynomial Division and Equivalent Forms

**Part 2 of 5 — The Factor Theorem**

---

> 🔑 **The Theorem:** $x - c$ is a **factor** of $p(x)$ **if and only if** $p(c) = 0$. A zero remainder and a factor are the same thing said two ways.`,
      },
      {
        id: 'pdr2-statement',
        type: 'text' as const,
        content: `## Why It Works

Divide $p(x)$ by $x - c$. The divisor has degree $1$, so the remainder is a constant $r$:
$$p(x) = (x - c)\\,q(x) + r.$$

Now substitute $x = c$. The factor $(x - c)$ becomes $0$, so
$$p(c) = 0\\cdot q(c) + r = r.$$

Therefore $p(c) = 0$ exactly when the remainder is $0$, which is exactly when $(x - c)$ divides $p(x)$ evenly:

$$p(c) = 0 \\;\\Longleftrightarrow\\; \\text{remainder} = 0 \\;\\Longleftrightarrow\\; (x - c) \\text{ is a factor of } p(x).$$

This links three ideas that AP Precalculus treats as interchangeable:

| Statement | Equivalent to |
|-----------|---------------|
| $p(c) = 0$ | $c$ is a **zero** (root) of $p$ |
| $(x - c)$ is a **factor** | division leaves remainder $0$ |
| $(c, 0)$ is an **$x$-intercept** | the graph meets the $x$-axis at $x = c$ (it crosses at an odd-multiplicity zero and touches without crossing at an even one) |

> 💡 So "find the zeros," "factor the polynomial," and "find the $x$-intercepts" are three phrasings of the *same* task — and evaluating $p(c)$ is how you **justify** that $(x - c)$ is a factor.`,
      },
      {
        id: 'pdr2-test-check',
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
        id: 'pdr2-worked',
        type: 'text' as const,
        content: `## Using It to Confirm a Zero You Are Given

**A graph of $p(x) = x^3 - 7x + 6$ appears to cross the $x$-axis at $x = 1$. Is $x - 1$ a factor?** Check $p(1)$:
$$p(1) = 1 - 7 + 6 = 0 \\;✓$$
Yes — so $(x-1)$ is a factor. Long division by $x - 1$ peels it off (write the dividend as $x^3 + 0x^2 - 7x + 6$):

- $x^3 \\div x = x^2$; subtract $x^2(x - 1) = x^3 - x^2$ to leave $x^2 - 7x$.
- $x^2 \\div x = x$; subtract $x(x - 1) = x^2 - x$ to leave $-6x + 6$.
- $-6x \\div x = -6$; subtract $-6(x - 1) = -6x + 6$ to leave $0$.

So $p(x) = (x-1)(x^2 + x - 6) = (x-1)(x+3)(x-2)$, since $x^2 + x - 6 = (x+3)(x-2)$.

> ⚠️ **Sign trap:** A *factor* $(x - c)$ corresponds to a *zero* $x = +c$. The factor $(x+3)$ comes from the zero $x = -3$, not $x = +3$.`,
      },
      {
        id: 'pdr2-factor-dropdown',
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
          hint3: 'By the Factor Theorem, $p(c)=0$ means the remainder on dividing by $x-c$ is $0$.',
          explanation: 'Factor $(x-4)$ ↔ zero $4$; zero $-5$ ↔ factor $(x+5)$; and $p(2)=0$ forces remainder $0$ on division by $x-2$.',
        },
      },
      {
        id: 'pdr2-drill',
        type: 'input-boxes' as const,
        content: `**Factor Theorem Drill** 🧮

A graph of $p(x) = x^3 - 7x + 6$ shows three $x$-intercepts, at $x = -3$, $x = 1$, and $x = 2$. Evaluate $p$ to confirm two of them, then check the $y$-intercept.

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

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr3-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division and Equivalent Forms

**Part 3 of 5 — Finding All the Zeros from a Known Factor**

---

> 🔑 **The Strategy:** Start from a zero you are **given** (by a graph, a table, a known factor, or the problem statement), **divide it out**, and repeat on the smaller quotient until you reach a quadratic you can factor or solve.`,
      },
      {
        id: 'pdr3-strategy',
        type: 'text' as const,
        content: `## The Depress-and-Conquer Loop

To find all zeros of a polynomial $p(x)$:

1. **Get one zero** $c$ — from a graph, a table, a given factor, or a value the problem gives you. Confirm it with $p(c) = 0$.
2. **Divide** $p(x)$ by $(x - c)$ using polynomial long division (synthetic division is an optional shortcut). The quotient has degree one lower.
3. **Repeat** on the quotient. Once it's a quadratic, factor it or use the quadratic formula.

### Example: $p(x) = x^3 - 4x^2 + x + 6$

A table of values shows $p(-1) = 0$. Confirm: $\\;p(-1) = -1 - 4 - 1 + 6 = 0$ ✓. Long division by $x + 1$:

- $x^3 \\div x = x^2$; subtract $x^2(x + 1) = x^3 + x^2$ to leave $-5x^2 + x$.
- $-5x^2 \\div x = -5x$; subtract $-5x(x + 1) = -5x^2 - 5x$ to leave $6x + 6$.
- $6x \\div x = 6$; subtract $6(x + 1) = 6x + 6$ to leave $0$.

The same quotient and remainder appear in the optional synthetic layout:

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
        id: 'pdr3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After dividing a cubic $p(x)$ by a known factor $(x - c)$, the quotient is $x^2 - 5x + 6$. The remaining zeros are:',
              options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = -5$ and $x = 6$', '$x = -1$ and $x = 6$'],
              correctAnswer: 0,
              explanation: '$x^2 - 5x + 6 = (x-2)(x-3)$, so its zeros are $2$ and $3$. Setting each factor to $0$ gives the roots.',
            },
            {
              question: 'A degree-$4$ polynomial can have at most how many real zeros?',
              options: ['$4$', '$3$', '$5$', '$8$'],
              correctAnswer: 0,
              explanation: 'A polynomial of degree $n$ has at most $n$ real zeros (counting multiplicity), because each real zero $c$ contributes a linear factor $(x - c)$, and a degree-$4$ polynomial cannot have more than $4$ linear factors. Degree $4$ → at most $4$.',
            },
          ],
        },
      },
      {
        id: 'pdr3-worked2',
        type: 'text' as const,
        content: `## A Cubic with a Fractional Zero

Find all zeros of $p(x) = 2x^3 + x^2 - 13x + 6$, given that $x = 2$ is a zero.

Confirm: $\\;p(2) = 16 + 4 - 26 + 6 = 0$ ✓. Divide by $x - 2$ (long division gives quotient $2x^2 + 5x - 3$, remainder $0$; the optional synthetic layout is shown):

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

> 💡 Not every zero is an integer. The factor $(2x - 1)$ produces the fractional zero $x = \\tfrac{1}{2}$, which you only see after dividing out the zero you were given. AP Precalculus does not use the Rational Root Theorem: when a cubic must be factored by hand, a zero or factor is given (or read from a graph or table); otherwise a graphing calculator finds the zeros.`,
      },
      {
        id: 'pdr3-zeros-dropdown',
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
        id: 'pdr3-drill',
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

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr4-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division and Equivalent Forms

**Part 4 of 5 — Division, Rational Functions and Slant Asymptotes**

---

> 🔑 **Two payoffs:** Division rewrites a rational function in the **equivalent form** polynomial + leftover fraction, and that rewritten form exposes the function's **end behavior**, including any **slant (oblique) asymptote**.`,
      },
      {
        id: 'pdr4-rewrite',
        type: 'text' as const,
        content: `## Rewriting a Rational Function by Division

If the polynomial $f$ is divided by the polynomial $g$, then

$$f(x) = g(x)\\,q(x) + r(x), \\qquad \\deg r < \\deg g,$$

where $q$ is the **quotient** and $r$ the **remainder**. Dividing both sides by $g(x)$ rewrites the rational function in an equivalent form:

$$\\frac{f(x)}{g(x)} = q(x) + \\frac{r(x)}{g(x)}$$

### Example: a quadratic divisor

Divide $2x^3 + x^2 - 3$ by $x^2 + 1$ with long division (write the dividend as $2x^3 + x^2 + 0x - 3$):

- $2x^3 \\div x^2 = 2x$; subtract $2x(x^2 + 1) = 2x^3 + 2x$ to leave $x^2 - 2x - 3$.
- $x^2 \\div x^2 = 1$; subtract $1(x^2 + 1)$ to leave $-2x - 4$.

The remainder $-2x - 4$ has degree $1 < 2$, so stop:

$$\\frac{2x^3 + x^2 - 3}{x^2 + 1} = 2x + 1 + \\frac{-2x - 4}{x^2 + 1}$$

> 💡 **Why it matters:** the leftover fraction has a smaller-degree numerator, so it shrinks toward $0$ as $x \\to \\pm\\infty$. The quotient $q(x)$ therefore controls the end behavior. Here the graph approaches the line $y = 2x + 1$.`,
      },
      {
        id: 'pdr4-rewrite-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression is equivalent to $\\dfrac{x^2 - 4x + 7}{x - 2}$ for $x \\ne 2$?',
              options: [
                '$x - 2 + \\dfrac{3}{x - 2}$',
                '$x - 2 + \\dfrac{7}{x - 2}$',
                '$x + 2 + \\dfrac{3}{x - 2}$',
                '$x - 6 + \\dfrac{3}{x - 2}$',
              ],
              correctAnswer: 0,
              explanation: 'Long division gives quotient $x - 2$, since $(x - 2)(x - 2) = x^2 - 4x + 4$, and the remainder is $7 - 4 = 3$. Keeping the original constant $7$ skips the subtraction, and a quotient of $x + 2$ or $x - 6$ comes from sign errors in the first step.',
            },
            {
              question: 'Division gives $\\dfrac{x^3 + 1}{x - 1} = x^2 + x + 1 + \\dfrac{2}{x - 1}$. Which describes the end behavior of the graph?',
              options: [
                'Like $y = x^2 + x + 1$: a parabola rising on both ends',
                'Like $y = x + 1$: a slanted line on both ends',
                'Like $y = 1$: leveling off on both ends',
                'Like $y = x^3$: down on the left, up on the right',
              ],
              correctAnswer: 0,
              explanation: 'The fraction $\\frac{2}{x-1}$ shrinks to $0$, so the graph follows the quotient $x^2 + x + 1$, an upward parabola that rises on both ends. A slant line needs a linear quotient, a level line needs a constant quotient, and the cubic numerator alone ignores the division by $x - 1$.',
            },
          ],
        },
      },
      {
        id: 'pdr4-rewrite-drill',
        type: 'input-boxes' as const,
        content: `**Division Drill** 🧮

Dividing $2x^2 + 3x + 4$ by $x - 1$ gives $\\dfrac{2x^2 + 3x + 4}{x - 1} = ax + b + \\dfrac{c}{x - 1}$.

**1)** Enter $a$, the coefficient of $x$ in the quotient.
**2)** Enter $b$, the constant in the quotient.
**3)** Enter the remainder $c$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '5', '9'],
          hint1: '$2x^2 \\div x = 2x$, so $a = 2$.',
          hint2: 'Subtract $2x(x - 1) = 2x^2 - 2x$ to leave $5x + 4$; then $5x \\div x = 5$.',
          hint3: 'Subtract $5(x - 1) = 5x - 5$ from $5x + 4$ to get $9$. Check by multiplying back: $(x - 1)(2x + 5) + 9 = 2x^2 + 3x + 4$.',
          explanation: 'The quotient is $2x + 5$ and the remainder is $9$, since $(x - 1)(2x + 5) + 9 = 2x^2 + 3x + 4$. The slant asymptote is $y = 2x + 5$.',
        },
      },
      {
        id: 'pdr4-slant',
        type: 'text' as const,
        content: `## Slant Asymptotes from Division

When a rational function $\\dfrac{N(x)}{D(x)}$ (after canceling common factors) has numerator degree **exactly one more** than the denominator, its graph approaches a **slant (oblique) line** asymptote. Division finds it: the **quotient is the asymptote**, and the remainder term vanishes as $x \\to \\pm\\infty$.

### Example: $f(x) = \\dfrac{x^2 + 3x + 5}{x + 1}$

Divide $x^2 + 3x + 5$ by $x + 1$ with long division: $x^2 \\div x = x$, subtract $x(x + 1)$ to leave $2x + 5$, then $2x \\div x = 2$ and subtracting $2(x + 1)$ leaves $3$. Quotient $x + 2$, remainder $3$. So
$$f(x) = x + 2 + \\frac{3}{x + 1}.$$

As $x \\to \\pm\\infty$, the fraction $\\dfrac{3}{x+1} \\to 0$, so the graph hugs the line $y = x + 2$, i.e. $\\lim_{x\\to\\pm\\infty}\\left[f(x) - (x+2)\\right] = 0$.

> ✅ **Slant asymptote:** $y = x + 2$. The remainder $3$ only controls *how* the curve approaches the line, not the line itself. The graph also has a vertical asymptote at $x = -1$, where the divisor is $0$.`,
      },
      {
        id: 'pdr4-slant-figure',
        type: 'multiple-choice' as const,
        content: `**Read the Graph** 🎯

The figure shows $f(x) = \\dfrac{x^2 + 3x + 5}{x + 1} = x + 2 + \\dfrac{3}{x + 1}$ with its slant asymptote and vertical asymptote drawn dashed.`,
        figure: {
          svg: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>Graph of f(x) = (x^2 + 3x + 5)/(x + 1) with slant asymptote y = x + 2</title><g class="fig-muted" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" fill="none"><line x1="160" y1="15" x2="160" y2="235"/><line x1="20" y1="195" x2="300" y2="55"/></g><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="20" y1="135" x2="304" y2="135"/><line x1="180" y1="12" x2="180" y2="235"/><polygon points="304,131 312,135 304,139" fill="currentColor" stroke="none"/><polygon points="176,12 180,4 184,12" fill="currentColor" stroke="none"/></g><g stroke="currentColor" stroke-width="1" fill="none"><line x1="160" y1="132" x2="160" y2="138"/><line x1="220" y1="132" x2="220" y2="138"/><line x1="177" y1="85" x2="183" y2="85"/><line x1="177" y1="35" x2="183" y2="35"/></g><text x="314" y="139" font-size="12" fill="currentColor">x</text><text x="188" y="12" font-size="12" fill="currentColor">y</text><text x="222" y="150" font-size="11" fill="currentColor" text-anchor="middle">2</text><text x="173" y="89" font-size="11" fill="currentColor" text-anchor="end">5</text><text x="173" y="39" font-size="11" fill="currentColor" text-anchor="end">10</text><text x="156" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text><g class="fig-muted" fill="currentColor"><text x="272" y="96" font-size="11">y = x + 2</text><text x="156" y="30" font-size="11" text-anchor="end">x = −1</text></g><g class="fig-accent" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="165.6,15.1 168,46 170,60 174,75.1 180,85 190,90 200,90 210,88 220,85 240,77.5 260,69 280,60 300,50.7"/><polyline points="154.4,234.9 152,204 150,190 146,174.9 140,165 130,160 120,160 110,162 100,165 80,172.5 60,181 40,190 20,199.3"/></g></svg>`,
          alt: 'Graph of f(x) = (x^2 + 3x + 5)/(x + 1). A dashed vertical line marks the vertical asymptote x = -1 and a dashed slanted line marks y = x + 2. The right branch comes down from the top near x = -1, dips to a minimum near (0.7, 4.5), then rises and settles just above the dashed line y = x + 2 as x grows. The left branch drops toward negative infinity near x = -1, rises to a maximum near (-2.7, -2.5), then falls and settles just below the dashed line as x goes to negative infinity. Both ends of the graph approach the line y = x + 2.',
          caption: 'Figure 1. $f(x) = x + 2 + \\dfrac{3}{x + 1}$: the graph approaches the dashed slant asymptote $y = x + 2$ at both ends.',
        },
        exercise: {
          questions: [
            {
              question: 'Which limit statement does the graph justify about the end behavior of $f$?',
              options: [
                '$\\lim_{x\\to\\pm\\infty}\\left[f(x) - (x+2)\\right] = 3$',
                '$\\lim_{x\\to\\pm\\infty}\\left[f(x) - (x+2)\\right] = 0$',
                '$\\lim_{x\\to\\pm\\infty}\\left[f(x) - (x+1)\\right] = 0$',
                '$\\lim_{x\\to\\pm\\infty} f(x) = x + 2$',
              ],
              correctAnswer: 1,
              explanation: 'The gap between the curve and the dashed line $y = x + 2$ shrinks to $0$ at both ends, which is what $f(x) - (x + 2) = \\frac{3}{x+1} \\to 0$ says. The remainder $3$ is not the limiting gap, the divisor $x + 1$ is the vertical asymptote rather than the slant line, and a limit as $x \\to \\pm\\infty$ is a number (or does not exist), never an expression in $x$.',
            },
          ],
        },
      },
      {
        id: 'pdr4-slant-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Slant Asymptote** 🔽

Each rational function is rewritten in the equivalent form quotient $+ \\dfrac{\\text{remainder}}{\\text{divisor}}$. Pick the slant asymptote.

> 📌 The other CED 1.11 skill, expanding $(a+b)^n$ with the **Binomial Theorem** and Pascal's triangle, is taught in the Sequences lesson, Part 6.`,
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

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-division-remainder-theorem',
    sections: [
      {
        id: 'pdr5-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division and Equivalent Forms

**Part 5 of 5 — Mixed Practice and Mastery Check**

---

You can now (1) divide polynomials by long division and write the result in equivalent forms, (2) apply the Factor Theorem, (3) find every zero once one is known, and (4) rewrite rational functions to read off end behavior and slant asymptotes. Let's put it all together.`,
      },
      {
        id: 'pdr5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Divide by any polynomial | long division: $f = gq + r$, $\\deg r < \\deg g$ |
| Test if $(x-c)$ is a factor | check whether $p(c) = 0$ (Factor Theorem) |
| Factor $(x-c)$ ↔ zero | factor $(x-c)$ ⇔ zero $x = c$ |
| Rewrite $\\dfrac{f}{g}$ | $q(x) + \\dfrac{r(x)}{g(x)}$ from $f = gq + r$ |
| Find a slant asymptote | the polynomial quotient; $\\lim_{x\\to\\pm\\infty}\\left[f(x) - q(x)\\right] = 0$ |

> ⚠️ **Three habits that prevent most errors:** use $0$ placeholders for missing powers, subtract the *whole* product at each step (watch the signs), and remember a factor $(x-c)$ matches the zero $x = +c$.`,
      },
      {
        id: 'pdr5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is equivalent to $\\dfrac{x^2 + 4x - 1}{x + 1}$ for $x \\ne -1$?',
              options: ['$x + 3 - \\dfrac{4}{x+1}$', '$x + 3 + \\dfrac{2}{x+1}$', '$x + 5 + \\dfrac{4}{x+1}$', '$x + 3 - \\dfrac{1}{x+1}$'],
              correctAnswer: 0,
              explanation: 'Long division: $(x + 1)(x + 3) = x^2 + 4x + 3$, so the remainder is $-1 - 3 = -4$ and the equivalent form is $x + 3 - \\frac{4}{x+1}$. Check: $(x+1)(x+3) - 4 = x^2 + 4x - 1$. A remainder of $+2$ or $-1$ comes from mishandling the constant, and a quotient of $x + 5$ divides as if by $x - 1$.',
            },
            {
              question: 'When $x^3 - 2x + 5$ is divided by $x^2 + 1$, what are the quotient and remainder?',
              options: ['$q = x,\\ r = -3x + 5$', '$q = x + 1,\\ r = -3x + 4$', '$q = x - 2,\\ r = -x + 7$', '$q = x^2,\\ r = -2x + 4$'],
              correctAnswer: 0,
              explanation: '$x^3 \\div x^2 = x$, and subtracting $x(x^2 + 1) = x^3 + x$ leaves $-3x + 5$, whose degree is below $2$, so division stops. Check any pair with $f = gq + r$: only $(x^2 + 1)(x) + (-3x + 5) = x^3 - 2x + 5$ works. A quotient of $x^2$ is impossible because a cubic divided by a quadratic leaves a linear quotient.',
            },
          ],
        },
      },
      {
        id: 'pdr5-synthesis-drill',
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
        id: 'pdr5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Long division gives $f(x) = \\dfrac{2x^2 + x - 5}{x - 1} = 2x + 3 - \\dfrac{2}{x - 1}$. Which statement is true?',
              options: ['$\\lim_{x\\to\\infty}\\left[f(x) - (2x+3)\\right] = 0$', '$\\lim_{x\\to\\infty}\\left[f(x) - (2x+1)\\right] = 0$', '$\\lim_{x\\to\\infty}\\left[f(x) - 2x\\right] = 0$', '$\\lim_{x\\to\\infty}\\left[f(x) - (2x+3)\\right] = -2$'],
              correctAnswer: 0,
              explanation: 'The quotient $2x + 3$ is the slant asymptote: $f(x) - (2x + 3) = -\\frac{2}{x - 1} \\to 0$ as $x \\to \\infty$. Check the division: $(x - 1)(2x + 3) = 2x^2 + x - 3$, and $-2$ more gives $2x^2 + x - 5$. The line $2x + 1$ copies the numerator coefficients, $2x$ keeps only the leading ratio, and $-2$ is the remainder, not the limiting gap.',
            },
            {
              question: 'For $p(x) = x^3 - 2x^2 - 5x + 6$, which factor is confirmed by evaluating $p$?',
              options: ['$(x - 1)$, since $p(1) = 0$', '$(x + 1)$, since $p(-1) = 0$', '$(x - 2)$, since $p(-2) = 0$', '$(x + 6)$, since $p(-6) = 0$'],
              correctAnswer: 0,
              explanation: '$p(1) = 1 - 2 - 5 + 6 = 0$, so by the Factor Theorem $(x-1)$ is a factor. Checking $p(-1) = -1 - 2 + 5 + 6 = 8 \\ne 0$, so $(x+1)$ is not, and a zero at $-2$ would give the factor $(x+2)$, not $(x-2)$.',
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
