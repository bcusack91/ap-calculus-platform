export const calcabBasicDiffPart3Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff3-intro',
      type: 'text' as const,
      content: `# 📐 The Quotient Rule

**Part 3 of 7 — Quotient Rule**

### The Quotient Rule

$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**Memory aid:** "Low d-High minus High d-Low, over Low squared" — $\\frac{gf' - fg'}{g^2}$... actually the standard is $\\frac{f'g - fg'}{g^2}$.

### Worked Example 1

**Find** $\\frac{d}{dx}\\frac{x^2}{\\sin x}$

| Part | Value |
|------|-------|
| $f = x^2$, $f' = 2x$ | $g = \\sin x$, $g' = \\cos x$ |
| Quotient Rule | $\\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}$ |

### Worked Example 2

**Find** $\\frac{d}{dx}\\frac{e^x}{x+1}$

$$= \\frac{e^x(x+1) - e^x(1)}{(x+1)^2} = \\frac{e^x \\cdot x}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$$

> **Pro tip:** Sometimes you can avoid the Quotient Rule by rewriting: $\\frac{1}{x^3} = x^{-3}$, then use the Power Rule.`
    },
    {
      id: 'diff3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Quotient Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{x}{x+2}$.',
            options: ['$\\frac{2}{(x+2)^2}$', '$\\frac{1}{(x+2)^2}$', '$\\frac{x+2-x}{(x+2)^2}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{1 \\cdot (x+2) - x \\cdot 1}{(x+2)^2} = \\frac{2}{(x+2)^2}$. Options A and C give the same result.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\frac{\\sin x}{x}$.',
            options: ['$\\frac{x\\cos x - \\sin x}{x^2}$', '$\\frac{\\cos x}{x}$', '$\\cos x - \\frac{\\sin x}{x^2}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$. This can be split as $\\frac{\\cos x}{x} - \\frac{\\sin x}{x^2}$.'
          }
        ]
      }
    },
    {
      id: 'diff3-text2',
      type: 'text' as const,
      content: `### Deriving Trig Derivatives via Quotient Rule

The Quotient Rule lets us derive the derivatives of $\\tan x$, $\\cot x$, $\\sec x$, and $\\csc x$:

$$\\frac{d}{dx}\\tan x = \\frac{d}{dx}\\frac{\\sin x}{\\cos x} = \\frac{\\cos x \\cdot \\cos x - \\sin x(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$$

### When to Avoid the Quotient Rule

If the denominator is just a constant, do NOT use the Quotient Rule:
$$\\frac{d}{dx}\\frac{x^3 + 2x}{5} = \\frac{1}{5}(3x^2 + 2)$$

If you can rewrite as a negative exponent, that is often simpler:
$$\\frac{3}{x^4} = 3x^{-4} \\implies \\frac{d}{dx} = -12x^{-5}$$`
    },
    {
      id: 'diff3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quotient Rule Mastery** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{x^2 + 1}{x^2 - 1}$ and evaluate at $x = 2$.',
            options: ['$-\\frac{4}{9}$', '$\\frac{4}{9}$', '$-\\frac{4x}{(x^2-1)^2}$ evaluated gives $-\\frac{8}{9}$', '$\\frac{-4x}{(x^2-1)^2}$ evaluated gives $-\\frac{8}{9}$'],
            correctAnswer: 3,
            explanation: '$\\frac{2x(x^2-1)-(x^2+1)(2x)}{(x^2-1)^2} = \\frac{2x(x^2-1-x^2-1)}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2}$. At $x=2$: $\\frac{-8}{9}$.'
          },
          {
            question: 'Use the quotient rule to verify: $\\frac{d}{dx}\\cot x = -\\csc^2 x$. What is $\\frac{d}{dx}\\frac{\\cos x}{\\sin x}$?',
            options: ['$\\frac{-\\sin^2 x - \\cos^2 x}{\\sin^2 x} = -\\csc^2 x$', '$\\frac{-1}{\\sin^2 x}$', '$-\\csc^2 x$', 'All of the above'],
            correctAnswer: 3,
            explanation: '$\\frac{-\\sin x \\cdot \\sin x - \\cos x \\cdot \\cos x}{\\sin^2 x} = \\frac{-(\\sin^2 x + \\cos^2 x)}{\\sin^2 x} = \\frac{-1}{\\sin^2 x} = -\\csc^2 x$.'
          }
        ]
      }
    },
    {
      id: 'diff3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. **Quotient Rule:** $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$
2. The **minus sign** in the numerator is the most common source of errors
3. Avoid the Quotient Rule when the denominator is a constant or a simple power of $x$
4. The Quotient Rule derives all reciprocal trig derivatives`
    }
  ]
};
