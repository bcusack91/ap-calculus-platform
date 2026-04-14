export const calcbcSequencesPart6Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq6-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Mixed problems covering sequence convergence, series basics, and special types.

### Workshop Overview

| Problem Type | Key Technique |
|-------------|--------------|
| Sequence limit | Growth hierarchy, L'Hôpital's |
| Recursive sequence | Solve $L = f(L)$ |
| Telescoping sum | Partial fractions, cancellation |
| Series classification | Geometric, $p$-series, $n$th term test |`
    },
    {
      id: 'seq6-prob1',
      type: 'text' as const,
      content: `### Problem Set

**Problem 1.** Does $\\sum_{n=1}^\\infty \\frac{n^2}{n^2 + 1}$ converge?

$a_n = \\frac{n^2}{n^2+1} \\to 1 \\ne 0$. **Diverges** by the $n$th term test.

**Problem 2.** Find $\\sum_{n=0}^\\infty \\frac{3}{5^n}$.

Geometric: $a = 3$, $r = 1/5$. Sum $= \\frac{3}{1-1/5} = \\frac{3}{4/5} = \\frac{15}{4}$.

**Problem 3.** Classify $\\sum_{n=1}^\\infty \\frac{1}{n^\\pi}$.

$p$-series with $p = \\pi \\approx 3.14 > 1$. **Converges**.`
    },
    {
      id: 'seq6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Questions**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n}$ has $a_n \\to 0$. By the $n$th term test alone, we can conclude:',
            options: ['Nothing — the test is inconclusive when $a_n \\to 0$', 'The series converges', 'The series diverges', 'The series converges absolutely'],
            correctAnswer: 0,
            explanation: 'The $n$th term test only detects divergence (when $a_n \\not\\to 0$). When $a_n \\to 0$, the test says nothing. (This series actually converges by the Alternating Series Test.)'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{3^n}{n!} = $',
            options: ['$0$', '$\\infty$', '$e^3$', '$3$'],
            correctAnswer: 0,
            explanation: 'Factorial beats exponential: $a^n/n! \\to 0$ for any fixed $a$. Here $a = 3$.'
          }
        ]
      }
    },
    {
      id: 'seq6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Classification**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{1}{3n-1}$ behaves like what known series?',
            options: ['The harmonic series (diverges)', 'A geometric series (converges)', 'A $p$-series with $p = 3$', 'A telescoping series'],
            correctAnswers: ['The harmonic series (diverges)'],
            hints: ['$\\frac{1}{3n-1} \\sim \\frac{1}{3n}$ for large $n$.'],
            explanation: '$\\frac{1}{3n-1}$ is comparable to $\\frac{1}{3n} = \\frac{1}{3}\\cdot\\frac{1}{n}$. Since $\\sum 1/n$ diverges, so does $\\sum 1/(3n-1)$ by the Limit Comparison Test.'
          },
          {
            label: '$a_1 = 10$, $a_{n+1} = a_n/2$. The sequence converges to:',
            options: ['$0$', '$10$', '$5$', 'Diverges'],
            correctAnswers: ['$0$'],
            hints: ['$a_n = 10/2^{n-1}$.'],
            explanation: '$a_n = 10 \\cdot (1/2)^{n-1} \\to 0$. Geometric decay with $|r| = 1/2 < 1$.'
          }
        ]
      }
    },
    {
      id: 'seq6-input',
      type: 'input-box' as const,
      content: '**Workshop Computation**',
      exercise: {
        question: 'Find $\\sum_{n=0}^\\infty \\left(\\frac{2}{3}\\right)^n - \\sum_{n=0}^\\infty \\left(\\frac{1}{4}\\right)^n$. Each is a geometric series. Compute the difference.',
        correctAnswer: '5/3',
        acceptableAnswers: ['5/3', '1.67', '1.667'],
        hints: ['$\\sum (2/3)^n = 1/(1-2/3) = 3$.', '$\\sum (1/4)^n = 1/(1-1/4) = 4/3$.'],
        explanation: '$3 - 4/3 = 9/3 - 4/3 = 5/3$.'
      }
    },
    {
      id: 'seq6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- $n$th term test: quick divergence check ($a_n \\not\\to 0$)
- Geometric and $p$-series are the fundamental comparison targets
- Growth hierarchy for sequence limits: $\\ln n \\ll n^p \\ll a^n \\ll n!$
- Always check convergence before finding a sum

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
