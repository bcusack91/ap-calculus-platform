export const precalcLogarithmicPart1Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📖 Logarithmic Functions — Definition & Inverse Relation

**Part 1 of 7**

A logarithm answers: **"What exponent do I need?"**

$$\\boxed{\\log_b x = y \\iff b^y = x}$$

> "$\\log$ base $b$ of $x$ equals $y$" means "$b$ raised to $y$ gives $x$."

### The Three Standard Bases

| Notation | Name | Base | Calculator Key |
|:---------|:-----|:-----|:---------------|
| $\\log x$ | Common log | $10$ | **LOG** |
| $\\ln x$ | Natural log | $e \\approx 2.718$ | **LN** |
| $\\log_b x$ | General log | $b$ | Use change of base |

### Quick Conversion Examples

| Exponential Form | Logarithmic Form |
|:-----------------|:-----------------|
| $2^5 = 32$ | $\\log_2 32 = 5$ |
| $10^3 = 1000$ | $\\log 1000 = 3$ |
| $e^1 = e$ | $\\ln e = 1$ |
| $5^0 = 1$ | $\\log_5 1 = 0$ |
| $3^{-2} = \\frac{1}{9}$ | $\\log_3 \\frac{1}{9} = -2$ |
      `
    },
    {
      id: 'p1-inverse',
      type: 'text' as const,
      content: `
## 🔄 Logs and Exponentials Are Inverses

If $f(x) = b^x$, then $f^{-1}(x) = \\log_b x$.

**Inverse Properties — they undo each other:**

$$\\boxed{\\log_b(b^x) = x \\quad \\text{and} \\quad b^{\\log_b x} = x}$$

| Expression | Simplifies To | Why |
|:-----------|:-------------|:----|
| $\\log_2(2^7)$ | $7$ | Log undoes the exponential |
| $10^{\\log 50}$ | $50$ | Exponential undoes the log |
| $\\ln(e^{-3})$ | $-3$ | $\\ln$ undoes $e^x$ |
| $e^{\\ln 12}$ | $12$ | $e^x$ undoes $\\ln$ |

### Graphical Connection

The graph of $y = \\log_b x$ is the **reflection** of $y = b^x$ over the line $y = x$.

| Feature | $y = b^x$ (with $b > 1$) | $y = \\log_b x$ |
|:--------|:-------------------------|:----------------|
| Domain | $(-\\infty, \\infty)$ | $(0, \\infty)$ |
| Range | $(0, \\infty)$ | $(-\\infty, \\infty)$ |
| Asymptote | $y = 0$ (horizontal) | $x = 0$ (vertical) |
| Passes through | $(0, 1)$ | $(1, 0)$ |
| Another point | $(1, b)$ | $(b, 1)$ |
      `
    },
    {
      id: 'p1-worked-example',
      type: 'text' as const,
      content: `
## 📝 Worked Example: Converting & Evaluating

> **Evaluate $\\log_4 64$ without a calculator.**

**Step 1:** Rewrite as an equation: $\\log_4 64 = x$ means $4^x = 64$

**Step 2:** Express both sides as powers of $4$:
- $4^1 = 4$
- $4^2 = 16$  
- $4^3 = 64$ ✔

$$\\boxed{\\log_4 64 = 3}$$

### Pattern for Evaluating Logs Mentally

| Step | Action |
|:-----|:-------|
| 1 | Set $\\log_b x = ?$ → rewrite as $b^? = x$ |
| 2 | Find common base or multiply repeatedly |
| 3 | Match exponents |

### Key Values to Memorize

