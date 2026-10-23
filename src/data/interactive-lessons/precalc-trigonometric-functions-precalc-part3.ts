export const precalcTrigFunctionsPart3Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🌊 Trigonometric Functions — Sine & Cosine Definitions

**Part 3 of 7**

### Unit-Circle Definitions (CED 3.2)

Let the terminal ray of $\\theta$ (in standard position) meet the **unit circle** at the point $P$. Then

$$\\boxed{\\cos\\theta = \\text{the } x\\text{-coordinate of } P \\qquad \\sin\\theta = \\text{the } y\\text{-coordinate of } P}$$

These are signed coordinates, not distances: left of the $y$-axis the cosine is negative, below the $x$-axis the sine is negative.

### Right-Triangle Connection

For a right triangle with acute angle $\\theta$, hypotenuse $r$, opposite side $y$, and adjacent side $x$:

$$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{y}{r} \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{x}{r}$$

On the unit circle ($r = 1$) this is the same statement: $\\sin\\theta = y$ and $\\cos\\theta = x$.

### Key Properties Comparison

| Property | $\\sin\\theta$ | $\\cos\\theta$ |
|:---------|:-------------|:-------------|
| Domain | $(-\\infty, \\infty)$ | $(-\\infty, \\infty)$ |
| Range | $[-1, 1]$ | $[-1, 1]$ |
| Period | $2\\pi$ | $2\\pi$ |
| At $\\theta = 0$ | $0$ | $1$ |
| At $\\theta = \\frac{\\pi}{2}$ | $1$ | $0$ |
| Symmetry | **Odd**: $\\sin(-\\theta) = -\\sin\\theta$ | **Even**: $\\cos(-\\theta) = \\cos\\theta$ |
      `
    },
    {
      id: 'p3-identities',
      type: 'text' as const,
      content: `
## 🔗 Fundamental Identities

### Pythagorean Identity

$$\\boxed{\\sin^2\\theta + \\cos^2\\theta = 1}$$

This is $x^2 + y^2 = 1$ for the point $(\\cos\\theta, \\sin\\theta)$ on the unit circle. Two useful rearrangements:

- $\\sin^2\\theta = 1 - \\cos^2\\theta$
- $\\cos^2\\theta = 1 - \\sin^2\\theta$

### Cofunction Identities

$$\\sin\\theta = \\cos\\left(\\frac{\\pi}{2} - \\theta\\right) \\qquad \\cos\\theta = \\sin\\left(\\frac{\\pi}{2} - \\theta\\right)$$

> **Cofunctions of complementary angles are equal.** For example: $\\sin \\frac{\\pi}{6} = \\cos \\frac{\\pi}{3} = \\frac{1}{2}$.

### Worked Example: Using the Pythagorean Identity

> **Given $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant II, find $\\cos\\theta$.**

$\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$

$\\cos\\theta = \\pm\\frac{4}{5}$

In Q II, cosine is **negative**: $\\boxed{\\cos\\theta = -\\frac{4}{5}}$
      `
    },
    {
      id: 'p3-evaluate',
      type: 'text' as const,
      content: `
## 📝 Evaluating Sine & Cosine — Strategy

### Step-by-Step Method

1. **Identify the quadrant** of $\\theta$ (replace $\\theta$ by a coterminal angle in $[0, 2\\pi)$ if needed)
2. **Find the reference angle** $\\theta_R$
3. **Look up** $\\sin\\theta_R$ and $\\cos\\theta_R$ from the first-quadrant table
4. **Apply the correct sign** based on the quadrant

### Example: Evaluate $\\sin \\frac{5\\pi}{3}$

| Step | Work |
|:-----|:-----|
| 1. Quadrant | $\\frac{5\\pi}{3}$ is in Q IV ($\\frac{3\\pi}{2} < \\frac{5\\pi}{3} < 2\\pi$) |
| 2. Reference angle | $2\\pi - \\frac{5\\pi}{3} = \\frac{\\pi}{3}$ |
| 3. First-quadrant value | $\\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ |
| 4. Sign in Q IV | Sine is **negative** |
| **Result** | $\\sin \\frac{5\\pi}{3} = -\\frac{\\sqrt{3}}{2}$ |

### Example: Evaluate $\\cos(-\\frac{\\pi}{4})$

Using the even property: $\\cos(-\\frac{\\pi}{4}) = \\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$

No need to find reference angles — the even/odd properties are a shortcut!
      `
    },
    {
      id: 'p3-circle-r',
      type: 'text' as const,
      content: `
## 🎯 Points on a Circle of Radius $r$ (CED 3.3)

A circle of radius $r$ centered at the origin is the unit circle scaled by $r$, so every coordinate scales by $r$. The terminal ray of $\\theta$ meets it at

