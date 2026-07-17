import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Factoring Polynomials (Algebra 2).
 * Registry key: 'factoring-polynomials-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'factoring-polynomials-algebra2',
    sections: [
      {
        id: 'fp1-intro',
        type: 'text' as const,
        content: `# 🧩 Factoring Polynomials

**Part 1 of 5 — The Greatest Common Factor**

---

### Topics in This Part

| Section |
|---------|
| What Does "Factoring" Mean? |
| Finding the GCF of a Polynomial |
| Factoring Out the GCF |
| Why GCF Comes First |

> 🔑 **Key Concept:** Factoring is *un-multiplying* — rewriting a sum of terms as a **product**. The first move in **every** factoring problem is to pull out the greatest common factor (GCF).`,
      },
      {
        id: 'fp1-meaning',
        type: 'text' as const,
        content: `## What Does "Factoring" Mean?

When you **multiply**, you turn a product into a sum:

$$3x(x + 2) = 3x^2 + 6x$$

**Factoring** runs that backward — it turns a sum into a product:

$$3x^2 + 6x = 3x(x + 2)$$

The factored form $3x(x+2)$ and the expanded form $3x^2+6x$ are *equal* for every value of $x$ — they're just two ways of writing the same expression.

> 💡 **Why bother?** A product equals zero only when one of its factors is zero. That's why factoring is the gateway to **solving** equations (Part 5) — and to simplifying, graphing, and calculus later on.`,
      },
      {
        id: 'fp1-gcf-meaning',
        type: 'text' as const,
        content: `## Finding the GCF of a Polynomial

The **greatest common factor** of a polynomial has two pieces:

1. The largest integer that divides **every** coefficient.
2. The **lowest power** of each variable shared by every term.

### Example: $12x^3 + 18x^2$

| Term | Coefficient | Variable part |
|------|-------------|---------------|
| $12x^3$ | $12$ | $x^3$ |
| $18x^2$ | $18$ | $x^2$ |

- GCF of $12$ and $18$ is $6$.
- Lowest power of $x$ present in both is $x^2$.

So the GCF is $\\,6x^2$, and $12x^3 + 18x^2 = 6x^2(2x + 3)$.

> ⚠️ **Take the *lowest* power, not the highest.** Both terms must contain the factor you pull out, so $x^2$ (not $x^3$) is the most $x$ every term shares.`,
      },
      {
        id: 'fp1-gcf-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the GCF of $20x^4 + 35x^2$?',
              options: ['$5x^2$', '$5x^4$', '$x^2$', '$35x^2$'],
              correctAnswer: 0,
              explanation: 'GCF of $20$ and $35$ is $5$; the lowest power of $x$ shared by both terms is $x^2$. So the GCF is $5x^2$.',
            },
            {
              question: 'Which is the correct **completely factored** form of $8a^3 - 12a$?',
              options: ['$4a(2a^2 - 3)$', '$2a(4a^2 - 6)$', '$4a^2(2a - 3)$', '$4(2a^3 - 3a)$'],
              correctAnswer: 0,
              explanation: 'GCF of $8$ and $12$ is $4$; lowest power of $a$ is $a^1$. So $8a^3 - 12a = 4a(2a^2 - 3)$. Option $2a(4a^2-6)$ is true but not *fully* factored — a $2$ remains inside.',
            },
          ],
        },
      },
      {
        id: 'fp1-leftover',
        type: 'text' as const,
        content: `## What's Left Inside?

Once you pull out the GCF, the expression in parentheses is what *remains* after dividing each term by the GCF.

$$\\underbrace{10x^3 - 15x^2 + 5x}_{\\text{GCF} = 5x} = 5x\\big(\\underbrace{2x^2 - 3x + 1}_{\\text{each term} \\,\\div\\, 5x}\\big)$$

Term by term: $\\dfrac{10x^3}{5x} = 2x^2$, $\\;\\dfrac{-15x^2}{5x} = -3x$, $\\;\\dfrac{5x}{5x} = 1$.

> ⚠️ **Don't drop the last $1$.** When a term *equals* the GCF, dividing leaves $1$, not $0$ — that $1$ must appear inside the parentheses.`,
      },
      {
        id: 'fp1-leftover-dropdown',
        type: 'dropdown-select' as const,
        content: `**What's Inside the Parentheses?** 🔽

After pulling out the GCF, choose the correct leftover factor.`,
        exercise: {
          dropdowns: [
            { label: '$\\;6x^2 + 9x = 3x(\\;?\\;)$', options: ['$2x + 3$', '$2x + 9$', '$6x + 3$', '$2x^2 + 3$'] },
            { label: '$\\;8x^3 - 4x = 4x(\\;?\\;)$', options: ['$2x^2 - 1$', '$2x^2$', '$2x^2 - 4$', '$2x - 1$'] },
            { label: '$\\;12x^2 + 6x = 6x(\\;?\\;)$', options: ['$2x + 1$', '$2x$', '$2x + 6$', '$6x + 1$'] },
          ],
          correctAnswers: ['$2x + 3$', '$2x^2 - 1$', '$2x + 1$'],
          hint1: '$6x^2 \\div 3x = 2x$ and $9x \\div 3x = 3$ → $2x + 3$.',
          hint2: '$8x^3 \\div 4x = 2x^2$ and $4x \\div 4x = 1$ → $2x^2 - 1$ (keep the $1$!).',
          hint3: '$12x^2 \\div 6x = 2x$ and $6x \\div 6x = 1$ → $2x + 1$.',
          explanation: 'Divide each term by the GCF. When a term equals the GCF, it leaves $1$: $6x^2+9x=3x(2x+3)$, $8x^3-4x=4x(2x^2-1)$, $12x^2+6x=6x(2x+1)$.',
        },
      },
      {
        id: 'fp1-check',
        type: 'text' as const,
        content: `## Always Check by Re-Multiplying

After factoring, **distribute back** to confirm you recover the original:

$$7x(2x^2 + x + 3) = 14x^3 + 7x^2 + 21x \\;✓$$

> 💡 This re-multiply check costs ten seconds and catches almost every GCF slip — a wrong coefficient or a dropped $1$ shows up immediately. Try the drill below, then check each by distributing.`,
      },
      {
        id: 'fp1-gcf-drill',
        type: 'input-boxes' as const,
        content: `**Factor Out the GCF** 🧮

Each expression equals $\\text{GCF} \\cdot (\\ldots)$. Enter the **GCF** only.

**1)** $\\;6x^2 + 9x \\;\\Rightarrow\\;$ GCF $= \\,?$
**2)** $\\;15y^4 - 25y^3 \\;\\Rightarrow\\;$ GCF $= \\,?$
**3)** $\\;14x^3 + 7x^2 + 21x \\;\\Rightarrow\\;$ GCF $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3x', '5y^3', '7x'],
          hint1: 'GCF of $6$ and $9$ is $3$; lowest power of $x$ is $x^1$. So $3x$.',
          hint2: 'GCF of $15$ and $25$ is $5$; lowest power of $y$ is $y^3$. So $5y^3$.',
          hint3: 'GCF of $14, 7, 21$ is $7$; every term has at least one $x$. So $7x$.',
          explanation: '1) $6x^2+9x = 3x(2x+3)$.  2) $15y^4-25y^3 = 5y^3(3y-5)$.  3) $14x^3+7x^2+21x = 7x(2x^2+x+3)$.',
        },
      },
      {
        id: 'fp1-outro',
        type: 'text' as const,
        content: `## On to Trinomials

> 🔑 **Habit for life:** Pull out the GCF *first*, every single time. A leftover common factor hides inside everything that follows — and it makes the trinomials in Parts 2–3 much friendlier.

In Part 2 we tackle the heart of factoring: turning $x^2 + bx + c$ into a product of two binomials.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'factoring-polynomials-algebra2',
    sections: [
      {
        id: 'fp2-intro',
        type: 'text' as const,
        content: `# 🧩 Factoring Polynomials

**Part 2 of 5 — Trinomials with Leading Coefficient 1**

---

> 🔑 **The Idea:** To factor $x^2 + bx + c$, find two numbers that **multiply to $c$** and **add to $b$**. Those two numbers become the constants in $(x + \\_)(x + \\_)$.`,
      },
      {
        id: 'fp2-method',
        type: 'text' as const,
        content: `## The Sum-and-Product Method

$$x^2 + bx + c = (x + p)(x + q) \\quad\\text{where}\\quad p \\cdot q = c \\;\\text{ and }\\; p + q = b$$

This works because multiplying out gives:

$$(x + p)(x + q) = x^2 + (p + q)x + pq$$

### Worked Example: $x^2 + 7x + 12$

Find two numbers that **multiply to $12$** and **add to $7$**.

| Factor pair of $12$ | Sum |
|---------------------|-----|
| $1, 12$ | $13$ |
| $2, 6$ | $8$ |
| $3, 4$ | $7$ ✓ |

The pair is $3$ and $4$, so $x^2 + 7x + 12 = (x + 3)(x + 4)$.

> ✅ **Check:** $(x+3)(x+4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✓`,
      },
      {
        id: 'fp2-signs',
        type: 'text' as const,
        content: `## Reading the Signs

The signs of $b$ and $c$ tell you the signs of $p$ and $q$ before you start:

| Sign of $c$ | Sign of $b$ | Both factors are… |
|-------------|-------------|-------------------|
| $+$ | $+$ | both **positive** |
| $+$ | $-$ | both **negative** |
| $-$ | (either) | **one $+$, one $-$** (bigger one matches $b$'s sign) |

### Example: $x^2 - 5x + 6$

$c = +6$ (factors same sign) and $b = -5$ (negative), so both factors are negative: $-2$ and $-3$.

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

### Example: $x^2 + 2x - 15$

$c = -15$ (opposite signs). Need a pair differing to give $+2$: that's $+5$ and $-3$.

$$x^2 + 2x - 15 = (x + 5)(x - 3)$$`,
      },
      {
        id: 'fp2-signs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Predict the Signs** 🔽

Before factoring, decide the signs of the two constants in $(x \\,\\square\\, p)(x \\,\\square\\, q)$.`,
        exercise: {
          dropdowns: [
            { label: 'In $x^2 + 9x + 20$, the two constants are:', options: ['both positive', 'both negative', 'one positive, one negative'] },
            { label: 'In $x^2 - 8x + 15$, the two constants are:', options: ['both negative', 'both positive', 'one positive, one negative'] },
            { label: 'In $x^2 - 2x - 35$, the two constants are:', options: ['one positive, one negative', 'both negative', 'both positive'] },
          ],
          correctAnswers: ['both positive', 'both negative', 'one positive, one negative'],
          hint1: '$c=+20$ with $b=+9$: same sign as each other, and positive sum → both positive ($4$ and $5$).',
          hint2: '$c=+15$ with $b=-8$: factors same sign, negative sum → both negative ($-3$ and $-5$).',
          hint3: '$c=-35$: a negative product always means one factor is $+$ and the other is $-$ ($+5$ and $-7$).',
          explanation: 'A positive $c$ → factors share $b$\'s sign; a negative $c$ → factors have opposite signs.',
        },
      },
      {
        id: 'fp2-verify',
        type: 'text' as const,
        content: `## Verify Every Factorization

The middle term is the quickest place a sign error shows up, so always FOIL back and watch it:

$$(x + 5)(x - 3) = x^2 \\underbrace{- 3x + 5x}_{+2x} - 15 = x^2 + 2x - 15 \\;✓$$

> 💡 If your inner-plus-outer terms don't recombine to the original middle term, swap a sign or reach for a different factor pair — then re-check.`,
      },
      {
        id: 'fp2-drill',
        type: 'input-boxes' as const,
        content: `**Factor the Trinomial** 🧮

Each factors as $(x + p)(x + q)$ with $p \\le q$. Enter $p$ then $q$ (include the sign, e.g. \`-3\`).

**1)** $x^2 + 8x + 15 = (x + p)(x + q)$ → $p = \\,?$, $\\;q = \\,?$
**2)** $x^2 - 9x + 14 = (x + p)(x + q)$ → $p = \\,?$, $\\;q = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['3', '5', '-7', '-2'],
          hint1: 'For #1: two numbers multiplying to $15$, adding to $8$ → $3$ and $5$.',
          hint2: 'For #2: $c=+14, b=-9$ → both negative; $-7$ and $-2$ multiply to $14$ and add to $-9$.',
          hint3: 'List $p$ as the smaller value: $-7 < -2$, so $p=-7$, $q=-2$.',
          explanation: '1) $x^2+8x+15 = (x+3)(x+5)$.  2) $x^2-9x+14 = (x-7)(x-2)$.',
        },
      },
      {
        id: 'fp2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Factor $x^2 + 2x - 24$.',
              options: ['$(x + 6)(x - 4)$', '$(x - 6)(x + 4)$', '$(x + 8)(x - 3)$', '$(x + 12)(x - 2)$'],
              correctAnswer: 0,
              explanation: 'Need a product of $-24$ and a sum of $+2$: that\'s $+6$ and $-4$. So $(x+6)(x-4)$.',
            },
            {
              question: 'Don\'t forget the GCF first! Factor $2x^2 + 14x + 20$ completely.',
              options: ['$2(x + 2)(x + 5)$', '$(2x + 4)(x + 5)$', '$2(x + 10)(x + 2)$', '$(x + 2)(2x + 10)$'],
              correctAnswer: 0,
              explanation: 'Pull out GCF $2$: $2(x^2+7x+10)$. Then $x^2+7x+10 = (x+2)(x+5)$. So $2(x+2)(x+5)$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'factoring-polynomials-algebra2',
    sections: [
      {
        id: 'fp3-intro',
        type: 'text' as const,
        content: `# 🧩 Factoring Polynomials

**Part 3 of 5 — Trinomials when $a \\ne 1$ (the AC Method)**

---

> 🔑 **The Challenge:** When the leading coefficient $a$ isn't $1$, you can't just split the constant. The **AC method** (also called factoring by grouping) handles it every time.`,
      },
      {
        id: 'fp3-ac-steps',
        type: 'text' as const,
        content: `## The AC Method

To factor $ax^2 + bx + c$:

1. Multiply $a \\cdot c$.
2. Find two numbers that **multiply to $ac$** and **add to $b$**.
3. **Split** the middle term $bx$ using those two numbers.
4. **Group** in pairs and factor each pair.
5. Pull out the common binomial.

### Worked Example: $6x^2 + 11x + 3$

1. $a \\cdot c = 6 \\cdot 3 = 18$.
2. Two numbers multiplying to $18$, adding to $11$: $\\;9$ and $2$.
3. Split: $6x^2 + 9x + 2x + 3$.
4. Group: $(6x^2 + 9x) + (2x + 3) = 3x(2x + 3) + 1(2x + 3)$.
5. Common binomial $(2x+3)$: $\\;(2x + 3)(3x + 1)$.

> ✅ **Check:** $(2x+3)(3x+1) = 6x^2 + 2x + 9x + 3 = 6x^2 + 11x + 3$ ✓`,
      },
      {
        id: 'fp3-ac-find',
        type: 'input-boxes' as const,
        content: `**Find the AC Split** 🧮

For each trinomial, compute $ac$, then give the two numbers (smaller first) that multiply to $ac$ and add to $b$.

**1)** $3x^2 + 10x + 8$: $\\;ac = \\,?$, then the two numbers are $\\,?$ and $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['24', '4', '6'],
          hint1: '$a \\cdot c = 3 \\cdot 8 = 24$.',
          hint2: 'Need two numbers multiplying to $24$ and adding to $10$.',
          hint3: '$4 \\cdot 6 = 24$ and $4 + 6 = 10$. Enter the smaller, $4$, first.',
          explanation: '$ac = 24$; the split is $4$ and $6$: $3x^2 + 4x + 6x + 8 = x(3x+4) + 2(3x+4) = (3x+4)(x+2)$.',
        },
      },
      {
        id: 'fp3-worked2',
        type: 'text' as const,
        content: `## A Worked Example with a Negative

### Factor $4x^2 - 4x - 3$

1. $a \\cdot c = 4 \\cdot (-3) = -12$.
2. Two numbers multiplying to $-12$, adding to $-4$: $\\;-6$ and $+2$.
3. Split: $4x^2 - 6x + 2x - 3$.
4. Group: $(4x^2 - 6x) + (2x - 3) = 2x(2x - 3) + 1(2x - 3)$.
5. Common binomial: $(2x - 3)(2x + 1)$.

> ⚠️ **Watch the grouping signs.** When the third term is negative, factor so the leftover binomials **match**. Here $+(2x - 3)$ comes from factoring $+1$ out of $(2x - 3)$ — not $-1$.

> ✅ **Check:** $(2x-3)(2x+1) = 4x^2 + 2x - 6x - 3 = 4x^2 - 4x - 3$ ✓`,
      },
      {
        id: 'fp3-grouping-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk the AC Method** 🔽

You're factoring $2x^2 + 7x + 6$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — compute $ac$:', options: ['$12$', '$7$', '$8$', '$6$'] },
            { label: 'Step 2 — the splitting numbers:', options: ['$3$ and $4$', '$2$ and $6$', '$1$ and $6$', '$12$ and $1$'] },
            { label: 'Step 3 — after grouping the first pair:', options: ['$x(2x + 3)$', '$2x(x + 3)$', '$x(2x + 4)$', '$2x(x + 4)$'] },
            { label: 'Final factored form:', options: ['$(2x + 3)(x + 2)$', '$(2x + 2)(x + 3)$', '$(2x + 6)(x + 1)$', '$(x + 3)(2x + 1)$'] },
          ],
          correctAnswers: ['$12$', '$3$ and $4$', '$x(2x + 3)$', '$(2x + 3)(x + 2)$'],
          hint1: '$ac = 2 \\cdot 6 = 12$.',
          hint2: 'Two numbers multiplying to $12$ and adding to $7$: $3$ and $4$.',
          hint3: 'Split as $2x^2 + 3x + 4x + 6$. First pair $(2x^2+3x) = x(2x+3)$; second $4x+6 = 2(2x+3)$ → $(2x+3)(x+2)$.',
          explanation: '$2x^2+7x+6 = 2x^2+3x+4x+6 = x(2x+3)+2(2x+3) = (2x+3)(x+2)$.',
        },
      },
      {
        id: 'fp3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Factor $6x^2 + 7x - 3$.',
              options: ['$(3x - 1)(2x + 3)$', '$(3x + 1)(2x - 3)$', '$(6x - 1)(x + 3)$', '$(3x - 3)(2x + 1)$'],
              correctAnswer: 0,
              explanation: '$ac = 6 \\cdot (-3) = -18$; split with $9$ and $-2$: $6x^2 + 9x - 2x - 3 = 3x(2x+3) - 1(2x+3) = (3x-1)(2x+3)$.',
            },
            {
              question: 'Which pair of numbers correctly splits the middle term of $5x^2 + 11x + 2$?',
              options: ['$10$ and $1$', '$5$ and $6$', '$2$ and $9$', '$7$ and $4$'],
              correctAnswer: 0,
              explanation: '$ac = 5 \\cdot 2 = 10$. Need a product of $10$ and a sum of $11$: that\'s $10$ and $1$. (Then it factors as $(5x+1)(x+2)$.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'factoring-polynomials-algebra2',
    sections: [
      {
        id: 'fp4-intro',
        type: 'text' as const,
        content: `# 🧩 Factoring Polynomials

**Part 4 of 5 — Special Patterns**

---

> 🔑 **The Shortcut:** A handful of forms factor *instantly* once you recognize them — no trial and error. Learn to spot a **difference of squares**, a **perfect square trinomial**, and a **sum/difference of cubes**.`,
      },
      {
        id: 'fp4-dos',
        type: 'text' as const,
        content: `## Difference of Squares

$$a^2 - b^2 = (a + b)(a - b)$$

Two perfect squares separated by a **minus** sign. (A *sum* of squares, $a^2 + b^2$, does **not** factor over the real numbers.)

### Examples

| Expression | Recognize as | Factored |
|------------|--------------|----------|
| $x^2 - 9$ | $x^2 - 3^2$ | $(x+3)(x-3)$ |
| $4x^2 - 25$ | $(2x)^2 - 5^2$ | $(2x+5)(2x-5)$ |
| $x^2 - 1$ | $x^2 - 1^2$ | $(x+1)(x-1)$ |

> ⚠️ **$x^2 + 9$ is prime** over the reals — there is no middle term to "lose," and a sum of squares has no real factorization.`,
      },
      {
        id: 'fp4-pst',
        type: 'text' as const,
        content: `## Perfect Square Trinomials

$$a^2 + 2ab + b^2 = (a + b)^2 \\qquad a^2 - 2ab + b^2 = (a - b)^2$$

A perfect square trinomial has a squared first term, a squared last term, and a middle term equal to **twice the product** of their square roots.

### Examples

| Trinomial | First $\\sqrt{}$ | Last $\\sqrt{}$ | Middle check | Factored |
|-----------|----------------|----------------|--------------|----------|
| $x^2 + 6x + 9$ | $x$ | $3$ | $2\\cdot x\\cdot 3 = 6x$ ✓ | $(x+3)^2$ |
| $x^2 - 10x + 25$ | $x$ | $5$ | $2\\cdot x\\cdot 5 = 10x$ ✓ | $(x-5)^2$ |
| $9x^2 + 12x + 4$ | $3x$ | $2$ | $2\\cdot 3x\\cdot 2 = 12x$ ✓ | $(3x+2)^2$ |

> 💡 If the middle term **doesn't** match $2ab$, it isn't a perfect square — fall back to the AC method.`,
      },
      {
        id: 'fp4-special-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Factor $49x^2 - 16$.',
              options: ['$(7x + 4)(7x - 4)$', '$(7x - 4)^2$', '$(7x + 4)^2$', 'prime (does not factor)'],
              correctAnswer: 0,
              explanation: '$49x^2 - 16 = (7x)^2 - 4^2$, a difference of squares: $(7x+4)(7x-4)$.',
            },
            {
              question: 'Which expression is a perfect square trinomial?',
              options: ['$x^2 + 14x + 49$', '$x^2 + 14x + 48$', '$x^2 + 10x + 49$', '$x^2 + 7x + 49$'],
              correctAnswer: 0,
              explanation: '$x^2 + 14x + 49 = (x+7)^2$ because $49 = 7^2$ and $2 \\cdot 7 = 14$ matches the middle term.',
            },
            {
              question: 'Which of these is prime (cannot be factored over the reals)?',
              options: ['$x^2 + 25$', '$x^2 - 25$', '$x^2 + 10x + 25$', '$x^2 - 10x + 25$'],
              correctAnswer: 0,
              explanation: '$x^2 + 25$ is a sum of squares — it has no real factorization. The other three factor as $(x+5)(x-5)$, $(x+5)^2$, and $(x-5)^2$.',
            },
          ],
        },
      },
      {
        id: 'fp4-cubes',
        type: 'text' as const,
        content: `## Sum & Difference of Cubes

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

A handy memory device is **SOAP**: the binomial sign is the **S**ame, the linear sign is **O**pposite, and the last sign is **A**lways **P**ositive.

### Worked Example: $x^3 + 8$

Here $a = x$ and $b = 2$ (since $2^3 = 8$):

$$x^3 + 8 = (x + 2)(x^2 - 2x + 4)$$

### Worked Example: $8x^3 - 27$

Here $a = 2x$ (since $(2x)^3 = 8x^3$) and $b = 3$:

$$8x^3 - 27 = (2x - 3)\\big((2x)^2 + (2x)(3) + 3^2\\big) = (2x - 3)(4x^2 + 6x + 9)$$

> 💡 The quadratic factor $a^2 \\mp ab + b^2$ almost never factors further — leave it as is.`,
      },
      {
        id: 'fp4-pattern-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Pattern** 🔽

Identify which special pattern fits each expression.`,
        exercise: {
          dropdowns: [
            { label: '$x^2 - 36$ is a…', options: ['difference of squares', 'perfect square trinomial', 'difference of cubes', 'none of these'] },
            { label: '$x^2 - 8x + 16$ is a…', options: ['perfect square trinomial', 'difference of squares', 'sum of cubes', 'none of these'] },
            { label: '$27x^3 + 1$ is a…', options: ['sum of cubes', 'difference of cubes', 'difference of squares', 'none of these'] },
          ],
          correctAnswers: ['difference of squares', 'perfect square trinomial', 'sum of cubes'],
          hint1: '$x^2 - 36 = x^2 - 6^2$: two squares with a minus sign.',
          hint2: '$x^2 - 8x + 16 = (x-4)^2$: squared ends and middle $= 2\\cdot x\\cdot 4 = 8x$.',
          hint3: '$27x^3 + 1 = (3x)^3 + 1^3$: two cubes with a plus sign → sum of cubes.',
          explanation: '$x^2-36=(x+6)(x-6)$; $x^2-8x+16=(x-4)^2$; $27x^3+1=(3x+1)(9x^2-3x+1)$.',
        },
      },
      {
        id: 'fp4-cubes-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Cube Formula** 🧮

For $x^3 - 64 = (x - b)(x^2 + bx + b^2)$, identify $b$ and fill in the quadratic factor.

**1)** $b = \\,?$  *(since $b^3 = 64$)*
**2)** The constant term of the quadratic factor, $b^2 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '16'],
          hint1: '$b^3 = 64$, and $4^3 = 64$, so $b = 4$.',
          hint2: 'The last term of $a^2 + ab + b^2$ is $b^2 = 4^2 = 16$.',
          hint3: 'Difference of cubes: $x^3 - 64 = (x - 4)(x^2 + 4x + 16)$.',
          explanation: '$x^3 - 64 = (x-4)(x^2 + 4x + 16)$, so $b = 4$ and $b^2 = 16$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'factoring-polynomials-algebra2',
    sections: [
      {
        id: 'fp5-intro',
        type: 'text' as const,
        content: `# 🧩 Factoring Polynomials

**Part 5 of 5 — A Strategy, Solving, & Mastery Check**

---

You can now (1) pull out a GCF, (2) factor simple trinomials, (3) use the AC method, and (4) spot special patterns. The last skill is choosing **which** tool to reach for — and using factoring to *solve*.`,
      },
      {
        id: 'fp5-strategy',
        type: 'text' as const,
        content: `## The Factoring Game Plan

Work through these in order, every time:

| Step | Ask | If yes… |
|------|-----|---------|
| 1 | Is there a **GCF**? | Factor it out first. |
| 2 | **Two terms**? | Try difference of squares or sum/difference of cubes. |
| 3 | **Three terms**? | Use sum-and-product ($a=1$) or the AC method ($a\\ne 1$); check for a perfect square. |
| 4 | **Four terms**? | Try **grouping**. |
| 5 | Always | **Re-check** each factor — can anything factor further? |

> ⚠️ **Factor completely.** After pulling a GCF, the *inside* often still factors. Example: $3x^2 - 27 = 3(x^2 - 9) = 3(x+3)(x-3)$ — three layers, not one.`,
      },
      {
        id: 'fp5-grouping',
        type: 'text' as const,
        content: `## Factoring Four Terms by Grouping

When a polynomial has four terms, group them in pairs and factor each pair, then pull out the shared binomial.

### Worked Example: $x^3 + 3x^2 + 2x + 6$

$$\\underbrace{(x^3 + 3x^2)}_{x^2(x+3)} + \\underbrace{(2x + 6)}_{2(x+3)} = x^2(x + 3) + 2(x + 3) = (x + 3)(x^2 + 2)$$

> ✅ **Check:** $(x+3)(x^2+2) = x^3 + 2x + 3x^2 + 6 = x^3 + 3x^2 + 2x + 6$ ✓`,
      },
      {
        id: 'fp5-solving',
        type: 'text' as const,
        content: `## Solving Equations by Factoring

The **Zero-Product Property** says: if $A \\cdot B = 0$, then $A = 0$ **or** $B = 0$.

### Worked Example: solve $x^2 + 3x - 10 = 0$

1. Factor: $(x + 5)(x - 2) = 0$.
2. Set each factor to zero: $x + 5 = 0$ or $x - 2 = 0$.
3. Solve: $x = -5$ or $x = 2$.

> ⚠️ **One side must be zero first.** To solve $x^2 + 3x = 10$, move everything over → $x^2 + 3x - 10 = 0$ *before* factoring. The Zero-Product Property only works against $0$.`,
      },
      {
        id: 'fp5-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve by Factoring** 🧮

Factor, then use the Zero-Product Property. Enter the **larger** solution.

**1)** $x^2 - x - 12 = 0 \\;\\Rightarrow\\; x = \\,?$  *(larger root)*
**2)** $x^2 - 16 = 0 \\;\\Rightarrow\\; x = \\,?$  *(larger root)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '4'],
          hint1: '#1 factors as $(x-4)(x+3)=0$, so $x = 4$ or $x = -3$.',
          hint2: '#2 is a difference of squares: $(x-4)(x+4)=0$, so $x = 4$ or $x = -4$.',
          hint3: 'The larger root of each is the positive one, $4$.',
          explanation: '1) $(x-4)(x+3)=0 \\Rightarrow x=4,-3$; larger $=4$.  2) $(x-4)(x+4)=0 \\Rightarrow x=\\pm 4$; larger $=4$.',
        },
      },
      {
        id: 'fp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Factor completely: $2x^3 - 18x$.',
              options: ['$2x(x + 3)(x - 3)$', '$2x(x^2 - 9)$', '$(2x + 6)(x - 3)$', '$2x(x - 3)^2$'],
              correctAnswer: 0,
              explanation: 'GCF $2x$: $2x(x^2 - 9)$. Then $x^2-9$ is a difference of squares: $2x(x+3)(x-3)$. The form $2x(x^2-9)$ isn\'t *complete*.',
            },
            {
              question: 'Factor $x^3 - 5x^2 + 4x - 20$ by grouping.',
              options: ['$(x - 5)(x^2 + 4)$', '$(x + 5)(x^2 - 4)$', '$(x - 5)(x^2 - 4)$', '$(x^2 - 5)(x + 4)$'],
              correctAnswer: 0,
              explanation: '$x^2(x-5) + 4(x-5) = (x-5)(x^2+4)$. The $x^2+4$ is a sum of squares, so it\'s prime — done.',
            },
          ],
        },
      },
      {
        id: 'fp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The first step in factoring ANY polynomial is to:',
              options: ['look for a common GCF', 'use the quadratic formula', 'check for a difference of cubes', 'set it equal to zero'],
              correctAnswer: 0,
              explanation: 'Always pull out the greatest common factor first — it simplifies everything that follows.',
            },
            {
              question: 'Factor $9x^2 - 30x + 25$.',
              options: ['$(3x - 5)^2$', '$(3x + 5)^2$', '$(3x - 5)(3x + 5)$', '$(9x - 5)(x - 5)$'],
              correctAnswer: 0,
              explanation: 'Perfect square trinomial: $9x^2=(3x)^2$, $25=5^2$, and $2\\cdot 3x\\cdot 5 = 30x$ matches the (negative) middle term → $(3x-5)^2$.',
            },
            {
              question: 'The solutions of $(x - 7)(x + 2) = 0$ are:',
              options: ['$x = 7 \\text{ or } -2$', '$x = -7 \\text{ or } 2$', '$x = 7 \\text{ or } 2$', '$x = 14 \\text{ or } -4$'],
              correctAnswer: 0,
              explanation: 'By the Zero-Product Property, $x-7=0$ or $x+2=0$, giving $x = 7$ or $x = -2$.',
            },
          ],
        },
      },
    ],
  },
]
