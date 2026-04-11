export const precalcTransformationsPart4Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔗 Combining Multiple Transformations

**Part 4 of 7**

### The General Form

$$y = a \\cdot f(b(x - h)) + k$$

### Order of Operations

**Apply in this order:**
1. Horizontal shift (inside): $x - h$
2. Horizontal stretch/reflect (inside): multiply by $b$
3. Vertical stretch/reflect (outside): multiply by $a$
4. Vertical shift (outside): add $k$

> 💡 **Inside** transformations affect $x$ (horizontal, reversed).
> **Outside** transformations affect $y$ (vertical, as expected).

### Example: $y = -2(x+3)^2 + 5$

1. Shift left 3 ($h = -3$)
2. Vertical stretch by 2, reflect over $x$-axis ($a = -2$)
3. Shift up 5 ($k = 5$)

Vertex: $(-3, 5)$, opens downward, narrower than $x^2$.
      `
    },
    {
      id: 'p4-transform',
      type: 'text' as const,
      content: `
## 📝 Transforming Key Points

### Example: Transform $y = x^3$ into $y = -\\frac{1}{2}(x-1)^3+4$

$a = -1/2$, $h = 1$, $k = 4$.

| Parent $(x, y)$ | After shift: $(x+1, y)$ | After scale: $(x+1, -y/2+4)$ |
|:----------------|:------------------------|:-----------------------------|
| $(-2, -8)$ | $(-1, -8)$ | $(-1, 8)$ |
| $(-1, -1)$ | $(0, -1)$ | $(0, 4.5)$ |
| $(0, 0)$ | $(1, 0)$ | $(1, 4)$ |
| $(1, 1)$ | $(2, 1)$ | $(2, 3.5)$ |
| $(2, 8)$ | $(3, 8)$ | $(3, 0)$ |

### General Point Transformation

$(x, y) \\to \\left(\\frac{x}{b}+h, \\; ay+k\\right)$
      `
    },
    {
      id: 'p4-write',
      type: 'text' as const,
      content: `
## ✏️ Writing Equations from Transformations

### Word → Equation

"The graph of $y=\\sqrt{x}$ is reflected over the $x$-axis, stretched vertically by 3, shifted right 2, and shifted down 1."

$$y = -3\\sqrt{x-2}-1$$

### Graph → Equation

1. Identify the parent function
2. Find the new vertex/key point → determines $h, k$
3. Check orientation (reflected?) → determines sign of $a$
4. Use another point to find $|a|$

**Example**: Parabola, vertex $(2, -1)$, opens down, passes through $(3, -3)$.

$y = a(x-2)^2-1$. $-3 = a(1)^2-1 \\implies a = -2$.

$$y = -2(x-2)^2-1$$
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Combined Transformations Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$y = 3|x+1|-2$ involves which transformations of $y=|x|$?',
            options: ['Left 1, stretch 3, down 2', 'Right 1, stretch 3, up 2', 'Left 1, compress 1/3, down 2', 'Right 1, compress 1/3, up 2'],
            correctAnswer: 0,
            explanation: '$h=-1$ (left 1), $a=3$ (stretch 3), $k=-2$ (down 2).'
          },
          {
            question: 'Apply $(x,y)\\to(x,y)$ formula for $y=-f(x-4)+1$ to point $(2,3)$:',
            options: ['$(6, -2)$', '$(6, 4)$', '$(-2, -2)$', '$(6, -4)$'],
            correctAnswer: 0,
            explanation: '$x \\to x+4 = 6$. $y \\to -y+1 = -3+1 = -2$. Point: $(6,-2)$.'
          },
          {
            question: 'Which transformation is applied FIRST (innermost)?',
            options: ['Vertical shift', 'Vertical stretch', 'Horizontal shift', 'Horizontal stretch'],
            correctAnswer: 2,
            explanation: 'Horizontal shift (inside the function) is applied first.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Combined Transform Practice** 🧮

For $y = -2(x-3)^2+7$:

**1)** Vertex $h$ = ?

**2)** Vertex $k$ = ?

**3)** The point $(4, y)$ on this graph: $y$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '7', '5'],
        hint1: '$h = 3$ from $(x-3)$.',
        hint2: '$k = 7$ from $+7$.',
        hint3: '$y = -2(4-3)^2+7 = -2+7 = 5$.',
        explanation: '1) $3$. 2) $7$. 3) $-2(1)+7 = 5$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Order of Transformations** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $y = af(b(x-h))+k$, the $h$ controls:',
            options: ['Vertical shift', 'Horizontal shift', 'Vertical stretch', 'Horizontal stretch'],
            correctAnswer: 1
          },
          {
            label: 'The $a$ controls:',
            options: ['Vertical stretch/reflect', 'Horizontal stretch/reflect', 'Shift', 'Period'],
            correctAnswer: 0
          },
          {
            label: 'Transformations inside the function are:',
            options: ['Applied as expected', 'Applied in reverse', 'Applied last'],
            correctAnswer: 1
          },
          {
            label: '$y = -3\\sqrt{x+2}-5$: the graph opens:',
            options: ['Upward', 'Downward (reflected)', 'Left', 'Right'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Horizontal shift', 'Vertical stretch/reflect', 'Applied in reverse', 'Downward (reflected)'],
        hint1: '$h$ appears in $(x-h)$: horizontal.',
        hint2: '$a$ multiplies the whole function: vertical.',
        hint3: 'Inside = horizontal = reversed.',
        explanation: '$h$: horizontal shift. $a$: vertical stretch/reflect. Inside: reversed. $a=-3$: reflected.'
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
            question: 'Write the equation: $y=\\sqrt{x}$ shifted right 5, reflected over $x$-axis, shifted up 3.',
            options: ['$y = -\\sqrt{x-5}+3$', '$y = \\sqrt{-x+5}+3$', '$y = -\\sqrt{x+5}-3$', '$y = 3-\\sqrt{x+5}$'],
            correctAnswer: 0,
            explanation: 'Right 5: $\\sqrt{x-5}$. Reflect: $-\\sqrt{x-5}$. Up 3: $-\\sqrt{x-5}+3$.'
          },
          {
            question: 'For $y = 4f(x)+1$, the $y$-intercept of $f$ at $(0,2)$ moves to:',
            options: ['$(0, 9)$', '$(0, 3)$', '$(0, 8)$', '$(4, 3)$'],
            correctAnswer: 0,
            explanation: '$4(2)+1 = 9$. Point: $(0, 9)$.'
          }
        ]
      }
    }
  ]
};
