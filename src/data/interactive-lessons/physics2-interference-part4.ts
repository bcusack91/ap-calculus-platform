export const physics2InterferencePart4Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id4-intro',
      type: 'text' as const,
      content: `
# 🌈 Diffraction Gratings

**Part 4 of 7 — Splitting Light into a Rainbow**

A **diffraction grating** is like a double slit on steroids — thousands of equally spaced slits that produce extremely sharp, well-separated bright fringes. Gratings are the key tool for analyzing the wavelengths present in light.
      `
    },
    {
      id: 'id4-grating-theory',
      type: 'text' as const,
      content: `
## How Gratings Work

### The Grating Equation

A grating with slit spacing $d$ produces **bright maxima** at:

$$d \\sin\\theta = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)$$

This looks identical to the double-slit equation — but the pattern is very different.

### Slit Spacing from Line Count

If the grating has $N$ lines per millimeter (or per cm), the slit spacing is:

$$d = \\frac{1}{N}$$

**Example**: A grating with 500 lines/mm has $d = 1/500$ mm $= 2.0 \\times 10^{-6}$ m $= 2.0\\;\\mu\\text{m}$.

### Why Gratings Are Better Than Double Slits

| Feature | Double Slit | Grating |
|---------|-------------|---------|
| Number of slits | 2 | Thousands |
| Bright fringes | Broad, fuzzy | **Very sharp, narrow** |
| Dim between maxima | Gradual | Nearly completely dark |
| Resolution | Low | **Very high** |

With $N$ slits, each principal maximum is $N$ times as narrow as the double-slit maximum. More slits → sharper peaks.
      `
    },
    {
      id: 'id4-spectral-analysis',
      type: 'text' as const,
      content: `
## Spectral Analysis with Gratings

### Separating Colors

When white light hits a grating, each wavelength diffracts at a different angle:

$$\\sin\\theta = \\frac{m\\lambda}{d}$$

Longer wavelengths (red) diffract more than shorter wavelengths (violet). This creates a **spectrum** at each order $m$.

### Rainbow Pattern for Each Order
- $m = 0$: central white maximum (all colors overlap)
- $m = \\pm 1$: first-order spectrum (violet closest to center, red farthest)
- $m = \\pm 2$: second-order spectrum (wider spread, may overlap with other orders)

### Resolving Power

The ability to distinguish two close wavelengths is the **resolving power**:

$$R = \\frac{\\lambda}{\\Delta\\lambda} = mN$$

where $N$ is the total number of slits and $m$ is the order.

Higher orders and more slits → better resolution of closely spaced spectral lines.

### Maximum Order

The highest observable order is limited by $\\sin\\theta \\leq 1$:

$$m_{\\max} = \\left\\lfloor \\frac{d}{\\lambda} \\right\\rfloor$$
      `
    },
    {
      id: 'id4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Grating Concepts Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A diffraction grating has 600 lines/mm. The slit spacing $d$ is:',
            options: [
              '$6.0 \\times 10^{-4}$ m',
              '$1.67 \\times 10^{-6}$ m',
              '$6.0 \\times 10^{-7}$ m',
              '$1.67 \\times 10^{-3}$ m'
            ],
            correctAnswer: 1,
            explanation: '$d = 1/N = 1/(600\\text{ lines/mm}) = 1/(600{,}000\\text{ lines/m}) = 1.67 \\times 10^{-6}$ m.'
          },
          {
            question: 'Compared to a double-slit pattern, a diffraction grating with 5000 slits produces maxima that are:',
            options: [
              'Broader and dimmer',
              'The same width',
              'Much sharper and brighter',
              'Shifted to different angles'
            ],
            correctAnswer: 2,
            explanation: 'More slits means the constructive interference condition must be satisfied more precisely, producing much sharper (narrower) and brighter maxima. The angles remain the same — they depend only on $d$ and $\\lambda$.'
          }
        ]
      }
    },
    {
      id: 'id4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Grating Calculation Drill** 🧮

A diffraction grating has 800 lines/mm. Monochromatic light of $\\lambda = 550$ nm is incident on it.

1) Slit spacing $d$ (in μm)
2) Angle of the 1st-order maximum (in degrees, to 3 significant figures)
3) Maximum observable order $m_{\\max}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.25', '26.1', '2', '1.250', '26.10'],
        hint1: '$d = 1/(800\\text{ lines/mm}) = 1/800$ mm.',
        hint2: '$\\sin\\theta = m\\lambda / d = (1)(550 \\times 10^{-9})/(1.25 \\times 10^{-6})$.',
        hint3: '$m_{\\max} = \\lfloor d / \\lambda \\rfloor = \\lfloor 1250/550 \\rfloor$.',
        explanation: '$d = 1.25\\;\\mu$m. $\\sin\\theta_1 = 550/1250 = 0.44$, $\\theta_1 = 26.1°$. $m_{\\max} = \\lfloor 1250/550 \\rfloor = \\lfloor 2.27 \\rfloor = 2$.'
      }
    },
    {
      id: 'id4-resolving-drill',
      type: 'input-boxes' as const,
      content: `
**Resolving Power Drill** 🔬

A grating has 5000 total slits.

1) What is the resolving power in the 2nd order?
2) In the 2nd order, what is the minimum wavelength difference $\\Delta\\lambda$ that can be resolved near $\\lambda = 589$ nm? (in nm, to 3 significant figures)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['10000', '0.06', '0.060'],
        hint1: '$R = mN = (2)(5000)$.',
        hint2: '$\\Delta\\lambda = \\lambda / R = 589 / 10000$.',
        explanation: '$R = mN = 2 \\times 5000 = 10{,}000$. $\\Delta\\lambda = 589/10{,}000 = 0.0589 \\approx 0.06$ nm. This grating can resolve the sodium doublet (589.0 nm and 589.6 nm) in 2nd order.'
      }
    },
    {
      id: 'id4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Diffraction Gratings** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'When white light passes through a diffraction grating, the $m = 1$ spectrum appears with:',
            options: [
              'Red closest to center, violet farthest',
              'Violet closest to center, red farthest',
              'All colors at the same angle',
              'No colors — only white light'
            ],
            correctAnswer: 1,
            explanation: '$\\sin\\theta = m\\lambda/d$. Longer wavelength → larger angle. So violet (short λ) is closest to center and red (long λ) is farthest.'
          },
          {
            question: 'To increase the resolving power of a diffraction grating, you should:',
            options: [
              'Use fewer slits',
              'Use a lower order',
              'Increase either $m$ or $N$ (or both)',
              'Decrease the slit spacing'
            ],
            correctAnswer: 2,
            explanation: '$R = mN$. Resolving power increases with more slits $N$ and higher order $m$.'
          }
        ]
      }
    }
  ]
}
