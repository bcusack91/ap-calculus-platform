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
- 🎯 Mastering the complete unit circle with 16 key angles
      `
    },
    {
      id: 'reference-angles',
      type: 'text' as const,
      content: `
**Reference Angles: Your Secret Weapon** 🎯

A **reference angle** is the acute angle (0° to 90°) that any angle makes with the x-axis.

**The Beautiful Truth:** Every angle on the unit circle uses the **same coordinate values** as its reference angle in the first quadrant—just with different signs!

**Finding Reference Angles:**

- **Quadrant I (0° to 90°):** Reference angle = the angle itself
- **Quadrant II (90° to 180°):** Reference angle = 180° - angle
- **Quadrant III (180° to 270°):** Reference angle = angle - 180°
- **Quadrant IV (270° to 360°):** Reference angle = 360° - angle

**Examples:**
- 150° is in QII → reference angle = 180° - 150° = **30°**
- 225° is in QIII → reference angle = 225° - 180° = **45°**
- 315° is in QIV → reference angle = 360° - 315° = **45°**
      `
    },
    {
      id: 'quadrant-signs',
      type: 'text' as const,
      content: `
**Signs in Each Quadrant** ➕➖

Here's the pattern you need to remember:

**Quadrant I (0° to 90°):** Both x and y are **positive** ✅ (+, +)
- Example: 30° → $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$

**Quadrant II (90° to 180°):** x is **negative**, y is **positive** ✅ (-, +)
- Example: 150° → $\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$

**Quadrant III (180° to 270°):** Both x and y are **negative** ❌ (-, -)
- Example: 225° → $\\left(-\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}\\right)$

**Quadrant IV (270° to 360°):** x is **positive**, y is **negative** ✅ (+ , -)
- Example: 315° → $\\left(\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}\\right)$

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

**Example 1: Find the coordinates for 120°**

1. **Identify the quadrant:** 120° is between 90° and 180°, so it's in **Quadrant II**
2. **Find the reference angle:** 180° - 120° = **60°**
3. **Look up 60° in QI:** $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$
4. **Apply QII signs (-, +):** $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ ✅

**Example 2: Find the coordinates for 240°**

1. **Identify the quadrant:** 240° is between 180° and 270°, so it's in **Quadrant III**
2. **Find the reference angle:** 240° - 180° = **60°**
3. **Look up 60° in QI:** $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$
4. **Apply QIII signs (-, -):** $\\left(-\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}\\right)$ ✅

**Example 3: Find the coordinates for 330°**

1. **Identify the quadrant:** 330° is between 270° and 360°, so it's in **Quadrant IV**
2. **Find the reference angle:** 360° - 330° = **30°**
3. **Look up 30° in QI:** $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$
4. **Apply QIV signs (+, -):** $\\left(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$ ✅
      `
    },
    {
      id: 'complete-circle-visual',
      type: 'text' as const,
      content: `
**The Complete Unit Circle** 🎯

Now it's your turn! Fill in the complete unit circle with all 16 key angles.

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

**Quadrant I (0° to 90°):**
- 0°, 30°, 45°, 60°, 90°

**Quadrant II (90° to 180°):**
- 120°, 135°, 150°, 180°

**Quadrant III (180° to 270°):**
- 210°, 225°, 240°, 270°

**Quadrant IV (270° to 360°):**
- 300°, 315°, 330°, 360° (same as 0°)

**Pro Tip:** Notice the symmetry! The angles in each quadrant mirror each other:
- 30° and 150° are both 30° from their nearest axis
- 45° and 135° and 225° and 315° are all 45° from their nearest axis
- 60° and 120° are both 30° from their nearest axis
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
   - Example: cos(30°) = √3/2, cos(150°) = -√3/2

2. **Reflection across the x-axis** (QI ↔ QIV):
   - x-coordinates stay the same
   - y-coordinates become negative
   - Example: sin(30°) = 1/2, sin(330°) = -1/2

3. **Rotation by 180°** (QI ↔ QIII):
   - Both coordinates become negative
   - Example: (√2/2, √2/2) at 45° becomes (-√2/2, -√2/2) at 225°

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
- Practice converting between degrees and radians
- Learn how to find exact values for any trigonometric function
- Apply the unit circle to solve trigonometric equations
- Use the unit circle in calculus for derivatives and integrals

**Keep practicing, and the unit circle will become second nature!** 🌟
      `
    }
  ]
}
