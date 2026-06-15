import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Multiplying Polynomials (Algebra 1).
 * Registry key / DB Topic.slug: 'multiplying-polynomials-algebra1'.
 * 5 parts, gold-standard structure: distributive foundation → monomial × polynomial
 * → binomial × binomial (FOIL) → special products → polynomial × polynomial &
 * applications, ending with an Exit Quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every product was expanded and re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'multiplying-polynomials-algebra1',
    sections: [
      {
        id: 'mp1-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Polynomials

**Part 1 of 5 — The Distributive Property & Exponents**

---

### Topics in This Part

| Section |
|---------|
| What Multiplying Polynomials Means |
| Multiplying Monomials (the exponent rule) |
| Distributing Across Many Terms |

> 🔑 **Key Concept:** Every polynomial multiplication — no matter how big — is just the **distributive property** applied carefully: *each term in the first factor multiplies each term in the second.*`,
      },
      {
        id: 'mp1-vocab',
        type: 'text' as const,
        content: `## A Quick Vocabulary Refresher

A **polynomial** is a sum of **terms**, where each term is a number times a power of $x$ (with whole-number exponents).

| Name | # of terms | Example |
|------|-----------|---------|
| Monomial | 1 | $5x^2$ |
| Binomial | 2 | $x + 3$ |
| Trinomial | 3 | $x^2 + 5x + 6$ |

The number in front of a term is its **coefficient**; the exponent on $x$ tells you the **degree** of that term.

> 💡 In $-7x^3$, the coefficient is $-7$ and the degree is $3$. The sign **belongs** to the coefficient — keep it attached as you multiply.`,
      },
      {
        id: 'mp1-monomial-rule',
        type: 'text' as const,
        content: `## Multiplying Monomials

To multiply two single terms, do two separate jobs:

1. **Multiply the coefficients** (regular number multiplication).
2. **Add the exponents** on matching variables: $x^m \\cdot x^n = x^{m+n}$.

### Worked Example

$$(3x^2)(5x^4) = (3 \\cdot 5)\\,(x^{2} \\cdot x^{4}) = 15x^{6}$$

The coefficients $3$ and $5$ multiply to $15$; the exponents $2$ and $4$ **add** to $6$.

### Another

$$(-4x)(2x^3) = (-4 \\cdot 2)\\,(x^{1} \\cdot x^{3}) = -8x^{4}$$

> ⚠️ **Add** exponents when multiplying — don't multiply them. $x^2 \\cdot x^4 = x^6$, **not** $x^8$.`,
      },
      {
        id: 'mp1-monomial-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $(2x^3)(6x^2)$.',
              options: ['$12x^5$', '$12x^6$', '$8x^5$', '$12x^9$'],
              correctAnswer: 0,
              explanation: 'Multiply coefficients: $2 \\cdot 6 = 12$. Add exponents: $3 + 2 = 5$. Result $12x^5$.',
            },
            {
              question: 'Simplify $(-5x^4)(3x)$.',
              options: ['$-15x^4$', '$-15x^5$', '$-2x^5$', '$15x^5$'],
              correctAnswer: 1,
              explanation: 'Coefficients: $-5 \\cdot 3 = -15$. The lone $x$ is $x^1$, so $x^4 \\cdot x^1 = x^5$. Result $-15x^5$.',
            },
          ],
        },
      },
      {
        id: 'mp1-monomial-drill',
        type: 'input-boxes' as const,
        content: `**Multiply the Monomials** 🧮

Enter each simplified product. Write powers with a caret, e.g. \`12x^5\`.

**1)** $(4x^2)(7x^3) = \\,?$
**2)** $(6x)(x^5) = \\,?$
**3)** $(-3x^4)(-2x^2) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['28x^5', '6x^6', '6x^6'],
          hint1: '$4 \\cdot 7 = 28$ and $x^2 \\cdot x^3 = x^5$.',
          hint2: 'The bare $x$ is $x^1$, so $x^1 \\cdot x^5 = x^6$, and the coefficient stays $6$.',
          hint3: 'A negative times a negative is positive: $-3 \\cdot -2 = 6$, and $x^4 \\cdot x^2 = x^6$.',
          explanation: '1) $28x^5$.  2) $6x^6$.  3) $(-3)(-2)=6$ and $x^4 \\cdot x^2 = x^6$, so $6x^6$.',
        },
      },
      {
        id: 'mp1-distribute',
        type: 'text' as const,
        content: `## Distributing a Monomial Over a Sum

The distributive property says $a(b + c) = ab + ac$. With polynomials it works exactly the same — just apply the monomial rule to **each** term.

### Worked Example

$$3x(x^2 + 4x - 5)$$

Distribute $3x$ to all three terms:

$$= 3x \\cdot x^2 + 3x \\cdot 4x + 3x \\cdot (-5)$$
$$= 3x^3 + 12x^2 - 15x$$

> 🔑 **Pattern to remember:** A monomial times an $n$-term polynomial gives an $n$-term answer. One term in, three terms out — nothing should disappear.

We'll lean on this exact move for the rest of the lesson.`,
      },
      {
        id: 'mp1-distribute-check',
        type: 'dropdown-select' as const,
        content: `**Distribute the Monomial** 🔽

Expand $2x(3x^2 + 5x - 1)$ one term at a time.`,
        exercise: {
          dropdowns: [
            { label: '$2x \\cdot 3x^2 =$', options: ['$6x^3$', '$6x^2$', '$5x^3$', '$6x^4$'] },
            { label: '$2x \\cdot 5x =$', options: ['$10x^2$', '$10x$', '$7x^2$', '$10x^3$'] },
            { label: '$2x \\cdot (-1) =$', options: ['$-2x$', '$2x$', '$-2$', '$-2x^2$'] },
          ],
          correctAnswers: ['$6x^3$', '$10x^2$', '$-2x$'],
          hint1: '$2 \\cdot 3 = 6$ and $x^1 \\cdot x^2 = x^3$.',
          hint2: '$2 \\cdot 5 = 10$ and $x^1 \\cdot x^1 = x^2$.',
          hint3: '$2 \\cdot (-1) = -2$, and the $x$ stays as $x^1$.',
          explanation: 'Full expansion: $2x(3x^2 + 5x - 1) = 6x^3 + 10x^2 - 2x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'multiplying-polynomials-algebra1',
    sections: [
      {
        id: 'mp2-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Polynomials

**Part 2 of 5 — Monomial × Polynomial, Carefully**

---

> 🔑 **The Idea:** Multiplying a monomial across a polynomial is reliable *if* you (1) hit every term, (2) keep every sign, and (3) combine exponents correctly. Part 2 makes that automatic.`,
      },
      {
        id: 'mp2-signs',
        type: 'text' as const,
        content: `## Don't Lose the Signs

The most common error is mishandling negatives. Treat the sign as part of each term *before* you distribute.

### Worked Example: $-2x(3x^2 - 4x + 7)$

Distribute $-2x$ to **each** term, signs included:

$$-2x \\cdot 3x^2 = -6x^3$$
$$-2x \\cdot (-4x) = +8x^2$$
$$-2x \\cdot 7 = -14x$$

Combine:

$$-2x(3x^2 - 4x + 7) = -6x^3 + 8x^2 - 14x$$

> ⚠️ Notice the middle term flipped to **positive**: a negative monomial times a negative term gives a positive product. Track signs term by term.`,
      },
      {
        id: 'mp2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Distribute Term by Term** 🔽

You're expanding $4x(2x^2 - 3x + 5)$. Choose each product.`,
        exercise: {
          dropdowns: [
            { label: '$4x \\cdot 2x^2 =$', options: ['$8x^3$', '$8x^2$', '$6x^3$', '$8x^4$'] },
            { label: '$4x \\cdot (-3x) =$', options: ['$-12x^2$', '$12x^2$', '$-12x$', '$-7x^2$'] },
            { label: '$4x \\cdot 5 =$', options: ['$20x$', '$9x$', '$20$', '$20x^2$'] },
          ],
          correctAnswers: ['$8x^3$', '$-12x^2$', '$20x$'],
          hint1: '$4 \\cdot 2 = 8$ and $x^1 \\cdot x^2 = x^3$.',
          hint2: '$4 \\cdot (-3) = -12$ and $x^1 \\cdot x^1 = x^2$.',
          hint3: '$4 \\cdot 5 = 20$, and $x$ stays as $x^1$ since $5$ has no variable.',
          explanation: 'Full expansion: $4x(2x^2 - 3x + 5) = 8x^3 - 12x^2 + 20x$.',
        },
      },
      {
        id: 'mp2-multi-var',
        type: 'text' as const,
        content: `## More Than One Variable

When terms contain two variables, add exponents **separately** for each letter.

### Worked Example: $2xy(3x^2 - 5y)$

$$2xy \\cdot 3x^2 = 6x^{3}y \\qquad (x^1 \\cdot x^2 = x^3,\\ y \\text{ carries along})$$
$$2xy \\cdot (-5y) = -10xy^{2} \\qquad (y^1 \\cdot y^1 = y^2,\\ x \\text{ carries along})$$

$$2xy(3x^2 - 5y) = 6x^3y - 10xy^2$$

> 💡 A variable that appears in only one factor just "rides along" into the product with the exponent it already had.`,
      },
      {
        id: 'mp2-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand $-3x(x^2 - 2x + 4)$.',
              options: ['$-3x^3 + 6x^2 - 12x$', '$-3x^3 - 6x^2 + 12x$', '$-3x^3 - 6x^2 - 12x$', '$-3x^2 + 6x - 12$'],
              correctAnswer: 0,
              explanation: '$-3x\\cdot x^2=-3x^3$; $-3x\\cdot(-2x)=+6x^2$; $-3x\\cdot 4=-12x$. So $-3x^3 + 6x^2 - 12x$.',
            },
            {
              question: 'Expand $5x^2(2x - 3)$.',
              options: ['$10x^3 - 15x^2$', '$10x^2 - 15x^2$', '$7x^3 - 8x^2$', '$10x^3 - 15$'],
              correctAnswer: 0,
              explanation: '$5x^2 \\cdot 2x = 10x^3$ and $5x^2 \\cdot (-3) = -15x^2$. Result $10x^3 - 15x^2$.',
            },
          ],
        },
      },
      {
        id: 'mp2-drill',
        type: 'input-boxes' as const,
        content: `**Expand and Simplify** 🧮

Enter the **coefficient** asked for in each fully-expanded product.

**1)** In $2x(4x^2 - x + 6)$, the coefficient of $x^3$ is $\\,?$
**2)** In $-x(x^2 - 9x + 2)$, the coefficient of $x^2$ is $\\,?$
**3)** In $3x(2x - 7)$, the constant times $x$ (the coefficient of $x$) is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '9', '-21'],
          hint1: '$2x \\cdot 4x^2 = 8x^3$, so the $x^3$ coefficient is $8$.',
          hint2: '$-x \\cdot (-9x) = +9x^2$, so the $x^2$ coefficient is $9$.',
          hint3: '$3x \\cdot (-7) = -21x$, so the coefficient of $x$ is $-21$.',
          explanation: '1) $8x^3 \\Rightarrow 8$.  2) $-x(x^2-9x+2)=-x^3+9x^2-2x \\Rightarrow 9$.  3) $6x^2-21x \\Rightarrow -21$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'multiplying-polynomials-algebra1',
    sections: [
      {
        id: 'mp3-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Polynomials

**Part 3 of 5 — Binomial × Binomial (FOIL)**

---

> 🔑 **The Big One:** Multiplying two binomials is the skill you'll use most. **FOIL** is just a way to make sure you hit all **four** products: each term of the first binomial times each term of the second.`,
      },
      {
        id: 'mp3-foil',
        type: 'text' as const,
        content: `## What FOIL Stands For

For $(a + b)(c + d)$, FOIL names the four products:

| Letter | Pair | Product |
|--------|------|---------|
| **F** — First | $a \\cdot c$ | first terms |
| **O** — Outer | $a \\cdot d$ | outer terms |
| **I** — Inner | $b \\cdot c$ | inner terms |
| **L** — Last | $b \\cdot d$ | last terms |

$$(a+b)(c+d) = ac + ad + bc + bd$$

> 💡 FOIL is just the distributive property done twice. It only has a name because two binomials come up so often. For bigger polynomials we'll drop the acronym and distribute directly (Part 5).`,
      },
      {
        id: 'mp3-worked',
        type: 'text' as const,
        content: `## Worked Example: $(x + 3)(x + 5)$

$$\\textbf{F: } x \\cdot x = x^2$$
$$\\textbf{O: } x \\cdot 5 = 5x$$
$$\\textbf{I: } 3 \\cdot x = 3x$$
$$\\textbf{L: } 3 \\cdot 5 = 15$$

Add them, then **combine the like middle terms** $5x + 3x$:

$$(x+3)(x+5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$$

> 🔑 **Almost always**, the Outer and Inner products are *like terms* and combine into the middle term. A clean binomial-times-binomial gives a **trinomial**.`,
      },
      {
        id: 'mp3-foil-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand $(x + 2)(x + 6)$.',
              options: ['$x^2 + 8x + 12$', '$x^2 + 12x + 8$', '$x^2 + 8x + 8$', '$x^2 + 6x + 12$'],
              correctAnswer: 0,
              explanation: 'F: $x^2$; O: $6x$; I: $2x$; L: $12$. Middle $6x+2x=8x$, so $x^2 + 8x + 12$.',
            },
            {
              question: 'Expand $(x - 4)(x + 7)$.',
              options: ['$x^2 + 3x - 28$', '$x^2 - 3x - 28$', '$x^2 + 11x - 28$', '$x^2 + 3x + 28$'],
              correctAnswer: 0,
              explanation: 'F: $x^2$; O: $7x$; I: $-4x$; L: $-28$. Middle $7x-4x=3x$, so $x^2 + 3x - 28$.',
            },
          ],
        },
      },
      {
        id: 'mp3-negatives',
        type: 'text' as const,
        content: `## Watch the Signs in FOIL

Subtraction inside a binomial just means a **negative term**. Treat $(x - 4)$ as $(x + (-4))$.

### Worked Example: $(2x - 3)(x - 5)$

$$\\textbf{F: } 2x \\cdot x = 2x^2$$
$$\\textbf{O: } 2x \\cdot (-5) = -10x$$
$$\\textbf{I: } -3 \\cdot x = -3x$$
$$\\textbf{L: } -3 \\cdot (-5) = +15$$

$$(2x-3)(x-5) = 2x^2 - 10x - 3x + 15 = 2x^2 - 13x + 15$$

> ⚠️ The **L**ast product is $(-3)(-5) = +15$, a *positive* constant. Two negatives in the last terms always give a positive constant.`,
      },
      {
        id: 'mp3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the FOIL** 🔽

Expand $(3x + 2)(x - 4)$ one product at a time.`,
        exercise: {
          dropdowns: [
            { label: 'First $(3x)(x) =$', options: ['$3x^2$', '$3x$', '$4x^2$', '$3x^3$'] },
            { label: 'Outer $(3x)(-4) =$', options: ['$-12x$', '$12x$', '$-12x^2$', '$-7x$'] },
            { label: 'Inner $(2)(x) =$', options: ['$2x$', '$-2x$', '$2x^2$', '$2$'] },
            { label: 'Last $(2)(-4) =$', options: ['$-8$', '$8$', '$-8x$', '$-6$'] },
          ],
          correctAnswers: ['$3x^2$', '$-12x$', '$2x$', '$-8$'],
          hint1: '$3 \\cdot 1 = 3$ and $x \\cdot x = x^2$.',
          hint2: '$3 \\cdot (-4) = -12$, and the $x$ stays $x^1$.',
          hint3: 'Combining: $3x^2 - 12x + 2x - 8 = 3x^2 - 10x - 8$.',
          explanation: '$(3x+2)(x-4) = 3x^2 - 12x + 2x - 8 = 3x^2 - 10x - 8$ after combining $-12x+2x$.',
        },
      },
      {
        id: 'mp3-drill',
        type: 'input-boxes' as const,
        content: `**FOIL Practice** 🧮

Each product is a trinomial $ax^2 + bx + c$. Enter the **middle coefficient $b$** after combining like terms.

**1)** $(x + 4)(x + 9)$: $\\;b = \\,?$
**2)** $(x - 6)(x + 2)$: $\\;b = \\,?$
**3)** $(2x + 1)(3x - 5)$: $\\;b = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '-4', '-7'],
          hint1: 'O$+$I $= 9x + 4x = 13x$, so $b = 13$.',
          hint2: 'O$+$I $= 2x + (-6x) = -4x$, so $b = -4$.',
          hint3: 'O $= 2x\\cdot(-5) = -10x$, I $= 1\\cdot 3x = 3x$; sum $-10x+3x=-7x$, so $b=-7$.',
          explanation: '1) $x^2+13x+36 \\Rightarrow b=13$.  2) $x^2-4x-12 \\Rightarrow b=-4$.  3) $6x^2-7x-5 \\Rightarrow b=-7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'multiplying-polynomials-algebra1',
    sections: [
      {
        id: 'mp4-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Polynomials

**Part 4 of 5 — Special Products (Shortcuts)**

---

> 🔑 **Why Bother:** Two binomial products show up *constantly* — the **square of a binomial** and the **difference of squares**. Learning their patterns lets you skip FOIL and write the answer directly.`,
      },
      {
        id: 'mp4-square',
        type: 'text' as const,
        content: `## Squaring a Binomial

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$

The pattern: **square the first**, **square the last**, and the middle is **twice the product** of the two terms.

### Worked Example: $(x + 5)^2$

$$a = x,\\ b = 5 \\;\\Rightarrow\\; x^2 + 2(x)(5) + 5^2 = x^2 + 10x + 25$$

### Worked Example: $(x - 4)^2$

$$x^2 - 2(x)(4) + 4^2 = x^2 - 8x + 16$$

> ⚠️ **The #1 mistake:** $(x+5)^2 \\ne x^2 + 25$. You **must** include the middle term $2ab$. Squaring a sum is *not* the same as squaring each piece.`,
      },
      {
        id: 'mp4-square-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand $(x + 7)^2$.',
              options: ['$x^2 + 14x + 49$', '$x^2 + 49$', '$x^2 + 7x + 49$', '$x^2 + 14x + 14$'],
              correctAnswer: 0,
              explanation: 'Square first: $x^2$. Twice the product: $2(x)(7)=14x$. Square last: $49$. So $x^2 + 14x + 49$.',
            },
            {
              question: 'Expand $(2x - 3)^2$.',
              options: ['$4x^2 - 12x + 9$', '$4x^2 + 9$', '$2x^2 - 12x + 9$', '$4x^2 - 6x + 9$'],
              correctAnswer: 0,
              explanation: '$a=2x,b=3$: $a^2=4x^2$, $2ab=2(2x)(3)=12x$ (subtracted), $b^2=9$. So $4x^2 - 12x + 9$.',
            },
          ],
        },
      },
      {
        id: 'mp4-diff-squares',
        type: 'text' as const,
        content: `## Difference of Squares

When the two binomials are the **same except for the sign**, the middle terms cancel:

$$(a + b)(a - b) = a^2 - b^2$$

### Worked Example: $(x + 6)(x - 6)$

$$\\textbf{O+I: } -6x + 6x = 0 \\quad\\text{(they cancel!)}$$
$$(x+6)(x-6) = x^2 - 36$$

### Worked Example: $(3x - 2)(3x + 2)$

$$(3x)^2 - (2)^2 = 9x^2 - 4$$

> 💡 **How to spot it:** same first term, same last term, but one $+$ and one $-$. The answer is always "first squared **minus** last squared" — no middle term at all.`,
      },
      {
        id: 'mp4-special-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Pattern** 🔽

Identify each product without doing full FOIL.`,
        exercise: {
          dropdowns: [
            { label: '$(x - 9)(x + 9) =$', options: ['$x^2 - 81$', '$x^2 + 81$', '$x^2 - 18x - 81$', '$x^2 - 81x$'] },
            { label: '$(x + 8)^2 =$', options: ['$x^2 + 16x + 64$', '$x^2 + 64$', '$x^2 + 8x + 64$', '$x^2 + 16x + 16$'] },
            { label: '$(5x - 1)(5x + 1) =$', options: ['$25x^2 - 1$', '$25x^2 + 1$', '$5x^2 - 1$', '$25x^2 - 10x - 1$'] },
          ],
          correctAnswers: ['$x^2 - 81$', '$x^2 + 16x + 64$', '$25x^2 - 1$'],
          hint1: 'Same terms, opposite signs → difference of squares: $a^2 - b^2$.',
          hint2: 'A binomial squared: square first $x^2$, twice product $16x$, square last $64$.',
          hint3: '$(5x)^2 = 25x^2$ and $1^2 = 1$; opposite signs cancel the middle, giving $25x^2 - 1$.',
          explanation: 'Difference of squares loses the middle term; a square keeps a $2ab$ middle term.',
        },
      },
      {
        id: 'mp4-special-drill',
        type: 'input-boxes' as const,
        content: `**Use the Shortcut** 🧮

Enter the requested value using the special-product patterns.

**1)** In $(x + 10)^2 = x^2 + bx + c$, the middle coefficient $b = \\,?$
**2)** $(x - 12)(x + 12) = x^2 - c$. Enter $c$. $\\,?$
**3)** In $(4x + 3)^2 = 16x^2 + bx + 9$, the middle coefficient $b = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '144', '24'],
          hint1: 'Middle term is $2ab = 2(x)(10) = 20x$, so $b = 20$.',
          hint2: 'Difference of squares: $c = 12^2 = 144$.',
          hint3: '$2ab = 2(4x)(3) = 24x$, so $b = 24$.',
          explanation: '1) $b=2(10)=20$.  2) $12^2 = 144$.  3) $2 \\cdot 4 \\cdot 3 = 24$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'multiplying-polynomials-algebra1',
    sections: [
      {
        id: 'mp5-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Polynomials

**Part 5 of 5 — Bigger Products, Applications & Mastery Check**

---

You can now multiply monomials, distribute across any polynomial, FOIL two binomials, and use special-product shortcuts. The last skill: multiplying **larger** polynomials and applying it to area.`,
      },
      {
        id: 'mp5-big',
        type: 'text' as const,
        content: `## Binomial × Trinomial

There's no new rule — just distribute **every** term of the first across **every** term of the second, then combine like terms. A binomial times a trinomial means $2 \\times 3 = 6$ products before combining.

### Worked Example: $(x + 2)(x^2 + 3x + 4)$

Distribute the $x$, then the $2$:

$$x(x^2 + 3x + 4) = x^3 + 3x^2 + 4x$$
$$2(x^2 + 3x + 4) = 2x^2 + 6x + 8$$

Now **stack and combine like terms**:

$$x^3 + (3x^2 + 2x^2) + (4x + 6x) + 8 = x^3 + 5x^2 + 10x + 8$$

> 🔑 **Stay organized:** line up like powers in columns. The degree of the answer is the **sum** of the degrees of the factors — here $1 + 2 = 3$, so a cubic.`,
      },
      {
        id: 'mp5-big-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand $(x + 1)(x^2 + 2x + 5)$.',
              options: ['$x^3 + 3x^2 + 7x + 5$', '$x^3 + 2x^2 + 5x + 5$', '$x^3 + 3x^2 + 5x + 5$', '$x^3 + 3x^2 + 7x + 6$'],
              correctAnswer: 0,
              explanation: '$x(x^2+2x+5)=x^3+2x^2+5x$; $1(x^2+2x+5)=x^2+2x+5$. Sum: $x^3+3x^2+7x+5$.',
            },
            {
              question: 'The product of a degree-2 polynomial and a degree-3 polynomial has degree:',
              options: ['$5$', '$6$', '$1$', '$3$'],
              correctAnswer: 0,
              explanation: 'Degrees add when multiplying: $2 + 3 = 5$. The leading terms multiply to an $x^5$ term.',
            },
          ],
        },
      },
      {
        id: 'mp5-area',
        type: 'text' as const,
        content: `## Application: Area of a Rectangle

If a rectangle has width $(x + 3)$ and length $(x + 7)$, its area is the **product**:

$$A = (x + 3)(x + 7) = x^2 + 10x + 21$$

This is exactly a FOIL — the polynomial *is* the area written in terms of $x$.

### A "Bordered" Example

A square photo has side $x$. You add a $2$-inch mat on every side, so the framed square has side $(x + 4)$ (two inches on each of two sides). Its area:

$$(x + 4)^2 = x^2 + 8x + 16$$

> 💡 Polynomial multiplication is how you turn a picture's dimensions into a single formula you can evaluate for any $x$.`,
      },
      {
        id: 'mp5-area-drill',
        type: 'input-boxes' as const,
        content: `**Area Practice** 🧮

A rectangle has width $(x + 5)$ and length $(2x + 1)$. Its area is $2x^2 + bx + c$.

**1)** Find the middle coefficient $b$. $\\,?$
**2)** Find the constant $c$. $\\,?$
**3)** Evaluate the area when $x = 3$ (a plain number). $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '5', '56'],
          hint1: 'FOIL: O $= (x)(1)=x$, I $= (5)(2x)=10x$; sum $= 11x$, so $b = 11$.',
          hint2: 'Last terms: $5 \\cdot 1 = 5$, so $c = 5$.',
          hint3: 'Area $= 2x^2 + 11x + 5$. At $x=3$: $2(9) + 11(3) + 5 = 18 + 33 + 5 = 56$.',
          explanation: 'Area $=(x+5)(2x+1)=2x^2+11x+5$, so $b=11$, $c=5$. At $x=3$: width $=8$, length $=7$, area $=8 \\cdot 7 = 56$ (and $2(9)+11(3)+5 = 56$ ✓).',
        },
      },
      {
        id: 'mp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Expand $-2x^2(3x - 4)$.',
              options: ['$-6x^3 + 8x^2$', '$-6x^3 - 8x^2$', '$-6x^2 + 8x^2$', '$6x^3 + 8x^2$'],
              correctAnswer: 0,
              explanation: '$-2x^2 \\cdot 3x = -6x^3$ and $-2x^2 \\cdot (-4) = +8x^2$. Result $-6x^3 + 8x^2$.',
            },
            {
              question: 'Expand $(x - 8)(x + 8)$.',
              options: ['$x^2 - 64$', '$x^2 + 64$', '$x^2 - 16x - 64$', '$x^2 - 64x$'],
              correctAnswer: 0,
              explanation: 'Difference of squares: $(x-8)(x+8) = x^2 - 8^2 = x^2 - 64$. Middle terms cancel.',
            },
            {
              question: 'Expand $(2x + 5)^2$.',
              options: ['$4x^2 + 20x + 25$', '$4x^2 + 25$', '$2x^2 + 20x + 25$', '$4x^2 + 10x + 25$'],
              correctAnswer: 0,
              explanation: '$a=2x,b=5$: $a^2=4x^2$, $2ab=2(2x)(5)=20x$, $b^2=25$. So $4x^2 + 20x + 25$.',
            },
          ],
        },
      },
    ],
  },
]
