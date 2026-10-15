export const macroOpenEconomyPart3Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {
      id: 'macroope3-intro',
      type: 'text' as const,
      content: `
# 🌏 Open Economy Macroeconomics

**Part 3 of 7 — Real Interest Rates and International Capital Flows**

---

| Section |
|---------|
| 📖 Why Financial Capital Crosses Borders |
| What a Capital Flow Does to Each Market |
| Worked Example: The United States and Japan |
| The Reverse Case and Its Trade Effects |

> 🔑 **Key Concept:** Financial capital flows toward the country with the **higher real interest rate**, relative to other countries. An inflow **increases the supply of loanable funds** in the receiving country and **increases demand for its currency**, so the currency appreciates. The sending country sees the opposite.
`
    },
    {
      id: 'macroope3-why',
      type: 'text' as const,
      content: `
## 📖 Why Financial Capital Crosses Borders

**Financial capital** here means funds used to buy financial assets such as bonds, stocks and bank deposits. It is different from **physical capital** (machines and factories), which is what firms buy with borrowed funds.

Savers compare the **real** return they can earn in each country. Inflation erodes a nominal return, so the comparison uses **r = i − expected inflation**:

| Country | Nominal interest rate | Expected inflation | Real interest rate |
|---|---|---|---|
| Country A | 9% | 7% | 2% |
| Country B | 5% | 1% | 4% |

Country A has the higher **nominal** rate, but Country B pays the higher **real** rate, so financial capital tends to flow **from A to B**.

### Two directions, two names

| Term | Meaning for the United States |
|---|---|
| **Capital inflow** | Foreigners buy U.S. financial assets (funds come in) |
| **Capital outflow** | U.S. residents buy foreign financial assets (funds go out) |

What matters is the **relative** real rate. If U.S. and foreign real rates both rise by one percentage point, the incentive to move funds between them does not change.

> 🔑 **AP Connection:** Exam questions say "the real interest rate in Country X increases **relative to** other countries." Read that as "financial capital flows **into** Country X."
`
    },
    {
      id: 'macroope3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country X has a nominal interest rate of 6% and expected inflation of 1%. Country Y has a nominal interest rate of 10% and expected inflation of 8%. Which way will financial capital tend to flow?',
            options: [
              'From Y to X, since X offers the higher real rate',
              'From X to Y, since Y offers the higher nominal rate',
              'From Y to X, since X has the lower nominal rate',
              'Neither way, since the two nominal rates differ'
            ],
            correctAnswer: 0,
            explanation: 'Country X pays a real rate of 6% − 1% = 5%, while Country Y pays only 10% − 8% = 2%, so savers move funds toward X. Comparing nominal rates ignores the inflation that erodes Y\'s higher nominal return.'
          },
          {
            question: 'A Canadian pension fund buys U.S. Treasury bonds. From the U.S. point of view, this transaction is',
            options: [
              'a capital outflow',
              'a capital inflow',
              'a U.S. export of goods',
              'a U.S. import of services'
            ],
            correctAnswer: 1,
            explanation: 'A foreign purchase of a U.S. financial asset brings funds into the United States, which is a capital inflow. A bond is a financial asset, so the purchase is not trade in goods or services.'
          },
          {
            question: 'Real interest rates rise by 2 percentage points in both the United States and the euro area. What happens to financial capital flows between them?',
            options: [
              'Capital flows into the U.S., since its real rate is higher',
              'Capital flows into the euro area, since its rate is higher',
              'Little changes, since the gap between them is the same',
              'Capital leaves both areas, since borrowing becomes costly'
            ],
            correctAnswer: 2,
            explanation: 'Capital moves in response to differences in real rates, and an equal rise in both places leaves the difference unchanged. Neither area becomes relatively more attractive to savers.'
          }
        ]
      }
    },
    {
      id: 'macroope3-effects',
      type: 'text' as const,
      content: `
## What a Capital Flow Does to Each Market

Suppose financial capital flows **from Japan into the United States** because the U.S. real interest rate is relatively higher.

| Market | United States (receives the inflow) | Japan (sends the outflow) |
|---|---|---|
| **Loanable funds** | Supply **increases** (foreign saving arrives) | Supply **decreases** (Japanese saving leaves) |
| **Real interest rate** | Falls back somewhat | Rises somewhat |
| **Foreign exchange** | Demand for dollars **increases** (Japanese investors need dollars to buy U.S. assets) | Supply of yen **increases** (Japanese investors sell yen to get dollars) |
| **Currency value** | Dollar **appreciates** | Yen **depreciates** |
| **Net exports** | Fall (U.S. goods cost more in yen) | Rise (Japanese goods cost less in dollars) |

Two things to notice:

1. **The flow narrows the gap.** More funds in the United States push its real rate down; fewer funds in Japan push Japan's rate up. Capital keeps flowing until the remaining gap no longer attracts more funds.
2. **The same flow appears in two graphs for each country.** One flow, four shifts: U.S. loanable funds supply, Japanese loanable funds supply, demand for dollars, supply of yen.
`
    },
    {
      id: 'macroope3-worked',
      type: 'text' as const,
      content: `
## Worked Example: The United States and Japan

All numbers are hypothetical.

**Starting point.** Real interest rates are 2% in both countries, and the exchange rate is **100 yen per dollar**.

**The shock.** The U.S. government runs a much larger budget deficit. U.S. demand for loanable funds shifts right, and the U.S. real interest rate rises toward **4%**.

**Graph 1: U.S. loanable funds.** Demand shifts right (the deficit). Then Japanese savers, attracted by the higher return, buy U.S. bonds, so **supply also shifts right**. The U.S. real rate settles at about **3.5%** instead of 4%: the inflow softens, but does not undo, the rise.

**Graph 2: Japanese loanable funds.** Supply shifts **left** as Japanese saving moves abroad. Japan's real rate rises from 2% to about **2.5%**.

**Graph 3: Foreign exchange market for dollars** (price = yen per dollar). Japanese investors need dollars, so **demand for dollars shifts right**. The dollar **appreciates** from 100 to about **110 yen per dollar**.

**Graph 4: Foreign exchange market for yen** (price = dollars per yen). The same investors sell yen, so **supply of yen shifts right**. The yen **depreciates** from \\$0.0100 to about \\$0.0091 per yen (1 ÷ 110).

**Trade effects.** At 110 yen per dollar, a \\$20,000 U.S. machine costs Japanese buyers 2,200,000 yen instead of 2,000,000 yen, so U.S. exports fall. Japanese goods become cheaper in dollars, so U.S. imports rise. U.S. **net exports decrease**, and Japan's net exports increase.

| Variable | United States | Japan |
|---|---|---|
| Real interest rate | ↑ (2% → 3.5%) | ↑ (2% → 2.5%) |
| Capital flow | Inflow | Outflow |
| Currency | Appreciates | Depreciates |
| Net exports | ↓ | ↑ |
`
    },
    {
      id: 'macroope3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

The real interest rate in Mexico rises relative to the rate in the United States. Choose the word that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Financial capital flows from the United States ___ Mexico.',
            options: ['into', 'out of', 'away from', 'around']
          },
          {
            label: 'The supply of loanable funds in the United States ___.',
            options: ['decreases', 'increases', 'does not change', 'becomes vertical']
          },
          {
            label: 'In the foreign exchange market for pesos, ___ for pesos increases.',
            options: ['demand', 'supply', 'the quantity supplied', 'the price ceiling']
          },
          {
            label: 'Relative to the peso, the U.S. dollar ___.',
            options: ['depreciates', 'appreciates', 'stays fixed', 'is revalued by law']
          }
        ],
        correctAnswers: ['into', 'decreases', 'demand', 'depreciates'],
        hint1: 'Savers move funds toward the higher real return.',
        hint2: 'U.S. saving that leaves is no longer lent in the United States.',
        hint3: 'U.S. investors need pesos to buy Mexican assets.',
        explanation: 'Funds move into Mexico, so U.S. loanable funds supply decreases. U.S. investors buy pesos to purchase Mexican assets, so demand for pesos rises and the peso appreciates while the dollar depreciates.'
      }
    },
    {
      id: 'macroope3-reverse',
      type: 'text' as const,
      content: `
## The Reverse Case and Its Trade Effects

Now the shock starts abroad. **The euro area's real interest rate rises** (for example, after the European Central Bank tightens policy), while U.S. policy is unchanged.

| Step | What happens | Graph |
|---|---|---|
| 1 | Euro-area assets now pay relatively more, so financial capital flows **out of the United States** | — |
| 2 | Supply of U.S. loanable funds **decreases**; the U.S. real interest rate **rises** and U.S. investment falls | U.S. loanable funds |
| 3 | U.S. investors sell dollars to buy euros: **supply of dollars increases** | Forex market for dollars |
| 4 | The dollar **depreciates** against the euro | Forex market for dollars |
| 5 | U.S. goods are cheaper for Europeans and European goods cost more in dollars: U.S. **net exports rise** | — |
| 6 | Higher net exports shift **U.S. AD right** | AD-AS |

Note the mirror wording in step 3. In the market for **euros**, the same U.S. investors show up as an **increase in demand for euros**, and the euro appreciates.

> 🔑 **AP Connection:** A capital outflow from your country shifts **supply** in your loanable funds market (left) and **supply** of your currency in the forex market (right). Name the curve and the direction in each graph, because points are awarded separately.
`
    },
    {
      id: 'macroope3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The U.S. real interest rate rises relative to Canada\'s. In the foreign exchange market for Canadian dollars, what happens?',
            options: [
              'Demand for Canadian dollars rises, so they appreciate',
              'Supply of Canadian dollars falls, so they appreciate',
              'Demand for Canadian dollars falls, so they appreciate',
              'Supply of Canadian dollars rises, so they depreciate'
            ],
            correctAnswer: 3,
            explanation: 'Canadian savers sell Canadian dollars to buy U.S. assets, which increases the supply of Canadian dollars and lowers their value. A fall in demand would also cause depreciation, not appreciation.'
          },
          {
            question: 'Capital flows out of Brazil after its real interest rate falls relative to other countries. What happens in Brazil\'s loanable funds market?',
            options: [
              'Supply decreases, which raises the real interest rate',
              'Supply increases, which lowers the real interest rate',
              'Demand decreases, which lowers the real interest rate',
              'Demand increases, which raises the real interest rate'
            ],
            correctAnswer: 0,
            explanation: 'An outflow removes saving from Brazil\'s market, shifting supply left and pushing the real rate back up. Borrowers\' demand is not what changes when savers send funds abroad.'
          },
          {
            question: 'Financial capital flows into Australia from abroad. What happens to Australia\'s net exports?',
            options: [
              'They increase',
              'They fall',
              'They stay unchanged',
              'They rise only briefly'
            ],
            correctAnswer: 1,
            explanation: 'The inflow raises demand for Australian dollars, which appreciate, making Australian exports more expensive abroad and imports cheaper at home. Net exports therefore fall.'
          }
        ]
      }
    }
  ]
}
