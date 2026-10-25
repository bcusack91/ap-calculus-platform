export const asvabMkGeometryMeasurementPart6Data = {
  topicSlug: 'asvab-mk-geometry-measurement',
  sections: [
    {
      id: 'mkgm6-intro',
      type: 'text' as const,
      content: `# 📏 Area, Volume, Circles and Coordinates

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Clock on MK

On the CAT-ASVAB, MK gives you **31 minutes for 15 scored questions**: about **2 minutes each**. A measurement question you know cold takes well under a minute, which banks time for harder ones.

Three rules of the computer test shape your strategy:

- **You can't go back.** Once you answer, the question is gone. Check your work on scratch paper **before** you click.
- **The test adapts.** A right answer usually brings a harder question next. Harder measurement questions combine steps: a shaded region, a working-backward problem, a unit change.
- **Don't rush the end.** If time runs short, keep reading and genuinely solving. The CAT applies a relatively large penalty when several wrong answers pile up at the end of a subtest, so random clicking hurts. Some questions may be unscored tryouts, but you can't tell which, so treat every one as scored.

### A four-step routine for every measurement question

1. **Name what is asked:** perimeter (length), area (square units), volume (cubic units), or a coordinate idea.
2. **Write the formula from memory** on scratch paper before plugging in.
3. **Check each number's job:** radius or diameter? height or slanted side? feet or yards?
4. **Sanity-check:** is the answer the right size and in the right units? Use $\\pi \\approx 3$ to estimate.`
    },
    {
      id: 'mkgm6-traps',
      type: 'text' as const,
      content: `## The Traps the Wrong Answers Are Built From

The three wrong choices are rarely random. Each one is usually the result of a specific mistake. Know the mistakes and you can spot the traps.

| Mistake | Example | Trap answer it produces |
|:---|:---|:---|
| Diameter used as radius | circle with $d = 12$ | area $144\\pi$ instead of $36\\pi$ |
| Slanted side used as height | triangle, base 10, height 4, side 5 | $25$ instead of $20$ |
| Forgot the $\\frac{1}{2}$ | triangle, base 10, height 4 | $40$ instead of $20$ |
| Perimeter and area mixed up | 6 by 4 rectangle | $24$ when perimeter ($20$) was asked |
| Wrong unit conversion | 45 sq ft to sq yd | $15$ (divided by 3) instead of $5$ (divide by 9) |
| Scaling done once, not squared or cubed | double a cube's edges | volume "×2" instead of ×8 |
| Slope subtracted in mixed order | $(2, 7)$ and $(5, 1)$ | $+2$ instead of $-2$ |
| Slope flipped | rise 6, run 3 | $\\frac{1}{2}$ instead of $2$ |
| $\\pi$ multiplied in when choices keep $\\pi$ | $A = 16\\pi$ | hunting for $50.24$ |

### Estimate to eliminate

When the choices are plain numbers, a quick estimate often leaves only one choice standing. A circle with radius 10 has area $\\pi \\times 100$, a bit more than $300$. If the choices are $31.4$, $62.8$, $314$ and $628$, only $314$ is close.

### When the figure is only described

If the problem describes a shape in words, **sketch it** and label every number. Thirty seconds of drawing prevents most of the traps above.`
    },
    {
      id: 'mkgm6-mc-traps',
      type: 'multiple-choice' as const,
      content: '**Spot the mistake.** 🎯 Each question shows a wrong answer and asks where it came from, or asks you to dodge the trap.',
      exercise: {
        questions: [
          {
            question: 'A circle has a diameter of 12 inches. A student says its area is $144\\pi$ square inches. What mistake did the student make?',
            options: ['Forgot to square the radius', 'Used the circumference formula', 'Used the diameter as the radius', 'Divided the diameter by 2 twice'],
            correctAnswer: 2,
            explanation: '$144\\pi$ is $\\pi \\cdot 12^2$: the student squared the diameter. The radius is 6, so the area is $36\\pi$. Forgetting to square would give $6\\pi$, and the circumference is $12\\pi$.'
          },
          {
            question: 'A room is 12 feet by 15 feet. Carpet is sold by the square yard. How many square yards cover the floor?',
            options: ['60 square yards', '20 square yards', '180 square yards', '1,620 square yards'],
            correctAnswer: 1,
            explanation: 'The floor is $12 \\times 15 = 180$ square feet, and 1 square yard is $3 \\times 3 = 9$ square feet, so $180 \\div 9 = 20$ square yards. Dividing by 3 gives $60$, and multiplying by 9 gives $1{,}620$.'
          },
          {
            question: 'A student finds the slope through $(2, 7)$ and $(5, 1)$ as $\\frac{1 - 7}{2 - 5} = 2$. What is the correct slope?',
            options: ['$-2$', '$2$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'Subtract in the same order on top and bottom: $\\frac{1 - 7}{5 - 2} = \\frac{-6}{3} = -2$. The student took the top as second minus first but the bottom as first minus second, which flipped the sign.'
          },
          {
            question: 'Each side of a square is tripled. The area of the new square is how many times the original area?',
            options: ['3 times', '6 times', '27 times', '9 times'],
            correctAnswer: 3,
            explanation: 'Area uses two lengths, so it grows by $3 \\times 3 = 9$. Example: a 2 by 2 square (area 4) becomes 6 by 6 (area 36), and $36 \\div 4 = 9$. The answer $27$ would be the growth of a cube\'s volume.'
          }
        ]
      }
    },
    {
      id: 'mkgm6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the measurement.** 🔽 Step 1 of the routine: what is the question really asking for?',
      exercise: {
        dropdowns: [
          {
            label: 'How much paint covers a wall:',
            options: ['Perimeter', 'Area', 'Volume', 'Circumference'],
            correctAnswer: 1
          },
          {
            label: 'How much fence goes around a field:',
            options: ['Area', 'Volume', 'Perimeter', 'Slope'],
            correctAnswer: 2
          },
          {
            label: 'How much water a tank holds:',
            options: ['Volume', 'Area', 'Perimeter', 'Circumference'],
            correctAnswer: 0
          },
          {
            label: 'How far a wheel rolls in one turn:',
            options: ['Area', 'Volume', 'Diameter', 'Circumference'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['Area', 'Perimeter', 'Volume', 'Circumference'],
        hint1: 'Covering a flat surface is an area.',
        hint2: 'Going around the edge is a perimeter.',
        hint3: 'Filling a space is a volume; one turn of a wheel is its circumference.',
        explanation: 'Paint covers a surface (area, square units). A fence follows the boundary (perimeter, a length). A tank holds a volume (cubic units). A wheel rolls one circumference, $\\pi d$, per turn.'
      }
    },
    {
      id: 'mkgm6-mc-estimate',
      type: 'multiple-choice' as const,
      content: '**Estimate first.** 🎯 Round the numbers (and use $\\pi \\approx 3$ when a circle is involved) to rule out choices, then confirm.',
      exercise: {
        questions: [
          {
            question: 'Using $\\pi \\approx 3.14$, what is the area of a circle with radius 10 meters?',
            options: ['31.4 square meters', '314 square meters', '62.8 square meters', '628 square meters'],
            correctAnswer: 1,
            explanation: '$A = \\pi r^2 \\approx 3.14 \\times 100 = 314$ square meters. Estimating with $3 \\times 100 = 300$ rules out everything else. $62.8$ is the circumference, and $628$ uses $2\\pi r^2$.'
          },
          {
            question: 'A garden is 30 feet by 18 feet. Without working it out exactly, which is the only reasonable choice for its area?',
            options: ['96 square feet', '5,400 square feet', '540 square feet', '48 square feet'],
            correctAnswer: 2,
            explanation: '$30 \\times 18$ is between $30 \\times 10 = 300$ and $30 \\times 20 = 600$, and exactly $540$ square feet. $96$ is the perimeter, $48$ just adds the sides, and $5{,}400$ has an extra zero.'
          }
        ]
      }
    },
    {
      id: 'mkgm6-input',
      type: 'input-boxes' as const,
      content: `**A patio job, start to finish.** ✍️ A rectangular patio is 18 ft long and 12 ft wide. Concrete will be poured 6 inches (0.5 ft) thick. Enter numbers only.

**1)** The area of the patio, in square feet:

**2)** The area of the patio, in square yards:

**3)** The volume of concrete, in cubic yards:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['216', '24', '4'],
        hint1: '$18 \\times 12$.',
        hint2: '1 square yard = 9 square feet.',
        hint3: 'Volume in cubic feet is $216 \\times 0.5$; 1 cubic yard = 27 cubic feet.',
        explanation: '(1) $18 \\times 12 = 216$ sq ft. (2) $216 \\div 9 = 24$ sq yd. (3) $216 \\times 0.5 = 108$ cu ft, and $108 \\div 27 = 4$ cu yd. Six inches had to become 0.5 ft before multiplying: mixing inches with feet is another classic trap.'
      }
    },
    {
      id: 'mkgm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **2 minutes per MK question**; you can't go back, so check before you click
- Routine: **name** what is asked, **write** the formula, **check** each number's job, **sanity-check** size and units
- Wrong choices come from predictable mistakes: diameter for radius, slanted side for height, missing $\\frac{1}{2}$, perimeter vs area, $\\div 3$ instead of $\\div 9$ or $\\div 27$, scaling not squared or cubed, slope order
- Estimate with $\\pi \\approx 3$ and round numbers to eliminate choices
- Sketch any figure that is only described in words

> **Up Next:** Part 7 — a mixed mastery set at ASVAB difficulty.`
    }
  ]
};
