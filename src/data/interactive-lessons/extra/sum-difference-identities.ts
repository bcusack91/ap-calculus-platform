import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Sum and Difference Identities (AP Precalculus).
 * Registry key: 'sum-difference-identities' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: why exact values need identities → cosine
 * formulas → sine formulas → tangent formula → exact-value technique → proving
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

Let $A = B = 30^\\circ$, so $A + B = 60^\\circ$.

| Quantity | Exact value |
|----------|-------------|
| $\\sin(30^\\circ + 30^\\circ) = \\sin 60^\\circ$ | $\\dfrac{\\sqrt{3}}{2} \\approx 0.866$ |
| $\\sin 30^\\circ + \\sin 30^\\circ$ | $\\dfrac{1}{2} + \\dfrac{1}{2} = 1$ |

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
              explanation: 'Try $A = B = 60^\\circ$: $\\cos 120^\\circ = -\\tfrac12$, but $\\cos 60^\\circ + \\cos 60^\\circ = 1$. They disagree, so the rule is false. Trig functions are not linear.',
            },
            {
              question: 'Using $A = B = 45^\\circ$, which equals $\\sin(45^\\circ + 45^\\circ)$?',
              options: ['$1$', '$\\sqrt{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$0$'],
              correctAnswer: 0,
              explanation: '$\\sin(45^\\circ+45^\\circ) = \\sin 90^\\circ = 1$. Note $\\sin 45^\\circ + \\sin 45^\\circ = \\tfrac{\\sqrt2}{2}+\\tfrac{\\sqrt2}{2} = \\sqrt2 \\approx 1.414$ — a different (wrong) answer.',
            },
          ],
        },
      },
      {
        id: 'sdi1-special',
        type: 'text' as const,
        content: `## Special vs. Non-Special Angles

From the unit circle you already know the **special angles** exactly:

| Angle | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ |
|-------|-----------|------------|------------|------------|------------|
| $\\sin$ | $0$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
| $\\cos$ | $1$ | $\\dfrac{\\sqrt3}{2}$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac12$ | $0$ |

But what about $15^\\circ$, $75^\\circ$, or $105^\\circ$? These aren't on the unit circle — **yet**.

> 💡 **The trick:** any of these can be built by **adding or subtracting** special angles:
> - $15^\\circ = 45^\\circ - 30^\\circ$
> - $75^\\circ = 45^\\circ + 30^\\circ$
> - $105^\\circ = 60^\\circ + 45^\\circ$
>
> The sum and difference identities turn that decomposition into an **exact** answer.`,
      },
      {
        id: 'sdi1-decompose',
        type: 'dropdown-select' as const,
        content: `**Decompose the Angle** 🔽

Express each angle as a **sum or difference of two special angles** ($30^\\circ, 45^\\circ, 60^\\circ$).`,
        exercise: {
          dropdowns: [
            { label: '$15^\\circ = $', options: ['$45^\\circ - 30^\\circ$', '$45^\\circ + 30^\\circ$', '$60^\\circ - 30^\\circ$', '$30^\\circ - 45^\\circ$'] },
            { label: '$75^\\circ = $', options: ['$45^\\circ + 30^\\circ$', '$45^\\circ - 30^\\circ$', '$90^\\circ - 30^\\circ$', '$60^\\circ + 30^\\circ$'] },
            { label: '$105^\\circ = $', options: ['$60^\\circ + 45^\\circ$', '$60^\\circ - 45^\\circ$', '$45^\\circ + 45^\\circ$', '$90^\\circ + 30^\\circ$'] },
          ],
          correctAnswers: ['$45^\\circ - 30^\\circ$', '$45^\\circ + 30^\\circ$', '$60^\\circ + 45^\\circ$'],
          hint1: 'You want two angles from $\\{30^\\circ, 45^\\circ, 60^\\circ\\}$ that add or subtract to the target.',
          hint2: '$45 - 30 = 15$, and $45 + 30 = 75$.',
          hint3: '$60 + 45 = 105$, so $105^\\circ = 60^\\circ + 45^\\circ$. Here we build every target from the $30/45/60$ pieces.',
          explanation: '$15^\\circ = 45^\\circ - 30^\\circ$, $\\;75^\\circ = 45^\\circ + 30^\\circ$, $\\;105^\\circ = 60^\\circ + 45^\\circ$. Each target is built from two unit-circle angles.',
        },
      },
      {
        id: 'sdi1-unlock',
        type: 'text' as const,
        content: `## What the Identities Unlock

By the end of this lesson you'll be able to:

1. Find **exact values** like $\\cos 15^\\circ$ and $\\tan 75^\\circ$ (no calculator).
2. **Simplify** messy expressions such as $\\sin x \\cos 2x + \\cos x \\sin 2x$ into a single term.
3. **Prove** new identities and evaluate composite expressions like $\\sin(\\arcsin a + \\arccos b)$.

There are six core formulas — two each for cosine, sine, and tangent. We'll build them one family at a time, starting with **cosine** in Part 2.

> 🔑 **Roadmap:** cosine first (Part 2), because the sine and tangent formulas are *derived from it*.`,
      },
      {
        id: 'sdi1-motivation-check',
        type: 'multiple-choice' as const,
        content: `**Why It Matters** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why can we find $\\cos 15^\\circ$ exactly with these identities, but $\\cos 13^\\circ$ is left to a calculator?',
              options: [
                '$15^\\circ$ splits into special angles ($45^\\circ - 30^\\circ$); $13^\\circ$ does not',
                '$15^\\circ$ is smaller than $13^\\circ$',
                '$13^\\circ$ is negative on the unit circle',
                'Cosine is undefined at $13^\\circ$',
              ],
              correctAnswer: 0,
              explanation: 'The identities only help when the angle decomposes into angles whose sine and cosine we already know exactly. $13^\\circ$ is not a sum or difference of unit-circle angles, so no exact radical form falls out.',
            },
            {
              question: 'Which task will the sum and difference identities NOT directly help with?',
              options: [
                'Approximating $\\sin 41.7^\\circ$ to 6 decimals by hand',
                'Finding the exact value of $\\tan 75^\\circ$',
                'Simplifying $\\sin x\\cos 2x + \\cos x\\sin 2x$',
                'Proving $\\sin\\!\\left(x + \\tfrac{\\pi}{2}\\right) = \\cos x$',
              ],
              correctAnswer: 0,
              explanation: '$41.7^\\circ$ does not decompose into special angles, so the identities give no exact form. The other three are all standard uses: exact values, simplifying, and proving identities.',
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
                '$\\cos A + \\cos B$',
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

**By the Law of Cosines** (angle between them is $A - B$):
$$PQ^2 = 1^2 + 1^2 - 2(1)(1)\\cos(A - B) = 2 - 2\\cos(A - B)$$

Setting the two equal and cancelling:

$$\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$$

> 💡 Replace $B$ with $-B$ (and use $\\cos(-B)=\\cos B$, $\\sin(-B)=-\\sin B$) to get the $\\cos(A+B)$ version.`,
      },
      {
        id: 'sdi2-substitute-drill',
        type: 'input-boxes' as const,
        content: `**Substitute the Values** 🧮

You're expanding $\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ$. Enter each special value **as a decimal rounded to 3 places**.

**1)** $\\cos 30^\\circ = \\,?$
**2)** $\\sin 30^\\circ = \\,?$
**3)** $\\cos 75^\\circ$ overall $= \\,?$  *(3 decimals)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.866', '0.5', '0.259'],
          hint1: '$\\cos 30^\\circ = \\frac{\\sqrt3}{2} \\approx 0.866$ and $\\sin 30^\\circ = \\frac12 = 0.5$.',
          hint2: '$\\cos 45^\\circ = \\sin 45^\\circ = \\frac{\\sqrt2}{2} \\approx 0.707$.',
          hint3: '$\\cos 75^\\circ = (0.707)(0.866) - (0.707)(0.5) \\approx 0.612 - 0.354 = 0.259$.',
          explanation: '$\\cos 30^\\circ \\approx 0.866$, $\\sin 30^\\circ = 0.5$, and $\\cos 75^\\circ = \\frac{\\sqrt6 - \\sqrt2}{4} \\approx 0.259$. (Plus inside → minus in the formula → the smaller value.)',
        },
      },
      {
        id: 'sdi2-first-value',
        type: 'text' as const,
        content: `## First Exact Value: $\\cos 15^\\circ$

Write $15^\\circ = 45^\\circ - 30^\\circ$ and use the **difference** formula:

$$\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ + \\sin 45^\\circ\\sin 30^\\circ$$

Substitute special values:

$$= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} + \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt6}{4} + \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 + \\sqrt2}{4}$$

