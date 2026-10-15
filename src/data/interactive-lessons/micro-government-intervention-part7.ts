export const microGovernmentInterventionPart7Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgov7-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention in Markets

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 Every Policy in One Table |
| A Five-Step Method for Any Policy Question |
| Traps Across the Whole Topic |

> 🔑 **Key Concept:** Every policy in this topic moves the market away from the quantity where supply meets demand. Ceilings, floors, taxes and quotas push quantity **below** it; subsidies push it **above** it. Either way, some value is lost (deadweight loss), and the policy decides who gains and who pays.
`
    },
    {
      id: 'microgov7-table',
      type: 'text' as const,
      content: `
## 📖 Every Policy in One Table

Arrows compare each policy with the free-market equilibrium in a competitive market with no externalities.

| Policy | Price buyers pay | Price sellers keep | Quantity traded | CS | PS | Government | DWL? |
|---|---|---|---|---|---|---|---|
| Binding ceiling | ↓ | ↓ | ↓ (= $Q_s$) | Can rise or fall | ↓ | — | Yes |
| Binding floor (no purchases) | ↑ | ↑ | ↓ (= $Q_d$) | ↓ | Can rise or fall | — | Yes |
| Per-unit tax | ↑ | ↓ | ↓ | ↓ | ↓ | Revenue = $t \\times Q$ | Yes |
| Per-unit subsidy | ↓ | ↑ | ↑ | ↑ | ↑ | Cost = $s \\times Q$ | Yes |
| Quota | ↑ | Supply price ↓; holders earn rent | ↓ | ↓ | Can rise or fall | — | Yes |
| Free trade, importing | ↓ | ↓ | Consumption ↑, production ↓ | ↑ | ↓ | — | No; total surplus ↑ |
| Tariff (vs. free trade) | ↑ | ↑ | Consumption ↓, production ↑ | ↓ | ↑ | Revenue = $t \\times$ imports | Yes, two triangles |

### Where the Deadweight Loss Sits
- **Quantity pushed below equilibrium** (ceiling, floor, tax, quota): the triangle is to the **left** of $Q^*$, between demand and supply.
- **Quantity pushed above equilibrium** (subsidy, floor with government purchases): the triangle is to the **right** of $Q^*$, where cost exceeds value.
- **Tariff:** one triangle on the production side and one on the consumption side, on either side of the imports.

### Why Governments Intervene Anyway
Efficiency is not the only goal. Price controls aim at **fairness** for renters or low-wage workers, excise taxes **raise revenue**, and tariffs **protect** particular industries. Later topics add a stronger reason: when a market has an **externality**, a well-chosen tax or subsidy can **reduce** deadweight loss instead of creating it.
`
    },
    {
      id: 'microgov7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which policy, applied to a competitive market with no externalities, increases the quantity traded above the equilibrium quantity?',
            options: [
              'A per-unit subsidy paid to sellers',
              'A per-unit tax paid by buyers',
              'A binding minimum price',
              'A binding maximum price'
            ],
            correctAnswer: 0,
            explanation: 'A subsidy lowers producers\' effective costs, shifting supply right so quantity rises past the efficient level. Taxes and binding price controls all reduce the quantity traded.'
          },
          {
            question: 'Under which policy does the area that would otherwise be tax revenue go to private license holders?',
            options: [
              'A quota',
              'A per-unit subsidy',
              'A binding price floor',
              'A binding price ceiling'
            ],
            correctAnswer: 0,
            explanation: 'A quota creates the same price wedge as a tax, but the gap between what buyers pay and the supply price goes to whoever holds the right to sell. That rectangle is called quota rent.'
          },
          {
            question: 'Which pair of policies always lowers producer surplus in the market where it is applied?',
            options: [
              'A per-unit tax on sellers and a binding price ceiling on the good',
              'A per-unit subsidy to sellers and a binding price floor on the good',
              'A tariff on imports and a binding price ceiling on the domestic good',
              'A quota on the good and a per-unit subsidy paid to buyers of the good'
            ],
            correctAnswer: 0,
            explanation: 'A tax lowers the price sellers keep and the quantity they sell, and a binding ceiling lowers both too, so producer surplus must fall. Subsidies and tariffs raise producer surplus, while floors and quotas can raise or lower it.'
          }
        ]
      }
    },
    {
      id: 'microgov7-method',
      type: 'text' as const,
      content: `
## A Five-Step Method for Any Policy Question

| Step | Question to ask | Example: a \\$5 tax |
|---|---|---|
| 1. Classify | Is it a price control, a tax or subsidy, a quantity limit, or a trade policy? | Per-unit tax |
| 2. Check binding | Does it actually change the market outcome? | Taxes always bind |
| 3. Graph it | Which curve shifts, or where does the new line go? | Supply shifts up by \\$5 |
| 4. Read prices and quantity | What do buyers pay, sellers keep, and how many units trade? | Buyers pay more, sellers keep less, quantity falls |
| 5. Sort the areas | CS, PS, government revenue or cost, quota rent, DWL | Revenue rectangle, DWL triangle |

### Worked Mini-Example
$Q_d = 90 - 3P$ and $Q_s = 2P - 10$, so the market clears at $P = \\$20$, $Q = 30$.

- **Ceiling of \\$18** (binding): $Q_s = 26$, $Q_d = 36$, shortage of 10; 26 units trade.
- **Floor of \\$15**: not binding, because \\$15 is below \\$20. Nothing changes.
- **Quota of 24 units**: buyers pay $(90 - 24)/3 = \\$22$; the supply price is $(24 + 10)/2 = \\$17$; quota rent = \\$5 × 24 = \\$120.

