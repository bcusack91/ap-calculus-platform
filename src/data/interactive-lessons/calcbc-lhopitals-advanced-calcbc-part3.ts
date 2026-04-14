export const calcbcLHopPart3Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lh3-intro',
      type: 'text' as const,
      content: `# Advanced Applications

**Part 3 of 7 — Series, Improper Integrals, and Tricky Limits**

### L'Hôpital and Series

L'Hôpital's Rule connects to Taylor series: near $x = a$, if $f(a) = g(a) = 0$:

$$\\frac{f(x)}{g(x)} \\approx \\frac{f'(a)(x-a) + \\frac{f''(a)}{2}(x-a)^2 + \\cdots}{g'(a)(x-a) + \\frac{g''(a)}{2}(x-a)^2 + \\cdots}$$

If $f'(a) \\neq 0$ and $g'(a) \\neq 0$: limit $= f'(a)/g'(a)$ (same as L'Hôpital).

### Using Taylor Series Instead of L'Hôpital

Sometimes Taylor expansion is FASTER:

$$\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$$

L'Hôpital needs TWO applications. Taylor:

$$e^x = 1 + x + \\frac{x^2}{2} + \\cdots \\quad \\Rightarrow \\quad \\frac{x^2/2 + \\cdots}{x^2} \\to \\frac{1}{2}$$

### Comparison Table

| Method | Best when... |
|--------|-------------|
| L'Hôpital | Simple derivatives, 1–2 applications |
| Taylor expansion | Known series, higher-order cancellation |
| Algebraic manipulation | Factoring, conjugates possible |

> **AP Tip:** On the AP exam, either method earns full credit. Choose whichever is faster for the specific problem.`
    },
    {
      id: 'lh3-improper',
      type: 'text' as const,
      content: `### L'Hôpital and Improper Integrals

L'Hôpital helps evaluate limits that arise in improper integrals:

**Example:** $\\int_1^{\\infty} \\frac{\\ln x}{x^2}\\,dx$

After integrating by parts: need $\\lim_{b \\to \\infty} \\frac{-\\ln b}{b}$

$$\\frac{\\infty}{\\infty}: \\lim \\frac{-1/b}{1} = 0 \\quad \\text{✓}$$

### L'Hôpital with Definite Integrals

$$\\lim_{x \\to 0} \\frac{\\int_0^x \\sin(t^2)\\,dt}{x^3}$$

$0/0$ form. By L'Hôpital + FTC:

$$= \\lim_{x \\to 0} \\frac{\\sin(x^2)}{3x^2}$$

Still $0/0$. Apply again (or use $\\sin u \\approx u$):

$$= \\lim_{x \\to 0} \\frac{x^2}{3x^2} = \\frac{1}{3}$$

> **Key Fact:** When the numerator is $\\int_a^x f(t)\\,dt$, L'Hôpital + FTC gives $f(x)$ as the derivative.`
    },
    {
      id: 'lh3-mc1',
      type: 'multiple-choice' as const,
      content: '**Advanced Limits**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$',
            options: ['$-1/6$', '$0$', '$1/6$', '$-1/3$'],
            correctAnswer: 0,
            explanation: 'Taylor: $\\sin x = x - x^3/6 + \\cdots$. $(\\sin x - x)/x^3 = -x^3/6 + \\cdots)/x^3 \\to -1/6$.'
          },
          {
            question: '$\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$',
            options: ['$1/2$', '$0$', '$1$', '$1/3$'],
            correctAnswer: 0,
            explanation: '$\\tan x = x + x^3/3 + \\cdots$, $\\sin x = x - x^3/6 + \\cdots$. Difference: $x^3/3 + x^3/6 = x^3/2$. Limit = $1/2$.'
          },
          {
            question: '$\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$ is:',
            options: ['$f\'(a)$ (the definition of derivative — no L\'Hôpital needed)', 'Requires L\'Hôpital', 'Always $0$', 'Undefined'],
            correctAnswer: 0,
            explanation: 'This IS the derivative definition. L\'Hôpital on $0/0$ gives $f\'(a)/1 = f\'(a)$, which is consistent but circular.'
          }
        ]
      }
    },
    {
      id: 'lh3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series vs. L\'Hôpital**',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$. Using Taylor ($\\cos x = 1 - x^2/2 + \\cdots$):',
            options: ['$1/2$', '$1$', '$0$', '$2$'],
            correctAnswers: ['$1/2$'],
            hints: ['$1 - \\cos x = x^2/2 - x^4/24 + \\cdots$. Divide by $x^2$: $1/2 - x^2/24 + \\cdots \\to 1/2$.'],
            explanation: '$(x^2/2)/x^2 = 1/2$.'
          },
          {
            label: 'Same limit by L\'Hôpital (how many applications?):',
            options: ['Two ($0/0$ → $\\sin x / 2x$ → $\\cos x / 2 = 1/2$)', 'One', 'Three', 'Cannot use L\'Hôpital'],
            correctAnswers: ['Two ($0/0$ → $\\sin x / 2x$ → $\\cos x / 2 = 1/2$)'],
            hints: ['First: $\\sin x/(2x)$, still $0/0$. Second: $\\cos x/2 = 1/2$.'],
            explanation: 'Two applications needed. Taylor was faster here.'
          }
        ]
      }
    },
    {
      id: 'lh3-input',
      type: 'input-box' as const,
      content: '**Evaluate**',
      exercise: {
        question: '$\\lim_{x \\to 0} \\frac{e^x - 1 - x - x^2/2}{x^3}$. Use the Taylor series $e^x = 1 + x + x^2/2 + x^3/6 + \\cdots$. Enter the answer as a fraction.',
        correctAnswer: '1/6',
        acceptableAnswers: ['1/6', '0.167', '0.1667'],
        hints: ['$e^x - 1 - x - x^2/2 = x^3/6 + x^4/24 + \\cdots$. Divide by $x^3$.'],
        explanation: 'Numerator $= x^3/6 + \\cdots$. Limit $= 1/6$.'
      }
    },
    {
      id: 'lh3-summary',
      type: 'text' as const,
      content: `### Summary

- Taylor series can replace L'Hôpital for higher-order cancellations
- L'Hôpital + FTC: differentiate $\\int_0^x f(t)\\,dt$ to get $f(x)$
- Choose the fastest method for each problem
- Both methods earn full AP credit

> **Next:** Part 4 — Common Pitfalls and Misuse.`
    }
  ]
};
