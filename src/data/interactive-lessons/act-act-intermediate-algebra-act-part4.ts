export const actIntermAlgPart4Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia4-intro',
      type: 'text' as const,
      content: `
# 🔢 Rational Expressions

**Part 4 of 7 — Simplifying, Adding/Subtracting & Complex Fractions**

A **rational expression** is a fraction whose numerator and denominator are polynomials:

$$\\frac{P(x)}{Q(x)}, \\quad Q(x) \\neq 0$$

**Simplifying** means cancelling common factors from top and bottom.

**Example 1:** Simplify $\\frac{x^2 - 9}{x + 3}$.

$$\\frac{(x-3)(x+3)}{x+3} = x - 3, \\quad x \\neq -3$$

**Example 2:** Simplify $\\frac{2x^2 + 6x}{4x}$.

$$\\frac{2x(x + 3)}{4x} = \\frac{x + 3}{2}, \\quad x \\neq 0$$

Always state the restriction(s) on $x$!
      `
    },
    {
      id: 'act-ia4-addsub',
      type: 'text' as const,
      content: `
## Adding & Subtracting

To add or subtract rational expressions, find a **common denominator**.

**Example 3:** $\\frac{2}{x} + \\frac{3}{x+1}$

$$= \\frac{2(x+1)}{x(x+1)} + \\frac{3x}{x(x+1)} = \\frac{2x + 2 + 3x}{x(x+1)} = \\frac{5x + 2}{x(x+1)}$$

**Example 4:** $\\frac{1}{x-2} - \\frac{1}{x+2}$

$$= \\frac{(x+2) - (x-2)}{(x-2)(x+2)} = \\frac{4}{x^2 - 4}$$

**Key tip:** Always factor denominators first to spot common factors and find the LCD efficiently.
      `
    },
    {
      id: 'act-ia4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Simplifying Rationals** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify $\\frac{x^2 - 4}{x - 2}$.',
            options: ['$x - 2$', '$x + 2$', '$x^2 - 2$', '$\\frac{x-4}{x-2}$'],
            correctAnswer: 1,
            explanation: '$\\frac{(x-2)(x+2)}{x-2} = x + 2$.'
          },
          {
            question: 'What is $\\frac{3}{x} + \\frac{2}{x}$?',
            options: ['$\\frac{5}{x}$', '$\\frac{5}{2x}$', '$\\frac{6}{x^2}$', '$\\frac{5}{x^2}$'],
            correctAnswer: 0,
            explanation: 'Same denominator: $\\frac{3+2}{x} = \\frac{5}{x}$.'
          }
        ]
      }
    },
    {
      id: 'act-ia4-complex',
      type: 'text' as const,
      content: `
## Complex Fractions

A **complex fraction** has fractions in the numerator, denominator, or both.

**Strategy:** Multiply top and bottom by the LCD of all mini-fractions.

**Example 5:** Simplify $\\dfrac{\\frac{1}{x} + \\frac{1}{y}}{\\frac{1}{x} - \\frac{1}{y}}$.

Multiply numerator and denominator by $xy$:

$$\\frac{y + x}{y - x}$$

**Example 6:** Simplify $\\dfrac{\\frac{2}{x+1}}{\\frac{4}{(x+1)^2}}$.

$$= \\frac{2}{x+1} \\cdot \\frac{(x+1)^2}{4} = \\frac{2(x+1)}{4} = \\frac{x+1}{2}$$
      `
    },
    {
      id: 'act-ia4-input1',
      type: 'input-boxes' as const,
      content: `
**Rational Expression Practice** 🧮

1) Simplify $\\frac{x^2 - 25}{x + 5}$. The result is $x - \\;?$ (enter the number)
2) $\\frac{1}{3} + \\frac{1}{6} = \\frac{?}{6}$ (enter the numerator)
3) For $\\frac{x}{x - 4}$, what value of $x$ makes the expression undefined?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '4'],
        hint1: '$x^2 - 25 = (x-5)(x+5)$, then cancel $(x+5)$.',
        hint2: '$\\frac{1}{3} = \\frac{2}{6}$, so $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6}$.',
        hint3: 'Set the denominator equal to zero: $x - 4 = 0$.',
        explanation: '$\\frac{(x-5)(x+5)}{x+5} = x - 5$. $\\frac{1}{3}+\\frac{1}{6}=\\frac{3}{6}$. Undefined when $x = 4$.'
      }
    },
    {
      id: 'act-ia4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rational Expression Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To simplify a rational expression, first … the numerator and denominator.',
            options: ['multiply', 'add', 'factor', 'differentiate']
          },
          {
            label: 'The LCD of $\\frac{1}{x}$ and $\\frac{1}{x+1}$ is …',
            options: ['$x$', '$x + 1$', '$x(x+1)$', '$x^2 + x$']
          },
          {
            label: 'A complex fraction can be simplified by multiplying top and bottom by the …',
            options: ['GCF', 'LCD', 'numerator', 'denominator']
          }
        ],
        correctAnswers: ['factor', '$x(x+1)$', 'LCD'],
        hint1: 'You need to find common factors to cancel.',
        hint2: 'The LCD must contain each distinct factor at its highest power.',
        hint3: 'Multiplying by the LCD clears all the mini-fractions.',
        explanation: 'Factor first to cancel common factors. LCD of $x$ and $x+1$ is $x(x+1)$. Multiply by the LCD to clear complex fractions.'
      }
    },
    {
      id: 'act-ia4-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 + 3x + 2}{x^2 + 5x + 6}$',
            options: ['$\\frac{x+1}{x+3}$', '$\\frac{x+2}{x+3}$', '$\\frac{x+1}{x+2}$', '$\\frac{2}{6}$'],
            correctAnswer: 0,
            explanation: '$\\frac{(x+1)(x+2)}{(x+2)(x+3)} = \\frac{x+1}{x+3}$.'
          },
          {
            question: 'What is $\\frac{5}{x-1} - \\frac{3}{x-1}$?',
            options: ['$\\frac{2}{x-1}$', '$\\frac{8}{x-1}$', '$\\frac{2}{(x-1)^2}$', '$\\frac{15}{(x-1)^2}$'],
            correctAnswer: 0,
            explanation: 'Same denominator: $\\frac{5-3}{x-1} = \\frac{2}{x-1}$.'
          }
        ]
      }
    }
  ]
};
