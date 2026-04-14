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

### SAT Trap

$(x + y)^2 \\neq x^2 + y^2$ — you MUST FOIL!

$(x + y)^2 = x^2 + 2xy + y^2$

But $(xy)^2 = x^2 y^2$ ✓ — distribution works for products, NOT sums.

---

### Worked Example 1

**Simplify $\\frac{(2x^3)^2 \\cdot x^4}{4x^5}$.**

| Step | Work |
|------|------|
| Expand $(2x^3)^2$ | $= 4x^6$ |
| Multiply numerator | $4x^6 \\cdot x^4 = 4x^{10}$ |
| Divide | $\\frac{4x^{10}}{4x^5} = x^5$ |

### Worked Example 2

**Rewrite $\\frac{1}{x^{-3}}$ with positive exponents.**

| Step | Work |
|------|------|
| Negative exponent in denominator | $\\frac{1}{x^{-3}} = x^3$ |
| Think of it as | $1 \\div \\frac{1}{x^3} = x^3$ |`
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
      id: 'er1-text2',
      type: 'text' as const,
      content: `### Negative Exponents in Fractions

A negative exponent "flips" a factor between numerator and denominator:

$$\\frac{x^{-2}}{y^{-3}} = \\frac{y^3}{x^2}$$

### Worked Example 3

**Simplify $\\frac{3a^{-2}b^3}{6a^4b^{-1}}$.**

| Step | Work |
|------|------|
| Coefficients | $3/6 = 1/2$ |
| $a$ terms | $a^{-2}/a^4 = a^{-6} = 1/a^6$ |
| $b$ terms | $b^3/b^{-1} = b^{3-(-1)} = b^4$ |
| Final | $\\frac{b^4}{2a^6}$ |

### Common Base Conversions

| Number | As a Power of 2 | As a Power of 3 |
|--------|-----------------|-----------------|
| 4 | $2^2$ | — |
| 8 | $2^3$ | — |
| 16 | $2^4$ | — |
| 9 | — | $3^2$ |
| 27 | — | $3^3$ |
| 81 | — | $3^4$ |`
    },
    {
      id: 'er1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Harder Exponent Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $2^a = 8$ and $3^b = 27$, what is $2^a \\cdot 3^b$?',
            options: ['$216$', '$24$', '$11$', '$648$'],
            correctAnswer: 0,
            explanation: '$2^a = 8$ so $a = 3$. $3^b = 27$ so $b = 3$. $8 \\cdot 27 = 216$.'
          },
          {
            question: 'Simplify: $\\frac{(x^2y)^3}{x^4y^2}$',
            options: ['$x^2y$', '$x^6y^3$', '$x^2y^3$', '$xy$'],
            correctAnswer: 0,
            explanation: '$(x^2y)^3 = x^6y^3$. Divide: $x^{6-4}y^{3-2} = x^2y$.'
          },
          {
            question: 'What is $(-3)^0 + (-3)^1 + (-3)^2$?',
            options: ['$7$', '$-3$', '$3$', '$-11$'],
            correctAnswer: 0,
            explanation: '$(-3)^0 = 1$, $(-3)^1 = -3$, $(-3)^2 = 9$. Sum: $1 + (-3) + 9 = 7$.'
          }
        ]
      }
    },
    {
      id: 'er1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which Rule?** 🔍\n\nIdentify the exponent rule used in each simplification.',
      exercise: {
        dropdowns: [
          { label: '$x^3 \\cdot x^5 = x^8$', options: ['Product rule (add exponents)', 'Power rule', 'Quotient rule', 'Distribution'] },
          { label: '$(x^2)^4 = x^8$', options: ['Power rule (multiply exponents)', 'Product rule', 'Quotient rule', 'Distribution'] },
          { label: '$\\frac{x^7}{x^3} = x^4$', options: ['Quotient rule (subtract exponents)', 'Product rule', 'Power rule', 'Negative exponent'] },
          { label: '$(3x)^2 = 9x^2$', options: ['Distribution rule', 'Product rule', 'Power rule', 'Quotient rule'] }
        ],
        correctAnswers: ['Product rule (add exponents)', 'Power rule (multiply exponents)', 'Quotient rule (subtract exponents)', 'Distribution rule'],
        hint1: 'Same base multiplied → add exponents.',
        hint2: 'A power raised to another power → multiply exponents.',
        hint3: 'Same base divided → subtract exponents.',
        explanation: 'Multiply: add ($3+5=8$). Power of power: multiply ($2 \\times 4=8$). Divide: subtract ($7-3=4$). Product to a power: distribute ($3^2 \\cdot x^2$).'
      }
    },
    {
      id: 'er1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Operation | What to Do with Exponents |
|-----------|--------------------------|
| Multiply same base | Add: $a^m \\cdot a^n = a^{m+n}$ |
| Divide same base | Subtract: $a^m / a^n = a^{m-n}$ |
| Power of a power | Multiply: $(a^m)^n = a^{mn}$ |
| Product to a power | Distribute: $(ab)^n = a^n b^n$ |
| Negative exponent | Reciprocal: $a^{-n} = 1/a^n$ |
| Zero exponent | Always 1: $a^0 = 1$ ($a \\neq 0$) |

- Exponents do NOT distribute over addition: $(a + b)^n \\neq a^n + b^n$
- Convert to matching bases when comparing or solving equations`
    }
  ]
};
