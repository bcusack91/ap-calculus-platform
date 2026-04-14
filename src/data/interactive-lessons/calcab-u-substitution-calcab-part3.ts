export const calcabUSubPart3Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub3-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 3 of 7 — Definite Integrals with u-Substitution**

### Two Approaches

When evaluating a definite integral with u-substitution, you have two choices:

| Method | Steps | When to Use |
|:---:|:---:|:---:|
| **Change the limits** | Convert everything to $u$, including bounds | Cleaner — preferred on AP Exam |
| **Back-substitute** | Find antiderivative in terms of $x$, then evaluate | When limits are easy to convert back |

$$\\boxed{\\int_a^b f(g(x))g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du}$$

> **Key Fact:** When you change limits, you NEVER need to convert back to $x$. Evaluate directly in $u$.`
    },
    {
      id: 'usub3-method1',
      type: 'text' as const,
      content: `### Method 1: Change the Limits (Recommended)

**Step-by-step process:**

| Step | Action | Example: $\\int_0^2 x(x^2+1)^3\\,dx$ |
|:---:|:---:|:---:|
| 1 | Choose $u$ | $u = x^2+1$ |
| 2 | Find $du$ | $du = 2x\\,dx \\Rightarrow x\\,dx = \\frac{du}{2}$ |
| 3 | Convert lower limit | $x=0 \\Rightarrow u = 0^2+1 = 1$ |
| 4 | Convert upper limit | $x=2 \\Rightarrow u = 2^2+1 = 5$ |
| 5 | Rewrite & evaluate | $\\frac{1}{2}\\int_1^5 u^3\\,du = \\frac{1}{2}\\cdot\\frac{u^4}{4}\\Big|_1^5 = \\frac{5^4-1^4}{8} = 78$ |

### Common Mistakes When Changing Limits

| Mistake | Problem | Fix |
|:---:|:---:|:---:|
| Keeping old limits | $\\int_0^2 u^3\\,du$ is WRONG | Convert: $\\int_1^5 u^3\\,du$ |
| Back-substituting anyway | Unnecessary extra work | Just evaluate in $u$ |
| Forgetting the constant | Missing $\\frac{1}{2}$ out front | Track the $du$ adjustment |`
    },
    {
      id: 'usub3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice with changing limits.** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\int_0^1 2x\\,e^{x^2}\\,dx$, if $u = x^2$, the new limits are:',
            options: ['$u: 0$ to $1$', '$u: 0$ to $2$', '$u: 1$ to $2$', '$u: 0$ to $e$'],
            correctAnswer: 0,
            explanation: '$x=0 \\Rightarrow u=0^2=0$. $x=1 \\Rightarrow u=1^2=1$. New limits: $0$ to $1$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi/4} \\sec^2(x)\\tan(x)\\,dx$.',
            options: ['$1$', '$\\frac{1}{2}$', '$\\frac{\\pi}{4}$', '$2$'],
            correctAnswer: 1,
            explanation: '$u = \\tan x$, $du = \\sec^2 x\\,dx$. $x=0 \\to u=0$, $x=\\pi/4 \\to u=1$. $\\int_0^1 u\\,du = u^2/2\\Big|_0^1 = 1/2$.'
          },
          {
            question: 'For $\\int_1^e \\frac{(\\ln x)^2}{x}\\,dx$, the substitution $u = \\ln x$ gives limits:',
            options: ['$u: 1$ to $e$', '$u: 0$ to $1$', '$u: 0$ to $e$', '$u: 1$ to $0$'],
            correctAnswer: 1,
            explanation: '$x=1 \\Rightarrow u=\\ln 1=0$. $x=e \\Rightarrow u=\\ln e=1$. Limits: $0$ to $1$.'
          }
        ]
      }
    },
    {
      id: 'usub3-method2',
      type: 'text' as const,
      content: `### Method 2: Back-Substitute

With this method, you integrate in $u$, convert back to $x$, then evaluate with original limits.

**Example:** $\\int_0^{\\pi} \\sin^2(x)\\cos(x)\\,dx$

$u = \\sin x$, $du = \\cos x\\,dx$:

$$\\int u^2\\,du = \\frac{u^3}{3} + C$$

Back-substitute: $\\frac{\\sin^3(x)}{3}\\Big|_0^{\\pi} = \\frac{\\sin^3(\\pi)}{3} - \\frac{\\sin^3(0)}{3} = 0 - 0 = 0$

> **AP Tip:** The answer being $0$ makes sense! $\\sin^2(x)\\cos(x)$ is an odd function about $x = \\pi/2$ on $[0,\\pi]$.

### Side-by-Side Comparison

