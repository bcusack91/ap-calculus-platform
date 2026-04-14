export const calcabLinearizationPart1Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin1-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 1 of 7 \u2014 The Tangent Line Approximation**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Tangent line approximation** |
| 2 | Approximating values |
| 3 | Differentials |
| 4 | Error analysis |
| 5 | Applications & related rates |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

### Local Linearization Formula

$$\\boxed{L(x) = f(a) + f'(a)(x - a)}$$

| Component | Meaning |
|:---:|:---:|
| $a$ | Base point (choose a "nice" value) |
| $f(a)$ | Known function value at $a$ |
| $f'(a)$ | Slope of tangent line at $a$ |
| $x - a$ | Small displacement from $a$ |

### Worked Example

> Approximate $\\sqrt{4.1}$ using linearization.

$f(x) = \\sqrt{x}$, $a = 4$ (nearest perfect square).

$f(4) = 2$, $f'(x) = \\frac{1}{2\\sqrt{x}}$, $f'(4) = \\frac{1}{4}$

$$L(x) = 2 + \\frac{1}{4}(x-4)$$
$$L(4.1) = 2 + \\frac{1}{4}(0.1) = \\boxed{2.025}$$

Actual: $\\sqrt{4.1} \\approx 2.02485$. Error $\\approx 0.00015$!

> **Key Fact:** Choose $a$ to be a nearby value where $f(a)$ and $f'(a)$ are easy to compute. The closer $x$ is to $a$, the better the approximation.`
    },
    {
      id: 'lin1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Linearization** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Use linearization of $f(x) = x^3$ at $a = 2$ to approximate $f(2.01)$.',
            options: ['$8.12$', '$8.01$', '$8.06$', '$8.24$'],
            correctAnswer: 0,
            explanation: '$f(2) = 8$, $f\'(x) = 3x^2$, $f\'(2) = 12$. $L(2.01) = 8 + 12(0.01) = 8.12$.'
          },
          {
            question: 'The linearization of $f(x) = \\sin x$ at $a = 0$ is:',
            options: ['$L(x) = x$', '$L(x) = 1$', '$L(x) = x + 1$', '$L(x) = 0$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0$, $f\'(0) = \\cos 0 = 1$. $L(x) = 0 + 1(x-0) = x$.'
          },
          {
            question: 'When choosing $a$ for linearization, the best choice is:',
            options: ['A nearby value where $f(a)$ is easy to compute', 'The value of $x$ itself', 'Always $a = 0$', 'The largest integer less than $x$'],
            correctAnswer: 0,
            explanation: 'Pick $a$ close to $x$ where both $f(a)$ and $f\'(a)$ are known exactly. For $\\sqrt{4.1}$, use $a = 4$.'
          }
        ]
      }
    },
    {
      id: 'lin1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Build the linearization.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'For $f(x) = \\ln x$ at $a = 1$, $f(a) =$',
            options: ['$0$', '$1$', '$e$', '$-1$'],
            correctAnswers: ['$0$'],
            hints: ['$\\ln 1 = ?$'],
            explanation: '$\\ln 1 = 0$.'
          },
          {
            label: 'For $f(x) = \\ln x$ at $a = 1$, $f\'(a) =$',
            options: ['$1$', '$0$', '$1/e$', '$e$'],
            correctAnswers: ['$1$'],
            hints: ['$f\'(x) = 1/x$. $f\'(1) = ?$'],
            explanation: '$f\'(x) = 1/x$, so $f\'(1) = 1$.'
          },
          {
            label: 'So $L(x) = 0 + 1(x-1)$. For $\\ln(1.05)$, $L(1.05) \\approx$',
            options: ['$0.05$', '$1.05$', '$0.5$', '$0.95$'],
            correctAnswers: ['$0.05$'],
            hints: ['$L(1.05) = 1.05 - 1$.'],
            explanation: '$L(1.05) = 1.05 - 1 = 0.05$. (Actual: $\\ln 1.05 \\approx 0.04879$.)'
          }
        ]
      }
    },
    {
      id: 'lin1-input',
      type: 'input-box' as const,
      content: '**Approximate.** \u270d\ufe0f',
      exercise: {
        question: 'Use linearization of $f(x) = \\sqrt{x}$ at $a = 9$ to approximate $\\sqrt{9.3}$.\n\nIf $L(9.3) = \\frac{a}{b}$ in lowest terms, find $a + b$.\n\n(Enter an integer.)',
        correctAnswer: '81',
        acceptableAnswers: ['81'],
        hints: [
          '$f(9) = 3$, $f\'(9) = 1/6$.',
          '$L(9.3) = 3 + \\frac{1}{6}(0.3) = 3 + 0.05 = 3.05$.',
          '$3.05 = 61/20$. $a + b = 61 + 20 = 81$.'
        ],
        explanation: '$L(9.3) = 3 + \\frac{1}{6} \\cdot 0.3 = 3 + \\frac{1}{20} = \\frac{61}{20}$. $a + b = 81$.'
      }
    },
    {
      id: 'lin1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- Linearization: $L(x) = f(a) + f'(a)(x-a)$
- Choose $a$ near $x$ where $f(a)$ and $f'(a)$ are easy
- The approximation improves as $x \\to a$
- This is the tangent line at $x = a$ used as an approximation`
    }
  ]
};
