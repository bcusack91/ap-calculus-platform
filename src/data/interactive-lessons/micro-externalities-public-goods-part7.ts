export const microExternalitiesPublicGoodsPart7Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext7-intro',
      type: 'text' as const,
      content: `
# 💰 Externalities & Public Goods

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Four Externalities in One Table |
| A Checklist for Any Externality Question |
| The Goods Matrix: Problem and Fix |
| Mixed Review |

> 🔑 **Key Concept:** Externalities and public goods are both cases where **someone other than the buyer and seller gains or loses**, so private decisions ignore part of the value at stake. Negative spillovers lead to too much, positive spillovers and public goods lead to too little, and nonexcludable rival resources get overused. Every fix works by making decision makers face the full social cost or benefit.
      `
    },
    {
      id: 'microext7-master',
      type: 'text' as const,
      content: `
## 📖 The Four Externalities in One Table

| Case | Example | Curve that differs | Market vs optimal | Corrective policy |
|---|---|---|---|---|
| Negative production | Paper mill polluting a river | MSC **above** MPC | **Too much** ($Q_m > Q^*$) | Per-unit tax = MEC at $Q^*$; quantity limit |
| Positive production | Bees pollinating orchards | MSC **below** MPC | **Too little** | Per-unit subsidy to producers = MEB at $Q^*$ |
| Negative consumption | Secondhand smoke | MSB **below** MPB | **Too much** | Per-unit tax = MEC at $Q^*$ |
| Positive consumption | Flu shots, education | MSB **above** MPB | **Too little** | Per-unit subsidy to buyers = MEB at $Q^*$; provision or mandates |

### What Never Changes
- The market quantity is where the **private** curves cross (MPB = MPC).
- The socially optimal quantity is where the **social** curves cross (MSB = MSC).
- Deadweight loss is the triangle **between MSB and MSC**, from $Q^*$ to $Q_m$, with its point at $Q^*$.
- The vertical gap between a private curve and its social twin is the **marginal external cost or benefit**.

### Numbers Worth Remembering from Parts 3–4
| Market | $Q_m$ | $Q^*$ | DWL | Correct policy |
|---|---|---|---|---|
| Paper mill: D P = 100 − Q, MPC P = 20 + Q, MEC \\$20 | 40 | 30 | \\$100 | \\$20 tax |
| Flu shots: MPB P = 60 − Q, MC P = 10 + Q, MEB \\$10 | 25 | 30 | \\$25 thousand | \\$10 subsidy |
| Pesticide: D P = 70 − Q, MPC P = 10 + Q, MEC = Q | 30 | 20 | \\$150 | \\$20 tax (not \\$30) |
      `
    },
    {
      id: 'microext7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A homeowner\'s well-kept garden raises the value of the houses next door. Which description fits the market for garden upkeep?',
            options: [
              'MSB lies above MPB, and too little upkeep is bought',
              'MSB lies above MPB, and too much upkeep is bought',
              'MSB lies below MPB, and too much upkeep is bought',
              'MSC lies above MPC, and the amount of upkeep is too large'
            ],
            correctAnswer: 0,
            explanation: 'The neighbors\' gain comes from the homeowner using the service, so the benefit side splits: MSB = MPB + MEB lies above MPB. The market stops where MPB meets supply, short of the MSB crossing, so too little upkeep is bought.'
          },
          {
            question: 'In which case does the free market produce more than the socially optimal quantity?',
            options: [
              'Cigarettes, which harm nearby bystanders',
              'Vaccines, which protect unvaccinated people too',
              'Beehives, which pollinate nearby orchards',
              'Streetlights, which no one can be kept from'
            ],
            correctAnswer: 0,
            explanation: 'Secondhand smoke is a negative consumption externality, so MSB lies below MPB and the market overconsumes. Vaccines and beehives create positive externalities, and streetlights are public goods, so all three are underprovided.'
          },
          {
            question: 'A correctly sized Pigouvian tax reduces both consumer and producer surplus. Why does it still raise total social surplus?',
            options: [
              'It stops the output of units that cost society more than buyers value them',
              'It brings in revenue that exceeds the surplus buyers and sellers lose',
              'It moves output toward the quantity where price equals private cost',
              'It shifts the entire burden of the tax onto the polluting firms'
            ],
            correctAnswer: 0,
            explanation: 'The units between the optimal and market quantities have MSC above MSB, so cutting them removes the deadweight loss. Revenue alone is smaller than the private surplus lost, the untaxed market already had price equal to private cost, and the burden is shared according to elasticities.'
          }
        ]
      }
    },
    {
      id: 'microext7-checklist',
      type: 'text' as const,
      content: `
## A Checklist for Any Externality Question

1. **Who creates the spillover?** Producing → draw MSC. Consuming → draw MSB.
2. **Helpful or harmful?** Harmful → the social curve is above MPC or below MPB, and the market makes **too much**. Helpful → the reverse, **too little**.
3. **Find both crossings.** Private curves for $Q_m$, social curves for $Q^*$.
4. **Shade or compute DWL** between MSB and MSC from $Q^*$ to $Q_m$. Height: the MSC–MSB gap at $Q_m$.
5. **Size the fix** at $Q^*$: tax = MEC there, subsidy = MEB there. Check the direction: a tax lowers quantity, a subsidy raises it.
6. **Check for over- or undercorrection.** A policy that overshoots $Q^*$ creates a new triangle on the other side.

### Running One Example Through the Checklist
Leaf blowers are loud. Demand is P = 60 − Q, marginal private cost is P = 2Q, and each hour of use causes \\$12 of noise harm to neighbors.
1. The harm comes from **using** the blowers, a consumption externality: MSB = MPB − \\$12, so MSB is P = 48 − Q, and MSC = MPC.
2. Harmful, so **too much**.
3. Market: 60 − Q = 2Q gives **20**. Optimum: 48 − Q = 2Q gives **16**.
4. DWL = ½ × (20 − 16) × \\$12 = **\\$24**.
5. A **\\$12** per-hour tax moves use to 16 hours and raises \\$12 × 16 = **\\$192**.
6. A \\$20 tax would cut use to 40 − Q = 2Q, about 13.3 hours, which is below 16: overcorrection.
      `
    },
    {
      id: 'microext7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculation Review** ✍️

A competitive market has demand **P = 120 − Q** and marginal cost **P = 30 + Q**. Using the good creates a marginal external benefit of **\\$18** per unit for people who do not buy it.

1) What is the market quantity?

