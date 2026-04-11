export const precalcConicsPart7Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🎯 Conic Sections — Full Synthesis

**Part 7 of 7**

### Summary of All Conics

| Conic | Equation | $e$ | Key Property |
|:------|:---------|:----|:-------------|
| Circle | $x^2+y^2=r^2$ | $0$ | All points equidistant from center |
| Ellipse | $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ | $0<e<1$ | $d_1+d_2=2a$ |
| Parabola | $x^2=4py$ | $1$ | Equidistant from focus & directrix |
| Hyperbola | $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$ | $e>1$ | $|d_1-d_2|=2a$ |

### The $c$-Relationship

- **Ellipse**: $c^2 = a^2 - b^2$ (foci inside)
- **Hyperbola**: $c^2 = a^2 + b^2$ (foci outside)
- **Parabola**: just one focus at distance $p$ from vertex
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 🗺️ Identification Strategy

Given a second-degree equation, follow this flowchart:

**Step 1**: Is there an $xy$-term?
- Yes → Use discriminant $B^2-4AC$ to classify; rotate if needed
- No → Go to Step 2

**Step 2**: Which squared terms are present?
- Both $x^2$ and $y^2$ → Go to Step 3
- Only $x^2$ or only $y^2$ → **Parabola**

**Step 3**: Are the coefficients of $x^2$ and $y^2$ the same sign?
- Same sign, same value → **Circle**
- Same sign, different values → **Ellipse**
- Opposite signs → **Hyperbola**

### Converting to Standard Form
1. Group $x$-terms and $y$-terms
2. Complete the square for each variable
3. Divide to get $1$ on the right side
      `
    },
    {
      id: 'p7-worked',
      type: 'text' as const,
      content: `
## 📝 Comprehensive Example

**Identify and graph**: $4x^2+9y^2-16x+54y+61=0$

**Step 1**: Group and complete the square.

$4(x^2-4x) + 9(y^2+6y) = -61$

$4(x^2-4x+4) + 9(y^2+6y+9) = -61+16+81$

$4(x-2)^2 + 9(y+3)^2 = 36$

**Step 2**: Divide by 36.

$$\\frac{(x-2)^2}{9} + \\frac{(y+3)^2}{4} = 1$$

**Identify**: Ellipse, center $(2,-3)$, $a=3$, $b=2$, horizontal major axis.

$c = \\sqrt{9-4} = \\sqrt{5}$, foci at $(2\\pm\\sqrt{5}, -3)$.
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Identify: $9x^2-4y^2-36=0$',
            options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
            correctAnswer: 2,
            explanation: '$9x^2-4y^2=36$ → $\\frac{x^2}{4}-\\frac{y^2}{9}=1$. Opposite signs → hyperbola.'
          },
          {
            question: 'Identify: $y^2-8x+6y+1=0$',
            options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
            correctAnswer: 1,
            explanation: 'Only $y^2$ is squared ($x$ is linear) → parabola.'
          },
          {
            question: 'Identify: $x^2+y^2-6x+2y+6=0$',
            options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
            correctAnswer: 3,
            explanation: 'Both squared with same coefficient ($1$) → circle. $(x-3)^2+(y+1)^2=4$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Complete the Square** 🧮

Convert $x^2+4y^2+2x-24y+33=0$ to standard form.

**1)** Center $h$ = ?

**2)** Center $k$ = ?

**3)** This is a(n): (type "ellipse", "parabola", "hyperbola", or "circle")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '3', 'ellipse'],
        hint1: '$(x^2+2x+1)+4(y^2-6y+9) = -33+1+36 = 4$. $(x+1)^2 + 4(y-3)^2 = 4$.',
        hint2: '$\\frac{(x+1)^2}{4}+(y-3)^2=1$. Center $(-1, 3)$.',
        hint3: 'Both variables squared with same sign but different coefficients → ellipse.',
        explanation: '$(x+1)^2/4 + (y-3)^2/1 = 1$. Center $(-1,3)$. Ellipse with $a=2, b=1$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Master Classification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$3x^2+3y^2-12x+6y=0$ is a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 0
          },
          {
            label: '$x^2-2x-4y+9=0$ is a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 2
          },
          {
            label: '$4x^2+y^2=16$ is a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 1
          },
          {
            label: '$xy=6$ is a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola'],
        hint1: 'Same coefficients on $x^2$ and $y^2$ → circle.',
        hint2: 'Only $x$ is squared → parabola.',
        hint3: 'Different positive coefficients → ellipse.',
        explanation: '$3x^2+3y^2$: circle (same coefficients). $x^2$ only: parabola. $4x^2+y^2$: ellipse. $xy=6$: $\\Delta = 1 > 0$: hyperbola.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which conic has exactly one focus?',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 2,
            explanation: 'Parabolas have one focus; ellipses and hyperbolas have two; circles have a center.'
          },
          {
            question: 'After completing the square on $2x^2-8x-y+10=0$, the vertex of this parabola is:',
            options: ['$(2, 2)$', '$(2, -2)$', '$(4, 10)$', '$(-2, 2)$'],
            correctAnswer: 0,
            explanation: '$2(x^2-4x+4) = y-10+8$. $2(x-2)^2 = y-2$. Vertex $(2, 2)$.'
          }
        ]
      }
    }
  ]
};
