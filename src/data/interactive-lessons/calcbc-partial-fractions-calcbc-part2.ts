export const calcbcPartialFracPart2Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf2-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 2 of 7 — Cover-Up, Definite Integrals, and Log Answers**

### Factor Completely First

The cover-up method needs every factor of the denominator to be linear and distinct, so factor all the way:

| Denominator | Factored |
|------|-------|
| $x^2 - 9$ | $(x - 3)(x + 3)$ |
| $x^2 + x - 6$ | $(x + 3)(x - 2)$ |
| $x^3 - 4x$ | $x(x - 2)(x + 2)$ |

### Why Cover-Up Works

Start from $\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$ and multiply both sides by $(x - a)$:

$$\\frac{P(x)}{x-b} = A + \\frac{B(x-a)}{x-b}$$

At $x = a$ the last term is $0$, so $A = \\frac{P(a)}{a - b}$: "cover up" $(x - a)$ and evaluate what is left at $x = a$.

### Worked Example with Three Factors

$$\\frac{2x^2 + 3}{x(x-1)(x+3)} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+3}$$

| Cover | Evaluate at | Result |
|-------------|----------|--------|
| $x$ | $x = 0$ | $A = \\frac{3}{(-1)(3)} = -1$ |
| $x - 1$ | $x = 1$ | $B = \\frac{5}{(1)(4)} = \\frac{5}{4}$ |
| $x + 3$ | $x = -3$ | $C = \\frac{21}{(-3)(-4)} = \\frac{7}{4}$ |

**Quick check:** recombining gives an $x^2$ coefficient of $A + B + C = -1 + \\frac{5}{4} + \\frac{7}{4} = 2$, which matches the numerator $2x^2 + 3$.`
    },
    {
      id: 'pf2-mc1',
      type: 'multiple-choice' as const,
      content: '**Cover-Up Practice**',
      exercise: {
        questions: [
          {
            question: 'Before decomposing $\\frac{4}{x^3 - 4x}$, factor the denominator completely:',
            options: ['$x(x-2)(x+2)$', '$x(x-2)^2$', '$(x-2)(x+2)$', '$x(x^2+4)$'],
            correctAnswer: 0,
            explanation: 'Factor out $x$, then use the difference of squares: $x^3 - 4x = x(x^2 - 4) = x(x-2)(x+2)$. Writing $(x-2)^2$ confuses $x^2 - 4$ with $x^2 - 4x + 4$, dropping the factor $x$ loses a root, and $x^2 + 4$ has the wrong sign.'
          },
          {
            question: 'In $\\frac{2x^2+3}{x(x-1)(x+3)} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+3}$, cover-up gives $C =$',
            options: ['$\\frac{7}{4}$', '$-\\frac{7}{4}$', '$\\frac{21}{4}$', '$-\\frac{1}{4}$'],
            correctAnswer: 0,
            explanation: 'Cover $x + 3$ and set $x = -3$: $C = \\frac{2(9) + 3}{(-3)(-3 - 1)} = \\frac{21}{12} = \\frac{7}{4}$. A sign slip in $(-3)(-4)$ gives $-\\frac{7}{4}$, dividing by $4$ alone forgets the factor $x = -3$, and $-\\frac{1}{4}$ comes from using $2(-3)$ instead of $2(-3)^2$ in the numerator.'
          }
        ]
      }
    },
    {
      id: 'pf2-definite',
      type: 'text' as const,
      content: `### Definite Integrals and Log Answers

**Example:** $\\int_2^3 \\frac{5}{(x-1)(x+4)}\\,dx$

| Step | Work |
|------|------|
| Cover-up | $A = \\frac{5}{1 + 4} = 1$, $B = \\frac{5}{-4 - 1} = -1$ |
| Antiderivative | $\\ln\\lvert x - 1\\rvert - \\ln\\lvert x + 4\\rvert = \\ln\\left\\lvert \\frac{x-1}{x+4} \\right\\rvert$ |
| Evaluate | $\\ln\\frac{2}{7} - \\ln\\frac{1}{6}$ |
| Combine | $\\ln\\frac{2/7}{1/6} = \\ln\\frac{12}{7}$ |

