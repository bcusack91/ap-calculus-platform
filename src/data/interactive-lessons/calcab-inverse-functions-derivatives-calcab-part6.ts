export const calcabInverseFunctionsPart6Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv6-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 6 of 7 \u2014 AP-Style Workshop**

### AP FRQ Patterns Involving Inverses

| Pattern | What They Ask | Key Formula |
|:---:|:---:|:---:|
| Table-based | "Find $(f^{-1})'(a)$" | $\\frac{1}{f'(f^{-1}(a))}$ |
| Inverse trig | "Find the slope of the tangent" | $\\frac{d}{dx}[\\arctan(u)]$ with chain rule |
| Implicit + $\\ln$ | "Given relationship, find $dy/dx$" | Differentiate both sides |
| Justification | "Explain why $f$ has an inverse" | $f'(x) > 0$ (or $< 0$) for all $x$ |

### Full Worked AP Problem

> Let $f$ be a differentiable function with $f(3) = 7$, $f'(3) = 4$, $f(7) = 1$, and $f'(7) = -2$. Let $g = f^{-1}$.
>
> **(a)** Find $g'(7)$.
>
> **(b)** Find the equation of the tangent line to $y = g(x)$ at $x = 7$.
>
> **(c)** Find $h'(7)$ where $h(x) = \\ln(g(x))$.

**Solution (a):** $g'(7) = \\frac{1}{f'(g(7))}$. Since $f(3) = 7$, $g(7) = 3$. Thus $g'(7) = \\frac{1}{f'(3)} = \\frac{1}{4}$.

**Solution (b):** Point: $(7, g(7)) = (7, 3)$. Slope: $g'(7) = 1/4$.
$$y - 3 = \\frac{1}{4}(x - 7) \\quad \\Rightarrow \\quad y = \\frac{1}{4}x + \\frac{5}{4}$$

**Solution (c):** $h'(x) = \\frac{g'(x)}{g(x)}$. Thus $h'(7) = \\frac{1/4}{3} = \\frac{1}{12}$.

> **AP Tip:** Part (c) combines the chain rule with $\\ln$ applied to an inverse function \u2014 a common multi-step problem.`
    },
    {
      id: 'inv6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f$ is differentiable, $f(2) = 5$, $f\'(2) = 3$. If $g = f^{-1}$, find $g\'(5)$.',
            options: ['$\\frac{1}{3}$', '$3$', '$\\frac{1}{5}$', '$5$'],
            correctAnswer: 0,
            explanation: '$g\'(5) = 1/f\'(g(5)) = 1/f\'(2) = 1/3$.'
          },
          {
            question: 'Let $f(x) = x^3 + x$. Why must $f$ have an inverse on all of $\\mathbb{R}$?',
            options: ['$f\'(x) = 3x^2 + 1 > 0$ for all $x$', '$f(0) = 0$', '$f$ is a polynomial', '$f$ is continuous'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 3x^2 + 1 \\geq 1 > 0$ everywhere, so $f$ is strictly increasing and one-to-one.'
          },
          {
            question: 'If $g(x) = f^{-1}(x)$ and $f(4) = 6$, $f\'(4) = -1$, then the tangent to $y = g(x)$ at $x = 6$ is:',
            options: ['$y - 4 = -1(x - 6)$', '$y - 6 = -1(x - 4)$', '$y - 4 = \\frac{1}{-1}(x - 6)$', '$y - 6 = \\frac{1}{-1}(x - 4)$'],
            correctAnswer: 0,
            explanation: 'Point: $(6, g(6)) = (6, 4)$. Slope: $g\'(6) = 1/f\'(4) = 1/(-1) = -1$. Line: $y - 4 = -1(x-6)$.'
          }
        ]
      }
    },
    {
      id: 'inv6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the correct value.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'If $f(1)=4$, $f\'(1)=2$, $f(4)=9$, $f\'(4)=5$, then $(f^{-1})\'(4) = $',
            options: ['$1/2$', '$1/5$', '$2$', '$5$'],
            correctAnswers: ['$1/2$'],
            hints: ['$f(1) = 4$, so $f^{-1}(4) = 1$.'],
            explanation: '$(f^{-1})\'(4) = 1/f\'(f^{-1}(4)) = 1/f\'(1) = 1/2$.'
          },
          {
            label: '$\\frac{d}{dx}[\\arcsin(x^2)]$ at $x = 1/\\sqrt{2}$ equals:',
            options: ['$\\frac{2}{\\sqrt{2}}$', '$\\frac{\\sqrt{2}}{\\sqrt{2}}$', '$\\frac{2\\cdot\\frac{1}{\\sqrt{2}}}{\\sqrt{1/2}}$', '$2$'],
            correctAnswers: ['$\\frac{2\\cdot\\frac{1}{\\sqrt{2}}}{\\sqrt{1/2}}$'],
            hints: ['$\\frac{2x}{\\sqrt{1-x^4}}$. At $x=1/\\sqrt{2}$: $x^4 = 1/4$, so denominator $= \\sqrt{3/4}$.'],
            explanation: '$\\frac{2/\\sqrt{2}}{\\sqrt{3/4}} = \\frac{\\sqrt{2}}{\\sqrt{3}/2} = \\frac{2\\sqrt{2}}{\\sqrt{3}} = \\frac{2\\sqrt{6}}{3}$.'
          },
          {
            label: 'To justify a function has an inverse, you should show:',
            options: ['$f\'(x)$ does not change sign on the interval', '$f$ is continuous', '$f$ is differentiable', '$f(a) \\neq f(b)$'],
            correctAnswers: ['$f\'(x)$ does not change sign on the interval'],
            hints: ['You need one-to-one (injective).'],
            explanation: 'If $f\'(x) > 0$ (or $< 0$) on an interval, $f$ is strictly monotonic and therefore one-to-one.'
          }
        ]
      }
    },
    {
      id: 'inv6-input',
      type: 'input-box' as const,
      content: '**Multi-step AP problem.** \u270d\ufe0f',
      exercise: {
        question: 'Let $f(x) = 2x^3 + 3x$. Since $f(1) = 5$, find $(f^{-1})\'(5)$.\n\nIf $(f^{-1})\'(5) = \\frac{1}{a}$, find $a$.\n\n(Enter an integer.)',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hints: [
          '$f\'(x) = 6x^2 + 3$.',
          '$f^{-1}(5) = 1$.',
          '$(f^{-1})\'(5) = 1/f\'(1) = 1/(6+3) = 1/9$.'
        ],
        explanation: '$f\'(x) = 6x^2 + 3$. $f\'(1) = 9$. $(f^{-1})\'(5) = 1/9$. So $a = 9$.'
      }
    },
    {
      id: 'inv6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs: always start by finding $f^{-1}(a)$ from the table/given info
- Tangent line to inverse: use the point $(a, f^{-1}(a))$ and slope $1/f'(f^{-1}(a))$
- Combining $\\ln$ with inverse: apply chain rule carefully
- Justifications: show $f' > 0$ or $f' < 0$ everywhere to prove invertibility`
    }
  ]
};
