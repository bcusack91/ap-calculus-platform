const mkgmBoxFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"><line x1="60" y1="190" x2="120" y2="145"/><line x1="120" y1="145" x2="280" y2="145"/><line x1="120" y1="145" x2="120" y2="85"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round"><rect x="60" y="130" width="160" height="60"/><polygon points="60,130 120,85 280,85 220,130"/><polygon points="220,130 280,85 280,145 220,190"/></g><text x="140" y="207" font-size="12" fill="currentColor" text-anchor="middle">8 in</text><text x="52" y="164" font-size="12" fill="currentColor" text-anchor="end">3 in</text><text x="258" y="182" font-size="12" fill="currentColor">5 in</text></svg>',
  alt: 'A closed rectangular box drawn in three dimensions. The front edge along the bottom is labeled 8 in (length), the vertical front edge is labeled 3 in (height), and the edge running back along the bottom right is labeled 5 in (width). Hidden back edges are dashed.',
  caption: 'Figure 1. A closed box, 8 in long, 5 in wide and 3 in tall.',
  size: 'md' as const,
}

const mkgmCylinderFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" fill="none"><path d="M 100 180 A 60 15 0 0 1 220 180"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><ellipse cx="160" cy="50" rx="60" ry="15"/><line x1="100" y1="50" x2="100" y2="180"/><line x1="220" y1="50" x2="220" y2="180"/><path d="M 100 180 A 60 15 0 0 0 220 180"/></g><g class="fig-accent"><line x1="160" y1="50" x2="220" y2="50" stroke="currentColor" stroke-width="2.5"/></g><circle cx="160" cy="50" r="3" fill="currentColor"/><text x="190" y="44" font-size="12" fill="currentColor" text-anchor="middle">3 cm</text><text x="228" y="120" font-size="12" fill="currentColor">10 cm</text></svg>',
  alt: 'A closed cylinder standing upright. A radius drawn on the top circle, from the center to the edge, is labeled 3 cm. The height of the cylinder, along its right side, is labeled 10 cm.',
  caption: 'Figure 2. A closed cylinder with radius 3 cm and height 10 cm.',
  size: 'md' as const,
}

