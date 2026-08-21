export const lessonData = {
  topicSlug: 'sat-geometry-trigonometry-core-skills',
  sections: [
    {
      id: 'geotrig-core-p2-recap',
      type: 'text' as const,
      content: `# Trig Values Worth Memorizing

**Part 2 of 2 — Practice**

### The three ratios from Part 1

- $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$
- $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$
- $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$

Say it as SOH-CAH-TOA. Label the sides first, then pick the ratio.

### The values that show up again and again

Six numbers. Learning them means some questions take no work at all.

- $\\sin 30° = \\frac{1}{2}$
- $\\cos 60° = \\frac{1}{2}$
- $\\sin 45° = \\frac{\\sqrt{2}}{2}$ and $\\cos 45° = \\frac{\\sqrt{2}}{2}$
- $\\tan 45° = 1$
- $\\sin 90° = 1$ and $\\sin 0° = 0$

The $\\sin 30° = \\frac{1}{2}$ one is worth extra attention. It says the side across from a $30°$ angle is exactly **half the hypotenuse**. That turns some problems into a single division by $2$.

### One identity

$$\\sin^{2}\\theta + \\cos^{2}\\theta = 1$$

This is true for every angle, always. The little $2$ means "square the whole thing," so $\\sin^{2}\\theta$ means $\\sin\\theta$ times $\\sin\\theta$. When a question hands you a sine and a cosine added like this, the answer is $1$.

### Radians, in one line

Angles can be measured in degrees or in **radians**. A full circle is $360°$, which is the same as $2\\pi$ radians. To go from degrees to radians, multiply by $\\frac{\\pi}{180}$.`
    },
    {
      id: 'geotrig-core-p2-q1',
      type: 'quiz' as const,
      question: `What is $\\sin 30°$?`,
      options: [
        `$1$`,
        `$\\frac{\\sqrt{3}}{2}$`,
        `$\\frac{1}{2}$`,
        `$\\frac{\\sqrt{2}}{2}$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $\\frac{1}{2}$.

This is one to memorize: $\\sin 30° = \\frac{1}{2}$.

What it means in a picture: in any right triangle with a $30°$ angle, the side across from that $30°$ angle is exactly half as long as the hypotenuse. Half of the hypotenuse over the whole hypotenuse is $\\frac{1}{2}$.

The value $\\frac{\\sqrt{2}}{2}$ belongs to $45°$, not $30°$.`
    },
    {
      id: 'geotrig-core-p2-q2',
      type: 'quiz' as const,
      question: `What is $\\tan 45°$?`,
      options: [
        `$1$`,
        `$0$`,
        `$\\sqrt{3}$`,
        `$\\frac{1}{2}$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $1$.

Tangent is opposite over adjacent. In a right triangle with a $45°$ angle, the two legs are the same length, so the opposite side and the adjacent side are equal.

Any number divided by itself is $1$. For example, if both legs are $7$:

$$\\tan 45° = \\frac{7}{7} = 1$$

So $\\tan 45° = 1$, no matter how big the triangle is.`
    },
    {
      id: 'geotrig-core-p2-q3',
      type: 'quiz' as const,
      question: `Simplify $\\sin^{2}\\theta + \\cos^{2}\\theta$.`,
      options: [
        `$0$`,
        `$2$`,
        `$\\tan\\theta$`,
        `$1$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $1$.

This is the Pythagorean identity:

$$\\sin^{2}\\theta + \\cos^{2}\\theta = 1$$

It holds for every single angle. You do not need to know what $\\theta$ is, and there is nothing to calculate — when you see this exact sum, write $1$.

The choice $2$ comes from counting the two terms, but the identity is about their squared values adding to $1$, not about how many terms there are.`
    },
    {
      id: 'geotrig-core-p2-q4',
      type: 'quiz' as const,
      question: `A right triangle has a hypotenuse of length $10$ and one angle measuring $30°$. What is the length of the side opposite the $30°$ angle?`,
      options: [
        `$10$`,
        `$5$`,
        `$20$`,
        `$3$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $5$.

Step 1 — Sine is opposite over hypotenuse, so:

$$\\sin 30° = \\frac{\\text{opposite}}{10}$$

Step 2 — You know $\\sin 30° = \\frac{1}{2}$, so:

$$\\frac{1}{2} = \\frac{\\text{opposite}}{10}$$

Step 3 — Multiply both sides by $10$:

$$\\text{opposite} = \\frac{1}{2} \\times 10 = 5$$

The side opposite the $30°$ angle is $5$.

The shortcut is worth saying out loud: the side across from a $30°$ angle is half the hypotenuse.`
    }
  ]
}
