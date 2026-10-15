export const physics2InterferencePart3Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id3-intro',
      type: 'text' as const,
      content: `
# 🌅 Single-Slit Diffraction

**Part 3 of 7 — When Light Bends Around Edges**

Even a **single** slit produces a pattern of bright and dark bands. This is **diffraction** — the bending and spreading of waves as they pass through an opening. The narrower the slit, the more the light spreads out.
      `
    },
    {
      id: 'id3-single-slit-theory',
      type: 'text' as const,
      content: `
## Single-Slit Diffraction Pattern

### The Minima Condition

For a slit of width $a$, **dark fringes** (minima) occur at:

$$a \\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\pm 3, \\ldots)$$

Note: $m = 0$ is **NOT** a minimum — it is the bright central maximum!

### Central Maximum Width

The central bright fringe extends between the first minima on either side ($m = \\pm 1$):

$$\\text{Angular width} = 2\\theta_1 = 2\\arcsin\\left(\\frac{\\lambda}{a}\\right)$$

For small angles:

$$\\text{Width on screen} = \\frac{2\\lambda L}{a}$$

The central maximum is **twice as wide** as any other bright fringe.

### Key Differences from Double-Slit

| Feature | Double-Slit | Single-Slit |
|---------|-------------|-------------|
| Formula gives | Maxima positions | **Minima** positions |
| Central max width | Same as other fringes | **Twice** as wide |
| Fringe brightness | All maxima roughly equal | Rapidly decreasing |
| Pattern shape | Equally spaced | Central peak dominates |
      `
    },
    {
      id: 'id3-intensity',
      type: 'text' as const,
      content: `
## Brightness Across the Pattern

### Key Features
- **Central maximum**: the brightest and widest band
- **Secondary maxima**: much dimmer, and each one farther out is dimmer still
- **Minima**: dark bands at $a\\sin\\theta = m\\lambda$

### Why the Minima Appear

Split the slit into a top half and a bottom half. At the angle where $a\\sin\\theta = \\lambda$, each wavelet from the top half has a partner in the bottom half that travels exactly $\\lambda/2$ farther. Every pair cancels, so that direction is dark.

### Width and Slit Size

The relationship between slit width $a$ and the diffraction pattern:

| Slit Width | Pattern |
|------------|---------|
| $a \\gg \\lambda$ | Very narrow central peak → almost no diffraction (geometric shadow) |
| $a \\approx \\lambda$ | Wide central peak → strong diffraction |
| $a < \\lambda$ | Light spreads in all directions |

The narrower the slit, the **wider** the diffraction pattern — this is an inverse relationship!

### Shape of the Opening

The pattern depends on the shape of the opening. A long, narrow slit spreads light **perpendicular** to its length, into a row of bands; a small **circular** hole spreads light in every direction, into a bright central spot surrounded by faint rings.
      `
    },
    {
      id: 'id3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Single-Slit Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In single-slit diffraction, the equation $a\\sin\\theta = m\\lambda$ gives the positions of:',
            options: [
              'Bright maxima',
              'Dark minima',
              'Both maxima and minima',
              'The central maximum only'
            ],
            correctAnswer: 1,
            explanation: 'For a single slit, $a\\sin\\theta = m\\lambda$ ($m = \\pm 1, \\pm 2, \\ldots$) gives the positions of **minima** (dark fringes). This is different from the double-slit formula which gives maxima.'
          },
          {
            question: 'If the slit width is halved, the width of the central maximum:',
            options: [
              'Halves',
              'Doubles',
              'Stays the same',
              'Quadruples'
            ],
            correctAnswer: 1,
            explanation: 'Central max width $= 2\\lambda L / a$. Halving $a$ doubles the width. Narrower slit → wider diffraction pattern.'
          },
          {
            question: 'Water waves pass through a gap in a harbor wall. In which case do the waves spread out the most beyond the gap?',
            options: [
              'Gap much wider than the wavelength',
              'Gap about equal to the wavelength',
              'Gap twice as wide as the wavelength',
              'Gap ten times as wide as the wavelength'
            ],
            correctAnswer: 1,
            explanation: 'Diffraction is most pronounced when the opening is comparable to the wavelength. As the gap grows larger than the wavelength, the waves pass through more like a straight beam with only slight spreading at the edges.'
          }
        ]
      }
    },
    {
      id: 'id3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Single-Slit Diffraction Drill** 🧮

Light of wavelength 600 nm passes through a single slit of width $a = 0.15$ mm. A screen is placed $L = 2.0$ m away.

1) Angular position of the 1st minimum $\\theta_1$ (in degrees, to 3 significant figures)

