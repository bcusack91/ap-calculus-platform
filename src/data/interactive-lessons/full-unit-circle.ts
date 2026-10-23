import { ucQuadrantSigns, ucSymmetry } from '@/data/lesson-figures/precalc-trig'

export const fullUnitCircleLessonData = {
  topicSlug: 'the-unit-circle',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Welcome to the Complete Unit Circle!** 🎯

You've mastered the first quadrant. Now let's expand to all four quadrants!

The unit circle has **perfect symmetry** that makes memorizing all the values much easier than you might think. Once you understand the patterns, you can figure out any angle on the unit circle.

**What You'll Learn:**
- 📐 How to extend the first quadrant to all four quadrants
- 🔄 Using **reference angles** to find any coordinate
- ➕➖ Understanding **signs in each quadrant**
- 🎯 Mastering the complete unit circle with 16 key angles, all in radians
      `
    },
    {
      id: 'reference-angles',
      type: 'text' as const,
      content: `
**Reference Angles: Your Secret Weapon** 🎯

A **reference angle** is the acute angle (between $0$ and $\\frac{\\pi}{2}$) that any angle makes with the x-axis.

**The Beautiful Truth:** Every angle on the unit circle uses the **same coordinate values** as its reference angle in the first quadrant—just with different signs!

**Finding Reference Angles:**

- **Quadrant I ($0$ to $\\frac{\\pi}{2}$):** Reference angle = the angle itself
- **Quadrant II ($\\frac{\\pi}{2}$ to $\\pi$):** Reference angle = $\\pi$ − angle
- **Quadrant III ($\\pi$ to $\\frac{3\\pi}{2}$):** Reference angle = angle − $\\pi$
- **Quadrant IV ($\\frac{3\\pi}{2}$ to $2\\pi$):** Reference angle = $2\\pi$ − angle

**Examples:**
- $\\frac{5\\pi}{6}$ is in QII → reference angle = $\\pi - \\frac{5\\pi}{6}$ = $\\frac{\\pi}{6}$
- $\\frac{5\\pi}{4}$ is in QIII → reference angle = $\\frac{5\\pi}{4} - \\pi$ = $\\frac{\\pi}{4}$
- $\\frac{7\\pi}{4}$ is in QIV → reference angle = $2\\pi - \\frac{7\\pi}{4}$ = $\\frac{\\pi}{4}$

> 💡 **Tip:** count in the angle's own denominator. $\\pi = \\frac{6\\pi}{6}$, so $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$.
      `
    },
    {
      id: 'reference-angle-quiz',
      type: 'reference-angle-quiz' as const,
      content: `
**Practice: Find the Reference Angle** 🎯

Let's practice finding reference angles! You need to answer **5 questions correctly in a row** to proceed.

For each angle given, determine its reference angle (the acute angle it makes with the x-axis). Type your answer in radians, such as π/6 or pi/6.
      `
    },
    {
      id: 'quadrant-signs',
      type: 'text' as const,
      figure: ucQuadrantSigns,
      content: `
**Signs in Each Quadrant** ➕➖

Here's the pattern you need to remember:

**Quadrant I ($0$ to $\\frac{\\pi}{2}$):** Both x and y are **positive** ✅ (+, +)
- Example: $\\frac{\\pi}{6}$ → $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$

**Quadrant II ($\\frac{\\pi}{2}$ to $\\pi$):** x is **negative**, y is **positive** ✅ (-, +)
- Example: $\\frac{5\\pi}{6}$ → $\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$

**Quadrant III ($\\pi$ to $\\frac{3\\pi}{2}$):** Both x and y are **negative** ❌ (-, -)
- Example: $\\frac{5\\pi}{4}$ → $\\left(-\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}\\right)$

**Quadrant IV ($\\frac{3\\pi}{2}$ to $2\\pi$):** x is **positive**, y is **negative** ✅ (+ , -)
- Example: $\\frac{7\\pi}{4}$ → $\\left(\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}\\right)$

**Memory Trick:** "**All Students Take Calculus**"
- **A**ll (QI): All positive
- **S**tudents (QII): Sine (y) positive
- **T**ake (QIII): Tangent positive (both negative, so tangent positive)
- **C**alculus (QIV): Cosine (x) positive

