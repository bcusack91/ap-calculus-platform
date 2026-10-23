export const precalcExamReviewPart6Data = {
  topicSlug: 'precalc-exam-review',
  sections: [
    {
      id: 'per6-intro',
      type: 'text' as const,
      content: `# 🎓 AP Precalculus Exam Review

**Part 6 of 7 — Unit 3: Inverse Trigonometry, Equations, Identities and Polar Functions**

### Inverse Trigonometric Functions (3.9)

| Function | Domain | Range | Quadrants of the output |
|:---|:---|:---|:---|
| $\\arcsin x$ | $[-1, 1]$ | $\\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$ | IV (negative inputs), I (positive) |
| $\\arccos x$ | $[-1, 1]$ | $[0, \\pi]$ | I (positive inputs), II (negative) |
| $\\arctan x$ | all reals | $\\left(-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)$ | IV (negative inputs), I (positive) |

$\\arcsin(\\sin x) = x$ **only** when $x$ is in the range of arcsine; otherwise find the angle in range with the same sine.

### Trigonometric Equations and Inequalities (3.10)

| Situation | Method |
|:---|:---|
| $\\sin\\theta = k$ on $[0, 2\\pi)$ | one solution from the unit circle, the second by symmetry: $\\pi - \\theta_1$ (sine), $2\\pi - \\theta_1$ (cosine), $\\theta_1 + \\pi$ (tangent) |
| All solutions | add $2\\pi k$ (sine, cosine) or $\\pi k$ (tangent) |
| Multiple angle $\\sin(2\\theta) = k$ on $[0, 2\\pi)$ | solve for $2\\theta$ on $[0, 4\\pi)$, then divide: twice as many solutions |
| Quadratic in a trig function | factor: $2\\sin^2\\theta - \\sin\\theta = \\sin\\theta(2\\sin\\theta - 1)$ |
| Two different functions | use an identity to leave one function |
| Inequality $\\sin\\theta > k$ | solve the equation, then test the arcs of the unit circle between the solutions |

### Identities and Equivalent Forms (3.11–3.12)

| Identity | Form |
|:---|:---|
| Pythagorean | $\\sin^2\\theta + \\cos^2\\theta = 1$, $1 + \\tan^2\\theta = \\sec^2\\theta$, $1 + \\cot^2\\theta = \\csc^2\\theta$ |
| Sum and difference | $\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$; $\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$ |
| Double angle | $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$; $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$ |
| Reciprocal and quotient | $\\sec\\theta = \\dfrac{1}{\\cos\\theta}$, $\\csc\\theta = \\dfrac{1}{\\sin\\theta}$, $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$ |

### Polar Coordinates and Polar Functions (3.13–3.15)

| Fact | Detail |
|:---|:---|
| Conversions | $x = r\\cos\\theta$, $y = r\\sin\\theta$; $r^2 = x^2 + y^2$, $\\tan\\theta = \\dfrac{y}{x}$ with the quadrant checked |
| Negative $r$ | $(-r, \\theta)$ is the same point as $(r, \\theta + \\pi)$ |
| Circles | $r = a$ (center at the pole); $r = a\\cos\\theta$ or $r = a\\sin\\theta$ (through the pole, diameter $\\lvert a \\rvert$) |
| Roses $r = a\\cos(k\\theta)$ | $k$ petals if $k$ is odd, $2k$ petals if $k$ is even |
| Limaçons $r = a + b\\cos\\theta$ | inner loop if $\\lvert b \\rvert > \\lvert a \\rvert$; cardioid if $\\lvert a \\rvert = \\lvert b \\rvert$; dimpled or convex if $\\lvert a \\rvert > \\lvert b \\rvert$ |
| Rate of change | where $r$ is increasing with $\\theta$ the point moves **away from the pole**; where $r$ is decreasing it moves **toward** the pole (for $r > 0$) |
| Complex numbers | $z = a + bi = r(\\cos\\theta + i\\sin\\theta)$ with $r = \\sqrt{a^2 + b^2}$ |

> **Key Fact:** For $\\sin(2\\theta) = k$ on $0 \\le \\theta < 2\\pi$, the inside angle $2\\theta$ runs through **two** full turns, so expect **four** solutions when $\\lvert k \\rvert < 1$.`
    },
    {
      id: 'per6-mc',
      type: 'multiple-choice' as const,
      content: '**Unit 3 practice (no calculator).** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the exact value of $\\arccos\\left(-\\dfrac{1}{2}\\right)$?',
            options: ['$\\dfrac{2\\pi}{3}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{4\\pi}{3}$', '$-\\dfrac{\\pi}{3}$'],
            correctAnswer: 0,
            explanation: 'The range of arccosine is $[0, \\pi]$, and the angle in that range with cosine $-\\frac{1}{2}$ is $\\frac{2\\pi}{3}$. $\\frac{4\\pi}{3}$ also has cosine $-\\frac{1}{2}$ but is outside the range; $\\frac{\\pi}{3}$ and $-\\frac{\\pi}{3}$ have cosine $+\\frac{1}{2}$.'
          },
          {
            question: 'What are all solutions of $\\sin(2\\theta) = \\dfrac{\\sqrt{3}}{2}$ on $0 \\le \\theta < \\pi$?',
            options: ['$\\theta = \\dfrac{\\pi}{6}$ and $\\theta = \\dfrac{\\pi}{3}$', '$\\theta = \\dfrac{\\pi}{3}$ and $\\theta = \\dfrac{2\\pi}{3}$', '$\\theta = \\dfrac{\\pi}{6}$ only', '$\\theta = \\dfrac{\\pi}{3}$ and $\\theta = \\dfrac{5\\pi}{3}$'],
            correctAnswer: 0,
            explanation: 'For $0 \\le \\theta < \\pi$ the inside angle satisfies $0 \\le 2\\theta < 2\\pi$, where sine equals $\\frac{\\sqrt{3}}{2}$ at $2\\theta = \\frac{\\pi}{3}$ and $2\\theta = \\frac{2\\pi}{3}$. Dividing by $2$ gives $\\theta = \\frac{\\pi}{6}$ and $\\frac{\\pi}{3}$. The second option forgets to divide, the third misses the symmetric solution, and $\\frac{5\\pi}{3}$ is outside the interval.'
          },
          {
            question: 'For $\\sin\\theta \\ne 0$, the expression $\\dfrac{1 - \\cos^2\\theta}{\\sin\\theta}$ is equivalent to:',
            options: ['$\\sin\\theta$', '$\\cos\\theta$', '$\\tan\\theta$', '$\\csc\\theta$'],
            correctAnswer: 0,
            explanation: 'By the Pythagorean identity, $1 - \\cos^2\\theta = \\sin^2\\theta$, and $\\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$.'
          },
          {
            question: 'The point with rectangular coordinates $(-2, 2)$ has polar coordinates $(r, \\theta)$ with $r > 0$ and $0 \\le \\theta < 2\\pi$. Which is it?',
            options: ['$\\left(2\\sqrt{2}, \\dfrac{3\\pi}{4}\\right)$', '$\\left(2\\sqrt{2}, \\dfrac{\\pi}{4}\\right)$', '$\\left(2\\sqrt{2}, \\dfrac{7\\pi}{4}\\right)$', '$\\left(4, \\dfrac{3\\pi}{4}\\right)$'],
            correctAnswer: 0,
            explanation: '$r = \\sqrt{(-2)^2 + 2^2} = 2\\sqrt{2}$, and the point is in Quadrant II with $\\tan\\theta = -1$, so $\\theta = \\frac{3\\pi}{4}$. The angles $\\frac{\\pi}{4}$ and $\\frac{7\\pi}{4}$ are in Quadrants I and IV, and $r = 4$ confuses $x^2 + y^2 = 8$ with $r$: the distance is $\\sqrt{8} = 2\\sqrt{2}$, not $4$.'
          }
        ]
      }
    },
    {
      id: 'per6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Polar graphs.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The graph of $r = 3\\cos(2\\theta)$ is a rose with:',
            options: ['$4$ petals', '$2$ petals', '$3$ petals', '$6$ petals'],
            correctAnswer: 0
          },
          {
            label: 'The graph of $r = 2 + 3\\sin\\theta$ is:',
            options: ['a limaçon with an inner loop', 'a cardioid', 'a circle through the pole', 'a rose with three petals'],
            correctAnswer: 0
          },
          {
            label: 'On an interval of $\\theta$ where $r = f(\\theta)$ is positive and decreasing, the point on the graph:',
            options: ['moves closer to the pole as $\\theta$ increases', 'moves farther from the pole as $\\theta$ increases', 'stays a fixed distance from the pole', 'passes through the pole'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$4$ petals', 'a limaçon with an inner loop', 'moves closer to the pole as $\\theta$ increases'],
        hint1: 'Even $k$ gives $2k$ petals.',
        hint2: 'Compare $\\lvert b \\rvert = 3$ with $\\lvert a \\rvert = 2$.',
        hint3: '$r$ is the distance from the pole when $r > 0$.',
        explanation: '$r = a\\cos(k\\theta)$ with even $k = 2$ has $2k = 4$ petals. In $r = a + b\\sin\\theta$ with $\\lvert b \\rvert > \\lvert a \\rvert$, $r$ becomes negative on part of the turn, producing an inner loop. For positive $r$, a decreasing $r$ means the distance from the pole is shrinking.'
      }
    },
    {
      id: 'per6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Inverse trig outputs live in fixed ranges: $\\arcsin, \\arctan$ in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, $\\arccos$ in $[0, \\pi]$
- Solve trig equations with the unit circle and symmetry; a multiple angle $k\\theta$ multiplies the number of solutions by $k$
- Identities are tools for **one function**: Pythagorean substitutions and the three forms of $\\cos(2\\theta)$
- Polar: convert with $x = r\\cos\\theta$, $y = r\\sin\\theta$; roses have $k$ or $2k$ petals; $r$ increasing means moving away from the pole`
    }
  ]
};
