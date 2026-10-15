export const microFactorMarketsPart4Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfac4-intro',
      type: 'text' as const,
      content: `
# 💰 Factor Markets

**Part 4 of 7 — Choosing Inputs: Least-Cost and Profit-Maximizing Rules**

---

| Section |
|---------|
| 📖 The Least-Cost Rule: Marginal Product per Dollar |
| A Worked Input Table |
| The Profit-Maximizing Rule |
| When an Input Price Changes |

> 🔑 **Key Concept:** A firm that uses labor **and** capital asks two questions. **Least cost:** is it producing its output as cheaply as possible? Yes when the last dollar spent on each input buys the same extra output, **MP_L/P_L = MP_K/P_K**. **Profit maximizing:** is it using the right amount of each input? Yes when each input's MRP equals its price, **MRP_L/P_L = MRP_K/P_K = 1**.
`
    },
    {
      id: 'microfac4-least-cost',
      type: 'text' as const,
      content: `
## 📖 The Least-Cost Rule: Marginal Product per Dollar

Comparing marginal products alone is misleading, because inputs have different prices. A machine that adds 40 units is not a better deal than a worker who adds 16 units if the machine costs three times as much. The fair comparison is **output per dollar**.

$$\\frac{MP_L}{P_L} \\;=\\; \\frac{MP_K}{P_K}$$

- **MP_L** = marginal product of the last unit of labor; **P_L** = the wage.
- **MP_K** = marginal product of the last unit of capital; **P_K** = the rental price of capital.

### What to Do When the Ratios Differ

| Situation | What it means | How to lower cost |
|---|---|---|
| MP_L/P_L > MP_K/P_K | A dollar on labor buys more output than a dollar on capital | Shift spending **toward labor** and away from capital |
| MP_L/P_L < MP_K/P_K | A dollar on capital buys more output | Shift spending **toward capital** and away from labor |
| MP_L/P_L = MP_K/P_K | No reallocation can raise output for the same cost | Least-cost combination reached |

**Why the ratios move toward each other:** as the firm adds labor, diminishing marginal returns lower MP_L, so MP_L/P_L falls. As it cuts capital, the last remaining machine is more productive, so MP_K/P_K rises. Shifting dollars closes the gap.

> 🔑 **AP Connection:** This is the same logic as the consumer's utility-maximizing rule, MU_x/P_x = MU_y/P_y, with "output" in place of "utility." If you can do one, you can do the other.
`
    },
    {
      id: 'microfac4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A firm\'s last worker adds 30 units of output and costs \\$15 an hour. Its last machine adds 60 units and rents for \\$20 an hour. To produce the same output at a lower cost, the firm should',
            options: [
              'use more capital and less labor',
              'use more labor and less capital',
              'keep its current input mix',
              'use more of each input it hires'
            ],
            correctAnswer: 0,
            explanation: 'Labor gives 30 ÷ \\$15 = 2 units per dollar and capital gives 60 ÷ \\$20 = 3 units per dollar. Moving dollars from labor to capital raises output at the same cost, so the same output can be made more cheaply. Keeping the mix ignores the gap, and buying more of both raises cost.'
          },
          {
            question: 'A firm is producing its output at the lowest possible cost when',
            options: [
              'the last dollar spent on each input adds the same amount of output',
              'every input adds the same amount of output at the margin',
              'it spends the same number of dollars on every input',
              'each input\'s price equals its own marginal product'
            ],
            correctAnswer: 0,
            explanation: 'The least-cost rule compares output per dollar: MP_L/P_L = MP_K/P_K. Equal marginal products ignore that the inputs have different prices, and equal spending has no special meaning.'
          }
        ]
      }
    },
    {
      id: 'microfac4-table',
      type: 'text' as const,
      content: `
## A Worked Input Table

Threadline prints T-shirts. It hires workers at **\\$8 an hour** and rents screen-printing machines at **\\$16 an hour**, both in competitive factor markets. To keep the arithmetic simple, the table treats each input's marginal product as depending only on how many units of that input the shop uses.

| Units | MP_L (shirts) | MP_L / P_L | MP_K (shirts) | MP_K / P_K |
|---|---|---|---|---|
| 1 | 20 | 2.5 | 48 | 3 |
| 2 | 16 | **2** | 40 | 2.5 |
| 3 | 12 | 1.5 | 32 | **2** |
| 4 | 10 | 1.25 | 24 | 1.5 |
| 5 | 8 | 1 | 16 | 1 |
| 6 | 6 | 0.75 | 12 | 0.75 |

### Step 1: Spot an Inefficient Mix
Suppose Threadline spends **\\$64** an hour on 4 workers (\\$32) and 2 machines (\\$32).
- Last worker: MP_L/P_L = 10 ÷ \\$8 = **1.25** shirts per dollar.
- Last machine: MP_K/P_K = 40 ÷ \\$16 = **2.5** shirts per dollar.
- Capital is the better deal at the margin, so move dollars from labor to capital.

### Step 2: Reallocate the Same \\$64
Drop 2 workers (saves \\$16) and rent 1 more machine (costs \\$16). Spending stays at \\$64.
- Output lost: the 4th and 3rd workers' MP, 10 + 12 = **22** shirts.
- Output gained: the 3rd machine's MP, **32** shirts.
- Net: **10 more shirts** for the same cost.

### Step 3: Check the New Mix
With **2 workers and 3 machines**: MP_L/P_L = 16 ÷ \\$8 = 2 and MP_K/P_K = 32 ÷ \\$16 = 2. The ratios are equal, so no further shift helps. Output is 36 + 120 = **156** shirts, the most that \\$64 an hour can buy from this table.

### Other Least-Cost Combinations
Every row pair with equal ratios is the cheapest way to make its own level of output.

| Workers | Machines | Equal ratio | Total cost per hour |
|---|---|---|---|
| 1 | 2 | 2.5 | \\$8 + \\$32 = \\$40 |
| 2 | 3 | 2 | \\$16 + \\$48 = \\$64 |
| 3 | 4 | 1.5 | \\$24 + \\$64 = \\$88 |
| 5 | 5 | 1 | \\$40 + \\$80 = \\$120 |
`
    },
    {
      id: 'microfac4-input',
      type: 'input-boxes' as const,
      content: `
**Find the Least-Cost Mix** ✍️

A bakery hires workers at **\\$10 an hour** and rents ovens at **\\$20 an hour**.

| Units | MP_L (loaves) | MP_K (loaves) |
|---|---|---|
| 1 | 40 | 100 |
| 2 | 30 | 80 |
| 3 | 20 | 60 |
| 4 | 15 | 40 |
| 5 | 10 | 30 |

1) What is MP_L/P_L for the 2nd worker (loaves per dollar)?

2) If the bakery hires 2 workers, how many ovens make it a least-cost combination?

3) What is the total hourly cost of that combination, in dollars?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '3', '80'],
        hint1: 'Divide the 2nd worker\'s MP by the wage.',
        hint2: 'Find the oven whose MP_K ÷ \\$20 equals your answer to question 1.',
        hint3: 'Workers × \\$10 plus ovens × \\$20.',
        explanation: '1) 30 ÷ \\$10 = 3 loaves per dollar. 2) The 3rd oven gives 60 ÷ \\$20 = 3, so 2 workers and 3 ovens satisfy MP_L/P_L = MP_K/P_K. 3) 2 × \\$10 + 3 × \\$20 = \\$80.'
      }
    },
    {
      id: 'microfac4-profit-max',
      type: 'text' as const,
      content: `
## The Profit-Maximizing Rule

The least-cost rule says **how** to mix inputs. It does not say **how much** to produce. For that, bring in the output price and use MRP.

$$\\frac{MRP_L}{P_L} \\;=\\; \\frac{MRP_K}{P_K} \\;=\\; 1$$

Each ratio equal to 1 means **MRP_L = P_L** and **MRP_K = P_K**: every input is hired up to the point where its MRP equals its MFC, the rule from Part 3 applied to two inputs at once.

### Threadline at a \\$1 Shirt Price
If each shirt sells for \\$1 in a competitive market, MRP = MP × \\$1, so MRP/P has the same values as the MP/P columns above.

| Combination | MRP_L / P_L | MRP_K / P_K | Least cost? | Profit maximizing? |
|---|---|---|---|---|
| 2 workers, 3 machines | 2 | 2 | Yes | **No:** each input still returns \\$2 per \\$1 spent |
| 4 workers, 2 machines | 1.25 | 2.5 | No | No |
| 5 workers, 5 machines | 1 | 1 | Yes | **Yes** |

At 2 workers and 3 machines, one more dollar on either input brings in two dollars of revenue, so Threadline should **expand both**. It keeps going until each ratio falls to 1, at **5 workers and 5 machines**, where the 5th worker's MRP (\\$8) equals the wage and the 5th machine's MRP (\\$16) equals its rent.

> ⚠️ **Common trap:** Thinking that equal ratios mean the firm is done. Least cost is **necessary** for profit maximization but **not sufficient**. A firm can make the wrong amount of output in the cheapest possible way. Profit maximization needs the ratios equal **and** equal to 1.

## When an Input Price Changes

Suppose the wage rises. MP_L/P_L falls, so at the old mix a dollar on capital now buys more output: the firm **substitutes capital for labor**. What happens to labor demand when the price of **capital** changes depends on how the inputs are related.

| Price of capital falls, and capital is a... | Example | Effect on demand for labor |
|---|---|---|
| **Substitute** for labor | Self-checkout kiosks replace cashiers | Demand for labor **decreases** (shifts left) |
| **Complement** to labor | Cheaper delivery vans for drivers | Demand for labor **increases** (shifts right) |

A rise in the price of capital reverses each arrow. This is one of the labor-demand shifters from Part 1, now with the reason behind it.
`
    },
    {
      id: 'microfac4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A competitive firm finds that MRP_L/P_L = MRP_K/P_K = 2 at its current input mix. What should it do to raise its profit?',
            options: [
              'Hire more labor and rent more capital',
              'Keep the same amounts of both inputs, since the ratios are equal',
              'Use less labor and less capital until each ratio falls to 1',
              'Shift spending from labor to capital until both equal 1'
            ],
            correctAnswer: 0,
            explanation: 'Each dollar spent on either input brings in two dollars of revenue, so the firm should use more of both until each ratio falls to 1. Equal ratios mean the mix is least-cost, not that the amount is right, and cutting inputs would push the ratios up, not down.'
          },
          {
            question: 'A firm sells its output for \\$2 per unit, pays a wage of \\$10 and rents capital for \\$20. At which marginal products is it maximizing profit?',
            options: [
              'MP_L = 5 and MP_K = 10',
              'MP_L = 10 and MP_K = 20',
              'MP_L = 5 and MP_K = 5',
              'MP_L = 20 and MP_K = 10'
            ],
            correctAnswer: 0,
            explanation: 'Profit maximization needs MRP_L = \\$10 and MRP_K = \\$20. With a \\$2 price, MP_L × \\$2 = \\$10 gives MP_L = 5, and MP_K × \\$2 = \\$20 gives MP_K = 10. Marginal products of 10 and 20 make each MRP twice its input price, so the firm should hire more.'
          },
          {
            question: 'Robotic welders and human welders are substitutes in production. If the rental price of robotic welders falls, the demand for human welders',
            options: [
              'decreases',
              'increases, since welding output becomes cheaper',
              'stays the same, since the wage has not changed',
              'increases, since robots make welders more productive'
            ],
            correctAnswer: 0,
            explanation: 'When a substitute input becomes cheaper, firms replace some labor with it, so labor demand shifts left. Labor demand would rise only if the robots were a complement that raised each welder\'s marginal product, and a wage change is not needed for the demand curve to shift.'
          }
        ]
      }
    }
  ]
}