export const asvabMkGeometryMeasurementPart4Data = {
  topicSlug: 'asvab-mk-geometry-measurement',
  sections: [
    {
      id: 'mkgm4-intro',
      type: 'text' as const,
      content: `# 📏 Area, Volume, Circles and Coordinates

**Part 4 of 7 — Volume and Surface Area**

### Two Different Questions About a Solid

- **Volume** is how much space the solid fills: how many 1-by-1-by-1 cubes fit inside. Units are **cubic**: cubic feet (cu ft), cubic centimeters.
- **Surface area** is the total area of all the outside faces: how much paint or wrapping it takes. Units are **square**.

| Solid | Volume | Surface area |
|:---|:---|:---|
| Rectangular solid (box) | $V = lwh$ | $SA = 2lw + 2lh + 2wh$ |
| Cube (edge $s$) | $V = s^3$ | $SA = 6s^2$ |
| Cylinder | $V = \\pi r^2 h$ | $SA = 2\\pi r^2 + 2\\pi r h$ |

### Where the formulas come from

Every one of these volumes is **(area of the base) × (height)**. A box's base is a rectangle, $lw$; a cylinder's base is a circle, $\\pi r^2$.

A box has 6 faces in 3 matching pairs: top and bottom ($lw$ each), front and back ($lh$ each), left and right ($wh$ each). A cube's 6 faces are all $s^2$.

A cylinder's surface is two circles ($\\pi r^2$ each) plus the curved side. Unroll the side and it becomes a rectangle: one side is the height $h$, the other is the circumference $2\\pi r$. So the side's area is $2\\pi r h$.`
    },
    {
      id: 'mkgm4-examples',
      type: 'text' as const,
      content: `## Worked Examples

**1. A footlocker.** 3 ft long, 2 ft wide, 1.5 ft tall.

$V = 3 \\times 2 \\times 1.5 = 6 \\times 1.5 = 9$ cu ft.

**2. A cube with edge 4 cm.**

$V = 4^3 = 64$ cubic cm and $SA = 6 \\times 4^2 = 6 \\times 16 = 96$ square cm.

**3. A cylinder with radius 2 m and height 5 m.**

$V = \\pi(2^2)(5) = 20\\pi$ cubic m. $SA = 2\\pi(2^2) + 2\\pi(2)(5) = 8\\pi + 20\\pi = 28\\pi$ square m.

**4. Working backward.** A box holds 96 cubic in. It is 8 in long and 4 in wide. How tall is it?

$96 = 8 \\times 4 \\times h = 32h$, so $h = 3$ in.

**5. Cubic yards.** A concrete slab is 9 ft by 6 ft by 0.5 ft: $V = 27$ cu ft. Since 1 cu yd $= 3 \\times 3 \\times 3 = 27$ cu ft, that is exactly **1 cubic yard**.

**6. Scaling.** If every edge of a cube is doubled, each face's area is multiplied by $2^2 = 4$ and the volume by $2^3 = 8$.

> **Key Fact:** Read the question for the word that matters: **holds, fills, capacity** → volume. **Paint, cover, wrap** → surface area.`
    },
    {
      id: 'mkgm4-mc-box',
      type: 'multiple-choice' as const,
      figure: mkgmBoxFigure,
      content: '**Volume of a box.** 🎯 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'What is the volume of the box?',
            options: ['16 cubic inches', '158 cubic inches', '120 cubic inches', '40 cubic inches'],
            correctAnswer: 2,
            explanation: '$V = lwh = 8 \\times 5 \\times 3 = 120$ cubic inches. $16$ adds the edges, $158$ is the surface area, and $40$ is only the area of the bottom face.'
          }
        ]
      }
    },
    {
      id: 'mkgm4-input-box-sa',
      type: 'input-boxes' as const,
      figure: mkgmBoxFigure,
      content: `**Surface area of the box.** ✍️ Use Figure 1. Enter numbers only.

**1)** The area of the top face (8 in by 5 in), in square inches:

**2)** The area of the front face (8 in by 3 in), in square inches:

**3)** The total surface area of the closed box, in square inches:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '24', '158'],
        hint1: 'Top: length × width.',
        hint2: 'Front: length × height.',
        hint3: 'There are two of each face: $2(40) + 2(24) + 2(5 \\times 3)$.',
        explanation: '(1) $8 \\times 5 = 40$. (2) $8 \\times 3 = 24$. (3) The side faces are $5 \\times 3 = 15$ each, so $SA = 2(40) + 2(24) + 2(15) = 80 + 48 + 30 = 158$ square inches.'
      }
    },
    {
      id: 'mkgm4-mc-cylinder',
      type: 'multiple-choice' as const,
      figure: mkgmCylinderFigure,
      content: '**Volume of a cylinder.** 🎯 Use Figure 2.',
      exercise: {
        questions: [
          {
            question: 'What is the volume of the cylinder, in terms of $\\pi$?',
            options: ['$90\\pi$ cubic cm', '$300\\pi$ cubic cm', '$60\\pi$ cubic cm', '$30\\pi$ cubic cm'],
            correctAnswer: 0,
            explanation: '$V = \\pi r^2 h = \\pi(3^2)(10) = 90\\pi$ cubic cm. $300\\pi$ swaps the radius and the height ($\\pi \\cdot 10^2 \\cdot 3$), $60\\pi$ is the area of the curved side, and $30\\pi$ forgets to square the radius.'
          }
        ]
      }
    },
    {
      id: 'mkgm4-input-cylinder-sa',
      type: 'input-boxes' as const,
      figure: mkgmCylinderFigure,
      content: `**Surface area of the cylinder.** ✍️ Use Figure 2. Enter the number in front of $\\pi$.

**1)** The area of the curved side is ___$\\pi$ square cm:

