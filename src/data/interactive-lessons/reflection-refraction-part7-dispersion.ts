export const reflectionRefractionPart7Data = {
  topicSlug: 'reflection-refraction',
  sections: [
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
  <img src="/optics/prism-dispersion.svg" alt="White light dispersing through a prism" style="max-width: 100%; height: auto;" />
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

**Step-by-Step Process in a Raindrop:**

\`\`\`
   Sunlight (white)
        ↓
    ┌───┴───┐
    │   ●   │  ← raindrop
    │  ╱ ╲  │
    └─╱───╲─┘
     ╱     ╲
   Red    Violet
(to your eye)
\`\`\`

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

\`\`\`
        You
         ●
        ╱│╲
      ╱  │  ╲  42°
    ╱    │    ╲
   ●     ↓     ●  ← drops at 42°
    ╲    Sun  ╱
      ╲  │  ╱
        ╲│╱
         ●
   [Forms a cone → we see as arc]
\`\`\`

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
      id: 'practice-and-summary',
      type: 'text' as const,
      content: `
**Practice Problems & Summary** 📝

## Quick Practice Problems

**Problem 1: Sign Convention**

A light ray hits a mirror 2 cm to the right of the optical axis. The reflected ray crosses the axis 5 cm to the right of the mirror. Using our sign convention:

(a) What is $x_1$ (position where ray hits)?
(b) What is $x_2$ (position where it crosses axis)?

**Problem 2: Index of Refraction**

Light travels at $2.25 \\times 10^8$ m/s in a material. What is the material's index of refraction?

**Problem 3: Snell's Law**

Light in glass ($n = 1.5$) hits a glass-air boundary at 25° from normal. Find the refraction angle in air.

**Problem 4: Critical Angle**

Find the critical angle for light going from diamond ($n = 2.42$) to air ($n = 1.0$).

**Problem 5: Total Internal Reflection**

Light in water ($n = 1.33$) hits the water-air surface at 55°. Does TIR occur?

---

## Solutions

**Solution 1:**
- (a) $x_1 = +2$ cm (right of axis is positive)
- (b) $x_2 = +5$ cm (right of mirror, light going right)

**Solution 2:**
$$n = \\frac{c}{v} = \\frac{3.0 \\times 10^8}{2.25 \\times 10^8} = 1.33$$

The material is water!

**Solution 3:**
$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$
$$(1.5)\\sin(25°) = (1.0)\\sin\\theta_2$$
$$\\sin\\theta_2 = 0.634$$
$$\\theta_2 = 39.3°$$

Light bends away from normal (less dense medium).

**Solution 4:**
$$\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right) = \\sin^{-1}\\left(\\frac{1.0}{2.42}\\right) = 24.4°$$

This is why diamonds sparkle so much!

**Solution 5:**
First find critical angle:
$$\\theta_c = \\sin^{-1}\\left(\\frac{1.0}{1.33}\\right) = 48.8°$$

Since $55° > 48.8°$: **YES, TIR occurs!** Light reflects back into water.

---

## Summary of Key Concepts

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
    }
  ]
}
