import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Trigonometric Equations (AP Precalculus).
 * Registry key: 'solving-trig-equations' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: reference angles & the unit circle → basic
 * sin/cos/tan equations → general solutions (all solutions, +2πk) → equations needing
 * algebra (factoring, quadratic form) → inverse trig & the calculator → applications
 * & modeling → mixed practice + exit quiz. Each part mixes multiple-choice +
 * input-boxes + dropdown. LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'solving-trig-equations',
    sections: [
      {
        id: 'ste1-intro',
        type: 'text' as const,
        content: `# 📐 Solving Trigonometric Equations

**Part 1 of 7 — The Toolkit: Reference Angles & the Unit Circle**

---

### Topics in This Part

| Section |
|---------|
| What Makes a Trig Equation Different |
| Special Angles on the Unit Circle |
| Reference Angles & Sign by Quadrant |

> 🔑 **Key Concept:** A trigonometric equation asks *"for what angles is this true?"* Because sine, cosine, and tangent **repeat**, most trig equations have **infinitely many** solutions. Before we solve, we need the unit-circle values cold — that's Part 1.`,
      },
      {
        id: 'ste1-different',
        type: 'text' as const,
        content: `## What Makes a Trig Equation Different

An equation like $x^2 = 4$ has two solutions, $x = 2$ and $x = -2$. Done.

A trig equation like $\\sin\\theta = \\dfrac{1}{2}$ is different. Sine takes the value $\\dfrac{1}{2}$ at $\\theta = \\dfrac{\\pi}{6}$, but **also** at $\\theta = \\dfrac{5\\pi}{6}$, and again at $\\dfrac{\\pi}{6} + 2\\pi$, $\\dfrac{5\\pi}{6} + 2\\pi$, and so on **forever**.

So solving a trig equation usually means three layers of work:

1. **Find the reference angle** — the acute angle whose trig value matches.
2. **Place it in the right quadrant(s)** — where is the function the correct *sign*?
3. **Add the period** to capture *all* solutions (Part 3).

> 💡 Almost every trig equation reduces to a unit-circle fact plus careful bookkeeping about quadrants and periods. Master the circle and the rest is logic.`,
      },
      {
        id: 'ste1-circle-table',
        type: 'text' as const,
        content: `## Special Angles You Must Know

These are the values that show up on nearly every AP Precalculus problem. Memorize them in radians.

| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |
|-----------|---------------|---------------|---------------|
| $0$ | $0$ | $1$ | $0$ |
| $\\dfrac{\\pi}{6}$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{\\sqrt{3}}{3}$ |
| $\\dfrac{\\pi}{4}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $1$ |
| $\\dfrac{\\pi}{3}$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{1}{2}$ | $\\sqrt{3}$ |
| $\\dfrac{\\pi}{2}$ | $1$ | $0$ | undefined |

> 🔑 **Memory aid:** For $\\sin$ of $0, \\dfrac{\\pi}{6}, \\dfrac{\\pi}{4}, \\dfrac{\\pi}{3}, \\dfrac{\\pi}{2}$ write $\\dfrac{\\sqrt{0}}{2}, \\dfrac{\\sqrt{1}}{2}, \\dfrac{\\sqrt{2}}{2}, \\dfrac{\\sqrt{3}}{2}, \\dfrac{\\sqrt{4}}{2}$. Cosine is the same list **reversed**.`,
      },
      {
        id: 'ste1-values-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\cos\\dfrac{\\pi}{3}$?',
              options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$1$'],
              correctAnswer: 0,
              explanation: 'From the table, $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$. (Note $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$ — they are swapped from $\\dfrac{\\pi}{6}$.)',
            },
            {
              question: 'For which special angle is $\\tan\\theta = 1$?',
              options: ['$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
              correctAnswer: 0,
              explanation: '$\\tan\\dfrac{\\pi}{4} = \\dfrac{\\sin(\\pi/4)}{\\cos(\\pi/4)} = \\dfrac{\\sqrt2/2}{\\sqrt2/2} = 1$.',
            },
          ],
        },
      },
      {
        id: 'ste1-quadrants',
        type: 'text' as const,
        content: `## Sign by Quadrant: "All Students Take Calculus"

The **reference angle** is the acute angle between the terminal side and the $x$-axis. It tells you the *size* of the trig value; the **quadrant** tells you the *sign*.

| Quadrant | Angles | Positive functions |
|----------|--------|--------------------|
| I | $0$ to $\\dfrac{\\pi}{2}$ | **A**ll |
| II | $\\dfrac{\\pi}{2}$ to $\\pi$ | **S**ine (and csc) |
| III | $\\pi$ to $\\dfrac{3\\pi}{2}$ | **T**angent (and cot) |
| IV | $\\dfrac{3\\pi}{2}$ to $2\\pi$ | **C**osine (and sec) |

The mnemonic **A·S·T·C** ("**A**ll **S**tudents **T**ake **C**alculus") walks quadrants I → II → III → IV.

> ⚠️ A common error: knowing $\\sin\\theta = \\dfrac{1}{2}$ gives a reference angle of $\\dfrac{\\pi}{6}$, but **sine is also positive in Quadrant II**, so $\\dfrac{5\\pi}{6}$ is a solution too. Always ask: *in which quadrants does the function have this sign?*`,
      },
      {
        id: 'ste1-quadrant-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sign Detective** 🔽

Use A·S·T·C to decide the sign of each value.`,
        exercise: {
          dropdowns: [
            { label: '$\\sin\\theta$ in Quadrant III is:', options: ['negative', 'positive', 'zero'] },
            { label: '$\\cos\\theta$ in Quadrant II is:', options: ['negative', 'positive', 'zero'] },
            { label: '$\\tan\\theta$ in Quadrant IV is:', options: ['negative', 'positive', 'zero'] },
          ],
          correctAnswers: ['negative', 'negative', 'negative'],
          hint1: 'In QIII only Tangent is positive, so sine is negative there.',
          hint2: 'In QII only Sine is positive, so cosine is negative there.',
          hint3: 'In QIV only Cosine is positive, so tangent is negative there.',
          explanation: 'QIII: only tan positive → sin negative. QII: only sin positive → cos negative. QIV: only cos positive → tan negative.',
        },
      },
      {
        id: 'ste1-ref-drill',
        type: 'input-boxes' as const,
        content: `**Reference Angles** 🧮

The reference angle is the acute angle to the nearest $x$-axis. Enter each reference angle **in degrees**.

**1)** A terminal angle of $150^\\circ$ → reference angle $= \\,?$
**2)** A terminal angle of $210^\\circ$ → reference angle $= \\,?$
**3)** A terminal angle of $300^\\circ$ → reference angle $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '30', '60'],
          hint1: 'In QII the reference angle is $180^\\circ - \\theta$: $180 - 150 = 30$.',
          hint2: 'In QIII the reference angle is $\\theta - 180^\\circ$: $210 - 180 = 30$.',
          hint3: 'In QIV the reference angle is $360^\\circ - \\theta$: $360 - 300 = 60$.',
          explanation: '1) $180-150 = 30^\\circ$.  2) $210-180 = 30^\\circ$.  3) $360-300 = 60^\\circ$. The reference angle is always between $0^\\circ$ and $90^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'solving-trig-equations',
    sections: [
      {
        id: 'ste2-intro',
        type: 'text' as const,
        content: `# 📐 Solving Trigonometric Equations

**Part 2 of 7 — Basic Equations on $[0, 2\\pi)$**

---

> 🔑 **The Plan:** To solve $\\sin\\theta = k$ (or $\\cos$, or $\\tan$) on one full turn $[0, 2\\pi)$: find the **reference angle** from the unit circle, then use A·S·T·C to place a solution in **each** quadrant where the sign is correct.`,
      },
      {
        id: 'ste2-sine',
        type: 'text' as const,
        content: `## Solving a Sine Equation

### Example: $\\sin\\theta = \\dfrac{\\sqrt{3}}{2}$ on $[0, 2\\pi)$

1. **Reference angle:** $\\sin^{-1}\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\pi}{3}$.
2. **Sign / quadrants:** $\\dfrac{\\sqrt3}{2}$ is **positive**, and sine is positive in **QI and QII**.
3. **Place it:**
   - QI: $\\theta = \\dfrac{\\pi}{3}$
   - QII: $\\theta = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$

$$\\boxed{\\theta = \\frac{\\pi}{3}, \\; \\frac{2\\pi}{3}}$$

> ✅ **Check:** $\\sin\\dfrac{2\\pi}{3} = \\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt3}{2}$ ✓ (QII reference angle is $\\pi - \\theta$).`,
      },
      {
        id: 'ste2-cosine',
        type: 'text' as const,
        content: `## Solving a Cosine Equation (negative value)

### Example: $\\cos\\theta = -\\dfrac{1}{2}$ on $[0, 2\\pi)$

1. **Reference angle:** $\\cos^{-1}\\dfrac{1}{2} = \\dfrac{\\pi}{3}$ (use the *positive* value for the reference angle).
2. **Sign / quadrants:** the value is **negative**, and cosine is negative in **QII and QIII**.
3. **Place it:**
   - QII: $\\theta = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$
   - QIII: $\\theta = \\pi + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3}$

$$\\boxed{\\theta = \\frac{2\\pi}{3}, \\; \\frac{4\\pi}{3}}$$

> 💡 **Quadrant formulas** (reference angle $\\alpha$): QI $= \\alpha$, QII $= \\pi - \\alpha$, QIII $= \\pi + \\alpha$, QIV $= 2\\pi - \\alpha$.`,
      },
      {
        id: 'ste2-quad-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Solutions** 🔽

You're solving $\\cos\\theta = -\\dfrac{1}{2}$ with reference angle $\\alpha = \\dfrac{\\pi}{3}$.`,
        exercise: {
          dropdowns: [
            { label: 'Cosine is negative in which quadrants?', options: ['II and III', 'I and II', 'III and IV', 'I and IV'] },
            { label: 'The Quadrant II solution is:', options: ['$\\dfrac{2\\pi}{3}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{4\\pi}{3}$', '$\\dfrac{5\\pi}{3}$'] },
            { label: 'The Quadrant III solution is:', options: ['$\\dfrac{4\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{5\\pi}{3}$', '$\\dfrac{\\pi}{3}$'] },
          ],
          correctAnswers: ['II and III', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{4\\pi}{3}$'],
          hint1: 'By A·S·T·C, only cosine is positive in QI and QIV, so cosine is negative in QII and QIII.',
          hint2: 'QII solution $= \\pi - \\alpha = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$.',
          hint3: 'QIII solution $= \\pi + \\alpha = \\pi + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3}$.',
          explanation: 'Cosine negative → QII & QIII. With $\\alpha = \\dfrac{\\pi}{3}$: $\\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$ and $\\pi + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3}$.',
        },
      },
      {
        id: 'ste2-tangent',
        type: 'text' as const,
        content: `## Solving a Tangent Equation

Tangent has period $\\pi$ (not $2\\pi$), so on $[0, 2\\pi)$ a tangent equation usually has **two** solutions, exactly $\\pi$ apart.

### Example: $\\tan\\theta = 1$ on $[0, 2\\pi)$

1. **Reference angle:** $\\tan^{-1}(1) = \\dfrac{\\pi}{4}$.
2. **Sign / quadrants:** the value is **positive**, and tangent is positive in **QI and QIII**.
3. **Place it:** QI: $\\dfrac{\\pi}{4}$; QIII: $\\pi + \\dfrac{\\pi}{4} = \\dfrac{5\\pi}{4}$.

$$\\boxed{\\theta = \\frac{\\pi}{4}, \\; \\frac{5\\pi}{4}}$$

> 💡 Notice the two solutions differ by exactly $\\pi$ — that's the signature of tangent.`,
      },
      {
        id: 'ste2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\sin\\theta = \\dfrac{1}{2}$ on $[0, 2\\pi)$.',
              options: ['$\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$', '$\\dfrac{\\pi}{6}, \\dfrac{7\\pi}{6}$', '$\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}$', '$\\dfrac{\\pi}{6}$ only'],
              correctAnswer: 0,
              explanation: 'Reference angle $\\dfrac{\\pi}{6}$; sine positive in QI and QII. QI: $\\dfrac{\\pi}{6}$; QII: $\\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}$.',
            },
            {
              question: 'Solve $\\tan\\theta = -\\sqrt{3}$ on $[0, 2\\pi)$.',
              options: ['$\\dfrac{2\\pi}{3}, \\dfrac{5\\pi}{3}$', '$\\dfrac{\\pi}{3}, \\dfrac{4\\pi}{3}$', '$\\dfrac{\\pi}{6}, \\dfrac{7\\pi}{6}$', '$\\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}$'],
              correctAnswer: 0,
              explanation: 'Reference angle $\\tan^{-1}\\sqrt3 = \\dfrac{\\pi}{3}$; tangent negative in QII and QIV. QII: $\\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$; QIV: $2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}$.',
            },
          ],
        },
      },
      {
        id: 'ste2-input',
        type: 'input-boxes' as const,
        content: `**Count & Place** 🧮

Solve $\\cos\\theta = \\dfrac{\\sqrt{2}}{2}$ on $[0, 2\\pi)$. Give each solution as a multiple of $\\pi$ — enter the **coefficient** (e.g. type \`1/4\` for $\\tfrac{\\pi}{4}$).

**1)** Quadrant I solution: $\\theta = \\,?\\,\\cdot\\pi$
**2)** Quadrant IV solution: $\\theta = \\,?\\,\\cdot\\pi$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/4', '7/4'],
          hint1: 'Reference angle: $\\cos^{-1}\\dfrac{\\sqrt2}{2} = \\dfrac{\\pi}{4}$, so QI is $\\dfrac{\\pi}{4}$ — coefficient $\\dfrac14$.',
          hint2: 'Cosine is positive in QI and QIV.',
          hint3: 'QIV $= 2\\pi - \\dfrac{\\pi}{4} = \\dfrac{7\\pi}{4}$ — coefficient $\\dfrac74$.',
          explanation: '$\\cos\\theta = \\dfrac{\\sqrt2}{2}$ is positive → QI & QIV. QI: $\\dfrac{\\pi}{4}$; QIV: $2\\pi - \\dfrac{\\pi}{4} = \\dfrac{7\\pi}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'solving-trig-equations',
    sections: [
      {
        id: 'ste3-intro',
        type: 'text' as const,
        content: `# 📐 Solving Trigonometric Equations

**Part 3 of 7 — All Solutions: The General Solution**

---

> 🔑 **The Big Idea:** Because trig functions repeat, you capture *every* solution by adding whole periods. Sine and cosine repeat every $2\\pi$; tangent repeats every $\\pi$. We write "$+ 2\\pi k$" or "$+ \\pi k$" where $k$ is **any integer**.`,
      },
      {
        id: 'ste3-period',
        type: 'text' as const,
        content: `## Adding the Period

Once you have the solutions on $[0, 2\\pi)$, the **general solution** adds one full period times an integer $k = \\ldots, -2, -1, 0, 1, 2, \\ldots$

### Sine / Cosine (period $2\\pi$)

If $\\theta = \\dfrac{\\pi}{6}$ and $\\theta = \\dfrac{5\\pi}{6}$ solve $\\sin\\theta = \\dfrac12$ on one turn, then **all** solutions are:

$$\\theta = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{or} \\quad \\theta = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}$$

