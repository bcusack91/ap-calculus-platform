export const macroInternationalTradeFinancePart7Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {
      id: 'macroint7-intro',
      type: 'text' as const,
      content: `
# 🌐 International Trade & Finance

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| Rule Sheet |
| One Story Through Every Part |
| Mixed Review |

> 🔑 **Key Concept:** International finance has three tools: the **balance of payments** (where each transaction is recorded), **exchange-rate arithmetic** (what a currency change does to prices), and the **foreign exchange market graph** (why the currency changed). Together they explain how events abroad and policies at home change **net exports** and **aggregate demand**.
`
    },
    {
      id: 'macroint7-big',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

| Part | Main idea |
|---|---|
| 1 | Exchange-rate definitions; effects of appreciation and depreciation; balance of payments basics |
| 2 | Current account and capital and financial account in depth; credits and debits; the accounts sum to zero |
| 3 | Reading quotes, reciprocals, converting prices, percent change |
| 4 | The market for a currency: who demands it, who supplies it, and the mirror market |
| 5 | Shifters (tastes, relative income, relative prices, relative real rates, expectations) and the link to net exports |
| 6 | FRQ practice with model answers |

## Rule Sheet

| Item | Rule |
|---|---|
| Current account | Goods and services trade + net investment income + net transfers |
| Capital and financial account | Purchases and sales of assets (direct and portfolio investment) |
| Balance of payments | Current account + capital and financial account = 0 |
| Credit (+) | Payment flows in: exports, income received, foreigners buying domestic assets |
| Foreign-currency price of a U.S. good | Dollar price × foreign currency per dollar |
| Dollar price of a foreign good | Foreign price ÷ foreign currency per dollar |
| Demand for a currency | Foreigners buying that country's goods, services and assets |
| Supply of a currency | That country's residents buying foreign goods, services and assets |
| Mirror rule | Demand for dollars ↑ ⇔ supply of the other currency ↑ |
| Appreciation | Exports ↓, imports ↑, net exports ↓, AD left |
`
    },
    {
      id: 'macroint7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which transaction is recorded in the U.S. current account?',
            options: [
              'A French firm buys shares in a U.S. company',
              'A U.S. firm pays dividends to French shareholders',
              'A U.S. firm buys a factory in France',
              'A French bank buys U.S. Treasury bonds'
            ],
            correctAnswer: 1,
            explanation: 'Dividends are income paid on an asset, so they go in the current account as investment income. Buying shares, factories or bonds are asset purchases recorded in the capital and financial account.'
          },
          {
            question: 'The exchange rate moves from 7.0 to 6.5 Chinese yuan per dollar. A \\$100 U.S. jacket now costs Chinese buyers',
            options: [
              '700 yuan, up from 650',
              '15.4 yuan, up from 14.3',
              '650 yuan, down from 700',
              '700 yuan, as it was before'
            ],
            correctAnswer: 2,
            explanation: '100 × 7.0 = 700 yuan before and 100 × 6.5 = 650 yuan after, so the jacket is cheaper for Chinese buyers because the dollar depreciated. Dividing 100 by the rate (15.4 yuan) runs the conversion the wrong way.'
          },
          {
            question: 'U.S. incomes fall in a recession while incomes abroad are unchanged. What happens to the dollar, by the income channel?',
            options: [
              'It depreciates',
              'It stays the same',
              'It falls, then rises',
              'It appreciates'
            ],
            correctAnswer: 3,
            explanation: 'Lower U.S. incomes mean fewer imports, so Americans supply fewer dollars and the dollar appreciates. Rising U.S. incomes, not falling ones, would increase the supply of dollars.'
          }
        ]
      }
    },
    {
      id: 'macroint7-story',
      type: 'text' as const,
      content: `
## One Story Through Every Part

1. **Shock (Part 5).** South Korea's real interest rate rises relative to U.S. rates.
2. **Capital flow (Part 2).** U.S. investors buy Korean bonds: a **debit** in the U.S. capital and financial account (capital outflow).
3. **Forex graph (Part 4).** In the market for won, **demand for won** shifts right, and the won appreciates. In the market for dollars, **supply of dollars** shifts right, and the dollar depreciates.
4. **Arithmetic (Part 3).** The rate moves from 1,300 to 1,200 won per dollar. A \\$25,000 U.S. car falls from 32.5 million won to 30 million won in Korea; a 1.2 million-won Korean television rises from about \\$923 to \\$1,000 in the U.S.
5. **Net exports (Part 5).** U.S. exports to Korea rise and imports from Korea fall, so U.S. net exports rise and U.S. AD shifts right.
6. **Balance of payments again (Part 2).** If the U.S. current account deficit shrinks, the U.S. capital and financial account surplus shrinks by the same amount.
`
    },
    {
      id: 'macroint7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Foreign aid sent by the U.S. government is recorded in the U.S. ___.',
            options: ['current account', 'capital and financial account', 'official budget', 'goods balance']
          },
          {
            label: 'In the market for yen, Americans who want Japanese goods are on the ___ side.',
            options: ['demand', 'supply', 'price', 'quantity']
          },
          {
            label: 'If a country\'s current account is in surplus, its capital and financial account is in ___.',
            options: ['deficit', 'surplus', 'balance', 'equilibrium']
          },
          {
            label: 'When the dollar depreciates, the dollar price of imported goods ___.',
            options: ['rises', 'falls', 'stays the same', 'falls, then rises']
          }
        ],
        correctAnswers: ['current account', 'demand', 'deficit', 'rises'],
        hint1: 'Aid is a one-way transfer, not an asset purchase.',
        hint2: 'They need yen to buy the goods.',
        hint3: 'The two accounts sum to zero.',
        explanation: 'Aid is a net transfer in the current account. Americans buying Japanese goods demand yen. A current account surplus pairs with a capital and financial account deficit, and a weaker dollar raises the dollar price of imports.'
      }
    },
    {
      id: 'macroint7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Australian investors buy more U.S. stocks. Which pair of results follows?',
            options: [
              'Demand for U.S. dollars rises; the Australian dollar depreciates',
              'Supply of U.S. dollars rises; the Australian dollar appreciates',
              'Fewer U.S. dollars are demanded; the Australian dollar appreciates',
              'Supply of Australian dollars falls; the U.S. dollar depreciates'
            ],
            correctAnswer: 0,
            explanation: 'Australians need U.S. dollars to buy U.S. stocks, so demand for U.S. dollars rises and, in the mirror market, the supply of Australian dollars rises and they depreciate. Americans, not Australians, would supply U.S. dollars.'
          },
          {
            question: 'The euro depreciates against the dollar. What happens to euro-area net exports to the United States?',
            options: [
              'They decline',
              'They rise',
              'They do not change',
              'They fall, then rise'
            ],
            correctAnswer: 1,
            explanation: 'A weaker euro makes euro-area goods cheaper for Americans and U.S. goods dearer for Europeans, so euro-area net exports rise. They would fall after an appreciation.'
          }
        ]
      }
    },
    {
      id: 'macroint7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The exchange rate moves from **0.80 pound per dollar** to **0.72 pound per dollar**.

**1)** By what percent did the dollar depreciate against the pound? Enter a positive number.

**2)** What does a £36 British book cost in dollars after the change?

**3)** What is the price of one pound in dollars after the change? Round to two decimal places.

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '50', '1.39'],
        hint1: '(0.80 − 0.72) ÷ 0.80 × 100.',
        hint2: 'Foreign price ÷ pounds per dollar.',
        hint3: '1 ÷ 0.72.',
        explanation: '1) 0.08 ÷ 0.80 = 10%. 2) 36 ÷ 0.72 = \\$50, up from \\$45 before the change. 3) 1 ÷ 0.72 ≈ \\$1.39 per pound, so the pound appreciated.'
      }
    }
  ]
}