| Feature | Change Limits | Back-Substitute |
|:---:|:---:|:---:|
| Convert bounds? | Yes, to $u$ | No |
| Convert back to $x$? | No | Yes |
| Risk of errors | Slightly lower | Slightly higher |
| Speed | Usually faster | May be slower |`
    },
    {
      id: 'usub3-symmetry',
      type: 'text' as const,
      content: `### Even/Odd Shortcuts with u-Sub

$$\\boxed{\\text{If } f \\text{ is even: } \\int_{-a}^a f(x)\\,dx = 2\\int_0^a f(x)\\,dx}$$

$$\\boxed{\\text{If } f \\text{ is odd: } \\int_{-a}^a f(x)\\,dx = 0}$$

| Integrand | Even/Odd | $\\int_{-a}^a$ |
|:---:|:---:|:---:|
| $x^2 e^{-x^2}$ | Even ($(-x)^2 e^{-(-x)^2} = x^2 e^{-x^2}$) | $= 2\\int_0^a$ |
| $x^3 \\cos x$ | Odd (odd $\\times$ even = odd) | $= 0$ |
| $\\sin^3 x$ | Odd | $= 0$ |
| $x^4 + x^2$ | Even | $= 2\\int_0^a$ |

> **Key Fact:** Spotting symmetry on the AP Exam can save significant time and avoid messy computations.`
    },
    {
      id: 'usub3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the best approach.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_{-3}^{3} x^5 e^{x^2}\\,dx$ equals:',
            options: ['Requires full computation', '$0$ by odd symmetry', '$2\\int_0^3 x^5 e^{x^2}\\,dx$', 'Cannot be evaluated'],
            correctAnswers: ['$0$ by odd symmetry'],
            hints: ['$x^5$ is odd, $e^{x^2}$ is even. Odd $\\times$ even $=$ odd.'],
            explanation: 'The integrand is odd. $\\int_{-a}^a (\\text{odd}) = 0$.'
          },
          {
            label: 'For $\\int_1^4 \\frac{1}{\\sqrt{x}}\\,dx$, using $u = \\sqrt{x}$, the new limits are:',
            options: ['$u: 1$ to $4$', '$u: 1$ to $2$', '$u: 1$ to $16$', '$u: 0$ to $2$'],
            correctAnswers: ['$u: 1$ to $2$'],
            hints: ['$u = \\sqrt{x}$, so $x=1 \\to u=1$ and $x=4 \\to u=\\sqrt{4}=2$.'],
            explanation: '$u = \\sqrt{x}$: $x=1 \\to u=1$, $x=4 \\to u=2$.'
          },
          {
            label: 'After u-sub gives $\\int_2^5 3u\\,du$, you should:',
            options: ['Replace $u$ back with $x$ and use original bounds', 'Evaluate directly: $\\frac{3u^2}{2}\\Big|_2^5$', 'Change bounds back to $x$-values', 'The integral is $0$'],
            correctAnswers: ['Evaluate directly: $\\frac{3u^2}{2}\\Big|_2^5$'],
            hints: ['When you changed limits to $u$-values, you are done — evaluate in $u$.'],
            explanation: 'With $u$-limits already set, evaluate directly: $\\frac{3(25)}{2} - \\frac{3(4)}{2} = \\frac{63}{2}$.'
          }
        ]
      }
    },
    {
      id: 'usub3-input',
      type: 'input-box' as const,
      content: '**Evaluate a definite integral.** ✍️',
      exercise: {
        question: 'Evaluate $\\int_0^1 x(x^2+1)^2\\,dx$.\n\nHint: $u = x^2+1$.\n\n(Give an exact answer as a fraction like a/b.)',
        correctAnswer: '7/6',
        acceptableAnswers: ['7/6'],
        hints: [
          '$u = x^2+1$, $du = 2x\\,dx$, so $x\\,dx = du/2$.',
          'Limits: $x=0 \\to u=1$, $x=1 \\to u=2$.',
          '$\\frac{1}{2}\\int_1^2 u^2\\,du = \\frac{1}{2} \\cdot \\frac{u^3}{3}\\Big|_1^2$.'
        ],
        explanation: '$u = x^2+1$: $\\frac{1}{2}\\int_1^2 u^2\\,du = \\frac{1}{6}[u^3]_1^2 = \\frac{1}{6}(8-1) = \\frac{7}{6}$.'
      }
    },
    {
      id: 'usub3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Concept | Key Rule |
|:---:|:---:|
| Change limits (preferred) | $\\int_a^b \\to \\int_{g(a)}^{g(b)}$, evaluate in $u$ |
| Back-substitute | Integrate in $u$, convert to $x$, use original limits |
| Even function shortcut | $\\int_{-a}^a f = 2\\int_0^a f$ |
| Odd function shortcut | $\\int_{-a}^a f = 0$ |

> **Up Next:** Part 4 — Trickier Substitutions.`
    }
  ]
};