**2)** The total surface area of the closed cylinder is ___$\\pi$ square cm:`,
      exercise: {
        boxes: 2,
        correctAnswers: ['60', '78'],
        hint1: 'The curved side unrolls into a rectangle: circumference × height.',
        hint2: 'Circumference $= 2\\pi(3) = 6\\pi$.',
        hint3: 'Add the top and bottom circles, $\\pi(3^2)$ each.',
        explanation: '(1) Side $= 2\\pi r h = 2\\pi(3)(10) = 60\\pi$. (2) The two circles add $2\\pi(3^2) = 18\\pi$, so $SA = 60\\pi + 18\\pi = 78\\pi$ square cm.'
      }
    },
    {
      id: 'mkgm4-dropdown-cube',
      type: 'dropdown-select' as const,
      content: '**Cubes.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A cube has a volume of 27 cubic feet. Each edge is:',
            options: ['$9$ ft', '$3$ ft', '$13.5$ ft', '$6$ ft'],
            correctAnswer: 1
          },
          {
            label: 'The surface area of the cube with volume 27 cubic feet is:',
            options: ['$27$ sq ft', '$36$ sq ft', '$162$ sq ft', '$54$ sq ft'],
            correctAnswer: 3
          },
          {
            label: 'A cube with 5 in edges has a volume of:',
            options: ['$125$ cu in', '$25$ cu in', '$150$ cu in', '$15$ cu in'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$3$ ft', '$54$ sq ft', '$125$ cu in'],
        hint1: 'Which number times itself three times makes 27?',
        hint2: 'Six faces, each $3 \\times 3$.',
        hint3: '$5 \\times 5 \\times 5$.',
        explanation: '$3 \\times 3 \\times 3 = 27$, so the edge is 3 ft ($9$ is $27 \\div 3$, not a cube root). Surface area $= 6 \\times 3^2 = 54$ sq ft; $162$ uses $6 \\times 27$, mixing volume into the area. A 5 in cube holds $5^3 = 125$ cu in; $150$ is its surface area.'
      }
    },
    {
      id: 'mkgm4-mc-context',
      type: 'multiple-choice' as const,
      content: '**Volume in context.** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many 1-inch cubes fit exactly inside a box that is 4 inches by 3 inches by 2 inches?',
            options: ['9', '24', '52', '12'],
            correctAnswer: 1,
            explanation: 'Each 1-inch cube is 1 cubic inch, so the count is the volume: $4 \\times 3 \\times 2 = 24$. $9$ adds the edges, $52$ is the surface area, and $12$ fills only one layer.'
          },
          {
            question: 'Every edge of a cube is tripled. Its volume is multiplied by:',
            options: ['3', '9', '6', '27'],
            correctAnswer: 3,
            explanation: 'Volume uses three edges multiplied together, so it grows by $3 \\times 3 \\times 3 = 27$. $9$ is how much each face\'s area grows, and $3$ is how much each edge grows.'
          },
          {
            question: 'A trench is dug 9 feet long, 3 feet wide and 2 feet deep. How many cubic yards of dirt are removed?',
            options: ['6 cubic yards', '2 cubic yards', '18 cubic yards', '54 cubic yards'],
            correctAnswer: 1,
            explanation: '$9 \\times 3 \\times 2 = 54$ cubic feet, and 1 cubic yard is 27 cubic feet, so $54 \\div 27 = 2$ cubic yards. Dividing by 9 (the square-yard number) gives $6$, and dividing by 3 gives $18$.'
          }
        ]
      }
    },
    {
      id: 'mkgm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Volume** = base area × height: box $lwh$, cube $s^3$, cylinder $\\pi r^2 h$ (cubic units)
- **Surface area** = sum of all faces: box $2lw + 2lh + 2wh$, cube $6s^2$, cylinder $2\\pi r^2 + 2\\pi r h$ (square units)
- The curved side of a cylinder unrolls into a rectangle: circumference × height
- 1 cu yd = 27 cu ft (not 9, not 3)
- Scale every length by $k$: areas grow by $k^2$, volumes by $k^3$
- Holds or fills → volume; paint or wrap → surface area

> **Up Next:** Part 5 — the coordinate plane: points, slope, midpoint and distance.`
    }
  ]
};