Notice that the quota of 24 creates a \\$5 wedge between the buyer price and the supply price. The input problem below shows that a \\$5 tax produces exactly the same prices and quantity.
`
    },
    {
      id: 'microgov7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Review Calculation** ✍️

Same market: $Q_d = 90 - 3P$ and $Q_s = 2P - 10$. The government places a **\\$5 per-unit tax** on sellers.

1) Price buyers pay after the tax, in dollars?

2) Quantity traded after the tax?

3) Deadweight loss, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['22', '24', '15'],
        hint1: 'Qs = 2(Pc − 5) − 10 = 2Pc − 20. Set it equal to 90 − 3Pc.',
        hint2: 'Substitute the buyer price into demand.',
        hint3: '½ × (30 − 24) × \\$5.',
        explanation: '1) 90 − 3Pc = 2Pc − 20, so 5Pc = 110 and Pc = \\$22 (sellers keep \\$17). 2) Q = 90 − 66 = 24. 3) DWL = ½ × 6 × 5 = \\$15. Buyers bear \\$2 of the tax and sellers \\$3, so supply is the less elastic side here.'
      }
    },
    {
      id: 'microgov7-traps',
      type: 'text' as const,
      content: `
## Traps Across the Whole Topic

| Trap | Correct idea |
|---|---|
| "A ceiling creates a shortage." | Only a **binding** ceiling, set **below** equilibrium. |
| "Under a ceiling, quantity traded = quantity demanded." | Quantity traded is the **short side**: $Q_s$ under a ceiling, $Q_d$ under a floor. |
| "Whoever pays the tax to the government bears it." | Incidence depends only on **elasticities**; the more inelastic side bears more. |
| "Tax revenue is part of the deadweight loss." | Revenue is a **transfer**; only the triangle of lost trades is deadweight loss. |
| "A subsidy has no deadweight loss because everyone gains." | Buyers and sellers gain **less** than the subsidy costs taxpayers. |
| "A bigger tax always raises more revenue." | Revenue = $t \\times Q$, and Q falls as $t$ rises; a large enough tax can shrink revenue. |
| "Tariff revenue = tariff × domestic consumption." | Tariff revenue = tariff × **imports** only. |
| "A ceiling always helps consumers." | Buyers who still get the good gain; buyers who are shut out lose. The net can go either way. |

> 🔑 **AP Connection:** Before you answer, decide whether the question asks about **a group** (consumers, producers, the government) or about **society** (total surplus). A policy can help one group while lowering total surplus.
`
    },
    {
      id: 'microgov7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Policy Effects** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A per-unit subsidy places the deadweight loss to the ___ of the free-market quantity',
            options: ['Right', 'Left', 'Center', 'Neither side']
          },
          {
            label: 'Of a per-unit tax, the more inelastic side of the market bears ___',
            options: ['The larger share', 'The smaller share', 'Exactly half', 'None of it']
          },
          {
            label: 'Compared with free trade, a tariff makes domestic producers ___',
            options: ['Better off', 'Worse off', 'Unaffected', 'Exit the market']
          }
        ],
        correctAnswers: ['Right', 'The larger share', 'Better off'],
        hint1: 'Subsidies push quantity above the efficient level.',
        hint2: 'Which side finds it hardest to change its quantity?',
        hint3: 'The domestic price rises and they sell more.',
        explanation: 'A subsidy causes overproduction, so its deadweight loss lies beyond the free-market quantity. The less responsive side cannot avoid the tax and bears more of it. A tariff raises the domestic price, so domestic producers sell more at a higher price.'
      }
    },
    {
      id: 'microgov7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A tax of \\$2 per unit on a product reduces the quantity sold from 1,000 to 900, and the price buyers pay rises by \\$0.50. What is the tax revenue?',
            options: [
              '\\$1,800',
              '\\$2,000',
              '\\$450',
              '\\$100'
            ],
            correctAnswer: 0,
            explanation: 'Revenue is the tax times the quantity actually sold after the tax: \\$2 × 900 = \\$1,800. Using the old quantity gives \\$2,000; the \\$0.50 figure only tells you buyers bear a quarter of the tax.'
          },
          {
            question: 'Economists often say that taxing a good with very inelastic demand is a relatively efficient way to raise revenue. What is the reasoning?',
            options: [
              'Quantity barely falls, so few trades are lost and the deadweight loss remains small',
              'Buyers bear the whole tax, so sellers keep all of their original producer surplus',
              'The price paid by buyers barely rises, so consumer surplus stays almost the same',
              'Sellers bear most of the tax, so the government collects more than its full amount'
            ],
            correctAnswer: 0,
            explanation: 'Deadweight loss comes from trades that stop happening. With inelastic demand, quantity changes little, so the lost-trade triangle is small and revenue stays high. Buyers do bear most of such a tax, which is why the other reasons fail.'
          },
          {
            question: 'A binding price floor and a per-unit tax both lower the quantity traded to 80 units in a market whose equilibrium quantity is 100. Which result is the same under both policies?',
            options: [
              'The deadweight loss triangle',
              'The price sellers receive',
              'The size of the surplus',
              'The revenue to government'
            ],
            correctAnswer: 0,
            explanation: 'Both policies cut quantity to 80, so the same trades between 80 and 100 are lost and the deadweight loss is identical. The floor raises the sellers\' price while the tax lowers it, and only the tax produces revenue.'
          }
        ]
      }
    }
  ]
};
