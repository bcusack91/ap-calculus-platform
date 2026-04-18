const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

const files = [
  {
    file: 'micro-externalities-public-goods-part1.ts',
    exportName: 'microExternalitiesPublicGoodsPart1Data',
    slug: 'micro-externalities-public-goods',
    prefix: 'microext1',
    content: () => `export const microExternalitiesPublicGoodsPart1Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext1-intro',
      type: 'text' as const,
      content: \`
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

$$\\\\text{Deadweight Loss} = \\\\frac{1}{2} \\\\times (Q_{market} - Q_{optimal}) \\\\times (\\\\text{External cost per unit})$$

For a **positive production externality**, the MSC lies **below** MPC, and the market underproduces.
      \`
    },
    {
      id: 'microext1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'microext1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) When a negative externality exists and the market overproduces, the MSC curve lies _______ the MPC curve. (above/below)

2) A good that is non-rival and non-excludable is called a _______ good.

3) The problem where rational individuals consume without paying for a non-excludable good is called the _______  problem.
      \`,
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
      content: \`
**Match the Market Failure** 🔍
      \`,
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
            options: ['Free-rider problem', 'Tragedy of the commons', 'Negative externality', 'Prisoner\\'s dilemma']
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
      content: \`
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
      \`
    },
    {
      id: 'microext1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
}`
  },
  {
    file: 'micro-factor-markets-part1.ts',
    content: () => `export const microFactorMarketsPart1Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfm1-intro',
      type: 'text' as const,
      content: \`
# 💰 Factor Markets

**Part 1 of 7 — Derived Demand and the Labor Market**

---

## What Are Factor Markets?

Factor markets are where firms purchase the **inputs** (factors of production) they need to produce goods and services:

| Factor | What It Is | Payment | Example |
|--------|-----------|---------|---------|
| **Labor** | Human work/effort | **Wages** | Factory workers, teachers |
| **Capital** | Physical tools/equipment | **Interest/rent** | Machines, buildings |
| **Land** | Natural resources | **Rent** | Farmland, mineral rights |
| **Entrepreneurship** | Risk-taking/innovation | **Profit** | Starting a business |

> 🔑 **Critical Concept:** Demand for factors of production is **derived demand** — firms only demand labor because labor produces goods that consumers want. If demand for the product falls, demand for the labor used to make it falls too.

---

## Marginal Revenue Product (MRP)

The key to factor markets is **MRP** — the additional revenue a firm earns by hiring one more unit of a factor:

$$MRP = MP \\\\times MR$$

Where:
- **MP** = Marginal Product (additional output from one more worker)
- **MR** = Marginal Revenue (additional revenue from one more unit of output)

For a **perfectly competitive firm**, MR = P (price), so:

$$MRP = MP \\\\times P$$

| Workers | Total Product | MP | Product Price | MRP |
|---------|--------------|-----|--------------|-----|
| 1 | 10 | 10 | $5 | $50 |
| 2 | 18 | 8 | $5 | $40 |
| 3 | 24 | 6 | $5 | $30 |
| 4 | 28 | 4 | $5 | $20 |
| 5 | 30 | 2 | $5 | $10 |

> The **MRP curve is the firm's demand curve for labor.**
      \`
    },
    {
      id: 'microfm1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Demand for labor is called "derived demand" because:',
            options: [
              'It is derived from the supply of labor in the market',
              'It is derived from the demand for the product that labor produces',
              'Workers derive satisfaction from working',
              'It is set by government labor regulations'
            ],
            correctAnswer: 1,
            explanation: 'Firms hire labor to produce goods consumers want. If product demand falls, labor demand falls. Labor demand is "derived" from product demand.'
          },
          {
            question: 'Using the table above, what is the MRP of the 3rd worker?',
            options: [
              '$24',
              '$30',
              '$18',
              '$6'
            ],
            correctAnswer: 1,
            explanation: 'The 3rd worker has MP = 6 units. MRP = MP × P = 6 × $5 = $30.'
          },
          {
            question: 'A profit-maximizing firm should hire workers up to the point where:',
            options: [
              'MRP = 0',
              'MRP = Wage',
              'MP is maximized',
              'Total product is maximized'
            ],
            correctAnswer: 1,
            explanation: 'The firm hires where MRP = W (wage). If MRP > W, hiring another worker adds more revenue than cost. If MRP < W, the last worker costs more than they produce.'
          }
        ]
      }
    },
    {
      id: 'microfm1-content',
      type: 'text' as const,
      content: \`
## The Hiring Rule: MRP = MFC

A firm maximizes profit by hiring factors until:

$$MRP = MFC$$

Where **MFC** = Marginal Factor Cost (the cost of hiring one more unit).

In a **competitive labor market**, the firm is a wage-taker — it can hire as many workers as it wants at the market wage. So MFC = W (wage):

$$MRP = W$$

### Shifts in Labor Demand

Labor demand (MRP) shifts when:
1. **Product price changes** → Higher product price raises MRP at every quantity
2. **Productivity changes** → Better technology raises MP, which raises MRP  
3. **Price of other inputs changes** → Substitutes and complements in production

### Shifts in Labor Supply

Labor supply shifts when:
- Immigration increases or decreases
- Worker preferences change
- Training/education expands the qualified labor pool
- Government policies (minimum wage, licensing) alter supply
      \`
    },
    {
      id: 'microfm1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) MRP equals marginal product times marginal _______.

2) A profit-maximizing firm hires workers until MRP equals the _______.

3) The MRP curve is the firm's demand curve for _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['revenue', 'wage', 'labor'],
        hint1: 'MRP = MP × ??',
        hint2: 'In a competitive labor market, MFC equals this.',
        hint3: 'The factor of production being hired.',
        explanation: 'MRP = MP × MR (marginal revenue). Hire until MRP = wage. The MRP curve IS the labor demand curve.'
      }
    },
    {
      id: 'microfm1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Cause and Effect** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'If the price of the product a firm sells increases, the demand for labor will ___',
            options: ['Increase (shift right)', 'Decrease (shift left)', 'Not change', 'Become perfectly inelastic']
          },
          {
            label: 'If new technology makes workers more productive, MRP will ___',
            options: ['Increase', 'Decrease', 'Stay the same', 'Become negative']
          },
          {
            label: 'If immigration increases the supply of labor, equilibrium wages will ___',
            options: ['Decrease', 'Increase', 'Stay the same', 'Become zero']
          }
        ],
        correctAnswers: ['Increase (shift right)', 'Increase', 'Decrease'],
        hint1: 'MRP = MP × P. If P rises...',
        hint2: 'MRP = MP × MR. If MP rises...',
        hint3: 'More supply at every wage level → supply curve shifts right.',
        explanation: 'Higher product price raises MRP (labor demand shifts right). Better technology raises MP and thus MRP. More labor supply shifts the curve right, lowering equilibrium wages.'
      }
    },
    {
      id: 'microfm1-strategy',
      type: 'text' as const,
      content: \`
## Monopsony: A Single Buyer of Labor

A **monopsony** is a labor market with only one employer (e.g., a company town). Key differences from competitive labor:

| Feature | Competitive | Monopsony |
|---------|------------|-----------|
| Wage | Market-determined | Firm sets wage below MRP |
| MFC | MFC = W (constant) | MFC > W (upward-sloping) |
| Employment | Where MRP = W | Where MRP = MFC (lower quantity) |
| Result | Efficient | **Deadweight loss** — fewer workers hired at lower wages |

The monopsonist must raise wages for ALL workers to attract one more, so MFC rises faster than the supply curve.

> ⚠️ **AP Trap:** A monopsony hires where MRP = MFC but pays the wage on the **supply curve** at that quantity — NOT the MFC. The wage is below both MRP and MFC.
      \`
    },
    {
      id: 'microfm1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In a monopsony labor market, compared to a competitive labor market, the wage is ___ and employment is ___.',
            options: [
              'Higher; higher',
              'Lower; lower',
              'Higher; lower',
              'Lower; higher'
            ],
            correctAnswer: 1,
            explanation: 'A monopsonist restricts hiring (lower employment) and pays a lower wage than would prevail in a competitive market — extracting surplus from workers.'
          },
          {
            question: 'If the wage in a competitive labor market is $15/hour and a firm\\'s MRP for the 10th worker is $18, the firm should:',
            options: [
              'Lay off the 10th worker since MRP exceeds the wage',
              'Hire more workers since MRP exceeds the wage',
              'Maintain current employment since the market is in equilibrium',
              'Lower its product price to reduce MRP'
            ],
            correctAnswer: 1,
            explanation: 'When MRP ($18) > W ($15), the additional worker generates more revenue than they cost. The firm should keep hiring until MRP = W.'
          }
        ]
      }
    }
  ]
}`
  },
  {
    file: 'micro-government-intervention-part1.ts',
    content: () => `export const microGovernmentInterventionPart1Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgi1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'microgi1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
            question: 'The government sets a minimum wage of $12/hour in a market where the equilibrium wage is $10/hour. This will likely cause:',
            options: [
              'A shortage of workers at $12/hour',
              'An increase in the quantity of labor demanded',
              'Unemployment among low-skill workers',
              'No effect because $12 > $10'
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
      content: \`
## Taxes: Excise Taxes and Tax Incidence

An **excise tax** is a per-unit tax on a good. Key principles:

### Tax Incidence — Who Really Pays?

The **statutory incidence** (who writes the check) differs from the **economic incidence** (who bears the burden):

$$\\\\text{Tax burden} \\\\propto \\\\frac{1}{\\\\text{Elasticity}}$$

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
      \`
    },
    {
      id: 'microgi1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A binding price ceiling creates a _______ (shortage/surplus).

2) A binding price floor creates a _______ (shortage/surplus).

3) The side of the market with more _______ demand or supply bears more of the tax burden. (elastic/inelastic)
      \`,
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
      content: \`
**Policy Identification** 🔍
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'microgi1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
}`
  },
  {
    file: 'micro-labor-markets-part1.ts',
    content: () => `export const microLaborMarketsPart1Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlm1-intro',
      type: 'text' as const,
      content: \`
# 💰 Labor Markets

**Part 1 of 7 — Supply, Demand, and Wage Determination**

---

## The Labor Market Model

| Component | Represented By | Determined By |
|-----------|---------------|---------------|
| **Demand for labor** | MRP curve (downward-sloping) | Firms' hiring decisions based on productivity |
| **Supply of labor** | Upward-sloping curve | Workers' willingness to work at various wages |
| **Equilibrium** | Intersection of D and S | Market wage and employment level |

### Why Is Labor Demand Downward-Sloping?

Due to **diminishing marginal returns**: As more workers are added to fixed capital, each additional worker produces less additional output → MRP declines.

| Workers | MP (units) | Product Price | MRP |
|---------|-----------|--------------|------|
| 1 | 20 | $10 | $200 |
| 2 | 16 | $10 | $160 |
| 3 | 11 | $10 | $110 |
| 4 | 7 | $10 | $70 |
| 5 | 3 | $10 | $30 |

If the market wage is $70/hour, the firm hires **4 workers** (MRP ≥ W for workers 1-4).

> 🔑 **Rule:** Hire until MRP = W. Every worker whose MRP ≥ W generates profit; stop when the next worker's MRP < W.
      \`
    },
    {
      id: 'microlm1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Based on the table above, if the market wage rises from $70 to $120, how many workers will the firm hire?',
            options: [
              '2 workers',
              '3 workers',
              '4 workers',
              '5 workers'
            ],
            correctAnswer: 0,
            explanation: 'At W = $120, only workers 1 (MRP=$200) and 2 (MRP=$160) have MRP ≥ W. Worker 3 has MRP=$110 < $120, so only 2 are hired.'
          },
          {
            question: 'The labor demand curve slopes downward because of:',
            options: [
              'Diminishing marginal returns to labor',
              'Increasing labor supply over time',
              'Government wage regulations',
              'Workers becoming less motivated'
            ],
            correctAnswer: 0,
            explanation: 'Diminishing marginal returns means each additional worker adds less output (declining MP), so MRP falls — creating a downward-sloping demand curve.'
          }
        ]
      }
    },
    {
      id: 'microlm1-content',
      type: 'text' as const,
      content: \`
## Shifts in Labor Demand vs. Supply

### What Shifts Labor Demand?

| Factor | Direction | Example |
|--------|----------|---------|
| Product price increases | Demand shifts **right** | Rising car prices → more auto workers demanded |
| Productivity increases | Demand shifts **right** | New machinery makes each worker more productive |
| Price of substitute input falls | Demand shifts **left** | Cheaper robots replace assembly workers |
| Price of complementary input falls | Demand shifts **right** | Cheaper software makes programmers more productive |

### What Shifts Labor Supply?

| Factor | Direction | Example |
|--------|----------|---------|
| Immigration | Supply shifts **right** | More available workers at every wage |
| Population growth | Supply shifts **right** | Larger working-age population |
| Change in preferences | Supply shifts **left** | Workers prefer leisure → fewer willing to work |
| Educational requirements | Supply shifts **left** | Licensing requirements reduce qualified workers |

### Wage Differentials

Why do some workers earn more than others?

1. **Human capital** — Education, training, experience raise productivity (MRP)
2. **Compensating differentials** — Dangerous/unpleasant jobs pay more to attract workers
3. **Discrimination** — Wage gaps not explained by productivity differences
4. **Unions** — Collective bargaining raises wages above competitive equilibrium
      \`
    },
    {
      id: 'microlm1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A firm should hire workers until MRP equals the _______.

2) Labor demand slopes down due to diminishing marginal _______.

3) Higher wages due to dangerous working conditions are called compensating _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['wage', 'returns', 'differentials'],
        hint1: 'The cost of hiring one more worker in a competitive market.',
        hint2: 'Each additional worker adds less additional output.',
        hint3: 'They compensate for unpleasant job characteristics.',
        explanation: 'Hire until MRP = Wage. Diminishing marginal returns cause declining MP/MRP. Compensating differentials are higher wages for dangerous/unpleasant jobs.'
      }
    },
    {
      id: 'microlm1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Shifts Analysis** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'New automation technology replaces warehouse workers. This shifts labor demand ___',
            options: ['Left (decrease)', 'Right (increase)', 'No change', 'Both left and right']
          },
          {
            label: 'A wave of immigration increases the pool of available workers. This shifts labor supply ___',
            options: ['Right (increase)', 'Left (decrease)', 'No change', 'Both left and right']
          },
          {
            label: 'The effect of increased immigration on equilibrium wages is to make them ___',
            options: ['Lower', 'Higher', 'Stay the same', 'Indeterminate']
          }
        ],
        correctAnswers: ['Left (decrease)', 'Right (increase)', 'Lower'],
        hint1: 'Automation is a substitute for labor.',
        hint2: 'More workers available at every wage.',
        hint3: 'Rightward shift in supply along a downward demand curve.',
        explanation: 'Automation replaces workers → labor demand falls. Immigration → more supply. More supply at same demand → equilibrium wage falls.'
      }
    },
    {
      id: 'microlm1-strategy',
      type: 'text' as const,
      content: \`
## Minimum Wage: A Price Floor in the Labor Market

The minimum wage is a **price floor** on labor. If set above the equilibrium wage:

| Effect | Description |
|--------|------------|
| **Unemployment** | Qs of labor > Qd of labor → surplus of workers |
| **Who benefits?** | Workers who keep their jobs earn a higher wage |
| **Who is harmed?** | Workers who lose their jobs or can't find employment |
| **Deadweight loss** | Mutually beneficial employment transactions don't occur |

> ⚠️ **AP Nuance:** If the minimum wage is set **below** the equilibrium wage, it has **no effect** — it is not binding. The AP exam frequently tests whether students can identify binding vs. non-binding price floors.

### Debate Points (AP FRQ)
- **For:** Reduces poverty for employed workers, addresses monopsony power
- **Against:** Creates unemployment among low-skill workers, may not target poverty well
      \`
    },
    {
      id: 'microlm1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In a competitive labor market with equilibrium wage of $14/hour, a minimum wage of $11/hour will:',
            options: [
              'Create unemployment equal to the labor surplus',
              'Have no effect on wages or employment',
              'Raise wages to $11/hour for all workers',
              'Cause a shortage of workers'
            ],
            correctAnswer: 1,
            explanation: '$11 is below the equilibrium of $14, so the minimum wage is NOT binding. The market wage stays at $14 — the floor has no effect.'
          },
          {
            question: 'A technology firm finds that each additional programmer adds $150,000 in annual revenue. If the market salary is $130,000, the firm should:',
            options: [
              'Stop hiring since salaries are too high',
              'Hire more programmers because MRP exceeds the wage',
              'Cut salaries to maximize profit',
              'Hire exactly one programmer'
            ],
            correctAnswer: 1,
            explanation: 'MRP ($150K) > W ($130K), so each additional programmer adds more revenue than they cost. The firm should hire more until MRP falls to equal the wage.'
          }
        ]
      }
    }
  ]
}`
  },
  {
    file: 'micro-market-failure-part1.ts',
    content: () => `export const microMarketFailurePart1Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromf1-intro',
      type: 'text' as const,
      content: \`
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

$$\\\\text{At Q*: MSB = MSC}$$

| Condition | Meaning |
|-----------|---------|
| **Allocative efficiency** | P = MC → producing the right mix of goods |
| **Productive efficiency** | Producing at minimum ATC → lowest cost |
| **No deadweight loss** | Total surplus (CS + PS) is maximized |

Market failure occurs when **any of these conditions break down**.
      \`
    },
    {
      id: 'micromf1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'micromf1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Market failure occurs when the equilibrium does not maximize total _______.

2) The "lemons problem" in used car markets is an example of adverse _______.

3) When having insurance causes riskier behavior, this is called moral _______.
      \`,
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
      content: \`
**Classify the Market Failure** 🔍
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'micromf1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
            explanation: 'Buyers assume average quality → offer average prices → owners of good cars won\\'t sell at those prices → good cars leave → average quality drops further. This is the "lemons" spiral.'
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
}`
  },
  {
    file: 'micro-monopolistic-oligopoly-part1.ts',
    content: () => `export const microMonopolisticOligopolyPart1Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromo1-intro',
      type: 'text' as const,
      content: \`
# 💰 Monopolistic Competition & Oligopoly

**Part 1 of 7 — Imperfect Competition**

---

## The Spectrum of Market Structures

| Feature | Perfect Competition | Monopolistic Competition | Oligopoly | Monopoly |
|---------|-------------------|------------------------|-----------|----------|
| **# of firms** | Many | Many | Few | One |
| **Product** | Identical | **Differentiated** | Identical or differentiated | Unique |
| **Entry barriers** | None | Low | **High** | Very high |
| **Price control** | None (price taker) | Some | Significant | Full |
| **Examples** | Agriculture | Restaurants, clothing | Airlines, cell carriers | Local utility |

---

## Monopolistic Competition

Key characteristics:
1. **Many firms** — no single firm dominates
2. **Differentiated products** — brands, quality, location differ
3. **Low barriers to entry/exit** — firms can enter freely
4. **Some price-setting power** — due to product differentiation

### Short-Run: Can Earn Economic Profit

Like a monopoly in the short run — the firm faces a **downward-sloping demand curve**:
- Maximizes profit where **MR = MC**
- If P > ATC at that quantity → **economic profit**
- If P < ATC → **economic loss**

### Long Run: Zero Economic Profit

Free entry/exit drives profits to zero:
- Profits attract entry → each firm's demand shifts **left** 
- Losses cause exit → remaining firms' demand shifts **right**
- Long-run equilibrium: **P = ATC** (zero economic profit)

> 🔑 **Key Difference from Perfect Competition:** In monopolistic competition, P = ATC but **P > MC** (allocative inefficiency) and the firm does NOT produce at minimum ATC (productive inefficiency). There is **excess capacity**.
      \`
    },
    {
      id: 'micromo1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In long-run equilibrium, a monopolistically competitive firm earns:',
            options: [
              'Positive economic profit due to brand loyalty',
              'Zero economic profit because entry eliminates profits',
              'Negative economic profit because of excess capacity',
              'The same profit as a monopolist'
            ],
            correctAnswer: 1,
            explanation: 'Low barriers to entry mean new firms enter when profits exist, shifting demand left for each firm until P = ATC and economic profit = 0.'
          },
          {
            question: 'Monopolistic competition is inefficient because:',
            options: [
              'Firms collude to raise prices',
              'There are too many firms in the market',
              'Firms produce where P > MC with excess capacity',
              'Products are identical across all firms'
            ],
            correctAnswer: 2,
            explanation: 'P > MC means allocative inefficiency (not producing enough). Producing on the downward-sloping part of ATC (not at minimum) means productive inefficiency — excess capacity.'
          }
        ]
      }
    },
    {
      id: 'micromo1-content',
      type: 'text' as const,
      content: \`
## Oligopoly

An oligopoly has **few dominant firms** with **high barriers to entry**. The distinguishing feature: **strategic interdependence** — each firm must consider how rivals will respond to its decisions.

### Game Theory & the Prisoner's Dilemma

| | Firm B: Low Price | Firm B: High Price |
|---|---|---|
| **Firm A: Low Price** | A: $5M, B: $5M | A: $12M, B: $2M |
| **Firm A: High Price** | A: $2M, B: $12M | A: $8M, B: $8M |

- **Dominant strategy**: Both firms choose LOW price (it's best regardless of rival's choice)
- **Nash equilibrium**: (Low, Low) → $5M each
- **Cooperative outcome**: (High, High) → $8M each — but it's unstable because each firm has incentive to cheat

> 🔑 **AP Connection:** The prisoner's dilemma explains why cartels (collusion agreements) are **inherently unstable** — each member benefits from cheating on the agreement.

### Collusion vs. Competition

| Outcome | Behavior | Price | Quantity | Profit |
|---------|----------|-------|----------|--------|
| **Collusion** (cartel) | Act as monopoly | High | Low | Maximized jointly |
| **Compete** (Nash eq.) | Independent pricing | Lower | Higher | Lower for each |
| **Cheat** on cartel | One firm undercuts | Mixed | Mixed | Cheater wins, others lose |
      \`
    },
    {
      id: 'micromo1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In an oligopoly, firms must consider rivals' responses. This is called strategic _______.

2) In the prisoner's dilemma, both firms choosing to compete is the _______ equilibrium. (Nash/Pareto)

3) In monopolistic competition, the long-run economic profit is _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['interdependence', 'Nash', 'zero'],
        hint1: 'Each firm\\'s strategy depends on others.',
        hint2: 'Named after mathematician John Nash.',
        hint3: 'Entry drives profits to this level.',
        explanation: 'Strategic interdependence defines oligopoly. Both competing is the Nash equilibrium (neither can do better unilaterally). Free entry in monopolistic competition drives long-run profit to zero.'
      }
    },
    {
      id: 'micromo1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Market Structure Identification** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Many firms selling differentiated products with low barriers to entry describes ___',
            options: ['Monopolistic competition', 'Perfect competition', 'Oligopoly', 'Monopoly']
          },
          {
            label: 'A few dominant firms with high barriers and strategic interdependence describes ___',
            options: ['Oligopoly', 'Monopolistic competition', 'Perfect competition', 'Monopoly']
          },
          {
            label: 'OPEC members agreeing to limit oil production is an example of ___',
            options: ['Collusion (cartel)', 'Perfect competition', 'Monopolistic competition', 'Price discrimination']
          }
        ],
        correctAnswers: ['Monopolistic competition', 'Oligopoly', 'Collusion (cartel)'],
        hint1: 'Differentiated products + many firms + easy entry.',
        hint2: 'Few firms, high barriers, strategic behavior.',
        hint3: 'Multiple producers coordinating output restrictions.',
        explanation: 'Differentiated products + many firms + low barriers = monopolistic competition. Few firms + interdependence = oligopoly. OPEC restricting output = cartel/collusion.'
      }
    },
    {
      id: 'micromo1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Graphs You Must Know

### Monopolistic Competition Long-Run Graph
- Downward-sloping demand is **tangent** to ATC at the profit-maximizing Q
- P = ATC → zero profit
- P > MC → allocative inefficiency
- Q < minimum ATC quantity → excess capacity

### Key Comparisons for the AP Exam

| Question | Perfect Competition | Monopolistic Competition |
|----------|-------------------|------------------------|
| Long-run profit? | Zero | Zero |
| P = MC? | Yes (efficient) | No — P > MC |
| Min ATC? | Yes (efficient) | No — excess capacity |
| Product variety? | None | High (consumer benefit) |

> ⚠️ **AP Trap:** Both perfect competition AND monopolistic competition have zero long-run profit. The difference is efficiency — only perfect competition achieves P = MC and minimum ATC.
      \`
    },
    {
      id: 'micromo1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In the prisoner\\'s dilemma payoff matrix, the Nash equilibrium is often NOT the best combined outcome. This illustrates that:',
            options: [
              'Individual rationality can lead to collectively suboptimal results',
              'Cooperation is always the dominant strategy',
              'Firms in oligopoly always collude successfully',
              'Game theory does not apply to real markets'
            ],
            correctAnswer: 0,
            explanation: 'Each firm rationally chooses its dominant strategy (compete/low price), but the resulting Nash equilibrium yields lower joint profits than cooperation. Individual rationality leads to a collectively worse outcome.'
          },
          {
            question: 'A monopolistically competitive firm is producing where MR = MC and P > ATC. In the long run:',
            options: [
              'The firm will continue earning economic profit',
              'New firms will enter, reducing the firm\\'s demand until P = ATC',
              'The firm will merge with competitors to form an oligopoly',
              'The government will regulate prices down to MC'
            ],
            correctAnswer: 1,
            explanation: 'Low barriers to entry attract new firms when P > ATC. Entry shifts each incumbent\\'s demand left until P falls to ATC and economic profit reaches zero.'
          }
        ]
      }
    }
  ]
}`
  },
  {
    file: 'micro-monopoly-part1.ts',
    content: () => `export const microMonopolyPart1Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromn1-intro',
      type: 'text' as const,
      content: \`
# 💰 Monopoly

**Part 1 of 7 — Single Sellers and Market Power**

---

## What Creates a Monopoly?

A **monopoly** is a market with a **single seller** and **high barriers to entry**:

| Barrier Type | How It Works | Example |
|-------------|-------------|---------|
| **Legal/regulatory** | Government grants exclusive right | Patents, copyrights, licenses |
| **Natural monopoly** | Huge economies of scale | Water utility, electric grid |
| **Control of resources** | Sole access to key input | De Beers (historically) — diamonds |
| **Network effects** | Value increases with users | Social media platforms |

---

## How Monopolies Differ from Competitive Firms

| Feature | Perfect Competition | Monopoly |
|---------|-------------------|----------|
| Demand curve | Horizontal (price taker) | **Downward-sloping** (IS the market) |
| MR vs. Price | MR = P | **MR < P** (must lower price for all to sell more) |
| Profit rule | P = MC | **MR = MC** (then charge P on demand curve) |
| Long-run profit | Zero | Can be **positive** (barriers block entry) |

### Why Is MR < P for a Monopolist?

To sell one more unit, the monopolist must lower the price on **all** units:

| Q | Price | TR | MR |
|---|-------|-----|-----|
| 1 | $10 | $10 | $10 |
| 2 | $9 | $18 | $8 |
| 3 | $8 | $24 | $6 |
| 4 | $7 | $28 | $4 |
| 5 | $6 | $30 | $2 |

MR falls **twice as fast** as the demand curve (for a linear demand).
      \`
    },
    {
      id: 'micromn1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'For a monopolist, marginal revenue is less than price because:',
            options: [
              'The government taxes monopoly profits',
              'Lowering price to sell more reduces revenue on all previous units',
              'Monopolists always operate at a loss',
              'Demand is perfectly elastic for monopolies'
            ],
            correctAnswer: 1,
            explanation: 'To sell the 3rd unit at $8, the monopolist also drops from $9 to $8 on the first two units — losing $2 on inframarginal units. MR = $6 < P = $8.'
          },
          {
            question: 'A monopoly can earn positive economic profit in the long run because:',
            options: [
              'It produces at minimum ATC',
              'Barriers to entry prevent new firms from competing away profits',
              'The government subsidizes monopoly output',
              'Demand is perfectly inelastic'
            ],
            correctAnswer: 1,
            explanation: 'Unlike competitive markets where entry eliminates profits, monopoly barriers (patents, huge scale requirements, resource control) keep competitors out permanently.'
          }
        ]
      }
    },
    {
      id: 'micromn1-content',
      type: 'text' as const,
      content: \`
## The Monopoly Graph

The monopolist maximizes profit in 3 steps:

1. **Find quantity**: Where MR = MC → this is Q*
2. **Find price**: Go UP to the demand curve at Q* → this is P*
3. **Calculate profit**: Profit = (P* − ATC) × Q*

### Deadweight Loss

The monopolist produces where MR = MC, but charges P > MC:
- Competitive output would be where **D = MC** (higher Q, lower P)
- The triangle between competitive Q and monopoly Q is **deadweight loss**
- Monopoly transfers some consumer surplus to **producer surplus** and destroys the rest

### Key Inefficiencies

| Type | Present? | Why? |
|------|----------|------|
| **Allocative inefficiency** | Yes | P > MC — underproducing |
| **Productive inefficiency** | Yes | Not at minimum ATC |
| **Deadweight loss** | Yes | Mutually beneficial trades lost |
      \`
    },
    {
      id: 'micromn1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A monopolist maximizes profit by producing where MR = _______.

2) For a linear demand curve, the MR curve has _______ the slope of the demand curve. (half/twice)

3) Monopoly creates deadweight loss because P > _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['MC', 'twice', 'MC'],
        hint1: 'Same profit-maximization rule as any firm.',
        hint2: 'MR falls faster than demand.',
        hint3: 'Price exceeds this, meaning too little is produced.',
        explanation: 'Profit max: MR = MC. MR has twice the slope of demand (falls twice as fast). P > MC means allocative inefficiency — society values additional units more than they cost to produce.'
      }
    },
    {
      id: 'micromn1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Monopoly vs. Competition** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Compared to perfect competition, a monopoly charges a ___ price',
            options: ['Higher', 'Lower', 'The same', 'Indeterminate']
          },
          {
            label: 'Compared to perfect competition, a monopoly produces a ___ quantity',
            options: ['Lower', 'Higher', 'The same', 'Indeterminate']
          },
          {
            label: 'A monopoly\\'s demand curve is ___',
            options: ['Downward-sloping (the market demand curve)', 'Horizontal', 'Vertical', 'Upward-sloping']
          }
        ],
        correctAnswers: ['Higher', 'Lower', 'Downward-sloping (the market demand curve)'],
        hint1: 'Monopolies restrict output to raise price.',
        hint2: 'MR = MC at a lower Q than the competitive equilibrium.',
        hint3: 'The monopoly IS the market — it faces market demand.',
        explanation: 'Monopoly: higher P, lower Q vs. competition. The monopolist faces the entire market demand curve (downward-sloping).'
      }
    },
    {
      id: 'micromn1-strategy',
      type: 'text' as const,
      content: \`
## Natural Monopoly & Regulation

A **natural monopoly** exists when one firm can serve the entire market at lower cost than multiple firms — ATC is still declining at market demand.

### Regulatory Options

| Approach | Price Set At | Result |
|----------|-------------|--------|
| **Unregulated** | MR = MC, charge P on D | Max profit, DWL |
| **Fair-return (P = ATC)** | ATC | Zero profit, some DWL remains |
| **Socially optimal (P = MC)** | MC | Allocatively efficient, but **firm makes a loss** (P < ATC) |

> ⚠️ **AP Trap:** Setting P = MC for a natural monopoly eliminates deadweight loss BUT requires a government **subsidy** because the firm operates at a loss (MC < ATC when ATC is declining).

Most regulated monopolies use **fair-return pricing** (P = ATC) as a compromise.
      \`
    },
    {
      id: 'micromn1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A natural monopoly regulated at P = MC will:',
            options: [
              'Earn positive economic profit',
              'Earn zero economic profit',
              'Incur an economic loss requiring a subsidy',
              'Produce the monopoly profit-maximizing quantity'
            ],
            correctAnswer: 2,
            explanation: 'A natural monopoly has declining ATC. At P = MC, price is below ATC (since MC is below ATC when ATC is declining), so the firm incurs a loss and needs a subsidy to stay in business.'
          },
          {
            question: 'A profit-maximizing monopolist produces where MR = MC and finds that P = $15, ATC = $12, and Q = 100. The monopolist\\'s economic profit is:',
            options: [
              '$300',
              '$1,500',
              '$1,200',
              '$12'
            ],
            correctAnswer: 0,
            explanation: 'Profit = (P − ATC) × Q = ($15 − $12) × 100 = $300.'
          }
        ]
      }
    }
  ]
}`
  },
  {
    file: 'micro-perfect-competition-part1.ts',
    content: () => `export const microPerfectCompetitionPart1Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'micropc1-intro',
      type: 'text' as const,
      content: \`
# 💰 Perfect Competition

**Part 1 of 7 — The Benchmark Market Structure**

---

## Characteristics of Perfect Competition

| Condition | Description |
|-----------|-------------|
| **Many buyers & sellers** | No single firm can influence the market price |
| **Identical products** | Consumers see no difference between sellers' goods |
| **Perfect information** | All participants know prices and product quality |
| **Free entry and exit** | No barriers — firms can enter/leave freely |
| **Price taker** | Each firm accepts the market price as given |

Because the firm is a price taker, its **demand curve is perfectly elastic** (horizontal) at the market price. Every unit sells at the same price.

### Revenue in Perfect Competition

Since P is constant for a competitive firm:

| Revenue Concept | Formula | In Perfect Competition |
|----------------|---------|----------------------|
| Total Revenue (TR) | P × Q | Straight line through origin |
| Average Revenue (AR) | TR / Q | AR = P (horizontal line) |
| Marginal Revenue (MR) | ΔTR / ΔQ | **MR = P** (also horizontal) |

> 🔑 **Critical AP Fact:** In perfect competition, **D = AR = MR = P**. This simplifies all profit analysis — the demand curve, MR curve, AR curve, and price are all the same horizontal line.
      \`
    },
    {
      id: 'micropc1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In perfect competition, a firm\\'s demand curve is:',
            options: [
              'Downward-sloping like the market demand',
              'Perfectly elastic (horizontal) at the market price',
              'Perfectly inelastic (vertical)',
              'Upward-sloping'
            ],
            correctAnswer: 1,
            explanation: 'A price taker can sell any quantity at the market price — if it charges above, it sells nothing; below is unnecessary. Demand is perfectly elastic (horizontal).'
          },
          {
            question: 'For a perfectly competitive firm, marginal revenue equals:',
            options: [
              'Marginal cost',
              'Average total cost',
              'The market price',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'Since the firm sells every unit at the same market price, each additional unit adds exactly P to total revenue. MR = P.'
          }
        ]
      }
    },
    {
      id: 'micropc1-content',
      type: 'text' as const,
      content: \`
## Profit Maximization: The MR = MC Rule

Every firm maximizes profit (or minimizes loss) by producing where **MR = MC**:

In perfect competition, since MR = P:

$$\\\\text{Produce where } P = MC$$

### Three Profit Scenarios

| If at MR = MC... | Condition | Result |
|-------------------|-----------|--------|
| **P > ATC** | Revenue per unit > cost per unit | **Economic profit** |
| **P = ATC** | Revenue per unit = cost per unit | **Normal profit** (break even) |
| **ATC > P > AVC** | Covers variable costs, not fixed | **Economic loss** (but still produce in short run) |
| **P < AVC** | Can't even cover variable costs | **Shut down** |

### The Shutdown Rule

$$\\\\text{Shut down if } P < AVC$$

Why? If P < AVC, the firm loses MORE by operating than by shutting down. When shut down, losses = fixed costs only.

> 🔑 The firm's **short-run supply curve** is the portion of the MC curve **above AVC**.
      \`
    },
    {
      id: 'micropc1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A perfectly competitive firm maximizes profit where P = _______.

2) The firm should shut down in the short run if P falls below _______.

3) D = AR = MR = _______ in perfect competition.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['MC', 'AVC', 'P'],
        hint1: 'Profit max: MR = MC, and MR = P.',
        hint2: 'Below this, the firm loses more by operating.',
        hint3: 'All four are the same horizontal line.',
        explanation: 'Produce where P = MC (since MR = P). Shut down if P < AVC. In perfect competition, D = AR = MR = P — all equal.'
      }
    },
    {
      id: 'micropc1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Profit Analysis** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'When P > ATC at the profit-maximizing quantity, the firm earns ___',
            options: ['Economic profit', 'Normal profit', 'Economic loss', 'Zero revenue']
          },
          {
            label: 'When ATC > P > AVC, the firm should ___ in the short run',
            options: ['Continue producing', 'Shut down immediately', 'Raise its price', 'Double production']
          },
          {
            label: 'The short-run supply curve of a competitive firm is the MC curve above ___',
            options: ['AVC', 'ATC', 'MR', 'AFC']
          }
        ],
        correctAnswers: ['Economic profit', 'Continue producing', 'AVC'],
        hint1: 'Revenue per unit exceeds cost per unit.',
        hint2: 'The firm covers variable costs and some fixed costs.',
        hint3: 'Below this curve, the firm shuts down.',
        explanation: 'P > ATC → profit. ATC > P > AVC → loss but continue (covers some fixed costs). Supply curve = MC above AVC (shutdown point).'
      }
    },
    {
      id: 'micropc1-strategy',
      type: 'text' as const,
      content: \`
## Long-Run Equilibrium

In the long run, free entry and exit drive economic profit to **zero**:

1. If firms earn **profit** → new firms **enter** → market supply shifts right → price falls
2. If firms suffer **losses** → some firms **exit** → market supply shifts left → price rises
3. **Long-run equilibrium**: P = MC = minimum ATC

### Long-Run Efficiency

| Efficiency Type | Achieved? | Because |
|----------------|-----------|---------|
| **Allocative** | ✅ Yes | P = MC |
| **Productive** | ✅ Yes | Produces at minimum ATC |

> Perfect competition is the **benchmark of efficiency**. All other market structures are compared to it.

### The Long-Run Supply Curve

| Industry Type | Long-Run Supply | Why |
|--------------|----------------|-----|
| **Constant-cost** | Horizontal | Entry/exit doesn't change input prices |
| **Increasing-cost** | Upward-sloping | More firms raise input prices |
| **Decreasing-cost** | Downward-sloping | More firms lower input prices (rare) |
      \`
    },
    {
      id: 'micropc1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'If firms in a perfectly competitive industry are currently earning economic profit, what will happen in the long run?',
            options: [
              'Firms will raise prices to increase profits further',
              'New firms enter, supply increases, price falls until profit equals zero',
              'Existing firms will merge to form a monopoly',
              'Nothing — profits persist indefinitely'
            ],
            correctAnswer: 1,
            explanation: 'Free entry means profit attracts new firms → supply shifts right → market price falls → each firm\\'s profit shrinks until P = min ATC and economic profit = 0.'
          },
          {
            question: 'A competitive firm has P = $8, ATC = $10, and AVC = $7. The firm should:',
            options: [
              'Shut down because it is making a loss',
              'Continue producing because P > AVC',
              'Raise its price above $10',
              'Increase output to cover fixed costs'
            ],
            correctAnswer: 1,
            explanation: 'P ($8) > AVC ($7), so the firm covers all variable costs and $1 toward fixed costs. Shutting down would mean losing ALL fixed costs. It\\'s better to produce and minimize losses.'
          }
        ]
      }
    }
  ]
}`
  },
  {
    file: 'micro-production-costs-part1.ts',
    content: () => `export const microProductionCostsPart1Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'microprod1-intro',
      type: 'text' as const,
      content: \`
# 💰 Production & Costs

**Part 1 of 7 — Cost Curves and Production Decisions**

---

## The Production Function

A **production function** shows the relationship between inputs and outputs:

| Workers | Total Product (TP) | Marginal Product (MP) | Average Product (AP) |
|---------|-------------------|----------------------|---------------------|
| 0 | 0 | — | — |
| 1 | 10 | 10 | 10.0 |
| 2 | 24 | 14 | 12.0 |
| 3 | 36 | 12 | 12.0 |
| 4 | 44 | 8 | 11.0 |
| 5 | 48 | 4 | 9.6 |
| 6 | 48 | 0 | 8.0 |

### Diminishing Marginal Returns

> 🔑 **Law of Diminishing Marginal Returns:** As more units of a variable input (labor) are added to a fixed input (capital), **MP eventually declines**.

In the table: MP peaks at worker 2 (14 units), then decreases. This is NOT because workers are lazier — it's because each worker has less capital to work with.

### MP and AP Relationship

- When **MP > AP**: AP is rising
- When **MP < AP**: AP is falling  
- When **MP = AP**: AP is at its maximum

> Think of it like a batting average: if your next at-bat (marginal) is above your average, your average rises.
      \`
    },
    {
      id: 'microprod1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Based on the table, diminishing marginal returns begin with which worker?',
            options: [
              'The 1st worker',
              'The 2nd worker',
              'The 3rd worker',
              'The 4th worker'
            ],
            correctAnswer: 2,
            explanation: 'MP increases from worker 1 (10) to worker 2 (14), then decreases at worker 3 (12). Diminishing marginal returns begin with worker 3 — the first worker whose MP is lower than the previous.'
          },
          {
            question: 'If marginal product is above average product, average product is:',
            options: [
              'Falling',
              'Rising',
              'At its maximum',
              'Equal to zero'
            ],
            correctAnswer: 1,
            explanation: 'When MP > AP, each additional unit adds more than the average — pulling the average up. Like a test score above your class average raising the class average.'
          }
        ]
      }
    },
    {
      id: 'microprod1-content',
      type: 'text' as const,
      content: \`
## Cost Curves

### Fixed vs. Variable Costs

| Cost Type | Changes with Output? | Examples |
|-----------|---------------------|----------|
| **Fixed (FC)** | No | Rent, insurance, salaries of managers |
| **Variable (VC)** | Yes | Raw materials, hourly wages, electricity |
| **Total (TC)** | TC = FC + VC | All costs combined |

### Per-Unit Cost Curves

| Curve | Formula | Shape |
|-------|---------|-------|
| **AFC** | FC / Q | Always decreasing (spreading fixed costs) |
| **AVC** | VC / Q | U-shaped — falls then rises |
| **ATC** | TC / Q = AFC + AVC | U-shaped — falls then rises |
| **MC** | ΔTC / ΔQ | U-shaped — falls then rises |

### Critical Relationships

$$MC \\\\text{ intersects AVC and ATC at their minimum points}$$

Why? Same logic as MP/AP:
- When MC < ATC → ATC is falling (adding units cheaper than average)
- When MC > ATC → ATC is rising (adding units costlier than average)
- When MC = ATC → ATC is at minimum
      \`
    },
    {
      id: 'microprod1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Total cost equals fixed cost plus _______ cost.

2) MC intersects ATC at ATC's _______ point.

3) AFC always _______ as output increases because fixed costs are spread over more units. (increases/decreases)
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['variable', 'minimum', 'decreases'],
        hint1: 'TC = FC + ??',
        hint2: 'MC crosses ATC at the bottom of the U-shape.',
        hint3: 'Same fixed cost divided by larger Q.',
        explanation: 'TC = FC + VC. MC = ATC at minimum ATC (bottom of the U). AFC = FC/Q always falls as Q increases (spreading fixed costs).'
      }
    },
    {
      id: 'microprod1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Cost Classification** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Monthly rent for a factory is a ___ cost',
            options: ['Fixed', 'Variable', 'Marginal', 'Sunk']
          },
          {
            label: 'Hourly wages for production workers are a ___ cost',
            options: ['Variable', 'Fixed', 'Average', 'Opportunity']
          },
          {
            label: 'The cost of producing one additional unit is the ___ cost',
            options: ['Marginal', 'Fixed', 'Average', 'Total']
          }
        ],
        correctAnswers: ['Fixed', 'Variable', 'Marginal'],
        hint1: 'It doesn\\'t change with output.',
        hint2: 'More workers = more total wage cost.',
        hint3: 'The change in total cost from one more unit.',
        explanation: 'Rent = fixed (same regardless of output). Hourly wages = variable (more output = more hours). Marginal cost = ΔTC/ΔQ.'
      }
    },
    {
      id: 'microprod1-strategy',
      type: 'text' as const,
      content: \`
## Short Run vs. Long Run

| Time Period | Definition | Key Feature |
|------------|-----------|-------------|
| **Short run** | At least one input is fixed | Fixed costs exist; diminishing returns |
| **Long run** | All inputs are variable | No fixed costs; can change plant size |

### Economies and Diseconomies of Scale

In the long run, the **LRATC** (Long-Run Average Total Cost) curve shows:

| Region | ATC Behavior | Cause |
|--------|-------------|-------|
| **Economies of scale** | LRATC falls | Specialization, bulk purchasing, better technology |
| **Constant returns** | LRATC flat | Neither advantage nor disadvantage of size |
| **Diseconomies of scale** | LRATC rises | Coordination problems, bureaucracy |

> 🔑 **Minimum efficient scale** = the smallest output where LRATC reaches its minimum. This determines whether an industry naturally has many small firms or few large ones.
      \`
    },
    {
      id: 'microprod1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'If a firm\\'s MC is $6 and ATC is $8, we know that ATC is:',
            options: [
              'Rising',
              'Falling',
              'At its minimum',
              'Equal to AVC'
            ],
            correctAnswer: 1,
            explanation: 'When MC ($6) < ATC ($8), each additional unit costs less than the current average, pulling the average DOWN. ATC is falling.'
          },
          {
            question: 'A firm doubles all inputs and output more than doubles. This firm is experiencing:',
            options: [
              'Diminishing marginal returns',
              'Economies of scale',
              'Diseconomies of scale',
              'Constant returns to scale'
            ],
            correctAnswer: 1,
            explanation: 'When doubling all inputs more than doubles output, per-unit costs fall — this is economies of scale. LRATC is declining in this region.'
          }
        ]
      }
    }
  ]
}`
  }
];

for (const f of files) {
  const filePath = path.join(dir, f.file);
  fs.writeFileSync(filePath, f.content());
  console.log('Wrote:', f.file);
}
console.log('Done! Wrote', files.length, 'Micro files');
