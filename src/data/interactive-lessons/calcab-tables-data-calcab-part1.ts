export const calcabTablesDataPart1Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 1 of 7 — Approximating Derivatives from Tables**

### Estimating $f'(a)$ from a Table

When you have a table of values but no formula, estimate the derivative using:

$$f'(a) \approx \frac{f(b) - f(c)}{b - c}$$

Choose points closest to $a$.

### Worked Example

| $x$ | 1 | 3 | 5 | 8 |
|-----|---|---|---|---|
| $f(x)$ | 2 | 7 | 10 | 20 |

$f'(3) \approx \frac{f(5) - f(1)}{5 - 1} = \frac{10 - 2}{4} = 2$

(Using symmetric difference gives better estimate than one-sided.)`
    },
    {
      id: 'td1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Derivatives** 🎯\n\n| $x$ | 0 | 2 | 5 | 7 | 10 |\n|---|---|---|---|---|---|\n| $f(x)$ | 3 | 8 | 14 | 18 | 25 |',
      exercise: {
        questions: [
          {
            question: 'Estimate $f\'(5)$ using surrounding values.',
            options: ['$2$', '$\\frac{10}{5}$', '$3$', '$\\frac{7}{3}$'],
            correctAnswer: 0,
            explanation: '$f\'(5) \\approx \\frac{f(7) - f(2)}{7 - 2} = \\frac{18 - 8}{5} = 2$.'
          },
          {
            question: 'Estimate $f\'(0)$ (at the endpoint).',
            options: ['$\\frac{5}{2}$', '$3$', '$8$', '$\\frac{8}{2}$'],
            correctAnswer: 0,
            explanation: 'At endpoint, use one-sided: $f\'(0) \\approx \\frac{f(2) - f(0)}{2 - 0} = \\frac{5}{2}$.'
          }
        ]
      }
    },
    {
      id: 'td1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Use symmetric differences when possible
2. At endpoints, use one-sided differences
3. Always state units on the AP exam`
    }
  ]
};
