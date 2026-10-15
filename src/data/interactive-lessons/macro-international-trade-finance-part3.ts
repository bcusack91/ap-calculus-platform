export const macroInternationalTradeFinancePart3Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {
      id: 'macroint3-intro',
      type: 'text' as const,
      content: `
# 🌐 International Trade & Finance

**Part 3 of 7 — Exchange Rates and Conversion Math**

---

| Section |
|---------|
| 📖 Reading an Exchange Rate |
| Converting Prices Between Currencies |
| Which Currency Appreciated? |
| What a Change Does to Export and Import Prices |

> 🔑 **Key Concept:** An exchange rate is the **price of one currency in terms of another**. Every quote has a reciprocal, and if one currency **appreciates** against another, the other **depreciates** against it. Converting prices with the exchange rate shows why an appreciation makes a country's exports more expensive abroad and its imports cheaper at home.
`
    },
    {
      id: 'macroint3-reading',
      type: 'text' as const,
      content: `
## 📖 Reading an Exchange Rate

"**150 yen per dollar**" means one dollar costs 150 yen. It is the **price of a dollar**, measured in yen.

The same rate can be written the other way around, as the **price of a yen** in dollars:

1 ÷ 150 ≈ **\\$0.0067 per yen**

| Quote | Price of… | Reciprocal |
|---|---|---|
| 150 yen per dollar | one dollar, in yen | \\$0.0067 per yen |
| 0.80 euro per dollar | one dollar, in euros | \\$1.25 per euro |
| 20 pesos per dollar | one dollar, in pesos | \\$0.05 per peso |
| \\$1.25 per pound | one pound, in dollars | 0.80 pound per dollar |

**Rule:** the currency after "per" is the one being priced. "0.80 euro per dollar" prices the dollar; "\\$1.25 per euro" prices the euro. Both describe the same rate.
`
    },
    {
      id: 'macroint3-convert',
      type: 'text' as const,
      content: `
## Converting Prices Between Currencies

| To find… | Calculation |
|---|---|
| Foreign-currency price of a U.S. good | Dollar price × (foreign currency per dollar) |
| Dollar price of a foreign good | Foreign price ÷ (foreign currency per dollar) |

### Worked Example 1: A U.S. car sold in Mexico

A U.S. car costs **\\$30,000**.

- At **20 pesos per dollar**: 30,000 × 20 = **600,000 pesos**.
- At **18 pesos per dollar**: 30,000 × 18 = **540,000 pesos**.

When the dollar buys fewer pesos, the same U.S. car is **cheaper** for Mexican buyers.

### Worked Example 2: A German appliance sold in the U.S.

A German appliance costs **€400**.

- At **0.80 euro per dollar**: 400 ÷ 0.80 = **\\$500**.
- At **1.00 euro per dollar**: 400 ÷ 1.00 = **\\$400**.

When the dollar buys more euros, the same German appliance is **cheaper** for Americans.

### Check your direction

Multiplying by a foreign-per-dollar rate should give a **bigger** number when the foreign currency unit is worth less than a dollar (pesos, yen). If your answer runs the wrong way, you divided where you should have multiplied.
`
    },
    {
      id: 'macroint3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The exchange rate is 0.75 British pound per U.S. dollar. What is the price of one pound in dollars?',
            options: [
              'About \\$0.75',
              'About \\$1.33',
              'About \\$1.75',
              'About \\$0.25'
            ],
            correctAnswer: 1,
            explanation: 'The reciprocal of 0.75 pound per dollar is 1 ÷ 0.75 ≈ \\$1.33 per pound. \\$0.75 simply relabels the original quote, which prices the dollar, not the pound.'
          },
          {
            question: 'A U.S. textbook costs \\$80. The exchange rate is 150 yen per dollar. What does the textbook cost a buyer in Japan?',
            options: [
              '1,200 yen',
              '0.53 yen',
              '12,000 yen',
              '120,000 yen'
            ],
            correctAnswer: 2,
            explanation: 'Dollar price × yen per dollar = 80 × 150 = 12,000 yen. Dividing 80 by 150 gives 0.53, which runs the conversion in the wrong direction, and 1,200 or 120,000 yen misplaces the decimal.'
          },
          {
            question: 'An Italian handbag costs €600. At 1.20 euros per dollar, what does it cost in dollars?',
            options: [
              '\\$720',
              '\\$600',
              '\\$480',
              '\\$500'
            ],
            correctAnswer: 3,
            explanation: 'Foreign price ÷ euros per dollar = 600 ÷ 1.20 = \\$500. Multiplying gives \\$720, which would be the euro price of a \\$600 U.S. good.'
          }
        ]
      }
    },
    {
      id: 'macroint3-which',
      type: 'text' as const,
      content: `
## Which Currency Appreciated?

Compare two quotes of the **same** form.

| Before | After | The dollar… | The other currency… |
|---|---|---|---|
| 18 pesos per dollar | 20 pesos per dollar | **Appreciated** (buys more pesos) | Depreciated |
| 0.90 euro per dollar | 0.80 euro per dollar | **Depreciated** (buys fewer euros) | Appreciated |
| \\$1.20 per pound | \\$1.30 per pound | **Depreciated** (a pound now costs more dollars) | Appreciated |

The third row is the trap: the quote **rose**, but it is the price of a **pound**, so the pound gained.

### Percent change

**Percent change = (new − old) ÷ old × 100**

- Pesos per dollar rises from 18 to 20: (20 − 18) ÷ 18 × 100 ≈ **11.1%** dollar appreciation.
- Dollars per peso falls from 1 ÷ 18 ≈ 0.0556 to 1 ÷ 20 = 0.0500: (0.0500 − 0.0556) ÷ 0.0556 × 100 = **−10%** peso depreciation.

The two percentages are not equal and opposite, because each uses a different base. Always compute the change in the price of the currency the question asks about.

> 🔑 **AP Connection:** Before answering, rewrite the quote as "price of ___ in ___." If the price of the dollar went up, the dollar appreciated, whatever the numbers look like.
`
    },
    {
      id: 'macroint3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The exchange rate moves from **100 yen per dollar** to **125 yen per dollar**.

**1)** By what percent did the dollar appreciate against the yen?

