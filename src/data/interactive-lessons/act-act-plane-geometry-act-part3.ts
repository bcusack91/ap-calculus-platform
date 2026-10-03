export const actPlaneGeomPart3Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-pg3-intro',
      type: 'text' as const,
      content: `
# ⬛ Quadrilaterals & Polygons

**Part 3 of 7 — Parallelograms, Rectangles, Rhombuses, Squares, Trapezoids**

Every quadrilateral's interior angles sum to **360°** ($(4 - 2) \\times 180$). The special quadrilaterals each add properties on top of that, and ACT questions test whether you know exactly which properties belong to which shape.

## The Family Tree

- A **parallelogram** has both pairs of opposite sides parallel.
- A **rectangle** is a parallelogram with four right angles.
- A **rhombus** is a parallelogram with four equal sides.
- A **square** is both a rectangle and a rhombus, so it has every property below.
- A **trapezoid** has one pair of parallel sides (the bases); the other two sides (the legs) are not parallel.

## Properties Table

| Property | Parallelogram | Rectangle | Rhombus | Square |
|----------|:---:|:---:|:---:|:---:|
| Opposite sides parallel and equal | ✓ | ✓ | ✓ | ✓ |
| Opposite angles equal | ✓ | ✓ | ✓ | ✓ |
| Consecutive angles supplementary (sum 180°) | ✓ | ✓ | ✓ | ✓ |
| Diagonals bisect each other | ✓ | ✓ | ✓ | ✓ |
| Four right angles | | ✓ | | ✓ |
| Diagonals equal in length | | ✓ | | ✓ |
| Four equal sides | | | ✓ | ✓ |
| Diagonals perpendicular | | | ✓ | ✓ |

## Parallelograms

**Consecutive angles are supplementary** because each pair of neighboring angles is a pair of same-side interior angles between parallel sides. If one angle is 58°, its neighbors are each $180 - 58 = 122°$ and the opposite angle is 58°. Check: $58 + 122 + 58 + 122 = 360$.

**Algebra with sides:** opposite sides are equal, so set their expressions equal, solve, and then compute what is asked. A perimeter needs all **four** sides: $P = 2(\\text{side}_1 + \\text{side}_2)$.

**Area** $= \\text{base} \\times \\text{height}$, where the height is perpendicular to the base, **not** the slanted side.

## Rectangles and Squares

A diagonal cuts a rectangle into two right triangles, so $d = \\sqrt{l^2 + w^2}$. Both diagonals are equal, and they bisect each other, so the four half-diagonals from the center are all equal.

A square with side $s$ has diagonal $d = s\\sqrt{2}$ (two 45-45-90 triangles). Going backward, $s = \\frac{d}{\\sqrt{2}}$ and the area is $s^2 = \\frac{d^2}{2}$.

## Rhombuses

The diagonals of a rhombus are **perpendicular bisectors** of each other, so they cut the rhombus into **four congruent right triangles** whose legs are the half-diagonals and whose hypotenuse is a side.

- Diagonals 16 and 12 → half-diagonals 8 and 6 → side $= \\sqrt{64 + 36} = 10$.
- Area $= \\frac{d_1 d_2}{2} = \\frac{16 \\times 12}{2} = 96$.

A rhombus does **not** need right angles. Four equal sides plus a 70° angle means "rhombus, not a square."

## Trapezoids

$$\\text{Area} = \\frac{1}{2}(b_1 + b_2)h$$

That is the average of the two bases times the perpendicular height. In an **isosceles trapezoid**, the legs are equal and the base angles are equal. To find the height, drop perpendiculars from the ends of the shorter base: the two little right triangles each have a horizontal leg (the overhang) of $\\frac{b_2 - b_1}{2}$ and a hypotenuse equal to the trapezoid's leg.

## Regular Polygons (recap from Part 1)

Each interior angle of a regular $n$-gon is $\\frac{(n - 2) \\cdot 180}{n}$, each exterior angle is $\\frac{360}{n}$, and the two add to 180°. Regular octagon: $\\frac{1080}{8} = 135°$ interior, 45° exterior. A regular hexagon splits into **six equilateral triangles** from its center, which is the fastest way to find its area.
      `
    },
    {
      id: 'act-pg3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Isosceles trapezoid height and area</b></summary>

An isosceles trapezoid has bases 8 and 20 and legs of 10. Find its area.

1. Overhang on each side: $(20 - 8) \\div 2 = 6$.
2. Each end is a right triangle with hypotenuse 10 and leg 6, so $h = \\sqrt{100 - 36} = 8$.
3. Area $= \\frac{1}{2}(8 + 20)(8) = 112$.

**Trap avoided:** using the slanted leg 10 as the height gives 140.
</details>

<details>
<summary><b>Example 2: Rectangle from its diagonal</b></summary>

A rectangle's length is 2 more than its width, and its diagonal is 10. Find the perimeter.

1. The diagonal is a hypotenuse: $w^2 + (w + 2)^2 = 100$.
2. $2w^2 + 4w - 96 = 0 \\implies w^2 + 2w - 48 = 0 \\implies (w + 8)(w - 6) = 0$, so $w = 6$.
3. Length 8, perimeter $2(6 + 8) = 28$. (A 6-8-10 triangle, the 3-4-5 triple doubled.)
</details>
      `
    },
    {
      id: 'act-pg3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Quadrilateral Properties** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a parallelogram, two consecutive angles measure $(3x + 10)°$ and $(5x - 30)°$. What is the measure of the larger of these two angles?',
            options: ['70°', '85°', '25°', '95°'],
            correctAnswer: 3,
            explanation: `Consecutive angles of a parallelogram are supplementary: $8x - 20 = 180$, so $x = 25$ and the angles are 85° and 95°. The 85° angle is the smaller one, and 25 is $x$. Setting the expressions equal (the rule for opposite angles) gives $x = 20$ and 70°, but these angles are next to each other.`
          },
          {
            question: 'A rhombus has sides of length 13, and one of its diagonals is 24. What is the area of the rhombus?',
            options: ['60', '120', '240', '312'],
            correctAnswer: 1,
            explanation: `The diagonals are perpendicular bisectors, so half of the 24 diagonal (12) and half of the other diagonal form a right triangle with hypotenuse 13; the other half-diagonal is 5, making that diagonal 10. Area $= \\frac{24 \\times 10}{2} = 120$. Leaving out the $\\frac{1}{2}$ gives 240, and $13 \\times 24 = 312$ treats the side as a height. The value 60 is $12 \\times 5$, which counts only two of the four right triangles.`
          },
          {
            question: 'A square has a diagonal of length 10. What is the area of the square?',
            options: ['$50\\sqrt{2}$', '50', '100', '200'],
            correctAnswer: 1,
            explanation: `The side is $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$, so the area is $(5\\sqrt{2})^2 = 50$; equivalently, Area $= \\frac{d^2}{2} = 50$. Squaring the diagonal as if it were a side gives 100. Multiplying by $\\sqrt{2}$ instead of dividing makes the side $10\\sqrt{2}$ and the area 200. Multiplying the side $5\\sqrt{2}$ by the diagonal 10 gives $50\\sqrt{2}$, but area is side times side.`
          },
          {
            question: 'Which of the following statements is true for every rhombus?',
            options: [
              'Its diagonals are perpendicular.',
              'Its diagonals are equal in length.',
              'All four of its angles are right angles.',
              'Exactly one pair of its sides is parallel.'
            ],
            correctAnswer: 0,
            explanation: `The diagonals of every rhombus are perpendicular bisectors of each other. Equal diagonals and four right angles are rectangle properties; a rhombus has them only when it is also a square. A rhombus is a parallelogram, so both pairs of its sides are parallel, not just one.`
          }
        ]
      }
    },
    {
      id: 'act-pg3-input1',
      type: 'input-boxes' as const,
      content: `
**Compute It** 🧮

1) One angle of a parallelogram measures 72°. Type the measure of a consecutive (neighboring) angle, in degrees.

