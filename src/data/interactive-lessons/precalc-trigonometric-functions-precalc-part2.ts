export const precalcTrigFunctionsPart2Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# ⭕ Trigonometric Functions — The Unit Circle

**Part 2 of 7**

The **unit circle** is a circle with radius $1$ centered at the origin. Every point on it has coordinates $(\\cos\\theta,\\;\\sin\\theta)$.

$$\\boxed{x^2 + y^2 = 1 \\implies \\cos^2\\theta + \\sin^2\\theta = 1}$$

### First-Quadrant Key Coordinates

| $\\theta$ | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ |
|:-------|:----|:------------|:------------|:------------|:------------|
| $\\cos\\theta$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\sin\\theta$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ |

> **Pattern:** cosine values descend $1, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{1}{2}, 0$ while sine values ascend $0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1$ — they mirror each other!
      `
    },
    {
      id: 'p2-quadrants',
      type: 'text' as const,
      content: `
## 🧭 Signs by Quadrant & Reference Angles

### ASTC Rule ("All Students Take Calculus")

| Quadrant | Positive Functions | Sign of $(\\cos,\\sin)$ |
|:---------|:-------------------|:----------------------|
| I ($0$ to $\\frac{\\pi}{2}$) | **A**ll | $(+, +)$ |
| II ($\\frac{\\pi}{2}$ to $\\pi$) | **S**ine | $(-, +)$ |
| III ($\\pi$ to $\\frac{3\\pi}{2}$) | **T**angent | $(-, -)$ |
| IV ($\\frac{3\\pi}{2}$ to $2\\pi$) | **C**osine | $(+, -)$ |

### Reference Angle

The **reference angle** $\\theta_R$ is the acute angle between the terminal side and the $x$-axis:

| Quadrant | Reference Angle Formula |
|:---------|:-----------------------|
| I | $\\theta_R = \\theta$ |
| II | $\\theta_R = \\pi - \\theta$ |
| III | $\\theta_R = \\theta - \\pi$ |
| IV | $\\theta_R = 2\\pi - \\theta$ |

### Worked Example: Find $\\cos\\frac{5\\pi}{6}$ and $\\sin\\frac{5\\pi}{6}$

1. $\\frac{5\\pi}{6}$ is in **Quadrant II** (between $\\frac{\\pi}{2}$ and $\\pi$)
2. Reference angle: $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$
3. From the table: $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$
4. In Q II: cosine is **negative**, sine is **positive**

$$\\boxed{\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}, \\quad \\sin\\frac{5\\pi}{6} = \\frac{1}{2}}$$
      `
    },
    {
      id: 'p2-special',
      type: 'text' as const,
      content: `
## 📋 Full Unit Circle — All Four Quadrants