**Tangent follows from the signs:** $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ is positive when $x$ and $y$ have the same sign (QI and QIII) and negative when they differ (QII and QIV). Its size comes from the reference angle: $\\tan\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{3}$, $\\tan\\frac{\\pi}{4} = 1$, $\\tan\\frac{\\pi}{3} = \\sqrt{3}$, so for example $\\tan\\frac{5\\pi}{3} = -\\sqrt{3}$ (QIV) and $\\tan\\frac{7\\pi}{6} = \\frac{\\sqrt{3}}{3}$ (QIII).
      `
    },
    {
      id: 'working-examples',
      type: 'text' as const,
      content: `
**Let's Work Through Some Examples** 📝

**Example 1: Find the coordinates for $\\frac{2\\pi}{3}$**

1. **Identify the quadrant:** $\\frac{2\\pi}{3}$ is between $\\frac{\\pi}{2}$ and $\\pi$, so it's in **Quadrant II**
2. **Find the reference angle:** $\\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$
3. **Look up $\\frac{\\pi}{3}$ in QI:** $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$
4. **Apply QII signs (-, +):** $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ ✅

**Example 2: Find the coordinates for $\\frac{4\\pi}{3}$**

1. **Identify the quadrant:** $\\frac{4\\pi}{3}$ is between $\\pi$ and $\\frac{3\\pi}{2}$, so it's in **Quadrant III**
2. **Find the reference angle:** $\\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$
3. **Look up $\\frac{\\pi}{3}$ in QI:** $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$
4. **Apply QIII signs (-, -):** $\\left(-\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}\\right)$ ✅

**Example 3: Find the coordinates for $\\frac{11\\pi}{6}$**

