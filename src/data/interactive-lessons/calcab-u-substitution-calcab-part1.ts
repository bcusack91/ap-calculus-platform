export const calcabUSubPart1Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub1-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 1 of 7 — Basic u-Substitution**

| Part | Topic |
|:---:|:---:|
| **1** | **Basic u-Substitution** |
| 2 | Adjusting for Missing Constants |
| 3 | Definite Integrals with u-Sub |
| 4 | Trickier Substitutions |
| 5 | Long Division & Completing the Square |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Review |

### The Big Idea

$$\\boxed{\\text{u-Substitution is the REVERSE of the Chain Rule}}$$

The Chain Rule says: $\\frac{d}{dx}[F(g(x))] = F'(g(x)) \\cdot g'(x) = f(g(x)) \\cdot g'(x)$.

Working backwards: $\\int f(g(x)) \\cdot g'(x)\\,dx = F(g(x)) + C$.

### The 5-Step Method

| Step | Action | Example: $\\int 2x\\cos(x^2)\\,dx$ |
|:---:|:---:|:---:|
| 1 | Choose $u$ = inner function | $u = x^2$ |
| 2 | Find $du$ | $du = 2x\\,dx$ |
| 3 | Rewrite in terms of $u$ | $\\int \\cos(u)\\,du$ |
| 4 | Integrate | $\\sin(u) + C$ |
| 5 | Substitute back | $\\sin(x^2) + C$ |`
    },
    {
      id: 'usub1-choosing',
      type: 'text' as const,
      content: `### How to Choose $u$

$$\\boxed{u = \\text{the inner function of a composition}}$$

| Look For | Choose $u$ | Why |
|:---:|:---:|:---:|
| $(\\text{stuff})^n$ with its derivative nearby | $u = \\text{stuff}$ | Power of a function |
| $e^{\\text{stuff}}$ with derivative of stuff | $u = \\text{stuff}$ | Exponential compound |
| $\\sin(\\text{stuff})$, $\\cos(\\text{stuff})$ | $u = \\text{stuff}$ | Trig compound |
| $\\ln(\\text{stuff})$ in denominator | $u = \\text{stuff}$ | Log pattern |

### Worked Examples

**Example 1:** $\\int 3x^2 e^{x^3}\\,dx$

$u = x^3$, $du = 3x^2\\,dx$ → $\\int e^u\\,du = e^{x^3} + C$

**Example 2:** $\\int \\frac{5}{(5x+1)^3}\\,dx$

$u = 5x+1$, $du = 5\\,dx$ → $\\int u^{-3}\\,du = -\\frac{1}{2}u^{-2} + C = -\\frac{1}{2(5x+1)^2} + C$

**Example 3:** $\\int x\\sqrt{x^2+1}\\,dx$

$u = x^2+1$, $du = 2x\\,dx$, so $x\\,dx = \\frac{du}{2}$

$\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{2} \\cdot \\frac{2}{3}u^{3/2} = \\frac{1}{3}(x^2+1)^{3/2} + C$

