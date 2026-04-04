export const physics2InterferencePart2Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id2-intro',
      type: 'text' as const,
      content: `
# 🔦 Young's Double-Slit Experiment

**Part 2 of 7 — The Experiment That Proved Light Is a Wave**

In 1801, Thomas Young performed the most famous experiment in optics. By shining light through two narrow slits, he produced an interference pattern that could only be explained if light is a wave.
      `
    },
    {
      id: 'id2-setup',
      type: 'text' as const,
      content: `
## The Double-Slit Setup

### Geometry
- Two narrow slits separated by distance $d$
- A screen at distance $L$ from the slits ($L \\gg d$)
- Monochromatic light of wavelength $\\lambda$

### The Key Equations

**Bright fringes** (constructive interference) occur when:
$$d \\sin\\theta = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)$$

**Dark fringes** (destructive interference) occur when:
$$d \\sin\\theta = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)$$

where $\\theta$ is the angle from the central axis to the point on the screen.

### The Small-Angle Approximation

When $\\theta$ is small (fringes near the center), $\\sin\\theta \\approx \\tan\\theta = y/L$, so:

$$d \\cdot \\frac{y}{L} = m\\lambda \\implies y_m = \\frac{m\\lambda L}{d}$$

This gives the **position of the $m$-th bright fringe** on the screen.
      `
    },
    {
      id: 'id2-fringe-spacing',
      type: 'text' as const,
      content: `
## Fringe Spacing

The distance between consecutive bright fringes is called the **fringe spacing**:

$$\\Delta y = \\frac{\\lambda L}{d}$$

### What Affects Fringe Spacing?

| Change | Effect on $\\Delta y$ |
|--------|---------------------|
| Increase $\\lambda$ (longer wavelength, e.g. red → more red) | Fringes spread apart |
| Increase $L$ (move screen farther) | Fringes spread apart |
| Increase $d$ (slits farther apart) | Fringes get closer together |

### Intensity Pattern

The intensity at angle $\\theta$ is:

$$I = 4I_0 \\cos^2\\left(\\frac{\\pi d \\sin\\theta}{\\lambda}\\right)$$

This produces equally spaced bright and dark fringes — the hallmark of double-slit interference.

### Order Number $m$

- $m = 0$: **central maximum** (always the brightest, at the center)
- $m = \\pm 1$: first-order maxima
- $m = \\pm 2$: second-order maxima
- Higher orders exist until $\\sin\\theta > 1$ (impossible), so $m_{\\max} = \\lfloor d/\\lambda \\rfloor$
      `
    },
    {
      id: 'id2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Double-Slit Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Young\'s double-slit experiment, if the slit separation $d$ is doubled while everything else stays the same, the fringe spacing:',
            options: [
              'Doubles',
              'Halves',
              'Stays the same',
              'Quadruples'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta y = \\lambda L / d$. Doubling $d$ halves the fringe spacing. The fringes get closer together.'
          },
          {
            question: 'The central maximum ($m = 0$) in the double-slit pattern is located where:',
            options: [
              'The path difference is λ',
              'The path difference is λ/2',
              'The path difference is zero',
              'The path difference is 2λ'
            ],
            correctAnswer: 2,
            explanation: 'At $m = 0$, $d\\sin\\theta = 0$, so $\\theta = 0$. Both waves travel the same distance — path difference is zero — giving constructive interference at the center.'
          },
          {
            question: 'If white light is used instead of monochromatic light, the double-slit pattern shows:',
            options: [
              'Only bright and dark fringes as usual',
              'The central maximum is white, with colored fringes on either side',
              'No interference pattern at all',
              'Only red fringes appear'
            ],
            correctAnswer: 1,
            explanation: 'Each wavelength produces its own fringe pattern with different spacing ($\\Delta y \\propto \\lambda$). At $m = 0$, all colors constructively interfere → white. Away from center, the colors separate, with red (longer λ) fringes farther out than violet.'
          }
        ]
      }
    },
    {
      id: 'id2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Double-Slit Calculation Drill** 🧮

A double-slit experiment uses $\\lambda = 550$ nm, slit separation $d = 0.25$ mm, and screen distance $L = 2.0$ m.

1) Fringe spacing $\\Delta y$ (in mm)
2) Position of the 3rd bright fringe from center (in mm)
3) Position of the 1st dark fringe from center (in mm)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.4', '13.2', '2.2'],
        hint1: '$\\Delta y = \\lambda L / d = (550 \\times 10^{-9})(2.0)/(0.25 \\times 10^{-3})$.',
        hint2: '$y_3 = 3\\lambda L / d = 3 \\times \\Delta y$.',
        hint3: 'First dark fringe: $y = (0 + \\frac{1}{2})\\lambda L / d = \\frac{1}{2} \\Delta y$.',
        explanation: '$\\Delta y = (550 \\times 10^{-9})(2.0)/(0.25 \\times 10^{-3}) = 4.4 \\times 10^{-3}$ m = 4.4 mm. Third bright: $y_3 = 3(4.4) = 13.2$ mm. First dark: $y = 0.5(4.4) = 2.2$ mm.'
      }
    },
    {
      id: 'id2-advanced-drill',
      type: 'input-boxes' as const,
      content: `
**Advanced Double-Slit Problems** 🔬

1) Light of wavelength 480 nm passes through two slits 0.20 mm apart. A screen is 1.5 m away. What is the distance from the central maximum to the 2nd dark fringe? (in mm)

2) In a double-slit experiment, the 5th bright fringe is located 15 mm from the central maximum. The screen is 2.0 m away and $\\lambda = 600$ nm. What is the slit separation $d$? (in mm)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['5.4', '0.40'],
        hint1: '2nd dark fringe: $m = 1$, so $y = (1 + \\frac{1}{2})\\lambda L / d = 1.5 \\lambda L / d$.',
        hint2: '$y_5 = 5\\lambda L / d \\implies d = 5\\lambda L / y_5$.',
        explanation: '1) $y = 1.5(480 \\times 10^{-9})(1.5)/(0.20 \\times 10^{-3}) = 5.4 \\times 10^{-3}$ m = 5.4 mm. 2) $d = 5(600 \\times 10^{-9})(2.0)/(15 \\times 10^{-3}) = 4.0 \\times 10^{-4}$ m = 0.40 mm.'
      }
    },
    {
      id: 'id2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Double-Slit Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In a double-slit experiment with $d = 0.10$ mm and $\\lambda = 500$ nm, what is the maximum order $m$ of bright fringes that can be observed?',
            options: [
              '100',
              '200',
              '500',
              '1000'
            ],
            correctAnswer: 1,
            explanation: '$m_{\\max} = d/\\lambda = (0.10 \\times 10^{-3})/(500 \\times 10^{-9}) = 200$. For $m > 200$, $\\sin\\theta > 1$, which is impossible.'
          },
          {
            question: 'Moving the double-slit screen closer to the slits will:',
            options: [
              'Increase fringe spacing',
              'Decrease fringe spacing',
              'Have no effect on fringe spacing',
              'Eliminate the interference pattern'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta y = \\lambda L / d$. Reducing $L$ reduces $\\Delta y$ — the fringes get closer together.'
          }
        ]
      }
    }
  ]
}
