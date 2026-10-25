export const asvabArPercentsInterestPart3Data = {
  topicSlug: 'asvab-ar-percents-interest',
  sections: [
    {
      id: 'arpi3-intro',
      type: 'text' as const,
      content: `# 🏷️ Percents, Discounts and Interest

**Part 3 of 7 — Percent Change, Discounts and Depreciation**

### Percent change

When a value goes up or down, the percent change compares the change to the **original** value, the one you started with:

$$\\text{percent change} = \\frac{\\text{amount of change}}{\\text{original value}}$$

### Worked Example 1 — a percent increase

> An apartment's monthly rent goes from \\$800 to \\$880. By what percent did the rent increase?

Change: $880 - 800 = 80$. Original: 800.

$$\\frac{80}{800} = \\frac{1}{10} = 10\\%$$

### Worked Example 2 — a percent decrease

> A pair of headphones drops from \\$60 to \\$45. By what percent did the price decrease?

Change: $60 - 45 = 15$. Original: 60 (the price **before** the drop).

$$\\frac{15}{60} = \\frac{1}{4} = 25\\%$$

If you divide by the new price instead, you get $\\frac{15}{45} = 33\\frac{1}{3}\\%$, a wrong answer that is often waiting among the choices.

> **Key Fact:** Percent change always divides by the **original** (starting) value, whether the value went up or down.`
    },
    {
      id: 'arpi3-discount',
      type: 'text' as const,
      content: `## Discounts and markups in one step

You can find a discount and subtract it (two steps), or multiply by **what is left** (one step):

| Situation | You pay or keep | Multiply by |
|:---|:---|:---:|
| 25% off | 75% of the price | $0.75$ |
| 10% off | 90% of the price | $0.9$ |
| 40% off | 60% of the price | $0.6$ |
| 30% markup | 130% of the cost | $1.3$ |
| 8% increase | 108% of the value | $1.08$ |

### Worked Example 3 — a discount

> A \\$56 jacket is 25% off. What is the sale price?

One step: 75% is three quarters, so $56 \\div 4 = 14$ and $14 \\times 3 = 42$. The sale price is **\\$42**.

Two-step check: the discount is 25% of 56, which is \\$14, and $56 - 14 = 42$. ✓

### Worked Example 4 — a markup

> A store pays \\$40 for a backpack and marks the price up 30%. What is the store's selling price?

Markup: 30% of 40 is $3 \\times 4 = 12$. Selling price: $40 + 12 = 52$, so **\\$52**. (One step: $40 \\times 1.3 = 52$.)

A markup is a percent **increase** on the store's cost; a discount is a percent **decrease** on the original price.`
    },
    {
      id: 'arpi3-depreciation',
      type: 'text' as const,
      content: `## Depreciation: losing value over time

**Depreciation** means something (a vehicle, a piece of equipment) loses value as it gets older. On AR it is a percent decrease, sometimes for one year and sometimes for two years in a row.

### Worked Example 5 — one year

> A truck worth \\$24,000 loses 15% of its value in its first year. What is it worth after one year?

$$10\\% \\text{ of } 24{,}000 = 2{,}400, \\qquad 5\\% = 1{,}200, \\qquad 15\\% = 3{,}600$$

Value after one year: $24{,}000 - 3{,}600 = 20{,}400$, so **\\$20,400**.

### Worked Example 6 — two years in a row

> A generator worth \\$18,000 loses 10% of its value each year. What is it worth after two years?

Work **one year at a time**, and take each year's percent of the value at the **start of that year**:

| Year | Value at start | 10% loss | Value at end |
|:---:|:---:|:---:|:---:|
| 1 | 18,000 | 1,800 | 16,200 |
| 2 | 16,200 | 1,620 | 14,580 |

After two years it is worth **\\$14,580**. Taking 20% off the original in one shot gives \\$14,400, which is wrong: the second year's 10% is taken from the smaller value, \\$16,200, so the second loss is smaller.

> **Key Fact:** Percents applied one after another are **not added**. Each new percent is taken of the **new** value.`
    },
    {
      id: 'arpi3-successive',
      type: 'text' as const,
      content: `## Successive discounts and reverse problems

### Two discounts in a row

> A \\$100 drill is 20% off, and a coupon takes another 10% off the sale price. What do you pay?

- After 20% off: $100 \\times 0.8 = 80$
- After 10% off **the \\$80**: $80 \\times 0.9 = 72$

You pay **\\$72**. That is \\$28 off in total, a 28% discount, **not** 30%.

### Working backward to the original price

> After a 10% discount, a tool bag costs \\$63. What was the original price?

The sale price is 90% of the original: $\\text{original} \\times 0.9 = 63$. Undo the multiplication by **dividing**:

$$63 \\div 0.9 = 630 \\div 9 = 70$$

The original price was **\\$70**. Check: 10% of 70 is 7, and $70 - 7 = 63$. ✓

The tempting mistake is to add 10% of \\$63 back on: $63 + 6.30 = 69.30$. That is wrong because the 10% discount was taken of the **original** price, not of \\$63.

> **Key Fact:** To find an original price, divide the new amount by the multiplier (0.9 for 10% off, 0.8 for 20% off). If you are unsure, test each answer choice: take the discount off and see which one lands on the sale price.`
    },
    {
      id: 'arpi3-mc',
      type: 'multiple-choice' as const,
      content: '**Check: change, depreciation and reverse problems.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A gym raised its monthly fee from \\$40 to \\$50. By what percent did the fee increase?',
            options: ['20%', '10%', '25%', '125%'],
            correctAnswer: 2,
            explanation: 'Change ÷ original: $(50 - 40) \\div 40 = \\frac{10}{40} = 25\\%$. 20% divides the change by the new fee (\\$50) instead of the original. 10% is the dollar change written as a percent, and 125% compares the new fee to the old one instead of finding the change.'
          },
          {
            question: 'A work van bought for \\$30,000 loses 10% of its value each year. What is the van worth after 2 years?',
            options: ['\\$24,000', '\\$24,300', '\\$27,000', '\\$5,700'],
            correctAnswer: 1,
            explanation: 'One year at a time: year 1 loses 10% of 30,000, which is 3,000, leaving 27,000. Year 2 loses 10% of 27,000, which is 2,700, leaving $27{,}000 - 2{,}700 = 24{,}300$, so \\$24,300. \\$24,000 adds the two years into one 20% loss on the original price. \\$27,000 stops after one year, and \\$5,700 is the total value lost, not what the van is worth.'
          },
          {
            question: 'After a 20% discount, a tool kit costs \\$48. What was the original price?',
            options: ['\\$57.60', '\\$38.40', '\\$68.00', '\\$60.00'],
            correctAnswer: 3,
            explanation: 'The sale price is 80% of the original, so divide: $48 \\div 0.8 = 480 \\div 8 = 60$, so \\$60.00. Check: 20% of 60 is 12, and $60 - 12 = 48$. \\$57.60 adds 20% of \\$48 back on, but the discount was 20% of the original, not of \\$48. \\$38.40 takes another 20% off, which can\'t be right because the original must be more than \\$48. \\$68.00 adds \\$20 instead of 20%.'
          }
        ]
      }
    },
    {
      id: 'arpi3-input',
      type: 'input-boxes' as const,
      content: `**Discounts, decreases and markups.** ✍️

**1)** A \\$70 coat is 30% off. What is the sale price? (number only, in dollars)

**2)** A price falls from \\$80 to \\$68. What is the percent decrease? (number only, in percent)

**3)** A shop pays \\$25 for a hat and marks it up 40%. What is the selling price? (number only, in dollars)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['49', '15', '35'],
        hint1: '30% off means you pay 70%. 10% of 70 is 7, so 70% of 70 is $7 \\times 7$.',
        hint2: 'The change is $80 - 68 = 12$. Divide by the ORIGINAL price, 80.',
        hint3: '40% of 25: 10% is 2.5, so 40% is $4 \\times 2.5 = 10$. Add it to the cost.',
        explanation: '(1) $70 \\times 0.7 = 49$, so \\$49 (the discount was \\$21). (2) $\\frac{12}{80} = \\frac{3}{20} = 15\\%$. (3) The markup is 40% of 25, which is 10, so the selling price is $25 + 10 = 35$, or \\$35.'
      }
    },
    {
      id: 'arpi3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Percent change = change ÷ original value**, for increases and decreases alike
- Discount in one step: multiply by what is left (25% off → $\\times 0.75$); markup: multiply by more than 1 (30% up → $\\times 1.3$)
- **Depreciation** over two years: work year by year, each percent taken of that year's starting value
- Successive percents are **not added**: 20% off then 10% off is 28% off, not 30%
- Reverse problems: **divide** by the multiplier (\\$63 after 10% off → $63 \\div 0.9 = 70$); never just add the percent back

> **Up Next:** Part 4 — sales tax, tips, discount-then-tax, and commission on a paycheck.`
    }
  ]
};
