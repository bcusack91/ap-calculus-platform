export const microMonopolyPart5Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromon5-intro',
      type: 'text' as const,
      content: `
# 💰 Monopoly

**Part 5 of 7 — Price Discrimination**

---

| Section |
|---------|
| 📖 What Price Discrimination Is |
| Perfect Price Discrimination with Five Buyers |
| Perfect Price Discrimination on the Graph |
| Group Pricing and Common Misconceptions |

> 🔑 **Key Concept:** **Price discrimination** is charging different buyers different prices for the **same good** when the price differences are **not** caused by cost differences. A firm that can do it perfectly turns all consumer surplus into profit, but it also produces the **efficient quantity**, so deadweight loss disappears.
      `
    },
    {
      id: 'micromon5-conditions',
      type: 'text' as const,
      content: `
## 📖 What Price Discrimination Is

### Three Conditions

A firm can price discriminate only if all three hold:

1. **Market power.** The firm faces a downward-sloping demand curve. A perfectly competitive firm is a price taker and cannot charge anyone more than the market price.
2. **Separating buyers.** The firm can tell groups or individuals apart by their **willingness to pay** (or their price elasticity of demand).
3. **No resale.** Buyers who get the low price cannot resell to buyers who face the high price. If they could, this **arbitrage** would undercut the high price.

### Everyday Examples

| Example | How buyers are separated | How resale is blocked |
|---|---|---|
| Airline fares | Booking far ahead vs. last minute | Tickets carry the passenger's name |
| Movie and museum tickets | Student and senior discounts | ID checked at the door |
| Coupons and rebates | Price-sensitive buyers take the time to use them | The discount applies at checkout |
| College tuition | Financial aid based on family income | Enrollment cannot be transferred |

### What Is Not Price Discrimination
A furniture store that charges more to deliver to a town 200 miles away is **not** price discriminating, because the higher price reflects a higher **cost**. Price discrimination means the price differs while the cost of serving the buyer is the same.

> 🔑 **AP Connection:** When a firm splits buyers into groups, the group with **less elastic** demand pays the **higher** price. Business travelers who must fly on short notice pay more than vacationers who can shop around.
      `
    },
    {
      id: 'micromon5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is NOT an example of price discrimination?',
            options: [
              'A furniture store charges more to deliver to towns that are farther away',
              'A museum gives students a discount when they show a valid ID',
              'An airline charges more for seats bought the day before a flight',
              'A software firm sells the same program to schools for less'
            ],
            correctAnswer: 0,
            explanation: 'Delivering farther costs the store more, so the higher price reflects a cost difference. The museum, airline and software firm each charge different prices for the same product with the same cost, based on how much buyers are willing to pay.'
          },
          {
            question: 'A movie theater offers a senior discount on the same seats and showtimes. For this to raise the theater\'s profit, it must be true that',
            options: [
              'seniors have more elastic demand than other adults',
              'seniors have less elastic demand than other adults',
              'seniors have the same elasticity as other adults',
              'seniors have a lower marginal cost to seat than others'
            ],
            correctAnswer: 0,
            explanation: 'Profitable group pricing gives the lower price to the group that is more sensitive to price. If seniors had less elastic demand, the profitable move would be to charge them more, and the seat costs the theater the same no matter who sits in it.'
          }
        ]
      }
    },
    {
      id: 'micromon5-five-buyers',
      type: 'text' as const,
      content: `
## Perfect Price Discrimination with Five Buyers

Under **perfect price discrimination** (also called first-degree price discrimination), the firm charges **each** buyer exactly that buyer's willingness to pay.

A tutor has five possible clients for a one-hour session. Each hour costs the tutor \\$3 (MC = \\$3), with no fixed cost.

| Client | Willingness to pay |
|---|---|
| Ana | \\$10 |
| Ben | \\$8 |
| Caz | \\$6 |
| Dev | \\$4 |
| Eli | \\$2 |

### Option 1: One Price for Everyone

| Price | Sessions sold | Profit = (P − \\$3) × sessions |
|---|---|---|
| \\$10 | 1 | \\$7 |
| **\\$8** | **2** | **\\$10** |
| \\$6 | 3 | \\$9 |
| \\$4 | 4 | \\$4 |

The best single price is **\\$8**: 2 sessions, profit **\\$10**. Ana keeps \\$2 of consumer surplus. Caz and Dev value a session above its \\$3 cost but are priced out, so **\\$3 + \\$1 = \\$4** of surplus is lost as deadweight loss.

### Option 2: Perfect Price Discrimination

Charge Ana \\$10, Ben \\$8, Caz \\$6 and Dev \\$4. Do not sell to Eli, whose \\$2 value is below the \\$3 cost.

- Profit = (10 − 3) + (8 − 3) + (6 − 3) + (4 − 3) = **\\$16**
- Consumer surplus = **\\$0**
- Deadweight loss = **\\$0**: every session worth more than it costs is sold.

Total surplus rises from \\$12 to \\$16, and all of it goes to the tutor.
      `
    },
    {
      id: 'micromon5-input',
      type: 'input-boxes' as const,
      content: `
**Price It Both Ways** ✍️

A food truck has four customers for its last specialty sandwiches. Their willingness to pay is \\$20, \\$16, \\$12 and \\$8. Each sandwich has a marginal cost of \\$10, and there is no fixed cost.

1) What is the most profit the truck can earn if it must charge one price to everyone? (dollars)

2) Under perfect price discrimination, how many sandwiches does it sell?

3) What profit does perfect price discrimination earn? (dollars)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '3', '18'],
        hint1: 'Try each price: \\$20 sells 1, \\$16 sells 2, \\$12 sells 3. Profit = (P − 10) × number sold.',
        hint2: 'Sell to every customer whose willingness to pay is at least the \\$10 marginal cost.',
        hint3: 'Add each buyer\'s (WTP − \\$10) for the sandwiches sold.',
        explanation: '1) \\$20 earns \\$10, \\$16 earns 2 × \\$6 = \\$12, and \\$12 earns 3 × \\$2 = \\$6, so the best single price is \\$16, for \\$12 of profit. 2) Three customers value a sandwich above \\$10. 3) (20 − 10) + (16 − 10) + (12 − 10) = \\$18.'
      }
    },
    {
      id: 'micromon5-graph',
      type: 'text' as const,
      content: `
## Perfect Price Discrimination on the Graph

Use the lettered graph from Part 4: demand P = 100 − Q, MC = ATC = \\$20, with single-price areas A (consumer surplus), B (profit) and C (deadweight loss).

### Why MR Equals Demand
A single-price monopolist must cut the price on **all** units to sell one more, so MR falls below demand. A perfectly discriminating monopolist sells the next unit at that buyer's price **without** cutting anyone else's price. So the marginal revenue of each unit is its price, and the **MR curve is the demand curve**.

### The Outcome
Setting MR (= demand) equal to MC: 100 − Q = 20, so **Q = 80**, the efficient quantity.

| Measure | Single price | Perfect price discrimination |
|---|---|---|
| Quantity | 40 | **80** |
| Prices charged | \\$60 to everyone | From \\$100 down to \\$20, one per buyer |
| Consumer surplus | A = \\$800 | **\\$0** |
| Profit | B = \\$1,600 | A + B + C = **\\$3,200** |
| Deadweight loss | C = \\$800 | **\\$0** |
| Total surplus | \\$2,400 | \\$3,200 |

> 🔑 **AP Connection:** Perfect price discrimination is **allocatively efficient** (no deadweight loss) even though consumers get **no** surplus. Efficiency is about the **size** of total surplus, not who receives it.
      `
    },
    {
      id: 'micromon5-groups',
      type: 'text' as const,
      content: `
## Group Pricing and Common Misconceptions

Most real price discrimination sorts buyers into **groups** rather than charging each person a different price. The firm treats each group as a separate market, sets MR = MC in each, and charges the **less elastic** group more. Group pricing can also open the market to buyers who would be priced out by a single price, such as students who would skip the movie at the full adult price.

| Misconception | Correct idea |
|---|---|
| "Price discrimination always raises deadweight loss." | Perfect price discrimination **eliminates** it. Group pricing reduces it when it brings in buyers who were priced out. |
| "Any two different prices are discrimination." | Only when the cost of serving the buyers is the **same**. |
| "A perfectly discriminating firm cuts output." | It **expands** output to the efficient level, because it no longer has to lower the price on earlier units to sell more. |
| "Consumers keep some surplus under perfect discrimination." | Every buyer pays exactly his or her willingness to pay, so consumer surplus is **zero**. |
      `
    },
    {
      id: 'micromon5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a monopolist that practices perfect price discrimination, the marginal revenue curve',
            options: [
              'is the same as the demand curve',
              'lies below demand with twice the slope',
              'is horizontal at the market price',
              'lies on top of the marginal cost curve'
            ],
            correctAnswer: 0,
            explanation: 'Each extra unit sells at its own buyer\'s price with no cut on earlier units, so MR equals price at every quantity. The twice-as-steep MR line belongs to a single-price monopolist, and a horizontal MR belongs to a price taker.'
          },
          {
            question: 'The monopolist on the Part 4 graph switches from a single price to perfect price discrimination. What happens to deadweight loss?',
            options: [
              'It falls to zero as output rises to the efficient level of 80 units',
              'It rises, as buyers lose all of the consumer surplus they had',
              'It stays at \\$800, as the firm still restricts its output',
              'It falls by half, as output rises from 40 units to 60 units'
            ],
            correctAnswer: 0,
            explanation: 'With MR equal to demand, the firm produces until price equals MC, at 80 units, so no beneficial trade is left out. Losing consumer surplus is a transfer to the firm, not a loss of total surplus.'
          },
          {
            question: 'Three buyers value a good at \\$9, \\$7 and \\$5, and each unit costs \\$4 to make. How much more profit does perfect price discrimination earn than the best single price?',
            options: [
              '\\$3',
              '\\$6',
              '\\$9',
              '\\$2'
            ],
            correctAnswer: 0,
            explanation: 'The best single price is \\$7: 2 units × \\$3 = \\$6 (a \\$9 price earns \\$5 and a \\$5 price earns \\$3). Perfect discrimination earns \\$5 + \\$3 + \\$1 = \\$9, which is \\$3 more.'
          }
        ]
      }
    }
  ]
}