### Tangent (period $\\pi$)

Because tangent's two solutions per turn already differ by $\\pi$, you only need **one** base solution:

$$\\tan\\theta = 1 \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}$$

> 💡 One $+\\pi k$ family for tangent automatically generates *both* the QI and QIII answers.`,
      },
      {
        id: 'ste3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What do you add to a base cosine solution to get ALL solutions?',
              options: ['$+\\,2\\pi k$', '$+\\,\\pi k$', '$+\\,\\dfrac{\\pi}{2} k$', '$+\\,360 k$'],
              correctAnswer: 0,
              explanation: 'Cosine has period $2\\pi$, so all solutions repeat every $2\\pi$: add $2\\pi k$ for integer $k$. (In degrees you would add $360^\\circ k$ — but here angles are in radians.)',
            },
            {
              question: 'The general solution of $\\tan\\theta = 0$ is:',
              options: ['$\\theta = \\pi k$', '$\\theta = 2\\pi k$', '$\\theta = \\dfrac{\\pi}{2} + \\pi k$', '$\\theta = \\dfrac{\\pi}{2}k$'],
              correctAnswer: 0,
              explanation: '$\\tan\\theta = 0$ at $\\theta = 0$ and $\\theta = \\pi$, which are exactly $\\pi$ apart. Tangent has period $\\pi$, so $\\theta = 0 + \\pi k = \\pi k$.',
            },
          ],
        },
      },
      {
        id: 'ste3-restricted',
        type: 'text' as const,
        content: `## Listing Solutions on a Given Interval