2) Width of the central maximum on the screen (in mm)

3) Position of the 2nd minimum from the center (in mm)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.23', '16', '16'],
        hint1: '$\\sin\\theta_1 = \\lambda / a = (600 \\times 10^{-9})/(0.15 \\times 10^{-3})$. Convert radians to degrees.',
        hint2: 'Width $= 2\\lambda L / a$.',
        hint3: '$y_2 = 2\\lambda L / a = $ central max width.',
        explanation: '$\\sin\\theta_1 = 4.0 \\times 10^{-3}$, $\\theta_1 = 0.229°\\approx 0.23°$. Width $= 2(600 \\times 10^{-9})(2.0)/(0.15 \\times 10^{-3}) = 0.016$ m $= 16$ mm. $y_2 = 2\\lambda L / a = 16$ mm from center.'
      }
    },
    {
      id: 'id3-comparison-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Double-Slit vs Single-Slit** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The double-slit equation dsinθ = mλ gives positions of',
            options: ['maxima (bright)', 'minima (dark)', 'both', 'neither']
          },
          {
            label: 'The single-slit equation asinθ = mλ gives positions of',
            options: ['maxima (bright)', 'minima (dark)', 'both', 'neither']
          },
          {
            label: 'Narrowing the slit in single-slit diffraction makes the central maximum',
            options: ['narrower', 'wider', 'unchanged', 'disappear']
          },
          {
            label: 'In single-slit diffraction, secondary maxima are',
            options: ['equally bright as central max', 'much dimmer than central max', 'brighter than central max', 'nonexistent']
          }
        ],
        correctAnswers: ['maxima (bright)', 'minima (dark)', 'wider', 'much dimmer than central max'],
        hint1: 'Double-slit: $d\\sin\\theta = m\\lambda$ gives bright fringes (constructive interference).',
        hint2: 'Single-slit: $a\\sin\\theta = m\\lambda$ gives dark fringes (destructive interference by division of wavefront).',
        hint3: 'Width ∝ 1/a — smaller slit means wider pattern.',
        explanation: 'Double-slit gives maxima; single-slit gives minima. Narrower slit → wider pattern. Secondary maxima are much dimmer than the central maximum.'
      }
    },
    {
      id: 'id3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Single-Slit Diffraction** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Red light ($\\lambda = 700$ nm) and blue light ($\\lambda = 450$ nm) pass through the same single slit. Which has a wider central maximum?',
            options: [
              'Blue light',
              'Red light',
              'Both the same',
              'Depends on the slit width'
            ],
            correctAnswer: 1,
            explanation: 'Central max width $= 2\\lambda L / a$. Longer wavelength (red) gives a wider central maximum.'
          },
          {
            question: 'A single slit has width $a = 2\\lambda$. The first minimum occurs at:',
            options: [
              '$\\theta = 30°$',
              '$\\theta = 45°$',
              '$\\theta = 60°$',
              '$\\theta = 90°$'
            ],
            correctAnswer: 0,
            explanation: '$\\sin\\theta = \\lambda / a = \\lambda / (2\\lambda) = 0.5$. So $\\theta = 30°$.'
          }
        ]
      }
    }
  ]
}
