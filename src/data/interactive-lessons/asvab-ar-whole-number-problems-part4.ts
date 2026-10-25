const arwnFloorPlanFigure = {
  svg: '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent"><polygon points="40,30 136,30 136,126 280,126 280,198 40,198" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="136" y1="126" x2="136" y2="198"/></g><text x="88" y="22" font-size="13" fill="currentColor" text-anchor="middle">8 ft</text><text x="32" y="118" font-size="13" fill="currentColor" text-anchor="end">14 ft</text><text x="160" y="218" font-size="13" fill="currentColor" text-anchor="middle">20 ft</text><text x="288" y="166" font-size="13" fill="currentColor" text-anchor="start">6 ft</text><text x="88" y="118" font-size="11" fill="currentColor" text-anchor="middle">A</text><text x="208" y="166" font-size="11" fill="currentColor" text-anchor="middle">B</text></svg>',
  alt: 'L-shaped floor plan with all right-angle corners. The bottom side is 20 ft long and the left side is 14 ft tall. The top side of the tall left section is 8 ft wide. The right end of the long bottom section is 6 ft tall. The two inner sides, where the shape steps in, are not labelled. A dashed line divides the floor into a tall left rectangle A and a short right rectangle B.',
  caption: 'Figure 1. An L-shaped floor plan. All corners are right angles.',
  size: 'md' as const,
}

