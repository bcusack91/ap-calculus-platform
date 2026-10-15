export const microGovernmentInterventionPart3Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgov3-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention in Markets

**Part 3 of 7 — Excise Taxes: The Full Calculation**

---

| Section |
|---------|
| 📖 How a Per-Unit Tax Works |
| Worked Example: A \\$10 Tax |
| Who Really Pays: Incidence with Numbers |
| Elasticity, Revenue and Deadweight Loss |

> 🔑 **Key Concept:** A per-unit (excise) tax drives a **wedge** between the price buyers pay ($P_c$) and the price sellers keep ($P_s$): $P_c - P_s = t$. Quantity falls, the government collects $t \\times Q$, and the trades that no longer happen become **deadweight loss**.
`
    },
    {
      id: 'microgov3-mechanism',
      type: 'text' as const,
      content: `
## 📖 How a Per-Unit Tax Works

Suppose sellers must send the government \\$10 for every unit sold. A seller who needed \\$30 to supply a unit now needs \\$40 from the buyer to end up with the same \\$30. Every point on the supply curve moves **up by exactly \\$10**.

### Describing the Graph in Words
- Draw demand **D** and the original supply **S₁**; label the equilibrium price $P_1$ and quantity $Q_1$.
- Draw **S₂ = S₁ + tax**, parallel to S₁ and higher by the amount of the tax.
- The new equilibrium is where **S₂ crosses D**. Its height is $P_c$, the price buyers pay; its quantity is $Q_2$.
- Drop straight down from that point to **S₁**. That height is $P_s$, the price sellers keep.
- The vertical gap between $P_c$ and $P_s$ at $Q_2$ equals the tax.

### What Each Area Means

| Area on the graph | Meaning |
|---|---|
| Rectangle from $P_s$ up to $P_c$, width $Q_2$ | **Tax revenue** = $t \\times Q_2$ |
| Part of that rectangle above the old price $P_1$ | Tax burden on **buyers** |
| Part of that rectangle below $P_1$ | Tax burden on **sellers** |
| Triangle between D and S₁ from $Q_2$ to $Q_1$ | **Deadweight loss** |

> 🔑 **AP Connection:** The tax revenue rectangle is not a loss to society. It is a **transfer** from buyers and sellers to the government. Only the triangle is lost.
`
    },
    {
      id: 'microgov3-worked',
      type: 'text' as const,
      content: `
## Worked Example: A \\$10 Tax

Market from Part 2: $Q_d = 120 - 2P$ and $Q_s = 2P - 20$. Before the tax, $P = \\$35$, $Q = 50$, CS = PS = \\$625.

**Step 1: Rewrite supply in terms of the buyer's price.** Sellers keep $P_s = P_c - 10$, so

$$Q_s = 2(P_c - 10) - 20 = 2P_c - 40$$

**Step 2: Solve.** $120 - 2P_c = 2P_c - 40$, so $4P_c = 160$ and **$P_c = \\$40$**. Then **$P_s = \\$30$** and **$Q = 120 - 80 = 40$**.

**Step 3: Revenue.** $\\$10 \\times 40 = $ **\\$400**.

**Step 4: Surplus after the tax.**
- CS = ½ × 40 × (60 − 40) = **\\$400**
- PS = ½ × 40 × (30 − 10) = **\\$400**
- DWL = ½ × (50 − 40) × (40 − 30) = **\\$50**

| | Before | After \\$10 tax |
|---|---|---|
| Price buyers pay | \\$35 | \\$40 |
| Price sellers keep | \\$35 | \\$30 |
| Quantity | 50 | 40 |
| Consumer surplus | \\$625 | \\$400 |
| Producer surplus | \\$625 | \\$400 |
| Tax revenue | — | \\$400 |
| Deadweight loss | — | \\$50 |

Check: 400 + 400 + 400 + 50 = 1,250 ✓, the original total surplus.