Every form above ($\\ln 2 - \\ln 7 + \\ln 6$, $\\ln\\frac{12}{7}$, ...) is the same number. AP scoring guidelines state that answers need not be simplified, but combining logs makes it easier to match multiple-choice options.

> **Key Fact:** The interval of integration must not contain a root of the denominator. Here $x = 1$ and $x = -4$ lie outside $[2, 3]$, so this is an ordinary definite integral. If a root were inside the interval, the integral would be improper.`
    },
    {
      id: 'pf2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Log Answers and Intervals**',
      exercise: {
        dropdowns: [
          {
            label: '$\\left(\\ln 2 - \\ln 7\\right) - \\left(\\ln 1 - \\ln 6\\right)$ simplifies to:',
            options: ['$\\ln\\frac{12}{7}$', '$\\ln\\frac{2}{42}$', '$\\ln\\frac{7}{12}$', '$\\ln 3$'],
            correctAnswers: ['$\\ln\\frac{12}{7}$'],
            hints: ['$\\ln 1 = 0$, and subtracting $-\\ln 6$ adds $\\ln 6$.'],
            explanation: '$\\ln 2 - \\ln 7 + \\ln 6 = \\ln\\frac{2 \\cdot 6}{7} = \\ln\\frac{12}{7}$. Dividing by $6$ instead of multiplying gives $\\ln\\frac{2}{42}$, and $\\ln\\frac{7}{12}$ has every sign reversed.'
          },
          {
            label: '$\\int \\frac{5}{(x-1)(x+4)}\\,dx$ can be evaluated as an ordinary definite integral on:',
            options: ['$[2, 3]$', '$[0, 2]$', '$[-5, 0]$', '$[-4, 1]$'],
            correctAnswers: ['$[2, 3]$'],
            hints: ['The integrand is undefined at $x = 1$ and $x = -4$.'],
            explanation: 'Only $[2, 3]$ avoids both $x = 1$ and $x = -4$. The interval $[0, 2]$ contains $1$, $[-5, 0]$ contains $-4$, and $[-4, 1]$ has both as endpoints.'
          }
        ]
      }
    },
    {
      id: 'pf2-input',
      type: 'input-box' as const,
      content: '**Evaluate the Integral**',
      exercise: {
        question: 'Evaluate $\\int_0^1 \\frac{3}{(x+1)(x+4)}\\,dx$. Give an exact answer as a single logarithm, such as ln(a/b), or a decimal to three places.',
        correctAnswer: 'ln(8/5)',
        acceptableAnswers: ['ln(8/5)', 'ln(1.6)', '0.470'],
        hints: ['Cover-up: $A = \\frac{3}{-1 + 4} = 1$ and $B = \\frac{3}{-4 + 1} = -1$.', 'Antiderivative: $\\ln\\lvert x + 1\\rvert - \\ln\\lvert x + 4\\rvert$. Evaluate from $0$ to $1$.'],
        explanation: '$\\left(\\ln 2 - \\ln 5\\right) - \\left(\\ln 1 - \\ln 4\\right) = \\ln\\frac{2 \\cdot 4}{5} = \\ln\\frac{8}{5} \\approx 0.470$.'
      }
    },
    {
      id: 'pf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Details |
|---------|---------|
| Factor completely | Pull out common factors, then use difference of squares |
| Cover-up | $A = \\frac{P(a)}{\\text{other factors at } x = a}$ |
| Check | Recombined leading coefficient must match the numerator |
| Definite integrals | Evaluate the logs, then combine with log rules |
| Interval check | No root of the denominator inside $[a, b]$ |

> **Coming Up:** Part 3 shows when a rational integrand needs partial fractions and when $u$-substitution or an arctangent form is the better tool.`
    }
  ]
};
