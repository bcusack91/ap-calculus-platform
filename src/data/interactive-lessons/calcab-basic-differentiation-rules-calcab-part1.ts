export const calcabBasicDiffPart1Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff1-intro',
      type: 'text' as const,
      content: `# 📐 Basic Differentiation Rules

**Part 1 of 7 — The Power Rule**

### The Power Rule

The most fundamental differentiation rule:

$$\\frac{d}{dx}[x^n] = nx^{n-1}$$

This works for **any real exponent** $n$ — positive, negative, fractional, or zero.

### Examples with Positive Integer Exponents

| Function | Derivative |
|----------|-----------|
| $x^5$ | $5x^4$ |
| $x^{100}$ | $100x^{99}$ |
| $x^1 = x$ | $1$ |

### Constant Multiple Rule

$$\\frac{d}{dx}[cf(x)] = c \\cdot f'(x)$$

Constants just "come along for the ride."

| Function | Derivative |
|----------|-----------|
| $7x^3$ | $21x^2$ |
| $-4x^5$ | $-20x^4$ |
| $\\frac{1}{2}x^8$ | $4x^7$ |

### Sum/Difference Rule

$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$$

Differentiate **term by term**.

### Worked Example

**Find** $\\frac{d}{dx}(3x^4 - 5x^2 + 7x - 2)$

$$= 12x^3 - 10x + 7$$

Each term differentiated independently: $3(4x^3) - 5(2x) + 7(1) - 0$.`
    },
    {
      id: 'diff1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differentiate using the Power Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(4x^3 - 2x + 9)$.',
            options: ['$12x^2 - 2$', '$12x^2 - 2x$', '$4x^2 - 2$', '$12x^3 - 2$'],
            correctAnswer: 0,
            explanation: '$4(3x^2) - 2(1) + 0 = 12x^2 - 2$. The constant 9 vanishes.'
          },
          {
            question: 'Find $f\'(x)$ for $f(x) = x^7 - 3x^5 + \\frac{1}{4}x^4$.',
            options: ['$7x^6 - 15x^4 + x^3$', '$7x^6 - 15x^4 + 4x^3$', '$7x^6 - 15x^4 + \\frac{1}{4}x^3$', '$7x^8 - 15x^6 + x^5$'],
            correctAnswer: 0,
            explanation: '$7x^6 - 3(5x^4) + \\frac{1}{4}(4x^3) = 7x^6 - 15x^4 + x^3$.'
          }
        ]
      }
    },
    {
      id: 'diff1-text2',
      type: 'text' as const,
      content: `### Negative and Fractional Exponents

**Rewrite first**, then apply the Power Rule:

| Original | Rewrite | Derivative |
|----------|---------|-----------|
| $\\frac{1}{x^3}$ | $x^{-3}$ | $-3x^{-4} = -\\frac{3}{x^4}$ |
| $\\frac{5}{x^2}$ | $5x^{-2}$ | $-10x^{-3} = -\\frac{10}{x^3}$ |
| $\\sqrt{x}$ | $x^{1/2}$ | $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$ |
| $\\sqrt[3]{x^2}$ | $x^{2/3}$ | $\\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$ |

### Worked Example

**Find** $\\frac{d}{dx}\\left(\\frac{3}{x^2} + 4\\sqrt{x}\\right)$

$$= \\frac{d}{dx}(3x^{-2} + 4x^{1/2}) = -6x^{-3} + 2x^{-1/2} = -\\frac{6}{x^3} + \\frac{2}{\\sqrt{x}}$$`
    },
    {
      id: 'diff1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Negative & Fractional Exponents** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{4}{x^3}$.',
            options: ['$\\frac{12}{x^4}$', '$-\\frac{12}{x^4}$', '$-\\frac{4}{x^4}$', '$\\frac{4}{3x^2}$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $4x^{-3}$. Derivative: $4(-3)x^{-4} = -12x^{-4} = -\\frac{12}{x^4}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}(3\\sqrt[3]{x})$.',
            options: ['$\\frac{3}{3x^{2/3}}$', '$\\frac{1}{x^{2/3}}$', '$\\frac{1}{\\sqrt[3]{x^2}}$', 'All of the above'],
            correctAnswer: 3,
            explanation: '$3x^{1/3} \\to 3 \\cdot \\frac{1}{3}x^{-2/3} = x^{-2/3} = \\frac{1}{x^{2/3}} = \\frac{1}{\\sqrt[3]{x^2}}$. All are equivalent.'
          }
        ]
      }
    },
    {
      id: 'diff1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. **Power Rule:** $\\frac{d}{dx}x^n = nx^{n-1}$ for any real $n$
2. **Constants vanish:** $\\frac{d}{dx}[c] = 0$
3. **Constant multiples pass through:** $\\frac{d}{dx}[cf(x)] = cf'(x)$
4. **Sum/Difference:** differentiate term by term
5. **Always rewrite** roots and fractions as power expressions first`
    }
  ]
};
