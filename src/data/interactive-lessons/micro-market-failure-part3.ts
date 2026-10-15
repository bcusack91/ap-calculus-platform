export const microMarketFailurePart3Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromar3-intro',
      type: 'text' as const,
      content: `
# 💰 Market Failure

**Part 3 of 7 — Government Intervention Across Market Structures**

---

| Section |
|---------|
| 📖 The One Question to Ask |
| Per-Unit Taxes and Subsidies: Competition vs Monopoly |
| Lump-Sum Taxes and Subsidies |
| Price Ceilings and Minimum Wages |
| Antitrust, Regulation and the Big Picture |

> 🔑 **Key Concept:** The same policy can help efficiency in one market and hurt it in another. What matters is **where the market starts**. A competitive market with no externality already produces the efficient quantity, so pushing quantity in either direction creates deadweight loss. A monopoly or monopsony starts **below** the efficient quantity, so a policy that raises quantity can shrink deadweight loss.
      `
    },
    {
      id: 'micromar3-rule',
      type: 'text' as const,
      content: `
## 📖 The One Question to Ask

**Does the policy move the quantity traded toward the efficient quantity, or away from it?**

| Market | Where it starts | Policies that raise efficiency | Policies that lower efficiency |
|---|---|---|---|
| Perfect competition, no externality | **At** $Q^*$ | None: any per-unit tax, subsidy or binding price control moves it away | Per-unit taxes, subsidies, binding ceilings and floors |
| Product-market monopoly | **Below** $Q^*$ | Policies that raise output: a per-unit subsidy, a ceiling between the monopoly price and the point where MC crosses demand | Policies that cut output: a per-unit tax |
| Monopsony (labor market) | **Below** the competitive employment level | A minimum wage between the monopsony wage and the competitive wage | A minimum wage set far above the competitive wage |
| Market with an externality | Above or below $Q^*$ | A tax or subsidy sized to the external cost or benefit | A policy that pushes the wrong way or too far |

### Two Kinds of Tax or Subsidy
- **Per-unit** (on each unit made or sold): changes **marginal cost**, so it changes the quantity a firm chooses.
- **Lump-sum** (a fixed amount, regardless of output): changes **fixed cost** and profit, but not marginal cost, so in the short run it does not change the profit-maximizing quantity.
      `
    },
    {
      id: 'micromar3-taxsub',
      type: 'text' as const,
      content: `
## Per-Unit Taxes and Subsidies: Competition vs Monopoly

Use one market twice. Demand is **P = 100 − Q** and marginal cost is a constant **\\$20** (MC = ATC). The efficient quantity is where demand meets MC: **Q\\* = 80**.

- **Perfect competition:** supply is MC, so the market makes 80 units at \\$20.
- **Monopoly:** MR = 100 − 2Q. Setting MR = MC gives **40** units at **\\$60**, with DWL = ½ × 40 × \\$40 = **\\$800**.

Now add a **\\$10 per-unit tax** or a **\\$10 per-unit subsidy**, which moves MC to \\$30 or \\$10.

| Market | Policy | Quantity | Price buyers pay | Deadweight loss | Government |
|---|---|---|---|---|---|
| Competitive | None | 80 | \\$20 | \\$0 | — |
| Competitive | \\$10 tax | 70 | \\$30 | ½ × 10 × \\$10 = **\\$50** | +\\$700 revenue |
| Competitive | \\$10 subsidy | 90 | \\$10 | ½ × 10 × \\$10 = **\\$50** | −\\$900 cost |
| Monopoly | None | 40 | \\$60 | **\\$800** | — |
| Monopoly | \\$10 tax | 35 | \\$65 | ½ × 45 × \\$45 = **\\$1,012.50** | +\\$350 revenue |
| Monopoly | \\$10 subsidy | 45 | \\$55 | ½ × 35 × \\$35 = **\\$612.50** | −\\$450 cost |

(Monopoly quantities: 100 − 2Q = 30 gives 35; 100 − 2Q = 10 gives 45. Deadweight loss is always measured against Q\\* = 80 and the true MC of \\$20.)

### What the Table Shows
- In the **competitive** market, the tax and the subsidy each **create** \\$50 of deadweight loss: the market was already efficient.
- In the **monopoly**, the tax **adds** \\$212.50 of deadweight loss, because it cuts output that was already too low.
- In the **monopoly**, the subsidy **removes** \\$187.50 of deadweight loss, because it raises output toward 80. (It costs taxpayers \\$450, but that payment is a transfer, not a loss.)

> 🔑 **AP Connection:** A monopolist passes only part of a per-unit tax or subsidy on to buyers. Here the price moves by \\$5, half of the \\$10, because the MR curve is twice as steep as demand.
      `
    },
    {
      id: 'micromar3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A profit-maximizing monopolist with no externality receives a small per-unit subsidy, too small to bring output all the way to the efficient level. Deadweight loss',
            options: [
              'shrinks, because output moves toward the efficient level',
              'grows, because output moves away from the efficient level',
              'stays the same, because the subsidy is only a transfer',
              'disappears, because price now equals marginal cost'
            ],
            correctAnswer: 0,
            explanation: 'The subsidy lowers marginal cost, so MR = MC at a larger quantity, closer to where demand meets the true MC. Part of the triangle closes. The subsidy payment itself is a transfer, but the change in output is real, and price stays above MC because the subsidy is too small.'
          },
          {
            question: 'In the worked example, a \\$10 per-unit tax creates \\$50 of deadweight loss in the competitive market. By how much does the same tax raise deadweight loss in the monopoly?',
            options: [
              '\\$212.50',
              '\\$50',
              '\\$1,012.50',
              '\\$100'
            ],
            correctAnswer: 0,
            explanation: 'Monopoly DWL rises from \\$800 to \\$1,012.50, an increase of \\$212.50, because output falls from 40 to 35 units that were already too few. \\$1,012.50 is the total after the tax, not the increase.'
          },
          {
            question: 'Every firm in a perfectly competitive industry must now pay a flat \\$2,000 yearly license fee. Firms were earning zero economic profit. In the long run, the market price',
            options: [
              'rises as some firms exit',
              'falls as firms expand output',
              'stays the same, since MC is unchanged',
              'rises by \\$2,000 on every unit sold'
            ],
            correctAnswer: 0,
            explanation: 'The fee raises ATC but not MC, so nothing changes in the short run except that firms now lose money. In the long run some firms exit, market supply decreases, and the price rises until the remaining firms again cover their higher average cost. A flat fee is not a per-unit cost, so it is not added to each unit\'s price.'
          }
        ]
      }
    },
    {
      id: 'micromar3-lumpsum',
      type: 'text' as const,
      content: `
## Lump-Sum Taxes and Subsidies

A lump-sum tax is a **fixed cost**: it shifts ATC up but leaves MC (and AVC) where they were.

| Market | Short run | Long run |
|---|---|---|
| **Monopoly** | Price and quantity unchanged; profit falls by the tax | Unchanged, as long as the monopolist still earns enough to stay in business |
| **Perfect competition** | Each firm's quantity unchanged (MC did not move); firms now earn losses if they were at zero profit | Some firms **exit**, market supply decreases, price rises until the remaining firms break even; market quantity falls |

A **lump-sum subsidy** works in reverse. A monopolist's price and output stay the same, and only its profit rises. In a competitive industry, profit attracts **entry** in the long run, so supply increases and price falls.

> ⚠️ **Common trap:** "A lump-sum tax never affects output" is true for a monopolist and for a competitive firm in the short run. It is not true for a **competitive industry in the long run**, because the number of firms changes.
      `
    },
    {
      id: 'micromar3-input',
      type: 'input-boxes' as const,
      content: `
**Tax a Monopolist** ✍️

A monopolist faces demand **P = 80 − Q** and has a constant marginal cost of **\\$20**.

1) What quantity does it produce with no tax?

2) What is the deadweight loss with no tax? (dollars, number only)

3) A \\$10 per-unit tax is imposed. What is the new deadweight loss, measured against the efficient quantity at the true MC of \\$20? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '450', '612.5'],
        hint1: 'With demand P = 80 − Q, MR = 80 − 2Q. Set it equal to 20.',
        hint2: 'The efficient quantity is where 80 − Q = 20. The triangle\'s height is the price minus \\$20.',
        hint3: 'With the tax, set 80 − 2Q = 30. Then find the price and use the same triangle formula against Q = 60.',
        explanation: '1) 80 − 2Q = 20 gives Q = 30 at a price of \\$50. 2) The efficient quantity is 60, so DWL = ½ × 30 × \\$30 = \\$450. 3) With the tax, Q = 25 and P = \\$55, so DWL = ½ × (60 − 25) × (\\$55 − \\$20) = \\$612.50.'
      }
    },
    {
      id: 'micromar3-controls',
      type: 'text' as const,
      content: `
## Price Ceilings and Minimum Wages

### Price Ceilings
- **Competitive market:** a binding ceiling cuts quantity supplied, so the quantity traded falls, a **shortage** appears and deadweight loss is created.
- **Monopoly:** a ceiling between the monopoly price and the point where MC crosses demand makes MR flat at the ceiling price, so the monopolist **expands** output. Deadweight loss shrinks. (The Monopoly lessons work through this case with numbers.)

### Minimum Wages
Use one labor market twice: the marginal revenue product of labor is **MRP = 40 − L** and labor supply is **W = 4 + L** (W in dollars per hour).

**If the labor market is competitive**, the wage is \\$22 and 18 workers are hired. A \\$25 minimum wage cuts the number hired to 40 − 25 = **15**, while 25 − 4 = 21 people want jobs: **6 are unemployed**, and employment falls.

**If one firm is the only employer (monopsony)**, the marginal factor cost is MFC = 4 + 2L. Setting MRP = MFC: 40 − L = 4 + 2L gives **12 workers**, paid the wage on the supply curve, **\\$16**.

| Minimum wage (monopsony) | Workers hired | Effect |
|---|---|---|
| None | 12 at \\$16 | Monopsony outcome |
| \\$20 | **16** | Wage **and** employment rise (16 people supply labor at \\$20) |
| \\$22 | **18** | The competitive outcome |
| \\$28 | **12** | Employment falls back to 12 (MRP = 28 at L = 12), and 24 people want jobs, so 12 are unemployed |

A minimum wage set between the monopsony wage and the competitive wage turns the firm into a **wage taker** for those workers: its MFC becomes flat at the minimum wage, so hiring rises.
      `
    },
    {
      id: 'micromar3-antitrust',
      type: 'text' as const,
      content: `
## Antitrust, Regulation and the Big Picture

### Antitrust Policy
Antitrust laws (the Sherman Act and the Clayton Act, covered in the Monopoly lessons) try to keep markets **competitive in the first place**: blocking mergers that would substantially lessen competition, breaking up monopolies built by unfair conduct, and outlawing price fixing. The goal is a lower price, a higher quantity and less deadweight loss.

### Regulating a Natural Monopoly
When one firm can supply the whole market at the lowest cost, breaking it up would raise costs. Regulators instead set its price:
- **P = MC** (socially optimal): allocatively efficient, but because ATC is falling, MC is below ATC and the firm **loses money** unless it gets a subsidy.
- **P = ATC** (fair return): the firm breaks even, but output is below the efficient level.

### Every Policy in One Table

| Policy | Perfect competition (no externality) | Monopoly | Monopsony |
|---|---|---|---|
| Per-unit tax | Q falls, DWL created | Q falls further, DWL grows | — |
| Per-unit subsidy | Q rises past Q\\*, DWL created | Q rises toward Q\\*, DWL shrinks | — |
| Lump-sum tax | No change in the short run; exit in the long run | Only profit changes | — |
| Price ceiling | Shortage, DWL created | Can raise Q and cut DWL | — |
| Minimum wage | Unemployment, employment falls | — | Can raise wage and employment |
| Antitrust | — | Moves the market toward competition | — |
      `
    },
    {
      id: 'micromar3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A monopsony employer pays \\$16 an hour and hires 12 workers. In a competitive labor market with the same curves, the wage would be \\$22 and 18 workers would be hired. A minimum wage of \\$20 would',
            options: [
              'raise both the wage and the number of workers the firm hires',
              'raise the wage but reduce the number of workers hired',
              'raise the wage but leave the number hired unchanged',
              'have no effect, since it is below the competitive wage'
            ],
            correctAnswer: 0,
            explanation: 'At \\$20 the firm can hire up to 16 workers without raising the wage for anyone, so its marginal factor cost is flat at \\$20 and it hires 16. A minimum wage between the monopsony wage and the competitive wage raises both pay and employment.'
          },
          {
            question: 'A price ceiling slightly below the current price is imposed in two markets: one perfectly competitive, the other a monopoly. What happens to the quantity sold in each?',
            options: [
              'Output falls under competition and rises under monopoly',
              'Output falls under both, with a shortage in each',
              'Output falls under monopoly and rises under competition',
              'Output rises under both, moving each toward efficiency'
            ],
            correctAnswer: 0,
            explanation: 'Competitive sellers supply less at the lower price, so quantity falls and a shortage appears. The monopolist\'s MR becomes flat at the ceiling over a wider range, so it expands output toward the efficient level.'
          },
          {
            question: 'Regulators force a natural monopoly to charge a price equal to its marginal cost. Which problem usually follows?',
            options: [
              'The firm suffers losses and needs a subsidy to stay in business',
              'Output falls below the unregulated monopoly level',
              'Its economic profit grows larger than before',
              'A surplus of the product appears at that price'
            ],
            correctAnswer: 0,
            explanation: 'A natural monopoly has falling ATC, so MC lies below ATC, and a price equal to MC does not cover average cost. The firm loses money without a subsidy. Output rises, not falls, when price is pushed down to MC.'
          }
        ]
      }
    }
  ]
}