### Taxing Buyers Instead Gives the Same Answer
If **buyers** must pay the \\$10, demand shifts **down** by \\$10: $Q_d = 120 - 2(P_s + 10) = 100 - 2P_s$. Setting that equal to $2P_s - 20$ gives $P_s = \\$30$ and $P_c = \\$40$, the same outcome. Who writes the check to the government does not decide who bears the tax.
`
    },
    {
      id: 'microgov3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the worked example, \\$400 of tax revenue is collected. How much of it comes out of buyers\' pockets?',
            options: [
              '\\$200',
              '\\$100',
              '\\$400',
              '\\$50'
            ],
            correctAnswer: 0,
            explanation: 'Buyers pay \\$40 instead of \\$35, so \\$5 per unit on 40 units is \\$200. Sellers keep \\$30 instead of \\$35 and bear the other \\$200. The \\$50 figure is the deadweight loss, which nobody collects.'
          },
          {
            question: 'A city moves its \\$1-per-ticket tax on movie tickets from theaters to moviegoers, who now pay it at the door. If nothing else changes, what happens to the price moviegoers pay in total?',
            options: [
              'It stays the same',
              'It rises by \\$1',
              'It falls by \\$1',
              'It rises by \\$0.50'
            ],
            correctAnswer: 0,
            explanation: 'The economic incidence depends on the elasticities of supply and demand, not on who sends the money to the government. The ticket price shown falls, but the ticket price plus the \\$1 paid at the door equals the old total, so buyers pay the same amount overall.'
          }
        ]
      }
    },
    {
      id: 'microgov3-incidence',
      type: 'text' as const,
      content: `
## Who Really Pays: Incidence with Numbers

In the worked example, demand and supply had slopes of equal size, so the burden split 50-50. That is a coincidence. Try a market where buyers are much less responsive than sellers:

$$Q_d = 100 - 2P \\qquad Q_s = 6P - 60$$

Before the tax: $100 - 2P = 6P - 60$, so $P = \\$20$ and $Q = 60$.

**An \\$8 tax on sellers:** $Q_s = 6(P_c - 8) - 60 = 6P_c - 108$. Setting $100 - 2P_c = 6P_c - 108$ gives $8P_c = 208$:

| Result | Value |
|---|---|
| Price buyers pay | **\\$26** (up \\$6) |
| Price sellers keep | **\\$18** (down \\$2) |
| Quantity | 100 − 52 = **48** |
| Tax revenue | \\$8 × 48 = **\\$384** |
| Buyers' share of the burden | \\$6 of \\$8 = **75%** |
| Deadweight loss | ½ × (60 − 48) × 8 = **\\$48** |

Buyers bear 75% because a \\$1 price change moves their quantity by only 2 units, while it moves sellers' quantity by 6. **The less elastic side cannot easily walk away from the market, so it absorbs more of the tax.**

### The Incidence Rule in One Line
$$\\frac{\\text{Buyers' share}}{\\text{Sellers' share}} = \\frac{\\text{Elasticity of supply}}{\\text{Elasticity of demand}}$$

You will not need this formula on the AP exam, but it explains the familiar rule: **whichever side is more inelastic pays more.**

> 🔑 **AP Connection:** Classic exam cases: cigarettes, gasoline and insulin have inelastic demand, so buyers bear most of a tax on them. A tax on a good with a fixed supply, such as land, falls mostly or entirely on its owners.
`
    },
    {
      id: 'microgov3-input',
      type: 'input-boxes' as const,
      content: `
**Solve a Tax Problem** ✍️

Demand is $Q_d = 80 - P$ and supply is $Q_s = P - 20$. The government places a **\\$6 per-unit tax** on sellers.

1) Price buyers pay after the tax, in dollars?

2) Price sellers keep after the tax, in dollars?

