export const calcbcSequencesPart3Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq3-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Special Limits & Growth Rates

**Part 3 of 7 — Important Limits and Growth Rates**

### Why These Limits Matter

Series questions on the BC exam keep asking the same sequence question in disguise: *what happens to the terms as $n \\to \\infty$?*

- The **nth term test** needs $\\lim a_n$.
- The **ratio test** needs $\\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$, which is itself a sequence limit.
- The **alternating series test** needs $\\lim b_n = 0$.

### Example

$a_n = \\frac{3^n}{n!}$. The ratio $\\frac{a_{n+1}}{a_n} = \\frac{3}{n+1} \\to 0$, and once $n \\ge 3$ each term is smaller than the one before it, so the terms shrink to $0$: factorials eventually outgrow exponentials.`
    },
    {
      id: 'seq3-special',
      type: 'text' as const,
      content: `### Important Limits to Know

| Limit | Value | Why |
|-------|-------|-----|
| $\\lim \\frac{n^p}{a^n}$ ($a > 1$) | $0$ | Exponential beats polynomial |
| $\\lim \\frac{a^n}{n!}$ | $0$ | Factorial beats exponential |
| $\\lim \\frac{(\\ln n)^p}{n^q}$ ($q > 0$) | $0$ | Polynomial beats logarithm |
| $\\lim n^{1/n}$ | $1$ | Apply $\\ln$: $\\frac{\\ln n}{n} \\to 0$ |
| $\\lim \\frac{n!}{n^n}$ | $0$ | $n^n$ beats factorial |
| $\\lim (1+1/n)^n$ | $e$ | Definition of $e$ |
| $\\lim r^n$ ($\\lvert r\\rvert<1$) | $0$ | Geometric decay |

### Growth Rate Hierarchy

$$\\boxed{\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n \\qquad (p > 0,\\ a > 1)}$$

Each function on the left grows **infinitely slower** than the one on its right.`
    },
    {
      id: 'seq3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{n \\to \\infty} \\frac{n^{100}}{2^n} = $',
            options: ['$0$', '$\\infty$', '$1$', '$100$'],
            correctAnswer: 0,
            explanation: 'Exponential ($2^n$) beats any polynomial ($n^{100}$). Apply L\'Hôpital\'s $100$ times (or use the growth hierarchy).'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{n!}{5^n} = $',
            options: ['$0$', '$\\infty$', '$\\frac{1}{5}$', '$5$'],
            correctAnswer: 1,
            explanation: 'The ratio of consecutive terms is $\\frac{n+1}{5}$, which exceeds $1$ once $n \\ge 5$, so the terms grow without bound: factorial beats exponential. A limit of $0$ reverses the hierarchy, and $\\frac{1}{5}$ and $5$ confuse the ratio with the limit of the terms.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\left(\\frac{n+1}{n}\\right)^n = $',
            options: ['$e$', '$1$', '$\\infty$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\left(\\frac{n+1}{n}\\right)^n = \\left(1 + \\frac{1}{n}\\right)^n \\to e$.'
          }
        ]
      }
    },
    {
      id: 'seq3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Growth Hierarchy**',
      exercise: {
        dropdowns: [
          {
            label: 'Which grows fastest as $n \\to \\infty$?',
            options: ['$n!$', '$3^n$', '$n^{1000}$', '$n \\ln n$'],
            correctAnswers: ['$n!$'],
            hints: ['Use the growth hierarchy: $\\ln n \\ll n^p \\ll a^n \\ll n!$'],
            explanation: '$n \\ln n \\ll n^{1000} \\ll 3^n \\ll n!$. Factorial is the fastest.'
          },
          {
            label: '$\\lim_{n \\to \\infty} \\frac{(0.99)^n}{1/n}$ equals:',
            options: ['$0$', '$\\infty$', '$0.99$', '$1$'],
            correctAnswers: ['$0$'],
            hints: ['$(0.99)^n \\to 0$ exponentially fast. $1/n \\to 0$ only polynomially.'],
            explanation: '$\\frac{(0.99)^n}{1/n} = n(0.99)^n \\to 0$ because exponential decay beats polynomial growth.'
          }
        ]
      }
    },
    {
      id: 'seq3-input',
      type: 'input-box' as const,
      content: '**Special Limit**',
      exercise: {
        question: 'Find $\\lim_{n \\to \\infty} \\frac{n^2 + 3^n}{2 \\cdot 3^n + n^5}$. Give the exact value.',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', '0.5', '.5'],
        hints: ['In both the numerator and the denominator the exponential term dominates the powers of $n$.', 'Divide every term by $3^n$.'],
        explanation: 'Dividing by $3^n$ gives $\\frac{n^2/3^n + 1}{2 + n^5/3^n}$, and $\\frac{n^p}{3^n} \\to 0$ for every power $p$, so the limit is $\\frac{1}{2}$.'
      }
    },
    {
      id: 'seq3-summary',
      type: 'text' as const,
      content: `### Summary

- Sequence limits drive the nth term, ratio, and alternating series tests
- Growth hierarchy ($p > 0$, $a > 1$): $\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n$
- Key limit: $(1 + k/n)^n \\to e^k$

> **Next:** Part 4 — Sequences and series connection.`
    }
  ]
};
