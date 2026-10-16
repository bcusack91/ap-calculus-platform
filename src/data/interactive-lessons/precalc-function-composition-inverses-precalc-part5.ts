export const precalcCompositionPart5Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🧩 Piecewise & Absolute Value Compositions

**Part 5 of 7**

### Composing with Piecewise Functions

If $f(x) = \\begin{cases} x+2 & x < 0 \\\\ x^2 & x \\geq 0 \\end{cases}$ and $g(x) = x-1$:

$(f \\circ g)(3) = f(g(3)) = f(2) = 2^2 = 4$ (since $2 \\geq 0$)

$(f \\circ g)(-2) = f(g(-2)) = f(-3) = -3+2 = -1$ (since $-3 < 0$)

### Composing with Absolute Value

$|f(x)|$ takes the output and makes it positive.

$f(|x|)$ takes the input and makes it positive first.

These are different! For $f(x) = x - 3$:
- $|f(x)| = |x-3|$ (V-shape at $x=3$)
- $f(|x|) = |x|-3$ (V-shape at $x=0$, shifted down $3$)
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
| $\\sin(x^2)$ | $x^2$ | $\\sin u$ |
| $e^{-x^2}$ | $-x^2$ | $e^u$ |
| $\\ln(\\cos x)$ | $\\cos x$ | $\\ln u$ |

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
**Composition Practice** 🧮

$f(x) = x+3, g(x) = 2x$

**1)** $f(g(4))$ = ?

**2)** $g(f(4))$ = ?

**3)** $g(f(x)) = 2x + k$. What is $k$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11', '14', '6'],
        hint1: '$g(4) = 8$, then $f(8) = 8 + 3$.',
        hint2: '$f(4) = 7$, then $g(7) = 2 \\cdot 7$.',
        hint3: '$g(f(x)) = 2(x + 3)$. Distribute.',
        explanation: '1) $f(8) = 11$. 2) $g(7) = 14$, a different value, because composition is not commutative. 3) $2(x+3) = 2x + 6$, so $k = 6$.'
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
            label: 'For $e^{\\sin x}$, the inner function is:',
            options: ['$e^x$', '$\\sin x$', '$e \\cdot \\sin x$'],
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
        correctAnswers: ['$3x+1$', '$\\sin x$', '$f(x)$', 'Sometimes true'],
        hint1: 'Inner function is what you substitute.',
        hint2: 'The exponent is the inner function.',
        hint3: 'The identity function changes nothing. For the last one, compare $(x+3)^2$ with $x^2 + 3$, then think of inverse functions.',
        explanation: 'Inner: $3x+1$/$\\sin x$. The identity leaves $f$ unchanged. Composition is not commutative in general, but it can match for special pairs such as inverse functions.'
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
