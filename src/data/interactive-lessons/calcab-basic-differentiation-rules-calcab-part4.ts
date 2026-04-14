export const calcabBasicDiffPart4Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff4-intro',
      type: 'text' as const,
      content: `# 📐 Trigonometric Derivatives

**Part 4 of 7 — Trig Derivatives**

### The Six Trigonometric Derivatives

These must be **memorized perfectly** for the AP exam:

$$\\boxed{\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x}$$

$$\\boxed{\\frac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\frac{d}{dx}[\\cot x] = -\\csc^2 x}$$

$$\\boxed{\\frac{d}{dx}[\\sec x] = \\sec x \\tan x \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x \\cot x}$$

### Pattern Recognition — The Negative Sign Rule

> **Key Fact:** The **co-functions** (cos, cot, csc) ALL have **negative** derivatives. The regular functions (sin, tan, sec) have positive derivatives.

| Regular Function | Derivative (Positive) | Co-Function | Derivative (Negative) |
|:---:|:---:|:---:|:---:|
| $\\sin x$ | $\\cos x$ | $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ | $\\cot x$ | $-\\csc^2 x$ |
| $\\sec x$ | $\\sec x \\tan x$ | $\\csc x$ | $-\\csc x \\cot x$ |

### Another Pattern — Squared vs. Product

| Function | Derivative Type |
|----------|----------------|
| $\\tan x$ → $\\sec^2 x$ | **Squared** function |
| $\\cot x$ → $-\\csc^2 x$ | **Squared** function |
| $\\sec x$ → $\\sec x \\tan x$ | **Product** of two trig functions |
| $\\csc x$ → $-\\csc x \\cot x$ | **Product** of two trig functions |`
    },
    {
      id: 'diff4-examples',
      type: 'text' as const,
      content: `### Worked Examples — Basic Trig Derivatives

| Problem | Solution | Rule Used |
|---------|---------|-----------|
| $\\frac{d}{dx}(3\\sin x + 2\\cos x)$ | $3\\cos x - 2\\sin x$ | Constant Multiple + Sum |
| $\\frac{d}{dx}(x^2 + \\tan x)$ | $2x + \\sec^2 x$ | Power + Trig |
| $\\frac{d}{dx}(5\\sec x)$ | $5\\sec x \\tan x$ | Constant Multiple |
| $\\frac{d}{dx}(-\\csc x + \\pi)$ | $\\csc x \\cot x$ | Trig + Constant |

### Key Angle Values Reference

| Angle | $\\sin$ | $\\cos$ | $\\tan$ | $\\sec$ |
|:---:|:---:|:---:|:---:|:---:|
| $0$ | $0$ | $1$ | $0$ | $1$ |
| $\\frac{\\pi}{6}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{3}}{3}$ | $\\frac{2\\sqrt{3}}{3}$ |
| $\\frac{\\pi}{4}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ | $\\sqrt{2}$ |
| $\\frac{\\pi}{3}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ | $2$ |
| $\\frac{\\pi}{2}$ | $1$ | $0$ | undef | undef |

> **AP Tip:** You need instant recall of trig values at these angles. The derivative questions almost always evaluate at one of these special angles.`
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
            explanation: 'Product Rule: $(1)(\\tan x) + (x)(\\sec^2 x) = \\tan x + x\\sec^2 x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\frac{\\cos x}{x^2}$.',
            options: ['$\\frac{-x\\sin x - 2\\cos x}{x^3}$', '$\\frac{-x^2\\sin x - 2x\\cos x}{x^4}$', '$\\frac{-\\sin x}{x^2}$', 'Both A and B'],
            correctAnswer: 3,
            explanation: 'Quotient Rule: $\\frac{(-\\sin x)(x^2) - (\\cos x)(2x)}{(x^2)^2} = \\frac{-x^2\\sin x - 2x\\cos x}{x^4}$. Factor $x$: $\\frac{-x\\sin x - 2\\cos x}{x^3}$.'
          }
        ]
      }
    },
    {
      id: 'diff4-combining',
      type: 'text' as const,
      content: `### Combining Trig Derivatives with Product & Quotient Rules

**Example 1:** $\\frac{d}{dx}(e^x \\sin x)$

Product Rule: $e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x)$

At $x = 0$: $e^0(0 + 1) = 1$

---

**Example 2:** $\\frac{d}{dx}\\left(\\frac{\\tan x}{x}\\right)$

Quotient Rule: $\\frac{\\sec^2 x \\cdot x - \\tan x \\cdot 1}{x^2} = \\frac{x\\sec^2 x - \\tan x}{x^2}$

---

**Example 3:** $\\frac{d}{dx}(x^2 \\sec x)$

Product Rule: $2x \\sec x + x^2 \\sec x \\tan x = x\\sec x(2 + x\\tan x)$

> **Key Concept:** When combining trig derivatives with Product/Quotient Rule, always set up the table ($f, f', g, g'$) to stay organized and avoid sign errors.`
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
            correctAnswer: 1,
            explanation: '$\\frac{d}{dx}(e^x\\cos x) = e^x\\cos x + e^x(-\\sin x) = e^x(\\cos x - \\sin x)$. At $x=0$: $e^0(1-0) = 1$.'
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
      id: 'diff4-proofs',
      type: 'text' as const,
      content: `### Where Do Trig Derivatives Come From?

The derivatives of $\\sin x$ and $\\cos x$ come from the **limit definition**:

$$\\frac{d}{dx}[\\sin x] = \\lim_{h \\to 0} \\frac{\\sin(x+h) - \\sin x}{h}$$

Using the angle addition formula $\\sin(x+h) = \\sin x \\cos h + \\cos x \\sin h$:

$$= \\lim_{h \\to 0} \\frac{\\sin x(\\cos h - 1) + \\cos x \\sin h}{h} = \\sin x \\cdot 0 + \\cos x \\cdot 1 = \\cos x$$

This relies on the special limits: $\\lim_{h \\to 0}\\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0}\\frac{\\cos h - 1}{h} = 0$.

### The other four come from $\\sin x$ and $\\cos x$:

| Derivative | Derived Using |
|-----------|---------------|
| $\\frac{d}{dx}[\\tan x] = \\sec^2 x$ | Quotient Rule on $\\frac{\\sin x}{\\cos x}$ |
| $\\frac{d}{dx}[\\cot x] = -\\csc^2 x$ | Quotient Rule on $\\frac{\\cos x}{\\sin x}$ |
| $\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$ | Quotient Rule on $\\frac{1}{\\cos x}$ |
| $\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$ | Quotient Rule on $\\frac{1}{\\sin x}$ |`
    },
    {
      id: 'diff4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Complete the derivative.**',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}[\\csc x] = $',
            options: ['$-\\csc x \\cot x$', '$\\csc x \\cot x$', '$-\\sec x \\tan x$', '$\\sec x \\cot x$'],
            correctAnswers: ['$-\\csc x \\cot x$'],
            hints: ['Co-functions have negative derivatives. csc is a co-function of sec.'],
            explanation: 'The co-function rule: $\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$. Note the negative sign.'
          },
          {
            label: '$\\frac{d}{dx}[3\\tan x - 2\\sec x]$ at $x = 0$ equals:',
            options: ['$1$', '$3$', '$-2$', '$5$'],
            correctAnswers: ['$3$'],
            hints: ['$\\frac{d}{dx} = 3\\sec^2 x - 2\\sec x \\tan x$. Evaluate at $x=0$: $\\sec(0)=1$, $\\tan(0)=0$.'],
            explanation: '$3\\sec^2(0) - 2\\sec(0)\\tan(0) = 3(1)^2 - 2(1)(0) = 3 - 0 = 3$.'
          }
        ]
      }
    },
    {
      id: 'diff4-input',
      type: 'input-box' as const,
      content: '**Trig derivative evaluation.** ✍️',
      exercise: {
        question: 'Let $f(x) = \\sin x + \\tan x$. Find $f\'(0)$.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: [
          '$f\'(x) = \\cos x + \\sec^2 x$.',
          'At $x = 0$: $\\cos(0) = 1$ and $\\sec(0) = 1$.',
          '$f\'(0) = 1 + 1^2 = ?$'
        ],
        explanation: '$f\'(x) = \\cos x + \\sec^2 x$.\\n\\nAt $x = 0$: $\\cos(0) + \\sec^2(0) = 1 + 1 = 2$.'
      }
    },
    {
      id: 'diff4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Must Memorize | Derivative |
|:---:|:---:|
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |
| $\\cot x$ | $-\\csc^2 x$ |
| $\\sec x$ | $\\sec x \\tan x$ |
| $\\csc x$ | $-\\csc x \\cot x$ |

**Memory checklist:**
1. Co-functions → **negative** sign (cos, cot, csc)
2. tan and cot → **squared** results ($\\sec^2$, $\\csc^2$)
3. sec and csc → **product** results (sec·tan, csc·cot)
4. Know exact trig values at $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$

> **Up Next:** Part 5 — Higher-Order Derivatives.`
    }
  ]
};
