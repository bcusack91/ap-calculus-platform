export const precalcExponentialPart2Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔄 Transformations of Exponential Graphs

**Part 2 of 7**

The parent exponential function is $f(x) = b^x$. Every transformation follows the general form:

$$\\boxed{g(x) = a \\cdot b^{x - h} + k}$$

| Parameter | Effect | Example on $2^x$ |
|:----------|:-------|:-----------------|
| $a$ | Vertical stretch/compress; if $a < 0$, reflect over $x$-axis | $-2^x$ flips graph upside down |
| $h$ | Horizontal shift (right if $h > 0$) | $2^{x-3}$ shifts right $3$ |
| $k$ | Vertical shift (up if $k > 0$) | $2^x + 5$ shifts up $5$ |
| Replace $x$ with $-x$ | Reflect over $y$-axis | $2^{-x} = \\left(\\frac{1}{2}\\right)^x$ |

> **Critical change:** The horizontal asymptote moves from $y = 0$ to $y = k$ whenever a vertical shift is applied.
      `
    },
    {
      id: 'p2-transformations-detail',
      type: 'text' as const,
      content: `
## 🧩 Transformation Breakdown

### Vertical Stretch & Reflection ($a$)

| Function | $a$ value | Effect |
|:---------|:----------|:-------|
| $3 \\cdot 2^x$ | $a = 3$ | Stretched vertically by factor $3$; $y$-int at $(0, 3)$ |
| $0.5 \\cdot 2^x$ | $a = 0.5$ | Compressed vertically; $y$-int at $(0, 0.5)$ |
| $-2^x$ | $a = -1$ | Reflected over $x$-axis; range becomes $(-\\infty, 0)$ |

### Horizontal & Vertical Shifts ($h$ and $k$)

| Function | Shift | New HA | New $y$-intercept |
|:---------|:------|:-------|:-------------------|
| $2^{x-2}$ | Right $2$ | $y = 0$ | $f(0) = 2^{-2} = 0.25$ |
| $2^{x+1}$ | Left $1$ | $y = 0$ | $f(0) = 2^1 = 2$ |
| $2^x + 4$ | Up $4$ | $y = 4$ | $f(0) = 1 + 4 = 5$ |
| $2^x - 3$ | Down $3$ | $y = -3$ | $f(0) = 1 - 3 = -2$ |

### Worked Example

> **Graph $g(x) = -3 \\cdot 2^{x+1} + 4$ starting from the parent $f(x) = 2^x$.**

| Step | Transformation | Key Point $(0,1) \\to$ | HA |
|:-----|:--------------|:----------------------|:---|
| Start | $2^x$ | $(0, 1)$ | $y = 0$ |
| Shift left $1$ | $2^{x+1}$ | $(-1, 1)$ | $y = 0$ |
| Stretch by $3$ | $3 \\cdot 2^{x+1}$ | $(-1, 3)$ | $y = 0$ |
| Reflect $x$-axis | $-3 \\cdot 2^{x+1}$ | $(-1, -3)$ | $y = 0$ |
| Shift up $4$ | $-3 \\cdot 2^{x+1} + 4$ | $(-1, 1)$ | $y = 4$ |

**Final:** HA at $y = 4$, $y$-intercept at $g(0) = -3(2) + 4 = -2$, range $(-\\infty, 4)$.
      `
    },
    {
      id: 'p2-domain-range',
      type: 'text' as const,
      content: `
## 📐 Domain & Range After Transformations

The domain of exponential functions is **always** $(-\\infty, \\infty)$ — no transformation changes this.

The range depends on $a$ and $k$:

| Condition | Range |
|:----------|:------|
| $a > 0$ | $(k, \\infty)$ |
| $a < 0$ | $(-\\infty, k)$ |

### Quick Check Method

To find the $y$-intercept of $g(x) = a \\cdot b^{x-h} + k$:

$$\\boxed{g(0) = a \\cdot b^{-h} + k}$$

To find where $g(x) = 0$ (if it crosses the $x$-axis):

Set $a \\cdot b^{x-h} + k = 0 \\implies b^{x-h} = -\\frac{k}{a}$

