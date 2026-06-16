import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Area of Triangles and Quadrilaterals (Geometry).
 * Registry key: 'area-triangles-quadrilaterals' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'area-triangles-quadrilaterals',
    sections: [
      {
        id: 'atq1-intro',
        type: 'text' as const,
        content: `# 📐 Area of Triangles and Quadrilaterals

**Part 1 of 5 — Rectangles, Squares & Parallelograms**

---

### Topics in This Part

| Section |
|---------|
| What "Area" Really Means |
| Rectangles and Squares |
| Parallelograms: Base × Height |
| Why Height ≠ Slanted Side |

> 🔑 **Key Concept:** *Area* is the number of unit squares that fit inside a flat shape. Every formula in this lesson is really just a clever way of counting those squares without drawing them.`,
      },
      {
        id: 'atq1-meaning',
        type: 'text' as const,
        content: `## What "Area" Really Means

Area measures the **2-dimensional space inside** a closed figure. We report it in **square units**: $\\text{cm}^2$, $\\text{in}^2$, $\\text{m}^2$, and so on.

Picture a $3 \\times 4$ grid of unit squares:

$$\\underbrace{4 \\text{ columns}}_{\\text{base}} \\times \\underbrace{3 \\text{ rows}}_{\\text{height}} = 12 \\text{ unit squares}$$

That single picture — counting rows of squares — is the seed of **every** area formula. A rectangle is the easiest case because the squares line up perfectly.

> 💡 **Units matter.** A length is measured in units (like cm); an area is measured in **square** units (like $\\text{cm}^2$). If your answer to an area problem has no little "2", something went wrong.`,
      },
      {
        id: 'atq1-rect-square',
        type: 'text' as const,
        content: `## Rectangles and Squares

| Shape | Formula | Why |
|-------|---------|-----|
| Rectangle | $A = b \\cdot h$ | rows × columns of unit squares |
| Square | $A = s^2$ | a rectangle with all sides equal |

### Example: a rectangle

A rectangle is $9\\text{ cm}$ long and $4\\text{ cm}$ tall:

$$A = b \\cdot h = 9 \\cdot 4 = 36 \\text{ cm}^2$$

### Example: a square

A square tile has side $7\\text{ in}$:

$$A = s^2 = 7^2 = 49 \\text{ in}^2$$

> 🔑 For a rectangle the **base** and **height** are just the two side lengths — they are already perpendicular, so no extra work is needed.`,
      },
      {
        id: 'atq1-rect-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangle has base $12\\text{ m}$ and height $5\\text{ m}$. Its area is:',
              options: ['$60 \\text{ m}^2$', '$34 \\text{ m}^2$', '$17 \\text{ m}^2$', '$60 \\text{ m}$'],
              correctAnswer: 0,
              explanation: '$A = b \\cdot h = 12 \\cdot 5 = 60$. Area is in square units, so $60\\text{ m}^2$. ($34\\text{ m}$ would be the *perimeter*.)',
            },
            {
              question: 'A square has area $81 \\text{ cm}^2$. What is the length of one side?',
              options: ['$9 \\text{ cm}$', '$40.5 \\text{ cm}$', '$81 \\text{ cm}$', '$18 \\text{ cm}$'],
              correctAnswer: 0,
              explanation: 'For a square $A = s^2$, so $s = \\sqrt{81} = 9 \\text{ cm}$. (Squaring back: $9^2 = 81$ ✓.)',
            },
          ],
        },
      },
      {
        id: 'atq1-parallelogram',
        type: 'text' as const,
        content: `## Parallelograms: Base × Height

A **parallelogram** is a quadrilateral with two pairs of parallel sides. It looks like a "pushed-over" rectangle.

$$A = b \\cdot h$$

Here $b$ is a **base** (any one side) and $h$ is the **height** — the *perpendicular* distance to the opposite side, **not** the length of the slanted side.

> ⚠️ **The #1 mistake:** using the slanted side length instead of the perpendicular height. The slanted side is always **longer** than the height, so it would give too big an answer.

### Why it works

If you slice a right triangle off one end of a parallelogram and slide it to the other end, you get a **rectangle** with the same base and the same height. Same squares, just rearranged — so the area must be identical: $b \\cdot h$.

### Example

A parallelogram has base $10\\text{ cm}$, perpendicular height $6\\text{ cm}$, and a slanted side of $8\\text{ cm}$:

$$A = b \\cdot h = 10 \\cdot 6 = 60 \\text{ cm}^2$$

The $8\\text{ cm}$ slanted side is a **distractor** — it is not the height.`,
      },
      {
        id: 'atq1-pgram-drill',
        type: 'input-boxes' as const,
        content: `**Find the Area** 🧮

Compute each area. Enter just the number (square units understood).

**1)** Rectangle: base $15$, height $8$ → $A = \\,?$
**2)** Square: side $11$ → $A = \\,?$
**3)** Parallelogram: base $9$, perpendicular height $7$ → $A = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['120', '121', '63'],
          hint1: 'Rectangle: $A = b \\cdot h = 15 \\cdot 8$.',
          hint2: 'Square: $A = s^2 = 11^2$.',
          hint3: 'Parallelogram: $A = b \\cdot h = 9 \\cdot 7$ (use the perpendicular height).',
          explanation: '1) $15 \\cdot 8 = 120$.  2) $11^2 = 121$.  3) $9 \\cdot 7 = 63$.',
        },
      },
      {
        id: 'atq1-height-dropdown',
        type: 'dropdown-select' as const,
        content: `**Base vs. Height** 🔽

Decide which measurement to use as the *height* in $A = b \\cdot h$.`,
        exercise: {
          dropdowns: [
            { label: 'In a parallelogram, the height is:', options: ['the perpendicular distance between the two bases', 'the length of the slanted side', 'the longest diagonal', 'half the base'] },
            { label: 'A parallelogram with base $12$ and height $5$ has area:', options: ['$60$', '$17$', '$30$', '$34$'] },
          ],
          correctAnswers: ['the perpendicular distance between the two bases', '$60$'],
          hint1: 'Height is always measured at a right angle to the base.',
          hint2: '$A = b \\cdot h = 12 \\cdot 5 = 60$.',
          hint3: 'The slanted side would over-count the area, because it is longer than the perpendicular height.',
          explanation: 'The height is the perpendicular (shortest) distance between the parallel bases. With $b=12$, $h=5$: $A = 60$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'area-triangles-quadrilaterals',
    sections: [
      {
        id: 'atq2-intro',
        type: 'text' as const,
        content: `# 📐 Area of Triangles and Quadrilaterals

**Part 2 of 5 — Triangles**

---

> 🔑 **The Idea:** A triangle is **exactly half** of a parallelogram. Two identical triangles snap together into a parallelogram with the same base and height — so a triangle's area is half of $b \\cdot h$.`,
      },
      {
        id: 'atq2-half-formula',
        type: 'text' as const,
        content: `## The Half-Base-Height Formula

$$A = \\frac{1}{2} \\, b \\, h$$

- $b$ = the length of **any one side** you choose as the base
- $h$ = the **perpendicular** height from that base to the opposite vertex

The same warning from parallelograms applies: $h$ is the perpendicular height, **not** a slanted side.

### Example: a right triangle

The two legs of a right triangle are perpendicular, so one leg is the base and the other is the height. With legs $6$ and $8$:

$$A = \\frac{1}{2}(6)(8) = \\frac{1}{2}(48) = 24$$

### Example: any triangle

A triangle has base $14\\text{ cm}$ and perpendicular height $5\\text{ cm}$:

$$A = \\frac{1}{2}(14)(5) = \\frac{1}{2}(70) = 35 \\text{ cm}^2$$

> 💡 **Trick:** multiply $b \\cdot h$ first, *then* halve. With $b=14, h=5$: $70 \\to 35$. It avoids fractions in the middle of your work.`,
      },
      {
        id: 'atq2-tri-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has base $10$ and perpendicular height $7$. Its area is:',
              options: ['$35$', '$70$', '$17$', '$24$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(10)(7) = \\frac{1}{2}(70) = 35$.',
            },
            {
              question: 'A triangle has area $30$ and base $12$. What is its perpendicular height?',
              options: ['$5$', '$2.5$', '$18$', '$360$'],
              correctAnswer: 0,
              explanation: 'From $A = \\frac{1}{2}bh$: $30 = \\frac{1}{2}(12)h = 6h$, so $h = 30/6 = 5$.',
            },
          ],
        },
      },
      {
        id: 'atq2-solve-back',
        type: 'text' as const,
        content: `## Working Backwards for a Missing Length

Because $A = \\frac{1}{2}bh$, if you know the area and one of $b$ or $h$, you can solve for the other. Double the area first to undo the $\\frac{1}{2}$:

$$2A = b \\, h \\quad\\Longrightarrow\\quad b = \\frac{2A}{h}, \\qquad h = \\frac{2A}{b}$$

### Example

A triangle has area $48\\text{ in}^2$ and height $8\\text{ in}$. Find the base.

$$b = \\frac{2A}{h} = \\frac{2(48)}{8} = \\frac{96}{8} = 12 \\text{ in}$$

> ✅ **Check:** $\\frac{1}{2}(12)(8) = \\frac{1}{2}(96) = 48$ ✓`,
      },
      {
        id: 'atq2-tri-drill',
        type: 'input-boxes' as const,
        content: `**Triangle Practice** 🧮

Enter just the number.

**1)** Triangle, base $16$, height $9$ → $A = \\,?$
**2)** Right triangle, legs $5$ and $12$ → $A = \\,?$
**3)** Triangle has area $40$ and base $10$. Perpendicular height $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['72', '30', '8'],
          hint1: '$A = \\frac{1}{2}(16)(9) = \\frac{1}{2}(144)$.',
          hint2: 'The legs are perpendicular: $A = \\frac{1}{2}(5)(12) = \\frac{1}{2}(60)$.',
          hint3: '$40 = \\frac{1}{2}(10)h = 5h$, so $h = 40/5$.',
          explanation: '1) $\\frac{1}{2}(144)=72$.  2) $\\frac{1}{2}(60)=30$.  3) $h = 40/5 = 8$.',
        },
      },
      {
        id: 'atq2-heron',
        type: 'text' as const,
        content: `## When You Only Know the Three Sides: Heron's Formula

Sometimes you are given all **three side lengths** $a, b, c$ but **no height**. Heron's formula handles this. First find the **semiperimeter** $s$ (half the perimeter):

$$s = \\frac{a + b + c}{2}, \\qquad A = \\sqrt{s(s-a)(s-b)(s-c)}$$

### Example: sides $5, 6, 7$

$$s = \\frac{5+6+7}{2} = \\frac{18}{2} = 9$$

$$A = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} \\approx 14.7$$

