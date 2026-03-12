export const physics2LensesPart3Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln3-intro',
      type: 'text' as const,
      content: `
# 📐 Ray Diagrams — Converging Lenses

**Part 3 of 7 — Five Cases for Convex Lenses**

A converging lens produces dramatically different images depending on where you place the object relative to the focal point $F$ and the point $2F$ (twice the focal length). Mastering these five cases is essential for the AP exam.
      `
    },
    {
      id: 'ln3-case1',
      type: 'text' as const,
      content: `
## Case 1: Object Beyond $2F$ ($d_o > 2f$)

### Ray Diagram
- Parallel ray → refracts through $F$
- Focal ray → refracts parallel
- Central ray → straight through center

The three rays converge **between $F$ and $2F$** on the opposite side.

### Image Characteristics
| Property | Value |
|:---:|:---:|
| Type | **Real** |
| Orientation | **Inverted** |
| Size | **Reduced** ($|m| < 1$) |
| Location | Between $F$ and $2F$ on far side |

📷 **Application**: This is how a camera works — the object is far away, and a small, inverted, real image forms on the film/sensor.
      `
    },
    {
      id: 'ln3-case2-3',
      type: 'text' as const,
      content: `
## Case 2: Object at $2F$ ($d_o = 2f$)

### Image Characteristics
| Property | Value |
|:---:|:---:|
| Type | **Real** |
| Orientation | **Inverted** |
| Size | **Same size** ($|m| = 1$) |
| Location | At $2F$ on far side |

**Verification**: $\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{2f} = \\frac{2-1}{2f} = \\frac{1}{2f}$, so $d_i = 2f$. $m = -\\frac{2f}{2f} = -1$.

---

## Case 3: Object Between $F$ and $2F$ ($f < d_o < 2f$)

### Image Characteristics
| Property | Value |
|:---:|:---:|
| Type | **Real** |
| Orientation | **Inverted** |
| Size | **Enlarged** ($|m| > 1$) |
| Location | Beyond $2F$ on far side |

🎥 **Application**: This is how a projector works — the slide is placed between $F$ and $2F$, producing a large, inverted, real image on the screen.
      `
    },
    {
      id: 'ln3-case4-5',
      type: 'text' as const,
      content: `
## Case 4: Object at $F$ ($d_o = f$)

### Image Characteristics
| Property | Value |
|:---:|:---:|
| Type | **No image** |
| Rays | Emerge **parallel** (never converge) |
| $d_i$ | $\\to \\infty$ |

**Verification**: $\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{f} = 0$, so $d_i \\to \\infty$. The refracted rays are parallel — they neither converge nor diverge.

🔦 **Application**: Flashlights and searchlights place the bulb at the focal point to produce a parallel beam.

---

## Case 5: Object Inside $F$ ($d_o < f$)

### Image Characteristics
| Property | Value |
|:---:|:---:|
| Type | **Virtual** |
| Orientation | **Upright** |
| Size | **Enlarged** ($|m| > 1$) |
| Location | Same side as object, behind the object |

**Verification** ($d_o = f/2$): $\\frac{1}{d_i} = \\frac{1}{f} - \\frac{2}{f} = -\\frac{1}{f}$, so $d_i = -f$. $m = -(-f)/(f/2) = +2$.

🔎 **Application**: This is how a magnifying glass works — you hold the object inside the focal length to see an enlarged, upright, virtual image.
      `
    },
    {
      id: 'ln3-summary',
      type: 'text' as const,
      content: `
## Summary Table: All Five Cases

| Case | $d_o$ | Image Type | Orientation | Size |
|:---:|:---:|:---:|:---:|:---:|
| 1 | $> 2f$ | Real | Inverted | Reduced |
| 2 | $= 2f$ | Real | Inverted | Same size |
| 3 | $f < d_o < 2f$ | Real | Inverted | Enlarged |
| 4 | $= f$ | No image | — | — |
| 5 | $< f$ | Virtual | Upright | Enlarged |

### Key Patterns
- As the object moves **toward** $F$ from the left, the real image moves **farther away** and gets **larger**
- At $F$, the image is at infinity
- Inside $F$, the image flips to **virtual** and **upright**
      `
    },
    {
      id: 'ln3-dropdown-drill',
      type: 'dropdown-select' as const,
      content: `
**Match the Case to the Image** 🎯

For a converging lens, select the correct image type for each object position:
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Object beyond $2F$',
            options: ['Real, inverted, reduced', 'Real, inverted, enlarged', 'Virtual, upright, enlarged', 'No image']
          },
          {
            label: 'Object at $2F$',
            options: ['Real, inverted, reduced', 'Real, inverted, same size', 'Virtual, upright, enlarged', 'No image']
          },
          {
            label: 'Object between $F$ and $2F$',
            options: ['Real, inverted, reduced', 'Real, inverted, enlarged', 'Virtual, upright, enlarged', 'No image']
          },
          {
            label: 'Object at $F$',
            options: ['Real, inverted, reduced', 'Real, inverted, enlarged', 'Virtual, upright, enlarged', 'No image']
          },
          {
            label: 'Object inside $F$',
            options: ['Real, inverted, reduced', 'Real, inverted, enlarged', 'Virtual, upright, enlarged', 'No image']
          }
        ],
        correctAnswers: [
          'Real, inverted, reduced',
          'Real, inverted, same size',
          'Real, inverted, enlarged',
          'No image',
          'Virtual, upright, enlarged'
        ],
        hint1: 'Beyond $2F$: think of a camera capturing a distant scene.',
        hint2: 'At $2F$: object and image are symmetric — $d_i = 2f$ and $|m| = 1$.',
        hint3: 'Inside $F$: the lens acts as a magnifying glass — virtual, upright, enlarged.',
        explanation: 'The five cases follow a pattern: as the object approaches $F$, the real image moves farther away and grows. At $F$, no image forms. Inside $F$, the image becomes virtual, upright, and enlarged.'
      }
    },
    {
      id: 'ln3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A projector uses a converging lens. Where must the slide be placed to project a large image on a distant screen?',
            options: [
              'Beyond $2F$',
              'At $2F$',
              'Between $F$ and $2F$',
              'Inside $F$'
            ],
            correctAnswer: 2,
            explanation: 'Between $F$ and $2F$, a converging lens produces a real, inverted, enlarged image — exactly what a projector needs. The slide is inserted upside down so the projected image appears right-side up.'
          },
          {
            question: 'As an object moves from $2F$ toward $F$ (using a converging lens), the real image:',
            options: [
              'Gets smaller and moves closer to the lens',
              'Gets larger and moves farther from the lens',
              'Stays the same size',
              'Becomes virtual'
            ],
            correctAnswer: 1,
            explanation: 'Moving the object from $2F$ toward $F$ makes the image distance grow and the magnification increase. The image grows larger and moves farther from the lens, reaching infinity when the object reaches $F$.'
          }
        ]
      }
    }
  ]
}
