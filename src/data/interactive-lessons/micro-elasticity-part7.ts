export const microElasticityPart7Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {
      id: 'microela7-intro',
      type: 'text' as const,
      content: `
# 📏 Elasticity

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Four Elasticities at a Glance |
| Which Elasticity Is It? |
| Where Elasticity Shows Up Next |

> 🔑 **Key Concept:** Every elasticity has the same shape: the **percent change in quantity** divided by the **percent change in whatever caused it**. What differs is the cause (own price, another good's price, or income), whose quantity responds (buyers or sellers), and whether the sign matters.
      `
    },
    {
      id: 'microela7-map',
      type: 'text' as const,
      content: `
## 📖 The Four Elasticities at a Glance

| Elasticity | Formula | Sign | Key thresholds | What it tells you |
|---|---|---|---|---|
| **Price elasticity of demand** | %ΔQd ÷ %ΔP | Report the absolute value | Above 1 elastic, 1 unit elastic, below 1 inelastic | How buyers respond to the good's own price; predicts total revenue |
| **Price elasticity of supply** | %ΔQs ÷ %ΔP | Normally positive | Same thresholds as PED | How sellers respond to the good's own price |
| **Cross-price elasticity** | %ΔQd of A ÷ %ΔP of B | Keep the sign | Positive substitutes, negative complements, zero unrelated | How two goods are related |
| **Income elasticity** | %ΔQd ÷ %ΔIncome | Keep the sign | Negative inferior, 0 to 1 necessity, above 1 luxury | How demand responds to income |

### Graph Facts

| Curve | Elasticity |
|---|---|
| Vertical demand or supply | 0 everywhere (perfectly inelastic) |
| Horizontal demand or supply | Infinite everywhere (perfectly elastic) |
| Straight downward-sloping demand line | Elastic above the midpoint, unit elastic at the midpoint, inelastic below |
| Straight supply line through the origin | Unit elastic everywhere |
| Straight supply line meeting the price axis | Elastic everywhere |
| Straight supply line meeting the quantity axis | Inelastic everywhere |

### Determinants Side by Side

| Price elasticity of demand is higher when... | Price elasticity of supply is higher when... |
|---|---|
| Close substitutes are available | Producers have more time to adjust |
| The good is a luxury rather than a necessity | Firms have spare capacity or inventories |
| The good takes a large share of the budget | Inputs are easy to obtain and move between uses |
| Buyers have more time to adjust | The good is easy to store |
| The market is narrowly defined (one brand) | Production is quick and simple |

### Total Revenue Summary

- Inelastic demand: price and total revenue move in the **same** direction.
- Elastic demand: price and total revenue move in **opposite** directions.
- Unit elastic demand: total revenue does not change, and on a straight-line demand curve this midpoint is where total revenue is **greatest**.
      `
    },
    {
      id: 'microela7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When the price of gasoline rises 20 percent, bus ridership rises 6 percent. Which measure does this describe, and what is its value?',
            options: [
              'Cross-price elasticity of +0.3',
              'Price elasticity of demand of 0.3',
              'Cross-price elasticity of −0.3',
              'Cross-price elasticity of +3.33'
            ],
            correctAnswer: 0,
            explanation: 'The quantity of bus rides responds to the price of a different good, gasoline, so this is cross-price elasticity: +6% ÷ +20% = +0.3. The positive sign means buses and driving are substitutes. The value 3.33 inverts the ratio, and price elasticity of demand would require a change in the bus fare itself.'
          },
          {
            question: 'A seller faces a price elasticity of demand of 2.0 and cuts its price by 5 percent. What happens?',
            options: [
              'Quantity rises 10 percent, and revenue rises',
              'Quantity rises 10 percent, and revenue falls',
              'Quantity rises 2.5 percent, and revenue falls',
              'Quantity rises 2.5 percent, and revenue rises'
            ],
            correctAnswer: 0,
            explanation: 'Quantity demanded changes by 2.0 × 5% = 10%, which is larger than the 5% price cut, so total revenue rises. The figure 2.5 percent divides instead of multiplying, and with elastic demand a price cut raises revenue rather than lowering it.'
          },
          {
            question: 'Which statement about a straight-line, downward-sloping demand curve is correct?',
            options: [
              'Its slope is constant, but its elasticity changes along it',
              'Both its slope and its elasticity stay constant along it',
              'Its elasticity is constant, but its slope changes',
              'It is elastic at low prices and inelastic at high'
            ],
            correctAnswer: 0,
            explanation: 'Every equal price change brings the same quantity change, so the slope is constant, but the percentages change because the base price and quantity change. Demand is elastic at high prices, above the midpoint, and inelastic at low prices, below it.'
          }
        ]
      }
    },
    {
      id: 'microela7-steps',
      type: 'text' as const,
      content: `
## Which Elasticity Is It?

### Five Steps for Any Elasticity Question

1. **What changed first?** The good's own price, another good's price, or income.
2. **Whose quantity responded?** Buyers (demand) or sellers (supply).
3. **Compute:** percent change in quantity on top, percent change in the cause on the bottom.
4. **Handle the sign:** absolute value for PED; keep the sign for XED and YED; PES is normally positive.
5. **Classify and apply:** elastic or inelastic, substitutes or complements, normal or inferior, and then predict total revenue or the direction of a shift.

### Worked Example: One Shock, Five Elasticities

The price of gasoline rises 20%. Here is what happens in five related measurements (hypothetical numbers):

| What responded | Percent change | Elasticity | Classification |
|---|---|---|---|
| Gasoline purchases this month | −4% | PED = 4 ÷ 20 = **0.2** | Inelastic, so gas station revenue **rises** |
| Purchases of large SUVs | −10% | XED = −10 ÷ 20 = **−0.5** | Complements of gasoline |
| Bus ridership | +6% | XED = +6 ÷ 20 = **+0.3** | Substitutes for driving |
| Oil output, first six months | +2% | PES = 2 ÷ 20 = **0.1** | Very inelastic short-run supply |
| Oil output, after five years | +16% | PES = 16 ÷ 20 = **0.8** | More elastic with time, though still inelastic |

Notice how every row uses step 1 to pick the formula: gasoline's own price for gasoline buyers and oil producers, and a related good's price for SUVs and buses.
      `
    },
    {
      id: 'microela7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Price and total revenue move in the same direction when demand is ___',
            options: ['inelastic', 'elastic', 'unit elastic', 'perfectly elastic']
          },
          {
            label: 'On a straight-line demand curve, total revenue is greatest at the point where demand is ___',
            options: ['unit elastic', 'elastic', 'inelastic', 'perfectly inelastic']
          },
          {
            label: 'A good with an income elasticity of 0.3 is a normal good and a ___',
            options: ['necessity', 'luxury', 'complement', 'substitute']
          }
        ],
        correctAnswers: ['inelastic', 'unit elastic', 'necessity'],
        hint1: 'Which effect wins when buyers barely respond: the price effect or the quantity effect?',
        hint2: 'Revenue rises while demand is elastic and falls once it is inelastic.',
        hint3: 'The value is positive but below 1.',
        explanation: 'With inelastic demand, the price effect beats the quantity effect, so price and revenue move together. Total revenue peaks at the unit-elastic midpoint of a straight-line demand curve. An income elasticity between 0 and 1 marks a normal good that is a necessity; complements and substitutes come from cross-price elasticity.'
      }
    },
    {
      id: 'microela7-connections',
      type: 'text' as const,
      content: `
## Where Elasticity Shows Up Next

| Later topic | How elasticity is used |
|---|---|
| **Government intervention (Unit 2)** | The side of the market that is less elastic bears more of a tax, and taxes on goods with inelastic demand or supply create smaller deadweight losses. |
| **Perfect competition (Unit 3)** | Each firm faces a perfectly elastic (horizontal) demand curve at the market price, so price equals marginal revenue. |
| **Monopoly (Unit 4)** | A monopolist never produces where demand is inelastic, because marginal revenue is negative in that range. |
| **Price discrimination (Unit 4)** | A firm charges higher prices to groups with less elastic demand, such as business travelers, and lower prices to groups with more elastic demand, such as students. |

### Final Checklist

- Quantity goes on top, every time.
- PED: absolute value. XED and YED: keep the sign.
- Slope is not elasticity; compare slopes only at a shared point.
- Straight-line demand: elastic above the midpoint, unit elastic at it, inelastic below it, and total revenue is greatest at the midpoint.
- Supply becomes more elastic with time.
- When explaining, compare **percentages**.
      `
    },
    {
      id: 'microela7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government wants to raise tax revenue while changing how much buyers purchase as little as possible. It should tax a good whose demand is',
            options: [
              'inelastic, with few or no close substitutes',
              'elastic, with many close substitutes',
              'unit elastic, with some substitutes',
              'perfectly elastic at the market price'
            ],
            correctAnswer: 0,
            explanation: 'When demand is inelastic, buyers cut purchases only slightly after a tax raises the price, so the tax base stays large and behavior changes little. Elastic or perfectly elastic demand would shrink purchases sharply and raise less revenue.'
          },
          {
            question: 'A firm in a perfectly competitive market can sell all it wants at the market price but nothing above it. The demand curve facing this firm is',
            options: [
              'perfectly elastic',
              'perfectly inelastic',
              'unit elastic',
              'relatively inelastic'
            ],
            correctAnswer: 0,
            explanation: 'Any price above the market price drives the firm\'s quantity demanded to zero, which is the defining feature of a horizontal, perfectly elastic demand curve. A perfectly inelastic curve would be vertical, with the same quantity at every price.'
          },
          {
            question: 'Which observation would show that two goods are complements?',
            options: [
              'A higher price for one lowers sales of the other',
              'A higher price for one increases sales of the other',
              'Higher income lowers sales of both goods together',
              'Higher income raises sales of one and not the other'
            ],
            correctAnswer: 0,
            explanation: 'Complements have a negative cross-price elasticity: when one becomes more expensive, people buy less of the pair. A price rise that increases sales of the other good marks substitutes, and responses to income describe normal and inferior goods instead.'
          }
        ]
      }
    }
  ]
}
