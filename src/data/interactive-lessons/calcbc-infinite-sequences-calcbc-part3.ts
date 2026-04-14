export const calcbcSequencesPart3Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq3-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Recursive Sequences & Special Limits

**Part 3 of 7 — Recursion and Important Limits**

### Recursive Sequences

A **recursive** sequence defines $a_{n+1}$ in terms of previous terms:

$$a_{n+1} = f(a_n), \\quad a_1 = \\text{given}$$

To find the limit (if it converges), assume $\\lim a_n = L$ and solve:

$$L = f(L)$$

### Example

$a_1 = 1$, $a_{n+1} = \\sqrt{2 + a_n}$.

If $L$ exists: $L = \\sqrt{2 + L} \\implies L^2 = 2 + L \\implies L^2 - L - 2 = 0 \\implies L = 2$ (since $L > 0$).

Must also verify convergence: show the sequence is increasing and bounded above by $2$.`
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
| $\\lim r^n$ ($|r|<1$) | $0$ | Geometric decay |

### Growth Rate Hierarchy

$$\\boxed{\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n}$$

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
            question: '$a_1 = 3$, $a_{n+1} = \\frac{a_n + 5}{2}$. If the limit exists, $L = $',
            options: ['$5$', '$3$', '$4$', '$8$'],
            correctAnswer: 0,
            explanation: '$L = \\frac{L + 5}{2} \\implies 2L = L + 5 \\implies L = 5$.'
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
      content: '**Recursive Sequence**',
      exercise: {
        question: '$a_1 = 0$, $a_{n+1} = \\frac{a_n}{2} + 3$. If the sequence converges to $L$, what is $L$?',
        correctAnswer: '6',
        acceptableAnswers: ['6', '6.0'],
        hints: ['Set $L = L/2 + 3$.', 'Solve: $L - L/2 = 3$.'],
        explanation: '$L = L/2 + 3 \\implies L/2 = 3 \\implies L = 6$.'
      }
    },
    {
      id: 'seq3-summary',
      type: 'text' as const,
      content: `### Summary

- Recursive sequences: find limit by solving $L = f(L)$
- Must separately verify convergence (monotone + bounded)
- Growth hierarchy: $\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n$
- Key limit: $(1 + k/n)^n \\to e^k$

> **Next:** Part 4 — Sequences and series connection.`
    }
  ]
};
