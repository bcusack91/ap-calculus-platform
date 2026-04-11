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
      id: 'p5-operations',
      type: 'text' as const,
      content: `
## 📝 Function Operations Review

### Arithmetic Operations

- $(f+g)(x) = f(x)+g(x)$
- $(f-g)(x) = f(x)-g(x)$
- $(fg)(x) = f(x) \\cdot g(x)$
- $(f/g)(x) = f(x)/g(x), \\quad g(x) \\neq 0$

### Example

$f(x) = x^2, g(x) = 2x+1$

$(f+g)(x) = x^2+2x+1 = (x+1)^2$

$(fg)(x) = x^2(2x+1) = 2x^3+x^2$

$(f/g)(x) = \\frac{x^2}{2x+1}, \\quad x \\neq -\\frac{1}{2}$

### Domains of Combined Functions

$\\text{dom}(f+g) = \\text{dom}(f) \\cap \\text{dom}(g)$

$\\text{dom}(f/g) = \\text{dom}(f) \\cap \\text{dom}(g) \\setminus \\{x: g(x)=0\\}$
      `
    },
    {
      id: 'p5-decompose',
      type: 'text' as const,
      content: `
## 🔧 Decomposition Strategies

Breaking a complex function into simpler pieces:

### Chain Decomposition (for Calculus)

| Complex Function | Inner $g(x)$ | Outer $f(u)$ |
|:----------------|:-------------|:-------------|
| $\\sqrt{x^2+1}$ | $x^2+1$ | $\\sqrt{u}$ |
| $(3x-5)^7$ | $3x-5$ | $u^7$ |
| $\\sin(x^2)$ | $x^2$ | $\\sin u$ |
| $e^{-x^2}$ | $-x^2$ | $e^u$ |
| $\\ln(\\cos x)$ | $\\cos x$ | $\\ln u$ |

> 💡 This decomposition is the foundation of the **Chain Rule** in calculus: $\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)$.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Operations & Decomposition Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x)=\\sqrt{x}$ and $g(x)=x-4$, find $(fg)(8)$:',
            options: ['$4\\sqrt{2}$', '$8\\sqrt{2}$', '$2\\sqrt{2}$', '$-4\\sqrt{8}$'],
            correctAnswer: 1,
            explanation: '$(fg)(8) = f(8) \\cdot g(8) = \\sqrt{8} \\cdot 4 = 2\\sqrt{2} \\cdot 4 = 8\\sqrt{2}$.'
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
**Operations Practice** 🧮

$f(x) = x+3, g(x) = 2x$

**1)** $(f+g)(4)$ = ?

**2)** $(f \\cdot g)(2)$ = ?

**3)** $(f/g)(6)$ = ? (Enter as a fraction like "3/4")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '20', '3/4'],
        hint1: '$f(4)+g(4) = 7+8 = 15$.',
        hint2: '$f(2) \\cdot g(2) = 5 \\cdot 4 = 20$.',
        hint3: '$f(6)/g(6) = 9/12 = 3/4$.',
        explanation: '1) $15$. 2) $20$. 3) $3/4$.'
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
            label: 'The domain of $f/g$ excludes:',
            options: ['Where $f(x)=0$', 'Where $g(x)=0$', 'Where both are 0'],
            correctAnswer: 1
          },
          {
            label: '$(f+g)(x) = (g+f)(x)$:',
            options: ['Always true', 'Sometimes true', 'Never true'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$3x+1$', '$\\sin x$', 'Where $g(x)=0$', 'Always true'],
        hint1: 'Inner function is what you substitute.',
        hint2: 'The exponent is the inner function.',
        hint3: 'Division by zero is forbidden.',
        explanation: 'Inner: $3x+1$/$\\sin x$. Division excludes $g(x)=0$. Addition is commutative.'
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
            question: 'If $f(x) = x^2-1$ and $g(x) = \\sqrt{x}$, the domain of $f/g$ is:',
            options: ['$x > 0$', '$x \\geq 0$', 'All reals', '$x \\geq 1$'],
            correctAnswer: 0,
            explanation: 'Need $x$ in domain of $g$ ($x \\geq 0$) and $g(x) \\neq 0$ ($x \\neq 0$). So $x > 0$.'
          }
        ]
      }
    }
  ]
};
