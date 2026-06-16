import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Evaluating Limits Algebraically (AP Calculus AB).
 * Registry key / DB Topic.slug: 'evaluating-limits-algebraically'.
 * 7 parts, gold-standard structure: direct substitution → factoring the 0/0 form →
 * rationalizing (conjugates) → complex fractions → limits at infinity →
 * one-sided / piecewise / special trig limits → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every limit value was verified with a CAS and re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-algebraically',
    sections: [
      {
        id: 'ela1-intro',
        type: 'text' as const,
        content: `# 📉 Evaluating Limits Algebraically

**Part 1 of 7 — Direct Substitution: Always Try This First**

---

### Topics in This Part

| Section |
|---------|
| What a Limit Asks |
| The Direct Substitution Property |
| When Substitution Works (Continuous Functions) |
| Reading the Result You Get |

> 🔑 **Key Concept:** A limit $\\displaystyle\\lim_{x \\to a} f(x)$ asks: *as $x$ gets arbitrarily close to $a$, what value does $f(x)$ approach?* For most "nice" functions you can answer this by simply **plugging in $a$** — that's direct substitution, and it's always your opening move.`,
      },
      {
        id: 'ela1-substitution',
        type: 'text' as const,
        content: `## The Direct Substitution Property

If $f$ is a polynomial, rational, root, trig, exponential, or logarithmic function and $a$ is in its domain, then:

$$\\lim_{x \\to a} f(x) = f(a)$$

Such functions are **continuous** where they're defined — the graph has no break, hole, or jump at $x = a$ — so the value the function *approaches* equals the value it actually *takes*.

### Worked Examples

$$\\lim_{x \\to 2}\\, (x^2 + 3x - 1) = (2)^2 + 3(2) - 1 = 4 + 6 - 1 = 9$$

$$\\lim_{x \\to 3}\\, \\frac{2x - 1}{x + 1} = \\frac{2(3) - 1}{3 + 1} = \\frac{5}{4}$$

$$\\lim_{x \\to 1}\\, \\sqrt{3x + 1} = \\sqrt{3(1) + 1} = \\sqrt{4} = 2$$

> 💡 **Always start by substituting.** If you get a real number and no division by zero, that number *is* the limit — you're done.`,
      },
      {
        id: 'ela1-sub-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 4}\\,(x^2 - 2x)$.',
              options: ['$8$', '$4$', '$12$', '$16$'],
              correctAnswer: 0,
              explanation: 'Substitute $x = 4$: $(4)^2 - 2(4) = 16 - 8 = 8$. A polynomial is continuous everywhere, so direct substitution always works.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 0}\\,\\frac{x^2 + 5}{x - 2}$.',
              options: ['$-\\frac{5}{2}$', '$\\frac{5}{2}$', '$0$', 'undefined'],
              correctAnswer: 0,
              explanation: 'Substitute $x = 0$: $\\frac{0 + 5}{0 - 2} = \\frac{5}{-2} = -\\frac{5}{2}$. The denominator is $-2 \\ne 0$, so substitution is valid.',
            },
          ],
        },
      },
      {
        id: 'ela1-three-flavors',
        type: 'text' as const,
        content: `## One Move, Many Function Types

The power of direct substitution is that it works the same way no matter what kind of function you face — as long as $a$ is in the domain:

| Function type | Example | Substitute |
|---|---|---|
| polynomial | $x^3 + 8$ | plug in directly |
| rational | $\\dfrac{2x-1}{x+1}$ | plug in (denominator $\\ne 0$) |
| root | $\\sqrt{3x+1}$ | plug in (radicand $\\ge 0$) |

> 💡 In the drill below, all three appear back to back. Treat each the same: substitute, simplify, report.`,
      },
      {
        id: 'ela1-sub-drill',
        type: 'input-boxes' as const,
        content: `**Plug It In** 🧮

Each limit can be found by direct substitution. Enter the value.

**1)** $\\displaystyle\\lim_{x \\to -2}\\,(x^3 + 8) = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 3}\\,\\frac{2x - 1}{x + 1} = \\,?$  *(fraction is fine)*
**3)** $\\displaystyle\\lim_{x \\to 1}\\,\\sqrt{3x + 1} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '5/4', '2'],
          hint1: 'Substitute $x = -2$: $(-2)^3 + 8 = -8 + 8$.',
          hint2: 'Substitute $x = 3$: $\\frac{2(3)-1}{3+1} = \\frac{5}{4}$.',
          hint3: 'Substitute $x = 1$: $\\sqrt{3(1)+1} = \\sqrt{4}$.',
          explanation: '1) $(-2)^3 + 8 = 0$.  2) $\\frac{5}{4}$.  3) $\\sqrt{4} = 2$. All three functions are continuous at the given point, so substitution gives the limit.',
        },
      },
      {
        id: 'ela1-when-fails',
        type: 'text' as const,
        content: `## When Substitution Gives Trouble

Substitution **fails** when plugging in produces a form that isn't a real number. The two outcomes you must learn to read:

| Result of substituting $x = a$ | What it means |
|---|---|
| a real number (e.g. $9$, $\\tfrac{5}{4}$) | that's the limit — done ✅ |
| $\\dfrac{\\text{nonzero}}{0}$ (e.g. $\\tfrac{5}{0}$) | likely a **vertical asymptote**; limit is $\\pm\\infty$ or DNE |
| $\\dfrac{0}{0}$ | **indeterminate** — more work needed 🔧 |

> ⚠️ **$\\dfrac{0}{0}$ is NOT the answer.** It's a signal. It means the function has a *removable* feature (a hole) at $x = a$, and the true limit is hiding behind it. The rest of this lesson is a toolkit for finding it.

The form $\\frac{0}{0}$ is called **indeterminate** because, on its own, it doesn't tell you the limit — different functions giving $\\frac{0}{0}$ can have completely different limits.`,
      },
      {
        id: 'ela1-diagnose',
        type: 'dropdown-select' as const,
        content: `**Diagnose the Substitution** 🔽

For each limit, substitute $x = a$ and classify what you get.`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\lim_{x \\to 3}\\frac{x^2 - 9}{x - 3}$ gives:', options: ['$\\frac{0}{0}$ (indeterminate)', 'a real number', '$\\frac{6}{0}$', '$\\infty$'] },
            { label: '$\\displaystyle\\lim_{x \\to 1}\\frac{x + 4}{x - 1}$ gives:', options: ['$\\frac{5}{0}$ (asymptote)', '$\\frac{0}{0}$', 'a real number', '$0$'] },
            { label: '$\\displaystyle\\lim_{x \\to 2}\\frac{x + 1}{x + 3}$ gives:', options: ['a real number', '$\\frac{0}{0}$', '$\\frac{3}{0}$', 'undefined'] },
          ],
          correctAnswers: ['$\\frac{0}{0}$ (indeterminate)', '$\\frac{5}{0}$ (asymptote)', 'a real number'],
          hint1: 'At $x=3$: top $= 9-9 = 0$, bottom $= 3-3 = 0$.',
          hint2: 'At $x=1$: top $= 1+4 = 5$, bottom $= 1-1 = 0$ → nonzero over zero.',
          hint3: 'At $x=2$: top $= 3$, bottom $= 5$ → $\\frac{3}{5}$, a real number.',
          explanation: 'Substitute first, then read the form: $\\frac{0}{0}$ means do algebra; $\\frac{\\text{nonzero}}{0}$ means asymptote; a real number means you are done.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-algebraically',
    sections: [
      {
        id: 'ela2-intro',
        type: 'text' as const,
        content: `# 📉 Evaluating Limits Algebraically

**Part 2 of 7 — The $\\frac{0}{0}$ Form: Factor and Cancel**

---

> 🔑 **The Big Idea:** When substitution gives $\\frac{0}{0}$ in a rational function, the numerator and denominator share a common factor. **Factor**, **cancel** the shared factor, then substitute into the simplified expression.`,
      },
      {
        id: 'ela2-method',
        type: 'text' as const,
        content: `## Why Cancelling Is Legal

A limit cares only about $x$ values *near* $a$, **never** $x = a$ itself. So if two expressions agree everywhere except at the single point $x = a$, they have the **same limit** there.

When $\\frac{0}{0}$ appears, $(x - a)$ is a factor of both top and bottom. Cancelling it removes the "hole" without changing the limit.

### Worked Example: $\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$

**Step 1 — Substitute to confirm $\\frac{0}{0}$:** $\\frac{9 - 9}{3 - 3} = \\frac{0}{0}$. ✓ Indeterminate.

**Step 2 — Factor:** the numerator is a difference of squares.
$$\\frac{x^2 - 9}{x - 3} = \\frac{(x - 3)(x + 3)}{x - 3}$$

**Step 3 — Cancel** the common $(x - 3)$:
$$= x + 3 \\quad (x \\ne 3)$$

**Step 4 — Substitute** into the simplified form:
$$\\lim_{x \\to 3}\\,(x + 3) = 3 + 3 = 6$$

> 💡 The graph of $\\frac{x^2-9}{x-3}$ is the line $y = x+3$ with a **hole** at $(3, 6)$. The limit is the height of that hole.`,
      },
      {
        id: 'ela2-factor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 2}\\,\\frac{x^2 - x - 2}{x - 2}$.',
              options: ['$3$', '$0$', '$1$', 'DNE'],
              correctAnswer: 0,
              explanation: 'Substitution gives $\\frac{0}{0}$. Factor: $\\frac{(x-2)(x+1)}{x-2} = x+1$. Then $\\lim_{x \\to 2}(x+1) = 3$.',
            },
            {
              question: 'After cancelling the common factor, $\\displaystyle\\lim_{x \\to -1}\\,\\frac{x^2 + 3x + 2}{x + 1}$ simplifies to $\\lim_{x \\to -1}(x + 2)$. Its value is:',
              options: ['$1$', '$-1$', '$3$', '$0$'],
              correctAnswer: 0,
              explanation: '$x^2+3x+2 = (x+1)(x+2)$, so the expression becomes $x+2$. Substitute $x=-1$: $-1+2 = 1$.',
            },
          ],
        },
      },
      {
        id: 'ela2-spotting',
        type: 'text' as const,
        content: `## Spotting the Cancelling Factor Fast

If substituting $x = a$ gives $\\frac{0}{0}$, then $(x - a)$ **must** be a factor of the numerator. That's a free head start on factoring.

For $\\dfrac{x^2 - x - 6}{x - 3}$ at $x = 3$: the bottom tells you $(x - 3)$ divides the top, so $x^2 - x - 6 = (x - 3)(x + 2)$ — you only have to find the *other* factor.

> 🔑 **Mental shortcut:** the leftover factor's constant is whatever multiplies with $-a$'s pair to give the original constant term. Here $(x-3)(x+\\,?) $ needs $-3 \\cdot ? = -6$, so $? = 2$.`,
      },
      {
        id: 'ela2-factor-drill',
        type: 'input-boxes' as const,
        content: `**Factor, Cancel, Substitute** 🧮

Each gives $\\frac{0}{0}$. Factor, cancel, then evaluate.

**1)** $\\displaystyle\\lim_{x \\to 4}\\,\\frac{x^2 - 16}{x - 4} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 3}\\,\\frac{x^2 - x - 6}{x - 3} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to 5}\\,\\frac{x^2 - 25}{x - 5} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '5', '10'],
          hint1: '$x^2 - 16 = (x-4)(x+4)$; cancel $(x-4)$ to get $x+4$, then plug in $4$.',
          hint2: '$x^2 - x - 6 = (x-3)(x+2)$; cancel to get $x+2$, then plug in $3$.',
          hint3: '$x^2 - 25 = (x-5)(x+5)$; cancel to get $x+5$, then plug in $5$.',
          explanation: '1) $x+4 \\to 8$.  2) $x+2 \\to 5$.  3) $x+5 \\to 10$. Notice the pattern: $\\lim_{x\\to a}\\frac{x^2-a^2}{x-a} = 2a$.',
        },
      },
      {
        id: 'ela2-harder',
        type: 'text' as const,
        content: `## When Both Top and Bottom Factor

Sometimes the **denominator** factors too. Factor both, then cancel the shared $(x - a)$.

### Worked Example: $\\displaystyle\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 3x + 2}$

Substitution gives $\\frac{4-4}{4-6+2} = \\frac{0}{0}$. ✓ Factor both:

$$\\frac{(x - 2)(x + 2)}{(x - 2)(x - 1)} = \\frac{x + 2}{x - 1} \\quad (x \\ne 2)$$

Now substitute $x = 2$:

$$\\frac{2 + 2}{2 - 1} = \\frac{4}{1} = 4$$

### Worked Example: a cubic — $\\displaystyle\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$

Use the factoring $x^3 - 1 = (x - 1)(x^2 + x + 1)$:

$$\\frac{(x - 1)(x^2 + x + 1)}{x - 1} = x^2 + x + 1 \\;\\xrightarrow{x \\to 1}\\; 1 + 1 + 1 = 3$$

> 🔑 **Factoring patterns to keep handy:** difference of squares $a^2 - b^2 = (a-b)(a+b)$; difference of cubes $a^3 - b^3 = (a-b)(a^2+ab+b^2)$.`,
      },
      {
        id: 'ela2-both-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 2}\\,\\frac{x^2 - 4}{x^2 - 3x + 2}$.',
              options: ['$4$', '$1$', '$0$', 'DNE'],
              correctAnswer: 0,
              explanation: 'Factor: $\\frac{(x-2)(x+2)}{(x-2)(x-1)} = \\frac{x+2}{x-1}$. Substitute $x=2$: $\\frac{4}{1} = 4$.',
            },
            {
              question: 'Why is it valid to cancel $(x - a)$ from the top and bottom inside a limit?',
              options: [
                'A limit ignores $x = a$ itself; the two expressions agree for all $x \\ne a$, so they share the same limit',
                'Because $\\frac{x-a}{x-a} = 1$ always, even when $x = a$',
                'Because $0$ divided by $0$ equals $1$',
                'You may never cancel inside a limit',
              ],
              correctAnswer: 0,
              explanation: 'The limit only depends on values near $a$, not at $a$. Cancelling changes the function only at the single excluded point $x=a$, which the limit never sees.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-algebraically',
    sections: [
      {
        id: 'ela3-intro',
        type: 'text' as const,
        content: `# 📉 Evaluating Limits Algebraically

**Part 3 of 7 — Rationalizing with Conjugates**

---

> 🔑 **The Big Idea:** When a $\\frac{0}{0}$ limit contains a **square root**, factoring won't help. Instead, multiply the top and bottom by the **conjugate** of the radical expression. This turns $(\\sqrt{\\;} - c)(\\sqrt{\\;} + c)$ into a difference of squares, clearing the root.`,
      },
      {
        id: 'ela3-method',
        type: 'text' as const,
        content: `## The Conjugate Trick

The **conjugate** of $\\sqrt{A} - c$ is $\\sqrt{A} + c$. Multiplying them removes the radical:

$$(\\sqrt{A} - c)(\\sqrt{A} + c) = A - c^2$$

### Worked Example: $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$

**Step 1 — Substitute:** $\\frac{\\sqrt{4} - 2}{0} = \\frac{0}{0}$. ✓ Indeterminate.

**Step 2 — Multiply by the conjugate** $\\dfrac{\\sqrt{x+4} + 2}{\\sqrt{x+4} + 2}$:

$$\\frac{\\sqrt{x+4} - 2}{x} \\cdot \\frac{\\sqrt{x+4} + 2}{\\sqrt{x+4} + 2} = \\frac{(x + 4) - 4}{x\\left(\\sqrt{x+4} + 2\\right)}$$

**Step 3 — Simplify the numerator:** $(x + 4) - 4 = x$.

$$= \\frac{x}{x\\left(\\sqrt{x+4} + 2\\right)} = \\frac{1}{\\sqrt{x+4} + 2} \\quad (x \\ne 0)$$

**Step 4 — Substitute $x = 0$:**

$$\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$$

> ⚠️ **Do not expand $x(\\sqrt{x+4}+2)$ in the denominator!** Leave it factored so the $x$ that appears in the numerator cancels cleanly. Expanding it is the #1 way students get stuck here.`,
      },
      {
        id: 'ela3-conj-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To evaluate $\\displaystyle\\lim_{x \\to 0}\\frac{\\sqrt{x+1} - 1}{x}$, you multiply numerator and denominator by:',
              options: ['$\\sqrt{x+1} + 1$', '$\\sqrt{x+1} - 1$', '$x$', '$\\sqrt{x+1}$'],
              correctAnswer: 0,
              explanation: 'The conjugate of $\\sqrt{x+1} - 1$ is $\\sqrt{x+1} + 1$. Multiplying gives $(x+1) - 1 = x$ on top, which cancels the $x$ below.',
            },
            {
              question: 'After rationalizing, $\\displaystyle\\lim_{x \\to 0}\\frac{\\sqrt{x+1} - 1}{x} = \\lim_{x \\to 0}\\frac{1}{\\sqrt{x+1} + 1}$. Its value is:',
              options: ['$\\frac{1}{2}$', '$1$', '$0$', '$2$'],
              correctAnswer: 0,
              explanation: 'Substitute $x = 0$: $\\frac{1}{\\sqrt{1} + 1} = \\frac{1}{2}$.',
            },
          ],
        },
      },
      {
        id: 'ela3-root-in-denom',
        type: 'text' as const,
        content: `## When the Root Is on the Bottom

The conjugate trick works exactly the same if the radical sits in the **denominator** — and these are common because they look like derivative difference quotients.

### Quick Example: $\\displaystyle\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$

Multiply by $\\dfrac{\\sqrt{x} + 3}{\\sqrt{x} + 3}$. The numerator becomes $(\\sqrt{x})^2 - 3^2 = x - 9$, which cancels the denominator:

$$\\frac{x - 9}{(x - 9)(\\sqrt{x} + 3)} = \\frac{1}{\\sqrt{x} + 3} \\;\\xrightarrow{x \\to 9}\\; \\frac{1}{3 + 3} = \\frac{1}{6}$$

> 💡 The result is small ($\\frac{1}{6}$, $\\frac{1}{4}$, $\\frac{1}{2}$ …) because after cancelling you're left with a $1$ over a sum of two positive square-root terms.`,
      },
      {
        id: 'ela3-conj-drill',
        type: 'input-boxes' as const,
        content: `**Rationalize and Evaluate** 🧮

Multiply by the conjugate, simplify, then substitute. Enter each value as a fraction.

**1)** $\\displaystyle\\lim_{x \\to 9}\\,\\frac{\\sqrt{x} - 3}{x - 9} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 7}\\,\\frac{\\sqrt{x + 2} - 3}{x - 7} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to 1}\\,\\frac{\\sqrt{x} - 1}{x - 1} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/6', '1/6', '1/2'],
          hint1: 'Multiply by $\\frac{\\sqrt{x}+3}{\\sqrt{x}+3}$: top becomes $x - 9$, cancelling the denominator to leave $\\frac{1}{\\sqrt{x}+3}$. At $x=9$: $\\frac{1}{3+3}$.',
          hint2: 'Multiply by $\\frac{\\sqrt{x+2}+3}{\\sqrt{x+2}+3}$: top becomes $(x+2)-9 = x-7$, leaving $\\frac{1}{\\sqrt{x+2}+3}$. At $x=7$: $\\frac{1}{3+3}$.',
          hint3: 'Multiply by $\\frac{\\sqrt{x}+1}{\\sqrt{x}+1}$: top becomes $x-1$, leaving $\\frac{1}{\\sqrt{x}+1}$. At $x=1$: $\\frac{1}{1+1}$.',
          explanation: '1) $\\frac{1}{\\sqrt{9}+3} = \\frac{1}{6}$.  2) $\\frac{1}{\\sqrt{9}+3} = \\frac{1}{6}$.  3) $\\frac{1}{\\sqrt{1}+1} = \\frac{1}{2}$.',
        },
      },
      {
        id: 'ela3-which-tool',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

Substitution gave $\\frac{0}{0}$ for each. Which technique clears it?`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\lim_{x \\to 5}\\frac{x^2 - 25}{x - 5}$:', options: ['factor and cancel', 'multiply by conjugate', 'common denominator', 'divide by highest power'] },
            { label: '$\\displaystyle\\lim_{x \\to 0}\\frac{\\sqrt{x + 9} - 3}{x}$:', options: ['multiply by conjugate', 'factor and cancel', 'common denominator', 'divide by highest power'] },
            { label: '$\\displaystyle\\lim_{x \\to 4}\\frac{\\sqrt{x} - 2}{x - 4}$:', options: ['multiply by conjugate', 'factor and cancel', 'common denominator', 'divide by highest power'] },
          ],
          correctAnswers: ['factor and cancel', 'multiply by conjugate', 'multiply by conjugate'],
          hint1: 'No radicals → factor the polynomials and cancel the common $(x-a)$.',
          hint2: 'A square root in a $\\frac{0}{0}$ limit signals the conjugate method.',
          hint3: 'Whenever you see $\\sqrt{\\;}$ minus or plus a constant over a polynomial, reach for the conjugate.',
          explanation: 'Radical present → conjugate. Only polynomials → factor and cancel. Match the tool to the shape of the expression.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-algebraically',
    sections: [
      {
        id: 'ela4-intro',
        type: 'text' as const,
        content: `# 📉 Evaluating Limits Algebraically

**Part 4 of 7 — Complex Fractions**

---

> 🔑 **The Big Idea:** When a $\\frac{0}{0}$ limit has **a fraction inside a fraction**, combine the little fractions over a common denominator first. The whole expression collapses, an $(x - a)$ appears, and you can cancel as usual.`,
      },
      {
        id: 'ela4-method',
        type: 'text' as const,
        content: `## Clearing a Fraction-in-a-Fraction

### Worked Example: $\\displaystyle\\lim_{x \\to 0} \\frac{\\dfrac{1}{x + 2} - \\dfrac{1}{2}}{x}$

**Step 1 — Substitute:** $\\frac{\\frac{1}{2} - \\frac{1}{2}}{0} = \\frac{0}{0}$. ✓

**Step 2 — Combine the top** over the common denominator $2(x + 2)$:

$$\\frac{1}{x + 2} - \\frac{1}{2} = \\frac{2 - (x + 2)}{2(x + 2)} = \\frac{-x}{2(x + 2)}$$

**Step 3 — Divide by $x$** (multiply by $\\frac{1}{x}$):

$$\\frac{-x}{2(x + 2)} \\cdot \\frac{1}{x} = \\frac{-x}{2x(x + 2)} = \\frac{-1}{2(x + 2)} \\quad (x \\ne 0)$$

**Step 4 — Substitute $x = 0$:**

$$\\frac{-1}{2(0 + 2)} = \\frac{-1}{4}$$

> 💡 **The pattern:** the $x$ that shows up in the combined numerator is exactly the factor that cancels the outer division. The negative sign is easy to lose — watch the subtraction $2 - (x+2) = -x$.`,
      },
      {
        id: 'ela4-cf-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Combining the top of $\\dfrac{\\frac{1}{x} - \\frac{1}{3}}{x - 3}$ over a common denominator gives a numerator of:',
              options: ['$\\dfrac{3 - x}{3x}$', '$\\dfrac{x - 3}{3x}$', '$\\dfrac{1}{3x}$', '$\\dfrac{x + 3}{3x}$'],
              correctAnswer: 0,
              explanation: '$\\frac{1}{x} - \\frac{1}{3} = \\frac{3 - x}{3x}$. Note $3 - x = -(x - 3)$, which will cancel the $(x-3)$ below.',
            },
            {
              question: 'The negative sign in these problems most often comes from:',
              options: [
                'the subtraction when combining fractions, e.g. $2 - (x + 2) = -x$',
                'taking a square root',
                'dividing two positives',
                'the limit being taken at a negative number',
              ],
              correctAnswer: 0,
              explanation: 'Distributing the minus across a sum in the numerator flips a sign, which is why many complex-fraction limits come out negative.',
            },
          ],
        },
      },
      {
        id: 'ela4-recipe',
        type: 'text' as const,
        content: `## The Three-Step Recipe

Every complex-fraction limit follows the same path:

1. **Combine** the inner fractions over their common denominator.
2. **Flip-and-multiply** by the reciprocal of the outer denominator (dividing by $x - a$ means multiplying by $\\frac{1}{x-a}$).
3. **Cancel** the $(x - a)$ that appears, then **substitute**.

$$\\frac{\\frac{1}{x} - \\frac{1}{a}}{x - a} = \\frac{\\frac{a - x}{ax}}{x - a} = \\frac{-(x-a)}{ax(x-a)} = \\frac{-1}{ax} \\;\\xrightarrow{x \\to a}\\; -\\frac{1}{a^2}$$

> ⚠️ Keep the denominators **factored** the whole way through — never expand $ax(x-a)$ — so the cancellation is obvious.`,
      },
      {
        id: 'ela4-cf-drill',
        type: 'input-boxes' as const,
        content: `**Combine, Cancel, Substitute** 🧮

Enter each value as a fraction (include the sign).

**1)** $\\displaystyle\\lim_{x \\to 3}\\,\\frac{\\frac{1}{x} - \\frac{1}{3}}{x - 3} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 4}\\,\\frac{\\frac{1}{x} - \\frac{1}{4}}{x - 4} = \\,?$
**3)** $\\displaystyle\\lim_{h \\to 0}\\,\\frac{\\frac{1}{2 + h} - \\frac{1}{2}}{h} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1/9', '-1/16', '-1/4'],
          hint1: '$\\frac{1}{x} - \\frac{1}{3} = \\frac{3 - x}{3x} = \\frac{-(x-3)}{3x}$. Over $(x-3)$: $\\frac{-1}{3x} \\to \\frac{-1}{3(3)}$.',
          hint2: '$\\frac{1}{x} - \\frac{1}{4} = \\frac{4 - x}{4x} = \\frac{-(x-4)}{4x}$. Over $(x-4)$: $\\frac{-1}{4x} \\to \\frac{-1}{4(4)}$.',
          hint3: '$\\frac{1}{2+h} - \\frac{1}{2} = \\frac{2 - (2+h)}{2(2+h)} = \\frac{-h}{2(2+h)}$. Over $h$: $\\frac{-1}{2(2+h)} \\to \\frac{-1}{2(2)}$.',
          explanation: '1) $\\frac{-1}{3(3)} = -\\frac{1}{9}$.  2) $\\frac{-1}{4(4)} = -\\frac{1}{16}$.  3) $\\frac{-1}{2(2)} = -\\frac{1}{4}$. Each general form $\\frac{1/x - 1/a}{x-a} \\to -\\frac{1}{a^2}$.',
        },
      },
      {
        id: 'ela4-deriv-link',
        type: 'text' as const,
        content: `## Why You'll See These Everywhere

Problem **3)** above used the variable $h$ and the limit as $h \\to 0$. That's no accident — it's a **difference quotient**, the engine of the derivative:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

