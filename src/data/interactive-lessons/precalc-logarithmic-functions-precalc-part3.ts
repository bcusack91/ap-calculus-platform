export const precalcLogarithmicPart3Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📈 Logarithmic Functions — Transformations & Graphs

**Part 3 of 7**

The general transformed logarithmic function:

$$\\boxed{g(x) = a \\cdot \\log_b(x - h) + k}$$

### Parameter Effects

| Parameter | Effect | Example |
|:----------|:-------|:--------|
| $a$ | Vertical stretch ($|a|>1$) / compression ($|a|<1$); reflection over $x$-axis if $a<0$ | $a = -2$: flips & stretches ×2 |
| $h$ | Horizontal shift: right if $h>0$, left if $h<0$ | $h = 3$: shift right 3 |
| $k$ | Vertical shift: up if $k>0$, down if $k<0$ | $k = -1$: shift down 1 |
| $b$ | Base controls steepness: larger $b$ = less steep | $b = 10$ vs $b = 2$ |
      `
    },
    {
      id: 'p3-parent',
      type: 'text' as const,
      content: `
## 📊 The Parent Function $y = \\log_b x$

### Key Points of $y = \\log_2 x$ (parent)

| $x$ | $y = \\log_2 x$ |
|:----|:----------------|
| $\\frac{1}{4}$ | $-2$ |
| $\\frac{1}{2}$ | $-1$ |
| $1$ | $0$ |
| $2$ | $1$ |
| $4$ | $2$ |
| $8$ | $3$ |

### Features of Every Parent Log Function

| Feature | Value |
|:--------|:------|
| Domain | $(0, \\infty)$ |
| Range | $(-\\infty, \\infty)$ |
| $x$-intercept | $(1, 0)$ — always |
| Vertical asymptote | $x = 0$ |
| Increasing/decreasing | Increasing if $b > 1$; decreasing if $0 < b < 1$ |
      `
    },
    {
      id: 'p3-transformations',
      type: 'text' as const,
      content: `
## 🔄 Applying Transformations Step by Step

### Worked Example

> **Graph $g(x) = -2\\log_3(x + 1) + 4$ and identify all key features.**

Start from the parent $y = \\log_3 x$ and track the anchor point $(1, 0)$:

| Step | Transformation | Anchor Point | VA |
|:-----|:--------------|:-------------|:---|
| Parent | $y = \\log_3 x$ | $(1, 0)$ | $x = 0$ |
| 1. Replace $x$ with $x+1$ | Shift left $1$ | $(0, 0)$ | $x = -1$ |
| 2. Multiply by $-2$ | Reflect & stretch | $(0, 0)$ | $x = -1$ |
| 3. Add $4$ | Shift up $4$ | $(0, 4)$ | $x = -1$ |

### Key Features of $g(x) = -2\\log_3(x + 1) + 4$

| Feature | Value |
|:--------|:------|
| Domain | $(-1, \\infty)$ |
| Range | $(-\\infty, \\infty)$ |
| VA | $x = -1$ |
| New "anchor" | $(0, 4)$ |
| Behavior | **Decreasing** (because $a = -2 < 0$) |

### Quick Rules for Domain & VA

$$\\boxed{\\text{Domain of } \\log_b(x - h): \\quad x > h \\quad \\text{VA at } x = h}$$
      `
    },
    {
      id: 'p3-finding-x-int',
      type: 'text' as const,
      content: `
## 🎯 Finding the $x$-Intercept Algebraically

Set $g(x) = 0$ and solve:

$-2\\log_3(x + 1) + 4 = 0$

$\\log_3(x + 1) = 2$

$x + 1 = 3^2 = 9$

$x = 8$

**$x$-intercept:** $(8, 0)$ ✔

### General Method

For $g(x) = a\\log_b(x-h)+k$, set $g = 0$:

$$\\log_b(x - h) = -\\frac{k}{a} \\implies x = b^{-k/a} + h$$

### Finding the $y$-Intercept

Set $x = 0$: only exists if $0$ is in the domain (i.e., $h < 0$).

