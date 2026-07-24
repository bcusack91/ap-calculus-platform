export const reflectionRefractionPart7Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part8-roadmap-dispersion',
      type: 'text' as const,
      content: `
# 🌈 Dispersion — Why Rainbows Exist

**Part 8 of 8 — The Grand Finale**

You've learned reflection, refraction, and TIR. Now we put it all together to explain one of nature's most beautiful phenomena: the rainbow.

The key insight: the index of refraction isn't the same for every color. Blue light bends more than red. That tiny difference creates prisms, rainbows, and the "fire" in a diamond.
      `
    },
    {
      id: 'dispersion',
      type: 'text' as const,
      content: `
**Dispersion: Why Rainbows Exist** 🌈

Not all wavelengths of light refract the same amount!

## What is Dispersion?

**Dispersion** is the separation of white light into its component colors.

**Why it happens:**
- Index of refraction ($n$) depends slightly on wavelength
- Shorter wavelengths (blue) → higher $n$ → bend more
- Longer wavelengths (red) → lower $n$ → bend less

## Typical Values in Glass:

| Color | Wavelength | Index ($n$) |
|-------|------------|-------------|
| Red   | 700 nm     | 1.513       |
| Orange| 620 nm     | 1.514       |
| Yellow| 580 nm     | 1.517       |
| Green | 550 nm     | 1.519       |
| Blue  | 470 nm     | 1.528       |
| Violet| 400 nm     | 1.532       |

Notice: $n$ increases as wavelength **decreases**!

## White Light Through a Prism

<div style="text-align: center; margin: 20px 0;">
  <img loading="lazy" src="/optics/prism-dispersion.svg" alt="White light dispersing through a prism" style="max-width: 100%; height: auto;" />
</div>

**Each color refracts at a slightly different angle!**

## Physics Behind It

From Snell's Law: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$

If $n_2$ is larger → $\\sin\\theta_2$ must be smaller → $\\theta_2$ is smaller

- Blue light: larger $n$ → bends more (smaller angle from normal)
- Red light: smaller $n$ → bends less (larger angle from normal)

## Sign Convention with Dispersion:

When analyzing each color:
- Each has its own refraction angle ($\\theta_2$)
- All measured from the same normal
- Positive direction doesn't change (still defined by light path)
- Just different values of $\\theta_2$ for each $\\lambda$!
      `
    },
    {
      id: 'rainbow-formation',
      type: 'text' as const,
      content: `
**Rainbow Formation** 🌈☔

Rainbows combine refraction, dispersion, and total internal reflection!

## How Rainbows Form

<div style="text-align: center; margin: 20px 0;">
  <img loading="lazy" src="/optics/rainbow-raindrop.svg" alt="Light path through a raindrop creating a rainbow" style="max-width: 100%; height: auto;" />
</div>

**1. Refraction (entering drop)**
- White sunlight enters raindrop
- Disperses into colors (violet bends most)

**2. Reflection (back of drop)**
- Light hits back surface
- Angle > critical angle → TIR!
- All light reflects back

**3. Refraction (exiting drop)**
- Light exits drop
- Disperses again (amplifies color separation)
- Different colors exit at different angles

## The Viewing Geometry

You see a rainbow when:
- Sun is **behind you**
- Rain or mist is **in front of you**
- Angle between sun, drop, and your eye ≈ **42°** for red

**Each color at slightly different angle:**
- Red: 42° (outer arc)
- Orange: 41.5°
- Yellow: 41°
- Green: 40.5°
- Blue: 40°
- Violet: 39.5° (inner arc)

## Why the Arc Shape?

All raindrops at 42° from the sun-you line form a circle!

<div style="text-align: center; margin: 20px 0;">
  <img loading="lazy" src="/optics/rainbow-geometry.svg" alt="Why rainbows form circular arcs" style="max-width: 100%; height: auto;" />
</div>

## Double Rainbows 🌈🌈

Sometimes you see TWO rainbows!

**Primary rainbow:**
- One internal reflection
- Red on outside, violet on inside
- Brighter

**Secondary rainbow:**
- **Two** internal reflections
- Colors **reversed** (violet outside, red inside)
- Fainter (some light lost on each reflection)
- Angle ≈ 51°

## Sign Convention Note:

For rainbow analysis:
- Each refraction event has its own coordinate system
- Normal defined at each surface point
- TIR occurs when light hits back at > critical angle
- Exit refraction: light travels outward (positive direction)
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
            question: "Why does blue light bend more than red light when passing through a prism?",
            options: [
              "Blue light has more energy",
              "Blue light has higher index of refraction (n)",
              "Blue light travels faster",
              "Blue light has longer wavelength"
            ],
            correctAnswer: 1,
            explanation: "Blue light (shorter wavelength ≈470nm) has a higher index of refraction than red light (longer wavelength ≈700nm). From Snell's Law, higher n means smaller refraction angle (bends more toward normal)."
          },
          {
            question: "In a primary rainbow, why is red on the outside and violet on the inside of the arc?",
            options: [
              "Red light travels faster than violet",
              "Red exits raindrops at 42° while violet exits at 39.5°",
              "Red undergoes more reflections",
              "Violet light is absorbed more"
            ],
            correctAnswer: 1,
            explanation: "Red light exits at a larger angle (42°) from the sun-observer line, placing it on the outer arc. Violet exits at 39.5° (smaller angle), placing it on the inner arc. Each color forms its own cone!"
          },
          {
            question: "A light ray hits a mirror 3 cm to the right of the optical axis and reflects to cross the axis 6 cm to the right. Using Cartesian sign convention with rightward as positive, what is $x_{2}$?",
            options: [
              "$x_{2}$ = -6 cm",
              "$x_{2}$ = -3 cm",
              "$x_{2}$ = +3 cm",
              "$x_{2}$ = +6 cm"
            ],
            correctAnswer: 3,
            explanation: "$x_{2}$ = +6 cm. Using Cartesian convention: the crossing point is 6 cm to the right of the mirror, and light is traveling right (positive direction), so $x_{2}$ is positive."
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

### Sign Convention (Cartesian)
- **Positive direction**: Direction light travels
- **Horizontal**: Right positive, left negative
- **Vertical**: Up positive, down negative
- Measure from **optical axis** and **mirror/lens position**

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

### Total Internal Reflection
$$\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right)$$ (only when $n_1 > n_2$)
- If $\\theta_1 > \\theta_c$: 100% reflection
- Powers fiber optics, creates sparkle in diamonds

### Dispersion
- $n$ depends on wavelength ($\\lambda$)
- Blue light: higher $n$, bends more
- Red light: lower $n$, bends less
- Creates rainbows and prism effects

---

## What's Next?

Now that you understand reflection and refraction, you're ready for:
- **Mirrors** (curved surfaces that reflect)
- **Lenses** (curved surfaces that refract)
- **Optical instruments** (telescopes, microscopes)
- **Wave optics** (interference, diffraction)

Keep practicing, and remember: **light always takes the path that minimizes travel time** (Fermat's Principle)! 🎯
      `
    },
    {
      id: 'dispersion-common-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — Two things to get right about dispersion.
      `,
      exercise: {
        questions: [
          {
            question: 'True or false: "All colors of light have the same index of refraction in glass."',
            options: [
              'True — all visible light has the same n',
              'False — n varies with wavelength, which is exactly what causes dispersion',
              'Only red light has a refractive index',
              'Index of refraction only applies to mirrors'
            ],
            correctAnswer: 1,
            explanation: 'The whole reason dispersion exists is that n depends on wavelength. Blue light has a slightly higher n than red, so it bends more — spreading white light into a spectrum.'
          },
          {
            question: 'Why do rainbows appear as arcs rather than straight bands?',
            options: [
              'They actually are straight lines — the curve is an illusion',
              'All drops at the same angle from the sun–observer line form a circle',
              'Arcs only appear at noon',
              'The shape depends on humidity'
            ],
            correctAnswer: 1,
            explanation: 'Every raindrop at exactly 42° from the sun–observer line sends red light to your eye. Those drops form a cone, which you see as a circular arc. Different colors come from slightly different angles, creating the full rainbow.'
          }
        ]
      }
    },
    {
      id: 'final-transfer-case',
      type: 'multiple-choice' as const,
      content: `
**Final Real-World Check** — A lab beam enters a prism, separates into colors, and one color is guided through a fiber optic cable.
      `,
      exercise: {
        questions: [
          {
            question: 'Which sequence of concepts explains this setup?',
            options: [
              'Reflection only → absorption only',
              'Wavelength-dependent refraction (dispersion) in the prism → TIR guidance in the fiber',
              'Diffraction only → nuclear scattering',
              'Potential energy only → no boundary effects'
            ],
            correctAnswer: 1,
            explanation: 'The prism separates colors because n depends on wavelength (dispersion via refraction). The fiber keeps the selected color trapped inside via total internal reflection. This is the whole course in one setup!'
          }
        ]
      }
    }
  ]
}
