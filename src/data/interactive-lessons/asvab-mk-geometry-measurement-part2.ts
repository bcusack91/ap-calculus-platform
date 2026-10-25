const mkgmTriangleFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="40,190 280,190 160,30" fill="none" stroke="currentColor" stroke-width="2.5"/><g class="fig-muted" stroke="currentColor" stroke-width="1.5"><line x1="160" y1="30" x2="160" y2="190" stroke-dasharray="5 4"/><path d="M 160 178 L 172 178 L 172 190" fill="none"/></g><text x="160" y="207" font-size="12" fill="currentColor" text-anchor="middle">12 cm</text><text x="90" y="104" font-size="12" fill="currentColor" text-anchor="end">10 cm</text><text x="230" y="104" font-size="12" fill="currentColor">10 cm</text><text x="166" y="132" font-size="12" fill="currentColor">8 cm</text></svg>',
  alt: 'A triangle with a horizontal base labeled 12 cm. The two slanted sides are each labeled 10 cm. A dashed line drops straight down from the top vertex to the base, meeting it at a right angle; the dashed height is labeled 8 cm.',
  caption: 'Figure 1. A triangle with its height drawn as a dashed line.',
  size: 'md' as const,
}

const mkgmParallelogramFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="40,180 220,180 280,100 100,100" fill="none" stroke="currentColor" stroke-width="2.5"/><g class="fig-muted" stroke="currentColor" stroke-width="1.5"><line x1="100" y1="100" x2="100" y2="180" stroke-dasharray="5 4"/><path d="M 100 168 L 112 168 L 112 180" fill="none"/></g><text x="130" y="197" font-size="12" fill="currentColor" text-anchor="middle">9 ft</text><text x="258" y="146" font-size="12" fill="currentColor">5 ft</text><text x="117" y="146" font-size="12" fill="currentColor">4 ft</text></svg>',
  alt: 'A parallelogram leaning to the right. The bottom base is labeled 9 ft. The right slanted side is labeled 5 ft. A dashed line drops straight down from the top-left corner to the base at a right angle; this dashed height is labeled 4 ft.',
  caption: 'Figure 2. A parallelogram with its height drawn as a dashed line.',
  size: 'md' as const,
}

const mkgmTrapezoidFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="41,185 279,185 192,100 90,100" fill="none" stroke="currentColor" stroke-width="2.5"/><g class="fig-muted" stroke="currentColor" stroke-width="1.5"><line x1="90" y1="100" x2="90" y2="185" stroke-dasharray="5 4"/><path d="M 90 173 L 102 173 L 102 185" fill="none"/></g><text x="141" y="92" font-size="12" fill="currentColor" text-anchor="middle">6 in</text><text x="160" y="203" font-size="12" fill="currentColor" text-anchor="middle">14 in</text><text x="96" y="146" font-size="12" fill="currentColor">5 in</text><text x="244" y="140" font-size="12" fill="currentColor">7 in</text></svg>',
  alt: 'A trapezoid with a short top base labeled 6 in and a long bottom base labeled 14 in; the two bases are parallel. A dashed line drops straight down from the top-left corner to the bottom base at a right angle and is labeled 5 in. The right slanted side is labeled 7 in.',
  caption: 'Figure 3. A trapezoid with its height drawn as a dashed line.',
  size: 'md' as const,
}

const mkgmCompositeFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent"><polygon points="50,190 266,190 266,82 194,82 194,28 50,28" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/></g><text x="158" y="207" font-size="12" fill="currentColor" text-anchor="middle">12 m</text><text x="42" y="113" font-size="12" fill="currentColor" text-anchor="end">9 m</text><text x="122" y="22" font-size="12" fill="currentColor" text-anchor="middle">8 m</text><text x="274" y="140" font-size="12" fill="currentColor">6 m</text><text x="230" y="74" font-size="12" fill="currentColor" text-anchor="middle">4 m</text><text x="200" y="58" font-size="12" fill="currentColor">3 m</text></svg>',
  alt: 'A shaded region shaped like a 12 m by 9 m rectangle with a small rectangle cut out of its top-right corner. Every corner is a right angle. Going around: bottom 12 m, right side 6 m, then an inner step 4 m long and 3 m tall, top 8 m, left side 9 m.',
  caption: 'Figure 4. A 12 m by 9 m lot with a 4 m by 3 m corner removed.',
  size: 'md' as const,
}

