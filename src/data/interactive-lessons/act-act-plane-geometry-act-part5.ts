export const actPlaneGeomPart5Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-pg5-intro',
      type: 'text' as const,
      content: `
# 📏 Area & Perimeter

**Part 5 of 7 — Formulas, Composite Figures, Borders, Units, and Scaling**

The ACT does not hand you a formula sheet, so the basic area formulas below must be memorized. **Perimeter** is a length (add the sides); **area** is the number of unit squares inside (square units).

## Formulas to Know

| Figure | Area | Perimeter |
|--------|------|-----------|
| Rectangle | $A = lw$ | $P = 2l + 2w$ |
| Square | $A = s^2$ | $P = 4s$ |
| Parallelogram | $A = bh$ ($h$ perpendicular to $b$) | sum of sides |
| Triangle | $A = \\frac{1}{2}bh$ | sum of sides |
| Trapezoid | $A = \\frac{1}{2}(b_1 + b_2)h$ | sum of sides |
| Rhombus | $A = \\frac{d_1 d_2}{2}$ | $4s$ |
| Circle | $A = \\pi r^2$ | $C = 2\\pi r$ |
| Equilateral triangle | $A = \\frac{\\sqrt{3}}{4}s^2$ | $3s$ |

**Height means perpendicular height.** In a triangle or parallelogram, the height is the perpendicular distance from the base to the opposite vertex or side, never a slanted side. In a **right triangle**, the two legs are perpendicular, so they serve as base and height: legs 7 and 24 give an area of $\\frac{1}{2}(7)(24) = 84$. The hypotenuse is not a height for either leg.

**Working backward:** If a rectangle has perimeter 46 and length 15, then $46 = 2(15) + 2w$, so $w = 8$ and the area is 120. Solve for the missing dimension before you multiply.

## Composite Figures

Break a strange shape into rectangles, triangles, and circle pieces, then **add** the pieces or **subtract** a hole.

- **Add:** A shed wall that is a 30-by-12 rectangle topped by a triangle with base 30 and height 8 has area $360 + 120 = 480$.
- **Subtract (shaded region):** whole figure minus the unshaded part. A circle of radius 5 inside a 10-by-10 square leaves $100 - 25\\pi$.
- **Two semicircles = one circle.** A track that is a rectangle with a semicircle on each end of diameter 60 has circular area $\\pi(30)^2 = 900\\pi$, not $1800\\pi$.

**Composite perimeter:** trace only the **outside** edge. A side that is covered by an attached semicircle is no longer on the boundary, and the semicircle contributes half a circumference, $\\pi r$.

## Borders, Frames, and Walkways

A border of width $w$ around a rectangle adds $w$ to **both ends** of each dimension, so each dimension grows by $2w$.

$$\\text{border area} = (\\text{outer rectangle}) - (\\text{inner rectangle})$$

A 24-by-18 garden with a 3-foot walkway all around: outer rectangle $30 \\times 24 = 720$, garden $432$, walkway $288$. Multiplying the garden's perimeter by the width misses the four corner squares.

## Units

| Linear | Square | Cubic |
|--------|--------|-------|
| 1 ft = 12 in | 1 sq ft = 144 sq in | 1 cu ft = 1,728 cu in |
| 1 yd = 3 ft | 1 sq yd = 9 sq ft | 1 cu yd = 27 cu ft |

Convert **lengths first**, then compute area. Tiles that are 6 inches on a side are 0.5 ft by 0.5 ft, so each covers 0.25 sq ft; a 12-by-15 ft floor (180 sq ft) needs $180 \\div 0.25 = 720$ tiles.

## Scaling

If every length of a figure is multiplied by $k$:

| Quantity | Multiplied by |
|----------|---------------|
| Perimeter (any length) | $k$ |
| Area | $k^2$ |

Doubling the side of a square multiplies its area by 4, not 2. (Part 6 adds volume, which scales by $k^3$.)
      `
    },
    {
      id: 'act-pg5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Area and perimeter of a rectangle with a semicircle</b></summary>

A figure is a 20-by-10 rectangle with a semicircle attached outward along one 10-unit side. Find its area and perimeter.

1. Semicircle radius $= 5$. Area $= 200 + \\frac{1}{2}\\pi(25) = 200 + 12.5\\pi$.
2. Perimeter: the covered 10-unit side is gone. Outside edges: $20 + 10 + 20 = 50$, plus the arc $\\frac{1}{2}(2\\pi \\cdot 5) = 5\\pi$.
3. Perimeter $= 50 + 5\\pi$.
</details>

<details>
<summary><b>Example 2: A picture frame</b></summary>

An 8-by-10 inch photo has a 2-inch frame on all sides. Find the frame's area.

1. Outer dimensions: $8 + 4 = 12$ by $10 + 4 = 14$, area 168.
2. Frame $= 168 - 80 = 88$ square inches.

**Trap avoided:** adding only 2 to each dimension (10 by 12) gives $120 - 80 = 40$.
</details>
      `
    },
    {
      id: 'act-pg5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Area Formulas** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A parallelogram has a base of 12, slanted sides of length 7, and a perpendicular height of 5. What is its area?',
            options: ['30', '38', '60', '84'],
            correctAnswer: 2,
            explanation: `Parallelogram area is base × perpendicular height: $12 \\times 5 = 60$. Using the slanted side as the height gives $12 \\times 7 = 84$. The value 30 applies the triangle formula's $\\frac{1}{2}$, and 38 is the perimeter, $2(12 + 7)$.`
          },
          {
            question: 'A square has a perimeter of 36. What is its area?',
            options: ['81', '144', '324', '1,296'],
            correctAnswer: 0,
            explanation: `Each side is $36 \\div 4 = 9$, so the area is $9^2 = 81$. Dividing the perimeter by 3 gives a side of 12 and 144, and dividing by 2 gives a side of 18 and 324. Squaring the perimeter itself gives 1,296.`
          },
          {
            question: 'A rectangular rug measures 3 feet by 4 feet. What is its area in square inches?',
            options: ['12', '84', '144', '1,728'],
            correctAnswer: 3,
            explanation: `Convert the lengths first: 36 inches by 48 inches, so the area is $36 \\times 48 = 1{,}728$ square inches (equivalently $12 \\times 144$). The value 12 is the area in square feet, unconverted. Multiplying 12 square feet by 12 gives 144, which uses the linear conversion for an area. Adding 36 and 48 gives 84, which is half the perimeter in inches.`
          },
          {
            question: 'A rectangle has an area of 30 square units. If its length and width are each multiplied by 3, what is the area of the new rectangle?',
            options: ['90', '180', '270', '810'],
            correctAnswer: 2,
            explanation: `Multiplying every length by 3 multiplies the area by $3^2 = 9$, so the new area is 270. Multiplying the area by 3 gives 90, which only happens if one dimension changes. The value 180 multiplies by 6, and 810 multiplies by $3^3 = 27$, the volume scale factor.`
          }
        ]
      }
    },
    {
      id: 'act-pg5-input1',
      type: 'input-boxes' as const,
      content: `
**Composite Areas** 🧮

1) A trapezoid has bases 5 and 11 and a height of 4. Type its area.

2) A 4-by-2 rectangle is cut out of a 10-by-6 rectangle. Type the area that remains.

3) A figure is a square with side 6 topped by a triangle whose base is the square's top side and whose height is 4. Type the figure's total area.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '52', '48'],
        hint1: 'Average the bases (8) and multiply by the height.',
        hint2: 'Subtract the hole from the whole.',
        hint3: 'Add the square and the triangle.',
        explanation: '1) $\\frac{1}{2}(5 + 11)(4) = 32$. 2) $60 - 8 = 52$. 3) $36 + \\frac{1}{2}(6)(4) = 36 + 12 = 48$.'
      }
    },
    {
      id: 'act-pg5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Rectangle perimeter 30, width 6. Area? | length 9, area 54 |
| 2 | Right triangle, hypotenuse 13, leg 5. Area? | other leg 12, area 30 |
| 3 | 10-by-10 square with a quarter circle of radius 10 removed from one corner. Remaining area? | $100 - 25\\pi$ |
| 4 | A square's side is increased by 50%. By what factor does its area increase? | $1.5^2 = 2.25$ |

**ACT Tip:** For shaded-region questions, write "shaded = whole − unshaded" before touching numbers. The answer choices usually include the unshaded area by itself as a trap.
      `
    },
    {
      id: 'act-pg5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A rectangular pool measures 20 meters by 10 meters. A deck 2 meters wide surrounds the pool on all sides. What is the area of the deck, in square meters?',
            options: ['64', '120', '136', '336'],
            correctAnswer: 2,
            explanation: `The deck adds 2 m on each side, so the outer rectangle is 24 by 14 with area 336, and the deck is $336 - 200 = 136$ square meters. The value 336 is the whole outer rectangle. Multiplying the pool's perimeter (60) by 2 gives 120, which leaves out the four 2-by-2 corners. Adding only 2 m to each dimension (22 by 12) gives $264 - 200 = 64$.`
          },
          {
            question: 'A semicircle with a diameter of 8 is cut out of one 8-unit side of a 12-by-8 rectangle. What is the area of the remaining region?',
            options: ['$96 - 64\\pi$', '$96 - 8\\pi$', '$96 - 16\\pi$', '$96 - 32\\pi$'],
            correctAnswer: 1,
            explanation: `The semicircle has radius 4, so its area is $\\frac{1}{2}\\pi(4^2) = 8\\pi$, leaving $96 - 8\\pi$. Subtracting $16\\pi$ removes a full circle. Using the diameter 8 as the radius gives $\\frac{1}{2}\\pi(64) = 32\\pi$, and making both mistakes (a full circle of radius 8) gives $64\\pi$, more than the whole rectangle.`
          },
          {
            question: 'A figure is a 10-by-6 rectangle with a semicircle attached outward along one of its 6-unit sides. What is the perimeter of the figure?',
            options: ['$26 + 3\\pi$', '$26 + 6\\pi$', '$32 + 3\\pi$', '$32 + 6\\pi$'],
            correctAnswer: 0,
            explanation: `The outside boundary is $10 + 6 + 10 = 26$ (the 6-unit side under the semicircle is inside the figure) plus the arc, $\\frac{1}{2}(2\\pi \\cdot 3) = 3\\pi$, for $26 + 3\\pi$. Choices with 32 also count the covered side. Choices with $6\\pi$ use a full circle's circumference instead of half.`
          },
          {
            question: 'A room measures 9 feet by 12 feet. How many square tiles, each 18 inches on a side, are needed to cover the floor with no gaps or overlaps?',
            options: ['6', '48', '72', '864'],
            correctAnswer: 1,
            explanation: `Each tile is 1.5 ft by 1.5 ft, or 2.25 sq ft, and the floor is 108 sq ft, so $108 \\div 2.25 = 48$ tiles. Dividing by 1.5 forgets to square the tile's side and gives 72. Dividing 108 by 18 mixes feet with inches and gives 6. Dividing the floor's area in square inches (15,552) by 18 instead of by 324 gives 864.`
          }
        ]
      }
    },
    {
      id: 'act-pg5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Memorize the area formulas; the ACT gives no formula sheet. Height is always **perpendicular**; in a right triangle, the **legs** are the base and height.
- Solve for a missing dimension first (from a perimeter or a diagonal), then compute the area.
- **Composite figures:** add pieces or subtract holes; two semicircles make one circle.
- **Composite perimeter:** outside edges only; a semicircle adds $\\pi r$.
- **Borders:** each dimension grows by **twice** the border width; border = outer − inner.
- **Units:** convert lengths before multiplying; 1 sq ft = 144 sq in.
- **Scaling by $k$:** lengths × $k$, areas × $k^2$.
      `
    }
  ]
}
