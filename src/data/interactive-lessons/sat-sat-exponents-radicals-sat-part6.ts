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

---

### Worked Example 1

**Simplify $\\sqrt{18} + \\sqrt{50} - \\sqrt{8}$.**

| Step | Work |
|------|------|
| Simplify each | $\\sqrt{18} = 3\\sqrt{2}$, $\\sqrt{50} = 5\\sqrt{2}$, $\\sqrt{8} = 2\\sqrt{2}$ |
| Combine | $3\\sqrt{2} + 5\\sqrt{2} - 2\\sqrt{2}$ |
| Result | $6\\sqrt{2}$ |

### Worked Example 2

**Simplify $\\left(\\frac{x^4}{y^2}\\right)^{3/2}$.**

| Step | Work |
|------|------|
| Apply exponent to num. & denom. | $\\frac{(x^4)^{3/2}}{(y^2)^{3/2}}$ |
| Multiply exponents | $\\frac{x^6}{y^3}$ |`
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
      id: 'er6-text2',
      type: 'text' as const,
      content: `### Multiplying Radical Expressions

Use FOIL when multiplying binomials with radicals.

### Worked Example 3

**Expand $(3 + \\sqrt{5})(3 - \\sqrt{5})$.**

| Step | Work |
|------|------|
| Difference of squares | $(3)^2 - (\\sqrt{5})^2$ |
| Simplify | $9 - 5 = 4$ |

This is the **conjugate pattern** — the radical disappears!

### Worked Example 4

**Expand $(2\\sqrt{3} + 1)^2$.**

| Step | Work |
|------|------|
| FOIL pattern | $(2\\sqrt{3})^2 + 2(2\\sqrt{3})(1) + 1^2$ |
| Simplify | $12 + 4\\sqrt{3} + 1$ |
| Result | $13 + 4\\sqrt{3}$ |

### Worked Example 5

**Simplify $\\frac{x^{2/3} \\cdot x^{-1/6}}{x^{1/2}}$.**

| Step | Work |
|------|------|
| Add exponents in numerator | $x^{2/3 + (-1/6)} = x^{4/6 - 1/6} = x^{3/6} = x^{1/2}$ |
| Subtract denominator | $x^{1/2 - 1/2} = x^0 = 1$ |`
    },
    {
      id: 'er6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Complex Simplification** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $(\\sqrt{7} - 2)(\\sqrt{7} + 2)$?',
            options: ['$3$', '$7$', '$-3$', '$11$'],
            correctAnswer: 0,
            explanation: 'Conjugate: $(\\sqrt{7})^2 - 2^2 = 7 - 4 = 3$.'
          },
          {
            question: 'Simplify: $\\frac{\\sqrt{48}}{\\sqrt{3}}$',
            options: ['$4$', '$\\sqrt{16}$', '$4\\sqrt{3}$', 'Both A and B'],
            correctAnswer: 3,
            explanation: '$\\frac{\\sqrt{48}}{\\sqrt{3}} = \\sqrt{48/3} = \\sqrt{16} = 4$. Both A and B are correct.'
          },
          {
            question: 'Simplify: $\\frac{x^{1/3} \\cdot x^{1/3}}{x^{-1/3}}$',
            options: ['$x$', '$x^{1/3}$', '$x^{2/3}$', '$x^{3}$'],
            correctAnswer: 0,
            explanation: 'Numerator: $x^{1/3 + 1/3} = x^{2/3}$. Divide: $x^{2/3 - (-1/3)} = x^{2/3 + 1/3} = x^1 = x$.'
          }
        ]
      }
    },
    {
      id: 'er6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Can These Be Combined?** 🔍\n\nDetermine whether each pair can be simplified into a single term.',
      exercise: {
        dropdowns: [
          { label: '$3\\sqrt{5} + 2\\sqrt{5}$', options: ['Yes → 5√5', 'No — different radicands', 'Yes → 5√10', 'Yes → 6√5'] },
          { label: '$\\sqrt{3} + \\sqrt{12}$', options: ['Yes → 3√3', 'No — different radicands', 'Yes → √15', 'Yes → 4√3'] },
          { label: '$2\\sqrt{3} + 5\\sqrt{2}$', options: ['No — different radicands', 'Yes → 7√5', 'Yes → 7√6', 'Yes → √34'] },
          { label: '$\\sqrt{50} - \\sqrt{32}$', options: ['Yes → √2', 'No — different radicands', 'Yes → √18', 'Yes → 2√2'] }
        ],
        correctAnswers: ['Yes → 5√5', 'Yes → 3√3', 'No — different radicands', 'Yes → √2'],
        hint1: 'Same radicand ($\\sqrt{5}$) → combine coefficients.',
        hint2: '$\\sqrt{12} = 2\\sqrt{3}$, so now both have $\\sqrt{3}$.',
        hint3: '$\\sqrt{3}$ and $\\sqrt{2}$ are different radicands — can\'t combine.',
        explanation: '$3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$. $\\sqrt{3} + 2\\sqrt{3} = 3\\sqrt{3}$. $2\\sqrt{3} + 5\\sqrt{2}$ can\'t be combined. $5\\sqrt{2} - 4\\sqrt{2} = \\sqrt{2}$.'
      }
    },
    {
      id: 'er6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Rule | When It Works |
|------|--------------|
| $a\\sqrt{n} + b\\sqrt{n} = (a+b)\\sqrt{n}$ | Same radicand only |
| $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$ | Always (for non-negative $a, b$) |
| $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$ | Conjugate pattern |
| Simplify first, then combine | $\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3}$ |

- Convert to exponent form for complex fraction simplification
- Conjugate multiplication eliminates radicals in denominators
- $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a + b}$ — radicals don't distribute over addition!`
    }
  ]
};
