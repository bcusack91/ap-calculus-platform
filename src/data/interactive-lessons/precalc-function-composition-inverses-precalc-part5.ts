export const precalcCompositionPart5Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="205.5" y1="110" x2="205.5" y2="30"/><line x1="134.5" y1="110" x2="134.5" y2="170"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="110" x2="310" y2="110"/><line x1="134.5" y1="200" x2="134.5" y2="10"/></g><text x="306" y="124" font-size="12" fill="currentColor">x</text><text x="140" y="18" font-size="12" fill="currentColor">y</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="205.5" y="124">3</text><text x="229" y="124">4</text><text x="110.9" y="124">−1</text></g><text x="128" y="174" font-size="11" fill="currentColor" text-anchor="end">−3</text><g class="fig-accent"><polyline points="110.9,30 205.5,110 300,30" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="205.5" cy="110" r="4" fill="currentColor"/><text x="262" y="48" font-size="12" fill="currentColor">|x − 3|</text></g><g class="fig-accent-2"><polyline points="40,90 134.5,170 229.1,90" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="134.5" cy="170" r="4" fill="currentColor"/><text x="42" y="80" font-size="12" fill="currentColor">|x| − 3</text></g></svg>',
        alt: 'Two V-shaped graphs. The graph of the absolute value of x minus 3 (blue) has its vertex on the x-axis at (3, 0). The graph of the absolute value of x, minus 3 (red) has its vertex at (0, -3) on the y-axis and crosses the x-axis at x = -3 and x = 3.',
        caption: 'Figure. $y = \\lvert x - 3 \\rvert$ (blue) versus $y = \\lvert x \\rvert - 3$ (red).',
      },
      content: `
# 🧩 Piecewise & Absolute Value Compositions

**Part 5 of 7 — Piecewise & Absolute Value Compositions**

### Composing with Piecewise Functions

If $f(x) = \\begin{cases} x+2 & x < 0 \\\\ x^2 & x \\geq 0 \\end{cases}$ and $g(x) = x-1$:

$(f \\circ g)(3) = f(g(3)) = f(2) = 2^2 = 4$ (since $2 \\geq 0$)

$(f \\circ g)(-2) = f(g(-2)) = f(-3) = -3+2 = -1$ (since $-3 < 0$)

### Composing with Absolute Value

$|f(x)|$ takes the output and makes it nonnegative.

$f(|x|)$ takes the input and makes it nonnegative first.

These are different! For $f(x) = x - 3$ (see the figure above):
- $|f(x)| = |x-3|$ (V-shape with vertex at $(3, 0)$)
- $f(|x|) = |x|-3$ (V-shape with vertex at $(0, -3)$, shifted down $3$)
      `
    },
    {
      id: 'p5-transformations',
      type: 'text' as const,
      content: `
## 📝 Transformations Are Compositions

Every transformation from earlier in the course is a composition with a simple linear function.

| Transformation | As a composition | Inner or outer? |
|:---------------|:-----------------|:----------------|
| $f(x) + k$ (vertical shift) | $g(f(x))$ with $g(x) = x + k$ | $g$ is outer |
| $f(x + h)$ (horizontal shift) | $f(g(x))$ with $g(x) = x + h$ | $g$ is inner |
| $k \\cdot f(x)$ (vertical dilation) | $g(f(x))$ with $g(x) = kx$ | $g$ is outer |
| $f(kx)$ (horizontal dilation) | $f(g(x))$ with $g(x) = kx$ | $g$ is inner |

**Outer = vertical, inner = horizontal.** That is the same inside/outside rule you used for transformations.

### Order Matters

Composition is **not** commutative. With $f(x) = x^2$ and $g(x) = x + 3$:
- $f(g(x)) = (x + 3)^2$, a horizontal shift left $3$
- $g(f(x)) = x^2 + 3$, a vertical shift up $3$

### The Identity Function

The function $i(x) = x$ changes nothing: $f(i(x)) = i(f(x)) = f(x)$. It plays the role for composition that $0$ plays for addition and $1$ plays for multiplication.
      `
    },
    {
      id: 'p5-decompose',
      type: 'text' as const,
      content: `
## 🔧 Decomposition Strategies

Breaking a complex function into simpler pieces:

### Decomposing a Composite Function

| Complex Function | Inner $g(x)$ | Outer $f(u)$ |
|:----------------|:-------------|:-------------|
| $\\sqrt{x^2+1}$ | $x^2+1$ | $\\sqrt{u}$ |
| $(3x-5)^7$ | $3x-5$ | $u^7$ |
| $2^{x^2}$ | $x^2$ | $2^u$ |
| $e^{-x^2}$ | $-x^2$ | $e^u$ |
| $\\frac{1}{x^2+4}$ | $x^2+4$ | $\\frac{1}{u}$ |

> 💡 Decomposing a function this way tells you its domain (the inner output must be a legal input for the outer function) and the order for building an inverse: undo the outer layer first.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Transformations & Decomposition Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which composition produces $y = f(x - 4)$?',
            options: ['$f(g(x))$ with $g(x) = x - 4$', '$g(f(x))$ with $g(x) = x - 4$', '$f(g(x))$ with $g(x) = x + 4$', '$g(f(x))$ with $g(x) = x + 4$'],
            correctAnswer: 0,
            explanation: 'The $-4$ acts on the input, so $g(x) = x - 4$ goes inside: $f(g(x)) = f(x - 4)$. Putting $g$ outside gives $f(x) - 4$, a vertical shift, and $g(x) = x + 4$ shifts the wrong way.'
          },
          {
            question: 'Decompose $h(x) = \\frac{1}{(x+2)^3}$. If $g(x) = x+2$, then $f(u) =$',
            options: ['$u^3$', '$\\frac{1}{u}$', '$\\frac{1}{u^3}$', '$u+2$'],
            correctAnswer: 2,
            explanation: '$h(x) = f(g(x))$ with $g(x) = x+2$ and $f(u) = 1/u^3$.'
          },
          {
            question: '$|f(x)|$ vs $f(|x|)$: which reflects negative outputs?',
            options: ['$|f(x)|$', '$f(|x|)$', 'Both', 'Neither'],
            correctAnswer: 0,
            explanation: '$|f(x)|$ takes the absolute value of the output, reflecting negative parts above the $x$-axis.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Piecewise Composition Practice** 🧮

Let $f(x) = \\begin{cases} x+2 & x < 0 \\\\ x^2 & x \\geq 0 \\end{cases}$ and $g(x) = x - 1$.

**1)** $(f \\circ g)(0)$ = ?

**2)** $(f \\circ g)(5)$ = ?

**3)** $(g \\circ f)(-4)$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '16', '-3'],
        hint1: '$g(0) = -1$, and $-1 < 0$, so use the first piece: $f(-1) = -1 + 2$.',
        hint2: '$g(5) = 4$, and $4 \\geq 0$, so use the second piece: $f(4) = 4^2$.',
        hint3: 'Inner first: $f(-4) = -4 + 2 = -2$ (first piece). Then $g(-2) = -2 - 1$.',
        explanation: '1) $f(-1) = 1$. 2) $f(4) = 16$. 3) $f(-4) = -2$, then $g(-2) = -3$. Always decide which piece applies from the value you are plugging in, not from the original $x$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Decomposition Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $(3x+1)^5$, the inner function is:',
            options: ['$x^5$', '$3x+1$', '$3x$', '$5$'],
            correctAnswer: 1
          },
          {
            label: 'For $e^{x^2-1}$, the inner function is:',
            options: ['$e^x$', '$x^2-1$', '$e \\cdot (x^2-1)$'],
            correctAnswer: 1
          },
          {
            label: 'Composing any $f$ with the identity $i(x) = x$ gives:',
            options: ['$f(x)$', '$x$', '$0$'],
            correctAnswer: 0
          },
          {
            label: '$f(g(x)) = g(f(x))$:',
            options: ['Always true', 'Sometimes true', 'Never true'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$3x+1$', '$x^2-1$', '$f(x)$', 'Sometimes true'],
        hint1: 'Inner function is what you substitute.',
        hint2: 'The exponent is the inner function.',
        hint3: 'The identity function changes nothing. For the last one, compare $(x+3)^2$ with $x^2 + 3$, then think of inverse functions.',
        explanation: 'Inner: $3x+1$/$x^2-1$. The identity leaves $f$ unchanged. Composition is not commutative in general, but it can match for special pairs such as inverse functions.'
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
            question: 'Decompose $\\sqrt{\\ln x}$ as $f(g(x))$:',
            options: ['$f(u)=\\sqrt{u}, g(x)=\\ln x$', '$f(u)=\\ln u, g(x)=\\sqrt{x}$', '$f(u)=u^2, g(x)=\\ln x$'],
            correctAnswer: 0,
            explanation: 'Outer: $\\sqrt{u}$, inner: $\\ln x$.'
          },
          {
            question: 'If $f(x) = \\sqrt{x}$ and $g(x) = x - 5$, the domain of $f(g(x))$ is:',
            options: ['$x \\geq 5$', '$x \\geq 0$', 'All reals', '$x \\geq -5$'],
            correctAnswer: 0,
            explanation: 'The output of $g$ must be a legal input for $f$: $x - 5 \\geq 0$, so $x \\geq 5$. Using the domain of $f$ alone gives $x \\geq 0$, and $x \\geq -5$ solves the inequality with the wrong sign.'
          }
        ]
      }
    }
  ]
};
