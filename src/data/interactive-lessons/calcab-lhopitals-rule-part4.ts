import { lhopLines } from '@/data/lesson-figures/calcab'

export const calcabLhopitalsRulePart4Data = {
  topicSlug: 'lhopitals-rule',
  sections: [
    {
      id: 'lh4-intro',
      type: 'text' as const,
      content: `# L'Hospital's Rule

**Part 4 of 5 \u2014 Limits from Tables and Graphs, and Justification**

On the AP exam the functions are often given only by a **table** or a **graph**. The rule works the same way: check the form from the given values, then use the given derivatives.

### Worked Example: A Table

$f$ is twice differentiable, with $f(3) = 0$ and $f'(3) = 6$. Find $\\lim_{x \\to 3} \\frac{f(x)}{x^2 - 9}$.

**Justification and computation:**

- $f$ is differentiable, so it is continuous: $\\lim_{x \\to 3} f(x) = f(3) = 0$.
- $\\lim_{x \\to 3} (x^2 - 9) = 0$.
- The limit has the form $\\frac{0}{0}$, so L'Hospital's Rule applies:

$$\\lim_{x \\to 3} \\frac{f(x)}{x^2 - 9} = \\lim_{x \\to 3} \\frac{f'(x)}{2x} = \\frac{f'(3)}{6} = \\frac{6}{6} = 1$$

> **Why "twice differentiable" matters:** it makes $f'$ continuous, so $\\lim_{x \\to 3} f'(x) = f'(3)$ and you may substitute the table value.`
    },
    {
      id: 'lh4-justify',
      type: 'text' as const,
      content: `## Writing the Justification

Before using the rule in a free-response answer, **state the limits of the numerator and the denominator**:

> "Since $\\lim_{x \\to a} f(x) = 0$ and $\\lim_{x \\to a} g(x) = 0$, L'Hospital's Rule applies, so $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$."

For an $\\frac{\\infty}{\\infty}$ limit, state that both limits are infinite instead.

| Write this | Not just this |
|:---|:---|
| $\\lim f(x) = 0$ and $\\lim g(x) = 0$ | "It's indeterminate" |
| $\\frac{f'(x)}{g'(x)}$ with each derivative shown | The final number alone |
| The limit of the new quotient, then the value | $\\frac{f'(a)}{g'(a)}$ with no limit step when $f'$, $g'$ are not known to be continuous |

> **AP Tip:** Writing "$\\frac{0}{0}$" by itself does not show which limits you checked. Name both limits, then apply the rule.`
    },
    {
      id: 'lh4-graph',
      type: 'text' as const,
      figure: lhopLines,
      content: `### Worked Example: A Graph

Near $x = 2$ the graphs of $f$ and $g$ above are straight lines, and both pass through $(2, 0)$, so $\\lim_{x \\to 2} f(x) = 0$ and $\\lim_{x \\to 2} g(x) = 0$.

The slopes are $f'(2) = 3$ (from $(2, 0)$ to $(3, 3)$) and $g'(2) = -1$ (from $(0, 2)$ to $(2, 0)$). Because the derivatives are constant near $2$,

$$\\lim_{x \\to 2} \\frac{f(x)}{g(x)} = \\lim_{x \\to 2} \\frac{f'(x)}{g'(x)} = \\frac{3}{-1} = -3.$$`
    },
    {
      id: 'lh4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tables and justification** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'The functions $f$ and $g$ have continuous derivatives, with $f(1) = 0$, $g(1) = 0$, $f\'(1) = -2$ and $g\'(1) = 5$. What is $\\lim_{x \\to 1} \\frac{f(x)}{g(x)}$?',
            options: ['$-\\frac{2}{5}$', '$-\\frac{5}{2}$', '$0$', 'It does not exist'],
            correctAnswer: 0,
            explanation: 'Both limits are $0$ (the functions are continuous at $1$), so the rule gives $\\frac{f\'(1)}{g\'(1)} = -\\frac{2}{5}$. Flipping gives $-\\frac{5}{2}$, and $\\frac{0}{0}$ is not the same as $0$ or "does not exist".'
          },
          {
            question: '$f$ and $g$ are differentiable. Which observation lets you apply L\'Hospital\'s Rule to $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$?',
            options: ['$\\lim_{x \\to a} f(x) = 0$ and $\\lim_{x \\to a} g(x) = 0$', '$g(a) = 0$, so the quotient is undefined at $a$', '$f\'(a)$ and $g\'(a)$ are both nonzero', '$\\frac{f(a)}{g(a)}$ cannot be evaluated'],
            correctAnswer: 0,
            explanation: 'The rule needs the form $\\frac{0}{0}$ (or $\\frac{\\infty}{\\infty}$): both limits must be $0$. A zero denominator alone could give a nonzero over $0$, which is not indeterminate, and the values of the derivatives do not establish the form.'
          },
          {
            question: '$f$ is twice differentiable with $f(2) = 5$ and $f\'(2) = 7$. What is $\\lim_{x \\to 2} \\frac{f(x) - 5}{x - 2}$?',
            options: ['$7$', '$5$', '$\\frac{7}{2}$', '$0$'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{0}{0}$ since $f(x) - 5 \\to 0$. The rule gives $\\frac{f\'(x)}{1} \\to f\'(2) = 7$; it is also the definition of $f\'(2)$. The value $5$ is $f(2)$, not a rate.'
          }
        ]
      }
    },
    {
      id: 'lh4-dropdown',
      type: 'dropdown-select' as const,
      figure: lhopLines,
      content: '**Read the graph above.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'From the graph, $f\'(2) = $',
            options: ['$3$', '$-1$', '$0$', '$2$'],
            correctAnswers: ['$3$'],
            hints: ['Use two points on the line $y = f(x)$, such as $(2, 0)$ and $(3, 3)$.'],
            explanation: 'The line $y = f(x)$ rises $3$ for each $1$ to the right, so $f\'(2) = 3$. The value $0$ is $f(2)$.'
          },
          {
            label: 'From the graph, $g\'(2) = $',
            options: ['$-1$', '$1$', '$0$', '$2$'],
            correctAnswers: ['$-1$'],
            hints: ['The line $y = g(x)$ passes through $(0, 2)$ and $(2, 0)$.'],
            explanation: 'Slope $= \\frac{0 - 2}{2 - 0} = -1$. The value $2$ is the $y$-intercept, not the slope.'
          },
          {
            label: '$\\lim_{x \\to 2} \\frac{f(x)}{g(x)} = $',
            options: ['$-3$', '$-\\frac{1}{3}$', '$3$', 'Does not exist'],
            correctAnswers: ['$-3$'],
            hints: ['Both graphs pass through $(2, 0)$: the form is $\\frac{0}{0}$.'],
            explanation: 'The form is $\\frac{0}{0}$, so the limit is $\\frac{f\'(2)}{g\'(2)} = \\frac{3}{-1} = -3$. Flipping gives $-\\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'lh4-input',
      type: 'input-box' as const,
      content: '**Limit from given values.** \u270d\ufe0f',
      exercise: {
        question: '$f$ is twice differentiable with $f(4) = 0$ and $f\'(4) = 3$. Find $\\lim_{x \\to 4} \\frac{f(x)}{\\sqrt{x} - 2}$.',
        correctAnswer: '12',
        acceptableAnswers: ['12', '12.0'],
        hints: [
          'Both the numerator and the denominator approach $0$.',
          'The derivative of $\\sqrt{x} - 2$ is $\\frac{1}{2\\sqrt{x}}$, which is $\\frac{1}{4}$ at $x = 4$.'
        ],
        explanation: 'Since $\\lim_{x \\to 4} f(x) = 0$ and $\\lim_{x \\to 4} (\\sqrt{x} - 2) = 0$, the rule gives $\\lim_{x \\to 4} \\frac{f\'(x)}{1/(2\\sqrt{x})} = \\frac{3}{1/4} = 12$.'
      }
    },
    {
      id: 'lh4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- From a table or graph, use the given values to show both limits are $0$ (or both infinite)
- Then use the given derivative values: $\\frac{f'(a)}{g'(a)}$ when $f'$ and $g'$ are continuous
- In free response, name both limits before you apply the rule

> **Up Next:** Part 5 \u2014 common traps and the final assessment.`
    }
  ]
};