> ✅ **Check:** $\\dfrac{\\sqrt6 + \\sqrt2}{4} \\approx \\dfrac{2.449 + 1.414}{4} \\approx 0.966$, and a calculator gives $\\cos 15^\\circ \\approx 0.966$. ✓`,
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
                'Are exactly identical to the cosine formulas',
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
        content: `## Worked Example: $\\sin 75^\\circ$

Write $75^\\circ = 45^\\circ + 30^\\circ$ and use the **sum** formula:

$$\\sin 75^\\circ = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ$$

$$= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} + \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt6}{4} + \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 + \\sqrt2}{4}$$

> 💡 **Cofunction sanity check:** $\\sin 75^\\circ = \\cos 15^\\circ$ because $75^\\circ$ and $15^\\circ$ are complementary. We got the same value $\\frac{\\sqrt6+\\sqrt2}{4}$ in Part 2 — consistent! ✓`,
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
        content: `## Worked Example: $\\sin 15^\\circ$

Write $15^\\circ = 45^\\circ - 30^\\circ$ and use the **difference** formula:

$$\\sin 15^\\circ = \\sin 45^\\circ\\cos 30^\\circ - \\cos 45^\\circ\\sin 30^\\circ$$

$$= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} - \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt6}{4} - \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 - \\sqrt2}{4}$$

