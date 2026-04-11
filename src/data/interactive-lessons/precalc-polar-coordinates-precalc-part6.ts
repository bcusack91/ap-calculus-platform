export const precalcPolarPart6Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🪐 Conic Sections in Polar Form

**Part 6 of 7**

### The Focus-Directrix Form

Any conic section (ellipse, parabola, hyperbola) with one focus at the origin can be written:

$$r = \\frac{ed}{1 \\pm e\\cos\\theta} \\quad \\text{or} \\quad r = \\frac{ed}{1 \\pm e\\sin\\theta}$$

where:
- **$e$** = eccentricity (determines shape)
- **$d$** = distance from focus to directrix

### Classification by Eccentricity

| Eccentricity | Conic Type |
|:-------------|:-----------|
| $e = 0$ | Circle |
| $0 < e < 1$ | Ellipse |
| $e = 1$ | Parabola |
| $e > 1$ | Hyperbola |

### Orientation

- $1 + e\\cos\\theta$: directrix to the **right** of focus
- $1 - e\\cos\\theta$: directrix to the **left** of focus
- $1 + e\\sin\\theta$: directrix **above** focus
- $1 - e\\sin\\theta$: directrix **below** focus
      `
    },
    {
      id: 'p6-example',
      type: 'text' as const,
      content: `
## 📝 Example: Identify and Analyze $r = \\frac{6}{2 + \\cos\\theta}$

### Step 1: Standard Form

Divide numerator and denominator by 2: $r = \\frac{3}{1 + \\frac{1}{2}\\cos\\theta}$

So $e = \\frac{1}{2}$ and $ed = 3 \\implies d = 6$.

### Step 2: Classify

$e = \\frac{1}{2} < 1$ → **Ellipse**

### Step 3: Key Points

- At $\\theta = 0$: $r = \\frac{6}{2+1} = 2$ (closest to directrix)
- At $\\theta = \\pi$: $r = \\frac{6}{2-1} = 6$ (farthest)
- At $\\theta = \\frac{\\pi}{2}$: $r = \\frac{6}{2} = 3$

### Step 4: Semi-major axis

$a = \\frac{r_{\\min}+r_{\\max}}{2} = \\frac{2+6}{2} = 4$

Center is at distance $ae = 4 \\cdot \\frac{1}{2} = 2$ from the focus (origin).
      `
    },
    {
      id: 'p6-parabola',
      type: 'text' as const,
      content: `
## 🎯 Special Case: Parabola ($e = 1$)

$$r = \\frac{d}{1 + \\cos\\theta}$$

- At $\\theta = 0$: $r = \\frac{d}{2}$ (vertex)
- At $\\theta = \\frac{\\pi}{2}$: $r = d$ (end of latus rectum)
- At $\\theta = \\pi$: **undefined** (approaches infinity — the curve opens left)

**Latus rectum**: The chord through the focus perpendicular to the axis has length $2d$.

### Converting to Rectangular

$r = \\frac{d}{1+\\cos\\theta} \\implies r(1+\\cos\\theta) = d \\implies r + x = d$

$\\sqrt{x^2+y^2} = d - x \\implies x^2+y^2 = d^2 - 2dx + x^2 \\implies y^2 = -2dx + d^2$

This is a parabola opening leftward!
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Conic Classification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$r = \\frac{4}{1 + 2\\sin\\theta}$ is a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 3,
            explanation: '$e = 2 > 1$, so this is a hyperbola.'
          },
          {
            question: '$r = \\frac{3}{1 - \\sin\\theta}$: the directrix is located:',
            options: ['To the right of the focus', 'To the left of the focus', 'Above the focus', 'Below the focus'],
            correctAnswer: 3,
            explanation: 'The form $1 - \\sin\\theta$ means the directrix is below the focus.'
          },
          {
            question: 'For $r = \\frac{10}{2 + 2\\cos\\theta}$ (simplified: $r = \\frac{5}{1+\\cos\\theta}$), the eccentricity is:',
            options: ['$\\frac{1}{2}$', '$1$', '$2$', '$5$'],
            correctAnswer: 1,
            explanation: 'Standard form $\\frac{5}{1+1\\cdot\\cos\\theta}$, so $e = 1$. This is a parabola.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Analyze Conics** 🧮

For $r = \\frac{12}{3 + \\cos\\theta}$:

**1)** Divide to standard form. The eccentricity $e$ = ? (Enter as a fraction like "1/3")

**2)** What is $r$ at $\\theta = 0$? (Enter a whole number)

**3)** What is $r$ at $\\theta = \\pi$? (Enter a whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/3', '3', '6'],
        hint1: '$r = \\frac{12/3}{1 + \\frac{1}{3}\\cos\\theta} = \\frac{4}{1+\\frac{1}{3}\\cos\\theta}$. So $e = \\frac{1}{3}$.',
        hint2: 'At $\\theta = 0$: $r = \\frac{12}{3+1} = \\frac{12}{4} = 3$.',
        hint3: 'At $\\theta = \\pi$: $r = \\frac{12}{3-1} = \\frac{12}{2} = 6$.',
        explanation: '1) $e = \\frac{1}{3}$ (ellipse). 2) $r(0) = 3$. 3) $r(\\pi) = 6$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conic Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An eccentricity of $e = 0.8$ gives a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 1
          },
          {
            label: 'A parabola in polar form has $r \\to \\infty$ at:',
            options: ['$\\theta = 0$', '$\\theta = \\pi$', 'Depends on form', 'Never'],
            correctAnswer: 2
          },
          {
            label: 'In $r = \\frac{ed}{1+e\\cos\\theta}$, the vertex (closest point) is at:',
            options: ['$\\theta = 0$', '$\\theta = \\pi$', '$\\theta = \\frac{\\pi}{2}$'],
            correctAnswer: 0
          },
          {
            label: 'For an ellipse with $e = \\frac{1}{2}$, $r_{\\max}/r_{\\min}$ equals:',
            options: ['$2$', '$3$', '$\\frac{3}{2}$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Ellipse', 'Depends on form', '$\\theta = 0$', '$3$'],
        hint1: '$0 < 0.8 < 1$, so ellipse.',
        hint2: 'For $1+e\\cos\\theta$: $r \\to \\infty$ at $\\theta = \\pi$; for $1-e\\cos\\theta$: at $\\theta = 0$; etc.',
        hint3: '$r_{\\min}$ at $\\theta = 0$: $r = \\frac{ed}{1+e}$. $r_{\\max}$ at $\\theta = \\pi$: $r = \\frac{ed}{1-e}$. Ratio: $\\frac{1+e}{1-e} = \\frac{3/2}{1/2} = 3$.',
        explanation: '$e = 0.8$: ellipse. Asymptotic $\\theta$ depends on the $\\pm$ form. Closest at $\\theta = 0$ for $+\\cos$ form. Ratio $= \\frac{1+e}{1-e} = 3$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which polar equation represents a circle?',
            options: ['$r = \\frac{4}{1+\\cos\\theta}$', '$r = \\frac{4}{2+\\cos\\theta}$', '$r = 4$', '$r = \\frac{4}{1+2\\cos\\theta}$'],
            correctAnswer: 2,
            explanation: '$r = 4$ is a circle of radius 4 centered at the origin. (The others are parabola, ellipse, and hyperbola.)'
          },
          {
            question: 'For $r = \\frac{6}{2-2\\sin\\theta}$, simplified to $r = \\frac{3}{1-\\sin\\theta}$, the conic is:',
            options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
            correctAnswer: 1,
            explanation: '$e = 1$, so it is a parabola opening downward (directrix below focus).'
          }
        ]
      }
    }
  ]
};
