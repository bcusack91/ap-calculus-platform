export const microMarketFailurePart7Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromar7-intro',
      type: 'text' as const,
      content: `
# 💰 Market Failure

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 Unit 6 on One Page |
| The Efficiency Toolkit |
| The Equity Toolkit |
| Mixed Review |

> 🔑 **Key Concept:** Unit 6 asks two separate questions about any market. **Is it efficient?** Compare MSB and MSC at the quantity traded, find the deadweight loss, and ask whether a policy moves quantity toward the efficient level. **Is it equitable?** Measure the distribution with the Lorenz curve and the Gini coefficient, and ask whether taxes and transfers make it more or less equal.
      `
    },
    {
      id: 'micromar7-map',
      type: 'text' as const,
      content: `
## 📖 Unit 6 on One Page

| Source of inefficiency | Quantity vs efficient | Where the DWL lies | Typical fix |
|---|---|---|---|
| Negative externality | **Too much** | Between MSC and MSB, from $Q^*$ up to $Q_m$ | Per-unit tax = MEC at $Q^*$; quantity limit |
| Positive externality | **Too little** | Between MSB and MSC, from $Q_m$ up to $Q^*$ | Per-unit subsidy = MEB at $Q^*$; provision |
| Public good | **Too little** or none | Missing units whose summed benefits exceed cost | Government provision paid for by taxes |
| Common resource | **Overuse** | Units whose cost to other users exceeds their value | Property rights, quotas, user fees |
| Monopoly | **Too little** | Between demand and MC, from $Q_m$ to where MC meets demand | Antitrust, price ceiling, regulation |
| Monopsony | **Too few workers** | Between MRP and labor supply, up to the competitive level | Minimum wage between the two wages |
| Tax, subsidy or price control in a competitive market | Too little or too much | Between demand and supply, between the two quantities | Remove or resize the policy |

### One Rule Underneath
Every row is the same idea from Part 2: total surplus is largest where **MSB = MSC**, and the deadweight loss is ½ × (distance from the efficient quantity) × (gap between MSB and MSC at the actual quantity).
      `
    },
    {
      id: 'micromar7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following leads to overuse rather than to too little output?',
            options: [
              'Fish in open waters',
              'National defense systems',
              'A monopoly on a new drug',
              'Vaccines with spillover benefits'
            ],
            correctAnswer: 0,
            explanation: 'Fish in open waters are a common resource: rival but nonexcludable, so each boat ignores the cost it imposes on others and the stock is overused. A public good, a monopoly and a positive externality all lead to too little output.'
          },
          {
            question: 'In which market could a well-designed per-unit subsidy increase total surplus?',
            options: [
              'A monopoly producing below the efficient quantity',
              'A competitive market with no externalities',
              'A market with a negative production externality',
              'A competitive market already at MSB = MSC'
            ],
            correctAnswer: 0,
            explanation: 'A monopoly makes too little, so a subsidy that raises output moves it toward the efficient quantity and shrinks deadweight loss. In the other three markets, output is already efficient or already too high, so a subsidy pushes it the wrong way.'
          },
          {
            question: 'A market trades exactly the quantity at which MSB = MSC. Which statement is accurate?',
            options: [
              'Deadweight loss is zero',
              'Consumer surplus is at its largest',
              'The distribution of income is equal',
              'Every firm earns an economic profit'
            ],
            correctAnswer: 0,
            explanation: 'At MSB = MSC, total social surplus is as large as possible, so there is no deadweight loss. That says nothing about how surplus is split between buyers and sellers, about income equality, or about whether firms earn profit.'
          }
        ]
      }
    },
    {
      id: 'micromar7-efficiency',
      type: 'text' as const,
      content: `
## The Efficiency Toolkit

| Task | Method |
|---|---|
| Efficient quantity | Set MSB = MSC (with no externality, demand = supply or P = MC) |
| Market quantity | Competitive: MPB = MPC. Monopoly: MR = MC, price from demand. Monopsony: MRP = MFC, wage from supply |
| Deadweight loss | ½ × (distance between Q and Q\\*) × (MSB − MSC gap at Q) |
| Corrective tax or subsidy | MEC or MEB **at Q\\*** |
| Effect of a policy | Does it change MC (per-unit) or only fixed cost (lump-sum)? Does it move Q toward or away from Q\\*? |
| Allocative efficiency | P = MC, or MSB = MSC with externalities |
| Productive efficiency | Production at minimum ATC |

### Results to Remember
- A per-unit tax or subsidy in a competitive market with no externality **creates** DWL; in a monopoly, a subsidy **reduces** DWL and a tax **increases** it.
- A lump-sum tax leaves a monopolist's price and output unchanged; it changes a competitive industry only in the long run, through exit.
- A ceiling between the monopoly price and the MC–demand crossing **raises** monopoly output; a minimum wage between the monopsony and competitive wage **raises** employment.
      `
    },
    {
      id: 'micromar7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Efficiency Review** ✍️

In a competitive market, demand (MSB) is **P = 100 − Q** and marginal private cost is **P = 10 + Q**. Each unit produced causes **\\$16** of external cost.

1) What is the market quantity?

