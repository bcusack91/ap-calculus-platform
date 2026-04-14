export const calcabAntiderivativesPart1Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti1-intro',
      type: 'text' as const,
      content: `# ∫ Antiderivatives & Indefinite Integrals

**Part 1 of 7 — What is an Antiderivative?**

| Part | Topic |
|:---:|:---:|
| **1** | **Power Rule for Integration** |
| 2 | Essential Antiderivative Formulas |
| 3 | Initial Value Problems |
| 4 | Algebraic Manipulation Before Integrating |
| 5 | Inverse Trig Antiderivatives |
| 6 | Problem-Solving Workshop |
| 7 | Review & Final Assessment |

### Definition

$$\\boxed{F'(x) = f(x) \\iff \\int f(x)\\,dx = F(x) + C}$$

An **antiderivative** of $f(x)$ is any function $F(x)$ whose derivative is $f(x)$.

The **indefinite integral** $\\int f(x)\\,dx$ represents the entire FAMILY of antiderivatives.

> **Key Concept:** The "$+C$" is NOT optional! Since the derivative of any constant is 0, there are infinitely many antiderivatives. For example, $x^2$, $x^2 + 5$, and $x^2 - 3$ are ALL antiderivatives of $2x$.

| Notation | Meaning |
|:---:|:---:|
| $\\int$ | Integral sign ("S" for sum) |
| $f(x)$ | Integrand (the function being integrated) |
| $dx$ | Tells you the variable of integration |
| $F(x) + C$ | General antiderivative (family of functions) |`
    },
    {
      id: 'anti1-power',
      type: 'text' as const,
      content: `### Power Rule for Integration

$$\\boxed{\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)}$$

**Mnemonic:** "Add one to the exponent, divide by the new exponent."

This reverses the Power Rule for differentiation. Quick check: $\\frac{d}{dx}\\left[\\frac{x^{n+1}}{n+1}\\right] = \\frac{(n+1)x^n}{n+1} = x^n$ ✓

### Worked Examples

| $f(x)$ | Rewrite | $\\int f(x)\\,dx$ | Check: $F'(x)$ |
|:---:|:---:|:---:|:---:|
| $x^4$ | — | $\\frac{x^5}{5} + C$ | $\\frac{5x^4}{5} = x^4$ ✓ |
| $x^{-3}$ | — | $\\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C$ | $\\frac{1}{x^3}$ ✓ |
| $\\sqrt{x}$ | $x^{1/2}$ | $\\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C$ | $\\frac{2}{3} \\cdot \\frac{3}{2} x^{1/2} = \\sqrt{x}$ ✓ |
| $\\frac{1}{x^4}$ | $x^{-4}$ | $\\frac{x^{-3}}{-3} + C = -\\frac{1}{3x^3} + C$ | $\\frac{1}{x^4}$ ✓ |
| $1$ | $x^0$ | $x + C$ | $1$ ✓ |

> **AP Tip:** Always CHECK your answer by differentiating! If $F'(x) = f(x)$, your integral is correct.

### The Linearity Property

$$\\boxed{\\int [af(x) + bg(x)]\\,dx = a\\int f(x)\\,dx + b\\int g(x)\\,dx}$$

**Example:** $\\int (3x^2 - 5x + 4)\\,dx = 3 \\cdot \\frac{x^3}{3} - 5 \\cdot \\frac{x^2}{2} + 4x + C = x^3 - \\frac{5x^2}{2} + 4x + C$`
    },
    {
      id: 'anti1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Power Rule for Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int x^7\\,dx$.',
            options: ['$7x^6 + C$', '$\\frac{x^8}{8} + C$', '$\\frac{x^7}{7} + C$', '$8x^8 + C$'],
            correctAnswer: 1,
            explanation: '$\\int x^7\\,dx = \\frac{x^{7+1}}{7+1} + C = \\frac{x^8}{8} + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{x^5}\\,dx$.',
            options: ['$-\\frac{1}{4x^4} + C$', '$\\frac{1}{4x^4} + C$', '$-\\frac{5}{x^4} + C$', '$\\ln|x^5| + C$'],
            correctAnswer: 0,
            explanation: '$\\int x^{-5}\\,dx = \\frac{x^{-4}}{-4} + C = -\\frac{1}{4x^4} + C$.'
          },
          {
            question: 'Evaluate $\\int \\sqrt[3]{x}\\,dx$.',
            options: ['$\\frac{3}{4}x^{4/3} + C$', '$\\frac{4}{3}x^{4/3} + C$', '$\\frac{x^{2/3}}{2/3} + C$', '$\\frac{1}{3}x^{-2/3} + C$'],
            correctAnswer: 0,
            explanation: '$\\int x^{1/3}\\,dx = \\frac{x^{4/3}}{4/3} + C = \\frac{3}{4}x^{4/3} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti1-special',
      type: 'text' as const,
      content: `### Special Case: $n = -1$

The Power Rule breaks down when $n = -1$ (division by zero!):

$$\\int x^{-1}\\,dx = \\int \\frac{1}{x}\\,dx = \\ln|x| + C$$

> **Key Fact:** Absolute value is REQUIRED. $\\ln(x)$ is only defined for $x > 0$, but $\\frac{1}{x}$ is defined for all $x \\neq 0$. The absolute value makes the antiderivative valid for negative $x$ too.

### Common Mistakes

| Mistake | Correct |
|:---:|:---:|
| Forgetting $+C$ | Always include $+C$ for indefinite integrals |
| $\\int \\frac{1}{x}\\,dx = \\frac{x^0}{0}$ | It's $\\ln|x| + C$ (special case!) |
| $\\int 5\\,dx = C$ | $\\int 5\\,dx = 5x + C$ (constant × $x$) |
| $\\int x^{1/2}\\,dx = \\frac{x^{1/2}}{1/2}$ | Must add 1 to exponent FIRST: $\\frac{x^{3/2}}{3/2}$ |`
    },
    {
      id: 'anti1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Power Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (4x^3 - 6x + 7)\\,dx$.',
            options: ['$x^4 - 3x^2 + 7x + C$', '$12x^2 - 6 + C$', '$x^4 - 6x^2 + 7x + C$', '$4x^4 - 3x^2 + 7x + C$'],
            correctAnswer: 0,
            explanation: '$\\int 4x^3\\,dx - \\int 6x\\,dx + \\int 7\\,dx = x^4 - 3x^2 + 7x + C$.'
          },
          {
            question: 'Which is the antiderivative of $f(x) = \\frac{3}{\\sqrt{x}}$?',
            options: ['$6\\sqrt{x} + C$', '$\\frac{3}{2}\\sqrt{x} + C$', '$-\\frac{3}{2\\sqrt{x}} + C$', '$3\\ln|\\sqrt{x}| + C$'],
            correctAnswer: 0,
            explanation: '$\\frac{3}{\\sqrt{x}} = 3x^{-1/2}$. $\\int 3x^{-1/2}\\,dx = 3 \\cdot \\frac{x^{1/2}}{1/2} + C = 6x^{1/2} + C = 6\\sqrt{x} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each integral with its result.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int x^{-1}\\,dx =$',
            options: ['$\\frac{x^0}{0} + C$', '$\\ln|x| + C$', '$-x^{-2} + C$', '$1 + C$'],
            correctAnswers: ['$\\ln|x| + C$'],
            hints: ['This is the special case where the Power Rule does NOT apply.'],
            explanation: '$n = -1$ is the exception to the Power Rule. $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$.'
          },
          {
            label: '$\\int x^{-1/2}\\,dx =$',
            options: ['$\\frac{x^{1/2}}{1/2} + C$', '$-\\frac{1}{2}x^{-3/2} + C$', '$\\ln|x^{1/2}| + C$', '$x^{1/2} + C$'],
            correctAnswers: ['$\\frac{x^{1/2}}{1/2} + C$'],
            hints: ['Power Rule: add 1 to $-1/2$ to get $1/2$, then divide.'],
            explanation: '$\\int x^{-1/2}\\,dx = \\frac{x^{1/2}}{1/2} + C = 2\\sqrt{x} + C$.'
          },
          {
            label: '$\\int 0\\,dx =$',
            options: ['$0$', '$C$', '$x + C$', 'Undefined'],
            correctAnswers: ['$C$'],
            hints: ['What function has derivative 0?'],
            explanation: 'Any constant function has derivative 0, so $\\int 0\\,dx = C$.'
          }
        ]
      }
    },
    {
      id: 'anti1-input',
      type: 'input-box' as const,
      content: '**Compute the coefficient.** ✍️',
      exercise: {
        question: 'If $\\int x^{n}\\,dx = \\frac{2}{5}x^{5/2} + C$, what is $n$?',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2', '1.5'],
        hints: [
          'The result has exponent $5/2$, and the Power Rule gives exponent $n+1$.',
          'So $n + 1 = 5/2$.',
          'Solve for $n$.'
        ],
        explanation: 'By the Power Rule, $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$.\\n\\nThe exponent in the answer is $5/2$, so $n+1 = 5/2$, giving $n = 3/2$.\\n\\nCheck: $\\int x^{3/2}\\,dx = \\frac{x^{5/2}}{5/2} + C = \\frac{2}{5}x^{5/2} + C$ ✓'
      }
    },
    {
      id: 'anti1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

$$\\boxed{\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)}$$

| Concept | Key Rule |
|:---:|:---:|
| Antiderivative | $F'(x) = f(x)$ means $F$ is an antiderivative of $f$ |
| Indefinite integral | Family of ALL antiderivatives: $F(x) + C$ |
| Power Rule | Add 1 to exponent, divide by new exponent |
| Exception | $n = -1$: use $\\ln|x| + C$ |
| Linearity | Constants factor out, sums split apart |
| Check | Always verify by differentiating |

> **Up Next:** Part 2 — Essential Antiderivative Formulas (trig, exponential, and more).`
    }
  ]
};
