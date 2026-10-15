export const microExternalitiesPublicGoodsPart4Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext4-intro',
      type: 'text' as const,
      content: `
# 💰 Externalities & Public Goods

**Part 4 of 7 — Correcting Externalities: Policy Tools**

---

| Section |
|---------|
| 📖 Setting the Pigouvian Tax |
| Getting the Size Wrong |
| Subsidies for Positive Externalities |
| Regulation and Other Tools |

> 🔑 **Key Concept:** A corrective policy works by making decision makers face the **full social cost or benefit** of each unit, which economists call **internalizing** the externality. The ideal per-unit tax equals the **marginal external cost at the socially optimal quantity**; the ideal per-unit subsidy equals the **marginal external benefit at the socially optimal quantity**. A policy that is too small or too large leaves a deadweight loss behind.
      `
    },
    {
      id: 'microext4-pigouvian',
      type: 'text' as const,
      content: `
## 📖 Setting the Pigouvian Tax

A **Pigouvian tax** is a per-unit tax set to correct a negative externality. When the marginal external cost is the same for every unit, the right tax is simply that MEC (Part 3). When the harm per unit **grows** with output, you must decide **which unit's** MEC to use.

### Worked Example: Rising External Cost
A competitive market for a pesticide has demand **P = 70 − Q** and marginal private cost **P = 10 + Q**. Runoff gets more harmful as more pesticide is used: **MEC = Q**, so MSC is **P = 10 + 2Q**.

**Market outcome:** 70 − Q = 10 + Q gives $Q_m$ = **30** at **\\$40**. The MEC of the 30th unit is \\$30.

**Social optimum:** 70 − Q = 10 + 2Q gives $Q^*$ = **20**, where MSB = MSC = **\\$50**. The MEC of the 20th unit is \\$20.

**Deadweight loss without a tax:** at Q = 30, MSC = \\$70 and MSB = \\$40, so DWL = ½ × (30 − 20) × \\$30 = **\\$150**.

**The right tax is \\$20, the MEC at $Q^*$.** Firms now face P = 30 + Q:

| Result with a \\$20 tax | Value |
|---|---|
| Quantity | 70 − Q = 30 + Q, so **20** |
| Price buyers pay | **\\$50** |
| Price sellers keep | **\\$30** |
| Tax revenue | \\$20 × 20 = **\\$400** |
| Deadweight loss | **\\$0** |

With the tax, the private cost firms face (MPC + \\$20) crosses demand at the same point where MSC does. Units beyond 20 are no longer worth producing to the firm, because the buyer's price would not cover the firm's cost plus the tax.

> 🔑 **AP Connection:** A per-unit tax works because it raises **marginal** cost. A flat fee that does not depend on how much is produced, such as a one-time permit charge, leaves each unit's marginal cost unchanged, so it does not target the externality at the margin.
      `
    },
    {
      id: 'microext4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Each extra unit of a good does more pollution damage than the one before. A regulator wants a per-unit tax that eliminates the deadweight loss. The tax should equal the marginal external cost',
            options: [
              'at the socially optimal quantity',
              'at the current market quantity',
              'averaged over all units now sold',
              'of the very first unit produced'
            ],
            correctAnswer: 0,
            explanation: 'The goal is for the taxed private cost to cross demand exactly where MSC does, which happens only if the tax equals MEC at the optimal quantity. The MEC at the market quantity is larger and would cut output too far, while an average or first-unit MEC is too small.'
          },
          {
            question: 'Demand is P = 100 − Q and marginal private cost is P = 20 + Q. The marginal external cost is MEC = 0.5Q. What per-unit tax moves the market to the socially optimal quantity?',
            options: [
              '\\$16',
              '\\$20',
              '\\$32',
              '\\$60'
            ],
            correctAnswer: 0,
            explanation: 'MSC is P = 20 + 1.5Q, and 100 − Q = 20 + 1.5Q gives an optimal quantity of 32, where MEC = 0.5 × 32 = \\$16. \\$20 is the MEC at the market quantity of 40, \\$32 is the optimal quantity itself, and \\$60 is the untaxed market price.'
          },
          {
            question: 'Which policy toward a positive consumption externality moves the market toward the socially optimal quantity?',
            options: [
              'A per-unit subsidy to buyers',
              'A per-unit tax on sellers',
              'A binding price floor',
              'A cap on the quantity sold'
            ],
            correctAnswer: 0,
            explanation: 'The market buys too little, so the policy must raise quantity; a subsidy to buyers lifts demand toward MSB. A tax, a binding price floor and a quantity cap all reduce the quantity traded and make the shortfall worse.'
          }
        ]
      }
    },
    {
      id: 'microext4-wrong',
      type: 'text' as const,
      content: `
## Getting the Size Wrong

Stay in the pesticide market and try four different taxes. Each one shifts the private cost curve up to P = (10 + t) + Q, so the quantity is (60 − t) ÷ 2.

| Per-unit tax | Quantity | Buyers pay | Sellers keep | Revenue | Deadweight loss |
|---|---|---|---|---|---|
| \\$0 | 30 | \\$40 | \\$40 | \\$0 | ½ × 10 × \\$30 = **\\$150** |
| \\$10 (too small) | 25 | \\$45 | \\$35 | \\$250 | ½ × 5 × \\$15 = **\\$37.50** |
| **\\$20 (MEC at Q\\*)** | **20** | **\\$50** | **\\$30** | **\\$400** | **\\$0** |
| \\$30 (MEC at $Q_m$) | 15 | \\$55 | \\$25 | \\$450 | ½ × 5 × \\$15 = **\\$37.50** |

### Undercorrection
A \\$10 tax stops at 25 units. The units from 21 to 25 still have MSC above MSB (at 25: MSC = \\$60, MSB = \\$45), so part of the original triangle remains.

### Overcorrection
A \\$30 tax, set at the harm of the **last** unit the untaxed market produced, cuts output to 15. Now units 16 to 20 are missing even though their MSB is **above** their MSC (at 15: MSB = \\$55, MSC = \\$40). A **new** deadweight loss triangle appears on the other side of $Q^*$.

### Why Not Ban It?
A ban sets Q = 0. In this market, social surplus at the optimum is the area between MSB and MSC from 0 to 20: (\\$60 + \\$0) ÷ 2 × 20 = **\\$600**. A ban gives all of it up, which is worse than doing nothing (a \\$150 loss). Banning makes sense only when MSC is above MSB for **every** unit.

> ⚠️ **Common trap:** "The tax should equal the damage the market is causing now" sounds right but overcorrects whenever MEC rises with output. The correct tax is the damage of the **last unit that should be produced**.
      `
    },
    {
      id: 'microext4-input',
      type: 'input-boxes' as const,
      content: `
**Size the Tax** ✍️

In a competitive market, demand is **P = 80 − Q** and marginal private cost is **P = 20 + Q**. The marginal external cost is **MEC = 0.5Q**.

1) What is the socially optimal quantity?

2) What per-unit tax moves the market to that quantity? (dollars, number only)

3) How much revenue does that tax raise? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '12', '288'],
        hint1: 'MSC = MPC + MEC = 20 + 1.5Q. Set it equal to demand.',
        hint2: 'Evaluate MEC = 0.5Q at the optimal quantity, not at the market quantity of 30.',
        hint3: 'Revenue = tax × quantity after the tax.',
        explanation: '1) 80 − Q = 20 + 1.5Q gives 2.5Q = 60, so Q* = 24. 2) MEC at 24 is 0.5 × 24 = \\$12; check: 80 − Q = 32 + Q gives Q = 24. 3) \\$12 × 24 = \\$288. A tax of \\$15, the MEC at the market quantity of 30, would overcorrect to 22.5 units.'
      }
    },
    {
      id: 'microext4-subsidy',
      type: 'text' as const,
      content: `
## Subsidies for Positive Externalities

For a positive externality, the mirror-image tool is a per-unit **subsidy equal to the MEB at the socially optimal quantity**.

| Who receives the subsidy | Which curve moves | Example |
|---|---|---|
| **Buyers** (positive consumption externality) | Demand (MPB) shifts **up** to MSB | A \\$10 voucher toward each flu shot |
| **Sellers** (positive production externality) | Supply (MPC) shifts **down** to MSC | A payment per acre to farmers who plant windbreaks that protect neighbors' soil |

As Part 3 showed, paying the same per-unit subsidy to buyers or to sellers leads to the same quantity, the same net prices and the same cost to the government. The choice is about administration, not results.

### Other Ways to Raise Quantity
- **Government provision:** the government supplies the good itself, as with public schools or free vaccination clinics.
- **Mandates:** a rule requires the activity, as with school vaccination requirements.

### The Same Sizing Rules Apply
- A subsidy **smaller** than the MEB at $Q^*$ leaves some underproduction.
- A subsidy **larger** than the MEB at $Q^*$ pushes output past $Q^*$, and those extra units cost more than they are worth to society. A **new** deadweight loss appears.

> 🔑 **AP Connection:** In Government Intervention, a subsidy in a market with no externality caused overproduction and a deadweight loss. With a positive externality, the market starts **below** $Q^*$, so the right-sized subsidy removes deadweight loss instead.
      `
    },
    {
      id: 'microext4-regulation',
      type: 'text' as const,
      content: `
## Regulation and Other Tools

Instead of changing prices, the government can set **quantities** directly, for example by limiting how much of a polluting good firms may produce.

### A Quantity Limit in the Pesticide Market
A cap of **20 units** reaches the social optimum, just like the \\$20 tax. But the two policies split the gains differently:
- At 20 units, buyers are willing to pay **\\$50**, and the MPC of the 20th unit is only **\\$30**.
- Under the **tax**, the \\$20 gap goes to the government as \\$400 of revenue.
- Under the **cap**, there is no revenue. The firms allowed to sell keep the higher price as extra profit.

### Comparing the Tools

| Tool | Reaches $Q^*$ if set correctly? | Government revenue or cost | Information needed |
|---|---|---|---|
| Pigouvian tax | Yes | Raises revenue | MEC at $Q^*$ |
| Quantity limit | Yes | None | The value of $Q^*$ |
| Per-unit subsidy (positive externality) | Yes | Costs money | MEB at $Q^*$ |
| Ban | Only if no unit is worth producing | None | Whether MSB is ever above MSC |
| Doing nothing | No | None | None |

Every tool depends on an estimate of the external cost or benefit. If regulators overestimate the harm, any of these tools can overcorrect.
      `
    },
    {
      id: 'microext4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A regulator sets a per-unit tax on a polluting good that is larger than the marginal external cost at the socially optimal quantity. The tax will',
            options: [
              'cut output below the optimal quantity and create a new deadweight loss',
              'reach the optimal quantity and collect some extra tax revenue too',
              'raise output above the market quantity and widen the deadweight loss',
              'leave output unchanged, since sellers simply pass the whole tax on'
            ],
            correctAnswer: 0,
            explanation: 'A tax larger than the MEC at the optimum pushes the private cost curve above MSC where it crosses demand, so output falls below the optimal quantity and units worth more than their social cost are lost. A tax raises cost, so it cannot raise output.'
          },
          {
            question: 'A town caps a factory\'s output at the socially optimal quantity instead of taxing each unit. Compared with a tax that reaches the same quantity, the cap',
            options: [
              'raises no tax revenue',
              'creates a larger deadweight loss',
              'lets more pollution reach the river',
              'charges buyers a lower price per unit'
            ],
            correctAnswer: 0,
            explanation: 'Both policies end at the same quantity, so pollution, the buyers\' price and the deadweight loss (zero) are the same. The difference is who keeps the gap between the buyers\' price and MPC: the government under the tax, the firms under the cap.'
          },
          {
            question: 'For a certain good, MSB is greater than MSC for the first 20 units and less than MSC for every unit after that. Banning the good entirely would',
            options: [
              'give up the gains on output worth making',
              'remove the deadweight loss with no cost at all',
              'raise social surplus to its largest possible value',
              'leave social surplus exactly where the market left it'
            ],
            correctAnswer: 0,
            explanation: 'The first 20 units are worth more to society than they cost, so a ban destroys that surplus, possibly more than the deadweight loss it removes. The best quantity is 20, which a correctly sized tax or cap reaches.'
          }
        ]
      }
    }
  ]
}
