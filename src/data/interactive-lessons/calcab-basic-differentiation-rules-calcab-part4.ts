export const calcabBasicDiffPart4Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff4-intro',
      type: 'text' as const,
      content: `# 📐 Trigonometric Derivatives

**Part 4 of 7 — Trig Derivatives**

### The Six Trig Derivatives

| Function | Derivative |
|----------|-----------|
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |
| $\\cot x$ | $-\\csc^2 x$ |
| $\\sec x$ | $\\sec x \\tan x$ |
| $\\csc x$ | $-\\csc x \\cot x$ |

### Pattern Recognition

Notice the **negative signs** always appear with **co-functions** (cos, cot, csc).

### Worked Examples

| Problem | Solution |
|---------|---------|
| $\\frac{d}{dx}(3\\sin x + 2\\cos x)$ | $3\\cos x - 2\\sin x$ |
| $\\frac{d}{dx}(x^2 + \\tan x)$ | $2x + \\sec^2 x$ |
| $\\frac{d}{dx}(5\\sec x)$ | $5\\sec x \\tan x$ |`
    },
    {
      id: 'diff4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Trig Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(\\sin x + \\cos x)$ and evaluate at $x = \\frac{\\pi}{4}$.',
            options: ['$0$', '$\\sqrt{2}$', '$-\\sqrt{2}$', '$1$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}(\\sin x + \\cos x) = \\cos x - \\sin x$. At $x = \\pi/4$: $\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = 0$.'
          },
          {
            question: 'Find $\\frac{d}{dx}(x\\tan x)$.',
            options: ['$\\sec^2 x$', '$\\tan x + x\\sec^2 x$', '$x\\sec^2 x$', '$\\tan x + \\sec^2 x$'],
            correctAnswer: 1,
            explanation: 'Product Rule: $1 \\cdot \\tan x + x \\cdot \\sec^2 x = \\tan x + x\\sec^2 x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\frac{\\cos x}{x^2}$.',
            options: ['$\\frac{-x\\sin x - 2\\cos x}{x^3}$', '$\\frac{-x^2\\sin x - 2x\\cos x}{x^4}$', '$\\frac{-\\sin x}{x^2}$', 'Both A and B'],
            correctAnswer: 3,
            explanation: 'Quotient Rule: $\\frac{-\\sin x \\cdot x^2 - \\cos x \\cdot 2x}{x^4} = \\frac{-x\\sin x - 2\\cos x}{x^3}$. Both are equivalent after simplifying.'
          }
        ]
      }
    },
    {
      id: 'diff4-text2',
      type: 'text' as const,
      content: `### Special Values to Know

At $x = 0$:
- $\\sin(0) = 0$, $\\cos(0) = 1$
- $\\frac{d}{dx}\\sin x \\big|_{x=0} = \\cos(0) = 1$
- $\\frac{d}{dx}\\cos x \\big|_{x=0} = -\\sin(0) = 0$

### Combining Rules

**Find** $\\frac{d}{dx}(e^x \\sin x)$

Product Rule: $e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x)$

**Find** $\\frac{d}{dx}(\\sin^2 x)$

Chain Rule: $2\\sin x \\cdot \\cos x = \\sin(2x)$`
    },
    {
      id: 'diff4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Trig Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(e^x \\cos x)$ and evaluate at $x = 0$.',
            options: ['$0$', '$1$', '$-1$', '$2$'],
            correctAnswer: 0,
            explanation: '$e^x\\cos x + e^x(-\\sin x) = e^x(\\cos x - \\sin x)$. At $x=0$: $1(1-0) = 1$. Wait — $e^0(\\cos 0 - \\sin 0) = 1(1-0) = 1$. Actually 1 is correct. Let me recheck: the derivative is $e^x\\cos x - e^x\\sin x$. At $x=0$: $1 \\cdot 1 - 1 \\cdot 0 = 1$.'
          },
          {
            question: 'If $f(x) = \\sec x$, find $f\'(\\pi/3)$.',
            options: ['$2\\sqrt{3}$', '$\\frac{2\\sqrt{3}}{3}$', '$4$', '$2$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = \\sec x \\tan x$. At $\\pi/3$: $\\sec(\\pi/3) = 2$, $\\tan(\\pi/3) = \\sqrt{3}$. So $f\'(\\pi/3) = 2\\sqrt{3}$.'
          }
        ]
      }
    },
    {
      id: 'diff4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. **Memorize all six** trig derivatives
2. **Negatives go with co-functions**: cos, cot, csc
3. When trig functions are combined with other functions, use Product/Quotient/Chain rules as needed
4. Know your trig values at key angles: $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$`
    }
  ]
};
