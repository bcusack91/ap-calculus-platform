export const physics2LensesPart7Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln7-intro',
      type: 'text' as const,
      content: `
# 🎯 Lenses — Synthesis & AP Review

**Part 7 of 7 — Complete Lens Mastery**

This final part ties together everything about lenses: the thin lens equation, sign conventions, ray diagrams, multi-lens systems, and corrective optics. Master these concepts and you're ready for the AP exam.
      `
    },
    {
      id: 'ln7-concept-map',
      type: 'text' as const,
      content: `
## Complete Lens Concept Map

### The Core Equations

| Equation | Purpose |
|:---:|:---:|
| $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$ | Thin lens equation — relates focal length, object distance, and image distance |
| $m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$ | Magnification — relates distances and heights |
| $P = \\frac{1}{f}$ | Lens power in diopters ($f$ in meters) |
| $m_{\\text{total}} = m_1 \\times m_2$ | Total magnification for multi-lens systems |

### Sign Convention Summary

| Quantity | Positive | Negative |
|:---:|:---:|:---:|
| $f$ | Converging | Diverging |
| $d_o$ | Real object | Virtual object |
| $d_i$ | Real image (opposite side) | Virtual image (same side) |
| $m$ | Upright | Inverted |
| $h_i$ | Upright | Inverted |

### Top 5 AP Mistakes with Lenses

| # | Mistake | Correction |
|:---:|:---:|:---:|
| 1 | Forgetting the negative sign in $m = -d_i/d_o$ | The minus sign is essential — it's what makes real images inverted |
| 2 | Using positive $f$ for diverging lenses | Diverging → $f < 0$, always |
| 3 | Saying diverging lenses make real images | Diverging lenses always make virtual images (for real objects) |
| 4 | Confusing $d_i < 0$ with "no image" | $d_i < 0$ means a virtual image exists on the same side as the object |
| 5 | Forgetting to convert $f$ to meters for diopters | $P = 1/f$ requires $f$ in meters |
      `
    },
    {
      id: 'ln7-mixed-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An object is 15 cm from a converging lens with $f = 10$ cm. The image is:',
            options: [
              'Real, inverted, reduced',
              'Real, inverted, enlarged',
              'Virtual, upright, enlarged',
              'Real, inverted, same size'
            ],
            correctAnswer: 1,
            explanation: '$d_o = 15$ cm is between $f = 10$ and $2f = 20$ (Case 3). $\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3-2}{30} = \\frac{1}{30}$, so $d_i = 30$ cm. $m = -30/15 = -2$ → real, inverted, enlarged.'
          },
          {
            question: 'A diverging lens with $f = -20$ cm has an object at $d_o = 60$ cm. The magnification is:',
            options: [
              '$+0.25$',
              '$-0.25$',
              '$+4.0$',
              '$-4.0$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{d_i} = \\frac{1}{-20} - \\frac{1}{60} = \\frac{-3-1}{60} = \\frac{-4}{60} = -\\frac{1}{15}$, so $d_i = -15$ cm. $m = -(-15)/60 = +0.25$. Positive → upright, $|m| < 1$ → reduced.'
          },
          {
            question: 'A person with myopia wears glasses with $P = -2.0$ D. The focal length of each lens is:',
            options: [
              '$+0.50$ m',
              '$-0.50$ m',
              '$+2.0$ m',
              '$-2.0$ m'
            ],
            correctAnswer: 1,
            explanation: '$f = 1/P = 1/(-2.0) = -0.50$ m. Negative → diverging lens, which is correct for myopia.'
          },
          {
            question: 'Two thin lenses ($f_1 = +20$ cm, $f_2 = +10$ cm) are in contact. The combined focal length is:',
            options: [
              '$+6.67$ cm',
              '$+15$ cm',
              '$+30$ cm',
              '$+200$ cm'
            ],
            correctAnswer: 0,
            explanation: 'For lenses in contact: $\\frac{1}{f_{\\text{combo}}} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{20} + \\frac{1}{10} = \\frac{1+2}{20} = \\frac{3}{20}$, so $f_{\\text{combo}} = 20/3 \\approx 6.67$ cm.'
          }
        ]
      }
    },
    {
      id: 'ln7-input-drill',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculation Drill** 🧮

A 4.0 cm tall object is placed 24 cm from a converging lens with $f = 8.0$ cm.

1) Image distance $d_i$ (in cm)
2) Magnification $m$
3) Image height $h_i$ (in cm, negative if inverted)
4) Is the image real or virtual? (enter "real" or "virtual")
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['12', '-0.5', '-2', 'real'],
        hint1: '$\\frac{1}{d_i} = \\frac{1}{8} - \\frac{1}{24} = \\frac{3-1}{24} = \\frac{2}{24} = \\frac{1}{12}$.',
        hint2: '$m = -d_i/d_o = -12/24$.',
        hint3: '$h_i = m \\times h_o = (-0.5)(4.0)$. Since $d_i > 0$, the image is real.',
        explanation: '$d_i = 12$ cm (positive → real). $m = -12/24 = -0.5$ (inverted, reduced). $h_i = (-0.5)(4.0) = -2.0$ cm. The object is at $d_o = 24 = 3f > 2f$, so this is Case 1: real, inverted, reduced.'
      }
    },
    {
      id: 'ln7-dropdown-drill',
      type: 'dropdown-select' as const,
      content: `
**Sign Convention Mastery** 🎯

Determine the sign of each quantity:
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Focal length of a diverging lens',
            options: ['Positive', 'Negative']
          },
          {
            label: 'Image distance for a virtual image',
            options: ['Positive', 'Negative']
          },
          {
            label: 'Magnification of an inverted image',
            options: ['Positive', 'Negative']
          },
          {
            label: 'Image distance when object is at $d_o = 2f$ (converging lens)',
            options: ['Positive', 'Negative']
          },
          {
            label: 'Magnification when object is inside $f$ (converging lens)',
            options: ['Positive', 'Negative']
          },
          {
            label: 'Power of a lens that corrects myopia',
            options: ['Positive', 'Negative']
          }
        ],
        correctAnswers: [
          'Negative',
          'Negative',
          'Negative',
          'Positive',
          'Positive',
          'Negative'
        ],
        hint1: 'Diverging → $f < 0$. Virtual image → $d_i < 0$.',
        hint2: 'Inverted → $m < 0$. At $d_o = 2f$, $d_i = 2f > 0$ (real image).',
        hint3: 'Inside $f$: virtual image, $d_i < 0$, so $m = -d_i/d_o > 0$ (upright). Myopia correction → diverging lens → $P < 0$.',
        explanation: 'Diverging: $f < 0$. Virtual: $d_i < 0$. Inverted: $m < 0$. At $2f$: real image so $d_i > 0$. Inside $f$: virtual and upright so $m > 0$. Myopia → diverging → $P < 0$.'
      }
    },
    {
      id: 'ln7-frq-preview',
      type: 'text' as const,
      content: `
## AP FRQ Preview

### Typical Lens FRQ Structure

**Part (a)**: Draw a ray diagram showing two principal rays for the given lens and object position. Label the image.

**Part (b)**: Use the thin lens equation to calculate $d_i$ and $m$. State whether the image is real or virtual, upright or inverted, enlarged or reduced.

**Part (c)**: A second lens is placed at a specified distance. Find the final image position and total magnification.

**Part (d)**: Explain a real-world application (microscope, telescope, corrective lens) using your results.

### Strategy Tips

1. **Always state sign conventions** at the start of your solution
2. **Show all algebra** — don't skip steps in the thin lens equation
3. **Check your answer** against the ray diagram — they must agree
4. **State the image characteristics** explicitly: real/virtual, upright/inverted, enlarged/reduced
5. **Watch units** — if the problem gives cm, work in cm; convert to meters only for diopters
      `
    },
    {
      id: 'ln7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'An object is placed at the focal point of a converging lens. The image forms:',
            options: [
              'At $2f$ on the far side',
              'At $f$ on the far side',
              'At infinity',
              'At the lens center'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{f} = 0$, so $d_i \\to \\infty$. The refracted rays emerge parallel and never converge to a finite image.'
          },
          {
            question: 'A magnifying glass works because the object is placed:',
            options: [
              'Beyond $2f$',
              'At $2f$',
              'Between $f$ and $2f$',
              'Inside $f$'
            ],
            correctAnswer: 3,
            explanation: 'A magnifying glass is a converging lens with the object inside the focal length (Case 5). This produces a virtual, upright, enlarged image — exactly what you see when using a magnifying glass.'
          },
          {
            question: 'A lens has $f = +25$ cm. An object at $d_o = 50$ cm produces an image with $m = -1$. If the object moves to $d_o = 30$ cm, the image becomes:',
            options: [
              'Smaller and closer to the lens',
              'Larger and farther from the lens',
              'The same size',
              'Virtual'
            ],
            correctAnswer: 1,
            explanation: 'Moving from $d_o = 50 = 2f$ to $d_o = 30$ cm (between $f$ and $2f$) transitions from Case 2 to Case 3. The image becomes real, inverted, and **enlarged** ($|m| > 1$), and it moves farther from the lens. $\\frac{1}{d_i} = \\frac{1}{25} - \\frac{1}{30} = \\frac{6-5}{150} = \\frac{1}{150}$, so $d_i = 150$ cm. $m = -150/30 = -5$.'
          },
          {
            question: 'Which combination correctly fixes hyperopia?',
            options: [
              'Concave lens with $P < 0$',
              'Convex lens with $P > 0$',
              'Concave lens with $P > 0$',
              'Convex lens with $P < 0$'
            ],
            correctAnswer: 1,
            explanation: 'Hyperopia (farsightedness) is corrected with a converging (convex) lens, which has positive power ($P > 0$). The lens adds convergence so the image focuses on the retina instead of behind it.'
          }
        ]
      }
    }
  ]
}
