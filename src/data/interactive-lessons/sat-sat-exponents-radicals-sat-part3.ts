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

- Moving decimal **right** = smaller exponent
- Moving decimal **left** = larger exponent
- $10^3 = 1{,}000$ (3 zeros)

---

### Worked Example 1

**Multiply $(4.2 \\times 10^5)(3 \\times 10^{-2})$.**

| Step | Work |
|------|------|
| Multiply coefficients | $4.2 \\times 3 = 12.6$ |
| Add exponents | $10^{5 + (-2)} = 10^3$ |
| Result | $12.6 \\times 10^3$ |
| Adjust to proper form | $1.26 \\times 10^4$ |

### Worked Example 2

**How many times larger is $6 \\times 10^8$ than $3 \\times 10^5$?**

| Step | Work |
|------|------|
| Divide | $\\frac{6 \\times 10^8}{3 \\times 10^5} = 2 \\times 10^3$ |
| Answer | $2{,}000$ times larger |`
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
      id: 'er3-text2',
      type: 'text' as const,
      content: `### Adding/Subtracting in Scientific Notation

To add or subtract, the exponents **must match** first.

### Worked Example 3

**Add $3.5 \\times 10^4 + 2.1 \\times 10^3$.**

| Step | Work |
|------|------|
| Match exponents | $2.1 \\times 10^3 = 0.21 \\times 10^4$ |
| Add | $3.5 \\times 10^4 + 0.21 \\times 10^4 = 3.71 \\times 10^4$ |

### Worked Example 4

**A cell has mass $8.3 \\times 10^{-12}$ grams. How many cells in 1 gram?**

| Step | Work |
|------|------|
| Divide | $\\frac{1}{8.3 \\times 10^{-12}}$ |
| Simplify | $\\frac{1}{8.3} \\times 10^{12} \\approx 0.12 \\times 10^{12}$ |
| Proper form | $\\approx 1.2 \\times 10^{11}$ |

> **SAT Tip:** When comparing very large or very small numbers, look at the exponent first — bigger exponent = bigger number (for positive coefficients).`
    },
    {
      id: 'er3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Real-World Scientific Notation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which is larger: $9.9 \\times 10^5$ or $1.1 \\times 10^6$?',
            options: ['$1.1 \\times 10^6$', '$9.9 \\times 10^5$', 'They are equal', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$9.9 \\times 10^5 = 990{,}000$ and $1.1 \\times 10^6 = 1{,}100{,}000$. The one with the bigger exponent wins (even though 9.9 > 1.1).'
          },
          {
            question: 'A computer processes $4 \\times 10^9$ operations per second. How many operations in 5 minutes?',
            options: ['$1.2 \\times 10^{12}$', '$2 \\times 10^{10}$', '$1.2 \\times 10^{11}$', '$2 \\times 10^{11}$'],
            correctAnswer: 0,
            explanation: '5 minutes = 300 seconds. $4 \\times 10^9 \\times 300 = 4 \\times 3 \\times 10^{11} = 1.2 \\times 10^{12}$.'
          },
          {
            question: '$\\frac{6 \\times 10^{-3}}{2 \\times 10^{-7}} = $',
            options: ['$3 \\times 10^4$', '$3 \\times 10^{-4}$', '$3 \\times 10^{10}$', '$12 \\times 10^{-10}$'],
            correctAnswer: 0,
            explanation: '$\\frac{6}{2} = 3$ and $10^{-3}/10^{-7} = 10^{-3-(-7)} = 10^4$. Answer: $3 \\times 10^4$.'
          }
        ]
      }
    },
    {
      id: 'er3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Convert and Compare** 🔍\n\nSelect the correct scientific notation or comparison.',
      exercise: {
        dropdowns: [
          { label: '$350{,}000$ in scientific notation', options: ['3.5 × 10^5', '35 × 10^4', '3.5 × 10^6', '0.35 × 10^6'] },
          { label: '$0.0091$ in scientific notation', options: ['9.1 × 10^(-3)', '91 × 10^(-4)', '9.1 × 10^(-2)', '0.91 × 10^(-2)'] },
          { label: 'Largest: $5×10^3$, $8×10^2$, $2×10^4$', options: ['2 × 10^4', '5 × 10^3', '8 × 10^2', 'All equal'] },
          { label: '$(2 \\times 10^3)^3$', options: ['8 × 10^9', '6 × 10^9', '2 × 10^9', '8 × 10^6'] }
        ],
        correctAnswers: ['3.5 × 10^5', '9.1 × 10^(-3)', '2 × 10^4', '8 × 10^9'],
        hint1: 'Move decimal until coefficient is between 1 and 10.',
        hint2: 'Count places the decimal moves to the right.',
        hint3: 'Compare exponents first — the highest exponent wins.',
        explanation: '$350{,}000 = 3.5 \\times 10^5$. $0.0091 = 9.1 \\times 10^{-3}$. Largest exponent is $10^4 → 2 \\times 10^4$. $(2)^3 \\times (10^3)^3 = 8 \\times 10^9$.'
      }
    },
    {
      id: 'er3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Operation | Rule |
|-----------|------|
| Multiply | Multiply coefficients, add exponents |
| Divide | Divide coefficients, subtract exponents |
| Power | Raise coefficient to power, multiply exponents |
| Add/Subtract | Match exponents first, then combine |
| Compare | Look at exponent first (higher = bigger) |

- Always adjust so coefficient is between 1 and 10
- SAT context: distances, populations, atomic sizes — the math stays the same`
    }
  ]
};
