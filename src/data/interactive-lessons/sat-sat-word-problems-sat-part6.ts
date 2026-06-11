export const satWordProblemsPart6Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp6-intro',
      type: 'text' as const,
      content: `# Geometry in Word Problems

**Part 6 of 7 — Area, Perimeter, and Volume in Context**

### Area and Perimeter
**"A garden's length is 3 feet more than twice its width. Its perimeter is 48 feet."**
- Width = $w$, Length = $2w + 3$
- $2(w) + 2(2w + 3) = 48$
- $2w + 4w + 6 = 48 → 6w = 42 → w = 7$
- Width = 7 ft, Length = 17 ft

### Volume Problems
**Cylinder:** $V = \\pi r^2 h$
**Box:** $V = lwh$

"A cylindrical tank with radius 4 feet is being filled at 2 cubic feet per minute. How long to fill it to a height of 10 feet?"
- Volume = $\\pi(4)^2(10) = 160\\pi \\approx 502.7$ cubic feet
- Time = $502.7 / 2 ≈ 251$ minutes

### Similar Figures
If two figures are similar with scale factor $k$:
- Lengths scale by $k$
- Areas scale by $k^2$
- Volumes scale by $k^3$

**Example:** A model building is 1/50 scale. If the model's area is 2 ft², the real building's area = $2 \\times 50^2 = 5,000$ ft²

### The Pythagorean Theorem in Context
Ladder problems, diagonal walks, line-of-sight distances — always draw a right triangle.`
    },
    {
      id: 'wp6-q1',
      type: 'quiz' as const,
      question: 'A photo is enlarged so each dimension is tripled. How does the area change?',
      options: [
        'It triples',
        'It increases by a factor of 6',
        'It increases by a factor of 9',
        'It increases by a factor of 27'
      ],
      correctAnswer: 2,
      explanation: 'When dimensions are multiplied by k, area is multiplied by k². Since k = 3, area increases by 3² = 9. If the original was 4 × 6 = 24, the enlarged is 12 × 18 = 216 = 24 × 9.'
    },
    {
      id: 'wp6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Multi-Step Geometry Word Problems

### Worked Example 1: Fencing Problem with Constraint

| Step | Work |
|---|---|
| **Problem** | "A farmer has 120 feet of fencing to enclose a rectangular area against a barn wall (only 3 sides need fencing). Find the maximum area." |
| **Setup** | One length uses the barn. Fencing: $w + l + w = 120$ → $l = 120 - 2w$ |
| **Area** | $A = w \\times l = w(120 - 2w) = 120w - 2w^2$ |
| **Maximize** | Vertex at $w = \\frac{-120}{2(-2)} = 30$. Then $l = 60$. |
| **Answer** | Max area $= 30 \\times 60 = 1{,}800$ sq ft |

### Worked Example 2: Pythagorean Theorem in Context

| Step | Work |
|---|---|
| **Problem** | "A 13-foot ladder leans against a wall with its base 5 feet from the wall. How high does it reach?" |
| **Draw right triangle** | Hypotenuse $= 13$, base $= 5$, height $= h$ |
| **Pythagorean theorem** | $5^2 + h^2 = 13^2$ → $25 + h^2 = 169$ → $h^2 = 144$ → $h = 12$ ft |
| **Recognize** | This is a 5-12-13 Pythagorean triple! |

### Geometry Word Problem Types on the SAT

| Scenario | What to Set Up |
|---|---|
| Fencing/perimeter | Perimeter $= 2l + 2w$ (or $l + 2w$ against a wall) |
| Painting/covering | Surface area |
| Filling a container | Volume ÷ rate |
| Diagonal of a screen | Pythagorean theorem on width and height |
| Shadow/ladder | Right triangle with Pythagorean theorem |
| Maximizing area | Express area in one variable, find vertex |`
    },
    {
      id: 'wp6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Geometry Word Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangular pool is 30 ft long and 20 ft wide. A 3-ft wide walkway surrounds it. What is the area of the walkway?',
            options: ['$336$ sq ft', '$600$ sq ft', '$264$ sq ft', '$396$ sq ft'],
            correctAnswer: 0,
            explanation: 'Outer rectangle: $(30 + 6) \\times (20 + 6) = 36 \\times 26 = 936$ sq ft. Pool: $30 \\times 20 = 600$ sq ft. Walkway: $936 - 600 = 336$ sq ft.'
          },
          {
            question: 'A cone-shaped cup has radius 3 cm and height 10 cm. How many cups fill a cylinder with radius 6 cm and height 15 cm?',
            options: ['$18$', '$6$', '$12$', '$9$'],
            correctAnswer: 0,
            explanation: 'Cup volume: $\\frac{1}{3}\\pi(3)^2(10) = 30\\pi$. Cylinder volume: $\\pi(6)^2(15) = 540\\pi$. Number: $540\\pi / 30\\pi = 18$.'
          },
          {
            question: 'A TV screen is described as "55-inch" (diagonal). If the screen has a 16:9 aspect ratio, approximately what is the width?',
            options: ['$\\approx 47.9$ inches', '$\\approx 44$ inches', '$\\approx 39$ inches', '$\\approx 55$ inches'],
            correctAnswer: 0,
            explanation: 'Width $= 16k$, height $= 9k$. Diagonal: $(16k)^2 + (9k)^2 = 55^2$ → $256k^2 + 81k^2 = 3025$ → $337k^2 = 3025$ → $k \\approx 3.0$. Width $\\approx 16(3.0) \\approx 47.9$ inches.'
          }
        ]
      }
    },
    {
      id: 'wp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Geometry Word Problem Setup** — Choose the correct approach.',
      exercise: {
        dropdowns: [
          'Finding how high a ladder reaches → [Pythagorean theorem|Area formula|Volume formula|Slope formula]',
          'How much paint to cover a box → [Surface area|Volume|Perimeter|Diagonal]',
          'How long to fill a cylindrical tank at a given rate → [Volume ÷ rate|Area × rate|Circumference ÷ rate|Perimeter × rate]',
          'Maximize area with fixed perimeter → [Write area in one variable, find vertex|Guess and check|Set area = perimeter|Use volume formula]'
        ],
        correctAnswers: ['Pythagorean theorem', 'Surface area', 'Volume ÷ rate', 'Write area in one variable, find vertex'],
        hint1: 'A ladder against a wall forms a right triangle.',
        hint2: 'Paint covers the OUTSIDE of the box — that\'s surface area.',
        hint3: 'You need to know how much the tank HOLDS (volume), then divide by the fill rate.',
        explanation: 'Ladder = right triangle → Pythagorean theorem. Paint covers surfaces → surface area. Filling = volume ÷ rate. Maximize area: express area as a quadratic in one variable and find the vertex.'
      }
    },
    {
      id: 'wp6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary: Geometry in Word Problems

| Problem Type | Formula/Strategy |
|---|---|
| Perimeter/fencing | $P = 2l + 2w$; against a wall: $P = l + 2w$ |
| Area problems | Choose correct formula: $lw$, $\\frac{1}{2}bh$, $\\pi r^2$ |
| Volume/filling | $V = \\pi r^2 h$ (cylinder), $V ÷$ rate $=$ time |
| Surface area/painting | $SA = 2(lw + lh + wh)$ (box) |
| Ladder/shadow | Pythagorean theorem: $a^2 + b^2 = c^2$ |
| Walkway/border | Outer area $-$ inner area |
| Maximize area | Quadratic in one variable → vertex |
| Scaling | Lengths $\\times k$, areas $\\times k^2$, volumes $\\times k^3$ |

### SAT Strategy
- **Draw a picture** and label all dimensions.
- **Walkway problems:** the outer dimensions include the walkway on BOTH sides.
- When maximizing, express everything in **one variable** using constraints.

*Next: Comprehensive word problem review and strategy →*`
    }
  ]
};
