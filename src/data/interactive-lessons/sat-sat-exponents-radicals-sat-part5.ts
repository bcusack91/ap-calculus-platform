export const satExponentsPart5Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp5-intro',
      type: 'text' as const,
      content: `
# 🔬 Scientific Notation

**Part 5 of 7 — Converting, Multiplying, Dividing & SAT Calculator Tips**

Scientific notation expresses numbers as:

$$a \\times 10^n \\quad \\text{where } 1 \\le |a| < 10$$

| Standard Form | Scientific Notation |
|--------------|---------------------|
| $3{,}200{,}000$ | $3.2 \\times 10^6$ |
| $0.00045$ | $4.5 \\times 10^{-4}$ |
| $7.1$ | $7.1 \\times 10^0$ |

**Converting tip:** Count how many places the decimal moves.
- Moving **left** → positive exponent (big number).
- Moving **right** → negative exponent (small number).
      `
    },
    {
      id: 'sat-exp5-operations',
      type: 'text' as const,
      content: `
## Operations with Scientific Notation

**Multiplying:** Multiply the coefficients, add the exponents.

$(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^9$

**Dividing:** Divide the coefficients, subtract the exponents.

$\\frac{8 \\times 10^7}{4 \\times 10^3} = 2 \\times 10^4$

**Watch the coefficient!** If it falls outside $[1, 10)$, adjust:

$(5 \\times 10^3)(4 \\times 10^2) = 20 \\times 10^5 = 2.0 \\times 10^6$

**Adding/Subtracting:** Make the exponents the same first.

$3.2 \\times 10^5 + 4.0 \\times 10^4 = 3.2 \\times 10^5 + 0.40 \\times 10^5 = 3.6 \\times 10^5$

---

**SAT Calculator Tip:** On your calculator, enter scientific notation as \`3.2 EE 5\` (not \`3.2 × 10^5\`). The \`EE\` or \`EXP\` key is faster and avoids mistakes.
      `
    },
    {
      id: 'sat-exp5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Express $0.00072$ in scientific notation.',
            options: ['$7.2 \\times 10^{-4}$', '$72 \\times 10^{-5}$', '$7.2 \\times 10^{-3}$', '$0.72 \\times 10^{-3}$'],
            correctAnswer: 0,
            explanation: 'Move decimal 4 places right: $7.2 \\times 10^{-4}$. Note: $72 \\times 10^{-5}$ is numerically equal but not proper scientific notation (72 is not between 1 and 10).'
          },
          {
            question: 'Compute: $(6 \\times 10^3)(5 \\times 10^{-7})$',
            options: ['$30 \\times 10^{-4}$', '$3.0 \\times 10^{-3}$', '$3.0 \\times 10^{-4}$', '$11 \\times 10^{-4}$'],
            correctAnswer: 1,
            explanation: '$6 \\times 5 = 30$ and $10^{3+(-7)} = 10^{-4}$. So $30 \\times 10^{-4} = 3.0 \\times 10^{-3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Convert each number to proper scientific notation.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$45{,}000$',
            options: ['$4.5 \\times 10^3$', '$4.5 \\times 10^4$', '$45 \\times 10^3$', '$4.5 \\times 10^5$']
          },
          {
            label: '$0.0031$',
            options: ['$3.1 \\times 10^{-2}$', '$31 \\times 10^{-4}$', '$3.1 \\times 10^{-3}$', '$3.1 \\times 10^{-4}$']
          },
          {
            label: '$602{,}000{,}000{,}000{,}000{,}000{,}000{,}000$',
            options: ['$6.02 \\times 10^{21}$', '$6.02 \\times 10^{23}$', '$6.02 \\times 10^{24}$', '$60.2 \\times 10^{22}$']
          }
        ],
        correctAnswers: ['$4.5 \\times 10^4$', '$3.1 \\times 10^{-3}$', '$6.02 \\times 10^{23}$'],
        hint1: '$45{,}000 = 4.5$ with the decimal moved 4 places.',
        hint2: '$0.0031$: decimal moves 3 places right to get $3.1$.',
        hint3: 'That\'s Avogadro\'s number: $6.02 \\times 10^{23}$.',
        explanation: 'Remember: coefficient must be between 1 and 10.'
      }
    },
    {
      id: 'sat-exp5-input',
      type: 'input-boxes' as const,
      content: `
**Enter just the exponent (the power of 10).** 🧮

1) $8{,}300{,}000 = 8.3 \\times 10^{?}$ → exponent = ?

2) $\\frac{9 \\times 10^8}{3 \\times 10^5} = 3 \\times 10^{?}$ → exponent = ?

3) $(2 \\times 10^4)^3 = 8 \\times 10^{?}$ → exponent = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '3', '12'],
        hint1: 'Count: $8{,}300{,}000$ has the decimal moving 6 places.',
        hint2: 'Divide coefficients: $9/3 = 3$. Subtract exponents: $8 - 5 = 3$.',
        hint3: '$(2 \\times 10^4)^3 = 2^3 \\times 10^{12} = 8 \\times 10^{12}$.',
        explanation: '1) $10^6$. 2) $10^3$. 3) $10^{12}$.'
      }
    },
    {
      id: 'sat-exp5-word',
      type: 'text' as const,
      content: `
## SAT Word Problem Patterns

**Pattern:** "The distance from Earth to the Sun is approximately $1.5 \\times 10^8$ km. Light travels at $3 \\times 10^5$ km/s. How many seconds does it take light to travel from the Sun to Earth?"

**Solution:**

$$t = \\frac{1.5 \\times 10^8}{3 \\times 10^5} = 0.5 \\times 10^3 = 5 \\times 10^2 = 500 \\text{ seconds}$$

**Pattern:** "A bacteria colony doubles every hour. If there are $3 \\times 10^4$ bacteria now, how many will there be in 5 hours?"

$$3 \\times 10^4 \\times 2^5 = 3 \\times 10^4 \\times 32 = 96 \\times 10^4 = 9.6 \\times 10^5$$
      `
    },
    {
      id: 'sat-exp5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A human hair is about $7 \\times 10^{-5}$ meters wide. A red blood cell is about $7 \\times 10^{-6}$ meters wide. A hair is how many times wider than a red blood cell?',
            options: ['$10$', '$100$', '$7$', '$0.1$'],
            correctAnswer: 0,
            explanation: '$\\frac{7 \\times 10^{-5}}{7 \\times 10^{-6}} = 1 \\times 10^{-5-(-6)} = 10^1 = 10$.'
          },
          {
            question: 'If $x = 4 \\times 10^3$ and $y = 5 \\times 10^5$, what is $xy$ in scientific notation?',
            options: ['$2 \\times 10^{9}$', '$20 \\times 10^{8}$', '$2 \\times 10^{8}$', '$9 \\times 10^{8}$'],
            correctAnswer: 0,
            explanation: '$4 \\times 5 = 20$ and $10^{3+5} = 10^8$. So $20 \\times 10^8 = 2 \\times 10^9$.'
          }
        ]
      }
    }
  ]
}
