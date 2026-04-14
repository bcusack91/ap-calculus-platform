export const calcbcSeriesAppsPart2Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sa2-intro',
      type: 'text' as const,
      content: `# Series for Computing Integrals

**Part 2 of 7 — Integrating the "Unintegrable"**

### The Power of Term-by-Term Integration

Some functions have no elementary antiderivative, but their Taylor series can be integrated term by term:

$$\\boxed{\\int \\sum_{n=0}^\\infty a_n x^n\\,dx = \\sum_{n=0}^\\infty \\frac{a_n x^{n+1}}{n+1} + C}$$

This is valid within the interval of convergence.

> **Key Fact:** Term-by-term integration is the ONLY way to handle $\\int e^{-x^2}dx$, $\\int \\frac{\\sin x}{x}dx$, etc. on the AP exam.`
    },
    {
      id: 'sa2-example1',
      type: 'text' as const,
      content: `### Classic Example: $\\int_0^1 e^{-x^2}\\,dx$

We cannot find an antiderivative, but we can use the series:

$$e^{-x^2} = 1 - x^2 + \\frac{x^4}{2!} - \\frac{x^6}{3!} + \\frac{x^8}{4!} - \\cdots$$

Integrate term by term:

$$\\int_0^1 e^{-x^2}\\,dx = \\left[x - \\frac{x^3}{3} + \\frac{x^5}{10} - \\frac{x^7}{42} + \\frac{x^9}{216} - \\cdots\\right]_0^1$$

$$= 1 - \\frac{1}{3} + \\frac{1}{10} - \\frac{1}{42} + \\frac{1}{216} - \\cdots \\approx 0.7468$$

### How Many Terms?

By the Alternating Series Estimation Theorem, the error is bounded by the first omitted term:
- Using 4 terms: error $< 1/216 \\approx 0.0046$
- Using 5 terms: error $< 1/1320 \\approx 0.00076$`
    },
    {
      id: 'sa2-example2',
      type: 'text' as const,
      content: `### Another Classic: $\\int \\frac{\\sin x}{x}\\,dx$

$$\\frac{\\sin x}{x} = \\frac{1}{x}\\left(x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots\\right) = 1 - \\frac{x^2}{6} + \\frac{x^4}{120} - \\cdots$$

$$\\int_0^1 \\frac{\\sin x}{x}\\,dx = \\left[x - \\frac{x^3}{18} + \\frac{x^5}{600} - \\cdots\\right]_0^1 = 1 - \\frac{1}{18} + \\frac{1}{600} - \\cdots$$

> **AP Tip:** When asked to "write the first four nonzero terms and use them to approximate the integral," this is exactly the technique to use.

### General Pattern

| To integrate | Use the series for | Then integrate |
|-------------|-------------------|----------------|
| $e^{-x^2}$ | $e^u$ with $u = -x^2$ | Term by term |
| $\\sin(x^2)$ | $\\sin u$ with $u = x^2$ | Term by term |
| $\\frac{\\ln(1+x)}{x}$ | $\\ln(1+x)$, divide by $x$ | Term by term |`
    },
    {
      id: 'sa2-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{0.5} \\cos(x^2)\\,dx$ using the first two nonzero terms of the series: $\\cos(x^2) \\approx 1 - x^4/2$. The approximation is:',
            options: ['$0.5 - 0.5^5/10 = 0.5 - 0.003125 = 0.496875$', '$0.5$', '$0.5 - 0.5^2/2 = 0.375$', '$0.5 - 0.5^4/8 = 0.4921875$'],
            correctAnswer: 0,
            explanation: '$\\int_0^{0.5}(1 - x^4/2)dx = [x - x^5/10]_0^{0.5} = 0.5 - 0.003125 = 0.496875$.'
          },
          {
            question: 'Term-by-term integration of a power series:',
            options: ['Is valid within the interval of convergence', 'Is always valid for all $x$', 'Requires the original series to be finite', 'Changes the radius of convergence'],
            correctAnswer: 0,
            explanation: 'The integrated series has the same radius of convergence (endpoints may differ).'
          },
          {
            question: 'To approximate $\\int_0^1 e^{-x^2}dx$ within $0.001$ of the true value, use the alternating series bound. You need the first omitted term to be:',
            options: ['Less than $0.001$', 'Less than $0.01$', 'Exactly $0.001$', 'Greater than $0.001$'],
            correctAnswer: 0,
            explanation: 'By AST, $|R_n| < |a_{n+1}|$. Need $|a_{n+1}| < 0.001$.'
          }
        ]
      }
    },
    {
      id: 'sa2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series Integration Practice**',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{1}{1+x^3} = 1 - x^3 + x^6 - x^9 + \\cdots$. So $\\int_0^1 \\frac{dx}{1+x^3}$ equals:',
            options: ['$1 - 1/4 + 1/7 - 1/10 + \\cdots$ (integrate term by term)', '$\\ln(1 + 1) = \\ln 2$', '$\\pi/4$', '$1 - 1/3 + 1/6 - 1/9 + \\cdots$'],
            correctAnswers: ['$1 - 1/4 + 1/7 - 1/10 + \\cdots$ (integrate term by term)'],
            hints: ['$\\int x^{3n}dx = x^{3n+1}/(3n+1)$. Evaluate at 0 and 1.'],
            explanation: '$\\int_0^1 \\sum (-1)^n x^{3n}dx = \\sum (-1)^n/(3n+1) = 1 - 1/4 + 1/7 - \\cdots$.'
          },
          {
            label: 'The series for $\\int \\arctan x\\,dx$ can be found by integrating the $\\arctan$ series. The first two nonzero terms are:',
            options: ['$x^2/2 - x^4/12 + \\cdots$ (integrate $x - x^3/3 + \\cdots$)', '$x - x^3/3 + \\cdots$', '$x^2/2 - x^4/4 + \\cdots$', '$\\arctan x - x + \\cdots$'],
            correctAnswers: ['$x^2/2 - x^4/12 + \\cdots$ (integrate $x - x^3/3 + \\cdots$)'],
            hints: ['$\\arctan x = x - x^3/3 + x^5/5 - \\cdots$. Integrate term by term.'],
            explanation: '$\\int (x - x^3/3 + \\cdots)dx = x^2/2 - x^4/12 + \\cdots + C$.'
          }
        ]
      }
    },
    {
      id: 'sa2-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Using $\\ln(1+x) = x - x^2/2 + x^3/3 - \\cdots$, compute $\\int_0^1 \\ln(1+x)\\,dx$ using the first two terms of the integrated series. (Round to 2 decimals.)',
        correctAnswer: '0.33',
        acceptableAnswers: ['0.33', '1/3', '0.333'],
        hints: ['$\\int_0^1(x - x^2/2)dx = [x^2/2 - x^3/6]_0^1 = 1/2 - 1/6 = 1/3$.'],
        explanation: '$1/2 - 1/6 = 2/6 = 1/3 \\approx 0.333$. (Exact: $2\\ln 2 - 1 \\approx 0.386$.)'
      }
    },
    {
      id: 'sa2-summary',
      type: 'text' as const,
      content: `### Key Technique

$$\\boxed{\\int f(x)\\,dx = \\int \\sum a_n x^n\\,dx = \\sum \\frac{a_n x^{n+1}}{n+1} + C}$$

**When to use:** The integrand has no elementary antiderivative OR the problem specifically asks for a series approach.

**Error bound:** For alternating series, error $<$ first omitted term.

**Next: Part 3 — Series for Evaluating Limits**`
    }
  ]
};
