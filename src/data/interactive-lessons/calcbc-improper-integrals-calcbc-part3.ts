export const calcbcImproperPart3Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp3-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 3 of 7 \u2014 Convergence vs. Divergence**

Not every improper integral needs full computation. Key tests let you determine convergence or divergence quickly. This part builds your toolkit.`
    },
    {
      id: 'imp3-ptest',
      type: 'text' as const,
      content: `### The $p$-Integral (Most Important Test)

$$\\boxed{\\int_1^{\\infty} \\frac{1}{x^p}\\,dx \\quad \\begin{cases} \\text{converges to } \\frac{1}{p-1} & \\text{if } p > 1 \\\\ \\text{diverges} & \\text{if } p \\le 1 \\end{cases}}$$

| Value of $p$ | Integral | Result |
|:---:|:---:|:---:|
| $p = 3$ | $\\int_1^{\\infty} \\frac{1}{x^3}\\,dx$ | $\\frac{1}{2}$ (converges) |
| $p = 2$ | $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ | $1$ (converges) |
| $p = 1$ | $\\int_1^{\\infty} \\frac{1}{x}\\,dx$ | $\\infty$ (diverges) |
| $p = 1/2$ | $\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\,dx$ | $\\infty$ (diverges) |

> **Memory Device:** $p = 1$ is the **boundary** \u2014 converges above, diverges at and below. Think \u201c$p > 1$ wins.\u201d`
    },
    {
      id: 'imp3-ptype2',
      type: 'text' as const,
      content: `### Type II Version of the $p$-Test

$$\\boxed{\\int_0^1 \\frac{1}{x^p}\\,dx \\quad \\begin{cases} \\text{converges to } \\frac{1}{1-p} & \\text{if } p < 1 \\\\ \\text{diverges} & \\text{if } p \\ge 1 \\end{cases}}$$

**The rule flips!** For Type I ($\\int_1^{\\infty}$): converges if $p > 1$. For Type II ($\\int_0^1$): converges if $p < 1$.

| Integral | Type | $p$ | Converges? |
|:---:|:---:|:---:|:---:|
| $\\int_1^{\\infty} \\frac{1}{x^{3/2}}\\,dx$ | I | $3/2 > 1$ | Yes |
| $\\int_0^1 \\frac{1}{x^{3/2}}\\,dx$ | II | $3/2 \\ge 1$ | No |
| $\\int_0^1 \\frac{1}{x^{1/2}}\\,dx$ | II | $1/2 < 1$ | Yes |

> **AP Tip:** The AP exam loves testing whether students confuse the two $p$-test directions. Always identify the type first.`
    },
    {
      id: 'imp3-mc1',
      type: 'multiple-choice' as const,
      content: '**Convergence Quick Checks**',
      exercise: {
        questions: [
          {
            question: '$\\int_1^{\\infty} \\frac{1}{x^{0.99}}\\,dx$:',
            options: [
              'Diverges because $p = 0.99 \\le 1$',
              'Converges because $p$ is close to $1$',
              'Converges to $100$',
              'Cannot determine without computing'
            ],
            correctAnswer: 0,
            explanation: '$p = 0.99 \\le 1$, so the integral diverges by the $p$-test. Being close to $1$ does not help \u2014 the boundary is strict.'
          },
          {
            question: '$\\int_0^{1} \\frac{1}{x^{0.99}}\\,dx$:',
            options: [
              'Converges because $p = 0.99 < 1$',
              'Diverges because $p = 0.99$ is close to $1$',
              'Same answer as $\\int_1^{\\infty} \\frac{1}{x^{0.99}}\\,dx$',
              'Diverges because $p < 1$'
            ],
            correctAnswer: 0,
            explanation: 'For Type II (on $[0,1]$), convergence requires $p < 1$. Since $0.99 < 1$, it converges. Note this is the opposite conclusion from the Type I version!'
          }
        ]
      }
    },
    {
      id: 'imp3-behavior',
      type: 'text' as const,
      content: `### Behavior Near the Boundary

The case $p = 1$ is special:
- $\\int_1^{\\infty} \\frac{1}{x}\\,dx = \\lim_{t \\to \\infty} \\ln t = \\infty$ (diverges, but very slowly)
- $\\int_1^{\\infty} \\frac{1}{x^{1.001}}\\,dx = \\frac{1}{0.001} = 1000$ (converges, but large)

