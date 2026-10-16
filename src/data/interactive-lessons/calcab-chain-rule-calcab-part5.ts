export const calcabChainRulePart5Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain5-intro',
      type: 'text' as const,
      content: `# 🔗 Advanced Chain Rule Applications

**Part 5 of 7 — Exponential & Inverse Trig Chain Rule**

### Exponential and Logarithmic Functions with an Inside Function

The derivative rules for $e^x$, $a^x$ and $\\ln x$ each pick up a factor of $u'$ when the input is a function $u(x)$:

$$\\boxed{\\frac{d}{dx}e^{u} = e^{u}\\,u' \\qquad \\frac{d}{dx}a^{u} = a^{u}\\ln(a)\\,u' \\qquad \\frac{d}{dx}\\ln u = \\frac{u'}{u}}$$

> **Key Concept:** The outer function decides the formula; the inside function only contributes its derivative $u'$ as a factor.

### When to Use Each Technique

| Situation | Technique |
|:---:|:---:|
| $[f(x)]^n$ (constant exponent) | Power Rule + Chain Rule |
| $e^{f(x)}$ | $e^{f(x)} \\cdot f'(x)$ |
| $a^{f(x)}$ (constant base) | $a^{f(x)} \\ln(a) \\cdot f'(x)$ |
| $\\ln(f(x))$ | $\\frac{f'(x)}{f(x)}$ |`
    },
    {
      id: 'chain5-expchain',
      type: 'text' as const,
      content: `### Worked Example 1: $\\frac{d}{dx}5^{x^3}$

| Step | Work |
|------|------|
| Outer function | $5^{u}$ with $u = x^3$ |
| Outer derivative | $5^{u}\\ln 5 = 5^{x^3}\\ln 5$ |
| Times inner derivative | $5^{x^3}\\ln 5 \\cdot 3x^2$ |

$$\\boxed{\\frac{d}{dx}5^{x^3} = 3x^2\\,5^{x^3}\\ln 5}$$

### Worked Example 2: $\\frac{d}{dx}\\ln(\\cos 3x)$

| Step | Work |
|------|------|
| Outer function | $\\ln u$ with $u = \\cos 3x$ |
| Inner derivative | $u' = -3\\sin 3x$ (chain rule again, since the angle is $3x$) |
| Combine | $\\frac{u'}{u} = \\frac{-3\\sin 3x}{\\cos 3x} = -3\\tan 3x$ |

> **AP Tip:** Two layers of chain rule are common here: the outer $\\ln$ or exponential, then a trig function, then its angle. Work from the outside in and write one factor per layer.`
    },
    {
      id: 'chain5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential & Log Chain Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\, e^{\\sin(2x)}$.',
            options: ['$2\\cos(2x)\\,e^{\\sin(2x)}$', '$e^{\\sin(2x)}$', '$\\cos(2x)\\,e^{\\sin(2x)}$', '$\\sin(2x)\\,e^{\\sin(2x) - 1}$'],
            correctAnswer: 0,
            explanation: 'The outer function $e^u$ is its own derivative, then multiply by $u\' = \\frac{d}{dx}\\sin(2x) = 2\\cos(2x)$. Writing just $e^{\\sin(2x)}$ skips the chain rule, $\\cos(2x)\\,e^{\\sin(2x)}$ forgets the factor 2 from the angle, and $\\sin(2x)\\,e^{\\sin(2x) - 1}$ wrongly applies the power rule to an exponential.'
          },
          {
            question: 'If $g(x) = \\ln(x^2 + 4)$, what is $g\'(2)$?',
            options: ['$\\frac{1}{2}$', '$\\frac{1}{8}$', '$4$', '$\\ln 8$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = \\frac{2x}{x^2 + 4}$, so $g\'(2) = \\frac{4}{8} = \\frac{1}{2}$. Leaving out the inner derivative $2x$ gives $\\frac{1}{8}$, keeping only the inner derivative gives $4$, and $\\ln 8$ is $g(2)$, not $g\'(2)$.'
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
            explanation: '$\\frac{d}{dx}\\arcsin(e^x) = \\frac{e^x}{\\sqrt{1-(e^x)^2}} = \\frac{e^x}{\\sqrt{1-e^{2x}}}$. The $1 + u^2$ denominator with no square root belongs to arctangent.'
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
            label: '$y = \\ln(x^2 + 5)$',
            options: ['Power Rule + Chain Rule', 'Exponential Rule + Chain Rule', 'Log Rule + Chain Rule', 'Inverse Trig + Chain Rule'],
            correctAnswers: ['Log Rule + Chain Rule'],
            hints: ['The outer function is $\\ln u$ with $u = x^2 + 5$.'],
            explanation: '$\\frac{dy}{dx} = \\frac{u\'}{u} = \\frac{2x}{x^2 + 5}$.'
          },
          {
            label: '$y = \\arctan(x^3)$',
            options: ['Power Rule + Chain Rule', 'Exponential Rule + Chain Rule', 'Log Rule + Chain Rule', 'Inverse Trig + Chain Rule'],
            correctAnswers: ['Inverse Trig + Chain Rule'],
            hints: ['This is an inverse trig function with chain rule.'],
            explanation: '$\\frac{dy}{dx} = \\frac{3x^2}{1+x^6}$.'
          },
          {
            label: '$y = 3^{5x}$',
            options: ['Power Rule + Chain Rule', 'Exponential Rule + Chain Rule', 'Log Rule + Chain Rule', 'Inverse Trig + Chain Rule'],
            correctAnswers: ['Exponential Rule + Chain Rule'],
            hints: ['Constant base $3$, variable exponent $5x$.'],
            explanation: '$\\frac{dy}{dx} = 3^{5x} \\cdot \\ln 3 \\cdot 5 = 5\\ln(3) \\cdot 3^{5x}$.'
          },
          {
            label: '$y = (\\cos x)^7$',
            options: ['Power Rule + Chain Rule', 'Exponential Rule + Chain Rule', 'Log Rule + Chain Rule', 'Inverse Trig + Chain Rule'],
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
| Log Rule + Chain Rule | $\\ln(u)$ | $\\frac{u'}{u}$ |
| Inverse Trig + Chain Rule | $\\arcsin(u)$, $\\arctan(u)$, etc. | Standard formulas × $u'$ |
| Exponential ($e^{u}$, $a^{u}$) | Constant base | $e^{u}u'$, $a^{u} \\ln(a) \\cdot u'$ |

$$\\boxed{\\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1+u^2} \\qquad \\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1-u^2}}}$$

> **Up Next:** Part 6 — Problem-Solving Workshop with mixed Chain Rule problems.`
    }
  ]
};
