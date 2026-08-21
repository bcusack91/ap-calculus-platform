export const lessonData = {
  topicSlug: 'sat-circles-core-skills',
  sections: [
    {
      id: 'circ-core-p1-intro',
      type: 'text' as const,
      content: `# Circles: The Basics

**Part 1 of 2 — One Skill, One Idea**

Two words do most of the work in circle questions.

- The **radius** is the distance from the center of the circle out to the edge.
- The **diameter** is the distance all the way across, through the center.

The diameter is **twice** the radius. So if you know one, you know the other:

$$d = 2r \\qquad \\text{and} \\qquad r = \\frac{d}{2}$$

If the radius is $4$, the diameter is $8$. If the diameter is $8$, the radius is $4$.

### The two formulas

- **Area** (the space inside): $A = \\pi r^{2}$
- **Circumference** (the distance around the edge): $C = 2\\pi r$

Both formulas use the **radius**, not the diameter. When a question gives you a diameter, cut it in half first. That single habit prevents most circle mistakes.

The symbol $\\pi$ is a number, about $3.14$. On the SAT you can usually leave it as $\\pi$ in your answer.

### Worked example

A circle has radius $3$. Find its area and its circumference.

**Area** — put $3$ into $A = \\pi r^{2}$. Square the radius first, then multiply by $\\pi$:

$$3^{2} = 9$$

$$A = 9\\pi$$

**Circumference** — put $3$ into $C = 2\\pi r$:

$$C = 2 \\times \\pi \\times 3 = 6\\pi$$

Same circle, two different answers: $9\\pi$ for area and $6\\pi$ for circumference. Check which one the question wants.

One reminder about the area formula: the exponent applies to $r$ only. In $\\pi r^{2}$ you square the radius, then multiply by $\\pi$ — you never square $\\pi$.`
    },
    {
      id: 'circ-core-p1-q1',
      type: 'quiz' as const,
      question: `A circle has a radius of $5$. What is its area?`,
      options: [
        `$10\\pi$`,
        `$25\\pi$`,
        `$5\\pi$`,
        `$50\\pi$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $25\\pi$.

Area of a circle is $A = \\pi r^{2}$.

Step 1 — Square the radius:

$$5^{2} = 5 \\times 5 = 25$$

Step 2 — Multiply by $\\pi$:

$$A = 25\\pi$$

The choice $10\\pi$ comes from doubling the radius instead of squaring it. Doubling belongs to the circumference formula, $C = 2\\pi r$.`
    },
    {
      id: 'circ-core-p1-q2',
      type: 'quiz' as const,
      question: `A circle has a radius of $6$. What is its circumference?`,
      options: [
        `$36\\pi$`,
        `$6\\pi$`,
        `$18\\pi$`,
        `$12\\pi$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $12\\pi$.

Circumference is the distance around the outside of the circle, and the formula is $C = 2\\pi r$.

Put in $r = 6$:

$$C = 2 \\times \\pi \\times 6 = 12\\pi$$

The choice $36\\pi$ is $\\pi r^{2}$, which is the **area** of this circle. Circumference multiplies the radius by $2$; area squares it.`
    },
    {
      id: 'circ-core-p1-q3',
      type: 'quiz' as const,
      question: `A circle has a diameter of $14$. What is its radius?`,
      options: [
        `$7$`,
        `$28$`,
        `$14$`,
        `$3.5$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $7$.

The diameter goes all the way across the circle, and the radius reaches only from the center to the edge — half as far. So divide the diameter by $2$:

$$r = \\frac{14}{2} = 7$$

The radius is $7$.

The choice $28$ comes from multiplying by $2$ instead of dividing. Going from diameter to radius makes the number smaller, so you divide.`
    },
    {
      id: 'circ-core-p1-q4',
      type: 'quiz' as const,
      question: `A circle has a diameter of $20$. What is its circumference?`,
      options: [
        `$10\\pi$`,
        `$40\\pi$`,
        `$20\\pi$`,
        `$100\\pi$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $20\\pi$.

Step 1 — The formula $C = 2\\pi r$ needs the radius, but the question gives the diameter. Cut it in half:

$$r = \\frac{20}{2} = 10$$

Step 2 — Now put $r = 10$ into the formula:

$$C = 2 \\times \\pi \\times 10 = 20\\pi$$

The circumference is $20\\pi$.

The choice $40\\pi$ comes from putting the diameter into the formula without halving it first. Whenever a circle question hands you a diameter, find the radius before anything else.`
    }
  ]
}