> ✅ **Check:** $\\dfrac{\\sqrt6 - \\sqrt2}{4} \\approx \\dfrac{2.449 - 1.414}{4} \\approx 0.259$, and $\\sin 15^\\circ \\approx 0.259$. ✓`,
      },
      {
        id: 'sdi3-fill-drill',
        type: 'input-boxes' as const,
        content: `**Fill the Numerator** 🧮

Each exact value has the form $\\dfrac{\\sqrt6 \\;\\square\\; \\sqrt2}{4}$. Enter **+** or **-** for the box (type a plus or minus sign).

**1)** $\\sin 75^\\circ = \\dfrac{\\sqrt6 \\;?\\; \\sqrt2}{4}$
**2)** $\\sin 15^\\circ = \\dfrac{\\sqrt6 \\;?\\; \\sqrt2}{4}$
**3)** $\\cos 15^\\circ = \\dfrac{\\sqrt6 \\;?\\; \\sqrt2}{4}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['+', '-', '+'],
          hint1: 'Expand each with the right identity, then keep the sign that survives.',
          hint2: '$\\sin 75^\\circ = \\sin(45+30)$ uses the sum formula → both terms add → "+".',
          hint3: '$\\sin 15^\\circ = \\sin(45-30)$ subtracts → "-". $\\cos 15^\\circ = \\cos(45-30)$ → cosine flips the minus to a "+".',
          explanation: '$\\sin 75^\\circ = \\frac{\\sqrt6+\\sqrt2}{4}$ (+). $\\sin 15^\\circ = \\frac{\\sqrt6-\\sqrt2}{4}$ (-). $\\cos 15^\\circ = \\frac{\\sqrt6+\\sqrt2}{4}$ (+, because cosine of a difference adds).',
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

**Part 4 of 7 — The Tangent Formulas**

