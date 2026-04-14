export const satExponentsPart2Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er2-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 2 of 7 — Radicals and Rational Exponents**

### Radical ↔ Exponent Conversion

$$a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$

**Examples:**
- $x^{1/2} = \\sqrt{x}$
- $x^{2/3} = \\sqrt[3]{x^2}$
- $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$

### Simplifying Radicals

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$$

Look for **perfect square factors**: 4, 9, 16, 25, 36, 49, 64, 81, 100...

### Rationalizing the Denominator

$$\\frac{3}{\\sqrt{5}} = \\frac{3}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}$$

---

### Worked Example 1

**Evaluate $16^{3/4}$.**

| Step | Work |
|------|------|
| Root first (denominator = 4) | $\\sqrt[4]{16} = 2$ |
| Then power (numerator = 3) | $2^3 = 8$ |
| Answer | $16^{3/4} = 8$ |

### Worked Example 2

**Rationalize $\\frac{2}{3 + \\sqrt{2}}$.**

| Step | Work |
|------|------|
| Multiply by conjugate | $\\frac{2}{3+\\sqrt{2}} \\cdot \\frac{3-\\sqrt{2}}{3-\\sqrt{2}}$ |
| Numerator | $2(3 - \\sqrt{2}) = 6 - 2\\sqrt{2}$ |
| Denominator | $(3)^2 - (\\sqrt{2})^2 = 9 - 2 = 7$ |
| Answer | $\\frac{6 - 2\\sqrt{2}}{7}$ |`
    },
    {
      id: 'er2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Radicals & Rational Exponents** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $27^{2/3}$?',
            options: ['$9$', '$18$', '$3$', '$81$'],
            correctAnswer: 0,
            explanation: '$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$. Take the cube root first, then square.'
          },
          {
            question: 'Simplify: $\\sqrt{72}$',
            options: ['$6\\sqrt{2}$', '$8\\sqrt{2}$', '$3\\sqrt{8}$', '$36\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$.'
          },
          {
            question: 'Which expression equals $x^{-3/4}$?',
            options: ['$\\frac{1}{\\sqrt[4]{x^3}}$', '$\\sqrt[4]{x^3}$', '$-\\sqrt[4]{x^3}$', '$\\frac{1}{x^3}$'],
            correctAnswer: 0,
            explanation: '$x^{-3/4} = 1/x^{3/4} = 1/\\sqrt[4]{x^3}$. Negative exponent → reciprocal; fractional exponent → radical.'
          }
        ]
      }
    },
    {
      id: 'er2-text2',
      type: 'text' as const,
      content: `### Converting Between Forms

The SAT often asks you to rewrite an expression. Know these equivalences:

| Radical Form | Exponent Form |
|-------------|---------------|
| $\\sqrt{x}$ | $x^{1/2}$ |
| $\\sqrt[3]{x}$ | $x^{1/3}$ |
| $\\frac{1}{\\sqrt{x}}$ | $x^{-1/2}$ |
| $x\\sqrt{x}$ | $x^{3/2}$ |
| $\\sqrt{x^3}$ | $x^{3/2}$ |

### Worked Example 3

**Rewrite $\\frac{x^2}{\\sqrt[3]{x}}$ using a single exponent.**

| Step | Work |
|------|------|
| Rewrite radical | $\\frac{x^2}{x^{1/3}}$ |
| Subtract exponents | $x^{2 - 1/3} = x^{5/3}$ |

### Worked Example 4

**Simplify $\\sqrt{x^4 y^6}$.**

| Step | Work |
|------|------|
| Apply $\\sqrt{}$ to each | $\\sqrt{x^4} \\cdot \\sqrt{y^6}$ |
| Simplify | $x^2 \\cdot |y^3| = x^2 y^3$ (assuming $y \\geq 0$) |`
    },
    {
      id: 'er2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Conversion Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which is equivalent to $x^{5/2}$?',
            options: ['$x^2\\sqrt{x}$', '$\\sqrt{x^5}$ only', '$x^2 \\cdot x^{1/2}$', 'All of these'],
            correctAnswer: 3,
            explanation: '$x^{5/2} = x^2 \\cdot x^{1/2} = x^2\\sqrt{x} = \\sqrt{x^5}$. All three forms are equivalent.'
          },
          {
            question: 'Simplify: $(x^{1/3})^6$',
            options: ['$x^2$', '$x^{18}$', '$x^{1/2}$', '$x^3$'],
            correctAnswer: 0,
            explanation: '$(x^{1/3})^6 = x^{6/3} = x^2$. Multiply the exponents.'
          },
          {
            question: 'What is $\\frac{\\sqrt{32}}{\\sqrt{8}}$?',
            options: ['$2$', '$4$', '$\\sqrt{4}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{\\sqrt{32}}{\\sqrt{8}} = \\sqrt{32/8} = \\sqrt{4} = 2$. Both A and C equal 2.'
          }
        ]
      }
    },
    {
      id: 'er2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Radical or Exponent?** 🔍\n\nConvert each expression to the other form.',
      exercise: {
        dropdowns: [
          { label: '$\\sqrt[3]{x^2}$ in exponent form', options: ['x^(2/3)', 'x^(3/2)', 'x^(2/3) or 2x^(1/3)', 'x^6'] },
          { label: '$x^{-1/2}$ in radical form', options: ['1/sqrt(x)', 'sqrt(x)', '-sqrt(x)', '1/x^2'] },
          { label: '$\\sqrt{x} \\cdot \\sqrt[3]{x}$ as single power', options: ['x^(5/6)', 'x^(1/6)', 'x^(2/3)', 'x^(1/5)'] },
          { label: '$(\\sqrt{x})^3$ as single power', options: ['x^(3/2)', 'x^(2/3)', 'x^3', 'x^(1/3)'] }
        ],
        correctAnswers: ['x^(2/3)', '1/sqrt(x)', 'x^(5/6)', 'x^(3/2)'],
        hint1: 'The index (root) goes in the denominator of the fraction exponent.',
        hint2: 'Negative exponent → reciprocal.',
        hint3: '$x^{1/2} \\cdot x^{1/3} = x^{1/2 + 1/3}$. Find a common denominator.',
        explanation: '$\\sqrt[3]{x^2} = x^{2/3}$. $x^{-1/2} = 1/x^{1/2} = 1/\\sqrt{x}$. $x^{1/2} \\cdot x^{1/3} = x^{3/6 + 2/6} = x^{5/6}$. $(x^{1/2})^3 = x^{3/2}$.'
      }
    },
    {
      id: 'er2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Key Rule |
|---------|----------|
| $a^{m/n}$ | Denominator = root, numerator = power |
| Order | Root first, then power (usually easier) |
| Simplify radicals | Extract perfect square/cube factors |
| Rationalize | Multiply by $\\frac{\\sqrt{a}}{\\sqrt{a}}$ or conjugate |
| $x \\cdot \\sqrt{x}$ | $= x^{3/2}$ |
| $\\frac{1}{\\sqrt{x}}$ | $= x^{-1/2}$ |`
    }
  ]
};