This shows the $p$-test has a sharp threshold: the tiniest push above $p = 1$ makes the integral converge.

### Exponential vs. Polynomial Decay

| Function | Behavior at $\\infty$ | $\\int_0^{\\infty}$ |
|:---:|:---:|:---:|
| $e^{-x}$ | Decays exponentially | Converges ($= 1$) |
| $\\frac{1}{x^2}$ | Decays like $x^{-2}$ | Converges ($= 1$ from $1$) |
| $\\frac{1}{x}$ | Decays like $x^{-1}$ | Diverges |
| $\\frac{1}{\\ln x}$ | Decays slower than $x^{-1}$ | Diverges |

$$\\boxed{\\text{Exponential decay} \\gg \\text{polynomial decay} \\gg \\text{logarithmic decay}}$$`
    },
    {
      id: 'imp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify Each Integral**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_1^{\\infty} \\frac{1}{x^{\\pi}}\\,dx$:',
            options: ['Converges ($\\pi > 1$)', 'Diverges ($\\pi > 1$)', 'Diverges ($\\pi$ is irrational)', 'Cannot determine'],
            correctAnswers: ['Converges ($\\pi > 1$)'],
            hints: ['$\\pi \\approx 3.14$. Compare with $p = 1$.'],
            explanation: '$p = \\pi \\approx 3.14 > 1$, so $\\int_1^{\\infty} x^{-\\pi}\\,dx$ converges by the $p$-test.'
          },
          {
            label: '$\\int_2^{\\infty} \\frac{1}{x \\ln x}\\,dx$:',
            options: ['Diverges', 'Converges to $1$', 'Converges to $\\ln 2$', 'Cannot determine'],
            correctAnswers: ['Diverges'],
            hints: ['Let $u = \\ln x$, then $du = dx/x$. The integral becomes $\\int_{\\ln 2}^{\\infty} \\frac{du}{u}$.'],
            explanation: 'After substitution $u = \\ln x$: $\\int_{\\ln 2}^{\\infty} \\frac{1}{u}\\,du = \\lim_{t \\to \\infty} \\ln u \\big|_{\\ln 2}^{t} = \\infty$. Diverges.'
          },
          {
            label: '$\\int_0^{\\infty} e^{-2x}\\,dx$:',
            options: ['Converges to $1/2$', 'Converges to $2$', 'Diverges', 'Converges to $1$'],
            correctAnswers: ['Converges to $1/2$'],
            hints: ['$\\int_0^t e^{-2x}\\,dx = [-\\frac{1}{2}e^{-2x}]_0^t = -\\frac{1}{2}e^{-2t} + \\frac{1}{2}$.'],
            explanation: 'As $t \\to \\infty$: $-\\frac{1}{2}e^{-2t} + \\frac{1}{2} \\to 0 + \\frac{1}{2} = \\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'imp3-input',
      type: 'input-box' as const,
      content: '**$p$-Test Application**',
      exercise: {
        question: 'For what value of $p$ does $\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ equal exactly $\\frac{1}{3}$? The formula gives $\\frac{1}{p-1} = \\frac{1}{3}$, so $p = ?$',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hints: ['$\\frac{1}{p-1} = \\frac{1}{3}$ means $p - 1 = 3$.', 'So $p = 4$.'],
        explanation: '$\\frac{1}{p-1} = \\frac{1}{3} \\implies p - 1 = 3 \\implies p = 4$. Check: $\\int_1^{\\infty} x^{-4}\\,dx = [-\\frac{1}{3}x^{-3}]_1^{\\infty} = 0 + \\frac{1}{3} = \\frac{1}{3}$. \\checkmark'
      }
    },
    {
      id: 'imp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

| Test | Condition | Result |
|------|-----------|--------|
| Type I $p$-test | $\\int_1^{\\infty} x^{-p}\\,dx$ | Converges iff $p > 1$ |
| Type II $p$-test | $\\int_0^1 x^{-p}\\,dx$ | Converges iff $p < 1$ |
| Exponential | $\\int_0^{\\infty} e^{-kx}\\,dx$ | Always converges ($k > 0$) |

> **Coming Up:** Part 4 introduces the **Comparison Test** \u2014 compare unknown integrals to known ones.`
    }
  ]
};
