export const physics2LensesPart2Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln2-intro',
      type: 'text' as const,
      content: `
# 🧮 The Thin Lens Equation

**Part 2 of 7 — Quantitative Image Formation**

Now that you know the two lens types, it's time to calculate exactly **where** images form and **how big** they are. The thin lens equation and magnification formula are the workhorses of geometric optics.
      `
    },
    {
      id: 'ln2-thin-lens-eq',
      type: 'text' as const,
      content: `
## The Thin Lens Equation

$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

| Symbol | Meaning |
|:---:|:---:|
| $f$ | Focal length |
| $d_o$ | Object distance (from lens to object) |
| $d_i$ | Image distance (from lens to image) |

### Solving for $d_i$:

$$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o}$$

$$d_i = \\frac{f \\cdot d_o}{d_o - f}$$

This equation works for **both** converging and diverging lenses — the sign of $f$ takes care of everything.
      `
    },
    {
      id: 'ln2-sign-conventions',
      type: 'text' as const,
      content: `
## Sign Conventions (Critical!)

| Quantity | Positive (+) | Negative (−) |
|:---:|:---:|:---:|
| $f$ | Converging lens | Diverging lens |
| $d_o$ | Object on incoming-light side (real object) | Virtual object (rare) |
| $d_i$ | Image on opposite side from object (**real**) | Image on same side as object (**virtual**) |
| $m$ | Image is **upright** | Image is **inverted** |

### Magnification

$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

| Condition | Image Property |
|:---:|:---:|
| $|m| > 1$ | Enlarged |
| $|m| = 1$ | Same size |
| $|m| < 1$ | Reduced |
| $m > 0$ | Upright |
| $m < 0$ | Inverted |

⚠️ The **negative sign** in $m = -d_i/d_o$ is essential. A real image ($d_i > 0$) gives $m < 0$ → inverted. A virtual image ($d_i < 0$) gives $m > 0$ → upright.
      `
    },
    {
      id: 'ln2-example',
      type: 'text' as const,
      content: `
## Worked Example

An object is placed 30 cm from a converging lens with $f = 10$ cm.

**Step 1: Find $d_i$**

$$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{10} - \\frac{1}{30} = \\frac{3 - 1}{30} = \\frac{2}{30} = \\frac{1}{15}$$

$$d_i = 15 \\text{ cm}$$

Since $d_i > 0$: the image is **real** (on the opposite side from the object).

**Step 2: Find magnification**

$$m = -\\frac{d_i}{d_o} = -\\frac{15}{30} = -0.5$$

Since $m < 0$: the image is **inverted**.

Since $|m| = 0.5 < 1$: the image is **reduced** (half the object height).
      `
    },
    {
      id: 'ln2-calc-quiz',
      type: 'multiple-choice' as const,
      content: `
**Thin Lens Equation Practice**
      `,
      exercise: {
        questions: [
          {
            question: 'An object is 20 cm from a converging lens with $f = 10$ cm. Where does the image form?',
            options: [
              '$d_i = 20$ cm (real)',
              '$d_i = 10$ cm (real)',
              '$d_i = -20$ cm (virtual)',
              '$d_i = 6.67$ cm (real)'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{20} = \\frac{2-1}{20} = \\frac{1}{20}$, so $d_i = 20$ cm. Positive → real image.'
          },
          {
            question: 'An object is 5 cm from a converging lens with $f = 10$ cm. The image is:',
            options: [
              'Real and inverted',
              'Virtual and upright',
              'Real and upright',
              'No image forms'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{5} = \\frac{1-2}{10} = -\\frac{1}{10}$, so $d_i = -10$ cm. Negative → virtual image. $m = -(-10)/5 = +2$ → upright and enlarged.'
          },
          {
            question: 'An object is 30 cm from a diverging lens with $f = -15$ cm. What is $d_i$?',
            options: [
              '$+10$ cm',
              '$-10$ cm',
              '$+30$ cm',
              '$-30$ cm'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{d_i} = \\frac{1}{-15} - \\frac{1}{30} = \\frac{-2 - 1}{30} = \\frac{-3}{30} = -\\frac{1}{10}$, so $d_i = -10$ cm. Negative → virtual image (as expected for a diverging lens).'
          }
        ]
      }
    },
    {
      id: 'ln2-input-drill',
      type: 'input-boxes' as const,
      content: `
**Calculation Drill** 🧮

A converging lens has $f = 12$ cm. An object of height 6.0 cm is placed 18 cm from the lens.

1) Image distance $d_i$ (in cm)
2) Magnification $m$
3) Image height $h_i$ (in cm, negative if inverted)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['36', '-2', '-12'],
        hint1: '$\\frac{1}{d_i} = \\frac{1}{12} - \\frac{1}{18}$. Find a common denominator.',
        hint2: '$m = -d_i / d_o = -36/18$.',
        hint3: '$h_i = m \\times h_o = (-2)(6.0)$. Negative means inverted.',
        explanation: '$\\frac{1}{d_i} = \\frac{1}{12} - \\frac{1}{18} = \\frac{3-2}{36} = \\frac{1}{36}$, so $d_i = 36$ cm. $m = -36/18 = -2$. $h_i = (-2)(6.0) = -12$ cm (inverted, twice as tall).'
      }
    },
    {
      id: 'ln2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'If $d_i$ is negative, the image is:',
            options: [
              'Real and inverted',
              'Real and upright',
              'Virtual and inverted',
              'Virtual and upright'
            ],
            correctAnswer: 3,
            explanation: 'Negative $d_i$ means the image is on the same side as the object → virtual. The magnification $m = -d_i/d_o$ becomes positive when $d_i < 0$ → upright.'
          },
          {
            question: 'A magnification of $m = -3$ means the image is:',
            options: [
              'Upright and 3× larger',
              'Inverted and 3× larger',
              'Upright and 1/3 the size',
              'Inverted and 1/3 the size'
            ],
            correctAnswer: 1,
            explanation: '$m < 0$ → inverted. $|m| = 3 > 1$ → enlarged (3 times the object height).'
          }
        ]
      }
    }
  ]
}
