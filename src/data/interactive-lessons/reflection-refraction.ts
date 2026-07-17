export const reflectionRefractionData = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Reflection and Refraction** 🔆

Welcome to Optics! Let's explore how light behaves when it encounters different materials.

## What You'll Learn

In this lesson, we'll cover:
- 📏 **Sign Conventions** - Using the Cartesian coordinate system for optics
- 🪞 **Law of Reflection** - How light bounces off surfaces
- 🌊 **Snell's Law** - How light bends when changing media
- 💎 **Total Internal Reflection** - When light can't escape
- 🌈 **Dispersion** - Why we see rainbows

## Why Optics Matters

Understanding how light behaves is essential for:
- **Cameras and Lenses** - How images are formed
- **Fiber Optics** - Modern internet infrastructure
- **Eyeglasses and Contacts** - Vision correction
- **Telescopes and Microscopes** - Exploring the universe and the microscopic world
- **Rainbows and Natural Phenomena** - Understanding beauty in nature

Let's start by establishing the coordinate system we'll use throughout!
      `
    },
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
      id: 'index-of-refraction',
      type: 'text' as const,
      content: `
**Index of Refraction** 🌊

Light slows down when entering a material!

## The Index

**Index of refraction** ($n$):

$$n = \\frac{c}{v}$$

where:
- $c$ = speed of light in vacuum = $3.0 \\times 10^8$ m/s
- $v$ = speed of light in the material

