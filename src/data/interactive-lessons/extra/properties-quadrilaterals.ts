import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Properties of Quadrilaterals (Geometry).
 * Registry key: 'properties-quadrilaterals' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'properties-quadrilaterals',
    sections: [
      {
        id: 'pq1-intro',
        type: 'text' as const,
        content: `# ⬛ Properties of Quadrilaterals

**Part 1 of 5 — The Quadrilateral Family**

---

### Topics in This Part

| Section |
|---------|
| What Is a Quadrilateral? |
| The Angle-Sum Property (360°) |
| The Family Tree: how the shapes relate |

> 🔑 **Key Concept:** Every quadrilateral — square, kite, trapezoid, or a lopsided four-sided blob — has interior angles that add up to **exactly 360°**. That single fact powers most of Part 1.`,
      },
      {
        id: 'pq1-define',
        type: 'text' as const,
        content: `## What Is a Quadrilateral?

A **quadrilateral** is a closed figure with **four straight sides** and **four vertices**. The prefix *quad-* means four; *-lateral* means sides.

Key vocabulary you'll use throughout this lesson:

| Term | Meaning |
|------|---------|
| **Sides** | The four line segments (e.g. $\\overline{AB}$, $\\overline{BC}$, …) |
| **Vertices** | The four corner points $A, B, C, D$ |
| **Diagonals** | Segments joining *opposite* vertices ($\\overline{AC}$ and $\\overline{BD}$) |
| **Consecutive sides** | Two sides that share a vertex |
| **Opposite sides** | Two sides that do **not** share a vertex |

A quadrilateral is **convex** if every interior angle is less than $180°$ (no "dents"). Unless told otherwise, assume the quadrilaterals in this lesson are convex.

> 💡 A quadrilateral has exactly **two diagonals**. Many of the special properties ahead are really statements about how those two diagonals behave.`,
      },
      {
        id: 'pq1-anglesum-teach',
        type: 'text' as const,
        content: `## The Angle-Sum Property

Draw one diagonal in any quadrilateral and you split it into **two triangles**. Each triangle's angles sum to $180°$, so:

$$\\text{Sum of interior angles} = 2 \\times 180° = 360°$$

This holds for **every** quadrilateral, no matter how irregular.

### Worked Example

Three angles of a quadrilateral are $80°$, $100°$, and $95°$. Find the fourth.

$$x = 360° - (80° + 100° + 95°) = 360° - 275° = 85°$$

> ✅ **Check:** $80° + 100° + 95° + 85° = 360°$ ✓`,
      },
      {
        id: 'pq1-anglesum-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The interior angles of any quadrilateral add up to:',
              options: ['$180°$', '$270°$', '$360°$', '$540°$'],
              correctAnswer: 2,
              explanation: 'A diagonal splits a quadrilateral into two triangles, and $2 \\times 180° = 360°$.',
            },
            {
              question: 'Three angles of a quadrilateral are $90°$, $90°$, and $70°$. The fourth angle is:',
              options: ['$110°$', '$100°$', '$120°$', '$90°$'],
              correctAnswer: 0,
              explanation: '$360° - (90° + 90° + 70°) = 360° - 250° = 110°$.',
            },
          ],
        },
      },
      {
        id: 'pq1-anglesum-note',
        type: 'text' as const,
        content: `## A Useful Consequence

The angle-sum fact alone already locks in some shapes. If a convex quadrilateral has **three** right angles, the fourth is forced to be a right angle too:

$$360° - 3(90°) = 360° - 270° = 90°$$

So you can never build a four-sided figure with *exactly* three right angles — it always becomes a rectangle.

> 💡 Keep this in your back pocket: angle-chasing problems almost always start by writing "the four angles add to $360°$."`,
      },
      {
        id: 'pq1-anglesum-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Angle** 🧮

Each quadrilateral's angles must total $360°$. Find the unknown angle (just the number, no degree symbol).

**1)** Angles $120°, 75°, 65°,$ and $x$. Find $x$.
**2)** Angles $100°, 100°, 100°,$ and $x$. Find $x$.
**3)** A quadrilateral has three right angles and one angle $x$. Find $x$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '60', '90'],
          hint1: '$x = 360 - (120 + 75 + 65) = 360 - 260$.',
          hint2: '$x = 360 - (100 + 100 + 100) = 360 - 300$.',
          hint3: 'Three right angles total $3 \\times 90 = 270$, so $x = 360 - 270 = 90$ — it must be a rectangle!',
          explanation: '1) $360 - 260 = 100$.  2) $360 - 300 = 60$.  3) $360 - 270 = 90$. A quadrilateral with three right angles is forced to have a fourth.',
        },
      },
      {
        id: 'pq1-family-teach',
        type: 'text' as const,
        content: `## The Quadrilateral Family Tree

Quadrilaterals form a **hierarchy** — special shapes are special *because* they add properties on top of more general ones.

| Shape | Defining feature |
|-------|------------------|
| **Quadrilateral** | 4 sides |
| **Trapezoid** | at least one pair of parallel sides |
| **Parallelogram** | *both* pairs of opposite sides parallel |
| **Rectangle** | a parallelogram with 4 right angles |
| **Rhombus** | a parallelogram with 4 equal sides |
| **Square** | a parallelogram that is *both* a rectangle and a rhombus |

> 🔑 **Read it top-down:** a square is a rhombus, a rhombus is a parallelogram, and a parallelogram is a quadrilateral. The reverse is **not** true — most parallelograms are not squares.

> 💡 Because the tree flows downward, a square **inherits every property** of rectangles, rhombuses, and parallelograms. We'll cash in on that inheritance in Parts 3–5.`,
      },
      {
        id: 'pq1-family-dropdown',
        type: 'dropdown-select' as const,
        content: `**Place It in the Family** 🔽

Choose the answer that correctly describes each relationship.`,
        exercise: {
          dropdowns: [
            { label: 'Every square is also a:', options: ['rhombus', 'trapezoid only', 'triangle', 'pentagon'] },
            { label: 'A parallelogram with four right angles is a:', options: ['rectangle', 'kite', 'trapezoid', 'general quadrilateral'] },
            { label: 'Is every rectangle a square?', options: ['No', 'Yes', 'Only if convex', 'Only if large'] },
          ],
          correctAnswers: ['rhombus', 'rectangle', 'No'],
          hint1: 'A square has 4 equal sides, which is exactly what defines a rhombus.',
          hint2: 'Four right angles on a parallelogram is the definition of a rectangle.',
          hint3: 'A rectangle needs equal sides to be a square; a $4 \\times 6$ rectangle is not a square.',
          explanation: 'A square is both a rectangle and a rhombus. A rectangle is only a square when its sides are also equal — so "every rectangle is a square" is false.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'properties-quadrilaterals',
    sections: [
      {
        id: 'pq2-intro',
        type: 'text' as const,
        content: `# ⬛ Properties of Quadrilaterals

**Part 2 of 5 — Parallelograms**

---

> 🔑 **The Idea:** A **parallelogram** has *both* pairs of opposite sides parallel. From that one definition, four powerful properties about its sides, angles, and diagonals follow automatically.`,
      },
      {
        id: 'pq2-props-teach',
        type: 'text' as const,
        content: `## The Four Properties of a Parallelogram

In parallelogram $ABCD$ (with $\\overline{AB} \\parallel \\overline{DC}$ and $\\overline{AD} \\parallel \\overline{BC}$):

| # | Property | In symbols |
|---|----------|-----------|
| 1 | Opposite **sides** are congruent | $AB = DC,\\; AD = BC$ |
| 2 | Opposite **angles** are congruent | $\\angle A = \\angle C,\\; \\angle B = \\angle D$ |
| 3 | Consecutive angles are **supplementary** | $\\angle A + \\angle B = 180°$ |
| 4 | The **diagonals bisect each other** | each diagonal cuts the other in half |

> ⚠️ **Watch property 4 carefully:** the diagonals *bisect* each other, but in a general parallelogram they are **not** equal and **not** perpendicular. Those extra features only appear in special parallelograms (Part 3).

### Why consecutive angles are supplementary

$\\overline{AD} \\parallel \\overline{BC}$ makes $\\angle A$ and $\\angle B$ **co-interior (same-side) angles** on the transversal $\\overline{AB}$, so they sum to $180°$.`,
      },
      {
        id: 'pq2-angles-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In parallelogram $ABCD$, $\\angle A = 70°$. What is $\\angle C$?',
              options: ['$70°$', '$110°$', '$20°$', '$140°$'],
              correctAnswer: 0,
              explanation: '$\\angle A$ and $\\angle C$ are opposite angles, so they are congruent: $\\angle C = 70°$.',
            },
            {
              question: 'In parallelogram $ABCD$, $\\angle A = 70°$. What is $\\angle B$?',
              options: ['$70°$', '$20°$', '$110°$', '$90°$'],
              correctAnswer: 2,
              explanation: '$\\angle A$ and $\\angle B$ are consecutive angles, so they are supplementary: $\\angle B = 180° - 70° = 110°$.',
            },
          ],
        },
      },
      {
        id: 'pq2-sides-worked',
        type: 'text' as const,
        content: `## Worked Example: Solving for Sides

In parallelogram $PQRS$, side $PQ = 3x + 2$ and the opposite side $SR = 5x - 8$. Find $x$ and the length of $PQ$.

Opposite sides of a parallelogram are congruent, so set them equal:

$$3x + 2 = 5x - 8$$
$$2 + 8 = 5x - 3x$$
$$10 = 2x \\;\\Rightarrow\\; x = 5$$

Now substitute back:

$$PQ = 3(5) + 2 = 17$$

> ✅ **Check:** $SR = 5(5) - 8 = 17$. The opposite sides match ✓`,
      },
      {
        id: 'pq2-sides-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Parallelogram** 🧮

Use the parallelogram properties to solve.

**1)** Opposite sides are $2x + 1$ and $x + 9$. Find $x$.
**2)** In a parallelogram, one angle is $115°$. Find a consecutive angle.
**3)** A diagonal is bisected at point $M$. If one half is $12$, how long is the **whole** diagonal?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '65', '24'],
          hint1: 'Opposite sides are equal: $2x + 1 = x + 9 \\Rightarrow x = 8$.',
          hint2: 'Consecutive angles are supplementary: $180 - 115 = 65$.',
          hint3: 'Bisect means cut in half, so the whole diagonal is twice one half: $2 \\times 12 = 24$.',
          explanation: '1) $2x + 1 = x + 9 \\Rightarrow x = 8$.  2) $180 - 115 = 65$.  3) The diagonals bisect each other, so the full diagonal $= 2 \\times 12 = 24$.',
        },
      },
      {
        id: 'pq2-tests-teach',
        type: 'text' as const,
        content: `## Proving a Quadrilateral *Is* a Parallelogram

The properties also work in **reverse** — any one of these conditions is enough to guarantee a parallelogram:

1. Both pairs of opposite **sides** are congruent.
2. Both pairs of opposite **angles** are congruent.
3. The **diagonals bisect each other**.
4. **One** pair of opposite sides is *both* parallel **and** congruent.

> 💡 Condition 4 is a favorite on tests: you only need to check **one** pair of sides, as long as that pair is parallel *and* equal in length.`,
      },
      {
        id: 'pq2-tests-dropdown',
        type: 'dropdown-select' as const,
        content: `**Is It a Parallelogram?** 🔽

Decide whether each condition guarantees a parallelogram.`,
        exercise: {
          dropdowns: [
            { label: 'Diagonals bisect each other:', options: ['Guarantees a parallelogram', 'Not enough information', 'Guarantees a kite', 'Impossible'] },
            { label: 'One pair of opposite sides parallel AND congruent:', options: ['Guarantees a parallelogram', 'Not enough information', 'Guarantees a trapezoid only', 'Impossible'] },
            { label: 'Only one pair of opposite sides is congruent (nothing else known):', options: ['Not enough information', 'Guarantees a parallelogram', 'Guarantees a rectangle', 'Impossible'] },
          ],
          correctAnswers: ['Guarantees a parallelogram', 'Guarantees a parallelogram', 'Not enough information'],
          hint1: 'Diagonals bisecting each other is condition 3 — it is sufficient.',
          hint2: 'Parallel *and* congruent on one pair is condition 4 — it is sufficient.',
          hint3: 'Congruent alone (without parallel) on just one pair is not enough; it could be an isosceles trapezoid.',
          explanation: 'Bisecting diagonals and "one pair both parallel and congruent" each guarantee a parallelogram. But one pair merely congruent leaves room for an isosceles trapezoid, so it is not enough.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'properties-quadrilaterals',
    sections: [
      {
        id: 'pq3-intro',
        type: 'text' as const,
        content: `# ⬛ Properties of Quadrilaterals

**Part 3 of 5 — Rectangles, Rhombuses & Squares**

---

> 🔑 **Inheritance:** Each special parallelogram keeps **all four** parallelogram properties and then **adds its own**. A square, sitting at the bottom of the tree, gets every property of all of them.`,
      },
      {
        id: 'pq3-rect-teach',
        type: 'text' as const,
        content: `## The Rectangle

A **rectangle** is a parallelogram with **four right angles**.

It keeps everything a parallelogram has, and adds one signature property:

> 🔑 **Rectangle diagonals are congruent:** in rectangle $ABCD$, $AC = BD$.

| Property | Rectangle? |
|----------|:----------:|
| Opposite sides congruent | ✓ (from parallelogram) |
| Diagonals bisect each other | ✓ (from parallelogram) |
| All angles $= 90°$ | ✓ (new) |
| **Diagonals congruent** | ✓ (new) |
| Diagonals perpendicular | ✗ (not in general) |

### Worked Example: Diagonal of a Rectangle

A rectangle is $6$ by $8$. Its diagonal is the hypotenuse of a right triangle:

$$d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$`,
      },
      {
        id: 'pq3-rect-drill',
        type: 'input-boxes' as const,
        content: `**Rectangle Drills** 🧮

**1)** A rectangle has sides $9$ and $12$. Find the length of a diagonal.
**2)** In a rectangle, one diagonal is $20$. How long is the **other** diagonal?
**3)** The diagonals of a rectangle meet at center $M$. If a full diagonal is $26$, how far is each vertex from $M$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '20', '13'],
          hint1: 'Diagonal $= \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225}$.',
          hint2: 'Rectangle diagonals are congruent, so the other is also $20$.',
          hint3: 'Diagonals bisect each other, so each half is $26 \\div 2 = 13$.',
          explanation: '1) $\\sqrt{225} = 15$.  2) Congruent diagonals → $20$.  3) Bisected, so $26 \\div 2 = 13$.',
        },
      },
      {
        id: 'pq3-rhombus-teach',
        type: 'text' as const,
        content: `## The Rhombus

A **rhombus** is a parallelogram with **four congruent sides**.

It also keeps every parallelogram property and adds two new ones:

> 🔑 **Rhombus diagonals are perpendicular** ($\\overline{AC} \\perp \\overline{BD}$) **and they bisect the angles** of the rhombus.

| Property | Rhombus? |
|----------|:--------:|
| All four sides congruent | ✓ (new) |
| Diagonals bisect each other | ✓ (from parallelogram) |
| **Diagonals perpendicular** | ✓ (new) |
| Diagonals bisect the angles | ✓ (new) |
| Diagonals congruent | ✗ (not in general) |

> ⚠️ Don't mix them up: a **rectangle** has *congruent* diagonals; a **rhombus** has *perpendicular* diagonals. Only the **square** has both.

### Area from Diagonals

Because the diagonals are perpendicular, a rhombus's area is:

$$A = \\frac{1}{2} \\, d_1 d_2$$

If $d_1 = 6$ and $d_2 = 8$: $\\;A = \\frac{1}{2}(6)(8) = 24$.`,
      },
      {
        id: 'pq3-special-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which property is true for a rhombus but NOT for every rectangle?',
              options: ['Diagonals are perpendicular', 'Diagonals are congruent', 'Opposite sides are parallel', 'All angles are $90°$'],
              correctAnswer: 0,
              explanation: 'A rhombus has perpendicular diagonals. Congruent diagonals and $90°$ angles belong to rectangles, not general rhombuses.',
            },
            {
              question: 'Which property is true for a rectangle but NOT for every rhombus?',
              options: ['Diagonals are congruent', 'Diagonals bisect each other', 'Opposite sides are congruent', 'Diagonals are perpendicular'],
              correctAnswer: 0,
              explanation: 'Rectangles have congruent diagonals. Perpendicular diagonals belong to rhombuses, and the other two are shared by all parallelograms.',
            },
          ],
        },
      },
      {
        id: 'pq3-square-teach',
        type: 'text' as const,
        content: `## The Square — The Best of Both

A **square** is a parallelogram that is **both a rectangle and a rhombus**. So it inherits *every* special property:

| From… | Square gets… |
|-------|--------------|
| Parallelogram | opposite sides parallel, diagonals bisect each other |
| Rectangle | four $90°$ angles, **congruent** diagonals |
| Rhombus | four equal sides, **perpendicular** diagonals, diagonals bisect angles |

> 🔑 A square is the **only** quadrilateral whose diagonals are *congruent, perpendicular, and bisect each other* — and each diagonal cuts the corner angles into two $45°$ halves.

### Diagonal of a Square

For a square with side $s$, the diagonal is:

$$d = s\\sqrt{2}$$

A square with side $5$ has diagonal $5\\sqrt{2} \\approx 7.07$.`,
      },
      {
        id: 'pq3-square-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Diagonal Behavior** 🔽

For each shape, choose how its diagonals behave (assume a *general* example of each shape).`,
        exercise: {
          dropdowns: [
            { label: 'Rectangle diagonals are:', options: ['congruent but not perpendicular', 'perpendicular but not congruent', 'both congruent and perpendicular', 'neither'] },
            { label: 'Rhombus diagonals are:', options: ['perpendicular but not congruent', 'congruent but not perpendicular', 'both congruent and perpendicular', 'neither'] },
            { label: 'Square diagonals are:', options: ['both congruent and perpendicular', 'congruent but not perpendicular', 'perpendicular but not congruent', 'neither'] },
          ],
          correctAnswers: ['congruent but not perpendicular', 'perpendicular but not congruent', 'both congruent and perpendicular'],
          hint1: 'Rectangle = congruent diagonals (the "rectangle" trait).',
          hint2: 'Rhombus = perpendicular diagonals (the "rhombus" trait).',
          hint3: 'Square = rectangle AND rhombus, so it gets both traits at once.',
          explanation: 'Rectangle → congruent diagonals; Rhombus → perpendicular diagonals; Square → both, because it is simultaneously a rectangle and a rhombus.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'properties-quadrilaterals',
    sections: [
      {
        id: 'pq4-intro',
        type: 'text' as const,
        content: `# ⬛ Properties of Quadrilaterals

**Part 4 of 5 — Trapezoids & Kites**

---

> 🔑 **Off the parallelogram branch:** Trapezoids and kites are **not** parallelograms. Each has its own special structure — one pair of parallel sides (trapezoid) or two pairs of adjacent equal sides (kite).`,
      },
      {
        id: 'pq4-trap-teach',
        type: 'text' as const,
        content: `## The Trapezoid

A **trapezoid** has **at least one pair of parallel sides**, called the **bases**. The non-parallel sides are the **legs**.

| Term | Meaning |
|------|---------|
| **Bases** | the two parallel sides |
| **Legs** | the two non-parallel sides |
| **Midsegment** | segment joining the midpoints of the legs |

### The Midsegment Rule

The midsegment is parallel to the bases and its length is the **average** of the bases:

$$m = \\frac{b_1 + b_2}{2}$$

**Example:** bases $10$ and $16$ give midsegment $\\dfrac{10 + 16}{2} = 13$.

### Area of a Trapezoid

$$A = \\frac{1}{2}(b_1 + b_2)\\,h$$

where $h$ is the perpendicular distance between the bases.`,
      },
      {
        id: 'pq4-trap-drill',
        type: 'input-boxes' as const,
        content: `**Trapezoid Drills** 🧮

**1)** Bases $8$ and $14$. Find the midsegment length.
**2)** A trapezoid has bases $5$ and $11$ and height $4$. Find its area.
**3)** The midsegment is $9$ and one base is $6$. Find the other base.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '32', '12'],
          hint1: 'Midsegment $= \\frac{8 + 14}{2} = \\frac{22}{2}$.',
          hint2: 'Area $= \\frac{1}{2}(5 + 11)(4) = \\frac{1}{2}(16)(4)$.',
          hint3: 'If $\\frac{6 + b_2}{2} = 9$, then $6 + b_2 = 18$.',
          explanation: '1) $\\frac{22}{2} = 11$.  2) $\\frac{1}{2}(16)(4) = 32$.  3) $6 + b_2 = 18 \\Rightarrow b_2 = 12$.',
        },
      },
      {
        id: 'pq4-isos-teach',
        type: 'text' as const,
        content: `## The Isosceles Trapezoid

An **isosceles trapezoid** has congruent legs. This symmetry creates extra properties:

> 🔑 In an isosceles trapezoid: the **legs are congruent**, **each pair of base angles is congruent**, and the **diagonals are congruent**.

| Property | Isosceles Trapezoid |
|----------|:-------------------:|
| One pair of parallel sides | ✓ |
| Legs congruent | ✓ |
| Base angles congruent | ✓ |
| Diagonals congruent | ✓ |
| Opposite sides *both* parallel | ✗ (then it'd be a parallelogram) |

> ⚠️ A trapezoid's two angles **along the same leg** are co-interior on the parallel bases, so they are **supplementary** — they add to $180°$.`,
      },
      {
        id: 'pq4-isos-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a trapezoid, the two angles on the same leg always:',
              options: ['are supplementary (sum to $180°$)', 'are congruent', 'are both right angles', 'sum to $360°$'],
              correctAnswer: 0,
              explanation: 'The bases are parallel, so the two same-leg angles are co-interior (same-side) angles and sum to $180°$.',
            },
            {
              question: 'Which is a special property of an ISOSCELES trapezoid (not every trapezoid)?',
              options: ['Diagonals are congruent', 'It has one pair of parallel sides', 'It has four sides', 'Its angles sum to $360°$'],
              correctAnswer: 0,
              explanation: 'Congruent diagonals (and congruent base angles) come from the isosceles symmetry. The other choices are true of all trapezoids/quadrilaterals.',
            },
          ],
        },
      },
      {
        id: 'pq4-kite-teach',
        type: 'text' as const,
        content: `## The Kite

A **kite** has **two pairs of consecutive (adjacent) congruent sides** — but its opposite sides are **not** equal.

| Property | Kite |
|----------|:----:|
| Two pairs of adjacent sides congruent | ✓ |
| **One** pair of opposite angles congruent | ✓ (the angles *between* unequal sides) |
| Diagonals **perpendicular** | ✓ |
| One diagonal bisects the other | ✓ |
| Opposite sides parallel | ✗ |

> 🔑 A kite's diagonals are **perpendicular**, just like a rhombus — but only **one** diagonal is bisected (the axis of symmetry bisects the other).

### Area of a Kite

Like the rhombus, a kite's perpendicular diagonals give:

$$A = \\frac{1}{2}\\, d_1 d_2$$

> 💡 A rhombus is actually a *special kite* (all four sides equal) — that's why both use the same diagonal area formula.`,
      },
      {
        id: 'pq4-kite-dropdown',
        type: 'dropdown-select' as const,
        content: `**Trapezoid vs. Kite** 🔽

Match each clue to the shape it best describes.`,
        exercise: {
          dropdowns: [
            { label: 'Exactly one pair of parallel sides:', options: ['Trapezoid', 'Kite', 'Both', 'Neither'] },
            { label: 'Two pairs of adjacent congruent sides:', options: ['Kite', 'Trapezoid', 'Both', 'Neither'] },
            { label: 'Diagonals are always perpendicular:', options: ['Kite', 'Trapezoid', 'Both', 'Neither'] },
            { label: 'Congruent diagonals come from being isosceles:', options: ['Trapezoid', 'Kite', 'Both', 'Neither'] },
          ],
          correctAnswers: ['Trapezoid', 'Kite', 'Kite', 'Trapezoid'],
          hint1: 'Parallel sides → trapezoid; adjacent equal sides → kite.',
          hint2: 'Perpendicular diagonals are a kite signature (shared with the rhombus).',
          hint3: 'Congruent diagonals come from the *isosceles* trapezoid; a general trapezoid lacks them.',
          explanation: 'Parallel sides = trapezoid; adjacent congruent pairs and perpendicular diagonals = kite; congruent diagonals trace back to the isosceles trapezoid.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'properties-quadrilaterals',
    sections: [
      {
        id: 'pq5-intro',
        type: 'text' as const,
        content: `# ⬛ Properties of Quadrilaterals

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) use the $360°$ angle sum, (2) apply parallelogram properties, (3) tell rectangles, rhombuses, and squares apart, and (4) handle trapezoids and kites. Let's pull it all together.`,
      },
      {
        id: 'pq5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Shape | Sides | Angles | Diagonals |
|-------|-------|--------|-----------|
| **Parallelogram** | opposite sides $=$ | opposite $=$, consecutive supp. | bisect each other |
| **Rectangle** | opposite sides $=$ | all $90°$ | bisect & **congruent** |
| **Rhombus** | all 4 sides $=$ | opposite $=$ | bisect & **perpendicular** |
| **Square** | all 4 sides $=$ | all $90°$ | bisect, **congruent & perpendicular** |
| **Isosceles Trapezoid** | legs $=$ | base angles $=$ | **congruent** |
| **Kite** | 2 adjacent pairs $=$ | one pair opp. $=$ | **perpendicular** (one bisected) |

> ⚠️ The classic trap: **rectangle ⇒ congruent diagonals**, **rhombus ⇒ perpendicular diagonals**, **square ⇒ both**. Memorize this triangle of facts and most diagonal questions become instant.`,
      },
      {
        id: 'pq5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Computation** 🧮

**1)** A parallelogram has one angle of $130°$. Find a consecutive angle.
**2)** A square has side $10$. Find its diagonal as a decimal, rounded to the nearest hundredth. *(Use $d = s\\sqrt{2}$.)*
**3)** A rhombus has diagonals $10$ and $24$. Find its area.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50', '14.14', '120'],
          hint1: 'Consecutive angles are supplementary: $180 - 130$.',
          hint2: '$d = 10\\sqrt{2} = 10 \\times 1.41421\\ldots \\approx 14.14$.',
          hint3: 'Area $= \\frac{1}{2} d_1 d_2 = \\frac{1}{2}(10)(24)$.',
          explanation: '1) $180 - 130 = 50$.  2) $10\\sqrt{2} \\approx 14.14$.  3) $\\frac{1}{2}(10)(24) = 120$.',
        },
      },
      {
        id: 'pq5-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Quadrilateral** 🔽

Use the most *specific* name that the clues force.`,
        exercise: {
          dropdowns: [
            { label: 'Parallelogram + 4 right angles + 4 equal sides:', options: ['Square', 'Rectangle', 'Rhombus', 'Kite'] },
            { label: 'All 4 sides equal, but no right angles:', options: ['Rhombus', 'Square', 'Rectangle', 'Trapezoid'] },
            { label: 'Exactly one pair of parallel sides, legs congruent:', options: ['Isosceles trapezoid', 'Parallelogram', 'Kite', 'Rectangle'] },
          ],
          correctAnswers: ['Square', 'Rhombus', 'Isosceles trapezoid'],
          hint1: 'Right angles AND equal sides on a parallelogram pin it down to one shape.',
          hint2: 'Equal sides without right angles is the defining picture of a rhombus.',
          hint3: 'One pair of parallel sides plus congruent legs is the isosceles trapezoid.',
          explanation: 'Four right angles + four equal sides = square. Equal sides without right angles = rhombus. One parallel pair + congruent legs = isosceles trapezoid.',
        },
      },
      {
        id: 'pq5-strategy-note',
        type: 'text' as const,
        content: `## One Last Strategy

When a problem hands you only **diagonal clues**, reach for the diagonal triangle:

- **Bisect each other** → it's a parallelogram (at least).
- **+ Congruent** → rectangle.
- **+ Perpendicular** → rhombus.
- **+ Congruent AND perpendicular** → square.

> 🔑 Always claim the *most specific* shape the clues allow — that's what the final questions are testing.`,
      },
      {
        id: 'pq5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A quadrilateral has diagonals that bisect each other and are congruent, but are NOT perpendicular. It must be a:',
              options: ['Rectangle', 'Rhombus', 'Square', 'Kite'],
              correctAnswer: 0,
              explanation: 'Bisecting + congruent diagonals = rectangle. Since they are not perpendicular, it is not a square or rhombus.',
            },
            {
              question: 'Which statement is ALWAYS true?',
              options: ['Every square is a rhombus', 'Every rhombus is a square', 'Every parallelogram is a rectangle', 'Every trapezoid is a parallelogram'],
              correctAnswer: 0,
              explanation: 'A square has 4 equal sides, so it is always a rhombus. The other three reverse the hierarchy and are false.',
            },
          ],
        },
      },
      {
        id: 'pq5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Three angles of a quadrilateral are $85°$, $95°$, and $120°$. The fourth angle is:',
              options: ['$60°$', '$70°$', '$80°$', '$90°$'],
              correctAnswer: 0,
              explanation: '$360° - (85° + 95° + 120°) = 360° - 300° = 60°$.',
            },
            {
              question: 'In a parallelogram, consecutive angles are always:',
              options: ['Supplementary', 'Congruent', 'Complementary', 'Right angles'],
              correctAnswer: 0,
              explanation: 'Consecutive angles of a parallelogram are co-interior on parallel sides, so they sum to $180°$ — supplementary.',
            },
            {
              question: 'A rhombus with diagonals $12$ and $16$ has area:',
              options: ['$96$', '$192$', '$48$', '$28$'],
              correctAnswer: 0,
              explanation: 'A rhombus has perpendicular diagonals, so $A = \\frac{1}{2}d_1 d_2 = \\frac{1}{2}(12)(16) = 96$.',
            },
          ],
        },
      },
    ],
  },
]
