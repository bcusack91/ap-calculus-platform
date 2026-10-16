export const microMarketFailurePart1Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromf1-intro',
      type: 'text' as const,
      content: `
# 💰 Market Failure

**Part 1 of 7 — When Markets Don't Achieve Efficiency**

---

## What Is Market Failure?

**Market failure** occurs when a free market fails to allocate resources efficiently — the market equilibrium does not maximize total surplus. Types:

| Type | Problem | Example |
|------|---------|---------|
| **Externalities** | Spillover costs/benefits not in prices | Pollution, vaccination |
| **Public goods** | Non-rival + non-excludable → free riding | National defense |
| **Common resources** | Non-excludable → overuse | Overfishing |
| **Market power** | Monopolies restrict output | Single utility company |
| **Asymmetric information** | One side of a trade knows more than the other, so the quantity traded differs from the efficient quantity | A seller who hides a car's defects |

> 🔑 In each case, the market produces at a quantity ≠ the socially optimal quantity, creating **deadweight loss**.

---

## Efficiency Review: When Markets Work

For competitive markets, the equilibrium is efficient because:

$$\\text{At Q*: MSB = MSC}$$

| Condition | Meaning |
|-----------|---------|
| **Allocative efficiency** | P = MC → producing the right mix of goods |
| **Productive efficiency** | Producing at minimum ATC → lowest cost |
| **No deadweight loss** | Total surplus (CS + PS) is maximized |

Market failure occurs when **any of these conditions break down**.
      `
    },
    {
      id: 'micromf1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A market is allocatively efficient when:',
            options: [
              'The firm produces at its lowest ATC',
              'Price equals marginal cost for the last unit',
              'Total revenue is maximized',
              'Producer surplus exceeds consumer surplus'
            ],
            correctAnswer: 1,
            explanation: 'Allocative efficiency means P = MC — the value consumers place on the last unit (price) equals the cost of producing it (MC). Resources are allocated to their highest-valued use.'
          },
          {
            question: 'Which of the following is NOT a source of market failure?',
            options: [
              'Externalities',
              'Perfect competition',
              'Public goods',
              'Common resources'
            ],
            correctAnswer: 1,
            explanation: 'Perfect competition actually achieves efficiency (P = MC, minimum ATC). The other three — externalities, public goods and common resources — all cause markets to fail.'
          }
        ]
      }
    },
    {
      id: 'micromf1-content',
      type: 'text' as const,
      content: `
## Where the Deadweight Loss Comes From

Every market failure has the same signature: the quantity the market produces is **not** the quantity where marginal social benefit equals marginal social cost (CED POL-2.C.1). Producing any non-efficient quantity creates **deadweight loss** (POL-2.C.2).

| Situation | Market quantity vs. efficient quantity | Why |
|-----------|----------------------------------------|-----|
| Monopoly, oligopoly, monopolistic competition | **Too little** | Firms set MR = MC and charge P > MC, so units buyers value above their cost are never made |
| Negative externality | **Too much** | Producers or consumers ignore the external cost, so private cost < social cost |
| Positive externality | **Too little** | Buyers ignore the benefit to others, so private benefit < social benefit |
| Public good | **Too little (often zero)** | Non-excludable, so free riders will not pay and private sellers cannot cover costs |
| Common resource | **Too much use** | Non-excludable but rival, so each user ignores the cost imposed on others |
| Asymmetric information | **Too much or too little** | Buyers or sellers misjudge the true benefit or cost of the good |

### Reading the Deadweight Loss
- **Underproduction:** the deadweight loss triangle sits to the **left** of the efficient quantity, between MSB and MSC, from the market quantity up to the efficient quantity.
- **Overproduction:** the triangle sits to the **right** of the efficient quantity, where each extra unit costs society more than it is worth.

> ⚠️ **Common trap:** Deadweight loss does not mean someone lost money. It is surplus that **no one** receives because the efficient trades did not happen (or wasteful trades did).
      `
    },
    {
      id: 'micromf1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Market failure occurs when the equilibrium does not maximize total _______.

2) A good that is non-rival and non-excludable, such as national defense, is called a _______ good.

