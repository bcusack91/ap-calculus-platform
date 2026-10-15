export const macroInternationalTradeFinancePart5Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {
      id: 'macroint5-intro',
      type: 'text' as const,
      content: `
# 🌐 International Trade & Finance

**Part 5 of 7 — Forex Shifters and Net Exports**

---

| Section |
|---------|
| 📖 What Shifts Currency Demand and Supply |
| How Policies Reach the Foreign Exchange Market |
| From the Exchange Rate to Net Exports and AD |
| Misconceptions Table |

> 🔑 **Key Concept:** Changes in **tastes**, **relative incomes**, **relative price levels**, **relative real interest rates** and **expectations** shift the demand for or supply of a currency. The resulting appreciation or depreciation then changes the prices of exports and imports, so it changes **net exports** and **aggregate demand**.
`
    },
    {
      id: 'macroint5-shifters',
      type: 'text' as const,
      content: `
## 📖 What Shifts Currency Demand and Supply

Each row is for the market for **U.S. dollars** against the euro, with the mirror in the market for **euros**.

| Change | Market for dollars | Dollar | Market for euros | Euro |
|---|---|---|---|---|
| **Tastes:** Europeans want more U.S. goods | Demand for \\$ ↑ | Appreciates | Supply of € ↑ | Depreciates |
| **Relative income:** U.S. incomes rise (Europe unchanged); Americans buy more imports | Supply of \\$ ↑ | Depreciates | Demand for € ↑ | Appreciates |
| **Relative income:** European incomes rise; Europeans buy more U.S. goods | Demand for \\$ ↑ | Appreciates | Supply of € ↑ | Depreciates |
| **Relative price level:** U.S. inflation is higher than Europe's | Demand for \\$ ↓ and supply of \\$ ↑ | Depreciates | Supply of € ↓ and demand for € ↑ | Appreciates |
| **Relative real interest rate:** U.S. real rate rises relative to Europe's | Demand for \\$ ↑ (capital inflow) | Appreciates | Supply of € ↑ | Depreciates |
| **Expectations:** traders expect the dollar to rise in the future | Demand for \\$ ↑ now | Appreciates | Supply of € ↑ | Depreciates |

### Notes on the rows

- **Relative income** works through imports. When Americans' incomes rise, they buy more of everything, including European goods, so they **supply** more dollars. The dollar depreciates.
- **Relative price level** shifts **both** curves in the same direction for the currency's value: U.S. goods look expensive to Europeans (less demand for dollars), and European goods look cheap to Americans (more supply of dollars).
- **Real interest rates** move financial capital; the loanable funds side of that story is in the open economy topic.
- **Expectations** can be self-fulfilling: buying dollars now, in the hope of a gain, raises the dollar's value now.
`
    },
    {
      id: 'macroint5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Real incomes rise rapidly in the United States while incomes in Japan are unchanged. What happens in the market for dollars?',
            options: [
              'Demand rises as Japanese buy more U.S. goods',
              'Supply falls as Americans buy fewer imports',
              'Demand falls as Japan buys fewer U.S. goods',
              'Supply rises as Americans buy more imports'
            ],
            correctAnswer: 3,
            explanation: 'Higher U.S. incomes raise U.S. spending on imports, so Americans supply more dollars to get yen and the dollar depreciates. Japanese incomes have not changed, so their demand for dollars has not changed.'
          },
          {
            question: 'Inflation in Mexico rises well above inflation in the United States. What happens to the peso against the dollar?',
            options: [
              'It weakens',
              'It strengthens',
              'It does not change',
              'It moves with Mexico\'s GDP'
            ],
            correctAnswer: 0,
            explanation: 'Mexican goods become relatively expensive, so Americans demand fewer pesos and Mexicans supply more pesos to buy cheaper U.S. goods. Both shifts lower the peso\'s value.'
          },
          {
            question: 'Currency traders come to expect that the euro will appreciate next year. What happens to the euro today?',
            options: [
              'It depreciates as traders wait to buy euros',
              'It appreciates as demand for euros rises',
              'It appreciates as the supply of euros rises',
              'It stays unchanged until next year arrives'
            ],
            correctAnswer: 1,
            explanation: 'Traders buy euros now to profit from the expected rise, so demand for euros increases and the euro appreciates today. Waiting would forgo the expected gain, and a rise in supply would lower the euro\'s value.'
          }
        ]
      }
    },
    {
      id: 'macroint5-policies',
      type: 'text' as const,
      content: `
## How Policies Reach the Foreign Exchange Market

Policies shift currency curves through the same five channels.

| Policy (in the U.S.) | Main channel | Market for dollars | Dollar |
|---|---|---|---|
| Contractionary monetary policy (Fed raises IORB, or sells bonds in the limited-reserves model) | Higher U.S. real interest rate → capital inflow | Demand for \\$ ↑ | Appreciates |
| Expansionary monetary policy (Fed lowers IORB, or buys bonds) | Lower U.S. real interest rate → capital outflow | Supply of \\$ ↑ | Depreciates |
| Expansionary fiscal policy financed by borrowing | Higher U.S. real interest rate → capital inflow | Demand for \\$ ↑ | Appreciates |

Expansionary fiscal policy also raises U.S. income, which increases imports and the supply of dollars. AP questions about fiscal policy and the exchange rate normally follow the **interest-rate channel**, so the expected answer is that the dollar **appreciates**, unless the question points you to the income effect on imports.

> 🔑 **AP Connection:** When a question gives a policy, trace it to one of the five shifters first, then shift the curve. "The Fed raises the interest rate on reserve balances" → higher U.S. interest rates → capital inflow → demand for dollars increases.
`
    },
    {
      id: 'macroint5-nx',
      type: 'text' as const,
      content: `
## From the Exchange Rate to Net Exports and AD

### Worked case: the dollar depreciates against the euro

The rate falls from **0.90 euro per dollar** to **0.80 euro per dollar**.

| Item | Before | After |
|---|---|---|
| \\$50,000 U.S. machine, in euros | 50,000 × 0.90 = €45,000 | 50,000 × 0.80 = **€40,000** |
| €2.00 bottle of European olive oil, in dollars | 2.00 ÷ 0.90 ≈ \\$2.22 | 2.00 ÷ 0.80 = **\\$2.50** |

1. U.S. machines are cheaper for Europeans → **U.S. exports rise**.
2. European olive oil costs more for Americans → **U.S. imports fall**.
3. **Net exports rise**, so U.S. **AD shifts right**: in the short run, real GDP and the price level rise.

### The general rule

| Currency change | Exports | Imports | Net exports | AD |
|---|---|---|---|---|
| Appreciation | ↓ | ↑ | ↓ | Left |
| Depreciation | ↑ | ↓ | ↑ | Right |

Higher import prices after a depreciation can also raise the domestic price level directly, because imported inputs cost more.
`
    },
    {
      id: 'macroint5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

The Bank of England raises its policy rate, so U.K. real interest rates rise relative to U.S. rates. Complete the chain for the United States.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Financial capital flows from the United States ___ the United Kingdom.',
            options: ['to', 'away from', 'evenly with', 'back into']
          },
          {
            label: 'In the market for dollars, ___ of dollars increases.',
            options: ['supply', 'demand', 'the price', 'the quantity demanded']
          },
          {
            label: 'The dollar ___ against the pound.',
            options: ['depreciates', 'appreciates', 'stays fixed', 'rises, then falls']
          },
          {
            label: 'U.S. net exports ___, so U.S. AD shifts right.',
            options: ['increase', 'decrease', 'stay the same', 'fall, then rise']
          }
        ],
        correctAnswers: ['to', 'supply', 'depreciates', 'increase'],
        hint1: 'Savers move toward the higher real return.',
        hint2: 'U.S. investors offer dollars to get pounds.',
        hint3: 'More dollars offered lowers the dollar\'s price.',
        explanation: 'Capital flows toward the higher U.K. real rate. U.S. investors supply dollars to buy pounds, so the dollar depreciates. Cheaper U.S. goods abroad and pricier British goods at home raise U.S. net exports.'
      }
    },
    {
      id: 'macroint5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions Table

| Misconception | Correction |
|---|---|
| "A strong dollar helps U.S. exporters." | An appreciation makes U.S. goods **more** expensive abroad; exports fall. |
| "Higher U.S. inflation strengthens the dollar." | Higher relative inflation makes U.S. goods less attractive; the dollar **depreciates**. |
| "When Americans buy more imports, demand for dollars falls." | Americans buying imports **supply** dollars; demand for dollars comes from foreigners. |
| "Faster U.S. income growth raises demand for dollars." | Through the import channel the AP exam tests, higher U.S. income raises the **supply** of dollars, and the dollar depreciates. Growth that raises U.S. real interest rates works through capital flows instead. |
| "A change in the exchange rate shifts the demand curve." | The exchange rate is the price; a change in it moves **along** the curves. |
| "If the dollar appreciates against the yen, the yen might too." | Against each other, the two currencies always move in **opposite** directions. |
| "A higher nominal interest rate always attracts capital." | Capital chases higher **real** rates relative to other countries. |
`
    },
    {
      id: 'macroint5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Canadian consumers develop a strong preference for U.S.-made trucks. What happens to the U.S. dollar against the Canadian dollar?',
            options: [
              'It depreciates, as the supply of U.S. dollars rises',
              'It appreciates, as the supply of U.S. dollars rises',
              'It appreciates, as demand for U.S. dollars rises',
              'It depreciates, as demand for U.S. dollars falls'
            ],
            correctAnswer: 2,
            explanation: 'Canadians need U.S. dollars to buy the trucks, so demand for U.S. dollars increases and the U.S. dollar appreciates. A rise in the supply of U.S. dollars would lower its value instead.'
          },
          {
            question: 'The Fed lowers the interest rate on reserve balances during a recession. How does the exchange rate channel affect U.S. aggregate demand?',
            options: [
              'The dollar appreciates, so NX fall and AD shifts left',
              'The dollar depreciates, so NX fall and AD shifts left',
              'The dollar appreciates, so NX rise and AD shifts right',
              'The dollar depreciates, so NX rise and AD shifts right'
            ],
            correctAnswer: 3,
            explanation: 'Lower U.S. interest rates send financial capital abroad, the dollar depreciates, and cheaper U.S. goods raise net exports, adding to AD. This reinforces the policy\'s effect on investment.'
          }
        ]
      }
    }
  ]
}
