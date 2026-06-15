import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Intermediate Algebra & Coordinate Geometry (ACT Prep).
 * Registry key: 'act-intermediate-algebra' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'act-intermediate-algebra',
    sections: [
      {
        id: 'aia1-intro',
        type: 'text' as const,
        content: `# 📐 Intermediate Algebra & Coordinate Geometry

**Part 1 of 5 — Exponents, Radicals & Algebraic Expressions**

---

### Topics in This Part

| Section |
|---------|
| The Exponent Rules |
| Negative & Zero Exponents |
| Simplifying Radicals |
| Rationalizing the Denominator |

> 🔑 **Key Concept:** The ACT *Intermediate Algebra & Coordinate Geometry* reporting category is worth roughly **18 of the 60 math questions** — the single biggest slice. It rewards students who can manipulate exponents and radicals quickly and read the $xy$-plane fluently. Part 1 locks down the algebra of powers and roots.`,
      },
      {
        id: 'aia1-exprules',
        type: 'text' as const,
        content: `## The Exponent Rules

Every exponent question on the ACT reduces to these five rules:

| Rule | Statement | Example |
|------|-----------|---------|
| Product | $x^a \\cdot x^b = x^{a+b}$ | $x^3 \\cdot x^4 = x^7$ |
| Quotient | $\\dfrac{x^a}{x^b} = x^{a-b}$ | $\\dfrac{x^9}{x^2} = x^7$ |
| Power of a power | $(x^a)^b = x^{ab}$ | $(x^2)^5 = x^{10}$ |
| Power of a product | $(xy)^a = x^a y^a$ | $(2x)^3 = 8x^3$ |
| Power of a quotient | $\\left(\\dfrac{x}{y}\\right)^a = \\dfrac{x^a}{y^a}$ | $\\left(\\dfrac{x}{3}\\right)^2 = \\dfrac{x^2}{9}$ |

> ⚠️ **Trap:** you **add** exponents when you *multiply* like bases, but **multiply** exponents when you *raise a power to a power*. Mixing these two up is the most common exponent error on the test.

**Worked example:** simplify $\\dfrac{(2x^2)^3}{4x^4}$.

$$\\frac{(2x^2)^3}{4x^4} = \\frac{8x^6}{4x^4} = 2x^{6-4} = 2x^2$$`,
      },
      {
        id: 'aia1-mc-rules',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $(3x^4)(2x^5)$.',
              options: ['$6x^9$', '$5x^9$', '$6x^{20}$', '$6x^{45}$'],
              correctAnswer: 0,
              explanation: 'Multiply the coefficients ($3\\cdot 2 = 6$) and **add** the exponents of like bases ($4+5=9$): $6x^9$.',
            },
            {
              question: 'Simplify $(2x^3)^4$.',
              options: ['$2x^{12}$', '$16x^7$', '$16x^{12}$', '$8x^{12}$'],
              correctAnswer: 2,
              explanation: 'Raise *each* factor to the 4th power: $2^4 = 16$ and $(x^3)^4 = x^{12}$, giving $16x^{12}$.',
            },
          ],
        },
      },
      {
        id: 'aia1-negzero',
        type: 'text' as const,
        content: `## Negative & Zero Exponents

Two special cases trip up a lot of students:

$$x^0 = 1 \\quad (x \\ne 0) \\qquad\\qquad x^{-n} = \\frac{1}{x^n}$$

A **negative exponent** is a signal to **flip** the base across the fraction bar — it does **not** make the value negative.

| Expression | Rewrite | Value |
|------------|---------|-------|
| $5^0$ | — | $1$ |
| $2^{-3}$ | $\\dfrac{1}{2^3}$ | $\\dfrac{1}{8}$ |
| $\\dfrac{1}{x^{-2}}$ | $x^2$ | $x^2$ |
| $\\left(\\dfrac{3}{4}\\right)^{-1}$ | $\\dfrac{4}{3}$ | $\\dfrac{4}{3}$ |

> 💡 **Fraction shortcut:** $\\left(\\dfrac{a}{b}\\right)^{-n} = \\left(\\dfrac{b}{a}\\right)^{n}$ — a negative exponent just turns a fraction upside down.`,
      },
      {
        id: 'aia1-input-neg',
        type: 'input-boxes' as const,
        content: `**Evaluate the Powers** 🧮

Enter each value as an integer or fraction (e.g. \`1/8\`).

**1)** $4^0 + 3^0 = \\,?$
**2)** $2^{-4} = \\,?$
**3)** $\\left(\\dfrac{2}{5}\\right)^{-2} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1/16', '25/4'],
          hint1: 'Anything nonzero to the $0$ power is $1$, so $4^0 + 3^0 = 1 + 1$.',
          hint2: '$2^{-4} = \\dfrac{1}{2^4} = \\dfrac{1}{16}$.',
          hint3: 'Flip the fraction and drop the negative: $\\left(\\dfrac{2}{5}\\right)^{-2} = \\left(\\dfrac{5}{2}\\right)^{2} = \\dfrac{25}{4}$.',
          explanation: '1) $1+1 = 2$.  2) $\\dfrac{1}{16}$.  3) $\\left(\\dfrac{5}{2}\\right)^2 = \\dfrac{25}{4}$.',
        },
      },
      {
        id: 'aia1-radicals',
        type: 'text' as const,
        content: `## Simplifying Radicals

To simplify a square root, **pull out the largest perfect-square factor**:

$$\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$$

**Worked example:** $\\sqrt{72}$. Since $72 = 36 \\cdot 2$ and $36$ is a perfect square,

$$\\sqrt{72} = \\sqrt{36}\\cdot\\sqrt{2} = 6\\sqrt{2}.$$

### Rationalizing the Denominator

The ACT prefers answer choices with **no radical in the denominator**. Multiply top and bottom by the radical:

$$\\frac{3}{\\sqrt{2}} = \\frac{3}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{2}.$$

> 🔑 **Fractional exponents** are radicals in disguise: $x^{1/2} = \\sqrt{x}$ and $x^{m/n} = \\sqrt[n]{x^{\\,m}}$. So $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.`,
      },
      {
        id: 'aia1-mc-radicals',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{50}$.',
              options: ['$5\\sqrt{2}$', '$2\\sqrt{5}$', '$25\\sqrt{2}$', '$\\sqrt{50}$'],
              correctAnswer: 0,
              explanation: '$50 = 25\\cdot 2$, and $\\sqrt{25} = 5$, so $\\sqrt{50} = 5\\sqrt{2}$.',
            },
            {
              question: 'Evaluate $27^{2/3}$.',
              options: ['$9$', '$18$', '$6$', '$3$'],
              correctAnswer: 0,
              explanation: '$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'act-intermediate-algebra',
    sections: [
      {
        id: 'aia2-intro',
        type: 'text' as const,
        content: `# 📐 Intermediate Algebra & Coordinate Geometry

**Part 2 of 5 — Quadratics: Factoring, the Formula & Systems**

---

> 🔑 **The Idea:** A quadratic $ax^2 + bx + c = 0$ can be solved three ways — **factoring**, the **quadratic formula**, and (sometimes) the **square-root method**. The ACT expects you to pick the fastest one and to know the link between *roots* and *factors*.`,
      },
      {
        id: 'aia2-factoring',
        type: 'text' as const,
        content: `## Factoring & the Zero-Product Property

When $ax^2 + bx + c$ factors with $a = 1$, find two numbers that **multiply to $c$** and **add to $b$**.

**Worked example:** solve $x^2 + 2x - 15 = 0$.

We need two numbers with product $-15$ and sum $+2$: those are $+5$ and $-3$.

$$x^2 + 2x - 15 = (x+5)(x-3) = 0$$

By the **zero-product property**, set each factor to $0$:

$$x + 5 = 0 \\;\\Rightarrow\\; x = -5 \\qquad x - 3 = 0 \\;\\Rightarrow\\; x = 3.$$

> 💡 **Roots ⇄ factors:** if $x = r$ is a root, then $(x - r)$ is a factor. So a quadratic with roots $4$ and $-1$ is $(x-4)(x+1) = x^2 - 3x - 4$.`,
      },
      {
        id: 'aia2-mc-factor',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What are the solutions of $x^2 - 7x + 12 = 0$?',
              options: ['$x = 3 \\text{ or } 4$', '$x = -3 \\text{ or } -4$', '$x = 2 \\text{ or } 6$', '$x = 1 \\text{ or } 12$'],
              correctAnswer: 0,
              explanation: 'Two numbers multiplying to $12$ and adding to $-7$ are $-3$ and $-4$: $(x-3)(x-4)=0$, so $x = 3$ or $4$.',
            },
            {
              question: 'A quadratic has roots $x = -2$ and $x = 5$. Which expression equals it?',
              options: ['$(x+2)(x-5)$', '$(x-2)(x+5)$', '$(x+2)(x+5)$', '$(x-2)(x-5)$'],
              correctAnswer: 0,
              explanation: 'A root $r$ gives factor $(x - r)$. Roots $-2$ and $5$ give $(x-(-2))(x-5) = (x+2)(x-5)$.',
            },
          ],
        },
      },
      {
        id: 'aia2-formula',
        type: 'text' as const,
        content: `## The Quadratic Formula

When a quadratic won't factor nicely, use:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The quantity under the radical, $b^2 - 4ac$, is the **discriminant**. It tells you how many real solutions exist:

| Discriminant $b^2 - 4ac$ | Real solutions |
|--------------------------|----------------|
| Positive | **2** distinct real roots |
| Zero | **1** repeated real root |
| Negative | **0** real roots (two complex) |

**Worked example:** solve $x^2 + 4x + 1 = 0$ ($a=1, b=4, c=1$).

$$x = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2(1)} = \\frac{-4 \\pm \\sqrt{12}}{2} = \\frac{-4 \\pm 2\\sqrt{3}}{2} = -2 \\pm \\sqrt{3}.$$

