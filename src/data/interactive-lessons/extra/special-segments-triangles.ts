import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Special Segments in Triangles (Geometry).
 * Registry key: 'special-segments-triangles' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'special-segments-triangles',
    sections: [
      {
        id: 'sst1-intro',
        type: 'text' as const,
        content: `# 📐 Special Segments in Triangles

**Part 1 of 5 — Perpendicular Bisectors & the Circumcenter**

---

### Topics in This Part

| Section |
|---------|
| What Is a Perpendicular Bisector? |
| The Equidistance Property |
| Where They Meet: the Circumcenter |

> 🔑 **Key Concept:** Every triangle has four famous "centers," each built from a different special segment. We start with the **perpendicular bisector**, whose meeting point — the **circumcenter** — is the center of the circle that passes through all three vertices.`,
      },
      {
        id: 'sst1-perpbisector',
        type: 'text' as const,
        content: `## What Is a Perpendicular Bisector?

A **perpendicular bisector** of a segment is a line that does two things at once:

- It passes through the **midpoint** of the segment (it *bisects* it).
- It meets the segment at a **right angle** (it is *perpendicular*, $90°$).

In a triangle, you can draw the perpendicular bisector of **each side**. Notice the key difference from other segments: a side's perpendicular bisector does **not** have to pass through any vertex — it is built entirely from the side itself.

### The Equidistance Property

$$\\text{If } P \\text{ is on the perpendicular bisector of } \\overline{XY}, \\text{ then } PX = PY.$$

This works in reverse too: any point equidistant from $X$ and $Y$ must lie on the perpendicular bisector of $\\overline{XY}$.

| Statement | Conclusion |
|-----------|------------|
| $P$ is on the $\\perp$ bisector of $\\overline{XY}$ | $PX = PY$ |
| $PX = PY$ | $P$ is on the $\\perp$ bisector of $\\overline{XY}$ |

> 🔑 **Memory hook:** *Perpendicular bisector = equal distance to the two endpoints.*`,
      },
      {
        id: 'sst1-equidist-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Point $P$ lies on the perpendicular bisector of $\\overline{XY}$. Which statement must be true?',
              options: ['$PX = PY$', '$PX = XY$', '$P$ is the midpoint of $\\overline{XY}$', '$\\angle XPY = 90°$'],
              correctAnswer: 0,
              explanation: 'Any point on the perpendicular bisector of a segment is equidistant from its two endpoints, so $PX = PY$. $P$ need not be the midpoint, and there is no required $90°$ angle at $P$.',
            },
            {
              question: 'A perpendicular bisector of a triangle’s side always passes through the side’s ____ and meets it at a ____ angle.',
              options: ['midpoint; right', 'vertex; right', 'midpoint; acute', 'vertex; straight'],
              correctAnswer: 0,
              explanation: 'By definition it passes through the midpoint (bisects) and meets the side at a $90°$ right angle (perpendicular). It need not touch a vertex.',
            },
          ],
        },
      },
      {
        id: 'sst1-equidist-drill',
        type: 'input-boxes' as const,
        content: `**Use the Equidistance Property** 🧮

Point $P$ lies on the perpendicular bisector of $\\overline{XY}$, so $PX = PY$.

**1)** If $PX = 3x - 7$ and $PY = x + 5$, solve for $x$.
**2)** Using that $x$, find the length $PX$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '11'],
          hint1: 'Set the two distances equal: $3x - 7 = x + 5$.',
          hint2: 'Subtract $x$ from both sides: $2x - 7 = 5$, then $2x = 12$.',
          hint3: 'Once $x = 6$, plug into $PX = 3x - 7 = 3(6) - 7$.',
          explanation: '$3x - 7 = x + 5 \\Rightarrow 2x = 12 \\Rightarrow x = 6$. Then $PX = 3(6) - 7 = 11$ (and $PY = 6 + 5 = 11$ ✓).',
        },
      },
      {
        id: 'sst1-circumcenter',
        type: 'text' as const,
        content: `## Where They Meet: the Circumcenter

When you draw all **three** perpendicular bisectors of a triangle, a remarkable thing happens — they all cross at a **single point**. Three or more lines through one point are called **concurrent**, and this particular meeting point is the **circumcenter**, usually labeled $O$.

$$\\text{Three perpendicular bisectors} \\;\\Longrightarrow\\; \\text{concurrent at the circumcenter } O.$$

Because $O$ lies on the perpendicular bisector of *every* side, it is equidistant from all three **vertices**:

$$OA = OB = OC = R$$

That common distance $R$ is the radius of the **circumscribed circle** — the unique circle passing through all three vertices. The circumcenter is its center.

| Triangle type | Circumcenter location |
|---------------|-----------------------|
| Acute | **inside** the triangle |
| Right | exactly on the **hypotenuse** (its midpoint) |
| Obtuse | **outside** the triangle |

> 💡 The right-triangle case is worth memorizing: the circumcenter sits at the **midpoint of the hypotenuse**, so the hypotenuse is a diameter of the circumscribed circle.`,
      },
      {
        id: 'sst1-circum-drill',
        type: 'input-boxes' as const,
        content: `**The Right-Triangle Circumcenter** 🧮

A right triangle has vertices $A(0,0)$, $B(6,0)$, and $C(0,8)$, with the right angle at $A$. The hypotenuse is $\\overline{BC}$.

**1)** The circumcenter is the midpoint of the hypotenuse. Find its $x$-coordinate.
**2)** Find its $y$-coordinate.
**3)** The circumradius $R$ equals half the hypotenuse. The hypotenuse $BC = 10$, so $R = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '5'],
          hint1: 'Midpoint of $\\overline{BC}$ is $\\left(\\frac{6+0}{2}, \\frac{0+8}{2}\\right)$.',
          hint2: 'That gives $x = 3$ and $y = 4$.',
          hint3: 'The circumradius is half the hypotenuse: $R = \\frac{10}{2}$.',
          explanation: 'Circumcenter $= \\left(\\frac{6+0}{2}, \\frac{0+8}{2}\\right) = (3, 4)$. Since the hypotenuse is a diameter, $R = \\frac{BC}{2} = \\frac{10}{2} = 5$. Check: the distance from $(3,4)$ to each vertex is $5$. ✓',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'special-segments-triangles',
    sections: [
      {
        id: 'sst2-intro',
        type: 'text' as const,
        content: `# 📐 Special Segments in Triangles

**Part 2 of 5 — Angle Bisectors & the Incenter**

---

> 🔑 **The Idea:** Swap "equidistant from vertices" for "equidistant from sides." An **angle bisector** cuts an angle into two equal halves, and the point where all three meet — the **incenter** — is the same distance from every side.`,
      },
      {
        id: 'sst2-anglebisector',
        type: 'text' as const,
        content: `## What an Angle Bisector Does

An **angle bisector** of a triangle starts at a **vertex** and splits that vertex's angle into two congruent angles. Unlike a perpendicular bisector, it *always* passes through a vertex.

### The Equidistance Property (sides version)

$$\\text{If } P \\text{ is on the bisector of } \\angle A, \\text{ then } P \\text{ is equidistant from the two sides of } \\angle A.$$

Here "distance to a side" means the **perpendicular** distance — the shortest segment from the point to the line of the side.

| Special segment | Equidistant from… |
|-----------------|-------------------|
| Perpendicular bisector | the two **endpoints** (vertices) |
| Angle bisector | the two **sides** |

> 🔑 **Contrast:** perpendicular bisectors care about **vertices**; angle bisectors care about **sides**. This single distinction drives everything in Parts 1 and 2.`,
      },
      {
        id: 'sst2-bisector-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Ray $AD$ bisects $\\angle BAC$, and $m\\angle BAC = 70°$. What is $m\\angle BAD$?',
              options: ['$35°$', '$70°$', '$140°$', '$20°$'],
              correctAnswer: 0,
              explanation: 'A bisector splits the angle into two equal halves: $m\\angle BAD = \\frac{70°}{2} = 35°$.',
            },
            {
              question: 'A point on the bisector of $\\angle A$ is equidistant from which two objects?',
              options: ['the two sides forming $\\angle A$', 'the two endpoints of the opposite side', 'all three vertices', 'the midpoints of the sides'],
              correctAnswer: 0,
              explanation: 'An angle bisector consists of all points equidistant (perpendicular distance) from the two sides that form the angle. Equidistance from vertices is the perpendicular-bisector property instead.',
            },
          ],
        },
      },
      {
        id: 'sst2-incenter',
        type: 'text' as const,
        content: `## Where They Meet: the Incenter

The three **angle bisectors** of a triangle are also concurrent. Their meeting point is the **incenter**, labeled $I$.

Because $I$ lies on every angle bisector, it is equidistant from all three **sides**. That common perpendicular distance is the **inradius** $r$ — the radius of the **inscribed circle**, the largest circle that fits *inside* the triangle and touches all three sides.

$$\\text{distance from } I \\text{ to each side} = r.$$

> 💡 The incenter is **always inside** the triangle — every triangle, no exceptions. (Compare this to the circumcenter, which can fall outside.)

For a right triangle with legs $a$, $b$ and hypotenuse $c$, the inradius has a clean formula:

$$r = \\frac{a + b - c}{2}.$$`,
      },
      {
        id: 'sst2-incenter-dropdown',
        type: 'dropdown-select' as const,
        content: `**Vertices vs. Sides** 🔽

Match each special point to what it is equidistant from and where it lives.`,
        exercise: {
          dropdowns: [
            { label: 'The circumcenter is equidistant from the three…', options: ['vertices', 'sides', 'midpoints', 'altitudes'] },
            { label: 'The incenter is equidistant from the three…', options: ['sides', 'vertices', 'medians', 'angles'] },
            { label: 'The incenter is always located…', options: ['inside the triangle', 'outside the triangle', 'on the longest side', 'at a vertex'] },
          ],
          correctAnswers: ['vertices', 'sides', 'inside the triangle'],
          hint1: 'Perpendicular bisectors → vertices; angle bisectors → sides.',
          hint2: 'The circle through the vertices is *circum*scribed; the circle touching the sides is *in*scribed.',
          hint3: 'The inscribed circle must fit inside, so its center can never escape the triangle.',
          explanation: 'Circumcenter ↔ equidistant from vertices (circumscribed circle). Incenter ↔ equidistant from sides (inscribed circle) and is always interior.',
        },
      },
      {
        id: 'sst2-inradius-drill',
        type: 'input-boxes' as const,
        content: `**Find the Inradius** 🧮

Use $r = \\dfrac{a + b - c}{2}$ for a right triangle with legs $a, b$ and hypotenuse $c$.

**1)** Legs $6$ and $8$, hypotenuse $10$. Find $r$.
**2)** Legs $3$ and $4$, hypotenuse $5$. Find $r$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '1'],
          hint1: 'Add the two legs, subtract the hypotenuse, divide by $2$.',
          hint2: 'First: $\\frac{6 + 8 - 10}{2} = \\frac{4}{2}$.',
          hint3: 'Second: $\\frac{3 + 4 - 5}{2} = \\frac{2}{2}$.',
          explanation: '1) $r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2$.  2) $r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1$. The inscribed circle of the classic $3$-$4$-$5$ triangle has radius $1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'special-segments-triangles',
    sections: [
      {
        id: 'sst3-intro',
        type: 'text' as const,
        content: `# 📐 Special Segments in Triangles

**Part 3 of 5 — Medians & the Centroid**

---

> 🔑 **Why it matters:** The **median** leads to the most physically intuitive center of all — the **centroid**, the triangle's balance point (center of mass). It also comes with the single most-tested number in this whole topic: the **$2:1$ ratio**.`,
      },
      {
        id: 'sst3-median',
        type: 'text' as const,
        content: `## What Is a Median?

A **median** of a triangle is a segment from a **vertex** to the **midpoint of the opposite side**. Every triangle has exactly three medians, one from each vertex.

The three medians are concurrent at the **centroid**, labeled $G$. Two facts make the centroid special:

1. **It is always inside the triangle** (like the incenter).
2. **It is the balance point** — if the triangle were a thin uniform sheet, it would balance perfectly on a pin placed at $G$.

> 🔑 **The $2:1$ Ratio:** The centroid divides each median so that the piece from the **vertex** to $G$ is **twice** the piece from $G$ to the **midpoint**.

$$VG : GM = 2 : 1$$

So measuring from the vertex, the centroid is $\\dfrac{2}{3}$ of the way down each median, and the remaining $\\dfrac{1}{3}$ runs from $G$ to the midpoint.`,
      },
      {
        id: 'sst3-ratio-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a triangle, the centroid divides each median in what ratio, measured from the vertex to the centroid versus the centroid to the midpoint?',
              options: ['$2 : 1$', '$1 : 2$', '$1 : 1$', '$3 : 1$'],
              correctAnswer: 0,
              explanation: 'The vertex-to-centroid piece is twice the centroid-to-midpoint piece, so the ratio is $2 : 1$. The centroid is $\\frac{2}{3}$ of the way from each vertex.',
            },
            {
              question: 'A median connects a vertex to the ____ of the opposite side.',
              options: ['midpoint', 'farther endpoint', 'closer endpoint', 'foot of the altitude'],
              correctAnswer: 0,
              explanation: 'By definition a median runs from a vertex to the midpoint of the opposite side. (The foot of the altitude is generally a different point.)',
            },
          ],
        },
      },
      {
        id: 'sst3-worked',
        type: 'text' as const,
        content: `## Worked Examples with the $2:1$ Ratio

Let median $\\overline{AM}$ run from vertex $A$ to midpoint $M$, with centroid $G$ on it.

### Example 1 — Given the whole median
If the full median $AM = 18$, then the vertex piece is $\\frac{2}{3}$ and the midpoint piece is $\\frac{1}{3}$:

$$AG = \\tfrac{2}{3}(18) = 12, \\qquad GM = \\tfrac{1}{3}(18) = 6.$$

Check: $12 : 6 = 2 : 1$ ✓ and $12 + 6 = 18$ ✓.

### Example 2 — Given the short piece
If $GM = 4$ (centroid to midpoint), then the vertex piece is **twice** that:

$$AG = 2 \\cdot GM = 2(4) = 8, \\qquad AM = AG + GM = 8 + 4 = 12.$$

### Example 3 — Given the long piece
If $AG = 10$ (vertex to centroid), then the short piece is **half** that:

$$GM = \\tfrac{1}{2}(AG) = 5, \\qquad AM = 10 + 5 = 15.$$

> ⚠️ **Watch the direction.** Going vertex → midpoint, you *multiply by $\\frac{1}{2}$ then add*. The bigger piece is always the one touching the **vertex**.`,
      },
      {
        id: 'sst3-centroid-drill',
        type: 'input-boxes' as const,
        content: `**Apply the $2:1$ Ratio** 🧮

Median $\\overline{AM}$ has centroid $G$, so $AG : GM = 2 : 1$.

**1)** If $AG = 14$, find $GM$.
**2)** If $GM = 7$, find $AG$.
**3)** If the whole median $AM = 21$, find $AG$ (the vertex-to-centroid piece).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '14', '14'],
          hint1: 'The short piece is half the long piece: $GM = \\frac{1}{2}AG$.',
          hint2: 'The long piece is twice the short piece: $AG = 2 \\cdot GM$.',
          hint3: 'The vertex piece is $\\frac{2}{3}$ of the whole: $AG = \\frac{2}{3}(21)$.',
          explanation: '1) $GM = \\frac{1}{2}(14) = 7$.  2) $AG = 2(7) = 14$.  3) $AG = \\frac{2}{3}(21) = 14$.',
        },
      },
      {
        id: 'sst3-coord-drill',
        type: 'input-boxes' as const,
        content: `**Centroid from Coordinates** 🧮

The centroid is the **average** of the three vertices:

$$G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\; \\frac{y_1 + y_2 + y_3}{3}\\right).$$