$g(0) = a\\log_b(0 - h) + k = a\\log_b(-h) + k$
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Transformation Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The vertical asymptote of $f(x) = \\ln(x - 5)$ is:',
            options: [
              '$x = 0$',
              '$x = 5$',
              '$x = -5$',
              '$y = 5$'
            ],
            correctAnswer: 1,
            explanation: '$\\ln(x-5)$ shifts right $5$. VA moves from $x = 0$ to $x = 5$. Domain: $(5, \\infty)$.'
          },
          {
            question: 'The graph of $g(x) = \\log_2(x) + 3$ compared to $y = \\log_2 x$ is:',
            options: [
              'Shifted right 3',
              'Shifted left 3',
              'Shifted up 3',
              'Vertically stretched by 3'
            ],
            correctAnswer: 2,
            explanation: 'Adding $3$ outside the log shifts every point up by $3$. The VA stays at $x = 0$.'
          },
          {
            question: 'Which function is decreasing with VA at $x = 2$?',
            options: [
              '$f(x) = \\log_3(x - 2)$',
              '$f(x) = -\\log_3(x - 2)$',
              '$f(x) = \\log_3(x + 2)$',
              '$f(x) = -\\log_3(x + 2)$'
            ],
            correctAnswer: 1,
            explanation: 'VA at $x = 2$ requires $(x - 2)$ inside. Negative coefficient makes it decreasing.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Graph Analysis** 🧮

**1)** Find the $x$-intercept of $f(x) = \\log_2(x - 3) - 4$. Set $f = 0$, solve for $x$. (e.g., for $\\log_3(x-1) - 2 = 0$: $\\log_3(x-1) = 2$, $x-1 = 9$, $x = 10$)

**2)** The domain of $g(x) = \\ln(2x + 6)$ is $x > $ what value? (e.g., for $\\ln(3x + 9)$: set $3x + 9 > 0$, so $x > -3$)

**3)** If $h(x) = 5\\log(x) - 10$, find $h(100)$. (e.g., $3\\log(1000) - 6 = 3(3) - 6 = 3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['19', '-3', '0'],
        hint1: '$\\log_2(x-3) = 4 \\implies x - 3 = 2^4 = 16$.',
        hint2: '$2x + 6 > 0 \\implies x > ?$.',
        hint3: '$\\log(100) = \\log(10^2) = 2$. Then $5(2) - 10 = ?$.',
        explanation: '1) $\\log_2(x-3) = 4$, so $x - 3 = 16$, $x = 19$. 2) $2x + 6 > 0 \\implies x > -3$. 3) $h(100) = 5\\log(100) - 10 = 5(2) - 10 = 0$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Transformation Identification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = \\log_2(x - 4)$ is the parent shifted',
            options: ['left 4', 'right 4', 'up 4', 'down 4']
          },
          {
            label: 'A negative coefficient $a < 0$ causes a reflection over the',
            options: ['$y$-axis', '$x$-axis', 'line $y = x$', 'vertical asymptote']
          },
          {
            label: 'The VA of $f(x) = 3\\ln(x + 7) - 2$ is',
            options: ['$x = 7$', '$x = -7$', '$x = 2$', '$x = -2$']
          },
          {
            label: 'Adding $k$ outside the log shifts the graph',
            options: ['horizontally', 'vertically', 'diagonally', 'does not shift']
          }
        ],
        correctAnswers: ['right 4', '$x$-axis', '$x = -7$', 'vertically'],
        hint1: 'Replacing $x$ with $x - 4$ moves right.',
        hint2: 'Multiplying the output by a negative flips over which axis?',
        hint3: 'Set the argument $x + 7 = 0$.',
        explanation: '$(x-4)$ shifts right 4. Negative $a$ reflects over $x$-axis. VA: $x + 7 = 0 \\implies x = -7$. Adding $k$ shifts vertically.'
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
            question: 'The graph of $y = -\\log_2(x-1) + 3$ passes through which point?',
            options: [
              '$(2, 3)$',
              '$(1, 3)$',
              '$(3, 2)$',
              '$(2, 0)$'
            ],
            correctAnswer: 0,
            explanation: '$g(2) = -\\log_2(2-1) + 3 = -\\log_2(1) + 3 = 0 + 3 = 3$. So $(2, 3)$ is on the graph.'
          },
          {
            question: 'The range of any transformed log function $g(x) = a\\log_b(x-h)+k$ (with $a \\neq 0$) is:',
            options: [
              '$(k, \\infty)$',
              '$(0, \\infty)$',
              '$(-\\infty, \\infty)$',
              '$(h, \\infty)$'
            ],
            correctAnswer: 2,
            explanation: 'Logarithmic functions always have range $(-\\infty, \\infty)$ regardless of transformations (as long as $a \\neq 0$).'
          }
        ]
      }
    }
  ]
};
