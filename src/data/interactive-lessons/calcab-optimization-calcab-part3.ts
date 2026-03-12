export const calcabOptimizationPart3Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt3-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 3 of 7 — Cost & Revenue Optimization**

### Business Applications

- **Revenue:** $R(x) = x \\cdot p(x)$ where $p(x)$ is the price-demand function
- **Profit:** $P(x) = R(x) - C(x)$ (revenue minus cost)
- **Marginal cost:** $C'(x)$ — the cost of producing one more unit
- Maximum profit occurs where $R'(x) = C'(x)$ (marginal revenue = marginal cost)

### Worked Example

A company sells widgets: demand is $p = 100 - 2x$ (price per widget when $x$ widgets are sold). Cost: $C(x) = 200 + 5x$.

$R(x) = xp = x(100-2x) = 100x - 2x^2$

$P(x) = R(x) - C(x) = 100x - 2x^2 - 200 - 5x = -2x^2 + 95x - 200$

$P'(x) = -4x + 95 = 0$ → $x = 23.75$

Since $x$ must be a whole number, check $x = 23$ and $x = 24$:
- $P(23) = -2(529) + 95(23) - 200 = 927$
- $P(24) = -2(576) + 95(24) - 200 = 928$

**Maximum profit = $928 at $x = 24$ widgets.**`
    },
    {
      id: 'opt3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Applied Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $C(x) = 0.01x^2 + 5x + 100$ is the cost of producing $x$ items, find the production level that minimizes the average cost $\\bar{C} = C(x)/x$.',
            options: ['$x = 100$', '$x = 50$', '$x = 200$', '$x = 250$'],
            correctAnswer: 0,
            explanation: '$\\bar{C} = 0.01x + 5 + \\frac{100}{x}$. $\\bar{C}\' = 0.01 - \\frac{100}{x^2} = 0$. $x^2 = 10000$, so $x = 100$.'
          }
        ]
      }
    },
    {
      id: 'opt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. Profit = Revenue - Cost
2. Max profit where marginal revenue = marginal cost
3. Average cost is minimized where $\\bar{C}' = 0$`
    }
  ]
};
