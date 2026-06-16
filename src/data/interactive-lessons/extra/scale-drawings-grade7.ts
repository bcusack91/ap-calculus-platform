import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Scale Drawings (Grade 7 Math, CCSS 7.G.A.1).
 * Registry key / DB Topic.slug: 'scale-drawings-grade7'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 7:
 * reading a scale, scale factor, computing actual lengths from a drawing and drawing
 * lengths from actual measurements, areas under a scale, and reproducing a drawing
 * at a new scale. LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'scale-drawings-grade7',
    sections: [
      {
        id: 'sd7-1-intro',
        type: 'text' as const,
        content: `# 📐 Scale Drawings

**Part 1 of 5 — What Is a Scale Drawing?**

---

### Topics in This Part

| Section |
|---------|
| Scale drawings in real life |
| Reading a scale |
| The scale factor |

> 🔑 **Key Concept:** A **scale drawing** shows a real object at a different size — usually smaller — but keeps every length in the same proportion. A map, a floor plan, and a model car are all scale drawings.`,
      },
      {
        id: 'sd7-1-what',
        type: 'text' as const,
        content: `## Scale Drawings in Real Life

You can't fit a real house on a sheet of paper, so an architect *shrinks* it. A **scale drawing** is a picture that is **bigger or smaller** than the real thing while keeping the **same shape** — all the lengths are reduced (or enlarged) by the same amount.

Two drawings that are scale copies of each other are **similar**: same shape, different size.

### Where you see them

| Drawing | Real object | Usually |
|---------|-------------|---------|
| Road map | A whole country | Much smaller |
| Floor plan | A house | Much smaller |
| Model rocket | A real rocket | Much smaller |
| Diagram of an ant | A tiny ant | Much **larger** |

> 💡 A scale drawing can **enlarge** too — a biology diagram of a cell is far bigger than the real cell. Either way, the rule is the same: every length changes by the same factor.`,
      },
      {
        id: 'sd7-1-reading',
        type: 'text' as const,
        content: `## Reading a Scale

Every scale drawing comes with a **scale** that tells you how a length on the drawing matches a length in real life. It is written as a ratio:

$$\\text{drawing length} : \\text{actual length}$$

**Example:** A scale of $1\\text{ cm} : 5\\text{ m}$ means:

> Every **1 cm** on the drawing stands for **5 m** in real life.

So a wall drawn $3$ cm long is really $3 \\times 5 = 15$ m long.

| Scale | Reads as |
|-------|----------|
| $1\\text{ in} : 4\\text{ ft}$ | 1 inch on paper $=$ 4 feet for real |
| $1\\text{ cm} : 50\\text{ km}$ | 1 cm on the map $=$ 50 km for real |
| $2\\text{ cm} : 1\\text{ m}$ | 2 cm on paper $=$ 1 m for real |

> ⚠️ **Order matters.** The first number is always the **drawing** length and the second is the **actual** length. Don't swap them.`,
      },
      {
        id: 'sd7-1-reading-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A map has a scale of $1\\text{ cm} : 20\\text{ km}$. What does this mean?',
              options: [
                'Each 1 cm on the map represents 20 km in real life',
                'Each 20 cm on the map represents 1 km in real life',
                'The map is 20 cm wide',
                'Each 1 km in real life is 20 cm on the map',
              ],
              correctAnswer: 0,
              explanation: 'The first number is the drawing length and the second is the actual length, so $1$ cm on the map stands for $20$ km in real life.',
            },
            {
              question: 'Which statement is TRUE about every scale drawing?',
              options: [
                'It keeps the same shape as the real object',
                'It is always smaller than the real object',
                'It changes the shape of the object',
                'It only works for buildings',
              ],
              correctAnswer: 0,
              explanation: 'A scale drawing is similar to the real object — same shape, different size. It can be smaller OR larger, and it works for anything.',
            },
          ],
        },
      },
      {
        id: 'sd7-1-factor',
        type: 'text' as const,
        content: `## The Scale Factor

The **scale factor** is the single number you **multiply a drawing length by** to get the actual length (after matching the units).

For a scale of $1\\text{ cm} : 5\\text{ cm}$, the scale factor is $5$ — actual lengths are $5$ times the drawing lengths.

$$\\text{scale factor} = \\frac{\\text{actual length}}{\\text{drawing length}}$$

> 🔑 **Watch the units.** To get a pure scale factor, both lengths must be in the **same unit**. The scale $1\\text{ cm} : 1\\text{ m}$ becomes $1\\text{ cm} : 100\\text{ cm}$, so the scale factor is $100$ — not $1$.

| Scale | Same units | Scale factor |
|-------|-----------|--------------|
| $1\\text{ cm} : 5\\text{ cm}$ | $1 : 5$ | $5$ |
| $1\\text{ cm} : 1\\text{ m}$ | $1 : 100$ | $100$ |
| $1\\text{ in} : 1\\text{ ft}$ | $1 : 12$ | $12$ |`,
      },
      {
        id: 'sd7-1-factor-drill',
        type: 'input-boxes' as const,
        content: `**Find the Scale Factor** 🧮

Convert each scale to the same units, then give the scale factor (the number you multiply drawing lengths by).

**1)** $1\\text{ cm} : 8\\text{ cm}\\;\\Rightarrow\\;$ scale factor $= \\,?$
**2)** $1\\text{ cm} : 2\\text{ m}\\;\\Rightarrow\\;$ scale factor $= \\,?$  *(1 m = 100 cm)*
**3)** $1\\text{ ft} : 1\\text{ yd}\\;\\Rightarrow\\;$ scale factor $= \\,?$  *(1 yd = 3 ft)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '200', '3'],
          hint1: 'Same units already: $1 : 8$, so the factor is $8$.',
          hint2: '$2\\text{ m} = 200\\text{ cm}$, so $1\\text{ cm} : 200\\text{ cm}$ gives a factor of $200$.',
          hint3: '$1\\text{ yd} = 3\\text{ ft}$, so $1\\text{ ft} : 3\\text{ ft}$ gives a factor of $3$.',
          explanation: '1) $8$.  2) Convert $2$ m to $200$ cm $\\Rightarrow 200$.  3) Convert $1$ yd to $3$ ft $\\Rightarrow 3$. Always match units first.',
        },
      },
      {
        id: 'sd7-1-vocab',
        type: 'text' as const,
        content: `## Putting the Words Together

Three terms describe a scale drawing — make sure you can tell them apart:

| Term | What it is |
|------|-----------|
| **Scale** | The ratio $\\text{drawing} : \\text{actual}$, e.g. $1\\text{ cm} : 5\\text{ m}$ |
| **Scale factor** | The single multiplier (same units), e.g. $500$ |
| **Similar** | Same shape, different size — true of any scale copy |

> 💡 The **scale** keeps its units ($1$ cm to $5$ m); the **scale factor** is just a number once both lengths share a unit.`,
      },
      {
        id: 'sd7-1-vocab-check',
        type: 'dropdown-select' as const,
        content: `**Match the Word** 🔽

A blueprint uses the scale $1\\text{ cm} : 4\\text{ m}$. Pick the term that fits each blank.`,
        exercise: {
          dropdowns: [
            { label: 'The ratio $1\\text{ cm} : 4\\text{ m}$ is called the:', options: ['scale', 'scale factor', 'area', 'perimeter'] },
            { label: 'Written in the same units it is $1 : 400$, and $400$ is the:', options: ['scale factor', 'scale', 'remainder', 'difference'] },
            { label: 'The drawing and the real building are:', options: ['similar', 'identical', 'congruent', 'unrelated'] },
          ],
          correctAnswers: ['scale', 'scale factor', 'similar'],
          hint1: 'The ratio written with units (cm to m) is the scale.',
          hint2: 'Once both lengths share a unit, the single multiplier is the scale factor: $4\\text{ m} = 400\\text{ cm}$.',
          hint3: 'Scale copies have the same shape but a different size — that word is "similar."',
          explanation: 'The ratio with units is the **scale**; the unitless multiplier ($400$) is the **scale factor**; and a drawing plus its real object are **similar**.',
        },
      },
      {
        id: 'sd7-1-wrap',
        type: 'text' as const,
        content: `## What You Have So Far

You can now read a scale, know that scale drawings keep the same shape, and you can find the **scale factor** by matching units.

In **Part 2** we use the scale to do the most common job: take a length *on the drawing* and find the *real* length.

> 🔑 **Remember:** drawing $\\xrightarrow{\\;\\times\\,\\text{scale factor}\\;}$ actual.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'scale-drawings-grade7',
    sections: [
      {
        id: 'sd7-2-intro',
        type: 'text' as const,
        content: `# 📐 Scale Drawings

**Part 2 of 5 — From Drawing to Real Life**

---

> 🔑 **The Job:** You measure a length **on the drawing** and need the **actual** length. Multiply by the scale, keeping the units lined up.`,
      },
      {
        id: 'sd7-2-method',
        type: 'text' as const,
        content: `## Drawing Length → Actual Length

Set up a proportion using the scale. If the scale is $1\\text{ cm} : 5\\text{ m}$, then:

$$\\frac{1\\text{ cm}}{5\\text{ m}} = \\frac{\\text{drawing}}{\\text{actual}}$$

### Worked Example: scale $1\\text{ cm} : 5\\text{ m}$

A hallway is drawn $4$ cm long. How long is it really?

Each $1$ cm stands for $5$ m, so multiply the drawing length by $5$:

$$4\\text{ cm} \\times 5\\frac{\\text{m}}{\\text{cm}} = 20\\text{ m}$$

> ✅ **Check:** $4$ cm is $4$ times the $1$ cm unit, so the real length is $4$ times $5$ m $= 20$ m. ✓`,
      },
      {
        id: 'sd7-2-worked2',
        type: 'text' as const,
        content: `### Worked Example: scale $1\\text{ in} : 8\\text{ ft}$

A bedroom is drawn $3.5$ in wide on a floor plan. Find the real width.

$$3.5\\text{ in} \\times 8\\frac{\\text{ft}}{\\text{in}} = 28\\text{ ft}$$

### Worked Example: a map, scale $1\\text{ cm} : 50\\text{ km}$

Two cities are $6$ cm apart on the map. The real distance is:

$$6\\text{ cm} \\times 50\\frac{\\text{km}}{\\text{cm}} = 300\\text{ km}$$

> 💡 **Shortcut:** going from drawing to actual, you always **multiply** by the actual-per-drawing number (here $50$). Lengths get **bigger** when the drawing is a shrunk-down copy.`,
      },
      {
        id: 'sd7-2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Scale $1\\text{ cm} : 5\\text{ m}$. A garden is drawn $7$ cm long. The real length is:',
              options: ['$35$ m', '$12$ m', '$1.4$ m', '$70$ m'],
              correctAnswer: 0,
              explanation: 'Multiply the drawing length by $5$: $7 \\times 5 = 35$ m.',
            },
            {
              question: 'Scale $1\\text{ in} : 4\\text{ ft}$. A window is drawn $2$ in wide. Real width?',
              options: ['$8$ ft', '$2$ ft', '$6$ ft', '$0.5$ ft'],
              correctAnswer: 0,
              explanation: 'Each inch is $4$ ft, so $2 \\times 4 = 8$ ft.',
            },
          ],
        },
      },
      {
        id: 'sd7-2-drill-setup',
        type: 'text' as const,
        content: `### Your Turn

Now do three on your own. Read the scale carefully each time — the second number changes — and remember the move is always **multiply** when you go from the drawing to the real world.`,
      },
      {
        id: 'sd7-2-drill',
        type: 'input-boxes' as const,
        content: `**Drawing → Actual** 🧮

Find the actual length for each. *(Just type the number.)*

**1)** Scale $1\\text{ in} : 8\\text{ ft}$. Drawing $= 4$ in. Actual $= \\,?$ ft
**2)** Scale $1\\text{ in} : 8\\text{ ft}$. Drawing $= 6.5$ in. Actual $= \\,?$ ft
**3)** Scale $1\\text{ cm} : 50\\text{ km}$. Drawing $= 7$ cm. Actual $= \\,?$ km`,
        exercise: {
          boxes: 3,
          correctAnswers: ['32', '52', '350'],
          hint1: '$4 \\times 8 = 32$ ft.',
          hint2: '$6.5 \\times 8 = 52$ ft.',
          hint3: '$7 \\times 50 = 350$ km.',
          explanation: '1) $4 \\times 8 = 32$.  2) $6.5 \\times 8 = 52$.  3) $7 \\times 50 = 350$. Each time, multiply the drawing length by the actual-per-unit number.',
        },
      },
      {
        id: 'sd7-2-recap',
        type: 'text' as const,
        content: `## The One Rule for This Part

Every problem so far used the same move:

$$\\text{actual length} = \\text{drawing length} \\times (\\text{actual per drawing unit})$$

The next check makes you say *which operation* you'd use before you compute — naming the move is what stops the classic mistake of dividing when you should multiply.`,
      },
      {
        id: 'sd7-2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Move** 🔽

For a scale of $1\\text{ cm} : 20\\text{ km}$, choose the correct piece of each step.`,
        exercise: {
          dropdowns: [
            { label: 'To go from drawing to actual you:', options: ['multiply by 20', 'divide by 20', 'add 20', 'subtract 20'] },
            { label: 'A 3 cm distance is really:', options: ['$60$ km', '$23$ km', '$6.7$ km', '$0.15$ km'] },
            { label: 'A 10 cm distance is really:', options: ['$200$ km', '$30$ km', '$2$ km', '$0.5$ km'] },
          ],
          correctAnswers: ['multiply by 20', '$60$ km', '$200$ km'],
          hint1: 'Drawing to actual means lengths grow, so you multiply by the actual-per-cm value, $20$.',
          hint2: '$3 \\times 20 = 60$ km.',
          hint3: '$10 \\times 20 = 200$ km.',
          explanation: 'Going drawing $\\to$ actual, multiply by $20$: $3 \\times 20 = 60$ km and $10 \\times 20 = 200$ km.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'scale-drawings-grade7',
    sections: [
      {
        id: 'sd7-3-intro',
        type: 'text' as const,
        content: `# 📐 Scale Drawings

**Part 3 of 5 — From Real Life Back to the Drawing**

---

> 🔑 **The Reverse Job:** You know the **actual** length and need to figure out how long to make it **on the drawing**. This time you **divide** by the scale.`,
      },
      {
        id: 'sd7-3-method',
        type: 'text' as const,
        content: `## Actual Length → Drawing Length

Drawing to actual was *multiply*. Going the other way, **actual to drawing**, is the opposite — **divide**.

$$\\text{drawing length} = \\frac{\\text{actual length}}{\\text{scale factor}}$$

### Worked Example: scale $1\\text{ cm} : 4\\text{ m}$

A real wall is $20$ m long. How long should it be on the drawing?

Each $4$ m of real length is $1$ cm on paper, so divide by $4$:

$$\\frac{20\\text{ m}}{4\\,\\text{m per cm}} = 5\\text{ cm}$$

> ✅ **Check (reverse it):** $5$ cm $\\times 4 = 20$ m. ✓ Going forward and backward should undo each other.`,
      },
      {
        id: 'sd7-3-worked2',
        type: 'text' as const,
        content: `### Worked Example: scale $1\\text{ in} : 12\\text{ ft}$

A room is $60$ ft long. On the plan it should be:

$$\\frac{60\\text{ ft}}{12\\,\\text{ft per in}} = 5\\text{ in}$$

### Worked Example: a half-unit answer, scale $1\\text{ cm} : 4\\text{ m}$

A fence is $30$ m long. On the drawing:

$$\\frac{30\\text{ m}}{4\\,\\text{m per cm}} = 7.5\\text{ cm}$$

> 💡 Drawing lengths are usually **smaller** numbers than the real lengths — that's the whole point of shrinking a big object onto paper.`,
      },
      {
        id: 'sd7-3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To go from an ACTUAL length to a DRAWING length, you:',
              options: ['divide by the scale factor', 'multiply by the scale factor', 'add the scale factor', 'do nothing'],
              correctAnswer: 0,
              explanation: 'Drawing $\\to$ actual is multiply, so the reverse, actual $\\to$ drawing, is divide by the scale factor.',
            },
            {
              question: 'Scale $1\\text{ cm} : 6\\text{ m}$. A real path is $42$ m long. On the drawing it is:',
              options: ['$7$ cm', '$252$ cm', '$36$ cm', '$48$ cm'],
              correctAnswer: 0,
              explanation: 'Divide the actual length by $6$: $42 \\div 6 = 7$ cm.',
            },
          ],
        },
      },
      {
        id: 'sd7-3-drill-setup',
        type: 'text' as const,
        content: `### Your Turn

Three to try. These all go **actual $\\to$ drawing**, so every one is a **division**. Don't be surprised if an answer comes out as a decimal like $7.5$ — that's a perfectly good drawing length.`,
      },
      {
        id: 'sd7-3-drill',
        type: 'input-boxes' as const,
        content: `**Actual → Drawing** 🧮

Find the drawing length for each. *(Just type the number; decimals like 7.5 are fine.)*

**1)** Scale $1\\text{ cm} : 4\\text{ m}$. Actual $= 20$ m. Drawing $= \\,?$ cm
**2)** Scale $1\\text{ cm} : 4\\text{ m}$. Actual $= 30$ m. Drawing $= \\,?$ cm
**3)** Scale $1\\text{ in} : 12\\text{ ft}$. Actual $= 60$ ft. Drawing $= \\,?$ in`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '7.5', '5'],
          hint1: '$20 \\div 4 = 5$ cm.',
          hint2: '$30 \\div 4 = 7.5$ cm.',
          hint3: '$60 \\div 12 = 5$ in.',
          explanation: '1) $20 \\div 4 = 5$.  2) $30 \\div 4 = 7.5$.  3) $60 \\div 12 = 5$. Actual $\\to$ drawing always divides.',
        },
      },
      {
        id: 'sd7-3-bothways',
        type: 'text' as const,
        content: `## Keeping the Two Directions Straight

You now have **both** directions. The only thing to decide each time is which one a problem is asking for:

| You know... | You want... | Operation |
|-------------|-------------|-----------|
| drawing length | actual length | **multiply** |
| actual length | drawing length | **divide** |

> ⚠️ If your "drawing length" comes out **bigger** than the real length, you multiplied when you should have divided. A drawing of a building should have *small* numbers.`,
      },
      {
        id: 'sd7-3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Forward or Backward?** 🔽

Decide which operation each problem needs, then finish it. Scale is $1\\text{ cm} : 10\\text{ m}$ throughout.`,
        exercise: {
          dropdowns: [
            { label: 'Drawing is 4 cm; find actual — you:', options: ['multiply by 10', 'divide by 10'] },
            { label: '...so the actual length is:', options: ['$40$ m', '$0.4$ m', '$14$ m', '$2.5$ m'] },
            { label: 'Actual is 90 m; find drawing — you:', options: ['divide by 10', 'multiply by 10'] },
            { label: '...so the drawing length is:', options: ['$9$ cm', '$900$ cm', '$100$ cm', '$80$ cm'] },
          ],
          correctAnswers: ['multiply by 10', '$40$ m', 'divide by 10', '$9$ cm'],
          hint1: 'Drawing $\\to$ actual multiplies: $4 \\times 10 = 40$ m.',
          hint2: 'Actual $\\to$ drawing divides: $90 \\div 10 = 9$ cm.',
          hint3: 'Bigger result $=$ you multiplied (found a real length); smaller result $=$ you divided (found a drawing length).',
          explanation: 'Drawing to actual: $4 \\times 10 = 40$ m. Actual to drawing: $90 \\div 10 = 9$ cm.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'scale-drawings-grade7',
    sections: [
      {
        id: 'sd7-4-intro',
        type: 'text' as const,
        content: `# 📐 Scale Drawings

**Part 4 of 5 — Areas and Re-Scaling**

---

> 🔑 **The Surprise:** Lengths scale by the scale factor, but **areas scale by the factor _squared_**. We'll see exactly why, then reproduce a drawing at a brand-new scale.`,
      },
      {
        id: 'sd7-4-area',
        type: 'text' as const,
        content: `## Area Under a Scale

Find the **actual lengths first**, then compute the area from those. Don't try to scale the area directly until you've seen the pattern.

### Worked Example: scale $1\\text{ cm} : 3\\text{ m}$

A room is drawn as a rectangle $5$ cm by $4$ cm. Find its real area.

**Step 1 — actual lengths:**
$$5\\text{ cm} \\times 3 = 15\\text{ m}, \\qquad 4\\text{ cm} \\times 3 = 12\\text{ m}$$

**Step 2 — actual area:**
$$15\\text{ m} \\times 12\\text{ m} = 180\\text{ m}^2$$

The drawing's area is $5 \\times 4 = 20\\text{ cm}^2$. Compare:

$$\\frac{180}{20} = 9 = 3^2$$

> 🔑 **Big idea:** The real area is the drawing area times the **scale factor squared**. Here the length factor is $3$, so the area factor is $3^2 = 9$.`,
      },
      {
        id: 'sd7-4-area-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The scale factor for lengths is $4$. What is the factor for areas?',
              options: ['$16$', '$4$', '$8$', '$2$'],
              correctAnswer: 0,
              explanation: 'Areas scale by the square of the length factor: $4^2 = 16$.',
            },
            {
              question: 'Scale $1\\text{ cm} : 2\\text{ m}$. A square is drawn $3$ cm on each side. Its real area is:',
              options: ['$36\\text{ m}^2$', '$6\\text{ m}^2$', '$18\\text{ m}^2$', '$12\\text{ m}^2$'],
              correctAnswer: 0,
              explanation: 'Each side is really $3 \\times 2 = 6$ m, so the area is $6 \\times 6 = 36\\text{ m}^2$. (Or drawing area $9\\text{ cm}^2 \\times 2^2 = 36$.)',
            },
          ],
        },
      },
      {
        id: 'sd7-4-area-tip',
        type: 'text' as const,
        content: `## The Safe Way Through an Area Problem

You can either square the scale factor, or — to be safe — just **convert each side to its real length first** and multiply. Both give the same answer; converting sides first is harder to mess up.

$$\\text{drawing sides} \\xrightarrow{\\;\\times\\,\\text{scale}\\;} \\text{real sides} \\xrightarrow{\\;\\times\\;} \\text{real area}$$

> 🔑 Try the next drill that way: find both real side lengths, *then* multiply them for the area.`,
      },
      {
        id: 'sd7-4-area-drill',
        type: 'input-boxes' as const,
        content: `**Areas** 🧮

Scale is $1\\text{ cm} : 3\\text{ m}$ for all three.

**1)** A rectangle is drawn $6$ cm by $2$ cm. Real length of the long side $= \\,?$ m
**2)** Same rectangle: real length of the short side $= \\,?$ m
**3)** Real **area** of the rectangle $= \\,?$ m²`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '6', '108'],
          hint1: '$6 \\times 3 = 18$ m.',
          hint2: '$2 \\times 3 = 6$ m.',
          hint3: 'Area $= 18 \\times 6 = 108\\text{ m}^2$. (Check: drawing area $12\\text{ cm}^2 \\times 3^2 = 108$.)',
          explanation: '1) $6 \\times 3 = 18$ m.  2) $2 \\times 3 = 6$ m.  3) $18 \\times 6 = 108\\text{ m}^2$. Find lengths first, then multiply for area.',
        },
      },
      {
        id: 'sd7-4-rescale',
        type: 'text' as const,
        content: `## Reproducing a Drawing at a New Scale

Sometimes you must redraw a figure at a **different** scale. The trick: go through the **actual size**.

$$\\text{old drawing} \\xrightarrow{\\;\\times\\,\\text{old scale}\\;} \\text{actual} \\xrightarrow{\\;\\div\\,\\text{new scale}\\;} \\text{new drawing}$$

### Worked Example

A square is drawn with $6$ cm sides at a scale of $1\\text{ cm} : 2\\text{ m}$. Redraw it at $1\\text{ cm} : 3\\text{ m}$.

**Step 1 — find the actual size:** $6\\text{ cm} \\times 2 = 12\\text{ m}$.

**Step 2 — apply the new scale:** $\\dfrac{12\\text{ m}}{3} = 4\\text{ cm}$.

So the new drawing has $4$ cm sides.

> 💡 A **larger** number in the scale (more meters per cm) makes a **smaller** drawing — you're packing more real distance into each centimeter.`,
      },
      {
        id: 'sd7-4-rescale-drill',
        type: 'input-boxes' as const,
        content: `**Re-Scale It** 🧮

A line is drawn $8$ cm long at a scale of $1\\text{ cm} : 5\\text{ m}$.

**1)** What is the **actual** length? $= \\,?$ m
**2)** Redraw at $1\\text{ cm} : 10\\text{ m}$. New drawing length $= \\,?$ cm
**3)** Redraw at $1\\text{ cm} : 2\\text{ m}$. New drawing length $= \\,?$ cm`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', '4', '20'],
          hint1: '$8 \\times 5 = 40$ m.',
          hint2: '$40 \\div 10 = 4$ cm — a bigger scale number gives a smaller drawing.',
          hint3: '$40 \\div 2 = 20$ cm — a smaller scale number gives a bigger drawing.',
          explanation: '1) actual $= 8 \\times 5 = 40$ m.  2) $40 \\div 10 = 4$ cm.  3) $40 \\div 2 = 20$ cm. Always route through the actual size.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'scale-drawings-grade7',
    sections: [
      {
        id: 'sd7-5-intro',
        type: 'text' as const,
        content: `# 📐 Scale Drawings

**Part 5 of 5 — Real-World Practice & Mastery Check**

---

You can now read a scale, find the scale factor, go drawing $\\to$ actual and back, handle areas, and re-scale a figure. Let's put it together on real problems.`,
      },
      {
        id: 'sd7-5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Move |
|------|------|
| Read a scale $a : b$ | $a$ drawing units $=$ $b$ actual units |
| Scale factor | $\\dfrac{\\text{actual}}{\\text{drawing}}$ (same units!) |
| Drawing $\\to$ actual | **multiply** by the scale factor |
| Actual $\\to$ drawing | **divide** by the scale factor |
| Actual **area** | (drawing area) $\\times$ (scale factor)$^2$ |
| Re-scale a figure | drawing $\\to$ actual $\\to$ new drawing |

> ⚠️ **Two classic traps:** mixing up which way to multiply/divide, and forgetting that **area** uses the factor **squared**, not the plain factor.`,
      },
      {
        id: 'sd7-5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

A floor plan uses the scale $1\\text{ in} : 6\\text{ ft}$. Fill in each blank.`,
        exercise: {
          dropdowns: [
            { label: 'A wall drawn 5 in long is really:', options: ['$30$ ft', '$11$ ft', '$1.2$ ft', '$56$ ft'] },
            { label: 'A real 48 ft wall is drawn:', options: ['$8$ in', '$288$ in', '$54$ in', '$42$ in'] },
            { label: 'The scale factor (same units, 1 ft = 12 in) is:', options: ['$72$', '$6$', '$12$', '$2$'] },
          ],
          correctAnswers: ['$30$ ft', '$8$ in', '$72$'],
          hint1: 'Drawing $\\to$ actual multiplies by $6$: $5 \\times 6 = 30$ ft.',
          hint2: 'Actual $\\to$ drawing divides by $6$: $48 \\div 6 = 8$ in.',
          hint3: 'Same units: $6\\text{ ft} = 72\\text{ in}$, so $1\\text{ in} : 72\\text{ in}$ gives a factor of $72$.',
          explanation: '$5 \\times 6 = 30$ ft; $48 \\div 6 = 8$ in; and $6$ ft $= 72$ in so the scale factor is $72$.',
        },
      },
      {
        id: 'sd7-5-map-setup',
        type: 'text' as const,
        content: `## Maps Work Exactly the Same Way

A map is just a scale drawing of the ground. The same two moves apply:

- **map distance $\\to$ real distance:** multiply by the scale number
- **real distance $\\to$ map distance:** divide by the scale number

And for an area on the map, convert *both* sides to real distances first, then multiply. Try all three in the next challenge.`,
      },
      {
        id: 'sd7-5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Map Challenge** 🧮

A map has a scale of $1\\text{ cm} : 25\\text{ km}$.

**1)** Two towns are $8$ cm apart on the map. Real distance $= \\,?$ km
**2)** A river is really $150$ km long. On the map it is $\\,?$ cm
**3)** A park is drawn as a $2$ cm by $3$ cm rectangle. Its real **area** $= \\,?$ km²`,
        exercise: {
          boxes: 3,
          correctAnswers: ['200', '6', '3750'],
          hint1: '$8 \\times 25 = 200$ km.',
          hint2: '$150 \\div 25 = 6$ cm.',
          hint3: 'Sides: $2 \\times 25 = 50$ km and $3 \\times 25 = 75$ km, so area $= 50 \\times 75 = 3750\\text{ km}^2$.',
          explanation: '1) $8 \\times 25 = 200$ km.  2) $150 \\div 25 = 6$ cm.  3) $50\\text{ km} \\times 75\\text{ km} = 3750\\text{ km}^2$ (or $6\\text{ cm}^2 \\times 25^2$).',
        },
      },
      {
        id: 'sd7-5-models',
        type: 'text' as const,
        content: `## Models and Enlargements

