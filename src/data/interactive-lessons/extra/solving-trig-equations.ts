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

The reference angle is the acute angle to the nearest $x$-axis. Write each reference angle as a multiple of $\\pi$ and enter the **coefficient** (type \`1/4\` for $\\frac{\\pi}{4}$).

**1)** A terminal angle of $\\frac{5\\pi}{6}$ → reference angle $= \\,?\\cdot\\pi$
**2)** A terminal angle of $\\frac{7\\pi}{6}$ → reference angle $= \\,?\\cdot\\pi$
**3)** A terminal angle of $\\frac{5\\pi}{3}$ → reference angle $= \\,?\\cdot\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/6', '1/6', '1/3'],
          hint1: 'In QII the reference angle is $\\pi - \\theta$: $\\frac{6\\pi}{6} - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$.',
          hint2: 'In QIII the reference angle is $\\theta - \\pi$: $\\frac{7\\pi}{6} - \\frac{6\\pi}{6} = \\frac{\\pi}{6}$.',
          hint3: 'In QIV the reference angle is $2\\pi - \\theta$: $\\frac{6\\pi}{3} - \\frac{5\\pi}{3} = \\frac{\\pi}{3}$.',
          explanation: '1) $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$.  2) $\\frac{7\\pi}{6} - \\pi = \\frac{\\pi}{6}$.  3) $2\\pi - \\frac{5\\pi}{3} = \\frac{\\pi}{3}$. The reference angle is always between $0$ and $\\frac{\\pi}{2}$.',
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

> 🔑 **The Plan:** To solve $\\sin\\theta = k$ (or $\\cos$, or $\\tan$) on one full turn $[0, 2\\pi)$: find the **reference angle** from the unit circle, then use A·S·T·C to place a solution in **each** quadrant where the sign is correct. The same solutions are the boundaries for trig **inequalities**.`,
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
        id: 'ste2-inequalities',
        type: 'text' as const,
        figure: [
          {
            svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>y = sin theta on [0, 2 pi) with the line y = 1/2; the curve is at or above the line between theta = pi/6 and theta = 5 pi/6, and that arc is shaded</title><g class="fig-accent-2"><polygon points="51.2,69.3 52.3,68 53.5,66.8 54.6,65.5 55.8,64.3 57,63.1 58.1,61.9 59.3,60.8 60.4,59.6 61.6,58.5 62.8,57.5 63.9,56.4 65.1,55.4 66.2,54.4 67.4,53.4 68.5,52.5 69.7,51.6 70.9,50.8 72,49.9 73.2,49.1 74.3,48.3 75.5,47.6 76.7,46.9 77.8,46.3 79,45.6 80.1,45 81.3,44.5 82.4,44 83.6,43.5 84.8,43 85.9,42.6 87.1,42.3 88.2,41.9 89.4,41.6 90.6,41.4 91.7,41.2 92.9,41 94,40.8 95.2,40.7 96.3,40.7 97.5,40.7 98.7,40.7 99.8,40.7 101,40.8 102.1,41 103.3,41.2 104.5,41.4 105.6,41.6 106.8,41.9 107.9,42.3 109.1,42.6 110.2,43 111.4,43.5 112.6,44 113.7,44.5 114.9,45 116,45.6 117.2,46.3 118.4,46.9 119.5,47.6 120.7,48.3 121.8,49.1 123,49.9 124.1,50.8 125.3,51.6 126.5,52.5 127.6,53.4 128.8,54.4 129.9,55.4 131.1,56.4 132.2,57.5 133.4,58.5 134.6,59.6 135.7,60.8 136.9,61.9 138,63.1 139.2,64.3 140.4,65.5 141.5,66.8 142.7,68 143.8,69.3 143.8,69.3 51.2,69.3" fill="currentColor" fill-opacity="0.18" stroke="none"/></g><g class="fig-accent-2"><line x1="28" y1="69.3" x2="306" y2="69.3" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/></g><g stroke="currentColor" stroke-width="1.4"><line x1="22" y1="98" x2="310" y2="98"/><line x1="28" y1="188" x2="28" y2="8"/></g><text x="312" y="102" font-size="12" fill="currentColor">θ</text><text x="34" y="10" font-size="12" fill="currentColor">y</text><line x1="51.2" y1="95" x2="51.2" y2="101" stroke="currentColor" stroke-width="1"/><text x="51.2" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">π/6</text><line x1="143.8" y1="95" x2="143.8" y2="101" stroke="currentColor" stroke-width="1"/><text x="143.8" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">5π/6</text><line x1="167" y1="95" x2="167" y2="101" stroke="currentColor" stroke-width="1"/><text x="167" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">π</text><line x1="306" y1="95" x2="306" y2="101" stroke="currentColor" stroke-width="1"/><text x="306" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">2π</text><line x1="25" y1="155.3" x2="31" y2="155.3" stroke="currentColor" stroke-width="1"/><text x="22" y="158.8" font-size="10.5" fill="currentColor" text-anchor="end">−1</text><line x1="25" y1="69.3" x2="31" y2="69.3" stroke="currentColor" stroke-width="1"/><text x="22" y="72.8" font-size="10.5" fill="currentColor" text-anchor="end">1/2</text><line x1="25" y1="40.7" x2="31" y2="40.7" stroke="currentColor" stroke-width="1"/><text x="22" y="44.2" font-size="10.5" fill="currentColor" text-anchor="end">1</text><g class="fig-accent"><path d="M 28 98 L 29.4 96.2 L 30.8 94.4 L 32.2 92.6 L 33.6 90.8 L 35 89 L 36.3 87.3 L 37.7 85.5 L 39.1 83.7 L 40.5 82 L 41.9 80.3 L 43.3 78.6 L 44.7 76.9 L 46.1 75.2 L 47.5 73.6 L 48.8 72 L 50.2 70.4 L 51.6 68.8 L 53 67.3 L 54.4 65.8 L 55.8 64.3 L 57.2 62.9 L 58.6 61.5 L 60 60.1 L 61.4 58.8 L 62.8 57.5 L 64.1 56.2 L 65.5 55 L 66.9 53.8 L 68.3 52.7 L 69.7 51.6 L 71.1 50.6 L 72.5 49.6 L 73.9 48.7 L 75.3 47.8 L 76.7 46.9 L 78 46.1 L 79.4 45.4 L 80.8 44.7 L 82.2 44.1 L 83.6 43.5 L 85 42.9 L 86.4 42.5 L 87.8 42 L 89.2 41.7 L 90.6 41.4 L 91.9 41.1 L 93.3 40.9 L 94.7 40.8 L 96.1 40.7 L 97.5 40.7 L 98.9 40.7 L 100.3 40.8 L 101.7 40.9 L 103.1 41.1 L 104.5 41.4 L 105.8 41.7 L 107.2 42 L 108.6 42.5 L 110 42.9 L 111.4 43.5 L 112.8 44.1 L 114.2 44.7 L 115.6 45.4 L 117 46.1 L 118.4 46.9 L 119.7 47.8 L 121.1 48.7 L 122.5 49.6 L 123.9 50.6 L 125.3 51.6 L 126.7 52.7 L 128.1 53.8 L 129.5 55 L 130.9 56.2 L 132.2 57.5 L 133.6 58.8 L 135 60.1 L 136.4 61.5 L 137.8 62.9 L 139.2 64.3 L 140.6 65.8 L 142 67.3 L 143.4 68.8 L 144.8 70.4 L 146.1 72 L 147.5 73.6 L 148.9 75.2 L 150.3 76.9 L 151.7 78.6 L 153.1 80.3 L 154.5 82 L 155.9 83.7 L 157.3 85.5 L 158.7 87.3 L 160 89 L 161.4 90.8 L 162.8 92.6 L 164.2 94.4 L 165.6 96.2 L 167 98 L 168.4 99.8 L 169.8 101.6 L 171.2 103.4 L 172.6 105.2 L 174 107 L 175.3 108.7 L 176.7 110.5 L 178.1 112.3 L 179.5 114 L 180.9 115.7 L 182.3 117.4 L 183.7 119.1 L 185.1 120.8 L 186.5 122.4 L 187.9 124 L 189.2 125.6 L 190.6 127.2 L 192 128.7 L 193.4 130.2 L 194.8 131.7 L 196.2 133.1 L 197.6 134.5 L 199 135.9 L 200.4 137.2 L 201.7 138.5 L 203.1 139.8 L 204.5 141 L 205.9 142.2 L 207.3 143.3 L 208.7 144.4 L 210.1 145.4 L 211.5 146.4 L 212.9 147.3 L 214.3 148.2 L 215.7 149.1 L 217 149.9 L 218.4 150.6 L 219.8 151.3 L 221.2 151.9 L 222.6 152.5 L 224 153.1 L 225.4 153.5 L 226.8 154 L 228.2 154.3 L 229.5 154.6 L 230.9 154.9 L 232.3 155.1 L 233.7 155.2 L 235.1 155.3 L 236.5 155.3 L 237.9 155.3 L 239.3 155.2 L 240.7 155.1 L 242.1 154.9 L 243.5 154.6 L 244.8 154.3 L 246.2 154 L 247.6 153.5 L 249 153.1 L 250.4 152.5 L 251.8 151.9 L 253.2 151.3 L 254.6 150.6 L 256 149.9 L 257.3 149.1 L 258.7 148.2 L 260.1 147.3 L 261.5 146.4 L 262.9 145.4 L 264.3 144.4 L 265.7 143.3 L 267.1 142.2 L 268.5 141 L 269.9 139.8 L 271.2 138.5 L 272.6 137.2 L 274 135.9 L 275.4 134.5 L 276.8 133.1 L 278.2 131.7 L 279.6 130.2 L 281 128.7 L 282.4 127.2 L 283.8 125.6 L 285.2 124 L 286.5 122.4 L 287.9 120.8 L 289.3 119.1 L 290.7 117.4 L 292.1 115.7 L 293.5 114 L 294.9 112.3 L 296.3 110.5 L 297.7 108.7 L 299.1 107 L 300.4 105.2 L 301.8 103.4 L 303.2 101.6 L 304.6 99.8 L 306 98" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent-2"><circle cx="51.2" cy="69.3" r="4" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="143.8" cy="69.3" r="4" fill="currentColor"/></g><g class="fig-accent"><text x="32.4" y="23.5" font-size="11.5" fill="currentColor" text-anchor="start">y = sin θ</text></g><g class="fig-accent-2"><text x="97.5" y="34.7" font-size="10.5" fill="currentColor" text-anchor="middle">sin θ ≥ 1/2</text></g></svg>',
            alt: 'Graph of y = sin theta on [0, 2 pi) with the dashed line y = 1/2. The curve meets the line at theta = pi/6 and theta = 5 pi/6 (filled dots), and the arc of the curve at or above the line, between those two angles, is shaded.',
            caption: '$\\sin\\theta \\ge \\frac{1}{2}$ exactly on the shaded arc, $\\frac{\\pi}{6} \\le \\theta \\le \\frac{5\\pi}{6}$.',
            size: 'sm' as const,
          },
          {
            svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>y = cos theta on [0, 2 pi) with the line y = -1/2; the curve is below the line strictly between theta = 2 pi/3 and theta = 4 pi/3 (open circles at the boundaries), and that arc is shaded</title><g class="fig-accent-2"><polygon points="120.7,126.7 121.8,128 123,129.2 124.1,130.5 125.3,131.7 126.5,132.9 127.6,134.1 128.8,135.2 129.9,136.4 131.1,137.5 132.2,138.5 133.4,139.6 134.6,140.6 135.7,141.6 136.9,142.6 138,143.5 139.2,144.4 140.4,145.2 141.5,146.1 142.7,146.9 143.8,147.7 145,148.4 146.1,149.1 147.3,149.7 148.5,150.4 149.6,151 150.8,151.5 151.9,152 153.1,152.5 154.3,153 155.4,153.4 156.6,153.7 157.7,154.1 158.9,154.4 160,154.6 161.2,154.8 162.4,155 163.5,155.2 164.7,155.3 165.8,155.3 167,155.3 168.2,155.3 169.3,155.3 170.5,155.2 171.6,155 172.8,154.8 174,154.6 175.1,154.4 176.3,154.1 177.4,153.7 178.6,153.4 179.7,153 180.9,152.5 182.1,152 183.2,151.5 184.4,151 185.5,150.4 186.7,149.7 187.8,149.1 189,148.4 190.2,147.7 191.3,146.9 192.5,146.1 193.6,145.2 194.8,144.4 196,143.5 197.1,142.6 198.3,141.6 199.4,140.6 200.6,139.6 201.7,138.5 202.9,137.5 204.1,136.4 205.2,135.2 206.4,134.1 207.5,132.9 208.7,131.7 209.9,130.5 211,129.2 212.2,128 213.3,126.7 213.3,126.7 120.7,126.7" fill="currentColor" fill-opacity="0.18" stroke="none"/></g><g class="fig-accent-2"><line x1="28" y1="126.7" x2="306" y2="126.7" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/></g><g stroke="currentColor" stroke-width="1.4"><line x1="22" y1="98" x2="310" y2="98"/><line x1="28" y1="188" x2="28" y2="8"/></g><text x="312" y="102" font-size="12" fill="currentColor">θ</text><text x="34" y="10" font-size="12" fill="currentColor">y</text><line x1="120.7" y1="95" x2="120.7" y2="101" stroke="currentColor" stroke-width="1"/><text x="120.7" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">2π/3</text><line x1="167" y1="95" x2="167" y2="101" stroke="currentColor" stroke-width="1"/><text x="167" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">π</text><line x1="213.3" y1="95" x2="213.3" y2="101" stroke="currentColor" stroke-width="1"/><text x="213.3" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">4π/3</text><line x1="306" y1="95" x2="306" y2="101" stroke="currentColor" stroke-width="1"/><text x="306" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">2π</text><line x1="25" y1="155.3" x2="31" y2="155.3" stroke="currentColor" stroke-width="1"/><text x="22" y="158.8" font-size="10.5" fill="currentColor" text-anchor="end">−1</text><line x1="25" y1="126.7" x2="31" y2="126.7" stroke="currentColor" stroke-width="1"/><text x="22" y="130.2" font-size="10.5" fill="currentColor" text-anchor="end">−1/2</text><line x1="25" y1="40.7" x2="31" y2="40.7" stroke="currentColor" stroke-width="1"/><text x="22" y="44.2" font-size="10.5" fill="currentColor" text-anchor="end">1</text><g class="fig-accent"><path d="M 28 40.7 L 29.4 40.7 L 30.8 40.8 L 32.2 40.9 L 33.6 41.1 L 35 41.4 L 36.3 41.7 L 37.7 42 L 39.1 42.5 L 40.5 42.9 L 41.9 43.5 L 43.3 44.1 L 44.7 44.7 L 46.1 45.4 L 47.5 46.1 L 48.8 46.9 L 50.2 47.8 L 51.6 48.7 L 53 49.6 L 54.4 50.6 L 55.8 51.6 L 57.2 52.7 L 58.6 53.8 L 60 55 L 61.4 56.2 L 62.8 57.5 L 64.1 58.8 L 65.5 60.1 L 66.9 61.5 L 68.3 62.9 L 69.7 64.3 L 71.1 65.8 L 72.5 67.3 L 73.9 68.8 L 75.3 70.4 L 76.7 72 L 78 73.6 L 79.4 75.2 L 80.8 76.9 L 82.2 78.6 L 83.6 80.3 L 85 82 L 86.4 83.7 L 87.8 85.5 L 89.2 87.3 L 90.6 89 L 91.9 90.8 L 93.3 92.6 L 94.7 94.4 L 96.1 96.2 L 97.5 98 L 98.9 99.8 L 100.3 101.6 L 101.7 103.4 L 103.1 105.2 L 104.5 107 L 105.8 108.7 L 107.2 110.5 L 108.6 112.3 L 110 114 L 111.4 115.7 L 112.8 117.4 L 114.2 119.1 L 115.6 120.8 L 117 122.4 L 118.4 124 L 119.7 125.6 L 121.1 127.2 L 122.5 128.7 L 123.9 130.2 L 125.3 131.7 L 126.7 133.1 L 128.1 134.5 L 129.5 135.9 L 130.9 137.2 L 132.2 138.5 L 133.6 139.8 L 135 141 L 136.4 142.2 L 137.8 143.3 L 139.2 144.4 L 140.6 145.4 L 142 146.4 L 143.4 147.3 L 144.8 148.2 L 146.1 149.1 L 147.5 149.9 L 148.9 150.6 L 150.3 151.3 L 151.7 151.9 L 153.1 152.5 L 154.5 153.1 L 155.9 153.5 L 157.3 154 L 158.7 154.3 L 160 154.6 L 161.4 154.9 L 162.8 155.1 L 164.2 155.2 L 165.6 155.3 L 167 155.3 L 168.4 155.3 L 169.8 155.2 L 171.2 155.1 L 172.6 154.9 L 174 154.6 L 175.3 154.3 L 176.7 154 L 178.1 153.5 L 179.5 153.1 L 180.9 152.5 L 182.3 151.9 L 183.7 151.3 L 185.1 150.6 L 186.5 149.9 L 187.9 149.1 L 189.2 148.2 L 190.6 147.3 L 192 146.4 L 193.4 145.4 L 194.8 144.4 L 196.2 143.3 L 197.6 142.2 L 199 141 L 200.4 139.8 L 201.7 138.5 L 203.1 137.2 L 204.5 135.9 L 205.9 134.5 L 207.3 133.1 L 208.7 131.7 L 210.1 130.2 L 211.5 128.7 L 212.9 127.2 L 214.3 125.6 L 215.7 124 L 217 122.4 L 218.4 120.8 L 219.8 119.1 L 221.2 117.4 L 222.6 115.7 L 224 114 L 225.4 112.3 L 226.8 110.5 L 228.2 108.7 L 229.5 107 L 230.9 105.2 L 232.3 103.4 L 233.7 101.6 L 235.1 99.8 L 236.5 98 L 237.9 96.2 L 239.3 94.4 L 240.7 92.6 L 242.1 90.8 L 243.5 89 L 244.8 87.3 L 246.2 85.5 L 247.6 83.7 L 249 82 L 250.4 80.3 L 251.8 78.6 L 253.2 76.9 L 254.6 75.2 L 256 73.6 L 257.3 72 L 258.7 70.4 L 260.1 68.8 L 261.5 67.3 L 262.9 65.8 L 264.3 64.3 L 265.7 62.9 L 267.1 61.5 L 268.5 60.1 L 269.9 58.8 L 271.2 57.5 L 272.6 56.2 L 274 55 L 275.4 53.8 L 276.8 52.7 L 278.2 51.6 L 279.6 50.6 L 281 49.6 L 282.4 48.7 L 283.8 47.8 L 285.2 46.9 L 286.5 46.1 L 287.9 45.4 L 289.3 44.7 L 290.7 44.1 L 292.1 43.5 L 293.5 42.9 L 294.9 42.5 L 296.3 42 L 297.7 41.7 L 299.1 41.4 L 300.4 41.1 L 301.8 40.9 L 303.2 40.8 L 304.6 40.7 L 306 40.7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-accent-2"><circle class="fig-bg" cx="120.7" cy="126.7" r="4" stroke="currentColor" stroke-width="2"/></g><g class="fig-accent-2"><circle class="fig-bg" cx="213.3" cy="126.7" r="4" stroke="currentColor" stroke-width="2"/></g><g class="fig-accent"><text x="32.4" y="23.5" font-size="11.5" fill="currentColor" text-anchor="start">y = cos θ</text></g><g class="fig-accent-2"><text x="167" y="169.3" font-size="10.5" fill="currentColor" text-anchor="middle">cos θ &lt; −1/2</text></g></svg>',
            alt: 'Graph of y = cos theta on [0, 2 pi) with the dashed line y = -1/2. The curve meets the line at theta = 2 pi/3 and theta = 4 pi/3 (open circles), and the arc of the curve below the line, strictly between those two angles, is shaded.',
            caption: '$\\cos\\theta < -\\frac{1}{2}$ exactly on the shaded arc, $\\frac{2\\pi}{3} < \\theta < \\frac{4\\pi}{3}$ (open circles: boundaries excluded).',
            size: 'sm' as const,
          },
        ],
        content: `## From Equations to Inequalities

To solve an inequality such as $\\sin\\theta \\ge k$ on $[0, 2\\pi)$, solve the **equation** first. Its solutions are the boundary angles that split $[0, 2\\pi)$ into intervals.

1. **Boundaries:** solve $\\sin\\theta = k$.
2. **Test:** pick one angle inside each interval and check the inequality (or read the graph above: the solution is where the curve is above or below the line; or read the unit circle: $\\sin\\theta$ is the $y$-coordinate, $\\cos\\theta$ is the $x$-coordinate).
3. **Write the answer:** keep the intervals that work. Include the boundary angles only for $\\le$ or $\\ge$.

### Example 1: $\\sin\\theta \\ge \\dfrac{1}{2}$ on $[0, 2\\pi)$

Boundaries: $\\dfrac{\\pi}{6}$ and $\\dfrac{5\\pi}{6}$. Test $\\dfrac{\\pi}{2}$: $\\sin\\dfrac{\\pi}{2} = 1 \\ge \\dfrac12$ ✓. Test $\\pi$: $\\sin\\pi = 0$ ✗.

$$\\boxed{\\frac{\\pi}{6} \\le \\theta \\le \\frac{5\\pi}{6}}$$

### Example 2: $\\cos\\theta < -\\dfrac{1}{2}$ on $[0, 2\\pi)$

Boundaries: $\\dfrac{2\\pi}{3}$ and $\\dfrac{4\\pi}{3}$. Test $\\pi$: $\\cos\\pi = -1 < -\\dfrac12$ ✓. The inequality is strict, so the boundaries are excluded.

$$\\boxed{\\frac{2\\pi}{3} < \\theta < \\frac{4\\pi}{3}}$$

> ⚠️ **Tangent:** the angles where $\\tan\\theta$ is undefined ($\\dfrac{\\pi}{2}$ and $\\dfrac{3\\pi}{2}$) also split the circle. For $\\tan\\theta > 1$ on $[0, 2\\pi)$ the answer is $\\dfrac{\\pi}{4} < \\theta < \\dfrac{\\pi}{2}$ or $\\dfrac{5\\pi}{4} < \\theta < \\dfrac{3\\pi}{2}$.`,
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
            {
              question: 'Solve $\\cos\\theta \\ge \\dfrac{\\sqrt{2}}{2}$ on $[0, 2\\pi)$.',
              options: ['$\\left[0, \\dfrac{\\pi}{4}\\right] \\cup \\left[\\dfrac{7\\pi}{4}, 2\\pi\\right)$', '$\\left[\\dfrac{\\pi}{4}, \\dfrac{7\\pi}{4}\\right]$', '$\\left[\\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}\\right]$', '$\\left(0, \\dfrac{\\pi}{4}\\right) \\cup \\left(\\dfrac{7\\pi}{4}, 2\\pi\\right)$'],
              correctAnswer: 0,
              explanation: 'The boundaries are $\\dfrac{\\pi}{4}$ and $\\dfrac{7\\pi}{4}$. The $x$-coordinate is at least $\\dfrac{\\sqrt2}{2}$ near $\\theta = 0$, so keep $\\left[0, \\dfrac{\\pi}{4}\\right]$ and $\\left[\\dfrac{7\\pi}{4}, 2\\pi\\right)$, with the boundaries included for $\\ge$. The middle interval is where $\\cos\\theta \\le \\dfrac{\\sqrt2}{2}$, $\\left[\\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}\\right]$ treats it like a sine inequality, and open intervals drop the boundary angles and $\\theta = 0$.',
            },
          ],
        },
      },
      {
        id: 'ste2-input',
        type: 'input-boxes' as const,
        content: `**Count & Place** 🧮

Solve $\\cos\\theta = \\dfrac{\\sqrt{2}}{2}$ on $[0, 2\\pi)$. Give each solution as a multiple of $\\pi$ — enter the **coefficient** (e.g. type \`1/3\` for $\\tfrac{\\pi}{3}$).

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
              explanation: 'Cosine has period $2\\pi$, so all solutions repeat every $2\\pi$: add $2\\pi k$ for integer $k$. (The AP exam measures angles in radians, so the period is $2\\pi$, not $360$.)',
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
          hint2: 'Cosine\'s two solutions in one turn are not $\\pi$ apart (tangent\'s are), so you need BOTH base solutions, each with $+2\\pi k$.',
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
      {
        id: 'ste3-multiple-angle',
        type: 'text' as const,
        figure: {
          svg: '<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>y = sin 2 theta on [0, 2 pi) with y = sin theta dashed for comparison; the line y = root 3 over 2 meets y = sin 2 theta four times, at pi/6, pi/3, 7 pi/6 and 4 pi/3</title><g class="fig-accent-2"><line x1="28" y1="48.3" x2="326" y2="48.3" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/></g><g stroke="currentColor" stroke-width="1.4"><line x1="22" y1="98" x2="330" y2="98"/><line x1="28" y1="188" x2="28" y2="8"/></g><text x="332" y="102" font-size="12" fill="currentColor">θ</text><text x="34" y="10" font-size="12" fill="currentColor">y</text><line x1="52.8" y1="95" x2="52.8" y2="101" stroke="currentColor" stroke-width="1"/><text x="52.8" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">π/6</text><line x1="77.7" y1="95" x2="77.7" y2="101" stroke="currentColor" stroke-width="1"/><text x="77.7" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">π/3</text><line x1="102.5" y1="95" x2="102.5" y2="101" stroke="currentColor" stroke-width="1"/><text x="102.5" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">π/2</text><line x1="177" y1="95" x2="177" y2="101" stroke="currentColor" stroke-width="1"/><text x="177" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">π</text><line x1="201.8" y1="95" x2="201.8" y2="101" stroke="currentColor" stroke-width="1"/><text x="201.8" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">7π/6</text><line x1="226.7" y1="95" x2="226.7" y2="101" stroke="currentColor" stroke-width="1"/><text x="226.7" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">4π/3</text><line x1="251.5" y1="95" x2="251.5" y2="101" stroke="currentColor" stroke-width="1"/><text x="251.5" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">3π/2</text><line x1="326" y1="95" x2="326" y2="101" stroke="currentColor" stroke-width="1"/><text x="326" y="112" font-size="10.5" fill="currentColor" text-anchor="middle">2π</text><line x1="25" y1="155.3" x2="31" y2="155.3" stroke="currentColor" stroke-width="1"/><text x="22" y="158.8" font-size="10.5" fill="currentColor" text-anchor="end">−1</text><line x1="25" y1="40.7" x2="31" y2="40.7" stroke="currentColor" stroke-width="1"/><text x="22" y="44.2" font-size="10.5" fill="currentColor" text-anchor="end">1</text><g class="fig-accent"><path d="M 28 98 L 29.2 95 L 30.5 92 L 31.7 89 L 33 86.1 L 34.2 83.2 L 35.5 80.3 L 36.7 77.5 L 37.9 74.7 L 39.2 72 L 40.4 69.3 L 41.7 66.8 L 42.9 64.3 L 44.1 61.9 L 45.4 59.6 L 46.6 57.5 L 47.9 55.4 L 49.1 53.4 L 50.3 51.6 L 51.6 49.9 L 52.8 48.3 L 54.1 46.9 L 55.3 45.6 L 56.6 44.5 L 57.8 43.5 L 59 42.6 L 60.3 41.9 L 61.5 41.4 L 62.8 41 L 64 40.7 L 65.2 40.7 L 66.5 40.7 L 67.7 41 L 69 41.4 L 70.2 41.9 L 71.5 42.6 L 72.7 43.5 L 73.9 44.5 L 75.2 45.6 L 76.4 46.9 L 77.7 48.3 L 78.9 49.9 L 80.2 51.6 L 81.4 53.4 L 82.6 55.4 L 83.9 57.5 L 85.1 59.6 L 86.4 61.9 L 87.6 64.3 L 88.8 66.8 L 90.1 69.3 L 91.3 72 L 92.6 74.7 L 93.8 77.5 L 95 80.3 L 96.3 83.2 L 97.5 86.1 L 98.8 89 L 100 92 L 101.3 95 L 102.5 98 L 103.7 101 L 105 104 L 106.2 107 L 107.5 109.9 L 108.7 112.8 L 110 115.7 L 111.2 118.5 L 112.4 121.3 L 113.7 124 L 114.9 126.7 L 116.2 129.2 L 117.4 131.7 L 118.6 134.1 L 119.9 136.4 L 121.1 138.5 L 122.4 140.6 L 123.6 142.6 L 124.9 144.4 L 126.1 146.1 L 127.3 147.7 L 128.6 149.1 L 129.8 150.4 L 131.1 151.5 L 132.3 152.5 L 133.5 153.4 L 134.8 154.1 L 136 154.6 L 137.3 155 L 138.5 155.3 L 139.8 155.3 L 141 155.3 L 142.2 155 L 143.5 154.6 L 144.7 154.1 L 146 153.4 L 147.2 152.5 L 148.4 151.5 L 149.7 150.4 L 150.9 149.1 L 152.2 147.7 L 153.4 146.1 L 154.6 144.4 L 155.9 142.6 L 157.1 140.6 L 158.4 138.5 L 159.6 136.4 L 160.9 134.1 L 162.1 131.7 L 163.3 129.2 L 164.6 126.7 L 165.8 124 L 167.1 121.3 L 168.3 118.5 L 169.5 115.7 L 170.8 112.8 L 172 109.9 L 173.3 107 L 174.5 104 L 175.8 101 L 177 98 L 178.2 95 L 179.5 92 L 180.7 89 L 182 86.1 L 183.2 83.2 L 184.5 80.3 L 185.7 77.5 L 186.9 74.7 L 188.2 72 L 189.4 69.3 L 190.7 66.8 L 191.9 64.3 L 193.1 61.9 L 194.4 59.6 L 195.6 57.5 L 196.9 55.4 L 198.1 53.4 L 199.3 51.6 L 200.6 49.9 L 201.8 48.3 L 203.1 46.9 L 204.3 45.6 L 205.6 44.5 L 206.8 43.5 L 208 42.6 L 209.3 41.9 L 210.5 41.4 L 211.8 41 L 213 40.7 L 214.2 40.7 L 215.5 40.7 L 216.7 41 L 218 41.4 L 219.2 41.9 L 220.5 42.6 L 221.7 43.5 L 222.9 44.5 L 224.2 45.6 L 225.4 46.9 L 226.7 48.3 L 227.9 49.9 L 229.2 51.6 L 230.4 53.4 L 231.6 55.4 L 232.9 57.5 L 234.1 59.6 L 235.4 61.9 L 236.6 64.3 L 237.8 66.8 L 239.1 69.3 L 240.3 72 L 241.6 74.7 L 242.8 77.5 L 244 80.3 L 245.3 83.2 L 246.5 86.1 L 247.8 89 L 249 92 L 250.3 95 L 251.5 98 L 252.7 101 L 254 104 L 255.2 107 L 256.5 109.9 L 257.7 112.8 L 259 115.7 L 260.2 118.5 L 261.4 121.3 L 262.7 124 L 263.9 126.7 L 265.2 129.2 L 266.4 131.7 L 267.6 134.1 L 268.9 136.4 L 270.1 138.5 L 271.4 140.6 L 272.6 142.6 L 273.9 144.4 L 275.1 146.1 L 276.3 147.7 L 277.6 149.1 L 278.8 150.4 L 280.1 151.5 L 281.3 152.5 L 282.5 153.4 L 283.8 154.1 L 285 154.6 L 286.3 155 L 287.5 155.3 L 288.8 155.3 L 290 155.3 L 291.2 155 L 292.5 154.6 L 293.7 154.1 L 295 153.4 L 296.2 152.5 L 297.4 151.5 L 298.7 150.4 L 299.9 149.1 L 301.2 147.7 L 302.4 146.1 L 303.7 144.4 L 304.9 142.6 L 306.1 140.6 L 307.4 138.5 L 308.6 136.4 L 309.9 134.1 L 311.1 131.7 L 312.3 129.2 L 313.6 126.7 L 314.8 124 L 316.1 121.3 L 317.3 118.5 L 318.6 115.7 L 319.8 112.8 L 321 109.9 L 322.3 107 L 323.5 104 L 324.8 101 L 326 98" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></g><g class="fig-muted"><path d="M 28 98 L 29.5 96.2 L 31 94.4 L 32.5 92.6 L 34 90.8 L 35.5 89 L 36.9 87.3 L 38.4 85.5 L 39.9 83.7 L 41.4 82 L 42.9 80.3 L 44.4 78.6 L 45.9 76.9 L 47.4 75.2 L 48.9 73.6 L 50.3 72 L 51.8 70.4 L 53.3 68.8 L 54.8 67.3 L 56.3 65.8 L 57.8 64.3 L 59.3 62.9 L 60.8 61.5 L 62.3 60.1 L 63.8 58.8 L 65.2 57.5 L 66.7 56.2 L 68.2 55 L 69.7 53.8 L 71.2 52.7 L 72.7 51.6 L 74.2 50.6 L 75.7 49.6 L 77.2 48.7 L 78.7 47.8 L 80.2 46.9 L 81.6 46.1 L 83.1 45.4 L 84.6 44.7 L 86.1 44.1 L 87.6 43.5 L 89.1 42.9 L 90.6 42.5 L 92.1 42 L 93.6 41.7 L 95 41.4 L 96.5 41.1 L 98 40.9 L 99.5 40.8 L 101 40.7 L 102.5 40.7 L 104 40.7 L 105.5 40.8 L 107 40.9 L 108.5 41.1 L 110 41.4 L 111.4 41.7 L 112.9 42 L 114.4 42.5 L 115.9 42.9 L 117.4 43.5 L 118.9 44.1 L 120.4 44.7 L 121.9 45.4 L 123.4 46.1 L 124.9 46.9 L 126.3 47.8 L 127.8 48.7 L 129.3 49.6 L 130.8 50.6 L 132.3 51.6 L 133.8 52.7 L 135.3 53.8 L 136.8 55 L 138.3 56.2 L 139.8 57.5 L 141.2 58.8 L 142.7 60.1 L 144.2 61.5 L 145.7 62.9 L 147.2 64.3 L 148.7 65.8 L 150.2 67.3 L 151.7 68.8 L 153.2 70.4 L 154.6 72 L 156.1 73.6 L 157.6 75.2 L 159.1 76.9 L 160.6 78.6 L 162.1 80.3 L 163.6 82 L 165.1 83.7 L 166.6 85.5 L 168.1 87.3 L 169.5 89 L 171 90.8 L 172.5 92.6 L 174 94.4 L 175.5 96.2 L 177 98 L 178.5 99.8 L 180 101.6 L 181.5 103.4 L 183 105.2 L 184.5 107 L 185.9 108.7 L 187.4 110.5 L 188.9 112.3 L 190.4 114 L 191.9 115.7 L 193.4 117.4 L 194.9 119.1 L 196.4 120.8 L 197.9 122.4 L 199.4 124 L 200.8 125.6 L 202.3 127.2 L 203.8 128.7 L 205.3 130.2 L 206.8 131.7 L 208.3 133.1 L 209.8 134.5 L 211.3 135.9 L 212.8 137.2 L 214.2 138.5 L 215.7 139.8 L 217.2 141 L 218.7 142.2 L 220.2 143.3 L 221.7 144.4 L 223.2 145.4 L 224.7 146.4 L 226.2 147.3 L 227.7 148.2 L 229.2 149.1 L 230.6 149.9 L 232.1 150.6 L 233.6 151.3 L 235.1 151.9 L 236.6 152.5 L 238.1 153.1 L 239.6 153.5 L 241.1 154 L 242.6 154.3 L 244 154.6 L 245.5 154.9 L 247 155.1 L 248.5 155.2 L 250 155.3 L 251.5 155.3 L 253 155.3 L 254.5 155.2 L 256 155.1 L 257.5 154.9 L 259 154.6 L 260.4 154.3 L 261.9 154 L 263.4 153.5 L 264.9 153.1 L 266.4 152.5 L 267.9 151.9 L 269.4 151.3 L 270.9 150.6 L 272.4 149.9 L 273.8 149.1 L 275.3 148.2 L 276.8 147.3 L 278.3 146.4 L 279.8 145.4 L 281.3 144.4 L 282.8 143.3 L 284.3 142.2 L 285.8 141 L 287.3 139.8 L 288.7 138.5 L 290.2 137.2 L 291.7 135.9 L 293.2 134.5 L 294.7 133.1 L 296.2 131.7 L 297.7 130.2 L 299.2 128.7 L 300.7 127.2 L 302.2 125.6 L 303.7 124 L 305.1 122.4 L 306.6 120.8 L 308.1 119.1 L 309.6 117.4 L 311.1 115.7 L 312.6 114 L 314.1 112.3 L 315.6 110.5 L 317.1 108.7 L 318.6 107 L 320 105.2 L 321.5 103.4 L 323 101.6 L 324.5 99.8 L 326 98" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" stroke-dasharray="3 3"/></g><g class="fig-accent-2"><circle cx="52.8" cy="48.3" r="4" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="77.7" cy="48.3" r="4" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="201.8" cy="48.3" r="4" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="226.7" cy="48.3" r="4" fill="currentColor"/></g><g class="fig-accent"><text x="31.8" y="22.3" font-size="11.5" fill="currentColor" text-anchor="start">y = sin 2θ</text></g><g class="fig-accent-2"><text x="252.5" y="42.3" font-size="10.5" fill="currentColor" text-anchor="start">y = √3/2</text></g><g class="fig-muted"><text x="258.6" y="161.1" font-size="10" fill="currentColor" text-anchor="start">dashed: y = sin θ</text></g></svg>',
          alt: 'Graph of y = sin 2 theta on [0, 2 pi), which completes two full waves, with y = sin theta drawn dashed for comparison. The dashed horizontal line y = root 3 over 2 meets y = sin 2 theta at four points: theta = pi/6, pi/3, 7 pi/6 and 4 pi/3.',
          caption: 'Figure 1. $y = \\sin 2\\theta$ has period $\\pi$, so the line $y = \\frac{\\sqrt{3}}{2}$ meets it **four** times on $[0, 2\\pi)$, twice as often as it meets $y = \\sin\\theta$.',
        },
        content: `## Multiple Angles: $\\sin(b\\theta) = k$ and Shifted Arguments

When the argument is $2\\theta$, $3x$, or $x - \\frac{\\pi}{4}$ instead of a bare $\\theta$, substitute $u$ for the whole argument, solve for $u$ with the **general solution**, then undo the substitution. Because $\\sin(b\\theta)$ has period $\\frac{2\\pi}{b}$ (and $\\tan(b\\theta)$ has period $\\frac{\\pi}{b}$), there are **more** solutions per turn: $b$ times as many.

### Example: Solve $\\sin 2\\theta = \\dfrac{\\sqrt3}{2}$ on $[0, 2\\pi)$

Let $u = 2\\theta$. As $\\theta$ runs over $[0, 2\\pi)$, $u$ runs over $[0, 4\\pi)$, **two** full turns, so list the $u$-solutions over two turns:

$$u = \\frac{\\pi}{3},\\ \\frac{2\\pi}{3},\\ \\frac{7\\pi}{3},\\ \\frac{8\\pi}{3}$$

Divide by $2$: $\\theta = \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{3},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{4\\pi}{3}$ — four solutions, as Figure 1 shows.

**General solution:** from $u = \\frac{\\pi}{3} + 2\\pi k$ or $u = \\frac{2\\pi}{3} + 2\\pi k$, dividing by $2$ gives

$$\\theta = \\frac{\\pi}{6} + \\pi k \\quad\\text{or}\\quad \\theta = \\frac{\\pi}{3} + \\pi k$$

The period added is $\\pi$, because that is the period of $\\sin 2\\theta$.

### Example: Solve $\\cos\\!\\left(x - \\dfrac{\\pi}{4}\\right) = 0$ for all $x$

$\\cos u = 0$ at $u = \\frac{\\pi}{2} + \\pi k$ (the two base angles $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$ are $\\pi$ apart, so one family covers both). Then $x = u + \\frac{\\pi}{4} = \\frac{3\\pi}{4} + \\pi k$.

> ⚠️ Two traps: (1) solving for $u$ on $[0, 2\\pi)$ only, which drops the second turn and loses half the solutions; (2) dividing the **base angles** by $b$ but forgetting to divide the **period** too. For $\\tan 3x = 1$, the period of $\\tan 3x$ is $\\frac{\\pi}{3}$, so the solutions are $x = \\frac{\\pi}{12} + \\frac{\\pi}{3}k$.`,
      },
      {
        id: 'ste3-multi-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which gives every solution of $\\cos\\!\\left(x - \\dfrac{\\pi}{4}\\right) = 0$? ($k$ is any integer.)',
              options: ['$x = \\dfrac{3\\pi}{4} + \\pi k$', '$x = \\dfrac{\\pi}{4} + \\pi k$', '$x = \\dfrac{3\\pi}{4} + 2\\pi k$', '$x = \\dfrac{\\pi}{2} + \\pi k$'],
              correctAnswer: 0,
              explanation: 'With $u = x - \\dfrac{\\pi}{4}$, $\\cos u = 0$ at $u = \\dfrac{\\pi}{2} + \\pi k$, so $x = \\dfrac{\\pi}{2} + \\dfrac{\\pi}{4} + \\pi k = \\dfrac{3\\pi}{4} + \\pi k$. Subtracting the shift instead of adding gives $\\dfrac{\\pi}{4} + \\pi k$, using $2\\pi k$ misses every other solution, and $\\dfrac{\\pi}{2} + \\pi k$ forgets to undo the shift.',
            },
            {
              question: 'Which gives every solution of $\\sin 2\\theta = \\dfrac{1}{2}$? ($k$ is any integer.)',
              options: ['$\\theta = \\dfrac{\\pi}{12} + \\pi k$ or $\\theta = \\dfrac{5\\pi}{12} + \\pi k$', '$\\theta = \\dfrac{\\pi}{12} + 2\\pi k$ or $\\theta = \\dfrac{5\\pi}{12} + 2\\pi k$', '$\\theta = \\dfrac{\\pi}{6} + \\pi k$ or $\\theta = \\dfrac{5\\pi}{6} + \\pi k$', '$\\theta = \\dfrac{\\pi}{3} + 2\\pi k$ or $\\theta = \\dfrac{5\\pi}{3} + 2\\pi k$'],
              correctAnswer: 0,
              explanation: '$2\\theta = \\dfrac{\\pi}{6} + 2\\pi k$ or $\\dfrac{5\\pi}{6} + 2\\pi k$; dividing everything by $2$ gives $\\theta = \\dfrac{\\pi}{12} + \\pi k$ or $\\dfrac{5\\pi}{12} + \\pi k$. Keeping $2\\pi k$ forgets to halve the period, $\\dfrac{\\pi}{6}$ and $\\dfrac{5\\pi}{6}$ forget to halve the base angles, and $\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$ solve $\\cos\\theta = \\dfrac{1}{2}$.',
            },
          ],
        },
      },
      {
        id: 'ste3-multi-input',
        type: 'input-boxes' as const,
        content: `**Count and Place** 🧮

**1)** How many solutions does $\\tan 3x = 1$ have on $[0, \\pi)$? (Enter a whole number.)
**2)** How many solutions does $\\cos 2\\theta = -\\dfrac{1}{2}$ have on $[0, 2\\pi)$?
**3)** The smallest positive solution of $\\cos 3x = 0$ is $x = \\,?\\,\\cdot\\pi$ (enter the coefficient, e.g. \`1/8\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '1/6'],
          hint1: '$3x = \\dfrac{\\pi}{4} + \\pi k$, so $x = \\dfrac{\\pi}{12} + \\dfrac{\\pi}{3}k$. Count the values in $[0, \\pi)$: $k = 0, 1, 2$.',
          hint2: '$u = 2\\theta$ runs over $[0, 4\\pi)$, two turns, and $\\cos u = -\\dfrac12$ twice per turn.',
          hint3: '$\\cos u = 0$ first at $u = \\dfrac{\\pi}{2}$; then $3x = \\dfrac{\\pi}{2}$.',
          explanation: '1) $x = \\dfrac{\\pi}{12}, \\dfrac{5\\pi}{12}, \\dfrac{3\\pi}{4}$ → 3 solutions (the next, $\\dfrac{13\\pi}{12}$, is past $\\pi$).  2) $2\\theta = \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}, \\dfrac{8\\pi}{3}, \\dfrac{10\\pi}{3}$ → 4 solutions.  3) $3x = \\dfrac{\\pi}{2} \\Rightarrow x = \\dfrac{\\pi}{6}$, coefficient $\\dfrac16$.',
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

> 💡 $\\sin\\theta = -\\dfrac12$ is negative → QIII and QIV: $\\pi + \\dfrac{\\pi}{6} = \\dfrac{7\\pi}{6}$ and $2\\pi - \\dfrac{\\pi}{6} = \\dfrac{11\\pi}{6}$.

### Reciprocal functions and identities

An equation in $\\sec$, $\\csc$ or $\\cot$ is an equation in $\\cos$, $\\sin$ or $\\tan$ in disguise: $\\sec\\theta = 2$ means $\\cos\\theta = \\dfrac12$, so $\\theta = \\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$. When an equation mixes two functions or two angles, such as $2\\cos^2\\theta + 3\\sin\\theta - 3 = 0$ or $\\cos 2x + \\cos x = 0$, rewrite it with an identity first; that method is the subject of the lesson *Trigonometric Identities and Equivalent Forms*, Part 6.`,
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

Solve $2\\cos\\theta + \\sqrt{3} = 0$ on $[0, 2\\pi)$. Give each solution as a coefficient of $\\pi$ (type \`2/3\` for $\\tfrac{2\\pi}{3}$).

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

> ⚠️ **Mode matters!** AP Precalculus measures angles in radians, so keep your calculator in **radian** mode. Degree mode gives a wrong answer on almost every exam item.`,
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
              question: 'Your calculator gives $\\sin^{-1}(0.7) \\approx 0.775$ rad. What is the OTHER solution on $[0, 2\\pi)$?',
              options: ['$\\pi - 0.775 \\approx 2.37$', '$2\\pi - 0.775 \\approx 5.51$', '$\\pi + 0.775 \\approx 3.92$', '$0.775$ is the only one'],
              correctAnswer: 0,
              explanation: '$\\sin\\theta = 0.7 > 0$ → solutions in QI and QII. The calculator gives the QI angle $0.775$; the QII partner is $\\pi - 0.775 \\approx 2.37$.',
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

Solve $\\tan\\theta = 2$ on $[0, 2\\pi)$. Your calculator gives $\\tan^{-1}(2) \\approx 1.11$ rad, which is the Quadrant I solution. Round answers to **2 decimals**.

**1)** Quadrant III solution: $\\theta \\approx \\,?$
**2)** Now solve $\\tan\\theta = -2$ on $[0, 2\\pi)$ instead. The **smaller** solution is $\\theta \\approx \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4.25', '2.03'],
          hint1: 'Tangent is positive in QI and QIII, and those two solutions differ by exactly $\\pi$: QIII $= 1.11 + \\pi$.',
          hint2: 'For $\\tan\\theta = -2$ the calculator gives $-1.11$, which is not in $[0, 2\\pi)$; tangent is negative in QII and QIV.',
          hint3: 'QII solution $= \\pi - 1.11 \\approx 2.03$ (the QIV one is $2\\pi - 1.11 \\approx 5.18$).',
          explanation: '1) $\\tan\\theta = 2 > 0$ → QI & QIII; QIII $= 1.11 + \\pi \\approx 4.25$. 2) $\\tan\\theta = -2$ has reference angle $1.11$ and solutions in QII and QIV: $\\pi - 1.11 \\approx 2.03$ and $2\\pi - 1.11 \\approx 5.18$; the smaller is $2.03$.',
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
| $\\lvert A \\rvert$ | amplitude | half the distance between max and min |
| $D$ | midline | the average value (vertical shift) |
| $\\dfrac{2\\pi}{\\lvert B \\rvert}$ | period | time for one full cycle |
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
            {
              question: 'The depth of water at a dock is $D(t) = 4\\sin\\big(\\tfrac{\\pi}{6}t\\big) + 9$ feet for $0 \\le t < 12$ hours. When is the depth at least $11$ feet?',
              options: ['$1 \\le t \\le 5$', '$7 \\le t \\le 11$', '$\\tfrac{\\pi}{6} \\le t \\le \\tfrac{5\\pi}{6}$', '$2 \\le t \\le 10$'],
              correctAnswer: 0,
              explanation: 'Isolate: $\\sin\\big(\\tfrac{\\pi}{6}t\\big) \\ge \\dfrac12$, so the inner angle lies in $\\left[\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right]$. Multiply by $\\dfrac{6}{\\pi}$: $1 \\le t \\le 5$. The interval $[7, 11]$ is where the depth is at most $7$ feet, $\\tfrac{\\pi}{6}$ to $\\tfrac{5\\pi}{6}$ forgets to undo the inner angle, and $[2, 10]$ uses $\\tfrac{\\pi}{12}$ in place of $\\tfrac{\\pi}{6}$.',
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

> ⚠️ **Substitution is key:** solve for the *inside* angle first ($u = \\tfrac{\\pi}{12}t$), then undo it to find $t$.

### Inequalities in context: when is $T(t) > 65$ during the first day ($0 \\le t < 24$)?

The context restricts the domain to one day. Then $\\sin u > \\dfrac12$ with $u = \\tfrac{\\pi}{12}t$ in $[0, 2\\pi)$ means $\\dfrac{\\pi}{6} < u < \\dfrac{5\\pi}{6}$. Undo the inner angle: $\\dfrac{\\pi}{6}\\cdot\\dfrac{12}{\\pi} = 2$ and $\\dfrac{5\\pi}{6}\\cdot\\dfrac{12}{\\pi} = 10$, so the temperature is above $65$ for $2 < t < 10$ hours.`,
      },
      {
        id: 'ste6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Equation** 🔽

The depth of water at a dock is $D(t) = 4\\sin\\big(\\tfrac{\\pi}{6}t\\big) + 9$ feet, $t$ in hours. You want to know when the depth is $7$ feet.`,
        exercise: {
          dropdowns: [
            { label: 'After isolating, $\\sin\\big(\\tfrac{\\pi}{6}t\\big) = $', options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{7}{9}$', '$-2$'] },
            { label: 'The first positive inner angle is:', options: ['$\\dfrac{7\\pi}{6}$', '$\\dfrac{\\pi}{6}$', '$\\dfrac{11\\pi}{6}$', '$\\dfrac{5\\pi}{6}$'] },
            { label: 'Solving $\\tfrac{\\pi}{6}t = \\tfrac{7\\pi}{6}$ gives:', options: ['$t = 7$', '$t = 1$', '$t = 11$', '$t = 5$'] },
          ],
          correctAnswers: ['$-\\dfrac{1}{2}$', '$\\dfrac{7\\pi}{6}$', '$t = 7$'],
          hint1: '$4\\sin(\\cdot) + 9 = 7 \\Rightarrow 4\\sin(\\cdot) = -2 \\Rightarrow \\sin(\\cdot) = -\\dfrac12$.',
          hint2: 'Sine is negative in QIII and QIV; the smallest positive angle with sine $-\\dfrac12$ is $\\pi + \\dfrac{\\pi}{6} = \\dfrac{7\\pi}{6}$.',
          hint3: '$\\tfrac{\\pi}{6}t = \\tfrac{7\\pi}{6} \\Rightarrow t = 7$ (multiply both sides by $\\tfrac{6}{\\pi}$).',
          explanation: 'Isolate to $\\sin\\big(\\tfrac{\\pi}{6}t\\big)=-\\dfrac12$; first inner angle $\\dfrac{7\\pi}{6}$; then $\\tfrac{\\pi}{6}t = \\tfrac{7\\pi}{6} \\Rightarrow t = 7$ hours (the second time, from $\\dfrac{11\\pi}{6}$, is $t = 11$).',
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
| Multiple angle $\\sin(b\\theta) = k$ | substitute $u = b\\theta$, solve over $b$ turns, divide base angles **and** period by $b$ |
| Inequality | solve the equation for the boundaries, test each interval, include boundaries only for $\\le$ / $\\ge$ |
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
        id: 'ste7-ineq-mc',
        type: 'multiple-choice' as const,
        content: `**Inequalities** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\tan\\theta \\le -1$ on $[0, 2\\pi)$.',
              options: [
                '$\\left(\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{4}\\right] \\cup \\left(\\dfrac{3\\pi}{2}, \\dfrac{7\\pi}{4}\\right]$',
                '$\\left[\\dfrac{3\\pi}{4}, \\dfrac{7\\pi}{4}\\right]$',
                '$\\left[\\dfrac{3\\pi}{4}, \\pi\\right) \\cup \\left[\\dfrac{7\\pi}{4}, 2\\pi\\right)$',
                '$\\left(\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{4}\\right) \\cup \\left(\\dfrac{3\\pi}{2}, \\dfrac{7\\pi}{4}\\right)$',
              ],
              correctAnswer: 0,
              explanation: 'The boundaries are where $\\tan\\theta = -1$ ($\\dfrac{3\\pi}{4}$, $\\dfrac{7\\pi}{4}$) and where tangent is undefined ($\\dfrac{\\pi}{2}$, $\\dfrac{3\\pi}{2}$). Just past $\\dfrac{\\pi}{2}$ the tangent is a huge negative number, and it rises to $-1$ at $\\dfrac{3\\pi}{4}$, so $\\tan\\theta \\le -1$ on $\\left(\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{4}\\right]$, and again one period later. The undefined endpoints are excluded and the $-1$ endpoints are included because the inequality is $\\le$. $\\left[\\dfrac{3\\pi}{4}, \\dfrac{7\\pi}{4}\\right]$ includes QIII, where tangent is positive.',
            },
            {
              question: 'For which $x$ in $[0, 2\\pi)$ is $\\sin x > \\cos x$?',
              options: [
                '$\\dfrac{\\pi}{4} < x < \\dfrac{5\\pi}{4}$',
                '$0 < x < \\pi$',
                '$\\dfrac{\\pi}{4} < x < \\dfrac{3\\pi}{4}$',
                '$\\dfrac{5\\pi}{4} < x < 2\\pi$ or $0 \\le x < \\dfrac{\\pi}{4}$',
              ],
              correctAnswer: 0,
              explanation: 'The two curves cross where $\\sin x = \\cos x$, at $x = \\dfrac{\\pi}{4}$ and $x = \\dfrac{5\\pi}{4}$. Testing $x = \\dfrac{\\pi}{2}$ gives $1 > 0$, so sine is on top between the crossings. The interval $(0, \\pi)$ is where $\\sin x > 0$, not where it beats cosine, and the last option is where $\\cos x > \\sin x$.',
            },
          ],
        },
      },
      {
        id: 'ste7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Solve $2\\sin\\theta - \\sqrt{3} = 0$ on $[0,2\\pi)$. Smaller solution as a coefficient of $\\pi$ (type \`1/4\` for $\\tfrac{\\pi}{4}$): $\\theta = \\,?\\,\\cdot\\pi$
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