| $\\log_b 1 = 0$ | Because $b^0 = 1$ for any base |
| $\\log_b b = 1$ | Because $b^1 = b$ |
| $\\log_b b^n = n$ | Inverse property |
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\log_3 81$?',
            options: [
              '$3$',
              '$4$',
              '$27$',
              '$9$'
            ],
            correctAnswer: 1,
            explanation: '$3^4 = 81$, so $\\log_3 81 = 4$.'
          },
          {
            question: 'Which is the inverse function of $f(x) = 5^x$?',
            options: [
              '$f^{-1}(x) = x^5$',
              '$f^{-1}(x) = \\frac{1}{5^x}$',
              '$f^{-1}(x) = \\log_5 x$',
              '$f^{-1}(x) = 5\\log x$'
            ],
            correctAnswer: 2,
            explanation: 'The inverse of $b^x$ is $\\log_b x$. So the inverse of $5^x$ is $\\log_5 x$.'
          },
          {
            question: 'Simplify $e^{\\ln 7}$.',
            options: [
              '$\\ln 7$',
              '$7e$',
              '$7$',
              '$e^7$'
            ],
            correctAnswer: 2,
            explanation: '$e^x$ and $\\ln x$ are inverses, so $e^{\\ln 7} = 7$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate These Logs** 🧮

**1)** $\\log_5 125 = $ ? (e.g., $\\log_2 64$: since $2^6 = 64$, the answer is $6$)

**2)** $\\log_{10} 0.001 = $ ? (e.g., $\\log_{10} 0.01$: since $10^{-2} = 0.01$, the answer is $-2$)

**3)** $\\ln(e^5) = $ ? (e.g., $\\ln(e^{-2})$: by inverse property, the answer is $-2$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-3', '5'],
        hint1: '$5^? = 125$. Try $5^3$.',
        hint2: '$10^? = 0.001 = 10^{-3}$.',
        hint3: 'Inverse property: $\\ln(e^x) = x$.',
        explanation: '1) $5^3 = 125$, so $\\log_5 125 = 3$. 2) $10^{-3} = 0.001$, so $\\log 0.001 = -3$. 3) By inverse property, $\\ln(e^5) = 5$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Log Fundamentals** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\log_b 1$ equals',
            options: ['$0$', '$1$', '$b$', 'undefined']
          },
          {
            label: 'The domain of $y = \\log_b x$ is',
            options: ['$(-\\infty, \\infty)$', '$(0, \\infty)$', '$[0, \\infty)$', '$(1, \\infty)$']
          },
          {
            label: 'The vertical asymptote of $y = \\log_3 x$ is',
            options: ['$y = 0$', '$x = 1$', '$x = 0$', '$x = 3$']
          },
          {
            label: '$\\log_b b$ equals',
            options: ['$0$', '$b$', '$1$', '$\\frac{1}{b}$']
          }
        ],
        correctAnswers: ['$0$', '$(0, \\infty)$', '$x = 0$', '$1$'],
        hint1: '$b^0 = 1$ for any valid base.',
        hint2: 'You can only take the log of positive numbers.',
        hint3: 'The log graph approaches but never touches the $y$-axis.',
        explanation: '$\\log_b 1 = 0$ (since $b^0 = 1$). Domain is $(0, \\infty)$ (argument must be positive). VA at $x = 0$. $\\log_b b = 1$ (since $b^1 = b$).'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Rewrite $2^{-4} = \\frac{1}{16}$ in logarithmic form.',
            options: [
              '$\\log_2 \\frac{1}{16} = -4$',
              '$\\log_{-4} 2 = \\frac{1}{16}$',
              '$\\log_2 (-4) = \\frac{1}{16}$',
              '$\\log_{16} 2 = -4$'
            ],
            correctAnswer: 0,
            explanation: '$b^y = x$ becomes $\\log_b x = y$. Here $b = 2$, $y = -4$, $x = \\frac{1}{16}$. So $\\log_2 \\frac{1}{16} = -4$.'
          },
          {
            question: 'If $\\log_b 8 = 3$, what is $b$?',
            options: [
              '$3$',
              '$\\frac{8}{3}$',
              '$2$',
              '$24$'
            ],
            correctAnswer: 2,
            explanation: '$\\log_b 8 = 3$ means $b^3 = 8$, so $b = \\sqrt[3]{8} = 2$.'
          }
        ]
      }
    }
  ]
};
