import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Radius and Interval of Convergence (AP Calculus BC).
 * Registry key / DB Topic.slug: 'radius-interval-convergence'.
 * 7 parts, gold-standard structure: why power series have a domain (geometric anchor) →
 * the Ratio Test as the engine for finding R → computing the radius → checking endpoints
 * (the step students forget) → the three behaviors (R=0, finite, ∞) and centered series →
 * operations that preserve R (term-by-term derivative/integral, known series) → mixed
 * practice & exit quiz. Every radius, endpoint test, and interval was recomputed by hand
 * before authoring. LaTeX uses doubled backslashes (these are JS template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'radius-interval-convergence',
    sections: [
      {
        id: 'ric1-intro',
        type: 'text' as const,
        content: `# 🎯 Radius & Interval of Convergence

**Part 1 of 7 — Why a Power Series Has a Domain**

---

### Topics in This Part

| Section |
|---------|
| What a Power Series Is |
| The Geometric Series Anchor |
| Center, Radius, and Interval |

> 🔑 **Key Concept:** A power series is a "polynomial of infinite degree." Plug in some values of $x$ and the sum is a finite number; plug in others and it blows up to infinity. The set of $x$-values that *work* is the **interval of convergence**, and its half-width is the **radius of convergence**.`,
      },
      {
        id: 'ric1-whatis',
        type: 'text' as const,
        content: `## What Is a Power Series?

A **power series centered at $a$** is an infinite sum of the form

$$\\sum_{n=0}^{\\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\cdots$$

- The $c_n$ are constants called **coefficients**.
- The number $a$ is the **center**.
- $x$ is a variable — the series is really a *function* of $x$, but only where it converges.

When $a = 0$ the series is **centered at the origin**:

$$\\sum_{n=0}^{\\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + \\cdots$$

> 💡 **Always true:** Plugging in $x = a$ gives $c_0 + 0 + 0 + \\cdots = c_0$. So **every** power series converges at its own center. The only question is *how far out* from the center convergence survives.`,
      },
      {
        id: 'ric1-identify-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the center $a$ of the power series $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(x-3)^n}{n+1}$?',
              options: ['$a = 3$', '$a = -3$', '$a = 0$', '$a = 1$'],
              correctAnswer: 0,
              explanation: 'The series is built from powers of $(x - a)$. Here that factor is $(x - 3)$, so the center is $a = 3$. (Matching $(x-a)$ to $(x-3)$ gives $a = 3$.)',
            },
            {
              question: 'At which $x$-value is EVERY power series $\\sum c_n(x-a)^n$ guaranteed to converge?',
              options: ['At $x = a$ (its center)', 'At $x = 0$ always', 'At every $x$', 'At no single point is it guaranteed'],
              correctAnswer: 0,
              explanation: 'Substituting $x = a$ kills every term except the $n=0$ term, leaving the finite number $c_0$. Convergence at the center is automatic; everything else must be checked.',
            },
          ],
        },
      },
      {
        id: 'ric1-geometric',
        type: 'text' as const,
        content: `## The Geometric Series Anchor

You already know one power series cold. The **geometric series**

$$\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots$$

converges **exactly when** $|x| < 1$, and to the value $\\dfrac{1}{1-x}$.

Let's read off its convergence behavior:

| $x$-value | $|x|$ | Converges? |
|-----------|-------|------------|
| $x = 0.5$ | $0.5 < 1$ | ✓ yes (to $2$) |
| $x = -0.9$ | $0.9 < 1$ | ✓ yes |
| $x = 1$ | $1$ | ✗ no ($1+1+1+\\cdots$) |
| $x = -1$ | $1$ | ✗ no ($1-1+1-\\cdots$) |
| $x = 2$ | $2 > 1$ | ✗ no (terms grow) |

So the geometric series converges on the **open interval** $(-1, 1)$. Its center is $a = 0$ and it reaches a distance of $1$ in each direction.

> 🔑 **The pattern that holds for ALL power series:** convergence happens on an interval *symmetric about the center*. The distance from the center to the edge is the **radius of convergence $R$**. For the geometric series, $R = 1$.`,
      },
      {
        id: 'ric1-geo-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Input** 🔽

For the geometric series $\\sum x^n$ (which needs $|x| < 1$), decide whether it converges or diverges at each $x$.`,
        exercise: {
          dropdowns: [
            { label: '$x = \\frac{1}{3}$:', options: ['converges', 'diverges'] },
            { label: '$x = -2$:', options: ['converges', 'diverges'] },
            { label: '$x = 1$:', options: ['converges', 'diverges'] },
            { label: '$x = -0.8$:', options: ['converges', 'diverges'] },
          ],
          correctAnswers: ['converges', 'diverges', 'diverges', 'converges'],
          hint1: 'The rule is simply $|x| < 1$ converges, $|x| \\ge 1$ diverges.',
          hint2: '$|1/3| = 0.\\overline{3} < 1$ ✓ but $|-2| = 2 > 1$ ✗.',
          hint3: 'The endpoint $x = 1$ gives $|x| = 1$, which is NOT less than $1$, so it diverges.',
          explanation: 'Converges where $|x| < 1$: $x = \\frac{1}{3}$ and $x = -0.8$. Diverges where $|x| \\ge 1$: $x = -2$ and the endpoint $x = 1$.',
        },
      },
      {
        id: 'ric1-vocab',
        type: 'text' as const,
        content: `## The Three Words You Must Know

| Term | Symbol | Meaning |
|------|--------|---------|
| **Center** | $a$ | the value $x = a$ inside $(x-a)^n$; always a convergence point |
| **Radius of convergence** | $R$ | half-width of the interval; distance from center to each edge |
| **Interval of convergence** | (an interval) | the complete set of $x$ where the series converges |

The interval of convergence always looks like one of:

$$(a - R,\\; a + R), \\quad [a-R,\\; a+R), \\quad (a-R,\\; a+R], \\quad [a-R,\\; a+R]$$

— that is, $R$ units left and right of the center, with the **endpoints** to be decided separately (the brackets).

> 💡 **Roadmap:** In Part 2 we learn the **Ratio Test**, which finds $R$ almost mechanically. Then in Part 4 we tackle the brackets — the endpoints — which is where most exam points are won or lost.`,
      },
      {
        id: 'ric1-edges-drill',
        type: 'input-boxes' as const,
        content: `**Find the Edges from Center & Radius** 🧮

A power series has center $a = 4$ and radius of convergence $R = 2$. The open interval runs from $a - R$ to $a + R$.

**1)** Left edge $a - R = \\,?$
**2)** Right edge $a + R = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '6'],
          hint1: 'The edges sit $R$ units on each side of the center $a$.',
          hint2: 'Left edge $= a - R = 4 - 2$.',
          hint3: 'Right edge $= a + R = 4 + 2$.',
          explanation: 'Center $4$, radius $2$: left edge $4 - 2 = 2$, right edge $4 + 2 = 6$. The open interval is $(2, 6)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'radius-interval-convergence',
    sections: [
      {
        id: 'ric2-intro',
        type: 'text' as const,
        content: `# 🎯 Radius & Interval of Convergence

**Part 2 of 7 — The Ratio Test: Your Engine for Finding $R$**

---

> 🔑 **The Idea:** The **Ratio Test** compares consecutive terms. For a power series, it produces an inequality in $|x|$ whose solution *is* the interval (minus the endpoints). It is the single most important tool in this entire topic.`,
      },
      {
        id: 'ric2-ratiotest',
        type: 'text' as const,
        content: `## The Ratio Test (the version you'll use)

Given a series $\\sum a_n$, compute

$$L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$$

Then:

- If $L < 1$, the series **converges** (absolutely).
- If $L > 1$, the series **diverges**.
- If $L = 1$, the test is **inconclusive** — you must use another method.

For a **power series**, the terms contain a factor of $(x-a)^n$, so the ratio always pulls out a factor of $|x - a|$:

$$L = |x - a| \\cdot \\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}}{c_n} \\right|$$

Setting $L < 1$ gives an inequality of the form $|x - a| \\cdot (\\text{number}) < 1$, which you solve for $|x - a|$.

> ⚠️ **Critical:** Because the ratio test is silent when $L = 1$, it can **never** decide the endpoints (where the inequality becomes an equation). Endpoints always need separate work — that is the whole point of Part 4.`,
      },
      {
        id: 'ric2-setup-mc',
        type: 'multiple-choice' as const,
        content: `**Set Up the Ratio** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$, the term is $a_n = \\frac{x^n}{n}$. What is $\\left|\\frac{a_{n+1}}{a_n}\\right|$ before taking the limit?',
              options: ['$|x| \\cdot \\dfrac{n}{n+1}$', '$|x| \\cdot \\dfrac{n+1}{n}$', '$\\dfrac{n}{n+1}$', '$|x|^2 \\cdot \\dfrac{n}{n+1}$'],
              correctAnswer: 0,
              explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{x^{n+1}}{n+1} \\cdot \\frac{n}{x^n} = x \\cdot \\frac{n}{n+1}$. Taking absolute values gives $|x|\\cdot\\frac{n}{n+1}$. Dividing powers gives one factor of $x$; the coefficients flip.',
            },
            {
              question: 'In the Ratio Test, the conclusion "the series converges" comes from which condition on $L = \\lim\\left|\\frac{a_{n+1}}{a_n}\\right|$?',
              options: ['$L < 1$', '$L > 1$', '$L = 1$', '$L = 0$ only'],
              correctAnswer: 0,
              explanation: '$L < 1$ means terms eventually shrink fast enough to converge. $L > 1$ diverges, and $L = 1$ is inconclusive. ($L = 0$ does converge, but it is just a special case of $L < 1$.)',
            },
          ],
        },
      },
      {
        id: 'ric2-worked1',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$

**Step 1 — Form the ratio:**
$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{x^{n+1}}{n+1} \\cdot \\frac{n}{x^n}\\right| = |x| \\cdot \\frac{n}{n+1}$$

**Step 2 — Take the limit** (the $x$-factor is constant in $n$, so it comes out):
$$L = |x| \\cdot \\lim_{n\\to\\infty} \\frac{n}{n+1} = |x| \\cdot 1 = |x|$$

**Step 3 — Apply $L < 1$:**
$$|x| < 1$$

**Step 4 — Read off the radius:** the inequality $|x| < 1$ means $x$ is within $1$ unit of the center $0$, so
$$\\boxed{R = 1}$$

The interval is $(-1, 1)$ *before* checking endpoints. (Spoiler from Part 4: at $x=-1$ it converges, at $x=1$ it diverges, so the final answer is $[-1, 1)$.)`,
      },
      {
        id: 'ric2-radius-mc',
        type: 'multiple-choice' as const,
        content: `**Read Off the Radius** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Applying the Ratio Test to a power series centered at $0$ gives $L = 7|x|$. For what $x$ does the series converge, and what is $R$?',
              options: ['$|x| < \\frac{1}{7}$, so $R = \\frac{1}{7}$', '$|x| < 7$, so $R = 7$', '$|x| < 1$, so $R = 1$', '$|x| > \\frac{1}{7}$, so $R = 7$'],
              correctAnswer: 0,
              explanation: 'Set $L < 1$: $7|x| < 1 \\Rightarrow |x| < \\frac{1}{7}$. The radius is the bound on $|x|$, so $R = \\frac{1}{7}$.',
            },
            {
              question: 'The Ratio Test produces $L = |x|$ for $\\sum \\frac{x^n}{n}$. Why can it NOT tell you what happens at $x = 1$?',
              options: ['Because at $x = 1$, $L = 1$, where the Ratio Test is inconclusive', 'Because $x = 1$ is outside the interval', 'Because the Ratio Test only works for negative $x$', 'Because $\\sum \\frac{1}{n}$ has no terms'],
              correctAnswer: 0,
              explanation: 'At $x = 1$, $L = |1| = 1$, and the Ratio Test says nothing when $L = 1$. That is exactly why endpoints must be tested separately with another method.',
            },
          ],
        },
      },
      {
        id: 'ric2-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{2^n}$

**Step 1 — Ratio:**
$$\\left|\\frac{x^{n+1}}{2^{n+1}} \\cdot \\frac{2^n}{x^n}\\right| = |x| \\cdot \\frac{2^n}{2^{n+1}} = |x| \\cdot \\frac{1}{2} = \\frac{|x|}{2}$$

**Step 2 — Limit:** there is no $n$ left, so $L = \\dfrac{|x|}{2}$.

**Step 3 — Solve $L < 1$:**
$$\\frac{|x|}{2} < 1 \\;\\Longrightarrow\\; |x| < 2$$

**Step 4 — Radius:** $\\boxed{R = 2}$, interval $(-2, 2)$ before endpoints.

> 💡 **Pattern alert:** When the coefficient is $\\frac{1}{b^n}$ (a geometric-style series), the radius is always $R = b$. Here $b = 2$ gave $R = 2$. The number multiplying $x$ inside the base, in disguise, sets the radius.`,
      },
      {
        id: 'ric2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Radius** 🧮

Use the Ratio Test to find $R$ for each centered-at-$0$ series. Enter $R$ as a number.

**1)** $\\displaystyle\\sum \\frac{x^n}{3^n}$,  $R = \\,?$
**2)** $\\displaystyle\\sum \\frac{x^n}{5^n}$,  $R = \\,?$
**3)** $\\displaystyle\\sum \\frac{x^n}{\\sqrt{n}}$,  $R = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', '1'],
          hint1: 'For $\\sum \\frac{x^n}{b^n}$ the ratio is $\\frac{|x|}{b}$, so $|x| < b$ and $R = b$.',
          hint2: '1) $b = 3 \\Rightarrow R = 3$.  2) $b = 5 \\Rightarrow R = 5$.',
          hint3: '3) Ratio is $|x|\\cdot\\sqrt{\\frac{n}{n+1}} \\to |x|$, so $|x| < 1$ and $R = 1$. Polynomial coefficients like $\\sqrt{n}$ give $R = 1$.',
          explanation: '1) $\\frac{|x|}{3} < 1 \\Rightarrow R = 3$.  2) $\\frac{|x|}{5} < 1 \\Rightarrow R = 5$.  3) $\\lim\\sqrt{\\frac{n}{n+1}} = 1$, so $|x| < 1 \\Rightarrow R = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'radius-interval-convergence',
    sections: [
      {
        id: 'ric3-intro',
        type: 'text' as const,
        content: `# 🎯 Radius & Interval of Convergence

**Part 3 of 7 — Computing $R$ for Trickier Coefficients**

---

> 🔑 **The Idea:** The Ratio Test handles factorials, powers, and shifted centers the same way — line up $a_{n+1}/a_n$, cancel, take the limit. Here we drill the three classic cancellation patterns.`,
      },
      {
        id: 'ric3-factorial',
        type: 'text' as const,
        content: `## Pattern 1 — Factorials

The key fact: $(n+1)! = (n+1)\\cdot n!$, so $\\dfrac{n!}{(n+1)!} = \\dfrac{1}{n+1}$ and $\\dfrac{(n+1)!}{n!} = n+1$.

### Worked Example: $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{x^{n+1}}{(n+1)!}\\cdot\\frac{n!}{x^n}\\right| = |x|\\cdot\\frac{n!}{(n+1)!} = |x|\\cdot\\frac{1}{n+1}$$

$$L = |x|\\cdot\\lim_{n\\to\\infty}\\frac{1}{n+1} = |x|\\cdot 0 = 0$$

Since $L = 0 < 1$ for **every** $x$, the series converges everywhere:
$$\\boxed{R = \\infty}, \\quad \\text{interval } (-\\infty, \\infty)$$

This is the series for $e^x$ — it converges for all real $x$.

### Worked Example: $\\displaystyle\\sum_{n=0}^{\\infty} n!\\,x^n$

$$\\left|\\frac{(n+1)!\\,x^{n+1}}{n!\\,x^n}\\right| = |x|\\cdot(n+1) \\;\\longrightarrow\\; \\infty \\;\\text{ (for any } x \\ne 0)$$

The limit is $\\infty > 1$ unless $x = 0$. So it converges **only** at the center:
$$\\boxed{R = 0}, \\quad \\text{interval } \\{0\\}$$

> 💡 **Factorial in the denominator $\\Rightarrow R = \\infty$** (it crushes the terms). **Factorial in the numerator $\\Rightarrow R = 0$** (it inflates them).`,
      },
      {
        id: 'ric3-factorial-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{(2n)!}$?',
              options: ['$R = \\infty$', '$R = 0$', '$R = 1$', '$R = 2$'],
              correctAnswer: 0,
              explanation: 'The ratio is $|x|\\cdot\\frac{(2n)!}{(2n+2)!} = |x|\\cdot\\frac{1}{(2n+2)(2n+1)} \\to 0$ for every $x$. A factorial in the denominator drives $L \\to 0$, so $R = \\infty$.',
            },
            {
              question: 'For $\\displaystyle\\sum_{n=0}^{\\infty} (n!)\\,(x-4)^n$, the interval of convergence is:',
              options: ['$\\{4\\}$ (only the center)', '$(3, 5)$', '$(-\\infty, \\infty)$', '$[3, 5]$'],
              correctAnswer: 0,
              explanation: 'The ratio is $|x-4|\\cdot(n+1) \\to \\infty$ for any $x \\ne 4$, so $R = 0$. The series converges only at its center $x = 4$, giving the single-point interval $\\{4\\}$.',
            },
          ],
        },
      },
      {
        id: 'ric3-power-coeff',
        type: 'text' as const,
        content: `## Pattern 2 — Powers in the Coefficient

When the coefficient itself contains a constant raised to the $n$, that constant divides into the radius.

### Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{3^n x^n}{n}$

$$\\left|\\frac{3^{n+1}x^{n+1}}{n+1}\\cdot\\frac{n}{3^n x^n}\\right| = 3|x|\\cdot\\frac{n}{n+1} \\;\\longrightarrow\\; 3|x|$$

Set $3|x| < 1$:
$$|x| < \\frac{1}{3} \\;\\Longrightarrow\\; \\boxed{R = \\tfrac{1}{3}}$$

### Worked Example: $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(2x)^n}{n^2}$

Rewrite $(2x)^n = 2^n x^n$:
$$\\left|\\frac{2^{n+1}x^{n+1}}{(n+1)^2}\\cdot\\frac{n^2}{2^n x^n}\\right| = 2|x|\\cdot\\frac{n^2}{(n+1)^2} \\;\\longrightarrow\\; 2|x|$$

Set $2|x| < 1$: $\\;|x| < \\dfrac{1}{2}$, so $\\boxed{R = \\tfrac{1}{2}}$.

> 🔑 **Shortcut:** A factor of $b^n$ (or $(bx)^n$) in the series makes the radius $\\dfrac{1}{b}$ smaller. Polynomial factors like $n$, $n^2$, or $\\sqrt{n}$ have limit ratio $1$ and **do not** change the radius — they only matter at the endpoints.`,
      },
      {
        id: 'ric3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Coefficient to the Radius** 🔽

Each series is centered at $0$. Pick its radius of convergence $R$.`,
        exercise: {
          dropdowns: [
            { label: '$\\sum \\frac{x^n}{4^n}$:', options: ['$R = 4$', '$R = \\frac{1}{4}$', '$R = 1$', '$R = \\infty$'] },
            { label: '$\\sum \\frac{4^n x^n}{n}$:', options: ['$R = \\frac{1}{4}$', '$R = 4$', '$R = 1$', '$R = 0$'] },
            { label: '$\\sum \\frac{x^n}{n^3}$:', options: ['$R = 1$', '$R = 3$', '$R = \\frac{1}{3}$', '$R = \\infty$'] },
            { label: '$\\sum \\frac{x^n}{n!}$:', options: ['$R = \\infty$', '$R = 1$', '$R = 0$', '$R = \\frac{1}{2}$'] },
          ],
          correctAnswers: ['$R = 4$', '$R = \\frac{1}{4}$', '$R = 1$', '$R = \\infty$'],
          hint1: 'A $\\frac{1}{b^n}$ coefficient gives $R = b$; a $b^n$ coefficient gives $R = \\frac{1}{b}$.',
          hint2: 'Polynomial coefficients ($n$, $n^3$) leave $R = 1$; a denominator factorial gives $R = \\infty$.',
          hint3: '$\\frac{x^n}{4^n}$: ratio $\\frac{|x|}{4} \\Rightarrow R=4$. $\\frac{4^n x^n}{n}$: ratio $4|x| \\Rightarrow R=\\frac{1}{4}$. $\\frac{x^n}{n^3}$: ratio $|x| \\Rightarrow R=1$. $\\frac{x^n}{n!}$: ratio $\\to 0 \\Rightarrow R=\\infty$.',
          explanation: '$\\sum\\frac{x^n}{4^n}$ has $R=4$; $\\sum\\frac{4^n x^n}{n}$ has $R=\\frac14$; $\\sum\\frac{x^n}{n^3}$ has $R=1$ (polynomial coefficient); $\\sum\\frac{x^n}{n!}$ has $R=\\infty$ (denominator factorial).',
        },
      },
      {
        id: 'ric3-center',
        type: 'text' as const,
        content: `## Pattern 3 — A Shifted Center

When the series uses $(x-a)^n$, the Ratio Test produces $|x-a| < R$, which describes an interval centered at $a$.

### Worked Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{3^n \\, n}$

$$\\left|\\frac{(x-2)^{n+1}}{3^{n+1}(n+1)}\\cdot\\frac{3^n n}{(x-2)^n}\\right| = \\frac{|x-2|}{3}\\cdot\\frac{n}{n+1} \\;\\longrightarrow\\; \\frac{|x-2|}{3}$$

Set $\\dfrac{|x-2|}{3} < 1$:
$$|x-2| < 3 \\;\\Longrightarrow\\; R = 3$$

The center is $a = 2$, so the open interval is
$$(2 - 3,\\; 2 + 3) = (-1,\\; 5) \\quad\\text{before endpoints.}$$

> 💡 **Translate $|x - a| < R$ into an interval:** the center is $a$, the edges are $a - R$ and $a + R$. Here: center $2$, radius $3$, edges $-1$ and $5$.`,
      },
      {
        id: 'ric3-drill',
        type: 'input-boxes' as const,
        content: `**Radius and Endpoints (open interval)** 🧮

Find $R$ and the two open-interval endpoints (left, then right).

**1)** $\\displaystyle\\sum \\frac{(x-2)^n}{3^n n}$:  $R = \\,?$,  left endpoint $= \\,?$,  right endpoint $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-1', '5'],
          hint1: 'Ratio $\\to \\frac{|x-2|}{3}$, so $|x-2| < 3$ gives $R = 3$.',
          hint2: 'Center $a = 2$. Edges are $a - R$ and $a + R$.',
          hint3: 'Left $= 2 - 3 = -1$; right $= 2 + 3 = 5$.',
          explanation: '$R = 3$, center $2$. The open interval before endpoint checks is $(2-3, 2+3) = (-1, 5)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'radius-interval-convergence',
    sections: [
      {
        id: 'ric4-intro',
        type: 'text' as const,
        content: `# 🎯 Radius & Interval of Convergence

**Part 4 of 7 — Checking the Endpoints (the step that wins points)**

---

> ⚠️ **This is where most exam points are lost.** The Ratio Test gives you $|x - a| < R$, an *open* interval. At the two endpoints $x = a \\pm R$ the Ratio Test gives $L = 1$ and says **nothing**. You must plug each endpoint in and test the resulting *number* series by hand.`,
      },
      {
        id: 'ric4-method',
        type: 'text' as const,
        content: `## The Endpoint Procedure

After finding $R$ and the open interval $(a-R,\\, a+R)$:

1. **Substitute $x = a - R$** (left endpoint) into the original series. You get a plain number series — test it with a known test.
2. **Substitute $x = a + R$** (right endpoint) — test that number series too.
3. **Include each endpoint** (square bracket $[$ or $]$) if its series **converges**; **exclude** it (round bracket $($ or $)$) if it **diverges**.

The tests you'll usually need at endpoints:

| Series you get | Test | Result |
|----------------|------|--------|
| $\\sum \\frac{1}{n}$ | $p$-series, $p=1$ | **diverges** (harmonic) |
| $\\sum \\frac{1}{n^p}$, $p>1$ | $p$-series | **converges** |
| $\\sum \\frac{(-1)^n}{n}$ | Alternating Series Test | **converges** |
| $\\sum (-1)^n$ or $\\sum 1$ | $n$th-term test | **diverges** (terms don't $\\to 0$) |

> 🔑 **Each endpoint is decided independently.** It is completely normal to include one and exclude the other — giving a half-open interval like $[-1, 1)$.`,
      },
      {
        id: 'ric4-worked',
        type: 'text' as const,
        content: `## Worked Example: Full Interval for $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$

**Radius (from Part 2):** $R = 1$, center $0$, open interval $(-1, 1)$.

**Left endpoint $x = -1$:**
$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n} = -1 + \\tfrac{1}{2} - \\tfrac{1}{3} + \\cdots$$
This is the **alternating harmonic series**. The terms $\\frac{1}{n}$ decrease to $0$, so by the Alternating Series Test it **converges**. ✓ Include $-1$.

**Right endpoint $x = 1$:**
$$\\sum_{n=1}^{\\infty} \\frac{1^n}{n} = \\sum_{n=1}^{\\infty}\\frac{1}{n} = 1 + \\tfrac{1}{2} + \\tfrac{1}{3} + \\cdots$$
This is the **harmonic series** ($p$-series with $p=1$), which **diverges**. ✗ Exclude $1$.

**Final interval of convergence:**
$$\\boxed{[-1,\\; 1)}$$

> 💡 Notice the asymmetry in the brackets: $-1$ is **in** (square), $1$ is **out** (round). This is the classic "$x^n/n$" answer and a favorite on the BC exam.`,
      },
      {
        id: 'ric4-endpoint-mc',
        type: 'multiple-choice' as const,
        content: `**Test the Endpoint** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Substituting an endpoint gives the series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$. Does this endpoint belong in the interval of convergence?',
              options: ['No — it diverges (harmonic series), so exclude it', 'Yes — it converges, so include it', 'Yes — all endpoints are included', 'Cannot be determined'],
              correctAnswer: 0,
              explanation: '$\\sum \\frac{1}{n}$ is the harmonic series, a $p$-series with $p = 1 \\le 1$, which diverges. A divergent endpoint is excluded (round bracket).',
            },
            {
              question: 'Substituting an endpoint gives $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$. Include this endpoint?',
              options: ['Yes — converges by the Alternating Series Test, so include it', 'No — it diverges', 'Yes — but only because $\\sum\\frac{1}{\\sqrt n}$ converges', 'Cannot be determined'],
              correctAnswer: 0,
              explanation: 'The terms $\\frac{1}{\\sqrt n}$ are positive, decreasing, and $\\to 0$, so the alternating series converges by the AST. (It is only *conditionally* convergent, since $\\sum\\frac{1}{\\sqrt n}$ diverges — but it still converges, so the endpoint is included.)',
            },
          ],
        },
      },
      {
        id: 'ric4-worked2',
        type: 'text' as const,
        content: `## Worked Example: Both Endpoints Converge

Consider $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(2x)^n}{n^2}$. From Part 3, $R = \\frac{1}{2}$, center $0$, open interval $\\left(-\\frac12, \\frac12\\right)$.

**Right endpoint $x = \\frac{1}{2}$:** then $2x = 1$, so
$$\\sum \\frac{1^n}{n^2} = \\sum \\frac{1}{n^2} \\quad (p=2 > 1) \\;\\Rightarrow\\; \\textbf{converges.} \\; ✓$$

**Left endpoint $x = -\\frac{1}{2}$:** then $2x = -1$, so
$$\\sum \\frac{(-1)^n}{n^2} \\;\\Rightarrow\\; \\textbf{converges} \\text{ (absolutely; } \\sum\\tfrac{1}{n^2} \\text{ converges).} \\; ✓$$

Both endpoints are included:
$$\\boxed{\\left[-\\tfrac{1}{2},\\; \\tfrac{1}{2}\\right]}$$

> 🔑 **Heuristic (not a proof):** an $n^2$ in the denominator usually means *both* endpoints converge (closed interval), because $\\sum\\frac{1}{n^2}$ converges. An $n^1$ in the denominator usually splits them (one in, one out).`,
      },
      {
        id: 'ric4-bracket-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Brackets** 🔽

Each row tells you what the endpoint series does. Pick whether to **include** or **exclude** that endpoint.`,
        exercise: {
          dropdowns: [
            { label: 'Endpoint gives $\\sum \\frac{1}{n}$ (harmonic):', options: ['exclude', 'include'] },
            { label: 'Endpoint gives $\\sum \\frac{(-1)^n}{n}$:', options: ['include', 'exclude'] },
            { label: 'Endpoint gives $\\sum \\frac{1}{n^2}$:', options: ['include', 'exclude'] },
            { label: 'Endpoint gives $\\sum (-1)^n$:', options: ['exclude', 'include'] },
          ],
          correctAnswers: ['exclude', 'include', 'include', 'exclude'],
          hint1: 'Include only if the endpoint series CONVERGES.',
          hint2: '$\\sum\\frac1n$ diverges (harmonic); $\\sum\\frac{(-1)^n}{n}$ converges (AST); $\\sum\\frac{1}{n^2}$ converges ($p=2$).',
          hint3: '$\\sum(-1)^n = -1+1-1+\\cdots$ has terms that do NOT go to $0$, so it diverges by the $n$th-term test — exclude it.',
          explanation: 'Diverges → exclude: $\\sum\\frac1n$ and $\\sum(-1)^n$. Converges → include: $\\sum\\frac{(-1)^n}{n}$ (AST) and $\\sum\\frac{1}{n^2}$ ($p$-series).',
        },
      },
      {
        id: 'ric4-recap',
        type: 'text' as const,
        content: `## Putting It Together

The endpoint workflow in one line:

$$\\text{plug in } x = a \\pm R \\;\\to\\; \\text{identify the number series} \\;\\to\\; \\text{test it} \\;\\to\\; \\text{bracket accordingly}$$

> 💡 A fast mental rule for the most common endpoints: at an endpoint, a leftover $\\sum\\frac{1}{n}$ **diverges** (exclude), while the same series with an alternating sign, $\\sum\\frac{(-1)^n}{n}$, **converges** (include). That single contrast decides the majority of BC endpoint questions.`,
      },
      {
        id: 'ric4-drill',
        type: 'input-boxes' as const,
        content: `**Decide One Endpoint** 🧮 — *answer with the word* \`in\` *or* \`out\`

For $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^n}{n}$ (interval $[-1,1)$):

**1)** At $x = -1$ you get $\\sum\\frac{(-1)^n}{n}$. Is $x=-1$ \`in\` or \`out\`?
**2)** At $x = 1$ you get $\\sum\\frac{1}{n}$. Is $x=1$ \`in\` or \`out\`?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['in', 'out'],
          hint1: 'Include ("in") if the endpoint series converges; exclude ("out") if it diverges.',
          hint2: '$\\sum\\frac{(-1)^n}{n}$ converges by the Alternating Series Test → "in".',
          hint3: '$\\sum\\frac{1}{n}$ is the harmonic series → diverges → "out".',
          explanation: '$x=-1$: alternating harmonic converges → in. $x=1$: harmonic diverges → out. Interval $[-1, 1)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'radius-interval-convergence',
    sections: [
      {
        id: 'ric5-intro',
        type: 'text' as const,
        content: `# 🎯 Radius & Interval of Convergence

**Part 5 of 7 — The Three Behaviors & Full Worked Problems**

---

> 🔑 **The Big Picture:** Every power series falls into exactly one of three cases. Knowing which one you're in tells you immediately how much endpoint work remains.`,
      },
      {
        id: 'ric5-trichotomy',
        type: 'text' as const,
        content: `## The Convergence Trichotomy

For any power series $\\sum c_n(x-a)^n$, **exactly one** of these holds:

| Case | $R$ | Converges for | Endpoints to check |
|------|-----|---------------|--------------------|
| **Point** | $R = 0$ | only $x = a$ | none (interval is $\\{a\\}$) |
| **Finite** | $0 < R < \\infty$ | $|x-a| < R$ | **both** ($a-R$ and $a+R$) |
| **All reals** | $R = \\infty$ | every $x$ | none (interval is $(-\\infty,\\infty)$) |

So endpoint testing only happens in the **finite** case — but that's the most common case on exams.

> 💡 **Sanity checks:**
> - Factorial in the **denominator** → $R = \\infty$ (like $e^x$, $\\sin x$, $\\cos x$).
> - Factorial in the **numerator** → $R = 0$.
> - Coefficients that are rational in $n$ (like $\\frac{1}{n}$, $\\frac{n}{2^n}$) → finite $R$, test both endpoints.`,
      },
      {
        id: 'ric5-trichotomy-mc',
        type: 'multiple-choice' as const,
        content: `**Which Case?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!}$ (the cosine series), how many endpoints must you check?',
              options: ['Zero — $R = \\infty$, so it converges for all $x$', 'Two', 'One', 'Infinitely many'],
              correctAnswer: 0,
              explanation: 'The factorial $(2n)!$ in the denominator drives the ratio limit to $0$ for every $x$, so $R = \\infty$. With an infinite radius there are no finite endpoints to test.',
            },
            {
              question: 'A series has radius $R = 4$ centered at $a = -1$. Its open interval (before endpoints) is:',
              options: ['$(-5, 3)$', '$(-1, 4)$', '$(-4, 4)$', '$(3, 5)$'],
              correctAnswer: 0,
              explanation: 'Edges are $a \\pm R = -1 \\pm 4$, giving $-1-4 = -5$ and $-1+4 = 3$. The open interval is $(-5, 3)$.',
            },
          ],
        },
      },
      {
        id: 'ric5-fullworked',
        type: 'text' as const,
        content: `## Full Worked Problem: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x+4)^n}{n\\,5^n}$

**Step 1 — Ratio Test for $R$:**
$$\\left|\\frac{(x+4)^{n+1}}{(n+1)5^{n+1}}\\cdot\\frac{n\\,5^n}{(x+4)^n}\\right| = \\frac{|x+4|}{5}\\cdot\\frac{n}{n+1} \\;\\longrightarrow\\; \\frac{|x+4|}{5}$$

Set $< 1$: $\\;|x+4| < 5$, so $R = 5$.

**Step 2 — Center and open interval:** $(x+4) = (x-(-4))$, so center $a = -4$. Edges: $-4 \\pm 5$, giving $(-9, 1)$.

**Step 3 — Left endpoint $x = -9$:** then $x + 4 = -5$, so
$$\\sum \\frac{(-5)^n}{n\\,5^n} = \\sum \\frac{(-1)^n}{n} \\;\\Rightarrow\\; \\textbf{converges (AST).} \\; ✓ \\text{ include}$$

**Step 4 — Right endpoint $x = 1$:** then $x + 4 = 5$, so
$$\\sum \\frac{5^n}{n\\,5^n} = \\sum \\frac{1}{n} \\;\\Rightarrow\\; \\textbf{diverges (harmonic).} \\; ✗ \\text{ exclude}$$

**Final answer:**
$$\\boxed{\\text{center } -4,\\quad R = 5,\\quad \\text{interval } [-9,\\, 1)}$$`,
      },
      {
        id: 'ric5-fullworked-drill',
        type: 'input-boxes' as const,
        content: `**Full Problem Walkthrough** 🧮

For $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(x+4)^n}{n\\,5^n}$ from the worked example above, enter:

