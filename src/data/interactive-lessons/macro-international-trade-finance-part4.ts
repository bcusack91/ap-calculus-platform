export const macroInternationalTradeFinancePart4Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {
      id: 'macroint4-intro',
      type: 'text' as const,
      content: `
# 🌐 International Trade & Finance

**Part 4 of 7 — The Foreign Exchange Market Graph**

---

| Section |
|---------|
| 📖 Setting Up the Market for Dollars |
| The Mirror Market |
| Worked Example: A Currency Market Schedule |
| Drawing It on the Exam |

> 🔑 **Key Concept:** In the foreign exchange market, a currency has a **demand curve** and a **supply curve** like any good. Demand for dollars comes from **foreigners** who want U.S. goods, services and assets; supply of dollars comes from **Americans** who want foreign goods, services and assets. Every change in the market for dollars has a mirror image in the market for the other currency.
`
    },
    {
      id: 'macroint4-setup',
      type: 'text' as const,
      content: `
## 📖 Setting Up the Market for Dollars

Take the market in which dollars trade for yen.

| Feature | Market for U.S. dollars |
|---|---|
| **Vertical axis** | Price of a dollar: **yen per dollar** |
| **Horizontal axis** | **Quantity of dollars** |
| **Demand for dollars** | Japanese households, firms and investors who need dollars to buy U.S. goods, services and assets |
| **Supply of dollars** | U.S. households, firms and investors who offer dollars to get yen for Japanese goods, services and assets |
| **Equilibrium** | The exchange rate at which the quantity of dollars demanded equals the quantity supplied |

### Why the curves slope the way they do

- **Demand slopes down.** When the dollar is cheaper (fewer yen per dollar), U.S. goods and assets cost fewer yen, so Japanese buyers want more of them and need more dollars.
- **Supply slopes up.** When the dollar buys more yen, Japanese goods cost fewer dollars, so Americans buy more of them and offer more dollars.

A move **up** the vertical axis is an **appreciation** of the dollar; a move **down** is a **depreciation**.

> 🔑 **AP Connection:** A change in the exchange rate itself is a **movement along** the curves. Only a change in something else, such as tastes, incomes, price levels or interest rates, **shifts** a curve (Part 5).
`
    },
    {
      id: 'macroint4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the foreign exchange market for U.S. dollars, who is on the demand side?',
            options: [
              'Americans who want to buy foreign goods, services and assets',
              'The U.S. Treasury, which issues and redeems U.S. currency',
              'Foreigners who want to buy U.S. goods, services and assets',
              'U.S. banks, which must hold dollars as required reserves'
            ],
            correctAnswer: 2,
            explanation: 'Foreign buyers must obtain dollars to pay for U.S. products and assets, so they demand dollars. Americans buying foreign items offer dollars in exchange, so they are on the supply side.'
          },
          {
            question: 'Why does the supply curve of dollars slope upward?',
            options: [
              'Foreign goods cost more dollars as the dollar rises',
              'The Fed issues more dollars when the dollar rises',
              'U.S. exports rise as the dollar gets more expensive',
              'Each dollar buys more foreign goods as it gets dearer'
            ],
            correctAnswer: 3,
            explanation: 'When a dollar buys more foreign currency, foreign goods and assets cost fewer dollars, so Americans buy more and offer more dollars. Foreign goods get cheaper, not dearer, for Americans when the dollar rises.'
          }
        ]
      }
    },
    {
      id: 'macroint4-mirror',
      type: 'text' as const,
      content: `
## The Mirror Market

Every trade of dollars for yen appears in **two** graphs: the market for dollars and the market for yen.

| Market for dollars (price: yen per dollar) | Market for yen (price: dollars per yen) |
|---|---|
| **Demand for dollars** = Japanese buying U.S. items | **Supply of yen** = the same Japanese, offering yen |
| **Supply of dollars** = Americans buying Japanese items | **Demand for yen** = the same Americans, wanting yen |

### The mirror rule

| In the dollar market… | …in the yen market | Dollar | Yen |
|---|---|---|---|
| Demand for dollars ↑ | Supply of yen ↑ | Appreciates | Depreciates |
| Demand for dollars ↓ | Supply of yen ↓ | Depreciates | Appreciates |
| Supply of dollars ↑ | Demand for yen ↑ | Depreciates | Appreciates |
| Supply of dollars ↓ | Demand for yen ↓ | Appreciates | Depreciates |

Demand on one side always pairs with **supply** on the other. The two currencies always move in **opposite** directions against each other.
`
    },
    {
      id: 'macroint4-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Currency Market Schedule

Market for U.S. dollars (quantities in billions of dollars):

| Yen per dollar | Quantity of dollars demanded | Quantity of dollars supplied |
|---|---|---|
| 90 | 80 | 40 |
| 100 | 70 | 50 |
| 110 | 60 | 60 |
| 120 | 50 | 70 |
| 130 | 40 | 80 |

**Step 1: Equilibrium.** Quantity demanded equals quantity supplied at **110 yen per dollar**, with **\\$60 billion** traded.

**Step 2: Above equilibrium.** At 130 yen per dollar, \\$80 billion is offered but only \\$40 billion is wanted, a **surplus of \\$40 billion**. Sellers of dollars accept fewer yen, and the dollar depreciates toward 110.

**Step 3: A shift.** Japanese airlines order more U.S. aircraft, raising the quantity of dollars demanded by \\$20 billion at every rate: 100, 90, 80, 70, 60. The new equilibrium is where 70 = 70, at **120 yen per dollar**, with **\\$70 billion** traded. The dollar **appreciates** from 110 to 120 yen.

**Step 4: The mirror.** In the market for yen, the same airlines **supply more yen**. The price of a yen falls from 1 ÷ 110 ≈ \\$0.0091 to 1 ÷ 120 ≈ \\$0.0083: the yen **depreciates**. The quantity of yen traded is \\$70 billion × 120 = **8.4 trillion yen**.
`
    },
    {
      id: 'macroint4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Market for U.S. dollars against the euro (quantities in billions of dollars):

| Euros per dollar | Quantity demanded | Quantity supplied |
|---|---|---|
| 0.80 | 90 | 50 |
| 0.85 | 80 | 60 |
| 0.90 | 70 | 70 |
| 0.95 | 60 | 80 |
| 1.00 | 50 | 90 |

**1)** What is the equilibrium exchange rate, in euros per dollar?

**2)** At 0.80 euro per dollar, how large is the shortage of dollars, in billions?

**3)** Americans buy more European goods, raising the quantity of dollars supplied by \\$20 billion at every rate. What is the new equilibrium rate, in euros per dollar?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.90', '40', '0.85'],
        hint1: 'Find the row where demand and supply match.',
        hint2: 'Shortage = quantity demanded − quantity supplied.',
        hint3: 'New supply: 70, 80, 90, 100, 110. Where does it equal demand?',
        explanation: '1) At 0.90 euro per dollar, \\$70 billion is demanded and supplied. 2) At 0.80, 90 − 50 = \\$40 billion. 3) New supply at 0.85 is 80, equal to demand, so the dollar depreciates to 0.85 euro per dollar.'
      }
    },
    {
      id: 'macroint4-exam',
      type: 'text' as const,
      content: `
## Drawing It on the Exam

| Step | What to draw |
|---|---|
| 1 | Title the graph with the currency named: "Market for U.S. dollars" |
| 2 | Vertical axis: **another currency per unit of that currency** (yen per dollar); horizontal axis: **quantity of dollars** |
| 3 | Downward-sloping D and upward-sloping S, with the equilibrium rate labeled (for example, ER1) |
| 4 | Shift **one** curve with an arrow; label the new rate (ER2) above or below ER1 |
| 5 | State in words whether the currency **appreciated** or **depreciated** |

### Common errors

- Putting "exchange rate" on the axis without saying **which** currency is priced.
- Shifting **demand** for dollars when **Americans** change their buying. Americans buying foreign items change the **supply** of dollars.
- Drawing the market for yen when the question asks about the dollar, or answering about the dollar when it asks about the yen. Use the mirror rule to convert.

> 🔑 **AP Connection:** If a question names a currency you have never seen, such as the "pinto" of a made-up country, the graph works the same way: price is another currency per pinto, and demand comes from foreigners who need pintos.
`
    },
    {
      id: 'macroint4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Swiss investors buy more U.S. corporate bonds. What happens in the foreign exchange market for Swiss francs?',
            options: [
              'Supply of francs increases, and the franc depreciates',
              'Demand for francs increases, and the franc appreciates',
              'Demand for francs decreases, and the franc appreciates',
              'Supply of francs decreases, and the franc depreciates'
            ],
            correctAnswer: 0,
            explanation: 'The Swiss investors offer francs to get dollars, so the supply of francs rises and the franc falls in value. In the dollar market, the same purchase is an increase in demand for dollars.'
          },
          {
            question: 'In the market for dollars, the exchange rate is above equilibrium. What happens next?',
            options: [
              'A shortage of dollars pushes the dollar up',
              'A surplus of dollars pushes the dollar down',
              'A surplus of dollars pushes the dollar up',
              'The demand curve shifts until it meets supply'
            ],
            correctAnswer: 1,
            explanation: 'Above equilibrium, more dollars are offered than wanted, and sellers accept less foreign currency per dollar until the surplus disappears. Price changes move the market along the curves rather than shifting them.'
          },
          {
            question: 'In a correctly labeled graph of the market for Mexican pesos, what is on the vertical axis?',
            options: [
              'Pesos per U.S. dollar',
              'Quantity of pesos',
              'Dollars per peso',
              'Mexican price level'
            ],
            correctAnswer: 2,
            explanation: 'The market for pesos is priced as the cost of one peso in another currency, such as dollars per peso. Pesos per dollar is the price of a dollar, used in the market for dollars.'
          }
        ]
      }
    }
  ]
}