export const asvabMkGeometryMeasurementPart2Data = {
  topicSlug: 'asvab-mk-geometry-measurement',
  sections: [
    {
      id: 'mkgm2-intro',
      type: 'text' as const,
      content: `# 📏 Area, Volume, Circles and Coordinates

**Part 2 of 7 — Area of Polygons and Composite Figures**

### What Area Measures

**Area** is the number of 1-by-1 squares it takes to cover a flat shape. That is why the answer is always in **square units**: square feet, square meters, square inches.

| Shape | Area formula | What the letters mean |
|:---|:---|:---|
| Rectangle | $A = lw$ | length × width |
| Square | $A = s^2$ | side × side |
| Parallelogram | $A = bh$ | base × height |
| Triangle | $A = \\frac{1}{2}bh$ | half of base × height |
| Trapezoid | $A = \\frac{1}{2}(b_1 + b_2)h$ | half the sum of the two parallel bases, times the height |

### The rule that decides most area questions

The **height** is always measured **straight up from the base, at a right angle**. In a drawing it is usually a dashed line with a small square at the bottom. A slanted side is **not** the height (unless the shape has a right angle there).

Why does a triangle get the $\\frac{1}{2}$? Two copies of any triangle fit together into a parallelogram with the same base and height, so one triangle is half of $bh$.`
    },
    {
      id: 'mkgm2-examples',
      type: 'text' as const,
      content: `## Worked Examples

**1. Rectangle.** A supply room floor is 12 ft by 7 ft.

$A = 12 \\times 7 = 84$ sq ft.

**2. Triangle.** Base 9 in, height 6 in.

$A = \\frac{1}{2}(9)(6) = \\frac{1}{2}(54) = 27$ sq in. Tip: halve whichever number is even first: $9 \\times 3 = 27$.

**3. Parallelogram.** Base 11 m, height 5 m, slanted side 6 m.

$A = bh = 11 \\times 5 = 55$ sq m. The 6 m side is not used.

**4. Trapezoid.** Parallel bases 5 ft and 9 ft, height 4 ft.

Add the bases: $5 + 9 = 14$. Halve: $7$. Multiply by the height: $7 \\times 4 = 28$ sq ft.

**5. Working backward.** A triangle has an area of 30 sq cm and a base of 12 cm. Find the height.

$30 = \\frac{1}{2}(12)h = 6h$, so $h = 5$ cm. Remember to undo the $\\frac{1}{2}$: the height is **not** $30 \\div 12$.

**6. Square from its area.** A square patio covers 64 sq ft. Each side is $\\sqrt{64} = 8$ ft.`
    },
    {
      id: 'mkgm2-mc-triangle',
      type: 'multiple-choice' as const,
      figure: mkgmTriangleFigure,
      content: '**Triangle area.** 🎯 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'What is the area of the triangle?',
            options: ['60 square cm', '96 square cm', '48 square cm', '120 square cm'],
            correctAnswer: 2,
            explanation: 'Use the base and the dashed height, which meet at a right angle: $\\frac{1}{2}(12)(8) = 48$ square cm. $60$ uses the slanted 10 cm side as the height, and $96$ forgets the $\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'mkgm2-mc-parallelogram',
      type: 'multiple-choice' as const,
      figure: mkgmParallelogramFigure,
      content: '**Parallelogram area.** 🎯 Use Figure 2.',
      exercise: {
        questions: [
          {
            question: 'What is the area of the parallelogram?',
            options: ['45 square feet', '36 square feet', '18 square feet', '28 square feet'],
            correctAnswer: 1,
            explanation: '$A = bh = 9 \\times 4 = 36$ square feet. $45$ multiplies by the slanted 5 ft side, $18$ wrongly takes half (that is the triangle rule), and $28$ is the perimeter, $2(9) + 2(5)$.'
          }
        ]
      }
    },
    {
      id: 'mkgm2-mc-trapezoid',
      type: 'multiple-choice' as const,
      figure: mkgmTrapezoidFigure,
      content: '**Trapezoid area.** 🎯 Use Figure 3.',
      exercise: {
        questions: [
          {
            question: 'What is the area of the trapezoid?',
            options: ['70 square inches', '100 square inches', '60 square inches', '50 square inches'],
            correctAnswer: 3,
            explanation: '$\\frac{1}{2}(6 + 14)(5) = \\frac{1}{2}(20)(5) = 50$ square inches. $70$ uses the slanted 7 in side as the height, and $100$ forgets the $\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'mkgm2-composite',
      type: 'text' as const,
      content: `## Composite Figures: Add or Subtract

A **composite figure** is built from shapes you already know. There are two ways in:

- **Add:** cut the figure into rectangles and triangles, find each area, and add.
- **Subtract:** find the area of a big shape and take away the piece that is missing.

### Worked examples

**An L-shaped room.** A room is a 10 ft by 6 ft rectangle with a 4 ft by 2 ft closet corner cut out of it.

Subtract: $10 \\times 6 - 4 \\times 2 = 60 - 8 = 52$ sq ft.

**A picture frame.** An 8 in by 10 in photo sits in a frame whose outside edge is 12 in by 14 in. How much area is the frame itself?

Big minus small: $12 \\times 14 - 8 \\times 10 = 168 - 80 = 88$ sq in.

**A house-shaped sign.** A 6 ft by 4 ft rectangle with a triangle on top: the triangle's base is 6 ft and its height is 3 ft.

Add: $6 \\times 4 + \\frac{1}{2}(6)(3) = 24 + 9 = 33$ sq ft.

> **Key Fact:** Cutting a corner out of a rectangle **lowers the area** but leaves the **perimeter unchanged**: the two inner sides of the cut replace the two outer pieces that were removed.`
    },
    {
      id: 'mkgm2-input-composite',
      type: 'input-boxes' as const,
      figure: mkgmCompositeFigure,
      content: `**A lot with a corner removed.** ✍️ Use Figure 4. Enter numbers only.

**1)** The area of the shaded lot, in square meters:

**2)** The perimeter of the shaded lot, in meters:`,
      exercise: {
        boxes: 2,
        correctAnswers: ['96', '42'],
        hint1: 'Start with the whole 12 by 9 rectangle, then take away the 4 by 3 corner.',
        hint2: 'For the perimeter, add all six sides: 12, 6, 4, 3, 8 and 9.',
        hint3: 'Area: $108 - 12$. Perimeter: same as the full rectangle.',
        explanation: '(1) $12 \\times 9 - 4 \\times 3 = 108 - 12 = 96$ square meters. (2) $12 + 6 + 4 + 3 + 8 + 9 = 42$ m, exactly the perimeter of the full 12 by 9 rectangle, $2(12) + 2(9) = 42$.'
      }
    },
    {
      id: 'mkgm2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick area calculations.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A triangle with base 14 and height 5 has area:',
            options: ['$70$', '$19$', '$35$', '$17.5$'],
            correctAnswer: 2
          },
          {
            label: 'A trapezoid with bases 4 and 10 and height 6 has area:',
            options: ['$84$', '$42$', '$20$', '$240$'],
            correctAnswer: 1
          },
          {
            label: 'A square with area 81 square inches has a side of:',
            options: ['$27$ in', '$40.5$ in', '$9$ in', '$20.25$ in'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$35$', '$42$', '$9$ in'],
        hint1: 'Triangle: half of base times height.',
        hint2: 'Trapezoid: add the bases, halve, multiply by the height.',
        hint3: 'A square\'s side is the square root of its area.',
        explanation: 'Triangle: $\\frac{1}{2}(14)(5) = 35$. Trapezoid: $\\frac{1}{2}(4 + 10)(6) = 7 \\times 6 = 42$. Square: $\\sqrt{81} = 9$ in; $20.25$ is $81 \\div 4$, which would be the side if 81 were the perimeter.'
      }
    },
    {
      id: 'mkgm2-mc-context',
      type: 'multiple-choice' as const,
      content: '**Area in context.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A wall is 15 feet long and 8 feet high. One gallon of paint covers 40 square feet with one coat. How many gallons are needed for one coat?',
            options: ['2 gallons', '3 gallons', '4 gallons', '6 gallons'],
            correctAnswer: 1,
            explanation: 'The wall\'s area is $15 \\times 8 = 120$ square feet, and $120 \\div 40 = 3$ gallons. Using the perimeter, $2(15) + 2(8) = 46$, would mix up a length with an area.'
          },
          {
            question: 'A triangle has an area of 42 square centimeters and a height of 7 centimeters. What is its base?',
            options: ['6 centimeters', '35 centimeters', '3 centimeters', '12 centimeters'],
            correctAnswer: 3,
            explanation: '$42 = \\frac{1}{2}(b)(7)$, so $84 = 7b$ and $b = 12$ cm. $6$ comes from $42 \\div 7$, which forgets to undo the $\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'mkgm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Area is in **square units**: rectangle $lw$, square $s^2$, parallelogram $bh$, triangle $\\frac{1}{2}bh$, trapezoid $\\frac{1}{2}(b_1 + b_2)h$
- The **height** meets the base at a right angle; a slanted side is a trap
- To work backward from a triangle's area, **double** the area before dividing by the base
- Composite figures: **add** the pieces or **subtract** the missing piece
- Cutting a rectangular corner out of a rectangle changes the area, not the perimeter

> **Up Next:** Part 3 — circles: radius, diameter, circumference and area, with answers in terms of $\\pi$.`
    }
  ]
};
