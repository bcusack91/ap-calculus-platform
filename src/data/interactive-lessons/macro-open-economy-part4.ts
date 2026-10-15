export const macroOpenEconomyPart4Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {
      id: 'macroope4-intro',
      type: 'text' as const,
      content: `
# 🌏 Open Economy Macroeconomics

**Part 4 of 7 — Linked Graphs: Tracing Shocks Through Four Markets**

---

| Section |
|---------|
| 📖 The Four Graphs and How They Connect |
| Chain 1: Deficit-Financed Spending in a Recession |
| Chain 2: Contractionary Monetary Policy |
| Chains 3 and 4: A Foreign Rate Rise and a Saving Increase |
| Writing a Chain on the FRQ |

> 🔑 **Key Concept:** A single shock rarely stays in one market. Interest rates link the money market and loanable funds market to **investment** and to **capital flows**; capital flows move the **exchange rate**; the exchange rate moves **net exports** and **aggregate demand**. Tracing a shock means naming the curve that shifts in each graph, in order.
`
    },
    {
      id: 'macroope4-graphs',
      type: 'text' as const,
      content: `
## 📖 The Four Graphs and How They Connect

| Graph | Vertical axis | Horizontal axis | Curves |
|---|---|---|---|
| **Money market** | Nominal interest rate | Quantity of money | Money demand (down), money supply (vertical) |
| **Loanable funds** | Real interest rate | Quantity of loanable funds | Demand (borrowers), supply (savers) |
| **Foreign exchange (dollars)** | Foreign currency per dollar | Quantity of dollars | Demand (foreigners buying U.S. items), supply (Americans buying foreign items) |
| **AD-AS** | Price level | Real GDP | AD, SRAS, LRAS |

### The links

| From | To | Rule |
|---|---|---|
| Interest rates | Investment | Higher rates → less investment and interest-sensitive consumption → AD left |
| Real interest rate | Capital flows | Higher relative real rate → capital inflow |
| Capital flows | Forex | Inflow → demand for dollars right → dollar appreciates |
| Exchange rate | Net exports | Appreciation → exports fall, imports rise → AD left |
| AD-AS | Money market | Higher price level or real GDP → money demand right → nominal rate rises |

Work through these links in order and the chain writes itself.
`
    },
    {
      id: 'macroope4-chain1',
      type: 'text' as const,
      content: `
## Chain 1: Deficit-Financed Spending in a Recession

**Shock:** The economy is in a recession. The government increases spending and borrows to pay for it.

| Order | Graph | Shift | Result |
|---|---|---|---|
| 1 | AD-AS | AD shifts **right** | Real GDP and price level rise |
| 2 | Loanable funds | Demand shifts **right** (government borrowing) | Real interest rate rises; private investment falls (crowding out) |
| 3 | Money market | Money demand shifts **right** (more transactions at higher GDP and prices) | Nominal interest rate rises |
| 4 | Forex (dollars) | Demand for dollars shifts **right** (capital inflow at the higher U.S. real rate) | Dollar appreciates |
| 5 | AD-AS again | Lower investment and lower net exports pull AD back **partly left** | The net rise in AD is smaller than the spending multiplier alone predicts |

**Graph-by-graph description.** On the loanable funds graph, the real rate rises from, say, 3% to 4%. On the forex graph, the dollar rises from 100 to 108 yen per dollar. On AD-AS, AD1 shifts to AD2 and then partway back to AD3, still to the right of AD1.

Crowding out on the loanable funds graph is developed in the fiscal policy tools topic. The open-economy addition is step 4: the **exchange rate** crowds out **net exports** too.
`
    },
    {
      id: 'macroope4-chain2',
      type: 'text' as const,
      content: `
## Chain 2: Contractionary Monetary Policy

**Shock:** The economy has an inflationary gap, and the Federal Reserve acts to reduce aggregate demand.

| Order | Graph | Shift | Result |
|---|---|---|---|
| 1 | Money market | Ample reserves: the Fed **raises the interest rate on reserve balances (IORB)**, and the federal funds rate rises within its higher target range. Limited reserves: an open-market **sale** of bonds shifts money supply **left** | Nominal interest rate rises |
| 2 | (Short run) | Expected inflation changes slowly | The **real** interest rate rises too |
| 3 | AD-AS | Investment and interest-sensitive consumption fall: AD shifts **left** | Price level and real GDP fall |
| 4 | Forex (dollars) | Higher U.S. real rate attracts capital: demand for dollars shifts **right** | Dollar appreciates |
| 5 | AD-AS again | Net exports fall, pushing AD **further left** | The exchange rate **reinforces** the policy |

**Graph-by-graph description.** In the money market, the nominal rate rises from 2% to 3%. On the forex graph, the dollar rises from 0.90 to 0.95 euro per dollar. On AD-AS, AD shifts left toward potential output, closing the inflationary gap.

Compare Chain 1: a fiscal expansion is **partly offset** by the exchange rate, while a monetary contraction (or expansion) is **reinforced** by it.

> 🔑 **AP Connection:** The federal funds rate is the Fed's **target**, not a tool. Write "the Fed raises the interest rate on reserve balances" (ample reserves) or "the Fed sells bonds" (limited reserves) as the action.
`
    },
    {
      id: 'macroope4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Chain 1, why does the dollar appreciate after the government borrows more?',
            options: [
              'Higher government spending on imports raises demand for U.S. dollars abroad',
              'The higher U.S. real rate draws in foreign capital, raising demand for dollars',
              'A higher U.S. price level makes U.S. goods more attractive to foreign buyers',
              'Crowding out reduces U.S. investment abroad, lowering the supply of dollars'
            ],
            correctAnswer: 1,
            explanation: 'Government borrowing raises the U.S. real interest rate, foreign savers buy U.S. assets, and they need dollars to do it. A higher U.S. price level would make U.S. goods less attractive, which works against the dollar.'
          },
          {
            question: 'Under the ample-reserves framework, which action begins contractionary monetary policy?',
            options: [
              'Lowering the interest rate on reserve balances',
              'Raising the federal funds rate as a policy tool',
              'Raising the interest rate on reserve balances',
              'Raising the required reserve ratio above zero'
            ],
            correctAnswer: 2,
            explanation: 'IORB is the Fed\'s main tool with ample reserves; raising it pulls the federal funds rate and other short-term rates up. The federal funds rate is the target the tool steers, not a tool itself.'
          },
          {
            question: 'Why does the exchange rate reinforce contractionary monetary policy rather than offset it?',
            options: [
              'The dollar depreciates, lowering import spending',
              'The dollar appreciates, raising foreign investment',
              'The dollar depreciates, lowering the price level',
              'The dollar appreciates, lowering net exports and AD'
            ],
            correctAnswer: 3,
            explanation: 'Higher U.S. interest rates attract capital, the dollar appreciates, and lower net exports shift AD further left in the direction the Fed wants. A depreciation would raise net exports and work against the policy.'
          }
        ]
      }
    },
    {
      id: 'macroope4-chain34',
      type: 'text' as const,
      content: `
## Chains 3 and 4: A Foreign Rate Rise and a Saving Increase

### Chain 3: The euro area's real interest rate rises

| Order | Graph | Shift | Result |
|---|---|---|---|
| 1 | U.S. loanable funds | Capital outflow: supply shifts **left** | U.S. real interest rate rises; investment falls |
| 2 | Forex (dollars) | Americans sell dollars for euros: supply of dollars shifts **right** | Dollar depreciates |
| 3 | AD-AS | U.S. net exports rise: AD shifts **right** | Net effect on AD depends on whether higher NX outweighs lower investment; AP questions usually ask only about NX |

### Chain 4: U.S. households decide to save more of their income

| Order | Graph | Shift | Result |
|---|---|---|---|
| 1 | Loanable funds | Supply shifts **right** | Real interest rate falls; quantity of investment rises (move along demand) |
| 2 | Forex (dollars) | Lower U.S. real rate → capital outflow: supply of dollars shifts **right** | Dollar depreciates |
| 3 | AD-AS (short run) | Consumption falls, while investment and net exports rise | The short-run effect on AD depends on the sizes of these changes |
| 4 | Long run | More investment builds the capital stock | LRAS shifts **right** over time (economic growth) |

### Summary of all four chains

| Chain | U.S. real rate | U.S. investment | Capital flow | Dollar | U.S. net exports |
|---|---|---|---|---|---|
| 1. Deficit-financed spending | ↑ | ↓ | Inflow | Appreciates | ↓ |
| 2. Contractionary monetary policy | ↑ | ↓ | Inflow | Appreciates | ↓ |
| 3. Foreign real rate rises | ↑ | ↓ | Outflow | Depreciates | ↑ |
| 4. U.S. saving rises | ↓ | ↑ | Outflow | Depreciates | ↑ |

Chains 1 and 3 both **raise** the U.S. real rate, but the dollar moves in opposite directions. The difference is **relative** rates: in Chain 3 the foreign rate rose first and by more, so funds leave the United States.
`
    },
    {
      id: 'macroope4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

The U.S. government cuts its budget deficit sharply. Choose the word that completes each step of the chain.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Demand for loanable funds shifts ___.',
            options: ['left', 'right', 'down', 'up']
          },
          {
            label: 'The U.S. real interest rate ___.',
            options: ['falls', 'rises', 'stays the same', 'becomes negative']
          },
          {
            label: 'Financial capital tends to flow ___ the United States.',
            options: ['out of', 'into', 'neither into nor out of', 'equally into and out of']
          },
          {
            label: 'The dollar ___, so U.S. net exports rise.',
            options: ['depreciates', 'appreciates', 'stays fixed', 'rises, then falls']
          }
        ],
        correctAnswers: ['left', 'falls', 'out of', 'depreciates'],
        hint1: 'The government needs to borrow less.',
        hint2: 'Less borrowing with the same saving lowers the price of funds.',
        hint3: 'Savers chase the higher relative real return elsewhere.',
        explanation: 'Less government borrowing shifts demand for loanable funds left and lowers the real rate. Funds flow out of the United States, the supply of dollars rises, the dollar depreciates and net exports rise.'
      }
    },
    {
      id: 'macroope4-frq',
      type: 'text' as const,
      content: `
## Writing a Chain on the FRQ

### Graph rules

- Label **both axes** with the exact names in the table above. "Interest rate" alone loses the point when the question wants **real** or **nominal**.
- Show the original curve, the new curve with an **arrow**, and the old and new equilibrium values (for example, r1 and r2).
- Draw the forex market for the currency **named in the question**. If it asks about the euro, the vertical axis is dollars per euro (or another currency per euro).

### Sentence rules

- One link per clause, with a cause: "Because the U.S. real interest rate rises relative to the euro area's, financial capital flows into the United States."
- Say **which curve** and **which direction**: "demand for dollars increases," not "the dollar goes up."
- Answer only what is asked. If the question asks about net exports, you do not need to redraw AD-AS.

### Model chain sentence

"The deficit increases the demand for loanable funds, so the real interest rate rises. The higher real interest rate attracts financial capital into the United States, which increases the demand for dollars, so the dollar appreciates. U.S. exports become more expensive to foreigners and imports cheaper to Americans, so net exports decrease."

> 🔑 **AP Connection:** Scoring guidelines award a point for each correct link. A chain with a correct direction but no reason ("the dollar appreciates") often earns the graph point but not the explanation point.
`
    },
    {
      id: 'macroope4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Japan\'s real interest rate rises sharply relative to the U.S. rate. Which pair of shifts occurs?',
            options: [
              'U.S. loanable funds supply falls; supply of dollars rises',
              'U.S. loanable funds supply rises; demand for dollars rises',
              'U.S. loanable funds demand falls; supply of dollars falls',
              'U.S. loanable funds demand rises; demand for dollars falls'
            ],
            correctAnswer: 0,
            explanation: 'Funds leave the United States for Japan, so U.S. loanable funds supply shifts left, and Americans sell dollars to buy yen, so the supply of dollars shifts right. Borrowers\' demand for loanable funds is not what the outflow changes.'
          },
          {
            question: 'A student writes, "Expansionary fiscal policy causes the dollar to go up." What should be added to earn the explanation point?',
            options: [
              'That the dollar rises because the deficit is large',
              'That higher real rates raise demand for dollars',
              'That the price level rises in the AD-AS graph',
              'That the Fed buys bonds to keep rates steady'
            ],
            correctAnswer: 1,
            explanation: 'The explanation point needs the mechanism: borrowing raises the real interest rate, capital flows in and demand for dollars increases. Restating that the deficit is large repeats the cause without the link to the currency market.'
          },
          {
            question: 'Households in the United States decide to save more at every interest rate. In the long run, what happens to the U.S. capital stock?',
            options: [
              'It shrinks',
              'It is unchanged',
              'It grows',
              'It moves abroad'
            ],
            correctAnswer: 2,
            explanation: 'More saving lowers the real interest rate, firms invest more in physical capital, and the capital stock grows, shifting LRAS right over time. The capital outflow sends some saving abroad but does not reverse the rise in investment.'
          }
        ]
      }
    }
  ]
}