### Example: a $3\\text{-}4\\text{-}5$ triangle

$$s = \\frac{3+4+5}{2} = 6, \\quad A = \\sqrt{6 \\cdot 3 \\cdot 2 \\cdot 1} = \\sqrt{36} = 6$$

> ✅ A $3\\text{-}4\\text{-}5$ triangle is a right triangle, so we can check: $\\frac{1}{2}(3)(4) = 6$ ✓ — Heron's formula agrees.`,
      },
      {
        id: 'atq2-heron-dropdown',
        type: 'dropdown-select' as const,
        content: `**Heron Step-by-Step** 🔽

Use Heron's formula on a triangle with sides $a=9$, $b=10$, $c=11$.`,
        exercise: {
          dropdowns: [
            { label: 'Semiperimeter $s$:', options: ['$15$', '$30$', '$10$', '$45$'] },
            { label: 'The product $s(s-a)(s-b)(s-c)$:', options: ['$1800$', '$900$', '$3600$', '$150$'] },
            { label: 'Area (to 1 decimal):', options: ['$42.4$', '$45.0$', '$30.0$', '$60.0$'] },
          ],
          correctAnswers: ['$15$', '$1800$', '$42.4$'],
          hint1: '$s = \\frac{9+10+11}{2} = \\frac{30}{2} = 15$.',
          hint2: '$s-a=6$, $s-b=5$, $s-c=4$. So $15 \\cdot 6 \\cdot 5 \\cdot 4 = 1800$.',
          hint3: '$A = \\sqrt{1800} \\approx 42.4$.',
          explanation: '$s=15$; then $15(6)(5)(4)=1800$; $A=\\sqrt{1800}\\approx 42.4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'area-triangles-quadrilaterals',
    sections: [
      {
        id: 'atq3-intro',
        type: 'text' as const,
        content: `# 📐 Area of Triangles and Quadrilaterals

**Part 3 of 5 — Trapezoids, Rhombuses & Kites**

---

> 🔑 **The Idea:** The remaining quadrilaterals each have their own shortcut, but every one traces back to *triangles and rectangles* hiding inside.`,
      },
      {
        id: 'atq3-trapezoid',
        type: 'text' as const,
        content: `## Trapezoids: Average the Parallel Sides

A **trapezoid** has exactly **one pair of parallel sides**, called the **bases** $b_1$ and $b_2$. The **height** $h$ is the perpendicular distance between those two parallel bases.

$$A = \\frac{1}{2}\\,(b_1 + b_2)\\,h$$

In words: **average the two parallel sides, then multiply by the height.**

### Example

A trapezoid has parallel sides $6$ and $10$ and height $4$:

$$A = \\frac{1}{2}(6 + 10)(4) = \\frac{1}{2}(16)(4) = \\frac{1}{2}(64) = 32$$

> 💡 **Sanity check:** the average of $6$ and $10$ is $8$, and $8 \\cdot 4 = 32$. The trapezoid acts like a rectangle whose width is the *average* of the two bases.

> ⚠️ Only the two **parallel** sides go into $b_1 + b_2$. The slanted (non-parallel) legs are not used in the area formula.`,
      },
      {
        id: 'atq3-trap-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A trapezoid has parallel sides $8$ and $12$ and height $5$. Its area is:',
              options: ['$50$', '$100$', '$25$', '$480$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(8+12)(5) = \\frac{1}{2}(20)(5) = \\frac{1}{2}(100) = 50$.',
            },
            {
              question: 'Which lengths are averaged in the trapezoid area formula?',
              options: ['the two parallel sides', 'the two slanted legs', 'the two diagonals', 'all four sides'],
              correctAnswer: 0,
              explanation: 'You average the two **parallel** bases $b_1$ and $b_2$, then multiply by the perpendicular height.',
            },
          ],
        },
      },
      {
        id: 'atq3-rhombus-kite',
        type: 'text' as const,
        content: `## Rhombuses & Kites: Use the Diagonals

A **rhombus** (all four sides equal) and a **kite** (two pairs of adjacent equal sides) share a neat formula based on their **diagonals** $d_1$ and $d_2$:

$$A = \\frac{1}{2}\\,d_1\\,d_2$$

This works because the diagonals of both shapes are **perpendicular**, slicing the figure into right triangles that recombine into a rectangle of half the diagonal area.

### Example: a rhombus

A rhombus has diagonals $8$ and $6$:

$$A = \\frac{1}{2}(8)(6) = \\frac{1}{2}(48) = 24$$

### Example: a kite

A kite has diagonals $10$ and $7$:

$$A = \\frac{1}{2}(10)(7) = \\frac{1}{2}(70) = 35$$

> 🔑 A square is a special rhombus, so you can also use $\\frac{1}{2}d_1 d_2$ on a square. With diagonal $d$ (both equal): $A = \\frac{1}{2}d^2$.`,
      },
      {
        id: 'atq3-quad-drill',
        type: 'input-boxes' as const,
        content: `**Quadrilateral Practice** 🧮

Enter just the number.

**1)** Trapezoid: parallel sides $7$ and $13$, height $6$ → $A = \\,?$
**2)** Rhombus: diagonals $12$ and $5$ → $A = \\,?$
**3)** Kite: diagonals $9$ and $8$ → $A = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '30', '36'],
          hint1: 'Trapezoid: $\\frac{1}{2}(7+13)(6) = \\frac{1}{2}(20)(6)$.',
          hint2: 'Rhombus: $\\frac{1}{2}(12)(5) = \\frac{1}{2}(60)$.',
          hint3: 'Kite: $\\frac{1}{2}(9)(8) = \\frac{1}{2}(72)$.',
          explanation: '1) $\\frac{1}{2}(20)(6)=60$.  2) $\\frac{1}{2}(60)=30$.  3) $\\frac{1}{2}(72)=36$.',
        },
      },
      {
        id: 'atq3-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Formula** 🔽

Pick the correct area formula for each shape.`,
        exercise: {
          dropdowns: [
            { label: 'Trapezoid:', options: ['$\\frac{1}{2}(b_1+b_2)h$', '$\\frac{1}{2}d_1 d_2$', '$b \\cdot h$', '$\\frac{1}{2}bh$'] },
            { label: 'Rhombus or kite:', options: ['$\\frac{1}{2}d_1 d_2$', '$\\frac{1}{2}(b_1+b_2)h$', '$s^2$', '$b \\cdot h$'] },
            { label: 'Parallelogram:', options: ['$b \\cdot h$', '$\\frac{1}{2}bh$', '$\\frac{1}{2}d_1 d_2$', '$\\frac{1}{2}(b_1+b_2)h$'] },
          ],
          correctAnswers: ['$\\frac{1}{2}(b_1+b_2)h$', '$\\frac{1}{2}d_1 d_2$', '$b \\cdot h$'],
          hint1: 'Trapezoid averages the two parallel bases, then times height.',
          hint2: 'Rhombuses and kites use perpendicular diagonals: half their product.',
          hint3: 'A parallelogram is a slanted rectangle: base times perpendicular height.',
          explanation: 'Trapezoid $= \\frac{1}{2}(b_1+b_2)h$; rhombus/kite $= \\frac{1}{2}d_1 d_2$; parallelogram $= b \\cdot h$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'area-triangles-quadrilaterals',
    sections: [
      {
        id: 'atq4-intro',
        type: 'text' as const,
        content: `# 📐 Area of Triangles and Quadrilaterals

**Part 4 of 5 — Composite Figures & the Coordinate Plane**

---

> 🔑 **Big Idea:** Any complicated flat shape can be **broken into** triangles and quadrilaterals you already know. Find each piece, then **add** (or **subtract**) the areas.`,
      },
      {
        id: 'atq4-decompose',
        type: 'text' as const,
        content: `## Decomposing Composite Figures

A **composite figure** is built from simpler shapes. The strategy:

1. **Cut** the figure into rectangles, triangles, and trapezoids.
2. **Find** each piece's area separately.
3. **Add** them up (or **subtract** a piece that has been cut out).

### Example: an "L" shape

An L-shaped room is a $10 \\times 8$ rectangle with a $4 \\times 3$ rectangle removed from one corner.

$$A = (10 \\cdot 8) - (4 \\cdot 3) = 80 - 12 = 68$$

### Example: house pentagon (rectangle + triangle)

A "house" shape is a $6 \\times 4$ rectangle with a triangular roof of base $6$ and height $3$ on top:

$$A = \\underbrace{(6 \\cdot 4)}_{\\text{walls}} + \\underbrace{\\tfrac{1}{2}(6)(3)}_{\\text{roof}} = 24 + 9 = 33$$

> 💡 **Subtract** when a region is hollow or cut out; **add** when pieces sit side by side.`,
      },
      {
        id: 'atq4-composite-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A figure is a $9 \\times 6$ rectangle with a triangle (base $9$, height $4$) attached on top. Total area?',
              options: ['$72$', '$54$', '$108$', '$36$'],
              correctAnswer: 0,
              explanation: 'Rectangle $= 9 \\cdot 6 = 54$; triangle $= \\frac{1}{2}(9)(4) = 18$. Total $= 54 + 18 = 72$.',
            },
            {
              question: 'A $7 \\times 7$ square has a $2 \\times 3$ rectangle cut out of it. Remaining area?',
              options: ['$43$', '$49$', '$55$', '$6$'],
              correctAnswer: 0,
              explanation: 'Square $= 7^2 = 49$; cut-out $= 2 \\cdot 3 = 6$. Remaining $= 49 - 6 = 43$.',
            },
          ],
        },
      },
      {
        id: 'atq4-coordinate',
        type: 'text' as const,
        content: `## Area on the Coordinate Plane

When a shape sits on a grid, you can read **base** and **height** straight off the coordinates.

- A **horizontal** segment's length is the difference in $x$-values.
- A **vertical** segment's length is the difference in $y$-values.

### Example: a triangle with a horizontal base

A triangle has vertices $A(1, 2)$, $B(7, 2)$, and $C(4, 8)$.

The base $AB$ is horizontal: length $= 7 - 1 = 6$. The third vertex $C$ is at height $y = 8$, so the perpendicular height up from the base ($y = 2$) is $8 - 2 = 6$.

$$A = \\frac{1}{2}(6)(6) = 18$$

> 💡 Choosing a **horizontal or vertical** side as the base makes the height trivial — it is just a difference of coordinates, no distance formula needed.`,
      },
      {
        id: 'atq4-shoelace',
        type: 'text' as const,
        content: `## The Shoelace Formula (any polygon)

When no side is conveniently horizontal, the **shoelace formula** finds the area from the vertices directly. For a triangle with vertices $(x_1,y_1), (x_2,y_2), (x_3,y_3)$:

$$A = \\frac{1}{2}\\,\\bigl|\\,x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\\,\\bigr|$$

The bars $|\\;|$ mean **absolute value** — area is never negative.

### Example: vertices $(0,0)$, $(4,0)$, $(2,5)$

$$A = \\frac{1}{2}\\,\\bigl|\\,0(0 - 5) + 4(5 - 0) + 2(0 - 0)\\,\\bigr| = \\frac{1}{2}\\,|0 + 20 + 0| = \\frac{1}{2}(20) = 10$$

> ✅ **Check with base × height:** base from $(0,0)$ to $(4,0)$ is $4$; height up to $y=5$ is $5$. $\\frac{1}{2}(4)(5) = 10$ ✓.`,
      },
      {
        id: 'atq4-coord-drill',
        type: 'input-boxes' as const,
        content: `**Coordinate Practice** 🧮

Enter just the number.

**1)** Triangle with horizontal base from $(2,1)$ to $(10,1)$ and apex at $(5,7)$. Base length $= \\,?$
**2)** Same triangle: perpendicular height $= \\,?$
**3)** Same triangle: area $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '6', '24'],
          hint1: 'Base is horizontal: $10 - 2 = 8$.',
          hint2: 'Height is the rise from $y=1$ up to the apex at $y=7$: $7 - 1 = 6$.',
          hint3: '$A = \\frac{1}{2}(8)(6) = \\frac{1}{2}(48)$.',
          explanation: '1) base $= 10-2 = 8$.  2) height $= 7-1 = 6$.  3) $A = \\frac{1}{2}(8)(6) = 24$.',
        },
      },
      {
        id: 'atq4-shoelace-dropdown',
        type: 'dropdown-select' as const,
        content: `**Shoelace Step-by-Step** 🔽

Apply the shoelace formula to the triangle with vertices $(1,1)$, $(5,1)$, $(3,6)$.`,
        exercise: {
          dropdowns: [
            { label: 'The term $x_1(y_2 - y_3)$:', options: ['$-5$', '$5$', '$0$', '$-6$'] },
            { label: 'The term $x_2(y_3 - y_1)$:', options: ['$25$', '$5$', '$-25$', '$30$'] },
            { label: 'The area $\\frac{1}{2}\\,|\\,\\text{sum}\\,|$:', options: ['$10$', '$20$', '$5$', '$40$'] },
          ],
          correctAnswers: ['$-5$', '$25$', '$10$'],
          hint1: '$x_1(y_2-y_3) = 1(1-6) = -5$.',
          hint2: '$x_2(y_3-y_1) = 5(6-1) = 25$.',
          hint3: 'The third term $x_3(y_1-y_2) = 3(1-1) = 0$, so the sum is $-5 + 25 + 0 = 20$; $A = \\frac{1}{2}|20| = 10$.',
          explanation: 'Terms: $-5$, $25$, $0$. Sum $= 20$, so $A = \\frac{1}{2}|20| = 10$. (Check: base $4$, height $5$, $\\frac{1}{2}(4)(5)=10$ ✓.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'area-triangles-quadrilaterals',
    sections: [
      {
        id: 'atq5-intro',
        type: 'text' as const,
        content: `# 📐 Area of Triangles and Quadrilaterals

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now find the area of rectangles, squares, parallelograms, triangles (with a height *or* with Heron's formula), trapezoids, rhombuses, kites, composite figures, and shapes on a coordinate grid. Time to put it all together.`,
      },
      {
        id: 'atq5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Shape | Formula | Watch out for |
|-------|---------|---------------|
| Rectangle | $A = b \\cdot h$ | report in square units |
| Square | $A = s^2$ | $s = \\sqrt{A}$ to go backwards |
| Parallelogram | $A = b \\cdot h$ | $h$ = perpendicular height, not slant |
| Triangle | $A = \\frac{1}{2}bh$ | $h$ = perpendicular height |
| Triangle (3 sides) | $A = \\sqrt{s(s-a)(s-b)(s-c)}$ | $s = \\frac{a+b+c}{2}$ |
| Trapezoid | $A = \\frac{1}{2}(b_1+b_2)h$ | average the **parallel** sides |
| Rhombus / Kite | $A = \\frac{1}{2}d_1 d_2$ | use the **diagonals** |

> ⚠️ Two recurring traps: (1) using a **slanted side** instead of the perpendicular height, and (2) forgetting the **square** unit on your answer.`,
      },
      {
        id: 'atq5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A trapezoid has parallel sides $5$ and $11$ and height $4$. Its area is:',
              options: ['$32$', '$64$', '$16$', '$80$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}(5+11)(4) = \\frac{1}{2}(16)(4) = \\frac{1}{2}(64) = 32$.',
            },
            {
              question: 'A triangle has sides $a=13$, $b=14$, $c=15$. Using Heron’s formula, its area is:',
              options: ['$84$', '$42$', '$168$', '$90$'],
              correctAnswer: 0,
              explanation: '$s = \\frac{13+14+15}{2} = 21$. $A = \\sqrt{21(8)(7)(6)} = \\sqrt{7056} = 84$.',
            },
          ],
        },
      },
      {
        id: 'atq5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Numeric Practice** 🧮

Enter just the number.

**1)** Parallelogram: base $13$, perpendicular height $6$ → $A = \\,?$
**2)** Rhombus: diagonals $14$ and $10$ → $A = \\,?$
**3)** Composite: a $12 \\times 5$ rectangle with a triangle (base $12$, height $4$) on top → $A = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['78', '70', '84'],
          hint1: 'Parallelogram: $13 \\cdot 6$.',
          hint2: 'Rhombus: $\\frac{1}{2}(14)(10) = \\frac{1}{2}(140)$.',
          hint3: 'Rectangle $12 \\cdot 5 = 60$, triangle $\\frac{1}{2}(12)(4) = 24$, add them.',
          explanation: '1) $13 \\cdot 6 = 78$.  2) $\\frac{1}{2}(140) = 70$.  3) $60 + 24 = 84$.',
        },
      },
      {
        id: 'atq5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A parallelogram has base $9$, perpendicular height $4$, and a slanted side of $5$. Its area is:',
              options: ['$36$', '$45$', '$20$', '$18$'],
              correctAnswer: 0,
              explanation: 'Use the perpendicular height, not the slant: $A = b \\cdot h = 9 \\cdot 4 = 36$. The $5$ is a distractor.',
            },
            {
              question: 'A kite has diagonals $16$ and $6$. Its area is:',
              options: ['$48$', '$96$', '$22$', '$44$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}d_1 d_2 = \\frac{1}{2}(16)(6) = \\frac{1}{2}(96) = 48$.',
            },
            {
              question: 'A triangle has vertices $(0,0)$, $(6,0)$, and $(6,8)$. Its area is:',
              options: ['$24$', '$48$', '$14$', '$28$'],
              correctAnswer: 0,
              explanation: 'It is a right triangle with horizontal leg $6$ and vertical leg $8$: $A = \\frac{1}{2}(6)(8) = 24$.',
            },
          ],
        },
      },
    ],
  },
]
