export const calcabDerivativeDefPart1Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef1-intro',
      type: 'text' as const,
      content: `# ∫ The Derivative as a Limit

**Part 1 of 7 — From Average to Instantaneous Rate of Change**

---

### Topics in This Part

| Section |
|---------|
| 📖 Average Rate of Change (Secant Lines) |
| Instantaneous Rate of Change (Tangent Lines) |
| 📌 The Limit Definition of the Derivative |
| Computing Derivatives from the Definition |
| Alternate Form of the Definition |

> 🔑 **Key Concept:** The derivative $f'(a)$ is the instantaneous rate of change of $f$ at $x = a$, defined as the limit of average rates of change as the interval shrinks to zero.`
    },
    {
      id: 'derdef1-aroc',
      type: 'text' as const,
      content: `
## 📖 Average Rate of Change

The **average rate of change** of $f$ on $[a,b]$ is the slope of the **secant line** through $(a, f(a))$ and $(b, f(b))$:

$$\\boxed{\\text{AROC} = \\frac{f(b) - f(a)}{b - a}}$$

**Physical interpretation:** If $f(t)$ = position at time $t$, then AROC is the **average velocity** on $[a,b]$.

---

### Example: Average Velocity

A car's position is $s(t) = t^2$ meters at time $t$ seconds.

Average velocity from $t=1$ to $t=3$:

$$\\frac{s(3)-s(1)}{3-1} = \\frac{9-1}{2} = 4 \\text{ m/s}$$

But what is the velocity at **exactly** $t = 1$? We need to let the interval shrink...

> 🔑 **Key Idea:** Average rate of change → secant line slope. Make the interval infinitely small → tangent line slope.`
    },
    {
      id: 'derdef1-definition',
      type: 'text' as const,
      content: `
## 📌 The Limit Definition of the Derivative

As $h \\to 0$, the secant line becomes the tangent line:

$$\\boxed{f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}}$$

This is the **most fundamental formula in calculus**.

---

### Computing $f'(x)$ from the Definition

**Example:** Find $f'(x)$ for $f(x) = x^2$.

| Step | Computation |
|------|------------|
| Write the limit | $f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}$ |
| Expand | $= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}$ |
| Cancel | $= \\lim_{h \\to 0} \\frac{2xh + h^2}{h}$ |
| Factor out $h$ | $= \\lim_{h \\to 0} (2x + h)$ |
| Evaluate | $= 2x$ |

$$\\boxed{f(x) = x^2 \\implies f'(x) = 2x}$$

> **AP Tip:** On the AP exam, you MUST show the limit process — you cannot just write down the answer using shortcut rules when asked to use the definition.`
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
            explanation: '$f\'(x) = \\lim_{h \\to 0} \\frac{3(x+h)^2 - 3x^2}{h} = \\lim_{h \\to 0} \\frac{6xh+3h^2}{h} = \\lim_{h \\to 0} (6x+3h) = 6x$.'
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
            explanation: '$f\'(2) = \\lim_{h \\to 0} \\frac{f(2+h) - f(2)}{h} = \\lim_{h \\to 0} \\frac{(2+h)^3 - 8}{h}$.'
          },
          {
            question: 'The average rate of change of $f(x) = x^3$ on $[1, 3]$ is:',
            options: ['$13$', '$26$', '$9$', '$27$'],
            correctAnswer: 0,
            explanation: '$\\frac{f(3)-f(1)}{3-1} = \\frac{27-1}{2} = \\frac{26}{2} = 13$.'
          }
        ]
      }
    },
    {
      id: 'derdef1-alternate',
      type: 'text' as const,
      content: `
## Alternate Form of the Derivative

$$\\boxed{f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}}$$

| Standard Form | Alternate Form |
|--------------|---------------|
| $\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$ | $\\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}$ |
| Uses increment $h$ | Uses the point $x$ directly |
| Best for: finding $f'(x)$ as a function | Best for: evaluating $f'(a)$ at a specific point |

---

### Recognizing Derivatives in Disguise

On the AP exam, you may be given a limit and asked to identify it as a derivative:

**Example:** $\\lim_{h \\to 0} \\frac{\\sin(\\pi/6 + h) - 1/2}{h}$

This is $f'(\\pi/6)$ where $f(x) = \\sin x$, since $\\sin(\\pi/6) = 1/2$.

Answer: $f'(\\pi/6) = \\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$

> **AP Tip:** If you see a limit that looks like $\\frac{f(a+h)-f(a)}{h}$ or $\\frac{f(x)-f(a)}{x-a}$, identify $f$ and $a$ first — then use derivative rules instead of computing the limit directly.`
    },
    {
      id: 'derdef1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Recognizing Derivatives** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The limit $\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h}$ represents $f\'(a)$ for which function and value?',
            options: ['$f(x) = x^2$ at $a = 3$', '$f(x) = x^2 - 9$ at $a = 0$', '$f(x) = (x+h)^2$ at $a = 3$', '$f(x) = 9$ at $a = 3$'],
            correctAnswer: 0,
            explanation: 'This matches $\\frac{f(3+h) - f(3)}{h}$ where $f(x) = x^2$, since $f(3) = 9$. So it represents $f\'(3) = 6$.'
          },
          {
            question: '$\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$ represents which derivative?',
            options: ['$f\'(5)$ where $f(x) = x^2$', '$f\'(5)$ where $f(x) = x^2-25$', '$f\'(25)$ where $f(x) = x$', '$f\'(0)$ where $f(x) = x^2$'],
            correctAnswer: 0,
            explanation: 'This is $\\frac{f(x) - f(5)}{x-5}$ where $f(x)=x^2$ and $f(5)=25$. So $f\'(5)=2(5)=10$.'
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
        hint3: '$e^{1+h} = e^1 \\cdot e^h$, and $f(1) = e$ with $f(x) = e^x$.',
        explanation: 'Each limit matches the derivative definition. $\\frac{\\sqrt{4+h}-2}{h}$ is $f\'(4)$ for $\\sqrt{x}$. $\\frac{x^3-1}{x-1}$ is $f\'(1)$ for $x^3$. $\\frac{e^{1+h}-e}{h}$ is $f\'(1)$ for $e^x$.'
      }
    },
    {
      id: 'derdef1-input',
      type: 'input-box' as const,
      content: `**Compute from the Definition** ✍️`,
      exercise: {
        question: 'Use the limit definition to find $f\'(3)$ for $f(x) = x^2 + 1$. What is the numerical answer?',
        correctAnswer: '6',
        acceptableAnswers: ['6', '6.0'],
        hint1: '$f\'(3) = \\lim_{h \\to 0} \\frac{f(3+h)-f(3)}{h}$. Compute $f(3+h) = (3+h)^2+1$ and $f(3)=10$.',
        hint2: '$\\frac{(9+6h+h^2+1)-10}{h} = \\frac{6h+h^2}{h} = 6+h \\to 6$.',
        explanation: '$f\'(3) = \\lim_{h \\to 0} \\frac{(3+h)^2+1-10}{h} = \\lim_{h \\to 0} \\frac{6h+h^2}{h} = \\lim_{h \\to 0}(6+h) = 6$.'
      }
    }
  ]
}
