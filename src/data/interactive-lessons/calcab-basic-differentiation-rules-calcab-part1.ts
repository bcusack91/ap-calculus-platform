export const calcabBasicDiffPart1Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff1-intro',
      type: 'text' as const,
      content: `# 📐 Basic Differentiation Rules

**Part 1 of 7 — The Power Rule & Foundational Rules**

Welcome to differentiation! This topic covers the rules you'll use on **every single calculus problem**.

| Part | Topic |
|------|-------|
| **1** | **Power Rule & Foundational Rules** |
| 2 | Product Rule |
| 3 | Quotient Rule |
| 4 | Trigonometric Derivatives |
| 5 | Higher-Order Derivatives |
| 6 | Mixed Differentiation Problems |
| 7 | Comprehensive Review & AP Applications |

---

### The Power Rule

The single most important differentiation rule:

$$\\boxed{\\frac{d}{dx}[x^n] = n x^{n-1} \\quad \\text{for any real } n}$$

> **Key Fact:** The Power Rule works for ALL real exponents — positive, negative, fractional, irrational, even $n = 0$. When $n = 0$: $\\frac{d}{dx}[x^0] = \\frac{d}{dx}[1] = 0$.

### Step-by-Step Process

1. Identify the exponent $n$
2. Bring $n$ down as a coefficient (multiply)
3. Subtract 1 from the exponent

| Function | Exponent $n$ | Derivative |
|----------|:---:|-----------|
| $x^5$ | $5$ | $5x^4$ |
| $x^{100}$ | $100$ | $100x^{99}$ |
| $x^1 = x$ | $1$ | $1 \\cdot x^0 = 1$ |
| $x^0 = 1$ | $0$ | $0 \\cdot x^{-1} = 0$ |`
    },
    {
      id: 'diff1-constant',
      type: 'text' as const,
      content: `### Constant Rule & Constant Multiple Rule

$$\\boxed{\\frac{d}{dx}[c] = 0 \\qquad \\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)}$$

Constants vanish when differentiated. Constants attached to functions "pass through" the derivative.

| Function | Rule Applied | Derivative |
|----------|:---:|-----------|
| $7$ | Constant Rule | $0$ |
| $\\pi^2$ | Constant Rule | $0$ |
| $7x^3$ | Constant Multiple | $7 \\cdot 3x^2 = 21x^2$ |
| $-4x^5$ | Constant Multiple | $-4 \\cdot 5x^4 = -20x^4$ |
| $\\frac{1}{2}x^8$ | Constant Multiple | $\\frac{1}{2} \\cdot 8x^7 = 4x^7$ |

> ⚠️ **Common Mistake:** Students sometimes think $\\frac{d}{dx}[\\pi^2] = 2\\pi$. Remember: $\\pi$ is a **constant**, not a variable! The derivative is $0$.

### Sum & Difference Rule

$$\\boxed{\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)}$$

Differentiate each term independently — linearity of the derivative.

### Worked Example

**Find** $\\frac{d}{dx}(3x^4 - 5x^2 + 7x - 2)$

| Term | Power Rule | Result |
|------|-----------|--------|
| $3x^4$ | $3(4x^3)$ | $12x^3$ |
| $-5x^2$ | $-5(2x)$ | $-10x$ |
| $7x$ | $7(1)$ | $7$ |
| $-2$ | constant | $0$ |

$$\\frac{d}{dx}(3x^4 - 5x^2 + 7x - 2) = 12x^3 - 10x + 7$$`
    },
    {
      id: 'diff1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Power Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(4x^3 - 2x + 9)$.',
            options: ['$12x^2 - 2$', '$12x^2 - 2x$', '$4x^2 - 2$', '$12x^3 - 2$'],
            correctAnswer: 0,
            explanation: '$4(3x^2) - 2(1) + 0 = 12x^2 - 2$. The constant 9 vanishes and $x$ has exponent 1, so it becomes the coefficient 1 times $-2$.'
          },
          {
            question: 'Find $f\'(x)$ for $f(x) = x^7 - 3x^5 + \\frac{1}{4}x^4$.',
            options: ['$7x^6 - 15x^4 + x^3$', '$7x^6 - 15x^4 + 4x^3$', '$7x^6 - 15x^4 + \\frac{1}{4}x^3$', '$7x^8 - 15x^6 + x^5$'],
            correctAnswer: 0,
            explanation: '$7x^6 - 3(5x^4) + \\frac{1}{4}(4x^3) = 7x^6 - 15x^4 + x^3$. Note how the $\\frac{1}{4}$ and the $4$ from the exponent cancel.'
          }
        ]
      }
    },
    {
      id: 'diff1-rewrite',
      type: 'text' as const,
      content: `### Negative and Fractional Exponents

> **Key Principle:** Before applying the Power Rule, **rewrite** all roots, fractions, and radicals using exponential notation.

**Rewrite Rules:**

$$\\frac{1}{x^n} = x^{-n} \\qquad \\sqrt[n]{x^m} = x^{m/n}$$

| Original | Rewrite | Power Rule | Final Form |
|----------|---------|-----------|------------|
| $\\frac{1}{x^3}$ | $x^{-3}$ | $-3x^{-4}$ | $-\\frac{3}{x^4}$ |
| $\\frac{5}{x^2}$ | $5x^{-2}$ | $-10x^{-3}$ | $-\\frac{10}{x^3}$ |
| $\\sqrt{x}$ | $x^{1/2}$ | $\\frac{1}{2}x^{-1/2}$ | $\\frac{1}{2\\sqrt{x}}$ |
| $\\sqrt[3]{x^2}$ | $x^{2/3}$ | $\\frac{2}{3}x^{-1/3}$ | $\\frac{2}{3\\sqrt[3]{x}}$ |
| $\\frac{1}{\\sqrt{x}}$ | $x^{-1/2}$ | $-\\frac{1}{2}x^{-3/2}$ | $-\\frac{1}{2x\\sqrt{x}}$ |

### Worked Example

**Find** $\\frac{d}{dx}\\left(\\frac{3}{x^2} + 4\\sqrt{x} - \\frac{7}{\\sqrt[3]{x}}\\right)$

**Step 1 — Rewrite:** $3x^{-2} + 4x^{1/2} - 7x^{-1/3}$

**Step 2 — Differentiate:** $-6x^{-3} + 2x^{-1/2} + \\frac{7}{3}x^{-4/3}$

**Step 3 — Simplify:** $-\\frac{6}{x^3} + \\frac{2}{\\sqrt{x}} + \\frac{7}{3\\sqrt[3]{x^4}}$

> **AP Tip:** On the AP exam, you do NOT need to simplify your answer. Leaving the derivative in negative-exponent form is perfectly acceptable and saves time!`
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
            explanation: '$3x^{1/3} \\to 3 \\cdot \\frac{1}{3}x^{-2/3} = x^{-2/3} = \\frac{1}{x^{2/3}} = \\frac{1}{\\sqrt[3]{x^2}}$. All are equivalent forms.'
          }
        ]
      }
    },
    {
      id: 'diff1-special',
      type: 'text' as const,
      content: `### Special Derivatives to Memorize

Beyond the Power Rule, these constants arise frequently:

$$\\boxed{\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}}$$

$$\\boxed{\\frac{d}{dx}[a^x] = a^x \\ln a \\qquad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}}$$

| Function | Derivative | Note |
|----------|-----------|------|
| $e^x$ | $e^x$ | Only function equal to its derivative |
| $\\ln x$ | $\\frac{1}{x}$ | Domain: $x > 0$ |
| $2^x$ | $2^x \\ln 2$ | General exponential pattern |
| $10^x$ | $10^x \\ln 10$ | Common in applications |
| $\\log_{10} x$ | $\\frac{1}{x \\ln 10}$ | Common log derivative |

> **Key Fact:** $e^x$ is the only function that equals its own derivative (up to constant multiples). This is why $e$ is so special in calculus!`
    },
    {
      id: 'diff1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each function to its derivative.**',
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = x^{-4}$  →  $f\'(x) = $',
            options: ['$-4x^{-5}$', '$4x^{-3}$', '$-4x^{-3}$', '$-\\frac{1}{4}x^{-5}$'],
            correctAnswers: ['$-4x^{-5}$'],
            hints: ['Bring the $-4$ down and subtract 1 from the exponent.'],
            explanation: '$\\frac{d}{dx}[x^{-4}] = -4x^{-4-1} = -4x^{-5}$.'
          },
          {
            label: '$g(x) = 5e^x + 3\\ln x$  →  $g\'(x) = $',
            options: ['$5e^x + \\frac{3}{x}$', '$5xe^{x-1} + 3\\ln x$', '$e^x + \\frac{3}{x}$', '$5e^x + 3x$'],
            correctAnswers: ['$5e^x + \\frac{3}{x}$'],
            hints: ['The derivative of $e^x$ is $e^x$. The derivative of $\\ln x$ is $1/x$.'],
            explanation: '$5e^x + 3 \\cdot \\frac{1}{x} = 5e^x + \\frac{3}{x}$. Constants pass through.'
          },
          {
            label: '$h(x) = \\sqrt[4]{x^3}$  →  $h\'(x) = $',
            options: ['$\\frac{3}{4}x^{-1/4}$', '$\\frac{4}{3}x^{1/3}$', '$\\frac{3}{4}x^{3/4}$', '$\\frac{3}{4\\sqrt[4]{x}}$'],
            correctAnswers: ['$\\frac{3}{4}x^{-1/4}$', '$\\frac{3}{4\\sqrt[4]{x}}$'],
            hints: ['Rewrite as $x^{3/4}$ first, then apply Power Rule.'],
            explanation: '$x^{3/4} \\to \\frac{3}{4}x^{3/4 - 1} = \\frac{3}{4}x^{-1/4}$.'
          }
        ]
      }
    },
    {
      id: 'diff1-input',
      type: 'input-box' as const,
      content: '**Find the derivative and evaluate.** ✍️',
      exercise: {
        question: 'Let $f(x) = 2x^3 - \\frac{6}{x} + 4\\sqrt{x}$. Find $f\'(1)$.',
        correctAnswer: '14',
        acceptableAnswers: ['14', '14.0'],
        hints: [
          'Rewrite as $f(x) = 2x^3 - 6x^{-1} + 4x^{1/2}$.',
          '$f\'(x) = 6x^2 + 6x^{-2} + 2x^{-1/2}$.',
          'Evaluate each term at $x = 1$: $6(1) + 6(1) + 2(1) = ?$'
        ],
        explanation: 'Rewrite: $f(x) = 2x^3 - 6x^{-1} + 4x^{1/2}$.\\n\\nDifferentiate: $f\'(x) = 6x^2 + 6x^{-2} + 2x^{-1/2}$.\\n\\nEvaluate: $f\'(1) = 6(1)^2 + 6(1)^{-2} + 2(1)^{-1/2} = 6 + 6 + 2 = 14$.'
      }
    },
    {
      id: 'diff1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Rule | Formula |
|------|---------|
| **Power Rule** | $\\frac{d}{dx}[x^n] = nx^{n-1}$ |
| **Constant Rule** | $\\frac{d}{dx}[c] = 0$ |
| **Constant Multiple** | $\\frac{d}{dx}[cf(x)] = cf'(x)$ |
| **Sum/Difference** | $\\frac{d}{dx}[f \\pm g] = f' \\pm g'$ |
| **Exponential** | $\\frac{d}{dx}[e^x] = e^x$ |
| **Natural Log** | $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$ |

**Workflow for any polynomial/power derivative:**
1. **Rewrite** all roots and fractions as power expressions
2. **Apply** Power Rule term by term (bring down exponent, subtract 1)
3. **Simplify** if desired (not required on AP exam)

> **Up Next:** Part 2 — The Product Rule, for when two functions are multiplied together.`
    }
  ]
};
