import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Surface Area and Volume (Grade 6 Math).
 * Registry key: 'surface-area-volume-grade6' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). Aligned to CCSS 6.G.A.2 and 6.G.A.4.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-grade6',
    sections: [
      {
        id: 'sav1-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area and Volume

**Part 1 of 5 — Solids, Nets, and Two Big Ideas**

---

### Topics in This Part

| Section |
|---------|
| Faces, edges, and vertices |
| What surface area and volume mean |
| Units: square vs. cubic |
| Unfolding a solid into a net |

> 🔑 **Key Concept:** A flat shape (like a rectangle) is **2D**. A solid you can hold (like a box) is **3D**. This whole lesson is about measuring two things on solids: the **skin** that wraps around them (**surface area**) and the **space inside** them (**volume**).`,
      },
      {
        id: 'sav1-parts-of-solid',
        type: 'text' as const,
        content: `## The Parts of a Solid

Every solid (a **3D** shape) is built from three kinds of pieces:

- A **face** is a flat surface — like one side of a box.
- An **edge** is a line where two faces meet.
- A **vertex** is a corner point where edges meet. (More than one = **vertices**.)

### A Rectangular Prism (a Box)

A rectangular prism — the shape of a cereal box or a brick — has:

| Part | How many |
|------|----------|
| Faces | $6$ |
| Edges | $12$ |
| Vertices | $8$ |

> 💡 The faces of a box come in matching pairs: top matches bottom, front matches back, left matches right. That "pairs" idea makes surface area much easier later in Part 3.`,
      },
      {
        id: 'sav1-parts-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a solid, what do we call the flat surface — like one whole side of a box?',
              options: ['A face', 'An edge', 'A vertex', 'A net'],
              correctAnswer: 0,
              explanation: 'A flat surface is a **face**. An **edge** is the line where two faces meet, and a **vertex** is a corner point.',
            },
            {
              question: 'How many faces does a rectangular prism (a box) have?',
              options: ['$6$', '$4$', '$8$', '$12$'],
              correctAnswer: 0,
              explanation: 'A rectangular prism has $6$ faces (top, bottom, front, back, left, right). It has $12$ edges and $8$ vertices.',
            },
          ],
        },
      },
      {
        id: 'sav1-sa-vs-vol',
        type: 'text' as const,
        content: `## Surface Area vs. Volume

These two ideas sound similar but measure completely different things.

| | **Surface Area** | **Volume** |
|---|------------------|-----------|
| What it measures | The total area of the **outside** | The amount of **space inside** |
| Real-world example | Wrapping paper to cover a gift | Cereal that fills the box |
| Counted in | **square** units | **cubic** units |

**Surface area** adds up the area of every face — it is just a bunch of 2D areas put together, so it stays in **square units** like $\\text{cm}^2$.

**Volume** counts how many unit cubes fit inside, so it uses **cubic units** like $\\text{cm}^3$.

> ⚠️ **The #1 mix-up:** square units ($\\text{cm}^2$) are for *covering* a surface; cubic units ($\\text{cm}^3$) are for *filling* a space. Always ask: am I covering the outside, or filling the inside?`,
      },
      {
        id: 'sav1-units-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Unit** 🔽

For each job, choose what you are really measuring and the correct kind of unit.`,
        exercise: {
          dropdowns: [
            { label: 'Buying wrapping paper to cover a present:', options: ['Surface area (square units)', 'Volume (cubic units)', 'Length (plain units)'] },
            { label: 'Finding how much water fills a fish tank:', options: ['Volume (cubic units)', 'Surface area (square units)', 'Length (plain units)'] },
            { label: 'A correct unit for volume is:', options: ['$\\text{m}^3$', '$\\text{m}^2$', '$\\text{m}$'] },
          ],
          correctAnswers: ['Surface area (square units)', 'Volume (cubic units)', '$\\text{m}^3$'],
          hint1: 'Covering the outside of a shape is **surface area**, measured in square units.',
          hint2: 'Filling the inside of a shape is **volume**, measured in cubic units.',
          hint3: 'A small $3$ (cubic) means volume; a small $2$ (square) means area; no small number means a plain length.',
          explanation: 'Covering the outside = surface area (square units). Filling the inside = volume (cubic units), written with a small $3$, like $\\text{m}^3$.',
        },
      },
      {
        id: 'sav1-nets',
        type: 'text' as const,
        content: `## Unfolding a Solid: The Net

A **net** is what you get when you "unfold" a solid and lay all of its faces out flat — like cutting open a cardboard box and flattening it.

A net is powerful because it turns a scary 3D problem into easy 2D rectangles:

- The area of the **net** equals the **surface area** of the solid.
- You can find each flat face's area separately, then add them all up.

### Example: the net of a cube

A cube has $6$ identical square faces. Its net is $6$ equal squares joined together. If you find the area of just one square and there are $6$ of them, the surface area is six times that single area.

> 🔑 **Key Idea:** Surface area = the area of the net = the sum of the areas of all the faces. We will use this exact strategy in Parts 3 and 4.`,
      },
      {
        id: 'sav1-net-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you unfold a solid and lay every face out flat, the area of that flat pattern (the net) equals the solid\'s...',
              options: ['Surface area', 'Volume', 'Number of edges', 'Perimeter'],
              correctAnswer: 0,
              explanation: 'A net shows every face flat, so the total area of the net is exactly the **surface area** of the solid.',
            },
            {
              question: 'A cube has $6$ identical square faces. If one face has an area of $4\\text{ cm}^2$, what is the cube\'s surface area?',
              options: ['$24\\text{ cm}^2$', '$10\\text{ cm}^2$', '$4\\text{ cm}^2$', '$64\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: 'All $6$ faces match, so surface area $= 6 \\times 4 = 24\\text{ cm}^2$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-grade6',
    sections: [
      {
        id: 'sav2-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area and Volume

**Part 2 of 5 — Volume of Rectangular Prisms**

---

> 🔑 **The Idea:** **Volume** counts how many $1\\times1\\times1$ unit cubes fit inside a solid. For a box, we can count them with one short formula instead of stacking cubes one by one.`,
      },
      {
        id: 'sav2-counting-cubes',
        type: 'text' as const,
        content: `## Counting Unit Cubes

A **unit cube** is a tiny cube that is $1$ unit on every side. Its volume is $1$ cubic unit.

Suppose a box is $4$ units long, $3$ units wide, and $2$ units tall.

1. The **bottom layer** holds $4 \\times 3 = 12$ cubes.
2. The box is $2$ layers tall, so we stack $2$ of those layers.
3. Total cubes: $12 \\times 2 = 24$.

$$V = 4 \\times 3 \\times 2 = 24 \\text{ cubic units}$$

> 💡 "One layer, then stack the layers" is the whole idea behind the volume formula. The bottom layer is the **area of the base**, and the height tells you **how many layers** to stack.`,
      },
      {
        id: 'sav2-formula',
        type: 'text' as const,
        content: `## The Volume Formula

For a rectangular prism:

$$V = l \\times w \\times h$$

where $l$ is length, $w$ is width, and $h$ is height.

Because the bottom layer is the **area of the base**, $B = l \\times w$, we can also write the formula that works for *every* prism:

$$V = B \\times h \\quad (\\text{base area} \\times \\text{height})$$

### Worked Example

A box is $5\\text{ cm}$ long, $4\\text{ cm}$ wide, and $3\\text{ cm}$ tall.

$$V = l \\times w \\times h = 5 \\times 4 \\times 3 = 60 \\text{ cm}^3$$

> ⚠️ Volume always uses **cubic** units (a small $3$, like $\\text{cm}^3$) because you multiplied **three** lengths together.`,
      },
      {
        id: 'sav2-vol-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangular prism is $6\\text{ m}$ long, $2\\text{ m}$ wide, and $5\\text{ m}$ tall. What is its volume?',
              options: ['$60\\text{ m}^3$', '$13\\text{ m}^3$', '$60\\text{ m}^2$', '$30\\text{ m}^3$'],
              correctAnswer: 0,
              explanation: '$V = l \\times w \\times h = 6 \\times 2 \\times 5 = 60$. Volume is in cubic units, so $60\\text{ m}^3$.',
            },
            {
              question: 'Which formula gives the volume of any prism using the area of its base $B$ and its height $h$?',
              options: ['$V = B \\times h$', '$V = B + h$', '$V = 2B + h$', '$V = B \\div h$'],
              correctAnswer: 0,
              explanation: 'Volume is the base layer repeated up the height, so $V = B \\times h$ — base area times height.',
            },
          ],
        },
      },
      {
        id: 'sav2-order-tip',
        type: 'text' as const,
        content: `## A Tip Before You Compute

When three numbers are multiplied, you can do it in **any order** — pick the easiest pair first.

For $V = 4 \\times 5 \\times 2$, the pair $5 \\times 2 = 10$ is friendly, so $10 \\times 4 = 40$. Same answer, less effort.

> 💡 Look for pairs that make $10$, $100$, or another round number. It keeps your arithmetic clean on the drill below.`,
      },
      {
        id: 'sav2-vol-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Volume** 🧮

Enter the volume as a number only (the unit is already shown). Use $V = l \\times w \\times h$.

**1)** $l = 7\\text{ cm},\\ w = 3\\text{ cm},\\ h = 2\\text{ cm}\\ \\Rightarrow\\ V = \\,?\\ \\text{cm}^3$
**2)** A cube with every edge $4\\text{ cm}\\ \\Rightarrow\\ V = \\,?\\ \\text{cm}^3$
**3)** $l = 10\\text{ ft},\\ w = 5\\text{ ft},\\ h = 6\\text{ ft}\\ \\Rightarrow\\ V = \\,?\\ \\text{ft}^3$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['42', '64', '300'],
          hint1: '$7 \\times 3 = 21$, then $21 \\times 2 = 42$.',
          hint2: 'A cube has equal edges, so $V = 4 \\times 4 \\times 4 = 64$.',
          hint3: '$10 \\times 5 = 50$, then $50 \\times 6 = 300$.',
          explanation: '1) $7 \\times 3 \\times 2 = 42\\text{ cm}^3$.  2) $4 \\times 4 \\times 4 = 64\\text{ cm}^3$.  3) $10 \\times 5 \\times 6 = 300\\text{ ft}^3$.',
        },
      },
      {
        id: 'sav2-fractional',
        type: 'text' as const,
        content: `## Edge Lengths That Are Fractions

The formula $V = l \\times w \\times h$ still works even when the sides are **fractions** or **decimals** — you just multiply carefully.

### Worked Example (fraction)

A box is $\\dfrac{1}{2}\\text{ ft}$ long, $\\dfrac{1}{2}\\text{ ft}$ wide, and $3\\text{ ft}$ tall.

$$V = \\frac{1}{2} \\times \\frac{1}{2} \\times 3 = \\frac{1}{4} \\times 3 = \\frac{3}{4} \\text{ ft}^3$$

### Worked Example (decimal)

A box is $2.5\\text{ cm}$ by $2\\text{ cm}$ by $4\\text{ cm}$.

$$V = 2.5 \\times 2 \\times 4 = 5 \\times 4 = 20 \\text{ cm}^3$$

> 💡 To multiply fractions, multiply the tops together and the bottoms together: $\\dfrac{1}{2}\\times\\dfrac{1}{2}=\\dfrac{1\\times 1}{2\\times 2}=\\dfrac{1}{4}$.`,
      },
      {
        id: 'sav2-frac-drill',
        type: 'input-boxes' as const,
        content: `**Volume with Fractions & Decimals** 🧮

Enter each answer as a number only. Fractions like $3/4$ and decimals like $0.75$ are both fine.

**1)** $l = \\dfrac{1}{2}\\text{ cm},\\ w = 4\\text{ cm},\\ h = 3\\text{ cm}\\ \\Rightarrow\\ V = \\,?\\ \\text{cm}^3$
**2)** $l = 1.5\\text{ m},\\ w = 2\\text{ m},\\ h = 2\\text{ m}\\ \\Rightarrow\\ V = \\,?\\ \\text{m}^3$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '6'],
          hint1: '$\\frac{1}{2} \\times 4 = 2$, then $2 \\times 3 = 6$.',
          hint2: '$1.5 \\times 2 = 3$, then $3 \\times 2 = 6$.',
          hint3: 'Multiply two of the numbers first, then multiply that result by the third.',
          explanation: '1) $\\frac{1}{2} \\times 4 \\times 3 = 2 \\times 3 = 6\\text{ cm}^3$.  2) $1.5 \\times 2 \\times 2 = 3 \\times 2 = 6\\text{ m}^3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-grade6',
    sections: [
      {
        id: 'sav3-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area and Volume

**Part 3 of 5 — Surface Area of Boxes & Cubes**

---

> 🔑 **The Idea:** **Surface area** is the area of every face added together. For a box, the faces come in $3$ matching pairs, so we find $3$ areas, add them, and double the total.`,
      },
      {
        id: 'sav3-add-the-faces',
        type: 'text' as const,
        content: `## Add Up the Faces

A rectangular prism has $6$ faces in $3$ matching pairs:

- **Top and bottom**, each $l \\times w$
- **Front and back**, each $l \\times h$
- **Left and right**, each $w \\times h$

So the surface area is:

$$SA = 2(l \\times w) + 2(l \\times h) + 2(w \\times h)$$

A neat shortcut is to find the $3$ different face areas, **add them**, and then **double**:

$$SA = 2 \\big[ (l \\times w) + (l \\times h) + (w \\times h) \\big]$$

> ⚠️ Surface area uses **square** units ($\\text{cm}^2$), not cubic — you are adding up flat areas, not filling space.`,
      },
      {
        id: 'sav3-worked',
        type: 'text' as const,
        content: `## Worked Example

Find the surface area of a box that is $l = 5\\text{ cm}$, $w = 3\\text{ cm}$, $h = 2\\text{ cm}$.

**Step 1 — the three different face areas:**

$$l \\times w = 5 \\times 3 = 15$$
$$l \\times h = 5 \\times 2 = 10$$
$$w \\times h = 3 \\times 2 = 6$$

**Step 2 — add them:**

$$15 + 10 + 6 = 31$$

**Step 3 — double (each area appears twice):**

$$SA = 2 \\times 31 = 62 \\text{ cm}^2$$

> ✅ **Check by counting all six faces:** $15 + 15 + 10 + 10 + 6 + 6 = 62\\text{ cm}^2$ ✓`,
      },
      {
        id: 'sav3-sa-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why do we multiply by $2$ in the surface-area shortcut $SA = 2[(lw) + (lh) + (wh)]$?',
              options: [
                'Because each of the three face shapes appears twice (matching pairs)',
                'Because there are two solids',
                'Because area is always doubled',
                'Because volume needs a $2$',
              ],
              correctAnswer: 0,
              explanation: 'A box has $3$ pairs of identical faces. We find one of each pair, add them, then double to count both faces in every pair.',
            },
            {
              question: 'Surface area is measured in which kind of unit?',
              options: ['Square units, like $\\text{cm}^2$', 'Cubic units, like $\\text{cm}^3$', 'Plain units, like $\\text{cm}$', 'No units at all'],
              correctAnswer: 0,
              explanation: 'Surface area adds up flat face areas, so it stays in **square** units like $\\text{cm}^2$.',
            },
          ],
        },
      },
      {
        id: 'sav3-cube-sa',
        type: 'text' as const,
        content: `## Surface Area of a Cube

A cube has $6$ identical square faces, each with area $s \\times s = s^2$. So:

$$SA = 6 \\times s^2 = 6s^2$$

### Worked Example

A cube has edges of $4\\text{ cm}$.

$$SA = 6 \\times s^2 = 6 \\times (4 \\times 4) = 6 \\times 16 = 96 \\text{ cm}^2$$

> 🔑 **Key Idea:** For a cube, find the area of **one** face ($s^2$), then multiply by $6$. That's it.`,
      },
      {
        id: 'sav3-sa-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Surface Area** 🔽

A box has $l = 6\\text{ cm}$, $w = 4\\text{ cm}$, $h = 2\\text{ cm}$. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Area of one top/bottom face ($l \\times w$):', options: ['$24\\text{ cm}^2$', '$12\\text{ cm}^2$', '$8\\text{ cm}^2$', '$48\\text{ cm}^2$'] },
            { label: 'Area of one front/back face ($l \\times h$):', options: ['$12\\text{ cm}^2$', '$24\\text{ cm}^2$', '$8\\text{ cm}^2$', '$10\\text{ cm}^2$'] },
            { label: 'Area of one left/right face ($w \\times h$):', options: ['$8\\text{ cm}^2$', '$24\\text{ cm}^2$', '$12\\text{ cm}^2$', '$6\\text{ cm}^2$'] },
            { label: 'Total surface area ($2 \\times$ the sum):', options: ['$88\\text{ cm}^2$', '$44\\text{ cm}^2$', '$48\\text{ cm}^2$', '$176\\text{ cm}^2$'] },
          ],
          correctAnswers: ['$24\\text{ cm}^2$', '$12\\text{ cm}^2$', '$8\\text{ cm}^2$', '$88\\text{ cm}^2$'],
          hint1: 'Top/bottom: $6 \\times 4 = 24$. Front/back: $6 \\times 2 = 12$. Left/right: $4 \\times 2 = 8$.',
          hint2: 'Add the three different areas: $24 + 12 + 8 = 44$.',
          hint3: 'Double the sum because each face appears twice: $2 \\times 44 = 88$.',
          explanation: 'The three face areas are $24$, $12$, and $8$. Their sum is $44$, and doubling gives $SA = 2 \\times 44 = 88\\text{ cm}^2$.',
        },
      },
      {
        id: 'sav3-sa-drill',
        type: 'input-boxes' as const,
        content: `**Find the Surface Area** 🧮

Enter each answer as a number only (square units).

**1)** A box with $l = 5\\text{ cm}$, $w = 4\\text{ cm}$, $h = 3\\text{ cm}\\ \\Rightarrow\\ SA = \\,?\\ \\text{cm}^2$
**2)** A cube with edge $3\\text{ cm}\\ \\Rightarrow\\ SA = \\,?\\ \\text{cm}^2$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['94', '54'],
          hint1: 'Three face areas: $5\\times4=20$, $5\\times3=15$, $4\\times3=12$.',
          hint2: 'Add: $20 + 15 + 12 = 47$, then double: $2 \\times 47 = 94$.',
          hint3: 'For the cube, one face is $3 \\times 3 = 9$, and there are $6$ faces: $6 \\times 9 = 54$.',
          explanation: '1) $2(20 + 15 + 12) = 2 \\times 47 = 94\\text{ cm}^2$.  2) $6 \\times 3^2 = 6 \\times 9 = 54\\text{ cm}^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-grade6',
    sections: [
      {
        id: 'sav4-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area and Volume

**Part 4 of 5 — Triangular Prisms**

---

> 🔑 **The Idea:** A **triangular prism** is like a box, but its two ends are **triangles** instead of rectangles (think of a tent or a Toblerone bar). The same two ideas — base area times height for volume, and net for surface area — still work.`,
      },
      {
        id: 'sav4-tri-volume',
        type: 'text' as const,
        content: `## Volume of a Triangular Prism

For **any** prism, $V = B \\times h$, where $B$ is the area of the base and $h$ is how long the prism is.

For a triangular prism, the base is a **triangle**, so:

$$B = \\frac{1}{2} \\times b \\times h_{\\triangle}$$

Here $b$ is the triangle's base and $h_{\\triangle}$ is the triangle's height. Then multiply by the prism's length $\\ell$:

$$V = B \\times \\ell = \\left( \\frac{1}{2} \\times b \\times h_{\\triangle} \\right) \\times \\ell$$

### Worked Example

A triangular prism has a triangular end with base $6\\text{ cm}$ and height $4\\text{ cm}$, and the prism is $10\\text{ cm}$ long.

$$B = \\frac{1}{2} \\times 6 \\times 4 = \\frac{1}{2} \\times 24 = 12 \\text{ cm}^2$$
$$V = B \\times \\ell = 12 \\times 10 = 120 \\text{ cm}^3$$

> 💡 The triangle area $\\frac{1}{2} \\times b \\times h$ is exactly half of the rectangle $b \\times h$ — a triangle fills half its surrounding rectangle.`,
      },
      {
        id: 'sav4-tri-vol-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has base $8\\text{ cm}$ and height $5\\text{ cm}$. What is its area?',
              options: ['$20\\text{ cm}^2$', '$40\\text{ cm}^2$', '$13\\text{ cm}^2$', '$80\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: 'Triangle area $= \\frac{1}{2} \\times b \\times h = \\frac{1}{2} \\times 8 \\times 5 = \\frac{1}{2} \\times 40 = 20\\text{ cm}^2$.',
            },
            {
              question: 'A triangular prism has a triangular base of area $9\\text{ cm}^2$ and a length of $7\\text{ cm}$. What is its volume?',
              options: ['$63\\text{ cm}^3$', '$16\\text{ cm}^3$', '$32\\text{ cm}^3$', '$63\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: 'For any prism, $V = B \\times \\ell = 9 \\times 7 = 63$. Volume uses cubic units, so $63\\text{ cm}^3$.',
            },
          ],
        },
      },
      {
        id: 'sav4-tri-vol-steps',
        type: 'text' as const,
        content: `## Two Steps, Every Time

Volume of a triangular prism is always the same two-step move:

1. **Find the triangle's area** first: $B = \\frac{1}{2} \\times b \\times h_{\\triangle}$.
2. **Multiply by the prism's length**: $V = B \\times \\ell$.

> ⚠️ Don't multiply all three numbers straight across! You must take **half** for the triangle before multiplying by the length, or your volume will be **twice** too big.`,
      },
      {
        id: 'sav4-tri-vol-drill',
        type: 'input-boxes' as const,
        content: `**Volume of a Triangular Prism** 🧮

Enter each answer as a number only (cubic units). First find the triangle's area $B = \\frac{1}{2} b h_{\\triangle}$, then $V = B \\times \\ell$.

**1)** Triangle base $4\\text{ cm}$, triangle height $3\\text{ cm}$, prism length $10\\text{ cm}$.  $V = \\,?\\ \\text{cm}^3$
**2)** Triangle base $10\\text{ m}$, triangle height $6\\text{ m}$, prism length $2\\text{ m}$.  $V = \\,?\\ \\text{m}^3$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['60', '60'],
          hint1: 'First find $B$: for #1, $B = \\frac{1}{2} \\times 4 \\times 3 = 6\\text{ cm}^2$.',
          hint2: 'Then $V = B \\times \\ell$: for #1, $V = 6 \\times 10 = 60$.',
          hint3: 'For #2, $B = \\frac{1}{2} \\times 10 \\times 6 = 30\\text{ m}^2$, then $V = 30 \\times 2 = 60$.',
          explanation: '1) $B = \\frac{1}{2}\\times4\\times3 = 6$, so $V = 6 \\times 10 = 60\\text{ cm}^3$.  2) $B = \\frac{1}{2}\\times10\\times6 = 30$, so $V = 30 \\times 2 = 60\\text{ m}^3$.',
        },
      },
      {
        id: 'sav4-tri-sa',
        type: 'text' as const,
        content: `## Surface Area of a Triangular Prism

Use the **net**. A triangular prism unfolds into $5$ faces:

- **$2$ triangles** (the two ends), each $\\frac{1}{2} \\times b \\times h_{\\triangle}$
- **$3$ rectangles** (the sides), one for each side of the triangle, each rectangle being a side-length times the prism length $\\ell$

Just find the area of all $5$ faces and add them up.

### Worked Example

A triangular prism has a triangle with base $6\\text{ cm}$, height $4\\text{ cm}$, the three triangle sides $6\\text{ cm}$, $5\\text{ cm}$, $5\\text{ cm}$, and prism length $10\\text{ cm}$.

**Two triangles:** each $= \\frac{1}{2} \\times 6 \\times 4 = 12$, so together $2 \\times 12 = 24\\text{ cm}^2$.

**Three rectangles** (side $\\times$ length $10$):
$$6 \\times 10 = 60, \\quad 5 \\times 10 = 50, \\quad 5 \\times 10 = 50$$

**Add everything:**
$$SA = 24 + 60 + 50 + 50 = 184 \\text{ cm}^2$$

> 🔑 **Key Idea:** Surface area of *any* prism = (the two ends) + (the rectangles that wrap around the sides). Counting faces from the net never lets you down.`,
      },
      {
        id: 'sav4-tri-sa-dropdown',
        type: 'dropdown-select' as const,
        content: `**Surface Area from the Net** 🔽

Use the worked example above (triangle base $6$, height $4$, sides $6, 5, 5$; prism length $10$).`,
        exercise: {
          dropdowns: [
            { label: 'Area of the TWO triangle ends together:', options: ['$24\\text{ cm}^2$', '$12\\text{ cm}^2$', '$48\\text{ cm}^2$', '$36\\text{ cm}^2$'] },
            { label: 'Area of the rectangle on the base side ($6 \\times 10$):', options: ['$60\\text{ cm}^2$', '$16\\text{ cm}^2$', '$50\\text{ cm}^2$', '$30\\text{ cm}^2$'] },
            { label: 'How many rectangular side faces does this prism have?', options: ['$3$', '$2$', '$4$', '$5$'] },
          ],
          correctAnswers: ['$24\\text{ cm}^2$', '$60\\text{ cm}^2$', '$3$'],
          hint1: 'One triangle is $\\frac{1}{2}\\times6\\times4 = 12$, and there are two of them: $2\\times12 = 24$.',
          hint2: 'The base-side rectangle is the triangle\'s side ($6$) times the prism length ($10$): $6 \\times 10 = 60$.',
          hint3: 'A triangle has $3$ sides, so the prism has $3$ rectangular side faces (plus the $2$ triangle ends = $5$ faces total).',
          explanation: 'The two triangles together are $24\\text{ cm}^2$, the base-side rectangle is $6\\times10 = 60\\text{ cm}^2$, and a triangular prism has $3$ rectangular sides.',
        },
      },
      {
        id: 'sav4-tri-sa-recap',
        type: 'text' as const,
        content: `## Pulling the Net Together

You just found every piece of the net for that prism:

| Faces | Area |
|-------|------|
| Two triangle ends | $24\\text{ cm}^2$ |
| Base-side rectangle | $60\\text{ cm}^2$ |
| Slanted-side rectangle | $50\\text{ cm}^2$ |
| Other slanted-side rectangle | $50\\text{ cm}^2$ |

All that's left is to **add them up** to get the total surface area. Do it in the drill below.`,
      },
      {
        id: 'sav4-tri-sa-drill',
        type: 'input-boxes' as const,
        content: `**Total Surface Area** 🧮

Finish the worked example. The two triangles total $24\\text{ cm}^2$ and the three rectangles are $60$, $50$, and $50\\text{ cm}^2$.

**1)** Add all $5$ faces: $SA = \\,?\\ \\text{cm}^2$`,
        exercise: {
          boxes: 1,
          correctAnswers: ['184'],
          hint1: 'Add the two triangle areas to the three rectangle areas.',
          hint2: 'Rectangles first: $60 + 50 + 50 = 160$.',
          hint3: 'Then add the triangles: $160 + 24 = 184$.',
          explanation: '$SA = 24 + 60 + 50 + 50 = 184\\text{ cm}^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'surface-area-volume-grade6',
    sections: [
      {
        id: 'sav5-intro',
        type: 'text' as const,
        content: `# 📦 Surface Area and Volume

**Part 5 of 5 — Real-World Problems & Mastery Check**

---

You can now (1) name the parts of a solid, (2) find the **volume** of prisms, (3) find the **surface area** of boxes, cubes, and triangular prisms, and (4) choose the right kind of unit. Let's put it together in real situations.`,
      },
      {
        id: 'sav5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula | Units |
|------|---------|-------|
| Volume of a box | $V = l \\times w \\times h$ | cubic ($\\text{cm}^3$) |
| Volume of any prism | $V = B \\times h$ | cubic ($\\text{cm}^3$) |
| Surface area of a box | $SA = 2(lw + lh + wh)$ | square ($\\text{cm}^2$) |
| Surface area of a cube | $SA = 6s^2$ | square ($\\text{cm}^2$) |
| Surface area (any solid) | add the area of every face (the net) | square ($\\text{cm}^2$) |
| Area of a triangle (base) | $B = \\frac{1}{2} \\times b \\times h$ | square ($\\text{cm}^2$) |

> ⚠️ **Decide first:** filling the **inside** → **volume** (cubic units). Covering the **outside** → **surface area** (square units).`,
      },
      {
        id: 'sav5-decide-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Measurement?** 🔽

For each story, choose whether you need surface area or volume.`,
        exercise: {
          dropdowns: [
            { label: 'How much soil fills a raised garden bed:', options: ['Volume', 'Surface area'] },
            { label: 'How much paint covers the outside of a storage crate:', options: ['Surface area', 'Volume'] },
            { label: 'How much juice a carton can hold:', options: ['Volume', 'Surface area'] },
          ],
          correctAnswers: ['Volume', 'Surface area', 'Volume'],
          hint1: '"Fills" and "holds" describe the space inside → volume.',
          hint2: '"Covers the outside" describes the skin of the solid → surface area.',
          hint3: 'Filling/holding = volume (cubic). Covering/wrapping/painting = surface area (square).',
          explanation: 'Filling soil and holding juice both fill the inside → **volume**. Painting the outside covers the surface → **surface area**.',
        },
      },
      {
        id: 'sav5-realworld-text',
        type: 'text' as const,
        content: `## A Real-World Worked Example

A toy chest is a rectangular prism: $l = 4\\text{ ft}$, $w = 2\\text{ ft}$, $h = 3\\text{ ft}$.

**How much space is inside (volume)?**
$$V = l \\times w \\times h = 4 \\times 2 \\times 3 = 24 \\text{ ft}^3$$

**How much wood covers the outside (surface area)?**
$$lw = 4\\times2 = 8, \\quad lh = 4\\times3 = 12, \\quad wh = 2\\times3 = 6$$
$$SA = 2(8 + 12 + 6) = 2 \\times 26 = 52 \\text{ ft}^2$$

> 💡 Same chest, two very different numbers — because volume ($24\\text{ ft}^3$) fills the inside while surface area ($52\\text{ ft}^2$) wraps the outside.`,
      },
      {
        id: 'sav5-realworld-drill',
        type: 'input-boxes' as const,
        content: `**Real-World Practice** 🧮

A fish tank is a rectangular prism: $l = 8\\text{ in}$, $w = 5\\text{ in}$, $h = 4\\text{ in}$. Enter each answer as a number only.

**1)** How much water fills the tank? $V = \\,?\\ \\text{in}^3$
**2)** How much glass covers the whole outside? $SA = \\,?\\ \\text{in}^2$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['160', '184'],
          hint1: 'Volume: $V = 8 \\times 5 \\times 4 = 160$.',
          hint2: 'Three face areas: $8\\times5=40$, $8\\times4=32$, $5\\times4=20$.',
          hint3: 'Surface area: $2(40 + 32 + 20) = 2 \\times 92 = 184$.',
          explanation: '1) $V = 8 \\times 5 \\times 4 = 160\\text{ in}^3$.  2) $SA = 2(40 + 32 + 20) = 2 \\times 92 = 184\\text{ in}^2$.',
        },
      },
      {
        id: 'sav5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A cube has edges of $5\\text{ cm}$. What is its volume?',
              options: ['$125\\text{ cm}^3$', '$25\\text{ cm}^3$', '$150\\text{ cm}^3$', '$15\\text{ cm}^3$'],
              correctAnswer: 0,
              explanation: 'A cube\'s volume is $s^3 = 5 \\times 5 \\times 5 = 125\\text{ cm}^3$.',
            },
            {
              question: 'A triangular prism has a triangular base of area $10\\text{ m}^2$ and is $4\\text{ m}$ long. What is its volume?',
              options: ['$40\\text{ m}^3$', '$14\\text{ m}^3$', '$20\\text{ m}^3$', '$40\\text{ m}^2$'],
              correctAnswer: 0,
              explanation: '$V = B \\times \\ell = 10 \\times 4 = 40$. Volume is in cubic units, so $40\\text{ m}^3$.',
            },
          ],
        },
      },
      {
        id: 'sav5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A rectangular prism is $6\\text{ cm}$ by $3\\text{ cm}$ by $2\\text{ cm}$. What is its volume?',
              options: ['$36\\text{ cm}^3$', '$11\\text{ cm}^3$', '$36\\text{ cm}^2$', '$72\\text{ cm}^3$'],
              correctAnswer: 0,
              explanation: '$V = l \\times w \\times h = 6 \\times 3 \\times 2 = 36\\text{ cm}^3$.',
            },
            {
              question: 'What is the surface area of a cube with edge $2\\text{ cm}$?',
              options: ['$24\\text{ cm}^2$', '$8\\text{ cm}^2$', '$12\\text{ cm}^2$', '$48\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: 'One face is $2 \\times 2 = 4\\text{ cm}^2$, and a cube has $6$ faces: $SA = 6 \\times 4 = 24\\text{ cm}^2$. (Note $8\\text{ cm}^3$ would be its volume.)',
            },
            {
              question: 'You want to know how much wrapping paper it takes to cover a gift box. Which should you calculate, and in which units?',
              options: [
                'Surface area, in square units',
                'Volume, in cubic units',
                'Surface area, in cubic units',
                'Volume, in square units',
              ],
              correctAnswer: 0,
              explanation: 'Wrapping paper covers the **outside**, so you need **surface area**, measured in **square** units like $\\text{cm}^2$.',
            },
          ],
        },
      },
    ],
  },
]