2) What is the socially optimal quantity?

3) What is the deadweight loss of the market outcome? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['45', '54', '81'],
        hint1: 'The market ignores the external benefit: set 120 − Q = 30 + Q.',
        hint2: 'MSB = MPB + 18, so MSB is P = 138 − Q.',
        hint3: 'DWL = ½ × (Q* − Qm) × \\$18.',
        explanation: '1) 120 − Q = 30 + Q gives Qm = 45. 2) 138 − Q = 30 + Q gives Q* = 54. 3) The market falls 9 units short, so DWL = ½ × 9 × \\$18 = \\$81. An \\$18 per-unit subsidy would close the gap.'
      }
    },
    {
      id: 'microext7-goods',
      type: 'text' as const,
      content: `
## The Goods Matrix: Problem and Fix

| | Excludable | Nonexcludable |
|---|---|---|
| **Rival** | **Private good** (pizza, a bus seat). Markets work well, absent externalities. | **Common resource** (ocean fish, an open aquifer). Problem: **overuse**. Fixes: property rights, quotas or licenses, user fees. |
| **Nonrival** | **Club good** (streaming service, uncrowded toll road). Markets supply it; price above the near-zero MC turns some users away. | **Public good** (national defense, a levee). Problem: **free riding** and underprovision. Fix: government provision paid for by taxes. |

### Links Between the Two Halves of This Topic
- A common resource is a **negative externality** problem: each user imposes costs on other users. A user fee is a Pigouvian tax on the commons.
- A public good is an **extreme positive externality**: once it exists, everyone benefits, whether or not they paid.
- **Congestion** moves goods across the matrix: a free road at rush hour becomes rival and acts like a common resource.

> 🔑 **AP Connection:** Classification questions often hide the answer in a detail such as "anyone may fish there" (nonexcludable) or "the theater has empty seats" (nonrival). Answer the two questions in order and the category follows.
      `
    },
    {
      id: 'microext7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A coastal fishery is overfished because anyone may fish there. Which policy addresses the cause most directly?',
            options: [
              'A fee charged on each boat',
              'A subsidy for each ton of fish caught',
              'A price ceiling on fish sold at market',
              'A tax credit for buying a new boat'
            ],
            correctAnswer: 0,
            explanation: 'Overfishing happens because each boat ignores the fish it takes from others. A fee per boat makes each one pay for that cost, so fewer boats enter. A subsidy or a tax credit would draw in more fishing, and a price ceiling does nothing about open access.'
          },
          {
            question: 'A good is excludable but nonrival, such as a streaming video service. Which statement about the market for it is accurate?',
            options: [
              'Firms can supply it, since they are able to charge everyone who uses it',
              'Firms will not supply it, since everyone can use it free of charge',
              'Firms supply too much of it, since each use leaves less for others',
              'Firms cannot supply it, since its marginal cost rises very quickly'
            ],
            correctAnswer: 0,
            explanation: 'Excludability lets the seller require payment, so firms supply club goods. It is nonexcludability that causes free riding, rivalry that causes overuse when access is open, and a nonrival good has a marginal cost near zero.'
          },
          {
            question: 'Demand is P = 90 − Q, marginal private cost is P = 10 + Q, and each unit causes a constant \\$20 of external cost. Which per-unit tax maximizes total social surplus?',
            options: [
              '\\$20',
              '\\$10',
              '\\$40',
              '\\$30'
            ],
            correctAnswer: 0,
            explanation: 'With a constant MEC, the tax that makes private cost equal MSC is the MEC itself, \\$20, and it moves output from 40 to 30. A \\$10 tax undercorrects, and \\$30 or \\$40 cuts output below the optimum and creates a new deadweight loss.'
          }
        ]
      }
    }
  ]
}
