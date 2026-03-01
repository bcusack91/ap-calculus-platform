export const actPreAlgebraPart5Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa5-intro',
      type: 'text' as const,
      content: `
# ⚡ Exponents & Roots

**Part 5 of 7 — Rules of Exponents, Square Roots & Order of Operations**

Exponents appear frequently on the ACT. Know these rules cold:

| Rule | Formula | Example |
|------|---------|---------|
| Product | $a^m \\cdot a^n = a^{m+n}$ | $2^3 \\cdot 2^4 = 2^7 = 128$ |
| Quotient | $\\frac{a^m}{a^n} = a^{m-n}$ | $\\frac{5^6}{5^2} = 5^4 = 625$ |
| Power of a Power | $(a^m)^n = a^{mn}$ | $(3^2)^3 = 3^6 = 729$ |
| Zero Exponent | $a^0 = 1$ (for $a \\neq 0$) | $7^0 = 1$ |
| Negative Exponent | $a^{-n} = \\frac{1}{a^n}$ | $4^{-2} = \\frac{1}{16}$ |
      `
    },
    {
      id: 'act-pa5-roots',
      type: 'text' as const,
      content: `
## Square Roots & Simplifying

$$\\sqrt{a} \\text{ is the non-negative number whose square is } a.$$

**Perfect squares to memorise:** $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$

**Simplifying radicals:** Factor out the largest perfect square.

**Example 1:** $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$

**Example 2:** $\\sqrt{50} + \\sqrt{18} = 5\\sqrt{2} + 3\\sqrt{2} = 8\\sqrt{2}$

**Example 3:** $\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6$

**Key property:** $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ (for $a, b \\geq 0$)
      `
    },
    {
      id: 'act-pa5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Exponents & Roots** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify $\\frac{3^5}{3^2}$.',
            options: ['$3^3 = 27$', '$3^7 = 2187$', '$3^{10} = 59049$', '$1^3 = 1$'],
            correctAnswer: 0,
            explanation: '$\\frac{3^5}{3^2} = 3^{5-2} = 3^3 = 27$.'
          },
          {
            question: 'What is $\\sqrt{200}$ in simplified form?',
            options: ['$10\\sqrt{2}$', '$2\\sqrt{50}$', '$20\\sqrt{5}$', '$4\\sqrt{5}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{200} = \\sqrt{100 \\cdot 2} = 10\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'act-pa5-pemdas',
      type: 'text' as const,
      content: `
## Order of Operations (PEMDAS)

$$\\text{Parentheses} \\to \\text{Exponents} \\to \\text{Multiplication/Division} \\to \\text{Addition/Subtraction}$$

Multiplication and division are done **left to right** (same level). Likewise for addition and subtraction.

**Example 4:** Evaluate $3 + 2 \\times 4^2 - 10 \\div 5$.

$$= 3 + 2 \\times 16 - 10 \\div 5$$
$$= 3 + 32 - 2$$
$$= 33$$

**Example 5:** Evaluate $\\frac{(6 + 2)^2}{4} - 3^2$.

$$= \\frac{8^2}{4} - 9 = \\frac{64}{4} - 9 = 16 - 9 = 7$$

**ACT Tip:** Fraction bars act as grouping symbols — evaluate numerator and denominator separately.
      `
    },
    {
      id: 'act-pa5-input1',
      type: 'input-boxes' as const,
      content: `
**Exponents & Roots Practice** 🧮

1) Evaluate: $2^5$
2) Simplify $\\sqrt{48}$. Enter in the form $a\\sqrt{b}$ *(e.g. 4sqrt3)*.
3) Evaluate: $5 \\times 3 - 4^2 + 1$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '4sqrt3', '0'],
        hint1: '$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2$.',
        hint2: '$48 = 16 \\times 3$ and $\\sqrt{16} = 4$.',
        hint3: 'PEMDAS: exponents first, then multiply, then add/subtract left to right.',
        explanation: '$2^5 = 32$. $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$. $5 \\times 3 - 16 + 1 = 15 - 16 + 1 = 0$.'
      }
    },
    {
      id: 'act-pa5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$a^0 = $ ______ (for $a \\neq 0$)',
            options: ['$0$', '$1$', '$a$', 'undefined']
          },
          {
            label: 'In PEMDAS, multiplication and division are evaluated …',
            options: ['multiplication first', 'division first', 'left to right', 'right to left']
          },
          {
            label: '$\\sqrt{a \\cdot b} = $ ______',
            options: ['$\\sqrt{a} + \\sqrt{b}$', '$\\sqrt{a} \\cdot \\sqrt{b}$', '$a\\sqrt{b}$', '$\\sqrt{a+b}$']
          }
        ],
        correctAnswers: ['$1$', 'left to right', '$\\sqrt{a} \\cdot \\sqrt{b}$'],
        hint1: 'Any nonzero base to the zero power equals 1.',
        hint2: 'Multiplication and division have equal precedence.',
        hint3: 'The product property of radicals.',
        explanation: '$a^0 = 1$. Multiplication and division go left to right. $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$.'
      }
    },
    {
      id: 'act-pa5-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $(-3)^4$?',
            options: ['$-81$', '$-12$', '$12$', '$81$'],
            correctAnswer: 3,
            explanation: '$(-3)^4 = (-3)(-3)(-3)(-3) = 9 \\times 9 = 81$. An even exponent makes the result positive.'
          },
          {
            question: 'Evaluate: $\\frac{2^3 + 3^2}{5}$',
            options: ['$\\frac{11}{5}$', '$\\frac{17}{5}$', '$5$', '$\\frac{35}{5}$'],
            correctAnswer: 1,
            explanation: '$2^3 + 3^2 = 8 + 9 = 17$. So $\\frac{17}{5}$.'
          }
        ]
      }
    }
  ]
};
