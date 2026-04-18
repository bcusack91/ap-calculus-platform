export const microExternalitiesPublicGoodsPart1Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext1-intro',
      type: 'text' as const,
      content: `
# 💰 Externalities & Public Goods

**Part 1 of 7 — Market Failures from Spillover Effects**

---

## What Are Externalities?

An **externality** occurs when a market transaction affects a **third party** who is not directly involved in the transaction:

| Type | Definition | Example | Effect on Market |
|------|-----------|---------|-----------------|
| **Negative externality** | Cost imposed on third parties | Factory pollution affecting nearby residents | Market **overproduces** — too much output |
| **Positive externality** | Benefit conferred on third parties | Flu vaccines protect unvaccinated population | Market **underproduces** — too little output |
| **Negative externality of consumption** | Harm from consuming | Secondhand smoke from cigarettes | Overconsumption |
| **Positive externality of consumption** | Benefit from consuming | Education raises productivity for employers | Underconsumption |

> 🔑 **Key Insight:** Externalities cause **market failure** because the market price does not reflect the **full social cost** or **full social benefit** of a good.

---

## The Graph: MSC, MSB, and Deadweight Loss

When a **negative production externality** exists:

- **MPC** (Marginal Private Cost) = supply curve as firms see it
- **MSC** (Marginal Social Cost) = MPC + external cost
- **MSC lies above MPC** by the amount of the external cost

The market equilibrium is at MPC = D (demand), but the **socially optimal** quantity is where MSC = D.

$$\\text{Deadweight Loss} = \\frac{1}{2} \\times (Q_{market} - Q_{optimal}) \\times (\\text{External cost per unit})$$

For a **positive production externality**, the MSC lies **below** MPC, and the market underproduces.
      `
    },
    {
      id: 'microext1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A chemical plant dumps waste into a river, harming downstream fisheries. This is an example of:',
            options: [
              'A positive externality of production',
              'A negative externality of production',
              'A positive externality of consumption',
              'An efficient market outcome'
            ],
            correctAnswer: 1,
            explanation: 'The chemical plant imposes costs (polluted water) on third parties (fisheries) as a byproduct of production — a classic negative externality of production.'
          },
          {
            question: 'When a negative production externality exists, the free market will produce:',
            options: [
              'Less than the socially optimal quantity',
              'Exactly the socially optimal quantity',
              'More than the socially optimal quantity',
              'An indeterminate quantity'
            ],
            correctAnswer: 2,
            explanation: 'With a negative externality, MPC < MSC, so the market equilibrium quantity exceeds the socially optimal quantity — the market overproduces because firms do not bear the full cost.'
          },
          {
            question: 'The vertical distance between the MSC and MPC curves represents:',
            options: [
              'Consumer surplus',
              'The per-unit external cost',
              'Producer surplus',
              'The tax rate'
            ],
            correctAnswer: 1,
            explanation: 'MSC = MPC + external cost per unit. The vertical gap between the two curves equals the per-unit external cost imposed on third parties.'
          }
        ]
      }
    },
    {
      id: 'microext1-content',
      type: 'text' as const,
      content: `
## Public Goods and the Free-Rider Problem

### Characteristics of Goods

Goods are classified by two properties:

| Property | Definition |
|----------|-----------|
| **Rival** | One person's consumption reduces availability for others |
| **Excludable** | Sellers can prevent non-payers from consuming |

This creates four types:

| | Excludable | Non-excludable |
|---|---|---|
| **Rival** | **Private good** (pizza, clothing) | **Common resource** (ocean fish, clean air) |
| **Non-rival** | **Club good** (cable TV, toll road) | **Public good** (national defense, streetlights) |

### The Free-Rider Problem

**Public goods** are both non-rival and non-excludable. This creates the **free-rider problem**: rational individuals will consume the good without paying, since they cannot be excluded.

Because of free riders, **private markets will underprovide public goods** — or not provide them at all. This is why governments typically provide public goods funded through taxation.

### Common Resources and the Tragedy of the Commons

**Common resources** are rival but non-excludable. Because no one can be excluded, individuals overconsume, leading to depletion. Examples:
- Overfishing in international waters
- Overgrazing on shared pastureland
- Traffic congestion on public roads
      `
    },
    {
      id: 'microext1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) When a negative externality exists and the market overproduces, the MSC curve lies _______ the MPC curve. (above/below)

2) A good that is non-rival and non-excludable is called a _______ good.

