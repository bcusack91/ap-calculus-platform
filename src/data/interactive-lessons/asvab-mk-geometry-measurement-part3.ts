const mkgmRadiusFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="160" cy="110" r="85" fill="none" stroke="currentColor" stroke-width="2.5"/><g class="fig-accent"><line x1="160" y1="110" x2="245" y2="110" stroke="currentColor" stroke-width="2.5"/></g><circle cx="160" cy="110" r="3.5" fill="currentColor"/><text x="202" y="102" font-size="12" fill="currentColor" text-anchor="middle">7 cm</text><text x="156" y="128" font-size="12" fill="currentColor" text-anchor="end">O</text></svg>',
  alt: 'A circle with center O. A segment from the center O to a point on the circle, a radius, is labeled 7 cm.',
  caption: 'Figure 1. A circle with center $O$ and radius 7 cm.',
  size: 'sm' as const,
}

const mkgmDiameterFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="160" cy="110" r="85" fill="none" stroke="currentColor" stroke-width="2.5"/><g class="fig-accent"><line x1="75" y1="110" x2="245" y2="110" stroke="currentColor" stroke-width="2.5"/></g><circle cx="160" cy="110" r="3.5" fill="currentColor"/><text x="160" y="100" font-size="12" fill="currentColor" text-anchor="middle">10 in</text></svg>',
  alt: 'A circle with a segment drawn all the way across it through the center, a diameter, labeled 10 in.',
  caption: 'Figure 2. A circular cover with a diameter of 10 in.',
  size: 'sm' as const,
}

const mkgmSquareCircleFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent"><rect x="80" y="30" width="160" height="160" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/></g><circle class="fig-bg" cx="160" cy="110" r="80" stroke="currentColor" stroke-width="2"/><text x="160" y="207" font-size="12" fill="currentColor" text-anchor="middle">8 cm</text><text x="160" y="114" font-size="11" fill="currentColor" text-anchor="middle">not shaded</text></svg>',
  alt: 'A square with sides of 8 cm. A circle is drawn inside it, touching the middle of all four sides. The four corner regions inside the square but outside the circle are shaded; the inside of the circle is not shaded.',
  caption: 'Figure 3. A circle that just fits inside an 8 cm square. The corners are shaded.',
  size: 'sm' as const,
}

const mkgmWindowFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent"><path d="M 100 190 L 220 190 L 220 110 A 60 60 0 0 0 100 110 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/></g><g class="fig-muted"><line x1="100" y1="110" x2="220" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/></g><text x="160" y="207" font-size="12" fill="currentColor" text-anchor="middle">6 ft</text><text x="92" y="154" font-size="12" fill="currentColor" text-anchor="end">4 ft</text></svg>',
  alt: 'A window shaped like a rectangle 6 ft wide and 4 ft tall with a half circle sitting on top. The flat side of the half circle is the 6 ft top edge of the rectangle, shown as a dashed line.',
  caption: 'Figure 4. A window: a 6 ft by 4 ft rectangle topped by a half circle.',
  size: 'sm' as const,
}

