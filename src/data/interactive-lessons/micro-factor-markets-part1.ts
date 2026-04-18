export const microFactorMarketsPart1Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfm1-intro',
      type: 'text' as const,
      content: `
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

$$MRP = MP \\times MR$$

Where:
- **MP** = Marginal Product (additional output from one more worker)
- **MR** = Marginal Revenue (additional revenue from one more unit of output)

For a **perfectly competitive firm**, MR = P (price), so:

$$MRP = MP \\times P$$

| Workers | Total Product | MP | Product Price | MRP |
|---------|--------------|-----|--------------|-----|
| 1 | 10 | 10 | $5 | $50 |
| 2 | 18 | 8 | $5 | $40 |
| 3 | 24 | 6 | $5 | $30 |
| 4 | 28 | 4 | $5 | $20 |
| 5 | 30 | 2 | $5 | $10 |

> The **MRP curve is the firm's demand curve for labor.**
      `
    },
    {
      id: 'microfm1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'microfm1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) MRP equals marginal product times marginal _______.

2) A profit-maximizing firm hires workers until MRP equals the _______.

3) The MRP curve is the firm's demand curve for _______.
      `,
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
      content: `
**Cause and Effect** 🔍
      `,
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
      content: `
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
      `
    },
    {
      id: 'microfm1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
            question: 'If the wage in a competitive labor market is $15/hour and a firm\'s MRP for the 10th worker is $18, the firm should:',
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
}