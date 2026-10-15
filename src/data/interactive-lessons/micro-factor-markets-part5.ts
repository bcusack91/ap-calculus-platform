export const microFactorMarketsPart5Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfac5-intro',
      type: 'text' as const,
      content: `
# 💰 Factor Markets

**Part 5 of 7 — Monopsony in Depth**

---

| Section |
|---------|
| 📖 Building MFC from a Supply Schedule |
| The Monopsony Outcome |
| Monopsony vs. Competition: Deadweight Loss |
| A Minimum Wage in a Monopsony |

> 🔑 **Key Concept:** A **monopsony** is the single buyer of a factor, so it faces the **upward-sloping market supply** curve. To hire one more worker it must raise the wage for everyone, which puts its **MFC above the supply curve**. It hires where **MRP = MFC**, then pays the lowest wage that attracts that many workers, read off the **supply curve**.
`
    },
    {
      id: 'microfac5-build-mfc',
      type: 'text' as const,
      content: `
## 📖 Building MFC from a Supply Schedule

Ridgeway Mill is the only employer in a small town. The town's labor supply schedule shows the wage needed to attract each number of workers, and the mill pays everyone the same wage.

| Workers (L) | Wage needed (supply) | Total labor cost = W × L | MFC = ΔTLC |
|---|---|---|---|
| 1 | \\$8 | \\$8 | \\$8 |
| 2 | \\$10 | \\$20 | \\$12 |
| 3 | \\$12 | \\$36 | \\$16 |
| 4 | \\$14 | \\$56 | \\$20 |
| 5 | \\$16 | \\$80 | \\$24 |
| 6 | \\$18 | \\$108 | \\$28 |

### Why the 4th Worker Costs \\$20, Not \\$14
To hire a 4th worker the mill must offer \\$14. That worker costs \\$14, **and** the three workers already employed get a \\$2 raise (from \\$12 to \\$14), which adds \\$6. MFC = \\$14 + \\$6 = **\\$20**.

### MFC with a Linear Supply Curve
If supply is **W = 10 + 0.5L**, then MFC = **10 + L**: same intercept, twice the slope. This is the same pattern as a monopolist's MR curve, which has the same intercept as demand and twice its slope, except MFC lies **above** supply instead of below demand.

| Seller of output | Buyer of labor |
|---|---|
| Monopoly: MR lies **below** demand | Monopsony: MFC lies **above** supply |
| Must cut price on all units to sell one more | Must raise wage for all workers to hire one more |
| Produces where MR = MC | Hires where MRP = MFC |

> 🔑 **AP Connection:** On the graph, draw S sloping up and a **steeper** MFC above it, starting from the same point on the vertical axis. A monopsony graph with MFC drawn below or parallel to supply loses the point.
`
    },
    {
      id: 'microfac5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is a monopsonist\'s marginal factor cost of labor above the wage it pays?',
            options: [
              'Hiring one more worker means paying all of its current workers more',
              'It pays each new worker the value of that worker\'s output',
              'Its workers are less productive than those at other firms',
              'The government taxes each worker that a single employer hires'
            ],
            correctAnswer: 0,
            explanation: 'The monopsonist faces the upward-sloping market supply, so attracting one more worker requires a higher wage for everyone it employs. The raise for existing workers is added to the new worker\'s wage, so MFC exceeds the wage. Productivity and taxes play no part in MFC.'
          },
          {
            question: 'A monopsonist pays \\$15 an hour to 9 workers. To hire a 10th worker, it must raise the wage to \\$16 for all workers. What is the MFC of the 10th worker?',
            options: [
              '\\$25',
              '\\$16',
              '\\$160',
              '\\$1'
            ],
            correctAnswer: 0,
            explanation: 'Total labor cost rises from 9 × \\$15 = \\$135 to 10 × \\$16 = \\$160, so MFC = \\$25: the new worker\'s \\$16 plus a \\$1 raise for each of the 9 others. \\$16 is the wage, not the marginal cost, and \\$160 is total labor cost.'
          }
        ]
      }
    },
    {
      id: 'microfac5-outcome',
      type: 'text' as const,
      content: `
## The Monopsony Outcome

Add the mill's MRP to the table.

| Workers | Wage (supply) | MFC | MRP | Hire? (MRP ≥ MFC) |
|---|---|---|---|---|
| 1 | \\$8 | \\$8 | \\$32 | Yes |
| 2 | \\$10 | \\$12 | \\$28 | Yes |
| 3 | \\$12 | \\$16 | \\$24 | Yes |
| 4 | \\$14 | \\$20 | \\$20 | Yes |
| 5 | \\$16 | \\$24 | \\$16 | No |
| 6 | \\$18 | \\$28 | \\$12 | No |

### Two Steps, Two Different Curves
1. **Quantity from MRP = MFC.** The 4th worker's MRP equals MFC at \\$20, so the mill hires **4**.
2. **Wage from supply.** The lowest wage that attracts 4 workers is **\\$14**. The mill pays \\$14, **not** \\$20.

### The Competitive Benchmark
If many firms competed for these workers, each would be a wage taker and hiring would continue while MRP ≥ W. The 5th worker's MRP (\\$16) equals the supply wage (\\$16), so a competitive market would employ **5 workers at \\$16**.

| Outcome | Workers | Wage | MRP of the last worker |
|---|---|---|---|
| Monopsony | 4 | \\$14 | \\$20 |
| Competitive | 5 | \\$16 | \\$16 |

The monopsony hires **fewer** workers at a **lower** wage, and it pays each worker less than the last worker's MRP. That \\$6 gap between the 4th worker's \\$20 MRP and the \\$14 wage is the source of the mill's extra profit.

### The Graph in Words
Wage on the vertical axis, quantity of labor on the horizontal. MRP slopes down; S slopes up; MFC slopes up more steeply above S. Find **L_m** where MRP crosses MFC. Drop straight **down** from that point to the supply curve and read across: that is the wage **W_m**. The competitive point, where MRP crosses S, has a higher wage W_c and a larger quantity L_c.
`
    },
    {
      id: 'microfac5-input',
      type: 'input-boxes' as const,
      content: `
**Solve the Monopsony** ✍️

A hospital is the only employer of nurses in a rural county.

| Nurses | Wage needed (supply) | MRP |
|---|---|---|
| 1 | \\$5 | \\$15 |
| 2 | \\$6 | \\$13 |
| 3 | \\$7 | \\$11 |
| 4 | \\$8 | \\$9 |
| 5 | \\$9 | \\$7 |

(Wages and MRP are in hundreds of dollars per week.)

1) What is the MFC of the 3rd nurse?

2) How many nurses does the hospital hire?

3) What wage does it pay?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '3', '7'],
        hint1: 'Total labor cost goes from 2 × 6 to 3 × 7.',
        hint2: 'MFC runs 5, 7, 9, 11, 13. Hire while MRP is at least MFC.',
        hint3: 'Read the wage from the supply column at that number of nurses.',
        explanation: '1) Total labor cost rises from 12 to 21, so MFC = 9. 2) MRP ≥ MFC for nurses 1 to 3 (11 ≥ 9), but the 4th nurse\'s MRP of 9 is below her MFC of 11, so the hospital hires 3. 3) The supply wage for 3 nurses is 7. A competitive market would hire 4 at a wage of 8.'
      }
    },
    {
      id: 'microfac5-dwl-minwage',
      type: 'text' as const,
      content: `
## Monopsony vs. Competition: Deadweight Loss

Use a linear version so the areas are easy to compute. Supply is **W = 10 + 0.5L**, so **MFC = 10 + L**, and **MRP = 40 − L** (wages in dollars per hour, L in workers).

| Step | Monopsony | Competitive |
|---|---|---|
| Quantity | MRP = MFC: 40 − L = 10 + L, so **L = 15** | MRP = S: 40 − L = 10 + 0.5L, so **L = 20** |
| Wage (from supply) | 10 + 0.5(15) = **\\$17.50** | 10 + 0.5(20) = **\\$20** |
| MRP of last worker | 40 − 15 = \\$25 | \\$20 |

The workers between 15 and 20 would each produce more (MRP) than the wage needed to attract them (supply), yet they are not hired. The lost surplus is the triangle between MRP and S from L = 15 to L = 20:

DWL = ½ × (20 − 15) × (\\$25 − \\$17.50) = ½ × 5 × \\$7.50 = **\\$18.75** per hour

## A Minimum Wage in a Monopsony

In a competitive labor market, a binding minimum wage **reduces** employment (see Labor Markets, Part 1). In a monopsony it can **raise both the wage and employment**.

### Why
A minimum wage of W_min means the firm pays W_min to everyone up to the number of workers willing to work at W_min. Over that range, hiring one more worker no longer forces a raise for the others, so **MFC becomes flat at W_min**. The monopsony's reason for holding back hiring disappears.

### The Linear Example
Monopsony: L = 15 at \\$17.50. Competitive: L = 20 at \\$20.

| Minimum wage | Workers willing (supply) | Workers the firm wants (MRP = W_min) | Employment |
|---|---|---|---|
| \\$19 | 18 | 21 | **18**, more than 15 |
| \\$20 | 20 | 20 | **20**, the competitive outcome |
| \\$22 | 24 | 18 | **18**, still more than 15 |
| \\$25 | 30 | 15 | **15**, back to the monopsony level |

The firm hires the **smaller** of the two numbers: it cannot hire workers who will not come, and it will not hire workers whose MRP is below the wage.

| Where the minimum wage is set | Effect on wage | Effect on employment |
|---|---|---|
| Between W_m (\\$17.50) and W_c (\\$20) | Rises | **Rises** |
| Exactly at W_c | Rises to W_c | Rises to the competitive level; DWL is eliminated |
| Above W_c, up to the MRP at L_m (\\$25) | Rises | Above the monopsony level but below the competitive level |
| Above the MRP at L_m | Rises | Falls **below** the monopsony level |

> ⚠️ **Common trap:** Saying a minimum wage "always causes unemployment." That is the competitive-market result. Against a monopsony, a minimum wage set between W_m and W_c raises employment and **moves the market toward the efficient quantity**.

> 🔑 **AP Connection:** A minimum wage in a monopsony is the standard AP example of a government intervention that can **increase efficiency**. On a free-response question, show the new flat MFC at W_min and state that employment rises toward L_c.
`
    },
    {
      id: 'microfac5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Compared with a perfectly competitive labor market facing the same MRP and supply curves, a monopsony',
            options: [
              'hires fewer workers and pays a lower wage',
              'hires fewer workers but pays a higher wage',
              'hires more workers but pays a lower wage',
              'hires fewer workers and pays the same wage'
            ],
            correctAnswer: 0,
            explanation: 'The monopsony hires where MRP = MFC, which is to the left of where MRP crosses supply, and it pays the supply-curve wage at that smaller quantity. Both employment and the wage are lower than in the competitive market.'
          },
          {
            question: 'At the monopsonist\'s profit-maximizing employment level, the wage it pays is',
            options: [
              'below both its MRP and its MFC',
              'equal to its MFC but below its MRP',
              'equal to its MRP but below its MFC',
              'above its MFC but equal to its MRP'
            ],
            correctAnswer: 0,
            explanation: 'At the hiring level, MRP = MFC, and the wage is read from the supply curve, which lies below MFC. So the wage is below both. Paying the MFC as the wage is the most common monopsony error on the AP exam.'
          },
          {
            question: 'In a monopsony labor market, the monopsony wage is \\$12 and the competitive wage would be \\$15. A minimum wage of \\$14 will most likely',
            options: [
              'raise both the wage and the number of workers hired',
              'raise the wage but lower the number of workers hired',
              'have no effect, because it is below the competitive wage',
              'raise the wage but leave the number of workers unchanged'
            ],
            correctAnswer: 0,
            explanation: 'A minimum wage between the monopsony wage and the competitive wage makes MFC flat at \\$14 over the relevant range, so the firm hires more workers at the higher wage. A floor below the competitive wage is still binding here, because the monopsony was paying only \\$12.'
          }
        ]
      }
    }
  ]
}
