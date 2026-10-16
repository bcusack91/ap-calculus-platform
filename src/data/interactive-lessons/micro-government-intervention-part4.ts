export const microGovernmentInterventionPart4Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgov4-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention in Markets

**Part 4 of 7 — Subsidies, Quotas and Lettered Graphs**

---

| Section |
|---------|
| 📖 Per-Unit Subsidies |
| Worked Example: A \\$10 Subsidy |
| Quotas: A Limit on Quantity |
| Reading a Lettered Graph |

> 🔑 **Key Concept:** A per-unit subsidy is a tax in reverse: it pushes quantity **above** the efficient level, and the government pays more than buyers and sellers gain. A quota pushes quantity **below** the efficient level, just like a tax, but the gap between price and cost goes to whoever holds the right to sell.
`
    },
    {
      id: 'microgov4-subsidy',
      type: 'text' as const,
      content: `
## 📖 Per-Unit Subsidies

With a per-unit subsidy of $s$ paid to sellers, a seller who needs \\$40 per unit will accept \\$30 from the buyer, because the government adds \\$10. Every point on the supply curve moves **down by $s$** (the curve shifts right).

| Price | Meaning |
|---|---|
| $P_c$ | What buyers pay (falls) |
| $P_p = P_c + s$ | What producers receive in total (rises) |
| Government cost | $s \\times Q_{new}$ |

### Why a Subsidy Creates Deadweight Loss
Before the subsidy, the market already produced every unit whose value to buyers exceeded its cost. The extra units a subsidy adds have a **cost above their value** to buyers. Taxpayers pay for that gap, and it is not matched by anyone's gain.

### Who Captures the Subsidy?
The same elasticity rule as for taxes applies in reverse: **the more inelastic side gets more of the benefit.** A subsidy to buyers of a good with perfectly inelastic supply, such as a fixed stock of apartments, ends up entirely as a higher price for the owners.

> 🔑 **AP Connection:** Exam questions often ask whether a subsidy is efficient. In a market with no externality, the answer is no: it creates **overproduction** and a deadweight loss. Later topics show when a subsidy can fix a market failure instead.
`
    },
    {
      id: 'microgov4-worked',
      type: 'text' as const,
      content: `
## Worked Example: A \\$10 Subsidy

Market: $Q_d = 120 - 2P$ and $Q_s = 2P - 20$. Before the subsidy, $P = \\$35$, $Q = 50$, CS = PS = \\$625.

**Step 1: Supply in terms of the buyer's price.** Producers receive $P_c + 10$, so $Q_s = 2(P_c + 10) - 20 = 2P_c$.

**Step 2: Solve.** $120 - 2P_c = 2P_c$, so **$P_c = \\$30$**, **$P_p = \\$40$**, and **$Q = 60$**.

**Step 3: Government cost.** $\\$10 \\times 60 = $ **\\$600**.

**Step 4: Surplus.**
- CS = ½ × 60 × (60 − 30) = **\\$900**, up \\$275.
- PS = ½ × 60 × (40 − 10) = **\\$900**, up \\$275.
- Buyers and sellers gain \\$550, but taxpayers pay \\$600.
- DWL = 600 − 550 = **\\$50**, the triangle ½ × (60 − 50) × (40 − 30).

| | Before | After \\$10 subsidy |
|---|---|---|
| Price buyers pay | \\$35 | \\$30 |
| Price producers receive | \\$35 | \\$40 |
| Quantity | 50 | 60 |
| Consumer surplus | \\$625 | \\$900 |
| Producer surplus | \\$625 | \\$900 |
| Government cost | — | \\$600 |
| Deadweight loss | — | \\$50 |

The deadweight loss sits **to the right of** the old equilibrium, between 50 and 60 units, where each unit costs more to make than buyers value it. With a tax, the deadweight loss sits to the **left**.
`
    },
    {
      id: 'microgov4-input',
      type: 'input-boxes' as const,
      content: `
**Solve a Subsidy Problem** ✍️

Demand is $Q_d = 80 - P$ and supply is $Q_s = P - 20$, so the market clears at \\$50 and 30 units. The government pays sellers a **\\$6 per-unit subsidy**.

1) New price buyers pay, in dollars?

2) New quantity?

