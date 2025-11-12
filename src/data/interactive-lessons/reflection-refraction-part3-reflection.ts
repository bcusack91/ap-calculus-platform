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
    }
  ]
}