---

> 🔑 **The two tangent identities:**
> $$\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$$
> $$\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$$`,
      },
      {
        id: 'sdi4-derive',
        type: 'text' as const,
        content: `## Where It Comes From

Since $\\tan = \\dfrac{\\sin}{\\cos}$, divide the sine sum formula by the cosine sum formula:

$$\\tan(A+B) = \\frac{\\sin A\\cos B + \\cos A\\sin B}{\\cos A\\cos B - \\sin A\\sin B}$$

Now divide **every term** (top and bottom) by $\\cos A\\cos B$:

$$= \\frac{\\dfrac{\\sin A}{\\cos A} + \\dfrac{\\sin B}{\\cos B}}{1 - \\dfrac{\\sin A}{\\cos A}\\cdot\\dfrac{\\sin B}{\\cos B}} = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$$

> ⚠️ **Sign pattern (note the swap):** the **numerator** sign matches the inside, but the **denominator** sign is the **opposite**. So $\\tan(A+B)$ has $+$ on top and $-$ on the bottom; $\\tan(A-B)$ has $-$ on top and $+$ on the bottom.`,
      },
      {
        id: 'sdi4-sign-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The denominator of $\\tan(A + B)$ is:',
              options: ['$1 - \\tan A\\tan B$', '$1 + \\tan A\\tan B$', '$\\tan A - \\tan B$', '$\\cos A\\cos B$'],
              correctAnswer: 0,
              explanation: 'For a SUM, the numerator is $\\tan A + \\tan B$ and the denominator flips to $1 - \\tan A\\tan B$. The denominator sign is always opposite the inside sign.',
            },
            {
              question: 'Which correctly shows $\\tan(A - B)$?',
              options: [
                '$\\dfrac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$',
                '$\\dfrac{\\tan A - \\tan B}{1 - \\tan A\\tan B}$',
                '$\\dfrac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$',
                '$\\tan A - \\tan B$',
              ],
              correctAnswer: 0,
              explanation: 'Difference: numerator $\\tan A - \\tan B$ (matches inside), denominator $1 + \\tan A\\tan B$ (opposite of inside).',
            },
          ],
        },
      },
      {
        id: 'sdi4-worked-tan15',
        type: 'text' as const,
        content: `## Worked Example: $\\tan 15^\\circ$

Write $15^\\circ = 45^\\circ - 30^\\circ$. Recall $\\tan 45^\\circ = 1$ and $\\tan 30^\\circ = \\dfrac{1}{\\sqrt3} = \\dfrac{\\sqrt3}{3}$.

$$\\tan 15^\\circ = \\frac{\\tan 45^\\circ - \\tan 30^\\circ}{1 + \\tan 45^\\circ\\tan 30^\\circ} = \\frac{1 - \\frac{1}{\\sqrt3}}{1 + 1\\cdot\\frac{1}{\\sqrt3}} = \\frac{\\;\\frac{\\sqrt3 - 1}{\\sqrt3}\\;}{\\;\\frac{\\sqrt3 + 1}{\\sqrt3}\\;} = \\frac{\\sqrt3 - 1}{\\sqrt3 + 1}$$

**Rationalize** by multiplying top and bottom by $(\\sqrt3 - 1)$:

$$= \\frac{(\\sqrt3 - 1)^2}{(\\sqrt3 + 1)(\\sqrt3 - 1)} = \\frac{3 - 2\\sqrt3 + 1}{3 - 1} = \\frac{4 - 2\\sqrt3}{2} = 2 - \\sqrt3$$

> ✅ **Check:** $2 - \\sqrt3 \\approx 2 - 1.732 = 0.268$, and $\\tan 15^\\circ \\approx 0.268$. ✓`,
      },
      {
        id: 'sdi4-tan-drill',
        type: 'dropdown-select' as const,
        content: `**Build the Tangent Formula** 🔽

