export const reflectionRefractionPart3Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'law-of-reflection',
      type: 'text' as const,
      content: `
**Law of Reflection** 🪞

When light hits a smooth surface, it follows a simple rule:

## The Law

$$\\theta_i = \\theta_r$$

**Angle of incidence = Angle of reflection**

## Important Details:

**1. Angles measured from the NORMAL**
- The normal is perpendicular (⊥) to the surface
- NOT from the surface itself!

**2. Both angles on same side of normal**
- Incident ray, reflected ray, and normal are coplanar

**3. Reflection Diagram:**

\`\`\`
     Incident ray         Reflected ray
          ↓                     ↗
           \\    θᵢ   θᵣ    /
            \\   |   |   /
             \\  |   |  /
              \\ | N | /
    ___________\\|___|/___________
              Surface
               (N = Normal)
\`\`\`

## Types of Reflection:

**Specular Reflection** (Mirror-like):
- Smooth surface
- Parallel incident rays → parallel reflected rays
- Forms clear images

**Diffuse Reflection** (Matte):
- Rough surface
- Parallel incident rays → scattered reflected rays
- No clear image formed

## Plane Mirror Sign Convention:

For a plane mirror:
- Object distance: $d_o$ = positive (in front of mirror)
- Image distance: $d_i$ = negative (behind mirror, virtual)
- Image is same distance behind mirror as object is in front
- $|d_i| = d_o$ but $d_i = -d_o$ (negative!)
      `
    },
    {
      id: 'plane-mirror-example',
      type: 'text' as const,
      content: `
**Plane Mirror Example** 🔍

Let's work through a complete example with sign conventions:

## Problem:
A candle is placed 30 cm in front of a plane mirror. Where is the image located?

## Solution:

**Step 1: Establish the coordinate system**
- Light travels from candle → mirror
- Positive direction: toward and past the mirror (→)
- Negative direction: away from mirror, behind it (←)

**Step 2: Identify given values**
- Object distance: $d_o = +30$ cm (in front of mirror, positive)
- Mirror type: plane (flat)

**Step 3: Apply plane mirror properties**

For a plane mirror:
$$d_i = -d_o$$

Why negative? The image forms *behind* the mirror (in the negative direction), where light doesn't actually go!

$$d_i = -30 \\text{ cm}$$

**Step 4: Interpret the result**

- **Magnitude**: Image is 30 cm from mirror
- **Sign**: Negative means it's behind the mirror
- **Type**: Virtual image (light doesn't actually reach there)
- **Orientation**: Upright (plane mirrors don't invert)
- **Size**: Same as object (magnification = 1)

## Visual Representation:

\`\`\`
         ←  |  →
    Virtual |  Real
            |
    Image   |   Object
      🕯️    |    🕯️
      -30cm |   +30cm
            |
        [Mirror]
\`\`\`

**Key Insight**: The negative sign tells us the image is virtual!
      `
    },
    {
      id: 'reflection-quiz',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Reflection** ✓

Apply what you've learned!
      `,
      exercise: {
        questions: [
          {
            question: "A light ray hits a mirror at 25° from the normal. What is the angle of the reflected ray from the normal?",
            options: [
              "25°",
              "65°",
              "50°",
              "90°"
            ],
            correctAnswer: 0,
            explanation: "By the law of reflection, θᵢ = θᵣ. The angle of reflection equals the angle of incidence, both measured from the normal. So the reflected ray is also 25° from the normal."
          },
          {
            question: "An object is 15 cm in front of a plane mirror. Where is the image located?",
            options: [
              "15 cm in front of the mirror",
              "15 cm behind the mirror",
              "30 cm behind the mirror",
              "7.5 cm behind the mirror"
            ],
            correctAnswer: 1,
            explanation: "For a plane mirror, the image appears the same distance behind the mirror as the object is in front. Since dₒ = +15 cm, then dᵢ = -15 cm (negative because it's behind the mirror, making it virtual)."
          },
          {
            question: "In which type of reflection do parallel incident rays produce parallel reflected rays?",
            options: [
              "Diffuse reflection",
              "Specular reflection",
              "Total internal reflection",
              "Both specular and diffuse"
            ],
            correctAnswer: 1,
            explanation: "Specular reflection occurs on smooth surfaces where parallel incident rays remain parallel after reflection. Diffuse reflection scatters light in many directions."
          }
        ]
      }
    }
  ]
}
