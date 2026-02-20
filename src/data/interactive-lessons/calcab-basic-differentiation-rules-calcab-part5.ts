export const calcabBasicDiffPart5Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff5-intro',
      type: 'text' as const,
      content: `# 📐 Higher-Order Derivatives

**Part 5 of 7 — Higher-Order Derivatives**

### What Are Higher-Order Derivatives?

The **second derivative** is the derivative of the derivative:

$$f''(x) = \\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[\\frac{dy}{dx}\\right]$$

Similarly for the third derivative and beyond.

### Physical Interpretation

| Derivative | Meaning |
|-----------|---------|
| $f(t)$ | Position |
| $f'(t)$ | Velocity (rate of change of position) |
| $f''(t)$ | Acceleration (rate of change of velocity) |
| $f^{(3)}(t)$ | Jerk (rate of change of acceleration) |

### Worked Example 1

**Find** $f''(x)$ for $f(x) = x^5 - 3x^3 + 2x$

| Step | Result |
|------|--------|
| $f'(x)$ | $5x^4 - 9x^2 + 2$ |
| $f''(x)$ | $20x^3 - 18x$ |

### Worked Example 2

**Find** $\\frac{d^2y}{dx^2}$ for $y = e^{2x}$

| Step | Result |
|------|--------|
| $y'$ | $2e^{2x}$ |
| $y''$ | $4e^{2x}$ |

Pattern: $\\frac{d^n}{dx^n}e^{2x} = 2^n e^{2x}$`
    },
    {
      id: 'diff5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Find Higher-Order Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $f\'\'(x)$ for $f(x) = x^4 - 6x^2 + 5$.',
            options: ['$4x^3 - 12x$', '$12x^2 - 12$', '$24x$', '$4x^2 - 6$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 4x^3 - 12x$. $f\'\'(x) = 12x^2 - 12$.'
          },
          {
            question: 'If $y = \\sin x$, what is $\\frac{d^4y}{dx^4}$?',
            options: ['$\\sin x$', '$-\\sin x$', '$\\cos x$', '$-\\cos x$'],
            correctAnswer: 0,
            explanation: '$y\' = \\cos x$, $y\'\' = -\\sin x$, $y\'\'\' = -\\cos x$, $y^{(4)} = \\sin x$. The cycle repeats every 4 derivatives!'
          },
          {
            question: 'A particle has position $s(t) = t^3 - 6t^2 + 9t$. Find the acceleration at $t = 2$.',
            options: ['$0$', '$-3$', '$6$', '$-6$'],
            correctAnswer: 0,
            explanation: '$v(t) = s\'(t) = 3t^2 - 12t + 9$. $a(t) = v\'(t) = 6t - 12$. At $t=2$: $a(2) = 12 - 12 = 0$.'
          }
        ]
      }
    },
    {
      id: 'diff5-text2',
      type: 'text' as const,
      content: `### Concavity and the Second Derivative

The second derivative tells us about **concavity**:
- $f''(x) > 0$: graph is **concave up** (holds water, like a cup)
- $f''(x) < 0$: graph is **concave down** (spills water, like a hill)
- $f^{\\prime\\prime}(x) = 0$: possible **inflection point** (concavity may change)

### Worked Example 3

**Find where** $f(x) = x^3 - 3x$ **is concave up.**

$f''(x) = 6x$. Concave up when $6x > 0$, i.e., $x > 0$.

> **AP Tip:** The relationship between $f$, $f'$, and $f''$ is tested extensively. Know what each tells you about the graph.`
    },
    {
      id: 'diff5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Second Derivative Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = x^4 - 4x^3$, find the $x$-coordinate(s) of inflection points.',
            options: ['$x = 0$ only', '$x = 2$ only', '$x = 0$ and $x = 2$', '$x = 3$ only'],
            correctAnswer: 2,
            explanation: '$f\'\'(x) = 12x^2 - 24x = 12x(x-2) = 0$ at $x = 0, 2$. Sign changes at both, so both are inflection points.'
          },
          {
            question: 'If $f\'\'(3) = -7$ and $f\'(3) = 0$, what can you conclude about $x = 3$?',
            options: ['$x = 3$ is a local minimum', '$x = 3$ is a local maximum', '$x = 3$ is an inflection point', 'Not enough information'],
            correctAnswer: 1,
            explanation: '$f\'(3) = 0$ means critical point. $f\'\'(3) < 0$ means concave down. By the Second Derivative Test, $x = 3$ is a local maximum.'
          }
        ]
      }
    },
    {
      id: 'diff5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. **Second derivative** = derivative of the derivative
2. **Physical meaning:** position → velocity → acceleration
3. **Concavity:** $f'' > 0$ = concave up, $f'' < 0$ = concave down
4. **Inflection points** occur where $f''$ changes sign
5. **Second Derivative Test:** at critical points, $f'' > 0$ = local min, $f'' < 0$ = local max`
    }
  ]
};
