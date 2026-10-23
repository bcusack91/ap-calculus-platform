import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Complex Zeros and the Fundamental Theorem of Algebra (AP Precalculus, CED 1.5).
 * Registry key / DB Topic.slug: 'fundamental-theorem-algebra'.
 * 7 parts, gold-standard structure: zeros & the factor connection → core factoring
 * techniques (common factors + quadratic rules) → zeros from graphs, tables and a given factor →
 * polynomial long division to divide out a known factor (CED 1.11) →
 * the Fundamental Theorem of Algebra (exactly n complex zeros, multiplicity, non-real zeros of quadratics) →
 * conjugate pairs + building polynomials from their zeros → mixed practice + exit quiz.
 * Absorbs the on-exam part of the retired 'complex-numbers' lesson: i^2 = -1 only as the tool that
 * finishes a quadratic with negative discriminant; no complex arithmetic, plane, modulus or polar form.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every zero, factorization, division result, and index was verified numerically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'fundamental-theorem-algebra',
    sections: [
      {
        id: 'fta1-intro',
        type: 'text' as const,
        content: `# 🧩 Complex Zeros and the Fundamental Theorem of Algebra

**Part 1 of 7 — Zeros, Factors & the Connection Between Them**

---

### The Seven Parts of This Lesson

| Part | Title |
|------|-------|
| 1 | Zeros, Factors & the Connection Between Them |
| 2 | Core Factoring Techniques |
| 3 | Zeros from Graphs, Tables & a Known Factor |
| 4 | Dividing Out a Known Factor |
| 5 | The Fundamental Theorem of Algebra, Multiplicity & Non-Real Zeros |
| 6 | Conjugate Pairs & Building Polynomials from Zeros |
| 7 | Mixed Practice & Mastery Check |

> 🔑 **Key Concept:** A number $c$ is a **zero** of a polynomial $p(x)$ exactly when $(x - c)$ is a **factor** of $p(x)$. Factoring and finding zeros are two views of the *same* idea — and that idea drives this entire lesson.`,
      },
      {
        id: 'fta1-zero',
        type: 'text' as const,
        content: `## What Is a Polynomial Zero?

A **polynomial** is a sum of terms $a_n x^n + \\dots + a_1 x + a_0$ with whole-number exponents. A **zero** of $p(x)$ (also called a root) is any value $c$ that makes the polynomial equal $0$:

$$p(c) = 0$$

Graphically, the real zeros are the **$x$-intercepts** — where the curve crosses or touches the $x$-axis.

### Example

For $p(x) = x^2 - 5x + 6$, test $x = 2$:

$$p(2) = (2)^2 - 5(2) + 6 = 4 - 10 + 6 = 0 \\;\\checkmark$$

So $2$ is a zero. Testing $x = 3$ gives $9 - 15 + 6 = 0$, so $3$ is a zero too.

> 💡 The **degree** $n$ (highest exponent) caps how many zeros a polynomial can have. A degree-$2$ polynomial has at most $2$ zeros, degree-$3$ at most $3$, and so on. Part 5 sharpens "at most" into an exact count.`,
      },
      {
        id: 'fta1-factor-theorem',
        type: 'text' as const,
        content: `## The Factor Theorem

This is the engine of the whole lesson:

$$\\textbf{Factor Theorem: } \\quad (x - c) \\text{ is a factor of } p(x) \\iff p(c) = 0$$

The double arrow $\\iff$ means it works **both ways**:
- If $(x - c)$ is a factor, then $c$ is a zero.
- If $c$ is a zero, then $(x - c)$ is a factor.

### Example

We found that $x^2 - 5x + 6$ has zeros $2$ and $3$. The Factor Theorem promises:

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Check** by expanding: $(x-2)(x-3) = x^2 - 3x - 2x + 6 = x^2 - 5x + 6 \\;\\checkmark$

These are **equivalent forms** of the same polynomial: the standard form shows the $y$-intercept $6$, and the factored form shows the zeros $2$ and $3$.

> ⚠️ Watch the sign: a zero of $c = 5$ gives the factor $(x - 5)$, and a zero of $c = -4$ gives the factor $(x - (-4)) = (x + 4)$.`,
      },
      {
        id: 'fta1-read-zeros',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What are the zeros of $p(x) = (x - 7)(x + 2)$?',
              options: ['$7$ and $-2$', '$-7$ and $2$', '$7$ and $2$', '$-7$ and $-2$'],
              correctAnswer: 0,
              explanation: 'Set each factor to $0$: $x - 7 = 0 \\Rightarrow x = 7$, and $x + 2 = 0 \\Rightarrow x = -2$. Flip the sign inside each factor.',
            },
            {
              question: 'If $p(4) = 0$, which of these MUST be a factor of $p(x)$?',
              options: ['$(x + 4)$', '$(x - 4)$', '$(4x)$', '$(x - 0)$'],
              correctAnswer: 1,
              explanation: 'By the Factor Theorem, $p(4) = 0$ means $(x - 4)$ is a factor. A zero of $c$ gives the factor $(x - c)$.',
            },
          ],
        },
      },
      {
        id: 'fta1-build-drill',
        type: 'input-boxes' as const,
        content: `**Factors from Zeros** 🧮

Each value below is a zero of some polynomial. Write the matching factor in the form $(x \\,?\\, k)$ — enter just the **constant with its sign** that goes *inside* the factor after the $x$.

**Example:** zero $= 6$ → factor $(x - 6)$, so you would enter \`-6\`.

**1)** zero $= 9$ → factor $(x \\,?)$, enter the constant: $\\,?$
**2)** zero $= -5$ → factor $(x \\,?)$, enter the constant: $\\,?$
**3)** zero $= 0$ → factor $(x \\,?)$, enter the constant: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-9', '+5', '0'],
          hint1: 'The factor for a zero $c$ is $(x - c)$. Subtract the zero.',
          hint2: 'For zero $= -5$: $(x - (-5)) = (x + 5)$, so the constant is $+5$.',
          hint3: 'For zero $= 0$: $(x - 0) = x$, so the constant inside is $0$.',
          explanation: '1) zero $9 \\Rightarrow (x - 9)$, enter $-9$.  2) zero $-5 \\Rightarrow (x + 5)$, enter $+5$ (or $5$).  3) zero $0 \\Rightarrow (x - 0) = x$, enter $0$.',
        },
      },
      {
        id: 'fta1-zero-or-not',
        type: 'dropdown-select' as const,
        content: `**Is It a Zero?** 🔽

For $p(x) = x^2 - 5x + 6$, decide whether each value is a zero by evaluating $p$ at it.`,
        exercise: {
          dropdowns: [
            { label: 'Is $x = 2$ a zero?', options: ['Yes', 'No'] },
            { label: 'Is $x = 3$ a zero?', options: ['Yes', 'No'] },
            { label: 'Is $x = 1$ a zero?', options: ['Yes', 'No'] },
          ],
          correctAnswers: ['Yes', 'Yes', 'No'],
          hint1: '$p(2) = 4 - 10 + 6 = 0$, so $2$ is a zero.',
          hint2: '$p(3) = 9 - 15 + 6 = 0$, so $3$ is a zero.',
          hint3: '$p(1) = 1 - 5 + 6 = 2 \\ne 0$, so $1$ is NOT a zero.',
          explanation: '$p(2)=0$ and $p(3)=0$ (zeros), but $p(1)=2\\ne0$ (not a zero). The zeros are exactly $2$ and $3$.',
        },
      },
      {
        id: 'fta1-recap',
        type: 'text' as const,
        content: `## Why This Matters

Everything ahead is about turning a polynomial into a **product of factors**, because a factored polynomial *displays* its zeros:

$$p(x) = a(x - r_1)(x - r_2)\\cdots(x - r_n) \\quad\\Longrightarrow\\quad \\text{zeros } r_1, r_2, \\dots, r_n$$

- **Part 2** builds your factoring toolkit (GCF and the quadratic patterns).
- **Parts 3–4** find the remaining zeros once a graph, a table, or a known factor gives you one, then divide that factor out by long division.
- **Part 5** counts every zero — real *and* non-real — with the **Fundamental Theorem of Algebra**, and finds the non-real zeros of a quadratic.
- **Part 6** pairs up non-real zeros and builds polynomials from a list of zeros.

Let's stock the toolbox.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'fundamental-theorem-algebra',
    sections: [
      {
        id: 'fta2-intro',
        type: 'text' as const,
        content: `# 🧩 Complex Zeros and the Fundamental Theorem of Algebra

**Part 2 of 7 — Core Factoring Techniques**

---

> 🔑 **Strategy:** *Always* try these in order: (1) pull out a **GCF**, (2) recognize a **special pattern**, (3) factor a **trinomial**, (4) spot a **quadratic in disguise**. AP Precalculus factoring by hand uses common factors and quadratic techniques, and these four steps cover exactly that.`,
      },
      {
        id: 'fta2-gcf',
        type: 'text' as const,
        content: `## Step 1 — Greatest Common Factor (GCF)

Always pull out the GCF first. It simplifies everything that follows.

$$6x^3 - 9x^2 = 3x^2(2x - 3)$$

The GCF of $6x^3$ and $9x^2$ is $3x^2$ (largest coefficient $3$, lowest power $x^2$).

## Step 2 — Special Patterns

| Pattern | Factored form |
|---------|---------------|
| Difference of squares: $a^2 - b^2$ | $(a - b)(a + b)$ |
| Perfect square: $a^2 + 2ab + b^2$ | $(a + b)^2$ |
| Perfect square: $a^2 - 2ab + b^2$ | $(a - b)^2$ |

### Example (difference of squares)

$$x^2 - 16 = x^2 - 4^2 = (x - 4)(x + 4)$$

> ⚠️ A **sum** of squares like $x^2 + 16$ has **no real zeros** — its graph never meets the $x$-axis. Its two zeros are non-real (Part 5).`,
      },
      {
        id: 'fta2-trinomial',
        type: 'text' as const,
        content: `## Step 3 — Factoring Trinomials

To factor $x^2 + bx + c$, find two numbers that **multiply to $c$** and **add to $b$**.

### Example: $x^2 + 7x + 12$

Need a pair multiplying to $12$, adding to $7$ → that's $3$ and $4$:

$$x^2 + 7x + 12 = (x + 3)(x + 4)$$

### Example with a negative: $x^2 - x - 12$

Need a pair multiplying to $-12$, adding to $-1$ → that's $-4$ and $3$:

$$x^2 - x - 12 = (x - 4)(x + 3)$$

> 💡 **Sign logic:** product negative → the two numbers have *opposite* signs. Product positive → *same* sign (both match the sign of $b$).`,
      },
      {
        id: 'fta2-trinomial-check',
        type: 'dropdown-select' as const,
        content: `**Match Each Factorization** 🔽

Choose the correct factored form for each expression.`,
        exercise: {
          dropdowns: [
            { label: '$x^2 - 9 =$', options: ['$(x - 3)(x + 3)$', '$(x - 3)^2$', '$(x - 9)(x + 1)$', '$(x + 3)^2$'] },
            { label: '$x^2 + 5x + 6 =$', options: ['$(x + 2)(x + 3)$', '$(x + 1)(x + 6)$', '$(x - 2)(x - 3)$', '$(x + 5)(x + 1)$'] },
            { label: '$2x^2 + 8x =$', options: ['$2x(x + 4)$', '$x(x + 8)$', '$x(2x + 8x)$', '$2x(x + 8)$'] },
          ],
          correctAnswers: ['$(x - 3)(x + 3)$', '$(x + 2)(x + 3)$', '$2x(x + 4)$'],
          hint1: '$x^2 - 9$ is a difference of squares: $x^2 - 3^2$.',
          hint2: 'For $x^2 + 5x + 6$, find two numbers multiplying to $6$ and adding to $5$.',
          hint3: 'For $2x^2 + 8x$, the GCF is $2x$: $2x^2 + 8x = 2x(x + 4)$.',
          explanation: '$x^2 - 9 = (x-3)(x+3)$; $x^2+5x+6 = (x+2)(x+3)$ since $2\\cdot3=6$ and $2+3=5$; $2x^2+8x = 2x(x+4)$.',
        },
      },
      {
        id: 'fta2-grouping',
        type: 'text' as const,
        content: `## Step 4 — Quadratics in Disguise

Some higher-degree polynomials are really quadratics once you pull out a GCF or rename a power. The quadratic rules then finish the job.

### Example 1: GCF first, then a trinomial

$$x^3 - x^2 - 12x = x(x^2 - x - 12) = x(x - 4)(x + 3)$$

Zeros: $x = 0,\\ 4,\\ -3$.

### Example 2: quadratic form

In $x^4 - 13x^2 + 36$, let $u = x^2$. Then it reads $u^2 - 13u + 36 = (u - 4)(u - 9)$, so

$$x^4 - 13x^2 + 36 = (x^2 - 4)(x^2 - 9) = (x - 2)(x + 2)(x - 3)(x + 3)$$

> ✅ **Check:** the four zeros $\\pm 2, \\pm 3$ match the degree, $4$.

The signal to look for: the exponents are $2k$ and $k$ (like $x^4$ and $x^2$), or every term shares a power of $x$.`,
      },
      {
        id: 'fta2-grouping-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the complete factorization of $x^4 - 5x^2 + 4$?',
              options: ['$(x - 1)(x + 1)(x - 2)(x + 2)$', '$(x - 1)(x - 4)(x^2 + 1)$', '$(x - 1)(x + 1)(x + 2)^2$', '$(x - 1)(x + 1)(x - 4)(x + 4)$'],
              correctAnswer: 0,
              explanation: 'With $u = x^2$, the expression is $u^2 - 5u + 4 = (u - 1)(u - 4) = (x^2 - 1)(x^2 - 4)$. Each factor is a difference of squares, so the result is $(x-1)(x+1)(x-2)(x+2)$. Using $\\pm 4$ forgets to take the square root of $u = 4$, and $(x + 2)^2$ would make $2$ a zero of multiplicity $2$ instead of $\\pm 2$ once each.',
            },
            {
              question: 'Which expression has NO real zeros?',
              options: ['$x^2 - 16$', '$x^2 + 16$', '$x^2 - 8x$', '$x^2 + 8x + 16$'],
              correctAnswer: 1,
              explanation: '$x^2 + 16$ is a SUM of squares: $x^2 = -16$ has no real solution, so its two zeros are the non-real pair $\\pm 4i$ (Part 5). The others have real zeros: $x^2 - 16 = (x-4)(x+4)$ gives $\\pm 4$, $x^2 - 8x = x(x - 8)$ gives $0$ and $8$, and $x^2 + 8x + 16 = (x+4)^2$ gives $-4$.',
            },
          ],
        },
      },
      {
        id: 'fta2-factor-drill',
        type: 'input-boxes' as const,
        content: `**Factoring Drill** 🧮

Factor each expression, then enter the number asked for.

**1)** $x^2 - 25 = (x - a)(x + a)$; enter $a$: $\\,?$
**2)** $x^2 + 9x + 20 = (x + m)(x + n)$ with $m < n$; enter $m$: $\\,?$ then $n$: $\\,?$
**3)** $5x^3 - 10x^2 = 5x^2(x - k)$; enter $k$: $\\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['5', '4', '5', '2'],
          hint1: '$x^2 - 25 = x^2 - 5^2$, a difference of squares, so $a = 5$.',
          hint2: 'For $x^2+9x+20$: two numbers multiplying to $20$, adding to $9$ → $4$ and $5$.',
          hint3: 'GCF of $5x^3$ and $10x^2$ is $5x^2$: $5x^3 - 10x^2 = 5x^2(x - 2)$, so $k = 2$.',
          explanation: '1) $(x-5)(x+5)$, so $a = 5$.  2) $(x+4)(x+5)$ since $4\\cdot5=20$ and $4+5=9$, so $m = 4$, $n = 5$.  3) $5x^2(x-2)$, so $k = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'fundamental-theorem-algebra',
    sections: [
      {
        id: 'fta3-intro',
        type: 'text' as const,
        content: `# 🧩 Complex Zeros and the Fundamental Theorem of Algebra

**Part 3 of 7 — Zeros from Graphs, Tables & a Known Factor**

---

> 🔑 **The Problem:** A cubic like $2x^3 - 3x^2 - 11x + 6$ won't factor by inspection. On the AP exam you are never asked to hunt for its zeros blind. Instead, the question hands you a foothold: a **graph**, a **table of values**, or **one zero or factor**. Your job is to turn that foothold into the full factorization.

Special root-hunting rules such as the Rational Root Theorem and Descartes' Rule of Signs belong to Algebra 2 and are not assessed on the AP Precalculus exam.`,
      },
      {
        id: 'fta3-statement',
        type: 'text' as const,
        figure: {
          svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"><line x1="82.5" y1="20" x2="82.5" y2="200"/><line x1="187.5" y1="20" x2="187.5" y2="200"/><line x1="257.5" y1="20" x2="257.5" y2="200"/><line x1="30" y1="62" x2="152.5" y2="62"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="20" y1="110" x2="312" y2="110"/><line x1="152.5" y1="212" x2="152.5" y2="8"/></g><text x="310" y="124" font-size="12" fill="currentColor">x</text><text x="158" y="16" font-size="12" fill="currentColor">y</text><text x="82.5" y="126" font-size="11" fill="currentColor" text-anchor="middle">-2</text><text x="187.5" y="126" font-size="11" fill="currentColor" text-anchor="middle">1</text><text x="257.5" y="126" font-size="11" fill="currentColor" text-anchor="middle">3</text><text x="146" y="66" font-size="11" fill="currentColor" text-anchor="end">6</text><g class="fig-accent"><polyline points="59.5,196.7 65,187 73.75,144.2 82.5,110 91.25,83.8 100,65 108.75,52.6 117.5,46 126.25,44.4 135,47 143.75,53.1 152.5,62 161.25,72.9 170,85 178.75,97.6 187.5,110 196.25,121.4 205,131 213.75,138.2 222.5,142 231.25,141.8 240,137 248.75,126.6 257.5,110 266.25,86.4 275,55 283.75,15.1" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="82.5" cy="110" r="4" fill="currentColor"/><circle cx="187.5" cy="110" r="4" fill="currentColor"/><circle cx="257.5" cy="110" r="4" fill="currentColor"/><circle cx="152.5" cy="62" r="4" fill="currentColor"/></g><text x="290" y="30" font-size="11" fill="currentColor" text-anchor="end">y = p(x)</text></svg>',
          alt: 'Graph of a cubic y = p(x). The curve rises from the lower left, crosses the x-axis at x = -2, reaches a high point near x = -0.8 at height about 8, passes through the y-intercept (0, 6), crosses the x-axis at x = 1, dips to a low point near x = 2.1 at height about -4, crosses the x-axis at x = 3, and rises steeply to the upper right.',
          caption: 'Figure 1. A cubic $p$ with leading coefficient $1$ crosses the $x$-axis at $x = -2$, $x = 1$ and $x = 3$ and passes through $(0, 6)$.',
        },
        content: `## Foothold 1 — A Graph

Every real zero $a$ of $p$ puts an $x$-intercept at $(a, 0)$. So a graph lets you **read** real zeros and turn them straight into factors with the Factor Theorem.

### Example (Figure 1)

The graph of a cubic $p$ with leading coefficient $1$ crosses the $x$-axis at $x = -2$, $x = 1$ and $x = 3$, and nowhere else.

- Zeros $-2, 1, 3$ give factors $(x + 2)$, $(x - 1)$, $(x - 3)$.
- A cubic has exactly $3$ zeros counting multiplicity, so these are all of them.
- The leading coefficient is $1$, so

$$p(x) = (x + 2)(x - 1)(x - 3)$$

The graph **crosses** at each zero (multiplicity $1$ — Part 5), and its end behavior is that of a cubic with positive leading coefficient: $\\lim_{x \\to -\\infty} p(x) = -\\infty$ and $\\lim_{x \\to \\infty} p(x) = \\infty$.

> ⚠️ A graph alone cannot show the leading coefficient: $2(x+2)(x-1)(x-3)$ has the same intercepts. Use one more point, such as the $y$-intercept, to pin it down. Here $p(0) = (2)(-1)(-3) = 6$, which matches the point $(0, 6)$ in the figure — so the leading coefficient really is $1$.`,
      },
      {
        id: 'fta3-build-list',
        type: 'text' as const,
        content: `## Foothold 2 — A Table or a Given Zero

A table entry with output $0$ is a zero: if a table shows $p(3) = 0$, then $(x - 3)$ is a factor. A problem may also simply state one zero. Either way, **verify** it by substitution before you rely on it.

### Example: $p(x) = 2x^3 - 3x^2 - 11x + 6$, given that $p(3) = 0$

Check the given zero:

$$p(3) = 2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0 \\;\\checkmark$$

So $(x - 3)$ is a factor, and

$$2x^3 - 3x^2 - 11x + 6 = (x - 3)(\\text{a quadratic})$$

Part 4 shows how to divide out $(x - 3)$ to find that quadratic: $2x^2 + 3x - 2 = (2x - 1)(x + 2)$. The three zeros are $3$, $\\tfrac{1}{2}$ and $-2$.

> 💡 Matching degrees is a quick sanity check: a cubic divided by a linear factor must leave a quadratic.`,
      },
      {
        id: 'fta3-candidate-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The graph of a cubic $q$ with leading coefficient $1$ has $x$-intercepts only at $x = -4$, $x = 0$ and $x = 2$. Which is $q(x)$?',
              options: [
                '$x(x + 4)(x - 2)$',
                '$-x(x - 4)(x + 2)$',
                '$x^2(x + 4)(x - 2)$',
                '$(x - 4)(x + 2)x^2$',
              ],
              correctAnswer: 0,
              explanation: 'Each intercept $a$ gives a factor $(x - a)$: $-4 \\to (x+4)$, $0 \\to x$, $2 \\to (x-2)$. Squaring the factor $x$ makes the graph touch, not cross, at the origin (and raises the degree to $4$), and flipping the signs puts the zeros at $4$ and $-2$ instead.',
            },
            {
              question: 'A table for a polynomial $p$ shows $p(-1) = 0$, $p(0) = -6$ and $p(1) = -8$. Which must be a factor of $p(x)$?',
              options: ['$(x + 1)$', '$(x - 1)$', '$(x + 6)$', '$(x - 8)$'],
              correctAnswer: 0,
              explanation: 'Only an output of $0$ marks a zero. Since $p(-1) = 0$, the Factor Theorem gives the factor $(x - (-1)) = (x + 1)$. The values $-6$ and $-8$ are outputs, not zeros.',
            },
          ],
        },
      },
      {
        id: 'fta3-list-drill',
        type: 'input-boxes' as const,
        content: `**Pin Down the Polynomial** 🧮

A cubic $p$ has zeros $x = -1$, $x = 2$ and $x = 5$ (each with multiplicity $1$), so $p(x) = a(x + 1)(x - 2)(x - 5)$ for some constant $a$. Its graph passes through $(0, 20)$.

**1)** Compute $(0 + 1)(0 - 2)(0 - 5)$: $\\,?$
**2)** Use $p(0) = 20$ to find the leading coefficient $a$: $\\,?$
**3)** Evaluate $p(1)$ for this polynomial: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '2', '16'],
          hint1: '$(1)(-2)(-5) = 10$.',
          hint2: '$p(0) = a \\cdot 10 = 20$, so $a = 2$.',
          hint3: '$p(1) = 2(1 + 1)(1 - 2)(1 - 5) = 2(2)(-1)(-4)$.',
          explanation: 'The product at $x = 0$ is $10$, so $10a = 20$ gives $a = 2$. Then $p(1) = 2(2)(-1)(-4) = 16$.',
        },
      },
      {
        id: 'fta3-test-dropdown',
        type: 'dropdown-select' as const,
        content: `**Check the Claimed Zeros** 🔽

A classmate claims three zeros for $p(x) = x^3 + 2x^2 - 5x - 6$. Evaluate $p$ at each to decide whether the claim holds.`,
        exercise: {
          dropdowns: [
            { label: 'Is $x = -1$ a zero?', options: ['Yes', 'No'] },
            { label: 'Is $x = 2$ a zero?', options: ['Yes', 'No'] },
            { label: 'Is $x = 1$ a zero?', options: ['Yes', 'No'] },
          ],
          correctAnswers: ['Yes', 'Yes', 'No'],
          hint1: '$p(-1) = -1 + 2 + 5 - 6 = 0$, so $-1$ is a zero.',
          hint2: '$p(2) = 8 + 8 - 10 - 6 = 0$, so $2$ is a zero.',
          hint3: '$p(1) = 1 + 2 - 5 - 6 = -8 \\ne 0$, so $1$ is NOT a zero.',
          explanation: '$p(-1)=0$ and $p(2)=0$, but $p(1)=-8\\ne0$. In fact $p(x) = (x+1)(x+3)(x-2)$, so the zeros are $-1, -3, 2$.',
        },
      },
      {
        id: 'fta3-recap',
        type: 'text' as const,
        content: `## Where This Leads

A graph, a table, or a stated zero gives you **one factor** $(x - c)$. The Factor Theorem guarantees that $(x - c)$ divides $p(x)$ with remainder $0$, but you still need the quotient.

In **Part 4** you'll divide out $(x - c)$ to collapse the polynomial to a smaller one you can finish with the quadratic rules. When a problem gives no foothold and the zeros are not visible by inspection, that is a graphing-calculator question.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'fundamental-theorem-algebra',
    sections: [
      {
        id: 'fta4-intro',
        type: 'text' as const,
        content: `# 🧩 Complex Zeros and the Fundamental Theorem of Algebra

**Part 4 of 7 — Dividing Out a Known Factor**

---

> 🔑 **The Payoff:** Found a zero $c$? **Polynomial long division** divides $p(x)$ by $(x - c)$ and leaves a lower-degree quotient you can finish factoring. This is how cubics and quartics get fully cracked — and the quotient form $p(x) = (x - c)\\,q(x)$ is an **equivalent form** that displays the zero.`,
      },
      {
        id: 'fta4-how',
        type: 'text' as const,
        content: `## Dividing Out a Known Factor

To divide $p(x)$ by $(x - c)$, work term by term, exactly as in long division of numbers: divide the leading term, multiply back, subtract, and repeat on what is left.

### Example: divide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$

| Step | Divide | Multiply back & subtract | Left over |
|------|--------|--------------------------|-----------|
| 1 | $x^3 \\div x = x^2$ | subtract $x^2(x - 1) = x^3 - x^2$ | $-5x^2 + 11x$ |
| 2 | $-5x^2 \\div x = -5x$ | subtract $-5x(x - 1) = -5x^2 + 5x$ | $6x - 6$ |
| 3 | $6x \\div x = 6$ | subtract $6(x - 1) = 6x - 6$ | remainder $0$ |

Collect the quotient terms: $x^2 - 5x + 6$, **remainder $0$**.

$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$$

> ✅ Remainder $0$ confirms that $(x - 1)$ is a factor (and $x = 1$ is a zero), exactly as the Factor Theorem promised. Synthetic division is an optional shortcut that organizes the same arithmetic in one row of coefficients; it is not required on the exam.`,
      },
      {
        id: 'fta4-finish',
        type: 'text' as const,
        content: `## Finish the Factorization

From the example, the quotient was $x^2 - 5x + 6$, which factors further:

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

So the **complete factorization** is

$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3),$$

with zeros $x = 1, 2, 3$.

> 💡 **The full pipeline:** a graph, table, or given zero supplies a factor → long division divides it out → factor (or repeat on) the smaller quotient. The degrees must agree: a cubic divided by a linear factor leaves a quadratic, which you finish with the Part 2 techniques or the quadratic formula.`,
      },
      {
        id: 'fta4-remainder-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Dividing $p(x)$ by $(x - 4)$ leaves remainder $0$. Which must be true?',
              options: ['$p(4) = 0$', '$p(-4) = 0$', '$p(0) = 4$', '$p(4) = 4$'],
              correctAnswer: 0,
              explanation: 'Remainder $0$ means $(x - 4)$ is a factor, so by the Factor Theorem $p(4) = 0$. The value $p(-4)$ belongs to the factor $(x + 4)$, $p(0)$ is the $y$-intercept, unrelated to the division, and $p(4) = 4$ confuses the number in the divisor with the output.',
            },
            {
              question: 'Dividing $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ gives quotient $x^2 - 5x + 6$ and remainder $0$. What is the complete factorization?',
              options: [
                '$(x - 1)(x - 2)(x - 3)$',
                '$(x - 1)(x + 2)(x + 3)$',
                '$(x + 1)(x - 2)(x - 3)$',
                '$(x - 1)(x^2 - 5x + 6)$ only',
              ],
              correctAnswer: 0,
              explanation: 'The quotient $x^2 - 5x + 6 = (x-2)(x-3)$, so the full factorization is $(x-1)(x-2)(x-3)$ with zeros $1, 2, 3$. Flipping the signs would put zeros at $-2$ and $-3$ or at $-1$, and stopping at $(x - 1)(x^2 - 5x + 6)$ leaves a quadratic that still factors.',
            },
          ],
        },
      },
      {
        id: 'fta4-synth-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk the Division** 🔽

You're dividing $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ with long division. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'First quotient term, $x^3 \\div x$:', options: ['$x^2$', '$x^3$', '$x$', '$-6x^2$'] },
            { label: 'Subtract $x^2(x-1)$ from $x^3 - 6x^2$:', options: ['$-5x^2$', '$-7x^2$', '$5x^2$', '$-6x^2$'] },
            { label: 'Next quotient term, $-5x^2 \\div x$:', options: ['$-5x$', '$5x$', '$-5x^2$', '$-6x$'] },
            { label: 'Final remainder:', options: ['$0$', '$6$', '$-6$', '$1$'] },
          ],
          correctAnswers: ['$x^2$', '$-5x^2$', '$-5x$', '$0$'],
          hint1: 'Divide the leading terms: $x^3 \\div x = x^2$.',
          hint2: '$x^2(x - 1) = x^3 - x^2$, and $(x^3 - 6x^2) - (x^3 - x^2) = -5x^2$. Bring down $+11x$.',
          hint3: '$-5x^2 \\div x = -5x$; subtracting $-5x^2 + 5x$ leaves $6x - 6$, and $6(x - 1)$ takes that to $0$.',
          explanation: 'Quotient terms $x^2$, $-5x$, $6$ and remainder $0$: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$, confirming $(x-1)$ is a factor.',
        },
      },
      {
        id: 'fta4-synth-drill',
        type: 'input-boxes' as const,
        content: `**Long Division Drill** 🧮

Divide $x^3 + 2x^2 - 5x - 6$ by $(x + 1)$. The quotient is $x^2 + bx + c$.

**1)** $b = \\,?$
**2)** $c = \\,?$
**3)** The remainder is: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-6', '0'],
          hint1: '$x^3 \\div x = x^2$; subtract $x^2(x + 1) = x^3 + x^2$ to leave $x^2 - 5x$. Then $x^2 \\div x = x$, so $b = 1$.',
          hint2: 'Subtract $x(x + 1) = x^2 + x$ from $x^2 - 5x$ to leave $-6x - 6$. Then $-6x \\div x = -6$, so $c = -6$.',
          hint3: 'Subtract $-6(x + 1) = -6x - 6$ from $-6x - 6$: nothing is left, so the remainder is $0$.',
          explanation: 'Quotient $x^2 + x - 6 = (x+3)(x-2)$ with remainder $0$, so $x^3+2x^2-5x-6 = (x+1)(x+3)(x-2)$ and the zeros are $-1, -3, 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'fundamental-theorem-algebra',
    sections: [
      {
        id: 'fta5-intro',
        type: 'text' as const,
        content: `# 🧩 Complex Zeros and the Fundamental Theorem of Algebra

**Part 5 of 7 — The Fundamental Theorem of Algebra, Multiplicity & Non-Real Zeros**

---

> 🔑 **The Big Theorem:** Every polynomial of degree $n \\ge 1$ has **exactly $n$ complex zeros** — *if* you count non-real zeros and count repeated zeros by their multiplicity. No degree-$n$ polynomial is ever "missing" a zero.`,
      },
      {
        id: 'fta5-statement',
        type: 'text' as const,
        content: `## The Fundamental Theorem of Algebra (FTA)

> **FTA:** Every polynomial of degree $n \\ge 1$ has **at least one complex zero**.

Applying it repeatedly (divide out a zero, repeat on the quotient) gives the headline consequence:

$$\\textbf{A degree-}n\\textbf{ polynomial has exactly }n\\textbf{ complex zeros, counted with multiplicity.}$$

Equivalently, over the complex numbers it factors completely into linear pieces:

$$p(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$$

Here "complex" *includes* the real numbers (a real number is a complex number with zero imaginary part), so real zeros count too.

### Where do the missing zeros hide?

The graph of $y = x^2 + 1$ never meets the $x$-axis, so $x^2 + 1$ has **no real zeros** — yet the theorem promises two. They are **non-real**: solving $x^2 = -1$ requires a number whose square is $-1$. That number is the imaginary unit $i$, defined by

$$i^2 = -1, \\qquad\\text{so}\\qquad x^2 + 1 = 0 \\;\\Rightarrow\\; x = \\pm i$$

> 💡 Degree is a **promise**: a quartic ($n = 4$) has exactly $4$ zeros — some may be real, some non-real, some repeated, but the total is always $4$. A non-real zero never shows up as an $x$-intercept.`,
      },
      {
        id: 'fta5-multiplicity',
        type: 'text' as const,
        figure: [
          {
            svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"><line x1="84" y1="20" x2="84" y2="205"/><line x1="219" y1="20" x2="219" y2="205"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="20" y1="120" x2="310" y2="120"/><line x1="174" y1="212" x2="174" y2="10"/></g><text x="308" y="134" font-size="12" fill="currentColor">x</text><text x="180" y="18" font-size="12" fill="currentColor">y</text><text x="84" y="136" font-size="11" fill="currentColor" text-anchor="middle">-2</text><text x="219" y="136" font-size="11" fill="currentColor" text-anchor="middle">1</text><g class="fig-accent"><polyline points="57,190 61.5,175.1 72.75,143.8 84,120 95.25,103 106.5,91.9 117.75,85.8 129,84 140.25,85.5 151.5,89.6 162.75,95.4 174,102 185.25,108.6 196.5,114.4 207.75,118.5 219,120 230.25,118.2 241.5,112.1 252.75,101 264,84 275.25,60.2 286.5,28.9" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="84" cy="120" r="4" fill="currentColor"/><circle cx="219" cy="120" r="4" fill="currentColor"/></g><text x="84" y="160" font-size="11" fill="currentColor" text-anchor="middle">crosses</text><text x="84" y="173" font-size="10" fill="currentColor" text-anchor="middle">(multiplicity 1)</text><text x="230" y="160" font-size="11" fill="currentColor" text-anchor="middle">bounces</text><text x="230" y="173" font-size="10" fill="currentColor" text-anchor="middle">(multiplicity 2)</text></svg>',
            alt: 'Graph of y = (x + 2)(x - 1)^2. The curve rises from the lower left, crosses the x-axis at x = -2, peaks near x = -1 at height 4, comes down to touch the x-axis at x = 1 without crossing, then turns back up and rises steeply to the upper right.',
            caption: 'Panel A: $y = (x + 2)(x - 1)^2$ — crosses at $x = -2$ (multiplicity $1$), bounces at $x = 1$ (multiplicity $2$).',
            size: 'sm',
          },
          {
            svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"><line x1="84" y1="20" x2="84" y2="205"/><line x1="219" y1="20" x2="219" y2="205"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="20" y1="110" x2="310" y2="110"/><line x1="174" y1="212" x2="174" y2="10"/></g><text x="308" y="124" font-size="12" fill="currentColor">x</text><text x="180" y="18" font-size="12" fill="currentColor">y</text><text x="84" y="100" font-size="11" fill="currentColor" text-anchor="middle">-2</text><text x="226" y="100" font-size="11" fill="currentColor" text-anchor="middle">1</text><g class="fig-accent"><polyline points="39,158 50.25,135.3 61.5,120.5 72.75,112.4 84,110 95.25,112.1 106.5,117.5 117.75,125.2 129,134 140.25,142.8 151.5,150.5 162.75,155.9 174,158 185.25,155.6 196.5,147.5 207.75,132.7 219,110 230.25,78.3 241.5,36.5 246,16.6" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="84" cy="110" r="4" fill="currentColor"/><circle cx="219" cy="110" r="4" fill="currentColor"/></g><text x="84" y="60" font-size="11" fill="currentColor" text-anchor="middle">bounces</text><text x="84" y="73" font-size="10" fill="currentColor" text-anchor="middle">(multiplicity 2)</text><text x="262" y="170" font-size="11" fill="currentColor" text-anchor="middle">crosses</text><text x="262" y="183" font-size="10" fill="currentColor" text-anchor="middle">(multiplicity 1)</text></svg>',
            alt: 'Graph of y = (x + 2)^2 (x - 1). The curve comes from the lower left, rises to touch the x-axis at x = -2 without crossing, turns back down to a low point near x = 0 at height -4, then rises and crosses the x-axis at x = 1, continuing steeply upward.',
            caption: 'Panel B: $y = (x + 2)^2(x - 1)$ — bounces at $x = -2$ (multiplicity $2$), crosses at $x = 1$ (multiplicity $1$).',
            size: 'sm',
          },
        ],
        content: `## Multiplicity — Counting Repeats

A zero's **multiplicity** is how many times its factor appears.

### Example

$$p(x) = (x - 2)^3(x + 5)$$

- $x = 2$ has multiplicity $3$
- $x = -5$ has multiplicity $1$

**Total zeros:** $3 + 1 = 4$, matching the degree $4$. ✓

### Graph behavior at a real zero (Figure 2, Panels A and B)

| Multiplicity | At that $x$-intercept the graph… |
|--------------|----------------------------------|
| **Odd** (1, 3, …) | **crosses** the $x$-axis |
| **Even** (2, 4, …) | **touches** and turns around (bounces) |

In both panels the same two zeros, $-2$ and $1$, appear — only the multiplicities are swapped, and the graph crosses at the multiplicity-$1$ zero and bounces at the multiplicity-$2$ zero. Both are cubics with positive leading coefficient, so $\\lim_{x \\to -\\infty} p(x) = -\\infty$ and $\\lim_{x \\to \\infty} p(x) = \\infty$.

> 💡 A double zero $(x-r)^2$ touches the axis like the vertex of a parabola; a triple zero flattens as it crosses.`,
      },
      {
        id: 'fta5-count-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Counting multiplicity, how many zeros does a degree-$5$ polynomial have over the complex numbers?',
              options: ['At most $5$', 'Exactly $5$', 'Exactly $4$', 'At least $5$'],
              correctAnswer: 1,
              explanation: 'By the FTA, a degree-$n$ polynomial has exactly $n$ complex zeros counted with multiplicity. For $n = 5$, that is exactly $5$; "at most $5$" describes the real zeros alone, "exactly $4$" is one less than the degree, and a polynomial never has more zeros than its degree.',
            },
            {
              question: 'For $p(x) = (x - 1)^2(x + 4)^3$, what is the degree and the multiplicity of the zero $x = -4$?',
              options: [
                'Degree $5$; multiplicity $3$',
                'Degree $6$; multiplicity $4$',
                'Degree $5$; multiplicity $2$',
                'Degree $2$; multiplicity $3$',
              ],
              correctAnswer: 0,
              explanation: 'Add exponents for the degree: $2 + 3 = 5$. The factor $(x+4)$ has exponent $3$, so $x = -4$ has multiplicity $3$ (the exponent $2$ belongs to the zero $1$).',
            },
            {
              question: 'At which kind of zero does the graph TOUCH the $x$-axis and turn around without crossing?',
              options: ['A zero of multiplicity $1$', 'A zero of multiplicity $3$', 'A zero of even multiplicity', 'A non-real (complex) zero'],
              correctAnswer: 2,
              explanation: 'Even multiplicity (2, 4, …) makes the graph touch and bounce; odd multiplicity makes it cross. Non-real zeros are not $x$-intercepts at all.',
            },
          ],
        },
      },
      {
        id: 'fta5-nonreal',
        type: 'text' as const,
        content: `## Non-Real Zeros of a Quadratic

For $ax^2 + bx + c = 0$ the quadratic formula gives

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The **discriminant** $\\Delta = b^2 - 4ac$ decides what kind of zeros you get:

| Discriminant $\\Delta$ | Zeros | Graph of $y = ax^2 + bx + c$ |
|-----------------------|-------|------------------------------|
| $\\Delta > 0$ | two distinct **real** zeros | two $x$-intercepts |
| $\\Delta = 0$ | one **real** zero of multiplicity $2$ | touches the $x$-axis once |
| $\\Delta < 0$ | two **non-real** zeros, a conjugate pair $a \\pm bi$ | **no** $x$-intercepts |

When $\\Delta < 0$ the square root holds a negative number, and $i^2 = -1$ is the tool that finishes the job: $\\sqrt{-k} = i\\sqrt{k}$ for $k > 0$, for example $\\sqrt{-36} = 6i$ and $\\sqrt{-9} = 3i$.

### Worked Example: Solve $x^2 + 4x + 13 = 0$

**Step 1 — identify** $a = 1,\\ b = 4,\\ c = 13$.

**Step 2 — discriminant:** $\\Delta = 4^2 - 4(1)(13) = 16 - 52 = -36$. Negative, so expect two non-real zeros.

**Step 3 — quadratic formula:**
$$x = \\frac{-4 \\pm \\sqrt{-36}}{2} = \\frac{-4 \\pm 6i}{2}$$

**Step 4 — simplify** by dividing **each** term by $2$:
$$x = -2 \\pm 3i$$

So the zeros are $-2 + 3i$ and $-2 - 3i$. The graph of $y = x^2 + 4x + 13$ has no $x$-intercepts, yet the degree-$2$ polynomial still has its two zeros — exactly as the FTA promises.

> ⚠️ **Divide BOTH terms** by $2a$. Writing $\\frac{-4 \\pm 6i}{2}$ as $-4 \\pm 3i$ is wrong; the $-4$ must also be divided, giving $-2 \\pm 3i$.`,
      },
      {
        id: 'fta5-nonreal-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many real zeros does $x^2 + 2x + 5$ have, and why?',
              options: [
                'None; the discriminant $4 - 20$ is negative',
                'Two; the discriminant $4 - 20$ is negative',
                'One; the discriminant $4 - 20$ equals $0$',
                'Two; the discriminant $4 + 20$ is positive',
              ],
              correctAnswer: 0,
              explanation: '$\\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$, so both zeros are non-real ($-1 \\pm 2i$) and the graph has no $x$-intercepts. A negative discriminant never produces real zeros, and $4ac$ is subtracted, not added.',
            },
            {
              question: 'Which are all the zeros of $p(x) = x^2 + 9$?',
              options: ['$3i$ and $-3i$', '$3$ and $-3$', '$3i$ only', '$\\pm 9i$'],
              correctAnswer: 0,
              explanation: '$x^2 = -9$ gives $x = \\pm\\sqrt{-9} = \\pm 3i$. The values $\\pm 3$ solve $x^2 = 9$, a lone $3i$ forgets that a quadratic has two zeros, and $\\pm 9i$ skips the square root of $9$.',
            },
          ],
        },
      },
      {
        id: 'fta5-quad-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Quadratic** 🧮

Solve $x^2 - 6x + 25 = 0$. The zeros are $p \\pm qi$.

**1)** Discriminant $b^2 - 4ac = \\,?$
**2)** Real part $p = \\,?$
**3)** Imaginary coefficient $q = \\,?$  *(the positive value)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-64', '3', '4'],
          hint1: '$\\Delta = (-6)^2 - 4(1)(25) = 36 - 100 = -64$.',
          hint2: '$x = \\frac{6 \\pm \\sqrt{-64}}{2} = \\frac{6 \\pm 8i}{2}$. The real part is $\\frac{6}{2} = 3$.',
          hint3: '$\\frac{8i}{2} = 4i$, so $q = 4$. The zeros are $3 \\pm 4i$.',
          explanation: '$\\Delta = -64$; $x = \\frac{6 \\pm 8i}{2} = 3 \\pm 4i$. So $p = 3$ and $q = 4$, and the graph of $y = x^2 - 6x + 25$ has no $x$-intercepts.',
        },
      },
      {
        id: 'fta5-mult-drill',
        type: 'input-boxes' as const,
        content: `**Multiplicity & Degree Drill** 🧮

Consider $p(x) = (x - 3)^2(x + 1)(x - 7)^4$.

**1)** The multiplicity of the zero $x = 7$ is: $\\,?$
**2)** The degree of $p(x)$ is (add the exponents): $\\,?$
**3)** The number of **distinct** real zeros is: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '3'],
          hint1: 'The exponent on $(x - 7)$ is the multiplicity of $x = 7$.',
          hint2: 'Degree = sum of exponents: $2 + 1 + 4$.',
          hint3: 'Distinct zeros are the different values $3, -1, 7$ — count how many different numbers, not their multiplicities.',
          explanation: '1) Exponent on $(x-7)$ is $4$.  2) $2 + 1 + 4 = 7$.  3) The distinct zeros are $3, -1, 7$ → $3$ of them.',
        },
      },
      {
        id: 'fta5-graph-dropdown',
        type: 'dropdown-select' as const,
        content: `**Cross, Touch, or Miss?** 🔽

For $p(x) = (x + 2)^2(x - 5)^3$, decide how the graph behaves at each real $x$-intercept, then finish with two quick counts.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = -2$ (multiplicity $2$), the graph:', options: ['touches and turns around', 'crosses the axis'] },
            { label: 'At $x = 5$ (multiplicity $3$), the graph:', options: ['touches and turns around', 'crosses the axis'] },
            { label: 'Total number of zeros of $p$ (with multiplicity):', options: ['$5$', '$2$', '$3$', '$6$'] },
            { label: 'The solutions of $x^2 = -64$ are:', options: ['$\\pm 8i$', '$\\pm 8$', '$8i$ only', '$-8$'] },
          ],
          correctAnswers: ['touches and turns around', 'crosses the axis', '$5$', '$\\pm 8i$'],
          hint1: 'Even multiplicity → the graph touches and bounces off the axis; odd multiplicity → it crosses.',
          hint2: 'Total zeros = sum of multiplicities = $2 + 3 = 5$, which equals the degree.',
          hint3: '$x = \\pm\\sqrt{-64} = \\pm 8i$, since $(8i)^2 = 64 i^2 = -64$.',
          explanation: '$x=-2$ has even multiplicity (touches), $x=5$ has odd multiplicity (crosses), and the degree $2+3=5$ gives exactly $5$ zeros counted with multiplicity. $x^2 = -64$ has the two non-real solutions $\\pm 8i$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'fundamental-theorem-algebra',
    sections: [
      {
        id: 'fta6-intro',
        type: 'text' as const,
        content: `# 🧩 Complex Zeros and the Fundamental Theorem of Algebra

**Part 6 of 7 — Conjugate Pairs & Building Polynomials from Zeros**

---

> 🔑 **The Pairing Rule:** For a polynomial with **real** coefficients, non-real zeros always come in **conjugate pairs**: if $a + bi$ is a zero, so is $a - bi$. This lets you account for every non-real zero, predict how many real zeros are possible, and build a polynomial from a list of zeros.`,
      },
      {
        id: 'fta6-conjugate',
        type: 'text' as const,
        content: `## Non-Real Zeros Come in Conjugate Pairs

The **conjugate** of $a + bi$ is $a - bi$: same real part, opposite sign on the imaginary part. You have already seen pairs appear automatically — the quadratic formula's $\\pm$ produced $-2 + 3i$ *and* $-2 - 3i$ in Part 5.

> If $p(x)$ has **real coefficients** and $a + bi$ (with $b \\ne 0$) is a zero, then its conjugate $a - bi$ is **also** a zero.

So non-real zeros are never alone — they arrive two at a time. Two consequences follow from the FTA count:

| Degree | Non-real zeros (always an even number) | Real zeros, counting multiplicity |
|--------|----------------------------------------|-----------------------------------|
| **Odd** ($3, 5, \\dots$) | $0, 2, 4, \\dots$ | an **odd** number — so **at least one** |
| **Even** ($2, 4, \\dots$) | $0, 2, 4, \\dots$ | an **even** number — possibly **zero** |

A degree-$3$ polynomial has $3$ or $1$ real zeros; a degree-$4$ polynomial has $4$, $2$ or $0$.

### Why odd degree forces a real zero — the graph view

An odd-degree polynomial has opposite end behavior on the two sides: for a positive leading coefficient, $\\lim_{x \\to -\\infty} p(x) = -\\infty$ and $\\lim_{x \\to \\infty} p(x) = \\infty$. A graph that is eventually below the axis on the left and above it on the right must cross the axis somewhere — that crossing is a real zero. An even-degree polynomial such as $x^2 + 1$ or $x^4 + 1$ has $\\lim_{x \\to \\pm\\infty} p(x) = \\infty$ on both sides and can stay above the axis forever, with no real zeros at all.

> 💡 A non-real zero has **no $x$-intercept**. Counting the $x$-intercepts (with multiplicity) and subtracting from the degree tells you how many non-real zeros a real-coefficient polynomial has — and that number is always even.`,
      },
      {
        id: 'fta6-from-roots',
        type: 'text' as const,
        content: `## Building a Polynomial from Its Zeros

Reverse the process: turn each zero $r$ into a factor $(x - r)$ and multiply.

### Example: zeros $2$ and $-3$

$$p(x) = (x - 2)(x + 3) = x^2 + x - 6$$

### A conjugate pair always multiplies to a real quadratic

For zeros $a + bi$ and $a - bi$, expand the two factors and use $i^2 = -1$:

$$\\big(x - (a + bi)\\big)\\big(x - (a - bi)\\big) = (x - a)^2 - (bi)^2 = (x - a)^2 + b^2 = x^2 - 2a\\,x + (a^2 + b^2)$$

| Piece | Value | Why |
|-------|-------|-----|
| Sum of the pair | $2a$ | the $bi$ terms cancel |
| Product of the pair | $a^2 + b^2$ | $(bi)^2 = -b^2$, so subtracting it adds $b^2$ |
| Quadratic factor | $x^2 - (\\text{sum})\\,x + (\\text{product})$ | expand the two factors |

The imaginary parts cancel, leaving **real** coefficients — exactly why conjugate pairs keep a real polynomial real.

### Worked Example 1: zeros $3i$ and $-3i$

Here $a = 0$ and $b = 3$: $(x - 3i)(x + 3i) = x^2 + 9$. ✅ Check: $x^2 = -9 \\Rightarrow x = \\pm 3i$.

### Worked Example 2: zeros $2 + i$ and $2 - i$

Sum $= 4$ and product $= 2^2 + 1^2 = 5$, so the factor is $x^2 - 4x + 5$.

### Worked Example 3: finishing a cubic

$p(x) = x^3 - 5x^2 + 11x - 15$ has real coefficients and $1 + 2i$ as a zero. Then $1 - 2i$ is also a zero, with sum $2$ and product $1^2 + 2^2 = 5$, so $x^2 - 2x + 5$ is a factor. Long division (Part 4) gives

$$p(x) = (x^2 - 2x + 5)(x - 3)$$

so the zeros are $1 + 2i$, $1 - 2i$ and $3$ — one real zero, as every cubic with real coefficients must have.`,
      },
      {
        id: 'fta6-conj-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A polynomial with real coefficients has $2 - 5i$ as a zero. Which value MUST also be a zero?',
              options: ['$2 + 5i$', '$-2 + 5i$', '$-(2 - 5i)$', '$-2 - 5i$'],
              correctAnswer: 0,
              explanation: 'Non-real zeros of a real-coefficient polynomial come in conjugate pairs, so $2 + 5i$ must also be a zero (keep the real part, flip the sign of the imaginary part). Flipping the real part, or both parts, gives a different number that need not be a zero.',
            },
            {
              question: 'A degree-$3$ polynomial with real coefficients has zeros $4i$ and $-4i$. What can you conclude about the third zero?',
              options: [
                'It must be real',
                'It must be $0$',
                'It must be non-real',
                'There is none',
              ],
              correctAnswer: 0,
              explanation: 'Degree $3$ means exactly $3$ zeros. Two are the conjugate pair $\\pm 4i$. The remaining single zero cannot pair with anything, so it must be real — but nothing forces it to be $0$.',
            },
            {
              question: 'A polynomial with real coefficients has $3 - i$ as a zero. Which quadratic must be a factor?',
              options: ['$x^2 - 6x + 10$', '$x^2 + 6x + 10$', '$x^2 - 6x + 8$', '$x^2 - 6x - 10$'],
              correctAnswer: 0,
              explanation: 'The pair $3 \\pm i$ has sum $6$ and product $3^2 + 1^2 = 10$, so the factor is $x^2 - 6x + 10$. A $+6x$ flips the sign of the sum, $8$ comes from $9 - 1$ (forgetting that $-(bi)^2 = +b^2$), and $-10$ has the product sign wrong.',
            },
          ],
        },
      },
      {
        id: 'fta6-pairs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Quadratic Factor** 🔽

A polynomial with real coefficients has $3 - 2i$ as a zero. Choose what follows at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Another zero must be:', options: ['$3 + 2i$', '$-3 - 2i$', '$-3 + 2i$', '$2 - 3i$'] },
            { label: 'Sum of the pair:', options: ['$6$', '$-6$', '$4i$', '$0$'] },
            { label: 'Product of the pair $(3 - 2i)(3 + 2i)$:', options: ['$13$', '$5$', '$9 - 4i$', '$-13$'] },
            { label: 'Quadratic factor:', options: ['$x^2 - 6x + 13$', '$x^2 + 6x + 13$', '$x^2 - 6x + 5$', '$x^2 - 6x - 13$'] },
          ],
          correctAnswers: ['$3 + 2i$', '$6$', '$13$', '$x^2 - 6x + 13$'],
          hint1: 'The conjugate keeps the real part and flips the sign of the imaginary part.',
          hint2: 'Sum $= (3 - 2i) + (3 + 2i) = 6$. Product $= a^2 + b^2 = 3^2 + 2^2 = 13$.',
          hint3: 'The factor is $x^2 - (\\text{sum})x + (\\text{product})$.',
          explanation: 'The conjugate $3 + 2i$ is also a zero. Their sum is $6$ and their product is $9 + 4 = 13$, so the quadratic factor is $x^2 - 6x + 13$.',
        },
      },
      {
        id: 'fta6-build-drill',
        type: 'input-boxes' as const,
        content: `**Build the Polynomial** 🧮

Multiply out each factored form and write it as $x^2 + bx + c$; enter $b$, then $c$.

**1)** Zeros $5$ and $-2$: expand $(x - 5)(x + 2)$. $b = \\,?$, $c = \\,?$
**2)** Conjugate pair $2i$ and $-2i$: expand $(x - 2i)(x + 2i)$. $b = \\,?$, $c = \\,?$
**3)** Double zero $x = 7$: expand $(x - 7)^2$. $b = \\,?$, $c = \\,?$`,
        exercise: {
          boxes: 6,
          correctAnswers: ['-3', '-10', '0', '4', '-14', '49'],
          hint1: '$(x-5)(x+2) = x^2 + 2x - 5x - 10 = x^2 - 3x - 10$.',
          hint2: '$(x-2i)(x+2i) = x^2 - (2i)^2 = x^2 - 4i^2 = x^2 + 4$ (since $i^2 = -1$); there is no $x$ term, so $b = 0$.',
          hint3: '$(x-7)^2 = x^2 - 2(7)x + 7^2 = x^2 - 14x + 49$.',
          explanation: '1) $x^2 - 3x - 10$: $b = -3$, $c = -10$.  2) $x^2 + 4$: $b = 0$, $c = 4$ — the conjugate pair erases the imaginary part.  3) $x^2 - 14x + 49$: $b = -14$, $c = 49$.',
        },
      },
      {
        id: 'fta6-conjugate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Conjugate Pairs** 🔽

Each polynomial has real coefficients. Match the given zero to its required partner and the consequence.`,
        exercise: {
          dropdowns: [
            { label: 'Zero $5 + i$ forces which partner zero?', options: ['$5 - i$', '$-5 + i$', '$1 + 5i$', '$-5 - i$'] },
            { label: 'Zero $-i$ forces which partner zero?', options: ['$i$', '$-i$', '$1$', '$0$'] },
            { label: 'A real-coefficient polynomial has zeros $2i$ and $3$. Which must also be a zero?', options: ['$-2i$', '$-3$', '$2$', '$3i$'] },
            { label: 'A degree-$5$ real-coefficient polynomial has at least how many real zeros?', options: ['$1$', '$0$', '$2$', '$5$'] },
          ],
          correctAnswers: ['$5 - i$', '$i$', '$-2i$', '$1$'],
          hint1: 'The conjugate keeps the real part and flips the sign of the imaginary part. $-i = 0 - i$, so its conjugate is $0 + i = i$.',
          hint2: 'Only NON-real zeros need a partner: $3$ is real and pairs with nothing, but $2i$ needs $-2i$.',
          hint3: 'Odd degree → odd number of zeros; non-real zeros pair off, so at least one zero must be real.',
          explanation: 'Conjugate of $5+i$ is $5-i$; conjugate of $-i$ is $i$; the partner of $2i$ is $-2i$ (the real zero $3$ needs none). An odd-degree real-coefficient polynomial must have at least one real zero since non-real zeros come in pairs.',
        },
      },
      {
        id: 'fta6-recap',
        type: 'text' as const,
        content: `## Putting It All Together

You can now account for **every** zero of a polynomial with real coefficients:

1. **Real** zeros you are given or can read from a graph or table, divided out by long division (Parts 3–4).
2. **Real irrational** zeros — e.g. from the quadratic formula on a leftover quadratic with $\\Delta > 0$.
3. **Non-real** zeros — from a leftover quadratic with $\\Delta < 0$, always in conjugate pairs (Parts 5–6), and never visible as $x$-intercepts.

The total count always equals the **degree**, exactly as the Fundamental Theorem of Algebra guarantees. Part 7 mixes everything into one final challenge.`,
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'fundamental-theorem-algebra',
    sections: [
      {
        id: 'fta7-intro',
        type: 'text' as const,
        content: `# 🧩 Complex Zeros and the Fundamental Theorem of Algebra

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You've built the full machine: zeros ↔ factors, a factoring toolkit, zeros from graphs and tables, long division, the Fundamental Theorem of Algebra, non-real zeros of quadratics, and conjugate pairs. Time to put it together.`,
      },
      {
        id: 'fta7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Tool | What it does |
|------|--------------|
| **Factor Theorem** | $(x - c)$ is a factor $\\iff p(c) = 0$ |
| **Graph / table** | An $x$-intercept $(a, 0)$ or a table output $p(a) = 0$ gives the factor $(x - a)$ |
| **Polynomial long division** | Divides out a known factor $(x - c)$ (synthetic division is an optional shortcut) |
| **Fundamental Theorem of Algebra** | Degree $n$ → exactly $n$ complex zeros (with multiplicity) |
| **Multiplicity** | Odd → the graph crosses at that zero; even → it touches and turns |
| **Negative discriminant** | $b^2 - 4ac < 0$ → two non-real zeros $a \\pm bi$, no $x$-intercepts; finish with $i^2 = -1$ |
| **Conjugate pairs** | Real coefficients: $a + bi$ is a zero $\\Rightarrow a - bi$ is too; their factor is $x^2 - 2ax + (a^2 + b^2)$ |
| **Odd degree** | Real coefficients → at least one real zero; even degree may have none |

> ⚠️ **Strategy reminder:** GCF first → special patterns / trinomials / quadratic form → for higher degree, take the zero the graph, table, or problem gives you, divide it out, and repeat until you reach a quadratic you can finish — with real or non-real zeros.`,
      },
      {
        id: 'fta7-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Apply the right tool to each.`,
        exercise: {
          dropdowns: [
            { label: 'Number of complex zeros of a degree-$6$ polynomial (with multiplicity):', options: ['exactly $6$', 'at most $6$', 'exactly $3$', 'depends on coefficients'] },
            { label: 'Complete factorization of $x^2 - 49$:', options: ['$(x-7)(x+7)$', '$(x-7)^2$', '$(x-49)(x+1)$', '$(x+7)^2$'] },
            { label: 'If $p(x)$ has real coefficients and the zero $1 + i$, another zero is:', options: ['$1 - i$', '$-1 + i$', '$-1 - i$', '$1 + i$ only'] },
            { label: 'Zeros of $x^2 + 25$:', options: ['$\\pm 5i$', '$\\pm 5$', '$5i$ only', '$\\pm 25i$'] },
          ],
          correctAnswers: ['exactly $6$', '$(x-7)(x+7)$', '$1 - i$', '$\\pm 5i$'],
          hint1: 'The Fundamental Theorem of Algebra makes degree an exact zero count, not just an upper bound.',
          hint2: '$x^2 - 49 = x^2 - 7^2$, a difference of squares; $x^2 + 25$ is a SUM of squares, so $x^2 = -25$.',
          hint3: 'Conjugate of $1 + i$ keeps the real part and flips the imaginary sign: $1 - i$.',
          explanation: 'Degree $6$ → exactly $6$ complex zeros; $x^2-49 = (x-7)(x+7)$; the conjugate of $1+i$ is $1-i$; $x^2 = -25$ gives $x = \\pm 5i$.',
        },
      },
      {
        id: 'fta7-mixed2',
        type: 'input-boxes' as const,
        content: `**Full Factorization Challenge** 🧮

You're factoring $p(x) = x^3 - 4x^2 + x + 6$ completely.

**1)** Test $x = -1$. Compute $p(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6$. The value is: $\\,?$
**2)** Since that confirms $(x + 1)$ is a factor, dividing gives the quotient $x^2 - 5x + 6$. Enter its larger zero: $\\,?$
**3)** How many **distinct real** zeros does $p(x)$ have in total? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '3', '3'],
          hint1: '$(-1)^3 = -1$, $-4(-1)^2 = -4$, then $-1 + 6$. Add: $-1 - 4 - 1 + 6 = 0$.',
          hint2: '$x^2 - 5x + 6 = (x - 2)(x - 3)$: two numbers multiplying to $6$, adding to $-5$ → $-2$ and $-3$. The zeros are $2$ and $3$.',
          hint3: 'Full factorization is $(x+1)(x-2)(x-3)$, so the zeros are $-1, 2, 3$ — count them.',
          explanation: '$p(-1) = 0$, so $(x+1)$ is a factor. The quotient $x^2 - 5x + 6 = (x-2)(x-3)$ has zeros $2$ and $3$ (larger: $3$), giving $p(x) = (x+1)(x-2)(x-3)$ with $3$ distinct real zeros: $-1, 2, 3$.',
        },
      },
      {
        id: 'fta7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all four to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'By the Factor Theorem, if $(x - 6)$ is a factor of $p(x)$, then which statement is true?',
              options: ['$p(6) = 0$', '$p(-6) = 0$', '$p(0) = -6$', '$p(6) \\ne 0$'],
              correctAnswer: 0,
              explanation: '$(x - c)$ is a factor exactly when $p(c) = 0$. Here $c = 6$, so $p(6) = 0$. The value $p(-6)$ belongs to the factor $(x + 6)$, and $p(0)$ is the $y$-intercept.',
            },
            {
              question: 'A polynomial with real coefficients has degree $4$ and zeros $3i$ and $-3i$. Which is possible for the remaining zeros?',
              options: [
                'Two more real zeros',
                'One more real zero',
                'Three non-real zeros',
                'No more zeros at all',
              ],
              correctAnswer: 0,
              explanation: 'Degree $4$ means exactly $4$ zeros. Two are $\\pm 3i$, leaving $2$ more. Since non-real zeros pair up, the remaining two are either two real zeros or another conjugate pair — "two more real zeros" is possible, while a single leftover zero, three more zeros, or none at all breaks the count of $4$.',
            },
            {
              question: 'For $p(x) = 2x^3 + x^2 - 8x - 4$, you are told that $p(2) = 0$. Dividing by $(x - 2)$ leaves $2x^2 + 5x + 2$. What are all the zeros of $p$?',
              options: [
                '$2,\\ -2,\\ -\\frac{1}{2}$',
                '$2,\\ 2,\\ \\frac{1}{2}$',
                '$-2,\\ 2,\\ \\frac{1}{2}$',
                '$-2,\\ -2,\\ -\\frac{1}{2}$',
              ],
              correctAnswer: 0,
              explanation: 'The quotient factors as $2x^2 + 5x + 2 = (2x + 1)(x + 2)$, giving zeros $-\\frac{1}{2}$ and $-2$, plus the given zero $2$. Taking $x = \\frac{1}{2}$ from the factor $(2x + 1)$ flips its sign, repeating $2$ ignores the quotient entirely, and the given zero is $2$ (from $p(2) = 0$), not $-2$.',
            },
            {
              question: 'The solutions of $x^2 + 2x + 10 = 0$ are:',
              options: ['$-1 \\pm 3i$', '$1 \\pm 3i$', '$\\pm 3i$', '$-1 \\pm 3$'],
              correctAnswer: 0,
              explanation: '$\\Delta = 4 - 40 = -36$; $x = \\frac{-2 \\pm \\sqrt{-36}}{2} = \\frac{-2 \\pm 6i}{2} = -1 \\pm 3i$. Forgetting the minus on $-b$ gives $1 \\pm 3i$, dropping the $\\frac{-b}{2a}$ term leaves $\\pm 3i$ alone, and treating $\\sqrt{-36}$ as $6$ loses the $i$ — but a negative discriminant always produces non-real zeros.',
            },
          ],
        },
      },
    ],
  },
]
