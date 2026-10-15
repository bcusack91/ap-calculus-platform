export const microFactorMarketsPart6Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfac6-intro',
      type: 'text' as const,
      content: `
# 💰 Factor Markets

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Factor Markets Are Tested |
| FRQ Practice 1: An Orchard in a Competitive Labor Market |
| FRQ Practice 2: A Monopsony Table and a Minimum Wage |
| FRQ Practice 3: Choosing Labor and Capital |

> 🔑 **Key Concept:** Factor-market questions on the AP Microeconomics exam come in three shapes: **side-by-side graphs** of a competitive labor market and one firm, **tables** where you compute MRP or MFC and apply MRP = MFC, and **two-input tables** where you apply the least-cost and profit-maximizing rules. Each rewards the same habit: name the rule, then show the numbers that satisfy it.
`
    },
    {
      id: 'microfac6-tested',
      type: 'text' as const,
      content: `
## 📖 How Factor Markets Are Tested

| Task in the prompt | What earns the point | Example |
|---|---|---|
| **Draw** a competitive labor market and a firm | Wage and quantity-of-labor axes on both; market S and D; firm's horizontal line labeled S = MFC = W at the market wage; downward MRP; firm's quantity where MRP = MFC | W₁ carried across with a dashed line |
| **Draw** a monopsony | MRP down; S up; MFC above S and steeper; L_m where MRP = MFC; W_m read from **S** at L_m | W_m below the MRP = MFC point |
| **Calculate** MRP or MFC | The change in total revenue or total labor cost | "TLC rises from \\$14 to \\$24, so MFC = \\$10" |
| **Determine** hiring | The comparison of MRP with MFC | "MRP of \\$14 ≥ MFC of \\$12, so hire the 4th worker" |
| **Explain** a change | The curve that shifts or the movement along it | "Higher wage: movement up the MRP curve" |

### Habits That Save Points
1. Write the rule before the number: "hire where MRP = MFC."
2. In a monopsony, the wage comes from the **supply** curve, never from MFC or MRP.
3. A change in the wage is a **movement along** MRP. A change in the product price or in productivity **shifts** MRP.
4. For two inputs, check **both** conditions: ratios equal (least cost) and ratios equal to 1 (profit maximizing).
`
    },
    {
      id: 'microfac6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice 1: An Orchard in a Competitive Labor Market

**Prompt.** Sunfield Orchard sells apples in a perfectly competitive market for \\$0.50 per pound and hires pickers in a perfectly competitive labor market where the wage is \\$15 an hour.

| Pickers | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| MP (pounds per hour) | 60 | 50 | 40 | 30 | 20 | 10 |

**(a)** Draw correctly labeled side-by-side graphs for the labor market for pickers and for Sunfield Orchard. Show the market wage and the number of pickers the orchard hires, labeled q₁.

**(b)** Calculate the MRP of the 4th picker.

**(c)** How many pickers does Sunfield hire? Explain.

**(d)** What is the marginal factor cost of the 5th picker?

**(e)** Fewer seasonal workers arrive this year, and the market wage rises to \\$20. How many pickers does Sunfield hire now? On your graph, is this a shift of the orchard's MRP curve or a movement along it?

### Model Answers

**(a)** Left graph: Wage and Quantity of labor axes; downward D_L and upward S_L crossing at \\$15. Right graph: horizontal line at \\$15 labeled **S = MFC = W**, a downward-sloping **MRP = D** curve, and q₁ where MRP crosses MFC.

**(b)** MRP = MP × P = 30 × \\$0.50 = **\\$15**.

**(c)** The MRP column is \\$30, \\$25, \\$20, \\$15, \\$10, \\$5. Hire while MRP ≥ MFC = \\$15: **4 pickers**. The 5th picker's MRP (\\$10) is below the \\$15 wage.

**(d)** **\\$15.** In a competitive labor market the firm is a wage taker, so MFC = W.

**(e)** **3 pickers** (MRP of \\$20 for the 3rd picker equals the new wage). The MFC line moves up to \\$20, and the orchard moves **along** its unchanged MRP curve.

### Scoring Notes
- In (a), the firm's line must be horizontal at the market wage. Drawing an upward-sloping supply on the firm graph describes a monopsony, not a wage taker.
- In (c), "4" alone usually earns no credit; the comparison of MRP with the wage is the explanation.
- In (e), shifting MRP left loses the point: the price of apples and the pickers' productivity did not change.
`
    },
    {
      id: 'microfac6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Practice 1, the price of apples rises from \\$0.50 to \\$0.75 a pound while the wage stays at \\$15. How many pickers does Sunfield hire?',
            options: [
              '5',
              '4',
              '6',
              '3'
            ],
            correctAnswer: 0,
            explanation: 'At \\$0.75 the MRP column becomes \\$45, \\$37.50, \\$30, \\$22.50, \\$15 and \\$7.50. MRP is at least \\$15 for the first five pickers, so the orchard hires 5. A higher product price shifts MRP right.'
          },
          {
            question: 'Which feature of the orchard graph shows that Sunfield is a wage taker?',
            options: [
              'A horizontal line at the market wage',
              'A downward-sloping MRP curve for pickers',
              'An upward-sloping MFC curve above supply',
              'A wage read from the market supply curve'
            ],
            correctAnswer: 0,
            explanation: 'A wage taker can hire any number of pickers at the market wage, so its labor supply and MFC are one horizontal line. Every firm has a downward-sloping MRP, and an MFC above supply belongs to a monopsony.'
          },
          {
            question: 'A student answers part (e) by shifting the orchard\'s MRP curve to the left. Why does this lose the point?',
            options: [
              'The wage changed, and a wage change is a movement along the MRP curve',
              'The MRP curve can shift only when the market supply of labor changes',
              'Orchards hire pickers by the season, so their MRP curve cannot move',
              'A higher wage shifts MRP right, since each picker is now paid more'
            ],
            correctAnswer: 0,
            explanation: 'MRP depends on the pickers\' marginal product and the price of apples, and neither changed. The higher wage moves the MFC line up, and the orchard moves along its MRP curve to fewer pickers.'
          }
        ]
      }
    },
    {
      id: 'microfac6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice 2: A Monopsony Table and a Minimum Wage

**Prompt.** Lakeview Cannery is the only employer in a remote town. The table shows the wage needed to attract each number of workers and each worker's MRP.

| Workers | Wage (supply) | Total labor cost | MFC | MRP |
|---|---|---|---|---|
| 1 | \\$6 | \\$6 | \\$6 | \\$20 |
| 2 | \\$7 | \\$14 | \\$8 | \\$18 |
| 3 | \\$8 | \\$24 | \\$10 | \\$16 |
| 4 | \\$9 | \\$36 | \\$12 | \\$14 |
| 5 | \\$10 | \\$50 | \\$14 | \\$12 |
| 6 | \\$11 | \\$66 | \\$16 | \\$10 |

**(a)** Calculate the MFC of the 3rd worker.

**(b)** How many workers does the cannery hire, and what wage does it pay? Explain.

**(c)** If this labor market were perfectly competitive, how many workers would be hired, and at what wage?

**(d)** The government sets a minimum wage of \\$10. How many workers does the cannery hire now? Explain.

**(e)** Does the minimum wage in (d) increase or decrease allocative efficiency in this market?

### Model Answers

**(a)** Total labor cost rises from 2 × \\$7 = \\$14 to 3 × \\$8 = \\$24, so MFC = **\\$10**.

**(b)** Hire while MRP ≥ MFC. The 4th worker's MRP (\\$14) exceeds MFC (\\$12), but the 5th worker's MRP (\\$12) is below MFC (\\$14). The cannery hires **4 workers** and pays the supply wage for 4, **\\$9**.

**(c)** Hire while MRP ≥ the supply wage: the 5th worker's MRP (\\$12) is above \\$10, but the 6th worker's MRP (\\$10) is below \\$11. **5 workers at \\$10.**

**(d)** At a \\$10 minimum, MFC is \\$10 for each of the first 5 workers, because 5 people will work for \\$10 and no raises are needed. MRP is at least \\$10 through the 5th worker, so the cannery hires **5**. Hiring a 6th would require raising everyone to \\$11.

**(e)** **Increases.** Employment rises from 4 to the competitive level of 5, which removes the deadweight loss.

### Scoring Notes
- In (b), a wage of \\$12 (the MFC) or \\$14 (the MRP) earns no credit; the wage comes from the supply column.
- In (d), the explanation must say why employment rises: the minimum wage makes MFC constant at \\$10.
`
    },
    {
      id: 'microfac6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Practice 2, at the cannery\'s profit-maximizing employment, how much less than the last worker\'s MRP is the wage?',
            options: [
              '\\$5',
              '\\$3',
              '\\$2',
              '\\$0'
            ],
            correctAnswer: 0,
            explanation: 'The 4th worker\'s MRP is \\$14 and the wage is \\$9, a gap of \\$5. \\$3 is the gap between MFC and the wage, \\$2 is the gap between MRP and MFC, and \\$0 would describe a competitive market.'
          },
          {
            question: 'Suppose the minimum wage in FRQ Practice 2 were \\$13 instead of \\$10. How many workers would the cannery hire, and at what wage?',
            options: [
              '4 workers at \\$13',
              '5 workers at \\$13',
              '6 workers at \\$13',
              '4 workers at \\$9'
            ],
            correctAnswer: 0,
            explanation: 'With a \\$13 floor, MFC is flat at \\$13, and MRP is at least \\$13 only through the 4th worker (\\$14); the 5th worker\'s MRP of \\$12 is below it. Employment stays at the monopsony level of 4 while the wage rises to \\$13, because this floor is above the competitive wage of \\$10.'
          }
        ]
      }
    },
    {
      id: 'microfac6-frq3',
      type: 'text' as const,
      content: `
## FRQ Practice 3: Choosing Labor and Capital

**Prompt.** Copperline Brewing hires workers at **\\$10 an hour** and rents kettles at **\\$25 an hour** in competitive factor markets. It sells its output in a competitive market for **\\$1 per unit**.

| Units | MP_L | MP_K |
|---|---|---|
| 1 | 30 | 100 |
| 2 | 25 | 75 |
| 3 | 20 | 50 |
| 4 | 15 | 25 |
| 5 | 10 | — |

Use the table to answer the questions below. Remember the two conditions:
- **Least cost:** MP_L/P_L = MP_K/P_K.
- **Profit maximizing:** MRP_L/P_L = MRP_K/P_K = 1.
`
    },
    {
      id: 'microfac6-input',
      type: 'input-boxes' as const,
      content: `
**Solve FRQ Practice 3** ✍️

1) If Copperline hires 3 workers, how many kettles make its input mix least-cost?

2) What is the hourly cost of that combination, in dollars?

3) How many workers does Copperline hire to maximize profit?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '105', '5'],
        hint1: 'The 3rd worker gives 20 ÷ \\$10 = 2 units per dollar. Which kettle gives 2 per dollar?',
        hint2: '3 × \\$10 + 3 × \\$25.',
        hint3: 'With a \\$1 price, MRP_L = MP_L. Find the worker whose MRP equals the \\$10 wage.',
        explanation: '1) The 3rd kettle gives 50 ÷ \\$25 = 2, matching the 3rd worker\'s 20 ÷ \\$10 = 2, so 3 kettles. 2) \\$30 + \\$75 = \\$105. 3) The 5th worker\'s MRP is 10 × \\$1 = \\$10 = P_L, so MRP_L/P_L = 1. The matching capital level is 4 kettles (MRP_K = \\$25 = P_K), so the profit-maximizing mix is 5 workers and 4 kettles, costing \\$150 an hour.'
      }
    }
  ]
}
