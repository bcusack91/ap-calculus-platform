export const physics2LensesPart4Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln4-intro',
      type: 'text' as const,
      content: `
# 📐 Ray Diagrams — Diverging Lenses

**Part 4 of 7 — Concave Lenses and Calculation Practice**

Diverging lenses are simpler than converging lenses because there is only **one case**: the image is always virtual, upright, and reduced. Let's master the ray diagram and then combine it with calculation practice.
      `
    },
    {
      id: 'ln4-diverging-rays',
      type: 'text' as const,
      content: `
## Ray Diagram for a Diverging Lens

### Three Principal Rays

1. **Parallel ray**: Enters parallel to the axis → refracts so it appears to come from $F$ on the incoming side
2. **Central ray**: Passes through the center of the lens → continues straight (undeviated)
3. **Focal ray**: Aimed toward $F$ on the far side → refracts parallel to the axis

The refracted rays **diverge** on the far side. Tracing them backward, their extensions meet on the **same side as the object** — this intersection is the **virtual image**.

### Image Characteristics (Always!)

| Property | Value |
|:---:|:---:|
| Type | **Virtual** ($s_i < 0$) |
| Orientation | **Upright** ($m > 0$) |
| Size | **Reduced** ($|m| < 1$) |
| Location | Between the lens and $F$ on the object side |

No matter where you place the object, a diverging lens produces the same type of image. The image is always closer to the lens than the object is.
      `
    },
    {
      id: 'ln4-example',
      type: 'text' as const,
      content: `
## Worked Example

An object is placed 24 cm from a diverging lens with $f = -8$ cm.

**Step 1: Find $s_i$**

$$\\frac{1}{s_i} = \\frac{1}{f} - \\frac{1}{s_o} = \\frac{1}{-8} - \\frac{1}{24} = \\frac{-3 - 1}{24} = \\frac{-4}{24} = -\\frac{1}{6}$$

$$s_i = -6 \\text{ cm}$$

✓ Negative → virtual image (on the same side as the object).

✓ $|s_i| = 6 < 8 = |f|$ → image is between the lens and $F$. ✓

**Step 2: Find magnification**

$$m = -\\frac{s_i}{s_o} = -\\frac{-6}{24} = +\\frac{1}{4} = +0.25$$

✓ Positive → upright. ✓

✓ $|m| = 0.25 < 1$ → reduced. ✓
      `
    },
    {
      id: 'ln4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Diverging Lens Concepts**
      `,
      exercise: {
        questions: [
          {
            question: 'For a diverging lens, the image distance $s_i$ is always:',
            options: [
              'Positive (real image)',
              'Negative (virtual image)',
              'Equal to $f$ for every object',
              'It depends on the object distance'
            ],
            correctAnswer: 1,
            explanation: 'A diverging lens always produces a virtual image for a real object, so $s_i < 0$ always. The image lies between the lens and the focal point, approaching $f$ only as the object moves very far away.'
          },
          {
            question: 'As an object moves farther from a diverging lens, the virtual image:',
            options: [
              'Approaches $F$ and gets smaller',
              'Moves away from the lens and gets larger',
              'Stays at the same distance from the lens',
              'Becomes real when $s_o$ is beyond $2F$'
            ],
            correctAnswer: 0,
            explanation: 'As $s_o \\to \\infty$, $s_i \\to f$ (the image approaches the focal point). The magnification $|m| = |s_i|/s_o \\to 0$. The image shrinks toward a point at $F$, and it stays virtual for every real object distance.'
          }
        ]
      }
    },
    {
      id: 'ln4-input-drill',
      type: 'input-boxes' as const,
      content: `
**Diverging Lens Drill** 🧮

A diverging lens has $f = -12$ cm. An object of height 9.0 cm is placed 36 cm from the lens.

1) Image distance $s_i$ (in cm)

2) Magnification $m$ (as a fraction or decimal)

3) Image height $h_i$ (in cm)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-9', '0.25', '2.25'],
        hint1: '$\\frac{1}{s_i} = \\frac{1}{-12} - \\frac{1}{36}$. Find a common denominator of 36.',
        hint2: '$m = -s_i/s_o = -(-9)/36 = 9/36$.',
        hint3: '$h_i = m \\times h_o = 0.25 \\times 9.0$.',
        explanation: '$\\frac{1}{s_i} = \\frac{1}{-12} - \\frac{1}{36} = \\frac{-3-1}{36} = \\frac{-4}{36} = -\\frac{1}{9}$, so $s_i = -9$ cm. $m = -(-9)/36 = +0.25$. $h_i = (0.25)(9.0) = 2.25$ cm (upright and reduced).'
      }
    },
    {
      id: 'ln4-comparison-drill',
      type: 'input-boxes' as const,
      content: `
**Converging vs Diverging Comparison** 🔍

An object is placed 20 cm from a lens. Calculate $s_i$ for each lens:

1) Converging lens with $f = +10$ cm: $s_i$ = ? (in cm)

2) Diverging lens with $f = -10$ cm: $s_i$ = ? (in cm)

3) What is the magnification for the diverging lens?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '-6.67', '0.33'],
        hint1: 'Converging: $\\frac{1}{s_i} = \\frac{1}{10} - \\frac{1}{20} = \\frac{1}{20}$.',
        hint2: 'Diverging: $\\frac{1}{s_i} = \\frac{1}{-10} - \\frac{1}{20} = \\frac{-2-1}{20} = \\frac{-3}{20}$.',
        hint3: '$m = -s_i/s_o = -(-6.67)/20$.',
        explanation: 'Converging: $s_i = 20$ cm (real, inverted). Diverging: $s_i = -20/3 \\approx -6.67$ cm (virtual, upright). $m = 6.67/20 \\approx 0.33$ (reduced to 1/3 size).'
      }
    },
    {
      id: 'ln4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A diverging lens with $f = -20$ cm has an object at 40 cm. The image is:',
            options: [
              'Real, at $s_i = 40$ cm',
              'Virtual, at $s_i = -13.3$ cm',
              'Virtual, at $s_i = -40$ cm',
              'Real, at $s_i = 13.3$ cm'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{s_i} = \\frac{1}{-20} - \\frac{1}{40} = \\frac{-2-1}{40} = \\frac{-3}{40}$, so $s_i = -40/3 \\approx -13.3$ cm. Negative → virtual.'
          },
          {
            question: 'Can a diverging lens ever produce a real image of a real object?',
            options: [
              'Yes, if the object is very far away',
              'Yes, if the object is inside the focal length',
              'No, $s_i$ is always negative',
              'Yes, if the object is at twice the focal length'
            ],
            correctAnswer: 2,
            explanation: 'A single diverging lens can never produce a real image of a real object. The math always gives $s_i < 0$ wherever the object is placed.'
          }
        ]
      }
    }
  ]
}
