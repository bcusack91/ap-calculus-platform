export const microElasticityPart4Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {
      id: 'microela4-intro',
      type: 'text' as const,
      content: `
# 📏 Elasticity

**Part 4 of 7 — Price Elasticity of Supply**

---

| Section |
|---------|
| 📖 Measuring the Response of Sellers |
| What Makes Supply Elastic or Inelastic |
| Elasticity Along a Straight-Line Supply Curve |
| Short Run Versus Long Run |

> 🔑 **Key Concept:** Price elasticity of supply (PES) measures how much **quantity supplied** responds to a change in price. The biggest driver is **time**: sellers who have longer to adjust production respond more.
      `
    },
    {
      id: 'microela4-formula',
      type: 'text' as const,
      content: `
## 📖 Measuring the Response of Sellers

$$\\text{PES} = \\frac{\\%\\Delta Q_s}{\\%\\Delta P}$$

By the law of supply, price and quantity supplied move in the **same** direction, so PES is normally **positive**. No absolute-value step is needed.

| PES | Classification | Graph described in text |
|---|---|---|
| 0 | Perfectly inelastic | A vertical supply curve: quantity supplied is fixed at every price |
| Between 0 and 1 | Inelastic | Quantity supplied changes by a smaller percentage than price |
| Exactly 1 | Unit elastic | Quantity supplied changes by the same percentage as price |
| Greater than 1 | Elastic | Quantity supplied changes by a larger percentage than price |
| Infinite | Perfectly elastic | A horizontal supply curve: sellers supply any quantity at one price |

### Worked Example 1: Strawberries This Week

The price of strawberries rises 20%. Farmers can only pick the berries already ripening, so quantity supplied rises just 5%.

PES = 5 ÷ 20 = **0.25**, so supply is **inelastic** this week.

### Worked Example 2: Phone Cases

The price of phone cases rises 10%. Factories have idle machines and plenty of plastic, so quantity supplied rises 30%.

PES = 30 ÷ 10 = **3.0**, so supply is **elastic**.

### Worked Example 3: Midpoint Method

A toy maker raises output from 100 to 160 units when the price rises from \\$4 to \\$6.

| Step | Quantity supplied | Price |
|---|---|---|
| Change | +60 | +\\$2 |
| Average | 130 | \\$5 |
| Percent change | 60 ÷ 130 = 46.2% | 2 ÷ 5 = 40% |

PES = 46.2 ÷ 40 ≈ **1.15**, elastic. (Simple percent changes from the starting point give 60% ÷ 50% = 1.2, the same classification.)
      `
    },
    {
      id: 'microela4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When the price of fresh fish rises 25 percent, the quantity of fish supplied at the dock that morning rises 5 percent. The price elasticity of supply is',
            options: [
              '0.2, so supply is inelastic',
              '5, so supply is elastic',
              '0.2, so supply is elastic',
              '5, so supply is inelastic'
            ],
            correctAnswer: 0,
            explanation: 'PES is the percent change in quantity supplied divided by the percent change in price, 5 ÷ 25 = 0.2. A value below 1 is inelastic, which fits a morning catch that is already landed. The value 5 inverts the formula.'
          },
          {
            question: 'The price elasticity of demand is reported as an absolute value, but the price elasticity of supply is normally positive on its own. Why?',
            options: [
              'Supply curves shift to the right when prices rise',
              'Sellers offer larger quantities at higher prices',
              'Buyers purchase smaller quantities at higher prices',
              'Supply is always more elastic than demand is'
            ],
            correctAnswer: 1,
            explanation: 'The law of supply says quantity supplied rises with price, so the two percent changes share a sign. A price change moves sellers along the supply curve rather than shifting it, and buyers purchasing less at higher prices is the law of demand, which explains the negative sign of PED.'
          },
          {
            question: 'A bike maker raises output from 100 to 140 bikes when the price rises from \\$10 to \\$12. Using the midpoint method, the price elasticity of supply is closest to',
            options: [
              '1.83',
              '0.55',
              '2.00',
              '20'
            ],
            correctAnswer: 0,
            explanation: 'Quantity rises 40 ÷ 120 = 33.3% and price rises 2 ÷ 11 = 18.2%, so PES is about 1.83. The value 2.00 uses simple percent changes from the starting point, 0.55 inverts the ratio, and 20 is the change in bikes per dollar, which is a slope rather than an elasticity.'
          }
        ]
      }
    },
    {
      id: 'microela4-determinants',
      type: 'text' as const,
      content: `
## What Makes Supply Elastic or Inelastic

| Determinant | More elastic supply | Less elastic supply |
|---|---|---|
| **Time to adjust** | Long run: firms can build plants, and new firms can enter | Market period or short run: output is close to fixed |
| **Spare capacity and inventories** | Idle machines, unused workers, goods in storage | Factories already at full capacity, no stock on hand |
| **Availability and mobility of inputs** | Common inputs that can move easily from other uses | Scarce, specialized inputs or workers who need years of training |
| **Ease of storage** | Durable goods that can be stockpiled and released | Perishable goods that must be sold quickly |
| **Complexity of production** | Simple goods made quickly | Goods that take years to produce, like aged wine or new orchards |

### Special Cases

- **Perfectly inelastic supply (PES = 0):** quantity cannot change at all. Examples: seats at one concert once the venue is booked, original paintings by an artist who has died, the land area of Manhattan. A demand increase raises only the **price**.
- **Perfectly elastic supply (PES infinite):** sellers will supply any quantity at one price, but nothing below it. A good approximation is a standardized product that can be copied cheaply at a constant cost per unit. In Unit 3, a **constant-cost** competitive industry has a horizontal long-run supply curve.
      `
    },
    {
      id: 'microela4-linear',
      type: 'text' as const,
      content: `
## Elasticity Along a Straight-Line Supply Curve

At any point, elasticity equals the curve's quantity response per dollar times the ratio of price to quantity:

$$\\text{PES} = \\frac{\\Delta Q_s}{\\Delta P} \\times \\frac{P}{Q_s}$$

For straight-line supply curves, **where the line meets an axis** tells you the answer everywhere on the curve.

### Worked Example: Three Supply Curves at a Price of \\$4

Each curve adds 10 units for every \\$1 increase in price, so each has the same slope.

| Supply curve | Where it meets an axis | Qs at P = \\$4 | PES at P = \\$4 | Classification |
|---|---|---|---|---|
| Qs = 10P | Starts at the origin | 40 | 10 × 4 ÷ 40 = **1** | Unit elastic |
| Qs = −20 + 10P | Price axis, at P = \\$2 | 20 | 10 × 4 ÷ 20 = **2** | Elastic |
| Qs = 20 + 10P | Quantity axis, at Q = 20 | 60 | 10 × 4 ÷ 60 = **0.67** | Inelastic |

### The Intercept Rule

- A straight supply line through the **origin** is unit elastic at **every** point, whatever its slope.
- A straight supply line that meets the **price axis** (sellers need a minimum price before supplying anything) is **elastic** at every point.
- A straight supply line that meets the **quantity axis** (some output is supplied even at a zero price) is **inelastic** at every point.

> ⚠️ **Common trap:** As with demand, slope alone does not determine elasticity. All three lines above are parallel, yet one is elastic, one is unit elastic, and one is inelastic.
      `
    },
    {
      id: 'microela4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** The price of lumber rises 10 percent, and quantity supplied rises 25 percent. What is the PES? (one decimal)

**2)** A supply curve is Qs = −50 + 25P. What is the PES at a price of \\$10? (two decimals)

