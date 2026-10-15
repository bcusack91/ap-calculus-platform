export const microMonopolyPart2Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromon2-intro',
      type: 'text' as const,
      content: `
# 💰 Monopoly

**Part 2 of 7 — Monopoly Revenue and Elasticity**

---

| Section |
|---------|
| 📖 Total and Marginal Revenue from a Schedule |
| Marginal Revenue from a Demand Equation |
| Profit Maximization from a Table |
| Why a Monopoly Has No Supply Curve |

> 🔑 **Key Concept:** A monopolist faces the whole market demand curve, so selling one more unit means cutting the price on **every** unit. That makes marginal revenue fall below price, turn to zero at the revenue peak, and go negative after it. A profit-maximizing monopolist therefore always produces in the **elastic** part of demand.
      `
    },
    {
      id: 'micromon2-schedule',
      type: 'text' as const,
      content: `
## 📖 Total and Marginal Revenue from a Schedule

A small-town water park is the only one within 100 miles. Its daily demand for group passes is **P = 20 − 2Q** (price in dollars, Q in passes).

| Q | Price | Total revenue (P × Q) | Marginal revenue (ΔTR ÷ ΔQ) |
|---|---|---|---|
| 0 | \\$20 | \\$0 | — |
| 1 | \\$18 | \\$18 | \\$18 |
| 2 | \\$16 | \\$32 | \\$14 |
| 3 | \\$14 | \\$42 | \\$10 |
| 4 | \\$12 | \\$48 | \\$6 |
| 5 | \\$10 | \\$50 | \\$2 |
| 6 | \\$8 | \\$48 | −\\$2 |
| 7 | \\$6 | \\$42 | −\\$6 |

### Splitting MR into Two Effects

Take the move from 3 passes to 4. Price must fall from \\$14 to \\$12.

- **Output effect:** the 4th pass brings in its price, **+\\$12**.
- **Price effect:** the first 3 passes now sell for \\$2 less each, **−\\$6**.
- **Marginal revenue:** \\$12 − \\$6 = **\\$6**, which matches TR rising from \\$42 to \\$48.

For the first unit there is no earlier unit to discount, so MR equals price (\\$18). After that, the price effect grows with every unit, and MR falls below the price by a widening gap.

> 🔑 **AP Connection:** A perfectly competitive firm has no price effect, because it can sell more at the market price. That is why MR = P for the competitive firm but **MR < P** for every unit after the first for a monopolist.
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
            question: 'At the water park, moving from 5 passes to 6 lowers the price from \\$10 to \\$8. What is the marginal revenue of the sixth pass?',
            options: [
              '−\\$2',
              '\\$8',
              '\\$48',
              '\\$10'
            ],
            correctAnswer: 0,
            explanation: 'The sixth pass adds \\$8, but the first five passes each lose \\$2, a \\$10 loss, so MR = \\$8 − \\$10 = −\\$2. Total revenue falls from \\$50 to \\$48; \\$8 is the price and \\$48 is total revenue, not the change.'
          },
          {
            question: 'Why does a monopolist\'s marginal revenue fall faster than the price along a straight-line demand curve?',
            options: [
              'Each price cut also lowers the revenue earned on all earlier units',
              'Each lower price raises the cost of making the units already sold',
              'Total revenue falls each time the firm sells one more unit',
              'The firm must pay a higher wage to hire workers for each extra unit'
            ],
            correctAnswer: 0,
            explanation: 'MR combines the price of the new unit with the revenue lost by cutting the price on earlier units, and that second piece grows as output rises. Costs and wages affect marginal cost, not marginal revenue.'
          }
        ]
      }
    },
    {
      id: 'micromon2-equation',
      type: 'text' as const,
      content: `
## Marginal Revenue from a Demand Equation

For any straight-line **inverse demand** curve, written with price on the left:

$$P = a - bQ \\quad\\Rightarrow\\quad TR = aQ - bQ^2 \\quad\\Rightarrow\\quad MR = a - 2bQ$$

The MR line starts at the **same price intercept** (a) and has **twice the slope** (2b). It hits zero at **half** the quantity where demand hits zero.

### Worked Example

A patented allergy test has demand **Qd = 50 − 0.5P**.

1. **Rewrite as inverse demand.** 0.5P = 50 − Q, so **P = 100 − 2Q**. (Never double the slope of the Qd form; flip it first.)
2. **Write MR.** a = 100 and b = 2, so **MR = 100 − 4Q**.
3. **Find where MR = 0.** 100 − 4Q = 0, so **Q = 25** and P = 100 − 50 = **\\$50**.
4. **Total revenue there.** \\$50 × 25 = **\\$1,250**, the highest TR on this demand curve.

### MR and Elasticity Together

Part 3 of the Elasticity lesson showed that total revenue peaks at the midpoint of a straight-line demand curve. MR is the slope of that revenue hill, so:

| Range of the demand curve | Price elasticity | MR | Cutting price (selling more)... |
|---|---|---|---|
| Q from 0 to 25 (P above \\$50) | Elastic | Positive | raises TR |
| Q = 25 (P = \\$50) | Unit elastic | Zero | leaves TR at its peak |
| Q above 25 (P below \\$50) | Inelastic | Negative | lowers TR |

### Why a Monopolist Stays in the Elastic Range

Marginal cost is positive, and profit maximization needs MR = MC, so MR must also be **positive**. Positive MR happens only where demand is **elastic**. Suppose the firm were producing in the inelastic range. Cutting output would **raise** revenue (MR is negative) and **lower** cost, so profit would rise with every unit cut.

> 🔑 **AP Connection:** "A monopolist will never produce on the inelastic portion of its demand curve" is a classic multiple-choice statement. Its reason is "MR is negative there," not "the monopolist can charge any price it wants."
      `
    },
    {
      id: 'micromon2-input',
      type: 'input-boxes' as const,
      content: `
**Find the Revenue Pieces** ✍️

A monopolist's inverse demand is **P = 40 − 2Q**.

1) What is marginal revenue at Q = 6? (dollars, number only)

