export const calcabChainRulePart1Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain1-intro',
      type: 'text' as const,
      content: `# 🔗 The Chain Rule

**Part 1 of 7 — Chain Rule Basics**

### Why Do We Need the Chain Rule?

So far, you can differentiate functions like $x^3$, $\\sin x$, or $e^x$. But what about **composite functions** — functions inside other functions?

Consider $f(x) = (3x + 1)^5$. You *could* expand this, but that is painful. What about $\\sin(x^2)$ or $e^{3x}$? There is no shortcut without the Chain Rule.

### The Chain Rule Formula

If $y = f(g(x))$, then:

$$\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$$

In words: **differentiate the outer function** (leaving the inner function untouched), then **multiply by the derivative of the inner function**.

### Leibniz Notation

If $y = f(u)$ where $u = g(x)$, then:

$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

---

### Worked Example 1

**Find** $\\frac{d}{dx}(3x+1)^5$

| Step | Work |
|------|------|
| Identify layers | Outer: $u^5$, Inner: $u = 3x+1$ |
| Differentiate outer | $5u^4 = 5(3x+1)^4$ |
| Differentiate inner | $\\frac{d}{dx}(3x+1) = 3$ |
| Multiply | $5(3x+1)^4 \\cdot 3 = 15(3x+1)^4$ |

### Worked Example 2

**Find** $\\frac{d}{dx}\\sin(x^2)$

| Step | Work |
|------|------|
| Identify layers | Outer: $\\sin(u)$, Inner: $u = x^2$ |
| Differentiate outer | $\\cos(u) = \\cos(x^2)$ |
| Differentiate inner | $\\frac{d}{dx}(x^2) = 2x$ |
| Multiply | $\\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$ |

> **AP Tip:** The Chain Rule appears in nearly every derivative problem on the AP exam. Master it now.`
    },
    {
      id: 'chain1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding** 🎯\n\nCompute the derivative using the Chain Rule.',
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
          }
        ]
      }
    },
    {
      id: 'chain1-text2',
      type: 'text' as const,
      content: `### Worked Example 3

**Find** $\\frac{d}{dx}\\sqrt{x^2 + 1}$

Rewrite: $\\sqrt{x^2+1} = (x^2+1)^{1/2}$

| Step | Work |
|------|------|
| Outer derivative | $\\frac{1}{2}(x^2+1)^{-1/2}$ |
| Inner derivative | $2x$ |
| Chain Rule | $\\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$ |

### Worked Example 4

**Find** $\\frac{d}{dx}e^{-x^2}$

| Step | Work |
|------|------|
| Outer: $e^u$ | $e^{-x^2}$ |
| Inner: $u = -x^2$ | $-2x$ |
| Chain Rule | $e^{-x^2} \\cdot (-2x) = -2xe^{-x^2}$ |`
    },
    {
      id: 'chain1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Apply the Chain Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}e^{4x}$.',
            options: ['$e^{4x}$', '$4e^{4x}$', '$e^{4}$', '$4xe^{4x-1}$'],
            correctAnswer: 1,
            explanation: 'Outer: $e^u \\Rightarrow e^u = e^{4x}$. Inner: $4x \\Rightarrow 4$. Result: $4e^{4x}$.'
          },
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
          { label: '$\\sin(x^3)$', options: ['$\\sin(u)$', '$u^3$', '$x^3$', '$\\cos(u)$'] },
          { label: '$(\\ln x)^4$', options: ['$\\ln(u)$', '$u^4$', '$x^4$', '$e^u$'] },
          { label: '$e^{\\sin x}$', options: ['$\\sin(u)$', '$e^u$', '$u \\cdot \\sin(u)$', '$\\cos(u)$'] },
          { label: '$\\ln(x^2 + 5)$', options: ['$u^2 + 5$', '$x^2$', '$\\ln(u)$', '$\\frac{1}{u}$'] }
        ],
        correctAnswers: ['$\\sin(u)$', '$u^4$', '$e^u$', '$\\ln(u)$'],
        hint1: 'The outer function is the last operation you would perform when evaluating from inside out.',
        hint2: 'For $\\sin(x^3)$: you first cube $x$, then take sine. Sine is the outer function.',
        hint3: 'For $(\\ln x)^4$: you first take $\\ln x$, then raise to the 4th power.',
        explanation: 'The outer function is the last operation performed. $\\sin(x^3)$: outer = $\\sin$. $(\\ln x)^4$: outer = $u^4$. $e^{\\sin x}$: outer = $e^u$. $\\ln(x^2+5)$: outer = $\\ln$.'
      }
    },
    {
      id: 'chain1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Function | Derivative |
|----------|-----------|
| $(\\text{stuff})^n$ | $n(\\text{stuff})^{n-1} \\cdot (\\text{stuff})'$ |
| $\\sin(\\text{stuff})$ | $\\cos(\\text{stuff}) \\cdot (\\text{stuff})'$ |
| $\\cos(\\text{stuff})$ | $-\\sin(\\text{stuff}) \\cdot (\\text{stuff})'$ |
| $e^{\\text{stuff}}$ | $e^{\\text{stuff}} \\cdot (\\text{stuff})'$ |
| $\\ln(\\text{stuff})$ | $\\frac{1}{\\text{stuff}} \\cdot (\\text{stuff})'$ |`
    }
  ]
};
