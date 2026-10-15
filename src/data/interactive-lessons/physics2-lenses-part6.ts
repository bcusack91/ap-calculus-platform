export const physics2LensesPart6Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln6-intro',
      type: 'text' as const,
      content: `
# 🔬 Experimental Design: Finding a Focal Length

**Part 6 of 7 — Measuring, Graphing, and Uncertainty**

The lab question on the AP Physics 2 exam asks you to design a procedure, choose what to graph, and pull a physical quantity out of the graph. For lenses, the classic task is finding an unknown focal length from object and image distances. In this part you will plan the measurements, linearize the thin-lens equation, and reduce experimental uncertainty.
      `
    },
    {
      id: 'ln6-procedure',
      type: 'text' as const,
      content: `
## The Procedure

### Equipment
A bright object (such as an illuminated arrow), the converging lens, a white screen, and a meterstick or optical bench.

### Steps
1. Place the object a measured distance $s_o$ from the lens, with $s_o$ greater than the focal length so the image is real.
2. Move the screen until the image is as sharp as possible, then measure $s_i$ from the lens to the screen.
3. Repeat for several object distances spread over a wide range.

### Why a Screen Works Only for Real Images
A screen shows an image only where light rays actually meet. Real images form where the refracted rays converge, so they appear on the screen. A virtual image is where rays only *appear* to come from, so no screen position will show it. This is also why the method needs a converging lens with the object outside $f$: a diverging lens never forms a real image of a real object.

### A Quick Estimate
For a very distant object, $\\frac{1}{s_o} \\approx 0$, so $s_i \\approx f$. Focusing the image of a far-away window onto the screen gives a rough value of $f$ to check your graph against.
      `
    },
    {
      id: 'ln6-linearizing',
      type: 'text' as const,
      content: `
## Linearizing the Thin-Lens Equation

A graph of $s_i$ versus $s_o$ is a curve, and a curve is hard to read a constant from. Rearrange the thin-lens equation into straight-line form $y = mx + b$:

$$\\frac{1}{s_i} = -\\frac{1}{s_o} + \\frac{1}{f}$$

Plot $y = \\frac{1}{s_i}$ against $x = \\frac{1}{s_o}$:
- **Slope** $= -1$ (a built-in check on your data)
- **Vertical intercept** $= \\frac{1}{f}$, and the horizontal intercept is also $\\frac{1}{f}$

### Example Data

| $s_o$ (cm) | 15 | 20 | 30 | 40 | 60 |
|-----------|----|----|----|----|----|
| $s_i$ (cm) | 30.0 | 20.0 | 15.0 | 13.3 | 12.0 |
| $1/s_o$ (cm$^{-1}$) | 0.067 | 0.050 | 0.033 | 0.025 | 0.017 |
| $1/s_i$ (cm$^{-1}$) | 0.033 | 0.050 | 0.067 | 0.075 | 0.083 |

The best-fit line has slope $-1.0$ and vertical intercept $0.100$ cm$^{-1}$, so $f = \\frac{1}{0.100} = 10$ cm.

### Another Straight-Line Choice
Multiplying the thin-lens equation by $s_i$ gives $\\frac{s_i}{s_o} = \\frac{1}{f}s_i - 1$. Since the size of the magnification is $\\frac{s_i}{s_o}$, a graph of magnification versus $s_i$ is a straight line with slope $\\frac{1}{f}$ and vertical intercept $-1$.
      `
    },
    {
      id: 'ln6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Lab Design Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Why do students graph $1/s_i$ versus $1/s_o$ instead of $s_i$ versus $s_o$ to find a focal length?',
            options: [
              'The reciprocals have smaller uncertainties than the distances',
              'The reciprocal graph is a straight line whose intercept gives $1/f$',
              'The distance graph would need a diverging lens to make sense',
              'The reciprocal graph passes through the origin with slope $f$'
            ],
            correctAnswer: 1,
            explanation: 'The thin-lens equation is linear in the reciprocals, so that graph is a straight line with slope $-1$ and intercept $1/f$. It does not pass through the origin, taking reciprocals does not shrink the uncertainty, and the curved $s_i$ versus $s_o$ graph still describes a converging lens.'
          },
          {
            question: 'A best-fit line on a graph of $1/s_i$ (vertical) versus $1/s_o$ (horizontal) has a vertical intercept of $0.050$ cm$^{-1}$. The focal length of the lens is:',
            options: [
              '0.050 cm',
              '5.0 cm',
              '20 cm',
              '50 cm'
            ],
            correctAnswer: 2,
            explanation: 'The intercept equals $1/f$, so $f = 1/0.050 = 20$ cm. Reading the intercept as $f$ gives 0.050 cm, and 5.0 cm and 50 cm misplace the decimal point when inverting.'
          }
        ]
      }
    },
    {
      id: 'ln6-uncertainty',
      type: 'text' as const,
      content: `
## Reducing Uncertainty

| Source of uncertainty | How to reduce it |
|----------------------|------------------|
| Judging the sharpest image | Approach the sharp position from both sides and average the two screen positions |
| Measuring from the wrong point on the lens | Measure both distances from the center (midline) of the lens |
| Too few or bunched-up data points | Take many trials over a wide range of $s_o$ |
| Random scatter | Repeat each trial and use the slope and intercept of a best-fit line |

### Checking the Result
- The slope of the $1/s_i$ versus $1/s_o$ graph should be close to $-1$. A slope far from $-1$ signals a systematic error, such as measuring from the edge of the lens holder instead of the lens.
- The value of $f$ from the graph should agree with the distant-object estimate.

### Making a Claim
A complete lab answer states the claim ($f = 10$ cm), the evidence (the intercept of the best-fit line), and the reasoning (the intercept equals $1/f$ because of the thin-lens equation).
      `
    },
    {
      id: 'ln6-dropdown-drill',
      type: 'dropdown-select' as const,
      content: `
**Lab Analysis Check** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find $f$ with a screen, the object must be placed',
            options: ['outside the focal length', 'inside the focal length', 'exactly at the focal point', 'anywhere on the axis']
          },
          {
            label: 'The slope of a graph of $1/s_i$ versus $1/s_o$ should be',
            options: ['+1', '−1', 'f', '1/f']
          },
          {
            label: 'The vertical intercept of that graph equals',
            options: ['f', '1/f', '−1', 'zero']
          },
          {
            label: 'For a very distant object, the image distance is approximately',
            options: ['zero', 'the focal length', 'twice the focal length', 'infinite']
          }
        ],
        correctAnswers: ['outside the focal length', '−1', '1/f', 'the focal length'],
        hint1: 'Only real images appear on a screen, and a converging lens forms real images only when $s_o > f$.',
        hint2: 'Rearrange: $\\frac{1}{s_i} = -\\frac{1}{s_o} + \\frac{1}{f}$.',
        hint3: 'Set $\\frac{1}{s_o} = 0$ in the rearranged equation.',
        hint4: 'A distant object has $\\frac{1}{s_o} \\approx 0$.',
        explanation: 'Real images need $s_o > f$. The linearized thin-lens equation has slope $-1$ and intercept $1/f$, and a distant object focuses at about $s_i = f$.'
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
            question: 'With an object 30 cm from a lens, a student finds the sharpest image on a screen 15 cm behind the lens. The focal length is:',
            options: [
              '10 cm',
              '15 cm',
              '30 cm',
              '45 cm'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{f} = \\frac{1}{30} + \\frac{1}{15} = \\frac{3}{30}$, so $f = 10$ cm. 30 cm subtracts the reciprocals, 15 cm takes the image distance as $f$, and 45 cm adds the distances.'
          },
          {
            question: 'A student repeats the screen method with a diverging lens and finds no screen position that shows an image. The best explanation is that the diverging lens:',
            options: [
              'Forms an image too dim to see on an ordinary screen',
              'Forms only virtual images of real objects',
              'Forms an image that is always beyond the screen',
              'Forms an image only when the object is inside $f$'
            ],
            correctAnswer: 1,
            explanation: 'A diverging lens spreads the rays apart, so they never meet on the far side; its images are virtual and cannot be projected at any object distance. Brightness and screen distance are not the issue.'
          }
        ]
      }
    }
  ]
}
