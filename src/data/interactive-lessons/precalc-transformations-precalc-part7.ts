export const precalcTransformationsPart7Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Transformations — Full Synthesis

**Part 7 of 7**

### Master Checklist

| Transformation | Formula | Effect |
|:--------------|:--------|:-------|
| Vertical shift | $f(x)+k$ | Up ($k>0$) or down ($k<0$) |
| Horizontal shift | $f(x-h)$ | Right ($h>0$) or left ($h<0$) |
| Vertical stretch | $af(x)$, $|a|>1$ | Narrower |
| Vertical compress | $af(x)$, $|a|<1$ | Wider |
| Horizontal stretch | $f(bx)$, $|b|<1$ | Wider |
| Horizontal compress | $f(bx)$, $|b|>1$ | Narrower |
| Reflect $x$-axis | $-f(x)$ | Flip vertically |
| Reflect $y$-axis | $f(-x)$ | Flip horizontally |

### The Master Formula

$$y = a \\cdot f(b(x-h))+k$$

Transform point $(x,y) \\to \\left(\\frac{x}{b}+h,\\; ay+k\\right)$

### Even & Odd Functions

- **Even**: $f(-x) = f(x)$ — symmetric about $y$-axis
- **Odd**: $f(-x) = -f(x)$ — symmetric about origin
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 🧠 Problem-Solving Strategies

### Strategy 1: Transform Key Points

Given $y = -2f(x+1)-3$ and parent points $\\{(-2,4), (0,0), (2,4)\\}$:

| Parent $(x,y)$ | Shift: $(x-1, y)$ | Scale: $(x-1, -2y-3)$ |
|:------|:------|:------|
| $(-2, 4)$ | $(-3, 4)$ | $(-3, -11)$ |
| $(0, 0)$ | $(-1, 0)$ | $(-1, -3)$ |
| $(2, 4)$ | $(1, 4)$ | $(1, -11)$ |

### Strategy 2: Identify from Description

"Graph $y = \\sqrt{x}$, shift left 4, stretch vertically by 3, reflect, shift up 2."

$$y = -3\\sqrt{x+4}+2$$

### Strategy 3: Match Domain/Range

Parent $y = \\sqrt{x}$: domain $[0,\\infty)$, range $[0,\\infty)$.

$y = -3\\sqrt{x+4}+2$: domain $[-4,\\infty)$, range $(-\\infty, 2]$.

- Domain shifts by $h = -4$ (left 4)
- Range: max is $k = 2$, goes down (reflected)
      `
    },
    {
      id: 'p7-connect',
      type: 'text' as const,
      content: `
## 🔗 Connections to Calculus

### Transformations Preserve Shape

If $f'(x_0) = m$ (slope at $x_0$), then for $g(x) = af(b(x-h))+k$:

$$g'(x) = ab \\cdot f'(b(x-h))$$

The derivative scales by $ab$! This is the **chain rule** preview.

### Domain & Range Transformations

| Operation | Domain | Range |
|:----------|:-------|:------|
| $f(x)+k$ | Same | Shifts by $k$ |
| $f(x-h)$ | Shifts by $h$ | Same |
| $af(x)$ | Same | Scales by $a$ |
| $f(bx)$ | Scales by $1/b$ | Same |

### Function Composition as Transformation

$g(x) = 2f(x-3)+1$ is really $g = T \\circ f$ where $T(y) = 2y+1$ and the input is shifted.

**Transformations unite algebra, geometry, and calculus!**
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
            question: '$y = -3|x+2|-5$: vertex and opening direction?',
            options: ['$(-2, -5)$, opens down', '$(2, -5)$, opens up', '$(-2, 5)$, opens down', '$(2, 5)$, opens up'],
            correctAnswer: 0,
            explanation: '$h=-2, k=-5 \\implies$ vertex $(-2,-5)$. $a=-3<0$: opens down.'
          },
          {
            question: 'If $f$ has domain $[0, 4]$ and range $[1, 5]$, what is the range of $-2f(x)+3$?',
            options: ['$[-7, 1]$', '$[-7, -1]$', '$[1, 7]$', '$[-1, 7]$'],
            correctAnswer: 0,
            explanation: 'Range of $f$: $[1,5]$. $-2[1,5] = [-10,-2]$. $[-10,-2]+3 = [-7, 1]$.'
          },
          {
            question: 'Which transform changes the period of $\\sin x$?',
            options: ['$3\\sin x$', '$\\sin(x-\\pi)$', '$\\sin(2x)$', '$\\sin(x)+4$'],
            correctAnswer: 2,
            explanation: '$\\sin(2x)$: period = $2\\pi/2 = \\pi$. Amplitude and shifts do not affect period.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Master Calculations** 🧮

**1)** $y = 4(x-1)^2-3$: the $y$-intercept ($x=0$, $y$ = ?)

**2)** $y = -|x+3|+7$: the $x$-intercepts are $x = 4$ and $x = $ ?

**3)** Domain of $y = \\sqrt{2x-6}$: $x \\geq$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-10', '3'],
        hint1: '$y = 4(0-1)^2-3 = 4-3 = 1$.',
        hint2: '$0 = -|x+3|+7 \\implies |x+3| = 7 \\implies x = 4$ or $x = -10$.',
        hint3: '$2x-6 \\geq 0 \\implies x \\geq 3$.',
        explanation: '1) $1$. 2) $-10$. 3) $3$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Transformations Master** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(-x)$ produces:',
            options: ['Reflection over $x$-axis', 'Reflection over $y$-axis', 'Reflection over origin', '180° rotation'],
            correctAnswer: 1
          },
          {
            label: '$y = f(x-h)+k$ — the vertex/key point is at:',
            options: ['$(h, k)$', '$(-h, k)$', '$(-h, -k)$', '$(k, h)$'],
            correctAnswer: 0
          },
          {
            label: 'A wider parabola than $y = x^2$ has $|a|$:',
            options: ['$> 1$', '$= 1$', '$< 1$', 'Undefined'],
            correctAnswer: 2
          },
          {
            label: 'Horizontal stretch by 3 means replacing $x$ with:',
            options: ['$3x$', '$x/3$', '$x-3$', '$x+3$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Reflection over $y$-axis', '$(h, k)$', '$< 1$', '$x/3$'],
        hint1: '$f(-x)$ replaces input with opposite: horizontal flip.',
        hint2: 'Standard form: $f(x-h)+k$.',
        hint3: 'Wider = compressed = $|a| < 1$.',
        explanation: '$f(-x)$: reflect $y$-axis. Key point: $(h,k)$. Wider: $|a|<1$. Stretch by 3: $f(x/3)$.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Given $g(x) = -f(2x)+3$ and $f(4) = 5$: what is $g(2)$?',
            options: ['$-2$', '$8$', '$-7$', '$13$'],
            correctAnswer: 0,
            explanation: '$g(2) = -f(2 \\cdot 2)+3 = -f(4)+3 = -5+3 = -2$.'
          },
          {
            question: 'Transform $y = x^2$: reflect $x$-axis, right 3, up 7. The equation:',
            options: ['$y = -(x-3)^2+7$', '$y = -(x+3)^2+7$', '$y = (x-3)^2-7$', '$y = -(x-3)^2-7$'],
            correctAnswer: 0,
            explanation: 'Reflect: $-x^2$. Right 3: $-(x-3)^2$. Up 7: $-(x-3)^2+7$.'
          }
        ]
      }
    }
  ]
};
