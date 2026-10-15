export const microMonopolisticOligopolyPart2Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromon2-intro',
      type: 'text' as const,
      content: `
# 💰 Monopolistic Competition & Oligopoly

**Part 2 of 7 — The Monopolistic Competition Graph in Depth**

---

| Section |
|---------|
| 📖 The Firm's Demand Curve |
| A Short-Run Profit, Worked from a Table |
| The Long-Run Adjustment |
| Comparing the Three Long-Run Outcomes |

> 🔑 **Key Concept:** In the short run, a monopolistically competitive firm is solved exactly like a monopoly: **MR = MC** for quantity, the **demand curve** for price, and **(P − ATC) × Q** for profit. What makes it different is the long run. Free entry and exit move each firm's demand curve until it is **tangent** to ATC, so profit is zero, P > MC, and output sits below the minimum-ATC quantity.
      `
    },
    {
      id: 'micromon2-demand',
      type: 'text' as const,
      content: `
## 📖 The Firm's Demand Curve

A nail salon, a taco truck and a clothing brand each sell something a little different from their rivals. That difference is why the firm's demand curve **slopes down**: if the salon raises its price by \\$1, it loses some customers but not all of them, because some prefer its location, its staff or its style.

But every one of those firms also has **many close substitutes** a short walk or a click away. So its demand is **relatively elastic**, flatter than a monopolist's demand for a product with no close substitute.

| Feature | Perfect competition | Monopolistic competition | Monopoly |
|---|---|---|---|
| Firm's demand curve | Horizontal at the market price | Downward sloping, relatively elastic | Downward sloping, the market demand |
| MR compared with P | MR = P | MR < P | MR < P |
| Why | Identical products | Differentiated products, many substitutes | No close substitutes |

Because the demand curve slopes down, the firm must cut its price on **every** unit to sell one more, so **MR lies below demand**. For a straight-line demand curve, MR has the same vertical intercept and twice the slope, just as you saw for monopoly.

> 🔑 **AP Connection:** The AP exam often asks you to draw "a correctly labeled graph for a monopolistically competitive firm." It needs the same curves as a monopoly graph: **D, MR, MC and ATC**, with MR below D. The difference shows up in where ATC sits relative to D.
      `
    },
    {
      id: 'micromon2-shortrun',
      type: 'text' as const,
      content: `
## A Short-Run Profit, Worked from a Table

Polished, a nail salon, faces the demand and cost schedule below for manicures per hour. Its fixed cost is \\$20 per hour.

| Q | Price | Total revenue | MR | Total cost | MC | ATC |
|---|---|---|---|---|---|---|
| 1 | \\$22 | \\$22 | \\$22 | \\$28 | \\$8 | \\$28.00 |
| 2 | \\$20 | \\$40 | \\$18 | \\$34 | \\$6 | \\$17.00 |
| 3 | \\$18 | \\$54 | \\$14 | \\$39 | \\$5 | \\$13.00 |
| 4 | \\$16 | \\$64 | \\$10 | \\$45 | \\$6 | \\$11.25 |
| 5 | \\$14 | \\$70 | \\$6 | \\$53 | \\$8 | \\$10.60 |
| 6 | \\$12 | \\$72 | \\$2 | \\$64 | \\$11 | \\$10.67 |

### Step 1: Quantity
Produce every unit whose MR is at least its MC. Units 1 to 4 pass (\\$10 ≥ \\$6 for the 4th). The 5th unit fails (\\$6 < \\$8). **Q = 4.**

### Step 2: Price
Read the price from the **demand** column, not the MR column: **P = \\$16.**

### Step 3: Profit
Profit = (P − ATC) × Q = (\\$16 − \\$11.25) × 4 = **\\$19 per hour**. Check: TR − TC = \\$64 − \\$45 = \\$19 ✓.

On a graph, the profit is a rectangle: height from ATC (\\$11.25) up to price (\\$16), width 4 units. Demand lies **above** ATC at the chosen quantity, which is the signature of a short-run profit.

Notice that the salon is **not** producing at minimum ATC (\\$10.60 at 5 manicures). A firm maximizes profit, not efficiency, and the two rarely line up when demand slopes down.
      `
    },
    {
      id: 'micromon2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Polished\'s fixed cost rises from \\$20 to \\$30 per hour, with demand and marginal cost unchanged. What happens to its short-run quantity and price?',
            options: [
              'Quantity stays at 4 and price stays at \\$16',
              'Quantity falls to 3 and price rises to \\$18',
              'Quantity stays at 4 and price rises to \\$18.50',
              'Quantity rises to 5 as the firm spreads its fixed cost'
            ],
            correctAnswer: 0,
            explanation: 'A fixed cost changes neither MR nor MC, so the MR = MC choice and the demand price are unchanged; profit simply falls by \\$10 to \\$9. Raising the price or spreading the cost over more units treats a fixed cost as if it were marginal.'
          },
          {
            question: 'Which feature of a monopolistically competitive firm explains why its marginal revenue is below its price?',
            options: [
              'Each extra sale requires a lower charge on every unit',
              'Its marginal cost rises as it serves more customers',
              'Rival firms can enter the market whenever profit exists',
              'Its fixed costs are spread across a small output level'
            ],
            correctAnswer: 0,
            explanation: 'A downward-sloping demand curve means the extra sale requires a lower price on every unit, so the revenue from the extra unit is less than its price. Rising MC, free entry and fixed costs affect costs and the long run, not the MR curve.'
          }
        ]
      }
    },
    {
      id: 'micromon2-longrun',
      type: 'text' as const,
      content: `
## The Long-Run Adjustment

Polished's \\$19 profit is visible to everyone. Because **barriers to entry are low**, new salons open nearby. Each new rival takes some of Polished's customers, which does two things to its demand curve:

1. It shifts **left**: fewer manicures are demanded at every price.
2. It becomes **more elastic**: customers now have even more close substitutes.

Entry continues until the firm can no longer earn a profit. Suppose Polished's demand falls by \\$5 at every quantity, so that P = 19 − 2Q. Costs are unchanged.

| Q | Price | Total revenue | MR | Total cost | MC | ATC | Profit |
|---|---|---|---|---|---|---|---|
| 2 | \\$15 | \\$30 | \\$13 | \\$34 | \\$6 | \\$17.00 | −\\$4 |
| 3 | \\$13 | \\$39 | \\$9 | \\$39 | \\$5 | \\$13.00 | \\$0 |
| 4 | \\$11 | \\$44 | \\$5 | \\$45 | \\$6 | \\$11.25 | −\\$1 |
| 5 | \\$9 | \\$45 | \\$1 | \\$53 | \\$8 | \\$10.60 | −\\$8 |

The best Polished can now do is **Q = 3 at P = \\$13**, where P = ATC and **economic profit is zero**. At every other quantity, price is below ATC. That is what **tangency** means: the demand curve touches the ATC curve at exactly one point and lies below it everywhere else.

### Reading the Long-Run Result

| Measure | Value | What it shows |
|---|---|---|
| Economic profit | \\$0 | Entry has stopped; there is no reason to enter or exit |
| P compared with MC | \\$13 > \\$5 | **Allocatively inefficient**: buyers value another manicure more than it costs |
| Output compared with minimum-ATC output | 3 < 5 | **Excess capacity** of 2 manicures per hour |
| ATC compared with minimum ATC | \\$13.00 > \\$10.60 | **Productively inefficient**: each manicure costs more than it could |

### Why the Tangency Must Be on the Falling Part of ATC
Demand slopes down, so the only place it can just touch a U-shaped ATC curve is where ATC is **also** sloping down, to the left of the minimum. That geometry is why every long-run monopolistic competitor has excess capacity. Only a horizontal demand curve (perfect competition) can touch ATC at its minimum.

### The Loss Case Runs in Reverse
If firms are losing money, some **exit**. The remaining firms' demand curves shift **right** until they are again tangent to ATC, and profit rises back to zero.

> ⚠️ **Common trap:** Students draw the long-run demand curve crossing ATC at two points. If demand cuts through ATC, there is a range of output where P > ATC, so profit is still positive and entry has not finished. The long-run curve must **touch** ATC at the MR = MC quantity.
      `
    },
    {
      id: 'micromon2-input',
      type: 'input-boxes' as const,
      content: `
**Measure the Long Run** ✍️

A monopolistically competitive bakery is in long-run equilibrium, selling 40 cakes per day at \\$15 each. At 40 cakes its marginal cost is \\$9. Its ATC curve reaches its minimum of \\$12 at 60 cakes.

1) What is the bakery's economic profit? (dollars, number only)

2) By how many dollars does price exceed marginal cost?

3) How many cakes of excess capacity does the bakery have?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '6', '20'],
        hint1: 'In long-run equilibrium, demand is tangent to ATC, so what is P − ATC?',
        hint2: 'Subtract MC at the chosen quantity from the price.',
        hint3: 'Excess capacity compares the minimum-ATC quantity with the quantity actually produced.',
        explanation: '1) Long-run equilibrium means P = ATC, so profit is \\$0. 2) \\$15 − \\$9 = \\$6, the markup that makes the outcome allocatively inefficient. 3) 60 − 40 = 20 cakes of excess capacity. Note that ATC at 40 cakes equals the \\$15 price, which is above the \\$12 minimum.'
      }
    },
    {
      id: 'micromon2-compare',
      type: 'text' as const,
      content: `
## Comparing the Three Long-Run Outcomes

| Long-run result | Perfect competition | Monopolistic competition | Monopoly |
|---|---|---|---|
| Economic profit | Zero | **Zero** | Can stay positive |
| Why | Free entry | **Free entry** | Barriers block entry |
| P compared with MC | P = MC | **P > MC** | P > MC |
| Output compared with minimum-ATC output | Equal | **Less (excess capacity)** | Generally not equal |
| Where D meets ATC | Horizontal D touches minimum ATC | **D tangent to falling ATC** | D can lie above ATC |

Monopolistic competition borrows one feature from each neighbor:

- From **monopoly**, it takes the downward-sloping demand curve, so P > MC and there is a deadweight loss.
- From **perfect competition**, it takes free entry, so long-run profit is zero.

### How Close to Efficient?
The more elastic the firm's demand (the more alike the rival products), the flatter the demand curve, the closer the tangency moves to the minimum of ATC, and the smaller the excess capacity and markup. If products were identical, the demand curve would be horizontal and the market would become perfectly competitive.

> 🔑 **AP Connection:** A frequent multiple-choice question asks what monopolistic competition and perfect competition have **in common** in the long run. The answer is **zero economic profit**. Questions about how they **differ** point to P > MC and excess capacity.
      `
    },
    {
      id: 'micromon2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Several monopolistically competitive gyms in a town are earning economic losses. As the long run approaches, each remaining gym\'s demand curve',
            options: [
              'shifts right until it is tangent to average total cost',
              'shifts left until price equals marginal cost',
              'becomes horizontal at the minimum of average total cost',
              'stays put while the gyms raise their prices'
            ],
            correctAnswer: 0,
            explanation: 'Exit sends the departing gyms\' customers to the survivors, shifting their demand right until P = ATC at the profit-maximizing quantity. Price never falls to MC in this market, and only identical products would make demand horizontal.'
          },
          {
            question: 'In long-run equilibrium, a monopolistically competitive firm sells 200 units at \\$8, with a marginal cost of \\$5. Its average total cost is minimized at 260 units. Which statement is correct?',
            options: [
              'Its ATC at 200 units is \\$8 and it has excess capacity',
              'Its ATC at 200 units is \\$5 and it earns profit',
              'It is allocatively efficient but has excess capacity',
              'It should expand to 260 units so that it can earn a profit'
            ],
            correctAnswer: 0,
            explanation: 'Long-run tangency means ATC equals the \\$8 price at 200 units, and 260 − 200 = 60 units of excess capacity remain. Price exceeds MC, so it is not allocatively efficient, and moving to 260 units would require a price below ATC.'
          },
          {
            question: 'Why does a monopolistically competitive firm\'s long-run tangency point lie to the left of the minimum of its ATC curve?',
            options: [
              'Its downward-sloping demand can only touch ATC where ATC is falling',
              'Its marginal cost curve crosses ATC to the left of the minimum',
              'New entrants push its fixed costs higher until ATC is falling',
              'Advertising costs move the minimum of ATC to a larger output'
            ],
            correctAnswer: 0,
            explanation: 'A downward-sloping line can only be tangent to a U-shaped curve where that curve also slopes down, which is left of the minimum. MC crosses ATC exactly at its minimum, and entry shifts demand rather than raising the firm\'s costs.'
          }
        ]
      }
    }
  ]
}
