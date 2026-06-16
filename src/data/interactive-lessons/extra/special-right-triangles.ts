import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Special Right Triangles (Geometry).
 * Registry key: 'special-right-triangles' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written as \\circ.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'special-right-triangles',
    sections: [
      {
        id: 'srt1-intro',
        type: 'text' as const,
        content: `# 📐 Special Right Triangles

**Part 1 of 5 — The 45-45-90 Triangle**

---

### Topics in This Part

| Section |
|---------|
| Why "Special" Triangles Exist |
| The $45^\\circ$-$45^\\circ$-$90^\\circ$ Ratio |
| Finding the Hypotenuse from a Leg |
| Finding a Leg from the Hypotenuse |

> 🔑 **Key Concept:** Two right triangles show up *everywhere* in geometry, trig, and physics. Their side lengths follow fixed ratios, so you can find every side from just **one** measurement — no calculator, no trig functions, just a memorized pattern.`,
      },
      {
        id: 'srt1-why',
        type: 'text' as const,
        content: `## Why Are They "Special"?

A **special right triangle** has angles that produce side lengths in a clean, fixed ratio. Memorize the ratio once and you can solve the triangle instantly.

There are exactly **two**:

| Triangle | Angles | Side ratio (short : long : hyp) |
|----------|--------|---------------------------------|
| Isosceles right | $45^\\circ, 45^\\circ, 90^\\circ$ | $1 : 1 : \\sqrt{2}$ |
| "Half-equilateral" | $30^\\circ, 60^\\circ, 90^\\circ$ | $1 : \\sqrt{3} : 2$ |

This part covers the $45$-$45$-$90$. Part 2 covers the $30$-$60$-$90$.

> 💡 You could always fall back on the Pythagorean theorem, but the ratios are faster and give **exact** answers like $5\\sqrt{2}$ instead of decimals.`,
      },
      {
        id: 'srt1-454590',
        type: 'text' as const,
        content: `## The $45^\\circ$-$45^\\circ$-$90^\\circ$ Triangle

Because the two acute angles are equal, the triangle is **isosceles** — the two legs are the same length. Call each leg $x$.

By the Pythagorean theorem the hypotenuse is:

$$\\text{hyp} = \\sqrt{x^2 + x^2} = \\sqrt{2x^2} = x\\sqrt{2}$$

So the sides are always in the ratio:

$$\\text{leg} : \\text{leg} : \\text{hyp} \\;=\\; x : x : x\\sqrt{2} \\;=\\; 1 : 1 : \\sqrt{2}$$

| Side | Length |
|------|--------|
| Leg | $x$ |
| Leg | $x$ |
| Hypotenuse | $x\\sqrt{2}$ |

> 🔑 **Rule:** In a $45$-$45$-$90$ triangle, the **hypotenuse is a leg times $\\sqrt{2}$**.`,
      },
      {
        id: 'srt1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a $45$-$45$-$90$ triangle, how do the two legs compare?',
              options: ['They are equal', 'The longer leg is $\\sqrt{3}$ times the shorter', 'One leg is twice the other', 'They depend on the hypotenuse'],
              correctAnswer: 0,
              explanation: 'The two acute angles are both $45^\\circ$, so the triangle is isosceles and the legs are equal.',
            },
            {
              question: 'The side ratio for a $45$-$45$-$90$ triangle is:',
              options: ['$1 : \\sqrt{3} : 2$', '$1 : 1 : \\sqrt{2}$', '$1 : 2 : \\sqrt{5}$', '$1 : 1 : 2$'],
              correctAnswer: 1,
              explanation: 'Legs are equal ($1 : 1$) and the hypotenuse is a leg times $\\sqrt{2}$, giving $1 : 1 : \\sqrt{2}$.',
            },
          ],
        },
      },
      {
        id: 'srt1-leg-to-hyp',
        type: 'text' as const,
        content: `## Finding the Hypotenuse from a Leg

If you know a leg, **multiply by $\\sqrt{2}$**.

### Worked Example: legs of length $7$

$$\\text{hyp} = 7\\sqrt{2}$$

That's the exact answer. As a decimal, $7\\sqrt{2} \\approx 7 \\times 1.414 \\approx 9.90$.

### Worked Example: legs of length $3\\sqrt{2}$

$$\\text{hyp} = 3\\sqrt{2} \\cdot \\sqrt{2} = 3 \\cdot 2 = 6$$

> 💡 Notice $\\sqrt{2}\\cdot\\sqrt{2} = 2$. When a leg already contains $\\sqrt{2}$, the radical often disappears.`,
      },
      {
        id: 'srt1-leg-drill',
        type: 'input-boxes' as const,
        content: `**Leg → Hypotenuse** 🧮

Each triangle is $45$-$45$-$90$. Find the hypotenuse from the given leg. Write radical answers like \`5sqrt2\` (no spaces) or as a whole number when it simplifies.

**1)** Leg $= 6$. Hypotenuse $= \\,?$
**2)** Leg $= 10$. Hypotenuse $= \\,?$
**3)** Leg $= 5\\sqrt{2}$. Hypotenuse $= \\,?$  *(simplifies to a whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6sqrt2', '10sqrt2', '10'],
          hint1: 'Multiply the leg by $\\sqrt{2}$.',
          hint2: 'Leave $6\\sqrt{2}$ and $10\\sqrt{2}$ in exact radical form.',
          hint3: 'For leg $5\\sqrt{2}$: hyp $= 5\\sqrt{2}\\cdot\\sqrt{2} = 5\\cdot 2 = 10$.',
          explanation: '1) $6\\sqrt{2}$.  2) $10\\sqrt{2}$.  3) $5\\sqrt{2}\\cdot\\sqrt{2} = 10$.',
        },
      },
      {
        id: 'srt1-hyp-to-leg',
        type: 'text' as const,
        content: `## Finding a Leg from the Hypotenuse

Going backward, you **divide by $\\sqrt{2}$** — then rationalize the denominator.

### Worked Example: hypotenuse $= 10$

$$\\text{leg} = \\frac{10}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$$

> ⚠️ **Common mistake:** writing the leg as $10\\sqrt{2}$. Multiplying by $\\sqrt{2}$ makes a side **bigger** — but a leg is *smaller* than the hypotenuse. Going hyp → leg you **divide**.

### Shortcut

Dividing by $\\sqrt{2}$ is the same as multiplying by $\\dfrac{\\sqrt{2}}{2}$:

$$\\text{leg} = \\text{hyp} \\cdot \\frac{\\sqrt{2}}{2}$$`,
      },
      {
        id: 'srt1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Move** 🔽

You have a $45$-$45$-$90$ triangle. Choose the correct relationship for each case.`,
        exercise: {
          dropdowns: [
            { label: 'Leg $= 8$, so hypotenuse $=$', options: ['$8\\sqrt{2}$', '$\\frac{8}{\\sqrt{2}}$', '$16$', '$8\\sqrt{3}$'] },
            { label: 'Hypotenuse $= 6$, so each leg $=$', options: ['$3\\sqrt{2}$', '$6\\sqrt{2}$', '$3$', '$6\\sqrt{3}$'] },
            { label: 'The hypotenuse is always the leg times', options: ['$\\sqrt{2}$', '$2$', '$\\sqrt{3}$', '$\\frac{1}{2}$'] },
          ],
          correctAnswers: ['$8\\sqrt{2}$', '$3\\sqrt{2}$', '$\\sqrt{2}$'],
          hint1: 'Leg → hyp: multiply by $\\sqrt{2}$.',
          hint2: 'Hyp → leg: $\\dfrac{6}{\\sqrt{2}} = \\dfrac{6\\sqrt{2}}{2} = 3\\sqrt{2}$.',
          hint3: 'The defining rule of the $45$-$45$-$90$ is hyp $= $ leg $\\cdot \\sqrt{2}$.',
          explanation: 'Leg $8 \\to 8\\sqrt{2}$. Hyp $6 \\to 6/\\sqrt{2} = 3\\sqrt{2}$. The hypotenuse is a leg times $\\sqrt{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'special-right-triangles',
    sections: [
      {
        id: 'srt2-intro',
        type: 'text' as const,
        content: `# 📐 Special Right Triangles

**Part 2 of 5 — The 30-60-90 Triangle**

---

> 🔑 **The Idea:** Cut an equilateral triangle in half and you get a $30$-$60$-$90$. Its three sides follow the ratio $1 : \\sqrt{3} : 2$ — the most useful ratio in all of trigonometry.`,
      },
      {
        id: 'srt2-derive',
        type: 'text' as const,
        content: `## Where the $30$-$60$-$90$ Comes From

Start with an equilateral triangle (all sides $2x$, all angles $60^\\circ$). Drop an altitude from one vertex straight down. It splits the triangle into two identical right triangles.

Each piece has angles $30^\\circ, 60^\\circ, 90^\\circ$ and these sides:

- **Short leg** (opposite the $30^\\circ$): half the base $= x$
- **Hypotenuse** (opposite the $90^\\circ$): the full side $= 2x$
- **Long leg** (opposite the $60^\\circ$): the altitude

The altitude comes from the Pythagorean theorem:

$$\\text{long leg} = \\sqrt{(2x)^2 - x^2} = \\sqrt{4x^2 - x^2} = \\sqrt{3x^2} = x\\sqrt{3}$$

| Side | Opposite angle | Length |
|------|----------------|--------|
| Short leg | $30^\\circ$ | $x$ |
| Long leg | $60^\\circ$ | $x\\sqrt{3}$ |
| Hypotenuse | $90^\\circ$ | $2x$ |

> 🔑 **Ratio:** short : long : hyp $= 1 : \\sqrt{3} : 2$.`,
      },
      {
        id: 'srt2-order',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a $30$-$60$-$90$ triangle, which side is the shortest?',
              options: ['The side opposite the $30^\\circ$ angle', 'The side opposite the $60^\\circ$ angle', 'The hypotenuse', 'The legs are equal'],
              correctAnswer: 0,
              explanation: 'The smallest angle ($30^\\circ$) faces the smallest side. The short leg, opposite the $30^\\circ$, equals $x$.',
            },
            {
              question: 'The hypotenuse of a $30$-$60$-$90$ triangle equals the short leg times:',
              options: ['$2$', '$\\sqrt{3}$', '$\\sqrt{2}$', '$3$'],
              correctAnswer: 0,
              explanation: 'Hypotenuse $= 2x$ and short leg $= x$, so hyp $= 2 \\times$ short leg.',
            },
          ],
        },
      },
      {
        id: 'srt2-from-short',
        type: 'text' as const,
        content: `## Solving from the Short Leg

The short leg is the **base unit** ($x$). If you know it, everything else is easy:

$$\\text{long leg} = (\\text{short leg})\\sqrt{3}, \\qquad \\text{hyp} = 2 \\cdot (\\text{short leg})$$

### Worked Example: short leg $= 5$

$$\\text{long leg} = 5\\sqrt{3} \\approx 8.66, \\qquad \\text{hyp} = 2 \\cdot 5 = 10$$

### Worked Example: short leg $= 4\\sqrt{3}$

$$\\text{long leg} = 4\\sqrt{3}\\cdot\\sqrt{3} = 4\\cdot 3 = 12, \\qquad \\text{hyp} = 2 \\cdot 4\\sqrt{3} = 8\\sqrt{3}$$

> 💡 **Strategy:** always find the **short leg first**. From the short leg, the other two sides come directly.`,
      },
      {
        id: 'srt2-short-drill',
        type: 'input-boxes' as const,
        content: `**From the Short Leg** 🧮

Each triangle is $30$-$60$-$90$ with the short leg given. Find the requested side. Use \`sqrt3\` form (e.g. \`7sqrt3\`) or a whole number when it simplifies.

**1)** Short leg $= 6$. Long leg $= \\,?$
**2)** Short leg $= 6$. Hypotenuse $= \\,?$
**3)** Short leg $= 9$. Hypotenuse $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6sqrt3', '12', '18'],
          hint1: 'Long leg $=$ short leg $\\times \\sqrt{3}$.',
          hint2: 'Hypotenuse $= 2 \\times$ short leg.',
          hint3: 'Short leg $6$: long $= 6\\sqrt{3}$, hyp $= 12$. Short leg $9$: hyp $= 18$.',
          explanation: '1) $6\\sqrt{3}$.  2) $2\\cdot 6 = 12$.  3) $2\\cdot 9 = 18$.',
        },
      },
      {
        id: 'srt2-label',
        type: 'text' as const,
        content: `## Label Every Side at Once

The cleanest way to solve a $30$-$60$-$90$ is to write all three sides as multiples of the short leg $x$, then plug in.

| Opposite | Side | In terms of $x$ |
|----------|------|------------------|
| $30^\\circ$ | short leg | $x$ |
| $60^\\circ$ | long leg | $x\\sqrt{3}$ |
| $90^\\circ$ | hypotenuse | $2x$ |

> 🔑 Find $x$, then read every side off the table. The next check has you fill in the whole triangle.`,
      },
      {
        id: 'srt2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Side** 🔽

A $30$-$60$-$90$ triangle has short leg $= 7$. Fill in each side.`,
        exercise: {
          dropdowns: [
            { label: 'Short leg (opposite $30^\\circ$):', options: ['$7$', '$7\\sqrt{3}$', '$14$', '$7\\sqrt{2}$'] },
            { label: 'Long leg (opposite $60^\\circ$):', options: ['$7\\sqrt{3}$', '$7$', '$14$', '$7\\sqrt{2}$'] },
            { label: 'Hypotenuse (opposite $90^\\circ$):', options: ['$14$', '$7\\sqrt{3}$', '$7\\sqrt{2}$', '$21$'] },
          ],
          correctAnswers: ['$7$', '$7\\sqrt{3}$', '$14$'],
          hint1: 'Short leg is the given value, $7$.',
          hint2: 'Long leg $= 7\\sqrt{3}$ (short leg times $\\sqrt{3}$).',
          hint3: 'Hypotenuse $= 2\\cdot 7 = 14$.',
          explanation: 'With short leg $7$: long leg $= 7\\sqrt{3}$, hypotenuse $= 14$. Ratio $1 : \\sqrt{3} : 2$ scaled by $7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'special-right-triangles',
    sections: [
      {
        id: 'srt3-intro',
        type: 'text' as const,
        content: `# 📐 Special Right Triangles

**Part 3 of 5 — Working Backward (the hard direction)**

---

> 🔑 **Why it's tricky:** When you're *given* the long leg or the hypotenuse, you have to undo a multiplication — which means **dividing by $\\sqrt{3}$ (or $2$)** and rationalizing. The trick is always to recover the **short leg** first.`,
      },
      {
        id: 'srt3-from-hyp',
        type: 'text' as const,
        content: `## Given the Hypotenuse

Since hyp $= 2x$, the short leg is **half the hypotenuse**:

$$x = \\frac{\\text{hyp}}{2}, \\qquad \\text{long leg} = x\\sqrt{3}$$

### Worked Example: hypotenuse $= 14$

$$\\text{short leg} = \\frac{14}{2} = 7, \\qquad \\text{long leg} = 7\\sqrt{3}$$

No radicals needed to get the short leg — just halve. The long leg then picks up the $\\sqrt{3}$.

> 💡 **Hypotenuse is the friendliest starting point:** divide by $2$ and you instantly have the short leg.`,
      },
      {
        id: 'srt3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $30$-$60$-$90$ triangle has hypotenuse $20$. The short leg is:',
              options: ['$10$', '$20\\sqrt{3}$', '$40$', '$10\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: 'Short leg $= \\frac{\\text{hyp}}{2} = \\frac{20}{2} = 10$.',
            },
            {
              question: 'A $30$-$60$-$90$ triangle has long leg $9$. The short leg is:',
              options: ['$3\\sqrt{3}$', '$9\\sqrt{3}$', '$\\frac{9}{2}$', '$3$'],
              correctAnswer: 0,
              explanation: '$\\frac{9}{\\sqrt{3}} = \\frac{9\\sqrt{3}}{3} = 3\\sqrt{3}$.',
            },
          ],
        },
      },
      {
        id: 'srt3-from-long',
        type: 'text' as const,
        content: `## Given the Long Leg

Since long leg $= x\\sqrt{3}$, recover the short leg by **dividing by $\\sqrt{3}$** and rationalizing:

$$x = \\frac{\\text{long leg}}{\\sqrt{3}} = \\frac{\\text{long leg}}{\\sqrt{3}}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{(\\text{long leg})\\sqrt{3}}{3}$$

### Worked Example: long leg $= 6$

$$\\text{short leg} = \\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}, \\qquad \\text{hyp} = 2 \\cdot 2\\sqrt{3} = 4\\sqrt{3}$$

> ✅ **Check** with Pythagoras: short$^2$ + long$^2 = (2\\sqrt{3})^2 + 6^2 = 12 + 36 = 48$, and hyp$^2 = (4\\sqrt{3})^2 = 48$ ✓`,
      },
      {
        id: 'srt3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Recover the Short Leg** 🔽

Choose how to find the short leg in each situation.`,
        exercise: {
          dropdowns: [
            { label: 'Given the hypotenuse, the short leg is the hypotenuse', options: ['divided by $2$', 'times $\\sqrt{3}$', 'divided by $\\sqrt{3}$', 'times $2$'] },
            { label: 'Given the long leg, the short leg is the long leg', options: ['divided by $\\sqrt{3}$', 'divided by $2$', 'times $\\sqrt{3}$', 'times $2$'] },
            { label: 'Hypotenuse $= 16$, so the short leg $=$', options: ['$8$', '$16\\sqrt{3}$', '$32$', '$8\\sqrt{3}$'] },
          ],
          correctAnswers: ['divided by $2$', 'divided by $\\sqrt{3}$', '$8$'],
          hint1: 'Hyp $= 2x$, so $x = \\frac{\\text{hyp}}{2}$.',
          hint2: 'Long leg $= x\\sqrt{3}$, so $x = \\frac{\\text{long}}{\\sqrt{3}}$.',
          hint3: '$\\frac{16}{2} = 8$.',
          explanation: 'From the hyp, halve it. From the long leg, divide by $\\sqrt{3}$. Hyp $16 \\Rightarrow$ short leg $8$.',
        },
      },
      {
        id: 'srt3-backward-summary',
        type: 'text' as const,
        content: `## Both Backward Routes in One Table

| You're given | Get the short leg by | Then |
|--------------|----------------------|------|
| Hypotenuse | $\\div\\, 2$ | long leg $=$ short $\\cdot\\sqrt{3}$ |
| Long leg | $\\div\\, \\sqrt{3}$ (rationalize) | hyp $= 2\\cdot$ short |

> ⚠️ Dividing by $2$ keeps things rational; dividing by $\\sqrt{3}$ needs a rationalize step ($\\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$). Try both in the next drill.`,
      },
      {
        id: 'srt3-drill',
        type: 'input-boxes' as const,
        content: `**Work Backward** 🧮

Find the short leg of each $30$-$60$-$90$ triangle. Use \`sqrt3\` form (e.g. \`5sqrt3\`) or a whole number.

**1)** Hypotenuse $= 18$. Short leg $= \\,?$
**2)** Long leg $= 12$. Short leg $= \\,?$  *(rationalize; simplifies to \`4sqrt3\`)*
**3)** Hypotenuse $= 7$. Short leg $= \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '4sqrt3', '3.5'],
          hint1: 'From the hypotenuse, divide by $2$.',
          hint2: 'From the long leg, divide by $\\sqrt{3}$: $\\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$.',
          hint3: '$\\frac{18}{2} = 9$; $\\frac{7}{2} = 3.5$.',
          explanation: '1) $18/2 = 9$.  2) $12/\\sqrt{3} = 4\\sqrt{3}$.  3) $7/2 = 3.5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'special-right-triangles',
    sections: [
      {
        id: 'srt4-intro',
        type: 'text' as const,
        content: `# 📐 Special Right Triangles

**Part 4 of 5 — Applications: Squares, Hexagons & Word Problems**

---

> 🔑 **Big Payoff:** Special triangles are hiding inside squares, equilateral triangles, hexagons, and real-world right-angle problems. Spot the triangle and the rest falls out.`,
      },
      {
        id: 'srt4-diagonal',
        type: 'text' as const,
        content: `## The Diagonal of a Square

A diagonal splits a square into two $45$-$45$-$90$ triangles: the sides of the square are the legs, and the diagonal is the hypotenuse.

$$\\text{diagonal} = (\\text{side})\\sqrt{2}$$

### Worked Example: a square with side $5$

$$\\text{diagonal} = 5\\sqrt{2} \\approx 7.07$$

### Worked Example: a square with diagonal $8$

$$\\text{side} = \\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$$

> 💡 This is the fastest way to find a square's diagonal — no full Pythagorean setup required.`,
      },
      {
        id: 'srt4-altitude',
        type: 'text' as const,
        content: `## The Altitude of an Equilateral Triangle

Drop an altitude in an equilateral triangle of side $s$ and you create a $30$-$60$-$90$. The full side $s$ is the hypotenuse, half the base $\\left(\\frac{s}{2}\\right)$ is the short leg, and the altitude is the long leg:

$$\\text{altitude} = \\frac{s}{2}\\cdot\\sqrt{3} = \\frac{s\\sqrt{3}}{2}$$

### Worked Example: equilateral triangle with side $10$

$$\\text{altitude} = \\frac{10\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66$$

> 💡 The area then follows: $A = \\frac{1}{2}\\,bh = \\frac{1}{2}\\cdot 10 \\cdot 5\\sqrt{3} = 25\\sqrt{3}$.`,
      },
      {
        id: 'srt4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A square has side length $9$. Its diagonal is:',
              options: ['$9\\sqrt{2}$', '$9\\sqrt{3}$', '$18$', '$\\frac{9}{\\sqrt{2}}$'],
              correctAnswer: 0,
              explanation: 'The diagonal of a square is the side times $\\sqrt{2}$: $9\\sqrt{2}$.',
            },
            {
              question: 'An equilateral triangle has side $6$. Its altitude is:',
              options: ['$3\\sqrt{3}$', '$6\\sqrt{3}$', '$3$', '$6\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: 'Altitude $= \\frac{s\\sqrt{3}}{2} = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}$. (The short leg is $\\frac{6}{2}=3$, long leg $3\\sqrt{3}$.)',
            },
          ],
        },
      },
      {
        id: 'srt4-word',
        type: 'text' as const,
        content: `## A Word Problem

> A ramp rises at a $30^\\circ$ angle. The ramp surface (the hypotenuse) is $24$ feet long. How high is the top of the ramp?

The height is **opposite the $30^\\circ$ angle**, so it's the **short leg**:

$$\\text{height} = \\frac{\\text{hyp}}{2} = \\frac{24}{2} = 12 \\text{ feet}$$

> ⚠️ **Watch which side faces which angle.** The height is opposite the $30^\\circ$, so it's the short leg ($=$ half the hypotenuse), not the long leg. Always label the angle each unknown side is *across from*.`,
      },
      {
        id: 'srt4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Triangle** 🔽

Choose the relationship hidden in each figure.`,
        exercise: {
          dropdowns: [
            { label: 'A square of side $s$ has a diagonal of length', options: ['$s\\sqrt{2}$', '$s\\sqrt{3}$', '$2s$', '$\\frac{s}{2}$'] },
            { label: 'In an equilateral triangle of side $s$, the altitude is the', options: ['long leg of a $30$-$60$-$90$', 'hypotenuse of a $45$-$45$-$90$', 'short leg of a $30$-$60$-$90$', 'leg of a $45$-$45$-$90$'] },
            { label: 'A side opposite a $30^\\circ$ angle in a $30$-$60$-$90$ is the', options: ['short leg', 'long leg', 'hypotenuse', 'altitude'] },
          ],
          correctAnswers: ['$s\\sqrt{2}$', 'long leg of a $30$-$60$-$90$', 'short leg'],
          hint1: 'A square diagonal makes two $45$-$45$-$90$ triangles, so diagonal $= s\\sqrt{2}$.',
          hint2: 'The altitude of an equilateral triangle is opposite the $60^\\circ$ angle — the long leg.',
          hint3: 'Smallest angle ($30^\\circ$) faces the smallest side, the short leg.',
          explanation: 'Square diagonal $= s\\sqrt{2}$. The equilateral altitude is the long leg (opposite $60^\\circ$). The side opposite $30^\\circ$ is the short leg.',
        },
      },
      {
        id: 'srt4-recap',
        type: 'text' as const,
        content: `## Putting the Shapes Together

| Figure | Hidden triangle | Useful formula |
|--------|-----------------|----------------|
| Square (diagonal) | $45$-$45$-$90$ | diagonal $= s\\sqrt{2}$ |
| Equilateral (altitude) | $30$-$60$-$90$ | altitude $= \\frac{s\\sqrt{3}}{2}$ |
| $30^\\circ$ ramp | $30$-$60$-$90$ | height $= \\frac{\\text{hyp}}{2}$ |

> 💡 The first move in any of these problems is to **draw the right triangle** and label which side is opposite which angle. The next drill mixes all three figures.`,
      },
      {
        id: 'srt4-drill',
        type: 'input-boxes' as const,
        content: `**Applications** 🧮

Use \`sqrt2\`/\`sqrt3\` form (e.g. \`7sqrt2\`) or a whole number.

**1)** A square has side $11$. Its diagonal $= \\,?$
**2)** An equilateral triangle has side $8$. Its altitude $= \\,?$  *(simplifies to \`4sqrt3\`)*
**3)** A $30^\\circ$ ramp has a $30$-ft hypotenuse. Its height (short leg, in ft) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11sqrt2', '4sqrt3', '15'],
          hint1: 'Square diagonal $=$ side $\\times \\sqrt{2}$.',
          hint2: 'Equilateral altitude $= \\frac{s\\sqrt{3}}{2} = \\frac{8\\sqrt{3}}{2} = 4\\sqrt{3}$.',
          hint3: 'Ramp height is the short leg $= \\frac{30}{2} = 15$.',
          explanation: '1) $11\\sqrt{2}$.  2) $\\frac{8\\sqrt{3}}{2} = 4\\sqrt{3}$.  3) $30/2 = 15$ ft.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'special-right-triangles',
    sections: [
      {
        id: 'srt5-intro',
        type: 'text' as const,
        content: `# 📐 Special Right Triangles

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now solve both special triangles in either direction and spot them inside squares, equilateral triangles, and word problems. Let's put it all together.`,
      },
      {
        id: 'srt5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Triangle | Ratio | Key moves |
|----------|-------|-----------|
| $45$-$45$-$90$ | $1 : 1 : \\sqrt{2}$ | hyp $=$ leg $\\cdot\\sqrt{2}$; leg $=$ hyp $\\div\\sqrt{2}$ |
| $30$-$60$-$90$ | $1 : \\sqrt{3} : 2$ | long $=$ short $\\cdot\\sqrt{3}$; hyp $= 2\\cdot$ short |

**Recovering the short leg in a $30$-$60$-$90$:**

| Given | Short leg |
|-------|-----------|
| Hypotenuse | $\\div\\, 2$ |
| Long leg | $\\div\\, \\sqrt{3}$ |

> ⚠️ Two traps: (1) going hyp → leg you **divide** (the leg is smaller), and (2) the side **opposite $30^\\circ$ is the short leg**, opposite $60^\\circ$ is the long leg. Label angles before you solve.`,
      },
      {
        id: 'srt5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $45$-$45$-$90$ triangle has a hypotenuse of $12$. Each leg is:',
              options: ['$6\\sqrt{2}$', '$12\\sqrt{2}$', '$6$', '$6\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: '$\\text{leg} = \\frac{12}{\\sqrt{2}} = \\frac{12\\sqrt{2}}{2} = 6\\sqrt{2}$.',
            },
            {
              question: 'A $30$-$60$-$90$ triangle has long leg $5\\sqrt{3}$. The hypotenuse is:',
              options: ['$10$', '$5$', '$10\\sqrt{3}$', '$15$'],
              correctAnswer: 0,
              explanation: 'Short leg $= \\frac{5\\sqrt{3}}{\\sqrt{3}} = 5$, so hyp $= 2\\cdot 5 = 10$.',
            },
          ],
        },
      },
      {
        id: 'srt5-checklist',
        type: 'text' as const,
        content: `## A Three-Step Habit

Whatever you're given, the same routine solves any special right triangle:

1. **Identify the triangle** — equal legs $\\Rightarrow$ $45$-$45$-$90$; angles $30$/$60$ $\\Rightarrow$ $30$-$60$-$90$.
2. **Find the base side** — a leg for $45$-$45$-$90$, the short leg for $30$-$60$-$90$.
3. **Scale up** with the ratio ($\\times\\sqrt{2}$, or $\\times\\sqrt{3}$ and $\\times 2$).

> 🔑 Run this routine on the drill below, then the Exit Quiz.`,
      },
      {
        id: 'srt5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

Use \`sqrt2\`/\`sqrt3\` form or a whole number.

**1)** $45$-$45$-$90$: leg $= 9$. Hypotenuse $= \\,?$
**2)** $30$-$60$-$90$: short leg $= 11$. Long leg $= \\,?$
**3)** $30$-$60$-$90$: hypotenuse $= 30$. Short leg $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9sqrt2', '11sqrt3', '15'],
          hint1: '$45$-$45$-$90$: hyp $=$ leg $\\cdot\\sqrt{2}$.',
          hint2: '$30$-$60$-$90$: long $=$ short $\\cdot\\sqrt{3}$; short $=$ hyp $\\div 2$.',
          hint3: 'Leg $9 \\to 9\\sqrt{2}$. Short $11 \\to 11\\sqrt{3}$. Hyp $30 \\to 15$.',
          explanation: '1) $9\\sqrt{2}$.  2) $11\\sqrt{3}$.  3) $30/2 = 15$.',
        },
      },
      {
        id: 'srt5-before-exit',
        type: 'text' as const,
        content: `## One Last Reminder Before the Quiz

> ⚠️ Going from a bigger side to a smaller side, you **divide** — and dividing by $\\sqrt{2}$ or $\\sqrt{3}$ means rationalizing ($\\frac{a}{\\sqrt{2}} = \\frac{a\\sqrt{2}}{2}$, $\\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$).

Keep the two ratios in front of you: $1 : 1 : \\sqrt{2}$ and $1 : \\sqrt{3} : 2$. Ready? Finish with the Exit Quiz.`,
      },
      {
        id: 'srt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In a $45$-$45$-$90$ triangle, a leg measures $7$. The hypotenuse is:',
              options: ['$7\\sqrt{2}$', '$14$', '$7\\sqrt{3}$', '$\\frac{7}{\\sqrt{2}}$'],
              correctAnswer: 0,
              explanation: 'Hypotenuse $=$ leg $\\cdot\\sqrt{2} = 7\\sqrt{2}$.',
            },
            {
              question: 'A $30$-$60$-$90$ triangle has hypotenuse $16$. The long leg (opposite $60^\\circ$) is:',
              options: ['$8\\sqrt{3}$', '$8$', '$16\\sqrt{3}$', '$4\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: 'Short leg $= \\frac{16}{2} = 8$, so long leg $= 8\\sqrt{3}$.',
            },
            {
              question: 'A square has a diagonal of $10$. The length of each side is:',
              options: ['$5\\sqrt{2}$', '$10\\sqrt{2}$', '$5$', '$5\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: 'The diagonal is a $45$-$45$-$90$ hypotenuse: side $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$.',
            },
          ],
        },
      },
    ],
  },
]
