import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Sum and Difference Identities (AP Precalculus).
 * Registry key: 'sum-difference-identities' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: why exact values need identities → cosine
 * formulas → sine formulas → one-sinusoid rewriting → exact-value technique → proving
 * & simplifying identities → applications + mixed practice + exit quiz.
 * Interactive practice mixes multiple-choice + input-boxes + dropdown each part.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'sum-difference-identities',
    sections: [
      {
        id: 'sdi1-intro',
        type: 'text' as const,
        content: `# 🔺 Sum and Difference Identities

**Part 1 of 7 — Why We Need Them**

---

### Topics in This Part

| Section |
|---------|
| The "Distributive" Trap |
| Special vs. Non-Special Angles |
| What the Identities Unlock |

> 🔑 **Key Concept:** Trig functions do **not** distribute over addition. $\\sin(A + B) \\ne \\sin A + \\sin B$. The sum and difference identities are the *correct* rules for splitting an angle into pieces you already know.`,
      },
      {
        id: 'sdi1-trap',
        type: 'text' as const,
        content: `## The "Distributive" Trap

A tempting but **wrong** move is to treat $\\sin$ like a multiplier:

$$\\sin(A + B) \\;\\overset{?}{=}\\; \\sin A + \\sin B \\quad \\color{red}{\\textbf{WRONG}}$$

### A Quick Counterexample

Let $A = B = \\frac{\\pi}{6}$, so $A + B = \\frac{\\pi}{3}$.

| Quantity | Exact value |
|----------|-------------|
| $\\sin(\\frac{\\pi}{6} + \\frac{\\pi}{6}) = \\sin \\frac{\\pi}{3}$ | $\\dfrac{\\sqrt{3}}{2} \\approx 0.866$ |
| $\\sin \\frac{\\pi}{6} + \\sin \\frac{\\pi}{6}$ | $\\dfrac{1}{2} + \\dfrac{1}{2} = 1$ |

The two columns disagree ($0.866 \\ne 1$), so the "distribute" rule is false.

> ⚠️ **Never** write $\\sin(A+B) = \\sin A + \\sin B$ or $\\cos(A+B) = \\cos A + \\cos B$. That is the single most common error on this whole topic.`,
      },
      {
        id: 'sdi1-trap-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Is the statement $\\cos(A+B) = \\cos A + \\cos B$ true for all angles?',
              options: [
                'No — trig functions do not distribute over addition',
                'Yes — cosine is a linear function',
                'Yes — but only when $A = B$',
                'It is true only for acute angles',
              ],
              correctAnswer: 0,
              explanation: 'Try $A = B = \\frac{\\pi}{3}$: $\\cos \\frac{2\\pi}{3} = -\\tfrac12$, but $\\cos \\frac{\\pi}{3} + \\cos \\frac{\\pi}{3} = 1$. They disagree, so the rule is false. Trig functions are not linear.',
            },
            {
              question: 'Using $A = B = \\frac{\\pi}{4}$, which equals $\\sin(\\frac{\\pi}{4} + \\frac{\\pi}{4})$?',
              options: ['$1$', '$\\sqrt{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{1}{2}$'],
              correctAnswer: 0,
              explanation: '$\\sin(\\frac{\\pi}{4}+\\frac{\\pi}{4}) = \\sin \\frac{\\pi}{2} = 1$. Note $\\sin \\frac{\\pi}{4} + \\sin \\frac{\\pi}{4} = \\tfrac{\\sqrt2}{2}+\\tfrac{\\sqrt2}{2} = \\sqrt2 \\approx 1.414$ — a different (wrong) answer.',
            },
          ],
        },
      },
      {
        id: 'sdi1-special',
        type: 'text' as const,
        content: `## Special vs. Non-Special Angles

From the unit circle you already know the **special angles** exactly:

| Angle | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ |
|-------|-----------|------------|------------|------------|------------|
| $\\sin$ | $0$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
| $\\cos$ | $1$ | $\\dfrac{\\sqrt3}{2}$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac12$ | $0$ |

But what about $\\frac{\\pi}{12}$, $\\frac{5\\pi}{12}$, or $\\frac{7\\pi}{12}$? These aren't on the unit circle — **yet**.

> 💡 **The trick:** any of these can be built by **adding or subtracting** special angles:
> - $\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}$
> - $\\frac{5\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}$
> - $\\frac{7\\pi}{12} = \\frac{\\pi}{3} + \\frac{\\pi}{4}$
>
> The sum and difference identities turn that decomposition into an **exact** answer.`,
      },
      {
        id: 'sdi1-decompose',
        type: 'dropdown-select' as const,
        content: `**Decompose the Angle** 🔽

Express each angle as a **sum or difference of two special angles** ($\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$).`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{\\pi}{12} = $', options: ['$\\frac{\\pi}{4} - \\frac{\\pi}{6}$', '$\\frac{\\pi}{4} + \\frac{\\pi}{6}$', '$\\frac{\\pi}{3} - \\frac{\\pi}{6}$', '$\\frac{\\pi}{6} - \\frac{\\pi}{4}$'] },
            { label: '$\\frac{5\\pi}{12} = $', options: ['$\\frac{\\pi}{4} + \\frac{\\pi}{6}$', '$\\frac{\\pi}{4} - \\frac{\\pi}{6}$', '$\\frac{\\pi}{2} - \\frac{\\pi}{6}$', '$\\frac{\\pi}{3} + \\frac{\\pi}{6}$'] },
            { label: '$\\frac{7\\pi}{12} = $', options: ['$\\frac{\\pi}{3} + \\frac{\\pi}{4}$', '$\\frac{\\pi}{3} - \\frac{\\pi}{4}$', '$\\frac{\\pi}{4} + \\frac{\\pi}{4}$', '$\\frac{\\pi}{2} + \\frac{\\pi}{6}$'] },
          ],
          correctAnswers: ['$\\frac{\\pi}{4} - \\frac{\\pi}{6}$', '$\\frac{\\pi}{4} + \\frac{\\pi}{6}$', '$\\frac{\\pi}{3} + \\frac{\\pi}{4}$'],
          hint1: 'You want two angles from $\\{\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}\\}$ that add or subtract to the target.',
          hint2: 'Write everything in twelfths: $\\frac{\\pi}{6} = \\frac{2\\pi}{12}$, $\\frac{\\pi}{4} = \\frac{3\\pi}{12}$, $\\frac{\\pi}{3} = \\frac{4\\pi}{12}$. Then $3 - 2 = 1$ and $3 + 2 = 5$.',
          hint3: '$4 + 3 = 7$ twelfths, so $\\frac{7\\pi}{12} = \\frac{\\pi}{3} + \\frac{\\pi}{4}$. Here we build every target from the $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$ pieces.',
          explanation: '$\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}$, $\\;\\frac{5\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}$, $\\;\\frac{7\\pi}{12} = \\frac{\\pi}{3} + \\frac{\\pi}{4}$. Each target is built from two unit-circle angles.',
        },
      },
      {
        id: 'sdi1-unlock',
        type: 'text' as const,
        content: `## What the Identities Unlock

By the end of this lesson you'll be able to:

1. Find **exact values** like $\\cos \\frac{\\pi}{12}$ and $\\sin \\frac{5\\pi}{12}$ (no calculator).
2. **Simplify** messy expressions such as $\\sin x \\cos 2x + \\cos x \\sin 2x$ into a single term.
3. **Prove** new identities and evaluate composite expressions like $\\sin(\\arcsin a + \\arccos b)$.

There are four core formulas — two each for cosine and sine. We'll build them one family at a time, starting with **cosine** in Part 2.

> 🔑 **Roadmap:** cosine first (Part 2), because the sine formulas are *derived from it*. Part 4 then uses the sine sum formula to rewrite $a\\sin x + b\\cos x$ as a single sinusoid.`,
      },
      {
        id: 'sdi1-motivation-check',
        type: 'multiple-choice' as const,
        content: `**Why It Matters** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why can we find $\\cos \\frac{\\pi}{12}$ exactly with these identities, but $\\cos 0.2$ is left to a calculator?',
              options: [
                'Only $\\frac{\\pi}{12}$ is a sum or difference of special angles',
                '$\\frac{\\pi}{12}$ is smaller than $0.2$',
                '$0.2$ is negative on the unit circle',
                'Cosine is undefined at $0.2$',
              ],
              correctAnswer: 0,
              explanation: 'The identities only help when the angle decomposes into angles whose sine and cosine we already know exactly. $0.2$ radians is not a sum or difference of unit-circle angles, so no exact radical form falls out.',
            },
            {
              question: 'Which task will the sum and difference identities NOT directly help with?',
              options: [
                'Approximating $\\sin 0.73$ to 6 decimals by hand',
                'Finding the exact value of $\\sin \\frac{5\\pi}{12}$',
                'Simplifying $\\sin x\\cos 2x + \\cos x\\sin 2x$',
                'Proving $\\sin\\!\\left(x + \\tfrac{\\pi}{2}\\right) = \\cos x$',
              ],
              correctAnswer: 0,
              explanation: '$0.73$ radians does not decompose into special angles, so the identities give no exact form. The other three are all standard uses: exact values, simplifying, and proving identities.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'sum-difference-identities',
    sections: [
      {
        id: 'sdi2-intro',
        type: 'text' as const,
        content: `# 🔺 Sum and Difference Identities

**Part 2 of 7 — The Cosine Formulas**

---

> 🔑 **The two cosine identities:**
> $$\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$$
> $$\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$$`,
      },
      {
        id: 'sdi2-pattern',
        type: 'text' as const,
        content: `## Reading the Pattern

Both cosine formulas have the **same pieces** — only the middle sign and the structure differ:

$$\\cos(A \\pm B) = \\cos A \\cos B \\;\\mp\\; \\sin A \\sin B$$

> ⚠️ **The sign FLIPS.** A **plus** inside ($A+B$) gives a **minus** in the formula; a **minus** inside ($A-B$) gives a **plus**. This "opposite sign" rule is unique to cosine.

### How to remember the terms

- Cosine formulas are **cosine–cosine, sine–sine** (the functions *match* within each product).
- "**Co**sine keeps **co**mpany": $\\cos\\cos$ comes first, then $\\sin\\sin$.

| Inside | Formula |
|--------|---------|
| $\\cos(A - B)$ | $\\cos A\\cos B \\,\\mathbf{+}\\, \\sin A\\sin B$ |
| $\\cos(A + B)$ | $\\cos A\\cos B \\,\\mathbf{-}\\, \\sin A\\sin B$ |`,
      },
      {
        id: 'sdi2-sign-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is the correct expansion of $\\cos(A + B)$?',
              options: [
                '$\\cos A \\cos B - \\sin A \\sin B$',
                '$\\cos A \\cos B + \\sin A \\sin B$',
                '$\\sin A \\cos B + \\cos A \\sin B$',
                '$\\cos A - \\cos B$',
              ],
              correctAnswer: 0,
              explanation: 'For cosine, a PLUS inside flips to a MINUS in the formula: $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$.',
            },
            {
              question: 'The product terms in a cosine sum/difference identity are:',
              options: [
                '$\\cos\\cos$ and $\\sin\\sin$',
                '$\\sin\\cos$ and $\\cos\\sin$',
                '$\\cos\\sin$ and $\\sin\\cos$',
                '$\\sin\\sin$ only',
              ],
              correctAnswer: 0,
              explanation: 'Cosine identities use matched products: cosine-cosine plus/minus sine-sine. (Mixed products $\\sin\\cos$ belong to the SINE identities — coming in Part 3.)',
            },
          ],
        },
      },
      {
        id: 'sdi2-derivation',
        type: 'text' as const,
        content: `## Where It Comes From (the difference formula)

You don't need to memorize the proof, but seeing it builds trust. Place points $P = (\\cos A, \\sin A)$ and $Q = (\\cos B, \\sin B)$ on the unit circle. The distance $PQ$ can be computed two ways:

**By the distance formula:**
$$PQ^2 = (\\cos A - \\cos B)^2 + (\\sin A - \\sin B)^2 = 2 - 2(\\cos A\\cos B + \\sin A\\sin B)$$

**By rotating the picture:** rotate both points clockwise by angle $B$. Rotation does not change distances, $Q$ lands on $(1, 0)$, and $P$ lands on $(\\cos(A - B), \\sin(A - B))$. So
$$PQ^2 = (\\cos(A - B) - 1)^2 + \\sin^2(A - B) = 2 - 2\\cos(A - B)$$

Setting the two equal and cancelling:

$$\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$$

> 💡 Replace $B$ with $-B$ (and use $\\cos(-B)=\\cos B$, $\\sin(-B)=-\\sin B$) to get the $\\cos(A+B)$ version.`,
      },
      {
        id: 'sdi2-substitute-drill',
        type: 'input-boxes' as const,
        content: `**Substitute the Values** 🧮

You're expanding $\\cos \\frac{5\\pi}{12} = \\cos(\\frac{\\pi}{4} + \\frac{\\pi}{6}) = \\cos \\frac{\\pi}{4}\\cos \\frac{\\pi}{6} - \\sin \\frac{\\pi}{4}\\sin \\frac{\\pi}{6}$. Enter each special value **as a decimal rounded to 3 places**.

**1)** $\\cos \\frac{\\pi}{6} = \\,?$
**2)** $\\sin \\frac{\\pi}{6} = \\,?$
**3)** $\\cos \\frac{5\\pi}{12}$ overall $= \\,?$  *(3 decimals)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.866', '0.5', '0.259'],
          hint1: '$\\cos \\frac{\\pi}{6} = \\frac{\\sqrt3}{2} \\approx 0.866$ and $\\sin \\frac{\\pi}{6} = \\frac12 = 0.5$.',
          hint2: '$\\cos \\frac{\\pi}{4} = \\sin \\frac{\\pi}{4} = \\frac{\\sqrt2}{2} \\approx 0.707$.',
          hint3: '$\\cos \\frac{5\\pi}{12} = (0.707)(0.866) - (0.707)(0.5) \\approx 0.612 - 0.354 = 0.259$.',
          explanation: '$\\cos \\frac{\\pi}{6} \\approx 0.866$, $\\sin \\frac{\\pi}{6} = 0.5$, and $\\cos \\frac{5\\pi}{12} = \\frac{\\sqrt6 - \\sqrt2}{4} \\approx 0.259$. (Plus inside → minus in the formula → the smaller value.)',
        },
      },
      {
        id: 'sdi2-first-value',
        type: 'text' as const,
        content: `## First Exact Value: $\\cos \\frac{\\pi}{12}$

Write $\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}$ and use the **difference** formula:

$$\\cos \\frac{\\pi}{12} = \\cos(\\frac{\\pi}{4} - \\frac{\\pi}{6}) = \\cos \\frac{\\pi}{4}\\cos \\frac{\\pi}{6} + \\sin \\frac{\\pi}{4}\\sin \\frac{\\pi}{6}$$

Substitute special values:

$$= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} + \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt6}{4} + \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 + \\sqrt2}{4}$$

> ✅ **Check:** $\\dfrac{\\sqrt6 + \\sqrt2}{4} \\approx \\dfrac{2.449 + 1.414}{4} \\approx 0.966$, and a calculator gives $\\cos \\frac{\\pi}{12} \\approx 0.966$. ✓`,
      },
      {
        id: 'sdi2-expand-drill',
        type: 'dropdown-select' as const,
        content: `**Expand Each Cosine** 🔽

Match each expression to its correct expansion.`,
        exercise: {
          dropdowns: [
            { label: '$\\cos(x - y) = $', options: ['$\\cos x\\cos y + \\sin x\\sin y$', '$\\cos x\\cos y - \\sin x\\sin y$', '$\\sin x\\cos y + \\cos x\\sin y$', '$\\cos x - \\cos y$'] },
            { label: '$\\cos(2\\theta + \\theta) = $', options: ['$\\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta$', '$\\cos 2\\theta\\cos\\theta + \\sin 2\\theta\\sin\\theta$', '$\\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta$', '$\\cos 2\\theta + \\cos\\theta$'] },
          ],
          correctAnswers: ['$\\cos x\\cos y + \\sin x\\sin y$', '$\\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta$'],
          hint1: 'Cosine uses matched products ($\\cos\\cos$, $\\sin\\sin$) with a flipped sign.',
          hint2: 'A MINUS inside ($x - y$) becomes a PLUS in the formula.',
          hint3: 'A PLUS inside ($2\\theta + \\theta$) becomes a MINUS in the formula.',
          explanation: '$\\cos(x-y) = \\cos x\\cos y + \\sin x\\sin y$ (minus inside → plus). $\\cos(2\\theta+\\theta) = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta$ (plus inside → minus).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'sum-difference-identities',
    sections: [
      {
        id: 'sdi3-intro',
        type: 'text' as const,
        content: `# 🔺 Sum and Difference Identities

**Part 3 of 7 — The Sine Formulas**

---

> 🔑 **The two sine identities:**
> $$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$$
> $$\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$$`,
      },
      {
        id: 'sdi3-pattern',
        type: 'text' as const,
        content: `## Reading the Pattern

The sine formulas use **mixed products** ($\\sin\\cos$ and $\\cos\\sin$), and the sign **matches** the inside:

$$\\sin(A \\pm B) = \\sin A\\cos B \\;\\pm\\; \\cos A\\sin B$$

> ⚠️ **Sine keeps its sign** — a plus inside gives a plus, a minus inside gives a minus. This is the *opposite* behavior from cosine (which flips). Don't mix them up!

### Memory hook

Sine is the "**mixed**, **same-sign**" formula:
- **Mixed** functions in each product: $\\sin\\cos + \\cos\\sin$.
- **Same** sign as inside the parentheses.

| Family | Products | Sign behavior |
|--------|----------|---------------|
| Cosine | matched ($\\cos\\cos$, $\\sin\\sin$) | **flips** |
| Sine | mixed ($\\sin\\cos$, $\\cos\\sin$) | **keeps** |`,
      },
      {
        id: 'sdi3-pattern-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is the correct expansion of $\\sin(A - B)$?',
              options: [
                '$\\sin A\\cos B - \\cos A\\sin B$',
                '$\\sin A\\cos B + \\cos A\\sin B$',
                '$\\cos A\\cos B - \\sin A\\sin B$',
                '$\\sin A - \\sin B$',
              ],
              correctAnswer: 0,
              explanation: 'Sine keeps its sign: a MINUS inside gives a MINUS. The products are mixed: $\\sin A\\cos B - \\cos A\\sin B$.',
            },
            {
              question: 'Compared with cosine, the sine sum/difference identities differ because they:',
              options: [
                'Use mixed products and keep the inside sign',
                'Use matched products and flip the sign',
                'Have no sign at all',
                'Are identical to the cosine formulas',
              ],
              correctAnswer: 0,
              explanation: 'Sine uses MIXED products ($\\sin\\cos$, $\\cos\\sin$) and KEEPS the sign; cosine uses MATCHED products and FLIPS the sign.',
            },
          ],
        },
      },
      {
        id: 'sdi3-worked-sin75',
        type: 'text' as const,
        content: `## Worked Example: $\\sin \\frac{5\\pi}{12}$

Write $\\frac{5\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}$ and use the **sum** formula:

$$\\sin \\frac{5\\pi}{12} = \\sin \\frac{\\pi}{4}\\cos \\frac{\\pi}{6} + \\cos \\frac{\\pi}{4}\\sin \\frac{\\pi}{6}$$

$$= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} + \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt6}{4} + \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 + \\sqrt2}{4}$$

> 💡 **Cofunction sanity check:** $\\sin \\frac{5\\pi}{12} = \\cos \\frac{\\pi}{12}$ because $\\frac{5\\pi}{12}$ and $\\frac{\\pi}{12}$ are complementary. We got the same value $\\frac{\\sqrt6+\\sqrt2}{4}$ in Part 2 — consistent! ✓`,
      },
      {
        id: 'sdi3-expand-dropdown',
        type: 'dropdown-select' as const,
        content: `**Expand Each Sine** 🔽

Match each sine expression to its expansion.`,
        exercise: {
          dropdowns: [
            { label: '$\\sin(x + y) = $', options: ['$\\sin x\\cos y + \\cos x\\sin y$', '$\\sin x\\cos y - \\cos x\\sin y$', '$\\cos x\\cos y - \\sin x\\sin y$', '$\\sin x + \\sin y$'] },
            { label: '$\\sin(4\\theta - \\theta) = $', options: ['$\\sin 4\\theta\\cos\\theta - \\cos 4\\theta\\sin\\theta$', '$\\sin 4\\theta\\cos\\theta + \\cos 4\\theta\\sin\\theta$', '$\\cos 4\\theta\\cos\\theta + \\sin 4\\theta\\sin\\theta$', '$\\sin 4\\theta - \\sin\\theta$'] },
          ],
          correctAnswers: ['$\\sin x\\cos y + \\cos x\\sin y$', '$\\sin 4\\theta\\cos\\theta - \\cos 4\\theta\\sin\\theta$'],
          hint1: 'Sine uses MIXED products ($\\sin\\cos$, $\\cos\\sin$) and KEEPS the inside sign.',
          hint2: 'A PLUS inside ($x + y$) stays a PLUS in the formula.',
          hint3: 'A MINUS inside ($4\\theta - \\theta$) stays a MINUS in the formula.',
          explanation: '$\\sin(x+y) = \\sin x\\cos y + \\cos x\\sin y$ (plus stays plus). $\\sin(4\\theta-\\theta) = \\sin 4\\theta\\cos\\theta - \\cos 4\\theta\\sin\\theta$ (minus stays minus).',
        },
      },
      {
        id: 'sdi3-worked-sin15',
        type: 'text' as const,
        content: `## Worked Example: $\\sin \\frac{\\pi}{12}$

Write $\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}$ and use the **difference** formula:

$$\\sin \\frac{\\pi}{12} = \\sin \\frac{\\pi}{4}\\cos \\frac{\\pi}{6} - \\cos \\frac{\\pi}{4}\\sin \\frac{\\pi}{6}$$

$$= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} - \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt6}{4} - \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 - \\sqrt2}{4}$$

> ✅ **Check:** $\\dfrac{\\sqrt6 - \\sqrt2}{4} \\approx \\dfrac{2.449 - 1.414}{4} \\approx 0.259$, and $\\sin \\frac{\\pi}{12} \\approx 0.259$. ✓`,
      },
      {
        id: 'sdi3-fill-drill',
        type: 'input-boxes' as const,
        content: `**Fill the Numerator** 🧮

Each exact value has the form $\\dfrac{\\sqrt6 \\;\\square\\; \\sqrt2}{4}$. Enter **+** or **-** for the box (type a plus or minus sign).

**1)** $\\sin \\frac{5\\pi}{12} = \\dfrac{\\sqrt6 \\;?\\; \\sqrt2}{4}$
**2)** $\\sin \\frac{\\pi}{12} = \\dfrac{\\sqrt6 \\;?\\; \\sqrt2}{4}$
**3)** $\\cos \\frac{\\pi}{12} = \\dfrac{\\sqrt6 \\;?\\; \\sqrt2}{4}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['+', '-', '+'],
          hint1: 'Expand each with the right identity, then keep the sign that survives.',
          hint2: '$\\sin \\frac{5\\pi}{12} = \\sin(\\frac{\\pi}{4}+\\frac{\\pi}{6})$ uses the sum formula → both terms add → "+".',
          hint3: '$\\sin \\frac{\\pi}{12} = \\sin(\\frac{\\pi}{4}-\\frac{\\pi}{6})$ subtracts → "-". $\\cos \\frac{\\pi}{12} = \\cos(\\frac{\\pi}{4}-\\frac{\\pi}{6})$ → cosine flips the minus to a "+".',
          explanation: '$\\sin \\frac{5\\pi}{12} = \\frac{\\sqrt6+\\sqrt2}{4}$ (+). $\\sin \\frac{\\pi}{12} = \\frac{\\sqrt6-\\sqrt2}{4}$ (-). $\\cos \\frac{\\pi}{12} = \\frac{\\sqrt6+\\sqrt2}{4}$ (+, because cosine of a difference adds).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'sum-difference-identities',
    sections: [
      {
        id: 'sdi4-intro',
        type: 'text' as const,
        content: `# 🔺 Sum and Difference Identities

**Part 4 of 7 — Combining Sine and Cosine Into One Sinusoid**

---

> 🔑 **Key Concept:** Read the sine **sum** identity backwards and an expression like $a\\sin x + b\\cos x$ becomes a **single sinusoid** $R\\sin(x + C)$. That equivalent form shows the amplitude and phase shift at a glance and turns hard equations into easy ones.

Tangent sum and difference identities are not assessed on the AP Precalculus exam, so this lesson uses only the sine and cosine identities.`,
      },
      {
        id: 'sdi4-expand',
        type: 'text' as const,
        content: `## Forward First: Expand a Shifted Sine

Expand $2\\sin\\!\\left(x + \\dfrac{\\pi}{6}\\right)$ with the sine sum identity:

$$2\\sin\\!\\left(x + \\frac{\\pi}{6}\\right) = 2\\left(\\sin x\\cos\\frac{\\pi}{6} + \\cos x\\sin\\frac{\\pi}{6}\\right) = 2\\left(\\frac{\\sqrt3}{2}\\sin x + \\frac{1}{2}\\cos x\\right) = \\sqrt3\\sin x + \\cos x$$

So $\\sqrt3\\sin x + \\cos x$ is really a sine wave with **amplitude $2$**, shifted **left $\\frac{\\pi}{6}$**.

## Backward: Match the Coefficients

In general,

$$R\\sin(x + C) = (R\\cos C)\\sin x + (R\\sin C)\\cos x$$

To write $a\\sin x + b\\cos x$ in this form, match $a = R\\cos C$ and $b = R\\sin C$:

| Unknown | How to find it | Why |
|---------|----------------|-----|
| $R$ | $R = \\sqrt{a^2 + b^2}$ | $a^2 + b^2 = R^2(\\cos^2 C + \\sin^2 C) = R^2$ |
| $C$ | $\\cos C = \\dfrac{a}{R}$ and $\\sin C = \\dfrac{b}{R}$ | use **both** signs to pick the quadrant of $C$ |`,
      },
      {
        id: 'sdi4-expand-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expanding $2\\sin\\!\\left(x + \\dfrac{\\pi}{3}\\right)$ gives:',
              options: ['$\\sin x + \\sqrt3\\cos x$', '$\\sqrt3\\sin x + \\cos x$', '$2\\sin x + \\sqrt3\\cos x$', '$\\sin x - \\sqrt3\\cos x$'],
              correctAnswer: 0,
              explanation: '$2\\left(\\sin x\\cos\\frac{\\pi}{3} + \\cos x\\sin\\frac{\\pi}{3}\\right) = 2\\left(\\frac12\\sin x + \\frac{\\sqrt3}{2}\\cos x\\right) = \\sin x + \\sqrt3\\cos x$.',
            },
            {
              question: 'When $\\sin x + \\cos x$ is written as $R\\sin(x + C)$, what is $R$?',
              options: ['$2$', '$\\sqrt2$', '$1$', '$\\tfrac{\\sqrt2}{2}$'],
              correctAnswer: 1,
              explanation: 'Here $a = 1$ and $b = 1$, so $R = \\sqrt{1^2 + 1^2} = \\sqrt2$. The amplitude of $\\sin x + \\cos x$ is $\\sqrt2$, not $2$.',
            },
          ],
        },
      },
      {
        id: 'sdi4-worked',
        type: 'text' as const,
        content: `## Worked Example: Rewrite, Then Solve

**Solve** $\\sin x + \\sqrt3\\cos x = 1$ on $[0, 2\\pi)$.

**Step 1 — Rewrite.** $a = 1$, $b = \\sqrt3$, so $R = \\sqrt{1 + 3} = 2$. Then $\\cos C = \\frac12$ and $\\sin C = \\frac{\\sqrt3}{2}$, so $C = \\frac{\\pi}{3}$:

$$\\sin x + \\sqrt3\\cos x = 2\\sin\\!\\left(x + \\frac{\\pi}{3}\\right)$$

**Step 2 — Solve the simpler equation.** $2\\sin\\!\\left(x + \\frac{\\pi}{3}\\right) = 1$ means $\\sin u = \\frac12$ with $u = x + \\frac{\\pi}{3}$. Since $0 \\le x < 2\\pi$, the new angle runs over $\\frac{\\pi}{3} \\le u < \\frac{7\\pi}{3}$. In that window, $\\sin u = \\frac12$ at $u = \\frac{5\\pi}{6}$ and $u = \\frac{13\\pi}{6}$.

**Step 3 — Undo the shift.** $x = u - \\frac{\\pi}{3}$:

$$x = \\frac{5\\pi}{6} - \\frac{\\pi}{3} = \\frac{\\pi}{2} \\qquad x = \\frac{13\\pi}{6} - \\frac{\\pi}{3} = \\frac{11\\pi}{6}$$

> ✅ **Check:** at $x = \\frac{\\pi}{2}$, $1 + \\sqrt3\\cdot 0 = 1$ ✓. At $x = \\frac{11\\pi}{6}$, $-\\frac12 + \\sqrt3\\cdot\\frac{\\sqrt3}{2} = -\\frac12 + \\frac32 = 1$ ✓.

> ⚠️ Shift the **interval** along with the angle. Solving $\\sin u = \\frac12$ on $[0, 2\\pi)$ instead would give $u = \\frac{\\pi}{6}$, which leads to $x = -\\frac{\\pi}{6}$, outside the interval.`,
      },
      {
        id: 'sdi4-features-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Features** 🔽

Use $y = \\sin x + \\sqrt3\\cos x = 2\\sin\\!\\left(x + \\dfrac{\\pi}{3}\\right)$.`,
        exercise: {
          dropdowns: [
            { label: 'Amplitude:', options: ['$2$', '$1 + \\sqrt3$', '$\\sqrt3$', '$2\\sqrt3$'], correctAnswer: 0 },
            { label: 'Period:', options: ['$2\\pi$', '$\\pi$', '$\\tfrac{2\\pi}{3}$', '$4\\pi$'], correctAnswer: 0 },
            { label: 'First maximum for $x \\ge 0$ occurs at $x =$', options: ['$\\tfrac{\\pi}{6}$', '$\\tfrac{\\pi}{2}$', '$\\tfrac{\\pi}{3}$', '$0$'], correctAnswer: 0 },
          ],
          correctAnswers: ['$2$', '$2\\pi$', '$\\tfrac{\\pi}{6}$'],
          hint1: 'The amplitude is $R = \\sqrt{a^2 + b^2}$, not $a + b$.',
          hint2: 'The coefficient of $x$ inside the sine is $1$, so the period matches $\\sin x$.',
          hint3: 'The maximum happens when $x + \\frac{\\pi}{3} = \\frac{\\pi}{2}$.',
          explanation: 'Amplitude $2$, period $2\\pi$, and the first maximum is at $x = \\frac{\\pi}{2} - \\frac{\\pi}{3} = \\frac{\\pi}{6}$, where $y = \\frac12 + \\sqrt3\\cdot\\frac{\\sqrt3}{2} = 2$.',
        },
      },
      {
        id: 'sdi4-signs',
        type: 'text' as const,
        content: `## When a Coefficient Is Negative

Rewrite $\\sin x - \\cos x$. Here $a = 1$, $b = -1$, so $R = \\sqrt2$, $\\cos C = \\frac{1}{\\sqrt2}$, and $\\sin C = -\\frac{1}{\\sqrt2}$. Cosine positive and sine negative puts $C$ in Quadrant IV: $C = -\\frac{\\pi}{4}$.

$$\\sin x - \\cos x = \\sqrt2\\sin\\!\\left(x - \\frac{\\pi}{4}\\right)$$

**Verify by expanding:** $\\sqrt2\\left(\\sin x\\cos\\frac{\\pi}{4} - \\cos x\\sin\\frac{\\pi}{4}\\right) = \\sqrt2\\left(\\frac{\\sqrt2}{2}\\sin x - \\frac{\\sqrt2}{2}\\cos x\\right) = \\sin x - \\cos x$ ✓

> 💡 Always confirm a rewrite by expanding it with the sum or difference identity. It takes one line and catches sign errors in $C$.`,
      },
      {
        id: 'sdi4-drill',
        type: 'input-boxes' as const,
        content: `**Rewrite and Solve** 🧮

Write $\\sqrt3\\sin x - \\cos x$ as $R\\sin(x + C)$.

**1)** $R = \\,?$
**2)** The maximum value of $y = \\sqrt3\\sin x - \\cos x$ is $\\,?$
**3)** Solve $\\sqrt3\\sin x - \\cos x = 2$ on $[0, 2\\pi)$. Enter $x$ as a multiple of pi, like \`3pi/4\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '2pi/3'],
          hint1: '$R = \\sqrt{(\\sqrt3)^2 + (-1)^2} = \\sqrt{4}$.',
          hint2: '$\\cos C = \\frac{\\sqrt3}{2}$ and $\\sin C = -\\frac12$, so $C = -\\frac{\\pi}{6}$ and $y = 2\\sin\\left(x - \\frac{\\pi}{6}\\right)$, whose largest value is $R$.',
          hint3: '$2\\sin\\left(x - \\frac{\\pi}{6}\\right) = 2$ means $x - \\frac{\\pi}{6} = \\frac{\\pi}{2}$.',
          explanation: '1) $R = 2$.  2) The maximum is $2$.  3) $x = \\frac{\\pi}{2} + \\frac{\\pi}{6} = \\frac{2\\pi}{3}$. Check: $\\sqrt3\\cdot\\frac{\\sqrt3}{2} - \\left(-\\frac12\\right) = \\frac32 + \\frac12 = 2$ ✓',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'sum-difference-identities',
    sections: [
      {
        id: 'sdi5-intro',
        type: 'text' as const,
        content: `# 🔺 Sum and Difference Identities

**Part 5 of 7 — Exact Values: A Repeatable Method**

---

> 🔑 **The 4-step recipe** for any "find the exact value" problem:
> 1. **Decompose** the angle into two special angles (sum or difference).
> 2. **Pick** the right family (sin or cos) and write the formula.
> 3. **Substitute** unit-circle values.
> 4. **Simplify**, then check the sign against the quadrant.`,
      },
      {
        id: 'sdi5-cos105',
        type: 'text' as const,
        content: `## Worked Example: $\\cos \\frac{7\\pi}{12}$

**Step 1 — Decompose:** $\\frac{7\\pi}{12} = \\frac{\\pi}{3} + \\frac{\\pi}{4}$.

**Step 2 — Formula:** cosine of a **sum** flips the sign:
$$\\cos \\frac{7\\pi}{12} = \\cos \\frac{\\pi}{3}\\cos \\frac{\\pi}{4} - \\sin \\frac{\\pi}{3}\\sin \\frac{\\pi}{4}$$

**Step 3 — Substitute:**
$$= \\frac{1}{2}\\cdot\\frac{\\sqrt2}{2} - \\frac{\\sqrt3}{2}\\cdot\\frac{\\sqrt2}{2} = \\frac{\\sqrt2}{4} - \\frac{\\sqrt6}{4}$$

**Step 4 — Simplify:**
$$\\cos \\frac{7\\pi}{12} = \\frac{\\sqrt2 - \\sqrt6}{4}$$

> ✅ **Check:** $\\dfrac{\\sqrt2 - \\sqrt6}{4} \\approx \\dfrac{1.414 - 2.449}{4} \\approx -0.259$. Since $\\frac{7\\pi}{12}$ is in Quadrant II, cosine is **negative** — consistent. ✓`,
      },
      {
        id: 'sdi5-exact-mc',
        type: 'multiple-choice' as const,
        content: `**Apply the Method** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which decomposition is best for finding $\\cos \\frac{5\\pi}{12}$ exactly?',
              options: [
                '$\\cos(\\frac{\\pi}{4} + \\frac{\\pi}{6})$',
                '$\\cos(\\frac{7\\pi}{18} + \\frac{\\pi}{36})$',
                '$\\cos(\\frac{2\\pi}{5} + \\frac{\\pi}{60})$',
                '$\\cos(\\frac{4\\pi}{9} - \\frac{\\pi}{36})$',
              ],
              correctAnswer: 0,
              explanation: 'Only $\\frac{\\pi}{4}$ and $\\frac{\\pi}{6}$ are special angles with known exact values. Angles such as $\\frac{\\pi}{36}$, $\\frac{\\pi}{60}$, and $\\frac{2\\pi}{5}$ are not special angles, so the unit circle does not supply their sines and cosines.',
            },
            {
              question: 'After expanding, $\\cos \\frac{5\\pi}{12} = \\cos \\frac{\\pi}{4}\\cos \\frac{\\pi}{6} - \\sin \\frac{\\pi}{4}\\sin \\frac{\\pi}{6}$ equals:',
              options: [
                '$\\dfrac{\\sqrt6 - \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt6 + \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt2 - \\sqrt6}{4}$',
                '$\\dfrac{\\sqrt3 - 1}{2}$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} - \\frac{\\sqrt2}{2}\\cdot\\frac12 = \\frac{\\sqrt6}{4} - \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 - \\sqrt2}{4} \\approx 0.259$, which matches $\\cos \\frac{5\\pi}{12}$.',
            },
          ],
        },
      },
      {
        id: 'sdi5-sin105',
        type: 'text' as const,
        content: `## Worked Example: $\\sin \\frac{7\\pi}{12}$

**Decompose:** $\\frac{7\\pi}{12} = \\frac{\\pi}{3} + \\frac{\\pi}{4}$. Use the sine **sum** formula (sine keeps its sign):

$$\\sin \\frac{7\\pi}{12} = \\sin \\frac{\\pi}{3}\\cos \\frac{\\pi}{4} + \\cos \\frac{\\pi}{3}\\sin \\frac{\\pi}{4}$$

$$= \\frac{\\sqrt3}{2}\\cdot\\frac{\\sqrt2}{2} + \\frac{1}{2}\\cdot\\frac{\\sqrt2}{2} = \\frac{\\sqrt6}{4} + \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 + \\sqrt2}{4}$$

> 💡 **Notice:** $\\sin \\frac{7\\pi}{12} = \\frac{\\sqrt6+\\sqrt2}{4} = \\sin \\frac{5\\pi}{12}$. That's because $\\sin(\\pi - \\theta) = \\sin\\theta$, and $\\frac{7\\pi}{12} = \\pi - \\frac{5\\pi}{12}$. A nice built-in check.`,
      },
      {
        id: 'sdi5-exact-drill',
        type: 'input-boxes' as const,
        content: `**Decimal Check** 🧮

Compute each exact value, then enter its **decimal** rounded to **3 decimal places**. (Use a calculator to confirm after you set up the exact form.)

**1)** $\\cos \\frac{7\\pi}{12} = \\dfrac{\\sqrt2 - \\sqrt6}{4} = \\,?$
**2)** $\\sin \\frac{\\pi}{12} = \\dfrac{\\sqrt6 - \\sqrt2}{4} = \\,?$
**3)** $\\cos \\frac{\\pi}{12} = \\dfrac{\\sqrt6 + \\sqrt2}{4} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-0.259', '0.259', '0.966'],
          hint1: '$\\sqrt2 \\approx 1.414$, $\\sqrt3 \\approx 1.732$, $\\sqrt6 \\approx 2.449$.',
          hint2: '$\\cos \\frac{7\\pi}{12} = \\frac{1.414 - 2.449}{4} = \\frac{-1.035}{4}$. Quadrant II → negative.',
          hint3: '$\\sin \\frac{\\pi}{12} = \\frac{2.449 - 1.414}{4} = \\frac{1.035}{4} \\approx 0.259$. $\\;\\cos \\frac{\\pi}{12} = \\frac{2.449 + 1.414}{4} = \\frac{3.863}{4}$.',
          explanation: '1) $\\frac{1.414-2.449}{4} \\approx -0.259$.  2) $\\frac{2.449-1.414}{4} \\approx 0.259$.  3) $\\frac{2.449+1.414}{4} \\approx 0.966$.',
        },
      },
      {
        id: 'sdi5-quadrant-note',
        type: 'text' as const,
        content: `## Don't Forget the Quadrant

Angles like $\\frac{7\\pi}{12}$, $\\frac{11\\pi}{12}$, and $\\frac{13\\pi}{12}$ live **outside** Quadrant I, so the sign of your answer matters. After you decompose and expand, sanity-check the sign against the quadrant.

| Angle | Quadrant | $\\sin$ | $\\cos$ |
|-------|----------|--------|--------|
| $\\frac{7\\pi}{12}$ | II | $+$ | $-$ |
| $\\frac{13\\pi}{12}$ | III | $-$ | $-$ |
| $\\frac{19\\pi}{12}$ | IV | $-$ | $+$ |

> ⚠️ A correct expansion with a sign that **contradicts** the quadrant means an arithmetic slip — go back and check.`,
      },
      {
        id: 'sdi5-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Right Expansion** 🔽

You want the **exact value of $\\sin \\frac{11\\pi}{12}$**. Choose the best setup.`,
        exercise: {
          dropdowns: [
            { label: 'Decompose $\\frac{11\\pi}{12}$ as:', options: ['$\\frac{2\\pi}{3} + \\frac{\\pi}{4}$', '$\\frac{8\\pi}{9} + \\frac{\\pi}{36}$', '$\\frac{5\\pi}{9} + \\frac{13\\pi}{36}$', '$\\frac{3\\pi}{5} + \\frac{19\\pi}{60}$'] },
            { label: 'Use the formula:', options: ['$\\sin A\\cos B + \\cos A\\sin B$', '$\\cos A\\cos B - \\sin A\\sin B$', '$\\sin A\\cos B - \\cos A\\sin B$', '$\\sin A + \\sin B$'] },
            { label: 'Sign of the result (QII):', options: ['positive', 'negative', 'zero', 'undefined'] },
          ],
          correctAnswers: ['$\\frac{2\\pi}{3} + \\frac{\\pi}{4}$', '$\\sin A\\cos B + \\cos A\\sin B$', 'positive'],
          hint1: 'You need two angles with known exact values; $\\frac{2\\pi}{3}$ and $\\frac{\\pi}{4}$ both qualify.',
          hint2: 'A SUM of angles uses the sine SUM formula (sine keeps its sign): $\\sin A\\cos B + \\cos A\\sin B$.',
          hint3: '$\\frac{11\\pi}{12}$ is in Quadrant II, where sine is positive (it equals $\\sin \\frac{\\pi}{12} \\approx 0.259$).',
          explanation: '$\\sin \\frac{11\\pi}{12} = \\sin(\\frac{2\\pi}{3} + \\frac{\\pi}{4})$ uses the sine sum formula and is positive in QII. In fact $\\sin \\frac{11\\pi}{12} = \\sin(\\pi - \\frac{\\pi}{12}) = \\sin \\frac{\\pi}{12} = \\frac{\\sqrt6 - \\sqrt2}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'sum-difference-identities',
    sections: [
      {
        id: 'sdi6-intro',
        type: 'text' as const,
        content: `# 🔺 Sum and Difference Identities

**Part 6 of 7 — Simplifying & Proving Identities**

---

The formulas run **both directions**. Reading them right-to-left lets you **collapse** a long expression into a single trig function.

> 🔑 **Recognition is everything:** if you spot the *shape* $\\sin A\\cos B + \\cos A\\sin B$, you can instantly rewrite it as $\\sin(A+B)$.`,
      },
      {
        id: 'sdi6-collapse',
        type: 'text' as const,
        content: `## Collapsing Expressions

| If you see… | It collapses to… |
|-------------|------------------|
| $\\sin A\\cos B + \\cos A\\sin B$ | $\\sin(A + B)$ |
| $\\sin A\\cos B - \\cos A\\sin B$ | $\\sin(A - B)$ |
| $\\cos A\\cos B - \\sin A\\sin B$ | $\\cos(A + B)$ |
| $\\cos A\\cos B + \\sin A\\sin B$ | $\\cos(A - B)$ |

### Example

$$\\sin \\frac{5\\pi}{18}\\cos \\frac{\\pi}{9} - \\cos \\frac{5\\pi}{18}\\sin \\frac{\\pi}{9} = \\sin(\\frac{5\\pi}{18} - \\frac{\\pi}{9}) = \\sin \\frac{\\pi}{6} = \\frac{1}{2}$$

> 💡 This is how a "scary" expression becomes a single known value. Look for the **mixed-product, opposite-order** pattern that signals sine, or the **matched-product** pattern that signals cosine.`,
      },
      {
        id: 'sdi6-collapse-check',
        type: 'multiple-choice' as const,
        content: `**Recognize the Pattern** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\cos \\frac{2\\pi}{9}\\cos \\frac{\\pi}{18} + \\sin \\frac{2\\pi}{9}\\sin \\frac{\\pi}{18}$ simplifies to:',
              options: ['$\\cos \\frac{\\pi}{6}$', '$\\cos \\frac{5\\pi}{18}$', '$\\sin \\frac{\\pi}{6}$', '$\\cos \\frac{20\\pi}{9}$'],
              correctAnswer: 0,
              explanation: 'Matched products with a PLUS is the $\\cos(A-B)$ pattern: $\\cos(\\frac{2\\pi}{9} - \\frac{\\pi}{18}) = \\cos \\frac{\\pi}{6} = \\frac{\\sqrt3}{2}$.',
            },
            {
              question: '$\\sin 3x\\cos x + \\cos 3x\\sin x$ simplifies to:',
              options: ['$\\sin 4x$', '$\\sin(-2x)$', '$\\cos(-2x)$', '$\\sin(3x^2)$'],
              correctAnswer: 0,
              explanation: 'Mixed products with a PLUS is the $\\sin(A+B)$ pattern: $\\sin(3x + x) = \\sin 4x$.',
            },
          ],
        },
      },
      {
        id: 'sdi6-prove',
        type: 'text' as const,
        content: `## Proving an Identity

**Prove:** $\\sin\\!\\left(x + \\dfrac{\\pi}{2}\\right) = \\cos x$.

Expand with the sine **sum** formula:

$$\\sin\\!\\left(x + \\frac{\\pi}{2}\\right) = \\sin x\\cos\\frac{\\pi}{2} + \\cos x\\sin\\frac{\\pi}{2}$$

Substitute $\\cos\\dfrac{\\pi}{2} = 0$ and $\\sin\\dfrac{\\pi}{2} = 1$:

$$= \\sin x\\cdot 0 + \\cos x\\cdot 1 = \\cos x \\qquad \\blacksquare$$

> 💡 **Phase shifts as identities:** this is exactly why shifting a sine graph left by $\\frac{\\pi}{2}$ produces the cosine graph. The algebra and the picture agree.`,
      },
      {
        id: 'sdi6-prove-drill',
        type: 'dropdown-select' as const,
        content: `**Complete the Proof** 🔽

Prove that $\\cos(\\pi - x) = -\\cos x$. Fill each step.`,
        exercise: {
          dropdowns: [
            { label: 'Expand $\\cos(\\pi - x) = $', options: ['$\\cos\\pi\\cos x + \\sin\\pi\\sin x$', '$\\cos\\pi\\cos x - \\sin\\pi\\sin x$', '$\\sin\\pi\\cos x - \\cos\\pi\\sin x$', '$\\cos\\pi - \\cos x$'] },
            { label: 'Substitute $\\cos\\pi = $', options: ['$-1$', '$1$', '$0$', '$\\tfrac12$'] },
            { label: 'Substitute $\\sin\\pi = $', options: ['$0$', '$1$', '$-1$', '$\\tfrac{\\sqrt2}{2}$'] },
          ],
          correctAnswers: ['$\\cos\\pi\\cos x + \\sin\\pi\\sin x$', '$-1$', '$0$'],
          hint1: 'This is a cosine of a DIFFERENCE, so the matched products are joined with a PLUS.',
          hint2: 'On the unit circle, the angle $\\pi$ (a half turn) sits at the point $(-1, 0)$.',
          hint3: 'So $\\cos\\pi = -1$ and $\\sin\\pi = 0$, giving $(-1)\\cos x + (0)\\sin x = -\\cos x$.',
          explanation: '$\\cos(\\pi - x) = \\cos\\pi\\cos x + \\sin\\pi\\sin x = (-1)\\cos x + (0)\\sin x = -\\cos x$. $\\;\\blacksquare$',
        },
      },
      {
        id: 'sdi6-collapse-recap',
        type: 'text' as const,
        content: `## The Reverse Skill in One Sentence

When you see two products being **added or subtracted**, ask: *are the functions matched or mixed?*

- **Matched** ($\\cos\\cos \\pm \\sin\\sin$) → it's a **cosine** of $(A \\mp B)$.
- **Mixed** ($\\sin\\cos \\pm \\cos\\sin$) → it's a **sine** of $(A \\pm B)$.

Then read off the two inner angles and combine them. The whole expression collapses to one term you can often evaluate exactly.`,
      },
      {
        id: 'sdi6-collapse-drill',
        type: 'input-boxes' as const,
        content: `**Collapse, Then Evaluate** 🧮

Each expression collapses to a single trig value. Enter the **exact value** (use a/b for fractions; a decimal is fine where noted).

**1)** $\\sin \\frac{5\\pi}{12}\\cos \\frac{\\pi}{6} - \\cos \\frac{5\\pi}{12}\\sin \\frac{\\pi}{6} = \\sin(\\,?\\cdot\\pi)$, where the angle is the difference of the two given angles (between $0$ and $\\frac{\\pi}{2}$) — enter the **coefficient of $\\pi$** (e.g. \`1/6\`).
**2)** That value $= \\,?$  *(3 decimals)*
**3)** $\\cos \\frac{7\\pi}{12}\\cos \\frac{\\pi}{4} + \\sin \\frac{7\\pi}{12}\\sin \\frac{\\pi}{4} = \\cos(\\,?\\cdot\\pi)$, again with the angle between $0$ and $\\frac{\\pi}{2}$ — enter the **coefficient of $\\pi$**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/4', '0.707', '1/3'],
          hint1: 'Mixed products with a minus is $\\sin(A-B)$: $\\sin(\\frac{5\\pi}{12} - \\frac{2\\pi}{12})$.',
          hint2: '$\\sin \\frac{\\pi}{4} = \\frac{\\sqrt2}{2} \\approx 0.707$.',
          hint3: 'Matched products with a plus is $\\cos(A-B)$: $\\cos(\\frac{7\\pi}{12} - \\frac{3\\pi}{12}) = \\cos \\frac{\\pi}{3}$.',
          explanation: '1) $\\sin(\\frac{5\\pi}{12} - \\frac{\\pi}{6}) = \\sin \\frac{3\\pi}{12} = \\sin \\frac{\\pi}{4}$, so the coefficient is $\\frac14$.  2) $\\sin \\frac{\\pi}{4} \\approx 0.707$.  3) $\\cos(\\frac{7\\pi}{12} - \\frac{\\pi}{4}) = \\cos \\frac{\\pi}{3}$, so the coefficient is $\\frac13$ (value $\\frac12$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'sum-difference-identities',
    sections: [
      {
        id: 'sdi7-intro',
        type: 'text' as const,
        content: `# 🔺 Sum and Difference Identities

**Part 7 of 7 — Applications, Mixed Practice & Exit Quiz**

---

The hardest AP-style problems give you $\\sin$ and $\\cos$ of two angles **without** the angles themselves, and ask for the sine or cosine of their sum.`,
      },
      {
        id: 'sdi7-given-example',
        type: 'text' as const,
        content: `## Worked Example: Given Sines & Cosines

Suppose $\\sin A = \\dfrac{3}{5}$ with $A$ in Quadrant I, and $\\cos B = \\dfrac{5}{13}$ with $B$ in Quadrant I. Find $\\sin(A + B)$.

**Step 1 — Find the missing pieces** using Pythagorean triples:
- $A$ in QI with $\\sin A = \\frac35 \\Rightarrow \\cos A = \\frac45$ (3-4-5 triangle).
- $B$ in QI with $\\cos B = \\frac{5}{13} \\Rightarrow \\sin B = \\frac{12}{13}$ (5-12-13 triangle).

**Step 2 — Apply the sine sum formula:**
$$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B = \\frac{3}{5}\\cdot\\frac{5}{13} + \\frac{4}{5}\\cdot\\frac{12}{13}$$

$$= \\frac{15}{65} + \\frac{48}{65} = \\frac{63}{65}$$

> ⚠️ **Watch the quadrants.** If an angle were in QII–QIV, one of $\\sin$ or $\\cos$ would be **negative**. Always assign the sign from the quadrant *before* multiplying.`,
      },
      {
        id: 'sdi7-given-drill',
        type: 'input-boxes' as const,
        content: `**Your Turn (Given Values)** 🧮

Use $\\sin A = \\dfrac{3}{5}$ ($A$ in QI) and $\\cos B = \\dfrac{5}{13}$ ($B$ in QI), so $\\cos A = \\dfrac{4}{5}$ and $\\sin B = \\dfrac{12}{13}$.

**1)** $\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B = \\,?$  *(enter as a fraction like a/b)*
**2)** $\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B = \\,?$  *(fraction)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-16/65', '-33/65'],
          hint1: '$\\cos(A+B) = \\frac45\\cdot\\frac{5}{13} - \\frac35\\cdot\\frac{12}{13} = \\frac{20}{65} - \\frac{36}{65}$.',
          hint2: '$\\sin(A-B) = \\frac35\\cdot\\frac{5}{13} - \\frac45\\cdot\\frac{12}{13} = \\frac{15}{65} - \\frac{48}{65}$.',
          hint3: 'Combine the fractions over the common denominator $65$ and keep the sign.',
          explanation: '1) $\\frac{20 - 36}{65} = -\\frac{16}{65}$.  2) $\\frac{15 - 48}{65} = -\\frac{33}{65}$. Both are negative because the second product dominates.',
        },
      },
      {
        id: 'sdi7-summary',
        type: 'text' as const,
        content: `## Master Reference

| Identity | Expansion |
|----------|-----------|
| $\\sin(A + B)$ | $\\sin A\\cos B + \\cos A\\sin B$ |
| $\\sin(A - B)$ | $\\sin A\\cos B - \\cos A\\sin B$ |
| $\\cos(A + B)$ | $\\cos A\\cos B - \\sin A\\sin B$ |
| $\\cos(A - B)$ | $\\cos A\\cos B + \\sin A\\sin B$ |
| $a\\sin x + b\\cos x$ | $R\\sin(x + C)$ with $R = \\sqrt{a^2 + b^2}$ |

> 🔑 **Three rules to never forget:**
> 1. **Cosine flips** the sign; **sine keeps** it.
> 2. Cosine uses **matched** products; sine uses **mixed**.
> 3. Assign each missing sine or cosine its sign from the **quadrant** before you multiply.`,
      },
      {
        id: 'sdi7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\cos 5x\\cos 2x + \\sin 5x\\sin 2x$.',
              options: ['$\\cos 3x$', '$\\cos 7x$', '$\\sin 3x$', '$\\cos 10x$'],
              correctAnswer: 0,
              explanation: 'Matched products with a PLUS is $\\cos(A-B)$: $\\cos(5x - 2x) = \\cos 3x$.',
            },
            {
              question: 'If $\\sin A = \\frac35$ ($A$ in QI) and $\\cos A = \\frac45$, then $\\sin(A + A) = \\sin 2A$ equals:',
              options: ['$\\dfrac{24}{25}$', '$\\dfrac{7}{25}$', '$\\dfrac{6}{5}$', '$\\dfrac{3}{5}$'],
              correctAnswer: 0,
              explanation: '$\\sin(A+A) = \\sin A\\cos A + \\cos A\\sin A = 2\\sin A\\cos A = 2\\cdot\\frac35\\cdot\\frac45 = \\frac{24}{25}$.',
            },
          ],
        },
      },
      {
        id: 'sdi7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The correct expansion of $\\cos(A + B)$ is:',
              options: [
                '$\\cos A\\cos B - \\sin A\\sin B$',
                '$\\cos A\\cos B + \\sin A\\sin B$',
                '$\\sin A\\cos B + \\cos A\\sin B$',
                '$\\cos A - \\cos B$',
              ],
              correctAnswer: 0,
              explanation: 'Cosine flips the sign: a PLUS inside becomes a MINUS. Matched products give $\\cos A\\cos B - \\sin A\\sin B$.',
            },
            {
              question: 'What is the exact value of $\\cos \\frac{\\pi}{12}$?',
              options: [
                '$\\dfrac{\\sqrt6 + \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt6 - \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt2 - \\sqrt6}{4}$',
                '$\\dfrac{\\sqrt3 + 1}{2}$',
              ],
              correctAnswer: 0,
              explanation: '$\\cos \\frac{\\pi}{12} = \\cos(\\frac{\\pi}{4} - \\frac{\\pi}{6}) = \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} + \\frac{\\sqrt2}{2}\\cdot\\frac12 = \\frac{\\sqrt6 + \\sqrt2}{4} \\approx 0.966$.',
            },
            {
              question: '$\\sin \\frac{4\\pi}{9}\\cos \\frac{\\pi}{9} - \\cos \\frac{4\\pi}{9}\\sin \\frac{\\pi}{9}$ equals:',
              options: ['$\\dfrac{\\sqrt3}{2}$', '$\\dfrac12$', '$\\sin \\frac{5\\pi}{9}$', '$1$'],
              correctAnswer: 0,
              explanation: 'This is the $\\sin(A-B)$ pattern: $\\sin(\\frac{4\\pi}{9} - \\frac{\\pi}{9}) = \\sin \\frac{\\pi}{3} = \\frac{\\sqrt3}{2}$.',
            },
          ],
        },
      },
    ],
  },
]
