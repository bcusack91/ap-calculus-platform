export const calcabChainRulePart7Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain7-intro',
      type: 'text' as const,
      content: `# 🔗 Chain Rule Review

**Part 7 of 7 — Review & Applications**

### Complete Chain Rule Summary

| Scenario | Formula |
|----------|---------|
| Basic Chain Rule | $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$ |
| Nested (double) | Multiply ALL layer derivatives |
| Implicit | Differentiate $y$ terms, attach $\\frac{dy}{dx}$ |
| Related Rates | Differentiate with respect to $t$ |
| Log Differentiation | Take $\\ln$, differentiate implicitly |

### AP Exam Frequency

The Chain Rule appears in:
- **~80% of all derivative problems** (it is rarely absent)
- **All implicit differentiation** problems
- **All related rates** problems
- **FTC Part 1** problems involving $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt$`
    },
    {
      id: 'chain7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment** 🎯\n\nNo hints — test your mastery.',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\sin(e^{2x})$.',
            options: ['$\\cos(e^{2x})$', '$2e^{2x}\\cos(e^{2x})$', '$e^{2x}\\cos(e^{2x})$', '$2\\cos(e^{2x})$'],
            correctAnswer: 1,
            explanation: 'Outer: $\\cos(e^{2x})$. Middle to inner: $e^{2x} \\cdot 2 = 2e^{2x}$. Result: $2e^{2x}\\cos(e^{2x})$.'
          },
          {
            question: 'Find $\\frac{dy}{dx}$ for $y^2 + \\sin(xy) = 5$.',
            options: ['$\\frac{-y\\cos(xy)}{2y + x\\cos(xy)}$', '$\\frac{y\\cos(xy)}{2y - x\\cos(xy)}$', '$\\frac{-\\cos(xy)}{2y}$', '$\\frac{-2y}{\\cos(xy)}$'],
            correctAnswer: 0,
            explanation: 'Differentiate: $2y\\frac{dy}{dx} + \\cos(xy)(y + x\\frac{dy}{dx}) = 0$. Expand: $2y\\frac{dy}{dx} + y\\cos(xy) + x\\cos(xy)\\frac{dy}{dx} = 0$. Factor: $\\frac{dy}{dx}(2y + x\\cos(xy)) = -y\\cos(xy)$. Result: $\\frac{dy}{dx} = \\frac{-y\\cos(xy)}{2y + x\\cos(xy)}$.'
          },
          {
            question: 'If $f(x) = \\ln(x^2 + e^x)$, find $f\'(0)$.',
            options: ['$1$', '$\\frac{1}{2}$', '$0$', '$2$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = \\frac{2x + e^x}{x^2 + e^x}$. At $x = 0$: $f\'(0) = \\frac{0 + 1}{0 + 1} = 1$.'
          },
          {
            question: 'A spherical balloon\'s volume increases at $100$ cm$^3$/s. How fast is the radius increasing when $r = 5$ cm?',
            options: ['$\\frac{1}{\\pi}$ cm/s', '$\\frac{100}{100\\pi} = \\frac{1}{\\pi}$ cm/s', '$\\frac{100}{4\\pi(25)} = \\frac{1}{\\pi}$ cm/s', 'All of the above'],
            correctAnswer: 3,
            explanation: '$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. So $\\frac{dr}{dt} = \\frac{100}{4\\pi(25)} = \\frac{1}{\\pi}$ cm/s. All three options express the same answer.'
          }
        ]
      }
    },
    {
      id: 'chain7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final Challenge** 🎯',
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
            explanation: '$\\frac{d}{dx}[\\cos^2 x - \\sin^2 x] = 2\\cos x(-\\sin x) - 2\\sin x(\\cos x) = -4\\sin x\\cos x = -2\\sin(2x)$. Both A and B are equivalent by double-angle identity.'
          }
        ]
      }
    },
    {
      id: 'chain7-summary',
      type: 'text' as const,
      content: `### Chain Rule — Complete! ✅

You have mastered:
- ✅ Basic Chain Rule with single composition
- ✅ Nested functions requiring multiple applications
- ✅ Implicit differentiation
- ✅ Related rates
- ✅ Logarithmic differentiation
- ✅ Inverse trig with Chain Rule
- ✅ Combining Chain Rule with Product and Quotient Rules

**You are ready to tackle any Chain Rule problem on the AP exam!**`
    }
  ]
};
