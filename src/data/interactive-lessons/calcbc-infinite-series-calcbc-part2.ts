export const calcbcSeriesPart2Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'is2-intro',
      type: 'text' as const,
      content: `# Infinite Series — Comparison Tests

**Part 2 of 7 — Direct & Limit Comparison Tests**

### Direct Comparison Test (DCT)

For $0 \\le a_n \\le b_n$:

| If... | Then... |
|-------|---------|
| $\\sum b_n$ converges | $\\sum a_n$ converges |
| $\\sum a_n$ diverges | $\\sum b_n$ diverges |

**Intuition:** Smaller than convergent $\\implies$ convergent. Bigger than divergent $\\implies$ divergent.

### Limit Comparison Test (LCT)

If $a_n, b_n > 0$ and $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L$ where $0 < L < \\infty$, then:

$$\\boxed{\\sum a_n \\text{ and } \\sum b_n \\text{ either both converge or both diverge.}}$$

> **AP Tip:** The LCT is the most versatile comparison test. Choose $b_n$ to be a simpler series ($p$-series or geometric) that behaves like $a_n$.`
    },
    {
      id: 'is2-examples',
      type: 'text' as const,
      content: `### Examples

**Example 1 (DCT):** $\\sum \\frac{1}{n^2 + n}$

$\\frac{1}{n^2 + n} < \\frac{1}{n^2}$ and $\\sum 1/n^2$ converges ($p = 2$).

By DCT, $\\sum \\frac{1}{n^2 + n}$ converges. ✓

**Example 2 (LCT):** $\\sum \\frac{3n^2 + 1}{n^4 - 2n + 7}$

Compare with $b_n = 1/n^2$ (dominant terms give $3n^2/n^4 = 3/n^2$).

$$\\frac{a_n}{b_n} = \\frac{(3n^2+1)n^2}{n^4-2n+7} \\to \\frac{3n^4}{n^4} = 3$$

Since $L = 3 \\in (0, \\infty)$ and $\\sum 1/n^2$ converges, the given series converges by LCT. ✓

**Example 3 (LCT):** $\\sum \\frac{1}{\\sqrt{n} - 1}$

Compare with $b_n = 1/\\sqrt{n}$: $\\frac{a_n}{b_n} = \\frac{\\sqrt{n}}{\\sqrt{n}-1} \\to 1$.

$\\sum 1/\\sqrt{n}$ diverges ($p = 1/2$), so $\\sum \\frac{1}{\\sqrt{n}-1}$ diverges. ✓`
    },
    {
      id: 'is2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice**',
      exercise: {
        questions: [
          {
            question: 'To test $\\sum \\frac{n}{n^3 + 1}$ with LCT, the best comparison is:',
            options: ['$b_n = 1/n^2$ (dominant terms: $n/n^3$)', '$b_n = 1/n$', '$b_n = 1/n^3$', '$b_n = n$'],
            correctAnswer: 0,
            explanation: 'For large $n$: $\\frac{n}{n^3+1} \\approx \\frac{n}{n^3} = 1/n^2$. The limit $a_n/b_n \\to 1$. Since $\\sum 1/n^2$ converges ($p=2>1$), the series converges.'
          },
          {
            question: 'DCT cannot show convergence by comparing with a divergent series. But LCT:',
            options: ['Also cannot — LCT only compares series with the same behavior', 'Can show convergence from divergent comparison', 'Is unrelated to DCT', 'Only works for geometric series'],
            correctAnswer: 0,
            explanation: 'LCT with $L \\in (0,\\infty)$ says both series behave the same way. If $b_n$ diverges, $a_n$ diverges too. Neither test can prove convergence from a divergent comparison.'
          }
        ]
      }
    },
    {
      id: 'is2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Test Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum \\frac{\\sin^2 n}{n^2}$ converges by DCT because:',
            options: ['$\\sin^2 n \\le 1$, so $a_n \\le 1/n^2$ and $\\sum 1/n^2$ converges', '$\\sin^2 n \\to 0$', 'LCT with $1/n^2$', 'It telescopes'],
            correctAnswers: ['$\\sin^2 n \\le 1$, so $a_n \\le 1/n^2$ and $\\sum 1/n^2$ converges'],
            hints: ['Bound the numerator.'],
            explanation: '$0 \\le \\frac{\\sin^2 n}{n^2} \\le \\frac{1}{n^2}$. Since $\\sum 1/n^2$ converges, DCT gives convergence.'
          },
          {
            label: 'When choosing $b_n$ for LCT, you should pick:',
            options: ['A simple series ($p$-series or geometric) with the same growth rate as $a_n$', 'Any convergent series', 'Any divergent series', 'The exact same series'],
            correctAnswers: ['A simple series ($p$-series or geometric) with the same growth rate as $a_n$'],
            hints: ['The limit $a_n/b_n$ should be a finite nonzero constant.'],
            explanation: 'Match the dominant behavior: keep highest powers in numerator and denominator to identify the right $b_n$.'
          }
        ]
      }
    },
    {
      id: 'is2-input',
      type: 'input-box' as const,
      content: '**LCT Practice**',
      exercise: {
        question: 'For $\\sum \\frac{5n+1}{2n^3-n}$, compare with $b_n = 1/n^2$. Compute $\\lim a_n/b_n = \\lim \\frac{(5n+1)n^2}{2n^3-n}$. What is this limit?',
        correctAnswer: '5/2',
        acceptableAnswers: ['5/2', '2.5', '2.50'],
        hints: ['Dominant terms: $5n \\cdot n^2 / (2n^3) = 5n^3/2n^3$.'],
        explanation: '$\\frac{5n^3 + n^2}{2n^3 - n} \\to 5/2$. Since $0 < 5/2 < \\infty$ and $\\sum 1/n^2$ converges, the series converges by LCT.'
      }
    },
    {
      id: 'is2-summary',
      type: 'text' as const,
      content: `### Summary

- **DCT:** Bound $a_n$ above by convergent or below by divergent
- **LCT:** Compare $a_n/b_n \\to L \\in (0, \\infty)$ — same behavior
- Choose $b_n$ by identifying dominant terms
- Both tests require positive terms

> **Next:** Part 3 — The Ratio and Root Tests.`
    }
  ]
};
