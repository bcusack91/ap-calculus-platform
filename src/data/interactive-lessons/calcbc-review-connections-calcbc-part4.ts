export const calcbcReviewPart4Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc4-intro',
      type: 'text' as const,
      content: `# Convergence and Series — The Big Picture

**Part 4 of 7 — How All the Series Tests Fit Together**

### The Convergence Decision Tree

$$\\text{Given } \\sum a_n: \\text{ Does it converge?}$$

| Step | Check | Test to use |
|------|-------|------------|
| 1 | Is $a_n \\not\\to 0$? | **Divergence Test** → diverges |
| 2 | Is it geometric? | **Geometric:** converges iff $|r| < 1$ |
| 3 | Is it a p-series? | **p-series:** converges iff $p > 1$ |
| 4 | Does it alternate? | **AST:** $a_n \\to 0$ decreasingly → converges |
| 5 | Factorials or exponentials? | **Ratio Test:** $L < 1$ converges, $L > 1$ diverges |
| 6 | $n$th powers? | **Root Test:** same criteria as ratio |
| 7 | Can you compare? | **Comparison/LCT** with known series |
| 8 | Decreasing positive terms? | **Integral Test** |

> **AP Tip:** On the exam, 90% of convergence questions are answered by steps 1–5.`
    },
    {
      id: 'rc4-power',
      type: 'text' as const,
      content: `### Power Series: From Convergence to Application

$$\\sum_{n=0}^\\infty c_n(x-a)^n$$

**Three-step process:**

1. **Find radius $R$:** Ratio test on $|c_{n+1}/c_n|$ or root test
2. **Test endpoints:** Plug in $x = a \\pm R$ and test each resulting numeric series
3. **Use the series:** Substitute, differentiate, or integrate

**What radius of convergence tells you:**

| $R$ | Meaning |
|-----|---------|
| $R = 0$ | Converges only at $x = a$ (useless) |
| $0 < R < \\infty$ | Converges on $(a-R, a+R)$, diverges outside |
| $R = \\infty$ | Converges everywhere ($e^x$, $\\sin x$, $\\cos x$) |

> The interval may include 0, 1, or 2 endpoints depending on endpoint tests.`
    },
    {
      id: 'rc4-mc',
      type: 'multiple-choice' as const,
      content: '**Test Selection**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{n^2}{2^n}$ — which test is most efficient?',
            options: ['Ratio test', 'Integral test', 'p-series', 'Direct comparison'],
            correctAnswer: 0,
            explanation: 'Exponential denominator → ratio test. $L = \\lim \\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{1}{2} \\lim (1 + 1/n)^2 = 1/2 < 1$. Converges.'
          },
          {
            question: '$\\sum_{n=2}^\\infty \\frac{1}{n\\ln n}$ — which test works?',
            options: ['Integral test', 'Ratio test', 'Geometric series', 'Alternating series test'],
            correctAnswer: 0,
            explanation: 'Not geometric, not alternating, ratio test gives $L = 1$ (inconclusive). Integral test: $\\int_2^\\infty \\frac{dx}{x\\ln x} = [\\ln(\\ln x)]_2^\\infty = \\infty$. Diverges.'
          },
          {
            question: 'Absolute convergence implies convergence, but conditional convergence means:',
            options: ['$\\sum a_n$ converges but $\\sum |a_n|$ diverges', '$\\sum a_n$ and $\\sum |a_n|$ both converge', 'The series oscillates without settling', 'The partial sums are bounded'],
            correctAnswer: 0,
            explanation: 'Conditional convergence: the series converges only because of cancellation between positive and negative terms. Example: $\\sum (-1)^n/n$.'
          }
        ]
      }
    },
    {
      id: 'rc4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify Each Series**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot be determined'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['AST shows convergence. $\\sum 1/n$ diverges (harmonic).'],
            explanation: 'Converges by AST. $\\sum |a_n| = \\sum 1/n$ diverges. Conditionally convergent.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent', 'Cannot be determined'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['$\\sum 1/n^2$ converges (p-series, $p = 2$).'],
            explanation: '$\\sum |a_n| = \\sum 1/n^2$ converges. Absolutely convergent.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{n}{n+1}$:',
            options: ['Divergent (divergence test)', 'Conditionally convergent', 'Absolutely convergent', 'Converges to 1'],
            correctAnswers: ['Divergent (divergence test)'],
            hints: ['$\\lim n/(n+1) = 1 \\neq 0$.'],
            explanation: '$a_n \\to 1 \\neq 0$. Diverges by the divergence test. Always check this first!'
          }
        ]
      }
    },
    {
      id: 'rc4-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Find the radius of convergence of $\\sum_{n=0}^\\infty \\frac{x^n}{3^n}$.',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: ['This is geometric with ratio $x/3$.'],
        explanation: 'Geometric series with ratio $x/3$. Converges when $|x/3| < 1$, i.e., $|x| < 3$. Radius $R = 3$.'
      }
    },
    {
      id: 'rc4-summary',
      type: 'text' as const,
      content: `### Series Big Picture

- **Divergence test** → always check first ($a_n \\to 0$?)
- **Geometric/p-series** → direct conclusion if the form matches
- **Ratio/root** → factorial or exponential terms
- **AST** → alternating series
- **Comparison/integral** → everything else
- **Power series** → ratio test for $R$, then check endpoints

**Next: Part 5 — Integration Techniques Review**`
    }
  ]
};
