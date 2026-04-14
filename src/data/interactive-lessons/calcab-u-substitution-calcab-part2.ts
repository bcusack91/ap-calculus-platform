export const calcabUSubPart2Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub2-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 2 of 7 — Adjusting for Missing Constants**

### When $du$ Doesn't Match Exactly

Often the constant coefficient doesn't match. You can **multiply and divide by constants** to fix this.

$$\\boxed{\\int f(g(x)) \\cdot k \\cdot g'(x)\\,dx = k \\int f(u)\\,du}$$

### Worked Example

$$\\int x^2 e^{x^3}\\,dx$$

$u = x^3$, $du = 3x^2\\,dx$. We have $x^2\\,dx$ but need $3x^2\\,dx$:

$$\\frac{1}{3}\\int 3x^2 e^{x^3}\\,dx = \\frac{1}{3}\\int e^u\\,du = \\frac{e^{x^3}}{3} + C$$

> **Key Fact:** You can ONLY move **constants** outside the integral. You can NEVER move a variable ($x$, $t$, etc.) outside!`
    },
    {
      id: 'usub2-patterns',
      type: 'text' as const,
      content: `### Essential Patterns to Recognize

| Pattern | Choose $u$ | Result |
|:---:|:---:|:---:|
| $\\int f(ax+b)\\,dx$ | $u = ax+b$ | $\\frac{1}{a}F(ax+b) + C$ |
| $\\int x^{n-1} f(x^n)\\,dx$ | $u = x^n$ | $\\frac{1}{n}F(x^n) + C$ |
| $\\int f(\\sin x)\\cos x\\,dx$ | $u = \\sin x$ | $F(\\sin x) + C$ |
| $\\int f(\\cos x)\\sin x\\,dx$ | $u = \\cos x$ | $-F(\\cos x) + C$ |
| $\\int f(\\tan x)\\sec^2 x\\,dx$ | $u = \\tan x$ | $F(\\tan x) + C$ |
| $\\int f(e^x)e^x\\,dx$ | $u = e^x$ | $F(e^x) + C$ |
| $\\int f(\\ln x)\\frac{1}{x}\\,dx$ | $u = \\ln x$ | $F(\\ln x) + C$ |
| $\\int \\frac{f'(x)}{f(x)}\\,dx$ | $u = f(x)$ | $\\ln|f(x)| + C$ |

### The $\\frac{f'}{f} \\to \\ln$ Pattern

This is one of the most important patterns:

$$\\boxed{\\int \\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)| + C}$$

**Example:** $\\int \\tan x\\,dx = \\int \\frac{\\sin x}{\\cos x}\\,dx$

$u = \\cos x$, $du = -\\sin x\\,dx$: $-\\int \\frac{du}{u} = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$`
    },
    {
      id: 'usub2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Pattern Recognition** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x}{x^2 + 4}\\,dx$.',
            options: ['$\\ln(x^2+4) + C$', '$\\frac{1}{2}\\ln|x^2+4| + C$', '$\\arctan(x/2) + C$', '$\\frac{\\ln(x^2+4)}{2x} + C$'],
            correctAnswer: 1,
            explanation: '$u = x^2+4$, $du = 2x\\,dx$. $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|x^2+4| + C$.'
          },
          {
            question: 'Evaluate $\\int \\sin^4(x)\\cos(x)\\,dx$.',
            options: ['$\\frac{\\sin^5(x)}{5} + C$', '$-\\frac{\\cos^5(x)}{5} + C$', '$\\frac{\\sin^4(x)}{4} + C$', '$\\sin^5(x) + C$'],
            correctAnswer: 0,
            explanation: '$u = \\sin x$, $du = \\cos x\\,dx$. $\\int u^4\\,du = \\frac{u^5}{5} = \\frac{\\sin^5(x)}{5} + C$.'
          },
          {
            question: 'Evaluate $\\int \\tan x\\,dx$.',
            options: ['$\\sec^2 x + C$', '$-\\ln|\\cos x| + C$', '$\\ln|\\sin x| + C$', '$\\sec x + C$'],
            correctAnswer: 1,
            explanation: '$\\int \\frac{\\sin x}{\\cos x}\\,dx$. $u = \\cos x$, $du = -\\sin x\\,dx$. $-\\ln|\\cos x| + C$.'
          }
        ]
      }
    },
    {
      id: 'usub2-cantdo',
      type: 'text' as const,
      content: `### What u-Sub CANNOT Do

| Invalid Operation | Why It Fails |
|:---:|:---:|
| Move $x$ outside: $x\\int \\ldots$ | Variables aren't constant! |
| $\\int e^{x^2}\\,dx$ | No elementary antiderivative exists |
| $\\int \\sin(x^2)\\,dx$ | No closed form (Fresnel integral) |
| Product of unrelated functions | u-sub needs $f(g(x)) \\cdot g'(x)$ pattern |

> **AP Tip:** If you can't find a $u$ that works, the problem might require a different technique (rewriting, inverse trig, etc.) or the integrand might already be in a recognized form.`
    },
    {
      id: 'usub2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the pattern.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{\\cos x}{\\sin x}\\,dx$ is the pattern:',
            options: ['Power rule', '$f\'/f \\to \\ln$', 'Trig identity', 'Inverse trig'],
            correctAnswers: ['$f\'/f \\to \\ln$'],
            hints: ['$\\cos x$ is the derivative of $\\sin x$, and it divides $\\sin x$.'],
            explanation: '$u = \\sin x$: $\\int \\frac{du}{u} = \\ln|\\sin x| + C$.'
          },
          {
            label: '$\\int (2x+5)^7\\,dx$ uses:',
            options: ['Full u-sub process', 'Linear shortcut $\\frac{1}{a}F(ax+b)$', 'Cannot be done with u-sub', 'Requires long division'],
            correctAnswers: ['Linear shortcut $\\frac{1}{a}F(ax+b)$'],
            hints: ['The inner function is linear: $2x+5$.'],
            explanation: '$\\frac{1}{2} \\cdot \\frac{(2x+5)^8}{8} = \\frac{(2x+5)^8}{16} + C$.'
          },
          {
            label: '$\\int x^2 \\sin(x^3)\\,dx$ needs adjustment because:',
            options: ['$du = 3x^2\\,dx$ but we have $x^2\\,dx$', 'There is no $u$ that works', 'We need inverse trig', 'The function is odd'],
            correctAnswers: ['$du = 3x^2\\,dx$ but we have $x^2\\,dx$'],
            hints: ['$u = x^3$ gives $du = 3x^2\\,dx$. We only have $x^2\\,dx$, so multiply by $1/3$.'],
            explanation: '$u = x^3$, $du = 3x^2\\,dx$. Factor: $\\frac{1}{3}\\int \\sin u\\,du = -\\frac{\\cos(x^3)}{3} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub2-input',
      type: 'input-box' as const,
      content: '**Apply the pattern.** ✍️',
      exercise: {
        question: 'Evaluate $\\int_0^{\\pi/2} \\sin^3(x)\\cos(x)\\,dx$.\n\n(Enter a fraction like a/b.)',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25', '0.250'],
        hints: [
          '$u = \\sin x$, $du = \\cos x\\,dx$.',
          'Change limits: $x=0 \\Rightarrow u=0$, $x=\\pi/2 \\Rightarrow u=1$.',
          '$\\int_0^1 u^3\\,du = \\frac{u^4}{4}\\Big|_0^1$.'
        ],
        explanation: '$u = \\sin x$. $\\int_0^1 u^3\\,du = [u^4/4]_0^1 = 1/4$.'
      }
    },
    {
      id: 'usub2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Key Rule |
|:---:|:---:|
| Constant adjustment | Multiply/divide by constants to match $du$ |
| $f'/f$ pattern | $\\int \\frac{f'}{f} = \\ln|f| + C$ |
| CANNOT move variables outside | Only constants can come out of $\\int$ |
| No elementary form | Some integrals (like $e^{x^2}$) have no closed form |

> **Up Next:** Part 3 — Definite Integrals with u-Sub.`
    }
  ]
};
