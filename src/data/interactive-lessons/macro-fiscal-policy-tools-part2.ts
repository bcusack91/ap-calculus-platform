export const macroFiscalPolicyToolsPart2Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {
      id: 'macrofis2-tools-intro',
      type: 'text' as const,
      content: `
# 🛠️ Fiscal Policy Tools

**Part 2 of 7 — Budgets, Deficits and the National Debt**

---

| Section |
|---------|
| 📖 The Budget Balance |
| From Deficits to Debt |
| How Deficits Are Financed |
| Interest on the Debt |

> 🔑 **Key Concept:** A **budget deficit** is a one-year shortfall: government spending is greater than tax revenue. The **national debt** is the running total of every past deficit minus every past surplus. Governments cover deficits by **borrowing**, selling Treasury securities, and they must pay **interest** on what they owe.
`
    },
    {
      id: 'macrofis2-tools-balance',
      type: 'text' as const,
      content: `
## 📖 The Budget Balance

**Budget balance = tax revenue − government spending**

For budget purposes, government spending includes three kinds of outlays:

| Outlay | Example | Counted in G for GDP? |
|---|---|---|
| **Government purchases** | Salaries of soldiers, new highways | Yes |
| **Transfer payments** | Social Security, unemployment benefits | No |
| **Interest on the debt** | Interest paid to holders of Treasury securities | No |

| Result | Name | Effect on the debt |
|---|---|---|
| Revenue > spending | **Budget surplus** | Debt can be paid down |
| Revenue = spending | **Balanced budget** | Debt unchanged |
| Revenue < spending | **Budget deficit** | Debt rises by the amount of the deficit |

### Flow vs. stock

- The **deficit** is a **flow**: it is measured over a period, such as a fiscal year.
- The **debt** is a **stock**: it is measured at a point in time, such as the end of the year.

A bathtub is a useful picture. The deficit is the water flowing in this year; the debt is the water already in the tub. Slowing the faucet (a smaller deficit) still raises the water level. Only opening the drain (a surplus) lowers it.
`
    },
    {
      id: 'macrofis2-tools-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government collects \\$3.2 trillion in taxes and spends \\$3.6 trillion, including transfers and interest. Which statement is correct?',
            options: [
              'It runs a \\$0.4 trillion surplus',
              'Its national debt is \\$0.4 trillion',
              'Its national debt falls by \\$0.4 trillion',
              'It has a \\$0.4 trillion deficit'
            ],
            correctAnswer: 3,
            explanation: 'Spending exceeds revenue by \\$0.4 trillion, which is this year\'s deficit. The deficit adds \\$0.4 trillion to the debt; the debt itself is the much larger total of all past borrowing.'
          },
          {
            question: 'Which of these is a stock rather than a flow?',
            options: [
              'The national debt',
              'This year\'s budget deficit',
              'Annual tax revenue',
              'Yearly interest payments'
            ],
            correctAnswer: 0,
            explanation: 'The national debt is the amount owed at a point in time, so it is a stock. The deficit, tax revenue and interest payments are all measured over a year, so they are flows.'
          },
          {
            question: 'The budget deficit falls from \\$500 billion to \\$300 billion. What happens to the national debt that year?',
            options: [
              'It falls by \\$200 billion',
              'It rises by \\$300 billion',
              'It rises by \\$200 billion',
              'It falls by \\$300 billion'
            ],
            correctAnswer: 1,
            explanation: 'The government still spent \\$300 billion more than it collected and borrowed to cover it, so the debt grows by \\$300 billion. The \\$200 billion is only the improvement in the deficit, not a change in the debt.'
          }
        ]
      }
    },
    {
      id: 'macrofis2-tools-debt',
      type: 'text' as const,
      content: `
## From Deficits to Debt

**Debt at end of year = debt at start of year + deficit (or − surplus)**

### Worked Example: Four years, starting debt \\$2,000 billion (billions of dollars)

| Year | Tax revenue | Spending | Balance | Debt at end of year |
|---|---|---|---|---|
| 1 | 900 | 1,000 | −100 | 2,000 + 100 = **2,100** |
| 2 | 950 | 1,020 | −70 | 2,100 + 70 = **2,170** |
| 3 | 1,000 | 980 | +20 | 2,170 − 20 = **2,150** |
| 4 | 880 | 1,060 | −180 | 2,150 + 180 = **2,330** |

### What the table shows

- In Year 2 the deficit **shrank** from 100 to 70, yet the debt still **grew** by 70.
- Only Year 3, with a **surplus**, reduced the debt.
- Year 4 looks like a recession: revenue dropped and spending rose (automatic stabilizers, from the Fiscal Policy topic), and the deficit jumped.
- Over the four years, the debt rose by 100 + 70 − 20 + 180 = **330**, the sum of the yearly balances with the sign reversed.
`
    },
    {
      id: 'macrofis2-tools-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A government starts the year with a national debt of \\$4,000 billion. This year it collects \\$1,500 billion in taxes and spends \\$1,620 billion.

**1)** What is the budget balance, in billions? (Use a minus sign for a deficit.)

**2)** What is the national debt at the end of the year, in billions?

