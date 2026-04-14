export const calcbcAlternatingPart7Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'as7-intro',
      type: 'text' as const,
      content: `# Alternating Series — Comprehensive Review

**Part 7 of 7 — Full Topic Review**

### Complete Reference

| Concept | Key Formula/Rule |
|---------|-----------------|
| AST | $b_n > 0$, $b_{n+1} \\le b_n$, $b_n \\to 0$ → converges |
| Error Bound | $|S - S_N| \\le b_{N+1}$ |
| Over/Under | Odd $N$ + positive first → over; Even $N$ → under |
| Absolute | $\\sum |a_n|$ converges |
| Conditional | $\\sum a_n$ conv. but $\\sum |a_n|$ div. |
| Rearrangement | Conditionally conv. → rearrange to any sum |

$$\\boxed{\\text{Alternating series: check conditions, bound the error, classify the convergence.}}$$`
    },
    {
      id: 'as7-mc1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Review MC**',
      exercise: {
        questions: [
          {
            question: 'Which of the following converges CONDITIONALLY?',
            options: ['$\\sum (-1)^n / \\sqrt[3]{n}$', '$\\sum (-1)^n / n^2$', '$\\sum (-1)^n / 2^n$', '$\\sum (-1)^n / n!$'],
            correctAnswer: 0,
            explanation: '$\\sum 1/n^{1/3}$ diverges ($p = 1/3 < 1$), but the alternating series converges by AST. The others all converge absolutely.'
          },
          {
            question: 'The alternating series error bound states that the error is bounded by:',
            options: ['The first omitted term', 'The last included term', 'Half the first omitted term', 'The square of the first omitted term'],
            correctAnswer: 0,
            explanation: '$|S - S_N| \\le b_{N+1}$ — the absolute value of the first term NOT included in the partial sum.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1} n!}{10^n}$. This series:',
            options: ['Diverges ($n!/10^n \\to \\infty$)', 'Converges conditionally', 'Converges absolutely', 'Need Ratio Test to determine'],
            correctAnswer: 0,
            explanation: '$b_n = n!/10^n$. By Stirling or direct inspection, $n!/10^n \\to \\infty$. Since $b_n \\not\\to 0$, the series diverges by the Divergence Test.'
          },
          {
            question: 'At the endpoint $x = -R$ of a power series $\\sum c_n x^n$ with radius $R > 0$, the series:',
            options: ['May converge or diverge — must test', 'Always converges', 'Always diverges', 'Is always an alternating series'],
            correctAnswer: 0,
            explanation: 'Endpoints must be tested individually. The series might converge (possibly conditionally via AST), or diverge. There\'s no general rule.'
          }
        ]
      }
    },
    {
      id: 'as7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Classification Drill**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n + 10}$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['$\\sum 1/(n+10)$ diverges (like harmonic). AST conditions met.'],
            explanation: '$\\sum 1/(n+10)$ diverges (LCT with $1/n$). AST: $b_n = 1/(n+10)$ positive, decreasing, $\\to 0$. Conditional convergence.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n n}{3^n}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['Test $\\sum n/3^n$ with Ratio Test.'],
            explanation: '$\\sum |a_n| = \\sum n/3^n$. Ratio Test: $(n+1)/(3n) \\to 1/3 < 1$. Absolute convergence.'
          },
          {
            label: '$\\sum_{n=1}^\\infty (-1)^n \\sin(1/n)$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['$\\sin(1/n) \\sim 1/n$ for large $n$. Is $\\sin(1/n)$ decreasing?'],
            explanation: '$\\sin(1/n) > 0$, decreasing, $\\to 0$. AST ✓ → converges. $\\sum |\\sin(1/n)| \\sim \\sum 1/n$ diverges (LCT). Conditional.'
          }
        ]
      }
    },
    {
      id: 'as7-input',
      type: 'input-box' as const,
      content: '**Final Error Bound Problem**',
      exercise: {
        question: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^5}$ is approximated by $S_2 = 1 - 1/32$. What is the maximum error? Express as a fraction.',
        correctAnswer: '1/243',
        acceptableAnswers: ['1/243'],
        hints: ['$S_2$ uses $n=1,2$. The first omitted term is $n=3$: $b_3 = 1/3^5$.'],
        explanation: 'Error $\\le b_3 = 1/3^5 = 1/243 \\approx 0.00412$.'
      }
    },
    {
      id: 'as7-summary',
      type: 'text' as const,
      content: `### Alternating Series — Complete Summary

You've mastered:
- **Alternating Series Test** — the three conditions and verification
- **Error Bound** — first omitted term bounds the error
- **Over/Underestimate** — parity of partial sum count
- **Absolute vs. Conditional** — classification procedure
- **Taylor Series Connection** — AST error bound as an alternative to Lagrange
- **AP Exam Strategies** — full justification requirements

> **Key Fact:** Alternating series and error bounds appear on virtually every BC exam. This is one of the highest-yield topics for your score.

> **Up Next:** Power Series — representation, convergence, and manipulation.`
    }
  ]
};
