export const microMarketFailurePart5Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromar5-intro',
      type: 'text' as const,
      content: `
# 💰 Market Failure

**Part 5 of 7 — Sources of Inequality and Redistribution**

---

| Section |
|---------|
| 📖 Where Income Differences Come From |
| Average and Marginal Tax Rates |
| Progressive, Proportional and Regressive Taxes |
| Transfers and the Lorenz Curve |
| The Equity–Efficiency Trade-Off |

> 🔑 **Key Concept:** Markets pay people according to the value of what they sell, including their labor, so differences in skills, assets and bargaining power become differences in income and wealth. Governments change the final distribution with **taxes** and **transfers**. A tax is **progressive**, **proportional** or **regressive** depending on whether its **average rate** rises, stays the same or falls as income rises.
      `
    },
    {
      id: 'micromar5-sources',
      type: 'text' as const,
      content: `
## 📖 Where Income Differences Come From

| Source | How it creates inequality | Example |
|---|---|---|
| **Human capital** | Education, training and experience raise a worker's marginal revenue product, so the market pays more | A licensed electrician earns more than an untrained helper |
| **Differences in ability** | Rare talents command high pay when demand for them is strong | A top surgeon or a professional athlete |
| **Discrimination** | Workers with the same productivity are paid or hired differently because of race, sex or other traits | Equally qualified applicants receiving different offers |
| **Inherited wealth** | Assets passed down earn interest, rent and dividends, and fund more education | Income from a family trust |
| **Market power** | Firms with monopoly power earn economic profits; unions can raise members' wages | Owners of a patented product |
| **Luck and health** | Illness, a plant closing or a lucky investment change income without any change in skill | A worker laid off in a regional downturn |
| **Tax structure** | Taxes that take a larger share from low incomes widen after-tax gaps | A sales tax on necessities |

### Income Gaps Become Wealth Gaps
Higher-income households can **save** more, savings earn a return, and the return can be saved again. Inheritances pass wealth across generations. That is why the wealth Lorenz curve bows farther from the line of equality than the income Lorenz curve (Part 4).

> 🔑 **AP Connection:** These are the same forces you saw in the factor-market topics: wages track marginal revenue product, so anything that changes a worker's MRP, or the bargaining power on either side of the labor market, changes the income distribution.
      `
    },
    {
      id: 'micromar5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two workers have the same natural ability, but one completes a nursing degree and then earns much more. Which source of income inequality does this illustrate?',
            options: [
              'Differences in human capital',
              'Inherited wealth',
              'Labor-market discrimination',
              'Market power of employers'
            ],
            correctAnswer: 0,
            explanation: 'The degree raised the nurse\'s skills and marginal revenue product, so the market pays more: that is human capital. Nothing in the example involves inherited assets, unequal treatment of equally productive workers, or employer power.'
          },
          {
            question: 'Why is wealth usually distributed more unequally than income?',
            options: [
              'Saving and inheritance let assets pile up over time',
              'Wealth is measured only for the richest households',
              'Income taxes fall more heavily on wealthy households',
              'Wages vary more across workers than asset values do'
            ],
            correctAnswer: 0,
            explanation: 'Wealth is a stock that grows as households save part of their income, earn returns on it and pass it on. Households with higher incomes save more, so the gaps compound. Wealth is measured for all households, and taxes on high incomes would narrow, not widen, the gap.'
          }
        ]
      }
    },
    {
      id: 'micromar5-rates',
      type: 'text' as const,
      content: `
## Average and Marginal Tax Rates

- **Average tax rate** = total tax ÷ total income.
- **Marginal tax rate** = the tax rate on the **next** dollar of income.

### A Bracket System
| Taxable income | Rate on income in that bracket |
|---|---|
| \\$0 to \\$20,000 | 10% |
| \\$20,000 to \\$60,000 | 20% |
| Above \\$60,000 | 30% |

| Income | Tax owed | Average rate | Marginal rate |
|---|---|---|---|
| \\$20,000 | 10% × 20,000 = **\\$2,000** | **10%** | 10% |
| \\$50,000 | \\$2,000 + 20% × 30,000 = **\\$8,000** | **16%** | 20% |
| \\$100,000 | \\$2,000 + \\$8,000 + 30% × 40,000 = **\\$22,000** | **22%** | 30% |

Each rate applies only to the income **inside** its bracket. The \\$100,000 earner pays 30% only on the \\$40,000 above \\$60,000, which is why the average rate (22%) is below the top marginal rate (30%).

> ⚠️ **Common trap:** "A raise that moves me into a higher bracket will cut my take-home pay" is false under a bracket system. Only the dollars **above** the bracket line are taxed at the higher rate. A raise from \\$58,000 to \\$62,000 adds \\$1,000 of tax (20% of \\$2,000 plus 30% of \\$2,000), so the worker keeps \\$3,000 of the \\$4,000 raise.
      `
    },
    {
      id: 'micromar5-input',
      type: 'input-boxes' as const,
      content: `
**Compute the Rates** ✍️

Use the bracket system above (10% on the first \\$20,000, 20% from \\$20,000 to \\$60,000, 30% above \\$60,000). A household earns **\\$80,000**.

1) How much tax does it owe? (dollars, number only)

2) What is its average tax rate? (percent, number only)

3) What is its marginal tax rate? (percent, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16000', '20', '30'],
        hint1: 'Fill the brackets in order: the first \\$20,000, then the next \\$40,000, then whatever is left.',
        hint2: 'Average rate = total tax ÷ \\$80,000.',
        hint3: 'Which bracket does the household\'s last dollar fall in?',
        explanation: '1) \\$2,000 + 20% × \\$40,000 + 30% × \\$20,000 = \\$2,000 + \\$8,000 + \\$6,000 = \\$16,000. 2) \\$16,000 ÷ \\$80,000 = 20%. 3) The last dollar is above \\$60,000, so the marginal rate is 30%.'
      }
    },
    {
      id: 'micromar5-types',
      type: 'text' as const,
      content: `
## Progressive, Proportional and Regressive Taxes

Classify a tax by what happens to the **average tax rate** as income rises, never by the number of dollars paid.

| Type | Average rate as income rises | Effect on inequality |
|---|---|---|
| **Progressive** | Rises | Reduces after-tax inequality |
| **Proportional** (flat) | Stays the same | Leaves the distribution unchanged |
| **Regressive** | Falls | Increases after-tax inequality |

### Worked Classifications

| Tax | Household earning \\$20,000 | Household earning higher income | Type |
|---|---|---|---|
| The bracket system above | \\$2,000 = 10% | \\$100,000: \\$22,000 = 22% | **Progressive** |
| A flat 15% of all income | \\$3,000 = 15% | \\$100,000: \\$15,000 = 15% | **Proportional** |
| 20% of income above a \\$10,000 exemption | \\$2,000 = 10% | \\$100,000: \\$18,000 = 18% | **Progressive** |
| A \\$1,000 tax on every household | \\$1,000 = 5% | \\$100,000: \\$1,000 = 1% | **Regressive** |
| A 5% sales tax (spending \\$18,000 vs \\$60,000) | \\$900 = 4.5% | \\$200,000: \\$3,000 = 1.5% | **Regressive** |

### Three Points the Table Makes
- A single tax rate can still be **progressive** if low incomes are exempt: the exemption is a bigger share of a small income.
- A **sales tax** is regressive with respect to income because lower-income households spend a larger share of what they earn.
- The richer household pays **more dollars** under the sales tax (\\$3,000 vs \\$900), but a **smaller percentage**, so the tax is still regressive.

A payroll tax that stops at a cap works the same way. At 6% on wages up to \\$150,000, a \\$50,000 earner pays \\$3,000 (6%), but a \\$300,000 earner pays \\$9,000, just 3% of income.
      `
    },
    {
      id: 'micromar5-transfers',
      type: 'text' as const,
      content: `
## Transfers and the Lorenz Curve

**Transfer payments** move money to households without anything being sold in return: cash assistance, food assistance, unemployment benefits and refundable tax credits for low earners. Many are **means-tested**, paid only to households below an income limit.

| Policy | Lorenz curve | Gini |
|---|---|---|
| More progressive income tax | Moves **toward** the line of equality | Falls |
| Larger transfers to low-income households | Moves **toward** the line of equality | Falls |
| Shift from income taxes to a sales tax | Moves **away** from the line of equality | Rises |
| Cut in benefits for low-income households | Moves **away** from the line of equality | Rises |

Part 4's table showed this at work: taxes and transfers moved the poorest quintile's share from 3% to 6% and cut the Gini from 0.452 to 0.352.
      `
    },
    {
      id: 'micromar5-tradeoff',
      type: 'text' as const,
      content: `
## The Equity–Efficiency Trade-Off

Redistribution has costs as well as benefits.
- **Taxes create deadweight loss.** Taxing income drives a wedge between what employers pay and what workers keep, as an excise tax does in a goods market.
- **Incentives can weaken.** High marginal tax rates lower the reward for an extra hour of work or an extra dollar invested. A transfer that shrinks as a household earns more acts like an extra marginal tax on that household.
- **Some policies help both.** Spending that builds human capital, such as education and job training, can raise future productivity while narrowing income gaps.

How much efficiency to give up for more equity is a **normative** question. Economics measures the trade-off; it does not settle the right answer.

> 🔑 **AP Connection:** A strong FRQ answer separates the two parts: a **positive** prediction (this tax is regressive, so the Lorenz curve moves away from equality) and, only if asked, a **normative** judgment clearly labeled as one.
      `
    },
    {
      id: 'micromar5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A tax takes \\$3,000 from a household earning \\$30,000 and \\$6,300 from a household earning \\$90,000. This tax is',
            options: [
              'regressive',
              'progressive',
              'proportional',
              'lump-sum'
            ],
            correctAnswer: 0,
            explanation: 'The average rate falls from 10% to 7% as income rises, so the tax is regressive, even though the richer household pays more dollars. It is not lump-sum, because the two households pay different amounts.'
          },
          {
            question: 'Under the bracket system in this lesson, a raise moves a worker\'s income from \\$58,000 to \\$62,000. Which statement is accurate?',
            options: [
              'Only \\$2,000 of the raise is taxed at 30%',
              'All \\$62,000 of income is now taxed at 30%',
              'The raise lowers the worker\'s after-tax income',
              'The worker\'s average tax rate rises to 30%'
            ],
            correctAnswer: 0,
            explanation: 'The 30% rate applies only to dollars above \\$60,000, so the first \\$2,000 of the raise is taxed at 20% and the last \\$2,000 at 30%. Tax rises by \\$1,000 and take-home pay rises by \\$3,000; the average rate is only about 17%.'
          },
          {
            question: 'Which policy would most likely move a country\'s Lorenz curve away from the line of equality?',
            options: [
              'Replacing income taxes with a national sales tax',
              'Expanding tax credits for low-wage workers',
              'Raising the tax rate in the top income bracket',
              'Increasing cash aid to low-income families'
            ],
            correctAnswer: 0,
            explanation: 'A progressive income tax narrows after-tax gaps, and a sales tax is regressive, so the swap shifts the after-tax burden toward low-income households and widens inequality. Tax credits for low earners, a higher top rate and more cash aid all move the curve toward equality.'
          }
        ]
      }
    }
  ]
}
