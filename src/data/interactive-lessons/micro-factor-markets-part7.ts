export const microFactorMarketsPart7Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfac7-intro',
      type: 'text' as const,
      content: `
# 💰 Factor Markets

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Whole Topic on One Page |
| A Five-Step Checklist |
| What Each Change Does |
| Mixed Review |

> 🔑 **Key Concept:** Every factor-market question reduces to **one rule**: employ a factor until its **MRP equals its MFC**. The product market tells you how to compute MRP (MP × P or MP × MR). The factor market tells you how to compute MFC (the wage, or the change in total labor cost). The supply curve tells a monopsony what wage to pay. With two inputs, the same rule becomes MRP_L/P_L = MRP_K/P_K = 1.
`
    },
    {
      id: 'microfac7-summary',
      type: 'text' as const,
      content: `
## 📖 The Whole Topic on One Page

### The Four Combinations of Markets

| Product market → / Factor market ↓ | Competitive product market (MR = P) | Price maker in its product market (MR < P) |
|---|---|---|
| **Competitive labor market** (MFC = W) | MRP = MP × P; hire where MP × P = W | MRP = MP × MR (falls faster); hire where MRP = W, fewer workers |
| **Monopsony** (MFC > W) | MRP = MP × P; hire where MRP = MFC; pay the supply wage | MRP = MP × MR; hire where MRP = MFC; pay the supply wage |

### The Key Formulas

| Concept | Formula | Part |
|---|---|---|
| Marginal revenue product | MRP = MP × MR = ΔTR ÷ ΔL | 1, 2 |
| Marginal factor cost | MFC = ΔTLC ÷ ΔL | 3, 5 |
| Hiring rule (any factor) | MRP = MFC | 1, 3 |
| Least-cost combination | MP_L/P_L = MP_K/P_K | 4 |
| Profit-maximizing combination | MRP_L/P_L = MRP_K/P_K = 1 | 4 |
| Monopsony wage | Read from supply at L where MRP = MFC | 5 |

### Competitive Labor Market vs. Monopsony

| Feature | Competitive (wage taker) | Monopsony |
|---|---|---|
| Firm's labor supply | Horizontal at the market wage | Upward-sloping market supply |
| MFC | Equal to W | Above W, steeper than supply |
| Employment | Where MRP = W | Where MRP = MFC (fewer workers) |
| Wage | Market wage | From supply at L_m (lower) |
| Efficiency | Efficient | Deadweight loss |
| Binding minimum wage | Lowers employment | Can raise employment (if set between W_m and W_c) |

## A Five-Step Checklist
1. **Identify both markets.** Is the firm a price taker for its output? A wage taker for its labor?
2. **Compute MRP.** MP × P for a price taker; ΔTR ÷ ΔL when the price falls with output.
3. **Compute MFC.** The wage for a wage taker; ΔTLC for a monopsony.
4. **Apply MRP = MFC.** In a table, hire every unit with MRP ≥ MFC.
5. **Read the wage.** Market wage for a wage taker; the supply curve at that quantity for a monopsony.
`
    },
    {
      id: 'microfac7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A firm is the only seller of its product but hires workers in a perfectly competitive labor market. Which describes its MRP and MFC of labor?',
            options: [
              'MRP = MP × MR, and MFC = W',
              'MRP = MP × P, and MFC = W',
              'MRP = MP × MR, and MFC > W',
              'MRP = MP × P, and MFC > W'
            ],
            correctAnswer: 0,
            explanation: 'As a monopolist it must cut its price to sell more, so MRP = MP × MR. As a wage taker it pays the market wage for each extra worker, so MFC = W. MFC above the wage would describe a monopsony.'
          },
          {
            question: 'A firm is at its least-cost combination of labor and capital, and MRP_L/P_L = MRP_K/P_K = 0.8. To maximize profit, it should',
            options: [
              'use less of both inputs',
              'use more of both inputs, since the ratios are equal',
              'shift spending from capital toward labor until both equal 1',
              'keep its inputs, since it is already producing at least cost'
            ],
            correctAnswer: 0,
            explanation: 'A ratio of 0.8 means each input\'s last dollar brings in only 80 cents of revenue, so MRP is below the input price. Cutting both inputs raises their marginal products and pushes each ratio up to 1. Least cost alone does not guarantee maximum profit.'
          },
          {
            question: 'In which labor market can a minimum wage raise both the wage and the number of workers employed?',
            options: [
              'A monopsony market with a single dominant employer',
              'A perfectly competitive market with many employers',
              'A competitive market where the floor is below equilibrium',
              'A competitive market where firms sell to a single buyer'
            ],
            correctAnswer: 0,
            explanation: 'A minimum wage set between the monopsony wage and the competitive wage makes MFC flat, so a monopsony hires more workers at the higher wage. In a competitive market a binding floor lowers employment, and a floor below equilibrium changes nothing.'
          }
        ]
      }
    },
    {
      id: 'microfac7-changes',
      type: 'text' as const,
      content: `
## What Each Change Does

| Change | Firm's MRP curve | Firm's MFC line (wage taker) | Firm's hiring |
|---|---|---|---|
| Product price rises | Shifts right | Unchanged | Rises |
| Workers' productivity rises | Shifts right | Unchanged | Rises |
| Price of a substitute input falls | Shifts left | Unchanged | Falls |
| Price of a complementary input falls | Shifts right | Unchanged | Rises |
| Market labor supply rises (wage falls) | Unchanged | Moves down | Rises: movement along MRP |
| Market labor supply falls (wage rises) | Unchanged | Moves up | Falls: movement along MRP |
| Product market becomes a monopoly | Lower and steeper (MP × MR) | Unchanged | Falls |
| Minimum wage between W_m and W_c (monopsony) | Unchanged | MFC becomes flat at W_min | Rises |

### Five Errors That Cost the Most Points
1. Using **MP × P** for a firm whose price falls as it sells more.
2. Paying a monopsony's workers the **MFC** or the **MRP** instead of the supply wage.
3. Shifting MRP when only the **wage** changed.
4. Stopping at equal ratios: least cost is **necessary but not sufficient** for maximum profit.
5. Saying a minimum wage always **reduces** employment, which ignores monopsony.
`
    },
    {
      id: 'microfac7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculation Drill** ✍️

1) A wage-taking firm sells its output for \\$4 in a competitive market. Its 6th worker's MP is 12 units. What is that worker's MRP, in dollars?

