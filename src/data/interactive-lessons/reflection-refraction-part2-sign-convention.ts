export const reflectionRefractionPart2Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'sign-convention-explained',
      type: 'text' as const,
      content: `
**Understanding the Sign Convention** 📐

Let's establish our coordinate system clearly:

## The Cartesian Sign Convention

**This is THE MOST IMPORTANT concept in optics!**

In optics, we use a coordinate system where:

✅ **Positive direction** = Direction light is traveling (front of arrow →)
✅ **Negative direction** = Opposite to light travel (back of arrow ←)

## The Light Ray Defines Our Axes

Imagine light traveling from an object toward a mirror or lens:

\`\`\`
Object ----→ [Optical Element] ----→
         light direction (POSITIVE)
\`\`\`

**Positive (+) direction**: The way light is traveling (→)
**Negative (−) direction**: Opposite to light travel (←)

## What This Means for Measurements:

**Object Distance ($d_o$ or $s_o$):**
- Light travels FROM object TO optical element
- Object is "behind" the light (in negative direction)
- We measure it as **positive** (by convention, we use absolute value)

**Image Distance ($d_i$ or $s_i$):**
- **Positive**: Image forms where light actually converges (real image)
- **Negative**: Image forms where light *appears* to come from (virtual image)

**Focal Length ($f$):**
- **Positive**: Converging element (concave mirror, convex lens)
- **Negative**: Diverging element (convex mirror, concave lens)

## Visual Guide:

\`\`\`
        Negative ← | → Positive
                   |
        ←──────────0──────────→
                   |
         Virtual   |   Real
         images    |   images
\`\`\`

**Key Principle**: The arrow on the light ray defines the positive direction!

**Remember**: The positive direction is always where light is heading!
      `
    }
  ]
}
