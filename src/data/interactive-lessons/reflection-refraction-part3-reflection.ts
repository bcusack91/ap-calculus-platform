export const reflectionRefractionPart3Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part4-roadmap-reflection',
      type: 'text' as const,
      content: `
# Part 4 Roadmap: Law of Reflection 🪞

## You are here
**Part 4 of 8 — Reflection**

## What you will do
1. Lock in angle measurement from normal
2. Distinguish specular vs diffuse reflection
3. Apply sign convention to plane mirrors
4. Solve and interpret reflection setups quickly

## Reflection solve template
$$\text{Given} \rightarrow \text{Find} \rightarrow \text{Formula }(\theta_i = \theta_r) \rightarrow \text{Substitute} \rightarrow \text{Interpret with diagram}$$
      `
    },
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

<img src="/optics/specular-reflection.svg" alt="Specular Reflection Diagram" style="max-width: 600px; margin: 20px auto; display: block;" />

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

<img src="/optics/diffuse-reflection.svg" alt="Diffuse Reflection Diagram" style="max-width: 600px; margin: 20px auto; display: block;" />

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

Let's apply the **Cartesian sign convention** to **plane mirrors** (flat mirrors with specular reflection).

## Ray Tracing Animation

Watch how we locate the virtual image using ray tracing:

<iframe src="/optics/plane-mirror-animation.html" width="100%" height="700" frameborder="0" style="border-radius: 10px; margin: 20px 0;"></iframe>

## Applying the Sign Convention:

Remember from Part 2: Light travels from left to right, making **right positive (+)** and **left negative (−)**.

For a plane mirror positioned vertically:

**Object on the left** (where light comes from):
- Object distance: $d_o$ = **negative** (−) because it's on the left side
- The object is in the negative region of our coordinate system

**Image on the right** (behind the mirror):
- Image distance: $d_i$ = **positive** (+) because it's on the right side  
- Virtual image forms in the positive direction, behind the mirror

## The Relationship:

For a plane mirror, the magnitudes are equal but signs follow our Cartesian convention:
$$|d_o| = |d_i|$$

Since the object and image are equidistant from the mirror but on opposite sides, and considering our coordinate system where light travels left-to-right (negative to positive):

$$d_i = -d_o$$

**Key Point**: The signs follow the Cartesian convention we established in Part 2. Left side = negative, right side = positive. The image appears behind the mirror in the positive direction!
      `
    },
    {
      id: 'reflection-quiz',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Reflection** ✓

Test your understanding of reflection concepts!
      `,
      exercise: {
        questions: [
          {
            question: "Where are angles measured from in the law of reflection?",
            options: [
              "From the surface of the mirror",
              "From the normal (perpendicular to the surface)",
              "From the optical axis",
              "From the incident ray"
            ],
            correctAnswer: 1,
            explanation: "Angles in reflection are always measured from the normal, which is perpendicular to the surface. This is a key principle: θᵢ and θᵣ are both measured from the normal, not from the surface itself."
          },
          {
            question: "What happens to parallel incident rays in specular reflection?",
            options: [
              "They scatter in all directions",
              "They remain parallel after reflection",
              "They converge to a single point",
              "They are absorbed by the surface"
            ],
            correctAnswer: 1,
            explanation: "In specular reflection (smooth surface), parallel incident rays stay parallel after reflection. This is because all points on the smooth surface have the same orientation, so all normals point in the same direction."
          },
          {
            question: "For a plane mirror with an object on the left side, using Cartesian sign convention where light travels left to right, what are the correct signs?",
            options: [
              "Object distance is positive, image distance is negative",
              "Object distance is negative, image distance is positive",
              "Both distances are positive",
              "Both distances are negative"
            ],
            correctAnswer: 1,
            explanation: "With Cartesian convention where light travels left-to-right (negative to positive), the object on the left has negative distance (dₒ < 0) and the virtual image behind the mirror on the right has positive distance (dᵢ > 0). Remember: dᵢ = -dₒ"
          }
        ]
      }
    },
    {
      id: 'reflection-mistakes-check',
      type: 'multiple-choice' as const,
      content: `
**Common Mistakes: Reflection**
      `,
      exercise: {
        questions: [
          {
            question: 'A student measures both angles from the mirror surface instead of the normal. What is the issue?',
            options: [
              'No issue; both methods are always equivalent in formulas',
              'This can produce wrong use of θᵢ = θᵣ unless converted correctly',
              'Only reflected angle needs normal reference',
              'Angles should be measured from optical axis only'
            ],
            correctAnswer: 1,
            explanation: 'The law is defined with angles from the normal. Surface-based angles require conversion first.'
          },
          {
            question: 'Best correction for “rough surfaces break the law of reflection.”',
            options: [
              'True always',
              'False: each local micro-surface still obeys θᵢ = θᵣ',
              'Only true for mirrors',
              'Depends on color only'
            ],
            correctAnswer: 1,
            explanation: 'Diffuse reflection still follows the law locally; normals vary across microfacets.'
          }
        ]
      }
    },
    {
      id: 'reflection-transfer',
      type: 'multiple-choice' as const,
      content: `
**Transfer Challenge: Car Headlight Glare**
A driver sees broad glare from a wet rough road but a sharp image from a mirror sign. Which explanation is best?
      `,
      exercise: {
        questions: [
          {
            question: 'Best explanation:',
            options: [
              'Both surfaces produce only diffuse reflection',
              'Road gives mostly diffuse scatter; mirror sign gives specular reflection',
              'Mirror sign absorbs more light',
              'Wet road eliminates reflection'
            ],
            correctAnswer: 1,
            explanation: 'Surface smoothness controls whether reflected rays stay organized (specular) or scatter (diffuse).'
          }
        ]
      }
    }
  ]
}
