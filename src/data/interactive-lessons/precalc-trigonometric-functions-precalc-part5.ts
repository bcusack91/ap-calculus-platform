export const precalcTrigFunctionsPart5Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📊 Trigonometric Functions — Graphing Sinusoids

**Part 5 of 7**

The general sinusoidal form is:

$$\\boxed{y = a\\sin\\bigl(b(x - c)\\bigr) + d \\qquad \\text{or} \\qquad y = a\\cos\\bigl(b(x - c)\\bigr) + d}$$

### Parameter Summary

| Parameter | Name | Formula / Effect |
|:----------|:-----|:-----------------|
| $a$ | **Amplitude** | $|a|$ = half the height; if $a < 0$, graph is reflected over the midline |
| $b$ | **Frequency** | Period $= \\frac{2\\pi}{|b|}$ |
| $c$ | **Phase shift** | Shifts graph **right** by $c$ (left if $c < 0$) |
| $d$ | **Vertical shift** | Midline at $y = d$; range becomes $[d - |a|,\\; d + |a|]$ |

### Quick Reference

| Measurement | Formula |
|:------------|:--------|
| Period | $\\frac{2\\pi}{|b|}$ |
| Amplitude | $|a|$ |
| Maximum | $d + |a|$ |
| Minimum | $d - |a|$ |
| Midline | $y = d$ |
      `
    },
    {
      id: 'p5-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples — Reading Parameters

### Example 1: $y = 3\\sin(2x) - 1$

| Parameter | Value | Meaning |
|:----------|:------|:--------|
| $a = 3$ | Amplitude $= 3$ | Height stretches by factor of $3$ |
| $b = 2$ | Period $= \\frac{2\\pi}{2} = \\pi$ | Completes one cycle in $\\pi$ units |
| $c = 0$ | No phase shift | Starts at the origin |
| $d = -1$ | Midline at $y = -1$ | Range: $[-4, 2]$ |

### Example 2: $y = -2\\cos\\left(\\frac{\\pi}{3}(x - 1)\\right) + 5$

| Parameter | Value | Meaning |
|:----------|:------|:--------|
| $a = -2$ | Amplitude $= 2$, reflected | Starts at a **minimum** instead of maximum |
| $b = \\frac{\\pi}{3}$ | Period $= \\frac{2\\pi}{\\pi/3} = 6$ | One full cycle every $6$ units |
| $c = 1$ | Phase shift right $1$ | Cycle starts at $x = 1$ |
| $d = 5$ | Midline at $y = 5$ | Range: $[3, 7]$ |

### Key Difference: Sine vs Cosine Starting Points

| Function | Starts at midline | Goes to... |
|:---------|:-----------------|:-----------|
| $\\sin(x)$ | Midline ($y = 0$) | Up (if $a > 0$) |
| $\\cos(x)$ | Maximum ($y = a$) | Down toward midline |
      `
    },
    {
      id: 'p5-tangent',
      type: 'text' as const,
      content: `
## 📈 Graphing Tangent & Cotangent

### Tangent: $y = a\\tan(bx - c) + d$

| Feature | Value |
|:--------|:------|
| Period | $\\frac{\\pi}{|b|}$ (NOT $\\frac{2\\pi}{|b|}$) |
| Vertical asymptotes | $bx - c = \\pm\\frac{\\pi}{2} + n\\pi$ |
| No amplitude | Range is $(-\\infty, \\infty)$ |
| Passes through midline | At the center of each period |

### Example: $y = \\tan(2x)$

Period $= \\frac{\\pi}{2}$. Asymptotes where $2x = \\frac{\\pi}{2} + n\\pi$, i.e., $x = \\frac{\\pi}{4} + \\frac{n\\pi}{2}$.

### Cotangent: $y = a\\cot(bx - c) + d$

Same period formula $\\frac{\\pi}{|b|}$, but asymptotes where $bx - c = n\\pi$ (where $\\sin = 0$).

> **Tangent** goes from $-\\infty$ to $+\\infty$ (increasing) between asymptotes.  
> **Cotangent** goes from $+\\infty$ to $-\\infty$ (decreasing) between asymptotes.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Graph Reading Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the period of $y = 4\\sin(3x) + 2$?',
            options: [
              '$3$',
              '$\\frac{2\\pi}{3}$',
              '$6\\pi$',
              '$\\frac{\\pi}{3}$'
            ],
            correctAnswer: 1,
            explanation: 'Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{3}$. The amplitude ($4$) and vertical shift ($2$) do not affect the period.'
          },
          {
            question: 'For $y = -5\\cos(x - \\frac{\\pi}{4}) + 3$, the range is:',
            options: [
              '$[-2, 8]$',
              '$[-5, 5]$',
              '$[-8, 2]$',
              '$[3, 8]$'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude $= |{-5}| = 5$, midline $= 3$. Range $= [3 - 5, 3 + 5] = [-2, 8]$.'
          },
          {
            question: 'The period of $y = 2\\tan(\\frac{x}{2})$ is:',
            options: [
              '$\\frac{\\pi}{2}$',
              '$\\pi$',
              '$2\\pi$',
              '$4\\pi$'
            ],
            correctAnswer: 2,
            explanation: 'For tangent, period $= \\frac{\\pi}{|b|} = \\frac{\\pi}{1/2} = 2\\pi$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Graph Analysis** 🧮

**1)** Find the amplitude of $y = -7\\cos(4x) + 1$. Write a positive number. (e.g., $y = -3\\sin(x)$ has amplitude $|-3| = 3$)

**2)** Find the period of $y = \\sin(\\frac{\\pi}{2}x)$. Write as an integer. (e.g., $y = \\sin(\\pi x)$: period $= 2\\pi / \\pi = 2$)

**3)** A sinusoid has maximum $10$ and minimum $2$. What is the midline? Write as an integer. (e.g., max $8$, min $4$: midline $= (8+4)/2 = 6$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '4', '6'],
        hint1: 'Amplitude $= |a|$. The negative sign means reflection, not a change in amplitude.',
        hint2: 'Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{\\pi/2}$. Dividing by a fraction means multiplying by its reciprocal.',
        hint3: 'Midline $= \\frac{\\text{max} + \\text{min}}{2}$.',
        explanation: '1) Amplitude $= |-7| = 7$. 2) Period $= \\frac{2\\pi}{\\pi/2} = \\frac{2\\pi \\cdot 2}{\\pi} = 4$. 3) Midline $= \\frac{10 + 2}{2} = 6$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Graphing Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A negative $a$ value causes a',
            options: ['horizontal stretch', 'reflection over the midline', 'phase shift', 'period change']
          },
          {
            label: 'Phase shift $c$ moves the graph',
            options: ['up or down', 'left or right', 'stretches vertically', 'changes the period']
          },
          {
            label: 'The period formula for tangent is',
            options: ['$\\frac{2\\pi}{|b|}$', '$\\frac{\\pi}{|b|}$', '$\\frac{\\pi}{2|b|}$', '$|b|\\pi$']
          },
          {
            label: '$\\cos(x)$ starts its cycle at the',
            options: ['midline going up', 'midline going down', 'maximum', 'minimum']
          }
        ],
        correctAnswers: ['reflection over the midline', 'left or right', '$\\frac{\\pi}{|b|}$', 'maximum'],
        hint1: 'When $a < 0$, peaks become valleys and vice versa.',
        hint2: '$c$ appears in the horizontal part of the formula — it shifts along the $x$-axis.',
        hint3: 'Tangent has period $\\pi$ (not $2\\pi$), so the formula uses $\\pi$ in the numerator.',
        explanation: 'Negative $a$ reflects the graph. Phase shift $c$ is horizontal (left/right). Tangent period $= \\pi/|b|$. Cosine starts at its maximum value when $a > 0$.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Write the equation of a sinusoid with amplitude $3$, period $4\\pi$, phase shift right $\\frac{\\pi}{2}$, and midline $y = -1$.',
            options: [
              '$y = 3\\sin\\left(\\frac{1}{2}(x - \\frac{\\pi}{2})\\right) - 1$',
              '$y = 3\\sin\\left(2(x - \\frac{\\pi}{2})\\right) - 1$',
              '$y = 3\\sin\\left(\\frac{1}{2}x - \\frac{\\pi}{2}\\right) - 1$',
              '$y = \\frac{1}{2}\\sin\\left(3(x - \\frac{\\pi}{2})\\right) - 1$'
            ],
            correctAnswer: 0,
            explanation: 'Period $= 4\\pi = \\frac{2\\pi}{b}$, so $b = \\frac{1}{2}$. With $a = 3$, $c = \\frac{\\pi}{2}$, $d = -1$: $y = 3\\sin(\\frac{1}{2}(x - \\frac{\\pi}{2})) - 1$.'
          },
          {
            question: 'How many complete cycles does $y = \\sin(6x)$ make on $[0, 2\\pi]$?',
            options: [
              '$3$',
              '$6$',
              '$12$',
              '$1$'
            ],
            correctAnswer: 1,
            explanation: 'Period $= \\frac{2\\pi}{6} = \\frac{\\pi}{3}$. Interval length $= 2\\pi$. Cycles $= \\frac{2\\pi}{\\pi/3} = 6$.'
          }
        ]
      }
    }
  ]
}
