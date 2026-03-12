export const calcabDerivativeDefPart6Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef6-intro',
      type: 'text' as const,
      content: `
# ∫ Problem-Solving Workshop

**Part 6 of 7 — Derivative Definition Practice**

### Strategy: Limit-Definition Problems

When asked to find a derivative using the **limit definition**:

1. Write out $\\frac{f(x+h)-f(x)}{h}$
2. Expand $f(x+h)$ carefully
3. Simplify — everything should cancel the $h$ in the denominator
4. Take $\\lim_{h \\to 0}$

### Worked Example: $f(x) = \\frac{1}{x}$

$$f'(x) = \\lim_{h \\to 0} \\frac{\\frac{1}{x+h} - \\frac{1}{x}}{h} = \\lim_{h \\to 0} \\frac{\\frac{x-(x+h)}{x(x+h)}}{h} = \\lim_{h \\to 0} \\frac{-h}{hx(x+h)} = \\lim_{h \\to 0} \\frac{-1}{x(x+h)} = \\frac{-1}{x^2}$$

### Worked Example: Recognizing Derivative Limits

"Find $\\lim_{h \\to 0} \\frac{\\cos(\\pi + h) - \\cos(\\pi)}{h}$"

This IS $f'(\\pi)$ where $f(x) = \\cos x$. So the answer is $f'(\\pi) = -\\sin(\\pi) = 0$.

**Much faster** than trying to expand $\\cos(\\pi + h)$!
      `
    },
    {
      id: 'derdef6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{h \\to 0} \\frac{(1+h)^{10} - 1}{h}$ by recognizing it as a derivative.',
            options: ['$10$', '$1$', '$0$', '$100$'],
            correctAnswer: 0,
            explanation: 'This is $f\'(1)$ where $f(x) = x^{10}$. Since $f\'(x) = 10x^9$, we get $f\'(1) = 10(1)^9 = 10$.'
          },
          {
            question: 'Use the limit definition to find $f\'(x)$ for $f(x) = \\sqrt{x}$.',
            options: ['$\\frac{1}{\\sqrt{x}}$', '$\\frac{1}{2\\sqrt{x}}$', '$2\\sqrt{x}$', '$\\frac{\\sqrt{x}}{2}$'],
            correctAnswer: 1,
            explanation: '$\\frac{\\sqrt{x+h}-\\sqrt{x}}{h} \\cdot \\frac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}} = \\frac{h}{h(\\sqrt{x+h}+\\sqrt{x})} = \\frac{1}{\\sqrt{x+h}+\\sqrt{x}} \\to \\frac{1}{2\\sqrt{x}}$.'
          }
        ]
      }
    },
    {
      id: 'derdef6-detail',
      type: 'text' as const,
      content: `
### Recognizing Derivatives in Disguise

| Limit Expression | Recognized As | Answer |
|-----------------|---------------|--------|
| $\\lim_{h \\to 0} \\frac{e^{2+h}-e^2}{h}$ | $f'(2)$, $f(x)=e^x$ | $e^2$ |
| $\\lim_{x \\to 3} \\frac{x^2-9}{x-3}$ | $f'(3)$, $f(x)=x^2$ | $6$ |
| $\\lim_{h \\to 0} \\frac{\\ln(1+h)}{h}$ | $f'(1)$, $f(x)=\\ln x$? No: $f'(0)$, $f(x)=\\ln(1+x)$ | $1$ |

These "recognize the derivative" problems save huge amounts of computation on the AP exam.
      `
    },
    {
      id: 'derdef6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{h \\to 0} \\frac{e^{3+h} - e^3}{h}$.',
            options: ['$1$', '$e^3$', '$3e^2$', '$3e^3$'],
            correctAnswer: 1,
            explanation: 'Recognize this as $f\'(3)$ where $f(x) = e^x$. Since $\\frac{d}{dx}e^x = e^x$, we get $f\'(3) = e^3$.'
          }
        ]
      }
    },
    {
      id: 'derdef6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Recognize & Evaluate** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{h \\to 0} \\frac{\\sin(\\pi/2 + h) - 1}{h}$', options: ['$0$', '$1$', '$-1$', 'DNE'] },
          { label: '$\\lim_{x \\to 4} \\frac{\\sqrt{x}-2}{x-4}$', options: ['$1/4$', '$1/2$', '$2$', '$4$'] },
          { label: '$\\lim_{h \\to 0} \\frac{(2+h)^3-8}{h}$', options: ['$4$', '$8$', '$12$', '$24$'] }
        ],
        correctAnswers: ['$0$', '$1/4$', '$12$'],
        hint1: 'This is $f\'(\\pi/2)$ for $f(x) = \\sin x$. What is $\\cos(\\pi/2)$?',
        hint2: 'This is $f\'(4)$ for $f(x) = \\sqrt{x}$. Apply the power rule.',
        hint3: 'This is $f\'(2)$ for $f(x) = x^3$. What is $3(2)^2$?',
        explanation: '$\\cos(\\pi/2) = 0$. $f\'(x) = \\frac{1}{2\\sqrt{x}}$, so $f\'(4) = \\frac{1}{4}$. $f\'(x) = 3x^2$, so $f\'(2) = 12$.'
      }
    }
  ]
}
