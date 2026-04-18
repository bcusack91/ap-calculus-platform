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
| **Asymmetric information** | One party knows more | Used car "lemons" |

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
              'The firm produces at minimum ATC',
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
              'Asymmetric information'
            ],
            correctAnswer: 1,
            explanation: 'Perfect competition actually achieves efficiency (P = MC, minimum ATC). The other three — externalities, public goods, and asymmetric info — all cause markets to fail.'
          }
        ]
      }
    },
    {
      id: 'micromf1-content',
      type: 'text' as const,
      content: `
## Asymmetric Information

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

2) The "lemons problem" in used car markets is an example of adverse _______.

3) When having insurance causes riskier behavior, this is called moral _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['surplus', 'selection', 'hazard'],
        hint1: 'Consumer surplus + producer surplus.',
        hint2: 'Bad outcomes are "selected" more frequently.',
        hint3: 'The "hazard" of changed behavior after a transaction.',
        explanation: 'Market failure = total surplus not maximized. Lemons problem = adverse selection (before transaction). Riskier behavior with insurance = moral hazard (after transaction).'
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
            options: ['Market power', 'Externality', 'Public good undersupply', 'Adverse selection']
          },
          {
            label: 'A person buys health insurance knowing they have a pre-existing condition. This is ___',
            options: ['Adverse selection', 'Moral hazard', 'Free-rider problem', 'Market power']
          },
          {
            label: 'After getting fire insurance, a homeowner becomes careless with candles. This is ___',
            options: ['Moral hazard', 'Adverse selection', 'Externality', 'Market power']
          }
        ],
        correctAnswers: ['Market power', 'Adverse selection', 'Moral hazard'],
        hint1: 'The monopoly has pricing power.',
        hint2: 'Happens BEFORE the transaction — the buyer has hidden information.',
        hint3: 'Happens AFTER the transaction — behavior changes.',
        explanation: 'Monopoly = market power. Buying insurance with known health issues = adverse selection (pre-transaction). Reckless behavior after getting insurance = moral hazard (post-transaction).'
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
| Asymmetric info | Disclosure laws, licensing | Signaling, screening, reputation |

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
            question: 'In the used car market, adverse selection may lead to:',
            options: [
              'Only high-quality cars being sold at premium prices',
              'Good cars leaving the market as sellers cannot get fair prices',
              'Government banning all used car sales',
              'Buyers gaining more information than sellers'
            ],
            correctAnswer: 1,
            explanation: 'Buyers assume average quality → offer average prices → owners of good cars won\'t sell at those prices → good cars leave → average quality drops further. This is the "lemons" spiral.'
          },
          {
            question: 'Which situation best illustrates moral hazard?',
            options: [
              'A bank makes risky loans knowing the government will bail it out',
              'A consumer avoids buying an extended warranty',
              'A firm prices above marginal cost',
              'Fishermen deplete a shared fishing ground'
            ],
            correctAnswer: 0,
            explanation: 'Moral hazard occurs when a safety net (bailout guarantee) changes behavior (riskier lending). The bank takes on more risk BECAUSE of the safety net — classic moral hazard.'
          }
        ]
      }
    }
  ]
}