import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Indeterminate Forms and Factoring (AP Calculus AB).
 * Registry key / DB Topic.slug: 'indeterminate-forms-factoring'.
 * 7 parts, gold-standard structure: what 0/0 means → factoring out a common
 * (x - a) → difference of squares & quadratics → cubes & higher-degree
 * factoring → rationalizing (a cousin technique) → graphical meaning + holes →
 * mixed mastery + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every limit, factorization, and answer index was computed by hand and
 * re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'indeterminate-forms-factoring',
    sections: [
      {
        id: 'iff1-intro',
        type: 'text' as const,
        content: `# 🧩 Indeterminate Forms & Factoring

**Part 1 of 7 — When Direct Substitution Gives You $\\frac{0}{0}$**

---

### Topics in This Part

| Section |
|---------|
| Direct Substitution First |
| What $\\frac{0}{0}$ Really Means |
| Why $\\frac{0}{0}$ Is *Indeterminate* (not undefined) |

> 🔑 **Key Concept:** When plugging in the value gives $\\dfrac{0}{0}$, the limit is **not** automatically $0$, $1$, or undefined. The $\\dfrac{0}{0}$ form is a *signal* that you must rewrite the expression — usually by **factoring** — before the limit reveals itself.`,
      },
      {
        id: 'iff1-substitution',
        type: 'text' as const,
        content: `## Always Try Direct Substitution First

For most "nice" functions, you find a limit by simply plugging the value in:

$$\\lim_{x \\to a} f(x) = f(a) \\quad \\text{(when } f \\text{ is continuous at } a\\text{)}$$

### A Limit That Works Immediately

$$\\lim_{x \\to 3} (x^2 - 2x) = (3)^2 - 2(3) = 9 - 6 = 3$$

No drama — substitution gave a real number, and we're done.

### A Limit That *Doesn't*

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\frac{(2)^2 - 4}{2 - 2} = \\frac{0}{0}$$

Substitution **broke**. The numerator and the denominator both hit $0$. This is the situation this entire lesson is built around.

> 🔑 **The Rule:** Direct substitution is always step one. If it gives a number, that number *is* the limit. Only when it gives an indeterminate form do you reach for factoring.`,
      },
      {
        id: 'iff1-trysub',
        type: 'multiple-choice' as const,
        content: `**Concept Check — Try Substitution** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does direct substitution give for $\\displaystyle\\lim_{x \\to 4} \\frac{x - 4}{x^2 - 16}$?',
              options: ['$\\frac{0}{0}$ (indeterminate)', '$0$', '$\\frac{1}{8}$', 'Undefined — the limit cannot exist'],
              correctAnswer: 0,
              explanation: 'Top: $4 - 4 = 0$. Bottom: $4^2 - 16 = 0$. So substitution gives $\\frac{0}{0}$, an indeterminate form. The limit may still exist — we just need to factor first.',
            },
            {
              question: 'For $\\displaystyle\\lim_{x \\to 1} \\frac{x^2 + 3}{x + 5}$, what is the correct first move?',
              options: [
                'Substitute $x = 1$ directly; it gives $\\frac{4}{6} = \\frac{2}{3}$',
                'Factor the numerator before doing anything',
                'Declare the limit does not exist',
                'Multiply by a conjugate',
              ],
              correctAnswer: 0,
              explanation: 'Always try substitution first. Here $\\frac{1^2+3}{1+5} = \\frac{4}{6} = \\frac{2}{3}$, a real number — no indeterminate form, so we are done. No factoring needed.',
            },
          ],
        },
      },
      {
        id: 'iff1-meaning',
        type: 'text' as const,
        content: `## Why $\\frac{0}{0}$ Is Called *Indeterminate*

A form like $\\dfrac{5}{0}$ is **undefined** — there is no number it could be. But $\\dfrac{0}{0}$ is different: depending on the function, it can come out to *anything*. Watch:

| Limit | Substitution | Actual value |
|-------|:------------:|:------------:|
| $\\displaystyle\\lim_{x\\to 0}\\frac{2x}{x}$ | $\\frac{0}{0}$ | $2$ |
| $\\displaystyle\\lim_{x\\to 0}\\frac{x}{x}$ | $\\frac{0}{0}$ | $1$ |
| $\\displaystyle\\lim_{x\\to 0}\\frac{x^2}{x}$ | $\\frac{0}{0}$ | $0$ |

All three *look* like $\\dfrac{0}{0}$, yet the answers are $2$, $1$, and $0$. That is exactly why $\\dfrac{0}{0}$ "determines" nothing on its own.

> 💡 **Mental model:** $\\dfrac{0}{0}$ is a race. The numerator races to $0$ and the denominator races to $0$ — the limit is decided by *who gets there faster*. Factoring is how we measure the speeds.`,
      },
      {
        id: 'iff1-classify',
        type: 'dropdown-select' as const,
        content: `**Determinate or Indeterminate?** 🔽

Classify what each substitution result tells you.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{0}{0}$ is:', options: ['Indeterminate — must rewrite', 'Equal to $0$', 'Equal to $1$', 'Always undefined'] },
            { label: '$\\frac{7}{0}$ is:', options: ['Undefined (or $\\pm\\infty$ behavior)', 'Indeterminate', 'Equal to $7$', 'Equal to $0$'] },
            { label: '$\\frac{0}{7}$ is:', options: ['Equal to $0$', 'Indeterminate', 'Undefined', 'Equal to $7$'] },
          ],
          correctAnswers: ['Indeterminate — must rewrite', 'Undefined (or $\\pm\\infty$ behavior)', 'Equal to $0$'],
          hint1: 'Only $\\frac{0}{0}$ (and $\\frac{\\infty}{\\infty}$) hides a real answer that needs more work.',
          hint2: 'A nonzero number over $0$ blows up — it is not indeterminate, it is undefined.',
          hint3: '$0$ divided by any nonzero number is honestly just $0$.',
          explanation: '$\\frac{0}{0}$ is indeterminate (rewrite needed). $\\frac{7}{0}$ is undefined / infinite. $\\frac{0}{7}=0$ is a finished, real value.',
        },
      },
      {
        id: 'iff1-spot',
        type: 'input-boxes' as const,
        content: `**Spot the Form** 🧮

For each limit, do the substitution in your head and report the result. Type **0/0** if it's indeterminate, **0** if it equals zero, or **DNE** if it's a nonzero number over zero.

**1)** $\\displaystyle\\lim_{x \\to 5} \\frac{x - 5}{x^2 - 25}$ → ?
**2)** $\\displaystyle\\lim_{x \\to 5} \\frac{x + 5}{x - 5}$ → ?
**3)** $\\displaystyle\\lim_{x \\to 5} \\frac{x - 5}{x + 5}$ → ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0/0', 'DNE', '0'],
          hint1: 'Top $5-5=0$, bottom $25-25=0$ → indeterminate.',
          hint2: 'Top $5+5=10$, bottom $5-5=0$ → nonzero over zero, undefined/DNE.',
          hint3: 'Top $5-5=0$, bottom $5+5=10$ → $0$ over nonzero $=0$.',
          explanation: '1) $\\frac{0}{0}$ indeterminate (needs factoring).  2) $\\frac{10}{0}$ → DNE / asymptote.  3) $\\frac{0}{10} = 0$, a finished answer.',
        },
      },
      {
        id: 'iff1-recap',
        type: 'text' as const,
        content: `## Part 1 Recap

- **Step 1 is always substitution.** A real number means you're done.
- $\\dfrac{0}{0}$ is the **indeterminate** form — a flag that says "rewrite me."
- It is *not* the same as $\\dfrac{\\text{nonzero}}{0}$ (undefined) or $\\dfrac{0}{\\text{nonzero}}$ (equals $0$).

In Part 2, we learn the single most important fix: when both top and bottom vanish at $x = a$, they **share the factor $(x - a)$** — and we cancel it.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'indeterminate-forms-factoring',
    sections: [
      {
        id: 'iff2-intro',
        type: 'text' as const,
        content: `# 🧩 Indeterminate Forms & Factoring

**Part 2 of 7 — The Hidden Common Factor $(x - a)$**

---

> 🔑 **The Big Idea:** If substituting $x = a$ makes both numerator and denominator equal $0$, then by the **Factor Theorem** both contain a factor of $(x - a)$. Cancel it, *then* substitute.`,
      },
      {
        id: 'iff2-factor-theorem',
        type: 'text' as const,
        content: `## Why the Factor $(x - a)$ Must Be There

**Factor Theorem:** if a polynomial $p(x)$ has $p(a) = 0$, then $(x - a)$ is a factor of $p(x)$.

So when $\\dfrac{p(x)}{q(x)}$ gives $\\dfrac{0}{0}$ at $x = a$:
- $p(a) = 0 \\Rightarrow (x - a)$ divides $p(x)$
- $q(a) = 0 \\Rightarrow (x - a)$ divides $q(x)$

The **same** $(x - a)$ lives in both — that's the factor we cancel.

### Worked Example: $\\displaystyle\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$

$$\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x - 2} = x + 2 \\quad (x \\ne 2)$$

Now substitute into the simplified form:

$$\\lim_{x \\to 2} (x + 2) = 2 + 2 = 4$$

> ✅ The limit is $4$. The factor $(x - 2)$ that caused the $\\frac{0}{0}$ was exactly the thing we cancelled.`,
      },
      {
        id: 'iff2-why-valid',
        type: 'text' as const,
        content: `## Why Cancelling Is Legal Here

You might worry: "We divided by $(x-2)$, but $x - 2 = 0$ at $x = 2$!"

The escape is the definition of a limit. As $x \\to 2$, we consider values *near* $2$ but **never equal to** $2$. For every such $x$, $x - 2 \\ne 0$, so the cancellation is perfectly valid.

$$\\frac{x^2-4}{x-2} = x + 2 \\quad \\text{for all } x \\ne 2$$

The two expressions agree everywhere except the single point $x = 2$ — and the limit doesn't care about that one point.

> 💡 The original function has a **hole** at $x = 2$; the simplified $x + 2$ fills it in. They share the same limit because limits ignore the single missing point.`,
      },
      {
        id: 'iff2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After cancelling, $\\displaystyle\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$ equals:',
              options: ['$10$', '$0$', '$5$', '$\\frac{0}{0}$'],
              correctAnswer: 0,
              explanation: '$\\frac{x^2-25}{x-5} = \\frac{(x-5)(x+5)}{x-5} = x+5$. Then $\\lim_{x\\to5}(x+5) = 10$.',
            },
            {
              question: 'Why may we cancel the factor $(x - 3)$ when finding $\\displaystyle\\lim_{x\\to 3}$?',
              options: [
                'Because as $x \\to 3$ we use values where $x \\ne 3$, so $x - 3 \\ne 0$',
                'Because $0$ divided by $0$ is $1$',
                'Because $(x-3)$ equals $0$, so it disappears',
                'You may never cancel a factor that becomes $0$',
              ],
              correctAnswer: 0,
              explanation: 'The limit looks only at $x$ values near $3$ but not equal to $3$. For all of those, $x - 3 \\ne 0$, so dividing is valid.',
            },
          ],
        },
      },
      {
        id: 'iff2-drill',
        type: 'input-boxes' as const,
        content: `**Cancel and Evaluate** 🧮

Each gives $\\frac{0}{0}$. Factor, cancel $(x - a)$, then substitute. Enter the limit.

**1)** $\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to -4} \\frac{x^2 - 16}{x + 4} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to 7} \\frac{x^2 - 49}{x - 7} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '-8', '14'],
          hint1: '$\\frac{x^2-9}{x-3} = \\frac{(x-3)(x+3)}{x-3} = x+3$, then plug in $3$.',
          hint2: '$x^2-16=(x-4)(x+4)$. Cancel $(x+4)$ to get $x-4$, then plug in $-4$.',
          hint3: '$x^2-49=(x-7)(x+7)$. Cancel $(x-7)$ to get $x+7$, then plug in $7$.',
          explanation: '1) $x+3 \\to 3+3 = 6$.  2) $x-4 \\to -4-4 = -8$.  3) $x+7 \\to 7+7 = 14$.',
        },
      },
      {
        id: 'iff2-order',
        type: 'dropdown-select' as const,
        content: `**Order the Method** 🔽

You're evaluating $\\displaystyle\\lim_{x \\to 6} \\frac{x^2 - 36}{x - 6}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Substitute $x = 6$ to check:', options: ['$\\frac{0}{0}$ — indeterminate', '$12$', '$\\frac{12}{0}$ — DNE', '$0$'] },
            { label: 'Factor the numerator:', options: ['$(x-6)(x+6)$', '$(x-6)^2$', '$(x-36)(x+1)$', '$(x+6)^2$'] },
            { label: 'Cancel the common factor:', options: ['$(x - 6)$', '$(x + 6)$', '$(x^2)$', 'nothing cancels'] },
            { label: 'The limit equals:', options: ['$12$', '$0$', '$6$', '$\\frac{0}{0}$'] },
          ],
          correctAnswers: ['$\\frac{0}{0}$ — indeterminate', '$(x-6)(x+6)$', '$(x - 6)$', '$12$'],
          hint1: 'Both top ($36-36$) and bottom ($6-6$) hit $0$.',
          hint2: '$x^2-36$ is a difference of squares: $(x-6)(x+6)$.',
          hint3: 'Cancel $(x-6)$ to leave $x+6$; at $x=6$ that is $12$.',
          explanation: '$\\frac{(x-6)(x+6)}{x-6} = x+6$, and $\\lim_{x\\to6}(x+6) = 12$.',
        },
      },
      {
        id: 'iff2-recap',
        type: 'text' as const,
        content: `## Part 2 Recap

The core move, in three steps:

1. Substitution gives $\\dfrac{0}{0}$ → both top and bottom are $0$ at $x = a$.
2. **Factor** both; the shared $(x - a)$ is guaranteed to exist.
3. **Cancel** $(x - a)$, then substitute into what remains.

So far the numerators have been easy differences of squares. In Part 3 we sharpen the **factoring toolkit** so you can handle any quadratic.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'indeterminate-forms-factoring',
    sections: [
      {
        id: 'iff3-intro',
        type: 'text' as const,
        content: `# 🧩 Indeterminate Forms & Factoring

**Part 3 of 7 — Factoring Quadratics & Difference of Squares**

---

> 🔑 **Goal:** The limit method is only as strong as your factoring. This part is a focused refresher on the two patterns AP problems lean on most: the **difference of squares** and **general quadratic factoring**.`,
      },
      {
        id: 'iff3-patterns',
        type: 'text' as const,
        content: `## The Two Patterns You Need Cold

### Difference of Squares
$$a^2 - b^2 = (a - b)(a + b)$$

| Expression | Factored |
|------------|----------|
| $x^2 - 9$ | $(x-3)(x+3)$ |
| $x^2 - 49$ | $(x-7)(x+7)$ |
| $4x^2 - 25$ | $(2x-5)(2x+5)$ |
| $x^2 - 2$ | $(x-\\sqrt{2})(x+\\sqrt{2})$ |

### General Quadratic $x^2 + bx + c$
Find two numbers that **multiply to $c$** and **add to $b$**.

For $x^2 - x - 6$: we need a product of $-6$ and a sum of $-1$. That's $-3$ and $+2$:
$$x^2 - x - 6 = (x - 3)(x + 2)$$

> 💡 **Speed tip:** to factor for a limit at $x = a$, you already *know* one factor is $(x - a)$. Use that as a shortcut — the other factor is whatever pairs with it.`,
      },
      {
        id: 'iff3-factor-drill',
        type: 'dropdown-select' as const,
        content: `**Factor It** 🔽

Choose the correct factorization of each expression.`,
        exercise: {
          dropdowns: [
            { label: '$x^2 - 36 = $', options: ['$(x-6)(x+6)$', '$(x-36)(x+1)$', '$(x-6)^2$', '$(x-18)(x+2)$'] },
            { label: '$x^2 + 2x - 15 = $', options: ['$(x+5)(x-3)$', '$(x-5)(x+3)$', '$(x+5)(x+3)$', '$(x-15)(x+1)$'] },
            { label: '$x^2 - 7x + 12 = $', options: ['$(x-3)(x-4)$', '$(x+3)(x+4)$', '$(x-2)(x-6)$', '$(x-12)(x+1)$'] },
          ],
          correctAnswers: ['$(x-6)(x+6)$', '$(x+5)(x-3)$', '$(x-3)(x-4)$'],
          hint1: '$x^2 - 36$ is a difference of squares: $36 = 6^2$.',
          hint2: 'For $x^2+2x-15$: two numbers multiplying to $-15$, adding to $+2$ → $+5$ and $-3$.',
          hint3: 'For $x^2-7x+12$: product $+12$, sum $-7$ → $-3$ and $-4$.',
          explanation: '$(x-6)(x+6)$, $(x+5)(x-3)$, and $(x-3)(x-4)$ — multiply each back out to confirm the middle term.',
        },
      },
      {
        id: 'iff3-worked',
        type: 'text' as const,
        content: `## Worked Example: A Quadratic on Top *and* Bottom

$$\\lim_{x \\to 3} \\frac{x^2 - x - 6}{x^2 - 9}$$

**Step 1 — Substitute.** Top: $9 - 3 - 6 = 0$. Bottom: $9 - 9 = 0$. Form is $\\dfrac{0}{0}$. ✔ factor.

**Step 2 — Factor both.**
$$\\frac{x^2 - x - 6}{x^2 - 9} = \\frac{(x - 3)(x + 2)}{(x - 3)(x + 3)}$$

**Step 3 — Cancel $(x - 3)$.**
$$= \\frac{x + 2}{x + 3} \\quad (x \\ne 3)$$

**Step 4 — Substitute.**
$$\\lim_{x \\to 3} \\frac{x + 2}{x + 3} = \\frac{3 + 2}{3 + 3} = \\frac{5}{6}$$

> ✅ The answer is $\\dfrac{5}{6}$ — a perfectly ordinary number that the original $\\frac{0}{0}$ was hiding.`,
      },
      {
        id: 'iff3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\lim_{x \\to 2} \\frac{x^2 - x - 2}{x^2 - 4}$ equals:',
              options: ['$\\frac{3}{4}$', '$\\frac{1}{4}$', '$1$', '$\\frac{0}{0}$'],
              correctAnswer: 0,
              explanation: '$\\frac{(x-2)(x+1)}{(x-2)(x+2)} = \\frac{x+1}{x+2}$. At $x=2$: $\\frac{3}{4}$.',
            },
            {
              question: 'Which factor cancels in $\\displaystyle\\lim_{x \\to -5} \\frac{x^2 + 8x + 15}{x^2 - 25}$?',
              options: ['$(x + 5)$', '$(x - 5)$', '$(x + 3)$', 'Nothing cancels'],
              correctAnswer: 0,
              explanation: 'Top $= (x+5)(x+3)$, bottom $= (x-5)(x+5)$. The shared factor is $(x+5)$, matching the $x \\to -5$ that caused the $\\frac{0}{0}$.',
            },
          ],
        },
      },
      {
        id: 'iff3-drill',
        type: 'input-boxes' as const,
        content: `**Quadratic Over Quadratic** 🧮

Factor top and bottom, cancel, then evaluate. Fractions like $-5/12$ are fine.

**1)** $\\displaystyle\\lim_{x \\to 4} \\frac{x^2 - 16}{x^2 - 3x - 4} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to -3} \\frac{x^2 + x - 6}{x^2 - 9} = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8/5', '5/6'],
          hint1: 'Top $=(x-4)(x+4)$; bottom $=(x-4)(x+1)$. Cancel $(x-4)$ → $\\frac{x+4}{x+1}$, then $x=4$.',
          hint2: 'Top $=(x+3)(x-2)$; bottom $=(x-3)(x+3)$. Cancel $(x+3)$ → $\\frac{x-2}{x-3}$, then $x=-3$.',
          hint3: '1) $\\frac{4+4}{4+1} = \\frac{8}{5}$.  2) $\\frac{-3-2}{-3-3} = \\frac{-5}{-6} = \\frac{5}{6}$.',
          explanation: '1) $\\frac{x+4}{x+1}\\big|_{x=4} = \\frac{8}{5}$.  2) $\\frac{x-2}{x-3}\\big|_{x=-3} = \\frac{-5}{-6} = \\frac{5}{6}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'indeterminate-forms-factoring',
    sections: [
      {
        id: 'iff4-intro',
        type: 'text' as const,
        content: `# 🧩 Indeterminate Forms & Factoring

**Part 4 of 7 — Cubes, Higher Degrees & Synthetic Division**

---

> 🔑 **When the squares run out:** Some limits need the **sum/difference of cubes** patterns, or a degree-$3$ polynomial where you divide out the known factor $(x - a)$ to find the rest.`,
      },
      {
        id: 'iff4-cubes',
        type: 'text' as const,
        content: `## Sum and Difference of Cubes

Memorize these two — they show up constantly:

$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

> 💡 **Mnemonic "SOAP":** **S**ame sign, **O**pposite sign, **A**lways **P**ositive. The first bracket's sign matches the cube's sign; the middle term of the trinomial is the opposite; the last term is always $+$.

### Worked Example: $\\displaystyle\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$

Here $8 = 2^3$, so it's a difference of cubes with $a = x,\\ b = 2$:

$$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$$

$$\\frac{x^3 - 8}{x - 2} = \\frac{(x-2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4$$

$$\\lim_{x \\to 2}(x^2 + 2x + 4) = 4 + 4 + 4 = 12$$

> ✅ The limit is $12$. Notice the trinomial $x^2+2x+4$ does **not** factor further (its discriminant is $4 - 16 < 0$) — and it doesn't need to.`,
      },
      {
        id: 'iff4-cubes-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check — Cubes** 🎯`,
        exercise: {
          questions: [
            {
              question: '$x^3 + 27$ factors as:',
              options: ['$(x + 3)(x^2 - 3x + 9)$', '$(x + 3)(x^2 + 3x + 9)$', '$(x - 3)(x^2 + 3x + 9)$', '$(x + 3)^3$'],
              correctAnswer: 0,
              explanation: 'Sum of cubes with $b = 3$: $(x+3)(x^2 - 3x + 9)$. Middle sign is opposite the binomial; last term $+9$.',
            },
            {
              question: '$\\displaystyle\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$ equals:',
              options: ['$27$', '$9$', '$0$', '$3$'],
              correctAnswer: 0,
              explanation: '$x^3-27=(x-3)(x^2+3x+9)$, so the limit is $x^2+3x+9$ at $x=3$: $9+9+9 = 27$.',
            },
          ],
        },
      },
      {
        id: 'iff4-synthetic',
        type: 'text' as const,
        content: `## Higher Degrees: Divide Out the Known Factor

When the numerator is a messy cubic that isn't a clean sum/difference of cubes, use the guarantee: if substitution gives $\\frac{0}{0}$ at $x = a$, then $(x - a)$ **is** a factor — so divide it out.

### Worked Example: $\\displaystyle\\lim_{x \\to 1} \\frac{x^3 - 2x^2 - x + 2}{x - 1}$

Check: $1 - 2 - 1 + 2 = 0$ ✔, so $(x - 1)$ divides the top. **Synthetic division** by $1$:

$$\\begin{array}{c|cccc} 1 & 1 & -2 & -1 & 2 \\\\ & & 1 & -1 & -2 \\\\ \\hline & 1 & -1 & -2 & 0 \\end{array}$$

The quotient is $x^2 - x - 2 = (x - 2)(x + 1)$, so:

$$\\frac{x^3 - 2x^2 - x + 2}{x - 1} = x^2 - x - 2$$

$$\\lim_{x \\to 1}(x^2 - x - 2) = 1 - 1 - 2 = -2$$

> 💡 The remainder is $0$ — that's your proof the division was exact, which it had to be since $(x-1)$ was guaranteed.`,
      },
      {
        id: 'iff4-drill',
        type: 'input-boxes' as const,
        content: `**Cubes & Cubics** 🧮

Factor (cube pattern or division), cancel, then evaluate.

**1)** $\\displaystyle\\lim_{x \\to 4} \\frac{x^3 - 64}{x - 4} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to -1} \\frac{x^3 + 1}{x + 1} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to 2} \\frac{x^3 - 3x^2 + 4}{x - 2} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['48', '3', '0'],
          hint1: '$x^3-64=(x-4)(x^2+4x+16)$; at $x=4$: $16+16+16 = 48$.',
          hint2: '$x^3+1=(x+1)(x^2-x+1)$; at $x=-1$: $1-(-1)+1 = 1+1+1 = 3$.',
          hint3: 'Divide $x^3-3x^2+4$ by $(x-2)$ → quotient $x^2-x-2=(x-2)(x+1)$; at $x=2$: $4-2-2 = 0$.',
          explanation: '1) $x^2+4x+16\\big|_{4} = 48$.  2) $x^2-x+1\\big|_{-1} = 3$.  3) $x^2-x-2\\big|_{2} = 0$ (note $x=2$ is a double root).',
        },
      },
      {
        id: 'iff4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Cube Patterns** 🔽

Fill in the correct piece of each factorization.`,
        exercise: {
          dropdowns: [
            { label: '$x^3 - 8 = (x - 2)(\\,?\\,)$', options: ['$x^2 + 2x + 4$', '$x^2 - 2x + 4$', '$x^2 + 2x - 4$', '$x^2 + 4$'] },
            { label: '$x^3 + 125 = (x + 5)(\\,?\\,)$', options: ['$x^2 - 5x + 25$', '$x^2 + 5x + 25$', '$x^2 - 5x - 25$', '$x^2 + 25$'] },
            { label: 'The trinomial $x^2 + 2x + 4$ factors further over the reals:', options: ['No (discriminant $< 0$)', 'Yes, into $(x+2)^2$', 'Yes, into $(x+1)(x+4)$', 'Yes, into $(x-2)^2$'] },
          ],
          correctAnswers: ['$x^2 + 2x + 4$', '$x^2 - 5x + 25$', 'No (discriminant $< 0$)'],
          hint1: 'Difference of cubes: $a^3-b^3=(a-b)(a^2+ab+b^2)$, so middle term is $+2x$.',
          hint2: 'Sum of cubes: $a^3+b^3=(a+b)(a^2-ab+b^2)$, so middle term is $-5x$.',
          hint3: 'For $x^2+2x+4$ the discriminant is $2^2 - 4(1)(4) = 4 - 16 = -12 < 0$ — no real factors.',
          explanation: 'SOAP gives $x^3-8=(x-2)(x^2+2x+4)$ and $x^3+125=(x+5)(x^2-5x+25)$. The leftover trinomials never factor further over the reals.',
        },
      },
      {
        id: 'iff4-recap',
        type: 'text' as const,
        content: `## Part 4 Recap

| Situation | Tool |
|-----------|------|
| $a^3 \\pm b^3$ | Sum/difference of cubes (SOAP) |
| Messy cubic, $\\frac{0}{0}$ at $x=a$ | Synthetic / long division by $(x-a)$ |
| Quotient still factorable | Factor again, cancel again |

So far every fix has been *factoring*. Part 5 adds a close cousin for limits that hide a square root: **rationalizing** with the conjugate.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'indeterminate-forms-factoring',
    sections: [
      {
        id: 'iff5-intro',
        type: 'text' as const,
        content: `# 🧩 Indeterminate Forms & Factoring

**Part 5 of 7 — Rationalizing: Factoring's Cousin for Square Roots**

---

> 🔑 **Same idea, new tool:** When a $\\frac{0}{0}$ limit contains a square root, plain factoring stalls. Multiply by the **conjugate** to create a difference of squares that *cancels* the troublesome factor.`,
      },
      {
        id: 'iff5-conjugate',
        type: 'text' as const,
        content: `## The Conjugate Trick

The conjugate of $\\sqrt{x} - 3$ is $\\sqrt{x} + 3$. Multiplying them uses difference of squares to **erase the root**:

$$(\\sqrt{x} - 3)(\\sqrt{x} + 3) = (\\sqrt{x})^2 - 3^2 = x - 9$$

### Worked Example: $\\displaystyle\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$

Substitution gives $\\dfrac{3 - 3}{9 - 9} = \\dfrac{0}{0}$. Multiply top and bottom by the conjugate $\\sqrt{x} + 3$:

$$\\frac{\\sqrt{x} - 3}{x - 9} \\cdot \\frac{\\sqrt{x} + 3}{\\sqrt{x} + 3} = \\frac{x - 9}{(x - 9)(\\sqrt{x} + 3)}$$

Now $(x - 9)$ cancels:

$$= \\frac{1}{\\sqrt{x} + 3}$$

Substitute:

$$\\lim_{x \\to 9} \\frac{1}{\\sqrt{x} + 3} = \\frac{1}{\\sqrt{9} + 3} = \\frac{1}{6}$$

> ✅ The limit is $\\dfrac{1}{6}$. The conjugate turned the root into the very factor $(x - 9)$ that needed to cancel.`,
      },
      {
        id: 'iff5-conj-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check — Conjugates** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the conjugate of $\\sqrt{x + 4} - 2$?',
              options: ['$\\sqrt{x + 4} + 2$', '$-\\sqrt{x + 4} - 2$', '$\\sqrt{x - 4} + 2$', '$2 - \\sqrt{x + 4}$'],
              correctAnswer: 0,
              explanation: 'Flip the sign between the two terms: $\\sqrt{x+4} + 2$. Multiplying gives $(x+4) - 4 = x$.',
            },
            {
              question: 'Multiplying $(\\sqrt{x} - 5)$ by its conjugate $(\\sqrt{x} + 5)$ gives:',
              options: ['$x - 25$', '$x + 25$', '$\\sqrt{x} - 25$', '$x - 10\\sqrt{x} + 25$'],
              correctAnswer: 0,
              explanation: 'Difference of squares: $(\\sqrt{x})^2 - 5^2 = x - 25$. The cross terms cancel, removing the root.',
            },
          ],
        },
      },
      {
        id: 'iff5-worked2',
        type: 'text' as const,
        content: `## Worked Example: Root Where the *Factor* Is Hidden

$$\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$$

Substitution: $\\dfrac{\\sqrt{4} - 2}{0} = \\dfrac{0}{0}$. Multiply by the conjugate $\\sqrt{x+4} + 2$:

$$\\frac{\\sqrt{x+4} - 2}{x} \\cdot \\frac{\\sqrt{x+4} + 2}{\\sqrt{x+4} + 2} = \\frac{(x + 4) - 4}{x(\\sqrt{x+4} + 2)} = \\frac{x}{x(\\sqrt{x+4} + 2)}$$

Cancel the $x$:

$$= \\frac{1}{\\sqrt{x+4} + 2}$$

$$\\lim_{x \\to 0} \\frac{1}{\\sqrt{x+4} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}$$

> 💡 **Pattern:** conjugate on top → difference of squares → the linear factor in the numerator cancels the denominator's. It is "factoring," just unlocked by a multiplication first.`,
      },
      {
        id: 'iff5-steps',
        type: 'dropdown-select' as const,
        content: `**Walk the Conjugate Steps** 🔽

You're evaluating $\\displaystyle\\lim_{x \\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Multiply top & bottom by:', options: ['$\\sqrt{x} + 3$', '$\\sqrt{x} - 3$', '$x - 9$', '$x + 9$'] },
            { label: 'The new numerator becomes:', options: ['$x - 9$', '$x + 9$', '$\\sqrt{x} - 9$', '$x - 3$'] },
            { label: 'After cancelling $(x - 9)$:', options: ['$\\dfrac{1}{\\sqrt{x} + 3}$', '$\\dfrac{1}{\\sqrt{x} - 3}$', '$\\sqrt{x} + 3$', '$\\dfrac{1}{x - 9}$'] },
            { label: 'The limit equals:', options: ['$\\frac{1}{6}$', '$6$', '$\\frac{1}{3}$', '$0$'] },
          ],
          correctAnswers: ['$\\sqrt{x} + 3$', '$x - 9$', '$\\dfrac{1}{\\sqrt{x} + 3}$', '$\\frac{1}{6}$'],
          hint1: 'Use the conjugate of the root expression: flip the sign to $\\sqrt{x}+3$.',
          hint2: '$(\\sqrt{x}-3)(\\sqrt{x}+3) = x - 9$ by difference of squares.',
          hint3: 'The $(x-9)$ on top cancels the $(x-9)$ on the bottom, leaving $\\frac{1}{\\sqrt{x}+3}$; at $x=9$ that is $\\frac{1}{6}$.',
          explanation: 'Conjugate $\\sqrt{x}+3$ → numerator $x-9$ → cancel → $\\frac{1}{\\sqrt{x}+3}$ → $\\frac{1}{\\sqrt9+3} = \\frac{1}{6}$.',
        },
      },
      {
        id: 'iff5-drill',
        type: 'input-boxes' as const,
        content: `**Rationalize and Evaluate** 🧮

Multiply by the conjugate, cancel, then substitute. Fractions like $1/6$ are fine.

**1)** $\\displaystyle\\lim_{x \\to 16} \\frac{\\sqrt{x} - 4}{x - 16} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x} = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/8', '1/6'],
          hint1: 'Conjugate $\\sqrt{x}+4$ gives $\\frac{x-16}{(x-16)(\\sqrt{x}+4)} = \\frac{1}{\\sqrt{x}+4}$; at $x=16$: $\\frac{1}{4+4}$.',
          hint2: 'Conjugate $\\sqrt{x+9}+3$ gives $\\frac{x}{x(\\sqrt{x+9}+3)} = \\frac{1}{\\sqrt{x+9}+3}$; at $x=0$: $\\frac{1}{3+3}$.',
          hint3: '1) $\\frac{1}{\\sqrt{16}+4} = \\frac{1}{8}$.  2) $\\frac{1}{\\sqrt{9}+3} = \\frac{1}{6}$.',
          explanation: '1) $\\frac{1}{\\sqrt{x}+4}\\big|_{16} = \\frac{1}{8}$.  2) $\\frac{1}{\\sqrt{x+9}+3}\\big|_{0} = \\frac{1}{6}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'indeterminate-forms-factoring',
    sections: [
      {
        id: 'iff6-intro',
        type: 'text' as const,
        content: `# 🧩 Indeterminate Forms & Factoring

**Part 6 of 7 — What the Limit *Means*: Holes in the Graph**

---

> 🔑 **The Picture:** Cancelling a factor $(x - a)$ doesn't change the limit, but it does reveal that the original graph has a **removable discontinuity** — a single missing point, or *hole*, at $x = a$.`,
      },
      {
        id: 'iff6-holes',
        type: 'text' as const,
        content: `## Removable Discontinuities (Holes)

Take $f(x) = \\dfrac{x^2 - 4}{x - 2}$. We showed it simplifies to $x + 2$ for $x \\ne 2$.

- For every $x \\ne 2$, the graph is the line $y = x + 2$.
- At $x = 2$, the function is **undefined** ($\\frac{0}{0}$) — so there's a **hole** at the point $(2, 4)$.

$$\\lim_{x \\to 2} f(x) = 4, \\quad \\text{but} \\quad f(2) \\text{ does not exist.}$$

The limit gives the **$y$-value the hole would have** if you filled it in. The factor you cancelled, $(x - 2)$, is precisely what located the hole at $x = 2$.

> 💡 **Key distinction:** the *limit* can exist even where the *function* doesn't. A hole is the classic example — the limit "sees through" the missing point.`,
      },
      {
        id: 'iff6-vs',
        type: 'text' as const,
        content: `## Hole vs. Vertical Asymptote

What if a factor *doesn't* cancel? Compare the denominator's factors:

| Function | Factored | At $x = 2$ |
|----------|----------|-----------|
| $\\dfrac{x^2 - 4}{x - 2}$ | $\\dfrac{(x-2)(x+2)}{x-2}$ | $(x-2)$ **cancels** → **hole** |
| $\\dfrac{x + 2}{x - 2}$ | (already reduced) | $(x-2)$ **stays** → **vertical asymptote** |

- **Cancels → hole** (removable): the $\\frac{0}{0}$ resolves to a finite limit.
- **Survives in the denominator → asymptote** (non-removable): substitution gives $\\frac{\\text{nonzero}}{0}$, and the limit is $\\pm\\infty$ / does not exist.

> ⚠️ **Don't confuse them.** A leftover $(x - a)$ *only in the denominator* is an asymptote, not a hole. Only a factor that appears in **both** top and bottom cancels to a hole.`,
      },
      {
        id: 'iff6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check — Graph Behavior** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The graph of $f(x) = \\dfrac{x^2 - 9}{x - 3}$ has, at $x = 3$:',
              options: [
                'A hole at $(3, 6)$',
                'A vertical asymptote',
                'An $x$-intercept',
                'A continuous, defined point',
              ],
              correctAnswer: 0,
              explanation: '$f$ simplifies to $x+3$ for $x\\ne3$, and $(x-3)$ cancels — a removable discontinuity. The limit is $3+3=6$, so the hole sits at $(3, 6)$.',
            },
            {
              question: 'For which function does $x = 2$ give a vertical asymptote (not a hole)?',
              options: [
                '$\\dfrac{x + 5}{x - 2}$',
                '$\\dfrac{x^2 - 4}{x - 2}$',
                '$\\dfrac{(x-2)(x+1)}{x - 2}$',
                '$\\dfrac{x^2 - 4}{x^2 - 4}$',
              ],
              correctAnswer: 0,
              explanation: 'In $\\frac{x+5}{x-2}$, the $(x-2)$ does not cancel — substitution gives $\\frac{7}{0}$, so it is a vertical asymptote. The others all let $(x-2)$ cancel, producing holes.',
            },
          ],
        },
      },
      {
        id: 'iff6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Hole or Asymptote?** 🔽

Decide what each function has at the listed $x$-value.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x^2 - 25}{x - 5}$ at $x = 5$:', options: ['Hole', 'Vertical asymptote', 'Nothing special', 'Jump discontinuity'] },
            { label: '$\\dfrac{x + 3}{x - 4}$ at $x = 4$:', options: ['Vertical asymptote', 'Hole', 'Nothing special', 'Removable point'] },
            { label: '$\\dfrac{(x-1)(x+2)}{(x-1)(x-6)}$ at $x = 1$:', options: ['Hole', 'Vertical asymptote', 'Asymptote at $x=1$', 'Nothing special'] },
          ],
          correctAnswers: ['Hole', 'Vertical asymptote', 'Hole'],
          hint1: 'A factor that cancels from top and bottom makes a hole.',
          hint2: 'A factor left only in the denominator makes a vertical asymptote.',
          hint3: 'In the third, $(x-1)$ cancels → hole at $x=1$; the surviving $(x-6)$ would give an asymptote at $x=6$ instead.',
          explanation: '$\\frac{x^2-25}{x-5}$: $(x-5)$ cancels → hole. $\\frac{x+3}{x-4}$: $(x-4)$ stays → asymptote. Third: $(x-1)$ cancels → hole at $x=1$.',
        },
      },
      {
        id: 'iff6-find-hole',
        type: 'input-boxes' as const,
        content: `**Locate the Hole** 🧮

$f(x) = \\dfrac{x^2 - x - 6}{x - 3}$ has a hole. Find its coordinates.

**1)** The hole's $x$-coordinate $= \\,?$
**2)** The hole's $y$-coordinate (the limit there) $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '5'],
          hint1: 'The cancelled factor is $(x-3)$, so the hole is at $x = 3$.',
          hint2: 'Simplify: $\\frac{(x-3)(x+2)}{x-3} = x+2$. The limit at $x=3$ is $3+2$.',
          hint3: 'Hole $y$-value $=$ value of the simplified expression $x+2$ at $x=3$.',
          explanation: '$f$ reduces to $x+2$ for $x\\ne3$. The hole is at $(3, 5)$: $x=3$, and $\\lim_{x\\to3}(x+2) = 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'indeterminate-forms-factoring',
    sections: [
      {
        id: 'iff7-intro',
        type: 'text' as const,
        content: `# 🧩 Indeterminate Forms & Factoring

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now spot a $\\frac{0}{0}$ form, pick the right rewrite — factoring a quadratic, a cube, a higher-degree polynomial, or rationalizing a root — cancel the shared factor, and read off the limit (and the hole it leaves behind). Let's put it all together.`,
      },
      {
        id: 'iff7-strategy',
        type: 'text' as const,
        content: `## The Master Strategy

| Step | Action |
|------|--------|
| 1 | **Substitute.** Real number? Done. |
| 2 | $\\dfrac{0}{0}$? Identify the structure of top & bottom. |
| 3 | **Rewrite:** factor (squares, quadratics, cubes), divide out $(x-a)$, or multiply by a conjugate. |
| 4 | **Cancel** the shared $(x - a)$ factor. |
| 5 | **Substitute** into the simplified form. |

> ⚠️ **Three traps to avoid:**
> - Don't conclude $\\frac{0}{0}$ "$= 0$" or "$=1$" — it is indeterminate.
> - Don't forget a leftover $(x-a)$ *only* in the denominator means an **asymptote**, not a finite limit.
> - After rationalizing, simplify the numerator fully *before* cancelling.`,
      },
      {
        id: 'iff7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

For each limit, choose the *first* rewrite you'd use.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim\\limits_{x\\to3}\\frac{x^2-9}{x-3}$', options: ['Difference of squares', 'Conjugate', 'Sum of cubes', 'No rewrite needed'] },
            { label: '$\\lim\\limits_{x\\to1}\\frac{\\sqrt{x}-1}{x-1}$', options: ['Conjugate', 'Difference of squares', 'Difference of cubes', 'No rewrite needed'] },
            { label: '$\\lim\\limits_{x\\to2}\\frac{x^3-8}{x-2}$', options: ['Difference of cubes', 'Conjugate', 'Difference of squares', 'No rewrite needed'] },
            { label: '$\\lim\\limits_{x\\to0}\\frac{x^2+5}{x+4}$', options: ['No rewrite needed', 'Conjugate', 'Difference of squares', 'Sum of cubes'] },
          ],
          correctAnswers: ['Difference of squares', 'Conjugate', 'Difference of cubes', 'No rewrite needed'],
          hint1: '$x^2-9$ is a difference of squares; a $\\sqrt{\\ }$ in a $\\frac{0}{0}$ limit calls for a conjugate.',
          hint2: '$x^3-8 = x^3 - 2^3$ is a difference of cubes.',
          hint3: 'The last one: substitution gives $\\frac{5}{4}$, a real number — no $\\frac{0}{0}$, so no rewrite.',
          explanation: 'Match the structure: squares → factor; root → conjugate; cubes → cube pattern; clean substitution → just plug in ($\\frac{0+5}{0+4} = \\frac{5}{4}$).',
        },
      },
      {
        id: 'iff7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\lim_{x \\to -2} \\frac{x^2 + 5x + 6}{x + 2}$ equals:',
              options: ['$1$', '$-1$', '$5$', '$0$'],
              correctAnswer: 0,
              explanation: '$\\frac{(x+2)(x+3)}{x+2} = x+3$. At $x=-2$: $-2+3 = 1$.',
            },
            {
              question: '$\\displaystyle\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$ equals:',
              options: ['$3$', '$1$', '$0$', '$2$'],
              correctAnswer: 0,
              explanation: '$x^3-1=(x-1)(x^2+x+1)$, so the limit is $x^2+x+1$ at $x=1$: $1+1+1 = 3$.',
            },
            {
              question: '$\\displaystyle\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$ equals:',
              options: ['$4$', '$2$', '$0$', '$\\frac{1}{4}$'],
              correctAnswer: 0,
              explanation: 'Multiply by conjugate $\\sqrt{x}+2$: $\\frac{(x-4)(\\sqrt{x}+2)}{x-4} = \\sqrt{x}+2$. At $x=4$: $2+2 = 4$.',
            },
          ],
        },
      },
      {
        id: 'iff7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

One of each technique. Cancel, then substitute. Fractions fine.

**1)** $\\displaystyle\\lim_{x \\to 5} \\frac{x^2 - 4x - 5}{x - 5} = \\,?$  *(quadratic)*
**2)** $\\displaystyle\\lim_{x \\to -2} \\frac{x^3 + 8}{x + 2} = \\,?$  *(cubes)*
**3)** $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{x + 25} - 5}{x} = \\,?$  *(conjugate)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '12', '1/10'],
          hint1: '$x^2-4x-5=(x-5)(x+1)$; cancel $(x-5)$ → $x+1$, then $x=5$.',
          hint2: '$x^3+8=(x+2)(x^2-2x+4)$; at $x=-2$: $4+4+4 = 12$.',
          hint3: 'Conjugate $\\sqrt{x+25}+5$ → $\\frac{1}{\\sqrt{x+25}+5}$; at $x=0$: $\\frac{1}{5+5} = \\frac{1}{10}$.',
          explanation: '1) $x+1\\big|_{5} = 6$.  2) $x^2-2x+4\\big|_{-2} = 4+4+4 = 12$.  3) $\\frac{1}{\\sqrt{25}+5} = \\frac{1}{10}$.',
        },
      },
      {
        id: 'iff7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Direct substitution into $\\displaystyle\\lim_{x \\to 3}\\frac{x^2 - 2x - 3}{x - 3}$ gives $\\frac{0}{0}$. The actual limit is:',
              options: ['$4$', '$0$', '$\\frac{0}{0}$ (does not exist)', '$1$'],
              correctAnswer: 0,
              explanation: '$x^2-2x-3=(x-3)(x+1)$. Cancel $(x-3)$ → $x+1$. At $x=3$: $3+1 = 4$.',
            },
            {
              question: 'Which statement about $f(x)=\\dfrac{x^2-1}{x-1}$ is correct?',
              options: [
                'It has a hole at $(1, 2)$ and $\\lim_{x\\to1} f(x) = 2$',
                'It has a vertical asymptote at $x = 1$',
                'It is continuous at $x = 1$',
                'The limit at $x = 1$ does not exist',
              ],
              correctAnswer: 0,
              explanation: '$f$ simplifies to $x+1$ for $x\\ne1$; $(x-1)$ cancels → removable hole. The limit is $1+1=2$, so the hole is at $(1,2)$.',
            },
            {
              question: 'To evaluate $\\displaystyle\\lim_{x \\to 7}\\frac{\\sqrt{x+2} - 3}{x - 7}$, the best first step is to:',
              options: [
                'Multiply numerator and denominator by $\\sqrt{x+2} + 3$',
                'Factor $x - 7$ as a difference of squares',
                'Conclude the limit is $\\frac{0}{0} = 0$',
                'Use the difference of cubes pattern',
              ],
              correctAnswer: 0,
              explanation: 'A square root in a $\\frac{0}{0}$ limit calls for the conjugate $\\sqrt{x+2}+3$. It yields $\\frac{(x+2)-9}{(x-7)(\\sqrt{x+2}+3)} = \\frac{x-7}{(x-7)(\\sqrt{x+2}+3)} = \\frac{1}{\\sqrt{x+2}+3}$, giving $\\frac{1}{6}$.',
            },
          ],
        },
      },
    ],
  },
]
