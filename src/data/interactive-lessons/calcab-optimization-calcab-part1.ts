export const calcabOptimizationPart1Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt1-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 1 of 7 — Setting Up Optimization Problems**

### The Strategy

1. **Identify** the quantity to maximize or minimize (the **objective function**)
2. **Write** an equation for it in terms of your variables
3. Use a **constraint** to eliminate a variable (reduce to one variable)
4. Find **critical points** of the objective function
5. **Verify** it's actually a max or min (use endpoints or Second Derivative Test)

### Worked Example: Fencing Problem

A rancher has 200 m of fencing. She wants to enclose a rectangular area along a river (no fence needed on the river side). Find the maximum area.

Let $x$ = width (perpendicular to river), $y$ = length (parallel to river).

**Objective:** Maximize $A = xy$

**Constraint:** $2x + y = 200$ → $y = 200 - 2x$

**Substitute:** $A(x) = x(200 - 2x) = 200x - 2x^2$

$A'(x) = 200 - 4x = 0$ → $x = 50$

$A''(x) = -4 < 0$ → concave down → **maximum**

$y = 200 - 100 = 100$. **Maximum area = $5000$ m$^2$.**`
    },
    {
      id: 'opt1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Setting Up Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'A farmer has 120 m of fencing to enclose a rectangular pen (all 4 sides). What dimensions maximize area?',
            options: ['$30 \\times 30$', '$20 \\times 40$', '$10 \\times 50$', '$25 \\times 35$'],
            correctAnswer: 0,
            explanation: 'Constraint: $2x + 2y = 120$, so $y = 60 - x$. $A = x(60-x) = 60x - x^2$. $A\' = 60 - 2x = 0$ at $x = 30$. So $y = 30$. A square gives the maximum area.'
          },
          {
            question: 'The sum of two positive numbers is 50. What is the maximum product?',
            options: ['$625$', '$600$', '$500$', '$650$'],
            correctAnswer: 0,
            explanation: 'Let $x + y = 50$. $P = x(50-x) = 50x - x^2$. $P\' = 50 - 2x = 0$ at $x = 25$. $P = 25 \\times 25 = 625$.'
          }
        ]
      }
    },
    {
      id: 'opt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. Always define your variables clearly
2. Write the **objective function** (what to optimize)
3. Use the **constraint** to reduce to one variable
4. Verify using the Second Derivative Test or endpoint analysis`
    }
  ]
};
