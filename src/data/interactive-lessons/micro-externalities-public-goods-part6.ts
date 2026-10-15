export const microExternalitiesPublicGoodsPart6Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext6-intro',
      type: 'text' as const,
      content: `
# 💰 Externalities & Public Goods

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 FRQ Practice: A Fertilizer Plant |
| FRQ Practice: After-School Tutoring |
| FRQ Practice: A Flood Levee |

> 🔑 **Key Concept:** Externality FRQs reward the same moves every time: label **MSB, MSC, MPB and MPC** correctly, name the market quantity (private curves cross) and the socially optimal quantity (social curves cross), shade deadweight loss **between the social curves from $Q^*$ to $Q_m$**, and size a corrective tax or subsidy at the **external cost or benefit at $Q^*$**. Public-goods questions reward one idea: **nonexcludability causes free riding**.
      `
    },
    {
      id: 'microext6-frq1',
      type: 'text' as const,
      content: `
## 📖 FRQ Practice: A Fertilizer Plant

**Prompt.** Fertilizer is produced in a perfectly competitive industry. Demand is **P = 150 − Q** and marginal private cost is **P = 30 + 2Q**. Runoff from production causes a constant marginal external cost of **\\$30** per unit. There is no consumption externality.

**(a)** Calculate the market quantity and price.

**(b)** At the market quantity, compare marginal social benefit and marginal social cost. What does the comparison imply?

**(c)** Calculate the socially optimal quantity.

**(d)** Calculate the deadweight loss of the market outcome.

**(e)** The government imposes a per-unit tax that achieves the socially optimal quantity. Identify the tax and calculate the price buyers pay, the price sellers keep, and the tax revenue.

**(f)** Describe a correctly labeled graph of this market and the area of deadweight loss before the tax.

### Model Answers

**(a)** 150 − Q = 30 + 2Q, so **Q = 40** and **P = \\$110**.

**(b)** At Q = 40, MSB = \\$110 (demand) and MSC = 30 + 2(40) + 30 = **\\$140**. MSC > MSB, so the last units cost society more than they are worth: the market **overproduces**.

**(c)** MSC is P = 60 + 2Q. Setting 150 − Q = 60 + 2Q gives **Q\\* = 30** (MSB = MSC = \\$120).

**(d)** DWL = ½ × (40 − 30) × (\\$140 − \\$110) = **\\$150**.

**(e)** Tax = **\\$30** per unit. Buyers pay **\\$120**, sellers keep **\\$90**, and revenue = \\$30 × 30 = **\\$900**.

**(f)** Price on the vertical axis and quantity on the horizontal. Downward-sloping D = MPB = MSB. Upward-sloping MPC, and MSC parallel to it, \\$30 higher. Market outcome at Q = 40 where MPC meets D; optimum at Q = 30 where MSC meets D. Deadweight loss: the triangle bounded by MSC and D between Q = 30 and Q = 40, with its point at Q = 30.

### Scoring Notes
- In (b), the point needs the **comparison** (MSC > MSB) **and** the conclusion (overproduction). "There is pollution" is not enough.
- In (d), the height of the triangle is measured at the **market** quantity. With a constant MEC it equals the \\$30 MEC.
- In (e), a lump-sum tax earns no credit: it does not change marginal cost, so it does not move the firms' output decision.
      `
    },
    {
      id: 'microext6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student\'s graph for the fertilizer FRQ shades the whole area between MPC and MSC from zero to 40 units and labels it "deadweight loss." What does that area actually measure?',
            options: [
              'Total external cost of the market output',
              'Consumer surplus lost to the tax',
              'Tax revenue at the optimal output',
              'Producer surplus at the market output'
            ],
            correctAnswer: 0,
            explanation: 'The vertical gap between MPC and MSC is the MEC of each unit, so the band from 0 to 40 adds up the external cost of all 40 units, \\$1,200. Deadweight loss is only the triangle between MSC and demand from 30 to 40 units.'
          },
          {
            question: 'Which policy, applied to the fertilizer market, would move it to the socially optimal quantity of 30 units?',
            options: [
              'A per-unit tax of \\$30 paid by producers',
              'A per-unit subsidy of \\$30 to buyers',
              'A lump-sum tax of \\$900 on the industry',
              'A price floor of \\$90 per unit of fertilizer'
            ],
            correctAnswer: 0,
            explanation: 'A \\$30 per-unit tax raises the firms\' marginal cost to MSC, so supply meets demand at 30 units. A subsidy raises output, a lump-sum tax leaves marginal cost unchanged, and a floor of \\$90 is below the \\$110 market price, so it does not bind.'
          }
        ]
      }
    },
    {
      id: 'microext6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice: After-School Tutoring

**Prompt.** In a competitive market for after-school tutoring, students' marginal private benefit is **P = 80 − Q** and marginal cost is **P = 20 + Q** (Q in thousands of hours). Better-educated students raise the productivity of future coworkers, a marginal external benefit of **\\$20** per hour. Providing tutoring creates no externality.

**(a)** Calculate the market quantity and price.

**(b)** Is the market quantity greater than, less than, or equal to the socially optimal quantity? Explain using marginal analysis.

**(c)** Calculate the socially optimal quantity.

**(d)** Calculate the deadweight loss.

**(e)** The government pays students a per-hour subsidy that achieves the socially optimal quantity. Calculate the subsidy, the price tutoring firms receive, and the cost to the government.

**(f)** Suppose instead the same subsidy is paid to tutoring firms. What happens to the quantity of tutoring compared with (e)?

### Model Answers

**(a)** 80 − Q = 20 + Q gives **Q = 30** thousand hours at **P = \\$50**.

**(b)** **Less than.** At Q = 30, MSB = 50 + 20 = \\$70, which exceeds MSC = \\$50. More hours would add more benefit than cost.

**(c)** MSB is P = 100 − Q. Setting 100 − Q = 20 + Q gives **Q\\* = 40** thousand hours.

**(d)** DWL = ½ × (40 − 30) × \\$20 = **\\$100** thousand.

**(e)** Subsidy = **\\$20** per hour. Firms receive 20 + 40 = **\\$60**; students pay \\$60 − \\$20 = \\$40. Cost = \\$20 × 40 = **\\$800** thousand.

**(f)** **No change**: 40 thousand hours. The subsidy lowers firms' marginal cost to P = Q, and 80 − Q = Q gives Q = 40.

### Scoring Notes
- In (b), "positive externality, so too little" earns the point only with a **marginal** comparison: MSB > MSC at the market quantity.
- In (e), the subsidy is the MEB **at Q\\***. With a constant MEB, that is simply \\$20.
      `
    },
    {
      id: 'microext6-input',
      type: 'input-boxes' as const,
      content: `
**Solve a Positive Production Externality** ✍️

Beekeeping is a competitive industry. Demand for honey is **P = 100 − Q** and beekeepers' marginal private cost is **P = 16 + 2Q**. Each unit of honey production also pollinates nearby farms, a marginal external benefit of **\\$15** per unit.

1) What is the socially optimal quantity?

