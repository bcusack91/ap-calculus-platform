import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Area of Polygons (Grade 6 Math).
 * Registry key: 'area-polygons-grade6' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'area-polygons-grade6',
    sections: [
      {
        id: 'area1-intro',
        type: 'text' as const,
        content: `# 📐 Area of Polygons

**Part 1 of 5 — What Is Area? Rectangles & Squares**

---

### Topics in This Part

| Section |
|---------|
| What "area" means (and its units) |
| Area of a rectangle |
| Area of a square |
| Finding a missing side |

> 🔑 **Key Concept:** **Area** is the amount of flat space a shape covers, measured in **square units**. Every area formula in this lesson is really just a clever way to count those squares without drawing them all.`,
      },
      {
        id: 'area1-what-is-area',
        type: 'text' as const,
        content: `## What Is Area?

Imagine covering a shape with $1 \\times 1$ unit squares, with no gaps and no overlaps. The **number of squares** that fit is the **area**.

If a rectangle is $5$ units wide and $3$ units tall, you can fit $3$ rows of $5$ squares:

$$5 + 5 + 5 = 5 \\times 3 = 15 \\text{ square units}$$

That is exactly why the rectangle formula is *length times width* — it counts the rows of squares for you.

### Units Matter

Area is always measured in **square units**, written with a small $2$:

| Length unit | Area unit |
|-------------|-----------|
| centimeter (cm) | square centimeter ($\\text{cm}^2$) |
| meter (m) | square meter ($\\text{m}^2$) |
| inch (in) | square inch ($\\text{in}^2$) |
| foot (ft) | square foot ($\\text{ft}^2$) |

> ⚠️ **Don't mix it up:** **perimeter** is the distance *around* a shape (just units, like cm). **Area** is the space *inside* (square units, like $\\text{cm}^2$).`,
      },
      {
        id: 'area1-rectangle',
        type: 'text' as const,
        content: `## Area of a Rectangle

$$A = \\text{length} \\times \\text{width} = l \\times w$$

### Worked Example

A rectangle is $8\\text{ cm}$ long and $5\\text{ cm}$ wide.

$$A = l \\times w = 8 \\times 5 = 40 \\text{ cm}^2$$

> 💡 It doesn't matter which side you call "length" and which you call "width" — $8 \\times 5$ and $5 \\times 8$ both give $40$. Multiplication can be done in any order.`,
      },
      {
        id: 'area1-rect-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangle is $12\\text{ m}$ long and $7\\text{ m}$ wide. What is its area?',
              options: ['$84\\text{ m}^2$', '$19\\text{ m}^2$', '$38\\text{ m}^2$', '$84\\text{ m}$'],
              correctAnswer: 0,
              explanation: '$A = l \\times w = 12 \\times 7 = 84$. Because it is area, the unit is square meters, $\\text{m}^2$. (The choice $84\\text{ m}$ has the wrong unit, and $38$ is the perimeter.)',
            },
            {
              question: 'Which measurement is reported in **square** units?',
              options: ['The perimeter of a garden', 'The length of a fence', 'The area of a carpet', 'The height of a wall'],
              correctAnswer: 2,
              explanation: 'Area — the flat space a shape covers — is always in square units. Perimeter, length, and height are one-dimensional distances measured in plain units.',
            },
          ],
        },
      },
      {
        id: 'area1-square',
        type: 'text' as const,
        content: `## Area of a Square

A square is just a rectangle whose length and width are **equal**, so both sides are the same value $s$:

$$A = s \\times s = s^2$$

### Worked Example

A square has sides of $9\\text{ in}$.

$$A = s^2 = 9 \\times 9 = 81 \\text{ in}^2$$

> 🔑 **Key Idea:** $s^2$ is read "$s$ squared." The word *squared* literally comes from finding the area of a **square**.`,
      },
      {
        id: 'area1-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Area** 🧮

Enter the area as a number only (the unit is already shown).

**1)** Rectangle, $15\\text{ ft}$ by $4\\text{ ft}$ $\\;\\Rightarrow\\; ? \\text{ ft}^2$
**2)** Square with side $6\\text{ cm}$ $\\;\\Rightarrow\\; ? \\text{ cm}^2$
**3)** Square with side $12\\text{ m}$ $\\;\\Rightarrow\\; ? \\text{ m}^2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '36', '144'],
          hint1: 'Rectangle: multiply the two side lengths, $15 \\times 4$.',
          hint2: 'Square: multiply the side by itself, $6 \\times 6$.',
          hint3: 'Square: $12 \\times 12 = 144$.',
          explanation: '1) $15 \\times 4 = 60\\text{ ft}^2$.  2) $6 \\times 6 = 36\\text{ cm}^2$.  3) $12 \\times 12 = 144\\text{ m}^2$.',
        },
      },
      {
        id: 'area1-missing-side',
        type: 'text' as const,
        content: `## Working Backwards: Finding a Missing Side

If you know the **area** and **one side** of a rectangle, you can find the other side by **dividing**.

### Worked Example

A rectangle has area $72\\text{ cm}^2$ and a width of $8\\text{ cm}$. How long is it?

$$l = \\frac{A}{w} = \\frac{72}{8} = 9 \\text{ cm}$$

> 💡 Multiplication and division are opposites. Since $A = l \\times w$, you can always undo the multiplication by dividing. We'll use this "work backwards" trick for every shape in this lesson.`,
      },
      {
        id: 'area1-missing-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Side** 🧮

**1)** A rectangle has area $40\\text{ m}^2$ and length $8\\text{ m}$. Its width is $? \\text{ m}$.
**2)** A rectangle has area $54\\text{ in}^2$ and width $6\\text{ in}$. Its length is $? \\text{ in}$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '9'],
          hint1: 'Divide the area by the side you know: $40 \\div 8$.',
          hint2: '$54 \\div 6 = 9$.',
          hint3: 'Check by multiplying back: side $\\times$ side should equal the area.',
          explanation: '1) $40 \\div 8 = 5\\text{ m}$ (check: $8 \\times 5 = 40$ ✓).  2) $54 \\div 6 = 9\\text{ in}$ (check: $6 \\times 9 = 54$ ✓).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'area-polygons-grade6',
    sections: [
      {
        id: 'area2-intro',
        type: 'text' as const,
        content: `# 📐 Area of Polygons

**Part 2 of 5 — Parallelograms**

---

> 🔑 **The Big Idea:** A parallelogram can be **cut and rearranged into a rectangle** with the same area. That's why its formula looks so much like the rectangle's: $A = b \\times h$.`,
      },
      {
        id: 'area2-cut-rearrange',
        type: 'text' as const,
        content: `## Turning a Parallelogram into a Rectangle

Slice a right triangle off one end of a parallelogram and slide it to the other side. You get a **rectangle** — same area, just rearranged.

- The **base** $b$ becomes the rectangle's length.
- The **height** $h$ becomes the rectangle's width.

$$A = b \\times h$$

### ⚠️ Height Is NOT the Slanted Side

The **height** is the *straight-up* (perpendicular) distance between the two bases — measured at a right angle, **not** along the tilted edge.

| Part | What it is |
|------|------------|
| base $b$ | a flat side you choose to sit on the bottom |
| height $h$ | perpendicular distance straight up to the opposite side |
| slant side | the tilted edge — **not used** in the area formula |

> ⚠️ The most common mistake is multiplying the base by the **slanted side**. Always use the perpendicular height.`,
      },
      {
        id: 'area2-worked',
        type: 'text' as const,
        content: `## Worked Example

A parallelogram has base $10\\text{ cm}$ and height $6\\text{ cm}$. (Its slanted side is $7\\text{ cm}$, but we ignore that.)

$$A = b \\times h = 10 \\times 6 = 60 \\text{ cm}^2$$

### A Second Example

Base $12\\text{ m}$, height $5\\text{ m}$:

$$A = 12 \\times 5 = 60 \\text{ m}^2$$

> 💡 Notice this is the **exact same multiplication** you used for rectangles. A rectangle is really just a parallelogram whose height equals its side.`,
      },
      {
        id: 'area2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A parallelogram has base $7\\text{ cm}$ and height $4\\text{ cm}$. What is its area?',
              options: ['$28\\text{ cm}^2$', '$11\\text{ cm}^2$', '$22\\text{ cm}^2$', '$14\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: '$A = b \\times h = 7 \\times 4 = 28\\text{ cm}^2$. ($11$ adds the sides, and $22$ would be a perimeter idea — neither is area.)',
            },
            {
              question: 'In the area formula for a parallelogram, the **height** is:',
              options: ['the length of the slanted side', 'the perpendicular distance between the two bases', 'the longest side of the shape', 'the same as the base'],
              correctAnswer: 1,
              explanation: 'Height is measured straight up at a right angle to the base — the perpendicular distance between the two parallel bases. The slanted side is longer and is never used in $A = b \\times h$.',
            },
          ],
        },
      },
      {
        id: 'area2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Numbers** 🔽

A parallelogram has base $9$, height $8$, and a slanted side of $10$. Choose correctly at each step.`,
        exercise: {
          dropdowns: [
            { label: 'Which length is the base?', options: ['$9$', '$8$', '$10$'] },
            { label: 'Which length is the height?', options: ['$10$', '$8$', '$9$'] },
            { label: 'The area is:', options: ['$72$', '$90$', '$80$', '$17$'] },
          ],
          correctAnswers: ['$9$', '$8$', '$72$'],
          hint1: 'The base is a flat side the shape sits on — here that is $9$.',
          hint2: 'The height is the perpendicular distance — $8$ — never the slanted $10$.',
          hint3: 'Area $= b \\times h = 9 \\times 8 = 72$. The slanted $10$ is a trap and is not used.',
          explanation: 'Base $= 9$, height $= 8$, so $A = 9 \\times 8 = 72$. The slant side ($10$) never appears in the area formula.',
        },
      },
      {
        id: 'area2-drill',
        type: 'input-boxes' as const,
        content: `**Parallelogram Practice** 🧮

**1)** Base $15$, height $3$ $\\;\\Rightarrow\\; A = ?$
**2)** Base $6$, height $11$ $\\;\\Rightarrow\\; A = ?$
**3)** A parallelogram has area $48$ and base $8$. Its height is $?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['45', '66', '6'],
          hint1: '$A = b \\times h = 15 \\times 3$.',
          hint2: '$6 \\times 11 = 66$.',
          hint3: 'Work backwards: $h = A \\div b = 48 \\div 8$.',
          explanation: '1) $15 \\times 3 = 45$.  2) $6 \\times 11 = 66$.  3) $h = 48 \\div 8 = 6$ (check: $8 \\times 6 = 48$ ✓).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'area-polygons-grade6',
    sections: [
      {
        id: 'area3-intro',
        type: 'text' as const,
        content: `# 📐 Area of Polygons

**Part 3 of 5 — Triangles**

---

> 🔑 **The Big Idea:** **Two identical triangles** snap together to make a parallelogram. So one triangle is exactly **half** of that parallelogram: $A = \\dfrac{1}{2} \\, b \\, h$.`,
      },
      {
        id: 'area3-half',
        type: 'text' as const,
        content: `## Why Triangles Use One-Half

Take any triangle and make a copy of it. Flip the copy and slide it next to the original — together they form a **parallelogram** with the same base $b$ and height $h$.

Since the parallelogram's area is $b \\times h$ and the triangle is half of it:

$$A = \\frac{1}{2} \\times b \\times h$$

### Same Height Rule as Parallelograms

The **height** is again the **perpendicular** distance from the base straight up to the opposite **vertex** (corner) — not a slanted side.

> ⚠️ For a **right triangle**, the two short sides (legs) meet at a right angle, so they can serve as the base and height directly. For other triangles, look for the dashed perpendicular line marking the height.`,
      },
      {
        id: 'area3-worked',
        type: 'text' as const,
        content: `## Worked Examples

**Example 1.** Base $8\\text{ cm}$, height $5\\text{ cm}$:

$$A = \\frac{1}{2} \\times 8 \\times 5 = \\frac{1}{2} \\times 40 = 20 \\text{ cm}^2$$

**Example 2.** Base $12\\text{ m}$, height $7\\text{ m}$:

$$A = \\frac{1}{2} \\times 12 \\times 7 = \\frac{1}{2} \\times 84 = 42 \\text{ m}^2$$

> 💡 **Smart shortcut:** multiply the two lengths first, then take half. Or, if one of the numbers is even, halve it first: $\\frac{1}{2} \\times 12 = 6$, then $6 \\times 7 = 42$. Same answer, easier mental math.`,
      },
      {
        id: 'area3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has base $10\\text{ cm}$ and height $6\\text{ cm}$. What is its area?',
              options: ['$30\\text{ cm}^2$', '$60\\text{ cm}^2$', '$16\\text{ cm}^2$', '$30\\text{ cm}$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2} \\times 10 \\times 6 = \\frac{1}{2} \\times 60 = 30\\text{ cm}^2$. ($60$ forgets the $\\frac{1}{2}$; $16$ adds the sides; and $30\\text{ cm}$ has the wrong unit.)',
            },
            {
              question: 'Why does the triangle formula include a factor of $\\frac{1}{2}$?',
              options: ['Because a triangle has three sides', 'Because a triangle is half of a parallelogram with the same base and height', 'Because you always round area down', 'Because the height is always half the base'],
              correctAnswer: 1,
              explanation: 'Two copies of a triangle form a parallelogram of area $b \\times h$, so a single triangle is exactly half of that: $\\frac{1}{2} b h$.',
            },
          ],
        },
      },
      {
        id: 'area3-drill',
        type: 'input-boxes' as const,
        content: `**Triangle Practice** 🧮

**1)** Base $9$, height $4$ $\\;\\Rightarrow\\; A = ?$
**2)** Base $14$, height $5$ $\\;\\Rightarrow\\; A = ?$
**3)** Base $6$, height $9$ $\\;\\Rightarrow\\; A = ?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '35', '27'],
          hint1: '$\\frac{1}{2} \\times 9 \\times 4 = \\frac{1}{2} \\times 36$.',
          hint2: 'Halve the even number first: $\\frac{1}{2} \\times 14 = 7$, then $7 \\times 5$.',
          hint3: '$\\frac{1}{2} \\times 6 \\times 9 = 3 \\times 9 = 27$.',
          explanation: '1) $\\frac{1}{2} \\times 36 = 18$.  2) $7 \\times 5 = 35$.  3) $3 \\times 9 = 27$.',
        },
      },
      {
        id: 'area3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Work Backwards** 🔽

A triangle has area $24\\text{ cm}^2$ and base $8\\text{ cm}$. Find its height.`,
        exercise: {
          dropdowns: [
            { label: 'Start from the formula:', options: ['$24 = \\frac{1}{2} \\times 8 \\times h$', '$24 = 8 \\times h$', '$24 = \\frac{1}{2} \\times h$', '$24 = 8 + h$'] },
            { label: 'First, $\\frac{1}{2} \\times 8 = $', options: ['$4$', '$8$', '$16$', '$2$'] },
            { label: 'So the height is:', options: ['$6$', '$3$', '$12$', '$16$'] },
          ],
          correctAnswers: ['$24 = \\frac{1}{2} \\times 8 \\times h$', '$4$', '$6$'],
          hint1: 'Plug what you know into $A = \\frac{1}{2} b h$: that is $24 = \\frac{1}{2} \\times 8 \\times h$.',
          hint2: '$\\frac{1}{2} \\times 8 = 4$, so the equation becomes $24 = 4 \\times h$.',
          hint3: '$h = 24 \\div 4 = 6$ (check: $\\frac{1}{2} \\times 8 \\times 6 = 24$ ✓).',
          explanation: '$24 = \\frac{1}{2} \\times 8 \\times h = 4h$, so $h = 24 \\div 4 = 6\\text{ cm}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'area-polygons-grade6',
    sections: [
      {
        id: 'area4-intro',
        type: 'text' as const,
        content: `# 📐 Area of Polygons

**Part 4 of 5 — Trapezoids**

---

> 🔑 **The Big Idea:** A trapezoid has **two parallel bases** of *different* lengths. Average those two bases, then multiply by the height: $A = \\dfrac{1}{2}\\,(b_1 + b_2)\\,h$.`,
      },
      {
        id: 'area4-formula',
        type: 'text' as const,
        content: `## The Trapezoid Formula

A **trapezoid** has exactly one pair of parallel sides — the two **bases**, called $b_1$ ("base one") and $b_2$ ("base two"). The **height** $h$ is the perpendicular distance between them.

$$A = \\frac{1}{2} \\, (b_1 + b_2) \\, h$$

### Read It as "Average of the Bases Times Height"

The piece $\\dfrac{b_1 + b_2}{2}$ is just the **average** of the two bases — a typical width halfway up the shape. Multiply that average width by the height and you have the area.

> 💡 **Order of operations:** always **add the two bases first** (inside the parentheses), *then* multiply by the height, *then* take half.`,
      },
      {
        id: 'area4-worked',
        type: 'text' as const,
        content: `## Worked Examples

**Example 1.** Bases $b_1 = 6$, $b_2 = 10$, height $h = 4$:

$$A = \\frac{1}{2}(6 + 10)(4) = \\frac{1}{2}(16)(4) = \\frac{1}{2}(64) = 32 \\text{ units}^2$$

**Example 2.** Bases $b_1 = 8$, $b_2 = 12$, height $h = 5$:

$$A = \\frac{1}{2}(8 + 12)(5) = \\frac{1}{2}(20)(5) = \\frac{1}{2}(100) = 50 \\text{ units}^2$$

> ⚠️ **Watch the steps:** $6 + 10 = 16$ comes **before** any multiplying. A common error is computing $\\frac{1}{2} \\times 6$ first and forgetting to include $b_2$.`,
      },
      {
        id: 'area4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A trapezoid has bases $5$ and $9$ and height $6$. What is its area?',
              options: ['$42$', '$84$', '$20$', '$33$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(5 + 9)(6) = \\frac{1}{2}(14)(6) = \\frac{1}{2}(84) = 42$. ($84$ forgets the $\\frac{1}{2}$.)',
            },
            {
              question: 'In $A = \\frac{1}{2}(b_1 + b_2)h$, what do $b_1$ and $b_2$ represent?',
              options: ['The two slanted sides', 'The two parallel bases', 'The height and the base', 'The perimeter split in two'],
              correctAnswer: 1,
              explanation: 'A trapezoid has two **parallel** sides of different lengths — those are the bases $b_1$ and $b_2$. The slanted sides are not used in the area formula.',
            },
          ],
        },
      },
      {
        id: 'area4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Answer Step by Step** 🔽

Trapezoid with bases $b_1 = 7$, $b_2 = 11$, and height $h = 8$.`,
        exercise: {
          dropdowns: [
            { label: 'Add the bases: $b_1 + b_2 = $', options: ['$18$', '$77$', '$26$', '$4$'] },
            { label: 'Multiply by the height: $18 \\times 8 = $', options: ['$144$', '$26$', '$72$', '$108$'] },
            { label: 'Take half: the area is', options: ['$72$', '$144$', '$36$', '$288$'] },
          ],
          correctAnswers: ['$18$', '$144$', '$72$'],
          hint1: 'Add first: $7 + 11 = 18$.',
          hint2: '$18 \\times 8 = 144$.',
          hint3: 'Half of $144$ is $72$, so $A = 72$.',
          explanation: '$A = \\frac{1}{2}(7 + 11)(8) = \\frac{1}{2}(18)(8) = \\frac{1}{2}(144) = 72$.',
        },
      },
      {
        id: 'area4-drill',
        type: 'input-boxes' as const,
        content: `**Trapezoid Practice** 🧮

**1)** Bases $10$ and $14$, height $3$ $\\;\\Rightarrow\\; A = ?$
**2)** Bases $4$ and $8$, height $10$ $\\;\\Rightarrow\\; A = ?$
**3)** Bases $3$ and $7$, height $5$ $\\;\\Rightarrow\\; A = ?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '60', '25'],
          hint1: '$\\frac{1}{2}(10 + 14)(3) = \\frac{1}{2}(24)(3)$.',
          hint2: '$\\frac{1}{2}(4 + 8)(10) = \\frac{1}{2}(12)(10) = \\frac{1}{2}(120)$.',
          hint3: '$\\frac{1}{2}(3 + 7)(5) = \\frac{1}{2}(10)(5) = \\frac{1}{2}(50)$.',
          explanation: '1) $\\frac{1}{2}(24)(3) = \\frac{1}{2}(72) = 36$.  2) $\\frac{1}{2}(120) = 60$.  3) $\\frac{1}{2}(50) = 25$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'area-polygons-grade6',
    sections: [
      {
        id: 'area5-intro',
        type: 'text' as const,
        content: `# 📐 Area of Polygons

**Part 5 of 5 — Composite Figures & Mastery Check**

---

> 🔑 **The Big Idea:** Any complicated polygon can be **broken into rectangles, triangles, and trapezoids** you already know. Find each piece's area, then **add** them (or **subtract** a missing chunk).`,
      },
      {
        id: 'area5-decompose',
        type: 'text' as const,
        content: `## Two Strategies for Composite Shapes

**Strategy 1 — Add the pieces.** Split the figure into simple shapes, find each area, and add.

*Example — a "house" pentagon:* a rectangle ($8 \\times 6$) with a triangle roof (base $8$, height $3$) on top.

$$A = \\underbrace{8 \\times 6}_{\\text{rectangle}} + \\underbrace{\\tfrac{1}{2} \\times 8 \\times 3}_{\\text{triangle}} = 48 + 12 = 60 \\text{ units}^2$$

**Strategy 2 — Subtract a missing piece.** Find the area of a big rectangle that *encloses* the shape, then subtract the corner that isn't there.

*Example — an L-shape:* a full $10 \\times 8$ rectangle with a $4 \\times 3$ rectangle cut out of one corner.

$$A = \\underbrace{10 \\times 8}_{\\text{big}} - \\underbrace{4 \\times 3}_{\\text{cut-out}} = 80 - 12 = 68 \\text{ units}^2$$

> 💡 Either strategy works — choose whichever splits the figure into the **fewest, friendliest** pieces.`,
      },
      {
        id: 'area5-mc-strategy',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A picture frame is a $12 \\times 10$ outer rectangle with an $8 \\times 6$ rectangular hole in the middle (the opening). What is the area of just the frame (the border)?',
              options: ['$72$', '$120$', '$48$', '$168$'],
              correctAnswer: 0,
              explanation: 'Use subtraction: outer area $= 12 \\times 10 = 120$, opening $= 8 \\times 6 = 48$. Frame $= 120 - 48 = 72$.',
            },
            {
              question: 'A flag is made of a $6 \\times 4$ rectangle joined to a separate $10 \\times 3$ rectangle. What is the total area?',
              options: ['$54$', '$24$', '$30$', '$23$'],
              correctAnswer: 0,
              explanation: 'Add the pieces: $6 \\times 4 = 24$ and $10 \\times 3 = 30$, so total $= 24 + 30 = 54$.',
            },
          ],
        },
      },
      {
        id: 'area5-summary',
        type: 'text' as const,
        content: `## Quick Reference — All Five Formulas

| Shape | Formula | Remember |
|-------|---------|----------|
| Rectangle | $A = l \\times w$ | length times width |
| Square | $A = s^2$ | side times itself |
| Parallelogram | $A = b \\times h$ | use the **perpendicular** height |
| Triangle | $A = \\dfrac{1}{2} \\, b \\, h$ | half of a parallelogram |
| Trapezoid | $A = \\dfrac{1}{2}(b_1 + b_2)\\,h$ | average the two bases |

> ⚠️ **Top three traps:** (1) using a **slanted side** instead of the perpendicular height, (2) **forgetting the $\\frac{1}{2}$** for triangles and trapezoids, and (3) reporting area in plain units instead of **square** units.`,
      },
      {
        id: 'area5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Pick the right formula for each shape, then compute.

**1)** Triangle, base $7$, height $6$ $\\;\\Rightarrow\\; A = ?$
**2)** Trapezoid, bases $9$ and $15$, height $6$ $\\;\\Rightarrow\\; A = ?$
**3)** Parallelogram, base $12$, height $5$ $\\;\\Rightarrow\\; A = ?$
**4)** L-shape: a $10 \\times 8$ rectangle with a $4 \\times 3$ corner removed $\\;\\Rightarrow\\; A = ?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['21', '72', '60', '68'],
          hint1: 'Triangle: $\\frac{1}{2} \\times 7 \\times 6 = \\frac{1}{2} \\times 42$.',
          hint2: 'Trapezoid: $\\frac{1}{2}(9 + 15)(6) = \\frac{1}{2}(24)(6)$.',
          hint3: 'Parallelogram: $12 \\times 5$. L-shape: $10 \\times 8 - 4 \\times 3 = 80 - 12$.',
          explanation: '1) $\\frac{1}{2}(42) = 21$.  2) $\\frac{1}{2}(24)(6) = \\frac{1}{2}(144) = 72$.  3) $12 \\times 5 = 60$.  4) $80 - 12 = 68$.',
        },
      },
      {
        id: 'area5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A triangle has base $8\\text{ cm}$ and height $5\\text{ cm}$. Its area is:',
              options: ['$20\\text{ cm}^2$', '$40\\text{ cm}^2$', '$13\\text{ cm}^2$', '$20\\text{ cm}$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2} \\times 8 \\times 5 = \\frac{1}{2} \\times 40 = 20\\text{ cm}^2$. ($40$ forgets the half; $20\\text{ cm}$ has the wrong unit.)',
            },
            {
              question: 'A parallelogram has base $9$, a perpendicular height of $8$, and a slanted side of $10$. Its area is:',
              options: ['$72$', '$90$', '$80$', '$27$'],
              correctAnswer: 0,
              explanation: 'Use the perpendicular height, not the slant: $A = b \\times h = 9 \\times 8 = 72$. The $10$ is a distractor.',
            },
            {
              question: 'A trapezoid has parallel bases of $6$ and $10$ and a height of $4$. Its area is:',
              options: ['$32$', '$64$', '$40$', '$20$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(6 + 10)(4) = \\frac{1}{2}(16)(4) = \\frac{1}{2}(64) = 32$. ($64$ forgets the $\\frac{1}{2}$.)',
            },
          ],
        },
      },
    ],
  },
]