You are expanding $\\tan(60^\\circ + 45^\\circ)$ to find $\\tan 105^\\circ$. Choose each piece.`,
        exercise: {
          dropdowns: [
            { label: 'Numerator:', options: ['$\\tan 60^\\circ + \\tan 45^\\circ$', '$\\tan 60^\\circ - \\tan 45^\\circ$', '$1 + \\tan 60^\\circ\\tan 45^\\circ$', '$\\tan 60^\\circ\\tan 45^\\circ$'] },
            { label: 'Denominator:', options: ['$1 - \\tan 60^\\circ\\tan 45^\\circ$', '$1 + \\tan 60^\\circ\\tan 45^\\circ$', '$\\tan 60^\\circ - \\tan 45^\\circ$', '$\\tan 60^\\circ + \\tan 45^\\circ$'] },
          ],
          correctAnswers: ['$\\tan 60^\\circ + \\tan 45^\\circ$', '$1 - \\tan 60^\\circ\\tan 45^\\circ$'],
          hint1: 'This is a SUM, so the numerator adds the two tangents.',
          hint2: 'For a sum, the denominator sign is the opposite: $1 - \\dots$',
          hint3: '$\\tan(A+B) = \\dfrac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$.',
          explanation: '$\\tan 105^\\circ = \\dfrac{\\tan 60^\\circ + \\tan 45^\\circ}{1 - \\tan 60^\\circ\\tan 45^\\circ} = \\dfrac{\\sqrt3 + 1}{1 - \\sqrt3}$, which simplifies to $-(2+\\sqrt3)$. (Negative makes sense — $105^\\circ$ is in Quadrant II.)',
        },
      },
      {
        id: 'sdi4-recap',
        type: 'text' as const,
        content: `## Two Tangents Worth Memorizing

The two most common tangent results from this method are clean:

$$\\tan 15^\\circ = 2 - \\sqrt3 \\qquad \\tan 75^\\circ = 2 + \\sqrt3$$

They are **reciprocals** of each other, since $15^\\circ$ and $75^\\circ$ are complementary and $\\tan(90^\\circ - \\theta) = \\cot\\theta = \\dfrac{1}{\\tan\\theta}$.

> 💡 Indeed $(2-\\sqrt3)(2+\\sqrt3) = 4 - 3 = 1$, confirming they multiply to $1$.`,
      },
      {
        id: 'sdi4-tan-decimal-drill',
        type: 'input-boxes' as const,
        content: `**Decimal Check** 🧮

Use $\\tan 45^\\circ = 1$, $\\tan 30^\\circ = \\frac{1}{\\sqrt3} \\approx 0.577$, and $\\tan 60^\\circ = \\sqrt3 \\approx 1.732$.

