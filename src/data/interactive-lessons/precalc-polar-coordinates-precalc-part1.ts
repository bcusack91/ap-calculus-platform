export const precalcPolarPart1Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📍 Introduction to Polar Coordinates

**Part 1 of 7**

Instead of locating points by horizontal/vertical distances $(x, y)$, polar coordinates use a **distance** and **angle**: $(r, \\theta)$.

### Polar vs. Rectangular

| Coordinate System | Point Defined By | Notation |
|:-----------------|:----------------|:---------|
| Rectangular (Cartesian) | Horizontal & vertical distances | $(x, y)$ |
| Polar | Distance from origin & angle from positive $x$-axis | $(r, \\theta)$ |

### Key Components

- $r$ = distance from the **pole** (origin)
- $\\theta$ = angle measured counterclockwise from the **polar axis** (positive $x$-axis)

$$\\boxed{\\text{Point } (r, \\theta): \\text{ go distance } r \\text{ in direction } \\theta}$$

### Important Notes

- $r$ can be **negative**: $(- r, \\theta)$ means go distance $r$ in the **opposite** direction of $\\theta$
- Angles can exceed $360°$ or be negative (clockwise)
- The same point has **infinitely many** polar representations
      `
    },
    {
      id: 'p1-conversion',
      type: 'text' as const,
      content: `
## 🔄 Converting Between Systems

### Polar → Rectangular

$$\\boxed{x = r\\cos\\theta, \\qquad y = r\\sin\\theta}$$

### Rectangular → Polar

$$\\boxed{r = \\sqrt{x^2 + y^2}, \\qquad \\tan\\theta = \\frac{y}{x}}$$

> When finding $\\theta$, always check the **quadrant** — $\\arctan$ alone may give the wrong angle!

### Example 1: Polar → Rectangular

Convert $(4, \\frac{\\pi}{3})$ to rectangular:

$x = 4\\cos\\frac{\\pi}{3} = 4 \\cdot \\frac{1}{2} = 2$

$y = 4\\sin\\frac{\\pi}{3} = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$

**Answer:** $(2, 2\\sqrt{3})$

### Example 2: Rectangular → Polar

Convert $(-3, 3)$ to polar:

$r = \\sqrt{9 + 9} = 3\\sqrt{2}$

$\\tan\\theta = \\frac{3}{-3} = -1$. Since the point is in QII: $\\theta = \\frac{3\\pi}{4}$

**Answer:** $(3\\sqrt{2}, \\frac{3\\pi}{4})$
      `
    },
    {
      id: 'p1-multiple-rep',
      type: 'text' as const,
      content: `
## 🔁 Multiple Representations

### The Same Point Has Many Names

The point $(r, \\theta)$ is also represented by:
- $(r, \\theta + 2\\pi n)$ for any integer $n$
- $(-r, \\theta + \\pi + 2\\pi n)$ for any integer $n$

### Example: All Representations of $(3, \\frac{\\pi}{4})$

- $(3, \\frac{\\pi}{4})$ — standard
- $(3, \\frac{9\\pi}{4})$ — add $2\\pi$
- $(-3, \\frac{5\\pi}{4})$ — negate $r$ and add $\\pi$
- $(-3, -\\frac{3\\pi}{4})$ — negate $r$ and subtract $\\pi$

### Plotting Negative $r$

