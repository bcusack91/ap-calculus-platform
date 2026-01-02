export const reflectionRefractionPart5Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'snells-law-introduction',
      type: 'text' as const,
      content: `
# Snell's Law & Total Internal Reflection

When light crosses a boundary between two materials, it changes direction! This phenomenon is called **refraction**.

## Snell's Law

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

This powerful equation predicts exactly how much light will bend at any interface.

<img src="/optics/snells-law-diagram.svg" alt="Snell's Law Refraction Diagram" style="max-width: 600px; margin: 20px auto; display: block;" />

**What you see:**
- Light traveling from air (less dense) into water (more dense)
- The ray **bends toward the normal** when entering the denser medium
- Angle decreases: 45° → 32°
      `
    },
    {
      id: 'snells-law-parameters',
      type: 'text' as const,
      content: `
## Understanding the Parameters

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

**Where:**
- $n_1$ = index of refraction of **first medium** (where light is coming from)
- $\\theta_1$ = angle from normal in **first medium**
- $n_2$ = index of refraction of **second medium** (where light is going)
- $\\theta_2$ = angle from normal in **second medium**

## Critical Points:

**1. Angles measured from the NORMAL** ⊥
- The normal is perpendicular to the surface
- NOT from the surface itself!

**2. Light direction matters**
- Light travels from medium 1 → medium 2
- We follow the light ray's path

**3. Both angles always positive**
- We measure angles as magnitudes (0° to 90°)
- Direction of bending tells us the physics
      `
    },
    {
      id: 'bending-rules-overview',
      type: 'text' as const,
      content: `
## Bending Rules: Which Way Does Light Bend?

The direction light bends depends on the **relative density** of the two media.

### The Pattern 🎯

When light crosses a boundary:
- **Entering denser medium** ($n_2 > n_1$): Bends **TOWARD** normal
- **Entering less dense medium** ($n_2 < n_1$): Bends **AWAY FROM** normal
- **Same medium** ($n_1 = n_2$): No bending (continues straight)

## Memory Aid 💡

**"Fast → Slow: bend toward"**  
**"Slow → Fast: bend away"**

Think of it like a car going from pavement to sand at an angle—one wheel hits the sand first and slows down, causing the car to turn toward the normal!

Let's see this in action with visual examples...
      `
    },
    {
      id: 'bending-toward-normal',
      type: 'text' as const,
      content: `
## Light Bending TOWARD Normal 📉

### Entering Denser Medium ($n_2 > n_1$)

When light enters a **denser medium** (higher index of refraction), it slows down and bends **toward the normal**.

<img src="/optics/bending-toward-normal.svg" alt="Light bending toward normal" style="max-width: 500px; margin: 20px auto; display: block;" />

### Key Observations:

✓ **Angle decreases**: $\\theta_2 < \\theta_1$ (50° → 30°)  
✓ **Light slows down**: Moves from faster medium to slower medium  
✓ **Bends toward normal**: Gets closer to perpendicular

### Examples:
- Air → Water
- Air → Glass  
- Water → Diamond

**Why it happens:** Light slows down in denser materials, causing the wavefront to pivot toward the normal—like a marching band turning when one side slows down!
      `
    },
    {
      id: 'bending-away-normal',
      type: 'text' as const,
      content: `
## Light Bending AWAY FROM Normal 📈

### Entering Less Dense Medium ($n_2 < n_1$)

When light enters a **less dense medium** (lower index of refraction), it speeds up and bends **away from the normal**.

<img src="/optics/bending-away-normal.svg" alt="Light bending away from normal" style="max-width: 500px; margin: 20px auto; display: block;" />

### Key Observations:

✓ **Angle increases**: $\\theta_2 > \\theta_1$ (30° → 42°)  
✓ **Light speeds up**: Moves from slower medium to faster medium  
✓ **Bends away from normal**: Gets farther from perpendicular

### Examples:
- Water → Air
- Glass → Air
- Diamond → Air

**Why it happens:** Light speeds up in less dense materials, causing the wavefront to pivot away from the normal—like a marching band spreading out when one side speeds up!

**Important:** This is where Total Internal Reflection can occur if the angle is too large!
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
        Air (n₁ = 1.0)
    ────┼────  45° from normal
        │
────────┴────────  ← water surface
        │ θ₂ = ?
        ┼────
    Water (n₂ = 1.33)
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
    Water (n₁ = 1.33)
        ┼────  30° from normal
        │
────────┴────────  ← water surface
        │
    ────┼────  θ₂ = ?
        Air (n₂ = 1.0)
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
      id: 'snell-tir-quiz',
      type: 'multiple-choice' as const,
      content: `
**Master Check: Snell's Law & TIR** ✓

Challenge yourself with these problems!
      `,
      exercise: {
        questions: [
          {
            question: "Light travels from air (n=1.0) into glass (n=1.5) at 60° from the normal. Does the light bend toward or away from the normal?",
            options: [
              "Toward the normal (angle decreases)",
              "Away from the normal (angle increases)",
              "It doesn't bend at all",
              "It reflects completely"
            ],
            correctAnswer: 0,
            explanation: "Light bends TOWARD the normal when entering a denser medium (higher n). Since glass has n=1.5 > air's n=1.0, the angle from the normal will be smaller than 60°."
          },
          {
            question: "Light in water (n=1.33) hits the water-air boundary at 50° from normal. The critical angle is 48.8°. What happens?",
            options: [
              "Normal refraction into air",
              "Total internal reflection",
              "Light is absorbed",
              "Light splits into two beams"
            ],
            correctAnswer: 1,
            explanation: "Since 50° > 48.8° (critical angle), total internal reflection occurs! All the light reflects back into the water. No light escapes to air."
          },
          {
            question: "Using Snell's Law: n₁sin(θ₁) = n₂sin(θ₂). Light goes from air (n=1.0) to water (n=1.33) at 45°. What is sin(θ₂)?",
            options: [
              "sin(θ₂) = 0.53",
              "sin(θ₂) = 0.94",
              "sin(θ₂) = 1.33",
              "sin(θ₂) = 0.71"
            ],
            correctAnswer: 0,
            explanation: "n₁sin(θ₁) = n₂sin(θ₂) → (1.0)(sin45°) = (1.33)sin(θ₂) → (1.0)(0.707) = (1.33)sin(θ₂) → sin(θ₂) = 0.707/1.33 ≈ 0.53"
          },
          {
            question: "Why can fiber optic cables transmit light over long distances without much loss?",
            options: [
              "The glass absorbs very little light",
              "Total internal reflection keeps light trapped inside",
              "The cables are perfectly straight",
              "Light amplifiers are placed every meter"
            ],
            correctAnswer: 1,
            explanation: "Total internal reflection! Light hits the cable walls at angles greater than the critical angle, so it reflects with 100% efficiency. This keeps light bouncing inside the fiber."
          },
          {
            question: "The critical angle for diamond-air is 24.4°. What does this small angle tell us?",
            options: [
              "Diamond is very soft",
              "Light easily escapes diamond",
              "Diamond has a very high index of refraction",
              "Diamond doesn't refract light"
            ],
            correctAnswer: 2,
            explanation: "A small critical angle (θc = sin⁻¹(n₂/n₁)) means n₁ (diamond) is much larger than n₂ (air). Diamond's n=2.42 is very high, causing the small critical angle and making light bounce around inside—creating sparkle!"
          }
        ]
      }
    }
  ]
}
