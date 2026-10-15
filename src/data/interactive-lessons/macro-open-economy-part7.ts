export const macroOpenEconomyPart7Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {
      id: 'macroope7-intro',
      type: 'text' as const,
      content: `
# 🌏 Open Economy Macroeconomics

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| The Four Markets at a Glance |
| Chain Cheat Sheet |
| Mixed Review |

> 🔑 **Key Concept:** The open economy adds one link to everything you know about policy: **relative real interest rates move financial capital**, capital flows move **exchange rates**, and exchange rates move **net exports**. Fiscal expansion is partly offset by that link; monetary policy is reinforced by it.
`
    },
    {
      id: 'macroope7-big',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

| Part | Main idea |
|---|---|
| 1 | Loanable funds basics; deficits raise r, crowd out investment and appreciate the currency; fiscal vs. monetary policy in an open economy |
| 2 | Who supplies and demands loanable funds; shifter tables; equilibrium from a schedule; loanable funds vs. money market |
| 3 | Capital flows toward higher relative real rates; an inflow raises loanable funds supply and demand for the currency |
| 4 | Tracing shocks through the money market, loanable funds, forex and AD-AS |
| 5 | Nominal vs. real rates; inflow and outflow signs; who gains from a strong currency; saving and growth |
| 6 | FRQ practice with model answers |

## The Four Markets at a Glance

| Market | Price | Demand comes from | Supply comes from | Key link out |
|---|---|---|---|---|
| Money market | Nominal interest rate | People holding money (transactions, asset) | The central bank | Interest rate → investment → AD |
| Loanable funds | Real interest rate | Borrowers: firms, home buyers, government deficits | Savers: households, firms, surpluses, foreign savers | Real rate → investment and capital flows |
| Forex (dollars) | Foreign currency per dollar | Foreigners buying U.S. goods, services, assets | Americans buying foreign goods, services, assets | Exchange rate → net exports |
| AD-AS | Price level | C + I + G + NX | Firms' production (SRAS, LRAS) | Price level and GDP → money demand |
`
    },
    {
      id: 'macroope7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which change shifts the supply of loanable funds to the right in the United States?',
            options: [
              'Foreign savers buy more U.S. corporate bonds',
              'Firms expect higher future profits',
              'The federal budget deficit grows',
              'Americans buy more foreign stocks'
            ],
            correctAnswer: 0,
            explanation: 'Foreign purchases of U.S. bonds are a capital inflow, which adds foreign saving to supply. Higher expected profits and a larger deficit raise demand, and buying foreign stocks is an outflow that shifts supply left.'
          },
          {
            question: 'Which pair of results follows from expansionary monetary policy in an open economy in the short run?',
            options: [
              'Higher real rates and an appreciating currency',
              'Lower real rates and a depreciating currency',
              'Falling real rates and an appreciating currency',
              'Unchanged real rates and a depreciating currency'
            ],
            correctAnswer: 1,
            explanation: 'Lower nominal rates mean lower real rates while expected inflation is slow to adjust, and the resulting capital outflow depreciates the currency. Real rates stay unchanged only in the long run.'
          },
          {
            question: 'Why is an expansionary fiscal policy less powerful in an open economy with flexible exchange rates than the spending multiplier alone suggests?',
            options: [
              'Its currency depreciates and imports rise',
              'Foreign saving lowers the real interest rate',
              'The currency appreciates and net exports fall',
              'Higher prices attract foreign capital inflows'
            ],
            correctAnswer: 2,
            explanation: 'The deficit raises the real rate, capital flows in, the currency appreciates and lower net exports pull AD back partway. Foreign saving softens the rise in the real rate but does not by itself weaken the policy.'
          }
        ]
      }
    },
    {
      id: 'macroope7-chains',
      type: 'text' as const,
      content: `
## Chain Cheat Sheet

| Shock | Loanable funds | Real rate | Capital flow | Currency | Net exports |
|---|---|---|---|---|---|
| Budget deficit rises | D right | ↑ | In | Appreciates | ↓ |
| Budget moves to surplus | S right (or D left) | ↓ | Out | Depreciates | ↑ |
| Households save more | S right | ↓ | Out | Depreciates | ↑ |
| Investment tax credit | D right | ↑ | In | Appreciates | ↓ |
| Foreign real rates rise | S left (outflow) | ↑ | Out | Depreciates | ↑ |
| Expansionary monetary policy (lower IORB or buy bonds) | — (money market) | ↓ short run | Out | Depreciates | ↑ |
| Contractionary monetary policy (higher IORB or sell bonds) | — (money market) | ↑ short run | In | Appreciates | ↓ |

### Three sentences that cover most questions

1. A higher **relative** real interest rate brings capital **in** and makes the currency **appreciate**.
2. Appreciation **lowers** net exports and AD; depreciation **raises** them.
3. Fiscal expansion is **offset** by the exchange rate; monetary policy is **reinforced** by it.
`
    },
    {
      id: 'macroope7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The price in the loanable funds market is the ___ interest rate.',
            options: ['real', 'nominal', 'discount', 'federal funds']
          },
          {
            label: 'A capital outflow shifts the ___ of loanable funds to the left.',
            options: ['supply', 'demand', 'price', 'quantity demanded']
          },
          {
            label: 'Foreigners who want to buy U.S. assets add to the ___ dollars.',
            options: ['demand for', 'supply of', 'quantity supplied of', 'reserves of']
          },
          {
            label: 'In the ample-reserves framework, the Fed\'s main tool is the interest rate on ___.',
            options: ['reserve balances', 'federal funds', 'discount loans', 'Treasury bonds']
          }
        ],
        correctAnswers: ['real', 'supply', 'demand for', 'reserve balances'],
        hint1: 'Savers and borrowers care about inflation-adjusted returns.',
        hint2: 'Savers are on this side of the market.',
        hint3: 'They need dollars to complete the purchase.',
        explanation: 'Loanable funds are priced by the real interest rate, and an outflow removes savers, shifting supply left. Foreign buyers of U.S. assets demand dollars. The Fed\'s main tool with ample reserves is the interest rate on reserve balances; the federal funds rate is its target.'
      }
    },
    {
      id: 'macroope7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Canada\'s government begins running large budget surpluses while U.S. policy is unchanged. What happens to the Canadian dollar against the U.S. dollar?',
            options: [
              'It appreciates',
              'It stays the same',
              'It rises, then falls',
              'It depreciates'
            ],
            correctAnswer: 3,
            explanation: 'Canadian surpluses add public saving and lower Canada\'s real interest rate, so capital flows out of Canada and the supply of Canadian dollars rises. A deficit, not a surplus, would make the Canadian dollar appreciate.'
          },
          {
            question: 'Higher saving by U.S. households is often described as good for long-run growth. Through which channel?',
            options: [
              'Lower real rates raise investment and the capital stock',
              'Lower consumption raises AD and short-run output',
              'Higher real rates draw in capital and raise output',
              'Higher saving raises the money supply and real GDP'
            ],
            correctAnswer: 0,
            explanation: 'More saving lowers the real interest rate, firms invest more in physical capital, and a larger capital stock shifts LRAS right. Lower consumption reduces AD in the short run rather than raising it.'
          }
        ]
      }
    },
    {
      id: 'macroope7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The U.S. nominal interest rate is 6% and expected inflation is 2%. Mexico's nominal rate is 9% and expected inflation is 7%.

**1)** What is the U.S. real interest rate, in percent?

**2)** What is Mexico's real interest rate, in percent?

**3)** By how many percentage points does the higher real rate exceed the lower one?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '2'],
        hint1: 'Real rate = nominal rate − expected inflation.',
        hint2: 'Mexico\'s high nominal rate is mostly inflation.',
        hint3: 'Subtract the smaller real rate from the larger one.',
        explanation: '1) 6% − 2% = 4%. 2) 9% − 7% = 2%. 3) 4 − 2 = 2 points. Financial capital tends to flow toward the United States, so demand for dollars rises and the dollar appreciates against the peso.'
      }
    }
  ]
}