$$\\boxed{P = (r\\cos\\theta,\\; r\\sin\\theta)}$$

and, with $\\theta$ in radians, the counterclockwise arc from $(r, 0)$ to $P$ has length $s = r\\theta$.

### Worked Example 1: From Angle to Coordinates

> **Find the point where the terminal ray of $\\theta = \\frac{2\\pi}{3}$ meets the circle of radius $6$.**

$$x = 6\\cos\\frac{2\\pi}{3} = 6\\left(-\\frac{1}{2}\\right) = -3 \\qquad y = 6\\sin\\frac{2\\pi}{3} = 6 \\cdot \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}$$

So $P = (-3, 3\\sqrt{3})$, in Quadrant II as expected. The arc from $(6, 0)$ to $P$ has length $6 \\cdot \\frac{2\\pi}{3} = 4\\pi$.

> ✅ **Check:** $(-3)^2 + (3\\sqrt{3})^2 = 9 + 27 = 36 = 6^2$, so $P$ really is on the circle.

### Worked Example 2: From Distance Traveled to Position

> **Start at $(3, 0)$ and walk $\\frac{5\\pi}{2}$ units clockwise around the circle of radius $3$. Where are you?**

Clockwise travel gives a negative angle: $\\theta = -\\frac{5\\pi/2}{3} = -\\frac{5\\pi}{6}$. Then

$$P = \\left(3\\cos\\left(-\\frac{5\\pi}{6}\\right),\\; 3\\sin\\left(-\\frac{5\\pi}{6}\\right)\\right) = \\left(-\\frac{3\\sqrt{3}}{2},\\; -\\frac{3}{2}\\right)$$

(the point for $-\\frac{5\\pi}{6}$ is in Quadrant III, coterminal with $\\frac{7\\pi}{6}$).

