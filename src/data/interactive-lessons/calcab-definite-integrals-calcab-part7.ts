export const calcabDefiniteIntegralsPart7Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int7-intro',
      type: 'text' as const,
      content: `# ∫ Definite Integrals — Comprehensive Review

**Part 7 of 7 — Final Assessment**

### Complete Summary

| Concept | Key Formula |
|:---:|:---:|
| Riemann Sum | $\\sum f(x_i^*) \\Delta x$ |
| Trapezoidal Rule | $\\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + \\cdots + f(x_n)]$ |
| Definite Integral | $\\lim_{n\\to\\infty} \\sum f(x_i^*) \\Delta x$ |
| FTC Part 1 | $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ |
| FTC Part 1 (chain) | $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x))\\cdot g'(x)$ |
| FTC Part 2 | $\\int_a^b f(x)\\,dx = F(b) - F(a)$ |
| Net Change | $\\int_a^b f'(x)\\,dx = f(b) - f(a)$ |
| Average Value | $f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |

### Common AP Exam Mistakes

| Mistake | Consequence |
|:---:|:---:|
| Forgetting Chain Rule on FTC Part 1 | Missing the $g'(x)$ factor |
| Confusing displacement with distance | Using $\\int v$ when asked for $\\int |v|$ |
| Not splitting at zeros for $\\int |f|$ | Wrong absolute value integral |
| Forgetting $\\int k\\,dx = k(b-a)$ for constants | Missing the constant term |
| Wrong Trapezoidal with unequal widths | Using equal $\\Delta x$ when widths vary |
| Not reversing limits when $x$ is in lower bound | Sign error |`
    },
    {
      id: 'int7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^9 \\sqrt{x}\\,dx$.',
            options: ['$9$', '$18$', '$27$', '$6$'],
            correctAnswer: 1,
            explanation: '$[\\frac{2}{3}x^{3/2}]_0^9 = \\frac{2}{3}(27) = 18$.'
          },
          {
            question: 'If $F(x) = \\int_2^x (3t + 1)\\,dt$, find $F\'(5)$.',
            options: ['$16$', '$15$', '$14$', '$32$'],
            correctAnswer: 0,
            explanation: 'FTC Part 1: $F\'(x) = 3x + 1$. $F\'(5) = 16$.'
          },
          {
            question: 'Evaluate $\\int_0^{2\\pi} \\cos x\\,dx$.',
            options: ['$0$', '$2$', '$2\\pi$', '$-2$'],
            correctAnswer: 0,
            explanation: '$[\\sin x]_0^{2\\pi} = 0 - 0 = 0$. One full period of cosine!'
          },
          {
            question: 'The average value of $f(x) = x^3$ on $[0, 2]$ is:',
            options: ['$2$', '$4$', '$8$', '$16$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{2}\\int_0^2 x^3\\,dx = \\frac{1}{2}[\\frac{x^4}{4}]_0^2 = \\frac{1}{2} \\cdot 4 = 2$.'
          }
        ]
      }
    },
    {
      id: 'int7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\int_0^{\\tan x} e^{t^2}\\,dt$.',
            options: ['$e^{\\tan^2 x}$', '$e^{\\tan^2 x} \\cdot \\sec^2 x$', '$e^{x^2} \\cdot \\sec^2 x$', '$\\sec^2 x$'],
            correctAnswer: 1,
            explanation: 'Chain Rule: $g(x) = \\tan x$, $g\'(x) = \\sec^2 x$. Answer: $e^{\\tan^2 x} \\cdot \\sec^2 x$.'
          },
          {
            question: 'If $\\int_0^{10} v(t)\\,dt = 25$ and $\\int_0^{10} |v(t)|\\,dt = 37$, the particle:',
            options: ['Moved 25 units right, traveled 37 units total', 'Moved 37 units, displaced 25', 'Traveled 25 units total', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Displacement = 25 (net rightward). Total distance = 37. The particle changed direction at some point.'
          },
          {
            question: 'Evaluate $\\int_{-3}^{3} (x^5 + x^2)\\,dx$.',
            options: ['$0$', '$18$', '$\\frac{54}{3}$', '$\\frac{2 \\cdot 27}{3} = 18$'],
            correctAnswer: 3,
            explanation: '$x^5$ is odd → $0$. $x^2$ is even → $2\\int_0^3 x^2\\,dx = 2[x^3/3]_0^3 = 2(9) = 18$.'
          }
        ]
      }
    },
    {
      id: 'int7-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP-Style Comprehensive** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_1^1 (x^{100} + \\sin x)\\,dx$ equals:',
            options: ['$0$', '$1$', '$2$', 'Cannot compute'],
            correctAnswers: ['$0$'],
            hints: ['What happens when both limits are the same?'],
            explanation: '$\\int_a^a f(x)\\,dx = 0$ for any function. Zero width = zero area.'
          },
          {
            label: 'If $\\int_0^5 f = 8$ and $\\int_5^0 g = -3$, then $\\int_0^5 g =$:',
            options: ['$-3$', '$3$', '$8$', '$5$'],
            correctAnswers: ['$3$'],
            hints: ['Reversing limits flips the sign: $\\int_5^0 g = -\\int_0^5 g$.'],
            explanation: '$\\int_5^0 g = -3$ means $-\\int_0^5 g = -3$, so $\\int_0^5 g = 3$.'
          },
          {
            label: 'A Left Riemann Sum with $n = 4$ on $[0,8]$ has $\\Delta x =$:',
            options: ['$1$', '$2$', '$4$', '$8$'],
            correctAnswers: ['$2$'],
            hints: ['$\\Delta x = (b-a)/n = (8-0)/4$.'],
            explanation: '$\\Delta x = 8/4 = 2$.'
          }
        ]
      }
    },
    {
      id: 'int7-input',
      type: 'input-box' as const,
      content: '**Final Challenge** ✍️',
      exercise: {
        question: 'Let $g(x) = \\int_0^x f(t)\\,dt$ where $f(t) = 2t - 6$.\n\nFind the value of $x > 0$ where $g$ has a local minimum.\n\n(Enter a whole number.)',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: [
          '$g\'(x) = f(x) = 2x - 6$ by FTC Part 1.',
          'Local min occurs where $g\'$ changes from negative to positive.',
          'Set $g\'(x) = 0$: $2x - 6 = 0$. Check the sign change.'
        ],
        explanation: '$g\'(x) = f(x) = 2x - 6 = 0$ at $x = 3$. For $x < 3$: $g\' < 0$ (decreasing). For $x > 3$: $g\' > 0$ (increasing). Sign change − to + → local minimum at $x = 3$.'
      }
    },
    {
      id: 'int7-summary',
      type: 'text' as const,
      content: `### Definite Integrals — Complete! ✅

You have mastered:

| Skill | Parts |
|:---:|:---:|
| Riemann Sums (L, R, M, T) | Part 1 |
| Over/Underestimate analysis | Part 1 |
| Signed area & geometry | Part 2 |
| Even/odd symmetry | Part 2 |
| Properties & average value | Part 3 |
| FTC Part 1 (+ Chain Rule) | Part 4 |
| Accumulation functions | Part 4 |
| FTC Part 2 & Net Change | Part 5 |
| Displacement vs distance | Part 5 |
| Mixed problem solving | Parts 6-7 |

### AP Exam Checklist

- ✅ Can evaluate definite integrals with FTC Part 2
- ✅ Can differentiate integrals with FTC Part 1 (+ Chain Rule)
- ✅ Can use properties to compute from given values
- ✅ Can apply Trapezoidal Rule to table data
- ✅ Can distinguish displacement from total distance
- ✅ Can analyze accumulation functions from graphs of $f$

$$\\boxed{\\text{FTC connects differentiation and integration — they are INVERSE operations!}}$$`
    }
  ]
};
