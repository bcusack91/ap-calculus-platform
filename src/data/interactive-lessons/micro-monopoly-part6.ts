export const microMonopolyPart6Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromon6-intro',
      type: 'text' as const,
      content: `
# 💰 Monopoly

**Part 6 of 7 — Government Policy Toward Monopoly**

---

| Section |
|---------|
| 📖 Lump-Sum and Per-Unit Taxes |
| Price Ceilings on a Monopolist |
| Antitrust Policy |
| FRQ Practice: An Island Ferry |

> 🔑 **Key Concept:** To predict how a policy affects a monopolist, ask one question first: **does it change marginal cost or marginal revenue?** If it does not (a lump-sum tax), price and output stay put and only profit changes. If it does (a per-unit tax or a price ceiling), the MR = MC quantity moves, and so do price and deadweight loss.
      `
    },
    {
      id: 'micromon6-taxes',
      type: 'text' as const,
      content: `
## 📖 Lump-Sum and Per-Unit Taxes

Start from the Part 4 market: demand **P = 100 − Q**, **MC = ATC = \\$20**. Untaxed, the monopolist sells **40** units at **\\$60**, earns **\\$1,600**, and creates **\\$800** of deadweight loss.

### A Lump-Sum Tax of \\$500
A lump-sum tax (a flat license fee, for example) is the same no matter how much the firm sells, so it acts like a **fixed cost**.

- MC and MR do not move, so **Q stays at 40** and **P stays at \\$60**.
- ATC shifts up, and **profit falls** by exactly \\$500, to \\$1,100.
- Deadweight loss is unchanged at \\$800. The tax only moves surplus from the firm to the government.

### A Per-Unit Tax of \\$20
A per-unit tax adds \\$20 to the cost of **every** unit, so **MC shifts up** from \\$20 to \\$40 (AVC and ATC shift up too).

- New MR = MC: 100 − 2Q = 40, so **Q = 30**.
- New price from demand: P = 100 − 30 = **\\$70**. Price rises by \\$10, **less than the \\$20 tax**.
- Tax revenue = \\$20 × 30 = \\$600. Profit = (\\$70 − \\$40) × 30 = \\$900.
- Deadweight loss, measured against the efficient 80 units at the true cost of \\$20: ½ × (80 − 30) × (\\$70 − \\$20) = **\\$1,250**, up from \\$800.

| Policy | Shifts | Q | P | Profit | DWL |
|---|---|---|---|---|---|
| None | — | 40 | \\$60 | \\$1,600 | \\$800 |
| Lump-sum tax, \\$500 | ATC only | 40 | \\$60 | \\$1,100 | \\$800 |
| Per-unit tax, \\$20 | MC, AVC, ATC | 30 | \\$70 | \\$900 | \\$1,250 |

> 🔑 **AP Connection:** With straight-line demand and constant MC, a monopolist passes exactly **half** of a per-unit tax on to buyers, because the MR line is twice as steep as demand. A per-unit **subsidy** works in reverse: MC shifts down, output rises and price falls.
      `
    },
    {
      id: 'micromon6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A city charges its only cable TV provider, a profit-maximizing monopolist, a flat \\$500 yearly license fee. What happens to the provider\'s price and output?',
            options: [
              'Neither price nor output changes',
              'Price rises by \\$500 and output falls',
              'Both rise as the fee raises its costs',
              'Price rises and output falls slightly'
            ],
            correctAnswer: 0,
            explanation: 'A flat fee does not depend on output, so it leaves MR and MC, and therefore the profit-maximizing price and quantity, unchanged. Only profit falls, by \\$500.'
          },
          {
            question: 'In the Part 4 market (demand P = 100 − Q, MC = \\$20), the government adds a per-unit tax of \\$20. What price does the monopolist now charge?',
            options: [
              '\\$70',
              '\\$80',
              '\\$60',
              '\\$40'
            ],
            correctAnswer: 0,
            explanation: 'MC becomes \\$40, so 100 − 2Q = 40 gives Q = 30 and P = \\$70. The price rises by only half the tax; \\$80 would pass the whole tax on, and \\$40 is the new marginal cost.'
          }
        ]
      }
    },
    {
      id: 'micromon6-ceiling',
      type: 'text' as const,
      content: `
## Price Ceilings on a Monopolist

In a competitive market, a binding price ceiling **reduces** the quantity sold. A well-placed ceiling on a monopolist can do the opposite.

### How a Ceiling Changes MR
With a ceiling of \\$40 in the Part 4 market, the firm can sell up to 60 units (where demand reaches \\$40) **without cutting the price**. Over that range, each extra unit brings in exactly \\$40, so **MR is flat at \\$40**, just as it is for a price taker. Beyond 60 units the firm is back on its original MR line.

### Three Ceilings Compared

| Ceiling | Quantity produced | Profit | Deadweight loss |
|---|---|---|---|
| None (monopoly) | 40 at \\$60 | \\$1,600 | \\$800 |
| \\$40 | 60 (MR of \\$40 > MC up to there) | (\\$40 − \\$20) × 60 = \\$1,200 | ½ × 20 × \\$20 = \\$200 |
| **\\$20, where MC crosses demand** | **80, the efficient quantity** | \\$0 | **\\$0** |

- A ceiling **between** the monopoly price and the MC–demand crossing raises output and lowers price and DWL.
- A ceiling **at** the point where MC crosses demand makes the monopolist act like a competitive firm: P = MC, and output reaches the efficient level.
- A ceiling **below** that point goes too far: the firm will not produce units whose cost exceeds the ceiling, so quantity supplied falls short of quantity demanded. A **shortage** appears and deadweight loss returns.

> 🔑 **AP Connection:** The regulated natural monopoly in Part 4 is the same idea. "Socially optimal" pricing is a ceiling at P = MC, and "fair-return" pricing is a ceiling at P = ATC.
      `
    },
    {
      id: 'micromon6-antitrust',
      type: 'text' as const,
      content: `
## Antitrust Policy

Instead of regulating a monopolist's price, the government can try to keep markets competitive in the first place. **Antitrust laws** do this.

| Law | Year | Main idea |
|---|---|---|
| **Sherman Antitrust Act** | 1890 | Outlaws agreements that restrain trade (such as price fixing) and makes it illegal to **monopolize** or attempt to monopolize a market |
| **Clayton Act** | 1914 | Names specific practices, most importantly **mergers** whose effect may be to substantially lessen competition |

The **Department of Justice** and the **Federal Trade Commission** enforce these laws. They can **block mergers**, sue to **break up** firms (the Supreme Court ordered Standard Oil broken up in 1911), and stop practices that shut out rivals.

### What Antitrust Does Not Do
Simply being large, or being the only seller because of a better product or a patent, is not illegal. The laws target **conduct** that creates or protects monopoly power, such as price fixing with rivals or buying up competitors to end competition.

### The Economic Logic
Each policy aims to move the market toward the competitive outcome: **lower price, higher output, smaller deadweight loss**. Blocking a merger of the only two sellers keeps the market from sliding into the single-seller outcome in the first place.
      `
    },
    {
      id: 'micromon6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict the Policy Effect** 🔍

A profit-maximizing monopolist faces a straight-line demand curve and constant marginal cost.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A lump-sum tax is imposed. Output ___',
            options: ['increases', 'decreases', 'does not change', 'cannot be determined']
          },
          {
            label: 'A lump-sum tax is imposed. Economic profit ___',
            options: ['increases', 'decreases', 'does not change', 'cannot be determined']
          },
          {
            label: 'A per-unit tax is imposed. Price ___',
            options: ['increases', 'decreases', 'does not change', 'cannot be determined']
          },
          {
            label: 'A per-unit tax is imposed. Output ___',
            options: ['increases', 'decreases', 'does not change', 'cannot be determined']
          },
          {
            label: 'A price ceiling is set where MC crosses demand. Output ___',
            options: ['increases', 'decreases', 'does not change', 'cannot be determined']
          }
        ],
        correctAnswers: ['does not change', 'decreases', 'increases', 'decreases', 'increases'],
        hint1: 'Ask whether the policy moves MC or MR.',
        hint2: 'A per-unit tax raises MC, so MR = MC happens at a smaller quantity.',
        hint3: 'Under a ceiling, MR is flat at the ceiling price until demand is reached.',
        explanation: 'A lump-sum tax leaves MR and MC alone, so output is unchanged and only profit falls. A per-unit tax shifts MC up: output falls and price rises. A ceiling at the MC–demand crossing makes MR flat at that price, so the firm expands to the efficient output.'
      }
    },
    {
      id: 'micromon6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice: An Island Ferry

**Prompt.** Harbor Ferry is the only ferry between an island and the mainland. Daily demand is **P = 90 − Q**, and marginal cost and average total cost are constant at **\\$10** per trip.

**(a)** Calculate the profit-maximizing quantity and price.

**(b)** Calculate Harbor Ferry's daily profit.

**(c)** Is the outcome in (a) allocatively efficient? Explain.

**(d)** The island charges the ferry a lump-sum fee of \\$400 a day. What happens to the quantity of trips and to profit?

**(e)** Instead, the island imposes a per-unit tax of \\$10 a trip. Calculate the new quantity and price.

**(f)** Instead, the island sets a price ceiling to achieve allocative efficiency. Identify the ceiling price and the quantity that results.

### Model Answers

**(a)** MR = 90 − 2Q. Setting MR = MC: 90 − 2Q = 10, so **Q = 40**. From demand, **P = \\$50**.

**(b)** Profit = (\\$50 − \\$10) × 40 = **\\$1,600**.

**(c)** **No.** Price (\\$50) is greater than marginal cost (\\$10), so riders value additional trips more than they cost, and too few trips are provided.

**(d)** Quantity **stays at 40** (and price at \\$50), because the fee changes neither MR nor MC. Profit falls to **\\$1,200**.

**(e)** MC rises to \\$20. 90 − 2Q = 20 gives **Q = 35**, and **P = \\$55**.

**(f)** Ceiling = **\\$10**, where MC crosses demand. Quantity = 90 − 10 = **80** trips.

### Scoring Notes
- In (a), the price must come from **demand** at Q = 40. Reporting MR or MC as the price loses the point.
- In (c), the comparison must be **P versus MC**; "the firm makes a profit" does not explain inefficiency.
- In (d), say **why** quantity is unchanged: MC and MR do not shift.
      `
    },
    {
      id: 'micromon6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A monopolist faces a straight-line demand curve and constant marginal cost. A per-unit tax of \\$6 is imposed. Its price rises by',
            options: [
              'less than \\$6, while its output falls',
              'exactly \\$6, while its output stays the same',
              'more than \\$6, while its output rises',
              'nothing, since a monopolist sets its own price'
            ],
            correctAnswer: 0,
            explanation: 'The tax raises MC by \\$6, which moves MR = MC to a smaller quantity, and with straight-line demand the price rises by half the tax, \\$3. A monopolist chooses its price from demand, so a cost change does move it.'
          },
          {
            question: 'A regulator sets a price ceiling on a monopolist below the profit-maximizing price but above the price at which MC crosses demand. Compared with no regulation,',
            options: [
              'more is sold and deadweight loss shrinks',
              'less is sold and a shortage develops',
              'the same amount is sold at a lower price',
              'output falls while profit per unit shrinks'
            ],
            correctAnswer: 0,
            explanation: 'Under the ceiling, MR is flat at the ceiling price until demand is reached, so MR exceeds MC over a longer range and the firm sells more, closing part of the deadweight loss. A shortage appears only if the ceiling is set below the MC–demand crossing.'
          },
          {
            question: 'Which statement about U.S. antitrust law is accurate?',
            options: [
              'The Clayton Act lets enforcers stop mergers that would substantially lessen competition',
              'The Sherman Act makes it illegal for any firm to hold a large share of its market',
              'Antitrust law requires every natural monopoly to set its price equal to MC',
              'The Sherman Act applies only to firms that sell their goods in other countries'
            ],
            correctAnswer: 0,
            explanation: 'The Clayton Act of 1914 targets mergers whose effect may be to substantially lessen competition. The Sherman Act of 1890 targets monopolizing conduct and agreements in restraint of trade, not size alone, and price regulation of natural monopolies is a separate tool.'
          }
        ]
      }
    }
  ]
}
