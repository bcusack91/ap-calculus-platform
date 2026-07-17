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
    },
    {
      id: 'geo3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Complex Area Problems

### Worked Example 1: Multi-Shape Shaded Region

| Step | Work |
|---|---|
| **Problem** | A square with side 10 contains an inscribed circle. A smaller square is inscribed inside the circle. Find the area between the two squares. |
| **Large square** | Area $= 10^2 = 100$ |
| **Circle** | Diameter $= 10$, so $r = 5$. Area $= 25\\pi$ (for reference) |
| **Small square** | Its diagonal $=$ circle diameter $= 10$. Side $= \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$. Area $= (5\\sqrt{2})^2 = 50$ |
| **Between squares** | $100 - 50 = 50$ square units |

### Worked Example 2: Coordinate Plane Area

| Step | Work |
|---|---|
| **Problem** | Find the area of the triangle with vertices $A(1, 2)$, $B(7, 2)$, $C(4, 8)$. |
| **Find base** | $AB$ is horizontal: length $= 7 - 1 = 6$ |
| **Find height** | $C$ is above $AB$: height $= 8 - 2 = 6$ |
| **Area** | $\\frac{1}{2}(6)(6) = 18$ |

> **Coordinate area shortcut:** When one side is horizontal or vertical, use it as the base — the height is just the perpendicular distance.

### Height vs. Slant Side — The #1 Trap

| Shape | Height is... | NOT the height |
|---|---|---|
| Triangle | Perpendicular from base to opposite vertex | A non-perpendicular side |
| Parallelogram | Perpendicular distance between parallel sides | The slanted side |
| Trapezoid | Perpendicular between the two parallel bases | The slanted legs |

**SAT trap:** A parallelogram has sides 8 and 5 with a height of 4. Area $= 8 \\times 4 = 32$ (NOT $8 \\times 5 = 40$).`
    },
    {
      id: 'geo3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Area & Perimeter Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A semicircle has diameter 12. What is its total perimeter (flat edge + curved edge)?',
            options: ['$12 + 6\\pi$', '$6\\pi$', '$12\\pi$', '$24 + 12\\pi$'],
            correctAnswer: 0,
            explanation: 'Curved edge $= \\frac{1}{2} \\times 2\\pi(6) = 6\\pi$. Flat edge $= 12$. Total perimeter $= 12 + 6\\pi$.'
          },
          {
            question: 'A right triangle has legs 6 and 8. A square is drawn on each leg and on the hypotenuse. What is the total area of all three squares?',
            options: ['$200$', '$136$', '$100$', '$164$'],
            correctAnswer: 0,
            explanation: 'Hypotenuse $= \\sqrt{36 + 64} = 10$. Squares: $6^2 + 8^2 + 10^2 = 36 + 64 + 100 = 200$. (By the Pythagorean theorem, $36 + 64 = 100$, so total $= 2 \\times 100 = 200$.)'
          },
          {
            question: 'A parallelogram has base 15, slant side 10, and height 8. What is its area?',
            options: ['$120$', '$150$', '$80$', '$250$'],
            correctAnswer: 0,
            explanation: 'Area of a parallelogram $= \\text{base} \\times \\text{height} = 15 \\times 8 = 120$. The slant side is a distractor — only the perpendicular height matters.'
          }
        ]
      }
    },
    {
      id: 'geo3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the Right Formula** — Select the correct area formula for each shape.',
      exercise: {
        dropdowns: [
          'Triangle with base b and height h → [½bh|bh|$\\tfrac{1}{2} (b_{1} + b_{2})h$|$s^{2}$]',
          'Parallelogram with base b and height h → [bh|½bh|2(b + h)|$b^{2}$]',
          'Trapezoid with parallel sides $b_{1}$, $b_{2}$ and height h → [$\\tfrac{1}{2} (b_{1} + b_{2})h$|$b_{1}$ × $b_{2}$ × h|bh|$(b_{1} + b_{2})h$]',
          'Shaded region (large shape minus small shape) → [Total − Unshaded|Total + Unshaded|Total × Unshaded|Total ÷ Unshaded]'
        ],
        correctAnswers: ['½bh', 'bh', '$\\tfrac{1}{2} (b_{1} + b_{2})h$', 'Total − Unshaded'],
        hint1: 'Triangle area always has the ½ factor.',
        hint2: 'Parallelogram is like a rectangle — base times height.',
        hint3: 'Trapezoid averages the two parallel bases, then multiplies by height.',
        explanation: 'Triangle: ½bh. Parallelogram: bh (not ½bh). Trapezoid: $\\tfrac{1}{2} (b_{1} + b_{2})h$ — think of it as average base × height. Shaded region: always subtract the unshaded part from the total.'
      }
    },
    {
      id: 'geo3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary: Area & Perimeter

| Shape | Area | Perimeter |
|---|---|---|
| Triangle | $\\frac{1}{2}bh$ | $a + b + c$ |
| Rectangle | $lw$ | $2l + 2w$ |
| Square | $s^2$ | $4s$; diagonal $= s\\sqrt{2}$ |
| Parallelogram | $bh$ (NOT side × side) | $2a + 2b$ |
| Trapezoid | $\\frac{1}{2}(b_1 + b_2)h$ | Sum of all sides |

### Key Strategies
- **Shaded regions:** Total area − unshaded area. Draw and label clearly.
- **Coordinate plane:** Use horizontal/vertical sides as base when possible.
- **Height trap:** Always use the PERPENDICULAR height, not the slant side.

*Next: Circle geometry — arcs, sectors, and central angles →*`
    }
  ]
};