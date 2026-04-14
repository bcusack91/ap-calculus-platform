export const calcabChainRulePart7Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain7-intro',
      type: 'text' as const,
      content: `# 🔗 Chain Rule — Comprehensive Review

**Part 7 of 7 — Review & Final Assessment**

### Complete Chain Rule Summary

$$\\boxed{\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)}$$

| Scenario | Technique | Key Formula |
|:---:|:---:|:---:|
| Basic composition | Chain Rule | $f'(g(x)) \\cdot g'(x)$ |
| Nested (3+ layers) | Repeated Chain Rule | Multiply ALL layer derivatives |
| Implicit ($y$ as fn of $x$) | Implicit Differentiation | Attach $\\frac{dy}{dx}$ to every $y$ term |
| Rates changing w.r.t. time | Related Rates | Differentiate w.r.t. $t$ |
| $f(x)^{g(x)}$ | Log Differentiation | $\\ln$ both sides → implicit diff |
| $\\arcsin(u)$, $\\arctan(u)$ | Inverse Trig + Chain | Standard formula $\\times u'$ |
| FTC Part 1 | FTC + Chain | $f(g(x)) \\cdot g'(x)$ |

### AP Exam Frequency

> **Key Fact:** The Chain Rule appears in ~80% of all derivative problems on the AP exam. It is embedded in:
> - All implicit differentiation problems
> - All related rates problems
> - FTC Part 1 with variable upper limit
> - Most trig, exponential, and logarithmic derivatives`
    },
    {
      id: 'chain7-reference',
      type: 'text' as const,
      content: `### Quick Reference — All Chain Rule Patterns

| Function | Derivative |
|:---:|:---:|
| $[g(x)]^n$ | $n[g(x)]^{n-1} \\cdot g'(x)$ |
| $\\sin(g(x))$ | $\\cos(g(x)) \\cdot g'(x)$ |
| $\\cos(g(x))$ | $-\\sin(g(x)) \\cdot g'(x)$ |
| $\\tan(g(x))$ | $\\sec^2(g(x)) \\cdot g'(x)$ |
| $e^{g(x)}$ | $e^{g(x)} \\cdot g'(x)$ |
| $a^{g(x)}$ | $a^{g(x)} \\ln(a) \\cdot g'(x)$ |
| $\\ln(g(x))$ | $\\frac{g'(x)}{g(x)}$ |
| $\\arcsin(g(x))$ | $\\frac{g'(x)}{\\sqrt{1-[g(x)]^2}}$ |
| $\\arctan(g(x))$ | $\\frac{g'(x)}{1+[g(x)]^2}$ |

### Common Errors to Avoid

| Error | Example | Correct |
|:---:|:---:|:---:|
| Forgetting inner derivative | $\\frac{d}{dx}\\sin(3x) = \\cos(3x)$ | $3\\cos(3x)$ |
| Confusing constant vs variable exponent | Treating $2^x$ like $x^2$ | $2^x\\ln 2$ vs $2x$ |
| Missing Product Rule | $\\frac{d}{dx}[x\\sin(x)] = \\cos(x)$ | $\\sin(x) + x\\cos(x)$ |
| Forgetting $\\frac{dy}{dx}$ in implicit | $2y$ instead of $2y\\frac{dy}{dx}$ | Always attach $\\frac{dy}{dx}$ |
| Substituting before differentiating | In related rates | Always differentiate first |`
    },
    {
      id: 'chain7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment — Part A** 🎯\n\nNo hints — test your mastery.',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\sin(e^{2x})$.',
            options: ['$\\cos(e^{2x})$', '$2e^{2x}\\cos(e^{2x})$', '$e^{2x}\\cos(e^{2x})$', '$2\\cos(e^{2x})$'],
            correctAnswer: 1,
            explanation: 'Outer: $\\cos(e^{2x})$. Inner chain: $e^{2x} \\cdot 2 = 2e^{2x}$. Product: $2e^{2x}\\cos(e^{2x})$.'
          },
          {
            question: 'Find $\\frac{dy}{dx}$ for $y^2 + \\sin(xy) = 5$.',
            options: ['$\\frac{-y\\cos(xy)}{2y + x\\cos(xy)}$', '$\\frac{y\\cos(xy)}{2y - x\\cos(xy)}$', '$\\frac{-\\cos(xy)}{2y}$', '$\\frac{-2y}{\\cos(xy)}$'],
            correctAnswer: 0,
            explanation: '$2y\\frac{dy}{dx} + \\cos(xy)(y + x\\frac{dy}{dx}) = 0$. Expand: $(2y + x\\cos(xy))\\frac{dy}{dx} = -y\\cos(xy)$. Solve: $\\frac{dy}{dx} = \\frac{-y\\cos(xy)}{2y + x\\cos(xy)}$.'
          },
          {
            question: 'If $f(x) = \\ln(x^2 + e^x)$, find $f\'(0)$.',
            options: ['$1$', '$\\frac{1}{2}$', '$0$', '$2$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = \\frac{2x + e^x}{x^2 + e^x}$. At $x = 0$: $f\'(0) = \\frac{0 + 1}{0 + 1} = 1$.'
          }
        ]
      }
    },
    {
      id: 'chain7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment — Part B** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $h(x) = f(g(x))$, $g(2) = 5$, $g\'(2) = 3$, $f\'(5) = -4$, find $h\'(2)$.',
            options: ['$-12$', '$-20$', '$15$', '$-7$'],
            correctAnswer: 0,
            explanation: '$h\'(2) = f\'(g(2)) \\cdot g\'(2) = f\'(5) \\cdot 3 = (-4)(3) = -12$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\cos^2(x) - \\sin^2(x)]$.',
            options: ['$-2\\sin(2x)$', '$-4\\sin(x)\\cos(x)$', '$2\\cos(2x)$', 'Both A and B'],
            correctAnswer: 3,
            explanation: '$-2\\cos x \\sin x - 2\\sin x \\cos x = -4\\sin x\\cos x = -2\\sin(2x)$. A and B are equivalent.'
          },
          {
            question: "A sphere's volume increases at $100$ cm$^3$/s. How fast is the radius increasing when $r = 5$?",
            options: ['$\\frac{1}{\\pi}$ cm/s', '$\\frac{1}{2\\pi}$ cm/s', '$\\frac{100}{\\pi}$ cm/s', '$\\pi$ cm/s'],
            correctAnswer: 0,
            explanation: '$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. $\\frac{dr}{dt} = \\frac{100}{4\\pi(25)} = \\frac{100}{100\\pi} = \\frac{1}{\\pi}$ cm/s.'
          }
        ]
      }
    },
    {
      id: 'chain7-ftc',
      type: 'text' as const,
      content: `### FTC Part 1 + Chain Rule

This is one of the most important AP Calculus formulas:

$$\\boxed{\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)}$$

**Example 1:** $\\frac{d}{dx}\\int_0^{x^2} \\sin(t)\\,dt = \\sin(x^2) \\cdot 2x = 2x\\sin(x^2)$

**Example 2:** $\\frac{d}{dx}\\int_1^{e^x} \\frac{1}{t}\\,dt = \\frac{1}{e^x} \\cdot e^x = 1$

**Example 3:** Both limits variable:

$$\\frac{d}{dx}\\int_{x}^{x^2} t^3\\,dt = (x^2)^3 \\cdot 2x - x^3 \\cdot 1 = 2x^7 - x^3$$

> **AP Tip:** FTC + Chain Rule appears on nearly every AP exam. The key is: "plug in the upper limit for $t$, then multiply by the derivative of that upper limit."`
    },
    {
      id: 'chain7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Matching** 🔍\n\nSelect the correct derivative.',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}\\int_0^{3x} \\cos(t)\\,dt$',
            options: ['$\\cos(3x)$', '$3\\cos(3x)$', '$\\sin(3x)$', '$3\\sin(3x)$'],
            correctAnswers: ['$3\\cos(3x)$'],
            hints: ['FTC + Chain Rule: plug in $3x$ for $t$, multiply by $(3x)\' = 3$.'],
            explanation: '$\\cos(3x) \\cdot 3 = 3\\cos(3x)$.'
          },
          {
            label: '$\\frac{d}{dx}[\\arctan(x^2)]$',
            options: ['$\\frac{1}{1+x^4}$', '$\\frac{2x}{1+x^4}$', '$\\frac{x}{1+x^2}$', '$\\frac{2x}{\\sqrt{1-x^4}}$'],
            correctAnswers: ['$\\frac{2x}{1+x^4}$'],
            hints: ['Inverse trig: $\\frac{(x^2)\'}{1+(x^2)^2} = \\frac{2x}{1+x^4}$.'],
            explanation: '$\\frac{d}{dx}\\arctan(x^2) = \\frac{2x}{1+x^4}$.'
          },
          {
            label: '$\\frac{d}{dx}[e^{\\ln x}]$',
            options: ['$e^{\\ln x} \\cdot \\frac{1}{x}$', '$1$', '$e^{\\ln x}$', 'Both A and B and C'],
            correctAnswers: ['Both A and B and C'],
            hints: ['$e^{\\ln x} = x$, so its derivative is $1$. But also by chain rule: $e^{\\ln x} \\cdot \\frac{1}{x} = x \\cdot \\frac{1}{x} = 1$.'],
            explanation: '$e^{\\ln x} = x$, so $\\frac{d}{dx}x = 1$. All three expressions equal 1.'
          }
        ]
      }
    },
    {
      id: 'chain7-input',
      type: 'input-box' as const,
      content: '**Final Challenge** ✍️',
      exercise: {
        question: 'If $h(x) = f(g(x))$ where $g(3) = 2$, $g\'(3) = 5$, and $f\'(2) = -3$, find $h\'(3)$.',
        correctAnswer: '-15',
        acceptableAnswers: ['-15', '-15.0'],
        hints: [
          'Chain Rule: $h\'(3) = f\'(g(3)) \\cdot g\'(3)$.',
          '$g(3) = 2$, so you need $f\'(2) = -3$.',
          'Multiply: $(-3)(5) = ?$'
        ],
        explanation: '$h\'(3) = f\'(g(3)) \\cdot g\'(3) = f\'(2) \\cdot 5 = (-3)(5) = -15$.'
      }
    },
    {
      id: 'chain7-summary',
      type: 'text' as const,
      content: `### Chain Rule — Complete! ✅

| Topic | Mastered |
|:---:|:---:|
| Basic Chain Rule | $f'(g(x)) \\cdot g'(x)$ |
| Nested Functions | Multiply all layer derivatives |
| Implicit Differentiation | Attach $\\frac{dy}{dx}$ to $y$ terms |
| Related Rates | Differentiate w.r.t. $t$ |
| Log Differentiation | $\\ln$ both sides for $f(x)^{g(x)}$ |
| Inverse Trig + Chain | Standard formulas $\\times u'$ |
| FTC + Chain Rule | $f(g(x)) \\cdot g'(x)$ |
| Table-Based Problems | Look up $g(a)$, then $f'(g(a))$ |

**The Chain Rule is the single most important differentiation technique. You are now ready to tackle any derivative problem on the AP exam!**`
    }
  ]
};
