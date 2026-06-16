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

$$\\frac{3}{14} = \\frac{7}{x} \\implies 3x = 98 \\implies x = \\frac{98}{3} \\approx \\$32.67$$

---

### Worked Example 1 — Three-Part Ratio

**In a mixture, red, blue, and yellow paint are in the ratio $2:3:5$. If the total is 60 liters, how much blue paint is there?**

| Step | Work |
|------|------|
| Total parts | $2 + 3 + 5 = 10$ |
| Blue fraction | $3/10$ |
| Blue amount | $(3/10)(60) = 18$ liters |

### Worked Example 2 — Comparing Unit Rates

**Store A sells 5 lb of apples for \\$8.50. Store B sells 3 lb for \\$4.80. Which is cheaper per pound?**

| Store | Calculation | Unit Rate |
|-------|------------|-----------|
| A | $8.50 ÷ 5$ | \\$1.70/lb |
| B | $4.80 ÷ 3$ | \\$1.60/lb |

Store B is cheaper by \\$0.10 per pound.`
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
      id: 'rp1-text2',
      type: 'text' as const,
      content: `### Ratio Problems with Unknowns

Sometimes the SAT gives you a ratio and one part, not the total.

### Worked Example 3

**The ratio of cats to dogs at a shelter is $5:3$. If there are 24 dogs, how many cats are there?**

| Step | Work |
|------|------|
| Set up proportion | $\\frac{\\text{cats}}{\\text{dogs}} = \\frac{5}{3}$ |
| Substitute | $\\frac{c}{24} = \\frac{5}{3}$ |
| Cross multiply | $3c = 120$ → $c = 40$ |

### Worked Example 4

**A car averages 32 miles per gallon. Gas costs \\$3.60 per gallon. What is the fuel cost for a 480-mile trip?**

| Step | Work |
|------|------|
| Gallons needed | $480 ÷ 32 = 15$ gallons |
| Cost | $15 × 3.60 = 54$, i.e. \\$54 |`
    },
    {
      id: 'rp1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Harder Ratio Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Red, green, and blue marbles are in the ratio $1:2:3$. If there are 18 blue marbles, how many total marbles are there?',
            options: ['$36$', '$24$', '$42$', '$54$'],
            correctAnswer: 0,
            explanation: 'Blue = 3 parts = 18, so 1 part = 6. Total parts = $1 + 2 + 3 = 6$. Total = $6 × 6 = 36$.'
          },
          {
            question: 'A factory produces widgets at 120 per hour. How many hours to produce 2,100 widgets?',
            options: ['$17.5$', '$17$', '$18$', '$25.2$'],
            correctAnswer: 0,
            explanation: '$2100 ÷ 120 = 17.5$ hours.'
          },
          {
            question: 'If $\\frac{a}{b} = \\frac{3}{7}$ and $a + b = 40$, what is $a$?',
            options: ['$12$', '$14$', '$15$', '$21$'],
            correctAnswer: 0,
            explanation: '$a = 3k$, $b = 7k$. Then $3k + 7k = 40$ → $10k = 40$ → $k = 4$. So $a = 12$.'
          }
        ]
      }
    },
    {
      id: 'rp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Ratio, Rate, or Proportion?** 🔍\n\nClassify each problem type.',
      exercise: {
        dropdowns: [
          { label: '"Boys to girls is 4:5 in a class of 36"', options: ['Ratio (part-to-whole)', 'Unit rate', 'Proportion', 'Direct variation'] },
          { label: '"A runner covers 13.1 miles in 2 hours"', options: ['Unit rate (miles per hour)', 'Ratio', 'Proportion', 'Scale factor'] },
          { label: '"If 8 pencils cost $2.40, how much do 12 cost?"', options: ['Proportion (cross-multiply)', 'Ratio', 'Unit rate', 'Inverse variation'] },
          { label: '"Recipe calls for 2 cups flour per 3 cups sugar"', options: ['Ratio (part-to-part)', 'Proportion', 'Unit rate', 'Percent'] }
        ],
        correctAnswers: ['Ratio (part-to-whole)', 'Unit rate (miles per hour)', 'Proportion (cross-multiply)', 'Ratio (part-to-part)'],
        hint1: 'A ratio with a total number of items is a part-to-whole problem.',
        hint2: 'Distance over time gives a unit rate.',
        hint3: 'Two equivalent ratios = set up a proportion and cross-multiply.',
        explanation: 'Ratios compare parts (to whole or to each other). Rates include units. Proportions equate two ratios to solve for unknowns.'
      }
    },
    {
      id: 'rp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Formula | When to Use |
|---------|---------|-------------|
| Ratio $a:b$ | Part $= \\frac{a}{a+b} × T$ | Given total |
| Ratio with one part | $\\frac{a}{b} = \\frac{x}{\\text{known}}$ | Given one quantity |
| Unit rate | Divide total by count | Comparing costs/speeds |
| Cross multiply | $ad = bc$ | Solving proportions |

- Set up proportions with matching units on each side
- Three-part ratios: add all parts for the total
- Unit rates let you compare which deal is better`
    }
  ]
};
