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
| **Asymmetric information** (enrichment, not on the AP exam) | One party knows more | Used car "lemons" |

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
## Beyond the AP Course: Asymmetric Information

> ℹ️ **Enrichment:** Asymmetric information is not part of the AP Microeconomics Course and Exam Description, so the AP exam does not test it. The market failures the AP course does test are externalities, public goods and market power (Unit 6). This section shows another reason real markets can fail.

When one party in a transaction has more information than the other:

### Adverse Selection
Occurs **before** the transaction. The uninformed party selects disproportionately bad outcomes:

| Market | Informed Party | Problem |
|--------|---------------|---------|
| Used cars | Seller knows car quality | Buyers assume low quality → good cars leave market ("lemons problem") |
| Health insurance | Buyer knows health status | Sickest people buy most insurance → premiums rise → healthy people drop out |

### Moral Hazard
Occurs **after** the transaction. Having insurance or a safety net changes behavior:

| Example | Changed Behavior |
|---------|-----------------|
| Car insurance | Drive more recklessly |
| Bank bailouts | Take excessive risks ("too big to fail") |
| Fire insurance | Less careful about fire prevention |

### Solutions
- **Signaling**: Informed party reveals info (warranties, college degrees)
- **Screening**: Uninformed party gathers info (health questionnaires, inspections)
- **Government regulation**: Mandatory disclosure, licensing requirements
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
| Negative externality | Pigouvian tax, regulation | Coase negotiation |
| Positive externality | Subsidy, provision | Private charity |
| Public good | Government provision via taxes | Voluntary contribution (underprovides) |
| Common resource | Regulation, quotas, property rights | Community norms (Ostrom) |
| Monopoly | Antitrust, regulation, price caps | Potential entry, innovation |
| Asymmetric info (enrichment) | Disclosure laws, licensing | Signaling, screening, reputation |

> ⚠️ **AP Key Point:** Government intervention can also fail (**government failure**). Interventions may create their own deadweight loss, be captured by special interests, or have unintended consequences. The AP exam expects you to evaluate BOTH market failure AND potential government failure.
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