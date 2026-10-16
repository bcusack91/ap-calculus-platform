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
      id: 'p6-asymptotes',
      type: 'text' as const,
      content: `
## 📏 Reciprocal & Exponential Graphs: Read the Asymptotes

When the parent has asymptotes, the asymptotes of the image give you $h$ and $k$ directly.

### Reciprocal: $y = \\dfrac{a}{x-h}+k$

- Vertical asymptote $x = h$, horizontal asymptote $y = k$
- One more point gives $a$

**Example**: Asymptotes $x = 2$ and $y = -1$, passes through $(3, 3)$.

$3 = \\dfrac{a}{3-2}-1 \\implies a = 4$

$$y = \\dfrac{4}{x-2}-1$$

### Exponential: $y = a \\cdot 2^{x}+k$

- Horizontal asymptote $y = k$
- The $y$-intercept is $a + k$

**Example**: Asymptote $y = 3$, $y$-intercept $5$. Then $a + 3 = 5$, so $a = 2$.

$$y = 2 \\cdot 2^{x}+3$$

Check with a second point: at $x = 1$, $y = 2(2) + 3 = 7$.

### Spotting a Horizontal Dilation

If $f$ has $x$-intercepts $-4$ and $8$ and a graph of the same shape has $x$-intercepts $-2$ and $4$, every $x$-value was halved. That is $y = f(2x)$, a horizontal dilation by a factor of $\\frac{1}{2}$.
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
            question: 'A transformed graph of $y = \\dfrac{1}{x}$ has asymptotes $x = -1$ and $y = 2$ and passes through $(0, 5)$. Which equation fits?',
            options: ['$y = \\dfrac{3}{x+1}+2$', '$y = \\dfrac{3}{x-1}+2$', '$y = \\dfrac{5}{x+1}+2$', '$y = \\dfrac{3}{x+1}-2$'],
            correctAnswer: 0,
            explanation: 'The asymptotes give $h = -1$ and $k = 2$. Then $5 = \\dfrac{a}{0+1}+2$, so $a = 3$. Using $x - 1$ puts the asymptote at $x = 1$, $a = 5$ forgets to subtract $k$, and $-2$ moves the horizontal asymptote to $y = -2$.'
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

**3)** $y = a \\cdot 2^{x}+1$, passes through $(2, 13)$. $a$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '3'],
        hint1: '$6 = a(4)-2 \\implies a = 2$.',
        hint2: '$5 = a\\sqrt{4}+1 \\implies 4 = 2a$.',
        hint3: '$13 = a(4)+1 \\implies 12 = 4a$.',
        explanation: '1) $a = 8/4 = 2$. 2) $a = 4/2 = 2$. 3) $a = 12/4 = 3$.'
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
            options: ['$y = (x-3)^3-1$', '$y = (x+3)^3+1$', '$y = (x-3)^3+1$', '$y = (x+3)^3-1$'],
            correctAnswer: 0
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
            label: 'Same shape as $y = f(x)$, but every $x$-value is halved:',
            options: ['$y = f(2x)$', '$y = f(x/2)$', '$y = 2f(x)$', '$y = \\frac{1}{2}f(x)$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$y = (x-3)^3-1$', 'Identify the parent function', '$y = \\frac{1}{3}x^2-4$', '$y = f(2x)$'],
        hint1: 'An S-curve is a shifted cubic: $y = (x-h)^3 + k$ has its inflection point at $(h, k)$.',
        hint2: 'Always start by recognizing the shape.',
        hint3: '"Very wide" means $|a| < 1$.',
        explanation: 'S-curve at $(3,-1)$: the cubic shifted right 3 and down 1. First step: identify parent. Wide parabola: $|a|<1$. Halving every $x$-value is a horizontal dilation by $\\frac{1}{2}$: $f(2x)$.'
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
            question: 'The graph of $y = \\dfrac{a}{x-h}+k$ has asymptotes $x = 3$ and $y = -2$ and passes through $(4, 1)$. What is $a$?',
            options: ['$3$', '$-1$', '$1$', '$21$'],
            correctAnswer: 0,
            explanation: 'The asymptotes give $h = 3$ and $k = -2$, so $1 = \\dfrac{a}{4-3}-2$ and $a = 3$. Using $k = +2$ gives $-1$, ignoring $k$ gives $1$, and using $x + 3$ in the denominator gives $21$.'
          }
        ]
      }
    }
  ]
};