2) A rectangle measures 9 by 12. Type the length of its diagonal.

3) A trapezoid has bases 6 and 10 and a height of 7. Type its area.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['108', '15', '56'],
        hint1: 'Consecutive angles in a parallelogram add to 180°.',
        hint2: 'The diagonal is the hypotenuse of a right triangle with legs 9 and 12.',
        hint3: 'Average the bases, then multiply by the height.',
        explanation: '1) $180 - 72 = 108$. 2) $\\sqrt{81 + 144} = 15$. 3) $\\frac{1}{2}(6 + 10)(7) = 56$.'
      }
    },
    {
      id: 'act-pg3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Parallelogram ABCD: AB $= 2x + 5$, CD $= 4x - 7$, BC $= 9$. Perimeter? | $x = 6$, AB $= 17$, $P = 52$ |
| 2 | Rhombus diagonals 10 and 24. Side length? | half-diagonals 5 and 12 → side 13 |
| 3 | Each interior angle of a regular decagon? | $1440 \\div 10 = 144°$ |
| 4 | Square with side 7. Diagonal? | $7\\sqrt{2}$ |

**ACT Tip:** When a question names a specific quadrilateral, list its properties before computing. Many wrong choices come from using a rectangle property (equal diagonals, right angles) on a shape that is only a parallelogram or rhombus.
      `
    },
    {
      id: 'act-pg3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The diagonals of rectangle ABCD intersect at point E. If AE = $3x - 4$ and BE = $x + 6$, what is the length of diagonal AC?',
            options: ['5', '11', '22', '44'],
            correctAnswer: 2,
            explanation: `A rectangle's diagonals are equal and bisect each other, so all four segments from E are equal: $3x - 4 = x + 6$, giving $x = 5$ and AE $= 11$. AC is twice AE, or 22. The value 11 is only half the diagonal, 5 is $x$, and 44 doubles the diagonal a second time.`
          },
          {
            question: 'Each interior angle of a regular polygon is 4 times as large as each of its exterior angles. How many sides does the polygon have?',
            options: ['36', '8', '10', '5'],
            correctAnswer: 2,
            explanation: `Interior + exterior = 180° with interior $= 4 \\times$ exterior, so $5e = 180$ and each exterior angle is 36°. Then $n = 360 \\div 36 = 10$. The value 36 is the exterior angle in degrees, not a side count. A regular octagon has interior 135° and exterior 45° (a 3-to-1 ratio), and a regular pentagon has 108° and 72° (a 1.5-to-1 ratio).`
          },
          {
            question: 'An isosceles trapezoid has bases of length 7 and 19 and a height of 8. What is its perimeter?',
            options: ['26', '38', '42', '46'],
            correctAnswer: 3,
            explanation: `Each overhang is $(19 - 7) \\div 2 = 6$, so each leg is the hypotenuse of a right triangle with legs 6 and 8: a leg of 10. The perimeter is $7 + 19 + 10 + 10 = 46$. Using the height 8 as each leg gives 42, and using the overhang 6 as each leg gives 38. The value 26 adds only the two bases.`
          },
          {
            question: 'The four interior angles of a quadrilateral are in the ratio $2 : 3 : 4 : 6$. What is the measure of the largest angle?',
            options: ['144°', '72°', '90°', '48°'],
            correctAnswer: 0,
            explanation: `A quadrilateral's angles sum to 360°. There are $2 + 3 + 4 + 6 = 15$ parts, so each part is 24° and the largest angle is $6 \\times 24 = 144°$. Using 180° as the total gives 72°. The value 48° is the smallest angle, and 90° assumes all four angles are equal.`
          }
        ]
      }
    },
    {
      id: 'act-pg3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Quadrilateral angles sum to **360°**.
- **Parallelogram:** opposite sides and angles equal, **consecutive angles supplementary**, diagonals bisect each other; area = base × perpendicular height.
- **Rectangle:** add right angles and **equal diagonals**; $d = \\sqrt{l^2 + w^2}$.
- **Rhombus:** four equal sides; **diagonals are perpendicular bisectors**, making four right triangles; area $= \\frac{d_1 d_2}{2}$.
- **Square:** everything above; diagonal $= s\\sqrt{2}$, area $= s^2 = \\frac{d^2}{2}$.
- **Trapezoid:** area $= \\frac{1}{2}(b_1 + b_2)h$; in an isosceles trapezoid the overhang is $\\frac{b_2 - b_1}{2}$, and the leg is the hypotenuse with the height.
- Perimeter means **all** the sides; a common wrong choice is half the perimeter.
      `
    }
  ]
}
