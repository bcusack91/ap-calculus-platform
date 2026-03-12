export const satRatiosPart1Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp1-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 1 of 7 — Ratios and Rates**

### Ratios

A ratio compares two quantities: $a : b$ or $\\frac{a}{b}$.

If the ratio of boys to girls is $3:5$ and there are 40 students total:
- Total parts = $3 + 5 = 8$
- Boys = $(3/8)(40) = 15$
- Girls = $(5/8)(40) = 25$

### Rates

A rate is a ratio with units: miles/hour, dollars/item, people/year.

**Unit Rate** = rate per one unit. "\\$7.50 for 3 pounds" → \\$2.50 per pound.

### Proportions

$$\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc \\quad \\text{(cross multiply)}$$

**Example:** If 3 widgets cost \\$14, how much do 7 widgets cost?

$$\\frac{3}{14} = \\frac{7}{x} \\implies 3x = 98 \\implies x = \\frac{98}{3} \\approx \\$32.67$$`
    },
    {
      id: 'rp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Ratios & Rates** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a class, the ratio of students who passed to failed is $7:3$. If 50 students took the test, how many passed?',
            options: ['$35$', '$30$', '$15$', '$40$'],
            correctAnswer: 0,
            explanation: 'Total parts = $7 + 3 = 10$. Passed $= (7/10)(50) = 35$.'
          },
          {
            question: 'A car travels 225 miles on 9 gallons of gas. How many miles per gallon?',
            options: ['$25$', '$20$', '$30$', '$22.5$'],
            correctAnswer: 0,
            explanation: 'Unit rate: $225 ÷ 9 = 25$ miles per gallon.'
          },
          {
            question: 'If $\\frac{x}{12} = \\frac{5}{4}$, what is $x$?',
            options: ['$15$', '$3$', '$20$', '$9.6$'],
            correctAnswer: 0,
            explanation: 'Cross multiply: $4x = 60$ → $x = 15$.'
          }
        ]
      }
    },
    {
      id: 'rp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Ratio $a:b$ means the total has $a + b$ parts
- Unit rate: divide to find the "per one" rate
- Cross multiplication: $a/b = c/d$ → $ad = bc$
- Set up proportions with matching units: miles/hours = miles/hours`
    }
  ]
};
