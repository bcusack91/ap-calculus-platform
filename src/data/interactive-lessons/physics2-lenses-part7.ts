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
| $h_i = m h_o$ | Image height (negative means inverted) |

### Sign Convention Summary

| Quantity | Positive | Negative |
|:---:|:---:|:---:|
| $f$ | Converging | Diverging |
| $d_o$ | Real object | Not used for a single lens |
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
| 5 | Reading the intercept of a $1/d_i$ versus $1/d_o$ graph as $f$ | The intercept is $1/f$; invert it to get $f$ |
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
            question: 'An object 15 cm from a lens forms a real image 30 cm from the lens. The focal length of the lens is:',
            options: [
              '10 cm',
              '15 cm',
              '30 cm',
              '45 cm'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{f} = \\frac{1}{15} + \\frac{1}{30} = \\frac{3}{30}$, so $f = 10$ cm, a converging lens. Subtracting the reciprocals gives 30 cm, 45 cm adds the two distances, and 15 cm takes the object distance as $f$.'
          },
          {
            question: 'A converging lens forms a sharp image on a screen. An opaque card is then placed over the top half of the lens. The image on the screen:',
            options: [
              'Loses its top half but keeps its brightness',
              'Loses its bottom half but keeps its brightness',
              'Stays complete but becomes dimmer',
              'Disappears because the rays are blocked'
            ],
            correctAnswer: 2,
            explanation: 'Every point on the object sends rays through every part of the lens, so the uncovered half still brings rays from every object point to their image points. Half as much light arrives, so the whole image remains but is dimmer.'
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

*Round all answers to 3 significant figures.*
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
            label: 'Image distance for an image that appears on a screen',
            options: ['Positive', 'Negative']
          }
        ],
        correctAnswers: [
          'Negative',
          'Negative',
          'Negative',
          'Positive',
          'Positive',
          'Positive'
        ],
        hint1: 'Diverging → $f < 0$. Virtual image → $d_i < 0$.',
        hint2: 'Inverted → $m < 0$. At $d_o = 2f$, $d_i = 2f > 0$ (real image).',
        hint3: 'Inside $f$: virtual image, $d_i < 0$, so $m = -d_i/d_o > 0$ (upright). An image on a screen is real, so $d_i > 0$.',
        explanation: 'Diverging: $f < 0$. Virtual: $d_i < 0$. Inverted: $m < 0$. At $2f$: real image so $d_i > 0$. Inside $f$: virtual and upright so $m > 0$. Screen image: real, so $d_i > 0$.'
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

**Part (c)**: Lab design: describe how to measure object and image distances and what to graph to find $f$ (for example, $1/d_i$ versus $1/d_o$, with intercept $1/f$).

**Part (d)**: Predict how the image changes when the object moves or the lens is swapped, and justify the prediction with the thin-lens equation or a ray diagram.

### Strategy Tips

1. **Always state sign conventions** at the start of your solution
2. **Show all algebra** — don't skip steps in the thin lens equation
3. **Check your answer** against the ray diagram — they must agree
4. **State the image characteristics** explicitly: real/virtual, upright/inverted, enlarged/reduced
5. **Watch units** — if the problem gives cm, work in cm; keep every distance in the same unit
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
              'Exactly at $2f$',
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
              'Larger but closer to the lens',
              'Virtual, upright, and larger'
            ],
            correctAnswer: 1,
            explanation: 'Moving from $d_o = 50 = 2f$ to $d_o = 30$ cm (between $f$ and $2f$) transitions from Case 2 to Case 3. The image stays real and inverted but becomes **enlarged** ($|m| > 1$), and it moves farther from the lens. $\\frac{1}{d_i} = \\frac{1}{25} - \\frac{1}{30} = \\frac{6-5}{150} = \\frac{1}{150}$, so $d_i = 150$ cm. $m = -150/30 = -5$. The image would only turn virtual if the object moved inside $f = 25$ cm.'
          },
          {
            question: 'Looking through a lens at an object 12 cm away, a student sees an upright image three times the object\'s height. What are the lens type and focal length?',
            options: [
              '$f = +9.0$ cm, a converging lens',
              '$f = +18$ cm, a converging lens',
              '$f = -18$ cm, a diverging lens',
              '$f = -9.0$ cm, a diverging lens'
            ],
            correctAnswer: 1,
            explanation: 'Upright means virtual, so $m = +3$ and $d_i = -36$ cm. Then $\\frac{1}{f} = \\frac{1}{12} - \\frac{1}{36} = \\frac{2}{36}$, giving $f = +18$ cm, a converging lens. $+9.0$ cm treats the image as real, and a diverging lens cannot enlarge.'
          }
        ]
      }
    }
  ]
}
