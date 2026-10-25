const mkgmLShapeFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="60,190 260,190 260,130 140,130 140,30 60,30" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="160" y="207" font-size="12" fill="currentColor" text-anchor="middle">10 ft</text><text x="52" y="114" font-size="12" fill="currentColor" text-anchor="end">8 ft</text><text x="100" y="22" font-size="12" fill="currentColor" text-anchor="middle">4 ft</text><text x="268" y="164" font-size="12" fill="currentColor">3 ft</text><g class="fig-accent-2"><text x="200" y="122" font-size="13" fill="currentColor" text-anchor="middle">?</text><text x="148" y="84" font-size="13" fill="currentColor">?</text></g></svg>',
  alt: 'An L-shaped figure in which every corner is a right angle. The bottom side is 10 ft long and the left side is 8 ft tall. The top side is 4 ft long. On the right end, the short vertical side is 3 ft tall. The two inner sides of the step, one horizontal and one vertical, are marked with question marks and have no labels.',
  caption: 'Figure 1. An L-shaped storage pad. Every corner is a right angle.',
  size: 'md' as const,
}

export const asvabMkGeometryMeasurementPart1Data = {
  topicSlug: 'asvab-mk-geometry-measurement',
  sections: [
    {
      id: 'mkgm1-intro',
      type: 'text' as const,
      content: `# 📏 Area, Volume, Circles and Coordinates

**Part 1 of 7 — Measurement on the ASVAB: Perimeter and Formulas**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Measurement on the ASVAB: perimeter and formulas** |
| 2 | Area of polygons and composite figures |
| 3 | Circles: circumference and area |
| 4 | Volume and surface area |
| 5 | The coordinate plane: slope, midpoint and distance |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What This Looks Like on the ASVAB

**Mathematics Knowledge (MK)** is the fifth subtest on the CAT-ASVAB: **15 scored questions in 31 minutes**, so you have about **2 minutes per question**. Every question has **four answer choices**, and there is **no calculator**. At MEPS you get two sheets of scratch paper and two pencils, and you can ask for more.

MK is one of the four subtests in your **AFQT** score (AR + MK + 2·VE), the score the military uses to check whether you are eligible to enlist. It also feeds several job line scores, such as the Air Force A and E composites.

Measurement questions are some of the most predictable points on MK. Expect questions that ask you to:

- find the **perimeter** or **area** of a shape that is drawn or described
- find the **circumference** or **area of a circle**, often with the answer written "in terms of $\\pi$"
- find the **volume** of a box or cylinder (the official sample questions include the volume of a rectangular solid and the area of a square)
- work on the **coordinate plane**: slope, midpoint and distance

> **Key Fact:** Plan on having no formulas given to you: learn the formulas on the next screen by heart. Once you know them, most of these questions take one or two steps.`
    },
    {
      id: 'mkgm1-formulas',
      type: 'text' as const,
      content: `## The Measurement Formulas to Memorize

### Perimeter and area

| Shape | Perimeter | Area |
|:---|:---|:---|
| Rectangle (length $l$, width $w$) | $P = 2l + 2w$ | $A = lw$ |
| Square (side $s$) | $P = 4s$ | $A = s^2$ |
| Triangle (base $b$, height $h$) | add the three sides | $A = \\frac{1}{2}bh$ |
| Parallelogram (base $b$, height $h$) | add the four sides | $A = bh$ |
| Trapezoid (parallel bases $b_1$, $b_2$, height $h$) | add the four sides | $A = \\frac{1}{2}(b_1 + b_2)h$ |
| Circle (radius $r$, diameter $d = 2r$) | $C = 2\\pi r = \\pi d$ | $A = \\pi r^2$ |

### Volume and surface area

| Solid | Volume | Surface area |
|:---|:---|:---|
| Rectangular solid (box) | $V = lwh$ | $SA = 2lw + 2lh + 2wh$ |
| Cube (edge $s$) | $V = s^3$ | $SA = 6s^2$ |
| Cylinder (radius $r$, height $h$) | $V = \\pi r^2 h$ | $SA = 2\\pi r^2 + 2\\pi r h$ |

### The coordinate plane

| Idea | Formula |
|:---|:---|
| Slope through $(x_1, y_1)$ and $(x_2, y_2)$ | $m = \\frac{y_2 - y_1}{x_2 - x_1}$ |
| Slope-intercept form of a line | $y = mx + b$ |
| Midpoint | $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$ |
| Distance | $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |

### Units

| Length | Area | Volume |
|:---|:---|:---|
| 1 ft = 12 in | 1 sq ft = 144 sq in | 1 cu ft = 1,728 cu in |
| 1 yd = 3 ft | 1 sq yd = 9 sq ft | 1 cu yd = 27 cu ft |

Perimeter is a **length** (ft), area is in **square units** (sq ft), and volume is in **cubic units** (cu ft).`
    },
    {
      id: 'mkgm1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Three quick ones to see where you stand. No calculator.',
      exercise: {
        questions: [
          {
            question: 'A rectangle is 9 inches long and 4 inches wide. What is its perimeter?',
            options: ['13 inches', '26 inches', '36 inches', '22 inches'],
            correctAnswer: 1,
            explanation: '$P = 2(9) + 2(4) = 18 + 8 = 26$ inches. $36$ is the area ($9 \\times 4$), not the distance around, and $13$ adds only one length and one width.'
          },
          {
            question: 'A square has sides 7 centimeters long. What is its area?',
            options: ['28 square centimeters', '14 square centimeters', '49 square centimeters', '21 square centimeters'],
            correctAnswer: 2,
            explanation: '$A = s^2 = 7^2 = 49$ square centimeters. $28$ is the perimeter ($4 \\times 7$) and $14$ is $7 \\times 2$, not $7 \\times 7$.'
          },
          {
            question: 'A box is 2 feet by 3 feet by 4 feet. What is its volume?',
            options: ['9 cubic feet', '52 cubic feet', '26 cubic feet', '24 cubic feet'],
            correctAnswer: 3,
            explanation: '$V = lwh = 2 \\times 3 \\times 4 = 24$ cubic feet. $9$ adds the edges instead of multiplying, and $52$ is the surface area, $2(6 + 8 + 12)$.'
          }
        ]
      }
    },
    {
      id: 'mkgm1-perimeter',
      type: 'text' as const,
      content: `## Perimeter: The Distance Around

**Perimeter** is the total length of the boundary. For any polygon, **add the lengths of all the sides**. The formulas are shortcuts for that:

- **Rectangle:** two lengths and two widths, $P = 2l + 2w$
- **Square:** four equal sides, $P = 4s$
- **Regular polygon** (all sides equal): number of sides × side length

### Worked examples

**1. Fencing a yard.** A rectangular storage yard is 45 ft by 30 ft. How much fence goes around it?

$P = 2(45) + 2(30) = 90 + 60 = 150$ ft.

**2. Working backward from the perimeter.** A rectangle has a perimeter of 50 m and a length of 15 m. Find the width.

The two lengths use $2 \\times 15 = 30$ m, which leaves $50 - 30 = 20$ m for the two widths, so $w = 10$ m.

**3. A regular hexagon.** Each of the 6 sides is 8 in, so $P = 6 \\times 8 = 48$ in.

**4. Square from its perimeter.** A square has perimeter 36 ft, so each side is $36 \\div 4 = 9$ ft (and its area is $9^2 = 81$ sq ft).

### Shapes with all right angles

When every corner of a shape is a right angle (an L-shape or a step shape), you can find missing sides with one idea: **the short pieces on one side add up to the long side across from them.**

Example: an L-shape has a bottom of 12 ft and a left side of 7 ft. The horizontal pieces across the top must add up to 12 ft, and the vertical pieces on the right must add up to 7 ft. So the perimeter is the same as a 12 by 7 rectangle:

$P = 2(12) + 2(7) = 38$ ft.

> **Key Fact:** Perimeter never uses multiplication of two sides. If you multiplied a length by a width, you found an **area**.`
    },
    {
      id: 'mkgm1-dropdown-lshape',
      type: 'dropdown-select' as const,
      figure: mkgmLShapeFigure,
      content: '**Find the missing sides.** 🔽 Use the figure. Every corner is a right angle.',
      exercise: {
        dropdowns: [
          {
            label: 'The horizontal side marked ? is:',
            options: ['4 ft', '14 ft', '6 ft', '10 ft'],
            correctAnswer: 2
          },
          {
            label: 'The vertical side marked ? is:',
            options: ['5 ft', '11 ft', '3 ft', '8 ft'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['6 ft', '5 ft'],
        hint1: 'The two horizontal sides on top must add up to the 10 ft bottom.',
        hint2: 'The two vertical sides on the right must add up to the 8 ft left side.',
        hint3: '$10 - 4$ and $8 - 3$.',
        explanation: 'Across the top, $4 + ? = 10$, so the inner horizontal side is $6$ ft. Down the right, $3 + ? = 8$, so the inner vertical side is $5$ ft. Adding instead of subtracting gives $14$ and $11$, which are longer than the whole shape.'
      }
    },
    {
      id: 'mkgm1-mc-lshape',
      type: 'multiple-choice' as const,
      figure: mkgmLShapeFigure,
      content: '**Perimeter of the pad.** 🎯 Use the figure.',
      exercise: {
        questions: [
          {
            question: 'What is the perimeter of the L-shaped pad?',
            options: ['25 ft', '50 ft', '30 ft', '36 ft'],
            correctAnswer: 3,
            explanation: 'The sides are $10 + 3 + 6 + 5 + 4 + 8 = 36$ ft, the same as a 10 by 8 rectangle: $2(10) + 2(8) = 36$. Adding only the four labeled sides gives $25$, and $50$ is the area ($10 \\times 3 + 4 \\times 5$).'
          }
        ]
      }
    },
    {
      id: 'mkgm1-mc-units',
      type: 'multiple-choice' as const,
      content: '**Perimeter in context.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangle has a perimeter of 40 meters and a width of 8 meters. What is its length?',
            options: ['24 meters', '5 meters', '32 meters', '12 meters'],
            correctAnswer: 3,
            explanation: 'The two widths use $2 \\times 8 = 16$ m, leaving $40 - 16 = 24$ m for the two lengths, so each length is $12$ m. $24$ forgets to split between the two lengths, and $32$ subtracts only one width.'
          },
          {
            question: 'Each side of a regular pentagon is 11 inches. What is its perimeter?',
            options: ['55 inches', '44 inches', '66 inches', '121 inches'],
            correctAnswer: 0,
            explanation: 'A pentagon has 5 equal sides: $5 \\times 11 = 55$ inches. $44$ and $66$ count 4 or 6 sides, and $121$ is $11^2$.'
          },
          {
            question: 'Which measurement tells you how much edging you need to go around a flower bed?',
            options: ['The area in square feet', 'The volume in cubic feet', 'The perimeter in feet', 'The diagonal in feet'],
            correctAnswer: 2,
            explanation: 'Edging runs along the boundary, so you need the distance around: the perimeter, a length in feet. Area (square feet) measures the ground inside, and volume measures space a solid fills.'
          }
        ]
      }
    },
    {
      id: 'mkgm1-input',
      type: 'input-boxes' as const,
      content: `**Perimeter practice.** ✍️ Enter numbers only.

**1)** The perimeter, in centimeters, of a rectangle 14 cm long and 6 cm wide:

**2)** A square has a perimeter of 52 m. The length of one side, in meters:

**3)** An equilateral triangle (three equal sides) has a perimeter of 27 ft. The length of one side, in feet:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '13', '9'],
        hint1: '$2(14) + 2(6)$.',
        hint2: 'A square has 4 equal sides.',
        hint3: 'An equilateral triangle has 3 equal sides.',
        explanation: '(1) $2(14) + 2(6) = 28 + 12 = 40$ cm. (2) $52 \\div 4 = 13$ m. (3) $27 \\div 3 = 9$ ft.'
      }
    },
    {
      id: 'mkgm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- MK on the CAT-ASVAB: **15 questions, 31 minutes**, about 2 minutes each, four choices, **no calculator**
- Memorize the formula tables: no formulas are handed to you
- **Perimeter** = add every side; rectangle $2l + 2w$, square $4s$, regular polygon $n \\times s$
- Work backward: subtract what you know from the perimeter, then divide
- In an all-right-angle shape, the short pieces on one side add up to the long side across from them
- Perimeter is in plain units (ft), area in square units, volume in cubic units

> **Up Next:** Part 2 — area of rectangles, triangles, parallelograms, trapezoids and shapes built from them.`
    }
  ]
};