**Key Properties:**
- $n \\geq 1$ (light can't go faster than $c$!)
- No units (dimensionless)
- Higher $n$ → slower light → more bending

## Common Values:

| Material | Index ($n$) |
|----------|-------------|
| Vacuum   | 1.0000 (exactly) |
| Air      | 1.0003 ≈ 1 |
| Water    | 1.33 |
| Glass    | 1.5 |
| Diamond  | 2.42 |

## What Changes, What Doesn't:

When light enters a new medium:

**Changes:**
- ✅ Speed: $v = c/n$
- ✅ Wavelength: $\\lambda = \\lambda_0/n$

**Stays the Same:**
- ❌ Frequency: $f$ constant
- ❌ Color (determined by frequency)

## Why This Matters:

The relationship $c = \\lambda f$ still holds, but in a medium:

$$v = \\lambda f$$

Since $f$ stays constant:
$$\\frac{c}{n} = \\frac{\\lambda_0}{n} \\cdot f$$

This confirms $v$ and $\\lambda$ both decrease by factor $n$!
      `
    },
    {
      id: 'snells-law-introduction',
      type: 'text' as const,
      content: `
**Snell's Law** 🎯

When light crosses a boundary between two materials, it changes direction!

## The Law

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

where:
- $n_1$ = index of refraction of first medium
- $\\theta_1$ = angle from normal in first medium
- $n_2$ = index of refraction of second medium
- $\\theta_2$ = angle from normal in second medium

## Refraction Diagram:

\`\`\`
        Air $(n_{1})$
    ────┼────  ← incident ray
     $\\theta_{1}$ │
────────┴────────  ← boundary
        │ $\\theta_{2}$
        ┼────  ← refracted ray
      Water $(n_{2})$
\`\`\`

## Critical Points:

**1. Angles from the NORMAL (not the surface!)**

**2. Light direction matters for sign convention**
- Light travels from medium 1 → medium 2
- Positive direction: into and through medium 2

**3. Both angles always positive**
- We measure angles as magnitudes (0° to 90°)
- Direction of bending tells us if entering denser/less dense medium

## Bending Rules:

**Entering Denser Medium** ($n_2 > n_1$):
- Light bends **toward** the normal
- $\\theta_2 < \\theta_1$
- Example: Air → Water

**Entering Less Dense Medium** ($n_2 < n_1$):
- Light bends **away from** the normal
- $\\theta_2 > \\theta_1$
- Example: Water → Air

**Mnemonic**: **"Fast → Slow: toward. Slow → Fast: away."**
      `
    },
    {
      id: 'snells-law-example1',
      type: 'text' as const,
      content: `
**Snell's Law Example 1: Air to Water** 💧

## Problem:
Light travels from air into water at an angle of 45° from the normal. Find the refraction angle.

**Given:**
- $n_1 = 1.0$ (air)
- $\\theta_1 = 45°$
- $n_2 = 1.33$ (water)
- $\\theta_2 = ?$

## Step-by-Step Solution:

**Step 1: Set up the coordinate system**
\`\`\`
        Air ($n_{1}$ = 1.0)
    ────┼────  45° from normal
        │
────────┴────────  ← water surface
        │ $\\theta_{2}$ = ?
        ┼────
    Water ($n_{2}$ = 1.33)
\`\`\`

Light direction: downward into water (positive direction)

**Step 2: Apply Snell's Law**

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

**Step 3: Solve for $\\theta_2$**

$$\\sin\\theta_2 = \\frac{n_1 \\sin\\theta_1}{n_2}$$

$$\\sin\\theta_2 = \\frac{(1.0)\\sin(45°)}{1.33}$$

$$\\sin\\theta_2 = \\frac{(1.0)(0.707)}{1.33} = 0.531$$

$$\\theta_2 = \\sin^{-1}(0.531) = 32.1°$$

**Step 4: Interpret the result**

- $\\theta_2 = 32.1° < 45° = \\theta_1$ ✓
- Light bent **toward** normal ✓
- Makes sense! Entering denser medium ($n_2 > n_1$)

## Visual Result:

\`\`\`
        Air
    ────┼────  45°
     ╲  │
      ╲ │
────────┴────────
        │╲32.1°
        │ ╲
      Water
\`\`\`

The light ray bends toward the normal when entering water!
      `
    },
    {
      id: 'snells-law-example2',
      type: 'text' as const,
      content: `
**Snell's Law Example 2: Water to Air** 🌊➜🌤️

## Problem:
Light travels from water to air at 30° from the normal. Find the refraction angle.

**Given:**
- $n_1 = 1.33$ (water)
- $\\theta_1 = 30°$
- $n_2 = 1.0$ (air)
- $\\theta_2 = ?$

## Step-by-Step Solution:

**Step 1: Set up the coordinate system**
\`\`\`
    Water ($n_{1}$ = 1.33)
        ┼────  30° from normal
        │
────────┴────────  ← water surface
        │
    ────┼────  $\\theta_{2}$ = ?
        Air ($n_{2}$ = 1.0)
\`\`\`

Light direction: upward into air (positive direction)

**Step 2: Apply Snell's Law**

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

**Step 3: Solve for $\\theta_2$**

$$\\sin\\theta_2 = \\frac{n_1 \\sin\\theta_1}{n_2}$$

$$\\sin\\theta_2 = \\frac{(1.33)\\sin(30°)}{1.0}$$

$$\\sin\\theta_2 = \\frac{(1.33)(0.5)}{1.0} = 0.665$$

$$\\theta_2 = \\sin^{-1}(0.665) = 41.7°$$

**Step 4: Interpret the result**

- $\\theta_2 = 41.7° > 30° = \\theta_1$ ✓
- Light bent **away from** normal ✓
- Makes sense! Entering less dense medium ($n_2 < n_1$)

## Visual Result:

\`\`\`
      Water
        │╲30°
        │ ╲
────────┴────────
     ╲  │
      ╲ │41.7°
    ────┼────
        Air
\`\`\`

The light ray bends away from the normal when exiting water!

**Key Difference**: Same angle in water (30°), but now we're going the opposite direction → larger angle in air!
      `
    },
    {
      id: 'total-internal-reflection',
      type: 'text' as const,
      content: `
**Total Internal Reflection** 💎

Something special happens when light tries to go from dense → less dense!

## The Critical Angle

When going from **higher $n$** to **lower $n$** (e.g., water → air):

There's a maximum incident angle called the **critical angle** ($\\theta_c$)

**At $\\theta_c$**: Refracted ray travels along the boundary ($\\theta_2 = 90°$)

**Beyond $\\theta_c$** ($\\theta_1 > \\theta_c$): Light **completely reflects** back!

## Three Scenarios:

\`\`\`
1. θ < θc: Normal refraction occurs
     Water (n = 1.33)
        ↓  
     ────┴────  → (light exits to air)
         Air

2. θ = θc: Critical angle - light along boundary
     Water
        ↓  
     ────┴────→ (grazes surface)
         Air

3. θ > θc: Total Internal Reflection
     Water
        ↓ ↗  (100% reflection!)
     ────┴────
         Air (no light escapes)
\`\`\`

## Finding the Critical Angle

Start with Snell's Law at the critical condition:

$$n_1 \\sin\\theta_c = n_2 \\sin(90°)$$

$$n_1 \\sin\\theta_c = n_2 (1)$$

$$\\sin\\theta_c = \\frac{n_2}{n_1}$$

$$\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right)$$

**Important**: Only exists when $n_1 > n_2$ (why?)

If $n_1 < n_2$, then $\\frac{n_2}{n_1} > 1$ → no solution! (sin can't exceed 1)

## Sign Convention Note:

When total internal reflection occurs:
- No refracted ray (it's reflected instead)
- Reflected ray follows law of reflection
- All energy stays in original medium

## Example: Water-Air Interface

$$\\theta_c = \\sin^{-1}\\left(\\frac{1.0}{1.33}\\right) = \\sin^{-1}(0.752) = 48.8°$$

**If light in water hits surface at > 48.8°**: 100% reflection!
      `
    },
    {
      id: 'tir-applications',
      type: 'text' as const,
      content: `
**Applications of Total Internal Reflection** 🌟

TIR isn't just theory—it powers modern technology!

## 1. Fiber Optics 💡

**How it works:**
- Glass or plastic fiber with high $n$
- Light enters at one end
- Repeatedly reflects off walls (TIR)
- Travels long distances with minimal loss!

\`\`\`
Light in ─┐  ╱╲  ╱╲  ╱╲  ╱╲  ╱╲ ┌─ Light out
         └─┘  └─┘  └─┘  └─┘  └─┘
        [Fiber optic cable]
\`\`\`

**Applications:**
- Internet (fiber optic cables)
- Medical endoscopes
- Telecommunications

**Why it's amazing:**
- Almost no signal loss
- Immune to electromagnetic interference
- Can carry huge amounts of data

## 2. Diamonds Sparkle 💎

**Why diamonds sparkle so much:**

Diamond has $n = 2.42$ (very high!)

$$\\theta_c = \\sin^{-1}\\left(\\frac{1.0}{2.42}\\right) = 24.4°$$

- Very small critical angle!
- Light easily undergoes TIR
- Bounces around inside, creating sparkle
- Proper cut maximizes this effect

## 3. Binoculars and Periscopes 🔭

**Prisms use TIR instead of mirrors:**

\`\`\`
    Light in ─→ ╱│
               ╱ │
              ╱  ↓ (TIR at 45°)
             ╱___│
                 ↓ Light out
\`\`\`

**Advantages over mirrors:**
- No coating needed
- 100% reflection (mirrors are ~95%)
- No degradation over time

## 4. Mirages 🏜️

On hot days, light from sky bends gradually in air layers:
- Hot air near ground has slightly lower $n$
- Light bends away from normal (going to lower $n$)
- Eventually reaches critical angle → TIR!
- We see sky reflected, looks like water!
      `
    },
    {
      id: 'dispersion',
      type: 'text' as const,
      content: `
**Dispersion: Why We See Rainbows** 🌈

Not all colors bend the same amount!

## The Phenomenon

**Dispersion**: Different wavelengths (colors) have different indices of refraction

For most materials:
- **Violet** (short λ): Higher $n$ → bends MORE
- **Red** (long λ): Lower $n$ → bends LESS

$$n_{violet} > n_{blue} > n_{green} > n_{yellow} > n_{orange} > n_{red}$$

## White Light Through a Prism

\`\`\`
                     Violet (most bent) ↗
                    Blue             ↗
White light → [Prism] Green       ↗
                   Yellow        ↗
                  Orange       ↗
                 Red (least bent) →
\`\`\`

The spectrum: **ROYGBIV**
(Red, Orange, Yellow, Green, Blue, Indigo, Violet)

## Mathematical Description

For each color, Snell's Law applies:

$$n_{air} \\sin\\theta_i = n_{color} \\sin\\theta_r$$

Since $n_{violet} > n_{red}$:

$$\\sin\\theta_{r,violet} < \\sin\\theta_{r,red}$$

Therefore: $\\theta_{r,violet} < \\theta_{r,red}$

Violet bends more toward normal!

## Important Note on Sign Convention

When analyzing dispersion:
- Each color follows same sign rules
- All travel in positive direction (through prism)
- Different bending angles, but all positive values
- Real light paths (not virtual)

## Why This Happens

The index of refraction depends on wavelength:

$$n = n(\\lambda)$$

This is due to:
- Interaction with atoms in material
- Different frequencies interact differently
- Quantum mechanical effects
      `
    },
    {
      id: 'rainbow-formation',
      type: 'text' as const,
      content: `
**How Rainbows Form** 🌈☔

Rainbows are dispersion + TIR working together!

## The Process (Step-by-Step)

**Step 1: Refraction entering droplet**
- White sunlight hits water droplet
- Refracts and disperses (separates into colors)
- Violet bends most, red bends least

**Step 2: Reflection inside droplet**
- Light hits back of droplet
- Total internal reflection!
- Light bounces back toward front

**Step 3: Refraction exiting droplet**
- Light refracts again leaving droplet
- MORE dispersion!
- Colors separate further

## Visual Path:

\`\`\`
Sunlight ──→  ○  ──→ Violet (42°)
            ╱ │ ╲
           ╱  │  ╲
          ╱   │   ╲
               ▼ TIR
              
              ──→ Red (40°)
\`\`\`

## The Angles

Different colors exit at different angles:
- **Red**: 40-42° from original direction
- **Violet**: 40-40.8° from original direction

**This is why:**
- Rainbow forms a circle (or arc)
- Red on outside, violet on inside
- You need to be at specific angle to see it!

## Primary vs Secondary Rainbow

**Primary Rainbow:**
- One internal reflection
- Red outside, violet inside
- Brighter

**Secondary Rainbow:**
- Two internal reflections
- Colors reversed (violet outside, red inside)
- Dimmer (some light lost with each reflection)

## Sign Convention Application:

For a droplet in front of you:
- Light enters from behind (sun behind you)
- Positive direction: toward your eye
- Exit angles measured from forward direction
- All distances positive (real light paths)
      `
    },
    {
      id: 'practice-problems-intro',
      type: 'text' as const,
      content: `
**Practice Problems** 📝

Now it's your turn! Let's apply what we've learned.

## Problem-Solving Strategy

**For ALL optics problems:**

**1. Draw a diagram**
- Show the interface or optical element
- Draw the normal
- Label the light direction (positive direction)

**2. Identify what you know**
- Media and their indices
- Angles (from normal!)
- Object/image positions

**3. Choose the right equation**
- Reflection: $\\theta_i = \\theta_r$
- Refraction: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$
- Critical angle: $\\sin\\theta_c = n_2/n_1$
- Mirror equation: $1/f = 1/d_o + 1/d_i$

**4. Apply sign conventions**
- Positive direction = light direction
- Check if values should be positive or negative
- Real images: positive $d_i$
- Virtual images: negative $d_i$

**5. Verify your answer**
- Does the sign make sense?
- Does the physics make sense?
- Check limiting cases if possible

Let's practice!
      `
    },
    {
      id: 'summary',
      type: 'text' as const,
      content: `
**Summary: Reflection and Refraction** ✨

Great work! Let's review the key concepts:

## Sign Convention (Most Important!)

**The Cartesian coordinate system:**
- ✅ **Positive**: Direction light travels (→)
- ✅ **Negative**: Opposite to light travel (←)
- Object distance: usually positive
- Image distance: positive (real), negative (virtual)
- Focal length: positive (converging), negative (diverging)

## Laws and Equations

**Law of Reflection:**
$$\\theta_i = \\theta_r$$

**Snell's Law:**
$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

**Critical Angle:**
$$\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right)$$ (when $n_1 > n_2$)

**Index of Refraction:**
$$n = \\frac{c}{v}$$

## Key Concepts

**Bending Rules:**
- Fast → Slow (↑n): Toward normal
- Slow → Fast (↓n): Away from normal

**Total Internal Reflection:**
- Only when $n_1 > n_2$
- When $\\theta_1 > \\theta_c$
- 100% reflection!

**Dispersion:**
- $n$ depends on wavelength
- Violet bends more than red
- Creates rainbows and spectra

## What's Next?

Now that you understand reflection and refraction, you're ready for:
- **Curved Mirrors** (concave and convex)
- **Thin Lenses** (converging and diverging)  
- **Optical Instruments** (microscopes, telescopes)

Keep practicing with the sign convention—it's the foundation of all optics!
      `
    }
  ]
}
