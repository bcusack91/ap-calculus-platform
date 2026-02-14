export const physics2InterferencePart6Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id6-intro',
      type: 'text' as const,
      content: `
# 🔭 Resolution and the Rayleigh Criterion

**Part 6 of 7 — The Diffraction Limit**

Every optical instrument — telescope, microscope, camera, even your eye — has a fundamental limit on how fine a detail it can resolve. This limit comes not from manufacturing defects, but from the **wave nature of light** itself.
      `
    },
    {
      id: 'id6-circular-diffraction',
      type: 'text' as const,
      content: `
## Diffraction Through Circular Apertures

When light passes through a circular opening of diameter $D$, it doesn't form a perfect point — it forms a **diffraction pattern** called an **Airy disk**:

- A bright central disk surrounded by faint rings
- The first dark ring occurs at angle:

$$\\sin\\theta = 1.22 \\frac{\\lambda}{D}$$

For small angles ($\\sin\\theta \\approx \\theta$ in radians):

$$\\theta_{\\text{min}} = 1.22 \\frac{\\lambda}{D}$$

### Why 1.22?

The factor 1.22 comes from the mathematics of diffraction through a **circular** aperture (it involves Bessel functions). For a rectangular slit, the factor would be 1.00.

### The Airy Disk

The central bright disk contains about **84%** of the total light. The remaining 16% is spread across the surrounding rings. The angular radius of the central disk is $\\theta_{\\text{min}} = 1.22\\lambda/D$.
      `
    },
    {
      id: 'id6-rayleigh',
      type: 'text' as const,
      content: `
## The Rayleigh Criterion

### The Problem

When two point sources (like two stars) are close together, their Airy disks overlap. At some point, you can no longer tell them apart.

### Rayleigh's Rule

Two sources are **just resolved** when the central maximum of one falls on the **first minimum** of the other. This gives the minimum resolvable angle:

$$\\theta_{\\text{min}} = 1.22 \\frac{\\lambda}{D}$$

| Condition | Description |
|-----------|-------------|
| $\\theta > \\theta_{\\text{min}}$ | Sources are **resolved** (clearly separate) |
| $\\theta = \\theta_{\\text{min}}$ | Sources are **just resolved** (barely distinguishable) |
| $\\theta < \\theta_{\\text{min}}$ | Sources are **not resolved** (appear as one) |

### Key Insight

To improve resolution (resolve finer details), you need:
- **Larger** aperture $D$ → smaller $\\theta_{\\text{min}}$
- **Shorter** wavelength $\\lambda$ → smaller $\\theta_{\\text{min}}$

This is why:
- Telescopes are built with large mirrors
- Microscopes use blue/UV light or electron beams for better resolution
- Radio telescopes must be enormous to achieve decent resolution
      `
    },
    {
      id: 'id6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Resolution Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Rayleigh criterion states that two sources are just resolved when:',
            options: [
              'Their Airy disks completely overlap',
              'The central max of one falls on the first minimum of the other',
              'Their images are separated by at least one Airy disk diameter',
              'The total intensity between them drops to zero'
            ],
            correctAnswer: 1,
            explanation: 'The Rayleigh criterion defines "just resolved" as the central maximum of one diffraction pattern coinciding with the first minimum of the other. This produces a small dip in intensity between the two images.'
          },
          {
            question: 'To improve the resolution of a telescope, you should:',
            options: [
              'Use a longer wavelength of light',
              'Use a smaller aperture',
              'Use a larger aperture',
              'Move the telescope closer to the objects'
            ],
            correctAnswer: 2,
            explanation: '$\\theta_{\\text{min}} = 1.22\\lambda/D$. Larger $D$ gives a smaller $\\theta_{\\text{min}}$, meaning the telescope can resolve finer angular separations.'
          },
          {
            question: 'An electron microscope achieves better resolution than an optical microscope because:',
            options: [
              'Electrons are faster than light',
              'Electrons have much shorter wavelengths',
              'Electrons have larger apertures',
              'Electrons don\'t diffract'
            ],
            correctAnswer: 1,
            explanation: 'Electrons have very short de Broglie wavelengths (much less than visible light). Since $\\theta_{\\text{min}} \\propto \\lambda$, shorter wavelength → better resolution.'
          }
        ]
      }
    },
    {
      id: 'id6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Resolution Calculation Drill** 🧮

1) A telescope has a mirror diameter of $D = 2.4$ m. What is the minimum resolvable angle for light of $\\lambda = 550$ nm? (in arcseconds, 1 rad = 206,265 arcsec; round to 3 significant figures)