**2)** A U.S. video game costs \\$40. What does it cost in yen after the change?

**3)** A Japanese camera costs 50,000 yen. What does it cost in dollars after the change?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '5000', '400'],
        hint1: '(125 − 100) ÷ 100 × 100.',
        hint2: 'Dollar price × yen per dollar.',
        hint3: 'Yen price ÷ yen per dollar.',
        explanation: '1) (125 − 100) ÷ 100 = 25%. 2) 40 × 125 = 5,000 yen, up from 4,000 yen. 3) 50,000 ÷ 125 = \\$400, down from \\$500. The stronger dollar raises the yen price of U.S. goods and lowers the dollar price of Japanese goods.'
      }
    },
    {
      id: 'macroint3-prices',
      type: 'text' as const,
      content: `
## What a Change Does to Export and Import Prices

Use the input example: the dollar appreciates from 100 to 125 yen per dollar.

| Item | Before | After | Effect |
|---|---|---|---|
| \\$40 U.S. video game, priced in yen | 4,000 yen | 5,000 yen | U.S. exports cost **more** abroad → quantity exported falls |
| 50,000-yen Japanese camera, priced in dollars | \\$500 | \\$400 | U.S. imports cost **less** at home → quantity imported rises |

| If the dollar… | Foreign-currency price of U.S. exports | Dollar price of U.S. imports | U.S. net exports |
|---|---|---|---|
| **Appreciates** | Rises | Falls | Decrease |
| **Depreciates** | Falls | Rises | Increase |

Neither firm changed its own price: the U.S. game is still \\$40 and the camera is still 50,000 yen. Only the exchange rate changed, and that alone changed what buyers in the other country pay.

> 🔑 **AP Connection:** A complete answer names **both** sides: "U.S. goods become more expensive for foreigners, so exports fall, and foreign goods become cheaper for Americans, so imports rise; net exports decrease."
`
    },
    {
      id: 'macroint3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The exchange rate changes from \\$1.10 per euro to \\$1.00 per euro. Which statement is correct?',
            options: [
              'The dollar has appreciated against the euro',
              'A euro now buys more dollars than before',
              'The euro appreciated against the dollar',
              'Neither currency changed in real terms'
            ],
            correctAnswer: 0,
            explanation: 'The quote prices the euro, and a euro now costs fewer dollars, so the euro depreciated and the dollar appreciated. A euro now buys fewer dollars, not more, and reading the falling number as a weaker dollar mixes up which currency is priced.'
          },
          {
            question: 'The peso depreciates against the dollar. What happens to the dollar price of Mexican tomatoes and the peso price of U.S. corn, if neither producer changes its own price?',
            options: [
              'Tomatoes cost more in dollars; corn gets cheaper in pesos',
              'Tomatoes get cheaper in dollars; corn costs more in pesos',
              'Both get cheaper, since each country gains a price edge',
              'Neither changes, since producers did not change prices'
            ],
            correctAnswer: 1,
            explanation: 'Each dollar now buys more pesos, so Mexican goods cost fewer dollars and U.S. goods cost more pesos. Producers\' own prices are unchanged, but the conversion between currencies is not.'
          },
          {
            question: 'The rate moves from 1.25 Canadian dollars per U.S. dollar to 1.40 Canadian dollars per U.S. dollar. By about what percent did the U.S. dollar appreciate?',
            options: [
              '15%',
              '11%',
              '12%',
              '40%'
            ],
            correctAnswer: 2,
            explanation: '(1.40 − 1.25) ÷ 1.25 = 0.15 ÷ 1.25 = 0.12, or 12%. Dividing the change by the new rate (0.15 ÷ 1.40 ≈ 11%) uses the wrong base, and 15% confuses cents with percent.'
          }
        ]
      }
    }
  ]
}
