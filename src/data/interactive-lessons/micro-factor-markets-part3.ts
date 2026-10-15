export const microFactorMarketsPart3Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfac3-intro',
      type: 'text' as const,
      content: `
# 💰 Factor Markets

**Part 3 of 7 — The Firm in a Competitive Factor Market**

---

| Section |
|---------|
| 📖 The Wage Taker and the Side-by-Side Graph |
| The Hiring Rule with a Table |
| Movement Along MRP vs. a Shift of MRP |
| Capital and Land Follow the Same Rule |

> 🔑 **Key Concept:** In a perfectly competitive labor market, the market sets the wage and each firm is a **wage taker**. The firm can hire as many workers as it wants at that wage, so its **marginal factor cost (MFC) equals the wage** and its labor supply curve is a horizontal line. It hires where **MRP = MFC = W**.
`
    },
    {
      id: 'microfac3-wage-taker',
      type: 'text' as const,
      content: `
## 📖 The Wage Taker and the Side-by-Side Graph

A competitive labor market has many firms hiring the same kind of worker, and each firm is too small to move the wage. The picture mirrors the perfect-competition product graphs you have already drawn.

### The Labor Market Graph (Left)
- Vertical axis: **Wage**. Horizontal axis: **Quantity of labor** for the whole market (capital **Q_L** or **L**).
- Market demand for labor **D_L** slopes down (it adds up all firms' MRP curves). Market supply **S_L** slopes up.
- They cross at the market wage **W₁** and market employment **Q₁**.

### The Firm Graph (Right)
- Same wage scale on the vertical axis. Horizontal axis: workers hired by **one** firm (lowercase **q** or **l**).
- Carry W₁ across with a dashed line. That horizontal line is the firm's labor supply, labeled **S = MFC = W**.
- The firm's **MRP** curve slopes down (it is the firm's demand for labor, D = MRP).
- The firm hires **q₁** where MRP crosses MFC.

### Why MFC Equals the Wage
If the wage is \\$120 a day, hiring one more worker adds exactly \\$120 to total labor cost. The firm does not have to raise anyone else's pay to attract that worker, because the market wage already draws all the workers it wants.

| Workers hired | Wage | Total labor cost | MFC |
|---|---|---|---|
| 1 | \\$120 | \\$120 | \\$120 |
| 2 | \\$120 | \\$240 | \\$120 |
| 3 | \\$120 | \\$360 | \\$120 |
| 4 | \\$120 | \\$480 | \\$120 |

> 🔑 **AP Connection:** Label the firm's horizontal line with all three names, **S = MFC = W** (or at least MFC = W). The market graph sets the wage; the firm graph shows how many workers one firm hires. A firm in a competitive labor market can never change the wage by hiring more or fewer workers.
`
    },
    {
      id: 'microfac3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On the side-by-side graphs for a perfectly competitive labor market, what does the horizontal line on the firm\'s graph represent?',
            options: [
              'The labor supply it faces and its marginal factor cost',
              'The firm\'s demand for labor at each possible wage',
              'The market supply of labor at every level of output',
              'The marginal revenue product of the last worker hired'
            ],
            correctAnswer: 0,
            explanation: 'The firm can hire any number of workers at the market wage, so its labor supply is horizontal at W and MFC = W. The firm\'s demand for labor is its downward-sloping MRP curve, and market supply belongs on the left-hand graph.'
          },
          {
            question: 'A wage-taking firm pays \\$18 an hour. It hires a 12th worker. By how much does its total labor cost rise?',
            options: [
              '\\$18',
              '\\$216',
              '\\$198',
              '\\$36'
            ],
            correctAnswer: 0,
            explanation: 'In a competitive labor market, MFC equals the wage, so total labor cost rises by exactly \\$18. \\$216 is the total cost of all 12 workers, and \\$198 is the cost of the first 11.'
          }
        ]
      }
    },
    {
      id: 'microfac3-hiring-rule',
      type: 'text' as const,
      content: `
## The Hiring Rule with a Table

Greenleaf Landscaping mows lawns in a competitive market at **\\$30 per lawn** and hires crew members in a competitive labor market at **\\$120 a day**. Because both markets are competitive, MRP = MP × P and MFC = W.

| Crew member | MP (lawns per day) | MRP = MP × \\$30 | MFC = W | Hire? |
|---|---|---|---|---|
| 1 | 8 | \\$240 | \\$120 | Yes: adds \\$120 to profit |
| 2 | 7 | \\$210 | \\$120 | Yes: adds \\$90 |
| 3 | 6 | \\$180 | \\$120 | Yes: adds \\$60 |
| 4 | 5 | \\$150 | \\$120 | Yes: adds \\$30 |
| 5 | 4 | \\$120 | \\$120 | Yes: adds \\$0 (indifferent) |
| 6 | 3 | \\$90 | \\$120 | **No:** loses \\$30 |

### The Rule for Tables
**Hire every worker whose MRP is at least the MFC, and stop before the first worker whose MRP is below it.** Greenleaf hires **5**. When a worker's MRP exactly equals MFC, AP answers count that worker as hired, because MRP = MFC is the profit-maximizing condition.

### Why Not Hire Where MRP Is Largest?
The first crew member adds the most revenue, but the second still adds \\$90 more to revenue than to cost. Stopping at one worker would leave \\$90 + \\$60 + \\$30 of profit on the table. The firm maximizes **total** profit, so it keeps hiring as long as each worker pays for himself or herself.
`
    },
    {
      id: 'microfac3-input',
      type: 'input-boxes' as const,
      content: `
**Apply the Hiring Rule** ✍️

Use the Greenleaf Landscaping table (\\$30 per lawn).

1) How many crew members does Greenleaf hire if the market wage is \\$150 a day?

2) How many does it hire if the wage is \\$210 a day?

3) The price of mowing rises to \\$40 per lawn while the wage stays at \\$120. How many does it hire now?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '6'],
        hint1: 'Count the workers whose MRP is at least \\$150.',
        hint2: 'Only the workers with MRP of \\$210 or more are hired.',
        hint3: 'Recompute MRP as MP × \\$40: 320, 280, 240, 200, 160, 120.',
        explanation: '1) MRP is at least \\$150 for workers 1 to 4. 2) Workers 1 and 2 have MRP of \\$240 and \\$210. 3) At \\$40 per lawn the 6th worker\'s MRP is 3 × \\$40 = \\$120, equal to the wage, so Greenleaf hires 6.'
      }
    },
    {
      id: 'microfac3-move-shift',
      type: 'text' as const,
      content: `
## Movement Along MRP vs. a Shift of MRP

The input exercise shows the two kinds of change. Keep them apart, because AP questions test the difference constantly.

| Change | What moves on the firm graph | Firm's hiring |
|---|---|---|
| Market wage rises (for example, market labor supply falls) | The **MFC = W line moves up**; MRP stays put | Falls: a **movement up along MRP** |
| Market wage falls (for example, immigration raises market labor supply) | The MFC = W line moves down | Rises: a movement down along MRP |
| Price of the product rises | **MRP shifts right** (MP × P is higher for every worker) | Rises at the same wage |
| Workers become more productive (training, better equipment) | **MRP shifts right** (MP is higher) | Rises at the same wage |
| Price of a substitute input (such as a robot) falls | MRP shifts left | Falls |

### Tracing a Shock Through Both Graphs
Suppose a new licensing rule reduces the number of qualified crew members in the region.
1. **Market graph:** S_L shifts left. The market wage rises from \\$120 to, say, \\$150, and market employment falls.
2. **Firm graph:** The S = MFC = W line moves up to \\$150. Greenleaf's MRP has not changed.
3. **Result:** Greenleaf moves up along its MRP curve and cuts its crew from 5 to 4.

> ⚠️ **Common trap:** Shifting the firm's MRP curve when the **wage** changes. A wage change never shifts MRP, because MRP depends only on productivity and the output price. It is the firm's demand curve for labor, and a change in the price of labor is a movement along it.

## Capital and Land Follow the Same Rule

The MRP = MFC rule works for any factor. For capital and land, the "wage" is the **rental price** of one more machine or one more acre for the period.

Greenleaf can rent mowers at **\\$70 a day** in a competitive rental market. With the crew it already has:

| Mower rented | MP (extra lawns) | MRP = MP × \\$30 | MFC (rental price) | Rent it? |
|---|---|---|---|---|
| 1 | 6 | \\$180 | \\$70 | Yes |
| 2 | 4 | \\$120 | \\$70 | Yes |
| 3 | 2 | \\$60 | \\$70 | No |

Greenleaf rents **2 mowers**. A farmer renting land does the same thing: rent another acre while the acre's MRP is at least its rent.

> 🔑 **AP Connection:** One rule covers every factor: a profit-maximizing firm employs a factor up to the point where **MRP = MFC**. In a competitive factor market, MFC is simply the factor's market price.
`
    },
    {
      id: 'microfac3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A drop in the number of qualified electricians raises the market wage for electricians. On the graph of one electrical contractor that is a wage taker, what happens?',
            options: [
              'The MFC = W line moves up and the firm hires fewer along its MRP curve',
              'The MRP curve shifts left and the firm hires fewer at the old wage',
              'The MRP curve shifts right, because each electrician now earns more',
              'Its MFC line moves up, but it keeps the same number of workers'
            ],
            correctAnswer: 0,
            explanation: 'The higher market wage moves the firm\'s horizontal MFC line up, and the firm moves up along its unchanged MRP curve to hire fewer electricians. A wage change does not shift MRP, which depends on productivity and the product price.'
          },
          {
            question: 'Which change would shift a competitive firm\'s demand curve for labor to the right?',
            options: [
              'A rise in the price of the good that the workers produce',
              'A fall in the market wage paid to this type of worker',
              'A rise in the number of workers looking for this job',
              'A fall in the price of a robot that does the same task'
            ],
            correctAnswer: 0,
            explanation: 'MRP = MP × P, so a higher output price raises MRP for every worker and shifts labor demand right. A lower wage or more job seekers move the firm along its MRP curve, and a cheaper substitute robot shifts labor demand left.'
          },
          {
            question: 'A farmer can rent extra acres at \\$200 each per season. The 10th acre adds 50 bushels and corn sells for \\$5 a bushel in a competitive market. Should the farmer rent the 10th acre?',
            options: [
              'Yes, since its MRP of \\$250 is above its \\$200 rent',
              'No, since its MP of 50 bushels is below its \\$200 rent',
              'Yes, since its \\$5 price is above its marginal cost',
              'No, since rent is a cost that the farmer should avoid'
            ],
            correctAnswer: 0,
            explanation: 'The acre\'s MRP is 50 × \\$5 = \\$250, which exceeds the MFC of \\$200, so renting it adds \\$50 to profit. Comparing bushels with dollars mixes units, and the product price alone does not tell you the value of the acre.'
          }
        ]
      }
    }
  ]
}
