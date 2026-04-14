export const calcbcSeriesAppsPart4Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sa4-intro',
      type: 'text' as const,
      content: `# Differentiation of Power Series

**Part 4 of 7 — Generating New Series from Old**

### Term-by-Term Differentiation

A power series can be differentiated term by term within its interval of convergence:

$$\\boxed{\\text{If } f(x) = \\sum_{n=0}^\\infty a_n x^n, \\text{ then } f'(x) = \\sum_{n=1}^\\infty n a_n x^{n-1}}$$

The radius of convergence stays the same (though endpoint behavior may change).

### Key Example

$$\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n = 1 + x + x^2 + x^3 + \\cdots$$

Differentiate:

$$\\frac{1}{(1-x)^2} = \\sum_{n=1}^\\infty n x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots$$

> **AP Tip:** This technique generates series that would be hard to derive from scratch.`
    },
    {
      id: 'sa4-operations',
      type: 'text' as const,
      content: `### Combining Operations

You can chain substitution, differentiation, and integration:

**Find the series for $\\ln(1+x)$:**

Start with $\\frac{1}{1+x} = 1 - x + x^2 - x^3 + \\cdots$

Integrate: $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots$

**Find the series for $\\frac{x}{(1-x)^2}$:**

$$\\frac{x}{(1-x)^2} = x \\cdot \\sum_{n=1}^\\infty n x^{n-1} = \\sum_{n=1}^\\infty n x^n = x + 2x^2 + 3x^3 + \\cdots$$

### Operations Summary

| Operation | Effect on $\\sum a_n x^n$ |
|-----------|------------------------|
| Differentiate | $\\sum n a_n x^{n-1}$ |
| Integrate | $\\sum \\frac{a_n x^{n+1}}{n+1} + C$ |
| Multiply by $x$ | $\\sum a_n x^{n+1}$ |
| Substitute $cx$ | $\\sum a_n (cx)^n$ |`
    },
    {
      id: 'sa4-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'Differentiating $e^x = \\sum x^n/n!$ gives $\\sum nx^{n-1}/n!$, which simplifies to:',
            options: ['$\\sum x^{n-1}/(n-1)! = e^x$ (as expected)', '$\\sum x^n/n! = e^x$', '$\\sum nx^n/n!$', '$\\sum x^{n-1}/n!$'],
            correctAnswer: 0,
            explanation: '$n/n! = 1/(n-1)!$. Re-index: $\\sum_{n=1}^\\infty x^{n-1}/(n-1)! = \\sum_{k=0}^\\infty x^k/k! = e^x$.'
          },
          {
            question: 'Term-by-term differentiation preserves:',
            options: ['The radius of convergence', 'The interval of convergence (including endpoints)', 'The number of terms', 'The center of the series'],
            correctAnswer: 0,
            explanation: 'Radius stays the same, but endpoint convergence can change.'
          },
          {
            question: 'To find the series for $\\frac{2}{(1-x)^3}$, differentiate $\\frac{1}{(1-x)^2}$. The result is:',
            options: ['$\\sum_{n=2}^\\infty n(n-1)x^{n-2}$', '$\\sum_{n=1}^\\infty n^2 x^n$', '$\\sum_{n=0}^\\infty n x^n$', '$\\sum_{n=2}^\\infty 2n x^{n-1}$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}\\sum n x^{n-1} = \\sum_{n=2}^\\infty n(n-1)x^{n-2}$. So $\\frac{2}{(1-x)^3} = \\sum n(n-1)x^{n-2}$.'
          }
        ]
      }
    },
    {
      id: 'sa4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Building Series**',
      exercise: {
        dropdowns: [
          {
            label: 'Integrating $\\frac{1}{1-x} = \\sum x^n$ from 0 to $x$ gives:',
            options: ['$-\\ln(1-x) = \\sum x^{n+1}/(n+1)$', '$\\ln(1-x) = \\sum x^{n+1}/(n+1)$', '$\\ln(1+x) = \\sum (-1)^n x^{n+1}/(n+1)$', '$e^x = \\sum x^n/n!$'],
            correctAnswers: ['$-\\ln(1-x) = \\sum x^{n+1}/(n+1)$'],
            hints: ['$\\int_0^x 1/(1-t)\\,dt = -\\ln(1-x)$.'],
            explanation: '$\\int \\sum t^n\\,dt = \\sum x^{n+1}/(n+1) = -\\ln(1-x)$.'
          },
          {
            label: 'The series for $\\frac{-1}{(1+x)^2}$ is obtained by differentiating $\\frac{1}{1+x} = \\sum (-1)^n x^n$:',
            options: ['$\\sum_{n=1}^\\infty (-1)^n n x^{n-1} = -1 + 2x - 3x^2 + \\cdots$', '$\\sum_{n=1}^\\infty n x^{n-1}$', '$\\sum_{n=0}^\\infty (-1)^n x^{n-1}$', '$1 - 2x + 3x^2 - \\cdots$'],
            correctAnswers: ['$\\sum_{n=1}^\\infty (-1)^n n x^{n-1} = -1 + 2x - 3x^2 + \\cdots$'],
            hints: ['Differentiate each term: $(-1)^n x^n \\to (-1)^n n x^{n-1}$.'],
            explanation: '$\\frac{d}{dx}[1/(1+x)] = -1/(1+x)^2 = \\sum (-1)^n n x^{n-1}$.'
          }
        ]
      }
    },
    {
      id: 'sa4-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'The coefficient of $x^3$ in the Maclaurin series for $\\frac{1}{(1-x)^2} = \\sum_{n=1}^\\infty n x^{n-1}$ is:',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hints: ['$x^3$ corresponds to $n - 1 = 3$, so $n = 4$.'],
        explanation: 'The $x^3$ term has $n = 4$: coefficient = $4$.'
      }
    },
    {
      id: 'sa4-summary',
      type: 'text' as const,
      content: `### Key Rules

$$\\boxed{f(x) = \\sum a_n x^n \\implies f'(x) = \\sum n a_n x^{n-1}}$$

$$\\boxed{\\int f(x)\\,dx = \\sum \\frac{a_n x^{n+1}}{n+1} + C}$$

Both operations preserve the radius of convergence. Chain these with substitution and multiplication to build nearly any series.

**Next: Part 5 — AP Exam Strategies for Series Applications**`
    }
  ]
};
