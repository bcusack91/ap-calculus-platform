export const precalcConicsPart1Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# ⭕ Introduction to Conic Sections

**Part 1 of 7**

### What Are Conic Sections?

Conic sections are curves formed by intersecting a **double cone** with a plane:

| Conic | Plane Angle | Equation Type |
|:------|:-----------|:-------------|
| Circle | Perpendicular to axis | $x^2 + y^2 = r^2$ |
| Ellipse | Tilted, doesn't hit base | $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ |
| Parabola | Parallel to slant | $y = ax^2 + bx + c$ |
| Hyperbola | Steeper than slant | $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$ |

### General Second-Degree Equation

$$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$$

The discriminant $B^2 - 4AC$ determines the type:
- $B^2 - 4AC < 0$: ellipse (or circle if $A = C$, $B = 0$)
- $B^2 - 4AC = 0$: parabola
- $B^2 - 4AC > 0$: hyperbola
      `
    },
    {
      id: 'p1-circle',
      type: 'text' as const,
      content: `
## ⭕ The Circle

### Standard Form

$$(x-h)^2 + (y-k)^2 = r^2$$

Center $(h, k)$, radius $r$.

### General Form

$$x^2 + y^2 + Dx + Ey + F = 0$$

Convert by completing the square.

### Example: $x^2 + y^2 - 6x + 4y - 12 = 0$

Group: $(x^2 - 6x) + (y^2 + 4y) = 12$

Complete: $(x^2-6x+9)+(y^2+4y+4) = 12+9+4$

$$(x-3)^2 + (y+2)^2 = 25$$

Center $(3, -2)$, radius $5$.
      `
    },
    {
      id: 'p1-circle2',
      type: 'text' as const,
      content: `
## 📐 Circle Properties

### Key Facts

- All points are **equidistant** from the center
- A **tangent line** at point $P$ is perpendicular to the radius at $P$
- The equation of the tangent at $(x_0, y_0)$ on circle $x^2+y^2 = r^2$ is: $x_0 x + y_0 y = r^2$

### Relationship to Other Conics

A circle is a special case of an ellipse where $a = b$ (both semi-axes equal).

Eccentricity of a circle: $e = 0$.

> 💡 **Degenerate cases**: If $r^2 < 0$ after completing the square, there is no real circle (empty set). If $r^2 = 0$, it is a single point.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Circle Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The center of $(x+2)^2 + (y-5)^2 = 16$ is:',
            options: ['$(2, -5)$', '$(-2, 5)$', '$(2, 5)$', '$(-2, -5)$'],
            correctAnswer: 1,
            explanation: '$(x-(-2))^2 + (y-5)^2 = 16$. Center $= (-2, 5)$.'
          },
          {
            question: 'A circle with center $(0,0)$ passing through $(3, 4)$ has equation:',
            options: ['$x^2+y^2=7$', '$x^2+y^2=25$', '$x^2+y^2=5$', '$x^2+y^2=49$'],
            correctAnswer: 1,
            explanation: '$r^2 = 3^2+4^2 = 25$.'
          },
          {
            question: '$x^2+y^2+2x-8y+1 = 0$: the radius is:',
            options: ['$1$', '$4$', '$\\sqrt{18}$', '$16$'],
            correctAnswer: 1,
            explanation: '$(x+1)^2+(y-4)^2 = -1+1+16 = 16$. Radius $= 4$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Circle Computations** 🧮

**1)** Center of $x^2 + y^2 - 10x + 6y + 9 = 0$: the $x$-coordinate of center = ?

**2)** Same circle: the $y$-coordinate of center = ?

**3)** Same circle: the radius = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-3', '5'],
        hint1: '$(x^2-10x+25)+(y^2+6y+9) = -9+25+9 = 25$. Center $x = 5$.',
        hint2: 'Center $y = -3$.',
        hint3: '$r = \\sqrt{25} = 5$.',
        explanation: '$(x-5)^2+(y+3)^2 = 25$. Center $(5,-3)$, radius $5$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Conics** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 + y^2 = 9$ is a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 0
          },
          {
            label: '$B^2 - 4AC = 0$ indicates:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 2
          },
          {
            label: 'The eccentricity of a circle is:',
            options: ['$0$', '$1$', '$\\frac{1}{2}$', 'Undefined'],
            correctAnswer: 0
          },
          {
            label: 'A degenerate conic can be:',
            options: ['A point, line, or pair of lines', 'Only a point', 'Only a line', 'Never occurs'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Circle', 'Parabola', '$0$', 'A point, line, or pair of lines'],
        hint1: 'Both variables squared with equal coefficients.',
        hint2: 'When the plane is parallel to the slant of the cone.',
        hint3: '$e = \\frac{c}{a}$ and for a circle $c = 0$.',
        explanation: 'Circle: $A = C$, no $xy$ term. Parabola: $B^2-4AC = 0$. Circle $e = 0$. Degenerate: point, line, or two intersecting lines.'
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
            question: 'Which equation is NOT a circle?',
            options: ['$x^2+y^2=1$', '$(x-1)^2+(y+2)^2=9$', '$2x^2+2y^2=8$', '$x^2+2y^2=4$'],
            correctAnswer: 3,
            explanation: '$x^2+2y^2=4$ has different coefficients on $x^2$ and $y^2$ — it is an ellipse.'
          },
          {
            question: 'For $3x^2+3y^2-12x+18y-9=0$, dividing by 3 and completing the square gives center:',
            options: ['$(2, -3)$', '$(4, -6)$', '$(-2, 3)$', '$(6, -9)$'],
            correctAnswer: 0,
            explanation: '$x^2+y^2-4x+6y = 3 \\implies (x-2)^2+(y+3)^2 = 3+4+9 = 16$. Center $(2, -3)$.'
          }
        ]
      }
    }
  ]
};