export const asvabArWholeNumberProblemsPart4Data = {
  topicSlug: 'asvab-ar-whole-number-problems',
  sections: [
    {
      id: 'arwn4-intro',
      type: 'text' as const,
      content: `# 🔢 Word Problems with Whole Numbers

**Part 4 of 7 — Measurement: Units, Perimeter and Area**

### The conversions you need to know cold

The test expects you to know these. Nobody will give them to you.

| Time | Length | Weight and volume |
|:---|:---|:---|
| 60 seconds = 1 minute | 12 inches = 1 foot | 16 ounces = 1 pound |
| 60 minutes = 1 hour | 3 feet = 1 yard | 4 quarts = 1 gallon |
| 24 hours = 1 day | 36 inches = 1 yard | |
| 7 days = 1 week | | |

### Which way to convert

- **Big unit → small unit: multiply.** There are more of the small units. 3 hours 25 minutes is $3 \\times 60 + 25 = 205$ minutes.
- **Small unit → big unit: divide.** There are fewer of the big units. 78 inches is $78 \\div 12 = 6$ remainder 6, so 6 feet 6 inches.

**Reasonableness:** after converting to a smaller unit, the number should get **bigger**. If 3 hours became 20 "minutes", you divided when you should have multiplied.

> **Key Fact:** Before you compute, circle the unit in the last sentence. If the question asks for minutes and the story gives hours, the conversion is one of the steps.`
    },
    {
      id: 'arwn4-time',
      type: 'text' as const,
      content: `## Elapsed time across noon or midnight

Don't subtract clock times directly when the period crosses 12:00. **Count up** in pieces instead: to the next whole hour, then whole hours, then the leftover minutes.

**Worked Example 1.** A shift runs from 7:45 a.m. to 4:15 p.m., with a 30-minute unpaid lunch. How many paid hours is the shift?

| Piece | Time |
|:---|:---:|
| 7:45 a.m. to 8:00 a.m. | 15 min |
| 8:00 a.m. to 4:00 p.m. | 8 h |
| 4:00 p.m. to 4:15 p.m. | 15 min |
| **Total** | **8 h 30 min** |

Take away the 30-minute lunch: **8 paid hours**.

Subtracting the clock numbers ($7:45 - 4:15$) gives 3 h 30 min, which is the trap: the clock restarted at noon.

**Overnight works the same way.** 11:30 p.m. to 7:00 a.m. is 30 min to midnight plus 7 h, so 7 h 30 min.`
    },
    {
      id: 'arwn4-perimeter-area',
      type: 'text' as const,
      content: `## Perimeter vs. area

| | Perimeter | Area |
|:---|:---|:---|
| What it measures | Distance **around** | Space **covered** |
| Rectangle formula | $2 \\times \\text{length} + 2 \\times \\text{width}$ | $\\text{length} \\times \\text{width}$ |
| Units | feet, yards | **square** feet, **square** yards |
| Story words | fence, trim, border, baseboard | carpet, tile, paint, sod, flooring |

A yard 30 ft by 18 ft needs $2 \\times 30 + 2 \\times 18 = 96$ feet of fence around it.

### Area times a unit cost, and the square-yard trap

**Worked Example 2.** A room is 15 ft by 12 ft. Carpet costs \\$27 per square yard. What does it cost to carpet the room?

- Area in square feet: $15 \\times 12 = 180$ sq ft
- Convert: 1 square yard is a square 3 ft on each side, so $1 \\text{ sq yd} = 3 \\times 3 = 9 \\text{ sq ft}$
- $180 \\div 9 = 20$ sq yd
- Cost: $20 \\times 27 = 540$, so \\$540

**The traps:**

| Wrong move | Result |
|:---|:---|
| Forgot to convert: $180 \\times 27$ | \\$4,860 |
| Divided by 3 instead of 9: $60 \\times 27$ | \\$1,620 |

**Shortcut:** convert the sides first. 15 ft = 5 yd and 12 ft = 4 yd, so the area is $5 \\times 4 = 20$ sq yd. Same answer.

> **Key Fact:** A square yard is **9** square feet, not 3. Feet to yards divides by 3; square feet to square yards divides by 9.`
    },
    {
      id: 'arwn4-lshape',
      type: 'text' as const,
      content: `## Worked Example 3: an L-shaped floor

Tile costs \\$4 per square foot. What does it cost to tile the floor in Figure 1?

**Step 1 — Find the missing sides.** The two inner sides are not labelled.

- Inner horizontal side: $20 - 8 = 12$ ft
- Inner vertical side: $14 - 6 = 8$ ft

**Step 2 — Split into rectangles and add.**

- Rectangle A (tall, left): $8 \\times 14 = 112$ sq ft
- Rectangle B (short, right): $12 \\times 6 = 72$ sq ft
- Total area: $112 + 72 = 184$ sq ft

**Check by splitting the other way:** a bottom strip $20 \\times 6 = 120$ plus a top block $8 \\times 8 = 64$ is also 184 sq ft. ✓

**Step 3 — Cost.** $184 \\times 4 = 736$, so \\$736.

Trap: multiplying the two longest sides ($20 \\times 14 = 280$ sq ft) prices the whole rectangle around the L, including the missing corner, and gives \\$1,120.`,
      figure: arwnFloorPlanFigure
    },
    {
      id: 'arwn4-figure-check',
      type: 'multiple-choice' as const,
      content: '**Use Figure 1.** 📐',
      figure: arwnFloorPlanFigure,
      exercise: {
        questions: [
          {
            question: 'Baseboard trim will run along every wall of the floor in Figure 1. Trim costs \\$3 per foot. What does the trim cost?',
            options: ['\\$144', '\\$204', '\\$552', '\\$102'],
            correctAnswer: 1,
            explanation: 'Trim goes around, so you need the perimeter. The missing sides are $20 - 8 = 12$ ft and $14 - 6 = 8$ ft, so the perimeter is $20 + 6 + 12 + 8 + 8 + 14 = 68$ ft, and $68 \\times 3 = 204$, so \\$204. \\$144 uses only the four labelled sides (48 ft), \\$552 prices the area (184 sq ft) instead of the distance around, and \\$102 uses only the bottom and left sides (34 ft).'
          }
        ]
      }
    },
    {
      id: 'arwn4-mc',
      type: 'multiple-choice' as const,
      content: '**Units, time and area.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A guard shift starts at 9:40 p.m. and ends at 6:10 a.m. the next morning. How long is the shift?',
            options: ['8 h 30 min', '3 h 30 min', '9 h 30 min', '8 h 50 min'],
            correctAnswer: 0,
            explanation: 'Count up: 9:40 p.m. to 10:00 p.m. is 20 min, 10:00 p.m. to 6:00 a.m. is 8 h, and 6:00 to 6:10 is 10 min. Total: 8 h 30 min. The answer 3 h 30 min subtracts the clock times as if they were in the same half of the day, and 9 h 30 min takes the 9 hours from 9 o\'clock to 6 o\'clock and adds the 30-minute difference instead of subtracting it.'
          },
          {
            question: 'A room 18 ft long and 12 ft wide will be carpeted. Carpet costs \\$25 per square yard. What will the carpet cost?',
            options: ['\\$5,400', '\\$1,800', '\\$1,500', '\\$600'],
            correctAnswer: 3,
            explanation: 'Area: $18 \\times 12 = 216$ sq ft. Since 1 sq yd = 9 sq ft, $216 \\div 9 = 24$ sq yd, and $24 \\times 25 = 600$, so \\$600. \\$5,400 skips the conversion ($216 \\times 25$), \\$1,800 divides by 3 instead of 9, and \\$1,500 prices the perimeter (60 ft) instead of the area.'
          },
          {
            question: 'A care package holds 4 cans of soup, and each can weighs 12 ounces. How many pounds of soup are in the package?',
            options: ['4 pounds', '48 pounds', '3 pounds', '768 pounds'],
            correctAnswer: 2,
            explanation: 'Total weight: $4 \\times 12 = 48$ ounces. Ounces to pounds is small to big, so divide by 16: $48 \\div 16 = 3$ pounds. 4 pounds divides by 12, mixing up ounces with inches; 48 pounds never converts; and 768 pounds multiplies by 16 instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'arwn4-input',
      type: 'input-boxes' as const,
      content: `**Measure it.** ✍️

**1)** A rectangular garden is 26 ft long and 14 ft wide. How many feet of fencing go all the way around it? (number only, in feet)

**2)** A mess hall uses 7 gallons of milk at breakfast. How many quarts is that? (number only, in quarts)

**3)** A shift runs from 6:45 a.m. to 3:15 p.m. How many minutes long is the shift? (number only, in minutes)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '28', '510'],
        hint1: 'Fencing goes around: add all four sides, $2 \\times 26 + 2 \\times 14$.',
        hint2: 'Gallons to quarts is big to small, so multiply by 4.',
        hint3: 'Count up: 6:45 to 7:00, then 7:00 to 3:00, then 3:00 to 3:15. Convert the hours to minutes.',
        explanation: '(1) $2 \\times 26 + 2 \\times 14 = 52 + 28 = 80$ ft. (2) $7 \\times 4 = 28$ quarts. (3) 15 min + 8 h + 15 min = 8 h 30 min, and $8 \\times 60 + 30 = 510$ minutes.'
      }
    },
    {
      id: 'arwn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Know the conversions: **60** min/h, **7** days/week, **12** in/ft, **3** ft/yd, **16** oz/lb, **4** qt/gal
- Big unit to small unit: **multiply**; small unit to big unit: **divide**
- Elapsed time across noon or midnight: **count up** in pieces
- Perimeter is the distance **around** (fence, trim); area is **length × width** in square units (carpet, tile)
- **1 sq yd = 9 sq ft**; for an L-shape, find the missing sides and **split into rectangles**

> **Up Next:** Part 5 — division with remainders: when to round up, when to round down, and when the remainder is the answer.`
    }
  ]
};
