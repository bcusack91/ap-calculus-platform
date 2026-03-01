export const satRatiosPart4Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp4-intro',
      type: 'text' as const,
      content: `
# 💯 Percent Problems

**Part 4 of 7 — Percent Of, Percent Increase/Decrease & Successive Percents**

A **percent** is a ratio out of 100:

$$p\\% = \\frac{p}{100}$$

**Three core percent equations:**

| Find | Formula |
|------|---------|
| Percent of a number | $\\text{part} = \\frac{p}{100} \\times \\text{whole}$ |
| What percent? | $\\frac{\\text{part}}{\\text{whole}} \\times 100$ |
| Find the whole | $\\text{whole} = \\frac{\\text{part}}{p/100}$ |

**Example 1:** What is $35\\%$ of $80$?

$$0.35 \\times 80 = 28$$

**Example 2:** $18$ is what percent of $72$?

$$\\frac{18}{72} \\times 100 = 25\\%$$
      `
    },
    {
      id: 'sat-rp4-change',
      type: 'text' as const,
      content: `
## Percent Increase & Decrease

$$\\text{Percent change} = \\frac{|\\text{new} - \\text{old}|}{\\text{old}} \\times 100\\%$$

**Multiplier shortcut:**
- Increase by $p\\%$: multiply by $1 + p/100$.
- Decrease by $p\\%$: multiply by $1 - p/100$.

**Example 3 — Increase:** A shirt costs \$40. After a $15\\%$ markup, the new price is:

$$40 \\times 1.15 = \\$46$$

**Example 4 — Decrease:** A laptop originally costs \$1{,}200. It's on sale for $25\\%$ off:

$$1{,}200 \\times 0.75 = \\$900$$

**Example 5:** A stock goes from \$50 to \$62. What is the percent increase?

$$\\frac{62 - 50}{50} \\times 100 = 24\\%$$

**SAT Tip:** The denominator in percent change is always the **original** value, not the new value.
      `
    },
    {
      id: 'sat-rp4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Percent Calculations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A population grows from 800 to 1,000. What is the percent increase?',
            options: ['$20\\%$', '$25\\%$', '$80\\%$', '$200\\%$'],
            correctAnswer: 1,
            explanation: '$\\frac{1{,}000 - 800}{800} \\times 100 = \\frac{200}{800} \\times 100 = 25\\%$.'
          },
          {
            question: 'After a $30\\%$ discount, a jacket costs \$56. What was the original price?',
            options: ['$\\$70$', '$\\$72.80$', '$\\$80$', '$\\$86$'],
            correctAnswer: 2,
            explanation: 'After $30\\%$ off the multiplier is $0.70$. $0.70 \\times P = 56 \\implies P = 80$.'
          }
        ]
      }
    },
    {
      id: 'sat-rp4-successive',
      type: 'text' as const,
      content: `
## Successive Percent Changes

When two (or more) percent changes happen one after another, **multiply** the multipliers — do NOT add the percentages.

**Example 6:** A price increases by $20\\%$ then decreases by $20\\%$. Is it back to the original?

$$1.20 \\times 0.80 = 0.96$$

**No!** The final price is $96\\%$ of the original — a $4\\%$ net decrease.

**Example 7:** An investment gains $10\\%$ in year 1 and $15\\%$ in year 2. Starting value: \$2{,}000.

$$2{,}000 \\times 1.10 \\times 1.15 = 2{,}000 \\times 1.265 = \\$2{,}530$$

Overall increase: $26.5\\%$, not $25\\%$.

**Example 8 — Tax then tip:** A meal costs \$50. Tax is $8\\%$, then a $20\\%$ tip is computed on the post-tax amount.

$$50 \\times 1.08 \\times 1.20 = 50 \\times 1.296 = \\$64.80$$
      `
    },
    {
      id: 'sat-rp4-input1',
      type: 'input-boxes' as const,
      content: `
**Percent Practice** 🧮

1) What is $18\\%$ of $250$?
2) A TV costs \$600 after a $25\\%$ discount. What was the original price?
3) A value increases by $50\\%$ then decreases by $50\\%$. What percent of the original value remains?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['45', '800', '75'],
        hint1: '$0.18 \\times 250$.',
        hint2: '$0.75 \\times P = 600 \\implies P = ?$',
        hint3: '$1.50 \\times 0.50 = ?$',
        explanation: '$0.18 \\times 250 = 45$. $P = 600/0.75 = 800$. $1.50 \\times 0.50 = 0.75 = 75\\%$.'
      }
    },
    {
      id: 'sat-rp4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Percent Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Increasing a value by $40\\%$ is the same as multiplying by …',
            options: ['$0.40$', '$1.04$', '$1.40$', '$4.0$']
          },
          {
            label: 'The percent change formula always divides by the …',
            options: ['new value', 'original value', 'difference', 'average']
          },
          {
            label: 'If a price increases by $10\\%$ and then by another $10\\%$, the overall increase is …',
            options: ['$20\\%$', '$21\\%$', '$22\\%$', '$11\\%$']
          }
        ],
        correctAnswers: ['$1.40$', 'original value', '$21\\%$'],
        hint1: 'Add the percent as a decimal to 1.',
        hint2: 'Percent change = (new − old) / old.',
        hint3: '$1.10 \\times 1.10 = 1.21$, so $21\\%$ increase.',
        explanation: 'Multiply by $1 + 0.40 = 1.40$. Always divide by the original. $1.1^2 = 1.21$, i.e., $21\\%$.'
      }
    },
    {
      id: 'sat-rp4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store marks up a product by $60\\%$ then offers a $25\\%$ discount. The final price is what percent of the original cost?',
            options: ['$120\\%$', '$135\\%$', '$100\\%$', '$85\\%$'],
            correctAnswer: 0,
            explanation: 'Multiplier $= 1.60 \\times 0.75 = 1.20$. The final price is $120\\%$ of cost — a $20\\%$ profit.'
          },
          {
            question: 'In 2023, a town\'s population was 12,000. It grew by $5\\%$ in 2024 and by $8\\%$ in 2025. What is the population at the end of 2025?',
            options: ['$13{,}560$', '$13{,}608$', '$14{,}000$', '$13{,}200$'],
            correctAnswer: 1,
            explanation: '$12{,}000 \\times 1.05 \\times 1.08 = 12{,}000 \\times 1.134 = 13{,}608$.'
          }
        ]
      }
    }
  ]
};
