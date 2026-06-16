import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Volume of Rectangular Prisms (Pre-Algebra).
 * Registry key: 'volume-rectangular-prisms' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'volume-rectangular-prisms',
    sections: [
      {
        id: 'vrp1-intro',
        type: 'text' as const,
        content: `# 📦 Volume of Rectangular Prisms

**Part 1 of 5 — What Volume Means**

---

### Topics in This Part

| Section |
|---------|
| What Is a Rectangular Prism? |
| Counting Unit Cubes |
| Why Volume Is "Cubic" |

> 🔑 **Key Concept:** **Volume** measures how much space a solid fills — how many **unit cubes** fit inside it. Every formula in this lesson is just a fast way to count those cubes.`,
      },
      {
        id: 'vrp1-prism',
        type: 'text' as const,
        content: `## What Is a Rectangular Prism?

A **rectangular prism** is a box-shaped solid. Every face is a rectangle, and it has three measurements:

- **Length** ($l$) — how long it is
- **Width** ($w$) — how deep it is
- **Height** ($h$) — how tall it is

Think of a cereal box, a brick, a shipping container, or a fish tank — all are rectangular prisms.

| Object | Length | Width | Height |
|--------|--------|-------|--------|
| Tissue box | $24\\text{ cm}$ | $12\\text{ cm}$ | $9\\text{ cm}$ |
| Brick | $20\\text{ cm}$ | $10\\text{ cm}$ | $6\\text{ cm}$ |
| Moving box | $3\\text{ ft}$ | $2\\text{ ft}$ | $2\\text{ ft}$ |

> 💡 A **cube** is a special rectangular prism where length, width, and height are all equal.`,
      },
      {
        id: 'vrp1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does the **volume** of a box measure?',
              options: [
                'The amount of space inside it',
                'The distance around its base',
                'The area of its top face',
                'The length of its longest edge',
              ],
              correctAnswer: 0,
              explanation: 'Volume measures how much space a solid fills — how many unit cubes fit inside. Distance around is perimeter; the top face area is an area; the longest edge is just a length.',
            },
            {
              question: 'Which object is NOT a rectangular prism?',
              options: [
                'A basketball',
                'A brick',
                'A cereal box',
                'A shoebox',
              ],
              correctAnswer: 0,
              explanation: 'A basketball is a sphere — its surface is curved, not made of flat rectangles. Bricks, cereal boxes, and shoeboxes are all box-shaped rectangular prisms.',
            },
          ],
        },
      },
      {
        id: 'vrp1-unitcubes',
        type: 'text' as const,
        content: `## Counting Unit Cubes

A **unit cube** is a cube measuring $1 \\times 1 \\times 1$. Its volume is exactly **one cubic unit**.

To find a prism's volume by hand, you can imagine filling it with unit cubes and counting them.

Picture a box that is $4$ long, $3$ wide, and $2$ tall:

- The **bottom layer** is a $4 \\times 3$ rectangle of cubes $= 12$ cubes.
- There are **$2$ layers** stacked on top of each other.
- Total $= 12 \\times 2 = 24$ unit cubes.

$$\\text{Volume} = 24 \\text{ cubic units}$$

> 🔑 **The shortcut:** Counting one layer is just $l \\times w$, and stacking $h$ layers multiplies by $h$. That gives the formula $V = l \\times w \\times h$ — coming in Part 2.`,
      },
      {
        id: 'vrp1-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Cubes** 🧮

Each box is built from $1 \\times 1 \\times 1$ unit cubes. Find the volume in **cubic units**.

**1)** Bottom layer of $5 \\times 2 = 10$ cubes, stacked $3$ layers high. Volume $= \\,?$
**2)** Bottom layer of $4 \\times 4 = 16$ cubes, stacked $2$ layers high. Volume $= \\,?$
**3)** Bottom layer of $6 \\times 1 = 6$ cubes, stacked $1$ layer high. Volume $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '32', '6'],
          hint1: 'Multiply the number of cubes in one layer by the number of layers.',
          hint2: '1) $10 \\times 3 = 30$.  2) $16 \\times 2 = 32$.',
          hint3: '3) Only one layer, so the volume equals that single layer: $6 \\times 1 = 6$.',
          explanation: '1) $10 \\times 3 = 30$.  2) $16 \\times 2 = 32$.  3) $6 \\times 1 = 6$. Volume is always (cubes per layer) × (number of layers).',
        },
      },
      {
        id: 'vrp1-layers-dropdown',
        type: 'dropdown-select' as const,
        content: `**Stack the Layers** 🔽

A box has a bottom layer of $4 \\times 5 = 20$ cubes and is stacked $3$ layers high. Choose each piece.`,
        exercise: {
          dropdowns: [
            { label: 'Cubes in one layer:', options: ['$20$', '$9$', '$12$', '$60$'] },
            { label: 'Number of layers:', options: ['$3$', '$20$', '$5$', '$4$'] },
            { label: 'Total volume:', options: ['$60$ cubic units', '$23$ cubic units', '$60$ square units', '$27$ cubic units'] },
          ],
          correctAnswers: ['$20$', '$3$', '$60$ cubic units'],
          hint1: 'One layer is the bottom rectangle: $4 \\times 5 = 20$ cubes.',
          hint2: 'The box is "stacked $3$ layers high," so there are $3$ layers.',
          hint3: 'Total $= 20 \\times 3 = 60$, and counting cubes gives cubic units.',
          explanation: 'One layer holds $4 \\times 5 = 20$ cubes, there are $3$ layers, so $V = 20 \\times 3 = 60$ cubic units.',
        },
      },
      {
        id: 'vrp1-cubicwhy',
        type: 'text' as const,
        content: `## Why Volume Is "Cubic"

When we multiply **three** lengths together, we multiply their units too:

$$\\text{cm} \\times \\text{cm} \\times \\text{cm} = \\text{cm}^3 \\quad(\\text{read "cubic centimeters"})$$

That little $3$ exponent is your signal that the answer is a **volume** — not a length or an area.

| Quantity | What you multiply | Unit |
|----------|-------------------|------|
| Length | one measurement | $\\text{cm}$ |
| Area | two measurements | $\\text{cm}^2$ |
| Volume | three measurements | $\\text{cm}^3$ |

> ⚠️ **Watch your units.** A volume answer always ends in cubic units like $\\text{cm}^3$, $\\text{in}^3$, or $\\text{m}^3$. Leaving off the $3$ — or the unit entirely — is the most common way to lose a point.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'volume-rectangular-prisms',
    sections: [
      {
        id: 'vrp2-intro',
        type: 'text' as const,
        content: `# 📦 Volume of Rectangular Prisms

**Part 2 of 5 — The Formula $V = lwh$**

---

> 🔑 **The Idea:** Instead of counting cubes one by one, just multiply the three measurements. $V = l \\times w \\times h$ counts every cube at once.`,
      },
      {
        id: 'vrp2-formula',
        type: 'text' as const,
        content: `## The Volume Formula

$$V = l \\times w \\times h$$

where $l$ = length, $w$ = width, and $h$ = height. Because multiplication can be done in **any order**, it does not matter which side you call length, width, or height — the product is the same.

### Worked Example: $l = 5$, $w = 3$, $h = 4$ (cm)

$$V = 5 \\times 3 \\times 4 = 60 \\text{ cm}^3$$

A clean way to do it is two numbers at a time:

$$V = (5 \\times 3) \\times 4 = 15 \\times 4 = 60 \\text{ cm}^3$$

> 💡 **Tip:** Multiply two numbers first, then multiply that result by the third. It keeps the arithmetic simple.`,
      },
      {
        id: 'vrp2-worked2',
        type: 'text' as const,
        content: `### Worked Example: A Fish Tank

A fish tank is $40\\text{ cm}$ long, $20\\text{ cm}$ wide, and $25\\text{ cm}$ tall.

$$V = 40 \\times 20 \\times 25$$

Multiply the first two: $40 \\times 20 = 800$. Then:

$$V = 800 \\times 25 = 20{,}000 \\text{ cm}^3$$

> ✅ **Check:** Since $8 \\times 25 = 200$, we get $800 \\times 25 = 20{,}000$. ✓

So the tank holds $20{,}000$ cubic centimeters of water.`,
      },
      {
        id: 'vrp2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A box is $2\\text{ m}$ by $3\\text{ m}$ by $5\\text{ m}$. Its volume is:',
              options: ['$30\\text{ m}^3$', '$10\\text{ m}^3$', '$30\\text{ m}^2$', '$31\\text{ m}^3$'],
              correctAnswer: 0,
              explanation: '$V = 2 \\times 3 \\times 5 = 30$. Three measurements are multiplied, so the unit is cubic meters: $30\\text{ m}^3$. ($30\\text{ m}^2$ would be an area, and $10$ or $31$ come from adding instead of multiplying.)',
            },
            {
              question: 'Does it matter which side you call the "length"?',
              options: [
                'No — multiplication gives the same product in any order',
                'Yes — length must always be the longest side',
                'Yes — the formula only works if the height is largest',
                'No — but only for cubes',
              ],
              correctAnswer: 0,
              explanation: 'Because $l \\times w \\times h$ multiplies all three, the order does not change the product. You can label the sides however you like.',
            },
          ],
        },
      },
      {
        id: 'vrp2-drill',
        type: 'input-boxes' as const,
        content: `**Plug In and Multiply** 🧮

Use $V = l \\times w \\times h$. Enter the volume as a **number** (units are given).

**1)** $l = 4$, $w = 3$, $h = 2$ (cm). $V = \\,?\\ \\text{cm}^3$
**2)** $l = 10$, $w = 5$, $h = 6$ (in). $V = \\,?\\ \\text{in}^3$
**3)** $l = 7$, $w = 7$, $h = 2$ (ft). $V = \\,?\\ \\text{ft}^3$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['24', '300', '98'],
          hint1: '1) $4 \\times 3 = 12$, then $12 \\times 2 = 24$.',
          hint2: '2) $10 \\times 5 = 50$, then $50 \\times 6 = 300$.',
          hint3: '3) $7 \\times 7 = 49$, then $49 \\times 2 = 98$.',
          explanation: '1) $4 \\times 3 \\times 2 = 24$.  2) $10 \\times 5 \\times 6 = 300$.  3) $7 \\times 7 \\times 2 = 98$.',
        },
      },
      {
        id: 'vrp2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Calculation** 🔽

A storage bin is $8\\text{ in}$ long, $4\\text{ in}$ wide, and $3\\text{ in}$ tall. Choose each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The correct setup is:', options: ['$8 \\times 4 \\times 3$', '$8 + 4 + 3$', '$8 \\times 4 + 3$', '$2(8 + 4 + 3)$'] },
            { label: 'First multiply two sides:', options: ['$8 \\times 4 = 32$', '$8 \\times 3 = 24$', '$4 \\times 3 = 12$', '$8 + 4 = 12$'] },
            { label: 'The final volume is:', options: ['$96\\text{ in}^3$', '$96\\text{ in}^2$', '$15\\text{ in}^3$', '$32\\text{ in}^3$'] },
          ],
          correctAnswers: ['$8 \\times 4 \\times 3$', '$8 \\times 4 = 32$', '$96\\text{ in}^3$'],
          hint1: 'Volume multiplies all three measurements; it never adds them.',
          hint2: 'Any two sides will do — for example $8 \\times 4 = 32$.',
          hint3: 'Finish with $32 \\times 3 = 96$, and three measurements give cubic inches.',
          explanation: '$V = 8 \\times 4 \\times 3 = 32 \\times 3 = 96\\text{ in}^3$. Volume always multiplies (never adds) the three dimensions.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'volume-rectangular-prisms',
    sections: [
      {
        id: 'vrp3-intro',
        type: 'text' as const,
        content: `# 📦 Volume of Rectangular Prisms

**Part 3 of 5 — Base Area × Height**

---

> 🔑 **A second view:** $V = lwh$ can be grouped as $V = (l \\times w) \\times h$. The part $l \\times w$ is the **area of the base**, so $V = B \\times h$ where $B$ is the base area.`,
      },
      {
        id: 'vrp3-base',
        type: 'text' as const,
        content: `## Volume = Base Area × Height

$$V = B \\times h \\qquad\\text{where } B = l \\times w$$

This is exactly the "layers" idea from Part 1: the base area $B$ is the number of unit squares in one layer, and $h$ is the number of layers.

### Worked Example: $l = 6$, $w = 4$, $h = 5$ (cm)

**Step 1 — Base area:**
$$B = l \\times w = 6 \\times 4 = 24 \\text{ cm}^2$$

**Step 2 — Multiply by height:**
$$V = B \\times h = 24 \\times 5 = 120 \\text{ cm}^3$$

> 💡 Notice the base area is in **square** units ($\\text{cm}^2$), and multiplying by the height adds the third dimension to make **cubic** units ($\\text{cm}^3$).`,
      },
      {
        id: 'vrp3-givenbase',
        type: 'text' as const,
        content: `## When the Base Area Is Given

Sometimes a problem gives you the base area directly, so you skip Step 1.

### Worked Example

A prism has base area $B = 18\\text{ m}^2$ and height $h = 7\\text{ m}$.

$$V = B \\times h = 18 \\times 7 = 126 \\text{ m}^3$$

You did not need the length and width separately — the base area has already combined them.

> ⚠️ **Unit check:** The base area must be in **square** units and the height in matching length units. Here $\\text{m}^2 \\times \\text{m} = \\text{m}^3$. ✓`,
      },
      {
        id: 'vrp3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A prism has base area $B = 12\\text{ cm}^2$ and height $h = 4\\text{ cm}$. Its volume is:',
              options: ['$48\\text{ cm}^3$', '$16\\text{ cm}^3$', '$48\\text{ cm}^2$', '$3\\text{ cm}^3$'],
              correctAnswer: 0,
              explanation: '$V = B \\times h = 12 \\times 4 = 48$. Square units times length units give cubic units: $48\\text{ cm}^3$.',
            },
            {
              question: 'In $V = B \\times h$, what does $B$ represent?',
              options: [
                'The area of the base ($l \\times w$)',
                'The height of the prism',
                'The total of all the edges',
                'The longest side',
              ],
              correctAnswer: 0,
              explanation: '$B$ is the base area, found by $l \\times w$. Multiplying it by the height $h$ stacks that base up to fill the whole solid.',
            },
          ],
        },
      },
      {
        id: 'vrp3-drill',
        type: 'input-boxes' as const,
        content: `**Two-Step Volume** 🧮

First find the base area $B = l \\times w$, then $V = B \\times h$. Enter the requested number.

**1)** $l = 9$, $w = 2$. Base area $B = \\,?$
**2)** Using that base with $h = 5$: $V = \\,?$
**3)** A prism with base area $B = 20$ and height $h = 6$: $V = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '90', '120'],
          hint1: '1) $B = 9 \\times 2 = 18$.',
          hint2: '2) $V = 18 \\times 5 = 90$.',
          hint3: '3) $V = 20 \\times 6 = 120$.',
          explanation: '1) $B = 9 \\times 2 = 18$.  2) $V = 18 \\times 5 = 90$.  3) $V = 20 \\times 6 = 120$.',
        },
      },
      {
        id: 'vrp3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Units** 🔽

Choose the correct unit for each quantity in a problem measured in feet.`,
        exercise: {
          dropdowns: [
            { label: 'A length measurement uses:', options: ['$\\text{ft}$', '$\\text{ft}^2$', '$\\text{ft}^3$', 'no unit'] },
            { label: 'A base area uses:', options: ['$\\text{ft}^2$', '$\\text{ft}$', '$\\text{ft}^3$', '$\\text{ft}^4$'] },
            { label: 'A volume uses:', options: ['$\\text{ft}^3$', '$\\text{ft}^2$', '$\\text{ft}$', '$\\text{ft}^6$'] },
          ],
          correctAnswers: ['$\\text{ft}$', '$\\text{ft}^2$', '$\\text{ft}^3$'],
          hint1: 'The exponent matches how many measurements were multiplied.',
          hint2: 'Area multiplies two lengths, so its exponent is $2$.',
          hint3: 'Volume multiplies three lengths, so its exponent is $3$.',
          explanation: 'Length: $\\text{ft}$ (one measurement). Area: $\\text{ft}^2$ (two). Volume: $\\text{ft}^3$ (three).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'volume-rectangular-prisms',
    sections: [
      {
        id: 'vrp4-intro',
        type: 'text' as const,
        content: `# 📦 Volume of Rectangular Prisms

**Part 4 of 5 — Word Problems & Missing Sides**

---

> 🔑 **Working backward:** If you know the volume and two of the three sides, you can find the missing side by **dividing** — because volume is built from multiplication, you undo it with division.`,
      },
      {
        id: 'vrp4-missing',
        type: 'text' as const,
        content: `## Finding a Missing Side

Start from $V = l \\times w \\times h$. To find one side, divide the volume by the product of the other two:

$$h = \\frac{V}{l \\times w}$$

### Worked Example

A box has volume $V = 120\\text{ cm}^3$, length $l = 5\\text{ cm}$, and width $w = 4\\text{ cm}$. Find the height.

**Step 1 — Base area:** $l \\times w = 5 \\times 4 = 20\\text{ cm}^2$.

**Step 2 — Divide:**
$$h = \\frac{120}{20} = 6 \\text{ cm}$$

> ✅ **Check:** $5 \\times 4 \\times 6 = 120$ ✓. The height is $6\\text{ cm}$.`,
      },
      {
        id: 'vrp4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A prism has volume $60\\text{ cm}^3$, a base area of $12\\text{ cm}^2$, and unknown height $h$. What is $h$?',
              options: ['$5\\text{ cm}$', '$48\\text{ cm}$', '$720\\text{ cm}$', '$72\\text{ cm}$'],
              correctAnswer: 0,
              explanation: 'Since $V = B \\times h$, divide: $h = 60 \\div 12 = 5\\text{ cm}$. Check: $12 \\times 5 = 60$ ✓.',
            },
            {
              question: 'To find a missing side when you already know the volume, you should:',
              options: [
                'Divide the volume by the product of the known sides',
                'Add the known sides together',
                'Multiply the volume by the known sides',
                'Subtract the known sides from the volume',
              ],
              correctAnswer: 0,
              explanation: 'Volume is a product of three sides, so you undo the multiplication by dividing the volume by the two sides you already know.',
            },
          ],
        },
      },
      {
        id: 'vrp4-word',
        type: 'text' as const,
        content: `## A Real-World Word Problem

A moving company uses boxes that are $2\\text{ ft}$ long, $2\\text{ ft}$ wide, and $3\\text{ ft}$ tall. How many cubic feet does one box hold?

$$V = 2 \\times 2 \\times 3 = 12 \\text{ ft}^3$$

**Follow-up:** If a truck can hold $600\\text{ ft}^3$ of cargo, how many of these boxes fit?

$$600 \\div 12 = 50 \\text{ boxes}$$

> 💡 **Strategy for word problems:** (1) pull out $l$, $w$, $h$; (2) write $V = lwh$; (3) multiply carefully; (4) attach the cubic unit; (5) re-read the question to make sure you answered what was asked.`,
      },
      {
        id: 'vrp4-drill',
        type: 'input-boxes' as const,
        content: `**Word-Problem Practice** 🧮

Enter each answer as a number.

**1)** A drawer is $30\\text{ in}$ long, $20\\text{ in}$ wide, and $10\\text{ in}$ deep. Volume $= \\,?\\ \\text{in}^3$
**2)** A box has volume $48\\text{ cm}^3$, length $6\\text{ cm}$, width $2\\text{ cm}$. Height $= \\,?\\ \\text{cm}$
**3)** A crate holds $72\\text{ ft}^3$. If each small box is $9\\text{ ft}^3$, how many boxes fit? $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6000', '4', '8'],
          hint1: '1) $30 \\times 20 = 600$, then $600 \\times 10 = 6000$.',
          hint2: '2) Base area $= 6 \\times 2 = 12$; height $= 48 \\div 12 = 4$.',
          hint3: '3) $72 \\div 9 = 8$ boxes.',
          explanation: '1) $30 \\times 20 \\times 10 = 6000\\text{ in}^3$.  2) $h = 48 \\div (6 \\times 2) = 48 \\div 12 = 4\\text{ cm}$.  3) $72 \\div 9 = 8$.',
        },
      },
      {
        id: 'vrp4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Problem** 🔽

A bin has volume $V = 36\\text{ cm}^3$, length $3\\text{ cm}$, and width $3\\text{ cm}$. You want to find the height.`,
        exercise: {
          dropdowns: [
            { label: 'The base area is:', options: ['$9\\text{ cm}^2$', '$6\\text{ cm}^2$', '$12\\text{ cm}^2$', '$36\\text{ cm}^2$'] },
            { label: 'To find the height you:', options: ['divide $V$ by the base area', 'multiply $V$ by the base area', 'add the base area to $V$', 'subtract the base area from $V$'] },
            { label: 'The height is:', options: ['$4\\text{ cm}$', '$9\\text{ cm}$', '$12\\text{ cm}$', '$33\\text{ cm}$'] },
          ],
          correctAnswers: ['$9\\text{ cm}^2$', 'divide $V$ by the base area', '$4\\text{ cm}$'],
          hint1: 'Base area $= l \\times w = 3 \\times 3$.',
          hint2: 'Volume is a product, so undo it with division.',
          hint3: '$h = 36 \\div 9 = 4\\text{ cm}$.',
          explanation: 'Base area $= 3 \\times 3 = 9\\text{ cm}^2$. Then $h = V \\div B = 36 \\div 9 = 4\\text{ cm}$. Check: $3 \\times 3 \\times 4 = 36$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'volume-rectangular-prisms',
    sections: [
      {
        id: 'vrp5-intro',
        type: 'text' as const,
        content: `# 📦 Volume of Rectangular Prisms

**Part 5 of 5 — Cubes, Mixed Practice & Mastery Check**

---

You can now (1) picture volume as stacked unit cubes, (2) use $V = lwh$, (3) use $V = B \\times h$, and (4) find a missing side. Let's add cubes and put it all together.`,
      },
      {
        id: 'vrp5-cube',
        type: 'text' as const,
        content: `## The Volume of a Cube

A **cube** has all sides equal, so if each side is $s$:

$$V = s \\times s \\times s = s^3$$

### Worked Example: $s = 4\\text{ cm}$

$$V = 4^3 = 4 \\times 4 \\times 4 = 64 \\text{ cm}^3$$

### Quick Reference

| Goal | Formula |
|------|---------|
| Volume of a prism | $V = l \\times w \\times h$ |
| Volume using the base | $V = B \\times h$ |
| Volume of a cube | $V = s^3$ |
| Missing side | divide $V$ by the product of the known sides |

> ⚠️ **Don't confuse $s^3$ with $3s$.** $4^3 = 64$, but $3 \\times 4 = 12$. The exponent means *multiply $s$ by itself three times*.`,
      },
      {
        id: 'vrp5-cube-drill',
        type: 'input-boxes' as const,
        content: `**Cube Volumes** 🧮

Use $V = s^3$. Enter the volume as a number.

**1)** $s = 2$. $V = \\,?$
**2)** $s = 5$. $V = \\,?$
**3)** $s = 10$. $V = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '125', '1000'],
          hint1: '1) $2^3 = 2 \\times 2 \\times 2 = 8$.',
          hint2: '2) $5^3 = 5 \\times 5 \\times 5 = 125$.',
          hint3: '3) $10^3 = 10 \\times 10 \\times 10 = 1000$.',
          explanation: '1) $2^3 = 8$.  2) $5^3 = 125$.  3) $10^3 = 1000$. A cube cubes its side length.',
        },
      },
      {
        id: 'vrp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A cube has side length $3\\text{ in}$. Its volume is:',
              options: ['$27\\text{ in}^3$', '$9\\text{ in}^3$', '$9\\text{ in}^2$', '$6\\text{ in}^3$'],
              correctAnswer: 0,
              explanation: '$V = s^3 = 3 \\times 3 \\times 3 = 27\\text{ in}^3$. (Note $9 = 3^2$ would be only the area of one face.)',
            },
            {
              question: 'A prism is $8\\text{ cm}$ by $5\\text{ cm}$ by $2\\text{ cm}$. Its volume is:',
              options: ['$80\\text{ cm}^3$', '$40\\text{ cm}^3$', '$15\\text{ cm}^3$', '$80\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: '$V = 8 \\times 5 \\times 2$. First $8 \\times 5 = 40$, then $40 \\times 2 = 80\\text{ cm}^3$.',
            },
          ],
        },
      },
      {
        id: 'vrp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the volume of a rectangular prism that is $7\\text{ m}$ long, $3\\text{ m}$ wide, and $4\\text{ m}$ tall?',
              options: ['$84\\text{ m}^3$', '$84\\text{ m}^2$', '$14\\text{ m}^3$', '$21\\text{ m}^3$'],
              correctAnswer: 0,
              explanation: '$V = 7 \\times 3 \\times 4$. First $7 \\times 3 = 21$, then $21 \\times 4 = 84\\text{ m}^3$.',
            },
            {
              question: 'A prism has volume $90\\text{ cm}^3$ and a base area of $15\\text{ cm}^2$. What is its height?',
              options: ['$6\\text{ cm}$', '$75\\text{ cm}$', '$1350\\text{ cm}$', '$5\\text{ cm}$'],
              correctAnswer: 0,
              explanation: 'Since $V = B \\times h$, divide: $h = 90 \\div 15 = 6\\text{ cm}$. Check: $15 \\times 6 = 90$ ✓.',
            },
            {
              question: 'Which statement is TRUE?',
              options: [
                'Volume is measured in cubic units like $\\text{cm}^3$.',
                'Volume is measured in square units like $\\text{cm}^2$.',
                'For a cube, $V = 3s$.',
                'Volume is found by adding length, width, and height.',
              ],
              correctAnswer: 0,
              explanation: 'Volume multiplies three measurements, so it is always in cubic units. A cube has volume $s^3$ (not $3s$), and volume multiplies — never adds — the three dimensions.',
            },
          ],
        },
      },
    ],
  },
]
