export const precalcTransformationsPart1Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📐 Translations (Shifts)

**Part 1 of 7**

### Vertical Shifts

$y = f(x) + k$

| $k > 0$ | Shift **up** $k$ units |
|:---------|:----------------------|
| $k < 0$ | Shift **down** $|k|$ units |

### Horizontal Shifts

$y = f(x - h)$

| $h > 0$ | Shift **right** $h$ units |
|:---------|:-------------------------|
| $h < 0$ | Shift **left** $|h|$ units |

> ⚠️ Horizontal shifts work **opposite** to what you might expect! $f(x-3)$ shifts **right** 3, not left.

### Combined Example

$y = (x-2)^2 + 5$: Take $y=x^2$, shift right $2$, up $5$. Vertex: $(2, 5)$.
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: $y = \\sqrt{x+4} - 3$

Start with $y = \\sqrt{x}$.

1. Replace $x$ with $x+4$: shift **left** $4$
2. Subtract $3$: shift **down** $3$

Starting point moves from $(0,0)$ to $(-4, -3)$.

### Example 2: $y = |x-1| + 2$

Start with $y = |x|$.

1. Replace $x$ with $x-1$: shift **right** $1$
2. Add $2$: shift **up** $2$

Vertex moves from $(0,0)$ to $(1, 2)$.

### Why Horizontal Shifts Are "Backwards"

$f(x-3) = 0$ when $x-3 = 0$, i.e., $x = 3$. The zero moved **right** by $3$.

The $x$-value must be $3$ more to produce the same result → the graph shifts right.
      `
    },
    {
      id: 'p1-general',
      type: 'text' as const,
      content: `
## 🧠 The General Translation

$$y - k = f(x - h) \\quad \\Leftrightarrow \\quad y = f(x-h)+k$$

Every point $(a, b)$ on $y=f(x)$ moves to $(a+h, b+k)$.

### Translating Key Points

For $y = (x-3)^3 + 1$ (parent: $y = x^3$):

| Parent point | Translated point |
|:------------|:----------------|
| $(-1, -1)$ | $(2, 0)$ |
| $(0, 0)$ | $(3, 1)$ |
| $(1, 1)$ | $(4, 2)$ |

### Effect on Domain and Range

If $f$ has domain $[a, b]$ and range $[c, d]$:

$y = f(x-h)+k$ has domain $[a+h, b+h]$ and range $[c+k, d+k]$.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Translations Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$y = (x+5)^2$ is the graph of $y=x^2$ shifted:',
            options: ['Right 5', 'Left 5', 'Up 5', 'Down 5'],
            correctAnswer: 1,
            explanation: '$x+5 = x-(-5)$, so $h = -5$ → shift left 5.'
          },
          {
            question: 'The vertex of $y = |x-3| - 7$ is at:',
            options: ['$(3, -7)$', '$(-3, 7)$', '$(-3, -7)$', '$(3, 7)$'],
            correctAnswer: 0,
            explanation: 'Shift right 3, down 7: vertex $(3, -7)$.'
          },
          {
            question: '$y = \\sqrt{x} + 4$ shifts the graph:',
            options: ['Left 4', 'Right 4', 'Up 4', 'Down 4'],
            correctAnswer: 2,
            explanation: 'Adding 4 outside the function shifts up.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Translation Practice** 🧮

**1)** The graph of $y=x^2$ is shifted left 3 and up 2. New equation vertex $h$ = ?

**2)** Same: vertex $k$ = ?

**3)** $y = (x+1)^3 - 4$ has inflection point at $x$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-3', '2', '-1'],
        hint1: 'Left 3 means $h = -3$.',
        hint2: 'Up 2 means $k = 2$.',
        hint3: '$x^3$ has inflection at $x=0$. Shifted left 1: $x=-1$.',
        explanation: '1) $h = -3$. 2) $k = 2$. Equation: $y = (x+3)^2+2$. 3) $x = -1$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Translation Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x-h)$ shifts the graph:',
            options: ['Left $h$', 'Right $h$', 'Up $h$', 'Down $h$'],
            correctAnswer: 1
          },
          {
            label: '$f(x) + k$ shifts the graph:',
            options: ['Left $k$', 'Right $k$', 'Up $k$', 'Down $k$'],
            correctAnswer: 2
          },
          {
            label: 'Translations change:',
            options: ['The shape of the graph', 'The position of the graph', 'Both shape and position'],
            correctAnswer: 1
          },
          {
            label: 'The asymptote of $y = \\frac{1}{x-2}+3$ is:',
            options: ['$y = 2$', '$y = 3$', '$y = -3$', '$y = 0$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Right $h$', 'Up $k$', 'The position of the graph', '$y = 3$'],
        hint1: 'Inside the function, opposite direction.',
        hint2: 'Outside the function, same direction.',
        hint3: 'Translations only move, they do not stretch or reflect.',
        explanation: '$f(x-h)$: right $h$. $f(x)+k$: up $k$. Translations preserve shape. HA shifts from $y=0$ to $y=3$.'
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
            question: 'If $f(x)$ has domain $[0, 5]$, then $f(x-3)$ has domain:',
            options: ['$[0, 5]$', '$[-3, 2]$', '$[3, 8]$', '$[0, 8]$'],
            correctAnswer: 2,
            explanation: 'Shift right 3: $[0+3, 5+3] = [3, 8]$.'
          },
          {
            question: 'Which transformation moves $(1, 4)$ to $(3, 1)$?',
            options: ['Right 2, down 3', 'Left 2, up 3', 'Right 2, up 3', 'Left 2, down 3'],
            correctAnswer: 0,
            explanation: '$x$: $1 \\to 3$ (right 2). $y$: $4 \\to 1$ (down 3).'
          }
        ]
      }
    }
  ]
};
