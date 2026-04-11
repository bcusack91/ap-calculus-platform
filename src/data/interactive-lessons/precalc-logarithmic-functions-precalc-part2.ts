export const precalcLogarithmicPart2Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📐 Logarithmic Functions — Core Log Properties

**Part 2 of 7**

Log properties turn multiplication, division, and exponentiation into addition, subtraction, and scalar multiplication.

### The Three Fundamental Properties

| Property | Rule | Direction |
|:---------|:-----|:----------|
| **Product Rule** | $\\log_b(xy) = \\log_b x + \\log_b y$ | Multiplication → Addition |
| **Quotient Rule** | $\\log_b\\left(\\frac{x}{y}\\right) = \\log_b x - \\log_b y$ | Division → Subtraction |
| **Power Rule** | $\\log_b(x^k) = k \\cdot \\log_b x$ | Exponent → Coefficient |

> ⚠️ **Critical restriction:** These rules only apply to products, quotients, and powers *inside* the log. There is **no rule** for $\\log(x + y)$ or $\\log(x - y)$.
      `
    },
    {
      id: 'p2-expanding',
      type: 'text' as const,
      content: `
## 🔓 Expanding Logarithmic Expressions

"Expanding" means using the rules left-to-right to break a single log into simpler pieces.

### Worked Example 1

> **Expand $\\log_3\\left(\\frac{x^2 y}{z^4}\\right)$**

| Step | Action | Result |
|:-----|:-------|:-------|
| 1 | Quotient rule | $\\log_3(x^2 y) - \\log_3(z^4)$ |
| 2 | Product rule on first term | $\\log_3(x^2) + \\log_3 y - \\log_3(z^4)$ |
| 3 | Power rule on each | $2\\log_3 x + \\log_3 y - 4\\log_3 z$ |

$$\\boxed{\\log_3\\left(\\frac{x^2 y}{z^4}\\right) = 2\\log_3 x + \\log_3 y - 4\\log_3 z}$$

### Order of Operations for Expanding

1. **Quotient rule** first (handle the fraction)
2. **Product rule** next (break up any remaining products)
3. **Power rule** last (pull exponents out front)
      `
    },
    {
      id: 'p2-condensing',
      type: 'text' as const,
      content: `
## 🔒 Condensing Logarithmic Expressions

"Condensing" means running the rules right-to-left to combine multiple logs into one.

### Worked Example 2

> **Condense $3\\ln a - \\frac{1}{2}\\ln b + \\ln c$**

| Step | Action | Result |
|:-----|:-------|:-------|
| 1 | Power rule (reverse) | $\\ln a^3 - \\ln b^{1/2} + \\ln c$ |
| 2 | Combine $+$ terms (product) | $\\ln(a^3 c) - \\ln(\\sqrt{b})$ |
| 3 | Quotient rule (reverse) | $\\ln\\left(\\frac{a^3 c}{\\sqrt{b}}\\right)$ |

$$\\boxed{3\\ln a - \\frac{1}{2}\\ln b + \\ln c = \\ln\\left(\\frac{a^3 c}{\\sqrt{b}}\\right)}$$

### Why Condensing Matters

- Solving equations requires **one log** on each side
- Condensing to a single log lets you drop the log and solve the argument
      `
    },
    {
      id: 'p2-common-errors',
      type: 'text' as const,
      content: `
## 🚫 Common Errors to Avoid

| ❌ Wrong | ✅ Correct | Why |
|:---------|:-----------|:----|
| $\\log(x + y) = \\log x + \\log y$ | No simplification exists | Log of a sum ≠ sum of logs |
| $\\log(x - y) = \\log x - \\log y$ | No simplification exists | Log of a difference ≠ difference of logs |
| $(\\log x)^2 = 2\\log x$ | $(\\log x)^2$ stays as is | Squaring the output ≠ power rule |
| $\\frac{\\log x}{\\log y} = \\log\\frac{x}{y}$ | $\\frac{\\log x}{\\log y} = \\log_y x$ | Dividing logs = change of base, NOT quotient rule |

### Quick Memory Aid

