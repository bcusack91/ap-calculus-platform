export const calcbcConvergencePart7Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — Convergence Tests

**Part 7 of 7 — Final Assessment**

### Master Reference

| Test | Use when... | Conclusion |
|------|-----------|------------|
| Divergence | Always first | $\\lim a_n \\neq 0 \\Rightarrow$ diverges |
| Geometric | $\\sum ar^n$ | $|r| < 1$: conv to $a/(1-r)$ |
| $p$-Series | $\\sum 1/n^p$ | $p > 1$: conv; $p \\leq 1$: div |
| AST | $\\sum (-1)^n b_n$ | $b_n \\downarrow 0$: conv |
| Ratio | Factorials, $n$th powers of constants | $L < 1$: conv; $L > 1$: div |
| Root | $a_n = [f(n)]^n$ | $L < 1$: conv; $L > 1$: div |
| DCT | Can bound $0 \\leq a_n \\leq b_n$ | $\\sum b_n$ conv ⇒ $\\sum a_n$ conv |
| LCT | Rational-type terms | $\\lim a_n/b_n = L > 0$: same behavior |
| Integral | Positive, decreasing, continuous | $\\int_1^\\infty f$ and $\\sum a_n$ agree |
| Telescoping | Partial fractions collapse | Compute $\\lim S_n$ |