For $f(x) = \\frac{1}{x}$ at $a = 2$, that limit is exactly $-\\frac{1}{4}$ — which means the slope of $y = \\frac{1}{x}$ at $x = 2$ is $-\\frac{1}{4}$.

> 🔑 **Why this matters:** every complex-fraction and conjugate limit you're practicing is precisely the algebra you'll do to compute derivatives from the definition. Master it now and Chapter 2 becomes bookkeeping.`,
      },
      {
        id: 'ela4-cf-match',
        type: 'dropdown-select' as const,
        content: `**Match the Value** 🔽

Each is a complex fraction giving $\\frac{0}{0}$. Use the pattern $\\dfrac{\\frac{1}{x} - \\frac{1}{a}}{x - a} \\to -\\dfrac{1}{a^2}$ to pick the limit.`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\lim_{x \\to 5}\\frac{\\frac{1}{x} - \\frac{1}{5}}{x - 5}$ equals:', options: ['$-\\frac{1}{25}$', '$\\frac{1}{25}$', '$-\\frac{1}{5}$', '$0$'] },
            { label: '$\\displaystyle\\lim_{h \\to 0}\\frac{\\frac{1}{3 + h} - \\frac{1}{3}}{h}$ equals:', options: ['$-\\frac{1}{9}$', '$-\\frac{1}{3}$', '$\\frac{1}{9}$', '$-\\frac{1}{6}$'] },
            { label: '$\\displaystyle\\lim_{x \\to 2}\\frac{\\frac{1}{x} - \\frac{1}{2}}{x - 2}$ equals:', options: ['$-\\frac{1}{4}$', '$-\\frac{1}{2}$', '$\\frac{1}{4}$', '$0$'] },
          ],
          correctAnswers: ['$-\\frac{1}{25}$', '$-\\frac{1}{9}$', '$-\\frac{1}{4}$'],
          hint1: 'Here $a = 5$, so the limit is $-\\frac{1}{a^2} = -\\frac{1}{25}$.',
          hint2: 'This is the difference quotient of $\\frac{1}{x}$ at $a = 3$: $-\\frac{1}{3^2} = -\\frac{1}{9}$.',
          hint3: 'Here $a = 2$, so the limit is $-\\frac{1}{2^2} = -\\frac{1}{4}$.',
          explanation: 'In every case the combined numerator produces a $-(x - a)$ that cancels the outer denominator, leaving $-\\frac{1}{a^2}$: $a=5 \\to -\\frac{1}{25}$, $a=3 \\to -\\frac{1}{9}$, $a=2 \\to -\\frac{1}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-algebraically',
    sections: [
      {
        id: 'ela5-intro',
        type: 'text' as const,
        content: `# 📉 Evaluating Limits Algebraically

