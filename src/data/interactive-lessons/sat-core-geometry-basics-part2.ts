export const lessonData = {
  topicSlug: 'sat-geometry-basics-core-skills',
  sections: [
    {
      id: 'geobas-core-p2-recap',
      type: 'text' as const,
      content: `# Angles and Right Triangles

**Part 2 of 2 — Practice**

### The formulas from Part 1

- Rectangle area $= \\text{length} \\times \\text{width}$
- Square area $= \\text{side} \\times \\text{side}$
- Triangle area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$
- Perimeter $=$ add up every side

### Angle facts

These four cover most SAT angle questions.

- **Straight line: $180^\\circ$.** Two angles that together form a straight line are called **supplementary**. They add to $180^\\circ$.
- **Right angle: $90^\\circ$.** Two angles that together form a right angle are called **complementary**. They add to $90^\\circ$.
- **Triangle: $180^\\circ$.** The three angles inside any triangle add to $180^\\circ$.
- **Vertical angles are equal.** When two straight lines cross, they make an X. The two angles directly across from each other are equal.

To find a missing angle, write the total and subtract what you know. If two angles are supplementary and one is $130^\\circ$, the other is $180 - 130 = 50^\\circ$.

### The Pythagorean theorem

A **right triangle** has one $90^\\circ$ angle. The two short sides that form the right angle are the **legs**. The long side across from the right angle is the **hypotenuse**.

$$a^{2} + b^{2} = c^{2}$$

Here $a$ and $b$ are the legs and $c$ is the hypotenuse. The hypotenuse is always alone on its own side of the equal sign.

**Worked example.** Legs $3$ and $4$:

$$3^{2} + 4^{2} = 9 + 16 = 25$$

$$c = \\sqrt{25} = 5$$

Three sets of numbers show up constantly: $3$-$4$-$5$, $6$-$8$-$10$, and $5$-$12$-$13$. Knowing them saves time.`
    },
    {
      id: 'geobas-core-p2-q1',
      type: 'quiz' as const,
      question: `Two angles are supplementary. One of them measures $110^\\circ$. What is the measure of the other angle?`,
      options: [
        `$110^\\circ$`,
        `$70^\\circ$`,
        `$20^\\circ$`,
        `$250^\\circ$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $70^\\circ$.

Supplementary angles add up to $180^\\circ$. So subtract the angle you know from $180$:

$$180 - 110 = 70$$

The other angle is $70^\\circ$.

The value $20^\\circ$ comes from using $90$, the complementary total, and subtracting the smaller number from the larger: $110 - 90 = 20$. Supplementary means a straight line, which is $180^\\circ$.`
    },
    {
      id: 'geobas-core-p2-q2',
      type: 'quiz' as const,
      question: `Two straight lines cross each other. One of the four angles formed measures $72^\\circ$. What is the measure of the angle directly across from it?`,
      options: [
        `$18^\\circ$`,
        `$108^\\circ$`,
        `$36^\\circ$`,
        `$72^\\circ$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $72^\\circ$.

When two straight lines cross, they form an X shape. The two angles directly across from each other are called **vertical angles**, and vertical angles are always equal.

So the angle across from the $72^\\circ$ angle is also $72^\\circ$. No arithmetic is needed.

The value $108^\\circ$ is $180 - 72$. That is the angle **next to** the $72^\\circ$ one, not the one across from it.`
    },
    {
      id: 'geobas-core-p2-q3',
      type: 'quiz' as const,
      question: `A triangle has angles measuring $50^\\circ$ and $60^\\circ$. What is the measure of the third angle?`,
      options: [
        `$70^\\circ$`,
        `$110^\\circ$`,
        `$80^\\circ$`,
        `$90^\\circ$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $70^\\circ$.

The three angles inside any triangle add up to $180^\\circ$.

Step 1 — Add the two angles you know:

$$50 + 60 = 110$$

Step 2 — Subtract that from $180$:

$$180 - 110 = 70$$

The third angle is $70^\\circ$.

Answering $110^\\circ$ means stopping after Step 1. That sum is what the two known angles use up, not what is left over.`
    },
    {
      id: 'geobas-core-p2-q4',
      type: 'quiz' as const,
      question: `A right triangle has legs of length $6$ and $8$. What is the length of the hypotenuse?`,
      options: [
        `$14$`,
        `$48$`,
        `$10$`,
        `$7$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $10$.

Use $a^{2} + b^{2} = c^{2}$, where $a$ and $b$ are the legs and $c$ is the hypotenuse.

Step 1 — Square each leg:

$$6^{2} = 36 \\qquad 8^{2} = 64$$

Step 2 — Add them:

$$36 + 64 = 100$$

Step 3 — Take the square root, because that sum equals $c^{2}$, not $c$:

$$c = \\sqrt{100} = 10$$

The hypotenuse is $10$. This is the $6$-$8$-$10$ triangle worth memorizing.

Adding the legs without squaring gives $14$, which skips the theorem entirely.`
    }
  ]
}
