export const reflectionRefractionPart6Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'total-internal-reflection',
      type: 'text' as const,
      content: `
# Total Internal Reflection

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
**Master Check: Total Internal Reflection** ✓

Test your understanding of TIR!
      `,
      exercise: {
        questions: [
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
          },
          {
            question: "What condition is necessary for total internal reflection to be possible?",
            options: [
              "Light must travel from low n to high n",
              "Light must travel from high n to low n",
              "Both media must have the same n",
              "Light must be at exactly 45°"
            ],
            correctAnswer: 1,
            explanation: "Total internal reflection can only occur when light travels from a denser medium (higher n) to a less dense medium (lower n). This is because the critical angle formula requires n₁ > n₂."
          },
          {
            question: "Light in glass (n=1.5) hits the glass-air boundary at 45°. The critical angle is 41.8°. What is the refraction angle?",
            options: [
              "There is no refraction angle - TIR occurs",
              "The angle is 45°",
              "The angle is 70°",
              "The angle is 30°"
            ],
            correctAnswer: 0,
            explanation: "Since the incident angle (45°) is greater than the critical angle (41.8°), total internal reflection occurs. There is no refracted ray - all the light reflects back into the glass!"
          }
        ]
      }
    }
  ]
}