**1)** the center $a = \\,?$
**2)** the radius $R = \\,?$
**3)** the left endpoint $= \\,?$
**4)** the right endpoint $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-4', '5', '-9', '1'],
          hint1: '$(x+4) = (x-(-4))$, so the center is $a = -4$.',
          hint2: 'Ratio $\\to \\frac{|x+4|}{5} < 1 \\Rightarrow |x+4| < 5 \\Rightarrow R = 5$.',
          hint3: 'Edges are $a \\pm R = -4 \\pm 5$: left $= -9$, right $= 1$.',
          explanation: 'Center $-4$, $R = 5$, edges $-4-5 = -9$ and $-4+5 = 1$. (After endpoint tests the full interval is $[-9, 1)$.)',
        },
      },
      {
        id: 'ric5-bracket-rule',
        type: 'text' as const,
        content: `## From Endpoints to Brackets

Once you know whether each endpoint converges, the brackets follow a single rule:

| Endpoint behavior | Bracket | Meaning |
|-------------------|---------|---------|
| **converges** | $[\\;$ or $\\;]$ (square) | included |
| **diverges** | $(\\;$ or $\\;)$ (round) | excluded |

In the worked example the left endpoint $-9$ converged and the right endpoint $1$ diverged, so the interval is written $[-9,\\, 1)$ — square on the left, round on the right.

> ⚠️ The bracket only changes the *endpoint*, never the radius. $R$ stays $5$ whether the brackets are open or closed.`,
      },
      {
        id: 'ric5-twosided-dropdown',
        type: 'dropdown-select' as const,
        content: `**Assemble the Final Interval** 🔽

A series has center $a = -4$, radius $R = 5$. The left endpoint $-9$ **converges**; the right endpoint $1$ **diverges**. Build the interval of convergence.`,
        exercise: {
          dropdowns: [
            { label: 'Left bracket at $-9$:', options: ['$[$', '$($'] },
            { label: 'Left edge value:', options: ['$-9$', '$-1$', '$9$', '$-4$'] },
            { label: 'Right edge value:', options: ['$1$', '$5$', '$9$', '$-1$'] },
            { label: 'Right bracket at $1$:', options: ['$)$', '$]$'] },
          ],
          correctAnswers: ['$[$', '$-9$', '$1$', '$)$'],
          hint1: 'A converging endpoint gets a SQUARE bracket; a diverging endpoint gets a ROUND bracket.',
          hint2: 'Edges are $a \\pm R = -4 \\pm 5 = -9$ and $1$.',
          hint3: 'Left $-9$ converges → "[". Right $1$ diverges → ")". So $[-9, 1)$.',
          explanation: 'Converging left endpoint $-9$ → "["; diverging right endpoint $1$ → ")". The interval is $[-9, 1)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'radius-interval-convergence',
    sections: [
      {
        id: 'ric6-intro',
        type: 'text' as const,
        content: `# 🎯 Radius & Interval of Convergence

**Part 6 of 7 — Operations, Shortcuts & Common Traps**

---

> 🔑 **The Idea:** Differentiating or integrating a power series **term by term does not change the radius $R$** — but it *can* change the endpoints. Knowing this saves enormous time and is directly tested on the BC exam.`,
      },
      {
        id: 'ric6-calculus',
        type: 'text' as const,
        content: `## Term-by-Term Calculus Preserves $R$

If $f(x) = \\sum c_n (x-a)^n$ has radius $R$, then both
$$f'(x) = \\sum n\\,c_n (x-a)^{n-1} \\quad\\text{and}\\quad \\int f(x)\\,dx = C + \\sum \\frac{c_n}{n+1}(x-a)^{n+1}$$
have the **same radius $R$**.

> ⚠️ **But the endpoints can change!** Differentiating tends to *lose* endpoints (convergence gets weaker); integrating tends to *gain* them (convergence gets stronger). So always **re-check the endpoints** after differentiating or integrating, even though $R$ is safe.

### Example
Start with the geometric series $\\sum x^n$, which has $R = 1$, interval $(-1, 1)$ (both endpoints diverge). Integrate term by term:
$$\\int \\sum x^n\\,dx = \\sum \\frac{x^{n+1}}{n+1} = x + \\tfrac{x^2}{2} + \\tfrac{x^3}{3} + \\cdots$$
Same radius $R = 1$ — but now the left endpoint $x = -1$ gives the **convergent** alternating harmonic series. Integration *gained* an endpoint, turning $(-1,1)$ into $[-1, 1)$.`,
      },
      {
        id: 'ric6-calc-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A power series $f(x)$ has radius of convergence $R = 6$. What is the radius of convergence of $f\'(x)$ (its term-by-term derivative)?',
              options: ['$R = 6$', '$R = 5$', '$R = 7$', 'Cannot be determined'],
              correctAnswer: 0,
              explanation: 'Term-by-term differentiation never changes the radius of convergence — it stays $R = 6$. Only the endpoints might change; the radius is preserved.',
            },
            {
              question: 'Which statement is TRUE about integrating a power series term by term?',
              options: ['The radius stays the same, but endpoints must be rechecked', 'The radius always increases by 1', 'The radius always doubles', 'The interval is unchanged in every way'],
              correctAnswer: 0,
              explanation: 'Integration preserves the radius $R$ exactly, but it can add endpoints to the interval (convergence strengthens). You must always recheck the endpoints separately.',
            },
          ],
        },
      },
      {
        id: 'ric6-known',
        type: 'text' as const,
        content: `## Known Series You Should Recognize

These come up constantly; memorize their radii.

| Series | Function | Radius |
|--------|----------|--------|
| $\\sum_{n=0}^{\\infty} x^n$ | $\\dfrac{1}{1-x}$ | $R = 1$, interval $(-1,1)$ |
| $\\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!}$ | $e^x$ | $R = \\infty$ |
| $\\sum_{n=0}^{\\infty} \\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $\\sin x$ | $R = \\infty$ |
| $\\sum_{n=0}^{\\infty} \\dfrac{(-1)^n x^{2n}}{(2n)!}$ | $\\cos x$ | $R = \\infty$ |
| $\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1} x^n}{n}$ | $\\ln(1+x)$ | $R = 1$, interval $(-1, 1]$ |
| $\\sum_{n=0}^{\\infty} \\dfrac{(-1)^n x^{2n+1}}{2n+1}$ | $\\arctan x$ | $R = 1$, interval $[-1, 1]$ |

> 💡 The three "$e^x$ family" series ($e^x$, $\\sin x$, $\\cos x$) all have factorials in the denominator, so all three have $R = \\infty$. The "geometric family" ($\\frac{1}{1-x}$, $\\ln$, $\\arctan$) all have $R = 1$ — they differ only in their endpoints.`,
      },
      {
        id: 'ric6-known-drill',
        type: 'input-boxes' as const,
        content: `**Recall the Radius** 🧮

From the table above, enter the radius of convergence. Use \`inf\` for infinite.

**1)** The series for $\\sin x$:  $R = \\,?$  *(use* \`inf\`*)*
**2)** The series for $\\dfrac{1}{1-x}$ (geometric):  $R = \\,?$
**3)** The series for $\\arctan x$:  $R = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['inf', '1', '1'],
          hint1: 'The $e^x$ family ($e^x$, $\\sin x$, $\\cos x$) has factorials in the denominator → $R = \\infty$.',
          hint2: 'The geometric family ($\\frac{1}{1-x}$, $\\ln(1+x)$, $\\arctan x$) all have $R = 1$.',
          hint3: '$\\sin x \\Rightarrow R = \\infty$ (type "inf"); the geometric and $\\arctan$ series each have $R = 1$.',
          explanation: '$\\sin x$: $R = \\infty$. $\\frac{1}{1-x}$: $R = 1$. $\\arctan x$: $R = 1$ (interval $[-1,1]$, but the radius is $1$).',
        },
      },
      {
        id: 'ric6-trap',
        type: 'text' as const,
        content: `## Common Traps ⚠️

> ⚠️ **Trap 1 — Forgetting the endpoints.** The Ratio Test gives an *open* interval. Writing $(-1, 1)$ when the answer is $[-1, 1)$ is a wrong answer. Always test both ends (unless $R = 0$ or $R = \\infty$).

> ⚠️ **Trap 2 — A coefficient like $(2x)^n$.** This is **not** radius $1$. Pull out the $2$: $(2x)^n = 2^n x^n$, so the ratio carries a factor of $2$ and $R = \\frac{1}{2}$. Forgetting to extract the constant is a top error.

> ⚠️ **Trap 3 — Reading the center's sign backwards.** $(x + 4)^n = (x - (-4))^n$, so the center is $-4$, **not** $+4$. The center is the value that makes the base zero.

> ⚠️ **Trap 4 — Using the radius alone as the interval for shifted series.** With center $a$, the interval runs from $a - R$ to $a + R$, not from $-R$ to $R$. Always add and subtract from the center.`,
      },
      {
        id: 'ric6-trap-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Right Value** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Center of $\\sum (x+7)^n$:', options: ['$-7$', '$7$', '$0$', '$1$'] },
            { label: 'Radius of $\\sum \\frac{(3x)^n}{n}$:', options: ['$\\frac{1}{3}$', '$3$', '$1$', '$\\infty$'] },
            { label: 'Radius of $\\sum \\frac{x^n}{n!}$:', options: ['$\\infty$', '$1$', '$0$', '$\\frac{1}{2}$'] },
            { label: 'Interval of $\\sum x^n$ (geometric):', options: ['$(-1, 1)$', '$[-1, 1]$', '$[-1, 1)$', '$(-1, 1]$'] },
          ],
          correctAnswers: ['$-7$', '$\\frac{1}{3}$', '$\\infty$', '$(-1, 1)$'],
          hint1: 'Center makes the base zero: $x + 7 = 0 \\Rightarrow x = -7$.',
          hint2: '$(3x)^n = 3^n x^n$, ratio carries a $3$, so $R = \\frac{1}{3}$. A denominator factorial gives $R = \\infty$.',
          hint3: 'The geometric series diverges at both $x = 1$ and $x = -1$ ($n$th-term test), so the interval is open: $(-1, 1)$.',
          explanation: 'Center of $\\sum(x+7)^n$ is $-7$. $\\sum\\frac{(3x)^n}{n}$ has ratio $3|x|$, so $R = \\frac13$. $\\sum\\frac{x^n}{n!}$ has $R = \\infty$. The plain geometric series is open on both ends: $(-1, 1)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'radius-interval-convergence',
    sections: [
      {
        id: 'ric7-intro',
        type: 'text' as const,
        content: `# 🎯 Radius & Interval of Convergence

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) set up the Ratio Test, (2) find $R$ through every coefficient pattern, (3) locate the center and edges, (4) test endpoints, and (5) use shortcuts for known and differentiated series. Time to put it together.`,
      },
      {
        id: 'ric7-mixed1',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the radius of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n!\\,x^n}{2^n}$.',
              options: ['$R = 0$', '$R = 2$', '$R = \\frac{1}{2}$', '$R = \\infty$'],
              correctAnswer: 0,
              explanation: 'Ratio $= |x|\\cdot\\frac{(n+1)!}{n!}\\cdot\\frac{2^n}{2^{n+1}} = |x|\\cdot\\frac{n+1}{2} \\to \\infty$ for any $x \\ne 0$. The numerator factorial dominates the $2^n$, so $R = 0$.',
            },
            {
              question: 'A power series centered at $a = 3$ has $R = 2$, and BOTH endpoints converge. Its interval of convergence is:',
              options: ['$[1, 5]$', '$(1, 5)$', '$[1, 5)$', '$(1, 5]$'],
              correctAnswer: 0,
              explanation: 'Edges are $3 \\pm 2 = 1$ and $5$. Both endpoints converge, so both get square brackets: $[1, 5]$.',
            },
          ],
        },
      },
      {
        id: 'ric7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Step | What to do |
|------|------------|
| 1. Ratio Test | $L = |x-a|\\cdot\\lim\\left|\\frac{c_{n+1}}{c_n}\\right|$ |
| 2. Solve $L < 1$ | gives $|x - a| < R$ → read off $R$ |
| 3. Open interval | $(a - R,\\; a + R)$ |
| 4. Test each endpoint | plug $x = a \\pm R$, test the number series |
| 5. Brackets | converges → $[\\,]$ ; diverges → $(\\,)$ |

> 🔑 **Four radii to know by sight:** denominator factorial → $R = \\infty$; numerator factorial → $R = 0$; a $b^n$ or $(bx)^n$ factor → $R = \\frac{1}{b}$; polynomial coefficients → $R = 1$.`,
      },
      {
        id: 'ric7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Radius** 🧮

Find $R$ for each. Use \`inf\` for an infinite radius.

**1)** $\\displaystyle\\sum \\frac{x^n}{6^n}$,  $R = \\,?$
**2)** $\\displaystyle\\sum \\frac{x^n}{(2n)!}$,  $R = \\,?$  *(use* \`inf\`*)*
**3)** $\\displaystyle\\sum \\frac{(4x)^n}{n}$,  $R = \\,?$  *(fraction ok)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', 'inf', '1/4'],
          hint1: '1) $\\frac{|x|}{6} < 1 \\Rightarrow R = 6$.',
          hint2: '2) Denominator factorial $\\Rightarrow$ ratio $\\to 0 \\Rightarrow R = \\infty$ (type "inf").',
          hint3: '3) $(4x)^n = 4^n x^n$, ratio $\\to 4|x| < 1 \\Rightarrow |x| < \\frac{1}{4} \\Rightarrow R = \\frac{1}{4}$.',
          explanation: '1) $R = 6$.  2) $R = \\infty$ (denominator factorial).  3) ratio $4|x| \\Rightarrow R = \\frac{1}{4}$.',
        },
      },
      {
        id: 'ric7-builder-lead',
        type: 'text' as const,
        content: `## One Complete Build, Start to Finish

Radius alone is never the full answer on the free-response — you must report the **entire interval**, brackets included. The next builder walks one problem through all five steps: ratio test → radius → edges → endpoint tests → brackets.

> 💡 Read each dropdown in order; each choice feeds the next, exactly the way you'd write the solution on paper.`,
      },
      {
        id: 'ric7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Full Interval Builder** 🔽

For $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(x-2)^n}{n}$: the ratio test gives $|x-2| < 1$, so $R = 1$, center $2$.`,
        exercise: {
          dropdowns: [
            { label: 'Open interval edges:', options: ['$1$ and $3$', '$-1$ and $1$', '$2$ and $3$', '$-2$ and $2$'] },
            { label: 'Left endpoint $x=1$ gives $\\sum\\frac{(-1)^n}{n}$, which:', options: ['converges', 'diverges'] },
            { label: 'Right endpoint $x=3$ gives $\\sum\\frac{1}{n}$, which:', options: ['diverges', 'converges'] },
            { label: 'Interval of convergence:', options: ['$[1, 3)$', '$(1, 3)$', '$[1, 3]$', '$(1, 3]$'] },
          ],
          correctAnswers: ['$1$ and $3$', 'converges', 'diverges', '$[1, 3)$'],
          hint1: 'Edges are $a \\pm R = 2 \\pm 1 = 1$ and $3$.',
          hint2: 'At $x=1$: $(x-2) = -1$, giving the convergent alternating harmonic series → include $1$.',
          hint3: 'At $x=3$: $(x-2) = 1$, giving the divergent harmonic series → exclude $3$. So $[1, 3)$.',
          explanation: 'Center $2$, $R = 1$, edges $1$ and $3$. Left endpoint converges (AST) → "["; right endpoint diverges (harmonic) → ")". Interval $[1, 3)$.',
        },
      },
      {
        id: 'ric7-wrapup',
        type: 'text' as const,
        content: `## You've Got the Whole Toolkit