1. **Identify the quadrant:** $\\frac{11\\pi}{6}$ is between $\\frac{3\\pi}{2}$ and $2\\pi$, so it's in **Quadrant IV**
2. **Find the reference angle:** $2\\pi - \\frac{11\\pi}{6} = \\frac{\\pi}{6}$
3. **Look up $\\frac{\\pi}{6}$ in QI:** $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$
4. **Apply QIV signs (+, -):** $\\left(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$ ✅
      `
    },
    {
      id: 'special-values-check',
      type: 'multiple-choice' as const,
      content: `
**Exact Values Check** 🎯

Use the reference angle and the quadrant signs. No calculator.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the exact value of $\\sin\\dfrac{7\\pi}{6}$?',
            options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{7\\pi}{6}$ is in Quadrant III with reference angle $\\frac{\\pi}{6}$, and $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$. Sine ($y$) is negative in Quadrant III, so the value is $-\\frac{1}{2}$. The values $\\pm\\frac{\\sqrt{3}}{2}$ belong to the cosine of this angle.'
          },
          {
            question: 'What is the exact value of $\\cos\\dfrac{3\\pi}{4}$?',
            options: ['$-\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$-\\dfrac{1}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{3\\pi}{4}$ is in Quadrant II with reference angle $\\frac{\\pi}{4}$, and $\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$. Cosine ($x$) is negative in Quadrant II, so the value is $-\\frac{\\sqrt{2}}{2}$. The other negative values use the wrong reference angle.'
          },
          {
            question: 'What is the exact value of $\\tan\\dfrac{5\\pi}{3}$?',
            options: ['$-\\sqrt{3}$', '$\\sqrt{3}$', '$-\\dfrac{\\sqrt{3}}{3}$', '$\\dfrac{\\sqrt{3}}{3}$'],
            correctAnswer: 0,
            explanation: '$\\frac{5\\pi}{3}$ is in Quadrant IV, where $x > 0$ and $y < 0$, so the tangent is negative. The reference angle is $\\frac{\\pi}{3}$ and $\\tan\\frac{\\pi}{3} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$, giving $-\\sqrt{3}$. The value $\\frac{\\sqrt{3}}{3}$ is the tangent of $\\frac{\\pi}{6}$.'
          },
          {
            question: 'An angle $\\theta$ has $\\sin\\theta > 0$ and $\\tan\\theta < 0$. In which quadrant does its terminal ray lie?',
            options: ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'],
            correctAnswer: 0,
            explanation: 'Sine positive puts the ray in Quadrant I or II. Tangent negative means $x$ and $y$ have opposite signs, which rules out Quadrant I. So the ray is in Quadrant II. In Quadrant IV the sine is negative, and in Quadrant III both coordinates are negative, making the tangent positive.'
          }
        ]
      }
    },
    {
      id: 'complete-circle-visual',
      type: 'text' as const,
      content: `
**The Complete Unit Circle** 🎯

Now it's your turn! Fill in the complete unit circle with all 16 key angles, in radians (type π/6 or pi/6).

[FULL_UNIT_CIRCLE_GAME]

Fill in all the angles and coordinates to complete the game. Remember:
- **Use reference angles** to determine the coordinate values
- **Apply the correct signs** based on the quadrant
- **Quadrant I:** Both positive (+, +)
- **Quadrant II:** x negative, y positive (-, +)
- **Quadrant III:** Both negative (-, -)
- **Quadrant IV:** x positive, y negative (+, -)
      `
    },
    {
      id: 'special-angles',
      type: 'text' as const,
      content: `
**The 16 Special Angles** 🌟

Here's the complete set of angles you should know:

**On the axes (in no quadrant):** $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$ (and $2\\pi$, the same position as $0$)

**Quadrant I ($0$ to $\\frac{\\pi}{2}$):**
- $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$

**Quadrant II ($\\frac{\\pi}{2}$ to $\\pi$):**
- $\\frac{2\\pi}{3}, \\frac{3\\pi}{4}, \\frac{5\\pi}{6}$

**Quadrant III ($\\pi$ to $\\frac{3\\pi}{2}$):**
- $\\frac{7\\pi}{6}, \\frac{5\\pi}{4}, \\frac{4\\pi}{3}$

**Quadrant IV ($\\frac{3\\pi}{2}$ to $2\\pi$):**
- $\\frac{5\\pi}{3}, \\frac{7\\pi}{4}, \\frac{11\\pi}{6}$

**Pro Tip:** Notice the pattern in the denominators! Angles with the same denominator share a reference angle:
- Denominator 6 ($\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$): reference angle $\\frac{\\pi}{6}$
- Denominator 4 ($\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$): reference angle $\\frac{\\pi}{4}$
- Denominator 3 ($\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$): reference angle $\\frac{\\pi}{3}$
      `
    },
    {
      id: 'why-it-works',
      type: 'text' as const,
      figure: ucSymmetry,
      content: `
**Why Does the Symmetry Work?** 🤔

The unit circle's symmetry comes from the **definition of sine and cosine**:

**For any angle θ:**
- **cos(θ)** = x-coordinate (signed horizontal position: negative left of the y-axis)
- **sin(θ)** = y-coordinate (signed vertical position: negative below the x-axis)

**The symmetry patterns:**

1. **Reflection across the y-axis** (QI ↔ QII):
   - x-coordinates change sign
   - y-coordinates stay the same
   - Example: $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$

2. **Reflection across the x-axis** (QI ↔ QIV):
   - x-coordinates stay the same
   - y-coordinates change sign
   - Example: $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, $\\sin\\frac{11\\pi}{6} = -\\frac{1}{2}$

3. **Rotation by $\\pi$** (a half turn, QI ↔ QIII):
   - Both coordinates change sign
   - Example: ($\\sqrt{2}/2$, $\\sqrt{2}/2$) at $\\frac{\\pi}{4}$ becomes ($-\\sqrt{2}/2$, $-\\sqrt{2}/2$) at $\\frac{5\\pi}{4}$

This is why you only need to memorize the first quadrant! 🎯
      `
    },
    {
      id: 'completion',
      type: 'text' as const,
      content: `
**🎉 Congratulations! You've Mastered the Complete Unit Circle! 🎉**

You now understand:
- ✅ All 16 key angles and their coordinates
- ✅ How to use reference angles
- ✅ The sign patterns in each quadrant
- ✅ The beautiful symmetry of the unit circle

**What's Next?**
- Practice reading angles in radians quickly (the AP exam works in radians)
- Learn how to find exact values for any trigonometric function
- Apply the unit circle to solve trigonometric equations
- Use the unit circle to graph sine and cosine as periodic functions

**Keep practicing, and the unit circle will become second nature!** 🌟
      `
    }
  ]
}
