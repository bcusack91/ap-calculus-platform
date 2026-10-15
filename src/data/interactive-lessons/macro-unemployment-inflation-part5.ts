export const macroUnemploymentInflationPart5Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {
      id: 'macroune5-intro',
      type: 'text' as const,
      content: `
# 📊 Unemployment & Inflation

**Part 5 of 7 — Costs of Inflation & Real Interest Rates**

---

| Section |
|---------|
| 📖 Nominal vs. Real Interest Rates |
| Expected vs. Unexpected Inflation |
| Who Wins and Who Loses |
| Costs of Inflation Even When It Is Expected |
| Deflation and Its Costs |

> 🔑 **Key Concept:** The **real interest rate** is the nominal interest rate minus inflation. When inflation is **unexpected**, real interest rates differ from what borrowers and lenders planned, and purchasing power is **redistributed** between them. Even **expected** inflation has costs: shoe-leather costs, menu costs and unit-of-account costs.
`
    },
    {
      id: 'macroune5-rates',
      type: 'text' as const,
      content: `
## 📖 Nominal vs. Real Interest Rates

The **nominal interest rate** is the rate stated on a loan or a savings account, in dollars. The **real interest rate** measures the return in **purchasing power**, after inflation.

**Real interest rate = Nominal interest rate − Inflation rate**

Rearranged: **Nominal interest rate = Real interest rate + Expected inflation rate**

### Worked Example: A Savings Account

A savings account pays 1% interest, and inflation is 3%.

- Nominal return: \\$1,000 grows to \\$1,010 in a year.
- Real return: 1% − 3% = **−2%**. The \\$1,010 buys about 2% less than the original \\$1,000 did.

A positive nominal rate can still be a **negative** real rate. The saver has more dollars but less purchasing power.

### Why lenders build in expected inflation

Lenders care about the real return. If a lender wants a 4% real return and expects 3% inflation, it will charge a nominal rate of about **4% + 3% = 7%**. Borrowers agree because they also expect to repay with dollars that have lost about 3% of their value each year.
`
    },
    {
      id: 'macroune5-unexpected',
      type: 'text' as const,
      content: `
## Expected vs. Unexpected Inflation

Contracts set the nominal rate **in advance**, using **expected** inflation. The real rate that actually results depends on **actual** inflation.

| Rate | Formula |
|---|---|
| Expected (planned) real rate | Nominal rate − **expected** inflation |
| Actual (realized) real rate | Nominal rate − **actual** inflation |

### Worked Example: A \\$10,000 Loan at 7%

A bank lends \\$10,000 for one year at a 7% nominal rate, expecting 3% inflation. Both sides expect a real rate of 7% − 3% = **4%**.

| Actual inflation | Realized real rate | Who gains | Who loses |
|---|---|---|---|
| 3% (as expected) | 7% − 3% = **4%** | Neither: the plan held | Neither |
| 5% (higher than expected) | 7% − 5% = **2%** | **Borrower**: repays with dollars worth less than planned | **Lender**: earns less purchasing power than planned |
| 1% (lower than expected) | 7% − 1% = **6%** | **Lender**: earns more purchasing power than planned | **Borrower**: repays with dollars worth more than planned |

In dollars: the borrower repays \\$10,700 in every case. With 5% inflation, that \\$10,700 has the purchasing power of about \\$10,700 ÷ 1.05 ≈ \\$10,190 in today's dollars, not the \\$10,300 (≈ \\$10,700 ÷ 1.03) the lender planned on.

> 🔑 **AP Connection:** Inflation that is **fully anticipated** and built into nominal interest rates does not redistribute purchasing power between borrowers and lenders. Redistribution comes from the **surprise**: the gap between actual and expected inflation.
`
    },
    {
      id: 'macroune5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bank charges an 8% nominal interest rate on a one-year loan, expecting inflation of 2%. Actual inflation turns out to be 5%. What real interest rate does the bank actually earn?',
            options: [
              '6%',
              '13%',
              '10%',
              '3%'
            ],
            correctAnswer: 3,
            explanation: 'The realized real rate is the nominal rate minus actual inflation: 8% − 5% = 3%. The bank planned on 6% (8% − 2%), and adding inflation instead of subtracting it gives 13% or 10%.'
          },
          {
            question: 'Inflation turns out to be much higher than borrowers and lenders expected when they signed fixed-rate loan contracts. As a result,',
            options: [
              'borrowers gain because they repay with dollars that buy less than planned',
              'lenders gain because they receive more interest dollars than they had planned on',
              'borrowers lose because their real interest rate rises above the rate they planned on',
              'neither side is affected because the nominal interest rate was fixed in advance'
            ],
            correctAnswer: 0,
            explanation: 'Unexpectedly high inflation lowers the realized real interest rate, so borrowers repay in dollars with less purchasing power and gain at lenders\' expense. Lenders receive the same number of dollars, not more, and the fixed nominal rate is exactly why the surprise redistributes purchasing power.'
          },
          {
            question: 'A saver wants to earn a real return of 3% and expects inflation of 2.5%. Approximately what nominal interest rate must she earn?',
            options: [
              '0.5%',
              '5.5%',
              '3.0%',
              '2.5%'
            ],
            correctAnswer: 1,
            explanation: 'Nominal rate = real rate + expected inflation = 3% + 2.5% = 5.5%. Subtracting gives 0.5%, and 3.0% would leave her with only a 0.5% real return once prices rise 2.5%.'
          }
        ]
      }
    },
    {
      id: 'macroune5-winners',
      type: 'text' as const,
      content: `
## Who Wins and Who Loses from Unexpected Inflation

The rule: unexpected inflation hurts anyone whose income or assets are **fixed in nominal terms** and helps anyone whose **debts** are fixed in nominal terms.

| Hurt by unexpected inflation | Helped by unexpected inflation |
|---|---|
| **Lenders** at fixed interest rates | **Borrowers** at fixed interest rates (for example, a fixed-rate mortgage) |
| **Savers** holding cash or fixed-rate deposits | The **government**, as a large borrower, when its debt is fixed in nominal terms |
| People on **fixed nominal incomes** (a pension with no COLA) | |
| Workers whose wages are set in long-term contracts and rise less than prices | |

### How people protect themselves

- **Variable (adjustable) interest rates** reset as inflation changes, so the real rate is not locked in.
- **COLAs** raise wages and benefits with the CPI.
- **Inflation-indexed bonds**, such as U.S. Treasury Inflation-Protected Securities (TIPS), raise their principal with the CPI.

The more contracts are indexed, the less inflation redistributes.
`
    },
    {
      id: 'macroune5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

**1)** A certificate of deposit pays a 6% nominal interest rate, and inflation is 2.5%. What is the real interest rate, in percent?

