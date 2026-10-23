export const precalcCompositionPart2Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔄 Inverse Functions

**Part 2 of 7 — Inverse Functions**

### What Is an Inverse?

$f^{-1}$ **undoes** $f$. If $f(a)=b$, then $f^{-1}(b)=a$.

$$f(f^{-1}(x)) = x \\quad \\text{and} \\quad f^{-1}(f(x)) = x$$

### Key Properties

- Domain of $f^{-1}$ = Range of $f$
- Range of $f^{-1}$ = Domain of $f$
- The graph of $f^{-1}$ is the **reflection** of $f$ across the line $y = x$

### When Does $f^{-1}$ Exist?

$f$ must be **one-to-one** (each output comes from exactly one input).

- One-to-one → passes the **Horizontal Line Test**
- Not one-to-one → no inverse (unless we restrict the domain)
      `
    },
    {
      id: 'p2-finding',
      type: 'text' as const,
      content: `
## 📝 Finding Inverse Functions

### Algorithm
1. Replace $f(x)$ with $y$
2. Swap $x$ and $y$
3. Solve for $y$
4. Write $f^{-1}(x) = y$

### Example 1: $f(x) = 3x - 7$

$y = 3x-7$ → $x = 3y-7$ → $x+7 = 3y$ → $y = \\frac{x+7}{3}$

$$f^{-1}(x) = \\frac{x+7}{3}$$

**Verify**: $f(f^{-1}(x)) = 3\\cdot\\frac{x+7}{3}-7 = x+7-7 = x$ ✓

### Example 2: $f(x) = x^2+1, x \\geq 0$

$x = y^2+1 \\implies y = \\sqrt{x-1}$

$$f^{-1}(x) = \\sqrt{x-1}, \\quad x \\geq 1$$
      `
    },
    {
      id: 'p2-hlt',
      type: 'text' as const,
      figure: [
        {
          svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="200" x2="310" y2="200"/><line x1="170" y1="210" x2="170" y2="15"/></g><text x="306" y="214" font-size="12" fill="currentColor">x</text><text x="176" y="22" font-size="12" fill="currentColor">y</text><g class="fig-accent-2" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"><line x1="45" y1="110" x2="300" y2="110"/></g><text x="300" y="104" font-size="11" fill="currentColor" text-anchor="end">y = 4</text><g class="fig-accent"><path d="M 61.7 59.4 Q 170 340.6 278.3 59.4" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="83.3" cy="110" r="4.5" fill="currentColor"/><circle cx="256.7" cy="110" r="4.5" fill="currentColor"/></g><text x="83" y="130" font-size="11" fill="currentColor" text-anchor="middle">(−2, 4)</text><text x="257" y="130" font-size="11" fill="currentColor" text-anchor="middle">(2, 4)</text><text x="170" y="216" font-size="11" fill="currentColor" text-anchor="middle">0</text></svg>',
          alt: 'Graph of y = x squared for all real x. The horizontal line y = 4 crosses the parabola twice, at (-2, 4) and (2, 4), so the function is not one-to-one.',
          caption: 'Fails the horizontal line test: $y = x^2$ on all reals.',
          size: 'sm',
        },
        {
          svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="200" x2="310" y2="200"/><line x1="170" y1="210" x2="170" y2="15"/></g><text x="306" y="214" font-size="12" fill="currentColor">x</text><text x="176" y="22" font-size="12" fill="currentColor">y</text><g class="fig-accent-2" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"><line x1="45" y1="110" x2="300" y2="110"/></g><text x="300" y="104" font-size="11" fill="currentColor" text-anchor="end">y = 4</text><g class="fig-accent"><path d="M 170 200 Q 224.2 200 278.3 59.4" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="170" cy="200" r="4.5" fill="currentColor"/><circle cx="256.7" cy="110" r="4.5" fill="currentColor"/></g><text x="257" y="130" font-size="11" fill="currentColor" text-anchor="middle">(2, 4)</text><text x="170" y="216" font-size="11" fill="currentColor" text-anchor="middle">0</text></svg>',
          alt: 'Graph of y = x squared restricted to x greater than or equal to 0: a half parabola starting at the origin. The horizontal line y = 4 crosses it only once, at (2, 4), so the restricted function is one-to-one.',
          caption: 'Passes the test: $y = x^2$ restricted to $x \\geq 0$.',
          size: 'sm',
        },
      ],
      content: `
## 📊 The Horizontal Line Test

A function is one-to-one exactly when **no horizontal line meets its graph more than once**. In the figure above, $y = 4$ meets $y = x^2$ at two points, $(-2, 4)$ and $(2, 4)$, so two inputs share an output and there is no inverse function. Restricting the domain to $x \\geq 0$ removes the left half, and every horizontal line now meets the graph at most once.

