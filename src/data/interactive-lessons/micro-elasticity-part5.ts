export const microElasticityPart5Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {
      id: 'microela5-intro',
      type: 'text' as const,
      content: `
# 📏 Elasticity

**Part 5 of 7 — Cross-Price and Income Elasticity with Data**

---

| Section |
|---------|
| 📖 Cross-Price Elasticity from Data |
| Income Elasticity from Data |
| Using Elasticities to Make Decisions |
| Sign Conventions and Other Traps |

> 🔑 **Key Concept:** Price elasticity of demand drops the minus sign. Cross-price and income elasticity **keep** their signs, because the sign is the answer: it tells you whether goods are substitutes or complements, and whether a good is normal or inferior.
      `
    },
    {
      id: 'microela5-xed',
      type: 'text' as const,
      content: `
## 📖 Cross-Price Elasticity from Data

$$\\text{XED} = \\frac{\\%\\Delta Q_d \\text{ of good A}}{\\%\\Delta P \\text{ of good B}}$$

Read the result in two steps:

1. **Sign** gives the relationship: positive means **substitutes**, negative means **complements**, zero means **unrelated**.
2. **Size** gives the strength: a value near zero is a weak relationship, and a large value (in either direction) is a strong one.

### Worked Example 1: The Price of Coffee Rises 10%

| Good A | %ΔQd of A | XED | Relationship to coffee |
|---|---|---|---|
| Tea | +6% | +6 ÷ 10 = **+0.6** | Substitute |
| Energy drinks | +2% | +2 ÷ 10 = **+0.2** | Weak substitute |
| Coffee creamer | −4% | −4 ÷ 10 = **−0.4** | Complement |
| Paper towels | 0% | 0 ÷ 10 = **0** | Unrelated |

Good A's own price did not change, so each response is a **shift** of good A's demand curve: tea demand shifts right, creamer demand shifts left.

### Worked Example 2: Predicting with XED

The cross-price elasticity of hot dog buns with respect to the price of hot dogs is −0.8. If the price of hot dogs **falls** 5%:

$$\\%\\Delta Q_d \\text{ of buns} = -0.8 \\times (-5\\%) = +4\\%$$

Cheaper hot dogs mean more hot dog meals, so demand for buns **rises** 4%. Watch the two minus signs: a negative XED times a price **decrease** gives an **increase**.
      `
    },
    {
      id: 'microela5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When the price of coffee rises 10 percent, the quantity of tea demanded rises 6 percent. What are the cross-price elasticity and the relationship?',
            options: [
              '+0.6, substitutes',
              '−0.6, complements',
              '+0.6, complements',
              '−0.6, substitutes'
            ],
            correctAnswer: 0,
            explanation: 'XED is +6% ÷ +10% = +0.6. A positive value means buyers switch toward tea when coffee gets more expensive, so the goods are substitutes. A negative value would mean the goods are used together.'
          },
          {
            question: 'The cross-price elasticity of hot dog buns with respect to the price of hot dogs is −0.8. If the price of hot dogs falls 5 percent, the quantity of buns demanded will',
            options: [
              'rise by 4 percent',
              'fall by 4 percent',
              'rise by 6.25 percent',
              'fall by 6.25 percent'
            ],
            correctAnswer: 0,
            explanation: 'Multiply: −0.8 × −5% = +4%. The goods are complements, so a cheaper hot dog raises demand for buns. A fall of 4 percent drops one of the minus signs, and 6.25 percent divides instead of multiplying.'
          },
          {
            question: 'The cross-price elasticity between two brands of bottled water is +2.5. Between bottled water and soda it is +0.3. What do these numbers show?',
            options: [
              'Water brands are closer substitutes than water and soda',
              'Water and soda are closer substitutes than water brands',
              'Water brands are complements, and water and soda are not',
              'Water brands are inferior goods, and soda is a normal good'
            ],
            correctAnswer: 0,
            explanation: 'Both values are positive, so both pairs are substitutes, and the larger value means buyers switch much more readily between the two water brands. Cross-price elasticity says nothing about whether a good is normal or inferior; that is income elasticity.'
          }
        ]
      }
    },
    {
      id: 'microela5-yed',
      type: 'text' as const,
      content: `
## Income Elasticity from Data

$$\\text{YED} = \\frac{\\%\\Delta Q_d}{\\%\\Delta \\text{Income}}$$

| YED | Classification | Meaning |
|---|---|---|
| Negative | **Inferior good** | Buyers purchase less as income rises |
| Between 0 and 1 | **Normal good, necessity** (income inelastic) | Purchases rise, but by a smaller percentage than income |
| Greater than 1 | **Normal good, luxury** (income elastic) | Purchases rise by a larger percentage than income |

### Worked Example: Average Income Rises 5%

| Good | %ΔQd | YED | Classification |
|---|---|---|---|
| Organic groceries | +9% | 9 ÷ 5 = **1.8** | Normal, luxury |
| Bread | +1% | 1 ÷ 5 = **0.2** | Normal, necessity |
| Store-brand pasta | −3% | −3 ÷ 5 = **−0.6** | Inferior |

A change in income **shifts** the demand curve: right for normal goods, left for inferior goods when income rises.

> ⚠️ **Watch the word "necessity":** In Part 1, being a necessity made demand **price** inelastic. Here, "necessity" is a label for an **income** elasticity between 0 and 1. The two ideas often go together, but they are measured differently.
      `
    },
    {
      id: 'microela5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Keep the sign for cross-price and income elasticity. Type a minus sign for negative answers.

**1)** The price of game consoles rises 8 percent, and the quantity of video games demanded falls 6 percent. What is the cross-price elasticity of games with respect to the console price? (two decimals)

