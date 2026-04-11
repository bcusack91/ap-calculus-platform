export const precalcConicsPart2Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔵 The Ellipse

**Part 2 of 7**

### Standard Form (Center at Origin)

**Horizontal major axis**: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b)$

**Vertical major axis**: $\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1 \\quad (a > b)$

### Key Elements

| Element | Horizontal Major Axis |
|:--------|:---------------------|
| Vertices | $(\\pm a, 0)$ |
| Co-vertices | $(0, \\pm b)$ |
| Foci | $(\\pm c, 0)$ where $c^2 = a^2 - b^2$ |
| Eccentricity | $e = \\frac{c}{a}$ (with $0 < e < 1$) |
| Major axis length | $2a$ |
| Minor axis length | $2b$ |

### Defining Property

The sum of distances from any point on the ellipse to both foci is constant: $d_1 + d_2 = 2a$.
      `
    },
    {
      id: 'p2-example',
      type: 'text' as const,
      content: `
## 📝 Example: Analyze $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$

$a^2 = 25, b^2 = 9 \\implies a = 5, b = 3$

$c^2 = 25 - 9 = 16 \\implies c = 4$

- **Center**: $(0, 0)$
- **Vertices**: $(\\pm 5, 0)$
- **Co-vertices**: $(0, \\pm 3)$
- **Foci**: $(\\pm 4, 0)$
- **Eccentricity**: $e = \\frac{4}{5} = 0.8$

Since $e$ is close to 1, this ellipse is fairly elongated.

### Translated Ellipse

$$\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$$

Same shape, centered at $(h, k)$ instead of the origin.
      `
    },
    {
      id: 'p2-eccentricity',
      type: 'text' as const,
      content: `
## 📊 Eccentricity: Shape of an Ellipse

| Eccentricity | Shape |
|:-------------|:------|
| $e = 0$ | Circle (foci coincide at center) |
| $e = 0.1$ | Nearly circular |
| $e = 0.5$ | Moderate oval |
| $e = 0.9$ | Very elongated |
| $e \\to 1$ | Approaches a line segment |

### Real-World Eccentricities

- Earth's orbit: $e \\approx 0.017$ (nearly circular)
- Mars's orbit: $e \\approx 0.093$
- Halley's comet: $e \\approx 0.967$ (very elongated)
- Pluto: $e \\approx 0.248$

> 💡 A higher eccentricity means the foci are farther from the center relative to the size of the ellipse.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Ellipse Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\frac{x^2}{16}+\\frac{y^2}{25}=1$, the major axis is:',
            options: ['Horizontal', 'Vertical', 'Diagonal', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$25 > 16$, and the larger denominator is under $y^2$, so the major axis is vertical.'
          },
          {
            question: 'Same ellipse: the foci are at:',
            options: ['$(\\pm 3, 0)$', '$(0, \\pm 3)$', '$(\\pm 9, 0)$', '$(0, \\pm 9)$'],
            correctAnswer: 1,
            explanation: '$c^2 = 25-16 = 9, c = 3$. Vertical major axis → foci at $(0, \\pm 3)$.'
          },
          {
            question: 'An ellipse with $a = 10$ and $b = 6$: the sum of focal distances for any point is:',
            options: ['$6$', '$10$', '$16$', '$20$'],
            correctAnswer: 3,
            explanation: 'Sum of distances to foci $= 2a = 20$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Ellipse Calculations** 🧮

For $\\frac{x^2}{36}+\\frac{y^2}{4}=1$:

**1)** $a$ = ?

**2)** $c$ = ? (Enter like "4sqrt2" if needed)

**3)** Eccentricity $e = \\frac{c}{a}$ = ? (Enter as a fraction like "4/6" or simplify)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '4sqrt2', '2sqrt2/3'],
        hint1: '$a^2 = 36$, so $a = 6$.',
        hint2: '$c^2 = 36-4 = 32$, so $c = \\sqrt{32} = 4\\sqrt{2}$.',
        hint3: '$e = \\frac{4\\sqrt{2}}{6} = \\frac{2\\sqrt{2}}{3}$.',
        explanation: '1) $a = 6$. 2) $c = 4\\sqrt{2}$. 3) $e = \\frac{2\\sqrt{2}}{3} \\approx 0.943$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Ellipse Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an ellipse, always $a > b > 0$ and:',
            options: ['$c > a$', '$c < a$', '$c = a$'],
            correctAnswer: 1
          },
          {
            label: 'The relationship $c^2 = a^2 - b^2$ gives:',
            options: ['$c < a$ always', '$c < b$ always', '$c$ could be larger than $b$'],
            correctAnswer: 2
          },
          {
            label: 'An ellipse with $a = b$ is a:',
            options: ['Line', 'Circle', 'Point', 'Parabola'],
            correctAnswer: 1
          },
          {
            label: 'Whispering galleries work because:',
            options: ['Sound from one focus reflects to the other focus', 'The ceiling is a parabola', 'Sound travels in circles'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$c < a$', '$c$ could be larger than $b$', 'Circle', 'Sound from one focus reflects to the other focus'],
        hint1: '$c^2 = a^2-b^2 < a^2$, so $c < a$.',
        hint2: 'If $b$ is very small, $c \\approx a > b$.',
        hint3: '$a = b$ means equal semi-axes: a circle.',
        explanation: '$c < a$ always. $c$ can exceed $b$ when the ellipse is elongated. $a=b$: circle. Whispering galleries use the elliptical reflection property.'
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
            question: 'The ellipse $\\frac{(x-1)^2}{9}+\\frac{(y+2)^2}{4}=1$ has center:',
            options: ['$(1, -2)$', '$(-1, 2)$', '$(9, 4)$', '$(3, 2)$'],
            correctAnswer: 0,
            explanation: 'Center at $(h, k) = (1, -2)$.'
          },
          {
            question: 'An ellipse has foci at $(\\pm 3, 0)$ and vertices at $(\\pm 5, 0)$. Then $b =$',
            options: ['$2$', '$4$', '$\\sqrt{34}$', '$8$'],
            correctAnswer: 1,
            explanation: '$a = 5, c = 3$. $b^2 = a^2-c^2 = 25-9 = 16$. $b = 4$.'
          }
        ]
      }
    }
  ]
};
