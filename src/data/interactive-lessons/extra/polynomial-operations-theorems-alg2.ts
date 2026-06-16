import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polynomial Operations and Theorems (Algebra 2).
 * Registry key / DB Topic.slug: 'polynomial-operations-theorems-alg2'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-theorems-alg2',
    sections: [
      {
        id: 'pot1-intro',
        type: 'text' as const,
        content: `# 📐 Polynomial Operations and Theorems

**Part 1 of 5 — Vocabulary & Arithmetic of Polynomials**

---

### Topics in This Part

| Section |
|---------|
| What Is a Polynomial? (degree, leading coefficient, standard form) |
| Adding & Subtracting Polynomials |
| Multiplying Polynomials |

> 🔑 **Key Concept:** A **polynomial** is a sum of terms of the form $a x^n$, where each exponent $n$ is a **whole number** ($0, 1, 2, \\dots$) and each coefficient $a$ is a real number. Mastering how to add, subtract, and multiply them is the foundation for everything else in this lesson.`,
      },
      {
        id: 'pot1-vocab',
        type: 'text' as const,
        content: `## The Language of Polynomials

A polynomial in **standard form** lists its terms from the **highest degree to the lowest**:

$$P(x) = 3x^4 - 5x^2 + 7x - 2$$

| Term | Meaning |
|------|---------|
| **Degree** | the largest exponent (here, $4$) |
| **Leading coefficient** | the coefficient of the highest-degree term (here, $3$) |
| **Constant term** | the term with no variable (here, $-2$) |
| **Number of terms** | $4$ terms → this is a *quadrinomial*; $1/2/3$ terms = monomial/binomial/trinomial |

### Why "whole-number exponents" matters

These are **not** polynomials:

$$\\frac{5}{x} = 5x^{-1} \\quad (\\text{negative exponent}), \\qquad \\sqrt{x} = x^{1/2} \\quad (\\text{fractional exponent})$$

> 💡 **Quick test:** If you see a variable in a denominator, under a radical, or as an exponent, it is **not** a polynomial.`,
      },
      {
        id: 'pot1-classify',
        type: 'dropdown-select' as const,
        content: `**Classify the Polynomial** 🔽

Look at $\\;P(x) = 6x^3 - 4x^5 + 9 - x\\;$ and answer each part.`,
        exercise: {
          dropdowns: [
            { label: 'Degree of $P(x)$:', options: ['$3$', '$5$', '$9$', '$4$'] },
            { label: 'Leading coefficient:', options: ['$6$', '$-4$', '$9$', '$-1$'] },
            { label: 'Constant term:', options: ['$9$', '$0$', '$-1$', '$6$'] },
          ],
          correctAnswers: ['$5$', '$-4$', '$9$'],
          hint1: 'Degree = the *largest* exponent anywhere, even if the term is not written first.',
          hint2: 'The leading coefficient is the coefficient of the highest-degree term, $-4x^5$.',
          hint3: 'The constant term has no variable — it is the lone number $9$.',
          explanation: 'In standard form $P(x) = -4x^5 + 6x^3 - x + 9$. Degree $5$, leading coefficient $-4$, constant $9$. Standard form does not change the degree or leading coefficient — it just orders the terms.',
        },
      },
      {
        id: 'pot1-addsub',
        type: 'text' as const,
        content: `## Adding & Subtracting: Combine Like Terms

**Like terms** have the *same variable raised to the same power*. You add or subtract only their coefficients.

### Worked Example — Addition

$$(2x^2 + 3x - 5) + (x^2 - 4x + 1)$$

Line up like terms:

$$(2x^2 + x^2) + (3x - 4x) + (-5 + 1) = 3x^2 - x - 4$$

### Worked Example — Subtraction

> ⚠️ **The #1 mistake:** when subtracting, you must distribute the minus sign to **every** term in the second polynomial.

$$(5x^2 - 2x + 7) - (3x^2 + x - 4)$$

Distribute the $-$: $\\;5x^2 - 2x + 7 - 3x^2 - x + 4$

Combine: $\\;(5x^2 - 3x^2) + (-2x - x) + (7 + 4) = 2x^2 - 3x + 11$`,
      },
      {
        id: 'pot1-addsub-drill',
        type: 'input-boxes' as const,
        content: `**Add & Subtract** 🧮

Simplify each expression. For each, enter the **coefficient of $x$** (the linear term) in the result. Include the sign.

**1)** $(4x^2 + 6x - 3) + (2x^2 - 5x + 8)$ → coefficient of $x = \\,?$
**2)** $(7x^2 - x + 2) - (3x^2 - 4x + 9)$ → coefficient of $x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '3'],
          hint1: 'Addition: $6x + (-5x) = 1x$, so the coefficient is $1$.',
          hint2: 'Subtraction: distribute the minus → $-x - (-4x) = -x + 4x = 3x$.',
          hint3: 'Be careful with $-(-4x)$: two negatives make $+4x$.',
          explanation: '1) Sum is $6x^2 + x + 5$; coefficient of $x$ is $1$.  2) Difference is $4x^2 + 3x - 7$; coefficient of $x$ is $3$ (because $-x + 4x = 3x$).',
        },
      },
      {
        id: 'pot1-multiply',
        type: 'text' as const,
        content: `## Multiplying Polynomials: Distribute Everything

Multiply **each** term of the first polynomial by **each** term of the second, then combine like terms.

### Worked Example — Binomial × Trinomial

$$(x + 3)(x^2 - 2x + 4)$$

Distribute $x$, then $3$:

$$x\\cdot x^2 + x\\cdot(-2x) + x\\cdot 4 + 3\\cdot x^2 + 3\\cdot(-2x) + 3\\cdot 4$$

$$= x^3 - 2x^2 + 4x + 3x^2 - 6x + 12$$

Combine like terms:

$$= x^3 + x^2 - 2x + 12$$

> 🔑 **Degree shortcut:** When you multiply, the degrees **add**. A degree-$1$ times a degree-$2$ always gives a degree-$3$ product. Use this to check your answer.`,
      },
      {
        id: 'pot1-multiply-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand $(2x - 5)(x + 4)$.',
              options: ['$2x^2 + 3x - 20$', '$2x^2 - x - 20$', '$2x^2 + 13x - 20$', '$2x^2 - 20$'],
              correctAnswer: 0,
              explanation: 'FOIL: $2x\\cdot x = 2x^2$, $2x\\cdot 4 = 8x$, $-5\\cdot x = -5x$, $-5\\cdot 4 = -20$. Combine: $2x^2 + (8x - 5x) - 20 = 2x^2 + 3x - 20$.',
            },
            {
              question: 'What is the degree of the product $(x^3 + 1)(x^2 - x + 7)$?',
              options: ['$5$', '$6$', '$3$', '$2$'],
              correctAnswer: 0,
              explanation: 'Degrees add: $3 + 2 = 5$. The leading term is $x^3\\cdot x^2 = x^5$, so the product has degree $5$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-theorems-alg2',
    sections: [
      {
        id: 'pot2-intro',
        type: 'text' as const,
        content: `# 📐 Polynomial Operations and Theorems

**Part 2 of 5 — Special Products & Polynomial Division**

---

> 🔑 **Why this part matters:** Special-product patterns let you multiply *instantly*, and polynomial division is the tool that unlocks the Remainder and Factor Theorems in Part 3.`,
      },
      {
        id: 'pot2-special',
        type: 'text' as const,
        content: `## Special Products Worth Memorizing

| Pattern | Result |
|---------|--------|
| **Square of a sum** $(a+b)^2$ | $a^2 + 2ab + b^2$ |
| **Square of a difference** $(a-b)^2$ | $a^2 - 2ab + b^2$ |
| **Difference of squares** $(a+b)(a-b)$ | $a^2 - b^2$ |
| **Cube of a sum** $(a+b)^3$ | $a^3 + 3a^2b + 3ab^2 + b^3$ |

### Worked Examples

$$(x + 5)^2 = x^2 + 2(5)x + 25 = x^2 + 10x + 25$$

$$(3x - 2)^2 = 9x^2 - 2(3x)(2) + 4 = 9x^2 - 12x + 4$$

$$(x + 7)(x - 7) = x^2 - 49$$

> ⚠️ **Do not** write $(a+b)^2 = a^2 + b^2$. That "freshman's dream" forgets the **middle term** $2ab$. Always include it.`,
      },
      {
        id: 'pot2-special-drill',
        type: 'input-boxes' as const,
        content: `**Special Products** 🧮

Expand each using a pattern. Enter the requested coefficient (with sign).

**1)** $(x + 6)^2$ → coefficient of $x = \\,?$
**2)** $(2x - 3)^2$ → coefficient of $x = \\,?$
**3)** $(5x + 4)(5x - 4)$ → constant term $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '-12', '-16'],
          hint1: 'Square of a sum: the middle term is $2ab = 2(6)(1) = 12$.',
          hint2: 'Square of a difference: $-2ab = -2(2x)(3) = -12x$, so coefficient $-12$.',
          hint3: 'Difference of squares: $(5x)^2 - 4^2 = 25x^2 - 16$, so the constant is $-16$.',
          explanation: '1) $(x+6)^2 = x^2 + 12x + 36$.  2) $(2x-3)^2 = 4x^2 - 12x + 9$.  3) $(5x+4)(5x-4) = 25x^2 - 16$.',
        },
      },
      {
        id: 'pot2-longdiv',
        type: 'text' as const,
        content: `## Polynomial Long Division

Long division works just like with numbers: **divide, multiply, subtract, bring down**, repeat.

### Worked Example: $(2x^2 + 5x - 3) \\div (x + 3)$

$$
\\begin{array}{r}
2x \\;-\\; 1 \\phantom{)} \\\\
x+3 \\,\\overline{\\smash{)}\\,2x^2 + 5x - 3} \\\\
\\end{array}
$$

**Step by step:**
1. $2x^2 \\div x = 2x$. Multiply: $2x(x+3) = 2x^2 + 6x$. Subtract: $(2x^2 + 5x) - (2x^2 + 6x) = -x$.
2. Bring down $-3$: now $-x - 3$. Divide: $-x \\div x = -1$. Multiply: $-1(x+3) = -x - 3$. Subtract: $0$.

$$\\frac{2x^2 + 5x - 3}{x + 3} = 2x - 1 \\quad(\\text{remainder } 0)$$

> 🔑 **Always insert placeholders.** If a power is missing (say no $x$ term), write $0x$ so columns line up. Skipping it is the most common long-division error.`,
      },
      {
        id: 'pot2-longdiv-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When dividing $x^3 - 2x + 5$ by $x - 1$, what should you write to keep columns aligned?',
              options: ['$x^3 + 0x^2 - 2x + 5$', '$x^3 - 2x + 5$ (no change)', '$x^3 - 2x^2 + 5$', '$0x^3 - 2x + 5$'],
              correctAnswer: 0,
              explanation: 'The $x^2$ term is missing, so insert a placeholder $0x^2$: $x^3 + 0x^2 - 2x + 5$. This keeps every power in its own column.',
            },
            {
              question: 'A polynomial $P(x)$ divided by $(x - 4)$ gives quotient $x + 2$ with remainder $0$. What is $P(x)$?',
              options: ['$x^2 - 2x - 8$', '$x^2 + 6x + 8$', '$x^2 + 2x - 8$', '$x^2 - 6x - 8$'],
              correctAnswer: 0,
              explanation: 'Since remainder is $0$, $P(x) = (x-4)(x+2) = x^2 + 2x - 4x - 8 = x^2 - 2x - 8$. (Divisor × quotient + remainder = dividend.)',
            },
          ],
        },
      },
      {
        id: 'pot2-synthetic',
        type: 'text' as const,
        content: `## Synthetic Division (the fast shortcut)

When the divisor is **linear of the form $(x - c)$**, synthetic division is faster. Use the root $c$ (the value that makes the divisor zero).

### Worked Example: $(x^3 - 4x^2 + 5x - 2) \\div (x - 1)$

The divisor $(x-1)$ gives $c = 1$. Bring down, multiply by $1$, add — repeat:

$$
\\begin{array}{c|cccc}
1 & 1 & -4 & 5 & -2 \\\\
  &   & 1 & -3 & 2 \\\\
\\hline
  & 1 & -3 & 2 & 0
\\end{array}
$$

Read the bottom row: quotient $x^2 - 3x + 2$, remainder $\\mathbf{0}$.

$$\\frac{x^3 - 4x^2 + 5x - 2}{x - 1} = x^2 - 3x + 2$$

> 💡 **Sign rule:** For divisor $(x - c)$ you use $+c$; for $(x + c)$ you use $-c$. Example: dividing by $(x + 2)$ uses $c = -2$.`,
      },
      {
        id: 'pot2-synthetic-drill',
        type: 'input-boxes' as const,
        content: `**Synthetic Division** 🧮

Divide $\\;x^3 - 4x^2 + 5x - 2\\;$ by $\\;(x - 2)\\;$ using synthetic division ($c = 2$).

The quotient comes out as $\\;x^2 + bx + 1\\;$ with some remainder.

**1)** Enter $b$, the coefficient of $x$ in the quotient (include the sign).
**2)** The remainder $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-2', '0'],
          hint1: 'Bring down $1$; $1\\cdot 2 = 2$, $-4 + 2 = -2$; $-2\\cdot 2 = -4$, $5 + (-4) = 1$; $1\\cdot 2 = 2$, $-2 + 2 = 0$.',
          hint2: 'The bottom row is $[\\,1,\\; -2,\\; 1,\\; 0\\,]$: the first three numbers are the quotient coefficients, the last is the remainder.',
          hint3: 'Bottom row $[1, -2, 1, 0]$ means quotient $= 1x^2 - 2x + 1$ and remainder $= 0$, so $b = -2$.',
          explanation: 'Synthetic division by $c = 2$ gives bottom row $[1, -2, 1, 0]$: quotient $x^2 - 2x + 1$ and remainder $0$. So $b = -2$ and the remainder is $0$ — meaning $(x - 2)$ is a factor.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-theorems-alg2',
    sections: [
      {
        id: 'pot3-intro',
        type: 'text' as const,
        content: `# 📐 Polynomial Operations and Theorems

**Part 3 of 5 — The Remainder & Factor Theorems**

---

> 🔑 **The big idea:** You can learn things about a polynomial *without graphing it* by plugging numbers in and by checking which divisions come out even. Two theorems make this precise.`,
      },
      {
        id: 'pot3-remainder',
        type: 'text' as const,
        content: `## The Remainder Theorem

> 🔑 **Remainder Theorem:** When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$.

In other words, **evaluating** $P$ at $c$ gives the same number as the remainder of the division. So you can skip the division entirely and just plug in.

### Worked Example

Find the remainder when $P(x) = x^3 - 2x^2 + 4x - 5$ is divided by $(x - 2)$.

Instead of dividing, evaluate $P(2)$:

$$P(2) = (2)^3 - 2(2)^2 + 4(2) - 5 = 8 - 8 + 8 - 5 = 3$$

So the remainder is $\\mathbf{3}$ — no long division required.

> 💡 For a divisor like $(x + 3)$, rewrite it as $(x - (-3))$ and evaluate $P(-3)$.`,
      },
      {
        id: 'pot3-remainder-drill',
        type: 'input-boxes' as const,
        content: `**Use the Remainder Theorem** 🧮

Let $\\;P(x) = 2x^3 + x^2 - 7x + 4$.

**1)** Remainder when divided by $(x - 1)$: compute $P(1) = \\,?$
**2)** Remainder when divided by $(x + 2)$: compute $P(-2) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '6'],
          hint1: '$P(1) = 2(1)^3 + (1)^2 - 7(1) + 4 = 2 + 1 - 7 + 4$.',
          hint2: 'For $(x+2)$, use $c = -2$: $P(-2) = 2(-2)^3 + (-2)^2 - 7(-2) + 4$.',
          hint3: '$P(-2) = 2(-8) + 4 + 14 + 4 = -16 + 4 + 14 + 4$.',
          explanation: '1) $P(1) = 2 + 1 - 7 + 4 = 0$.  2) $P(-2) = -16 + 4 + 14 + 4 = 6$. (Because $P(1)=0$, $(x-1)$ is a factor — that is the Factor Theorem, coming next.)',
        },
      },
      {
        id: 'pot3-factor',
        type: 'text' as const,
        content: `## The Factor Theorem

> 🔑 **Factor Theorem:** $(x - c)$ is a **factor** of $P(x)$ **if and only if** $P(c) = 0$.

This is the Remainder Theorem taken to its punchline: a remainder of $0$ means the divisor divides evenly, which means it's a factor. And $P(c) = 0$ also means $c$ is a **root** (a zero) of the polynomial.

### Three ideas that are all the same thing

| Statement | Meaning |
|-----------|---------|
| $P(c) = 0$ | $c$ is a **root / zero** |
| $(x - c)$ is a **factor** | divides evenly, remainder $0$ |
| $x = c$ is an **$x$-intercept** | the graph crosses (or touches) the $x$-axis there |

### Worked Example

Is $(x - 3)$ a factor of $P(x) = x^3 - 7x + 6$?

Check $P(3) = 27 - 21 + 6 = 12 \\ne 0$. Since the remainder is $12$, **$(x-3)$ is NOT a factor**.

Now check $(x - 2)$: $P(2) = 8 - 14 + 6 = 0$. ✓ So **$(x - 2)$ IS a factor**, and $x = 2$ is a root.`,
      },
      {
        id: 'pot3-factor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $P(x) = x^3 - 7x + 6$, you found $P(2) = 0$. Which statement is therefore TRUE?',
              options: ['$(x - 2)$ is a factor of $P(x)$', '$(x + 2)$ is a factor of $P(x)$', '$P(x)$ has no real roots', 'The remainder when dividing by $(x-2)$ is $2$'],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, $P(2) = 0$ means $(x - 2)$ is a factor and $x = 2$ is a root. The remainder when dividing by $(x-2)$ is exactly $P(2) = 0$.',
            },
            {
              question: 'If $(x + 5)$ is a factor of a polynomial $Q(x)$, which must be true?',
              options: ['$Q(-5) = 0$', '$Q(5) = 0$', '$Q(0) = 5$', '$Q(-5) = 5$'],
              correctAnswer: 0,
              explanation: '$(x + 5) = (x - (-5))$, so $c = -5$. The Factor Theorem says a factor corresponds to $Q(c) = 0$, i.e. $Q(-5) = 0$.',
            },
          ],
        },
      },
      {
        id: 'pot3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Theorem Logic** 🔽

Let $\\;P(x) = x^3 - 4x^2 + x + 6$. Use the theorems (no graphing).`,
        exercise: {
          dropdowns: [
            { label: '$P(-1) = $', options: ['$0$', '$6$', '$-2$', '$10$'] },
            { label: 'So $(x + 1)$ is ...', options: ['a factor', 'not a factor', 'the remainder', 'undefined'] },
            { label: 'And $x = -1$ is ...', options: ['a root', 'not a root', 'the leading coefficient', 'the degree'] },
          ],
          correctAnswers: ['$0$', 'a factor', 'a root'],
          hint1: '$P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6$.',
          hint2: 'A remainder of $0$ means the divisor divides evenly — that makes it a factor.',
          hint3: '$P(-1) = -1 - 4 - 1 + 6 = 0$, so $(x+1)$ is a factor and $x = -1$ is a root.',
          explanation: '$P(-1) = -1 - 4 - 1 + 6 = 0$. By the Remainder Theorem the remainder is $0$; by the Factor Theorem $(x+1)$ is a factor and $x = -1$ is a root of $P$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-theorems-alg2',
    sections: [
      {
        id: 'pot4-intro',
        type: 'text' as const,
        content: `# 📐 Polynomial Operations and Theorems

**Part 4 of 5 — Finding All the Roots**

---

> 🔑 **Big payoff:** Combine the Rational Root Theorem (which roots to *try*), synthetic division (to *test and reduce*), and factoring (to *finish*) into one repeatable strategy for fully factoring a polynomial.`,
      },
      {
        id: 'pot4-rational',
        type: 'text' as const,
        content: `## The Rational Root Theorem

> 🔑 **Rational Root Theorem:** If a polynomial with integer coefficients has a rational root $\\dfrac{p}{q}$ (in lowest terms), then $p$ divides the **constant term** and $q$ divides the **leading coefficient**.

It hands you a **finite list of candidates** to test — you no longer have to guess blindly.

### Worked Example

List the possible rational roots of $P(x) = 2x^3 - 3x^2 - 8x + 12$.

- Constant term $= 12$ → factors $p$: $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$
- Leading coefficient $= 2$ → factors $q$: $\\pm 1, \\pm 2$

Possible roots $\\dfrac{p}{q}$:

$$\\pm 1,\\; \\pm 2,\\; \\pm 3,\\; \\pm 4,\\; \\pm 6,\\; \\pm 12,\\; \\pm \\tfrac{1}{2},\\; \\pm \\tfrac{3}{2}$$

> 💡 The theorem doesn't say a root *exists* — only that **if** a rational root exists, it's on this list. Test candidates with the Remainder Theorem (plug in) or synthetic division.`,
      },
      {
        id: 'pot4-rational-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which value is a possible rational root of $P(x) = 3x^2 - x - 4$ but is NOT on the list for $P(x) = x^2 - x - 4$?',
              options: ['$\\frac{4}{3}$', '$2$', '$-1$', '$4$'],
              correctAnswer: 0,
              explanation: 'For $3x^2 - x - 4$, $q$ can be $3$, so $\\frac{4}{3}$ is allowed. For $x^2 - x - 4$ the leading coefficient is $1$, so $q = 1$ and only integers are possible — $\\frac{4}{3}$ is not on that list.',
            },
            {
              question: 'For $P(x) = x^3 + 2x^2 - 5x - 6$, which is NOT a possible rational root?',
              options: ['$\\frac{1}{2}$', '$1$', '$-2$', '$6$'],
              correctAnswer: 0,
              explanation: 'Leading coefficient is $1$, so $q = \\pm 1$ and every possible rational root is an integer factor of $6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. The fraction $\\frac{1}{2}$ cannot occur.',
            },
          ],
        },
      },
      {
        id: 'pot4-fully-factor',
        type: 'text' as const,
        content: `## Strategy: Fully Factor a Cubic

**Goal:** factor $P(x) = x^3 - 4x^2 + x + 6$ completely.

**Step 1 — Candidates (RRT).** Constant $6$, leading coefficient $1$: try $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.

**Step 2 — Find one root.** Test $x = -1$: $P(-1) = -1 - 4 - 1 + 6 = 0$ ✓. So $(x + 1)$ is a factor.

**Step 3 — Divide it out (synthetic, $c = -1$).**

$$
\\begin{array}{c|cccc}
-1 & 1 & -4 & 1 & 6 \\\\
   &   & -1 & 5 & -6 \\\\
\\hline
   & 1 & -5 & 6 & 0
\\end{array}
$$

Quotient: $x^2 - 5x + 6$.

**Step 4 — Factor the quadratic.** $x^2 - 5x + 6 = (x - 2)(x - 3)$.

**Result:**

$$P(x) = (x + 1)(x - 2)(x - 3)$$

The roots are $x = -1,\\; 2,\\; 3$.

> ✅ **Check:** the product of the roots and the structure match — a degree-$3$ polynomial has at most $3$ real roots, and here we found exactly $3$.`,
      },
      {
        id: 'pot4-factor-drill',
        type: 'input-boxes' as const,
        content: `**Finish the Factoring** 🧮

You are factoring $\\;P(x) = x^3 - 2x^2 - 5x + 6$. You already verified $P(1) = 0$, so $(x - 1)$ is a factor. Synthetic division by $c = 1$ gives the quotient $x^2 - x - 6$.

**1)** Factor $x^2 - x - 6 = (x - 3)(x + a)$. What is $a$?
**2)** The three roots of $P(x)$ are $1$, $3$, and what third value?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '-2'],
          hint1: 'Find two numbers that multiply to $-6$ and add to $-1$: those are $-3$ and $+2$.',
          hint2: '$x^2 - x - 6 = (x - 3)(x + 2)$, so $a = 2$.',
          hint3: 'The factor $(x + 2)$ gives the root $x = -2$.',
          explanation: '$x^2 - x - 6 = (x - 3)(x + 2)$ so $a = 2$. Then $P(x) = (x-1)(x-3)(x+2)$ and the roots are $1, 3, -2$. The third root is $-2$.',
        },
      },
      {
        id: 'pot4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Strategy** 🔽

Put the "fully factor a polynomial" workflow in order.`,
        exercise: {
          dropdowns: [
            { label: 'First:', options: ['List possible rational roots (RRT)', 'Factor the final quadratic', 'Divide synthetically', 'Write the answer'] },
            { label: 'Second:', options: ['Test candidates to find a root', 'List possible rational roots (RRT)', 'Graph the polynomial', 'Add the polynomials'] },
            { label: 'Third:', options: ['Synthetic-divide by the found factor', 'Stop — you are done', 'Multiply everything out', 'Square the leading term'] },
            { label: 'Last:', options: ['Factor the remaining quadratic', 'List rational roots again', 'Subtract the remainder', 'Take a square root'] },
          ],
          correctAnswers: ['List possible rational roots (RRT)', 'Test candidates to find a root', 'Synthetic-divide by the found factor', 'Factor the remaining quadratic'],
          hint1: 'You need a list of values to try *before* you can test any of them.',
          hint2: 'Use the Remainder Theorem (plug in) or synthetic division to find a root that gives $0$.',
          hint3: 'Once one root is found, divide it out to drop the degree, then factor what remains.',
          explanation: 'RRT gives candidates → test to find a root → synthetic-divide to reduce the degree → factor the leftover quadratic. This loop turns a hard cubic into a product of linear factors.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-operations-theorems-alg2',
    sections: [
      {
        id: 'pot5-intro',
        type: 'text' as const,
        content: `# 📐 Polynomial Operations and Theorems

**Part 5 of 5 — Roots, Multiplicity & Mastery Check**

---

You can now operate on polynomials, divide them, and use the theorems to find roots. This final part ties in the **Fundamental Theorem of Algebra** and **multiplicity**, then a full mixed-mastery check.`,
      },
      {
        id: 'pot5-fta',
        type: 'text' as const,
        content: `## How Many Roots? The Fundamental Theorem of Algebra

> 🔑 **Fundamental Theorem of Algebra:** A polynomial of degree $n$ (with $n \\ge 1$) has **exactly $n$ roots**, when you count complex roots and **multiplicity**.

- **Multiplicity** = how many times a factor repeats. In $P(x) = (x - 2)^3(x + 1)$, the root $x = 2$ has multiplicity $3$ and $x = -1$ has multiplicity $1$ — that's $3 + 1 = 4$ roots for a degree-$4$ polynomial. ✓
- **Complex roots** (with imaginary parts) come in **conjugate pairs** when coefficients are real: if $2 + 3i$ is a root, so is $2 - 3i$.

### Multiplicity & the graph

| Multiplicity | Behavior at the $x$-intercept |
|--------------|-------------------------------|
| **Odd** (1, 3, …) | the graph **crosses** the axis |
| **Even** (2, 4, …) | the graph **touches** and turns around (bounces) |

> 💡 A degree-$5$ polynomial with real coefficients must have at least **one** real root, because complex roots pair up and $5$ is odd — they can't all be complex.`,
      },
      {
        id: 'pot5-fta-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Counting multiplicity, how many roots does $P(x) = (x - 1)^2(x + 4)^3$ have?',
              options: ['$5$', '$2$', '$3$', '$6$'],
              correctAnswer: 0,
              explanation: 'Degree $= 2 + 3 = 5$. By the Fundamental Theorem of Algebra a degree-$5$ polynomial has exactly $5$ roots counting multiplicity: $x = 1$ (mult. $2$) and $x = -4$ (mult. $3$).',
            },
            {
              question: 'At which root does the graph of $P(x) = (x - 3)^2(x + 1)$ TOUCH the axis and turn around (rather than cross)?',
              options: ['$x = 3$', '$x = -1$', '$x = 0$', 'It crosses at both'],
              correctAnswer: 0,
              explanation: '$x = 3$ has even multiplicity ($2$), so the graph touches and bounces. $x = -1$ has odd multiplicity ($1$), so the graph crosses there.',
            },
            {
              question: 'A polynomial with real coefficients has $3 - 2i$ as a root. Which value must ALSO be a root?',
              options: ['$3 + 2i$', '$-3 + 2i$', '$2 - 3i$', '$3 - 2i$ only'],
              correctAnswer: 0,
              explanation: 'Complex roots of real-coefficient polynomials come in conjugate pairs, so $3 + 2i$ (the conjugate of $3 - 2i$) must also be a root.',
            },
          ],
        },
      },
      {
        id: 'pot5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Tool | What it tells you |
|------|-------------------|
| **Combine like terms** | add/subtract polynomials (distribute the $-$!) |
| **Distribute fully** | multiply; degrees **add** |
| **Special products** | $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$; $(a+b)(a-b) = a^2 - b^2$ |
| **Remainder Theorem** | remainder of $P(x)\\div(x-c)$ is $P(c)$ |
| **Factor Theorem** | $(x-c)$ is a factor $\\iff P(c) = 0$ |
| **Rational Root Theorem** | rational roots are $\\frac{p}{q}$: $p \\mid$ constant, $q \\mid$ leading |
| **Fundamental Theorem** | degree $n$ → exactly $n$ roots (with multiplicity & complex) |

> ⚠️ **Top traps:** dropping the minus sign in subtraction; forgetting the middle term in $(a+b)^2$; omitting placeholder $0$ terms in division; using the wrong sign of $c$ for divisor $(x \\pm c)$.`,
      },
      {
        id: 'pot5-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Mastery Drill** 🧮

Bring the whole toolkit together.

**1)** $(3x^2 - x + 2) - (x^2 + 4x - 5)$ → coefficient of $x^2$ in the result $= \\,?$
**2)** Remainder when $P(x) = x^3 + 2x^2 - 5$ is divided by $(x - 2)$: compute $P(2) = \\,?$
**3)** $P(x) = (x - 1)^2(x + 6)(x - 4)$. Counting multiplicity, how many roots? $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '11', '4'],
          hint1: 'Subtraction: $3x^2 - x^2 = 2x^2$, so the coefficient of $x^2$ is $2$.',
          hint2: 'Remainder Theorem: $P(2) = (2)^3 + 2(2)^2 - 5 = 8 + 8 - 5$.',
          hint3: 'Degree (and root count with multiplicity) $= 2 + 1 + 1 = 4$.',
          explanation: '1) $(3x^2 - x + 2) - (x^2 + 4x - 5) = 2x^2 - 5x + 7$; coefficient of $x^2$ is $2$.  2) $P(2) = 8 + 8 - 5 = 11$.  3) The degree is $2 + 1 + 1 = 4$, so there are $4$ roots counting multiplicity.',
        },
      },
      {
        id: 'pot5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Expand $(x - 4)^2$.',
              options: ['$x^2 - 8x + 16$', '$x^2 + 16$', '$x^2 - 16$', '$x^2 - 8x - 16$'],
              correctAnswer: 0,
              explanation: 'Square of a difference: $(x-4)^2 = x^2 - 2(4)x + 16 = x^2 - 8x + 16$. Do not forget the middle term $-8x$.',
            },
            {
              question: 'For $P(x) = x^3 - x^2 - 4x + 4$, you compute $P(1) = 0$. What does this tell you?',
              options: ['$(x - 1)$ is a factor and $x = 1$ is a root', '$(x + 1)$ is a factor', 'The leading coefficient is $1$', '$P(x)$ has degree $1$'],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, $P(1) = 0$ means $(x - 1)$ is a factor and $x = 1$ is a root. (Indeed $P(x) = (x-1)(x-2)(x+2)$.)',
            },
            {
              question: 'Which is a complete list of the possible rational roots of $P(x) = x^2 - 5x + 6$?',
              options: ['$\\pm 1, \\pm 2, \\pm 3, \\pm 6$', '$\\pm 1, \\pm 5, \\pm 6$', '$\\pm \\frac{1}{2}, \\pm \\frac{3}{2}$', '$\\pm 5, \\pm 6$'],
              correctAnswer: 0,
              explanation: 'Leading coefficient $1$ ($q = \\pm 1$) and constant $6$ ($p = \\pm 1, \\pm 2, \\pm 3, \\pm 6$), so possible rational roots are $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. (The actual roots are $2$ and $3$.)',
            },
          ],
        },
      },
    ],
  },
]
