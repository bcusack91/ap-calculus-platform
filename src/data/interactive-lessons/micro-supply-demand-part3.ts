export const microSupplyDemandPart3Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup3-intro',
      type: 'text' as const,
      content: `
# 📈 Supply & Demand

**Part 3 of 7 — Supply in Depth: Costs, Determinants, and Equations**

---

| Section |
|---------|
| 📖 Why the Supply Curve Slopes Up |
| Market Supply from Firm Supply |
| The Supply Determinants, One by One |
| Reading a Supply Shift Vertically |

> 🔑 **Key Concept:** The supply curve is a **marginal cost** story. Sellers offer more at higher prices because higher prices cover the higher cost of producing extra units. Anything that changes the cost or profitability of production at every price **shifts** supply.
`
    },
    {
      id: 'microsup3-slope',
      type: 'text' as const,
      content: `
## 📖 Why the Supply Curve Slopes Up

A **supply schedule** lists the quantity sellers are willing and able to offer at each price in a given period, *ceteris paribus*.

### Increasing Marginal Cost
Producing more of a good usually costs more **per extra unit**. A strawberry farm picks the easiest, ripest rows first. To pick more, it must pay overtime, use less productive fields, or hire less experienced workers. Each extra flat of berries costs more than the last.

| Flats per day | Marginal cost of that flat |
|---|---|
| 1st | \\$4 |
| 2nd | \\$5 |
| 3rd | \\$6 |
| 4th | \\$7 |

At a price of \\$5, the farm supplies 2 flats: the 3rd flat would cost \\$6 to produce but sell for only \\$5. At \\$7, it supplies 4. **A higher price makes higher-cost units worth producing**, so quantity supplied rises with price.

### Reading the Curve Two Ways
- **Horizontally:** at \\$6, the farm offers 3 flats.
- **Vertically:** the 3rd flat requires a price of at least \\$6. The height of the supply curve is the **marginal cost** of that unit, the minimum price a seller will accept.

> 🔑 **AP Connection:** The law of supply describes the **opportunity cost** idea from Unit 1: as a producer moves resources into this good, it uses resources that are less suited to it, so the cost of each extra unit rises. That is the same reason a PPC bows outward.
`
    },
    {
      id: 'microsup3-market',
      type: 'text' as const,
      content: `
## 📖 Market Supply from Firm Supply

Just like demand, **market supply** is the horizontal sum of each seller's quantity supplied at each price.

| Price per flat | Farm A | Farm B | Farm C | **Market Qs** |
|---|---|---|---|---|
| \\$1 | 0 | 1 | 1 | **2** |
| \\$2 | 1 | 2 | 3 | **6** |
| \\$3 | 2 | 3 | 5 | **10** |
| \\$4 | 3 | 4 | 7 | **14** |
| \\$5 | 4 | 5 | 9 | **18** |

The market schedule fits the line:

$$Q_s = 4P - 2$$

Check: at $P = 3$, $Q_s = 12 - 2 = 10$ ✓. The positive coefficient on $P$ is the law of supply: each \\$1 increase in price raises quantity supplied by 4 flats.

### Number of Sellers
If Farm C closes, the market loses its quantities at **every** price. At \\$4, market quantity supplied drops from 14 to 7. Every row changes, so market supply **shifts left**.
`
    },
    {
      id: 'microsup3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why does a typical firm\'s supply curve slope upward?',
            options: [
              'Each extra unit tends to cost more to produce than the last',
              'Firms need higher prices to cover their fixed costs',
              'Buyers will pay more when more units are offered',
              'Higher prices drive rival firms out of the market'
            ],
            correctAnswer: 0,
            explanation: 'Rising marginal cost is the reason: a higher price is needed to make higher-cost units worth producing. Fixed costs do not change with output, buyers\' willingness to pay is the demand side, and higher prices attract firms rather than driving them out.'
          },
          {
            question: 'Using the strawberry farm\'s marginal cost table, how many flats does the farm supply when the price is \\$6?',
            options: [
              '3 flats, since the 4th costs more than \\$6',
              '4 flats, since the price covers the 4th flat',
              '2 flats, since the 3rd flat earns no profit',
              '6 flats, since output rises one-for-one with price'
            ],
            correctAnswer: 0,
            explanation: 'The 1st through 3rd flats cost \\$4, \\$5 and \\$6, so each is covered by a \\$6 price. The 4th flat costs \\$7, more than it would sell for. Producing a unit whose marginal cost equals the price is the standard convention on the AP exam.'
          }
        ]
      }
    },
    {
      id: 'microsup3-determinants',
      type: 'text' as const,
      content: `
## 📖 The Supply Determinants, One by One

Each determinant works through **cost** or **profitability** at every price.

| Determinant | Example | Why it shifts supply | Direction |
|---|---|---|---|
| **Input prices** | Fertilizer price rises for wheat farmers | Every bushel costs more to grow | Left |
| **Technology / productivity** | A robotic picker for strawberries | Same output with fewer resources | Right |
| **Prices of other goods the seller could produce** | Corn price rises; farmers can plant corn or wheat | Land is more profitable in corn, so less wheat is offered | Left (for wheat) |
| **Prices of joint products** | Beef price rises; leather comes from the same cattle | More cattle processed means more hides | Right (for leather) |
| **Seller expectations** | Oil producers expect higher prices next year | Storable output is held back to sell later | Left (now) |
| **Number of sellers** | New coffee shops open downtown | More firms offer the good at every price | Right |
| **Taxes, subsidies, regulation** | \\$1-per-unit subsidy for solar panels | Subsidy lowers the effective cost of each unit | Right |

### Two Kinds of "Related Goods" for Sellers
- **Substitutes in production** use the same resources: corn and wheat on the same land. A higher price for one **decreases** supply of the other.
- **Complements in production (joint products)** come out of the same process: beef and leather, or gasoline and diesel from a barrel of crude. A higher price for one **increases** supply of the other.

These are different from substitutes and complements **in consumption**, which shift demand.

> 🔑 **AP Connection:** Seller expectations push the opposite way from buyer expectations. If everyone expects higher prices next month, buyers buy more **now** (demand right) and sellers sell less **now** (supply left). Both raise the current price.
`
    },
    {
      id: 'microsup3-vertical',
      type: 'text' as const,
      content: `
## 📖 Reading a Supply Shift Vertically

Because the height of supply is marginal cost, a per-unit cost change moves the curve **up or down by exactly that amount**.

### Worked Example: A \\$1 Cost Increase
New safety rules add \\$1 to the cost of every flat. Start from $Q_s = 4P - 2$.

1. Sellers now need \\$1 more to offer any given quantity, so they respond to $P - 1$ the way they used to respond to $P$.
2. New supply: $Q_s = 4(P - 1) - 2 = 4P - 6$.
3. At \\$4, quantity supplied falls from 14 to 10.
4. The old curve offered 10 flats at \\$3; the new curve offers 10 flats at \\$4. The curve moved **up by \\$1**, which is the same shift as **left by 4 flats**.

### Worked Example: A \\$1 Subsidy
A \\$1-per-flat subsidy does the reverse: $Q_s = 4(P + 1) - 2 = 4P + 2$. At \\$4, quantity supplied rises from 14 to 18. The curve moved **down by \\$1** (right by 4 flats).

> 🔑 **AP Connection:** A supply **decrease** is drawn as a shift to the **left**, which looks like a shift **up**. Students who think "less supply means lower curve" draw it backward. Check with one price: at the same price, the new curve must show a smaller quantity.
`
    },
    {
      id: 'microsup3-input',
      type: 'input-boxes' as const,
      content: `
**Work the Supply Equation** ✍️

Market supply is $Q_s = 4P - 2$.

1) What is quantity supplied at a price of \\$5?

2) A per-unit tax adds \\$2 to sellers' cost of each flat. The new supply is $Q_s = 4(P - 2) - 2$. What is the new quantity supplied at \\$5?

3) Under the new supply curve, what price in dollars is needed to get 18 flats, the quantity sellers used to offer at \\$5?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '10', '7'],
        hint1: '4(5) − 2.',
        hint2: 'The new equation simplifies to Qs = 4P − 10.',
        hint3: 'Set 4P − 10 = 18 and solve for P. It should be \\$2 above the old price.',
        explanation: '1) 20 − 2 = 18 flats. 2) Qs = 4P − 10, so at \\$5 it is 10 flats. 3) 4P − 10 = 18 gives P = 7: the curve moved up by exactly the \\$2 tax.'
      }
    },
    {
      id: 'microsup3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Beef and leather come from the same cattle. If a fad diet sharply raises the price of beef, what happens in the market for leather?',
            options: [
              'Supply of leather increases',
              'Supply of leather decreases',
              'Demand for leather increases',
              'Demand for leather decreases'
            ],
            correctAnswer: 0,
            explanation: 'Beef and leather are joint products. A higher beef price leads ranchers to process more cattle, which yields more hides at every price, so leather supply shifts right. Nothing in the event changes what leather buyers want.'
          },
          {
            question: 'Farmers can plant either soybeans or corn on the same land. If the price of corn rises, the market for soybeans will see:',
            options: [
              'a leftward shift of soybean supply',
              'a rightward shift of soybean supply',
              'a movement up along soybean supply',
              'a rightward shift of soybean demand'
            ],
            correctAnswer: 0,
            explanation: 'Corn and soybeans are substitutes in production. A higher corn price makes land more profitable in corn, so farmers offer fewer soybeans at every soybean price. A movement along soybean supply would need a change in the soybean price itself.'
          },
          {
            question: 'Gold miners come to expect much higher gold prices next year. In the current market for gold, this expectation most likely:',
            options: [
              'decreases supply and raises the current price',
              'increases supply now and lowers the current price',
              'decreases demand now and lowers the current price',
              'leaves supply unchanged until prices actually rise'
            ],
            correctAnswer: 0,
            explanation: 'Gold is storable, so miners hold some output back to sell later at the higher expected price. Supply now shifts left and the current price rises. Expectations act immediately; sellers do not wait for the price change to occur.'
          }
        ]
      }
    }
  ]
};
