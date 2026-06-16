import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Perimeter and Area (Pre-Algebra).
 * Registry key / DB Topic.slug: 'perimeter-and-area'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Pre-Algebra:
 * perimeter of polygons, circumference, area of rectangles/triangles/parallelograms/
 * trapezoids/circles, composite & real-world figures, units. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'perimeter-and-area',
    sections: [
      {
        id: 'pa1-intro',
        type: 'text' as const,
        content: `# 📐 Perimeter and Area

**Part 1 of 5 — Perimeter: The Distance Around**

---

### Topics in This Part

| Section |
|---------|
| What Perimeter Means |
| Perimeter of Rectangles & Squares |
| Perimeter of Any Polygon |

> 🔑 **Key Concept:** **Perimeter** is the total distance *around* a flat shape — imagine walking along every edge once. You find it by **adding up the lengths of all the sides**.`,
      },
      {
        id: 'pa1-what',
        type: 'text' as const,
        content: `## What Perimeter Means

If you put a fence around a yard or trim around a picture, you care about the **perimeter** — the length of the boundary.

To find it, **add every side**:

$$P = s_1 + s_2 + s_3 + \\cdots$$

### Example: A Triangle

A triangle has sides $5\\text{ cm}$, $7\\text{ cm}$, and $9\\text{ cm}$:

$$P = 5 + 7 + 9 = 21\\text{ cm}$$

> 💡 **Units matter.** Perimeter is a *length*, so the answer keeps the same unit as the sides — $\\text{cm}$, $\\text{m}$, $\\text{in}$, $\\text{ft}$ — never squared.`,
      },
      {
        id: 'pa1-rect',
        type: 'text' as const,
        content: `## Rectangles and Squares Have Shortcuts

A **rectangle** has two equal lengths $\\ell$ and two equal widths $w$, so instead of adding four numbers you can use:

$$P = 2\\ell + 2w \\quad\\text{or}\\quad P = 2(\\ell + w)$$

A **square** is a rectangle with all four sides equal to $s$:

$$P = 4s$$

| Shape | Sides | Formula | Example |
|-------|-------|---------|---------|
| Rectangle | $\\ell = 8,\\ w = 3$ | $2(\\ell+w)$ | $2(8+3)=22$ |
| Square | $s = 6$ | $4s$ | $4\\cdot 6 = 24$ |

> 🔑 The shortcuts and "add every side" give the **same answer** — the formulas just save time.`,
      },
      {
        id: 'pa1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the perimeter of a rectangle with length $10\\text{ m}$ and width $4\\text{ m}$?',
              options: ['$28\\text{ m}$', '$14\\text{ m}$', '$40\\text{ m}$', '$24\\text{ m}$'],
              correctAnswer: 0,
              explanation: '$P = 2(\\ell + w) = 2(10 + 4) = 2(14) = 28\\text{ m}$. (The $40$ is the *area*, not the perimeter.)',
            },
            {
              question: 'Perimeter is always measured in:',
              options: ['units (like cm or ft)', 'square units (like cm²)', 'cubic units (like cm³)', 'degrees'],
              correctAnswer: 0,
              explanation: 'Perimeter is a distance, so it uses plain length units. Square units are for area; cubic units are for volume.',
            },
          ],
        },
      },
      {
        id: 'pa1-drill',
        type: 'input-boxes' as const,
        content: `**Find the Perimeter** 🧮

Enter each perimeter (just the number — the unit is shown for you).

**1)** A square with side $7\\text{ cm}$: $P = \\,?\\ \\text{cm}$
**2)** A rectangle, $\\ell = 12\\text{ in}$, $w = 5\\text{ in}$: $P = \\,?\\ \\text{in}$
**3)** A triangle with sides $6$, $8$, $10\\text{ ft}$: $P = \\,?\\ \\text{ft}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['28', '34', '24'],
          hint1: 'Square: $P = 4s = 4 \\times 7$.',
          hint2: 'Rectangle: $P = 2(\\ell + w) = 2(12 + 5)$.',
          hint3: 'Triangle: just add all three sides, $6 + 8 + 10$.',
          explanation: '1) $4 \\times 7 = 28\\text{ cm}$.  2) $2(12+5) = 2(17) = 34\\text{ in}$.  3) $6+8+10 = 24\\text{ ft}$.',
        },
      },
      {
        id: 'pa1-missing',
        type: 'text' as const,
        content: `## Working Backward: A Missing Side

If you know the perimeter, you can find a missing side by **subtracting the sides you know**.

### Example

A rectangle has perimeter $30\\text{ m}$ and length $9\\text{ m}$. Find the width.

$$2(9) + 2w = 30 \\;\\Rightarrow\\; 18 + 2w = 30 \\;\\Rightarrow\\; 2w = 12 \\;\\Rightarrow\\; w = 6\\text{ m}$$

> 💡 Perimeter problems are really just **addition** (going forward) and **subtraction/division** (working backward). In Part 2 we tackle area — a different kind of measurement.`,
      },
      {
        id: 'pa1-backward',
        type: 'input-boxes' as const,
        content: `**Work Backward** 🧮

**1)** A square has perimeter $36\\text{ cm}$. How long is **one side**? $\\,?\\ \\text{cm}$
**2)** A rectangle has perimeter $26\\text{ in}$ and width $4\\text{ in}$. Find the **length**. $\\,?\\ \\text{in}$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['9', '9'],
          hint1: 'A square has 4 equal sides, so divide the perimeter by $4$: $36 \\div 4$.',
          hint2: '$2\\ell + 2(4) = 26 \\Rightarrow 2\\ell + 8 = 26 \\Rightarrow 2\\ell = 18$.',
          hint3: 'After $2\\ell = 18$, divide by $2$.',
          explanation: '1) $36 \\div 4 = 9\\text{ cm}$.  2) $2\\ell = 26 - 8 = 18$, so $\\ell = 9\\text{ in}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'perimeter-and-area',
    sections: [
      {
        id: 'pa2-intro',
        type: 'text' as const,
        content: `# 📐 Perimeter and Area

**Part 2 of 5 — Area of Rectangles, Squares & Parallelograms**

---

> 🔑 **The Idea:** **Area** measures the *space inside* a flat shape — how many unit squares fit. Because it covers a 2-D region, area is always in **square units** ($\\text{cm}^2$, $\\text{ft}^2$, …).`,
      },
      {
        id: 'pa2-rect',
        type: 'text' as const,
        content: `## Area of a Rectangle

Cover a rectangle with a grid of $1\\times 1$ squares. The number that fit is the area:

$$A = \\ell \\times w \\quad(\\text{length} \\times \\text{width})$$

### Example: $\\ell = 8\\text{ cm}$, $w = 3\\text{ cm}$

$$A = 8 \\times 3 = 24\\text{ cm}^2$$

A grid $8$ across and $3$ down holds exactly $24$ unit squares. ✓

A **square** is the special case $\\ell = w = s$:

$$A = s \\times s = s^2$$

> ⚠️ **Perimeter vs. Area — don't mix them up!** For that $8\\times 3$ rectangle, the perimeter is $22\\text{ cm}$ but the area is $24\\text{ cm}^2$. Perimeter is the *border*; area is the *inside*.`,
      },
      {
        id: 'pa2-pava',
        type: 'multiple-choice' as const,
        content: `**Perimeter or Area?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You want to know how much carpet is needed to cover a floor. You need the…',
              options: ['area', 'perimeter', 'circumference', 'diameter'],
              correctAnswer: 0,
              explanation: 'Carpet covers the *inside* of the floor, so you need the area (in square units).',
            },
            {
              question: 'Which answer could be an **area**?',
              options: ['$24\\text{ cm}^2$', '$24\\text{ cm}$', '$24\\text{ cm}^3$', '$24^\\circ$'],
              correctAnswer: 0,
              explanation: 'Area uses **square** units. Plain $\\text{cm}$ is length (perimeter), $\\text{cm}^3$ is volume, $^\\circ$ is an angle.',
            },
          ],
        },
      },
      {
        id: 'pa2-para',
        type: 'text' as const,
        content: `## Area of a Parallelogram

Slide a triangle from one end of a parallelogram to the other and it becomes a rectangle. So the area uses the **base** and the **perpendicular height** (the straight-up distance between the two parallel sides — *not* the slanted side):

$$A = b \\times h$$

### Example: $b = 10\\text{ m}$, $h = 4\\text{ m}$

$$A = 10 \\times 4 = 40\\text{ m}^2$$

> ⚠️ The height is always **perpendicular** to the base. If a problem gives you the slanted side length, that is *not* the height — use the vertical distance.`,
      },
      {
        id: 'pa2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Formula** 🔽

Match each shape to its area formula.`,
        exercise: {
          dropdowns: [
            { label: 'Rectangle:', options: ['$\\ell \\times w$', '$4s$', '$\\frac{1}{2}bh$', '$\\pi r^2$'] },
            { label: 'Square (side $s$):', options: ['$s^2$', '$2s$', '$s^3$', '$4s$'] },
            { label: 'Parallelogram:', options: ['$b \\times h$', '$2(b+h)$', '$\\frac{1}{2}bh$', '$b + h$'] },
          ],
          correctAnswers: ['$\\ell \\times w$', '$s^2$', '$b \\times h$'],
          hint1: 'Rectangle area is length times width.',
          hint2: 'A square has all sides $s$, so its area is $s \\times s$. ($4s$ is the *perimeter*.)',
          hint3: 'A parallelogram is a "leaned-over" rectangle: base times perpendicular height.',
          explanation: 'Rectangle $= \\ell w$, square $= s^2$, parallelogram $= bh$. Watch out: $4s$ and $2(b+h)$ are perimeters, not areas.',
        },
      },
      {
        id: 'pa2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Area** 🧮

Enter each area (the unit is shown).

**1)** Rectangle, $\\ell = 9\\text{ ft}$, $w = 5\\text{ ft}$: $A = \\,?\\ \\text{ft}^2$
**2)** Square, side $7\\text{ cm}$: $A = \\,?\\ \\text{cm}^2$
**3)** Parallelogram, base $12\\text{ m}$, height $6\\text{ m}$: $A = \\,?\\ \\text{m}^2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['45', '49', '72'],
          hint1: 'Rectangle: $A = \\ell \\times w = 9 \\times 5$.',
          hint2: 'Square: $A = s^2 = 7 \\times 7$.',
          hint3: 'Parallelogram: $A = b \\times h = 12 \\times 6$ (use the perpendicular height).',
          explanation: '1) $9 \\times 5 = 45\\text{ ft}^2$.  2) $7^2 = 49\\text{ cm}^2$.  3) $12 \\times 6 = 72\\text{ m}^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'perimeter-and-area',
    sections: [
      {
        id: 'pa3-intro',
        type: 'text' as const,
        content: `# 📐 Perimeter and Area

**Part 3 of 5 — Triangles & Trapezoids**

---

> 🔑 **Why the halves?** A **triangle** is half of a rectangle (or parallelogram). A **trapezoid** averages its two parallel sides. Both formulas have a $\\dfrac{1}{2}$ for exactly this reason.`,
      },
      {
        id: 'pa3-tri',
        type: 'text' as const,
        content: `## Area of a Triangle

Put two copies of a triangle together and you get a parallelogram with the same base and height. So a triangle is **half**:

$$A = \\frac{1}{2}\\, b \\, h$$

The **height** is the perpendicular distance from the base to the opposite corner.

### Example: $b = 10\\text{ cm}$, $h = 6\\text{ cm}$

$$A = \\frac{1}{2}(10)(6) = \\frac{1}{2}(60) = 30\\text{ cm}^2$$

> 💡 **Tip:** Multiply $b \\times h$ first, *then* take half. $10 \\times 6 = 60$, half of $60$ is $30$.`,
      },
      {
        id: 'pa3-tri-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has base $8\\text{ m}$ and height $5\\text{ m}$. Its area is:',
              options: ['$20\\text{ m}^2$', '$40\\text{ m}^2$', '$13\\text{ m}^2$', '$26\\text{ m}^2$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}bh = \\frac{1}{2}(8)(5) = \\frac{1}{2}(40) = 20\\text{ m}^2$. (Forgetting the $\\frac{1}{2}$ gives the wrong answer $40$.)',
            },
            {
              question: 'In the triangle area formula, the height $h$ must be:',
              options: ['perpendicular to the base', 'the longest side', 'equal to the base', 'the slanted side'],
              correctAnswer: 0,
              explanation: 'Height is always the perpendicular (straight-up) distance from the base to the opposite vertex.',
            },
          ],
        },
      },
      {
        id: 'pa3-trap',
        type: 'text' as const,
        content: `## Area of a Trapezoid

A **trapezoid** has two parallel sides — call them $b_1$ and $b_2$. You **average** them and multiply by the height:

$$A = \\frac{1}{2}\\,(b_1 + b_2)\\,h$$

### Example: $b_1 = 6\\text{ in}$, $b_2 = 10\\text{ in}$, $h = 4\\text{ in}$

$$A = \\frac{1}{2}(6 + 10)(4) = \\frac{1}{2}(16)(4) = \\frac{1}{2}(64) = 32\\text{ in}^2$$

| Step | Work |
|------|------|
| Add the parallel sides | $6 + 10 = 16$ |
| Multiply by height | $16 \\times 4 = 64$ |
| Take half | $\\tfrac{1}{2}\\times 64 = 32$ |

> 🔑 If the two parallel sides were equal, a trapezoid would just be a parallelogram — and the formula would collapse back to $b \\times h$.`,
      },
      {
        id: 'pa3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Trapezoid, Step by Step** 🔽

Find the area of a trapezoid with $b_1 = 5\\text{ cm}$, $b_2 = 9\\text{ cm}$, height $6\\text{ cm}$.`,
        exercise: {
          dropdowns: [
            { label: 'First, add the parallel sides:', options: ['$5 + 9 = 14$', '$5 \\times 9 = 45$', '$9 - 5 = 4$', '$5 + 6 = 11$'] },
            { label: 'Multiply that sum by the height:', options: ['$14 \\times 6 = 84$', '$14 \\times 5 = 70$', '$14 + 6 = 20$', '$14 \\times 9 = 126$'] },
            { label: 'Finally, take half:', options: ['$42\\text{ cm}^2$', '$84\\text{ cm}^2$', '$21\\text{ cm}^2$', '$48\\text{ cm}^2$'] },
          ],
          correctAnswers: ['$5 + 9 = 14$', '$14 \\times 6 = 84$', '$42\\text{ cm}^2$'],
          hint1: 'The parallel sides are $b_1 = 5$ and $b_2 = 9$; add them.',
          hint2: 'Multiply the sum $14$ by the height $6$.',
          hint3: '$A = \\frac{1}{2}(84) = 42\\text{ cm}^2$.',
          explanation: '$A = \\frac{1}{2}(5+9)(6) = \\frac{1}{2}(14)(6) = \\frac{1}{2}(84) = 42\\text{ cm}^2$.',
        },
      },
      {
        id: 'pa3-drill',
        type: 'input-boxes' as const,
        content: `**Triangles & Trapezoids** 🧮

Enter each area.

**1)** Triangle, base $14\\text{ ft}$, height $9\\text{ ft}$: $A = \\,?\\ \\text{ft}^2$
**2)** Triangle, base $7\\text{ cm}$, height $4\\text{ cm}$: $A = \\,?\\ \\text{cm}^2$
**3)** Trapezoid, $b_1 = 8\\text{ m}$, $b_2 = 12\\text{ m}$, height $5\\text{ m}$: $A = \\,?\\ \\text{m}^2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['63', '14', '50'],
          hint1: 'Triangle: $\\frac{1}{2}(14)(9) = \\frac{1}{2}(126)$.',
          hint2: 'Triangle: $\\frac{1}{2}(7)(4) = \\frac{1}{2}(28)$.',
          hint3: 'Trapezoid: $\\frac{1}{2}(8+12)(5) = \\frac{1}{2}(20)(5) = \\frac{1}{2}(100)$.',
          explanation: '1) $\\frac{1}{2}(126) = 63\\text{ ft}^2$.  2) $\\frac{1}{2}(28) = 14\\text{ cm}^2$.  3) $\\frac{1}{2}(20)(5) = \\frac{1}{2}(100) = 50\\text{ m}^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'perimeter-and-area',
    sections: [
      {
        id: 'pa4-intro',
        type: 'text' as const,
        content: `# 📐 Perimeter and Area

**Part 4 of 5 — Circles: Circumference & Area**

---

> 🔑 **The star of circles is $\\pi$** (pi), about $3.14$. It's the number you get when you divide *any* circle's distance-around by its diameter — it never changes.`,
      },
      {
        id: 'pa4-parts',
        type: 'text' as const,
        content: `## Radius, Diameter & $\\pi$

- The **radius** $r$ reaches from the center to the edge.
- The **diameter** $d$ stretches all the way across, through the center.
- They're related by $d = 2r$ (the diameter is two radii).

The distance around a circle has a special name — **circumference** — and two equivalent formulas:

$$C = 2\\pi r \\qquad\\text{or}\\qquad C = \\pi d$$

### Example: radius $5\\text{ cm}$ (use $\\pi \\approx 3.14$)

$$C = 2\\pi r = 2(3.14)(5) = 31.4\\text{ cm}$$

> 💡 If you're given the **diameter**, $C = \\pi d$ is faster. If you're given the **radius**, use $C = 2\\pi r$.`,
      },
      {
        id: 'pa4-circ-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has radius $10\\text{ m}$. Its diameter is:',
              options: ['$20\\text{ m}$', '$5\\text{ m}$', '$10\\text{ m}$', '$31.4\\text{ m}$'],
              correctAnswer: 0,
              explanation: 'The diameter is twice the radius: $d = 2r = 2(10) = 20\\text{ m}$.',
            },
            {
              question: 'Which formula gives the **circumference** (distance around) of a circle?',
              options: ['$C = \\pi d$', '$A = \\pi r^2$', '$C = \\pi r^2$', '$A = 2\\pi r$'],
              correctAnswer: 0,
              explanation: '$C = \\pi d$ (equivalently $2\\pi r$) is circumference. $A = \\pi r^2$ is the *area* — note it squares the radius.',
            },
          ],
        },
      },
      {
        id: 'pa4-area',
        type: 'text' as const,
        content: `## Area of a Circle

The space inside a circle uses the **radius squared**:

$$A = \\pi r^2$$

### Example: radius $5\\text{ cm}$ (use $\\pi \\approx 3.14$)

$$A = \\pi r^2 = 3.14 \\times 5^2 = 3.14 \\times 25 = 78.5\\text{ cm}^2$$

> ⚠️ **Square the radius first, *then* multiply by $\\pi$.** $r^2$ means $r \\times r$, so $5^2 = 25$ — *not* $5 \\times 2 = 10$. And if you're given the diameter, cut it in half to get $r$ before using this formula.`,
      },
      {
        id: 'pa4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Circle Quantities** 🔽

A circle has **diameter $12\\text{ in}$**. Use $\\pi \\approx 3.14$.`,
        exercise: {
          dropdowns: [
            { label: 'The radius is:', options: ['$6\\text{ in}$', '$12\\text{ in}$', '$24\\text{ in}$', '$3\\text{ in}$'] },
            { label: 'The circumference $C = \\pi d$ is:', options: ['$37.68\\text{ in}$', '$18.84\\text{ in}$', '$75.36\\text{ in}$', '$12\\text{ in}$'] },
            { label: 'The area $A = \\pi r^2$ is:', options: ['$113.04\\text{ in}^2$', '$37.68\\text{ in}^2$', '$452.16\\text{ in}^2$', '$18.84\\text{ in}^2$'] },
          ],
          correctAnswers: ['$6\\text{ in}$', '$37.68\\text{ in}$', '$113.04\\text{ in}^2$'],
          hint1: 'Radius is half the diameter: $12 \\div 2$.',
          hint2: '$C = \\pi d = 3.14 \\times 12$.',
          hint3: '$A = \\pi r^2 = 3.14 \\times 6^2 = 3.14 \\times 36$.',
          explanation: 'Radius $= 6\\text{ in}$. $C = 3.14 \\times 12 = 37.68\\text{ in}$. $A = 3.14 \\times 36 = 113.04\\text{ in}^2$.',
        },
      },
      {
        id: 'pa4-drill',
        type: 'input-boxes' as const,
        content: `**Circle Practice** 🧮

Use $\\pi \\approx 3.14$. Enter each value as a decimal.

**1)** Circumference of a circle with radius $3\\text{ cm}$ ($C = 2\\pi r$): $\\,?\\ \\text{cm}$
**2)** Area of a circle with radius $3\\text{ cm}$ ($A = \\pi r^2$): $\\,?\\ \\text{cm}^2$
**3)** Area of a circle with radius $10\\text{ m}$: $\\,?\\ \\text{m}^2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18.84', '28.26', '314'],
          hint1: '$C = 2 \\times 3.14 \\times 3$.',
          hint2: '$A = 3.14 \\times 3^2 = 3.14 \\times 9$.',
          hint3: '$A = 3.14 \\times 10^2 = 3.14 \\times 100$.',
          explanation: '1) $2(3.14)(3) = 18.84\\text{ cm}$.  2) $3.14 \\times 9 = 28.26\\text{ cm}^2$.  3) $3.14 \\times 100 = 314\\text{ m}^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'perimeter-and-area',
    sections: [
      {
        id: 'pa5-intro',
        type: 'text' as const,
        content: `# 📐 Perimeter and Area

**Part 5 of 5 — Composite Figures, Real-World Problems & Mastery Check**

---

You now have every basic formula. Real problems often combine shapes or ask "how much fencing / how much paint?" — let's put it all together.`,
      },
      {
        id: 'pa5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Shape | Perimeter / Circumference | Area |
|-------|---------------------------|------|
| Rectangle | $2(\\ell + w)$ | $\\ell \\times w$ |
| Square | $4s$ | $s^2$ |
| Triangle | sum of 3 sides | $\\frac{1}{2}bh$ |
| Parallelogram | sum of all sides | $b \\times h$ |
| Trapezoid | sum of all sides | $\\frac{1}{2}(b_1 + b_2)h$ |
| Circle | $C = 2\\pi r = \\pi d$ | $\\pi r^2$ |

> ⚠️ **Remember the units:** perimeter/circumference use plain units; area uses **square** units. And in $\\frac{1}{2}bh$ or $\\pi r^2$, always do the multiplication/squaring *before* the $\\frac{1}{2}$ or before adding $\\pi$.`,
      },
      {
        id: 'pa5-composite',
        type: 'text' as const,
        content: `## Composite Figures: Split, Then Add

A **composite figure** is made of simpler shapes glued together. To find its area, **break it into pieces, find each area, and add**.

### Example: An "L" shape

Picture a $10\\times 6$ rectangle with a $4\\times 3$ rectangle removed from one corner. You can either subtract, or split into two rectangles. Subtracting:

$$A = (10 \\times 6) - (4 \\times 3) = 60 - 12 = 48\\text{ units}^2$$

> 💡 **Two strategies:** *Split-and-add* (cut the figure into shapes you know) or *subtract* (start with a big rectangle and remove the missing chunk). Both give the same area — pick whichever is easier to see.`,
      },
      {
        id: 'pa5-realworld',
        type: 'multiple-choice' as const,
        content: `**Real-World Problems** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangular garden is $12\\text{ ft}$ by $8\\text{ ft}$. How much **fencing** is needed to enclose it?',
              options: ['$40\\text{ ft}$', '$96\\text{ ft}$', '$20\\text{ ft}$', '$48\\text{ ft}$'],
              correctAnswer: 0,
              explanation: 'Fencing goes *around* the garden → perimeter. $P = 2(12 + 8) = 2(20) = 40\\text{ ft}$. ($96$ is the area.)',
            },
            {
              question: 'A wall is $9\\text{ ft}$ wide and $8\\text{ ft}$ tall. How much **paint** (by area) is needed to cover it?',
              options: ['$72\\text{ ft}^2$', '$34\\text{ ft}^2$', '$17\\text{ ft}^2$', '$72\\text{ ft}$'],
              correctAnswer: 0,
              explanation: 'Paint covers the *surface* → area. $A = \\ell \\times w = 9 \\times 8 = 72\\text{ ft}^2$ (square units).',
            },
          ],
        },
      },
      {
        id: 'pa5-composite-drill',
        type: 'input-boxes' as const,
        content: `**Composite & Applications** 🧮

**1)** An L-shape: a $10\\text{ m} \\times 7\\text{ m}$ rectangle with a $3\\text{ m} \\times 2\\text{ m}$ rectangle cut out. Total area $= \\,?\\ \\text{m}^2$
**2)** A room floor is $15\\text{ ft} \\times 10\\text{ ft}$. How many square feet of tile cover it? $\\,?\\ \\text{ft}^2$
**3)** A square photo has side $6\\text{ in}$. How much frame trim goes around it (perimeter)? $\\,?\\ \\text{in}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['64', '150', '24'],
          hint1: 'Big rectangle minus the cut-out: $(10 \\times 7) - (3 \\times 2)$.',
          hint2: 'Tile covers the floor → area $= 15 \\times 10$.',
          hint3: 'Trim goes around → perimeter of a square $= 4 \\times 6$.',
          explanation: '1) $70 - 6 = 64\\text{ m}^2$.  2) $15 \\times 10 = 150\\text{ ft}^2$.  3) $4 \\times 6 = 24\\text{ in}$.',
        },
      },
      {
        id: 'pa5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the area of a triangle with base $12\\text{ cm}$ and height $5\\text{ cm}$?',
              options: ['$30\\text{ cm}^2$', '$60\\text{ cm}^2$', '$17\\text{ cm}^2$', '$34\\text{ cm}^2$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}bh = \\frac{1}{2}(12)(5) = \\frac{1}{2}(60) = 30\\text{ cm}^2$.',
            },
            {
              question: 'A circle has radius $4\\text{ m}$. Using $\\pi \\approx 3.14$, its area is:',
              options: ['$50.24\\text{ m}^2$', '$25.12\\text{ m}^2$', '$12.56\\text{ m}^2$', '$16\\text{ m}^2$'],
              correctAnswer: 0,
              explanation: '$A = \\pi r^2 = 3.14 \\times 4^2 = 3.14 \\times 16 = 50.24\\text{ m}^2$. (The $25.12$ is the *circumference*, $2\\pi r$.)',
            },
            {
              question: 'Which task requires finding a **perimeter** rather than an area?',
              options: ['Putting a ribbon border around a bulletin board', 'Painting the bulletin board', 'Tiling a floor', 'Filling a pool with water'],
              correctAnswer: 0,
              explanation: 'A border goes *around* the edge → perimeter. Painting and tiling are areas; filling a pool is volume.',
            },
          ],
        },
      },
    ],
  },
]
