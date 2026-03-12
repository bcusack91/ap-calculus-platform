export const satExponentsPart3Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er3-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 3 of 7 — Scientific Notation & Large/Small Numbers**

### Scientific Notation: $a \\times 10^n$

Where $1 \\leq |a| < 10$ and $n$ is an integer.

- Large: $4{,}500{,}000 = 4.5 \\times 10^6$
- Small: $0.00032 = 3.2 \\times 10^{-4}$

### Operations with Scientific Notation

**Multiply:** $(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^9$

**Divide:** $\\frac{8 \\times 10^7}{4 \\times 10^3} = 2 \\times 10^4$

### Powers of 10 Shortcuts

- Moving the decimal **right** = smaller exponent
- Moving the decimal **left** = larger exponent
- $10^3 = 1{,}000$ (3 zeros)

### SAT Context

Scientific notation appears in real-world data questions — population of countries, distances in space, sizes of atoms. The math is the same, just with context.`
    },
    {
      id: 'er3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scientific Notation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Express $0.00078$ in scientific notation:',
            options: ['$7.8 \\times 10^{-4}$', '$78 \\times 10^{-5}$', '$7.8 \\times 10^{-3}$', '$0.78 \\times 10^{-3}$'],
            correctAnswer: 0,
            explanation: 'Move the decimal 4 places right to get $7.8$, so the exponent is $-4$.'
          },
          {
            question: 'What is $(5 \\times 10^3)^2$?',
            options: ['$2.5 \\times 10^{7}$', '$25 \\times 10^{6}$', '$5 \\times 10^{6}$', '$10 \\times 10^{6}$'],
            correctAnswer: 0,
            explanation: '$(5)^2 \\times (10^3)^2 = 25 \\times 10^6 = 2.5 \\times 10^7$ (adjust to proper scientific notation).'
          },
          {
            question: 'The distance from Earth to the Sun is about $9.3 \\times 10^7$ miles. Light travels $1.86 \\times 10^5$ miles per second. About how many seconds does it take light to reach Earth?',
            options: ['$500$', '$50$', '$5{,}000$', '$5$'],
            correctAnswer: 0,
            explanation: '$\\frac{9.3 \\times 10^7}{1.86 \\times 10^5} = \\frac{9.3}{1.86} \\times 10^2 = 5 \\times 10^2 = 500$ seconds.'
          }
        ]
      }
    },
    {
      id: 'er3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Scientific notation: $a \\times 10^n$ where $1 \\leq |a| < 10$
- Multiply: multiply coefficients, add exponents
- Divide: divide coefficients, subtract exponents
- Adjust the result so the coefficient is between 1 and 10`
    }
  ]
};