2) A monopsonist pays \\$20 to each of 5 workers. To hire a 6th, it must pay all 6 workers \\$22. What is the MFC of the 6th worker, in dollars?

3) At a firm's least-cost mix, the last worker adds 18 units and costs \\$6 an hour, and the last machine adds 60 units. What is the machine's hourly rental price, in dollars?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['48', '32', '20'],
        hint1: 'MRP = MP × P for a price taker.',
        hint2: 'Total labor cost goes from 5 × \\$20 to 6 × \\$22.',
        hint3: 'At least cost, 18 ÷ \\$6 must equal 60 ÷ P_K.',
        explanation: '1) 12 × \\$4 = \\$48. 2) Total labor cost rises from \\$100 to \\$132, so MFC = \\$32: the new worker\'s \\$22 plus a \\$2 raise for each of the other 5. 3) Labor gives 18 ÷ \\$6 = 3 units per dollar, so 60 ÷ P_K = 3 and P_K = \\$20.'
      }
    },
    {
      id: 'microfac7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bakery with a brand-name product sees its total revenue rise from \\$200 to \\$260 when it adds a 4th worker. The market wage is \\$50. Should it hire the 4th worker?',
            options: [
              'Yes, since that worker adds \\$60 of revenue and costs \\$50',
              'No, since that worker\'s revenue share is \\$65, above \\$50',
              'Yes, since total revenue of \\$260 is above the \\$50 wage',
              'No, since a price maker hires only where MRP equals price'
            ],
            correctAnswer: 0,
            explanation: 'MRP = ΔTR = \\$260 − \\$200 = \\$60, which is more than the \\$50 MFC, so hiring adds \\$10 to profit. Average revenue per worker and total revenue are not the right comparisons; the decision is always MRP against MFC.'
          },
          {
            question: 'Which change shifts a wage-taking firm\'s labor demand curve instead of moving the firm along it?',
            options: [
              'Training that raises each worker\'s output',
              'A rise in the market wage for its workers',
              'An inflow of workers that lowers the wage',
              'A new minimum wage above the market wage'
            ],
            correctAnswer: 0,
            explanation: 'Training raises MP, so MRP = MP × P rises for every worker and the curve shifts right. The other three all change the wage the firm pays, which moves it along its unchanged MRP curve.'
          },
          {
            question: 'A monopsonist hires 30 workers where MRP = MFC = \\$24. The supply curve shows that 30 workers will work for \\$16. Which statement is correct?',
            options: [
              'It pays \\$16, and each worker\'s pay is less than the \\$24 MRP',
              'It pays \\$24, because the wage must equal MFC at that quantity',
              'It pays \\$20, the average of the MRP and the supply wage',
              'It pays \\$16, and the market has no deadweight loss'
            ],
            correctAnswer: 0,
            explanation: 'A monopsonist sets employment where MRP = MFC and pays the lowest wage that attracts that many workers, \\$16 from the supply curve. Employment is below the competitive level, so there is a deadweight loss.'
          }
        ]
      }
    }
  ]
}
