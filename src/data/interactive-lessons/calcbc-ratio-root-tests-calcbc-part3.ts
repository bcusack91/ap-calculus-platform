export const calcbcRatioRootPart3Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'rr3-intro',
      type: 'text' as const,
      content: `# Ratio vs. Root — Decision Guide

**Part 3 of 7 — Choosing the Right Tool**

### Side-by-Side Comparison

| Feature | Ratio Test | Root Test |
|---------|-----------|----------|
| Formula | $\\lim |a_{n+1}/a_n|$ | $\\lim |a_n|^{1/n}$ |
| Best for | Factorials, mixed products | $n$th powers |
| Weakness | Inconclusive for $p$-series | Inconclusive for $p$-series |
| AP frequency | **Very common** | Occasional |

### Decision Tree

1. Does $a_n$ contain $n!$ or $(kn)!$? → **Ratio Test**
2. Is $a_n = (\\text{something})^n$? → **Root Test**
3. Does $a_n$ contain $r^n$ (geometric-type)? → **Either** (Ratio is usually simpler)
4. Is $a_n$ a rational function of $n$? → **Neither** (use Limit Comparison or $p$-Series)

> **Key Fact:** If both tests give a finite $L$, they give the SAME $L$. The choice is about which computation is simpler.`
    },
    {
      id: 'rr3-edge-cases',
      type: 'text' as const,
      content: `### Edge Cases and Pitfalls

**Case 1: $L = 1$ — Need Another Test**

$\\sum 1/n$ and $\\sum 1/n^2$ both give $L = 1$ with Ratio AND Root. But one diverges, one converges. You need Integral Test, $p$-Series, or Comparison.

**Case 2: Ratio Limit DNE, Root Works**

$$a_n = \\begin{cases} 2^{-n} & n \\text{ even} \\\\ 3^{-n} & n \\text{ odd} \\end{cases}$$

Ratio: $|a_{n+1}/a_n|$ alternates between $2^n/3^{n+1}$ and $3^n/2^{n+1}$ — no limit!

Root: $|a_n|^{1/n} \\to$ either $1/2$ or $1/3$, both $< 1$. Series converges.

**Case 3: Geometric Series**

$\\sum ar^n$: Ratio gives $|r|$, Root gives $|r|$. Same answer, equally easy.

### Common Ratio Test Simplifications

| Expression | $a_{n+1}/a_n$ simplifies to |
|-----------|---------------------------|
| $n!/(n+1)!$ | $1/(n+1)$ |
| $(2n+2)!/(2n)!$ | $(2n+2)(2n+1)$ |
| $r^{n+1}/r^n$ | $r$ |
| $(n+1)^k/n^k$ | $(1+1/n)^k \\to 1$ |`
    },
    {
      id: 'rr3-mc1',
      type: 'multiple-choice' as const,
      content: '**Which Test?**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n!}{e^n}$ — best first test:',
            options: ['Ratio Test ($n!$ present)', 'Root Test', 'Integral Test', 'Comparison Test'],
            correctAnswer: 0,
            explanation: 'Factorial → Ratio Test. $L = \\lim (n+1)/e = \\infty$. Diverges.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{n}{n+1}\\right)^{n^2}$ — best first test:',
            options: ['Root Test ($n$th power structure)', 'Ratio Test', 'Divergence Test', 'Integral Test'],
            correctAnswer: 0,
            explanation: 'Root: $|a_n|^{1/n} = (n/(n+1))^n \\to 1/e < 1$. Converges.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n^3}{5^n}$ — Ratio Test gives $L =$',
            options: ['$1/5$ (polynomial part ratio $\\to 1$, exponential gives $1/5$)', '$1/5^3$', '$3/5$', '$5$'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = ((n+1)^3/5^{n+1})(5^n/n^3) = (1/5)((n+1)/n)^3 \\to 1/5$. Converges.'
          }
        ]
      }
    },
    {
      id: 'rr3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Test Selection and Application**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum n^{10}/2^n$: the dominant feature is the $2^n$ denominator. Best test and result:',
            options: ['Ratio: $L = 1/2$, converges', 'Root: $L = 10/2$, diverges', '$p$-Series: converges', 'Divergence Test: diverges'],
            correctAnswers: ['Ratio: $L = 1/2$, converges'],
            hints: ['Exponential dominates polynomial. Ratio: $(n+1)^{10}/(2 \\cdot n^{10}) \\to 1/2$.'],
            explanation: 'Ratio: $L = (1/2) \\cdot \\lim ((n+1)/n)^{10} = 1/2 < 1$. Converges.'
          },
          {
            label: '$\\sum (n!)^2/(2n)!$: best approach:',
            options: ['Ratio: simplify $(n+1)!^2/(2n+2)! \\cdot (2n)!/(n!)^2$', 'Root Test', 'Divergence Test', 'Limit Comparison with $1/n$'],
            correctAnswers: ['Ratio: simplify $(n+1)!^2/(2n+2)! \\cdot (2n)!/(n!)^2$'],
            hints: ['Double factorial terms — Ratio Test handles this cleanly.'],
            explanation: 'Ratio: $(n+1)^2/((2n+2)(2n+1)) = (n+1)/(2(2n+1)) \\to 1/4 < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'rr3-input',
      type: 'input-box' as const,
      content: '**Compute L**',
      exercise: {
        question: 'For $\\sum_{n=1}^{\\infty} \\frac{(n!)^2}{(2n)!}$, compute $L$ from the Ratio Test as a fraction.',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25'],
        hints: ['$\\frac{a_{n+1}}{a_n} = \\frac{((n+1)!)^2}{(2n+2)!} \\cdot \\frac{(2n)!}{(n!)^2}$', 'Simplify: $(n+1)^2/((2n+2)(2n+1)) = (n+1)/(2(2n+1))$.'],
        explanation: '$L = \\lim (n+1)/(2(2n+1)) = \\lim (n+1)/(4n+2) = 1/4$.'
      }
    },
    {
      id: 'rr3-summary',
      type: 'text' as const,
      content: `### Summary

- Factorial → Ratio Test; $n$th power → Root Test
- Both give same $L$ when both work
- $L = 1$: switch to another test entirely
- On AP, Ratio Test is far more common

> **Next:** Part 4 — Ratio Test and Power Series.`
    }
  ]
};
