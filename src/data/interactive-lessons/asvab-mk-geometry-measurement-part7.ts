const mkgmTrackFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent"><path d="M 100 62 L 220 62 A 48 48 0 0 1 220 158 L 100 158 A 48 48 0 0 1 100 62 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"><line x1="100" y1="62" x2="100" y2="158"/><line x1="220" y1="62" x2="220" y2="158"/></g><text x="160" y="178" font-size="12" fill="currentColor" text-anchor="middle">10 m</text><text x="214" y="114" font-size="12" fill="currentColor" text-anchor="end">8 m</text></svg>',
  alt: 'A shaded field shaped like a rectangle 10 m long and 8 m wide with a half circle attached to each 8 m end. Dashed lines mark where each half circle meets the rectangle; each dashed line is 8 m, the diameter of that half circle.',
  caption: 'Figure 1. A field: a 10 m by 8 m rectangle with a half circle on each short end.',
  size: 'md' as const,
}

export const asvabMkGeometryMeasurementPart7Data = {
  topicSlug: 'asvab-mk-geometry-measurement',
  sections: [
    {
      id: 'mkgm7-intro',
      type: 'text' as const,
      content: `# 📏 Area, Volume, Circles and Coordinates

**Part 7 of 7 — Mixed Mastery Set**

### How This Set Works

Twelve questions from the whole topic, in the same mix the computer test gives you: a few quick ones, a solid middle, and some multi-step questions at the end.

- Give yourself about **2 minutes per question**, the CAT-ASVAB pace for MK.
- No calculator. Use scratch paper.
- Run the routine every time: **name** what is asked, **write** the formula, **check** each number's job, **sanity-check** the answer.

A missed question points you back to its part: perimeter and formulas (Part 1), area (Part 2), circles (Part 3), volume and surface area (Part 4), the coordinate plane (Part 5), traps (Part 6).`
    },
    {
      id: 'mkgm7-mc-warm',
      type: 'multiple-choice' as const,
      content: '**Set A: quick ones.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the area of a rectangle 13 meters long and 5 meters wide?',
            options: ['36 square meters', '65 square meters', '18 square meters', '130 square meters'],
            correctAnswer: 1,
            explanation: '$A = lw = 13 \\times 5 = 65$ square meters. $36$ is the perimeter, $18$ adds one length and one width, and $130$ doubles the area.'
          },
          {
            question: 'What is the circumference of a circle with radius 4 feet?',
            options: ['$16\\pi$ feet', '$4\\pi$ feet', '$64\\pi$ feet', '$8\\pi$ feet'],
            correctAnswer: 3,
            explanation: '$C = 2\\pi r = 2\\pi(4) = 8\\pi$ feet. $16\\pi$ is the area ($\\pi \\cdot 4^2$), and $4\\pi$ forgets the 2.'
          },
          {
            question: 'What is the midpoint of the segment from $(0, 0)$ to $(8, -6)$?',
            options: ['$(8, -6)$', '$(4, 3)$', '$(4, -3)$', '$(-4, 3)$'],
            correctAnswer: 2,
            explanation: 'Average the coordinates: $\\left(\\frac{0 + 8}{2}, \\frac{0 + (-6)}{2}\\right) = (4, -3)$. $(4, 3)$ drops the negative sign.'
          }
        ]
      }
    },
    {
      id: 'mkgm7-mc-middle',
      type: 'multiple-choice' as const,
      content: '**Set B: the solid middle.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A triangle has an area of 54 square centimeters and a base of 12 centimeters. What is its height?',
            options: ['9 centimeters', '4.5 centimeters', '18 centimeters', '42 centimeters'],
            correctAnswer: 0,
            explanation: '$54 = \\frac{1}{2}(12)h = 6h$, so $h = 9$ cm. $4.5$ is $54 \\div 12$, which forgets the $\\frac{1}{2}$, and $42$ subtracts.'
          },
          {
            question: 'A cylinder has a radius of 2 inches and a height of 7 inches. What is its volume?',
            options: ['$14\\pi$ cubic inches', '$56\\pi$ cubic inches', '$28\\pi$ cubic inches', '$98\\pi$ cubic inches'],
            correctAnswer: 2,
            explanation: '$V = \\pi r^2 h = \\pi(2^2)(7) = 28\\pi$ cubic inches. $14\\pi$ forgets to square the radius, and $98\\pi$ swaps the radius and height ($\\pi \\cdot 7^2 \\cdot 2$).'
          },
          {
            question: 'A rectangle has a perimeter of 46 feet and a width of 8 feet. What is its area?',
            options: ['152 square feet', '304 square feet', '64 square feet', '120 square feet'],
            correctAnswer: 3,
            explanation: 'The two lengths share $46 - 2(8) = 30$ ft, so the length is $15$ ft and the area is $15 \\times 8 = 120$ sq ft. $152$ uses a length of $19$ (subtracting only one width before halving), and $304$ uses $46 - 8 = 38$ as the length.'
          },
          {
            question: 'What is the slope of the line through $(-3, 4)$ and $(1, -8)$?',
            options: ['$3$', '$-3$', '$-\\frac{1}{3}$', '$-6$'],
            correctAnswer: 1,
            explanation: '$m = \\frac{-8 - 4}{1 - (-3)} = \\frac{-12}{4} = -3$. $3$ loses the sign, and $-\\frac{1}{3}$ is run over rise.'
          },
          {
            question: 'A square has an area of 81 square yards. What is its perimeter?',
            options: ['36 yards', '9 yards', '20.25 yards', '324 yards'],
            correctAnswer: 0,
            explanation: 'Each side is $\\sqrt{81} = 9$ yd, so $P = 4 \\times 9 = 36$ yd. $9$ is only one side, $20.25$ is $81 \\div 4$, and $324$ is $81 \\times 4$.'
          }
        ]
      }
    },
    {
      id: 'mkgm7-mc-track',
      type: 'multiple-choice' as const,
      figure: mkgmTrackFigure,
      content: '**Set C: a composite figure.** 🎯 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'What is the area of the field?',
            options: ['$80 + 64\\pi$ square meters', '$80 + 8\\pi$ square meters', '$80 + 32\\pi$ square meters', '$80 + 16\\pi$ square meters'],
            correctAnswer: 3,
            explanation: 'Rectangle: $10 \\times 8 = 80$. The two half circles each have diameter 8, so together they make one full circle of radius 4: $\\pi(4^2) = 16\\pi$. Total $80 + 16\\pi$. Using 8 as the radius gives $64\\pi$ for the two halves.'
          }
        ]
      }
    },
    {
      id: 'mkgm7-mc-hard',
      type: 'multiple-choice' as const,
      content: '**Set D: multi-step.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cube has a surface area of 150 square inches. What is its volume?',
            options: ['25 cubic inches', '125 cubic inches', '150 cubic inches', '625 cubic inches'],
            correctAnswer: 1,
            explanation: 'Six equal faces: $150 \\div 6 = 25$ square inches each, so each edge is $5$ in and $V = 5^3 = 125$ cubic inches. $25$ is the area of one face, and $625$ is $25^2$.'
          },
          {
            question: 'What is the distance between the points $(-2, -3)$ and $(6, 12)$?',
            options: ['15', '23', '17', '13'],
            correctAnswer: 2,
            explanation: 'The legs are $6 - (-2) = 8$ and $12 - (-3) = 15$, so $d = \\sqrt{64 + 225} = \\sqrt{289} = 17$ (an 8-15-17 triangle). $23$ adds the legs instead of using the Pythagorean theorem.'
          },
          {
            question: 'A circular pool of radius 3 yards is surrounded by a walkway, and the outer edge of the walkway is a circle of radius 5 yards. What is the area of the walkway?',
            options: ['$16\\pi$ square yards', '$4\\pi$ square yards', '$34\\pi$ square yards', '$2\\pi$ square yards'],
            correctAnswer: 0,
            explanation: 'Big circle minus small circle: $\\pi(5^2) - \\pi(3^2) = 25\\pi - 9\\pi = 16\\pi$. $4\\pi$ squares the difference $(5 - 3)^2$, and $34\\pi$ adds the two circles.'
          }
        ]
      }
    },
    {
      id: 'mkgm7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7 and the Whole Topic

- **Perimeter** adds sides; **area** is in square units; **volume** is in cubic units
- Area: $lw$, $s^2$, $bh$, $\\frac{1}{2}bh$, $\\frac{1}{2}(b_1 + b_2)h$, $\\pi r^2$ — height at a right angle to the base
- Circles: $C = 2\\pi r = \\pi d$; halve the diameter before squaring; keep answers in terms of $\\pi$
- Volume: $lwh$, $s^3$, $\\pi r^2 h$; surface area adds every face
- Coordinates: slope $\\frac{y_2 - y_1}{x_2 - x_1}$, $y = mx + b$, midpoint = average, distance = Pythagorean theorem
- Composite and shaded regions: add the pieces or subtract the missing piece
- Watch the traps: radius vs diameter, slanted side vs height, $\\div 9$ for square yards and $\\div 27$ for cubic yards

> **Next step:** take the exit quiz for this topic. Any part you miss there is the part to review before test day.`
    }
  ]
};