**Part 5 of 7 — Limits at Infinity**

---

> 🔑 **The Big Idea:** As $x \\to \\pm\\infty$, a rational function is controlled entirely by its **highest-power terms**. Compare the degree of the top to the degree of the bottom — that comparison settles the limit instantly.`,
      },
      {
        id: 'ela5-rules',
        type: 'text' as const,
        content: `## The Degree Rules for Rational Functions

For $\\displaystyle\\lim_{x \\to \\pm\\infty} \\frac{\\text{polynomial}}{\\text{polynomial}}$, compare degrees:

| Case | Limit |
|------|-------|
| degree of top **<** degree of bottom | $0$ |
| degree of top **=** degree of bottom | ratio of **leading coefficients** |
| degree of top **>** degree of bottom | $\\pm\\infty$ (no finite limit) |

### Why: divide by the highest power in the denominator

For $\\displaystyle\\lim_{x \\to \\infty} \\frac{3x^2 + 2x}{x^2 - 1}$, divide every term by $x^2$:

$$\\frac{3 + \\frac{2}{x}}{1 - \\frac{1}{x^2}}$$

As $x \\to \\infty$, every $\\frac{1}{x}$ and $\\frac{1}{x^2}$ term $\\to 0$:

$$\\frac{3 + 0}{1 - 0} = 3$$