Often a problem restricts the interval (e.g. $[0, 2\\pi)$ or $[0, 4\\pi)$). The trick: write the **general solution**, then plug in integers $k = 0, 1, 2, \\ldots$ and keep only the angles inside the interval.

### Example: solve $\\sin\\theta = \\dfrac12$ on $[0, 4\\pi)$

General solution: $\\theta = \\dfrac{\\pi}{6} + 2\\pi k$ or $\\dfrac{5\\pi}{6} + 2\\pi k$.

| $k$ | $\\dfrac{\\pi}{6} + 2\\pi k$ | $\\dfrac{5\\pi}{6} + 2\\pi k$ |
|-----|---------------------------|------------------------------|
| $0$ | $\\dfrac{\\pi}{6}$ ✓ | $\\dfrac{5\\pi}{6}$ ✓ |
| $1$ | $\\dfrac{13\\pi}{6}$ ✓ | $\\dfrac{17\\pi}{6}$ ✓ |
| $2$ | $\\dfrac{25\\pi}{6} > 4\\pi$ ✗ | $\\dfrac{29\\pi}{6} > 4\\pi$ ✗ |

So on $[0, 4\\pi)$ there are **four** solutions: $\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}, \\dfrac{13\\pi}{6}, \\dfrac{17\\pi}{6}$.

> ⚠️ Note $4\\pi = \\dfrac{24\\pi}{6}$, so $\\dfrac{25\\pi}{6}$ is just past the right edge and is excluded.`,
      },
      {
        id: 'ste3-dropdown',
        type: 'dropdown-select' as const,
        content: `**General-Solution Builder** 🔽

