export const satPassportAdvPart3Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa3-intro',
      type: 'text' as const,
      content: `
# 📊 Rational Expressions

**Part 3 of 7 — Simplify, Multiply/Divide, Add/Subtract with LCD, Restrictions**

A **rational expression** is a fraction where the numerator and denominator are polynomials:

$$\\frac{P(x)}{Q(x)} \\quad \\text{where } Q(x) \\neq 0$$

**Restrictions:** Values of $x$ that make the denominator zero are **excluded** from the domain.

**Example 1:** $\\frac{x+2}{x^2 - 4}$

$$x^2 - 4 = (x+2)(x-2) \\implies x \\neq 2, \\; x \\neq -2$$

Simplify by cancelling the common factor:

$$\\frac{x+2}{(x+2)(x-2)} = \\frac{1}{x-2}, \\quad x \\neq -2$$

**SAT Tip:** Always factor first, then cancel common factors. Never cancel individual terms — only factors.
      `
    },
    {
      id: 'sat-pa3-multdiv',
      type: 'text' as const,
      content: `
## Multiplying & Dividing Rational Expressions

**Multiply:** Factor everything, cancel common factors, then multiply straight across.

$$\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD}$$

**Divide:** Flip the second fraction and multiply.

$$\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$$

**Example 2:** Simplify $\\frac{x^2 - 9}{x+1} \\cdot \\frac{x+1}{x-3}$

$$= \\frac{(x+3)(x-3)}{x+1} \\cdot \\frac{x+1}{x-3} = \\frac{(x+3)\\cancel{(x-3)}}{\\cancel{x+1}} \\cdot \\frac{\\cancel{x+1}}{\\cancel{x-3}} = x + 3$$

**Example 3:** Simplify $\\frac{2x}{x+4} \\div \\frac{6x^2}{x^2-16}$

$$= \\frac{2x}{x+4} \\cdot \\frac{(x+4)(x-4)}{6x^2} = \\frac{2x(x-4)}{6x^2} = \\frac{x-4}{3x}$$
      `
    },
    {
      id: 'sat-pa3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Simplifying Rational Expressions** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 - 25}{x^2 + 10x + 25}$',
            options: ['$\\frac{x-5}{x+5}$', '$\\frac{x+5}{x-5}$', '$\\frac{1}{x+5}$', '$\\frac{x-5}{(x+5)^2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{(x+5)(x-5)}{(x+5)^2} = \\frac{x-5}{x+5}$.'
          },
          {
            question: 'Which value is NOT in the domain of $\\frac{3x}{x^2 - x - 6}$?',
            options: ['$x = 0$', '$x = 2$', '$x = 3$', '$x = -3$'],
            correctAnswer: 2,
            explanation: '$x^2 - x - 6 = (x-3)(x+2) = 0$ when $x = 3$ or $x = -2$. So $x = 3$ is excluded.'
          }
        ]
      }
    },
    {
      id: 'sat-pa3-addsub',
      type: 'text' as const,
      content: `
## Adding & Subtracting Rational Expressions

**Same denominator:** Combine numerators directly.

$$\\frac{A}{D} + \\frac{B}{D} = \\frac{A + B}{D}$$

**Different denominators:** Find the **Least Common Denominator (LCD)**, rewrite each fraction, then combine.

**Example 4:** $\\frac{2}{x+1} + \\frac{3}{x-2}$

LCD $= (x+1)(x-2)$

$$= \\frac{2(x-2)}{(x+1)(x-2)} + \\frac{3(x+1)}{(x+1)(x-2)}$$

$$= \\frac{2x - 4 + 3x + 3}{(x+1)(x-2)} = \\frac{5x - 1}{(x+1)(x-2)}$$

**Example 5:** $\\frac{x}{x-3} - \\frac{2}{x+3}$

LCD $= (x-3)(x+3)$

$$= \\frac{x(x+3) - 2(x-3)}{(x-3)(x+3)} = \\frac{x^2 + 3x - 2x + 6}{x^2 - 9} = \\frac{x^2 + x + 6}{x^2 - 9}$$
      `
    },
    {
      id: 'sat-pa3-input1',
      type: 'input-boxes' as const,
      content: `
**Rational Expression Practice** 🧮

1) Simplify $\\frac{x^2 - 4}{x + 2}$. What is the simplified expression evaluated at $x = 5$?

2) $\\frac{1}{x} + \\frac{1}{x+1}$ — if $x = 2$, what is the value? Write as a fraction: numerator/denominator (e.g. 5/6).

3) For $\\frac{x+3}{x^2-9}$, what value of $x$ (positive) is NOT in the domain?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '5/6', '3'],
        hint1: '$\\frac{x^2-4}{x+2} = \\frac{(x+2)(x-2)}{x+2} = x - 2$. Plug in $x = 5$.',
        hint2: '$\\frac{1}{2} + \\frac{1}{3} = \\frac{3+2}{6}$.',
        hint3: '$x^2 - 9 = (x+3)(x-3) = 0$ when $x = 3$ or $x = -3$.',
        explanation: '1) $x-2 = 5-2 = 3$. 2) $\\frac{1}{2}+\\frac{1}{3} = \\frac{5}{6}$. 3) $x = 3$ makes the denominator zero.'
      }
    },
    {
      id: 'sat-pa3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rational Expression Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To divide two fractions you …',
            options: ['multiply straight across', 'flip the second and multiply', 'cross-multiply', 'find the LCD']
          },
          {
            label: 'A value excluded from the domain makes the … equal to zero.',
            options: ['numerator', 'denominator', 'coefficient', 'exponent']
          },
          {
            label: 'The LCD of $\\frac{1}{x+1}$ and $\\frac{1}{x-1}$ is …',
            options: ['$(x+1)(x-1)$', '$x^2$', '$(x+1)^2$', '$x+1$']
          }
        ],
        correctAnswers: ['flip the second and multiply', 'denominator', '$(x+1)(x-1)$'],
        hint1: 'Division of fractions becomes multiplication by the reciprocal.',
        hint2: 'Domain restrictions come from values that make the fraction undefined.',
        hint3: 'The LCD is the product of distinct linear factors.',
        explanation: 'Dividing fractions: flip and multiply. Domain excludes denominator zeros. LCD $= (x+1)(x-1)$.'
      }
    },
    {
      id: 'sat-pa3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x^2 - 1}{x + 1} = 10$, what is the value of $x$?',
            options: ['$9$', '$11$', '$10$', '$-11$'],
            correctAnswer: 1,
            explanation: '$\\frac{(x+1)(x-1)}{x+1} = x - 1 = 10 \\implies x = 11$.'
          },
          {
            question: 'Which expression is equivalent to $\\frac{2}{x-3} + \\frac{1}{x+3}$?',
            options: ['$\\frac{3}{x^2-9}$', '$\\frac{3x+3}{x^2-9}$', '$\\frac{3x+9}{x^2-9}$', '$\\frac{3x+3}{2x}$'],
            correctAnswer: 1,
            explanation: 'LCD $= (x-3)(x+3) = x^2-9$. Numerator: $2(x+3) + 1(x-3) = 2x+6+x-3 = 3x+3$.'
          }
        ]
      }
    }
  ]
};