Scale drawings aren't only maps and floor plans. A **model** car, train, or plane is a 3-D scale copy, written like $1 : 24$ (model : real). And a scale drawing can **enlarge** — a magnified diagram has a scale factor bigger than $1$ for lengths, and its area still grows by the factor **squared**. The last two practice questions cover both.`,
      },
      {
        id: 'sd7-5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A model car is built at a scale of $1 : 24$ (model : real). The real car is $192$ in long. How long is the model?',
              options: ['$8$ in', '$216$ in', '$4608$ in', '$168$ in'],
              correctAnswer: 0,
              explanation: 'Real $\\to$ model is divide by $24$: $192 \\div 24 = 8$ in.',
            },
            {
              question: 'On a plan with scale $1\\text{ cm} : 2\\text{ m}$, a room measures $4$ cm by $5$ cm. Its real area is:',
              options: ['$80\\text{ m}^2$', '$20\\text{ m}^2$', '$40\\text{ m}^2$', '$160\\text{ m}^2$'],
              correctAnswer: 0,
              explanation: 'Real sides are $8$ m and $10$ m, so area $= 80\\text{ m}^2$. (Or $20\\text{ cm}^2 \\times 2^2 = 80$.)',
            },
          ],
        },
      },
      {
        id: 'sd7-5-ready',
        type: 'text' as const,
        content: `## You're Ready

Before the exit quiz, run the whole method through your head one last time:

1. Read the **scale** ($\\text{drawing} : \\text{actual}$).
2. Drawing $\\to$ actual? **Multiply.** Actual $\\to$ drawing? **Divide.**
3. Area? Convert **each side** to real length, then multiply — areas use the factor **squared**.

> 🔑 Three questions, all using these moves. Take your time and check the direction each one asks for.`,
      },
      {
        id: 'sd7-5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A map scale is $1\\text{ cm} : 15\\text{ km}$. Two cities are $7$ cm apart on the map. The real distance is:',
              options: ['$105$ km', '$22$ km', '$2.1$ km', '$15$ km'],
              correctAnswer: 0,
              explanation: 'Drawing $\\to$ actual multiplies: $7 \\times 15 = 105$ km.',
            },
            {
              question: 'A real wall is $36$ ft long. On a plan with scale $1\\text{ in} : 9\\text{ ft}$, how long is it drawn?',
              options: ['$4$ in', '$324$ in', '$45$ in', '$27$ in'],
              correctAnswer: 0,
              explanation: 'Actual $\\to$ drawing divides: $36 \\div 9 = 4$ in.',
            },
            {
              question: 'A drawing is enlarged by a length scale factor of $5$. By what factor does its AREA increase?',
              options: ['$25$', '$5$', '$10$', '$15$'],
              correctAnswer: 0,
              explanation: 'Area scales by the square of the length factor: $5^2 = 25$.',
            },
          ],
        },
      },
    ],
  },
]
