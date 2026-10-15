export const calcbcSeriesPart7Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'is7-intro',
      type: 'text' as const,
      content: `# Infinite Series — Comprehensive Review

**Part 7 of 7 — Review All Convergence Tests**

### Quick Reference: All Tests

| Test | Hypotheses | Conclusion |
|------|-----------|-----------|
| **Divergence** | $\\lim a_n \\neq 0$ | Diverges |
| **Geometric** | $\\sum ar^n$ | Converges iff $|r| < 1$, sum $= a/(1-r)$ |
| **$p$-Series** | $\\sum 1/n^p$ | Converges iff $p > 1$ |
| **Integral** | $f$ positive, continuous, decreasing | $\\sum a_n$ and $\\int f$ converge/diverge together |
| **DCT** | $0 \\le a_n \\le b_n$ | $\\sum b_n$ conv. $\\Rightarrow \\sum a_n$ conv. |
| **LCT** | $\\lim a_n/b_n = L > 0$ | Both converge or both diverge |
| **Ratio** | $L = \\lim |a_{n+1}/a_n|$ | $L < 1$: conv; $L > 1$: div; $L = 1$: inconc. |
| **AST** | $(-1)^n b_n$, $b_n$ decreasing, $b_n \\to 0$ | Converges |

$$\\boxed{\\text{Absolute convergence} \\implies \\text{Convergence} \\implies a_n \\to 0}$$

> **AP Exam Note:** You MUST state the test name and verify its hypotheses for full credit. A correct answer with no justification earns minimal credit.`
    },
    {
      id: 'is7-mc1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive MC Review**',
      exercise: {
        questions: [
          {
            question: 'Which of the following series DIVERGES?',
            options: ['$\\sum_{n=1}^\\infty \\frac{n+1}{n^2+n+1}$', '$\\sum_{n=1}^\\infty \\frac{1}{n^2+1}$', '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n+1}$', '$\\sum_{n=1}^\\infty \\frac{1}{2^n}$'],
            correctAnswer: 0,
            explanation: '$\\frac{n+1}{n^2+n+1} \\sim 1/n$ for large $n$. By LCT with $1/n$, the series diverges. The other three converge (comparison with $1/n^2$, AST, geometric).'
          },
          {
            question: 'If $\\sum a_n$ converges conditionally, then:',
            options: ['$\\sum |a_n|$ diverges', '$\\sum |a_n|$ converges', '$a_n > 0$ for every $n$', '$\\lim_{n\\to\\infty} a_n \\neq 0$'],
            correctAnswer: 0,
            explanation: 'By definition, conditional convergence means $\\sum a_n$ converges but $\\sum |a_n|$ diverges. Since $\\sum a_n$ converges, $a_n \\to 0$, and the terms cannot all be positive (then the series would converge absolutely).'
          },
          {
            question: 'The Integral Test requires $f$ to be all EXCEPT:',
            options: ['Differentiable', 'Positive', 'Continuous', 'Decreasing'],
            correctAnswer: 0,
            explanation: 'The Integral Test requires $f$ to be positive, continuous, and decreasing. Differentiability is NOT required (though it often helps verify the function is decreasing).'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1} n^2}{n^3 + 1}$. This series:',
            options: ['Diverges (LCT with $1/n$)', 'Converges absolutely', 'Converges conditionally', 'Diverges by the $n$th term test'],
            correctAnswer: 2,
            explanation: 'Let $b_n = \\frac{n^2}{n^3+1}$. Then $b_n \\to 0$ and $b_n$ is decreasing ($b_1 = \\frac{1}{2}$, $b_2 = \\frac{4}{9}$, and the derivative of $\\frac{x^2}{x^3+1}$ is negative for $x \\ge 2$), so the series converges by the Alternating Series Test. But $\\sum b_n$ diverges by LCT with $\\frac{1}{n}$ ($L = 1$), so the convergence is not absolute. The series is conditionally convergent. LCT with $\\frac{1}{n}$ shows only that $\\sum |a_n|$ diverges, and the $n$th term test does not apply because $a_n \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'is7-fix-mc',
      type: 'multiple-choice' as const,
      content: '**More Review Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{2^n n!}{n^n}$. Apply the Ratio Test. The series:',
            options: ['Converges ($L = 2/e < 1$)', 'Diverges ($L = 2e > 1$)', 'Diverges ($L = 2 > 1$)', 'Inconclusive ($L = 1$)'],
            correctAnswer: 0,
            explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{2(n+1)! n^n}{(n+1)^{n+1} n!} = \\frac{2n^n}{(n+1)^n} = 2\\left(\\frac{n}{n+1}\\right)^n \\to 2/e \\approx 0.736$. Since $L = 2/e < 1$, it converges. Treating $\\left(\\frac{n}{n+1}\\right)^n$ as $e$ instead of $\\frac{1}{e}$ gives $2e$, and treating it as $1$ gives $2$.'
          },
          {
            question: 'A student says "$\\sum 1/n$ diverges because the Ratio Test gives $L = 1$." Is this correct?',
            options: ['No, since $L = 1$ is inconclusive', 'Yes, since $L = 1$ proves divergence', 'No, since $\\sum 1/n$ actually converges', 'Yes, since the Ratio Test always decides'],
            correctAnswer: 0,
            explanation: 'The Ratio Test is inconclusive when $L = 1$. The harmonic series does diverge, but you need the Integral Test, the $p$-series test, or a comparison to prove it.'
          }
        ]
      }
    },
    {
      id: 'is7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Classification Drill**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^{\\pi}}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['$\\pi \\approx 3.14$. What kind of series is $\\sum 1/n^\\pi$?'],
            explanation: '$\\sum 1/n^\\pi$ converges ($p$-series with $p = \\pi > 1$). Absolute convergence.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{n!}{(2n)!}$:',
            options: ['Converges (Ratio Test gives $L = 0$)', 'Diverges (Ratio Test gives $L = \\infty$)', 'Inconclusive (Ratio Test gives $L = 1$)'],
            correctAnswers: ['Converges (Ratio Test gives $L = 0$)'],
            hints: ['$a_{n+1}/a_n = (n+1)!/((2n+2)!) \\cdot (2n)!/n! = (n+1)/((2n+2)(2n+1))$.'],
            explanation: '$|a_{n+1}/a_n| = (n+1)/((2n+2)(2n+1)) = 1/(2(2n+1)) \\to 0$. Converges. Inverting the ratio ($a_n/a_{n+1}$) gives $L = \\infty$, a common slip.'
          }
        ]
      }
    },
    {
      id: 'is7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'Find the sum: $\\sum_{n=0}^\\infty \\frac{(-1)^n}{4^n} = \\sum_{n=0}^\\infty \\left(-\\frac{1}{4}\\right)^n$. Enter as a fraction.',
        correctAnswer: '4/5',
        acceptableAnswers: ['4/5', '0.8'],
        hints: ['Geometric series with $r = -1/4$. Sum $= 1/(1-r)$.'],
        explanation: 'Geometric series: $a = 1$, $r = -1/4$. Sum $= 1/(1-(-1/4)) = 1/(5/4) = 4/5$.'
      }
    },
    {
      id: 'is7-summary',
      type: 'text' as const,
      content: `### Infinite Series — Complete Summary

You've mastered:
- **Integral Test** — connects series and improper integrals
- **Comparison Tests** — DCT and LCT for bounding series
- **Ratio Test** — best for factorials and exponentials
- **Absolute vs. Conditional Convergence** — fundamental classification
- **Test Selection Strategy** — choosing the right tool for each series

> **Key Fact:** Series convergence is a major BC topic, typically appearing in both MC and FRQ sections. Unit 10 (series) carries 15–20% of the BC multiple-choice weighting.

> **Up Next:** Alternating Series — deep dive into the Alternating Series Test, error bounds, and applications.`
    }
  ]
};
