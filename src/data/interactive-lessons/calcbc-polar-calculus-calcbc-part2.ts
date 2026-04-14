export const calcbcPolarPart2Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol2-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 2 of 7 \u2014 Graphing Polar Curves & Symmetry**

### Graphing Strategy

To sketch $r = f(\\theta)$:
1. Make a table of $\\theta$ vs. $r$ values
2. Plot points in polar coordinates
3. Check for symmetry to reduce work
4. Note where $r = 0$ (curve passes through origin)
5. Note where $r < 0$ (point is reflected through origin)

### Symmetry Tests

| Symmetry | Test | Replace |
|----------|------|---------|
| About $x$-axis | $f(-\\theta) = f(\\theta)$ | $\\theta \\to -\\theta$ |
| About $y$-axis | $f(\\pi - \\theta) = f(\\theta)$ | $\\theta \\to \\pi - \\theta$ |
| About origin | $f(\\theta + \\pi) = f(\\theta)$ | $\\theta \\to \\theta + \\pi$ |

> **Important:** These are sufficient but not necessary conditions. A curve may have symmetry that the test does not detect.`
    },
    {
      id: 'pol2-examples',
      type: 'text' as const,
      content: `### Graphing Examples

**Cardioid $r = 1 + \\cos\\theta$:**

| $\\theta$ | $0$ | $\\pi/3$ | $\\pi/2$ | $2\\pi/3$ | $\\pi$ |
|----------|-----|---------|---------|----------|-------|
| $r$ | $2$ | $3/2$ | $1$ | $1/2$ | $0$ |

Symmetric about the $x$-axis (since $\\cos(-\\theta) = \\cos\\theta$).

**Rose $r = \\sin(3\\theta)$:**
- $r = 0$ when $3\\theta = n\\pi$, i.e., $\\theta = 0, \\pi/3, 2\\pi/3, \\pi$
- $3$ petals (odd coefficient), each spanning $\\pi/3$ radians
- First petal: $0 \\le \\theta \\le \\pi/3$, max $r = 1$ at $\\theta = \\pi/6$

**Lemniscate $r^2 = 4\\cos(2\\theta)$:**
- Only exists when $\\cos(2\\theta) \\ge 0$: $-\\pi/4 \\le \\theta \\le \\pi/4$ and $3\\pi/4 \\le \\theta \\le 5\\pi/4$
- Figure-eight shape through the origin`
    },
    {
      id: 'pol2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The curve $r = 2 + 3\\cos\\theta$ is a:',
            options: ['Lima\\c{c}on with inner loop', 'Cardioid', 'Convex lima\\c{c}on', 'Circle'],
            correctAnswer: 0,
            explanation: '$r = a + b\\cos\\theta$ with $|a| < |b|$ ($2 < 3$) creates a lima\\c{c}on with an inner loop. $r = 0$ when $\\cos\\theta = -2/3$.'
          },
          {
            question: '$r = \\cos(4\\theta)$ has how many petals?',
            options: ['$8$', '$4$', '$16$', '$2$'],
            correctAnswer: 0,
            explanation: '$r = \\cos(n\\theta)$ with even $n$: $2n = 8$ petals.'
          },
          {
            question: 'The spiral $r = \\theta$ ($\\theta \\ge 0$) has what symmetry?',
            options: ['None', 'About the $x$-axis', 'About the $y$-axis', 'About the origin'],
            correctAnswer: 0,
            explanation: '$f(-\\theta) = -\\theta \\ne \\theta$, $f(\\pi-\\theta) = \\pi-\\theta \\ne \\theta$. No standard symmetry.'
          }
        ]
      }
    },
    {
      id: 'pol2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Symmetry Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'The curve $r = 3\\sin\\theta$ is symmetric about:',
            options: ['The $y$-axis ($\\theta = \\pi/2$)', 'The $x$-axis', 'The origin', 'No symmetry'],
            correctAnswers: ['The $y$-axis ($\\theta = \\pi/2$)'],
            hints: ['Check: $f(\\pi - \\theta) = 3\\sin(\\pi-\\theta) = 3\\sin\\theta$.'],
            explanation: '$f(\\pi-\\theta) = 3\\sin(\\pi-\\theta) = 3\\sin\\theta = f(\\theta)$. Symmetric about the $y$-axis. (It is a circle centered at $(0, 3/2)$.)'
          },
          {
            label: 'When $r < 0$ for some $\\theta$-values, the curve:',
            options: ['Reflects those points through the origin', 'Does not exist there', 'Stays in the same location', 'Creates an asymptote'],
            correctAnswers: ['Reflects those points through the origin'],
            hints: ['Negative $r$ means go in the opposite direction from angle $\\theta$.'],
            explanation: 'A point $(r, \\theta)$ with $r < 0$ is plotted as $(|r|, \\theta + \\pi)$: reflected through the origin. This is how roses with even $n$ get their extra petals.'
          }
        ]
      }
    },
    {
      id: 'pol2-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For the cardioid $r = 1 + \\sin\\theta$, the maximum value of $r$ is $2$ and occurs at $\\theta = \\pi/2$. At what angle does $r = 0$? Express as a fraction times $\\pi$.',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2'],
        hints: ['$1 + \\sin\\theta = 0$ when $\\sin\\theta = -1$.'],
        explanation: '$r = 0$ when $\\sin\\theta = -1$, which occurs at $\\theta = 3\\pi/2$.'
      }
    },
    {
      id: 'pol2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Graph polar curves by making a $\\theta$-$r$ table and plotting
- Use symmetry tests to reduce graphing work
- Know the shapes: circles, cardioids, lima\\c{c}ons, roses, lemniscates, spirals
- Negative $r$ values reflect the point through the origin

> **Next:** Part 3 covers **polar area** with the integral formula.`
    }
  ]
};