2) At what quantity does MR equal zero?

3) What price does the monopolist charge at that quantity? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '10', '20'],
        hint1: 'MR = 40 − 4Q; substitute Q = 6.',
        hint2: 'Set 40 − 4Q = 0.',
        hint3: 'Go up to the demand curve, not the MR line: P = 40 − 2(10).',
        explanation: '1) MR = 40 − 4(6) = \\$16. 2) 40 − 4Q = 0 gives Q = 10. 3) P = 40 − 20 = \\$20, the unit-elastic midpoint of demand, where TR peaks at \\$200.'
      }
    },
    {
      id: 'micromon2-profitmax',
      type: 'text' as const,
      content: `
## Profit Maximization from a Table

Return to the water park. It pays a fixed cost of \\$10 a day, and the marginal cost of each pass rises as crowds need more staff.

| Q | Price | TR | MR | MC | TC | Profit (TR − TC) |
|---|---|---|---|---|---|---|
| 0 | \\$20 | \\$0 | — | — | \\$10 | −\\$10 |
| 1 | \\$18 | \\$18 | \\$18 | \\$4 | \\$14 | \\$4 |
| 2 | \\$16 | \\$32 | \\$14 | \\$5 | \\$19 | \\$13 |
| **3** | **\\$14** | **\\$42** | **\\$10** | **\\$6** | **\\$25** | **\\$17** |
| 4 | \\$12 | \\$48 | \\$6 | \\$7 | \\$32 | \\$16 |
| 5 | \\$10 | \\$50 | \\$2 | \\$8 | \\$40 | \\$10 |

### Two Ways to the Same Answer

1. **Total approach:** profit is highest, **\\$17**, at Q = 3.
2. **Marginal approach:** keep producing while **MR ≥ MC**. The 3rd pass adds \\$10 of revenue and \\$6 of cost, so it is worth selling. The 4th adds \\$6 of revenue but \\$7 of cost, so it is not. Stop at **Q = 3**.

Then read the price from **demand** at that quantity: **P = \\$14**, not the MR of \\$10 or the MC of \\$6.

### Three Things the Table Shows

- **P > MC at the chosen output** (\\$14 vs. \\$6): buyers value the 3rd pass far above its cost, the sign of allocative inefficiency.
- **Not the revenue peak.** TR is highest at Q = 5, but the extra revenue there costs more than it brings in.
- **Fixed cost does not change Q.** Raise the fixed cost to \\$30 and every profit falls by \\$20, but Q = 3 is still best.
      `
    },
    {
      id: 'micromon2-supply',
      type: 'text' as const,
      content: `
## Why a Monopoly Has No Supply Curve

A supply curve answers one question: "At each given price, how much will sellers offer?" A competitive firm can answer it, because it takes the price as given and produces where P = MC.

A monopolist never takes a price as given. It **chooses** a price-quantity pair on the demand curve. With the **same** MC curve, two different demand curves can lead to:

- the same quantity sold at two different prices, or
- the same price charged for two different quantities.

So there is no one-to-one link between price and quantity supplied, and **a monopoly has no supply curve**. On a monopoly graph, label the cost curve **MC**, never "S."
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
            question: 'A monopolist with a positive marginal cost is currently producing a quantity at which demand is price inelastic. To raise its profit, it should',
            options: [
              'cut output and raise its price',
              'raise output and cut its price',
              'keep output and raise its price',
              'keep output and cut its price'
            ],
            correctAnswer: 0,
            explanation: 'Where demand is inelastic, MR is negative, so selling fewer units at a higher price raises total revenue while also cutting total cost. A monopolist cannot raise price without moving along demand, so it cannot keep output fixed and change price.'
          },
          {
            question: 'In the water park table, why does the firm stop at 3 passes even though total revenue keeps rising until 5 passes?',
            options: [
              'The 4th pass adds less to revenue than to cost',
              'Its price would fall below average variable cost',
              'Demand becomes inelastic after the 3rd pass',
              'Revenue from each pass after the 3rd is negative'
            ],
            correctAnswer: 0,
            explanation: 'The 4th pass brings MR of \\$6 but costs \\$7 to provide, so profit falls from \\$17 to \\$16. MR stays positive through the 5th pass, and demand is elastic over that whole range, so the stopping point comes from comparing MR with MC.'
          },
          {
            question: 'A monopoly graph labels its upward-sloping cost curve "MC" rather than "S" because the monopolist',
            options: [
              'picks the price from demand, so no single price-quantity schedule exists',
              'produces where marginal revenue is zero rather than where MR equals MC',
              'faces a perfectly elastic demand curve at the price set by the market',
              'earns zero economic profit in the long run after other firms enter'
            ],
            correctAnswer: 0,
            explanation: 'A supply curve shows the quantity offered at each given price, but a monopolist sets its own price from the demand curve, so the same MC can go with many prices. Monopolists produce where MR = MC, face downward-sloping demand, and are protected from entry.'
          }
        ]
      }
    }
  ]
}
