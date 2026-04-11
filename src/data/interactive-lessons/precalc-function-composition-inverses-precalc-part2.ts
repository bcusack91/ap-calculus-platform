export const precalcCompositionPart2Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔄 Inverse Functions

**Part 2 of 7**

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
      content: `
## 📊 The Horizontal Line Test

| Function | One-to-one? | Inverse exists? |
|:---------|:------------|:----------------|
| $f(x) = 2x+3$ | Yes | Yes |
| $f(x) = x^2$ (all reals) | No | No (without restriction) |
| $f(x) = x^3$ | Yes | Yes ($f^{-1}(x) = \\sqrt[3]{x}$) |
| $f(x) = \\sin x$ (all reals) | No | No (restrict to $[-\\pi/2, \\pi/2]$) |
| $f(x) = e^x$ | Yes | Yes ($f^{-1}(x) = \\ln x$) |

### Restricting Domains

$f(x) = x^2$ on $x \\geq 0$: now one-to-one!

$f^{-1}(x) = \\sqrt{x}$ (the principal square root)

> 💡 When we write $\\sin^{-1}x$, we use the restricted domain $[-\\pi/2, \\pi/2]$.
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