2) What is the socially optimal quantity?

3) What is the deadweight loss of the market outcome? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['45', '37', '64'],
        hint1: 'Set demand equal to MPC: 100 − Q = 10 + Q.',
        hint2: 'MSC = MPC + 16, so MSC is P = 26 + Q.',
        hint3: 'DWL = ½ × (Qm − Q*) × \\$16.',
        explanation: '1) 100 − Q = 10 + Q gives Qm = 45. 2) 100 − Q = 26 + Q gives Q* = 37. 3) DWL = ½ × (45 − 37) × \\$16 = \\$64. A \\$16 per-unit tax would remove it.'
      }
    },
    {
      id: 'micromar7-equity',
      type: 'text' as const,
      content: `
## The Equity Toolkit

| Task | Method |
|---|---|
| Lorenz point | Cumulative % of households (poorest first) vs cumulative % of income |
| Share of a single quintile | Height at its right end minus height at its left end |
| Share of the richest 20% | 100 minus the height at 80 |
| Gini coefficient | 0 = perfect equality, 1 = perfect inequality; a curve farther from the diagonal has a higher Gini (you read it, you do not calculate it) |
| Classify a tax | Compare **average** tax rates across incomes: rising = progressive, constant = proportional, falling = regressive |
| Average vs marginal rate | Average = total tax ÷ income; marginal = rate on the next dollar |

### Directions to Remember
- Progressive taxes and transfers to low-income households move the Lorenz curve **toward** equality and **lower** the Gini.
- Regressive taxes (sales taxes, flat per-household fees, capped payroll taxes) move it **away** and **raise** the Gini.
- Wealth is distributed more unequally than income.
- Measuring inequality is **positive** economics; judging how much inequality is acceptable is **normative**.
      `
    },
    {
      id: 'micromar7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country A\'s Lorenz curve lies everywhere between Country B\'s Lorenz curve and the line of equality. Which statement is true?',
            options: [
              'A has the lower Gini coefficient',
              'B has the lower Gini coefficient',
              'The two Gini coefficients are equal',
              'A has the lower average income'
            ],
            correctAnswer: 0,
            explanation: 'A\'s curve is closer to the line of equality, so the area between them is smaller and A\'s Gini is lower. The Gini compares distributions, not income levels, so nothing follows about average income.'
          },
          {
            question: 'A city replaces a flat \\$200 yearly fee on every household with a tax of 2% of household income. Compared with the old fee, the new tax is',
            options: [
              'proportional rather than regressive',
              'regressive rather than proportional',
              'progressive rather than proportional',
              'regressive rather than progressive'
            ],
            correctAnswer: 0,
            explanation: 'A flat \\$200 fee is a larger percentage of a small income than of a large one, so it is regressive. A 2% tax takes the same percentage from every income, so it is proportional.'
          },
          {
            question: 'Which combination of policies would most reduce a country\'s Gini coefficient?',
            options: [
              'A more progressive income tax with larger transfers to low-income households',
              'A national sales tax paired with lower income tax rates on all brackets',
              'A flat \\$500 tax on every household with no new spending on transfers',
              'A cap on payroll taxes with smaller cash benefits for poor families'
            ],
            correctAnswer: 0,
            explanation: 'Taking a rising share of high incomes and adding income at the bottom both move the Lorenz curve toward equality. A sales tax, a flat per-household tax and a payroll-tax cap are regressive, and smaller benefits for poor families widen the gap.'
          }
        ]
      }
    }
  ]
}
