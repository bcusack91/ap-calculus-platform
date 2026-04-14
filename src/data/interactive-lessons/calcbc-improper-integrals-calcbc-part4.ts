export const calcbcImproperPart4Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp4-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 4 of 7 \u2014 Comparison Tests**

When you can\u2019t find an antiderivative, comparison tests let you determine convergence by comparing to a simpler integral whose behavior you already know.`
    },
    {
      id: 'imp4-direct',
      type: 'text' as const,
      content: `### Direct Comparison Test (DCT)

For $f(x) \\ge 0$ and $g(x) \\ge 0$ on $[a, \\infty)$:

$$\\boxed{\\text{If } 0 \\le f(x) \\le g(x) \\text{ and } \\int_a^{\\infty} g(x)\\,dx \\text{ converges, then } \\int_a^{\\infty} f(x)\\,dx \\text{ converges.}}$$

$$\\boxed{\\text{If } f(x) \\ge g(x) \\ge 0 \\text{ and } \\int_a^{\\infty} g(x)\\,dx \\text{ diverges, then } \\int_a^{\\infty} f(x)\\,dx \\text{ diverges.}}$$

**Think of it as:**
- Smaller than a convergent \u2192 convergent (\u201ctrapped below a ceiling\u201d)
- Bigger than a divergent \u2192 divergent (\u201cpushed above a floor\u201d)

| To Show | You Need | Compare To |
|:---:|:---:|:---:|
| Convergence | $f(x) \\le g(x)$ | $g$ that converges |
| Divergence | $f(x) \\ge g(x)$ | $g$ that diverges |`
    },
    {
      id: 'imp4-dctex',
      type: 'text' as const,
      content: `### Example: $\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\,dx$

We know $x^2 + 1 > x^2$ for all $x$, so:
$$\\frac{1}{x^2 + 1} < \\frac{1}{x^2}$$

Since $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ converges ($p = 2 > 1$):

$$\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\,dx \\quad \\text{converges by DCT.}$$

### Example: $\\int_1^{\\infty} \\frac{1}{\\sqrt{x} - 0.5}\\,dx$

For $x \\ge 1$: $\\sqrt{x} - 0.5 \\le \\sqrt{x}$, so $\\frac{1}{\\sqrt{x} - 0.5} \\ge \\frac{1}{\\sqrt{x}}$.

Since $\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\,dx$ diverges ($p = 1/2 \\le 1$):

$$\\int_1^{\\infty} \\frac{1}{\\sqrt{x} - 0.5}\\,dx \\quad \\text{diverges by DCT.}$$`
    },
    {
      id: 'imp4-lct',
      type: 'text' as const,
      content: `### Limit Comparison Test (LCT)

When direct inequality is hard to establish, use:

$$\\boxed{\\text{If } \\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L, \\quad 0 < L < \\infty, \\text{ then } \\int f \\text{ and } \\int g \\text{ both converge or both diverge.}}$$

**Why this works:** If the ratio approaches a finite nonzero constant, the functions decay at the same rate.

### Example: $\\int_1^{\\infty} \\frac{x}{x^3 + 5}\\,dx$

Compare with $g(x) = \\frac{1}{x^2}$ (since $\\frac{x}{x^3} = \\frac{1}{x^2}$ for large $x$):

$$\\lim_{x \\to \\infty} \\frac{x/(x^3+5)}{1/x^2} = \\lim_{x \\to \\infty} \\frac{x^3}{x^3 + 5} = 1$$

Since $L = 1 \\in (0, \\infty)$ and $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ converges, so does $\\int_1^{\\infty} \\frac{x}{x^3+5}\\,dx$.

