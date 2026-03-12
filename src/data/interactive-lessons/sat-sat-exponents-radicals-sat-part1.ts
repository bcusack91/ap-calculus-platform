export const satExponentsPart1Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er1-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 1 of 7 — Exponent Rules**

### The Core Rules

| Rule | Formula | Example |
|------|---------|---------|
| Product | $a^m \\cdot a^n = a^{m+n}$ | $x^3 \\cdot x^4 = x^7$ |
| Quotient | $a^m / a^n = a^{m-n}$ | $x^5 / x^2 = x^3$ |
| Power | $(a^m)^n = a^{mn}$ | $(x^3)^2 = x^6$ |
| Zero | $a^0 = 1$ (when $a \\neq 0$) | $7^0 = 1$ |
| Negative | $a^{-n} = 1/a^n$ | $x^{-2} = 1/x^2$ |
| Distribution | $(ab)^n = a^n b^n$ | $(2x)^3 = 8x^3$ |

### SAT Trap ⚠️

$(x + y)^2 \\neq x^2 + y^2$ — you MUST FOIL!

$(x + y)^2 = x^2 + 2xy + y^2$

But $(xy)^2 = x^2 y^2$ ✓ — distribution works for products, NOT sums.`
    },
    {
      id: 'er1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponent Rules** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^5 \\cdot x^3}{x^2}$',
            options: ['$x^6$', '$x^8$', '$x^{10}$', '$x^4$'],
            correctAnswer: 0,
            explanation: 'Numerator: $x^{5+3} = x^8$. Divide: $x^{8-2} = x^6$.'
          },
          {
            question: 'If $3^{x+1} = 81$, what is $x$?',
            options: ['$3$', '$4$', '$2$', '$5$'],
            correctAnswer: 0,
            explanation: '$81 = 3^4$, so $3^{x+1} = 3^4$ → $x + 1 = 4$ → $x = 3$.'
          },
          {
            question: 'What is $(2x^3)^4$?',
            options: ['$16x^{12}$', '$8x^{12}$', '$16x^7$', '$2x^{12}$'],
            correctAnswer: 0,
            explanation: '$(2x^3)^4 = 2^4 \\cdot (x^3)^4 = 16x^{12}$. Distribute the exponent to BOTH the coefficient and the variable.'
          }
        ]
      }
    },
    {
      id: 'er1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Multiply same base → ADD exponents; Divide same base → SUBTRACT exponents
- Power of a power → MULTIPLY exponents
- Exponents distribute over multiplication but NOT over addition
- Convert bases to match when solving exponential equations`
    }
  ]
};
