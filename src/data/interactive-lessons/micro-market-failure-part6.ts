export const microMarketFailurePart6Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromar6-intro',
      type: 'text' as const,
      content: `
# 💰 Market Failure

**Part 6 of 7 — Policy Evaluation and AP Exam Practice**

---

| Section |
|---------|
| 📖 When Government Intervention Falls Short |
| FRQ Practice: Inequality and Taxes |
| FRQ Practice: One Subsidy, Two Markets |

> 🔑 **Key Concept:** Markets can fail, and so can the policies meant to fix them. To evaluate any intervention, ask where the market starts relative to the efficient quantity, which way the policy moves quantity, and by how much. Then, separately, ask who gains and who loses. The first set of questions is about **efficiency**; the second is about **equity**.
      `
    },
    {
      id: 'micromar6-govfail',
      type: 'text' as const,
      content: `
## 📖 When Government Intervention Falls Short

**Government failure** happens when an intervention lowers efficiency, or costs more than the market failure it was meant to fix. The common causes:

| Cause | What goes wrong | Example |
|---|---|---|
| **Wrong size** | The policy overshoots or undershoots $Q^*$ | A pollution tax set at the harm of the last unit the untaxed market produced, when MEC rises with output, cuts output below $Q^*$ |
| **Wrong market** | The policy pushes quantity away from $Q^*$ | A per-unit tax on a monopolist that already produces too little |
| **Missing information** | Regulators cannot see MEC, MEB or MSB directly | A subsidy based on an overestimate of a vaccine's spillover benefit |
| **Unintended consequences** | People respond in ways the policy did not plan for | A binding rent ceiling leads to shortages and poorer upkeep; a transfer that shrinks as earnings rise weakens the reward for working more |

### A Four-Question Evaluation
1. **Where does the market start?** At, below or above $Q^*$?
2. **Which way does the policy move quantity?** Toward $Q^*$ or away from it?
3. **How far?** Does it stop at $Q^*$, fall short, or overshoot?
4. **Who gains and who loses?** Buyers, sellers, taxpayers, third parties, and households at different income levels.

Questions 1–3 decide whether deadweight loss shrinks or grows. Question 4 is about equity, and the answer can point the other way: a policy can reduce efficiency and still be chosen because it makes the distribution fairer, or the reverse.

> ⚠️ **Common trap:** "The government stepped in, so the market failure is fixed" is not an evaluation. Exam answers earn credit by comparing the quantity after the policy with the **efficient** quantity.
      `
    },
    {
      id: 'micromar6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A regulator believes a plant\'s pollution does \\$40 of harm per unit at the socially optimal quantity, but the true figure is \\$25. A per-unit tax of \\$40 will',
            options: [
              'cut output below the efficient level',
              'leave output at the efficient level',
              'raise output above the market level',
              'have no effect on the quantity produced'
            ],
            correctAnswer: 0,
            explanation: 'The tax raises firms\' marginal cost by \\$15 more than the true external cost, so the taxed cost curve crosses demand to the left of where MSC does. Units worth more to society than they cost are lost, a new deadweight loss.'
          },
          {
            question: 'Which of the following interventions lowers efficiency?',
            options: [
              'A per-unit tax in a competitive market with no externality',
              'A per-unit subsidy to a monopolist that produces too little',
              'A minimum wage between the monopsony and competitive wages',
              'A tax equal to marginal external cost at the optimal quantity'
            ],
            correctAnswer: 0,
            explanation: 'A competitive market with no externality is already at MSB = MSC, so a tax pushes output below the efficient level. The other three move quantity toward the efficient level: the subsidy and the minimum wage raise output or employment, and the correctly sized tax removes overproduction.'
          }
        ]
      }
    },
    {
      id: 'micromar6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice: Inequality and Taxes

**Prompt.** In Country Q, the income shares of the quintiles, from poorest to richest, are **5%, 10%, 15%, 20% and 50%**.

**(a)** Calculate the cumulative share of income received by the poorest 40% of households, and identify the share received by the richest 20%.

**(b)** On a Lorenz diagram for Country Q, the curve passes through the point (40, 15). Explain what that point means.

**(c)** Country S's Lorenz curve lies everywhere between Country Q's curve and the line of perfect equality. Which country has the higher Gini coefficient? Explain.

**(d)** Country Q adopts a new tax. A household earning \\$25,000 pays \\$2,500 and a household earning \\$100,000 pays \\$5,000. Is the tax progressive, proportional or regressive? Explain using average tax rates.

**(e)** What will the tax in (d) do to the Lorenz curve and the Gini coefficient for after-tax income?

### Model Answers

**(a)** 5 + 10 = **15%**. The richest 20% receive **50%**.

**(b)** The poorest **40%** of households receive **15%** of total income. Both numbers are cumulative: the horizontal axis ranks households from poorest to richest.

**(c)** **Country Q.** Its curve bows farther from the line of equality, so its income is less equally distributed and its Gini is higher.

**(d)** **Regressive.** The average tax rate is \\$2,500 ÷ \\$25,000 = **10%** for the lower income and \\$5,000 ÷ \\$100,000 = **5%** for the higher income: the rate falls as income rises.

**(e)** The Lorenz curve for after-tax income moves **away from** the line of equality, and the Gini coefficient **rises**.

### Scoring Notes
- In (a) and (b), giving 10% (the second quintile alone) for the poorest 40% loses the point: the share is **cumulative**.
- In (c), "Country S, because its curve is closer to equality" reverses the relationship: closer to the diagonal means a **lower** Gini.
- In (d), "the richer household pays more, so it is progressive" earns nothing. The classification depends on the **percentage** of income, not on dollars.
- In (e), the curve and the Gini must move **together**: away from equality means a higher Gini.
      `
    },
    {
      id: 'micromar6-input',
      type: 'input-boxes' as const,
      content: `
**Practice the Calculations** ✍️

1) Using Country Q's shares (5%, 10%, 15%, 20%, 50%), what is the cumulative share of income, in percent, of the poorest 80% of households?

