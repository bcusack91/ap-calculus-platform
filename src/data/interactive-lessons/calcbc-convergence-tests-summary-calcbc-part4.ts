export const calcbcConvergencePart4Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct4-intro',
      type: 'text' as const,
      content: `# Classifying a Series: The Two-Check Write-Up

**Part 4 of 7 — Three Categories**

The definitions are taught in Infinite Series, Part 4. This part turns them into a write-up for any "absolutely convergent, conditionally convergent, or divergent?" question.

| Category | Definition | Example |
|----------|-----------|---------|
| Absolutely convergent | $\\sum \\lvert a_n\\rvert$ converges | $\\sum (-1)^n/n^2$ |
| Conditionally convergent | $\\sum a_n$ converges but $\\sum \\lvert a_n\\rvert$ diverges | $\\sum (-1)^n/n$ |
| Divergent | $\\sum a_n$ diverges | $\\sum 1/n$ |

$$\\boxed{\\text{Absolute convergence} \\Rightarrow \\text{Convergence}}$$

The converse is FALSE: a series can converge without converging absolutely.

### The Two Checks

**Check 1: the absolute-value series.** Test $\\sum |a_n|$ with a $p$-series, comparison, Ratio, or Integral Test.
- If it converges, the series is **absolutely convergent**. Stop.

**Check 2: the series itself**, usually by the Alternating Series Test. State all three conditions: $b_n > 0$, $b_{n+1} \\le b_n$, and $\\lim b_n = 0$.
- If it converges, the series is **conditionally convergent**.
- If $\\lim a_n \\neq 0$, the series **diverges** by the $n$th term test.

> **Key Fact:** The AST never proves absolute convergence, and "$\\sum |a_n|$ diverges" never proves divergence. Unless Check 1 already gives absolute convergence, a classification needs both checks.`
    },
    {
      id: 'ct4-examples',
      type: 'text' as const,
      content: `### Model Write-Up: $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$

**Check 1.** $\\sum |a_n| = \\sum \\frac{1}{n}$ is the harmonic series, which diverges, so the series is not absolutely convergent.

**Check 2.** With $b_n = \\frac{1}{n}$: $b_n > 0$; $b_{n+1} = \\frac{1}{n+1} < \\frac{1}{n} = b_n$; and $\\lim_{n \\to \\infty} b_n = 0$. The series converges by the Alternating Series Test.

**Conclusion.** The series is **conditionally convergent**.

### Shorter Cases

- $\\sum \\frac{(-1)^n}{n^3}$: Check 1 gives $\\sum \\frac{1}{n^3}$, a $p$-series with $p = 3 > 1$, which converges. **Absolutely convergent**; no Check 2 needed.
- $\\sum \\frac{(-1)^n n}{n+1}$: $\\lim |a_n| = \\lim \\frac{n}{n+1} = 1 \\neq 0$. **Divergent** by the $n$th term test.

### Quick Classification Guide

| Series | $\\sum\\lvert a_n\\rvert$ | $\\sum a_n$ | Classification |
|--------|-----------|----------|---------------|
| $\\sum (-1)^n/n^2$ | Conv ($p = 2$) | Conv | Absolute |
| $\\sum (-1)^n/n$ | Div (harmonic) | Conv (AST) | Conditional |
| $\\sum (-1)^n/\\sqrt[3]{n}$ | Div ($p = 1/3$) | Conv (AST) | Conditional |
| $\\sum (-1)^n$ | Div | Div | Divergent |`
    },
    {
      id: 'ct4-mc1',
      type: 'multiple-choice' as const,
      content: '**Classification Practice**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{2/3}}$ is:',
            options: ['Conditionally convergent', 'Absolutely convergent, since $p = 2/3 > 0$', 'Divergent, since $p = 2/3 < 1$', 'Absolutely convergent by the AST'],
            correctAnswer: 0,
            explanation: '$\\sum 1/n^{2/3}$: $p = 2/3 < 1$, diverges, so the convergence is not absolute. $\\sum (-1)^n/n^{2/3}$ converges by the AST. Conditional. The AST never shows absolute convergence, and the $p$-test applies to $\\sum |a_n|$, not to the alternating series.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{\\cos(n\\pi)}{n^4}$. Since $\\cos(n\\pi) = (-1)^n$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent, since $\\cos(n\\pi)$ has no limit', 'Inconclusive, since $\\cos(n\\pi)$ oscillates'],
            correctAnswer: 0,
            explanation: '$\\sum |a_n| = \\sum 1/n^4$, $p = 4 > 1$, converges. Absolutely convergent. The oscillating sign does not matter once the absolute series converges, and the terms themselves go to $0$.'
          },
          {
            question: 'If $\\sum |a_n|$ converges, what can you conclude about $\\sum a_n$?',
            options: ['It converges absolutely', 'It might converge or diverge', 'It converges conditionally', 'Nothing until $\\sum a_n$ is tested'],
            correctAnswer: 0,
            explanation: 'Absolute convergence implies convergence. Both $\\sum |a_n|$ and $\\sum a_n$ converge, so the convergence is absolute, not conditional.'
          }
        ]
      }
    },
    {
      id: 'ct4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify These Series**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n!}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent', 'Inconclusive'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['$\\sum 1/n!$ converges (it equals $e - 1$).'],
            explanation: '$\\sum |a_n| = \\sum 1/n!$ converges by the Ratio Test ($L = \\lim 1/(n+1) = 0$). Absolutely convergent.'
          },
          {
            label: '$\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{n \\ln n}$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent (by the Integral Test)', 'Cannot determine'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['$\\sum 1/(n \\ln n)$ diverges (log-$p$-series, $p = 1$). But the alternating version converges by AST.'],
            explanation: '$\\sum |a_n| = \\sum 1/(n\\ln n)$ diverges by the Integral Test ($\\int dx/(x\\ln x) = \\ln(\\ln x) \\to \\infty$), but that only rules out absolute convergence. AST: $1/(n\\ln n)$ decreases to $0$, so $\\sum a_n$ converges. Conditionally convergent.'
          }
        ]
      }
    },
    {
      id: 'ct4-input',
      type: 'input-box' as const,
      content: '**Classification**',
      exercise: {
        question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n+1}}$. Is it absolutely convergent, conditionally convergent, or divergent? Enter "absolute", "conditional", or "divergent".',
        correctAnswer: 'conditional',
        acceptableAnswers: ['conditional', 'conditionally convergent', 'conditionally'],
        hints: ['$\\sum 1/\\sqrt{n+1}$ diverges ($p = 1/2$). $\\sum (-1)^n/\\sqrt{n+1}$ converges (AST).'],
        explanation: '$\\sum |a_n|$ diverges ($p = 1/2 < 1$). $\\sum a_n$ converges (AST). Conditionally convergent.'
      }
    },
    {
      id: 'ct4-summary',
      type: 'text' as const,
      content: `### Summary

- Check 1: test $\\sum |a_n|$; if it converges, the series is absolutely convergent
- Check 2: test $\\sum a_n$ itself, usually with all three AST conditions stated
- Converges but not absolutely → conditionally convergent
- $\\lim a_n \\neq 0$ → divergent by the $n$th term test
- Absolute ⇒ convergent, but not the other way around

> **Next:** Part 5 — Test Selection Under Pressure.`
    }
  ]
};
