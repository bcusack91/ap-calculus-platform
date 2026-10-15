export const macroInternationalTradeFinancePart6Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {
      id: 'macroint6-intro',
      type: 'text' as const,
      content: `
# 🌐 International Trade & Finance

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How International Questions Appear |
| FRQ Practice Set 1: Classifying and Graphing |
| FRQ Practice Set 2: A Foreign Rate Change |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** International free-response questions usually combine a **balance of payments** classification, a correctly labeled **foreign exchange market** graph, and a **chain** from a policy or condition to the currency's value and then to **net exports**. Each piece earns its own point, so answer each part completely.
`
    },
    {
      id: 'macroint6-format',
      type: 'text' as const,
      content: `
## 📖 How International Questions Appear

| Question asks… | What earns the point |
|---|---|
| "In which balance of payments account is this recorded?" | Name the account: **current account** or **capital and financial account**; state credit or debit if asked |
| "The current account has a deficit of X. What is the balance in the capital and financial account?" | A **surplus of X**, because the two sum to zero |
| "Draw a correctly labeled graph of the foreign exchange market for [currency]" | Price axis: another currency **per unit of the named currency**; quantity of the named currency; D and S; equilibrium labeled |
| "Show the effect of [event]" | Shift the correct curve; label the new exchange rate |
| "What happens to the value of [currency]? Explain." | Appreciates or depreciates **plus** the shift that caused it |
| "What happens to net exports?" | Direction plus the price reason for exports and imports |

### Habits that protect points

- Decide **who** is buying **what** before choosing demand or supply.
- When the question switches currencies between parts, use the mirror rule: demand for one currency is supply of the other.
- Read "relative to" carefully. A change in **another** country's interest rate or inflation affects your currency too.
`
    },
    {
      id: 'macroint6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: Classifying and Graphing

The United States and Mexico trade goods and financial assets, and the peso and the dollar float freely.

**(a)** A U.S. company buys a factory in Mexico. In which U.S. balance of payments account is this recorded, and is it a credit or a debit for the United States?

**(b)** Draw a correctly labeled graph of the foreign exchange market for Mexican pesos and show the effect of the purchase in (a) on the value of the peso.

**(c)** Based on your answer to (b), what happens to the value of the U.S. dollar relative to the peso?

**(d)** Given your answer to (b), what happens to Mexico's exports to the United States? Explain.

**(e)** In the same year, Mexico has a current account deficit of \\$15 billion. What is Mexico's capital and financial account balance?

### Model Answers

**(a)** **Capital and financial account** (foreign direct investment). It is a **debit** for the United States: a capital outflow.

**(b)** Axes: **dollars per peso** (vertical) and **quantity of pesos** (horizontal). The U.S. company needs pesos to buy the factory, so **demand for pesos shifts right**; the peso **appreciates** (ER1 to a higher ER2).

**(c)** The dollar **depreciates** relative to the peso.

**(d)** Mexico's exports to the United States **decrease**, because Mexican goods now cost more dollars for U.S. buyers.

**(e)** A **surplus of \\$15 billion**, because the current account and the capital and financial account sum to zero.
`
    },
    {
      id: 'macroint6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Set 1, a student shifts the supply of pesos to the right in part (b). Why does this lose the graph point?',
            options: [
              'The U.S. firm is buying pesos, which is a rise in demand for pesos',
              'The U.S. firm is selling pesos, which is a fall in demand for pesos',
              'The purchase belongs in the current account, not the forex market',
              'Mexican sellers of the factory are the ones who supply more pesos'
            ],
            correctAnswer: 0,
            explanation: 'A U.S. buyer of Mexican assets needs pesos, so demand for pesos increases and the peso appreciates. The factory\'s Mexican sellers receive pesos rather than offering them, and an asset purchase is a capital and financial account item.'
          },
          {
            question: 'A Mexican worker in Texas sends \\$300 home to her family each month. In the U.S. balance of payments, this is',
            options: [
              'a current account credit',
              'a current account debit',
              'a capital and financial account debit',
              'a capital and financial account credit'
            ],
            correctAnswer: 1,
            explanation: 'A remittance is a one-way transfer, recorded in the current account, and money leaving the United States is a debit. No asset is bought, so it is not a capital and financial account item.'
          },
          {
            question: 'A country\'s capital and financial account shows a deficit of \\$25 billion. What is its current account balance?',
            options: [
              'A deficit of \\$25 billion',
              'A surplus of \\$50 billion',
              'A surplus of \\$25 billion',
              'A balance of exactly zero'
            ],
            correctAnswer: 2,
            explanation: 'The two accounts sum to zero, so a \\$25 billion capital and financial account deficit pairs with a \\$25 billion current account surplus. A deficit in both would add up to −\\$50 billion, not zero.'
          }
        ]
      }
    },
    {
      id: 'macroint6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: A Foreign Rate Change

The European Central Bank raises its policy interest rates, while U.S. monetary policy is unchanged. Inflation expectations do not change in either place.

**(a)** What happens to the real interest rate in the euro area relative to the United States in the short run?

**(b)** In which direction does financial capital flow between the United States and the euro area? Explain.

**(c)** Draw a correctly labeled graph of the foreign exchange market for euros and show the effect of the capital flow in (b).

**(d)** What happens to the value of the dollar relative to the euro?

**(e)** What happens to U.S. net exports and to U.S. aggregate demand? Explain.

### Model Answers

**(a)** It **rises** relative to the U.S. real rate, because nominal rates rose with expected inflation unchanged.

**(b)** From the **United States to the euro area**, because savers seek the higher real return on euro-area assets.

**(c)** Axes: **dollars per euro** and **quantity of euros**. U.S. investors need euros, so **demand for euros shifts right**; the euro **appreciates** (ER1 to ER2, higher).

**(d)** The dollar **depreciates** relative to the euro.

**(e)** U.S. net exports **increase**: U.S. goods are cheaper for Europeans and European goods cost more for Americans. Higher net exports shift U.S. **AD right**.
`
    },
    {
      id: 'macroint6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Set 2, U.S. investors buy more euro-area bonds. How does that same purchase appear in the market for dollars?',
            options: [
              'Market for dollars: demand for dollars shifts right',
              'Market for dollars: supply of dollars shifts left',
              'Market for dollars: demand for dollars shifts left',
              'Market for dollars: supply of dollars shifts right'
            ],
            correctAnswer: 3,
            explanation: 'U.S. investors offer dollars to get euros, so the supply of dollars increases and the dollar depreciates, the mirror of the rise in demand for euros. Demand for dollars comes from foreigners, so a purchase by U.S. investors does not shift it.'
          },
          {
            question: 'U.S. inflation falls well below inflation in Canada. What happens in the foreign exchange market for U.S. dollars?',
            options: [
              'Demand rises and supply falls, so the dollar appreciates',
              'Demand falls and supply rises, so the dollar depreciates',
              'Demand and supply both rise, so the dollar is unchanged',
              'Demand and supply both fall, so the dollar depreciates'
            ],
            correctAnswer: 0,
            explanation: 'U.S. goods become relatively cheaper, so Canadians demand more U.S. dollars and Americans supply fewer dollars to buy Canadian goods; both shifts raise the dollar\'s value. Falling demand with rising supply describes relatively higher U.S. inflation.'
          }
        ]
      }
    },
    {
      id: 'macroint6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Country Tavia's balance of payments, in billions of dollars: exports of goods and services \\$180; imports of goods and services \\$230; net investment income \\$20; net transfers −\\$10. Tavians bought \\$60 billion of foreign assets during the year.

**1)** What is Tavia's current account balance?

**2)** What is Tavia's capital and financial account balance?

**3)** How many billions of dollars of Tavian assets did foreigners buy?

Enter numbers only; use a minus sign for a deficit.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-40', '40', '100'],
        hint1: '(180 − 230) + 20 − 10.',
        hint2: 'The two accounts sum to zero.',
        hint3: 'CFA balance = foreign purchases of Tavian assets − Tavian purchases of foreign assets.',
        explanation: '1) −50 + 20 − 10 = −40. 2) The capital and financial account is +40. 3) 40 = inflows − 60, so foreigners bought \\$100 billion of Tavian assets.'
      }
    }
  ]
}