**3)** A supply curve is Qs = 30 + 10P. What is the PES at a price of \\$3? (one decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '1.25', '0.5'],
        hint1: 'Quantity supplied goes on top: 25 ÷ 10.',
        hint2: 'At P = \\$10, Qs = −50 + 250 = 200. Then PES = 25 × 10 ÷ 200.',
        hint3: 'At P = \\$3, Qs = 30 + 30 = 60. Then PES = 10 × 3 ÷ 60.',
        explanation: '1) 25 ÷ 10 = 2.5, elastic. 2) Qs = 200 at \\$10, so PES = 250 ÷ 200 = 1.25, elastic, as expected for a line that meets the price axis. 3) Qs = 60 at \\$3, so PES = 30 ÷ 60 = 0.5, inelastic, as expected for a line that meets the quantity axis.'
      }
    },
    {
      id: 'microela4-runs',
      type: 'text' as const,
      content: `
## Short Run Versus Long Run

The same demand increase has very different effects depending on how elastic supply is.

### Worked Example: Avocado Demand Rises (hypothetical numbers)

Suppose a health trend raises demand for avocados. New trees take several years to bear fruit.

| Period | Supply curve | Price per avocado | Quantity (millions) |
|---|---|---|---|
| Before the trend | — | \\$1.00 | 100 |
| Short run (this season) | Steep: only existing trees | \\$1.50 | 105 |
| Long run (after new orchards mature) | Much flatter: new land and trees | \\$1.15 | 130 |

In the short run, PES = 5% ÷ 50% = **0.1**: almost all of the demand increase shows up as a higher **price**. In the long run, growers plant new orchards and the market supplies far more at a much smaller price increase: almost all of the adjustment shows up as higher **quantity**.

### The General Lesson

| Supply | Effect of a demand increase |
|---|---|
| Perfectly inelastic | Price rises; quantity does not change |
| Inelastic | Large price rise, small quantity rise |
| Elastic | Small price rise, large quantity rise |
| Perfectly elastic | Quantity rises; price does not change |

> 🔑 **AP Connection:** Elasticity of supply also matters for taxes: the side of the market that is **less** elastic bears **more** of a tax. A good with inelastic supply, such as land, places most of a tax on sellers. The Government Intervention topic works through tax incidence with graphs.
      `
    },
    {
      id: 'microela4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A stadium has a fixed number of seats for Saturday\'s game. If demand for tickets increases, the market will see',
            options: [
              'a higher price and the same quantity',
              'a higher quantity and the same price',
              'a higher price and a higher quantity',
              'a lower price and a higher quantity'
            ],
            correctAnswer: 0,
            explanation: 'A fixed number of seats means supply is perfectly inelastic, a vertical line, so a rightward shift in demand can only raise the price. Quantity would rise only if more seats could be added.'
          },
          {
            question: 'A supply curve is a straight line that begins at the origin. Along this curve, the price elasticity of supply is',
            options: [
              'equal to 1 at every point',
              'greater than 1 at every point',
              'less than 1 at every point',
              'equal to the slope of the line'
            ],
            correctAnswer: 0,
            explanation: 'For a line through the origin, quantity is proportional to price, so any percent change in price produces the same percent change in quantity, giving a PES of 1 everywhere. A line meeting the price axis is elastic throughout, and one meeting the quantity axis is inelastic throughout.'
          },
          {
            question: 'The price elasticity of supply for a good is generally greater when',
            options: [
              'producers have more time to adjust their output',
              'the good is perishable and costly to store',
              'factories are already running at full capacity',
              'the inputs needed are scarce and specialized'
            ],
            correctAnswer: 0,
            explanation: 'More time lets firms expand plants and lets new firms enter, so quantity supplied responds more to price. Perishable goods, full capacity, and scarce specialized inputs all limit how much output can change, which makes supply less elastic.'
          }
        ]
      }
    }
  ]
}
