export const actPreAlgebraPart3Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa3-intro',
      type: 'text' as const,
      content: `
# 💯 Percents

**Part 3 of 7 — Percent of a Number, Increase/Decrease, Tax/Tip/Discount**

"Percent" means "per hundred." So $45\\%$ means $\\frac{45}{100} = 0.45$.

**Core conversions:**

| From | To | Method |
|------|-----|--------|
| Percent → Decimal | $45\\% = 0.45$ | Divide by 100 |
| Decimal → Percent | $0.08 = 8\\%$ | Multiply by 100 |
| Fraction → Percent | $\\frac{3}{4} = 75\\%$ | Divide then multiply by 100 |

**Percent of a number:**

$$\\text{Part} = \\text{Percent} \\times \\text{Whole}$$

**Example 1:** What is $30\\%$ of $250$?

$$0.30 \\times 250 = 75$$
      `
    },
    {
      id: 'act-pa3-change',
      type: 'text' as const,
      content: `
## Percent Increase & Decrease

$$\\text{Percent Change} = \\frac{|\\text{New} - \\text{Original}|}{\\text{Original}} \\times 100\\%$$

**Example 2 — Increase:** A price goes from $\\$40$ to $\\$52$. What is the percent increase?

$$\\frac{52 - 40}{40} \\times 100\\% = \\frac{12}{40} \\times 100\\% = 30\\%$$

**Example 3 — Decrease:** A shirt originally costs $\\$80$ and is on sale for $\\$60$. What is the percent discount?

$$\\frac{80 - 60}{80} \\times 100\\% = \\frac{20}{80} \\times 100\\% = 25\\%$$

**Shortcut:** For a $p\\%$ increase, multiply by $(1 + \\frac{p}{100})$. For a $p\\%$ decrease, multiply by $(1 - \\frac{p}{100})$.
      `
    },
    {
      id: 'act-pa3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Percent Calculations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $15\\%$ of $200$?',
            options: ['$15$', '$25$', '$30$', '$35$'],
            correctAnswer: 2,
            explanation: '$0.15 \\times 200 = 30$.'
          },
          {
            question: 'A population grew from $500$ to $650$. What was the percent increase?',
            options: ['$15\\%$', '$23\\%$', '$25\\%$', '$30\\%$'],
            correctAnswer: 3,
            explanation: '$\\frac{650 - 500}{500} \\times 100\\% = \\frac{150}{500} \\times 100\\% = 30\\%$.'
          }
        ]
      }
    },
    {
      id: 'act-pa3-taxtip',
      type: 'text' as const,
      content: `
## Tax, Tip & Discount

These are the most common real-world percent problems on the ACT.

**Example 4 — Sales Tax:** A jacket costs $\\$65$ and the sales tax is $8\\%$. What is the total?

$$\\text{Tax} = 0.08 \\times 65 = 5.20 \\implies \\text{Total} = 65 + 5.20 = \\$70.20$$

Or use the multiplier: $65 \\times 1.08 = \\$70.20$.

**Example 5 — Tip:** A meal costs $\\$42$. You leave a $20\\%$ tip. Total cost?

$$42 \\times 1.20 = \\$50.40$$

**Example 6 — Discount:** A $\\$120$ item is $35\\%$ off. Sale price?

$$120 \\times (1 - 0.35) = 120 \\times 0.65 = \\$78$$
      `
    },
    {
      id: 'act-pa3-input1',
      type: 'input-boxes' as const,
      content: `
**Percent Practice** 🧮

1) What is $40\\%$ of $90$?

2) A $\\$50$ item is $20\\%$ off. What is the sale price in dollars?

3) A value increased from $80$ to $100$. What is the percent increase?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['36', '40', '25'],
        hint1: '$0.40 \\times 90$.',
        hint2: 'Discount $= 0.20 \\times 50 = 10$. Subtract from $50$.',
        hint3: '$\\frac{100 - 80}{80} \\times 100\\%$.',
        explanation: '$0.40 \\times 90 = 36$. Sale price $= 50 - 10 = \\$40$. Percent increase $= \\frac{20}{80} \\times 100 = 25\\%$.'
      }
    },
    {
      id: 'act-pa3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find the total price after an 8% tax, multiply the price by …',
            options: ['$0.08$', '$0.92$', '$1.08$', '$8$']
          },
          {
            label: '$0.04$ expressed as a percent is …',
            options: ['$0.4\\%$', '$4\\%$', '$40\\%$', '$0.04\\%$']
          },
          {
            label: 'If an item is 30% off, you pay ______ of the original price.',
            options: ['$30\\%$', '$70\\%$', '$130\\%$', '$0.30$']
          }
        ],
        correctAnswers: ['$1.08$', '$4\\%$', '$70\\%$'],
        hint1: 'You keep the original price (1.00) and add the tax.',
        hint2: 'Move the decimal two places to the right.',
        hint3: '$100\\% - 30\\% = 70\\%$.',
        explanation: 'Total with 8% tax: multiply by $1.08$. $0.04 = 4\\%$. 30% off means you pay $70\\%$.'
      }
    },
    {
      id: 'act-pa3-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store marks up a wholesale price of $\\$25$ by $60\\%$. During a sale the marked price is then reduced by $25\\%$. What is the sale price?',
            options: ['$\\$25$', '$\\$27$', '$\\$30$', '$\\$35$'],
            correctAnswer: 2,
            explanation: 'Marked price $= 25 \\times 1.60 = \\$40$. Sale price $= 40 \\times 0.75 = \\$30$.'
          },
          {
            question: 'If $12$ is $p\\%$ of $48$, what is $p$?',
            options: ['$4$', '$15$', '$25$', '$36$'],
            correctAnswer: 2,
            explanation: '$\\frac{12}{48} = 0.25 = 25\\%$.'
          }
        ]
      }
    }
  ]
};