This has a solution only when $-\\frac{k}{a} > 0$ (i.e., $k$ and $a$ have opposite signs).
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Transformation Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the horizontal asymptote of $f(x) = 5 \\cdot 3^x - 7$?',
            options: [
              '$y = 5$',
              '$y = 3$',
              '$y = -7$',
              '$y = 0$'
            ],
            correctAnswer: 2,
            explanation: 'The vertical shift $k = -7$ moves the HA from $y = 0$ to $y = -7$. The stretch factor $a = 5$ does not affect the asymptote.'
          },
          {
            question: 'The graph of $g(x) = 2^{-x}$ is the same as:',
            options: [
              '$-2^x$ (reflection over $x$-axis)',
              '$\\left(\\frac{1}{2}\\right)^x$ (reflection over $y$-axis)',
              '$2^x - 1$ (shift down)',
              '$\\frac{1}{2^x}$ and $\\left(\\frac{1}{2}\\right)^x$ (both correct)'
            ],
            correctAnswer: 3,
            explanation: '$2^{-x} = (2^{-1})^x = \\left(\\frac{1}{2}\\right)^x = \\frac{1}{2^x}$. Replacing $x$ with $-x$ reflects over the $y$-axis, converting growth into decay.'
          },
          {
            question: 'Which transformation shifts the $y$-intercept of $2^x$ from $(0, 1)$ to $(0, 4)$ WITHOUT changing the HA?',
            options: [
              '$2^x + 3$',
              '$4 \\cdot 2^x$',
              '$2^{x-2}$',
              '$2^x + 4$'
            ],
            correctAnswer: 1,
            explanation: '$4 \\cdot 2^x$ at $x = 0$: $4 \\cdot 1 = 4$. HA stays at $y = 0$. Adding $3$ would give $y$-int $4$ but changes HA to $y = 3$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Transformation Drill** 🧮

**1)** Find the $y$-intercept of $g(x) = 6 \\cdot 3^{x-1} - 2$. (e.g., for $h(x) = 4 \\cdot 2^{x-2} + 1$: $h(0) = 4 \\cdot 2^{-2} + 1 = 4 \\cdot 0.25 + 1 = 2$)

**2)** What is the horizontal asymptote ($y$-value) of $f(x) = -10 \\cdot 5^x + 12$? (e.g., $3 \\cdot 2^x - 8$ has HA $y = -8$)

**3)** The function $f(x) = 2^{x+3}$ is equivalent to $c \\cdot 2^x$. What is $c$? (e.g., $3^{x+2} = 9 \\cdot 3^x$ so $c = 9$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '12', '8'],
        hint1: '$g(0) = 6 \\cdot 3^{-1} - 2 = 6 \\cdot \\frac{1}{3} - 2$.',
        hint2: 'The HA is determined by $k$ alone. What is $k$ here?',
        hint3: '$2^{x+3} = 2^3 \\cdot 2^x$. What is $2^3$?',
        explanation: '1) $g(0) = 6(\\frac{1}{3}) - 2 = 2 - 2 = 0$. 2) $k = 12$, so HA is $y = 12$. 3) $2^{x+3} = 2^3 \\cdot 2^x = 8 \\cdot 2^x$, so $c = 8$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Transformation** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Replacing $x$ with $x - 5$ in $2^x$ shifts the graph',
            options: ['left 5', 'right 5', 'up 5', 'down 5']
          },
          {
            label: 'Multiplying $2^x$ by $-1$ reflects the graph over the',
            options: ['$x$-axis', '$y$-axis', 'line $y = x$', 'origin']
          },
          {
            label: 'Adding $k > 0$ to $b^x$ changes the range to',
            options: ['$(k, \\infty)$', '$(-\\infty, k)$', '$(0, k)$', '$(0, \\infty)$']
          },
          {
            label: 'The domain of ANY transformed exponential $a \\cdot b^{x-h} + k$ is',
            options: ['$(0, \\infty)$', '$(h, \\infty)$', '$(-\\infty, \\infty)$', 'depends on $a$']
          }
        ],
        correctAnswers: ['right 5', '$x$-axis', '$(k, \\infty)$', '$(-\\infty, \\infty)$'],
        hint1: 'Inside the exponent: $x - h$ shifts right by $h$.',
        hint2: 'Multiplying outputs by $-1$ flips them vertically.',
        hint3: 'When $a > 0$, outputs are positive; adding $k$ shifts the minimum up.',
        explanation: 'Horizontal shifts are opposite in sign. Multiplying by $-1$ reflects over $x$-axis. Adding $k > 0$ with $a > 0$ changes range to $(k, \\infty)$. Domain is always all reals.'
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
            question: 'The function $g(x) = -2 \\cdot 4^{x-1} + 8$ has range:',
            options: [
              '$(8, \\infty)$',
              '$(-\\infty, 8)$',
              '$(-\\infty, -2)$',
              '$(0, \\infty)$'
            ],
            correctAnswer: 1,
            explanation: 'Since $a = -2 < 0$, the exponential term $-2 \\cdot 4^{x-1}$ is always negative. Adding $8$ means outputs approach $8$ from below but never reach it. Range: $(-\\infty, 8)$.'
          },
          {
            question: 'Starting from $f(x) = 3^x$, which sequence produces $g(x) = 3^{x+2} - 9$?',
            options: [
              'Shift left $2$, then shift down $9$',
              'Shift right $2$, then shift down $9$',
              'Shift left $2$, then shift up $9$',
              'Stretch by $9$, then shift left $2$'
            ],
            correctAnswer: 0,
            explanation: '$x + 2$ means $h = -2$, which is a shift left by $2$. Then $-9$ means $k = -9$, a shift down by $9$. Order: left $2$, down $9$.'
          }
        ]
      }
    }
  ]
};
