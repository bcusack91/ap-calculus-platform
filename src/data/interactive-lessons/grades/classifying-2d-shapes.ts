import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'classifying-2d-shapes',
    sections: [
      {
        id: 'classifying-2d-shapes-p1-intro',
        type: 'text' as const,
        content: `
# 🔷 Classifying 2D Shapes

**Part 1 of 5 — Concept Introduction**

Welcome to the world of geometry! A **two-dimensional (2D) shape** is a flat shape — it has only **length** and **width**, like a drawing on a piece of paper.

The most important family of 2D shapes is the **polygons**.

## What Is a Polygon?

A **polygon** is a **closed** flat shape made of **straight line segments**. The word *polygon* comes from Greek words meaning "many angles."

To be a polygon, a shape must follow **all** of these rules:

- It is **closed** (no gaps — the sides connect all the way around).
- Every side is a **straight** line segment (no curves).
- The sides only meet at their endpoints (they don't cross).

So a **circle** is *not* a polygon (it's curved), and the letter "C" is *not* a polygon (it's open). But a triangle, a square, and a stop sign **are** polygons. ✅
    `
      },
      {
        id: 'classifying-2d-shapes-p1-naming',
        type: 'text' as const,
        content: `
## Naming Polygons by Their Sides

We classify polygons by **counting their sides**. The number of sides always equals the number of angles (corners).

| Polygon | Number of Sides | Number of Angles |
|---------|-----------------|------------------|
| Triangle | 3 | 3 |
| Quadrilateral | 4 | 4 |
| Pentagon | 5 | 5 |
| Hexagon | 6 | 6 |
| Octagon | 8 | 8 |

**Helpful memory tricks:**

- A **tri**cycle has **3** wheels → a **tri**angle has **3** sides.
- An **oct**opus has **8** arms → an **oct**agon has **8** sides.
- A stop sign is an **octagon** — count the sides next time you see one!
    `
      },
      {
        id: 'classifying-2d-shapes-p1-regular',
        type: 'text' as const,
        content: `
## Regular vs. Irregular Polygons

Polygons can also be sorted by whether their sides and angles are **all equal**:

- **Regular polygon:** *all* sides are the same length **and** *all* angles are equal. (Example: a stop sign, where all 8 sides match.)
- **Irregular polygon:** the sides are **not** all equal, or the angles are **not** all equal.

**Worked example:** Is a square regular or irregular?

A square has **4 equal sides** and **4 equal angles** (each $90°$). Because everything matches, a square is a **regular** polygon. ✅

A rectangle that is longer than it is wide has equal angles but **un**equal sides, so it is **irregular**.
    `
      },
      {
        id: 'classifying-2d-shapes-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Let's make sure you can spot a polygon and name it.
    `,
        exercise: {
          questions: [
            {
              question: 'Which of these is a polygon?',
              options: [
                'A circle',
                'A shape with 5 straight sides that is fully closed',
                'A curved letter "S"',
                'A shape with one side that has a gap in it'
              ],
              correctAnswer: 1,
              explanation: 'A polygon must be closed and made of straight sides. A closed shape with 5 straight sides fits both rules, but a circle is curved and an open shape has a gap.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'classifying-2d-shapes',
    sections: [
      {
        id: 'classifying-2d-shapes-p2-triangles',
        type: 'text' as const,
        content: `
# 📐 Worked Examples: Triangles & Quadrilaterals

**Part 2 of 5 — Worked Examples**

## Classifying Triangles

A **triangle** has exactly **3 sides** and **3 angles**, and its angles always add up to $180°$. We can classify triangles two ways.

**By sides:**

- **Equilateral:** all 3 sides equal (and all 3 angles are $60°$).
- **Isosceles:** exactly 2 sides equal.
- **Scalene:** all 3 sides different.

**By angles:**

- **Acute:** all 3 angles are less than $90°$.
- **Right:** one angle is exactly $90°$.
- **Obtuse:** one angle is greater than $90°$.

**Worked example:** A triangle has angles of $90°$, $45°$, and $45°$. Two of its sides are equal. Classify it by angle and by side.

- It has a $90°$ angle, so by **angle** it is a **right** triangle.
- It has 2 equal sides, so by **side** it is **isosceles**.

So it is a **right isosceles triangle**. ✅ (Check: $90 + 45 + 45 = 180°$.)
    `
      },
      {
        id: 'classifying-2d-shapes-p2-quads',
        type: 'text' as const,
        content: `
## Classifying Quadrilaterals

A **quadrilateral** has exactly **4 sides** and **4 angles**, and its angles always add up to $360°$. Here are the most common kinds:

| Quadrilateral | Key Properties |
|---------------|----------------|
| **Square** | 4 equal sides, 4 right angles |
| **Rectangle** | opposite sides equal, 4 right angles |
| **Parallelogram** | both pairs of opposite sides parallel & equal |
| **Rhombus** | 4 equal sides, opposite sides parallel |
| **Trapezoid** | exactly **one** pair of parallel sides |
| **Kite** | two pairs of equal sides that are next to each other |

**Worked example:** A shape has 4 equal sides, opposite sides are parallel, but its angles are **not** $90°$ (it looks like a square tilted over). What is it?

- 4 equal sides + slanted (not right) angles → it is a **rhombus**.
- It is *not* a square because a square needs $90°$ angles. ✅
    `
      },
      {
        id: 'classifying-2d-shapes-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

A polygon has **6** sides, and **all 6 sides are equal in length** with all angles equal.

1) How many sides does this polygon have? (Type a number.)

2) What is the name of a 6-sided polygon? (Type one word, all lowercase: like "hexagon".)

3) Because all of its sides and angles are equal, is it **regular** or **irregular**? (Type one word, all lowercase.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', 'hexagon', 'regular'],
          hint1: 'Count the sides given in the problem — the name of a polygon comes from its number of sides.',
          hint2: 'A 6-sided polygon is a hexagon. When ALL sides AND angles are equal, a polygon is called "regular."',
          explanation: 'The shape has 6 equal sides, so it is a hexagon. Since every side and angle is equal, it is a regular hexagon.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'classifying-2d-shapes',
    sections: [
      {
        id: 'classifying-2d-shapes-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Read each clue carefully, then choose the best classification.
    `,
        exercise: {
          questions: [
            {
              question: 'A triangle has all three sides the same length. Each angle measures $60°$. What kind of triangle is it (by sides)?',
              options: ['Scalene', 'Isosceles', 'Equilateral', 'Right'],
              correctAnswer: 2,
              explanation: 'When all 3 sides are equal (and all angles are $60°$), the triangle is equilateral.'
            },
            {
              question: 'Which quadrilateral has exactly ONE pair of parallel sides?',
              options: ['Square', 'Rectangle', 'Trapezoid', 'Rhombus'],
              correctAnswer: 2,
              explanation: 'A trapezoid is defined by having exactly one pair of parallel sides. The other shapes have two pairs of parallel sides.'
            }
          ]
        }
      },
      {
        id: 'classifying-2d-shapes-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Match the Shape** 🔍

Use what you know about sides and angles to complete each statement.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'A polygon with 5 sides is called a',
              options: ['triangle', 'pentagon', 'hexagon', 'octagon']
            },
            {
              label: 'A quadrilateral with 4 equal sides and 4 right angles is a',
              options: ['trapezoid', 'kite', 'square', 'parallelogram']
            }
          ],
          correctAnswers: ['pentagon', 'square'],
          hint1: 'Count sides for the first one. For the second, "4 equal sides AND 4 right angles" describes only one special shape.',
          explanation: 'A 5-sided polygon is a pentagon. A quadrilateral with 4 equal sides and 4 right angles is a square.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'classifying-2d-shapes',
    sections: [
      {
        id: 'classifying-2d-shapes-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Shapes**

Shapes are everywhere in the real world! Knowing how to classify them helps you describe signs, tiles, buildings, and art.

## Signs Around Town 🚸

- A **yield sign** is a triangle.
- A **stop sign** is an octagon (8 sides).
- A **"Do Not Enter"** sign is a circle — but remember, a circle is **not** a polygon because it is curved!

## Floor Tiles 🧩

Imagine a kitchen floor covered in tiles. Each tile is a polygon with **4 equal sides** and **4 right angles**. That makes every tile a **square**. If the tiles were longer than they were wide (still with 4 right angles), they would be **rectangles** instead.

The key is always the same: **count the sides, check the angles, and look for equal or parallel sides.**
    `
      },
      {
        id: 'classifying-2d-shapes-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

A soccer ball is covered in flat patches. One type of patch is a polygon with **5** straight, equal sides.

1) How many sides does this patch have? (Type a number.)

2) What is the name of a 5-sided polygon? (Type one word, all lowercase.)

3) A stop sign has 8 sides. What is the name of an 8-sided polygon? (Type one word, all lowercase.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', 'pentagon', 'octagon'],
          hint1: 'The number of sides gives the polygon its name.',
          hint2: 'A 5-sided polygon is a "pentagon" and an 8-sided polygon is an "octagon."',
          explanation: 'A 5-sided patch is a pentagon. A stop sign with 8 sides is an octagon.'
        }
      },
      {
        id: 'classifying-2d-shapes-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Apply It** 🎯

Use real-world reasoning to classify the shape.
    `,
        exercise: {
          questions: [
            {
              question: 'A picture frame has opposite sides equal and all 4 angles are right angles ($90°$), but it is longer than it is wide. What shape is the frame?',
              options: ['Square', 'Rectangle', 'Triangle', 'Pentagon'],
              correctAnswer: 1,
              explanation: 'Opposite sides equal with four right angles, but longer than it is wide, describes a rectangle. A square would need all four sides equal.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'classifying-2d-shapes',
    sections: [
      {
        id: 'classifying-2d-shapes-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You've learned how to classify 2D shapes by counting sides, checking angles, and looking for equal or parallel sides. Here's a quick summary.

## Shape Cheat Sheet

| Shape | Sides | Special Property |
|-------|-------|------------------|
| Triangle | 3 | Angles add to $180°$ |
| Quadrilateral | 4 | Angles add to $360°$ |
| Pentagon | 5 | 5 sides, 5 angles |
| Hexagon | 6 | 6 sides, 6 angles |
| Octagon | 8 | Like a stop sign |
| Square | 4 | 4 equal sides, 4 right angles |
| Rectangle | 4 | Opposite sides equal, 4 right angles |
| Rhombus | 4 | 4 equal sides, slanted angles |
| Trapezoid | 4 | Exactly 1 pair of parallel sides |

**Remember the big rules:**
- A **polygon** is closed and made of straight sides.
- **Regular** = all sides *and* all angles equal; otherwise it is **irregular**.
- Classify triangles **by sides** (equilateral, isosceles, scalene) and **by angles** (acute, right, obtuse).
    `
      },
      {
        id: 'classifying-2d-shapes-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Final Challenge** 🎯

These questions mix everything together. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'A square is a special kind of which other shape, because it ALSO has opposite sides equal and four right angles?',
              options: ['Triangle', 'Rectangle', 'Pentagon', 'Trapezoid'],
              correctAnswer: 1,
              explanation: 'A square fits every rule for a rectangle (opposite sides equal, four right angles) and adds that all four sides are equal, so every square is also a rectangle.'
            },
            {
              question: 'A triangle has one angle that measures $110°$. What kind of triangle is it (by its angles)?',
              options: ['Acute', 'Right', 'Obtuse', 'Equilateral'],
              correctAnswer: 2,
              explanation: 'An angle greater than $90°$ makes a triangle obtuse. Here $110°$ is greater than $90°$, so it is an obtuse triangle.'
            }
          ]
        }
      }
    ]
  }
]
