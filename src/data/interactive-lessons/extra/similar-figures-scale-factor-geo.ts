import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Similar Figures and Scale Factor (Geometry).
 * Registry key: 'similar-figures-scale-factor-geo' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'similar-figures-scale-factor-geo',
    sections: [
      {
        id: 'sf1-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Figures & Scale Factor

**Part 1 of 5 — What Similarity Means**

---

### Topics in This Part

| Section |
|---------|
| Congruent vs. Similar |
| Corresponding Parts |
| The Scale Factor |

> 🔑 **Key Concept:** Two figures are **similar** when they have the *same shape* but not necessarily the same size. One is a scaled copy of the other — like a photo and its enlargement.`,
      },
      {
        id: 'sf1-define',
        type: 'text' as const,
        content: `## Congruent vs. Similar

| | Same shape? | Same size? | Symbol |
|---|---|---|---|
| **Congruent** | yes | yes | $\\cong$ |
| **Similar** | yes | no (any size) | $\\sim$ |

Two polygons are **similar** ($\\sim$) when **both** of these are true:

1. **Corresponding angles are equal** (the shape matches).
2. **Corresponding sides are proportional** (all scaled by the same number).

$$\\triangle ABC \\sim \\triangle DEF$$

This statement is read "triangle $ABC$ is similar to triangle $DEF$." The **order of the letters matters** — it tells you which parts correspond:

$$A \\leftrightarrow D, \\quad B \\leftrightarrow E, \\quad C \\leftrightarrow F$$

> ⚠️ Congruent figures are *also* similar (a scale factor of $1$). But similar figures are usually **not** congruent.`,
      },
      {
        id: 'sf1-corresponding',
        type: 'text' as const,
        content: `## Corresponding Parts

When you write $\\triangle ABC \\sim \\triangle DEF$, line up the letters to match parts:

| Corresponding angles | Corresponding sides |
|---|---|
| $\\angle A = \\angle D$ | $AB \\leftrightarrow DE$ |
| $\\angle B = \\angle E$ | $BC \\leftrightarrow EF$ |
| $\\angle C = \\angle F$ | $CA \\leftrightarrow FD$ |

The proportional-side rule says **all** the side ratios are equal:

$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{CA}{FD}$$

> 💡 To find a side that corresponds to another, read the *same position* in each name. In $ABCD \\sim WXYZ$, side $BC$ corresponds to side $XY$ (2nd and 3rd letters).`,
      },
      {
        id: 'sf1-corr-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Given $\\triangle PQR \\sim \\triangle STU$, which side corresponds to $QR$?',
              options: ['$TU$', '$ST$', '$SU$', '$PR$'],
              correctAnswer: 0,
              explanation: '$QR$ uses the 2nd and 3rd letters ($Q,R$). In $STU$, the 2nd and 3rd letters are $T,U$, so $QR \\leftrightarrow TU$.',
            },
            {
              question: 'For two figures to be similar, corresponding angles must be ___ and corresponding sides must be ___.',
              options: ['equal; proportional', 'proportional; equal', 'equal; equal', 'proportional; proportional'],
              correctAnswer: 0,
              explanation: 'Similar figures have equal corresponding angles (same shape) and proportional corresponding sides (scaled by the same factor).',
            },
          ],
        },
      },
      {
        id: 'sf1-scale-factor',
        type: 'text' as const,
        content: `## The Scale Factor

The **scale factor** ($k$) is the single number that every side is multiplied by to get from one figure to the other:

$$k = \\frac{\\text{new (image) side}}{\\text{original side}} = \\frac{\\text{a side of figure 2}}{\\text{corresponding side of figure 1}}$$

### Example

A small triangle has a side of length $4$. The corresponding side in the larger, similar triangle is $12$.

$$k = \\frac{12}{4} = 3$$

Every side of the big triangle is **3 times** the matching side of the small one.

| Scale factor $k$ | Meaning |
|---|---|
| $k > 1$ | **enlargement** (image is bigger) |
| $k = 1$ | congruent (same size) |
| $0 < k < 1$ | **reduction** (image is smaller) |

> 🔑 **Key Idea:** $k$ is just the *ratio of corresponding sides*. Once you know $k$, you can find any missing side by multiplying (or dividing).`,
      },
      {
        id: 'sf1-sf-drill',
        type: 'input-boxes' as const,
        content: `**Find the Scale Factor** 🧮

For each pair of corresponding sides, find $k$ going **from figure 1 to figure 2** (so $k = \\dfrac{\\text{side}_2}{\\text{side}_1}$).

**1)** side$_1 = 5$, side$_2 = 20 \\;\\Rightarrow\\; k = \\,?$
**2)** side$_1 = 6$, side$_2 = 9 \\;\\Rightarrow\\; k = \\,?$  *(decimal is fine)*
**3)** side$_1 = 10$, side$_2 = 4 \\;\\Rightarrow\\; k = \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '1.5', '0.4'],
          hint1: 'Divide the figure-2 side by the figure-1 side: $20 \\div 5$.',
          hint2: '$9 \\div 6 = 1.5$. Since $k > 1$, this is an enlargement.',
          hint3: '$4 \\div 10 = 0.4$. Since $0 < k < 1$, this is a reduction.',
          explanation: '1) $k = 20/5 = 4$ (enlargement).  2) $k = 9/6 = 1.5$ (enlargement).  3) $k = 4/10 = 0.4$ (reduction).',
        },
      },
      {
        id: 'sf1-classify',
        type: 'dropdown-select' as const,
        content: `**Enlargement or Reduction?** 🔽

For each scale factor (figure 1 → figure 2), choose what happens to the figure.`,
        exercise: {
          dropdowns: [
            { label: '$k = 2$:', options: ['enlargement', 'reduction', 'congruent'] },
            { label: '$k = 0.75$:', options: ['reduction', 'enlargement', 'congruent'] },
            { label: '$k = 1$:', options: ['congruent', 'enlargement', 'reduction'] },
          ],
          correctAnswers: ['enlargement', 'reduction', 'congruent'],
          hint1: '$k > 1$ makes the image bigger.',
          hint2: '$0 < k < 1$ makes the image smaller.',
          hint3: '$k = 1$ means the two figures are exactly the same size — congruent.',
          explanation: '$k > 1$ → enlargement; $0 < k < 1$ → reduction; $k = 1$ → congruent (same size).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'similar-figures-scale-factor-geo',
    sections: [
      {
        id: 'sf2-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Figures & Scale Factor

**Part 2 of 5 — Finding Missing Sides**

---

> 🔑 **The Idea:** Because corresponding sides are proportional, a single missing length can be found by setting up a **proportion** or by multiplying by the **scale factor**.`,
      },
      {
        id: 'sf2-proportion',
        type: 'text' as const,
        content: `## Two Ways to Find a Missing Side

### Method 1 — Scale factor

Find $k$ from a *known* pair of corresponding sides, then multiply.

**Example:** $\\triangle ABC \\sim \\triangle DEF$ with $AB = 8$ matching $DE = 12$, and $BC = 6$. Find $EF$.

$$k = \\frac{DE}{AB} = \\frac{12}{8} = 1.5 \\quad\\Rightarrow\\quad EF = BC \\cdot k = 6 \\cdot 1.5 = 9$$

### Method 2 — Proportion

Set up matching ratios and **cross-multiply**.

$$\\frac{AB}{DE} = \\frac{BC}{EF} \\;\\Rightarrow\\; \\frac{8}{12} = \\frac{6}{EF}$$

Cross-multiply: $8 \\cdot EF = 12 \\cdot 6 = 72$, so $EF = \\dfrac{72}{8} = 9$. ✓

> 💡 Both methods always agree. Use a proportion when the unknown is *inside* a ratio; use the scale factor when you'll find several sides at once.`,
      },
      {
        id: 'sf2-cross',
        type: 'text' as const,
        content: `## Cross-Multiplication, Step by Step

To solve $\\dfrac{3}{x} = \\dfrac{9}{15}$:

1. **Cross-multiply:** $9 \\cdot x = 3 \\cdot 15$
2. **Simplify:** $9x = 45$
3. **Divide:** $x = \\dfrac{45}{9} = 5$

> ⚠️ **Set up ratios consistently.** Keep figure 1 on top and figure 2 on the bottom in *both* fractions (or vice versa). Mixing the order is the #1 mistake.`,
      },
      {
        id: 'sf2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two similar rectangles: the small one is $4$ by $10$; the large one has a width of $6$ matching the $4$. What is the scale factor (small → large)?',
              options: ['$1.5$', '$2$', '$0.5$', '$2.5$'],
              correctAnswer: 0,
              explanation: '$k = \\frac{6}{4} = 1.5$. The matching sides are the width $4$ and the width $6$.',
            },
            {
              question: 'Using that scale factor, the large rectangle\'s length (matching the $10$) is:',
              options: ['$15$', '$12$', '$16$', '$20$'],
              correctAnswer: 0,
              explanation: 'Multiply the corresponding side by $k$: $10 \\cdot 1.5 = 15$.',
            },
          ],
        },
      },
      {
        id: 'sf2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Proportion** 🔽

You're solving $\\dfrac{3}{x} = \\dfrac{9}{15}$ for $x$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Cross-multiply to get:', options: ['$9x = 45$', '$3x = 135$', '$15x = 27$', '$9x = 18$'] },
            { label: 'Solve for $x$:', options: ['$x = 5$', '$x = 9$', '$x = 3$', '$x = 15$'] },
            { label: 'This means the scale factor (top fig → bottom fig) is:', options: ['$3$', '$\\frac{1}{3}$', '$5$', '$9$'] },
          ],
          correctAnswers: ['$9x = 45$', '$x = 5$', '$3$'],
          hint1: 'Cross-multiply: $9 \\cdot x = 3 \\cdot 15 = 45$.',
          hint2: 'Divide both sides by $9$: $x = 45 \\div 9 = 5$.',
          hint3: 'The ratio $\\frac{9}{15} = \\frac{3}{5}$... wait — compare $\\frac{15}{9}$? Each bottom side is $3\\times$ its top: $9 = 3\\cdot 3$ and $15 = 3 \\cdot 5$.',
          explanation: '$\\frac{3}{x} = \\frac{9}{15} \\Rightarrow 9x = 45 \\Rightarrow x = 5$. The bottom figure is $3\\times$ the top, so $k = 3$.',
        },
      },
      {
        id: 'sf2-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Missing Side** 🧮

Each pair of figures is similar. Find the missing length.

**1)** $\\triangle ABC \\sim \\triangle DEF$. $AB = 8 \\leftrightarrow DE = 12$, and $BC = 6$. Find $EF$.
**2)** Similar rectangles: small is $4 \\times 10$, large width $= 6$ (matches the $4$). Find the large length.
**3)** $\\dfrac{5}{x} = \\dfrac{15}{21}$. Find $x$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '15', '7'],
          hint1: '$k = 12/8 = 1.5$, so $EF = 6 \\cdot 1.5 = 9$.',
          hint2: '$k = 6/4 = 1.5$, so length $= 10 \\cdot 1.5 = 15$.',
          hint3: 'Cross-multiply: $15x = 5 \\cdot 21 = 105$, so $x = 105/15 = 7$.',
          explanation: '1) $EF = 9$.  2) length $= 15$.  3) $x = 7$. Each uses corresponding-side proportionality.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'similar-figures-scale-factor-geo',
    sections: [
      {
        id: 'sf3-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Figures & Scale Factor

**Part 3 of 5 — Perimeter, Area & Volume Ratios**

---

> 🔑 **The Big Pattern:** If the scale factor for *lengths* is $k$, then **perimeter** scales by $k$, **area** scales by $k^2$, and **volume** scales by $k^3$. Dimensions become exponents.`,
      },
      {
        id: 'sf3-ratios',
        type: 'text' as const,
        content: `## The $k$, $k^2$, $k^3$ Rule

| Quantity | Dimension | Ratio (figure 2 : figure 1) |
|---|---|---|
| Side / Perimeter | length (1-D) | $k$ |
| Area / Surface area | area (2-D) | $k^2$ |
| Volume | volume (3-D) | $k^3$ |

### Why area uses $k^2$

A square with side $s$ has area $s^2$. Scale the side by $k$:

$$\\text{new area} = (ks)^2 = k^2 s^2 = k^2 \\cdot (\\text{old area})$$

The same logic gives volume $= (ks)^3 = k^3 s^3$.

### Example

Two similar triangles have scale factor $k = 3$.
- Perimeter ratio $= 3$
- Area ratio $= 3^2 = 9$ (the big one has **9×** the area)

> ⚠️ A common trap: doubling the side does **not** double the area — it makes the area $2^2 = 4$ times larger.`,
      },
      {
        id: 'sf3-apply',
        type: 'text' as const,
        content: `## Working Backwards

You can also go *from* an area or volume ratio *back to* the length scale factor:

$$k = \\sqrt{\\text{area ratio}} \\qquad k = \\sqrt[3]{\\text{volume ratio}}$$

### Example

Two similar pentagons have areas $25\\text{ cm}^2$ and $100\\text{ cm}^2$.

$$\\text{area ratio} = \\frac{100}{25} = 4 \\quad\\Rightarrow\\quad k = \\sqrt{4} = 2$$

So the larger pentagon's **sides** are only $2\\times$ as long, even though its area is $4\\times$ as big.

> 💡 **Reduction check:** for a half-size copy ($k = \\frac12$), the area ratio is $\\left(\\frac12\\right)^2 = \\frac14$ and the volume ratio is $\\left(\\frac12\\right)^3 = \\frac18$.`,
      },
      {
        id: 'sf3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two similar figures have a scale factor of $k = 4$. What is the ratio of their areas?',
              options: ['$16$', '$4$', '$8$', '$64$'],
              correctAnswer: 0,
              explanation: 'Area scales by $k^2 = 4^2 = 16$.',
            },
            {
              question: 'Two similar solids have a volume ratio of $64$. What is the scale factor for their edges?',
              options: ['$4$', '$8$', '$64$', '$16$'],
              correctAnswer: 0,
              explanation: 'Edges scale by $k = \\sqrt[3]{64} = 4$, since volume scales by $k^3$.',
            },
            {
              question: 'If you double every side of a figure, the area becomes:',
              options: ['$4$ times as large', '$2$ times as large', '$8$ times as large', 'the same'],
              correctAnswer: 0,
              explanation: '$k = 2 \\Rightarrow$ area ratio $= 2^2 = 4$. Doubling sides quadruples the area.',
            },
          ],
        },
      },
      {
        id: 'sf3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Ratio** 🔽

For each scaling situation, choose the correct multiplier.`,
        exercise: {
          dropdowns: [
            { label: 'Perimeter ratio when $k = 2.5$:', options: ['$2.5$', '$6.25$', '$5$', '$15.625$'] },
            { label: 'Area ratio when $k = 3$:', options: ['$9$', '$3$', '$6$', '$27$'] },
            { label: 'Volume ratio when $k = 3$:', options: ['$27$', '$9$', '$3$', '$81$'] },
            { label: 'Scale factor $k$ when the area ratio is $49$:', options: ['$7$', '$49$', '$24.5$', '$2401$'] },
          ],
          correctAnswers: ['$2.5$', '$9$', '$27$', '$7$'],
          hint1: 'Perimeter is a length, so it scales by $k$ itself — no exponent.',
          hint2: 'Area uses $k^2$; volume uses $k^3$.',
          hint3: 'To undo an area ratio, take the square root: $\\sqrt{49} = 7$.',
          explanation: 'Perimeter $\\to k = 2.5$. Area $\\to k^2 = 9$. Volume $\\to k^3 = 27$. From area ratio $49$, $k = \\sqrt{49} = 7$.',
        },
      },
      {
        id: 'sf3-drill',
        type: 'input-boxes' as const,
        content: `**Scale the Measurements** 🧮

**1)** A figure has perimeter $14$. A similar figure has $k = 2.5$. Find its perimeter.
**2)** A figure has area $5\\text{ cm}^2$. A similar figure has $k = 2$. Find its area (cm²).
**3)** A solid has volume $8\\text{ cm}^3$. A similar solid has $k = 3$. Find its volume (cm³).
**4)** Two similar figures have areas $100$ and $25$. Find the scale factor $k$ (larger → smaller is *not* asked — give large:small as a number $> 1$).`,
        exercise: {
          boxes: 4,
          correctAnswers: ['35', '20', '216', '2'],
          hint1: 'Perimeter scales by $k$: $14 \\cdot 2.5 = 35$.',
          hint2: 'Area scales by $k^2$: $5 \\cdot 2^2 = 5 \\cdot 4 = 20$.',
          hint3: 'Volume scales by $k^3$: $8 \\cdot 3^3 = 8 \\cdot 27 = 216$.',
          explanation: '1) $14 \\cdot 2.5 = 35$.  2) $5 \\cdot 4 = 20$.  3) $8 \\cdot 27 = 216$.  4) area ratio $= 100/25 = 4$, so $k = \\sqrt{4} = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'similar-figures-scale-factor-geo',
    sections: [
      {
        id: 'sf4-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Figures & Scale Factor

**Part 4 of 5 — Real-World Applications**

---

> 🔑 **Big Payoff:** Similarity lets you measure things you can't reach — the height of a tree, the distance on a map, the real size of a model — all with a single proportion.`,
      },
      {
        id: 'sf4-indirect',
        type: 'text' as const,
        content: `## Indirect Measurement (Shadows)

At the same time of day, the sun makes **similar triangles** out of every object and its shadow. So:

$$\\frac{\\text{object 1 height}}{\\text{object 1 shadow}} = \\frac{\\text{object 2 height}}{\\text{object 2 shadow}}$$

### Example

A $6$-ft person casts a $4$-ft shadow. At the same moment, a tree casts a $24$-ft shadow. How tall is the tree?

$$\\frac{6}{4} = \\frac{h}{24} \\;\\Rightarrow\\; 4h = 6 \\cdot 24 = 144 \\;\\Rightarrow\\; h = \\frac{144}{4} = 36 \\text{ ft}$$

> 💡 Keep the **same kind of measurement on top** in both ratios (height over shadow = height over shadow). The triangles are similar because the sun's angle is identical.`,
      },
      {
        id: 'sf4-scale-drawing',
        type: 'text' as const,
        content: `## Scale Drawings, Maps & Models

A **scale** is a ratio that compares a drawing/model to the real thing, e.g. "$1\\text{ in} = 50\\text{ mi}$" or "$1:24$".

| Scale | Meaning |
|---|---|
| $1\\text{ in} = 50\\text{ mi}$ (map) | each inch on the map is $50$ real miles |
| $1:24$ (model car) | the real car is $24\\times$ the model |
| $1\\text{ in} = 4\\text{ ft}$ (blueprint) | each inch on paper is $4$ real feet |

### Example — Map

Two cities are $3.5$ in apart on a map scaled $1\\text{ in} = 50\\text{ mi}$.

$$\\text{real distance} = 3.5 \\times 50 = 175 \\text{ mi}$$

### Example — Model

A model car is built at $1:24$. The model is $8$ in long. The real car is:

$$8 \\times 24 = 192 \\text{ in} = \\frac{192}{12} = 16 \\text{ ft}$$

> ⚠️ Watch your **units**. Convert at the end (here $192$ inches $\\to 16$ feet), not in the middle of the proportion.`,
      },
      {
        id: 'sf4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $5$-ft stick casts a $3$-ft shadow while a flagpole casts an $18$-ft shadow. How tall is the flagpole?',
              options: ['$30$ ft', '$10.8$ ft', '$27$ ft', '$90$ ft'],
              correctAnswer: 0,
              explanation: '$\\frac{5}{3} = \\frac{h}{18} \\Rightarrow 3h = 90 \\Rightarrow h = 30$ ft.',
            },
            {
              question: 'On a blueprint, $1\\text{ in} = 4\\text{ ft}$. A wall is $20$ ft long in real life. How long is it on the blueprint?',
              options: ['$5$ in', '$80$ in', '$16$ in', '$24$ in'],
              correctAnswer: 0,
              explanation: 'Divide the real length by the scale: $20 \\div 4 = 5$ in.',
            },
          ],
        },
      },
      {
        id: 'sf4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Map Problem** 🔽

A map uses the scale $1\\text{ in} = 50\\text{ mi}$. Two cities are $3.5$ in apart.`,
        exercise: {
          dropdowns: [
            { label: 'The proportion is:', options: ['$\\frac{1}{50} = \\frac{3.5}{d}$', '$\\frac{1}{50} = \\frac{d}{3.5}$', '$\\frac{50}{1} = \\frac{3.5}{d}$', '$\\frac{1}{3.5} = \\frac{50}{d}$'] },
            { label: 'Cross-multiplying gives:', options: ['$d = 175$', '$d = 50$', '$d = 14.3$', '$d = 53.5$'] },
            { label: 'The real distance is:', options: ['$175$ mi', '$175$ in', '$3.5$ mi', '$50$ mi'] },
          ],
          correctAnswers: ['$\\frac{1}{50} = \\frac{3.5}{d}$', '$d = 175$', '$175$ mi'],
          hint1: 'Match units: inches over miles equals inches over miles, so $\\frac{1}{50} = \\frac{3.5}{d}$.',
          hint2: 'Cross-multiply: $1 \\cdot d = 50 \\cdot 3.5 = 175$.',
          hint3: 'The unknown $d$ is a real-world distance, measured in miles.',
          explanation: '$\\frac{1\\text{ in}}{50\\text{ mi}} = \\frac{3.5\\text{ in}}{d} \\Rightarrow d = 50 \\cdot 3.5 = 175$ mi.',
        },
      },
      {
        id: 'sf4-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

**1)** A $6$-ft person casts a $4$-ft shadow; a tree casts a $24$-ft shadow. Find the tree's height (ft).
**2)** Map scale $1\\text{ in} = 50\\text{ mi}$. Two towns are $3.5$ in apart. Find the real distance (mi).
**3)** A model is built at $1:24$ and is $8$ in long. Find the real length in **feet**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '175', '16'],
          hint1: '$\\frac{6}{4} = \\frac{h}{24} \\Rightarrow h = \\frac{6 \\cdot 24}{4} = 36$.',
          hint2: 'Multiply map inches by the scale: $3.5 \\cdot 50 = 175$ mi.',
          hint3: 'Real length $= 8 \\cdot 24 = 192$ in $= 192 / 12 = 16$ ft.',
          explanation: '1) tree $= 36$ ft.  2) distance $= 175$ mi.  3) $192$ in $= 16$ ft.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'similar-figures-scale-factor-geo',
    sections: [
      {
        id: 'sf5-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Figures & Scale Factor

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize and name similar figures, (2) find a scale factor, (3) solve for missing sides, (4) scale perimeter/area/volume by $k$, $k^2$, $k^3$, and (5) apply similarity to the real world. Let's put it together.`,
      },
      {
        id: 'sf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|---|---|
| Test for similarity | equal angles **and** proportional sides |
| Scale factor $k$ | $\\dfrac{\\text{new side}}{\\text{original side}}$ |
| Missing side | proportion + cross-multiply |
| Perimeter ratio | $k$ |
| Area ratio | $k^2$ |
| Volume ratio | $k^3$ |
| Back out $k$ | $\\sqrt{\\text{area ratio}}$ or $\\sqrt[3]{\\text{volume ratio}}$ |

> ⚠️ Remember: the order of letters in $\\triangle ABC \\sim \\triangle DEF$ tells you which parts correspond, and **area scales faster than length** (squared), volume faster still (cubed).`,
      },
      {
        id: 'sf5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$ matching $DE = 15$, and $BC = 8$. Find $EF$.',
              options: ['$20$', '$12$', '$18$', '$17$'],
              correctAnswer: 0,
              explanation: '$k = \\frac{15}{6} = 2.5$, so $EF = 8 \\cdot 2.5 = 20$.',
            },
            {
              question: 'Two similar rectangles have corresponding sides $3$ and $12$. What is the ratio of their areas?',
              options: ['$16$', '$4$', '$8$', '$144$'],
              correctAnswer: 0,
              explanation: '$k = \\frac{12}{3} = 4$, so the area ratio is $k^2 = 4^2 = 16$.',
            },
          ],
        },
      },
      {
        id: 'sf5-dropdown',
        type: 'dropdown-select' as const,
        content: `**One More Set** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Two figures are similar with $k = \\frac{1}{3}$. Their area ratio is:', options: ['$\\frac{1}{9}$', '$\\frac{1}{3}$', '$\\frac{1}{27}$', '$3$'] },
            { label: 'A small triangle has perimeter $12$. With $k = 3$, the large perimeter is:', options: ['$36$', '$108$', '$15$', '$4$'] },
            { label: 'In $ABCD \\sim WXYZ$, side $CD$ corresponds to:', options: ['$YZ$', '$XY$', '$WX$', '$ZW$'] },
          ],
          correctAnswers: ['$\\frac{1}{9}$', '$36$', '$YZ$'],
          hint1: 'Area ratio $= k^2 = \\left(\\frac13\\right)^2$.',
          hint2: 'Perimeter scales by $k$ (length): $12 \\cdot 3$.',
          hint3: '$CD$ uses the 3rd and 4th letters; in $WXYZ$ those are $Y$ and $Z$.',
          explanation: 'Area ratio $= \\left(\\frac13\\right)^2 = \\frac19$. Large perimeter $= 12 \\cdot 3 = 36$. $CD \\leftrightarrow YZ$ (3rd/4th letters).',
        },
      },
      {
        id: 'sf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Two similar triangles have a scale factor of $k = 3$. The smaller has area $5\\text{ cm}^2$. The larger triangle\'s area is:',
              options: ['$45\\text{ cm}^2$', '$15\\text{ cm}^2$', '$8\\text{ cm}^2$', '$135\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: 'Area scales by $k^2 = 9$, so $5 \\cdot 9 = 45\\text{ cm}^2$.',
            },
            {
              question: 'A $5$-ft post casts a $2$-ft shadow while a building casts a $30$-ft shadow at the same time. How tall is the building?',
              options: ['$75$ ft', '$12$ ft', '$60$ ft', '$150$ ft'],
              correctAnswer: 0,
              explanation: '$\\frac{5}{2} = \\frac{h}{30} \\Rightarrow 2h = 150 \\Rightarrow h = 75$ ft.',
            },
            {
              question: 'Two similar solids have a volume ratio of $8$. What is the ratio of their surface areas?',
              options: ['$4$', '$8$', '$2$', '$64$'],
              correctAnswer: 0,
              explanation: 'From volume ratio $8$, $k = \\sqrt[3]{8} = 2$. Surface area (an area) scales by $k^2 = 2^2 = 4$.',
            },
          ],
        },
      },
    ],
  },
]