| Angle $\\theta$ | $(\\cos\\theta, \\sin\\theta)$ | | Angle $\\theta$ | $(\\cos\\theta, \\sin\\theta)$ |
|:------|:------|:--|:------|:------|
| $0$ | $(1, 0)$ | | $\\pi$ | $(-1, 0)$ |
| $\\frac{\\pi}{6}$ | $(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$ | | $\\frac{7\\pi}{6}$ | $(-\\frac{\\sqrt{3}}{2}, -\\frac{1}{2})$ |
| $\\frac{\\pi}{4}$ | $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$ | | $\\frac{5\\pi}{4}$ | $(-\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2})$ |
| $\\frac{\\pi}{3}$ | $(\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$ | | $\\frac{4\\pi}{3}$ | $(-\\frac{1}{2}, -\\frac{\\sqrt{3}}{2})$ |
| $\\frac{\\pi}{2}$ | $(0, 1)$ | | $\\frac{3\\pi}{2}$ | $(0, -1)$ |
| $\\frac{2\\pi}{3}$ | $(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$ | | $\\frac{5\\pi}{3}$ | $(\\frac{1}{2}, -\\frac{\\sqrt{3}}{2})$ |
| $\\frac{3\\pi}{4}$ | $(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$ | | $\\frac{7\\pi}{4}$ | $(\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2})$ |
| $\\frac{5\\pi}{6}$ | $(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$ | | $\\frac{11\\pi}{6}$ | $(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2})$ |

### Worked Example: Find $\\sin\\frac{4\\pi}{3}$

1. $\\frac{4\\pi}{3}$ is in **Q III** → reference angle $= \\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$
2. $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$
3. Sine is **negative** in Q III

$$\\boxed{\\sin\\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}}$$
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Unit Circle Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What are the coordinates of the point at $\\frac{3\\pi}{4}$ on the unit circle?',
            options: [
              '$(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$',
              '$(- \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$',
              '$(- \\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2})$',
              '$(\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2})$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{3\\pi}{4}$ is in Q II (reference angle $\\frac{\\pi}{4}$). Cosine negative, sine positive: $(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$.'
          },
          {
            question: 'In which quadrant is $\\sin\\theta < 0$ and $\\cos\\theta > 0$?',
            options: [
              'Quadrant I',
              'Quadrant II',
              'Quadrant III',
              'Quadrant IV'
            ],
            correctAnswer: 3,
            explanation: 'Q IV has positive cosine and negative sine. Remember ASTC: **C**osine is the only positive trig function in Q IV.'
          },
          {
            question: 'The reference angle for $\\frac{5\\pi}{3}$ is:',
            options: [
              '$\\frac{\\pi}{6}$',
              '$\\frac{\\pi}{4}$',
              '$\\frac{\\pi}{3}$',
              '$\\frac{2\\pi}{3}$'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{5\\pi}{3}$ is in Q IV. Reference angle $= 2\\pi - \\frac{5\\pi}{3} = \\frac{6\\pi - 5\\pi}{3} = \\frac{\\pi}{3}$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Unit Circle Computations** 🧮

All answers should be exact. Use sqrt for square roots and fractions (e.g., sqrt(3)/2).

**1)** $\\cos\\frac{7\\pi}{6} = \\;?$ Write the exact value including the sign. (e.g., $\\cos\\frac{2\\pi}{3}$: Q II, ref angle $\\frac{\\pi}{3}$, $\\cos\\frac{\\pi}{3} = 1/2$, negative in Q II → answer: $-1/2$)

**2)** $\\sin\\frac{11\\pi}{6} = \\;?$ Write as a fraction. (e.g., $\\sin\\frac{7\\pi}{4}$: Q IV, ref angle $\\frac{\\pi}{4}$, $\\sin\\frac{\\pi}{4} = \\sqrt{2}/2$, negative in Q IV → answer: $-\\sqrt{2}/2$)

**3)** What is the reference angle of $\\frac{5\\pi}{4}$? Express as a fraction of $\\pi$ — write just the fraction (e.g., for $210°$ the ref angle is $30° = \\pi/6$, answer: $1/6$). (e.g., $\\frac{2\\pi}{3}$ is in Q II: $\\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$, answer: $1/3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-sqrt(3)/2', '-1/2', '1/4'],
        hint1: '$\\frac{7\\pi}{6}$ is in Q III. Reference angle $= \\frac{7\\pi}{6} - \\pi = \\frac{\\pi}{6}$. Cosine is negative in Q III.',
        hint2: '$\\frac{11\\pi}{6}$ is in Q IV. Reference angle $= 2\\pi - \\frac{11\\pi}{6} = \\frac{\\pi}{6}$. Sine is negative in Q IV.',
        hint3: '$\\frac{5\\pi}{4}$ is in Q III. Reference angle $= \\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$. As a fraction of $\\pi$: $1/4$.',
        explanation: '1) Ref angle of $\\frac{7\\pi}{6}$ is $\\frac{\\pi}{6}$; $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$; negative in Q III → $-\\sqrt{3}/2$. 2) Ref angle of $\\frac{11\\pi}{6}$ is $\\frac{\\pi}{6}$; $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$; negative in Q IV → $-1/2$. 3) $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$, so $1/4$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quadrant & Sign Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In Quadrant II, the sign of cosine is',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: '$\\cos\\frac{\\pi}{3}$ equals',
            options: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$0$']
          },
          {
            label: 'The Pythagorean identity on the unit circle is',
            options: ['$\\cos^2\\theta + \\sin^2\\theta = 1$', '$\\cos\\theta + \\sin\\theta = 1$', '$\\cos^2\\theta - \\sin^2\\theta = 1$', '$|\\cos\\theta| + |\\sin\\theta| = 1$']
          },
          {
            label: '$\\sin\\frac{3\\pi}{2}$ equals',
            options: ['$1$', '$0$', '$-1$', 'undefined']
          }
        ],
        correctAnswers: ['negative', '$\\frac{1}{2}$', '$\\cos^2\\theta + \\sin^2\\theta = 1$', '$-1$'],
        hint1: 'Cosine represents the x-coordinate; what sign does x have in Q II?',
        hint2: '$\\frac{\\pi}{3} = 60°$. The cosine values for $30°, 45°, 60°$ use the "descending" pattern.',
        hint3: 'The unit circle equation $x^2 + y^2 = 1$ with $x = \\cos\\theta, y = \\sin\\theta$ gives the identity.',
        explanation: 'Q II has negative $x$-values, so cosine is negative. $\\cos 60° = \\frac{1}{2}$. The Pythagorean identity $\\cos^2\\theta + \\sin^2\\theta = 1$ comes directly from $x^2+y^2=1$. At $\\frac{3\\pi}{2}$ (bottom of circle), the point is $(0,-1)$, so $\\sin = -1$.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\theta$ is in Quadrant III and $\\cos\\theta = -\\frac{3}{5}$, what is $\\sin\\theta$?',
            options: [
              '$\\frac{4}{5}$',
              '$-\\frac{4}{5}$',
              '$\\frac{3}{5}$',
              '$-\\frac{3}{5}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$. So $\\sin\\theta = \\pm\\frac{4}{5}$. In Q III, sine is negative: $\\sin\\theta = -\\frac{4}{5}$.'
          },
          {
            question: '$\\cos\\frac{7\\pi}{4}$ equals:',
            options: [
              '$-\\frac{\\sqrt{2}}{2}$',
              '$\\frac{\\sqrt{2}}{2}$',
              '$-\\frac{\\sqrt{3}}{2}$',
              '$\\frac{1}{2}$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{7\\pi}{4}$ is in Q IV. Reference angle $= 2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$. Cosine is positive in Q IV: $\\cos\\frac{7\\pi}{4} = \\frac{\\sqrt{2}}{2}$.'
          }
        ]
      }
    }
  ]
}