A triangle has vertices $(2, 4)$, $(6, 2)$, and $(4, 9)$.

**1)** Find the centroid's $x$-coordinate.
**2)** Find the centroid's $y$-coordinate.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '5'],
          hint1: 'Average the three $x$-values: $\\frac{2 + 6 + 4}{3}$.',
          hint2: 'Average the three $y$-values: $\\frac{4 + 2 + 9}{3}$.',
          hint3: '$\\frac{12}{3} = 4$ and $\\frac{15}{3} = 5$.',
          explanation: '$G = \\left(\\frac{2+6+4}{3}, \\frac{4+2+9}{3}\\right) = \\left(\\frac{12}{3}, \\frac{15}{3}\\right) = (4, 5)$. Averaging the vertices is the fastest way to locate a centroid.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'special-segments-triangles',
    sections: [
      {
        id: 'sst4-intro',
        type: 'text' as const,
        content: `# 📐 Special Segments in Triangles

**Part 4 of 5 — Altitudes, the Orthocenter & Midsegments**

---

> 🔑 **Rounding it out:** The fourth special segment is the **altitude** (a height), whose meeting point is the **orthocenter**. We finish with the **midsegment** — a bonus segment that connects two midpoints and is always parallel to the third side.`,
      },
      {
        id: 'sst4-altitude',
        type: 'text' as const,
        content: `## Altitudes & the Orthocenter

An **altitude** of a triangle is a segment from a **vertex perpendicular to the opposite side** (or to the line containing it). It is the triangle's "height" from that vertex.

The three altitudes are concurrent at the **orthocenter**, labeled $H$. Like the circumcenter, the orthocenter can wander:

| Triangle type | Orthocenter location |
|---------------|----------------------|
| Acute | **inside** the triangle |
| Right | exactly **at the right-angle vertex** |
| Obtuse | **outside** the triangle |

> 💡 In a **right** triangle, the two legs are themselves altitudes (each leg is perpendicular to the other), so they meet right at the right-angle vertex — that vertex *is* the orthocenter.

### Don't Confuse These Four

| Segment | From → To | Concurrency point | Equidistant from / special property |
|---------|-----------|-------------------|--------------------------------------|
| Perpendicular bisector | side’s midpoint, ⊥ to side | **Circumcenter** $O$ | equidistant from **vertices** |
| Angle bisector | vertex, splits angle | **Incenter** $I$ | equidistant from **sides** |
| Median | vertex → opposite **midpoint** | **Centroid** $G$ | balance point; $2:1$ ratio |
| Altitude | vertex, ⊥ to opposite side | **Orthocenter** $H$ | the triangle’s **height** |`,
      },
      {
        id: 'sst4-altitude-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which special segment goes from a vertex *perpendicular* to the opposite side?',
              options: ['altitude', 'median', 'angle bisector', 'perpendicular bisector'],
              correctAnswer: 0,
              explanation: 'An altitude is perpendicular to the opposite side and starts at a vertex. A median goes to the midpoint (not necessarily perpendicular), and a perpendicular bisector need not pass through a vertex.',
            },
            {
              question: 'In a right triangle, the orthocenter is located:',
              options: ['at the right-angle vertex', 'at the midpoint of the hypotenuse', 'outside the triangle', 'at the centroid'],
              correctAnswer: 0,
              explanation: 'The two legs are altitudes that meet at the right-angle vertex, so that vertex is the orthocenter. (The midpoint of the hypotenuse is the *circumcenter* of a right triangle.)',
            },
          ],
        },
      },
      {
        id: 'sst4-midsegment',
        type: 'text' as const,
        content: `## Midsegments

A **midsegment** connects the **midpoints of two sides** of a triangle. The **Triangle Midsegment Theorem** gives it two powerful properties:

$$\\text{A midsegment is } \\textbf{parallel} \\text{ to the third side and } \\textbf{half its length.}$$

So if a midsegment $\\overline{DE}$ joins the midpoints of two sides and the third side is $\\overline{BC}$, then:

$$\\overline{DE} \\parallel \\overline{BC} \\qquad \\text{and} \\qquad DE = \\tfrac{1}{2}\\, BC.$$

| Known | Find | How |
|-------|------|-----|
| Third side $= 14$ | midsegment | $\\frac{1}{2}(14) = 7$ |
| Midsegment $= 9$ | third side | $2(9) = 18$ |

> ⚠️ **Direction matters.** Going *third side → midsegment* you **halve**; going *midsegment → third side* you **double**. Mixing these up is the classic midsegment error.`,
      },
      {
        id: 'sst4-midseg-dropdown',
        type: 'dropdown-select' as const,
        content: `**Midsegment Theorem** 🔽

A midsegment $\\overline{DE}$ joins two midpoints; the third side is $\\overline{BC}$.`,
        exercise: {
          dropdowns: [
            { label: 'The midsegment $\\overline{DE}$ is ____ to $\\overline{BC}$:', options: ['parallel', 'perpendicular', 'equal in length', 'twice the length'] },
            { label: 'If $BC = 20$, then $DE =$', options: ['$10$', '$20$', '$40$', '$5$'] },
            { label: 'If the midsegment $DE = 9$, then $BC =$', options: ['$18$', '$9$', '$4.5$', '$27$'] },
          ],
          correctAnswers: ['parallel', '$10$', '$18$'],
          hint1: 'The midsegment runs parallel to the third side.',
          hint2: 'A midsegment is half the third side: $\\frac{1}{2}(20)$.',
          hint3: 'To go from midsegment back to the third side, double it: $2(9)$.',
          explanation: 'The midsegment is parallel to and half of the third side. $DE = \\frac{1}{2}(20) = 10$, and from $DE = 9$ we get $BC = 2(9) = 18$.',
        },
      },
      {
        id: 'sst4-midseg-drill',
        type: 'input-boxes' as const,
        content: `**Midsegment Lengths** 🧮

Use *midsegment $= \\frac{1}{2}$ (third side)*.

**1)** The third side is $26$. Find the midsegment.
**2)** A midsegment measures $11$. Find the third side.
**3)** The third side is $15$. Find the midsegment (decimal is fine).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '22', '7.5'],
          hint1: 'Halve to go third side → midsegment; double to reverse.',
          hint2: '$\\frac{1}{2}(26) = 13$ and $2(11) = 22$.',
          hint3: '$\\frac{1}{2}(15) = 7.5$ — an odd side gives a decimal midsegment.',
          explanation: '1) $\\frac{1}{2}(26) = 13$.  2) $2(11) = 22$.  3) $\\frac{1}{2}(15) = 7.5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'special-segments-triangles',
    sections: [
      {
        id: 'sst5-intro',
        type: 'text' as const,
        content: `# 📐 Special Segments in Triangles

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now identify all four special segments, locate their concurrency points, and use the key formulas — the $2:1$ centroid ratio, the midsegment halving, and the equidistance properties. Let's tie it together.`,
      },
      {
        id: 'sst5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Segment | Concurrency point | Lives where | Key fact |
|---------|-------------------|-------------|----------|
| Perpendicular bisector | **Circumcenter** $O$ | acute: in · right: on hyp · obtuse: out | equidistant from **vertices**; center of circumscribed circle |
| Angle bisector | **Incenter** $I$ | **always inside** | equidistant from **sides**; center of inscribed circle |
| Median | **Centroid** $G$ | **always inside** | balance point; $VG:GM = 2:1$ |
| Altitude | **Orthocenter** $H$ | acute: in · right: at vertex · obtuse: out | each is a height (⊥ to opposite side) |

**Other essentials**
- Centroid from coordinates: average the three vertices.
- Midsegment: **parallel** to the third side and **half** its length.
- Right-triangle circumcenter $=$ midpoint of the hypotenuse; inradius $r = \\frac{a+b-c}{2}$.

> ⚠️ The two most common slip-ups: confusing **vertices vs. sides** (circumcenter vs. incenter), and reversing the centroid $2:1$ pieces (the **bigger** piece touches the **vertex**).`,
      },
      {
        id: 'sst5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The center of the circle that passes through all three vertices of a triangle is the:',
              options: ['circumcenter', 'incenter', 'centroid', 'orthocenter'],
              correctAnswer: 0,
              explanation: 'The circumcenter is equidistant from the three vertices, so it is the center of the circumscribed circle that passes through them.',
            },
            {
              question: 'On median $\\overline{AM}$ with centroid $G$, the vertex-to-centroid length $AG = 16$. What is $GM$?',
              options: ['$8$', '$32$', '$16$', '$24$'],
              correctAnswer: 0,
              explanation: 'The short piece is half the long piece: $GM = \\frac{1}{2}(16) = 8$ (so $AG : GM = 16 : 8 = 2 : 1$).',
            },
          ],
        },
      },
      {
        id: 'sst5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Center** 🔽

Identify the concurrency point described.`,
        exercise: {
          dropdowns: [
            { label: 'Equidistant from the three sides; center of the inscribed circle:', options: ['incenter', 'circumcenter', 'centroid', 'orthocenter'] },
            { label: 'Balance point; divides each median $2:1$:', options: ['centroid', 'incenter', 'orthocenter', 'circumcenter'] },
            { label: 'Meeting point of the three altitudes:', options: ['orthocenter', 'centroid', 'circumcenter', 'incenter'] },
          ],
          correctAnswers: ['incenter', 'centroid', 'orthocenter'],
          hint1: '"In"scribed circle ↔ "in"center.',
          hint2: 'Medians → centroid (the balance point).',
          hint3: 'Altitudes (heights) → orthocenter.',
          explanation: 'Sides/inscribed circle → incenter. Medians/balance point/$2:1$ → centroid. Altitudes → orthocenter. (Perpendicular bisectors/vertices → circumcenter.)',
        },
      },
      {
        id: 'sst5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A midsegment of a triangle is parallel to the third side and equal to what fraction of it?',
              options: ['$\\frac{1}{2}$', '$1$', '$2$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'By the Triangle Midsegment Theorem, a midsegment is parallel to the third side and exactly half its length.',
            },
            {
              question: 'In which type of triangle does the circumcenter lie *outside* the triangle?',
              options: ['obtuse', 'acute', 'right', 'equilateral'],
              correctAnswer: 0,
              explanation: 'The circumcenter is inside an acute triangle, on the hypotenuse of a right triangle, and outside an obtuse triangle.',
            },
            {
              question: 'Median $\\overline{CN}$ has total length $24$ with centroid $G$. How long is $CG$ (vertex to centroid)?',
              options: ['$16$', '$8$', '$12$', '$24$'],
              correctAnswer: 0,
              explanation: 'The vertex-to-centroid piece is $\\frac{2}{3}$ of the median: $CG = \\frac{2}{3}(24) = 16$ (and $GN = 8$, giving $16 : 8 = 2 : 1$).',
            },
          ],
        },
      },
    ],
  },
]
