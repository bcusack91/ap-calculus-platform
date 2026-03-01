export const satExponentsPart1Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp1-intro',
      type: 'text' as const,
      content: `
# ⚡ Laws of Exponents

**Part 1 of 7 — Product, Quotient, Power, Zero & Negative Exponents**

Exponent rules show up on roughly **10–15 %** of SAT Math questions. Master the five core laws below and these become free points on test day.

| Rule | Formula | Quick Example |
|------|---------|---------------|
| Product | $a^m \\cdot a^n = a^{m+n}$ | $x^3 \\cdot x^4 = x^7$ |
| Quotient | $\\frac{a^m}{a^n} = a^{m-n}$ | $\\frac{x^5}{x^2} = x^3$ |
| Power | $(a^m)^n = a^{mn}$ | $(x^3)^2 = x^6$ |
| Zero | $a^0 = 1\\;(a\\neq 0)$ | $7^0 = 1$ |
| Negative | $a^{-n} = \\frac{1}{a^n}$ | $x^{-2} = \\frac{1}{x^2}$ |

**Bonus rules (combinations):**

$$
(ab)^n = a^n b^n \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}
$$
      `
    },
    {
      id: 'sat-exp1-product-quotient',
      type: 'text' as const,
      content: `
## Product & Quotient Rules — Worked Examples

**Example 1 — Product Rule**

Simplify $2x^3 \\cdot 5x^4$.

- Multiply coefficients: $2 \\times 5 = 10$.
- Add exponents on $x$: $3 + 4 = 7$.
- Result: $10x^7$.

**Example 2 — Quotient Rule**

Simplify $\\dfrac{18x^5 y^3}{6x^2 y^5}$.

- Coefficients: $\\frac{18}{6} = 3$.
- $x$: $x^{5-2} = x^3$.
- $y$: $y^{3-5} = y^{-2} = \\frac{1}{y^2}$.
- Result: $\\dfrac{3x^3}{y^2}$.

---

**SAT Tip:** Keep bases the same → add or subtract exponents. Different bases? You can't combine them.
      `
    },
    {
      id: 'sat-exp1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Practice — Product & Quotient Rules** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $x^4 \\cdot x^{-2} \\cdot x^3$',
            options: ['$x^5$', '$x^9$', '$x^{-24}$', '$x^1$'],
            correctAnswer: 0,
            explanation: 'Add all exponents: $4 + (-2) + 3 = 5$. Answer: $x^5$.'
          },
          {
            question: 'Simplify: $\\dfrac{24a^6 b^2}{8a^4 b^5}$',
            options: ['$3a^2 b^{-3}$', '$3a^{10} b^7$', '$16a^2 b^3$', '$3a^2 b^3$'],
            correctAnswer: 0,
            explanation: 'Coefficients: $24/8=3$. $a^{6-4}=a^2$. $b^{2-5}=b^{-3}$. So $3a^2 b^{-3}$ or equivalently $\\frac{3a^2}{b^3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp1-negative',
      type: 'text' as const,
      content: `
## Negative & Zero Exponents — Deep Dive

**Zero exponent:** Anything (except 0) raised to the 0th power equals 1.

$$5^0 = 1,\\quad (-3)^0 = 1,\\quad (2x+7)^0 = 1$$

**Negative exponent = reciprocal:**

$$a^{-n} = \\frac{1}{a^n} \\qquad \\frac{1}{a^{-n}} = a^n$$

**Worked Example:** Simplify $\\left(\\dfrac{2}{x}\\right)^{-3}$.

1. Flip the fraction: $\\left(\\dfrac{x}{2}\\right)^3$.
2. Apply the power: $\\dfrac{x^3}{8}$.

**SAT Tip:** When you see a negative exponent, think **"flip."** The base moves across the fraction bar and the exponent becomes positive.
      `
    },
    {
      id: 'sat-exp1-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate each expression (give a whole number).** 🧮

1) $2^{-3}$ — enter the **denominator** when written as $\\frac{1}{?}$

2) $5^0 + 4^{-1}$ — enter the **numerator** when written over 4

3) $(-2)^4$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '5', '16'],
        hint1: '$2^{-3} = \\frac{1}{2^3}$. What is $2^3$?',
        hint2: '$5^0 = 1$ and $4^{-1} = \\frac{1}{4}$. Written over 4: $\\frac{4}{4}+\\frac{1}{4}=\\frac{5}{4}$. Numerator is 5.',
        hint3: '$(-2)^4 = (-2)(-2)(-2)(-2) = 16$. Even exponent makes it positive.',
        explanation: '1) $2^3 = 8$. 2) $\\frac{5}{4}$, numerator = 5. 3) $16$.'
      }
    },
    {
      id: 'sat-exp1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its simplified form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(3^2)^3$',
            options: ['$3^5$', '$3^6$', '$9^3$', '$3^8$']
          },
          {
            label: '$\\frac{x^{10}}{x^{10}}$',
            options: ['$0$', '$1$', '$x$', '$x^{20}$']
          },
          {
            label: '$(2x)^3$',
            options: ['$2x^3$', '$6x^3$', '$8x^3$', '$2^3 + x^3$']
          }
        ],
        correctAnswers: ['$3^6$', '$1$', '$8x^3$'],
        hint1: 'Power rule: multiply exponents. $2 \\times 3 = 6$.',
        hint2: 'Same base divided: $x^{10-10} = x^0 = 1$.',
        hint3: '$(2x)^3 = 2^3 \\cdot x^3 = 8x^3$.',
        explanation: '$(3^2)^3 = 3^6$. $\\frac{x^{10}}{x^{10}} = x^0 = 1$. $(2x)^3 = 8x^3$.'
      }
    },
    {
      id: 'sat-exp1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $3^x = 81$, what is $3^{x-2}$?',
            options: ['$3$', '$9$', '$27$', '$79$'],
            correctAnswer: 1,
            explanation: '$3^x = 81 = 3^4$, so $x = 4$. Then $3^{x-2} = 3^2 = 9$. Or use the quotient rule: $3^{x-2} = \\frac{3^x}{3^2} = \\frac{81}{9} = 9$.'
          },
          {
            question: 'Which expression equals $\\dfrac{12x^5 y^3}{4x^2 y^5}$?',
            options: ['$3x^3 y^{-2}$', '$3x^7 y^8$', '$8x^3 y^{-2}$', '$3x^{2.5} y^{0.6}$'],
            correctAnswer: 0,
            explanation: 'Divide coefficients: $12/4 = 3$. Subtract $x$ exponents: $5-2=3$. Subtract $y$ exponents: $3-5=-2$. Result: $3x^3 y^{-2}$.'
          }
        ]
      }
    }
  ]
}
