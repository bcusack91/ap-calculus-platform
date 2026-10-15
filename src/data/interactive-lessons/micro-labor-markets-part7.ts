export const microLaborMarketsPart7Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlab7-intro',
      type: 'text' as const,
      content: `
# 💰 Labor Markets

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Whole Topic on One Page |
| A Four-Question Checklist |
| Minimum Wages Side by Side |
| Mixed Review |

> 🔑 **Key Concept:** A labor market is a supply-and-demand market where the price is the **wage**. Demand comes from firms and equals the **MRP** of labor; supply comes from people choosing between work and leisure. Every question in this topic asks which of those two curves moves, why, and what that does to the wage and employment.
`
    },
    {
      id: 'microlab7-summary',
      type: 'text' as const,
      content: `
## 📖 The Whole Topic on One Page

### Labor Demand (Firms)

| Shifts right when... | Shifts left when... |
|---|---|
| Demand for the product, and so its price, rises | Demand for the product, and so its price, falls |
| Productivity (MP) rises from training or better tools | Productivity falls |
| A **complementary** input gets cheaper | A complementary input gets more expensive |
| A **substitute** input gets more expensive | A substitute input gets cheaper |

### Labor Supply (Workers)

| Shifts right when... | Shifts left when... |
|---|---|
| Population or immigration grows | Workers retire or leave the area |
| Wages in alternative jobs fall | Wages in alternative jobs rise |
| Working conditions improve | Working conditions worsen |
| Training becomes cheaper or more available | Licensing or training requirements tighten |

**A change in this job's own wage shifts neither curve.** It is a movement along both.

### Why Wages Differ

| Explanation | Curve | Example |
|---|---|---|
| Human capital | Higher demand (MRP) and smaller supply of skilled workers | Engineers vs. cashiers |
| Compensating differential | Smaller supply for unpleasant jobs | Overnight-shift premium |
| Discrimination | Lower demand for a group, or crowding that raises supply | Group shut out of some occupations |
| Union wage | A floor above equilibrium | Fewer jobs at the higher wage |
| Licensing or craft-union limits | Smaller supply | Licensed trades |

## A Four-Question Checklist
1. **Which labor market** does the question ask about?
2. **Does the event change MRP or the number of willing and able workers?** That decides demand or supply.
3. **Which direction** does the curve shift? For two shifts, which variable is indeterminate?
4. **What does one wage-taking firm do?** It takes the new market wage and moves along its MRP curve, unless its MRP itself changed.
`
    },
    {
      id: 'microlab7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Restaurants start using tablets that let each server handle more tables, and many servers say the tablets make the work easier. In the market for servers, which curves shift?',
            options: [
              'Demand right and supply right',
              'Demand right and supply left',
              'Demand left and supply right',
              'Demand right, with supply unchanged'
            ],
            correctAnswer: 0,
            explanation: 'The tablets raise each server\'s marginal product, so labor demand shifts right. Easier work makes the job more attractive, so supply also shifts right. Employment rises; the wage change is indeterminate.'
          },
          {
            question: 'The wage paid to electricians rises because demand for new housing has increased. How does the quantity of electricians\' labor supplied respond?',
            options: [
              'It goes up along the existing supply curve',
              'Supply shifts right because of the higher wage',
              'Supply shifts left as electricians need to work fewer hours',
              'It stays the same because supply depends only on population'
            ],
            correctAnswer: 0,
            explanation: 'The demand shift raises the wage, and a higher wage draws more hours and more workers into the trade: a movement up the existing supply curve. The wage for this job is not a supply shifter.'
          },
          {
            question: 'Which pair of jobs most likely shows a compensating differential?',
            options: [
              'Day and night guards at one building, with different pay',
              'A surgeon and a medical receptionist at the same hospital, with different pay',
              'A union and a nonunion carpenter in the same city, with different pay',
              'A new hire and a 20-year veteran at the same factory, with different pay'
            ],
            correctAnswer: 0,
            explanation: 'The two guards need the same skills, so the pay gap compensates for night work. The surgeon gap reflects human capital, the carpenter gap reflects union bargaining, and the veteran\'s gap reflects experience, which is also human capital.'
          }
        ]
      }
    },
    {
      id: 'microlab7-min-wage',
      type: 'text' as const,
      content: `
## Minimum Wages Side by Side

| Feature | Competitive labor market | Monopsony |
|---|---|---|
| Floor below the market wage | No effect | No effect if below the monopsony wage |
| Floor between the monopsony wage and the competitive wage | Does not apply: there is only one market wage | **Wage and employment both rise** |
| Floor above the competitive wage | Wage rises, **employment falls**, surplus of labor, deadweight loss | Wage rises; employment is below the competitive level, and below the monopsony level if the floor is high enough |
| Employment is set by | Labor demanded at the floor | The smaller of labor supplied and the quantity where MRP equals the floor |
| Wage income | Rises if labor demand is inelastic, falls if elastic | Rises when employment and the wage both rise |

### The Numbers You Have Worked
| Market (part) | Equilibrium | Minimum wage | Employment | Surplus |
|---|---|---|---|---|
| Packaging plants (Part 4) | \\$18, 500 | \\$21 | 400 | 200 |
| Warehouse workers (Part 4) | \\$16, 500 | \\$18 | 450 | 150 |
| Food processing (Part 6) | \\$12, 520 | \\$14 | 440 | 160 |

> 🔑 **AP Connection:** Before answering any minimum-wage question, ask two things: **Is it binding?** (Is it above the wage the market would pay?) **Is the market competitive or a monopsony?** The answers decide whether employment rises, falls or stays the same.
`
    },
    {
      id: 'microlab7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mixed Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cheaper tractors that replace farm workers cause the demand for farm labor to ___',
            options: ['decrease', 'increase', 'stay the same', 'become vertical']
          },
          {
            label: 'In a competitive labor market, a minimum wage above equilibrium causes employment to ___',
            options: ['fall', 'rise', 'stay the same', 'become indeterminate']
          },
          {
            label: 'Labor demand rises and labor supply falls at the same time. The wage will ___',
            options: ['rise', 'fall', 'stay the same', 'become indeterminate']
          },
          {
            label: 'When the market wage falls, a wage-taking firm\'s MRP curve will ___',
            options: ['stay the same', 'shift right', 'shift left', 'become horizontal']
          }
        ],
        correctAnswers: ['decrease', 'fall', 'rise', 'stay the same'],
        hint1: 'Tractors that replace workers are a substitute input.',
        hint2: 'Firms hire only the quantity demanded at the floor.',
        hint3: 'Both shifts push the wage in the same direction.',
        explanation: 'A cheaper substitute input lowers labor demand. A binding floor in a competitive market reduces employment to labor demanded. Demand up and supply down both raise the wage, while employment is indeterminate. A wage change moves the firm along its MRP curve; it does not shift MRP.'
      }
    },
    {
      id: 'microlab7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a competitive labor market, L_d = 600 − 20W and L_s = 30W − 150. A minimum wage of \\$18 is set. How many workers are employed?',
            options: [
              '240',
              '390',
              '300',
              '150'
            ],
            correctAnswer: 0,
            explanation: 'Equilibrium is 600 − 20W = 30W − 150, so W = \\$15 and L = 300; the \\$18 floor binds. Employment is labor demanded: 600 − 20(18) = 240. Labor supplied is 390, so the surplus is 150, and 300 is the employment level before the floor.'
          },
          {
            question: 'A country lets many more skilled software engineers immigrate. What happens to the wage and employment of software engineers already in that country\'s market?',
            options: [
              'The market wage falls and total employment rises',
              'The market wage rises and total employment rises',
              'The market wage falls and total employment falls',
              'The market wage is unchanged and employment rises'
            ],
            correctAnswer: 0,
            explanation: 'Immigration adds to labor supply, shifting it right along an unchanged demand curve, so the equilibrium wage falls and employment rises.'
          },
          {
            question: 'A worker pays \\$20,000 in tuition and forgone wages for a certificate that raises her pay by \\$5,000 a year. Ignoring interest, how many years until the investment pays for itself?',
            options: [
              '4 years',
              '5 years',
              '2 years',
              '25 years'
            ],
            correctAnswer: 0,
            explanation: '\\$20,000 ÷ \\$5,000 per year = 4 years. After that, the higher wage is a return on the human-capital investment for the rest of her career.'
          }
        ]
      }
    }
  ]
}
