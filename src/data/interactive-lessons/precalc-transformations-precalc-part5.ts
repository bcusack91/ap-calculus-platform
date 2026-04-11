export const precalcTransformationsPart5Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📚 Parent Functions Gallery

**Part 5 of 7**

### The Essential Toolkit

Every function you transform begins as one of these **parent functions**.

| Function | Equation | Key Features |
|:---------|:---------|:-------------|
| Linear | $y = x$ | Slope 1, through origin |
| Quadratic | $y = x^2$ | U-shape, vertex $(0,0)$ |
| Cubic | $y = x^3$ | S-shape, inflection at origin |
| Square Root | $y = \\sqrt{x}$ | Half-parabola, $x \\geq 0$ |
| Cube Root | $y = \\sqrt[3]{x}$ | S-shape, all reals |
| Absolute Value | $y = |x|$ | V-shape, vertex $(0,0)$ |
| Reciprocal | $y = 1/x$ | Hyperbola, asymptotes at axes |
| Exponential | $y = 2^x$ | Growth, asymptote $y=0$ |
| Logarithmic | $y = \\log x$ | Slow growth, $x > 0$ |
| Sine | $y = \\sin x$ | Period $2\\pi$, range $[-1,1]$ |
| Cosine | $y = \\cos x$ | Period $2\\pi$, range $[-1,1]$ |
| Tangent | $y = \\tan x$ | Period $\\pi$, vertical asymptotes |
      `
    },
    {
      id: 'p5-power',
      type: 'text' as const,
      content: `
## 🔢 Power & Root Functions

### Even Powers: $y = x^2, x^4, x^6, ...$

- Symmetric about $y$-axis (even functions)
- Shape: U gets flatter near origin, steeper away
- Higher power → more "rectangular"

### Odd Powers: $y = x^3, x^5, x^7, ...$

- Symmetric about origin (odd functions)
- Shape: S-curve through origin
- Higher power → flatter near 0, steeper far away

### Root Functions

$$y = x^{1/n}$$

- Even roots ($\\sqrt{x}, \\sqrt[4]{x}$): domain $x \\geq 0$
- Odd roots ($\\sqrt[3]{x}, \\sqrt[5]{x}$): domain all reals
- Inverse of corresponding power function

### Key Relationship

$y = x^n$ and $y = x^{1/n}$ (same parity) are **inverse functions** — they reflect across $y = x$.
      `
    },
    {
      id: 'p5-special',
      type: 'text' as const,
      content: `
## ⭐ Special Functions

### Greatest Integer (Floor) Function

$$y = \\lfloor x \\rfloor$$

- Step function: jumps at every integer
- $\\lfloor 2.7 \\rfloor = 2$, $\\lfloor -1.3 \\rfloor = -2$
- Used in pricing (round down), computer science

### Piecewise-Defined Functions

$$f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x+1 & x \\geq 0 \\end{cases}$$

- Different rules for different intervals
- Check continuity at boundary points

### Logistic Function

$$y = \\frac{L}{1 + e^{-k(x-x_0)}}$$

- S-shaped (sigmoid)
- Models population growth, learning curves
- Horizontal asymptotes at $y=0$ and $y=L$

**Recognizing parent functions is the FIRST step** in any transformation problem!
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Parent Function Recognition** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which parent function has domain $[0, \\infty)$ and range $[0, \\infty)$?',
            options: ['$y = x^2$', '$y = \\sqrt{x}$', '$y = |x|$', '$y = 1/x$'],
            correctAnswer: 1,
            explanation: '$y=\\sqrt{x}$: domain $[0,\\infty)$, range $[0,\\infty)$. $y=x^2$ has domain $(-\\infty,\\infty)$.'
          },
          {
            question: 'Which parent function has two asymptotes?',
            options: ['$y = \\log x$', '$y = 2^x$', '$y = 1/x$', '$y = \\tan x$'],
            correctAnswer: 2,
            explanation: '$y = 1/x$ has asymptotes $x=0$ (vertical) and $y=0$ (horizontal).'
          },
          {
            question: 'Which function is both even AND has range $[0, \\infty)$?',
            options: ['$y = x^3$', '$y = x^2$', '$y = |x|$', 'Both B and C'],
            correctAnswer: 3,
            explanation: '$y=x^2$ and $y=|x|$ are both even and have range $[0,\\infty)$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Parent Function Properties** 🧮

**1)** $y = x^3$: $f(-2)$ = ?

**2)** $y = |x|$: $f(-5)$ = ?

**3)** $y = 2^x$: $f(3)$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-8', '5', '8'],
        hint1: '$(-2)^3 = -8$.',
        hint2: '$|-5| = 5$.',
        hint3: '$2^3 = 8$.',
        explanation: '1) $-8$. 2) $5$. 3) $8$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Parent Functions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'V-shaped graph:',
            options: ['$y = x^2$', '$y = |x|$', '$y = 1/x$', '$y = \\sqrt{x}$'],
            correctAnswer: 1
          },
          {
            label: 'Horizontal asymptote at $y = 0$, passes through $(0,1)$:',
            options: ['$y = 2^x$', '$y = \\log x$', '$y = 1/x$', '$y = x^2$'],
            correctAnswer: 0
          },
          {
            label: 'Vertical asymptote at $x = 0$, passes through $(1,0)$:',
            options: ['$y = \\log x$', '$y = \\sqrt{x}$', '$y = 2^x$', '$y = |x|$'],
            correctAnswer: 0
          },
          {
            label: 'Period of $\\pi$:',
            options: ['$y = \\sin x$', '$y = \\cos x$', '$y = \\tan x$', '$y = 2^x$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$y = |x|$', '$y = 2^x$', '$y = \\log x$', '$y = \\tan x$'],
        hint1: 'V-shape = absolute value.',
        hint2: '$2^0 = 1$ and $y \\to 0$ as $x \\to -\\infty$.',
        hint3: '$\\log 1 = 0$ and $x > 0$.',
        explanation: 'V: absolute value. $(0,1)$ with HA $y=0$: exponential. VA $x=0$ + $(1,0)$: log. Period $\\pi$: tangent.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of $y = -\\sqrt[3]{x-2}+4$ uses which parent function?',
            options: ['Square root', 'Cube root', 'Cubic', 'Absolute value'],
            correctAnswer: 1,
            explanation: 'The parent is $y = \\sqrt[3]{x}$, then reflected, shifted right 2, up 4.'
          },
          {
            question: 'Which parent function passes through all four quadrants?',
            options: ['$y = x^2$', '$y = |x|$', '$y = x^3$', '$y = \\sqrt{x}$'],
            correctAnswer: 2,
            explanation: '$y=x^3$: negative outputs for negative inputs, positive for positive → quadrants I and III.'
          }
        ]
      }
    }
  ]
};