**2)** Income rises 4 percent, and the quantity of restaurant meals demanded rises 10 percent. What is the income elasticity? (one decimal)

**3)** A good has an income elasticity of −0.6. If income falls 5 percent, by what percent does quantity demanded change? (include the sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-0.75', '2.5', '3'],
        hint1: 'Divide −6 by +8 and keep the minus sign.',
        hint2: '10 ÷ 4. Is the result above or below 1?',
        hint3: 'Multiply −0.6 by −5. Two negatives make a positive.',
        explanation: '1) −6 ÷ 8 = −0.75: complements. 2) 10 ÷ 4 = 2.5: a normal good that is a luxury. 3) −0.6 × −5% = +3%: an inferior good, so buyers purchase more of it when their income falls.'
      }
    },
    {
      id: 'microela5-decisions',
      type: 'text' as const,
      content: `
## Using Elasticities to Make Decisions

### Business Cycles

Suppose a recession cuts average income by 4%. Predicted demand changes:

| Seller | YED | %Δ in demand |
|---|---|---|
| Cruise line | +2.0 | 2.0 × −4% = **−8%** |
| Grocery chain | +0.3 | 0.3 × −4% = **−1.2%** |
| Discount store-brand foods | −0.5 | −0.5 × −4% = **+2%** |

Sellers of luxuries feel recessions hardest, while sellers of inferior goods can gain.

### Pricing Related Products

A company that sells both a game console and its games knows the two are complements. Cutting the console price raises demand for its games, so it may price the console low and earn profit on the games.

### Long-Run Planning

Food has an income elasticity well below 1. As a country grows richer, total food spending rises, but the **share** of income spent on food falls. Planners and businesses use income elasticities to forecast which industries will grow fastest as income rises.

> 🔑 **AP Connection:** On the AP exam, cross-price and income elasticity questions usually give the percent changes and ask you to classify. Always state the **sign** and connect it to the classification, for example: "The income elasticity is negative, so the good is inferior."
      `
    },
    {
      id: 'microela5-traps',
      type: 'text' as const,
      content: `
## Sign Conventions and Other Traps

| Trap | The correct idea |
|---|---|
| Dropping the sign on XED or YED | Only PED is reported as an absolute value. For XED and YED the sign carries the meaning. |
| "Inelastic means vertical" | Inelastic means PED is between 0 and 1. Vertical (PED = 0) is the extreme case, perfectly inelastic. |
| "A flat-looking straight demand line is elastic everywhere" | Every downward-sloping straight demand line is elastic above its midpoint and inelastic below it. |
| Putting price on top | Quantity always goes in the numerator for every elasticity. |
| Treating units as important | Elasticities use percentages, so they are the same whether price is in cents or dollars. |
| "Normal good" means "necessity" | Luxuries are normal goods too. Normal only means YED is positive. |
| Using XED to classify normal and inferior goods | Normal and inferior come from **income** elasticity; XED classifies substitutes and complements. |
      `
    },
    {
      id: 'microela5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Income rises 5 percent. The quantity demanded of Good A rises 2 percent, Good B rises 9 percent, and Good C falls 3 percent. Which classification is correct?',
            options: [
              'A is a necessity, B is a luxury, C is inferior',
              'A is a luxury, B is a necessity, C is inferior',
              'A is inferior, B is a luxury, C is a necessity',
              'A is a necessity, B is inferior, C is a luxury'
            ],
            correctAnswer: 0,
            explanation: 'The income elasticities are 0.4 for A, 1.8 for B, and −0.6 for C. A value between 0 and 1 is a necessity, a value above 1 is a luxury, and a negative value is an inferior good.'
          },
          {
            question: 'During a recession, average income falls 4 percent. Which seller would most likely see demand for its product increase?',
            options: [
              'A grocer selling store-brand pasta',
              'A cruise line selling luxury vacations',
              'A dealership selling new sports cars',
              'A steakhouse selling premium dinners'
            ],
            correctAnswer: 0,
            explanation: 'Store-brand pasta is an inferior good with a negative income elasticity, so falling income raises demand for it. Cruises, sports cars, and steak dinners are normal goods, and luxuries in particular see demand fall sharply when income drops.'
          },
          {
            question: 'A student says that because demand for insulin is inelastic, its demand curve must be vertical. What is wrong with this claim?',
            options: [
              'Inelastic demand curves are always horizontal ones',
              'A vertical curve has unit elastic demand everywhere',
              'Vertical means a PED of 0, a special inelastic case',
              'Insulin demand is elastic for patients with coverage'
            ],
            correctAnswer: 2,
            explanation: 'Inelastic covers every PED between 0 and 1, and a vertical curve is only the extreme case where PED equals 0. A horizontal curve is perfectly elastic, and unit elastic demand is not a straight vertical line.'
          }
        ]
      }
    }
  ]
}