> **AP Tip:** Always check your answer by differentiating! If $\\frac{d}{dx}[\\text{answer}] = \\text{integrand}$, you're correct.`
    },
    {
      id: 'usub1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Basic u-Substitution** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int 4x(x^2 + 3)^5\\,dx$.',
            options: ['$\\frac{(x^2+3)^6}{3} + C$', '$\\frac{(x^2+3)^6}{6} + C$', '$\\frac{2(x^2+3)^6}{3} + C$', '$4 \\cdot \\frac{(x^2+3)^6}{6} + C$'],
            correctAnswer: 0,
            explanation: '$u = x^2+3$, $du = 2x\\,dx$, so $4x\\,dx = 2\\,du$. $2\\int u^5\\,du = \\frac{2u^6}{6} = \\frac{(x^2+3)^6}{3} + C$.'
          },
          {
            question: 'Evaluate $\\int \\cos(3x)\\,dx$.',
            options: ['$\\sin(3x) + C$', '$3\\sin(3x) + C$', '$\\frac{\\sin(3x)}{3} + C$', '$-\\sin(3x) + C$'],
            correctAnswer: 2,
            explanation: '$u = 3x$, $du = 3\\,dx$. $\\frac{1}{3}\\int \\cos u\\,du = \\frac{\\sin(3x)}{3} + C$.'
          },
          {
            question: 'Evaluate $\\int x\\sqrt{x^2 + 1}\\,dx$.',
            options: ['$\\frac{1}{3}(x^2+1)^{3/2} + C$', '$\\frac{2}{3}(x^2+1)^{3/2} + C$', '$\\frac{1}{2}(x^2+1)^{3/2} + C$', '$(x^2+1)^{3/2} + C$'],
            correctAnswer: 0,
            explanation: '$u = x^2+1$, $du = 2x\\,dx$. $\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{3}(x^2+1)^{3/2} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub1-common',
      type: 'text' as const,
      content: `### The Linear Substitution Shortcut

For $\\int f(ax + b)\\,dx$ where $f$ has a known antiderivative $F$:

$$\\boxed{\\int f(ax+b)\\,dx = \\frac{1}{a}F(ax+b) + C}$$

| Integral | Result | Using $a = $ |
|:---:|:---:|:---:|
| $\\int \\sin(5x)\\,dx$ | $-\\frac{1}{5}\\cos(5x) + C$ | $a = 5$ |
| $\\int e^{-2x}\\,dx$ | $-\\frac{1}{2}e^{-2x} + C$ | $a = -2$ |
| $\\int (3x+7)^4\\,dx$ | $\\frac{(3x+7)^5}{15} + C$ | $a = 3$ |
| $\\int \\sec^2(4x)\\,dx$ | $\\frac{1}{4}\\tan(4x) + C$ | $a = 4$ |

> **Key Fact:** This shortcut ONLY works for LINEAR inner functions ($ax + b$). For nonlinear inner functions, you must do the full u-sub process.`
    },
    {
      id: 'usub1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the right $u$ for each integral.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\int x^3 \\cos(x^4)\\,dx$, choose $u =$:',
            options: ['$x^3$', '$x^4$', '$\\cos(x^4)$', '$x^3\\cos(x^4)$'],
            correctAnswers: ['$x^4$'],
            hints: ['$x^4$ is the inner function, and $x^3$ is related to its derivative.'],
            explanation: '$u = x^4$, $du = 4x^3\\,dx$. Then $\\frac{1}{4}\\int \\cos u\\,du = \\frac{\\sin(x^4)}{4} + C$.'
          },
          {
            label: 'For $\\int \\frac{e^x}{1+e^x}\\,dx$, choose $u =$:',
            options: ['$e^x$', '$1 + e^x$', '$\\frac{1}{1+e^x}$', '$\\ln(1+e^x)$'],
            correctAnswers: ['$1 + e^x$'],
            hints: ['Look for $\\frac{f\'}{f}$ pattern — the derivative of the denominator is in the numerator.'],
            explanation: '$u = 1+e^x$, $du = e^x\\,dx$. $\\int \\frac{du}{u} = \\ln|1+e^x| + C$.'
          },
          {
            label: 'For $\\int \\sin^3(x)\\cos(x)\\,dx$, choose $u =$:',
            options: ['$\\sin^3(x)$', '$\\sin(x)$', '$\\cos(x)$', '$\\sin(x)\\cos(x)$'],
            correctAnswers: ['$\\sin(x)$'],
            hints: ['$\\cos(x)$ is the derivative of $\\sin(x)$, and $\\sin^3(x)$ is a power of $\\sin(x)$.'],
            explanation: '$u = \\sin x$, $du = \\cos x\\,dx$. $\\int u^3\\,du = \\frac{\\sin^4(x)}{4} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub1-input',
      type: 'input-box' as const,
      content: '**Compute the integral.** ✍️',
      exercise: {
        question: 'Evaluate $\\int_0^2 x(x^2+1)^3\\,dx$.\n\n(Enter a fraction like a/b or a whole number.)',
        correctAnswer: '78',
        acceptableAnswers: ['78', '78.0'],
        hints: [
          'Let $u = x^2+1$, $du = 2x\\,dx$.',
          'Change limits: $x=0 \\Rightarrow u=1$, $x=2 \\Rightarrow u=5$.',
          '$\\frac{1}{2}\\int_1^5 u^3\\,du = \\frac{1}{2} \\cdot \\frac{u^4}{4}\\Big|_1^5 = \\frac{1}{8}(625 - 1)$.'
        ],
        explanation: '$u = x^2+1$. $\\frac{1}{2}\\int_1^5 u^3\\,du = \\frac{1}{8}[u^4]_1^5 = \\frac{1}{8}(625-1) = \\frac{624}{8} = 78$.'
      }
    },
    {
      id: 'usub1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Key Rule |
|:---:|:---:|
| u-Sub = reverse Chain Rule | $\\int f(g(x))g'(x)\\,dx = F(g(x)) + C$ |
| Choose $u$ | Inner function of composition |
| Find $du$ | Differentiate $u$ |
| Linear shortcut | $\\int f(ax+b) = \\frac{1}{a}F(ax+b)$ |
| Verify | Differentiate your answer! |

> **Up Next:** Part 2 — Adjusting for Missing Constants.`
    }
  ]
};
