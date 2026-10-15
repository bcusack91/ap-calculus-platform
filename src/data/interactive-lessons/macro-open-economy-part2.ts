export const macroOpenEconomyPart2Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {
      id: 'macroope2-intro',
      type: 'text' as const,
      content: `
# 🌏 Open Economy Macroeconomics

**Part 2 of 7 — The Loanable Funds Market in Depth**

---

| Section |
|---------|
| 📖 Who Saves and Who Borrows |
| What Shifts Supply and Demand |
| Worked Example: A Loanable Funds Schedule |
| Loanable Funds vs. the Money Market |

> 🔑 **Key Concept:** The **loanable funds market** brings together **savers**, who supply funds, and **borrowers**, who demand them. Its price is the **real interest rate**. Anything that changes how much people save or how much firms and the government want to borrow at each real interest rate shifts a curve and moves the real interest rate.
`
    },
    {
      id: 'macroope2-sides',
      type: 'text' as const,
      content: `
## 📖 Who Saves and Who Borrows

Part 1 introduced the graph. Here is who stands behind each curve.

### Supply of loanable funds = saving

| Source | What it is | Example |
|---|---|---|
| **Household saving** | Disposable income not spent on consumption | A family puts part of each paycheck into a savings account |
| **Business saving** | Profits a firm keeps instead of paying out (retained earnings) | A firm holds back part of its profit for future use |
| **Public saving** | A government **budget surplus** (tax revenue greater than spending) | The government repays debt, returning funds to lenders |
| **Foreign saving** | Funds from abroad that buy domestic financial assets (a **capital inflow**) | A foreign pension fund buys U.S. corporate bonds |

**Why supply slopes up:** a higher real interest rate is a bigger reward for postponing consumption, so households and others lend more.

### Demand for loanable funds = borrowing

| Borrower | Why they borrow |
|---|---|
| **Firms** | To buy physical capital: factories, machines, software, equipment (investment) |
| **Households** | To buy newly built homes (residential investment) |
| **Government** | To finance a **budget deficit** (spending greater than tax revenue) |

**Why demand slopes down:** a firm undertakes a project only if its expected rate of return is higher than the real interest rate. When the real interest rate falls, more projects pass that test, so more funds are demanded.

### Labeling the graph

- Vertical axis: **real interest rate (r)**
- Horizontal axis: **quantity of loanable funds**
- Equilibrium: the real interest rate at which the quantity of funds saved equals the quantity borrowed

> 🔑 **AP Connection:** In this course a budget **surplus** is public saving on the **supply** side, and a budget **deficit** is government borrowing on the **demand** side. Some answers show a deficit instead as a **leftward shift of supply** (less public saving); either way the real interest rate rises.
`
    },
    {
      id: 'macroope2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which group supplies funds in the loanable funds market?',
            options: [
              'Firms that borrow to build new factories',
              'Governments that borrow to cover deficits',
              'Families that take out loans for new homes',
              'Households that save a part of their income'
            ],
            correctAnswer: 3,
            explanation: 'Saving is the supply of loanable funds, so households that save part of their income are suppliers. Firms building factories, governments with deficits and families financing new homes are all borrowers on the demand side.'
          },
          {
            question: 'Why does the demand for loanable funds slope downward?',
            options: [
              'More investment projects earn more than r as r falls',
              'Savers lend more when the real interest rate falls',
              'Lower real rates raise the nominal rate on new loans',
              'Government borrowing rises as real interest rates fall'
            ],
            correctAnswer: 0,
            explanation: 'A project is worth funding only if its expected return exceeds the real interest rate, so a lower rate makes more projects worthwhile. Savers respond to higher rates by lending more, which describes the supply curve.'
          },
          {
            question: 'A government that collects more in taxes than it spends affects the loanable funds market by',
            options: [
              'adding borrowing to demand',
              'adding public saving to supply',
              'reducing foreign saving',
              'leaving both curves unchanged'
            ],
            correctAnswer: 1,
            explanation: 'A budget surplus is public saving, so it adds to the supply of loanable funds. Government borrowing on the demand side happens with a deficit, not a surplus.'
          }
        ]
      }
    },
    {
      id: 'macroope2-shifters',
      type: 'text' as const,
      content: `
## What Shifts Supply and Demand

A change in the real interest rate moves along the curves. A change in anything else that affects saving or borrowing **at every real interest rate** shifts a curve.

### Supply shifters

| Change | Supply shifts | Reason |
|---|---|---|
| Households decide to save a larger share of income | Right | More saving at every r |
| Tax incentives for saving (for example, tax-free retirement accounts) | Right | Saving earns a higher after-tax return |
| Government budget moves into surplus | Right | Public saving adds to the pool |
| **Capital inflow** (foreigners buy more domestic assets) | Right | Foreign saving enters the market |
| Households decide to consume more of their income | Left | Less saving at every r |
| **Capital outflow** (domestic savers buy foreign assets) | Left | Domestic saving leaves the market |

### Demand shifters

| Change | Demand shifts | Reason |
|---|---|---|
| Business expectations improve | Right | Expected returns on projects rise |
| **Investment tax credit** | Right | Projects become more profitable after taxes |
| New technology that raises returns on capital | Right | More projects worth funding |
| Larger government **budget deficit** | Right | The government borrows more |
| Business pessimism | Left | Fewer projects look profitable |
| Government deficit shrinks | Left | The government borrows less |

### Results to memorize

| Shift | Real interest rate | Quantity of loanable funds |
|---|---|---|
| Supply right | Falls | Rises |
| Supply left | Rises | Falls |
| Demand right | Rises | Rises |
| Demand left | Falls | Falls |

When supply shifts right and r falls, firms **move along** the demand curve and borrow more: the quantity of investment rises, but demand for loanable funds has not changed.
`
    },
    {
      id: 'macroope2-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Loanable Funds Schedule

Quantities are in billions of dollars per year.

| Real interest rate | Quantity supplied (saving) | Quantity demanded (borrowing) |
|---|---|---|
| 2% | \\$500 | \\$900 |
| 3% | \\$600 | \\$800 |
| 4% | \\$700 | \\$700 |
| 5% | \\$800 | \\$600 |
| 6% | \\$900 | \\$500 |

**Step 1: Equilibrium.** Quantity supplied equals quantity demanded at **4%**, where \\$700 billion is lent and borrowed.

**Step 2: Below equilibrium.** At 3%, borrowers want \\$800 billion but savers offer only \\$600 billion, a **shortage of \\$200 billion**. Competition among borrowers pushes r up toward 4%.

**Step 3: An investment tax credit** raises the quantity demanded by \\$200 billion at every rate. New demand: \\$1,100, \\$1,000, \\$900, \\$800, \\$700 at 2% through 6%. Quantity supplied equals the new quantity demanded at **5%**, with **\\$800 billion** lent.

**Step 4: Instead, start over with a capital inflow** that raises the quantity supplied by \\$200 billion at every rate. New supply: \\$700, \\$800, \\$900, \\$1,000, \\$1,100. It now equals the original demand at **3%**, with **\\$800 billion** lent.

Both shocks raise the quantity of loanable funds to \\$800 billion, but they move the real interest rate in **opposite** directions. The direction of r tells you which curve moved.
`
    },
    {
      id: 'macroope2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Quantities are in billions of dollars.

| Real interest rate | Quantity supplied | Quantity demanded |
|---|---|---|
| 1% | \\$200 | \\$500 |
| 2% | \\$300 | \\$450 |
| 3% | \\$400 | \\$400 |
| 4% | \\$500 | \\$350 |
| 5% | \\$600 | \\$300 |

**1)** What is the equilibrium real interest rate, in percent?

**2)** At a real interest rate of 1%, how large is the shortage of loanable funds, in billions of dollars?

**3)** The government's deficit rises, increasing the quantity demanded by \\$150 billion at every rate. What is the new equilibrium real interest rate, in percent?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '300', '4'],
        hint1: 'Find the row where the two quantities match.',
        hint2: 'Shortage = quantity demanded − quantity supplied.',
        hint3: 'Add \\$150 billion to each quantity demanded, then look for a match.',
        explanation: '1) At 3%, \\$400 billion is both supplied and demanded. 2) At 1%, \\$500 − \\$200 = \\$300 billion. 3) New demand at 4% is \\$350 + \\$150 = \\$500 billion, equal to the \\$500 billion supplied, so r rises to 4%.'
      }
    },
    {
      id: 'macroope2-compare',
      type: 'text' as const,
      content: `
## Loanable Funds vs. the Money Market

Both graphs have an interest rate on the vertical axis, and the AP exam expects you to know which is which.

| | Loanable funds market | Money market |
|---|---|---|
| **Vertical axis** | Real interest rate | Nominal interest rate |
| **Supply side** | Savers: households, firms, government surplus, foreign savers | The central bank (the money supply is drawn vertical) |
| **Demand side** | Borrowers: firms investing, home buyers, government deficits | People who want to **hold** money for transactions and as an asset |
| **What it explains best** | Saving, investment, deficits and capital flows | Monetary policy and short-run interest rates |
| **Typical shock** | Budget deficit, saving incentive, capital inflow | Change in Fed policy, price level or real GDP |

The two rates are linked by **r = i − expected inflation** (from the inflation topic). In the short run expected inflation changes slowly, so a fall in the nominal rate also lowers the real rate.

> 🔑 **AP Connection:** Use the **money market** to show monetary policy and the **loanable funds market** to show deficits, saving changes and capital flows. The money market graph and the Fed's tools are developed in the monetary policy topic; crowding out on this graph is developed in the fiscal policy tools topic.
`
    },
    {
      id: 'macroope2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Congress passes an investment tax credit for firms that buy new equipment. In the loanable funds market, the real interest rate and the quantity of loanable funds will',
            options: [
              'both decrease',
              'rise and fall, respectively',
              'both rise',
              'fall and rise, respectively'
            ],
            correctAnswer: 2,
            explanation: 'The credit raises the after-tax return on equipment, so demand for loanable funds shifts right, raising both the real interest rate and the quantity lent. A rising rate with a smaller quantity would come from a leftward shift of supply.'
          },
          {
            question: 'Foreign investors begin buying far more U.S. corporate bonds. In the U.S. loanable funds market, this is shown as',
            options: [
              'a rightward shift of demand, raising the real interest rate',
              'a leftward shift of supply, raising the real interest rate',
              'a leftward shift of demand, lowering the real interest rate',
              'a rightward shift of supply, lowering the real interest rate'
            ],
            correctAnswer: 3,
            explanation: 'Foreign purchases of U.S. bonds are a capital inflow, which adds foreign saving to the supply of U.S. loanable funds and lowers the real interest rate. Firms selling the bonds are borrowers whose demand curve has not moved.'
          },
          {
            question: 'Households decide to save a larger share of their income at every real interest rate. What happens to the quantity of private investment in the loanable funds market?',
            options: [
              'It rises as firms move down the demand curve',
              'It falls as the demand curve shifts to the left',
              'It falls because the real interest rate rises',
              'It is unchanged because only supply has shifted'
            ],
            correctAnswer: 0,
            explanation: 'More saving shifts supply right and lowers the real interest rate, so firms move along the unchanged demand curve and borrow more for investment. A shift of the demand curve itself would require a change in firms\' expected returns.'
          }
        ]
      }
    }
  ]
}
