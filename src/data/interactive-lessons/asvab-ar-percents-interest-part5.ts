export const asvabArPercentsInterestPart5Data = {
  topicSlug: 'asvab-ar-percents-interest',
  sections: [
    {
      id: 'arpi5-intro',
      type: 'text' as const,
      content: `# 🏷️ Percents, Discounts and Interest

**Part 5 of 7 — Simple Interest**

### The formula

**Interest** is money paid for the use of money. A bank pays you interest on savings; you pay a lender interest on a loan. AR uses **simple interest**, which is figured on the original amount only:

$$I = P \\times r \\times t$$

| Letter | Meaning | Watch out |
|:---:|:---|:---|
| $I$ | Interest, in dollars | The extra money, not the total |
| $P$ | Principal: the amount saved or borrowed | The starting amount |
| $r$ | Yearly interest rate | Use it as a **decimal**: 5% → 0.05 |
| $t$ | Time | Must be in **years** |

The **total** in a savings account, or the total owed on a loan, is the principal plus the interest: $P + I$.

### Worked Example 1 — a loan over several years

> Marcus borrows \\$2,000 at 6% simple interest for 3 years. How much interest does he pay, and how much does he owe in all?

One year of interest: 6% of 2,000 is $6 \\times 20 = 120$. Three years: $120 \\times 3 = 360$.

$$I = 2{,}000 \\times 0.06 \\times 3 = 360$$

He pays **\\$360** in interest and owes $2{,}000 + 360 = 2{,}360$, or **\\$2,360** in all.

> **Key Fact:** Find **one year** of interest first (rate × principal), then multiply by the number of years. It is the same as $P \\times r \\times t$, and it is easier to do in your head.`
    },
    {
      id: 'arpi5-months',
      type: 'text' as const,
      content: `## Time in months: convert to years

The rate is **per year**, so time has to be in years. Divide the months by 12:

| Months | Years |
|:---:|:---:|
| 3 | $\\frac{1}{4}$ |
| 6 | $\\frac{1}{2}$ |
| 9 | $\\frac{3}{4}$ |
| 18 | $1\\frac{1}{2}$ |
| 30 | $2\\frac{1}{2}$ |

### Worked Example 2 — six months

> \\$1,500 is saved at 4% simple interest for 6 months. How much interest does it earn?

One year: 4% of 1,500 is $4 \\times 15 = 60$. Six months is half a year: $60 \\times \\frac{1}{2} = 30$. It earns **\\$30**.

Using 6 as if it were years gives $60 \\times 6 = 360$, twelve times too much. Reasonableness check: half a year of interest must be **less** than one year's \\$60.

### Worked Example 3 — eighteen months

> \\$2,200 is borrowed at 5% simple interest for 18 months. How much interest is owed?

One year: 5% of 2,200 is half of 220, which is 110. Eighteen months is $1\\frac{1}{2}$ years: $110 + 55 = 165$. The interest is **\\$165**.`
    },
    {
      id: 'arpi5-reverse',
      type: 'text' as const,
      content: `## Finding the rate or the time

If the problem gives the interest and asks for the rate or the time, use the same formula and divide.

### Worked Example 4 — find the rate

> A deposit of \\$800 earns \\$96 in simple interest over 2 years. What is the yearly interest rate?

Interest per year: $96 \\div 2 = 48$. As a percent of the principal: $\\frac{48}{800} = \\frac{6}{100} = 6\\%$.

Check: 6% of 800 is 48, and $48 \\times 2 = 96$. ✓

### Worked Example 5 — find the time

> \\$1,200 is invested at 5% simple interest. How many years will it take to earn \\$180 in interest?

One year earns 5% of 1,200, which is 60. Years: $180 \\div 60 = 3$. It takes **3 years**.

## Savings or loan, the math is the same

| Story | $P$ | $I$ means | Total means |
|:---|:---|:---|:---|
| Savings account | Amount deposited | Interest **earned** | Balance at the end |
| Loan | Amount borrowed | Interest **owed** (the cost of the loan) | Amount to repay |

### Worked Example 6 — equal monthly payments

> Tasha borrows \\$1,800 for a used motorcycle at 5% simple interest for 2 years. She repays the loan plus interest in equal monthly payments. How much is each payment?

- Interest: 5% of 1,800 is 90 per year, so $90 \\times 2 = 180$
- Total to repay: $1{,}800 + 180 = 1{,}980$
- Number of payments: 2 years × 12 = 24 months
- Each payment: $1{,}980 \\div 24 = 82.50$, so **\\$82.50**

Estimate: $1{,}800 \\div 24$ is 75, so each payment should be a bit more than \\$75. ✓`
    },
    {
      id: 'arpi5-mc',
      type: 'multiple-choice' as const,
      content: '**Check: simple interest.** Rate as a decimal, time in years. 🎯',
      exercise: {
        questions: [
          {
            question: 'Kim deposits \\$3,000 in a savings account that pays 2% simple interest per year. How much interest does she earn in 4 years?',
            options: ['\\$60', '\\$3,240', '\\$240', '\\$24,000'],
            correctAnswer: 2,
            explanation: 'One year: 2% of 3,000 is 60. Four years: $60 \\times 4 = 240$, so \\$240. \\$60 is only one year of interest. \\$3,240 is the account balance (principal plus interest), not the interest earned, and \\$24,000 uses the rate as 2 instead of 0.02.'
          },
          {
            question: 'A \\$2,400 loan charges 5% simple interest per year. How much interest is owed after 9 months?',
            options: ['\\$1,080', '\\$120', '\\$10', '\\$90'],
            correctAnswer: 3,
            explanation: 'One year: 5% of 2,400 is 120. Nine months is $\\frac{9}{12} = \\frac{3}{4}$ of a year, and $\\frac{3}{4} \\times 120 = 90$, so \\$90. \\$1,080 treats the 9 months as 9 years. \\$120 is a full year of interest, and \\$10 is the interest for just one month.'
          },
          {
            question: 'A \\$500 deposit earns \\$60 in simple interest over 3 years. What is the yearly interest rate?',
            options: ['4%', '12%', '36%', '20%'],
            correctAnswer: 0,
            explanation: 'Interest per year: $60 \\div 3 = 20$. Rate: $\\frac{20}{500} = \\frac{4}{100} = 4\\%$. 12% is $\\frac{60}{500}$, which forgets to split the interest over 3 years. 36% multiplies by 3 instead of dividing, and 20% is the yearly interest in dollars mislabeled as a percent.'
          }
        ]
      }
    },
    {
      id: 'arpi5-input',
      type: 'input-boxes' as const,
      content: `**Interest, totals and payments.** ✍️

**1)** \\$4,000 is saved at 3% simple interest for 5 years. How much interest does it earn? (number only, in dollars)

**2)** Ray borrows \\$1,200 at 8% simple interest for 18 months. How much does he owe in all, principal plus interest? (number only, in dollars)

**3)** A \\$1,000 loan at 8% simple interest for 1 year is repaid, with interest, in 12 equal monthly payments. How much is each payment? (number only, in dollars)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['600', '1344', '90'],
        hint1: 'One year: 3% of 4,000 is $3 \\times 40$. Then multiply by 5 years.',
        hint2: '18 months is 1.5 years. One year of interest is 8% of 1,200, which is 96.',
        hint3: 'Interest is 8% of 1,000. Add it to the principal, then divide by 12.',
        explanation: '(1) One year: 120; five years: $120 \\times 5 = 600$, or \\$600. (2) One year: 96; 1.5 years: $96 + 48 = 144$; total owed $1{,}200 + 144 = 1{,}344$, or \\$1,344. (3) Interest: 80; total $1{,}080$; each payment $1{,}080 \\div 12 = 90$, or \\$90.'
      }
    },
    {
      id: 'arpi5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Simple interest: $I = P \\times r \\times t$**, with the rate as a decimal and the time in **years**
- Shortcut: one year of interest (rate × principal), then multiply by the years
- Months → years: divide by 12 (6 months = $\\frac{1}{2}$ year, 18 months = 1.5 years)
- **Total** owed or saved = principal + interest
- Find the rate: (interest per year) ÷ principal. Find the time: interest ÷ (one year of interest)
- Equal monthly payments: (principal + interest) ÷ number of months

> **Up Next:** Part 6 — the traps the test sets on percent problems, and how to dodge each one.`
    }
  ]
};
