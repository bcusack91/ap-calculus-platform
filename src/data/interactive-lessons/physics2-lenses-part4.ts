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
| Type | **Virtual** ($d_i < 0$) |
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

**Step 1: Find $d_i$**

$$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{-8} - \\frac{1}{24} = \\frac{-3 - 1}{24} = \\frac{-4}{24} = -\\frac{1}{6}$$

$$d_i = -6 \\text{ cm}$$

✓ Negative → virtual image (on the same side as the object).

✓ $|d_i| = 6 < 8 = |f|$ → image is between the lens and $F$. ✓

**Step 2: Find magnification**

$$m = -\\frac{d_i}{d_o} = -\\frac{-6}{24} = +\\frac{1}{4} = +0.25$$

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
            question: 'For a diverging lens, the image distance $d_i$ is always:',
            options: [
              'Positive (real image)',
              'Negative (virtual image)',
              'Zero',
              'It depends on the object distance'
            ],
            correctAnswer: 1,
            explanation: 'A diverging lens always produces a virtual image for a real object, so $d_i < 0$ always.'
          },
          {
            question: 'As an object moves farther from a diverging lens, the virtual image:',
            options: [
              'Moves closer to the focal point $F$ and gets smaller',
              'Moves farther from the lens and gets larger',
              'Stays in the same position',
              'Becomes real'
            ],
            correctAnswer: 0,
            explanation: 'As $d_o \\to \\infty$, $d_i \\to f$ (the image approaches the focal point). The magnification $|m| = |d_i|/d_o \\to 0$. The image shrinks toward a point at $F$.'
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

1) Image distance $d_i$ (in cm)

2) Magnification $m$ (as a fraction or decimal)

3) Image height $h_i$ (in cm)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-9', '0.25', '2.25'],
        hint1: '$\\frac{1}{d_i} = \\frac{1}{-12} - \\frac{1}{36}$. Find a common denominator of 36.',
        hint2: '$m = -d_i/d_o = -(-9)/36 = 9/36$.',
        hint3: '$h_i = m \\times h_o = 0.25 \\times 9.0$.',
        explanation: '$\\frac{1}{d_i} = \\frac{1}{-12} - \\frac{1}{36} = \\frac{-3-1}{36} = \\frac{-4}{36} = -\\frac{1}{9}$, so $d_i = -9$ cm. $m = -(-9)/36 = +0.25$. $h_i = (0.25)(9.0) = 2.25$ cm (upright and reduced).'
      }
    },
    {
      id: 'ln4-comparison-drill',
      type: 'input-boxes' as const,
      content: `
**Converging vs Diverging Comparison** 🔍

An object is placed 20 cm from a lens. Calculate $d_i$ for each lens:

1) Converging lens with $f = +10$ cm: $d_i$ = ? (in cm)

2) Diverging lens with $f = -10$ cm: $d_i$ = ? (in cm)

3) What is the magnification for the diverging lens?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '-6.67', '0.33'],
        hint1: 'Converging: $\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{20} = \\frac{1}{20}$.',
        hint2: 'Diverging: $\\frac{1}{d_i} = \\frac{1}{-10} - \\frac{1}{20} = \\frac{-2-1}{20} = \\frac{-3}{20}$.',
        hint3: '$m = -d_i/d_o = -(-6.67)/20$.',
        explanation: 'Converging: $d_i = 20$ cm (real, inverted). Diverging: $d_i = -20/3 \\approx -6.67$ cm (virtual, upright). $m = 6.67/20 \\approx 0.33$ (reduced to 1/3 size).'
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
              'Real, at $d_i = 40$ cm',
              'Virtual, at $d_i = -13.3$ cm',
              'Virtual, at $d_i = -40$ cm',
              'Real, at $d_i = 13.3$ cm'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{d_i} = \\frac{1}{-20} - \\frac{1}{40} = \\frac{-2-1}{40} = \\frac{-3}{40}$, so $d_i = -40/3 \\approx -13.3$ cm. Negative → virtual.'
          },
          {
            question: 'Can a diverging lens ever produce a real image of a real object?',
            options: [
              'Yes, if the object is very far away',
              'Yes, if the object is inside the focal length',
              'No, never',
              'Yes, if combined with another lens'
            ],
            correctAnswer: 2,
            explanation: 'A single diverging lens can never produce a real image of a real object. The math always gives $d_i < 0$. (A diverging lens can produce a real image of a virtual object in multi-lens systems, but that is a special case.)'
          }
        ]
      }
    }
  ]
}
