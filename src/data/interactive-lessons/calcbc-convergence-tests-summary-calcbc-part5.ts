export const calcbcConvergencePart5Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — Convergence

**Part 5 of 7 — Test Selection Under Pressure**

### AP Exam Convergence Problem Types

| Type | What to expect | Strategy |
|------|---------------|----------|
| "Determine convergence" | Single series, pick a test | Use the flowchart |
| "Which test and why?" | Justify your choice | Name the test, verify hypotheses |
| "Determine interval of convergence" | Power series | Ratio Test for $R$, test endpoints separately |
| "Absolute or conditional?" | Alternating series | Check $\\sum|a_n|$ then $\\sum a_n$ |
| "FRQ series justification" | Part of larger problem | Be precise: state theorem, verify conditions |

### The 30-Second Flowchart for MC

$$\\boxed{\\text{Divergence Test} \\to \\text{Geometric/p?} \\to \\text{Alternating?} \\to \\text{Ratio?} \\to \\text{Comparison}}$$

1. **Quick check:** $\\lim a_n \\neq 0$? → Diverges
2. **Recognizable?** Geometric or $p$-series → formula
3. **Alternating?** AST (verify $b_n \\downarrow 0$)
4. **Factorials or exponentials?** Ratio Test
5. **Compare:** DCT or LCT with known series

> **AP Tip:** On FRQs, always state the test name, verify ALL conditions, and write a concluding statement.`
    },
    {
      id: 'ct5-frq',
      type: 'text' as const,
      content: `### Writing Perfect Justifications

**Bad answer (no credit):**
"It converges by comparison."

**Good answer (full credit):**
"Since $0 \\leq \\frac{1}{n^2 + 1} \\leq \\frac{1}{n^2}$ for all $n \\geq 1$, and $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ converges ($p$-series, $p = 2 > 1$), by the Direct Comparison Test, $\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}$ converges."

### FRQ Checklist

| Step | Example |
|------|---------|
| State the test | "By the Ratio Test..." |
| Verify conditions | "Since $a_n > 0$ and $\\lim_{n\\to\\infty} a_{n+1}/a_n = L$..." |
| Compute the limit | "$L = \\lim \\frac{(n+1)!/2^{n+1}}{n!/2^n} = \\lim \\frac{n+1}{2} = \\infty$" |
| Conclude | "Since $L > 1$, the series diverges by the Ratio Test." |

### Common AP Pitfalls

| Mistake | Why it loses points |
|---------|-------------------|
| Not checking $\\lim a_n = 0$ first | Divergence Test is always first |
| Saying "converges by Divergence Test" | Div Test can only prove divergence |
| Forgetting endpoint checks for IOC | $R$ alone is not the full answer |
| LCT: not choosing the right comparison | Compare $1/(n^2+n)$ to $1/n^2$, not $1/n$ |`
    },
    {
      id: 'ct5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP Strategy Questions**',
      exercise: {
        questions: [
          {
            question: 'Which test should you try FIRST for $\\sum_{n=1}^{\\infty} \\frac{n^2}{n^2+1}$?',
            options: ['Divergence Test', 'Ratio Test', 'Limit Comparison Test', 'Integral Test'],
            correctAnswer: 0,
            explanation: '$\\lim n^2/(n^2+1) = 1 \\neq 0$, so the series diverges by the Divergence Test immediately. Always check the term limit first.'
          },
          {
            question: 'On an FRQ, which response about $\\sum 1/n^3$ earns full credit?',
            options: ['"$p$-series with $p = 3 > 1$, so the series converges."', '"Converges by the $p$-test, since terms go to $0$."', '"Geometric series with $r = 1/3$, so it converges."', '"Terms go to zero, so it converges."'],
            correctAnswer: 0,
            explanation: 'Full credit requires: name the test, verify the condition ($p = 3 > 1$), and state the conclusion. Terms going to $0$ is never a valid reason for convergence, and $\\sum 1/n^3$ is not geometric.'
          },
          {
            question: 'For $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, after finding $R = \\infty$ by Ratio Test, what else must you do?',
            options: ['Nothing more, as it converges for all $x$', 'Test the endpoints $x = \\pm\\infty$ separately', 'Apply the Ratio Test again to confirm $R$', 'Check for conditional convergence at $x = 0$'],
            correctAnswer: 0,
            explanation: '$R = \\infty$ means the interval of convergence is $(-\\infty, \\infty)$. There are no endpoints to test.'
          }
        ]
      }
    },
    {
      id: 'ct5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Best Test Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{3^n}{n!}$: Best test?',
            options: ['Ratio Test (factorial in denominator)', 'Divergence Test (power $3^n$ in numerator)', 'Direct Comparison with $\\sum 3^n$', 'Integral Test (terms are positive)'],
            correctAnswers: ['Ratio Test (factorial in denominator)'],
            hints: ['Factorials → Ratio Test is almost always the right choice.'],
            explanation: 'Ratio: $L = \\lim 3/(n+1) = 0 < 1$. Converges. Comparing with the larger divergent $\\sum 3^n$ proves nothing, the terms tend to $0$ so the Divergence Test is silent, and $x!$ cannot be integrated directly.'
          },
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 3n + 2}$: Best test?',
            options: ['LCT with $\\sum 1/n^2$ (both converge)', 'Ratio Test ($L = 1$, converges)', 'LCT with $\\sum 1/n$ (both diverge)', 'Divergence Test ($a_n \\to 0$, converges)'],
            correctAnswers: ['LCT with $\\sum 1/n^2$ (both converge)'],
            hints: ['Degree of denominator is 2, numerator is 0. Behaves like $1/n^2$.'],
            explanation: 'LCT: $\\lim \\frac{1/(n^2+3n+2)}{1/n^2} = 1$. Since $\\sum 1/n^2$ converges, so does this series. Against $\\sum 1/n$ the limit is $0$, not a positive constant; the Ratio Test gives $L = 1$ (inconclusive); and $a_n \\to 0$ alone never proves convergence.'
          }
        ]
      }
    },
    {
      id: 'ct5-input',
      type: 'input-box' as const,
      content: '**Quick Decision**',
      exercise: {
        question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$. What is the classification? Enter "absolute", "conditional", or "divergent".',
        correctAnswer: 'conditional',
        acceptableAnswers: ['conditional', 'conditionally convergent', 'conditionally'],
        hints: ['$\\sum 1/\\sqrt{n}$ diverges ($p = 1/2$). $\\sum (-1)^n/\\sqrt{n}$ converges by AST.'],
        explanation: '$\\sum |a_n| = \\sum 1/\\sqrt{n}$, $p = 1/2 < 1$ → diverges. AST: $1/\\sqrt{n} \\downarrow 0$ ✓ → converges. Conditionally convergent.'
      }
    },
    {
      id: 'ct5-summary',
      type: 'text' as const,
      content: `### Summary

- Use the flowchart: Div Test → recognize → alternating → ratio → comparison
- FRQs: name the test, verify conditions, write a conclusion
- Common errors: "converges by Divergence Test," forgetting endpoint tests, weak comparisons

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
