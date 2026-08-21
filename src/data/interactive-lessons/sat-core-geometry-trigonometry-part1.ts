export const lessonData = {
  topicSlug: 'sat-geometry-trigonometry-core-skills',
  sections: [
    {
      id: 'geotrig-core-p1-intro',
      type: 'text' as const,
      content: `# Trigonometry: The Basics

**Part 1 of 2 — One Skill, One Idea**

Trigonometry on the SAT starts with one shape: a **right triangle**, which is a triangle with one $90°$ angle.

### Naming the three sides

Pick one of the two slanted angles and call it $\\theta$ (that is the Greek letter theta — it is a name for "the angle we care about"). Now the three sides get names:

- **Hypotenuse** — the longest side, always the one across from the $90°$ angle. Its name never changes.
- **Opposite** — the side across the triangle from $\\theta$.
- **Adjacent** — the other leg, the one touching $\\theta$.

Opposite and adjacent swap places if you pick the other angle. That is normal. Find $\\theta$ first, then label.

### SOH-CAH-TOA

Three ratios, and this word helps you remember all three:

$$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} \\qquad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$$

**S**ine is **O**pposite over **H**ypotenuse. **C**osine is **A**djacent over **H**ypotenuse. **T**angent is **O**pposite over **A**djacent.

### Worked example

Picture a right triangle. The angle $\\theta$ sits at the bottom left. The side going straight up across from $\\theta$ has length $3$. The bottom side touching $\\theta$ has length $4$. The slanted side across from the right angle has length $5$.

Label them: opposite $= 3$, adjacent $= 4$, hypotenuse $= 5$.

Now read the ratios straight off:

$$\\sin\\theta = \\frac{3}{5} \\qquad \\cos\\theta = \\frac{4}{5} \\qquad \\tan\\theta = \\frac{3}{4}$$

That is the whole move. Label the three sides, then pick the ratio the question asks for.`
    },
    {
      id: 'geotrig-core-p1-q1',
      type: 'quiz' as const,
      question: `In a right triangle, the side opposite angle $\\theta$ has length $8$ and the hypotenuse has length $17$. What is $\\sin\\theta$?`,
      options: [
        `$\\frac{8}{17}$`,
        `$\\frac{17}{8}$`,
        `$\\frac{8}{15}$`,
        `$\\frac{15}{17}$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $\\frac{8}{17}$.

Sine is opposite over hypotenuse — the S-O-H part of SOH-CAH-TOA.

The opposite side is $8$ and the hypotenuse is $17$, so:

$$\\sin\\theta = \\frac{8}{17}$$

Writing $\\frac{17}{8}$ flips the fraction. The hypotenuse goes on the bottom for both sine and cosine, because it is the longest side.`
    },
    {
      id: 'geotrig-core-p1-q2',
      type: 'quiz' as const,
      question: `Which ratio equals $\\cos\\theta$ in a right triangle?`,
      options: [
        `$\\frac{\\text{opposite}}{\\text{hypotenuse}}$`,
        `$\\frac{\\text{opposite}}{\\text{adjacent}}$`,
        `$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$`,
        `$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $\\frac{\\text{adjacent}}{\\text{hypotenuse}}$.

The middle chunk of SOH-**CAH**-TOA stands for **C**osine $=$ **A**djacent over **H**ypotenuse.

The adjacent side is the leg that touches angle $\\theta$. The hypotenuse is the long side across from the right angle.

The ratio $\\frac{\\text{opposite}}{\\text{hypotenuse}}$ is sine, not cosine — those two are easy to trade by accident, so say the whole phrase "SOH-CAH-TOA" in your head before choosing.`
    },
    {
      id: 'geotrig-core-p1-q3',
      type: 'quiz' as const,
      question: `In a right triangle, the side opposite angle $\\theta$ has length $5$ and the side adjacent to $\\theta$ has length $12$. What is $\\tan\\theta$?`,
      options: [
        `$\\frac{12}{5}$`,
        `$\\frac{5}{12}$`,
        `$\\frac{5}{13}$`,
        `$\\frac{12}{13}$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $\\frac{5}{12}$.

Tangent is opposite over adjacent — the T-O-A part of SOH-CAH-TOA.

The opposite side is $5$ and the adjacent side is $12$, so:

$$\\tan\\theta = \\frac{5}{12}$$

Notice that tangent is the one ratio that never uses the hypotenuse. It compares the two legs only.`
    },
    {
      id: 'geotrig-core-p1-q4',
      type: 'quiz' as const,
      question: `A right triangle has legs of length $6$ and $8$ and a hypotenuse of length $10$. The angle $\\theta$ is opposite the leg of length $6$. What is $\\cos\\theta$?`,
      options: [
        `$\\frac{6}{10}$`,
        `$\\frac{6}{8}$`,
        `$\\frac{10}{8}$`,
        `$\\frac{8}{10}$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $\\frac{8}{10}$.

Step 1 — Label the sides for this angle. The problem says the leg of length $6$ is opposite $\\theta$. That leaves the leg of length $8$ as the adjacent side, and $10$ is the hypotenuse.

Step 2 — Cosine is adjacent over hypotenuse:

$$\\cos\\theta = \\frac{8}{10}$$

That fraction also reduces to $\\frac{4}{5}$, which is the same value.

The choice $\\frac{6}{10}$ is opposite over hypotenuse, which is $\\sin\\theta$ for this angle.`
    }
  ]
}