3) Tax revenue, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['53', '47', '162'],
        hint1: 'Supply in terms of the buyer\'s price: Qs = (Pc − 6) − 20. Set it equal to 80 − Pc.',
        hint2: 'Sellers keep the buyer\'s price minus the \\$6 tax.',
        hint3: 'Find Q = 80 − Pc, then multiply by \\$6.',
        explanation: '1) 80 − Pc = Pc − 26, so Pc = \\$53. 2) Ps = 53 − 6 = \\$47. 3) Q = 80 − 53 = 27, so revenue = 6 × 27 = \\$162. The original equilibrium was \\$50 and 30 units, so buyers and sellers each bear \\$3 of the tax.'
      }
    },
    {
      id: 'microgov3-elasticity',
      type: 'text' as const,
      content: `
## Elasticity, Revenue and Deadweight Loss

### Elastic Markets Lose More
Deadweight loss is a triangle with height $t$ and base equal to the **drop in quantity**. The more elastic demand or supply is, the more quantity falls, so:

| If demand or supply is... | Quantity falls... | Tax revenue is... | Deadweight loss is... |
|---|---|---|---|
| More **elastic** | A lot | Smaller (fewer units taxed) | **Larger** |
| More **inelastic** | A little | Larger | **Smaller** |
| Perfectly inelastic | Not at all | $t \\times Q$ at the old quantity | **Zero** |

This is why governments favor excise taxes on goods with inelastic demand: they raise revenue with little lost output.

### Bigger Taxes, Much Bigger Losses
Double the tax in the worked example to \\$20. Supply becomes $Q_s = 2P_c - 60$, so $P_c = \\$45$, $P_s = \\$25$, and $Q = 30$.

| Tax | Quantity | Revenue | Deadweight loss |
|---|---|---|---|
| \\$10 | 40 | \\$400 | ½ × 10 × 10 = \\$50 |
| \\$20 | 30 | \\$600 | ½ × 20 × 20 = **\\$200** |

Doubling the tax **quadrupled** the deadweight loss, because both the height and the base of the triangle doubled, while revenue rose by only half.

> 🔑 **AP Connection:** If a question asks why an excise tax is inefficient, say that it **reduces the quantity below the allocatively efficient level**, so units that buyers value above their cost are no longer produced.
`
    },
    {
      id: 'microgov3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'After a \\$2 per-unit tax on gasoline, the price buyers pay rises from \\$3.00 to \\$4.50. What does this show about the market?',
            options: [
              'Demand is less elastic than supply',
              'Supply is less elastic than demand',
              'Demand and supply are equally elastic',
              'Demand for gasoline is perfectly elastic'
            ],
            correctAnswer: 0,
            explanation: 'Buyers bear \\$1.50 of the \\$2 tax and sellers bear \\$0.50, so buyers carry the larger share. The side that bears more of a tax is the less elastic side; with perfectly elastic demand, buyers would bear none of it.'
          },
          {
            question: 'Two goods face the same \\$5 per-unit tax. Demand for good X is very elastic; demand for good Y is very inelastic. Supply conditions are identical. Compared with good Y, the tax on good X',
            options: [
              'raises less revenue and causes a larger deadweight loss',
              'brings in more revenue and causes a larger deadweight loss',
              'collects less revenue and causes a smaller deadweight loss',
              'raises the same revenue and creates no deadweight loss at all'
            ],
            correctAnswer: 0,
            explanation: 'Elastic demand means quantity drops sharply when the price buyers pay rises. Fewer units are taxed, so revenue is smaller, and the larger drop in quantity widens the deadweight loss triangle.'
          },
          {
            question: 'A per-unit tax is placed on a good whose supply is perfectly inelastic. Which outcome follows?',
            options: [
              'Sellers bear the whole tax and no deadweight loss arises',
              'Buyers bear the whole tax and no deadweight loss arises',
              'The tax is split evenly and a deadweight loss arises',
              'Buyers bear most of the tax and quantity falls slightly'
            ],
            correctAnswer: 0,
            explanation: 'With a vertical supply curve, quantity cannot change, so buyers keep paying the old price and sellers absorb the full tax. Because quantity stays at the efficient level, no trades are lost and there is no deadweight loss.'
          }
        ]
      }
    }
  ]
};
