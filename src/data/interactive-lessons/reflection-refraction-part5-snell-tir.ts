export const reflectionRefractionPart5Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part6-roadmap-snell',
      type: 'text' as const,
      content: `
# ⚡ Snell's Law — The Master Equation

**Part 6 of 8**

This is the equation you'll use more than any other in optics:

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

It tells you exactly how much light bends at any boundary. By the end of this part, you'll solve refraction problems in a few clean lines.
      `
    },
    {
      id: 'snells-law-introduction',
      type: 'text' as const,
      content: `
# Snell's Law

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

<img src="/optics/snell-example1-air-water.svg" alt="Snell's Law Example: Air to Water" style="max-width: 500px; margin: 20px auto; display: block;" />

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

<img src="/optics/snell-example2-water-air.svg" alt="Snell's Law Example: Water to Air" style="max-width: 500px; margin: 20px auto; display: block;" />

The light ray bends away from the normal when exiting water!

**Key Difference**: Same angle in water (30°), but now we're going the opposite direction → larger angle in air!
      `
    },
    {
      id: 'snell-direction-check',
      type: 'dropdown-select' as const,
      content: `
**Check Your Understanding** — Predict which way light bends.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If light goes to higher n, it bends',
            options: ['away from normal', 'toward normal', 'not at all', 'randomly']
          },
          {
            label: 'If light goes to lower n, refracted angle is typically',
            options: ['smaller', 'larger', 'always zero', 'always 90°']
          },
          {
            label: 'Angles in Snell\'s law are measured from the',
            options: ['surface', 'normal', 'horizontal axis', 'light source']
          }
        ],
        correctAnswers: ['toward normal', 'larger', 'normal'],
        hint1: 'Think fast→slow and slow→fast.',
        hint2: 'Higher n means slower medium.',
        hint3: 'Always reference the perpendicular line at the interface.',
        explanation: 'Great—direction predictions now match the equation and geometry.'
      }
    },
    {
      id: 'snell-computation-drill',
      type: 'input-boxes' as const,
      content: `
**Computation Drill (5-Step Style)**

Light goes from air ($n_1=1.00$) into glass ($n_2=1.50$) at $\\theta_1=30^\\circ$.

Enter in order (to 3 significant figures where applicable):
1) $\\sin\\theta_2$

2) $\\theta_2$ in degrees
3) Direction phrase: \`toward\` or \`away\`
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.333', '19.5', 'toward'],
        hint1: 'Rearrange to $\\sin\\theta_2 = (n_1/n_2)\\sin\\theta_1$.',
        hint2: 'Use $\\sin 30^\\circ = 0.5$ and multiply by $1/1.5$.',
        hint3: 'Take inverse sine, then compare n-values for direction.',
        explanation: 'Correct: $\\sin\\theta_2 \\approx 0.333$, $\\theta_2\\approx 19.5^\\circ$, and the ray bends toward normal.'
      }
    },
    {
      id: 'snell-misconception-check',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — Two common Snell's Law mistakes.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the most frequent setup mistake in Snell\'s Law problems?',
            options: [
              'Using degrees instead of radians',
              'Swapping which n goes with which medium',
              'Writing c = 3.0×10⁸ m/s',
              'Drawing the boundary line'
            ],
            correctAnswer: 1,
            explanation: 'Always label medium 1 as where the light starts and medium 2 as where it\'s going. Swapping them flips your answer.'
          },
          {
            question: 'Your calculation gives θ₂ > 90°. Is that physically reasonable?',
            options: [
              'Yes — any angle is valid',
              'No — this usually means a setup error (or it\'s a TIR situation)',
              'Only if light is going from high n to low n',
              'Only possible in a vacuum'
            ],
            correctAnswer: 1,
            explanation: 'A refraction angle beyond 90° usually flags invalid setup or a TIR condition check.'
          }
        ]
      }
    }
  ]
}
