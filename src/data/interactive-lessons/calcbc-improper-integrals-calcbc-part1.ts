export const calcbcImproperPart1Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp1-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 1 of 7 \u2014 Infinite Limits of Integration (Type I)**

An improper integral has either an infinite limit of integration or an integrand with a discontinuity. This part covers **Type I** \u2014 integrals to $\\pm\\infty$.

| Part | Topic |
|------|-------|
| **1** | **Infinite Limits (Type I)** |
| 2 | Discontinuous Integrands (Type II) |
| 3 | Convergence vs. Divergence |
| 4 | Comparison Tests |
| 5 | The p-Integral Test |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Review |`
    },
    {
      id: 'imp1-definition',
      type: 'text' as const,
      content: `### Definition of Type I Improper Integrals

$$\\boxed{\\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx}$$

$$\\int_{-\\infty}^{b} f(x)\\,dx = \\lim_{t \\to -\\infty} \\int_t^b f(x)\\,dx$$

$$\\int_{-\\infty}^{\\infty} f(x)\\,dx = \\int_{-\\infty}^{c} f(x)\\,dx + \\int_c^{\\infty} f(x)\\,dx$$

| If the limit... | The integral... |
|----------------|----------------|
| Exists and is finite | **Converges** |
| Is $\\pm\\infty$ or DNE | **Diverges** |

> **Key Fact:** For $\\int_{-\\infty}^{\\infty}$, split at any convenient point $c$ (often $c = 0$). BOTH halves must converge for the whole integral to converge.`
    },
    {
      id: 'imp1-example',
      type: 'text' as const,
      content: `### Worked Example: $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$

| Step | Work |
|------|------|
| Replace $\\infty$ with $t$ | $\\lim_{t \\to \\infty} \\int_1^t x^{-2}\\,dx$ |
| Antiderivative | $\\lim_{t \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^t$ |
| Evaluate bounds | $\\lim_{t \\to \\infty} \\left(-\\frac{1}{t} + 1\\right)$ |
| Take limit | $0 + 1 = 1$ |

$$\\boxed{\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = 1 \\quad (\\text{converges})}$$

### Contrast: $\\int_1^{\\infty} \\frac{1}{x}\\,dx$

$\\lim_{t \\to \\infty} [\\ln t - \\ln 1] = \\lim_{t \\to \\infty} \\ln t = \\infty$

$$\\int_1^{\\infty} \\frac{1}{x}\\,dx = \\infty \\quad (\\text{diverges})$$

> **AP Tip:** This contrast ($1/x^2$ converges, $1/x$ diverges) is fundamental. The \u201cborder\u201d between convergence and divergence is explored in Part 5 with the p-integral test.`
    },
    {
      id: 'imp1-mc1',
      type: 'multiple-choice' as const,
      content: '**Type I Practice**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{\\infty} e^{-x}\\,dx = $',
            options: ['$1$', '$\\infty$', '$0$', '$e$'],
            correctAnswer: 0,
            explanation: '$\\lim_{t \\to \\infty} [-e^{-x}]_0^t = \\lim_{t \\to \\infty} (-e^{-t} + 1) = 0 + 1 = 1$. Converges to 1.'
          },
          {
            question: '$\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\,dx$ is:',
            options: [
              'Divergent',
              'Convergent to 2',
              'Convergent to 1',
              'Convergent to $\\sqrt{2}$'
            ],
            correctAnswer: 0,
            explanation: '$\\lim_{t \\to \\infty} [2\\sqrt{x}]_1^t = \\lim_{t \\to \\infty} (2\\sqrt{t} - 2) = \\infty$. Diverges.'
          },
          {
            question: '$\\int_0^{\\infty} e^{-3x}\\,dx = $',
            options: ['$\\frac{1}{3}$', '$3$', '$\\frac{1}{e^3}$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$\\lim_{t \\to \\infty} [-\\frac{1}{3}e^{-3x}]_0^t = 0 - (-\\frac{1}{3}) = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'imp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Convergence or Divergence?**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_1^{\\infty} \\frac{1}{x^3}\\,dx$',
            options: ['Converges', 'Diverges'],
            correctAnswers: ['Converges'],
            hints: ['$\\frac{1}{x^3} = x^{-3}$. The antiderivative is $-\\frac{1}{2x^2}$, which goes to 0 as $x \\to \\infty$.'],
            explanation: '$\\lim_{t \\to \\infty} [-\\frac{1}{2x^2}]_1^t = 0 + \\frac{1}{2} = \\frac{1}{2}$. Converges.'
          },
          {
            label: '$\\int_2^{\\infty} \\frac{1}{x\\ln x}\\,dx$',
            options: ['Converges', 'Diverges'],
            correctAnswers: ['Diverges'],
            hints: ['Let $u = \\ln x$, $du = \\frac{1}{x}\\,dx$. The integral becomes $\\int_{\\ln 2}^{\\infty} \\frac{1}{u}\\,du$.'],
            explanation: 'After substitution: $\\int_{\\ln 2}^{\\infty} \\frac{1}{u}\\,du = [\\ln u]_{\\ln 2}^{\\infty} = \\infty$. Diverges.'
          }
        ]
      }
    },
    {
      id: 'imp1-input',
      type: 'input-box' as const,
      content: '**Evaluate an Improper Integral**',
      exercise: {
        question: 'Evaluate $\\int_0^{\\infty} 2e^{-2x}\\,dx$. Replace $\\infty$ with $t$, find the antiderivative, take the limit. What is the exact value?',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['Antiderivative of $2e^{-2x}$ is $-e^{-2x}$.', '$\\lim_{t \\to \\infty} [-e^{-2x}]_0^t = (0) - (-1) = 1$.'],
        explanation: '$\\lim_{t \\to \\infty} [-e^{-2t} + e^0] = 0 + 1 = 1$.'
      }
    },
    {
      id: 'imp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

| Integral | Result |
|----------|--------|
| $\\int_1^{\\infty} \\frac{1}{x}\\,dx$ | Diverges |
| $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ | $1$ (converges) |
| $\\int_0^{\\infty} e^{-x}\\,dx$ | $1$ (converges) |
| $\\int_0^{\\infty} e^{-ax}\\,dx$ | $\\frac{1}{a}$ for $a > 0$ |

> **Coming Up:** Part 2 covers **Type II improper integrals** \u2014 when the integrand has a discontinuity within the interval.`
    }
  ]
};
