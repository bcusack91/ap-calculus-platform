export const microGovernmentInterventionPart1Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgi1-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention in Markets

**Part 1 of 7 — Price Controls and Their Consequences**

---

## Why Do Governments Intervene?

Markets sometimes produce outcomes society considers **unfair** or **inefficient**. Governments intervene through:

| Tool | Purpose | Example |
|------|---------|---------|
| **Price ceilings** | Keep prices affordable for consumers | Rent control |
| **Price floors** | Guarantee minimum income for producers | Minimum wage |
| **Taxes** | Raise revenue or discourage consumption | Excise tax on cigarettes |
| **Subsidies** | Encourage production/consumption | Agricultural subsidies |

---

## Price Ceilings

A **price ceiling** is a legally imposed **maximum price** — sellers cannot charge above it.

### When Does It Matter?

| Ceiling Position | Effect |
|-----------------|--------|
| **Above equilibrium** | Not binding — no effect, market operates normally |
| **Below equilibrium** | **Binding** — creates a **shortage** (Qd > Qs) |

When a price ceiling is binding:
- **Quantity traded = Qs** (the smaller of Qd and Qs)
- **Consumer surplus**: Some consumers benefit from lower prices, but others can't find the good
- **Deadweight loss** is created because mutually beneficial trades don't occur

> 🔑 **Classic AP Example:** Rent control — ceiling below equilibrium rent creates housing shortage. Landlords reduce maintenance, waitlists grow, and black markets emerge.

---

## Price Floors

A **price floor** is a legally imposed **minimum price** — buyers cannot pay below it.

| Floor Position | Effect |
|---------------|--------|
| **Below equilibrium** | Not binding — no effect |
| **Above equilibrium** | **Binding** — creates a **surplus** (Qs > Qd) |

> 🔑 **Classic AP Example:** Minimum wage above equilibrium creates unemployment (surplus of labor). Employers hire fewer workers than they would at the equilibrium wage.
      `
    },
    {
      id: 'microgi1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A binding price ceiling set below equilibrium will result in:',
            options: [
              'A surplus of the good',
              'A shortage of the good',
              'No change in quantity traded',
              'An increase in supply'
            ],
            correctAnswer: 1,
            explanation: 'Below equilibrium, Qd > Qs at the ceiling price, creating a shortage. The quantity actually traded equals Qs (the short side of the market).'
          },
          {
            question: 'The government sets a minimum wage of \\$12/hour in a market where the equilibrium wage is \\$10/hour. This will likely cause:',
            options: [
              'A shortage of workers at $12/hour',
              'An increase in the quantity of labor demanded',
              'Unemployment among low-skill workers',
              'No effect because \\$12 > \\$10'
            ],
            correctAnswer: 2,
            explanation: 'A minimum wage above equilibrium is a binding price floor. At $12, Qs of labor > Qd of labor, creating a surplus of workers — unemployment.'
          }
        ]
      }
    },
    {
      id: 'microgi1-content',
      type: 'text' as const,
      content: `
## Taxes: Excise Taxes and Tax Incidence

An **excise tax** is a per-unit tax on a good. Key principles:

### Tax Incidence — Who Really Pays?

The **statutory incidence** (who writes the check) differs from the **economic incidence** (who bears the burden):

$$\\text{Tax burden} \\propto \\frac{1}{\\text{Elasticity}}$$

| Condition | Who bears more burden? |
|-----------|----------------------|
| Demand is more inelastic than supply | **Consumers** bear more |
| Supply is more inelastic than demand | **Producers** bear more |
| Perfectly inelastic demand | Consumers bear **all** the tax |
| Perfectly inelastic supply | Producers bear **all** the tax |

> ⚠️ **AP Trap:** It does NOT matter whether the tax is levied on buyers or sellers — the economic incidence is identical either way. The more inelastic side always bears more burden.

### Effect on Graph

- Tax on sellers → supply shifts **left** (up) by the tax amount
- New equilibrium: higher consumer price, lower producer price
- **Deadweight loss** = triangle between old and new equilibrium quantities
      `
    },
    {
      id: 'microgi1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A binding price ceiling creates a _______ (shortage/surplus).

2) A binding price floor creates a _______ (shortage/surplus).

3) The side of the market with more _______ demand or supply bears more of the tax burden. (elastic/inelastic)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['shortage', 'surplus', 'inelastic'],
        hint1: 'Ceiling below equilibrium: Qd > Qs.',
        hint2: 'Floor above equilibrium: Qs > Qd.',
        hint3: 'The less responsive side cannot escape the tax.',
        explanation: 'Ceilings below equilibrium create shortages (Qd > Qs). Floors above equilibrium create surpluses (Qs > Qd). The more inelastic side bears more tax burden because they are less able to change behavior.'
      }
    },
    {
      id: 'microgi1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Policy Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rent control is an example of a ___',
            options: ['Price ceiling', 'Price floor', 'Excise tax', 'Subsidy']
          },
          {
            label: 'Minimum wage is an example of a ___',
            options: ['Price floor', 'Price ceiling', 'Excise tax', 'Quota']
          },
          {
            label: 'A $2 per gallon tax on gasoline is an example of a ___',
            options: ['Excise tax', 'Price ceiling', 'Price floor', 'Subsidy']
          }
        ],
        correctAnswers: ['Price ceiling', 'Price floor', 'Excise tax'],
        hint1: 'It sets a maximum rent landlords can charge.',
        hint2: 'It sets a minimum wage employers must pay.',
        hint3: 'It is a per-unit tax on a specific good.',
        explanation: 'Rent control = price ceiling (max price). Minimum wage = price floor (min price). Per-gallon gas tax = excise tax.'
      }
    },
    {
      id: 'microgi1-strategy',
      type: 'text' as const,
      content: `
## Subsidies and Quotas

### Subsidies
A **subsidy** is a per-unit payment from the government to producers or consumers:
- Shifts supply **right** (down) by the subsidy amount
- Increases quantity traded, decreases consumer price
- Creates **deadweight loss** (overproduction beyond efficient quantity)
- Government cost = subsidy × quantity

### Quotas
A **quota** limits the quantity of a good that can be produced or imported:
- Creates an artificial shortage → raises price
- Benefits domestic producers at expense of consumers
- Creates deadweight loss similar to a tariff

### Tariffs
A **tariff** is a tax on imports:
- Raises the domestic price above world price
- Domestic producers produce more, consumers buy less
- Government collects tariff revenue
- Creates deadweight loss from production inefficiency + consumption inefficiency
      `
    },
    {
      id: 'microgi1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the demand for insulin is perfectly inelastic and a $5 excise tax is imposed, who bears the tax burden?',
            options: [
              'Producers bear all of the burden',
              'Consumers bear all of the burden',
              'Consumers and producers share equally',
              'Neither — the tax creates no burden'
            ],
            correctAnswer: 1,
            explanation: 'With perfectly inelastic demand, consumers cannot reduce quantity demanded in response to a price increase. They bear 100% of the tax — the consumer price rises by the full $5.'
          },
          {
            question: 'A city imposes rent control. Which outcome is LEAST likely?',
            options: [
              'Long waiting lists for apartments',
              'Landlords reducing maintenance spending',
              'An increase in the supply of rental housing',
              'Black market or under-the-table payments'
            ],
            correctAnswer: 2,
            explanation: 'Rent control (price ceiling below equilibrium) reduces the profitability of providing housing, discouraging new construction and maintenance — supply decreases or stagnates, not increases.'
          }
        ]
      }
    }
  ]
}