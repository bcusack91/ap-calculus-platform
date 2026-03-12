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

For binomial denominators: multiply by the **conjugate**.

$$\\frac{2}{3 + \\sqrt{2}} \\cdot \\frac{3 - \\sqrt{2}}{3 - \\sqrt{2}} = \\frac{2(3 - \\sqrt{2})}{9 - 2} = \\frac{6 - 2\\sqrt{2}}{7}$$`
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
      id: 'er2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $a^{m/n} = \\sqrt[n]{a^m}$: denominator = root, numerator = power
- Simplify radicals by extracting perfect square factors
- Rationalize by multiplying by the conjugate for binomial denominators
- Order of operations for $a^{m/n}$: root first (then power) is usually easier`
    }
  ]
};
