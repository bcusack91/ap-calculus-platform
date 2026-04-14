export const calcbcPartialFracPart5Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf5-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 5 of 7 \u2014 Long Division First (Improper Fractions)**

Partial fractions only works on **proper** rational functions (degree of numerator < degree of denominator). When the fraction is improper, you must do polynomial long division first.`
    },
    {
      id: 'pf5-check',
      type: 'text' as const,
      content: `### Proper vs. Improper

| Fraction | Proper? | Action |
|----------|---------|--------|
| $\\frac{3x+1}{x^2-4}$ | Yes (deg 1 < deg 2) | Decompose directly |
| $\\frac{x^2+1}{x^2-4}$ | No (deg 2 = deg 2) | Long division first |
| $\\frac{x^3}{x^2-4}$ | No (deg 3 > deg 2) | Long division first |

> **Key Fact:** If deg(numerator) $\\geq$ deg(denominator), divide first. The result is: quotient + $\\frac{\\text{remainder}}{\\text{denominator}}$, where the remainder fraction IS proper.`
    },
    {
      id: 'pf5-example',
      type: 'text' as const,
      content: `### Worked Example: $\\int \\frac{x^3+2}{x^2-1}\\,dx$

**Step 1:** Long division

$$x^3 + 2 \\div (x^2 - 1) = x + \\frac{x+2}{x^2-1}$$

Check: $x(x^2-1) + (x+2) = x^3 - x + x + 2 = x^3 + 2$ \u2714

**Step 2:** Decompose the remainder: $\\frac{x+2}{(x-1)(x+1)}$

- $A = \\frac{1+2}{1+1} = \\frac{3}{2}$, $B = \\frac{-1+2}{-1-1} = -\\frac{1}{2}$

**Step 3:** Integrate

$$\\int \\left(x + \\frac{3/2}{x-1} - \\frac{1/2}{x+1}\\right)dx$$

$$\\boxed{= \\frac{x^2}{2} + \\frac{3}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C}$$`
    },
    {
      id: 'pf5-mc1',
      type: 'multiple-choice' as const,
      content: '**Improper Fractions Practice**',
      exercise: {
        questions: [
          {
            question: '$\\frac{x^2}{x-1}$ after long division equals:',
            options: [
              '$x + 1 + \\frac{1}{x-1}$',
              '$x + \\frac{1}{x-1}$',
              '$x - 1 + \\frac{1}{x-1}$',
              '$x^2 + \\frac{1}{x-1}$'
            ],
            correctAnswer: 0,
            explanation: '$x^2 \\div (x-1)$: $x^2 = (x-1)(x+1) + 1$. So quotient is $x+1$, remainder is $1$.'
          },
          {
            question: 'Is $\\frac{x^2+3x+2}{x^2+x}$ proper or improper?',
            options: ['Improper (equal degrees)', 'Proper', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Both numerator and denominator have degree 2. Since deg(num) = deg(den), the fraction is improper. Long division gives quotient 1.'
          }
        ]
      }
    },
    {
      id: 'pf5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Decision Making**',
      exercise: {
        dropdowns: [
          {
            label: 'To integrate $\\frac{x^3+1}{x^2+x}$, the first step is:',
            options: ['Polynomial long division', 'Factor the denominator', 'Partial fractions directly', 'u-substitution'],
            correctAnswers: ['Polynomial long division'],
            hints: ['Degree 3 > degree 2, so the fraction is improper.'],
            explanation: 'Divide first: $\\frac{x^3+1}{x^2+x} = x - 1 + \\frac{x+1}{x^2+x}$. Then factor and decompose the remainder.'
          },
          {
            label: '$\\frac{x^2+3x+2}{x^2+x}$ simplifies after division to $1 + \\frac{?}{x^2+x}$. The remainder is:',
            options: ['$2x + 2$', '$3x + 2$', '$x + 2$', '$2$'],
            correctAnswers: ['$2x + 2$'],
            hints: ['$(x^2+3x+2) - 1 \\cdot (x^2+x) = 2x + 2$.'],
            explanation: 'Subtract: $(x^2+3x+2) - (x^2+x) = 2x+2$. So quotient is 1, remainder is $2x+2$.'
          }
        ]
      }
    },
    {
      id: 'pf5-input',
      type: 'input-box' as const,
      content: '**Long Division Practice**',
      exercise: {
        question: 'Perform long division: $\\frac{x^2 + 5x + 7}{x + 2}$. The quotient is $x + a$ and the remainder is $b$. What is $a + b$?',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: ['$x^2 + 5x + 7 = (x+2)(x+3) + 1$.', 'Quotient: $x + 3$, remainder: $1$. So $a = 3$, $b = 1$.'],
        explanation: '$(x+2)(x+3) = x^2 + 5x + 6$. Remainder: $7 - 6 = 1$. So $a = 3$, $b = 1$, $a + b = 4$.'
      }
    },
    {
      id: 'pf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

| Concept | Details |
|---------|---------|
| When to divide | deg(numerator) $\\geq$ deg(denominator) |
| Result format | quotient $+$ $\\frac{\\text{remainder}}{\\text{denominator}}$ |
| Then what | Apply partial fractions to the proper remainder |
| Common quotients | Often just a polynomial like $x + 1$ or $x^2 - 3$ |

> **AP Tip:** The AP exam loves to test whether students remember to check for improper fractions. Always compare degrees before starting!

> **Coming Up:** Part 6 is a **mixed practice workshop** combining all techniques.`
    }
  ]
};