> The rules work for operations **inside** the log argument:
> - Inside multiplication → product rule
> - Inside division → quotient rule
> - Inside exponent → power rule
> 
> If it's addition or subtraction inside, **stop** — no rule applies.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Properties Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression equals $\\log_5(8x^3)$?',
            options: [
              '$3\\log_5(8x)$',
              '$\\log_5 8 + 3\\log_5 x$',
              '$\\log_5 8 \\cdot \\log_5 x^3$',
              '$3(\\log_5 8 + \\log_5 x)$'
            ],
            correctAnswer: 1,
            explanation: 'Product rule: $\\log_5(8 \\cdot x^3) = \\log_5 8 + \\log_5(x^3)$. Then power rule: $= \\log_5 8 + 3\\log_5 x$.'
          },
          {
            question: 'Condense: $\\log 6 + \\log 5 - \\log 3$',
            options: [
              '$\\log 8$',
              '$\\log 10$',
              '$\\log \\frac{11}{3}$',
              '$\\log 90$'
            ],
            correctAnswer: 1,
            explanation: 'Product rule: $\\log(6 \\cdot 5) - \\log 3 = \\log 30 - \\log 3$. Quotient rule: $= \\log \\frac{30}{3} = \\log 10 = 1$.'
          },
          {
            question: 'Which is NOT a valid log property?',
            options: [
              '$\\log_b(xy) = \\log_b x + \\log_b y$',
              '$\\log_b(x^k) = k\\log_b x$',
              '$\\log_b(x + y) = \\log_b x + \\log_b y$',
              '$\\log_b\\frac{x}{y} = \\log_b x - \\log_b y$'
            ],
            correctAnswer: 2,
            explanation: 'There is no rule for $\\log(x + y)$. The product rule applies to $\\log(x \\cdot y)$, not $\\log(x + y)$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Expand & Condense** 🧮

**1)** Expand: $\\log_2(8x^5)$. What is the coefficient of $\\log_2 x$? (e.g., in $\\log_3(y^4) = 4\\log_3 y$, the coefficient is $4$)

**2)** Condense: $\\log 4 + \\log 25$. What is the single number inside the resulting $\\log$? (e.g., $\\log 3 + \\log 7 = \\log 21$, so the number is $21$)

**3)** Given $\\log_b 2 = 0.5$ and $\\log_b 3 = 0.8$. Find $\\log_b 12$, writing your answer as a decimal. (e.g., if $\\log_b 5 = 1.2$ and $\\log_b 2 = 0.5$, then $\\log_b 10 = 1.2 + 0.5 = 1.7$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '100', '1.8'],
        hint1: '$\\log_2(8x^5) = \\log_2 8 + \\log_2(x^5) = 3 + 5\\log_2 x$.',
        hint2: 'Product rule: $\\log(4 \\cdot 25) = \\log(?)$.',
        hint3: '$12 = 2^2 \\cdot 3$. So $\\log_b 12 = 2\\log_b 2 + \\log_b 3$.',
        explanation: '1) Power rule gives coefficient $5$. 2) $\\log(4 \\cdot 25) = \\log 100$. 3) $\\log_b 12 = \\log_b(4 \\cdot 3) = \\log_b(2^2 \\cdot 3) = 2(0.5) + 0.8 = 1.8$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rule Identification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\log(ab) = \\log a + \\log b$ uses the',
            options: ['product rule', 'quotient rule', 'power rule', 'change of base']
          },
          {
            label: '$\\log(x^4) = 4\\log x$ uses the',
            options: ['product rule', 'quotient rule', 'power rule', 'inverse property']
          },
          {
            label: '$\\log\\frac{a}{b} = \\log a - \\log b$ uses the',
            options: ['product rule', 'quotient rule', 'power rule', 'change of base']
          },
          {
            label: '$\\log(x + y)$ can be simplified using',
            options: ['the product rule', 'the quotient rule', 'no log property', 'the power rule']
          }
        ],
        correctAnswers: ['product rule', 'power rule', 'quotient rule', 'no log property'],
        hint1: 'Multiplication inside → what rule?',
        hint2: 'Exponent inside → coefficient outside.',
        hint3: 'Division inside → subtraction outside.',
        explanation: 'Product rule for multiplication, power rule for exponents, quotient rule for division. No rule exists for addition inside a log.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Expand completely: $\\ln\\left(\\frac{x^3}{e^2}\\right)$',
            options: [
              '$3\\ln x - 2$',
              '$3\\ln x - 2\\ln e$',
              '$\\frac{3\\ln x}{2}$',
              '$3\\ln x - \\ln 2$'
            ],
            correctAnswer: 0,
            explanation: 'Quotient rule: $\\ln(x^3) - \\ln(e^2)$. Power rule: $3\\ln x - 2\\ln e = 3\\ln x - 2$ (since $\\ln e = 1$). Both A and B are correct, but A is fully simplified.'
          },
          {
            question: 'If $\\log 2 \\approx 0.301$ and $\\log 3 \\approx 0.477$, find $\\log 72$.',
            options: [
              '$1.724$',
              '$1.857$',
              '$2.079$',
              '$1.556$'
            ],
            correctAnswer: 1,
            explanation: '$72 = 8 \\times 9 = 2^3 \\times 3^2$. So $\\log 72 = 3\\log 2 + 2\\log 3 = 3(0.301) + 2(0.477) = 0.903 + 0.954 = 1.857$.'
          }
        ]
      }
    }
  ]
};