3) Total cost of the subsidy to the government, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['47', '33', '198'],
        hint1: 'Producers receive Pc + 6, so Qs = (Pc + 6) − 20. Set it equal to 80 − Pc.',
        hint2: 'Substitute the buyer price into demand.',
        hint3: 'Multiply the subsidy by the new quantity.',
        explanation: '1) 80 − Pc = Pc − 14, so Pc = \\$47 and producers receive \\$53. 2) Q = 80 − 47 = 33. 3) Cost = \\$6 × 33 = \\$198. The deadweight loss is ½ × 3 × 6 = \\$9.'
      }
    },
    {
      id: 'microgov4-quota',
      type: 'text' as const,
      content: `
## Quotas: A Limit on Quantity

A **quota** caps the quantity that can be sold, often through a fixed number of licenses (taxi medallions, fishing permits) or a limit on imports.

### What a Binding Quota Does
A quota binds when the cap is **smaller** than the quantity the market would trade on its own. Then (CED POL-1.B.3, POL-1.A.4):
- **Quantity falls** to the quota amount.
- **Price rises**, because buyers compete for fewer units: buyers who value the good most bid up the price of the limited supply.
- **Consumer surplus falls**: buyers pay more and get less.
- **Total surplus falls**: units that buyers value above their cost of production are no longer traded, so there is a **deadweight loss**, just as with a per-unit tax that cuts quantity by the same amount.
- **License holders can gain**: they sell fewer units, but each one sells for more than the cost of producing it.

### Quota or Tax?
Both cut quantity and raise the price buyers pay. The difference is who receives the gap between that price and the cost of the last unit: under a **tax**, the government collects it as revenue; under a **quota**, it stays with whoever holds the right to sell, and the government collects nothing unless it sells the licenses.

> ℹ️ The AP exam does not ask you to graph a quota (CED exclusion, Topic 2.9); it asks how a quota changes quantity, price and surplus.

> 🔑 **AP Connection:** A quota raises price and lowers quantity, so it hurts buyers and creates deadweight loss. Sellers who hold licenses can gain, even though they sell fewer units.
`
    },
    {
      id: 'microgov4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A per-unit subsidy is paid to producers in a competitive market with no externalities. Compared with the original equilibrium, what happens to total surplus, counting the cost to taxpayers?',
            options: [
              'It decreases',
              'It increases',
              'It stays the same',
              'It cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'The subsidy pushes output beyond the efficient quantity, and the gains to buyers and sellers are smaller than the government\'s outlay. The difference is a deadweight loss, so total surplus falls.'
          },
          {
            question: 'A city limits taxi licenses to fewer rides than the market would supply. Which group gains from this quota?',
            options: [
              'License holders who earn fares above their costs',
              'Riders who now pay lower fares for each taxi trip',
              'Drivers who cannot obtain a license to operate a cab',
              'Taxpayers who collect the gap between fare and cost'
            ],
            correctAnswer: 0,
            explanation: 'The quota raises the fare above the marginal cost of the last ride, and license holders keep that gap as quota rent. Riders pay more, drivers without licenses are shut out, and no tax revenue is collected.'
          }
        ]
      }
    },
    {
      id: 'microgov4-lettered',
      type: 'text' as const,
      content: `
## Reading a Lettered Graph

AP questions often label regions with letters. Here is the standard layout for a per-unit tax, described in words.

**The graph:** Demand D slopes down; supply S₁ slopes up; S₂ = S₁ + tax lies above it. Before the tax: price $P_1$, quantity $Q_1$. After: buyers pay $P_c$, sellers keep $P_s$, quantity $Q_2$.

| Region | Location |
|---|---|
| **A** | Under D, above $P_c$, from 0 to $Q_2$ |
| **B** | Rectangle between $P_1$ and $P_c$, from 0 to $Q_2$ |
| **C** | Triangle between D and $P_1$, from $Q_2$ to $Q_1$ |
| **D** | Rectangle between $P_s$ and $P_1$, from 0 to $Q_2$ |
| **E** | Triangle between $P_1$ and S₁, from $Q_2$ to $Q_1$ |
| **F** | Above S₁, below $P_s$, from 0 to $Q_2$ |

| Measure | Before tax | After tax |
|---|---|---|
| Consumer surplus | A + B + C | A |
| Producer surplus | D + E + F | F |
| Tax revenue | — | B + D |
| Deadweight loss | — | C + E |

### The Same Letters for Other Policies
- **Price ceiling at $P_s$:** quantity falls to $Q_2$ and buyers pay $P_s$, so CS = A + B + D and PS = F; DWL is still C + E.
- **Price floor at $P_c$:** quantity falls to $Q_2$, so CS = A and PS = B + D + F; DWL is still C + E.
`
    },
    {
      id: 'microgov4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Regions** 🔍

Use the lettered tax graph above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The tax revenue collected by the government is ___',
            options: ['B + D', 'C + E', 'A + B', 'D + F']
          },
          {
            label: 'Producer surplus after the tax is ___',
            options: ['F', 'D + F', 'D + E + F', 'B + D + F']
          },
          {
            label: 'Under a price floor at Pc instead of the tax, producer surplus is ___',
            options: ['B + D + F', 'F', 'D + E + F', 'D + F']
          }
        ],
        correctAnswers: ['B + D', 'F', 'B + D + F'],
        hint1: 'Revenue is the tax per unit times the new quantity: the rectangle between Pc and Ps.',
        hint2: 'Sellers keep Ps, so their surplus is the area above supply and below Ps.',
        hint3: 'Sellers now receive Pc on each of the Q₂ units they sell.',
        explanation: 'Revenue is the full rectangle between Pc and Ps, which is B + D. Producer surplus shrinks to F. A price floor at Pc lets sellers keep the whole price on Q₂ units, so producer surplus is B + D + F, while C + E is still lost.'
      }
    },
    {
      id: 'microgov4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'On the lettered tax graph, which areas were part of total surplus before the tax but belong to no one after it?',
            options: [
              'C + E',
              'B + D',
              'A + F',
              'B + C'
            ],
            correctAnswer: 0,
            explanation: 'The triangles C and E sit between the old and new quantities: those trades no longer happen, so their surplus disappears. B + D is still counted, as tax revenue, and A and F remain consumer and producer surplus.'
          },
          {
            question: 'In the worked subsidy example, why is the government\'s \\$600 outlay larger than the \\$550 gain to buyers and sellers?',
            options: [
              'Ten extra units cost more to produce than buyers value them',
              'Part of the subsidy is collected back as tax from producers',
              'Buyers pay a higher price after the subsidy is introduced',
              'Sellers produce fewer units than before the subsidy began'
            ],
            correctAnswer: 0,
            explanation: 'Output rises from 50 to 60, and each of those extra units has a cost above its value to buyers. The government pays for that gap, which is the \\$50 deadweight loss; buyers actually pay less and output rises.'
          }
        ]
      }
    }
  ]
};
