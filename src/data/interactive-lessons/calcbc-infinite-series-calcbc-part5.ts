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
| 6 | Contains $n$-th powers $(f(n))^n$? | Try Root Test |
| 7 | Similar to $p$-series or geometric? | Try Comparison (DCT/LCT) |
| 8 | Positive, decreasing, integratable? | Try Integral Test |

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
- Positive, decreasing, integratable → **Integral Test**: $\\int_2^\\infty \\frac{dx}{x\\ln x} = \\ln(\\ln x)\\big|_2^\\infty = \\infty$ → diverges ✓

**Example 4:** $\\sum_{n=1}^\\infty \\frac{(-1)^n n}{n+1}$
- $|a_n| = n/(n+1) \\to 1 \\neq 0$ → **Divergence Test** → diverges ✓ (not alternating — fails hypothesis)

### Common Pitfalls

| Mistake | Correction |
|---------|-----------|
| AST on $|a_n| \\not\\to 0$ | Must verify $b_n \\to 0$ first |
| Ratio/Root gives $L = 1$ | Test is **inconclusive** — try another |
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
            options: ['Limit Comparison with $1/n^2$', 'Ratio Test', 'Root Test', 'AST'],
            correctAnswer: 0,
            explanation: '$a_n \\sim 1/n^2$ for large $n$. LCT with $b_n = 1/n^2$: $a_n/b_n \\to 1 > 0$. Since $\\sum 1/n^2$ converges, so does our series.'
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
            label: 'For $\\sum_{n=1}^\\infty \\left(\\frac{2n+1}{3n+4}\\right)^n$, the best test is:',
            options: ['Root Test (nth power form)', 'Ratio Test', 'Integral Test', 'Comparison Test'],
            correctAnswers: ['Root Test (nth power form)'],
            hints: ['The entire expression is raised to the $n$-th power.'],
            explanation: '$\\sqrt[n]{|a_n|} = (2n+1)/(3n+4) \\to 2/3 < 1$. Converges by Root Test.'
          },
          {
            label: 'When the Ratio Test gives $L = 1$, the result is:',
            options: ['Inconclusive — use another test', 'Convergent', 'Divergent', 'Conditionally convergent'],
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
| $n$-th power structure | Root Test |
| Polynomial-like terms | Comparison / LCT |
| Positive, continuous, decreasing | Integral Test |
| Alternating signs | AST |

> **Key Fact:** On the AP exam, you'll almost never need more than one test per series. The challenge is identifying which one.

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
