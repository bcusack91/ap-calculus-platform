export const calcabLinearizationPart5Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin5-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 5 of 7 \u2014 Applications**

### Propagation of Error

If a measurement $x$ has uncertainty $dx$, then the uncertainty in $f(x)$ is approximately:

$$\\boxed{df = |f'(x)|\\,dx}$$

### Worked Example: Sphere Volume

> A sphere has radius $r = 5$ cm with measurement error $dr = 0.02$ cm. Estimate the error in the volume.

$V = \\frac{4}{3}\\pi r^3$, $V'(r) = 4\\pi r^2$

$$dV = 4\\pi(25)(0.02) = 2\\pi \\approx 6.28 \\text{ cm}^3$$

Relative error: $\\frac{dV}{V} = \\frac{4\\pi r^2\\,dr}{\\frac{4}{3}\\pi r^3} = \\frac{3\\,dr}{r} = \\frac{3(0.02)}{5} = 0.012 = 1.2\\%$

> **Key Fact:** For $V = \\frac{4}{3}\\pi r^3$, the relative error in volume is 3 times the relative error in radius: $\\frac{dV}{V} = 3\\frac{dr}{r}$.

### Linearization from a Table

AP problems often give a table of $f$ and $f'$ values and ask you to approximate $f$ at a nearby point:

| $x$ | $f(x)$ | $f'(x)$ |
|:---:|:---:|:---:|
| $2$ | $5$ | $3$ |
| $4$ | $11$ | $-1$ |

Approximate $f(2.1)$: $L(2.1) = f(2) + f'(2)(0.1) = 5 + 3(0.1) = 5.3$

Approximate $f(3.9)$: $L(3.9) = f(4) + f'(4)(-0.1) = 11 + (-1)(-0.1) = 11.1$`
    },
    {
      id: 'lin5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Applications** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A cube has side $s = 10$ cm with error $ds = 0.05$ cm. The approximate error in surface area ($S = 6s^2$) is:',
            options: ['$6$ cm$^2$', '$3$ cm$^2$', '$12$ cm$^2$', '$60$ cm$^2$'],
            correctAnswer: 0,
            explanation: '$dS = 12s\\,ds = 12(10)(0.05) = 6$ cm$^2$.'
          },
          {
            question: 'Given $f(3) = 7$ and $f\'(3) = -2$, approximate $f(3.5)$:',
            options: ['$6$', '$8$', '$5$', '$7.5$'],
            correctAnswer: 0,
            explanation: '$L(3.5) = 7 + (-2)(0.5) = 7 - 1 = 6$.'
          },
          {
            question: 'For a sphere, the relative error in volume is how many times the relative error in radius?',
            options: ['$3$', '$2$', '$4$', '$\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\frac{4}{3}\\pi r^3$. $dV/V = 3\\,dr/r$. The multiplier is 3.'
          }
        ]
      }
    },
    {
      id: 'lin5-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP table problem.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Given $f(5) = 12$, $f\'(5) = 4$. Approximate $f(5.2)$:',
            options: ['$12.8$', '$12.2$', '$16$', '$12.4$'],
            correctAnswers: ['$12.8$'],
            hints: ['$L(5.2) = 12 + 4(0.2)$.'],
            explanation: '$L(5.2) = 12 + 0.8 = 12.8$.'
          },
          {
            label: 'If $f\'\'(5) > 0$, is this approximation an over- or underestimate?',
            options: ['Underestimate', 'Overestimate', 'Exact', 'Cannot tell'],
            correctAnswers: ['Underestimate'],
            hints: ['Concave up means tangent below curve.'],
            explanation: '$f\'\' > 0$ means concave up, so the tangent line underestimates.'
          },
          {
            label: 'The differential $dA$ for a circle ($A = \\pi r^2$) with $r = 10$, $dr = 0.1$ is:',
            options: ['$2\\pi$', '$20\\pi$', '$\\pi$', '$0.1\\pi$'],
            correctAnswers: ['$2\\pi$'],
            hints: ['$dA = 2\\pi r\\,dr = 2\\pi(10)(0.1)$.'],
            explanation: '$dA = 2\\pi(10)(0.1) = 2\\pi$.'
          }
        ]
      }
    },
    {
      id: 'lin5-input',
      type: 'input-box' as const,
      content: '**Propagation of error.** \u270d\ufe0f',
      exercise: {
        question: 'A circle has radius $r = 6$ cm with error $dr = 0.1$ cm. The approximate error in the area $A = \\pi r^2$ is $a\\pi$ cm$^2$. Find $a$.\n\n(Enter a decimal.)',
        correctAnswer: '1.2',
        acceptableAnswers: ['1.2', '6/5'],
        hints: [
          '$dA = 2\\pi r\\,dr$.',
          '$dA = 2\\pi(6)(0.1) = 1.2\\pi$.',
          'So $a = 1.2$.'
        ],
        explanation: '$dA = 2\\pi(6)(0.1) = 1.2\\pi$. So $a = 1.2$.'
      }
    },
    {
      id: 'lin5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- Error propagation: $df \\approx |f'(x)|\\,dx$
- Relative error: $df/f$. For $V = cr^n$: $dV/V = n\\,dr/r$
- Table-based linearization: $L(x) = f(a) + f'(a)(x-a)$ using given values
- AP loves "approximate $f(2.1)$ given $f(2)$ and $f'(2)$" questions`
    }
  ]
};
