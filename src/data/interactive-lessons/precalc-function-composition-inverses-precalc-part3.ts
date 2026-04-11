export const precalcCompositionPart3Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🧮 Inverses of Common Functions

**Part 3 of 7**

### Inverse Pairs

| Function $f(x)$ | Inverse $f^{-1}(x)$ | Domain restriction |
|:-----------------|:---------------------|:-------------------|
| $x^2$ | $\\sqrt{x}$ | $x \\geq 0$ for both |
| $x^3$ | $\\sqrt[3]{x}$ | All reals |
| $e^x$ | $\\ln x$ | $x > 0$ for $\\ln$ |
| $10^x$ | $\\log_{10} x$ | $x > 0$ for $\\log$ |
| $a^x$ | $\\log_a x$ | $x > 0$ for $\\log_a$ |
| $\\sin x$ | $\\sin^{-1} x$ | $[-\\pi/2, \\pi/2]$, $[-1,1]$ |
| $\\cos x$ | $\\cos^{-1} x$ | $[0, \\pi]$, $[-1,1]$ |
| $\\tan x$ | $\\tan^{-1} x$ | $(-\\pi/2, \\pi/2)$ |

> 💡 The graph of each inverse is the reflection of the original function over $y = x$.
      `
    },
    {
      id: 'p3-exp-log',
      type: 'text' as const,
      content: `
## 📝 Exponential & Logarithmic Inverses

### Why $\\ln$ and $e^x$ are inverses

$e^{\\ln x} = x \\quad (x > 0)$

$\\ln(e^x) = x \\quad (\\text{all } x)$

### Solving with Inverses

**Solve $e^{2x} = 15$:**

$\\ln(e^{2x}) = \\ln 15$

$2x = \\ln 15$

$x = \\frac{\\ln 15}{2} \\approx 1.354$

**Solve $\\log_2(x-3) = 5$:**

$x-3 = 2^5 = 32$

$x = 35$

### Key Identities
- $\\log_a(a^x) = x$
- $a^{\\log_a x} = x$
      `
    },
    {
      id: 'p3-rational',
      type: 'text' as const,
      content: `
## 🔀 Inverses of Rational Functions

### Example: $f(x) = \\frac{2x+1}{x-3}$

Swap and solve:

$x = \\frac{2y+1}{y-3}$

$x(y-3) = 2y+1$

$xy - 3x = 2y + 1$

$xy - 2y = 3x + 1$

$y(x-2) = 3x+1$

$$f^{-1}(x) = \\frac{3x+1}{x-2}$$

**Verification**: $f(f^{-1}(x))$:

$f\\left(\\frac{3x+1}{x-2}\\right) = \\frac{2 \\cdot \\frac{3x+1}{x-2}+1}{\\frac{3x+1}{x-2}-3} = \\frac{\\frac{6x+2+x-2}{x-2}}{\\frac{3x+1-3x+6}{x-2}} = \\frac{7x}{7} = x$ ✓
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Inverse Pairs Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The inverse of $f(x) = e^{3x}$ is:',
            options: ['$\\frac{\\ln x}{3}$', '$3\\ln x$', '$e^{x/3}$', '$\\ln(3x)$'],
            correctAnswer: 0,
            explanation: '$x = e^{3y} \\implies \\ln x = 3y \\implies y = \\frac{\\ln x}{3}$.'
          },
          {
            question: '$\\ln(e^5) =$',
            options: ['$e^5$', '$5$', '$5e$', '$\\frac{1}{5}$'],
            correctAnswer: 1,
            explanation: '$\\ln$ and $e^x$ are inverses: $\\ln(e^5) = 5$.'
          },
          {
            question: 'The inverse of $f(x) = \\frac{x}{x+1}$ is:',
            options: ['$\\frac{x}{1-x}$', '$\\frac{x+1}{x}$', '$\\frac{1}{x+1}$', '$x+\\frac{1}{x}$'],
            correctAnswer: 0,
            explanation: '$x = y/(y+1) \\implies xy+x = y \\implies x = y(1-x) \\implies y = x/(1-x)$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Inverse Calculations** 🧮

**1)** Solve $e^x = 20$: $x = \\ln($?$)$. Enter the number.

**2)** Solve $\\log_3 x = 4$: $x$ = ?

**3)** If $f(x) = 5x-3$, then $f^{-1}(12)$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '81', '3'],
        hint1: '$e^x = 20 \\implies x = \\ln 20$.',
        hint2: '$\\log_3 x = 4 \\implies x = 3^4 = 81$.',
        hint3: '$f^{-1}(x) = (x+3)/5$. $f^{-1}(12) = 15/5 = 3$.',
        explanation: '1) $\\ln 20$. 2) $81$. 3) $3$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Inverse Pairs Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$10^{\\log_{10} x}$ equals:',
            options: ['$10$', '$x$', '$10x$', '$\\log(10x)$'],
            correctAnswer: 1
          },
          {
            label: 'The inverse of $\\ln x$ is:',
            options: ['$1/\\ln x$', '$e^x$', '$\\log x$', '$x^e$'],
            correctAnswer: 1
          },
          {
            label: 'Why must we restrict $\\sin x$ to $[-\\pi/2, \\pi/2]$?',
            options: ['To make it continuous', 'To make it one-to-one', 'To make it positive', 'Convention only'],
            correctAnswer: 1
          },
          {
            label: 'If $f$ and $g$ are inverses, then $(f \\circ g)(x) =$',
            options: ['$0$', '$1$', '$x$', '$f(x)+g(x)$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$x$', '$e^x$', 'To make it one-to-one', '$x$'],
        hint1: 'Applying a function then its inverse returns $x$.',
        hint2: '$\\ln$ undoes $e^x$ and vice versa.',
        hint3: '$\\sin x$ is not one-to-one on all reals (periodic).',
        explanation: '$a^{\\log_a x} = x$. $\\ln^{-1} = e^x$. Restriction makes $\\sin$ one-to-one. $f \\circ f^{-1} = x$.'
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
            question: 'Solve $2^x = 64$:',
            options: ['$x = 5$', '$x = 6$', '$x = 32$', '$x = 8$'],
            correctAnswer: 1,
            explanation: '$2^6 = 64$, so $x = 6$.'
          },
          {
            question: 'If $f(x) = \\frac{3x-1}{x+2}$, which is true about $f^{-1}$?',
            options: ['It is a polynomial', 'It is also a rational function', 'It does not exist', 'It is $\\frac{x+2}{3x-1}$'],
            correctAnswer: 1,
            explanation: 'The inverse of a linear fractional function is another linear fractional function.'
          }
        ]
      }
    }
  ]
};
