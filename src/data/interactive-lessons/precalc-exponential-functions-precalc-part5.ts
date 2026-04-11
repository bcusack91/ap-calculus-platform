export const precalcExponentialPart5Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🔑 Solving Exponential Equations with Logarithms

**Part 5 of 7**

When the variable is in the exponent, **logarithms** are the key tool.

### The Core Technique

$$b^x = c \\quad \\Longrightarrow \\quad \\boxed{x = \\frac{\\ln c}{\\ln b} = \\log_b c}$$

| Strategy | When to Use | Example |
|:---------|:-----------|:--------|
| Same-base matching | Both sides are powers of the same base | $4^x = 8$ → $2^{2x} = 2^3$ |
| Take $\\ln$ of both sides | Bases can't be matched easily | $5^x = 20$ → $x = \\frac{\\ln 20}{\\ln 5}$ |
| Change of base formula | Need a decimal approximation | $\\log_3 7 = \\frac{\\ln 7}{\\ln 3} \\approx 1.771$ |
      `
    },
    {
      id: 'p5-same-base',
      type: 'text' as const,
      content: `
## 🔗 Same-Base Method

### Worked Example 1

> **Solve $8^{2x+1} = 32$.**

Rewrite as powers of $2$: $(2^3)^{2x+1} = 2^5$

$2^{3(2x+1)} = 2^5$

$3(2x + 1) = 5$

$6x + 3 = 5 \\implies 6x = 2 \\implies x = \\frac{1}{3}$

### Common Base Conversions

| Number | As power of $2$ | As power of $3$ |
|:-------|:----------------|:----------------|
| $4$ | $2^2$ | — |
| $8$ | $2^3$ | — |
| $16$ | $2^4$ | — |
| $9$ | — | $3^2$ |
| $27$ | — | $3^3$ |
| $\\frac{1}{4}$ | $2^{-2}$ | — |
      `
    },
    {
      id: 'p5-log-method',
      type: 'text' as const,
      content: `
## 📐 Logarithm Method (General Case)

### Worked Example 2

> **Solve $3 \\cdot 5^{x-1} = 90$.**

**Step 1 — Isolate the exponential:**
$5^{x-1} = 30$

**Step 2 — Take $\\ln$ of both sides:**
$(x - 1)\\ln 5 = \\ln 30$

**Step 3 — Solve for $x$:**
$x - 1 = \\frac{\\ln 30}{\\ln 5} = \\frac{3.401}{1.609} \\approx 2.113$

$x \\approx 3.113$

### Worked Example 3: Application

> **A population of $2{,}000$ grows at $4\\%$ per year. When will it reach $5{,}000$?**

$2000(1.04)^t = 5000$

$(1.04)^t = 2.5$

$t = \\frac{\\ln 2.5}{\\ln 1.04} = \\frac{0.9163}{0.03922} \\approx 23.4$ years

### ⚠️ Common Error

Never distribute $\\ln$ across addition: $\\ln(a + b) \\neq \\ln a + \\ln b$. Logarithms only split across **products** and **quotients**: $\\ln(ab) = \\ln a + \\ln b$.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Equation-Solving Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve $2^{3x} = 64$.',
            options: [
              '$x = 2$',
              '$x = 3$',
              '$x = 6$',
              '$x = 21$'
            ],
            correctAnswer: 0,
            explanation: '$64 = 2^6$. So $2^{3x} = 2^6 \\implies 3x = 6 \\implies x = 2$.'
          },
          {
            question: 'Which is the correct first step to solve $7 \\cdot 2^x = 50$?',
            options: [
              'Take $\\ln$ of both sides immediately',
              'Divide both sides by $7$ first',
              'Rewrite $50$ as a power of $2$',
              'Subtract $7$ from both sides'
            ],
            correctAnswer: 1,
            explanation: 'Always isolate the exponential term first: $2^x = \\frac{50}{7}$. Then apply $\\ln$.'
          },
          {
            question: 'If $e^{0.05t} = 3$, then $t =$',
            options: [
              '$\\frac{\\ln 3}{0.05}$',
              '$\\frac{0.05}{\\ln 3}$',
              '$3 \\cdot e^{0.05}$',
              '$\\frac{3}{0.05}$'
            ],
            correctAnswer: 0,
            explanation: 'Take $\\ln$: $0.05t = \\ln 3$, so $t = \\frac{\\ln 3}{0.05} \\approx 21.97$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$** 🧮

**1)** $4^x = 64$. (e.g., $3^x = 81$: since $81 = 3^4$, $x = 4$)