**1)** $\\tan 15^\\circ = 2 - \\sqrt3 = \\,?$  *(3 decimals)*
**2)** $\\tan 75^\\circ = 2 + \\sqrt3 = \\,?$  *(3 decimals)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0.268', '3.732'],
          hint1: '$\\sqrt3 \\approx 1.732$.',
          hint2: '$\\tan 15^\\circ = 2 - 1.732 = 0.268$. $\\tan 75^\\circ = 2 + 1.732 = 3.732$.',
          hint3: 'Note $\\tan 15^\\circ$ and $\\tan 75^\\circ$ are reciprocals ($0.268 \\times 3.732 \\approx 1$) — they are complementary angles.',
          explanation: '$\\tan 15^\\circ = 2 - \\sqrt3 \\approx 0.268$ and $\\tan 75^\\circ = 2 + \\sqrt3 \\approx 3.732$. As complementary angles, $\\tan 75^\\circ = \\cot 15^\\circ = 1/\\tan 15^\\circ$. ✓',
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
> 2. **Pick** the right family (sin/cos/tan) and write the formula.
> 3. **Substitute** unit-circle values.
> 4. **Simplify** (and rationalize if it's a tangent).`,
      },
      {
        id: 'sdi5-cos105',
        type: 'text' as const,
        content: `## Worked Example: $\\cos 105^\\circ$

**Step 1 — Decompose:** $105^\\circ = 60^\\circ + 45^\\circ$.

**Step 2 — Formula:** cosine of a **sum** flips the sign:
$$\\cos 105^\\circ = \\cos 60^\\circ\\cos 45^\\circ - \\sin 60^\\circ\\sin 45^\\circ$$

**Step 3 — Substitute:**
$$= \\frac{1}{2}\\cdot\\frac{\\sqrt2}{2} - \\frac{\\sqrt3}{2}\\cdot\\frac{\\sqrt2}{2} = \\frac{\\sqrt2}{4} - \\frac{\\sqrt6}{4}$$

**Step 4 — Simplify:**
$$\\cos 105^\\circ = \\frac{\\sqrt2 - \\sqrt6}{4}$$

> ✅ **Check:** $\\dfrac{\\sqrt2 - \\sqrt6}{4} \\approx \\dfrac{1.414 - 2.449}{4} \\approx -0.259$. Since $105^\\circ$ is in Quadrant II, cosine is **negative** — consistent. ✓`,
      },
      {
        id: 'sdi5-exact-mc',
        type: 'multiple-choice' as const,
        content: `**Apply the Method** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which decomposition is best for finding $\\cos 75^\\circ$ exactly?',
              options: [
                '$\\cos(45^\\circ + 30^\\circ)$',
                '$\\cos(70^\\circ + 5^\\circ)$',
                '$\\cos(40^\\circ + 35^\\circ)$',
                '$\\cos(80^\\circ - 5^\\circ)$',
              ],
              correctAnswer: 0,
              explanation: 'Only $45^\\circ$ and $30^\\circ$ are special angles with known exact values. The others ($5^\\circ, 35^\\circ$, etc.) are not on the unit circle.',
            },
            {
              question: 'After expanding, $\\cos 75^\\circ = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ$ equals:',
              options: [
                '$\\dfrac{\\sqrt6 - \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt6 + \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt2 - \\sqrt6}{4}$',
                '$\\dfrac{\\sqrt3 - 1}{2}$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} - \\frac{\\sqrt2}{2}\\cdot\\frac12 = \\frac{\\sqrt6}{4} - \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 - \\sqrt2}{4} \\approx 0.259$, which matches $\\cos 75^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'sdi5-sin105',
        type: 'text' as const,
        content: `## Worked Example: $\\sin 105^\\circ$

**Decompose:** $105^\\circ = 60^\\circ + 45^\\circ$. Use the sine **sum** formula (sine keeps its sign):

$$\\sin 105^\\circ = \\sin 60^\\circ\\cos 45^\\circ + \\cos 60^\\circ\\sin 45^\\circ$$

$$= \\frac{\\sqrt3}{2}\\cdot\\frac{\\sqrt2}{2} + \\frac{1}{2}\\cdot\\frac{\\sqrt2}{2} = \\frac{\\sqrt6}{4} + \\frac{\\sqrt2}{4} = \\frac{\\sqrt6 + \\sqrt2}{4}$$

> 💡 **Notice:** $\\sin 105^\\circ = \\frac{\\sqrt6+\\sqrt2}{4} = \\sin 75^\\circ$. That's because $\\sin(180^\\circ - \\theta) = \\sin\\theta$, and $105^\\circ = 180^\\circ - 75^\\circ$. A nice built-in check.`,
      },
      {
        id: 'sdi5-exact-drill',
        type: 'input-boxes' as const,
        content: `**Decimal Check** 🧮

Compute each exact value, then enter its **decimal** rounded to **3 decimal places**. (Use a calculator to confirm after you set up the exact form.)

**1)** $\\cos 105^\\circ = \\dfrac{\\sqrt2 - \\sqrt6}{4} = \\,?$
**2)** $\\sin 15^\\circ = \\dfrac{\\sqrt6 - \\sqrt2}{4} = \\,?$
**3)** $\\tan 15^\\circ = 2 - \\sqrt3 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-0.259', '0.259', '0.268'],
          hint1: '$\\sqrt2 \\approx 1.414$, $\\sqrt3 \\approx 1.732$, $\\sqrt6 \\approx 2.449$.',
          hint2: '$\\cos 105^\\circ = \\frac{1.414 - 2.449}{4} = \\frac{-1.035}{4}$. Quadrant II → negative.',
          hint3: '$\\sin 15^\\circ = \\frac{2.449 - 1.414}{4} = \\frac{1.035}{4} \\approx 0.259$. $\\;2 - 1.732 = 0.268$.',
          explanation: '1) $\\frac{1.414-2.449}{4} \\approx -0.259$.  2) $\\frac{2.449-1.414}{4} \\approx 0.259$.  3) $2 - 1.732 \\approx 0.268$.',
        },
      },
      {
        id: 'sdi5-quadrant-note',
        type: 'text' as const,
        content: `## Don't Forget the Quadrant

Angles like $105^\\circ$, $165^\\circ$, and $195^\\circ$ live **outside** Quadrant I, so the sign of your answer matters. After you decompose and expand, sanity-check the sign against the quadrant.

| Angle | Quadrant | $\\sin$ | $\\cos$ |
|-------|----------|--------|--------|
| $105^\\circ$ | II | $+$ | $-$ |
| $195^\\circ$ | III | $-$ | $-$ |
| $285^\\circ$ | IV | $-$ | $+$ |

> ⚠️ A correct expansion with a sign that **contradicts** the quadrant means an arithmetic slip — go back and check.`,
      },
      {
        id: 'sdi5-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Right Expansion** 🔽

You want the **exact value of $\\sin 165^\\circ$**. Choose the best setup.`,
        exercise: {
          dropdowns: [
            { label: 'Decompose $165^\\circ$ as:', options: ['$120^\\circ + 45^\\circ$', '$160^\\circ + 5^\\circ$', '$100^\\circ + 65^\\circ$', '$83^\\circ + 82^\\circ$'] },
            { label: 'Use the formula:', options: ['$\\sin A\\cos B + \\cos A\\sin B$', '$\\cos A\\cos B - \\sin A\\sin B$', '$\\sin A\\cos B - \\cos A\\sin B$', '$\\sin A + \\sin B$'] },
            { label: 'Sign of the result (QII):', options: ['positive', 'negative', 'zero', 'undefined'] },
          ],
          correctAnswers: ['$120^\\circ + 45^\\circ$', '$\\sin A\\cos B + \\cos A\\sin B$', 'positive'],
          hint1: 'You need two angles with known exact values; $120^\\circ$ and $45^\\circ$ both qualify.',
          hint2: 'A SUM of angles uses the sine SUM formula (sine keeps its sign): $\\sin A\\cos B + \\cos A\\sin B$.',
          hint3: '$165^\\circ$ is in Quadrant II, where sine is positive (it equals $\\sin 15^\\circ \\approx 0.259$).',
          explanation: '$\\sin 165^\\circ = \\sin(120^\\circ + 45^\\circ)$ uses the sine sum formula and is positive in QII. In fact $\\sin 165^\\circ = \\sin(180^\\circ - 15^\\circ) = \\sin 15^\\circ = \\frac{\\sqrt6 - \\sqrt2}{4}$.',
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

$$\\sin 50^\\circ\\cos 20^\\circ - \\cos 50^\\circ\\sin 20^\\circ = \\sin(50^\\circ - 20^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$$

> 💡 This is how a "scary" expression becomes a single known value. Look for the **mixed-product, opposite-order** pattern that signals sine, or the **matched-product** pattern that signals cosine.`,
      },
      {
        id: 'sdi6-collapse-check',
        type: 'multiple-choice' as const,
        content: `**Recognize the Pattern** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\cos 40^\\circ\\cos 10^\\circ + \\sin 40^\\circ\\sin 10^\\circ$ simplifies to:',
              options: ['$\\cos 30^\\circ$', '$\\cos 50^\\circ$', '$\\sin 30^\\circ$', '$\\cos 400^\\circ$'],
              correctAnswer: 0,
              explanation: 'Matched products with a PLUS is the $\\cos(A-B)$ pattern: $\\cos(40^\\circ - 10^\\circ) = \\cos 30^\\circ = \\frac{\\sqrt3}{2}$.',
            },
            {
              question: '$\\sin 3x\\cos x + \\cos 3x\\sin x$ simplifies to:',
              options: ['$\\sin 4x$', '$\\sin 2x$', '$\\cos 4x$', '$\\sin 3x$'],
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
          hint2: 'On the unit circle, $\\pi$ radians ($180^\\circ$) sits at the point $(-1, 0)$.',
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

**1)** $\\sin 70^\\circ\\cos 25^\\circ - \\cos 70^\\circ\\sin 25^\\circ = \\sin(\\,?^\\circ)$ — enter the **angle in degrees**.
**2)** That value $\\sin 45^\\circ = \\,?$  *(3 decimals)*
**3)** $\\cos 100^\\circ\\cos 40^\\circ + \\sin 100^\\circ\\sin 40^\\circ = \\cos(\\,?^\\circ)$ — enter the **angle in degrees**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['45', '0.707', '60'],
          hint1: 'Mixed products with a minus is $\\sin(A-B)$: $\\sin(70^\\circ - 25^\\circ)$.',
          hint2: '$\\sin 45^\\circ = \\frac{\\sqrt2}{2} \\approx 0.707$.',
          hint3: 'Matched products with a plus is $\\cos(A-B)$: $\\cos(100^\\circ - 40^\\circ) = \\cos 60^\\circ$.',
          explanation: '1) $\\sin(70^\\circ - 25^\\circ) = \\sin 45^\\circ$, so the angle is $45^\\circ$.  2) $\\sin 45^\\circ \\approx 0.707$.  3) $\\cos(100^\\circ - 40^\\circ) = \\cos 60^\\circ$, so the angle is $60^\\circ$ (value $\\frac12$).',
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
| $\\tan(A + B)$ | $\\dfrac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$ |
| $\\tan(A - B)$ | $\\dfrac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$ |

