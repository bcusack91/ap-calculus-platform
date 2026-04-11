export const precalcConicsPart4Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📐 The Hyperbola

**Part 4 of 7**

### Definition

A **hyperbola** is the set of all points where the **difference** of distances to two foci is constant: $|d_1 - d_2| = 2a$.

### Standard Forms (Center at Origin)

| Opens | Equation | Vertices | Foci | Asymptotes |
|:------|:---------|:---------|:-----|:-----------|
| Left-Right | $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$ | $(\\pm a, 0)$ | $(\\pm c, 0)$ | $y = \\pm\\frac{b}{a}x$ |
| Up-Down | $\\frac{y^2}{a^2}-\\frac{x^2}{b^2}=1$ | $(0, \\pm a)$ | $(0, \\pm c)$ | $y = \\pm\\frac{a}{b}x$ |

Key relationship: $c^2 = a^2 + b^2$ (note the **+** sign, unlike the ellipse!)
      `
    },
    {
      id: 'p4-example',
      type: 'text' as const,
      content: `
## 📝 Worked Example

### Analyze $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$

$a^2 = 9, b^2 = 16 \\implies a = 3, b = 4$

$c^2 = 9 + 16 = 25 \\implies c = 5$

- **Center**: $(0, 0)$
- **Vertices**: $(\\pm 3, 0)$
- **Foci**: $(\\pm 5, 0)$
- **Asymptotes**: $y = \\pm\\frac{4}{3}x$
- **Eccentricity**: $e = \\frac{c}{a} = \\frac{5}{3} \\approx 1.67$

### Graphing Strategy

1. Plot vertices at $(\\pm a, 0)$
2. Mark co-vertices at $(0, \\pm b)$
3. Draw the **central rectangle** through these four points
4. Draw asymptotes as diagonals of this rectangle
5. Sketch the hyperbola approaching but never touching the asymptotes
      `
    },
    {
      id: 'p4-theory',
      type: 'text' as const,
      content: `
## 🧠 Hyperbola vs. Ellipse

| Property | Ellipse | Hyperbola |
|:---------|:--------|:----------|
| Definition | $d_1 + d_2 = 2a$ | $|d_1 - d_2| = 2a$ |
| $c$ relationship | $c^2 = a^2 - b^2$ | $c^2 = a^2 + b^2$ |
| Shape | Closed curve | Two open branches |
| Eccentricity | $0 < e < 1$ | $e > 1$ |
| Asymptotes | None | $y = \\pm\\frac{b}{a}x$ |

### Eccentricity of Hyperbolas

- $e$ close to $1$: branches open very narrowly
- $e = \\sqrt{2}$: **rectangular** hyperbola ($a = b$)
- $e$ large: branches open very widely

> 💡 The **conjugate axis** has length $2b$; the **transverse axis** has length $2a$ and connects the vertices.
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Hyperbola Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which equation represents a hyperbola opening up and down?',
            options: ['$\\frac{x^2}{4}-\\frac{y^2}{9}=1$', '$\\frac{y^2}{4}-\\frac{x^2}{9}=1$', '$\\frac{x^2}{4}+\\frac{y^2}{9}=1$', '$x^2=4y$'],
            correctAnswer: 1,
            explanation: '$\\frac{y^2}{a^2}-\\frac{x^2}{b^2}=1$ opens up-down. Positive $y^2$ term is first.'
          },
          {
            question: 'For $\\frac{x^2}{25}-\\frac{y^2}{144}=1$, find $c$:',
            options: ['$11$', '$12$', '$13$', '$\\sqrt{119}$'],
            correctAnswer: 2,
            explanation: '$c^2 = 25+144 = 169$, so $c = 13$.'
          },
          {
            question: 'The asymptotes of $\\frac{x^2}{4}-\\frac{y^2}{9}=1$ are:',
            options: ['$y=\\pm\\frac{2}{3}x$', '$y=\\pm\\frac{3}{2}x$', '$y=\\pm 2x$', '$y=\\pm 3x$'],
            correctAnswer: 1,
            explanation: '$a=2, b=3$. Asymptotes: $y = \\pm\\frac{b}{a}x = \\pm\\frac{3}{2}x$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Hyperbola Calculations** 🧮

For $\\frac{y^2}{36}-\\frac{x^2}{64}=1$:

**1)** $a$ = ?

**2)** $c$ = ?

**3)** Eccentricity $e$ = ? (Enter as a fraction)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '10', '5/3'],
        hint1: 'Positive term is $y^2$, so $a^2=36$, $a=6$.',
        hint2: '$c^2 = 36+64 = 100$, $c = 10$.',
        hint3: '$e = c/a = 10/6 = 5/3$.',
        explanation: '1) $a = 6$. 2) $c = 10$. 3) $e = 5/3$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Hyperbola Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a hyperbola, $c$ is always:',
            options: ['Less than $a$', 'Equal to $a$', 'Greater than $a$'],
            correctAnswer: 2
          },
          {
            label: 'A rectangular hyperbola ($a = b$) has eccentricity:',
            options: ['$1$', '$\\sqrt{2}$', '$2$', '$\\pi$'],
            correctAnswer: 1
          },
          {
            label: 'The conjugate axis of $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$ is:',
            options: ['Horizontal, length $2a$', 'Vertical, length $2b$', 'Horizontal, length $2b$'],
            correctAnswer: 1
          },
          {
            label: 'Hyperbolas appear in:',
            options: ['Sonic booms (shock cones)', 'Circular orbits', 'Uniform motion'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Greater than $a$', '$\\sqrt{2}$', 'Vertical, length $2b$', 'Sonic booms (shock cones)'],
        hint1: '$c^2 = a^2 + b^2 > a^2$.',
        hint2: '$a = b$: $c^2 = 2a^2$, $e = c/a = \\sqrt{2}$.',
        hint3: 'Transverse axis connects vertices; conjugate axis is perpendicular.',
        explanation: '$c > a$ always. Rectangular hyperbola: $e=\\sqrt{2}$. Conjugate axis is perpendicular to transverse. Sonic boom shapes are hyperbolic cross-sections.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which conic has the property $|d_1 - d_2| = \\text{constant}$?',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 3,
            explanation: 'Hyperbola: difference of distances to foci is constant.'
          },
          {
            question: 'A hyperbola has vertices at $(0,\\pm 4)$ and foci at $(0,\\pm 5)$. Find $b$:',
            options: ['$1$', '$3$', '$\\sqrt{41}$', '$9$'],
            correctAnswer: 1,
            explanation: '$a=4, c=5$. $b^2 = c^2-a^2 = 25-16 = 9$. $b = 3$.'
          }
        ]
      }
    }
  ]
};
