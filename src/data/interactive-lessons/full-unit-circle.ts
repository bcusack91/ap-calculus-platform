export const fullUnitCircleLessonData = {
  topicSlug: 'full-unit-circle',
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

**Quadrant I ($0$ to $\\frac{\\pi}{2}$):**
- $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$

**Quadrant II ($\\frac{\\pi}{2}$ to $\\pi$):**
- $\\frac{2\\pi}{3}, \\frac{3\\pi}{4}, \\frac{5\\pi}{6}, \\pi$

**Quadrant III ($\\pi$ to $\\frac{3\\pi}{2}$):**
- $\\frac{7\\pi}{6}, \\frac{5\\pi}{4}, \\frac{4\\pi}{3}, \\frac{3\\pi}{2}$

**Quadrant IV ($\\frac{3\\pi}{2}$ to $2\\pi$):**
- $\\frac{5\\pi}{3}, \\frac{7\\pi}{4}, \\frac{11\\pi}{6}, 2\\pi$ (same as $0$)

**Pro Tip:** Notice the pattern in the denominators! Angles with the same denominator share a reference angle:
- Denominator 6 ($\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$): reference angle $\\frac{\\pi}{6}$
- Denominator 4 ($\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$): reference angle $\\frac{\\pi}{4}$
- Denominator 3 ($\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$): reference angle $\\frac{\\pi}{3}$
      `
    },
    {
      id: 'why-it-works',
      type: 'text' as const,
      content: `
**Why Does the Symmetry Work?** 🤔

The unit circle's symmetry comes from the **definition of sine and cosine**:

**For any angle θ:**
- **cos(θ)** = x-coordinate = horizontal distance from origin
- **sin(θ)** = y-coordinate = vertical distance from origin

**The symmetry patterns:**

1. **Reflection across the y-axis** (QI ↔ QII):
   - x-coordinates become negative
   - y-coordinates stay the same
   - Example: $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$

2. **Reflection across the x-axis** (QI ↔ QIV):
   - x-coordinates stay the same
   - y-coordinates become negative
   - Example: $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, $\\sin\\frac{11\\pi}{6} = -\\frac{1}{2}$

3. **Rotation by $\\pi$** (a half turn, QI ↔ QIII):
   - Both coordinates become negative
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
- Practice reading angles in radians quickly (the AP exam uses radians only)
- Learn how to find exact values for any trigonometric function
- Apply the unit circle to solve trigonometric equations
- Use the unit circle to graph sine and cosine as periodic functions

**Keep practicing, and the unit circle will become second nature!** 🌟
      `
    }
  ]
}