| Function | One-to-one? | Inverse exists? |
|:---------|:------------|:----------------|
| $f(x) = 2x+3$ | Yes | Yes |
| $f(x) = x^2$ (all reals) | No | No (without restriction) |
| $f(x) = x^3$ | Yes | Yes ($f^{-1}(x) = \\sqrt[3]{x}$) |
| $f(x) = (x-1)^2$ (all reals) | No | No (restrict to $x \\geq 1$) |
| $f(x) = e^x$ | Yes | Yes ($f^{-1}(x) = \\ln x$) |

### Restricting Domains

$f(x) = x^2$ on $x \\geq 0$: now one-to-one!

$f^{-1}(x) = \\sqrt{x}$ (the principal square root)
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Inverse Functions Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(3)=7$, then $f^{-1}(7)=$',
            options: ['$3$', '$7$', '$1/7$', '$1/3$'],
            correctAnswer: 0,
            explanation: 'The inverse reverses the mapping: $f^{-1}(7)=3$.'
          },
          {
            question: 'Find $f^{-1}(x)$ if $f(x)=5x+2$:',
            options: ['$(x-2)/5$', '$5x-2$', '$(x+2)/5$', '$1/(5x+2)$'],
            correctAnswer: 0,
            explanation: '$x = 5y+2 \\implies y = (x-2)/5$.'
          },
          {
            question: 'Which function does NOT have an inverse on all reals?',
            options: ['$f(x) = x^3$', '$f(x) = x^2$', '$f(x) = 3x-1$', '$f(x) = e^x$'],
            correctAnswer: 1,
            explanation: '$x^2$ fails the horizontal line test (e.g., $f(2) = f(-2) = 4$).'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Finding Inverses** 🧮

**1)** $f(x) = 4x - 3$. Find $f^{-1}(9)$:

**2)** $f(x) = \\frac{x+1}{2}$. Find $f^{-1}(x) = ax + b$. What is $a$?

**3)** Same function: What is $b$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '2', '-1'],
        hint1: '$f^{-1}(x) = (x+3)/4$. $f^{-1}(9) = 12/4 = 3$.',
        hint2: '$x = (y+1)/2 \\implies 2x = y+1 \\implies y = 2x-1$. So $a = 2$.',
        hint3: '$f^{-1}(x) = 2x-1$, so $b = -1$.',
        explanation: '1) $3$. 2) $a = 2$. 3) $b = -1$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Inverse Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f^{-1}(x)$ means:',
            options: ['$1/f(x)$', 'The inverse function', '$f(x)$ raised to $-1$'],
            correctAnswer: 1
          },
          {
            label: 'The graph of $f^{-1}$ is the reflection of $f$ over:',
            options: ['$x$-axis', '$y$-axis', 'Line $y=x$', 'Origin'],
            correctAnswer: 2
          },
          {
            label: '$f(f^{-1}(x)) =$',
            options: ['$1$', '$0$', '$x$', '$x^2$'],
            correctAnswer: 2
          },
          {
            label: 'A function is one-to-one if it passes:',
            options: ['Vertical Line Test', 'Horizontal Line Test', 'Both tests', 'Neither test'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['The inverse function', 'Line $y=x$', '$x$', 'Horizontal Line Test'],
        hint1: '$f^{-1}$ is notation for the inverse function, not $1/f$.',
        hint2: 'Swap $x$ and $y$ → reflection over $y=x$.',
        hint3: 'Composition of a function with its inverse gives the identity.',
        explanation: '$f^{-1}$ = inverse function. Reflection over $y=x$. $f(f^{-1}(x))=x$. HLT checks one-to-one.'
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
            question: 'If $f^{-1}(x) = \\sqrt[3]{x-2}$, find $f(x)$:',
            options: ['$x^3+2$', '$x^3-2$', '$(x-2)^3$', '$(x+2)^{1/3}$'],
            correctAnswer: 0,
            explanation: 'The inverse of $\\sqrt[3]{x-2}$ is $(x)^3+2 = x^3+2$.'
          },
          {
            question: 'The function $f(x)=|x|$ on all reals:',
            options: ['Has an inverse', 'Does not have an inverse', 'Has inverse $f^{-1}=1/|x|$', 'Has inverse $f^{-1}=\\pm\\sqrt{x}$'],
            correctAnswer: 1,
            explanation: '$|x|$ fails HLT: $f(2)=f(-2)=2$. Not one-to-one.'
          }
        ]
      }
    }
  ]
};
