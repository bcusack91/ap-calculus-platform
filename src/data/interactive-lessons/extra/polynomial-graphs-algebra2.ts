import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Graphing Polynomial Functions (Algebra 2).
 * Registry key: 'polynomial-graphs-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-graphs-algebra2',
    sections: [
      {
        id: 'pg1-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Polynomial Functions

**Part 1 of 5 — Degree, Leading Coefficient & End Behavior**

---

### Topics in This Part

| Section |
|---------|
| What Is a Polynomial Function? |
| Degree and the Leading Coefficient |
| The Four End-Behavior Cases |

> 🔑 **Key Concept:** Before plotting a single point, the two "ends" of a polynomial's graph are already decided — by just two numbers: the **degree** and the **leading coefficient**. Master those and you control the whole shape's frame.`,
      },
      {
        id: 'pg1-what',
        type: 'text' as const,
        content: `## What Is a Polynomial Function?

A **polynomial function** is a sum of terms of the form $a_n x^n$, where the exponents are **whole numbers** ($0, 1, 2, 3, \\dots$):

$$f(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$$

- The **degree** is the largest exponent, $n$.
- The **leading coefficient** is $a_n$ — the number on the highest-power term.
- The **constant term** is $a_0$ — it equals $f(0)$, the $y$-intercept.

### What counts as a polynomial?

| Function | Polynomial? | Why |
|----------|:-----------:|------|
| $f(x) = 3x^4 - x + 7$ | ✅ | whole-number exponents |
| $f(x) = 5$ | ✅ | constant, degree $0$ |
| $f(x) = x^{1/2} + 1$ | ❌ | $\\sqrt{x}$ — exponent not whole |
| $f(x) = \\dfrac{2}{x} + x$ | ❌ | $\\frac{2}{x} = 2x^{-1}$ — negative exponent |

> 💡 Every polynomial graph is a single **smooth, unbroken curve** — no sharp corners, no holes, no jumps, no vertical asymptotes.`,
      },
      {
        id: 'pg1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the degree and leading coefficient of $f(x) = 7 - 2x^3 + x^2$?',
              options: [
                'Degree $3$, leading coefficient $-2$',
                'Degree $2$, leading coefficient $1$',
                'Degree $3$, leading coefficient $7$',
                'Degree $7$, leading coefficient $3$',
              ],
              correctAnswer: 0,
              explanation: 'Reorder by descending powers: $-2x^3 + x^2 + 7$. The highest power is $3$ (degree), and its coefficient is $-2$. The leading term is found by the highest exponent, not by what is written first.',
            },
            {
              question: 'Which of these is NOT a polynomial function?',
              options: ['$g(x) = x^5 - 4x$', '$h(x) = 6$', '$p(x) = 3x^{-2} + x$', '$q(x) = -x^2 + 9x - 1$'],
              correctAnswer: 2,
              explanation: '$3x^{-2}$ has a negative exponent, so $p(x)$ is not a polynomial. The others use only whole-number exponents (a constant like $6$ is a degree-$0$ polynomial).',
            },
          ],
        },
      },
      {
        id: 'pg1-endbehavior',
        type: 'text' as const,
        content: `## End Behavior: The Four Cases

**End behavior** describes what happens to $f(x)$ as $x$ runs far left ($x \\to -\\infty$) and far right ($x \\to +\\infty$). It is controlled entirely by the **leading term** $a_n x^n$.

Two questions decide it:
1. Is the **degree** even or odd?
2. Is the **leading coefficient** positive or negative?

| Degree | Lead coeff. | Left end | Right end | Looks like |
|:------:|:-----------:|:--------:|:---------:|-----------|
| Even | $+$ | up | up | $\\cup$ (both up) |
| Even | $-$ | down | down | $\\cap$ (both down) |
| Odd | $+$ | down | up | $\\nearrow$ (rising) |
| Odd | $-$ | up | down | $\\searrow$ (falling) |

> 🔑 **Memory hook:** *Even acts like a parabola* (both ends agree). *Odd acts like a line* (ends disagree). A **negative** leading coefficient **flips** the picture upside-down.`,
      },
      {
        id: 'pg1-endbehavior-dd',
        type: 'dropdown-select' as const,
        content: `**Predict the Ends** 🔽

Use only the degree and the leading coefficient.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = 2x^4 - x + 1$ — left end goes:', options: ['up', 'down'] },
            { label: '$f(x) = 2x^4 - x + 1$ — right end goes:', options: ['up', 'down'] },
            { label: '$g(x) = -3x^5 + x^2$ — left end goes:', options: ['up', 'down'] },
            { label: '$g(x) = -3x^5 + x^2$ — right end goes:', options: ['up', 'down'] },
          ],
          correctAnswers: ['up', 'up', 'up', 'down'],
          hint1: '$f$ has degree $4$ (even) and a positive lead coefficient, so both ends go up.',
          hint2: '$g$ has degree $5$ (odd) and a negative lead coefficient $-3$, so it falls left-to-right.',
          hint3: 'Odd + negative = "up on the left, down on the right" — the mirror image of a basic cubic.',
          explanation: '$f$: even degree, positive lead → both ends up. $g$: odd degree, negative lead → up on the left, down on the right.',
        },
      },
      {
        id: 'pg1-wrap',
        type: 'text' as const,
        content: `## Why It Works

For huge $|x|$, the highest-power term dwarfs every other term. In $f(x) = 2x^4 - x + 1$ at $x = 100$, the $2x^4$ term is $200{,}000{,}000$ while $-x+1$ is only $-99$ — utterly negligible. So the leading term *is* the end behavior.

> 💡 Sign reminder for the leading term:
> - **Even** power keeps a negative $x$ **positive** ($(-)^{\\text{even}} = +$), so the left end matches the right end's sign.
> - **Odd** power keeps a negative $x$ **negative** ($(-)^{\\text{odd}} = -$), so the ends point opposite ways.

One last drill on degree before Part 2, where we find where the graph crosses the $x$-axis.`,
      },
      {
        id: 'pg1-degree-input',
        type: 'input-boxes' as const,
        content: `**Name the Degree** 🧮

Find the degree of each polynomial.

**1)** $f(x) = 9x^2 - x^6 + 4x$ — degree $= \\,?$
**2)** $g(x) = (x - 1)(x + 5)(x - 2)$ — degree $= \\,?$  *(think about the highest power if multiplied out)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '3'],
          hint1: 'The degree is the largest exponent that appears, regardless of the order written.',
          hint2: 'In $f$, the powers are $2$, $6$, and $1$ — the largest is $6$.',
          hint3: 'For a product of factors, the degree is the number of linear factors: three factors → degree $3$.',
          explanation: '1) The highest power is $x^6$, so degree $6$. 2) Three linear factors multiply to give a leading $x^3$, so degree $3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polynomial-graphs-algebra2',
    sections: [
      {
        id: 'pg2-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Polynomial Functions

**Part 2 of 5 — Zeros & $x$-Intercepts**

---

> 🔑 **The Idea:** A polynomial crosses or touches the $x$-axis exactly where $f(x) = 0$. Those inputs are the **zeros** (also called **roots**), and in factored form they're sitting in plain sight.`,
      },
      {
        id: 'pg2-zeros',
        type: 'text' as const,
        content: `## Zeros from Factored Form

If a polynomial is factored, the **Zero Product Property** does all the work: a product is $0$ only when one of its factors is $0$.

### Example: $f(x) = (x - 3)(x + 2)(x - 5)$

Set each factor to $0$:
$$x - 3 = 0 \\Rightarrow x = 3$$
$$x + 2 = 0 \\Rightarrow x = -2$$
$$x - 5 = 0 \\Rightarrow x = 5$$

So the $x$-intercepts are $(3, 0)$, $(-2, 0)$, and $(5, 0)$.

> ⚠️ **Watch the sign!** The factor $(x + 2)$ gives the zero $x = -2$, not $x = 2$. Always flip the sign of the constant inside the factor.

| Factor | Zero |
|--------|:----:|
| $(x - 3)$ | $x = 3$ |
| $(x + 2)$ | $x = -2$ |
| $(2x - 1)$ | $x = \\dfrac{1}{2}$ |
| $x$ | $x = 0$ |`,
      },
      {
        id: 'pg2-zeros-input',
        type: 'input-boxes' as const,
        content: `**Find the Zeros** 🧮

Read the zeros straight from each factored polynomial.

**1)** $f(x) = (x - 4)(x + 6)$ — the two zeros are $x = \\,?$ and $x = \\,?$  *(enter the smaller, then the larger)*
**2)** $g(x) = x(2x - 3)$ — the nonzero zero is $x = \\,?$  *(fraction or decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-6', '4', '3/2'],
          hint1: '$(x - 4) = 0 \\Rightarrow x = 4$ and $(x + 6) = 0 \\Rightarrow x = -6$. Smaller first: $-6$, then $4$.',
          hint2: 'For $g$: the factor $x$ gives $x = 0$; the other factor $2x - 3 = 0$.',
          hint3: '$2x - 3 = 0 \\Rightarrow 2x = 3 \\Rightarrow x = \\frac{3}{2} = 1.5$.',
          explanation: '1) Zeros are $-6$ and $4$. 2) $2x - 3 = 0 \\Rightarrow x = \\frac{3}{2}$ (you could also enter $1.5$).',
        },
      },
      {
        id: 'pg2-factor-theorem',
        type: 'text' as const,
        content: `## The Factor Theorem

The connection runs both directions:

$$\\boxed{\\;(x - c) \\text{ is a factor} \\;\\Longleftrightarrow\\; f(c) = 0 \\;\\Longleftrightarrow\\; c \\text{ is a zero}\\;}$$

So *"zero of the function," "root of the equation," "$x$-intercept of the graph,"* and *"factor of the polynomial"* are four names for the same thing.

### Verifying a zero

Is $x = 2$ a zero of $f(x) = x^3 - 2x^2 - x + 2$? Plug it in:
$$f(2) = 8 - 8 - 2 + 2 = 0 \\;\\checkmark$$

Yes — so $(x - 2)$ is a factor.

> 💡 **The Fundamental Theorem of Algebra** guarantees a degree-$n$ polynomial has **at most $n$ real zeros** (counting how many times a graph can cross the $x$-axis). A cubic crosses at most $3$ times; a quartic, at most $4$.`,
      },
      {
        id: 'pg2-theorem-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f(-3) = 0$, which statement must be true?',
              options: [
                '$(x + 3)$ is a factor of $f(x)$',
                '$(x - 3)$ is a factor of $f(x)$',
                'The $y$-intercept is $-3$',
                '$f(x)$ has degree $3$',
              ],
              correctAnswer: 0,
              explanation: 'A zero at $x = -3$ corresponds to the factor $(x - (-3)) = (x + 3)$. That is exactly the Factor Theorem.',
            },
            {
              question: 'At most how many real zeros can $f(x) = x^4 - 5x^2 + 4$ have?',
              options: ['$4$', '$2$', '$5$', 'unlimited'],
              correctAnswer: 0,
              explanation: 'The degree is $4$, so there are at most $4$ real zeros. (In fact this one factors to $(x-1)(x+1)(x-2)(x+2)$, hitting all four.)',
            },
          ],
        },
      },
      {
        id: 'pg2-yintercept',
        type: 'text' as const,
        content: `## Don't Forget the $y$-Intercept

The **$y$-intercept** is always $f(0)$ — just substitute $x = 0$.

### Example: $f(x) = (x - 3)(x + 2)(x - 5)$

$$f(0) = (0 - 3)(0 + 2)(0 - 5) = (-3)(2)(-5) = 30$$

So the graph passes through $(0, 30)$.

> 🔑 A polynomial graph has **exactly one** $y$-intercept (a function has only one output at $x=0$) but can have **several** $x$-intercepts. In Part 3 we find out whether the curve **crosses** or just **touches** at each one.`,
      },
      {
        id: 'pg2-zeros-dd',
        type: 'dropdown-select' as const,
        content: `**Match Factor to Zero** 🔽

Pick the zero produced by each factor.`,
        exercise: {
          dropdowns: [
            { label: '$(x - 7)$ gives the zero:', options: ['$x = 7$', '$x = -7$', '$x = \\frac{1}{7}$'] },
            { label: '$(x + 9)$ gives the zero:', options: ['$x = 9$', '$x = -9$', '$x = 0$'] },
            { label: '$(3x + 6)$ gives the zero:', options: ['$x = -2$', '$x = 2$', '$x = -6$'] },
          ],
          correctAnswers: ['$x = 7$', '$x = -9$', '$x = -2$'],
          hint1: 'Set each factor equal to $0$ and solve for $x$.',
          hint2: '$(x + 9) = 0 \\Rightarrow x = -9$ — flip the sign of the constant.',
          hint3: '$3x + 6 = 0 \\Rightarrow 3x = -6 \\Rightarrow x = -2$.',
          explanation: '$(x-7) \\to 7$; $(x+9) \\to -9$; $(3x+6) \\to -2$. Always solve the factor $=0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-graphs-algebra2',
    sections: [
      {
        id: 'pg3-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Polynomial Functions

**Part 3 of 5 — Multiplicity: Cross vs. Touch**

---

> 🔑 **The Idea:** A repeated factor changes *how* the graph meets the $x$-axis. The exponent on a factor — its **multiplicity** — tells you whether the curve slices **through** the axis or just **bounces** off it.`,
      },
      {
        id: 'pg3-multiplicity',
        type: 'text' as const,
        content: `## What Is Multiplicity?

The **multiplicity** of a zero is the exponent on its factor.

$$f(x) = (x - 1)^{1}(x + 2)^{2}(x - 4)^{3}$$

| Zero | Factor | Multiplicity |
|:----:|--------|:------------:|
| $x = 1$ | $(x - 1)^1$ | $1$ |
| $x = -2$ | $(x + 2)^2$ | $2$ |
| $x = 4$ | $(x - 4)^3$ | $3$ |

### The Cross-vs-Touch Rule

| Multiplicity | Behavior at the zero | Picture |
|:------------:|----------------------|---------|
| **Odd** ($1, 3, 5, \\dots$) | **crosses** the $x$-axis | passes through |
| **Even** ($2, 4, \\dots$) | **touches** and turns back (bounce) | like a vertex |

> 🔑 **Odd = cross, Even = touch.** Higher odd multiplicity (like $3$) makes the crossing **flatten** as it passes through; higher even multiplicity flattens the bounce.`,
      },
      {
        id: 'pg3-mult-dd',
        type: 'dropdown-select' as const,
        content: `**Cross or Touch?** 🔽

For $f(x) = (x + 1)^2(x - 3)(x - 5)^4$, decide what the graph does at each zero.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = -1$ (multiplicity $2$):', options: ['crosses', 'touches'] },
            { label: 'At $x = 3$ (multiplicity $1$):', options: ['crosses', 'touches'] },
            { label: 'At $x = 5$ (multiplicity $4$):', options: ['crosses', 'touches'] },
          ],
          correctAnswers: ['touches', 'crosses', 'touches'],
          hint1: 'Odd multiplicity crosses; even multiplicity touches and bounces.',
          hint2: 'Multiplicity $2$ and $4$ are even — both touches.',
          hint3: 'Only $x = 3$ has an odd multiplicity (1), so it is the lone crossing.',
          explanation: '$x=-1$ (mult. $2$, even) → touches; $x=3$ (mult. $1$, odd) → crosses; $x=5$ (mult. $4$, even) → touches.',
        },
      },
      {
        id: 'pg3-degree-mult',
        type: 'text' as const,
        content: `## Multiplicities Add Up to the Degree

The multiplicities of all real zeros (plus any complex ones) **sum to the degree**. This is a powerful self-check.

### Example: $f(x) = (x + 1)^2(x - 3)(x - 5)^4$

$$\\underbrace{2}_{x=-1} + \\underbrace{1}_{x=3} + \\underbrace{4}_{x=5} = 7$$

So this is a **degree-7** polynomial. Its leading term is $1 \\cdot x^7$ (odd degree, positive lead) → **down on the left, up on the right**.

> 💡 If the multiplicities of the *real* zeros add up to **less** than the degree, the leftover degree is taken up by **complex zeros**, which never show on the real graph. A degree-$4$ with only two real zeros (each multiplicity $1$) has $2$ complex zeros hiding off-screen.`,
      },
      {
        id: 'pg3-mult-input',
        type: 'input-boxes' as const,
        content: `**Degree from Multiplicities** 🧮

**1)** $f(x) = (x - 2)^3(x + 4)^2$ — what is the degree of $f$?
**2)** A degree-$5$ polynomial has zeros $x = 0$ (mult. $1$) and $x = 6$ (mult. $2$). If those are its only real zeros, how many **complex** zeros does it have?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '2'],
          hint1: 'Add the exponents (multiplicities): $3 + 2$.',
          hint2: 'Real multiplicities used: $1 + 2 = 3$. Degree is $5$.',
          hint3: 'Complex zeros $=$ degree $-$ (sum of real multiplicities) $= 5 - 3$.',
          explanation: '1) Degree $= 3 + 2 = 5$. 2) Real multiplicities sum to $1 + 2 = 3$, so $5 - 3 = 2$ complex zeros fill the rest.',
        },
      },
      {
        id: 'pg3-turning',
        type: 'text' as const,
        content: `## Turning Points

A **turning point** is where the graph changes direction (a local max or min). For a polynomial of degree $n$:

$$\\text{number of turning points} \\;\\le\\; n - 1$$

| Degree | Max turning points |
|:------:|:------------------:|
| $2$ (parabola) | $1$ |
| $3$ (cubic) | $2$ |
| $4$ (quartic) | $3$ |
| $n$ | $n - 1$ |

> 💡 A degree-$4$ graph wiggles **at most** $3$ times. If you've sketched $4$ turning points, you've made a mistake. Combined with end behavior and the cross/touch rule, the turning-point cap keeps your sketch honest.`,
      },
      {
        id: 'pg3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At a zero with multiplicity $3$, the graph will:',
              options: [
                'cross the $x$-axis, flattening as it passes through',
                'touch the $x$-axis and bounce back',
                'have a vertical asymptote',
                'jump discontinuously',
              ],
              correctAnswer: 0,
              explanation: 'Multiplicity $3$ is odd, so the graph crosses. Because $3 > 1$, it flattens (an inflection-like flattening) right at the crossing. Polynomials never have asymptotes or jumps.',
            },
            {
              question: 'What is the maximum number of turning points for a degree-$6$ polynomial?',
              options: ['$5$', '$6$', '$7$', '$3$'],
              correctAnswer: 0,
              explanation: 'A degree-$n$ polynomial has at most $n - 1$ turning points, so $6 - 1 = 5$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-graphs-algebra2',
    sections: [
      {
        id: 'pg4-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Polynomial Functions

**Part 4 of 5 — Sketching a Full Graph**

---

> 🔑 **The Payoff:** With end behavior, zeros, multiplicities, and the $y$-intercept, you can sketch any factored polynomial **without plotting dozens of points**. This part is the full assembly line.`,
      },
      {
        id: 'pg4-recipe',
        type: 'text' as const,
        content: `## The 5-Step Sketch Recipe

To graph a polynomial in factored form:

1. **End behavior** — read degree (sum of multiplicities) and the sign of the leading coefficient.
2. **$x$-intercepts** — set each factor to $0$.
3. **Multiplicity** — at each zero decide cross (odd) or touch (even).
4. **$y$-intercept** — compute $f(0)$.
5. **Connect** — draw a smooth curve obeying the end behavior, hitting each intercept correctly, never exceeding $n - 1$ turning points.

> ⚠️ A polynomial can only change sign at an $x$-intercept where it **crosses**. Between consecutive crossings the graph stays entirely above or entirely below the axis — use that to place your turns.`,
      },
      {
        id: 'pg4-dd',
        type: 'dropdown-select' as const,
        content: `**Build the Sketch** 🔽

Analyze $g(x) = (x + 3)(x - 2)^2$ one feature at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Degree of $g$:', options: ['$2$', '$3$', '$4$'] },
            { label: 'Leading coefficient sign:', options: ['positive', 'negative'] },
            { label: 'End behavior:', options: ['down-left, up-right', 'up-left, down-right', 'both ends up', 'both ends down'] },
            { label: 'At $x = 2$ the graph:', options: ['crosses', 'touches'] },
          ],
          correctAnswers: ['$3$', 'positive', 'down-left, up-right', 'touches'],
          hint1: 'Degree is the sum of multiplicities: $1 + 2 = 3$.',
          hint2: 'The product of the leading $1$\'s is $+1$, so positive; odd degree + positive lead.',
          hint3: '$(x-2)^2$ has even multiplicity $2$, so the graph touches at $x = 2$.',
          explanation: 'Degree $3$, positive lead → down-left/up-right. $x=-3$ (mult. $1$) crosses; $x=2$ (mult. $2$) touches.',
        },
      },
      {
        id: 'pg4-worked',
        type: 'text' as const,
        content: `## Worked Example

Sketch $f(x) = -(x + 2)(x - 1)^2$.

**Step 1 — End behavior.** Degree $= 1 + 2 = 3$ (odd). Leading coefficient: multiply the leads of each factor and the front sign:
$$-(1)(1)^2 = -1 \\;(\\text{negative}).$$
Odd degree, negative lead → **up on the left, down on the right**.

**Step 2 — Zeros.** $x = -2$ and $x = 1$.

**Step 3 — Multiplicity.** $x = -2$ has multiplicity $1$ → **crosses**. $x = 1$ has multiplicity $2$ → **touches**.

**Step 4 — $y$-intercept.**
$$f(0) = -(0 + 2)(0 - 1)^2 = -(2)(1) = -2 \\;\\Rightarrow\\; (0, -2).$$

**Step 5 — Connect.** Come down from the upper left, cross at $x = -2$, rise to a peak, pass through $(0, -2)$ on the way down... actually let's confirm the shape with the sign chart below.`,
      },
      {
        id: 'pg4-input',
        type: 'input-boxes' as const,
        content: `**Key Features** 🧮

For $h(x) = 2(x - 1)(x + 3)(x - 4)$:

**1)** What is the $y$-intercept? (Enter $h(0)$.)
**2)** How many times does the graph **cross** the $x$-axis?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['24', '3'],
          hint1: '$h(0) = 2(0 - 1)(0 + 3)(0 - 4) = 2(-1)(3)(-4)$.',
          hint2: 'Multiply step by step: $(-1)(3) = -3$, then $(-3)(-4) = 12$, then $2 \\cdot 12$.',
          hint3: 'Each factor has multiplicity $1$ (odd) → each zero is a crossing. There are three distinct zeros.',
          explanation: '1) $h(0) = 2(-1)(3)(-4) = 24$, so the $y$-intercept is $(0, 24)$. 2) All three zeros have multiplicity $1$, so the graph crosses $3$ times.',
        },
      },
      {
        id: 'pg4-signchart',
        type: 'text' as const,
        content: `## The Sign Chart (Confirming the Shape)

Test one point in each interval split by the zeros $x = -2$ and $x = 1$ for $f(x) = -(x + 2)(x - 1)^2$:

| Interval | Test $x$ | $f(x)$ computation | Sign |
|----------|:--------:|--------------------|:----:|
| $x < -2$ | $-3$ | $-(-1)(16) = 16$ | $+$ (above) |
| $-2 < x < 1$ | $0$ | $-(2)(1) = -2$ | $-$ (below) |
| $x > 1$ | $2$ | $-(4)(1) = -4$ | $-$ (below) |

Notice the graph is **above** the axis left of $-2$, **crosses** to below at $x = -2$, and stays **below** through the **touch** at $x = 1$ — the sign does *not* change at the even-multiplicity zero. ✓ This matches "up-left, down-right" end behavior perfectly.

> ✅ **Self-check:** the graph changes sign only at $x=-2$ (a crossing) and never at $x=1$ (a touch). That is exactly what odd vs. even multiplicity predicts.`,
      },
      {
        id: 'pg4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Between two consecutive $x$-intercepts where the graph crosses, the polynomial is:',
              options: [
                'entirely above OR entirely below the $x$-axis',
                'sometimes above and sometimes below, switching freely',
                'always equal to zero',
                'undefined',
              ],
              correctAnswer: 0,
              explanation: 'A polynomial can only change sign where it crosses the axis. Between two crossings (with no zero in between) it cannot switch sign, so it stays entirely on one side.',
            },
            {
              question: 'A sketch of $f(x) = -(x+2)(x-1)^2$ should come from the upper left because:',
              options: [
                'the degree is odd ($3$) and the leading coefficient is negative',
                'the degree is even and the lead is positive',
                'it has a $y$-intercept of $-2$',
                'it touches at $x = 1$',
              ],
              correctAnswer: 0,
              explanation: 'End behavior depends only on degree and leading-coefficient sign. Degree $3$ (odd) with a negative lead means up on the left, down on the right — so the curve enters from the upper left.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-graphs-algebra2',
    sections: [
      {
        id: 'pg5-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Polynomial Functions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read end behavior from the leading term, (2) find zeros and the $y$-intercept, (3) use multiplicity to decide cross vs. touch, and (4) assemble a complete sketch. Let's tie it together.`,
      },
      {
        id: 'pg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Feature | How to find it |
|---------|----------------|
| End behavior | degree even/odd + sign of leading coefficient |
| Degree (factored form) | sum of all multiplicities |
| $x$-intercepts (zeros) | set each factor $= 0$ |
| Cross vs. touch | odd multiplicity → cross; even → touch |
| $y$-intercept | compute $f(0)$ |
| Max turning points | $n - 1$ |

> ⚠️ **Top mistakes to avoid:** flipping the sign of a zero (factor $(x+5)$ → zero $-5$, not $+5$); calling an even-multiplicity touch a crossing; forgetting that a negative leading coefficient flips both ends.`,
      },
      {
        id: 'pg5-mixed-dd',
        type: 'dropdown-select' as const,
        content: `**Full Analysis** 🔽

Analyze $f(x) = -2(x + 1)^2(x - 3)$.`,
        exercise: {
          dropdowns: [
            { label: 'Degree:', options: ['$2$', '$3$', '$4$'] },
            { label: 'End behavior:', options: ['up-left, down-right', 'down-left, up-right', 'both up', 'both down'] },
            { label: 'At $x = -1$:', options: ['crosses', 'touches'] },
            { label: '$y$-intercept $f(0)$:', options: ['$6$', '$-6$', '$3$', '$-3$'] },
          ],
          correctAnswers: ['$3$', 'up-left, down-right', 'touches', '$6$'],
          hint1: 'Degree $= 2 + 1 = 3$ (odd). Leading coefficient: $-2(1)^2(1) = -2$ (negative).',
          hint2: 'Odd degree + negative lead → up on the left, down on the right.',
          hint3: '$f(0) = -2(0+1)^2(0-3) = -2(1)(-3) = 6$. And $(x+1)^2$ is even → touches at $x=-1$.',
          explanation: 'Degree $3$, negative lead → up-left/down-right. $x=-1$ has even multiplicity $2$ → touches. $f(0) = -2(1)(-3) = 6$.',
        },
      },
      {
        id: 'pg5-bridge',
        type: 'text' as const,
        content: `## Reading a Graph Backward

So far you've gone *equation → graph*. The same rules run in reverse:

- **Both ends down** ⇒ even degree, negative leading coefficient.
- **A bounce** at an intercept ⇒ that factor has even multiplicity.
- **A flattened crossing** ⇒ odd multiplicity of $3$ or more.

The next two questions ask you to spot exactly these signatures.`,
      },
      {
        id: 'pg5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which polynomial has both ends pointing DOWN?',
              options: [
                '$f(x) = -x^4 + 3x^2$',
                '$f(x) = x^4 - 3x^2$',
                '$f(x) = -x^3 + x$',
                '$f(x) = x^5 - x$',
              ],
              correctAnswer: 0,
              explanation: 'Both ends down requires even degree with a negative leading coefficient. $-x^4$ has degree $4$ (even) and a negative lead, so both ends go down. The cubic and quintic have opposite-pointing ends; $x^4 - 3x^2$ points both up.',
            },
            {
              question: 'A degree-$4$ polynomial has zeros at $x = -2$ (mult. $1$), $x = 1$ (mult. $1$), and $x = 3$ (mult. $2$). At which zero does the graph TOUCH rather than cross?',
              options: ['$x = 3$', '$x = -2$', '$x = 1$', 'It crosses at all three'],
              correctAnswer: 0,
              explanation: 'Only $x = 3$ has even multiplicity ($2$), so the graph touches and turns there. The multiplicities sum to $1 + 1 + 2 = 4$, matching the degree.',
            },
          ],
        },
      },
      {
        id: 'pg5-checklist',
        type: 'text' as const,
        content: `## One Last Checklist Before the Quiz

When you analyze any factored polynomial, hit these four in order:

1. **Degree** = sum of multiplicities → tells you the end-behavior *family*.
2. **Leading-coefficient sign** → confirms which way the ends point.
3. **Each zero's multiplicity** → cross (odd) or touch (even).
4. **$f(0)$** → the single $y$-intercept.

> 🔑 Get those four right and the sketch is forced — there's only one smooth curve that fits. Now finish with the Exit Quiz.`,
      },
      {
        id: 'pg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Describe the end behavior of $f(x) = 3x^5 - 7x^2 + 1$.',
              options: [
                'Down on the left, up on the right',
                'Up on the left, down on the right',
                'Both ends up',
                'Both ends down',
              ],
              correctAnswer: 0,
              explanation: 'Degree $5$ is odd and the leading coefficient $3$ is positive, so the graph falls on the left and rises on the right (down-left, up-right).',
            },
            {
              question: 'What are the zeros of $f(x) = (2x - 1)(x + 4)$?',
              options: [
                '$x = \\frac{1}{2}$ and $x = -4$',
                '$x = -\\frac{1}{2}$ and $x = 4$',
                '$x = 2$ and $x = -4$',
                '$x = 1$ and $x = 4$',
              ],
              correctAnswer: 0,
              explanation: '$2x - 1 = 0 \\Rightarrow x = \\frac{1}{2}$, and $x + 4 = 0 \\Rightarrow x = -4$.',
            },
            {
              question: 'For $f(x) = (x - 2)^4(x + 1)$, what is the degree and how does the graph behave at $x = 2$?',
              options: [
                'Degree $5$; touches (bounces) at $x = 2$',
                'Degree $5$; crosses at $x = 2$',
                'Degree $4$; touches at $x = 2$',
                'Degree $20$; crosses at $x = 2$',
              ],
              correctAnswer: 0,
              explanation: 'Degree $= 4 + 1 = 5$. The factor $(x-2)^4$ has even multiplicity $4$, so the graph touches and turns back at $x = 2$ rather than crossing.',
            },
          ],
        },
      },
    ],
  },
]
