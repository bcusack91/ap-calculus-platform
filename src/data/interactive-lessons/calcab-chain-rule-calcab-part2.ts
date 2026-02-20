export const calcabChainRulePart2Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain2-intro',
      type: 'text' as const,
      content: `# 🔗 Nested Functions & Double Chain Rule

**Part 2 of 7 — Nested Functions**

### When the Chain Rule Applies Twice

Some functions have **three or more layers**. For example:

$$f(x) = \\sin^2(3x) = [\\sin(3x)]^2$$

Here we have three layers:
1. **Outermost:** $u^2$
2. **Middle:** $\\sin(v)$
3. **Innermost:** $v = 3x$

The Chain Rule applies at **each layer**, multiplying all the derivatives together.

### Worked Example 1

**Find** $\\frac{d}{dx}[\\sin(3x)]^2$

$$\\frac{d}{dx}[\\sin(3x)]^2 = 2\\sin(3x) \\cdot \\cos(3x) \\cdot 3 = 6\\sin(3x)\\cos(3x)$$

| Layer | Function | Derivative |
|-------|----------|-----------|
| Outer | $u^2$ | $2u = 2\\sin(3x)$ |
| Middle | $\\sin(v)$ | $\\cos(v) = \\cos(3x)$ |
| Inner | $3x$ | $3$ |
| **Result** | | $2\\sin(3x) \\cdot \\cos(3x) \\cdot 3 = 6\\sin(3x)\\cos(3x)$ |

### Worked Example 2

**Find** $\\frac{d}{dx}e^{\\cos(2x)}$

| Layer | Function | Derivative |
|-------|----------|-----------|
| Outer | $e^u$ | $e^{\\cos(2x)}$ |
| Middle | $\\cos(v)$ | $-\\sin(2x)$ |
| Inner | $2x$ | $2$ |
| **Result** | | $e^{\\cos(2x)} \\cdot (-\\sin(2x)) \\cdot 2 = -2\\sin(2x)e^{\\cos(2x)}$ |

### Worked Example 3

**Find** $\\frac{d}{dx}\\sqrt{\\ln(x)}$

Rewrite as $(\\ln x)^{1/2}$.

| Layer | Function | Derivative |
|-------|----------|-----------|
| Outer | $u^{1/2}$ | $\\frac{1}{2}(\\ln x)^{-1/2}$ |
| Inner | $\\ln x$ | $\\frac{1}{x}$ |
| **Result** | | $\\frac{1}{2\\sqrt{\\ln x}} \\cdot \\frac{1}{x} = \\frac{1}{2x\\sqrt{\\ln x}}$ |`
    },
    {
      id: 'chain2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differentiate these nested functions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[\\cos(2x)]^3$.',
            options: ['$3\\cos^2(2x) \\cdot (-\\sin(2x)) \\cdot 2$', '$3\\cos^2(2x)$', '$-6\\cos^2(2x)\\sin(2x)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: 'Outer: $3u^2 = 3\\cos^2(2x)$. Middle: $-\\sin(2x)$. Inner: $2$. So $3\\cos^2(2x)\\cdot(-\\sin(2x))\\cdot 2 = -6\\cos^2(2x)\\sin(2x)$. Options A and C are the same expression.'
          },
          {
            question: 'Find $\\frac{d}{dx}e^{x^3}$.',
            options: ['$e^{x^3}$', '$3x^2 e^{x^3}$', '$x^3 e^{x^3 - 1}$', '$3e^{x^3}$'],
            correctAnswer: 1,
            explanation: 'Outer: $e^u \\to e^{x^3}$. Inner: $x^3 \\to 3x^2$. Result: $3x^2 e^{x^3}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\ln(\\sin x)$.',
            options: ['$\\frac{1}{\\sin x}$', '$\\frac{\\cos x}{\\sin x} = \\cot x$', '$\\frac{1}{\\cos x}$', '$\\cos x \\cdot \\ln(\\sin x)$'],
            correctAnswer: 1,
            explanation: 'Outer: $\\ln(u) \\to \\frac{1}{u} = \\frac{1}{\\sin x}$. Inner: $\\sin x \\to \\cos x$. Result: $\\frac{\\cos x}{\\sin x} = \\cot x$.'
          }
        ]
      }
    },
    {
      id: 'chain2-text2',
      type: 'text' as const,
      content: `### Triple Chain Rule

Sometimes you have **four layers**. The process is the same — just keep peeling.

### Worked Example 4

**Find** $\\frac{d}{dx}\\sin^3(2x+1)$

This means $[\\sin(2x+1)]^3$:

| Layer | Derivative |
|-------|-----------|
| $u^3$ | $3[\\sin(2x+1)]^2$ |
| $\\sin(v)$ | $\\cos(2x+1)$ |
| $2x+1$ | $2$ |
| **Result** | $3\\sin^2(2x+1) \\cdot \\cos(2x+1) \\cdot 2 = 6\\sin^2(2x+1)\\cos(2x+1)$ |

### Common Mistake Alert ⚠️

Students often forget the **innermost derivative**. For $\\sin^2(3x)$, many write $2\\sin(3x)\\cos(3x)$ and forget the factor of $3$.

**Always ask:** "Is there another layer inside that I haven't differentiated yet?"`
    },
    {
      id: 'chain2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Multi-Layer Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[\\tan(x^2)]^2$.',
            options: ['$2\\tan(x^2)\\sec^2(x^2)$', '$4x\\tan(x^2)\\sec^2(x^2)$', '$2\\tan(x^2) \\cdot 2x$', '$2x\\sec^2(x^2)$'],
            correctAnswer: 1,
            explanation: 'Three layers: $u^2 \\to 2\\tan(x^2)$; $\\tan(v) \\to \\sec^2(x^2)$; $x^2 \\to 2x$. Multiply: $2\\tan(x^2) \\cdot \\sec^2(x^2) \\cdot 2x = 4x\\tan(x^2)\\sec^2(x^2)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}e^{\\sin(4x)}$.',
            options: ['$e^{\\sin(4x)} \\cdot \\cos(4x)$', '$4\\cos(4x)e^{\\sin(4x)}$', '$e^{\\cos(4x)} \\cdot 4$', '$\\sin(4x)e^{\\sin(4x)-1}$'],
            correctAnswer: 1,
            explanation: 'Three layers: $e^u \\to e^{\\sin(4x)}$; $\\sin(v) \\to \\cos(4x)$; $4x \\to 4$. Result: $e^{\\sin(4x)} \\cdot \\cos(4x) \\cdot 4 = 4\\cos(4x)e^{\\sin(4x)}$.'
          }
        ]
      }
    },
    {
      id: 'chain2-dropdown',
      type: 'dropdown-select' as const,
      content: '**How many Chain Rule applications?** 🔍\n\nFor each function, select how many times you must apply the Chain Rule.',
      exercise: {
        dropdowns: [
          { label: '$\\cos(5x)$', options: ['0 (no chain rule)', '1 time', '2 times', '3 times'] },
          { label: '$e^{\\sin(x^2)}$', options: ['0 (no chain rule)', '1 time', '2 times', '3 times'] },
          { label: '$\\ln(x)$', options: ['0 (no chain rule)', '1 time', '2 times', '3 times'] },
          { label: '$[\\cos(3x)]^4$', options: ['0 (no chain rule)', '1 time', '2 times', '3 times'] }
        ],
        correctAnswers: ['1 time', '2 times', '0 (no chain rule)', '2 times'],
        hint1: 'Count the number of nested layers beyond the outermost.',
        hint2: '$\\cos(5x)$ has 2 layers (cos and 5x), so 1 chain rule application.',
        hint3: '$e^{\\sin(x^2)}$ has 3 layers: $e^u$, $\\sin(v)$, $x^2$, so 2 chain rule applications.',
        explanation: '$\\cos(5x)$: 1 (inner $5x$). $e^{\\sin(x^2)}$: 2 ($\\sin$ then $x^2$). $\\ln(x)$: 0 (no composition). $[\\cos(3x)]^4$: 2 ($\\cos$ then $3x$).'
      }
    },
    {
      id: 'chain2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. **Nested functions** require the Chain Rule applied multiple times
2. **Multiply ALL layer derivatives** together — do not stop early
3. **Common mistake:** forgetting the innermost derivative
4. **Strategy:** Write out each layer, differentiate each, then multiply

> **Next up:** Implicit differentiation — using the Chain Rule when $y$ is a function of $x$.`
    }
  ]
};
