export const microMarketFailurePart2Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromar2-intro',
      type: 'text' as const,
      content: `
# 💰 Market Failure

**Part 2 of 7 — Efficiency and Deadweight Loss Everywhere**

---

| Section |
|---------|
| 📖 The Efficiency Rule: MSB = MSC |
| One Market, Five Wedges |
| Allocative and Productive Efficiency Across Market Structures |
| Efficiency Versus Equity |

> 🔑 **Key Concept:** A quantity is socially efficient when **marginal social benefit equals marginal social cost**. Taxes, subsidies, price controls, market power and externalities look like different topics, but each one drives a **wedge** between MSB and MSC at the quantity actually traded. Every one of them produces a deadweight loss found the same way: the triangle between MSB and MSC from the efficient quantity to the actual quantity.
      `
    },
    {
      id: 'micromar2-rule',
      type: 'text' as const,
      content: `
## 📖 The Efficiency Rule: MSB = MSC

Think of output one unit at a time.

- If a unit's **MSB > MSC**, society gains by producing it: it is worth more to society than it costs.
- If a unit's **MSB < MSC**, society loses by producing it.
- Keep adding units until **MSB = MSC**. That quantity, $Q^*$, makes **total social surplus** (the area between MSB and MSC) as large as possible.

### When the Market Gets It Right
In a perfectly competitive market with **no externalities**:
- Demand measures buyers' marginal benefit, and nobody else is affected, so **D = MSB**.
- Supply measures sellers' marginal cost, and nobody else bears any cost, so **S = MSC**.
- The equilibrium, where D meets S, is therefore where **MSB = MSC**. Total surplus (CS + PS) is maximized, and there is **no deadweight loss**.

### Two Ways to Fail
| Failure | Units involved | Example |
|---|---|---|
| **Underproduction** ($Q < Q^*$) | Units with MSB > MSC are **not** made | Monopoly, binding price ceiling, positive externality, per-unit tax |
| **Overproduction** ($Q > Q^*$) | Units with MSB < MSC **are** made | Negative externality, per-unit subsidy with no externality |

**Deadweight loss** is the social surplus lost compared with $Q^*$. It is the area between MSB and MSC over the units that are wrongly made or wrongly skipped.

> 🔑 **AP Connection:** On the AP exam, market failure means exactly this: the market outcome is not at the quantity where MSB = MSC. When an FRQ asks whether an outcome is "socially efficient," compare MSB and MSC at that quantity.
      `
    },
    {
      id: 'micromar2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At the current output of a good, marginal social benefit is \\$45 and marginal social cost is \\$30. To make the outcome more efficient, output should',
            options: [
              'increase',
              'decrease',
              'stay the same',
              'drop to zero'
            ],
            correctAnswer: 0,
            explanation: 'The next unit is worth \\$45 to society and costs \\$30, so producing it adds \\$15 of surplus. Output should rise until MSB falls, or MSC rises, enough that the two are equal.'
          },
          {
            question: 'A perfectly competitive market has no externalities. Which statement about its equilibrium is accurate?',
            options: [
              'Total surplus is as large as it can be',
              'Consumer surplus equals producer surplus',
              'Every buyer who wants the good can afford it',
              'Firms earn positive economic profit in the long run'
            ],
            correctAnswer: 0,
            explanation: 'With no externalities, demand is MSB and supply is MSC, so the equilibrium is where MSB = MSC and total surplus is maximized. The split between consumer and producer surplus depends on the curves, efficiency says nothing about who can afford the good, and long-run competitive profit is zero.'
          }
        ]
      }
    },
    {
      id: 'micromar2-wedges',
      type: 'text' as const,
      content: `
## One Market, Five Wedges

Take one market: **MSB is P = 120 − Q** and **MSC is P = Q** (demand and supply, with no externality). The efficient outcome is **Q\\* = 60** at **\\$60**, and the maximum total surplus is ½ × 60 × \\$120 = **\\$3,600**.

Now distort it five ways. Each method was covered in its own topic; here the point is that **one formula** finds every deadweight loss:

$$\\text{DWL} = \\frac{1}{2} \\times |Q - Q^*| \\times (\\text{gap between MSB and MSC at } Q)$$

| Wedge | Quantity traded | Gap at that quantity | Deadweight loss |
|---|---|---|---|
| \\$30 per-unit tax | 120 − Q = Q + 30 → **45** | MSB \\$75 − MSC \\$45 = \\$30 | ½ × 15 × \\$30 = **\\$225** |
| \\$40 price ceiling | Sellers supply only **40** | MSB \\$80 − MSC \\$40 = \\$40 | ½ × 20 × \\$40 = **\\$400** |
| \\$30 per-unit subsidy | 120 − Q = Q − 30 → **75** | MSC \\$75 − MSB \\$45 = \\$30 | ½ × 15 × \\$30 = **\\$225** |
| Single-seller monopoly (MC = Q) | MR = 120 − 2Q = Q → **40**, price \\$80 | MSB \\$80 − MSC \\$40 = \\$40 | ½ × 20 × \\$40 = **\\$400** |
| \\$30 external cost ignored (MSC becomes P = 30 + Q, so Q\\* = 45) | Market still trades **60** | MSC \\$90 − MSB \\$60 = \\$30 | ½ × 15 × \\$30 = **\\$225** |

### What the Table Shows
- Taxes, ceilings and monopoly **underproduce**; subsidies and negative externalities **overproduce**. Both directions lose surplus.
- The gap is always measured **between the social curves**, not between a price and a curve.
- In the last row the market itself did not change, but the **efficient quantity** did, because MSC now includes the external cost.

> ⚠️ **Common trap:** Deadweight loss is not the same as a transfer. A tax's revenue, a monopolist's extra profit and a ceiling's lower price for the lucky buyers move surplus from one group to another. Only the triangle disappears from the economy.
      `
    },
    {
      id: 'micromar2-input',
      type: 'input-boxes' as const,
      content: `
**Find the Deadweight Loss** ✍️

Use the same market: MSB is **P = 120 − Q** and MSC is **P = Q**.

1) A \\$20 per-unit tax is imposed. What quantity is traded?

2) What is the deadweight loss of the \\$20 tax? (dollars, number only)

3) Instead, a \\$45 price ceiling is imposed. What is the deadweight loss? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '100', '225'],
        hint1: 'With the tax, buyers\' price minus sellers\' price equals \\$20: 120 − Q = Q + 20.',
        hint2: 'At the taxed quantity, the gap between MSB and MSC equals the tax.',
        hint3: 'Under a \\$45 ceiling, sellers supply 45 units. Find MSB and MSC at Q = 45.',
        explanation: '1) 120 − Q = Q + 20 gives Q = 50. 2) DWL = ½ × (60 − 50) × \\$20 = \\$100. 3) At Q = 45, MSB = \\$75 and MSC = \\$45, so DWL = ½ × 15 × \\$30 = \\$225.'
      }
    },
    {
      id: 'micromar2-structures',
      type: 'text' as const,
      content: `
## Allocative and Productive Efficiency Across Market Structures

Part 1 introduced the two kinds of efficiency. Here is how each market structure scores in **long-run equilibrium** (with no externalities).

| Structure | Allocatively efficient? (P = MC) | Productively efficient? (P = minimum ATC) |
|---|---|---|
| Perfect competition | **Yes** | **Yes** |
| Monopolistic competition | No: P > MC | No: excess capacity, so ATC is above its minimum |
| Oligopoly | Generally no: P > MC | Generally no |
| Monopoly | No: P > MC | Generally no |

### The Two Tests Are Different
- **Allocative efficiency** asks whether the economy makes the **right amount** of each good, the amount society values most.
- **Productive efficiency** asks whether each unit is made at the **lowest possible cost**.

A competitive industry that pollutes passes the productive test: in the long run its firms produce at the minimum of their own ATC. It fails the allocative test, because price equals marginal **private** cost, which is below marginal **social** cost. Cheap production of too much output is still inefficient.
      `
    },
    {
      id: 'micromar2-equity',
      type: 'text' as const,
      content: `
## Efficiency Versus Equity

**Efficiency** is about the **size** of total surplus. **Equity** is about how fairly it is **divided**. They are different questions.

- A perfectly competitive market can be efficient while some people cannot afford the good at all. Efficiency counts dollar values of benefit; it does not judge whose benefit matters more.
- A policy can reduce efficiency but improve equity, such as a tax on high incomes that funds aid for poor families. Whether the trade is worth it is a value judgment.

### Positive and Normative Statements
| Positive (can be tested with evidence) | Normative (a value judgment) |
|---|---|
| A \\$2 tax on cigarettes would reduce smoking by about 5%. | Cigarettes should be taxed more heavily. |
| A binding price ceiling on apartments leads to a shortage. | Rent control is unfair to landlords. |
| Monopolies charge a price above marginal cost. | The government should break up large firms. |

Words like **should**, **fair** and **ought** usually signal a normative claim. Economics can measure the **cost** of a policy in deadweight loss; deciding whether a fairer division is worth that cost is up to voters and policymakers.

> 🔑 **AP Connection:** Parts 4 and 5 measure inequality and the policies that change it. Keep this distinction in mind: a measure such as the Gini coefficient is **positive**; a claim that inequality is too high is **normative**.
      `
    },
    {
      id: 'micromar2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the market where MSB is P = 120 − Q and MSC is P = Q, which policy creates the largest deadweight loss?',
            options: [
              'A \\$40 price ceiling',
              'A \\$30 per-unit tax',
              'A \\$30 per-unit subsidy',
              'A \\$20 per-unit tax'
            ],
            correctAnswer: 0,
            explanation: 'The \\$40 ceiling cuts output to 40, where the MSB–MSC gap is \\$40, so DWL = ½ × 20 × \\$40 = \\$400. The \\$30 tax and the \\$30 subsidy each move output 15 units with a \\$30 gap (\\$225), and the \\$20 tax loses \\$100.'
          },
          {
            question: 'Which outcome is productively efficient but not allocatively efficient?',
            options: [
              'A competitive industry that pollutes, in long-run equilibrium',
              'A monopolistically competitive industry in the long run',
              'A single-price monopolist earning an economic profit',
              'Perfect competition with no externality, in the long run'
            ],
            correctAnswer: 0,
            explanation: 'Competitive firms still produce at minimum ATC in the long run, but price equals marginal private cost, which is below MSC when they pollute, so too much is made. Monopolistic competition and monopoly fail both tests, and competition without an externality passes both.'
          },
          {
            question: 'Which of the following statements is normative?',
            options: [
              'Income should be divided more equally',
              'A \\$5 tax would cut sales by 2,000 units',
              'Rent control leads to housing shortages',
              'Monopolies charge prices above marginal cost'
            ],
            correctAnswer: 0,
            explanation: 'Saying how income should be divided is a value judgment that evidence alone cannot settle. The other three are positive claims: each could be checked against data, whether or not it turns out to be true.'
          }
        ]
      }
    }
  ]
}
