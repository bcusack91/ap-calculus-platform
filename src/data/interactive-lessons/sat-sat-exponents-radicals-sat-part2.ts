export const satExponentsPart2Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp2-intro',
      type: 'text' as const,
      content: `
# 🔢 Fractional Exponents

**Part 2 of 7 — Converting Between Radicals and Rational Exponents**

The SAT loves testing whether you can move fluidly between radical notation and fractional exponent notation. The key identity:

$$x^{1/n} = \\sqrt[n]{x}$$

More generally:

$$x^{m/n} = \\left(\\sqrt[n]{x}\\right)^m = \\sqrt[n]{x^m}$$

**Quick Reference:**

| Expression | Equivalent |
|------------|------------|
| $x^{1/2}$ | $\\sqrt{x}$ |
| $x^{1/3}$ | $\\sqrt[3]{x}$ |
| $x^{2/3}$ | $\\sqrt[3]{x^2}$ or $(\\sqrt[3]{x})^2$ |
| $x^{3/2}$ | $\\sqrt{x^3}$ or $(\\sqrt{x})^3$ |
| $x^{-1/2}$ | $\\frac{1}{\\sqrt{x}}$ |
      `
    },
    {
      id: 'sat-exp2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Evaluate $27^{2/3}$.

1. Rewrite: $27^{2/3} = (\\sqrt[3]{27})^2$.
2. Cube root of 27 is 3: $(3)^2 = 9$.

**Example 2:** Simplify $\\frac{x^{3/4}}{x^{1/4}}$.

1. Same base → subtract exponents: $x^{3/4 - 1/4} = x^{2/4} = x^{1/2}$.
2. Answer: $\\sqrt{x}$.

**Example 3:** Write $\\frac{1}{\\sqrt[4]{x^3}}$ using exponents.

1. $\\sqrt[4]{x^3} = x^{3/4}$.
2. Reciprocal → negative exponent: $x^{-3/4}$.

---

**SAT Tip:** When the SAT says "equivalent form," try converting everything to fractional exponents first — it makes arithmetic easier.
      `
    },
    {
      id: 'sat-exp2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Evaluating Fractional Exponents** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $16^{3/4}$?',
            options: ['$4$', '$8$', '$12$', '$64$'],
            correctAnswer: 1,
            explanation: '$16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$.'
          },
          {
            question: 'Simplify: $8^{-2/3}$',
            options: ['$-4$', '$\\frac{1}{4}$', '$4$', '$-\\frac{1}{4}$'],
            correctAnswer: 1,
            explanation: '$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Negative exponent → reciprocal: $\\frac{1}{4}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp2-convert',
      type: 'dropdown-select' as const,
      content: `
**Convert each expression to exponential form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sqrt{x^3}$',
            options: ['$x^{3/2}$', '$x^{2/3}$', '$3x^{1/2}$', '$x^3$']
          },
          {
            label: '$\\frac{1}{\\sqrt[3]{x}}$',
            options: ['$x^{1/3}$', '$-x^{1/3}$', '$x^{-1/3}$', '$x^{-3}$']
          },
          {
            label: '$(\\sqrt[5]{x})^2$',
            options: ['$x^{5/2}$', '$x^{2/5}$', '$x^{10}$', '$2x^{1/5}$']
          }
        ],
        correctAnswers: ['$x^{3/2}$', '$x^{-1/3}$', '$x^{2/5}$'],
        hint1: '$\\sqrt{x^3} = (x^3)^{1/2} = x^{3/2}$.',
        hint2: '$\\sqrt[3]{x} = x^{1/3}$, then take reciprocal: $x^{-1/3}$.',
        hint3: '$(x^{1/5})^2 = x^{2/5}$.',
        explanation: 'Use the rule $\\sqrt[n]{x^m} = x^{m/n}$ and $\\frac{1}{x^a} = x^{-a}$.'
      }
    },
    {
      id: 'sat-exp2-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate — give a whole number.** 🧮

1) $125^{1/3}$ = ?

2) $32^{2/5}$ = ?

3) $81^{3/4}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '4', '27'],
        hint1: 'What number cubed equals 125? $5^3 = 125$.',
        hint2: '$32 = 2^5$. So $32^{2/5} = (2^5)^{2/5} = 2^2 = 4$.',
        hint3: '$81 = 3^4$. So $81^{3/4} = (3^4)^{3/4} = 3^3 = 27$.',
        explanation: '1) $\\sqrt[3]{125} = 5$. 2) $(\\sqrt[5]{32})^2 = 2^2 = 4$. 3) $(\\sqrt[4]{81})^3 = 3^3 = 27$.'
      }
    },
    {
      id: 'sat-exp2-harder',
      type: 'text' as const,
      content: `
## Combining Fractional Exponents

**Example:** Simplify $\\frac{x^{5/6} \\cdot x^{1/3}}{x^{1/2}}$.

1. Numerator: $x^{5/6 + 1/3} = x^{5/6 + 2/6} = x^{7/6}$.
2. Divide: $x^{7/6 - 1/2} = x^{7/6 - 3/6} = x^{4/6} = x^{2/3}$.

**Common pitfall:** Forgetting to find a common denominator before adding/subtracting fractional exponents.

**SAT Pattern:** The SAT often writes $\\sqrt{x} \\cdot \\sqrt[3]{x}$ and asks for the simplified form. Convert first:

$$x^{1/2} \\cdot x^{1/3} = x^{3/6 + 2/6} = x^{5/6}$$
      `
    },
    {
      id: 'sat-exp2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $x^{1/2} = 5$, what is $x^{3/2}$?',
            options: ['$15$', '$25$', '$125$', '$\\sqrt{5}$'],
            correctAnswer: 2,
            explanation: '$x^{3/2} = (x^{1/2})^3 = 5^3 = 125$.'
          },
          {
            question: 'Which expression equals $\\sqrt{x} \\cdot \\sqrt[3]{x^2}$?',
            options: ['$x^{7/6}$', '$x^{5/6}$', '$x^{1/3}$', '$x^{2/6}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x} = x^{1/2}$ and $\\sqrt[3]{x^2} = x^{2/3}$. Add: $\\frac{1}{2}+\\frac{2}{3} = \\frac{3}{6}+\\frac{4}{6} = \\frac{7}{6}$. Answer: $x^{7/6}$.'
          }
        ]
      }
    }
  ]
}