3) A firm that produces at the minimum of its ATC curve achieves _______ efficiency.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['surplus', 'public', 'productive'],
        hint1: 'Consumer surplus + producer surplus.',
        hint2: 'It is the type of good that free riders can enjoy without paying.',
        hint3: 'Look at the efficiency table: one condition is P = MC, the other is the lowest cost per unit.',
        explanation: 'Market failure = total surplus not maximized. A non-rival, non-excludable good is a public good, which markets underprovide because of free riders. Producing at minimum ATC is productive efficiency; P = MC is allocative efficiency.'
      }
    },
    {
      id: 'micromf1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Market Failure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A monopoly restricts output to raise price. This is market failure from ___',
            options: ['Market power', 'Externality', 'Public good undersupply', 'Common resource overuse']
          },
          {
            label: 'A steel mill\'s smoke damages nearby farms, and the mill pays nothing for the harm. This is market failure from ___',
            options: ['Externality', 'Market power', 'Public good undersupply', 'Common resource overuse']
          },
          {
            label: 'Everyone in town can watch a fireworks show without paying, so no private firm will put it on. This is ___',
            options: ['Free-rider problem', 'Market power', 'Externality', 'Common resource overuse']
          }
        ],
        correctAnswers: ['Market power', 'Externality', 'Free-rider problem'],
        hint1: 'The monopoly has pricing power.',
        hint2: 'A cost falls on third parties who are not part of the steel market.',
        hint3: 'Viewers cannot be excluded, so they have no reason to pay.',
        explanation: 'Monopoly = market power. Smoke that harms farms the mill does not pay = a negative externality. A show nobody can be excluded from = the free-rider problem, so the market underprovides this public good.'
      }
    },
    {
      id: 'micromf1-strategy',
      type: 'text' as const,
      content: `
## Comparing Market Failure Solutions

| Market Failure | Government Solution | Private Solution |
|---------------|--------------------|-----------------| 
| Negative externality | Per-unit (Pigouvian) tax, environmental regulation | Assign property rights and let the parties bargain |
| Positive externality | Subsidy, provision | Private charity |
| Public good | Government provision via taxes | Voluntary contribution (underprovides) |
| Common resource | Regulation, catch or use limits, property rights | Private ownership of the resource |
| Monopoly | Antitrust, regulation, price caps | Potential entry, innovation |

> ⚠️ **AP Key Point:** Government intervention can also fail (**government failure**). Interventions may be the wrong size, may target the wrong market, or may have unintended consequences, and any of these can create a new deadweight loss. The AP exam expects you to evaluate BOTH market failure AND potential government failure.
      `
    },
    {
      id: 'micromf1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best illustrates government failure?',
            options: [
              'A pollution tax set far above the external cost',
              'A factory that pollutes without paying for the harm',
              'A monopoly that restricts output to raise its price',
              'Free riders who avoid paying for street lights'
            ],
            correctAnswer: 0,
            explanation: 'A tax far above the external cost cuts output below the efficient level, so the intervention itself creates a deadweight loss. The factory, the monopoly and the free riders are market failures that government action is meant to fix.'
          },
          {
            question: 'Why do private markets tend to underprovide national defense?',
            options: [
              'Nonpayers cannot be excluded, so many free ride',
              'One more user raises the cost of providing it',
              'Its benefits go only to the people who pay for it',
              'Firms that supply it face too much competition'
            ],
            correctAnswer: 0,
            explanation: 'National defense is non-excludable, so people can benefit without paying and private sellers cannot collect enough revenue to supply it. It is also non-rival, so one more person protected adds no cost, and its benefits reach payers and nonpayers alike.'
          }
        ]
      }
    }
  ]
}