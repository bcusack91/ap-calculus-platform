export const microExternalitiesPublicGoodsPart3Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext3-intro',
      type: 'text' as const,
      content: `
# 💰 Externalities & Public Goods

**Part 3 of 7 — Calculating Externalities**

---

| Section |
|---------|
| 📖 Setting Up the Equations |
| Worked Example: A Polluting Paper Mill |
| Counting Social Surplus |
| Worked Example: Flu Shots |

> 🔑 **Key Concept:** Externality problems use one recipe. Solve **MPB = MPC** for the market quantity, solve **MSB = MSC** for the socially optimal quantity, and find the deadweight loss as a triangle whose base is the gap between MSB and MSC at the market quantity. A per-unit tax or subsidy equal to the external cost or benefit at the optimum moves the market to the optimal quantity.
      `
    },
    {
      id: 'microext3-setup',
      type: 'text' as const,
      content: `
## 📖 Setting Up the Equations

Problems give you some of the six curves as equations and expect you to build the rest.

| You are given | Build this | Example |
|---|---|---|
| Demand and no consumption externality | MSB = MPB = demand | D: P = 100 − Q, so MSB: P = 100 − Q |
| MPC and a constant MEC of \\$20 | MSC = MPC + 20 | MPC: P = 20 + Q, so MSC: P = 40 + Q |
| Demand and a constant MEB of \\$10 | MSB = MPB + 10 | MPB: P = 60 − Q, so MSB: P = 70 − Q |
| MPC and an MEC that grows, such as MEC = Q | MSC = MPC + Q | MPC: P = 10 + Q, so MSC: P = 10 + 2Q |

### The Recipe
1. **Market outcome:** set MPB = MPC. This gives $Q_m$ and the market price.
2. **Social optimum:** set MSB = MSC. This gives $Q^*$.
3. **Deadweight loss:** ½ × (distance between $Q_m$ and $Q^*$) × (MSC − MSB, measured at $Q_m$). Use the absolute value of the gap.
4. **Correction:** a per-unit tax (negative externality) or subsidy (positive externality) equal to MEC or MEB **at $Q^*$**.

> ⚠️ **Common trap:** When you add a constant MEC to an equation written as P = ..., you add it to the **intercept**: MPC of P = 20 + Q plus \\$20 is P = 40 + Q, not P = 20 + 21Q. Adding a cost moves the curve **up**, by the same amount at every quantity.
      `
    },
    {
      id: 'microext3-mill',
      type: 'text' as const,
      content: `
## Worked Example: A Polluting Paper Mill

Paper is sold in a competitive market. Demand is **P = 100 − Q**, marginal private cost is **P = 20 + Q** (Q in tons), and each ton's waste does **\\$20** of damage to fisheries downstream. No consumption externality exists, so MSB is the demand curve.

### Step 1: Market Outcome
100 − Q = 20 + Q, so 2Q = 80 and **$Q_m$ = 40**, at a price of **\\$60**.

### Step 2: Social Optimum
MSC is P = 40 + Q. Setting 100 − Q = 40 + Q gives **$Q^*$ = 30**, where MSB = MSC = **\\$70**.

### Step 3: Deadweight Loss
At $Q_m$ = 40, MSC = 40 + 40 = \\$80 and MSB = 100 − 40 = \\$60. The gap is \\$20.

DWL = ½ × (40 − 30) × \\$20 = **\\$100**

The 10 tons from the 31st to the 40th each cost society more than buyers value them.

### Step 4: A Corrective Tax
Put a **\\$20 per-unit tax** on paper, equal to the MEC at $Q^*$. The supply curve firms face becomes P = 40 + Q, which is exactly MSC.

| Result | Value |
|---|---|
| Quantity | **30** tons |
| Price buyers pay | 100 − 30 = **\\$70** |
| Price sellers keep | \\$70 − \\$20 = **\\$50** |
| Tax revenue | \\$20 × 30 = **\\$600** |
| Deadweight loss | **\\$0** |

> 🔑 **AP Connection:** This is the same per-unit tax you learned in Government Intervention, with one difference. There, the tax pushed a market **away** from the efficient quantity and created deadweight loss. Here, the market started at the wrong quantity, so the tax moves it **toward** the efficient one and removes deadweight loss.
      `
    },
    {
      id: 'microext3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Demand for a good is P = 120 − 2Q and marginal private cost is P = 30 + Q. Making each unit causes \\$15 of external cost. What is the socially optimal quantity?',
            options: [
              '25 units',
              '30 units',
              '35 units',
              '5 units'
            ],
            correctAnswer: 0,
            explanation: 'MSC is P = 45 + Q, and 120 − 2Q = 45 + Q gives Q = 25. Thirty units is the market quantity, where demand meets MPC, and 35 comes from subtracting the external cost instead of adding it.'
          },
          {
            question: 'In the same market (demand P = 120 − 2Q, MPC of P = 30 + Q, external cost of \\$15 per unit), what is the deadweight loss at the market quantity?',
            options: [
              '\\$37.50',
              '\\$75.00',
              '\\$450',
              '\\$375'
            ],
            correctAnswer: 0,
            explanation: 'The market makes 30 units and the optimum is 25, and the gap between MSC and MSB at 30 units is the \\$15 MEC, so DWL = ½ × 5 × \\$15 = \\$37.50. \\$75 leaves out the ½, and \\$450 and \\$375 are total external costs at the two quantities, not deadweight loss.'
          }
        ]
      }
    },
    {
      id: 'microext3-surplus',
      type: 'text' as const,
      content: `
## Counting Social Surplus

When there is an externality, the surplus that buyers and sellers see is not the whole story. **Total social surplus** subtracts the harm done to third parties:

$$\\text{Social surplus} = \\text{CS} + \\text{PS} + \\text{tax revenue} - \\text{total external cost}$$

Using the paper mill (CS uses demand P = 100 − Q; PS uses MPC, which starts at \\$20):

| | No tax (40 tons at \\$60) | \\$20 tax (30 tons) |
|---|---|---|
| Consumer surplus | ½ × 40 × \\$40 = \\$800 | ½ × 30 × \\$30 = \\$450 |
| Producer surplus | ½ × 40 × \\$40 = \\$800 | ½ × 30 × \\$30 = \\$450 |
| Tax revenue | \\$0 | \\$20 × 30 = \\$600 |
| Total external cost | \\$20 × 40 = \\$800 | \\$20 × 30 = \\$600 |
| **Social surplus** | **\\$800** | **\\$900** |

The tax **raises** social surplus by \\$100, exactly the deadweight loss it removed. Buyers and sellers lose \\$700 of private surplus, but the government collects \\$600 and the fisheries suffer \\$200 less damage.

**Check:** the area between MSB and MSC from 0 to 30 is ½ × 30 × (\\$100 − \\$40) = \\$900 ✓, the most this market can deliver.
      `
    },
    {
      id: 'microext3-input',
      type: 'input-boxes' as const,
      content: `
**Solve an Externality Problem** ✍️

In a competitive market, demand is **P = 90 − Q** and marginal private cost is **P = 10 + Q**. Each unit produced causes **\\$10** of external cost.

1) What is the socially optimal quantity?

2) What is the deadweight loss of the market outcome? (dollars, number only)

3) A per-unit tax moves the market to the optimal quantity. How much revenue does it raise? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['35', '25', '350'],
        hint1: 'MSC adds the \\$10 to the intercept: P = 20 + Q. Set it equal to demand.',
        hint2: 'The market quantity is where 90 − Q = 10 + Q. The base of the triangle is the \\$10 gap.',
        hint3: 'The tax equals the \\$10 MEC. Multiply by the optimal quantity, not the market quantity.',
        explanation: '1) 90 − Q = 20 + Q gives Q* = 35. 2) The market makes 40 units, so DWL = ½ × (40 − 35) × \\$10 = \\$25. 3) A \\$10 tax on 35 units raises \\$350; buyers pay \\$55 and sellers keep \\$45.'
      }
    },
    {
      id: 'microext3-flu',
      type: 'text' as const,
      content: `
## Worked Example: Flu Shots

Flu shots create a **positive consumption externality**. Marginal private benefit (demand) is **P = 60 − Q**, each shot gives others **\\$10** of protection, and marginal cost is **P = 10 + Q** (Q in thousands of shots). Making shots creates no externality, so MSC = MPC.

### Step 1: Market Outcome
60 − Q = 10 + Q gives **$Q_m$ = 25** at a price of **\\$35**.

### Step 2: Social Optimum
MSB is P = 70 − Q. Setting 70 − Q = 10 + Q gives **$Q^*$ = 30**, where MSB = MSC = **\\$40**.

### Step 3: Deadweight Loss
At $Q_m$ = 25, MSB = \\$45 and MSC = \\$35, a \\$10 gap.

DWL = ½ × (30 − 25) × \\$10 = **\\$25 thousand**

These are shots that would protect the community by more than they cost, yet nobody buys them.

### Step 4: A Corrective Subsidy
Give buyers a **\\$10 subsidy** per shot, equal to the MEB at $Q^*$. Demand as sellers see it becomes P = 70 − Q, which is MSB.

| Result | Value |
|---|---|
| Quantity | **30** thousand shots |
| Price sellers receive | 10 + 30 = **\\$40** |
| Net price buyers pay | \\$40 − \\$10 = **\\$30** |
| Cost to the government | \\$10 × 30 = **\\$300** thousand |
| Deadweight loss | **\\$0** |

Paying the subsidy to **sellers** instead lowers their marginal cost by \\$10 (P = Q). Setting 60 − Q = Q gives the same 30 thousand shots, buyers pay the same \\$30, sellers receive the same \\$40 in total, and the government pays the same \\$300 thousand.
      `
    },
    {
      id: 'microext3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Demand for a good is P = 50 − Q, its marginal cost is P = 6 + Q, and each unit consumed gives third parties \\$8 of benefit. The government pays buyers a subsidy that moves the market to the optimal quantity. What does the subsidy cost?',
            options: [
              '\\$208',
              '\\$176',
              '\\$16',
              '\\$32'
            ],
            correctAnswer: 0,
            explanation: 'MSB is P = 58 − Q, and 58 − Q = 6 + Q gives an optimal quantity of 26. An \\$8 subsidy on 26 units costs \\$208. \\$176 pays it on the old market quantity of 22, and \\$16 is the deadweight loss the subsidy removes.'
          },
          {
            question: 'At the market quantity in the paper-mill example, a ton of paper sells for \\$60 but has a marginal social cost of \\$80. Why is making that ton a loss to society?',
            options: [
              'Its cost including river damage is more than buyers value it',
              'Its price is below the cost that the mill itself pays to produce it',
              'Its sale cuts consumer surplus by more than it raises producer surplus',
              'Its production raises the price that buyers pay for all other tons'
            ],
            correctAnswer: 0,
            explanation: 'The buyer values the ton at \\$60 (its height on demand), while the mill\'s cost plus the river damage is \\$80, so it destroys \\$20 of value. The mill\'s own cost for that ton is exactly \\$60, so price is not below private cost.'
          },
          {
            question: 'After the paper mill\'s \\$20 tax, consumer and producer surplus fall by \\$700 in total, yet total social surplus rises by \\$100. Where does the gain come from?',
            options: [
              'Tax revenue and lower damage add up to more than the private loss',
              'Revenue from the tax alone exceeds the drop in private surplus',
              'Producers pass the whole tax on, so only buyers lose surplus',
              'The tax pushes the market quantity up to the efficient level'
            ],
            correctAnswer: 0,
            explanation: 'The government collects \\$600 and external damage falls from \\$800 to \\$600, a \\$200 saving: \\$800 in total, \\$100 more than the \\$700 private loss. Revenue alone (\\$600) is less than \\$700, and the tax lowers quantity, from 40 tons to 30.'
          }
        ]
      }
    }
  ]
}
