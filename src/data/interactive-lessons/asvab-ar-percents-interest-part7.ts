export const asvabArPercentsInterestPart7Data = {
  topicSlug: 'asvab-ar-percents-interest',
  sections: [
    {
      id: 'arpi7-intro',
      type: 'text' as const,
      content: `# 🏷️ Percents, Discounts and Interest

**Part 7 of 7 — Mixed Mastery Set**

This set mixes every skill in the topic, in roughly the order of difficulty you would meet on the CAT-ASVAB: a few quick one-step items, then multi-step items, then the kind that comes after a run of right answers.

For each problem:

1. **Read the last sentence first:** final amount, or the discount, tax, commission or interest?
2. **Find the base:** what is the percent taken **of**?
3. **Estimate**, then compute with the shortcuts (10%, 5%, 25%, one year of interest).
4. **Check** against the story and the trap list from Part 6.

No calculator. Use scratch paper, just like at MEPS.`
    },
    {
      id: 'arpi7-mc1',
      type: 'multiple-choice' as const,
      content: '**Mastery set, part A.** One- and two-step problems. 🎯',
      exercise: {
        questions: [
          {
            question: 'A warehouse has 140 workers, and 15% of them work the night shift. How many workers are on the night shift?',
            options: ['21', '14', '119', '28'],
            correctAnswer: 0,
            explanation: '10% of 140 is 14 and 5% is 7, so 15% is $14 + 7 = 21$ workers. The answer 14 is only 10% (it forgets the extra 5%). 119 is the 85% who work other shifts, and 28 is 20% of 140.'
          },
          {
            question: 'An online order costs \\$90 before tax, and the sales tax is 5%. What is the total cost of the order?',
            options: ['\\$4.50', '\\$85.50', '\\$95.00', '\\$94.50'],
            correctAnswer: 3,
            explanation: '10% of 90 is 9, so 5% is 4.50. Total: $90 + 4.50 = 94.50$, so \\$94.50. \\$4.50 is the tax alone. \\$85.50 subtracts the tax as if it were a discount, and \\$95.00 adds \\$5 instead of 5%.'
          },
          {
            question: 'Dev puts \\$600 in a savings account that pays 5% simple interest per year. How much interest does he earn in 2 years?',
            options: ['\\$660', '\\$60', '\\$6,000', '\\$30'],
            correctAnswer: 1,
            explanation: 'One year: 5% of 600 is 30. Two years: $30 \\times 2 = 60$, so \\$60. \\$30 is only one year. \\$660 is the balance after 2 years, not the interest, and \\$6,000 uses the rate as 5 instead of 0.05.'
          },
          {
            question: 'A clinic had 300 sick-call visits in March and 240 in April. By what percent did the number of visits decrease?',
            options: ['25%', '20%', '60%', '80%'],
            correctAnswer: 1,
            explanation: 'Change ÷ original: $(300 - 240) \\div 300 = \\frac{60}{300} = \\frac{1}{5} = 20\\%$. 25% divides the change by April\'s number (240) instead of March\'s. 60% is the change in visits labeled as a percent, and 80% is April as a percent of March, not the decrease.'
          },
          {
            question: 'A real-estate assistant earns a 3% commission. Last month her commission was \\$540. What were her total sales last month?',
            options: ['\\$1,620', '\\$16.20', '\\$18,000', '\\$1,800'],
            correctAnswer: 2,
            explanation: 'Find the whole: $540 \\div 0.03 = 54{,}000 \\div 3 = 18{,}000$, so \\$18,000. Check: 1% of 18,000 is 180, and $3 \\times 180 = 540$. \\$16.20 is 3% of the commission, \\$1,620 multiplies by 3, and \\$1,800 divides by 0.3 instead of 0.03.'
          }
        ]
      }
    },
    {
      id: 'arpi7-mc2',
      type: 'multiple-choice' as const,
      content: '**Mastery set, part B.** Multi-step problems. Watch for the traps. 🧠',
      exercise: {
        questions: [
          {
            question: 'A \\$45 shirt is 20% off, and a 6% sales tax is charged on the sale price. What is the total cost?',
            options: ['\\$38.16', '\\$36.00', '\\$38.70', '\\$33.84'],
            correctAnswer: 0,
            explanation: 'Sale price: 20% of 45 is 9, so $45 - 9 = 36$. Tax: 6% of 36 is 2.16. Total: $36 + 2.16 = 38.16$, so \\$38.16. \\$36.00 forgets the tax. \\$38.70 taxes the original \\$45 (giving \\$47.70) and then subtracts the \\$9 discount, and \\$33.84 subtracts the tax instead of adding it.'
          },
          {
            question: 'A \\$1,600 loan charges 6% simple interest per year. How much interest is owed after 3 months?',
            options: ['\\$288', '\\$96', '\\$24', '\\$1,624'],
            correctAnswer: 2,
            explanation: 'One year: 6% of 1,600 is 96. Three months is $\\frac{3}{12} = \\frac{1}{4}$ year, and $96 \\div 4 = 24$, so \\$24. \\$288 treats 3 months as 3 years. \\$96 is a full year of interest, and \\$1,624 is the total owed, not the interest.'
          },
          {
            question: 'A cargo trailer worth \\$5,000 loses 20% of its value each year. What is it worth after 2 years?',
            options: ['\\$3,000', '\\$4,000', '\\$1,800', '\\$3,200'],
            correctAnswer: 3,
            explanation: 'Year 1: 20% of 5,000 is 1,000, leaving 4,000. Year 2: 20% of 4,000 is 800, leaving $4{,}000 - 800 = 3{,}200$, so \\$3,200. \\$3,000 adds the years into one 40% loss on the original. \\$4,000 stops after one year, and \\$1,800 is the total value lost.'
          },
          {
            question: 'A winter coat on sale for 30% off costs \\$56. What was the original price of the coat?',
            options: ['\\$72.80', '\\$80.00', '\\$39.20', '\\$86.00'],
            correctAnswer: 1,
            explanation: 'The sale price is 70% of the original: $56 \\div 0.7 = 560 \\div 7 = 80$, so \\$80.00. Check: 30% of 80 is 24, and $80 - 24 = 56$. \\$72.80 adds 30% of \\$56 back on, but the discount was 30% of the original. \\$39.20 takes another 30% off, and \\$86.00 adds \\$30 instead of 30%.'
          },
          {
            question: 'Luis borrows \\$2,400 at 5% simple interest for 2 years. He repays the loan plus interest in 24 equal monthly payments. How much is each payment?',
            options: ['\\$100', '\\$110', '\\$10', '\\$105'],
            correctAnswer: 1,
            explanation: 'Interest: 5% of 2,400 is 120 per year, so 240 for 2 years. Total: $2{,}400 + 240 = 2{,}640$. Each payment: $2{,}640 \\div 24 = 110$, so \\$110. \\$100 repays only the principal. \\$105 includes just one year of interest, and \\$10 spreads only the interest over the 24 months.'
          }
        ]
      }
    },
    {
      id: 'arpi7-input',
      type: 'input-boxes' as const,
      content: `**Mastery set, part C.** ✍️

**1)** A practice test has 85 questions. Lee answered 40% of them in the first 20 minutes. How many questions did he answer in that time? (number only)

**2)** A \\$200 tent is 25% off, and a coupon takes an extra 10% off the sale price. What is the final price? (number only, in dollars)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['34', '135'],
        hint1: '10% of 85 is 8.5. 40% is four times that.',
        hint2: 'First discount: 25% off 200 leaves 150. The coupon takes 10% of 150, not of 200.',
        hint3: '10% of 150 is 15. Subtract it from 150.',
        explanation: '(1) $4 \\times 8.5 = 34$ questions. (2) $200 \\times 0.75 = 150$, then $150 \\times 0.9 = 135$, or \\$135. Adding the discounts into 35% off would give \\$130, which is the trap.'
      }
    },
    {
      id: 'arpi7-summary',
      type: 'text' as const,
      content: `### Percents, Discounts and Interest — Summary 🎓

| Part | Skill | The move |
|:---:|:---|:---|
| 2 | Percent of a number | Part = percent × whole; build from 10% |
| 3 | Percent change and discounts | Change ÷ original; one percent at a time |
| 4 | Tax, tips and commission | Discount first, then tax; base + commission |
| 5 | Simple interest | $I = P \\times r \\times t$, rate as a decimal, time in years |
| 6 | Traps | Wrong base, added percents, add-back reverse, wrong final amount |

### The one-line checklist

**Last sentence → base → estimate → compute → check the story.**

### What to do next

1. Take the **exit quiz** for this topic to lock in the skills.
2. Review the **flashcards**: the one-step multipliers (×0.75 for 25% off, ×1.06 for 6% tax) and $I = P \\times r \\times t$ are worth memorizing.
3. Move on to the next topic in the AR unit. Percents show up again inside ratio, rate and average problems, so the shortcuts you built here keep paying off.`
    }
  ]
};
