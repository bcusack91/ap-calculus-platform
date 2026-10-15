export const microMonopolyPart4Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromon4-intro',
      type: 'text' as const,
      content: `
# 💰 Monopoly

**Part 4 of 7 — Reading the Monopoly Graph**

---

| Section |
|---------|
| 📖 A Lettered Monopoly Graph |
| Four Quantities on One Graph |
| The Natural Monopoly Graph with Numbers |

> 🔑 **Key Concept:** AP questions often show a monopoly graph with lettered areas and ask which letters make up consumer surplus, profit or deadweight loss. Every answer comes from the same three landmarks: the **MR = MC** quantity, the **price on the demand curve** above it, and the **efficient quantity** where demand meets MC.
      `
    },
    {
      id: 'micromon4-regions',
      type: 'text' as const,
      content: `
## 📖 A Lettered Monopoly Graph

Picture this graph, with quantity on the horizontal axis and dollars on the vertical axis:

- **Demand (D):** a straight line from \\$100 on the price axis down to 100 units, so P = 100 − Q.
- **Marginal revenue (MR):** starts at \\$100 and falls twice as steeply, hitting zero at 50 units.
- **MC = ATC:** a horizontal line at \\$20.
- MR crosses MC at **Q = 40**. Directly above, demand gives **P = \\$60**. Demand crosses MC at **Q = 80**.

The graph is divided into four areas:

| Area | Shape and location | Size |
|---|---|---|
| **A** | Triangle under D and above \\$60, from 0 to 40 units | ½ × 40 × \\$40 = \\$800 |
| **B** | Rectangle from \\$20 up to \\$60, from 0 to 40 units | \\$40 × 40 = \\$1,600 |
| **C** | Triangle between D and MC, from 40 to 80 units | ½ × 40 × \\$40 = \\$800 |
| **E** | Rectangle under MC, from 0 to 40 units | \\$20 × 40 = \\$800 |

### What Each Area Means

| Measure | Monopoly | Efficient outcome (P = MC = \\$20, Q = 80) |
|---|---|---|
| Consumer surplus | **A** (\\$800) | **A + B + C** (\\$3,200) |
| Profit (producer surplus here) | **B** (\\$1,600) | none |
| Deadweight loss | **C** (\\$800) | none |
| Total cost of output | **E** (\\$800) | E plus the cost of units 41–80 |

Area **B** is a transfer from buyers to the firm. Area **C** is surplus that no one gets, because units 41 to 80 are worth more to buyers than they cost but are never produced.

### When ATC Is U-Shaped

Many AP graphs draw a U-shaped ATC curve above MC instead of a flat one. Then:

- Find Q where MR = MC and P on demand, exactly as before.
- The profit rectangle runs from **P down to ATC at that same Q**, not down to MC and not down to the lowest point of ATC.
- If the ATC curve passes **above** the demand curve at that Q, the rectangle is a **loss**.
      `
    },
    {
      id: 'micromon4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On the lettered graph above, if the market were perfectly competitive, with price equal to MC, consumer surplus would be area',
            options: [
              'A + B + C',
              'A + B',
              'A + C',
              'A + B + C + E'
            ],
            correctAnswer: 0,
            explanation: 'At a \\$20 price buyers purchase 80 units, so consumer surplus is the whole triangle under demand and above \\$20: A, the old profit B, and the old deadweight loss C. Area E is the cost of producing the first 40 units, which is not surplus to anyone.'
          },
          {
            question: 'A monopolist with a U-shaped ATC curve sells 40 units at \\$60. At 40 units, MC is \\$30 and ATC is \\$45; the lowest point on its ATC curve is \\$40. What is its economic profit?',
            options: [
              '\\$600',
              '\\$1,200',
              '\\$800',
              '\\$2,400'
            ],
            correctAnswer: 0,
            explanation: 'Profit = (P − ATC at the chosen Q) × Q = (\\$60 − \\$45) × 40 = \\$600. Subtracting MC gives \\$1,200, subtracting the minimum ATC gives \\$800, and \\$2,400 is total revenue.'
          },
          {
            question: 'On a monopoly graph with a U-shaped ATC curve, the bottom edge of the profit rectangle is at',
            options: [
              'ATC at the quantity where MR equals MC',
              'the MC of the last unit, where MR equals MC',
              'the lowest point anywhere on the ATC curve',
              'average variable cost where MR equals MC'
            ],
            correctAnswer: 0,
            explanation: 'Profit per unit is price minus average total cost at the quantity actually produced, which is the MR = MC quantity. The lowest point of ATC is usually at a different quantity, AVC leaves out fixed cost, and MC measures the cost of the last unit only.'
          }
        ]
      }
    },
    {
      id: 'micromon4-quantities',
      type: 'text' as const,
      content: `
## Four Quantities on One Graph

The same graph hides four different "special" quantities. AP questions test whether you can tell them apart.

| Goal or benchmark | Condition | Q on the lettered graph | Price |
|---|---|---|---|
| **Maximize profit** | MR = MC | 40 | \\$60 |
| **Maximize total revenue** | MR = 0 (unit-elastic point of D) | 50 | \\$50 |
| **Allocative efficiency** | P = MC (D crosses MC) | 80 | \\$20 |
| **Productive efficiency** | Output at minimum ATC | (see note) | — |

### Patterns to Remember

- The profit-maximizing quantity is **less than** the revenue-maximizing quantity whenever MC is positive, because MR must still be positive where it equals MC.
- The profit-maximizing quantity is **less than** the allocatively efficient quantity, because MR lies below demand.
- With a flat ATC, every quantity has the same average cost. With a U-shaped ATC, an unregulated monopolist usually produces to the **left** of minimum ATC, so it is **not productively efficient** either.

> 🔑 **AP Connection:** "Allocatively efficient" always means the quantity where **price equals marginal cost**, which on a monopoly graph is where the demand curve crosses MC. Students who pick the MR = MC quantity are giving the firm's answer, not society's.
      `
    },
    {
      id: 'micromon4-input',
      type: 'input-boxes' as const,
      content: `
**Find the Three Quantities** ✍️

A monopolist faces demand **P = 90 − 3Q** and has a constant marginal cost of \\$18.

1) Profit-maximizing quantity?

2) Revenue-maximizing quantity?

3) Allocatively efficient quantity?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '15', '24'],
        hint1: 'MR = 90 − 6Q. Set it equal to 18.',
        hint2: 'Set MR = 90 − 6Q equal to zero.',
        hint3: 'Set the demand price equal to MC: 90 − 3Q = 18.',
        explanation: '1) 90 − 6Q = 18 gives Q = 12, sold at P = \\$54. 2) 90 − 6Q = 0 gives Q = 15, at P = \\$45. 3) 90 − 3Q = 18 gives Q = 24, at P = \\$18. The profit-maximizing quantity is the smallest of the three.'
      }
    },
    {
      id: 'micromon4-natural',
      type: 'text' as const,
      content: `
## The Natural Monopoly Graph with Numbers

Part 1 named the three ways to price a natural monopoly. Here is the graph with numbers attached.

A water utility faces demand **P = 100 − Q**. Its marginal cost is a constant **\\$20**, and it has a **fixed cost of \\$1,200** for pipes and treatment plants. So ATC = \\$20 + \\$1,200 ÷ Q, which **falls over the whole range of demand** and always sits above MC.

| Pricing rule | Q | P | ATC at that Q | Profit | DWL |
|---|---|---|---|---|---|
| **Unregulated (MR = MC)** | 40 | \\$60 | \\$50 | +\\$400 | \\$800 |
| **Fair return (P = ATC)** | 60 | \\$40 | \\$40 | \\$0 | \\$200 |
| **Socially optimal (P = MC)** | 80 | \\$20 | \\$35 | −\\$1,200 | \\$0 |

### How the Numbers Come Out

- **Unregulated:** MR = 100 − 2Q = 20 gives Q = 40 and P = \\$60. ATC = 20 + 30 = \\$50, so profit = (\\$60 − \\$50) × 40 = \\$400.
- **Fair return:** set 100 − Q = 20 + 1,200 ÷ Q. Multiplying through gives Q² − 80Q + 1,200 = 0, so Q = 20 or Q = 60. The regulator picks the **larger** quantity, **60**, at P = \\$40. DWL = ½ × (80 − 60) × (\\$40 − \\$20) = \\$200.
- **Socially optimal:** P = MC = \\$20 gives Q = 80. ATC = 20 + 15 = \\$35, so the firm loses \\$15 × 80 = **\\$1,200**, exactly its fixed cost. A **subsidy** of \\$1,200 keeps it in business.

> 🔑 **AP Connection:** On the graph, the fair-return point is where **demand crosses ATC**, and the socially optimal point is where **demand crosses MC**. Because ATC is still falling there, MC is below ATC, and that gap is why P = MC pricing produces a loss.
      `
    },
    {
      id: 'micromon4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Rule** 🔍

Choose the condition that sets output or price in each case.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An unregulated natural monopoly chooses its output where ___',
            options: ['MR = MC', 'MR = 0', 'P = MC', 'P = ATC']
          },
          {
            label: 'A fair-return regulator sets the price where ___',
            options: ['MR = MC', 'MR = 0', 'P = MC', 'P = ATC']
          },
          {
            label: 'A regulator seeking allocative efficiency sets the price where ___',
            options: ['MR = MC', 'MR = 0', 'P = MC', 'P = ATC']
          },
          {
            label: 'A firm that wants the most total revenue, ignoring cost, produces where ___',
            options: ['MR = MC', 'MR = 0', 'P = MC', 'P = ATC']
          }
        ],
        correctAnswers: ['MR = MC', 'P = ATC', 'P = MC', 'MR = 0'],
        hint1: 'Any profit-maximizing firm uses the same rule.',
        hint2: 'A fair return means zero economic profit, so price just covers average cost.',
        hint3: 'Society wants units produced until the value to buyers equals the extra cost.',
        explanation: 'Unregulated firms maximize profit at MR = MC. Fair-return pricing sets P = ATC for zero economic profit. Allocative efficiency needs P = MC. Total revenue peaks where MR = 0, the unit-elastic point of demand.'
      }
    }
  ]
}
