import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Classifying Shapes (Grade 4 Math).
 * Registry key: 'classifying-shapes-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: favors
 * concept checks (multiple-choice + dropdown) with light counting via input-boxes.
 * Math uses doubled backslashes (template-literal strings); the degree symbol is
 * written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'classifying-shapes-grade4',
    sections: [
      {
        id: 'cs1-intro',
        type: 'text' as const,
        content: `# 🔺 Classifying Shapes

**Part 1 of 5 — Sides, Vertices & Angles**

---

### Topics in This Part

| Section |
|---------|
| What Makes a Polygon? |
| Counting Sides and Vertices |
| Naming Shapes by Their Sides |

> 🔑 **Key Idea:** A **polygon** is a closed, flat shape made of **straight sides**. To classify any shape, we first learn to *count its parts* — its sides, its vertices (corners), and its angles.`,
      },
      {
        id: 'cs1-polygon',
        type: 'text' as const,
        content: `## What Makes a Polygon?

A shape is a **polygon** only if it follows three rules:

1. It is **closed** — the sides connect all the way around with no gaps.
2. Every side is a **straight line segment** (no curves).
3. The sides do not cross over each other.

| Shape | Polygon? | Why |
|-------|----------|-----|
| Square | ✅ Yes | Closed, 4 straight sides |
| Triangle | ✅ Yes | Closed, 3 straight sides |
| Circle | ❌ No | It is curved, not straight |
| The letter **C** | ❌ No | It is open, not closed |

> 💡 A circle is a shape, but it is **not** a polygon, because "poly-gon" means "many straight sides."`,
      },
      {
        id: 'cs1-polygon-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which one of these is a polygon?',
              options: ['A circle', 'A triangle', 'The letter U', 'A wavy line'],
              correctAnswer: 1,
              explanation: 'A triangle is closed and has 3 straight sides, so it is a polygon. A circle is curved, the letter U is open, and a wavy line is not straight.',
            },
            {
              question: 'Why is a circle NOT a polygon?',
              options: ['It has too many sides', 'It is curved, not made of straight sides', 'It is too small', 'It has no color'],
              correctAnswer: 1,
              explanation: 'A polygon must be made of straight sides. A circle is one smooth curve, so it cannot be a polygon.',
            },
          ],
        },
      },
      {
        id: 'cs1-parts',
        type: 'text' as const,
        content: `## The Parts of a Polygon

Every polygon has three things we can count:

- **Sides** — the straight line segments.
- **Vertices** — the corners where two sides meet. *(One corner is a "vertex"; many corners are "vertices.")*
- **Angles** — the amount of "opening" at each corner.

> 🔑 **Super-Helpful Rule:** In any polygon, the number of **sides**, the number of **vertices**, and the number of **angles** are all **the same**! A shape with 5 sides has 5 vertices and 5 angles.

| Shape | Sides | Vertices | Angles |
|-------|-------|----------|--------|
| Triangle | 3 | 3 | 3 |
| Square | 4 | 4 | 4 |
| Pentagon | 5 | 5 | 5 |`,
      },
      {
        id: 'cs1-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Parts** 🧮

Use the rule "sides = vertices = angles" to fill in the blanks.

**1)** A hexagon has 6 sides. How many vertices does it have?
**2)** A shape has 8 angles. How many sides does it have?
**3)** A triangle has how many vertices?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '8', '3'],
          hint1: 'In every polygon, sides = vertices = angles.',
          hint2: '6 sides means 6 vertices. 8 angles means 8 sides.',
          hint3: '"Tri" means three, so a triangle has 3 of everything.',
          explanation: '1) 6 vertices (same as sides). 2) 8 sides (same as angles). 3) 3 vertices. The three counts always match.',
        },
      },
      {
        id: 'cs1-name-by-sides',
        type: 'text' as const,
        content: `## Naming Shapes by Their Sides

Polygons are named by **how many sides** they have:

| Sides | Name | Memory Trick |
|-------|------|--------------|
| 3 | **Triangle** | "tri" = 3 |
| 4 | **Quadrilateral** | "quad" = 4 |
| 5 | **Pentagon** | a pentagon (the building) has 5 sides |
| 6 | **Hexagon** | "hex" = 6 |
| 8 | **Octagon** | an "octo"pus has 8 arms; a stop sign has 8 sides |

> 💡 The word ending **"-gon"** comes from a word meaning "angle" — so a *hexagon* literally means "six angles," which is also six sides.

You can now count and name shapes. In Part 2 we look closely at the most important family of all: **triangles**.`,
      },
      {
        id: 'cs1-name-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Polygon** 🔽

Pick the correct name for a polygon with the given number of sides.`,
        exercise: {
          dropdowns: [
            { label: 'A polygon with 3 sides:', options: ['Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon'] },
            { label: 'A polygon with 5 sides:', options: ['Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon'] },
            { label: 'A polygon with 6 sides:', options: ['Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon'] },
          ],
          correctAnswers: ['Triangle', 'Pentagon', 'Hexagon'],
          hint1: '"Tri" means three, so a 3-sided polygon is a triangle.',
          hint2: 'A pentagon (like the building) has 5 sides.',
          hint3: '"Hex" means six, so a 6-sided polygon is a hexagon.',
          explanation: '3 sides → triangle. 5 sides → pentagon. 6 sides → hexagon. (A 4-sided polygon is a quadrilateral.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'classifying-shapes-grade4',
    sections: [
      {
        id: 'cs2-intro',
        type: 'text' as const,
        content: `# 🔺 Classifying Shapes

**Part 2 of 5 — Classifying Triangles**

---

> 🔑 **The Idea:** Every triangle has 3 sides and 3 angles. We can sort triangles **two different ways** — by their **sides** or by their **angles**.`,
      },
      {
        id: 'cs2-by-sides',
        type: 'text' as const,
        content: `## Sorting Triangles by Their Sides

Look at how many sides have the **same length**:

| Triangle | Equal Sides | Picture Clue |
|----------|-------------|--------------|
| **Equilateral** | All 3 sides equal | Looks perfectly even |
| **Isosceles** | Exactly 2 sides equal | Like a tall party hat |
| **Scalene** | No sides equal | All sides different |

> 💡 **Memory trick:** *Equi*lateral means "**equal** sides" — all three match. The tick marks (small lines) on a side tell you which sides are equal.`,
      },
      {
        id: 'cs2-by-angles',
        type: 'text' as const,
        content: `## Sorting Triangles by Their Angles

Now look at the **biggest angle** in the triangle. *(Remember: a **right angle** is a square corner, exactly 90°.)*

| Triangle | Biggest Angle | What It Looks Like |
|----------|---------------|--------------------|
| **Acute** | All angles **less than** 90° | All corners are "skinny" |
| **Right** | One angle is **exactly** 90° | One perfect square corner |
| **Obtuse** | One angle is **more than** 90° | One wide, "open" corner |

> ⚠️ **Watch out:** A triangle can only ever have **one** right angle or **one** obtuse angle — never two. The other corners must be acute.`,
      },
      {
        id: 'cs2-sides-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has sides of 5 cm, 5 cm, and 8 cm. What kind of triangle is it (by sides)?',
              options: ['Equilateral', 'Isosceles', 'Scalene', 'Right'],
              correctAnswer: 1,
              explanation: 'Exactly two sides are equal (5 cm and 5 cm), so it is isosceles. Equilateral needs all three equal; scalene needs all three different.',
            },
            {
              question: 'Which triangle has all three sides the same length?',
              options: ['Scalene', 'Isosceles', 'Equilateral', 'Obtuse'],
              correctAnswer: 2,
              explanation: 'Equilateral means all 3 sides are equal. ("Equi" = equal.)',
            },
          ],
        },
      },
      {
        id: 'cs2-angles-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sort by Angles** 🔽

Choose the correct triangle name for each clue about its angles.`,
        exercise: {
          dropdowns: [
            { label: 'One angle is exactly 90°:', options: ['Acute', 'Right', 'Obtuse'] },
            { label: 'All three angles are less than 90°:', options: ['Acute', 'Right', 'Obtuse'] },
            { label: 'One angle is 120° (more than 90°):', options: ['Acute', 'Right', 'Obtuse'] },
          ],
          correctAnswers: ['Right', 'Acute', 'Obtuse'],
          hint1: 'A right angle is a perfect square corner, exactly 90°.',
          hint2: '"Acute" angles are all the small, skinny ones (less than 90°).',
          hint3: '"Obtuse" means one angle is wide and open — bigger than 90°.',
          explanation: 'Exactly 90° → right. All under 90° → acute. One over 90° → obtuse.',
        },
      },
      {
        id: 'cs2-drill',
        type: 'input-boxes' as const,
        content: `**Count the Equal Sides** 🧮

Match each triangle to the number of **equal sides** it has.

**1)** How many equal sides does an **equilateral** triangle have?
**2)** How many equal sides does an **isosceles** triangle have?
**3)** How many equal sides does a **scalene** triangle have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '2', '0'],
          hint1: 'Equilateral means ALL sides are equal — how many sides does a triangle have?',
          hint2: 'Isosceles has exactly two matching sides.',
          hint3: 'Scalene means none of the sides match, so zero are equal.',
          explanation: '1) Equilateral = 3 equal sides. 2) Isosceles = 2 equal sides. 3) Scalene = 0 equal sides.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'classifying-shapes-grade4',
    sections: [
      {
        id: 'cs3-intro',
        type: 'text' as const,
        content: `# 🔺 Classifying Shapes

**Part 3 of 5 — Classifying Quadrilaterals**

---

> 🔑 **The Idea:** A **quadrilateral** is any polygon with **4 sides**. But not all 4-sided shapes are the same! We sort them by their **parallel sides**, **equal sides**, and **right angles**.`,
      },
      {
        id: 'cs3-parallel',
        type: 'text' as const,
        content: `## First, a Key Word: Parallel

**Parallel** sides are two sides that run in the same direction and **never cross**, like the two rails of a train track. They stay the same distance apart forever.

> 💡 **Picture it:** The top and bottom edges of this page are parallel. The left and right edges are parallel too.

Quadrilaterals are sorted by **how many pairs of parallel sides** they have:
- **0 pairs** — a general quadrilateral.
- **1 pair** — a trapezoid.
- **2 pairs** — a parallelogram (and its special versions).`,
      },
      {
        id: 'cs3-family',
        type: 'text' as const,
        content: `## The Quadrilateral Family

| Name | Parallel Sides | Special Feature |
|------|----------------|-----------------|
| **Trapezoid** | Exactly **1** pair | Just one pair of parallel sides |
| **Parallelogram** | **2** pairs | Opposite sides parallel **and** equal |
| **Rectangle** | **2** pairs | A parallelogram with **4 right angles** |
| **Rhombus** | **2** pairs | A parallelogram with **4 equal sides** |
| **Square** | **2** pairs | 4 right angles **AND** 4 equal sides |

> 🔑 **A square is special:** It is a rectangle (4 right angles) **and** a rhombus (4 equal sides) at the same time. A square is the "best of both."`,
      },
      {
        id: 'cs3-family-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which quadrilateral has exactly ONE pair of parallel sides?',
              options: ['Square', 'Rectangle', 'Trapezoid', 'Rhombus'],
              correctAnswer: 2,
              explanation: 'A trapezoid has exactly one pair of parallel sides. Squares, rectangles, and rhombuses are all parallelograms, so they have two pairs.',
            },
            {
              question: 'A rectangle is a parallelogram that also has...',
              options: ['4 equal sides', '4 right angles', 'only 3 sides', 'no parallel sides'],
              correctAnswer: 1,
              explanation: 'A rectangle is a parallelogram with 4 right angles (4 square corners). Having 4 EQUAL sides would make it a rhombus instead.',
            },
          ],
        },
      },
      {
        id: 'cs3-special-square',
        type: 'text' as const,
        content: `## Why a Square Counts as Many Shapes

Because a square has **everything**, it belongs to several groups at once:

$$\\text{Square} = \\text{rectangle} + \\text{rhombus}$$

- It has 4 right angles → so it **is** a rectangle. ✅
- It has 4 equal sides → so it **is** a rhombus. ✅
- It has 2 pairs of parallel sides → so it **is** a parallelogram. ✅
- It has 4 sides → so it **is** a quadrilateral. ✅

> ⚠️ **But be careful — it does NOT go backwards!** Every square is a rectangle, but **not** every rectangle is a square. A rectangle only becomes a square when all 4 sides are equal.`,
      },
      {
        id: 'cs3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Quadrilateral** 🔽

Pick the best name for each shape from its description.`,
        exercise: {
          dropdowns: [
            { label: '4 right angles, but sides are NOT all equal:', options: ['Square', 'Rectangle', 'Trapezoid', 'Rhombus'] },
            { label: '4 equal sides AND 4 right angles:', options: ['Square', 'Rectangle', 'Trapezoid', 'Rhombus'] },
            { label: '4 equal sides, but NO right angles:', options: ['Square', 'Rectangle', 'Trapezoid', 'Rhombus'] },
          ],
          correctAnswers: ['Rectangle', 'Square', 'Rhombus'],
          hint1: '4 right angles points to the rectangle family.',
          hint2: 'Having BOTH 4 equal sides and 4 right angles is only true for a square.',
          hint3: '4 equal sides with no right angles is a rhombus (a "pushed-over" square).',
          explanation: 'Right angles only → rectangle. Both equal sides and right angles → square. Equal sides only → rhombus.',
        },
      },
      {
        id: 'cs3-parallel-drill',
        type: 'input-boxes' as const,
        content: `**Count the Parallel Pairs** 🧮

Write how many **pairs of parallel sides** each quadrilateral has.

**1)** How many pairs of parallel sides does a **trapezoid** have?
**2)** How many pairs of parallel sides does a **parallelogram** have?
**3)** How many pairs of parallel sides does a **square** have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '2', '2'],
          hint1: 'A trapezoid is defined by having exactly ONE pair of parallel sides.',
          hint2: 'A parallelogram has both pairs of opposite sides parallel.',
          hint3: 'A square is a special parallelogram, so it also has 2 pairs.',
          explanation: '1) Trapezoid = 1 pair. 2) Parallelogram = 2 pairs. 3) Square = 2 pairs (it is a parallelogram too).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'classifying-shapes-grade4',
    sections: [
      {
        id: 'cs4-intro',
        type: 'text' as const,
        content: `# 🔺 Classifying Shapes

**Part 4 of 5 — Lines, Angles & Symmetry**

---

> 🔑 **The Idea:** Beyond counting sides, we classify shapes using their **lines** (parallel and perpendicular), their **angles** (right, acute, obtuse), and their **lines of symmetry**.`,
      },
      {
        id: 'cs4-perpendicular',
        type: 'text' as const,
        content: `## Parallel vs. Perpendicular Lines

These two words describe how lines relate to each other:

| Word | What It Means | Real-Life Example |
|------|---------------|-------------------|
| **Parallel** | Lines that never cross, staying the same distance apart | Train tracks |
| **Perpendicular** | Lines that cross to make a **right angle** (90°) | The corner of a window |

> 💡 **Spot the difference:** Parallel lines look like **=** (they run alongside each other). Perpendicular lines look like **+** or **L** (they meet at a square corner).

> ⚠️ Don't mix these up! "Perpendicular" always makes a **right angle** where the lines meet.`,
      },
      {
        id: 'cs4-lines-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two lines cross and make a perfect square corner (90°). The lines are...',
              options: ['Parallel', 'Perpendicular', 'Curved', 'Acute'],
              correctAnswer: 1,
              explanation: 'Lines that meet at a 90° right angle are perpendicular. Parallel lines never cross at all.',
            },
            {
              question: 'Which pair of lines would NEVER cross, no matter how far you draw them?',
              options: ['Perpendicular lines', 'Parallel lines', 'Lines that make a right angle', 'The sides of a triangle'],
              correctAnswer: 1,
              explanation: 'Parallel lines stay the same distance apart forever, so they never meet. Perpendicular lines cross at a right angle.',
            },
          ],
        },
      },
      {
        id: 'cs4-symmetry',
        type: 'text' as const,
        content: `## Lines of Symmetry

A **line of symmetry** is a line you could fold a shape along so that **both halves match up perfectly** — like folding a paper heart in half.

A shape can have **zero, one, or many** lines of symmetry.

| Shape | Lines of Symmetry |
|-------|-------------------|
| Square | **4** |
| Rectangle (not square) | **2** |
| Equilateral triangle | **3** |
| Isosceles triangle | **1** |
| Scalene triangle | **0** |
| Circle | **endless** (infinite) |

> 💡 **The pattern:** A **regular** polygon (all sides and angles equal) has the **same number of lines of symmetry as it has sides**. A regular hexagon (6 sides) has 6 lines of symmetry.`,
      },
      {
        id: 'cs4-symmetry-drill',
        type: 'input-boxes' as const,
        content: `**Count the Lines of Symmetry** 🧮

Use the table above to answer.

**1)** How many lines of symmetry does a **square** have?
**2)** How many lines of symmetry does an **equilateral triangle** have?
**3)** A **regular pentagon** has 5 sides. How many lines of symmetry does it have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '5'],
          hint1: 'A square folds in half four different ways (top-bottom, side-side, and both diagonals).',
          hint2: 'An equilateral triangle has all sides equal, so it folds 3 ways.',
          hint3: 'For a regular polygon, lines of symmetry = number of sides. A pentagon has 5 sides.',
          explanation: '1) Square = 4. 2) Equilateral triangle = 3. 3) Regular pentagon = 5 (sides = lines of symmetry for a regular shape).',
        },
      },
      {
        id: 'cs4-symmetry-dropdown',
        type: 'dropdown-select' as const,
        content: `**Symmetry Check** 🔽

Choose how many lines of symmetry each shape has.`,
        exercise: {
          dropdowns: [
            { label: 'A scalene triangle (no equal sides):', options: ['0', '1', '3'] },
            { label: 'A rectangle that is NOT a square:', options: ['0', '2', '4'] },
            { label: 'A regular hexagon (6 equal sides):', options: ['2', '3', '6'] },
          ],
          correctAnswers: ['0', '2', '6'],
          hint1: 'A scalene triangle has no matching sides, so no fold makes the halves match.',
          hint2: 'A non-square rectangle folds only top-to-bottom and side-to-side: 2 lines.',
          hint3: 'A regular polygon has as many lines of symmetry as it has sides.',
          explanation: 'Scalene triangle → 0. Non-square rectangle → 2. Regular hexagon → 6 (one per side).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'classifying-shapes-grade4',
    sections: [
      {
        id: 'cs5-intro',
        type: 'text' as const,
        content: `# 🔺 Classifying Shapes

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) count sides, vertices, and angles, (2) classify triangles by sides and angles, (3) name quadrilaterals, and (4) find right angles, parallel lines, and lines of symmetry. Let's put it all together!`,
      },
      {
        id: 'cs5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| To classify by... | Look at... |
|-------------------|------------|
| **Number of sides** | 3 = triangle, 4 = quadrilateral, 5 = pentagon, 6 = hexagon |
| **Triangle sides** | all equal = equilateral, 2 equal = isosceles, none = scalene |
| **Triangle angles** | all < 90° = acute, one = 90° = right, one > 90° = obtuse |
| **Quadrilateral** | 1 parallel pair = trapezoid, 2 pairs = parallelogram |
| **Special quads** | 4 right angles = rectangle, 4 equal sides = rhombus, both = square |

> 🔑 **Remember:** Sides = vertices = angles in every polygon, and a **regular** shape has as many lines of symmetry as it has sides.`,
      },
      {
        id: 'cs5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has one 90° angle and two sides of equal length. It is a...',
              options: ['Right isosceles triangle', 'Equilateral triangle', 'Obtuse scalene triangle', 'Acute triangle'],
              correctAnswer: 0,
              explanation: 'A 90° angle makes it a "right" triangle, and two equal sides make it "isosceles." So it is a right isosceles triangle.',
            },
            {
              question: 'Which statement is TRUE?',
              options: ['Every rectangle is a square', 'Every square is a rectangle', 'A circle is a polygon', 'A trapezoid has 5 sides'],
              correctAnswer: 1,
              explanation: 'Every square IS a rectangle (it has 4 right angles). But not every rectangle is a square. A circle is not a polygon, and a trapezoid has 4 sides.',
            },
          ],
        },
      },
      {
        id: 'cs5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Counting Review** 🧮

**1)** How many sides does an **octagon** have?
**2)** How many lines of symmetry does a **square** have?
**3)** How many pairs of parallel sides does a **trapezoid** have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '4', '1'],
          hint1: 'An octopus has 8 arms — an octagon has 8 sides.',
          hint2: 'A square folds in half 4 different ways.',
          hint3: 'A trapezoid is defined by having exactly ONE pair of parallel sides.',
          explanation: '1) Octagon = 8 sides. 2) Square = 4 lines of symmetry. 3) Trapezoid = 1 pair of parallel sides.',
        },
      },
      {
        id: 'cs5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A polygon has 6 sides. How many vertices (corners) does it have?',
              options: ['3', '6', '8', '12'],
              correctAnswer: 1,
              explanation: 'In every polygon, the number of sides equals the number of vertices. 6 sides means 6 vertices.',
            },
            {
              question: 'Which shape always has 4 equal sides AND 4 right angles?',
              options: ['Rectangle', 'Trapezoid', 'Square', 'Scalene triangle'],
              correctAnswer: 2,
              explanation: 'A square is the only shape that has both 4 equal sides and 4 right angles. A rectangle has the right angles but not always equal sides.',
            },
            {
              question: 'A triangle has angles of 40°, 60°, and 80°. What kind of triangle is it (by angles)?',
              options: ['Right', 'Obtuse', 'Acute', 'Isosceles'],
              correctAnswer: 2,
              explanation: 'All three angles (40°, 60°, 80°) are less than 90°, so it is an acute triangle. "Isosceles" describes sides, not angles.',
            },
          ],
        },
      },
    ],
  },
]
