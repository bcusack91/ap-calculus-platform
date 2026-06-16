import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Arc Length and Sector Area (AP Precalculus).
 * Registry key: 'arc-length-and-sector-area' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: radians foundation → arc length → sector area
 * → degree formulas → angular & linear speed → applications → mixed practice + exit quiz.
 * Interactive practice mixes multiple-choice + input-boxes + dropdown each part.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'arc-length-and-sector-area',
    sections: [
      {
        id: 'arc1-intro',
        type: 'text' as const,
        content: `# 🌀 Arc Length and Sector Area

**Part 1 of 7 — Radians: The Natural Angle**

---

### Topics in This Part

| Section |
|---------|
| What Is a Radian? |
| Why Radians Make Arc Length Easy |
| Converting Between Degrees and Radians |

> 🔑 **Key Concept:** A **radian** measures an angle by the *arc it sweeps* on a circle. One radian is the angle whose arc length equals the radius. This single idea makes the whole topic — arc length, sector area, and circular speed — fall into place.`,
      },
      {
        id: 'arc1-radian-def',
        type: 'text' as const,
        content: `## What Is a Radian?

Picture a circle of radius $r$. If you walk along the edge a distance of exactly one radius, the angle you sweep at the center is **one radian**.

$$1 \\text{ radian} = \\text{the angle whose arc length} = r$$

Because the full circumference is $2\\pi r$, walking all the way around sweeps $\\dfrac{2\\pi r}{r} = 2\\pi$ radians. So:

| Fraction of circle | Degrees | Radians |
|--------------------|---------|---------|
| Full turn | $360^\\circ$ | $2\\pi$ |
| Half turn | $180^\\circ$ | $\\pi$ |
| Quarter turn | $90^\\circ$ | $\\dfrac{\\pi}{2}$ |
| Eighth turn | $45^\\circ$ | $\\dfrac{\\pi}{4}$ |

> 🔑 **The bridge between systems:** $\\;180^\\circ = \\pi \\text{ radians}$. Every conversion comes from this one equation.`,
      },
      {
        id: 'arc1-why-radians',
        type: 'text' as const,
        content: `## Why Radians Make Arc Length Easy

In radians, the angle and the arc are directly proportional to the radius. Walking $\\theta$ radians around a circle of radius $r$ covers an arc of

$$s = r\\theta$$

That clean formula is **only** true when $\\theta$ is in radians. In degrees you'd carry an awkward factor of $\\dfrac{\\pi}{180}$ everywhere — which is exactly why radians are the natural unit for circular measurement.

> 💡 Think of $\\theta$ as "how many radius-lengths of arc." If $\\theta = 3$ radians on a circle of radius $5$, you've traveled $3$ radius-lengths $= 3 \\cdot 5 = 15$ units of arc.`,
      },
      {
        id: 'arc1-convert-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many radians are in one full revolution around a circle?',
              options: ['$\\pi$', '$2\\pi$', '$360$', '$\\dfrac{\\pi}{2}$'],
              correctAnswer: 1,
              explanation: 'A full circle has circumference $2\\pi r$, so it spans $\\dfrac{2\\pi r}{r} = 2\\pi$ radians (equivalently $360^\\circ$).',
            },
            {
              question: 'One radian is the angle for which the arc length equals which length?',
              options: ['The diameter', 'The radius', 'The circumference', 'Half the radius'],
              correctAnswer: 1,
              explanation: 'By definition, one radian sweeps an arc whose length equals the radius $r$.',
            },
          ],
        },
      },
      {
        id: 'arc1-convert-text',
        type: 'text' as const,
        content: `## Converting Degrees ↔ Radians

Start from $180^\\circ = \\pi$ radians and multiply by the right conversion factor:

$$\\text{degrees} \\to \\text{radians: } \\times \\frac{\\pi}{180^\\circ} \\qquad \\text{radians} \\to \\text{degrees: } \\times \\frac{180^\\circ}{\\pi}$$

**Example — degrees to radians:** Convert $60^\\circ$.
$$60^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$$

**Example — radians to degrees:** Convert $\\dfrac{3\\pi}{4}$.
$$\\frac{3\\pi}{4} \\cdot \\frac{180^\\circ}{\\pi} = \\frac{3 \\cdot 180^\\circ}{4} = 135^\\circ$$

> ⚠️ Pick the factor that **cancels the unit you start with**. Degrees in the denominator cancels degrees; $\\pi$ in the denominator cancels radians.`,
      },
      {
        id: 'arc1-convert-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Angles** 🔽

Choose the correct equivalent for each angle.`,
        exercise: {
          dropdowns: [
            { label: '$90^\\circ$ in radians:', options: ['$\\dfrac{\\pi}{2}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{4}$', '$\\pi$'] },
            { label: '$\\dfrac{\\pi}{6}$ in degrees:', options: ['$60^\\circ$', '$30^\\circ$', '$45^\\circ$', '$15^\\circ$'] },
            { label: '$270^\\circ$ in radians:', options: ['$\\dfrac{3\\pi}{2}$', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{5\\pi}{4}$', '$3\\pi$'] },
          ],
          correctAnswers: ['$\\dfrac{\\pi}{2}$', '$30^\\circ$', '$\\dfrac{3\\pi}{2}$'],
          hint1: '$90^\\circ \\cdot \\dfrac{\\pi}{180^\\circ} = \\dfrac{\\pi}{2}$.',
          hint2: '$\\dfrac{\\pi}{6} \\cdot \\dfrac{180^\\circ}{\\pi} = \\dfrac{180^\\circ}{6} = 30^\\circ$.',
          hint3: '$270^\\circ \\cdot \\dfrac{\\pi}{180^\\circ} = \\dfrac{270\\pi}{180} = \\dfrac{3\\pi}{2}$.',
          explanation: '$90^\\circ = \\dfrac{\\pi}{2}$, $\\dfrac{\\pi}{6} = 30^\\circ$, and $270^\\circ = \\dfrac{3\\pi}{2}$. All flow from $180^\\circ = \\pi$.',
        },
      },
      {
        id: 'arc1-convert-input',
        type: 'input-boxes' as const,
        content: `**Convert It** 🧮

Convert each angle. For radian answers, give the coefficient of $\\pi$ as a fraction (e.g. write $\\frac{2}{3}$ for $\\frac{2\\pi}{3}$).

**1)** $45^\\circ = \\,?\\,\\pi$ radians  *(enter the fraction)*
**2)** $\\dfrac{5\\pi}{6}$ radians $= \\,?^\\circ$
**3)** $120^\\circ = \\,?\\,\\pi$ radians  *(enter the fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/4', '150', '2/3'],
          hint1: '$45^\\circ \\cdot \\dfrac{\\pi}{180^\\circ} = \\dfrac{45\\pi}{180} = \\dfrac{\\pi}{4}$, so the coefficient is $\\dfrac{1}{4}$.',
          hint2: '$\\dfrac{5\\pi}{6} \\cdot \\dfrac{180^\\circ}{\\pi} = \\dfrac{5 \\cdot 180^\\circ}{6} = 150^\\circ$.',
          hint3: '$120^\\circ \\cdot \\dfrac{\\pi}{180^\\circ} = \\dfrac{120\\pi}{180} = \\dfrac{2\\pi}{3}$, so the coefficient is $\\dfrac{2}{3}$.',
          explanation: '1) $\\dfrac{\\pi}{4}$ → coefficient $\\dfrac{1}{4}$.  2) $150^\\circ$.  3) $\\dfrac{2\\pi}{3}$ → coefficient $\\dfrac{2}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'arc-length-and-sector-area',
    sections: [
      {
        id: 'arc2-intro',
        type: 'text' as const,
        content: `# 🌀 Arc Length and Sector Area

**Part 2 of 7 — Arc Length: $s = r\\theta$**

---

> 🔑 **The Idea:** An **arc** is a piece of a circle's edge. Its length is the radius times the central angle, *when the angle is measured in radians*:
> $$s = r\\theta$$`,
      },
      {
        id: 'arc2-formula',
        type: 'text' as const,
        content: `## The Arc Length Formula

| Symbol | Meaning | Unit |
|--------|---------|------|
| $s$ | arc length | same as radius (cm, m, …) |
| $r$ | radius | length |
| $\\theta$ | central angle | **radians** |

$$\\boxed{\\,s = r\\theta\\,}$$

**Worked Example:** Find the arc length cut off by a $\\dfrac{\\pi}{3}$ angle on a circle of radius $12$ cm.

$$s = r\\theta = 12 \\cdot \\frac{\\pi}{3} = \\frac{12\\pi}{3} = 4\\pi \\approx 12.57 \\text{ cm}$$

> ⚠️ **Non-negotiable rule:** $\\theta$ **must be in radians.** If you're given degrees, convert first — otherwise $s = r\\theta$ gives nonsense.`,
      },
      {
        id: 'arc2-worked2',
        type: 'text' as const,
        content: `## When the Angle Is in Degrees

**Worked Example:** A circle has radius $9$ m. Find the arc length for a $40^\\circ$ central angle.

**Step 1 — Convert to radians:**
$$40^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{40\\pi}{180} = \\frac{2\\pi}{9}$$

**Step 2 — Apply $s = r\\theta$:**
$$s = 9 \\cdot \\frac{2\\pi}{9} = 2\\pi \\approx 6.28 \\text{ m}$$

> 💡 Notice how the radius $9$ cancelled the $9$ in the denominator. Keeping $\\pi$ exact until the end keeps the arithmetic clean.`,
      },
      {
        id: 'arc2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has radius $5$. What arc length corresponds to a central angle of $2$ radians?',
              options: ['$10$', '$2.5$', '$5\\pi$', '$7$'],
              correctAnswer: 0,
              explanation: '$s = r\\theta = 5 \\cdot 2 = 10$. The angle is already in radians, so apply the formula directly.',
            },
            {
              question: 'Which mistake will make $s = r\\theta$ give a wrong answer?',
              options: ['Using radius in centimeters', 'Leaving $\\theta$ in degrees', 'Keeping $\\pi$ exact', 'Multiplying $r$ by $\\theta$'],
              correctAnswer: 1,
              explanation: '$s = r\\theta$ requires $\\theta$ in radians. Plugging in a degree measure (like $40$) instead of its radian value gives a nonsensical result.',
            },
          ],
        },
      },
      {
        id: 'arc2-input',
        type: 'input-boxes' as const,
        content: `**Compute the Arc** 🧮

Use $s = r\\theta$. Give exact answers as a coefficient of $\\pi$ (e.g. enter $6$ for $6\\pi$).

**1)** $r = 8$, $\\theta = \\dfrac{\\pi}{4}$:  $\\;s = \\,?\\,\\pi$
**2)** $r = 15$, $\\theta = \\dfrac{2\\pi}{5}$:  $\\;s = \\,?\\,\\pi$
**3)** $r = 6$, $\\theta = 60^\\circ$ *(convert first!)*:  $\\;s = \\,?\\,\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '2'],
          hint1: '$s = 8 \\cdot \\dfrac{\\pi}{4} = \\dfrac{8\\pi}{4} = 2\\pi$, so enter $2$.',
          hint2: '$s = 15 \\cdot \\dfrac{2\\pi}{5} = \\dfrac{30\\pi}{5} = 6\\pi$, so enter $6$.',
          hint3: '$60^\\circ = \\dfrac{\\pi}{3}$, then $s = 6 \\cdot \\dfrac{\\pi}{3} = 2\\pi$, so enter $2$.',
          explanation: '1) $2\\pi$.  2) $6\\pi$.  3) Convert $60^\\circ = \\dfrac{\\pi}{3}$, then $s = 6 \\cdot \\dfrac{\\pi}{3} = 2\\pi$.',
        },
      },
      {
        id: 'arc2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Solve for the Missing Piece** 🔽

The formula $s = r\\theta$ can be rearranged. Pick the right rearrangement and value.`,
        exercise: {
          dropdowns: [
            { label: 'Solve $s = r\\theta$ for $\\theta$:', options: ['$\\theta = \\dfrac{s}{r}$', '$\\theta = sr$', '$\\theta = \\dfrac{r}{s}$', '$\\theta = s - r$'] },
            { label: 'If $s = 12$ and $r = 4$, then $\\theta = $', options: ['$3$ rad', '$48$ rad', '$\\dfrac{1}{3}$ rad', '$8$ rad'] },
            { label: 'Solve $s = r\\theta$ for $r$:', options: ['$r = \\dfrac{s}{\\theta}$', '$r = s\\theta$', '$r = \\dfrac{\\theta}{s}$', '$r = s + \\theta$'] },
          ],
          correctAnswers: ['$\\theta = \\dfrac{s}{r}$', '$3$ rad', '$r = \\dfrac{s}{\\theta}$'],
          hint1: 'Divide both sides of $s = r\\theta$ by $r$ to isolate $\\theta$.',
          hint2: '$\\theta = \\dfrac{s}{r} = \\dfrac{12}{4} = 3$ radians.',
          hint3: 'Divide both sides of $s = r\\theta$ by $\\theta$ to isolate $r$.',
          explanation: 'From $s = r\\theta$: $\\theta = \\dfrac{s}{r}$ and $r = \\dfrac{s}{\\theta}$. With $s=12, r=4$, $\\theta = 3$ radians.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'arc-length-and-sector-area',
    sections: [
      {
        id: 'arc3-intro',
        type: 'text' as const,
        content: `# 🌀 Arc Length and Sector Area

**Part 3 of 7 — Sector Area: $A = \\tfrac{1}{2}r^2\\theta$**

---

> 🔑 **The Idea:** A **sector** is a "pizza slice" of a circle — the region between two radii and the arc between them. Its area is
> $$A = \\frac{1}{2}r^2\\theta \\quad (\\theta \\text{ in radians})$$`,
      },
      {
        id: 'arc3-formula',
        type: 'text' as const,
        content: `## Where the Sector Formula Comes From

A full circle ($\\theta = 2\\pi$) has area $\\pi r^2$. A sector is the fraction $\\dfrac{\\theta}{2\\pi}$ of the whole circle:

$$A = \\frac{\\theta}{2\\pi} \\cdot \\pi r^2 = \\frac{\\theta \\, r^2}{2} = \\frac{1}{2}r^2\\theta$$

**Worked Example:** Find the area of a sector with radius $10$ and central angle $\\dfrac{\\pi}{5}$.

$$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(10)^2 \\cdot \\frac{\\pi}{5} = \\frac{1}{2}(100)\\cdot\\frac{\\pi}{5} = \\frac{100\\pi}{10} = 10\\pi \\approx 31.4$$

> ⚠️ The radius is **squared** here — a common slip is forgetting the square or forgetting the $\\dfrac{1}{2}$. Both factors matter.`,
      },
      {
        id: 'arc3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A sector has radius $6$ and central angle $\\dfrac{\\pi}{2}$. Its area is:',
              options: ['$9\\pi$', '$18\\pi$', '$3\\pi$', '$36\\pi$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(6)^2 \\cdot \\frac{\\pi}{2} = \\frac{1}{2}(36)\\cdot\\frac{\\pi}{2} = 18 \\cdot \\frac{\\pi}{2} = 9\\pi$.',
            },
            {
              question: 'Which quantity in the sector formula $A = \\frac{1}{2}r^2\\theta$ must be in radians?',
              options: ['$A$', '$r$', '$\\theta$', 'All of them'],
              correctAnswer: 2,
              explanation: 'Only the central angle $\\theta$ is an angle, and it must be in radians. $A$ and $r$ are an area and a length.',
            },
          ],
        },
      },
      {
        id: 'arc3-worked2',
        type: 'text' as const,
        content: `## Sector Area From Degrees

**Worked Example:** A sprinkler sprays water over a $90^\\circ$ wedge with reach $20$ ft. What area does it water?

**Step 1 — Convert:** $90^\\circ = \\dfrac{\\pi}{2}$ radians.

**Step 2 — Apply the formula:**
$$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(20)^2 \\cdot \\frac{\\pi}{2} = \\frac{1}{2}(400)\\cdot\\frac{\\pi}{2} = 100\\pi \\approx 314 \\text{ ft}^2$$

> 💡 **Sanity check:** A full circle of radius $20$ has area $400\\pi$. A $90^\\circ$ sector is one quarter of that: $\\dfrac{400\\pi}{4} = 100\\pi$ ✓`,
      },
      {
        id: 'arc3-input',
        type: 'input-boxes' as const,
        content: `**Compute the Sector Area** 🧮

Use $A = \\dfrac{1}{2}r^2\\theta$. Give exact answers as a coefficient of $\\pi$ (e.g. enter $9$ for $9\\pi$).

**1)** $r = 4$, $\\theta = \\dfrac{\\pi}{2}$:  $\\;A = \\,?\\,\\pi$
**2)** $r = 9$, $\\theta = \\dfrac{2\\pi}{9}$:  $\\;A = \\,?\\,\\pi$
**3)** $r = 10$, $\\theta = 36^\\circ$ *(convert first!)*:  $\\;A = \\,?\\,\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '9', '10'],
          hint1: '$A = \\frac{1}{2}(4)^2\\cdot\\frac{\\pi}{2} = \\frac{1}{2}(16)\\cdot\\frac{\\pi}{2} = 4\\pi$, so enter $4$.',
          hint2: '$A = \\frac{1}{2}(9)^2\\cdot\\frac{2\\pi}{9} = \\frac{1}{2}(81)\\cdot\\frac{2\\pi}{9} = \\frac{81\\pi}{9} = 9\\pi$, so enter $9$.',
          hint3: '$36^\\circ = \\frac{\\pi}{5}$; $A = \\frac{1}{2}(10)^2\\cdot\\frac{\\pi}{5} = \\frac{1}{2}(100)\\cdot\\frac{\\pi}{5} = 10\\pi$, so enter $10$.',
          explanation: '1) $4\\pi$.  2) $9\\pi$.  3) Convert $36^\\circ = \\frac{\\pi}{5}$, then $A = \\frac{1}{2}(100)\\cdot\\frac{\\pi}{5} = 10\\pi$.',
        },
      },
      {
        id: 'arc3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Compare the Two Formulas** 🔽

Match each quantity to its correct formula or fact.`,
        exercise: {
          dropdowns: [
            { label: 'Arc length of a sector:', options: ['$s = r\\theta$', '$s = \\frac{1}{2}r^2\\theta$', '$s = \\pi r^2$', '$s = 2\\pi r$'] },
            { label: 'Area of a sector:', options: ['$A = \\frac{1}{2}r^2\\theta$', '$A = r\\theta$', '$A = \\frac{1}{2}r\\theta$', '$A = \\pi r$'] },
            { label: 'A sector with $\\theta = 2\\pi$ is:', options: ['the whole circle', 'a semicircle', 'a single radius', 'a quarter circle'] },
          ],
          correctAnswers: ['$s = r\\theta$', '$A = \\frac{1}{2}r^2\\theta$', 'the whole circle'],
          hint1: 'Arc length is a length, so it is linear in $r$: $s = r\\theta$.',
          hint2: 'Area is two-dimensional, so it involves $r^2$: $A = \\frac{1}{2}r^2\\theta$.',
          hint3: '$\\theta = 2\\pi$ is a full revolution, so the sector is the entire circle.',
          explanation: 'Length formula $s = r\\theta$ is linear in $r$; area formula $A = \\frac{1}{2}r^2\\theta$ is quadratic in $r$. At $\\theta = 2\\pi$ the sector becomes the whole circle.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'arc-length-and-sector-area',
    sections: [
      {
        id: 'arc4-intro',
        type: 'text' as const,
        content: `# 🌀 Arc Length and Sector Area

**Part 4 of 7 — The Degree Formulas (and the "Fraction" Method)**

---

> 🔑 **The Idea:** You don't always have to convert. There are direct degree formulas built on the same "fraction of the circle" logic — a $\\theta^\\circ$ sector is $\\dfrac{\\theta}{360}$ of the whole circle.`,
      },
      {
        id: 'arc4-formulas',
        type: 'text' as const,
        content: `## Degree Versions

If $\\theta$ is in **degrees**, the sector is $\\dfrac{\\theta}{360^\\circ}$ of the circle, so:

$$s = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r \\qquad\\qquad A = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2$$

| Quantity | Radian formula | Degree formula |
|----------|----------------|----------------|
| Arc length | $s = r\\theta$ | $s = \\dfrac{\\theta}{360}\\cdot 2\\pi r$ |
| Sector area | $A = \\frac{1}{2}r^2\\theta$ | $A = \\dfrac{\\theta}{360}\\cdot \\pi r^2$ |

> 💡 **Two valid roads, same destination.** Convert-then-use-radians, or use the degree formula directly. Pick whichever feels cleaner for the numbers in front of you.`,
      },
      {
        id: 'arc4-worked',
        type: 'text' as const,
        content: `## Worked Example — Both Roads

A circle has radius $18$. Find the arc length for a $30^\\circ$ central angle.

**Road A — convert first:** $30^\\circ = \\dfrac{\\pi}{6}$, so
$$s = r\\theta = 18 \\cdot \\frac{\\pi}{6} = 3\\pi \\approx 9.42$$

**Road B — degree formula directly:**
$$s = \\frac{30}{360}\\cdot 2\\pi(18) = \\frac{1}{12}\\cdot 36\\pi = 3\\pi \\approx 9.42$$

> ✅ **Same answer, $3\\pi$.** The fraction $\\dfrac{30}{360} = \\dfrac{1}{12}$ tells you the arc is one-twelfth of the full circumference $2\\pi(18) = 36\\pi$.`,
      },
      {
        id: 'arc4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using the degree formula, the arc length for a $120^\\circ$ angle on a circle of radius $9$ is:',
              options: ['$6\\pi$', '$3\\pi$', '$12\\pi$', '$18\\pi$'],
              correctAnswer: 0,
              explanation: '$s = \\frac{120}{360}\\cdot 2\\pi(9) = \\frac{1}{3}\\cdot 18\\pi = 6\\pi$.',
            },
            {
              question: 'What fraction of a full circle is a $45^\\circ$ sector?',
              options: ['$\\dfrac{1}{8}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{45}$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{45}{360} = \\dfrac{1}{8}$. A $45^\\circ$ sector is one-eighth of the circle.',
            },
          ],
        },
      },
      {
        id: 'arc4-input',
        type: 'input-boxes' as const,
        content: `**Use the Degree Formula** 🧮

Give exact answers as a coefficient of $\\pi$ (e.g. enter $5$ for $5\\pi$).

**1)** Arc length, $\\theta = 60^\\circ$, $r = 12$:  $\\;s = \\,?\\,\\pi$
**2)** Sector area, $\\theta = 90^\\circ$, $r = 8$:  $\\;A = \\,?\\,\\pi$
**3)** Sector area, $\\theta = 45^\\circ$, $r = 4$:  $\\;A = \\,?\\,\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '16', '2'],
          hint1: '$s = \\frac{60}{360}\\cdot 2\\pi(12) = \\frac{1}{6}\\cdot 24\\pi = 4\\pi$, so enter $4$.',
          hint2: '$A = \\frac{90}{360}\\cdot \\pi(8)^2 = \\frac{1}{4}\\cdot 64\\pi = 16\\pi$, so enter $16$.',
          hint3: '$A = \\frac{45}{360}\\cdot \\pi(4)^2 = \\frac{1}{8}\\cdot 16\\pi = 2\\pi$, so enter $2$.',
          explanation: '1) $s = \\frac{1}{6}\\cdot 24\\pi = 4\\pi$.  2) $A = \\frac{1}{4}\\cdot 64\\pi = 16\\pi$.  3) $A = \\frac{1}{8}\\cdot 16\\pi = 2\\pi$.',
        },
      },
      {
        id: 'arc4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Fraction** 🔽

Each degree measure represents what fraction of a full circle?`,
        exercise: {
          dropdowns: [
            { label: '$90^\\circ$ is:', options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{6}$'] },
            { label: '$60^\\circ$ is:', options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{60}$'] },
            { label: '$180^\\circ$ is:', options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{3}$', '$1$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{2}$'],
          hint1: '$\\dfrac{90}{360} = \\dfrac{1}{4}$.',
          hint2: '$\\dfrac{60}{360} = \\dfrac{1}{6}$.',
          hint3: '$\\dfrac{180}{360} = \\dfrac{1}{2}$.',
          explanation: 'Divide each angle by $360^\\circ$: $90^\\circ \\to \\frac{1}{4}$, $60^\\circ \\to \\frac{1}{6}$, $180^\\circ \\to \\frac{1}{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'arc-length-and-sector-area',
    sections: [
      {
        id: 'arc5-intro',
        type: 'text' as const,
        content: `# 🌀 Arc Length and Sector Area

**Part 5 of 7 — Angular & Linear Speed**

---

> 🔑 **The Idea:** When something spins — a wheel, a clock hand, a record — it has two speeds. **Angular speed** $\\omega$ is how fast the angle changes; **linear speed** $v$ is how fast a point on the edge travels. They are linked by $v = r\\omega$.`,
      },
      {
        id: 'arc5-defs',
        type: 'text' as const,
        content: `## Two Kinds of Speed

| Quantity | Symbol | Definition | Typical unit |
|----------|--------|-----------|--------------|
| Angular speed | $\\omega$ | angle swept per time | radians/second |
| Linear speed | $v$ | arc distance per time | meters/second |

Because arc length is $s = r\\theta$, dividing by time $t$ gives the link:

$$\\frac{s}{t} = r\\cdot\\frac{\\theta}{t} \\;\\Longrightarrow\\; \\boxed{v = r\\omega}$$

> 🔑 A point **farther from the center** (larger $r$) has a **greater linear speed** even though every point shares the same angular speed $\\omega$. That's why the outer edge of a merry-go-round whips faster than the middle.`,
      },
      {
        id: 'arc5-worked',
        type: 'text' as const,
        content: `## Worked Example — Angular Speed

A wheel makes $3$ full revolutions per second. Find its angular speed in radians per second.

Each revolution is $2\\pi$ radians, so:
$$\\omega = 3 \\text{ rev/s} \\cdot 2\\pi \\text{ rad/rev} = 6\\pi \\text{ rad/s} \\approx 18.85 \\text{ rad/s}$$

## Worked Example — Linear Speed

A wheel of radius $0.5$ m spins at $\\omega = 6\\pi$ rad/s. How fast does a point on the rim travel?
$$v = r\\omega = 0.5 \\cdot 6\\pi = 3\\pi \\text{ m/s} \\approx 9.42 \\text{ m/s}$$

> ⚠️ For $v = r\\omega$, the angular speed $\\omega$ **must be in radians** per unit time. Convert revolutions or degrees to radians first.`,
      },
      {
        id: 'arc5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two children sit on a spinning merry-go-round: one near the center, one at the edge. Which is true?',
              options: [
                'They have the same angular speed, but the edge child has greater linear speed',
                'They have the same linear speed',
                'The center child has greater linear speed',
                'They have different angular speeds',
              ],
              correctAnswer: 0,
              explanation: 'Every point shares one angular speed $\\omega$. Since $v = r\\omega$, the larger $r$ at the edge gives greater linear speed.',
            },
            {
              question: 'A fan blade completes $2$ revolutions per second. Its angular speed is:',
              options: ['$4\\pi$ rad/s', '$2\\pi$ rad/s', '$2$ rad/s', '$720$ rad/s'],
              correctAnswer: 0,
              explanation: '$\\omega = 2 \\text{ rev/s}\\cdot 2\\pi \\text{ rad/rev} = 4\\pi$ rad/s.',
            },
          ],
        },
      },
      {
        id: 'arc5-input',
        type: 'input-boxes' as const,
        content: `**Speed Calculations** 🧮

Give exact answers as a coefficient of $\\pi$ where indicated (e.g. enter $6$ for $6\\pi$).

**1)** A wheel spins at $5$ rev/s. Angular speed $\\omega = \\,?\\,\\pi$ rad/s
**2)** $r = 2$ m, $\\omega = 4\\pi$ rad/s. Linear speed $v = \\,?\\,\\pi$ m/s
**3)** $r = 3$ m, $\\omega = 10$ rad/s. Linear speed $v = \\,?$ m/s  *(plain number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '8', '30'],
          hint1: '$\\omega = 5 \\cdot 2\\pi = 10\\pi$ rad/s, so enter $10$.',
          hint2: '$v = r\\omega = 2 \\cdot 4\\pi = 8\\pi$ m/s, so enter $8$.',
          hint3: '$v = r\\omega = 3 \\cdot 10 = 30$ m/s.',
          explanation: '1) $\\omega = 5\\cdot 2\\pi = 10\\pi$.  2) $v = 2\\cdot 4\\pi = 8\\pi$.  3) $v = 3\\cdot 10 = 30$ m/s.',
        },
      },
      {
        id: 'arc5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Speed Relationships** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The link between $v$ and $\\omega$:', options: ['$v = r\\omega$', '$v = \\dfrac{\\omega}{r}$', '$v = r + \\omega$', '$v = r^2\\omega$'] },
            { label: 'Solve $v = r\\omega$ for $\\omega$:', options: ['$\\omega = \\dfrac{v}{r}$', '$\\omega = vr$', '$\\omega = \\dfrac{r}{v}$', '$\\omega = v - r$'] },
            { label: 'One revolution equals:', options: ['$2\\pi$ rad', '$\\pi$ rad', '$360$ rad', '$1$ rad'] },
          ],
          correctAnswers: ['$v = r\\omega$', '$\\omega = \\dfrac{v}{r}$', '$2\\pi$ rad'],
          hint1: 'Linear speed equals radius times angular speed.',
          hint2: 'Divide both sides of $v = r\\omega$ by $r$.',
          hint3: 'A full turn is $2\\pi$ radians (equal to $360^\\circ$).',
          explanation: '$v = r\\omega$, so $\\omega = \\dfrac{v}{r}$. One revolution is $2\\pi$ radians.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'arc-length-and-sector-area',
    sections: [
      {
        id: 'arc6-intro',
        type: 'text' as const,
        content: `# 🌀 Arc Length and Sector Area

**Part 6 of 7 — Applications & Solving Backwards**

---

> 🔑 **The Idea:** Real problems often give you the arc or area and ask for the radius or angle. The same two formulas work — just rearrange. And many shapes are **combinations** of sectors and triangles.`,
      },
      {
        id: 'arc6-solve-back',
        type: 'text' as const,
        content: `## Solving for the Unknown

**Find the angle:** An arc of length $15$ sits on a circle of radius $6$. What central angle (in radians) does it subtend?
$$\\theta = \\frac{s}{r} = \\frac{15}{6} = 2.5 \\text{ radians}$$

**Find the radius from area:** A sector of area $24\\pi$ has central angle $\\dfrac{\\pi}{3}$. Find $r$.
$$A = \\frac{1}{2}r^2\\theta \\;\\Rightarrow\\; 24\\pi = \\frac{1}{2}r^2\\cdot\\frac{\\pi}{3} = \\frac{\\pi r^2}{6}$$
$$r^2 = \\frac{24\\pi \\cdot 6}{\\pi} = 144 \\;\\Rightarrow\\; r = 12$$

> 💡 When solving for $r$ from area, you'll take a **square root** at the end (radius is positive, so keep the $+$ root).`,
      },
      {
        id: 'arc6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An arc of length $20$ lies on a circle of radius $4$. The central angle is:',
              options: ['$5$ radians', '$80$ radians', '$0.2$ radians', '$16$ radians'],
              correctAnswer: 0,
              explanation: '$\\theta = \\dfrac{s}{r} = \\dfrac{20}{4} = 5$ radians.',
            },
            {
              question: 'A sector of area $18\\pi$ has central angle $\\pi$ (a semicircle). The radius is:',
              options: ['$6$', '$3$', '$9$', '$18$'],
              correctAnswer: 0,
              explanation: '$18\\pi = \\frac{1}{2}r^2\\pi \\Rightarrow r^2 = 36 \\Rightarrow r = 6$. (Check: a semicircle of radius $6$ has area $\\frac{1}{2}\\pi(6)^2 = 18\\pi$ ✓.)',
            },
          ],
        },
      },
      {
        id: 'arc6-segment',
        type: 'text' as const,
        content: `## A Combined Shape: The Segment

A **segment** is the region between a chord and its arc — it's the *sector minus the triangle* formed by the two radii.

$$A_{\\text{segment}} = \\underbrace{\\frac{1}{2}r^2\\theta}_{\\text{sector}} - \\underbrace{\\frac{1}{2}r^2\\sin\\theta}_{\\text{triangle}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$

**Worked Example:** Radius $10$, central angle $\\dfrac{\\pi}{2}$.
$$A = \\frac{1}{2}(10)^2\\left(\\frac{\\pi}{2} - \\sin\\frac{\\pi}{2}\\right) = 50\\left(\\frac{\\pi}{2} - 1\\right) = 25\\pi - 50 \\approx 28.5$$

> 💡 The triangle's area uses $\\frac{1}{2}r^2\\sin\\theta$ — the "two sides and included angle" formula, where both sides are the radius.`,
      },
      {
        id: 'arc6-input',
        type: 'input-boxes' as const,
        content: `**Solve Backwards** 🧮

**1)** Arc $s = 21$ on radius $r = 7$. Central angle $\\theta = \\,?$ rad  *(plain number)*
**2)** Sector area $50\\pi$ with angle $\\theta = \\dfrac{\\pi}{4}$. Find $r$.  $\\;r = \\,?$  *(plain number)*
**3)** Sector area $9\\pi$ with radius $r = 6$. Find $\\theta$ as a coefficient of $\\pi$.  $\\;\\theta = \\,?\\,\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '20', '1/2'],
          hint1: '$\\theta = \\dfrac{s}{r} = \\dfrac{21}{7} = 3$ radians.',
          hint2: '$50\\pi = \\frac{1}{2}r^2\\cdot\\frac{\\pi}{4} = \\frac{\\pi r^2}{8} \\Rightarrow r^2 = \\frac{50\\pi\\cdot 8}{\\pi} = 400 \\Rightarrow r = 20$.',
          hint3: '$9\\pi = \\frac{1}{2}(6)^2\\theta = 18\\theta \\Rightarrow \\theta = \\frac{9\\pi}{18} = \\frac{\\pi}{2}$, coefficient $\\frac{1}{2}$.',
          explanation: '1) $\\theta = 3$ rad.  2) $r = 20$.  3) $\\theta = \\frac{\\pi}{2}$, so the coefficient is $\\frac{1}{2}$.',
        },
      },
      {
        id: 'arc6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Move** 🔽

For each goal, pick the correct rearranged formula.`,
        exercise: {
          dropdowns: [
            { label: 'Angle from arc & radius:', options: ['$\\theta = \\dfrac{s}{r}$', '$\\theta = sr$', '$\\theta = \\dfrac{r}{s}$', '$\\theta = \\dfrac{1}{2}sr$'] },
            { label: 'Radius from sector area & angle:', options: ['$r = \\sqrt{\\dfrac{2A}{\\theta}}$', '$r = \\dfrac{2A}{\\theta}$', '$r = \\dfrac{A}{2\\theta}$', '$r = \\sqrt{A\\theta}$'] },
            { label: 'Area of a segment:', options: ['$\\frac{1}{2}r^2(\\theta - \\sin\\theta)$', '$\\frac{1}{2}r^2\\theta$', '$\\frac{1}{2}r^2\\sin\\theta$', '$r^2\\theta$'] },
          ],
          correctAnswers: ['$\\theta = \\dfrac{s}{r}$', '$r = \\sqrt{\\dfrac{2A}{\\theta}}$', '$\\frac{1}{2}r^2(\\theta - \\sin\\theta)$'],
          hint1: 'From $s = r\\theta$, divide by $r$.',
          hint2: 'From $A = \\frac{1}{2}r^2\\theta$, solve: $r^2 = \\frac{2A}{\\theta}$, then take the square root.',
          hint3: 'A segment is the sector minus the triangle: $\\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta$.',
          explanation: 'Rearranging the two core formulas gives $\\theta = \\frac{s}{r}$ and $r = \\sqrt{\\frac{2A}{\\theta}}$; the segment area subtracts the triangle from the sector.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'arc-length-and-sector-area',
    sections: [
      {
        id: 'arc7-intro',
        type: 'text' as const,
        content: `# 🌀 Arc Length and Sector Area

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) convert between degrees and radians, (2) find arc length with $s = r\\theta$, (3) find sector area with $A = \\frac{1}{2}r^2\\theta$, (4) use the degree formulas, and (5) handle angular and linear speed. Let's put it all together.`,
      },
      {
        id: 'arc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula | Angle unit |
|------|---------|-----------|
| Degrees → radians | $\\times \\dfrac{\\pi}{180}$ | — |
| Radians → degrees | $\\times \\dfrac{180}{\\pi}$ | — |
| Arc length | $s = r\\theta$ | radians |
| Sector area | $A = \\frac{1}{2}r^2\\theta$ | radians |
| Arc length (degrees) | $s = \\dfrac{\\theta}{360}\\cdot 2\\pi r$ | degrees |
| Sector area (degrees) | $A = \\dfrac{\\theta}{360}\\cdot \\pi r^2$ | degrees |
| Linear speed | $v = r\\omega$ | $\\omega$ in rad/time |

> ⚠️ **The #1 rule of this topic:** the radian formulas ($s = r\\theta$, $A = \\frac{1}{2}r^2\\theta$, $v = r\\omega$) demand **radians**. Always check the unit of your angle before plugging in.`,
      },
      {
        id: 'arc7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has radius $14$. The arc length for a central angle of $\\dfrac{\\pi}{7}$ is:',
              options: ['$2\\pi$', '$7\\pi$', '$14\\pi$', '$\\dfrac{\\pi}{2}$'],
              correctAnswer: 0,
              explanation: '$s = r\\theta = 14 \\cdot \\dfrac{\\pi}{7} = 2\\pi$.',
            },
            {
              question: 'A sector with radius $5$ and central angle $\\dfrac{4\\pi}{5}$ has area:',
              options: ['$10\\pi$', '$4\\pi$', '$25\\pi$', '$2\\pi$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(5)^2\\cdot\\frac{4\\pi}{5} = \\frac{1}{2}(25)\\cdot\\frac{4\\pi}{5} = \\frac{100\\pi}{10} = 10\\pi$.',
            },
          ],
        },
      },
      {
        id: 'arc7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

Give answers as a coefficient of $\\pi$ unless noted (e.g. enter $3$ for $3\\pi$).

**1)** Convert $135^\\circ$ to radians: $\\,?\\,\\pi$  *(enter the fraction)*
**2)** Arc length, $r = 21$, $\\theta = \\dfrac{2\\pi}{3}$: $\\,?\\,\\pi$
**3)** Linear speed, $r = 4$ m, $\\omega = 2.5$ rad/s: $\\,?$ m/s  *(plain number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/4', '14', '10'],
          hint1: '$135^\\circ \\cdot \\dfrac{\\pi}{180} = \\dfrac{135\\pi}{180} = \\dfrac{3\\pi}{4}$, coefficient $\\dfrac{3}{4}$.',
          hint2: '$s = 21 \\cdot \\dfrac{2\\pi}{3} = \\dfrac{42\\pi}{3} = 14\\pi$, so enter $14$.',
          hint3: '$v = r\\omega = 4 \\cdot 2.5 = 10$ m/s.',
          explanation: '1) $\\dfrac{3\\pi}{4}$ → coefficient $\\dfrac{3}{4}$.  2) $14\\pi$.  3) $v = 10$ m/s.',
        },
      },
      {
        id: 'arc7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Concept Wrap-Up** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Arc length is ___ in the radius:', options: ['linear', 'quadratic', 'constant', 'inverse'] },
            { label: 'Sector area is ___ in the radius:', options: ['quadratic', 'linear', 'constant', 'inverse'] },
            { label: 'For $v = r\\omega$, $\\omega$ must be in:', options: ['radians per time', 'degrees per time', 'revolutions per time', 'meters per time'] },
          ],
          correctAnswers: ['linear', 'quadratic', 'radians per time'],
          hint1: '$s = r\\theta$ has $r$ to the first power → linear.',
          hint2: '$A = \\frac{1}{2}r^2\\theta$ has $r^2$ → quadratic.',
          hint3: 'The relation $v = r\\omega$ comes from $s = r\\theta$, which requires radians.',
          explanation: 'Arc length $s = r\\theta$ is linear in $r$; sector area $A = \\frac{1}{2}r^2\\theta$ is quadratic in $r$; and $v = r\\omega$ requires $\\omega$ in radians per unit time.',
        },
      },
      {
        id: 'arc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Convert $\\dfrac{7\\pi}{6}$ radians to degrees.',
              options: ['$210^\\circ$', '$150^\\circ$', '$240^\\circ$', '$330^\\circ$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{7\\pi}{6}\\cdot\\dfrac{180^\\circ}{\\pi} = \\dfrac{7\\cdot 180^\\circ}{6} = 7\\cdot 30^\\circ = 210^\\circ$.',
            },
            {
              question: 'A sector has radius $8$ and central angle $\\dfrac{3\\pi}{4}$. What is its area?',
              options: ['$24\\pi$', '$12\\pi$', '$6\\pi$', '$48\\pi$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(8)^2\\cdot\\frac{3\\pi}{4} = \\frac{1}{2}(64)\\cdot\\frac{3\\pi}{4} = 32\\cdot\\frac{3\\pi}{4} = 24\\pi$.',
            },
            {
              question: 'A wheel of radius $0.4$ m turns at $\\omega = 5\\pi$ rad/s. The linear speed of a point on its rim is:',
              options: ['$2\\pi$ m/s', '$5\\pi$ m/s', '$0.08\\pi$ m/s', '$20\\pi$ m/s'],
              correctAnswer: 0,
              explanation: '$v = r\\omega = 0.4 \\cdot 5\\pi = 2\\pi$ m/s $\\approx 6.28$ m/s.',
            },
          ],
        },
      },
    ],
  },
]
