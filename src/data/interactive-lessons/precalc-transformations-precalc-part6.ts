export const precalcTransformationsPart6Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📐 Writing Equations from Graphs

**Part 6 of 7**

### The Reverse Problem

Instead of transforming a parent → graph, we now go from **graph → equation**.

### Step-by-Step Strategy

1. **Identify the parent** — What shape is it? (parabola, V, S-curve, etc.)
2. **Locate the key point** — Vertex, center, inflection point → gives $(h, k)$
3. **Check orientation** — Is it flipped? → sign of $a$
4. **Find the scale** — Plug in a visible point to solve for $|a|$
5. **Verify** — Test another point if possible

### Example: Parabola

Graph shows: vertex at $(1, -3)$, opens up, passes through $(3, 5)$.

- Parent: $y = x^2$
- Template: $y = a(x-1)^2-3$
- Solve: $5 = a(3-1)^2-3 \\implies 8 = 4a \\implies a = 2$
- **Answer**: $y = 2(x-1)^2-3$
      `
    },
    {
      id: 'p6-abs',
      type: 'text' as const,
      content: `
## ✏️ Absolute Value & Square Root

### Absolute Value: $y = a|x-h|+k$

- Vertex at $(h, k)$
- Opens up: $a > 0$; opens down: $a < 0$
- Slope of right branch = $a$; left branch = $-a$

**Example**: V-shape, vertex $(2, 1)$, passes through $(5, -5)$.

$-5 = a|5-2|+1 \\implies -6 = 3a \\implies a = -2$

$$y = -2|x-2|+1$$

### Square Root: $y = a\\sqrt{x-h}+k$

- Starting point at $(h, k)$ (where the curve begins)
- $a > 0$: curve goes up; $a < 0$: curve goes down

**Example**: Starts at $(-1, 3)$, passes through $(3, 7)$.

$7 = a\\sqrt{3-(-1)}+3 \\implies 4 = 2a \\implies a = 2$

$$y = 2\\sqrt{x+1}+3$$
      `
    },
    {
      id: 'p6-trig',
      type: 'text' as const,
      content: `
## 🌊 Writing Trig Equations from Graphs

### $y = A\\sin(B(x-C))+D$ or $y = A\\cos(B(x-C))+D$

| Parameter | From Graph |
|:----------|:-----------|
| $A$ (amplitude) | $\\frac{\\text{max} - \\text{min}}{2}$ |
| $D$ (midline) | $\\frac{\\text{max} + \\text{min}}{2}$ |
| Period $= \\frac{2\\pi}{B}$ | Distance for one full cycle |
| $C$ (phase shift) | Horizontal offset from standard start |

### Example

Graph: max = 5, min = 1, period = $\\pi$, starts at max when $x = \\pi/4$.

- $A = \\frac{5-1}{2} = 2$
- $D = \\frac{5+1}{2} = 3$
- $B = \\frac{2\\pi}{\\pi} = 2$
- Starts at max → use cosine. Phase shift: $C = \\pi/4$

$$y = 2\\cos\\!\\left(2\\!\\left(x-\\frac{\\pi}{4}\\right)\\right)+3$$
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Writing Equations Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Parabola with vertex $(-2, 4)$ passing through $(0, 0)$:',
            options: ['$y = -(x+2)^2+4$', '$y = (x+2)^2+4$', '$y = -(x-2)^2+4$', '$y = -2(x+2)^2+4$'],
            correctAnswer: 0,
            explanation: '$0 = a(0+2)^2+4 \\implies -4 = 4a \\implies a=-1$. $y = -(x+2)^2+4$.'
          },
          {
            question: 'V-shape vertex $(0, 3)$, passes through $(2, -1)$:',
            options: ['$y = -2|x|+3$', '$y = 2|x|+3$', '$y = -2|x-3|$', '$y = |x|+3$'],
            correctAnswer: 0,
            explanation: '$-1 = a|2|+3 \\implies -4 = 2a \\implies a=-2$. $y = -2|x|+3$.'
          },
          {
            question: 'Sine wave with amplitude 3, period $4\\pi$, midline $y=2$:',
            options: ['$y = 3\\sin(2x)+2$', '$y = 3\\sin(x/2)+2$', '$y = 2\\sin(3x)+2$', '$y = 3\\sin(\\pi x)+2$'],
            correctAnswer: 1,
            explanation: '$B = 2\\pi/(4\\pi) = 1/2$. $y = 3\\sin(x/2)+2$.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Find the Parameter** 🧮

**1)** $y = a(x-1)^2-2$, passes through $(3, 6)$. $a$ = ?

**2)** $y = a\\sqrt{x+4}+1$, passes through $(0, 5)$. $a$ = ?

**3)** Trig: max = 7, min = 1. Amplitude $A$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '3'],
        hint1: '$6 = a(4)-2 \\implies a = 2$.',
        hint2: '$5 = a\\sqrt{4}+1 \\implies 4 = 2a$.',
        hint3: '$A = (7-1)/2 = 3$.',
        explanation: '1) $a = 8/4 = 2$. 2) $a = 4/2 = 2$. 3) $A = 3$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Graphs to Equations** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'S-curve, inflection at $(3, -1)$:',
            options: ['$y = (x-3)^3-1$', '$y = (x+3)^3+1$', '$y = \\sqrt[3]{x-3}-1$', 'Either A or C'],
            correctAnswer: 3
          },
          {
            label: 'Step 1 in writing a graph equation:',
            options: ['Find the scale factor', 'Identify the parent function', 'Determine the shifts', 'Check orientation'],
            correctAnswer: 1
          },
          {
            label: 'Graph with vertex $(0, -4)$ opening up, very wide:',
            options: ['$y = 3x^2-4$', '$y = \\frac{1}{3}x^2-4$', '$y = -3x^2-4$', '$y = x^2-4$'],
            correctAnswer: 1
          },
          {
            label: 'To find the period of a trig graph, measure:',
            options: ['Peak to trough', 'One full cycle length', 'Amplitude × 2', 'Midline to peak'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Either A or C', 'Identify the parent function', '$y = \\frac{1}{3}x^2-4$', 'One full cycle length'],
        hint1: 'Cubic and cube root both pass through inflection point.',
        hint2: 'Always start by recognizing the shape.',
        hint3: '"Very wide" means $|a| < 1$.',
        explanation: 'S-curve at $(3,-1)$: both cubic and cube root work. First step: identify parent. Wide parabola: $|a|<1$. Period = one full cycle.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$y = a|x+1|-2$, point $(2, 4)$: what is $a$?',
            options: ['$1$', '$2$', '$3$', '$-2$'],
            correctAnswer: 1,
            explanation: '$4 = a|3|-2 \\implies 6 = 3a \\implies a = 2$.'
          },
          {
            question: 'Cosine wave: max 4 at $x=0$, min $-2$ at $x=\\pi$. The equation is:',
            options: ['$y = 3\\cos(x)+1$', '$y = 4\\cos(x)-2$', '$y = 3\\cos(2x)+1$', '$y = 6\\cos(x)+1$'],
            correctAnswer: 0,
            explanation: '$A = 3$, $D = 1$, period $= 2\\pi \\implies B = 1$. Max at $x=0$: cosine with no shift.'
          }
        ]
      }
    }
  ]
};
