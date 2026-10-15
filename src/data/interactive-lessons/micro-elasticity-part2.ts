export const microElasticityPart2Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {
      id: 'microela2-intro',
      type: 'text' as const,
      content: `
# 📏 Elasticity

**Part 2 of 7 — Calculating Price Elasticity of Demand**

---

| Section |
|---------|
| 📖 The Percent-Change Formula |
| The Midpoint Method |
| Slope Is Not Elasticity |
| Perfectly Elastic and Perfectly Inelastic Demand |

> 🔑 **Key Concept:** Part 1 sorted demand into elastic and inelastic. This part shows how to **compute** the number, why it is reported as an absolute value, and why a straight-line demand curve is elastic at high prices and inelastic at low prices even though its slope never changes.
      `
    },
    {
      id: 'microela2-formula',
      type: 'text' as const,
      content: `
## 📖 The Percent-Change Formula

$$\\text{PED} = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$$

Quantity demanded always goes on **top**. Both changes are **percentages**, so elasticity has no units: it does not matter whether price is in dollars or euros, or quantity is in pounds or tons.

### The sign convention

By the law of demand, price and quantity demanded move in **opposite directions**, so the raw ratio is always negative. Economists (and the AP exam) report PED as an **absolute value**: a raw result of −1.5 is reported as a PED of 1.5.

| PED (absolute value) | Classification | What it means |
|---|---|---|
| Greater than 1 | Elastic | Quantity changes by a larger percentage than price |
| Equal to 1 | Unit elastic | Quantity changes by the same percentage as price |
| Less than 1 | Inelastic | Quantity changes by a smaller percentage than price |

### Worked Example 1: Computing PED

A movie theater raises the ticket price from \\$20 to \\$22. Weekly tickets sold fall from 500 to 425.

1. Percent change in price: $\\dfrac{22 - 20}{20} = +10\\%$
2. Percent change in quantity: $\\dfrac{425 - 500}{500} = -15\\%$
3. PED $= \\dfrac{-15\\%}{+10\\%} = -1.5$, reported as **1.5**

Since 1.5 > 1, demand is **elastic** in this price range. Read the number literally: each 1% increase in price cuts quantity demanded by about 1.5%.

### Worked Example 2: Using PED to Predict

Rearranging the formula gives a prediction tool:

$$\\%\\Delta Q_d = \\text{PED} \\times \\%\\Delta P$$

If demand for bus rides has a PED of 0.4 and the fare rises 5%, ridership falls by $0.4 \\times 5\\% = 2\\%$. If the PED were 2.0, the same 5% fare increase would cut ridership by 10%.
      `
    },
    {
      id: 'microela2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A streaming service raises its monthly price by 8 percent, and the number of subscriptions falls by 12 percent. What is the price elasticity of demand?',
            options: [
              '1.5, so demand is elastic',
              '0.67, so demand is inelastic',
              '1.5, so demand is inelastic',
              '4, so demand is elastic'
            ],
            correctAnswer: 0,
            explanation: 'PED is the percent change in quantity demanded divided by the percent change in price: 12 ÷ 8 = 1.5, and any value above 1 is elastic. The value 0.67 comes from flipping the formula and putting price on top, and 4 comes from subtracting the percentages instead of dividing them.'
          },
          {
            question: 'Demand for downtown parking has a price elasticity of 0.4. If the city raises parking fees by 10 percent, the quantity of parking demanded will',
            options: [
              'fall by about 4 percent',
              'fall by about 25 percent',
              'fall by about 0.4 percent',
              'fall by about 40 percent'
            ],
            correctAnswer: 0,
            explanation: 'Rearrange the formula: the percent change in quantity equals PED times the percent change in price, 0.4 × 10% = 4%. Dividing 10 by 0.4 to get 25 percent inverts the relationship.'
          },
          {
            question: 'Economists report the price elasticity of demand as a positive number even though the raw ratio is negative. Why is the raw ratio negative?',
            options: [
              'Demand curves shift left whenever prices rise',
              'Price and quantity demanded move in opposite directions',
              'Total revenue falls whenever the price rises',
              'Sellers offer less output when prices are lower'
            ],
            correctAnswer: 1,
            explanation: 'The law of demand says a higher price lowers quantity demanded, so the two percent changes always have opposite signs. A price change moves buyers along the curve rather than shifting it, and total revenue can rise or fall depending on elasticity.'
          }
        ]
      }
    },
    {
      id: 'microela2-midpoint',
      type: 'text' as const,
      content: `
## The Midpoint Method

Simple percent changes have one flaw: the answer depends on which point you start from. A price rise from \\$20 to \\$22 is +10%, but a fall from \\$22 back to \\$20 is only −9.1%. Many textbooks fix this with the **midpoint method**, which divides each change by the **average** of the two values:

$$\\%\\Delta Q = \\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2} \\qquad \\%\\Delta P = \\frac{P_2 - P_1}{(P_1 + P_2)/2}$$

### Worked Example: The Movie Theater Again

Price \\$20 → \\$22, quantity 500 → 425.

| Step | Quantity | Price |
|---|---|---|
| Change | 425 − 500 = −75 | 22 − 20 = +2 |
| Average | (500 + 425) ÷ 2 = 462.5 | (20 + 22) ÷ 2 = 21 |
| Percent change | −75 ÷ 462.5 = −16.2% | 2 ÷ 21 = +9.5% |

PED $= 16.2 \\div 9.5 \\approx$ **1.70**. The simple method gave 1.5. The numbers differ, but both say **elastic**, and the midpoint answer is the same whether the price rises or falls.

> 🔑 **AP Connection:** AP questions usually hand you the percentage changes directly ("a 10 percent increase in price causes a 25 percent decrease in quantity"). When a question gives raw prices and quantities instead, compute the percentages carefully. The classification almost never depends on which method you use unless the result is very close to 1.
      `
    },
    {
      id: 'microela2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Report each PED as a positive number (absolute value).

**1)** A bakery raises the price of bagels by 5 percent, and quantity demanded falls by 12 percent. What is the PED? (one decimal)

