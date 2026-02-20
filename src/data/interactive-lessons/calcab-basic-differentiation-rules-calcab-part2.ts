export const calcabBasicDiffPart2Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff2-intro',
      type: 'text' as const,
      content: `# 📐 The Product Rule

**Part 2 of 7 — Product Rule**

### Why Can't We Just Multiply the Derivatives?

A common mistake: $\\frac{d}{dx}[f(x) \\cdot g(x)] \\neq f'(x) \\cdot g'(x)$

**Quick proof it fails:** $\\frac{d}{dx}[x \\cdot x] = \\frac{d}{dx}[x^2] = 2x$, but $1 \\cdot 1 = 1 \\neq 2x$.

### The Product Rule

$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

**Memory aid:** "first times derivative of second, plus second times derivative of first" — or simply **"$f'g + fg'$"**.

### Worked Example 1

**Find** $\\frac{d}{dx}[x^2 \\sin x]$

| Part | Value |
|------|-------|
| $f = x^2$, $f' = 2x$ | $g = \\sin x$, $g' = \\cos x$ |
| Product Rule | $2x \\sin x + x^2 \\cos x$ |

### Worked Example 2

**Find** $\\frac{d}{dx}[e^x \\ln x]$

$$= e^x \\cdot \\ln x + e^x \\cdot \\frac{1}{x} = e^x\\left(\\ln x + \\frac{1}{x}\\right)$$`
    },
    {
      id: 'diff2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Product Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[x^3 \\cos x]$.',
            options: ['$3x^2 \\cos x - x^3 \\sin x$', '$3x^2 \\cos x + x^3 \\sin x$', '$-3x^2 \\sin x$', '$3x^2 \\cos x$'],
            correctAnswer: 0,
            explanation: '$f\' g + fg\' = 3x^2 \\cos x + x^3(-\\sin x) = 3x^2 \\cos x - x^3 \\sin x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[(2x+1)(x^2-3)]$.',
            options: ['$2(x^2-3) + (2x+1)(2x)$', '$6x^2 + 2x - 6$', '$2 \\cdot 2x$', 'Both A and B'],
            correctAnswer: 3,
            explanation: 'Product Rule: $2(x^2-3) + (2x+1)(2x) = 2x^2-6+4x^2+2x = 6x^2+2x-6$. Both expressions are equivalent.'
          }
        ]
      }
    },
    {
      id: 'diff2-text2',
      type: 'text' as const,
      content: `### When to Use Product Rule vs. Expand

Sometimes it is easier to **expand first**:
- $(2x+1)(x^2-3)$ → expand to $2x^3 + x^2 - 6x - 3$, then differentiate term by term

But when expansion is impractical (e.g., $x^5 e^x$ or $\\sin x \\ln x$), the Product Rule is essential.

### Worked Example 3

**Find** $\\frac{d}{dx}[x e^x]$ and evaluate at $x = 0$

$$\\frac{d}{dx}[xe^x] = e^x + xe^x = e^x(1+x)$$

At $x = 0$: $e^0(1+0) = 1$.

> **AP Tip:** The Product Rule is frequently tested. Know it cold.`
    },
    {
      id: 'diff2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Product Rule Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 e^x$, find $f\'(1)$.',
            options: ['$2e$', '$3e$', '$e$', '$4e$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 2xe^x + x^2e^x = e^x(2x + x^2)$. At $x=1$: $e(2+1) = 3e$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\sin x \\cos x]$.',
            options: ['$\\cos^2 x - \\sin^2 x$', '$-\\sin x \\cos x$', '$\\cos(2x)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x) = \\cos^2 x - \\sin^2 x = \\cos(2x)$ by double-angle identity.'
          }
        ]
      }
    },
    {
      id: 'diff2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. **Product Rule:** $(fg)' = f'g + fg'$
2. **Do NOT** multiply derivatives: $(fg)' \\neq f'g'$
3. Consider expanding if both factors are polynomials
4. Factor common terms in your answer when possible`
    }
  ]
};
