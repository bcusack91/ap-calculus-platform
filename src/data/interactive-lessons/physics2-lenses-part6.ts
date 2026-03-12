export const physics2LensesPart6Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln6-intro',
      type: 'text' as const,
      content: `
# 👓 Lens Aberrations & Corrective Lenses

**Part 6 of 7 — Real-World Optics**

Ideal thin lenses produce perfect images, but real lenses have imperfections called **aberrations**. Understanding these flaws — and how to correct them — is essential for AP Physics 2 and connects optics to everyday life.
      `
    },
    {
      id: 'ln6-spherical-aberration',
      type: 'text' as const,
      content: `
## Spherical Aberration

Rays hitting the **edges** of a spherical lens are refracted more strongly than rays near the center. The result: edge rays focus at a slightly different point than central rays, creating a **blurry image**.

### Cause
- Spherical lens surfaces are not the ideal shape for perfect focusing
- The paraxial (near-axis) approximation breaks down for wide lenses

### Corrections
- Use a **lens stop** (aperture) to block edge rays — reduces light but sharpens image
- Use **aspherical lenses** with precisely shaped non-spherical surfaces
- Use a combination of lenses that compensate for each other's aberration
      `
    },
    {
      id: 'ln6-chromatic-aberration',
      type: 'text' as const,
      content: `
## Chromatic Aberration

Different wavelengths (colors) of light refract by different amounts — a phenomenon called **dispersion**. This means a lens has a slightly different focal length for each color:

- **Violet light**: refracted most → shorter focal length
- **Red light**: refracted least → longer focal length

The result: colored fringes around the image, especially noticeable at high magnification.

### Correction: Achromatic Doublet

An **achromatic lens** (or doublet) combines:
- A **converging lens** made of crown glass (low dispersion)
- A **diverging lens** made of flint glass (high dispersion)

The diverging lens cancels the chromatic spread of the converging lens without fully canceling its focusing power. The result is a lens system that brings two wavelengths to the same focus.
      `
    },
    {
      id: 'ln6-corrective-lenses',
      type: 'text' as const,
      content: `
## Corrective Lenses for Vision

The human eye uses a converging lens (the crystalline lens) to focus images on the retina. Vision defects occur when the image doesn't fall exactly on the retina.

### Myopia (Nearsightedness)

- **Problem**: Eye focuses distant objects **in front of** the retina (eyeball too long or lens too strong)
- **Correction**: **Diverging (concave) lens** — spreads rays slightly before they enter the eye
- Focal length: **negative**

### Hyperopia (Farsightedness)

- **Problem**: Eye focuses nearby objects **behind** the retina (eyeball too short or lens too weak)
- **Correction**: **Converging (convex) lens** — converges rays slightly before they enter the eye
- Focal length: **positive**

### Lens Power

$$P = \\frac{1}{f}$$

| Quantity | Unit |
|:---:|:---:|
| $P$ (power) | **Diopters** (D) = m⁻¹ |
| $f$ (focal length) | **meters** |

- Converging lens: $P > 0$ (positive diopters)
- Diverging lens: $P < 0$ (negative diopters)

**Example**: A lens with $f = +0.50$ m has $P = +2.0$ D. A lens with $f = -0.25$ m has $P = -4.0$ D.
      `
    },
    {
      id: 'ln6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Aberrations & Vision Quiz** 👓
      `,
      exercise: {
        questions: [
          {
            question: 'Chromatic aberration occurs because:',
            options: [
              'The lens is too thick',
              'Different colors of light have different focal lengths due to dispersion',
              'The object is too close to the lens',
              'The lens is not perfectly round'
            ],
            correctAnswer: 1,
            explanation: 'Chromatic aberration is caused by dispersion — different wavelengths refract at slightly different angles, giving each color a slightly different focal length.'
          },
          {
            question: 'A person who can see distant objects clearly but struggles to read a book up close has:',
            options: [
              'Myopia — corrected with a diverging lens',
              'Hyperopia — corrected with a diverging lens',
              'Myopia — corrected with a converging lens',
              'Hyperopia — corrected with a converging lens'
            ],
            correctAnswer: 3,
            explanation: 'Difficulty seeing nearby objects = hyperopia (farsightedness). The image forms behind the retina. A converging lens adds focusing power to bring the image forward onto the retina.'
          },
          {
            question: 'A corrective lens has a power of $-3.0$ D. Its focal length is:',
            options: [
              '$+0.33$ m (converging)',
              '$-0.33$ m (diverging)',
              '$+3.0$ m (converging)',
              '$-3.0$ m (diverging)'
            ],
            correctAnswer: 1,
            explanation: '$f = 1/P = 1/(-3.0) = -0.33$ m. Negative focal length → diverging lens. This corrects myopia.'
          }
        ]
      }
    },
    {
      id: 'ln6-dropdown-drill',
      type: 'dropdown-select' as const,
      content: `
**Match the Condition** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Myopia is corrected with',
            options: ['Converging (convex) lens', 'Diverging (concave) lens']
          },
          {
            label: 'Hyperopia is corrected with',
            options: ['Converging (convex) lens', 'Diverging (concave) lens']
          },
          {
            label: 'Edge rays focus at a different point than center rays',
            options: ['Spherical aberration', 'Chromatic aberration']
          },
          {
            label: 'Different colors focus at different distances',
            options: ['Spherical aberration', 'Chromatic aberration']
          },
          {
            label: 'A lens with $P = +4.0$ D is a',
            options: ['Converging (convex) lens', 'Diverging (concave) lens']
          }
        ],
        correctAnswers: [
          'Diverging (concave) lens',
          'Converging (convex) lens',
          'Spherical aberration',
          'Chromatic aberration',
          'Converging (convex) lens'
        ],
        hint1: 'Myopia = too much converging → need to diverge. Hyperopia = not enough converging → need more convergence.',
        hint2: 'Spherical aberration is about lens shape; chromatic aberration is about color/wavelength.',
        hint3: 'Positive power → positive focal length → converging.',
        explanation: 'Myopia → concave (diverging) correction. Hyperopia → convex (converging) correction. Spherical aberration = edge vs center rays. Chromatic = color-dependent focusing. Positive $P$ → converging.'
      }
    },
    {
      id: 'ln6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An optometrist prescribes a lens with power $+2.5$ D. The focal length is:',
            options: [
              '$0.40$ m',
              '$-0.40$ m',
              '$2.5$ m',
              '$-2.5$ m'
            ],
            correctAnswer: 0,
            explanation: '$f = 1/P = 1/2.5 = 0.40$ m. Positive → converging lens. This prescription corrects hyperopia (farsightedness).'
          },
          {
            question: 'An achromatic doublet corrects chromatic aberration by combining:',
            options: [
              'Two converging lenses of the same glass',
              'A converging and diverging lens of different glass types',
              'A single aspherical lens',
              'A lens and a mirror'
            ],
            correctAnswer: 1,
            explanation: 'An achromatic doublet uses a converging lens (crown glass, low dispersion) and a diverging lens (flint glass, high dispersion). The diverging lens cancels the color spread without fully canceling the convergence.'
          }
        ]
      }
    }
  ]
}
