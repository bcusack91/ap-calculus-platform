export const reflectionRefractionPart7Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part8-roadmap-dispersion',
      type: 'text' as const,
      content: `
# 🧊 Refraction Through Several Surfaces

**Part 8 of 8 — The Grand Finale**

You've learned reflection, refraction, Snell's law, and TIR one boundary at a time. Real light often crosses **several** boundaries in a row — through a window, a glass block, or layers of different materials.

In this part you'll learn to:
- Follow a ray through a block of glass and predict how it leaves
- Use the fact that $n\\sin\\theta$ carries across parallel boundaries
- Measure an index of refraction from lab data with a straight-line graph
      `
    },
    {
      id: 'part8-slab',
      type: 'text' as const,
      content: `
**Light Through a Glass Block** 🧊

## Straight In, Straight Out

If light hits a surface **along the normal** ($\\theta_1 = 0°$), then $\\sin\\theta_2 = 0$ too: the light slows down but does **not** change direction.

## A Block With Parallel Faces

**Problem:** Light in air strikes a flat glass block ($n = 1.50$) at 40° from the normal. Follow it through.

**Entering (air → glass):**
$$\\sin\\theta_2 = \\frac{(1.00)\\sin 40°}{1.50} = \\frac{0.643}{1.50} = 0.429 \\quad \\Rightarrow \\quad \\theta_2 = 25.4°$$

The ray bends **toward** the normal.

**Leaving (glass → air):** the faces are parallel, so the ray reaches the bottom face at the **same** 25.4° from the normal:
$$\\sin\\theta_3 = \\frac{(1.50)\\sin 25.4°}{1.00} = 0.643 \\quad \\Rightarrow \\quad \\theta_3 = 40°$$

The ray bends **away** from the normal by exactly the same amount.

### What This Shows

- The ray leaves **parallel** to the direction it came in
- It is shifted **sideways** — the thicker the block, the bigger the shift
- This is why objects seen through a thick window look slightly displaced but not tilted

## Layers of Material

Across parallel boundaries, Snell's law chains together:
$$n_1\\sin\\theta_1 = n_2\\sin\\theta_2 = n_3\\sin\\theta_3 = \\cdots$$

So the quantity $n\\sin\\theta$ is the **same in every layer**. Example: light in water ($n = 1.33$) at 30° passes through a flat glass plate ($n = 1.50$) into air:

- In water: $n\\sin\\theta = (1.33)(0.500) = 0.665$
- In glass: $\\sin\\theta = 0.665/1.50 = 0.443$, so $\\theta = 26.3°$
- In air: $\\sin\\theta = 0.665$, so $\\theta = 41.7°$ — the **same** angle as if the glass weren't there

For parallel layers, the final angle depends only on the **first and last** materials.
      `
    },
    {
      id: 'part8-slab-check',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** — Several surfaces in a row.
      `,
      exercise: {
        questions: [
          {
            question: "A ray in air enters a flat glass block ($n = 1.50$) with parallel faces at 35.0° from the normal. At what angle from the normal does it leave the far face into air?",
            options: [
              "14.8°",
              "22.5°",
              "35.0°",
              "59.4°"
            ],
            correctAnswer: 2,
            explanation: "Inside the glass the angle is 22.5°, and because the faces are parallel the ray meets the far face at 22.5° and refracts back to 35.0°. 22.5° stops inside the glass, 14.8° bends toward the normal a second time, and 59.4° uses Snell's law backward at the first face."
          },
          {
            question: "Light strikes a flat glass surface exactly along the normal. What happens to the light that enters the glass?",
            options: [
              "It bends toward the normal and slows down",
              "It continues straight on but slows down",
              "It bends away from the normal and speeds up",
              "It reflects totally and none of it enters"
            ],
            correctAnswer: 1,
            explanation: "With $\\theta_1 = 0°$, Snell's law gives $\\theta_2 = 0°$, so the direction does not change, but the light still slows to $c/n$. Total internal reflection cannot happen here: it needs light going from high $n$ to low $n$ beyond the critical angle."
          },
          {
            question: "Light leaves water ($n = 1.33$) at 30° and passes through a flat glass plate ($n = 1.50$) into air. Compared with going straight from water into air, the final angle in air is:",
            options: [
              "Smaller, since the glass bends it toward the normal",
              "Larger, since light leaves glass instead of water",
              "The same, since $n\\sin\\theta$ is equal in every layer",
              "Zero, since the plate's faces are parallel to each other"
            ],
            correctAnswer: 2,
            explanation: "Across parallel boundaries $n\\sin\\theta$ stays the same, so the angle in air depends only on the water and the air: 41.7° either way. The glass bends the ray toward the normal on the way in and away by the same amount on the way out."
          }
        ]
      }
    },
    {
      id: 'part8-measuring-n',
      type: 'text' as const,
      content: `
**Measuring an Index of Refraction** 🔬

## The Lab

Shine a laser from air into a block of clear plastic. For several angles of incidence $\\theta_1$, measure the angle of refraction $\\theta_2$.

## Make It a Straight Line

Snell's law with air ($n_1 = 1.00$) says $\\sin\\theta_1 = n\\sin\\theta_2$. So if you plot

- **vertical axis:** $\\sin\\theta_1$
- **horizontal axis:** $\\sin\\theta_2$

the points fall on a straight line through the origin whose **slope is $n$**.

## Sample Data (glass)

| $\\theta_1$ | $\\theta_2$ | $\\sin\\theta_1$ | $\\sin\\theta_2$ |
|-----------|-----------|-----------------|-----------------|
| 20° | 13.2° | 0.342 | 0.228 |
| 40° | 25.4° | 0.643 | 0.429 |
| 60° | 35.3° | 0.866 | 0.578 |

Slope $= \\dfrac{0.866 - 0.342}{0.578 - 0.228} = 1.50$, so $n = 1.50$.

## What Else the Slope Tells You

- **Speed in the material:** $v = \\dfrac{c}{n} = \\dfrac{3.0 \\times 10^8}{1.50} = 2.0 \\times 10^8$ m/s
- **Wavelength in the material:** $\\lambda = \\dfrac{\\lambda_{\\text{air}}}{n}$ — the frequency doesn't change
- **Critical angle with air:** $\\theta_c = \\sin^{-1}(1/n) = 41.8°$

## Why a Glass Block Never Traps Light From Air

Light entering from air can reach at most $\\theta_2 = 41.8°$ inside (when $\\theta_1$ approaches 90°). With parallel faces, it meets the far face at that same angle — never **beyond** the critical angle. So light that enters one face of a parallel-sided block from air always gets back out through the opposite face. TIR needs a surface the light meets at a steeper angle, as in a reflecting prism or the wall of a fiber.
      `
    },
    {
      id: 'dispersion-quiz',
      type: 'multiple-choice' as const,
      content: `
**Master Check: Reflection & Refraction Complete** ✓

Final quiz covering the entire topic!
      `,
      exercise: {
        questions: [
          {
            question: "Light travels at $2.25 \\times 10^{8}$ m/s in a material. What is the material's index of refraction?",
            options: [
              "n = 0.75",
              "n = 1.33",
              "n = 1.50",
              "n = 2.25"
            ],
            correctAnswer: 1,
            explanation: "n = c/v = $(3.0 \\times 10^{8})/(2.25 \\times 10^{8})$ = 1.33. This is water! Remember: higher n means light travels slower in the material."
          },
          {
            question: "Light in glass (n=1.5) hits a glass-air boundary at 25° from normal. What is the refraction angle in air (n=1.0)?",
            options: [
              "16.6°",
              "25.0°",
              "39.3°",
              "50.0°"
            ],
            correctAnswer: 2,
            explanation: "Using Snell's Law: (1.5)sin(25°) = $(1.0)\\sin (\\theta_{2})$. Solving: $\\sin (\\theta_{2})$ = 0.634, so $\\theta_{2}$ = 39.3°. Light bends AWAY from normal when entering a less dense medium."
          },
          {
            question: "What is the critical angle for light going from diamond (n=2.42) to air (n=1.0)?",
            options: [
              "24.4°",
              "41.8°",
              "48.8°",
              "Cannot be calculated"
            ],
            correctAnswer: 0,
            explanation: "θc = $\\sin^{-1}(n_{2}/n_{1})$ = $\\sin^{-1}(1.0/2.42)$ = 24.4°. This small critical angle is why diamonds sparkle so much - light easily undergoes total internal reflection!"
          },
          {
            question: "Light in water (n=1.33) hits the water-air surface at 55° from normal. The critical angle is 48.8°. What happens?",
            options: [
              "Normal refraction into air at 55°",
              "Total internal reflection occurs",
              "Light is absorbed by the water",
              "Light refracts at 90° along the surface"
            ],
            correctAnswer: 1,
            explanation: "Since 55° > 48.8° (critical angle), total internal reflection occurs! ALL the light reflects back into the water. No light escapes to air."
          },
          {
            question: "A student plots $\\sin\\theta$ in air (vertical axis) against $\\sin\\theta$ in a plastic (horizontal axis) and gets a straight line through the origin with slope 1.6. What is the plastic's index of refraction?",
            options: [
              "0.63",
              "1.3",
              "1.6",
              "2.6"
            ],
            correctAnswer: 2,
            explanation: "Snell's law with air gives $\\sin\\theta_{air} = n\\sin\\theta_{plastic}$, so the slope of this graph is $n = 1.6$. 0.63 inverts the slope, and 1.3 and 2.6 take its square root and its square."
          },
          {
            question: "Light in air enters a flat glass block ($n = 1.50$) with parallel faces. Can it undergo total internal reflection at the far face?",
            options: [
              "No, the angle inside never exceeds the critical angle",
              "Yes, whenever the entry angle is greater than 41.8°",
              "Yes, whenever the block is made thick enough",
              "No, total internal reflection cannot happen in glass"
            ],
            correctAnswer: 0,
            explanation: "Entering from air, the angle inside can only approach 41.8°, and parallel faces mean the ray meets the far face at that same angle, which never exceeds the critical angle. Glass can show total internal reflection, but only when light meets a surface beyond 41.8°, as in a prism."
          },
          {
            question: "A concave mirror with $f = +12$ cm forms an image of an object placed 4 cm in front of it. Using the AP sign convention, what is the image distance?",
            options: [
              "$s_i = -6$ cm",
              "$s_i = +6$ cm",
              "$s_i = +3$ cm",
              "$s_i = -3$ cm"
            ],
            correctAnswer: 0,
            explanation: "$1/s_i = 1/12 - 1/4 = -2/12$, so $s_i = -6$ cm. The object is inside the focal length, so the image is virtual (negative), upright and behind the mirror; adding the reciprocals instead gives $+3$ cm."
          }
        ]
      }
    },
    {
      id: 'summary',
      type: 'text' as const,
      content: `
**Summary of Key Concepts** 📚

You've completed the full Reflection & Refraction topic! Here's what you've mastered:

### Sign Convention (AP: "real is positive")
- Object distance $s_o$: positive for real objects
- Image distance $s_i$: positive for real images, negative for virtual images
- Focal length $f$: positive for converging (concave mirror, convex lens), negative for diverging
- Heights: above the axis positive, below negative

### Law of Reflection
$$\\theta_i = \\theta_r$$
- Angles measured from **normal**
- Always obeys this law (smooth surfaces)

### Index of Refraction
$$n = \\frac{c}{v}$$
- Always $n \\geq 1$ (light slower in materials)
- Higher $n$ = slower light = denser medium

### Snell's Law
$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$
- Entering denser medium ($n_2 > n_1$): bend toward normal
- Entering less dense ($n_2 < n_1$): bend away from normal
- Along the normal: no bending

### Total Internal Reflection
$$\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right)$$ (only when $n_1 > n_2$)
- If $\\theta_1 > \\theta_c$: 100% reflection
- Powers fiber optics, creates sparkle in diamonds

