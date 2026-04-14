export const calcbcPowerSeriesPart5Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'ps5-intro',
      type: 'text' as const,
      content: `# Power Series — Differential Equations & AP Strategies

**Part 5 of 7 — Series Solutions & Exam Techniques**

### Power Series Solutions to DEs

Some AP problems ask you to find coefficients of a power series solution to a DE.

**Setup:** Assume $y = \\sum a_n x^n = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \\cdots$

Then $y' = \\sum_{n=1}^\\infty n a_n x^{n-1} = a_1 + 2a_2 x + 3a_3 x^2 + \\cdots$

**Example:** $y' = y$, $y(0) = 1$

Substituting: $a_1 + 2a_2 x + 3a_3 x^2 + \\cdots = a_0 + a_1 x + a_2 x^2 + \\cdots$

Matching coefficients: $a_1 = a_0 = 1$, $2a_2 = a_1 \\Rightarrow a_2 = 1/2$, $3a_3 = a_2 \\Rightarrow a_3 = 1/6$

Pattern: $a_n = 1/n!$ → solution is $y = e^x$ ✓

> **AP Tip:** These problems typically ask for the first 3 or 4 nonzero terms, not the general pattern.`
    },
    {
      id: 'ps5-ap-frq',
      type: 'text' as const,
      content: `### Common AP FRQ Formats

**Type 1: "Write the first four nonzero terms..."**
- Use known series + operations
- Example: First 4 terms of $e^x \\sin x$ → multiply truncated series

**Type 2: "Find the coefficient of $x^n$..."**
- Use Taylor formula: $a_n = f^{(n)}(0)/n!$
- Or manipulate known series

**Type 3: "Use the series to approximate..."**
- Evaluate at specific $x$, bound error
- Use alternating series error bound when applicable

**Type 4: "Find the interval of convergence"**
- Ratio test for $R$, then test endpoints

### Quick AP Checks

$$\\boxed{f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(c)}{n!}(x-c)^n \\implies a_n = \\frac{f^{(n)}(c)}{n!}}$$

So if you know the series, you know the derivatives at the center:
$f^{(n)}(c) = n! \\cdot a_n$`
    },
    {
      id: 'ps5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Practice**',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$, then $f\'\'(0) = $',
            options: ['$-1$', '$0$', '$1$', '$-2$'],
            correctAnswer: 0,
            explanation: 'This is $\\cos x$. $f\'\'(0) = -\\cos(0)$... Actually: $a_n$ is the coefficient of $x^n$. Coefficient of $x^2$: $(-1)^1/(2!) = -1/2$. Since $a_2 = f\'\'(0)/2!$, we get $f\'\'(0) = 2! \\cdot (-1/2) = -1$.'
          },
          {
            question: 'For the DE $y\' = 2xy$ with $y(0) = 1$, if $y = a_0 + a_1 x + a_2 x^2 + \\cdots$, then $a_2 = $',
            options: ['$1$', '$0$', '$2$', '$1/2$'],
            correctAnswer: 0,
            explanation: '$y(0) = a_0 = 1$. $y\' = a_1 + 2a_2 x + \\cdots$, $2xy = 2a_0 x + 2a_1 x^2 + \\cdots$. Constant terms: $a_1 = 0$. $x$ terms: $2a_2 = 2a_0 = 2$, so $a_2 = 1$.'
          },
          {
            question: 'If $g(x) = \\sum_{n=0}^\\infty \\frac{x^n}{(n+1)!}$, then $g(x) = $',
            options: ['$(e^x - 1)/x$', '$e^x/x$', '$\\ln(1+x)/x$', '$e^x - 1$'],
            correctAnswer: 0,
            explanation: '$e^x = \\sum x^n/n!$. Then $e^x - 1 = \\sum_{n=1}^\\infty x^n/n!$. Dividing by $x$: $(e^x-1)/x = \\sum_{n=1}^\\infty x^{n-1}/n! = \\sum_{n=0}^\\infty x^n/(n+1)!$. ✓'
          }
        ]
      }
    },
    {
      id: 'ps5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series & Derivatives**',
      exercise: {
        dropdowns: [
          {
            label: 'If $f(x) = \\sum_{n=0}^\\infty \\frac{3^n x^n}{n!}$, then $f^{(5)}(0) = $',
            options: ['$243$ ($= 3^5$)', '$3^5/5! = 243/120$', '$5! = 120$', '$15$'],
            correctAnswers: ['$243$ ($= 3^5$)'],
            hints: ['$f^{(n)}(0) = n! \\cdot a_n = n! \\cdot 3^n/n! = 3^n$.'],
            explanation: '$a_n = 3^n/n!$, so $f^{(5)}(0) = 5! \\cdot a_5 = 5! \\cdot 3^5/5! = 3^5 = 243$. (Note: $f(x) = e^{3x}$, and $f^{(5)}(x) = 3^5 e^{3x}$, so $f^{(5)}(0) = 243$ ✓.)'
          },
          {
            label: 'On an AP FRQ, "write the first four nonzero terms" for $\\sin(x^2)$:',
            options: ['$x^2 - x^6/6 + x^{10}/120 - x^{14}/5040$', '$x - x^3/6 + x^5/120 - x^7/5040$', '$x^2 - x^4/2 + x^6/24 - x^8/720$', '$1 - x^4/2 + x^8/24 - x^{12}/720$'],
            correctAnswers: ['$x^2 - x^6/6 + x^{10}/120 - x^{14}/5040$'],
            hints: ['$\\sin u = u - u^3/6 + u^5/120 - u^7/5040 + \\cdots$. Set $u = x^2$.'],
            explanation: '$\\sin(x^2) = x^2 - (x^2)^3/3! + (x^2)^5/5! - (x^2)^7/7! = x^2 - x^6/6 + x^{10}/120 - x^{14}/5040$.'
          }
        ]
      }
    },
    {
      id: 'ps5-input',
      type: 'input-box' as const,
      content: '**DE Series Solution**',
      exercise: {
        question: 'For $y\' = y + 1$ with $y(0) = 0$: if $y = a_0 + a_1 x + a_2 x^2 + \\cdots$, find $a_1$.',
        correctAnswer: '1',
        acceptableAnswers: ['1'],
        hints: ['$y(0) = a_0 = 0$. Constant terms in $y\' = y + 1$: $a_1 = a_0 + 1$.'],
        explanation: '$a_0 = y(0) = 0$. From $y\' = y + 1$: constant terms give $a_1 = a_0 + 1 = 0 + 1 = 1$.'
      }
    },
    {
      id: 'ps5-summary',
      type: 'text' as const,
      content: `### Summary

- Power series can solve DEs by matching coefficients
- $f^{(n)}(c) = n! \\cdot a_n$ connects series coefficients to derivatives
- AP FRQ: "first four nonzero terms" is the most common format
- Build series from known ones rather than computing derivatives

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