> ⚠️ Watch the signs when computing $b^2 - 4ac$: if $c$ is negative, $-4ac$ becomes **positive**, which *enlarges* the discriminant.`,
      },
      {
        id: 'aia2-dropdown-disc',
        type: 'dropdown-select' as const,
        content: `**Read the Discriminant** 🔽

For each quadratic, decide how many real solutions it has.`,
        exercise: {
          dropdowns: [
            { label: '$x^2 + 6x + 9 = 0$:', options: ['exactly 1 real root', '2 real roots', 'no real roots'] },
            { label: '$x^2 + x + 5 = 0$:', options: ['no real roots', '2 real roots', 'exactly 1 real root'] },
            { label: '$x^2 - 5x + 2 = 0$:', options: ['2 real roots', 'no real roots', 'exactly 1 real root'] },
          ],
          correctAnswers: ['exactly 1 real root', 'no real roots', '2 real roots'],
          hint1: '$b^2 - 4ac = 36 - 36 = 0$, so there is one repeated root.',
          hint2: '$b^2 - 4ac = 1 - 20 = -19 < 0$, so there are no real roots.',
          hint3: '$b^2 - 4ac = 25 - 8 = 17 > 0$, so there are two distinct real roots.',
          explanation: 'Sign of $b^2-4ac$ decides: $0 \\Rightarrow$ one root, negative $\\Rightarrow$ none, positive $\\Rightarrow$ two.',
        },
      },
      {
        id: 'aia2-input-formula',
        type: 'input-boxes' as const,
        content: `**Use the Formula** 🧮