**2)** A lender charges 6% on a fixed-rate loan, expecting 2% inflation. Actual inflation is 4.5%. What real interest rate does the lender actually earn, in percent?

**3)** Borrowers and lenders agree on a real interest rate of 3% and both expect inflation of 4%. What nominal interest rate will they set, in percent?

Enter numbers only (no % sign). Round to one decimal place if needed.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.5', '1.5', '7'],
        hint1: 'Real interest rate = nominal interest rate − inflation rate.',
        hint2: 'For the realized real rate, subtract the ACTUAL inflation rate, not the expected one.',
        hint3: 'Nominal rate = real rate + expected inflation.',
        explanation: '1) 6% − 2.5% = 3.5%. 2) The lender planned on 6% − 2% = 4%, but actually earned 6% − 4.5% = 1.5%. 3) 3% + 4% = 7%.'
      }
    },
    {
      id: 'macroune5-costs',
      type: 'text' as const,
      content: `
## Costs of Inflation Even When It Is Expected

Redistribution is a cost of **unexpected** inflation. Inflation also imposes real costs on the economy even when everyone sees it coming.

| Cost | What it is | Example |
|---|---|---|
| **Shoe-leather costs** | Time and effort people and firms spend to reduce their cash holdings, because cash loses value as prices rise | Making more trips to the bank or moving money between accounts more often; in very high inflation, people rush to spend their pay the day they receive it |
| **Menu costs** | The real cost of changing listed prices | Reprinting menus and catalogs, relabeling shelves, updating websites and price software |
| **Unit-of-account costs** | Money becomes a less reliable measuring stick, so planning, contracts and tax calculations become distorted | Taxes are charged on **nominal** gains: an investor whose asset rises 4% in price while inflation is 4% earns no real gain but still owes tax on the 4% |

These costs grow quickly as inflation rises. At very high rates (**hyperinflation**), people abandon the currency for barter or foreign money, and the economy's use of money as a unit of account breaks down.

## Deflation and Its Costs

**Deflation** is a falling price level (a negative inflation rate). It is **not** the same as disinflation, where the inflation rate falls but prices still rise.

Unexpected deflation reverses the redistribution:

- The real value of debt **rises**, so **borrowers lose** and **lenders gain**.
- The realized real interest rate is **higher** than the nominal rate. A 2% loan during 1% deflation has a real rate of 2% − (−1%) = **3%**.
- If people expect prices to keep falling, they may **delay purchases**, which reduces aggregate demand and can deepen a recession.

> 🔑 **AP Connection:** The costs of inflation are a key reason central banks aim for **low and stable** inflation rather than zero or negative inflation. The Federal Reserve's longer-run goal is 2% inflation, measured by the PCE price index.
`
    },
    {
      id: 'macroune5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A restaurant that must reprint its menus every few weeks because of rising prices faces ___.',
            options: ['menu costs', 'shoe-leather costs', 'unit-of-account costs', 'redistribution costs']
          },
          {
            label: 'Households that keep less cash and make more trips to the bank during inflation face ___.',
            options: ['menu costs', 'shoe-leather costs', 'unit-of-account costs', 'redistribution costs']
          },
          {
            label: 'Unexpected deflation helps ___ with fixed-rate loans.',
            options: ['lenders', 'borrowers', 'retirees', 'workers']
          },
          {
            label: 'If the inflation rate falls from 4% to 1%, the economy is experiencing ___.',
            options: ['disinflation', 'deflation', 'hyperinflation', 'stagflation']
          }
        ],
        correctAnswers: ['menu costs', 'shoe-leather costs', 'lenders', 'disinflation'],
        hint1: 'Which cost comes from physically changing listed prices?',
        hint2: 'Which cost comes from trying to hold less money?',
        hint3: 'Deflation raises the real value of what a borrower owes to a lender.',
        explanation: 'Reprinting menus is a menu cost, and holding less cash at the price of extra trips is a shoe-leather cost. Unexpected deflation raises the real value of fixed debts, which helps lenders. A falling but still positive inflation rate is disinflation, not deflation.'
      }
    }
  ]
}
