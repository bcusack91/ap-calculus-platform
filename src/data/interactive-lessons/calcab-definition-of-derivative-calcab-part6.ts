export const calcabDerivativeDefPart6Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef6-intro',
      type: 'text' as const,
      content: `# ∫ Problem-Solving Workshop

**Part 6 of 7 — Derivative Definition Practice**

---

### Strategy Guide

| Problem Type | Method |
|-------------|--------|
| "Find $f'(x)$ using the definition" | Write the limit, expand, simplify, cancel $h$, evaluate |
| "Evaluate this limit" (looks like a derivative) | Recognize as $f'(a)$, use rules instead |
| "Is $f$ differentiable at $x = c$?" | Check continuity, then check left and right derivatives |

> 🔑 **Key Principle:** Many limit problems are derivatives in disguise. Recognizing this saves massive computation.`
    },
    {
      id: 'derdef6-example1',
      type: 'text' as const,
      content: `
## 📖 Worked Example: $f(x) = \\frac{1}{x}$ from the Definition

$$f'(x) = \\lim_{h \\to 0} \\frac{\\frac{1}{x+h} - \\frac{1}{x}}{h}$$

| Step | Work |
|------|------|
| Common denominator | $= \\lim_{h \\to 0} \\frac{\\frac{x - (x+h)}{x(x+h)}}{h}$ |
| Simplify numerator | $= \\lim_{h \\to 0} \\frac{-h}{hx(x+h)}$ |
| Cancel $h$ | $= \\lim_{h \\to 0} \\frac{-1}{x(x+h)}$ |
| Evaluate | $= \\frac{-1}{x^2}$ |

$$\\boxed{f(x) = \\frac{1}{x} \\implies f'(x) = -\\frac{1}{x^2}}$$

---

## Worked Example: $f(x) = \\sqrt{x}$ from the Definition

$$f'(x) = \\lim_{h \\to 0} \\frac{\\sqrt{x+h} - \\sqrt{x}}{h} \\cdot \\frac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}}$$

$$= \\lim_{h \\to 0} \\frac{(x+h)-x}{h(\\sqrt{x+h}+\\sqrt{x})} = \\lim_{h \\to 0} \\frac{1}{\\sqrt{x+h}+\\sqrt{x}} = \\frac{1}{2\\sqrt{x}}$$

> **AP Tip:** For radicals, always conjugate-multiply. For fractions, find common denominators. These are the two key algebraic moves.`
    },
    {
      id: 'derdef6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Definition Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Use the limit definition to find $f\'(x)$ for $f(x) = 5x - x^2$.',
            options: ['$5 - x$', '$5 - 2x$', '$5$', '$-2x$'],
            correctAnswer: 1,
            explanation: '$\\frac{[5(x+h)-(x+h)^2]-[5x-x^2]}{h} = \\frac{5h-2xh-h^2}{h} = 5-2x-h \\to 5-2x$.'
          },
          {
            question: 'Evaluate $\\lim_{h \\to 0} \\frac{(1+h)^{10} - 1}{h}$ by recognizing it as a derivative.',
            options: ['$10$', '$1$', '$0$', '$100$'],
            correctAnswer: 0,
            explanation: 'This is $f\'(1)$ where $f(x) = x^{10}$. $f\'(x) = 10x^9 \\Rightarrow f\'(1) = 10$.'
          },
          {
            question: 'From the definition, $f\'(x)$ for $f(x) = \\frac{1}{x}$ is:',
            options: ['$\\frac{1}{x^2}$', '$-\\frac{1}{x^2}$', '$\\frac{-1}{x}$', '$\\ln x$'],
            correctAnswer: 1,
            explanation: 'As shown in the worked example: $f\'(x) = -\\frac{1}{x^2}$.'
          }
        ]
      }
    },
    {
      id: 'derdef6-recognize',
      type: 'text' as const,
      content: `
## 📌 Recognizing Derivatives in Disguise

$$\\boxed{\\text{If a limit looks like } \\frac{f(a+h)-f(a)}{h} \\text{ or } \\frac{f(x)-f(a)}{x-a}, \\text{ identify } f \\text{ and } a.}$$

| Limit Expression | $f(x)$ | $a$ | $f'(a)$ | Answer |
|-----------------|--------|-----|---------|--------|
| $\\lim_{h \\to 0} \\frac{e^{2+h}-e^2}{h}$ | $e^x$ | $2$ | $e^2$ | $e^2$ |
| $\\lim_{x \\to 3} \\frac{x^2-9}{x-3}$ | $x^2$ | $3$ | $2(3)$ | $6$ |
| $\\lim_{h \\to 0} \\frac{\\ln(1+h)}{h}$ | $\\ln(1+x)$ | $0$ | $\\frac{1}{1+0}$ | $1$ |
| $\\lim_{h \\to 0} \\frac{\\cos(\\pi+h)+1}{h}$ | $\\cos x$ | $\\pi$ | $-\\sin\\pi$ | $0$ |

> 🔑 **Key Fact:** This technique turns hard limit computations into easy derivative evaluations. Look for this pattern on EVERY limit problem!`
    },
    {
      id: 'derdef6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Recognize & Evaluate** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{h \\to 0} \\frac{e^{3+h} - e^3}{h}$.',
            options: ['$1$', '$e^3$', '$3e^2$', '$3e^3$'],
            correctAnswer: 1,
            explanation: 'This is $f\'(3)$ where $f(x) = e^x$. Since $f\'(x) = e^x$, $f\'(3) = e^3$.'
          },
          {
            question: 'Evaluate $\\lim_{h \\to 0} \\frac{\\ln(e + h) - 1}{h}$.',
            options: ['$1$', '$e$', '$1/e$', '$0$'],
            correctAnswer: 2,
            explanation: 'This is $f\'(e)$ where $f(x) = \\ln x$, since $\\ln(e) = 1$. $f\'(x) = 1/x$, so $f\'(e) = 1/e$.'
          }
        ]
      }
    },
    {
      id: 'derdef6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Mixed Practice** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{h \\to 0} \\frac{\\sin(\\pi/2 + h) - 1}{h}$', options: ['$0$', '$1$', '$-1$', 'DNE'] },
          { label: '$\\lim_{x \\to 4} \\frac{\\sqrt{x}-2}{x-4}$', options: ['$1/4$', '$1/2$', '$2$', '$4$'] },
          { label: '$\\lim_{h \\to 0} \\frac{(2+h)^3-8}{h}$', options: ['$4$', '$8$', '$12$', '$24$'] }
        ],
        correctAnswers: ['$0$', '$1/4$', '$12$'],
        hint1: '$f\'(\\pi/2)$ for $\\sin x$. $\\cos(\\pi/2) = 0$.',
        hint2: '$f\'(4)$ for $\\sqrt{x}$. $\\frac{1}{2\\sqrt{4}} = \\frac{1}{4}$.',
        hint3: '$f\'(2)$ for $x^3$. $3(2)^2 = 12$.',
        explanation: '$\\cos(\\pi/2) = 0$. $\\frac{1}{2\\sqrt{4}} = \\frac{1}{4}$. $3(2)^2 = 12$.'
      }
    },
    {
      id: 'derdef6-input',
      type: 'input-box' as const,
      content: `**Recognize the Derivative** ✍️`,
      exercise: {
        question: 'Evaluate $\\lim_{h \\to 0} \\frac{(3+h)^4 - 81}{h}$ by recognizing it as $f\'(a)$. What is the numerical answer?',
        correctAnswer: '108',
        acceptableAnswers: ['108', '108.0'],
        hint1: 'This is $f\'(3)$ where $f(x) = x^4$ (since $3^4 = 81$).',
        hint2: '$f\'(x) = 4x^3$, so $f\'(3) = 4(27) = ?$',
        explanation: '$f\'(3)$ where $f(x) = x^4$. $f\'(x) = 4x^3$, so $f\'(3) = 4(27) = 108$.'
      }
    }
  ]
}
