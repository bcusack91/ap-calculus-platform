export const asvabArPercentsInterestPart4Data = {
  topicSlug: 'asvab-ar-percents-interest',
  sections: [
    {
      id: 'arpi4-intro',
      type: 'text' as const,
      content: `# 🏷️ Percents, Discounts and Interest

**Part 4 of 7 — Sales Tax, Tips and Commission**

### Sales tax

Sales tax is a percent of the price **added on**. Two ways to get the total:

- **Two steps:** find the tax, then add it to the price.
- **One step:** multiply by $1$ plus the tax rate as a decimal. A 6% tax means multiply by $1.06$.

### Worked Example 1 — sales tax

> A shirt costs \\$40, and the sales tax is 6%. What is the total cost?

Tax: 6% of 40. Use the swap trick: 6% of 40 = 40% of 6 = 2.4, so the tax is \\$2.40.

Total: $40 + 2.40 = 42.40$, so **\\$42.40**. (One step: $40 \\times 1.06 = 42.40$.)

Reasonable? The total is a little more than \\$40, because tax only adds a small amount. ✓

### Tips

A tip is a percent of the bill, usually 15% or 20%. Use the 10% shortcut:

### Worked Example 2 — a tip

> A dinner bill is \\$46. What is a 15% tip, and what is the total with a 20% tip?

- 10% of 46 is 4.60, and 5% is half of that, 2.30
- **15% tip:** $4.60 + 2.30 = 6.90$, so \\$6.90
- **20% tip:** double 10%, $2 \\times 4.60 = 9.20$, so \\$9.20, and the total is $46 + 9.20 = 55.20$, or **\\$55.20**

> **Key Fact:** Read the last sentence. "How much is the tip?" and "How much did she pay in all?" have different answers, and both are usually among the choices.`
    },
    {
      id: 'arpi4-order',
      type: 'text' as const,
      content: `## Discount first, then tax

When an item is on sale and taxed, the store takes the discount off first and then charges tax on the **sale price**.

### Worked Example 3 — discount then tax

> Boots priced at \\$80 are 25% off, and the sales tax is 7%. What is the total cost?

**Step 1 — Sale price.** 25% off means pay 75%: $80 \\div 4 = 20$, so $80 - 20 = 60$, or \\$60.

**Step 2 — Tax on the sale price.** 7% of 60 is $7 \\times 0.6 = 4.2$, so the tax is \\$4.20.

**Step 3 — Total.** $60 + 4.20 = 64.20$, so **\\$64.20**.

A common wrong path: tax on the **original** price ($80 + 5.60 = 85.60$), then subtract the \\$20 discount, which gives \\$65.60. That charges tax on money you never paid.

| Step | Base for the percent |
|:---|:---|
| Discount | The original price |
| Sales tax | The sale price (after the discount) |`
    },
    {
      id: 'arpi4-commission',
      type: 'text' as const,
      content: `## Commission

A **commission** is a percent of what a salesperson sells. Many jobs pay **base pay plus commission**.

### Worked Example 4 — straight commission

> A car salesperson earns a 6% commission. This week she sold \\$3,500 worth of accessories. What is her commission?

1% of 3,500 is 35, so 6% is $6 \\times 35 = 210$. Her commission is **\\$210**.

### Worked Example 5 — base pay plus commission

> A sales associate earns \\$400 a week plus 5% of his sales. He sold \\$2,600 this week. What is his total pay for the week?

- Commission: 10% of 2,600 is 260, so 5% is 130
- Total pay: $400 + 130 = 530$, so **\\$530**

Reasonable? The commission is a small slice of the sales, and the total is a bit more than the base pay. ✓

### Worked Example 6 — finding the sales from the commission

> An installer earned a \\$360 commission at a rate of 8%. How much did he sell?

This is a "find the whole" question: $360 = 0.08 \\times \\text{sales}$.

$$\\text{sales} = 360 \\div 0.08 = 36{,}000 \\div 8 = 4{,}500$$

He sold **\\$4,500**. Check: 1% of 4,500 is 45, and $8 \\times 45 = 360$. ✓ The sales must be much bigger than the commission.`
    },
    {
      id: 'arpi4-mc',
      type: 'multiple-choice' as const,
      content: '**Check: tips and paychecks.** Read the last sentence before you choose. 🎯',
      exercise: {
        questions: [
          {
            question: 'A family\'s restaurant bill is \\$35, and they leave a 20% tip. How much do they pay in all, including the tip?',
            options: ['\\$7.00', '\\$42.00', '\\$55.00', '\\$35.20'],
            correctAnswer: 1,
            explanation: '10% of 35 is 3.50, so the 20% tip is \\$7.00, and the total is $35 + 7 = 42$, so \\$42.00. \\$7.00 is the tip alone, the answer to a different question. \\$55.00 adds \\$20 instead of 20%, and \\$35.20 adds twenty cents.'
          },
          {
            question: 'A furniture salesperson earns \\$350 a week plus 4% of her sales. This week she sold \\$5,000 worth of furniture. What is her pay for the week?',
            options: ['\\$2,350', '\\$5,350', '\\$550', '\\$200'],
            correctAnswer: 2,
            explanation: 'Commission: 1% of 5,000 is 50, so 4% is 200. Pay: $350 + 200 = 550$, so \\$550. \\$200 is the commission alone, without the base pay. \\$2,350 uses 4% as 0.4 (that is 40%), and \\$5,350 adds the whole sales amount to her pay.'
          },
          {
            question: 'A sales agent earned \\$450 in commission at a 6% rate. What were her total sales?',
            options: ['\\$7,500', '\\$27', '\\$270', '\\$750'],
            correctAnswer: 0,
            explanation: 'Find the whole: sales = $450 \\div 0.06 = 45{,}000 \\div 6 = 7{,}500$, so \\$7,500. Check: 1% of 7,500 is 75, and $6 \\times 75 = 450$. \\$27 is 6% of \\$450, which takes the percent of the commission instead of working backward. \\$270 and \\$750 both treat 6% as 0.6: one multiplies by it and the other divides by it.'
          }
        ]
      }
    },
    {
      id: 'arpi4-input',
      type: 'input-boxes' as const,
      content: `**Tax, discount-then-tax, and commission.** ✍️

**1)** An item costs \\$50, and the sales tax is 8%. What is the total cost? (number only, in dollars)

**2)** A \\$200 bike is 30% off, and then a 5% sales tax is charged on the sale price. What is the total cost? (number only, in dollars)

**3)** A salesperson earns a 5% commission on \\$3,600 of sales. What is the commission? (number only, in dollars)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['54', '147', '180'],
        hint1: '8% of 50 is the same as 50% of 8.',
        hint2: 'Sale price first: 30% off \\$200 leaves \\$140. Then 5% of 140 is half of 10% of 140.',
        hint3: '10% of 3,600 is 360. 5% is half of that.',
        explanation: '(1) 8% of 50 = 50% of 8 = 4, so $50 + 4 = 54$, or \\$54. (2) $200 \\times 0.7 = 140$; tax is 5% of 140, which is 7; total $140 + 7 = 147$, or \\$147. (3) 10% of 3,600 is 360, so 5% is 180, or \\$180.'
      }
    },
    {
      id: 'arpi4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Sales tax:** total = price × (1 + rate). A 6% tax means multiply by 1.06
- **Tips:** 10% (move the point), then halve for 5% or double for 20%
- **Discount first, then tax on the sale price**
- **Commission** = rate × sales; **total pay** = base + commission
- **Sales from a commission:** commission ÷ rate (a "find the whole" problem)
- Know whether the question wants the tax, tip or commission **or** the final total

> **Up Next:** Part 5 — simple interest: $I = P \\times r \\times t$, with time in years.`
    }
  ]
};