3) The problem where rational individuals consume without paying for a non-excludable good is called the _______  problem.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['above', 'public', 'free-rider'],
        hint1: 'Think about whether social cost is higher or lower than private cost.',
        hint2: 'National defense is the classic example.',
        hint3: 'These individuals get benefits without contributing.',
        explanation: 'MSC lies above MPC because the external cost is added. Public goods are non-rival + non-excludable. The free-rider problem occurs when people benefit without paying.'
      }
    },
    {
      id: 'microext1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Market Failure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Factory pollution harming a nearby town is a ___',
            options: ['Negative production externality', 'Positive production externality', 'Public good problem', 'Common resource problem']
          },
          {
            label: 'Overfishing in international waters is an example of ___',
            options: ['Tragedy of the commons', 'Free-rider problem', 'Positive externality', 'Club good inefficiency']
          },
          {
            label: 'National defense cannot be provided efficiently by markets because of the ___',
            options: ['Free-rider problem', 'Tragedy of the commons', 'Negative externality', 'Prisoner\'s dilemma']
          }
        ],
        correctAnswers: ['Negative production externality', 'Tragedy of the commons', 'Free-rider problem'],
        hint1: 'The factory is the producer; the town is the third party bearing costs.',
        hint2: 'Ocean fish are rival but non-excludable.',
        hint3: 'People cannot be excluded from national defense.',
        explanation: 'Factory pollution = negative production externality. Overfishing = tragedy of the commons (common resource overuse). National defense = free-rider problem (public good).'
      }
    },
    {
      id: 'microext1-strategy',
      type: 'text' as const,
      content: `
## Correcting Externalities: Policy Solutions

### Government Interventions

| Externality Type | Policy Solution | How It Works |
|-----------------|----------------|-------------|
| Negative production | **Per-unit tax** (Pigouvian tax) | Tax = external cost → shifts MPC up to MSC |
| Positive production | **Per-unit subsidy** | Subsidy = external benefit → shifts MPC down to MSC |
| Negative consumption | **Excise tax** | Raises price to reflect social cost |
| Positive consumption | **Subsidy to consumers** | Lowers price to encourage optimal consumption |

### The Coase Theorem

If **property rights are clearly defined** and **transaction costs are low**, private parties can negotiate to resolve externalities without government intervention.

Example: If a factory has the right to pollute, fisheries downstream can pay the factory to reduce output. If fisheries have the right to clean water, the factory must compensate them.

> ⚠️ **AP Trap:** The Coase Theorem requires LOW transaction costs and CLEAR property rights. If either condition fails, private negotiation will not work.
      `
    },
    {
      id: 'microext1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A Pigouvian tax on a good with a negative production externality will:',
            options: [
              'Increase the equilibrium quantity to the socially optimal level',
              'Decrease the equilibrium quantity to the socially optimal level',
              'Have no effect on the equilibrium quantity',
              'Eliminate all producer surplus'
            ],
            correctAnswer: 1,
            explanation: 'A Pigouvian tax equal to the external cost per unit shifts MPC up to MSC, reducing quantity from the market equilibrium to the socially optimal level and eliminating deadweight loss.'
          },
          {
            question: 'Which of the following is a requirement for the Coase Theorem to hold?',
            options: [
              'Government must set the tax rate correctly',
              'Transaction costs must be low and property rights clearly defined',
              'The externality must be positive rather than negative',
              'There must be no free riders in the market'
            ],
            correctAnswer: 1,
            explanation: 'The Coase Theorem states that private negotiation can resolve externalities IF property rights are clearly defined AND transaction costs are low.'
          }
        ]
      }
    }
  ]
}