$$\\boxed{\\text{Flowchart: Div Test} \\to \\text{Recognizable} \\to \\text{Alternating} \\to \\text{Ratio/Root} \\to \\text{Comparison}}$$`
    },
    {
      id: 'ct7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Set A — Convergence/Divergence**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{2^n + n}{3^n}$',
            options: ['Converges, as the sum of two convergent series', 'Diverges, as $2^n + n$ is unbounded', 'Converges conditionally by the AST', 'Diverges, as $\\frac{n}{3^n}$ is not geometric'],
            correctAnswer: 0,
            explanation: 'Split: $\\sum (2/3)^n$ converges (geometric, $|r| = 2/3 < 1$) and $\\sum n/3^n$ converges (Ratio Test, $L = 1/3$). The sum of two convergent series converges. An unbounded numerator does not matter when the terms still go to $0$, and the series is not alternating.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n(n+1)}}$',
            options: ['Diverges (LCT with $\\sum 1/n$)', 'Converges (DCT with $\\sum 1/n^2$)', 'Converges ($p$-series with $p = 2$)', 'Inconclusive (Ratio Test gives $L = 1$)'],
            correctAnswer: 0,
            explanation: '$\\lim \\frac{1/\\sqrt{n(n+1)}}{1/n} = \\lim \\frac{n}{\\sqrt{n^2+n}} = 1$. Since $\\sum 1/n$ diverges, so does this. Forgetting the square root makes it look like $\\frac{1}{n^2}$, but the terms behave like $\\frac{1}{n}$, and the Ratio Test\'s $L = 1$ just means another test is needed.'
          },
          {
            question: '$\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$',
            options: ['Diverges by the Integral Test', 'Converges by LCT with $\\sum \\frac{1}{n^2}$', 'Converges by DCT with $\\sum \\frac{1}{n}$', 'Converges by the Ratio Test, $L < 1$'],
            correctAnswer: 0,
            explanation: 'Log-$p$-series with $p = 1 \\leq 1$: diverges. By the Integral Test: $\\int_2^\\infty \\frac{dx}{x \\ln x} = [\\ln(\\ln x)]_2^\\infty = \\infty$. LCT with $\\frac{1}{n^2}$ gives $L = \\infty$, being smaller than a divergent series proves nothing, and the Ratio Test gives $L = 1$.'
          }
        ]
      }
    },
    {
      id: 'ct7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review Set B — Classification**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n + \\sqrt{n}}$ is:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\sum 1/(n+\\sqrt{n})$: LCT with $1/n$, $L = 1$, diverges. $\\sum (-1)^n/(n+\\sqrt{n})$: AST, $b_n \\to 0$, decreasing → converges. Conditional.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n n^2}{2^n}$ is:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent, since $n^2$ grows without bound', 'Inconclusive, since the Ratio Test gives $L = 1$'],
            correctAnswer: 0,
            explanation: '$\\sum n^2/2^n$: Ratio $L = \\lim \\frac{(n+1)^2}{2n^2} = 1/2 < 1$. $\\sum |a_n|$ converges, so the series is absolutely convergent. The $2^n$ outgrows $n^2$, so the terms go to $0$.'
          }
        ]
      }
    },
    {
      id: 'ct7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Best Test Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{(n!)^2}{(2n)!}$:',
            options: ['Ratio Test (factorials cancel cleanly)', 'Root Test', 'LCT with $\\sum 1/n$', 'Integral Test'],
            correctAnswers: ['Ratio Test (factorials cancel cleanly)'],
            hints: ['Factorials signal Ratio Test. $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{(2n+2)(2n+1)}$.'],
            explanation: 'Ratio: $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{(2n+2)(2n+1)} = \\frac{n+1}{2(2n+1)} \\to \\frac{1}{4} < 1$. Converges. Factorials have no simple $n$th root and cannot be integrated, and against the divergent $\\sum 1/n$ the LCT limit is $0$, which proves nothing.'
          },
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{n}{e^n}$:',
            options: ['Ratio Test ($L = 1/e < 1$, converges)', 'LCT with $\\sum 1/n$ ($L = 0$, diverges)', 'Divergence Test ($a_n \\to 0$, converges)', 'Integral Test ($\\int x e^{-x}\\,dx$ diverges)'],
            correctAnswers: ['Ratio Test ($L = 1/e < 1$, converges)'],
            hints: ['Exponential in denominator → Ratio Test.'],
            explanation: 'Ratio: $L = \\lim \\frac{n+1}{en} = 1/e < 1$. Converges. Against $\\sum 1/n$ the LCT limit is $0$, which says nothing about a divergent comparison; $\\int_1^\\infty xe^{-x}\\,dx = 2/e$ is finite; and $a_n \\to 0$ alone never proves convergence.'
          },
          {
            label: '$\\sum_{n=2}^{\\infty} \\frac{3n+2}{n^3-1}$:',
            options: ['LCT with $\\sum 1/n^2$ ($L = 3$, both converge)', 'Ratio Test ($L = 1$, converges)', 'LCT with $\\sum 1/n$ ($L = 3$, both diverge)', 'DCT with $\\sum 3/n^2$ (so it converges)'],
            correctAnswers: ['LCT with $\\sum 1/n^2$ ($L = 3$, both converge)'],
            hints: ['Leading terms: $3n/n^3 = 3/n^2$. Compare to $1/n^2$.'],
            explanation: '$\\lim \\frac{(3n+2)/(n^3-1)}{1/n^2} = \\lim \\frac{3n^3+2n^2}{n^3-1} = 3 > 0$. Converges with $\\sum 1/n^2$. (The sum starts at $n = 2$ because $n^3 - 1 = 0$ at $n = 1$.) Against $\\sum 1/n$ the limit is $0$, not $3$; and $a_n > 3/n^2$, so direct comparison with $\\sum 3/n^2$ proves nothing.'
          }
        ]
      }
    },
    {
      id: 'ct7-input',
      type: 'input-box' as const,
      content: '**Final Challenge**',
      exercise: {
        question: 'How many of these series converge? (1) $\\sum n!/n^n$ (2) $\\sum 1/(n \\ln^2 n)$ (3) $\\sum (-1)^n/\\ln n$ (4) $\\sum n^{10}/10^n$. Enter a number 0–4.',
        correctAnswer: '4',
        acceptableAnswers: ['4', 'four'],
        hints: ['(1) Ratio: $L = 1/e$. (2) Integral Test or log-$p$ with $p=2$. (3) AST. (4) Ratio: $L = 1/10$.'],
        explanation: 'All four converge: (1) $L = 1/e < 1$ ✓. (2) Log-$p$-series, $p = 2 > 1$ ✓. (3) AST, $1/\\ln n \\to 0$ ✓. (4) $L = 1/10 < 1$ ✓.'
      }
    },
    {
      id: 'ct7-summary',
      type: 'text' as const,
      content: `### Convergence Tests Summary — Complete

You've mastered:
- All 9 convergence tests and when to use each
- Direct and Limit Comparison Tests
- Integral Test and special series (log-$p$)
- Absolute vs. conditional convergence
- AP exam strategy and justification writing

$$\\boxed{\\text{Master the flowchart. Verify all conditions. Write clear conclusions.}}$$`
    }
  ]
};