> 🔑 **Three rules to never forget:**
> 1. **Cosine flips** the sign; **sine keeps** it.
> 2. Cosine uses **matched** products; sine uses **mixed**.
> 3. Tangent's **denominator** sign is **opposite** the inside sign.`,
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
              options: ['$\\dfrac{24}{25}$', '$\\dfrac{7}{25}$', '$\\dfrac{6}{5}$', '$\\dfrac{12}{25}$'],
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
                '$\\cos A + \\cos B$',
              ],
              correctAnswer: 0,
              explanation: 'Cosine flips the sign: a PLUS inside becomes a MINUS. Matched products give $\\cos A\\cos B - \\sin A\\sin B$.',
            },
            {
              question: 'What is the exact value of $\\cos 15^\\circ$?',
              options: [
                '$\\dfrac{\\sqrt6 + \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt6 - \\sqrt2}{4}$',
                '$\\dfrac{\\sqrt2 - \\sqrt6}{4}$',
                '$\\dfrac{\\sqrt3 + 1}{2}$',
              ],
              correctAnswer: 0,
              explanation: '$\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} + \\frac{\\sqrt2}{2}\\cdot\\frac12 = \\frac{\\sqrt6 + \\sqrt2}{4} \\approx 0.966$.',
            },
            {
              question: '$\\sin 80^\\circ\\cos 20^\\circ - \\cos 80^\\circ\\sin 20^\\circ$ equals:',
              options: ['$\\dfrac{\\sqrt3}{2}$', '$\\dfrac12$', '$\\dfrac{\\sqrt2}{2}$', '$1$'],
              correctAnswer: 0,
              explanation: 'This is the $\\sin(A-B)$ pattern: $\\sin(80^\\circ - 20^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt3}{2}$.',
            },
          ],
        },
      },
    ],
  },
]
