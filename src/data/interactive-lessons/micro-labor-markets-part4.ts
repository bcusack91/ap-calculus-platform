export const microLaborMarketsPart4Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlab4-intro',
      type: 'text' as const,
      content: `
# 💰 Labor Markets

**Part 4 of 7 — Labor-Market Numbers**

---

| Section |
|---------|
| 📖 From One Firm's MRP to Market Demand |
| Equilibrium with Equations |
| A Binding Minimum Wage, Calculated |

> 🔑 **Key Concept:** A competitive labor market's numbers come from three steps. Each firm's **MRP schedule** tells how many workers it hires at each wage. Adding all firms' hiring gives **market labor demand**. Where market demand meets **market labor supply**, you get the equilibrium wage and employment, and from there you can measure what a minimum wage does.
`
    },
    {
      id: 'microlab4-firm-to-market',
      type: 'text' as const,
      content: `
## 📖 From One Firm's MRP to Market Demand

### Step 1: One Firm's Demand Schedule
A packaging plant sells boxes for **\\$3 each** in a competitive market. Its workers' marginal products (boxes per hour) give its MRP:

| Worker | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| MP | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 |
| MRP = MP × \\$3 | \\$30 | \\$27 | \\$24 | \\$21 | \\$18 | \\$15 | \\$12 | \\$9 |

At each possible wage, the plant hires every worker whose MRP is at least the wage. That turns the MRP column into a **demand schedule**:

| Hourly wage | \\$24 | \\$21 | \\$18 | \\$15 | \\$12 |
|---|---|---|---|---|---|
| Workers one plant hires | 3 | 4 | 5 | 6 | 7 |

### Step 2: Add Up the Firms
The market has **100 identical plants**, so market quantity demanded is 100 times one plant's. Market supply comes from the workers' side.

| Hourly wage | Market labor demanded | Market labor supplied | Result |
|---|---|---|---|
| \\$24 | 300 | 700 | Surplus of 400 |
| \\$21 | 400 | 600 | Surplus of 200 |
| \\$18 | 500 | 500 | **Equilibrium** |
| \\$15 | 600 | 400 | Shortage of 200 |
| \\$12 | 700 | 300 | Shortage of 400 |

### Step 3: Read the Outcome
The market wage is **\\$18** and **500** workers are employed. Each plant takes \\$18 as given and hires **5** workers, the last one with an MRP of exactly \\$18. Check: 100 plants × 5 = 500 ✓.

> 🔑 **AP Connection:** Market labor demand is the **horizontal sum** of the firms' MRP curves: at each wage, add the quantities. Do not add the MRPs themselves.
`
    },
    {
      id: 'microlab4-input',
      type: 'input-boxes' as const,
      content: `
**Read the Schedules** ✍️

Use the packaging-plant tables above.

1) How many workers does one plant hire at a wage of \\$27 an hour?

2) What is market labor demanded at \\$27?

3) At a wage of \\$15, how large is the shortage of workers in the market?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '200', '200'],
        hint1: 'Count the workers whose MRP is at least \\$27.',
        hint2: 'Multiply one plant\'s hiring by the number of plants.',
        hint3: 'Quantity demanded minus quantity supplied at \\$15.',
        explanation: '1) Workers 1 and 2 have MRP of \\$30 and \\$27, so 2. 2) 100 × 2 = 200. 3) At \\$15, firms want 600 workers but only 400 offer to work, a shortage of 200, which would push the wage up toward \\$18.'
      }
    },
    {
      id: 'microlab4-equations',
      type: 'text' as const,
      content: `
## Equilibrium with Equations

Many AP-style problems give linear schedules. In a city's market for warehouse workers:

- Labor demand: **L_d = 900 − 25W**
- Labor supply: **L_s = 50W − 300**

(W in dollars per hour, L in workers.)

### Solve
Set L_d = L_s: 900 − 25W = 50W − 300, so 1,200 = 75W and **W = \\$16**. Then L = 900 − 25(16) = **500** workers.

Check with supply: 50(16) − 300 = 500 ✓.

**Wage income** (the total paid to workers) is W × L = \\$16 × 500 = **\\$8,000** an hour.

### A Demand Shift
New scanning equipment makes each warehouse worker more productive, so MRP rises. Labor demand becomes **L_d = 1,050 − 25W**.

1,050 − 25W = 50W − 300, so 1,350 = 75W and **W = \\$18**. L = 1,050 − 25(18) = **600**.

| Outcome | Before | After the productivity gain |
|---|---|---|
| Wage | \\$16 | \\$18 |
| Employment | 500 | 600 |
| Wage income | \\$8,000 | \\$10,800 |

A rightward demand shift raises both the wage and employment, as the graph predicts.
`
    },
    {
      id: 'microlab4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a competitive labor market, L_d = 1,200 − 30W and L_s = 20W + 200. What are the equilibrium wage and employment?',
            options: [
              '\\$20 and 600 workers',
              '\\$25 and 450 workers',
              '\\$20 and 400 workers',
              '\\$40 and 1,000 workers'
            ],
            correctAnswer: 0,
            explanation: '1,200 − 30W = 20W + 200 gives 50W = 1,000, so W = \\$20. Then L = 1,200 − 600 = 600, and supply agrees: 400 + 200 = 600. The 400 figure is supply before adding the 200 intercept.'
          },
          {
            question: 'A market has 50 identical firms. At a wage of \\$14, each firm\'s MRP schedule says it hires 8 workers. What is market labor demanded at \\$14?',
            options: [
              '400 workers',
              '58 workers',
              '112 workers',
              '700 workers'
            ],
            correctAnswer: 0,
            explanation: 'Market demand is the horizontal sum of the firms\' demand curves: 50 × 8 = 400 workers at \\$14. Adding 50 and 8, or multiplying the wage by a quantity, does not give a quantity of labor.'
          }
        ]
      }
    },
    {
      id: 'microlab4-min-wage',
      type: 'text' as const,
      content: `
## A Binding Minimum Wage, Calculated

Part 1 showed the minimum wage as a price floor on labor. Here is how to measure its effects.

### With the Schedules (Packaging Plants)
A minimum wage of **\\$21** is above the \\$18 equilibrium, so it binds.

| Measure | Before (\\$18) | With a \\$21 minimum | Change |
|---|---|---|---|
| Labor demanded (employment) | 500 | 400 | 100 fewer jobs |
| Labor supplied | 500 | 600 | 100 more job seekers |
| Surplus of labor (unemployment) | 0 | 600 − 400 = **200** | |
| Wage income per hour | \\$18 × 500 = \\$9,000 | \\$21 × 400 = **\\$8,400** | Falls by \\$600 |

Employment is set by the **short side** of the market: firms hire only 400 at \\$21, no matter how many people want to work. The surplus of 200 counts both the 100 workers who lost jobs and the 100 new job seekers drawn in by the higher wage.

### With the Equations (Warehouse Workers)
A minimum wage of **\\$18** is above the \\$16 equilibrium.
- Employment: L_d = 900 − 25(18) = **450** (down 50).
- Labor supplied: L_s = 50(18) − 300 = **600**.
- Surplus of labor: 600 − 450 = **150**.
- Wage income: \\$18 × 450 = **\\$8,100**, up from \\$8,000.
- Deadweight loss: the 50 lost jobs form a triangle between demand and supply. At L = 450, demand's wage is \\$18 and supply's wage is (450 + 300) ÷ 50 = \\$15, so DWL = ½ × 50 × (\\$18 − \\$15) = **\\$75** an hour.

### Why Wage Income Fell in One Case and Rose in the Other
Wage income is W × L, just like total revenue is P × Q. Measure the percentage changes with the midpoint method. If labor demand is **elastic** over the range, the percentage drop in employment outweighs the percentage rise in the wage, and wage income falls (the packaging plants). If it is **inelastic**, wage income rises (the warehouses). This is the total-revenue test from the Elasticity lesson applied to labor.

> ⚠️ **Common trap:** A minimum wage set **below** equilibrium (say \\$15 for the warehouses) does nothing: the market wage stays at \\$16. Always compare the floor with the equilibrium wage first.

> 🔑 **AP Connection:** These are results for a **competitive** labor market. In a monopsony, a minimum wage can raise employment instead (see Factor Markets, Part 5).
`
    },
    {
      id: 'microlab4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the warehouse market (L_d = 900 − 25W, L_s = 50W − 300), a minimum wage of \\$20 is set. How many workers are unemployed in the sense of a labor surplus?',
            options: [
              '300',
              '100',
              '400',
              '700'
            ],
            correctAnswer: 0,
            explanation: 'At \\$20, L_d = 900 − 500 = 400 and L_s = 1,000 − 300 = 700, so the surplus is 700 − 400 = 300. 100 is only the drop in employment from 500, and 400 is the number employed.'
          },
          {
            question: 'A binding minimum wage raises total wage income in a competitive labor market. What does that tell you about labor demand over that range?',
            options: [
              'It is inelastic',
              'It is elastic, so employment fell by a larger percentage',
              'It is perfectly elastic, so employment did not change',
              'It is unit elastic, so the wage and employment moved equally'
            ],
            correctAnswer: 0,
            explanation: 'Wage income rises when the wage rises by a larger percentage than employment falls, which is the definition of inelastic demand. With elastic demand, wage income would fall.'
          },
          {
            question: 'With a binding minimum wage in a competitive labor market, the number of workers employed equals',
            options: [
              'the quantity of labor demanded at the minimum wage',
              'the quantity of labor supplied at the minimum wage',
              'the equilibrium quantity of labor before the floor',
              'the quantity of labor left in surplus at the floor'
            ],
            correctAnswer: 0,
            explanation: 'Employment is set by the short side of the market. Above equilibrium, firms want fewer workers than offer to work, so employment equals labor demanded at the floor and the rest of the job seekers form the surplus.'
          }
        ]
      }
    }
  ]
}
