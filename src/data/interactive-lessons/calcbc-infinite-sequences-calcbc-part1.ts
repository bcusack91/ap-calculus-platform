export const calcbcSequencesPart1Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq1-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 1 of 7 — Definition & Convergence**

A **sequence** is an ordered list of numbers: $a_1, a_2, a_3, \\ldots$

Formally, a sequence is a function $a: \\mathbb{N} \\to \\mathbb{R}$ written as $\\{a_n\\}$.

### Convergence

$$\\boxed{\\lim_{n \\to \\infty} a_n = L \\implies \\text{the sequence converges to } L}$$

If no finite limit exists, the sequence **diverges**.

### Examples

| Sequence $a_n$ | $\\lim_{n\\to\\infty} a_n$ | Converges? |
|---------------|------------------------|-----------|
| $1/n$ | $0$ | Yes |
| $(-1)^n$ | DNE | No (oscillates) |
| $n^2$ | $\\infty$ | No (unbounded) |
| $(1 + 1/n)^n$ | $e$ | Yes |
| $3 + 1/n^2$ | $3$ | Yes |

> **Key Fact:** A sequence converges if and only if its terms approach a single finite number.`
    },
    {
      id: 'seq1-techniques',
      type: 'text' as const,
      content: `### Computing Limits of Sequences

**Technique 1: Divide by the highest power of $n$** (rational expressions)

$a_n = \\frac{3n^2 + 1}{n^2 - 5} = \\frac{3 + 1/n^2}{1 - 5/n^2} \\to \\frac{3}{1} = 3$

**Technique 2: Squeeze Theorem**

$-\\frac{1}{n} \\le \\frac{\\sin n}{n} \\le \\frac{1}{n}$ and both bounds $\\to 0$, so $\\frac{\\sin n}{n} \\to 0$.

**Technique 3: L'Hôpital's via continuous extension**

If $f(x)$ is continuous and $\\lim_{x \\to \\infty} f(x) = L$, then $\\lim_{n \\to \\infty} f(n) = L$.

$a_n = \\frac{\\ln n}{n}: \\lim_{x \\to \\infty}\\frac{\\ln x}{x} \\overset{\\text{L'H}}{=} \\lim \\frac{1/x}{1} = 0$

**Technique 4: Write factorials out as products**

$a_n = \\frac{n!}{n^n} = \\frac{1}{n} \\cdot \\frac{2}{n} \\cdots \\frac{n}{n}$. Every factor is at most $1$ and the first is $\\frac{1}{n}$, so $0 < \\frac{n!}{n^n} \\le \\frac{1}{n} \\to 0$, and the Squeeze Theorem gives $\\frac{n!}{n^n} \\to 0$: $n^n$ grows faster than $n!$.`
    },
    {
      id: 'seq1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{n \\to \\infty} \\frac{5n^3 - 2n}{3n^3 + n^2} = $',
            options: ['$5/3$', '$0$', '$\\infty$', '$-2/1$'],
            correctAnswer: 0,
            explanation: 'Divide numerator and denominator by $n^3$: $\\frac{5 - 2/n^2}{3 + 1/n} \\to 5/3$.'
          },
          {
            question: 'The sequence $a_n = (-1)^n \\cdot \\frac{1}{n}$:',
            options: ['Converges to $0$', 'Diverges by oscillation', 'Converges to $1$', 'Diverges to $\\infty$'],
            correctAnswer: 0,
            explanation: '$|a_n| = 1/n \\to 0$. Since the terms approach $0$ in magnitude, the sequence converges to $0$ despite alternating sign.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\left(1 + \\frac{3}{n}\\right)^n = $',
            options: ['$e^3$', '$3$', '$e$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'Using the identity $\\lim(1 + k/n)^n = e^k$: result is $e^3$.'
          }
        ]
      }
    },
    {
      id: 'seq1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'If $\\lim_{n \\to \\infty} a_n = 5$, then for large $n$, $a_n$ is:',
            options: ['Arbitrarily close to $5$', 'Eventually exactly equal to $5$', 'Always slightly greater than $5$', 'Always slightly less than $5$'],
            correctAnswers: ['Arbitrarily close to $5$'],
            hints: ['Convergence means the terms GET close, not that they equal the limit.'],
            explanation: 'For large $n$ the distance $|a_n - 5|$ becomes as small as you like and stays small. The terms approach $5$ but may never equal it, and they may approach from above, from below, or from both sides.'
          },
          {
            label: '$\\lim_{n \\to \\infty} \\frac{2^n}{n!}$ equals:',
            options: ['$0$', '$\\infty$', '$1$', '$e^2$'],
            correctAnswers: ['$0$'],
            hints: ['Factorial beats exponential.'],
            explanation: 'For $n > 2$: $\\frac{2^n}{n!} = \\frac{2}{1}\\cdot\\frac{2}{2}\\cdot\\frac{2}{3}\\cdots\\frac{2}{n}$. After the first two terms, each factor is $< 1$ and decreasing. The product $\\to 0$.'
          }
        ]
      }
    },
    {
      id: 'seq1-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: '$\\lim_{n \\to \\infty} \\frac{4n^2 + n}{2n^2 - 3} = ?$',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: ['Divide top and bottom by $n^2$.'],
        explanation: '$\\frac{4 + 1/n}{2 - 3/n^2} \\to \\frac{4}{2} = 2$.'
      }
    },
    {
      id: 'seq1-summary',
      type: 'text' as const,
      content: `### Summary

- Sequence: ordered list $\\{a_n\\}$
- Converges if $\\lim_{n \\to \\infty} a_n = L$ (finite)
- Techniques: divide by the highest power, squeeze theorem, L'Hôpital's, factorials written as products, growth rate ordering
- Growth rate hierarchy ($p > 0$, $a > 1$): $\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n$

> **Next:** Part 2 — Decreasing terms and limits by L\'Hospital\'s Rule.`
    }
  ]
};
