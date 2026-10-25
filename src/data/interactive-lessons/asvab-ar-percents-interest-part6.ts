export const asvabArPercentsInterestPart6Data = {
  topicSlug: 'asvab-ar-percents-interest',
  sections: [
    {
      id: 'arpi6-intro',
      type: 'text' as const,
      content: `# 🏷️ Percents, Discounts and Interest

**Part 6 of 7 — Test Strategy and Common Traps**

### The traps, one by one

The wrong answer choices on percent problems are not random. Each one is the result of a specific, predictable slip. Learn the slips and you will recognize the traps before you fall into them.

| Trap | What it looks like | How to dodge it |
|:---|:---|:---|
| Percent of the wrong base | Price went from \\$60 to \\$75; you compute $15 \\div 75 = 20\\%$ | Percent change divides by the **original** value: $15 \\div 60 = 25\\%$ |
| Adding successive percents | 20% off, then 10% off the sale price, called "30% off" | Apply each percent to the **new** amount, one at a time |
| Reverse percent by adding back | \\$63 after 10% off; you add 10% of 63 to get \\$69.30 | **Divide** by the multiplier: $63 \\div 0.9 = 70$ |
| Answering the wrong amount | You find the \\$12 discount and pick it, but the question asked for the sale price | Circle the last sentence: discount or price? interest or total? |
| Months used as years | 9 months at 4%: you multiply by 9 | Divide months by 12: 9 months = $\\frac{3}{4}$ year |
| Rate not converted | 5% used as 5 instead of 0.05 | An answer 100 times too big is this trap; use the decimal |
| Tax on the original price | Taxing the full price, then subtracting the discount | Discount first, then tax on the **sale** price |

> **Key Fact:** The trap answers are usually sitting right there among the four choices. Finding a choice that matches your number does not prove it is right; check it against the question and the story.`
    },
    {
      id: 'arpi6-strategy',
      type: 'text' as const,
      content: `## Timing, estimating and back-solving

### Timing

On the CAT-ASVAB you have about **3.5 minutes per AR question** on average. A one-step percent question ("What is 20% of 85?") should take under a minute with the shortcuts. That banked time pays for the multi-step items: discount then tax, two years of depreciation, interest with monthly payments. Since you can't go back, spend the time to finish each problem carefully rather than rushing and moving on.

### Estimate to eliminate

Before you compute, decide what the answer **must** look like:

- A **sale price** is less than the original. Any choice above the original is out.
- A **price with tax or a tip** is a little more than the bill. A choice that doubles it is out.
- An **original price** (from a sale price) is more than the sale price.
- **Interest** for a year or two is usually much smaller than the principal; a choice bigger than the principal probably used the rate as a whole number.

### Back-solving a reverse problem

> After a 25% discount, a radio costs \\$36. What was the original price?
>
> \\$27  ·  \\$45  ·  \\$48  ·  \\$61

Instead of setting up an equation, test the choices. 25% off means you pay three quarters:

- \\$48: $48 \\div 4 = 12$, and $48 - 12 = 36$ ✓

The original price was **\\$48**. The trap choice \\$45 comes from adding 25% of \\$36 back on; \\$27 takes another 25% off; \\$61 adds \\$25.

### The reasonableness checklist

1. Did I answer the question in the last sentence (final price, or the discount/tax/interest)?
2. Did I divide by the **original** value for a percent change?
3. Did I apply back-to-back percents one at a time?
4. Is my time in **years** and my rate a **decimal**?
5. Does the answer make sense in the story (sale price below original, total above the bill)?`
    },
    {
      id: 'arpi6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** Each question has a trap answer waiting. Find the real answer. 🕵️',
      exercise: {
        questions: [
          {
            question: 'A store marks a \\$150 television 20% off. At checkout, it takes an extra 10% off the sale price. What does the customer pay?',
            options: ['\\$105', '\\$42', '\\$108', '\\$120'],
            correctAnswer: 2,
            explanation: 'One discount at a time: $150 \\times 0.8 = 120$, then $120 \\times 0.9 = 108$, so \\$108. \\$105 adds the discounts into a single 30% off, which is the trap. \\$120 stops after the first discount, and \\$42 is the total amount saved, not the price paid.'
          },
          {
            question: 'A price rose from \\$60 to \\$75. Jordan wrote: "The change is 15, and $15 \\div 75 = 20\\%$." What was his mistake?',
            options: ['He should have divided 75 by 60', 'He divided by the new price instead of the original', 'He should have subtracted 15 from 60', 'He needed to multiply the change by 75'],
            correctAnswer: 1,
            explanation: 'Percent change divides by the original (starting) value: $15 \\div 60 = 25\\%$. Dividing 75 by 60 gives 1.25, which compares the prices but is not the change itself, and subtracting 15 from 60 has nothing to do with the increase. Multiplying the change by 75 makes the number bigger instead of finding a fraction of the original.'
          },
          {
            question: 'Sam figured the interest on a \\$1,000 loan at 6% simple interest for 8 months as $1{,}000 \\times 0.06 \\times 8 = 480$. What is the correct interest?',
            options: ['\\$480', '\\$60', '\\$5', '\\$40'],
            correctAnswer: 3,
            explanation: 'Time must be in years: 8 months is $\\frac{8}{12} = \\frac{2}{3}$ year. One year of interest is 60, so $\\frac{2}{3} \\times 60 = 40$, or \\$40. \\$480 is Sam\'s months-as-years mistake. \\$60 is a full year of interest, and \\$5 is the interest for only one month.'
          },
          {
            question: 'A \\$72 jacket is on sale for 15% off. What is the sale price?',
            options: ['\\$61.20', '\\$82.80', '\\$10.80', '\\$57.60'],
            correctAnswer: 0,
            explanation: '10% of 72 is 7.20 and 5% is 3.60, so the discount is \\$10.80 and the sale price is $72 - 10.80 = 61.20$, or \\$61.20. Estimating eliminates two choices fast: \\$82.80 is more than the original price (the discount was added), and \\$10.80 is the discount itself, far too low for a sale price. \\$57.60 is 20% off, not 15%.'
          },
          {
            question: 'After an 8% sales tax was added, the total for a pair of headphones was \\$54. What was the price before tax?',
            options: ['\\$49.68', '\\$50.00', '\\$46.00', '\\$58.32'],
            correctAnswer: 1,
            explanation: 'The total is 108% of the price, so divide: $54 \\div 1.08 = 5{,}400 \\div 108 = 50$, so \\$50.00. Check: 8% of 50 is 4, and $50 + 4 = 54$. \\$49.68 takes 8% of \\$54 away, but the tax was 8% of the price, not of the total. \\$46.00 subtracts \\$8, and \\$58.32 adds the tax a second time.'
          }
        ]
      }
    },
    {
      id: 'arpi6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- **Wrong base:** percent change divides by the original value
- **Successive percents** are applied one at a time, never added
- **Reverse problems:** divide by the multiplier, or back-solve from the choices
- **Answer the question asked:** final amount vs the discount, tax, tip or interest
- **Interest:** time in years (months ÷ 12), rate as a decimal
- **Estimate to eliminate:** a sale price is below the original; a total with tax is above the price

> **Up Next:** Part 7 — a mixed mastery set covering every skill in this topic.`
    }
  ]
};
