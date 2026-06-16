export const calcabOptimizationPart3Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt3-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 3 of 7 \u2014 Applied & Business Optimization**

### Business Terminology

| Term | Formula | Meaning |
|:---:|:---:|:---:|
| Revenue | $R(x) = x \\cdot p(x)$ | Income from selling $x$ units at price $p$ |
| Cost | $C(x)$ | Total cost to produce $x$ units |
| Profit | $P(x) = R(x) - C(x)$ | Revenue minus cost |
| Marginal cost | $C'(x)$ | Cost of producing one more unit |
| Average cost | $\\bar{C}(x) = C(x)/x$ | Cost per unit |

$$\\boxed{\\text{Max profit where } R'(x) = C'(x)}$$

### Worked Example: Widget Company

> A company sells widgets at price $p = 100 - 2x$ per widget. Cost: $C(x) = 200 + 5x$. Find maximum profit.

$$R(x) = x(100-2x) = 100x - 2x^2$$
$$P(x) = R(x) - C(x) = 100x - 2x^2 - 200 - 5x = -2x^2 + 95x - 200$$
$$P'(x) = -4x + 95 = 0 \\quad \\Rightarrow \\quad x = 23.75$$

Since $x$ must be whole: $P(24) = -2(576) + 95(24) - 200 = -1152 + 2280 - 200 = 928$.

$\\boxed{P_{\\max} = 928 \\text{ at } x = 24 \\text{ widgets}}$, i.e. \\$928

> **AP Tip:** On the AP exam, optimization word problems may use business language. Know the formulas for $R$, $C$, $P$, and marginal quantities.`
    },
    {
      id: 'opt3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Applied Optimization** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$C(x) = 0.01x^2 + 5x + 100$. What production level minimizes average cost $\\bar{C} = C(x)/x$?',
            options: ['$x = 100$', '$x = 50$', '$x = 200$', '$x = 250$'],
            correctAnswer: 0,
            explanation: '$\\bar{C} = 0.01x + 5 + 100/x$. $\\bar{C}\' = 0.01 - 100/x^2 = 0$. $x^2 = 10000$, $x = 100$.'
          },
          {
            question: 'Max profit occurs when:',
            options: ['Marginal revenue equals marginal cost', 'Revenue is maximum', 'Cost is minimum', 'Price is highest'],
            correctAnswer: 0,
            explanation: '$P\'(x) = R\'(x) - C\'(x) = 0$ requires $R\'(x) = C\'(x)$.'
          },
          {
            question: 'A hotel has 100 rooms at \\$80/night (all booked). For each \\$5 increase, 2 fewer rooms are booked. Revenue is:',
            options: ['$R(x) = (100-2x)(80+5x)$', '$R(x) = 100(80+5x)$', '$R(x) = (100+2x)(80-5x)$', '$R(x) = (100-x)(80+x)$'],
            correctAnswer: 0,
            explanation: 'If $x$ = number of \\$5 increases: rooms $= 100-2x$, price $= 80+5x$. $R = (100-2x)(80+5x)$.'
          }
        ]
      }
    },
    {
      id: 'opt3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the quantity.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'If $R(x) = 50x - 0.5x^2$, then $R\'(x) = 50 - x$. Revenue is maximized at:',
            options: ['$x = 50$', '$x = 25$', '$x = 100$', '$x = 0$'],
            correctAnswers: ['$x = 50$'],
            hints: ['Set $R\'(x) = 0$.'],
            explanation: '$50 - x = 0$ gives $x = 50$.'
          },
          {
            label: 'The marginal cost $C\'(x)$ represents:',
            options: ['The cost of producing one additional unit', 'Total cost', 'Average cost', 'Fixed cost'],
            correctAnswers: ['The cost of producing one additional unit'],
            hints: ['It is the derivative of the cost function.'],
            explanation: '$C\'(x)$ approximates the cost of the $(x+1)$th unit.'
          },
          {
            label: 'If $P\'\'(x) < 0$ for all $x$, the profit function is:',
            options: ['Concave down (has a maximum)', 'Concave up (has a minimum)', 'Linear', 'Has no extremum'],
            correctAnswers: ['Concave down (has a maximum)'],
            hints: ['$P\'\' < 0$ everywhere means concave down.'],
            explanation: 'A concave-down function on an interval has a maximum at its critical point.'
          }
        ]
      }
    },
    {
      id: 'opt3-input',
      type: 'input-box' as const,
      content: '**Solve.** \u270d\ufe0f',
      exercise: {
        question: 'A company sells $x$ items at price $p = 200 - 4x$. Find the number of items that maximizes revenue.\n\n(Enter an integer.)',
        correctAnswer: '25',
        acceptableAnswers: ['25'],
        hints: [
          '$R(x) = x(200-4x) = 200x - 4x^2$.',
          '$R\'(x) = 200 - 8x = 0$.',
          '$x = 25$.'
        ],
        explanation: '$R\'(x) = 200 - 8x = 0$ gives $x = 25$. $R(25) = 25 \\times 100 = 2500$.'
      }
    },
    {
      id: 'opt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- Profit $= R - C$; max profit when $R'(x) = C'(x)$
- Average cost $\\bar{C} = C(x)/x$; minimize by setting $\\bar{C}' = 0$
- Revenue $R(x) = x \\cdot p(x)$ where $p(x)$ is the demand function
- When units must be integers, check both nearest whole numbers`
    }
  ]
};