**2)** Short-run demand for gasoline has a PED of 0.2. If the price of gasoline rises 15 percent, by what percent does quantity demanded fall? (enter the number only)

**3)** Using the midpoint method: the price of a phone case rises from \\$4 to \\$6, and quantity demanded falls from 120 to 80. What is the PED?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.4', '3', '1'],
        hint1: 'Quantity goes on top: 12 ÷ 5.',
        hint2: 'Percent change in quantity = PED × percent change in price = 0.2 × 15.',
        hint3: 'Quantity: change of 40 over an average of 100. Price: change of 2 over an average of 5.',
        explanation: '1) 12 ÷ 5 = 2.4, elastic. 2) 0.2 × 15% = 3%, a small response because short-run gasoline demand is inelastic. 3) The quantity change is 40 ÷ 100 = 40% and the price change is 2 ÷ 5 = 40%, so PED = 1 and demand is unit elastic over this range.'
      }
    },
    {
      id: 'microela2-slope',
      type: 'text' as const,
      content: `
## Slope Is Not Elasticity

Take the straight-line demand curve **Qd = 100 − 10P**. Its price intercept is \\$10 (no one buys at \\$10) and its quantity intercept is 100 (quantity demanded at a price of zero). Every \\$1 price cut adds exactly 10 units, so the **slope is the same everywhere**. Elasticity is not.

### Worked Example: Three \\$1 Price Cuts

| Price cut | %ΔP (from start) | Quantity change | %ΔQ (from start) | PED |
|---|---|---|---|---|
| \\$8 → \\$7 | −1 ÷ 8 = −12.5% | 20 → 30 | +10 ÷ 20 = +50% | **4.0** (elastic) |
| \\$5 → \\$4 | −1 ÷ 5 = −20% | 50 → 60 | +10 ÷ 50 = +20% | **1.0** (unit elastic) |
| \\$2 → \\$1 | −1 ÷ 2 = −50% | 80 → 90 | +10 ÷ 80 = +12.5% | **0.25** (inelastic) |

The \\$1 and 10-unit changes never vary. What varies is the **base**. Near the top of the curve, \\$1 is a small share of a high price, and 10 units is a large share of a small quantity, so the ratio is big. Near the bottom, the reverse is true.

### Elasticity at Each Point on Qd = 100 − 10P

| Price | Quantity | PED at that point | Range |
|---|---|---|---|
| \\$9 | 10 | 9.0 | Elastic |
| \\$7 | 30 | 2.33 | Elastic |
| \\$6 | 40 | 1.5 | Elastic |
| **\\$5** | **50** | **1.0** | **Unit elastic (midpoint)** |
| \\$4 | 60 | 0.67 | Inelastic |
| \\$3 | 70 | 0.43 | Inelastic |
| \\$1 | 90 | 0.11 | Inelastic |

### The Rule for Any Straight-Line Demand Curve

- The **midpoint** sits at half the price intercept and half the quantity intercept (here \\$5 and 50 units).
- **Above** the midpoint (higher prices), demand is **elastic**.
- **At** the midpoint, demand is **unit elastic**.
- **Below** the midpoint (lower prices), demand is **inelastic**.

Picture the graph: price on the vertical axis, quantity on the horizontal axis, a straight line from (0, \\$10) down to (100, \\$0). The upper-left half of the line is the elastic range, the exact center is unit elastic, and the lower-right half is the inelastic range.

> 🔑 **AP Connection:** Slope comparisons are valid only at a **shared point**. If two straight-line demand curves cross at the same price and quantity, the **flatter** curve is more elastic at that point. Never call a whole downward-sloping straight line "elastic" or "inelastic": it has both ranges.
      `
    },
    {
      id: 'microela2-extremes',
      type: 'text' as const,
      content: `
## Perfectly Elastic and Perfectly Inelastic Demand

Only two straight-line demand curves have the **same** elasticity at every point:

| Curve shape | PED | Behavior | Close real-world approximation |
|---|---|---|---|
| **Vertical** | 0 (perfectly inelastic) | Quantity demanded stays the same at every price | A patient's fixed dose of a life-saving drug |
| **Horizontal** | Infinite (perfectly elastic) | Buyers purchase any amount at one price and nothing above it | The demand facing one wheat farmer who must accept the market price |

A third special case is a curve that is **unit elastic everywhere**. It is not a straight line: it bows toward the origin, because price times quantity stays constant along it. A shopper who always spends exactly \\$100 a week on groceries, whatever the prices, has unit-elastic demand.

### Summary of the Calculation Skills

1. Put the percent change in **quantity** on top and the percent change in **price** on the bottom.
2. Report the result as an **absolute value** and compare it to 1.
3. On a straight-line demand curve, find the midpoint first: higher prices are elastic, lower prices inelastic.
4. Vertical means PED = 0; horizontal means PED is infinite.

> 🔑 **AP Connection:** The horizontal demand curve returns in Unit 3: a perfectly competitive firm faces a perfectly elastic demand curve at the market price, which is why its price equals its marginal revenue.
      `
    },
    {
      id: 'microela2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Use the demand curve Qd = 100 − 10P from this part where needed.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On the demand curve Qd = 100 − 10P, at a price of \\$7 demand is ___',
            options: ['elastic', 'inelastic', 'unit elastic', 'perfectly inelastic']
          },
          {
            label: 'A demand curve that is perfectly horizontal has a price elasticity that is ___',
            options: ['infinite', 'zero', 'equal to one', 'equal to its slope']
          },
          {
            label: 'Two straight-line demand curves pass through the same point. At that point, the flatter curve is ___',
            options: ['more elastic', 'less elastic', 'equally elastic', 'unit elastic']
          }
        ],
        correctAnswers: ['elastic', 'infinite', 'more elastic'],
        hint1: 'The midpoint of this curve is at \\$5. Is \\$7 above or below it?',
        hint2: 'Any price increase drives quantity demanded to zero.',
        hint3: 'At a shared point, a flatter line means a given price change produces a bigger quantity change.',
        explanation: 'A price of \\$7 is above the \\$5 midpoint, so demand is elastic there (PED about 2.33). A horizontal demand curve is perfectly elastic, with infinite PED. At a shared point, the flatter curve shows a larger percentage quantity response to the same percentage price change, so it is more elastic.'
      }
    }
  ]
}