**1)** For $2x^2 - 3x - 5 = 0$, compute the discriminant $b^2 - 4ac = \\,?$
**2)** Solve $2x^2 - 3x - 5 = 0$ and enter the **larger** root. *(Hint: it factors.)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['49', '5/2'],
          hint1: '$b^2 - 4ac = (-3)^2 - 4(2)(-5) = 9 + 40 = 49$.',
          hint2: 'It factors as $(2x-5)(x+1)=0$, so $x = \\dfrac{5}{2}$ or $x = -1$.',
          hint3: '$\\sqrt{49} = 7$, so $x = \\dfrac{3 \\pm 7}{4}$, giving $x = \\dfrac{10}{4} = \\dfrac{5}{2}$ or $x = -1$. Larger is $\\dfrac{5}{2}$.',
          explanation: '1) $9 + 40 = 49$.  2) $x = \\dfrac{3\\pm 7}{4} \\Rightarrow \\dfrac{5}{2}$ or $-1$; the larger root is $\\dfrac{5}{2} = 2.5$.',
        },
      },
      {
        id: 'aia2-systems',
        type: 'text' as const,
        content: `## Systems of Equations

A **system** is two equations solved together. Use **substitution** or **elimination**.

**Worked example (elimination):** solve
$$\\begin{cases} 3x + 2y = 12 \\\\ x - 2y = 4 \\end{cases}$$

Add the equations to eliminate $y$: $\\;4x = 16 \\Rightarrow x = 4$.

Substitute back: $4 - 2y = 4 \\Rightarrow y = 0$. Solution: $(4, 0)$.

> 💡 **Graphical meaning:** the solution of a linear system is the **point where the two lines cross**. Parallel lines (same slope, different intercept) never cross → **no solution**.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'act-intermediate-algebra',
    sections: [
      {
        id: 'aia3-intro',
        type: 'text' as const,
        content: `# 📐 Intermediate Algebra & Coordinate Geometry

**Part 3 of 5 — Inequalities, Functions & Absolute Value**

---

> 🔑 **Why it matters:** ACT questions love **function notation** $f(x)$ and **inequalities**. The one rule you can't forget: multiplying or dividing an inequality by a **negative number flips the inequality sign**.`,
      },
      {
        id: 'aia3-inequalities',
        type: 'text' as const,
        content: `## Solving Inequalities

Solve an inequality exactly like an equation — with **one** extra rule.

> ⚠️ **Flip the sign** whenever you multiply or divide *both sides* by a **negative** number.

**Worked example:** solve $-3x + 5 < 14$.

$$-3x + 5 < 14 \\;\\Rightarrow\\; -3x < 9 \\;\\Rightarrow\\; x > -3$$

The division by $-3$ flipped $<$ into $>$.

### Compound Inequalities

A statement like $-2 \\le 2x - 4 < 6$ means *both* parts hold. Operate on **all three pieces** at once:

$$-2 \\le 2x - 4 < 6 \\;\\Rightarrow\\; 2 \\le 2x < 10 \\;\\Rightarrow\\; 1 \\le x < 5.$$`,
      },
      {
        id: 'aia3-mc-ineq',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $-2x + 1 \\ge 7$.',
              options: ['$x \\le -3$', '$x \\ge -3$', '$x \\le 3$', '$x \\ge 4$'],
              correctAnswer: 0,
              explanation: '$-2x \\ge 6$. Dividing by $-2$ **flips** the sign: $x \\le -3$.',
            },
            {
              question: 'Which values of $x$ satisfy $1 < x + 3 \\le 5$?',
              options: ['$-2 < x \\le 2$', '$-2 \\le x < 2$', '$1 < x \\le 5$', '$4 < x \\le 8$'],
              correctAnswer: 0,
              explanation: 'Subtract $3$ from all three parts: $1-3 < x \\le 5-3$, i.e. $-2 < x \\le 2$.',
            },
          ],
        },
      },
      {
        id: 'aia3-functions',
        type: 'text' as const,
        content: `## Function Notation

$f(x)$ is a machine: whatever goes in the parentheses replaces every $x$.

**Worked example:** if $f(x) = x^2 - 3x + 2$, find $f(-2)$.

$$f(-2) = (-2)^2 - 3(-2) + 2 = 4 + 6 + 2 = 12.$$

**Composition** $f(g(x))$ means "do $g$ first, then feed the result into $f$."

**Worked example:** if $f(x) = 2x + 1$ and $g(x) = x^2$, find $f(g(3))$.

$$g(3) = 3^2 = 9, \\qquad f(9) = 2(9) + 1 = 19.$$

> 🔑 Work **inside-out**: evaluate the innermost parentheses first, then substitute outward.`,
      },
      {
        id: 'aia3-input-func',
        type: 'input-boxes' as const,
        content: `**Evaluate the Functions** 🧮

Let $f(x) = x^2 - 5$ and $g(x) = 3x + 1$.

**1)** $f(4) = \\,?$
**2)** $g(-2) = \\,?$
**3)** $f(g(0)) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '-5', '-4'],
          hint1: '$f(4) = 4^2 - 5 = 16 - 5$.',
          hint2: '$g(-2) = 3(-2) + 1 = -6 + 1$.',
          hint3: 'First $g(0) = 3(0)+1 = 1$, then $f(1) = 1^2 - 5 = -4$.',
          explanation: '1) $16-5 = 11$.  2) $-6+1 = -5$.  3) $g(0)=1$, then $f(1) = 1 - 5 = -4$.',
        },
      },
      {
        id: 'aia3-absval',
        type: 'text' as const,
        content: `## Absolute-Value Equations

$|x|$ measures **distance from zero**, so it's never negative. To solve $|expression| = k$ (with $k \\ge 0$), split into **two cases**:

$$|x - 3| = 7 \\;\\Rightarrow\\; x - 3 = 7 \\;\\text{ or }\\; x - 3 = -7$$
$$x = 10 \\quad\\text{or}\\quad x = -4.$$

> ⚠️ If the absolute value equals a **negative** number, e.g. $|x| = -5$, there is **no solution** — distance can't be negative.

> 💡 On a number line, $|x - 3| = 7$ asks "which points are exactly $7$ away from $3$?" — namely $3 + 7 = 10$ and $3 - 7 = -4$.`,
      },
      {
        id: 'aia3-dropdown-abs',
        type: 'dropdown-select' as const,
        content: `**Absolute Value & Functions** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The solutions of $|x + 2| = 6$ are:', options: ['$x = 4$ or $x = -8$', '$x = 4$ or $x = 8$', '$x = -4$ or $x = 8$', 'no solution'] },
            { label: 'The equation $|2x - 1| = -3$ has:', options: ['no solution', 'one solution', 'two solutions', 'infinitely many'] },
            { label: 'If $h(x) = 4 - x^2$, then $h(-3) =$', options: ['$-5$', '$13$', '$-13$', '$1$'] },
          ],
          correctAnswers: ['$x = 4$ or $x = -8$', 'no solution', '$-5$'],
          hint1: '$x + 2 = 6 \\Rightarrow x = 4$, and $x + 2 = -6 \\Rightarrow x = -8$.',
          hint2: 'An absolute value can never equal a negative number, so there is no solution.',
          hint3: '$h(-3) = 4 - (-3)^2 = 4 - 9 = -5$. Square first, then subtract.',
          explanation: 'Split absolute-value equations into two cases; reject negative targets; and square before subtracting in $h(-3)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'act-intermediate-algebra',
    sections: [
      {
        id: 'aia4-intro',
        type: 'text' as const,
        content: `# 📐 Intermediate Algebra & Coordinate Geometry

**Part 4 of 5 — The Coordinate Plane: Slope, Distance & Lines**

---

> 🔑 **Big Payoff:** "Coordinate geometry" is half the name of this reporting category. Master the three core formulas — **slope**, **distance**, and **midpoint** — and the equation of a line, and you own a huge block of ACT points.`,
      },
      {
        id: 'aia4-formulas',
        type: 'text' as const,
        content: `## The Three Core Formulas

For two points $(x_1, y_1)$ and $(x_2, y_2)$:

| Formula | Equation |
|---------|----------|
| **Slope** | $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ |
| **Distance** | $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| **Midpoint** | $\\left(\\dfrac{x_1 + x_2}{2},\\; \\dfrac{y_1 + y_2}{2}\\right)$ |

> 💡 Slope is a **difference**, midpoint is an **average**, and distance is the **Pythagorean theorem** in disguise.

**Worked example:** for $A(1, 2)$ and $B(4, 6)$:

$$m = \\frac{6 - 2}{4 - 1} = \\frac{4}{3}, \\qquad d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5.$$

$$\\text{midpoint} = \\left(\\frac{1+4}{2}, \\frac{2+6}{2}\\right) = \\left(\\frac{5}{2}, 4\\right).$$`,
      },
      {
        id: 'aia4-input-formulas',
        type: 'input-boxes' as const,
        content: `**Apply the Formulas** 🧮

Use the points $P(-2, 1)$ and $Q(4, 9)$.

**1)** Slope of $\\overline{PQ} = \\,?$
**2)** Distance $PQ = \\,?$  *(it's a whole number)*
**3)** Midpoint $x$-coordinate $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4/3', '10', '1'],
          hint1: 'Slope $= \\dfrac{9 - 1}{4 - (-2)} = \\dfrac{8}{6}$. Reduce it.',
          hint2: 'Distance $= \\sqrt{(4-(-2))^2 + (9-1)^2} = \\sqrt{36 + 64} = \\sqrt{100}$.',
          hint3: 'Midpoint $x = \\dfrac{-2 + 4}{2} = \\dfrac{2}{2}$.',
          explanation: '1) $\\dfrac{8}{6} = \\dfrac{4}{3}$.  2) $\\sqrt{36+64} = \\sqrt{100} = 10$.  3) $\\dfrac{-2+4}{2} = 1$.',
        },
      },
      {
        id: 'aia4-lines',
        type: 'text' as const,
        content: `## Equations of Lines

**Slope-intercept form** is the ACT workhorse:

$$y = mx + b \\qquad m = \\text{slope}, \\; b = y\\text{-intercept}.$$

**Point-slope form** is handy when you know a point and a slope:

$$y - y_1 = m(x - x_1).$$

### Parallel & Perpendicular

| Relationship | Slopes |
|--------------|--------|
| **Parallel** | equal: $m_1 = m_2$ |
| **Perpendicular** | negative reciprocals: $m_1 \\cdot m_2 = -1$ |

> 🔑 To find a **perpendicular** slope, **flip and negate**. The perpendicular to a line with slope $\\dfrac{2}{3}$ has slope $-\\dfrac{3}{2}$.`,
      },
      {
        id: 'aia4-mc-lines',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A line passes through $(0, -3)$ with slope $2$. Its equation is:',
              options: ['$y = 2x - 3$', '$y = -3x + 2$', '$y = 2x + 3$', '$y = 2x$'],
              correctAnswer: 0,
              explanation: 'Slope-intercept form $y = mx + b$ with $m = 2$ and $y$-intercept $b = -3$ gives $y = 2x - 3$.',
            },
            {
              question: 'Which line is perpendicular to $y = \\frac{1}{4}x + 5$?',
              options: ['$y = -4x + 1$', '$y = \\frac{1}{4}x - 2$', '$y = 4x$', '$y = -\\frac{1}{4}x$'],
              correctAnswer: 0,
              explanation: 'Perpendicular slope is the negative reciprocal of $\\frac{1}{4}$, which is $-4$. So $y = -4x + 1$ works.',
            },
          ],
        },
      },
      {
        id: 'aia4-dropdown-lines',
        type: 'dropdown-select' as const,
        content: `**Slopes & Lines** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Slope of the line $2x + 3y = 12$:', options: ['$-\\frac{2}{3}$', '$\\frac{2}{3}$', '$2$', '$-\\frac{3}{2}$'] },
            { label: 'A line parallel to $y = 5x - 1$ has slope:', options: ['$5$', '$-\\frac{1}{5}$', '$-5$', '$\\frac{1}{5}$'] },
            { label: 'The $y$-intercept of $y = -3x + 7$ is the point:', options: ['$(0, 7)$', '$(7, 0)$', '$(0, -3)$', '$(-3, 7)$'] },
          ],
          correctAnswers: ['$-\\frac{2}{3}$', '$5$', '$(0, 7)$'],
          hint1: 'Solve for $y$: $3y = -2x + 12 \\Rightarrow y = -\\frac{2}{3}x + 4$, so the slope is $-\\frac{2}{3}$.',
          hint2: 'Parallel lines share the same slope, and $y = 5x - 1$ has slope $5$.',
          hint3: 'The $y$-intercept is where $x = 0$: $y = -3(0) + 7 = 7$, i.e. the point $(0, 7)$.',
          explanation: 'Rearrange into $y = mx + b$ to read off slope $m$ and intercept $b$; parallel lines match slope.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'act-intermediate-algebra',
    sections: [
      {
        id: 'aia5-intro',
        type: 'text' as const,
        content: `# 📐 Intermediate Algebra & Coordinate Geometry

**Part 5 of 5 — Circles, Mixed Practice & Mastery Check**

---

You can now handle exponents, radicals, quadratics, inequalities, functions, and lines in the plane. Part 5 adds the **circle** and then mixes everything for a final check.`,
      },
      {
        id: 'aia5-circles',
        type: 'text' as const,
        content: `## Circles in the Coordinate Plane

The **standard form** of a circle with center $(h, k)$ and radius $r$ is:

$$(x - h)^2 + (y - k)^2 = r^2.$$

Watch the signs — the center coordinates are the **opposite** of what's inside each parenthesis.

| Equation | Center | Radius |
|----------|--------|--------|
| $(x-3)^2 + (y-2)^2 = 25$ | $(3, 2)$ | $5$ |
| $(x+1)^2 + (y-4)^2 = 9$ | $(-1, 4)$ | $3$ |
| $x^2 + y^2 = 16$ | $(0, 0)$ | $4$ |

> ⚠️ The right side is $r^2$, **not** $r$. If it equals $25$, the radius is $\\sqrt{25} = 5$, not $25$.`,
      },
      {
        id: 'aia5-dropdown-circle',
        type: 'dropdown-select' as const,
        content: `**Read the Circle** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Center of $(x-5)^2 + (y+3)^2 = 49$:', options: ['$(5, -3)$', '$(-5, 3)$', '$(5, 3)$', '$(-5, -3)$'] },
            { label: 'Radius of $(x-5)^2 + (y+3)^2 = 49$:', options: ['$7$', '$49$', '$24.5$', '$\\sqrt{7}$'] },
            { label: 'Equation of a circle centered at origin, radius $6$:', options: ['$x^2 + y^2 = 36$', '$x^2 + y^2 = 6$', '$(x-6)^2 + y^2 = 0$', '$x^2 + y^2 = 12$'] },
          ],
          correctAnswers: ['$(5, -3)$', '$7$', '$x^2 + y^2 = 36$'],
          hint1: 'Center is the opposite of the numbers inside: $(x-5)$ gives $h=5$, $(y+3)$ gives $k=-3$.',
          hint2: 'The right side is $r^2 = 49$, so $r = \\sqrt{49} = 7$.',
          hint3: 'Origin means $(h,k) = (0,0)$, and radius $6$ means $r^2 = 36$: $x^2 + y^2 = 36$.',
          explanation: 'In $(x-h)^2 + (y-k)^2 = r^2$, the center is $(h, k)$ and the radius is $\\sqrt{\\text{right side}}$.',
        },
      },
      {
        id: 'aia5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Multiply like bases | **add** exponents: $x^a x^b = x^{a+b}$ |
| Power of a power | **multiply** exponents: $(x^a)^b = x^{ab}$ |
| Solve a quadratic | factor, or $x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ |
| Count real roots | sign of discriminant $b^2 - 4ac$ |
| Solve an inequality | **flip** the sign when $\\times$ or $\\div$ by a negative |
| Slope of a line | $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ |
| Perpendicular slope | negative reciprocal (flip & negate) |
| Circle | $(x-h)^2 + (y-k)^2 = r^2 \\Rightarrow$ center $(h,k)$, radius $r$ |

> 🔑 If you remember only three formulas for coordinate geometry, make them **slope**, **distance** ($=$ Pythagoras), and **midpoint** ($=$ average).`,
      },
      {
        id: 'aia5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{x^8 y^3}{x^2 y^5}$ (assume $x, y \\ne 0$).',
              options: ['$\\dfrac{x^6}{y^2}$', '$x^6 y^2$', '$\\dfrac{x^4}{y^2}$', '$x^{10} y^8$'],
              correctAnswer: 0,
              explanation: 'Subtract exponents of like bases: $x^{8-2} = x^6$ and $y^{3-5} = y^{-2} = \\dfrac{1}{y^2}$. Result: $\\dfrac{x^6}{y^2}$.',
            },
            {
              question: 'The distance between $(1, 2)$ and $(5, 5)$ is:',
              options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
              correctAnswer: 0,
              explanation: '$d = \\sqrt{(5-1)^2 + (5-2)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.',
            },
          ],
        },
      },
      {
        id: 'aia5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $x^2 - x - 6 = 0$.',
              options: ['$x = 3 \\text{ or } -2$', '$x = -3 \\text{ or } 2$', '$x = 6 \\text{ or } -1$', '$x = 2 \\text{ or } 3$'],
              correctAnswer: 0,
              explanation: 'Two numbers with product $-6$ and sum $-1$ are $-3$ and $+2$: $(x-3)(x+2)=0$, so $x = 3$ or $x = -2$.',
            },
            {
              question: 'A line through $(2, 1)$ and $(6, 9)$ has slope:',
              options: ['$2$', '$\\frac{1}{2}$', '$4$', '$-2$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{9 - 1}{6 - 2} = \\dfrac{8}{4} = 2$.',
            },
            {
              question: 'The center and radius of $(x+2)^2 + (y-5)^2 = 16$ are:',
              options: ['center $(-2, 5)$, radius $4$', 'center $(2, -5)$, radius $4$', 'center $(-2, 5)$, radius $16$', 'center $(2, 5)$, radius $8$'],
              correctAnswer: 0,
              explanation: 'In $(x-h)^2 + (y-k)^2 = r^2$: $(x+2)$ gives $h = -2$, $(y-5)$ gives $k = 5$, and $r = \\sqrt{16} = 4$.',
            },
          ],
        },
      },
    ],
  },
]