2) What is the deadweight loss of the market outcome? (dollars, number only)

3) A per-unit subsidy to beekeepers achieves the optimal quantity. What does it cost the government? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['33', '37.5', '495'],
        hint1: 'For a positive production externality, MSC = MPC − MEB = 1 + 2Q.',
        hint2: 'The market quantity is where 100 − Q = 16 + 2Q. The base of the triangle is the \\$15 MEB.',
        hint3: 'The subsidy is \\$15 per unit, paid on every unit at the optimal quantity.',
        explanation: '1) 100 − Q = 1 + 2Q gives 3Q = 99, so Q* = 33. 2) The market makes 28 units, so DWL = ½ × (33 − 28) × \\$15 = \\$37.50. 3) \\$15 × 33 = \\$495.'
      }
    },
    {
      id: 'microext6-frq3',
      type: 'text' as const,
      content: `
## FRQ Practice: A Flood Levee

**Prompt.** A river town is considering a levee that would protect every home in its floodplain. It would cost **\\$7 million**. The four neighborhoods in the floodplain value the protection at \\$3 million, \\$2.5 million, \\$2 million and \\$1.5 million.

**(a)** Is protection from the levee rival or nonrival? Excludable or nonexcludable? Explain each.

**(b)** Explain why a private firm is unlikely to build the levee.

**(c)** Is building the levee efficient? Use the numbers to explain.

**(d)** Identify one way the town could get the levee built.

### Model Answers

**(a)** **Nonrival:** protecting one more home does not reduce the protection other homes get. **Nonexcludable:** a levee cannot protect paying homes while leaving the homes next door flooded.

**(b)** Because no one can be excluded, each neighborhood can benefit without paying: the **free-rider problem**. A firm could not collect enough revenue to cover the cost.

**(c)** **Yes.** The levee is nonrival, so its total benefit is the **sum** of the values: \\$9 million, more than the \\$7 million cost.

**(d)** The town government builds it and pays with **taxes**. (Any assessment that spreads the \\$7 million across the beneficiaries earns the point.)

### Scoring Notes
- In (a), "it is a public good" earns nothing alone. Each property needs its own explanation.
- In (c), comparing the cost with **one** neighborhood's value (no one values it at \\$7 million) is the free-rider logic from (b), not the efficiency test.
      `
    },
    {
      id: 'microext6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the tutoring FRQ, the \\$20 subsidy is paid to tutoring firms instead of to students. Compared with paying students, the quantity of tutoring',
            options: [
              'stays the same, at 40 thousand hours',
              'rises above 40 thousand hours',
              'falls below 40 thousand hours',
              'returns to 30 thousand hours'
            ],
            correctAnswer: 0,
            explanation: 'A \\$20 subsidy to firms lowers marginal cost by \\$20, and the new supply curve meets demand at the same 40 thousand hours. Students still pay \\$40 and firms still receive \\$60 in total, so only the way the payment is routed changes.'
          },
          {
            question: 'Which statement best explains why private firms underprovide flood protection such as a levee?',
            options: [
              'Homeowners who do not pay cannot be kept from being protected',
              'Protecting one home lowers the protection others get',
              'A levee creates a negative externality for the homes it protects',
              'Levees cost more to build than the total value of the protection'
            ],
            correctAnswer: 0,
            explanation: 'Nonexcludability lets homeowners free ride, so a firm cannot collect payment from everyone who benefits. Protection is nonrival, it is a benefit rather than a harm to protected homes, and a levee can easily be worth more than it costs, as the town\'s \\$9 million of benefits shows.'
          },
          {
            question: 'A market has a negative externality, and a regulator places a per-unit tax equal to the marginal external cost at the socially optimal quantity. Which result follows?',
            options: [
              'Deadweight loss disappears',
              'Output rises to the market quantity',
              'External costs fall to exactly zero',
              'Producer surplus stays the same'
            ],
            correctAnswer: 0,
            explanation: 'The taxed private cost curve now crosses demand at the optimal quantity, so the triangle of deadweight loss is gone. Output falls rather than rises, the units still produced continue to cause some external cost, and producers keep a lower price, so their surplus shrinks.'
          }
        ]
      }
    }
  ]
}
