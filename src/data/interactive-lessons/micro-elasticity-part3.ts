export const microElasticityPart3Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {
      id: 'microela3-intro',
      type: 'text' as const,
      content: `
# 📏 Elasticity

**Part 3 of 7 — Elasticity and Total Revenue**

---

| Section |
|---------|
| 📖 Why the Total Revenue Test Works |
| Total Revenue Along a Straight-Line Demand Curve |
| Revenue Puzzles in the Real World |

> 🔑 **Key Concept:** Total revenue (TR) is price times quantity. When price changes, the two pieces move in opposite directions, and **elasticity decides which piece wins**. That single idea explains the total revenue test, why revenue peaks at the midpoint of a straight-line demand curve, and why a great harvest can leave farmers poorer.
      `
    },
    {
      id: 'microela3-trtest',
      type: 'text' as const,
      content: `
## 📖 Why the Total Revenue Test Works

$$TR = P \\times Q$$

When a seller raises its price, two things happen at once:

- **Price effect:** each unit sold brings in more money, which pushes TR **up**.
- **Quantity effect:** fewer units are sold, which pushes TR **down**.

For small changes, the percent change in TR is roughly the percent change in price plus the percent change in quantity. Elasticity tells you which effect is bigger.

| Demand | Which effect is bigger? | Price ↑ | Price ↓ |
|---|---|---|---|
| Elastic (PED > 1) | Quantity effect | TR falls | TR rises |
| Unit elastic (PED = 1) | Neither, they cancel | TR unchanged | TR unchanged |
| Inelastic (PED < 1) | Price effect | TR rises | TR falls |

**Memory hook:** with inelastic demand, price and TR move in the **same** direction. With elastic demand, they move in **opposite** directions.

### Worked Example A: Inelastic Demand

A theater raises its ticket price from \\$10 to \\$12 (+20%). Weekly attendance falls from 1,000 to 900 (−10%).

- PED = 10 ÷ 20 = **0.5**, inelastic
- TR before: \\$10 × 1,000 = **\\$10,000**
- TR after: \\$12 × 900 = **\\$10,800**

Revenue **rose** \\$800 after a price increase, exactly what inelastic demand predicts.

### Worked Example B: Elastic Demand

A gym raises its monthly fee from \\$50 to \\$60 (+20%). Membership falls from 400 to 280 (−30%).

- PED = 30 ÷ 20 = **1.5**, elastic
- TR before: \\$50 × 400 = **\\$20,000**
- TR after: \\$60 × 280 = **\\$16,800**

Revenue **fell** \\$3,200. The quantity effect overwhelmed the price effect.

### Worked Example C: Unit Elastic Demand

A shop cuts a price from \\$25 to \\$20, and sales rise from 80 to 100.

- TR before: \\$25 × 80 = \\$2,000. TR after: \\$20 × 100 = \\$2,000. **Unchanged.**
- Midpoint method: price changes 5 ÷ 22.5 = 22.2%, and quantity changes 20 ÷ 90 = 22.2%, so PED = **1.0**.

> 🔑 **AP Connection:** The total revenue test matches the midpoint method exactly. With simple percent changes, a result very close to 1 can land slightly on either side (here, 25% ÷ 20% = 1.25), so when revenue is literally unchanged, the answer is **unit elastic**.
      `
    },
    {
      id: 'microela3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A city raises transit fares by 10 percent, and total fare revenue rises. In this price range, demand for transit rides must be',
            options: [
              'inelastic',
              'elastic',
              'unit elastic',
              'perfectly elastic'
            ],
            correctAnswer: 0,
            explanation: 'When price and total revenue move in the same direction, the price effect beat the quantity effect, so demand is inelastic. With elastic or perfectly elastic demand, a fare increase would lower revenue, and with unit elastic demand revenue would not change.'
          },
          {
            question: 'A bakery cuts the price of a cake from \\$20 to \\$16, and weekly sales rise from 50 to 70 cakes. Which statement is correct?',
            options: [
              'Revenue rises to \\$1,120, so demand is elastic',
              'Revenue rises to \\$1,120, so demand is inelastic',
              'Revenue falls to \\$800, so demand is elastic',
              'Revenue falls to \\$800, so demand is inelastic'
            ],
            correctAnswer: 0,
            explanation: 'Revenue goes from \\$20 × 50 = \\$1,000 to \\$16 × 70 = \\$1,120. A price cut that raises revenue means demand is elastic. The \\$800 figure multiplies the new price by the old quantity and ignores the extra cakes sold.'
          },
          {
            question: 'Demand for a concert is elastic, and the promoter raises ticket prices. Total revenue falls mainly because',
            options: [
              'the quantity effect outweighs the price effect',
              'the price effect outweighs the quantity effect',
              'the demand curve for tickets shifts to the left',
              'the promoter must pay more for each extra show'
            ],
            correctAnswer: 0,
            explanation: 'With elastic demand, the percentage drop in tickets sold is larger than the percentage rise in price, so the lost sales outweigh the higher price per ticket. A price change moves buyers along the demand curve rather than shifting it, and costs do not enter total revenue.'
          }
        ]
      }
    },
    {
      id: 'microela3-linear',
      type: 'text' as const,
      content: `
## Total Revenue Along a Straight-Line Demand Curve

Return to the demand curve from Part 2, **Qd = 100 − 10P**. Compute TR at every whole-dollar price:

| Price | Quantity | Total revenue | Change in TR from the row above | Range |
|---|---|---|---|---|
| \\$10 | 0 | \\$0 | — | Elastic |
| \\$9 | 10 | \\$90 | +\\$90 | Elastic |
| \\$8 | 20 | \\$160 | +\\$70 | Elastic |
| \\$7 | 30 | \\$210 | +\\$50 | Elastic |
| \\$6 | 40 | \\$240 | +\\$30 | Elastic |
| **\\$5** | **50** | **\\$250** | **+\\$10** | **Unit elastic** |
| \\$4 | 60 | \\$240 | −\\$10 | Inelastic |
| \\$3 | 70 | \\$210 | −\\$30 | Inelastic |
| \\$2 | 80 | \\$160 | −\\$50 | Inelastic |
| \\$1 | 90 | \\$90 | −\\$70 | Inelastic |
| \\$0 | 100 | \\$0 | −\\$90 | Inelastic |

### What the Table Shows

1. **Elastic range (\\$10 down to \\$5):** every price cut **raises** TR.
2. **Unit-elastic midpoint (\\$5, 50 units):** TR reaches its **maximum**, \\$250.
3. **Inelastic range (\\$5 down to \\$0):** every price cut **lowers** TR.

Described as a graph: put quantity on the horizontal axis and dollars on the vertical axis. The TR curve is a hill that starts at \\$0 when Q = 0, rises to a peak of \\$250 at Q = 50, and falls back to \\$0 at Q = 100. The peak sits directly below the midpoint of the demand curve.

> ⚠️ **Common trap:** The revenue-maximizing price is **not** the highest price and not the lowest price. It is the price at the **unit-elastic midpoint**. Slope is constant along the demand curve, but TR is not.

### A Preview of Marginal Revenue

The "change in TR" column is the revenue gained or lost from selling 10 more units. In the elastic range it is **positive**, at the midpoint it reaches **zero**, and in the inelastic range it is **negative**. Marginal revenue (MR) is that change per unit.

For a straight-line demand curve written as P = 10 − 0.1Q, the MR line has the **same price intercept and twice the slope**: MR = 10 − 0.2Q. MR equals 0 at Q = 50, exactly where TR peaks.

> 🔑 **AP Connection:** In Unit 4, a firm with market power (such as a monopoly) never produces where demand is inelastic. There MR is negative, so cutting output would **raise** revenue and **lower** costs at the same time, which always raises profit.
      `
    },
    {
      id: 'microela3-input',
      type: 'input-boxes' as const,
      content: `
**Find the Revenue Peak** 🧮

A food truck faces the demand curve **Qd = 200 − 20P**, where P is in dollars.

**1)** At what price is total revenue maximized? (dollars, number only)

**2)** How many meals are sold at that price?

**3)** What is the maximum total revenue? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '100', '500'],
        hint1: 'Find the price intercept by setting Qd = 0. The unit-elastic midpoint is at half of it.',
        hint2: 'Substitute your price into Qd = 200 − 20P, or take half of the quantity intercept.',
        hint3: 'TR = P × Q at the midpoint.',
        explanation: 'The price intercept is \\$10 (200 − 20P = 0) and the quantity intercept is 200, so the midpoint is \\$5 and 100 meals. Demand is unit elastic there, so TR peaks at \\$5 × 100 = \\$500. Any higher price is in the elastic range and any lower price is in the inelastic range, and both earn less.'
      }
    },
    {
      id: 'microela3-cases',
      type: 'text' as const,
      content: `
## Revenue Puzzles in the Real World

### Case 1: The Bumper-Crop Paradox

Demand for wheat is **inelastic**: people do not eat much more bread when wheat is cheap. Suppose ideal weather increases the supply of wheat, shifting the supply curve to the right.

| | Price per bushel | Bushels sold | Farm revenue |
|---|---|---|---|
| Normal harvest | \\$5.00 | 100 million | \\$500 million |
| Bumper harvest | \\$3.50 | 110 million | \\$385 million |

Price falls 30% but quantity rises only 10%, so total farm revenue **falls** by \\$115 million. A great harvest makes farmers as a group poorer. The same logic explains why farm groups have historically supported programs that limit output.

### Case 2: Pricing Decisions

| Situation | Elasticity | Revenue-raising move |
|---|---|---|
| A transit agency needs more fare revenue | Inelastic (few alternatives in the short run) | Raise fares |
| One brand of cereal competes with dozens of others | Elastic (many substitutes) | Cut the price or run a sale |
| A city taxes cigarettes to raise money | Inelastic (habit-forming, few substitutes) | Raise the tax; purchases fall only a little |

### Case 3: A Brief Look at Taxes

Taxes on goods with inelastic demand raise more revenue and change behavior less. When demand is more inelastic than supply, **buyers** bear most of the burden of a tax. The Government Intervention topic covers tax incidence and deadweight loss in full.

> 🔑 **AP Connection:** Free-response questions often ask, "Will total revenue increase, decrease, or stay the same? Explain." A full answer names the elasticity and compares the percent changes: "Demand is inelastic, so the percentage fall in quantity is smaller than the percentage rise in price, and total revenue increases."
      `
    },
    {
      id: 'microela3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A firm faces the demand curve Qd = 60 − 4P. Which price maximizes the firm\'s total revenue?',
            options: [
              '\\$7.50',
              '\\$15.00',
              '\\$30.00',
              '\\$12.00'
            ],
            correctAnswer: 0,
            explanation: 'The price intercept is \\$15 (where 60 − 4P = 0), and total revenue peaks at the unit-elastic midpoint, half of that price, or \\$7.50, where 30 units sell for \\$225. The figure \\$30 is half the quantity intercept, not a price.'
          },
          {
            question: 'Demand for wheat is price inelastic. A record harvest greatly increases the supply of wheat. What happens to farmers\' total revenue?',
            options: [
              'It rises, since farmers sell a much larger number of bushels',
              'It falls, since the price drops by more than quantity rises',
              'It rises, since the quantity rises by more than price drops',
              'It stays the same, since supply and demand both adjust'
            ],
            correctAnswer: 1,
            explanation: 'With inelastic demand, the price must fall sharply to persuade buyers to take the extra wheat, so the percentage price drop exceeds the percentage quantity increase and revenue falls. Selling more bushels does not raise revenue when each one sells for much less.'
          },
          {
            question: 'A monopolist would never choose an output on the inelastic portion of its demand curve. What is the reason?',
            options: [
              'Raising output there would raise revenue and lower cost',
              'Cutting output there would raise revenue and also lower cost',
              'Price there is always below the average total cost',
              'Demand there is perfectly flat, so profit is zero'
            ],
            correctAnswer: 1,
            explanation: 'In the inelastic range, marginal revenue is negative, so producing less and charging more would raise total revenue while also saving on production costs. Raising output there would lower revenue, and nothing about the inelastic range forces price below average total cost.'
          }
        ]
      }
    }
  ]
}
