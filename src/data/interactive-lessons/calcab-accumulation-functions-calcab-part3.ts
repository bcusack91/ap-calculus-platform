export const calcabAccumulationPart3Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc3-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 3 of 7 — FTC Part 1 with Chain Rule**

### Standard FTC Part 1

$$\\boxed{\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)}$$

### Chain Rule Extension

$$\\boxed{\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)}$$

### All Variations

| Form | Result | Key Step |
|:---:|:---:|:---:|
| $\\frac{d}{dx}\\int_a^x f(t)\\,dt$ | $f(x)$ | Direct FTC |
| $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt$ | $f(g(x)) \\cdot g'(x)$ | Chain rule on upper |
| $\\frac{d}{dx}\\int_x^b f(t)\\,dt$ | $-f(x)$ | Flip limits, negate |
| $\\frac{d}{dx}\\int_{h(x)}^{g(x)} f(t)\\,dt$ | $f(g(x))g'(x) - f(h(x))h'(x)$ | Split and apply to each |

> **Key Fact:** The pattern is: evaluate $f$ at the limit, then multiply by the limit's derivative. Subtract the lower limit's contribution.`
    },
    {
      id: 'acc3-worked',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1:** $\\frac{d}{dx}\\int_0^{x^3} \\sin(t)\\,dt$

$= \\sin(x^3) \\cdot 3x^2$

---

**Example 2:** $\\frac{d}{dx}\\int_0^{\\sin x} e^{t^2}\\,dt$

$= e^{(\\sin x)^2} \\cdot \\cos x = e^{\\sin^2 x} \\cos x$

---

**Example 3 (Both limits):** $\\frac{d}{dx}\\int_{2x}^{x^2} e^t\\,dt$

Upper: $e^{x^2} \\cdot 2x$. Lower: $e^{2x} \\cdot 2$.

$$= 2xe^{x^2} - 2e^{2x}$$

---

**Example 4 (Variable in lower limit):** $\\frac{d}{dx}\\int_x^5 \\cos(t^2)\\,dt$

$$= -\\cos(x^2) \\cdot 1 = -\\cos(x^2)$$

(Flip: $-\\frac{d}{dx}\\int_5^x \\cos(t^2)\\,dt = -\\cos(x^2)$)`
    },
    {
      id: 'acc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**FTC with Chain Rule** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}\\int_0^{\\sin x} t^2\\,dt =$',
            options: ['$\\sin^2(x) \\cos(x)$', '$\\sin^2(x)$', '$\\cos^2(x)$', '$2\\sin(x)\\cos(x)$'],
            correctAnswer: 0,
            explanation: '$f(\\sin x) \\cdot (\\sin x)\' = (\\sin x)^2 \\cdot \\cos x = \\sin^2(x)\\cos(x)$.'
          },
          {
            question: '$\\frac{d}{dx}\\int_{2x}^{x^2} e^t\\,dt =$',
            options: ['$2xe^{x^2} - 2e^{2x}$', '$e^{x^2} - e^{2x}$', '$2xe^{x^2} + 2e^{2x}$', '$e^{x^2}(2x-2)$'],
            correctAnswer: 0,
            explanation: 'Upper: $e^{x^2} \\cdot 2x$. Lower: $-e^{2x} \\cdot 2 = -2e^{2x}$. Total: $2xe^{x^2}-2e^{2x}$.'
          },
          {
            question: 'If $g(x) = \\int_0^x e^{-t^2}\\,dt$, then $g\'(2) =$',
            options: ['$e^{-4}$', '$e^4$', '$2e^{-4}$', '$-2e^{-4}$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = e^{-x^2}$. $g\'(2) = e^{-4}$.'
          }
        ]
      }
    },
    {
      id: 'acc3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the result.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}\\int_x^{10} \\sqrt{1+t^3}\\,dt =$',
            options: ['$\\sqrt{1+x^3}$', '$-\\sqrt{1+x^3}$', '$\\sqrt{1+10^3}$', '$0$'],
            correctAnswers: ['$-\\sqrt{1+x^3}$'],
            hints: ['Variable in lower limit: flip and negate.'],
            explanation: '$= -\\sqrt{1+x^3}$. (Flip limits introduces a negative sign.)'
          },
          {
            label: '$\\frac{d}{dx}\\int_1^{e^x} \\ln(t)\\,dt =$',
            options: ['$\\ln(e^x)$', '$x \\cdot e^x$', '$e^x$', '$\\ln(e^x) \\cdot e^x = xe^x$'],
            correctAnswers: ['$\\ln(e^x) \\cdot e^x = xe^x$'],
            hints: ['$f(e^x) \\cdot (e^x)\' = \\ln(e^x) \\cdot e^x = x \\cdot e^x$.'],
            explanation: '$\\ln(e^x) = x$, times $e^x$: answer is $xe^x$.'
          },
          {
            label: 'If $H(x) = \\int_0^{x^2} \\cos(t)\\,dt$, then $H\'(x) =$',
            options: ['$\\cos(x^2)$', '$2x\\cos(x^2)$', '$\\sin(x^2) \\cdot 2x$', '$-\\sin(x^2) \\cdot 2x$'],
            correctAnswers: ['$2x\\cos(x^2)$'],
            hints: ['Chain rule: $f(x^2) \\cdot (x^2)\' = \\cos(x^2) \\cdot 2x$.'],
            explanation: '$H\'(x) = \\cos(x^2) \\cdot 2x$.'
          }
        ]
      }
    },
    {
      id: 'acc3-input',
      type: 'input-box' as const,
      content: '**Apply FTC with chain rule.** ✍️',
      exercise: {
        question: 'Let $g(x) = \\int_1^{x^2} (3t-1)\\,dt$. Find $g\'(2)$.\n\n(Enter an integer.)',
        correctAnswer: '44',
        acceptableAnswers: ['44'],
        hints: [
          '$g\'(x) = f(x^2) \\cdot 2x$ where $f(t) = 3t-1$.',
          '$g\'(x) = (3x^2-1) \\cdot 2x$.',
          '$g\'(2) = (3(4)-1) \\cdot 4 = 11 \\cdot 4$.'
        ],
        explanation: '$g\'(x) = (3x^2-1)(2x)$. $g\'(2) = (12-1)(4) = 11 \\times 4 = 44$.'
      }
    },
    {
      id: 'acc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Variation | Result |
|:---:|:---:|
| Upper limit $x$ | $f(x)$ |
| Upper limit $g(x)$ | $f(g(x)) \\cdot g'(x)$ |
| Lower limit $x$ | $-f(x)$ |
| Both limits variable | Upper contribution $-$ lower contribution |

> **Up Next:** Part 4 — Net Change Applications.`
    }
  ]
};