2) A new transfer program moves Country Q's Lorenz curve toward the line of equality. Does its Gini coefficient rise or fall? (one word)

3) Under a different tax, a household earning \\$40,000 pays \\$4,800. What is its average tax rate? (percent, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', 'fall', '12'],
        hint1: 'Add the shares of the four poorest quintiles, or subtract the richest quintile\'s share from 100.',
        hint2: 'Closer to the diagonal means a more equal distribution.',
        hint3: 'Average tax rate = tax ÷ income.',
        explanation: '1) 5 + 10 + 15 + 20 = 50%, which is also 100 − 50. 2) The Gini falls, because the curve now lies closer to the line of equality. 3) \\$4,800 ÷ \\$40,000 = 12%. If a household earning \\$160,000 paid \\$12,800 (8%) under the same tax, the tax would be regressive.'
      }
    },
    {
      id: 'micromar6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice: One Subsidy, Two Markets

**Prompt.** A profit-maximizing monopolist faces demand **P = 140 − 2Q** and has a constant marginal cost and average total cost of **\\$20**. There are no externalities.

**(a)** Calculate the profit-maximizing quantity and price.

**(b)** Calculate the deadweight loss.

**(c)** The government gives the monopolist a per-unit subsidy of \\$20. Calculate the new quantity and price. Does deadweight loss increase, decrease or stay the same?

**(d)** Instead of (c), the government gives the monopolist a lump-sum subsidy. What happens to its quantity? Explain.

**(e)** Suppose instead the same demand and cost conditions describe a perfectly competitive industry. Would a \\$20 per-unit subsidy increase or decrease efficiency? Explain.

### Model Answers

**(a)** MR = 140 − 4Q. MR = MC: 140 − 4Q = 20 gives **Q = 30**, and **P = \\$80**.

**(b)** The efficient quantity is where 140 − 2Q = 20: Q = 60. DWL = ½ × (60 − 30) × (\\$80 − \\$20) = **\\$900**.

**(c)** MC falls to \\$0: 140 − 4Q = 0 gives **Q = 35** and **P = \\$70**. DWL = ½ × (60 − 35) × (\\$70 − \\$20) = \\$625, so deadweight loss **decreases**. (The subsidy costs \\$20 × 35 = \\$700, a transfer from taxpayers.)

**(d)** **No change**: Q stays at 30. A lump-sum subsidy does not change marginal cost or marginal revenue, so the MR = MC quantity does not move. Only profit rises.

**(e)** **Decrease.** The competitive industry already produces the efficient 60 units. The subsidy pushes output to 70 (140 − 2Q = 0), where each extra unit costs \\$20 to make but is worth less than \\$20 to buyers. DWL = ½ × 10 × \\$20 = \\$100.

### Scoring Notes
- In (c), the deadweight loss is measured against the **true** MC of \\$20, not the subsidized MC.
- In (d), the explanation must refer to marginal cost (or MR = MC), not just "it is a fixed amount."
- In (e), the point is the **starting position**: the same policy improves efficiency in the monopoly and worsens it in the competitive market.
      `
    },
    {
      id: 'micromar6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the monopoly FRQ, the government gives the firm a lump-sum subsidy instead of the \\$20 per-unit subsidy. What happens to its output?',
            options: [
              'It does not change',
              'It rises to 35 units',
              'It rises to 60 units',
              'It falls to 25 units'
            ],
            correctAnswer: 0,
            explanation: 'A lump-sum subsidy leaves MC and MR unchanged, so the monopolist still produces 30 units at \\$80 and simply earns more profit. Thirty-five units is the result of the per-unit subsidy, and 60 is the efficient quantity.'
          },
          {
            question: 'Under a proposed tax, a household earning \\$40,000 pays \\$4,800 and a household earning \\$160,000 pays \\$12,800. What would the tax do to the after-tax Lorenz curve?',
            options: [
              'It would move away from the line of equality, as the tax is regressive',
              'It would move toward the line of equality, as the tax is progressive',
              'It would not move at all, as the tax is proportional to income',
              'It would move toward the line of equality, as the rich pay more dollars'
            ],
            correctAnswer: 0,
            explanation: 'The average rate falls from 12% to 8% as income rises, so the tax is regressive: it takes a larger share from the lower income. That moves the Lorenz curve away from equality and raises the Gini, even though the richer household pays more dollars.'
          },
          {
            question: 'Why can a price ceiling raise efficiency in a monopoly market but not in a competitive market with no externality?',
            options: [
              'The monopolist starts by producing too little, so a ceiling can increase output',
              'A monopolist has no supply curve, so a ceiling can never cause a shortage',
              'Competitive firms earn profits that a ceiling removes, so output falls',
              'A ceiling lowers the monopolist\'s marginal cost, so it produces more'
            ],
            correctAnswer: 0,
            explanation: 'A monopolist produces too little, and a ceiling makes its MR flat at the ceiling price, so it expands output toward the efficient level. A competitive market already produces the efficient quantity, so a binding ceiling can only cut quantity. A ceiling set too low can cause a shortage in a monopoly too, and it does not change marginal cost.'
          }
        ]
      }
    }
  ]
}
