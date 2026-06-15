import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Quadratic Equations (Algebra 1).
 * Registry key / DB Topic.slug: 'solving-quadratics-algebra1'.
 * 5 parts, gold-standard structure: what a quadratic equation is & the Zero Product
 * Property → solving by factoring → square-root method → the Quadratic Formula &
 * discriminant → choosing a method + mixed practice + exit quiz.
 * Teaching (text) alternates with interactive checks (multiple-choice + input-boxes +
 * dropdown-select); >= 3 checks per part across >= 2 types.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every root, factorization, and discriminant value was verified before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-quadratics-algebra1',
    sections: [
      {
        id: 'sq1-intro',
        type: 'text' as const,
        content: `# 🎯 Solving Quadratic Equations

**Part 1 of 5 — What Is a Quadratic Equation?**

---

### Topics in This Part

| Section |
|---------|
| Standard Form & Recognizing Quadratics |
| Why a Quadratic Has (Up To) Two Solutions |
| The Zero Product Property |

> 🔑 **Key Concept:** A *quadratic equation* is any equation that can be written as $ax^2 + bx + c = 0$ with $a \\ne 0$. "Solving" it means finding every value of $x$ that makes the equation true — these values are the **roots** (or **solutions**).`,
      },
      {
        id: 'sq1-standard-form',
        type: 'text' as const,
        content: `## Standard Form

Every quadratic equation can be rearranged into **standard form**:

$$ax^2 + bx + c = 0, \\qquad a \\ne 0$$

- $a$ is the **leading coefficient** (the number on $x^2$).
- $b$ is the **linear coefficient** (the number on $x$).
- $c$ is the **constant term**.

The requirement $a \\ne 0$ is what makes it *quadratic* — if $a = 0$ there's no $x^2$ term and the equation is just **linear**.

### Identifying $a$, $b$, and $c$

| Equation (in standard form) | $a$ | $b$ | $c$ |
|------------------------------|-----|-----|-----|
| $x^2 + 5x + 6 = 0$ | $1$ | $5$ | $6$ |
| $3x^2 - 7x = 0$ | $3$ | $-7$ | $0$ |
| $x^2 - 9 = 0$ | $1$ | $0$ | $-9$ |
| $2x^2 + 4x - 1 = 0$ | $2$ | $4$ | $-1$ |

> ⚠️ **Get to standard form first.** $x^2 + 5x = -6$ is the *same* equation as $x^2 + 5x + 6 = 0$ — move every term to one side so the other side is $0$ before reading off $a$, $b$, $c$.`,
      },
      {
        id: 'sq1-identify-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation is **not** quadratic?',
              options: ['$x^2 - 4x + 4 = 0$', '$5x + 3 = 0$', '$2x^2 = 8$', '$-x^2 + x = 7$'],
              correctAnswer: 1,
              explanation: '$5x + 3 = 0$ has no $x^2$ term, so $a = 0$ — it is linear, not quadratic. Every other choice contains an $x^2$ term.',
            },
            {
              question: 'Put $4x - x^2 = 3$ into standard form $ax^2+bx+c=0$. What is $a$?',
              options: ['$1$', '$4$', '$-1$', '$-3$'],
              correctAnswer: 2,
              explanation: 'Move all terms to one side: $-x^2 + 4x - 3 = 0$. The coefficient of $x^2$ is $a = -1$. (You could also multiply through by $-1$ to get $x^2 - 4x + 3 = 0$, where $a = 1$.)',
            },
          ],
        },
      },
      {
        id: 'sq1-two-roots',
        type: 'text' as const,
        content: `## Why Two Solutions?

A linear equation like $2x = 6$ has exactly **one** solution ($x = 3$). A quadratic can have **up to two**.

Think about $x^2 = 9$. Both $x = 3$ **and** $x = -3$ work, because $3^2 = 9$ and $(-3)^2 = 9$. That $\\pm$ behavior is the heart of every quadratic.

A quadratic equation has:
- **two** real solutions (the usual case),
- **one** repeated solution (a "double root"), or
- **no** real solutions.

> 💡 Graphically, the solutions are the $x$-values where the parabola $y = ax^2+bx+c$ crosses the $x$-axis. A parabola can cross twice, touch once, or miss entirely — matching the three cases above.`,
      },
      {
        id: 'sq1-zpp',
        type: 'text' as const,
        content: `## The Zero Product Property

This single idea powers the most common solving method.

> 🔑 **Zero Product Property:** If $A \\cdot B = 0$, then $A = 0$ **or** $B = 0$ (or both).

The only way a product equals zero is if one of the factors is zero. So if we can write a quadratic as a **product of factors that equals 0**, we just set each factor to $0$ and solve.

### Example

$$(x - 2)(x + 5) = 0$$

Set each factor to zero:
$$x - 2 = 0 \\quad\\Rightarrow\\quad x = 2$$
$$x + 5 = 0 \\quad\\Rightarrow\\quad x = -5$$

The solutions are $x = 2$ and $x = -5$.

> ⚠️ The Zero Product Property only works when one side is **exactly $0$**. $(x-2)(x+5) = 8$ does **not** mean $x-2=8$ or $x+5=8$. Get a $0$ first.`,
      },
      {
        id: 'sq1-zpp-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The solutions of $(x + 3)(x - 7) = 0$ are:',
              options: ['$x = -3$ or $x = 7$', '$x = 3$ or $x = -7$', '$x = -3$ or $x = -7$', '$x = 3$ or $x = 7$'],
              correctAnswer: 0,
              explanation: 'Set each factor to zero: $x+3=0 \\Rightarrow x=-3$, and $x-7=0 \\Rightarrow x=7$. The root is the *opposite* of the number inside each factor.',
            },
            {
              question: 'Why can we **not** immediately apply the Zero Product Property to $(x-1)(x+4) = 6$?',
              options: ['Because there are two factors', 'Because the right side is not $0$', 'Because $6$ is even', 'Because $x$ appears twice'],
              correctAnswer: 1,
              explanation: 'The property requires the product to equal $0$. We must first expand, move the $6$ over, and re-factor: $(x-1)(x+4) = 6 \\Rightarrow x^2+3x-4 = 6 \\Rightarrow x^2+3x-10 = 0$.',
            },
          ],
        },
      },
      {
        id: 'sq1-zpp-drill',
        type: 'input-boxes' as const,
        content: `**Read Off the Roots** 🧮

Each quadratic is already factored. Enter the **two solutions**, smaller value first.

**1)** $(x - 4)(x - 1) = 0 \\Rightarrow x = \\,?$ and $x = \\,?$
**2)** $x(x + 6) = 0 \\Rightarrow x = \\,?$ and $x = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['1', '4', '-6', '0'],
          hint1: 'For each factor, set it equal to $0$ and solve. The root is the value that makes the factor vanish.',
          hint2: '$(x-4)=0 \\Rightarrow x=4$ and $(x-1)=0 \\Rightarrow x=1$. Smaller first: $1$, then $4$.',
          hint3: 'In $x(x+6)=0$ the first factor is just $x$, so $x=0$; the second gives $x=-6$. Smaller first: $-6$, then $0$.',
          explanation: '1) roots are $1$ and $4$.  2) roots are $-6$ and $0$ (remember the lone factor $x$ gives the root $0$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-quadratics-algebra1',
    sections: [
      {
        id: 'sq2-intro',
        type: 'text' as const,
        content: `# 🎯 Solving Quadratic Equations

**Part 2 of 5 — Solving by Factoring**

---

> 🔑 **The Plan:** (1) write the equation in standard form $= 0$, (2) factor the quadratic into two binomials, (3) apply the Zero Product Property. This is the fastest method *when the quadratic factors nicely*.`,
      },
      {
        id: 'sq2-factor-review',
        type: 'text' as const,
        content: `## Factoring $x^2 + bx + c$

To factor $x^2 + bx + c$ (when $a = 1$), find two numbers that:
- **multiply** to $c$, and
- **add** to $b$.

Those two numbers go inside the binomials.

### Example: $x^2 + 7x + 12$

We need two numbers that multiply to $12$ and add to $7$. Those are $3$ and $4$:

$$x^2 + 7x + 12 = (x + 3)(x + 4)$$

### Sign guide

| Sign of $c$ | What it tells you |
|-------------|-------------------|
| $c > 0$ | both numbers share the **same** sign as $b$ |
| $c < 0$ | the numbers have **opposite** signs |

> 💡 Check by expanding (FOIL): $(x+3)(x+4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✓`,
      },
      {
        id: 'sq2-factor-pairs',
        type: 'dropdown-select' as const,
        content: `**Find the Factor Pair** 🔽

For each quadratic, choose the pair of numbers that multiply to $c$ and add to $b$.`,
        exercise: {
          dropdowns: [
            { label: '$x^2 + 8x + 15$:', options: ['$3, 5$', '$1, 15$', '$-3, -5$', '$2, 6$'] },
            { label: '$x^2 - 2x - 8$:', options: ['$-4, 2$', '$4, -2$', '$-4, -2$', '$4, 2$'] },
            { label: '$x^2 - 9x + 20$:', options: ['$-4, -5$', '$4, 5$', '$-4, 5$', '$2, 10$'] },
          ],
          correctAnswers: ['$3, 5$', '$-4, 2$', '$-4, -5$'],
          hint1: 'You need product $= c$ AND sum $= b$. Test both conditions on each pair.',
          hint2: 'For $x^2-2x-8$: product must be $-8$ and sum must be $-2$. $-4 \\cdot 2 = -8$ and $-4 + 2 = -2$ ✓.',
          hint3: 'For $x^2-9x+20$: product $+20$, sum $-9$. Same sign (since $c>0$) and negative (since $b<0$): $-4$ and $-5$.',
          explanation: '$x^2+8x+15=(x+3)(x+5)$; $x^2-2x-8=(x-4)(x+2)$; $x^2-9x+20=(x-4)(x-5)$.',
        },
      },
      {
        id: 'sq2-worked',
        type: 'text' as const,
        content: `## Worked Example: Solve $x^2 + 7x + 12 = 0$

**Step 1 — Standard form.** Already done: $x^2 + 7x + 12 = 0$.

**Step 2 — Factor.** Two numbers multiplying to $12$, adding to $7$: that's $3$ and $4$.
$$(x + 3)(x + 4) = 0$$

**Step 3 — Zero Product Property.**
$$x + 3 = 0 \\Rightarrow x = -3 \\qquad x + 4 = 0 \\Rightarrow x = -4$$

**Solutions:** $x = -3$ and $x = -4$.

> ✅ **Check** $x = -3$: $(-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0$ ✓`,
      },
      {
        id: 'sq2-worked2',
        type: 'text' as const,
        content: `## Worked Example: Solve $x^2 - 5x = 14$

**Step 1 — Standard form.** Subtract $14$ from both sides so one side is $0$:
$$x^2 - 5x - 14 = 0$$

**Step 2 — Factor.** Product $-14$, sum $-5$: that's $-7$ and $+2$.
$$(x - 7)(x + 2) = 0$$

**Step 3 — Zero Product Property.**
$$x - 7 = 0 \\Rightarrow x = 7 \\qquad x + 2 = 0 \\Rightarrow x = -2$$

> ⚠️ **Don't skip Step 1.** If you'd tried to factor "$x^2 - 5x = 14$" directly, the Zero Product Property would not apply — the right side must be $0$.`,
      },
      {
        id: 'sq2-factor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x^2 - x - 6 = 0$ by factoring.',
              options: ['$x = 3$ or $x = -2$', '$x = -3$ or $x = 2$', '$x = 3$ or $x = 2$', '$x = 6$ or $x = -1$'],
              correctAnswer: 0,
              explanation: 'Product $-6$, sum $-1$: that is $-3$ and $+2$, so $(x-3)(x+2)=0$. Roots: $x=3$ and $x=-2$.',
            },
            {
              question: 'A student solving $x^2 + 2x = 8$ wrote $(x)(x+2) = 8$, then $x = 8$. What went wrong?',
              options: ['They factored incorrectly', 'They never moved everything to one side to get $0$', 'They should have divided by $x$', 'Nothing — the answer is correct'],
              correctAnswer: 1,
              explanation: 'The Zero Product Property needs a $0$ on the right. Correct path: $x^2+2x-8=0 \\Rightarrow (x+4)(x-2)=0 \\Rightarrow x=-4$ or $x=2$.',
            },
          ],
        },
      },
      {
        id: 'sq2-factor-drill',
        type: 'input-boxes' as const,
        content: `**Solve by Factoring** 🧮

Solve each by factoring. Enter the two solutions, **smaller value first**.

**1)** $x^2 + 6x + 8 = 0 \\Rightarrow x = \\,?$ and $x = \\,?$
**2)** $x^2 - 3x - 10 = 0 \\Rightarrow x = \\,?$ and $x = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-4', '-2', '-2', '5'],
          hint1: 'For #1: two numbers with product $8$, sum $6$ → $2$ and $4$, giving $(x+2)(x+4)=0$.',
          hint2: 'For #2: product $-10$, sum $-3$ → $-5$ and $+2$, giving $(x-5)(x+2)=0$.',
          hint3: 'Roots are the opposites of the numbers inside the factors. #1: $-2,-4$ → smaller first $-4,-2$. #2: $5,-2$ → smaller first $-2,5$.',
          explanation: '1) $(x+2)(x+4)=0 \\Rightarrow x=-4, -2$.  2) $(x-5)(x+2)=0 \\Rightarrow x=-2, 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-quadratics-algebra1',
    sections: [
      {
        id: 'sq3-intro',
        type: 'text' as const,
        content: `# 🎯 Solving Quadratic Equations

**Part 3 of 5 — The Square Root Method**

---

> 🔑 **When to use it:** If the equation has **no middle ($x$) term** — it looks like $ax^2 + c = 0$ or $(x - h)^2 = k$ — you can isolate the square and take the square root of both sides. Fast and clean.`,
      },
      {
        id: 'sq3-method',
        type: 'text' as const,
        content: `## Taking the Square Root

To solve $x^2 = k$ (with $k \\ge 0$):

$$x^2 = k \\quad\\Longrightarrow\\quad x = \\pm\\sqrt{k}$$

> ⚠️ **The $\\pm$ is mandatory.** Every positive number has **two** square roots — one positive, one negative. Dropping the $\\pm$ loses a solution.

### Example: $x^2 = 49$

$$x = \\pm\\sqrt{49} = \\pm 7 \\quad\\Rightarrow\\quad x = 7 \\text{ or } x = -7$$

### Example: $3x^2 - 75 = 0$

Isolate $x^2$ first:
$$3x^2 = 75 \\;\\Rightarrow\\; x^2 = 25 \\;\\Rightarrow\\; x = \\pm 5$$`,
      },
      {
        id: 'sq3-binomial',
        type: 'text' as const,
        content: `## When the Square Is a Binomial

The same move works when a whole binomial is squared. Solve $(x - 3)^2 = 16$:

$$x - 3 = \\pm\\sqrt{16} = \\pm 4$$
$$x = 3 \\pm 4 \\quad\\Rightarrow\\quad x = 7 \\text{ or } x = -1$$

### Example: $(x + 2)^2 = 9$

$$x + 2 = \\pm 3 \\;\\Rightarrow\\; x = -2 \\pm 3 \\;\\Rightarrow\\; x = 1 \\text{ or } x = -5$$

> 💡 This is exactly the last step of *completing the square* — so mastering it here pays off everywhere.`,
      },
      {
        id: 'sq3-binomial-dropdown',
        type: 'dropdown-select' as const,
        content: `**Take the Root** 🔽

Walk through solving $(x + 4)^2 = 25$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'After taking $\\pm\\sqrt{\\;}$ of both sides:', options: ['$x + 4 = \\pm 5$', '$x + 4 = 5$', '$x = \\pm 5$', '$x + 4 = \\pm 25$'] },
            { label: 'Isolating $x$:', options: ['$x = -4 \\pm 5$', '$x = 4 \\pm 5$', '$x = -4 + 5$', '$x = \\pm 5 - 4$ only positive'] },
            { label: 'The two solutions:', options: ['$x = 1$ or $x = -9$', '$x = 9$ or $x = -1$', '$x = 1$ or $x = 9$', '$x = \\pm 5$'] },
          ],
          correctAnswers: ['$x + 4 = \\pm 5$', '$x = -4 \\pm 5$', '$x = 1$ or $x = -9$'],
          hint1: 'Take the square root of both sides and keep the $\\pm$: $\\sqrt{25} = 5$.',
          hint2: 'Subtract $4$ from both sides: $x = -4 \\pm 5$.',
          hint3: '$x = -4 + 5 = 1$ and $x = -4 - 5 = -9$.',
          explanation: '$(x+4)^2 = 25 \\Rightarrow x+4 = \\pm 5 \\Rightarrow x = -4 \\pm 5 \\Rightarrow x = 1$ or $x = -9$.',
        },
      },
      {
        id: 'sq3-no-real',
        type: 'text' as const,
        content: `## A Warning Sign: Negative Under the Root

What about $x^2 = -4$? There's **no real number** whose square is negative, since any real number squared is $\\ge 0$.

$$x^2 = -4 \\quad\\Rightarrow\\quad \\text{no real solutions}$$

> ⚠️ If isolating the square leaves a **negative** number on the other side, the equation has **no real solutions**. (In later courses you'll meet *imaginary* numbers that handle this — but in Algebra 1 we report "no real solution.")`,
      },
      {
        id: 'sq3-method-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x^2 = 81$.',
              options: ['$x = 9$ only', '$x = \\pm 9$', '$x = \\pm 40.5$', '$x = \\pm \\sqrt{81} = \\pm 9.5$'],
              correctAnswer: 1,
              explanation: 'Both $9^2 = 81$ and $(-9)^2 = 81$, so $x = \\pm 9$. Forgetting the negative root is the most common error here.',
            },
            {
              question: 'How many real solutions does $x^2 + 16 = 0$ have?',
              options: ['Two', 'One', 'Zero', 'Infinitely many'],
              correctAnswer: 2,
              explanation: 'Isolating gives $x^2 = -16$. No real number squares to a negative, so there are **zero** real solutions.',
            },
          ],
        },
      },
      {
        id: 'sq3-sqrt-drill',
        type: 'input-boxes' as const,
        content: `**Square Root Method** 🧮

Solve each. Enter the two solutions, **smaller value first**.

**1)** $x^2 = 36 \\Rightarrow x = \\,?$ and $x = \\,?$
**2)** $2x^2 = 50 \\Rightarrow x = \\,?$ and $x = \\,?$
**3)** $(x - 1)^2 = 25 \\Rightarrow x = \\,?$ and $x = \\,?$`,
        exercise: {
          boxes: 6,
          correctAnswers: ['-6', '6', '-5', '5', '-4', '6'],
          hint1: 'Isolate the square first, then take $\\pm\\sqrt{\\;}$ of both sides. Never drop the $\\pm$.',
          hint2: 'For #2: divide by $2$ to get $x^2 = 25$, so $x = \\pm 5$.',
          hint3: 'For #3: $x - 1 = \\pm 5$, so $x = 1 \\pm 5$, giving $6$ and $-4$. Smaller first: $-4$, then $6$.',
          explanation: '1) $x=\\pm 6$ → $-6, 6$.  2) $x^2=25 \\Rightarrow x=\\pm 5$ → $-5, 5$.  3) $x=1\\pm 5$ → $-4, 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-quadratics-algebra1',
    sections: [
      {
        id: 'sq4-intro',
        type: 'text' as const,
        content: `# 🎯 Solving Quadratic Equations

**Part 4 of 5 — The Quadratic Formula & Discriminant**

---

> 🔑 **The universal tool:** The Quadratic Formula solves **every** quadratic equation — even the ones that won't factor. Memorize it; it never fails.`,
      },
      {
        id: 'sq4-formula',
        type: 'text' as const,
        content: `## The Quadratic Formula

For any equation in standard form $ax^2 + bx + c = 0$ (with $a \\ne 0$):

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

To use it:
1. Write the equation in **standard form** and identify $a$, $b$, $c$.
2. Substitute carefully — **watch signs**, especially on $-b$ and on negative values of $c$.
3. Simplify the part under the root, then compute both the $+$ and $-$ versions.

> ⚠️ The whole numerator is $-b \\pm \\sqrt{\\,\\cdots\\,}$, and the **entire** thing is divided by $2a$. Keep the fraction bar under everything.`,
      },
      {
        id: 'sq4-worked',
        type: 'text' as const,
        content: `## Worked Example: Solve $x^2 + 5x + 6 = 0$

Here $a = 1$, $b = 5$, $c = 6$.

$$x = \\frac{-5 \\pm \\sqrt{5^2 - 4(1)(6)}}{2(1)} = \\frac{-5 \\pm \\sqrt{25 - 24}}{2} = \\frac{-5 \\pm \\sqrt{1}}{2}$$

$$x = \\frac{-5 \\pm 1}{2} \\quad\\Rightarrow\\quad x = \\frac{-4}{2} = -2 \\;\\text{ or }\\; x = \\frac{-6}{2} = -3$$

**Solutions:** $x = -2$ and $x = -3$.

> ✅ Same answer as factoring $(x+2)(x+3)=0$ — the formula always agrees, it just *always* works too.`,
      },
      {
        id: 'sq4-worked2',
        type: 'text' as const,
        content: `## Worked Example: Solve $2x^2 - 4x - 3 = 0$

This one does **not** factor with whole numbers, so the formula is essential. Here $a = 2$, $b = -4$, $c = -3$.

$$x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(2)(-3)}}{2(2)} = \\frac{4 \\pm \\sqrt{16 + 24}}{4} = \\frac{4 \\pm \\sqrt{40}}{4}$$

Since $\\sqrt{40} \\approx 6.32$:

$$x \\approx \\frac{4 + 6.32}{4} \\approx 2.58 \\qquad x \\approx \\frac{4 - 6.32}{4} \\approx -0.58$$

> 💡 Notice $-4(2)(-3) = +24$. A negative $c$ makes that term **positive** — the single most common sign slip in the formula.`,
      },
      {
        id: 'sq4-formula-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Formula** 🔽

You're solving $x^2 - 6x + 5 = 0$ with the Quadratic Formula. Fill in each piece. ($a=1$, $b=-6$, $c=5$.)`,
        exercise: {
          dropdowns: [
            { label: 'The value of $-b$:', options: ['$6$', '$-6$', '$5$', '$-5$'] },
            { label: 'The discriminant $b^2 - 4ac$:', options: ['$16$', '$36$', '$56$', '$-16$'] },
            { label: 'The denominator $2a$:', options: ['$2$', '$1$', '$-2$', '$6$'] },
            { label: 'The two solutions:', options: ['$x = 5, 1$', '$x = -5, -1$', '$x = 6, 0$', '$x = 3, 2$'] },
          ],
          correctAnswers: ['$6$', '$16$', '$2$', '$x = 5, 1$'],
          hint1: '$-b = -(-6) = 6$. The denominator is $2a = 2(1) = 2$.',
          hint2: '$b^2 - 4ac = (-6)^2 - 4(1)(5) = 36 - 20 = 16$.',
          hint3: '$x = \\dfrac{6 \\pm \\sqrt{16}}{2} = \\dfrac{6 \\pm 4}{2}$, giving $x = 5$ and $x = 1$.',
          explanation: '$x = \\frac{6 \\pm 4}{2} \\Rightarrow x = 5$ or $x = 1$. (Check: $(x-5)(x-1) = x^2-6x+5$ ✓.)',
        },
      },
      {
        id: 'sq4-discriminant',
        type: 'text' as const,
        content: `## The Discriminant: $b^2 - 4ac$

The expression under the root, $\\,b^2 - 4ac\\,$, is the **discriminant**. Its *sign* tells you how many real solutions exist — **before** you finish solving.

| Discriminant $b^2-4ac$ | Number of real solutions | Why |
|------------------------|--------------------------|-----|
| **positive** ($>0$) | **two** real solutions | $\\pm\\sqrt{\\text{positive}}$ gives two values |
| **zero** ($=0$) | **one** real solution (double root) | $\\pm\\sqrt{0} = 0$, so both branches coincide |
| **negative** ($<0$) | **no** real solutions | can't take $\\sqrt{\\text{negative}}$ in the reals |

### Example

For $x^2 + 5x + 6 = 0$: $\\;b^2 - 4ac = 25 - 24 = 1 > 0$ → **two** real solutions. ✓`,
      },
      {
        id: 'sq4-discriminant-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Without solving, how many real solutions does $x^2 + 4x + 4 = 0$ have? ($a=1, b=4, c=4$)',
              options: ['Two', 'One (double root)', 'Zero', 'Cannot be determined'],
              correctAnswer: 1,
              explanation: 'Discriminant $= 4^2 - 4(1)(4) = 16 - 16 = 0$. A zero discriminant means exactly **one** repeated real solution. (Indeed $(x+2)^2=0 \\Rightarrow x=-2$.)',
            },
            {
              question: 'The discriminant of a quadratic is $-12$. What does that tell you?',
              options: ['Two real solutions', 'One real solution', 'No real solutions', 'The equation is linear'],
              correctAnswer: 2,
              explanation: 'A negative discriminant means $\\sqrt{b^2-4ac}$ is not a real number, so the equation has **no real solutions**.',
            },
          ],
        },
      },
      {
        id: 'sq4-discriminant-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Discriminant** 🧮

Find $b^2 - 4ac$ for each equation (it's already in standard form).

**1)** $x^2 + 3x - 10 = 0 \\Rightarrow b^2-4ac = \\,?$
**2)** $x^2 - 6x + 9 = 0 \\Rightarrow b^2-4ac = \\,?$
**3)** $2x^2 + x + 5 = 0 \\Rightarrow b^2-4ac = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['49', '0', '-39'],
          hint1: 'Identify $a$, $b$, $c$, then compute $b^2 - 4ac$. Watch the sign of $c$.',
          hint2: 'For #1: $3^2 - 4(1)(-10) = 9 + 40 = 49$. The $-10$ makes $-4ac$ positive.',
          hint3: 'For #3: $1^2 - 4(2)(5) = 1 - 40 = -39$ (negative → no real solutions).',
          explanation: '1) $9 - (-40) = 49$ (two roots).  2) $36 - 36 = 0$ (one root).  3) $1 - 40 = -39$ (no real roots).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-quadratics-algebra1',
    sections: [
      {
        id: 'sq5-intro',
        type: 'text' as const,
        content: `# 🎯 Solving Quadratic Equations

**Part 5 of 5 — Choosing a Method, Mixed Practice & Mastery Check**

---

You now have **three** ways to solve a quadratic: factoring, the square root method, and the Quadratic Formula. The last skill is knowing **which** to reach for.`,
      },
      {
        id: 'sq5-choose',
        type: 'text' as const,
        content: `## Which Method Should I Use?

| If the equation… | Best first method | Why |
|------------------|-------------------|-----|
| has **no middle term** ($ax^2 + c = 0$) or is $(x-h)^2 = k$ | **Square root method** | one quick $\\pm\\sqrt{\\;}$ step |
| **factors nicely** (nice integer roots) | **Factoring** | fastest, no formula needed |
| won't factor / has messy or unknown roots | **Quadratic Formula** | always works on any quadratic |

> 🔑 **Golden rule:** Always get the equation into **standard form $= 0$ first**. Then look for the shortcut; if none is obvious, the Quadratic Formula is your guaranteed fallback.

> 💡 The discriminant $b^2-4ac$ is a great quick check: compute it first to learn *how many* real solutions to expect.`,
      },
      {
        id: 'sq5-choose-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Smartest Method** 🔽

Choose the most efficient first method for each equation.`,
        exercise: {
          dropdowns: [
            { label: '$x^2 - 64 = 0$', options: ['Square root method', 'Quadratic Formula', 'Graphing only', 'Cannot be solved'] },
            { label: '$x^2 + 9x + 20 = 0$ (factors nicely)', options: ['Factoring', 'Square root method', 'Cannot be solved', 'Guess and check'] },
            { label: '$3x^2 - 5x + 1 = 0$ (does not factor)', options: ['Quadratic Formula', 'Square root method', 'Factoring', 'Cannot be solved'] },
          ],
          correctAnswers: ['Square root method', 'Factoring', 'Quadratic Formula'],
          hint1: 'Look for the missing middle term, an easy factor pair, or "none of the above → formula."',
          hint2: '$x^2 - 64 = 0$ has no $x$ term: isolate to $x^2 = 64$ and take $\\pm\\sqrt{\\;}$.',
          hint3: '$3x^2-5x+1$ has no nice integer factors, so the Quadratic Formula is the reliable choice.',
          explanation: '$x^2-64=0 \\Rightarrow x=\\pm 8$ (square root); $x^2+9x+20=(x+4)(x+5)$ (factoring); $3x^2-5x+1$ needs the formula.',
        },
      },
      {
        id: 'sq5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x^2 - 11x + 28 = 0$.',
              options: ['$x = 4$ or $x = 7$', '$x = -4$ or $x = -7$', '$x = 4$ or $x = -7$', '$x = 14$ or $x = 2$'],
              correctAnswer: 0,
              explanation: 'Product $28$, sum $-11$ → $-4$ and $-7$, so $(x-4)(x-7)=0 \\Rightarrow x=4$ or $x=7$.',
            },
            {
              question: 'Solve $2x^2 - 18 = 0$.',
              options: ['$x = \\pm 3$', '$x = \\pm 9$', '$x = 3$ only', '$x = \\pm \\sqrt{18}$'],
              correctAnswer: 0,
              explanation: 'No middle term → square root method: $2x^2 = 18 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3$.',
            },
            {
              question: 'Using the Quadratic Formula, the solutions of $x^2 - 2x - 1 = 0$ are:',
              options: ['$x = 1 \\pm \\sqrt{2}$', '$x = -1 \\pm \\sqrt{2}$', '$x = 1 \\pm 2$', '$x = 2 \\pm \\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$x = \\dfrac{2 \\pm \\sqrt{4 - 4(1)(-1)}}{2} = \\dfrac{2 \\pm \\sqrt{8}}{2} = \\dfrac{2 \\pm 2\\sqrt{2}}{2} = 1 \\pm \\sqrt{2}$.',
            },
          ],
        },
      },
      {
        id: 'sq5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Solve It — Any Method** 🧮

**1)** $x^2 - 16 = 0$. Enter both roots, smaller first: $x = \\,?$ and $x = \\,?$
**2)** $x^2 + 2x - 15 = 0$. Enter both roots, smaller first: $x = \\,?$ and $x = \\,?$
**3)** What is the discriminant of $x^2 - 4x + 4 = 0$? $\\,?$`,
        exercise: {
          boxes: 5,
          correctAnswers: ['-4', '4', '-5', '3', '0'],
          hint1: '#1 has no middle term → square root method. #2 factors. #3: compute $b^2-4ac$.',
          hint2: '#1: $x^2 = 16 \\Rightarrow x = \\pm 4$. #2: factor pair for product $-15$, sum $2$ is $5$ and $-3$.',
          hint3: '#2: $(x+5)(x-3)=0 \\Rightarrow x=-5, 3$. #3: $(-4)^2 - 4(1)(4) = 16-16 = 0$.',
          explanation: '1) $x=\\pm 4$ → $-4, 4$.  2) $(x+5)(x-3)=0 \\Rightarrow x=-5, 3$.  3) discriminant $= 0$ (one double root).',
        },
      },
      {
        id: 'sq5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Get started | rearrange to standard form $ax^2+bx+c=0$ |
| Solve a factored product | Zero Product Property: each factor $= 0$ |
| Factor $x^2+bx+c$ | two numbers multiplying to $c$, adding to $b$ |
| No middle term / perfect square | $x = \\pm\\sqrt{k}$ (keep the $\\pm$!) |
| Any quadratic | $x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ |
| Count real solutions | sign of discriminant $b^2-4ac$ |

> ⚠️ **Top three pitfalls:** dropping the $\\pm$, forgetting to get a $0$ before using the Zero Product Property, and sign errors on $-b$ or a negative $c$ in the formula.`,
      },
      {
        id: 'sq5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the **first** step in solving any quadratic equation?',
              options: ['Take the square root', 'Write it in standard form $ax^2+bx+c=0$', 'Apply the Quadratic Formula', 'Graph the parabola'],
              correctAnswer: 1,
              explanation: 'You must get one side equal to $0$ (standard form) before factoring, identifying $a,b,c$, or applying any method.',
            },
            {
              question: 'The solutions of $(x + 1)^2 = 36$ are:',
              options: ['$x = 5$ or $x = -7$', '$x = 35$ or $x = -37$', '$x = \\pm 6$', '$x = 6$ or $x = -6$'],
              correctAnswer: 0,
              explanation: '$x + 1 = \\pm 6 \\Rightarrow x = -1 \\pm 6 \\Rightarrow x = 5$ or $x = -7$.',
            },
            {
              question: 'A quadratic has discriminant $b^2 - 4ac = 0$. How many real solutions does it have?',
              options: ['Two distinct solutions', 'Exactly one (a double root)', 'No real solutions', 'Three solutions'],
              correctAnswer: 1,
              explanation: 'A zero discriminant gives $\\pm\\sqrt{0} = 0$, so both branches of the formula land on the same value — exactly **one** repeated real solution.',
            },
          ],
        },
      },
    ],
  },
]
