export const lessonData = {
  topicSlug: 'sat-geometry-basics-core-skills',
  sections: [
    {
      id: 'geobas-core-p1-intro',
      type: 'text' as const,
      content: `# Geometry Basics: Area and Perimeter

**Part 1 of 2 — One Skill, One Idea**

Two words come up over and over, and they mean different things.

- **Perimeter** is the distance all the way around the outside. Think of walking around the edge of a yard. It is measured in plain units, like feet.
- **Area** is how much flat space is inside. Think of the carpet that covers the floor. It is measured in square units, like square feet.

If a question asks how much fence you need, that is perimeter. If it asks how much paint or carpet, that is area.

### The formulas you need

- **Rectangle area** $= \\text{length} \\times \\text{width}$
- **Rectangle perimeter** $= 2 \\times \\text{length} + 2 \\times \\text{width}$
- **Square area** $= \\text{side} \\times \\text{side}$
- **Square perimeter** $= 4 \\times \\text{side}$
- **Triangle area** $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$

A **square** is a rectangle whose four sides are all the same length, so the rectangle formulas still work on it.

### Worked example

A rectangle has length $8$ and width $5$. Find the area and the perimeter.

**Area** — multiply the two side lengths:

$$8 \\times 5 = 40$$

The area is $40$ square units.

**Perimeter** — add up all four sides. The rectangle has two sides of length $8$ and two sides of length $5$:

$$8 + 8 + 5 + 5 = 26$$

The perimeter is $26$ units.

Notice that the two answers are different numbers from the same rectangle. Read the question and decide which one it wants before you start.`
    },
    {
      id: 'geobas-core-p1-q1',
      type: 'quiz' as const,
      question: `A rectangle has length $9$ and width $6$. What is its area?`,
      options: [
        `$15$`,
        `$30$`,
        `$54$`,
        `$45$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $54$.

Area of a rectangle is length times width.

$$9 \\times 6 = 54$$

So the area is $54$ square units.

Adding the two numbers gives $15$, and going all the way around gives the perimeter, $30$. Area always uses multiplication.`
    },
    {
      id: 'geobas-core-p1-q2',
      type: 'quiz' as const,
      question: `A square has side length $7$. What is its perimeter?`,
      options: [
        `$28$`,
        `$49$`,
        `$14$`,
        `$21$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $28$.

A square has four sides, and every side is $7$. Perimeter is the distance around, so add all four sides:

$$7 + 7 + 7 + 7 = 28$$

You can also multiply: $4 \\times 7 = 28$.

The value $49$ is $7 \\times 7$, which is the area of this square, not its perimeter.`
    },
    {
      id: 'geobas-core-p1-q3',
      type: 'quiz' as const,
      question: `A triangle has base $10$ and height $4$. What is its area?`,
      options: [
        `$40$`,
        `$14$`,
        `$28$`,
        `$20$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $20$.

Area of a triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$.

Step 1 — Multiply the base and the height:

$$10 \\times 4 = 40$$

Step 2 — Take half of that:

$$\\frac{1}{2} \\times 40 = 20$$

So the area is $20$ square units.

Answering $40$ means the halving step was skipped. A triangle is half of a rectangle with the same base and height, which is where the $\\frac{1}{2}$ comes from.`
    },
    {
      id: 'geobas-core-p1-q4',
      type: 'quiz' as const,
      question: `A square has side length $6$. What is its area?`,
      options: [
        `$24$`,
        `$36$`,
        `$12$`,
        `$18$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $36$.

Area of a square is side times side.

$$6 \\times 6 = 36$$

So the area is $36$ square units.

The value $24$ is $4 \\times 6$, the perimeter of this square. Perimeter goes around the edge; area fills the inside.`
    }
  ]
}
