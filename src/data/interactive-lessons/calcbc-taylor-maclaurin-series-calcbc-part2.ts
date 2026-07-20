export const calcbcTaylorPart2Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tm2-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series — Computing from Scratch

**Part 2 of 7 — Derivative Tables & Non-Zero Centers**

### Method: Derivative Table

To build the Taylor series at $c$:

1. Compute $f(c), f'(c), f''(c), f'''(c), \\ldots$
2. Form coefficients $a_n = f^{(n)}(c)/n!$
3. Write $\\sum a_n(x-c)^n$

### Example: $f(x) = \\sqrt{x}$ at $c = 4$

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(4)$ | $a_n = f^{(n)}(4)/n!$ |
|-----|-------------|-------------|---------------------|
| 0 | $x^{1/2}$ | $2$ | $2$ |
| 1 | $\\frac{1}{2}x^{-1/2}$ | $\\frac{1}{4}$ | $\\frac{1}{4}$ |
| 2 | $-\\frac{1}{4}x^{-3/2}$ | $-\\frac{1}{32}$ | $-\\frac{1}{64}$ |
| 3 | $\\frac{3}{8}x^{-5/2}$ | $\\frac{3}{256}$ | $\\frac{3}{256 \\cdot 6} = \\frac{1}{512}$ |

$$\\sqrt{x} \\approx 2 + \\frac{1}{4}(x-4) - \\frac{1}{64}(x-4)^2 + \\frac{1}{512}(x-4)^3 - \\cdots$$

> **AP Tip:** This is the method for functions NOT in the "big six" list. You compute derivatives until a pattern emerges or until you have enough terms.`
    },
    {
      id: 'tm2-nonzero',
      type: 'text' as const,
      content: `### Taylor Series at Non-Zero Centers

**Example:** $e^x$ centered at $c = 1$

$f^{(n)}(1) = e$ for all $n$.

$$e^x = \\sum_{n=0}^\\infty \\frac{e}{n!}(x-1)^n = e\\left[1 + (x-1) + \\frac{(x-1)^2}{2!} + \\cdots\\right]$$

**Example:** $\\sin x$ centered at $c = \\pi/2$

| $n$ | $f^{(n)}(\\pi/2)$ |
|-----|-----------------|
| 0 | $1$ |
| 1 | $0$ |
| 2 | $-1$ |
| 3 | $0$ |

$$\\sin x = 1 - \\frac{(x - \\pi/2)^2}{2!} + \\frac{(x-\\pi/2)^4}{4!} - \\cdots$$

Notice this looks like $\\cos(x - \\pi/2)$, which makes sense since $\\sin x = \\cos(x - \\pi/2)$!`
    },
    {
      id: 'tm2-mc1',
      type: 'multiple-choice' as const,
      content: '**Computing Taylor Series**',
      exercise: {
        questions: [
          {
            question: 'The first three nonzero terms of the Taylor series for $1/x$ at $c = 1$ are:',
            options: ['$1 - (x-1) + (x-1)^2$', '$1 + (x-1) + (x-1)^2$', '$(x-1) - (x-1)^2/2 + (x-1)^3/3$', '$1 - (x-1) + (x-1)^2/2$'],
            correctAnswer: 0,
            explanation: '$f(x) = x^{-1}$: $f(1)=1$, $f\'(1)=-1$, $f\'\'(1)=2$. So $T_2 = 1 - (x-1) + (2/2!)(x-1)^2 = 1 - (x-1) + (x-1)^2$.'
          },
          {
            question: 'When computing a Taylor series at $c \\neq 0$, which changes from the Maclaurin case?',
            options: ['Derivatives are evaluated at $c$ instead of $0$, and $(x-c)$ replaces $x$', 'Only the center of the formula changes', 'The coefficients are always the same', 'Nothing — they are identical'],
            correctAnswer: 0,
            explanation: 'Two changes: evaluate $f^{(n)}(c)$ at $c$ (not $0$), and use powers of $(x-c)$ (not $x$).'
          },
          {
            question: 'For $f(x) = \\cos x$ at $c = \\pi$: $f(\\pi) = $',
            options: ['$-1$', '$1$', '$0$', '$\\pi$'],
            correctAnswer: 0,
            explanation: '$\\cos(\\pi) = -1$.'
          }
        ]
      }
    },
    {
      id: 'tm2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Derivative Computation**',
      exercise: {
        dropdowns: [
          {
            label: 'For $f(x) = e^{2x}$, the Maclaurin series coefficient $a_3$ is:',
            options: ['$8/6 = 4/3$', '$2/3$', '$8$', '$1/6$'],
            correctAnswers: ['$8/6 = 4/3$'],
            hints: ['$f^{(3)}(x) = 8e^{2x}$, so $f^{(3)}(0) = 8$. Then $a_3 = 8/3! = 8/6$.'],
            explanation: '$f^{(n)}(0) = 2^n$ for $e^{2x}$. So $a_3 = 2^3/3! = 8/6 = 4/3$.'
          },
          {
            label: 'The Taylor series for $\\ln x$ at $c = 1$ has the general term:',
            options: ['$(-1)^{n+1}(x-1)^n/n$ for $n \\ge 1$', '$(-1)^n (x-1)^n / n!$', '$(x-1)^n / n$', '$(-1)^n x^n/n$'],
            correctAnswers: ['$(-1)^{n+1}(x-1)^n/n$ for $n \\ge 1$'],
            hints: ['$f^{(n)}(1) = (-1)^{n+1}(n-1)!$ for $n \\ge 1$, so $a_n = (-1)^{n+1}/n$.'],
            explanation: '$f^{(n)}(x) = (-1)^{n+1}(n-1)!/x^n$ for $n \\ge 1$. At $x=1$: $f^{(n)}(1) = (-1)^{n+1}(n-1)!$. Then $a_n = (-1)^{n+1}(n-1)!/n! = (-1)^{n+1}/n$.'
          }
        ]
      }
    },
    {
      id: 'tm2-input',
      type: 'input-box' as const,
      content: '**Taylor at Non-Zero Center**',
      exercise: {
        question: 'Find the $T_1(x)$ (linear approximation) for $f(x) = e^x$ at $c = 2$. What is the coefficient of $(x-2)$? Round to 2 decimal places.',
        correctAnswer: '7.39',
        acceptableAnswers: ['7.39', '7.38', 'e^2'],
        hints: ['$T_1 = f(2) + f\'(2)(x-2) = e^2 + e^2(x-2)$. The coefficient is $e^2$.'],
        explanation: '$f\'(2) = e^2 \\approx 7.389$. So the coefficient of $(x-2)$ is $e^2 \\approx 7.39$.'
      }
    },
    {
      id: 'tm2-summary',
      type: 'text' as const,
      content: `### Summary

- Build Taylor series via derivative tables
- Non-zero centers: evaluate at $c$, use $(x-c)^n$
- Look for patterns in derivatives (cyclic, factorial, powers)
- On the AP exam, you typically need 3-4 terms, not the general formula

> **Next:** Part 3 — Known Series and Manipulation Techniques.`
    }
  ]
};