2) Two stars are separated by an angle of $0.10$ arcseconds. What minimum telescope diameter is needed to resolve them at $\\lambda = 500$ nm? (in meters, to 3 significant figures)

3) The pupil of the human eye has diameter $D \\approx 5.0$ mm. What is the angular resolution limit at $\\lambda = 550$ nm? (in arcminutes, to 3 significant figures; 1 rad = 3438 arcmin)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.06', '1.3', '0.5', '0.060', '1.30', '0.50'],
        hint1: '$\\theta = 1.22\\lambda/D$ in radians, then multiply by 206,265 to convert to arcseconds.',
        hint2: '$D = 1.22\\lambda/\\theta$. Convert 0.10 arcsec to radians first: divide by 206,265.',
        hint3: '$\\theta = 1.22(550 \\times 10^{-9})/(5.0 \\times 10^{-3})$ in radians, then multiply by 3438.',
        explanation: '1) $\\theta = 1.22(550 \\times 10^{-9})/2.4 = 2.80 \\times 10^{-7}$ rad $= 2.80 \\times 10^{-7} \\times 206{,}265 = 0.058 \\approx 0.06$ arcsec. 2) $\\theta = 0.10/206{,}265 = 4.85 \\times 10^{-7}$ rad. $D = 1.22(500 \\times 10^{-9})/(4.85 \\times 10^{-7}) = 1.26 \\approx 1.3$ m. 3) $\\theta = 1.22(550 \\times 10^{-9})/(5.0 \\times 10^{-3}) = 1.34 \\times 10^{-4}$ rad $= 1.34 \\times 10^{-4} \\times 3438 = 0.46 \\approx 0.5$ arcmin.'
      }
    },
    {
      id: 'id6-applications-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Resolution Applications** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Doubling the telescope diameter improves angular resolution by a factor of',
            options: ['2', '4', '√2', 'no improvement']
          },
          {
            label: 'Using blue light instead of red light in a microscope',
            options: ['worsens resolution', 'improves resolution', 'has no effect', 'only changes color']
          },
          {
            label: 'Radio telescopes are enormous because radio waves have',
            options: ['very short wavelengths', 'very long wavelengths', 'high energy', 'no diffraction']
          },
          {
            label: 'The diffraction limit means that even a perfect lens cannot',
            options: ['focus light', 'magnify objects', 'resolve details smaller than about λ', 'refract light']
          }
        ],
        correctAnswers: ['2', 'improves resolution', 'very long wavelengths', 'resolve details smaller than about λ'],
        hint1: '$\\theta_{\\min} = 1.22\\lambda/D$. Doubling $D$ halves $\\theta_{\\min}$ (2× better resolution).',
        hint2: 'Blue light has shorter wavelength than red → smaller $\\theta_{\\min}$.',
        hint3: 'Radio waves have λ from mm to meters — need huge apertures to compensate.',
        explanation: 'Resolution ∝ 1/D, so doubling D gives 2× improvement. Shorter λ (blue) improves resolution. Radio waves are long, needing huge dishes. The diffraction limit sets a fundamental minimum resolvable feature size of ~λ.'
      }
    },
    {
      id: 'id6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rayleigh Criterion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two headlights of a car are 1.5 m apart. An observer\'s pupil diameter is 4.0 mm and $\\lambda = 550$ nm. The maximum distance at which the headlights can be just resolved is approximately:',
            options: [
              '1 km',
              '5 km',
              '9 km',
              '15 km'
            ],
            correctAnswer: 2,
            explanation: '$\\theta_{\\min} = 1.22\\lambda/D = 1.22(550 \\times 10^{-9})/(4.0 \\times 10^{-3}) = 1.68 \\times 10^{-4}$ rad. At distance $L$: $\\theta = s/L \\Rightarrow L = s/\\theta = 1.5/(1.68 \\times 10^{-4}) \\approx 8{,}930$ m $\\approx 9$ km.'
          },
          {
            question: 'The Hubble Space Telescope ($D = 2.4$ m) observes at $\\lambda = 500$ nm. Its angular resolution is about:',
            options: [
              '0.05 arcseconds',
              '0.5 arcseconds',
              '5 arcseconds',
              '50 arcseconds'
            ],
            correctAnswer: 0,
            explanation: '$\\theta = 1.22(500 \\times 10^{-9})/2.4 = 2.54 \\times 10^{-7}$ rad $= 2.54 \\times 10^{-7} \\times 206{,}265 \\approx 0.052$ arcsec $\\approx 0.05$ arcsec.'
          }
        ]
      }
    }
  ]
}
