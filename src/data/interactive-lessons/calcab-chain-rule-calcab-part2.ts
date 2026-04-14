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

The general formula for nested compositions:

$$\\boxed{\\frac{d}{dx}[f(g(h(x)))] = f'(g(h(x))) \\cdot g'(h(x)) \\cdot h'(x)}$$

> **Key Concept:** Each layer contributes one factor. Count layers = count factors in the derivative.`
    },
    {
      id: 'chain2-examples',
      type: 'text' as const,
      content: `### Worked Examples — Layer-by-Layer

**Example 1:** $\\frac{d}{dx}[\\sin(3x)]^2$

| Layer | Function | Derivative |
|-------|----------|-----------|
| Outer | $u^2$ | $2u = 2\\sin(3x)$ |
| Middle | $\\sin(v)$ | $\\cos(v) = \\cos(3x)$ |
| Inner | $3x$ | $3$ |
| **Result** | | $2\\sin(3x) \\cdot \\cos(3x) \\cdot 3 = 6\\sin(3x)\\cos(3x)$ |

> **Bonus:** By the double-angle identity, $6\\sin(3x)\\cos(3x) = 3\\sin(6x)$.

---

**Example 2:** $\\frac{d}{dx}e^{\\cos(2x)}$

| Layer | Function | Derivative |
|-------|----------|-----------|
| Outer | $e^u$ | $e^{\\cos(2x)}$ |
| Middle | $\\cos(v)$ | $-\\sin(2x)$ |
| Inner | $2x$ | $2$ |
| **Result** | | $-2\\sin(2x)\\,e^{\\cos(2x)}$ |

---

**Example 3:** $\\frac{d}{dx}\\sqrt{\\ln x} = \\frac{d}{dx}(\\ln x)^{1/2}$

| Layer | Derivative |
|-------|-----------|
| $(\\cdot)^{1/2}$ | $\\frac{1}{2}(\\ln x)^{-1/2}$ |
| $\\ln x$ | $\\frac{1}{x}$ |
| **Result** | $\\frac{1}{2x\\sqrt{\\ln x}}$ |

---

**Example 4:** $\\frac{d}{dx}\\sin^3(2x+1) = \\frac{d}{dx}[\\sin(2x+1)]^3$

| Layer | Derivative |
|-------|-----------|
| $u^3$ | $3[\\sin(2x+1)]^2$ |
| $\\sin(v)$ | $\\cos(2x+1)$ |
| $2x+1$ | $2$ |
| **Result** | $6\\sin^2(2x+1)\\cos(2x+1)$ |

> **AP Tip:** Students commonly write $2\\sin(3x)\\cos(3x)$ for $\\frac{d}{dx}\\sin^2(3x)$ — forgetting the factor of $3$ from the innermost layer. **Always ask:** "Is there another layer inside?"`
    },
    {
      id: 'chain2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Nested Chain Rule Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[\\cos(2x)]^3$.',
            options: ['$3\\cos^2(2x) \\cdot (-\\sin(2x)) \\cdot 2$', '$3\\cos^2(2x)$', '$-6\\cos^2(2x)\\sin(2x)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: 'Outer: $3u^2 = 3\\cos^2(2x)$. Middle: $-\\sin(2x)$. Inner: $2$. Product: $-6\\cos^2(2x)\\sin(2x)$. Options A and C are the same expression.'
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
            explanation: 'Outer: $\\ln(u) \\to \\frac{1}{\\sin x}$. Inner: $\\sin x \\to \\cos x$. Multiply: $\\frac{\\cos x}{\\sin x} = \\cot x$.'
          }
        ]
      }
    },
    {
      id: 'chain2-counting',
      type: 'text' as const,
      content: `### How Many Chain Rule Applications?

> **Key Fact:** The number of chain rule applications = number of layers minus 1.

| Function | Layers | Chain Rule Applications |
|:---:|:---:|:---:|
| $\\sin(x)$ | 1 | 0 |
| $\\sin(5x)$ | 2 (sin, 5x) | 1 |
| $\\sin^2(5x)$ | 3 (square, sin, 5x) | 2 |
| $e^{\\sin^2(5x)}$ | 4 (exp, square, sin, 5x) | 3 |

### Strategy: Peel from the Outside In

$$\\boxed{\\text{Step 1: Identify outermost operation. Step 2: Differentiate it. Step 3: Repeat for each inner layer. Step 4: Multiply all factors.}}$$

### Common Nested Patterns on the AP Exam

| Pattern | Derivative |
|:---:|:---:|
| $\\sin^n(ax)$ | $na\\sin^{n-1}(ax)\\cos(ax)$ |
| $e^{f(x)^2}$ | $2f(x)f'(x)\\,e^{f(x)^2}$ |
| $\\ln(f(g(x)))$ | $\\frac{g'(x) \\cdot f'(g(x))}{f(g(x))}$ |
| $[f(g(x))]^n$ | $n[f(g(x))]^{n-1} \\cdot f'(g(x)) \\cdot g'(x)$ |`
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
            explanation: 'Three layers: $u^2 \\to 2\\tan(x^2)$; $\\tan(v) \\to \\sec^2(x^2)$; $x^2 \\to 2x$. Multiply: $4x\\tan(x^2)\\sec^2(x^2)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}e^{\\sin(4x)}$.',
            options: ['$e^{\\sin(4x)} \\cdot \\cos(4x)$', '$4\\cos(4x)\\,e^{\\sin(4x)}$', '$e^{\\cos(4x)} \\cdot 4$', '$\\sin(4x)\\,e^{\\sin(4x)-1}$'],
            correctAnswer: 1,
            explanation: 'Three layers: $e^u \\to e^{\\sin(4x)}$; $\\sin(v) \\to \\cos(4x)$; $4x \\to 4$. Result: $4\\cos(4x)\\,e^{\\sin(4x)}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\ln(\\cos(3x))$.',
            options: ['$\\frac{1}{\\cos(3x)}$', '$-3\\tan(3x)$', '$\\frac{-\\sin(3x)}{\\cos(3x)}$', '$3\\cot(3x)$'],
            correctAnswer: 1,
            explanation: 'Outer: $\\frac{1}{\\cos(3x)}$. Middle: $-\\sin(3x)$. Inner: $3$. Product: $\\frac{-3\\sin(3x)}{\\cos(3x)} = -3\\tan(3x)$.'
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
          {
            label: '$\\cos(5x)$',
            options: ['0 (no chain rule)', '1 time', '2 times', '3 times'],
            correctAnswers: ['1 time'],
            hints: ['Two layers: cos and 5x. One chain rule application.'],
            explanation: 'Layers: $\\cos(u)$ and $u=5x$. One application: $-5\\sin(5x)$.'
          },
          {
            label: '$e^{\\sin(x^2)}$',
            options: ['0 (no chain rule)', '1 time', '2 times', '3 times'],
            correctAnswers: ['2 times'],
            hints: ['Three layers: $e^u$, $\\sin(v)$, $x^2$. Two chain rule applications.'],
            explanation: 'Three layers means two chain rule applications: $2x\\cos(x^2)\\,e^{\\sin(x^2)}$.'
          },
          {
            label: '$\\ln(x)$',
            options: ['0 (no chain rule)', '1 time', '2 times', '3 times'],
            correctAnswers: ['0 (no chain rule)'],
            hints: ['There is no composition here — just a basic function of $x$.'],
            explanation: 'No composition, so zero chain rule applications. Just $\\frac{1}{x}$.'
          },
          {
            label: '$[\\cos(3x)]^4$',
            options: ['0 (no chain rule)', '1 time', '2 times', '3 times'],
            correctAnswers: ['2 times'],
            hints: ['Three layers: power, cos, and $3x$.'],
            explanation: 'Layers: $u^4$, $\\cos(v)$, $3x$. Two applications: $-12\\cos^3(3x)\\sin(3x)$.'
          }
        ]
      }
    },
    {
      id: 'chain2-input',
      type: 'input-box' as const,
      content: '**Double Chain Rule computation.** ✍️',
      exercise: {
        question: 'Let $f(x) = e^{\\sin(2x)}$. Find $f\'(0)$.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: [
          'Two chain rule applications: $e^u$, $\\sin(v)$, $2x$.',
          '$f\'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cos(2x)\\,e^{\\sin(2x)}$.',
          'At $x=0$: $\\sin(0)=0$, $\\cos(0)=1$, $e^0=1$. So $f\'(0) = 2(1)(1)$.'
        ],
        explanation: '$f\'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cos(2x)\\,e^{\\sin(2x)}$.\\n\\nAt $x=0$: $f\'(0) = 2\\cos(0)\\,e^{\\sin(0)} = 2(1)(e^0) = 2(1)(1) = 2$.'
      }
    },
    {
      id: 'chain2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

$$\\boxed{\\frac{d}{dx}[f(g(h(x)))] = f'(g(h(x))) \\cdot g'(h(x)) \\cdot h'(x)}$$

| Mistake | Correct Approach |
|---------|-----------------|
| Stop after first layer | Multiply ALL layer derivatives |
| Confuse order of layers | Work outside → in |
| Forget innermost derivative | Always check the innermost layer |
| Differentiate the inner function | Leave the inner function **unchanged** inside the outer derivative |

> **Up Next:** Part 3 — Implicit Differentiation using the Chain Rule.`
    }
  ]
};
