export const satExponentsPart6Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er6-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 6 of 7 — Simplifying Complex Expressions**

### Combining Radicals

- $a\\sqrt{n} + b\\sqrt{n} = (a + b)\\sqrt{n}$ (like terms!)
- $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$
- $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$

**Example:** $3\\sqrt{2} + 5\\sqrt{2} - \\sqrt{2} = 7\\sqrt{2}$

But: $3\\sqrt{2} + 5\\sqrt{3}$ **cannot** be simplified further.

### Simplify Before Combining

$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$

### Nested Radicals and Exponents

$$\\left(\\frac{x^4}{y^2}\\right)^{3/2} = \\frac{x^6}{y^3}$$

Apply the exponent to both numerator and denominator: $x^{4 \\cdot 3/2} = x^6$ and $y^{2 \\cdot 3/2} = y^3$.`
    },
    {
      id: 'er6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Simplifying Expressions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\sqrt{45} + \\sqrt{20}$',
            options: ['$5\\sqrt{5}$', '$\\sqrt{65}$', '$7\\sqrt{5}$', '$3\\sqrt{5}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$. Sum: $3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$.'
          },
          {
            question: 'What is $\\left(\\frac{8}{27}\\right)^{2/3}$?',
            options: ['$4/9$', '$2/3$', '$16/27$', '$64/729$'],
            correctAnswer: 0,
            explanation: '$\\left(\\frac{8}{27}\\right)^{2/3} = \\frac{8^{2/3}}{27^{2/3}} = \\frac{(\\sqrt[3]{8})^2}{(\\sqrt[3]{27})^2} = \\frac{4}{9}$.'
          },
          {
            question: 'If $\\sqrt{x} \\cdot \\sqrt{x^3} = x^n$, what is $n$?',
            options: ['$2$', '$3/2$', '$4$', '$3$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x} \\cdot \\sqrt{x^3} = x^{1/2} \\cdot x^{3/2} = x^{(1/2 + 3/2)} = x^2$. So $n = 2$.'
          }
        ]
      }
    },
    {
      id: 'er6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Only combine radicals with the **same radicand**: $a\\sqrt{n} \\pm b\\sqrt{n}$
- Simplify each radical first, THEN combine
- Fraction exponents distribute to numerator and denominator
- Convert everything to exponent form when the expression is complex`
    }
  ]
};