To plot $(-2, \\frac{\\pi}{6})$:
1. Face direction $\\frac{\\pi}{6}$ (30°)
2. Walk **backwards** 2 units
3. You end up at $(2, \\frac{7\\pi}{6})$ — same point!
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Polar Basics Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Convert $(6, \\frac{\\pi}{2})$ to rectangular coordinates:',
            options: [
              '$(6, 0)$',
              '$(0, 6)$',
              '$(3, 3\\sqrt{3})$',
              '$(3\\sqrt{3}, 3)$'
            ],
            correctAnswer: 1,
            explanation: '$x = 6\\cos\\frac{\\pi}{2} = 0$, $y = 6\\sin\\frac{\\pi}{2} = 6$. Answer: $(0, 6)$.'
          },
          {
            question: 'Which is NOT a valid representation of the point $(2, \\frac{\\pi}{3})$?',
            options: [
              '$(2, \\frac{7\\pi}{3})$',
              '$(-2, \\frac{4\\pi}{3})$',
              '$(-2, -\\frac{2\\pi}{3})$',
              '$(2, -\\frac{\\pi}{3})$'
            ],
            correctAnswer: 3,
            explanation: '$(2, -\\frac{\\pi}{3})$ is in QIV, not QI. The others are all equivalent to $(2, \\frac{\\pi}{3})$.'
          },
          {
            question: 'Convert $(-1, -1)$ to polar. The radius $r$ is:',
            options: [
              '$1$',
              '$\\sqrt{2}$',
              '$2$',
              '$-\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$r = \\sqrt{(-1)^2 + (-1)^2} = \\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Convert Coordinates** 🧮

**1)** Convert $(5, \\frac{\\pi}{6})$ to rectangular. What is $x$? Round to 1 decimal. (e.g., $4\\cos\\frac{\\pi}{3} = 4(0.5) = 2.0$)

**2)** Convert $(5, \\frac{\\pi}{6})$ to rectangular. What is $y$? (e.g., $4\\sin\\frac{\\pi}{3} = 4(0.866) = 3.5$)

**3)** Convert rectangular $(0, -4)$ to polar. What is $r$? (e.g., $\\sqrt{3^2 + 4^2} = 5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.3', '2.5', '4'],
        hint1: '$x = 5\\cos 30° = 5(0.866) = 4.33$.',
        hint2: '$y = 5\\sin 30° = 5(0.5) = 2.5$.',
        hint3: '$r = \\sqrt{0 + 16} = 4$.',
        explanation: '1) $5\\cos 30° \\approx 4.3$. 2) $5\\sin 30° = 2.5$. 3) $r = 4$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Coordinate Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The polar axis is the',
            options: ['Positive $x$-axis', 'Positive $y$-axis', 'Origin', 'Negative $x$-axis']
          },
          {
            label: 'In polar coordinates, $r < 0$ means',
            options: ['The point doesn\'t exist', 'Go in the opposite direction from $\\theta$', 'The angle is negative', 'The point is at the origin']
          },
          {
            label: 'To convert $x$ from polar: $x =$',
            options: ['$r\\sin\\theta$', '$r\\cos\\theta$', '$r\\tan\\theta$', '$\\sqrt{r^2 + \\theta^2}$']
          },
          {
            label: 'The point $(0, \\theta)$ for any $\\theta$ is',
            options: ['On the unit circle', 'The origin', 'Undefined', 'On the polar axis']
          }
        ],
        correctAnswers: ['Positive $x$-axis', 'Go in the opposite direction from $\\theta$', '$r\\cos\\theta$', 'The origin'],
        hint1: 'Angles are measured from the positive $x$-axis.',
        hint2: 'Negative $r$ reverses the direction.',
        hint3: '$x$ is the horizontal component: $r\\cos\\theta$.',
        explanation: 'Polar axis = positive $x$-axis. Negative $r$ = opposite direction. $x = r\\cos\\theta$. $r = 0$ is always the origin.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Convert $(3, 4)$ (rectangular) to polar. The angle $\\theta$ is in which quadrant?',
            options: [
              'Quadrant I',
              'Quadrant II',
              'Quadrant III',
              'Quadrant IV'
            ],
            correctAnswer: 0,
            explanation: 'Both $x = 3 > 0$ and $y = 4 > 0$, so the point is in Quadrant I. $\\theta = \\arctan(\\frac{4}{3}) \\approx 53.1°$.'
          },
          {
            question: '$(-3, \\frac{\\pi}{4})$ in polar is the same point as:',
            options: [
              '$(3, \\frac{5\\pi}{4})$',
              '$(3, \\frac{\\pi}{4})$',
              '$(3, -\\frac{\\pi}{4})$',
              '$(-3, \\frac{5\\pi}{4})$'
            ],
            correctAnswer: 0,
            explanation: 'Negate $r$ and add $\\pi$: $(-3, \\frac{\\pi}{4}) = (3, \\frac{\\pi}{4} + \\pi) = (3, \\frac{5\\pi}{4})$.'
          }
        ]
      }
    }
  ]
};
