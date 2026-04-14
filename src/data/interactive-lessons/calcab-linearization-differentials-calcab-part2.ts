export const calcabLinearizationPart2Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin2-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 2 of 7 \u2014 Approximating Values**

### Common Linearizations at $a = 0$

| Function | Linear Approximation near $0$ |
|:---:|:---:|
| $\\sin x$ | $\\approx x$ |
| $\\cos x$ | $\\approx 1$ |
| $\\tan x$ | $\\approx x$ |
| $e^x$ | $\\approx 1 + x$ |
| $\\ln(1+x)$ | $\\approx x$ |
| $(1+x)^n$ | $\\approx 1 + nx$ |

> **Key Fact:** These linearizations appear frequently on the AP exam, especially $e^x \\approx 1+x$ and $\\sin x \\approx x$ for small $x$.

### Over/Under Estimates from Concavity

$$\\boxed{\\text{Concave up} \\Rightarrow \\text{Tangent line underestimates}}$$
$$\\boxed{\\text{Concave down} \\Rightarrow \\text{Tangent line overestimates}}$$

| Concavity at $a$ | Tangent line is a... |
|:---:|:---:|
| $f''(a) > 0$ (concave up) | **Underestimate** |
| $f''(a) < 0$ (concave down) | **Overestimate** |

### Worked Example

> Approximate $e^{0.1}$ using linearization. Is it an over- or underestimate?

$f(x) = e^x$, $a = 0$. $L(x) = 1 + x$. $L(0.1) = 1.1$.

$f''(x) = e^x > 0$ everywhere \u2014 concave up \u2014 so tangent line is an **underestimate**.

Actual: $e^{0.1} \\approx 1.10517$. Indeed $1.1 < 1.10517$.`
    },
    {
      id: 'lin2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Approximations** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Using $e^x \\approx 1 + x$ near $0$, approximate $e^{-0.02}$:',
            options: ['$0.98$', '$1.02$', '$0.96$', '$1.00$'],
            correctAnswer: 0,
            explanation: '$e^{-0.02} \\approx 1 + (-0.02) = 0.98$.'
          },
          {
            question: 'The linearization of $\\cos x$ at $a = \\pi/2$ is:',
            options: ['$L(x) = -(x-\\pi/2)$', '$L(x) = 1$', '$L(x) = x$', '$L(x) = x - \\pi/2$'],
            correctAnswer: 0,
            explanation: '$f(\\pi/2)=0$, $f\'(x)=-\\sin x$, $f\'(\\pi/2)=-1$. $L(x) = 0 + (-1)(x-\\pi/2) = -(x-\\pi/2)$.'
          },
          {
            question: 'If $f\'\'(a) > 0$, the tangent line at $a$ gives a(n):',
            options: ['Underestimate', 'Overestimate', 'Exact value', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f\'\' > 0$ means concave up. The tangent line lies below the curve, giving an underestimate.'
          }
        ]
      }
    },
    {
      id: 'lin2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each approximation.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Approximating $\\sqrt{4.1}$ with $L$ at $a=4$. Since $f\'\'(4) < 0$, this is:',
            options: ['An overestimate', 'An underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['An overestimate'],
            hints: ['$f\'\'(x) = -1/(4x^{3/2}) < 0$ means concave down.'],
            explanation: 'Concave down means the tangent line is above the curve \u2014 overestimate.'
          },
          {
            label: '$\\sin(0.1) \\approx 0.1$ is:',
            options: ['An overestimate', 'An underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['An overestimate'],
            hints: ['$\\sin\'\'(0) = -\\sin(0) = 0$. Check $\\sin\'\'$ near $0$: $-\\sin x < 0$ for $x > 0$.'],
            explanation: 'Near $0$, $\\sin x$ is concave down (for $x > 0$), so the tangent line overestimates.'
          },
          {
            label: '$(1+x)^n \\approx 1 + nx$ for small $x$ is called:',
            options: ['The binomial approximation', 'Taylor series', 'L\'H\\u00f4pital\'s rule', 'MVT'],
            correctAnswers: ['The binomial approximation'],
            hints: ['This is the first-order binomial expansion.'],
            explanation: 'This is the linearization of $(1+x)^n$ at $x=0$, known as the binomial (or linear) approximation.'
          }
        ]
      }
    },
    {
      id: 'lin2-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'Use the linearization of $f(x) = x^4$ at $a = 3$ to approximate $f(3.02)$.\n\nIf $L(3.02) = \\frac{a}{b}$ in lowest terms, find $a + b$.\n\n(Enter an integer.)',
        correctAnswer: '2104',
        acceptableAnswers: ['2104'],
        hints: [
          '$f(3) = 81$, $f\'(x) = 4x^3$, $f\'(3) = 108$.',
          '$L(3.02) = 81 + 108(0.02) = 81 + 2.16 = 83.16$.',
          '$83.16 = 8316/100 = 2079/25$. $a + b = 2079 + 25 = 2104$.'
        ],
        explanation: '$L(3.02) = 81 + 108(0.02) = 83.16 = 2079/25$. $a + b = 2079 + 25 = 2104$.'
      }
    },
    {
      id: 'lin2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- Memorize common linearizations: $\\sin x \\approx x$, $e^x \\approx 1+x$, $\\ln(1+x) \\approx x$
- Concave up ($f'' > 0$) $\\Rightarrow$ underestimate
- Concave down ($f'' < 0$) $\\Rightarrow$ overestimate
- AP frequently asks "is this an over- or underestimate?"`
    }
  ]
};