> 💡 Turn through $\\theta = \\frac{s}{r}$, then read the position from $(r\\cos\\theta, r\\sin\\theta)$. A radian value need not involve $\\pi$: walking $8$ units on a circle of radius $4$ turns through $2$ radians, which lands in Quadrant II.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Sine & Cosine Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\cos\\theta = -\\frac{5}{13}$ and $\\theta$ is in Quadrant III, what is $\\sin\\theta$?',
            options: [
              '$\\frac{12}{13}$',
              '$-\\frac{12}{13}$',
              '$\\frac{5}{13}$',
              '$-\\frac{5}{13}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$, so $\\sin\\theta = \\pm\\frac{12}{13}$. In Q III, sine is negative: $\\sin\\theta = -\\frac{12}{13}$.'
          },
          {
            question: 'Where does the terminal ray of $\\theta = \\frac{7\\pi}{6}$ meet the circle of radius $4$ centered at the origin?',
            options: [
              '$(-2\\sqrt{3}, -2)$',
              '$(-2, 2\\sqrt{3})$',
              '$(2\\sqrt{3}, -2)$',
              '$(-2\\sqrt{3}, 2)$'
            ],
            correctAnswer: 0,
            explanation: '$x = 4\\cos\\frac{7\\pi}{6} = 4\\left(-\\frac{\\sqrt{3}}{2}\\right) = -2\\sqrt{3}$ and $y = 4\\sin\\frac{7\\pi}{6} = 4\\left(-\\frac{1}{2}\\right) = -2$. Both coordinates are negative, matching Quadrant III.'
          },
          {
            question: '$\\sin(-\\frac{5\\pi}{6})$ equals:',
            options: [
              '$\\frac{1}{2}$',
              '$-\\frac{1}{2}$',
              '$\\frac{\\sqrt{3}}{2}$',
              '$-\\frac{\\sqrt{3}}{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Sine is odd: $\\sin(-\\frac{5\\pi}{6}) = -\\sin(\\frac{5\\pi}{6})$. $\\frac{5\\pi}{6}$ is in Q II with ref angle $\\frac{\\pi}{6}$: $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$. So the answer is $-\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Computation Practice** 🧮

Give exact values; use \`sqrt\` for square roots (e.g. \`-5sqrt3\`, \`sqrt(3)/2\`).

**1)** Given $\\sin\\theta = \\frac{8}{17}$ and $\\theta$ is in Q I, find $\\cos\\theta$. Write as a fraction (e.g., $3/5$). (e.g., $\\sin\\alpha = 5/13$ in Q I: $\\cos\\alpha = \\sqrt{1 - 25/169} = \\sqrt{144/169} = 12/13$)

**2)** Evaluate $\\cos \\frac{4\\pi}{3}$. Write as a fraction (e.g., $-1/2$). (e.g., $\\cos \\frac{5\\pi}{3}$: Q IV, ref $\\frac{\\pi}{3}$, $\\cos \\frac{\\pi}{3} = 1/2$, positive in Q IV → $1/2$)

**3)** The terminal ray of $\\theta = \\frac{5\\pi}{3}$ meets the circle of radius $10$ centered at the origin at $P$. Find the $y$-coordinate of $P$. (e.g., for $\\frac{\\pi}{6}$ on radius $8$: $y = 8\\sin\\frac{\\pi}{6} = 8 \\cdot \\frac{1}{2} = 4$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15/17', '-1/2', '-5sqrt3'],
        hint1: '$\\cos^2\\theta = 1 - (8/17)^2 = 1 - 64/289 = 225/289$. Take the positive root (Q I).',
        hint2: '$\\frac{4\\pi}{3}$ is in Q III. Reference angle $= \\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$. Cosine is negative in Q III.',
        hint3: '$y = 10\\sin\\frac{5\\pi}{3}$, and $\\sin\\frac{5\\pi}{3} = -\\frac{\\sqrt{3}}{2}$ (Quadrant IV).',
        explanation: '1) $\\cos\\theta = \\sqrt{225/289} = 15/17$. 2) $\\cos \\frac{4\\pi}{3} = -\\cos \\frac{\\pi}{3} = -1/2$. 3) $y = 10 \\cdot \\left(-\\frac{\\sqrt{3}}{2}\\right) = -5\\sqrt{3}$ (and $x = 10 \\cdot \\frac{1}{2} = 5$; check $5^2 + (5\\sqrt{3})^2 = 100$).'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Properties Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin(-\\theta)$ equals',
            options: ['$\\sin\\theta$', '$-\\sin\\theta$', '$\\cos\\theta$', '$-\\cos\\theta$']
          },
          {
            label: 'The range of $\\cos\\theta$ is',
            options: ['$(-\\infty, \\infty)$', '$[0, 1]$', '$[-1, 1]$', '$(-1, 1)$']
          },
          {
            label: '$\\sin^2\\theta + \\cos^2\\theta$ equals',
            options: ['$0$', '$1$', '$2$', 'Depends on $\\theta$']
          },
          {
            label: '$\\sin\\left(\\frac{\\pi}{2} - \\theta\\right)$ equals',
            options: ['$\\sin\\theta$', '$-\\sin\\theta$', '$\\cos\\theta$', '$-\\cos\\theta$']
          }
        ],
        correctAnswers: ['$-\\sin\\theta$', '$[-1, 1]$', '$1$', '$\\cos\\theta$'],
        hint1: 'Sine is an odd function — negating the input negates the output.',
        hint2: 'Both sine and cosine oscillate between the same bounds.',
        hint3: 'This identity holds for ALL values of $\\theta$.',
        explanation: 'Sine is odd: $\\sin(-\\theta) = -\\sin\\theta$. Both $\\sin$ and $\\cos$ have range $[-1,1]$. The Pythagorean identity always equals $1$. The cofunction identity gives $\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos\\theta$.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\cos\\alpha = \\frac{7}{25}$ and $\\alpha$ is in Q IV, then $\\sin\\alpha$ is:',
            options: [
              '$\\frac{24}{25}$',
              '$-\\frac{24}{25}$',
              '$\\frac{7}{25}$',
              '$-\\frac{7}{25}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin^2\\alpha = 1 - \\frac{49}{625} = \\frac{576}{625}$. $\\sin\\alpha = \\pm\\frac{24}{25}$. In Q IV, sine is negative: $-\\frac{24}{25}$.'
          },
          {
            question: 'A point starts at $(3, 0)$ and travels $\\pi$ units counterclockwise along the circle of radius $3$ centered at the origin. Where does it stop?',
            options: [
              '$\\left(\\frac{3}{2}, \\frac{3\\sqrt{3}}{2}\\right)$',
              '$\\left(\\frac{3\\sqrt{3}}{2}, \\frac{3}{2}\\right)$',
              '$(-3, 0)$',
              '$\\left(\\frac{3}{2}, -\\frac{3\\sqrt{3}}{2}\\right)$'
            ],
            correctAnswer: 0,
            explanation: 'The angle turned is $\\theta = \\frac{s}{r} = \\frac{\\pi}{3}$, so the point is $\\left(3\\cos\\frac{\\pi}{3}, 3\\sin\\frac{\\pi}{3}\\right) = \\left(\\frac{3}{2}, \\frac{3\\sqrt{3}}{2}\\right)$. Swapping the coordinates uses $\\frac{\\pi}{6}$, $(-3, 0)$ treats $\\pi$ units as a half turn (that would need $s = 3\\pi$), and a negative $y$ would be clockwise travel.'
          }
        ]
      }
    }
  ]
}
