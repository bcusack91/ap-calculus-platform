export const calcbcSequencesPart2Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq2-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Decreasing Terms & Limits

**Part 2 of 7 — Decreasing Terms and Limits by L'Hospital's Rule**

### Increasing and Decreasing Terms

| Property | Meaning |
|----------|---------|
| **Increasing** | $a_{n+1} \\ge a_n$ for all $n$ |
| **Decreasing** | $a_{n+1} \\le a_n$ for all $n$ |

On the BC exam you check that terms are decreasing when you apply the **alternating series test** (the terms $b_n$ must decrease to $0$) and the **integral test** (the function $f$ must be decreasing).

### How to Show Terms Are Decreasing

**Method 1: Difference.** Show $a_{n+1} - a_n < 0$.

**Method 2: Derivative.** If $a_n = f(n)$ and $f'(x) < 0$ for $x \\ge N$, the terms are decreasing from $n = N$ on.

> **Key Fact:** The derivative method is usually fastest, and it lets you use every calculus tool you already have.`
    },
    {
      id: 'seq2-tests',
      type: 'text' as const,
      content: `### Example: Decreasing Terms

$b_n = \\frac{n}{n^2 + 1}$. Let $f(x) = \\frac{x}{x^2 + 1}$. By the quotient rule,

$$f'(x) = \\frac{(x^2 + 1) - x(2x)}{(x^2 + 1)^2} = \\frac{1 - x^2}{(x^2 + 1)^2} \\le 0 \\text{ for } x \\ge 1$$

so $\\{b_n\\}$ is decreasing for $n \\ge 1$.

### Limits of Sequences with L'Hospital's Rule

If $a_n = f(n)$ and $\\lim_{x \\to \\infty} f(x) = L$, then $\\lim_{n \\to \\infty} a_n = L$. This lets you use L'Hospital's Rule on the function $f(x)$ when the limit has the form $\\frac{\\infty}{\\infty}$ or $\\frac{0}{0}$.

**Example:** $a_n = \\frac{n^2}{e^n}$. The form is $\\frac{\\infty}{\\infty}$, so apply L'Hospital's Rule twice to $\\frac{x^2}{e^x}$:

$$\\lim_{x \\to \\infty}\\frac{x^2}{e^x} = \\lim_{x \\to \\infty}\\frac{2x}{e^x} = \\lim_{x \\to \\infty}\\frac{2}{e^x} = 0$$

So $a_n \\to 0$. Exponentials eventually outgrow every power of $n$.`
    },
    {
      id: 'seq2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'To show that $b_n = \\frac{\\ln n}{n}$ is decreasing for $n \\ge 3$, the most direct argument is:',
            options: ['$\\lim b_n = 0$, so the terms must shrink', '$f\'$ is negative for $x > e$, where $f = \\frac{\\ln x}{x}$', '$b_n > 0$ for every $n \\ge 2$ by inspection', '$b_3 > b_4$, so every later term is smaller'],
            correctAnswer: 1,
            explanation: 'With $f(x) = \\frac{\\ln x}{x}$, the quotient rule gives $f\'(x) = \\frac{1 - \\ln x}{x^2}$, which is negative once $\\ln x > 1$, so for $n \\ge 3$. A limit of $0$ does not force every term to decrease, positivity says nothing about order, and one comparison does not cover all later terms.'
          },
          {
            question: 'Using L\'Hospital\'s Rule on the related function, $\\lim_{n \\to \\infty} \\frac{3n + \\ln n}{2n}$ equals:',
            options: ['$\\frac{3}{2}$', '$0$', '$\\infty$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{\\infty}{\\infty}$, and differentiating gives $\\frac{3 + 1/x}{2} \\to \\frac{3}{2}$. Treating $\\ln n$ as dominant gives $\\infty$, dropping the $3n$ term gives $0$, and $\\frac{2}{3}$ inverts the ratio of the leading coefficients.'
          }
        ]
      }
    },
    {
      id: 'seq2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The alternating series test requires the terms $b_n$ to be',
            options: ['increasing and bounded above', 'decreasing, with any limit', 'positive and bounded above', 'decreasing with limit $0$'],
            correctAnswers: ['decreasing with limit $0$'],
            hints: ['Two conditions: the size of the terms shrinks, and it shrinks all the way to zero.'],
            explanation: 'The alternating series test needs $b_n$ decreasing and $\\lim b_n = 0$. Increasing terms or a nonzero limit fail the test, and boundedness is not one of its conditions.'
          },
          {
            label: '$\\lim_{n \\to \\infty} \\frac{\\ln(n^2)}{\\sqrt{n}}$ equals',
            options: ['$2$', '$0$', '$\\infty$', '$1$'],
            correctAnswers: ['$0$'],
            hints: ['The form is $\\frac{\\infty}{\\infty}$; differentiate the top and bottom of $\\frac{2\\ln x}{\\sqrt{x}}$.'],
            explanation: 'L\'Hospital\'s Rule gives $\\frac{2/x}{1/(2\\sqrt{x})} = \\frac{4}{\\sqrt{x}} \\to 0$: logarithms grow more slowly than any positive power. The value $2$ keeps only the exponent, $\\infty$ assumes the numerator wins, and $1$ treats the two growth rates as equal.'
          }
        ]
      }
    },
    {
      id: 'seq2-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Let $a_n = \\frac{2n}{n+3}$. Compute $a_1$, $a_2$, $a_3$ and determine the limit. What is $\\lim_{n \\to \\infty} a_n$?',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: ['$a_1 = 2/4 = 0.5$, $a_2 = 4/5 = 0.8$, $a_3 = 6/6 = 1$.', 'Divide the numerator and denominator by $n$.'],
        explanation: '$a_n = \\frac{2n}{n+3} = \\frac{2}{1 + 3/n} \\to 2$. The terms increase toward $2$ without reaching it.'
      }
    },
    {
      id: 'seq2-summary',
      type: 'text' as const,
      content: `### Summary

- Decreasing terms are a condition of the alternating series test and the integral test
- Show decreasing with a difference or with $f'(x) < 0$
- $\\lim a_n$ can be found from $\\lim_{x \\to \\infty} f(x)$, using L'Hospital's Rule for $\\frac{\\infty}{\\infty}$ or $\\frac{0}{0}$

> **Next:** Part 3 — Special limits and growth rates.`
    }
  ]
};