**2)** $e^{2x} = 7.389$. Round to one decimal. (e.g., $e^x = 2.718$: $x = \\ln(2.718) \\approx 1.0$)

**3)** $\\log_2 32 = ?$ (e.g., $\\log_3 27 = 3$ because $3^3 = 27$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '1.0', '5'],
        hint1: '$64 = 4^3$.',
        hint2: '$2x = \\ln(7.389)$. Note that $e^2 \\approx 7.389$.',
        hint3: '$2^? = 32$. Express $32$ as a power of $2$.',
        explanation: '1) $4^3 = 64$, so $x = 3$. 2) $\\ln(7.389) \\approx 2.0$, so $2x = 2 \\implies x = 1.0$. 3) $2^5 = 32$, so $\\log_2 32 = 5$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Strategy Selection** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve $9^x = 27$, the best strategy is',
            options: ['take $\\ln$ of both sides', 'rewrite both as powers of $3$', 'use the quadratic formula', 'graph both sides']
          },
          {
            label: '$\\ln(ab)$ equals',
            options: ['$\\ln a \\cdot \\ln b$', '$\\ln a + \\ln b$', '$\\frac{\\ln a}{\\ln b}$', '$(\\ln a)(b)$']
          },
          {
            label: 'The change-of-base formula gives $\\log_b x =$',
            options: ['$\\frac{b}{x}$', '$\\frac{\\ln b}{\\ln x}$', '$\\frac{\\ln x}{\\ln b}$', '$\\ln x - \\ln b$']
          },
          {
            label: 'Before taking $\\ln$ of both sides, you should first',
            options: ['multiply by $e$', 'isolate the exponential expression', 'convert to base $10$', 'square both sides']
          }
        ],
        correctAnswers: ['rewrite both as powers of $3$', '$\\ln a + \\ln b$', '$\\frac{\\ln x}{\\ln b}$', 'isolate the exponential expression'],
        hint1: '$9 = 3^2$ and $27 = 3^3$.',
        hint2: 'Product rule of logarithms.',
        hint3: '$\\log_b x = \\frac{\\ln x}{\\ln b}$.',
        explanation: 'Same base: $3^{2x} = 3^3$. Product rule: $\\ln(ab) = \\ln a + \\ln b$. Change of base: $\\frac{\\ln x}{\\ln b}$. Always isolate the exponential first.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Solve $500(1.03)^t = 1200$ for $t$.',
            options: [
              '$t = \\frac{\\ln(2.4)}{\\ln(1.03)} \\approx 29.6$',
              '$t = \\frac{\\ln(1.03)}{\\ln(2.4)} \\approx 0.034$',
              '$t = \\frac{1200}{500 \\cdot 1.03} \\approx 2.33$',
              '$t = \\ln(700) \\approx 6.55$'
            ],
            correctAnswer: 0,
            explanation: 'Isolate: $(1.03)^t = 2.4$. Take $\\ln$: $t\\ln(1.03) = \\ln(2.4)$. Solve: $t = \\frac{\\ln 2.4}{\\ln 1.03} \\approx 29.6$.'
          },
          {
            question: 'The equation $4^x = 2^{x+3}$ can be solved by rewriting $4^x$ as:',
            options: [
              '$2^{2x}$, giving $2x = x + 3$, so $x = 3$',
              '$2^{4x}$, giving $4x = x + 3$, so $x = 1$',
              '$2^x \\cdot 2$, giving $x + 1 = x + 3$, which has no solution',
              '$2^{x/2}$, giving $x/2 = x + 3$, so $x = -6$'
            ],
            correctAnswer: 0,
            explanation: '$4^x = (2^2)^x = 2^{2x}$. Set exponents equal: $2x = x + 3 \\implies x = 3$. Verify: $4^3 = 64$ and $2^6 = 64$. ✔'
          }
        ]
      }
    }
  ]
};
