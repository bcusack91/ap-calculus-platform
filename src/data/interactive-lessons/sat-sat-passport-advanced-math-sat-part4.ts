export const satPassportAdvPart4Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa4-intro',
      type: 'text' as const,
      content: `
# √ Radical & Rational Exponents

**Part 4 of 7 — Simplify, Solve Radical Equations, Extraneous Solutions**

**Rational exponents** connect exponents and radicals:

$$a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$

| Expression | Equivalent |
|------------|-----------|
| $x^{1/2}$ | $\\sqrt{x}$ |
| $x^{1/3}$ | $\\sqrt[3]{x}$ |
| $x^{2/3}$ | $\\sqrt[3]{x^2}$ |
| $x^{-1/2}$ | $\\frac{1}{\\sqrt{x}}$ |

**Key rules:**
- $a^m \\cdot a^n = a^{m+n}$
- $\\frac{a^m}{a^n} = a^{m-n}$
- $(a^m)^n = a^{mn}$

**SAT Tip:** Convert all radicals to rational exponents when simplifying — it makes the algebra easier.
      `
    },
    {
      id: 'sat-pa4-simplify',
      type: 'text' as const,
      content: `
## Simplifying Radicals

**Example 1:** Simplify $\\sqrt{72}$.

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$

**Example 2:** Simplify $\\sqrt[3]{54}$.

$$\\sqrt[3]{54} = \\sqrt[3]{27 \\cdot 2} = 3\\sqrt[3]{2}$$

**Example 3:** Simplify $x^{3/4} \\cdot x^{1/4}$.

$$x^{3/4} \\cdot x^{1/4} = x^{3/4 + 1/4} = x^{4/4} = x$$

**Rationalising the denominator:**

$$\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$$
      `
    },
    {
      id: 'sat-pa4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Radical & Exponent Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $8^{2/3}$',
            options: ['$2$', '$4$', '$16$', '$\\frac{16}{3}$'],
            correctAnswer: 1,
            explanation: '$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.'
          },
          {
            question: 'Which is equal to $\\frac{x^{1/2}}{x^{1/4}}$?',
            options: ['$x^{2}$', '$x^{1/4}$', '$x^{3/4}$', '$x^{1/8}$'],
            correctAnswer: 1,
            explanation: '$\\frac{x^{1/2}}{x^{1/4}} = x^{1/2 - 1/4} = x^{1/4}$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa4-solving',
      type: 'text' as const,
      content: `
## Solving Radical Equations

**Strategy:** Isolate the radical, then raise both sides to the appropriate power.

**Example 4:** Solve $\\sqrt{x + 3} = 5$.

$$x + 3 = 25 \\implies x = 22$$

**Check:** $\\sqrt{22 + 3} = \\sqrt{25} = 5$ ✓

**Example 5:** Solve $\\sqrt{2x - 1} = x - 2$.

Square both sides: $2x - 1 = (x-2)^2 = x^2 - 4x + 4$

$$x^2 - 6x + 5 = 0 \\implies (x-5)(x-1) = 0 \\implies x = 5 \\text{ or } x = 1$$

**Check $x = 5$:** $\\sqrt{10-1} = \\sqrt{9} = 3$ and $5-2 = 3$. ✓

**Check $x = 1$:** $\\sqrt{2-1} = 1$ and $1-2 = -1$. ✗ (extraneous!)

**Only $x = 5$ is valid.**

> ⚠️ **Extraneous solutions** arise because squaring can introduce false answers. **Always check your solutions** in the original equation.
      `
    },
    {
      id: 'sat-pa4-input1',
      type: 'input-boxes' as const,
      content: `
**Radical Calculations** 🧮

1) Evaluate $27^{2/3}$.

2) Solve $\\sqrt{x+7} = 4$. What is $x$?

3) Simplify $\\sqrt{50}$ in the form $a\\sqrt{b}$. What is $a$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '9', '5'],
        hint1: '$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2$.',
        hint2: 'Square both sides: $x + 7 = 16$.',
        hint3: '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.',
        explanation: '1) $(\\sqrt[3]{27})^2 = 3^2 = 9$. 2) $x = 16 - 7 = 9$. 3) $\\sqrt{50} = 5\\sqrt{2}$, so $a = 5$.'
      }
    },
    {
      id: 'sat-pa4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Radical & Exponent Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^{-1/2}$ is equivalent to …',
            options: ['$-\\sqrt{x}$', '$\\frac{1}{\\sqrt{x}}$', '$\\sqrt{-x}$', '$-\\frac{1}{x^2}$']
          },
          {
            label: 'An extraneous solution is one that …',
            options: ['solves the original equation', 'appears after an algebraic step but fails the original equation', 'is always negative', 'involves imaginary numbers']
          },
          {
            label: 'To solve $\\sqrt[3]{x} = 4$, you raise both sides to the power …',
            options: ['$2$', '$3$', '$1/3$', '$4$']
          }
        ],
        correctAnswers: ['$\\frac{1}{\\sqrt{x}}$', 'appears after an algebraic step but fails the original equation', '$3$'],
        hint1: 'A negative exponent means reciprocal.',
        hint2: 'Squaring both sides of a radical equation can produce solutions that don\'t satisfy the original.',
        hint3: 'To undo a cube root, cube both sides.',
        explanation: '$x^{-1/2} = 1/\\sqrt{x}$. Extraneous solutions fail the original equation. Cube root is undone by cubing: power 3.'
      }
    },
    {
      id: 'sat-pa4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\sqrt{3x + 1} = x - 1$, what is the sum of all valid solutions?',
            options: ['$5$', '$8$', '$1$', '$0$'],
            correctAnswer: 0,
            explanation: 'Square: $3x+1 = x^2-2x+1 \\Rightarrow x^2 -5x = 0 \\Rightarrow x(x-5) = 0$. $x=0$: $\\sqrt{1}=1$ but $0-1=-1$, extraneous. $x=5$: $\\sqrt{16}=4$ and $5-1=4$ ✓. Sum $= 5$.'
          },
          {
            question: 'If $a = 16^{3/4}$, what is $a$?',
            options: ['$4$', '$8$', '$12$', '$64$'],
            correctAnswer: 1,
            explanation: '$16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$.'
          }
        ]
      }
    }
  ]
};
