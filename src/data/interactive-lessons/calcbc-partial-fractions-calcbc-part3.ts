export const calcbcPartialFracPart3Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf3-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 3 of 7 — Choosing the Right Tool for Rational Integrands**

Not every rational function needs partial fractions. Before decomposing, check for a faster route.

| What you see | Tool |
|-------------|------|
| Numerator is a constant multiple of the denominator’s derivative | $u$-substitution: $\\ln\\lvert\\text{denominator}\\rvert$ |
| Constant over $x^2 + a^2$ | Arctangent: $\\frac{1}{a}\\arctan\\frac{x}{a}$ |
| Constant over a perfect square $(x - a)^2$ | Power rule: $-\\frac{1}{x - a}$ |
| Denominator factors into distinct linear factors | Partial fractions |
| Degree of numerator $\\ge$ degree of denominator | Long division first |

> **Key Fact:** On the AP exam, partial fractions is used only when the denominator factors into distinct linear factors (FUN-6.F.1). A quadratic like $x^2 + 9$ that does not factor leads to an arctangent or a $u$-substitution, not to partial fractions.`
    },
    {
      id: 'pf3-compare',
      type: 'text' as const,
      content: `### Three Integrals, Three Tools

| Integral | Why | Result |
|----------|-----|--------|
| $\\int \\frac{2x}{x^2 - 9}\\,dx$ | $2x$ is the derivative of $x^2 - 9$ | $\\ln\\lvert x^2 - 9\\rvert + C$ |
| $\\int \\frac{6}{x^2 - 9}\\,dx$ | Constant numerator; $x^2 - 9 = (x-3)(x+3)$ | $\\ln\\lvert x - 3\\rvert - \\ln\\lvert x + 3\\rvert + C$ |
| $\\int \\frac{6}{x^2 + 9}\\,dx$ | $x^2 + 9$ does not factor | $2\\arctan\\frac{x}{3} + C$ |

For the middle integral, cover-up gives $A = \\frac{6}{3 + 3} = 1$ and $B = \\frac{6}{-3 - 3} = -1$.

