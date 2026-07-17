export const reflectionRefractionPart4Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part5-roadmap-index',
      type: 'text' as const,
      content: `
# 🌊 Index of Refraction

**Part 5 of 8**

Why does light slow down in water? Why do diamonds sparkle? The answer is a single number: the **index of refraction**.

In this part you'll learn to:
- Calculate $n$ from the speed of light in a material
- Predict what changes (speed, wavelength) and what stays the same (frequency)
- Use $n$ as a sanity check — if you ever get $n < 1$, something's wrong!
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
            question: "Light travels at $2.0 \\times 10^{8}$ m/s in a material. What is the index of refraction? (c = $3.0 \\times 10^{8}$ m/s)",
            options: [
              "n = 1.5",
              "n = 0.67",
              "n = 2.0",
              "n = 6.0"
            ],
            correctAnswer: 0,
            explanation: "Using n = c/v: n = $(3.0 \\times 10^{8})/(2.0 \\times 10^{8})$ = 1.5. This is typical for glass!"
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
**Before You Move On** — Two traps with index of refraction.
      `,
      exercise: {
        questions: [
          {
            question: 'True or false: "Frequency changes when light enters water."',
            options: [
              'True — everything changes at a boundary',
              'False — frequency stays constant; only speed and wavelength change',
              'Partially true — color shifts but frequency doesn\'t',
              'Nothing changes when entering a new medium'
            ],
            correctAnswer: 1,
            explanation: 'Frequency is locked in by the source and doesn\'t change at a boundary. Speed and wavelength both decrease by the factor n.'
          },
          {
            question: 'You calculate n = 0.82 for a piece of glass. What probably happened?',
            options: [
              'That\'s a valid result',
              'You swapped c and v, or made an arithmetic error',
              'The glass allows light to travel faster than c',
              'This means the glass doesn\'t refract'
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
**Real-World Check** — An engineer compares two lens materials: A has n = 1.40 and B has n = 1.70.
      `,
      exercise: {
        questions: [
          {
            question: 'For the same incident angle, which material bends light more?',
            options: [
              'Material A (n = 1.40) bends light more',
              'Material B (n = 1.70) bends light more',
              'Both bend light by the same amount',
              'Index of refraction doesn\'t affect bending'
            ],
            correctAnswer: 1,
            explanation: 'Higher n means light slows down more, which causes greater bending. Material B (n = 1.70) will refract light more strongly than A (n = 1.40).'
          }
        ]
      }
    }
  ]
}