export const asvabMkGeometryMeasurementPart3Data = {
  topicSlug: 'asvab-mk-geometry-measurement',
  sections: [
    {
      id: 'mkgm3-intro',
      type: 'text' as const,
      content: `# 📏 Area, Volume, Circles and Coordinates

**Part 3 of 7 — Circles: Circumference and Area**

### The Parts of a Circle

- The **radius** $r$ runs from the center to the circle.
- The **diameter** $d$ runs all the way across through the center: $d = 2r$, and $r = \\frac{d}{2}$.
- The **circumference** $C$ is the distance around the circle (its perimeter).
- $\\pi$ (pi) is the number you get when you divide any circle's circumference by its diameter. It is a little more than 3: about $3.14$, or $\\frac{22}{7}$.

| Measure | Formula | Units |
|:---|:---|:---|
| Circumference | $C = 2\\pi r = \\pi d$ | length (in, ft) |
| Area | $A = \\pi r^2$ | square units (sq in, sq ft) |

### "In terms of $\\pi$"

Many ASVAB answer choices look like $16\\pi$ or $64 - 16\\pi$. That means **leave $\\pi$ as a symbol** and do not multiply it out. It makes your work faster: a circle with radius 4 has area $\\pi \\cdot 4^2 = 16\\pi$, done.

If the choices are plain numbers, use $3.14$ or $\\frac{22}{7}$ (use $\\frac{22}{7}$ when a number is a multiple of 7).

> **Key Fact:** The area formula squares the **radius**. If the problem gives the diameter, cut it in half **first**.`
    },
    {
      id: 'mkgm3-examples',
      type: 'text' as const,
      content: `## Worked Examples

**1. Given the radius.** $r = 6$: $C = 2\\pi(6) = 12\\pi$ and $A = \\pi(6^2) = 36\\pi$.

**2. Given the diameter.** $d = 10$, so $r = 5$: $C = \\pi(10) = 10\\pi$ and $A = \\pi(5^2) = 25\\pi$.

**3. Given the area.** $A = 49\\pi$. Then $r^2 = 49$, so $r = 7$, $d = 14$ and $C = 14\\pi$.

**4. Given the circumference.** $C = 18\\pi$. Then $d = 18$, so $r = 9$ and $A = 81\\pi$.

**5. Using a number for $\\pi$.** A wheel has a diameter of 2 ft. In one full turn it rolls one circumference: $C = \\pi d \\approx 3.14 \\times 2 = 6.28$ ft.

### Parts of circles

- A **semicircle** (half circle) has half the area: $\\frac{1}{2}\\pi r^2$.
- A **quarter circle** has a quarter of the area: $\\frac{1}{4}\\pi r^2$.
- The **perimeter of a semicircular region** is half the circumference **plus** the straight diameter. For $r = 5$: $\\frac{1}{2}(10\\pi) + 10 = 5\\pi + 10$.

### Shaded regions

"Find the shaded area" usually means **big shape minus small shape**. A ring between circles of radius 5 and radius 2 has area $25\\pi - 4\\pi = 21\\pi$.`
    },
    {
      id: 'mkgm3-input-radius',
      type: 'input-boxes' as const,
      figure: mkgmRadiusFigure,
      content: `**Read the radius.** ✍️ Use Figure 1. Enter numbers only.

**1)** The diameter of the circle, in centimeters:

**2)** The circumference is ___$\\pi$ cm. Enter the number in front of $\\pi$:

**3)** The area is ___$\\pi$ square cm. Enter the number in front of $\\pi$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '14', '49'],
        hint1: 'The diameter is twice the radius.',
        hint2: '$C = 2\\pi r$.',
        hint3: '$A = \\pi r^2$: square the 7.',
        explanation: '(1) $d = 2 \\times 7 = 14$ cm. (2) $C = 2\\pi(7) = 14\\pi$ cm. (3) $A = \\pi(7^2) = 49\\pi$ square cm.'
      }
    },
    {
      id: 'mkgm3-mc-diameter',
      type: 'multiple-choice' as const,
      figure: mkgmDiameterFigure,
      content: '**Diameter given.** 🎯 Use Figure 2.',
      exercise: {
        questions: [
          {
            question: 'What is the area of the circular cover, in terms of $\\pi$?',
            options: ['$100\\pi$ square inches', '$25\\pi$ square inches', '$10\\pi$ square inches', '$20\\pi$ square inches'],
            correctAnswer: 1,
            explanation: 'The radius is half of 10, so $r = 5$ and $A = \\pi(5^2) = 25\\pi$ square inches. $100\\pi$ squares the diameter instead of the radius, and $10\\pi$ is the circumference.'
          }
        ]
      }
    },
    {
      id: 'mkgm3-mc-shaded',
      type: 'multiple-choice' as const,
      figure: mkgmSquareCircleFigure,
      content: '**Shaded corners.** 🎯 Use Figure 3.',
      exercise: {
        questions: [
          {
            question: 'What is the total area of the four shaded corners?',
            options: ['$64 - 64\\pi$ square cm', '$64 - 8\\pi$ square cm', '$64 - 16\\pi$ square cm', '$16\\pi$ square cm'],
            correctAnswer: 2,
            explanation: 'The square\'s area is $8^2 = 64$. The circle fits exactly, so its diameter is 8 and its radius is 4: area $16\\pi$. Shaded = $64 - 16\\pi$. Using 8 as the radius gives $64\\pi$, and $16\\pi$ alone is the circle, the part that is not shaded.'
          }
        ]
      }
    },
    {
      id: 'mkgm3-mc-window',
      type: 'multiple-choice' as const,
      figure: mkgmWindowFigure,
      content: '**A window.** 🎯 Use Figure 4.',
      exercise: {
        questions: [
          {
            question: 'What is the total area of the window?',
            options: ['$24 + 18\\pi$ square feet', '$24 + 9\\pi$ square feet', '$24 + 36\\pi$ square feet', '$24 + 4.5\\pi$ square feet'],
            correctAnswer: 3,
            explanation: 'Rectangle: $6 \\times 4 = 24$. The half circle has diameter 6, so $r = 3$ and its area is $\\frac{1}{2}\\pi(3^2) = 4.5\\pi$. Total: $24 + 4.5\\pi$. $9\\pi$ forgets to take half, and $18\\pi$ uses 6 as the radius.'
          }
        ]
      }
    },
    {
      id: 'mkgm3-dropdown',
      type: 'dropdown-select' as const,
      content: '**How circles grow.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'If a circle\'s radius doubles, its circumference:',
            options: ['stays the same', 'doubles', 'triples', 'is multiplied by 4'],
            correctAnswer: 1
          },
          {
            label: 'If a circle\'s radius doubles, its area:',
            options: ['doubles', 'is multiplied by 8', 'is multiplied by 4', 'stays the same'],
            correctAnswer: 2
          },
          {
            label: 'A circle with area $100\\pi$ has a radius of:',
            options: ['$50$', '$10$', '$25$', '$100$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['doubles', 'is multiplied by 4', '$10$'],
        hint1: 'Circumference is $2\\pi r$: $r$ appears once.',
        hint2: 'Area is $\\pi r^2$: the radius is squared, and $2^2 = 4$.',
        hint3: 'Solve $r^2 = 100$.',
        explanation: 'Circumference is proportional to $r$, so doubling $r$ doubles it. Area uses $r^2$, so doubling $r$ multiplies the area by $2^2 = 4$. $\\pi r^2 = 100\\pi$ gives $r^2 = 100$ and $r = 10$; $50$ halves instead of taking the square root.'
      }
    },
    {
      id: 'mkgm3-mc-context',
      type: 'multiple-choice' as const,
      content: '**Circles in context.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A circular helipad has a circumference of $30\\pi$ meters. What is its area?',
            options: ['$225\\pi$ square meters', '$900\\pi$ square meters', '$60\\pi$ square meters', '$15\\pi$ square meters'],
            correctAnswer: 0,
            explanation: '$C = \\pi d = 30\\pi$, so $d = 30$ and $r = 15$. Area $= \\pi(15^2) = 225\\pi$. $900\\pi$ squares the diameter, and $15\\pi$ stops at the radius without squaring.'
          },
          {
            question: 'A tire has a diameter of 28 inches. Using $\\pi \\approx \\frac{22}{7}$, about how far does it roll in one full turn?',
            options: ['44 inches', '176 inches', '88 inches', '616 inches'],
            correctAnswer: 2,
            explanation: 'One turn covers one circumference: $C = \\pi d \\approx \\frac{22}{7} \\times 28 = 22 \\times 4 = 88$ inches. $44$ uses the radius in $\\pi d$, $176$ doubles the diameter in $2\\pi r$, and $616$ is the area, $\\frac{22}{7} \\times 14^2$.'
          }
        ]
      }
    },
    {
      id: 'mkgm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $d = 2r$; **circumference** $C = 2\\pi r = \\pi d$; **area** $A = \\pi r^2$
- If you are given the diameter, **halve it before squaring**
- "In terms of $\\pi$": keep $\\pi$ as a symbol ($25\\pi$, $64 - 16\\pi$)
- Use $3.14$ or $\\frac{22}{7}$ only when the choices are plain numbers
- Semicircle area $\\frac{1}{2}\\pi r^2$; a semicircular region's perimeter adds the diameter
- Shaded region = big shape minus small shape
- Double the radius: circumference doubles, area **quadruples**

> **Up Next:** Part 4 — volume and surface area of boxes, cubes and cylinders.`
    }
  ]
};