> **AP Tip:** The LCT is often the fastest approach on the AP exam. Identify the dominant terms and compare to $1/x^p$.`
    },
    {
      id: 'imp4-mc1',
      type: 'multiple-choice' as const,
      content: '**Comparison Test Practice**',
      exercise: {
        questions: [
          {
            question: 'To show $\\int_1^{\\infty} \\frac{\\sin^2 x}{x^2}\\,dx$ converges using DCT, the best comparison is:',
            options: [
              '$\\frac{\\sin^2 x}{x^2} \\le \\frac{1}{x^2}$, which converges',
              '$\\frac{\\sin^2 x}{x^2} \\le \\frac{1}{x}$, which diverges',
              '$\\frac{\\sin^2 x}{x^2} \\ge \\frac{1}{x^3}$, which converges',
              'DCT cannot be applied here'
            ],
            correctAnswer: 0,
            explanation: 'Since $0 \\le \\sin^2 x \\le 1$, we have $\\frac{\\sin^2 x}{x^2} \\le \\frac{1}{x^2}$. Since $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ converges ($p=2>1$), so does the original.'
          },
          {
            question: 'Using LCT, $\\int_1^{\\infty} \\frac{3x^2 + 1}{x^4 - 2}\\,dx$ should be compared to:',
            options: [
              '$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ (converges)',
              '$\\int_1^{\\infty} \\frac{1}{x}\\,dx$ (diverges)',
              '$\\int_1^{\\infty} \\frac{1}{x^4}\\,dx$ (converges)',
              '$\\int_1^{\\infty} \\frac{1}{x^3}\\,dx$ (converges)'
            ],
            correctAnswer: 0,
            explanation: 'Dominant terms: $\\frac{3x^2}{x^4} = \\frac{3}{x^2}$. So compare to $1/x^2$. The limit ratio is $3 \\in (0,\\infty)$, confirming convergence.'
          }
        ]
      }
    },
    {
      id: 'imp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the Right Test**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_1^{\\infty} \\frac{e^{-x}}{x}\\,dx$: Best approach?',
            options: ['DCT: $\\frac{e^{-x}}{x} \\le e^{-x}$', 'LCT with $1/x$', '$p$-test with $p = 1$', 'Direct computation'],
            correctAnswers: ['DCT: $\\frac{e^{-x}}{x} \\le e^{-x}$'],
            hints: ['For $x \\ge 1$: $\\frac{1}{x} \\le 1$, so $\\frac{e^{-x}}{x} \\le e^{-x}$.'],
            explanation: '$\\frac{e^{-x}}{x} \\le e^{-x}$ for $x \\ge 1$, and $\\int_1^{\\infty} e^{-x}\\,dx = e^{-1}$ converges. By DCT, the original converges.'
          },
          {
            label: '$\\int_1^{\\infty} \\frac{2x+3}{x^2+x}\\,dx$: Converges or diverges?',
            options: ['Diverges (behaves like $1/x$)', 'Converges (behaves like $1/x^2$)', 'Converges by DCT', 'Cannot determine'],
            correctAnswers: ['Diverges (behaves like $1/x$)'],
            hints: ['$\\frac{2x+3}{x^2+x} \\approx \\frac{2x}{x^2} = \\frac{2}{x}$ for large $x$.'],
            explanation: 'LCT with $1/x$: $\\lim \\frac{(2x+3)/(x^2+x)}{1/x} = \\lim \\frac{(2x+3)x}{x^2+x} = \\lim \\frac{2x^2+3x}{x^2+x} = 2$. Since $\\int 1/x$ diverges, so does this.'
          }
        ]
      }
    },
    {
      id: 'imp4-input',
      type: 'input-box' as const,
      content: '**Limit Comparison Computation**',
      exercise: {
        question: 'Use LCT to analyze $\\int_1^{\\infty} \\frac{5x}{2x^3 - 1}\\,dx$ by comparing to $\\frac{1}{x^2}$. Compute $L = \\lim_{x \\to \\infty} \\frac{5x/(2x^3-1)}{1/x^2}$. What is $L$?',
        correctAnswer: '5/2',
        acceptableAnswers: ['5/2', '2.5', '2.50'],
        hints: ['$\\frac{5x/(2x^3-1)}{1/x^2} = \\frac{5x \\cdot x^2}{2x^3 - 1} = \\frac{5x^3}{2x^3 - 1}$.', 'Divide numerator and denominator by $x^3$: $\\frac{5}{2 - 1/x^3} \\to \\frac{5}{2}$.'],
        explanation: '$L = \\lim_{x \\to \\infty} \\frac{5x^3}{2x^3 - 1} = \\frac{5}{2}$. Since $0 < \\frac{5}{2} < \\infty$ and $\\int_1^{\\infty} 1/x^2$ converges, the original converges.'
      }
    },
    {
      id: 'imp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Test | When to Use | Key Requirement |
|------|------------|-----------------|
| Direct (DCT) | Clear inequality | $0 \\le f \\le g$ (or $f \\ge g \\ge 0$) |
| Limit (LCT) | Dominant-term comparison | $\\lim f/g = L$, $0 < L < \\infty$ |

**Strategy:** Identify the dominant terms as $x \\to \\infty$, form $\\frac{1}{x^p}$, and apply LCT. If $p > 1$, converges. If $p \\le 1$, diverges.

> **Coming Up:** Part 5 covers **special convergence results** and the interplay between $p$-integrals and comparison tests on the AP exam.`
    }
  ]
};
