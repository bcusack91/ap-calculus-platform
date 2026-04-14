export const calcbcSequencesPart7Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq7-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Comprehensive Review

**Part 7 of 7 — Full Topic Review**

### Master Reference

| Topic | Key Result |
|-------|-----------|
| Sequence convergence | $\\lim a_n = L$ (finite) |
| Monotone Convergence | Monotone + Bounded $\\implies$ Convergent |
| Recursive sequences | Solve $L = f(L)$ for the limit |
| $n$th Term Test | $a_n \\not\\to 0 \\implies \\sum a_n$ diverges |
| Geometric series | $\\sum ar^n = \\frac{a}{1-r}$ if $|r| < 1$ |
| $p$-series | $\\sum 1/n^p$ converges iff $p > 1$ |
| Telescoping | Use partial fractions, find $\\lim S_N$ |
| Growth hierarchy | $\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n$ |

> **AP Tip:** The AP BC exam tests sequences primarily through series. Understanding sequence convergence is the foundation for all series work.`
    },
    {
      id: 'seq7-pitfalls',
      type: 'text' as const,
      content: `### Common Pitfalls

1. **"$a_n \\to 0$ so $\\sum a_n$ converges"** — FALSE. The harmonic series is the classic counterexample.

2. **Confusing the sequence $\\{a_n\\}$ with the series $\\sum a_n$** — one asks about the terms, the other about the sum.

3. **Forgetting to verify convergence of recursive sequences** — solving $L = f(L)$ only finds CANDIDATES for the limit.

4. **Incorrect geometric series formula** — remember $\\sum_{n=0}^\\infty ar^n = \\frac{a}{1-r}$ starts at $n = 0$. If starting at $n = 1$: $\\frac{ar}{1-r}$.

5. **$p$-series boundary** — $p = 1$ (harmonic series) DIVERGES. Need $p > 1$ (strictly).`
    },
    {
      id: 'seq7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Questions**',
      exercise: {
        questions: [
          {
            question: 'Which of these series converges?',
            options: ['$\\sum_{n=1}^\\infty \\frac{1}{n^2}$', '$\\sum_{n=1}^\\infty \\frac{1}{n}$', '$\\sum_{n=1}^\\infty \\frac{n}{n+1}$', '$\\sum_{n=1}^\\infty (-1)^n$'],
            correctAnswer: 0,
            explanation: '$p$-series with $p = 2 > 1$: converges. Harmonic diverges. $n/(n+1) \\to 1 \\ne 0$: diverges. $(-1)^n \\not\\to 0$: diverges.'
          },
          {
            question: 'The sum $\\sum_{n=0}^\\infty 2\\left(\\frac{1}{3}\\right)^n = $',
            options: ['$3$', '$2$', '$6$', '$2/3$'],
            correctAnswer: 0,
            explanation: 'Geometric: $a = 2$, $r = 1/3$. Sum $= \\frac{2}{1-1/3} = \\frac{2}{2/3} = 3$.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\sqrt[n]{n} = $',
            options: ['$1$', '$0$', '$e$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$n^{1/n} = e^{(\\ln n)/n} \\to e^0 = 1$ since $\\frac{\\ln n}{n} \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'seq7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The divergence of the harmonic series shows that:',
            options: ['$a_n \\to 0$ is necessary but not sufficient for $\\sum a_n$ to converge', '$p$-series always diverge', 'All decreasing sequences diverge', 'We need $a_n \\to 0$ faster than $1/n$'],
            correctAnswers: ['$a_n \\to 0$ is necessary but not sufficient for $\\sum a_n$ to converge'],
            hints: ['$1/n \\to 0$ but $\\sum 1/n = \\infty$.'],
            explanation: 'The harmonic series is the key counterexample: terms go to zero, but the sum is infinite. Additional tests are always needed when $a_n \\to 0$.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{2}{n(n+1)} = $',
            options: ['$2$ (telescoping)', '$1$', '$\\infty$', '$\\pi^2/3$'],
            correctAnswers: ['$2$ (telescoping)'],
            hints: ['$\\frac{2}{n(n+1)} = 2\\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$.'],
            explanation: '$2\\sum\\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 2 \\cdot 1 = 2$.'
          }
        ]
      }
    },
    {
      id: 'seq7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'Find $\\sum_{n=1}^\\infty \\frac{1}{4^n}$. (Geometric series starting at $n = 1$.)',
        correctAnswer: '1/3',
        acceptableAnswers: ['1/3', '0.333', '0.33'],
        hints: ['$r = 1/4$, first term $a_1 = 1/4$.', '$\\frac{a_1}{1-r} = \\frac{1/4}{3/4}$.'],
        explanation: '$\\frac{1/4}{1 - 1/4} = \\frac{1/4}{3/4} = 1/3$.'
      }
    },
    {
      id: 'seq7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered infinite sequences and the bridge to series:
- Sequence convergence (limits, monotonicity, boundedness)
- Recursive sequences and special limits
- Geometric series, $p$-series, and telescoping series
- The $n$th term test and its limitations

$$\\boxed{\\sum_{n=1}^\\infty a_n = \\lim_{N \\to \\infty} S_N \\qquad \\sum ar^n = \\frac{a}{1-r} \\;(|r|<1)}$$

> **Up next:** Infinite Series — convergence tests (comparison, integral, ratio, root).`
    }
  ]
};
