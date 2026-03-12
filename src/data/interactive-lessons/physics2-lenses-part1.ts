export const physics2LensesPart1Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln1-intro',
      type: 'text' as const,
      content: `
# 🔍 Types of Lenses

**Part 1 of 7 — Converging vs Diverging**

Lenses are transparent optical elements that refract light to form images. Every camera, microscope, telescope, and pair of eyeglasses relies on lenses. In this part, you'll learn to distinguish the two fundamental lens types and trace the principal rays through each.
      `
    },
    {
      id: 'ln1-converging',
      type: 'text' as const,
      content: `
## Converging (Convex) Lenses

A **converging lens** (also called a convex lens) is thicker at the center than at the edges. It bends parallel light rays **inward** so they meet at the **focal point** on the far side of the lens.

### Key Terminology

| Term | Definition |
|:---:|:---:|
| **Optical axis** | Horizontal line through the center of the lens |
| **Focal point ($F$)** | Point where parallel rays converge after passing through the lens |
| **Focal length ($f$)** | Distance from the lens center to $F$; **positive** for converging lenses |
| **Center of lens ($O$)** | The point on the optical axis at the center of the lens |

### Three Principal Rays (Converging Lens)

1. **Parallel ray**: Enters parallel to the optical axis → refracts through the focal point $F$ on the far side
2. **Focal ray**: Passes through $F$ on the near side → refracts parallel to the optical axis
3. **Central ray**: Passes straight through the center of the lens → continues undeviated

Where any two of these rays intersect on the far side, a **real image** forms.
      `
    },
    {
      id: 'ln1-diverging',
      type: 'text' as const,
      content: `
## Diverging (Concave) Lenses

A **diverging lens** (also called a concave lens) is thinner at the center than at the edges. It spreads parallel light rays **outward** so they appear to originate from a focal point on the **same side** as the incoming light.

### Key Facts

- Focal length is **negative**: $f < 0$
- Parallel rays diverge after passing through the lens
- The focal point is **virtual** (on the same side as the incoming light)
- A diverging lens **always** produces a virtual, upright, reduced image (for real objects)

### Three Principal Rays (Diverging Lens)

1. **Parallel ray**: Enters parallel to the axis → refracts as if coming from $F$ on the near side
2. **Focal ray**: Aimed toward $F$ on the far side → refracts parallel to the axis
3. **Central ray**: Passes straight through the center → undeviated

The refracted rays diverge, but their **backward extensions** meet on the same side as the object — that intersection is the **virtual image**.
      `
    },
    {
      id: 'ln1-real-vs-virtual',
      type: 'text' as const,
      content: `
## Real vs Virtual Images

| Property | Real Image | Virtual Image |
|:---:|:---:|:---:|
| Formed by | Actual convergence of light rays | Backward extensions of diverging rays |
| Location | Opposite side of the lens from the object | Same side as the object |
| Orientation | **Inverted** | **Upright** |
| Can be projected? | Yes (onto a screen) | No |
| Sign of $d_i$ | **Positive** ($d_i > 0$) | **Negative** ($d_i < 0$) |

### Quick Rule

- **Converging lens**: can produce either real or virtual images depending on object distance
- **Diverging lens**: always produces virtual images (for real objects)
      `
    },
    {
      id: 'ln1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Lens Basics Quiz** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A converging lens has a focal length that is:',
            options: [
              'Negative',
              'Zero',
              'Positive',
              'Could be positive or negative'
            ],
            correctAnswer: 2,
            explanation: 'By sign convention, converging (convex) lenses have a positive focal length ($f > 0$). Diverging (concave) lenses have negative focal length ($f < 0$).'
          },
          {
            question: 'A diverging lens always produces images that are:',
            options: [
              'Real, inverted, and enlarged',
              'Real, inverted, and reduced',
              'Virtual, upright, and reduced',
              'Virtual, upright, and enlarged'
            ],
            correctAnswer: 2,
            explanation: 'A diverging lens always produces virtual, upright, and reduced images for real objects. The diverging rays never actually converge on the far side.'
          },
          {
            question: 'Which principal ray passes through the center of the lens without bending?',
            options: [
              'The parallel ray',
              'The focal ray',
              'The central ray',
              'None — all rays bend'
            ],
            correctAnswer: 2,
            explanation: 'The central ray passes through the center of the lens and continues in a straight line. The lens surfaces are locally parallel at the center, so there is no net deviation.'
          }
        ]
      }
    },
    {
      id: 'ln1-dropdown-drill',
      type: 'dropdown-select' as const,
      content: `
**Identify the Lens Type** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Thicker at center, thinner at edges',
            options: ['Converging (convex)', 'Diverging (concave)']
          },
          {
            label: 'Focal length is negative',
            options: ['Converging (convex)', 'Diverging (concave)']
          },
          {
            label: 'Parallel rays converge to a real focal point',
            options: ['Converging (convex)', 'Diverging (concave)']
          },
          {
            label: 'Always produces virtual, upright, reduced images',
            options: ['Converging (convex)', 'Diverging (concave)']
          },
          {
            label: 'Can produce both real and virtual images',
            options: ['Converging (convex)', 'Diverging (concave)']
          }
        ],
        correctAnswers: [
          'Converging (convex)',
          'Diverging (concave)',
          'Converging (convex)',
          'Diverging (concave)',
          'Converging (convex)'
        ],
        hint1: 'Convex = thicker in the middle. Concave = thinner in the middle.',
        hint2: 'Converging → $f > 0$. Diverging → $f < 0$.',
        hint3: 'A converging lens can produce real images (object beyond $F$) or virtual images (object inside $F$).',
        explanation: 'Converging (convex) lenses have positive focal length and can produce real or virtual images. Diverging (concave) lenses have negative focal length and always produce virtual, upright, reduced images.'
      }
    },
    {
      id: 'ln1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A real image formed by a lens is always:',
            options: [
              'Upright and on the same side as the object',
              'Inverted and on the opposite side from the object',
              'Upright and on the opposite side from the object',
              'Inverted and on the same side as the object'
            ],
            correctAnswer: 1,
            explanation: 'Real images are formed where refracted rays actually converge — on the opposite side of the lens from the object. Real images are always inverted.'
          },
          {
            question: 'Which of the following is true about virtual images formed by lenses?',
            options: [
              'They can be projected onto a screen',
              'They are formed by actual convergence of light',
              'They have a positive image distance ($d_i > 0$)',
              'They have a negative image distance ($d_i < 0$)'
            ],
            correctAnswer: 3,
            explanation: 'Virtual images cannot be projected — they are located where the backward extensions of diverging rays intersect. By sign convention, virtual images have $d_i < 0$.'
          }
        ]
      }
    }
  ]
}
