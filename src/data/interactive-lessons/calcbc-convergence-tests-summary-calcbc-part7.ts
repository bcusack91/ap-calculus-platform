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
            options: ['Converges (split: geometric $\\sum (2/3)^n$ + comparison $\\sum n/3^n$)', 'Diverges by Divergence Test', 'Converges conditionally', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\sum (2/3)^n$ converges (geometric, $|r| = 2/3 < 1$). $\\sum n/3^n$ converges (Ratio Test). Sum of convergent series converges.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n(n+1)}}$',
            options: ['Diverges (LCT with $\\sum 1/n$ gives $L = 1$)', 'Converges by DCT', 'Converges by Integral Test', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$\\lim \\frac{1/\\sqrt{n(n+1)}}{1/n} = \\lim \\frac{n}{\\sqrt{n^2+n}} = 1$. Since $\\sum 1/n$ diverges, so does this.'
          },
          {
            question: '$\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$',
            options: ['Diverges (Integral Test or log-$p$-series with $p = 1$)', 'Converges by LCT', 'Converges by DCT', 'Converges by Ratio Test'],
            correctAnswer: 0,
            explanation: 'Log-$p$-series with $p = 1 \\leq 1$: diverges. Or: $\\int_2^\\infty \\frac{dx}{x \\ln x} = [\\ln(\\ln x)]_2^\\infty = \\infty$.'
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
            options: ['Absolutely convergent (Ratio Test on $\\sum n^2/2^n$ gives $L = 1/2$)', 'Conditionally convergent', 'Divergent', 'Pass to Root Test'],
            correctAnswer: 0,
            explanation: '$\\sum n^2/2^n$: Ratio $L = \\lim \\frac{(n+1)^2}{2n^2} = 1/2 < 1$. $\\sum |a_n|$ converges → absolutely convergent.'
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
            label: '$\\sum_{n=1}^{\\infty} \\frac{(2n)!}{(n!)^2 4^n}$:',
            options: ['Ratio Test (double factorial → ratio simplifies nicely)', 'Root Test', 'LCT', 'Integral Test'],
            correctAnswers: ['Ratio Test (double factorial → ratio simplifies nicely)'],
            hints: ['Factorials signal Ratio Test. $\\frac{a_{n+1}}{a_n} = \\frac{(2n+2)(2n+1)}{4(n+1)^2}$.'],
            explanation: 'Ratio: $L = \\lim \\frac{(2n+2)(2n+1)}{4(n+1)^2} = \\lim \\frac{4n^2+6n+2}{4n^2+8n+4} = 1$. Inconclusive! (This is actually $\\sum \\binom{2n}{n}/4^n \\sim 1/\\sqrt{\\pi n}$, diverges.)'
          },
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{n}{e^n}$:',
            options: ['Ratio Test ($L = 1/e < 1$, converges)', 'LCT with $\\sum 1/n$', 'Divergence Test', 'AST'],
            correctAnswers: ['Ratio Test ($L = 1/e < 1$, converges)'],
            hints: ['Exponential in denominator → Ratio Test.'],
            explanation: 'Ratio: $L = \\lim \\frac{n+1}{en} = 1/e < 1$. Converges.'
          },
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{3n+2}{n^3-1}$:',
            options: ['LCT with $\\sum 1/n^2$ ($L = 3$, both converge)', 'Ratio Test', 'Root Test', 'AST'],
            correctAnswers: ['LCT with $\\sum 1/n^2$ ($L = 3$, both converge)'],
            hints: ['Leading terms: $3n/n^3 = 3/n^2$. Compare to $1/n^2$.'],
            explanation: '$\\lim \\frac{(3n+2)/(n^3-1)}{1/n^2} = \\lim \\frac{3n^3+2n^2}{n^3-1} = 3 > 0$. Converges with $\\sum 1/n^2$.'
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