**3)** Next year the government runs a surplus of \\$50 billion. What is the debt at the end of next year, in billions?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-120', '4120', '4070'],
        hint1: 'Revenue minus spending: 1,500 − 1,620.',
        hint2: 'A deficit is added to the starting debt.',
        hint3: 'A surplus is subtracted from the debt.',
        explanation: '1) 1,500 − 1,620 = −120, a deficit. 2) 4,000 + 120 = 4,120. 3) 4,120 − 50 = 4,070.'
      }
    },
    {
      id: 'macrofis2-tools-finance',
      type: 'text' as const,
      content: `
## How Deficits Are Financed

When the federal government spends more than it collects, the U.S. Treasury **borrows** by selling **Treasury securities**: bills (one year or less), notes (two to ten years) and bonds (longer). Each security is a promise to repay the amount borrowed, plus interest.

### Who lends to the government

| Buyer | Why it buys Treasury securities |
|---|---|
| Households and mutual funds | A safe place to earn interest |
| Banks, insurers and pension funds | Safe assets that are easy to sell |
| Foreign investors and governments | A safe asset denominated in dollars |
| The Federal Reserve | Buys them in the open market as part of monetary policy |

### Borrowing is not printing money

The Treasury and the Federal Reserve are separate. When the Treasury runs a deficit, it borrows money that **already exists** from lenders. Selling a bond does **not** create new money. Whether the money supply changes depends on the Federal Reserve's monetary policy decisions, not on the deficit itself.

### Debt held by the public

The **debt held by the public** is the part owned by lenders outside the federal government: households, firms, banks, state and local governments, foreign investors and the Federal Reserve. The rest is **intragovernmental debt**, owed by one part of the federal government to another, such as the Social Security trust funds. Economists usually focus on debt held by the public, because that borrowing competes with private borrowers for saving.

> 🔑 **AP Connection:** If a question asks how the government finances a deficit, the answer is that it **borrows by selling government bonds** (Treasury securities). This borrowing is what drives crowding out in Part 3.
`
    },
    {
      id: 'macrofis2-tools-interest',
      type: 'text' as const,
      content: `
## Interest on the Debt

**Annual interest payments ≈ average interest rate on the debt × debt**

### Worked Example: Two years later

| | Debt | Average interest rate | Interest payments |
|---|---|---|---|
| Today | \\$2,000 billion | 3% | 0.03 × 2,000 = **\\$60 billion** |
| Two years later | \\$2,400 billion | 4% | 0.04 × 2,400 = **\\$96 billion** |

Interest payments rose by \\$36 billion, or 60%, because **both** the debt and the interest rate rose.

### Why interest costs matter

- Interest payments are part of government spending. If they grow and nothing else changes, the **deficit gets larger**, which adds to the debt, which raises next year's interest. The debt can feed on itself.
- Dollars spent on interest cannot be spent on public investment such as roads or schools, or returned to taxpayers.
- When interest rates rise, the cost of the debt rises gradually, as old securities mature and are replaced by new ones at the higher rate.
`
    },
    {
      id: 'macrofis2-tools-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A year in which tax revenue exceeds government spending has a budget ___.',
            options: ['deficit', 'surplus', 'debt', 'multiplier']
          },
          {
            label: 'To finance a deficit, the Treasury sells ___.',
            options: ['corporate stock', 'foreign currency', 'Treasury securities', 'bank reserves']
          },
          {
            label: 'Debt owed by one part of the federal government to another is called ___ debt.',
            options: ['intragovernmental', 'public', 'foreign', 'private']
          },
          {
            label: 'If the debt and interest rates both rise, interest payments ___.',
            options: ['fall', 'stay the same', 'become a surplus', 'rise']
          }
        ],
        correctAnswers: ['surplus', 'Treasury securities', 'intragovernmental', 'rise'],
        hint1: 'More money comes in than goes out.',
        hint2: 'The government borrows by issuing promises to repay with interest.',
        hint3: 'Think of the Social Security trust funds.',
        explanation: 'Revenue above spending is a surplus, and deficits are financed by selling Treasury securities. Debt held by trust funds such as Social Security is intragovernmental, and a larger debt at a higher rate means larger interest payments.'
      }
    },
    {
      id: 'macrofis2-tools-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government runs a \\$200 billion deficit and finances it by selling bonds to the public. What happens to the money supply as a direct result of the bond sale?',
            options: [
              'It rises by \\$200 billion',
              'It falls by \\$200 billion',
              'It does not change',
              'It rises by the money multiplier'
            ],
            correctAnswer: 2,
            explanation: 'The Treasury borrows money that already exists and then spends it, so the bond sale itself creates no new money. Money is created when banks lend or when the central bank buys securities, not when the Treasury borrows.'
          },
          {
            question: 'The debt is \\$3,000 billion and the average interest rate on it is 2%. If the debt grows to \\$3,500 billion and the rate rises to 3%, by how much do annual interest payments rise?',
            options: [
              '\\$15 billion',
              '\\$105 billion',
              '\\$10 billion',
              '\\$45 billion'
            ],
            correctAnswer: 3,
            explanation: 'Interest starts at 0.02 × \\$3,000 billion = \\$60 billion and ends at 0.03 × \\$3,500 billion = \\$105 billion, a rise of \\$45 billion. \\$105 billion is the new total, not the change.'
          },
          {
            question: 'Why can rising interest payments make the debt grow faster even if no new programs are created?',
            options: [
              'Interest is part of spending, so it widens the deficit',
              'Interest payments reduce tax revenue each year',
              'Interest payments count as government purchases',
              'Interest is paid by printing new money each year'
            ],
            correctAnswer: 0,
            explanation: 'Interest is part of government outlays, so higher interest costs enlarge the deficit and add to the debt. Interest does not reduce revenue, is not a purchase of goods and services, and is paid from revenue and borrowing rather than printed money.'
          }
        ]
      }
    }
  ]
}
