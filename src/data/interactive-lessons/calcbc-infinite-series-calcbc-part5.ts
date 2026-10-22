export const calcbcSeriesPart5Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'is5-intro',
      type: 'text' as const,
      content: `# Infinite Series — Choosing the Right Test

**Part 5 of 7 — Convergence Test Strategy**

### Decision Flowchart for $\\sum a_n$

| Step | Ask Yourself | Action |
|------|-------------|--------|
| 1 | Does $a_n \\to 0$? | If NO → diverges (Divergence Test) |
| 2 | Geometric or telescoping? | Identify and use closed form |
| 3 | Is it a $p$-series $\\sum 1/n^p$? | Converges iff $p > 1$ |
| 4 | Alternating sign? | Try AST |
| 5 | Contains $n!$, $n^n$, or $a^n$? | Try Ratio Test |
| 6 | Similar to $p$-series or geometric? | Try Comparison (DCT/LCT) |
| 7 | Positive, decreasing, integrable? | Try Integral Test |

$$\\boxed{\\text{No single test works for all series — practice builds intuition.}}$$

> **AP Tip:** The exam frequently asks "which test is appropriate?" or "justify your answer using [a specific test]." Know the hypotheses of each test cold.`
    },
    {
      id: 'is5-examples',
      type: 'text' as const,
      content: `### Test Selection Examples

**Example 1:** $\\sum_{n=1}^\\infty \\frac{3^n}{n!}$
- Contains $n!$ → **Ratio Test**: $\\frac{a_{n+1}}{a_n} = \\frac{3}{n+1} \\to 0 < 1$ → converges ✓

**Example 2:** $\\sum_{n=1}^\\infty \\frac{n^2}{3n^2 + 1}$
- $a_n \\to 1/3 \\neq 0$ → **Divergence Test** → diverges ✓

**Example 3:** $\\sum_{n=2}^\\infty \\frac{1}{n \\ln n}$
- Positive, decreasing, integrable → **Integral Test**: $\\int_2^\\infty \\frac{dx}{x\\ln x} = \\lim_{b \\to \\infty}\\left[\\ln(\\ln x)\\right]_2^b = \\infty$ → diverges ✓

**Example 4:** $\\sum_{n=1}^\\infty \\frac{(-1)^n n}{n+1}$
- $|a_n| = n/(n+1) \\to 1 \\neq 0$ → **Divergence Test** → diverges ✓ (the series does alternate, but $b_n = n/(n+1) \\to 1$, so the AST does not apply)

### Common Pitfalls

| Mistake | Correction |
|---------|-----------|
| AST on $\\lvert a_n\\rvert \\not\\to 0$ | Must verify $b_n \\to 0$ first |
| Ratio Test gives $L = 1$ | Test is **inconclusive** — try another |
| Comparison in wrong direction | $a_n \\le b_n$ and $\\sum b_n$ converges → $\\sum a_n$ converges. NOT the other way for convergence |`
    },
    {
      id: 'is5-mc1',
      type: 'multiple-choice' as const,
      content: '**Which Test? Practice**',
      exercise: {
        questions: [
          {
            question: 'Which test is BEST for $\\sum_{n=1}^\\infty \\frac{n^2}{2^n}$?',
            options: ['Ratio Test', 'Integral Test', 'Direct Comparison', 'Divergence Test'],
            correctAnswer: 0,
            explanation: 'The $2^n$ in the denominator suggests Ratio Test. $|a_{n+1}/a_n| = (n+1)^2/(2n^2) \\to 1/2 < 1$. Converges.'
          },
          {
            question: 'Which test is BEST for $\\sum_{n=1}^\\infty \\frac{1}{n^2 + 5n + 6}$?',
            options: ['Limit Comparison with $1/n^2$', 'Ratio Test on $a_{n+1}/a_n$', 'Integral Test on $\\frac{1}{x}$', 'Limit Comparison with $1/n$'],
            correctAnswer: 0,
            explanation: '$a_n \\sim 1/n^2$ for large $n$. LCT with $b_n = 1/n^2$: $a_n/b_n \\to 1 > 0$. Since $\\sum 1/n^2$ converges, so does our series. The Ratio Test gives $L = 1$ here, the integral of $\\frac{1}{x}$ belongs to a different series, and comparing with $1/n$ gives $L = 0$ against a divergent series, which proves nothing.'
          },
          {
            question: 'The Divergence Test can only prove:',
            options: ['Divergence', 'Convergence', 'Both divergence and convergence', 'Absolute convergence'],
            correctAnswer: 0,
            explanation: 'If $a_n \\not\\to 0$, the series diverges. But $a_n \\to 0$ does NOT guarantee convergence (e.g., $\\sum 1/n$).'
          }
        ]
      }
    },
    {
      id: 'is5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Test Strategy Application**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\sum_{n=1}^\\infty \\left(\\frac{2n+1}{3n+4}\\right)^n$, a test that works is:',
            options: ['Divergence Test (base $\\to 2/3$)', 'Direct Comparison with $\\sum (2/3)^n$', 'Ratio Test, which gives $L = 1$', 'Integral Test on $\\frac{2x+1}{3x+4}$'],
            correctAnswers: ['Direct Comparison with $\\sum (2/3)^n$'],
            hints: ['Is $\\frac{2n+1}{3n+4}$ smaller than $\\frac{2}{3}$ for every $n$?'],
            explanation: 'Since $3(2n+1) = 6n+3 < 6n+8 = 2(3n+4)$, the base is less than $\\frac{2}{3}$, so $0 < a_n < \\left(\\frac{2}{3}\\right)^n$ and the series converges by comparison with a convergent geometric series. The terms tend to $0$, so the Divergence Test says nothing; the ratio limit is $\\frac{2}{3}$, not $1$, though it is messy to compute; and the integral test would need the whole term, not just its base.'
          },
          {
            label: 'When the Ratio Test gives $L = 1$, the result is:',
            options: ['Inconclusive — use another test', 'Convergent, like $\\sum 1/n^2$', 'Divergent, like $\\sum 1/n$', 'Conditionally convergent'],
            correctAnswers: ['Inconclusive — use another test'],
            hints: ['$\\sum 1/n$ and $\\sum 1/n^2$ both give $L = 1$ but behave differently.'],
            explanation: '$L = 1$ is inconclusive. Example: Ratio test gives $L = 1$ for both $\\sum 1/n$ (diverges) and $\\sum 1/n^2$ (converges).'
          }
        ]
      }
    },
    {
      id: 'is5-input',
      type: 'input-box' as const,
      content: '**Ratio Test Application**',
      exercise: {
        question: '$\\sum_{n=0}^\\infty \\frac{5^n}{(2n)!}$. Find $L = \\lim_{n\\to\\infty} |a_{n+1}/a_n|$. Enter $L$ as a whole number.',
        correctAnswer: '0',
        acceptableAnswers: ['0'],
        hints: ['$a_{n+1}/a_n = 5/((2n+2)(2n+1))$.'],
        explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{5^{n+1}}{(2n+2)!} \\cdot \\frac{(2n)!}{5^n} = \\frac{5}{(2n+2)(2n+1)} \\to 0$. Since $L = 0 < 1$, the series converges.'
      }
    },
    {
      id: 'is5-summary',
      type: 'text' as const,
      content: `### Key Takeaways

| Situation | Go-To Test |
|-----------|-----------|
| $a_n \\not\\to 0$ | Divergence Test |
| Factorials or exponentials | Ratio Test |
| $n$th powers $r^n$ with $0 < r < 1$ | Compare with geometric $\\sum r^n$ |
| Polynomial-like terms | Comparison / LCT |
| Positive, continuous, decreasing | Integral Test |
| Alternating signs | AST |

> **Key Fact:** Deciding convergence usually takes one well-chosen test; classifying a series as absolutely or conditionally convergent takes two (one for $\\sum |a_n|$, one for $\\sum a_n$). The challenge is identifying which test fits.

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
