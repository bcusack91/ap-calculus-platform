export const precalcConicsPart3Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📐 The Parabola

**Part 3 of 7**

### Definition

A **parabola** is the set of all points equidistant from a fixed point (the **focus**) and a fixed line (the **directrix**).

### Standard Forms (Vertex at Origin)

| Opens | Equation | Focus | Directrix |
|:------|:---------|:------|:----------|
| Up | $x^2 = 4py$ | $(0, p)$ | $y = -p$ |
| Down | $x^2 = -4py$ | $(0, -p)$ | $y = p$ |
| Right | $y^2 = 4px$ | $(p, 0)$ | $x = -p$ |
| Left | $y^2 = -4px$ | $(-p, 0)$ | $x = p$ |

> 💡 The value $p$ is the distance from the vertex to the focus (and also from the vertex to the directrix).
      `
    },
    {
      id: 'p3-example',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Find focus and directrix of $x^2 = 12y$

Compare to $x^2 = 4py$: $4p = 12 \\implies p = 3$

- Opens **upward** (positive coefficient)
- **Focus**: $(0, 3)$
- **Directrix**: $y = -3$
- **Latus rectum** (width through focus): $|4p| = 12$

### Example 2: Write equation with focus at $(-2, 0)$

Focus on the negative $x$-axis → opens **left** → form $y^2 = -4px$

$p = 2$: $y^2 = -8x$

### Translated Parabola

$$(x-h)^2 = 4p(y-k)$$

opens up/down, vertex at $(h, k)$.

$$(y-k)^2 = 4p(x-h)$$

opens right/left, vertex at $(h, k)$.
      `
    },
    {
      id: 'p3-reflective',
      type: 'text' as const,
      content: `
## 🔦 The Reflective Property

Parabolas have a remarkable property: any ray parallel to the axis reflects off the parabola and passes through the focus.

### Applications

- **Satellite dishes**: Incoming parallel signals reflect to the focus (receiver)
- **Car headlights**: Light placed at the focus reflects outward in parallel beams
- **Solar concentrators**: Parallel sunlight focuses to a single point
- **Suspension bridges**: Cables under uniform load form parabolas

> The focal length $p$ determines how "wide" or "narrow" the parabola opens. A small $p$ creates a narrow, tightly focused parabola.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Parabola Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The parabola $y^2 = 20x$ opens in which direction?',
            options: ['Up', 'Down', 'Right', 'Left'],
            correctAnswer: 2,
            explanation: '$y^2 = 4px$ with positive coefficient → opens right. $4p=20, p=5$.'
          },
          {
            question: 'What is the focus of $x^2 = -8y$?',
            options: ['$(0, 2)$', '$(0, -2)$', '$(2, 0)$', '$(-2, 0)$'],
            correctAnswer: 1,
            explanation: '$x^2 = -4py$: $4p = 8, p = 2$. Opens down → focus at $(0, -2)$.'
          },
          {
            question: 'A parabola has vertex $(0,0)$ and directrix $x = 4$. Which direction does it open?',
            options: ['Up', 'Down', 'Right', 'Left'],
            correctAnswer: 3,
            explanation: 'Directrix is to the right of vertex → parabola opens left (away from directrix).'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Parabola Calculations** 🧮

**1)** For $x^2 = 16y$, find $p$: p = ?

**2)** For $y^2 = -24x$, the focus is at $(-a, 0)$. What is $a$?

**3)** A parabola opens upward with focus at $(0, 5)$. Its equation is $x^2 = ?y$. Enter the coefficient.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '6', '20'],
        hint1: '$4p = 16$.',
        hint2: '$4p = 24, p = 6$. Opens left → focus at $(-6, 0)$.',
        hint3: '$p = 5$, so $4p = 20$. Equation: $x^2 = 20y$.',
        explanation: '1) $p = 4$. 2) $p = 6$, focus at $(-6, 0)$. 3) $4(5) = 20$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Parabola Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The equation $y^2 = 4px$ represents a parabola opening:',
            options: ['Up', 'Down', 'Right (if $p>0$)', 'Left (if $p>0$)'],
            correctAnswer: 2
          },
          {
            label: 'The length of the latus rectum is:',
            options: ['$p$', '$2p$', '$4p$', '$\\frac{p}{2}$'],
            correctAnswer: 2
          },
          {
            label: 'The eccentricity of every parabola is:',
            options: ['$e = 0$', '$e = 0.5$', '$e = 1$', '$e = 2$'],
            correctAnswer: 2
          },
          {
            label: 'A satellite dish uses a parabolic shape because:',
            options: ['It looks nice', 'Signals reflect to the focus', 'It minimizes weight', 'It is easy to manufacture'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Right (if $p>0$)', '$4p$', '$e = 1$', 'Signals reflect to the focus'],
        hint1: '$y^2$ form → opens horizontally.',
        hint2: 'Latus rectum = $|4p|$.',
        hint3: 'All parabolas have eccentricity exactly $1$.',
        explanation: '$y^2$ form opens right/left. Latus rectum $= 4p$. Eccentricity $= 1$ always. Satellite dishes exploit the reflective property.'
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
            question: 'The parabola $(x-3)^2 = -12(y+1)$ has vertex at:',
            options: ['$(3, -1)$', '$(-3, 1)$', '$(3, 1)$', '$(-3, -1)$'],
            correctAnswer: 0,
            explanation: 'Vertex is $(h, k) = (3, -1)$.'
          },
          {
            question: 'Same parabola: the focus is at:',
            options: ['$(3, 2)$', '$(3, -4)$', '$(0, -1)$', '$(6, -1)$'],
            correctAnswer: 1,
            explanation: '$4p = 12, p = 3$. Opens down → focus at $(3, -1-3) = (3, -4)$.'
          }
        ]
      }
    }
  ]
};