> **AP Tip:** Spend five seconds checking for $\\frac{f'(x)}{f(x)}$ before you start a decomposition. On a no-calculator question it can save several steps.`
    },
    {
      id: 'pf3-mc1',
      type: 'multiple-choice' as const,
      content: '**Pick the Tool**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{6}{x^2+9}\\,dx =$',
            options: ['$2\\arctan\\frac{x}{3} + C$', '$6\\arctan\\frac{x}{3} + C$', '$\\ln|x-3| - \\ln|x+3| + C$', '$3\\ln(x^2+9) + C$'],
            correctAnswer: 0,
            explanation: '$\\int \\frac{6}{x^2 + 3^2}\\,dx = 6 \\cdot \\frac{1}{3}\\arctan\\frac{x}{3} + C = 2\\arctan\\frac{x}{3} + C$. Leaving out the $\\frac{1}{3}$ gives $6\\arctan\\frac{x}{3}$, the logarithm difference belongs to $x^2 - 9$ (which factors), and $3\\ln(x^2+9)$ would need an $x$ in the numerator.'
          },
          {
            question: 'Which integral is best done with partial fractions?',
            options: ['$\\int \\frac{5}{x^2 - x - 6}\\,dx$', '$\\int \\frac{2x - 1}{x^2 - x - 6}\\,dx$', '$\\int \\frac{5}{x^2 + 4x + 13}\\,dx$', '$\\int \\frac{5}{x^2 - 6x + 9}\\,dx$'],
            correctAnswer: 0,
            explanation: '$x^2 - x - 6 = (x - 3)(x + 2)$ and the constant numerator is not its derivative, so decompose. The numerator $2x - 1$ is exactly the derivative of $x^2 - x - 6$ (use $u$-substitution), $x^2 + 4x + 13 = (x + 2)^2 + 9$ gives an arctangent, and $x^2 - 6x + 9 = (x - 3)^2$ integrates by the power rule.'
          }
        ]
      }
    },
    {
      id: 'pf3-improper',
      type: 'text' as const,
      content: `### Partial Fractions Inside an Improper Integral

$$\\int_2^{\\infty} \\frac{2}{x^2 - 1}\\,dx$$

| Step | Work |
|------|------|
| Decompose | $\\frac{2}{(x-1)(x+1)} = \\frac{1}{x-1} - \\frac{1}{x+1}$ |
| Antiderivative | $\\ln\\left\\lvert \\frac{x-1}{x+1} \\right\\rvert$ |
| Set up the limit | $\\lim_{b \\to \\infty} \\left[\\ln\\frac{b-1}{b+1} - \\ln\\frac{1}{3}\\right]$ |
| Evaluate | $\\ln 1 - \\ln\\frac{1}{3} = \\ln 3$ |

The integral converges to $\\ln 3$. Combining the two logarithms first is what makes the limit easy: $\\frac{b-1}{b+1} \\to 1$, so its logarithm goes to $0$.`
    },
    {
      id: 'pf3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Integration Technique**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{x}{x^2+9}\\,dx$ is solved by:',
            options: ['u-substitution ($u = x^2+9$)', 'Arctan formula ($a = 3$)', 'Factoring as $(x+3)(x-3)$', 'Long division first'],
            correctAnswers: ['u-substitution ($u = x^2+9$)'],
            hints: ['The numerator $x$ is (up to a constant) the derivative of the denominator.'],
            explanation: '$u = x^2+9$, $du = 2x\\,dx$. Result: $\\frac{1}{2}\\ln(x^2+9) + C$. The arctan formula needs a constant numerator, $x^2+9$ does not factor over the reals, and long division is not needed because the numerator already has lower degree.'
          },
          {
            label: '$\\int \\frac{1}{x^2+9}\\,dx$ is solved by:',
            options: ['u-substitution ($u = x^2+9$)', 'Arctan formula ($a = 3$)', 'Partial fractions over $(x+3)(x-3)$', 'Natural log ($\\ln|x^2+9|$)'],
            correctAnswers: ['Arctan formula ($a = 3$)'],
            hints: ['This matches $\\int \\frac{1}{x^2+a^2}\\,dx$ with $a = 3$.'],
            explanation: '$\\int \\frac{dx}{x^2+a^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C$ with $a = 3$: $\\frac{1}{3}\\arctan\\frac{x}{3} + C$. There is no $x$ in the numerator, so $u = x^2+9$ (and the log answer it would give) does not work, and $x^2+9$ does not factor over the reals.'
          }
        ]
      }
    },
    {
      id: 'pf3-input',
      type: 'input-box' as const,
      content: '**Improper Integral**',
      exercise: {
        question: 'Evaluate $\\int_3^{\\infty} \\frac{4}{x^2 - 4}\\,dx$. Give an exact answer, such as ln(a), or a decimal to three places.',
        correctAnswer: 'ln(5)',
        acceptableAnswers: ['ln(5)', 'ln5', 'ln 5', '1.609'],
        hints: ['Cover-up: $\\frac{4}{(x-2)(x+2)} = \\frac{1}{x-2} - \\frac{1}{x+2}$.', 'Antiderivative: $\\ln\\left\\lvert\\frac{x-2}{x+2}\\right\\rvert$. As $b \\to \\infty$, $\\ln\\frac{b-2}{b+2} \\to 0$.'],
        explanation: '$\\lim_{b \\to \\infty}\\left[\\ln\\frac{b-2}{b+2} - \\ln\\frac{1}{5}\\right] = 0 + \\ln 5 = \\ln 5 \\approx 1.609$.'
      }
    },
    {
      id: 'pf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Integrand | First move |
|---------|---------|
| $\\frac{f'(x)}{f(x)}$ | $u$-substitution |
| $\\frac{c}{x^2 + a^2}$ | Arctangent |
| $\\frac{c}{(x - a)^2}$ | Power rule |
| Distinct linear factors | Partial fractions |
| Improper rational function | Long division first |

> **Coming Up:** Part 4 puts it all together — full **integration with partial fractions** from start to finish.`
    }
  ]
};
