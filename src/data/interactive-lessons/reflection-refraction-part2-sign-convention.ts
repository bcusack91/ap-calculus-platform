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
    },
    {
      id: 'sign-convention-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding: Sign Convention** ✓

Test your knowledge before moving forward!
      `,
      exercise: {
        questions: [
          {
            question: "Light travels from left to right (→). An image forms to the RIGHT of a mirror (in the direction light is traveling). What is the sign of the image distance?",
            options: [
              "Positive, because the image is on the right side",
              "Negative, because images are always negative",
              "Positive, because light doesn't actually reach there",
              "It depends on the type of mirror"
            ],
            correctAnswer: 0,
            explanation: "The image distance is POSITIVE because the image forms in the positive direction (where light is traveling). This is a real image."
          },
          {
            question: "Light travels from left to right. A virtual image appears BEHIND a mirror (opposite to where light is traveling). What is the sign of the image distance?",
            options: [
              "Positive, because it's an image",
              "Negative, because it's in the opposite direction of light travel",
              "Positive, because virtual images are always positive",
              "Zero, because virtual images don't exist"
            ],
            correctAnswer: 1,
            explanation: "The image distance is NEGATIVE because the image appears in the negative direction (opposite to light travel). Virtual images always have negative distances."
          },
          {
            question: "In the Cartesian sign convention for optics, what defines the positive direction?",
            options: [
              "Always to the right",
              "Always upward",
              "The direction light is traveling",
              "Away from the observer"
            ],
            correctAnswer: 2,
            explanation: "The DIRECTION LIGHT IS TRAVELING always defines the positive direction. This is the fundamental principle of the Cartesian sign convention!"
          }
        ]
      }
    }
  ]
}
