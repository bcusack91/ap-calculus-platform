export const satGeometryPart3Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo3-intro',
      type: 'text' as const,
      content: `# Area, Perimeter, and Quadrilaterals

**Part 3 of 7 — Polygons and Their Properties**

### Essential Area Formulas

| Shape | Area | Perimeter |
|---|---|---|
| Rectangle | $A = lw$ | $P = 2l + 2w$ |
| Square | $A = s^2$ | $P = 4s$ |
| Triangle | $A = \\frac{1}{2}bh$ | $P = a + b + c$ |
| Parallelogram | $A = bh$ | $P = 2a + 2b$ |
| Trapezoid | $A = \\frac{1}{2}(b_1 + b_2)h$ | Sum of all sides |

### Key Insight: Height ≠ Side Length

The **height** (altitude) is the **perpendicular** distance from base to top. In non-right triangles and parallelograms, the height is NOT the same as a side length.

### Coordinate Geometry Areas

For a rectangle or right triangle on the coordinate plane:
- Find the lengths of the sides using the distance formula or by counting grid units
- Apply the appropriate area formula

### Shaded Region Problems

**Strategy:**
$$\\text{Shaded area} = \\text{Total area} - \\text{Unshaded area}$$

**Example:** A circle of radius 5 is inscribed in a square. Find the shaded area (corners).

- Square area: $(2 \\times 5)^2 = 100$
- Circle area: $\\pi(5)^2 = 25\\pi \\approx 78.54$
- Shaded area: $100 - 25\\pi \\approx 21.46$

### SAT Trap ⚠️

In "shaded region" problems, make sure you subtract the RIGHT shape. Draw the overlapping shapes clearly and label dimensions.`
    },
    {
      id: 'geo3-quiz',
      type: 'multiple-choice' as const,
      content: '**Area & Perimeter Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A trapezoid has parallel sides of length 8 and 14, with a height of 6. What is its area?',
            options: ['$66$', '$84$', '$48$', '$132$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}(b_1 + b_2)h = \\frac{1}{2}(8 + 14)(6) = \\frac{1}{2}(22)(6) = 66$.'
          },
          {
            question: 'A rectangle has area 48 and width 6. What is its perimeter?',
            options: ['$28$', '$24$', '$20$', '$54$'],
            correctAnswer: 0,
            explanation: 'Length $= 48 ÷ 6 = 8$. Perimeter $= 2(8) + 2(6) = 16 + 12 = 28$.'
          },
          {
            question: 'A square has a diagonal of $6\\sqrt{2}$. What is its area?',
            options: ['$36$', '$72$', '$18$', '$6$'],
            correctAnswer: 0,
            explanation: 'The diagonal of a square with side $s$ is $s\\sqrt{2}$. So $s\\sqrt{2} = 6\\sqrt{2}$, meaning $s = 6$. Area $= 6^2 = 36$.'
          }
        ]
      }
    }
  ]
};