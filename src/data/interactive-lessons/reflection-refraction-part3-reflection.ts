export const reflectionRefractionPart3Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'law-of-reflection-basics',
      type: 'text' as const,
      content: `
# Law of Reflection

When light hits a smooth surface, it follows a simple rule:

$$\\theta_i = \\theta_r$$

**Angle of incidence = Angle of reflection**

## Key Points:

**1. Angles measured from the NORMAL** ⊥
- The normal is perpendicular to the surface
- NOT from the surface itself!

**2. The rays are COPLANAR** 📐
- Incident ray, reflected ray, and normal all lie in the same plane
- Think of it as everything happening on a flat sheet of paper

<img src="/optics/reflection-diagram.svg" alt="Reflection Diagram" style="max-width: 600px; margin: 20px auto; display: block;" />
      `
    },
    {
      id: 'law-of-reflection-details',
      type: 'text' as const,
      content: `
# Specular Reflection 🪞

**Mirror-like reflection from smooth surfaces**

When light hits a smooth, polished surface, we get **specular reflection**.

## Characteristics:

**Smooth Surface** ✨
- The surface is flat at a microscopic level
- Examples: mirrors, calm water, polished metal, glass

**Parallel Rays Stay Parallel** →→→
- When parallel incident rays hit the surface...
- They reflect as parallel rays
- Each ray follows the law: $\\theta_i = \\theta_r$

**Clear Images Form** 🖼️
- Because rays stay organized and parallel
- We can see clear reflections
- This is why mirrors work!

## Why It Works:

The smoothness means every point on the surface has the same orientation. All the normals (perpendiculars) point in the same direction, so parallel incident rays all reflect at the same angle, maintaining their parallel arrangement.

**Result**: You see a clear, sharp image - like looking in a mirror!
      `
    },
    {
      id: 'diffuse-reflection',
      type: 'text' as const,
      content: `
# Diffuse Reflection 🌫️

**Scattered reflection from rough surfaces**

When light hits a rough surface, we get **diffuse reflection**.

## Characteristics:

**Rough Surface** 🏔️
- The surface is bumpy at a microscopic level
- Examples: paper, walls, unpolished wood, fabric, your skin

**Parallel Rays Scatter** →↗→↖→
- When parallel incident rays hit the surface...
- They reflect in many different directions
- Each ray STILL follows $\\theta_i = \\theta_r$ at its local surface!

**No Clear Images** 🌁
- Rays scatter in all directions
- Information about the original scene gets scrambled
- You can see the surface, but not a reflection in it

## Why It Happens:

The roughness means each point on the surface faces a different direction. The normals point in many different directions, so even parallel incident rays reflect at different angles because they're measured from different normals.

**Result**: You can see the object itself (because light scatters to your eyes), but you don't see mirror-like reflections!

## Key Insight:

Both specular and diffuse reflection follow the **same law**: $\\theta_i = \\theta_r$

The difference is just whether the surface is smooth (specular) or rough (diffuse) at the microscopic scale!
      `
    },
    {
      id: 'plane-mirror-sign-convention',
      type: 'text' as const,
      content: `
# Plane Mirror Sign Convention

Let's apply what we learned to **plane mirrors** (flat mirrors with specular reflection).

## Sign Convention Rules:

For a plane mirror:
- **Object distance**: $d_o$ = positive (in front of mirror)
- **Image distance**: $d_i$ = negative (behind mirror, virtual)
- Image is same distance behind mirror as object is in front
- $|d_i| = d_o$ but $d_i = -d_o$ (negative!)

## Why Negative?

The image forms *behind* the mirror where light doesn't actually go. This makes it a **virtual image**, indicated by the negative sign.

Remember our sign convention from Part 2: the direction light travels is positive. Since light doesn't actually travel behind the mirror, that region is negative!
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
