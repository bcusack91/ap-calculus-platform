export const calcabDerivativeDefPart1Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef1-intro',
      type: 'text' as const,
      content: `
# ∫ The Derivative as a Limit

**Part 1 of 7 — From Average to Instantaneous Rate of Change**

### 1. Average Rate of Change

The **average rate of change** of $f$ on $[a,b]$ is the slope of the **secant line**:

$$\\frac{f(b) - f(a)}{b - a}$$

### 2. Instantaneous Rate of Change

As $b \\to a$, the secant line becomes the **tangent line**, and we get the **derivative**:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$

This is the **limit definition of the derivative** — the most fundamental formula in calculus.

### 3. Computing Derivatives from the Definition

**Example:** Find $f'(x)$ for $f(x) = x^2$.

$$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x$$

### 4. Alternate Form

$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$

This form is useful when given a specific point rather than a general formula.
      `
    },
    {
      id: 'derdef1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Using the limit definition, find $f\'(x)$ for $f(x) = 3x^2$.',
            options: ['$3x$', '$6x$', '$6x + 3h$', '$3x^2$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = \\lim_{h \\to 0} \\frac{3(x+h)^2 - 3x^2}{h} = \\lim_{h \\to 0} \\frac{3x^2+6xh+3h^2-3x^2}{h} = \\lim_{h \\to 0} (6x+3h) = 6x$.'
          },
          {
            question: 'Which limit represents $f\'(2)$ for $f(x) = x^3$?',
            options: [
              '$\\lim_{h \\to 0} \\frac{(2+h)^3 - 8}{h}$',
              '$\\lim_{h \\to 0} \\frac{x^3 - 8}{x - 2}$',
              '$\\lim_{h \\to 0} \\frac{(2+h)^3}{h}$',
              '$\\lim_{h \\to 0} \\frac{8 - (2+h)^3}{h}$'
            ],
            correctAnswer: 0,
            explanation: '$f\'(2) = \\lim_{h \\to 0} \\frac{f(2+h) - f(2)}{h} = \\lim_{h \\to 0} \\frac{(2+h)^3 - 2^3}{h} = \\lim_{h \\to 0} \\frac{(2+h)^3 - 8}{h}$.'
          }
        ]
      }
    },
    {
      id: 'derdef1-detail',
      type: 'text' as const,
      content: `
### Two Forms of the Derivative Definition

| Form | Formula | Use When |
|------|---------|----------|
| Standard | $\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$ | Finding $f'(x)$ as a function |
| Alternate | $\\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}$ | Finding $f'(a)$ at a specific point |

**AP Exam note:** You may be given a limit and asked to identify it as a derivative. For example, $\\lim_{h \\to 0} \\frac{\\sin(\\pi/6 + h) - 1/2}{h}$ represents $f'(\\pi/6)$ where $f(x) = \\sin x$.
      `
    },
    {
      id: 'derdef1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The limit $\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h}$ represents $f\'(a)$ for which function and value?',
            options: ['$f(x) = x^2$ at $a = 3$', '$f(x) = x^2 - 9$ at $a = 0$', '$f(x) = (x+h)^2$ at $a = 3$', '$f(x) = 9$ at $a = 3$'],
            correctAnswer: 0,
            explanation: 'This matches $\\lim_{h \\to 0} \\frac{f(3+h) - f(3)}{h}$ where $f(x) = x^2$, since $f(3) = 9$. So it represents $f\'(3)$ for $f(x) = x^2$.'
          }
        ]
      }
    },
    {
      id: 'derdef1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Identify the Derivative** 🔍\n\nMatch each limit to the derivative it represents.`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{h \\to 0} \\frac{\\sqrt{4+h} - 2}{h}$', options: ['$f\'(4)$ where $f(x) = \\sqrt{x}$', '$f\'(2)$ where $f(x) = \\sqrt{x}$', '$f\'(4)$ where $f(x) = x^2$', '$f\'(0)$ where $f(x) = \\sqrt{x}$'] },
          { label: '$\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$', options: ['$f\'(1)$ where $f(x) = x^3$', '$f\'(0)$ where $f(x) = x^3$', '$f\'(1)$ where $f(x) = x^2$', '$f\'(-1)$ where $f(x) = x^3$'] },
          { label: '$\\lim_{h \\to 0} \\frac{e^{1+h} - e}{h}$', options: ['$f\'(1)$ where $f(x) = e^x$', '$f\'(0)$ where $f(x) = e^x$', '$f\'(e)$ where $f(x) = e^x$', '$f\'(1)$ where $f(x) = e$'] }
        ],
        correctAnswers: ['$f\'(4)$ where $f(x) = \\sqrt{x}$', '$f\'(1)$ where $f(x) = x^3$', '$f\'(1)$ where $f(x) = e^x$'],
        hint1: '$\\sqrt{4}=2$, so this is $\\frac{f(4+h)-f(4)}{h}$ with $f(x)=\\sqrt{x}$.',
        hint2: 'This uses the alternate form: $\\frac{f(x)-f(1)}{x-1}$ as $x \\to 1$.',
        hint3: '$e^{1+h} = e^1 \\cdot e^h$, and $e^1 = e$, so $f(1) = e$ with $f(x) = e^x$.',
        explanation: 'Each limit matches the derivative definition. $\\frac{\\sqrt{4+h}-2}{h}$ is $f\'(4)$ for $\\sqrt{x}$. $\\frac{x^3-1}{x-1}$ is $f\'(1)$ for $x^3$ (alternate form). $\\frac{e^{1+h}-e}{h}$ is $f\'(1)$ for $e^x$.'
      }
    }
  ]
}
