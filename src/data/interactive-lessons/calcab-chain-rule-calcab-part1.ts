export const calcabChainRulePart1Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain1-intro',
      type: 'text' as const,
      content: `# 🔗 The Chain Rule

**Part 1 of 7 — Chain Rule Basics**

Welcome to the Chain Rule — arguably the most important differentiation rule in calculus!

| Part | Topic |
|------|-------|
| **1** | **Chain Rule Basics** |
| 2 | Nested Functions & Double Chain Rule |
| 3 | Implicit Differentiation |
| 4 | Related Rates |
| 5 | Advanced Applications |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Review |

### Why Do We Need the Chain Rule?

So far, you can differentiate functions like $x^3$, $\\sin x$, or $e^x$. But what about **composite functions** — functions inside other functions?

- $(3x + 1)^5$ — expanding this is painful
- $\\sin(x^2)$ — can't use basic trig rule directly
- $e^{3x}$ — the exponent isn't just $x$

The Chain Rule handles ALL of these.

### The Chain Rule Formula

$$\\boxed{\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)}$$

In words: **differentiate the outer function** (leaving the inner function untouched), then **multiply by the derivative of the inner function**.

### Leibniz Notation

If $y = f(u)$ where $u = g(x)$, then:

$$\\boxed{\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}}$$

> **Key Fact:** The Chain Rule is needed whenever you see a function INSIDE another function. It appears in ~80% of all derivative problems on the AP exam.`
    },
    {
      id: 'chain1-examples',
      type: 'text' as const,
      content: `### Worked Examples — Step by Step

**Example 1:** Find $\\frac{d}{dx}(3x+1)^5$

| Step | Work |
|------|------|
| Identify layers | Outer: $u^5$, Inner: $u = 3x+1$ |
| Differentiate outer | $5u^4 = 5(3x+1)^4$ |
| Differentiate inner | $\\frac{d}{dx}(3x+1) = 3$ |
| Multiply | $5(3x+1)^4 \\cdot 3 = 15(3x+1)^4$ |

---

**Example 2:** Find $\\frac{d}{dx}\\sin(x^2)$

| Step | Work |
|------|------|
| Identify layers | Outer: $\\sin(u)$, Inner: $u = x^2$ |
| Differentiate outer | $\\cos(u) = \\cos(x^2)$ |
| Differentiate inner | $\\frac{d}{dx}(x^2) = 2x$ |
| Multiply | $\\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$ |

---

**Example 3:** Find $\\frac{d}{dx}\\sqrt{x^2 + 1}$

Rewrite: $\\sqrt{x^2+1} = (x^2+1)^{1/2}$

| Step | Work |
|------|------|
| Outer derivative | $\\frac{1}{2}(x^2+1)^{-1/2}$ |
| Inner derivative | $2x$ |
| Chain Rule | $\\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$ |

---

**Example 4:** Find $\\frac{d}{dx}e^{-x^2}$

| Step | Work |
|------|------|
| Outer: $e^u$ | $e^{-x^2}$ (unchanged) |
| Inner: $u = -x^2$ | $-2x$ |
| Chain Rule | $e^{-x^2} \\cdot (-2x) = -2xe^{-x^2}$ |

> **AP Tip:** The most common Chain Rule error is **forgetting to multiply by the inner derivative**. Always ask: "Did I multiply by the derivative of what's inside?"`
    },
    {
      id: 'chain1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Chain Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(2x - 7)^4$.',
            options: ['$4(2x-7)^3$', '$8(2x-7)^3$', '$4(2)^3$', '$2(2x-7)^4$'],
            correctAnswer: 1,
            explanation: 'Outer: $u^4 \\Rightarrow 4u^3 = 4(2x-7)^3$. Inner: $2x-7 \\Rightarrow 2$. Multiply: $4(2x-7)^3 \\cdot 2 = 8(2x-7)^3$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\cos(5x)$.',
            options: ['$-\\sin(5x)$', '$-5\\sin(5x)$', '$5\\cos(5x)$', '$-5\\cos(5x)$'],
            correctAnswer: 1,
            explanation: 'Outer: $\\cos(u) \\Rightarrow -\\sin(u)$. Inner: $5x \\Rightarrow 5$. Multiply: $-\\sin(5x) \\cdot 5 = -5\\sin(5x)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}e^{4x}$.',
            options: ['$e^{4x}$', '$4e^{4x}$', '$e^{4}$', '$4xe^{4x-1}$'],
            correctAnswer: 1,
            explanation: 'Outer: $e^u \\Rightarrow e^u = e^{4x}$. Inner: $4x \\Rightarrow 4$. Result: $4e^{4x}$.'
          }
        ]
      }
    },
    {
      id: 'chain1-patterns',
      type: 'text' as const,
      content: `### Chain Rule Pattern Reference

> **Key Concept:** Every basic derivative rule has a "chain rule version" where you multiply by the inner derivative.

| Function | Without Chain Rule | **With Chain Rule** |
|:---:|:---:|:---:|
| $u^n$ | $nx^{n-1}$ | $n[g(x)]^{n-1} \\cdot g'(x)$ |
| $\\sin u$ | $\\cos x$ | $\\cos(g(x)) \\cdot g'(x)$ |
| $\\cos u$ | $-\\sin x$ | $-\\sin(g(x)) \\cdot g'(x)$ |
| $\\tan u$ | $\\sec^2 x$ | $\\sec^2(g(x)) \\cdot g'(x)$ |
| $e^u$ | $e^x$ | $e^{g(x)} \\cdot g'(x)$ |
| $\\ln u$ | $\\frac{1}{x}$ | $\\frac{g'(x)}{g(x)}$ |

### The "Stuff" Method (Quick Shorthand)

Replace the inner function with "stuff":

| Function | Derivative ("stuff" method) |
|----------|---------------------------|
| $(\\text{stuff})^n$ | $n(\\text{stuff})^{n-1} \\cdot (\\text{stuff})'$ |
| $\\sin(\\text{stuff})$ | $\\cos(\\text{stuff}) \\cdot (\\text{stuff})'$ |
| $e^{\\text{stuff}}$ | $e^{\\text{stuff}} \\cdot (\\text{stuff})'$ |
| $\\ln(\\text{stuff})$ | $\\frac{(\\text{stuff})'}{\\text{stuff}}$ |

> **AP Tip:** This shorthand method is how most students actually think about Chain Rule on the exam. Practice until it's automatic!`
    },
    {
      id: 'chain1-quiz2',
      type: 'multiple-choice' as const,
      content: '**More Chain Rule Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\sqrt{5x - 3}$.',
            options: ['$\\frac{1}{2\\sqrt{5x-3}}$', '$\\frac{5}{2\\sqrt{5x-3}}$', '$\\frac{5}{\\sqrt{5x-3}}$', '$\\frac{1}{2}(5x-3)^{1/2}$'],
            correctAnswer: 1,
            explanation: 'Rewrite as $(5x-3)^{1/2}$. Outer: $\\frac{1}{2}(5x-3)^{-1/2}$. Inner: $5$. Result: $\\frac{5}{2\\sqrt{5x-3}}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\tan(3x^2)$.',
            options: ['$\\sec^2(3x^2)$', '$6x\\sec^2(3x^2)$', '$3x^2\\sec^2(3x^2)$', '$6x\\tan(3x^2)$'],
            correctAnswer: 1,
            explanation: 'Outer: $\\tan(u) \\Rightarrow \\sec^2(u)$. Inner: $3x^2 \\Rightarrow 6x$. Result: $6x\\sec^2(3x^2)$.'
          }
        ]
      }
    },
    {
      id: 'chain1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Outer Function** 🔍\n\nFor each composite function, select the correct outer function.',
      exercise: {
        dropdowns: [
          {
            label: '$\\sin(x^3)$ — Outer function:',
            options: ['$\\sin(u)$', '$u^3$', '$x^3$', '$\\cos(u)$'],
            correctAnswers: ['$\\sin(u)$'],
            hints: ['The outer function is the last operation you would perform when evaluating.'],
            explanation: 'You first cube $x$ (inner), then take sine (outer). Outer = $\\sin(u)$.'
          },
          {
            label: '$(\\ln x)^4$ — Outer function:',
            options: ['$\\ln(u)$', '$u^4$', '$x^4$', '$e^u$'],
            correctAnswers: ['$u^4$'],
            hints: ['First take $\\ln x$, then raise to the 4th power.'],
            explanation: 'Inner = $\\ln x$. Outer = $u^4$ (the 4th power). Derivative: $4(\\ln x)^3 \\cdot \\frac{1}{x}$.'
          },
          {
            label: '$e^{\\sin x}$ — Outer function:',
            options: ['$\\sin(u)$', '$e^u$', '$u \\cdot \\sin(u)$', '$\\cos(u)$'],
            correctAnswers: ['$e^u$'],
            hints: ['First take $\\sin x$ (inner), then $e$ to that power (outer).'],
            explanation: 'Inner = $\\sin x$. Outer = $e^u$. Derivative: $e^{\\sin x} \\cdot \\cos x$.'
          },
          {
            label: '$\\ln(x^2 + 5)$ — Outer function:',
            options: ['$u^2 + 5$', '$x^2$', '$\\ln(u)$', '$\\frac{1}{u}$'],
            correctAnswers: ['$\\ln(u)$'],
            hints: ['First compute $x^2+5$ (inner), then take ln (outer).'],
            explanation: 'Inner = $x^2+5$. Outer = $\\ln(u)$. Derivative: $\\frac{2x}{x^2+5}$.'
          }
        ]
      }
    },
    {
      id: 'chain1-input',
      type: 'input-box' as const,
      content: '**Chain Rule computation.** ✍️',
      exercise: {
        question: 'Find $\\frac{d}{dx}[e^{3x}]$ evaluated at $x = 0$. That is, find $f\'(0)$ where $f(x) = e^{3x}$.',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: [
          'Apply Chain Rule: $f\'(x) = e^{3x} \\cdot 3 = 3e^{3x}$.',
          'Evaluate at $x = 0$: $f\'(0) = 3e^{3(0)} = 3e^0$.',
          'What is $e^0$?'
        ],
        explanation: '$f\'(x) = e^{3x} \\cdot 3 = 3e^{3x}$.\\n\\nAt $x = 0$: $f\'(0) = 3e^0 = 3(1) = 3$.'
      }
    },
    {
      id: 'chain1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

$$\\boxed{\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)}$$

| Function Type | Derivative Pattern |
|:---:|:---:|
| $(\\text{stuff})^n$ | $n(\\text{stuff})^{n-1} \\cdot (\\text{stuff})'$ |
| $\\sin(\\text{stuff})$ | $\\cos(\\text{stuff}) \\cdot (\\text{stuff})'$ |
| $\\cos(\\text{stuff})$ | $-\\sin(\\text{stuff}) \\cdot (\\text{stuff})'$ |
| $e^{\\text{stuff}}$ | $e^{\\text{stuff}} \\cdot (\\text{stuff})'$ |
| $\\ln(\\text{stuff})$ | $\\frac{(\\text{stuff})'}{\\text{stuff}}$ |

**The #1 Chain Rule mistake:** Forgetting the inner derivative. ALWAYS multiply by $g'(x)$!

> **Up Next:** Part 2 — Nested Functions & the Double Chain Rule.`
    }
  ]
};
