export const calcabExpModelsPart4Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp4-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 4 of 7 \u2014 Derivatives & Integrals of Exponentials**

### Derivative Rules

$$\\boxed{\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[e^{kx}] = ke^{kx}}$$

$$\\boxed{\\frac{d}{dx}[a^x] = a^x \\ln a \\qquad \\frac{d}{dx}[a^{g(x)}] = a^{g(x)} \\cdot (\\ln a) \\cdot g'(x)}$$

### Integration Rules

$$\\boxed{\\int e^{kx}\\,dx = \\frac{1}{k}e^{kx} + C \\qquad \\int a^x\\,dx = \\frac{a^x}{\\ln a} + C}$$

### Complete Reference Table

| Function | Derivative | Integral |
|:---:|:---:|:---:|
| $e^x$ | $e^x$ | $e^x + C$ |
| $e^{kx}$ | $ke^{kx}$ | $\\frac{1}{k}e^{kx} + C$ |
| $e^{g(x)}$ | $e^{g(x)} \\cdot g'(x)$ | Use u-sub |
| $a^x$ | $a^x \\ln a$ | $\\frac{a^x}{\\ln a} + C$ |
| $\\ln x$ | $\\frac{1}{x}$ | $x\\ln x - x + C$ |

> **Key Fact:** $e^x$ is the only function that is its own derivative AND its own antiderivative.`
    },
    {
      id: 'exp4-worked',
      type: 'text' as const,
      content: `### Worked Examples

**Derivatives:**

| Function | Chain Rule Application | Result |
|:---:|:---:|:---:|
| $e^{3x^2}$ | $e^{3x^2} \\cdot 6x$ | $6xe^{3x^2}$ |
| $2^{\\sin x}$ | $2^{\\sin x} \\cdot \\ln 2 \\cdot \\cos x$ | $(\\ln 2)(\\cos x) \\cdot 2^{\\sin x}$ |
| $e^{x^2+1}$ | $e^{x^2+1} \\cdot 2x$ | $2xe^{x^2+1}$ |

**Integrals:**

| Integral | Method | Result |
|:---:|:---:|:---:|
| $\\int e^{-3x}dx$ | Direct: $k=-3$ | $-\\frac{1}{3}e^{-3x}+C$ |
| $\\int xe^{x^2}dx$ | $u=x^2$, $du=2x\\,dx$ | $\\frac{1}{2}e^{x^2}+C$ |
| $\\int_0^1 e^{2x}dx$ | $[\\frac{1}{2}e^{2x}]_0^1$ | $\\frac{e^2-1}{2}$ |
| $\\int 3^x dx$ | $\\frac{a^x}{\\ln a}$ rule | $\\frac{3^x}{\\ln 3}+C$ |`
    },
    {
      id: 'exp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Calculus** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\int_0^1 3e^{2x}\\,dx =$',
            options: ['$\\frac{3}{2}(e^2 - 1)$', '$3(e^2 - 1)$', '$\\frac{3}{2}e^2$', '$3e^2$'],
            correctAnswer: 0,
            explanation: '$3 \\cdot \\frac{1}{2}[e^{2x}]_0^1 = \\frac{3}{2}(e^2-1)$.'
          },
          {
            question: '$\\frac{d}{dx}[x \\cdot e^x] =$',
            options: ['$xe^x$', '$e^x + xe^x$', '$e^x$', '$xe^x + e^x \\cdot 1 = (x+1)e^x$'],
            correctAnswer: 3,
            explanation: 'Product rule: $1 \\cdot e^x + x \\cdot e^x = (x+1)e^x$.'
          },
          {
            question: '$\\int 2^x\\,dx =$',
            options: ['$\\frac{2^x}{\\ln 2} + C$', '$2^x \\ln 2 + C$', '$\\frac{2^{x+1}}{x+1} + C$', '$2^x + C$'],
            correctAnswer: 0,
            explanation: '$\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$.'
          }
        ]
      }
    },
    {
      id: 'exp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each integral.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int e^{5x}\\,dx =$',
            options: ['$5e^{5x}+C$', '$\\frac{1}{5}e^{5x}+C$', '$e^{5x}+C$', '$\\frac{e^{5x+1}}{5x+1}+C$'],
            correctAnswers: ['$\\frac{1}{5}e^{5x}+C$'],
            hints: ['$\\int e^{kx}dx = \\frac{1}{k}e^{kx}+C$ with $k=5$.'],
            explanation: '$\\frac{1}{5}e^{5x}+C$.'
          },
          {
            label: '$\\frac{d}{dx}[e^{\\sqrt{x}}] =$',
            options: ['$e^{\\sqrt{x}}$', '$\\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$', '$\\sqrt{x} \\cdot e^{\\sqrt{x}-1}$', '$2\\sqrt{x} \\cdot e^{\\sqrt{x}}$'],
            correctAnswers: ['$\\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$'],
            hints: ['Chain rule: $e^{\\sqrt{x}} \\cdot \\frac{d}{dx}[\\sqrt{x}] = e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}}$.'],
            explanation: '$e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}}$.'
          },
          {
            label: '$\\int_0^{\\ln 3} e^x\\,dx =$',
            options: ['$\\ln 3$', '$3$', '$2$', '$e^3 - 1$'],
            correctAnswers: ['$2$'],
            hints: ['$[e^x]_0^{\\ln 3} = e^{\\ln 3} - e^0$.'],
            explanation: '$e^{\\ln 3} - 1 = 3 - 1 = 2$.'
          }
        ]
      }
    },
    {
      id: 'exp4-input',
      type: 'input-box' as const,
      content: '**Evaluate the integral.** \u270d\ufe0f',
      exercise: {
        question: '$\\int_0^2 xe^{x^2}\\,dx = \\frac{a}{b}(e^c - 1)$. Find $a + b + c$.\n\n(Enter an integer.)',
        correctAnswer: '7',
        acceptableAnswers: ['7'],
        hints: [
          'Let $u = x^2$, $du = 2x\\,dx$, so $x\\,dx = \\frac{1}{2}du$.',
          'Limits: $x=0 \\Rightarrow u=0$, $x=2 \\Rightarrow u=4$.',
          '$\\frac{1}{2}\\int_0^4 e^u\\,du = \\frac{1}{2}(e^4-1)$. So $a=1, b=2, c=4$.'
        ],
        explanation: '$\\frac{1}{2}(e^4-1)$. $a=1, b=2, c=4$. $a+b+c=7$.'
      }
    },
    {
      id: 'exp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Rule | Formula |
|:---:|:---:|
| $\\frac{d}{dx}[e^{kx}]$ | $ke^{kx}$ |
| $\\int e^{kx}\\,dx$ | $\\frac{1}{k}e^{kx}+C$ |
| $\\frac{d}{dx}[a^x]$ | $a^x \\ln a$ |
| $\\int a^x\\,dx$ | $\\frac{a^x}{\\ln a}+C$ |

> **Up Next:** Part 5 \u2014 Logistic Growth.`
    }
  ]
};
