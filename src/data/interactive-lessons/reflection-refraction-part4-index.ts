export const reflectionRefractionPart4Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part5-roadmap-index',
      type: 'text' as const,
      content: `
# Part 5 Roadmap: Index of Refraction 🌊

## You are here
**Part 5 of 8 — Index and Speed**

## Objectives
1. Compute index using $n = c/v$
2. Predict what changes across media (speed, wavelength) and what stays fixed (frequency)
3. Use interpretation checks to avoid sign and concept errors

## 5-step compute template
$$\text{Given} \rightarrow \text{Find} \rightarrow \text{Formula} \rightarrow \text{Substitute} \rightarrow \text{Interpret }(n\ge 1,\ v<c)$$
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
      id: 'index-quiz',
      type: 'multiple-choice' as const,
      content: `
**Practice: Index of Refraction** ✓

Calculate and apply!
      `,
      exercise: {
        questions: [
          {
            question: "Light travels at 2.0 × 10⁸ m/s in a material. What is the index of refraction? (c = 3.0 × 10⁸ m/s)",
            options: [
              "n = 1.5",
              "n = 0.67",
              "n = 2.0",
              "n = 6.0"
            ],
            correctAnswer: 0,
            explanation: "Using n = c/v: n = (3.0 × 10⁸)/(2.0 × 10⁸) = 1.5. This is typical for glass!"
          },
          {
            question: "When light enters water (n = 1.33) from air, what happens to its speed?",
            options: [
              "Speed increases by 33%",
              "Speed decreases by about 25%",
              "Speed stays the same",
              "Speed doubles"
            ],
            correctAnswer: 1,
            explanation: "Speed in water: v = c/n = c/1.33 ≈ 0.75c. The speed decreases to about 75% of its original value, meaning it slows down by about 25%."
          },
          {
            question: "Which property of light does NOT change when it enters a new medium?",
            options: [
              "Speed",
              "Wavelength",
              "Frequency",
              "Direction"
            ],
            correctAnswer: 2,
            explanation: "Frequency remains constant when light enters a new medium. This is why color (determined by frequency) stays the same. Speed, wavelength, and direction all change."
          },
          {
            question: "Diamond has n = 2.42. Compared to air, light in diamond travels:",
            options: [
              "2.42 times faster",
              "2.42 times slower",
              "At the same speed",
              "Slightly faster"
            ],
            correctAnswer: 1,
            explanation: "Since v = c/n, and n = 2.42, light travels at c/2.42 ≈ 0.41c in diamond. It's 2.42 times slower than in air!"
          }
        ]
      }
    },
    {
      id: 'index-common-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Common Mistakes: Index and Speed**
      `,
      exercise: {
        questions: [
          {
            question: 'Student says “frequency changes when entering water.” Best correction:',
            options: [
              'Correct always',
              'Frequency stays constant; speed and wavelength change',
              'Only color changes but not frequency',
              'Everything stays constant'
            ],
            correctAnswer: 1,
            explanation: 'Boundary conditions preserve frequency; speed and wavelength adjust in the new medium.'
          },
          {
            question: 'A computed value gives n = 0.82 for ordinary material. Most likely issue?',
            options: [
              'Always physically valid',
              'Swapped c and v or arithmetic error',
              'Indicates superluminal propagation in glass',
              'Means no refraction'
            ],
            correctAnswer: 1,
            explanation: 'For standard media, n ≥ 1. A value below 1 usually signals setup/algebra mistake in this context.'
          }
        ]
      }
    },
    {
      id: 'index-transfer-check',
      type: 'multiple-choice' as const,
      content: `
**Transfer Check: Camera Lens Materials**
An engineer compares two lens materials: A has n=1.40 and B has n=1.70. Which statement is best for the same incident setup?
      `,
      exercise: {
        questions: [
          {
            question: 'Best prediction:',
            options: [
              'Material A always bends light more',
              'Material B generally bends light more strongly',
              'Both bend identically regardless of medium change',
              'Index does not affect bending'
            ],
            correctAnswer: 1,
            explanation: 'Higher index corresponds to lower speed and typically stronger refraction relative to neighboring media.'
          }
        ]
      }
    }
  ]
}