That's the ratio of leading coefficients $\\frac{3}{1} = 3$ — matching the "equal degree" rule.

> 💡 **Shortcut:** $\\displaystyle\\lim_{x \\to \\pm\\infty}\\frac{1}{x^n} = 0$ for any $n > 0$. Equal degrees → divide leading coefficients; that's the horizontal asymptote $y = \\frac{a}{b}$.`,
      },
      {
        id: 'ela5-deg-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty}\\,\\frac{5x + 1}{2x^2 + 3}$.',
              options: ['$0$', '$\\frac{5}{2}$', '$\\infty$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Top degree $1$ < bottom degree $2$, so the bottom grows faster and the limit is $0$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty}\\,\\frac{7x^2 - 3}{2x^2 + x}$.',
              options: ['$\\frac{7}{2}$', '$0$', '$\\infty$', '$\\frac{3}{2}$'],
              correctAnswer: 0,
              explanation: 'Equal degrees ($2$ and $2$), so the limit is the ratio of leading coefficients $\\frac{7}{2}$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty}\\,\\frac{2x^3 - x}{4x^2 + 5}$.',
              options: ['$\\infty$', '$\\frac{1}{2}$', '$0$', '$\\frac{2}{4}$'],
              correctAnswer: 0,
              explanation: 'Top degree $3$ > bottom degree $2$, so the numerator outgrows the denominator and the limit is $+\\infty$ (no finite value).',
            },
          ],
        },
      },
      {
        id: 'ela5-direction',
        type: 'text' as const,
        content: `## Does the Direction Matter?

For the **equal-degree** and **lower-degree** cases, the answer is the same whether $x \\to +\\infty$ or $x \\to -\\infty$:

$$\\lim_{x \\to +\\infty}\\frac{6x^3 + 2}{3x^3 - x} = \\lim_{x \\to -\\infty}\\frac{6x^3 + 2}{3x^3 - x} = \\frac{6}{3} = 2$$

The lower-order terms vanish in both directions, so only the leading-coefficient ratio survives.

> ⚠️ The direction *can* matter for the **growing** ($\\pm\\infty$) case and for functions with even roots like $\\sqrt{x^2}=\\lvert x \\rvert$ — but for a plain rational function with equal or smaller top degree, $\\pm\\infty$ give the same finite value.`,
      },
      {
        id: 'ela5-inf-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Degree Rules** 🧮

Enter each limit as an integer or fraction (write "inf" only if asked).

**1)** $\\displaystyle\\lim_{x \\to \\infty}\\,\\frac{4x - 1}{3x + 2} = \\,?$  *(fraction)*
**2)** $\\displaystyle\\lim_{x \\to \\infty}\\,\\frac{x^2 + 1}{x^3 + x} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to -\\infty}\\,\\frac{6x^3 + 2}{3x^3 - x} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4/3', '0', '2'],
          hint1: 'Equal degree $1$: ratio of leading coefficients $\\frac{4}{3}$.',
          hint2: 'Top degree $2$ < bottom degree $3$ → limit is $0$.',
          hint3: 'Equal degree $3$: ratio $\\frac{6}{3} = 2$ (the $-\\infty$ direction does not change an equal-degree ratio).',
          explanation: '1) $\\frac{4}{3}$.  2) $0$ (bottom wins).  3) $\\frac{6}{3} = 2$. Leading coefficients alone decide equal-degree limits at infinity.',
        },
      },
      {
        id: 'ela5-asymptote',
        type: 'dropdown-select' as const,
        content: `**Horizontal Asymptotes** 🔽

The limit at infinity *is* the horizontal asymptote $y = L$. Match each function to its.`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle f(x) = \\frac{8x^2 + 3}{2x^2 - 1}$ has HA:', options: ['$y = 4$', '$y = 0$', 'none', '$y = \\frac{8}{2x^2}$'] },
            { label: '$\\displaystyle f(x) = \\frac{3x + 5}{x^2 - 2}$ has HA:', options: ['$y = 0$', '$y = 3$', 'none', '$y = \\frac{3}{1}$'] },
            { label: '$\\displaystyle f(x) = \\frac{2x^3 - x}{4x^2 + 5}$ has HA:', options: ['none', '$y = \\frac{1}{2}$', '$y = 0$', '$y = 2$'] },
          ],
          correctAnswers: ['$y = 4$', '$y = 0$', 'none'],
          hint1: 'Equal degree $2$: leading-coefficient ratio $\\frac{8}{2} = 4$.',
          hint2: 'Top degree $1$ < bottom degree $2$: limit $0$, so HA is $y = 0$.',
          hint3: 'Top degree $3$ > bottom degree $2$: the function grows without bound, so there is no horizontal asymptote.',
          explanation: 'A horizontal asymptote exists only when the limit at $\\pm\\infty$ is a finite number. Degree-top > degree-bottom means no HA.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-algebraically',
    sections: [
      {
        id: 'ela6-intro',
        type: 'text' as const,
        content: `# 📉 Evaluating Limits Algebraically

**Part 6 of 7 — One-Sided, Piecewise & Special Trig Limits**

---

> 🔑 **The Big Idea:** A two-sided limit exists **only if** the left-hand and right-hand limits agree. Piecewise functions and absolute values can make the two sides disagree. And a handful of trig limits — led by $\\frac{\\sin x}{x} \\to 1$ — must simply be memorized.`,
      },
      {
        id: 'ela6-onesided',
        type: 'text' as const,
        content: `## One-Sided Limits and the Existence Test

$$\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$$

If the two one-sided limits **disagree**, the two-sided limit **does not exist (DNE)**.

### Worked Example: $\\displaystyle\\lim_{x \\to 0} \\frac{\\lvert x \\rvert}{x}$

Recall $\\lvert x \\rvert = x$ when $x > 0$ and $\\lvert x \\rvert = -x$ when $x < 0$:

- **From the right** $(x > 0)$: $\\frac{\\lvert x \\rvert}{x} = \\frac{x}{x} = 1$, so $\\lim_{x \\to 0^+} = 1$.
- **From the left** $(x < 0)$: $\\frac{\\lvert x \\rvert}{x} = \\frac{-x}{x} = -1$, so $\\lim_{x \\to 0^-} = -1$.

The sides give $1$ and $-1$ — they disagree, so $\\displaystyle\\lim_{x \\to 0}\\frac{\\lvert x \\rvert}{x}$ **DNE**.

### Piecewise at a boundary

Let $\\displaystyle f(x) = \\begin{cases} x + 1 & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases}$. At the seam $x = 2$:

- Left: $\\lim_{x \\to 2^-}(x + 1) = 3$.
- Right: $\\lim_{x \\to 2^+}x^2 = 4$.

$3 \\ne 4$, so $\\displaystyle\\lim_{x \\to 2} f(x)$ **DNE**.

> ⚠️ Use the piece that applies on **each** side — left uses the $x < 2$ rule, right uses the $x \\ge 2$ rule.`,
      },
      {
        id: 'ela6-onesided-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} x + 1 & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases}$, what is $\\displaystyle\\lim_{x \\to 2^-} f(x)$?',
              options: ['$3$', '$4$', 'DNE', '$2$'],
              correctAnswer: 0,
              explanation: 'Approaching from the left uses the $x < 2$ piece: $\\lim_{x \\to 2^-}(x + 1) = 2 + 1 = 3$.',
            },
            {
              question: 'A two-sided limit $\\lim_{x \\to a} f(x)$ exists if and only if:',
              options: [
                'the left-hand and right-hand limits both exist and are equal',
                '$f(a)$ is defined',
                'the function is a polynomial',
                'the left-hand limit exists',
              ],
              correctAnswer: 0,
              explanation: 'Existence of the two-sided limit requires both one-sided limits to exist AND match. $f(a)$ itself is irrelevant to the limit.',
            },
          ],
        },
      },
      {
        id: 'ela6-trig',
        type: 'text' as const,
        content: `## Special Trigonometric Limits

Two limits anchor every trig limit problem (here $x$ is in **radians**):

$$\\boxed{\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1} \\qquad \\boxed{\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0}$$

Both are $\\frac{0}{0}$ by substitution, yet they have clean values. The strategy: **algebraically build the exact form $\\frac{\\sin(\\text{something})}{\\text{same something}}$**, which equals $1$ in the limit.

### Worked Example: $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$

Multiply and divide by $3$ to match the angle inside the sine:

$$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x} \\;\\xrightarrow{x \\to 0}\\; 3 \\cdot 1 = 3$$

### Worked Example: $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin 5x}{2x}$

$$\\frac{\\sin 5x}{2x} = \\frac{5}{2} \\cdot \\frac{\\sin 5x}{5x} \\;\\xrightarrow{x \\to 0}\\; \\frac{5}{2} \\cdot 1 = \\frac{5}{2}$$

> 💡 **Pattern:** $\\displaystyle\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$. And since $\\tan x = \\frac{\\sin x}{\\cos x}$, $\\displaystyle\\lim_{x \\to 0}\\frac{\\tan x}{x} = 1$ too.`,
      },
      {
        id: 'ela6-trig-drill',
        type: 'input-boxes' as const,
        content: `**Special Trig Limits** 🧮

Use $\\frac{\\sin(ax)}{bx} \\to \\frac{a}{b}$ and the boxed facts. Enter integers or fractions.

**1)** $\\displaystyle\\lim_{x \\to 0}\\,\\frac{\\sin 3x}{x} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 0}\\,\\frac{\\sin 5x}{2x} = \\,?$  *(fraction)*
**3)** $\\displaystyle\\lim_{x \\to 0}\\,\\frac{\\sin 4x}{\\sin 7x} = \\,?$  *(fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5/2', '4/7'],
          hint1: '$\\frac{\\sin 3x}{x} = 3\\cdot\\frac{\\sin 3x}{3x} \\to 3 \\cdot 1$.',
          hint2: '$\\frac{\\sin 5x}{2x} = \\frac{5}{2}\\cdot\\frac{\\sin 5x}{5x} \\to \\frac{5}{2}\\cdot 1$.',
          hint3: 'Write $\\frac{\\sin 4x}{\\sin 7x} = \\frac{\\sin 4x / 4x}{\\sin 7x / 7x}\\cdot\\frac{4x}{7x} \\to \\frac{1}{1}\\cdot\\frac{4}{7}$.',
          explanation: '1) $3$.  2) $\\frac{5}{2}$.  3) $\\frac{4}{7}$. Each reduces to the master fact $\\frac{\\sin u}{u} \\to 1$ times the leftover constant.',
        },
      },
      {
        id: 'ela6-trig-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 0}\\,\\frac{1 - \\cos x}{x}$.',
              options: ['$0$', '$1$', '$\\frac{1}{2}$', 'DNE'],
              correctAnswer: 0,
              explanation: 'This is one of the two memorized special limits: $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x} = 0$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 0}\\,\\frac{\\tan x}{x}$.',
              options: ['$1$', '$0$', '$\\infty$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: '$\\frac{\\tan x}{x} = \\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x} \\to 1 \\cdot \\frac{1}{1} = 1$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'evaluating-limits-algebraically',
    sections: [
      {
        id: 'ela7-intro',
        type: 'text' as const,
        content: `# 📉 Evaluating Limits Algebraically

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You now have a complete toolkit. The hardest part of a limit problem is **choosing the right tool** — so this part mixes every technique and finishes with an Exit Quiz.`,
      },
      {
        id: 'ela7-flowchart',
        type: 'text' as const,
        content: `## The Decision Flowchart

| Step | Action |
|------|--------|
| 1 | **Substitute.** Real number? → done. $\\frac{\\text{nonzero}}{0}$? → asymptote / DNE. |
| 2 | Got $\\frac{0}{0}$ with **polynomials**? → factor and cancel $(x - a)$. |
| 3 | Got $\\frac{0}{0}$ with a **square root**? → multiply by the conjugate. |
| 4 | Got $\\frac{0}{0}$ with a **fraction inside a fraction**? → common denominator, then cancel. |
| 5 | Limit as $x \\to \\pm\\infty$? → compare degrees / divide by the highest power. |
| 6 | **Trig** near $0$? → build $\\frac{\\sin u}{u} \\to 1$, or use $\\frac{1-\\cos x}{x} \\to 0$. |
| 7 | **Piecewise / absolute value**? → check left and right; they must match or it's DNE. |

> 🔑 **Golden rule:** $\\frac{0}{0}$ is never a final answer — it's an instruction to keep working. Always re-substitute into the *simplified* expression.`,
      },
      {
        id: 'ela7-choose',
        type: 'dropdown-select' as const,
        content: `**Choose the Tool, Then the Answer** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\lim_{x \\to 2}\\frac{x^3 - 8}{x - 2}$ equals:', options: ['$12$', '$0$', '$6$', 'DNE'] },
            { label: '$\\displaystyle\\lim_{x \\to 0}\\frac{\\sqrt{9 + x} - 3}{x}$ equals:', options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$0$', '$6$'] },
            { label: '$\\displaystyle\\lim_{x \\to \\infty}\\frac{8x^2 + 3}{2x^2 - 1}$ equals:', options: ['$4$', '$0$', '$\\infty$', '$\\frac{3}{-1}$'] },
          ],
          correctAnswers: ['$12$', '$\\frac{1}{6}$', '$4$'],
          hint1: 'Difference of cubes: $x^3 - 8 = (x-2)(x^2+2x+4)$; cancel and plug in $2$ → $4+4+4$.',
          hint2: 'Conjugate $\\sqrt{9+x}+3$: top becomes $x$, leaving $\\frac{1}{\\sqrt{9+x}+3} \\to \\frac{1}{6}$.',
          hint3: 'Equal degree $2$: ratio of leading coefficients $\\frac{8}{2} = 4$.',
          explanation: '1) factor cubes → $x^2+2x+4 = 12$.  2) conjugate → $\\frac{1}{6}$.  3) degree rule → $4$. Tool choice follows the shape of the expression.',
        },
      },
      {
        id: 'ela7-common-traps',
        type: 'text' as const,
        content: `## Three Traps to Avoid

Before the final drill, lock in the mistakes that cost the most points:

| Trap | Fix |
|------|-----|
| Reporting $\\frac{0}{0}$ as the answer | It's a signal — do algebra, then re-substitute. |
| Dropping the $-$ sign in complex fractions | $a - (x + a) = -x$; distribute the minus carefully. |
| Forgetting to expand $(3 + h)^2$ | $(3+h)^2 = 9 + 6h + h^2$, so the constant $9$ cancels and an $h$ factors out. |

> 🔑 A difference quotient like $\\dfrac{(3+h)^2 - 9}{h}$ always simplifies by expanding the square, cancelling the constant, and dividing the surviving $h$.`,
      },
      {
        id: 'ela7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

Pick the right technique and evaluate. Integers or fractions.

**1)** $\\displaystyle\\lim_{x \\to -3}\\,\\frac{x^2 + x - 6}{x + 3} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 0}\\,\\frac{\\sin 2x}{5x} = \\,?$  *(fraction)*
**3)** $\\displaystyle\\lim_{h \\to 0}\\,\\frac{(3 + h)^2 - 9}{h} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-5', '2/5', '6'],
          hint1: '$x^2 + x - 6 = (x+3)(x-2)$; cancel $(x+3)$, then plug in $-3$: $-3 - 2$.',
          hint2: '$\\frac{\\sin 2x}{5x} = \\frac{2}{5}\\cdot\\frac{\\sin 2x}{2x} \\to \\frac{2}{5}\\cdot 1$.',
          hint3: 'Expand: $(3+h)^2 - 9 = 6h + h^2$; divide by $h$ to get $6 + h \\to 6$.',
          explanation: '1) $x - 2 \\to -5$.  2) $\\frac{2}{5}$.  3) $6 + h \\to 6$ (this is the slope of $y=x^2$ at $x=3$). Three different tools, one clean answer each.',
        },
      },
      {
        id: 'ela7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 2}\\,\\frac{x^2 - 4}{x^2 - 3x + 2}$.',
              options: ['$4$', '$1$', '$0$', 'DNE'],
              correctAnswer: 0,
              explanation: 'Factor both: $\\frac{(x-2)(x+2)}{(x-2)(x-1)} = \\frac{x+2}{x-1}$. At $x = 2$: $\\frac{4}{1} = 4$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty}\\,\\frac{3x + 5}{x^2 - 2}$.',
              options: ['$0$', '$3$', '$\\infty$', '$\\frac{3}{1}$'],
              correctAnswer: 0,
              explanation: 'Top degree $1$ < bottom degree $2$, so the denominator dominates and the limit is $0$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 0}\\,\\frac{\\lvert x \\rvert}{x}$.',
              options: ['DNE', '$1$', '$-1$', '$0$'],
              correctAnswer: 0,
              explanation: 'From the right the value is $+1$; from the left it is $-1$. The one-sided limits disagree, so the two-sided limit does not exist.',
            },
          ],
        },
      },
    ],
  },
]
