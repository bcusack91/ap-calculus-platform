import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Fundamental Theorem of Algebra and Factoring (AP Precalculus).
 * Registry key / DB Topic.slug: 'fundamental-theorem-algebra'.
 * 7 parts, gold-standard structure: zeros & the factor connection → core factoring
 * techniques → the Rational Root Theorem → synthetic division to peel off factors →
 * the Fundamental Theorem of Algebra (counting roots with multiplicity & complex zeros) →
 * complex-conjugate pairs + building polynomials from their roots → mixed practice + exit quiz.
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
        content: `# 🧩 The Fundamental Theorem of Algebra & Factoring

**Part 1 of 7 — Zeros, Factors & the Connection Between Them**

---

### Topics in This Part

| Section |
|---------|
| What Is a Polynomial Zero? |
| The Factor Theorem |
| Reading Zeros Off a Factored Polynomial |
| Going Backward: Factors from Zeros |

> 🔑 **Key Concept:** A number $c$ is a **zero** of a polynomial $p(x)$ exactly when $(x - c)$ is a **factor** of $p(x)$. Factoring and finding zeros are two views of the *same* idea — and that idea drives this entire lesson.`,
      },
      {
        id: 'fta1-zero',
        type: 'text' as const,
        content: `## What Is a Polynomial Zero?

A **polynomial** is a sum of terms $a_n x^n + \\dots + a_1 x + a_0$ with whole-number exponents. A **zero** (or **root**) of $p(x)$ is any value $c$ that makes the polynomial equal $0$:

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

- **Part 2** builds your factoring toolkit (GCF, grouping, quadratic patterns).
- **Parts 3–4** find zeros you *can't* spot by eye, using the Rational Root Theorem and division.
- **Parts 5–6** count every zero — real *and* complex — using the **Fundamental Theorem of Algebra**.

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
        content: `# 🧩 The Fundamental Theorem of Algebra & Factoring

**Part 2 of 7 — Core Factoring Techniques**

---

> 🔑 **Strategy:** Before any fancy theorem, *always* try these in order: (1) pull out a **GCF**, (2) recognize a **special pattern**, (3) factor a **trinomial**, (4) try **grouping**. This part trains all four.`,
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
| Sum of cubes: $a^3 + b^3$ | $(a + b)(a^2 - ab + b^2)$ |
| Difference of cubes: $a^3 - b^3$ | $(a - b)(a^2 + ab + b^2)$ |

### Example (difference of squares)

$$x^2 - 16 = x^2 - 4^2 = (x - 4)(x + 4)$$

> ⚠️ A **sum** of squares like $x^2 + 16$ does **not** factor over the real numbers — but it *does* factor with complex numbers (Part 6).`,
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
        content: `## Step 4 — Factoring by Grouping

For **four-term** polynomials, group in pairs and pull a GCF from each:

### Example: $x^3 + 3x^2 + 2x + 6$

$$\\underbrace{x^3 + 3x^2}_{x^2(x + 3)} + \\underbrace{2x + 6}_{2(x + 3)} = x^2(x + 3) + 2(x + 3)$$

Both pieces share $(x + 3)$, so factor it out:

$$= (x + 3)(x^2 + 2)$$

> ✅ **Check:** $(x+3)(x^2+2) = x^3 + 2x + 3x^2 + 6 = x^3 + 3x^2 + 2x + 6 \\;\\checkmark$

The key signal that grouping worked: **both** groups leave the *same* binomial behind.`,
      },
      {
        id: 'fta2-grouping-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Factor by grouping: $x^3 - 4x^2 + 3x - 12$.',
              options: ['$(x - 4)(x^2 + 3)$', '$(x + 4)(x^2 - 3)$', '$(x - 4)(x^2 - 3)$', '$(x^2 - 4)(x + 3)$'],
              correctAnswer: 0,
              explanation: '$x^2(x - 4) + 3(x - 4) = (x - 4)(x^2 + 3)$. Both groups leave $(x-4)$, and the leftover terms form $x^2 + 3$.',
            },
            {
              question: 'Which expression does NOT factor over the real numbers?',
              options: ['$x^2 - 16$', '$x^2 + 16$', '$x^2 - 7x + 12$', '$x^2 + 8x + 16$'],
              correctAnswer: 1,
              explanation: '$x^2 + 16$ is a SUM of squares — it has no real factorization (its zeros are $\\pm 4i$). The other three factor as $(x-4)(x+4)$, $(x-3)(x-4)$, and $(x+4)^2$.',
            },
          ],
        },
      },
      {
        id: 'fta2-factor-drill',
        type: 'input-boxes' as const,
        content: `**Factoring Drill** 🧮

Factor each. Enter the answer with **no spaces**, in the exact form shown.

**1)** $x^2 - 25$. Enter as \`(x-5)(x+5)\`: $\\,?$
**2)** $x^2 + 9x + 20$. Enter as \`(x+a)(x+b)\` with the **smaller** number first: $\\,?$
**3)** Factor out the GCF of $5x^3 - 10x^2$. Enter as \`5x^2(x-2)\`: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['(x-5)(x+5)', '(x+4)(x+5)', '5x^2(x-2)'],
          hint1: '$x^2 - 25 = x^2 - 5^2$, a difference of squares.',
          hint2: 'For $x^2+9x+20$: two numbers multiplying to $20$, adding to $9$ → $4$ and $5$.',
          hint3: 'GCF of $5x^3$ and $10x^2$ is $5x^2$: $5x^3 - 10x^2 = 5x^2(x - 2)$.',
          explanation: '1) $(x-5)(x+5)$.  2) $(x+4)(x+5)$ since $4\\cdot5=20$, $4+5=9$.  3) $5x^2(x-2)$.',
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
        content: `# 🧩 The Fundamental Theorem of Algebra & Factoring

**Part 3 of 7 — The Rational Root Theorem**

---

> 🔑 **The Problem:** A cubic like $2x^3 - 3x^2 - 11x + 6$ won't factor by inspection. The **Rational Root Theorem** hands you a short list of *candidate* rational zeros to test — turning guessing into a finite search.`,
      },
      {
        id: 'fta3-statement',
        type: 'text' as const,
        content: `## The Rational Root Theorem

For a polynomial with **integer** coefficients

$$p(x) = a_n x^n + \\dots + a_1 x + a_0,$$

every **rational** zero has the form

$$\\frac{p}{q} \\quad\\text{where}\\quad p \\mid a_0 \\;(\\text{the constant}) \\quad\\text{and}\\quad q \\mid a_n \\;(\\text{the leading coefficient}).$$

In words: $p$ is a factor of the **constant term**, and $q$ is a factor of the **leading coefficient**.

> ⚠️ This lists every *possible* rational zero. It does **not** guarantee any of them actually work — you still have to test. And it says nothing about irrational or complex zeros.`,
      },
      {
        id: 'fta3-build-list',
        type: 'text' as const,
        content: `## Building the Candidate List

### Example: $p(x) = 2x^3 - 3x^2 - 11x + 6$

- Constant term $a_0 = 6$ → factors $p$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$
- Leading coefficient $a_n = 2$ → factors $q$: $\\pm 1, \\pm 2$

Form every $\\dfrac{p}{q}$:

$$\\pm 1,\\; \\pm 2,\\; \\pm 3,\\; \\pm 6,\\; \\pm \\tfrac{1}{2},\\; \\pm \\tfrac{3}{2}$$

That's the **complete** candidate list. Now test one — try $x = 3$:

$$p(3) = 2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0 \\;\\checkmark$$

So $x = 3$ is a genuine zero, and $(x - 3)$ is a factor.

> 💡 Test the small integers ($\\pm 1, \\pm 2$) first — they're the easiest to evaluate and often work.`,
      },
      {
        id: 'fta3-candidate-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $p(x) = x^3 + 2x^2 - 5x - 6$, which is the COMPLETE list of possible rational zeros?',
              options: [
                '$\\pm 1, \\pm 2, \\pm 3, \\pm 6$',
                '$\\pm 1, \\pm 6$',
                '$\\pm 1, \\pm 2, \\pm 3$',
                '$1, 2, 3, 6$',
              ],
              correctAnswer: 0,
              explanation: 'Leading coefficient is $1$, so $q = \\pm 1$. Constant is $-6$, so $p = \\pm 1, \\pm 2, \\pm 3, \\pm 6$. Each $p/q$ is just $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Both signs must be included.',
            },
            {
              question: 'For $p(x) = 3x^2 + x - 2$, which fraction is a possible rational zero that is NOT an integer?',
              options: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{4}$', '$\\frac{3}{2}$'],
              correctAnswer: 1,
              explanation: 'Constant $-2$ gives $p \\in \\{\\pm1, \\pm2\\}$; leading $3$ gives $q \\in \\{\\pm1, \\pm3\\}$. Non-integer candidates are $\\pm\\frac{1}{3}, \\pm\\frac{2}{3}$. Only $\\frac{2}{3}$ appears in the options.',
            },
          ],
        },
      },
      {
        id: 'fta3-list-drill',
        type: 'input-boxes' as const,
        content: `**Identify $p$ and $q$** 🧮

For $p(x) = 4x^3 + x^2 - 7x + 5$, the rational-zero candidates are $\\dfrac{p}{q}$.

**1)** The values of $p$ are the positive factors of the constant term. The constant term is: $\\,?$
**2)** The values of $q$ are the positive factors of the leading coefficient. The leading coefficient is: $\\,?$
**3)** The largest possible *denominator* $q$ in any candidate $\\frac{p}{q}$ is: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '4', '4'],
          hint1: 'The constant term is the term with no $x$: that is $+5$.',
          hint2: 'The leading coefficient multiplies the highest power $x^3$: that is $4$.',
          hint3: '$q$ is a factor of the leading coefficient $4$. Its factors are $1, 2, 4$ — the largest is $4$.',
          explanation: 'Constant $= 5$ (so $p \\in \\{1,5\\}$); leading coefficient $= 4$ (so $q \\in \\{1,2,4\\}$); the largest denominator is $4$, giving candidates like $\\pm\\frac{1}{4}, \\pm\\frac{5}{4}$.',
        },
      },
      {
        id: 'fta3-test-dropdown',
        type: 'dropdown-select' as const,
        content: `**Test the Candidates** 🔽

For $p(x) = x^3 + 2x^2 - 5x - 6$, evaluate $p$ at each candidate to decide if it's an actual zero.`,
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

The Rational Root Theorem gives you a **zero** to test. Once you confirm a zero $c$, the Factor Theorem says $(x - c)$ divides $p(x)$ evenly. But dividing it out by hand is slow.

In **Part 4** you'll learn **synthetic division** — a fast way to divide out $(x - c)$ and collapse the polynomial to a smaller, easier one. Chaining these tools lets you fully factor cubics and quartics.`,
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
        content: `# 🧩 The Fundamental Theorem of Algebra & Factoring

**Part 4 of 7 — Synthetic Division & Peeling Off Factors**

---

> 🔑 **The Payoff:** Found a zero $c$? **Synthetic division** divides $p(x)$ by $(x - c)$ in seconds, leaving a lower-degree quotient you can finish factoring. This is how cubics and quartics get fully cracked.`,
      },
      {
        id: 'fta4-how',
        type: 'text' as const,
        content: `## How Synthetic Division Works

To divide $p(x)$ by $(x - c)$:

1. Write $c$ on the left and the **coefficients** of $p(x)$ in a row (include $0$ for any missing power).
2. Bring down the first coefficient.
3. Multiply by $c$, add to the next coefficient, and repeat.
4. The last number is the **remainder**; the others are the **quotient** coefficients.

### Example: divide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$, so $c = 1$

$$
\\begin{array}{c|cccc}
1 & 1 & -6 & 11 & -6 \\\\
  &   & 1 & -5 & 6 \\\\
\\hline
  & 1 & -5 & 6 & 0
\\end{array}
$$

Read the bottom row: quotient $x^2 - 5x + 6$, **remainder $0$**.

> ✅ Remainder $0$ confirms $(x - 1)$ is a factor (and $x = 1$ is a zero). So $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$.`,
      },
      {
        id: 'fta4-remainder',
        type: 'text' as const,
        content: `## The Remainder Theorem

The remainder from dividing $p(x)$ by $(x - c)$ equals $p(c)$:

$$\\text{remainder} = p(c)$$

That's why a remainder of $0$ means $c$ is a zero — it's the Factor Theorem in action.

### Finish the Factorization

From the example, the quotient was $x^2 - 5x + 6$, which factors further:

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

So the **complete factorization** is

$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3),$$

with zeros $x = 1, 2, 3$.

> 💡 **The full pipeline:** Rational Root Theorem finds a zero → synthetic division peels off its factor → factor (or repeat on) the smaller quotient.`,
      },
      {
        id: 'fta4-remainder-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Dividing $p(x)$ by $(x - 4)$ leaves a remainder of $7$. By the Remainder Theorem, what is $p(4)$?',
              options: ['$0$', '$4$', '$7$', '$-7$'],
              correctAnswer: 2,
              explanation: 'The Remainder Theorem says the remainder of $p(x) \\div (x - c)$ equals $p(c)$. Here $c = 4$, so $p(4) = 7$. (Since it is not $0$, $(x-4)$ is not a factor.)',
            },
            {
              question: 'Synthetic division of $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ gives quotient $x^2 - 5x + 6$ and remainder $0$. What is the complete factorization?',
              options: [
                '$(x - 1)(x - 2)(x - 3)$',
                '$(x - 1)(x + 2)(x + 3)$',
                '$(x + 1)(x - 2)(x - 3)$',
                '$(x - 1)(x^2 - 5x + 6)$ — cannot factor further',
              ],
              correctAnswer: 0,
              explanation: 'The quotient $x^2 - 5x + 6 = (x-2)(x-3)$, so the full factorization is $(x-1)(x-2)(x-3)$ with zeros $1, 2, 3$.',
            },
          ],
        },
      },
      {
        id: 'fta4-synth-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk the Division** 🔽

You're dividing $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$. The coefficients are $1,\\ -6,\\ 11,\\ -6$ and $c = 1$. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Bring down the first coefficient:', options: ['$1$', '$-6$', '$0$', '$11$'] },
            { label: 'Multiply by $c=1$ and add to $-6$:', options: ['$-5$', '$-6$', '$-7$', '$5$'] },
            { label: 'Multiply $-5$ by $1$ and add to $11$:', options: ['$6$', '$16$', '$-6$', '$11$'] },
            { label: 'The final remainder is:', options: ['$0$', '$6$', '$-6$', '$1$'] },
          ],
          correctAnswers: ['$1$', '$-5$', '$6$', '$0$'],
          hint1: 'The very first step is always to bring down the leading coefficient unchanged: $1$.',
          hint2: '$1 \\times 1 = 1$, then $-6 + 1 = -5$.',
          hint3: '$-5 \\times 1 = -5$, then $11 + (-5) = 6$; finally $6 \\times 1 = 6$ and $-6 + 6 = 0$.',
          explanation: 'The bottom row is $1, -5, 6, 0$: quotient $x^2 - 5x + 6$ with remainder $0$, confirming $(x-1)$ is a factor.',
        },
      },
      {
        id: 'fta4-synth-drill',
        type: 'input-boxes' as const,
        content: `**Synthetic Division Drill** 🧮

Divide $x^3 + 2x^2 - 5x - 6$ by $(x + 1)$, so $c = -1$. The coefficients are $1, 2, -5, -6$.

**1)** Bring down the $1$, multiply by $-1$, add to $2$. The result is: $\\,?$
**2)** Continuing, the next bottom-row entry (added to $-5$) is: $\\,?$
**3)** The remainder is: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-6', '0'],
          hint1: '$1 \\times (-1) = -1$, then $2 + (-1) = 1$.',
          hint2: 'Take the $1$ you just got: $1 \\times (-1) = -1$, then $-5 + (-1) = -6$.',
          hint3: 'Now $-6 \\times (-1) = 6$, then $-6 + 6 = 0$ — the remainder.',
          explanation: 'Bottom row: $1, 1, -6, 0$. Quotient $x^2 + x - 6 = (x+3)(x-2)$; remainder $0$, so $x^3+2x^2-5x-6 = (x+1)(x+3)(x-2)$.',
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
        content: `# 🧩 The Fundamental Theorem of Algebra & Factoring

**Part 5 of 7 — The Fundamental Theorem of Algebra**

---

> 🔑 **The Big Theorem:** Every polynomial of degree $n \\ge 1$ has **exactly $n$ roots** — *if* you count complex roots and count repeated roots by their multiplicity. No degree-$n$ polynomial is ever "missing" a root.`,
      },
      {
        id: 'fta5-statement',
        type: 'text' as const,
        content: `## The Fundamental Theorem of Algebra (FTA)

> **FTA:** Every polynomial of degree $n \\ge 1$ with complex coefficients has **at least one complex root**.

Applying it repeatedly (peel off a root, repeat on the quotient) gives the headline consequence:

$$\\textbf{A degree-}n\\textbf{ polynomial has exactly }n\\textbf{ complex roots, counted with multiplicity.}$$

Equivalently, over the complex numbers it factors completely into linear pieces:

$$p(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$$

Here "complex" *includes* the real numbers (a real number is a complex number with zero imaginary part), so real roots count too.

> 💡 Degree is a **promise**: a quartic ($n = 4$) has exactly $4$ roots — some may be real, some complex, some repeated, but the total is always $4$.`,
      },
      {
        id: 'fta5-multiplicity',
        type: 'text' as const,
        content: `## Multiplicity — Counting Repeats

A root's **multiplicity** is how many times its factor appears.

### Example

$$p(x) = (x - 2)^3(x + 5)$$

- $x = 2$ has multiplicity $3$
- $x = -5$ has multiplicity $1$

**Total roots:** $3 + 1 = 4$, matching the degree $4$. ✓

### Graph behavior of real roots

| Multiplicity | At that $x$-intercept the graph… |
|--------------|----------------------------------|
| **Odd** (1, 3, …) | **crosses** the $x$-axis |
| **Even** (2, 4, …) | **touches** and turns around (bounces) |

> 💡 A double root ($x-r)^2$ touches the axis like the vertex of a parabola; a triple root flattens as it crosses.`,
      },
      {
        id: 'fta5-count-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Counting multiplicity, how many roots does a degree-$5$ polynomial have over the complex numbers?',
              options: ['At most $5$', 'Exactly $5$', 'Exactly $4$', 'It depends on the coefficients'],
              correctAnswer: 1,
              explanation: 'By the FTA, a degree-$n$ polynomial has exactly $n$ complex roots counted with multiplicity. For $n = 5$, that is exactly $5$.',
            },
            {
              question: 'For $p(x) = (x - 1)^2(x + 4)^3$, what is the degree and the multiplicity of the root $x = -4$?',
              options: [
                'Degree $5$; multiplicity $3$',
                'Degree $6$; multiplicity $4$',
                'Degree $5$; multiplicity $2$',
                'Degree $2$; multiplicity $3$',
              ],
              correctAnswer: 0,
              explanation: 'Add exponents for the degree: $2 + 3 = 5$. The factor $(x+4)$ has exponent $3$, so $x = -4$ has multiplicity $3$.',
            },
            {
              question: 'At which kind of root does the graph TOUCH the $x$-axis and turn around without crossing?',
              options: ['A root of multiplicity $1$', 'A root of multiplicity $3$', 'A root of even multiplicity', 'A complex root'],
              correctAnswer: 2,
              explanation: 'Even multiplicity (2, 4, …) makes the graph touch and bounce; odd multiplicity makes it cross. Complex roots are not $x$-intercepts at all.',
            },
          ],
        },
      },
      {
        id: 'fta5-mult-drill',
        type: 'input-boxes' as const,
        content: `**Multiplicity & Degree Drill** 🧮

Consider $p(x) = (x - 3)^2(x + 1)(x - 7)^4$.

**1)** The multiplicity of the root $x = 7$ is: $\\,?$
**2)** The degree of $p(x)$ is (add the exponents): $\\,?$
**3)** The number of **distinct** real roots is: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '3'],
          hint1: 'The exponent on $(x - 7)$ is the multiplicity of $x = 7$.',
          hint2: 'Degree = sum of exponents: $2 + 1 + 4$.',
          hint3: 'Distinct roots are the different values $3, -1, 7$ — count how many different numbers, not their multiplicities.',
          explanation: '1) Exponent on $(x-7)$ is $4$.  2) $2 + 1 + 4 = 7$.  3) The distinct roots are $3, -1, 7$ → $3$ of them.',
        },
      },
      {
        id: 'fta5-graph-dropdown',
        type: 'dropdown-select' as const,
        content: `**Cross or Touch?** 🔽

For $p(x) = (x + 2)^2(x - 5)^3$, decide how the graph behaves at each real $x$-intercept.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = -2$ (multiplicity $2$), the graph:', options: ['touches and turns around', 'crosses the axis'] },
            { label: 'At $x = 5$ (multiplicity $3$), the graph:', options: ['touches and turns around', 'crosses the axis'] },
            { label: 'Total number of roots (with multiplicity):', options: ['$5$', '$2$', '$3$', '$6$'] },
          ],
          correctAnswers: ['touches and turns around', 'crosses the axis', '$5$'],
          hint1: 'Even multiplicity → the graph touches and bounces off the axis.',
          hint2: 'Odd multiplicity → the graph crosses the axis.',
          hint3: 'Total roots = sum of multiplicities = $2 + 3 = 5$, which equals the degree.',
          explanation: '$x=-2$ has even multiplicity (touches), $x=5$ has odd multiplicity (crosses), and the degree $2+3=5$ gives exactly $5$ roots counted with multiplicity.',
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
        content: `# 🧩 The Fundamental Theorem of Algebra & Factoring

**Part 6 of 7 — Complex Conjugate Roots & Building Polynomials**

---

> 🔑 **The Pairing Rule:** For a polynomial with **real** coefficients, complex roots always come in **conjugate pairs**: if $a + bi$ is a root, so is $a - bi$. This lets you account for non-real roots and build polynomials from a known root set.`,
      },
      {
        id: 'fta6-conjugate',
        type: 'text' as const,
        content: `## The Complex Conjugate Root Theorem

> If $p(x)$ has **real coefficients** and $a + bi$ (with $b \\ne 0$) is a root, then its conjugate $a - bi$ is **also** a root.

So non-real roots are never lonely — they arrive two at a time. A direct consequence:

$$\\textbf{A polynomial of odd degree with real coefficients has at least one real root.}$$

(There's an odd number of roots, complex ones pair off evenly, so at least one must be real.)

### Why $x^2 + 1$ has no real zeros

$$x^2 + 1 = 0 \\;\\Rightarrow\\; x^2 = -1 \\;\\Rightarrow\\; x = \\pm i$$

The roots are $i$ and $-i$ — a conjugate pair. Over the complex numbers it factors as $(x - i)(x + i)$.

> 💡 Recall $i = \\sqrt{-1}$, so $i^2 = -1$.`,
      },
      {
        id: 'fta6-from-roots',
        type: 'text' as const,
        content: `## Building a Polynomial from Its Roots

Reverse the process: turn each root $r$ into a factor $(x - r)$ and multiply.

### Example: build a polynomial with roots $2$ and $-3$

$$p(x) = (x - 2)(x + 3) = x^2 + x - 6$$

### Example: a conjugate pair — roots $3i$ and $-3i$

Multiply the conjugate factors using $(x - 3i)(x + 3i)$, a difference of squares:

$$(x - 3i)(x + 3i) = x^2 - (3i)^2 = x^2 - 9i^2 = x^2 + 9$$

The imaginary parts cancel, leaving **real** coefficients — exactly why conjugate pairs keep a real polynomial real.

> ✅ **Check:** $x^2 + 9 = 0 \\Rightarrow x^2 = -9 \\Rightarrow x = \\pm 3i$. ✓`,
      },
      {
        id: 'fta6-conj-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A polynomial with real coefficients has $2 - 5i$ as a root. Which value MUST also be a root?',
              options: ['$2 + 5i$', '$-2 + 5i$', '$5 - 2i$', '$-2 - 5i$'],
              correctAnswer: 0,
              explanation: 'The Complex Conjugate Root Theorem says the conjugate $2 + 5i$ must also be a root (keep the real part, flip the sign of the imaginary part).',
            },
            {
              question: 'A degree-$3$ polynomial with real coefficients has roots $4i$ and $-4i$. What can you conclude about the third root?',
              options: [
                'It must be real',
                'It must be $0$',
                'It must be another complex number',
                'There is no third root',
              ],
              correctAnswer: 0,
              explanation: 'Degree $3$ means exactly $3$ roots. Two are the conjugate pair $\\pm 4i$. The remaining single root cannot pair with anything, so it must be real.',
            },
          ],
        },
      },
      {
        id: 'fta6-build-drill',
        type: 'input-boxes' as const,
        content: `**Build the Polynomial** 🧮

Multiply out each factored form into standard form $x^2 + bx + c$ (monic, leading coefficient $1$).

**1)** Roots $5$ and $-2$: expand $(x - 5)(x + 2)$. Enter as \`x^2-3x-10\`: $\\,?$
**2)** Conjugate roots $2i$ and $-2i$: expand $(x - 2i)(x + 2i)$. Enter as \`x^2+4\`: $\\,?$
**3)** Double root $x = 7$: expand $(x - 7)^2$. Enter as \`x^2-14x+49\`: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['x^2-3x-10', 'x^2+4', 'x^2-14x+49'],
          hint1: '$(x-5)(x+2) = x^2 + 2x - 5x - 10 = x^2 - 3x - 10$.',
          hint2: '$(x-2i)(x+2i) = x^2 - (2i)^2 = x^2 - 4i^2 = x^2 + 4$ (since $i^2 = -1$).',
          hint3: '$(x-7)^2 = x^2 - 2(7)x + 7^2 = x^2 - 14x + 49$.',
          explanation: '1) $x^2 - 3x - 10$.  2) $x^2 + 4$ — the conjugate pair erases the imaginary part.  3) $x^2 - 14x + 49$.',
        },
      },
      {
        id: 'fta6-conjugate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Conjugate Pairs** 🔽

Each polynomial has real coefficients. Match the given non-real root to its required partner and the consequence.`,
        exercise: {
          dropdowns: [
            { label: 'Root $3 + 2i$ forces which partner root?', options: ['$3 - 2i$', '$-3 + 2i$', '$2 + 3i$', '$-3 - 2i$'] },
            { label: 'Root $-i$ forces which partner root?', options: ['$i$', '$-i$', '$1$', '$0$'] },
            { label: 'A degree-$5$ real polynomial has at least how many real roots?', options: ['$1$', '$0$', '$2$', '$5$'] },
          ],
          correctAnswers: ['$3 - 2i$', '$i$', '$1$'],
          hint1: 'The conjugate keeps the real part and flips the sign of the imaginary part.',
          hint2: '$-i = 0 - i$; its conjugate is $0 + i = i$.',
          hint3: 'Odd degree → odd number of roots; complex roots pair off, so at least one root must be real.',
          explanation: 'Conjugate of $3+2i$ is $3-2i$; conjugate of $-i$ is $i$. An odd-degree real polynomial must have at least one real root since complex roots come in pairs.',
        },
      },
      {
        id: 'fta6-recap',
        type: 'text' as const,
        content: `## Putting It All Together

You can now account for **every** root of a real polynomial:

1. **Real rational** roots — found via the Rational Root Theorem + synthetic division (Parts 3–4).
2. **Real irrational** roots — e.g. from the quadratic formula on a leftover quadratic.
3. **Complex** roots — always in conjugate pairs (this part).

Total count always equals the **degree**, exactly as the Fundamental Theorem of Algebra guarantees. Part 7 mixes everything into one final challenge.`,
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
        content: `# 🧩 The Fundamental Theorem of Algebra & Factoring

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You've built the full machine: zeros ↔ factors, a factoring toolkit, the Rational Root Theorem, synthetic division, the Fundamental Theorem of Algebra, and conjugate pairs. Time to put it together.`,
      },
      {
        id: 'fta7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Tool | What it does |
|------|--------------|
| **Factor Theorem** | $(x - c)$ is a factor $\\iff p(c) = 0$ |
| **Rational Root Theorem** | Rational zeros are $\\frac{p}{q}$, $p \\mid$ constant, $q \\mid$ leading coeff. |
| **Remainder Theorem** | Remainder of $p(x) \\div (x-c)$ equals $p(c)$ |
| **Synthetic Division** | Quickly divides out a known factor $(x - c)$ |
| **Fundamental Theorem of Algebra** | Degree $n$ → exactly $n$ complex roots (with multiplicity) |
| **Conjugate Root Theorem** | Real coeffs: $a+bi$ is a root $\\Rightarrow a-bi$ is too |

> ⚠️ **Strategy reminder:** GCF first → special patterns / trinomials → for higher degree, find a zero (RRT), divide it out (synthetic), repeat until you reach a quadratic you can finish.`,
      },
      {
        id: 'fta7-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Apply the right tool to each.`,
        exercise: {
          dropdowns: [
            { label: 'Number of complex roots of a degree-$6$ polynomial (with multiplicity):', options: ['exactly $6$', 'at most $6$', 'exactly $3$', 'depends on coefficients'] },
            { label: 'Complete factorization of $x^2 - 49$:', options: ['$(x-7)(x+7)$', '$(x-7)^2$', '$(x-49)(x+1)$', '$(x+7)^2$'] },
            { label: 'If $p(x)$ has real coeffs and root $1 + i$, another root is:', options: ['$1 - i$', '$-1 + i$', '$-1 - i$', '$1 + i$ only'] },
          ],
          correctAnswers: ['exactly $6$', '$(x-7)(x+7)$', '$1 - i$'],
          hint1: 'The Fundamental Theorem of Algebra makes degree an exact root count, not just an upper bound.',
          hint2: '$x^2 - 49 = x^2 - 7^2$, a difference of squares.',
          hint3: 'Conjugate of $1 + i$ keeps the real part and flips the imaginary sign: $1 - i$.',
          explanation: 'Degree $6$ → exactly $6$ complex roots; $x^2-49 = (x-7)(x+7)$; the conjugate of $1+i$ is $1-i$.',
        },
      },
      {
        id: 'fta7-mixed2',
        type: 'input-boxes' as const,
        content: `**Full Factorization Challenge** 🧮

You're factoring $p(x) = x^3 - 4x^2 + x + 6$ completely.

**1)** Test $x = -1$. Compute $p(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6$. The value is: $\\,?$
**2)** Since that confirms $(x + 1)$ is a factor, dividing gives the quotient $x^2 - 5x + 6$. Factor it as \`(x-2)(x-3)\`: $\\,?$
**3)** How many **distinct real** zeros does $p(x)$ have in total? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '(x-2)(x-3)', '3'],
          hint1: '$(-1)^3 = -1$, $-4(-1)^2 = -4$, then $-1 + 6$. Add: $-1 - 4 - 1 + 6 = 0$.',
          hint2: '$x^2 - 5x + 6$: two numbers multiplying to $6$, adding to $-5$ → $-2$ and $-3$.',
          hint3: 'Full factorization is $(x+1)(x-2)(x-3)$, so the zeros are $-1, 2, 3$ — count them.',
          explanation: '$p(-1) = 0$, so $(x+1)$ is a factor. The quotient $x^2 - 5x + 6 = (x-2)(x-3)$, giving $p(x) = (x+1)(x-2)(x-3)$ with $3$ distinct real zeros: $-1, 2, 3$.',
        },
      },
      {
        id: 'fta7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'By the Factor Theorem, if $(x - 6)$ is a factor of $p(x)$, then which statement is true?',
              options: ['$p(6) = 0$', '$p(-6) = 0$', '$p(0) = 6$', '$p(6) = 6$'],
              correctAnswer: 0,
              explanation: '$(x - c)$ is a factor exactly when $p(c) = 0$. Here $c = 6$, so $p(6) = 0$.',
            },
            {
              question: 'A polynomial with real coefficients has degree $4$ and roots $3i$ and $-3i$. Which is possible for the remaining roots?',
              options: [
                'Two real roots',
                'One real root only',
                'Three more complex roots',
                'No more roots — degree $4$ means $2$ roots',
              ],
              correctAnswer: 0,
              explanation: 'Degree $4$ means exactly $4$ roots. Two are $\\pm 3i$, leaving $2$ more. Since complex roots pair up, the remaining two are either a real pair or another conjugate pair — "two real roots" is possible.',
            },
            {
              question: 'For $p(x) = 2x^3 + x^2 - 8x - 4$, which is the complete list of possible RATIONAL zeros from the Rational Root Theorem?',
              options: [
                '$\\pm 1, \\pm 2, \\pm 4, \\pm \\frac{1}{2}$',
                '$\\pm 1, \\pm 2, \\pm 4$',
                '$\\pm 1, \\pm 4, \\pm \\frac{1}{2}$',
                '$\\pm 2, \\pm 4$',
              ],
              correctAnswer: 0,
              explanation: 'Constant $-4$ gives $p \\in \\{\\pm1, \\pm2, \\pm4\\}$; leading coeff $2$ gives $q \\in \\{\\pm1, \\pm2\\}$. The candidates $p/q$ are $\\pm1, \\pm2, \\pm4, \\pm\\frac{1}{2}$ (note $\\frac{2}{2}=1$ and $\\frac{4}{2}=2$ are already listed).',
            },
          ],
        },
      },
    ],
  },
]