You found $\\theta = \\dfrac{\\pi}{3}$ and $\\theta = \\dfrac{5\\pi}{3}$ solve $\\cos\\theta = \\dfrac12$ on one turn.`,
        exercise: {
          dropdowns: [
            { label: 'The period to add is:', options: ['$2\\pi k$', '$\\pi k$', '$\\dfrac{\\pi}{2}k$', '$3\\pi k$'] },
            { label: 'The complete general solution is:', options: ['$\\dfrac{\\pi}{3} + 2\\pi k$ or $\\dfrac{5\\pi}{3} + 2\\pi k$', '$\\dfrac{\\pi}{3} + \\pi k$', '$\\dfrac{\\pi}{3} + 2\\pi k$ only', '$\\dfrac{5\\pi}{3} + \\pi k$'] },
            { label: 'How many solutions lie in $[0, 2\\pi)$?', options: ['2', '1', '3', '4'] },
          ],
          correctAnswers: ['$2\\pi k$', '$\\dfrac{\\pi}{3} + 2\\pi k$ or $\\dfrac{5\\pi}{3} + 2\\pi k$', '2'],
          hint1: 'Cosine has period $2\\pi$, so we add $2\\pi k$.',
          hint2: 'Cosine is not symmetric like tangent — you need BOTH base solutions, each with $+2\\pi k$.',
          hint3: 'On exactly one turn $[0,2\\pi)$, only $k=0$ keeps both base angles inside, giving 2 solutions.',
          explanation: 'Period $2\\pi \\Rightarrow +2\\pi k$. Keep both base angles: $\\dfrac{\\pi}{3} + 2\\pi k$ and $\\dfrac{5\\pi}{3} + 2\\pi k$. On $[0,2\\pi)$ that is exactly 2 solutions.',
        },
      },
      {
        id: 'ste3-input',
        type: 'input-boxes' as const,
        content: `**Count the Solutions** 🧮

How many solutions does each equation have on the interval $[0, 2\\pi)$? (Enter a whole number.)