### Several Surfaces
- $n\\sin\\theta$ is the same in every layer of parallel boundaries
- A parallel-sided block shifts a ray sideways without changing its direction
- A graph of $\\sin\\theta_1$ vs. $\\sin\\theta_2$ has slope $n_2/n_1$

---

## What's Next?

Now that you understand reflection and refraction, you're ready for:
- **Mirrors** (curved surfaces that reflect)
- **Lenses** (curved surfaces that refract)
- **Wave optics** (interference, diffraction)
      `
    },
    {
      id: 'final-transfer-case',
      type: 'multiple-choice' as const,
      content: `
**Final Real-World Check** — A beam travels from air into a glass block, then from the glass into water. In the water it reaches a water–air surface that is **tilted** relative to the glass faces, strikes it at an angle beyond the critical angle, and does not get out.
      `,
      exercise: {
        questions: [
          {
            question: 'Which sequence of concepts explains this setup?',
            options: [
              'Bends toward the normal → bends away from the normal → total internal reflection',
              'Bends away from the normal → bends toward the normal → total internal reflection',
              'Bends toward the normal → bends toward the normal → diffuse reflection',
              'Bends toward the normal → no bending in the water → partial reflection'
            ],
            correctAnswer: 0,
            explanation: 'Air to glass is low $n$ to high $n$, so the beam bends toward the normal; glass ($n = 1.50$) to water ($n = 1.33$) is high to low, so it bends away; and at the water–air surface, beyond the 48.8° critical angle, it is totally internally reflected. That last step is possible only because the surface is tilted: if every boundary were parallel, $n\\sin\\theta$ would stay equal to its value in air, and the ray could never exceed the critical angle at the final surface.'
          }
        ]
      }
    }
  ]
}
