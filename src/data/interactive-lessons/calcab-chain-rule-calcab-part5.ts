export const calcabChainRulePart5Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain5-intro',
      type: 'text' as const,
      content: `# 🔗 Advanced Chain Rule Applications

**Part 5 of 7 — Logarithmic Differentiation & Inverse Trig**

### Logarithmic Differentiation

For functions like $y = x^x$ or $y = (\\sin x)^{\\cos x}$, standard rules fail because both the base AND exponent depend on $x$. **Logarithmic differentiation** handles these:

$$\\boxed{\\text{Step 1: } \\ln(\\text{both sides}) \\quad \\text{Step 2: Simplify} \\quad \\text{Step 3: Differentiate implicitly} \\quad \\text{Step 4: Solve for } \\frac{dy}{dx}}$$

> **Key Concept:** When do you need log differentiation?
> - Variable base AND variable exponent: $f(x)^{g(x)}$
> - Products/quotients of many factors (to simplify)

### When to Use Each Technique

| Situation | Technique |
|:---:|:---:|
| $[f(x)]^n$ (constant exponent) | Power Rule + Chain Rule |
| $a^{f(x)}$ (constant base) | $a^{f(x)} \\ln(a) \\cdot f'(x)$ |
| $f(x)^{g(x)}$ (both variable) | **Logarithmic Differentiation** |
| Complex products/quotients | Logarithmic Differentiation (optional but easier) |`
    },
    {
      id: 'chain5-logdiff',
      type: 'text' as const,
      content: `### Worked Example 1: $\\frac{d}{dx}x^x$

| Step | Work |
|------|------|
| Let $y = x^x$ | Take $\\ln$: $\\ln y = x \\ln x$ |
| Differentiate | $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$ |
| Solve | $\\frac{dy}{dx} = y(\\ln x + 1) = x^x(\\ln x + 1)$ |

$$\\boxed{\\frac{d}{dx}x^x = x^x(\\ln x + 1)}$$

### Worked Example 2: Simplifying Complex Products

**Find** $\\frac{d}{dx}\\frac{x^2\\sqrt{x+1}}{(2x-3)^4}$

| Step | Work |
|------|------|
| Take $\\ln$ | $\\ln y = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(2x-3)$ |
| Differentiate | $\\frac{y'}{y} = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-3}$ |
| Multiply by $y$ | $y' = \\frac{x^2\\sqrt{x+1}}{(2x-3)^4}\\left(\\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-3}\\right)$ |

> **AP Tip:** Log differentiation is rarely tested directly on AP Calc AB, but it's an important tool for AP Calc BC and is excellent for building understanding.`
    },
    {
      id: 'chain5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logarithmic Differentiation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(\\ln x)^x$ using logarithmic differentiation. After taking $\\ln$ of both sides, you get:',
            options: ['$\\ln y = x \\ln(\\ln x)$', '$\\ln y = \\ln x \\cdot \\ln x$', '$\\ln y = x^2$', '$\\ln y = e^{x \\ln x}$'],
            correctAnswer: 0,
            explanation: '$y = (\\ln x)^x$, so $\\ln y = \\ln[(\\ln x)^x] = x \\ln(\\ln x)$.'
          },
          {
            question: 'If $\\ln y = 3\\ln x + 2\\ln(x+1)$, what is $\\frac{y\'}{y}$?',
            options: ['$\\frac{3}{x} + \\frac{2}{x+1}$', '$3x^2 + 2(x+1)$', '$\\frac{3}{x} \\cdot \\frac{2}{x+1}$', '$\\frac{5}{x(x+1)}$'],
            correctAnswer: 0,
            explanation: 'Differentiate term by term: $\\frac{d}{dx}[3\\ln x] = \\frac{3}{x}$ and $\\frac{d}{dx}[2\\ln(x+1)] = \\frac{2}{x+1}$.'
          }
        ]
      }
    },
    {
      id: 'chain5-invtrig',
      type: 'text' as const,
      content: `### Chain Rule with Inverse Trig Functions

The inverse trig derivatives all require the Chain Rule when the argument is a composite:

| Function | Derivative (with Chain Rule) |
|:---:|:---:|
| $\\arcsin(u)$ | $\\frac{u'}{\\sqrt{1-u^2}}$ |
| $\\arccos(u)$ | $\\frac{-u'}{\\sqrt{1-u^2}}$ |
| $\\arctan(u)$ | $\\frac{u'}{1+u^2}$ |
| $\\text{arccot}(u)$ | $\\frac{-u'}{1+u^2}$ |
| $\\text{arcsec}(u)$ | $\\frac{u'}{|u|\\sqrt{u^2-1}}$ |
| $\\text{arccsc}(u)$ | $\\frac{-u'}{|u|\\sqrt{u^2-1}}$ |

> **Key Fact:** On the AP exam, $\\arctan$ is the most commonly tested inverse trig function. Know its derivative cold.

### Worked Examples

**Example 3:** $\\frac{d}{dx}\\arctan(3x) = \\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}$

**Example 4:** $\\frac{d}{dx}\\arcsin(x^2) = \\frac{2x}{\\sqrt{1-(x^2)^2}} = \\frac{2x}{\\sqrt{1-x^4}}$

**Example 5:** $\\frac{d}{dx}\\arctan(e^x) = \\frac{e^x}{1+(e^x)^2} = \\frac{e^x}{1+e^{2x}}$`
    },
    {
      id: 'chain5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\arctan(5x^2)$.',
            options: ['$\\frac{1}{1+25x^4}$', '$\\frac{10x}{1+25x^4}$', '$\\frac{5x}{1+25x^4}$', '$\\frac{10x}{\\sqrt{1-25x^4}}$'],
            correctAnswer: 1,
            explanation: '$\\frac{d}{dx}\\arctan(5x^2) = \\frac{10x}{1+(5x^2)^2} = \\frac{10x}{1+25x^4}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\arcsin(e^x)$.',
            options: ['$\\frac{1}{\\sqrt{1-e^{2x}}}$', '$\\frac{e^x}{\\sqrt{1-e^{2x}}}$', '$\\frac{e^x}{1+e^{2x}}$', '$\\frac{1}{1-e^{2x}}$'],
            correctAnswer: 1,
            explanation: '$\\frac{d}{dx}\\arcsin(e^x) = \\frac{e^x}{\\sqrt{1-(e^x)^2}} = \\frac{e^x}{\\sqrt{1-e^{2x}}}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\arccos(2x)$.',
            options: ['$\\frac{2}{\\sqrt{1-4x^2}}$', '$\\frac{-2}{\\sqrt{1-4x^2}}$', '$\\frac{-1}{\\sqrt{1-4x^2}}$', '$\\frac{2}{1+4x^2}$'],
            correctAnswer: 1,
            explanation: '$\\frac{d}{dx}\\arccos(2x) = \\frac{-2}{\\sqrt{1-(2x)^2}} = \\frac{-2}{\\sqrt{1-4x^2}}$.'
          }
        ]
      }
    },
    {
      id: 'chain5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the derivative technique** 🔍\n\nFor each function, select the best approach.',
      exercise: {
        dropdowns: [
          {
            label: '$y = x^{\\sin x}$',
            options: ['Power Rule', 'Exponential Rule ($a^x$)', 'Logarithmic Differentiation', 'Inverse Trig Formula'],
            correctAnswers: ['Logarithmic Differentiation'],
            hints: ['Both base ($x$) and exponent ($\\sin x$) are functions of $x$.'],
            explanation: 'Variable base AND variable exponent requires logarithmic differentiation.'
          },
          {
            label: '$y = \\arctan(x^3)$',
            options: ['Power Rule', 'Exponential Rule ($a^x$)', 'Logarithmic Differentiation', 'Inverse Trig Formula'],
            correctAnswers: ['Inverse Trig Formula'],
            hints: ['This is an inverse trig function with chain rule.'],
            explanation: '$\\frac{dy}{dx} = \\frac{3x^2}{1+x^6}$.'
          },
          {
            label: '$y = 3^{5x}$',
            options: ['Power Rule', 'Exponential Rule ($a^x$)', 'Logarithmic Differentiation', 'Inverse Trig Formula'],
            correctAnswers: ['Exponential Rule ($a^x$)'],
            hints: ['Constant base $3$, variable exponent $5x$.'],
            explanation: '$\\frac{dy}{dx} = 3^{5x} \\cdot \\ln 3 \\cdot 5 = 5\\ln(3) \\cdot 3^{5x}$.'
          },
          {
            label: '$y = (\\cos x)^7$',
            options: ['Power Rule + Chain Rule', 'Exponential Rule ($a^x$)', 'Logarithmic Differentiation', 'Inverse Trig Formula'],
            correctAnswers: ['Power Rule + Chain Rule'],
            hints: ['Constant exponent 7 with a function as the base.'],
            explanation: '$\\frac{dy}{dx} = 7(\\cos x)^6 \\cdot (-\\sin x) = -7\\cos^6(x)\\sin(x)$.'
          }
        ]
      }
    },
    {
      id: 'chain5-input',
      type: 'input-box' as const,
      content: '**Inverse trig computation.** ✍️',
      exercise: {
        question: 'Find $\\frac{d}{dx}[\\arctan(x)]$ evaluated at $x = 1$. Express your answer as a fraction.',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', '0.5', '0.50'],
        hints: [
          'The derivative of $\\arctan(x)$ is $\\frac{1}{1+x^2}$.',
          'Evaluate at $x = 1$: $\\frac{1}{1+1^2}$.',
          'What is $\\frac{1}{2}$?'
        ],
        explanation: '$\\frac{d}{dx}[\\arctan(x)] = \\frac{1}{1+x^2}$.\\n\\nAt $x = 1$: $\\frac{1}{1+1} = \\frac{1}{2}$.'
      }
    },
    {
      id: 'chain5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Technique | When to Use | Formula |
|:---:|:---:|:---:|
| Log Differentiation | $f(x)^{g(x)}$ | $\\ln$ both sides → implicit diff |
| Inverse Trig + Chain Rule | $\\arcsin(u)$, $\\arctan(u)$, etc. | Standard formulas × $u'$ |
| Exponential ($a^{f(x)}$) | Constant base | $a^{f(x)} \\ln(a) \\cdot f'(x)$ |

$$\\boxed{\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1+u^2} \\qquad \\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1-u^2}}}$$

> **Up Next:** Part 6 — Problem-Solving Workshop with mixed Chain Rule problems.`
    }
  ]
};