**1)** $\\cos\\theta = 0$
**2)** $\\sin\\theta = 1$
**3)** $\\tan\\theta = \\sqrt{3}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '2'],
          hint1: '$\\cos\\theta = 0$ at $\\dfrac{\\pi}{2}$ and $\\dfrac{3\\pi}{2}$ — that is 2 solutions.',
          hint2: '$\\sin\\theta = 1$ only at the very top, $\\dfrac{\\pi}{2}$ — just 1 solution.',
          hint3: '$\\tan\\theta = \\sqrt3$ at $\\dfrac{\\pi}{3}$ (QI) and $\\dfrac{4\\pi}{3}$ (QIII) — 2 solutions, $\\pi$ apart.',
          explanation: '1) $\\cos\\theta=0 \\Rightarrow \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$ → 2.  2) $\\sin\\theta=1 \\Rightarrow \\dfrac{\\pi}{2}$ only → 1 (a max is hit once per turn).  3) $\\tan\\theta=\\sqrt3 \\Rightarrow \\dfrac{\\pi}{3}, \\dfrac{4\\pi}{3}$ → 2.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'solving-trig-equations',
    sections: [
      {
        id: 'ste4-intro',
        type: 'text' as const,
        content: `# 📐 Solving Trigonometric Equations

**Part 4 of 7 — Equations That Need Algebra First**

---

> 🔑 **The Move:** Many trig equations aren't "isolated" yet. Treat the trig function like a single variable — call it $u$ — and use ordinary algebra (isolate, factor, quadratic formula) to get $\\sin\\theta = \\text{number}$, *then* solve with the unit circle.`,
      },
      {
        id: 'ste4-isolate',
        type: 'text' as const,
        content: `## Step 1: Isolate the Trig Function

### Example: $2\\sin\\theta - 1 = 0$ on $[0, 2\\pi)$

Solve for the trig piece exactly like a linear equation:

$$2\\sin\\theta = 1 \\;\\Rightarrow\\; \\sin\\theta = \\frac{1}{2}$$

Now it's a basic equation: reference angle $\\dfrac{\\pi}{6}$, sine positive in QI and QII:

$$\\boxed{\\theta = \\frac{\\pi}{6}, \\; \\frac{5\\pi}{6}}$$

> 💡 Get the equation into the form $(\\text{trig}) = (\\text{number})$ first. Everything you know from Parts 2–3 then applies.`,
      },
      {
        id: 'ste4-factor',
        type: 'text' as const,
        content: `## Step 2: Factoring (the zero-product idea)

If two factors multiply to $0$, at least one factor is $0$.

### Example: $\\sin\\theta\\,(2\\cos\\theta + 1) = 0$ on $[0, 2\\pi)$

Set each factor to $0$:

**Factor A:** $\\sin\\theta = 0 \\;\\Rightarrow\\; \\theta = 0, \\, \\pi$

**Factor B:** $2\\cos\\theta + 1 = 0 \\Rightarrow \\cos\\theta = -\\dfrac{1}{2} \\Rightarrow \\theta = \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}$

$$\\boxed{\\theta = 0, \\; \\frac{2\\pi}{3}, \\; \\pi, \\; \\frac{4\\pi}{3}}$$

> ⚠️ **Never divide both sides by $\\sin\\theta$** — you would lose the $\\sin\\theta = 0$ solutions. **Factor instead** and set each piece to zero.`,
      },
      {
        id: 'ste4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why should you NOT divide $\\sin\\theta\\cos\\theta = \\sin\\theta$ by $\\sin\\theta$?',
              options: [
                'You would lose the solutions where $\\sin\\theta = 0$',
                'Dividing changes cosine into tangent',
                'It makes the equation harder to read',
                'You are allowed to — it is always fine',
              ],
              correctAnswer: 0,
              explanation: 'Dividing by $\\sin\\theta$ assumes $\\sin\\theta \\ne 0$, silently discarding every solution where $\\sin\\theta = 0$. Move everything to one side and factor instead.',
            },
            {
              question: 'Solve $\\sqrt{2}\\cos\\theta + 1 = 0$ on $[0, 2\\pi)$.',
              options: ['$\\dfrac{3\\pi}{4}, \\dfrac{5\\pi}{4}$', '$\\dfrac{\\pi}{4}, \\dfrac{7\\pi}{4}$', '$\\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}$', '$\\dfrac{5\\pi}{4}, \\dfrac{7\\pi}{4}$'],
              correctAnswer: 0,
              explanation: '$\\cos\\theta = -\\dfrac{1}{\\sqrt2} = -\\dfrac{\\sqrt2}{2}$. Reference angle $\\dfrac{\\pi}{4}$; cosine negative in QII & QIII: $\\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}$ and $\\pi + \\dfrac{\\pi}{4} = \\dfrac{5\\pi}{4}$.',
            },
          ],
        },
      },
      {
        id: 'ste4-quadratic',
        type: 'text' as const,
        content: `## Step 3: Quadratic-Form Equations

When an equation is quadratic in a trig function, substitute $u = \\sin\\theta$ (or $\\cos\\theta$), factor, then back-substitute.

### Example: $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ on $[0, 2\\pi)$

Let $u = \\sin\\theta$: $\\;2u^2 - u - 1 = 0$. Factor: $(2u + 1)(u - 1) = 0$.

- $u = 1 \\Rightarrow \\sin\\theta = 1 \\Rightarrow \\theta = \\dfrac{\\pi}{2}$
- $u = -\\dfrac{1}{2} \\Rightarrow \\sin\\theta = -\\dfrac{1}{2} \\Rightarrow \\theta = \\dfrac{7\\pi}{6}, \\dfrac{11\\pi}{6}$

$$\\boxed{\\theta = \\frac{\\pi}{2}, \\; \\frac{7\\pi}{6}, \\; \\frac{11\\pi}{6}}$$

> 💡 $\\sin\\theta = -\\dfrac12$ is negative → QIII and QIV: $\\pi + \\dfrac{\\pi}{6} = \\dfrac{7\\pi}{6}$ and $2\\pi - \\dfrac{\\pi}{6} = \\dfrac{11\\pi}{6}$.`,
      },
      {
        id: 'ste4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Factor & Solve** 🔽

Solve $2\\cos^2\\theta - \\cos\\theta = 0$ on $[0, 2\\pi)$ by factoring.`,
        exercise: {
          dropdowns: [
            { label: 'Factor out $\\cos\\theta$ to get:', options: ['$\\cos\\theta(2\\cos\\theta - 1) = 0$', '$\\cos\\theta(2\\cos\\theta + 1) = 0$', '$2\\cos\\theta(\\cos\\theta - 1) = 0$', '$(2\\cos\\theta-1)^2 = 0$'] },
            { label: 'From $\\cos\\theta = 0$:', options: ['$\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$', '$0, \\pi$', '$\\dfrac{\\pi}{2}$ only', '$\\pi$ only'] },
            { label: 'From $2\\cos\\theta - 1 = 0$ (so $\\cos\\theta = \\tfrac12$):', options: ['$\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$', '$\\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}$', '$\\dfrac{\\pi}{6}, \\dfrac{11\\pi}{6}$', '$\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}$'] },
          ],
          correctAnswers: ['$\\cos\\theta(2\\cos\\theta - 1) = 0$', '$\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$', '$\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$'],
          hint1: 'Both terms share a $\\cos\\theta$: $2\\cos^2\\theta - \\cos\\theta = \\cos\\theta(2\\cos\\theta - 1)$.',
          hint2: '$\\cos\\theta = 0$ at the top and bottom of the circle: $\\dfrac{\\pi}{2}$ and $\\dfrac{3\\pi}{2}$.',
          hint3: '$\\cos\\theta = \\dfrac12$ is positive → QI & QIV: $\\dfrac{\\pi}{3}$ and $2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}$.',
          explanation: 'Factor: $\\cos\\theta(2\\cos\\theta-1)=0$. $\\cos\\theta=0 \\Rightarrow \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$. $\\cos\\theta=\\dfrac12 \\Rightarrow \\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$. All four are solutions.',
        },
      },
      {
        id: 'ste4-input',
        type: 'input-boxes' as const,
        content: `**Isolate, Then Solve** 🧮

Solve $2\\cos\\theta + \\sqrt{3} = 0$ on $[0, 2\\pi)$. Give each solution as a coefficient of $\\pi$ (type \`5/6\` for $\\tfrac{5\\pi}{6}$).

**1)** Smaller solution: $\\theta = \\,?\\,\\cdot\\pi$
**2)** Larger solution: $\\theta = \\,?\\,\\cdot\\pi$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5/6', '7/6'],
          hint1: 'Isolate: $2\\cos\\theta = -\\sqrt3 \\Rightarrow \\cos\\theta = -\\dfrac{\\sqrt3}{2}$.',
          hint2: 'Reference angle $\\cos^{-1}\\dfrac{\\sqrt3}{2} = \\dfrac{\\pi}{6}$; the value is negative → QII & QIII.',
          hint3: 'QII $= \\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}$ and QIII $= \\pi + \\dfrac{\\pi}{6} = \\dfrac{7\\pi}{6}$.',
          explanation: '$\\cos\\theta = -\\dfrac{\\sqrt3}{2}$, reference angle $\\dfrac{\\pi}{6}$, negative → QII & QIII: $\\dfrac{5\\pi}{6}$ (coef $\\tfrac56$) and $\\dfrac{7\\pi}{6}$ (coef $\\tfrac76$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'solving-trig-equations',
    sections: [
      {
        id: 'ste5-intro',
        type: 'text' as const,
        content: `# 📐 Solving Trigonometric Equations

**Part 5 of 7 — Inverse Trig & the Calculator**

---

> 🔑 **When values aren't "special":** For $\\cos\\theta = 0.4$ there's no unit-circle answer. Use the **inverse trig** keys ($\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$) to get the reference angle, then place solutions in every correct quadrant yourself.`,
      },
      {
        id: 'ste5-ranges',
        type: 'text' as const,
        content: `## The Calculator Only Gives ONE Answer

Inverse trig functions are built to return a **single** angle from a restricted range:

| Function | Output range | Quadrants it returns |
|----------|--------------|----------------------|
| $\\sin^{-1}x$ | $\\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$ | IV, I |
| $\\cos^{-1}x$ | $[0, \\pi]$ | I, II |
| $\\tan^{-1}x$ | $\\left(-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)$ | IV, I |

So the calculator's answer is just **one** solution (or a reference angle). **You** must find the others using A·S·T·C and the period.

> ⚠️ **Mode matters!** Set your calculator to **radians** when the problem uses radians and **degrees** when it uses degrees. A wrong mode is the #1 source of wrong trig-equation answers.`,
      },
      {
        id: 'ste5-worked',
        type: 'text' as const,
        content: `## Worked Example with a Calculator

### Solve $\\cos\\theta = 0.4$ on $[0, 2\\pi)$ (round to 2 decimals)

1. **Reference angle:** $\\cos^{-1}(0.4) \\approx 1.16$ rad. Since $0.4 > 0$, this is already a QI angle.
2. **Quadrants:** cosine is positive in **QI and QIV**.
3. **Place it:**
   - QI: $\\theta \\approx 1.16$
   - QIV: $\\theta = 2\\pi - 1.16 \\approx 6.28 - 1.16 = 5.12$

$$\\boxed{\\theta \\approx 1.16, \\; 5.12}$$

> 💡 If the value were **negative**, $\\cos^{-1}$ returns a QII angle directly; you'd then get the QIII partner from $2\\pi - (\\text{that angle})$.`,
      },
      {
        id: 'ste5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Your calculator gives $\\sin^{-1}(0.7) \\approx 0.78$ rad. What is the OTHER solution on $[0, 2\\pi)$?',
              options: ['$\\pi - 0.78 \\approx 2.36$', '$2\\pi - 0.78 \\approx 5.50$', '$\\pi + 0.78 \\approx 3.92$', '$0.78$ is the only one'],
              correctAnswer: 0,
              explanation: '$\\sin\\theta = 0.7 > 0$ → solutions in QI and QII. The calculator gives the QI angle $0.78$; the QII partner is $\\pi - 0.78 \\approx 2.36$.',
            },
            {
              question: 'Why does $\\tan^{-1}$ on a calculator never directly return a Quadrant-III angle?',
              options: [
                'Its output range is $\\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)$, covering only QIV and QI',
                'Tangent is undefined in QIII',
                'QIII angles are always negative',
                'It actually does return QIII angles',
              ],
              correctAnswer: 0,
              explanation: '$\\tan^{-1}$ is restricted to $\\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)$ (QIV and QI only). For a QIII solution you add $\\pi$ to the returned angle.',
            },
          ],
        },
      },
      {
        id: 'ste5-dropdown',
        type: 'dropdown-select' as const,
        content: `**From Calculator to All Solutions** 🔽

You're solving $\\sin\\theta = 0.6$ on $[0, 2\\pi)$ and your calculator (radian mode) gives $\\sin^{-1}(0.6) \\approx 0.64$.`,
        exercise: {
          dropdowns: [
            { label: 'Sine is positive in which quadrants?', options: ['I and II', 'I and IV', 'II and III', 'III and IV'] },
            { label: 'The Quadrant I solution is:', options: ['$\\approx 0.64$', '$\\approx 2.50$', '$\\approx 3.78$', '$\\approx 5.64$'] },
            { label: 'The Quadrant II solution is:', options: ['$\\pi - 0.64 \\approx 2.50$', '$\\pi + 0.64 \\approx 3.78$', '$2\\pi - 0.64 \\approx 5.64$', '$0.64$'] },
          ],
          correctAnswers: ['I and II', '$\\approx 0.64$', '$\\pi - 0.64 \\approx 2.50$'],
          hint1: 'Positive sine → by A·S·T·C, QI and QII.',
          hint2: 'The calculator value $0.64$ is itself the QI angle.',
          hint3: 'The QII partner of a sine solution is $\\pi - (\\text{reference})$: $\\pi - 0.64 \\approx 2.50$.',
          explanation: '$\\sin\\theta = 0.6>0$ → QI & QII. QI $\\approx 0.64$; QII $= \\pi - 0.64 \\approx 2.50$.',
        },
      },
      {
        id: 'ste5-input',
        type: 'input-boxes' as const,
        content: `**Calculator Practice** 🧮

Solve $\\tan\\theta = 2$ on $[0, 2\\pi)$. Your calculator gives $\\tan^{-1}(2) \\approx 1.11$ rad. Round answers to **2 decimals**.

**1)** Quadrant I solution: $\\theta \\approx \\,?$
**2)** Quadrant III solution: $\\theta \\approx \\,?$  *(add $\\pi$)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1.11', '4.25'],
          hint1: 'The calculator value $1.11$ is the QI solution.',
          hint2: 'Tangent is positive in QI and QIII, and those two solutions differ by exactly $\\pi$.',
          hint3: 'QIII $= 1.11 + \\pi \\approx 1.11 + 3.14 = 4.25$.',
          explanation: '$\\tan\\theta = 2 > 0$ → QI & QIII. QI $\\approx 1.11$; QIII $= 1.11 + \\pi \\approx 4.25$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'solving-trig-equations',
    sections: [
      {
        id: 'ste6-intro',
        type: 'text' as const,
        content: `# 📐 Solving Trigonometric Equations

**Part 6 of 7 — Applications: Periodic Models**

---

> 🔑 **Why this matters:** Tides, daylight hours, temperature, sound, and AC voltage all rise and fall periodically. They're modeled by $f(t) = A\\sin\\big(B(t - C)\\big) + D$, and answering "*when* does it reach a certain value?" means **solving a trig equation**.`,
      },
      {
        id: 'ste6-model',
        type: 'text' as const,
        content: `## Reading a Sinusoidal Model

For $f(t) = A\\sin\\big(B(t - C)\\big) + D$:

| Symbol | Name | Meaning |
|--------|------|---------|
| $|A|$ | amplitude | half the distance between max and min |
| $D$ | midline | the average value (vertical shift) |
| $\\dfrac{2\\pi}{B}$ | period | time for one full cycle |
| $C$ | phase shift | horizontal shift |

The maximum is $D + |A|$ and the minimum is $D - |A|$.

### Example: a Ferris wheel

A rider's height is $h(t) = 25\\sin\\big(\\tfrac{\\pi}{15}(t - 7.5)\\big) + 30$ meters, $t$ in seconds.

- Amplitude $25$, midline $30$ → height ranges from $5$ m to $55$ m.
- Period $= \\dfrac{2\\pi}{\\pi/15} = 30$ seconds per revolution.

> 💡 To find *when* the rider is at a given height, set $h(t)$ equal to that height and solve the trig equation for $t$.`,
      },
      {
        id: 'ste6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(t) = 8\\sin\\big(\\tfrac{\\pi}{6}t\\big) + 20$, what is the maximum value?',
              options: ['$28$', '$20$', '$8$', '$12$'],
              correctAnswer: 0,
              explanation: 'Maximum $= D + |A| = 20 + 8 = 28$ (it occurs when the sine factor equals $1$).',
            },
            {
              question: 'For $f(t) = 8\\sin\\big(\\tfrac{\\pi}{6}t\\big) + 20$, what is the period?',
              options: ['$12$', '$6$', '$\\dfrac{\\pi}{6}$', '$16$'],
              correctAnswer: 0,
              explanation: 'Period $= \\dfrac{2\\pi}{B} = \\dfrac{2\\pi}{\\pi/6} = 2\\pi \\cdot \\dfrac{6}{\\pi} = 12$.',
            },
          ],
        },
      },
      {
        id: 'ste6-worked',
        type: 'text' as const,
        content: `## Solving an Applied Equation

### When is the temperature $T(t) = 10\\sin\\big(\\tfrac{\\pi}{12}t\\big) + 60$ equal to $65^\\circ$? (first time, $t \\ge 0$ hours)

1. **Set up:** $10\\sin\\big(\\tfrac{\\pi}{12}t\\big) + 60 = 65$.
2. **Isolate:** $10\\sin\\big(\\tfrac{\\pi}{12}t\\big) = 5 \\Rightarrow \\sin\\big(\\tfrac{\\pi}{12}t\\big) = \\dfrac{1}{2}$.
3. **Solve the inner angle:** let $u = \\tfrac{\\pi}{12}t$. The first positive solution of $\\sin u = \\dfrac12$ is $u = \\dfrac{\\pi}{6}$.
4. **Back-substitute:** $\\dfrac{\\pi}{12}t = \\dfrac{\\pi}{6} \\Rightarrow t = \\dfrac{\\pi}{6}\\cdot\\dfrac{12}{\\pi} = 2$ hours.

$$\\boxed{t = 2 \\text{ hours}}$$

> ⚠️ **Substitution is key:** solve for the *inside* angle first ($u = \\tfrac{\\pi}{12}t$), then undo it to find $t$.`,
      },
      {
        id: 'ste6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Equation** 🔽

The depth of water at a dock is $D(t) = 4\\sin\\big(\\tfrac{\\pi}{6}t\\big) + 9$ feet, $t$ in hours. You want to know when the depth is $11$ feet.`,
        exercise: {
          dropdowns: [
            { label: 'After isolating, $\\sin\\big(\\tfrac{\\pi}{6}t\\big) = $', options: ['$\\dfrac{1}{2}$', '$2$', '$\\dfrac{11}{9}$', '$\\dfrac{1}{4}$'] },
            { label: 'The first positive inner angle is:', options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{2}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{5\\pi}{6}$'] },
            { label: 'Solving $\\tfrac{\\pi}{6}t = \\tfrac{\\pi}{6}$ gives:', options: ['$t = 1$', '$t = 2$', '$t = 6$', '$t = \\dfrac{1}{2}$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{2}$', '$\\dfrac{\\pi}{6}$', '$t = 1$'],
          hint1: '$4\\sin(\\cdot) + 9 = 11 \\Rightarrow 4\\sin(\\cdot) = 2 \\Rightarrow \\sin(\\cdot) = \\dfrac12$.',
          hint2: 'The smallest positive angle with sine $\\dfrac12$ is the QI reference angle $\\dfrac{\\pi}{6}$.',
          hint3: '$\\tfrac{\\pi}{6}t = \\tfrac{\\pi}{6} \\Rightarrow t = 1$ (multiply both sides by $\\tfrac{6}{\\pi}$).',
          explanation: 'Isolate to $\\sin\\big(\\tfrac{\\pi}{6}t\\big)=\\dfrac12$; first inner angle $\\dfrac{\\pi}{6}$; then $\\tfrac{\\pi}{6}t = \\tfrac{\\pi}{6} \\Rightarrow t = 1$ hour.',
        },
      },
      {
        id: 'ste6-input',
        type: 'input-boxes' as const,
        content: `**Daylight Model** 🧮

Hours of daylight are modeled by $L(t) = 3\\sin\\big(\\tfrac{\\pi}{6}t\\big) + 12$, where $t$ is months after the spring equinox.

**1)** What is the maximum number of daylight hours? $L_{\\max} = \\,?$
**2)** What is the period, in months? $\\,?$
**3)** Solve $\\sin\\big(\\tfrac{\\pi}{6}t\\big) = 1$ for the smallest $t > 0$ (months to the longest day): $t = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '12', '3'],
          hint1: 'Max $= D + |A| = 12 + 3 = 15$ hours.',
          hint2: 'Period $= \\dfrac{2\\pi}{\\pi/6} = 12$ months.',
          hint3: '$\\sin u = 1$ first at $u = \\dfrac{\\pi}{2}$, so $\\tfrac{\\pi}{6}t = \\tfrac{\\pi}{2} \\Rightarrow t = 3$.',
          explanation: '1) $12+3 = 15$ hours.  2) $\\dfrac{2\\pi}{\\pi/6} = 12$ months.  3) $\\sin u = 1 \\Rightarrow u = \\tfrac{\\pi}{2}$; $\\tfrac{\\pi}{6}t = \\tfrac{\\pi}{2} \\Rightarrow t = 3$ months.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'solving-trig-equations',
    sections: [
      {
        id: 'ste7-intro',
        type: 'text' as const,
        content: `# 📐 Solving Trigonometric Equations

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read the unit circle, (2) solve basic equations on $[0, 2\\pi)$, (3) write general solutions, (4) handle algebra and factoring, (5) use inverse trig, and (6) solve applied periodic models. Let's pull it all together.`,
      },
      {
        id: 'ste7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find the size of the angle | reference angle $= \\sin^{-1}/\\cos^{-1}/\\tan^{-1}$ of the **positive** value |
| Find the sign / quadrants | A·S·T·C ("All Students Take Calculus") |
| Place by quadrant | QI $=\\alpha$, QII $=\\pi-\\alpha$, QIII $=\\pi+\\alpha$, QIV $=2\\pi-\\alpha$ |
| All solutions | add $+2\\pi k$ (sin, cos) or $+\\pi k$ (tan) |
| Equation needs algebra | isolate / factor first; never divide away a factor |
| Quadratic in trig | substitute $u$, factor, back-substitute |
| Applied model | set $f(t)=$ value, isolate the sine/cosine, solve the inner angle, undo for $t$ |

> ⚠️ **Top pitfalls:** dropping a quadrant, dropping the $\\pm$ / $+2\\pi k$, dividing both sides by a trig factor (lose solutions), and leaving the calculator in the wrong angle mode.`,
      },
      {
        id: 'ste7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Strategy** 🔽

Match each equation to the **first** thing you should do.`,
        exercise: {
          dropdowns: [
            { label: '$3\\tan\\theta - 3 = 0$', options: ['Isolate: $\\tan\\theta = 1$', 'Factor out $\\tan\\theta$', 'Substitute $u = \\tan^2\\theta$', 'Divide by $\\theta$'] },
            { label: '$2\\sin^2\\theta + \\sin\\theta - 1 = 0$', options: ['Substitute $u = \\sin\\theta$ and factor', 'Take the square root', 'Add $2\\pi k$ immediately', 'Use $\\cos^{-1}$'] },
            { label: '$\\cos\\theta(\\,2\\sin\\theta - 1) = 0$', options: ['Set each factor to $0$', 'Divide both sides by $\\cos\\theta$', 'Square both sides', 'Add the factors'] },
          ],
          correctAnswers: ['Isolate: $\\tan\\theta = 1$', 'Substitute $u = \\sin\\theta$ and factor', 'Set each factor to $0$'],
          hint1: 'A linear trig equation just needs the trig function isolated.',
          hint2: 'A "squared" trig term means it is quadratic — substitute and factor.',
          hint3: 'A product equal to zero means use the zero-product property: each factor $= 0$.',
          explanation: 'Linear → isolate ($\\tan\\theta=1$). Quadratic form → substitute $u=\\sin\\theta$ and factor. Product $=0$ → set each factor to $0$ (never divide one away).',
        },
      },
      {
        id: 'ste7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Solve $2\\sin\\theta - \\sqrt{3} = 0$ on $[0,2\\pi)$. Smaller solution as a coefficient of $\\pi$ (type \`1/3\` for $\\tfrac{\\pi}{3}$): $\\theta = \\,?\\,\\cdot\\pi$
**2)** How many solutions does $\\cos\\theta = -1$ have on $[0, 2\\pi)$?
**3)** For $f(t) = 6\\sin\\big(\\tfrac{\\pi}{4}t\\big) + 10$, find the period.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/3', '1', '8'],
          hint1: '$\\sin\\theta = \\dfrac{\\sqrt3}{2}$, positive → QI & QII; smaller is QI $= \\dfrac{\\pi}{3}$ (coef $\\tfrac13$).',
          hint2: '$\\cos\\theta = -1$ only at $\\theta = \\pi$ — exactly 1 solution.',
          hint3: 'Period $= \\dfrac{2\\pi}{\\pi/4} = 2\\pi\\cdot\\dfrac{4}{\\pi} = 8$.',
          explanation: '1) $\\sin\\theta=\\dfrac{\\sqrt3}{2}\\Rightarrow \\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}$; smaller coef $\\tfrac13$.  2) $\\cos\\theta=-1$ once, at $\\pi$ → 1.  3) $\\dfrac{2\\pi}{\\pi/4}=8$.',
        },
      },
      {
        id: 'ste7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\cos\\theta = \\dfrac{\\sqrt{3}}{2}$ on $[0, 2\\pi)$.',
              options: ['$\\dfrac{\\pi}{6}, \\dfrac{11\\pi}{6}$', '$\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$', '$\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$', '$\\dfrac{5\\pi}{6}, \\dfrac{7\\pi}{6}$'],
              correctAnswer: 0,
              explanation: 'Reference angle $\\cos^{-1}\\dfrac{\\sqrt3}{2} = \\dfrac{\\pi}{6}$; cosine positive → QI & QIV: $\\dfrac{\\pi}{6}$ and $2\\pi - \\dfrac{\\pi}{6} = \\dfrac{11\\pi}{6}$.',
            },
            {
              question: 'What is the general solution of $\\tan\\theta = 1$?',
              options: ['$\\theta = \\dfrac{\\pi}{4} + \\pi k$', '$\\theta = \\dfrac{\\pi}{4} + 2\\pi k$', '$\\theta = \\dfrac{\\pi}{4}, \\dfrac{5\\pi}{4}$ only', '$\\theta = \\dfrac{\\pi}{2} + \\pi k$'],
              correctAnswer: 0,
              explanation: 'Tangent has period $\\pi$, and $\\dfrac{\\pi}{4}$ is a base solution, so one family $\\dfrac{\\pi}{4} + \\pi k$ captures every solution (including $\\dfrac{5\\pi}{4}$ at $k=1$).',
            },
            {
              question: 'Solve $2\\sin^2\\theta = \\sin\\theta$ on $[0, 2\\pi)$.',
              options: [
                '$0, \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}, \\pi$',
                '$\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$',
                '$0, \\pi$',
                '$\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$',
              ],
              correctAnswer: 0,
              explanation: 'Move all to one side: $2\\sin^2\\theta - \\sin\\theta = 0 \\Rightarrow \\sin\\theta(2\\sin\\theta - 1)=0$. $\\sin\\theta=0 \\Rightarrow 0, \\pi$; $\\sin\\theta=\\dfrac12 \\Rightarrow \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$. (Dividing by $\\sin\\theta$ would have lost $0$ and $\\pi$.)',
            },
          ],
        },
      },
    ],
  },
]