You can now take any power series and: run the **Ratio Test**, solve $L < 1$ for the **radius $R$**, locate the **center and edges**, **test both endpoints** with the right convergence test, and write the **interval** with correct brackets — plus shortcut the radius for factorials, $b^n$ factors, and the famous known series.

> 🔑 **Don't lose the easy points:** the radius is usually the quick part; the endpoints are where the exam credit lives. Always finish the brackets. Now prove it on the exit quiz.`,
      },
      {
        id: 'ric7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$?',
              options: ['$R = \\infty$', '$R = 1$', '$R = 0$', '$R = e$'],
              correctAnswer: 0,
              explanation: 'The ratio is $|x|\\cdot\\frac{n!}{(n+1)!} = \\frac{|x|}{n+1} \\to 0$ for every $x$. This is the $e^x$ series, which converges for all real $x$, so $R = \\infty$.',
            },
            {
              question: 'The Ratio Test gives $|x - 5| < 3$. The open interval of convergence (before endpoints) is:',
              options: ['$(2, 8)$', '$(-3, 3)$', '$(5, 8)$', '$(3, 5)$'],
              correctAnswer: 0,
              explanation: 'Center $a = 5$, radius $R = 3$. Edges are $5 - 3 = 2$ and $5 + 3 = 8$, giving the open interval $(2, 8)$.',
            },
            {
              question: 'A series has $R = 1$. At $x = -1$ it gives $\\sum\\frac{(-1)^n}{n}$ (converges) and at $x = 1$ it gives $\\sum\\frac{1}{n}$ (diverges). The interval of convergence is:',
              options: ['$[-1, 1)$', '$(-1, 1)$', '$(-1, 1]$', '$[-1, 1]$'],
              correctAnswer: 0,
              explanation: 'The converging left endpoint $-1$ is included (square bracket); the diverging right endpoint $1$ is excluded (round bracket). The interval is $[-1, 1)$ — the classic $\\sum x^n/n$ answer.',
            },
          ],
        },
      },
    ],
  },
]
