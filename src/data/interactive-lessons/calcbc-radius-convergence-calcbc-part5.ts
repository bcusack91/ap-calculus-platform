export const calcbcRadConvPart5Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'rc5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies

**Part 5 of 7 — Full-Credit Responses**

### FRQ Scoring Breakdown

A typical "Find the interval of convergence" FRQ awards points for:

1. **Applying the Ratio Test** (1 point)
2. **Finding $R$** (1 point)
3. **Checking the left endpoint** with a named test (1 point)
4. **Checking the right endpoint** with a named test (1 point)
5. **Stating the IOC** (1 point)

### Template Response

**Step 1:** $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\cdots \\to L$. Set $L < 1$: $|x - a| < R$.

**Step 2:** At $x = a + R$: [substitute, identify the series, name the test, conclude].

**Step 3:** At $x = a - R$: [substitute, identify the series, name the test, conclude].

**Step 4:** IOC is $[$ or $($ at left$, $ $]$ or $)$ at right.

> **AP Tip:** You must NAME the test used at each endpoint — just writing "converges" without justification earns no credit.`
    },
    {
      id: 'rc5-common-mistakes',
      type: 'text' as const,
      content: `### Common Mistakes That Cost Points

| Mistake | Correction |
|---------|-----------|
| Not naming the endpoint test | "By the $p$-Series Test ($p = 2 > 1$), this converges" |
| Writing IOC without checking endpoints | Must check separately at each endpoint |
| Using Ratio Test at endpoints | Ratio Test gives $L = 1$ at endpoints (inconclusive) |
| Forgetting $|x - a|$ (writing $|x|$ when $a \\neq 0$) | Always use $|x - a|$ for general center |
| Writing "$\\le$" instead of "$<$" after Ratio Test | Ratio Test gives strict inequality $|x - a| < R$ |

### Quick Endpoint Test Reference

| Series at endpoint | Test | Result |
|-------------------|------|--------|
| $\\sum 1/n^p$, $p > 1$ | $p$-Series | Converges |
| $\\sum 1/n$ | Harmonic | Diverges |
| $\\sum (-1)^n/n^p$, $p > 0$ | AST | Converges |
| $\\sum (-1)^n$ | Divergence | Diverges |
| $\\sum 1/(n \\ln n)$ | Integral | Diverges |
| $\\sum c$ (constant $\\neq 0$) | Divergence | Diverges |`
    },
    {
      id: 'rc5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n(x-4)^n}{n \\cdot 2^n}$. The IOC is:',
            options: ['$[2, 6)$', '$(2, 6)$', '$(2, 6]$', '$[2, 6]$'],
            correctAnswer: 0,
            explanation: '$R = 2$, center $4$. $x = 6$: $\\sum 1/n$ diverges. $x = 2$: $\\sum (-1)^n(-1)^n/n = \\sum 1/n$... Wait: $(-1)^n(2-4)^n/n \\cdot 2^n = (-1)^n(-2)^n/(n \\cdot 2^n) = (-1)^n(-1)^n/n = 1/n$. Diverges. Actually: $(-1)^n(-2)^n = (-1)^n \\cdot (-1)^n \\cdot 2^n = 2^n$. So $2^n/(n \\cdot 2^n) = 1/n$. Diverges. Let me reconsider: $x = 6$: $(-1)^n(2)^n/(n \\cdot 2^n) = (-1)^n/n$. Converges (AST). IOC: $(2, 6]$.'
          },
          {
            question: 'On an FRQ, which response earns the endpoint point?',
            options: ['"At $x = 5$, the series becomes $\\sum 1/n^2$, which converges by the $p$-Series Test ($p = 2 > 1$)"', '"At $x = 5$, the series converges"', '"Checking $x = 5$: converges ✓"', '"The endpoint is included"'],
            correctAnswer: 0,
            explanation: 'Full credit requires: substitute, identify the resulting series, name the test, and state the conclusion.'
          },
          {
            question: 'If you find $R = 4$ but skip endpoint testing, how many points do you likely lose?',
            options: ['2-3 points (one per endpoint plus possibly the IOC statement)', '0 points', '1 point', 'All points'],
            correctAnswer: 0,
            explanation: 'Skipping endpoints means losing the left endpoint point, right endpoint point, and possibly the IOC statement point.'
          }
        ]
      }
    },
    {
      id: 'rc5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Endpoint Test Selection**',
      exercise: {
        dropdowns: [
          {
            label: 'At an endpoint, you get $\\sum 1/(n \\cdot 3^n) \\cdot 3^n = \\sum 1/n$. The test to cite:',
            options: ['Harmonic series (diverges) or $p$-Series Test with $p = 1$', 'Ratio Test', 'Root Test', 'Comparison Test'],
            correctAnswers: ['Harmonic series (diverges) or $p$-Series Test with $p = 1$'],
            hints: ['$\\sum 1/n$ is the harmonic series, $p = 1 \\le 1$.'],
            explanation: 'Cite the $p$-Series Test or name it as the divergent harmonic series.'
          },
          {
            label: 'At an endpoint, you get $\\sum (-1)^n/(2n+1)$. The test:',
            options: ['AST: terms decrease to $0$, so converges', '$p$-Series', 'Integral Test', 'Divergence Test'],
            correctAnswers: ['AST: terms decrease to $0$, so converges'],
            hints: ['$1/(2n+1)$ is positive, decreasing, $\\to 0$.'],
            explanation: 'Alternating Series Test: $b_n = 1/(2n+1)$ decreases to $0$. Converges.'
          }
        ]
      }
    },
    {
      id: 'rc5-input',
      type: 'input-box' as const,
      content: '**Full IOC Problem**',
      exercise: {
        question: '$\\sum_{n=1}^{\\infty} \\frac{(x-1)^n}{n^2 \\cdot 4^n}$. $R = 4$. State the IOC. (Use brackets/parens, e.g., [-3, 5].)',
        correctAnswer: '[-3, 5]',
        acceptableAnswers: ['[-3, 5]', '[-3,5]'],
        hints: ['$x = 5$: $\\sum 1/n^2$ converges ($p = 2$).', '$x = -3$: $\\sum (-1)^n/n^2$ converges (absolutely).'],
        explanation: '$x = 5$: $\\sum 4^n/(n^2 \\cdot 4^n) = \\sum 1/n^2$, converges. $x = -3$: $\\sum (-4)^n/(n^2 \\cdot 4^n) = \\sum (-1)^n/n^2$, converges. IOC: $[-3, 5]$.'
      }
    },
    {
      id: 'rc5-summary',
      type: 'text' as const,
      content: `### Summary

- FRQ: Ratio Test → $R$ → check both endpoints → state IOC
- Name the test at each endpoint for full credit
- Common endpoints: harmonic (div), $p$-series (conv if $p > 1$), AST (conv)
- Don't use Ratio/Root at endpoints (always gives $L = 1$)

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
